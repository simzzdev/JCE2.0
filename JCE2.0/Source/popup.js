var TabEnum = { KB: 1, XA: 2, Jira: 3 };
var currentTab = TabEnum.KB;

//DOM Objects

//Tab Switching
var kbTabLink = document.getElementById("kbTabLink");
var xaTabLink = document.getElementById("xaTabLink");
var jiraTabLink = document.getElementById("jiraTabLink");
var kbViewDiv = document.getElementById("kbTab");
var xaViewDiv = document.getElementById("xaTab");
var jiraViewDiv = document.getElementById("jiraTab");

//KB
var searchBox = document.getElementById("input1");

//XA
var xaCompanyRadio = document.getElementById("xaCompanyRadio");
var xaAdjusterRadio = document.getElementById("xaAdjusterRadio");
var mfnXARadio = document.getElementById("mfnXARadio");
var mfnXASPRadio = document.getElementById("mfnXASPRadio");
var mfnGoBtn = document.getElementById("mfnGoBtn");
var mfnLinkBtn = document.getElementById("mfnLinkBtn");
var mfnTxt = document.getElementById("mfnTxt");

var xaCfSearchBtn = document.getElementById("xaCfSearchBtn");
var xaCfTxt_fcoid = document.getElementById("xaCfTxt_fcoid");
var xaCfTxt_company_name = document.getElementById("xaCfTxt_company_name");
var xaCfTxt_city = document.getElementById("xaCfTxt_city");
var xaCfTxt_state = document.getElementById("xaCfTxt_state");
var xaCfTxt_key_code = document.getElementById("xaCfTxt_key_code");
var xaCfTxt_xn_address = document.getElementById("xaCfTxt_xn_address");
var xaCfTxt_mfn = document.getElementById("xaCfTxt_mfn");
var xaCfTxt_user_id = document.getElementById("xaCfTxt_user_id");
var xaCfAdvancedCheckbox = document.getElementById("xaCfAdvancedCheckbox");
var xaCfTxt_smartSearch = document.getElementById("xaCfTxt_smartSearch");
var xaCfSmartSearchDiv = document.getElementById("xaCfSmartSearchDiv");
var xaCfFieldsDiv = document.getElementById("xaCfFieldsDiv");
var xaCfSmartSearchStatus = document.getElementById("xaCfSmartSearchStatus");

var xaDirectTxt_fcoid = document.getElementById("xaDirectTxt_fcoid");
var xaDeepLink_kclistBtn = document.getElementById("xaDeepLink_kclistBtn");
var xaDeepLink_companyPgBtn = document.getElementById("xaDeepLink_companyPgBtn");
var xaDeepLink_laBtn = document.getElementById("xaDeepLink_laBtn");
var xaDeepLink_clogBtn = document.getElementById("xaDeepLink_clogBtn");
var xaDeepLink_xnalistBtn = document.getElementById("xaDeepLink_xnalistBtn");

//JIRA
var jiraTxt = document.getElementById("jiraTxt");
var jiraSearchBtn = document.getElementById("jiraSearchBtn");
var jiraTxtInputError_p = document.getElementById("jiraTxtInputError_p");
var quickJiraCodePMBtn = document.getElementById("quickJiraCodePMBtn");
var quickJiraCodeXMWBtn = document.getElementById("quickJiraCodeXMWBtn");
var quickJiraCodeSelect = document.getElementById("quickJiraCodeSelect");

//Page Events
document.addEventListener("DOMContentLoaded", page_load);
//
function page_load() {
    searchBox.focus();
}

//Click on KB Tab
kbTabLink.addEventListener("click", function (event) {
    currentTab = TabEnum.KB;
    updateTab();
});
//Click on XA Tab
xaTabLink.addEventListener("click", function (event) {
    currentTab = TabEnum.XA;
    updateTab();
});
//Click on JIRA Tab
jiraTabLink.addEventListener("click", function (event) {
    currentTab = TabEnum.Jira;
    updateTab();
});
//Update Tab Function - called by click events
function updateTab() {
    if (currentTab == TabEnum.KB) { //Clicked KB
        xaViewDiv.setAttribute("class", "element-hidden");
        kbTabLink.setAttribute("class", "tabLink-active");
        kbViewDiv.setAttribute("class", "element-visible");
        xaTabLink.setAttribute("class", "tabLink-inactive");
        jiraViewDiv.setAttribute("class", "element-hidden");
        jiraTabLink.setAttribute("class", "tabLink-inactive");
        searchBox.focus();
    }
    else if (currentTab == TabEnum.XA) { // Clicked XA
        xaViewDiv.setAttribute("class", "element-visible");
        xaTabLink.setAttribute("class", "tabLink-active");
        kbViewDiv.setAttribute("class", "element-hidden");
        kbTabLink.setAttribute("class", "tabLink-inactive");
        jiraViewDiv.setAttribute("class", "element-hidden");
        jiraTabLink.setAttribute("class", "tabLink-inactive");
        xaCfTxt_fcoid.focus();
    }
    else
    {
        // We can assume this is Jira		
        xaViewDiv.setAttribute("class", "element-hidden");
        xaTabLink.setAttribute("class", "tabLink-inactive");
        kbViewDiv.setAttribute("class", "element-hidden");
        kbTabLink.setAttribute("class", "tabLink-inactive");
        jiraViewDiv.setAttribute("class", "element-visible");
        jiraTabLink.setAttribute("class", "tabLink-active");
        jiraTxt.focus();
    }

}