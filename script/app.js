

const showCategoryData = function (drinks) {

    //iterate through drinks
    for (let i = 0; i < drinks.drinks.length; i++) {
        //console.log(drinks.drinks[i].strCategory);
    }

    //iterate through drinks and put in array
    let drinkArray = [];
    for (let i = 0; i < drinks.drinks.length; i++) {
        drinkArray.push(drinks.drinks[i].strCategory);
    }
    //sort the list
    drinkArray.sort();
    //console.log(drinkArray);

    //put strCategory in js-categories
    let categories = document.querySelector(".js-categories");
    for (let i = 0; i < drinkArray.length; i++) {

        //check categories for cocktail
        if (drinkArray[i] == "Cocktail") {
            //add active class
            categories.innerHTML += `<li class="c-main-nav__item is-selected">
            <a class="c-main-nav__link" active href="#">${drinkArray[i]}</a></li>`;
        } else {
            //add reguarly
            categories.innerHTML += `<li class="c-main-nav__item">
            <a class="c-main-nav__link" href="#">${drinkArray[i]}</a></li>`;
        }
    }


}

const showDrinkData = function (drink) {

    let cocktailApp = document.querySelector(".js-Cocktails");
    //console.log(drink);

    //check for null items
    for (let i = 0; i < drink.drinks.length; i++) {
        if (drink.drinks[i].dateModified == null) {
            drink.drinks[i].dateModified = "2015-08-18 14:42:59";
        }
    }
        
        //iterate through drinks
    for (let i = 0; i < drink.drinks.length; i++) {
         cocktailApp.innerHTML += `<div class="o-container">
         <div class="c-dashboard">
             <div class="c-dashboard__item u-x-span-4-bp3 u-y-span-2-bp3">
                 <div class="c-card">
                     <div class="c-card__body">
                         <svg>
                             <image  href="${drink.drinks[i].strDrinkThumb}/preview"
                                     />
                         </svg>
                         </div>
                         <div class="c-card__body">
                         <p class="c-card__body--header">Date modified :</p>
                         <p>${drink.drinks[i].dateModified}</p>
                     </div>
                 </div>
             </div>
             <div class="c-dashboard__item u-x-span-8-bp3">
                 <div class="c-card">
                     <div class="c-card__body">
                         <p class="c-card__body--header">${drink.drinks[i].strDrink}</p>
                         <p>${drink.drinks[i].strCategory}</p>
                     </div>
                 </div>
             </div>
             <div class="c-dashboard__item u-x-span-4-bp3">
                 <div class="c-card">
                     <div class="c-card__body">
                         <p class="c-card__body--header"> Drink type </p>
                         <p>${drink.drinks[i].strAlcoholic}</p>
                     </div>
                 </div>
             </div>
             <div class="c-dashboard__item u-x-span-4-bp3">
                 <div class="c-card">
                     <div class="c-card__body">
                         <p class="c-card__body--header"> Glass type </p>
                         <p class="js-CocktailGlass">${drink.drinks[i].strGlass}</p>
                     </div>
                 </div>
             </div>
             <div class="c-dashboard__item u-x-span-8-bp3">
                 <div class="c-card">
                     <div class="c-card__body">
                         <p class="c-card__body--header">Ingredients</p>
                         <p class="js-CocktailIngredients">${drink.drinks[i].strIngredient1},${drink.drinks[i].strIngredient2},${drink.drinks[i].strIngredient3}</p>
                         <p class="c-card__body--header">Instructions</p>
                         <p class="js-CocktailInstructions">${drink.drinks[i].strInstructions}</p>

                     </div>
                 </div>
             </div>
             <!-- <a class="c-link"> Add to list </p> -->
             <div class="c-dashboard__item u-x-span-4-bp3 u-transparent">
                 <div class="c-card__body">
                     <button id="button" class="c-card__button o-button-reset js-button">
                         Add to list
                     </button>
                     </div>
             </div>
         </div>
     </div>`;

}
//listenToButton
listenToButton();
}
const getListData = function (drinks) {

    //iterate through drinks
    for (let i = 0; i < drinks.drinks.length; i++) {
        //console.log(drinks.drinks[i].strDrink + " " + drinks.drinks[i].idDrink);
    }

    //iterate through drinks and put in array
    //make a list of all the drinks
    let drinkArray = [];
    for (let i = 0; i < drinks.drinks.length; i++) {
        drinkArray.push(drinks.drinks[i].idDrink);
    }
    //sort the list
    drinkArray.sort();
    //console.log(drinkArray);

        //iterate through drink info and put in array
    for (let i = 0; i < drinkArray.length; i++) {
        //console.log(drinkArray[i]);
        //make url
        let Url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkArray[i];
        fetch(Url) // Call the fetch function passing the url of the API as a parameter
            .then((response) => response.json())
            .then((drink) => {
                //console.log(drink);
                //send to show function
                showDrinkData(drink);
            })
            .catch(function (err) {
                // This is where you run code if the server returns any errors
                console.log(err);
            });

        }
        //send list to show function
        //showDrinkData(drankList);
}
const getUrlData = function () {
    //make url
    let Url2 = "http://thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    fetch(Url2) // Call the fetch function passing the url of the API as a parameter
        .then((response) => response.json())
        .then((drinks) => {
            //console.log(drinks);

            //send to show function
            getListData(drinks);
        })
        .catch(function (err) {
            // This is where you run code if the server returns any errors
            console.log(err)
        });
}

const getCategoryData = function () {
    //make url
    let Url = "http://thecocktaildb.com/api/json/v1/1/list.php?c=list"
    fetch(Url) // Call the fetch function passing the url of the API as a parameter
        .then((response) => response.json())
        .then((categories) => {
            //console.log(categories);

            //send to show function
            showCategoryData(categories);
        })
        .catch(function (err) {
            // This is where you run code if the server returns any errors
            console.log(err)
        });

}

const listenToButton = function () {
    console.log('listen to buttons');
    //get all buttons
    const buttons = document.querySelectorAll('.js-button');
    //console.log(buttons);
    //check what button is clicked
    for (const button of buttons) {
        button.addEventListener('click', function () {
            console.log('clicked');
            gsap.fromTo('#button', { x: -50 }, { duration: 3, x: 50 })

        })
    }

}

// domcontentloaded event
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded");
    //test url
    getUrlData();S
    getCategoryData();
});