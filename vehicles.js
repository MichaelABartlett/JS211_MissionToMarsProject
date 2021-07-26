'use strict'
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
    // bus;    // must be driven by a driver
    // plane;  // must be driven by a pilot
    // train;  // must be driven by a engineer
    // boat;   // must be driven by a capain


    constructor(identifier, type){
        this.identifier = identifier;
        this.type = type;
        this.assignedCrew = [];
    }

    // i should have named this assignedTo(Vehicle)

        // method - assignedTo(Vehicle) - assign this crewmember to the vehicle passed in, and update the vechile
                    // passed in, and update the vehicle's list of assigned crew

    addCrew(name){
        this.assignedCrew.push(name);
    
    }

  // methods needed - canGo() - return true, if the vehicle is allowed to be operated, based on the type
                        // of vehicle and the current assigned grew                
    canGo(theVehicle){
        for(let i = 0; i < theVehicle.assignedCrew.length; i ++){
            if((theVehicle.type === 'Plane') && (theVehicle.assignedCrew[i].ability === 'Pilot')){
                return 'leaving';
            } else if ((theVehicle.type === 'Bus') && (theVehicle.assignedCrew[i].ability === 'Driver')){
                return 'leaving';
            } else if ((theVehicle.type === 'Train') && (theVehicle.assignedCrew[i].ability === 'Engineer')){
                return 'leaving';
            } else if ((theVehicle.type === 'Boat') && (theVehicle.assignedCrew[i].ability === 'Captain')){
                return 'leaving';
            } else {
                
            }
        }
    };

     
        

}
// end of Vehicle




// Titles:
// pilot
// captain
// engineer
// driver

class CrewMembers {

    crewName;   // name of the crew member
    ability;    // what can the crew member drive
   
    constructor(crewName, ability){
        this.crewName = crewName;
        this.ability = ability;
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
let joe = new CrewMembers('Joe Bane', 'Driver');
let jane = new CrewMembers('Jane Smith', 'Pilot');
let mike = new CrewMembers('Mike House','Engineer');
let billy = new CrewMembers('Billy Row','Captain');
let jack = new CrewMembers('Jack Hill', 'Driver');


let v1 = new Vehicle('12341','Plane')
let v2 = new Vehicle('DAL232', 'Bus')
let v3 = new Vehicle('Betty', 'Boat')
let v4 = new Vehicle('AUS122', 'Train' )
let v5 = new Vehicle('A3435','Plane')
let v6 = new Vehicle('Hous223', 'Bus')
let v7 = new Vehicle('Hooked', 'Boat')
let v8 = new Vehicle('AUS999', 'Train' )


//john.assigneTo(v1) // passing in the entire vehicle object not just the name

// if this is too easy, and only after you are done with the above
// what happens if you assigne a crew member to 2 vehicles: should the get unassigned from the first one?
//console.log(john.ability);
//console.log(v1.type);
//v1.assignedCrew = john;


// test below

if(typeof describe === 'function'){
    const assert = require('assert');

    describe('test to create a vehicle', function(){
        it('should create a vehicle correctly', function(){
            //let v1 = new Vehicle('12341','Plane');
            assert.strictEqual(v1.identifier, '12341');
        })

        it('should create a crewMember correctly', function(){
            //let john = new CrewMembers('John Doe', 'Pilot');
            assert.strictEqual(john.crewName, 'John Doe');
        })

        it('should add a crew member to a vehicle correctly', function(){
            //let v1 = new Vehicle('12341','Plane');
            //let john = new CrewMembers('John Doe', 'Pilot');
            v1.addCrew(john)
            v1.addCrew(bob)
            //console.log(v1.assignedCrew)
            //console.log(v1);
            //console.log('type: ',v1.type)
            //console.log('looking',v1.assignedCrew[0].ability)
            assert.strictEqual(v1.assignedCrew[1], bob);
            
        })

    })

    describe('checking if vehicles can go', function(){
        it('can a vehicle go with only the correct driver for plane', function(){
            //let v1 = new Vehicle('12341','Plane');
            //let john = new CrewMembers('John Doe', 'Pilot');
            v1.assignedCrew = [];
            v1.addCrew(john)
            v1.addCrew(bob)
            //console.log(v1.assignedCrew)
            console.log(v1);
            console.log('type: ',v1.type)
            console.log('looking',v1.assignedCrew[0].ability)
            assert.strictEqual(v1.canGo(v1),'leaving')
        })
    })

    describe('checking if vehicles can go', function(){   
        it('can a vehicle go with only the correct driver for bus', function(){
            //let v1 = new Vehicle('12341','Plane');
            //let john = new CrewMembers('John Doe', 'Pilot');
            v2.assignedCrew = [];
            v2.addCrew(john)
            v2.addCrew(bob)
            v2.addCrew(joe)
            //console.log(v1.assignedCrew)
            console.log(v2);
            console.log('type: ',v2.type)
            console.log('looking',v2.assignedCrew[0].ability)
            assert.strictEqual(v2.canGo(v2),'leaving')
        })
    })

    describe('checking if vehicles can go', function(){
        it('can a vehicle go with only the correct driver for boat', function(){
            //let v1 = new Vehicle('12341','Plane');
            //let john = new CrewMembers('John Doe', 'Pilot');
            v3.assignedCrew = [];
            v3.addCrew(john)
            v3.addCrew(bob)
            //console.log(v1.assignedCrew)
            console.log(v3);
            console.log('type: ',v3.type)
            console.log('looking',v3.assignedCrew[0].ability)
            assert.strictEqual(v3.canGo(v3),'leaving')
        })
    })

    describe('checking if vehicles can go', function(){
        it('can a vehicle go with only the correct driver for train', function(){
            //let v1 = new Vehicle('12341','Plane');
            //let john = new CrewMembers('John Doe', 'Pilot');
            v4.assignedCrew = [];
            v4.addCrew(john)
            v4.addCrew(bob)
            v4.addCrew(mark)
            //console.log(v1.assignedCrew)
            console.log(v4);
            console.log('type: ',v4.type)
            console.log('looking',v4.assignedCrew[0].ability)
            assert.strictEqual(v4.canGo(v4),'leaving')
        })

    })

}
