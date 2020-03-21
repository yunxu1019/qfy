function main() {
    var page = view();
    page.innerHTML = weimage;
    render(page, {
        wepic,
        padding,
        data: {},
    });
    return page;
}