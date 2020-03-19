function main() {
    var page = div();
    page.innerHTML = price;
    render(page, {
        btn: button,
        input,
        prices: [],
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
    console.log(page);
    return page;
}