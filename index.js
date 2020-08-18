const dateString = (dateString, options = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
}) => {
    const formattedDate = new Date(dateString);

    if (Date.parse(dateString) > new Date().getTime()) {
        throw 'Date cannot be later than today';
    }

    return formattedDate.toLocaleDateString('en-US', options);
}

console.log(dateString('08/19/2020'));