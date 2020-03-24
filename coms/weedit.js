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
            if (!c.com) {
                alert(`${c.name}暂不可用！`);
                return;
            }

            var block = extend({}, c);
            this.blocks.push(block);
            this.active(block);
        },
        mobile(e) {
            autodragchildren(e, e);
            vbox(e);
            return e;
        },
        remove(i) {
            this.blocks.splice(i, 1);
        },
        com(c) {
            care(c, function (component) {
                var com = component.com();
                remove(c.children);
                var after = document.createElement('after');
                after.innerHTML = `<x>${component.name}</x><x ng-click="dispatch(this.parentNode.parentNode,'delete')" class="close">×</x>`;
                render(after, {
                    dispatch
                });
                appendChild(c, com, after);
            }, false);
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
                config: wenav,
            },
            {
                name: "魔方",
                com: slider,
                config: wecube,
            },
            {
                name: "商品",
                com: slider,
                config: wegoods,
            },
            {
                name: "商品分区",
            },
            {
                name: "文本",
                com: slider,
                config: wetext
            },
            {
                name: "富文本",
                com: slider,
            },
            {
                name: "热区",
                com: slider,
                config: welink,
            },
        ],
    }).$scope;
    $scope.addBlock($scope.coms[9]);
    return page;
}