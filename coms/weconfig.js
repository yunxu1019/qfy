function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    var page = view();

    page.draggable = false;
    page.innerHTML = weconfig;
    render(page, {
        field,
        data,
        model,
        fields: [
            { name: "页面名称", type: "input", key: "name", require: true },
            { name: "页面描述", type: "text", key: "desc" },
            { name: "分享图片", type: "image", key: "logo" },
            { name: "背景颜色", type: "color", key: "background" },
            { name: "底部菜单", type: "radio", key: "hideMenu", options: ["显示", "不显示"] },
        ]
    });
    return page;
}