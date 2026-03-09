/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort

async function bubbleSort(array) {
  // outer loop for each pass
  for (let i = 0; i < array.length - 1; i++) {
    // inner loop to compare adjacent elements
    for (let j = 0; j < array.length - 1 - i; j++) {
      // compare elements by their value property
      if (array[j].value > array[j + 1].value) {
        // swap if out of order
        await swap(array, j, j + 1);
        // update the bubble sort counter
        updateCounter(bubbleCounter);
      }
    }
    // pause for visualization after each pass
    await sleep();
  }
}

// TODO 3: Implement quickSort

async function quickSort(array, left, right) {
  // base case: if left >= right, no sorting needed
  if (left < right) {
    // partition the array and get the pivot index
    let pivotIndex = await partition(array, left, right);
    // recursively sort the left subarray
    await quickSort(array, left, pivotIndex - 1);
    // recursively sort the right subarray
    await quickSort(array, pivotIndex + 1, right);
    // pause for visualization after partitioning
    await sleep();
  }
}

// TODOs 4 & 5: Implement partition

async function partition(array, left, right) {
  // choose the pivot as the last element
  let pivot = array[right];
  // initialize i to left - 1
  let i = left - 1;
  // loop from left to right - 1
  for (let j = left; j < right; j++) {
    // if current element is less than or equal to pivot
    if (array[j].value <= pivot.value) {
      // increment i
      i++;
      // swap array[i] and array[j]
      await swap(array, i, j);
      // update the quick sort counter
      updateCounter(quickCounter);
    }
  }
  // swap array[i+1] and array[right] (pivot)
  await swap(array, i + 1, right);
  // update the counter
  updateCounter(quickCounter);
  // return the pivot index
  return i + 1;
}

// TODO 1: Implement swap

async function swap(array, i, j) {
  // swap elements at indexes i and j using a temporary variable
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  // redraw the swapped elements for visualization
  drawSwap(array, i, j);
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep() {
  return new Promise((resolve) => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j) {
  let element1 = array[i];
  let element2 = array[j];

  let temp = parseFloat($(element1.id).css("top")) + "px";

  $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
  $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter) {
  $(counter).text(
    "Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, "")) + 1),
  );
}
