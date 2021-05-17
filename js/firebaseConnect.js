var firebaseConfig = {
	apiKey: "AIzaSyAk0xzpUuH0LYXihigz3OXentCn1T8YC3Q",
	authDomain: "global-testing-env.firebaseapp.com",
	databaseURL: "https://global-testing-env-default-rtdb.firebaseio.com",
	projectId: "global-testing-env",
	storageBucket: "global-testing-env.appspot.com",
	messagingSenderId: "403456253125",
	appId: "1:403456253125:web:129423ef3a31c45a5a24ac",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// // ---------------------Subscription Email Form-------------------------------------
function updateSubscribeEmail() {
	// Reference messages collection
	var messagesRef = firebase.database().ref("Subscription Emails");

	// Listen for form submit
	document
		.getElementById("subscribe-form")
		.addEventListener("submit", submitForm);

	// Submit form
	function submitForm(e) {
		// To avoid entire page getting refreshed
		e.preventDefault();

		// Get values
		var email = getInputVal("email");
		var resetForm = document.getElementById("subscribe-form");
		var green_inner_html = document.querySelector(".green-inner-alert-msg");
		var red_inner_html = document.querySelector(".red-inner-alert-msg");
		const green_div = document.querySelector(".alert-popup-green");
		const red_div = document.querySelector(".alert-popup-red");
		var text;

		setTimeout(() => { 
			if (email == "" || email.indexOf("@") == -1 || email.length < 6) {
			text = "Please enter a valid email address!";
			red_inner_html.innerHTML = text;
			red_div.style.display = "block";
			setTimeout(function () {red_div.style.display = "none";
			}, 6000);
			return false;
			} 
		else {
			// Save message
			saveMessage(email);
			resetForm.reset();
			text = "You have successfully subscribed!";
			green_inner_html.innerHTML = text;
			green_div.style.display = "block";
			setTimeout(function () {
				green_div.style.display = "none";
			}, 6000);
			} 
		}, 1000);
		
	}

	// Function to get get form values
	function getInputVal(id) {
		return document.getElementById(id).value;
	}

	// Save message to firebase
	function saveMessage(email) {
		var newMessageRef = messagesRef.push();
		newMessageRef.set({
			Email: email,
		});
	}
}

//---------------------------------Suggestions Form--------------------------------------------
function updateSuggestions() {
	var suggmessagesRef = firebase.database().ref("Suggestions Form");

	document.getElementById("suggestions-form").addEventListener("submit", submitForm);

	function submitForm(e) {
		e.preventDefault();

		var suggemail = getInputVal("sugemail");
		var suggname = getInputVal("sugname");
		var suggmessage = getInputVal("sugmessage")
		var resetForm = document.getElementById("suggestions-form");

		saveMessage(suggemail, suggname, suggmessage);
		resetForm.reset();
		// Show alert
		document.querySelector(".inner-alert-msg").innerHTML =
			"Thank you for your suggestion! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		document.querySelector(".alert-popup-green").style.display = "block";

		// Hide alert after 3 seconds
		setTimeout(function () {
			document.querySelector(".alert-popup-green").style.display = "none";
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
			Message: suggmessage
		});
	}
}