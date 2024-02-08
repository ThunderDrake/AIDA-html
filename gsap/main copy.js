gsap.registerPlugin(ScrollTrigger);
const select = (e) => document.querySelector(e),
  selectAll = (e) => document.querySelectorAll(e);
  if(select(".loader-green-line")){
    progresLine = select(".loader-green-line");
  }

  if(select(".lottie-wrapper")){
    logoLottie = select(".lottie-wrapper");
  }

  if(select(".loader")){
    loaderWrap = select(".loader");
  }


  let lastScroll = 0;
const defaultOffset = 0;




  if(document.querySelector(".heder-dark .nav-btn-wrap")){
    let el = document.createElement("div");
el.innerHTML += "<style>html:has(.nav.nav-for-dark) .heder-light{ display: none;   }  html:has(.heder-dark .active-menu) .heder-light{ display: none;   }</style>";
  document.querySelector("header").append(el);
    menuToogleDark = select(".heder-light .nav-btn-wrap");
    menuToogleDark.addEventListener("click", menuClick);
    let menuToogleLight = select(".heder-dark .nav-btn-wrap");
    menuToogleLight.addEventListener("click", menuClick);
    let lastScrollDark = 0;
  const defaultOffsetDark = 0,
    headerDark = document.querySelector(".heder-dark .nav"),
    scrollPositionDark = () =>
      window.pageYOffset || document.documentElement.scrollTop,
    containHideDark = () => headerDark.classList.contains("hide");

    window.addEventListener("scroll", () => {
      scrollPositionDark() > lastScrollDark &&
      !containHideDark() &&
      scrollPositionDark() > defaultOffsetDark
        ? headerDark.classList.add("hide")
        : scrollPositionDark() < lastScrollDark &&
          containHideDark() &&
          headerDark.classList.remove("hide"),
        (lastScrollDark = scrollPositionDark());
    }),
      gsap.utils.toArray("[section-light]").forEach((e) => {
        ScrollTrigger.create({
          trigger: e,
          start: "top 10%",
          end: "bottom 10%",
          onEnter: function () {
            document.querySelector(".logo-wrapper").classList.remove("dark-nav"),
              document.querySelector(".nav-btn-wrap").classList.remove("dark-nav");
          },
          onEnterBack: function () {
            document.querySelector(".logo-wrapper").classList.remove("dark-nav"),
              document.querySelector(".nav-btn-wrap").classList.remove("dark-nav");
          },
        });
      });

      headerLight = document.querySelector(".heder-light .nav"),
      scrollPosition = () =>
        window.pageYOffset || document.documentElement.scrollTop,
      containHide = () => headerLight.classList.contains("hide");
    window.addEventListener("scroll", () => {
      scrollPosition() > lastScroll &&
      !containHide() &&
      scrollPosition() > defaultOffset
        ? headerLight.classList.add("hide")
        : scrollPosition() < lastScroll &&
          containHide() &&
          headerLight.classList.remove("hide"),
        (lastScroll = scrollPosition());
    });

    window.addEventListener("scroll", () => {
      scrollPositionDark() > lastScrollDark &&
      !containHideDark() &&
      scrollPositionDark() > defaultOffsetDark
        ? headerDark.classList.add("hide")
        : scrollPositionDark() < lastScrollDark &&
          containHideDark() &&
          headerDark.classList.remove("hide"),
        (lastScrollDark = scrollPositionDark());
    });

    
  } else{
    if(document.querySelector(".nav")){
      header = document.querySelector(".nav");
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
    
  }


  function navColorBgLight() {
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
  

  if(document.querySelector('.call-item')){
    let callItem = gsap.utils.toArray(".call-item"),
    infoCallItem = gsap.utils.toArray(".call-info-item");
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

if(document.querySelector(".cookies")){


const addActiveClass = (e) => {
    e.classList.add("is-active");
  },
  cookiesBtn = document.querySelector(".cookies-btn"),
  cookiesClose = document.querySelector(".cookies-close"),
  cookies = document.querySelector(".cookies");
cookiesBtn.addEventListener("click", () => {
  addActiveClass(cookies);
}),
  cookiesClose.addEventListener("click", () => {
    addActiveClass(cookies);
  });
}

  if(document.querySelector(".menu_btn span")){
    const mainNavLinks = gsap.utils.toArray(".menu_btn span");
  }

  if(document.querySelector(".nav-link_item")){
    cNavLinksItem = gsap.utils.toArray(".nav-link_item");
    
  }

  if(document.querySelector(".insights-link")){
    insightLinksItem = gsap.utils.toArray(".insights-link");
    insightLinksItem.forEach((t) => {
      t.addEventListener("mouseleave", (e) => {
        t.classList.add("animate-out"),
          setTimeout(() => {
            t.classList.remove("animate-out");
          }, 300);
      });
    });
  }

  if(document.querySelector(".link-big")){
    bigLinksItem = gsap.utils.toArray(".link-big");
    bigLinksItem.forEach((t) => {
      t.addEventListener("mouseleave", (e) => {
        t.classList.add("animate-out"),
          setTimeout(() => {
            t.classList.remove("animate-out");
          }, 300);
      });
    });
  }

  if(document.querySelector(".footer-link")){
    footerLinksItem = gsap.utils.toArray(".footer-link");
    footerLinksItem.forEach((t) => {
      t.addEventListener("mouseleave", (e) => {
        t.classList.add("animate-out"),
          setTimeout(() => {
            t.classList.remove("animate-out");
          }, 300);
      });
    });
  }

  if(document.querySelector(".menu_btn span")){
  mainNavLinks.forEach((t) => {
    t.addEventListener("mouseleave", (e) => {
      t.classList.add("animate-out"),
        setTimeout(() => {
          t.classList.remove("animate-out");
        }, 300);
    });
  });
}


  if(document.querySelector(".nav-btn-wrap")){
    let menuToogle = select(".nav-btn-wrap");
    menuToogle.addEventListener("click", menuClick);
  }

  if(document.querySelector(".logo-wrapper")){
    logoWrap = select(".logo-wrapper");
  }

  if(document.querySelector(".nav")){
    navBar = select(".nav");
  }

const menuOpen = gsap.timeline({ paused: "true", reversed: "true" });
function menuClick() {
  menuOpen.reversed() ? menuOpen.play() : menuOpen.reverse();
}

function initLoader() {
  var r = selectAll("[loading-text]"),
    a = selectAll("[hero-up]"),
    e = localStorage.getItem("visit");
  if ((console.log(e), "1" === e)) {
    gsap.set(".loader-green-line", { autoAlpha: 0 });
    let e = gsap.timeline({
      default: { duration: 0.8, ease: "power.out" },
      onStart: () => lenis.stop(),
      onComplete: function () {
        select("body").classList.remove("is-loading");
          if(document.querySelector('.abaut-right-wrapper')){
            pin();
          }
          if(document.querySelector(".nav")){
            navColorBg();
          }
          if(document.querySelector(".logo-wrapper") && document.querySelector(".nav-btn-wrap") &&  document.querySelector(".heder-dark")){
            navChanceColor();
          }
          if(document.querySelector(".approach-oberlay-wrap")){
            moveReting();
          }
          if(document.querySelector(".call-section-sticky")){
            moveLogoPattern();
          }
          if(document.querySelector(".slider-main-component")){
            cursor();
          }
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
    t.to(r, { yPercent: -100, transformOrigin: "bottom", stagger: 0.2 }),
      t.to([progresLine, logoLottie], { autoAlpha: 0, duration: 0.8 }, 0),
      t.to(loaderWrap, { yPercent: -100 }),
      t.from(a, { y: 80, stagger: 0.1 }, "<-=10%");
    let o = gsap.timeline();
    o.add(e), o.add(t);
  } else {
    localStorage.setItem("visit", "1");
    let e = gsap.timeline({
      default: { duration: 1.1, ease: "power2.out" },
      onStart: () => lenis.stop(),
      onComplete: function () {
        select("body").classList.remove("is-loading");
        if(document.querySelector('.abaut-right-wrapper')){
          pin();
        }
          if(document.querySelector(".nav")){
            navColorBg();
          }
          if(document.querySelector(".approach-oberlay-wrap")){
            moveReting();
          }

          if(document.querySelector(".call-section-sticky")){
            moveLogoPattern();
          }

          if(document.querySelector('.we-do_section')){
            moveLogoPattern1();
          }

          if(document.querySelector(".slider-main-component")){
            cursor();
          }
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



let mmAbautTab = gsap.matchMedia();
mmAbautTab.add("(min-width: 800px)", () => {
  let e = selectAll(".abaut_item-subtitle");
  e.forEach((t) => {
    t.itemWrap = t.querySelector(".abaut_tab-sub");
    var e = t.querySelectorAll(".tab-link a"),
      o = t.querySelectorAll(".line-dotter"),
      r = t.querySelectorAll(".line-solid");
    let a = t.querySelector(".plusminus"),
      s = !1,
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
  });
}),
  mmAbautTab.add("(max-width: 800px)", () => {
    let e = selectAll(".abaut_item-subtitle");
    e.forEach((t) => {
      t.itemWrap = t.querySelector(".abaut_tab-sub");
      t.querySelectorAll(".tab-link a"),
        t.querySelectorAll(".line-dotter"),
        t.querySelectorAll(".line-solid");
      let o = t.querySelector(".plusminus");
      t.addEventListener("click", () => {
        o.classList.toggle("active");
        let e = t.itemWrap;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px");
      });
    });
  });
let mmApproach = gsap.matchMedia();
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
      l = !1,
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
  });
}),
  mmApproach.add("(max-width: 799px)", () => {
    let e = selectAll(".approach-tab-item");
    e.forEach((t) => {
      t.itemWrap = t.querySelector(".approach-item-content");
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
    });
  });


  


function pin() {
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
  let e = gsap.timeline({
    scrollTrigger: {
      id: "Pattern",
      trigger: ".call-section-sticky",
      start: "top bottom",
      end: "bottom+=50% top",
      scrub: 2,
    },
  });
  e.to(".call-bg-logo-wrap", { xPercent: 28, transformOrigin: "right center" });
}

function cursor1() {
  var e = document.querySelectorAll(".splide"),
    t = document.querySelectorAll(".works-link_current.project"),
    r = document.getElementById("cursor");
  document.querySelector(".cursor.drag-cursor");
  e.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      r.classList.add("drag-cursor");
    });
  }),
    t.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        r.classList.toggle("drag-cursor");
      }),
        e.addEventListener("mouseleave", function () {
          r.classList.toggle("drag-cursor");
        });
    }),
    document
      .querySelector(".splide")
      .addEventListener("mouseleave", function () {
        r.classList.remove("drag-cursor");
      });
}

