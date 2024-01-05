// containers
let loginInfoForm = document.querySelector(".loginInfo");
let createAccountForm = document.querySelector(".createAccount");

//______________________________________________________________________
// User Data (login info);

let user = document.querySelector("#userName");
let pass = document.querySelector("#passWord");

//______________________________________________________________________
// new user data(he is check 2 file )
// let newUser = document.querySelector("#newUsername");
// let newPass = document.querySelector("#newPassword");

//______________________________________________________________________
// const dataBase = [{ userName: "Ajay Birare", passWord: "123" }];

if (localStorage.length == 0) {
  const dataBase = [{ userName: "Ajay Birare", passWord: "123" }];
  localStorage.setItem("data", JSON.stringify(dataBase));
}
const dataBase = JSON.parse(localStorage.getItem("data"));

localStorage.setItem("data", JSON.stringify(dataBase));
console.log(localStorage);

//______________________________________________________________________
// Login Information

loginInfoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const datas = JSON.parse(localStorage.getItem("data"));

  let flag = false;
  datas.forEach((data) => {
    if (data.userName == user.value && data.passWord == pass.value) {
      console.log("succesfull ");
      window.open("page.html");
      flag = true;
      return;
    }
  });

  if (flag == false) {
    alert("invalid username or password");
  } else {
    user.value = "";
    pass.value = "";
  }
});

//______________________________________________________________________
//New Account Information

// createAccountForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(newUser.value);
//   console.log(newPass.value);

//   let customerData = JSON.parse(localStorage.getItem("data"));

//   //   before going to create new account
//   //   check the user is already here or not

//   let flag = false;

//   customerData.forEach((data) => {
//     if (data.userName == newUser.value) {
//       newUser.value = "";
//       newPass.value = "";
//       alert("the username is already in use");
//       flag = true;
//       //   return;
//     }
//   });

//   if (flag == true) {
//     return;
//   } else {
//     storeData(newUser.value, newPass.value);
//   }

//   newUser.value = "";
//   newPass = "";
// });

//______________________________________________________________________
//Storage

function storeData(username, password) {
  let objArray = JSON.parse(localStorage.getItem("data"));
  let newUser = { userName: username, passWord: password };

  objArray.push(newUser);
  localStorage.setItem("data", JSON.stringify(objArray));
}

console.log(JSON.parse(localStorage.getItem("data")));
