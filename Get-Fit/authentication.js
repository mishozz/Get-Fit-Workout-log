  const initFirebase = ()=>{
    var firebaseConfig = {
      apiKey: "AIzaSyDnWyTH5Q9ncTTtcrqtUfnIDSCOP5qv1yY",
      authDomain: "get-fit-b4dda.firebaseapp.com",
      databaseURL: "https://get-fit-b4dda.firebaseio.com",
      projectId: "get-fit-b4dda",
      storageBucket: "get-fit-b4dda.appspot.com",
      messagingSenderId: "565923853439",
      appId: "1:565923853439:web:00430695cf2e85ea293b4a",
      measurementId: "G-TQP1E3N3PQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  initFirebase();

  const register = ()=>{     
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(data=>{
      window.location.replace("home_page.html");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
   
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      
    
    });
  };


  const login = ()=>{
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(data=>{
      window.location.replace("workout_log.html");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
  };
  
  const logout = () => {
		return firebase.auth().signOut();
	};
  
  
  firebase.auth().onAuthStateChanged(function(user) { 
    if (user) {
      setupHeaderUi(user);
      if(location.pathname.split("/").slice(-1)[0] === "workout_log.html")
      loadHistory(user);
    } else {   
      if(location.pathname.split("/").slice(-1)[0] === "home_page.html" || location.pathname.split("/").slice(-1)[0] === "workout_log.html")
      setupHeaderUi();
    }
  });

  
  