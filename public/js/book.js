$.ajax({
    method: "POST",
    url: "http://192.168.7.239:8080/servlet/IndexServlet",
    data: JSON.stringify(getBookISBN()),
    contentType: 'json'
}).done(function (data) {
    console.log(data);
    setMessage(data);
});

function setMessage(data) {
    var bookInfo = data.bookInfo;
    var book = bookInfo[0];

    document.getElementById("cover").src = "../" + book.BookCover;
    document.getElementById("ISBN").innerHTML = book.BookISBN;
    document.getElementById("price").innerHTML = book.BookPrice;
    document.getElementById("name").innerHTML = book.BookName;
    document.getElementById("publishing").innerHTML = book.BookPublishing;
    document.getElementById("author").innerHTML = book.BookAuthor;
    document.getElementById("date").innerHTML = book.BookDate;
    document.getElementById("inventory").innerHTML = book.BookInventory;
    document.getElementById("info").innerHTML = book.BookBriefInfo;
}

function getBookISBN() {
    var url = window.location.href;
    var isbn = url.substring(url.indexOf("id=") + 3);
    var json = {"isbn" : isbn};
    return json;
}