window.onscroll = function () { myFunction() };

function myFunction() {
    console.log(document.documentElement.scrollTop);
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("menuId").className = "menu-flotante";
    }
    else{
        document.getElementById("menuId").classList.remove("menu-flotante");
        document.getElementById("menuId").className = "py-3 mt-5";
    }
}