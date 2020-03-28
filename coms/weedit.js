function main() {
    var page = div();
    page.innerHTML = weedit;
    var $scope = render(page, {
        a: button,
        btn: button,
        blocks: [],
        active(b) {
            if (!~this.blocks.indexOf(b)) return;
            var pg;
            if (this.blocks.active === b) {
                this.blocks.active = null;
                pg = weconfig;
            } else {
                this.blocks.active = b;
                pg = b.config;
            }
            remove(this.right.children);
            if (pg) appendChild(this.right, pg(b));
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
            autodragchildren(e, e, (src, dst) => {
                var block = this.blocks.splice(src, 1);
                this.blocks.splice(dst, 0, block[0]);
            });
            return e;
        },
        remove(i) {
            if (this.blocks.active === this.blocks[i]) {
                this.active(this.blocks[i]);
            }
            this.blocks.splice(i, 1);
        },
        com(c) {
            care(c, function (component) {
                var com = component.com(component);
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
            {//0
                name: "轮播图",
                com() {
                    var images = [];
                    var s = slider((i) => {
                        i = i % this.data.length;
                        var d = this.data[i];

                        if (!d) return;
                        var img = images[i];
                        if (img && img.url === d.url) {
                            return img;
                        }
                        if (!d.url) return;
                        var block = document.createElement("div");
                        css(block, {
                            backgroundImage: `url('${d.url}')`
                        });
                        block.url = d.url;
                        images[i] = block;
                        return block;
                    });
                    s.play();
                    return s;
                },
                config: weslider,
            },
            {//1
                name: "图片广告",
                com() {
                    var block = document.createElement("img");
                    block.setAttribute("ng-src", "data.url");
                    render(block, this);
                    return block;
                },
                config: weimage,
            },
            {//2
                name: "搜索",
                com: searchbar,
                config: wesearch,
            },
            {//3
                name: "图片导航",
                com: navbar,
                config: wenav,
            },
            {//4
                name: "魔方",
                com() {
                    var elem = document.createElement("grid");
                    elem.setAttribute("ng-src", "data.cube_data");
                    if (!this.data) this.data = {};
                    var data = this.data;
                    render(elem, {
                        grid,
                        data
                    });
                    care(elem, (a) => {
                        var inc = 0;
                        elem.forEachCell((point) => {
                            var { target } = point;
                            target.innerHTML = `<div class="image" ng-style="{backgroundImage:'url(\\''+image.url+'\\')'}" ></div>`;
                            var imgs = data.cube.imgs;
                            if (!imgs[inc]) imgs[inc] = {};
                            render(target, {
                                image: imgs[inc]
                            });
                            inc++;
                            console.log(target);
                        });
                    });
                    return elem;

                },
                config: wecube,
            },
            {//5
                name: "商品",
                com: slider,
                config: wegoods,
            },
            {//6
                name: "商品分区",
            },
            {//7
                name: "文本",
                com: slider,
                config: wetext
            },
            {//8
                name: "富文本",
                com: slider,
                config: richtext,
            },
            {///9
                name: "热区",
                com: slider,
                config: welink,
            },
        ],
    }).$scope;
    $scope.addBlock($scope.coms[4]);
    return page;
}