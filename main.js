const toggle = document.querySelector(".toggle");
const navlist = document.querySelector(".nar-list");
toggle.addEventListener("click", () => {
  navlist.classList.toggle("active");
});

function Model(show) {
  if (show) {
    if (checkedOne.checked) {
    } else if (checkedTwo.checked) {
    } else if (checkedThree.checked) {
      checkedTwo.checked = false;
      checkedOne.checked = false;
    }
  }
}

// checked momth
const checkedTwo = document.querySelector("#checked-two");
const checkedThree = document.querySelector("#checked-three");
const checkedOne = document.querySelector("#checked-one");
checkedOne.addEventListener("click", function () {
  // Model(true);
  checkedOne.checked = true;
  checkedThree.checked = false;
  checkedTwo.checked = false;
});
checkedThree.addEventListener("click", function () {
  checkedOne.checked = false;
  checkedThree.checked = true;
  checkedTwo.checked = false;
  // Model(true);
});
checkedTwo.addEventListener("click", function () {
  checkedOne.checked = false;
  checkedThree.checked = false;
  checkedTwo.checked = true;
  // Model(true);
});
// end checked month

// show Month
const ShowMonth = document.getElementById("show-month");
const btnCalculate = document.querySelector(".btn-calculate");
checkedOne.addEventListener("click", function () {
  if (checkedOne.checked) {
    ShowMonth.innerText = checkedOne.value + " " + "Months";
  }
});
checkedTwo.addEventListener("click", function () {
  if (checkedTwo.checked) {
    ShowMonth.innerText = checkedTwo.value + " " + "Months";
  }
});
checkedThree.addEventListener("click", function () {
  if (checkedThree.checked) {
    ShowMonth.innerText = checkedThree.value + " " + "Months";
  }
});

btnCalculate.addEventListener("click", () => {
  if (checkedOne.checked) {
    ShowMonth.innerText = checkedOne.value + " " + "Months";
  } else if (checkedThree.checked) {
    ShowMonth.innerText = checkedThree.value + " " + "Months";
  } else if (checkedTwo.checked) {
    ShowMonth.innerText = checkedTwo.value + " " + "Months";
  }
});

// Region
const checkedFour = document.getElementById("checked-four");
const checkedFive = document.getElementById("checked-five");
const checkedSix = document.getElementById("checked-six");
const checkedSeven = document.getElementById("checked-seven");
const checkedEight = document.getElementById("checked-eight");
const checkedNine = document.getElementById("checked-nine");

checkedFour.addEventListener("click", () => {
  checkedFour.checked = true;
  checkedFive.checked = false;
  checkedSix.checked = false;
  checkedSeven.checked = false;
  checkedEight.checked = false;
  checkedNine.checked = false;
});
checkedFive.addEventListener("click", function () {
  checkedFour.checked = false;
  checkedFive.checked = true;
  checkedSix.checked = false;
  checkedSeven.checked = false;
  checkedEight.checked = false;
  checkedNine.checked = false;
});
checkedSix.addEventListener("click", function () {
  checkedFour.checked = false;
  checkedFive.checked = false;
  checkedSix.checked = true;
  checkedSeven.checked = false;
  checkedEight.checked = false;
  checkedNine.checked = false;
});
checkedSeven.addEventListener("click", function () {
  checkedFour.checked = false;
  checkedFive.checked = false;
  checkedSix.checked = false;
  checkedSeven.checked = true;
  checkedEight.checked = false;
  checkedNine.checked = false;
});
checkedEight.addEventListener("click", function () {
  checkedFour.checked = false;
  checkedFive.checked = false;
  checkedSix.checked = false;
  checkedSeven.checked = false;
  checkedEight.checked = true;
  checkedNine.checked = false;
});
checkedNine.addEventListener("click", function () {
  checkedFour.checked = false;
  checkedFive.checked = false;
  checkedSix.checked = false;
  checkedSeven.checked = false;
  checkedEight.checked = false;
  checkedNine.checked = true;
});
// end Region

