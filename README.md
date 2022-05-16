# elevator-system-algorithm

Let's say there are 200 floors and N=48 lifts so, the no of operational zones will be 200/48=4(approx)
The no of lifts in each zone will be 48/4=12

Let's say each lift is with the capacity of 10 people and 900 kgs so, In the worst case 10people * 12 lifts = 120 people can travel together at a time in one zone which means in total 480 people at a time in complete building.

Following are the solutions of the 4 problems: 

1. Minimise the wait time for each lift.
Ans- To reduce the wait time, lifts should be distributed among floors. In our case, we have 12 lifts for 200 floors in one zone so, we will find out the gap of floors a lift should be placed at i.e. 200/12=16(approx) which means every lift will be on the floors like 0,16,32,64 and so on so that each floor is reachable to a nearest lift which can be maximum 8 floors away in idle state.

2.In the morning, a lot of people would be going to their respective offices [8am - 9am] so in the morning load of people going up would be high
Ans- In morning, we know that people will go from down to up and the load will be high. To handle this, In this particular time duration, We can assign 3/4th of the total lifts in a zone to be in the ground floor and 1/4th can function normally to take care of the people for other movements. Wait time might increase a bit for people already present on some floors but it is for only one hour so it can be managed.

3.In the evenings a lot of people would be going down so the load will be high but it will be random [5pm - 9pm]
Ans - This is a tricky part. If we move all the lifts or 3/4th of the lifts at the top floor then it does not makes sense because all the offices would not be at 200th floor. Offices will be distributed at different floors. So, the solution to reduce wait time with increased lift's speed works here because we don't know the positions of offices so we should focus on reducing the wait time coming from different floors. Other drawback will be that power consumption will increase for four hours in a day whch is not a huge concern.

4.Sometimes when a lift arrives it is full. We would like to avoid that situation also.
Ans - To avoid this situation, we would not assign a full lift to a request.
