import { defineComponent, PropType,ToRefs } from "vue";
import "uno.css"; //test stderr: unknown test

export type IColor = "black" | "white" | "green" | "red" | "purple";
// export type ISize = "small" | "medium" | "large" | "";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  icon: {
    type: String,
    default: "",
  },
  // size: {
  //   type: String as PropType<ISize>,
  //   default: "",
  // },
}
export default defineComponent({
  name: "BroButton",
  props,
  setup(props,{slots}){
    return () => {
      return (
      <button
      class={`
      py-2 px-4 
      font-semibold 
      rounded-lg shadow-md 
      text-white bg-${props.color}-500 
      border-none cursor-pointer 
      hover:bg-${props.color}-700
      ml-1
      `
    }
      type="button"
      >
        {props.icon !== "" ? (<i class={`i-ic-baseline-${props.icon}`}></i>) : ""}
        {slots.default ? slots.default() : ""}
      </button>
      )
    }
  }
})