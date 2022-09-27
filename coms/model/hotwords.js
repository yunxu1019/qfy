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
        button,
        padding,
        add() {
            this.hotwords.push('');
            var that = this;
            setTimeout(function () {
                var children = that.wordlist.children;
                children[children.length - 1].children[0].focus();
            });
        },
        list(e) {
            autodragchildren(e, e);
        },
    });
    return com;
}