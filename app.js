const menuBtn  = document.getElementsByClassName("menu-btn")

const mobilMenu = document.getElementsByClassName("mobil-menu")

const exitMenu = document.getElementsByClassName('close-icon')

const clickedBtn =  () => {

    mobilMenu[0].classList.toggle('active')
    mobilMenu[0].classList.toggle('flex')

 
}  

const clickedExit = () => {
    
    mobilMenu[0].classList.toggle('active')
    mobilMenu[0].classList.toggle('flex')

}





menuBtn[0].addEventListener('click', clickedBtn)



exitMenu[0].addEventListener('click', clickedExit)
