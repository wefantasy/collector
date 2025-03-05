var Qt=t=>{throw TypeError(t)};var De=(t,e,n)=>e.has(t)||Qt("Cannot "+n);var k=(t,e,n)=>(De(t,e,"read from private field"),n?n.call(t):e.get(t)),x=(t,e,n)=>e.has(t)?Qt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{n as ht,$ as Fe,aL as Ve,aw as C,g as O,s as N,aJ as Be}from"./D-Pk5wHr.js";import{o as te}from"./DCoxCnLo.js";function qe(t,e,n){if(t==null)return e(void 0),ht;const r=Fe(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const q=[];function $t(t,e=ht){let n=null;const r=new Set;function a(o){if(Ve(t,o)&&(t=o,n)){const c=!q.length;for(const l of r)l[1](),q.push(l,t);if(c){for(let l=0;l<q.length;l+=2)q[l][0](q[l+1]);q.length=0}}}function s(o){a(o(t))}function i(o,c=ht){const l=[o,c];return r.add(l),r.size===1&&(n=e(a,s)||ht),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function Hn(t){let e;return qe(t,n=>e=n)(),e}new URL("sveltekit-internal://");function Ge(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Me(t){return t.split("%25").map(decodeURI).join("%25")}function He(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Lt({href:t}){return t.split("#")[0]}function Ke(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}function We(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Ye(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const ze=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete(Dt(t)),ze(t,e));const Y=new Map;function Je(t,e){const n=Dt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ye(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function Xe(t,e,n){if(Y.size>0){const r=Dt(t,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(e,n)}function Dt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${We(...a)}"]`}return r}const Ze=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Qe(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${en(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Tt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Tt(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const p=Ze.exec(c),[,u,w,f,m]=p;return e.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Tt(c)}).join("")}).join("")}/?$`),params:e}}function tn(t){return!/^\([^)]+\)$/.test(t)}function en(t){return t.slice(1).split("/").filter(tn)}function nn(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(p=>p).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const p=e[o+1],u=a[o+1];p&&!p.rest&&p.optional&&u&&c.chained&&(i=0),!p&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Tt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function rn({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,p]])=>{const{pattern:u,params:w}=Qe(o),f={id:o,exec:m=>{const h=u.exec(m);if(h)return nn(h,w,r)},errors:[1,...p||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function ge(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function ee(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var fe;const P=((fe=globalThis.__sveltekit_115u78d)==null?void 0:fe.base)??"";var ue;const an=((ue=globalThis.__sveltekit_115u78d)==null?void 0:ue.assets)??P,on="1741157958149",me="sveltekit:snapshot",we="sveltekit:scroll",ye="sveltekit:states",sn="sveltekit:pageurl",M="sveltekit:history",X="sveltekit:navigation",V={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ut=location.origin;function _e(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Ft(){return{x:pageXOffset,y:pageYOffset}}function G(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const ne={...V,"":V.hover};function ve(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function be(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ve(t)}}function Ot(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||At(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ut&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function gt(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=G(o,"preload-code")),a===null&&(a=G(o,"preload-data")),e===null&&(e=G(o,"keepfocus")),n===null&&(n=G(o,"noscroll")),s===null&&(s=G(o,"reload")),i===null&&(i=G(o,"replacestate")),o=ve(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:ne[r??"off"],preload_data:ne[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function re(t){const e=$t(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const ke={v:()=>{}};function cn(){const{set:t,subscribe:e}=$t(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${an}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==on;return i&&(t(!0),ke.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function At(t,e,n){return t.origin!==ut||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Kn(t){}function ae(t){const e=fn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const ln="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function fn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=ln.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const un=-1,dn=-2,hn=-3,pn=-4,gn=-5,mn=-6;function wn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===un)return;if(s===hn)return NaN;if(s===pn)return 1/0;if(s===gn)return-1/0;if(s===mn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const p=new Set;r[s]=p;for(let f=1;f<o.length;f+=1)p.add(a(o[f]));break;case"Map":const u=new Map;r[s]=u;for(let f=1;f<o.length;f+=2)u.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);r[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],h=ae(m),d=new f(h);r[s]=d;break}case"ArrayBuffer":{const f=o[1],m=ae(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const p=o[l];p!==dn&&(c[l]=a(p))}}else{const c={};r[s]=c;for(const l in o){const p=o[l];c[l]=a(p)}}return r[s]}return a(0)}const Ae=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ae];const yn=new Set([...Ae]);[...yn];function _n(t){return t.filter(e=>e!=null)}class St{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Vt{constructor(e,n){this.status=e,this.location=n}}class Bt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const vn="x-sveltekit-invalidated",bn="x-sveltekit-trailing-slash";function mt(t){return t instanceof St||t instanceof Bt?t.status:500}function kn(t){return t instanceof Bt?t.text:"Internal Error"}let I,Z,Pt;const An=te.toString().includes("$$")||/function \w+\(\) \{\}/.test(te.toString());var et,nt,rt,at,ot,st,it,ct,de,lt,he,ft,pe;An?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Pt={current:!1}):(I=new(de=class{constructor(){x(this,et,C({}));x(this,nt,C(null));x(this,rt,C(null));x(this,at,C({}));x(this,ot,C({id:null}));x(this,st,C({}));x(this,it,C(-1));x(this,ct,C(new URL("https://example.com")))}get data(){return O(k(this,et))}set data(e){N(k(this,et),e)}get form(){return O(k(this,nt))}set form(e){N(k(this,nt),e)}get error(){return O(k(this,rt))}set error(e){N(k(this,rt),e)}get params(){return O(k(this,at))}set params(e){N(k(this,at),e)}get route(){return O(k(this,ot))}set route(e){N(k(this,ot),e)}get state(){return O(k(this,st))}set state(e){N(k(this,st),e)}get status(){return O(k(this,it))}set status(e){N(k(this,it),e)}get url(){return O(k(this,ct))}set url(e){N(k(this,ct),e)}},et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,de),Z=new(he=class{constructor(){x(this,lt,C(null))}get current(){return O(k(this,lt))}set current(e){N(k(this,lt),e)}},lt=new WeakMap,he),Pt=new(pe=class{constructor(){x(this,ft,C(!1))}get current(){return O(k(this,ft))}set current(e){N(k(this,ft),e)}},ft=new WeakMap,pe),ke.v=()=>Pt.current=!0);function Se(t){Object.assign(I,t)}const Sn="/__data.json",En=".html__data.json";function Rn(t){return t.endsWith(".html")?t.replace(/\.html$/,En):t.replace(/\/$/,"")+Sn}const In=new Set(["icon","shortcut icon","apple-touch-icon"]),B=ge(we)??{},Q=ge(me)??{},D={url:re({}),page:re({}),navigating:$t(null),updated:cn()};function qt(t){B[t]=Ft()}function Un(t,e){let n=t+1;for(;B[n];)delete B[n],n+=1;for(n=e+1;Q[n];)delete Q[n],n+=1}function K(t){return location.href=t.href,new Promise(()=>{})}async function Ee(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(P||"/");t&&await t.update()}}function oe(){}let Gt,Nt,wt,j,jt,A;const yt=[],_t=[];let L=null;const Re=new Set,Ln=new Set,z=new Set;let v={branch:[],error:null,url:null},Mt=!1,vt=!1,se=!0,tt=!1,W=!1,Ie=!1,Ht=!1,Kt,R,T,$;const J=new Set;let xt;async function Jn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),Gt=rn(t),j=document.documentElement,jt=e,Nt=t.nodes[0],wt=t.nodes[1],Nt(),wt(),R=(i=history.state)==null?void 0:i[M],T=(o=history.state)==null?void 0:o[X],R||(R=T=Date.now(),history.replaceState({...history.state,[M]:R,[X]:T},""));const r=B[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Fn(jt,n):await $n(A.hash?Bn(new URL(location.href)):location.href,{replaceState:!0}),Dn()}async function Tn(){if(await(xt||(xt=Promise.resolve())),!xt)return;xt=null;const t=$={},e=await dt(v.url,!0);L=null;const n=e&&await zt(e);if(!(!n||t!==$)){if(n.type==="redirect")return Et(new URL(n.location,v.url).href,{},1,t);n.props.page&&Object.assign(I,n.props.page),v=n.state,Ue(),Kt.$set(n.props),Se(n.props.page)}}function Ue(){yt.length=0,Ht=!1}function Le(t){_t.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=_t.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Te(t){var e;(e=Q[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=_t[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ie(){qt(R),ee(we,B),Le(T),ee(me,Q)}async function Et(t,e,n,r){return pt({type:"goto",url:_e(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Ht=!0),e.invalidate&&e.invalidate.forEach(Oe)}})}async function Pn(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:zt({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Ct(t){var n;const e=(n=await dt(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(r=>r==null?void 0:r[1]()))}function Pe(t,e,n){var s;v=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,t.props.page),Kt=new A.root({target:e,props:{...t.props,stores:D,components:_t},hydrate:n,sync:!1}),Te(T);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(a)),vt=!0}function bt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(P&&(t.pathname===P||t.pathname===P+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=Ge(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:_n(n).map(f=>f.node.component),page:Jt(I)}};i!==void 0&&(c.props.form=i);let l={},p=!I,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],h=v.branch[f];(m==null?void 0:m.data)!==(h==null?void 0:h.data)&&(p=!0),m&&(l={...l,...m.data},p&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||t.href!==v.url.href||v.error!==a||i!==void 0&&i!==I.form||p)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:p?l:I.data}),c}async function Wt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var p,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((p=l.universal)!=null&&p.load){let f=function(...h){for(const d of h){const{href:y}=new URL(d,n);c.dependencies.add(y)}};const m={route:new Proxy(a,{get:(h,d)=>(o&&(c.route=!0),h[d])}),params:new Proxy(r,{get:(h,d)=>(o&&c.params.add(d),h[d])}),data:(s==null?void 0:s.data)??null,url:Ke(n,()=>{o&&(c.url=!0)},h=>{o&&c.search_params.add(h)},A.hash),async fetch(h,d){let y;h instanceof Request?(y=h.url,d={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:[...h.headers].length?h.headers:void 0,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...d}):y=h;const S=new URL(y,n);return o&&f(S.href),S.origin===n.origin&&(y=S.href.slice(n.origin.length)),vt?Xe(y,S.href,d):Je(y,d)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(h){o=!1;try{return h()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function ce(t,e,n,r,a,s){if(Ht)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(yt.some(o=>o(new URL(i))))return!0;return!1}function Yt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function xn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function le({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Jt(I),constructors:[]}}}async function zt({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let p=null;const u=v.url?t!==kt(v.url):!1,w=v.route?a.id!==v.route.id:!1,f=xn(v.url,n);let m=!1;const h=l.map((g,_)=>{var F;const b=v.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||ce(m,w,u,f,(F=b.server)==null?void 0:F.uses,r));return E&&(m=!0),E});if(h.some(Boolean)){try{p=await Ne(n,h)}catch(g){const _=await H(g,{url:n,params:r,route:{id:t}});return J.has(s)?le({error:_,url:n,params:r,route:a}):Rt({status:mt(g),error:_,url:n,route:a})}if(p.type==="redirect")return p}const d=p==null?void 0:p.nodes;let y=!1;const S=l.map(async(g,_)=>{var It;if(!g)return;const b=v.branch[_],E=d==null?void 0:d[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!ce(y,w,u,f,(It=b.universal)==null?void 0:It.uses,r))return b;if(y=!0,(E==null?void 0:E.type)==="error")throw E;return Wt({loader:g[1],url:n,params:r,route:a,parent:async()=>{var Zt;const Xt={};for(let Ut=0;Ut<_;Ut+=1)Object.assign(Xt,(Zt=await S[Ut])==null?void 0:Zt.data);return Xt},server_data_node:Yt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of S)g.catch(()=>{});const U=[];for(let g=0;g<l.length;g+=1)if(l[g])try{U.push(await S[g])}catch(_){if(_ instanceof Vt)return{type:"redirect",location:_.location};if(J.has(s))return le({error:await H(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=mt(_),E;if(d!=null&&d.includes(_))b=_.status??b,E=_.error;else if(_ instanceof St)E=_.body;else{if(await D.updated.check())return await Ee(),await K(n);E=await H(_,{params:r,url:n,route:{id:a.id}})}const F=await Cn(g,U,i);return F?bt({url:n,params:r,branch:U.slice(0,F.idx).concat(F.node),status:b,error:E,route:a}):await Ce(n,{id:a.id},E,b)}else U.push(void 0);return bt({url:n,params:r,branch:U,status:200,error:null,route:a,form:e?void 0:null})}async function Cn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function Rt({status:t,error:e,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await Ne(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ut||n.pathname!==location.pathname||Mt)&&await K(n)}try{const o=await Wt({loader:Nt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Yt(s)}),c={node:await wt(),loader:wt,universal:null,server:null,data:null};return bt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof Vt)return Et(new URL(o.location,location.href),{},0);throw o}}async function On(t){let e;try{if(e=await A.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);A.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function dt(t,e){if(t&&!At(t,P,A.hash)){const n=await On(t);if(!n)return;const r=Nn(n);for(const a of Gt){const s=a.exec(r);if(s)return{id:kt(t),invalidating:e,route:a,params:He(s),url:t}}}}function Nn(t){return Me(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(P.length))||"/"}function kt(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function xe({url:t,type:e,intent:n,delta:r}){let a=!1;const s=$e(v,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return tt||Re.forEach(o=>o(i)),a?null:s}async function pt({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=oe,block:p=oe}){const u=$;$=c;const w=await dt(e,!1),f=xe({url:e,type:t,delta:n==null?void 0:n.delta,intent:w});if(!f){p(),$===c&&($=u);return}const m=R,h=T;l(),tt=!0,vt&&D.navigating.set(Z.current=f.navigation);let d=w&&await zt(w);if(!d){if(At(e,P,A.hash))return await K(e);d=await Ce(e,{id:null},await H(new Bt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(w==null?void 0:w.url)||e,$!==c)return f.reject(new Error("navigation aborted")),!1;if(d.type==="redirect")if(o>=20)d=await Rt({status:500,error:await H(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await Et(new URL(d.location,e).href,{},o+1,c),!1;else d.props.page.status>=400&&await D.updated.check()&&(await Ee(),await K(e));if(Ue(),qt(m),Le(h),d.props.page.url.pathname!==e.pathname&&(e.pathname=d.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[M]:R+=g,[X]:T+=g,[ye]:i};(s?history.replaceState:history.pushState).call(history,_,"",e),s||Un(R,T)}if(L=null,d.props.page.state=i,vt){v=d.state,d.props.page&&(d.props.page.url=e);const g=(await Promise.all(Array.from(Ln,_=>_(f.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{z.delete(b)})};g.push(_),g.forEach(b=>{z.add(b)})}Kt.$set(d.props),Se(d.props.page),Ie=!0}else Pe(d,jt,!1);const{activeElement:y}=document;await Be();const S=n?n.scroll:a?Ft():null;if(se){const g=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));S?scrollTo(S.x,S.y):g?g.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==y&&document.activeElement!==document.body;!r&&!U&&Vn(),se=!0,d.props.page&&Object.assign(I,d.props.page),tt=!1,t==="popstate"&&Te(T),f.fulfil(void 0),z.forEach(g=>g(f.navigation)),D.navigating.set(Z.current=null)}async function Ce(t,e,n,r){return t.origin===ut&&t.pathname===location.pathname&&!Mt?await Rt({status:r,error:n,url:t,route:e}):await K(t)}function jn(){let t,e,n;j.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(t),t=setTimeout(()=>{s(c,V.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],V.tap)}j.addEventListener("mousedown",r),j.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(Ct(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const l=be(o,j),p=l===e&&c>=n;if(!l||p)return;const{url:u,external:w,download:f}=Ot(l,P,A.hash);if(w||f)return;const m=gt(l),h=u&&kt(v.url)===kt(u);if(!(m.reload||h))if(c<=m.preload_data){e=l,n=V.tap;const d=await dt(u,!1);if(!d)return;Pn(d)}else c<=m.preload_code&&(e=l,n=c,Ct(u))}function i(){a.disconnect();for(const o of j.querySelectorAll("a")){const{url:c,external:l,download:p}=Ot(o,P,A.hash);if(l||p)continue;const u=gt(o);u.reload||(u.preload_code===V.viewport&&a.observe(o),u.preload_code===V.eager&&Ct(c))}}z.add(i),i()}function H(t,e){if(t instanceof St)return t.body;const n=mt(t),r=kn(t);return A.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function $n(t,e={}){return t=new URL(_e(t)),t.origin!==ut?Promise.reject(new Error("goto: invalid URL")):Et(t,e,0)}function Xn(t){return Oe(t),Tn()}function Oe(t){if(typeof t=="function")yt.push(t);else{const{href:e}=new URL(t,location.href);yt.push(n=>n.href===e)}}function Dn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ie(),!tt){const a=$e(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Re.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ie()}),(e=navigator.connection)!=null&&e.saveData||jn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=be(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Ot(r,P,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=gt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[p,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=p===Lt(location);if(s||c.reload&&(!w||!u)){xe({url:a,type:"link"})?tt=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(W=!0,qt(R),t(a),!c.replace_state)return;W=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await pt({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(At(o,P,!1))return;const c=n.target,l=gt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const p=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&p.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(p).toString(),pt({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[M]){const a=n.state[M];if($={},a===R)return;const s=B[a],i=n.state[ye]??{},o=new URL(n.state[sn]??location.href),c=n.state[X],l=v.url?Lt(location)===Lt(v.url):!1;if(c===T&&(Ie||l)){i!==I.state&&(I.state=i),t(o),B[R]=Ft(),s&&scrollTo(s.x,s.y),R=a;return}const u=a-R;await pt({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{R=a,T=c},block:()=>{history.go(-u)},nav_token:$})}else if(!W){const a=new URL(location.href);t(a),A.hash&&location.reload()}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[M]:++R,[X]:T},"",location.href))});for(const n of document.querySelectorAll("link"))In.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&D.navigating.set(Z.current=null)});function t(n){v.url=I.url=n,D.page.set(Jt(I)),D.page.notify()}}async function Fn(t,{status:e=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Mt=!0;const l=new URL(location.href);let p;({params:a={},route:s={id:null}}=await dt(l,!1)||{}),p=Gt.find(({id:f})=>f===s.id);let u,w=!0;try{const f=r.map(async(h,d)=>{const y=o[d];return y!=null&&y.uses&&(y.uses=je(y.uses)),Wt({loader:A.nodes[h],url:l,params:a,route:s,parent:async()=>{const S={};for(let U=0;U<d;U+=1)Object.assign(S,(await f[U]).data);return S},server_data_node:Yt(y)})}),m=await Promise.all(f);if(p){const h=p.layouts;for(let d=0;d<h.length;d++)h[d]||m.splice(d,0,void 0)}u=bt({url:l,params:a,branch:m,status:e,error:n,form:c,route:p??null})}catch(f){if(f instanceof Vt){await K(new URL(f.location,location.href));return}u=await Rt({status:mt(f),error:await H(f,{url:l,params:a,route:s}),url:l,route:s}),t.textContent="",w=!1}u.props.page&&(u.props.page.state={}),Pe(u,t,w)}async function Ne(t,e){var s;const n=new URL(t);n.pathname=Rn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(bn,"1"),n.searchParams.append(vn,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new St(a.status,i)}return new Promise(async i=>{var w;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function p(f){return wn(f,{...A.decoders,Promise:m=>new Promise((h,d)=>{o.set(m,{fulfil:h,reject:d})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const h=u.indexOf(`
`);if(h===-1)break;const d=JSON.parse(u.slice(0,h));if(u=u.slice(h+1),d.type==="redirect")return i(d);if(d.type==="data")(w=d.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=je(y.uses),y.data=p(y.data))}),i(d);else if(d.type==="chunk"){const{id:y,data:S,error:U}=d,g=o.get(y);o.delete(y),U?g.reject(p(U)):g.fulfil(p(S))}}}})}function je(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Vn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function $e(t,e,n,r){var c,l;let a,s;const i=new Promise((p,u)=>{a=p,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Jt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Bn(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{D as a,$n as b,P as c,Jn as d,Hn as g,Xn as i,Kn as l,I as p,qe as s};
