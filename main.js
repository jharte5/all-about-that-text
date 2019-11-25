

const makeNumberBig = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = biggify(val);
    generateResult(finalValue)
}

const countNumDown = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = nasafy(val);
    generateResult(finalValue)
}
const makeCrazy = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = crazify(val);
    generateResult(finalValue)
}
const makeBackwards = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = reversify(val);
    generateResult(finalValue)
}
const makeTitleCase = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = titleify(val);
    generateResult(finalValue)
}

const generateResult = (list) => {
    const result = document.querySelector(".result");
    result.innerText = `${list}`;
}

document.querySelector('.biggify').addEventListener('click', makeNumberBig)
document.querySelector('.nasafy').addEventListener('click', countNumDown)
document.querySelector('.crazify').addEventListener('click', makeCrazy)
document.querySelector('.reversify').addEventListener('click', makeBackwards)
document.querySelector('.titleify').addEventListener('click', makeTitleCase)