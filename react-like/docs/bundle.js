!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="docs",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1),u=o(a),d=n(3),s=o(d),c=function(e){function t(n){r(this,t);var o=i(this,e.call(this,n));return o.onClick=o.onClick.bind(o),o}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.text!==e.text},t.prototype.onClick=function(e){console.log("Clicked"+this.props.text),e.stopPropagation()},t.prototype.render=function(){return u.default.createVNode(2,"td",{className:"TableCell",onClick:this.onClick},this.props.text)},t}(s.default),f=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){for(var e=this.props.data,t=e.active?"TableRow active":"TableRow",n=e.props,o=[],r=0;r<n.length;r++)o.push(u.default.createVNode(16,c,{text:n[r]},null,r));return u.default.createVNode(2,"tr",{className:t,"data-id":e.id},[u.default.createVNode(16,c,{text:"#"+e.id}),o])},t}(s.default),p=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){for(var e=this.props.data.items,t=[],n=0;n<e.length;n++){var o=e[n];t.push(u.default.createVNode(16,f,{data:o},null,o.id))}return u.default.createVNode(2,"table",{className:"Table"},u.default.createVNode(2,"tbody",null,t))},t}(s.default),h=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){var e=this.props.data,t=e.time,n={borderRadius:(t%10).toString()+"px",background:"rgba(0,0,0,"+(.5+t%10/10).toString()+")"};return u.default.createVNode(2,"div",{className:"AnimBox","data-id":e.id,style:n})},t}(s.default),v=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){for(var e=this.props.data.items,t=[],n=0;n<e.length;n++){var o=e[n];t.push(u.default.createVNode(16,h,{data:o},null,o.id))}return u.default.createVNode(2,"div",{className:"Anim"},t)},t}(s.default),m=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){return u.default.createVNode(2,"li",{className:"TreeLeaf"},this.props.data.id)},t}(s.default),y=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){for(var e=this.props.data,n=[],o=0;o<e.children.length;o++){var r=e.children[o];r.container?n.push(u.default.createVNode(16,t,{data:r},null,r.id)):n.push(u.default.createVNode(16,m,{data:r},null,r.id))}return u.default.createVNode(2,"ul",{className:"TreeNode"},n)},t}(s.default),g=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){return u.default.createVNode(2,"div",{className:"Tree"},u.default.createVNode(16,y,{data:this.props.data.root}))},t}(s.default),_=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){var e,t=this.props.data,n=t.location;return"table"===n?e=u.default.createVNode(16,p,{data:t.table}):"anim"===n?e=u.default.createVNode(16,v,{data:t.anim}):"tree"===n&&(e=u.default.createVNode(16,g,{data:t.tree})),u.default.createVNode(2,"div",{className:"Main"},e)},t}(s.default);uibench.init("Inferno [simple]","1.0.0-beta24"),u.default.disableRecycling(),document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector("#App");uibench.run(function(e){u.default.render(u.default.createVNode(16,_,{data:e}),t)},function(e){u.default.render(u.default.createVNode(2,"pre",null,JSON.stringify(e,null," ")),t)})})},function(e,t,n){e.exports=n(2)},function(e,t,n){/*!
	 * inferno v1.0.0-beta24
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
!function(t,n){e.exports=n()}(this,function(){"use strict";function e(e){return!s(e.prototype)&&!s(e.prototype.render)}function t(e){return l(e)||a(e)}function n(e){return s(e)||u(e)}function o(e){return u(e)||e===!1||d(e)||s(e)}function r(e){return"function"==typeof e}function i(e){return"o"===e[0]&&"n"===e[1]&&e.length>3}function l(e){return"string"==typeof e}function a(e){return"number"==typeof e}function u(e){return null===e}function d(e){return e===!0}function s(e){return void 0===e}function c(e){return"object"==typeof e}function f(e){throw e||(e=nt),new Error("Inferno Error: "+e)}function p(e,t){for(var r=[],i=arguments.length-2;i-- >0;)r[i]=arguments[i+2];var l=r;r.length>0&&!u(r[0])&&(t||(t={}),1===r.length&&(l=r[0]),s(t.children)?t.children=l:rt(l)?rt(t.children)?t.children=t.children.concat(l):t.children=[t.children].concat(l):rt(t.children)?t.children.push(l):(t.children=[t.children],t.children.push(l))),l=null;var a,d=e.flags;if(rt(e))a=e.map(function(e){return p(e)});else if(n(t)&&n(l))a=Object.assign({},e);else{var c=n(e.key)?t.key:e.key,f=e.ref||t.ref;28&d?a=y(d,e.type,Object.assign({},e.props,t),null,c,f,!0):3970&d&&(l=t&&t.children||e.children,a=y(d,e.type,Object.assign({},e.props,t),l,c,f,!l))}if(28&d){var h=a.props;if(h){var v=h.children;if(v)if(rt(v))for(var m=0;m<v.length;m++){var g=v[m];!o(g)&&N(g)&&(h.children[m]=p(g))}else N(v)&&(h.children=p(v))}a.children=null}return a.dom=null,a}function h(e,n,r){for(;r<e.length;r++){var i=e[r];o(i)||(Array.isArray(i)?h(i,n,0):(t(i)?i=_(i):N(i)&&i.dom&&(i=p(i)),n.push(i)))}}function v(e){var n;e.$?e=e.slice():e.$=!0;for(var r=0;r<e.length;r++){var i=e[r];if(o(i))n||(n=e.slice(0,r)),n.push(i);else{if(Array.isArray(i)){var l=(n||e).slice(0,r);return h(e,l,r),l}t(i)?(n||(n=e.slice(0,r)),n.push(_(i))):N(i)&&i.dom?(n||(n=e.slice(0,r)),n.push(p(i))):n&&n.push(p(i))}}return n||e}function m(e){var t=e.props,r=e.children;t&&(28&e.flags||!n(r)||n(t.children)||(e.children=t.children),t.ref&&(e.ref=t.ref),n(t.key)||(e.key=t.key)),o(r)||(rt(r)?e.children=v(r):N(r)&&r.dom&&(e.children=p(r)))}function y(t,n,o,r,i,l,a){16&t&&(t=e(n)?4:8);var u={children:s(r)?null:r,dom:null,flags:t||0,key:void 0===i?null:i,props:o||null,ref:l||null,type:n};return a||m(u),u}function g(){return y(4096)}function _(e){return y(1,null,null,e)}function N(e){return!!e.flags}function k(){return at.id++}function C(e,t){var n=new CustomEvent("inferno.client.message",{detail:JSON.stringify(t,function(e,t){if(!u(t)&&!s(t)){if("_vComponent"===e||!s(t.nodeType))return;if(r(t))return"$$f:"+t.name}return t})});e.dispatchEvent(n)}function b(){for(var e=0;e<bt.length;e++){var t=bt[e];Ze(t.input,t.dom)}}function S(e){e.__INFERNO_DEVTOOLS_GLOBAL_HOOK__=bt,e.addEventListener("inferno.devtools.message",function(t){var n=JSON.parse(t.detail),o=n.type;switch(o){case"get-roots":lt.connected||(lt.connected=!0,b(),x(e))}})}function x(e){C(e,{type:"roots",data:bt})}function w(e,t,n){e.split(",").forEach(function(e){return t[e]=n})}function U(e){return"checkbox"===e||"radio"===e}function O(e){var t=U(e.type);return t?!n(e.checked):!n(e.value)}function V(e){var t=this.vNode,n=t.props,o=t.dom;n.onInput?n.onInput(e):n.oninput&&n.oninput(e),A(this.vNode,o)}function M(e){var t=this.vNode,n=t.props,o=t.dom;n.onClick?n.onClick(e):n.onclick&&n.onclick(e),A(this.vNode,o)}function I(e){var t=document.querySelectorAll('input[type="radio"][name="'+e+'"]');[].forEach.call(t,function(e){var t=yt.get(e);if(t){var n=t.vNode.props;n&&(e.checked=t.vNode.props.checked)}})}function T(e,t){var n=e.props||it;if(A(e,t),O(n)){var o=yt.get(t);o||(o={vNode:e},U(n.type)?(t.onclick=M.bind(o),t.onclick.wrapped=!0):(t.oninput=V.bind(o),t.oninput.wrapped=!0),yt.set(t,o)),o.vNode=e}}function A(e,t){var o=e.props||it,r=o.type,i=o.value,l=o.checked;r!==t.type&&r&&(t.type=r),o.multiple!==t.multiple&&(t.multiple=o.multiple),U(r)?(n(i)||(t.value=i),t.checked=l,"radio"===r&&o.name&&I(o.name)):n(i)||t.value===i?n(l)||(t.checked=l):t.value=i}function R(e){return!n(e.value)}function D(e,t){var n=e.props||it,o=e.dom;o.value=n.value,rt(t)&&t.indexOf(n.value)!==-1||n.value===t?o.selected=!0:o.selected=n.selected||!1}function E(e){var t=this.vNode,n=t.props,o=t.dom;n.onChange?n.onChange(e):n.onchange&&n.onchange(e),j(this.vNode,o)}function W(e,t){var n=e.props||it;if(j(e,t),R(n)){var o=yt.get(t);o||(o={vNode:e},t.onchange=E.bind(o),t.onchange.wrapped=!0,yt.set(t,o)),o.vNode=e}}function j(e,t){var n=e.props||it;n.multiple!==t.multiple&&(t.multiple=n.multiple);var o=e.children,r=n.value;if(rt(o))for(var i=0;i<o.length;i++)D(o[i],r);else N(o)&&D(o,r)}function L(e){return!n(e.value)}function P(e){var t=this.vNode,n=t.props,o=t.dom;n.onInput?n.onInput(e):n.oninput&&n.oninput(e),$(this.vNode,o)}function G(e,t){var n=e.props||it;$(e,t);var o=yt.get(t);L(n)&&(o||(o={vNode:e},t.oninput=P.bind(o),t.oninput.wrapped=!0,yt.set(t,o)),o.vNode=e)}function $(e,t){var n=e.props||it,o=n.value;t.value!==o&&(t.value=o)}function K(e,t,n){512&e?T(t,n):2048&e?W(t,n):1024&e&&G(t,n)}function H(e,t,n,o,r,i){var l=e.flags;28&l?B(e,t,n,o,r,i):3970&l?F(e,t,n,o,r,i):1&l?z(e,t):4096&l&&q(e,t)}function q(e,t){t&&We(t,e.dom)}function z(e,t){t&&We(t,e.dom)}function B(e,t,o,r,i,l){var a=e.children,u=e.flags,d=4&u,s=e.ref,c=e.dom;if(!l){if(!i)if(d){var f=a._lifecycle;f.fastUnmount||H(a._lastInput,null,o,!1,i,l)}else o.fastUnmount||H(a,null,o,!1,i,l);d?(a._ignoreSetState=!0,a.componentWillUnmount(),s&&!l&&s(null),a._unmounted=!0,St.delete(a)):n(s)||n(s.onComponentWillUnmount)||s.onComponentWillUnmount(c)}if(t){var p=a._lastInput;n(p)&&(p=a),We(t,c)}Nt&&(t||r)&&ve(e)}function F(e,t,o,r,i,l){var a=e.dom,u=e.ref;if(!i&&!o.fastUnmount){u&&!l&&X(u);var d=e.children;n(d)||J(d,o,i,l)}t&&We(t,a),Nt&&(t||r)&&pe(e)}function J(e,t,n,r){if(rt(e))for(var i=0;i<e.length;i++){var l=e[i];!o(l)&&c(l)&&H(l,null,t,!1,n,r)}else c(e)&&H(e,null,t,!1,n,r)}function X(e){if(r(e))e(null);else{if(o(e))return;f()}}function Q(e,t,n,o,r,i,l){if(e!==t){var a=e.flags,u=t.flags;28&u?28&a?te(e,t,n,o,r,i,4&u,l):Oe(n,ke(t,null,o,r,i,4&u),e,o,l):3970&u?3970&a?Z(e,t,n,o,r,i,l):Oe(n,_e(t,null,o,r,i),e,o,l):1&u?1&a?ne(e,t):Oe(n,ye(t,null),e,o,l):4096&u?4096&a?oe(e,t):Oe(n,ge(t,null),e,o,l):Ue(e,t,n,o,r,i,l)}}function Y(e,t,n,o){N(e)?H(e,t,n,!0,!1,o):rt(e)?je(t,e,n,!1,o):t.textContent=""}function Z(e,t,n,o,r,i,l){var a=t.type,u=e.type;if(u!==a)De(e,t,n,o,r,i,l);else{var d=e.dom,s=e.props,c=t.props,f=e.children,p=t.children,h=e.flags,v=t.flags,m=e.ref,y=t.ref;t.dom=d,(i||128&v)&&(i=!0),f!==p&&ee(h,v,f,p,d,o,r,i,l),2&v||K(v,t,d),s!==c&&ue(s,c,d,o,r,i),y&&(m!==y||l)&&Se(d,y,o)}}function ee(e,n,r,i,l,a,u,d,s){var c=!1,f=!1;64&n?c=!0:32&e&&32&n?(f=!0,c=!0):o(i)?Y(r,l,a,s):o(r)?t(i)?Me(l,i):rt(i)?Ne(i,l,a,u,d):me(i,l,a,u,d):t(i)?t(r)?Ie(l,i):(Y(r,l,a,s),Me(l,i)):rt(i)?rt(r)?(c=!0,Pe(r,i)&&(f=!0)):(Y(r,l,a,s),Ne(i,l,a,u,d)):rt(r)?(je(l,r,a,!1,s),me(i,l,a,u,d)):N(i)?N(r)?Q(r,i,l,a,u,d,s):(Y(r,l,a,s),me(i,l,a,u,d)):N(r),c&&(f?ie(r,i,l,a,u,d,s):re(r,i,l,a,u,d,s))}function te(e,t,r,i,l,a,d,h){var v=e.type,m=t.type,y=t.props||it,_=e.key,N=t.key;if(v!==m)if(d)De(e,t,r,i,l,a,h);else{var C=e.children._lastInput||e.children,b=Ve(t,m,y,l);Q(C,b,r,i,l,a,h);var S=t.dom=b.dom;t.children=b,be(t.ref,S,i),H(e,null,i,!1,!0,h)}else if(d){if(_!==N)return De(e,t,r,i,l,a,h),!1;var x=e.children;if(x._unmounted){if(u(r))return!0;Ee(r,ke(t,null,i,l,a,4&t.flags),e.dom)}else{var w=m.defaultProps,U=x.props;x._devToolsStatus.connected&&!x._devToolsId&&ut.set(x._devToolsId=k(),x),i.fastUnmount=!1,s(w)||(xe(U,y),t.props=y);var O=x.state,V=x.state,M=x.getChildContext();t.children=x,x._isSVG=a,M=n(M)?l:Object.assign({},l,M);var I=x._lastInput,T=x._updateComponent(O,V,U,y,l,!1),A=!0;x._childContext=M,o(T)?T=g():rt(T)?f():T===tt?(T=I,A=!1):c(T)&&T.dom&&(T=p(T)),28&T.flags?T.parentVNode=t:28&I.flags&&(I.parentVNode=t),x._lastInput=T,x._vNode=t,A&&(Q(I,T,r,i,M,a,h),x.componentDidUpdate(U,O),St.set(x,T.dom)),t.dom=T.dom}}else{var R=!0,D=e.props,E=t.ref,W=!n(E),j=e.children,L=j;t.dom=e.dom,t.children=j,_!==N?R=!0:W&&!n(E.onComponentShouldUpdate)&&(R=E.onComponentShouldUpdate(D,y)),R!==!1&&(W&&!n(E.onComponentWillUpdate)&&(i.fastUnmount=!1,E.onComponentWillUpdate(D,y)),L=m(y,l),o(L)?L=g():rt(L)?f():c(L)&&L.dom&&(L=p(L)),L!==tt&&(Q(j,L,r,i,l,a,h),t.children=L,W&&!n(E.onComponentDidUpdate)&&(i.fastUnmount=!1,E.onComponentDidUpdate(D,y)),t.dom=L.dom)),28&L.flags?L.parentVNode=t:28&j.flags&&(j.parentVNode=t)}return!1}function ne(e,t){var n=t.children,o=e.dom;t.dom=o,e.children!==n&&(o.nodeValue=n)}function oe(e,t){t.dom=e.dom}function re(e,t,n,r,i,l,a){var u,d,s=e.length,c=t.length,f=s>c?c:s,h=null;if(s<c)for(u=c-1;u>=f;u--){var v=t[u];o(v)||(v.dom&&(t[u]=v=p(v)),d=me(v,null,r,i,l),Ae(n,d,h),h=d)}else if(0===c)je(n,e,r,!1,a);else if(s>c)for(u=f;u<s;u++){var m=e[u];o(m)||H(e[u],n,r,!1,!1,a)}for(u=f-1;u>=0;u--){var y=e[u],g=t[u];o(g)?o(y)||H(y,n,r,!0,!1,a):(g.dom&&(t[u]=g=p(g)),o(y)?(d=me(g,null,r,i,l),Ae(n,d,h),h=d):(Q(y,g,n,r,i,l,a),h=g.dom))}}function ie(e,t,n,o,r,i,l){var a,d,c,f,h,v,m,y=e.length,g=t.length,_=y-1,N=g-1,k=0,C=0;if(0===y)return void(0!==g&&Ne(t,n,o,r,i));if(0===g)return void je(n,e,o,!1,l);var b=e[k],S=t[C],x=e[_],w=t[N];S.dom&&(t[C]=S=p(S)),w.dom&&(t[N]=w=p(w));e:for(;;){for(;b.key===S.key;){if(Q(b,S,n,o,r,i,l),k++,C++,k>_||C>N)break e;b=e[k],S=t[C],S.dom&&(t[C]=S=p(S))}for(;x.key===w.key;){if(Q(x,w,n,o,r,i,l),_--,N--,k>_||C>N)break e;x=e[_],w=t[N],w.dom&&(t[N]=w=p(w))}if(x.key!==S.key){if(b.key!==w.key)break;Q(b,w,n,o,r,i,l),v=N+1,h=v<t.length?t[v].dom:null,Ae(n,w.dom,h),k++,N--,b=e[k],w=t[N],w.dom&&(t[N]=w=p(w))}else Q(x,S,n,o,r,i,l),Ae(n,S.dom,b.dom),_--,C++,x=e[_],S=t[C],S.dom&&(t[C]=S=p(S))}if(k>_){if(C<=N)for(v=N+1,h=v<t.length?t[v].dom:null;C<=N;)m=t[C],m.dom&&(t[C]=m=p(m)),C++,Ae(n,me(m,null,o,r,i),h)}else if(C>N)for(;k<=_;)H(e[k++],n,o,!1,!1,l);else{y=_-k+1,g=N-C+1;var U=e,O=new Array(g);for(a=0;a<g;a++)O[a]=-1;var V=!1,M=0,I=0;if(g<=4||y*g<=16){for(a=k;a<=_;a++)if(c=e[a],I<g)for(d=C;d<=N;d++)if(f=t[d],c.key===f.key){O[d-C]=a,M>d?V=!0:M=d,f.dom&&(t[d]=f=p(f)),Q(c,f,n,o,r,i,l),I++,U[a]=null;break}}else{var T=new Map;for(a=C;a<=N;a++)m=t[a],T.set(m.key,a);for(a=k;a<=_;a++)c=e[a],I<g&&(d=T.get(c.key),s(d)||(f=t[d],O[d-C]=a,M>d?V=!0:M=d,f.dom&&(t[d]=f=p(f)),Q(c,f,n,o,r,i,l),I++,U[a]=null))}if(y===e.length&&0===I)for(je(n,e,o,!1,l);C<g;)m=t[C],m.dom&&(t[C]=m=p(m)),C++,Ae(n,me(m,null,o,r,i),null);else{for(a=y-I;a>0;)c=U[k++],u(c)||(H(c,n,o,!1,!1,l),a--);if(V){var A=le(O);for(d=A.length-1,a=g-1;a>=0;a--)O[a]===-1?(M=a+C,m=t[M],m.dom&&(t[M]=m=p(m)),v=M+1,h=v<t.length?t[v].dom:null,Ae(n,me(m,n,o,r,i),h)):d<0||a!==A[d]?(M=a+C,m=t[M],v=M+1,h=v<t.length?t[v].dom:null,Ae(n,m.dom,h)):d--}else if(I!==g)for(a=g-1;a>=0;a--)O[a]===-1&&(M=a+C,m=t[M],m.dom&&(t[M]=m=p(m)),v=M+1,h=v<t.length?t[v].dom:null,Ae(n,me(m,null,o,r,i),h))}}}function le(e){var t=e.slice(0),n=[];n.push(0);var o,r,i,l,a;for(o=0;o<e.length;o++)if(e[o]!==-1)if(r=n[n.length-1],e[r]<e[o])t[o]=r,n.push(o);else{for(i=0,l=n.length-1;i<l;)a=(i+l)/2|0,e[n[a]]<e[o]?i=a+1:l=a;e[o]<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function ae(e,t,o,r,l){if(!gt[e])if(ht[e])r[e]=!!o;else if(pt[e]){var a=n(o)?"":o;r[e]!==a&&(r[e]=a)}else if(t!==o)if(n(o))r.removeAttribute(e);else if("className"===e)l?r.setAttribute("class",o):r.className=o;else if("style"===e)de(t,o,r);else if(i(e)){var u=e.toLowerCase(),d=r[u];d&&d.wrapped||(r[u]=o)}else if("dangerouslySetInnerHTML"===e){var s=t&&t.__html,c=o&&o.__html;s!==c&&(n(c)||(r.innerHTML=c))}else if("childrenType"!==e&&"ref"!==e&&"key"!==e){var f=_t[e],p=vt[e];p?r.setAttributeNS(p,f||e,o):r.setAttribute(f||e,o)}}function ue(e,t,o,r,i,l){if(e=e||it,t=t||it,t!==it)for(var a in t){var u=t[a],d=e[a];n(u)?se(a,o):ae(a,d,u,o,l)}if(e!==it)for(var s in e)n(t[s])&&se(s,o)}function de(e,t,o){if(l(t))o.style.cssText=t;else if(n(e))for(var r in t){var i=t[r];a(i)&&!mt[r]?o.style[r]=i+"px":o.style[r]=i}else{for(var u in t){var d=t[u];a(d)&&!mt[u]?o.style[u]=d+"px":o.style[u]=d}for(var s in e)n(t[s])&&(o.style[s]="")}}function se(e,t){"className"===e?t.removeAttribute("class"):"value"===e?t.value="":"style"===e?(t.style.cssText=null,t.removeAttribute("style")):t.removeAttribute(e)}function ce(){Nt=!1,kt.clear(),Ct.clear()}function fe(e,t,n,o){var r=e.type,i=e.key,l=Ct.get(r);if(!s(l)){var a=null===i?l.nonKeyed:l.keyed.get(i);if(!s(a)){var u=a.pop();if(!s(u))return Z(u,e,null,t,n,o,!0),e.dom}}return null}function pe(e){var t=e.type,n=e.key,o=Ct.get(t);if(s(o)&&(o={nonKeyed:[],keyed:new Map},Ct.set(t,o)),u(n))o.nonKeyed.push(e);else{var r=o.keyed.get(n);s(r)&&(r=[],o.keyed.set(n,r)),r.push(e)}}function he(e,t,n,o){var r=e.type,i=e.key,l=kt.get(r);if(!s(l)){var a=null===i?l.nonKeyed:l.keyed.get(i);if(!s(a)){var u=a.pop();if(!s(u)){var d=e.flags,c=te(u,e,null,t,n,o,4&d,!0);if(!c)return e.dom}}}return null}function ve(e){var t=e.type,n=e.key,o=e.ref,r=o&&(o.onComponentWillMount||o.onComponentWillUnmount||o.onComponentDidMount||o.onComponentWillUpdate||o.onComponentDidUpdate);if(!r){var i=kt.get(t);if(s(i)&&(i={nonKeyed:[],keyed:new Map},kt.set(t,i)),u(n))i.nonKeyed.push(e);else{var l=i.keyed.get(n);s(l)&&(l=[],i.keyed.set(n,l)),l.push(e)}}}function me(e,t,n,o,r){var i=e.flags;return 3970&i?_e(e,t,n,o,r):28&i?ke(e,t,n,o,r,4&i):4096&i?ge(e,t):1&i?ye(e,t):void f()}function ye(e,t){var n=document.createTextNode(e.children);return e.dom=n,t&&Te(t,n),n}function ge(e,t){var n=document.createTextNode("");return e.dom=n,t&&Te(t,n),n}function _e(e,n,o,r,i){if(Nt){var l=fe(e,o,r,i);if(!u(l))return u(n)||Te(n,l),l}var a=e.type,d=e.flags;(i||128&d)&&(i=!0);var s=Re(a,i),c=e.children,f=e.props,p=e.ref;if(e.dom=s,u(c)||(t(c)?Me(s,c):rt(c)?Ne(c,s,o,r,i):N(c)&&me(c,s,o,r,i)),2&d||K(d,e,s),!u(f))for(var h in f)ae(h,null,f[h],s,i);return u(p)||Se(s,p,o),u(n)||Te(n,s),s}function Ne(e,t,n,r,i){for(var l=0;l<e.length;l++){var a=e[l];o(a)||(a.dom&&(e[l]=a=p(a)),me(e[l],t,n,r,i))}}function ke(e,t,n,o,r,i){if(Nt){var l=he(e,n,o,r);if(!u(l))return u(t)||Te(t,l),l}var a,d=e.type,c=e.props||it,f=e.ref;if(i){var p=d.defaultProps;n.fastUnmount=!1,s(p)||(xe(p,c),e.props=c);var h=we(e,d,c,o,r,lt),v=h._lastInput,m=n.fastUnmount;n.fastUnmount=!0,h._vNode=e,e.dom=a=me(v,null,n,h._childContext,r);var y=h._lifecycle=new dt;y.fastUnmount=n.fastUnmount,n.fastUnmount=m,u(t)||Te(t,a),Ce(f,h,n),St.set(h,a),e.children=h}else{var g=Ve(e,d,c,o);e.dom=a=me(g,null,n,o,r),e.children=g,be(f,a,n),u(t)||Te(t,a)}return a}function Ce(e,t,n){e&&(r(e)?e(t):f()),u(t.componentDidMount)||n.addListener(function(){t.componentDidMount()})}function be(e,t,o){e&&(n(e.onComponentWillMount)||(o.fastUnmount=!1,e.onComponentWillMount()),n(e.onComponentDidMount)||(o.fastUnmount=!1,o.addListener(function(){return e.onComponentDidMount(t)})))}function Se(e,t,n){if(r(t))n.fastUnmount=!1,n.addListener(function(){return t(e)});else{if(o(t))return;f()}}function xe(e,t){for(var n in e)s(t[n])&&(t[n]=e[n])}function we(e,t,r,i,l,a){var u=new t(r,i);u.context=i,u._patch=Q,u._devToolsStatus=a,u._componentToDOMNodeMap=St;var d=u.getChildContext();n(d)?u._childContext=i:u._childContext=Object.assign({},i,d),u._unmounted=!1,u._pendingSetState=!0,u._isSVG=l,u.componentWillMount(),u._beforeRender&&u._beforeRender();var s=u.render(r,u.state,i);return u._afterRender&&u._afterRender(),rt(s)?f():o(s)?s=g():(s.dom&&(s=p(s)),28&s.flags&&(s.parentVNode=e)),u._pendingSetState=!1,u._lastInput=s,u}function Ue(e,t,n,o,r,i,l){Oe(n,me(t,null,o,r,i),e,o,l)}function Oe(e,t,n,o,r){var i=!1;28&n.flags&&(H(n,null,o,!1,!1,r),n=n.children._lastInput||n.children,i=!0),Ee(e,t,n.dom),H(n,null,o,!1,i,r)}function Ve(e,t,n,r){var i=t(n,r);return rt(i)?f():o(i)?i=g():(i.dom&&(i=p(i)),28&i.flags&&(i.parentVNode=e)),i}function Me(e,t){""!==t?e.textContent=t:e.appendChild(document.createTextNode(""))}function Ie(e,t){e.firstChild.nodeValue=t}function Te(e,t){e.appendChild(t)}function Ae(e,t,o){n(o)?Te(e,t):e.insertBefore(t,o)}function Re(e,t){return t===!0?document.createElementNS(ft,e):document.createElement(e)}function De(e,t,o,r,i,l,a){var u=null,d=e._lastInput;n(d)||(u=e,e=d),H(e,null,r,!1,!1,a);var s=me(t,null,r,i,l);t.dom=s,Ee(o,s,e.dom),null!==u&&(u._lasInput=t)}function Ee(e,t,n){e||(e=n.parentNode),e.replaceChild(t,n)}function We(e,t){e.removeChild(t)}function je(e,t,n,o,r){e.textContent="",n.fastUnmount||Le(null,t,n,o,r)}function Le(e,t,n,r,i){for(var l=0;l<t.length;l++){var a=t[l];o(a)||H(a,e,n,!0,r,i)}}function Pe(e,t){return t.length&&!n(t[0])&&!n(t[0].key)&&e.length&&!n(e[0])&&!n(e[0].key)}function Ge(e){for(var t=e.childNodes,n=t.length,o=0;o<n;){var r=t[o];if(8===r.nodeType)if("!"===r.data){var i=document.createTextNode("");e.replaceChild(i,r),o++}else e.removeChild(r),n--;else o++}}function $e(e,t,n,o,r,i){var l=e.type,a=e.props,u=e.ref;if(e.dom=t,i){var d=t.namespaceURI===ft,c=l.defaultProps;n.fastUnmount=!1,s(c)||(xe(c,a),e.props=a);var f=we(e,l,a,o,d,lt),p=f._lastInput,h=n.fastUnmount;n.fastUnmount=!0,f._vComponent=e,f._vNode=e,Be(p,t,n,f._childContext,d);var v=f._lifecycle=new dt;v.fastUnmount=n.fastUnmount,n.fastUnmount=h,Ce(u,f,n),St.set(f,t),e.children=f}else{var m=Ve(e,l,a,o);Be(m,t,n,o,r),e.children=m,e.dom=m.dom,be(u,t,n)}}function Ke(e,t,n,o,r){var i=e.type,l=e.children,a=e.props,u=e.flags;if((r||128&u)&&(r=!0),1!==t.nodeType||t.tagName.toLowerCase()!==i){var d=_e(e,null,n,o,r);e.dom=d,Ee(t.parentNode,d,t)}else{e.dom=t,l&&He(l,t,n,o,r),2&u||K(u,e,t);for(var s in a){var c=a[s];ae(s,null,c,t,r)}}}function He(e,t,n,o,r){Ge(t);var i=Array.prototype.slice.call(t.childNodes),l=0;if(rt(e))for(var a=0;a<e.length;a++){var d=e[a];c(d)&&!u(d)&&Be(d,i[l++],n,o,r)}else c(e)&&Be(e,t.firstChild,n,o,r)}function qe(e,t){if(3===t.nodeType){var n=ye(e,null);e.dom=n,Ee(t.parentNode,n,t)}else e.dom=t}function ze(e,t){e.dom=t}function Be(e,t,n,o,r){var i=e.flags;return 28&i?$e(e,t,n,o,r,4&i):3970&i?Ke(e,t,n,o,r):1&i?qe(e,t):4096&i?ze(e,t):void f()}function Fe(e,t,n){return!(!t||1!==t.nodeType||!t.firstChild)&&(Be(e,t.firstChild,n,{},!1),!0)}function Je(e){var t=e&&e.nodeType?e:null;return St.get(e)||t}function Xe(e){for(var t=0;t<bt.length;t++){var n=bt[t];if(n.dom===e)return n}return null}function Qe(e,t,n){bt.push({dom:e,input:t,lifecycle:n})}function Ye(e){for(var t=0;t<bt.length;t++)if(bt[t]===e)return void bt.splice(t,1)}function Ze(e,t){if(xt===t&&f(),e!==tt){var r=Xe(t);if(u(r)){var i=new dt;o(e)||(e.dom&&(e=p(e)),Fe(e,t,i)||me(e,t,i,{},!1),i.trigger(),Qe(t,e,i))}else{var l=r.lifecycle;l.listeners=[],n(e)?(H(r.input,t,l,!1,!1,!1),Ye(r)):(e.dom&&(e=p(e)),Q(r.input,e,t,l,{},!1,!1)),l.trigger(),r.input=e}lt.connected&&x(window)}}function et(){var e;return function(t,n){e||(e=t),Ze(n,e)}}var tt="$NO_OP",nt="a runtime error occured! Use Inferno in development environment to find the error.",ot="undefined"!=typeof window&&window.document,rt=Array.isArray,it={},lt={connected:!1},at={id:0},ut=new Map,dt=function(){this.listeners=[],this.fastUnmount=!0};dt.prototype.addListener=function(e){this.listeners.push(e)},dt.prototype.trigger=function(){for(var e=this,t=0;t<this.listeners.length;t++)e.listeners[t]()};var st="http://www.w3.org/1999/xlink",ct="http://www.w3.org/XML/1998/namespace",ft="http://www.w3.org/2000/svg",pt={},ht={},vt={},mt={};w("xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type",vt,st),w("xml:base,xml:lang,xml:space",vt,ct),w("volume,defaultValue,defaultChecked",pt,!0),w("muted,scoped,loop,open,checked,default,capture,disabled,readonly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate",ht,!0),w("animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,",mt,!0);var yt=new Map,gt={children:!0,ref:!0,key:!0,selected:!0,checked:!0,value:!0,multiple:!0},_t={textAnchor:"text-anchor"},Nt=!0,kt=new Map,Ct=new Map,bt=[],St=new Map,xt=ot?document.body:null;ot&&(window.process={env:{NODE_ENV:"development"}},S(window));var wt={createVNode:y,cloneVNode:p,NO_OP:tt,render:Ze,findDOMNode:Je,createRenderer:et,disableRecycling:ce};return wt})},function(e,t,n){e.exports=n(4)},function(e,t,n){/*!
	 * inferno-component v1.0.0-beta24
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
!function(t,n){e.exports=n()}(this,function(){"use strict";function e(e){return!d(e.prototype)&&!d(e.prototype.render)}function t(e){return i(e)||l(e)}function n(e){return d(e)||a(e)}function o(e){return a(e)||e===!1||u(e)||d(e)}function r(e){return"function"==typeof e}function i(e){return"string"==typeof e}function l(e){return"number"==typeof e}function a(e){return null===e}function u(e){return e===!0}function d(e){return void 0===e}function s(e){throw e||(e=S),new Error("Inferno Error: "+e)}function c(e,t){for(var r=[],i=arguments.length-2;i-- >0;)r[i]=arguments[i+2];var l=r;r.length>0&&!a(r[0])&&(t||(t={}),1===r.length&&(l=r[0]),d(t.children)?t.children=l:x(l)?x(t.children)?t.children=t.children.concat(l):t.children=[t.children].concat(l):x(t.children)?t.children.push(l):(t.children=[t.children],t.children.push(l))),l=null;var u,s=e.flags;if(x(e))u=e.map(function(e){return c(e)});else if(n(t)&&n(l))u=Object.assign({},e);else{var f=n(e.key)?t.key:e.key,p=e.ref||t.ref;28&s?u=v(s,e.type,Object.assign({},e.props,t),null,f,p,!0):3970&s&&(l=t&&t.children||e.children,u=v(s,e.type,Object.assign({},e.props,t),l,f,p,!l))}if(28&s){var h=u.props;if(h){var m=h.children;if(m)if(x(m))for(var y=0;y<m.length;y++){var g=m[y];!o(g)&&_(g)&&(h.children[y]=c(g))}else _(m)&&(h.children=c(m))}u.children=null}return u.dom=null,u}function f(e,n,r){for(;r<e.length;r++){var i=e[r];o(i)||(Array.isArray(i)?f(i,n,0):(t(i)?i=g(i):_(i)&&i.dom&&(i=c(i)),n.push(i)))}}function p(e){var n;e.$?e=e.slice():e.$=!0;for(var r=0;r<e.length;r++){var i=e[r];if(o(i))n||(n=e.slice(0,r)),n.push(i);else{if(Array.isArray(i)){var l=(n||e).slice(0,r);return f(e,l,r),l}t(i)?(n||(n=e.slice(0,r)),n.push(g(i))):_(i)&&i.dom?(n||(n=e.slice(0,r)),n.push(c(i))):n&&n.push(c(i))}}return n||e}function h(e){var t=e.props,r=e.children;t&&(28&e.flags||!n(r)||n(t.children)||(e.children=t.children),t.ref&&(e.ref=t.ref),n(t.key)||(e.key=t.key)),o(r)||(x(r)?e.children=p(r):_(r)&&r.dom&&(e.children=c(r)))}function v(t,n,o,r,i,l,a){16&t&&(t=e(n)?4:8);var u={children:d(r)?null:r,dom:null,flags:t||0,key:void 0===i?null:i,props:o||null,ref:l||null,type:n};return a||h(u),u}function m(e,t){if(28&e.flags){var n=e.parentVNode;n&&(n.dom=t,m(n,t))}}function y(){return v(4096)}function g(e){return v(1,null,null,e)}function _(e){return!!e.flags}function N(e,t,n){var o=V.get(e);o||(o=[],V.set(e,o),Promise.resolve().then(function(){C(e,t,function(){for(var e=0;e<o.length;e++)o[e]()}),V.delete(e),e._processingSetState=!1})),n&&o.push(n)}function k(e,t,n){r(t)&&(t=t(e.state));for(var o in t)e._pendingState[o]=t[o];e._pendingSetState?(e.state=Object.assign({},e.state,e._pendingState),e._pendingState={}):e._processingSetState||n?N(e,!1,n):(e._pendingSetState=!0,e._processingSetState=!0,C(e,!1,n),e._processingSetState=!1)}function C(e,t,r){if((!e._deferSetState||t)&&!e._blockRender){e._pendingSetState=!1;var i=e._pendingState,l=e.state,a=Object.assign({},l,i),u=e.props,d=e.context;e._pendingState={};var c=e._updateComponent(l,a,u,u,d,t),f=!0;o(c)?c=y():x(c)?s():c===b&&(c=e._lastInput,f=!1);var p=e._lastInput,h=p.dom.parentNode;if(e._lastInput=c,f){var v=e._lifecycle;v?v.listeners=[]:v=new U,e._lifecycle=v;var g=e.getChildContext();g=n(g)?Object.assign({},d,e._childContext):Object.assign({},d,e._childContext,g),e._patch(p,c,h,v,g,e._isSVG,!1),v.trigger(),e.componentDidUpdate(u,l)}var _=e._vNode,N=_.dom=c.dom;e._componentToDOMNodeMap.set(e,c.dom),m(_,N),n(r)||r()}}var b="$NO_OP",S="a runtime error occured! Use Inferno in development environment to find the error.",x=Array.isArray,w={},U=function(){this.listeners=[],this.fastUnmount=!0};U.prototype.addListener=function(e){this.listeners.push(e)},U.prototype.trigger=function(){for(var e=this,t=0;t<this.listeners.length;t++)e.listeners[t]()};var O=S,V=new Map,M=function(e,t){this.state={},this.refs={},this._processingSetState=!1,this._blockRender=!1,this._ignoreSetState=!1,this._blockSetState=!1,this._deferSetState=!1,this._pendingSetState=!1,this._pendingState={},this._lastInput=null,this._vNode=null,this._unmounted=!0,this._devToolsStatus=null,this._devToolsId=null,this._lifecycle=null,this._childContext=null,this._patch=null,this._isSVG=!1,this._componentToDOMNodeMap=null,this.props=e||{},this.context=t||{},this.componentDidMount||(this.componentDidMount=null)};return M.prototype.render=function(e,t,n){},M.prototype.forceUpdate=function(e){if(this._unmounted)throw Error(O);C(this,!0,e)},M.prototype.setState=function(e,t){if(this._unmounted)throw Error(O);this._blockSetState?s():this._ignoreSetState||k(this,e,t)},M.prototype.componentWillMount=function(){},M.prototype.componentDidMount=function(){},M.prototype.componentWillUnmount=function(){},M.prototype.componentDidUpdate=function(e,t,n){},M.prototype.shouldComponentUpdate=function(e,t,n){return!0},M.prototype.componentWillReceiveProps=function(e,t){},M.prototype.componentWillUpdate=function(e,t,n){},M.prototype.getChildContext=function(){},M.prototype._updateComponent=function(e,t,o,r,i,l){if(this._unmounted===!0&&s(),!n(r)&&n(r.children)&&(r.children=o.children),o!==r||r===w||e!==t||l){o===r&&r!==w||(this._blockRender=!0,this.componentWillReceiveProps(r,i),this._blockRender=!1,this._pendingSetState&&(t=Object.assign({},t,this._pendingState),this._pendingSetState=!1,this._pendingState={}));var a=this.shouldComponentUpdate(r,t,i);if(a!==!1||l){this._blockSetState=!0,this.componentWillUpdate(r,t,i),this._blockSetState=!1,this.props=r;var u=this.state=t;this.context=i,this._beforeRender&&this._beforeRender();var d=this.render(r,u,i);return this._afterRender&&this._afterRender(),d}}return b},M})}]);