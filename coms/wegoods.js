function main() {
    var page = view();
    page.innerHTML = wegoods;
    render(page, {
        field,
        data: {},
        padding,
        fields: [
            {
                name: "列表样式",
                options: ["一行两个", "详细列表"],
                type: "radio"
            },
            {
                name: "显示内容",
                options: ["商品描述", "市场价", "购买按钮"],
                type: "checkbox"
            },
            {
                name: "商品来源",
                options: ["商品"],
                msg: "最多显示10个",
                type: "radio"
            }
        ],
        goods: [],
        addImage() {
            chooseFile("image/*").then((files) => {
                var [file] = files;
                var url = URL.createObjectURL(file);
                this.goods.push({
                    imageurl: `url('${url}')`
                });
            });
        }
    });
    return page;
}