function main() {
    var page = div();
    page.innerHTML = wepage;
    var $scope = render(page, {
        title: "清风雨商城",
        list,
        btn: button,
        padding,
        setPage(m) {
            if (this.menus.active === m) return;
            this.menus.active = m;
            var page = m.page();
            remove(this.container.children);
            appendChild(
                this.container,
                page
            );
        },
        edit() {
        },
        menus: [
            {
                name: "微页面",
                page() {
                    var page = welist();
                    care(page, (data) => {
                        var editor = weedit(data);
                        remove(page);
                        var back = document.createElement("back");
                        on("remove")(back, function () {
                            remove(editor);
                            appendChild($scope.container, page);
                            page.refresh();
                        });
                        rootElements.mount(back);
                        appendChild($scope.container, editor);
                    });
                    // once('append')(page, a => cast(page, {}));
                    return page;
                },
            },
            {
                name: "分类",
                page: null,
            },
            {
                name: "个人中心",
                page: null,
            },
            {
                name: "底部菜单",
                page: null,
            },
            {
                name: "装修风格",
                page: null,
            },
        ]
    }).$scope;
    $scope.setPage($scope.menus[0]);
    return page;
}