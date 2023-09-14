$(document).ready(function(){
  // slide
  $('.prd_list').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    dots: true,
    arrows : false,
    autoplaySpeed: 1000,
    speed: 1000,
    pauseOnHover: true,
  });

  $('.news_list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows : false,
    autoplaySpeed: 1000,
    speed: 1000,
    pauseOnHover: true,
  });
});

// 메뉴 클릭 시 오픈
var menuClick = function(){
  if($(".gnb").hasClass("on")){
    $(".gnb").removeClass("on");
    $(".wrap").removeClass("move");
  }else{
    $(".gnb").addClass("on");
    $(".wrap").addClass("move");
  }
}
$(document).on("click", ".menu_trigger", function(){
  menuClick();
});

// 서비스 클릭 시 동작
var serClick = function(){
  if($(".c_service").hasClass("open")){
    $(".c_service").slideUp(500, function(){
      $(".c_service").removeClass("open")
    });
  }else{
    $(".c_service").slideDown(500, function(){
      $(".c_service").addClass("open")
    });
  }
};

$(document).on("click", ".btn_service", function(){
  serClick();
});

// depth2 클릭 시 오픈 (attr 이용)
$(document).ready(function(){
  $(".depth1 a").on("click", function(){
    var tab = $(this).attr("data-tab");
    
    $(".depth1 a").removeClass("active");
    $(".depth2").removeClass("active");
    

    $(this).addClass("active");
    $("#"+tab).addClass("active");
  });

  $(".btn_close").on("click", function(){
    $(".depth2").removeClass("active");
  })
});


// sub_depth2 아코디언
$(document).ready(function(){
  $(".sub_tit").on("click", function(){
    $(".sub_depth2").slideUp();
    if($(this).children(".sub_depth2").is(":hidden")){
      $(this).children(".sub_depth2").slideDown(); 
    }else{
      $(this).children(".sub_depth2").slideUp();
    }
  })
})


// 
    // var $depth2B = $('.depth2_box');
    // var $depth2Li = $('.depth2 > li');

    // // depth1
    // $('.depth1_box li').on('click', function(){
    //     var $index = $(this).index();

    //     $depth2B.addClass('active');
    //     $depth2Li.eq($index).addClass('active');
    // });

    // // depth2
    // $('.btn_close').on('click', function(){
    //     $(this).closest('div').removeClass('active');
    //     $depth2Li.removeClass('active');
    // });

    // // depth3
    // $('.depth3 li').on('click', function(){
    //     var $this = $(this);

    //     $this.toggleClass('active');
    // });
// 



