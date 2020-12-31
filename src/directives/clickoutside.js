// v-clickoutside指令
const nodeList = [];
const ctx = "clickoutside";
let seed = 1;
function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    console.log("mouseup", mouseup);
  };
}
/**
 * @description 点击元素外部触发
 * @example <div v-clickoutside='handleClose'></div>
 */
export default {
  bind(el, binding, vnode) {
    console.log("binding", binding);
    console.log("vnode", vnode);
    el[ctx] = {
      id: seed++,
      methodName: binding.expression,
      bindingFn: binding.value,
      documentHandler: createDocumentHandler(el, binding, vnode)
    };
    nodeList.push(el[ctx]);
  }
};
