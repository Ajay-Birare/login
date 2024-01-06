let loginInfoForm = document.querySelector(".loginInfo");
let createAccountForm = document.querySelector(".createAccount");

let newUser = document.querySelector("#newUsername");
let newPass = document.querySelector("#newPassword");

createAccountForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(newUser.value);
  console.log(newPass.value);

  let customerData = JSON.parse(localStorage.getItem("userLoginData"));

  //   before going to create new account
  //   check the user is already here or not

  let flag = false;

  customerData.forEach((data) => {
    if (data.userName == newUser.value) {
      newUser.value = "";
      newPass.value = "";
      alert("the username is already in use");
      flag = true;
      //   return;
    }
  });

  if (flag == true) {
    return;
  } else {
    storeData(newUser.value, newPass.value);
    // window.open("accountCreated.html");
  }

  newUser.value = "";
  newPass = "";
});

//______________________________________________________________________
//Storage

function storeData(username, password) {
  let objArray = JSON.parse(localStorage.getItem("userLoginData"));
  let newUser = { userName: username, passWord: password };

  objArray.push(newUser);
  localStorage.setItem("userLoginData", JSON.stringify(objArray));
}

console.log(JSON.parse(localStorage.getItem("userLoginData")));
