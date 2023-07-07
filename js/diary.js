// 그림일기 js

$(function(){

    var array = ["HTML / CSS", "Responsive web / Media query", "Javascript", "Jquery", "Json / Ajax", "Open Api", "React", "Typescript"];

    var index;
    var originalText = $("#drawing").text();

    $("#g1 > li").mouseover(function(){

        index = $(this).index();

        $("#hello").hide();

        $("#diary_box > li:eq(" + index + ")" ).show();

        $("#drawing").text(array[index]);
        

    }).mouseout(function(){

        index = $(this).index();

        $("#hello").show();

        $("#diary_box > li:eq(" + index + ")" ).hide();

        $("#drawing").text(originalText);

    });



















});