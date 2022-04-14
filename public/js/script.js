$(function () {
  var s1 = $("#slider").sliderRotate({ displayItems: 5 });
  var s2 = $("#slider-2").sliderRotate({ autoSlide: true });
  var s3 = $("#slider-team-1").sliderRotate({ displayItems: 1 });
  var s4 = $("#slider-team-2").sliderRotate({ displayItems: 3 });
  var s5 = $("#slider-team-3").sliderRotate({ displayItems: 1 });
  var s6 = $("#slider-team-4").sliderRotate({ displayItems: 3 });
  var s7 = $("#slider-team-5").sliderRotate({ displayItems: 2 });
  var s8 = $("#slider-team-6").sliderRotate({ displayItems: 5 });
  var s9 = $("#slider-team-7").sliderRotate({ displayItems: 5 });
  var s10 = $("#slider-team-8").sliderRotate({ displayItems: 8 });
  var s11 = $("#slider-team-9").sliderRotate({ displayItems: 5 });
  var s12 = $("#slider-team-10").sliderRotate({ displayItems: 3 });
  var s13 = $("#slider-team-11").sliderRotate({ displayItems: 6 });
  var s14 = $("#slider-team-12").sliderRotate({ displayItems: 4 });
  var s15 = $("#slider-team-13").sliderRotate({ displayItems: 2 });
  var s15 = $("#slider-team-14").sliderRotate({ displayItems: 2 });
  var s15 = $("#slider-team-15").sliderRotate({ displayItems: 2 });
});

