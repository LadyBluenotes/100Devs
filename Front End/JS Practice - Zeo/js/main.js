//Create a stopwatch object that has four properties and three methods

let stopwatch = {
    time: 0,
    brand: 'the stopwatch',
    model: 3000,
    colour: 'red',
    start: function() {
        console.log('STARTING');
    },
    stop: function() {
        console.log('STOPPING');
    },
    reset: function() {
        console.log('RESETTING');
    },
}