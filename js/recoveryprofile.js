let mainLogo = document.getElementById("navLogo");
console.log(navLogo);

mainLogo.addEventListener("click", function(){
console.log("clicked logo")
window.location.href=('../')
})




// const minusButton = document.getElementById("minusButton");

let countdownTimer = 60;
let baseChestSelected = false;
let musclesSelected = [];

let clickedTimer = document.getElementById("clickedTimer").innerHTML;
let buttonMap = {};

const timerDisplay = document.getElementById("testButton");

const chestpaths = Array.from(document.querySelectorAll(".chest"));

let timerCounter = 0; // Assume this is your timer counter

// Save the counter value to localStorage every time it changes
function updateCounter() {
    localStorage.setItem('timerCounter', countdownTimer);
    // Other operations related to the counter
}

// Example: Incrementing the counter
function deincrementCounter() {
  countdownTimer--;
    updateCounter(); // Save the updated counter value to localStorage
}

chestpaths.forEach(function(path) {
  path.addEventListener("click", function() {
    const chestId = path.id;

    // Remove existing buttons for this chest if any
    removeAllButtons(chestId);

    // Create new buttons
    if (!buttonMap[chestId] || buttonMap[chestId].length < 2) {
      const minusButton = document.createElement("button");
      minusButton.classList.add("minus-button");
      minusButton.textContent = "-";
      minusButton.setAttribute("id","minusButton")
      muscleSelector.appendChild(minusButton);

      const plusButton = document.createElement("button");
      plusButton.classList.add("plus-button");
      plusButton.textContent = "+";
      plusButton.setAttribute("id","plusButton")
      muscleSelector.appendChild(plusButton);

      // event listeners for new buttons
      document.getElementById("minusButton").addEventListener("click", function(){
        // variable range calculation required
        countdownTimer -= 10;
        document.getElementById("clickedTimer").innerHTML = "Time to Recovery: " + countdownTimer;

      })
      document.getElementById("plusButton").addEventListener("click", function(){
        //variable range calculation required
        countdownTimer += 10;
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = localStorage.getItem(key);
          console.log(`Key: ${key}, Value: ${value}`);
        }
        console.log("calculating new countdowntimer")
        document.getElementById("clickedTimer").innerHTML = "Time to Recovery: " + countdownTimer;

      })


      // Store button elements associated with this chest
      if (!buttonMap[chestId]) {
        buttonMap[chestId] = [minusButton, plusButton];
      } else {
        buttonMap[chestId].push(minusButton, plusButton);
      }
    }

    // Rest of your logic here for chestPath events
    chestpaths.forEach(function(chestPath) {
      // Multiple events
      if (baseChestSelected) {
        chestPath.classList.remove("clicked");
        document.getElementById("clickedTimer").textContent = clickedTimer;
        removeAllButtons(chestId);
      } else {
        chestPath.classList.add("clicked");
        document.getElementById("clickedTimer").innerHTML = "Time to Recovery: " + countdownTimer;
      }
    });
    baseChestSelected = !baseChestSelected;
    
  });
});

// Function to remove buttons associated with a chest
function removeAllButtons() {
  for (const chestId in buttonMap) {
    if (buttonMap.hasOwnProperty(chestId)) {
      const buttons = buttonMap[chestId];
      buttons.forEach(button => {
        if (button && button.parentNode) {
          button.parentNode.removeChild(button);
        }
      });
      delete buttonMap[chestId];
    }
  }
};

timerDisplay.addEventListener("click", function(){
    startTimer();
});

function startTimer() {       
    const timer = setInterval(() => {
      testButton.textContent = countdownTimer;
      countdownTimer--;
      updateCounter();
      chestpaths.forEach(function(path) {
        path.classList.add('z')
      })
      if (countdownTimer <= 60 && countdownTimer >= 58) {
        chestpaths.forEach(function(path) {
          path.classList.add('y');
        });
      } else if (countdownTimer <= 58 && countdownTimer >= 56) {
        chestpaths.forEach(function(path) {
          path.classList.remove('y');
          path.classList.add('x');
        });
      } else if (countdownTimer <= 56 && countdownTimer >= 54) {
        // Logic for countdownTimer between 56 and 54
      } else if (countdownTimer <= 5 && countdownTimer > 0) {
        // Logic for countdownTimer less than or equal to 5
      }
      if (countdownTimer <= 0) {
        clearInterval(timer);
        chestpaths.forEach(function(path) {
          path.classList.remove('z')
        path.classList.remove('x')
        })
        testButton.textContent = "Time's up!";
        // You can perform additional actions when the timer ends
      }
    }, 1000);
  };

const viewSwapper = document.getElementById("viewSwap");
viewSwap.addEventListener("click", toggleBoxes);

function toggleBoxes() {
  if (maleavatarfront.style.display === 'none') {
    maleavatarfront.style.display = 'block';
    maleavatarback.style.display = 'none';
  } else {
    maleavatarfront.style.display = 'none';
    maleavatarback.style.display = 'block';
  }
};

const availableMuscles = ["Biceps", "Triceps", "Quadriceps", "Hamstrings", "Calves", "Pectorals", "Abdominals", "Obliques", "Lats", "Deltoids", "Forearms", "Gluteus", "Lowerback", "Trapezius", "Hips"]; // Add all relevant muscle names here
  
function getClassForEngagement(engagementTime) {
  if (engagementTime > 144) {
      return 'color-72'; // Specific class for engagement above 144
  }
  const index = Math.min(Math.floor(engagementTime / 2), 71); // Adjusted for 72 colors, index 0-71
  return `color-${index + 1}`; // Class names are color-1 to color-72
}

function updateSvgColors() {
  availableMuscles.forEach(muscle => {
      const svgElements = document.querySelectorAll(`.${muscle.toLowerCase()}`);
      svgElements.forEach(svgElement => {
          const state = loadState(muscle);
          let className;
          if (state && state.engagementTime > 0) {
              className = getClassForEngagement(state.engagementTime);
          } else if (state === null || state.engagementTime <= 0) {
            className = 'color-0'; // Replace with the class name for ready muscle
          }
          // Remove all color classes and add the current one
          for (let i = 1; i <= 72; i++) {
              svgElement.classList.remove(`color-${i}`);
          }
          svgElement.classList.add(className);
      });
  });
}
updateSvgColors();
setInterval(updateSvgColors, 60000);

function loadState(muscle) {
  const savedState = localStorage.getItem(`timerState_${muscle}`);
  return savedState ? JSON.parse(savedState) : null;
}

document.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.getElementById('clearLocalStorageButton');

  clearButton.addEventListener('click', () => {
      localStorage.clear();
      console.log('Local storage cleared.');
      updateSvgColors();
      // Additional code to handle any updates needed after clearing local storage
  });
});

