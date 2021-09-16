"use struct";

$(function() {
 // // スクロールをしたら
 $(window).scroll(function () {
    // もしスクロール位置が画面の高さを超えたら
    let nowHeight = $(window).scrollTop();
    // 今のスクロール分
    let windowHeight = $(window).height();
    // ファーストビュー1枚分の高さ＝画面の高さ

    if (nowHeight > windowHeight) {
      // #back-to-topにinクラスを追加する
      $("#back-to-top").addClass("in");
      // そうでなければ
    } else {
      // #back-to-topのinクラスを削除する
      $("#back-to-top").removeClass("in");
    }
  });  
  // // クリックしたら
  $("#back-to-top").click(function () {
    // html, bodyに0.6sでscrollTop: 0のアニメーションする
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position},speed,"swing");
    return false;
});
 
      //マウスを乗せたら発動
  //マウスオーバーしたときの色を指定
  $('.per_contents').on("mouseover",function(){
    var index = $('.per_contents').index(this);
    $('button').eq(index).css({
        color: "111111",
        backgroundColor: "#ffff00"
    });
  });
  //マウスアウトしたときに元の色に戻る
  $('.per_contents').on("mouseout",function(){
    $('button').css({
        color: "",
        backgroundColor: ""
    });
  });

  $('.contact_button').on("mouseover",function(){
    $('button').css({
        color: "111111",
        backgroundColor: "#ffff00"
    });
  });
  //マウスアウトしたときに元の色に戻る
  $('.contact_button').on("mouseout",function(){
    $('button').css({
        color: "",
        backgroundColor: ""
    });
  });

  $(window).scroll(function (){
    $('.down-to-top').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollin');
        }
    });
  });
});
