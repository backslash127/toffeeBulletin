let day = new Date().getDate().toString()// .padStart(2, "0");
let month =(new Date().getMonth() + 1).toString()//.padStart(2, "0");
let year = new Date().getFullYear().toString()//.padStart(2, "0");

let formattedDate = month.padStart(2, '0') + "/" + day.padStart(2, '0') + "/" + year.padStart(2, '0');

document.getElementById("stat-date").innerHTML = `<span class="subtle">// DATE :</span> ${formattedDate}`;