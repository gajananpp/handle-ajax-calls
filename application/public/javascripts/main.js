$(function() {
  $('#search').on('keyup',function(e) {
    //event.preventDefault();
    if (e.keyCode === 13) {
      var parameter = {"search" : $(this).val()};
      $.get('/searching',parameter,function(data) {
        $('#results').html(data).prop("href",data);
      });
    }
  });
});
