//trigger the bootstrap-tabcollapse plugin to convert tabs to hide-reveal toggles on mobile

$('#page-nav-tabs').tabCollapse(); 

//size the YouTube iframe according to the proportions of the header

function prepareVideo() {

  var headerHeight = $('#header-section').height();
  
  if ( screen.width / headerHeight >= 1.78 ) {

    var iframeHeight = headerHeight;
    var iframeWidth = iframeHeight *1.78;
    var iframePosX = ($('#header-section').width() / 2) - (iframeWidth / 2);
 
    $('#header-wrapper iframe').attr({'height': iframeHeight, 'width': iframeWidth});
    $('#header-wrapper iframe').css('left', iframePosX);

  } else {

    var iframeWidth = screen.width;
    var iframeHeight = screen.width / 1.78;
    var iframePadding = (headerHeight - iframeHeight) / 2;

    $('#header-wrapper iframe').attr({'height': iframeHeight, 'width': iframeWidth});
    $('#header-wrapper iframe').css('bottom', iframePadding + 'px');

  }

}

$(document).ready(function() {

  //resize the YouTube iframe if the viewport changes  
  
  $(window).resize(function() {
    $(prepareVideo);
  });
  
  //play the YouTube video when the header media button is clicked (and move around header content if on tablet/desktop)

  $('#media-button').click(function () {
    $('#header-wrapper iframe').css({'opacity': '1', 'visibility': 'visible'});
    $('#header-wrapper').css('background-color', 'rgba(0,0,0,1)');   
    $('#media-button').css({'opacity': '0', 'visibility': 'hidden'});
    
    if ( screen.width > 767 ) {
      var headerHeight = $('#header-section').height();
      var ctaGroupHeight = $('.hidden-xs .cta-button-group').innerHeight();
      var movedHeaderContent = $('#header-wrapper .row').detach();
      
      $('#main-content').css({'opacity': '0.33'}).on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
        $('#main-content > .container').prepend(movedHeaderContent);
        $('.cta-button-group').css('margin-top', '10px');
        $('#course-title-desktop h1').css({'background-color': '#fff', 'color': '#000'});
        $('#main-content').css({'opacity': '1'})
      });
    }

    $( playVideo() );

  });

  //toggle the plus and minus symbols if the hide-reveal toggles are clicked

  $('.hide-reveal-header a, .hide-reveal-module').click(function () {

    if ( !$(this).next('.collapse').hasClass('collapsing') ) {

      if ( $('i', this).hasClass('fa-plus') ) {

        $('i', this).removeClass('fa-plus');
        $('i', this).addClass('fa-minus');
      
      }
      
      else {

        $('i', this).removeClass('fa-minus');
        $('i', this).addClass('fa-plus');
      
      }

    }

  }); 

  //toggle the plus and minus symbols if the hide-reveal toggles are clicked

  $('.panel-title > a').click(function () {

    if ( !$(this).next('.collapse').hasClass('collapsing') ) {

      if ( $('i', this).hasClass('fa-plus') ) {

        $('i', this).toggleClass('fa-plus fa-minus')
      }
      
      else {

        $('i', this).toggleClass('fa-plus fa-minus')
      
      }

    }

    }); // this toggles the plus and minus buttons when the tab hide-reveal toggles are clicked

  $('#keyInfo-uk-cell-fees a, #keyInfo-international-cell-fees a').click(function () {

    if ($(window).width() > 767) {
    
      $('#fees-nav-button').addClass('active');
      $('#overview-nav-button').removeClass('active');

    }

  });  // this enables tab toggling from the fees hyperlink in the 'key information' tabbed widget

  $('#page-nav-tabs').on('show-accordion.bs.tabcollapse show-tabs.bs.tabcollapse', function() {

    var keyInfoFees = "#keyInfo-uk-cell-fees a, #keyInfo-international-cell-fees a"

    if ( $(keyInfoFees).attr('data-toggle') === 'tab' ) {

      $(keyInfoFees).attr('data-toggle', 'collapse');
      $(keyInfoFees).attr('href', '#fees-tab-pane-collapse');

    }
    
    else {

      $(keyInfoFees).attr('href', '#fees-tab-pane');
      $(keyInfoFees).attr('data-toggle', 'tab');
    }

  }); // this enables accordion toggling (on mobile) from the fees hyperlinks in the 'key information' tabbed widget

});
