import Button from "../index";
import {describe, expect, test} from "vitest";
import {shallowMount} from "@vue/test-utils";

describe("Button component", () => {
  test("mount vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      }
    });
    expect(wrapper.text()).toBe("Button");
  });

  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      }
    });
    expect(wrapper.classes().map(v => v.replace("\n","")).includes("bg-blue-500")).toBe(true);
  });

  test("red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      }
    });
    expect(wrapper.classes().map(v => v.replace("\n","")).includes("bg-red-500")).toBe(true);
  });
});