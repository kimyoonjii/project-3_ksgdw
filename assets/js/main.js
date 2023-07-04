$(function(){

//header
$('.header .menu-area .menu-list .menu-item').mouseover(function(){
    $('header').addClass('on')
    $('.header .menu-area .sub-menu').addClass('on');
})

$('.header').mouseleave(function(){
  $('header').removeClass('on')
  $('.header .menu-area .sub-menu').removeClass('on');
})

//햄버거버튼 클릭
$('.hbg-btn').click(function(e){
  e.preventDefault();
  
  $('.mobile-menu').addClass('on')
})

$('.mobile-menu .close').click(function(e){
  e.preventDefault();

  $('.mobile-menu').removeClass('on')
})

//모바일 서브메뉴 클릭
$('.header .mobile-menu .group-menu .menu-item .nav').click(function(e){
  e.preventDefault();

  if ($(this).hasClass('on')) { //또클릭
    $(this).removeClass('on').siblings('.sub').slideUp();
    
  } else { //첫클릭
    $('.header .mobile-menu .group-menu .menu-item .nav').removeClass('on').siblings('.sub').slideUp();
    $(this).addClass('on').siblings('.sub').slideDown();
  }
})




//sc-visual slide
mainSlide = new Swiper('.main-slide',{
  touchRatio:0, //터치의 각도를 막는다. 손으로 안됨 
  effect:"fade",

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation:{
    nextEl:".main-slide .next",
    prevEl:".main-slide .prev"
  },

  pagination: {
    el: ".pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  on:{
    "init":function(){ //초기세팅
      // console.log(this.slides.length); //슬라이드 개수 구하기
      $('.curr').text('01') //항상 1
      $('.total').text(`0${this.slides.length}`).css('color', '#ccc')
    },
    "slideChange":function(){ //슬라이드가 바꼈을때 이벤트
      $('.curr').text(`0${this.realIndex+1}`).css('color', '#000');//realIndex를 주면 0,1,2라고 나오기때문에 뒤에 +1을쓴다
      
    }
  }
})

//정지버튼 클릭
$('.sc-visual .control-area .autoplay').click(function(){

  if ($(this).find('i').hasClass('fa-play')) {
    $(this).find('i').removeClass('fa-play').addClass('fa-pause');
    mainSlide.autoplay.start()
  } else {
    //fa-pause 빼고 fa-play로 바꿔줘
    $(this).find('i').removeClass('fa-pause').addClass('fa-play');
    mainSlide.autoplay.stop()
  }
})




//탭 슬라이드
mainSlide1 = new Swiper('.collection-slide.slide1',{
  slidesPerView: '1.3',
  spaceBetween:10,
  loop: true, //무한반복
  navigation:{
    nextEl:"#tabCon1 .next",
  },
  breakpoints: {       
    768: {
      slidesPerView: 1.2,  //브라우저가 768보다 클 때
    },
    1000: {
      slidesPerView: 'auto',  //브라우저가 1024보다 클 때
    },
  },
})

mainSlide1 = new Swiper('.collection-slide.slide2',{
  slidesPerView: 'auto',
  loop: true, //무한반복
  navigation:{
    nextEl:"#tabCon2 .next",
  },
})
mainSlide1 = new Swiper('.collection-slide.slide3',{
  slidesPerView: 'auto',
  loop: true, //무한반복
  navigation:{
    nextEl:"#tabCon3 .next",
  },

})
mainSlide1 = new Swiper('.collection-slide.slide4',{
  slidesPerView: 'auto',
  loop: true, //무한반복
  navigation:{
    nextEl:"#tabCon4 .next",
  },
})
mainSlide1 = new Swiper('.collection-slide.slide5',{
  slidesPerView: 'auto',
  loop: true, //무한반복
  navigation:{
    nextEl:"#tabCon5 .next",
  },
})




//sc-collection 탭
$('.brand-tab .tab-item .item').click(function(e){
  e.preventDefault();

  fisrtEl = $(this).parent().find('.category-tab li:first-child a')
  target = fisrtEl.attr('href');

  tabName = $(this).data('tab')

  $(this).parent().addClass('on').siblings().removeClass('on'); //내가 선택한 나의 부모에 on을 붙여줘,형제는 on을 떼줘
  $(tabName).addClass('on').siblings().removeClass('on');

  //초기화 첫번째 탭 열기
  $('.category-tab a').removeClass('on'); //전체에 on을 다 제거
  $(this).parent().find('.category-tab li:first-child a').addClass('on');//나의 부모의 find로 찾고 그거에 첫번째 a한테 o을 붙여줘


  //내용 초기화 후 첫번째 열기
  $('.collection-cont > *').removeClass('on'); //누를때마다 제거가 되고 효과가 들어감
  $('.sc-collection .tab-con .con').removeClass('on');
  $(target).addClass('on');
  
  setTimeout(() => {
    $(target).find('.collection-cont>*').addClass('on')
  }, 100);
})




$('.category-tab a').click(function(e){
  e.preventDefault();

  //내가 클릭한 탭의 콘텐츠가 나오게
  target=$(this).attr('href');


  $('.category-tab a').removeClass('on'); //전체 on다 떼준다
  $(this).addClass('on'); //내가 선택한거에 on을 붙여준다
  

  $('.tab-item').removeClass('on');
  $(this).parent().parent().parent().addClass('on');

  //내가 클릭한 탭의 콘텐츠가 나오게
  $('.collection-cont > *').removeClass('on'); //누를때마다 제거가 되고 효과가 들어감
  $('.sc-collection .tab-con .con').removeClass('on');//전체 on다 떼준다
  
  $(target).addClass('on');
  setTimeout(() => {
    $(target).find('.collection-cont>*').addClass('on')
  }, 100);
})






//top 버튼
$('.top-bnt').click(function(){
  window.scrollTo({top:0,behavior:"smooth"})
})

//family-site
$('.family-site-title').click(function(e){
  e.preventDefault();

  $('.group-family-site .family-box').addClass('on');
})

$('.group-family-site .close').click(function(){

  $('.group-family-site .family-box').removeClass('on');
})


// gsap

//sc-collection 효과
tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-collection",
    start:"0% 80%",
    end:"100% 50%",
    // markers:true,
    toggleActions:"play pause resume reset" //도달하면 재실행
  },
})
tl1
.addLabel('a')
.from('.sc-collection .headline',{ yPercent:50,opacity:0 },'a')
.from('.sc-collection .brand-tab',{ yPercent:15,opacity:0 },'a')


//sc-collection 효과
ScrollTrigger.create({
  trigger:".tab-con .collection-cont",
   start:"0% 80%",
   end:"100% 50%",
   onEnter:function(){ //도달했을때
    $('#tabCon1 .collection-cont > *').addClass('on')
   }
})

tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-news",
    start:"0% 80%",
    end:"100% 50%",
    // markers:true,
    toggleActions:"play pause resume reset"
  },
})

tl3
.addLabel('a')
.from('.sc-news .headline',{ yPercent:10,opacity:0 },'a')
.from('.sc-news .text',{ yPercent:15,opacity:0 },'a')
.from('.sc-news .news-cont',{ yPercent:18,opacity:0 },'a')



tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-sns",
    start:"0% 100%",
    end:"100% 50%",
    // markers:true,
    toggleActions:"play pause resume reset"
  },
})

tl4
.addLabel('a')
.from('.sc-sns .headline',{ yPercent:10,opacity:0 },'a')
.from('.sc-sns .text',{ yPercent:15,opacity:0 },'a')





})//지우지마세요