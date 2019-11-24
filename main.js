

const makeNumberBig = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = biggify(val);
    generateList(finalValue)
}

const countNumDown = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = nasafy(val);
    generateList(finalValue)
}
const makeCrazy = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = crazify(val);
    generateList(finalValue)
}
const makeBackwards = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = reversify(val);
    generateList(finalValue)
}
const makeTitleCase = function () {
    let val = document.querySelector('#user-input').value;
    const finalValue = titleify(val);
    generateList(finalValue)
}

const generateList = (list) => {
    const result = document.querySelector(".result");
    result.innerText = `${list}`;
}

document.querySelector('.biggify').addEventListener('click', makeNumberBig)
document.querySelector('.nasafy').addEventListener('click', countNumDown)
document.querySelector('.crazify').addEventListener('click', makeCrazy)
document.querySelector('.reversify').addEventListener('click', makeBackwards)
document.querySelector('.titleify').addEventListener('click', makeTitleCase)