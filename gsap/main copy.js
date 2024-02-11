gsap.registerPlugin(ScrollTrigger);
const select = (e) => document.querySelector(e);
selectAll = (e) => document.querySelectorAll(e);

// start переменные
progresLine = select(".loader-green-line");
logoLottie = select(".lottie-wrapper");
loaderWrap = select(".loader")
let mmAbautTab = gsap.matchMedia();
let mm = gsap.matchMedia();
navBar = select(".nav");
let mmApproach = gsap.matchMedia();
logoWrap = select(".logo-wrapper");
let menuToogle = select(".nav-btn-wrap");
let work = false;
const menuOpen = gsap.timeline({ paused: "true", reversed: "true" });
 // end переменные

 // start функции


  function init() {
    headerAnimate();
    //trysyGsap();
    navColorBgLight();
    callItems();
    cookies();
    insightLinksItemFunc();
    bigLinksFunc();
    mainNavLinksFunc();
    footerLinksFunc();
    initLoader();
    navColorBg();
    navChanceColor();
    mmAbautTabFunc800();
    mmAbautTabFunc();
    mmApproach799();
    mmApproach800();
    pin();
    pinWork();
    moveReting();
    moveLogoPattern();
    cursor1();
    cursor();
    navColorBgLight();
    navColorBg1();
    splideInit();
    isughtsItemAn();
    sliderMainFunc();
    touchs();
    initAwardsHover();
    splideSlide992();
    initImageParallax();
    moveRect();
    mmParalax();
    moveLogoPattern1();
    moveLogoEmeil1();
    moveLogoEmeil();
    workGrids();
    splideCards();
    //navColorBg2();
    menuLogic();
  }


  function scroolSpeed(num){
    if(window.innerWidth > 1920){
      return num * window.innerWidth / 1920;
    } else{
      return  num;
    }
  } 



  function headerAnimate(){
    const header = document.querySelector(".nav");
    let lastScroll = 0;
    const defaultOffset = 0;

    if(!header){
      return;
    }
    
    scrollPosition = () =>
      window.pageYOffset || document.documentElement.scrollTop,
    containHide = () => header.classList.contains("hide");
    window.addEventListener("scroll", () => {
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
      ? header.classList.add("hide")
      : scrollPosition() < lastScroll &&
        containHide() &&
        header.classList.remove("hide"),
      (lastScroll = scrollPosition());
    });
  }


  function trysyGsap(){
    const allTrysy = document.querySelectorAll(".moving-text-wrapp");

    if(allTrysy.length == 0){
      return;
    }

    for(let i = 0; i < allTrysy.length; i++){
      allTrysy[i].classList.add("moving-text-wrapp" + i);
      if(allTrysy[i].querySelector(".we-do-email-item_wrap")){
        allTrysy[i].querySelector(".we-do-email-item_wrap").classList.add("we-do-email-item_wrap" + i);
      }
    
      let e = gsap.timeline({
        scrollTrigger: {
          trigger: ".moving-text-wrapp" + i,
          start: "top bottom",
          end: "bottom top-=200%",
          scrub: 1,
        },
      });
      e.to(".we-do-email-item_wrap" + i, { xPercent: scroolSpeed(-25) });
    }
  }


  function navColorBgLight() {
    if(!navBar){
      return;
    }
    ScrollTrigger.create({
      trigger: "[hero-light]",
      start: "bottom top",
      onEnter: function () {
        navBar.classList.add("white-bg");
      },
      onEnterBack: function () {
        navBar.classList.remove("white-bg");
      },
    });
  }


  function callItems(){
    let callItem = gsap.utils.toArray(".call-item"),
    infoCallItem = gsap.utils.toArray(".call-info-item");
    if(!callItem && !infoCallItem){
      return;
    }
    if(!infoCallItem[0]){
      return;
    }
    infoCallItem[0].classList.add("is-active"),
      callItem[0].classList.add("is-active"),
      callItem.forEach((t, o) => {
        t.addEventListener("mouseenter", (e) => {
          infoCallItem.forEach((e) => {
            e.classList.remove("is-active");
          }),
            callItem.forEach((e) => {
              e.classList.remove("is-active");
            }),
            t.classList.add("is-active"),
            infoCallItem[o].classList.add("is-active");
        });
      });
  }
  

  const addActiveClass = (e) => {
      e.classList.add("is-active");
  };


  function cookies(){
    cookiesBtn = document.querySelector(".cookies-btn"),
    cookiesClose = document.querySelector(".cookies-close"),
    cookies = document.querySelector(".cookies");
    if(!cookiesBtn && !cookiesClose && !cookies){
      return;
    }
    cookiesBtn.addEventListener("click", () => {
      addActiveClass(cookies);
    }),
    cookiesClose.addEventListener("click", () => {
      addActiveClass(cookies);
    });
  }

  function insightLinksItemFunc(){
    const insightLinksItem = gsap.utils.toArray(".insights-link");
    if(!insightLinksItem){
      return;
    }
    insightLinksItem.forEach((t) => {
      t.addEventListener("mouseleave", (e) => {
        t.classList.add("animate-out"),
          setTimeout(() => {
            t.classList.remove("animate-out");
          }, 300);
      });
    });
  }


  function bigLinksFunc(){
    bigLinksItem = gsap.utils.toArray(".link-big");
    if(!bigLinksItem){
      return;
    }
    bigLinksItem.forEach((t) => {
      t.addEventListener("mouseleave", (e) => {
        t.classList.add("animate-out"),
          setTimeout(() => {
            t.classList.remove("animate-out");
          }, 300);
      });
    });
  }


  function mainNavLinksFunc(){
    const mainNavLinks = gsap.utils.toArray(".menu_btn span");
    if(!mainNavLinks){
      return;
    }
    mainNavLinks.forEach((t) => {
      t.addEventListener("mouseleave", (e) => {
        t.classList.add("animate-out"),
          setTimeout(() => {
            t.classList.remove("animate-out");
          }, 300);
      });
    });
  }
 

  function footerLinksFunc(){
    footerLinksItem = gsap.utils.toArray(".footer-link");
    if(!footerLinksItem){
      return;
    }
    footerLinksItem.forEach((t) => {
      t.addEventListener("mouseleave", (e) => {
        t.classList.add("animate-out"),
          setTimeout(() => {
            t.classList.remove("animate-out");
          }, 300);
      });
    });
  }

  console.log("fdfdfd" + localStorage.getItem("visit"));


