const d = new Date();
let day = d.getDate();
let year = d.getFullYear();
let month = d.getMonth() + 1;
document.getElementById("demo").innerHTML = day+"/"+year+"/"+month;

