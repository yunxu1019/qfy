function main(elem = div()) {
    var { data, field } = elem;
    elem.innerHTML = cubeview;
    render(elem, {
        data,
        grid(elem) {
            elem = grid(elem);
            care(elem, () => {
                this.setGrid(1);
            });
            return elem;
        },
        setGrid(item) {
            var gridelem = this.gridelem;
            var id = item;
            inc = 0;
            gridelem.forEachCell((point) => {
                inc++;
                var { target } = point;
                if (inc === id || item === point) {
                    data[field.key] = inc;
                    var size = 750;
                    var width = point.width * size;
                    var height = point.height * size;
                    point.target.innerHTML = `<a>${+width.toFixed(2)}像素 × ${+height.toFixed(2)}像素</a>`;
                    addClass(point.target, 'activate');
                } else {
                    if (target.innerHTML) target.innerHTML = ``;
                    removeClass(point.target, 'activate');
                }
            });
            dispatch(elem, 'change');
        },
        field
    });

    return elem;
}