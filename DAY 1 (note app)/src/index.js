
function check() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}


function display() {
    if(check() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "No note saved";
    }
    document.getElementById('area').value = result;
}

document.getElementById("button").addEventListener("click",save)
function save() {
    if(check() == true) {
        var area = document.getElementById("area");
        if(area.value != '') {
            localStorage.setItem("note", area.value);
        }
        else {
            alert("Nothing to save");
        }
    }
}

document.getElementById("buttonn").addEventListener("click",clear)
function clear() {
    document.getElementById('area').value = "";

}