function initLoader() {
  if(!document.querySelector(".loader")){
    return;
  }
  var r = selectAll("[loading-text]"),
    a = selectAll("[hero-up]"),
    e = localStorage.getItem("visit");
  if ((console.log(e), "1" === e)) {
    if(!document.querySelector(".loader-center-content") && !document.querySelector(".loader-green-line") && !progresLine && !loaderWrap && !logoLottie && !document.querySelector(".loader-up-text-wrap") && !document.querySelector(".loader-center-content") && !document.querySelector(".loader-down-content")){
      return;
    }
    gsap.set(".loader-green-line", { autoAlpha: 0 });
    let e = gsap.timeline({
      default: { duration: 0.8, ease: "power.out" },
      onStart: () => lenis.stop(),
      onComplete: function () {
        select("body").classList.remove("is-loading");
        pin();
        navColorBg();
        navChanceColor();
        moveReting();
        moveLogoPattern();
        cursor();
      },
    });
    e.to(
      ".loader-center-content",
      { autoAlpha: 1, duration: 2, ease: "none" },
      "<"
    );
    let t = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.6 },
      onComplete: () => lenis.start(),
    });

    t.to(r, { yPercent: -100, transformOrigin: "bottom", stagger: 0.2 });
    if(progresLine && logoLottie){
      t.to([progresLine, logoLottie], { autoAlpha: 0, duration: 0.8 }, 0);
    }
    if(loaderWrap){
      t.to(loaderWrap, { yPercent: -100 });
    }
      t.from(a, { y: 80, stagger: 0.1 }, "<-=10%");
    let o = gsap.timeline();
    o.add(e), o.add(t);
  } else {
    if(!progresLine && !loaderWrap && !logoLottie && !document.querySelector(".loader-up-text-wrap") && !document.querySelector(".loader-center-content") && !document.querySelector(".loader-down-content")){
      return;
    }
    localStorage.setItem("visit", "1");
    let e = gsap.timeline({
      default: { duration: 1.1, ease: "power2.out" },
      onStart: () => lenis.stop(),
      onComplete: function () {
        select("body").classList.remove("is-loading");
          pin();
          navColorBg();
          moveReting();
          moveLogoPattern();
          moveLogoPattern1();
          cursor();
      },
    });
    e.to(
      [
        ".loader-up-text-wrap",
        ".loader-center-content",
        ".loader-down-content",
      ],
      { autoAlpha: 1, duration: 1, ease: "none" },
      "<"
    ),
      e.from(progresLine, { scaleX: 0, transformOrigin: "left", duration: 5 });
    let t = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.8 },
      onComplete: () => lenis.start(),
    });
    t.to(r, { yPercent: -100, transformOrigin: "bottom", stagger: 0.2 }),
      t.to([progresLine, logoLottie], { autoAlpha: 0, duration: 0.8 }, 0),
      t.to(loaderWrap, { yPercent: -100 }),
      t.from(a, { y: 80, stagger: 0.1 }, "<-=10%");
    let o = gsap.timeline();
    o.add(e), o.add(t);
  }
}


