function main({ field, data }) {
    var elem = div();
    elem.innerHTML = cubelist;
    var $scope = {
        grid,
        field,
        data,
        keys() {
            return this.grids.map((_, i) => i);
        },
        setGrid(grid) {
            if (grid === data[field.key]) return;
            elem.value = grid;
            dispatch(elem, 'change');
        },
        padding,
        btn: button,
        grids: field.options,
    };
    render(elem, $scope);
    elem.setValue = function (v) {
        if (v) {
            var value = $scope.grids.map(a => a.id).indexOf(v.id);
            if (value) $scope.setGrid(v);
        }
    };
    return elem;
}