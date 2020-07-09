'use strict';
//_________________________________________________________________________________
// Problem Domian:
// Create a function, takes in a LL
// Determine if LL has same node values going forward  as well as backwards

// Edge Cases: 
// Strings Only

// Visual:
// input: R-A-C-E-C-A-R
// output true
//__________________________________________________________________________________

//Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};
// Declare the original word to test isPalindrone()
const word = "RACECAR";
// Declare the list which will be a LL created from the original word to test
let list;
// Create a runner to traverse the LL and allow you to access its properties
let runner;
// Loop through the original string word input and assign each letters value to "letter"
for (const letter of word) {
    // If there is no list, lets start making one!
    if (!list) {
        // Make the first node's value of our list = each "letter"
        list = new Node(letter)
        // Declare a runner to go through our list
        runner = list
        // If there is already a "list" which there will  be after the first iteration, do this!
    } else {
        // Make the next nodes value of our list the next letter in the word
        runner.next = new Node(letter)
        // tell the runner to occupy the next node
        runner = runner.next
    }
}

// Create a function the determines if a word provided in the form of a  Linked List is the same forward as it is backwards
function isPalindrone(list) {
    // if my linked list is empty
    if (!list) {
        // return false right away
        return false
    }
    // Start creating our newLL the value of the head node in the original list
    let newLL = new Node(list.value)
    // Assign the runner to the next node position in the original list
    let runner = list.next
    // Run through the original with  our runner and make a new one while adding the new nodes to the front of our newLL
    // newHead is a temporary variable used to re-define with each traversal step what the actual head will be of our newLL
    while (runner) {
        // While we have "runner" (a next property with a value)
        let newHead = new Node(runner.value)
        // Also give this nodes next property a value of whatever the next node
        newHead.next = newLL
        // Make our newLL's head = to variable newHead which is the next node in series from the original list
        newLL = newHead
        // Advance the runner to the next letter in the original list
        runner = runner.next
    }
    // Reset the runner the the head node of the LL to start the traversal over again
    runner = list
    // Declare a new runner and set its head to the head of the original list
    let newLLrunner = newLL
    // Loop through the original list while there is one present
    while (runner) {
        // Compare the values of the original list to the reversed one we created
        if (runner.value !== newLLrunner.value) {
            // If they are not the same return false
            return false
        }
        // If the condition above is not present, advance both list's to the  next node in sequence and apply the same comparison logic
        runner = runner.next
        newLLrunner = newLLrunner.next
    }
    // If the above comparison  conditions have not been met then it must be palindrone so just return true!
    return true
}

console.log(isPalindrone(list))