function navColorBg() {
  if(!document.querySelector(".nav")){
    return;
  }
  ScrollTrigger.create({
    trigger: "[hero]",
    start: "bottom-=10% top",
    onEnter: function () {
      document.querySelector(".nav").classList.add("white-bg");
    },
    onEnterBack: function () {
      document.querySelector(".nav").classList.remove("white-bg");
    },
  });
}


function navChanceColor() {
  if(!document.querySelector(".logo-wrapper") && !document.querySelector(".nav-btn-wrap")){
    return;
  }
  gsap.utils.toArray("[section-dark]").forEach((e) => {
    ScrollTrigger.create({
      trigger: e,
      start: "top 10%",
      end: "bottom 10%",
      onEnter: function () {
        document.querySelector(".logo-wrapper").classList.add("dark-nav"),
          document.querySelector(".nav-btn-wrap").classList.add("dark-nav");
      },
      onEnterBack: function () {
        document.querySelector(".logo-wrapper").classList.add("dark-nav"),
          document.querySelector(".nav-btn-wrap").classList.add("dark-nav");
      },
    });
  }),
    gsap.utils.toArray("[section-light]").forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 10%",
        end: "bottom 10%",
        onEnter: function () {
          document.querySelector(".logo-wrapper").classList.remove("dark-nav"),
            document
              .querySelector(".nav-btn-wrap")
              .classList.remove("dark-nav");
        },
        onEnterBack: function () {
          document.querySelector(".logo-wrapper").classList.remove("dark-nav"),
            document
              .querySelector(".nav-btn-wrap")
              .classList.remove("dark-nav");
        },
      });
    });
}


