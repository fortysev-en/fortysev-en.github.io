var firebaseConfig = {
	apiKey: "AIzaSyBjk1Yl311XbB-028MzZ_lxMHgsztLz7dg",
	authDomain: "fortyseven-contact-form-deb4b.firebaseapp.com",
	databaseURL: "https://fortyseven-contact-form-deb4b.firebaseio.com",
	projectId: "fortyseven-contact-form-deb4b",
	storageBucket: "fortyseven-contact-form-deb4b.appspot.com",
	messagingSenderId: "935932983038",
	appId: "1:935932983038:web:b819c53f9f05a14e4617af",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Get current date and time of the user
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;

// Defining Alerts
var green_inner_html = document.querySelector(".green-inner-alert-msg");
var red_inner_html = document.querySelector(".red-inner-alert-msg");
const green_div = document.querySelector(".alert-popup-green");
const red_div = document.querySelector(".alert-popup-red");

// Portfolio - Listen for the portfolio submit button
document.getElementById("contact-form").addEventListener("submit", portfolioContact);

// About - Listen for subscription form submit
document.getElementById("subscribe-form").addEventListener("submit", updateSubscribeEmail);

// About - Listen for suggestions form submit
document.getElementById("suggestions-form").addEventListener("submit", updateSuggestions);

//--------------------------Portfolio Contact Form--------------------------------
function portfolioContact(event) {
	var suggmessagesRef = firebase.database().ref("Portfolio Contact Form/" + date);

	event.preventDefault();

	var portemail = getInputVal("portemail");
	var portname = getInputVal("portname");
	var portmessage = getInputVal("portmessage");
	var resetForm = document.getElementById("contact-form");
	var text;

	if (portname == "" || portname.length < 5) {
		text = "Please enter a valid name!";
		red_inner_html.innerHTML = text;
		red_div.style.display = "block";
		setTimeout(function () {
			red_div.style.display = "none";
		}, 5000);
		return false;
	}

	if (
		portemail == "" ||
		portemail.indexOf("@") == -1 ||
		portemail.length < 6
	) {
		text = "Please enter a valid email address!";
		red_inner_html.innerHTML = text;
		red_div.style.display = "block";
		setTimeout(function () {
			red_div.style.display = "none";
		}, 5000);
		return false;
	}

	if (portmessage == "" || portmessage.length <= 10) {
		text = "Some more information would be better!";
		red_inner_html.innerHTML = text;
		red_div.style.display = "block";
		setTimeout(function () {
			red_div.style.display = "none";
		}, 5000);
		return false;
	} else {
		saveMessage(portemail, portname, portmessage, dateTime);
		resetForm.reset();
		text = "Thank you for reaching out to me. I'll get back to you within 48 hours!";
		green_inner_html.innerHTML = text;
		green_div.style.display = "block";
		setTimeout(function () {
			green_div.style.display = "none";
		}, 5000);
	}

	// Function to get get form values
	function getInputVal(id) {
	return document.getElementById(id).value;
	}

	// Save message to firebase
	function saveMessage(portemail, portname, portmessage, dateTime) {
		var newsuggMessageRef = suggmessagesRef.push();
		newsuggMessageRef.set({
			Name: portname,
			Email: portemail,
			Message: portmessage,
			Date: dateTime
		});
	}
}


//---------------------Subscription Email Form-------------------------------------

function updateSubscribeEmail(event) {
	// Reference messages collection
	var messagesRef = firebase.database().ref("Subscription Emails/" + date);
	var resetForm = document.getElementById("subscribe-form");
	
	// To avoid entire page getting refreshed
	event.preventDefault();

	// Get values
	var email = getInputVal("email");

	var text;
	if (email.indexOf("@") === -1 || email.length < 6) {
		text = "Please enter a valid email address!";
		red_inner_html.innerHTML = text;
		red_div.style.display = "block";
		setTimeout(function () {
			red_div.style.display = "none";
		}, 5000);
	} else {
		saveMessage(email, dateTime);
		resetForm.reset();
		text = "You have successfully subscribed!";
		green_inner_html.innerHTML = text;
		green_div.style.display = "block";
		setTimeout(function () {
			green_div.style.display = "none";
		}, 5000);
	}

	// Function to get get form values
	function getInputVal(id) {
		return document.getElementById(id).value;
	}

	// Save message to firebase
	function saveMessage(email, dateTime) {
		var newMessageRef = messagesRef.push();
		newMessageRef.set({
			Email: email,
			Date: dateTime
		});
	}
}

//---------------------------------Suggestions Form--------------------------------------------
function updateSuggestions(event) {
	var suggmessagesRef = firebase.database().ref("Suggestions Form/" + date);

	event.preventDefault();

	var suggemail = getInputVal("sugemail");
	var suggname = getInputVal("sugname");
	var suggmessage = getInputVal("sugmessage");
	var resetForm = document.getElementById("suggestions-form");
	var text;

	if (suggname == "" || suggname.length < 5) {
		text = "Please enter a valid name!";
		red_inner_html.innerHTML = text;
		red_div.style.display = "block";
		setTimeout(function () {
			red_div.style.display = "none";
		}, 5000);
		return false;
	}

	if (
		suggemail == "" ||
		suggemail.indexOf("@") == -1 ||
		suggemail.length < 6
	) {
		text = "Please enter a valid email!";
		red_inner_html.innerHTML = text;
		red_div.style.display = "block";
		setTimeout(function () {
			red_div.style.display = "none";
		}, 5000);
		return false;
	}

	if (suggmessage == "" || suggmessage.length <= 10) {
		text = "I'll need more information duh! Add some more content.";
		red_inner_html.innerHTML = text;
		red_div.style.display = "block";
		setTimeout(function () {
			red_div.style.display = "none";
		}, 5000);
		return false;
	} else {
		saveMessage(suggemail, suggname, suggmessage, dateTime);
		resetForm.reset();
		text = "Thank you for your suggestion!";
		green_inner_html.innerHTML = text;
		green_div.style.display = "block";
		setTimeout(function () {
			green_div.style.display = "none";
		}, 5000);
	}

	// Function to get get form values
	function getInputVal(id) {
	return document.getElementById(id).value;
	}

	// Save message to firebase
	function saveMessage(suggemail, suggname, suggmessage, dateTime) {
		var newsuggMessageRef = suggmessagesRef.push();
		newsuggMessageRef.set({
			Name: suggname,
			Email: suggemail,
			Message: suggmessage,
			Date: dateTime
		});
	}
}