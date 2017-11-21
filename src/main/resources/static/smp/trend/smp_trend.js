/**
 * 2017.11.7 wg.lee 
 * (주)후아
 */

"use strict";

function drawCharts() {
    var url = 'https://docs.google.com/spreadsheets/d/13DxBp2m_cDs-PSKgpo56sjv84dXgl2hyZArEap44Mq8/edit?usp=sharing';
    drawMonthChart(url);
    drawQuarterChart(url);
    drawYearChart(url);
}

function drawMonthChart(url) {
    var options = "&range=A1:F13&headers=1";
    var query = new google.visualization.Query(url + options);
    query.send(handleMonthQueryResponse);
}

function handleMonthQueryResponse(response) {
    var data = response.getDataTable();
    var line = new google.visualization.LineChart(document.getElementById('linechart_month'));
    line.draw(data, {
        'title': "최근 5년 SMP 월별 비교 (단위 : 원/kWh)"
    });
}

function drawQuarterChart(url) {
    var options = "&range=A15:B35&headers=1";
    var query = new google.visualization.Query(url + options);
    query.send(handleQuarterQueryResponse);
}

function handleQuarterQueryResponse(response) {
    var data = response.getDataTable();
    var line = new google.visualization.LineChart(document.getElementById('linechart_quarter'));
    line.draw(data, {
        'title': "최근 5년 분기단위 SMP 추이"
    });
}

function drawYearChart(url) {
    var options = "&range=A44:B56&headers=1";
    var query = new google.visualization.Query(url + options);
    query.send(handleYearQueryResponse);
}

function handleYearQueryResponse(response) {
    var data = response.getDataTable();
    var line = new google.visualization.LineChart(document.getElementById('linechart_year'));
    line.draw(data, {
        'title': "최근 10년 SMP 추이"
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