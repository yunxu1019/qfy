function main(params) {
    if (!params.data) {
        params.data = {};
    }
    var data = params.data;
    var page = div();
    page.innerHTML=richview;
    page.setAttribute("ng-style","{background:data.background}")
    render(page, {
        data,
        text(elem) {
            elem.setValue = function (v) {
                this.innerHTML = v;
            };
        }
    });
    return page;
}