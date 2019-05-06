var searchBox;
var currentDocs;
var currentSelectedIndex = -1;
const kbSearchRegex = /[0-9]{2,4}$/gm;
//Currently Set up for Customer eSC - update for internal
const searchURL = "http://xactware.custhelp.com/app/answers/list/kw/";
const docURL = "http://xactware.custhelp.com/app/answers/detail/a_id/";

function page_load() {
    searchBox = document.getElementById("input1");
    searchBox.focus();
}

function searchMatch(doc, key)
{
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
    for (i = 0; i < currentDocs.length; i++)
    {
        var c = "doc_item";
        if (i == currentSelectedIndex) {
            c += " doc_item_selected";
        }   
        formattedResults += "<span class=\"" + c + "\" onclick=\"clickedDoc('" + currentDocs[i].id + "')\">" + currentDocs[i].title + "<br><span class=\"doc_subitem\">KB " + currentDocs[i].id + " - Modified " + currentDocs[i].dateModified + "</span></span><br>";
    }
    document.getElementById("p1").innerHTML = formattedResults;
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
    for (i = 0; i < docsData.documents.length; i++) {
        if (searchMatch(docsData.documents[i], searchKey)) {
            docs.push(docsData.documents[i]);
            if (docsData.documents[i].id == exactKb) {
                currentSelectedIndex = docs.length - 1;
            }
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