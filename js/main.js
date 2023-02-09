
const btn = document.getElementById('button')
const card = document.getElementById('card')
btn.addEventListener('click', () => {
    card.classList.toggle('flip')
})

VanillaTilt.init(document.querySelector("#button"), {
    max: 10,
    speed: 200,
    axis: 'x',
    glare: true,
    "max-glare": 0.6,
});

VanillaTilt.init(document.querySelector("#container"), {
    max: 30,
    speed: 300,
    glare: true,
    "max-glare": 0.6,
});

VanillaTilt.init(document.querySelector("#background"), {
    max: 0,
    reverse: true,
    glare: true,
    "max-glare": 1,
});





