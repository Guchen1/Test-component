(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('@vueuse/core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', '@vueuse/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.xVue3 = {}, global.vue, global.core));
})(this, (function (exports, vue, core) { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$3 = ":root{\r\n    --x-primary-color: #7268ff;\r\n    --x-primary-color-light: #8b83fc;\r\n    --x-info-color: #0099ff;\r\n    --x-info-color-light: #4aa4fc;\r\n    --x-success-color: #00cc6d;\r\n    --x-success-color-light: #29d474;\r\n    --x-warning-color: #ffa900;\r\n    --x-warning-color-light: #fdbd3c;\r\n    --x-danger-color: #ff4444;\r\n    --x-danger-color-light: #ff7777;\r\n}";
  var stylesheet$3=":root{\r\n    --x-primary-color: #7268ff;\r\n    --x-primary-color-light: #8b83fc;\r\n    --x-info-color: #0099ff;\r\n    --x-info-color-light: #4aa4fc;\r\n    --x-success-color: #00cc6d;\r\n    --x-success-color-light: #29d474;\r\n    --x-warning-color: #ffa900;\r\n    --x-warning-color-light: #fdbd3c;\r\n    --x-danger-color: #ff4444;\r\n    --x-danger-color-light: #ff7777;\r\n}";
  styleInject(css_248z$3);

  var css_248z$2 = ".index-module_hello__dfORI{\r\n    color: red;\r\n}\r\n.index-module_button__PuQlt{\r\n    box-sizing: border-box;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\n.index-module_button-small__WJAvV{\r\n    font-size: 12px;\r\n    height: 30px;\r\n    width: 54px;\r\n    padding-top: 1px;\r\n    padding-bottom: 1px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.index-module_button-medium__xsYvE{\r\n    font-size: 14px;\r\n    height: 33px;\r\n    width: 60px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n}\r\n.index-module_button-large__rUu6i{\r\n    font-size: 16px;\r\n    height: 35px;\r\n    width: 66px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n}\r\n.index-module_button-primary__zPAKf{\r\n    background-color: var(--x-primary-color);\r\n    color: white;\r\n    border: 1px solid var(--x-primary-color);\r\n}\r\n.index-module_button-info__KAa2U{\r\n    background-color: var(--x-info-color);\r\n    color: white;\r\n    border: 1px solid var(--x-info-color);\r\n}\r\n.index-module_button-success__nHqj-{\r\n    background-color: var(--x-success-color);\r\n    color: white;\r\n    border: 1px solid var(--x-success-color);\r\n}\r\n.index-module_button-warning__g6Afd{\r\n    background-color: var(--x-warning-color);\r\n    color: white;\r\n    border: 1px solid var(--x-warning-color);\r\n}\r\n.index-module_button-danger__RYAYb{\r\n    background-color: var(--x-danger-color);\r\n    color: white;\r\n    border: 1px solid var(--x-danger-color);\r\n}\r\n.index-module_button-danger__RYAYb:hover{\r\n    background-color: var(--x-danger-color-light);\r\n    border: 1px solid var(--x-danger-color-light);\r\n}\r\n.index-module_button-warning__g6Afd:hover{\r\n    background-color: var(--x-warning-color-light);\r\n    border: 1px solid var(--x-warning-color-light);\r\n}\r\n.index-module_button-success__nHqj-:hover{\r\n    background-color: var(--x-success-color-light);\r\n    border: 1px solid var(--x-success-color-light);\r\n}\r\n.index-module_button-info__KAa2U:hover{\r\n    background-color: var(--x-info-color-light);\r\n    border: 1px solid var(--x-info-color-light);\r\n}\r\n.index-module_button-primary__zPAKf:hover{\r\n    background-color: var(--x-primary-color-light);\r\n    border: 1px solid var(--x-primary-color-light);\r\n}\r\n.index-module_button-primary__zPAKf.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-primary-color);\r\n    border: 1px solid var(--x-primary-color);\r\n}\r\n.index-module_button-info__KAa2U.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-info-color);\r\n    border: 1px solid var(--x-info-color);\r\n}\r\n.index-module_button-success__nHqj-.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-success-color);\r\n    border: 1px solid var(--x-success-color);\r\n}\r\n.index-module_button-warning__g6Afd.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-warning-color);\r\n    border: 1px solid var(--x-warning-color);\r\n}\r\n.index-module_button-danger__RYAYb.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-danger-color);\r\n    border: 1px solid var(--x-danger-color);\r\n}\r\n.index-module_button-primary__zPAKf.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-primary-color-light);\r\n    border: 1px solid var(--x-primary-color-light);\r\n}\r\n.index-module_button-info__KAa2U.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-info-color-light);\r\n    border: 1px solid var(--x-info-color-light);\r\n}\r\n.index-module_button-success__nHqj-.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-success-color-light);\r\n    border: 1px solid var(--x-success-color-light);\r\n}\r\n.index-module_button-warning__g6Afd.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-warning-color-light);\r\n    border: 1px solid var(--x-warning-color-light);\r\n}\r\n.index-module_button-danger__RYAYb.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-danger-color-light);\r\n    border: 1px solid var(--x-danger-color-light);\r\n}\r\n";
  var css$2 = {"hello":"index-module_hello__dfORI","button":"index-module_button__PuQlt","button-small":"index-module_button-small__WJAvV","button-medium":"index-module_button-medium__xsYvE","button-large":"index-module_button-large__rUu6i","button-primary":"index-module_button-primary__zPAKf","button-info":"index-module_button-info__KAa2U","button-success":"index-module_button-success__nHqj-","button-warning":"index-module_button-warning__g6Afd","button-danger":"index-module_button-danger__RYAYb","button-plain":"index-module_button-plain__7lbdl"};
  var stylesheet$2=".index-module_hello__dfORI{\r\n    color: red;\r\n}\r\n.index-module_button__PuQlt{\r\n    box-sizing: border-box;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\n.index-module_button-small__WJAvV{\r\n    font-size: 12px;\r\n    height: 30px;\r\n    width: 54px;\r\n    padding-top: 1px;\r\n    padding-bottom: 1px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.index-module_button-medium__xsYvE{\r\n    font-size: 14px;\r\n    height: 33px;\r\n    width: 60px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n}\r\n.index-module_button-large__rUu6i{\r\n    font-size: 16px;\r\n    height: 35px;\r\n    width: 66px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n}\r\n.index-module_button-primary__zPAKf{\r\n    background-color: var(--x-primary-color);\r\n    color: white;\r\n    border: 1px solid var(--x-primary-color);\r\n}\r\n.index-module_button-info__KAa2U{\r\n    background-color: var(--x-info-color);\r\n    color: white;\r\n    border: 1px solid var(--x-info-color);\r\n}\r\n.index-module_button-success__nHqj-{\r\n    background-color: var(--x-success-color);\r\n    color: white;\r\n    border: 1px solid var(--x-success-color);\r\n}\r\n.index-module_button-warning__g6Afd{\r\n    background-color: var(--x-warning-color);\r\n    color: white;\r\n    border: 1px solid var(--x-warning-color);\r\n}\r\n.index-module_button-danger__RYAYb{\r\n    background-color: var(--x-danger-color);\r\n    color: white;\r\n    border: 1px solid var(--x-danger-color);\r\n}\r\n.index-module_button-danger__RYAYb:hover{\r\n    background-color: var(--x-danger-color-light);\r\n    border: 1px solid var(--x-danger-color-light);\r\n}\r\n.index-module_button-warning__g6Afd:hover{\r\n    background-color: var(--x-warning-color-light);\r\n    border: 1px solid var(--x-warning-color-light);\r\n}\r\n.index-module_button-success__nHqj-:hover{\r\n    background-color: var(--x-success-color-light);\r\n    border: 1px solid var(--x-success-color-light);\r\n}\r\n.index-module_button-info__KAa2U:hover{\r\n    background-color: var(--x-info-color-light);\r\n    border: 1px solid var(--x-info-color-light);\r\n}\r\n.index-module_button-primary__zPAKf:hover{\r\n    background-color: var(--x-primary-color-light);\r\n    border: 1px solid var(--x-primary-color-light);\r\n}\r\n.index-module_button-primary__zPAKf.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-primary-color);\r\n    border: 1px solid var(--x-primary-color);\r\n}\r\n.index-module_button-info__KAa2U.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-info-color);\r\n    border: 1px solid var(--x-info-color);\r\n}\r\n.index-module_button-success__nHqj-.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-success-color);\r\n    border: 1px solid var(--x-success-color);\r\n}\r\n.index-module_button-warning__g6Afd.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-warning-color);\r\n    border: 1px solid var(--x-warning-color);\r\n}\r\n.index-module_button-danger__RYAYb.index-module_button-plain__7lbdl{\r\n    background-color: transparent;\r\n    color: var(--x-danger-color);\r\n    border: 1px solid var(--x-danger-color);\r\n}\r\n.index-module_button-primary__zPAKf.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-primary-color-light);\r\n    border: 1px solid var(--x-primary-color-light);\r\n}\r\n.index-module_button-info__KAa2U.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-info-color-light);\r\n    border: 1px solid var(--x-info-color-light);\r\n}\r\n.index-module_button-success__nHqj-.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-success-color-light);\r\n    border: 1px solid var(--x-success-color-light);\r\n}\r\n.index-module_button-warning__g6Afd.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-warning-color-light);\r\n    border: 1px solid var(--x-warning-color-light);\r\n}\r\n.index-module_button-danger__RYAYb.index-module_button-plain__7lbdl:hover{\r\n    background-color: transparent;\r\n    color: var(--x-danger-color-light);\r\n    border: 1px solid var(--x-danger-color-light);\r\n}\r\n";
  styleInject(css_248z$2);

  const buttonProps = {
    type: {
      type: String,
      default: "primary"
    },
    plain: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  };
  const ButtonSize = {
    small: css$2["button-small"],
    medium: css$2["button-medium"],
    large: css$2["button-large"]
  };
  const ButtonType = {
    primary: css$2["button-primary"],
    success: css$2["button-success"],
    info: css$2["button-info"],
    warning: css$2["button-warning"],
    danger: css$2["button-danger"],
    text: css$2["button-text"]
  };
  const ButtonPlainType = {
    0: css$2["button-plain-default"],
    1: css$2["button-plain"]
  };
  const Button = /* @__PURE__ */ vue.defineComponent({
    name: "Button",
    props: buttonProps,
    setup(props, {
      slots
    }) {
      const classList = vue.ref([css$2.button, ButtonSize[props.size], ButtonType[props.type], ButtonPlainType[Number(props.plain)]]);
      console.log(ButtonSize);
      return () => {
        var _a, _b;
        return vue.createVNode("button", {
          "class": classList.value
        }, [(_a = slots.icon) == null ? void 0 : _a.call(slots), (_b = slots.default) == null ? void 0 : _b.call(slots)]);
      };
    }
  });

  var css_248z$1 = ".index-module_popover__MDuA0 {\r\n    position: absolute;\r\n    z-index: 1000;\r\n}\r\n.index-module_full__AnYOm{\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.index-module_fullPart__-PDTv{\r\n    display: inline-block;\r\n}\r\n.index-module_out__paMHi {\r\n    height: '100%';\r\n    display: 'flex';\r\n    flex-direction: 'column'\r\n}\r\n\r\n\r\n.index-module_popover__MDuA0 {\r\n    /* Font & Text */\r\n    font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: 400;\r\n    letter-spacing: normal;\r\n    line-height: 20px;\r\n    text-decoration: none solid rgb(36, 36, 36);\r\n    text-align: left;\r\n    text-indent: 0px;\r\n    text-transform: none;\r\n    vertical-align: baseline;\r\n    white-space: normal;\r\n    word-spacing: 0px;\r\n    left: 100px;\r\n    bottom: -30px;\r\n    /* Color & Background */\r\n    background-attachment: scroll;\r\n    background-color: rgb(255, 255, 255);\r\n    background-image: none;\r\n    background-position: 0% 0%;\r\n    background-repeat: repeat;\r\n    color: rgb(36, 36, 36);\r\n\r\n    /* Box */\r\n    height: 102.375px;\r\n    width: 215.875px;\r\n    border: 1px solid #FFFFFF none;\r\n    min-height: 0px;\r\n    max-width: none;\r\n    min-width: 0px;\r\n    /* Positioning */\r\n    position: absolute;\r\n    float: none;\r\n    display: block;\r\n    clear: none;\r\n    z-index: auto;\r\n\r\n    /* List */\r\n    list-style-image: none;\r\n    list-style-type: disc;\r\n    list-style-position: outside;\r\n\r\n    /* Table */\r\n    border-collapse: separate;\r\n    border-spacing: 0px 0px;\r\n    caption-side: top;\r\n    empty-cells: show;\r\n    table-layout: auto;\r\n\r\n    /* Miscellaneous */\r\n    overflow: visible;\r\n    cursor: auto;\r\n    visibility: visible;\r\n\r\n    /* Effects */\r\n\r\n    transition: all 0s ease 0s;\r\n    outline-offset: 0px;\r\n    box-sizing: border-box;\r\n    resize: none;\r\n    text-shadow: none;\r\n    text-overflow: clip;\r\n    word-wrap: normal;\r\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 8px 16px 0px;\r\n    border-top-left-radius: 4px;\r\n    border-top-right-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}";
  var css$1 = {"popover":"index-module_popover__MDuA0","full":"index-module_full__AnYOm","fullPart":"index-module_fullPart__-PDTv","out":"index-module_out__paMHi"};
  var stylesheet$1=".index-module_popover__MDuA0 {\r\n    position: absolute;\r\n    z-index: 1000;\r\n}\r\n.index-module_full__AnYOm{\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.index-module_fullPart__-PDTv{\r\n    display: inline-block;\r\n}\r\n.index-module_out__paMHi {\r\n    height: '100%';\r\n    display: 'flex';\r\n    flex-direction: 'column'\r\n}\r\n\r\n\r\n.index-module_popover__MDuA0 {\r\n    /* Font & Text */\r\n    font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: 400;\r\n    letter-spacing: normal;\r\n    line-height: 20px;\r\n    text-decoration: none solid rgb(36, 36, 36);\r\n    text-align: left;\r\n    text-indent: 0px;\r\n    text-transform: none;\r\n    vertical-align: baseline;\r\n    white-space: normal;\r\n    word-spacing: 0px;\r\n    left: 100px;\r\n    bottom: -30px;\r\n    /* Color & Background */\r\n    background-attachment: scroll;\r\n    background-color: rgb(255, 255, 255);\r\n    background-image: none;\r\n    background-position: 0% 0%;\r\n    background-repeat: repeat;\r\n    color: rgb(36, 36, 36);\r\n\r\n    /* Box */\r\n    height: 102.375px;\r\n    width: 215.875px;\r\n    border: 1px solid #FFFFFF none;\r\n    min-height: 0px;\r\n    max-width: none;\r\n    min-width: 0px;\r\n    /* Positioning */\r\n    position: absolute;\r\n    float: none;\r\n    display: block;\r\n    clear: none;\r\n    z-index: auto;\r\n\r\n    /* List */\r\n    list-style-image: none;\r\n    list-style-type: disc;\r\n    list-style-position: outside;\r\n\r\n    /* Table */\r\n    border-collapse: separate;\r\n    border-spacing: 0px 0px;\r\n    caption-side: top;\r\n    empty-cells: show;\r\n    table-layout: auto;\r\n\r\n    /* Miscellaneous */\r\n    overflow: visible;\r\n    cursor: auto;\r\n    visibility: visible;\r\n\r\n    /* Effects */\r\n\r\n    transition: all 0s ease 0s;\r\n    outline-offset: 0px;\r\n    box-sizing: border-box;\r\n    resize: none;\r\n    text-shadow: none;\r\n    text-overflow: clip;\r\n    word-wrap: normal;\r\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 8px 16px 0px;\r\n    border-top-left-radius: 4px;\r\n    border-top-right-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}";
  styleInject(css_248z$1);

  var __defProp$1 = Object.defineProperty;
  var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$1 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1)
      for (var prop of __getOwnPropSymbols$1(b)) {
        if (__propIsEnum$1.call(b, prop))
          __defNormalProp$1(a, prop, b[prop]);
      }
    return a;
  };
  const Popover = /* @__PURE__ */ vue.defineComponent({
    name: "Popover",
    props: {
      wrapperStyle: {
        type: Object,
        default: () => ({})
      },
      bodyStyle: {
        type: Object,
        default: () => ({})
      },
      popStyle: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props, {
      slots
    }) {
      if (document.getElementById("pop") == null) {
        const pop = document.createElement("div");
        pop.id = "pop";
        document.body.appendChild(pop);
      }
      const body = vue.ref(void 0);
      const {
        elementPositionX,
        elementPositionY,
        elementWidth
      } = core.useMouseInElement(body, {});
      const target = vue.ref(null);
      const isHovered = core.useElementHover(body);
      const isUsed = core.useElementHover(target);
      const visible = vue.ref(false);
      vue.watch(isHovered, (value) => {
        if (value) {
          visible.value = true;
          console.log(body);
        } else if (!isUsed.value) {
          visible.value = false;
        }
      });
      vue.watch(isUsed, (value) => {
        if (value) {
          visible.value = true;
        } else if (!isHovered.value) {
          visible.value = false;
        }
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "style": props.wrapperStyle,
          "class": css$1.fullPart,
          "onMousedown": vue.withModifiers(() => {
          }, ["self", "prevent"])
        }, [vue.createVNode("div", {
          "style": props.bodyStyle,
          "ref": body,
          "class": [css$1.full],
          "id": "body"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), vue.createVNode(vue.Teleport, {
          "to": "#pop"
        }, {
          default: () => {
            var _a2;
            return [visible.value ? vue.createVNode("div", {
              "ref": target,
              "style": __spreadValues$1({
                left: elementPositionX.value + elementWidth.value + "px",
                top: elementPositionY.value + "px"
              }, props.popStyle),
              "onMousedown": vue.withModifiers(() => {
              }, ["stop", "prevent"]),
              "class": [css$1.popover]
            }, [(_a2 = slots.content) == null ? void 0 : _a2.call(slots)]) : vue.createVNode("div", null, null)];
          }
        })]);
      };
    }
  });

  var css_248z = ".index-module_card__gFM9a {\r\n\t/* Font & Text */\r\n\tfont-family: \"Segoe UI\", \"Segoe UI Web (West European)\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-style: normal;\r\n\tfont-variant: normal;\r\n\tfont-weight: 400;\r\n\tletter-spacing: normal;\r\n\tline-height: 20px;\r\n\tmargin: 0px;\r\n    color: #000;\r\n\tpadding: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    box-sizing: border-box;\r\n    background-color: white ;\r\n\t/* Positioning */\r\n\tposition: relative;\r\n\ttop: 0px;\r\n\tbottom: 0px;\r\n\tright: 0px;\r\n\tleft: 0px;\r\n\tfloat: none;\r\n\tdisplay: flex;\r\n\tclear: none;\r\n\tz-index: auto;\r\n\r\n\t/* List */\r\n\tlist-style-image: none;\r\n\tlist-style-type: disc;\r\n\tlist-style-position: outside;\r\n\r\n\t/* Table */\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 0px 0px;\r\n\tcaption-side: top;\r\n\tempty-cells: show;\r\n\ttable-layout: auto;\r\n\r\n\t/* Miscellaneous */\r\n\toverflow: hidden;\r\n\tcursor: auto;\r\n\tvisibility: visible;\r\n\r\n\t/* Effects */\r\n\ttransform: none;\r\n\ttransition: all 0s ease 0s;\r\n\toutline-offset: 0px;\r\n\tresize: none;\r\n\ttext-shadow: none;\r\n\ttext-overflow: clip;\r\n\tword-wrap: normal;\r\n\tbox-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 2px 4px 0px;\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n}\r\n.index-module_header__IyCPY{\r\n\twidth: 100%;\r\n\tpadding: 10px;\r\n}";
  var css = {"card":"index-module_card__gFM9a","header":"index-module_header__IyCPY"};
  var stylesheet=".index-module_card__gFM9a {\r\n\t/* Font & Text */\r\n\tfont-family: \"Segoe UI\", \"Segoe UI Web (West European)\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-style: normal;\r\n\tfont-variant: normal;\r\n\tfont-weight: 400;\r\n\tletter-spacing: normal;\r\n\tline-height: 20px;\r\n\tmargin: 0px;\r\n    color: #000;\r\n\tpadding: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    box-sizing: border-box;\r\n    background-color: white ;\r\n\t/* Positioning */\r\n\tposition: relative;\r\n\ttop: 0px;\r\n\tbottom: 0px;\r\n\tright: 0px;\r\n\tleft: 0px;\r\n\tfloat: none;\r\n\tdisplay: flex;\r\n\tclear: none;\r\n\tz-index: auto;\r\n\r\n\t/* List */\r\n\tlist-style-image: none;\r\n\tlist-style-type: disc;\r\n\tlist-style-position: outside;\r\n\r\n\t/* Table */\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 0px 0px;\r\n\tcaption-side: top;\r\n\tempty-cells: show;\r\n\ttable-layout: auto;\r\n\r\n\t/* Miscellaneous */\r\n\toverflow: hidden;\r\n\tcursor: auto;\r\n\tvisibility: visible;\r\n\r\n\t/* Effects */\r\n\ttransform: none;\r\n\ttransition: all 0s ease 0s;\r\n\toutline-offset: 0px;\r\n\tresize: none;\r\n\ttext-shadow: none;\r\n\ttext-overflow: clip;\r\n\tword-wrap: normal;\r\n\tbox-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 2px 4px 0px;\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n}\r\n.index-module_header__IyCPY{\r\n\twidth: 100%;\r\n\tpadding: 10px;\r\n}";
  styleInject(css_248z);

  const CardHeader = /* @__PURE__ */ vue.defineComponent({
    name: "CardHeader",
    props: {
      bodyStyle: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props, ctx) {
      return () => {
        var _a, _b;
        return vue.createVNode("div", {
          "style": props.bodyStyle,
          "class": css.header
        }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
      };
    }
  });
  const Card = /* @__PURE__ */ vue.defineComponent({
    name: "Card",
    props: {
      bodyStyle: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props, ctx) {
      return () => {
        var _a, _b;
        return vue.createVNode("div", {
          "style": props.bodyStyle,
          "class": css.card
        }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
      };
    }
  });

  var x = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Button: Button,
    Card: Card,
    CardHeader: CardHeader,
    Popover: Popover,
    buttonProps: buttonProps
  });

  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  const components = __spreadValues({}, x);
  const install = (app) => {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key]);
    });
  };
  var install$1 = {
    install
  };

  exports.Button = Button;
  exports.Card = Card;
  exports.CardHeader = CardHeader;
  exports.Popover = Popover;
  exports.buttonProps = buttonProps;
  exports.default = install$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=x-vue3.js.map
