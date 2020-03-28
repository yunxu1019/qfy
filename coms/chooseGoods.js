function main() {
    var page = view();
    drag.on(page);
    page.initialStyle = "transform:scale(1.2);opacity:.1";
    page.innerHTML = chooseGoods;
    var $scope = render(page, {
        input,
        keyword: '',
        padding,
        goods: [],
        png: img,
        list: lattice,
        block,
        checkbox,
        btn: button,
        checker,
        checked: [],
        save() {
            cast(page, 'choosed', this.checked);
            this.close();
        },
        check(g) {
            g.checked = !g.checked;
            $scope.checked = this.goods.filter(g => g.checked);
        },
        close() {
            remove(page);
        },
        search() {
            $scope.goods = data.lazyInstance("search", {
                keyword: this.keyword
            }, 600);
        }
    }).$scope;
    console.log($scope);
    return page;
}