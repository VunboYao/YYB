function yybAnimation(element, target) {
    /* remove Timer */
    if (element.timerId) {
        clearInterval(element.timerId)
    }
    element.timerId = setInterval(() => {
        let current = element.offsetLeft;
        let step = 30;

        /* 判断左右移动方向 */
        if (current > target) {
            step = -Math.abs(step);
        }

        /* 判断临界点 */
        if (Math.abs(current - target) <= Math.abs(step)) {
            element.style.left = target + 'px';
            clearInterval(element.timerId);
            return
        }
        current += step;
        element.style.left = current + 'px';
    },20)
}
