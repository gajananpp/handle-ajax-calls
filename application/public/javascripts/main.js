$(function() {

  var source = $('#search-result').html();
  console.log(source);
  var dataTemplate = Handlebars.compile(source);
  console.log(dataTemplate);

  $('#search').on('keyup',function(e) {
    //event.preventDefault();
    if (e.keyCode === 13) {
      var parameter = {"search" : $(this).val()};
      $.get('/searching',parameter,function(data) {
        if (data instanceof Array) {
          $('#results').html(dataTemplate({resultsArray:data}));
        }
        else {
          $('#results').html(data);
        }
      });
    }
  });
});
