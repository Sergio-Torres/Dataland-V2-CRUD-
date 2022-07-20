console.log('detalles')
const postsBox = document.getElementById('post-box')
const backBtn = document.getElementById('back-btn')
const updateBtn= document.getElementById('update-btn')
const deleteBtn= document.getElementById('delete-btn')
const url = window.location.href + "data/"
const spinnerBox = document.getElementById('spinner-box')

const titleInput = document.getElementById('id_title')
const descriptionInput = document.getElementById('id_description')


backBtn.addEventListener('click', ()=>{
    history.back()
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(response)
        const data = response.data

        if(data.logged_in !== data.author){
            console.log('different')
        }
        else{
            console.log('the same')
            updateBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')
        }

        const titleEl = document.createElement('h3')
        titleEl.setAttribute('class', 'mt-3')

        const descriptionEl = document.createElement('p')
        descriptionEl.setAttribute('class', 'mt-1')

        titleEl.textContent = data.title
        descriptionEl.textContent = data.description

        postsBox.appendChild(titleEl)
        postsBox.appendChild(descriptionEl)

        titleInput.value = data.title
        descriptionInput.value = data.description 
        
        spinnerBox.classList.add('not-visible')
    },
    error: function(error){
        console.log(error)
    }

})