// SetUp Fee
const Setup = document.getElementById("Setup");
const showDetails = document.querySelector(".show-detail");
const TernResult = document.getElementById("TermResult");
const Region = document.getElementById("Region");
const Storage = document.getElementById("Storage");
const Image = document.getElementById("Image");
const Network = document.getElementById("Network");

showDetails.addEventListener("click", () => {
  if (checkedOne.checked) {
    if (checkedOne.checked && checkedFour.checked) {
      Setup.innerHTML = Math.round(checkedOne.value * checkedFour.value);
      Region.innerHTML = Math.round(checkedOne.value * checkedFour.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedFour.value * 5.5
      );
      Storage.innerHTML = 9.91;
      Image.innerHTML = 5.21;
      Network.innerHTML = 4.62;
    } else if (checkedOne.checked && checkedFive.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedFive.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedFive.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedFour.value * 3.8
      );
      Storage.innerHTML = 4.91;
      Image.innerHTML = 2.21;
      Network.innerHTML = 1.62;
    } else if (checkedOne.checked && checkedSix.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedSix.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedSix.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedSix.value * 4.8
      );
      Storage.innerHTML = 5.91;
      Image.innerHTML = 3.21;
      Network.innerHTML = 2.62;
    } else if (checkedOne.checked && checkedSeven.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedSeven.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedSeven.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedSeven.value * 2.8
      );
      Storage.innerHTML = 2.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.62;
    } else if (checkedOne.checked && checkedEight.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedEight.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedEight.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedEight.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
    } else if (checkedOne.checked && checkedNine.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedNine.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedNine.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedNine.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
    }
  } else if (checkedTwo.checked) {
    if (checkedTwo.checked && checkedFour.checked) {
      Setup.innerHTML = Math.round(checkedTwo.value * checkedFour.value);
      Region.innerHTML = Math.round(checkedTwo.value * checkedFour.value * 5.5);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedFour.value * 5.5
      );
      Storage.innerHTML = 9.91;
      Image.innerHTML = 5.21;
      Network.innerHTML = 4.62;
    } else if (checkedTwo.checked && checkedFive.checked) {
      Region.innerHTML = Math.round(checkedTwo.value * checkedFive.value * 5.5);
      Setup.innerHTML = Math.round(checkedTwo.value * checkedFive.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedFour.value * 3.8
      );
      Storage.innerHTML = 4.91;
      Image.innerHTML = 2.21;
      Network.innerHTML = 1.62;
    } else if (checkedTwo.checked && checkedSix.checked) {
      Region.innerHTML = Math.round(checkedTwo.value * checkedSix.value * 5.5);
      Setup.innerHTML = Math.round(checkedTwo.value * checkedSix.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedSix.value * 4.8
      );
      Storage.innerHTML = 5.91;
      Image.innerHTML = 3.21;
      Network.innerHTML = 2.62;
    } else if (checkedTwo.checked && checkedSeven.checked) {
      Region.innerHTML = Math.round(
        checkedTwo.value * checkedSeven.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedTwo.value * checkedSeven.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedSeven.value * 2.8
      );
      Storage.innerHTML = 2.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.62;
    } else if (checkedTwo.checked && checkedEight.checked) {
      Region.innerHTML = Math.round(
        checkedTwo.value * checkedEight.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedTwo.value * checkedEight.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedEight.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
    } else if (checkedTwo.checked && checkedNine.checked) {
      Region.innerHTML = Math.round(checkedTwo.value * checkedNine.value * 5.5);
      Setup.innerHTML = Math.round(checkedTwo.value * checkedNine.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedNine.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
    }
  } else if (checkedThree.checked) {
    if (checkedThree.checked && checkedFour.checked) {
      Setup.innerHTML = Math.round(checkedThree.value * checkedFour.value);
      Region.innerHTML = Math.round(
        checkedThree.value * checkedFour.value * 5.5
      );
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedFour.value * 5.5
      );
      Storage.innerHTML = 9.91;
      Image.innerHTML = 5.21;
      Network.innerHTML = 4.62;
    } else if (checkedThree.checked && checkedFive.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedFive.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedFive.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedFour.value * 3.8
      );
      Storage.innerHTML = 4.91;
      Image.innerHTML = 2.21;
      Network.innerHTML = 1.62;
    } else if (checkedThree.checked && checkedSix.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedSix.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedSix.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedSix.value * 4.8
      );
      Storage.innerHTML = 5.91;
      Image.innerHTML = 3.21;
      Network.innerHTML = 2.62;
    } else if (checkedThree.checked && checkedSeven.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedSeven.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedSeven.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedSeven.value * 2.8
      );
      Storage.innerHTML = 2.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.62;
    } else if (checkedThree.checked && checkedEight.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedEight.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedEight.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedEight.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
    } else if (checkedThree.checked && checkedNine.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedNine.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedNine.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedNine.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
    }
  } else {
    alert("Pls Seclect Your Checked!");
  }
});

