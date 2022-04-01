(function(){var t={7623:function(t){t.exports={celciusToFahrenheit(t){return 1.8*t+32},fahrenheitToCelcius(t){return 5/9*(t-32)}}},2699:function(t){const e={getDayName:t=>{const e=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];return e[new Date(t).getDay()]},formatDate:t=>{let e=t.split("-"),n=parseInt(e[1],10)-1,r=parseInt(e[2],10);const a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${a[n]} ${r}`}};t.exports=e},6194:function(t,e,n){n(1703),t.exports={getDataByCityName(t){let e="b35827e52f2e77d232dfbb7634a24a99";const n=40,r=new Promise(((r,a)=>{const i=new XMLHttpRequest;i.onload=()=>{r(JSON.parse(i.responseText).list)},i.onerror=()=>{console.log("XHR ON ERROR"),a("error")};const o=["http://api.openweathermap.org/data/2.5/forecast?",`q=${t}`,"&units=metric",`&cnt=${n}`,`&appid=${e}`].join("");i.open("GET",o,!0),i.onloadend=()=>{if(404===i.status)throw new Error("404 - ",o)},i.send()}));return r}}},9991:function(t,e,n){"use strict";var r=n(9242),a=n(1373),i=n(3396),o=n(7139);const u={class:"max-w-3xl mx-auto"},s={class:"text-3xl font-bold underline text-center"},c={class:"mb-4"},l=["placeholder"],p={class:"container"},d={class:"mx-auto grid gap-4 md:grid-cols-5 sm:grid-cols-2 grid-cols-1 w-1/2 md:w-full"};function h(t,e,n,a,h,m){const f=(0,i.up)("temperature-unit"),g=(0,i.up)("WeatherCard");return(0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("h1",s,(0,o.zw)(m.formatCityName(h.cityHeader))+" Forecast ",1),(0,i.Wm)(f,{ref:"test"},null,512),(0,i._)("form",{onSubmit:e[2]||(e[2]=(0,r.iM)(((...t)=>m.onSubmit&&m.onSubmit(...t)),["prevent"])),class:"bg-white rounded px-8 pt-6 pb-8 mb-4"},[(0,i._)("div",c,[(0,i.wy)((0,i._)("input",{ref:"city",class:(0,o.C_)(["shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",{error:!h.isValid}]),id:"city",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>h.currCity=t),placeholder:h.defaultCity},null,10,l),[[r.nr,h.currCity]]),(0,i._)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:e[1]||(e[1]=(...t)=>m.updateData&&m.updateData(...t))}," Go ")])],32),(0,i._)("div",p,[(0,i._)("ul",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.weatherData,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t},[(0,i.Wm)(g,{tempData:t,unit:this.$refs.test.getUnit()},null,8,["tempData","unit"])])))),128))])])])}const m={class:"weather-card rounded-lg text-center border-gray-300 mx-auto"},f={class:"day"},g=["src"];function w(t,e,n,r,a,u){return(0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("h1",f,(0,o.zw)(u.getDayName(n.tempData.dt_txt))+" "+(0,o.zw)(u.formatDate(n.tempData.dt_txt)),1),(0,i._)("h1",null,(0,o.zw)(n.tempData.weather[0].main),1),(0,i._)("img",{src:this.getIcon(n.tempData.weather[0].icon),class:"mx-auto"},null,8,g),(0,i._)("div",null,(0,o.zw)(this.temp)+"°"+(0,o.zw)(this.tempUnit),1)])}var y=n(2699),v=n(7623),b={name:"WeatherCard",created(){this.temp=this.getTemp(),this.emitter.on("change-temp",(t=>{this.tempUnit=t.data,this.temp=this.getTemp()}))},data:function(){return{tempUnit:this.unit,temp:0}},methods:{getIcon:t=>`http://openweathermap.org/img/wn/${t}@2x.png`,getTemp(){let t=this.tempData.main.temp;return"F"===this.tempUnit&&(t=(0,v.celciusToFahrenheit)(t)),Math.round(t)},formatDate:y.formatDate,getDayName:y.getDayName},props:{tempData:Object,unit:String}},D=n(89);const C=(0,D.Z)(b,[["render",w],["__scopeId","data-v-81da2e0a"]]);var x=C,_=n(6194),U=n.n(_);const T=(0,i.Uk)(" unit: "),O=(0,i.Uk)(" | ");function N(t,e,n,r,a,u){return(0,i.wg)(),(0,i.iD)("div",{class:"unit",onClick:e[0]||(e[0]=t=>u.changeTempUnit())},[T,(0,i._)("span",{class:(0,o.C_)({selected:"C"===a.currUnit})},"°C",2),O,(0,i._)("span",{class:(0,o.C_)({selected:"F"===a.currUnit})},"°F",2)])}var k={name:"TemperatureUnit",methods:{getUnit(){return this.currUnit},changeTempUnit(){this.currUnit="C"===this.currUnit?"F":"C",this.emitter.emit("change-temp",{data:this.currUnit})}},data(){return{currUnit:"C"}}};const F=(0,D.Z)(k,[["render",N],["__scopeId","data-v-4d2aa22c"]]);var S=F;const $="Toronto";var j={name:"App",components:{WeatherCard:x,TemperatureUnit:S},mounted(){this.updateData()},methods:{formatCityName(t){return t[0].toUpperCase()+t.substring(1)},onSubmit(){this.updateData()},updateData(){U().getDataByCityName(this.$refs.city.value).then((t=>{this.weatherData=t.filter(((t,e)=>e%8===0)),this.currCity=this.cityHeader=this.$refs.city.value,this.isValid=!0})).catch((()=>{this.isValid=!1}))}},data(){return{unit:"C",defaultCity:$,currCity:$,cityHeader:$,isValid:!0,weatherData:[]}}};const M=(0,D.Z)(j,[["render",h]]);var z=M;const H=(0,a.Z)(),I=(0,r.ri)(z);I.config.globalProperties.emitter=H,I.mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var o=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],i=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,i<o&&(o=i));if(u){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],u=r[1],s=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var l=s(n)}for(e&&e(r);c<o.length;c++)i=o[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkforecast"]=self["webpackChunkforecast"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9991)}));r=n.O(r)})();
//# sourceMappingURL=app.69e6ffd8.js.map