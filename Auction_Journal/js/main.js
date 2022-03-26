//this is only for demonstration of different fly-in directions
var changeClass = function(name){
  $('#search, #nav ul').removeAttr('class').addClass(name);
}

              // MAIN NAVBAR

!(function(n, i, e, a) {
    ;(n.navigation = function(t, s) {
      var o = {
          responsive: !0,
          mobileBreakpoint: 991,
          showDuration: 200,
          hideDuration: 200,
          showDelayDuration: 0,
          hideDelayDuration: 0,
          submenuTrigger: "hover",
          effect: "fadeIn",
          submenuIndicator: !0,
          submenuIndicatorTrigger: !1,
          hideSubWhenGoOut: !0,
          visibleSubmenusOnMobile: !1,
          fixed: !1,
          overlay: !0,
          overlayColor: "rgba(0, 0, 0, 0.5)",
          hidden: !1,
          hiddenOnMobile: !1,
          offCanvasSide: "left",
          offCanvasCloseButton: !0,
          animationOnShow: "",
          animationOnHide: "",
          onInit: function() {},
          onLandscape: function() {},
          onPortrait: function() {},
          onShowOffCanvas: function() {},
          onHideOffCanvas: function() {}
        },
        r = this,
        u = Number.MAX_VALUE,
        d = 1,
        l = "click.nav touchstart.nav",
        f = "mouseenter focusin",
        c = "mouseleave focusout"
      r.settings = {}
      var t = (n(t), t)
      n(t).find(".nav-search").length > 0 &&
        n(t)
          .find(".nav-search")
          .find("form")
          .prepend(
            "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
          ),
        (r.init = function() {
          ;(r.settings = n.extend({}, o, s)),
            r.settings.offCanvasCloseButton &&
              n(t)
                .find(".nav-menus-wrapper")
                .prepend(
                  "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
                ),
            "right" == r.settings.offCanvasSide &&
              n(t)
                .find(".nav-menus-wrapper")
                .addClass("nav-menus-wrapper-right"),
            r.settings.hidden &&
              (n(t).addClass("navigation-hidden"),
              (r.settings.mobileBreakpoint = 99999)),
            v(),
            r.settings.fixed && n(t).addClass("navigation-fixed"),
            n(t)
              .find(".nav-toggle")
              .on("click touchstart", function(n) {
                n.stopPropagation(),
                  n.preventDefault(),
                  r.showOffcanvas(),
                  s !== a && r.callback("onShowOffCanvas")
              }),
            n(t)
              .find(".nav-menus-wrapper-close-button")
              .on("click touchstart", function() {
                r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")
              }),
            n(t)
              .find(".nav-search-button, .nav-search-close-button")
              .on("click touchstart keydown", function(i) {
                i.stopPropagation(), i.preventDefault()
                var e = i.keyCode || i.which
                "click" === i.type ||
                "touchstart" === i.type ||
                ("keydown" === i.type && 13 == e)
                  ? r.toggleSearch()
                  : 9 == e && n(i.target).blur()
              }),
            n(t).find(".megamenu-tabs").length > 0 && y(),
            n(i).resize(function() {
              r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m()
            }),
            r.initNavigationMode(C()),
            r.settings.hiddenOnMobile && m(),
            s !== a && r.callback("onInit")
        })
      var h = function() {
          n(t)
            .find(".nav-submenu")
            .hide(0),
            n(t)
              .find("li")
              .removeClass("focus")
        },
        v = function() {
          n(t)
            .find("li")
            .each(function() {
              n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
                (n(this)
                  .children(".nav-dropdown,.megamenu-panel")
                  .addClass("nav-submenu"),
                r.settings.submenuIndicator &&
                  n(this)
                    .children("a")
                    .append(
                      "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                    ))
            })
        },
        m = function() {
          n(t).hasClass("navigation-portrait")
            ? n(t).addClass("navigation-hidden")
            : n(t).removeClass("navigation-hidden")
        }
      ;(r.showSubmenu = function(i, e) {
        C() > r.settings.mobileBreakpoint &&
          n(t)
            .find(".nav-search")
            .find("form")
            .fadeOut(),
          "fade" == e
            ? n(i)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.showDelayDuration)
                .fadeIn(r.settings.showDuration)
                .removeClass(r.settings.animationOnHide)
                .addClass(r.settings.animationOnShow)
            : n(i)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.showDelayDuration)
                .slideDown(r.settings.showDuration)
                .removeClass(r.settings.animationOnHide)
                .addClass(r.settings.animationOnShow),
          n(i).addClass("focus")
      }),
        (r.hideSubmenu = function(i, e) {
          "fade" == e
            ? n(i)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.hideDelayDuration)
                .fadeOut(r.settings.hideDuration)
                .removeClass(r.settings.animationOnShow)
                .addClass(r.settings.animationOnHide)
            : n(i)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.hideDelayDuration)
                .slideUp(r.settings.hideDuration)
                .removeClass(r.settings.animationOnShow)
                .addClass(r.settings.animationOnHide),
            n(i)
              .removeClass("focus")
              .find(".focus")
              .removeClass("focus")
        })
      var p = function() {
          n("body").addClass("no-scroll"),
            r.settings.overlay &&
              (n(t).append("<div class='nav-overlay-panel'></div>"),
              n(t)
                .find(".nav-overlay-panel")
                .css("background-color", r.settings.overlayColor)
                .fadeIn(300)
                .on("click touchstart", function(n) {
                  r.hideOffcanvas()
                }))
        },
        g = function() {
          n("body").removeClass("no-scroll"),
            r.settings.overlay &&
              n(t)
                .find(".nav-overlay-panel")
                .fadeOut(400, function() {
                  n(this).remove()
                })
        }
      ;(r.showOffcanvas = function() {
        p(),
          "left" == r.settings.offCanvasSide
            ? n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "left")
                .addClass("nav-menus-wrapper-open")
            : n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "right")
                .addClass("nav-menus-wrapper-open")
      }),
        (r.hideOffcanvas = function() {
          n(t)
            .find(".nav-menus-wrapper")
            .removeClass("nav-menus-wrapper-open")
            .on(
              "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
              function() {
                n(t)
                  .find(".nav-menus-wrapper")
                  .css("transition-property", "none")
                  .off()
              }
            ),
            g()
        }),
        (r.toggleOffcanvas = function() {
          C() <= r.settings.mobileBreakpoint &&
            (n(t)
              .find(".nav-menus-wrapper")
              .hasClass("nav-menus-wrapper-open")
              ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
              : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")))
        }),
        (r.toggleSearch = function() {
          "none" ==
          n(t)
            .find(".nav-search")
            .find("form")
            .css("display")
            ? (n(t)
                .find(".nav-search")
                .find("form")
                .fadeIn(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .focus())
            : (n(t)
                .find(".nav-search")
                .find("form")
                .fadeOut(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .blur())
        }),
        (r.initNavigationMode = function(i) {
          r.settings.responsive
            ? (i <= r.settings.mobileBreakpoint &&
                u > r.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-portrait")
                  .removeClass("navigation-landscape"),
                S(),
                s !== a && r.callback("onPortrait")),
              i > r.settings.mobileBreakpoint &&
                d <= r.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-landscape")
                  .removeClass("navigation-portrait"),
                k(),
                g(),
                r.hideOffcanvas(),
                s !== a && r.callback("onLandscape")),
              (u = i),
              (d = i))
            : (n(t).addClass("navigation-landscape"),
              k(),
              s !== a && r.callback("onLandscape"))
        })
      var b = function() {
          n("html").on("click.body touchstart.body", function(i) {
            0 === n(i.target).closest(".navigation").length &&
              (n(t)
                .find(".nav-submenu")
                .fadeOut(),
              n(t)
                .find(".focus")
                .removeClass("focus"),
              n(t)
                .find(".nav-search")
                .find("form")
                .fadeOut())
          })
        },
        C = function() {
          return (
            i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
          )
        },
        w = function() {
          n(t)
            .find(".nav-menu")
            .find("li, a")
            .off(l)
            .off(f)
            .off(c)
        },
        O = function() {
          if (C() > r.settings.mobileBreakpoint) {
            var i = n(t).outerWidth(!0)
            n(t)
              .find(".nav-menu")
              .children("li")
              .children(".nav-submenu")
              .each(function() {
                n(this)
                  .parent()
                  .position().left +
                  n(this).outerWidth() >
                i
                  ? n(this).css("right", 0)
                  : n(this).css("right", "auto")
              })
          }
        },
        y = function() {
          function i(i) {
            var e = n(i)
                .children(".megamenu-tabs-nav")
                .children("li"),
              a = n(i).children(".megamenu-tabs-pane")
            n(e).on("click.tabs touchstart.tabs", function(i) {
              i.stopPropagation(),
                i.preventDefault(),
                n(e).removeClass("active"),
                n(this).addClass("active"),
                n(a)
                  .hide(0)
                  .removeClass("active"),
                n(a[n(this).index()])
                  .show(0)
                  .addClass("active")
            })
          }
          if (n(t).find(".megamenu-tabs").length > 0)
            for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
              i(e[a])
        },
        k = function() {
          w(),
            h(),
            navigator.userAgent.match(/Mobi/i) ||
            navigator.maxTouchPoints > 0 ||
            "click" == r.settings.submenuTrigger
              ? n(t)
                  .find(".nav-menu, .nav-dropdown")
                  .children("li")
                  .children("a")
                  .on(l, function(e) {
                    if (
                      (r.hideSubmenu(
                        n(this)
                          .parent("li")
                          .siblings("li"),
                        r.settings.effect
                      ),
                      n(this)
                        .closest(".nav-menu")
                        .siblings(".nav-menu")
                        .find(".nav-submenu")
                        .fadeOut(r.settings.hideDuration),
                      n(this).siblings(".nav-submenu").length > 0)
                    ) {
                      if (
                        (e.stopPropagation(),
                        e.preventDefault(),
                        "none" ==
                          n(this)
                            .siblings(".nav-submenu")
                            .css("display"))
                      )
                        return (
                          r.showSubmenu(
                            n(this).parent("li"),
                            r.settings.effect
                          ),
                          O(),
                          !1
                        )
                      if (
                        (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                        "_blank" === n(this).attr("target") ||
                          "blank" === n(this).attr("target"))
                      )
                        i.open(n(this).attr("href"))
                      else {
                        if (
                          "#" === n(this).attr("href") ||
                          "" === n(this).attr("href") ||
                          "javascript:void(0)" === n(this).attr("href")
                        )
                          return !1
                        i.location.href = n(this).attr("href")
                      }
                    }
                  })
              : n(t)
                  .find(".nav-menu")
                  .find("li")
                  .on(f, function() {
                    r.showSubmenu(this, r.settings.effect), O()
                  })
                  .on(c, function() {
                    r.hideSubmenu(this, r.settings.effect)
                  }),
            r.settings.hideSubWhenGoOut && b()
        },
        S = function() {
          w(),
            h(),
            r.settings.visibleSubmenusOnMobile
              ? n(t)
                  .find(".nav-submenu")
                  .show(0)
              : (n(t)
                  .find(".submenu-indicator")
                  .removeClass("submenu-indicator-up"),
                r.settings.submenuIndicator &&
                r.settings.submenuIndicatorTrigger
                  ? n(t)
                      .find(".submenu-indicator")
                      .on(l, function(i) {
                        return (
                          i.stopPropagation(),
                          i.preventDefault(),
                          r.hideSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li")
                              .siblings("li"),
                            "slide"
                          ),
                          r.hideSubmenu(
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .children("li"),
                            "slide"
                          ),
                          "none" ==
                          n(this)
                            .parent("a")
                            .siblings(".nav-submenu")
                            .css("display")
                            ? (n(this).addClass("submenu-indicator-up"),
                              n(this)
                                .parent("a")
                                .parent("li")
                                .siblings("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              n(this)
                                .closest(".nav-menu")
                                .siblings(".nav-menu")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              r.showSubmenu(
                                n(this)
                                  .parent("a")
                                  .parent("li"),
                                "slide"
                              ),
                              !1)
                            : (n(this)
                                .parent("a")
                                .parent("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              void r.hideSubmenu(
                                n(this)
                                  .parent("a")
                                  .parent("li"),
                                "slide"
                              ))
                        )
                      })
                  : n(t)
                      .find(".nav-menu, .nav-dropdown")
                      .children("li")
                      .children("a")
                      .on(l, function(e) {
                        if (
                          (e.stopPropagation(),
                          e.preventDefault(),
                          r.hideSubmenu(
                            n(this)
                              .parent("li")
                              .siblings("li"),
                            r.settings.effect
                          ),
                          r.hideSubmenu(
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .children("li"),
                            "slide"
                          ),
                          "none" ==
                            n(this)
                              .siblings(".nav-submenu")
                              .css("display"))
                        )
                          return (
                            n(this)
                              .children(".submenu-indicator")
                              .addClass("submenu-indicator-up"),
                            n(this)
                              .parent("li")
                              .siblings("li")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            r.showSubmenu(n(this).parent("li"), "slide"),
                            !1
                          )
                        if (
                          (n(this)
                            .parent("li")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          r.hideSubmenu(n(this).parent("li"), "slide"),
                          "_blank" === n(this).attr("target") ||
                            "blank" === n(this).attr("target"))
                        )
                          i.open(n(this).attr("href"))
                        else {
                          if (
                            "#" === n(this).attr("href") ||
                            "" === n(this).attr("href") ||
                            "javascript:void(0)" === n(this).attr("href")
                          )
                            return !1
                          i.location.href = n(this).attr("href")
                        }
                      }))
        }
      ;(r.callback = function(n) {
        s[n] !== a && s[n].call(t)
      }),
        r.init()
    }),
      (n.fn.navigation = function(i) {
        return this.each(function() {
          if (a === n(this).data("navigation")) {
            var e = new n.navigation(this, i)
            n(this).data("navigation", e)
          }
        })
      })
  })(jQuery, window, document)

  ;(function($) {
    "use strict"

    var $window = $(window)

    if ($.fn.navigation) {
      $("#navigation1").navigation()
      $("#always-hidden-nav").navigation({
        hidden: true
      })
    }

    $window.on("load", function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove()
      })
    })
  })(jQuery)
              // MAIN NAVBAR


