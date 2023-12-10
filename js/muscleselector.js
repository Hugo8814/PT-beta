// // let elements = Array.from(document.querySelectorAll("path"));

// // elements.forEach(function(el) {
// //     el.addEventListener("click", function(){console.log("buttons ready")} )
// //     el.addEventListener("mouseover", function(){console.log("muscles ready too")} )
// //  });

let baseChestSelected = false;
let baseTricepSelected = false;
let baseforearmSelected = false;
let baseshoulderSelected = false;
let basebicepSelected = false;
let baseabsSelected = false;
let baseobliquesSelected = false;
let basetrapsSelected = false;
let basewaistSelected = false;
let basequadsSelected = false;
let basecalvesSelected = false;
let baseadductorsSelected = false;

let majorGroupUpper = false;
let majorGroupLower = false;

let musclesSelected = []

let HTMLMuscList = document.getElementById("muscleName").innerHTML;
let ButtonOn = false;
let majorGroupSelected = false;

function setText() {
  musclesSelected.sort();
  document.getElementById("muscleName").innerHTML = musclesSelected.join(", ")
};

let chestpaths = Array.from(document.querySelectorAll(".chest"));
chestpaths.forEach(function(path) {
  path.addEventListener("click", function() {
    // console.log("clicking chest: ("+ baseChestSelected + " base chest state)(" + baseTricepSelected + " base tricep state)("+ majorGroupUpper + " button-on body state)("+ ButtonOn + " buttonON)");
    chestpaths.forEach(function(chestPath) {
      if (baseChestSelected) {
        chestPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Chest");
        } else {
        chestPath.classList.add("clicked");
        if (!musclesSelected.includes("Chest")) {
          musclesSelected.push("Chest");
          setText();
        }
        }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    baseChestSelected = !baseChestSelected; 
  });
});

let triceppaths = Array.from(document.querySelectorAll(".triceps"));
triceppaths.forEach(function(path) {
  path.addEventListener("click", function() {

    triceppaths.forEach(function(triPath) {

      if (baseTricepSelected) {
        triPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Triceps");
        
      } else {
        triPath.classList.add("clicked");
        if (!musclesSelected.includes("Triceps")) {
        musclesSelected.push("Triceps");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    baseTricepSelected = !baseTricepSelected; 
  });
});

let forearmpaths = Array.from(document.querySelectorAll(".forearms"));
forearmpaths.forEach(function(path) {
  path.addEventListener("click", function() {

    forearmpaths.forEach(function(triPath) {

      if (baseforearmSelected) {
        triPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Forearms");
        
      } else {
        triPath.classList.add("clicked");
        if (!musclesSelected.includes("Forearms")) {
        musclesSelected.push("Forearms");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    baseforearmSelected = !baseforearmSelected; 
  });
});

let shoulderpaths = Array.from(document.querySelectorAll(".shoulders"));
shoulderpaths.forEach(function(path) {
  path.addEventListener("click", function() {

    shoulderpaths.forEach(function(shoulderPath) {

      if (baseshoulderSelected) {
        shoulderPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Shoulders");
        
      } else {
        shoulderPath.classList.add("clicked");
        if (!musclesSelected.includes("Shoulders")) {
        musclesSelected.push("Shoulders");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    baseshoulderSelected = !baseshoulderSelected; 
  });
});

let abspaths = Array.from(document.querySelectorAll(".abs"));
abspaths.forEach(function(path) {
  path.addEventListener("click", function() {

    abspaths.forEach(function(absPath) {

      if (baseabsSelected) {
        absPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Abs");
        
      } else {
        absPath.classList.add("clicked");
        if (!musclesSelected.includes("Abs")) {
        musclesSelected.push("Abs");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    baseabsSelected = !baseabsSelected; 
  });
});

let biceppaths = Array.from(document.querySelectorAll(".biceps"));
biceppaths.forEach(function(path) {
  path.addEventListener("click", function() {

    biceppaths.forEach(function(bicepPath) {

      if (basebicepSelected) {
        bicepPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Biceps");
        
      } else {
        bicepPath.classList.add("clicked");
        if (!musclesSelected.includes("Biceps")) {
        musclesSelected.push("Biceps");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    basebicepSelected = !basebicepSelected; 
  });
});

let obliquespaths = Array.from(document.querySelectorAll(".obliques"));
obliquespaths.forEach(function(path) {
  path.addEventListener("click", function() {

    obliquespaths.forEach(function(obliquesPath) {

      if (baseobliquesSelected) {
        obliquesPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Obliques");
        
      } else {
        obliquesPath.classList.add("clicked");
        if (!musclesSelected.includes("Obliques")) {
        musclesSelected.push("Obliques");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    baseobliquesSelected = !baseobliquesSelected; 
  });
});

let trapspaths = Array.from(document.querySelectorAll(".trapezius"));
trapspaths.forEach(function(path) {
  path.addEventListener("click", function() {

    trapspaths.forEach(function(trapsPath) {

      if (basetrapsSelected) {
        trapsPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Traps");
        
      } else {
        trapsPath.classList.add("clicked");
        if (!musclesSelected.includes("Traps")) {
        musclesSelected.push("Traps");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    basetrapsSelected = !basetrapsSelected; 
  });
});

let waistpaths = Array.from(document.querySelectorAll(".waist"));
waistpaths.forEach(function(path) {
  path.addEventListener("click", function() {

    waistpaths.forEach(function(waistPath) {

      if (basewaistSelected) {
        waistPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Hips");
        
      } else {
        waistPath.classList.add("clicked");
        if (!musclesSelected.includes("Hips")) {
        musclesSelected.push("Hips");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    basewaistSelected = !basewaistSelected; 
  });
});

let calvespaths = Array.from(document.querySelectorAll(".calves"));
calvespaths.forEach(function(path) {
  path.addEventListener("click", function() {

    calvespaths.forEach(function(calvesPath) {

      if (basecalvesSelected) {
        calvesPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Calves");
        
      } else {
        calvesPath.classList.add("clicked");
        if (!musclesSelected.includes("Calves")) {
        musclesSelected.push("Calves");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    basecalvesSelected = !basecalvesSelected; 
  });
});

let quadspaths = Array.from(document.querySelectorAll(".quads"));
quadspaths.forEach(function(path) {
  path.addEventListener("click", function() {

    quadspaths.forEach(function(quadsPath) {

      if (basequadsSelected) {
        quadsPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Quads");
        
      } else {
        quadsPath.classList.add("clicked");
        if (!musclesSelected.includes("Quads")) {
        musclesSelected.push("Quads");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    basequadsSelected = !basequadsSelected; 
  });
});

let adductorpaths = Array.from(document.querySelectorAll(".adductors"));
adductorpaths.forEach(function(path) {
  path.addEventListener("click", function() {

    adductorpaths.forEach(function(adductorPath) {

      if (baseadductorsSelected) {
        adductorPath.classList.remove("clicked");
        musclesSelected = musclesSelected.filter(item => item !== "Adductors");
        
      } else {
        adductorPath.classList.add("clicked");
        if (!musclesSelected.includes("Adductors")) {
        musclesSelected.push("Adductors");
        setText();
        }
      }
      setText();
    });
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    baseadductorsSelected = !baseadductorsSelected; 
  });
});

const majorSelectorButton = document.getElementById("majorSelectorButton");
majorSelectorButton.addEventListener("click", function() {
  if (ButtonOn) {
    document.getElementById("majorSelectorButton").innerText = "Enable Major Selector";
    ButtonOn = false;
    console.log("buttonOn " + ButtonOn);
    majorGroupSelected = false;
    majorGroup();
  
  } else {
    ButtonOn = true;
    console.log("buttonOn " + ButtonOn);
    document.getElementById("majorSelectorButton").innerText = "Disable Major Selector";
    majorGroupSelected = true;
    majorGroup();
  }
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetButtonClicked);

function resetButtonClicked() {
  if (musclesSelected.length > 0) {
    musclesSelected.length = 0;
    baseChestSelected = false;
    baseTricepSelected = false;
    baseforearmSelected = false;
    baseshoulderSelected = false;
    basebicepSelected = false;
    baseabsSelected = false;
    baseobliquesSelected = false;
    basetrapsSelected = false;
    basewaistSelected = false;
    basequadsSelected = false;
    basecalvesSelected = false;
    baseadductorsSelected = false;
    majorGroupUpper = false;
    majorGroupLower = false;
    setText();
    document.getElementById("muscleName").textContent = HTMLMuscList

    Array.from(document.querySelectorAll('.clicked')).forEach(
      (el) => el.classList.remove('clicked')
    );
    }
    };


let upperbodypaths = Array.from(document.querySelectorAll(".upperbody"))
let lowerbodypaths = Array.from(document.querySelectorAll(".lowerbody"))

function majorGroup() {
  if (majorGroupSelected) {
    console.log("majorgroup function begin");
    upperbodypaths.forEach(function (path) {
      path.removeEventListener("click", handleUpperbodyClick);
    });
    upperbodypaths.forEach(function (path) {
      path.addEventListener("click", handleUpperbodyClick);
    });
    lowerbodypaths.forEach(function (path) {
      path.removeEventListener("click", handleLowerbodyClick);
    });
    lowerbodypaths.forEach(function (path) {
      path.addEventListener("click", handleLowerbodyClick);
    });

  }
  else {
    upperbodypaths.forEach(function (path) {
      path.removeEventListener("click", handleUpperbodyClick);
    });
    lowerbodypaths.forEach(function (path) {
      path.removeEventListener("click", handleLowerbodyClick);
    });


  }
};

function handleUpperbodyClick() {

  if (majorGroupSelected) {
    upperbodypaths.forEach(function (upperbodyPath) {
      if (majorGroupUpper) {
        upperbodyPath.classList.remove("clicked");
        const musclesToFilter = ["Chest", "Triceps", "Biceps", "Forearms", "Obliques", "Abs", "Traps", "Hips"];
        musclesSelected = musclesSelected.filter(item => !musclesToFilter.includes(item));
        baseChestSelected = false;
        baseTricepSelected = false;
        baseforearmSelected = false;
        baseshoulderSelected = false;
        basebicepSelected = false;
        baseabsSelected = false;
        baseobliquesSelected = false;
        basetrapsSelected = false;
        basewaistSelected = false;
      } else {
        upperbodyPath.classList.add("clicked");
        const musclesToCheck = ["Chest", "Triceps", "Biceps", "Forearms", "Obliques", "Abs", "Traps", "Hips"];
        baseChestSelected = true;
        baseTricepSelected = true;
        baseforearmSelected = true;
        baseshoulderSelected = true;
        basebicepSelected = true;
        baseabsSelected = true;
        baseobliquesSelected = true;
        basetrapsSelected = true;
        basewaistSelected = true;
        musclesToCheck.forEach(muscle => {
          if (!musclesSelected.includes(muscle)) {
            musclesSelected.push(muscle);
          }
        });
      }
    });

    setText();

    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }

    majorGroupUpper = !majorGroupUpper;
    // baseChestSelected = !baseChestSelected;
    // baseTricepSelected = !baseTricepSelected;  
    
    console.log("clicking upperbody: (" + baseChestSelected + " base chest state)(" + baseTricepSelected + " base tricep state)(" + majorGroupUpper + " button-on body state)(" + ButtonOn + " buttonON)");

  }
};

function handleLowerbodyClick() {

  if (majorGroupSelected) {
    lowerbodypaths.forEach(function (lowerbodyPath) {
      if (majorGroupLower) {
        lowerbodyPath.classList.remove("clicked");
        const musclesToFilter = ["Calves", "Quads", "Adductors"];
        musclesSelected = musclesSelected.filter(item => !musclesToFilter.includes(item));
        basequadsSelected = false;
        basecalvesSelected = false;
        baseadductorsSelected = false;
      } else {
        lowerbodyPath.classList.add("clicked");
        const musclesToCheck = ["Calves", "Quads", "Adductors"];
        basequadsSelected = true;
        basecalvesSelected = true;
        baseadductorsSelected = true;
        musclesToCheck.forEach(muscle => {
          if (!musclesSelected.includes(muscle)) {
            musclesSelected.push(muscle);
          }
        });
      }
    });
    setText();
    if (musclesSelected.length < 1) {
      document.getElementById("muscleName").textContent = HTMLMuscList;
    }
    majorGroupLower = !majorGroupLower;
    }
};

const viewSwapper = document.getElementById("viewSwap");
viewSwap.addEventListener("click", toggleBoxes);

var box1 = document.getElementById('maleavatarfront');
var box2 = document.getElementById('maleavatarback');

function toggleBoxes() {
  if (maleavatarfront.style.display === 'none') {
    maleavatarfront.style.display = 'block';
    maleavatarback.style.display = 'none';
  } else {
    maleavatarfront.style.display = 'none';
    maleavatarback.style.display = 'block';
  }
};