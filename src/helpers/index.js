function debounce(fn, delay) {
    var timer = null;
    return function () {
        var _self = this,
            arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(_self, arg);
        }, delay);
    };
}

function throttle(fn, delay) {
    var lastTime = 0;
    return function () { 
        var nowTime = new Date().getTime();
        if(nowTime - lastTime > delay) {
            fn.apply(this, arguments);
            lastTime = nowTime;
        }
    };
}

export { debounce, throttle };

