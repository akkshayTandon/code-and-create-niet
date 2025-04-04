document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card-container");

    card.addEventListener("mousemove", (e) => {
        let x = (e.offsetX - card.offsetWidth / 2) / 20;
        let y = (e.offsetY - card.offsetHeight / 2) / 20;

        card.querySelector(".card").style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.querySelector(".card").style.transform = "rotateY(180deg)";
    });
});
