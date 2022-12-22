// DESCRIPTION:
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

//PREP
//P1: array, positive numbers, 
//P2: number, positive
//R: return number






function queueTime(customers, n) {
    // creates an array of length n representing the tills
    // Each till is given a value of 0 to represent initial waitTime before the queue begins.
    const tills = new Array(n).fill(0);
    // goes through the queue of customer waitTimes
    for (let waitTime of customers) {
      // finds the till with the least wait time on it, adds the next customer's time to it
      const lowestWaitTill = tills.indexOf(Math.min(...tills));
      // which till has the least load, we add the current customer's wait time to that till, until no customers left
      tills[lowestWaitTill] += waitTime;
    } 
    // The waitTime of the till with the heaviest load represents the total time taken
    return Math.max(...tills);
  }
  
  
  //queueTime([5,3,4], 1)
  // should return 12
  
  
  //queueTime([10,2,3,3], 2)
  // should return 10
  
  
  //queueTime([2,3,10], 2)
  // should return 12
  
  //queueTime([3,4,6,7],4)
  //should return 7