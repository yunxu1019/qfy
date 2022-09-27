var getResizer = function (event) {
    var rect = getTargetIn(a => a.hasAttribute('rect'), event.target);
    if (!rect) {
        var elements = document.querySelectorAll("[rect]");
        var temp = getEventRect(event);
        var min, min_area = Infinity;
        [].forEach.call(elements, function (elem) {
            var area = overlap(elem, temp);
            if (area < min_area) {
                min = elem;
                min_area = area;
            }
        });
        if (min_area > 0 && min) {
            rect = min;

        }
        if (!rect) {
            css("body", {
                cursor: ""
            });
            return;
        }
    }
    var fringe = getFringe(rect, event);
    if (!event.which) {
        css("body", {
            cursor: fringe.cursor
        });
    }
    var { resize } = fringe;
    extend(resize, getScreenPosition(rect));
    resize.rect = rect;
    resize.cursor = fringe.cursor;
    return resize;
};
var handle = {
    start(event) {
        event.preventDefault();
        event.moveLocked = true;
        var elem = this.$scope.image;
        if (!elem.hasInstance) return;
        var dragging = elem.dragging = getResizer(event);
        var pos = getScreenPosition(elem);
        var delta = [event.clientX, event.clientY, event.clientX - pos.left, event.clientY - pos.top];
        if (dragging) {
            dragging.clientX = delta[0];
            dragging.clientY = delta[1];
            var limit = dragging.cursor ? [pos.left, pos.top, pos.right, pos.bottom] : [
                pos.left + event.clientX - dragging.left,
                pos.top + event.clientY - dragging.top,
                pos.right + event.clientX - dragging.right,
                pos.bottom + event.clientY - dragging.bottom
            ];
            elem.limit = limit;
            dragging.left -= pos.left;
            dragging.top -= pos.top;
            elem.rect = dragging.rect;
            return;
        }
        if (!elem.$scope.drawing) return;
        var limit = [pos.left, pos.top, pos.right, pos.bottom];
        elem.limit = limit;
        var rect = document.createElement("div");
        rect.setAttribute('rect', '');
        css(rect, {
            top: fromOffset(delta[3]),
            left: fromOffset(delta[2])
        });
        appendChild(elem, rect);
        elem.drawing = { rect, start: delta };

    },
    move(event) {
        event.moveLocked = true;
        var elem = this.$scope.image;
        var { drawing, dragging, limit } = elem;
        if (!dragging && !drawing) return;
        var { clientX, clientY } = event;
        var [minx, miny, maxx, maxy] = limit;
        if (clientX < minx) clientX = minx;
        if (clientY < miny) clientY = miny;
        if (clientX > maxx) clientX = maxx;
        if (clientY > maxy) clientY = maxy;
        if (dragging) {
            dragging.forEach(function (resize) {
                var [key, client, extra] = resize;
                var delta = { clientX, clientY }[client] - dragging[client];
                var style = {};
                if (extra) {
                    var value = dragging[key] + delta;
                    var size = dragging[extra] - delta;
                    if (size < 0) {
                        value = value + size;
                        size = -size;
                    }
                    style[key] = fromOffset(value);
                    style[extra] = fromOffset(size);
                } else {
                    var size = dragging[key] + delta;
                    if (size < 0) {
                        var ext = /^w/i.test(key) ? 'left' : 'top';
                        style[ext] = fromOffset(dragging[ext] + size);
                        size = -size;
                    }
                    style[key] = fromOffset(size);


                }
                css(dragging.rect, style);
            });
            return;
        }
        if (!drawing) return;

        if (drawing) {
            var { start } = drawing;
            var width = (clientX - start[0]);
            var height = (clientY - start[1]);
            var top = start[3], left = start[2];
            if (height < 0) {
                top += height;
                height = -height;
            }
            if (width < 0) {
                left += width;
                width = -width;
            }
            css(drawing.rect, {
                left: fromOffset(left),
                top: fromOffset(top),
                height: fromOffset(height),
                width: fromOffset(width)
            });
        }
    },
    end(e) {
        this.$scope.drawing = false;
        var elem = this.$scope.image;
        elem.dragging = null;
        elem.limit = null;
        elem.drawing = null;
        elem.$scope.updateRects();
        render.refresh();
    }
};
function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    extendIfNeeded(data, {
        rects: []
    });
    var page = view();
    page.innerHTML = welink;
    onappend(page, function () {
        var off = onmousemove(window, getResizer);
        onremove(page, off);
    });

    render(page, {
        pic: image,
        btn: button,
        drawing: false,
        _rects: data.rects,
        field,
        model,
        data,
        field1: {
            key: "link",
            type: "select",
            options: [{
                name: "商品链接",
                key: ""
            }],
            name: "热区链接"
        },
        updateRects() {
            var rects = page.querySelectorAll("[rect]");
            var image = this.image;
            var _rects = this._rects;
            var temp = [].map.call(rects, function (rect, cx) {
                var style = {
                    left: rect.offsetLeft / image.offsetWidth,
                    top: rect.offsetTop / image.offsetHeight,
                    width: rect.offsetWidth / image.offsetWidth,
                    height: rect.offsetHeight / image.offsetHeight
                };
                for (var k in style) {
                    style[k] = (style[k] * 100).toFixed(4) + "%";
                }
                return extend(_rects[cx] ? _rects[cx] : {}, _rects[cx], { style });
            });
            _rects.splice(0, _rects.length);
            _rects.push.apply(_rects, temp);
            remove(image.querySelectorAll("[rect]"));
        },
        addRect() {
            this.drawing = true;
        },
        steps: [
            "添加热区",
            "调整热区大小和位置",
            "设置关联链接",
            "保存生效"
        ],
    });
    moveupon(page, handle);

    return page;
}