//-------------------------------------------
//based on : https://www.jqueryscript.net/demo/Basic-3D-Image-Rotator-with-jQuery-CSS3-rotateSlider/
// plugin template by https://jqueryboilerplate.com/
(function ($, window, document, undefined) {
  "use strict";

  var pluginName = "sliderRotate",
    dataKey = "plugin_" + pluginName;

  var SliderRotate = function (element, options) {
    this.plugin_element = $(element);
    this.itemClass;
    this.arrowClass;
    this.$item;
    this.$arrow;
    this.$sliderContainer;
    this.numItens;
    this.indexActive;
    this.displayItens;
    this.autoSlide;
    this.slider_timer;
    this.time;

    this.PREV_CLASS = "slider-rotate__item--prev";
    this.PREV2_CLASS = "slider-rotate__item--prev-2";
    this.NEXT_CLASS = "slider-rotate__item--next";
    this.NEXT2_CLASS = "slider-rotate__item--next-2";
    this.ACTIVE_CLASS = "slider-rotate__item--active";

    this.CLASS_DISPLAY_3 = "slider-rotate--3";
    this.CLASS_DISPLAY_5 = "slider-rotate--5";

    this.DISPLAY_3 = 3;
    this.DISPLAY_5 = 5;

    this.SLIDER_CONTAINER = "slider-rotate__container";

    this.options = {
      time: 4,
      autoSlide: false,
      displayItems: 3,
      activate: function () {},
    };

    this.init(options);
  };

  SliderRotate.prototype = {
    init: function (options) {
      _init(options, this);
    },
    destroy: function () {
      this.plugin_element.unbind().removeData();
      $("*", this.plugin_element).unbind().removeData();
      this.$sliderContainer.unbind("mouseenter.slider");
      this.$sliderContainer.unbind("mouseleave.slider");
      _pauseSlide(this); //remove timer
    },
  };

  function _init(__options__, __this__) {
    //---------------------------------
    //---------------------------------
    var opts = __this__.options;
    $.extend(opts, __options__);
    opts.activate.call(__this__);
    //---------------------------------
    //---------------------------------
    __this__.displayItens =
      opts.displayItems == 3 || opts.displayItems == 5
        ? opts.displayItems
        : __this__.DISPLAY_3;
    __this__.itemClass = opts.itemClass || "slider-rotate__item";
    __this__.arrowClass = opts.arrowClass || "js-slider-rotate-arrow";
    __this__.$item = __this__.plugin_element.find("." + __this__.itemClass);
    __this__.$arrow = __this__.plugin_element.find("." + __this__.arrowClass);
    __this__.numItens = __this__.$item.length;
    __this__.indexActive = 0;
    __this__.$sliderContainer = $("." + __this__.SLIDER_CONTAINER);
    __this__.autoSlide = opts.autoSlide;
    __this__.time = opts.time;

    //add class to change layout by 3 or 5 itens
    __this__.plugin_element.addClass(
      __this__.displayItens == __this__.DISPLAY_3
        ? __this__.CLASS_DISPLAY_3
        : __this__.CLASS_DISPLAY_5
    );

    //start items positions
    _moveSlide(__this__.indexActive, __this__);

    //show container to prevent layout issues
    setTimeout(function () {
      __this__.$sliderContainer.css("visibility", "visible");
    }, 400);

    //item mouse event
    __this__.$item.on("click.rotate", function () {
      //prevent click on active item
      if ($(this).hasClass(__this__.ACTIVE_CLASS)) return false;

      //move slide to the desired index
      _moveSlide($(this).index(), __this__);

      return false;
    });

    //arrow mouse event
    __this__.$arrow.on("click.rotate", function () {
      //action (prev or next)
      var _action = $(this).data("action");

      if (_action == "next") {
        //move slide
        _moveNext(__this__);
      } else if (_action == "prev") {
        //move slide
        _movePrev(__this__);
      }
    });

    if (__this__.autoSlide) {
      _autoSlide(__this__);
    }
  }

  //auto slide
  function _autoSlide(__this__) {
    _pauseSlide(__this__); //	remove timer

    var _miliseconds = Number(__this__.time) * 1000; //	converts to miliseconds
    __this__.slider_timer = setTimeout(function () {
      _moveNext(__this__);
    }, _miliseconds);

    //stop items from auto slide
    __this__.$sliderContainer
      .unbind("mouseenter.slider")
      .on("mouseenter.slider", function () {
        _pauseSlide(__this__); //remove timer
      });

    //back to auto slide
    __this__.$sliderContainer
      .unbind("mouseleave.slider")
      .on("mouseleave.slider", function () {
        _autoSlide(__this__);
      });
  }

  //--------------
  //pause slide
  function _pauseSlide(__this__) {
    clearTimeout(__this__.slider_timer);
  }

  //move slide to the next item
  function _moveNext(__this__) {
    var _index =
      __this__.indexActive == __this__.numItens - 1
        ? 0
        : __this__.indexActive + 1;

    _moveSlide(_index, __this__);
  }

  //move slide to the previous item
  function _movePrev(__this__) {
    var _index =
      __this__.indexActive == 0
        ? __this__.numItens - 1
        : __this__.indexActive - 1;

    _moveSlide(_index, __this__);
  }

  function _moveSlide(__index__, __this__) {
    __this__.indexActive = __index__;

    // removing all classes
    __this__.plugin_element
      .find("." + __this__.ACTIVE_CLASS)
      .removeClass(__this__.ACTIVE_CLASS);
    __this__.plugin_element
      .find("." + __this__.NEXT_CLASS)
      .removeClass(__this__.NEXT_CLASS);
    __this__.plugin_element
      .find("." + __this__.PREV_CLASS)
      .removeClass(__this__.PREV_CLASS);
    __this__.plugin_element
      .find("." + __this__.PREV2_CLASS)
      .removeClass(__this__.PREV2_CLASS);
    __this__.plugin_element
      .find("." + __this__.NEXT2_CLASS)
      .removeClass(__this__.NEXT2_CLASS);

    //if active index is the last item
    if (__index__ == __this__.numItens - 1) {
      __this__.$item.eq(0).addClass(__this__.NEXT_CLASS);

      if (__this__.displayItens == __this__.DISPLAY_5) {
        __this__.$item.eq(1).addClass(__this__.NEXT2_CLASS);
      }
    }

    //if active index is the first item
    if (__index__ == 0) {
      __this__.$item.eq(__this__.numItens - 1).addClass(__this__.PREV_CLASS);

      if (__this__.displayItens == __this__.DISPLAY_5) {
        __this__.$item.eq(__this__.numItens - 2).addClass(__this__.PREV2_CLASS);
      }
    }

    // loop through all items
    __this__.$item.each(function (index) {
      if (index == __index__) {
        __this__.$item.eq(index).addClass(__this__.ACTIVE_CLASS);
      }

      if (index == __index__ + 1) {
        __this__.$item.eq(index).addClass(__this__.NEXT_CLASS);
      }

      if (index == __index__ - 1) {
        __this__.$item.eq(index).addClass(__this__.PREV_CLASS);
      }

      //just addClass if display 5 items
      if (__this__.displayItens == __this__.DISPLAY_5) {
        if (index == __index__ + 2) {
          __this__.$item.eq(index).addClass(__this__.NEXT2_CLASS);
        }

        if (__index__ == __this__.numItens - 2) {
          __this__.$item.eq(0).addClass(__this__.NEXT2_CLASS);
        }

        if (__index__ - 2 == -1) {
          __this__.$item
            .eq(__this__.numItens - 1)
            .addClass(__this__.PREV2_CLASS);
        }

        if (index == __index__ - 2) {
          __this__.$item.eq(index).addClass(__this__.PREV2_CLASS);
        }
      }

      if (__this__.autoSlide) {
        _autoSlide(__this__);
      }
    });
  }

  //----------------------------------------------------
  //----------------------------------------------------
  //----------------------------------------------------
  //----------------------------------------------------
  $.fn[pluginName] = function (options) {
    var plugin = this.data(dataKey);

    if (plugin instanceof SliderRotate) {
      if (typeof options !== "undefined") {
        plugin.init(options);
      }
    } else {
      plugin = new SliderRotate(this, options);
      this.data(dataKey, plugin);
    }

    return plugin;
  };
})(jQuery, window, document);
