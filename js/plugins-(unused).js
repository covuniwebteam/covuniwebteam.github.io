$('#test').click(function () {
    
    // gather and organise user input

    var row = [];
    var accredTypes = [
                        $("#input-accreditation-type-1").val(), 
                        $("#input-accreditation-type-2").val(),
                        $("#input-accreditation-type-3").val(),
                        $("#input-accreditation-type-4").val() 
                      ]
    var accredCount = [
                        $("#input-accreditation-amount-1").val(), 
                        $("#input-accreditation-amount-2").val(),
                        $("#input-accreditation-amount-3").val(),
                        $("#input-accreditation-amount-4").val() 
                      ];

    var totalInnerColumns = 0;

    for (var i = 0, len = accredCount.length; i < len; i++) {
      totalInnerColumns += parseInt(accredCount[i]);
    }

    var totalOuterColumns = Math.ceil(totalInnerColumns / 4);
    
    if (totalInnerColumns < 4) {
      var countRows = Math.ceil(totalInnerColumns / 4);
      }

    else {
      var countRows = Math.floor(totalInnerColumns / 4);
      }
    
    var rowRemainder = totalInnerColumns % 4;
    
    for(var i=0 ; i<countRows ; i++) {
      row.push(4);
    }
    
    if ( rowRemainder !=0 ) {
      row.push(rowRemainder);
      }
    
    var rowLength = row.length;

    // correct grammar for plural instances

    for (var i=0, len=accredCount.length ; i<len; i++) {
      if (accredCount[i] > 1) {
        var tempText = accredTypes[i].match(/^([\w]+)/g);
        accredTypes[i] = accredTypes[i].replace(/^([\w]+)/g, tempText[0]+'s');
      }
    }

    // create outer rows and columns:
    
    for (var i=0, len = accredCount.length; i<len ; i++) {
      $('#accreditations-wrapper > .row').append(
      '   <div class="col-xs-12 col-sm-6" id="accreditation-outer-column' + (i+1) + '">' +
      '     <div id="accreditation-row' + (i+1) + '" class="row slide' + (i+1) + '">' +
      '       <div class="col-xs-12">' +
      '         <h4>' + accredTypes[i] + '</h4>' + 
      '       </div>' + 
      '     </div>' +
      '   </div>'
      );
      
      // apply clearfix to odd-number outer columns during iteration:
      
      if (i % 2 !== 0) {
        $('<div class="clearfix"></div>').insertAfter($('#accreditation-outer-column' + (i+1)));
      }
    } 
    
    // create inner rows and columns:

    for(var i=0, len = accredCount.length; i<len; i++) {
      var x = row[i];

      $('#accreditation-row'+(i+1)).each(function () {
                              
         for(var j=0 ; j<accredCount[i] ; j++) {

            if (16 % accredCount[i] === 0) {
              var sm = 6;
            }

            else {
              var sm = 4;
            }          

          $(this).append(
          '<div class="col-xs-6 col-sm-' + sm + '" align="center"><img src="https://placehold.it/125x63" /><p><a href="#">Lorem ipsum dolor sit amet, consectetur</a></p></div>'
            );
          }
                              
      });
    
    }

    //hide form after success:

    $('#accreditation-test').hide();

});