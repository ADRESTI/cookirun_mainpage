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


//slide
$(function(){

  const $slnav = $('.slides > .slides_nav > li > a');
  const $slidecon = $('.slides > .slides_container > .contents');
  const $prev = $('.prev');
  const $next = $('.next');
  const $slpagination = $('.slides > .slides_pagination > span');

  let intervalKey = null;
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

  const $charnav = $('.profile > ol > li');

  const $hero = $('.hero');
  const $brave = $('.brave');
  const $legend = $('.legend');
  const $villain = $('.villain');

  const $heroIndicator = $('.hero_cookies > ul > li > a');
  const $heroframe = $('.hero_cookies > .cookies_frame > p');
  const $heroScript = $('.hero_script > li');

  const $profilePrev = $('.file_prev');
  const $profileNext = $('.file_next');

  let nowIdx = 0;

  $hero.show();
  $brave.hide();
  $legend.hide();
  $villain.hide();

  $heroframe.eq(nowIdx).show().siblings().removeClass('on');
  $heroScript.eq(nowIdx).show();
  $heroIndicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

  const fadeFn = function(){
    $heroIndicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

    $heroframe.eq(nowIdx).fadeIn(500).siblings().fadeOut(500);
    
    $heroScript.eq(nowIdx).addClass('on').siblings().removeClass('on');
    $heroScript.eq(nowIdx).fadeIn(500).siblings().fadeOut(500);
  }

  $heroIndicator.on('click',function(evt){
    evt.preventDefault();
    $heroIndicator.eq(nowIdx).addClass('on').siblings().removeClass('on');

    nowIdx = $heroIndicator.index(this);

    fadeFn();
  });

  $profilePrev.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx = 4;
    }

    fadeFn();
  });

  $profileNext.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx<4){
      nowIdx++;
    }else{
      nowIdx = 0;
    }
    fadeFn();
  });

  $charnav.on('click', function(evt){
    evt.preventDefault();

    nowIdx = $charnav.index(this);
    $charnav.eq(nowIdx).addClass('on').siblings().removeClass('on');
  });

  $charnav.eq(0).on('click',function(){

    $hero.show();
    $brave.hide();
    $legend.hide();
    $villain.hide();

    $heroframe.eq(nowIdx).show();
    $heroScript.eq(nowIdx).show();
    $heroIndicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
    const fadeFn = function(){
      $heroIndicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
      $heroframe.eq(nowIdx).fadeIn(500).siblings().fadeOut(500);
      
      $heroScript.eq(nowIdx).addClass('on').siblings().removeClass('on');
      $heroScript.eq(nowIdx).fadeIn(500).siblings().fadeOut(500);
    }
  
    $heroIndicator.on('click',function(evt){
      evt.preventDefault();
      $heroIndicator.eq(nowIdx).addClass('on').siblings().removeClass('on');
  
      nowIdx = $heroIndicator.index(this);
  
      fadeFn();
    });

    const heroIdx = 0;

    $profilePrev.on('click', function(evt){
      evt.preventDefault();
  
      if(heroIdx>0){
        heroIdx--;
      }else{
        heroIdx = 4;
      }
  
      fadeFn();
    });
  
    $profileNext.on('click', function(evt){
      evt.preventDefault();
  
      if(heroIdx > 4){
        heroIdx++;
      }else{
        heroIdx = 0;
      }

      fadeFn();
    });
  });

  $charnav.eq(1).on('click',function(){

    const $brave = $('.brave');
    const $braveIndicator = $('.brave_cookies > ul > li > a');
    const $braveframe = $('.brave_cookies > .cookies_frame > p');
    const $braveScript = $('.brave_script > li');

    let braveIdx = 0;

    $hero.hide();
    $brave.show();
    $legend.hide();
    $villain.hide();

    $braveframe.eq(braveIdx).show();
    $braveScript.eq(braveIdx).show().siblings().removeClass('on');
    $braveIndicator.eq(braveIdx).parent().addClass('on');

    const braveFn = function(){
      $braveIndicator.eq(braveIdx).parent().addClass('on').siblings().removeClass('on');
  
      $braveframe.eq(braveIdx).fadeIn(500).siblings().fadeOut(500);
  
      $braveScript.eq(braveIdx).addClass('on').siblings().removeClass('on');
      $braveScript.eq(braveIdx).fadeIn(500).siblings().fadeOut(500);
    };
  
    $braveIndicator.on('click',function(evt){
      evt.preventDefault();
      $braveIndicator.eq(braveIdx).parent().addClass('on').siblings().removeClass('on');
  
      braveIdx = $braveIndicator.index(this);
  
      braveFn();
    });

    $profilePrev.on('click', function(evt){
      evt.preventDefault();
  
      if(braveIdx>0){
        braveIdx--;
      }else{
        braveIdx = 4;
      }
  
      braveFn();
    });
  
    $profileNext.on('click', function(evt){
      evt.preventDefault();
  
      if(braveIdx<4){
        braveIdx++;
      }else{
        braveIdx = 0;
      }

      braveFn();
    });
  });

