function aparecerTexto() {
    const info = document.querySelector("#info");

    if (info.style.display === 'none'){
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
document.querySelector("#toggle").addEventListener('click', aparecerTexto);