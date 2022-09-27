return [
    { name: "页面名称", type: "input", key: "name", require: true },
    { name: "页面描述", type: "text", key: "desc" },
    { name: "分享图片", type: "image", key: "logo", options: { uploadto: '/@/data/qfy-data/' } },
    { name: "背景颜色", type: "color", key: "background" },
    { name: "底部菜单", type: "radio", key: "hideMenu", options: ["显示", "不显示"] },
]