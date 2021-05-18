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

var green_inner_html = document.querySelector(".green-inner-alert-msg");
var red_inner_html = document.querySelector(".red-inner-alert-msg");
const green_div = document.querySelector(".alert-popup-green");
const red_div = document.querySelector(".alert-popup-red");

// Listen for subscription form submit
document.getElementById("subscribe-form").addEventListener("submit", updateSubscribeEmail);

// Listen for suggestions form submit
document.getElementById("suggestions-form").addEventListener("submit", updateSuggestions);

//---------------------Subscription Email Form-------------------------------------

function updateSubscribeEmail(event) {
	// Reference messages collection
	var messagesRef = firebase.database().ref("Subscription Emails");
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
		saveMessage(email);
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
	function saveMessage(email) {
		var newMessageRef = messagesRef.push();
		newMessageRef.set({
			Email: email
		});
	}
}

//---------------------------------Suggestions Form--------------------------------------------
function updateSuggestions(event) {
	var suggmessagesRef = firebase.database().ref("Suggestions Form");

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
		saveMessage(suggemail, suggname, suggmessage);
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
	function saveMessage(suggemail, suggname, suggmessage) {
		var newsuggMessageRef = suggmessagesRef.push();
		newsuggMessageRef.set({
			Name: suggname,
			Email: suggemail,
			Message: suggmessage,
		});
	}
}