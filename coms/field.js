return function () {
    var e = zimoli$field.apply(this, arguments);
    e.break = Infinity;
    // e.setAttribute('nocolon', '');
    return 0;
}