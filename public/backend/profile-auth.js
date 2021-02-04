const signupForm = document.querySelector("#CEASE-signup-form");
const users = database.collection("users");

function authorizeAccount(){
    var UID = sessionStorage.getItem("UID");
    
    var usernameUsed = false;

    const userEmailPhone = document.getElementById("email/phone-textbox").value;
    const userName = document.getElementById("username-textbox").value;
    const nonconfirmedPwd = document.getElementById("password-1-textbox").value;
    const confirmedPwd = document.getElementById("password-2-textbox").value;

    
    //all of the hidden elements to show
    const emailWarningDiv = document.getElementById('used-email-password');
    const usernameWarningDiv = document.getElementById('used-username');
    const passwordWarningDiv = document.getElementById('unmatching-passwords');
    const emptyError = document.getElementById('empty-error');

    var return_value = false;

    users.where("user-name", "==", userName).get().then(
        (snapshot)=>{
            if (snapshot.docs.length){
                usernameUsed = true;
            }
        }
    );

    if (userEmailPhone.length == 0 ||userName.length == 0 || nonconfirmedPwd == 0 || confirmedPwd == 0){
        emptyError.style.display = "block";
        return false;
    }

    if (nonconfirmedPwd != confirmedPwd){
        passwordWarningDiv.style.display = "block";
        return false;
    }
    if (usernameUsed){
        usernameWarningDiv.style.display = "block";
        return false;
    }

    auth.createUserWithEmailAndPassword(userEmailPhone, confirmedPwd).then(
        (userCredentials)=>{
            var user = userCredentials.user;
            user.updateProfile({displayName: userName});
            users.doc(userCredentials.user.uid).set({
                username: userName,
                code: UID,
            }).then(
                ()=>{
                    console.log("Added user.")
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                });
            sessionStorage.setItem("User", user);
            location.href='modulesurvey.html';
        }
    ).catch((error)=>{
        if (error.code == 'auth/email-already-in-use'){
            emailWarningDiv.style.display = "block";
        }
    });
}