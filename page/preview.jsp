<!DOCTYPE html>
<!--
    过了8点整，
    进入8点钟，
    外边已是黑夜，
    时不时地传来一阵寒冷。
    天空由蔚蓝变成深蓝，
    蓝得深邃，
    蓝得发黑，
    蓝得让人感到遥不可及。
    我的心似乎已经冰凉，
    几乎找不到一丁点的暖意，
    望着远方的天空，
    看不到星星，
    也看不到月亮，
    不知星在何方，
    不知月在何方。
　　
    心又在何方？
    理想变得遥远，
    远处已经渺茫。
    总是想知道，
    但又不能知道：
    以后会怎样。

    http://efront.cc
-->
<html lang="zh-CN">
<!--  -->

<head>
    <script serverside>
        new Promise(function (ok, oh) {
            var http = require("http");
            var id = /\:/.test(req.url) ? req.url.replace(/^[\s\S]*?\:(\w*)([\?][\s\S]*)?$/, "$1") : null;
            if (id) http.get('http://efront.cc:5989/data-qfy/' + id, res => {
                var chunks = [];
                res.on("data", (data) => {
                    chunks.push(data);
                });
                res.on("end", () => {
                    var data = Buffer.concat(chunks);
                    Object.assign(context, JSON.parse(String(data)));
                    ok();
                });
            });
            else ok();
        });
    </script>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,width=device-width" />
    <title><% config.name %></title>
    <meta name="sharecontent" data-msg-img="<% config.logo %>" data-msg-title="<% config.name %>"
        data-msg-content="<% config.desc %>" data-msg-callBack="" data-line-img="/favicon.ico"
        data-line-title="<% config.name %>" data-line-callBack="" />
    <script deleteoncompile>
        -function (body, window) {
            body.removeChild(body.getElementsByTagName("script")[0]);
            var xhr = new (window.XMLHttpRequest || ActiveXObject)('Microsoft.XMLHTTP');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    new Function(xhr.responseText).call(window);
                }
            };
            xhr.open('POST', 'comm/main');
            xhr.send("step into my sight..");
        }.call(this, document.documentElement.children[0], this);
    </script>
<script>qfydata=<% JSON.stringify(context, null, 4) %>;</script>
<style>
    html,body{
        position: absolute;
        left: 0;
        top:0;
        right: 0;
        bottom: 0;
        margin: 0;
        padding: 0;
        background:<% context.background||'#fff' %>;
    }
</style>
</head>

<body scroll=no max-render=375 main="preview">
</body>

</html>