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
  const $mnu = $('header > .kingdom_nav > ul > li > a');

  const arrTopVal = [];
  let nowIdx = null;

  if($mnu.parent().first('li')){
    $('html,body').animate({scrollTop:0},)
  }

  for(let i=0;i<$mnu.length;i++){
    arrTopVal[i] = $('section').eq(i).offset()
  }

  console.log('arrTopVal =', arrTopVal);

})



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