var database;

$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyBKdOWnSPjOT1-mU1VCqhbcXNeOBi4bslw",
    authDomain: "stuff-2-do.firebaseapp.com",
    databaseURL: "https://stuff-2-do.firebaseio.com",
    projectId: "stuff-2-do",
    storageBucket: "stuff-2-do.appspot.com",
    messagingSenderId: "250874925668"
  }
  firebase.initializeApp(config);
  database = firebase.database();

  // get user profile information
  const user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }

  //user create account with email
  //submit = Join Now button 
  $("#register-submit").on("click", function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email= $("#email").val();
    var password= $("#password").val();
    var repeatPassword = $("#repeat-password").val();
    if(password === repeatPassword){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(user){
        const user2 = {
          name: name,
          email: user.email
        }
        console.log(user);
        console.log(user2);
        console.log(name);
        $.ajax({
          type: 'POST',
          url: '/api/user',
          data: user2,
        })
      })
      .catch(function(error) {
        console.log(error);
      });
    }
    // Ajax call --> post 
    // router.route('/api/user').post(userController.post);
  });

  //user login with email
  $("#sign-in-submit").on("click", function(){
    event.preventDefault();    
    var email = $("#sign-in-email").val();
    var password = $("#sign-in-password").val();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user){
      console.log(user);
    })
    .catch(function (error) {
      console.log(error);
    });
  });

  // google login
  $("#google").on("click", function () {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  });

  //facebook login
  $("#facebook").on("click", function () {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  });

  //sign out
  $("#sign-out").on("click", function(){
    event.preventDefault();    
    firebase.auth().signOut().then(function() {
      // console.log("signed out!");
      $(".display-user").empty();  
    }).catch(function(error) {
      console.log("something happened with sign out.");
    });
  });

  //listens for changes to user sign in status
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $(".display-user").empty();
      $(".display-user").text(user.displayName);
    } else {
      $(".display-user").text();
      console.log("no user!");
    }
  });

});