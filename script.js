let firstclick = false;
let secondclick = false;
function ChangeColor(elem){
    if (elem.id === 'first'){
        if (!firstclick) {
            firstclick = true;
            elem.style.color = "red";
            elem.style.background = '#2c2c2c';
        }
        else{
            firstclick = false;
            elem.style.color = "black";
            elem.style.background = "white";
        }
    }
    if (elem.id === 'second'){

        if (!secondclick) {
            secondclick = true;
            elem.style.color = "#55b0c9";
            elem.style.background = '#4d4d4d';
        }
        else{
            secondclick = false;
            elem.style.color = "black";
            elem.style.background = "white";
        }
    }
}
function add(){
    const elem = document.querySelector('#pic');
    const a = prompt("Впишіть посилання на потрібну вам картинку:");
    if (a){
        elem.src = a;
    }
}
function zoomIn(){
    const elem = document.querySelector('#pic');
    elem.style.height = (parseInt(elem.style.height) + 20).toString() + "px";
    elem.style.width = (parseInt(elem.style.width) + 20).toString() + "px";
}
function zoomOut(){
    const elem = document.querySelector('#pic');
    elem.style.height = (parseInt(elem.style.height) - 20).toString() + "px";
    elem.style.width = (parseInt(elem.style.width) - 20).toString() + "px";
}
function clearImage(){
    const elem = document.querySelector('#pic');
    elem.src = "";
}