const url = "http://localhost:3000/ramens"
const menu = document.querySelector("#ramen-menu")
const detail = document.querySelector("#ramen-detail")
const review = document.querySelector("#ramen-rating")

function renderAllRamens() {
    fetch(url)
        .then(res => res.json())
        .then(ramens => {
            ramens.forEach(ramen => renderRamenPicture(ramen));
        })
}

function renderRamenPicture(ramen) {
    const img = document.createElement("img")
    img.src = ramen.image
    img.alt = ramen.name
    img.dataset.id = ramen.id
    img.className = 'ramen-pic'

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

review.addEventListener('submit', updateRating)

function updateRating(e) {
    e.preventDefault()
    const htmlHelper  = e.target.dataset.id
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

renderAllRamens()