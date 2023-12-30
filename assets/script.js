//////////////////////////////////////////////////////////////Clock
var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, Do MMMM YYYY'))
var clock = parseFloat(moment().format('hha'))
console.log('clock', parseFloat(clock))

var container = $('.container');

//////////////////////////////////////////Populate planner with rows
var dayStart = moment(09, 'HH');
while (dayStart.hour() < 18) {
    container.append('<div class="row">' + `<div class="hour"> ${dayStart.format('HHA')} </div>`);
    dayStart.add(1, 'hours');
}
var row = $('.row');
///////////////////////////////////////// append textarea and button
row.append('<textarea class="text-area">');
row.append('<button class="saveBtn">');

$('.saveBtn').append('<i class="far fa-save"></i>')

//////////////////////////////////////////////////// Individual rows
var row9AM = container.children()[0];
var row10AM = container.children()[1];
var row11AM = container.children()[2];
var row12PM = container.children()[3];
var row1PM = container.children()[4];
var row2PM = container.children()[5];
var row3PM = container.children()[6];
var row4PM = container.children()[7];
var row5PM = container.children()[8];

/////////////////////////////////////////////////// Custom Attributes
// console.log(row9AM.childNodes[1])
// console.log($('row9AM'))

// console.log($('.hour'))


for (time of $('.hour')) {
    // console.log(parseFloat($(time).text()))
    console.log(clock)
    if (parseFloat($(time).text()) < clock) {
        $(time).next().addClass('past')
    }    else if (parseFloat($(time).text()) > clock) {
        $(time).next().addClass('future')
    } else {
        $(time).next().addClass('present')
    }
    // console.log(parseFloat($(time).text()))

}


// console.log(parseFloat(moment().hour('10').format('hha')))
// if (parseFloat(row9AM.childNodes[0].innerHTML) < clock) {
//     row9AM.childNodes[1].addClass('past')
// } else if (parseFloat(row9AM.childNodes[0].innerHTML) > clock) {
//     row9AM.childNodes[1].addClass('future')
// } else {
//     row9AM.childNodes[1].addClass('present')
// }
///////////////////////////////////////////////////Load Local Storage
var text9AM = row9AM.childNodes[1];
var text10AM = row10AM.childNodes[1];
var text11AM = row11AM.childNodes[1];
var text12PM = row12PM.childNodes[1];
var text1PM = row1PM.childNodes[1];
var text2PM = row2PM.childNodes[1];
var text3PM = row3PM.childNodes[1];
var text4PM = row4PM.childNodes[1];
var text5PM = row5PM.childNodes[1];

// if(localStorage.getItem('9AM') == null || localStorage.getItem('9AM') )
text9AM.value = localStorage.getItem('9AM');
text10AM.value = localStorage.getItem('10AM');
text11AM.value = localStorage.getItem('11AM');
text12PM.value = localStorage.getItem('12PM');
text1PM.value = localStorage.getItem('1PM');
text2PM.value = localStorage.getItem('2PM');
text3PM.value = localStorage.getItem('3PM');
text4PM.value = localStorage.getItem('4PM');
text5PM.value = localStorage.getItem('5PM');

///////////////////////////////////////// SAVE TEXT TO LOCAL STORAGE
$('button').click(function () {
    var thisRow = $(this).parent()[0].innerHTML;
    var tBoxVal = $(this).siblings()[1].value;

    if (thisRow == row9AM.innerHTML) {
        localStorage.setItem('9AM', tBoxVal)
    }
    if (thisRow == row10AM.innerHTML) {
        localStorage.setItem('10AM', tBoxVal)
    }
    if (thisRow == row11AM.innerHTML) {
        localStorage.setItem('11AM', tBoxVal)
    }
    if (thisRow == row12PM.innerHTML) {
        localStorage.setItem('12PM', tBoxVal)
    }
    if (thisRow == row1PM.innerHTML) {
        localStorage.setItem('1PM', tBoxVal)
    }
    if (thisRow == row2PM.innerHTML) {
        localStorage.setItem('2PM', tBoxVal)
    }
    if (thisRow == row3PM.innerHTML) {
        localStorage.setItem('3PM', tBoxVal)
    }
    if (thisRow == row4PM.innerHTML) {
        localStorage.setItem('4PM', tBoxVal)
    }
    if (thisRow == row5PM.innerHTML) {
        localStorage.setItem('5PM', tBoxVal)
    }
})








