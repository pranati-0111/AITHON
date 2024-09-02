// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
// Shery.hoverWithMediaCircle(".hvr", {
//     videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
//     // images: ["img 11.jpg", "img12.jpg", "img14.jpg"],
// });

// Shery.imageMasker(".elem", {
//     //Parameters are optional.
//     mouseFollower: true,
//     text: "Shery",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });



// gsap.to(".fleftelm", {
//     scrollTrigger: {
//         trigger: "#featuredimages",
//         pin: true,
//         start: "top top",
//         end: "bottom bottom",
//         endTrigger: ".last",
//         scrub: 1,
//     },
//     y: "-300%",
//     ease: Power1,
// });

// let sections = document.querySelectorAll(".fleftelm");
// Shery.imageEffect(".images", {
//   style: 4,
//   config: { onMouse: { value: 1 } },
//   slideStyle: (setScroll) => {
//     sections.forEach(function (section, index) {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         scrub: 1,
//         onUpdate: function (prog) {
//           setScroll(prog.progress + index);
//         },
//       });
//     });
//   },
// });


// // let sections = document.querySelectorAll(".fleftelm")
// // Shery.imageEffect(".images", {
// //     style: 4,
// //     config: {onMouse: {value: 1}},
// //     slideStyle: (setScroll) => {
// //         sections.forEach(function (section, index) {
// //             scrollTrigger.create({
// //                 trigger: section,
// //                 start: "top top",
// //                 scrub: 1,
// //                 onUpdate: function(prog){
// //                     setScroll(prog.progress+index)

// //                 },
// //             });

// //         });
// //     },
// // });

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// function circleChaptaKaro() {
//     // define default scale value
//     var xscale = 1;
//     var yscale = 1;
  
//     var xprev = 0;
//     var yprev = 0;
  
//     window.addEventListener("mousemove", function (dets) {
//       clearTimeout(timeout);
  
//       xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//       yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
//       xprev = dets.clientX;
//       yprev = dets.clientY;
  
//       circleMouseFollower(xscale, yscale);
  
//       timeout = setTimeout(function () {
//         document.querySelector(
//           "#minicircle"
//         ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//       }, 100);
//     });
//   }
  
//   function circleMouseFollower(xscale, yscale) {
//     window.addEventListener("mousemove", function (dets) {
//       document.querySelector(
//         "#minicircle"
//       ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//     });
//   }
  
//   circleChaptaKaro();
//   circleMouseFollower();
//   // firstPageAnim();
  
//   // teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye
  
//   document.querySelectorAll(".elem").forEach(function (elem) {
//     var rotate = 0;
//     var diffrot = 0;
  
//     elem.addEventListener("mouseleave", function (dets) {
//       gsap.to(elem.querySelector("img"), {
//         opacity: 0,
//         ease: Power3,
//         duration: 0.5,
//       });
//     });
  
//     elem.addEventListener("mousemove", function (dets) {
//       var diff = dets.clientY - elem.getBoundingClientRect().top;
//       diffrot = dets.clientX - rotate;
//       rotate = dets.clientX;
//       gsap.to(elem.querySelector("img"), {
//         opacity: 1,
//         ease: Power3,
//         top: diff,
//         left: dets.clientX,
//         rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//       });
//     });
//   });



function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {




            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215
            })
        })
    })
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })


    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })

}

function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

locomotiveAnimation()

navAnimation()

page2Animation()

page3VideoAnimation()

page6Animations()

loadingAnimation()