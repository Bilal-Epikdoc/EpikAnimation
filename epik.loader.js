(()=>{"use strict";var e={174:function(e,t,o){var a=o(303);class i extends HTMLElement{connectedCallback(){let e=this.shadowRoot.querySelector(".dot1"),t=this.shadowRoot.querySelector(".dot2"),o=this.shadowRoot.querySelector(".dot3"),i=this.shadowRoot.querySelector(".dot4"),r=this.shadowRoot.querySelector("#loader"),d=this.shadowRoot.querySelector(".bg-circle");a.p8.config({force3D:!0,autoSleep:.1}),a.p8.set([e,t,o,i],{opacity:0,scale:0});let s=a.p8.timeline();s.to(r,{rotation:"-=300",duration:.5,ease:"linear",transformOrigin:"50% 50%"}).to(r,{rotation:"-=60",duration:.5,ease:"power3.out"}).to(r,{rotation:"-=60",duration:.5,ease:"power3.in"}).to(r,{rotation:"-=300",duration:.5,ease:"linear"});let n=a.p8.timeline();n.to(e,{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"},0).to(t,{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"},.3).to(o,{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"},.5).to(i,{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"},.7);let l=a.p8.timeline();l.to(e,{y:-80,duration:1,delay:1,ease:"elastic.in(1, 0.5)"}).to(e,{height:50,duration:1,borderRadius:"20px",ease:"elastic.inOut(1, 0.5)"},"-=0.9").to(e,{y:15,height:30,duration:1,ease:"elastic.out(1, 0.5)",backgroundColor:"white"});let c=a.p8.timeline();c.to(t,{x:80,duration:1,delay:1,ease:"elastic.in(1, 0.5)"}).to(t,{width:50,duration:1,borderRadius:"20px",ease:"elastic.inOut(1, 0.5)"},"-=0.9").to(t,{x:-13,width:30,duration:1,ease:"elastic.out(1, 0.5)",backgroundColor:"white"});let u=a.p8.timeline();u.to(o,{y:80,duration:1,delay:1,ease:"elastic.in(1, 0.5)"}).to(o,{height:35,duration:1,borderRadius:"20px",ease:"elastic.inOut(1, 0.5)"},"-=0.9").to(o,{y:-15,height:30,duration:1,ease:"elastic.out(1, 0.5)",backgroundColor:"white"});let p=a.p8.timeline();p.to(i,{x:-80,duration:1,delay:1,ease:"elastic.in(1, 0.5)"}).to(i,{width:35,duration:1,borderRadius:"20px",ease:"elastic.inOut(1, 0.5)"},"-=0.9").to(i,{x:12,width:30,duration:1,ease:"elastic.out(1, 0.5)",backgroundColor:"white"});let h=a.p8.timeline();h.to(d,{scale:".5",delay:1.8,duration:1,rotation:"-=360",ease:"elastic.out(1, 0.5)"}).add(()=>{let e=a.p8.getProperty(r,"rotation"),t=Math.ceil(-((e=Number(e.toFixed(2)))/360));a.p8.to(r,{rotation:-360*t,duration:2,ease:"power3.out"})});let b=a.p8.timeline();b.to(r,{scale:"0",delay:4}),a.p8.timeline({repeat:-1,repeatDelay:1,onRepeat:()=>{a.p8.set(r,{rotation:0}),s.seek(0),n.seek(0),l.seek(0),c.seek(0),u.seek(0),p.seek(0),h.seek(0),b.seek(0)}}).add(s,0).add(n,0).add(l,0).add(c,0).add(u,0).add(p,0).add(h,0).add(b,0)}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
      :host {
        --primary-color: #5d20d3;
      }
      
      #loader {
        width: 100px;
        height: 100px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      .dot {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: var(--primary-color);
        border-radius: 50%;
        /* transform: scale(0); Start tiny */
      }
      
      .bg-circle {
         position: absolute;
          top: -44px;
          right: -50px;
          width: 200px; 
          height: 186px; 
          background-color: var(--primary-color);
          border-radius: 50%;
          transform: scale(0); 
          transform-origin: center;
          will-change: transform;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          image-rendering: auto;
          z-index: -1;
      }
      
      .dot1 {
        top: 0;
        left: 40px;
      }
      .dot2 {
        top: 40px;
        right: 0;
      }
      .dot3 {
        bottom: 0;
        left: 40px;
      }
      .dot4 {
        top: 40px;
        left: 0;
      }
      
      #loader,
      .dot, .bg-circle {
        will-change: transform, opacity;
        backface-visibility: hidden;
      }
      </style>

      <div id="loader">
        <div class="bg-circle"></div>
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
        <div class="dot dot4"></div>
        <div class="bg-circle"></div>
      </div>
    `}}customElements.define("epik-loader",i)}},t={};function o(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,o),r.exports}o.m=e,o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=[];o.O=(t,a,i,r)=>{if(a){r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r];return}for(var s=1/0,d=0;d<e.length;d++){for(var[a,i,r]=e[d],n=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every(e=>o.O[e](a[l]))?a.splice(l--,1):(n=!1,r<s&&(s=r));if(n){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}})(),(()=>{var e={980:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[d,s,n]=a,l=0;if(d.some(t=>0!==e[t])){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(n)var c=n(o)}for(t&&t(a);l<d.length;l++)r=d[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},a=self.webpackChunkepikdoc_animation=self.webpackChunkepikdoc_animation||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,["243"],function(){return o(174)});a=o.O(a)})();