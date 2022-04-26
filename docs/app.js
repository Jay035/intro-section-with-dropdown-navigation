const hamburger = document.querySelector('.hamburger');
const closeBtn = document.getElementById('close-btn');
const menu = document.querySelector('.menu');
const ul = document.querySelector('ul');
const menuList = document.querySelectorAll('.accordion');

// event listeners
// ul.addEventListener('click', showMenu, false);

// show menu function
hamburger.addEventListener('click', () =>{
    menu.classList.add('active')
})

// hide menu function 
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
})

// show dropDown
for(let i = 0;i < menuList.length; i++){
    menuList[i].onclick = function () {
        let list = this.classList.toggle('active')
    }
    console.log(menuList[i])
}
// function showMenu(e) {
//     let parentElement = e.target.parentElement;
//     if(parentElement.classList.contains('accordion')){
//         parentElement.classList.toggle('active');
//     }
//     console.log(e.target)
// }



