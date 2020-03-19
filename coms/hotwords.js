function main() {
    var com = div();
    com.innerHTML = hotwords;
    render(com, {
        input,
        hotwords: [''],
        btn: button,
        padding,
        list(e) {
            autodragchildren(e, e);
        },
    });
    console.log(hotwords);
    return com;
}