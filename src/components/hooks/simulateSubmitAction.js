const simulateSubmitPost = (num) => {
  // reject when num is odd
  return new Promise((resolve, reject) => {
    if (num % 2 !== 0) {
      return setTimeout(() => {
        reject({ error: "Oops! Something has gone terribly wrong!" });
      }, 3500);
    }

    setTimeout(() => {
      resolve({ message: "success" });
    }, 3500);
  });
};

export default simulateSubmitPost;
