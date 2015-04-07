$(document).ready(function($) {
  var navTrigger = $('.js-nav-trigger');
  var navOverlay = $('.js-nav-overlay');
  var navMain = $('.js-navigation');
  var contOverlay = $('.js-cont-overlay');

  layerInit();
  $(window).on('resize', function(){
    window.requestAnimationFrame(layerInit);
  });

  navTrigger.click(function() {
    if(!navTrigger.hasClass('nav-close')) {
      navTrigger.addClass('nav-close');

      navOverlay.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1
      }, 500, 'easeInCubic', function(){
        navMain.addClass('fade-in');
      });
    } else {
      navTrigger.removeClass('nav-close');

      contOverlay.children('span').velocity({
        traslateZ: 0,
        scaleX: 1,
        scaleY: 1
      }, 500, 'easeInCubic', function(){
        navMain.removeClass('fade-in');

        contOverlay.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          contOverlay.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0
          }, 0, function(){
            contOverlay.removeClass('is-hidden');
          });
        });

        if ($('html').hasClass('no-csstransitions')) {
          contOverlay.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0
          }, 0, function(){
            contOverlay.removeClass('is-hidden');
          });
        }
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
    });
  };
});
