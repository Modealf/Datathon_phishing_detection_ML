const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");
const formHolder = document.getElementById("formHolder")
const ouputHolder = document.getElementById("outputHolder")
const safeTxt = document.getElementById("safe")
const notSafeTxt = document.getElementById("notSafe")
const submitBtn = document.getElementById("submitBtn");

startBtn.addEventListener('click', () => {
    startMenu.classList.add("bottomToTop")
    formHolder.classList.add("topToBottom")
    submitBtn.classList.replace("hidden", "flex")
})

document.getElementById('prediction-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const inputData = document.getElementById('input-data').value;
    console.log(inputData);
    await fetch('http://localhost:8000/predict?inputData='+ inputData, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((responseData) =>  {
        console.log(responseData);
        ouputHolder.classList.replace("opacity-0", "opacity-100")
        if (responseData.output.includes("ham")) {
            safeTxt.classList.replace("opacity-0", "opacity-100")
            notSafeTxt.classList.replace("opacity-100", "opacity-0")
            ouputHolder.style = 'border-color: rgb(96 165 250);'
        } if (responseData.output.includes("spam")) {
            safeTxt.classList.replace("opacity-100", "opacity-0")
            notSafeTxt.classList.replace("opacity-0", "opacity-100")
            ouputHolder.style = 'border-color: #dbab2c;'
        }
    })
});