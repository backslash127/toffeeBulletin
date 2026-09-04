let day = new Date().getDate().toString().padStart(2, "0");
let month =(new Date().getMonth() + 1).toString().padStart(2, "0");
let year = new Date().getFullYear().toString().padStart(2, "0");

let formattedDate = month + "/" + day + "/" + year;

document.getElementById("stat-Date").innerHTML = formattedDate;