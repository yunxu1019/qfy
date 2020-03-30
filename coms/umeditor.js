script("umeditor/third-party/jquery.min.js", "jQuery").then(function () {
    return script("umeditor/third-party/template.min.js", "etpl").loading_promise;
}).then(function () {
    return script("umeditor/umeditor.config.js", "UMEDITOR_CONFIG").loading_promise;
}).then(function () {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "umeditor/themes/default/css/umeditor.css";
    document.head.appendChild(link);
    return script("umeditor/umeditor.js", "UM").loading_promise;
});