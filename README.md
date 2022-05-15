# elevator-system-algorithm

Let's say there are 200 floors and 48 lifts so, the no of operational zones will be 200/50=4.
The no of lifts in each zone will be 48/4=12

Let's say each lift is like a utility lift with the capacity of 10 people and 900 kgs so, In the worst case 10people * 12 lifts = 120 people can travel together at a time in one zone which means in total 480 people at a time in complete building.

1. Minimise the wait time for each lift.
Ans- There are 12 lifts in each zone and there are 200 floors so we can assign 200/4 = 50 floors for 12/4=3 lifts which will reduces the wait time because they will cover less no of floors.
