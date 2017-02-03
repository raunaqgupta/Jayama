$(function () {

  $('.highlight').mouseenter(function () {
    const meaning = $(this).data('meaning');
    const language = $(this).data('language');
    const position = $(this).offset()
    const elemWidth = $(this).outerWidth()
    const elemHeight = $(this).outerHeight()
    console.log(position)
    console.log(`${meaning}, ${language}`)
    $('.tooltip').addClass('active')
    .css('top', position.top + elemHeight + 2)
    .css('left', position.left)
    .append(`<div class="information"><span class="meaning">${meaning}</span> (<span class="language">${language}</span>)</div>`)
  });

  $('.highlight').mouseleave(function () {
    $('.information').remove()
    $('.tooltip').removeClass('active')
  })
})