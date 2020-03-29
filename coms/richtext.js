function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    extendIfNeeded(data, {
        background: "#fff"
    });
    var page = view();
    page.innerHTML = richtext;
    render(page, {
        model,
        field,
        data,
        field1: {
            key: "background",
            type: "color",
            name: "背景颜色"
        },
        editor: null,
        richtext(elem) {
            onappend(elem, function () {
                var editor = umeditor.createEditor(elem, {});
                onremove(elem, function () {
                    if (editor) editor.destroy();
                    console.log("editor destroy!");
                });
                editor.addListener("contentChange", function () {
                    var content = editor.getContent();
                    data.content = content;
                    render.refresh();
                });
                return elem;
            });
        },

    });
    return page;
}