console.log('eliminando andamos');
/*
 * Modal Delete (style and functionality)
 *
 */

let modalDelete = document.getElementById('delete-posts');
let deleteBody = document.getElementById('delete-body');

const  modalDeleteBtn = document.getElementById('delete-btn');
const btnDeleteClose = document.getElementById('btnDelete-close');
const btnDeleteSubmit = document.getElementById('btnDelete-submit');


/*** modal style ***/

//modal background style

modalDelete.style.backgroundColor = "rgba(0,0,0,0.5)";
modalDelete.style.position = 'fixed';
modalDelete.style.width = '100%';
modalDelete.style.height = '100vh';
modalDelete.style.top = '0';
modalDelete.style.left = '0';
modalDelete.style.zIndex = '1';
modalDelete.style.display = 'flex';
modalDelete.style.justifyContent = 'center';
modalDelete.style.alignItems = 'center';
modalDelete.style.visibility = 'hidden';
modalDelete.style.opacity = '0';
modalDelete.style.transition = 'visibility 0s, opacity 0.5s';

//button modal close
btnDeleteClose.style.position = 'absolute';
btnDeleteClose.style.top = '10px';
btnDeleteClose.style.right = '10px';
btnDeleteClose.style.border = 'none';
btnDeleteClose.style.backgroundColor = "#FFFFFF";
btnDeleteClose.style.cursor = 'pointer';
//modal body

deleteBody.style.position = 'relative';
deleteBody.style.backgroundColor = "#FFFFFF";
deleteBody.style.padding = '25px';
deleteBody.style.width = '40%';
deleteBody.style.height = '25%';


btnDeleteSubmit.style.position = 'absolute';
btnDeleteSubmit.style.float= 'right';
btnDeleteSubmit.style.width = '91%';
btnDeleteSubmit.style.bottom = '10%';
/*** modal functionality ***/

modalDeleteBtn.addEventListener('click', ()=>{
    modalDelete.style.visibility = 'visible';
    modalDelete.style.opacity = '1';
})

btnDeleteClose.addEventListener('click', ()=>{
    modalDelete.style.visibility = 'hidden';
    modalDelete.style.opacity = '0';

})
btnDeleteSubmit.addEventListener('click', ()=>{
    modalDelete.style.visibility = 'hidden';
    modalDelete.style.opacity = '0';

})
