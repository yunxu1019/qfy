function main(elem) {
    var $scope = {
        hastitle: elem.hastitle,
        pic: image,
        field,
        input,
        select,
        data: {},
        a: button,
        setData(value) {
            this.data.url = value;
        }
    };
    elem.innerHTML = wepic;
    render(elem.children, $scope);
    care(elem, function (data) {
        $scope.data = data;
    });
    return elem;
}