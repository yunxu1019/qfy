function main() {
    var page = view();
    page.innerHTML = wetext;
    render(page, {
        field,
        data: {},
        fields: [
            {
                name: "　　文本",
                type: "text",
            },
            {
                name: "字体大小",
                type: "radio",
                options: ["大", "中", "小"]
            },
            {
                name: "文本颜色",
                type: "color",

            },
            {
                name: "背景颜色",
                type: "color",

            },
            {
                name: "文本位置",
                type: "radio",
                options: ["居左", "居中", "居右"]
            },
            {
                name: "设置链接",
                type: "select",
                options: ["--"]
            },
        ]
    });
    return page;
}