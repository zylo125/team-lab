$(loaded);

function loaded() {
 todolist();
 //ボタンを押されたときに実行
 $("#button").click(
  function(){
 	 saveText();
 	 todolist();
 });
}

function saveText() {
 var text = $("#Text");
 var time = new Date();
 localStorage.setItem(time, text.val());

 text.val("");
}

function todolist() {
 for(var i = 0; i < localStorage.length; i++){
  var key = localStorage.key(i);
  var value = localStorage.getItem(key)
		//cosole.log(localStorage.getItem(key));
  html.push("<p>" + value + "</p>");
	}
}