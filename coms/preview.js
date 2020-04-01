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
var qfydata = window.qfydata;
var comsMap = Object.create(null);
coms.forEach(c => comsMap[c.id] = c);
function main() {
    var page = document.createElement('list');
    page.innerHTML = preview;
    page.setAttribute("ng-src", "item in items");
    page.setAttribute("ng-style", "{background:config.background}");
    window.onmessage = function (event) {
        $scope.items = event.data.blocks;
        var config = $scope.config = event.data.config;
        document.title = config.name || config.title;
        render.refresh();
    };
    if (window.opener) window.opener.postMessage('needdata');
    var $scope = render(page, {
        list,
        config: qfydata.config || {},
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
        items: qfydata.blocks || []
    }).$scope;
    appendChild(document.body, page);
    return page;
}