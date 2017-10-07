$.ajax({
    method: "GET",
    url: "db/booktypedata"
}).done(function (data) {
    console.log(data);
    addNode(data);
});

function addNode(data) {
    //类别名
    var p, hr, div_1;
    var content = document.getElementById("content");
    var arr = data.booksList;
    p = document.createElement("p");
    hr = document.createElement("hr");
    div_1 = document.createElement("div");

    //类别
    p.innerHTML = arr[0].BookName;

    content.appendChild(p);
    content.appendChild(hr);
    content.appendChild(div_1);
    var div_2, counter = 4, div_3;
    var div_4, a, img, p2, h6;

    for(var i = 0; i < arr.length; i++) {
        if(counter == 4) {
            div_2 = document.createElement("div");
            div_2.setAttribute("class", "row");
            div_1.appendChild(div_2);
            counter = 0;
        }

        div_3 = document.createElement("div");
        a = document.createElement("a");
        div_4 = document.createElement("div");
        img = document.createElement("img");
        p2 = document.createElement("p");
        h6 = document.createElement("h6");

        div_3.setAttribute("class", "col-md-3 text-center");
        a.setAttribute("href", "../html/book.html");
        div_4.setAttribute("class", "thumbnail");
        img.setAttribute("width", "70%");
        img.setAttribute("alt", "通用的占位符缩略图");
        img.setAttribute("src","../" + arr[i].BookCover);
        h6.innerHTML = arr[i].BookName;
        p2.innerHTML = "￥" + arr[i].BookPrice;
        a.setAttribute("rel", arr[i].BookISBN);

        div_2.appendChild(div_3);
        div_3.appendChild(a);
        a.appendChild(div_4);
        a.appendChild(p2);
        a.appendChild(h6);
        div_4.appendChild(img);

        counter++;
    }
}