data.setConfig({
    "https://search.jd.com/s_new.php": {
        "search": `cget:.J-goods-list>ul.gl-warp>li[]            ?keyword=:keyword&enc=utf-8&page=1#${serialize({
            sku: "!data-sku",
            spu: "!data-spu",
            pid: "!data-pid",
            detailurl: "a!href",
            imgurl: "img!src",
            price: ".p-price|innerText",
            name: ".p-name>a>em!innerText",
            shop: "a.curr-shop!title",
            desc: ".p-name>a>i!innerText"
        })}`
    },
    "http://efront.cc:5989/data-qfy/": {
        "create": "post ",
        "read": "get :_id",
        "query": "get _all_docs?include_docs=true&limit=501#",
        "update": "put :_id",
        "delete": "delete :_id?_rev=:_rev",
    },
});
on("dragover")(window, e => e.preventDefault());
console.log(cross);
var main = wepage;