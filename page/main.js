data.setConfig({
    "https://search.jd.com/Search": {
        "search": `get:.J-goods-list>ul.gl-warp>li[]            ?keyword=:keyword&enc=utf-8#${serialize({
            sku: "!data-sku",
            spu: "!data-spu",
            pid: "!data-pid",
            detailurl: "a!href",
            imgurl: "img!source-data-lazy-img",
            price: ".p-price|innerText",
            name: ".p-name>a>em!innerText",
            shop:"a.curr-shop!title",
            desc:".p-name>a>i!innerText"
        })}`
    }
});
var main = wepage;