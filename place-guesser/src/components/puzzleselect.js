

users = {
    "Puzzle 1": ["User1", "User4", "User13"],
    "Puzzle 2": ["User2"],
    "Puzzle 3": ["User4", "User9"],
    "Puzzle 4": ["User1", "User3"],
    "Puzzle 5": ["User1", "User5"],
    "Puzzle 6": ["User2", "User7"],
    "Puzzle 7": ["User4"],
    "Puzzle 8": ["User3", "User8"],
    "Puzzle 9": ["User9", "User7"],
    "Puzzle 10": ["User6"],
    "Puzzle 11": ["User1", "User2"],
    "Puzzle 12": ["User3", "User5"],
    "Puzzle 13": ["User4", "User6"],
    "Puzzle 14": ["User8", "User9"],
    "Puzzle 15": ["User1", "User7"],
    "Puzzle 16": ["User3", "User5"],
    "Puzzle 17": ["User2", "User9"],
    "Puzzle 18": ["User4", "User8"],
    "Puzzle 19": ["User1", "User7"],
    "Puzzle 20": ["User2", "User6", "User13"],
    "Puzzle 21": ["User3", "User5"],
    "Puzzle 22": ["User4", "User9"],
    "Puzzle 23": ["User1", "User8"],
    "Puzzle 24": ["User2", "User7"],
    "Puzzle 25": ["User3", "User6"],
    "Puzzle 26": ["User4", "User9"],
    "Puzzle 27": ["User1", "User5"],
    "Puzzle 28": ["User2", "User7"],
    "Puzzle 29": ["User3", "User4"],
    "Puzzle 30": ["User6", "User9"],
    "Puzzle 31": ["User1", "User2"],
    "Puzzle 32": ["User5", "User7"],
    "Puzzle 33": ["User3", "User4"],
    "Puzzle 34": ["User1", "User9"],
    "Puzzle 35": ["User2", "User6"],
    "Puzzle 36": ["User7", "User8"],
    "Puzzle 37": ["User3", "User5"],
    "Puzzle 38": ["User2", "User4"],
    "Puzzle 39": ["User1", "User9"],
    "Puzzle 40": ["User6", "User8", "User13"]
};

const jsonList = {
    "Puzzle 1": ["Kabul", "Cabool", "Missouri", "Afghanistan", "3"],
    "Puzzle 2": ["Algiers", "Algiers", "Louisiana", "Algeria", "56"],
    "Puzzle 3": ["Algiers", "Algiers", "Indiana", "Algeria", "56"],
    "Puzzle 4": ["Oran", "Oran", "Missouri", "Algeria", "56"],
    "Puzzle 5": ["Angola", "Angola", "Indiana", "Angola", "8"],
    "Puzzle 6": ["Angola", "Angola", "New York", "Angola", "8"],
    "Puzzle 7": ["La Plata", "La Plata", "Missouri", "Argentina", "9"],
    "Puzzle 8": ["La Plata", "La Plata", "Maryland", "Argentina", "9"],
    "Puzzle 9": ["Ballarat", "Ballarat", "California", "Australia", "12"],
    "Puzzle 10": ["Brisbane", "Brisbane", "California", "Australia", "12"],
    "Puzzle 11": ["Melbourne", "Melbourne", "Florida", "Australia", "12"],
    "Puzzle 12": ["Melbourne", "Melbourne", "Kentucky", "Australia", "12"],
    "Puzzle 13": ["Melbourne", "Melbourne", "Arkansas", "Australia", "12"],
    "Puzzle 14": ["Rockhampton", "Rockham", "South Dakota", "Australia", "12"],
    "Puzzle 15": ["Deutsch-Wagram", "Wagram", "North Carolina", "Austria", "11"],
    "Puzzle 16": ["Freistadt", "Freistatt", "Missouri", "Austria", "11"],
    "Puzzle 17": ["Vienna", "Vienna", "Illinois", "Austria", "11"],
    "Puzzle 18": ["Vienna", "Vienna", "Indiana", "Austria", "11"],
    "Puzzle 19": ["Vienna", "Vienna", "Missouri", "Austria", "11"],
    "Puzzle 20": ["Vienna", "Vienna", "New York", "Austria", "11"],
    "Puzzle 21": ["Vienna", "Vienna", "Virginia", "Austria", "11"],
    "Puzzle 22": ["Wels", "New Wells", "Missouri", "Austria", "11"],
    "Puzzle 23": ["Baku", "Baku", "California", "Azerbaijan", "14"],
    "Puzzle 24": ["Antwerp", "Antwerp", "New York", "Belgium", "18"],
    "Puzzle 25": ["Antwerp", "Antwerp", "Ohio", "Belgium", "18"],
    "Puzzle 26": ["Bastogne", "Bastogne Gables", "North Carolina", "Belgium", "18"],
    "Puzzle 27": ["Brussels", "Brussels", "Wisconsin", "Belgium", "18"],
    "Puzzle 28": ["Brussels", "Brussels", "Illinois", "Belgium", "18"],
    "Puzzle 29": ["Charleroi", "Charleroi", "Pennsylvania", "Belgium", "18"],
    "Puzzle 30": ["Ghent", "Ghent", "Minnesota", "Belgium", "18"],
    "Puzzle 31": ["Ghent", "Ghent", "Kentucky", "Belgium", "18"],
    "Puzzle 32": ["Hoboken", "Hoboken", "New Jersey", "Belgium", "18"],
    "Puzzle 33": ["Li�ge", "Liege", "Missouri", "Belgium", "18"],
    "Puzzle 34": ["Luxemburg", "Luxemburg", "Wisconsin", "Belgium", "18"],
    "Puzzle 35": ["Namur", "Namur", "Wisconsin", "Belgium", "18"],
    "Puzzle 36": ["Rosi�res", "Rosiere", "Wisconsin", "Belgium", "18"],
    "Puzzle 37": ["Walhain", "Walhain", "Wisconsin", "Belgium", "18"],
    "Puzzle 38": ["Waterloo", "Waterloo", "New York", "Belgium", "18"],
    "Puzzle 39": ["Waterloo", "Waterloo", "Indiana", "Belgium", "18"],
    "Puzzle 40": ["Waterloo", "Waterloo", "Illinois", "Belgium", "18"]
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
        result = checkUserCompletedPuzzles(userList, "User13");
        //console.log(result)
    }
    if (result) {return randomObj}
}

TestPuzzleAssign = () => {
    Puzzle = AssignPuzzle()
    for (x = 0; x < 40; x++){
        if (Puzzle.key == "User13"){
            console.log("Aborted");
            break
        }
    }
    console.log("Success")
}

TestPuzzleAssign()

