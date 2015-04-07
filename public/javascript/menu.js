$(document).ready(function($) {
  var navTrigger = $('.js-menu-nav-trigger');
  var navOverlay = $('.js-menu-nav-overlay');
  var navMain = $('.js-menu-navigation');
  var contOverlay = $('.js-menu-cont-overlay');

  layerInit();
  $(window).on('resize', function(){
    window.requestAnimationFrame(layerInit);
  });

  navTrigger.on('click', function() {
    if(!navTrigger.hasClass('nav-close')) {
      navTrigger.addClass('nav-close');

      navOverlay.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1,
      }, 500, 'easeInCubic', function(){
        navMain.addClass('fade-in');
      });
    } else {

      navTrigger.removeClass('nav-close');

      contOverlay.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1
      }, 500, 'easeInCubic', function(){
        navMain.removeClass('fade-in');

        navOverlay.children('span').velocity({
          translateZ: 0,
          scaleX: 0,
          scaleY: 0
        }, 0);

        contOverlay.addClass('is-hidden');
        contOverlay.children('span').velocity({
          translateZ: 0,
          scaleX: 0,
          scaleY: 0
        }, 0, function() { contOverlay.removeClass('is-hidden') });
      });
    }
  });

  function layerInit() {
    var diameterValue = (Math.sqrt(Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2)) * 2);

    navOverlay.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0
    }, 50).velocity({
      height: diameterValue + 'px',
      width: diameterValue + 'px',
      top: - (diameterValue / 2) + 'px',
      left: - (diameterValue / 2) + 'px'
    }, 0);

    contOverlay.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0
    }, 50).velocity({
      height: diameterValue + 'px',
      width: diameterValue + 'px',
      top: - (diameterValue / 2) + 'px',
      left: - (diameterValue / 2) + 'px'
    }, 0);
  };
});
