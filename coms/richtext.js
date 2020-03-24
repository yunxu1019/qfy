function main() {
    var pag = div(), editor;
    onappend(pag, function () {
        console.log(umeditor,this,umeditor);
        editor = umeditor.createEditor(this,{});
    });
    onremove(pag, function () {
        console.log(editor);
    });
    return pag;
}