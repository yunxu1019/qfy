function main(elem) {
    care(elem, function (data) {
        elem.innerHTML = wepic;
        field(elem);
        render(elem, {
            pic: image,
            field,
            input,
            select,
            a: button,
            m: data
        });
    });
    return elem;
}