function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    extendIfNeeded(data, {
        background: "#fff3"
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
                editor = umeditor.createEditor(elem, {});
                onremove(elem, function () {
                    if (editor) editor.destroy();
                });
                editor.addListener("contentChange", function () {
                    var content = editor.getContent();
                    elem.value = content;
                    dispatch(elem, 'change');
                    render.refresh();
                });
                if (value) editor.ready(_ => editor.setContent(value));
                return elem;
            });
            var value = '', editor;
            elem.setValue = function (v) {
                if (editor) {
                    editor.ready(_ => editor.getContent() !== v && editor.setContent(v));
                } else {
                    value = v;
                }
            };
        },

    });
    return page;
}