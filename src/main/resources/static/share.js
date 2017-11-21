/**
 * 2017.11.7 wg.lee 
 * (주)후아
 */

"use strict";

function showSmallWindow(shareURL) {
    window.open(shareURL, "_blank", "toolbar=no, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=600");
}

function shareToFacebook() {
    var url = document.URL;
    var shareURL = "https://www.facebook.com/sharer/sharer.php?u=" + url + "&amp;src=sdkpreparse";
    showSmallWindow(shareURL);
}
function shareToTwitter() {
    var url = encodeURI(encodeURIComponent(document.URL));
    var title = encodeURI(document.title + " ");
    var shareURL = "http://twitter.com/intent/tweet?url=" + url + "&text=" + title + document.URL;
    showSmallWindow(shareURL);
}

function shareToNaver() {
    var url = encodeURI(encodeURIComponent(document.URL));
    var title = encodeURI(document.title);
    var shareURL = "http://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
    showSmallWindow(shareURL);
}

$(document).ready(function () {
    $("#facebook").click(function () {
        shareToFacebook();
    });
    $("#twitter").click(function () {
        shareToTwitter();
    });
    $("#naver").click(function () {
        shareToNaver();
    });
});
