!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,u,a,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(h,t),s?j(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=b();if(O(e))return T(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function T(e){return f=void 0,p&&r?j(e):(r=i=void 0,a)}function w(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(h,t),j(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=g(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(g(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:T(b())},w}function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),S=j.querySelector("input[name='email']"),O=j.querySelector("textarea[name='message']"),h=JSON.parse(LocalStorage.getItem("feedback-form-state"));if(null!==h){var T=h.email,w=h.message;S.value=T,O.value=w}j.addEventListener("submit",(function(e){if(e.preventDefault()," "===S.value||" "===O.value)alert("Заповніть усі форми");else{var t=LocalStorage.getItem("feedback-form-state");console.log(JSON.parse(t)),localStorage.removeItem("feedback-form-state"),S.value=" ",O.value=" "}}))}();
//# sourceMappingURL=03-feedback.fe41d09d.js.map
