function btnDropdown () {
    document.getElementById("nav__btn-dropdown").classList.toggle("show");
}

window.onclick = (event) => {
    if (!event.target.matches('.dropdown')) {
        let el = document.getElementsByClassName("dropdown");
        console.log (el.length);
        for(let i = 0; i < el.length; i++){
            if (el[i].classList.contains("show")){
                el[i].classList.remove("show");
            }
        }
    }


}