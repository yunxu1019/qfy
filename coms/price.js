function main({ data, field }) {
    if (!data[field.key]) data[field.key] = [];

    var page = div();
    page.innerHTML = price;
    render(page, {
        btn: button,
        input,
        prices: data[field.key],
        value: ['', ''],
        add() {
            var { value } = this;
            if (!value[0] || !value[1]) {
                alert("请输入价格！");
                return;
            }
            this.prices.push(value.join('~'));
            this.value = ['', ''];
        }
    });
    return page;
}