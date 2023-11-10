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
            s.go(0)
            s.play();
            return s;
        },
    },
    {//1
        name: "图片广告",
        id: "image",
        data: {},
        com() {
            var block = document.createElement("img");
            block.setAttribute("ng-src", "data.url");
            render(block, this);
            block.ondragstart = e => e.preventDefault();
            return block;
        },
    },
    {//2
        name: "搜索",
        id: "search",
        data: {},
        com: searchbar,
    },
    {//3
        name: "图片导航",
        id: "nav",
        data: [],
        com: navbar,
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
    },
    {//5
        name: "商品",
        id: "goods",
        data: {},
        com: goodsview,
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
    },
    {//8
        name: "富文本",
        id: "rich",
        data: {},
        com: richview,
    },
    {//9
        name: "热区",
        id: "link",
        data: {},
        com: linkview,
    },
];
var comsMap = Object.create(null);
coms.forEach(c => comsMap[c.id] = c);
function main() {
    var qfydata = window.qfydata;
    var page = document.createElement("list");
    page.innerHTML = preview;
    page.setAttribute("ng-src", "item in items");
    if (!window.preventFrame) css(page, "padding-top:40px");
    page.setAttribute("ng-style", "{background:config.background}");
    var flush = function (data) {
        if (data.blocks) $scope.items = JSAM.parse(data.blocks);
        if (data.name || data.title) {
            document.title = data.name || data.title;
        }
        if (data.background) {
            document.body.style.background = data.background;
        }
        render.refresh();
    }
    window.onmessage = function (event) {
        var { data } = event;
        flush(data);
    };

    var opener = window.opener || window.parent;
    if (opener !== window) opener.postMessage('needdata');
    else if (isEmpty(qfydata) && location.hash) {
        var hash = location.hash.slice(1);
        serve.servp(hash).then(function (data) {
            flush(data);
        });
    }
    var $scope = render(page, {
        list,
        config: qfydata.config || qfydata,
        com(elem) {
            care(elem, function (data) {
                var com = comsMap[data.id];
                var block = extend({}, com);
                block.data = data.data;
                var page = block.com(block);
                remove(elem.children);
                appendChild(elem, page);
                return page;
            });
        },
        items: typeof qfydata.blocks === 'string' ? JSAM.parse(qfydata.blocks) : qfydata.blocks || []
    }).$scope;
    appendChild(document.body, page);
    return page;
}