// this script is under the MIT license (https://maxpixels.moe/resources/license.txt)

let domain = "bulletincorner.nekoweb.org"; // <<<--- Insert your domain here!

(async () => {
    try {
    const request = await fetch(`https://nekoweb.org/api/site/info/${domain}`);
    const json = await request.json();

    const updated_month = new Date(json.updated_at).getMonth() + 1;
    const updated_day = new Date(json.updated_at).getDate();
    const updated_year = new Date(json.updated_at).getFullYear();
    const updated = String(updated_month).padStart(2, '0') + "/" + String(updated_day).padStart(2, '0') + "/" + String(updated_year).padStart(2, '0')

    const version = String(updated_month).padStart(2, '0') + "." + String(updated_day).padStart(2, '0') + "." + String(updated_year).padStart(2, '0')

    const created = new Date(json.created_at).toLocaleDateString(); // Formats Creation Date text

    if (document.getElementById("stat-created"))
        document.getElementById("stat-created").innerHTML =
        `<em>Created</em>: ${created}`;

    if (document.getElementById("stat-updated"))
        document.getElementById("stat-updated").innerHTML =
        `<span class="subtle">// UPDATED :</span> ${updated}`;

    if (document.getElementById("stat-version"))
        document.getElementById("stat-version").innerHTML =
        `${version}`;

    if (document.getElementById("stat-visitors"))
        document.getElementById("stat-visitors").innerHTML =
        `<span class="subtle">// VISITS :</span> ${String(json.views).padStart(5, '0')}`;

    if (document.getElementById("stat-followers"))
        document.getElementById("stat-followers").innerHTML =
        `<span class="subtle">// FOLLOWERS :</span> ${String(json.followers).padStart(5, '0')}`;

    } catch (error) {
    console.error(error);
    // If you wish to insert some fallback here, you may do so!
    }
})();