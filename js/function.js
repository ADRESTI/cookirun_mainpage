//devsisters games
$(function(){
  const $devgame = $('.other_games > .devgames');
  const $cancel = $('.cancel_btn');

  $devgame.on('click',function(evt){
    evt.preventDefault();

    $devgame.nextAll().toggle();
  });

  $cancel.on('click',function(evt){
    evt.preventDefault();

    $devgame.nextAll().hide();
  });

});

//page navigation click event
$(function(){
  const $mnu = $('header > .kingdom_nav > ul > li');
  const $mnu_2 = $('header > .kingdom_nav > ul > li:nth-child(2)'); //1076
  const $mnu_3 = $('header > .kingdom_nav > ul > li:nth-child(3)'); //2076
  const $mnu_4 = $('header > .kingdom_nav > ul > li:nth-child(4)'); //3276
  const $mnu_5 = $('header > .kingdom_nav > ul > li:nth-child(5)'); //4566.984375
  const arrTopVal =[]
  const $navSet = $('.kingdom_nav').offset();

  //스크롤 시 nav 고정
  $(window).scroll(function(){
    if($(document).scrollTop()>$navSet.top){
      // $('.kingdom_nav').removeClass('.kingdom_nav');
      $('.kingdom_nav').css({
        position: 'fixed',
        top: 0
      });
    }else {
      $('.kingdom_nav').css({
        position: 'absolute',
        top: 40
      });
    };
  });

  const $section =$('section');

  console.log('section 태그 갯수는',$section.length);

  for(let i=0;i<$section.length;i++){
    arrTopVal.push($section.eq(i).offset().top);
  }
  console.log('arrTopVal =',arrTopVal);
  

  $mnu_2.on('click',function(evt){
    evt.preventDefault();
    const nowIdx = $mnu.index(this);
    $mnu.eq(nowIdx).addClass('on').siblings().removeClass('on');

    $('html,body').animate({
      scrollTop:1076
    });
  });
  $mnu_3.on('click',function(evt){
    evt.preventDefault();
    const nowIdx = $mnu.index(this);
    $mnu.eq(nowIdx).addClass('on').siblings().removeClass('on');

    $('html,body').animate({
      scrollTop:2076
    });
  });
  $mnu_4.on('click',function(evt){
    evt.preventDefault();
    const nowIdx = $mnu.index(this);
    $mnu.eq(nowIdx).addClass('on').siblings().removeClass('on');

    $('html,body').animate({
      scrollTop:3276
    });
  });
  $mnu_5.on('click',function(evt){
    evt.preventDefault();
    const nowIdx = $mnu.index(this);
    $mnu.eq(nowIdx).addClass('on').siblings().removeClass('on');

    $('html,body').animate({
      scrollTop:5276
    });
  });
});



//slide
$(function(){

  const $slnav = $('.slides > .slides_nav > li > a');
  const $slidecon = $('.slides > .slides_container > .contents');
  const $prev = $('.prev');
  const $next = $('.next');
  const $slpagination = $('.slides > .slides_pagination > span');

  
  let nowIdx = 0;

  $slnav.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $slnav.index(this);
    $slnav.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $slpagination.eq(nowIdx).addClass('bar').siblings().removeClass('bar');

    $slidecon.stop().animate({
      left: -760 * nowIdx
    });
  });

  $prev.on('click',function(evt){
    evt.preventDefault();

    if(nowIdx>0){
      nowIdx--;
    }else {
      nowIdx = 4;
    };

    $slnav.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $slpagination.eq(nowIdx).addClass('bar').siblings().removeClass('bar');

    $slidecon.stop().animate({
      left: -760 * nowIdx
    });
  });

  $next.on('click',function(evt){
    evt.preventDefault();

    if(nowIdx<4){
      nowIdx++;
    }else {
      nowIdx = 0;
    };

    $slnav.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $slpagination.eq(nowIdx).addClass('bar').siblings().removeClass('bar');


    $slidecon.stop().animate({
      left: -760 * nowIdx
    });
  });

  $slpagination.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $slpagination.index(this);
    $slnav.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $slpagination.eq(nowIdx).addClass('bar').siblings().removeClass('bar');
    
    $slidecon.stop().animate({
      left: -760 * nowIdx
    });
  });

});

//캐릭터 소개

$(function(){

  const $chars = $('.profile > div');
  const $charnav = $('.profile > ol > li');

  const $profilePrev = $('.file_prev');
  const $profileNext = $('.file_next');

  let mainIdx = 0; //메인 네비게이션 인덱스번호
  let subIdx = 0; //서브 네비게이션 인덱스 번호

  //메인 네비게이션 click 이벤트 구문

  $charnav.on('click',function(evt){
    const fadeFn = function(){
      $frame.eq(subIdx).stop().fadeIn(300).siblings().removeClass('on').fadeOut(300);
      $script.eq(subIdx).stop().fadeIn(300).siblings().fadeOut(300);
    }
    evt.preventDefault();

    mainIdx = $charnav.index(this);
    subIdx = 0;

    $charnav.eq(mainIdx).addClass('on').siblings().removeClass('on');
    $chars.eq(mainIdx).show().siblings('div').hide();

    const $frame = $chars.eq(mainIdx).find('p');
		const $script = $chars.eq(mainIdx).find('ul').last().children('li');
    
    fadeFn();

    const $subnav = $chars.eq(mainIdx).find('ul').first().find('a');

    //서브네비게이션에 대한 click 이벤트, 메인 네비게이션 이벤트 구문 안에 넣어서 안에서 맞물려서 돌아가게끔 함
    $subnav.on('click', function(evt){
      evt.preventDefault();

      subIdx = $subnav.index(this);

      $(this).parent().addClass('on').siblings().removeClass('on');

      fadeFn();
    });

    $subnav.eq(subIdx).trigger('click'); //강제 이벤트 발생
  });

  $charnav.eq(mainIdx).trigger('click'); //강제 이벤트 발생

  //이전버튼
  $profilePrev.on('click',function(evt){
    evt.preventDefault();

    if (subIdx > 0){
      subIdx--;
    }else{
      subIdx = 4;
    }

    $chars.eq(mainIdx).find('ul').first().find('a').eq(subIdx).trigger('click');
  });

  //다음버튼
  $profileNext.on('click',function(evt){
    evt.preventDefault();

    if(subIdx < 4){
      subIdx++;
    }else{
      subIdx = 0;
    }
    $chars.eq(mainIdx).find('ul').first().find('a').eq(subIdx).trigger('click');
  });
});

//미디어 라이트박스

//플레이버튼 누르면 라이트박스 발동, 유튜브에서 html 코드 가져와서 그림자 라이트박스로 뜨도록.

$(function(){

  const $kingdomMedia = $('.kingdom_media');
  const $lightbox = $('')
})