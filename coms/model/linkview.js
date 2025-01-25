function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    var page = div();
    page.innerHTML = linkview;
    render(page, {
        data,
        png: pic
    });
    return page;
}