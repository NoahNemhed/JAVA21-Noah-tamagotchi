function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire5ce5;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire5ce5=i),i.register("g28y4",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("g28y4").register(JSON.parse('{"1bd3D":"index.96aac079.js","ftdjj":"Kuchipatchi.2f328f10.png","6BHSi":"KuchipatchiAngry.f2bafafc.jpg","kYY2j":"rip.a6340a32.png"}'));let a=0,s=new class{health;happines;constructor(e){this.name=e,this.health=setInterval(this.getHunger.bind(this),2e3),this.happines=setInterval(this.getHappiness.bind(this),2e3)}feed(){return this.health--,this.health}play(){return this.happines++,this.happines}setHealth(e){this.health=e}setHappines(e){this.happines=e}getHunger(){this.health++,this.health>9&&(clearInterval(this.firstTimer),clearInterval(this.secondTimer))}getHappiness(){this.happines--,this.happines<1&&(clearInterval(this.firstTimer),clearInterval(this.secondTimer))}getStatus(){return this.health>5||this.happines<5?"ANGRY":this.health<5||this.happines>5?"HAPPY":void 0}}(prompt("enter name"));s.setHappines(5),s.setHealth(5);const h=document.createElement("img");document.body.append(h);var l;l=new URL(i("g28y4").resolve("ftdjj"),import.meta.url).toString();const o=new URL(l);var p;p=new URL(i("g28y4").resolve("6BHSi"),import.meta.url).toString();const c=new URL(p);var u;u=new URL(i("g28y4").resolve("kYY2j"),import.meta.url).toString();const d=new URL(u);function f(){document.querySelector(".name").innerHTML="name : "+s.name,document.querySelector(".health").innerHTML="health : "+s.health,document.querySelector(".happines").innerHTML="happines : "+s.happines}function g(){let e=s.getStatus();"ANGRY"==e&&(h.src=c.href),"HAPPY"==e&&(h.src=o.href),0!=s.happines&&10!=s.health||(h.src=d.href,clearInterval(a),alert("Tama dead"),confirm&&location.reload())}h.src=o.href,confirm&&(a=setInterval(g,2200),intervalID2=setInterval(f,1e3),document.querySelector(".feed").addEventListener("click",(e=>{e.preventDefault(),s.health<2||s.health--,document.querySelector(".health").innerHTML="health : "+s.health})),document.querySelector(".play").addEventListener("click",(e=>{e.preventDefault(),s.happines>9||s.happines++,document.querySelector(".happines").innerHTML="happines : "+s.happines})));
//# sourceMappingURL=index.96aac079.js.map