
const postsBox = document.getElementById('posts-box')
const spinnerBox = document.getElementById('spinner-box')
const loadBtn = document.getElementById('load-btn')
const endBox = document.getElementById('end-box')

const postForm = document.getElementById('post-form')
const title = document.getElementById('id_title')
const description = document.getElementById('id_description')
const crsf = document.getElementsByName('csrfmiddlewaretoken')
console.log('crsf ', crsf[0].value)

const alertBox = document.getElementById('alert-box')

const url = window.location.href

const getCookie =(name)=>{
    let cookieValue = null;
    if(document.cookie && document.cookie !== ''){
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++){
            const cookie = cookies[i].trim();
            // Does this cookie strgin begin with the name we want?
            if(cookie.substring(0, name.length +1 )===(name + '=')){
                cookieValue = decodeURIComponent(cookie.substring(name.length +1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

const likeUnlikePosts = ()=>{
    const likeUnlikeForms = [...document.getElementsByClassName('like-unlike-forms')]
    likeUnlikeForms.forEach(form => form.addEventListener('submit', e=>{
        e.preventDefault()
        const clickedId = e.target.getAttribute('data-form-id')
        const clickedBtn = document.getElementById(`like-unlike-${clickedId}`)

        $.ajax({
            type: 'POST',
            url: "/like-unlike/",
            data: {
                'csrfmiddlewaretoken' : csrftoken,
                'pk' : clickedId,
            },
            success: function(response){
                console.log(response)
                clickedBtn.textContent = response.liked ? `Unlike (${response.count})` : `Like (${response.count})` 
            },
            error: function(error){
                console.log(error)
            }
        })
    }))
}

let visible = 3

const getData =()=>{
    $.ajax({
        type: 'GET',
        url: `/data/${visible}/`,
        success: function(response){
            console.log(response)
            const data = response.data
            //spinner
            setTimeout(()=>{
                spinnerBox.classList.add('not-visible')
                console.log(data)
                data.forEach(e =>{
                    //bootstrap cards
                    postsBox.innerHTML += `
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">${e.title}</h5>
                                <p class="card-text">${e.description}</p>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-2">
                                        <a href="${url}${e.id}" class="btn btn-primary">Details</a>
                                    </div>
                                    <div class="col-2">
                                        <form class="like-unlike-forms" data-form-id="${e.id}">
                                            
                                            <button href="#" class="btn btn-primary" id="like-unlike-${e.id}">       
                                                ${e.liked ? `Unlike (${e.count})`:`Like (${e.count})`} 
                                            </button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                });
                likeUnlikePosts()
            },100)
            console.log('response size: ', response.size)
            if(response.size === 0){
                endBox.textContent = 'No posts add yet.. :'
            }
            else if (response.size <= visible){
                loadBtn.classList.add('not-visible')
                endBox.textContent = 'No more post to load..'
            }
        },
        error: function(error){
            console.log(error)
        }
    })   
}

loadBtn.addEventListener('click', ()=>{
    spinnerBox.classList.remove('not-visible')
    visible += 3
    getData()
})


postForm.addEventListener('submit', e=>{
    e.preventDefault()

    $.ajax({
        type: 'POST',
        url: '',
        data: {
            'csrfmiddlewaretoken': crsf[0].value,
            'title' : title.value,
            'description': description.value,
        },
        success: function(response){
            console.log(response)
            postsBox.insertAdjacentHTML('afterbegin', `
                            <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">${response.title}</h5>
                                <p class="card-text">${response.description}</p>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-2">
                                        <a href="#" class="btn btn-primary">Details</a>
                                    </div>
                                    <div class="col-2">
                                        <form class="like-unlike-forms" data-form-id="${response.id}">
                                            
                                            <button href="#" class="btn btn-primary" id="like-unlike-${response.id}">       
                                                Like (0)
                                            </button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>

                `)
            likeUnlikePosts()
            handleAlerts('success', 'New post added!')
            //clean modal
            postForm.reset()
        },
        error: function(error){
            console.log(error)
            handleAlerts('danger', 'Ups!! something went wrong :(')
        }

    })
})

getData()
