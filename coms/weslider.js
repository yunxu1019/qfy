function main() {
    var page = view();
    page.innerHTML = weslider;
    render(page, {
        images: [{}],
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
            this.images.splice(i, 1);
        },
        addImage() {
            this.images.push({});
            console.log(this.images);
        }
    });
    return page;
}