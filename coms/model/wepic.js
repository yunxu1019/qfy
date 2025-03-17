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
            render(elem.children, $scope);
        }
        $scope.data = data;
    });
    return elem;
}