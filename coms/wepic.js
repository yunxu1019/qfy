function main(elem) {
    var $scope = {
        hastitle: elem.hastitle,
        pic: image,
        field,
        input,
        select,
        a: button,
        setData(value) {
            this.data.url = value;
        }
    };
    care(elem, function (data) {
        if (!$scope.hasOwnProperty("data")) {
            $scope.data = data;
            elem.innerHTML = wepic;
            elem = field(elem);
            render(elem, $scope);
        }
        $scope.data = data;
    });
    return elem;
}