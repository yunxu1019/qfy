init("welist");
function main() {
    var page = div();
    page.innerHTML = template;
    renderWithDefaults(page, {
        title: document.title,
    });
    return page;
}