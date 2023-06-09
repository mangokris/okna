let bl= document.getElementsByClassName("block")[0];
let btn = document.getElementsByClassName("measure__material")[0];

btn.addEventListener("change", function () {

    bl.classList.add("block--active");
}); 


var phone = document.getElementById('phone');
var opt = {
    mask: '+{7}(000)000-00-00'
} 
var mask = new IMask(phone, opt);

document.getElementById("email").placeholder = "example@gmail.com"