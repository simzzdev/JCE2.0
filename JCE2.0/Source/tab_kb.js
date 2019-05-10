var internalMode = true;

//Constants
const kbSearchRegex = /[0-9]{2,4}$/gm;
const RESULTS_LIMIT = 7;
const searchURL = internalMode ? "https://xactware3.custhelp.com/app/answers/list/kw/"
    : "http://xactware.custhelp.com/app/answers/list/kw/";
const docURL = internalMode ? "http://xactware3.custhelp.com/app/answers/detail/a_id/"
    : "https://xactware.custhelp.com/app/answers/detail/a_id/";

//Global vars
var currentDocs;
var currentSelectedIndex = -1;

searchBox.addEventListener("input", input1_input);
document.addEventListener("keydown", page_keyDown);

function searchMatch(doc, key) {
    key = key.toLowerCase();
    return (doc.id.toLowerCase().includes(key) || doc.title.toLowerCase().includes(key));
}

function navigateToDoc(doc) {
    var url = docURL + doc;
    window.open(url, "_blank");
}

function navigateToSearch(key) {
    var url = searchURL + key;
    window.open(url, "_blank");
}

function clickedDoc(doc) {
    navigateToDoc(doc);
}

function updateList() {
    //
    var formattedResults = "";
    for (i = 0; i < currentDocs.length; i++) {
        var c = "doc_item";
        if (i == currentSelectedIndex) {
            c += " doc_item_selected";
        }
        var dateMod = new Date(Date.parse(currentDocs[i].dateModified));
        var today = new Date();
        var diff = today - dateMod;
        //var diffInDays = 108000 / 86400‬;
        diff = Math.floor(diff / 86400000);
        //var daysDiff = (new Date(Date.now()) - d).days;
        formattedResults += "<span class=\"" + c + "\" title=\"" + currentDocs[i].id + "\">" + currentDocs[i].title + "<br><span class=\"doc_subitem\"><b>KB " + currentDocs[i].id + "</b> - modified " + diff + " days ago" + "</span>";
        if (currentDocs[i].popularity != null)
            formattedResults += "&nbsp&nbsp<img height=\"12px\" src=\"Popularity\\" + currentDocs[i].popularity + ".png\" />";
        formattedResults += "</span>";
    }
    document.getElementById("p1").innerHTML = formattedResults;
    //Add Event Handlers...
    var list = document.getElementsByClassName("doc_item")
    {
        for (i = 0; i < list.length; i++) {
            list[i].addEventListener("click", function (e) {
                navigateToDoc(e.target.title);
            });
        }
    }
}

function input1_input() {

    var searchKey = searchBox.value;
    var r = kbSearchRegex.exec(searchKey);
    var exactKb = "";
    if (r != null) {
        exactKb = r[0];
    }
    else {
        currentSelectedIndex = -1;
    }
    var docs = new Array();
    var count = 0;
    for (i = 0; i < docsData.documents.length && count < RESULTS_LIMIT; i++) {
        if (searchMatch(docsData.documents[i], searchKey)) {
            docs.push(docsData.documents[i]);
            if (docsData.documents[i].id == exactKb) {
                currentSelectedIndex = docs.length - 1;
            }
            count++;
        }
    }
    //
    currentDocs = docs;
    updateList();
}

function page_keyDown(e) {
    //console.log(e.key);
    if (currentDocs != null) {
        var oldIndex = currentSelectedIndex;
        if (e.key == "ArrowDown") {
            if (oldIndex < currentDocs.length) {
                currentSelectedIndex = oldIndex + 1;
            }
        }
        else if (e.key == "ArrowUp") {
            if (oldIndex > 0) {
                currentSelectedIndex = oldIndex - 1;
            }
        }
        else if (e.key == "Enter") {
            if (currentSelectedIndex == -1) {
                navigateToSearch(searchBox.value);
            }
            else {
                var kb = currentDocs[currentSelectedIndex].id;
                navigateToDoc(kb);
            }
        }
        updateList();
    }
}