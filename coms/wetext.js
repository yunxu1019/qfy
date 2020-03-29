function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    extendIfNeeded(data, {
        text: "",
        size: 1,
        color: "#333",
        background: "#fff",
        align: "left",
    })
    var page = view();
    page.innerHTML = wetext;
    render(page, {
        field,
        data,
        fields: [
            {
                name: "　　文本",
                type: "text",
                key: "text",
            },
            {
                name: "字体大小",
                type: "radio",
                key: "size",
                options: ["大", "中", "小"]
            },
            {
                name: "文本颜色",
                type: "color",
                key: "color"
            },
            {
                name: "背景颜色",
                type: "color",
                key: 'background',

            },
            {
                name: "文本位置",
                type: "radio",
                key: 'align',
                options: { left: "居左", center: "居中", right: "居右" }
            },
            {
                name: "设置链接",
                type: "select",
                key: 'anchor',
                options: ["--"]
            },
        ]
    });
    return page;
}