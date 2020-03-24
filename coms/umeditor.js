script("third-party/jquery.min.js", "jQuery").then(function () {
    return script("third-party/template.min.js", "etpl").loading_promise;
}).then(function () {
    return script("libs/umeditor.config.js", "UMEDITOR_CONFIG").loading_promise;
}).then(function () {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "libs/themes/default/css/umeditor.css";
    document.head.appendChild(link);
    return script("libs/umeditor.js", "UM").loading_promise;
});