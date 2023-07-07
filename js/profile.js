// 어바웃미 마우스 올리면 글 뜨게


$(function(){
    
   
    let i; // let을 사용하여 i 변수를 블록 스코프로 선언합니다.


    $(".list > li").mouseover(function(){
        i = $(this).index();

        $(".balloon:eq(" + i + ")").show();


    }).mouseout(function(){
        $(".balloon:eq(" + i + ")").hide();

       
       
    });


    
});




