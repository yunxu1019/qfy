function main(params) {
    if (!params.data) params.data = {};
    var page = view();
    page.innerHTML = weimage;
    render(page, {
        wepic,
        padding,
        data: params.data,
    });
    return page;
}