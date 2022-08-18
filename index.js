const stars = document.querySelectorAll(".fas");
const emoji = document.querySelectorAll(".far");
const colorArray = ["red", "orange", "lightblue", "yellowgreen", "green"];

stars.forEach((stars, index) => {
    stars.addEventListener("click", () => {
        updateRating(index);
    });
});

updateRating(2);

function updateRating(index) {
    console.log(index);
    stars.forEach((stars, idx) => {
        console.log(index, idx);
        if (idx < index + 1) {
            stars.classList.add("active");
        } else {
            stars.classList.remove("active");
        }
    });

    emoji.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 68}px)`;
        emoji.style.color = colorArray[index];
    });
}