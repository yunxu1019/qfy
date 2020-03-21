function main(elem) {
    care(elem, function (data) {
        elem.innerHTML = wepic;
        field(elem);
        console.log(elem.hastitle)
        render(elem, {
            hastitle: elem.hastitle,
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