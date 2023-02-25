import{a as ji,t as Be}from"/build/_shared/chunk-ZFWZJZG4.js";import{c as Ee,e as ue}from"/build/_shared/chunk-ADMCF34Z.js";var Ui=Ee((ur,Ti)=>{"use strict";var de=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,Ji=Object.getOwnPropertyNames,$i=Object.prototype.hasOwnProperty,p=(e,i)=>de(e,"name",{value:i,configurable:!0}),yi=(e,i)=>{for(var r in i)de(e,r,{get:i[r],enumerable:!0})},Yi=(e,i,r,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let t of Ji(i))!$i.call(e,t)&&t!==r&&de(e,t,{get:()=>i[t],enumerable:!(n=Hi(i,t))||n.enumerable});return e},Wi=e=>Yi(de({},"__esModule",{value:!0}),e),Ve={};yi(Ve,{Decimal:()=>ir,makeStrictEnum:()=>He,objectEnumValues:()=>Xi});Ti.exports=Wi(Ve);var ae=Symbol(),be=new WeakMap,je=class{constructor(e){e===ae?be.set(this,`Prisma.${this._getName()}`):be.set(this,`new Prisma.${this._getNamespace()}.${this._getName()}()`)}_getName(){return this.constructor.name}toString(){return be.get(this)}};p(je,"ObjectEnumValue");var pe=class extends je{_getNamespace(){return"NullTypes"}};p(pe,"NullTypesEnumValue");var Se=class extends pe{};p(Se,"DbNull");var Pe=class extends pe{};p(Pe,"JsonNull");var Ie=class extends pe{};p(Ie,"AnyNull");var Xi={classes:{DbNull:Se,JsonNull:Pe,AnyNull:Ie},instances:{DbNull:new Se(ae),JsonNull:new Pe(ae),AnyNull:new Ie(ae)}},Gi=new Set(["toJSON","asymmetricMatch",Symbol.iterator,Symbol.toStringTag,Symbol.isConcatSpreadable,Symbol.toPrimitive]);function He(e){return new Proxy(e,{get(i,r){if(r in i)return i[r];if(!Gi.has(r))throw new TypeError(`Invalid enum value: ${String(r)}`)}})}p(He,"makeStrictEnum");var W=9e15,$=1e9,ke="0123456789abcdef",le="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",ce="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Ce={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-W,maxE:W,crypto:!1},Je,j,v=!0,me="[DecimalError] ",J=me+"Invalid argument: ",$e=me+"Precision limit exceeded",ye=me+"crypto unavailable",Ye="[object Decimal]",O=Math.floor,k=Math.pow,Ki=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Qi=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,zi=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,We=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,U=1e7,w=7,xi=9007199254740991,er=le.length-1,De=ce.length-1,d={toStringTag:Ye};d.absoluteValue=d.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),m(e)};d.ceil=function(){return m(new this.constructor(this),this.e+1,2)};d.clampedTo=d.clamp=function(e,i){var r,n=this,t=n.constructor;if(e=new t(e),i=new t(i),!e.s||!i.s)return new t(NaN);if(e.gt(i))throw Error(J+i);return r=n.cmp(e),r<0?e:n.cmp(i)>0?i:new t(n)};d.comparedTo=d.cmp=function(e){var i,r,n,t,s=this,o=s.d,u=(e=new s.constructor(e)).d,l=s.s,a=e.s;if(!o||!u)return!l||!a?NaN:l!==a?l:o===u?0:!o^l<0?1:-1;if(!o[0]||!u[0])return o[0]?l:u[0]?-a:0;if(l!==a)return l;if(s.e!==e.e)return s.e>e.e^l<0?1:-1;for(n=o.length,t=u.length,i=0,r=n<t?n:t;i<r;++i)if(o[i]!==u[i])return o[i]>u[i]^l<0?1:-1;return n===t?0:n>t^l<0?1:-1};d.cosine=d.cos=function(){var e,i,r=this,n=r.constructor;return r.d?r.d[0]?(e=n.precision,i=n.rounding,n.precision=e+Math.max(r.e,r.sd())+w,n.rounding=1,r=Xe(n,Le(n,r)),n.precision=e,n.rounding=i,m(j==2||j==3?r.neg():r,e,i,!0)):new n(1):new n(NaN)};d.cubeRoot=d.cbrt=function(){var e,i,r,n,t,s,o,u,l,a,c=this,f=c.constructor;if(!c.isFinite()||c.isZero())return new f(c);for(v=!1,s=c.s*k(c.s*c,1/3),!s||Math.abs(s)==1/0?(r=D(c.d),e=c.e,(s=(e-r.length+1)%3)&&(r+=s==1||s==-2?"0":"00"),s=k(r,1/3),e=O((e+1)/3)-(e%3==(e<0?-1:2)),s==1/0?r="5e"+e:(r=s.toExponential(),r=r.slice(0,r.indexOf("e")+1)+e),n=new f(r),n.s=c.s):n=new f(s.toString()),o=(e=f.precision)+3;;)if(u=n,l=u.times(u).times(u),a=l.plus(c),n=S(a.plus(c).times(u),a.plus(l),o+2,1),D(u.d).slice(0,o)===(r=D(n.d)).slice(0,o))if(r=r.slice(o-3,o+1),r=="9999"||!t&&r=="4999"){if(!t&&(m(u,e+1,0),u.times(u).times(u).eq(c))){n=u;break}o+=4,t=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(m(n,e+1,1),i=!n.times(n).times(n).eq(c));break}return v=!0,m(n,e,f.rounding,i)};d.decimalPlaces=d.dp=function(){var e,i=this.d,r=NaN;if(i){if(e=i.length-1,r=(e-O(this.e/w))*w,e=i[e],e)for(;e%10==0;e/=10)r--;r<0&&(r=0)}return r};d.dividedBy=d.div=function(e){return S(this,new this.constructor(e))};d.dividedToIntegerBy=d.divToInt=function(e){var i=this,r=i.constructor;return m(S(i,new r(e),0,1,1),r.precision,r.rounding)};d.equals=d.eq=function(e){return this.cmp(e)===0};d.floor=function(){return m(new this.constructor(this),this.e+1,3)};d.greaterThan=d.gt=function(e){return this.cmp(e)>0};d.greaterThanOrEqualTo=d.gte=function(e){var i=this.cmp(e);return i==1||i===0};d.hyperbolicCosine=d.cosh=function(){var e,i,r,n,t,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;r=o.precision,n=o.rounding,o.precision=r+Math.max(s.e,s.sd())+4,o.rounding=1,t=s.d.length,t<32?(e=Math.ceil(t/3),i=(1/ie(4,e)).toString()):(e=16,i="2.3283064365386962890625e-10"),s=y(o,1,s.times(i),new o(1),!0);for(var l,a=e,c=new o(8);a--;)l=s.times(s),s=u.minus(l.times(c.minus(l.times(c))));return m(s,o.precision=r,o.rounding=n,!0)};d.hyperbolicSine=d.sinh=function(){var e,i,r,n,t=this,s=t.constructor;if(!t.isFinite()||t.isZero())return new s(t);if(i=s.precision,r=s.rounding,s.precision=i+Math.max(t.e,t.sd())+4,s.rounding=1,n=t.d.length,n<3)t=y(s,2,t,t,!0);else{e=1.4*Math.sqrt(n),e=e>16?16:e|0,t=t.times(1/ie(5,e)),t=y(s,2,t,t,!0);for(var o,u=new s(5),l=new s(16),a=new s(20);e--;)o=t.times(t),t=t.times(u.plus(o.times(l.times(o).plus(a))))}return s.precision=i,s.rounding=r,m(t,i,r,!0)};d.hyperbolicTangent=d.tanh=function(){var e,i,r=this,n=r.constructor;return r.isFinite()?r.isZero()?new n(r):(e=n.precision,i=n.rounding,n.precision=e+7,n.rounding=1,S(r.sinh(),r.cosh(),n.precision=e,n.rounding=i)):new n(r.s)};d.inverseCosine=d.acos=function(){var e,i=this,r=i.constructor,n=i.abs().cmp(1),t=r.precision,s=r.rounding;return n!==-1?n===0?i.isNeg()?q(r,t,s):new r(0):new r(NaN):i.isZero()?q(r,t+4,s).times(.5):(r.precision=t+6,r.rounding=1,i=i.asin(),e=q(r,t+4,s).times(.5),r.precision=t,r.rounding=s,e.minus(i))};d.inverseHyperbolicCosine=d.acosh=function(){var e,i,r=this,n=r.constructor;return r.lte(1)?new n(r.eq(1)?0:NaN):r.isFinite()?(e=n.precision,i=n.rounding,n.precision=e+Math.max(Math.abs(r.e),r.sd())+4,n.rounding=1,v=!1,r=r.times(r).minus(1).sqrt().plus(r),v=!0,n.precision=e,n.rounding=i,r.ln()):new n(r)};d.inverseHyperbolicSine=d.asinh=function(){var e,i,r=this,n=r.constructor;return!r.isFinite()||r.isZero()?new n(r):(e=n.precision,i=n.rounding,n.precision=e+2*Math.max(Math.abs(r.e),r.sd())+6,n.rounding=1,v=!1,r=r.times(r).plus(1).sqrt().plus(r),v=!0,n.precision=e,n.rounding=i,r.ln())};d.inverseHyperbolicTangent=d.atanh=function(){var e,i,r,n,t=this,s=t.constructor;return t.isFinite()?t.e>=0?new s(t.abs().eq(1)?t.s/0:t.isZero()?t:NaN):(e=s.precision,i=s.rounding,n=t.sd(),Math.max(n,e)<2*-t.e-1?m(new s(t),e,i,!0):(s.precision=r=n-t.e,t=S(t.plus(1),new s(1).minus(t),r+e,1),s.precision=e+4,s.rounding=1,t=t.ln(),s.precision=e,s.rounding=i,t.times(.5))):new s(NaN)};d.inverseSine=d.asin=function(){var e,i,r,n,t=this,s=t.constructor;return t.isZero()?new s(t):(i=t.abs().cmp(1),r=s.precision,n=s.rounding,i!==-1?i===0?(e=q(s,r+4,n).times(.5),e.s=t.s,e):new s(NaN):(s.precision=r+6,s.rounding=1,t=t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan(),s.precision=r,s.rounding=n,t.times(2)))};d.inverseTangent=d.atan=function(){var e,i,r,n,t,s,o,u,l,a=this,c=a.constructor,f=c.precision,h=c.rounding;if(a.isFinite()){if(a.isZero())return new c(a);if(a.abs().eq(1)&&f+4<=De)return o=q(c,f+4,h).times(.25),o.s=a.s,o}else{if(!a.s)return new c(NaN);if(f+4<=De)return o=q(c,f+4,h).times(.5),o.s=a.s,o}for(c.precision=u=f+10,c.rounding=1,r=Math.min(28,u/w+2|0),e=r;e;--e)a=a.div(a.times(a).plus(1).sqrt().plus(1));for(v=!1,i=Math.ceil(u/w),n=1,l=a.times(a),o=new c(a),t=a;e!==-1;)if(t=t.times(l),s=o.minus(t.div(n+=2)),t=t.times(l),o=s.plus(t.div(n+=2)),o.d[i]!==void 0)for(e=i;o.d[e]===s.d[e]&&e--;);return r&&(o=o.times(2<<r-1)),v=!0,m(o,c.precision=f,c.rounding=h,!0)};d.isFinite=function(){return!!this.d};d.isInteger=d.isInt=function(){return!!this.d&&O(this.e/w)>this.d.length-2};d.isNaN=function(){return!this.s};d.isNegative=d.isNeg=function(){return this.s<0};d.isPositive=d.isPos=function(){return this.s>0};d.isZero=function(){return!!this.d&&this.d[0]===0};d.lessThan=d.lt=function(e){return this.cmp(e)<0};d.lessThanOrEqualTo=d.lte=function(e){return this.cmp(e)<1};d.logarithm=d.log=function(e){var i,r,n,t,s,o,u,l,a=this,c=a.constructor,f=c.precision,h=c.rounding,g=5;if(e==null)e=new c(10),i=!0;else{if(e=new c(e),r=e.d,e.s<0||!r||!r[0]||e.eq(1))return new c(NaN);i=e.eq(10)}if(r=a.d,a.s<0||!r||!r[0]||a.eq(1))return new c(r&&!r[0]?-1/0:a.s!=1?NaN:r?0:1/0);if(i)if(r.length>1)s=!0;else{for(t=r[0];t%10===0;)t/=10;s=t!==1}if(v=!1,u=f+g,o=H(a,u),n=i?x(c,u+10):H(e,u),l=S(o,n,u,1),X(l.d,t=f,h))do if(u+=10,o=H(a,u),n=i?x(c,u+10):H(e,u),l=S(o,n,u,1),!s){+D(l.d).slice(t+1,t+15)+1==1e14&&(l=m(l,f+1,0));break}while(X(l.d,t+=10,h));return v=!0,m(l,f,h)};d.minus=d.sub=function(e){var i,r,n,t,s,o,u,l,a,c,f,h,g=this,E=g.constructor;if(e=new E(e),!g.d||!e.d)return!g.s||!e.s?e=new E(NaN):g.d?e.s=-e.s:e=new E(e.d||g.s!==e.s?g:NaN),e;if(g.s!=e.s)return e.s=-e.s,g.plus(e);if(a=g.d,h=e.d,u=E.precision,l=E.rounding,!a[0]||!h[0]){if(h[0])e.s=-e.s;else if(a[0])e=new E(g);else return new E(l===3?-0:0);return v?m(e,u,l):e}if(r=O(e.e/w),c=O(g.e/w),a=a.slice(),s=c-r,s){for(f=s<0,f?(i=a,s=-s,o=h.length):(i=h,r=c,o=a.length),n=Math.max(Math.ceil(u/w),o)+2,s>n&&(s=n,i.length=1),i.reverse(),n=s;n--;)i.push(0);i.reverse()}else{for(n=a.length,o=h.length,f=n<o,f&&(o=n),n=0;n<o;n++)if(a[n]!=h[n]){f=a[n]<h[n];break}s=0}for(f&&(i=a,a=h,h=i,e.s=-e.s),o=a.length,n=h.length-o;n>0;--n)a[o++]=0;for(n=h.length;n>s;){if(a[--n]<h[n]){for(t=n;t&&a[--t]===0;)a[t]=U-1;--a[t],a[n]+=U}a[n]-=h[n]}for(;a[--o]===0;)a.pop();for(;a[0]===0;a.shift())--r;return a[0]?(e.d=a,e.e=ee(a,r),v?m(e,u,l):e):new E(l===3?-0:0)};d.modulo=d.mod=function(e){var i,r=this,n=r.constructor;return e=new n(e),!r.d||!e.s||e.d&&!e.d[0]?new n(NaN):!e.d||r.d&&!r.d[0]?m(new n(r),n.precision,n.rounding):(v=!1,n.modulo==9?(i=S(r,e.abs(),0,3,1),i.s*=e.s):i=S(r,e,0,n.modulo,1),i=i.times(e),v=!0,r.minus(i))};d.naturalExponential=d.exp=function(){return fe(this)};d.naturalLogarithm=d.ln=function(){return H(this)};d.negated=d.neg=function(){var e=new this.constructor(this);return e.s=-e.s,m(e)};d.plus=d.add=function(e){var i,r,n,t,s,o,u,l,a,c,f=this,h=f.constructor;if(e=new h(e),!f.d||!e.d)return!f.s||!e.s?e=new h(NaN):f.d||(e=new h(e.d||f.s===e.s?f:NaN)),e;if(f.s!=e.s)return e.s=-e.s,f.minus(e);if(a=f.d,c=e.d,u=h.precision,l=h.rounding,!a[0]||!c[0])return c[0]||(e=new h(f)),v?m(e,u,l):e;if(s=O(f.e/w),n=O(e.e/w),a=a.slice(),t=s-n,t){for(t<0?(r=a,t=-t,o=c.length):(r=c,n=s,o=a.length),s=Math.ceil(u/w),o=s>o?s+1:o+1,t>o&&(t=o,r.length=1),r.reverse();t--;)r.push(0);r.reverse()}for(o=a.length,t=c.length,o-t<0&&(t=o,r=c,c=a,a=r),i=0;t;)i=(a[--t]=a[t]+c[t]+i)/U|0,a[t]%=U;for(i&&(a.unshift(i),++n),o=a.length;a[--o]==0;)a.pop();return e.d=a,e.e=ee(a,n),v?m(e,u,l):e};d.precision=d.sd=function(e){var i,r=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(J+e);return r.d?(i=Ae(r.d),e&&r.e+1>i&&(i=r.e+1)):i=NaN,i};d.round=function(){var e=this,i=e.constructor;return m(new i(e),e.e+1,i.rounding)};d.sine=d.sin=function(){var e,i,r=this,n=r.constructor;return r.isFinite()?r.isZero()?new n(r):(e=n.precision,i=n.rounding,n.precision=e+Math.max(r.e,r.sd())+w,n.rounding=1,r=Ke(n,Le(n,r)),n.precision=e,n.rounding=i,m(j>2?r.neg():r,e,i,!0)):new n(NaN)};d.squareRoot=d.sqrt=function(){var e,i,r,n,t,s,o=this,u=o.d,l=o.e,a=o.s,c=o.constructor;if(a!==1||!u||!u[0])return new c(!a||a<0&&(!u||u[0])?NaN:u?o:1/0);for(v=!1,a=Math.sqrt(+o),a==0||a==1/0?(i=D(u),(i.length+l)%2==0&&(i+="0"),a=Math.sqrt(i),l=O((l+1)/2)-(l<0||l%2),a==1/0?i="5e"+l:(i=a.toExponential(),i=i.slice(0,i.indexOf("e")+1)+l),n=new c(i)):n=new c(a.toString()),r=(l=c.precision)+3;;)if(s=n,n=s.plus(S(o,s,r+2,1)).times(.5),D(s.d).slice(0,r)===(i=D(n.d)).slice(0,r))if(i=i.slice(r-3,r+1),i=="9999"||!t&&i=="4999"){if(!t&&(m(s,l+1,0),s.times(s).eq(o))){n=s;break}r+=4,t=1}else{(!+i||!+i.slice(1)&&i.charAt(0)=="5")&&(m(n,l+1,1),e=!n.times(n).eq(o));break}return v=!0,m(n,l,c.rounding,e)};d.tangent=d.tan=function(){var e,i,r=this,n=r.constructor;return r.isFinite()?r.isZero()?new n(r):(e=n.precision,i=n.rounding,n.precision=e+10,n.rounding=1,r=r.sin(),r.s=1,r=S(r,new n(1).minus(r.times(r)).sqrt(),e+10,0),n.precision=e,n.rounding=i,m(j==2||j==4?r.neg():r,e,i,!0)):new n(NaN)};d.times=d.mul=function(e){var i,r,n,t,s,o,u,l,a,c=this,f=c.constructor,h=c.d,g=(e=new f(e)).d;if(e.s*=c.s,!h||!h[0]||!g||!g[0])return new f(!e.s||h&&!h[0]&&!g||g&&!g[0]&&!h?NaN:!h||!g?e.s/0:e.s*0);for(r=O(c.e/w)+O(e.e/w),l=h.length,a=g.length,l<a&&(s=h,h=g,g=s,o=l,l=a,a=o),s=[],o=l+a,n=o;n--;)s.push(0);for(n=a;--n>=0;){for(i=0,t=l+n;t>n;)u=s[t]+g[n]*h[t-n-1]+i,s[t--]=u%U|0,i=u/U|0;s[t]=(s[t]+i)%U|0}for(;!s[--o];)s.pop();return i?++r:s.shift(),e.d=s,e.e=ee(s,r),v?m(e,f.precision,f.rounding):e};d.toBinary=function(e,i){return ge(this,2,e,i)};d.toDecimalPlaces=d.toDP=function(e,i){var r=this,n=r.constructor;return r=new n(r),e===void 0?r:(R(e,0,$),i===void 0?i=n.rounding:R(i,0,8),m(r,e+r.e+1,i))};d.toExponential=function(e,i){var r,n=this,t=n.constructor;return e===void 0?r=Z(n,!0):(R(e,0,$),i===void 0?i=t.rounding:R(i,0,8),n=m(new t(n),e+1,i),r=Z(n,!0,e+1)),n.isNeg()&&!n.isZero()?"-"+r:r};d.toFixed=function(e,i){var r,n,t=this,s=t.constructor;return e===void 0?r=Z(t):(R(e,0,$),i===void 0?i=s.rounding:R(i,0,8),n=m(new s(t),e+t.e+1,i),r=Z(n,!1,e+n.e+1)),t.isNeg()&&!t.isZero()?"-"+r:r};d.toFraction=function(e){var i,r,n,t,s,o,u,l,a,c,f,h,g=this,E=g.d,N=g.constructor;if(!E)return new N(g);if(a=r=new N(1),n=l=new N(0),i=new N(n),s=i.e=Ae(E)-g.e-1,o=s%w,i.d[0]=k(10,o<0?w+o:o),e==null)e=s>0?i:a;else{if(u=new N(e),!u.isInt()||u.lt(a))throw Error(J+u);e=u.gt(i)?s>0?i:a:u}for(v=!1,u=new N(D(E)),c=N.precision,N.precision=s=E.length*w*2;f=S(u,i,0,1,1),t=r.plus(f.times(n)),t.cmp(e)!=1;)r=n,n=t,t=a,a=l.plus(f.times(t)),l=t,t=i,i=u.minus(f.times(t)),u=t;return t=S(e.minus(r),n,0,1,1),l=l.plus(t.times(a)),r=r.plus(t.times(n)),l.s=a.s=g.s,h=S(a,n,s,1).minus(g).abs().cmp(S(l,r,s,1).minus(g).abs())<1?[a,n]:[l,r],N.precision=c,v=!0,h};d.toHexadecimal=d.toHex=function(e,i){return ge(this,16,e,i)};d.toNearest=function(e,i){var r=this,n=r.constructor;if(r=new n(r),e==null){if(!r.d)return r;e=new n(1),i=n.rounding}else{if(e=new n(e),i===void 0?i=n.rounding:R(i,0,8),!r.d)return e.s?r:e;if(!e.d)return e.s&&(e.s=r.s),e}return e.d[0]?(v=!1,r=S(r,e,0,i,1).times(e),v=!0,m(r)):(e.s=r.s,r=e),r};d.toNumber=function(){return+this};d.toOctal=function(e,i){return ge(this,8,e,i)};d.toPower=d.pow=function(e){var i,r,n,t,s,o,u=this,l=u.constructor,a=+(e=new l(e));if(!u.d||!e.d||!u.d[0]||!e.d[0])return new l(k(+u,a));if(u=new l(u),u.eq(1))return u;if(n=l.precision,s=l.rounding,e.eq(1))return m(u,n,s);if(i=O(e.e/w),i>=e.d.length-1&&(r=a<0?-a:a)<=xi)return t=_e(l,u,r,n),e.s<0?new l(1).div(t):m(t,n,s);if(o=u.s,o<0){if(i<e.d.length-1)return new l(NaN);if((e.d[i]&1)==0&&(o=1),u.e==0&&u.d[0]==1&&u.d.length==1)return u.s=o,u}return r=k(+u,a),i=r==0||!isFinite(r)?O(a*(Math.log("0."+D(u.d))/Math.LN10+u.e+1)):new l(r+"").e,i>l.maxE+1||i<l.minE-1?new l(i>0?o/0:0):(v=!1,l.rounding=u.s=1,r=Math.min(12,(i+"").length),t=fe(e.times(H(u,n+r)),n),t.d&&(t=m(t,n+5,1),X(t.d,n,s)&&(i=n+10,t=m(fe(e.times(H(u,i+r)),i),i+5,1),+D(t.d).slice(n+1,n+15)+1==1e14&&(t=m(t,n+1,0)))),t.s=o,v=!0,l.rounding=s,m(t,n,s))};d.toPrecision=function(e,i){var r,n=this,t=n.constructor;return e===void 0?r=Z(n,n.e<=t.toExpNeg||n.e>=t.toExpPos):(R(e,1,$),i===void 0?i=t.rounding:R(i,0,8),n=m(new t(n),e,i),r=Z(n,e<=n.e||n.e<=t.toExpNeg,e)),n.isNeg()&&!n.isZero()?"-"+r:r};d.toSignificantDigits=d.toSD=function(e,i){var r=this,n=r.constructor;return e===void 0?(e=n.precision,i=n.rounding):(R(e,1,$),i===void 0?i=n.rounding:R(i,0,8)),m(new n(r),e,i)};d.toString=function(){var e=this,i=e.constructor,r=Z(e,e.e<=i.toExpNeg||e.e>=i.toExpPos);return e.isNeg()&&!e.isZero()?"-"+r:r};d.truncated=d.trunc=function(){return m(new this.constructor(this),this.e+1,1)};d.valueOf=d.toJSON=function(){var e=this,i=e.constructor,r=Z(e,e.e<=i.toExpNeg||e.e>=i.toExpPos);return e.isNeg()?"-"+r:r};function D(e){var i,r,n,t=e.length-1,s="",o=e[0];if(t>0){for(s+=o,i=1;i<t;i++)n=e[i]+"",r=w-n.length,r&&(s+=V(r)),s+=n;o=e[i],n=o+"",r=w-n.length,r&&(s+=V(r))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}p(D,"digitsToString");function R(e,i,r){if(e!==~~e||e<i||e>r)throw Error(J+e)}p(R,"checkInt32");function X(e,i,r,n){var t,s,o,u;for(s=e[0];s>=10;s/=10)--i;return--i<0?(i+=w,t=0):(t=Math.ceil((i+1)/w),i%=w),s=k(10,w-i),u=e[t]%s|0,n==null?i<3?(i==0?u=u/100|0:i==1&&(u=u/10|0),o=r<4&&u==99999||r>3&&u==49999||u==5e4||u==0):o=(r<4&&u+1==s||r>3&&u+1==s/2)&&(e[t+1]/s/100|0)==k(10,i-2)-1||(u==s/2||u==0)&&(e[t+1]/s/100|0)==0:i<4?(i==0?u=u/1e3|0:i==1?u=u/100|0:i==2&&(u=u/10|0),o=(n||r<4)&&u==9999||!n&&r>3&&u==4999):o=((n||r<4)&&u+1==s||!n&&r>3&&u+1==s/2)&&(e[t+1]/s/1e3|0)==k(10,i-3)-1,o}p(X,"checkRoundingDigits");function z(e,i,r){for(var n,t=[0],s,o=0,u=e.length;o<u;){for(s=t.length;s--;)t[s]*=i;for(t[0]+=ke.indexOf(e.charAt(o++)),n=0;n<t.length;n++)t[n]>r-1&&(t[n+1]===void 0&&(t[n+1]=0),t[n+1]+=t[n]/r|0,t[n]%=r)}return t.reverse()}p(z,"convertBase");function Xe(e,i){var r,n,t;if(i.isZero())return i;n=i.d.length,n<32?(r=Math.ceil(n/3),t=(1/ie(4,r)).toString()):(r=16,t="2.3283064365386962890625e-10"),e.precision+=r,i=y(e,1,i.times(t),new e(1));for(var s=r;s--;){var o=i.times(i);i=o.times(o).minus(o).times(8).plus(1)}return e.precision-=r,i}p(Xe,"cosine");var S=function(){function e(n,t,s){var o,u=0,l=n.length;for(n=n.slice();l--;)o=n[l]*t+u,n[l]=o%s|0,u=o/s|0;return u&&n.unshift(u),n}p(e,"multiplyInteger");function i(n,t,s,o){var u,l;if(s!=o)l=s>o?1:-1;else for(u=l=0;u<s;u++)if(n[u]!=t[u]){l=n[u]>t[u]?1:-1;break}return l}p(i,"compare");function r(n,t,s,o){for(var u=0;s--;)n[s]-=u,u=n[s]<t[s]?1:0,n[s]=u*o+n[s]-t[s];for(;!n[0]&&n.length>1;)n.shift()}return p(r,"subtract"),function(n,t,s,o,u,l){var a,c,f,h,g,E,N,_,I,L,b,F,ne,B,we,te,Q,ve,T,se,oe=n.constructor,Ne=n.s==t.s?1:-1,M=n.d,P=t.d;if(!M||!M[0]||!P||!P[0])return new oe(!n.s||!t.s||(M?P&&M[0]==P[0]:!P)?NaN:M&&M[0]==0||!P?Ne*0:Ne/0);for(l?(g=1,c=n.e-t.e):(l=U,g=w,c=O(n.e/g)-O(t.e/g)),T=P.length,Q=M.length,I=new oe(Ne),L=I.d=[],f=0;P[f]==(M[f]||0);f++);if(P[f]>(M[f]||0)&&c--,s==null?(B=s=oe.precision,o=oe.rounding):u?B=s+(n.e-t.e)+1:B=s,B<0)L.push(1),E=!0;else{if(B=B/g+2|0,f=0,T==1){for(h=0,P=P[0],B++;(f<Q||h)&&B--;f++)we=h*l+(M[f]||0),L[f]=we/P|0,h=we%P|0;E=h||f<Q}else{for(h=l/(P[0]+1)|0,h>1&&(P=e(P,h,l),M=e(M,h,l),T=P.length,Q=M.length),te=T,b=M.slice(0,T),F=b.length;F<T;)b[F++]=0;se=P.slice(),se.unshift(0),ve=P[0],P[1]>=l/2&&++ve;do h=0,a=i(P,b,T,F),a<0?(ne=b[0],T!=F&&(ne=ne*l+(b[1]||0)),h=ne/ve|0,h>1?(h>=l&&(h=l-1),N=e(P,h,l),_=N.length,F=b.length,a=i(N,b,_,F),a==1&&(h--,r(N,T<_?se:P,_,l))):(h==0&&(a=h=1),N=P.slice()),_=N.length,_<F&&N.unshift(0),r(b,N,F,l),a==-1&&(F=b.length,a=i(P,b,T,F),a<1&&(h++,r(b,T<F?se:P,F,l))),F=b.length):a===0&&(h++,b=[0]),L[f++]=h,a&&b[0]?b[F++]=M[te]||0:(b=[M[te]],F=1);while((te++<Q||b[0]!==void 0)&&B--);E=b[0]!==void 0}L[0]||L.shift()}if(g==1)I.e=c,Je=E;else{for(f=1,h=L[0];h>=10;h/=10)f++;I.e=f+c*g-1,m(I,u?s+I.e+1:s,o,E)}return I}}();function m(e,i,r,n){var t,s,o,u,l,a,c,f,h,g=e.constructor;e:if(i!=null){if(f=e.d,!f)return e;for(t=1,u=f[0];u>=10;u/=10)t++;if(s=i-t,s<0)s+=w,o=i,c=f[h=0],l=c/k(10,t-o-1)%10|0;else if(h=Math.ceil((s+1)/w),u=f.length,h>=u)if(n){for(;u++<=h;)f.push(0);c=l=0,t=1,s%=w,o=s-w+1}else break e;else{for(c=u=f[h],t=1;u>=10;u/=10)t++;s%=w,o=s-w+t,l=o<0?0:c/k(10,t-o-1)%10|0}if(n=n||i<0||f[h+1]!==void 0||(o<0?c:c%k(10,t-o-1)),a=r<4?(l||n)&&(r==0||r==(e.s<0?3:2)):l>5||l==5&&(r==4||n||r==6&&(s>0?o>0?c/k(10,t-o):0:f[h-1])%10&1||r==(e.s<0?8:7)),i<1||!f[0])return f.length=0,a?(i-=e.e+1,f[0]=k(10,(w-i%w)%w),e.e=-i||0):f[0]=e.e=0,e;if(s==0?(f.length=h,u=1,h--):(f.length=h+1,u=k(10,w-s),f[h]=o>0?(c/k(10,t-o)%k(10,o)|0)*u:0),a)for(;;)if(h==0){for(s=1,o=f[0];o>=10;o/=10)s++;for(o=f[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(e.e++,f[0]==U&&(f[0]=1));break}else{if(f[h]+=u,f[h]!=U)break;f[h--]=0,u=1}for(s=f.length;f[--s]===0;)f.pop()}return v&&(e.e>g.maxE?(e.d=null,e.e=NaN):e.e<g.minE&&(e.e=0,e.d=[0])),e}p(m,"finalise");function Z(e,i,r){if(!e.isFinite())return qe(e);var n,t=e.e,s=D(e.d),o=s.length;return i?(r&&(n=r-o)>0?s=s.charAt(0)+"."+s.slice(1)+V(n):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(e.e<0?"e":"e+")+e.e):t<0?(s="0."+V(-t-1)+s,r&&(n=r-o)>0&&(s+=V(n))):t>=o?(s+=V(t+1-o),r&&(n=r-t-1)>0&&(s=s+"."+V(n))):((n=t+1)<o&&(s=s.slice(0,n)+"."+s.slice(n)),r&&(n=r-o)>0&&(t+1===o&&(s+="."),s+=V(n))),s}p(Z,"finiteToString");function ee(e,i){var r=e[0];for(i*=w;r>=10;r/=10)i++;return i}p(ee,"getBase10Exponent");function x(e,i,r){if(i>er)throw v=!0,r&&(e.precision=r),Error($e);return m(new e(le),i,1,!0)}p(x,"getLn10");function q(e,i,r){if(i>De)throw Error($e);return m(new e(ce),i,r,!0)}p(q,"getPi");function Ae(e){var i=e.length-1,r=i*w+1;if(i=e[i],i){for(;i%10==0;i/=10)r--;for(i=e[0];i>=10;i/=10)r++}return r}p(Ae,"getPrecision");function V(e){for(var i="";e--;)i+="0";return i}p(V,"getZeroString");function _e(e,i,r,n){var t,s=new e(1),o=Math.ceil(n/w+4);for(v=!1;;){if(r%2&&(s=s.times(i),Me(s.d,o)&&(t=!0)),r=O(r/2),r===0){r=s.d.length-1,t&&s.d[r]===0&&++s.d[r];break}i=i.times(i),Me(i.d,o)}return v=!0,s}p(_e,"intPow");function Fe(e){return e.d[e.d.length-1]&1}p(Fe,"isOdd");function Re(e,i,r){for(var n,t=new e(i[0]),s=0;++s<i.length;)if(n=new e(i[s]),n.s)t[r](n)&&(t=n);else{t=n;break}return t}p(Re,"maxOrMin");function fe(e,i){var r,n,t,s,o,u,l,a=0,c=0,f=0,h=e.constructor,g=h.rounding,E=h.precision;if(!e.d||!e.d[0]||e.e>17)return new h(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:0/0);for(i==null?(v=!1,l=E):l=i,u=new h(.03125);e.e>-2;)e=e.times(u),f+=5;for(n=Math.log(k(2,f))/Math.LN10*2+5|0,l+=n,r=s=o=new h(1),h.precision=l;;){if(s=m(s.times(e),l,1),r=r.times(++c),u=o.plus(S(s,r,l,1)),D(u.d).slice(0,l)===D(o.d).slice(0,l)){for(t=f;t--;)o=m(o.times(o),l,1);if(i==null)if(a<3&&X(o.d,l-n,g,a))h.precision=l+=10,r=s=u=new h(1),c=0,a++;else return m(o,h.precision=E,g,v=!0);else return h.precision=E,o}o=u}}p(fe,"naturalExponential");function H(e,i){var r,n,t,s,o,u,l,a,c,f,h,g=1,E=10,N=e,_=N.d,I=N.constructor,L=I.rounding,b=I.precision;if(N.s<0||!_||!_[0]||!N.e&&_[0]==1&&_.length==1)return new I(_&&!_[0]?-1/0:N.s!=1?NaN:_?0:N);if(i==null?(v=!1,c=b):c=i,I.precision=c+=E,r=D(_),n=r.charAt(0),Math.abs(s=N.e)<15e14){for(;n<7&&n!=1||n==1&&r.charAt(1)>3;)N=N.times(e),r=D(N.d),n=r.charAt(0),g++;s=N.e,n>1?(N=new I("0."+r),s++):N=new I(n+"."+r.slice(1))}else return a=x(I,c+2,b).times(s+""),N=H(new I(n+"."+r.slice(1)),c-E).plus(a),I.precision=b,i==null?m(N,b,L,v=!0):N;for(f=N,l=o=N=S(N.minus(1),N.plus(1),c,1),h=m(N.times(N),c,1),t=3;;){if(o=m(o.times(h),c,1),a=l.plus(S(o,new I(t),c,1)),D(a.d).slice(0,c)===D(l.d).slice(0,c))if(l=l.times(2),s!==0&&(l=l.plus(x(I,c+2,b).times(s+""))),l=S(l,new I(g),c,1),i==null)if(X(l.d,c-E,L,u))I.precision=c+=E,a=o=N=S(f.minus(1),f.plus(1),c,1),h=m(N.times(N),c,1),t=u=1;else return m(l,I.precision=b,L,v=!0);else return I.precision=b,l;l=a,t+=2}}p(H,"naturalLogarithm");function qe(e){return String(e.s*e.s/0)}p(qe,"nonFiniteToString");function he(e,i){var r,n,t;for((r=i.indexOf("."))>-1&&(i=i.replace(".","")),(n=i.search(/e/i))>0?(r<0&&(r=n),r+=+i.slice(n+1),i=i.substring(0,n)):r<0&&(r=i.length),n=0;i.charCodeAt(n)===48;n++);for(t=i.length;i.charCodeAt(t-1)===48;--t);if(i=i.slice(n,t),i){if(t-=n,e.e=r=r-n-1,e.d=[],n=(r+1)%w,r<0&&(n+=w),n<t){for(n&&e.d.push(+i.slice(0,n)),t-=w;n<t;)e.d.push(+i.slice(n,n+=w));i=i.slice(n),n=w-i.length}else n-=t;for(;n--;)i+="0";e.d.push(+i),v&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}p(he,"parseDecimal");function Ge(e,i){var r,n,t,s,o,u,l,a,c;if(i.indexOf("_")>-1){if(i=i.replace(/(\d)_(?=\d)/g,"$1"),We.test(i))return he(e,i)}else if(i==="Infinity"||i==="NaN")return+i||(e.s=NaN),e.e=NaN,e.d=null,e;if(Qi.test(i))r=16,i=i.toLowerCase();else if(Ki.test(i))r=2;else if(zi.test(i))r=8;else throw Error(J+i);for(s=i.search(/p/i),s>0?(l=+i.slice(s+1),i=i.substring(2,s)):i=i.slice(2),s=i.indexOf("."),o=s>=0,n=e.constructor,o&&(i=i.replace(".",""),u=i.length,s=u-s,t=_e(n,new n(r),s,s*2)),a=z(i,r,U),c=a.length-1,s=c;a[s]===0;--s)a.pop();return s<0?new n(e.s*0):(e.e=ee(a,c),e.d=a,v=!1,o&&(e=S(e,t,u*4)),l&&(e=e.times(Math.abs(l)<54?k(2,l):re.pow(2,l))),v=!0,e)}p(Ge,"parseOther");function Ke(e,i){var r,n=i.d.length;if(n<3)return i.isZero()?i:y(e,2,i,i);r=1.4*Math.sqrt(n),r=r>16?16:r|0,i=i.times(1/ie(5,r)),i=y(e,2,i,i);for(var t,s=new e(5),o=new e(16),u=new e(20);r--;)t=i.times(i),i=i.times(s.plus(t.times(o.times(t).minus(u))));return i}p(Ke,"sine");function y(e,i,r,n,t){var s,o,u,l,a=1,c=e.precision,f=Math.ceil(c/w);for(v=!1,l=r.times(r),u=new e(n);;){if(o=S(u.times(l),new e(i++*i++),c,1),u=t?n.plus(o):n.minus(o),n=S(o.times(l),new e(i++*i++),c,1),o=u.plus(n),o.d[f]!==void 0){for(s=f;o.d[s]===u.d[s]&&s--;);if(s==-1)break}s=u,u=n,n=o,o=s,a++}return v=!0,o.d.length=f+1,o}p(y,"taylorSeries");function ie(e,i){for(var r=e;--i;)r*=e;return r}p(ie,"tinyPow");function Le(e,i){var r,n=i.s<0,t=q(e,e.precision,1),s=t.times(.5);if(i=i.abs(),i.lte(s))return j=n?4:1,i;if(r=i.divToInt(t),r.isZero())j=n?3:2;else{if(i=i.minus(r.times(t)),i.lte(s))return j=Fe(r)?n?2:3:n?4:1,i;j=Fe(r)?n?1:4:n?3:2}return i.minus(t).abs()}p(Le,"toLessThanHalfPi");function ge(e,i,r,n){var t,s,o,u,l,a,c,f,h,g=e.constructor,E=r!==void 0;if(E?(R(r,1,$),n===void 0?n=g.rounding:R(n,0,8)):(r=g.precision,n=g.rounding),!e.isFinite())c=qe(e);else{for(c=Z(e),o=c.indexOf("."),E?(t=2,i==16?r=r*4-3:i==8&&(r=r*3-2)):t=i,o>=0&&(c=c.replace(".",""),h=new g(1),h.e=c.length-o,h.d=z(Z(h),10,t),h.e=h.d.length),f=z(c,10,t),s=l=f.length;f[--l]==0;)f.pop();if(!f[0])c=E?"0p+0":"0";else{if(o<0?s--:(e=new g(e),e.d=f,e.e=s,e=S(e,h,r,n,0,t),f=e.d,s=e.e,a=Je),o=f[r],u=t/2,a=a||f[r+1]!==void 0,a=n<4?(o!==void 0||a)&&(n===0||n===(e.s<0?3:2)):o>u||o===u&&(n===4||a||n===6&&f[r-1]&1||n===(e.s<0?8:7)),f.length=r,a)for(;++f[--r]>t-1;)f[r]=0,r||(++s,f.unshift(1));for(l=f.length;!f[l-1];--l);for(o=0,c="";o<l;o++)c+=ke.charAt(f[o]);if(E){if(l>1)if(i==16||i==8){for(o=i==16?4:3,--l;l%o;l++)c+="0";for(f=z(c,t,i),l=f.length;!f[l-1];--l);for(o=1,c="1.";o<l;o++)c+=ke.charAt(f[o])}else c=c.charAt(0)+"."+c.slice(1);c=c+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)c="0"+c;c="0."+c}else if(++s>l)for(s-=l;s--;)c+="0";else s<l&&(c=c.slice(0,s)+"."+c.slice(s))}c=(i==16?"0x":i==2?"0b":i==8?"0o":"")+c}return e.s<0?"-"+c:c}p(ge,"toStringBinary");function Me(e,i){if(e.length>i)return e.length=i,!0}p(Me,"truncate");function Qe(e){return new this(e).abs()}p(Qe,"abs");function ze(e){return new this(e).acos()}p(ze,"acos");function xe(e){return new this(e).acosh()}p(xe,"acosh");function ei(e,i){return new this(e).plus(i)}p(ei,"add");function ii(e){return new this(e).asin()}p(ii,"asin");function ri(e){return new this(e).asinh()}p(ri,"asinh");function ni(e){return new this(e).atan()}p(ni,"atan");function ti(e){return new this(e).atanh()}p(ti,"atanh");function si(e,i){e=new this(e),i=new this(i);var r,n=this.precision,t=this.rounding,s=n+4;return!e.s||!i.s?r=new this(NaN):!e.d&&!i.d?(r=q(this,s,1).times(i.s>0?.25:.75),r.s=e.s):!i.d||e.isZero()?(r=i.s<0?q(this,n,t):new this(0),r.s=e.s):!e.d||i.isZero()?(r=q(this,s,1).times(.5),r.s=e.s):i.s<0?(this.precision=s,this.rounding=1,r=this.atan(S(e,i,s,1)),i=q(this,s,1),this.precision=n,this.rounding=t,r=e.s<0?r.minus(i):r.plus(i)):r=this.atan(S(e,i,s,1)),r}p(si,"atan2");function oi(e){return new this(e).cbrt()}p(oi,"cbrt");function ui(e){return m(e=new this(e),e.e+1,2)}p(ui,"ceil");function ai(e,i,r){return new this(e).clamp(i,r)}p(ai,"clamp");function li(e){if(!e||typeof e!="object")throw Error(me+"Object expected");var i,r,n,t=e.defaults===!0,s=["precision",1,$,"rounding",0,8,"toExpNeg",-W,0,"toExpPos",0,W,"maxE",0,W,"minE",-W,0,"modulo",0,9];for(i=0;i<s.length;i+=3)if(r=s[i],t&&(this[r]=Ce[r]),(n=e[r])!==void 0)if(O(n)===n&&n>=s[i+1]&&n<=s[i+2])this[r]=n;else throw Error(J+r+": "+n);if(r="crypto",t&&(this[r]=Ce[r]),(n=e[r])!==void 0)if(n===!0||n===!1||n===0||n===1)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[r]=!0;else throw Error(ye);else this[r]=!1;else throw Error(J+r+": "+n);return this}p(li,"config");function ci(e){return new this(e).cos()}p(ci,"cos");function fi(e){return new this(e).cosh()}p(fi,"cosh");function Te(e){var i,r,n;function t(s){var o,u,l,a=this;if(!(a instanceof t))return new t(s);if(a.constructor=t,Oe(s)){a.s=s.s,v?!s.d||s.e>t.maxE?(a.e=NaN,a.d=null):s.e<t.minE?(a.e=0,a.d=[0]):(a.e=s.e,a.d=s.d.slice()):(a.e=s.e,a.d=s.d?s.d.slice():s.d);return}if(l=typeof s,l==="number"){if(s===0){a.s=1/s<0?-1:1,a.e=0,a.d=[0];return}if(s<0?(s=-s,a.s=-1):a.s=1,s===~~s&&s<1e7){for(o=0,u=s;u>=10;u/=10)o++;v?o>t.maxE?(a.e=NaN,a.d=null):o<t.minE?(a.e=0,a.d=[0]):(a.e=o,a.d=[s]):(a.e=o,a.d=[s]);return}else if(s*0!==0){s||(a.s=NaN),a.e=NaN,a.d=null;return}return he(a,s.toString())}else if(l!=="string")throw Error(J+s);return(u=s.charCodeAt(0))===45?(s=s.slice(1),a.s=-1):(u===43&&(s=s.slice(1)),a.s=1),We.test(s)?he(a,s):Ge(a,s)}if(p(t,"Decimal"),t.prototype=d,t.ROUND_UP=0,t.ROUND_DOWN=1,t.ROUND_CEIL=2,t.ROUND_FLOOR=3,t.ROUND_HALF_UP=4,t.ROUND_HALF_DOWN=5,t.ROUND_HALF_EVEN=6,t.ROUND_HALF_CEIL=7,t.ROUND_HALF_FLOOR=8,t.EUCLID=9,t.config=t.set=li,t.clone=Te,t.isDecimal=Oe,t.abs=Qe,t.acos=ze,t.acosh=xe,t.add=ei,t.asin=ii,t.asinh=ri,t.atan=ni,t.atanh=ti,t.atan2=si,t.cbrt=oi,t.ceil=ui,t.clamp=ai,t.cos=ci,t.cosh=fi,t.div=hi,t.exp=di,t.floor=pi,t.hypot=mi,t.ln=gi,t.log=wi,t.log10=Ni,t.log2=vi,t.max=Ei,t.min=bi,t.mod=Si,t.mul=Pi,t.pow=Ii,t.random=ki,t.round=Ci,t.sign=Di,t.sin=Fi,t.sinh=Mi,t.sqrt=Oi,t.sub=Ai,t.sum=_i,t.tan=Ri,t.tanh=qi,t.trunc=Li,e===void 0&&(e={}),e&&e.defaults!==!0)for(n=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<n.length;)e.hasOwnProperty(r=n[i++])||(e[r]=this[r]);return t.config(e),t}p(Te,"clone");function hi(e,i){return new this(e).div(i)}p(hi,"div");function di(e){return new this(e).exp()}p(di,"exp");function pi(e){return m(e=new this(e),e.e+1,3)}p(pi,"floor");function mi(){var e,i,r=new this(0);for(v=!1,e=0;e<arguments.length;)if(i=new this(arguments[e++]),i.d)r.d&&(r=r.plus(i.times(i)));else{if(i.s)return v=!0,new this(1/0);r=i}return v=!0,r.sqrt()}p(mi,"hypot");function Oe(e){return e instanceof re||e&&e.toStringTag===Ye||!1}p(Oe,"isDecimalInstance");function gi(e){return new this(e).ln()}p(gi,"ln");function wi(e,i){return new this(e).log(i)}p(wi,"log");function vi(e){return new this(e).log(2)}p(vi,"log2");function Ni(e){return new this(e).log(10)}p(Ni,"log10");function Ei(){return Re(this,arguments,"lt")}p(Ei,"max");function bi(){return Re(this,arguments,"gt")}p(bi,"min");function Si(e,i){return new this(e).mod(i)}p(Si,"mod");function Pi(e,i){return new this(e).mul(i)}p(Pi,"mul");function Ii(e,i){return new this(e).pow(i)}p(Ii,"pow");function ki(e){var i,r,n,t,s=0,o=new this(1),u=[];if(e===void 0?e=this.precision:R(e,1,$),n=Math.ceil(e/w),this.crypto)if(crypto.getRandomValues)for(i=crypto.getRandomValues(new Uint32Array(n));s<n;)t=i[s],t>=429e7?i[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=t%1e7;else if(crypto.randomBytes){for(i=crypto.randomBytes(n*=4);s<n;)t=i[s]+(i[s+1]<<8)+(i[s+2]<<16)+((i[s+3]&127)<<24),t>=214e7?crypto.randomBytes(4).copy(i,s):(u.push(t%1e7),s+=4);s=n/4}else throw Error(ye);else for(;s<n;)u[s++]=Math.random()*1e7|0;for(n=u[--s],e%=w,n&&e&&(t=k(10,w-e),u[s]=(n/t|0)*t);u[s]===0;s--)u.pop();if(s<0)r=0,u=[0];else{for(r=-1;u[0]===0;r-=w)u.shift();for(n=1,t=u[0];t>=10;t/=10)n++;n<w&&(r-=w-n)}return o.e=r,o.d=u,o}p(ki,"random");function Ci(e){return m(e=new this(e),e.e+1,this.rounding)}p(Ci,"round");function Di(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}p(Di,"sign");function Fi(e){return new this(e).sin()}p(Fi,"sin");function Mi(e){return new this(e).sinh()}p(Mi,"sinh");function Oi(e){return new this(e).sqrt()}p(Oi,"sqrt");function Ai(e,i){return new this(e).sub(i)}p(Ai,"sub");function _i(){var e=0,i=arguments,r=new this(i[e]);for(v=!1;r.s&&++e<i.length;)r=r.plus(i[e]);return v=!0,m(r,this.precision,this.rounding)}p(_i,"sum");function Ri(e){return new this(e).tan()}p(Ri,"tan");function qi(e){return new this(e).tanh()}p(qi,"tanh");function Li(e){return m(e=new this(e),e.e+1,1)}p(Li,"trunc");d[Symbol.for("nodejs.util.inspect.custom")]=d.toString;d[Symbol.toStringTag]="Decimal";var re=d.constructor=Te(Ce);le=new re(le);ce=new re(ce);var ir=re;});var Zi=Ee(A=>{Object.defineProperty(A,"__esModule",{value:!0});var{Decimal:rr,objectEnumValues:G,makeStrictEnum:nr}=Ui(),C={};A.Prisma=C;C.prismaVersion={client:"4.8.0",engine:"d6e67a83f971b175a593ccc12e15c4a757f93ffe"};C.PrismaClientKnownRequestError=()=>{throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.PrismaClientUnknownRequestError=()=>{throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.PrismaClientRustPanicError=()=>{throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.PrismaClientInitializationError=()=>{throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.PrismaClientValidationError=()=>{throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.NotFoundError=()=>{throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.Decimal=rr;C.sql=()=>{throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.empty=()=>{throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.join=()=>{throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.raw=()=>{throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)};C.validator=()=>e=>e;C.DbNull=G.instances.DbNull;C.JsonNull=G.instances.JsonNull;C.AnyNull=G.instances.AnyNull;C.NullTypes={DbNull:G.classes.DbNull,JsonNull:G.classes.JsonNull,AnyNull:G.classes.AnyNull};A.Prisma.BasketScalarFieldEnum={id:"id",userId:"userId"};A.Prisma.FavoriteScalarFieldEnum={id:"id",userId:"userId"};A.Prisma.IngredientScalarFieldEnum={id:"id",name:"name"};A.Prisma.NumIngredientOnRecipeScalarFieldEnum={ingredientId:"ingredientId",recipeId:"recipeId",unit:"unit",value:"value"};A.Prisma.QueryMode={default:"default",insensitive:"insensitive"};A.Prisma.RecipeScalarFieldEnum={id:"id",authorId:"authorId",title:"title",createdAt:"createdAt",updatedAt:"updatedAt",difficulty:"difficulty",instructions:"instructions",likesNum:"likesNum",serving:"serving",viewrs:"viewrs"};A.Prisma.SortOrder={asc:"asc",desc:"desc"};A.Prisma.TransactionIsolationLevel=nr({ReadUncommitted:"ReadUncommitted",ReadCommitted:"ReadCommitted",RepeatableRead:"RepeatableRead",Serializable:"Serializable"});A.Prisma.UserScalarFieldEnum={id:"id",email:"email",name:"name",password:"password",hashedRt:"hashedRt"};A.Difficulty={DIFFICULT5:"DIFFICULT5",DIFFICULT4:"DIFFICULT4",MODERATE3:"MODERATE3",EASY2:"EASY2",EASY1:"EASY1",NOSCALE:"NOSCALE"};A.Prisma.ModelName={User:"User",Basket:"Basket",Recipe:"Recipe",Ingredient:"Ingredient",NumIngredientOnRecipe:"NumIngredientOnRecipe",Favorite:"Favorite"};var Ue=class{constructor(){throw new Error(`PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)}};A.PrismaClient=Ue;Object.assign(A,C)});var Vi=Ee((pr,Bi)=>{var tr=Zi();Bi.exports=tr});var K=ue(Vi()),Ze=ue(ji()),Y=ue(Be()),sr=e=>{switch(e){case K.Difficulty.DIFFICULT5:return 5;case K.Difficulty.DIFFICULT4:return 4;case K.Difficulty.MODERATE3:return 3;case K.Difficulty.EASY2:return 2;case K.Difficulty.EASY1:return 1;default:return 1}};function or({difficulty:e,isInput:i}){let[r,n]=(0,Ze.useState)(sr(e)),[t,s]=(0,Ze.useState)(0);return(0,Y.jsxs)(Y.Fragment,{children:[Array(5).fill("").map((o,u)=>(0,Y.jsx)("span",{className:`material-symbols-rounded leading-none text-primary ${i?"cursor-pointer":""}`,style:r>u?{fontVariationSettings:'"FILL" 1'}:void 0,onMouseEnter:()=>{i&&n(u+1)},onMouseLeave:()=>{i&&!t?n(1):i&&t&&n(t)},onClick:()=>{s(u+1)},children:"star"},u)),(0,Y.jsx)("span",{className:` ${i?"text-black":"text-gray-500"}`,children:r.toFixed(1)})]})}export{Vi as a,or as b};