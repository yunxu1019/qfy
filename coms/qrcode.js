script("js/qrcode.js", "qrcode").then(function (qrcode) {
    return function (text) {
        var typeNumber = 0;
        var errorCorrectionLevel = "L";
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(text);
        qr.make();
        var size = qr.getModuleCount();
        var total = Math.min(window.innerHeight, window.innerWidth) - 360;
        if (total < 512) total = 512;
        var canvas = document.createElement("canvas");
        canvas.width = canvas.height = ((total / size) | 0) * size;
        qr.renderTo2dContext(canvas.getContext("2d"), (total / size) | 0);
        return canvas;
    }
});