function cursor() {
  $(".slider-main-component").mouseenter(function () {
    $("#cursor").addClass("drag-cursor");
  }),
    $(".slider-main-component").mouseleave(function () {
      $("#cursor").removeClass("drag-cursor");
    });
}

function navColorBgLight() {
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

function init() {
  const allTrysy = document.querySelectorAll(".moving-text-wrapp");

  for(let i = 0; i < allTrysy.length; i++){
    allTrysy[i].classList.add("moving-text-wrapp" + i);
    if(allTrysy[i].document.querySelector(".we-do-email-item_wrap")){
      allTrysy[i].document.querySelector(".we-do-email-item_wrap").classList.add("we-do-email-item_wrap" + i);
    }
    let e = gsap.timeline({
      scrollTrigger: {
        trigger: ".moving-text-wrapp" + i,
        start: "top bottom",
        end: "bottom top-=200%",
        scrub: 1,
      },
    });
    e.to(".we-do-email-item_wrap" + i, { xPercent: -25 });
  }


  if(document.querySelector(".awards-media")){
    initAwardsHover();
  }

  if(document.querySelector(".moving-text-wrapp")){
    console.log("трусы1");
    moveLogoEmeil2();
  }

  if(document.querySelector(".services-hero-fix-wrap")){
    navColorBg2();
  }
  
  if(document.querySelector(".services_email-wrapper")){
    moveLogoEmeil1();
  }

  if(document.querySelector(".works-link_current.project")){
    cursor1();
  }

  if(document.querySelector(".heder-light .nav-btn-wrap")){
    navColorBgLight();
  }

  if(document.querySelector(".heder-dark .nav-btn-wrap")){
    navColorBg1();
  }

  navColorBg() 
  
  if(document.querySelector(".loader")){
    initLoader();
  }

  if(document.querySelector('.abaut-right-wrapper')){
    pin();
  }
    if(document.querySelector(".nav")){
      navColorBg();
    }
    if(document.querySelector(".approach-oberlay-wrap")){
      moveReting();
    }

    if(document.querySelector(".call-section-sticky")){
      moveLogoPattern();
    }

    if(document.querySelector('.we-do_section')){
      moveLogoPattern1();
    }
    
    if(document.querySelector(".slider-main-component")){
      cursor();
    }

    if(document.querySelector(".we-do_email-wrapper")){
      moveLogoEmeil();
    }
}
if(document.querySelector(".isughts-item") && document.querySelector(".image-content-block img")){
  let insightItem = selectAll(".isughts-item");
  imgInsight = selectAll(".image-content-block img");
gsap.set(imgInsight, { scale: 1.02, transformOrigin: "center center" }),
  insightItem.forEach((e) => {
    var t = e.querySelector(".image img");
    let o = e.querySelector(".is-h3"),
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



if(document.querySelector("[touch=btn]")){
  let btnTouch = document.querySelector("[touch=btn]");
  btnTouch.addEventListener("click", function () {
    let e = document.querySelector(".touch-form-section");
    e.classList.add("is-active");
  });
}

if(document.querySelector("[touch=close]")){
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

let mm = gsap.matchMedia();
if(document.querySelector(".splide__slide")){


mm.add("(min-width: 992px)", () => {
  cursor1();
  let e = selectAll(".splide__slide");
  var t = selectAll(".image img");
  gsap.set(t, { scale: 1.1, transformOrigin: "center center" }),
    e.forEach((e) => {
      var t = e.querySelector(".image img");
      let r = e.querySelector(".link-tilte"),
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
    });
});
}
function initImageParallax() {
  gsap.utils.toArray(".with-parallax").forEach((e) => {
    var t = gsap.utils.toArray(".image-parallax");
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
  });
}

function moveRect() {
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

if(document.querySelector(".with-parallax") && document.querySelector(".article-section")){
  mm.add("(min-width: 992px)", () => {
    console.log(1);
    initImageParallax(), moveRect();
  });
}



function moveLogoPattern1() {
  let e = gsap.timeline({
    scrollTrigger: {
      id: "Pattern",
      trigger: ".we-do_section",
      start: "top bottom",
      end: "bottom+=50% top",
      scrub: 2,
    },
  });
  e.to(".call-bg-logo-wrap", { xPercent: 40, transformOrigin: "right center" });
}

function moveLogoEmeil1() {
  let e = gsap.timeline({
    scrollTrigger: {
      trigger: ".services_email-wrapper",
      start: "top bottom",
      end: "bottom top-=200%",
      scrub: 1,
    },
  });
  e.to(".we-do-email-item_wrap", { xPercent: -25 });
}






function moveLogoEmeil() {
  let e = gsap.timeline({
    scrollTrigger: {
      trigger: ".we-do_email-wrapper",
      start: "top bottom",
      end: "bottom top-=200%",
      scrub: 1,
    },
  });
  e.to(".we-do-email-item_wrap", { xPercent: -25 });
}

function resizeInit() {
  init();
}

window.addEventListener("resize", () => {
  resizeInit();
});

if(document.querySelector(".works_grid-item")){
  let cardItem1 = selectAll(".works_grid-item"),
  img1 = selectAll(".image img");
gsap.set(img1, { scale: 1.1, transformOrigin: "center center" }),
  cardItem1.forEach((e) => {
    var t = e.querySelector(".image img");
    let r = e.querySelector(".link-tilte");
    if(t && r){
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

}

if(document.querySelector(".splide__slide") && document.querySelector(".splide__slide img")){
let cardItem = selectAll(".splide__slide"),
  img = selectAll(".splide__slide img");
gsap.set(img, { scale: 1.1, transformOrigin: "center center" }),
  cardItem.forEach((e) => {
    var t = e.querySelector(".image img");
    let r = e.querySelector(".link-tilte"),
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
  });
}


function navColorBg2() {
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
document.addEventListener("DOMContentLoaded", init);
