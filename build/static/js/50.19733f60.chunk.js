(this.webpackJsonptoor=this.webpackJsonptoor||[]).push([[50],{351:function(e,t,a){"use strict";a.r(t);var s=a(12),c=a(13),i=a(14),n=a(15),r=a(1),l=a(54),o=a.n(l),j=a(23),d=a(24),m=a(52),h=a(55),b=a(6),p=a(103),x=a(159),g=a(71),O=a.n(g),u=a(0),v=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={data:c.getCars(),activePage:1,itemPerpage:8},c}return Object(c.a)(a,[{key:"getCars",value:function(){var e=this.props.minPrice?this.props.minPrice:"",t=this.props.maxPrice?this.props.maxPrice:"";return Object(x.f)(p,{priceFilter:[e,t]})}},{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"render",value:function(){var e=this.state.data.slice((this.state.activePage-1)*this.state.itemPerpage,this.state.activePage*this.state.itemPerpage).map((function(e,t){return Object(u.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:Object(u.jsx)("div",{className:"hotel-grid mb-xl-30",children:Object(u.jsxs)("div",{className:"hotel-grid-wrapper car-grid bx-wrapper",children:[Object(u.jsx)("div",{className:"image-sec animate-img",children:Object(u.jsx)(b.b,{to:"/car-details/"+e.id,children:Object(u.jsx)("img",{src:"/"+e.image,className:"full-width",alt:e.title})})}),Object(u.jsxs)("div",{className:"hotel-grid-caption padding-20 bg-custom-white p-relative",children:[Object(u.jsx)("h4",{className:"title fs-16",children:Object(u.jsxs)(b.b,{to:"/car-details/"+e.id,className:"text-custom-black",children:[e.title,Object(u.jsx)("small",{className:"text-light-dark",children:"Per day"})]})}),Object(u.jsxs)("span",{className:"price",children:[Object(u.jsx)("small",{children:"From"}),"$",(new Intl.NumberFormat).format(e.price.toFixed(0))]}),Object(u.jsxs)("div",{className:"action",children:[Object(u.jsx)(b.b,{to:"/car-details/"+e.id,className:"btn-second btn-small",children:"View"}),Object(u.jsx)(b.b,{to:"/booking",className:"btn-first btn-submit yellow",children:"Book"})]})]})]})})},t)}));return Object(u.jsx)("section",{className:"section-padding bg-light-white",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)("div",{className:"listing-top-heading mb-xl-20",children:[Object(u.jsxs)("h6",{className:"no-margin text-custom-black",children:["Showing ",e.length," Results"]}),Object(u.jsxs)("div",{className:"sort-by",children:[Object(u.jsx)("span",{className:"text-custom-black fs-14 fw-600",children:"Sort by"}),Object(u.jsx)("div",{className:"group-form",children:Object(u.jsxs)("select",{className:"form-control form-control-custom custom-select",children:[Object(u.jsx)("option",{children:"A to Z"}),Object(u.jsx)("option",{children:"Z to A"})]})})]})]})}),e]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("nav",{className:"pagination_layout section-padding-top",children:Object(u.jsx)(O.a,{activePage:this.state.activePage,itemsCountPerPage:this.state.itemPerpage,totalItemsCount:this.state.data.length,pageRangeDisplayed:this.state.data.length,onChange:this.handlePageChange.bind(this),innerClass:"pagination mb-0 justify-content-center",activeClass:"active",itemClass:"page-item",linkClass:"page-link"})})})})]})})}}]),a}(r.Component),N="Car Grid",P=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)(o.a,{children:[Object(u.jsxs)("title",{children:["Toor - Travel Booking - React Template | ",N]}),Object(u.jsx)("meta",{name:"description",content:"#"})]}),Object(u.jsx)(j.a,{}),Object(u.jsx)(m.a,{breadcrumb:{pagename:N}}),Object(u.jsx)(v,{minPrice:this.props.match.params.minPrice,maxPrice:this.props.match.params.maxPrice}),Object(u.jsx)(h.a,{}),Object(u.jsx)(d.a,{})]})}}]),a}(r.Component);t.default=P}}]);
//# sourceMappingURL=50.19733f60.chunk.js.map