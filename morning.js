//Solution - In the mornings a lot of people would be going to their respective offices [8am - 9am] 
//so in the morning load of people going up would be high


function morningCrowdHandler(no_of_floors, no_of_lifts_in_a_zone, request, elevators){
    elevators.forEach(elevator => {
        let lift_pos = 0
        if(!is_full){
            if(request.floorNumber < 0 && elevator.elevatorNumber<(no_of_floors/no_of_lifts_in_a_zone)-1){
                lift_pos = 0
            }
            else{
                lift_pos = liftDecider(request, elevators)
            }
        } 
    });
    return lift_pos;
}