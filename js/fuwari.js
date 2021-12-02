$(function () {//functionはその中の動きを定義していく
  $(window).scroll(function () {//画面内スクロールしたら
    $(".fadein").each(function () {//HTML要素（クラス名）.fadeIn( 時間（省略可能） );今回はcssでtransitionで指定してる
      var targetElement = $(this).offset().top; //画面上から要素までの距離
      var scroll = $(window).scrollTop(); //どのくらいスクロールしたのか最初のウインドウ幅は入ってないよ！
      var windowHeight = $(window).height(); //一番最初に見えているウインドウの幅
      if (scroll > targetElement - windowHeight + 150) { //スクロール分が、スクロール分に行った時（要素が見えてきた時＋150の時に発火
        $(this).addClass("scrollin");
      }
    });
  });
});