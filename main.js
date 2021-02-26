$(function () {

$('#scroll').each(function(){

  const $window = $(window),
  $img = $('#scroll img'),//画像
  $imgTarget = $('#scroll img.target'),//2枚目の画像
  explainSectionHeight = $('.explain').height(),//section .explain の高さ
  imagesScrollHeight=400,//20*20枚
  opacityScrollHeight=800,//800px分
  images = [
    // 'img/00.png',
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

  //次の画像に切り替えるまでのスクロール量(px単位)
  const switchingScrollAmount = 20;

  $window.on('scroll', function () {

    //スクロール量がsection.explainの高さ200pxよりも少ない時
    if($window.scrollTop()<explainSectionHeight){
      //<img>要素の高さの初期設定
      $img.css({'position':'absolute','top':'35%'});
      //2番目の<img>要素のz-index:0に指定。最初の<img>よりも下に設置
      $imgTarget.css({'opacity':'0','z-index':0});
    }

    //スクロール量が200pxよりも大きく且つ、1000px(explainの200px+opacityの800pxの合計)よりも少ない場合,
    //stickyクラスを追加、opacityの実装
    if($window.scrollTop()>explainSectionHeight&&$window.scrollTop()<(explainSectionHeight+opacityScrollHeight)){
      //設置場所の管理
      // $img.addClass('sticky');
      $img.css({'position':'fixed','top':'200px'});

      //<img target>のsrcを01に変更。opacityを0→1に調節
      let normalizedScrollAmount = Math.min(($window.scrollTop() - explainSectionHeight) / 800 , 1);
        $imgTarget.css({'opacity':normalizedScrollAmount});
    }

    //スクロール量が200pxよりも大きく且つ、1000pxよりも大き場合=opacityを1に調節した場合
    if($window.scrollTop()>explainSectionHeight+opacityScrollHeight){
      //現在のスクロール量からsection.explain分の高さとopacityScrollHeightの高さを差し引いてimages配列のindexを渡す
        let currentImgIndex = Math.floor(($window.scrollTop()-explainSectionHeight-opacityScrollHeight) / switchingScrollAmount);
        $imgTarget.attr('src', images[currentImgIndex]);

        //<img>の設置場所の規定
        $img.css({'position':'fixed','top':'200px'});
    }

    //※スクロール量が画像20枚分のスクロール量とsection.explain分の高さとopacityScrollHeight高さの合計=400px + 200px +800px= 1400pxを超えたら
    //stickyを外す、かつtop:1200pxに変更する。その場所で滞在させるため
    if($window.scrollTop()>(imagesScrollHeight+explainSectionHeight+opacityScrollHeight)){
      // $img.removeClass('sticky');
      $img.css({'position':'absolute','top':'1200px'});//800px+400px=120pxで滞在させる。
    }

    //スクロール量が200pxより大きく、1200pxより小さい時
    //stickyクラスを付与
    // if($window.scrollTop()<(imagesScrollHeight+explainSectionHeight+opacityScrollHeight)&&$window.scrollTop()>explainSectionHeight){
    //   $img.addClass('sticky');
    //   $img.css({'position':'fixed','top':'200px'});
    // }

});


});
});
