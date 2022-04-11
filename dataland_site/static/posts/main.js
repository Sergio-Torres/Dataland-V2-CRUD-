console.log('todo nice')

const postsBox = document.getElementById('posts-box')
const spinnerBox = document.getElementById('spinner-box')
const loadBtn = document.getElementById('load-btn')
const endBox = document.getElementById('end-box')

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
                                        <a href="#" class="btn btn-primary">Details</a>
                                    </div>
                                    <div class="col-2">
                                        <a href="#" class="btn btn-primary">${e.liked ? `Unlike (${e.count})`:`Like (${e.count})`}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                });
            },100)
            console.log(response.size)
            if(response.size === 0){
                endBox.textContent = 'No posts add yet.. :('
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

getData()
