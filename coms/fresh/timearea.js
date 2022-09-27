var update = function (e) {
    var n = new Date;
    var t = [n.getHours(), n.getMinutes()].map(a => a <= 9 ? "0" + a : a).join(":");
    if (this.innerText !== t) {
        this.innerText = t;
    }
};
function timearea(e) {
    e.innerHTML = template;
    var timeSpan = e.firstChild;
    var id;
    onmounted(e, function () {
        id = setInterval(update.bind(timeSpan), 30);
    })
    onremove(e, function () {
        clearInterval(id);
    });
    return e;
}