function mmAbautTabFunc800(){
  if(!document.querySelector(".abaut_item-subtitle")){
    return;
  }
  mmAbautTab.add("(min-width: 800px)", () => {
    let e = selectAll(".abaut_item-subtitle");
    e.forEach((t) => {
        t.itemWrap = t.querySelector(".abaut_tab-sub");
        var e = t.querySelectorAll(".tab-link a"),
        o = t.querySelectorAll(".line-dotter"),
        r = t.querySelectorAll(".line-solid");
        let a = t.querySelector(".plusminus"),
        s = !1;
        if(e && o && r && a){
        i = gsap.timeline({ paused: "true", reversed: "true" });
        i.to(e, { x: 20, duration: 0.6, color: "#25CE5", ease: "power2.out" }),
        i.to(o, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
        i.to(r, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
        t.addEventListener("mouseenter", () => {
          s || i.play();
        }),
        t.addEventListener("mouseleave", () => {
          s || i.reverse();
        }),
        t.addEventListener("click", () => {
          i.reversed(!1).pause(), a.classList.toggle("active");
          let e = t.itemWrap;
          e.style.maxHeight
            ? (e.style.maxHeight = null)
            : (e.style.maxHeight = e.scrollHeight + "px"),
            console.log(e),
            s ? (s = !1) : ((s = !0), i.progress(1));
        });
      }
    });
  });
}

function mmAbautTabFunc(){
  if(!document.querySelector(".abaut_item-subtitle")){
    return;
  }
  mmAbautTab.add("(max-width: 800px)", () => {
    let e = selectAll(".abaut_item-subtitle");
    e.forEach((t) => {
      t.itemWrap = t.querySelector(".abaut_tab-sub");
      t.querySelectorAll(".tab-link a"),
        t.querySelectorAll(".line-dotter"),
        t.querySelectorAll(".line-solid");
      let o = t.querySelector(".plusminus");
      if(o && t){
        t.addEventListener("click", () => {
          o.classList.toggle("active");
          let e = t.itemWrap;
          e.style.maxHeight
            ? (e.style.maxHeight = null)
            : (e.style.maxHeight = e.scrollHeight + "px");
        });
      }
    });
  });

}
  

function mmApproach799(){
  if(!document.querySelector(".approach-tab-item") && !document.querySelector(".abaut_left-blok") && !document.querySelector(".approach-item-content")){
    return;
  }
  mmApproach.add("(min-width: 800px)", () => {
    let e = selectAll(".approach-tab-item");
    e.forEach((t) => {
      t.itemWrap = t.querySelector(".approach-item-content");
      var e = t.querySelectorAll(".approach-item-up .is-h3"),
        o = t.querySelectorAll(".line-dotter"),
        r = t.querySelectorAll(".line-solid");
      t.itemWrap;
      let a = t.querySelector(".plusminus"),
        s = t.querySelector(".item-icon-text"),
        i = t.querySelector(".item-icon-text_close"),
        l = !1;
        if(e && o && r && a && s && i){
          n = gsap.timeline({ paused: "true", reversed: "true" });
          n.to(e, { x: 20, duration: 0.6, color: "#25CE5", ease: "power2.out" }),
          n.to(o, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
          n.to(r, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
          t.addEventListener("mouseenter", () => {
            l || n.play();
          }),
          t.addEventListener("mouseleave", () => {
            l || n.reverse();
          }),
          t.addEventListener("click", () => {
            n.reversed(!1).pause(),
              a.classList.toggle("active"),
              s.classList.toggle("active"),
              i.classList.toggle("active");
            let e = t.itemWrap;
            e.style.maxHeight
              ? (e.style.maxHeight = null)
              : (e.style.maxHeight = e.scrollHeight + "px"),
              console.log(e),
              l ? (l = !1) : ((l = !0), n.progress(1));
          });
        }
    });
  });

}

function mmApproach800(){
  if(!document.querySelector(".approach-tab-item") && !document.querySelector(".abaut_left-blok")){
    return;
  }
  mmApproach.add("(max-width: 799px)", () => {
    let e = selectAll(".approach-tab-item");
    e.forEach((t) => {
      t.itemWrap = t.querySelector(".approach-item-content");
      if(t){
        t.querySelectorAll(".approach-item-up .is-h3"),
        t.querySelectorAll(".line-dotter"),
        t.querySelectorAll(".line-solid"),
        t.itemWrap;
        let o = t.querySelector(".plusminus"),
        r = t.querySelector(".item-icon-text"),
        a = t.querySelector(".item-icon-text_close");
        if(o && r && a){
          t.addEventListener("click", () => {
            o.classList.toggle("active"),
            r.classList.toggle("active"),
            a.classList.toggle("active");
            let e = t.itemWrap;
            e.style.maxHeight
            ? (e.style.maxHeight = null)
            : (e.style.maxHeight = e.scrollHeight + "px");
          });
        }
      }
    });
  });
}


function pin() {
  if(!document.querySelector(".abaut-right-wrapper") && !document.querySelector(".abaut_left-blok")){
    return;
  }
  ScrollTrigger.create({
    trigger: ".abaut-right-wrapper",
    start: "top 20%",
    endTrigger: ".abaut_left-blok",
    end: "bottom-=30% center",
    pin: !0,
    pinSpacing: !1,
  });
}


function pinWork() {
  if(!document.querySelector(".work-section") && !document.querySelector(".rating-section") && !document.querySelector(".approach-section") &&  !document.querySelector(".clients-section")){
    return;
  }
  let e = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "bottom bottom",
      scrub: !0,
    },
  });
  e.to([".rating-section", ".approach-section", ".clients-section"], {
    yPercent: -100,
  });
}


function moveReting() {
  if(!document.querySelector(".approach-oberlay-wrap") && !document.querySelector(".rating-logo-wrap")){
    return;
  }
  let e = gsap.timeline({
    scrollTrigger: {
      trigger: ".approach-oberlay-wrap",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  e.to(".rating-logo-wrap", { x: 300 });
}


function moveLogoPattern() {
  if(!document.querySelector(".call-section-sticky") && !document.querySelector(".call-bg-logo-wrap")){
    return;
  }
  let e = gsap.timeline({
    scrollTrigger: {
      id: "Pattern",
      trigger: ".call-section-sticky",
      start: "top bottom",
      end: "bottom+=50% top",
      scrub: 2,
    },
  });
  e.to(".call-bg-logo-wrap", { xPercent: scroolSpeed(28), transformOrigin: "right center" });
}


function cursor1() {
  var e = document.querySelectorAll(".splide"),
    t = document.querySelectorAll(".works-link_current.project");
    console.log(23);
    r = document.getElementById("cursor");
    console.log(23);
    if(!e && !t && !r){
      return;
    }
  e.forEach(function (e) {
    if(r){
      e.addEventListener("mouseenter", function () {
        r.classList.add("drag-cursor");
      });
    }
  }),
    t.forEach(function (e) {
      if(r){
      e.addEventListener("mouseenter", function () {
        r.classList.toggle("drag-cursor");
      }),
        e.addEventListener("mouseleave", function () {
          r.classList.toggle("drag-cursor");
        });
      }
    });
    if(document.querySelector(".splide")){
    document
      .querySelector(".splide")
      .addEventListener("mouseleave", function () {
        r.classList.remove("drag-cursor");
      });  
    }
}


function cursor() {
  if(!document.querySelector(".slider-main-component")){
    return;
  }
  $(".slider-main-component").mouseenter(function () {
    $("#cursor").addClass("drag-cursor");
  }),
    $(".slider-main-component").mouseleave(function () {
      $("#cursor").removeClass("drag-cursor");
    });
}


function navColorBgLight() {
  if(!navBar){
    return;
  }
  ScrollTrigger.create({
    trigger: "[hero-light]",
    start: "bottom top",
    onEnter: function () {
      navBar.classList.add("white-bg");
    },
    onEnterBack: function () {
      navBar.classList.remove("white-bg");
    },
  });
}


function navColorBg1() {
  if(!navBar){
    return;
  }
  ScrollTrigger.create({
    trigger: "[hero-dark]",
    start: "bottom top",
    onEnter: function () {
      navBar.classList.add("white-bg"), navBar.classList.remove("nav-for-dark");
    },
    onEnterBack: function () {
      navBar.classList.remove("white-bg"), navBar.classList.add("nav-for-dark");
    },
  });
}


function splideInit(){
  if(!select(".splide")){
    return;
  }
  document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
      type: "loop",
      drag: "free",
      gap: "1.94rem",
      autoWidth: !0,
      arrows: !1,
      pagination: !1,
    }).mount();
  });
}


