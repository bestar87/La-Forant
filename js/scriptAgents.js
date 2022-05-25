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


$(function () {
    let slides = $(".slide");
    slides.hide();
    let currIdx = 0;
    let minIdx = 0;
    let maxIdx = slides.length - 1; 
    slides.eq(0).show();

    $("#slide-right").click(()=>{
        slides.eq(currIdx).hide();
        currIdx++;

        if(currIdx > maxIdx) currIdx = minIdx;
        slides.eq(currIdx).fadeIn();
    });

    $("#slide-left").click(()=>{
        slides.eq(currIdx).hide();
        currIdx--;
        
        if(currIdx < minIdx) currIdx = maxIdx;
        slides.eq(currIdx).fadeIn();
    }); 
});