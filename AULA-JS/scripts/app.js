document.getElementById("toggle").addEventListener('click', function() {
    const info = document.getElementById("info");

    if (info.style.display === 'none'){
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
    
});