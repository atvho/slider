function fun1(){
    let sel = document.getElementById('mySelect').selectedIndex;
    let options = document.getElementById('mySelect').options;
    alert('Выбрана опция ' + options[sel].text + ' ' + options[sel].value);
}
function fun2() {
    let rad = document.getElementsByName('r1');
    for (let i=0; i<rad.length; i++) {
        if (rad[i].checked) {
            alert('Выбран ' + i + ' radiobutton')
        }
    }
}
function fun3() {
    let chbox = document.getElementById('one');
        if(chbox.checked){
            alert('Выбран');
        }
        else{
            alert('Не выбран');
        }
}
function fun4() {
    let rng = document.getElementById('r2');
    let data = document.getElementById('data');
    let div = document.getElementById('test');
    data.value = rng.value;
    div.style.width = rng.value + 'px';
}