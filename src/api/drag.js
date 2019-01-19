function inserted(el, binding, vNode) {
  el.setAttribute('style', 'position: fixed; z-index: 9999')
}
// event.clientX、event.clientY 鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动条。
// event.offsetX、event.offsetY 鼠标相对于事件源元素（srcElement）的X,Y坐标，只有IE事件有这2个属性，标准事件没有对应的属性。
// scrollWidth：对象的实际内容的宽度，不包边线宽度，会随对象中内容超过可视区后而变大。
// clientWidth：对象内容的可视区的宽度，不包滚动条等边线，会随对象显示大小的变化而改变。
// offsetWidth：对象整体的实际宽度，包滚动条等边线，会随对象显示大小的变化而改变。
function bind(el, bindding, vNode) {
  el.setAttribute('draggable', true)
  let left, top, width, height
  el._dragstart = function (event) {
    event.stopPropagation()
    left = event.clientX - el.offsetLeft
    top = event.clientY - el.offsetTop
    width = el.offsetWidth
    height = el.offsetHeight
  }
  el._dragEnd = function (event) {
    event.stopPropagation()
    left = event.clientX - left
    top = event.clientY - top
    // 限制拖出边界
    left = Math.min(document.body.clientWidth - width, left)
    left = Math.max(0, left)
    top = Math.min(document.body.clientHeight - height, top)
    top = Math.max(0, top)
    el.style.left = left + 'px'
    el.style.top = top + 'px'
    el.style.width = width + 'px'
    el.style.height = height + 'px'
  }
  el._documentAllowDraop = function (event) {
    event.preventDefault()
  }
  document.body.addEventListener('dragover', el._documentAllowDraop)
  el.addEventListener('dragstart', el._dragstart)
  el.addEventListener('dragend', el._dragEnd)
}

function unbind(el, bindding, vNode) {
  document.body.removeEventListener('dragover', el._documentAllowDraop)
  el.removeEventListener('dragstart', el._dragstart)
  el.removeEventListener('dragend', el._dragEnd)
  delete el._documentAllowDraop
  delete el._dragstart
  delete el._dragEnd
}

export default {
  bind,
  unbind,
  inserted
}