(this.webpackJsonptoor=this.webpackJsonptoor||[]).push([[49],{343:function(e,t,s){"use strict";s.r(t);var a=s(40),c=s(41),i=s(42),n=s(43),l=s(0),r=s(52),o=s.n(r),j=s(48),m=s(49),d=s(47),h=s(53),b=s(9),p=s(83),x=s(121),O=s(66),u=s.n(O),g=s(1),v=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={data:c.getHotels(),activePage:1,itemPerpage:8},c}return Object(c.a)(s,[{key:"getHotels",value:function(){var e=this.props.minPrice?this.props.minPrice:"",t=this.props.maxPrice?this.props.maxPrice:"";return Object(x.c)(p,{priceFilter:[e,t]})}},{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"render",value:function(){var e=this.state.data.slice((this.state.activePage-1)*this.state.itemPerpage,this.state.activePage*this.state.itemPerpage).map((function(e,t){return Object(g.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:Object(g.jsx)("div",{className:"hotel-grid mb-xl-30",children:Object(g.jsxs)("div",{className:"hotel-grid-wrapper bx-wrapper",children:[Object(g.jsx)("div",{className:"image-sec animate-img",children:Object(g.jsx)(b.b,{to:"/hotel-details/"+e.id,children:Object(g.jsx)("img",{src:"/tm/react/toor/"+e.image[0],className:"full-width",alt:e.title})})}),Object(g.jsxs)("div",{className:"hotel-grid-caption padding-20 bg-custom-white p-relative",children:[Object(g.jsx)("h4",{className:"title fs-16",children:Object(g.jsxs)(b.b,{to:"/hotel-details/"+e.id,className:"text-custom-black",children:[e.title,Object(g.jsx)("small",{className:"text-light-dark",children:e.location})]})}),Object(g.jsxs)("span",{className:"price",children:[Object(g.jsx)("small",{children:"avg/night"}),"$",(new Intl.NumberFormat).format(e.price.toFixed(0))]}),Object(g.jsxs)("div",{className:"action",children:[Object(g.jsx)(b.b,{to:"/hotel-details/"+e.id,className:"btn-second btn-small",children:"View"}),Object(g.jsx)(b.b,{to:"/booking",className:"btn-first btn-submit",children:"Book"})]})]})]})})},t)}));return Object(g.jsx)("section",{className:"section-padding bg-light-white",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-12",children:Object(g.jsxs)("div",{className:"listing-top-heading mb-xl-20",children:[Object(g.jsxs)("h6",{className:"no-margin text-custom-black",children:["Showing ",e.length," Results"]}),Object(g.jsxs)("div",{className:"sort-by",children:[Object(g.jsx)("span",{className:"text-custom-black fs-14 fw-600",children:"Sort by"}),Object(g.jsx)("div",{className:"group-form",children:Object(g.jsxs)("select",{className:"form-control form-control-custom custom-select",children:[Object(g.jsx)("option",{children:"A to Z"}),Object(g.jsx)("option",{children:"Z to A"})]})})]})]})}),e]}),Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"col-12",children:Object(g.jsx)("nav",{className:"pagination_layout section-padding-top",children:Object(g.jsx)(u.a,{activePage:this.state.activePage,itemsCountPerPage:this.state.itemPerpage,totalItemsCount:this.state.data.length,pageRangeDisplayed:this.state.data.length,onChange:this.handlePageChange.bind(this),innerClass:"pagination mb-0 justify-content-center",activeClass:"active",itemClass:"page-item",linkClass:"page-link"})})})})]})})}}]),s}(l.Component),N="Hotel Grid",f=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(g.jsxs)(l.Fragment,{children:[Object(g.jsxs)(o.a,{children:[Object(g.jsxs)("title",{children:["Toor - Travel Booking - React Template | ",N]}),Object(g.jsx)("meta",{name:"description",content:"#"})]}),Object(g.jsx)(j.a,{}),Object(g.jsx)(d.a,{breadcrumb:{pagename:N}}),Object(g.jsx)(v,{minPrice:this.props.match.params.minPrice,maxPrice:this.props.match.params.maxPrice}),Object(g.jsx)(h.a,{}),Object(g.jsx)(m.a,{})]})}}]),s}(l.Component);t.default=f},47:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(42),n=s(43),l=s(0),r=s(9),o=s(1),j=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"subheader normal-bg section-padding",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("h1",{className:"text-custom-white",children:this.props.breadcrumb.pagename}),Object(o.jsxs)("ul",{className:"custom-flex justify-content-center",children:[Object(o.jsx)("li",{className:"fw-500",children:Object(o.jsx)(r.b,{to:"/",className:"text-custom-white",children:"Home"})}),Object(o.jsx)("li",{className:"active fw-500",children:this.props.breadcrumb.pagename})]})]})})})})}}]),s}(l.Component);t.a=j}}]);
//# sourceMappingURL=49.d6565f00.chunk.js.map