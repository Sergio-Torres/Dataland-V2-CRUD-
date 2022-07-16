/*
 * This file handles the styling and functionality of the modal window (due to css issues).
 * the changes that were made in Css were not loaded in the page.
 *
 * */
let modal = document.getElementById('modal-posts');
let modalBody = document.getElementById('modal-body');
const modalBtn = document.querySelector('.modal-btn');
const btnClose = document.getElementById('btn-close');


let modalActive = 0;

/*** modal style ***/

//modal background style

modal.style.backgroundColor = "rgba(0,0,0,0.5)";
modal.style.position = 'fixed';
modal.style.width = '100%';
modal.style.height = '100vh';
modal.style.top = '0';
modal.style.left = '0';
modal.style.zIndex = '1';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.visibility = 'hidden';
modal.style.opacity = '0';
modal.style.transition = 'visibility 0s, opacity 0.5s';

//button modal close
btnClose.style.position = 'absolute';
btnClose.style.top = '10px';
btnClose.style.right = '10px';
btnClose.style.border = 'none';
btnClose.style.backgroundColor = "#FFFFFF";
btnClose.style.cursor = 'pointer';
//modal body

modalBody.style.position = 'relative';
modalBody.style.backgroundColor = "#FFFFFF";
modalBody.style.width = '40%';
modalBody.style.height = '50%';
modalBody.style.display = 'flex';
modalBody.style.justifyContent = 'space-around';
modalBody.style.alignItems = 'center';
modalBody.style.flexDirection = 'column';
modalBody.style.padding =  '10px';

/*** modal functionality ***/

modalBtn.addEventListener('click', ()=>{
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
})

btnClose.addEventListener('click', ()=>{
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';

})
