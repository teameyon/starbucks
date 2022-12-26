const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    // badgeEl.style.display = 'none';
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
   }else{
    //배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
   }
},300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });

});

//자바스크립트 new 생성자(class)
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
}); 
new Swiper('.promotion .swiper-container',{
  slidesPerView : 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// 토글버튼 시작
//.promotion 클래스를 찾아서 변수 promotionEl 에 할당해라.
const promotionEl = document.querySelector('.promotion');
// .toggle-promotion 클래스를 찾아서 변수 promotionToggleBtn 에 할당해라.
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 변수 isHidePromotion 값은 false 이다.
let isHidePromotion = false;
//protmoitonToggleBtn 을 클릭하면 함수를 실행하라.
promotionToggleBtn.addEventListener('click', function(){
//isHidePromotion 의 반대값을 다시 재할당해라
  isHidePromotion = !isHidePromotion; //특정변수값을 반대로 해당하는 값을 반환한다.
  if(isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide'); //hide 라는 클래스를 추가해라
  } else {
    //보임처리
    promotionEl.classList.remove('hide'); //hide 클래스를 삭제해라.
  };
});

//오브젝트 3개 위아래로 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), 
    {//옵션
      y: size, //사이즈 매개변수로 받음.
      repeat: -1,//무한반복
      yoyo: true,//위아래로 움직임
      ease: Power1.easeInOut,//easing
      delay: random(0, delay) //지연시간
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic //생성자 함수, 메소드 체이닝 형태
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8, //viewport를 최상단(0) ~ 최하단(1) 로 판단해서 위치 지정값 사용.-중간 0.5
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});