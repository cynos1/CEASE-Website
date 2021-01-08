// JavaScript Document
window.load=doShowAll();
window.load=doShowAll1();
window.load=doShowAll2();
window.load=doShowAll3();
/*
=====> Checking browser support.
 //This step might not be required because most modern browsers do support HTML5.
 */
 //Function below might be redundant.
function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}
// Dynamically populate the table with symptoms.
//Step below can be done via PHP and AJAX, too.
function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Symptom</th><br><br><th>Date</th></tr>\n";
        var i = 0;
        //For a more advanced feature, you can set a cap on max items in the box.
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
        //If no item exists in the cart.
        if (list == "<tr><th>Symptom</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list').innerHTML = list;
		
    } else {
        alert('Cannot save withdrawal symptom as your browser does not support HTML 5');
    }
}
localStorage.myProperty="myValue";
delete localStorage.myProperty;
function SaveItem() {

    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();

}
//Change an existing key-value in HTML5 storage.
function ModifyItem() {
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;
    //check if name1 is already exists

//Check if key exists.
            if (localStorage.getItem(name1) !=null)
            {
              //update
              localStorage.setItem(name1,data1);
              document.forms.ShoppingList.data.value = localStorage.getItem(name1);
            }

    doShowAll();
}
function RemoveItem()
{
var name=document.forms.ShoppingList.name.value;
document.forms.ShoppingList.data.value=localStorage.removeItem(name);
doShowAll();
}
function ClearAll() {
    localStorage.clear();
    doShowAll();
}





function doShowAll1() {
    if (CheckBrowser()) {
        var key1 = "";
        var list1 = "<tr><th>Symptom</th><br><br><th>Date</th></tr>\n";
        var i = 0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key1 = localStorage.key(i);
            list1 += "<tr><td>" + key1 + "</td>\n<td>"
                    + localStorage.getItem(key1) + "</td></tr>\n";
        }
        //If no item exists in the cart.
        if (list1 == "<tr><th>Symptom</th><th>Value</th></tr>\n") {
            list1 += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list1').innerHTML = list1;
		
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}
function SaveItem1() {

    var name = document.forms.ShoppingList1.name.value;
    var data = document.forms.ShoppingList1.data.value;
    localStorage.setItem(name, data);
    doShowAll1();

}
//Change an existing key-value in HTML5 storage.
function ModifyItem1() {
    var name1 = document.forms.ShoppingList1.name.value;
    var data1 = document.forms.ShoppingList1.data.value;
    //check if name1 is already exists

//Check if key exists.
            if (localStorage.getItem(name1) !=null)
            {
              //update
              localStorage.setItem(name1,data1);
              document.forms.ShoppingList1.data.value = localStorage.getItem(name1);
            }

    doShowAll1();
}
function RemoveItem1()
{
var name=document.forms.ShoppingList1.name.value;
document.forms.ShoppingList1.data.value=localStorage.removeItem(name);
doShowAll1();
}
function ClearAll1() {
    localStorage.clear();
    doShowAll1();
}


$(function() {
   var availableTags = [
     "Anxiety",
     "Coughing",
     "Craving",
     "Depression",
     "Difficulty concentrating",
     "Dizziness",
     "Flu-like symptoms",
     "Frustration and irritability",
     "Headaches",
     "Increased appetite and weight gain",
     "Sleep disturbance"
   ];
   $("#tags").autocomplete({
     source: availableTags
   });
 });

$(function() {
   var availableTags = [
     "Anxiety",
     "Coughing",
     "Craving",
     "Depression",
     "Difficulty concentrating",
     "Dizziness",
     "Flu-like symptoms",
     "Frustration and irritability",
     "Headaches",
     "Increased appetite and weight gain",
     "Sleep disturbance"
   ];
   $("#tags1").autocomplete({
     source: availableTags
   });
 });



function doShowAll2() {
    if (CheckBrowser()) {
        var key2 = "";
        var list2 = "<tr><th>Symptom</th><br><br><th>Date</th></tr>\n";
        var i = 0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key2 = localStorage.key(i);
            list2 += "<tr><td>" + key2 + "</td>\n<td>"
                    + localStorage.getItem(key2) + "</td></tr>\n";
        }
        //If no item exists in the cart.
        if (list2 == "<tr><th>Symptom</th><th>Value</th></tr>\n") {
            list2 += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list2').innerHTML = list2;
		
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}
function SaveItem2() {

    var name = document.forms.ShoppingList2.name.value;
    var data = document.forms.ShoppingList2.data.value;
    localStorage.setItem(name, data);
    doShowAll2();

}
//Change an existing key-value in HTML5 storage.
function ModifyItem2() {
    var name1 = document.forms.ShoppingList2.name.value;
    var data1 = document.forms.ShoppingList2.data.value;
    //check if name1 is already exists

//Check if key exists.
            if (localStorage.getItem(name1) !=null)
            {
              //update
              localStorage.setItem(name1,data1);
              document.forms.ShoppingList2.data.value = localStorage.getItem(name1);
            }

    doShowAll2();
}
function RemoveItem2()
{
var name=document.forms.ShoppingList2.name.value;
document.forms.ShoppingList2.data.value=localStorage.removeItem(name);
doShowAll2();
}
function ClearAll2() {
    localStorage.clear();
    doShowAll2();
}


$(function() {
   var availableTags = [
     "Anxiety",
     "Coughing",
     "Craving",
     "Depression",
     "Difficulty concentrating",
     "Dizziness",
     "Flu-like symptoms",
     "Frustration and irritability",
     "Headaches",
     "Increased appetite and weight gain",
     "Sleep disturbance"
   ];
   $("#tags2").autocomplete({
     source: availableTags
   });
 });



function doShowAll3() {
    if (CheckBrowser()) {
        var key3 = "";
        var list3 = "<tr><th>Symptom</th><br><br><th>Date</th></tr>\n";
        var i = 0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key3 = localStorage.key(i);
            list3 += "<tr><td>" + key3 + "</td>\n<td>"
                    + localStorage.getItem(key3) + "</td></tr>\n";
        }
        //If no item exists in the cart.
        if (list3 == "<tr><th>Symptom</th><th>Value</th></tr>\n") {
            list3 += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list3').innerHTML = list3;
		
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}
function SaveItem3() {

    var name = document.forms.ShoppingList3.name.value;
    var data = document.forms.ShoppingList3.data.value;
    localStorage.setItem(name, data);
    doShowAll3();

}
//Change an existing key-value in HTML5 storage.
function ModifyItem3() {
    var name1 = document.forms.ShoppingList3.name.value;
    var data1 = document.forms.ShoppingList3.data.value;
    //check if name1 is already exists

//Check if key exists.
            if (localStorage.getItem(name1) !=null)
            {
              //update
              localStorage.setItem(name1,data1);
              document.forms.ShoppingList3.data.value = localStorage.getItem(name1);
            }

    doShowAll3();
}
function RemoveItem3()
{
var name=document.forms.ShoppingList3.name.value;
document.forms.ShoppingList3.data.value=localStorage.removeItem(name);
doShowAll3();
}
function ClearAll3() {
    localStorage.clear();
    doShowAll3();
}


$(function() {
   var availableTags = [
     "Anxiety",
     "Coughing",
     "Craving",
     "Depression",
     "Difficulty concentrating",
     "Dizziness",
     "Flu-like symptoms",
     "Frustration and irritability",
     "Headaches",
     "Increased appetite and weight gain",
     "Sleep disturbance"
   ];
   $("#tags3").autocomplete({
     source: availableTags
   });
 });
