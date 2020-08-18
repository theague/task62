let today = new Date();

function dayCheck (x) {
    let y = Date.parse(x);
    if (y > today) {
        return `Error`;
    } else {
        return x;
    }
}

let result = dayCheck(`08/17/2020`)
const newDate = Date.parse(result);
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

console.log(today.toLocaleDateString('en-US', options));
// Wednesday August 12, 2020
