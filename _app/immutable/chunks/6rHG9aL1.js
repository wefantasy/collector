import{d as H,af as R,ag as D,L as M,ah as P,D as A,ai as T,l as Y,U as B,S as C,aj as b,v as y,j as k,o as $,w as v,x as q,ak as z,al as U,O as W,B as Z,am as F,h as G,z as J,k as E,p as K,Z as Q,b as X}from"./D-Pk5wHr.js";import{r as x}from"./o7Ia18Yw.js";import{b as rr}from"./DB3QmcoM.js";const ar=["touchstart","touchmove"];function er(r){return ar.includes(r)}const L=new Set,S=new Set;function ir(r){for(var a=0;a<r.length;a++)L.add(r[a]);for(var t of S)t(r)}function m(r){var O;var a=this,t=a.ownerDocument,c=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],e=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;u<=h&&(d=u)}if(e=i[d]||r.target,e!==a){H(r,"currentTarget",{configurable:!0,get(){return e||t}});var w=P,o=A;R(null),D(null);try{for(var s,n=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&(!e.disabled||r.target===e))if(M(l)){var[V,...j]=l;V.apply(e,[r,...j])}else l.call(e,r)}catch(g){s?n.push(g):s=g}if(r.cancelBubble||f===a||f===null)break;e=f}if(s){for(let g of n)queueMicrotask(()=>{throw g});throw s}}finally{r.__root=a,delete r.currentTarget,R(w),D(o)}}}function fr(r,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t+"")}function tr(r,a){return I(r,a)}function dr(r,a){T(),a.intro=a.intro??!1;const t=a.target,c=E,i=v;try{for(var e=Y(t);e&&(e.nodeType!==8||e.data!==B);)e=C(e);if(!e)throw b;y(!0),k(e),$();const d=I(r,{...a,anchor:e});if(v===null||v.nodeType!==8||v.data!==q)throw z(),b;return y(!1),d}catch(d){if(d===b)return a.recover===!1&&U(),T(),W(t),y(!1),tr(r,a);throw d}finally{y(c),k(i),x()}}const p=new Map;function I(r,{target:a,anchor:t,props:c={},events:i,context:e,intro:d=!0}){T();var _=new Set,u=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!_.has(n)){_.add(n);var f=er(n);a.addEventListener(n,m,{passive:f});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,l+1)}}};u(Z(L)),S.add(u);var h=void 0,w=F(()=>{var o=t??a.appendChild(G());return J(()=>{if(e){K({});var s=Q;s.c=e}i&&(c.$$events=i),E&&rr(o,null),h=r(o,c)||{},E&&(A.nodes_end=v),e&&X()}),()=>{var f;for(var s of _){a.removeEventListener(s,m);var n=p.get(s);--n===0?(document.removeEventListener(s,m),p.delete(s)):p.set(s,n)}S.delete(u),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(h,w),h}let N=new WeakMap;function ur(r,a){const t=N.get(r);return t?(N.delete(r),t(a)):Promise.resolve()}export{ir as d,dr as h,tr as m,fr as s,ur as u};
