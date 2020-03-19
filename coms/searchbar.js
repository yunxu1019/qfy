function main() {
    var page = div();
    page.innerHTML = searchbar;
    render(page, {
        input
    });
    return page;
}