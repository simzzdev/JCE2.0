
function searchMatch(doc, key)
{
    key = key.toLowerCase();
    return (doc.id.toLowerCase().includes(key) || doc.title.toLowerCase().includes(key));
}

function clickedDoc(doc) {
    alert("You will be referred to " + doc);
}

function input1_input() {
    var searchKey = document.getElementById("input1").value;
    var formattedResults = "";
    var docs = docsData.documents;

    //

    for (i = 0; i < docs.length; i++) {
        if (searchMatch(docs[i], searchKey)) {
            formattedResults += "<span class=\"doc_item\" onclick=\"clickedDoc('" + docs[i].id + "')\"><b>" + docs[i].id + "</b> " + docs[i].title + "</span><br>";
        }
    }
    document.getElementById("p1").innerHTML = formattedResults;

}