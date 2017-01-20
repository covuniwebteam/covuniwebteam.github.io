$('#page-nav-tabs').tabCollapse(); //this triggers the tabcollapse plugin, converting tabs to dropdowns buttons on mobile

$('.hide-reveal').click(function () {
  
  if ( !$(this).next().hasClass('collapsing') ) {
    
    if ( $(':nth-child(2)', this).hasClass('fa-plus') ) {

      $(':nth-child(2)', this).removeClass('fa-plus');
      $(':nth-child(2)', this).addClass('fa-minus');

    }
    
    else {

      $(':nth-child(2)', this).removeClass('fa-minus');
      $(':nth-child(2)', this).addClass('fa-plus');
    }
  
  }

}); // this switches the plus and minus buttons when the hide-reveal tabs are clicked

$('.module-list a').click(function () {

  if ( !$(this).next().hasClass('collapsing') ) {

    if ( $(this).hasClass('fa-plus') ) {

      $(this).removeClass('fa-plus');
      $(this).addClass('fa-minus');
    
    }
    
    else {

      $(this).removeClass('fa-minus');
      $(this).addClass('fa-plus');
    
    }

  }

  }); // this toggles the plus and minus buttons when the hide-reveal module tabs are clicked

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