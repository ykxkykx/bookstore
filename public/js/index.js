$.ajax({
  method: "GET",
  url: "db/indexbookdata"
}).done(function (data) {
  setMessage(data);
});

function setMessage(data) {
  var datas = JSON.parse(data);
  setTypeLink();
  setTypeData(datas);
}

//修改各类型数据
function setTypeData(datas) {
  var arr_d = document.getElementsByClassName("type");
  for(var i = 0; i < arr_d.length; i++) {
    var count = 0;
    var list_a = arr_d[i].getElementsByTagName("a");
    var list_i = arr_d[i].getElementsByTagName("img");
    var list_p = arr_d[i].getElementsByTagName("p");
    var list_h = arr_d[i].getElementsByTagName("h6");
    for(var j = 0; j < datas.length; j++) {
      if(i == 0 && !datas[j].BookIsSpecial)
        continue;
      if(datas[j].BookClass != i && i != 0)
        continue;
      if(count >= 4)
        break;
      list_a[count].setAttribute("href", "book?id=" + datas[j].BookISBN);
      list_i[count].setAttribute("src", datas[j].BookCover);
      list_p[count].innerText = "￥" + datas[j].BookPrice;
      list_h[count].innerText = datas[j].BookName;
      count++;
    }
  }
}

//修改类型链接
function setTypeLink() {
  var types = ["special", "art", "manage", "social", "life"];
  var arr_a = document.getElementsByClassName("title");
  //修改类型界面链接
  for(var i = 0; i < arr_a.length; i++) {
    arr_a[i].setAttribute("href", "booktype?id=" + types[i]);
  }
}