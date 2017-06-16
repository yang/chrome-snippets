{
    let mode = 'read'; // or 'write'
    let allAlbums = Array.from(document.querySelectorAll(
        'paper-item.center.horizontal.layout.style-scope.google-photos-page.x-scope.paper-item-0'));
    let name = (x) => x.querySelector('.setting-label.style-scope.google-photos-page').innerText;
    if (mode === 'read') {
        window.selectedAlbums = allAlbums
            .filter((x) => x.querySelectorAll('.paper-checkbox.checked').length > 0)
            .map(name);
    } else {
        allAlbums
            .filter(name)
            .forEach((x) => x.click());
    }
}
