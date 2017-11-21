/**
 * 2017.11.7 wg.lee 
 * (주)후아
 */

"use strict";

var rec = {};

$(document).ready(function () {

    $("#calculate-rec-weight").click(function() {
        calculateRecWeight();
    });

    $("#calculate-rec-number").click(function() {
        calculateRecNumber();
    });

    $(".list_item").click(function() {
        setType(this);
    });

    $(".dropdown").click(function() {
        $(".dropdown-content").toggle();
    });

});

function calculateRecWeight() {

    rec.capa = $("#station_capacity").val();
    if (rec.type === "type_1") {
        if (rec.capa < 100) {
            rec.weight = 1.2;
        } else if (rec.capa <= 3000) {
            rec.weight = ((99.999 * 1.2) + ((rec.capa - 99.999) * 1.0)) / rec.capa;
        } else {
            rec.weight = (((99.999) * 1.2) + (2900.001 * 1.0) + ((rec.capa - 3000) * 0.7)) / rec.capa;
        }
    } else if (rec.type === "type_2") {
        if (rec.capa <= 3000) {
            rec.weight = 1.5;
        } else {
            rec.weight = ((3000 * 1.5) + ((rec.capa - 3000) * 1.0)) / rec.capa;
        }
    } else if (rec.type === "type_3") {
        rec.weight = 1.5;
    } else if (rec.type === "type_4") {
        rec.weight = 1.0;
    } else if (rec.type === "type_5") {
        rec.weight = 5.0;
    } else {
        alert("설치유형을 먼저 선택해주세요.");
        return;
    }
    rec.weight = Number(rec.weight.toString().substring(0, 6)); // 소수점 4째자리까지 
    $("#rec_weight").html("REC 가중치 : " + rec.weight);
}

function calculateRecNumber() {

    var co2 = 0.4415; // 2011년 전력 CO2 배출계수
    if (rec.weight === undefined) {
        alert("REC 가중치를 먼저 계산해주세요.");
        return;
    }

    var preRemainder = Number($("#pre_remainder").val());
    var amount = Number($("#month_amount").val());
    var mWh = amount / 1000;
    var midResult = mWh * rec.weight + preRemainder;
    var result = Number(midResult.toFixed(3));
    rec.number = Math.floor(result);
    rec.remainder = Number((result - rec.number).toFixed(3));

    $("#rec_number").html("REC 발급량 : " + rec.number + " (" + midResult.toFixed(5) + ")" + "<p class='sub_des'>* 소수점 이하는 차기 달로 이월됩니다.</p>");
    $("#rec_remainder").html("차기 이월분 : " + rec.remainder);
    $("#rec_co2").html("CO<sub>2</sub> 감축량 : " + (mWh * co2).toFixed(2) +
        " tCO<sub>2</sub>" + "<p class='sub_des'>* <a href='https://www.kpx.or.kr/www/contents.do?key=222'>2011년 전력부문 온실가스배출계수</a>(0.4415tCO<sub>2</sub>/mWh)</p>");

}

function setType(element) {
    rec.type = $(element).attr("id");
    $("#select_type").html($(element).text() + " <i class='fa fa-caret-down'></i>");
}

