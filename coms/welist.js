function main() {
    var page = div();
    page.innerHTML = welist;
    var getPreview = function (data) {
        return document.baseURI.replace(/[^\/]+$/, '') + `preview.jsp:${data._id}`;
    };
    render(page, {
        btn: button,
        a: button,
        model,
        edit(data = {}) {
            cast(page, data);
        },
        table,
        fields: [
            { name: "标题", key: "config.name" },
            { name: "创建时间", key: "createTime" },
            { name: "商品数", key: "goodsCount" },
            { name: "访客量/浏览量", key: "visitCount" },
            {
                name: "操作", options: [
                    {
                        name: "复制",
                        do(data) {
                            var span = document.createElement('span');
                            setOpacity(span, 0);
                            css(span, "position:absolute;top:-1000000px;left:-1000000px;")
                            span.innerHTML = getPreview(data);
                            document.body.appendChild(span);
                            document.getSelection().setBaseAndExtent(span, 0, span, 1);
                            var res = document.execCommand('copy');
                            if (res) alert("已复制");
                            remove(span);
                        },
                    },
                    {
                        name: "查看",
                        do(data) {
                            var url = getPreview(data);
                            window.open(url);
                        },
                    },
                    {
                        name: "编辑",
                        do(data) {
                            $scope.edit(data);
                        },
                    },
                    {
                        name: "删除",
                        type: 'danger',
                        confirm: true,
                        do(d) {
                            if (this.confirm !== d) {
                                this.confirm = d;
                                setTimeout(_ => {
                                    this.confirm = true;
                                    render.refresh();
                                }, 2000);
                                return;
                            }
                            data.from('delete', { _id: d._id, _rev: d._rev }).loading_promise.then(function () {
                                page.refresh();
                            });
                        },
                    },
                ]
            },
        ],
        data: [],
        padding,
    });
    var $scope = page.$scope;
    page.refresh = function () {
        $scope.data = data.from("query");
    };
    page.refresh();
    return page;
}