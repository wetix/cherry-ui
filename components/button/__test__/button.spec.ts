import { render, fireEvent } from "@testing-library/svelte";
import Button from "../src/Button.svelte";
import SlotTest from "../../SlotTest/SlotTest.svelte";

describe("Button", () => {
  const props = {
    class: "custom-class",
    name: "test-button",
    label: "Hello World!",
    style: "width: 100px;",
    ref: document.createElement('button') as HTMLButtonElement
  };

  it("should render correctly", () => {
    const result = render(Button, { props });
    expect(() => result).not.toThrow();
  });

  it("should render slots correctly", () => {
    const result = render(SlotTest, {
      props: { Component: Button, props }
    });
    expect(() => result).not.toThrow();
  });

  it("shows proper heading when rendered", () => {
    const {getByRole} = render(Button, { props });
    const button = getByRole("button");

    expect(button.classList).toContain("custom-class");
    expect(button.getAttribute("type")).toEqual("submit");
    expect(button.getAttribute("name")).toEqual(props.name);
    expect(button.getAttribute("style")).toEqual(props.style);
  });

  it("test on click event", () => {
    const {component, getByRole} = render(Button, { props });
    //mock function
    const mock = jest.fn();
    const button = getByRole("button");
    //set event
    component.$on('click', mock);

    //click button
    fireEvent.click(button);
    //test function
    expect(mock).toHaveBeenCalled();
  });
});
