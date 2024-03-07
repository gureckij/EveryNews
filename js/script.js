let articleSections = document.querySelectorAll('.main-article-section.short');

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');

    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    };
}
