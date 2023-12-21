const $__defult_sipher = {
    letter : ["$","a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n","1","2","3","4","5","6","7","8","9","0"," "],
    sipher : ["$","n","b","v","c","x","w","q","s","d","f","g","h","j","k","l","m","a","z","e","r","t","y","u","i","o","p","0","9","8","7","6","5","4","3","2","1","0"]
}


const normalText = document.getElementById('normal_text');
const sipherText = document.getElementById('sipher_text');


class Write_sipher{
    constructor($__text){
        var $__text_l = $__text.length - 1;
        var $__text_b = "";
        var $__letter;
        var $__g_l = 0;
        var $__ltt_T;

        for (var lt = 0;lt <= $__text_l;lt++) {
            $__letter = $__text.substring(lt , lt+1);
            for (var ltt = 0;ltt < $__defult_sipher.letter.length;){
                if ($__defult_sipher.letter[ltt] == $__letter) {
                    $__ltt_T = ltt;
                    $__g_l = 1;
                    ltt++
                }else {
                    ltt++
                }
            }
            if ($__g_l == 1) {
                $__text_b = $__text_b + $__defult_sipher.sipher[$__ltt_T];
                $__ltt_T = 0;
            } else {
                $__text_b = $__text_b + "#";
            }
        }
        sipherText.setAttribute("value" , $__text_b);
        sipherText.innerHTML = $__text_b;
    }
}



normalText.addEventListener("input" , ()=>{
    $__text_V = normalText.value;
    new Write_sipher($__text_V);
    // console.log($__last_L);
});
