console.log('%c HI', 'color: firebrick')
function init() {
    partA()
    partB()
    partC()
}

function partA() {
fetch("https://dog.ceo/api/breeds/image/random/4")
.then (res => res.json())
.then (data => {
        for (i of data.message) {

            let a = document.createElement('img')
            a.src=i
            document.getElementById('dog-image-container').appendChild(a)
        }
})
}

function partB() {
    url = "https://dog.ceo/api/breeds/list/all"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for (i in data.message) { 
            let a = document.createElement('li')
            a.innerText=i
            a.addEventListener('click', function(e) {
                e.target.style.color="red"
            })
            document.getElementById('dog-breeds').appendChild(a)

         }
    })
}

function partC() {
    drop = document.getElementById('breed-dropdown')
    drop.addEventListener('change', function(e) {
        //console.log(e.target.value)
        list = document.getElementById('dog-breeds')
        while(list.firstChild) { list.firstChild.remove(); }

        url = "https://dog.ceo/api/breeds/list/all"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            for (i in data.message) { 
                let a = document.createElement('li')
                a.innerText=i
                a.addEventListener('click', function(e) {
                    e.target.style.color="red"
                })
                if (i[0] ===e.target.value) {
                document.getElementById('dog-breeds').appendChild(a) }

             }
        })

    })
}

document.addEventListener("DOMContentLoaded", init)