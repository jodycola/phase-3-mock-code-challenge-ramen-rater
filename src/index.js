const url = "http://localhost:3000/ramens"
const menu = document.querySelector("#ramen-menu")
const detail = document.querySelector("#ramen-detail")
const review = document.querySelector("#ramen-rating")
const newRamen = document.querySelector("#new-ramen")
<<<<<<< HEAD
const deleteBtn = document.querySelector("#delete")
=======
>>>>>>> 9645a2fa67f4abb374a14c3a7a28a95cd80d05c3

function renderAllRamens() {
    fetch(url)
        .then(res => res.json())
        .then(ramens => {
            ramens.forEach(ramen => renderRamenPicture(ramen));
            detail.childNodes[1].src = ramens[0].image
            detail.childNodes[1].alt = ramens[0].name
            detail.childNodes[3].textContent = ramens[0].name
            detail.childNodes[5].textContent  = ramens[0].
            restaurant
            review.dataset.id = ramens[0].id
            review[0].value = ramens[0].rating
            review[1].value = ramens[0].comment
<<<<<<< HEAD
                detail.innerHTML = `   
                <img class="detail-image" src=${ramens[0].image} alt=${ramens[0].name} />
                <h2 class="name">${ramens[0].name}</h2>
                <h3 class="restaurant">${ramens[0].restaurant}</h3>`
=======
                // detail.innerHTML = `   
                // <img class="detail-image" src=${ramens[0].image} alt=${ramens[0].name} />
                // <h2 class="name">${ramens[0].name}</h2>
                // <h3 class="restaurant">${ramens[0].restaurant}</h3>`
>>>>>>> 9645a2fa67f4abb374a14c3a7a28a95cd80d05c3
        })
}

function renderRamenPicture(ramen) {
    const img = document.createElement("img")
    img.src = ramen.image
    img.alt = ramen.name
    img.dataset.id = ramen.id
<<<<<<< HEAD
    img.className = `ramen-id-${ramen.id}`
=======
>>>>>>> 9645a2fa67f4abb374a14c3a7a28a95cd80d05c3
    img.className = `ramen-pic`

    menu.append(img)
};

menu.addEventListener('click', showRamen)

function showRamen(e){
    const htmlHelper  = e.target.dataset.id
    fetch((url) + "/" + (htmlHelper))
        .then(res => res.json())
        .then(ramen => {
            detail.innerHTML = `   
            <img class="detail-image" src=${ramen.image} alt=${ramen.name} />
            <h2 class="name">${ramen.name}</h2>
            <h3 class="restaurant">${ramen.restaurant}</h3>`

            review.dataset.id = ramen.id
            review[0].value = ramen.rating
            review[1].value = ramen.comment
        })

}

function showRamenAgain(newHtmlHelper){
    
    fetch((url) + "/" + (newHtmlHelper))
        .then(res => res.json())
        .then(ramen => {
            detail.innerHTML = `   
            <img class="detail-image" src=${ramen.image} alt=${ramen.name} />
            <h2 class="name">${ramen.name}</h2>
            <h3 class="restaurant">${ramen.restaurant}</h3>`

            review.dataset.id = ramen.id
            review[0].value = ramen.rating
            review[1].value = ramen.comment
        })

}

review.addEventListener('submit', updateRating)

function updateRating(e) {
    e.preventDefault()
    let htmlHelper  = e.target.dataset.id
<<<<<<< HEAD
    if (e.target[2].value === "Update"){
        let newRating = e.target.rating.value    
        let newComment = e.target.comment.value
        
        fetch((url) + "/" + (htmlHelper),{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: newRating, comment: newComment})
            
        })
    }
}

deleteBtn.addEventListener('click', deleteRating)

function deleteRating(e){
    let htmlHelper = e.target.closest("#ramen-rating").dataset.id
        console.log(e)
        fetch((url) + "/" + (htmlHelper),{
            method: "DELETE",
        }) 
            .then(response => response.json())
            .then((data) => {
                ramenImg = document.querySelector(`img[data-id='${htmlHelper}']`)
                ramenImg.remove()
                let newHtmlHelper  = document.querySelector('.ramen-pic').dataset.id
                    showRamenAgain(newHtmlHelper)
            })
=======
    if (e.target.value === "Update"){
        let newRating = e.target.rating.value    
        let newComment = e.target.comment.value
        
        fetch((url) + "/" + (htmlHelper),{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: newRating, comment: newComment})
            
        })
    }
    else {
        
        fetch((url) + "/" + (htmlHelper),{
            method: "DELETE",
        }) 
        .then(response => response.json())
        .then((data) => {
            ramenImg = document.querySelector(`img[data-id='${htmlHelper}']`)
            ramenImg.remove()
            let newHtmlHelper  = document.querySelector('.ramen-pic').dataset.id
                showRamenAgain(newHtmlHelper)
            })
        }
}

newRamen.addEventListener('submit', collectFormData)


function collectFormData(e){
    e.preventDefault()
    let formData = {
        name: e.target["name"].value,
        restaurant: e.target["restaurant"].value,
        image: e.target["image"].value,
        rating: e.target["rating"].value,
        comment: e.target["new-comment"].value
    }
    createRamen(formData)
    
    e.target.reset()
>>>>>>> 9645a2fa67f4abb374a14c3a7a28a95cd80d05c3
}
function createRamen(formData) {
   fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   })
    .then(res => res.json())
    .then(data => renderRamenPicture(data))

   
}


<<<<<<< HEAD



newRamen.addEventListener('submit', collectFormData)


function collectFormData(e){
    e.preventDefault()
    let formData = {
        name: e.target["name"].value,
        restaurant: e.target["restaurant"].value,
        image: e.target["image"].value,
        rating: e.target["rating"].value,
        comment: e.target["new-comment"].value
    }
    createRamen(formData)
    
    e.target.reset()
}
function createRamen(formData) {
   fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   })
    .then(res => res.json())
    .then(data => renderRamenPicture(data))

   
}


=======
>>>>>>> 9645a2fa67f4abb374a14c3a7a28a95cd80d05c3
renderAllRamens()
