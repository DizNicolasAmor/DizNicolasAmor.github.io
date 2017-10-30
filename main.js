var modalIsOpen = false;

function intro(){
  $('#name').hide();
  $('#myLine').hide();
  $('#f-e-d').hide();
  $('#aboutButton').hide();
  $('#projectsButton').hide();
  $('#contactButton').hide();

  $('#name').delay(900).fadeIn('slow', function(){
    $('#myLine').fadeIn('slow');
    $('#f-e-d').slideDown(900, function(){
      $('.mainContainer').animate({top: '10%'}, 900, function(){
        $('#projectsButton').show(900, function(){
          $('#aboutButton').show(900);
          $('#contactButton').show(900);
        });
      });
    });
  });
}

// buttons
function openModal(modalName){
  if(!modalIsOpen){
    modalIsOpen = true;
    $('#'+modalName+'Title').hide();
    $('#'+modalName+'Body').hide();
    $("#background").animate({background: 'black'}, 600);
    $('#'+modalName).show('slow', function(){
      $('#'+modalName+'Title').slideDown(900, function(){
        $('#'+modalName+'Body').slideDown(900, function(){
        });
      });
    });
    $('.close').click(function(){
      modalIsOpen = false;
      $('#'+modalName).fadeOut('slow');
      $('#mailContainer').hide('slow');   //for <contact> section
    });
    $('#mailButton').click(function(){    //for <contact> section
      $('#mailContainer').show('slow');
    });
  }
}

$('#aboutButton').click(function(){
  openModal('about');
});

$('#projectsButton').click(function(){
  openModal('projects');
});

$('#contactButton').click(function(){
  openModal('contact');
});


//Projects slider
var slider = $('#slider'),
    
    moveSlider = function() {
      slider.animate({
        marginLeft:'-'+200+'%'
      } ,700, function(){
        $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
        slider.css('margin-left', '-'+100+'%');
      });
    }

$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
slider.css('margin-left', '-'+100+'%');

$('#moreProjects').on('click',function() {
  moveSlider();
});


$(document).ready(function() {intro();});