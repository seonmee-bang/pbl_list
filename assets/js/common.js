$(function(){
  //guide layout
  $('#checkbox a').click(function(){
    $('.contents').load('/sub/01_checkbox.html');
    return false;
  })
  $('#radio a').click(function(){
    $('.contents').load('/sub/02_radio.html');
    return false;
  })
  $('#tab a').click(function(){
    $('.contents').load('/sub/03_tab.html');
    return false;
  });
  $('#list a').click(function(){
    $('.contents').load('/sub/04_list.html');
    return false;
  });
  $('#swiper a').click(function(){
    $('.contents').load('/sub/05_swiper.html');
    return false;
  });
  $('#popup a').click(function(){
    $('.contents').load('/sub/06_popup.html');
    return false;
  });
  $('#button a').click(function(){
    $('.contents').load('/sub/07_button.html');
    return false;
  });
  $('#accordion a').click(function(){
    $('.contents').load('/sub/08_accordion.html');
    return false;
  });

  // 팝업열기
var $btnOpen = $('#btnOpen'),
    modalWrap = $('.modal_wrapper');
/////
function btnOpen(){
  var popBtn = $('#btnOpen'),
      modal = $('.modal_wrapper'), 
      btnClose = $('#popClose');

      popBtn.on('click',function(){
        modal.css('display','block');
      });
      btnClose.on('click',function(){
        modal.hide();
      });
      
      modal.on('click',function(){
        if ($('.modal_wrapper').is($('.modal_wrapper'))){
          
          $('.modal_wrapper').hide();
        }
      });
      console.log(e.target)
     
}
btnOpen();
//라디오 체크 별 show, hide
$('input[name=radio6]').click(function(){
  if($(this).attr('value')=='단독명의'){
    $('.join_contract_wrap').hide()
  }else if($(this).attr('value')=='공동명의'){
    $('.join_contract_wrap').show();
  }
});

// TAB
var tabsBtn = $('.tab_menu li a'),
    tabPanner = $('.tab_panner li');

    tabsBtn.on('click',function(e){
      e.preventDefault();
      tabsBtn.removeClass('active');
      $(this).addClass('active');

      tabPanner.hide();
      var $target = $(this).attr('href');
      $($target).css('display','block');
    });
    
  //  accordion Type1
  function accordion(){
    var accordionBtn = $('.accordion li a'),
    accordionCont = $(".accordion li div");
        accordionBtn.on('click',function(){
          $(this).next('div').toggle('on');
        });
  }
  accordion();



  //test
$(function(){
  $('#btn1').on('click',function(){
    $('#test1').attr('href',function(i, origValue){
      return origValue + '/jquery';
    });
    return
  });
});
  





  });


