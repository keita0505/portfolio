// ヘッダー
$(function(){
  $(".portfolio__titles__title").click(function(){
    $(this).toggleClass("active")
    if($(this).hasClass('active')){
      $(".portfolio__titles__navigations").fadeIn(0);
      $("section").fadeIn()
      $(".js-spanize").lettering();
    } else {
      $(".portfolio__titles__navigations").fadeOut(2000);
      $("section").fadeOut()
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
// セクション01
$(function(){
  var index = 0
  $(".about-book").click(function(){
    $(this).toggleClass("active")
    if (index === 0) {
      $('.fadein').textillate();
      index += 1
    } else{
      if($(this).hasClass('active')){
        $(".fadein").fadeIn(3000)
      } else {
        $(".fadein").fadeOut()
      }
    }
  })
})