const character = {
    name: "Victor",
    family: "Granda",
    id: 1,
};
character["fullName"] = character["name"];
delete character["name"];
character.family = "Lannister";
character.fullName = "Victor " + character.family
character.age = 30
character.job = "none"
character.location = "Barcelona"
const showPropNames = () => {
    console.log(Object.keys(character))
    console.log(`Hay ${Object.keys(character).length} propiedades en character`)
    /*for( let keys in character){
    console.log(keys)
    }*/
}


const showValuesOfName = () => {
    console.log(character)
    console.log(Object.values(character));
    console.log(`Hey i'm ${character.fullName} and i'm ${character.age} years old, and the ID assigned is ${character.id}`)
}

showValuesOfName()

