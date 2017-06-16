{
    let mode = 'write'; // or 'write'
    let allAlbums = Array.from(document.querySelectorAll(
        'paper-item.center.horizontal.layout.style-scope.google-photos-page.x-scope.paper-item-0'));
    let name = (x) => x.querySelector('.setting-label.style-scope.google-photos-page').innerText;
    if (mode === 'read') {
        window.selectedAlbums = allAlbums
            .filter((x) => x.querySelectorAll('.paper-checkbox.checked').length > 0)
            .map(name);
    } else {
        allAlbums
            .filter((x) => window.selectedAlbums.indexOf(name(x)) >= 0)
            .forEach((x) => x.click());
    }
}
