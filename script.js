let x = document.getElementById("x");
x.onclick = function() {
    x.parentElement.style.display="none";
}

let clouds = document.getElementsByClassName("cloud-pop")

for (let i = 0; i < clouds.length; i++){
    let cloud = clouds[i];
    cloud.onclick = function (){
        document.getElementById("x").parentElement.style.display="block";
    }
}
