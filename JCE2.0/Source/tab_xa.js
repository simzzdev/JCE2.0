//Imported from JCE1.0

//XA Tab
var xaCompanyRadio = document.getElementById("xaCompanyRadio");
var xaAdjusterRadio = document.getElementById("xaAdjusterRadio");
var mfnXARadio = document.getElementById("mfnXARadio");
var mfnXASPRadio = document.getElementById("mfnXASPRadio");
var mfnGoBtn = document.getElementById("mfnGoBtn");
var mfnLinkBtn = document.getElementById("mfnLinkBtn");
var mfnTxt = document.getElementById("mfnTxt");
var isCompany = true;
//
var xaCfSearchBtn = document.getElementById("xaCfSearchBtn");
var xaCfTxt_fcoid = document.getElementById("xaCfTxt_fcoid");
var xaCfTxt_company_name = document.getElementById("xaCfTxt_company_name");
var xaCfTxt_city = document.getElementById("xaCfTxt_city");
var xaCfTxt_state = document.getElementById("xaCfTxt_state");
var xaCfTxt_key_code = document.getElementById("xaCfTxt_key_code");
var xaCfTxt_xn_address = document.getElementById("xaCfTxt_xn_address");
var xaCfTxt_mfn = document.getElementById("xaCfTxt_mfn");
var xaCfTxt_user_id = document.getElementById("xaCfTxt_user_id");
//
var xaDirectTxt_fcoid = document.getElementById("xaDirectTxt_fcoid");
var xaDeepLink_kclistBtn = document.getElementById("xaDeepLink_kclistBtn");
var xaDeepLink_companyPgBtn = document.getElementById("xaDeepLink_companyPgBtn");
var xaDeepLink_laBtn = document.getElementById("xaDeepLink_laBtn");
var xaDeepLink_clogBtn = document.getElementById("xaDeepLink_clogBtn");
var xaDeepLink_xnalistBtn = document.getElementById("xaDeepLink_xnalistBtn");
//
xaCfTxt_fcoid.addEventListener("keyup", XAKeyUp);
xaCfTxt_company_name.addEventListener("keyup", XAKeyUp);
xaCfTxt_city.addEventListener("keyup", XAKeyUp);
xaCfTxt_state.addEventListener("keyup", XAKeyUp);
xaCfTxt_key_code.addEventListener("keyup", XAKeyUp);
xaCfTxt_xn_address.addEventListener("keyup", XAKeyUp);
xaCfTxt_mfn.addEventListener("keyup", XAKeyUp);
xaCfTxt_user_id.addEventListener("keyup", XAKeyUp);

//Tab Switching
var TabEnum = { KB: 1, XA: 2, Jira: 3 };
var currentTab = TabEnum.KB;
//
var kbTabLink = document.getElementById("kbTabLink");
var xaTabLink = document.getElementById("xaTabLink");
var jiraTabLink = document.getElementById("jiraTabLink");
var kbViewDiv = document.getElementById("kbTab");
var xaViewDiv = document.getElementById("xaTab");
var jiraViewDiv = document.getElementById("jiraTab");

//listeners
xaCompanyRadio.addEventListener("change", xaCFRadioChanged);
xaAdjusterRadio.addEventListener("change", xaCFRadioChanged);
//
xaDeepLink_companyPgBtn.addEventListener("click", xaDeepLink);
xaDeepLink_kclistBtn.addEventListener("click", xaDeepLink);
xaDeepLink_laBtn.addEventListener("click", xaDeepLink);
xaDeepLink_clogBtn.addEventListener("click", xaDeepLink);
xaDeepLink_xnalistBtn.addEventListener("click", xaDeepLink);
xaDeepLink_invBtn.addEventListener("click", xaDeepLink);
//
const mfnXABaseUrl = "https://www.xactanalysis.com/apps/xactanalysis/detail.jsp?mfn=";
const mfnXASPBaseUrl = "https://www.xactanalysis.com/apps/cxa/detail.jsp?mfn=";
mfnCopyBtn.addEventListener("click", function (event) {
    navigator.clipboard.writeText(PrepMFNUrl());
});
mfnGoBtn.addEventListener("click", function (event) {
    chrome.tabs.create({ url: PrepMFNUrl() });
});
function PrepMFNUrl() {
    var mfn = mfnTxt.value;
    var lnk = "";
    if (mfnXARadio.checked) { lnk = mfnXABaseUrl; }
    else { lnk = mfnXASPBaseUrl; }
    lnk += mfn;
    return lnk;
}

