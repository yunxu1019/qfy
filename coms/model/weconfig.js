
function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    var page = view();
    page.innerHTML = weconfig;
    render(page, {
        field,
        data,
        model,
        fields: configFields,
    });
    return page;
}