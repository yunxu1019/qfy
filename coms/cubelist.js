function main({ field, data }) {
    var elem = div();
    elem.innerHTML = cubelist;
    var $scope = render(elem, {
        grid,
        field,
        data,
        setGrid(g, i) {
            if (i === data[field.key]) return;
            data[field.key] = i;
            dispatch(elem, 'change');
        },
        padding,
        btn: button,
        grids: field.options,
    }).$scope;
    onappend(elem,function(){
        $scope.setGrid(null, data[field.key] || 0);
    });
    return elem;
}