// ***DASHBOARD***


				// DASH BOARD NAVBAR

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

				// DASHBOARD NAVBAR

// ***DASHBOARD***


////////////////////// Code for My Account 

// function show_content(evt, pagecontent) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(pagecontent).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

///////////////////////////////

// $(document).ready(function () {
//     $("#container").simpleCalendar({
//       fixedStartDay: 0, // begin weeks by sunday
//       disableEmptyDetails: true,
//       events: [
//         // generate new event after tomorrow for one hour
//         {
//           startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
//           endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
//           summary: 'Visit of the Eiffel Tower'
//         },
//         // generate new event for yesterday at noon
//         {
//           startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
//           endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
//           summary: 'Restaurant'
//         },
//         // generate new event for the last two days
//         {
//           startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
//           endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
//           summary: 'Visit of the Louvre'
//         }
//       ],

//     });
//   });

$('.mob-myacnt').click(function(){
    $('.tabs-left').toggleClass('mob-open');
  });


// Code for news menu

$(document).ready(function() {
// breakpoint and up  
$(window).resize(function(){
    if ($(window).width() >= 980){  

      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
         $(this).parent().toggleClass("show");
         $(this).parent().find(".dropdown-menu").toggleClass("show"); 
       });

        // hide the menu when the mouse leaves the dropdown
      $( ".navbar .dropdown-menu" ).mouseleave(function() {
        $(this).removeClass("show");  
      });
  
        // do something here
    }   
});  
});


