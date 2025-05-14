const menuButton = document.querySelector('.hdr_burger');
const mobileMenu = document.querySelector('.mobile_menu');
menuButton.addEventListener('click', function(){
    mobileMenu.classList.toggle('active')
});
const popUp = document.querySelector('.popup')
const popUpBtnAll = document.querySelectorAll('[popup_btn]')
// popUpBtn.innerHTML = "ssdsdsd";
const popUpWindow = document.querySelector('.popup_window')
const popUpClose = document.querySelector('.popup_close')
popUpBtnAll.forEach(function(item){
    item.addEventListener('click', function(){
        popUp.classList.add('popup_active')
    })
})
popUpClose.addEventListener('click', function(){
    popUp.classList.remove('popup_active')
})
popUp.addEventListener('click', function(){
    popUp.classList.remove('popup_active')
})
popUpWindow.addEventListener('click', function(event){
    event.stopPropagation()
})