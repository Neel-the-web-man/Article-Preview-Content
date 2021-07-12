let hoverClass=document.getElementById("hover-class");
let fasHoverBox=document.getElementById("fas-share-hover");
fasHoverBox.addEventListener('click',()=>{
    hoverClass.classList.toggle("display");
});
let hoverClassMobile=document.getElementById("hover-class-mobile-id");
let fasmobileHover=document.getElementById("fas-mobile-share-hover");
fasmobileHover.addEventListener("click",()=>{
    fasmobileHover.classList.toggle("share-color-change-class");
    hoverClassMobile.classList.toggle("display");
})