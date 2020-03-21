function main() {
    var page = view();
    page.innerHTML = wecube;
    render(page, {
        field,
        padding,
        wepic,
        data: {},
        fields: [
            {
                name: "选择模板",
                key: "grid",
                option_to: {
                    'grid_data': "data",
                },
                options: [
                    { name: "1行2个", data: [0, 50] },
                    { name: "1行3个", data: [0, 33.3333, 66.6667] },
                    { name: "1行4个", data: [0, 25, 50, 75] },
                    { name: "2左2右", data: [0, [0, 50], 50, [0, 50]] },
                    { name: "1左2右", data: [0, 50, [0, 50]] },
                    { name: "1上2下", data: [0, [0, 50, [0, 50]]] },
                    { name: "1左3右", data: [0, 50, [0, 33.3333, 66.6667]] },
                ],
                editor: cubelist,
            },
            {
                name: "布局　　",
                options_from: 'grid_data',
                key: "template",
                editor: cubeview
            },
        ]
    });
    return page;
}