(function() {

var GetUserInput = document.getElementById('userInput')
var AddButton = document.getElementById('submitButton')
// var listWrapper = document.getElementById('listWrapper');

$('#submitButton').click(function(){
  console.log(GetUserInput.value);
  additem();
});

function addItem () {
  //this is where my add item stuff goes
  listWrapper.insertAdjacentHTML('afterend', "<li class='underline'><input type='checkbox'><label for="">Test</label></li>")
}

}());
