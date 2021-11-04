// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(fromFile, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();

}


// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsFilename, equipmentFilename, directionsFilename){
  
  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;
  this.ingredients = ingredientsFilename;
  this.equipment = equipmentFilename;
  this.directions = directionsFilename;
  
  this.displayRecipe = function(){
    
    document.querySelector("#foodbkgd h1").innerHTML = this.recipe;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#foodbkgd").style.backgroundImage = "url(" + this.img + ")";
    
    
    
  loadFileInto(this.ingredients, "#ingredients ul");
  loadFileInto(this.equipment, "#equipment ul");
  loadFileInto(this.directions, "#directions ol");
    
  }
  
}


CauliflowerMacNCheese = new Recipe("Cauliflower Mac-N-Cheese", "Saskia", "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80", "ingredients.html", "equipment.html", "directions.html");

ChocolateChipCookies = new Recipe("Chocolate Chip Cookies", "Aida", "https://images.unsplash.com/photo-1584847801423-852691e41bc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80", "ingredientsA.html", "equipmentA.html", "directionsA.html");
AnotherRecipe = new Recipe();

LemonBars = new Recipe("Lemon Bars", "Cody", "https://images.unsplash.com/photo-1587496679742-bad502958fbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "ingredientsC.html", "equipmentC.html", "directionsC.html");
AnotherRecipe = new Recipe();




window.onload = function() {
  
  document.querySelector("#foodbkgd").classList.add("title");

  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }
    
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }
    
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe");
  }
 
    document.querySelector("#foodbkgd").onclick = function() {
    this.classList.toggle("title")
  }
    
  document.querySelector(".copyright").innerHTML += "<p><strong>This recipe was taken for the purpose of a school project for DTC 477 at Washington State University.<strong></p>";
  
  
  document.querySelector("#r1").onclick = function() {
    CauliflowerMacNCheese.displayRecipe();
  }
    
  document.querySelector("#r2").onclick = function() {
    ChocolateChipCookies.displayRecipe();
  }

   document.querySelector("#r3").onclick = function() {
    LemonBars.displayRecipe();
  }

  
  
} // end of window.onload