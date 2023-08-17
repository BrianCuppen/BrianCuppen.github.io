let listCategories = [];
//add to list
listCategories.push("OrdinaryDrink");
listCategories.push("Cocktail");
listCategories.push("Shake");
listCategories.push("Other%20/%20Unknown");
listCategories.push("Cocoa");
listCategories.push("Shot");
listCategories.push("Coffee%20/%20Tea");
listCategories.push("Homemade%20Liqueur");
listCategories.push("Punch%20/%20Party%20Drink");
listCategories.push("Beer");
listCategories.push("SoftDrink");

let unfilteredOrdinaryDrink = {};
let unfilteredCocktail = {};
let unfilteredShake = {};
let unfilteredOtherUnknown = {};
let unfilteredCocoa = {};
let unfilteredShot = {};
let unfilteredCoffeeTea = {};
let unfilteredHomemadeLiqueur = {};
let unfilteredPunchPartyDrink = {};
let unfilteredBeer = {};
let unfilteredSoftDrink = {};

let UnfilteredList = [];
//put all dictsnames in here
UnfilteredList.push("unfilteredOrdinaryDrink");
UnfilteredList.push("unfilteredCocktail");
UnfilteredList.push("unfilteredShake");
UnfilteredList.push("unfilteredOtherUnknown");
UnfilteredList.push("unfilteredCocoa");
UnfilteredList.push("unfilteredShot");
UnfilteredList.push("unfilteredCoffeeTea");
UnfilteredList.push("unfilteredHomemadeLiqueur");
UnfilteredList.push("unfilteredPunchPartyDrink");
UnfilteredList.push("unfilteredBeer");
UnfilteredList.push("unfilteredSoftDrink");

let NonAlcoholicOrdinaryDrink = [];
let AlcoholicOrdinaryDrink = [];
let NonAlcoholicCocktail = [];
let AlcoholicCocktail = [];
let NonAlcoholicShake = [];
let AlcoholicShake = [];
let NonAlcoholicOtherUnknown = [];
let AlcoholicOtherUnknown = [];
let NonAlcoholicCocoa = [];
let AlcoholicCocoa = [];
let NonAlcoholicShot = [];
let AlcoholicShot = [];
let NonAlcoholicCoffeeTea = [];
let AlcoholicCoffeeTea = [];
let NonAlcoholicHomemadeLiqueur = [];
let AlcoholicHomemadeLiqueur = [];
let NonAlcoholicPunchPartyDrink = [];
let AlcoholicPunchPartyDrink = [];
let NonAlcoholicBeer = [];
let AlcoholicBeer = [];
let NonAlcoholicSoftDrink = [];
let AlcoholicSoftDrink = [];

//list with chart data
let categoryData = [];
let countData = [];

//ingredientlist
let ingredientList = [];

//list with saved drinks
let savedCocktails = [];

