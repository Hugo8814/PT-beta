let mainLogo = document.getElementById("navLogo");

mainLogo.addEventListener("click", function(){
window.location.href=('../')
})

let baseChestSelected = false;
let musclesSelected = [];

const chestpaths = Array.from(document.querySelectorAll(".chest"));

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
      // document.getElementById("minusButton").addEventListener("click", function(){
      //   // variable range calculation required
      //   countdownTimer -= 10;
      //   document.getElementById("clickedTimer").innerHTML = "Time to Recovery: " + countdownTimer;

      // })
      // document.getElementById("plusButton").addEventListener("click", function(){
      //   //variable range calculation required
      //   countdownTimer += 10;
      //   for (let i = 0; i < localStorage.length; i++) {
      //     const key = localStorage.key(i);
      //     const value = localStorage.getItem(key);
      //     console.log(`Key: ${key}, Value: ${value}`);
      //   }
      //   console.log("calculating new countdowntimer")
      //   document.getElementById("clickedTimer").innerHTML = "Time to Recovery: " + countdownTimer;

      // })


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
        removeAllButtons(chestId);
      } else {
        chestPath.classList.add("clicked");
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

let buttonMap = {};  

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
            className = 'color-1'; // Replace with the class name for ready muscle
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
setInterval(updateSvgColors, 360000);

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

// RECOVERY PROFILE TIMER

let muscleTimers = {};

// Calculate muscle totals from the workout array
function calculateMuscleTotals() {
    let muscleTotals = {};
    workout.forEach(exercise => {
        for (let muscle in exercise) {
            if (muscle === "Exercise Muscle Group" || typeof exercise[muscle] !== 'number') {
                continue;
            }
            muscleTotals[muscle] = (muscleTotals[muscle] || 0) + exercise[muscle];
        }
    });
    return muscleTotals;
}

// Start independent timers for each muscle
function startMuscleTimers() {
  let muscleEngagements = calculateMuscleTotals();
  console.log("Muscle Engagements:", muscleEngagements);

  Object.keys(muscleEngagements).forEach(muscle => {
      let savedState = loadState(muscle);
      let newEngagementTime = muscleEngagements[muscle];
      if (savedState) {
          // Accumulate the new engagement time with the saved one
          newEngagementTime += savedState.engagementTime;
      }
      startEngagementTimer(muscle, newEngagementTime);
  });
}

function startEngagementTimer(muscle, totalEngagementTime, hoursPassed = 0) {
  saveState(muscle, { engagementTime: totalEngagementTime, hoursPassed }); // Save the initial state

  function updateTimer() {
    hoursPassed++;
    let rate = getRate(hoursPassed);
    totalEngagementTime -= rate;

    if (totalEngagementTime <= 0) {
        totalEngagementTime = 0; // Reset to 0 if it goes below zero
        clearInterval(muscleTimers[muscle]);
        startRecoveryTimer(muscle); // Start the recovery timer for the muscle
    }

    saveState(muscle, { engagementTime: totalEngagementTime, hoursPassed });

    if (hoursPassed >= 72) {
        hoursPassed = 0; // Reset hoursPassed for the new cycle
        totalEngagementTime = loadState(muscle).engagementTime; // Reload the remaining engagement time
    }
}

  stopTimer(muscle);
  muscleTimers[muscle] = setInterval(updateTimer, 3600000); // Update every second (for testing)
}

// Calculate rate based on hours passed
function getRate(hours) {
    if (hours <= 12) return 3.6;
    else if (hours <= 24) return 2.4;
    else if (hours <= 36) return 2.6;
    else if (hours <= 48) return 1.4;
    else if (hours <= 60) return 1.6;
    else return 0.4;
}

// Start recovery timer for a specific muscle
function startRecoveryTimer(muscle) {
    let recoveryHours = 7 * 24; // 7 days

    function updateRecovery() {
        recoveryHours--;
        if (recoveryHours <= 0) {
            clearInterval(muscleTimers[muscle]);
            console.log(`${muscle} is ready to be worked again`);
        } else {
            console.log(`Recovery time remaining for ${muscle}: ${recoveryHours} hours`);
        }
    }

    muscleTimers[muscle] = setInterval(updateRecovery, 3600000); // Update every hour
}

// Stop timer for a specific muscle
function stopTimer(muscle) {
    if (muscleTimers[muscle]) {
        clearInterval(muscleTimers[muscle]);
    }
}

function saveState(muscle, state) {
  try {
      localStorage.setItem(`timerState_${muscle}`, JSON.stringify(state));
      console.log(`Saved state for ${muscle}:`, state);
  } catch (error) {
      console.error(`Error saving state for ${muscle}:`, error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.getElementById('clearLocalStorageButton');

  clearButton.addEventListener('click', () => {
      localStorage.clear();
      console.log('Local storage cleared.');
      // Additional code to handle any updates needed after clearing local storage
  });
});

function continueEngagementTimer(muscle) {
  const savedState = loadState(muscle);
  if (savedState) {
      startEngagementTimer(muscle, savedState.engagementTime, savedState.hoursPassed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  availableMuscles.forEach(continueEngagementTimer);
});