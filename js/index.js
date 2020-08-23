// ヘッダー
$(function(){
  $(".portfolio__titles__title").click(function(){
    
    if($(this).hasClass('active')){
      $('body,html').stop().animate({scrollTop:0}, 1000,"swing")
      $(this).removeClass("active")
      setTimeout(function(){
        $(".portfolio__titles__navigations").fadeOut(2000);
        $("section").fadeOut()
       },1000);
      
    } else {
      $(this).addClass("active")
      $(".portfolio__titles__navigations").fadeIn(0);
      $("section").fadeIn()
      $(".js-spanize").lettering();
    }
  })
})

$(function(){
  $('.portfolio__titles__title').textillate();
});

$(function(){
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var hash = href == "#" || href == "" ? 'html' : href;
    scrollToAnker(hash);
    return false;
  });
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, 500,"swing");
  }
})

$(function() {
  var $win = $(window),
      $nav = $('.portfolio__titles'),
      navPos = $nav.offset().top - 15,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
    } else {
      $nav.removeClass(fixedClass);
    }
  });
});

$(function(){
  $(".portfolio-site").click(function(){
    $(".modal").fadeIn(500)
  })
})

$(function(){
  $(".modal").click(function(){
    $(".modal").fadeOut(500)
  })
})

$(function(){
  $(".slide__images__image").mouseover(function(e){
    var src = $(this).children('img').attr('src')
    $(".slide__main-image").empty()
    $(".slide__main-image").append('<img src=""  style="display: none;">')
    $(".slide__main-image").children('img').attr('src',src)
    $(".slide__main-image").children('img').fadeIn(500)
  })
})

// セクション01
// $(function(){
//   $(".about-book").click(function(){
//     $(this).toggleClass("active")
//     if($(this).hasClass('active')){
//       $(".fadein").fadeIn(3000)
//     } else {
//       $(".fadein").fadeOut()
//     }
//   })
// })