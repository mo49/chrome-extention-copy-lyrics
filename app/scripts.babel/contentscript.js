'use strict';

$(function () {
  
  if($('.VkR16c').length !== 0){
    insertLabel();
    $('.VkR16c').css({
      'font-size': '1.5rem',
    }).removeClass('VkR16c');
  }
  
  $('body').on('load DOMSubtreeModified propertychange', '.VkR16c', function() {
    $('.VkR16c').removeClass('VkR16c');
  })

  function insertLabel() {
    $('body').append('<div class="label-lyrics">can copy lyrics!</div>');
    $('.label-lyrics').css({
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'padding': '3px 5px',
      'background-color': '#f66',
      'color': '#fff',
      'width': '100vw',
      'z-index': 999
    }).delay(3000).fadeOut(1000);
  }

});