function isughtsItemAn(){
  if(!document.querySelector(".isughts-item") && !document.querySelector(".image-content-block img")){
    return;
  }
    let insightItem = selectAll(".isughts-item");
    imgInsight = selectAll(".image-content-block img");
  gsap.set(imgInsight, { scale: 1.02, transformOrigin: "center center" }),
    insightItem.forEach((e) => {
      var t = e.querySelector(".image img");
      let o = e.querySelector(".is-h3");
      if(o && t){
        r = e.querySelector(".insights-link"),
        a = gsap.timeline({ paused: "true", reversed: "true" });
      a.to(t, { scale: 1, duration: 0.8, ease: "power.inOut" }),
        e.addEventListener("mouseenter", () => {
          a.play(),
            o.classList.add("title-underline"),
            r.classList.add("link-underline");
        }),
        e.addEventListener("mouseleave", () => {
          a.reverse(),
            r.classList.remove("link-underline"),
            o.classList.remove("title-underline");
        });
      }
    });
 
}




function sliderMainFunc(){
  if(!document.querySelector(".slider-main-component") && !document.querySelector(".swiper")){
    return;
  }
  $(".slider-main-component").each(function (e) {
    let t = !1;
    "true" === $(this).attr("loop-mode") && (t = !0);
    let o = 300;
    void 0 !== $(this).attr("slider-duration") &&
      (o = +$(this).attr("slider-duration"));
    new Swiper($(this).find(".swiper")[0], {
      speed: o,
      loop: t,
      autoHeight: !1,
      centeredSlides: t,
      followFinger: !0,
      freeMode: !1,
      slideToClickedSlide: !1,
      slidesPerView: 1,
      spaceBetween: "4%",
      rewind: !1,
      mousewheel: { forceToAxis: !0 },
      keyboard: { enabled: !0, onlyInViewport: !0 },
      breakpoints: {
        480: { slidesPerView: 1, spaceBetween: "4%" },
        768: { slidesPerView: 2, spaceBetween: "4%" },
        992: { slidesPerView: 4, spaceBetween: "2%" },
      },
      scrollbar: {
        el: ".swiper-drag-wrapper",
        draggable: !0,
        dragClass: "swiper-drag",
        snapOnRelease: !0,
      },
    });
  });
}
 

