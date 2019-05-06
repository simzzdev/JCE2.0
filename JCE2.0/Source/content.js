
var el = document.getElementById("rn_AnswerInfo");
if (el != null) {
    var text = el.innerHTML;
    el.innerHTML = "<span style=\"font-weight: bold; font-size:14px;\">" + text + "</style>";
}

function update() {
    var el1 = document.getElementsByClassName("rn_ElementsHeader");
    var el2 = document.getElementsByClassName("rn_ElementsData");

    for (i = 0; i < el1.length; i++) {
        var header = el1.item(i);
        header.innerHTML = "<span style=\"text-decoration:underline; font-size:16px;\">" + header.innerHTML + "</style>";
        var data = el2.item(i);
        data.innerHTML = "<span style=\"font-weight: bold; font-size:14px;\">" + data.innerHTML + "</style>";
    }
}
var needsUpdating = false;

document.addEventListener("load", update());
document.addEventListener("mousemove", function (e) {
    if (needsUpdating) {
        update();
        needsUpdating = false;
    }
});
document.addEventListener("keyup", function (e) {
    needsUpdating = true;
});

