var coms = [
    {//0
        name: "轮播图",
        id: "slider",
        data: [],
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
            s.go(0).play();
            return s;
        },
        config: weslider,
    },
    {//1
        name: "图片广告",
        id: "image",
        data: {},
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
        id: "search",
        data: {},
        com: searchbar,
        config: wesearch,
    },
    {//3
        name: "图片导航",
        id: "nav",
        data: [],
        com: navbar,
        config: wenav,
    },
    {//4
        name: "魔方",
        id: "cube",
        data: {},
        com() {
            var elem = document.createElement("grid");
            elem.setAttribute("ng-src", "data.cube_data");
            if (!this.data) this.data = {};
            var data = this.data;
            care(elem, lazy((a) => {
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
                });
            }));
            render(elem, {
                grid,
                data
            });
            return elem;

        },
        config: wecube,
    },
    {//5
        name: "商品",
        id: "goods",
        data: {},
        com: goodsview,
        config: wegoods,
    },
    {//6
        id: "goods-divide",
        name: "商品分区",
        data: {},

    },
    {//7
        name: "文本",
        id: "text",
        data: {},
        com: normaltext,
        config: wetext
    },
    {//8
        name: "富文本",
        id: "rich",
        data: {},
        com: richview,
        config: richtext,
    },
    {///9
        name: "热区",
        id: "link",
        data: {},
        com: linkview,
        config: welink,
    },
];
var comsMap = Object.create(null);
coms.forEach(c => comsMap[c.id] = c);
function main(params) {
    params = Object.assign({}, params);
    if (typeof params.blocks === 'string') params.blocks = JSAM.parse(params.blocks);
    var page = view();
    page.innerHTML = weedit;
    var $scope = render(page, {
        params,
        linkid: "",
        a: button,
        btn: button,
        config: params.config || {
            background: "#fff",
            hideMenu: 1,
        },
        blocks: (params.blocks || []).map(b => {
            if (!b) b = {};
            var com = comsMap[b.id];
            extendIfNeeded(b, com);
            return b;
        }),
        active(b) {
            var pg;
            if (!b || this.blocks.active === b) {
                this.blocks.active = null;
                b = { data: this.config };
                pg = weconfig;
            } else {
                if (!~this.blocks.indexOf(b)) return;
                this.blocks.active = b;
                pg = b.config;
            }
            remove(this.right.children);
            if (pg) appendChild(this.right, pg(b));
        },
        addBlock(c, index) {
            if (!c.com) {
                alert(`${c.name}暂不可用！`);
                return;
            }

            var block = extend({}, c);
            block.data = JSON.parse(JSON.stringify(c.data || {}));
            if (isFinite(index)) {
                this.blocks.splice(index, 0, block);
            } else {
                this.blocks.push(block);
                setTimeout(function () {
                    page.querySelector(".mobile>:nth-last-child(1)").scrollIntoView();
                }, 10);
            }
            this.active(block);
        },
        addDrag(event) {
            var target = event.target;
            while (target && !/btn/i.test(target.tagName) && target !== this) {
                target = target.parentNode;
            }
            if (!target || target === this) return;
            autodragchildren.hook(event, target, (dist) => {
                this.addBlock(target.c, dist);
                render.refresh();
            });
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
        coms,
        getData() {
            var blocks = this.blocks.map(function (a) {
                return {
                    id: a.id,
                    data: a.data
                };
            });
            return {
                _id: params._id,
                _rev: params._rev,
                createTime: params.createTime || +new Date(),
                updateTime: +new Date,
                config: this.config,
                blocks: JSAM.stringify(blocks)
            };
        },
        save() {
            var d = this.getData();
            var r = data.from(params._rev ? "update" : "create", d);
            r.loading_promise.then(function () {
                history.back();
            });
        },
        cancel() {
            history.back();
        },
        preview() {
            var data = this.getData();
            window.open("view.jsp", "preview");
            window.onmessage = _ => _.source.postMessage(data);
        },
        qr(e) {
            var btn = button(e);
            var that = this;

            serve.servd(function () {
                return that.getData();
            }).then(function (linkid) {
                that.linkid = linkid;
                if (!page.parentNode) {
                    serve.kill(linkid);
                    return;
                }
                var prehref = location.origin + location.pathname.replace(/\/$/, '') + "/view.jsp#" + linkid;
                console.info('扫码链接', prehref);
                var canvas = qrcode(prehref);
                css(canvas, "border:20px solid #fff;outline:1px solid #2cf")
                select(btn, canvas);
            });
        }
    }).$scope;
    $scope.active();
    onremove(page, _ => window.onmessage = null);
    onremove(page, _ => serve.kill($scope.linkid));
    // $scope.addBlock($scope.coms[8]);
    console.log(params, page)

    return page;
}