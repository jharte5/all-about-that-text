const biggify = function(num) {
    return num += 9000
}

const nasafy = function(num) {
    const results = []
    let now = num
    while (1 <= now) {
    results.push(now);
    now--;
    } 
    results.push('Blast off!')
    return results
}

const reversify = function(str) {
    return str.split('').reverse().join('')
}

const titleify = function(str) {
    let titleCasedWords = [];
    for (const word of str.split(' ')) {
    titleCasedWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }

    return titleCasedWords.join(' ');
}

const crazify = function(str) {
    let crazified = '';
    let crazyI = 0;
    for (const character of str) {
if (character === ' ') {
        crazified += ' ';
    } else {
        crazified += crazyI % 2 === 1
        ? character.toUpperCase()
        : character.toLowerCase();
        crazyI++;
    }
    }

    return crazified;
    
}
module.exports = {
    biggify,
    nasafy,
    reversify,
    titleify,
    crazify,
}