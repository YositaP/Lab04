function onClick(){
    Switch = !Switch;
    if (Switch){
        click1.classList.add('selected');
        click2.classList.add('selected');
        click3.classList.add('selected');
        click4.classList.add('selected');
    } else {
        click1.classList.remove('selected');
        click2.classList.remove('selected');
        click3.classList.remove('selected');
        click4.classList.remove('selected');
    }
}

let Switch = false;
const click1 = document.querySelector('#s1');
click1.addEventListener('click',onClick);
const click2 = document.querySelector('#s2');
click2.addEventListener('click',onClick);
const click3 = document.querySelector('#s3');
click3.addEventListener('click',onClick);
const click4 = document.querySelector('#s4');
click4.addEventListener('click',onClick);