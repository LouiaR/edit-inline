import simulateSubmitAction from "./simulateSubmitAction";
import { useAppContext } from "./";

const useSubmit = (newValue, num) => {
  const { state, setState } = useAppContext();
  return {
    submit: async () => {
      const previousValue = state.text;
      if (previousValue.trim() !== newValue.trim()) {
        setState((prevState) => ({
          ...prevState,
          text: newValue,
          isLoading: true,
          isEditing: false,
        }));

        try {
          const result = await simulateSubmitAction(num);
          setState((prevState) => ({
            ...prevState,
            isLoading: false,
            message: result.message,
          }));
        } catch (error) {
          setState((prevState) => ({
            ...prevState,
            error: true,
            text: previousValue,
            message: error.error,
            isLoading: false,
          }));
        } finally {
          setTimeout(() => {
            setState((prevState) => ({
              ...prevState,
              error: false,
              message: "",
            }));
          }, 3500);
        }
      } else {
        setState((prevState) => ({ ...prevState, isEditing: false }));
      }
    },
  };
};

export default useSubmit;
