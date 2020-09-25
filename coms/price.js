function main({ data, field }) {
    if (!data[field.key]) data[field.key] = [];

    var page = div();
    page.innerHTML = price;
    render(page, {
        btn: button,
        button,
        input,
        prices: data[field.key],
        value: ['', ''],
        add() {
            var { value } = this;
            if (!value[0]) {
                alert("请输入价格！"); return 0;
            }
            if (!value[1]) {
                return 2;
            }
            this.prices.push(value.join('~'));
            this.value = ['', ''];
            return 0;
        }
    });
    return page;
}