// alert(message)
// Alert has one button: (OK)

// alert("Alert Button: Click Ok to Proceed")

//confrim(message)
// has two buttons: (OK and cancel)
// confirm("Click the Cancel Buttton ")
// if else with confirm 

let confirmMsg = "";

if(confirm("Click Ok to Continue")){
    confirmMsg = "You pressed Ok"
}else{
    confirmMsg = "You Pressed Cancel"
};
document.write(confirmMsg);