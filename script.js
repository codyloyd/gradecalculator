$(document).ready(function() {
  $('input').keyup(function(){
    var possible = $('#possible').val()
    var missed = $('#missed').val()
    var points = $('#points').val()
    var score = (possible - missed) / possible
    var gradebookScore = (points * score)
    $("#score").text(Math.floor(score * 100) + '%')
    $("#gradebookScore").text(Math.floor(gradebookScore))
  })
});
