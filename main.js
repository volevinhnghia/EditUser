function resetInputFunc() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var email = document.getElementById("email");
  var address = document.getElementById("address");
  var contactNum = document.getElementById("contact_number");
  var city = document.getElementById("city");
  fname.value = "";
  lname.value = "";
  email.value = "";
  address.value = "";
  contactNum.value = "";
  city.value = "-Choice your city-";
}
function hideSidebar(p) {
  var hide = document.getElementById("seaconSidebar");
  hide.style.display = "none";
}
function openSidebar(p) {
  var open = document.getElementById("seaconSidebar");
  open.style.display = "flex";
}
function switchChannel(el) {
  let listItems = document
    .getElementById("seaconSidebar")
    .getElementsByTagName("tr");
  var length = listItems.length;
  for (var i = 0; i < length; i++) {
    listItems[i].className = i + 1 == el ? "selected" : "";
  }
}
function isEmpty() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var address = document.getElementById("address");
  var contactNum = document.getElementById("contact_number");
  var city = document.getElementById("city");
  if (fname && fname.value) {
    fname.className = "validInput";
  } else fname.className = "invalidInput";
  if (lname && lname.value) {
    lname.className = "validInput";
  } else lname.className = "invalidInput";
  if (address && address.value) {
    address.className = "validInput";
  } else address.className = "invalidInput";
  if (contactNum && contactNum.value) {
    contactNum.className = "validInput";
  } else contactNum.className = "invalidInput";
  if (city !== "-Choice your city-" && city.value !== "-Choice your city-") {
    city.className = "validInput";
  } else city.className = "invalidInput";
}
function isValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    inputText.className = "validInputEmail";
    document.getElementById("email").style.backgroundImage = "url(./icon/check.svg)"
  } else {
    inputText.className = "invalidInputEmail";
    document.getElementById("email").style.backgroundImage = 'url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cross-in-circle-in-red-tom-hill.jpg)'
  }
}
function addProfile() {
  document.getElementById("fname").value = localStorage.getItem("FirstName");
  document.getElementById("lname").value = localStorage.getItem("LastName");
  document.getElementById("email").value = localStorage.getItem("Email");
  document.getElementById("avata").src = localStorage.getItem("imgAvata");
}
function logout() {
  localStorage.clear();
  window.location.assign(`login.html`);
}