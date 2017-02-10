$('#page-nav-tabs').tabCollapse(); //this triggers the tabcollapse plugin, converting tabs to dropdowns buttons on mobile

$('#page-nav-tabs').on('shown-accordion.bs.tabcollapse', function(){
      $('#overview-tab-pane-collapse').prev().find('i').toggleClass('fa-plus fa-minus');
}); //this changes the overview tab's hide-reveal toggle to show a minus sign when loaded expanded

$(document).ready(function() {



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

    }); // this toggles the plus and minus buttons when the hide-reveal tabs are clicked

  $('.panel-title > a').click(function () {

    if ( !$(this).next('.collapse').hasClass('collapsing') ) {

      if ( $(this).prev('i').hasClass('fa-plus') ) {

        $(this).prev('i').toggleClass('fa-plus fa-minus')
      }
      
      else {

        $(this).prev('i').toggleClass('fa-plus fa-minus')
      
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
