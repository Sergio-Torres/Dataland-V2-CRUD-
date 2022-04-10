console.log("hola nena");

const helloWorldBox = document.getElementById('hello-world')
const postsBox = document.getElementById('posts-box')


$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response){
        console.log('success', response)
        helloWorldBox.textContent = response.text
    },
    error: function(error){
        console.log('error', error)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response){
        console.log(response)
        const data = response.data
        console.log(data)
        data.forEach(e =>{
            postsBox.innerHTML += `
            ${e.title} - <b>${e.description}</b><br>
            `
        });
    },
    error: function(error){
        console.log(error)
    }
})
