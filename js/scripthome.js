let flag = false;

let toogleNavbar = function() {
    let element = document.getElementById('toogleMenu');
    let element2= document.getElementById('toogleMenu2');
    let element3 = document.getElementById('formSection');
    if(flag == false){
        element.style.display = 'flex';
        element2.style.display = 'flex';
        flag = true;
    }
    else{
        element.style.display = 'none';
        element2.style.display = 'none';
        flag = false;
    }
}

