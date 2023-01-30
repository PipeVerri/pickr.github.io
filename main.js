const a = fetch("http://localhost:5000", {
    method: "GET"
}).then(response => response.json()).then(data => {
    var projects = []
    for (var i = 0; i < data.results.length; i++) {
        var titleParsed = data.results[i].properties.Name.title[0].plain_text
        if (data.results[i].icon.type === "emoji") {
            titleParsed = data.results[i].icon.emoji + " " + titleParsed
        }
        if (!(data.results[i].properties.Status.status.name === "Done")) {
            projects.push(titleParsed)
        }
    }
    var project = projects[Math.floor(Math.random()*projects.length)];
    var i = 0;
    var txt = project
    var speed = 50; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("project").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
})
