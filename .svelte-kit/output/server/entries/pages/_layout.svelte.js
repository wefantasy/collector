import "clsx";
import { c as pop, p as push } from "../../chunks/index.js";
import "theme-change";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
