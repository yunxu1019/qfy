function main() {
    var page = view();
    page.innerHTML = weslider;
    render(page, {
        images: [],
        pic:zimoli$image,
        // field,
        input,
        wepic,
        select,
        a: button,
        vbox,
        addImage() {
            this.images.push({});
            console.log(this.images);
        }
    });
    return page;
}