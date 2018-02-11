(function() {
    var output = document.getElementById("data");
    var config = {
    apiKey: "AIzaSyDbnMKw8l2R65PlFBNKiJHCFnKSNvGXfLs",
    authDomain: "sdy51ergasi3.firebaseapp.com",
    databaseURL: "https://sdy51ergasi3.firebaseio.com",
    projectId: "sdy51ergasi3",
    storageBucket: "sdy51ergasi3.appspot.com",
    messagingSenderId: "274950697358"
    };
    firebase.initializeApp(config);
    var ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
        output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
    });
})();
