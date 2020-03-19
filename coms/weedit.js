function main() {
    var page = vbox();
    page.innerHTML = weedit;
    var $scope = render(page, {
        a: button,
        btn: button,
        blocks: [],
        active(b) {
            if (this.blocks.active === b) {
                this.blocks.active = null;
                var pg = weconfig;
            } else {
                this.blocks.active = b;
                var pg = b.config;
            }
            remove(this.right.children);
            if (pg) appendChild(this.right, pg());
        },
        addBlock(c) {
            var block = extend({}, c);
            this.blocks.push(block);
            this.active(block);
        },
        mobile(e) {
            autodragchildren(e, e);
            vbox(e);
            return e;
        },
        com(c) {
            care(c, function (component) {
                var com = component.com();
                remove(c.children);
                var after = document.createElement('after');
                after.innerHTML = `<x>${component.name}</x>`;
                appendChild(c, com, after);
            });
        },
        coms: [
            {
                name: "轮播图",
                com: slider,
                config: weslider,
            },
            {
                name: "图片广告",
                com: slider,
                config: weimage,
            },
            {
                name: "搜索",
                com: searchbar,
                config: wesearch,
            },
            {
                name: "图片导航",
                com: slider,
            },
            {
                name: "魔方",
                com: slider,
            },
            {
                name: "商品",
                com: slider,
            },
            {
                name: "商品分区",
                com: slider,
            },
            {
                name: "文本",
                com: slider,
            },
            {
                name: "富文本",
                com: slider,
            },
            {
                name: "热区",
                com: slider,
            },
        ],
    }).$scope;
    $scope.addBlock($scope.coms[2]);
    return page;
}