const ShowSave = document.getElementById("Show-SAVE");
const save1 = document.getElementById("save1");
const save2 = document.getElementById("save2");
const save3 = document.getElementById("save3");
btnCalculate.addEventListener("click", () => {
  if (true) {
    if (checkedOne.checked) {
      save1.value = " 0.00";
      ShowSave.innerHTML = save1.value;
    } else if (checkedTwo.checked) {
      save2.value = " 2.55";
      ShowSave.innerHTML = save2.value;
    } else if (checkedThree.checked) {
      save3.value = " 5.99";
      ShowSave.innerHTML = save3.value;
    } else {
      alert("pls seclect your checked!");
    }
  }
});

checkedOne.addEventListener("click", () => {
  if (checkedOne.checked) {
    save1.value = " 0.00";
    ShowSave.innerHTML = save1.value;
  }
});
checkedTwo.addEventListener("click", () => {
  if (checkedTwo.checked) {
    save2.value = " 2.55";
    ShowSave.innerHTML = save2.value;
  }
});
checkedThree.addEventListener("click", () => {
  if (checkedThree.checked) {
    save3.value = " 5.99";
    ShowSave.innerHTML = save3.value;
  }
});

const showTotalPrice = document.getElementById("show-total-price");
btnCalculate.addEventListener("click", () => {
  if (checkedOne.checked) {
    if (checkedOne.checked && checkedFour.checked) {
      Setup.innerHTML = Math.round(checkedOne.value * checkedFour.value);
      Region.innerHTML = Math.round(checkedOne.value * checkedFour.value);
      TernResult.innerHTML =
        Math.round(checkedOne.value * checkedFour.value) * 5.5;
      Storage.innerHTML = 9.91;
      Image.innerHTML = 5.21;
      Network.innerHTML = 4.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedOne.checked && checkedFive.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedFive.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedFive.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedFour.value * 3.8
      );
      Storage.innerHTML = 4.91;
      Image.innerHTML = 2.21;
      Network.innerHTML = 1.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedOne.checked && checkedSix.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedSix.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedSix.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedSix.value * 4.8
      );
      Storage.innerHTML = 5.91;
      Image.innerHTML = 3.21;
      Network.innerHTML = 2.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedOne.checked && checkedSeven.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedSeven.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedSeven.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedSeven.value * 2.8
      );
      Storage.innerHTML = 2.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedOne.checked && checkedEight.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedEight.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedEight.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedEight.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedOne.checked && checkedNine.checked) {
      Region.innerHTML = Math.round(checkedOne.value * checkedNine.value);
      Setup.innerHTML = Math.round(checkedOne.value * checkedNine.value);
      TernResult.innerHTML = Math.round(
        checkedOne.value * checkedNine.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    }
  } else if (checkedTwo.checked) {
    if (checkedTwo.checked && checkedFour.checked) {
      Setup.innerHTML = Math.round(checkedTwo.value * checkedFour.value);
      Region.innerHTML = Math.round(checkedTwo.value * checkedFour.value * 5.5);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedFour.value * 5.5
      );
      Storage.innerHTML = 9.91;
      Image.innerHTML = 5.21;
      Network.innerHTML = 4.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedTwo.checked && checkedFive.checked) {
      Region.innerHTML = Math.round(checkedTwo.value * checkedFive.value * 5.5);
      Setup.innerHTML = Math.round(checkedTwo.value * checkedFive.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedFour.value * 3.8
      );
      Storage.innerHTML = 4.91;
      Image.innerHTML = 2.21;
      Network.innerHTML = 1.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedTwo.checked && checkedSix.checked) {
      Region.innerHTML = Math.round(checkedTwo.value * checkedSix.value * 5.5);
      Setup.innerHTML = Math.round(checkedTwo.value * checkedSix.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedSix.value * 4.8
      );
      Storage.innerHTML = 5.91;
      Image.innerHTML = 3.21;
      Network.innerHTML = 2.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedTwo.checked && checkedSeven.checked) {
      Region.innerHTML = Math.round(
        checkedTwo.value * checkedSeven.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedTwo.value * checkedSeven.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedSeven.value * 2.8
      );
      Storage.innerHTML = 2.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedTwo.checked && checkedEight.checked) {
      Region.innerHTML = Math.round(
        checkedTwo.value * checkedEight.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedTwo.value * checkedEight.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedEight.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedTwo.checked && checkedNine.checked) {
      Region.innerHTML = Math.round(checkedTwo.value * checkedNine.value * 5.5);
      Setup.innerHTML = Math.round(checkedTwo.value * checkedNine.value);
      TernResult.innerHTML = Math.round(
        checkedTwo.value * checkedNine.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    }
  } else if (checkedThree.checked) {
    if (checkedThree.checked && checkedFour.checked) {
      Setup.innerHTML = Math.round(checkedThree.value * checkedFour.value);
      Region.innerHTML = Math.round(
        checkedThree.value * checkedFour.value * 5.5
      );
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedFour.value * 5.5
      );
      Storage.innerHTML = 9.91;
      Image.innerHTML = 5.21;
      Network.innerHTML = 4.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedThree.checked && checkedFive.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedFive.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedFive.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedFour.value * 3.8
      );
      Storage.innerHTML = 4.91;
      Image.innerHTML = 2.21;
      Network.innerHTML = 1.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedThree.checked && checkedSix.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedSix.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedSix.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedSix.value * 4.8
      );
      Storage.innerHTML = 5.91;
      Image.innerHTML = 3.21;
      Network.innerHTML = 2.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedThree.checked && checkedSeven.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedSeven.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedSeven.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedSeven.value * 2.8
      );
      Storage.innerHTML = 2.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.62;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedThree.checked && checkedEight.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedEight.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedEight.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedEight.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    } else if (checkedThree.checked && checkedNine.checked) {
      Region.innerHTML = Math.round(
        checkedThree.value * checkedNine.value * 5.5
      );
      Setup.innerHTML = Math.round(checkedThree.value * checkedNine.value);
      TernResult.innerHTML = Math.round(
        checkedThree.value * checkedNine.value * 2.8
      );
      Storage.innerHTML = 1.91;
      Image.innerHTML = 1.21;
      Network.innerHTML = 0.42;
      showTotalPrice.innerHTML =
        Math.round(Setup.innerHTML) +
        Math.round(Region.innerHTML) +
        Math.round(TernResult.innerHTML) +
        Math.round(Storage.innerHTML) +
        Math.round(Image.innerHTML) +
        Math.round(Network.innerHTML);
    }
  } else {
    alert("Pls Seclect Your Checked!");
  }
});

