var count = 2;

document.querySelector('table').addEventListener('click', onClick);

function onClick() {
    if (count%2 == 0) {
        document.getElementById('s1').style.backgroundColor = 'white';
        document.getElementById('s2').style.backgroundColor = 'black';
        document.getElementById('s3').style.backgroundColor = 'black';
        document.getElementById('s4').style.backgroundColor = 'white';
        count++;
    }
    else {
        document.getElementById('s1').style.backgroundColor = 'black';
        document.getElementById('s2').style.backgroundColor = 'white';
        document.getElementById('s3').style.backgroundColor = 'white';
        document.getElementById('s4').style.backgroundColor = 'black';
        count++;
    }
}