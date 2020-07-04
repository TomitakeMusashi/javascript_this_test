/*
スコープのテストクラス
*/

//クラス宣言
class aaa{
    //コンストラクタ
    constructor(){
        var self = this;    //thisが指すのはaaa

        //コンストラクタ内で関数定義
        var bbb = function(){
            console.log("bbb");
            self.ccc(); //this.ccc()　の代わり
        }

        //文字を出力してみる
        console.log("aaa");
        bbb();
    }

    //クラスaaaのメソッド
    ccc(){
        console.log("ccc");
    }

}

var test = new aaa();
