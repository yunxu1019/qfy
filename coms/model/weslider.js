function main(params) {
    if (!params.data) {
        params.data = [{}];
    }
    var page = view();
    page.innerHTML = weslider;
    render(page, {
        images: params.data,
        pic: zimoli$image,
        // field,
        input,
        wepic,
        select,
        a: button,
        delete: drop,
        vbox(a) {
            autodragchildren(a, a);
            return a;
        },
        padding,
        block,
        remove(i) {
            console.log(i);
            this.images.splice(i, 1);
        },
        addImage() {
            this.images.push({});
        }
    });
    return page;
}