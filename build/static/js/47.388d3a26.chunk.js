(this.webpackJsonptoor=this.webpackJsonptoor||[]).push([[47],{341:function(e,t,s){"use strict";s.r(t);var c=s(41),a=s(42),l=s(43),i=s(44),n=s(1),m=s(53),r=s.n(m),j=s(49),b=s(50),o=s(48),d=s(54),h=s(52),x=s(8),O=s(83),u=s(75),N=s(60),p=s(0),g=function(e){Object(l.a)(s,e);var t=Object(i.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).openSocialPopup=a.openSocialPopup.bind(Object(h.a)(a)),a}return Object(a.a)(s,[{key:"openSocialPopup",value:function(e){window.open(e.link,"MsgWindow","width=600,height=600")}},{key:"render",value:function(){var e=this,t=this.props.detailId,s=Object(u.a)(t);return Object(p.jsx)("section",{className:"section-padding bg-light-white blog-details",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12",children:Object(p.jsxs)("div",{className:"blog-details bx-wrapper bg-custom-white padding-20",children:[Object(p.jsx)("article",{className:"post p-relative",children:Object(p.jsxs)("div",{className:"post-wrapper",children:[Object(p.jsx)("div",{className:"post-img animate-img mb-xl-20",children:Object(p.jsx)("img",{src:"/"+s.image[0],className:"image-fit",alt:s.title})}),Object(p.jsxs)("div",{className:"blog-meta bg-custom-white",children:[Object(p.jsxs)("div",{className:"post-meta-box mb-xl-20",children:[Object(p.jsx)("div",{className:"post-categories",children:Object(N.c)(s.category).map((function(e,t){return Object(p.jsx)(x.b,{to:"/blog/cat/"+e.id,className:"text-custom-black fs-18",children:e.title},t)}))}),Object(p.jsxs)("div",{className:"post-meta",children:[Object(p.jsxs)(x.b,{to:"/blog-details/"+s.id,className:"text-light-dark mr-2",tabIndex:-1,children:[Object(p.jsx)("span",{className:"text-custom-blue",children:Object(p.jsx)("i",{className:"fas fa-comment"})})," ",s.reviews.length]}),Object(p.jsxs)(x.b,{to:"/blog-details/"+s.id,className:"text-light-dark mr-2",tabIndex:-1,children:[Object(p.jsx)("span",{className:"text-custom-blue",children:Object(p.jsx)("i",{className:"fas fa-thumbs-up"})})," ",s.likes]}),Object(p.jsxs)(x.b,{to:"/blog-details/"+s.id,className:"text-light-dark mr-2",tabIndex:-1,children:[Object(p.jsx)("span",{className:"text-custom-blue",children:Object(p.jsx)("i",{className:"fas fa-eye"})})," ",s.views]}),Object(p.jsx)("div",{className:"post-date",dangerouslySetInnerHTML:{__html:Object(u.b)(s.postdate)}})]})]}),Object(p.jsx)("div",{className:"post-heading p-relative",children:Object(p.jsx)("h2",{children:Object(p.jsx)(x.b,{to:"/blog-details/"+s.id,className:"text-custom-black",children:s.title})})}),Object(N.b)(s.author).map((function(e,t){return Object(p.jsxs)("div",{className:"post-author mb-xl-20",children:[Object(p.jsx)("div",{className:"author-img animate-img",children:Object(p.jsx)(x.b,{to:"/blog/author/"+e.id,children:Object(p.jsx)("img",{src:"/"+e.image,className:"rounded-circle",alt:e.name})})}),Object(p.jsxs)("span",{className:"text-theme fs-14",children:["By ",Object(p.jsx)(x.b,{to:"/blog/author/"+e.id,className:"text-custom-black fw-500",children:e.name})]})]},t)})),Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:s.htmltext}})]})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"post-details-tags-social mb-xl-20",children:Object(p.jsxs)("div",{className:"row no-margin",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"tags-box",children:[Object(p.jsx)("span",{className:"fs-18 text-light-dark",children:Object(p.jsx)("i",{className:"fas fa-tags"})}),Object(p.jsx)("div",{className:"tags",children:Object(N.d)(s.tags).map((function(e,t){return Object(p.jsx)(x.b,{to:"/blog/tag/"+e.id,children:e.title},t)}))})]})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)("div",{className:"social-media-box",children:Object(p.jsxs)("ul",{className:"custom-flex",children:[Object(N.f)(s.title).map((function(t,s){return Object(p.jsxs)("li",{children:[Object(p.jsx)(x.b,{to:"#",onClick:function(c){return e.openSocialPopup(t,s)},className:t.iconStyle,children:Object(p.jsx)("i",{className:t.iconClass})}),Object(p.jsx)("span",{className:"social-number bg-light-white",children:t.postnumber})]},s)})),Object(p.jsx)("li",{children:Object(p.jsx)(x.b,{to:"#",className:"bg-custom-blue",children:Object(p.jsx)("i",{className:"fas fa-share-alt"})})})]})})})]})}),Object(N.b)(s.author).map((function(e,t){return Object(p.jsxs)("div",{className:"post-author bg-light-white padding-15 mb-xl-20",children:[Object(p.jsx)("div",{className:"author-img animate-img mb-sm-20",children:Object(p.jsx)(x.b,{to:"/blog/author/"+e.id,children:Object(p.jsx)("img",{src:"/"+e.image,className:"image-fit rounded-circle",alt:e.name})})}),Object(p.jsxs)("div",{className:"author-caption",children:[Object(p.jsxs)("h5",{className:"fw-600",children:[Object(p.jsx)(x.b,{to:"/blog/author/"+e.id,className:"text-custom-black",children:e.name}),e.social.map((function(e,t){return Object(p.jsx)("span",{className:"text-custom-blue fs-16 ml-2",children:Object(p.jsx)("i",{className:e.icon})},t)}))]}),Object(p.jsx)(x.b,{to:"/blog/author/"+e.id,className:"authorpost text-custom-blue fw-600",children:"Most article by this author"}),Object(p.jsx)("p",{className:"text-light-white",children:e.shorttext})]})]},t)})),Object(p.jsx)("div",{className:"pagination-btn",children:Object(p.jsx)("nav",{children:Object(p.jsx)("ul",{className:"pagination",children:Object(u.d)(O,O.findIndex((function(e){return parseInt(e.id)===parseInt(t)})))})})}),Object(p.jsx)("div",{className:"comment-box section-padding-top p-relative",children:Object(p.jsxs)("div",{id:"comment-box",children:[Object(p.jsxs)("h4",{className:"text-custom-black fw-600",children:["Reviews [",s.reviews.length,"]"]}),Object(p.jsx)("ul",{className:"comments custom",children:s.reviews.map((function(e,t){return Object(p.jsxs)("li",{className:"comment",children:[Object(N.b)(e.user).map((function(t,c){return Object(p.jsxs)("article",{children:[Object(p.jsx)("div",{className:"comment-avatar",children:Object(p.jsx)("img",{src:"/"+t.image,className:"rounded-circle",alt:t.name})}),Object(p.jsxs)("div",{className:"comment-content",children:[Object(p.jsxs)("div",{className:"comment-meta",children:[Object(p.jsxs)("div",{className:"comment-meta-header",children:[Object(p.jsx)("h5",{className:"text-custom-black fw-600 author mb-3",children:t.name}),Object(p.jsx)("div",{className:"post-date",children:Object(p.jsx)(x.b,{to:"/blog-details/"+s.id,className:"date bg-custom-blue text-custom-white",children:e.commentdate})})]}),Object(p.jsx)("div",{className:"comment-meta-reply",children:Object(p.jsx)(x.b,{to:"#",className:"comment-reply-link btn-first btn-submit",children:Object(p.jsx)("i",{className:"fas fa-reply"})})})]}),Object(p.jsx)("div",{className:"comment",children:Object(p.jsx)("p",{className:"text-light-dark",children:e.comment})})]})]},c)})),Object(p.jsx)("ul",{className:"children",children:e.replies.map((function(e,t){return Object(p.jsx)("li",{className:"comment",children:Object(N.b)(e.user).map((function(t,c){return Object(p.jsxs)("article",{children:[Object(p.jsx)("div",{className:"comment-avatar",children:Object(p.jsx)("img",{src:"/"+t.image,className:"rounded-circle",alt:t.name})}),Object(p.jsxs)("div",{className:"comment-content",children:[Object(p.jsxs)("div",{className:"comment-meta",children:[Object(p.jsxs)("div",{className:"comment-meta-header",children:[Object(p.jsx)("h5",{className:"text-custom-black fw-600 author mb-3",children:t.name}),Object(p.jsx)("div",{className:"post-date",children:Object(p.jsx)(x.b,{to:"/blog-details/"+s.id,className:"date bg-custom-blue text-custom-white",children:e.commentdate})})]}),Object(p.jsx)("div",{className:"comment-meta-reply",children:Object(p.jsx)(x.b,{to:"#",className:"comment-reply-link btn-first btn-submit",children:Object(p.jsx)("i",{className:"fas fa-reply"})})})]}),Object(p.jsx)("div",{className:"comment",children:Object(p.jsx)("p",{className:"text-light-dark",children:e.comment})})]})]},c)}))},t)}))})]},t)}))}),Object(p.jsxs)("div",{className:"comment-respond",id:"respond",children:[Object(p.jsx)("h4",{className:"text-custom-black fw-600",children:"Leave Comment"}),Object(p.jsx)("form",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"text-custom-black fw-500 fs-14",children:"Full Name"}),Object(p.jsx)("input",{type:"text",name:"#",className:"form-control form-control-custom",placeholder:"Full Name"})]})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"text-custom-black fw-500 fs-14",children:"Email I'd"}),Object(p.jsx)("input",{type:"email",name:"#",className:"form-control form-control-custom",placeholder:"Email I'd"})]})}),Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"text-custom-black fw-500 fs-14",children:"Comment"}),Object(p.jsx)("textarea",{rows:4,name:"#",className:"form-control form-control-custom",placeholder:"Comment"})]}),Object(p.jsx)("button",{type:"submit",className:"btn-first btn-submit",children:"Leave Comment"})]})]})})]})]})})]})})})})})}}]),s}(n.Component),v="Blog Details",f=function(e){Object(l.a)(s,e);var t=Object(i.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsxs)(r.a,{children:[Object(p.jsxs)("title",{children:["Toor - Travel Booking - React Template | ",v]}),Object(p.jsx)("meta",{name:"description",content:"#"})]}),Object(p.jsx)(j.a,{}),Object(p.jsx)(o.a,{breadcrumb:{pagename:v}}),Object(p.jsx)(g,{detailId:this.props.match.params.id}),Object(p.jsx)(d.a,{}),Object(p.jsx)(b.a,{})]})}}]),s}(n.Component);t.default=f},48:function(e,t,s){"use strict";var c=s(41),a=s(42),l=s(43),i=s(44),n=s(1),m=s(8),r=s(0),j=function(e){Object(l.a)(s,e);var t=Object(i.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"subheader normal-bg section-padding",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("h1",{className:"text-custom-white",children:this.props.breadcrumb.pagename}),Object(r.jsxs)("ul",{className:"custom-flex justify-content-center",children:[Object(r.jsx)("li",{className:"fw-500",children:Object(r.jsx)(m.b,{to:"/",className:"text-custom-white",children:"Home"})}),Object(r.jsx)("li",{className:"active fw-500",children:this.props.breadcrumb.pagename})]})]})})})})}}]),s}(n.Component);t.a=j}}]);
//# sourceMappingURL=47.388d3a26.chunk.js.map