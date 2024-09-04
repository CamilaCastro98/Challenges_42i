const findNonConstructibleChange = (coins) => {
    const orderedCoins = coins.sort((a, b) => a - b)
    let change = 1
    for(let i=0; i<orderedCoins.length; i++){
        if(orderedCoins[i]>change){
            return change
        }
        change += orderedCoins[i]
    }
    return change

}