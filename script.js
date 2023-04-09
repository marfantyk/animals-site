let x = document.getElementById("x");
var click = 0;
x.onclick = function() {
    let parent = x.parentElement;
    if (parent.classList.contains("appearing")){
        parent.classList.remove("appearing");
        parent.classList.add("dissapearing");
        setTimeout(()=> {
            parent.style.display="none";
            parent.classList.remove("dissapearing");
        }, 300);

    }
}

let clouds = document.getElementsByClassName("cloud-pop")

for (let i = 0; i < clouds.length; i++){
    let cloud = clouds[i];
    cloud.onclick = function (){
        if (click < 5){
            click= click + 1;
        }
        else{
            click = 1;
        }
        let x = document.getElementById("x")
        x.previousSibling.previousSibling.firstChild.nextSibling.src = "images/animal" + click + ".jpg"
        x.parentElement.style.display="block";
        x.parentElement.classList.add("appearing");
    }
}
