function main({ data, field }) {
    if (!data[field.key]) data[field.key] = [];
    var com = div();
    com.innerHTML = hotwords;
    render(com, {
        input,
        hotwords: data[field.key],
        keys: function () {
            return this.hotwords.map((_, i) => i);
        },
        btn: button,
        padding,
        list(e) {
            autodragchildren(e, e);
        },
    });
    return com;
}