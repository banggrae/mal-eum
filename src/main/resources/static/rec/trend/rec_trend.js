/**
 * 2017.11.7 wg.lee 
 * (주)후아
 */

"use strict";

function drawCharts() {
    var url = 'https://docs.google.com/spreadsheets/d/1WUsvhx6LCFQMRt9H4lcaFUi12fF1isMX-HDsczyCWf0/edit?usp=sharing';
    drawMonthChart(url);
    drawQuarterChart(url);
    drawYearChart(url);
}

function drawMonthChart(url) {
    var options = "&range=A1:B99&headers=1";
    var query = new google.visualization.Query(url + options);
    query.send(handleMonthQueryResponse);
}

function handleMonthQueryResponse(response) {
    var data = response.getDataTable();
    var line = new google.visualization.LineChart(document.getElementById('bidirectional_market'));
    line.draw(data, {
        'title': "17년 양방향 현물시장(17.3.28~)"
    });
}

function drawQuarterChart(url) {
    var options = "&range=A103:B133&headers=1";
    var query = new google.visualization.Query(url + options);
    query.send(handleQuarterQueryResponse);
}

function handleQuarterQueryResponse(response) {
    var data = response.getDataTable();
    var line = new google.visualization.LineChart(document.getElementById('integrated_market'));
    line.draw(data, {
        'title': "16년 태양광/비태양광 통합시장이후(16.3.1~)"
    });
}

function drawYearChart(url) {
    var options = "&range=A151:B215&headers=1";
    var query = new google.visualization.Query(url + options);
    query.send(handleYearQueryResponse);
}

function handleYearQueryResponse(response) {
    var data = response.getDataTable();
    var line = new google.visualization.LineChart(document.getElementById('old_market'));
    line.draw(data, {
        'title': "태양광/비태양광 통합시장이전(~16.2.29)"
    });
}

$(document).ready(function () {

    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart', 'table', 'sankey'], 'language': 'ko' });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawCharts);

    $(window).resize(function () {
        drawCharts();
    });
});