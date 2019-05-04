
function searchMatch(doc, key)
{
    key = key.toLowerCase();
    return (doc.id.toLowerCase().includes(key) || doc.title.toLowerCase().includes(key));
}

function input1_input()
{
    var searchKey = document.getElementById("input1").value;
    var formattedResults = "";
    var docs = docsData.documentationList.documents;
    for (i = 0; i < docs.length; i++)
    {
        if (searchMatch(docs[i], searchKey)) {
            formattedResults += "<b>" + docs[i].id + "</b> " + docs[i].title + "<br>";
        }
    }
    document.getElementById("p1").innerHTML = formattedResults;
}

