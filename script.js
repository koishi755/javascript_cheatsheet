// Javascript基本構文

"use strict";

// if文
let a = "test";
let b = "test";
if ( a === b){
    window.alert("OK")
}else{
    window.alert("NO")
}

// for文
for (let i = 0; i < 5; i++) {
    console.log(`iは${i}です`);
}

// while文
let j = 0;
while (j <= 10){
    console.log(`jは${j}です`);
    j += 1;
}

// 配列
let list = ["list0", "list1", "list2"];
for (let item of list){
    console.log(`listの中身は${item}です`)
}

// 配列の一番後ろに要素を追加
list.push("list3");
for (let item of list){
    console.log(`listの中身は${item}です`)
}

// 配列の一番後ろの要素を削除
list.pop();
for (let item of list){
    console.log(`listの中身は${item}です`)
}

// 配列の一番前の要素を削除
list.shift();
for (let item of list){
    console.log(`listの中身は${item}です`)
}

// 配列の一番前に要素を追加
list.unshift("list10", a);
for (let item of list){
    console.log(`listの中身は${item}です`)
}

// htmlの挿入
function add(){
    document.getElementById("add").insertAdjacentHTML("beforebegin", `<p>${list}</p>`);
}

// htmlのテキスト書き換え
function change_html(){
    document.getElementById("change").textContent="変化した？"
}

function change_value(){
    document.getElementById("change").textContent="変化した？"
}

// htmlのdata属性を取得
let data = document.getElementById("data");
let test_data = data.dataset.test;
console.log(`取得したdataは${test_data}です`);

// オブジェクトのアクセスの仕方とか。中に関数も作れる
let obj = {
    name:"こいし", 
    age:24, 
    job:"IT", 
    print_console:function(item){
        console.log(`名前は${item.name}`);
        console.log(`年齢は${item["age"]}`);
    },
    add_obj:function(){
        document.getElementById("obj").insertAdjacentHTML("beforebegin", `obj`);
    }
}

// オブジェクト内のメソッド実行
obj.print_console(obj);


// よく分からないけどコピー
function copyOverrideOnce(s){
    document.addEventListener('copy', function(e){
      e.clipboardData.setData('text/plain', s);
      e.preventDefault();
    },
    {once:true}
    );
}
function copy(i){
    var pre ="pre" + i;
    var text = document.getElementById(pre).textContent;
    copyOverrideOnce(text);
    document.execCommand("copy");
}

// ファイルをDLする
function dl() {
    var html = "ダウンロードするファイルのテキスト";
    let blob = new Blob([html], { type: "text/plan" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "作ったファイル.html";
    link.click();
}

// --------------------------------------------------------

// jqueryよく使いそうなの

//webページを開いた時の処理
$(document).ready(function(){
    
});

//json読み込み
$.ajax({url:'https://eaxam.glitch.me/data.json', dataType:'json'})
//jsonが読み込まれた時の処理
.done(function(json_data){
    console.log(json_data);
})
//jsonの読み込みに失敗した時の処理
.fail(function(){

});

// ボタンを押した時
$('#test').on('click', function() {
    console.log("test");
});
