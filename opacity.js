$(function () {

$('#scroll').each(function(){

  const $window = $(window),
  $img = $('#scroll img'),//画像
  $imgTarget = $('#scroll img.target'),//2枚目の画像
  explainSectionHeight = $('.explain').height(),//section .explain の高さ
  imagesScrollHeight=400,//20*20枚
  opacityScrollHeight=400,//400px分
  images = [
    'img/00.png',
    'img/01.png',
    'img/02.png',
    'img/03.png',
    'img/04.png',
    'img/05.png',
    'img/06.png',
    'img/07.png',
    'img/08.png',
    'img/09.png',
    'img/10.png',
    'img/11.png',
    'img/12.png',
    'img/13.png',
    'img/14.png',
    'img/15.png',
    'img/16.png',
    'img/17.png',
    'img/18.png',
    'img/19.png',
    'img/20.png',
  ];


  //画像を切り替えるためのスクロール量(px単位)
  const switchingScrollAmount = 20;

  $window.on('scroll', function () {

    //スクロール量がsection.explainの高さよりも少ない時 = 高さの初期位置
    if($window.scrollTop()<explainSectionHeight){
      $img.css({'position':'absolute','top':'35%'});
      $imgTarget.css({'opacity':'0','z-index':0});
    }

    //スクロール量がsection.explainの初期位置よりも多ければ
    //stickyクラスを追加
    if($window.scrollTop()>explainSectionHeight){
      //設置場所の管理
      $img.addClass('sticky');

      //現在のスクロール量からsection.explain分の高さを差し引いてimages配列のindexを渡す
        let currentImgIndex = Math.floor(($window.scrollTop()-explainSectionHeight) / switchingScrollAmount);
        $imgTarget.attr('src', images[currentImgIndex]);

        //照屋さんの修正後...400px分のスクロールで0→1を制御したい
        normalizedScrollAmount = Math.min(($window.scrollTop() - explainSectionHeight) / 800 , 1);
        $imgTarget.css({'opacity':normalizedScrollAmount});
    }

    //※スクロール量が画像20枚分のスクロール量とsection.explain分の高さとopacityスクロール量の合計=400px + 200px + 800px = 1000pxを超えたら
    //stickyを外す、かつtop:400pxに変更する。その場所で滞在させるため
    if($window.scrollTop()>(imagesScrollHeight+explainSectionHeight+opacityScrollHeight)){
      $img.removeClass('sticky');
      $img.css({'position':'absolute','top':'1200px'});//その場で滞在させる。400px=20pxx20枚相当。
    }

    //スクロール量が200pxより大きく、1400pxより小さい時
    //stickyクラスを付与
    if($window.scrollTop()<(imagesScrollHeight+explainSectionHeight+opacityScrollHeight)&&$window.scrollTop()>explainSectionHeight){
      $img.addClass('sticky');
      $img.css({'position':'fixed','top':'200px'});
    }

});


});
});
