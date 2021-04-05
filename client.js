var count = 0;

$( "body" ).click(function() {
  count++;
  $( "body" ).text(count);
});
