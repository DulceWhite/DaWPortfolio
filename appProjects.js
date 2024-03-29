
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slideLenght = slideRight.querySelectorAll("div").length;

console.log(sliderContainer.clientHeight);
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slideLenght-1) * 80}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slideLenght -1){
            activeSlideIndex = 0;
        }
    }else if (direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLenght -1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}