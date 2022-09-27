function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    var page = div();
    page.innerHTML = normaltext;
    page.setAttribute("ng-style", "{color:data.color,background:data.background,textAlign:data.align}");
    render(page, {
        data
    });
    return page;
}