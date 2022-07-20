/*
 * Modal update (style and functionality)
 *
 */

let modalUpdate = document.getElementById('update-posts');
let modalUpdateBody = document.getElementById('update-body');

const modalBtn = document.getElementById('update-btn');
const btnClose = document.getElementById('btnUpdate-close');
const btnSubmit = document.getElementById('btnUpdate-submit');

let modalActive = 0;

/*** modal style ***/

//modal background style

modalUpdate.style.backgroundColor = "rgba(0,0,0,0.5)";
modalUpdate.style.position = 'fixed';
modalUpdate.style.width = '100%';
modalUpdate.style.height = '100vh';
modalUpdate.style.top = '0';
modalUpdate.style.left = '0';
modalUpdate.style.zIndex = '1';
modalUpdate.style.display = 'flex';
modalUpdate.style.justifyContent = 'center';
modalUpdate.style.alignItems = 'center';
modalUpdate.style.visibility = 'hidden';
modalUpdate.style.opacity = '0';
modalUpdate.style.transition = 'visibility 0s, opacity 0.5s';

//button modal close
btnClose.style.position = 'absolute';
btnClose.style.top = '10px';
btnClose.style.right = '10px';
btnClose.style.border = 'none';
btnClose.style.backgroundColor = "#FFFFFF";
btnClose.style.cursor = 'pointer';
//modal body

modalUpdateBody.style.position = 'relative';
modalUpdateBody.style.backgroundColor = "#FFFFFF";
modalUpdateBody.style.width = '40%';
modalUpdateBody.style.height = '50%';
modalUpdateBody.style.display = 'flex';
modalUpdateBody.style.justifyContent = 'space-around';
modalUpdateBody.style.alignItems = 'center';
modalUpdateBody.style.flexDirection = 'column';
modalUpdateBody.style.padding =  '10px';

/*** modal functionality ***/

modalBtn.addEventListener('click', ()=>{
    modalUpdate.style.visibility = 'visible';
    modalUpdate.style.opacity = '1';
})

btnClose.addEventListener('click', ()=>{
    modalUpdate.style.visibility = 'hidden';
    modalUpdate.style.opacity = '0';

})
btnSubmit.addEventListener('click', ()=>{
    modalUpdate.style.visibility = 'hidden';
    modalUpdate.style.opacity = '0';

})
