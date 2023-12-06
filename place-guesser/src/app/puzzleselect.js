users = {
    "Puzzle 1":["User1", "User4", "User9"],
    "Puzzle 2":["User1"],
    "Puzzle 7":["User4"],
    "Puzzle 9":["User9", "User7"]
};

const jsonList = {
    "Puzzle 1": {"Vienna": "Vienna Ohio"},
    "Puzzle 2": {"Fienna": "Vienna US"},
    "Puzzle 7": {"Dienna": "Vienna Ohio"},
    "Puzzle 9": {"Sienna": "Vienna Canada"}
};


generateRandomItem = (list) => {
    const keys = Object.keys(list)
    const randomIndex = Math.floor(Math.random()*keys.length);
    const randomKey = keys[randomIndex];
    //console.log(randomKey)
    const randomItem = list[randomKey];
    return {key: randomKey, item: randomItem}
}

checkUserCompletedPuzzles = (list, user) =>{
    for (i = 0; i < list.length; i++){
        if (list[i] == user){
            return false
        }
    }
    return true
}

AssignPuzzle = () => {
    result = false
    randomObj = generateRandomItem(jsonList);
    while (result == false){
        randomObj = generateRandomItem(jsonList);
        const key1 = randomObj.key
        const userList = users[key1]
        //console.log(userList)
        result = checkUserCompletedPuzzles(userList, "User9");
        //console.log(result)
    }
    if (result) {return randomObj}
}

Puzzle = AssignPuzzle()
console.log(Puzzle.key)





