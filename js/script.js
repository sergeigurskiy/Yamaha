'use strict'
document.addEventListener('DOMContentLoaded', function(){
    const imgMobile = (imgBody, img) => {
    const imgParent = document.querySelector(imgBody),
          image = imgParent.querySelector(img)
    
   window.addEventListener( 'resize' , function(e){
       if(this.screen.availWidth < 321){
            image.setAttribute('src','images/women-mobile.png');
       } else {
            image.setAttribute('src','images/women.png');
       }
   });
}
imgMobile('.block-forSport-body-left-wm__img', 'img');;
    
const animElem = document.querySelectorAll('._elem-anim');

window.addEventListener('scroll', scrolling)

function scrolling(){
    if(animElem.length > 0){
        for(let i = 0; i < animElem.length; i++){
            const elem = animElem[i];
            const elemHeight = elem.offsetHeight;
            const elemTop = offset(elem).top
            const animStart = 9
    
            let startAnimate = window.innerHeight - elemHeight / animStart
    
            if(window.innerHeight < elemHeight){
                startAnimate = window.innerHeight - window.innerHeight / animStart
            }
            if((pageYOffset > elemTop - startAnimate) && pageYOffset < (elemTop + elemHeight)){
                elem.classList.add('_active')
            } else {
                elem.classList.remove('_active')
            }
        }
    }
}
function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop}
}


;
})