// Code for Range Slider Find Auction Page
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();


// Code for Calendar


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      initialDate: '2020-09-12',
      navLinks: true, // can click day/week names to navigate views
      businessHours: true, // display business hours
      editable: true,
      selectable: true,
      events: [
        {
          title: '1 Auctions',
          start: '2020-09-03T13:00:00',
          // constraint: 'businessHours'
        },
        {
          title: '1 Auctions',
          start: '2020-09-13T11:00:00',
          constraint: 'availableForMeeting', // defined below
          color: '#257e4a'
        },
        {
          title: '3 Auctions',
          start: '2020-09-30',
          // end: '2020-09-20'
        },
        {
          title: '4 Auctions',
          start: '2020-09-29T20:00:00'
        },

        // areas where "Meeting" must be dropped
        {
          groupId: 'availableForMeeting',
          start: '2020-09-11T10:00:00',
          end: '2020-09-11T16:00:00',
          display: 'background'
        },
        {
          groupId: 'availableForMeeting',
          start: '2020-09-13T10:00:00',
          end: '2020-09-13T16:00:00',
          display: 'background'
        },

        // red areas where no events can be dropped
        {
          start: '2020-09-01',
          end: '2020-09-24',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        },
        {
          start: '2020-09-06',
          end: '2020-09-08',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        }
      ]
    });

    calendar.render();
  });

// Code for tooltip
$('[data-toggle="tooltip"]').tooltip();