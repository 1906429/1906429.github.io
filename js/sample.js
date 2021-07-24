
//ログイン
function login(){
    var i=0;
    while(i == 0){
        x = prompt("メールアドレスを入力してください")
        if (x == "xxx@sample.com"){
            while (i == 0){
                var y = prompt("パスワードを入力してください")
                if (y == "xxx"){
                    alert("ログインが完了しました");
                    i++;
                }else{
                    alert("パスワードが違います。もう一度入力してください")
                };
            }
        }else{
            alert("メールアドレスが違います。もう一度入力してください")
        };
    };
};

login();




//商品価格表示
function hukubukuro(kind) {
    var message = "";

    if (kind == 1) {
        message =　"1パック500円です";
    } else if (kind == 2) {
        message =　"1袋400円です";
    } else if (kind == 3) {
        message = "1房300円です";
    } else {
        message = "想定されていない引数です.";
    }
    alert(message);
}

//購入
var value_ichigo = 500;
var tagInput_ichigo = document.getElementById('ichigo_num');
var tagOutput_ichigo = document.getElementById('ichigo_sum');
tagInput_ichigo.addEventListener('change', function() {

    var str = this.value;
    var num = Number(str);

    if(num == 0){
        num = '';
    } 
    else {
        this.value = num;
        var price_ichigo = num * value_ichigo;
        tagOutput_ichigo.value = price_ichigo;
    }
});

var value_mikan = 400;
var tagInput_mikan = document.getElementById('mikan_num');
var tagOutput_mikan = document.getElementById('mikan_sum');
tagInput_mikan.addEventListener('change', function() {

    var str = this.value;
    var num = Number(str);

    if(num == 0){
        num = '';
    } 
    else {
        this.value = num;
        var price_mikan = num * value_mikan;
        tagOutput_mikan.value = price_mikan;
    }
});

var value_budo = 300;
var tagInput_budo = document.getElementById('budo_num');
var tagOutput_budo = document.getElementById('budo_sum');
tagInput_budo.addEventListener('change', function() {

    var str = this.value;
    var num = Number(str);

    if(num == 0){
        num = '';
    } 
    else {
        this.value = num;
        var price_budo = num * value_budo;
        tagOutput_budo.value = price_budo;
    }
});

    


//購入しますか
function choice(sentaku) {
    var message = "";

    if (sentaku == 1){
        message ="お買い上げありがとうございました";
    } else {
        message = "引き続きお買い物をお楽しみください";
    }

    alert(message);
}


//おみくじ

