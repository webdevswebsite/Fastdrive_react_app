(this.webpackJsonptoor=this.webpackJsonptoor||[]).push([[46],{340:function(e,t,s){"use strict";s.r(t);var a=s(41),c=s(42),i=s(43),l=s(44),n=s(1),r=s(53),j=s.n(r),d=s(49),b=s(50),o=s(48),m=s(54),h=s(8),u=s(83),x=s(75),O=s(60),g=s(96),p=s(67),N=s.n(p),v=s(0),f=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={data:u,activePage:1,itemPerpage:6},c}return Object(c.a)(s,[{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"render",value:function(){var e=this.state.data.slice((this.state.activePage-1)*this.state.itemPerpage,this.state.activePage*this.state.itemPerpage).map((function(e,t){return Object(v.jsx)("article",{className:"col-md-6 post mb-xl-30",children:Object(v.jsxs)("div",{className:"post-wrapper bx-wrapper",children:[Object(v.jsxs)("div",{className:"post-img animate-img",children:[Object(v.jsx)(h.b,{to:"/blog-details/"+e.id,children:Object(v.jsx)("img",{src:"/"+e.image[0],className:"full-width",alt:e.title})}),Object(v.jsx)("div",{className:"post-date",dangerouslySetInnerHTML:{__html:Object(x.b)(e.postdate)}})]}),Object(v.jsxs)("div",{className:"blog-meta padding-20 bg-custom-white p-relative",children:[Object(v.jsxs)("div",{className:"post-meta mb-xl-20",children:[Object(v.jsxs)(h.b,{to:"/blog-details/"+e.id,className:"text-light-dark mr-1",children:[Object(v.jsx)("span",{className:"text-custom-blue",children:Object(v.jsx)("i",{className:"fas fa-comment"})})," ",e.reviews.length," Comments"]}),Object(v.jsxs)(h.b,{to:"/blog-details/"+e.id,className:"text-light-dark mr-1",children:[Object(v.jsx)("span",{className:"text-custom-blue",children:Object(v.jsx)("i",{className:"fas fa-thumbs-up"})})," ",e.likes," Likes"]})]}),Object(v.jsxs)("div",{className:"post-heading",children:[Object(v.jsx)("h2",{children:Object(v.jsx)(h.b,{to:"/blog-details/"+e.id,className:"text-custom-black fw-600 fs-20",children:e.title})}),Object(v.jsxs)("p",{className:"text-light-dark no-margin",children:[e.shorttext,"..."]})]})]}),Object(v.jsxs)("div",{className:"post-footer",children:[Object(O.b)(e.author).map((function(e,t){return Object(v.jsx)("div",{className:"post-author",children:Object(v.jsxs)("cite",{className:"text-custom-black",children:["Post By ",Object(v.jsx)(h.b,{to:"/blog/author/"+e.id,children:e.name})]})},t)})),Object(v.jsx)(h.b,{to:"/blog-details/"+e.id,className:"text-custom-blue fs-14 fs-600",children:"Read More"})]})]})},t)}));return Object(v.jsx)("section",{className:"section-padding bg-light-white our_articles",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-lg-8",children:[Object(v.jsx)("div",{className:"row",children:e}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("nav",{className:"pagination_layout section-padding-top mb-md-80",children:Object(v.jsx)(N.a,{activePage:this.state.activePage,itemsCountPerPage:this.state.itemPerpage,totalItemsCount:this.state.data.length,pageRangeDisplayed:this.state.data.length,onChange:this.handlePageChange.bind(this),innerClass:"pagination mb-0 justify-content-center",activeClass:"active",itemClass:"page-item",linkClass:"page-link"})})})})]}),Object(v.jsx)("aside",{className:"col-lg-4",children:Object(v.jsx)("div",{className:"sidebar_wrap",children:Object(v.jsx)(g.a,{})})})]})})})}}]),s}(n.Component),w="Blog Grid",k=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsxs)(j.a,{children:[Object(v.jsxs)("title",{children:["Toor - Travel Booking - React Template | ",w]}),Object(v.jsx)("meta",{name:"description",content:"#"})]}),Object(v.jsx)(d.a,{}),Object(v.jsx)(o.a,{breadcrumb:{pagename:w}}),Object(v.jsx)(f,{}),Object(v.jsx)(m.a,{}),Object(v.jsx)(b.a,{})]})}}]),s}(n.Component);t.default=k},48:function(e,t,s){"use strict";var a=s(41),c=s(42),i=s(43),l=s(44),n=s(1),r=s(8),j=s(0),d=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"subheader normal-bg section-padding",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h1",{className:"text-custom-white",children:this.props.breadcrumb.pagename}),Object(j.jsxs)("ul",{className:"custom-flex justify-content-center",children:[Object(j.jsx)("li",{className:"fw-500",children:Object(j.jsx)(r.b,{to:"/",className:"text-custom-white",children:"Home"})}),Object(j.jsx)("li",{className:"active fw-500",children:this.props.breadcrumb.pagename})]})]})})})})}}]),s}(n.Component);t.a=d},96:function(e,t,s){"use strict";var a=s(41),c=s(42),i=s(43),l=s(44),n=s(1),r=s(8),j=s(3),d=s(62),b=s(61),o=s(75),m=s(0),h=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={searchText:""},c}return Object(c.a)(s,[{key:"onChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.searchText&&this.props.history.push("/blog/search/"+this.state.searchText)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"sidebar",children:[Object(m.jsxs)("div",{className:"sidebar_widgets mb-xl-30",children:[Object(m.jsx)("div",{className:"widget_title bg-custom-blue",children:Object(m.jsx)("h5",{className:"no-margin text-custom-white",children:"Search"})}),Object(m.jsx)("form",{onSubmit:this.handleSubmit.bind(this),method:"GET",children:Object(m.jsxs)("div",{className:"input-group group-form",children:[Object(m.jsx)("input",{type:"search",className:"form-control form-control-custom",placeholder:"Search",name:"searchText",value:this.state.searchText,onChange:this.onChange.bind(this),required:!0}),Object(m.jsx)("button",{type:"submit",className:"input-group-append",children:Object(m.jsx)("i",{className:"fas fa-search"})})]})})]}),Object(m.jsxs)("div",{className:"sidebar_widgets mb-xl-30",children:[Object(m.jsx)("div",{className:"widget_title bg-custom-blue",children:Object(m.jsx)("h5",{className:"no-margin text-custom-white",children:"Category"})}),Object(m.jsx)("ul",{className:"categories custom",children:b.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsxs)(r.b,{to:"/blog/cat/"+e.id,className:"text-custom-black fs-14",children:[e.title," ",Object(m.jsxs)("span",{className:"text-light-dark",children:["(",e.count,")"]})]})},t)}))})]}),Object(m.jsxs)("div",{className:"sidebar_widgets mb-xl-30",children:[Object(m.jsx)("div",{className:"widget_title bg-custom-blue",children:Object(m.jsx)("h5",{className:"no-margin text-custom-white",children:"Recent Post"})}),Object(m.jsx)("ul",{className:"custom popular_post",children:Object(o.e)().map((function(e,t){return Object(m.jsx)("li",{className:"mb-xl-20",children:Object(m.jsx)("div",{className:"post",children:Object(m.jsxs)("div",{className:"post-wrapper",children:[Object(m.jsx)("div",{className:"popular_post_img animate-img",children:Object(m.jsx)(r.b,{to:"/blog-details/"+e.id,children:Object(m.jsx)("img",{src:"/"+e.image[0],className:"image-fit",alt:e.title})})}),Object(m.jsxs)("div",{className:"popular_post_title",children:[Object(m.jsx)("h6",{children:Object(m.jsx)(r.b,{to:"/blog-details/"+e.id,className:"text-custom-black fs-14",children:e.title})}),Object(m.jsx)("span",{className:"date text-custom-blue fw-600 fs-14",children:e.postdate})]})]})})},t)}))})]}),Object(m.jsxs)("div",{className:"sidebar_widgets",children:[Object(m.jsx)("div",{className:"widget_title bg-custom-blue",children:Object(m.jsx)("h5",{className:"no-margin text-custom-white",children:"Tags"})}),Object(m.jsx)("div",{className:"tags",children:d.map((function(e,t){return Object(m.jsx)(r.b,{to:"/blog/tag/"+e.id,children:e.title},t)}))})]})]})}}]),s}(n.Component);t.a=Object(j.f)(h)}}]);
//# sourceMappingURL=46.72b12399.chunk.js.map