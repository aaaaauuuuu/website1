let newWin;
// 新しいウィンドウ

// 新しいウィンドウを開く関数
function openWin(){
    window.name = "openerWin";
    // オープン元ウィンドウの名前をopenWinに設定
    newWin = window.open("subwindow.html", "newWin",
    "status=1,width=480,height=240");
    // 変数newWinはグローバル変数
}

// サブウィンドウを閉じる関数
function closeWin(){
    // サブウィンドウがすでに閉じている場合、ダイアログを表示
    if(newWin.closed){
        alert("すでに閉じています");
        return;
    }
    newWin.close();
    alert("サブウィンドウを閉じました");
}

// オープン元ウィンドウの名前を参照する関数
function getName(){
    document.getElementById("text1").value = window.opener.name;
}

// サブウィンドウの背景色を変更する関数
function changeColor(index){
    // サブウィンドウがすでに閉じている場合、ダイアログを表示
    if(newWin.closed){
        alert("サブウィンドウが既に閉じているので操作できません。")
        return;
    }

    switch(index){
        case 1:
        newWin.document.body.style.backgroundColor = "#ffffff";
        break;
        case 2:
        newWin.document.body.style.backgroundColor = "#ff0000";
        break;
        case 3:
        newWin.document.body.style.backgroundColor = "#00ff00";
        break;
        case 4:
        newWin.document.body.style.backgroundColor = "#0000ff";
        break;
    }
}