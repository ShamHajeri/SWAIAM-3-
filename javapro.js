  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDlgdHWVznXYcfEUCmUlN9eSjJg46XzC6c",
    authDomain: "swaiam-3.firebaseapp.com",
    projectId: "swaiam-3",
    storageBucket: "swaiam-3.appspot.com",
    messagingSenderId: "561694857534",
    appId: "1:561694857534:web:533323e1757e196371346f",
    measurementId: "G-DL5Q3R5YMV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    // promise.catch(e=>alert(e.message));
    // alert("SignUp Successfully");
    SignIn_page()
   
   
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    // promise.catch(e=>alert(e.message));
    document.getElementById("navbar_id").style.display = "unset";
   
  }
  
  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }
 
  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{

    document.getElementById("dashboard_page").style.display = "none";
    document.getElementById("Sign_page").style.display = "none";
    document.getElementById("Login_page").style.display = "none";
    document.getElementById("Electric_page").style.display = "none";
    document.getElementById("Water_page").style.display = "none";
    document.getElementById("Gas_page").style.display = "none";
    if(user){
      
      var email = user.email;
      alert("Active user "+email);
      document.getElementById("dashboard_page").style.display = "unset";
      document.getElementById("navbar_id").style.display = "unset";

    }else{
    
      document.getElementById("Login_page").style.display = "unset";
      document.getElementById("navbar_id").style.display = "none";
    }
  })

  function SignUp_page(){
    document.getElementById("Login_page").style.display = "none";
    document.getElementById("Sign_page").style.display = "unset";
    document.getElementById("dashboard_page").style.display = "none";
    document.getElementById("Electric_page").style.display = "none";
    document.getElementById("Water_page").style.display = "none";
    document.getElementById("Gas_page").style.display = "none";
    document.getElementById("navbar_id").style.display = "none";
    
  } 
  function SignIn_page(){
    document.getElementById("Login_page").style.display = "unset";
    document.getElementById("Sign_page").style.display = "none";
    document.getElementById("dashboard_page").style.display = "none";
    document.getElementById("Electric_page").style.display = "none";
    document.getElementById("Water_page").style.display = "none";
    document.getElementById("Gas_page").style.display = "none";
    document.getElementById("navbar_id").style.display = "none";
  } 
  function Dashboard_page(){
    document.getElementById("Login_page").style.display = "none";
    document.getElementById("Sign_page").style.display = "none";
    document.getElementById("dashboard_page").style.display = "unset";
    document.getElementById("Electric_page").style.display = "none";
    document.getElementById("Water_page").style.display = "none";
    document.getElementById("Gas_page").style.display = "none";
    document.getElementById("navbar_id").style.display = "unset";

  }
  function Electric_page(){
    document.getElementById("Login_page").style.display = "none";
    document.getElementById("Sign_page").style.display = "none";
    document.getElementById("dashboard_page").style.display = "none";
    document.getElementById("Electric_page").style.display = "unset";
    document.getElementById("Water_page").style.display = "none";
    document.getElementById("Gas_page").style.display = "none";
    document.getElementById("navbar_id").style.display = "unset";
  }
  function Water_page(){
    document.getElementById("Login_page").style.display = "none";
    document.getElementById("Sign_page").style.display = "none";
    document.getElementById("dashboard_page").style.display = "none";
    document.getElementById("Electric_page").style.display = "none";
    document.getElementById("Water_page").style.display = "unset";
    document.getElementById("Gas_page").style.display = "none";
    document.getElementById("navbar_id").style.display = "unset";
  } 
  function Gas_page(){
    document.getElementById("Login_page").style.display = "none";
    document.getElementById("Sign_page").style.display = "none";
    document.getElementById("dashboard_page").style.display = "none";
    document.getElementById("Electric_page").style.display = "none";
    document.getElementById("Water_page").style.display = "none";
    document.getElementById("Gas_page").style.display = "unset";
    document.getElementById("navbar_id").style.display = "unset";
  } 
  function Setting_page(){
    document.getElementById("Login_page").style.display = "none";
    document.getElementById("Sign_page").style.display = "unset";
    document.getElementById("dashboard_page").style.display = "none";
    document.getElementById("Electric_page").style.display = "none";
    document.getElementById("Water_page").style.display = "none";
    document.getElementById("Gas_page").style.display = "none";
    document.getElementById("navbar_id").style.display = "unset";
  }




 // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("user");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  

  contactFormDB.set({
    Electric_meter: name,
   Water_meter: emailid,
   Gas_meter: msgContent,
  });
};