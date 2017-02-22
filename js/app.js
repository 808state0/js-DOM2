/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/
var coffeeRating= document.getElementById("rating1");
coffeeRating.innerHTML = "Rating: 5 Stars";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/
var firstPrice =  document.getElementById("price2");
firstPrice.innerHTML = "Price: $$$";

var firstAdress = document.getElementById("addy2");
firstAdress.innerHTML = "Address: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/
var hoursMissing1 = document.createElement("div");
hoursMissing1.createId = "hours3";
hoursMissing1.innerHTML = "6pm - 12am Sun - Sat";
text3.appendChild(hoursMissing1);

// var hoursMissing = document.createElement("div");
// hoursMissing.innerHTML = " 6pm - 12am Sun - Sat";
// hours3.appendChild(hoursMissing);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/
var secondPrice = document.createElement("div");
secondPrice.createId = "text4";
secondPrice.innerHTML = "Price: $$$";
text4.appendChild(secondPrice);


/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/
var addressMissing = document.createElement("div");
addressMissing.createId = "addy4";
addressMissing.innerHTML = " 1620 N. School St, Honolulu, HI 96817";
text4.appendChild(addressMissing);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/
var hoursMissing2 = document.createElement("div");
hoursMissing2.createId = "hours4";
hoursMissing2.innerHTML = " 9am - 10pm Sun -Sat";
text4.appendChild(hoursMissing2);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/
var inputText = document.createElement("div");
inputText.createId = "update4";
inputText.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(inputText);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/
var name5 = document.createElement("div");
name5.createId = "name5";
name5.innerHTML = " 5. The Death Star Cafe";
text5.appendChild(name5);

var rating5 = document.createElement("div");
rating5.createId = "rating5";
rating5.innerHTML = "Rating: 2 Stars";
text5.appendChild(rating5);

var price5 = document.createElement("div");
price5.createId = "price5";
price5.innerHTML = "Price: $$";
text5.appendChild(price5);

var addy5 = document.createElement("div");
addy5.createId = "addy5";
addy5.innerHTML = "Address: A galaxy far, far away.";
text5.appendChild(addy5);

var hours5 = document.createElement("div");
hours5.createId	= "hours5";
hours5.innerHTML = "Hours: We Never Close.";

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

