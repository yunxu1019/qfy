function main() {
    var page = view();
    page.innerHTML = weimage;
    render(page, {
        wepic,
        data: {},
    });
    return page;
}