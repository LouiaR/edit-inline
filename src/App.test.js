import React from "react";
import { shallow  } from "enzyme";
import toJson from "enzyme-to-json";


import CoyoteLogo from "./assets/CSoftware_logo_Neg.svg";
import App, { Logo } from "./App";

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  it("renders App component logo without crashing", () => {
    const wrapper = shallow(<App />);
    const header = <Logo src={CoyoteLogo} alt="logo" />;
    expect(wrapper.contains(header)).toEqual(true);
  });
});

describe("snapshots", () => {
  it("App snapshot", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
