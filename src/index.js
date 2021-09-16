const content = document.getElementById('content')

function pageLoad(page) {
    content.innerHTML = '';
    content.appendChild(page);
}