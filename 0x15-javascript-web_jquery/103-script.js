$('document').ready(function () {
  $('INPUT#btn_translate').on('click', convert);
  $('INPUT#language_code').focus(function () {
    $(this).keydown(function (e) {
      if (e.keyCode === 13) {
        convert();
      }
    });
  });
});

function convert () {
  const url = 'https://www.fourtonfish.com/hellosalut/?';
  $.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
    $('DIV#hello').html(data.hello);
  });
}
