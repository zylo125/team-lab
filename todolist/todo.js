$(loaded);

function loaded() {
 todolist();
 contrary();
 //ボタンを押されたときに実行
 $("#button").click(
  function(){
 	 localsave();
 	 todolist();
 	 contrary();
 });
}

function localsave() {
 var text = $("#Text");
 var time = new Date();
 new Date( JSON.parse( JSON.stringify(time) ) );
 console.log(time);
 localStorage.setItem(time, text.val());

 text.val(""); //textboxを空にする
}
//ローカルストレージに保存したデータを表示
function todolist() {

 var list = $("#list");
 list.children().remove();

 var key,value,html = [];
 for(var i=0; i<localStorage.length; i++){
  key = localStorage.key(JSON.parse(JSON.stringify(i)));
  value = localStorage.getItem(key);
  html.push("<li>"  + value +"</li>");
 }
 list.append(html.join(''));
}
function contrary(){
 var list = $('#list > li').toArray().reverse();
 $('#list').empty().append(list);
}