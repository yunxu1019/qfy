function main() {
    var page = view();
    drag.on(page);
    page.initialStyle = "transform:scale(1.2);opacity:.1";
    page.innerHTML = chooseGoods;
    var buildGoods = function (goods) {
        var goodsMap = {};
        $scope.checked.forEach(function (g) {
            goodsMap[g.sku] = g;
        });
        goods.forEach(g => {
            g.checked = !!goodsMap[g.sku];
        });
        return goods;
    };
    var $scope = render(page, {
        input,
        keyword: '',
        padding,
        goods: [],
        png: pic,
        list: lattice,
        block,
        checkbox,
        btn: button,
        checker,
        checked: [],
        history: data.getInstance("searchHistory"),
        save() {
            cast(page, 'choosed', this.checked);
            this.close();
        },
        check(g) {
            g.checked = !g.checked;
            $scope.checked = this.goods.filter(g => g.checked);
            var words = this.history.slice(0);
            if (!~words.indexOf(this.keyword)) words.push(this.keyword);
            data.setInstance("searchHistory", words, true);
        },
        close() {
            remove(page);
        },
        search(keyword = this.keyword, timeout = 600) {
            if (this.keyword !== keyword) $scope.keyword = keyword;
            $scope.goods = data.lazyInstance("search", {
                keyword: keyword
            }, buildGoods, timeout);
        }
    }).$scope;
    page.setChecked = function (checked) {
        $scope.checked = checked;
        $scope.goods = buildGoods($scope.goods);
    };
    return page;
}