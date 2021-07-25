//  assignment

// vehicle can only go if there is atleast one correct driver
// assign multiple crew to each vehicle


// type of Vehicles
// bus
// plane
// train
// boat

class Vehicle {

    identifier;
    type;
    crew;
    // bus;    // must be driven by a driver
    // plane;  // must be driven by a pilot
    // train;  // must be driven by a engineer
    // boat;   // must be driven by a capain


    constructor(iIdentifier, itype){
        this.identifier = iIdentifier;
        this.type = itype;
        this.assignedCrew = [];
    }

    // Properties:
    // name/identifier unique identifier for the vehicle
    // type of vehicle
    // assignedCrew - an array of crew members assigned to the vehicle
                // array of crew members


    // methods needed - canGo() - return true, if the vehicle is allowed to be operated, based on the type
                        // of vehicle and the current assigned grew

}

// Titles:
// pilot
// captain
// engineer
// driver

class CrewMembers {

    crewName;   // name of the crew member
    ability;    // what can the crew member drive
   
    constructor(icrewName, iability){
        this.crewName = icrewName;
        this.ability = iability
    }
    //properties
    // name - name of the crew member
    // title - title of the crew member
    // assignedVehicle - the vehicle this crew member is assigned to
                // the entire vehicle


    // method - assignedTo(Vehicle) - assign this crewmember to the vehicle passed in, and update the vechile
                    // passed in, and update the vehicle's list of assigned crew
}

let john = new CrewMembers('John Doe', 'Pilot');
let mark = new CrewMembers('Mark Johnson','Engineer');
let bob = new CrewMembers('Bob Dole','Captain');
let joe = new CrewMembers('Joe Bane', 'driver');
let jane = new CrewMembers('Jane Smith', 'Pilot');
let mike = new CrewMembers('Mike House','Engineer');
let billy = new CrewMembers('Billy Row','Captain');
let jack = new CrewMembers('Jack Hill', 'driver');


let v1 = new Vehicle('12341','Plane')
let v2 = new Vehicle('DAL232', 'Bus')
let v3 = new Vehicle('Betty', 'Boat')
let v4 = new Vehicle('AUS122', 'train' )
let v5 = new Vehicle('A3435','Plane')
let v6 = new Vehicle('Hous223', 'Bus')
let v7 = new Vehicle('Hooked', 'Boat')
let v8 = new Vehicle('AUS999', 'train' )


//john.assigneTo(v1) // passing in the entire vehicle object not just the name

let ddf = {
    hat: ['top','bottom']
}
// if this is too easy, and only after you are done with the above
// what happens if you assigne a crew member to 2 vehicles: should the get unassigned from the first one?
console.log(john.ability);
console.log(v1.type);
v1.assignedCrew = john;
this.v1.assignedCrew.push('aff');
ddf.hat.push(john);
console.log(ddf);
