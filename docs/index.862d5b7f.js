function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire5ce5;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire5ce5=i),i.register("g28y4",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("g28y4").register(JSON.parse('{"1bd3D":"index.862d5b7f.js","ftdjj":"Kuchipatchi.2f328f10.png","6BHSi":"KuchipatchiAngry.f2bafafc.jpg","kYY2j":"rip.a6340a32.png"}'));let a=new class{health;happines;constructor(e){this.name=e,this.health=setInterval(this.getHunger.bind(this),2e3),this.happines=setInterval(this.getHappiness.bind(this),2e3)}feed(){return this.health--,this.health}play(){return this.happines++,this.happines}setHealth(e){this.health=e}setHappines(e){this.happines=e}getHunger(){this.health++,this.health>9&&(clearInterval(this.firstTimer),clearInterval(this.secondTimer))}getHappiness(){this.happines--,this.happines<1&&(clearInterval(this.firstTimer),clearInterval(this.secondTimer))}getStatus(){return this.health>5||this.happines<5?"ANGRY":this.health<5||this.happines>5?"HAPPY":void 0}}(prompt("enter name"));a.setHappines(5),a.setHealth(5);const s=document.createElement("img");document.body.append(s);var h;h=new URL(i("g28y4").resolve("ftdjj"),import.meta.url).toString();const l=new URL(h);var o;o=new URL(i("g28y4").resolve("6BHSi"),import.meta.url).toString();const p=new URL(o);var c;c=new URL(i("g28y4").resolve("kYY2j"),import.meta.url).toString();const u=new URL(c);function d(){document.querySelector(".name").innerHTML="name : "+a.name,document.querySelector(".health").innerHTML="health : "+a.health,document.querySelector(".happines").innerHTML="happines : "+a.happines}function f(){let e=a.getStatus();"ANGRY"==e&&(s.src=p.href),"HAPPY"==e&&(s.src=l.href),0!=a.happines&&10!=a.health||(s.src=u.href,clearInterval(intervalID),alert("Tama dead"),confirm&&location.reload())}s.src=l.href,confirm&&(intervalID=setInterval(f,2200),intervalID2=setInterval(d,1e3),document.querySelector(".feed").addEventListener("click",(e=>{e.preventDefault(),a.health<2||a.health--,document.querySelector(".health").innerHTML="health : "+a.health})),document.querySelector(".play").addEventListener("click",(e=>{e.preventDefault(),a.happines>9||a.happines++,document.querySelector(".happines").innerHTML="happines : "+a.happines})));
//# sourceMappingURL=index.862d5b7f.js.map
