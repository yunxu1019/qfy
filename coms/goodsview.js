function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    var elem = div();
    elem.innerHTML = goodsview;
    render(elem, {
        data,
        png: img,
        padding,
        block,
        a:button,
        list: lattice
    });
    return elem;
}