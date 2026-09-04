let update_Month = "09";
let update_Day = "04";
let update_Year = "2026";

let lastUpdate = update_Month + "/" + update_Day + "/" + update_Year;
let versionNumber = update_Month + "." + update_Day + "." + update_Year;

document.getElementById("stat-LastUpdate").innerHTML = lastUpdate;
document.getElementById("stat-Version").innerHTML = versionNumber;