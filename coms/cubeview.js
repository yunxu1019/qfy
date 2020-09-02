function main(elem = div()) {
    var { data, field } = elem;
    elem.innerHTML = cubeview;

    var $scope = {
        data,
        grid(elem) {
            care(elem, lazy(() => {
                var inc = 0;
                elem.forEachCell((point) => {
                    var { target } = point;
                    target.innerHTML = `<div class="image" ng-style="{backgroundImage:'url(\\''+image.url+'\\')'}" ></div>`;
                    var imgs = data.cube.imgs;
                    if (!imgs[inc]) imgs[inc] = {};
                    render(target, {
                        image: imgs[inc]
                    });
                    inc++;
                });
                this.setGrid(1);
            }));
            elem = grid(elem);
            return elem;
        },
        setGrid(item) {
            var gridelem = this.gridelem;
            var id = item;
            var inc = 0;
            gridelem.forEachCell((point) => {
                inc++;
                var { target } = point;
                remove(target.querySelectorAll("a"));
                if (inc === id || item === point) {
                    elem.value = inc;
                    var size = 750;
                    var width = point.width * size;
                    var height = point.height * size;
                    var a = document.createElement("a");
                    a.innerHTML = `${+width.toFixed(2)}像素 × ${+height.toFixed(2)}像素`;
                    appendChild(target, a);
                    addClass(point.target, 'activate');
                } else {
                    removeClass(point.target, 'activate');
                }
            });
            dispatch(elem, 'change');
        },
        field
    };
    render(elem, $scope);
    elem.setValue = function (v) {
        if (isFinite(v)) {
            $scope.setGrid(+v);
        }
    };

    return elem;
}