function main() {
    var page = view();
    page.innerHTML = wesearch;
    render(page, {
        field,
        data: {},
        fields: [
            {
                name: "框体样式",
                type: "radio",
                options: [{
                    name: "方角",
                    key: "fj"
                }, {
                    name: "圆形",
                    key: "yx"
                }]
            },
            {
                name: "背景颜色",
                type: "color"
            }, {
                name: "框体颜色",
                type: "color"
            }, {
                name: "文本位置",
                type: "radio",
                options: [{ name: "居左", key: "left" }, { name: "居中", key: "center" }],
            }, {
                name: "文件颜色",
                type: "color"
            },
            {
                name: "搜索热词",
                editor: hotwords,
            },
            {
                name: "搜索热词",
                editor: price
            }
        ]
    });
    return page;
}