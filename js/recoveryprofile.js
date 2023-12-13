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

