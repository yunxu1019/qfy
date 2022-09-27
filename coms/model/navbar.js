function main(params) {
    var page = div();
    if (!params.data) {
        params.data = [];
    }
    var data = params.data;
    page.innerHTML = navbar;
    render(page, {
        navs: data
    });
    return page;
}