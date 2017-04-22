/*
PersonalPortfolio
- - - - - - - - - -
https://diznicolasamor.github.io/
Author:  Diz, Nicolás Amor (https://github.com/DizNicolasAmor/)
*/

$(document).ready(function() {

	// show more projects
    // two rows are shown by default (row0 and row1).
  var rowsShown = 1;
  // refresh button
  $('#moreProjects').click(function(){
    rowsShown++;
    if(rowsShown <= 5){
      $('#row'+rowsShown).removeClass('hide');
    }
    rowsShown++;
    if(rowsShown <= 5){
      $('#row'+rowsShown).removeClass('hide');
    }
  });
  
  //Collapse rows when backToTop
  $('#backToTop').click(function(){
    $('#row2').addClass('hide');
    $('#row3').addClass('hide');
    $('#row4').addClass('hide');
    rowsShown = 1;
  });

  $('#backToTop2').click(function(){
    $('#row2').addClass('hide');
    $('#row3').addClass('hide');
    $('#row4').addClass('hide');
    rowsShown = 1;
  });

  $('#backToTop3').click(function(){
    $('#row2').addClass('hide');
    $('#row3').addClass('hide');
    $('#row4').addClass('hide');
    rowsShown = 1;
  });
});
