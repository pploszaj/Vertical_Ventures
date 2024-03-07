function aboutAnimation() {
    const triggerBottom = window.innerHeight / 5 * 4;

    const descTop = description.getBoundingClientRect().top;

    if(descTop < triggerBottom) {
        description.classList.add('show');
        description_btn.classList.add('show');
    } else {
        description.classList.remove('show');
        description_btn.classList.remove('show');
    }
}

const description = document.querySelector('.desc');
const description_btn = document.querySelector('.desc.btn');


window.addEventListener('scroll', aboutAnimation);

aboutAnimation();