function touchs(){
  if(!document.querySelector("[touch=btn]") && !document.querySelector("[touch=close]")){
    return;
  }
  let btnTouch = document.querySelector("[touch=btn]");
    btnTouch.addEventListener("click", function () {
      let e = document.querySelector(".touch-form-section");
      e.classList.add("is-active");
    });

    closeTouch = document.querySelector("[touch=close]");
    closeTouch.addEventListener("click", function () {
      let e = document.querySelector(".touch-form-section");
      e.classList.remove("is-active");
    });
  
}

  
function initAwardsHover() {
  allImg = gsap.utils.toArray(".awards-media"),
  largeImage = document.querySelector("[awards-media]"),
  lInside = document.querySelector(".image .image_inside");
  let allLink = gsap.utils.toArray(".awards-link_wrap");
  if(!allImg && !largeImage && !lInside && !allLink){
    return;
  }
    allLink.forEach((e, o) => {
      e.addEventListener("mouseenter", function (e) {
        if ("mouseenter" === e.type) {
          const t = gsap.timeline();
          t.to(largeImage, { autoAlpha: 1 }),
            t.to(allImg[o], { autoAlpha: 1 }, "<");
        } else if ("mouseleave" === e.type) {
          const r = gsap.timeline();
          r.to(largeImage, { autoAlpha: 0 }),
            r.to(allImg[o], { autoAlpha: 0 }, "<");
        }
      }),
        e.addEventListener("mouseleave", function (e) {
          if ("mouseenter" === e.type) {
            const t = gsap.timeline();
            t.to(largeImage, { autoAlpha: 1 }),
              t.to(allImg[o], { autoAlpha: 1 }, "<");
          } else if ("mouseleave" === e.type) {
            const r = gsap.timeline();
            r.to(largeImage, { autoAlpha: 0 }),
              r.to(allImg[o], { autoAlpha: 0 }, "<");
          }
        });
    });
 
}


