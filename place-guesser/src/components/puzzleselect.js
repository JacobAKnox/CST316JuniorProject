function generatePuzzle (){

    const list = {
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
    const keys = Object.keys(list)
    const randomKey = keys[30];
    console.log(randomKey)
    const randomItem = list[randomKey];
    return {key: randomKey, item: randomItem}
}

generatePuzzle()