//Tab-Switching
document.addEventListener("keyup", function (event) {
    event.preventDefault();
    /*if (event.keyCode == 36)
    {
        if (currentTab == 1)
        { currentTab = 3; }
        else
        { currentTab--; }
    }
    else if (event.keyCode == 35)
    {
        if (currentTab == 3)
        { currentTab = 1; }
        else
        { currentTab++; }
    }
    updateTab();
    */
    //Tab switching using Pg Up/Down keys is DISABLED
});

xaTabLink.addEventListener("click", function (event) {
    currentTab = TabEnum.XA;
    updateTab();
});

kbTabLink.addEventListener("click", function (event) {
    currentTab = TabEnum.KB;
    updateTab();
});

jiraTabLink.addEventListener("click", function (event) {
    currentTab = TabEnum.Jira;
    updateTab();
});

function updateTab() {
    if (currentTab == TabEnum.KB) {
        xaViewDiv.setAttribute("class", "tabcontent-inactive");
        kbTabLink.setAttribute("class", "tabLink-active");
        kbViewDiv.setAttribute("class", "tabcontent-active");
        xaTabLink.setAttribute("class", "tabLink-inactive");
        jiraViewDiv.setAttribute("class", "tabcontent-inactive");
        jiraTabLink.setAttribute("class", "tabLink-inactive");
        kbTextBox.focus();
    }
    else if (currentTab == TabEnum.XA) {
        xaViewDiv.setAttribute("class", "tabcontent-active");
        xaTabLink.setAttribute("class", "tabLink-active");
        kbViewDiv.setAttribute("class", "tabcontent-inactive");
        kbTabLink.setAttribute("class", "tabLink-inactive");
        jiraViewDiv.setAttribute("class", "tabcontent-inactive");
        jiraTabLink.setAttribute("class", "tabLink-inactive");
        xaCfTxt_fcoid.focus();
    }
    else //DEV 
    {
        //We can assume this is Jira		
        xaViewDiv.setAttribute("class", "tabcontent-inactive");
        xaTabLink.setAttribute("class", "tabLink-inactive");
        kbViewDiv.setAttribute("class", "tabcontent-inactive");
        kbTabLink.setAttribute("class", "tabLink-inactive");
        jiraViewDiv.setAttribute("class", "tabcontent-active");
        jiraTabLink.setAttribute("class", "tabLink-active");
        jiraTxt.focus();
    }

}

function xaDeepLink(event) {
    var urls = ["https://www.xactanalysis.com/apps/cxa/start.jsp?fcoid=", "https://www.xactanalysis.com/apps/shared/licenseAdmin.jsp?fcoid=", "https://www.xactanalysis.com/apps/cxa/adminlistKeyCodes.jsp?fcoid=", "https://www.xactanalysis.com/apps/cxa/adminConnectLog.jsp?fcoid=", "https://www.xactanalysis.com/apps/cxa/adminlistAdjuster.jsp?fcoid=", "https://www.xactanalysis.com/apps/cxa/adminlistInventory.jsp?fcoid="];
    var tagInt = parseInt(event.target.dataset.index);
    var newURL = urls[tagInt] + xaDirectTxt_fcoid.value;
    chrome.tabs.create({ url: newURL });
}




//CF Search Mode Toggling
function xaCFRadioChanged(event) {
    isCompany = event.target.id == "xaCompanyRadio";
    xaCfTxt_fcoid.disabled = !isCompany;
    xaCfTxt_company_name.disabled = !isCompany;
    xaCfTxt_city.disabled = !isCompany;
    xaCfTxt_state.disabled = !isCompany;
    xaCfTxt_key_code.disabled = !isCompany;
}


function XAKeyUp(event) {
    event.preventDefault();
    if (event.keyCode == 13) //Enter button pressed from an XA text box
    {
        XASearch();
    }
}
