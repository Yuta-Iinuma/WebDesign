"use struct";

$(function(){
    $('a[href^="#"]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position},speed,"swing");
        return false;
    });


    let nowPage = 0;
    let nextPage = 1;
    const slides = $("#slideshow img");
    const slideLength = slides.length;
    const fadeTime = 1500;
    const showTime = 2000;

    slides.hide();
    slides.eq(0).show();

    const slideshow = () => {
      slides.eq(nowPage % slideLength).fadeOut(fadeTime);
      slides.eq(nextPage % slideLength).fadeIn(fadeTime);
      nowPage++;
      nextPage++;
    }
    setInterval(slideshow,showTime);

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
  
    let time = 600;
    let flag = true; //動いている間に処理が追加されないようにするための工夫

    const sildeIn = (btn, panel) => {
      let removePanel = () => {
        $('.service_items').not(panel).removeClass('_slide');
        flag = true;
      };

      $(btn).click(function () {
        if (flag) {
          flag = false;
          $('.service_items').removeClass('_cover');
          $(panel).addClass('_cover').addClass('_slide');
          setTimeout(removePanel, time);
        }
      });
    };

    sildeIn('#btn1', '#panel1');
    sildeIn('#btn2', '#panel2');
    sildeIn('#btn3', '#panel3');
    sildeIn('#btn4', '#panel4');

    $('#hamburger').click(function(){
      $('#hamburger').toggleClass('active');
      $('.nav_menu').fadeToggle(500);
      $('body').toggleClass('hidden');
    })

    $('.nav_item').click(function() {
      if( $('#hamburger').hasClass('active')) {
        $('#hamburger').removeClass('active');
        $('.nav_menu').fadeOut(500);
      }
    })
});