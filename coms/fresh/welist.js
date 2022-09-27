var fields = refilm`
标题/name
描述/desc
创建时间/createTime date
二维码/_id qrcode
`;
var getPreview = function (data) {
    return document.baseURI.replace(/[\?#][\s\S]*$/, '').replace(/[^\/]+$/, '') + `view:${data._id}`;
};

fields.push({
    name: "操作", options: [
        {
            name: "复制",
            do(data) {
                var span = document.createElement('span');
                span.setAttribute('user-select', 'all');
                setOpacity(span, 0);
                css(span, "position:absolute;top:-1000000px;left:-1000000px;")
                span.innerHTML = getPreview(data);
                document.body.appendChild(span);
                var selection = document.getSelection();
                var ranges = [];
                for (var cx = 0, dx = selection.rangeCount; cx < dx; cx++) {
                    var range = selection.getRangeAt(cx);
                    ranges.push(range);
                }
                selection.removeAllRanges();
                document.getSelection().setBaseAndExtent(span, 0, span, 1);
                var res = document.execCommand('copy');
                selection.removeAllRanges();
                for (var range of ranges) {
                    selection.addRange(range);
                }
                if (res) alert("已复制");
                remove(span);
            },
        },
        {
            name: "查看",
            do(data) {
                var url = getPreview(data);
                mobile.open(url);
            },
        },
        {
            name: "编辑",
            do(data) {
                popup("/home/edit", data);
            },
        },
        {
            name: "删除",
            type: 'danger',
            confirm: true,
            do(d) {
                if (this.confirm !== d) {
                    this.confirm = d;
                    setTimeout(_ => {
                        this.confirm = true;
                        render.refresh();
                    }, 2000);
                    return;
                }
                data.from('delete', { _id: d._id, rev: d._rev }).loading_promise.then(function () {
                    // page.refresh();
                });
            },
        },
    ]
})
console.log(fields)
function main() {
    var page = div();
    page.innerHTML = welist;
    renderWithDefaults(page, {
        fields,
        edit() {
            popup('/home/edit');
        },
        qrcode(e) {
            e.innerHTML = `<svg style="width:16px;vertical-align:middle" data-v-79c8069a="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="qrcode" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-qrcode fa-w-14"><path data-v-79c8069a="" fill="currentColor" d="M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z" class=""></path></svg>`;
            var b = button(e, 'anchor');
            css(b, "vertical-align:middle;line-height:16px");
            var e = qrcode(getPreview(e.data));
            css(e, 'position:absolute;width:200px;height:200px;')
            select(b, e);
            return b;
        },
        data: [],
        padding,
    });
    var $scope = page.$scope;
    page.refresh = function () {
        $scope.data = data.from("query", function (d) {
            d = d.map(a => a.doc);
            d.forEach(a => {
                if (a.config) {
                    Object.assign(a, a.config);
                    delete a.config;
                }
            });
            return d;
        });
        console.log($scope.data)
    };
    page.refresh();
    return page;
}