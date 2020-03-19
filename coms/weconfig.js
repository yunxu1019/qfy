function main() {
    var page = view();
    page.draggable = false;
    page.innerHTML = weconfig;
    render(page, {
        field,
        data: {},
        model,
        fields: [
            { name: "页面名称", type: "text", require: true },
            { name: "页面描述", type: "text" },
            { name: "分享图片", type: "image" },
            { name: "背景颜色", type: "color" },
            { name: "底部菜单", type: "radio", options: ["显示", "不显示"] },
        ]
    });
    return page;
}