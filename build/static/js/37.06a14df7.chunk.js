(this.webpackJsonptoor=this.webpackJsonptoor||[]).push([[37],{327:function(t,e,n){"use strict";var r=n(1),o=n(16);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function f(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function d(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),o=r?r[1]:"",i=r?r[3]:"",a=r?r[2]:n,u=a.length>=e?a:(d(Array(e)).map((function(){return"0"})).join("")+a).slice(-1*e);return"".concat(o).concat(u).concat(i)}var h={daysInHours:!1,zeroPadTime:2};function v(t,e){var n=t.days,r=t.hours,o=t.minutes,i=t.seconds,a=Object.assign(Object.assign({},h),e),u=a.daysInHours,c=a.zeroPadTime,l=a.zeroPadDays,s=void 0===l?c:l,f=Math.min(2,c),p=u?y(r+24*n,c):y(r,f);return{days:u?"":y(n,s),hours:p,minutes:y(o,f),seconds:y(i,f)}}var b=function(t){c(n,t);var e=p(n);function n(){var t;return i(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return u(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component);b.propTypes={count:o.number,children:o.element,onComplete:o.func};var O=function(t){c(n,t);var e=p(n);function n(t){var o;if(i(this,n),(o=e.call(this,t)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=Object(r.createRef)(),o.tick=function(){var t=o.calcTimeDelta(),e=t.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(t,void 0,e)},o.start=function(){if(!o.isStarted()){var t=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=t?o.calcOffsetStartTimestamp()-t:0;var e=o.calcTimeDelta();o.setTimeDeltaState(e,"STARTED",o.props.onStart),o.props.controlled||e.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},t.date){var a=o.calcTimeDelta();o.state={timeDelta:a,status:a.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return u(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,r=t.precision,o=t.controlled,i=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,i=n.precision,a=void 0===i?0:i,u=n.controlled,c=n.offsetTime,l=void 0===c?0:c,s=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,u||(e+=l);var f=u?e:e-o(),p=Math.min(20,Math.max(0,a)),d=Math.round(1e3*parseFloat(((s?f:Math.max(0,f))/1e3).toFixed(p))),m=Math.abs(d)/1e3;return{total:d,days:Math.floor(m/86400),hours:Math.floor(m/3600%24),minutes:Math.floor(m/60%60),seconds:Math.floor(m%60),milliseconds:Number((m%1*1e3).toFixed()),completed:d<=0}}(e,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var r=this;if(this.mounted){var o=t.completed&&!this.state.timeDelta.completed,i=t.completed&&"STARTED"===e;o&&!this.props.overtime&&this.clearTimer();return this.setState((function(n){var o=e||n.status;return t.completed&&!r.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}}),(function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||i)&&r.props.onComplete(t,i)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,r=t.zeroPadDays,o=this.state.timeDelta;return Object.assign(Object.assign({},o),{api:this.getApi(),props:this.props,formatted:v(o,{daysInHours:e,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,o=t.onComplete;return Object(r.createElement)(b,{ref:this.legacyCountdownRef,count:e,onComplete:o},n)}var i=this.props,a=i.className,u=i.overtime,c=i.children,l=i.renderer,s=this.getRenderProps();if(l)return l(s);if(c&&this.state.timeDelta.completed&&!u)return Object(r.cloneElement)(c,{countdown:s});var f=s.formatted,p=f.days,d=f.hours,m=f.minutes,y=f.seconds;return Object(r.createElement)("span",{className:a},s.total<0?"-":"",p,p?":":"",d,":",m,":",y)}}]),n}(r.Component);O.defaultProps=Object.assign(Object.assign({},h),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),O.propTypes={date:Object(o.oneOfType)([Object(o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},e.a=O},54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"ReactTitle",{enumerable:!0,get:function(){return i.default}}),e.default=void 0;var r=a(n(57)),o=a(n(58)),i=a(n(67));function a(t){return t&&t.__esModule?t:{default:t}}var u=o.default;e.default=u},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.MetaContext=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(1));function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}var s=(0,r.createContext)({});e.MetaContext=s;var f=function(t){function e(){return i(this,e),u(this,c(e).apply(this,arguments))}var n,o,f;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){return r.default.createElement(s.Provider,{value:{extract:this.props.extract}},r.Children.only(this.props.children))}}])&&a(n.prototype,o),f&&a(n,f),e}(r.Component),p=f;e.default=p},58:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(1)),i=(r=n(25))&&r.__esModule?r:{default:r},a=n(66),u=n(57);function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}var m=function(t){function e(){return l(this,e),f(this,p(e).apply(this,arguments))}var n,r,u;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(t){t.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&i.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var t=this.context.extract,e=this.props.children;e&&t&&t(e)}},{key:"handleChildrens",value:function(){var t=this,e=this.props.children;if(!this.context.extract&&e){var n=o.default.createElement("div",{className:"react-head-temp"},e);i.default.render(n,this.temporaryElement,(function(){var e=t.temporaryElement.innerHTML;if(t.lastChildStr!==e){t.lastChildStr=e;var n=t.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,i=o.innerHTML;(r=(r=r.filter((function(t){return-1===i.indexOf(t.outerHTML)}))).map((function(t){return t.cloneNode(!0)}))).forEach((function(t){var e=t.tagName.toLowerCase();if("title"===e){var n=(0,a.getDuplicateTitle)();n&&(0,a.removeChild)(o,n)}else if(t.id){var r=(0,a.getDuplicateElementById)(t);r&&(0,a.removeChild)(o,r)}else if("meta"===e){var i=(0,a.getDuplicateMeta)(t);i&&(0,a.removeChild)(o,i)}else if("link"===e&&"canonical"===t.rel){var u=(0,a.getDuplicateCanonical)(t);u&&(0,a.removeChild)(o,u)}})),(0,a.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(n.prototype,r),u&&s(n,u),e}(o.Component);!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(m,"contextType",u.MetaContext);var y=m;e.default=y,t.exports=e.default},66:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.filterAndArrangeTags=function(t){var e=null,n=null,r=[],a=[];return t.forEach((function(t){var o=t.type,i=t.props;"title"===o?e=t:"link"===o&&"canonical"===i.rel?n=t:"meta"===o?r.push(t):a.push(t)})),[e].concat(function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(t){var e={};i.forEach((function(t){e[t]=[]}));for(var n=[],r=function(r){var a=t[r],u=a.props.id;(u?!e.id[u]:0===o.filter((function(t){var n=a.props[t],r=e[t][n];return r&&!r.props.id})).length)&&(n.unshift(a),i.forEach((function(t){var n=a.props[t];n&&(e[t][n]=a)})))},a=t.length-1;a>=0;a--)r(a);return n}(r)),[n],a)},e.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},e.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},e.getDuplicateElementById=function(t){var e=t.id;return e&&document.head.querySelector("#".concat(e))},e.getDuplicateMeta=function(t){var e=document.head;return r.reduce((function(n,r){var o,i=t.getAttribute(r);return i?n.concat((o=e.querySelectorAll("[".concat(r,' = "').concat(i,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(t){return!t.id})))):n}),[])},e.appendChild=function(t,e){void 0===e.length&&(e=[e]);for(var n=document.createDocumentFragment(),r=0,o=e.length;r<o;r++)n.appendChild(e[r]);t.appendChild(n)},e.removeChild=function(t,e){void 0===e.length&&(e=[e]);for(var n=0,r=e.length;n<r;n++)t.removeChild(e[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),i=o.concat(["id"])},67:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(1)),i=(r=n(58))&&r.__esModule?r:{default:r};function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}var p=function(t){function e(){return u(this,e),l(this,s(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return o.default.createElement(i.default,null,o.default.createElement("title",null,this.props.title))}}])&&c(n.prototype,r),a&&c(n,a),e}(o.Component),d=p;e.default=d,t.exports=e.default}}]);
//# sourceMappingURL=37.06a14df7.chunk.js.map