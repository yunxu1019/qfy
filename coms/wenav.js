function main(params) {
    var page = view();
    if (!params.data) params.data = [];
    var data = params.data;
    if (!data.length) data.push({});
    page.innerHTML = wenav;
    render(page, {
        goods: data,
        wepic,
        btn: button,
        padding,
        delete: drop,
        remove(i) {
            this.goods.splice(i, 1);
        },
        vbox(e) {
            autodragchildren(e, e, (src, dst) => {
                var a = this.goods.splice(src, 1);
                this.goods.splice(dst, 0, a[0]);
                render.refresh();
            });
            return e;
        },
        add() {
            if(this.goods.length>=5)return alert("最多添加5项")
            this.goods.push({});
        },
    });
    return page;
}