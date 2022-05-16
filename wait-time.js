//Solution to Minimise the wait time for each lift.
//Solution - In the evenings a lot of people would be 
//going down so the load will be high but it will be random [5pm - 9pm]


function reduceWaitTimeAndEveningCrowdHandler(no_of_floors, no_of_lifts_in_a_zone, request, elevators){
    //If time is between 5pm - 9pm, increase the lift speed so, the power consumption will increase only for four hours
    elevators.forEach(elevator => {
        let lift_pos = 0
        if(!is_full){
            if(request.floorNumber < 0 && elevator.elevatorNumber<(no_of_floors/no_of_lifts_in_a_zone)){
                lift_pos = elevator.elevatorNumber * (no_of_floors/no_of_lifts_in_a_zone)
            }
            else{
                lift_pos = liftDecider(request, elevators)
            }
        } 
    });
    return lift_pos;
}