
const uidCacheRef = database.collection("Users").doc("account-id");
const incorrectpwd = document.getElementById("incorrectpwd");
var codes = []

uidCacheRef.get().then(function(doc) {
    if (doc.exists) {
        var cache = doc.data();
        codes = cache['user-id'];
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        console.error();
    }
});

function verifyUID(){
    console.log(codes);
    var userCode = document.getElementById("myInput").value;
    var storage = window.sessionStorage;
    incorrectpwd.style.display = "none";
    if (codes.indexOf(userCode) != -1){
        sessionStorage.setItem("UID", userCode);
        console.log('Valid Code');
        return true;
    }
    incorrectpwd.style.display = "block";
    return false;
}