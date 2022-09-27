function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    var page = div();
    page.innerHTML = linkview;
    render(page, {
        data,
        png:img
    });
    return page;
}