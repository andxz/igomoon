$('.mobile-toggle').on('click', function() {
  $('html').toggleClass('menu-open');
});

$('.hide-kids').on('click', function() {
  $('.hs-menu-item .hs-menu-depth-1 .hs-item-has-children').toggleClass('show-kids');
});