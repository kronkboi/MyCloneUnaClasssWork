

var peopleData = {
    "foil": {
        "name": "foil",
        "dob": "01/01/3030",
        "imageurl": "/images/foilimage1.jpg",
        "hobbies": ["Jokes", "Gags", "Stand up"]
    },
    "arms": {
        "name": "arms",
        "dob": "03/05/1995",
        "imageurl": "/images/armsimage1.jpg"
    },
    "hog": {
        "name": "hog",
        "imageurl": "/images/hogimage1.jpg"
    }
}



// note: either of these will work and will export the symbol getPeopleData.

//exports.getPeopleData = () => {return peopleData }

module.exports = { getPeopleData: () => { return peopleData } }