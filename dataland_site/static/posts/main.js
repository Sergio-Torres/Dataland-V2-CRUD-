console.log("hola nena");

const helloWorldBox = document.getElementById('hello-world')



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
    },
    error: function(error){
        console.log(error)
    }
})
