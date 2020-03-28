function main(params) {
    if (!params.data) params.data = {};
    var data = params.data;
    extendIfNeeded(data, {
        cubepart: 0
    });
    var page = view();
    page.innerHTML = wecube;
    render(page, {
        field,
        padding,
        wepic,
        data: data,
        setImage(url){
            console.log(url);
        },
        fields: [
            {
                name: "选择模板",
                key: "cube",
                option_to: {
                    'cube_data': "data",
                },
                options: [
                    { id: 1, name: "1行2个", data: [0, 50], imgs: [{}, {}] },
                    { id: 2, name: "1行3个", data: [0, 33.3333, 66.6667], imgs: [{}, {}, {}] },
                    { id: 3, name: "1行4个", data: [0, 25, 50, 75], imgs: [{}, {}, {}, {}] },
                    { id: 4, name: "2左2右", data: [0, [0, 50], 50, [0, 50]], imgs: [{}, {}] },
                    { id: 5, name: "1左2右", data: [0, 50, [0, 50]], imgs: [{}, {}, {}] },
                    { id: 6, name: "1上2下", data: [0, [0, 50, [0, 50]]], imgs: [{}, {}, {}] },
                    { id: 7, name: "1左3右", data: [0, 50, [0, 33.3333, 66.6667]], imgs: [{}, {}, {}, {}] },
                ],
                editor: cubelist,
            },
            {
                name: "布局　　",
                options_from: 'cube_data',
                key: "cubepart",
                editor: cubeview
            },
        ]
    });
    return page;
}