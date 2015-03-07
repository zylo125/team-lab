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

 localStorage.setItem(time, text.val());

 text.val(""); //textboxを空にする
}
//ローカルストレージに保存したデータを表示
function todolist() {

 var list = $("#list");
 list.children().remove();

 var key,value,html = [];
 var check;
 for(var i=0; i<localStorage.length; i++){
  key = localStorage.key(i);
  value = localStorage.getItem(key);
  value = $('<div>').html(value).text(); //正規表現でhtmlタグをエスケープ
  //check = $('#todolist').prepend('<input type="checkbox" name="test"></br>');
  check = $("#li").before('<input type="checkbox" name="test">');
  console.log(check);
  html.push(check + "<li>" + value +"</li>");
 }
 list.append(html.join(""));
}

function contrary(){
 var list = $('#list > li').toArray().reverse();
 $('#list').empty().append(list);
}