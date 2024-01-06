// let userName = document.querySelector("#UserName");
// let password = document.querySelector("#passWord");
// let loginInfo = document.querySelector(".loginInfo");

// const dataBase = [{ userName: "aja", password: "123" }];

// let obj = { userName: "jhon", password: "253" };
// dataBase.push(obj);

// localStorage.setItem("userLoginData", JSON.stringify(dataBase));

// // console.log(localStorage);

// loginInfo.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let user = document.querySelector("#UserName");
//   let pass = document.querySelector("#passWord");

//   let flag = false;

//   dataBase.forEach((data) => {
//     console.log(data.userName);

//     if (data.userName == user.value && data.password == pass.value) {
//       // console.log("success");
//       flag = true;
//       return;
//     }
//   });

//   if (flag == true) {
//     console.log("success");
//     user.value = "";
//     pass.value = "";
//   } else {
//     console.log("the user is not found");
//   }
// });

// const createAccount = document.querySelector(".createAccount");

// createAccount.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // let createAccount = document.querySelector(".createAccount");
//   let userName = document.querySelector(".createAccount #Username");
//   let password = document.querySelector(".createAccount #password");

//   let newUser = { userName: userName.value, password: password.value };

//   dataBase.push(newUser);
//   localStorage.setItem("userLoginData", JSON.stringify(dataBase));

//   console.log(dataBase);

//   console.log(userName.value);
// });

// console.log(localStorage);

// const bringData = JSON.parse(localStorage.getItem("data"));

// console.log(bringData);

document.addEventListener("DOMContentLoaded", () => {
  let loginInfoForm = document.querySelector(".loginInfo");
  let createAccountForm = document.querySelector(".createAccount");

  const dataBase = [{ userName: "aja", password: "123" }];

  let obj = { userName: "jhon", password: "253" };
  dataBase.push(obj);

  localStorage.setItem("userLoginData", JSON.stringify(dataBase));

  loginInfoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let user = document.querySelector("#UserName");
    let pass = document.querySelector("#passWord");

    let flag = false;

    dataBase.forEach((data) => {
      if (data.userName == user.value && data.password == pass.value) {
        flag = true;
        return;
      }
    });

    if (flag) {
      console.log("success");
      user.value = "";
      pass.value = "";
    } else {
      console.log("the user is not found");
    }
  });

  let globalUserName = "";
  let globalUserPassword = "";

  createAccountForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newUserName = document.querySelector("#newUsername");
    let newPassword = document.querySelector("#newPassword");

    let newUser = { userName: newUserName.value, password: newPassword.value };

    globalUserName = newUser.userName;
    globalUserPassword = newUser.password;

    storeData(globalUserName, globalUserPassword);
    dataBase.push(newUser);
    localStorage.setItem("userLoginData", JSON.stringify(dataBase));

    console.log(dataBase);
  });

  const bringData = JSON.parse(localStorage.getItem("data"));
  // console.log(bringData);

  function storeData(user, pass) {
    const newObj = { userName: user, password: pass };
    dataBase.push(newObj);
    localStorage.setItem("userLoginData", JSON.stringify(dataBase));
  }

  // export logininfo
});

// const dataBase = [{ userName: "aja", password: "123" }];

console.log(localStorage);