const showCategoryData = function (drinks, countData, display) {
  console.log(display);
  //iterate through drinks and put in array
  let drinkArray = [];
  for (let i = 0; i < drinks.drinks.length; i++) {
    drinkArray.push(drinks.drinks[i].strCategory);
  }
  //sort the list
  drinkArray.sort();
  if (display == true) {
    //put strCategory in js-categories
    let categories = document.querySelector(".js-categories");
    for (let i = 0; i < drinkArray.length; i++) {
      //check categories for cocktail
      if (drinkArray[i] == "Cocktail") {
        //add active class
        categories.innerHTML += `<li class="c-main-nav__item is-selected">
            <a class="c-main-nav__link js-category" active href="#">${drinkArray[i]}</a></li>`;
      } else {
        //add reguarly
        categories.innerHTML += `<li class="c-main-nav__item">
            <a class="c-main-nav__link js-category" href="#">${drinkArray[i]}</a></li>`;
      }
    }
    //add last button at the end
    categories.innerHTML += `<li class="c-main-nav__item">
            <a class="c-main-nav__link js-category js-savedDrinks" href="#"><strong> Saved Drinks</strong></a></li>`;

    //listen to buttons
    listenToList(true);
    listenToSavedDrinks();
  }
  if (display == false) {
    console.log("test");
    //get the mobile selector
    let categories = document.querySelector(".js-mobile-selector");
    //clear it first
    categories.innerHTML = "";
    for (let i = 0; i < drinkArray.length; i++) {
      //check categories for cocktail
      //add active class
      categories.innerHTML += `<li class="o-list c-main-nav__item is-selected">
            <a class="c-main-nav__mobile-item js-category" active href="#">${drinkArray[i]}</a></li>`;
    }
    //add last button at the end
    categories.innerHTML += `<li class="c-main-nav__item">
            <a class="c-main-nav__mobile-item js-category js-savedDrinks" href="#"><strong>Saved Drinks</strong></a></li>`;

    //listen to buttons
    listenToList(false);
    listenToSavedDrinks();
  }
};
const showCocktails = function (listName, listName2, alcoholic) {
  let count = 0;
  let count2 = 0;
  let counter = 9;

  //checkup
  for (const cocktail of Object.values(listName)) {
    count += 1;
    //loop through ingredients
    for (const cocktail of Object.values(listName2)) {
      count2 += 1;
    }

    const dashboard = document.querySelector(".js-dashboard");
    let html2 = "";

    //check if is not empty
    if (alcoholic == true) {
      if (count != 0) {
        for (const cocktail of Object.values(listName)) {
          html2 += `<div class="c-dashboard__item u-x-span-4-bp3  js-cocktails">
            <div class="c-card">
                <div class="c-card__body">
                    <p class="js-DrinkName"><strong>${cocktail.strDrink}</strong></p>
                    <img src="${cocktail.strDrinkThumb}/preview" alt="image of cocktail">
                    <div class="c-card__body__wrapper">

                
                    <p class="js-glassType"><strong>Glass type: </strong>${cocktail.strGlass}</p>
                    <ul class="c-card__body__list"><strong>Ingredients</strong> 
                    `;

          //loop through ingredients
          for (let i = 1; i < 16; i++) {
            //check if ingredient is not empty
            if (
              cocktail[`strIngredient${i}`] != null &&
              cocktail[`strMeasure${i}`] != null
            ) {
              //add to innerhtml
              html2 += `<li>${cocktail[`strIngredient${i}`]} - ${
                cocktail[`strMeasure${i}`]
              }</li>`;
            }
          }

          //add the rest of the html
          html2 += `</ul>
<div class="js-Instructions">
    <p><strong>Instructions</strong></p>
    <p>${cocktail.strInstructions}</p>
    
    <div class="c-like">
<input class="o-hide-accessible c-like__input" type="checkbox" id="${cocktail.idDrink}">
<label class="c-label c-like__label js-like"id="${cocktail.idDrink}" for="${cocktail.idDrink}">
<svg class="c-like__symbol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 510 510" style="enable-background: new 0 0 510 510" xml:space="preserve">
<path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55 C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"></path>
</svg>
</label>
<p class="js-saved" id="${cocktail.idDrink}">press the heart to save this drink
</p> 
</div>

</div>
</div>
</div>
</div>
</div>
`;
          //add to innerhtml
          counter += 1;
          dashboard.innerHTML = html2;
        }
      } else {
        //its empty
        html2 += `<div class="c-dashboard__item u-x-span-4-bp3  js-cocktails">
        <div class="c-card">
            <div class="c-card__body">
                <p class="js-DrinkName"><strong>No drinks found !</strong></p>
                <p class="js-DrinkName">Try switching alcohol</p>
            </div>
        </div>
    </div>
    `;
        //add to innerhtml
        dashboard.innerHTML = html2;
      }
    }

    if (alcoholic == false) {
      if (count2 != 0) {
        for (const cocktail of Object.values(listName2)) {
          html2 += `<div class="c-dashboard__item u-x-span-4-bp3  js-cocktails">
                <div class="c-card">
                    <div class="c-card__body">
                        <p class="js-DrinkName"><strong>${cocktail.strDrink}</strong></p>
                        <img src="${cocktail.strDrinkThumb}/preview" alt="image of cocktail">
                        <div class="c-card__body__wrapper">
    
                    
                        <p class="js-glassType"><strong>Glass type: </strong>${cocktail.strGlass}</p>
                        <ul class="c-card__body__list"><strong>Ingredients</strong> 
                        `;

          //loop through ingredients
          for (let i = 1; i < 16; i++) {
            //check if ingredient is not empty
            if (cocktail[`strIngredient${i}`] != null) {
              //add to innerhtml
              html2 += `<li>${cocktail[`strIngredient${i}`]} - ${
                cocktail[`strMeasure${i}`]
              }</li>`;
            }
          }

          //add the rest of the html
          html2 += `</ul>
    <div class="js-Instructions">
        <p><strong>Instructions</strong></p>
        <p>${cocktail.strInstructions}</p>
        
        <div class="c-like">
<input class="o-hide-accessible c-like__input" type="checkbox" id="${cocktail.idDrink}">
<label class="c-label c-like__label js-like"id="${cocktail.idDrink}" for="${cocktail.idDrink}">
<svg class="c-like__symbol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 510 510" style="enable-background: new 0 0 510 510" xml:space="preserve">
<path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55 C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"></path>
</svg>
</label>
<p class="js-saved" id="${cocktail.idDrink}">press the heart to save this drink
</p> 
</div>

    </div>
    </div>
</div>
</div>
</div>
`;
          //add to innerhtml
          counter += 1;
          dashboard.innerHTML = html2;
        }
      } else {
        //its empty
        html2 += `<div class="c-dashboard__item u-x-span-4-bp3  js-cocktails">
        <div class="c-card">
            <div class="c-card__body">
                <p class="js-DrinkName"><strong>No drinks found !</strong></p>
                <p class="js-DrinkName">Try switching alcohol</p>
            </div>
        </div>
    </div>
    `;
        //add to innerhtml
        dashboard.innerHTML = html2;
      }
    }

    if (counter == 10) {
      //stop
      none;
    }
    listenToHeart();
  }
};
const showchart = function (listCategories, countData) {
  //listCategories = labels
  //data = amount of cocktials in category

  const data = {
    labels: listCategories,
    datasets: [
      {
        data: countData,
        backgroundColor: [
          "#FF5733",
          "#FFC300",
          "#33FF57",
          "#00C3FF",
          "#FF33C3",
          "#3300FF",
          "#33FFE1",
          "#FF33E1",
          "#FF5733",
          "#FFC300",
          "#33FF57",
        ],
        hoverBackgroundColor: [
          "#E64D00",
          "#CC9900",
          "#2EB82E",
          "#008FB3",
          "#E64D9E",
          "#1A1AFF",
          "#2EB8A7",
          "#E64D9E",
          "#E64D00",
          "#CC9900",
          "#2EB82E",
        ],
      },
    ],
  };

  const ctx = document.getElementById("myPieChart").getContext("2d");
  const myPieChart = new Chart(ctx, {
    type: "pie",
    data: data,
    options: {
      title: {
        display: true,
        text: "Amount of cocktails per category",
      },
      legend: {
        position: "left", // Position the legend on the left side
        align: "center", // Align the legend items to the center
        labels: {
          boxWidth: 20,
          fontStyle: "bold", // Set the font style of legend labels
          padding: 15, // Add padding around each legend item
        },
      },
    },
  });
};
const showRatio = function () {
  const ctx = document.getElementById("myRatioChart").getContext("2d");

  // Sample data for the grouped bar chart
  const data = {
    labels: [
      "Ordinary Drink",
      "Cocktail",
      "Shake",
      "Cocoa",
      "Shot",
      "Coffee / Tea",
      "Homemade Liqueur",
      "Punch / Party Drink",
      "Beer",
      "Soft Drink",
      "Other / Unknown",
    ],
    datasets: [
      {
        label: "Non-Alcoholic",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: [0, 0, 3, 9, 0, 2, 0, 2, 0, 1, 3], // Sample data for non-alcoholic cocktails
      },
      {
        label: "Alcoholic",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: [9, 9, 6, 0, 9, 7, 9, 7, 9, 8, 6], // Sample data for alcoholic cocktails
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: false, // Grouped bars, not stacked
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const myGroupedBarChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
};
const showCocktail = function (cocktail) {
  const dashboard = document.querySelector(".js-dashboard");
  //make html
  let html2 = "";
  html2 += `<div class="c-dashboard__item u-x-span-4-bp3  js-cocktails">
  <div class="c-card">
      <div class="c-card__body">
          <p class="js-DrinkName"><strong>${cocktail.strDrink}</strong></p>
          <img src="${cocktail.strDrinkThumb}/preview" alt="image of cocktail">
          <div class="c-card__body__wrapper">

      
          <p class="js-glassType"><strong>Glass type: </strong>${cocktail.strGlass}</p>
          <ul class="c-card__body__list"><strong>Ingredients</strong> 
          `;

  //loop through ingredients
  for (let i = 1; i < 16; i++) {
    //check if ingredient is not empty
    if (cocktail[`strIngredient${i}`] != null) {
      //add to innerhtml
      html2 += `<li>${cocktail[`strIngredient${i}`]} - ${
        cocktail[`strMeasure${i}`]
      }</li>`;
    }
  }

  //add the rest of the html
  html2 += `</ul>
<div class="js-Instructions">
<p><strong>Instructions</strong></p>
<p>${cocktail.strInstructions}</p>

<div class="c-like">
<input class="o-hide-accessible c-like__input" type="checkbox" id="${cocktail.idDrink}">
<label class="c-label c-like__label js-like"id="${cocktail.idDrink}" for="${cocktail.idDrink}">
<svg class="c-like__symbol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 510 510" style="enable-background: new 0 0 510 510" xml:space="preserve">
<path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55 C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"></path>
</svg>
</label>
<p class="js-saved" id="${cocktail.idDrink}">press the heart to save this drink
</p> 
</div>

</div>
</div>
</div>
</div>
</div>
`;
  //add to innerhtml
  dashboard.innerHTML = html2;
  listenToHeart();
};
const showCategoryDiv = function () {
  console.log("showCategoryDiv");
  //listen to button
  const button = document.querySelector(".js-input");
  button.addEventListener("click", function () {
    console.log("show mobile button");
    //get c-display and remove it so you make the div appear
    const menu = document.querySelector(".c-display");
    menu.classList.remove("c-display");
    //call getCategoryData
    getCategoryData(false);
  });
};
// GET METHODS

const getCategoryData = function (display) {
  //make url
  let Url = "https://thecocktaildb.com/api/json/v1/1/list.php?c=list";
  fetch(Url) // Call the fetch function passing the url of the API as a parameter
    .then((response) => response.json())
    .then((categories) => {
      //console.log(categories);

      //console.log(categories);
      //put every categrory in list
      for (let i = 0; i < categories.drinks.length; i++) {
        //console.log(categories.drinks[i].strCategory);
        //put in list
        categoryData.push(categories.drinks[i].strCategory);
      }

      //send to show function
      if (display == true) {
        showCategoryData(categories, countData, true);
      } else {
        showCategoryData(categories, countData, false);
      }

      //send to categoryData
      filterChartData(categoryData, countData);
    })
    .catch(function (err) {
      // This is where you run code if the server returns any errors
      console.log(err);
    });
};
const getListData = function (cocktail, alcoholic) {
  //make url
  let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cocktail}`;
  try {
    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then((response) => response.json())
      .then(async (drinks) => {
        //send to show function
        if (cocktail == "Ordinary_Drink") {
          unfilteredOrdinaryDrink = drinks.drinks;
          await ConvertData(
            unfilteredOrdinaryDrink,
            NonAlcoholicOrdinaryDrink,
            AlcoholicOrdinaryDrink,
            alcoholic
          );
        } else if (cocktail == "Cocktail") {
          unfilteredCocktail = drinks.drinks;
          await ConvertData(
            unfilteredCocktail,
            NonAlcoholicCocktail,
            AlcoholicCocktail,
            alcoholic
          );
        } else if (cocktail == "Shake") {
          unfilteredShake = drinks.drinks;
          await ConvertData(
            unfilteredShake,
            NonAlcoholicShake,
            AlcoholicShake,
            alcoholic
          );
        } else if (cocktail == "Other%20/%20Unknown") {
          unfilteredOtherUnknown = drinks.drinks;
          await ConvertData(
            unfilteredOtherUnknown,
            NonAlcoholicOtherUnknown,
            AlcoholicOtherUnknown,
            alcoholic
          );
        } else if (cocktail == "Cocoa") {
          unfilteredCocoa = drinks.drinks;
          await ConvertData(
            unfilteredCocoa,
            NonAlcoholicCocoa,
            AlcoholicCocoa,
            alcoholic
          );
        } else if (cocktail == "Shot") {
          unfilteredShot = drinks.drinks;
          await ConvertData(
            unfilteredShot,
            NonAlcoholicShot,
            AlcoholicShot,
            alcoholic
          );
        } else if (cocktail == "Coffee%20/%20Tea") {
          unfilteredCoffeeTea = drinks.drinks;
          await ConvertData(
            unfilteredCoffeeTea,
            NonAlcoholicCoffeeTea,
            AlcoholicCoffeeTea,
            alcoholic
          );
        } else if (cocktail == "Homemade%20Liqueur") {
          unfilteredHomemadeLiqueur = drinks.drinks;
          await ConvertData(
            unfilteredHomemadeLiqueur,
            NonAlcoholicHomemadeLiqueur,
            AlcoholicHomemadeLiqueur,
            alcoholic
          );
        } else if (cocktail == "Punch%20/%20Party%20Drink") {
          unfilteredPunchPartyDrink = drinks.drinks;
          await ConvertData(
            unfilteredPunchPartyDrink,
            NonAlcoholicPunchPartyDrink,
            AlcoholicPunchPartyDrink,
            alcoholic
          );
        } else if (cocktail == "Beer") {
          unfilteredBeer = drinks.drinks;
          await ConvertData(
            unfilteredBeer,
            NonAlcoholicBeer,
            AlcoholicBeer,
            alcoholic
          );
        } else if (cocktail == "Soft%20Drink") {
          unfilteredSoftDrink = drinks.drinks;
          await ConvertData(
            unfilteredSoftDrink,
            NonAlcoholicSoftDrink,
            AlcoholicSoftDrink,
            alcoholic
          );
        }
      })
      .catch(function (err) {
        // This is where you run code if the server returns any errors
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
const getCocktailInfo = function (id, listName, listName2) {
  //make url
  try {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then((response) => response.json())
      .then((cocktail) => {
        //check if alcoholic or non-alcoholic
        if (cocktail.drinks[0].strAlcoholic == "Alcoholic") {
          //check if cocktail.drinks[0].idDrink is already in listName
          if (listName.includes(cocktail.drinks[0].idDrink)) {
            //do nothing
          } else {
            //add to alcoholic listName list
            listName.push(cocktail.drinks[0]);
          }
        } else {
          if (listName2.includes(cocktail.drinks[0].idDrink)) {
            //do nothing
          } else {
            //add to non-alcoholic dict
            listName2.push(cocktail.drinks[0]);
          }
        }
      })
      .catch(function (err) {
        // This is where you run code if the server returns any errors
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
const getCocktailnumber = function (chartCocktail, countData) {
  //make url
  try {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${chartCocktail}`;
    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then((response) => response.json())
      .then((cocktail) => {
        //count the amount of cocktails and add to countData
        let count = 0;
        for (let i = 0; i < cocktail.drinks.length; i++) {
          count += 1;
        }
        countData.push(count);
      })
      .catch(function (err) {
        // This is where you run code if the server returns any errors
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
const getIngredientList = function (url) {
  //make url
  try {
    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then((response) => response.json())
      .then((cocktails) => {
        cocktails.drinks.forEach((element) => {
          //add each strIngredient1 to ingredientList
          ingredientList.push(element.strIngredient1);
        });
      })
      .catch(function (err) {
        // This is where you run code if the server returns any errors
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
const getSavedCocktail = function (id) {
  //make url
  try {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then((response) => response.json())
      .then((cocktail) => {
        //add to savedCocktails
        savedCocktails.push(cocktail.drinks[0]);
      })
      .catch(function (err) {
        // This is where you run code if the server returns any errors
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
//LISTEN METHODS

const listenToSwitch = function () {
  let count = 1;
  //get all buttons
  const switchs = document.querySelector(".js-switch");
  const alcoholType = document.querySelector(".js-switch__text");
  //check what button is clicked
  switchs.addEventListener("click", function () {
    count = count + 1;

    //check which js-category is selected
    const selected = document.querySelector(".is-selected");

    //check the variables
    //get the innerhtml of the js-category that is in selected
    const category = selected.querySelector(".js-category").innerHTML;

    if (count % 2 == 0) {
      //change text of js-switch__text
      alcoholType.innerHTML = "Alcoholic";

      //dubbelcheck clickitem
      if (category == "Cocktail") {
        let selector = "Cocktail";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Ordinary Drink") {
        let selector = "Ordinary_Drink";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Shake") {
        let selector = "Shake";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Other / Unknown") {
        let selector = "Other%20/%20Unknown";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Cocoa") {
        let selector = "Cocoa";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Shot") {
        let selector = "Shot";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Coffee / Tea") {
        let selector = "Coffee%20/%20Tea";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Homemade Liqueur") {
        let selector = "Homemade%20Liqueur";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Punch / Party Drink") {
        let selector = "Punch%20/%20Party%20Drink";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Beer") {
        let selector = "Beer";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Soft Drink") {
        let selector = "Soft%20Drink";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
          getListData(selector, false);
        }
      }
    } else {
      //change text of js-switch__text
      alcoholType.innerHTML = "Non-Alcoholic";

      //dubbelcheck clickitem
      if (category == "Cocktail") {
        let selector = "Cocktail";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Ordinary Drink") {
        let selector = "Ordinary_Drink";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Shake") {
        let selector = "Shake";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Other / Unknown") {
        let selector = "Other%20/%20Unknown";
      } else if (category == "Cocoa") {
        let selector = "Cocoa";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Shot") {
        let selector = "Shot";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Coffee / Tea") {
        let selector = "Coffee%20/%20Tea";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Homemade Liqueur") {
        let selector = "Homemade%20Liqueur";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Punch / Party Drink") {
        let selector = "Punch%20/%20Party%20Drink";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Beer") {
        let selector = "Beer";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (category == "Soft Drink") {
        let selector = "Soft%20Drink";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      }
    }
  });
};
const listenToList = function (state) {
  //get all buttons
  if (state == true) {
  
  const list = document.querySelectorAll(".js-category");
  //console.log(list);
  //check what button is clicked
  for (const item of list) {
    item.addEventListener("click", async function () {
      //get the position of switch
      const alcoholType = document.querySelector(".js-switch__text").innerHTML;
      console.log(`clicked ${item.innerHTML} ${alcoholType}`);

      //get js-title
      const title = document.querySelector(".js-title");

      //dubbelcheck clickitem
      if (item.innerHTML == "Cocktail") {
        title.innerHTML = "Recommended " + item.innerHTML;
        let selector = "Cocktail";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Ordinary Drink") {
        let selector = "Ordinary_Drink";
        title.innerHTML = "Recommended " + item.innerHTML;
        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (item.innerHTML == "Shake") {
        let selector = "Shake";
        title.innerHTML = "Recommended " + item.innerHTML;
        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Other / Unknown") {
        let selector = "Other%20/%20Unknown";
        title.innerHTML = "Recommended " + item.innerHTML;
        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Cocoa") {
        let selector = "Cocoa";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Shot") {
        let selector = "Shot";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Coffee / Tea") {
        let selector = "Coffee%20/%20Tea";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Homemade Liqueur") {
        let selector = "Homemade%20Liqueur";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Punch / Party Drink") {
        let selector = "Punch%20/%20Party%20Drink";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Beer") {
        let selector = "Beer";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Soft Drink") {
        let selector = "Soft%20Drink";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await  getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      }
      //check if alcoholic or non-alcoholic

      //add active class
      item.classList.add("is-selected");
      //remove active class from other buttons
      for (const item of list) {
        item.classList.remove("is-selected");
      }
    });
  }
  } else {
    const list = document.querySelectorAll(".js-category");
  //console.log(list);
  //check what button is clicked
  for (const item of list) {
    item.addEventListener("click", async function () {
      //get the position of switch
      const alcoholType = document.querySelector(".js-switch__text").innerHTML;
      console.log(`clicked ${item.innerHTML} ${alcoholType}`);

      //get js-title
      const title = document.querySelector(".js-title");

      //dubbelcheck clickitem
      if (item.innerHTML == "Cocktail") {
        title.innerHTML = "Recommended " + item.innerHTML;
        let selector = "Cocktail";
        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Ordinary Drink") {
        let selector = "Ordinary_Drink";
        title.innerHTML = "Recommended " + item.innerHTML;
        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          getListData(selector, false);
        }
      } else if (item.innerHTML == "Shake") {
        let selector = "Shake";
        title.innerHTML = "Recommended " + item.innerHTML;
        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Other / Unknown") {
        let selector = "Other%20/%20Unknown";
        title.innerHTML = "Recommended " + item.innerHTML;
        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Cocoa") {
        let selector = "Cocoa";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Shot") {
        let selector = "Shot";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Coffee / Tea") {
        let selector = "Coffee%20/%20Tea";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Homemade Liqueur") {
        let selector = "Homemade%20Liqueur";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Punch / Party Drink") {
        let selector = "Punch%20/%20Party%20Drink";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Beer") {
        let selector = "Beer";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      } else if (item.innerHTML == "Soft Drink") {
        let selector = "Soft%20Drink";
        title.innerHTML = "Recommended " + item.innerHTML;

        if (alcoholType == "Alcoholic") {
          //get filtered data
          await  getListData(selector, true);
        } else {
          //get filtered data
          await getListData(selector, false);
        }
      }
        //remove the div by adding c-display
        const ul = this.closest("ul"); // Find the closest parent ul element
        ul.classList.add("c-display");
  }
)};
  }
};
    
const listenToSavedDrinks = function () {
    //remoe the div by adding c-display
    // const menu = document.querySelector(".c-display");
    // menu.classList.add("c-display");

  //get js-savedDrinks
  const savedDrinks = document.querySelector(".js-savedDrinks");
  const dashboard = document.querySelector(".js-dashboard");
  //check if button is clicked
  savedDrinks.addEventListener("click", function () {
    console.log(`clicked savedDrinks`);
    //change title
    const title = document.querySelector(".js-title");
    title.innerHTML = "Saved Drinks";

    let htmlData = "";
    //check if there are saved cocktails
    if (savedCocktails.length > 0) {
      for (const cocktail of savedCocktails) {
        htmlData += `<div class="c-dashboard__item u-x-span-4-bp3  js-cocktails">
        <div class="c-card">
            <div class="c-card__body">
                <p class="js-DrinkName"><strong>${cocktail.strDrink}</strong> (${cocktail.strAlcoholic})</p>
                <img src="${cocktail.strDrinkThumb}/preview" alt="image of cocktail">
                <div class="c-card__body__wrapper">

            
                <p class="js-glassType"><strong>Glass type: </strong>${cocktail.strGlass}</p>
                <ul class="c-card__body__list js-Ingredients"><strong>Ingredients</strong>
                    <li>Grenadine 1 part </li>
                    <li>Orange juice  '4 parts </li>
                    <li>Pineapple juice '4 parts </li>  
                </ul>
                <div class="js-Instructions">
                    <p><strong>Instructions</strong></p>
                    <p>${cocktail.strInstructions}</p>
                    <div class="c-like">
        <input class="o-hide-accessible c-like__input" type="checkbox" id="${cocktail.idDrink}">
        <label class="c-label c-like__label js-like" id="${cocktail.idDrink}" for="${cocktail.idDrink}">
          <svg class="c-delete__symbol
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="green"
        >
          <path
            fill-rule="evenodd"
            d="M14.293 3.293a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L4 11.586l9.293-9.293a1 1 0 0 1 1.414 0z"
          />
        </svg>


        </label>
        <p class="js-delete" id="${cocktail.idDrink}">press the heart to delete this drink
        </p> 
      </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    `;
        //change title
        dashboard.innerHTML = htmlData;
      }
    } else {
      htmlData += `<div class="c-dashboard__item u-x-span-4-bp3  js-cocktails">
        <div class="c-card">
            <div class="c-card__body">
                <p class="js-DrinkName"><strong>No drinks found !</strong></p>
                <p class="js-DrinkName">Try to add some drinks to your list</p>
            </div>
        </div>
    </div>
    `;
      dashboard.innerHTML = htmlData;
    }
    listenToDelete();
  });
};
const listenToData = function () {
  //get the js-Data
  const data = document.querySelector(".js-Data");
  const dashboard = document.querySelector(".js-dashboard");
  //check if button is clicked
  data.addEventListener("click", function () {
    console.log(`clicked Data`);
    //change title
    const title = document.querySelector(".js-title");
    title.innerHTML = "Data graphics";
    let htmlData = "";
    htmlData += `<div class="c-dashboard__item">
        <div class="c-card">
        <div class="c-card__header">
        Amount of cocktails per category
    </div>
            <div class="c-card__body">
            <canvas class='c-card__canvas' id="myPieChart" width='400px' height='400' style="display=flex; align-items=center;" >Amount of cocktails per category</canvas>
            </div>
        </div>
    </div>`;
    htmlData += `<div class="c-dashboard__item">
        <div class="c-card">
        <div class="c-card__header">
        Ratio between non-alcoholic and alcoholic cocktails per category
    </div>
            <div class="c-card__body">
            <canvas class='c-card__canvas' id="myRatioChart" width='800px' height='400' style="display=flex; align-items=center;" >Amount of cocktails per category</canvas>
            </div>
        </div>
    </div>`;
    //delete dashboard
    dashboard.innerHTML = htmlData;

    showchart(categoryData, countData);
    showRatio();
  });
};
const listenToIngredients = function () {
  const saved = document.querySelector(".js-IngredientList");
  const dashboard = document.querySelector(".js-dashboard");
  const title = document.querySelector(".js-title");
  let html = "";
  let count = 0;
  //get ingredients
  getIngredientList(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  );

  //check what button is clicked
  saved.addEventListener("click", async function () {
    // Change title
    title.innerHTML = "Ingredients used in drinks";

    // Iterate through ingredientList
    for (const element of ingredientList) {
      if (count >= 10) {
        break; // Exit the loop when the limit is reached
      }

      // Call filterIngredientData and await its result
      const ingredientData = await filterIngredientData(element);

      // Alter HTML
      if (ingredientData) {
        html += `<div class="c-dashboard__item u-x-span-4-bp3  js-cocktails">
        <div class="c-card" id="${ingredientData.idIngredient}">    
            <div class="c-card__body">
                <p class="js-CocktailName"><strong>${ingredientData.strIngredient} (${ingredientData.strType})</strong></p>
                <div class="c-card__body__wrapper">

                <div class="js-Description">
                    <p><strong>Description</strong></p>
                    <p>${ingredientData.strDescription}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    `;
      }

      count++; // Increment count
    }

    // Update dashboard's innerHTML
    dashboard.innerHTML = html;
  });
};
const listenToTitle = function () {
  //get title
  const title = document.querySelector(".js-Title");
  const secondTitle = document.querySelector(".js-title");
  //check if button is clicked
  title.addEventListener("click", function () {
    secondTitle.innerHTML = "Recommended Cocktails";
    getListData("Cocktail", true);
  });
};
const listenToHeart = function () {
  //get all hearts
  const heart = document.querySelectorAll(".js-like");
  const saved = document.querySelectorAll(".js-saved");
  //check if button is clicked
  for (const item of heart) {
    item.addEventListener("click", function () {
      //get id
      let id = item.getAttribute("id");
      console.log(id);
      //send the cocktail
      getSavedCocktail(id);
      //change html
      for (const item of saved) {
        //check what item has the save id as the clicked heart
        if (item.getAttribute("id") === id) {
          //change the html
          item.innerHTML = "drink saved !";
        }
      }
    });
  }
};
const listenToDelete = function () {
  //get all hearts
  console.log("listen to delete");
  const heart = document.querySelectorAll(".js-like");
  const deleteButton = document.querySelectorAll(".js-delete");
  //check if button is clicked
  for (const item of heart) {
    item.addEventListener("click", function () {
      console.log(`clicked delete`);
      //get id
      let id = item.getAttribute("id");
      //lookup the cocktail in savedCocktails
      let cocktail = savedCocktails.find((x) => x.idDrink === id);
      //delete the cocktail
      deleteCocktail(cocktail);
      //change html
      for (const item of deleteButton) {
        //check what item has the save id as the clicked heart
        if (item.getAttribute("id") === id) {
          //change the html
          item.innerHTML = "drink deleted !";
        }
      }
    });
  }
};
const listenToSearch = function () {
  //get search button
  const search = document.querySelector(".js-search");
  //check if button is clicked
  search.addEventListener("click", function () {
    console.log(``);
    //get input
    const input = document.querySelector(".js-searchInput").value;
    //get title
    const title = document.querySelector(".js-title");
    //change title
    title.innerHTML = `Search results for ${input}`;
    //get data
    searchCocktail(input);
  });
};
// FILTER METHODS
const ConvertData = async function (
  unfilteredDict,
  listName,
  listName2,
  alcoholic
) {
  const cocktailPromises = [];
  count = 0;
  // Iterate through unfilteredOrdinaryDrink
  for (let i = 0; i < 10; i++) {
    count ++;
    await getCocktailInfo(
      unfilteredDict[i].idDrink,
      listName,
      listName2
      );
      cocktailPromises.push(count);
  }

  // Wait for all cocktail promises to resolve
  await Promise.all(cocktailPromises);

  // Now that all cocktails are processed, call showCocktails
  showCocktails(listName, listName2, alcoholic);
};
const filterChartData = function (categoryData, countData) {
  //iterate through categoryData
  for (let i = 0; i < categoryData.length; i++) {
    //call the getCocktailInfo
    getCocktailnumber(categoryData[i], countData);
  }
  //   showchart(categoryData, countData);
};
const filterIngredientData = async function (ingredient) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.ingredients[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
const searchCocktail = async function (input) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
    const response = await fetch(url);
    const data = await response.json();
    showCocktail(data.drinks[0]);
  } catch (error) {
    console.log(error);
    return null;
  }
};
const deleteCocktail = function (cocktail) {
  //loop through savedCocktails and delete the cocktail
  for (let i = 0; i < savedCocktails.length; i++) {
    if (savedCocktails[i].idDrink === cocktail.idDrink) {
      savedCocktails.splice(i, 1);
    }
  }
};
// domcontentloaded event
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
  //test url
  getCategoryData(true);
  listenToSwitch();
  listenToData();
  listenToIngredients();
  listenToTitle();
  listenToHeart();
  listenToSearch();
  if (document.querySelector(".js-mobile-selector")) {
    showCategoryDiv();
  }
});