function splideSlide992(){
  if(!document.querySelector((".splide__slide"))){
    return;
  }
  mm.add("(min-width: 992px)", () => {
    cursor1();
    let e = selectAll(".splide__slide");
      e.forEach((e) => {
        var t = e.querySelector(".image img");
        let r = e.querySelector(".link-tilte");
        if(t && r){
            gsap.set(t, { scale: 1.1, transformOrigin: "center center" }),
            n = gsap.timeline({ paused: "true", reversed: "true" });
          n.to(t, { scale: 1, duration: 1.4, ease: "power2.inOut" }),
            e.addEventListener("mouseenter", () => {
              n.play(), r.classList.add("animate-in");
            }),
            e.addEventListener("mouseleave", () => {
              n.reverse(),
                r.classList.add("animate-out"),
                r.classList.remove("animate-in"),
                setTimeout(() => {
                  r.classList.remove("animate-out");
                }, 300);
            });
          }
      });
  });
  }


function initImageParallax() {
  if(!document.querySelector(".with-parallax")){
    return
  }
  gsap.utils.toArray(".with-parallax").forEach((e) => {
    var t = gsap.utils.toArray(".image-parallax");
    if(t){
      const r = gsap.timeline({
        scrollTrigger: {
          trigger: e,
          start: "top bottom-=10%",
          end: "center top",
          scrub: 1,
        },
      });
      r.from(t[0], { yPercent: 10 }, "<"),
        r.from(t[1], { yPercent: 8 }, "<"),
        r.from(t[2], { yPercent: 10 }, "<");
      }
  });
}


function moveRect() {
  if(!document.querySelector(".article-section") && !document.querySelector(".arcticle-rect.two") && !document.querySelector(".arcticle-rect.four") && !document.querySelector(".arcticle-rect.three") && !document.querySelector(".arcticle-rect.five") && !document.querySelector(".arcticle-rect.six")){
    return
  }
  let e = gsap.timeline({
    scrollTrigger: {
      id: "rect",
      trigger: ".article-section",
      start: "top bottom-=22%",
      end: "bottom top",
      scrub: !0,
      invalidateOnRefresh: !0,
    },
  });
  e.to(".arcticle-rect.two", { yPercent: 10 }),
    e.to(".arcticle-rect.three", { yPercent: 20 }, "<"),
    e.to(".arcticle-rect.four", { yPercent: 30 }, "<"),
    e.to(".arcticle-rect.five", { yPercent: 40 }, "<"),
    e.to(".arcticle-rect.six", { yPercent: 50 }, "<");
}


function mmParalax(){
  mm.add("(min-width: 992px)", () => {
    initImageParallax(), moveRect();
  });
}


function menuClick() {
  menuOpen.reversed() ? menuOpen.play() : menuOpen.reverse();
}

function menuLogic(){
  if(!document.querySelector(".nav_open") && !document.querySelector(".menu_btn")){
    return;
  }
  menuOpen.to(".nav_open", { display: "flex" }),
  menuOpen.to(
    ".menu_btn",
    { duration: 0.3, yPercent: -100, ease: "none" },
    "0"
  ),
  menuOpen.from(
    ".nav_open",
    {
      duration: 1,
      y: "-100%",
      ease: "power.out",
      onStart: () => {
        navBar.classList.contains("active-menu") ||
          navBar.classList.add("active-menu");
      },
      onReverseComplete: () => {
        navBar.classList.contains("active-menu") &&
          navBar.classList.remove("active-menu");
      },
    },
    "0"
  );
}


function moveLogoPattern1() {
  if(!document.querySelector(".we-do-it_section") && !document.querySelector(".we-do-email-item_wrap")){
    return;
  }
  work = false;
  let e = gsap.timeline({
    scrollTrigger: {
      id: "Pattern",
      trigger: ".we-do-it_section",
      start: "top bottom",
      end: "bottom+=50% top",
      scrub: 2,
    },
  });
  e.to(".we-do-email-item_wrap", { xPercent: scroolSpeed(-40), transformOrigin: "right center" });
}


function moveLogoEmeil1() {
  if(!document.querySelector(".services_email-wrapper") && !document.querySelector(".we-do-email-item_wrap")){
    return;
  }
  let e = gsap.timeline({
    scrollTrigger: {
      trigger: ".services_email-wrapper",
      start: "top bottom",
      end: "bottom top-=200%",
      scrub: 1,
    },
  });
  e.to(".we-do-email-item_wrap", { xPercent: scroolSpeed(-25) });
}


