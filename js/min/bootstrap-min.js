if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function($){var t=$.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function($){"use strict";function t(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}$.fn.emulateTransitionEnd=function(t){var e=!1,i=this;$(this).one("bsTransitionEnd",function(){e=!0});var o=function(){e||$(i).trigger($.support.transition.end)};return setTimeout(o,t),this},$(function(){$.support.transition=t(),$.support.transition&&($.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(t){return $(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var e=$(this),o=e.data("bs.alert");o||e.data("bs.alert",o=new i(this)),"string"==typeof t&&o[t].call(e)})}var e='[data-dismiss="alert"]',i=function(t){$(t).on("click",e,this.close)};i.VERSION="3.3.0",i.TRANSITION_DURATION=150,i.prototype.close=function(t){function e(){n.detach().trigger("closed.bs.alert").remove()}var o=$(this),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var n=$(s);t&&t.preventDefault(),n.length||(n=o.closest(".alert")),n.trigger(t=$.Event("close.bs.alert")),t.isDefaultPrevented()||(n.removeClass("in"),$.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",e).emulateTransitionEnd(i.TRANSITION_DURATION):e())};var o=$.fn.alert;$.fn.alert=t,$.fn.alert.Constructor=i,$.fn.alert.noConflict=function(){return $.fn.alert=o,this},$(document).on("click.bs.alert.data-api",e,i.prototype.close)}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.button"),s="object"==typeof t&&t;o||i.data("bs.button",o=new e(this,s)),"toggle"==t?o.toggle():t&&o.setState(t)})}var e=function(t,i){this.$element=$(t),this.options=$.extend({},e.DEFAULTS,i),this.isLoading=!1};e.VERSION="3.3.0",e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",s=i.data();t+="Text",null==s.resetText&&i.data("resetText",i[o]()),setTimeout($.proxy(function(){i[o](null==s[t]?this.options[t]:s[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e))},this),0)},e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var i=$.fn.button;$.fn.button=t,$.fn.button.Constructor=e,$.fn.button.noConflict=function(){return $.fn.button=i,this},$(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var i=$(e.target);i.hasClass("btn")||(i=i.closest(".btn")),t.call(i,"toggle"),e.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){$(t.target).closest(".btn").toggleClass("focus","focus"==t.type)})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.carousel"),s=$.extend({},e.DEFAULTS,i.data(),"object"==typeof t&&t),n="string"==typeof t?t:s.slide;o||i.data("bs.carousel",o=new e(this,s)),"number"==typeof t?o.to(t):n?o[n]():s.interval&&o.pause().cycle()})}var e=function(t,e){this.$element=$(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",$.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",$.proxy(this.pause,this)).on("mouseleave.bs.carousel",$.proxy(this.cycle,this))};e.VERSION="3.3.0",e.TRANSITION_DURATION=600,e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},e.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},e.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval)),this},e.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},e.prototype.getItemForDirection=function(t,e){var i="prev"==t?-1:1,o=this.getItemIndex(e),s=(o+i)%this.$items.length;return this.$items.eq(s)},e.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},e.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&$.support.transition&&(this.$element.trigger($.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(t,i){var o=this.$element.find(".item.active"),s=i||this.getItemForDirection(t,o),n=this.interval,r="next"==t?"left":"right",a="next"==t?"first":"last",l=this;if(!s.length){if(!this.options.wrap)return;s=this.$element.find(".item")[a]()}if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=$.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=$(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=$.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return $.support.transition&&this.$element.hasClass("slide")?(s.addClass(t),s[0].offsetWidth,o.addClass(r),s.addClass(r),o.one("bsTransitionEnd",function(){s.removeClass([t,r].join(" ")).addClass("active"),o.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(e.TRANSITION_DURATION)):(o.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),n&&this.cycle(),this}};var i=$.fn.carousel;$.fn.carousel=t,$.fn.carousel.Constructor=e,$.fn.carousel.noConflict=function(){return $.fn.carousel=i,this};var o=function(e){var i,o=$(this),s=$(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var n=$.extend({},s.data(),o.data()),r=o.attr("data-slide-to");r&&(n.interval=!1),t.call(s,n),r&&s.data("bs.carousel").to(r),e.preventDefault()}};$(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),$(window).on("load",function(){$('[data-ride="carousel"]').each(function(){var e=$(this);t.call(e,e.data())})})}(jQuery),+function($){"use strict";function t(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return $(i)}function e(t){return this.each(function(){var e=$(this),o=e.data("bs.collapse"),s=$.extend({},i.DEFAULTS,e.data(),"object"==typeof t&&t);!o&&s.toggle&&"show"==t&&(s.toggle=!1),o||e.data("bs.collapse",o=new i(this,s)),"string"==typeof t&&o[t]()})}var i=function(t,e){this.$element=$(t),this.options=$.extend({},i.DEFAULTS,e),this.$trigger=$(this.options.trigger).filter('[href="#'+t.id+'"], [data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.0",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,o=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(o&&o.length&&(t=o.data("bs.collapse"),t&&t.transitioning))){var s=$.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){o&&o.length&&(e.call(o,"hide"),t||o.data("bs.collapse",null));var n=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[n](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!$.support.transition)return r.call(this);var a=$.camelCase(["scroll",n].join("-"));this.$element.one("bsTransitionEnd",$.proxy(r,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[n](this.$element[0][a])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=$.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return $.support.transition?void this.$element[e](0).one("bsTransitionEnd",$.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(e,i){var o=$(i);this.addAriaAndCollapsedClass(t(o),o)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var o=$.fn.collapse;$.fn.collapse=e,$.fn.collapse.Constructor=i,$.fn.collapse.noConflict=function(){return $.fn.collapse=o,this},$(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o=$(this);o.attr("data-target")||i.preventDefault();var s=t(o),n=s.data("bs.collapse"),r=n?"toggle":$.extend({},o.data(),{trigger:this});e.call(s,r)})}(jQuery),+function($){"use strict";function t(t){t&&3===t.which||($(o).remove(),$(s).each(function(){var i=$(this),o=e(i),s={relatedTarget:this};o.hasClass("open")&&(o.trigger(t=$.Event("hide.bs.dropdown",s)),t.isDefaultPrevented()||(i.attr("aria-expanded","false"),o.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function e(t){var e=t.attr("data-target");e||(e=t.attr("href"),e=e&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i=e&&$(e);return i&&i.length?i:t.parent()}function i(t){return this.each(function(){var e=$(this),i=e.data("bs.dropdown");i||e.data("bs.dropdown",i=new n(this)),"string"==typeof t&&i[t].call(e)})}var o=".dropdown-backdrop",s='[data-toggle="dropdown"]',n=function(t){$(t).on("click.bs.dropdown",this.toggle)};n.VERSION="3.3.0",n.prototype.toggle=function(i){var o=$(this);if(!o.is(".disabled, :disabled")){var s=e(o),n=s.hasClass("open");if(t(),!n){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click",t);var r={relatedTarget:this};if(s.trigger(i=$.Event("show.bs.dropdown",r)),i.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},n.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)){var i=$(this);if(t.preventDefault(),t.stopPropagation(),!i.is(".disabled, :disabled")){var o=e(i),n=o.hasClass("open");if(!n&&27!=t.which||n&&27==t.which)return 27==t.which&&o.find(s).trigger("focus"),i.trigger("click");var r=" li:not(.divider):visible a",a=o.find('[role="menu"]'+r+', [role="listbox"]'+r);if(a.length){var l=a.index(t.target);38==t.which&&l>0&&l--,40==t.which&&l<a.length-1&&l++,~l||(l=0),a.eq(l).trigger("focus")}}}};var r=$.fn.dropdown;$.fn.dropdown=i,$.fn.dropdown.Constructor=n,$.fn.dropdown.noConflict=function(){return $.fn.dropdown=r,this},$(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,n.prototype.toggle).on("keydown.bs.dropdown.data-api",s,n.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',n.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',n.prototype.keydown)}(jQuery),+function($){"use strict";function t(t,i){return this.each(function(){var o=$(this),s=o.data("bs.modal"),n=$.extend({},e.DEFAULTS,o.data(),"object"==typeof t&&t);s||o.data("bs.modal",s=new e(this,n)),"string"==typeof t?s[t](i):n.show&&s.show(i)})}var e=function(t,e){this.options=e,this.$body=$(document.body),this.$element=$(t),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,$.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};e.VERSION="3.3.0",e.TRANSITION_DURATION=300,e.BACKDROP_TRANSITION_DURATION=150,e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},e.prototype.show=function(t){var i=this,o=$.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',$.proxy(this.hide,this)),this.backdrop(function(){var o=$.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),o&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var s=$.Event("shown.bs.modal",{relatedTarget:t});o?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(e.TRANSITION_DURATION):i.$element.trigger("focus").trigger(s)}))},e.prototype.hide=function(t){t&&t.preventDefault(),t=$.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),$(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),$.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",$.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):this.hideModal())},e.prototype.enforceFocus=function(){$(document).off("focusin.bs.modal").on("focusin.bs.modal",$.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",$.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(t){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=$.support.transition&&o;if(this.$backdrop=$('<div class="modal-backdrop '+o+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",$.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;s?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){i.removeBackdrop(),t&&t()};$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},e.prototype.checkScrollbar=function(){this.scrollbarWidth=this.measureScrollbar()},e.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},e.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},e.prototype.measureScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return 0;var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=$.fn.modal;$.fn.modal=t,$.fn.modal.Constructor=e,$.fn.modal.noConflict=function(){return $.fn.modal=i,this},$(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var i=$(this),o=i.attr("href"),s=$(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),n=s.data("bs.modal")?"toggle":$.extend({remote:!/#/.test(o)&&o},s.data(),i.data());i.is("a")&&e.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),t.call(s,n,this)})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.tooltip"),s="object"==typeof t&&t,n=s&&s.selector;(o||"destroy"!=t)&&(n?(o||i.data("bs.tooltip",o={}),o[n]||(o[n]=new e(this,s))):o||i.data("bs.tooltip",o=new e(this,s)),"string"==typeof t&&o[t]())})}var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};e.VERSION="3.3.0",e.TRANSITION_DURATION=150,e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},e.prototype.init=function(t,e,i){this.enabled=!0,this.type=t,this.$element=$(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport);for(var o=this.options.trigger.split(" "),s=o.length;s--;){var n=o[s];if("click"==n)this.$element.on("click."+this.type,this.options.selector,$.proxy(this.toggle,this));else if("manual"!=n){var r="hover"==n?"mouseenter":"focusin",a="hover"==n?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,$.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,$.proxy(this.leave,this))}}this.options.selector?this._options=$.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(t){return t=$.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},e.prototype.getDelegateOptions=function(){var t={},e=this.getDefaults();return this._options&&$.each(this._options,function(i,o){e[i]!=o&&(t[i]=o)}),t},e.prototype.enter=function(t){var e=t instanceof this.constructor?t:$(t.currentTarget).data("bs."+this.type);return e&&e.$tip&&e.$tip.is(":visible")?void(e.hoverState="in"):(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),$(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="in",e.options.delay&&e.options.delay.show?void(e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)):e.show())},e.prototype.leave=function(t){var e=t instanceof this.constructor?t:$(t.currentTarget).data("bs."+this.type);return e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),$(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="out",e.options.delay&&e.options.delay.hide?void(e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)):e.hide()},e.prototype.show=function(){var t=$.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var i=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!i)return;var o=this,s=this.tip(),n=this.getUID(this.type);this.setContent(),s.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,l=a.test(r);l&&(r=r.replace(a,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var h=this.getPosition(),d=s[0].offsetWidth,p=s[0].offsetHeight;if(l){var c=r,f=this.options.container?$(this.options.container):this.$element.parent(),u=this.getPosition(f);r="bottom"==r&&h.bottom+p>u.bottom?"top":"top"==r&&h.top-p<u.top?"bottom":"right"==r&&h.right+d>u.width?"left":"left"==r&&h.left-d<u.left?"right":r,s.removeClass(c).addClass(r)}var g=this.getCalculatedOffset(r,h,d,p);this.applyPlacement(g,r);var v=function(){var t=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};$.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(e.TRANSITION_DURATION):v()}},e.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,s=i[0].offsetHeight,n=parseInt(i.css("margin-top"),10),r=parseInt(i.css("margin-left"),10);isNaN(n)&&(n=0),isNaN(r)&&(r=0),t.top=t.top+n,t.left=t.left+r,$.offset.setOffset(i[0],$.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var a=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=s&&(t.top=t.top+s-l);var h=this.getViewportAdjustedDelta(e,t,a,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+a:2*h.top-s+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(t){function i(){"in"!=o.hoverState&&s.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),t&&t()}var o=this,s=this.tip(),n=$.Event("hide.bs."+this.type);return this.$element.trigger(n),n.isDefaultPrevented()?void 0:(s.removeClass("in"),$.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",i).emulateTransitionEnd(e.TRANSITION_DURATION):i(),this.hoverState=null,this)},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(t){t=t||this.$element;var e=t[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=$.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var s=i?{top:0,left:0}:t.offset(),n={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:$(window).width(),height:$(window).height()}:null;return $.extend({},o,n,r,s)},e.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},e.prototype.getViewportAdjustedDelta=function(t,e,i,o){var s={top:0,left:0};if(!this.$viewport)return s;var n=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-n-r.scroll,l=e.top+n-r.scroll+o;a<r.top?s.top=r.top-a:l>r.top+r.height&&(s.top=r.top+r.height-l)}else{var h=e.left-n,d=e.left+n+i;h<r.left?s.left=r.left-h:d>r.width&&(s.left=r.left+r.width-d)}return s},e.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},e.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},e.prototype.tip=function(){return this.$tip=this.$tip||$(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(t){var e=this;t&&(e=$(t.currentTarget).data("bs."+this.type),e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),$(t.currentTarget).data("bs."+this.type,e))),e.tip().hasClass("in")?e.leave(e):e.enter(e)},e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var i=$.fn.tooltip;$.fn.tooltip=t,$.fn.tooltip.Constructor=e,$.fn.tooltip.noConflict=function(){return $.fn.tooltip=i,this}}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.popover"),s="object"==typeof t&&t,n=s&&s.selector;(o||"destroy"!=t)&&(n?(o||i.data("bs.popover",o={}),o[n]||(o[n]=new e(this,s))):o||i.data("bs.popover",o=new e(this,s)),"string"==typeof t&&o[t]())})}var e=function(t,e){this.init("popover",t,e)};if(!$.fn.tooltip)throw new Error("Popover requires tooltip.js");e.VERSION="3.3.0",e.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=$.extend({},$.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},e.prototype.tip=function(){return this.$tip||(this.$tip=$(this.options.template)),this.$tip};var i=$.fn.popover;$.fn.popover=t,$.fn.popover.Constructor=e,$.fn.popover.noConflict=function(){return $.fn.popover=i,this}}(jQuery),+function($){"use strict";function t(e,i){var o=$.proxy(this.process,this);this.$body=$("body"),this.$scrollElement=$($(e).is("body")?window:e),this.options=$.extend({},t.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",o),this.refresh(),this.process()}function e(e){return this.each(function(){var i=$(this),o=i.data("bs.scrollspy"),s="object"==typeof e&&e;o||i.data("bs.scrollspy",o=new t(this,s)),"string"==typeof e&&o[e]()})}t.VERSION="3.3.0",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t="offset",e=0;$.isWindow(this.$scrollElement[0])||(t="position",e=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var i=this;this.$body.find(this.selector).map(function(){var i=$(this),o=i.data("target")||i.attr("href"),s=/^#./.test(o)&&$(o);return s&&s.length&&s.is(":visible")&&[[s[t]().top+e,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},t.prototype.process=function(){var t=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),i=this.options.offset+e-this.$scrollElement.height(),o=this.offsets,s=this.targets,n=this.activeTarget,r;if(this.scrollHeight!=e&&this.refresh(),t>=i)return n!=(r=s[s.length-1])&&this.activate(r);if(n&&t<o[0])return this.activeTarget=null,this.clear();for(r=o.length;r--;)n!=s[r]&&t>=o[r]&&(!o[r+1]||t<=o[r+1])&&this.activate(s[r])},t.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=$(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=$.fn.scrollspy;$.fn.scrollspy=e,$.fn.scrollspy.Constructor=t,$.fn.scrollspy.noConflict=function(){return $.fn.scrollspy=i,this},$(window).on("load.bs.scrollspy.data-api",function(){$('[data-spy="scroll"]').each(function(){var t=$(this);e.call(t,t.data())})})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new e(this)),"string"==typeof t&&o[t]()})}var e=function(t){this.element=$(t)};e.VERSION="3.3.0",e.TRANSITION_DURATION=150,e.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),s=$.Event("hide.bs.tab",{relatedTarget:t[0]}),n=$.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(s),t.trigger(n),!n.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=$(i);this.activate(t.closest("li"),e),this.activate(r,r.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},e.prototype.activate=function(t,i,o){function s(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var n=i.find("> .active"),r=o&&$.support.transition&&(n.length&&n.hasClass("fade")||!!i.find("> .fade").length);n.length&&r?n.one("bsTransitionEnd",s).emulateTransitionEnd(e.TRANSITION_DURATION):s(),n.removeClass("in")};var i=$.fn.tab;$.fn.tab=t,$.fn.tab.Constructor=e,$.fn.tab.noConflict=function(){return $.fn.tab=i,this};var o=function(e){e.preventDefault(),t.call($(this),"show")};$(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)
}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.affix"),s="object"==typeof t&&t;o||i.data("bs.affix",o=new e(this,s)),"string"==typeof t&&o[t]()})}var e=function(t,i){this.options=$.extend({},e.DEFAULTS,i),this.$target=$(this.options.target).on("scroll.bs.affix.data-api",$.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",$.proxy(this.checkPositionWithEventLoop,this)),this.$element=$(t),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};e.VERSION="3.3.0",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,e,i,o){var s=this.$target.scrollTop(),n=this.$element.offset(),r=this.$target.height();if(null!=i&&"top"==this.affixed)return i>s?"top":!1;if("bottom"==this.affixed)return null!=i?s+this.unpin<=n.top?!1:"bottom":t-o>=s+r?!1:"bottom";var a=null==this.affixed,l=a?s:n.top,h=a?r:e;return null!=i&&i>=l?"top":null!=o&&l+h>=t-o?"bottom":!1},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),i=this.options.offset,o=i.top,s=i.bottom,n=$("body").height();"object"!=typeof i&&(s=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof s&&(s=i.bottom(this.$element));var r=this.getState(n,t,o,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var a="affix"+(r?"-"+r:""),l=$.Event(a+".bs.affix");if(this.$element.trigger(l),l.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:n-t-s})}};var i=$.fn.affix;$.fn.affix=t,$.fn.affix.Constructor=e,$.fn.affix.noConflict=function(){return $.fn.affix=i,this},$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var e=$(this),i=e.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),t.call(e,i)})})}(jQuery);