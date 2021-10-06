export function pageLoad(page) {
    const sectionContainer = document.getElementById('sectionContainer');
    sectionContainer.innerHTML = '';
    sectionContainer.appendChild(page);
}