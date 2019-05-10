//Constants
const mfnXABaseUrl = "https://www.xactanalysis.com/apps/xactanalysis/detail.jsp?mfn=";
const mfnXASPBaseUrl = "https://www.xactanalysis.com/apps/cxa/detail.jsp?mfn=";

//Global vars
var isCompany = true;

//
xaCfTxt_fcoid.addEventListener("keyup", XAKeyUp);
xaCfTxt_company_name.addEventListener("keyup", XAKeyUp);
xaCfTxt_city.addEventListener("keyup", XAKeyUp);
xaCfTxt_state.addEventListener("keyup", XAKeyUp);
xaCfTxt_key_code.addEventListener("keyup", XAKeyUp);
xaCfTxt_xn_address.addEventListener("keyup", XAKeyUp);
xaCfTxt_mfn.addEventListener("keyup", XAKeyUp);
xaCfTxt_user_id.addEventListener("keyup", XAKeyUp);

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

////Tab-Switching
//document.addEventListener("keyup", function (event) {
//    event.preventDefault();
//    /*if (event.keyCode == 36)
//    {
//        if (currentTab == 1)
//        { currentTab = 3; }
//        else
//        { currentTab--; }
//    }
//    else if (event.keyCode == 35)
//    {
//        if (currentTab == 3)
//        { currentTab = 1; }
//        else
//        { currentTab++; }
//    }
//    updateTab();
//    */
//    //Tab switching using Pg Up/Down keys is DISABLED
//});

//It would be nice to have this work with Ctrl + Tab later on.


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

xaCfAdvancedCheckbox.addEventListener("change", function (event) {
    if (xaCfAdvancedCheckbox.checked) {
        xaCfFieldsDiv.setAttribute("class", "element-visible");
        xaCfSmartSearchDiv.setAttribute("class", "element-hidden");
    }
    else {
        xaCfFieldsDiv.setAttribute("class", "element-hidden");
        xaCfSmartSearchDiv.setAttribute("class", "element-visible");
    }
});


function XAAdvancedSearch() {
    if (isCompany) {
        var newURL = "https://www.xactanalysis.com/apps/cxa/adminlist.jsp?version=com&fcoid=" + xaCfTxt_fcoid.value
            + "&company_name=" + xaCfTxt_company_name.value
            + "&city=" + xaCfTxt_city.value
            + "&state=" + xaCfTxt_state.value.toUpperCase()
            + "&key_code=" + xaCfTxt_key_code.value
            + "&xn_address=" + xaCfTxt_xn_address.value
            + "&mfn=" + xaCfTxt_mfn.value
            + "&user_id=" + xaCfTxt_user_id.value;
    }
    else {
        var newURL = "https://www.xactanalysis.com/apps/cxa/adminlistAdjuster.jsp?version=adj&&xn_address=" + xaCfTxt_xn_address.value
            + "&mfn=" + xaCfTxt_mfn.value
            + "&user_id=" + xaCfTxt_user_id.value;
    }
    chrome.tabs.create({ url: newURL });
}

function XAKeyUp(event) {
    event.preventDefault();
    if (event.keyCode == 13) //Enter button pressed from an XA text box
    {
        XAAdvancedSearch();
    }
}

var ssMatch;
var ssSearchType;

function XASmartSearch()
{
    var url = isCompany ? "https://www.xactanalysis.com/apps/cxa/adminlist.jsp?version=com&" : "https://www.xactanalysis.com/apps/cxa/adminlistAdjuster.jsp?version=adj&";
    if (ssSearchType == 1) {
        if (isCompany) {
            url += "fcoid=" + ssMatch[1];
            chrome.tabs.create({ url: url });
        }
        else {
            xaCfSmartSearchStatus.innerText = "Cannot search adjusters by account code";
        }
    }
    else if (ssSearchType == 2) {

        if (isCompany) {
            url += "key_code=" + ssMatch[2];
            chrome.tabs.create({ url: url });
        }
        else {
            xaCfSmartSearchStatus.innerText = "Cannot search adjusters by key code";
        }
    }
    else if (ssSearchType == 3) {
        url += "user_id =" + ssMatch[3];
        chrome.tabs.create({ url: url });
    }
    else if (ssSearchType == 4) {
        url += "xn_address=" + ssMatch[4];
        chrome.tabs.create({ url: url });
    }
    else {

    }
}

function updateSS() {
    var ssRegex = /(^[0-9]{5,6}$)?(^[a-z0-9]{4}-?[a-z0-9]{4}-?[a-z0-9]{4}-?[a-z0-9]{4}-?[a-z0-9]{4}$)?([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)?(^[a-zA-Z0-9._]+$)?/i;
    ssMatch = ssRegex.exec(xaCfTxt_smartSearch.value);
    xaCfSearchBtn.disabled = false;
    //Note: match[0] would be the full capture.
    if (ssMatch[1] != null) { //First capture group - Acct Code - 5-7 digit numeric
        xaCfSmartSearchStatus.innerText = "Seaching by Account Code";
        ssSearchType = 1;
    }
    else if (ssMatch[2] != null) { //Second capture group - Key Code - 20 digit alphanumeric, with or without dashes
        xaCfSmartSearchStatus.innerText = "Seaching by Key Code";
        ssSearchType = 2;
    }
    else if (ssMatch[3] != null) { //Third capture group - XID (alphanumeric with @ and a .)
        xaCfSmartSearchStatus.innerText = "Seaching by Xactware ID";
        ssSearchType = 3;
    }
    else if (ssMatch[4] != null) { //We'll accept whatever remains as an XNA
        xaCfSmartSearchStatus.innerText = "Seaching by XactNet Address";
        ssSearchType = 4;
    }
    else { //We'll accept whatever remains as an XNA
        xaCfSmartSearchStatus.innerText = "Invalid Search Terms - Use Advanced Search";
        ssSearchType = -1;
        xaCfSearchBtn.disabled = true;
    }
    //
    //return match;
}

xaCfSearchBtn.addEventListener("click", function (event) {

    if (xaCfAdvancedCheckbox.checked) {
        XAAdvancedSearch();
    }
    else {
        updateSS();
        XASmartSearch();
    }
});

xaCfTxt_smartSearch.addEventListener("keyup", function (event) {

    updateSS();
    if (event.keyCode == 13) //Enter button pressed from the XA smart search box
    {
        XASmartSearch();
    }
});