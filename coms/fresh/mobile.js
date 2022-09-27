function mobile() {
    var p = document.createElement("mobile");
    p.innerHTML = template;
    render(p, {
        timearea,
        a: button,
        color,
        close() {
            remove(p);
        },
        config: {
            background: "#323634",
        },
    });
    /**
     * @type {HTMLIFrameElement}
     */
    var frame = p.frame = p.lastChild;
    p.frame.onload = function () {
        var { qfydata } = frame.contentWindow;
        p.$scope.config = extendIfNeeded({}, qfydata.config || qfydata, p.$scope.config);
        render.refresh();
        frame.contentWindow.addEventListener("message", function (event) {
            var data = event.data;
            if (isObject(data)) {
                p.$scope.config = data;
                render.refresh();
            }
        });
    };
    resize.on(p, p.firstChild);
    p.initialStyle = 'margin-right:-400px';
    return p;
}
var targetMap = {}
mobile.open = function (href, target) {
    var p;
    if (target) {
        p = targetMap[target] || this();
        targetMap[target] = p;
    } else {
        p = this();
    }
    p.frame.src = /\:[^\/\\]*$/.test(href) ? href + "." : href + ":.";
    popup(p);
    return p;
};