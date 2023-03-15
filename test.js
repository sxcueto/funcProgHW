//Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
    // Only change code below this line
  return arr.sort();
  
    
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//Return a Sorted Array Without Changing the Original Array
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
 return [].concat(arr).sort(function(a, b) {
    return a - b;
  });

  // Only change code above this line
}

nonMutatingSort(globalArray);

//Split a String into an Array Using the split Method
function splitify(str) {
    // Only change code below this line
   return str.split(/\W/);
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");

//Combine an Array into a String Using the join Method
function sentensify(str) {
    // Only change code below this line
   return str.split(/\W/).join(" ");
  
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");

// Apply Functional Programming to Convert Strings to URL Slugs
// Only change code below this line
function urlSlug(title) {

    return title
    
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join('-');
    
    }
    // Only change code above this line
    urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

// Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
    // Only change code below this line
  return arr.every(function(currentValue){
  return currentValue > 0;
  });
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);
// Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
    // Only change code below this line
  return arr.some(function(currentValue){
    return currentValue > 0;
  })
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);

// Introduction to Currying and Partial Application
function add(x) {
    // Only change code below this line
  return function (y){
    return function (z){
      return x + y + z;
    };
  };
  
    // Only change code above this line
  }
  
  add(10)(20)(30);