const jiraRegex = /^ *([A-Z]{2,10}) *-? *([0-9]{3,5}) *$/si;

const SD_BASE_URL = "https://jira.xactware.com/servicedesk/customer/portal/6/";
const JIRA_BASE_URL = "https://epm.verisk.com/jira/browse/";

//Jira Tab
var jiraTxt = document.getElementById("jiraTxt");
var jiraSearchBtn = document.getElementById("jiraSearchBtn");
var jiraTxtInputError_p = document.getElementById("jiraTxtInputError_p");
var quickJiraCodePMBtn = document.getElementById("quickJiraCodePMBtn");
var quickJiraCodeXMWBtn = document.getElementById("quickJiraCodeXMWBtn");
var quickJiraCodeSelect = document.getElementById("quickJiraCodeSelect");


//Jira Tab
function JiraSearch() {
    var _match = jiraRegex.exec(jiraTxt.value);
    if (_match != null) {
        //var _reg = /[0-9]{4}/is;
        //var _type = _reg.exec(_match[0]);
        var _type = _match[1].toUpperCase();
        if (_type != null) {
            var _code = _match[2];
            var _formattedCode = _type + "-" + _code;
            var _isPM = _type == "PM";
            var url = (_isPM ? SD_BASE_URL : JIRA_BASE_URL) + _formattedCode;
            chrome.tabs.create({ url: url });
        }
        else {
            alert("Something has gone horribly wrong.");
        }
    }
    else {
        ShowJiraError();
    }
}
jiraSearchBtn.addEventListener("click", function (event) {
    JiraSearch();
});
jiraTxt.addEventListener("keyup", function (event) {
    //event.preventDefault();
    if (event.keyCode == 13) //Enter button pressed from the Jira text box
    {
        JiraSearch();
    }
    else {
        ClearJiraError();
    }
});
function ShowJiraError() {
    //To Do: Maybe animate this in the future to make it cooler?
    jiraTxtInputError_p.style.display = "block";
}
function ClearJiraError() {
    jiraTxtInputError_p.style.display = "none";
}
quickJiraCodePMBtn.addEventListener("click", function (event) {
    if (jiraTxt.value != "PM-") {
        jiraTxt.value = "PM-";
    }
    jiraTxt.focus();
});
quickJiraCodeXMWBtn.addEventListener("click", function (event) {
    if (jiraTxt.value != "XMW-") {
        jiraTxt.value = "XMW-";
    }
    jiraTxt.focus();
});
quickJiraCodeSelect.addEventListener("change", function (event) {
    var selection = event.target.value;
    if (selection != "Other") {
        var _reg = /\(([A-Z]*)\)/;
        var code = _reg.exec(selection)[1];
        jiraTxt.value = code + "-";
        jiraTxt.focus();
    }
});