$(function(){

$(".main-slide").slick({
  autoplay:true,
  autoplaySpeed:3000,
  infinite:true,
  arrows:false,
});



$(".subslider-list").slick({
  autoplay:true,
  autoplaySpeed:4000,
  infinite:true,
  arrows:false,
  centerMode:true,
  centerPadding:'0',
  slidesToShow:3,

  responsive: [{
    breakpoint: 960, // ブレイクポイントを指定
     settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '20%',
    },
   },
  

  {
    breakpoint: 600, // ブレイクポイントを指定
    settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '5%',
    },
   },
  ]
});



//ハンバーガーメニュー
$('.toggle-btn').click(function(){
  $('header').toggleClass('active');
});

});