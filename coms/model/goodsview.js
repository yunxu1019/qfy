function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    var elem = div();
    elem.innerHTML = goodsview;
    render(elem, {
        data,
        png: pic,
        padding,
        block,
        a: button,
        open(g) {
            return window.open(g.detailurl);
        },
        list: lattice
    });
    return elem;
}