
const uidCacheRef = database.collection("codes").doc("codelist");
const users = database.collection("users");
const incorrectpwd = document.getElementById("incorrectpwd");
var used = [];
var codes = [];

uidCacheRef.get().then(function(doc) {
    if (doc.exists) {
        var cache = doc.data();
        codes = cache['codes'];
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        console.error();
    }
});

function verifyUID(){
    console.log(codes);
    var valid = true;
    var userCode = document.getElementById("myInput").value;
    var storage = window.sessionStorage;
    incorrectpwd.style.display = "none";
    users.where("code","==", userCode)
                .get().then(
                    (snapshot)=>{
                        if (snapshot.docs.length){
                            valid = false;
                        }
                    });
    if ((codes.indexOf(userCode) != -1) && valid){
        sessionStorage.setItem("UID", userCode);
        console.log('Valid Code');
        return true;
    }
    incorrectpwd.style.display = "block";
    return false;
}