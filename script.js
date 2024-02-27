//トップの移動
//ロゴ
document.getElementsByClassName("logo")[0].addEventListener("click", go_home);

function go_home(){
    window.location.href = "index.html";
}

//何個かあるやつ
document.getElementsByClassName("page")[0].addEventListener("click", go_page);

function go_page(){
    window.location.href = "kari.html";
}

// // 要素を取得
// var elements = document.getElementsByClassName("page");

// // 各要素に対してイベントリスナーを追加
// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("click", go_page);
// }

// // ページに移動する関数
// function go_page(){
//     window.location.href = "kari.html";
// }

document.getElementsByClassName("english")[0].addEventListener("click", go_page);

document.getElementsByClassName("search")[0].addEventListener("click", go_page);

document.getElementsByClassName("ask")[0].addEventListener("click", go_page);

document.getElementsByClassName("go_kuwashiku")[0].addEventListener("click", go_page);

document.getElementsByClassName("p-bun")[0].addEventListener("click", go_page);

document.getElementsByClassName("p-date")[0].addEventListener("click", go_page);

//丸い要素のタグ
for(var i = 0; i < document.getElementsByClassName("marutagu").length; i++){
    document.getElementsByClassName("marutagu")[i].addEventListener("click", go_page);
}

//情報へ飛ぶ黒いボタン
document.getElementsByClassName("go-service1")[0].addEventListener("click", go_page);

document.getElementsByClassName("go-service2")[0].addEventListener("click", go_page);

//黒い背景の情報
document.getElementsByClassName("b-hon")[0].addEventListener("click", go_page);

document.getElementsByClassName("go-insol")[0].addEventListener("click", go_page);

//ニュース
document.getElementsByClassName("semi1")[0].addEventListener("click", go_page);

document.getElementsByClassName("semi2")[0].addEventListener("click", go_page);

document.getElementsByClassName("semi-go")[0].addEventListener("click", go_page);

document.getElementsByClassName("semi1")[1].addEventListener("click", go_page);

document.getElementsByClassName("semi2")[1].addEventListener("click", go_page);

document.getElementsByClassName("semi-go")[1].addEventListener("click", go_page);

//最後の電話とか
document.getElementsByClassName("fi-ask-moji")[0].addEventListener("click", go_page);

document.getElementsByClassName("fi-number")[0].addEventListener("click", go_page);

//最後の一発
document.getElementsByClassName("gray1")[0].addEventListener("click", go_page);

document.getElementsByClassName("gray2")[0].addEventListener("click", go_page);

document.getElementsByClassName("gray3")[0].addEventListener("click", go_page);

document.getElementsByClassName("gray4")[0].addEventListener("click", go_page);

//トップをついてこさせる
document.addEventListener('DOMContentLoaded', function() {
    var fadeInElement = document.querySelector('.top');
    var lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScroll > lastScrollTop) {
        // Scroll down
        fadeInElement.classList.remove('hyouji');
        fadeInElement.classList.add('hidden');
      } else {
        // Scroll up
        fadeInElement.classList.add('hyouji');
        fadeInElement.classList.remove('hidden');
      }
      
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  });

//透明にする
//     var element = document.querySelector('.top');
window.addEventListener('scroll', function() {
    var topElement = document.getElementById('top-back');
    var scrollPosition = window.scrollY;
    var triggerPosition = 750; // 透明にする位置

    if (scrollPosition > triggerPosition) {
      topElement.classList.add('transparent');
    } else {
      topElement.classList.remove('transparent');
    }
  });

//＞を動かす

//カーソルするとき色変え
 //黒ボタン達
function cc(element) {
    element.style.backgroundColor = "hsl(220, 10%, 30%)"; /* マウスが乗ったときの色 */
    element.style.color = "hsl(0, 0%, 90%)";
    element.style.transition = "filter 0.3s ease";
}

function rc(element) {
    element.style.backgroundColor = "hsl(220, 10%, 40%)"; /* マウスが離れたときの色 */
    element.style.color = "hsl(0, 0%, 100%)";
    element.style.transition = "filter 0.3s ease";
}

 //赤ボタン
function cc2(element) {
    element.style.backgroundColor = "hsl(0, 61%, 36%)"; /* マウスが乗ったときの色 */
    element.style.color = "hsl(0, 50%, 90%)";
}

function rc2(element) {
    element.style.backgroundColor = "hsl(0, 61%, 46%)"; /* マウスが離れたときの色 */
    element.style.color = "hsl(0, 0%, 100%)";
}

 //文字
function cc3(element) {
    element.style.color = "hsl(210, 0%, 45%)";
}

function rc3(element) {
    element.style.color = "hsl(0, 0%, 0%)";
}

//文字暗いver
function cc4(element) {
    element.style.color = "hsl(210, 0%, 85%)";
}

function rc4(element) {
    element.style.color = "hsl(0, 0%, 100%)";
}