$(loaded);

function loaded(){
 //ボタンを押されたときに実行
 $("#button").click(
  function(){
 	 saveText();
 });
}

function saveText(){
 var text = $("#Text");
 var time = new Date();
 localStorage.setItem(time, text.val());

 text.val();
}