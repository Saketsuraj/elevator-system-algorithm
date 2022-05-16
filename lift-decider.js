function liftDecider(request, elevators) {
	nearestElevator = null
	minFloorDiff = Number.MAX_SAFE_INTEGER
	elevators.forEach(elevator => {
        if (fullCapacity == true)
        continue;
        if (request.direction == elevator.state  || elevator.state == 'IDLE') {
            if (elevator.state = up && elevator.floorNumber < request.floorNumber)
                floorDiff = request.floorNumber - elevator.floorNumber
            else if (elevator.state = down && request.floorNumber < elevator.floorNumber)
                floorDiff =   elevator.floorNumber - request.floorNumber
            else 
                //wait till an elevator is idle or an elevator changes direction
            if (floorDiff < minFloorDiff) {
                minFloorDiff = floorDiff
                nearestElevator = elevator
            }
        }  
    });
	return nearestElevator;
}