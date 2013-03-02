// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(document).ready(function(){
  var display_width = document.documentElement.clientWidth
  if (display_width < 1010)  {
    $('.logo').find('.span5').removeClass('offset9').addClass('offset7');
  };
  
  $('.statute_show').on('click', function(){
    $(this).closest('.text').hide();
    $(this).closest('.span5').find('.statute').show();
  });
  $('.close').on('click', function(){
    $(this).closest('.statute').hide();
    $(this).closest('.span5').find('.text').show();
  });
  
});