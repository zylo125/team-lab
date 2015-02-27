$(loaded);

function loaded() {
 todolist();
 //ボタンを押されたときに実行
 $("#button").click(
  function(){
 	 localsave();
 	 todolist();
 });
}

function localsave() {
 var text = $("#Text");
 var time = new Date();
 localStorage.setItem(time, text.val());

 text.val(""); //textboxを空にする
}
//ローカルストレージに保存したデータを表示
function todolist() {

 var list = $("#list");
 list.children().remove();

 var key,value,html = [];
 for(var i=0; i<localStorage.length; i++){
  key = localStorage.key(i);
  value = localStorage.getItem(key)
  html.push("<p>" + value + "</p>");
 }
 html.sort(
	function(a,b){
  var aTime = a["Time"];
  var bTime = b["Time"];
  if( a > b ) return -1;
  if( a < b ) return 1;
  return 0;
 }
);
 list.append(html.join(''));
}