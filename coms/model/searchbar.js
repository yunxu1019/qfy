function main(params) {
    if (!params.data) {
        params.data = {};
    }
    var page = div();
    var data = params.data;
    page.innerHTML = searchbar;
    page.setAttribute("ng-style","{backgroundColor:data.backgroundColor,color:data.color}");
    render(page, {
        input,
        data
    });
    return page;
}