// auto checkedOne
checkedFour.addEventListener("click", function () {
  if (checkedOne.checked && checkedFour.checked) {
    Setup.innerHTML = Math.round(checkedOne.value * checkedFour.value);
    Region.innerHTML = Math.round(checkedOne.value * checkedFour.value);
    TernResult.innerHTML =
      Math.round(checkedOne.value * checkedFour.value) * 5.5;
    Storage.innerHTML = 9.91;
    Image.innerHTML = 5.21;
    Network.innerHTML = 4.62;
  }
});
checkedFive.addEventListener("click", function () {
  if (checkedOne.checked && checkedFive.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedFive.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedFive.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedFour.value * 3.8
    );
    Storage.innerHTML = 4.91;
    Image.innerHTML = 2.21;
    Network.innerHTML = 1.62;
  }
});
checkedSix.addEventListener("click", function () {
  if (checkedOne.checked && checkedSix.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedSix.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedSix.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedSix.value * 4.8
    );
    Storage.innerHTML = 5.91;
    Image.innerHTML = 3.21;
    Network.innerHTML = 2.62;
  }
});
checkedSeven.addEventListener("click", function () {
  if (checkedOne.checked && checkedSeven.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedSeven.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedSeven.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedSeven.value * 2.8
    );
    Storage.innerHTML = 2.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.62;
  }
});
checkedEight.addEventListener("click", function () {
  if (checkedOne.checked && checkedEight.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedEight.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedEight.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedEight.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});
checkedNine.addEventListener("click", function () {
  if (checkedOne.checked && checkedNine.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedNine.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedNine.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedNine.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});
//end auto checkedOne

// auto checkedTwo
checkedFour.addEventListener("click", function () {
  if (checkedTwo.checked && checkedFour.checked) {
    Setup.innerHTML = Math.round(checkedTwo.value * checkedFour.value);
    Region.innerHTML = Math.round(checkedTwo.value * checkedFour.value * 5.5);
    TernResult.innerHTML =
      Math.round(checkedTwo.value * checkedFour.value) * 5.5;
    Storage.innerHTML = 9.91;
    Image.innerHTML = 5.21;
    Network.innerHTML = 4.62;
  }
});
checkedFive.addEventListener("click", function () {
  if (checkedTwo.checked && checkedFive.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedFive.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedFive.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedFour.value * 3.8
    );
    Storage.innerHTML = 4.91;
    Image.innerHTML = 2.21;
    Network.innerHTML = 1.62;
  }
});
checkedSix.addEventListener("click", function () {
  if (checkedTwo.checked && checkedSix.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedSix.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedSix.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedSix.value * 4.8
    );
    Storage.innerHTML = 5.91;
    Image.innerHTML = 3.21;
    Network.innerHTML = 2.62;
  }
});
checkedSeven.addEventListener("click", function () {
  if (checkedTwo.checked && checkedSeven.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedSeven.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedSeven.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedSeven.value * 2.8
    );
    Storage.innerHTML = 2.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.62;
  }
});
checkedEight.addEventListener("click", function () {
  if (checkedTwo.checked && checkedEight.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedEight.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedEight.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedEight.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
  }
});
checkedNine.addEventListener("click", function () {
  if (checkedTwo.checked && checkedNine.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedNine.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedNine.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedNine.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});
// auto checkedTwo

// auto checkedThree
checkedFour.addEventListener("click", function () {
  if (checkedThree.checked && checkedFour.checked) {
    Setup.innerHTML = Math.round(checkedThree.value * checkedFour.value);
    Region.innerHTML = Math.round(checkedThree.value * checkedFour.value * 5.5);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedFour.value * 5.5
    );
    Storage.innerHTML = 9.91;
    Image.innerHTML = 5.21;
    Network.innerHTML = 4.62;
  }
});
checkedFive.addEventListener("click", function () {
  if (checkedThree.checked && checkedFive.checked) {
    Region.innerHTML = Math.round(checkedThree.value * checkedFive.value * 5.5);
    Setup.innerHTML = Math.round(checkedThree.value * checkedFive.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedFour.value * 3.8
    );
    Storage.innerHTML = 4.91;
    Image.innerHTML = 2.21;
    Network.innerHTML = 1.62;
  }
});
checkedSix.addEventListener("click", function () {
  if (checkedThree.checked && checkedSix.checked) {
    Region.innerHTML = Math.round(checkedThree.value * checkedSix.value * 5.5);
    Setup.innerHTML = Math.round(checkedThree.value * checkedSix.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedSix.value * 4.8
    );
    Storage.innerHTML = 5.91;
    Image.innerHTML = 3.21;
    Network.innerHTML = 2.62;
  }
});
checkedSeven.addEventListener("click", function () {
  if (checkedThree.checked && checkedSeven.checked) {
    Region.innerHTML = Math.round(
      checkedThree.value * checkedSeven.value * 5.5
    );
    Setup.innerHTML = Math.round(checkedThree.value * checkedSeven.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedSeven.value * 2.8
    );
    Storage.innerHTML = 2.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.62;
  }
});
checkedEight.addEventListener("click", function () {
  if (checkedThree.checked && checkedEight.checked) {
    Region.innerHTML = Math.round(
      checkedThree.value * checkedEight.value * 5.5
    );
    Setup.innerHTML = Math.round(checkedThree.value * checkedEight.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedEight.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});
checkedNine.addEventListener("click", function () {
  if (checkedThree.checked && checkedNine.checked) {
    Region.innerHTML = Math.round(checkedThree.value * checkedNine.value * 5.5);
    Setup.innerHTML = Math.round(checkedThree.value * checkedNine.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedNine.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});
//end auto checkedThree


checkedOne.addEventListener("click", function () {
  if (checkedOne.checked && checkedFour.checked) {
    Setup.innerHTML = Math.round(checkedOne.value * checkedFour.value);
    Region.innerHTML = Math.round(checkedOne.value * checkedFour.value);
    TernResult.innerHTML =
      Math.round(checkedOne.value * checkedFour.value) * 5.5;
    Storage.innerHTML = 9.91;
    Image.innerHTML = 5.21;
    Network.innerHTML = 4.62;
  }
});
checkedOne.addEventListener("click", function () {
  if (checkedOne.checked && checkedFive.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedFive.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedFive.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedFour.value * 3.8
    );
    Storage.innerHTML = 4.91;
    Image.innerHTML = 2.21;
    Network.innerHTML = 1.62;
  }
});
checkedOne.addEventListener("click", function () {
  if (checkedOne.checked && checkedSix.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedSix.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedSix.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedSix.value * 4.8
    );
    Storage.innerHTML = 5.91;
    Image.innerHTML = 3.21;
    Network.innerHTML = 2.62;
  }
});
checkedOne.addEventListener("click", function () {
  if (checkedOne.checked && checkedSeven.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedSeven.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedSeven.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedSeven.value * 2.8
    );
    Storage.innerHTML = 2.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.62;
  }
});
checkedOne.addEventListener("click", function () {
  if (checkedOne.checked && checkedEight.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedEight.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedEight.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedEight.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});
checkedOne.addEventListener("click", function () {
  if (checkedOne.checked && checkedNine.checked) {
    Region.innerHTML = Math.round(checkedOne.value * checkedNine.value);
    Setup.innerHTML = Math.round(checkedOne.value * checkedNine.value);
    TernResult.innerHTML = Math.round(
      checkedOne.value * checkedNine.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});
//end auto checkedOne

// auto checkedTwo
checkedTwo.addEventListener("click", function () {
  if (checkedTwo.checked && checkedFour.checked) {
    Setup.innerHTML = Math.round(checkedTwo.value * checkedFour.value);
    Region.innerHTML = Math.round(checkedTwo.value * checkedFour.value * 5.5);
    TernResult.innerHTML =
      Math.round(checkedTwo.value * checkedFour.value) * 5.5;
    Storage.innerHTML = 9.91;
    Image.innerHTML = 5.21;
    Network.innerHTML = 4.62;
  }
});
checkedTwo.addEventListener("click", function () {
  if (checkedTwo.checked && checkedFive.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedFive.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedFive.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedFour.value * 3.8
    );
    Storage.innerHTML = 4.91;
    Image.innerHTML = 2.21;
    Network.innerHTML = 1.62;
  }
});
checkedTwo.addEventListener("click", function () {
  if (checkedTwo.checked && checkedSix.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedSix.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedSix.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedSix.value * 4.8
    );
    Storage.innerHTML = 5.91;
    Image.innerHTML = 3.21;
    Network.innerHTML = 2.62;
  }
});
checkedTwo.addEventListener("click", function () {
  if (checkedTwo.checked && checkedSeven.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedSeven.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedSeven.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedSeven.value * 2.8
    );
    Storage.innerHTML = 2.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.62;
  }
});
checkedTwo.addEventListener("click", function () {
  if (checkedTwo.checked && checkedEight.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedEight.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedEight.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedEight.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
  }
});
checkedTwo.addEventListener("click", function () {
  if (checkedTwo.checked && checkedNine.checked) {
    Region.innerHTML = Math.round(checkedTwo.value * checkedNine.value * 5.5);
    Setup.innerHTML = Math.round(checkedTwo.value * checkedNine.value);
    TernResult.innerHTML = Math.round(
      checkedTwo.value * checkedNine.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});
// auto checkedTwo

// auto checkedThree
checkedThree.addEventListener("click", function () {
  if (checkedThree.checked && checkedFour.checked) {
    Setup.innerHTML = Math.round(checkedThree.value * checkedFour.value);
    Region.innerHTML = Math.round(checkedThree.value * checkedFour.value * 5.5);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedFour.value * 5.5
    );
    Storage.innerHTML = 9.91;
    Image.innerHTML = 5.21;
    Network.innerHTML = 4.62;
  }
});
checkedThree.addEventListener("click", function () {
  if (checkedThree.checked && checkedFive.checked) {
    Region.innerHTML = Math.round(checkedThree.value * checkedFive.value * 5.5);
    Setup.innerHTML = Math.round(checkedThree.value * checkedFive.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedFour.value * 3.8
    );
    Storage.innerHTML = 4.91;
    Image.innerHTML = 2.21;
    Network.innerHTML = 1.62;
  }
});
checkedThree.addEventListener("click", function () {
  if (checkedThree.checked && checkedSix.checked) {
    Region.innerHTML = Math.round(checkedThree.value * checkedSix.value * 5.5);
    Setup.innerHTML = Math.round(checkedThree.value * checkedSix.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedSix.value * 4.8
    );
    Storage.innerHTML = 5.91;
    Image.innerHTML = 3.21;
    Network.innerHTML = 2.62;
  }
});
checkedThree.addEventListener("click", function () {
  if (checkedThree.checked && checkedSeven.checked) {
    Region.innerHTML = Math.round(
      checkedThree.value * checkedSeven.value * 5.5
    );
    Setup.innerHTML = Math.round(checkedThree.value * checkedSeven.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedSeven.value * 2.8
    );
    Storage.innerHTML = 2.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.62;
  }
});
checkedThree.addEventListener("click", function () {
  if (checkedThree.checked && checkedEight.checked) {
    Region.innerHTML = Math.round(
      checkedThree.value * checkedEight.value * 5.5
    );
    Setup.innerHTML = Math.round(checkedThree.value * checkedEight.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedEight.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});
checkedThree.addEventListener("click", function () {
  if (checkedThree.checked && checkedNine.checked) {
    Region.innerHTML = Math.round(checkedThree.value * checkedNine.value * 5.5);
    Setup.innerHTML = Math.round(checkedThree.value * checkedNine.value);
    TernResult.innerHTML = Math.round(
      checkedThree.value * checkedNine.value * 2.8
    );
    Storage.innerHTML = 1.91;
    Image.innerHTML = 1.21;
    Network.innerHTML = 0.42;
  }
});

