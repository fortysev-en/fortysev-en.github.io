var firebaseConfig = {
  apiKey: "AIzaSyBjk1Yl311XbB-028MzZ_lxMHgsztLz7dg",
  authDomain: "fortyseven-contact-form-deb4b.firebaseapp.com",
  databaseURL: "https://fortyseven-contact-form-deb4b.firebaseio.com",
  projectId: "fortyseven-contact-form-deb4b",
  storageBucket: "fortyseven-contact-form-deb4b.appspot.com",
  messagingSenderId: "935932983038",
  appId: "1:935932983038:web:b819c53f9f05a14e4617af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const submitBtn = document.querySelector("#submit");

let userName = document.querySelector("#userFullName");
let userEmail = document.querySelector("#userEmail");
let userMessage = document.querySelector("#userMessage");

const db = firestore.collection("collectData");

function reset_form()
{
  var fm=document.getElementById('contact-form');
  fm.reset();
}

document.getElementById("submit").addEventListener("click", function(){
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  let userMessageInput = userMessage.value;

  if (userNameInput == "") {}
  else if (userEmailInput == "") {}
  else if (userMessageInput == "") {}
  else {
    db.doc()
    .set({
      name: userNameInput,
      email: userEmailInput,
      messege: userMessageInput
      });
        alert("Thank you for showing your interest! I'll soon get in touch with you within next 48 hours. Cheers!!");
        setTimeout("reset_form()",1000);
  }
});
