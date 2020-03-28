function main() {
    var page = view();
    page.innerHTML = wegoods;
    var $scope = render(page, {
        field,
        data: {},
        padding,
        fields: [
            {
                name: "列表样式",
                key: 'style',
                options: ["一行两个", "详细列表"],
                type: "radio"
            },
            {
                key: 'content',
                name: "显示内容",
                options: ["商品描述", "市场价", "购买按钮"],
                type: "checkbox"
            },
            {
                name: "　　　　",
                key: "mode",
                options: ["样式1", "样式2"],
                type: "radio"
            },
            {
                name: "商品来源",
                key: "source",
                options: ["商品"],
                msg: "最多显示10个",
                type: "radio"
            }
        ],
        goods: [],
        png:img,
        addImage() {
            var page = chooseGoods();
            care(page, 'choosed', function (goods) {
                $scope.goods = goods;
            });
            popup(page, true);
            // chooseFile("image/*").then((files) => {
            //     var [file] = files;
            //     var url = URL.createObjectURL(file);
            //     this.goods.push({
            //         imageurl: `url('${url}')`
            //     });
            // });
        }
    }).$scope;
    return page;
}