//전설쿠키
  $charnav.eq(2).on('click',function(){

    const $legendIndicator = $('.legend_cookies > ul > li > a');
    const $legendframe = $('.legend_cookies > .cookies_frame > p');
    const $legendScript = $('.legend_script > li');

    let legendIdx = 0;

    $hero.hide();
    $brave.hide();
    $legend.show();
    $villain.hide();

    $legendframe.eq(legendIdx).show();
    $legendScript.eq(legendIdx).show().siblings().removeClass('on');
    $legendIndicator.eq(legendIdx).parent().addClass('on');

    const legendFn = function(){
      $legendIndicator.eq(legendIdx).parent().addClass('on').siblings().removeClass('on');

      $legendframe.eq(legendIdx).fadeIn(500).siblings().fadeOut(500);

      $legendScript.eq(legendIdx).addClass('on').siblings().removeClass('on');
      $legendScript.eq(legendIdx).fadeIn(500).siblings().fadeOut(500);
    };

    $legendIndicator.on('click',function(evt){
      evt.preventDefault();
      $legendIndicator.eq(legendIdx).parent().addClass('on').siblings().removeClass('on');

      legendIdx = $legendIndicator.index(this);

      legendFn();
    });

    $profilePrev.on('click', function(evt){
      evt.preventDefault();

      if(legendIdx>0){
        legendIdx--;
      }else{
        legendIdx = 4;
      }

      legendFn();
    });

    $profileNext.on('click', function(evt){
      evt.preventDefault();

      if(legendIdx<4){
        legendIdx++;
      }else{
        legendIdx = 0;
      }

      legendFn();
    });
  });

  //악당쿠키
  $charnav.eq(3).on('click',function(){

    const $villainIndicator = $('.villain_cookies > ul > li > a');
    const $villainframe = $('.villain_cookies > .cookies_frame > p');
    const $villainScript = $('.villain_script > li');

    let villainIdx = 0;

    $hero.hide();
    $brave.hide();
    $legend.hide();
    $villain.show();

    $villainframe.eq(villainIdx).show();
    $villainScript.eq(villainIdx).show().siblings().removeClass('on');
    $villainIndicator.eq(villainIdx).parent().addClass('on');

    const villainFn = function(){
      $villainIndicator.eq(villainIdx).parent().addClass('on').siblings().removeClass('on');

      $villainframe.eq(villainIdx).fadeIn(500).siblings().fadeOut(500);

      $villainScript.eq(villainIdx).addClass('on').siblings().removeClass('on');
      $villainScript.eq(villainIdx).fadeIn(500).siblings().fadeOut(500);
    };

    $villainIndicator.on('click',function(evt){
      evt.preventDefault();
      $villainIndicator.eq(villainIdx).parent().addClass('on').siblings().removeClass('on');

      villainIdx = $villainIndicator.index(this);

      villainFn();
    });

    $profilePrev.on('click', function(evt){
      evt.preventDefault();

      if(villainIdx>0){
        villainIdx--;
      }else{
        villainIdx = 4;
      }

      legendFn();
    });

    $profileNext.on('click', function(evt){
      evt.preventDefault();

      if(villainIdx<4){
        villainIdx++;
      }else{
        villainIdx = 0;
      }

      villainFn();
    });
  });


});
