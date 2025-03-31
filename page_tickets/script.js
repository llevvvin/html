var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}

var NameElem = document.querySelector("#name");
var EmailElem = document.querySelector("#email");
var PhoneElem = document.querySelector("#phone");
var NameElem = document.querySelector("#name");



var NameElem=document.getElementById('name').value;
  const input_name = document.querySelector('#name');
  input_name.addEventListener('input', localSet);

  var EmailElem=document.getElementById('email').value;
  const input_email = document.querySelector('#email');
  input_name.addEventListener('input', localSet);

  var PhoneElem=document.getElementById('phone').value;
  const input_phone = document.querySelector('#phone');
  input_phone.addEventListener('input', localSet);

  var TicketsElem=document.getElementById('tickets').value;
  const input_tickets = document.querySelector('#tickets');
  input_tickets.addEventListener('input', localSet);


  var DateElem=document.getElementById('checkin-date').value;
  const input_checkin_date= document.querySelector('#checkin-date');
  input_checkin_date.addEventListener('input', localSet);


  var PlaceElem=document.getElementById('place_selection').value;
  const input_place_selection = document.querySelector('#place_selection');
  input_place_selection.addEventListener('select', localSet);

function localSet(){
  var NameElem=document.getElementById('name').value;
localStorage.setItem('name', NameElem);

var EmailElem=document.getElementById('email').value;
localStorage.setItem('email', EmailElem);

var PhoneElem=document.getElementById('phone').value;
localStorage.setItem('phone', PhoneElem);

var TicketsElem=document.getElementById('tickets').value;
localStorage.setItem('tickets', TicketsElem);

var DateElem=document.getElementById('checkin-date').value;
localStorage.setItem('checkin-date', DateElem);

var PlaceElem=document.getElementById('place_selection').value;
localStorage.setItem('place_selection', PlaceElem);
}
function localGet(){
 
  document.getElementById('name').value= localStorage.getItem('name');

  document.getElementById('email').value= localStorage.getItem('email');

  document.getElementById('phone').value= localStorage.getItem('phone');
  document.getElementById('tickets').value= localStorage.getItem('tickets');
 
  document.getElementById('place_selection').value= localStorage.getItem('place_selection');
  document.getElementById('checkin-date').value= localStorage.getItem('checkin-date');
  }
