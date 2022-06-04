const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer (accumulator, number) {
    console.log(accumulator, number)
    let totalBatteries = number
    return accumulator += totalBatteries
}

let totalBatteries = batteryBatches.reduce(reducer, 0)