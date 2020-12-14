
<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyASzBw3EDtsRNrqssH6KTI3xjGDULtVOt4",
    authDomain: "feedback-9fd6e.firebaseapp.com",
    projectId: "feedback-9fd6e",
    storageBucket: "feedback-9fd6e.appspot.com",
    messagingSenderId: "992938470544",
    appId: "1:992938470544:web:a5318c927d4b0f1c917c15",
    measurementId: "G-2GGL5TWJY9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>


var messagesRef = firebase.database().ref('messages');


//listen for form submit

document.getElementById('feedback').addEventListener('submit',submitForm);


function submitForm(e) {
	// body...
	e.preventDefault();

	var Email=getInputval("email");
	var Message=getInputval("text1");

	saveMessage(Message,Email);
}

//function to get form values
function getInputval(id){
	return document.getElementById(id).value;
}

function saveMessage(email,message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		Email:email,
		Message:text1
	})
}