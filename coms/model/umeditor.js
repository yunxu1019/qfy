var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "umeditor/themes/default/css/umeditor.css";
document.head.appendChild(link);
await script("umeditor/third-party/jquery.min.js", "jQuery")
await script("umeditor/third-party/template.min.js", "etpl");
await script("umeditor/umeditor.config.js", "UMEDITOR_CONFIG");
window.modules = {
    getScreenPosition,
    init,
};
return script("umeditor/umeditor.js", "UM");
