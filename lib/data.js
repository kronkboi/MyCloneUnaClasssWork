

var peopleData = {
    "foil": {
        "name": "foil",
        "dob": "01/01/3030",
        "imageurl": "/images/foilimage1.png",
        "hobbies": ["Jokes", "Gags", "Stand up"]
    },
    "arms": {
        "name": "arms",
        "dob": "03/05/1995",
        "imageurl": "/images/armsimage1.png"
    },
    "hog": {
        "name": "hog",
        "imageurl": "/images/hogimage1.png"
    }
}



// note: either of these will work and will export the symbol getPeopleData.

//exports.getPeopleData = () => {return peopleData }

module.exports = { getPeopleData: () => { return peopleData } }