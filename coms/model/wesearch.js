function main(params) {
    if (!params.data) params.data = {};
    extendIfNeeded(params.data, {
        value: "",
        hotwords: [""],
        backgroundColor: '#ffffff',
        textAlign: 'left',
        color: "#333",
        borderColor: '#e7e7e7',
        borderRadius: "3px",
    });
    var page = view();
    page.innerHTML = wesearch;
    render(page, {
        field,
        data: params.data,
        fields: [
            {
                name: "框体样式",
                type: "radio",
                key: "borderRadius",
                options: [{
                    name: "方角",
                    key: "3px"
                }, {
                    name: "圆角",
                    key: "20px"
                }]
            },
            {
                name: "背景颜色",
                type: "color",
                key: "backgroundColor"
            }, {
                name: "框体颜色",
                type: "color",
                key: "borderColor"
            }, {
                name: "文本位置",
                type: "radio",
                key: "textAlign",
                options: [{ name: "居左", key: "left" }, { name: "居中", key: "center" }],
            }, {
                name: "文本颜色",
                key: "color",
                type: "color"
            },
            {
                name: "搜索热词",
                key: "hotwords",
                editor: hotwords,
            },
            {
                name: "价格标签",
                key: "price",
                editor: price
            }
        ]
    });
    return page;
}