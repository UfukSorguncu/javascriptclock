let fullName = prompt(" Lütfen Adınızı Giriniz: ");

let myName = document.querySelector("#myName");

myName.innerHTML = ` ${myName.innerHTML} ${fullName} `




const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()

myClock.innerHTML = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`