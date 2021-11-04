<?


$name = $_GET["recipeName"]; 
$list = $_GET["recipeList"]; 

if ($name == "Seven Layer Bars") {
	
	if ($list == "ingredients") {
		include "ingredients.html";
		
	} elseif ($list == "equipment") {
		include "equipment.html";
		
	} elseif ($list == "directions") {
		include "directions.html";
		
	} else {
    
		echo "1";
		
	}


} elseif ($name == "Chocolate Chip Cookies") {
	
	if ($list == "ingredients") {
		include "ingredientsA.html";
		
	} elseif ($list == "equipment") {
		include "equipmentA.html";
		
	} elseif ($list == "directions") {
		include "directionsA.html";
		
	} else {
    
		echo "1";
		
	}
  
} elseif ($name == "Lemon Bars") {

	if ($list == "ingredients") {
		include "ingredientsC.html";
		
	} elseif ($list == "equipment") {
		include "equipmentC.html";
		
	} elseif ($list == "directions") {
		include "directionsC.html";
		
	} else {
    
		echo "1";
		
	}
} else {
	
	echo "0";
	
}