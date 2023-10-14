let body = document.getElementById('body');
function warna() {
    let color = document.getElementById('pilih').value;
    body.classList.replace("light", color);
    body.classList.replace("dark", color);
    body.classList.replace("brown", color);
    body.classList.replace("navy", color);
}