function moveLogoEmeil() {
  if(!document.querySelector(".we-do_email-wrapper") && !document.querySelector(".we-do-email-item_wrap")){
    return;
  }
  let e = gsap.timeline({
    scrollTrigger: {
      trigger: ".we-do_email-wrapper",
      start: "top bottom",
      end: "bottom top-=200%",
      scrub: 1,
    },
  });
  e.to(".we-do-email-item_wrap", { xPercent: scroolSpeed(-25) });
}


function resizeInit() {
  init();
}


function workGrids(){
  let cardItem1 = selectAll(".works_grid-item");
  img1 = selectAll(".image img");
  if(cardItem1.length == 0 && img1.length == 0){
    return;
  }
  console.log('works');
  gsap.set(img1, { scale: 1.1, transformOrigin: "center center" }),
  cardItem1.forEach((e) => {
    var t = e.querySelector(".image img");
    let r = e.querySelector(".link-tilte");
   
      n = gsap.timeline({ paused: "true", reversed: "true" });
      if(t){
        n.to(t, { scale: 1, duration: 1.4, ease: "power2.inOut" });
      }
      if(r){
        e.addEventListener("mouseenter", () => {
          n.play(), r.classList.add("animate-in");
        }),
        e.addEventListener("mouseleave", () => {
          n.reverse(),
            r.classList.add("animate-out"),
            r.classList.remove("animate-in"),
            setTimeout(() => {
              r.classList.remove("animate-out");
            }, 300);
        });
      }
    
  });
}
  

function splideCards(){
  let cardItem = selectAll(".splide__slide"),
  img = selectAll(".splide__slide img");
  if(img.length == 0 && cardItem.length == 0){
    return;
  }
  gsap.set(img, { scale: 1.1, transformOrigin: "center center" }),
  cardItem.forEach((e) => {
    var t = e.querySelector(".image img");
    let r = e.querySelector(".link-tilte");
    if(t && r){
      o = gsap.timeline({ paused: "true", reversed: "true" });
      o.to(t, { scale: 1, duration: 1.4, ease: "power2.inOut" }),
        e.addEventListener("mouseenter", () => {
          o.play(), r.classList.add("animate-in");
        }),
        e.addEventListener("mouseleave", () => {
          o.reverse(),
            r.classList.add("animate-out"),
            r.classList.remove("animate-in"),
            setTimeout(() => {
              r.classList.remove("animate-out");
            }, 300);
        });
    }
  });
}


function navColorBg2() {
  if(!navBar){
    return;
  }
  ScrollTrigger.create({
    trigger: "[hero]",
    start: "bottom top",
    onEnter: function () {
      navBar.classList.add("white-bg"), navBar.classList.remove("nav-for-dark");
    },
    onEnterBack: function () {
      navBar.classList.remove("white-bg"), navBar.classList.add("nav-for-dark");
    },
  }),
    gsap.utils.toArray("[section-light]").forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 10%",
        end: "bottom 10%",
        onEnter: function () {
          if(document.querySelector(".logo-wrapper") && document.querySelector(".nav-btn-wrap").classList.remove("dark-nav")){
            document.querySelector(".logo-wrapper").classList.remove("dark-nav"),
            document
              .querySelector(".nav-btn-wrap")
              .classList.remove("dark-nav");
          }
        },
        onEnterBack: function () {
          if(document.querySelector(".logo-wrapper") && document.querySelector(".nav-btn-wrap").classList.remove("dark-nav")){
            document.querySelector(".logo-wrapper").classList.remove("dark-nav"),
            document
              .querySelector(".nav-btn-wrap")
              .classList.remove("dark-nav");
          }
        },
      });
    });
}


//end func 

window.addEventListener("resize", () => {
  resizeInit();
});

menuToogle.addEventListener("click", menuClick);

document.addEventListener("DOMContentLoaded", init);












