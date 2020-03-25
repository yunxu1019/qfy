function main() {
    var pag = view();
    pag.innerHTML = richtext;
    render(pag, {
        model,
        field,
        data: {},
        field1: {
            key: "name",
            type: "color",
            name: "背景颜色"
        },
        richtext(elem) {
            onappend(elem, function () {
                console.log("elem");
                var editor = umeditor.createEditor(elem, {});
                onremove(elem, function () {
                    if (editor) editor.destroy();
                    console.log("editor destroy!");
                });
                return elem;
            });
        },

    });
    return pag;
}