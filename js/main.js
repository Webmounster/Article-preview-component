const btn = document.querySelector('.fondo-btn');
const imgBtn = document.querySelector('.img-myshare');
const share = document.querySelector('.section3__share');

btn.addEventListener('click', () => {
    console.log(share.classList);
    classShare = share.classList;
    if (classShare.contains('normal')) {
        share.style.animation = 'share-normal 1s ease-in-out 0s 1 normal forwards';
        btn.style.animation = 'colorBtn-normal 1s  forwards';
        imgBtn.style.filter = 'invert(100%) brightness(4) grayscale(1)';
        classShare.replace('normal', 'reverse');
    }
    else if (classShare.contains('reverse')) {
        share.style.animation = 'share-reverse 1s ease-in-out 0s 1 normal forwards';
        btn.style.animation = 'colorBtn-reverse 1s  forwards';
        imgBtn.style.filter = 'invert(0%) brightness(1) grayscale(0)';
        classShare.replace('reverse', 'normal');
    }

})