(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";var r,i,o,a,c=n(5697),u=n.n(c),s=n(4839),l=n.n(s),f=n(2993),p=n.n(f),A=n(7294),d=n(6494),h=n.n(d),m="bodyAttributes",y="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",w="href",v="http-equiv",C="innerHTML",O="itemprop",S="name",I="property",k="rel",j="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",L="defer",N="encodeSpecialCharacters",D="onChangeClientState",Q="titleTemplate",B=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),z=[g.NOSCRIPT,g.SCRIPT,g.STYLE],M="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=_(e,g.TITLE),n=_(e,Q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,R);return t||r||void 0},W=function(e){return _(e,D)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=h()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,i),ce(f,p);var A={baseTag:se(g.BASE,n),linkTags:se(g.LINK,o),metaTags:se(g.META,a),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,l)},d={},h={};Object.keys(A).forEach((function(e){var t=A[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=A[e].oldTags)})),t&&t(),u(e,d,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(M),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(M):n.getAttribute(M)!==a.join(",")&&n.setAttribute(M,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(M,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[M]=!0,i=fe(n,r),[A.createElement(g.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+q(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[M]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),A.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},Ae=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(m,n,r),htmlAttributes:pe(y,i,r),link:pe(g.LINK,o,r),meta:pe(g.META,a,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,u,r),style:pe(g.STYLE,s,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},de=l()((function(e){return{baseTag:J([w,x],e),bodyAttributes:G(m,e),defer:_(e,L),encode:_(e,N),htmlAttributes:G(y,e),linkTags:V(g.LINK,[k,w],e),metaTags:V(g.META,[S,E,v,I,O],e),noscriptTags:V(g.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:V(g.SCRIPT,[j,C],e),styleTags:V(g.STYLE,[T],e),title:X(e),titleAttributes:G(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),Ae)((function(){return null})),he=(i=de,a=o=function(e){function t(){return H(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case g.TITLE:return F({},i,((t={})[r.type]=a,t.titleAttributes=F({},o),t));case g.BODY:return F({},i,{bodyAttributes:F({},o)});case g.HTML:return F({},i,{htmlAttributes:F({},o)})}return F({},i,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return A.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(Y(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),A.createElement(i,r)},K(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(A.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind,t.Z=he},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},8738:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),i=n(5444),o=n(5414),a=function(e){var t=e.siteMetadata;return r.createElement(r.Fragment,null,r.createElement("aside",{className:"sidebar"},r.createElement("header",null,r.createElement("div",{className:"about"},r.createElement("div",{className:"cover-author-image"},r.createElement(i.Link,{to:"/"},r.createElement("img",{src:"data:image/jpeg;base64,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",alt:t.author}))),r.createElement("div",{className:"author-name"},t.author),r.createElement("p",null,t.description))),r.createElement("footer",null,r.createElement("section",{className:"contact"},r.createElement("h3",{className:"contact-title"},"Contact me"),r.createElement("ul",null,t.social.twitter&&r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/"+t.social.twitter,target:"_blank"},r.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),t.social.facebook&&r.createElement("li",null,r.createElement("a",{href:"https://facebook.com/"+t.social.facebook,target:"_blank"},r.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),t.social.github&&r.createElement("li",null,r.createElement("a",{href:"https://github.com/"+t.social.github,target:"_blank"},r.createElement("i",{className:"fa fa-github","aria-hidden":"true"}))),t.social.linkedin&&r.createElement("li",null,r.createElement("a",{href:"https://linkedin.com/in/"+t.social.linkedin,target:"_blank"},r.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))),t.social.email&&r.createElement("li",null,r.createElement("a",{href:"mailto:"+t.social.email,target:"_blank"},r.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}))))))))},c=function(e){var t=e.children;return r.createElement(i.StaticQuery,{query:"2478211480",render:function(e){return r.createElement("div",{className:"wrapper"},r.createElement(o.Z,null,r.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|PT+Serif&display=swap",rel:"stylesheet"})),r.createElement(a,{siteMetadata:e.site.siteMetadata}),t)}})}}}]);
//# sourceMappingURL=commons-fe3fd57a7abe14a92db1.js.map