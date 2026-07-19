const button = document.querySelector("#theme-btn");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
const message = document.querySelector("#message");

const count = document.querySelector("#count");

message.addEventListener("input", () => {

    count.textContent = message.value.length;

});


