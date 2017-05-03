(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=Array.isArray,p=Object.keys,h=i.bind,v=function(n){return n instanceof v?n:this instanceof v?void(this._wrapped=n):new v(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=v),exports._=v):n._=v,v.VERSION="1.6.0",v.each=v.forEach=function(n,t,e){if(null==n)return n;if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=v.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n},v.map=v.collect=function(n,t,r){var e=[];return null==n?e:(v.each(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var g="Reduce of empty array with no initial value";v.reduce=v.foldl=v.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v.each(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(g);return r},v.reduceRight=v.foldr=function(n,t,r,e){var u=arguments.length>2;null==n&&(n=[]);var i=n.length;if(i!==+i){var a=v.keys(n);i=a.length}if(v.each(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(g);return r},v.find=v.detect=function(n,t,r){var e;return v.some(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},v.filter=v.select=function(n,t,r){var e=[];return null==n?e:(v.each(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},v.reject=function(n,t,r){return v.filter(n,v.negate(t),r)},v.every=v.all=function(n,t,e){t||(t=v.identity);var u=!0;return null==n?u:(v.each(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)},v.some=v.any=function(n,t,e){t||(t=v.identity);var u=!1;return null==n?u:(v.each(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)},v.contains=v.include=function(n,t){return null==n?!1:n.length===+n.length?v.indexOf(n,t)>=0:v.some(n,function(n){return n===t})},v.invoke=function(n,t){var r=o.call(arguments,2),e=v.isFunction(t);return v.map(n,function(n){return(e?t:n[t]).apply(n,r)})},v.pluck=function(n,t){return v.map(n,v.property(t))},v.where=function(n,t){return v.filter(n,v.matches(t))},v.findWhere=function(n,t){return v.find(n,v.matches(t))},v.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(!t&&v.isArray(n))for(var o=0,c=n.length;c>o;o++)e=n[o],e>i&&(i=e);else v.each(n,function(n,e,o){u=t?t.call(r,n,e,o):n,u>a&&(i=n,a=u)});return i},v.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(!t&&v.isArray(n))for(var o=0,c=n.length;c>o;o++)e=n[o],i>e&&(i=e);else v.each(n,function(n,e,o){u=t?t.call(r,n,e,o):n,a>u&&(i=n,a=u)});return i},v.shuffle=function(n){var t,r=0,e=[];return v.each(n,function(n){t=v.random(r++),e[r-1]=e[t],e[t]=n}),e},v.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=v.values(n)),n[v.random(n.length-1)]):v.shuffle(n).slice(0,Math.max(0,t))};var m=function(n,t){return null==n?v.identity:v.isFunction(n)?t?function(){return n.apply(t,arguments)}:n:v.property(n)};v.sortBy=function(n,t,r){return t=m(t,r),v.pluck(v.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index-t.index}),"value")};var y=function(n){return function(t,r,e){var u={};return r=m(r,e),v.each(t,function(e,i){var a=r(e,i,t);n(u,a,e)}),u}};v.groupBy=y(function(n,t,r){v.has(n,t)?n[t].push(r):n[t]=[r]}),v.indexBy=y(function(n,t,r){n[t]=r}),v.countBy=y(function(n,t){v.has(n,t)?n[t]++:n[t]=1}),v.sortedIndex=function(n,t,r,e){r=m(r,e);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},v.toArray=function(n){return n?v.isArray(n)?o.call(n):n.length===+n.length?v.map(n,v.identity):v.values(n):[]},v.size=function(n){return null==n?0:n.length===+n.length?n.length:v.keys(n).length},v.first=v.head=v.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},v.initial=function(n,t,r){return o.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},v.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},v.rest=v.tail=v.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},v.compact=function(n){return v.filter(n,v.identity)};var d=function(n,t,r,e){if(t&&v.every(n,v.isArray))return c.apply(e,n);for(var u=0,i=n.length;i>u;u++){var o=n[u];v.isArray(o)||v.isArguments(o)?t?a.apply(e,o):d(o,t,r,e):r||e.push(o)}return e};v.flatten=function(n,t){return d(n,t,!1,[])},v.without=function(n){return v.difference(n,o.call(arguments,1))},v.partition=function(n,t,r){t=m(t,r);var e=[],u=[];return v.each(n,function(n){(t(n)?e:u).push(n)}),[e,u]},v.uniq=v.unique=function(n,t,r,e){if(null==n)return[];v.isFunction(t)&&(e=r,r=t,t=!1);for(var u=[],i=[],a=0,o=n.length;o>a;a++){var c=n[a];r&&(c=r.call(e,c,a,n)),(t?a&&i===c:v.contains(i,c))||(t?i=c:i.push(c),u.push(n[a]))}return u},v.union=function(){return v.uniq(d(arguments,!0,!0,[]))},v.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!v.contains(t,i)){for(var a=1;r>a&&v.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},v.difference=function(n){var t=d(o.call(arguments,1),!0,!0,[]);return v.filter(n,function(n){return!v.contains(t,n)})},v.zip=function(){for(var n=v.max(v.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=v.pluck(arguments,""+r);return t},v.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},v.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=v.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},v.lastIndexOf=function(n,t,r){if(null==n)return-1;for(var e=null==r?n.length:r;e--;)if(n[e]===t)return e;return-1},v.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var b=function(){};v.bind=function(n,t){var r,e;if(h&&n.bind===h)return h.apply(n,o.call(arguments,1));if(!v.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));b.prototype=n.prototype;var u=new b;b.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},v.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===v&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},v.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return v.each(t,function(t){n[t]=v.bind(n[t],n)}),n},v.memoize=function(n,t){var r={};return t||(t=v.identity),function(){var e=t.apply(this,arguments);return v.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},v.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},v.defer=function(n){return v.delay.apply(v,[n,1].concat(o.call(arguments,1)))},v.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:v.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=v.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},v.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=v.now()-a;t>l&&l>0?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=v.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},v.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},v.wrap=function(n,t){return v.partial(t,n)},v.negate=function(n){return function(){return!n.apply(this,arguments)}},v.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},v.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},v.keys=function(n){if(!v.isObject(n))return[];if(p)return p(n);var t=[];for(var r in n)v.has(n,r)&&t.push(r);return t},v.values=function(n){for(var t=v.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},v.pairs=function(n){for(var t=v.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},v.invert=function(n){for(var t={},r=v.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},v.functions=v.methods=function(n){var t=[];for(var r in n)v.isFunction(n[r])&&t.push(r);return t.sort()},v.extend=function(n){return v.each(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},v.pick=function(n,t,r){var e={};if(v.isFunction(t))for(var u in n){var i=n[u];t.call(r,i,u,n)&&(e[u]=i)}else for(var a=c.apply([],o.call(arguments,1)),l=0,f=a.length;f>l;l++){var u=a[l];u in n&&(e[u]=n[u])}return e},v.omit=function(n,t,r){var e;return v.isFunction(t)?t=v.negate(t):(e=v.map(c.apply([],o.call(arguments,1)),String),t=function(n,t){return!v.contains(e,t)}),v.pick(n,t,r)},v.defaults=function(n){return v.each(o.call(arguments,1),function(t){if(t)for(var r in t)void 0===n[r]&&(n[r]=t[r])}),n},v.clone=function(n){return v.isObject(n)?v.isArray(n)?n.slice():v.extend({},n):n},v.tap=function(n,t){return t(n),n};var w=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof v&&(n=n._wrapped),t instanceof v&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(v.isFunction(a)&&a instanceof a&&v.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=w(n[c],t[c],r,e)););}else{for(var s in n)if(v.has(n,s)&&(c++,!(f=v.has(t,s)&&w(n[s],t[s],r,e))))break;if(f){for(s in t)if(v.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};v.isEqual=function(n,t){return w(n,t,[],[])},v.isEmpty=function(n){if(null==n)return!0;if(v.isArray(n)||v.isString(n)||v.isArguments(n))return 0===n.length;for(var t in n)if(v.has(n,t))return!1;return!0},v.isElement=function(n){return!(!n||1!==n.nodeType)},v.isArray=s||function(n){return"[object Array]"==l.call(n)},v.isObject=function(n){return n===Object(n)},v.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){v["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),v.isArguments(arguments)||(v.isArguments=function(n){return!(!n||!v.has(n,"callee"))}),"function"!=typeof/./&&(v.isFunction=function(n){return"function"==typeof n}),v.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},v.isNaN=function(n){return v.isNumber(n)&&n!=+n},v.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},v.isNull=function(n){return null===n},v.isUndefined=function(n){return void 0===n},v.has=function(n,t){return f.call(n,t)},v.noConflict=function(){return n._=t,this},v.identity=function(n){return n},v.constant=function(n){return function(){return n}},v.noop=function(){},v.property=function(n){return function(t){return t[n]}},v.matches=function(n){return function(t){if(null==t)return v.isEmpty(n);if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},v.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},v.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},v.now=Date.now||function(){return(new Date).getTime()};var _={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};_.unescape=v.invert(_.escape);var x={escape:new RegExp("["+v.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+v.keys(_.unescape).join("|")+")","g")};v.each(["escape","unescape"],function(n){v[n]=function(t){return null==t?"":(""+t).replace(x[n],function(t){return _[n][t]})}}),v.result=function(n,t){if(null==n)return void 0;var r=n[t];return v.isFunction(r)?n[t]():r},v.mixin=function(n){v.each(v.functions(n),function(t){var r=v[t]=n[t];v.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),O.call(this,r.apply(v,n))}})};var j=0;v.uniqueId=function(n){var t=++j+"";return n?n+t:t},v.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},F=/\\|'|\r|\n|\u2028|\u2029/g,E=function(n){return"\\"+k[n]};v.template=function(n,t,r){r=v.defaults({},r,v.templateSettings);var e=new RegExp([(r.escape||A).source,(r.interpolate||A).source,(r.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(F,E),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(r.variable||"obj","_",i)}catch(o){throw o.source=i,o}if(t)return a(t,v);var c=function(n){return a.call(this,n,v)},l=r.variable||"obj";return c.source="function("+l+"){\n"+i+"}",c},v.chain=function(n){return v(n).chain()};var O=function(n){return this._chain?v(n).chain():n};v.mixin(v),v.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];v.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],O.call(this,r)}}),v.each(["concat","join","slice"],function(n){var t=e[n];v.prototype[n]=function(){return O.call(this,t.apply(this._wrapped,arguments))}}),v.extend(v.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return v})}).call(this);