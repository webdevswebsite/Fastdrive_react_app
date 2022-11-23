/*! For license information please see 30.23c5d9e4.chunk.js.LICENSE.txt */
(this.webpackJsonptoor=this.webpackJsonptoor||[]).push([[30],{352:function(e,t,r){"use strict";r.r(t);var n=r(38),o=r(39),i=r(40),c=r(41),a=r(0),l=r(50),s=r.n(l),u=r(46),f=r(47),p=r(45),d=r(9),h=r(100),b=r(157),m=r(57),y=r(64),j=r.n(y),v=r(1),O=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(e){var o;return Object(n.a)(this,r),(o=t.call(this,e)).state={data:o.getCruises(),activePage:1,itemPerpage:8},o}return Object(o.a)(r,[{key:"getCruises",value:function(){var e=this.props.minPrice?this.props.minPrice:"",t=this.props.maxPrice?this.props.maxPrice:"",r=this.props.minNight?this.props.minNight:"",n=this.props.maxNight?this.props.maxNight:"";return Object(b.e)(h,{priceFilter:[e,t],nightFilter:[r,n]})}},{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"render",value:function(){var e=this.state.data.slice((this.state.activePage-1)*this.state.itemPerpage,this.state.activePage*this.state.itemPerpage).map((function(e,t){return Object(v.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:Object(v.jsx)("div",{className:"cruise-grid mb-xl-30",children:Object(v.jsxs)("div",{className:"cruise-grid-wrapper bx-wrapper",children:[Object(v.jsx)("div",{className:"image-sec animate-img",children:Object(v.jsx)(d.b,{to:"/cruise-details/"+e.id,children:Object(v.jsx)("img",{src:"/tm/react/toor/"+e.image,className:"full-width",alt:e.title})})}),Object(v.jsxs)("div",{className:"cruise-grid-caption padding-20 bg-custom-white p-relative",children:[Object(v.jsx)("h4",{className:"title fs-16 no-margin",children:Object(v.jsxs)(d.b,{to:"/cruise-details/"+e.id,className:"text-custom-black",children:[e.title,Object(v.jsxs)("small",{className:"text-light-dark",children:[e.night," Nights"]})]})}),Object(v.jsxs)("span",{className:"price",children:[Object(v.jsx)("small",{children:"From"}),"$",(new Intl.NumberFormat).format(e.price.toFixed(0))]}),Object(v.jsxs)("div",{className:"feedback",children:[Object(v.jsx)("div",{className:"ratings",children:Object(v.jsx)("div",{className:"rating",children:Object(m.a)(e.rating)})}),Object(v.jsxs)("span",{className:"review fs-12 text-light-white",children:[e.reviews.length," reviews"]})]}),Object(v.jsxs)("div",{className:"row time",children:[Object(v.jsxs)("div",{className:"date col-6",children:[Object(v.jsx)("i",{className:"far fa-clock text-yellow fs-18"}),Object(v.jsxs)("div",{className:"text-light-dark fs-12",children:[Object(v.jsx)("span",{className:"text-custom-blue",children:"Date"}),Object(v.jsx)("br",{}),e.cruisedate]})]}),Object(v.jsxs)("div",{className:"departure col-6",children:[Object(v.jsx)("i",{className:"fas fa-map-marker-alt text-yellow fs-18"}),Object(v.jsxs)("div",{className:"text-light-dark fs-12",children:[Object(v.jsx)("span",{className:"text-custom-blue",children:"Departure"}),Object(v.jsx)("br",{}),e.deplocation]})]})]}),Object(v.jsx)("div",{className:"action",children:Object(v.jsx)(d.b,{to:"/cruise-details/"+e.id,className:"btn-first btn-submit",children:"Book"})})]})]})})},t)}));return Object(v.jsx)("section",{className:"section-padding bg-light-white",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-12",children:Object(v.jsxs)("div",{className:"listing-top-heading mb-xl-20",children:[Object(v.jsxs)("h6",{className:"no-margin text-custom-black",children:["Showing ",e.length," Results"]}),Object(v.jsxs)("div",{className:"sort-by",children:[Object(v.jsx)("span",{className:"text-custom-black fs-14 fw-600",children:"Sort by"}),Object(v.jsx)("div",{className:"group-form",children:Object(v.jsxs)("select",{className:"form-control form-control-custom custom-select",children:[Object(v.jsx)("option",{children:"A to Z"}),Object(v.jsx)("option",{children:"Z to A"})]})})]})]})}),e]}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("nav",{className:"pagination_layout section-padding-top",children:Object(v.jsx)(j.a,{activePage:this.state.activePage,itemsCountPerPage:this.state.itemPerpage,totalItemsCount:this.state.data.length,pageRangeDisplayed:this.state.data.length,onChange:this.handlePageChange.bind(this),innerClass:"pagination mb-0 justify-content-center",activeClass:"active",itemClass:"page-item",linkClass:"page-link"})})})})]})})}}]),r}(a.Component),g="Cruise Grid",x=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(v.jsxs)(a.Fragment,{children:[Object(v.jsxs)(s.a,{children:[Object(v.jsxs)("title",{children:["Toor - Travel Booking - React Template | ",g]}),Object(v.jsx)("meta",{name:"description",content:"#"})]}),Object(v.jsx)(u.a,{}),Object(v.jsx)(p.a,{breadcrumb:{pagename:g}}),Object(v.jsx)(O,{minPrice:this.props.match.params.minPrice,maxPrice:this.props.match.params.maxPrice,minNight:this.props.match.params.minNight,maxNight:this.props.match.params.maxNight}),Object(v.jsx)(f.a,{})]})}}]),r}(a.Component);t.default=x},38:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},39:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r.d(t,"a",(function(){return o}))},40:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(14);function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(n.a)(e,t)}},41:function(e,t,r){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}r.d(t,"a",(function(){return a}));var i=r(49);function c(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Object(i.a)(e)}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=n(e);if(t){var i=n(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return c(this,r)}}},42:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},49:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},50:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var n=c(r(53)),o=c(r(54)),i=c(r(63));function c(e){return e&&e.__esModule?e:{default:e}}var a=o.default;t.default=a},53:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}var u=(0,n.createContext)({});t.MetaContext=u;var f=function(e){function t(){return i(this,t),a(this,l(t).apply(this,arguments))}var r,o,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){return n.default.createElement(u.Provider,{value:{extract:this.props.extract}},n.Children.only(this.props.children))}}])&&c(r.prototype,o),f&&c(r,f),t}(n.Component),p=f;t.default=p},54:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=(n=r(13))&&n.__esModule?n:{default:n},c=r(62),a=r(53);function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}var h=function(e){function t(){return s(this,t),f(this,p(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&i.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=o.default.createElement("div",{className:"react-head-temp"},t);i.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),o=document.head,i=o.innerHTML;(n=(n=n.filter((function(e){return-1===i.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,c.getDuplicateTitle)();r&&(0,c.removeChild)(o,r)}else if(e.id){var n=(0,c.getDuplicateElementById)(e);n&&(0,c.removeChild)(o,n)}else if("meta"===t){var i=(0,c.getDuplicateMeta)(e);i&&(0,c.removeChild)(o,i)}else if("link"===t&&"canonical"===e.rel){var a=(0,c.getDuplicateCanonical)(e);a&&(0,c.removeChild)(o,a)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(r.prototype,n),a&&u(r,a),t}(o.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(h,"contextType",a.MetaContext);var b=h;t.default=b,e.exports=t.default},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],c=[];return e.forEach((function(e){var o=e.type,i=e.props;"title"===o?t=e:"link"===o&&"canonical"===i.rel?r=e:"meta"===o?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};i.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var c=e[n],a=c.props.id;(a?!t.id[a]:0===o.filter((function(e){var r=c.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(c),i.forEach((function(e){var r=c.props[e];r&&(t[e][r]=c)})))},c=e.length-1;c>=0;c--)n(c);return r}(n)),[r],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return n.reduce((function(r,n){var o,i=e.getAttribute(n);return i?r.concat((o=t.querySelectorAll("[".concat(n,' = "').concat(i,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,o=t.length;n<o;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],o=n.concat(["itemProp"]),i=o.concat(["id"])},63:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=(n=r(54))&&n.__esModule?n:{default:n};function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}var p=function(e){function t(){return a(this,t),s(this,u(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return o.default.createElement(i.default,null,o.default.createElement("title",null,this.props.title))}}])&&l(r.prototype,n),c&&l(r,c),t}(o.Component),d=p;t.default=d,e.exports=t.default}}]);
//# sourceMappingURL=30.23c5d9e4.chunk.js.map