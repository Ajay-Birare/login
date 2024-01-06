// containers
let loginInfoForm = document.querySelector(".loginInfo");
let createAccountForm = document.querySelector(".createAccount");

//______________________________________________________________________
// User Data (login info);

let user = document.querySelector("#userName");
let pass = document.querySelector("#passWord");

// If localStorage doesn't have userLoginData, initialize it with a default user
if (localStorage.getItem("userLoginData") === null) {
  const dataBase = [{ userName: "Ajay Birare", passWord: "123" }];
  localStorage.setItem("userLoginData", JSON.stringify(dataBase));
}

const dataBase = JSON.parse(localStorage.getItem("userLoginData"));

localStorage.setItem("userLoginData", JSON.stringify(dataBase));
console.log(localStorage);

//______________________________________________________________________
// Login Information

loginInfoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const datas = JSON.parse(localStorage.getItem("userLoginData"));

  let flag = false;
  datas.forEach((data) => {
    if (data.userName == user.value && data.passWord == pass.value) {
      console.log("succesfull ");
      window.location.href = "page.html";
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

//Storage

function storeData(username, password) {
  let objArray = JSON.parse(localStorage.getItem("userLoginData"));
  let newUser = { userName: username, passWord: password };

  objArray.push(newUser);
  localStorage.setItem("userLoginData", JSON.stringify(objArray));
}

console.log(JSON.parse(localStorage.getItem("userLoginData")));
