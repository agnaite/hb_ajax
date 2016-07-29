"use strict";


// PART 1: SHOW A FORTUNE
function getFortune(results) {
    $('#fortune-text').html(results);
}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div\
    $.get("/fortune", getFortune);
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER
function getWeather(results) {
    $('#weather-info').html(results.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    console.log(url);
    $.get(url, getWeather);

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS


function confirmOrder(results) {
    if (results.code === 'ERROR') {
        $('#order-status').addClass('order-error');
    } else {
        $('#order-status').removeClass('order-error');
    }

    $('#order-status').html("Status: " + results.code + "<br>" + results.msg);

}

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    var formInputs = {
        "qty": $("#qty-field").val(),
        "melon_type": $("#melon-type-field").val()
    };

    $.post('/order-melons.json', formInputs, confirmOrder);
}

$("#order-form").on('submit', orderMelons);


