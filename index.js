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
const event = Date.parse(result);
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

//console.log(event); //returns date in millis and I know it's working

console.log(event.toLocaleDateString('en-US', options)); //this gives me an error