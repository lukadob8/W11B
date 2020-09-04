function getInfo() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let jsonInfo = JSON.parse(this.responseText);
            document.getElementById('info').setAttribute('src', jsonInfo.file);
        } else if(this.readyState != 4) {
            document.getElementById('info').innerHTML = "Loading";
        } else {
            document.getElementById('info').innerHTML = "Error";
        }
    }

    ajax.open("GET", "https://aws.random.cat/meow", true);
    ajax.send();
}

document.getElementById("refresh").addEventListener("click", getInfo);