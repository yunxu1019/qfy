function main() {
    var page = view();
    page.innerHTML = wenav;
    render(page, {
        goods: [{}],
        wepic,
        btn: button,
        padding,
        vbox(e) {
            autodragchildren(e, e);
            return e;
        },
        add() {
            this.goods.push({});
        },
    });
    return page;
}