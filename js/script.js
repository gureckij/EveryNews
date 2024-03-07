let articleSection = document.querySelector('.main-article-section');
let articleSections = document.querySelectorAll('.main-article-section');

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');

    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    };
}
