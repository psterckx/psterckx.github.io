(function(e){function t(t){for(var n,i,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/thermostat/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("8c4f"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-4 mt-5",attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-center fs-1",class:{"fw-bold":e.delta}},[e._v(" "+e._s(e.isAuthTokenValid?e.delta?e.userDesiredTemperature:e.state?e.state.reported.thermostat_temperature:"??":"??")+" ")]),r("div",{staticClass:"col-12 text-center mb-2"},[e._v("Set Temperature")]),r("div",{staticClass:"col-12 text-center fs-3"},[e._v(" "+e._s(e.isAuthTokenValid&&e.state&&e.state.reported.measured_temperature?Math.round(e.state.reported.measured_temperature):"??")+" ")]),r("div",{staticClass:"col-12 text-center mb-5"},[e._v("Measured Temperature")]),r("div",{staticClass:"col-5 offset-1 text-center"},[r("button",{staticClass:"btn btn-secondary w-100",attrs:{type:"button",disabled:e.isRequestInFlight||e.inErrorState||!e.isDeviceOnline},on:{click:function(t){return e.updateUserDesiredTemperature(-1)}}},[e._v(" decrease ")])]),r("div",{staticClass:"col-5 text-center mb-2"},[r("button",{staticClass:"btn btn-secondary w-100",attrs:{type:"button",disabled:e.isRequestInFlight||e.inErrorState||!e.isDeviceOnline},on:{click:function(t){return e.updateUserDesiredTemperature(1)}}},[e._v(" increase ")])]),r("div",{staticClass:"col-10 offset-1 text-center mb-2"},[r("button",{staticClass:"btn w-100",class:{"btn-secondary":!e.delta,"btn-success":e.delta},attrs:{type:"button",disabled:!(e.delta&&!e.isRequestInFlight)||e.inErrorState||!e.isDeviceOnline},on:{click:function(t){return e.flight(e.updateSetTemperature,[e.userDesiredTemperature])}}},[e._v(" update ")])]),r("div",{staticClass:"col-10 offset-1 text-center mb-5"},[r("button",{staticClass:"btn btn-primary w-100",attrs:{type:"button",disabled:e.isRequestInFlight||!e.isAuthTokenValid},on:{click:function(t){return e.flight(e.getDeviceShadowState)}}},[e._v(" refresh ")])]),r("div",{staticClass:"col-12 text-center d-flex justify-content-center mb-5"},[r("span",{staticClass:"dot mx-2",class:{"device-online":e.isDeviceOnline,"device-state-unknown":!e.isAuthTokenValid}}),r("span",[e._v(" "+e._s(e.isAuthTokenValid?e.isDeviceOnline?"Device online":"Device offline":"Device state unknown")+" ")])]),r("div",{staticClass:"col-12 text-center d-flex justify-content-center"},[r("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e._v("token")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.authToken,expression:"authToken"}],staticClass:"form-control",class:[e.isAuthTokenValid?"is-valid":e.authToken.length>0?"is-invalid":""],attrs:{type:"text",placeholder:"",disabled:e.isAuthTokenValid},domProps:{value:e.authToken},on:{input:function(t){t.target.composing||(e.authToken=t.target.value)}}})])])])])},i=[],o=r("1da1"),u=(r("d3b7"),r("96cf"),r("bc3a")),c=r.n(u),l={name:"App",data:function(){return{setTemperature:null,userDesiredTemperature:null,measuredTemperature:null,state:null,metadata:null,isRequestInFlight:!1,inErrorState:!1,authToken:"",isAuthTokenValid:!1}},computed:{delta:function(){return!!this.state&&!(this.state.desired.thermostat_temperature===this.userDesiredTemperature)},timeout:function(){return 4e3+1200*Math.abs(this.state.reported.thermostat_temperature-this.userDesiredTemperature)},isDeviceOnline:function(){if(this.state){var e=1e3*this.metadata.reported.thermostat_temperature.timestamp;if(Date.now()-e<36e5)return!0}return!1}},watch:{authToken:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(36!==e.length){r.next=12;break}return r.prev=1,r.next=4,t.flight(t.retry,[t.getDeviceShadowState,1]);case 4:t.userDesiredTemperature=t.state.desired.thermostat_temperature,t.isAuthTokenValid=!0,r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](1),t.isAuthTokenValid=!1,console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})))()}},methods:{flight:function(e,t){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("in flight"),r.isRequestInFlight=!0,n.next=4,e.apply(r,t);case 4:return a=n.sent,console.log("landed"),r.isRequestInFlight=!1,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()},updateUserDesiredTemperature:function(e){this.userDesiredTemperature+=e,console.log(this.$route)},updateSetTemperature:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={method:"post",url:"https://vh3rmjhs10.execute-api.us-east-1.amazonaws.com/test/thermostat/state",headers:{authorization:t.authToken,"Content-Type":"application/json"},data:{state:{desired:{thermostat_temperature:e}}}},r.prev=1,r.next=4,c()(n);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](1),console.log(r.t0);case 9:return r.next=11,t.wait(t.timeout);case 11:return r.prev=11,r.next=14,t.retry(t.getDeviceShadowState,1);case 14:r.next=19;break;case 16:r.prev=16,r.t1=r["catch"](11),console.log(r.t1);case 19:case"end":return r.stop()}}),r,null,[[1,6],[11,16]])})))()},getDeviceShadowState:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("getDeviceShadowState"),r={method:"get",url:"https://vh3rmjhs10.execute-api.us-east-1.amazonaws.com/test/thermostat/state",headers:{authorization:e.authToken,"Content-Type":"application/json"}},t.prev=2,t.next=5,c()(r);case 5:n=t.sent,t.next=11;break;case 8:throw t.prev=8,t.t0=t["catch"](2),new Error("API call failed");case 11:if(e.state=n.data.state,e.metadata=n.data.metadata,!e.state.delta){t.next=16;break}throw e.inErrorState=!0,new Error("State has delta");case 16:return e.inErrorState=!1,console.log("refresh compelete"),t.abrupt("return");case 19:case"end":return t.stop()}}),t,null,[[2,8]])})))()},retry:function(e,t){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=0;case 1:if(!(a<t)){n.next=17;break}return console.log("retry"),n.prev=3,n.next=6,e.call();case 6:return n.abrupt("return",n.sent);case 9:return n.prev=9,n.t0=n["catch"](3),console.log(n.t0),n.next=14,r.wait(r.timeout);case 14:a++,n.next=1;break;case 17:throw r.inErrorState=!0,new Error("Retry maxed out - something is wrong");case 19:case"end":return n.stop()}}),n,null,[[3,9]])})))()},wait:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},beforeMount:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setInterval((function(){if(e.isAuthTokenValid&&!e.isRequestInFlight)try{e.getDeviceShadowState()}catch(t){console.log(t)}}),6e4);case 1:case"end":return t.stop()}}),t)})))()},mounted:function(){this.$route.query.t&&(this.authToken=this.$route.query.t)}},d=l,p=(r("034f"),r("2877")),h=Object(p["a"])(d,s,i,!1,null,null,null),f=h.exports;r("ab8b");n["a"].use(a["a"]),n["a"].config.productionTip=!1;var m=new a["a"]({mode:"history"});new n["a"]({router:m,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.da2425de.js.map