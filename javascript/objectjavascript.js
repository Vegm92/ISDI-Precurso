    
    function avenger(fullName, classRoom, city, job, studies,markAv) {
        this.fullName = fullName;
        this.classRoom = classRoom;
        this.city = city;
        this.job = job;
        this.studies = studies;
        this.markAv = markAv;
        this.description = function(){
            console.log(this.fullName + ", " + this.city + "...")
        }
    }


    const tonyStark = new avenger("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
    const blackWidow = new avenger("Black Widow", "IX", "Moskow", "Spy", "Ballet", 8.8 )
    const arrowHead = new avenger("Arrow Head", "VI", "London", "ARcher", "Nothing", 7.8 )
    const spiderMan = new avenger("Peter Parker", "X", "NY", "Camera", "Picture", 6 )
    // tonyStark.description()
    //Tony Stark, NYC...
    const avengersArray = []
    const arrayPushAvengers = (avenger) =>{
      return avengersArray.push(avenger)

    }
    
 const nameKeyValues = (nameAvenger) => {
    for (const key in nameAvenger) {
      return (`${key}: ${nameAvenger[key]}`);
    }
}
arrayPushAvengers(tonyStark["fullName"])
console.log(avengersArray)
