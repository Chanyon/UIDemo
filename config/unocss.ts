import Unocss from "unocss/vite"
import { presetAttributify, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons"
const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const icons = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",   
  "share",
];

const safelist = [
  ...colors.map(v => `bg-${v}-500`),
  ...colors.map(v => `hover:bg-${v}-700`),
  ...icons.map(v => `i-ic-baseline-${v}`),
];

export default () => {
  return Unocss({
    safelist,
    presets: [presetUno(),presetAttributify(),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle'
        },
      })
    ],
  })
}