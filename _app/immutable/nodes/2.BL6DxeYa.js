import{r as _e,h as Ne,s as ee,n as fe,f as W,o as Ge,y as Fe}from"../chunks/scheduler.tRRrcYUh.js";import{t as B,S as ce,i as de,e as I,s as D,c as x,d as k,g as d,h as $,o as n,j as M,k as c,q as ve,n as ge,a as U,y as Re,b as O,f as N,z as he,A as oe,l as Q,B as Be,C as Je,D as pe,E as R,p as Oe,F as V,G as H,u as se,v as re,w as le,x as ae}from"../chunks/index.BWa62ItK.js";import{b as ue}from"../chunks/paths.BHjNDpmP.js";function Z(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Ue(a,e){a.d(1),e.delete(a.key)}function We(a,e,t,i,s,r,f,p,l,v,_,g){let b=a.length,u=r.length,h=b;const q={};for(;h--;)q[a[h].key]=h;const w=[],o=new Map,m=new Map,y=[];for(h=u;h--;){const C=g(s,r,h),T=t(C);let E=f.get(T);E?y.push(()=>E.p(C,e)):(E=v(T,C),E.c()),o.set(T,w[h]=E),T in q&&m.set(T,Math.abs(h-q[T]))}const L=new Set,A=new Set;function S(C){B(C,1),C.m(p,_),f.set(C.key,C),_=C.first,u--}for(;b&&u;){const C=w[u-1],T=a[b-1],E=C.key,j=T.key;C===T?(_=C.first,b--,u--):o.has(j)?!f.has(E)||L.has(E)?S(C):A.has(j)?b--:m.get(E)>m.get(j)?(A.add(E),S(C)):(L.add(j),b--):(l(T,f),b--)}for(;b--;){const C=a[b];o.has(C.key)||l(C,f)}for(;u;)S(w[u-1]);return _e(y),w}function z(a,{delay:e=0,duration:t=400,easing:i=Ne}={}){const s=+getComputedStyle(a).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}const Ke={first_name:"John",middle_name:"Macklin",last_name:"Pridmore",phone_number:"847-471-4073",contact:[{description:"Email",link:"mailto:johnpridmore.lit@gmail.com",img_ref:"../assets/GmailLogo.webp"},{description:"LinkedIn",link:"https://LinkedIn.com/in/JPrid",img_ref:"../assets/LI-In-Bug.webp"},{description:"Github",link:"https://www.github.com/JPrid",img_ref:"../assets/GitHub-Mark-120px-plus.webp"}]},Qe=[{company:"Galileo Insights LLC",title:"Software Engineering Consultant",start:"October 2021",end:"now",img_reference:"../../assets/logo-small-transparent.png",url:"https://galileoinsights.space",summary:"",tags:["C#","Typescript","Angular","Twilio",".NETCore","GCP"],experience_content:["Added a new docker image to include unit testing in the client company's Azure Devops pipeline. This would serve as Proof Of Concept for adding testing to the build pipeline of other projects.","Implemented screensharing in client's telemedicine platform via Twilio","Implemented virtual backgrounds in client's telemedicine platform via Twilio and settings page to allow end users to select virtual backgrounds","Re-organized the video layout used by client's telemedicine platform","Developed a live network quality monitor for phone and video calls for client's telemedicine platform","Updated telemedicine application to display participant information for client's telemedicine platform","Implemented a multi-step scheduling form to allow patients to schedule appointments 24 hours in advance for client's telemedicine platform","Implemented email sending service for aforementioned scheduling service for client's telemedicine platform","Defined a View to collate information regarding interpreters for administration for client's telemedicine platform","Implemented password reset API for mobile client apps to integrate with each other for client's telemedicine platform","Consulted on SSO architecting to move client apps away from Wordpress Identity Integration for client's telemedicine platform"]},{company:"Relativity",title:"Advanced Software Engineer",start:"March 2020",end:"October 2021",img_reference:"../../assets/relativity-logo-white.webp",url:"https://www.relativity.com/",summary:"",tags:["C#","C++/CLI","MS-SQL","Powershell","Jenkins","Python","Azure",".NET","Groovy"],experience_content:["Implemented Tenant-wide resource locking for Load jobs.","Implemented Locale retrieval and configuration on Azure VM on tenant assignment.","Integrated Azure Event Hub into multi-tenant worker code to produce events on job completion.","Decoupling custom metadata binding APIs from worker logic and making them tenant-agnostic.","Moved infrastructure components into shared libraries and refactoring to use Azure Key Vault for secret management."]},{company:"Relativity",title:"Software Engineer",start:"August 2018",end:"March 2020",img_reference:"../../assets/relativity-logo-white.webp",url:"https://www.relativity.com/",summary:"",tags:[],experience_content:["Implemented the ability to remove documents from review, and re-calculate de-duplication for affected data sources.","Designed, delivered, and Implemented a feature that enables clients to re-run the ETL pipeline. This allows them to process documents with updated settings, allowing for the extraction of new metadata, and easing a common client pain point.","Updated the functional test framework to be environment-aware: testing environments now clean up debug-resources that could cause noisy neighbor issues and/or potentially prevent full/accurate coverage of the codebase.","Achieved level 1 Support status due to my knowledge of Relativity Processing spanning the breadth of the ETL process.","Eliminated duplicate code paths, in the functional tests covering the Load step, by a factor of 4.","Eliminated ~50 hours of manual maintenance by Implementing a disposable pattern for databases to ensure they are cleaned up on functional test teardown.","Reduced flaky tests caused by noisy neighbor issues by implementing phases for functional test jobs.","Increased transparency into the processing engine by allowing users to see all of the files run through the engine. Furthermore, in order to allow clients to more easily visualize the data coming back, grouping, and pivoting on properties was introduced.","Enabled greater ease of disaster recovery by moving various automation assets into source code management. Furthermore, I removed the need for manual work required when switching branches under test. This was achieved by consolidating the seeding and DSL logic into generic, config driven pipelines. One Pull Request is all that is required now to transition branches, whereas previously developers would modify the configuration of 4 jobs on the Jenkins server's UI.","Mentored an Intern through multiple projects: refactoring functional tests to be more economical in their use of database assets; developing a script to refactor tests; and implementing a jenkins job to trigger an upgrade of the processing engine and, if needed, the Relativity platform as well. Previously all of the standard Relativity Applications had to be updated."]},{company:"rMark Bio, LLC (now within3)",title:"Software Engineer Intern",start:"January 2017",end:"May 2017",url:"https://rmarkbio.com",img_reference:"../../assets/rmarkbio.jpg",tags:["Python","Google Cloud Platform","REST APIs"],summary:"",experience_content:["Built publish / subscription system to allow clients to subscribe to new pharmaceutical publications","Used RESTful APIs to send and receive messages using google cloud's publication/subscription modules and documented and tested accordingly.","Formatted production server to take appropriate HTTP calls via NGINX configuration","Developed individualized Pub / Sub connections to pipeline specific data to users."]}],Xe=[{name:"DePaul Computer Science Society",start_date:"2017",end_date:"2018",role:"Vice President",data:["Planned and ran the DemonHacks Hackathon in its inaugural year","Organized, Planned, and ran meetings in addition to; coordinating company visits"]}],Ye={contact_info:Ke,experience:Qe,organizations:Xe};function qe(a,e,t){const i=a.slice();return i[6]=e[t],i[8]=t,i}function Ee(a,e,t){const i=a.slice();return i[9]=e[t],i[8]=t,i}function Ie(a){let e,t,i=a[9].company+"",s,r,f,p,l,v,_;function g(){return a[3](a[8])}function b(){return a[4](a[8])}return{c(){e=I("div"),t=I("button"),s=O(i),p=D(),this.h()},l(u){e=x(u,"DIV",{role:!0,tabindex:!0,class:!0});var h=k(e);t=x(h,"BUTTON",{class:!0});var q=k(t);s=N(q,i),q.forEach(d),p=$(h),h.forEach(d),this.h()},h(){n(t,"class","svelte-1vn0lnv"),n(e,"role","tab"),n(e,"tabindex",a[8]),n(e,"class","fs-md header svelte-1vn0lnv"),he(e,"selected-tab",a[1]===a[8])},m(u,h){M(u,e,h),c(e,t),c(t,s),c(e,p),l=!0,v||(_=[oe(t,"keydown",g),oe(t,"click",b)],v=!0)},p(u,h){a=u,(!l||h&1)&&i!==(i=a[9].company+"")&&Q(s,i),(!l||h&2)&&he(e,"selected-tab",a[1]===a[8])},i(u){l||(u&&W(()=>{l&&(f&&f.end(1),r=Be(t,z,{duration:500}),r.start())}),l=!0)},o(u){r&&r.invalidate(),u&&(f=Je(t,z,{duration:3e3})),l=!1},d(u){u&&d(e),u&&f&&f.end(),v=!1,_e(_)}}}function xe(a){let e,t=a[6]+"",i;return{c(){e=I("li"),i=O(t),this.h()},l(s){e=x(s,"LI",{class:!0});var r=k(e);i=N(r,t),r.forEach(d),this.h()},h(){n(e,"class","fs-sm shadowed-text-prussian-blue svelte-1vn0lnv")},m(s,r){M(s,e,r),c(e,i)},p(s,r){r&3&&t!==(t=s[6]+"")&&Q(i,t)},d(s){s&&d(e)}}}function Le(a){let e,t,i=a[0][a[1]].title+"",s,r,f,p,l=a[0][a[1]].start+"",v,_,g=a[0][a[1]].end+"",b,u,h,q=Z(a[0][a[1]].experience_content??[]),w=[];for(let o=0;o<q.length;o+=1)w[o]=xe(qe(a,q,o));return{c(){e=I("div"),t=I("strong"),s=O(i),f=D(),p=I("p"),v=O(l),_=O(" - "),b=O(g),u=D(),h=I("ul");for(let o=0;o<w.length;o+=1)w[o].c();this.h()},l(o){e=x(o,"DIV",{class:!0});var m=k(e);t=x(m,"STRONG",{});var y=k(t);s=N(y,i),y.forEach(d),f=$(m),p=x(m,"P",{class:!0});var L=k(p);v=N(L,l),_=N(L," - "),b=N(L,g),L.forEach(d),m.forEach(d),u=$(o),h=x(o,"UL",{});var A=k(h);for(let S=0;S<w.length;S+=1)w[S].l(A);A.forEach(d),this.h()},h(){n(p,"class","fs-md"),n(e,"class","content-header svelte-1vn0lnv")},m(o,m){M(o,e,m),c(e,t),c(t,s),c(e,f),c(e,p),c(p,v),c(p,_),c(p,b),M(o,u,m),M(o,h,m);for(let y=0;y<w.length;y+=1)w[y]&&w[y].m(h,null)},p(o,m){if(m&3&&i!==(i=o[0][o[1]].title+"")&&Q(s,i),m&3&&l!==(l=o[0][o[1]].start+"")&&Q(v,l),m&3&&g!==(g=o[0][o[1]].end+"")&&Q(b,g),m&3){q=Z(o[0][o[1]].experience_content??[]);let y;for(y=0;y<q.length;y+=1){const L=qe(o,q,y);w[y]?w[y].p(L,m):(w[y]=xe(L),w[y].c(),w[y].m(h,null))}for(;y<w.length;y+=1)w[y].d(1);w.length=q.length}},i(o){o&&(r||W(()=>{r=Be(t,z,{duration:300}),r.start()}))},o:fe,d(o){o&&(d(e),d(u),d(h)),Re(w,o)}}}function Ze(a){let e,t,i,s,r=a[1],f,p=Z(a[0]),l=[];for(let g=0;g<p.length;g+=1)l[g]=Ie(Ee(a,p,g));const v=g=>U(l[g],1,1,()=>{l[g]=null});let _=Le(a);return{c(){e=I("div"),t=I("div");for(let g=0;g<l.length;g+=1)l[g].c();i=D(),s=I("div"),_.c(),this.h()},l(g){e=x(g,"DIV",{class:!0});var b=k(e);t=x(b,"DIV",{class:!0,role:!0});var u=k(t);for(let q=0;q<l.length;q+=1)l[q].l(u);u.forEach(d),i=$(b),s=x(b,"DIV",{class:!0,role:!0});var h=k(s);_.l(h),h.forEach(d),b.forEach(d),this.h()},h(){n(t,"class","header-list svelte-1vn0lnv"),n(t,"role","tablist"),n(s,"class","content svelte-1vn0lnv"),n(s,"role","tabpanel"),n(e,"class","switcher svelte-1vn0lnv")},m(g,b){M(g,e,b),c(e,t);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(t,null);c(e,i),c(e,s),_.m(s,null),f=!0},p(g,[b]){if(b&7){p=Z(g[0]);let u;for(u=0;u<p.length;u+=1){const h=Ee(g,p,u);l[u]?(l[u].p(h,b),B(l[u],1)):(l[u]=Ie(h),l[u].c(),B(l[u],1),l[u].m(t,null))}for(ve(),u=p.length;u<l.length;u+=1)v(u);ge()}b&2&&ee(r,r=g[1])?(ve(),U(_,1,1,fe),ge(),_=Le(g),_.c(),B(_,1),_.m(s,null)):_.p(g,b)},i(g){if(!f){for(let b=0;b<p.length;b+=1)B(l[b]);B(_),f=!0}},o(g){l=l.filter(Boolean);for(let b=0;b<l.length;b+=1)U(l[b]);U(_),f=!1},d(g){g&&d(e),Re(l,g),_.d(g)}}}function et(a,e,t){let{list:i=Ye.experience??[]}=e,s=i.filter(v=>v.company==="Relativity");i=[i[0],i[1],i[3]],i[1].experience_content=[],i[1].experience_content=[...s[0].experience_content,...s[1].experience_content];let{selectedTab:r=0}=e;console.log(i);function f(v){t(1,r=v)}const p=v=>f(v),l=v=>f(v);return a.$$set=v=>{"list"in v&&t(0,i=v.list),"selectedTab"in v&&t(1,r=v.selectedTab)},[i,r,f,p,l]}class tt extends ce{constructor(e){super(),de(this,e,et,Ze,ee,{list:0,selectedTab:1})}}function Ae(a){let e,t,i,s,r,f,p,l,v,_,g,b,u,h,q,w,o="A Software Engineer, located in Chicago, IL",m,y,L,A,S=`<p>Scroll To:</p> <a href="${ue}/" class="svelte-1e7srme">About</a> <a href="${ue}/#work" class="svelte-1e7srme">Work</a> <a href="${ue}/#contact" class="svelte-1e7srme">Contact</a>`,C,T;return{c(){e=I("div"),t=I("img"),r=D(),f=I("div"),l=D(),v=I("div"),_=I("h1"),g=O("Hi, I'm "),b=I("span"),u=O(Se),q=D(),w=I("h2"),w.textContent=o,L=D(),A=I("div"),A.innerHTML=S,this.h()},l(E){e=x(E,"DIV",{class:!0});var j=k(e);t=x(j,"IMG",{alt:!0,src:!0,class:!0}),r=$(j),f=x(j,"DIV",{class:!0}),k(f).forEach(d),j.forEach(d),l=$(E),v=x(E,"DIV",{class:!0});var K=k(v);_=x(K,"H1",{class:!0});var J=k(_);g=N(J,"Hi, I'm "),b=x(J,"SPAN",{class:!0});var te=k(b);u=N(te,Se),te.forEach(d),J.forEach(d),q=$(K),w=x(K,"H2",{"data-svelte-h":!0}),pe(w)!=="svelte-1q4ojf2"&&(w.textContent=o),K.forEach(d),L=$(E),A=x(E,"DIV",{class:!0,"data-svelte-h":!0}),pe(A)!=="svelte-15r66m4"&&(A.innerHTML=S),this.h()},h(){n(t,"alt",nt),Fe(t.src,i="DSC04172.webp")||n(t,"src",i),n(t,"class","svelte-1e7srme"),n(f,"class","after-effect svelte-1e7srme"),n(e,"class","pic svelte-1e7srme"),n(b,"class","highlighted-text"),n(_,"class","svelte-1e7srme"),n(v,"class","body-text flexed-col-center svelte-1e7srme"),n(A,"class","menu-bar flexed-row-center svelte-1e7srme")},m(E,j){M(E,e,j),c(e,t),c(e,r),c(e,f),M(E,l,j),M(E,v,j),c(v,_),c(_,g),c(_,b),c(b,u),c(v,q),c(v,w),M(E,L,j),M(E,A,j),T=!0},p(E,j){},i(E){T||(E&&W(()=>{T&&(s||(s=R(t,z,{delay:300,duration:F},!0)),s.run(1))}),E&&W(()=>{T&&(p||(p=R(f,z,{delay:2300,duration:F},!0)),p.run(1))}),E&&W(()=>{T&&(h||(h=R(_,z,{duration:F},!0)),h.run(1))}),E&&W(()=>{T&&(m||(m=R(w,z,{delay:F,duration:F},!0)),m.run(1))}),E&&W(()=>{T&&(y||(y=R(v,z,{duration:F},!0)),y.run(1))}),E&&W(()=>{T&&(C||(C=R(A,z,{delay:1300,duration:3e3},!0)),C.run(1))}),T=!0)},o(E){E&&(s||(s=R(t,z,{delay:300,duration:F},!1)),s.run(0)),E&&(p||(p=R(f,z,{delay:2300,duration:F},!1)),p.run(0)),E&&(h||(h=R(_,z,{duration:F},!1)),h.run(0)),E&&(m||(m=R(w,z,{delay:F,duration:F},!1)),m.run(0)),E&&(y||(y=R(v,z,{duration:F},!1)),y.run(0)),E&&(C||(C=R(A,z,{delay:1300,duration:3e3},!1)),C.run(0)),T=!1},d(E){E&&(d(e),d(l),d(v),d(L),d(A)),E&&s&&s.end(),E&&p&&p.end(),E&&h&&h.end(),E&&m&&m.end(),E&&y&&y.end(),E&&C&&C.end()}}}function it(a){let e,t=a[0]&&Ae();return{c(){e=I("div"),t&&t.c(),this.h()},l(i){e=x(i,"DIV",{class:!0});var s=k(e);t&&t.l(s),s.forEach(d),this.h()},h(){n(e,"class","hero svelte-1e7srme")},m(i,s){M(i,e,s),t&&t.m(e,null)},p(i,[s]){i[0]?t?(t.p(i,s),s&1&&B(t,1)):(t=Ae(),t.c(),B(t,1),t.m(e,null)):t&&(ve(),U(t,1,1,()=>{t=null}),ge())},i(i){B(t)},o(i){U(t)},d(i){i&&d(e),t&&t.d()}}}const F=2e3,Se="John Pridmore",nt="A photograph taken of me in 2020, behind a sunny though obscured, Chicago skyline";function st(a,e,t){let i=!1;return Ge(()=>{t(0,i=!0)}),[i]}class rt extends ce{constructor(e){super(),de(this,e,st,it,ee,{})}}function Ce(a,e,t){const i=a.slice();return i[8]=e[t],i[10]=t,i}function Te(a){let e,t;return{c(){e=V("svg"),t=V("path"),this.h()},l(i){e=H(i,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var s=k(e);t=H(s,"path",{d:!0}),k(t).forEach(d),s.forEach(d),this.h()},h(){n(t,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","24"),n(e,"height","24"),n(e,"viewBox","0 0 24 24"),n(e,"fill","none"),n(e,"stroke","currentColor"),n(e,"stroke-width","2"),n(e,"stroke-linecap","round"),n(e,"stroke-linejoin","round"),n(e,"class","feather feather-github svelte-6x8kqg")},m(i,s){M(i,e,s),c(e,t)},d(i){i&&d(e)}}}function De(a){let e,t,i,s;return{c(){e=V("svg"),t=V("path"),i=V("rect"),s=V("circle"),this.h()},l(r){e=H(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var f=k(e);t=H(f,"path",{d:!0}),k(t).forEach(d),i=H(f,"rect",{x:!0,y:!0,width:!0,height:!0}),k(i).forEach(d),s=H(f,"circle",{cx:!0,cy:!0,r:!0}),k(s).forEach(d),f.forEach(d),this.h()},h(){n(t,"d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"),n(i,"x","2"),n(i,"y","9"),n(i,"width","4"),n(i,"height","12"),n(s,"cx","4"),n(s,"cy","4"),n(s,"r","2"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","24"),n(e,"height","24"),n(e,"viewBox","0 0 24 24"),n(e,"fill","none"),n(e,"stroke","currentColor"),n(e,"stroke-width","2"),n(e,"stroke-linecap","round"),n(e,"stroke-linejoin","round"),n(e,"class","feather feather-linkedin svelte-6x8kqg")},m(r,f){M(r,e,f),c(e,t),c(e,i),c(e,s)},d(r){r&&d(e)}}}function $e(a){let e,t,i;return{c(){e=V("svg"),t=V("path"),i=V("polyline"),this.h()},l(s){e=H(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var r=k(e);t=H(r,"path",{d:!0}),k(t).forEach(d),i=H(r,"polyline",{points:!0}),k(i).forEach(d),r.forEach(d),this.h()},h(){n(t,"d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"),n(i,"points","22,6 12,13 2,6"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","24"),n(e,"height","24"),n(e,"viewBox","0 0 24 24"),n(e,"fill","none"),n(e,"stroke","currentColor"),n(e,"stroke-width","2"),n(e,"stroke-linecap","round"),n(e,"stroke-linejoin","round"),n(e,"class","feather feather-mail svelte-6x8kqg")},m(s,r){M(s,e,r),c(e,t),c(e,i)},d(s){s&&d(e)}}}function Pe(a){let e;return{c(){e=I("hr")},l(t){e=x(t,"HR",{})},m(t,i){M(t,e,i)},d(t){t&&d(e)}}}function Me(a){let e,t,i;return{c(){e=V("svg"),t=V("rect"),i=V("path"),this.h()},l(s){e=H(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var r=k(e);t=H(r,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,ry:!0}),k(t).forEach(d),i=H(r,"path",{d:!0}),k(i).forEach(d),r.forEach(d),this.h()},h(){n(t,"x","2"),n(t,"y","7"),n(t,"width","20"),n(t,"height","14"),n(t,"rx","2"),n(t,"ry","2"),n(i,"d","M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","24"),n(e,"height","24"),n(e,"viewBox","0 0 24 24"),n(e,"fill","none"),n(e,"stroke","currentColor"),n(e,"stroke-width","2"),n(e,"stroke-linecap","round"),n(e,"stroke-linejoin","round"),n(e,"class","feather feather-briefcase svelte-6x8kqg")},m(s,r){M(s,e,r),c(e,t),c(e,i)},d(s){s&&d(e)}}}function je(a){let e,t,i,s,r,f;return{c(){e=V("svg"),t=V("circle"),i=V("circle"),s=V("circle"),r=V("line"),f=V("line"),this.h()},l(p){e=H(p,"svg",{viewBox:!0,width:!0,height:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=k(e);t=H(l,"circle",{cx:!0,cy:!0,r:!0}),k(t).forEach(d),i=H(l,"circle",{cx:!0,cy:!0,r:!0}),k(i).forEach(d),s=H(l,"circle",{cx:!0,cy:!0,r:!0}),k(s).forEach(d),r=H(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),k(r).forEach(d),f=H(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),k(f).forEach(d),l.forEach(d),this.h()},h(){n(t,"cx","18"),n(t,"cy","5"),n(t,"r","3"),n(i,"cx","6"),n(i,"cy","12"),n(i,"r","3"),n(s,"cx","18"),n(s,"cy","19"),n(s,"r","3"),n(r,"x1","8.59"),n(r,"y1","13.51"),n(r,"x2","15.42"),n(r,"y2","17.49"),n(f,"x1","15.41"),n(f,"y1","6.51"),n(f,"x2","8.59"),n(f,"y2","10.49"),n(e,"viewBox","0 0 24 24"),n(e,"width","24"),n(e,"height","24"),n(e,"stroke","currentColor"),n(e,"stroke-width","2"),n(e,"fill","none"),n(e,"stroke-linecap","round"),n(e,"stroke-linejoin","round"),n(e,"class","css-i6dzq1 svelte-6x8kqg")},m(p,l){M(p,e,l),c(e,t),c(e,i),c(e,s),c(e,r),c(e,f)},d(p){p&&d(e)}}}function ze(a,e){let t,i,s,r,f,p,l,v,_,g,b,u=e[10]===5&&Te(),h=e[10]===4&&De(),q=e[10]===3&&$e(),w=e[10]===2&&Pe(),o=e[10]===0&&Me(),m=e[10]==1&&je();function y(){return e[7](e[10])}return{key:a,first:null,c(){t=I("li"),i=I("a"),u&&u.c(),s=D(),h&&h.c(),r=D(),q&&q.c(),f=D(),w&&w.c(),p=D(),o&&o.c(),l=D(),m&&m.c(),this.h()},l(L){t=x(L,"LI",{class:!0});var A=k(t);i=x(A,"A",{href:!0,title:!0,style:!0});var S=k(i);u&&u.l(S),s=$(S),h&&h.l(S),r=$(S),q&&q.l(S),f=$(S),w&&w.l(S),p=$(S),o&&o.l(S),l=$(S),m&&m.l(S),S.forEach(d),A.forEach(d),this.h()},h(){n(i,"href",v=ue+"/"+e[8].href),n(i,"title",_=e[8].link),Oe(i,"color","white"),n(t,"class","svelte-6x8kqg"),this.first=t},m(L,A){M(L,t,A),c(t,i),u&&u.m(i,null),c(i,s),h&&h.m(i,null),c(i,r),q&&q.m(i,null),c(i,f),w&&w.m(i,null),c(i,p),o&&o.m(i,null),c(i,l),m&&m.m(i,null),g||(b=[oe(t,"mouseover",e[5]),oe(t,"mouseleave",e[6]),oe(t,"mouseover",y)],g=!0)},p(L,A){e=L,e[10]===5?u||(u=Te(),u.c(),u.m(i,s)):u&&(u.d(1),u=null),e[10]===4?h||(h=De(),h.c(),h.m(i,r)):h&&(h.d(1),h=null),e[10]===3?q||(q=$e(),q.c(),q.m(i,f)):q&&(q.d(1),q=null),e[10]===2?w||(w=Pe(),w.c(),w.m(i,p)):w&&(w.d(1),w=null),e[10]===0?o||(o=Me(),o.c(),o.m(i,l)):o&&(o.d(1),o=null),e[10]==1?m||(m=je(),m.c(),m.m(i,null)):m&&(m.d(1),m=null),A&1&&v!==(v=ue+"/"+e[8].href)&&n(i,"href",v),A&1&&_!==(_=e[8].link)&&n(i,"title",_)},d(L){L&&d(t),u&&u.d(),h&&h.d(),q&&q.d(),w&&w.d(),o&&o.d(),m&&m.d(),g=!1,_e(b)}}}function lt(a){let e,t,i,s,r,f=a[4][a[3][a[2]]]+"",p,l,v,_=[],g=new Map,b,u,h,q=Z(a[0]);const w=o=>o[10];for(let o=0;o<q.length;o+=1){let m=Ce(a,q,o),y=w(m);g.set(y,_[o]=ze(y,m))}return{c(){e=I("div"),t=I("div"),i=D(),s=I("ul"),r=I("li"),p=O(f),v=D();for(let o=0;o<_.length;o+=1)_[o].c();b=D(),u=I("li"),this.h()},l(o){e=x(o,"DIV",{class:!0});var m=k(e);t=x(m,"DIV",{class:!0}),k(t).forEach(d),i=$(m),s=x(m,"UL",{class:!0});var y=k(s);r=x(y,"LI",{class:!0,id:!0,style:!0});var L=k(r);p=N(L,f),L.forEach(d),v=$(y);for(let A=0;A<_.length;A+=1)_[A].l(y);b=$(y),u=x(y,"LI",{class:!0}),k(u).forEach(d),y.forEach(d),m.forEach(d),this.h()},h(){n(t,"class","beginning-line"),n(r,"class","lato svelte-6x8kqg"),n(r,"id","menu-header"),Oe(r,"writing-mode","vertical-lr"),he(r,"show",a[1]===!0),n(u,"class","final svelte-6x8kqg"),n(s,"class","svelte-6x8kqg"),n(e,"class","sticky-links svelte-6x8kqg")},m(o,m){M(o,e,m),c(e,t),c(e,i),c(e,s),c(s,r),c(r,p),c(s,v);for(let y=0;y<_.length;y+=1)_[y]&&_[y].m(s,null);c(s,b),c(s,u),h=!0},p(o,[m]){(!h||m&4)&&f!==(f=o[4][o[3][o[2]]]+"")&&Q(p,f),(!h||m&2)&&he(r,"show",o[1]===!0),m&7&&(q=Z(o[0]),_=We(_,m,w,1,o,q,g,s,Ue,ze,b,Ce))},i(o){h||(o&&W(()=>{h&&(l||(l=R(r,z,{},!0)),l.run(1))}),h=!0)},o(o){o&&(l||(l=R(r,z,{},!1)),l.run(0)),h=!1},d(o){o&&d(e),o&&l&&l.end();for(let m=0;m<_.length;m+=1)_[m].d()}}}function at(a,e,t){let{links:i=[]}=e,s=!1,r=0,f=[0,0,0,1,1,1],p=["Menu","Contact"];const l=()=>t(1,s=!0),v=()=>t(1,s=!1),_=g=>t(2,r=g);return a.$$set=g=>{"links"in g&&t(0,i=g.links)},[i,s,r,f,p,l,v,_]}class ot extends ce{constructor(e){super(),de(this,e,at,lt,ee,{links:0})}}function ut(a){let e,t,i,s,r,f,p;return{c(){e=I("div"),t=I("div"),i=D(),s=I("h3"),r=O(a[0]),f=D(),p=I("div"),this.h()},l(l){e=x(l,"DIV",{class:!0});var v=k(e);t=x(v,"DIV",{class:!0}),k(t).forEach(d),i=$(v),s=x(v,"H3",{});var _=k(s);r=N(_,a[0]),_.forEach(d),f=$(v),p=x(v,"DIV",{class:!0}),k(p).forEach(d),v.forEach(d),this.h()},h(){n(t,"class","before-line"),n(p,"class","after-line"),n(e,"class","lined-header svelte-19kkzqy")},m(l,v){M(l,e,v),c(e,t),c(e,i),c(e,s),c(s,r),c(e,f),c(e,p)},p(l,[v]){v&1&&Q(r,l[0])},i:fe,o:fe,d(l){l&&d(e)}}}function ct(a,e,t){let{text:i}=e;return a.$$set=s=>{"text"in s&&t(0,i=s.text)},[i]}class Ve extends ce{constructor(e){super(),de(this,e,ct,ut,ee,{text:0})}}function dt(a){let e,t,i,s,r,f,p,l,v,_,g,b,u,h,q,w,o,m,y,L,A,S,C,T,E="Email",j,K,J,te=`The design for this version of my site is heavily inspired by <a href="https://v4.brittneychiang.com" class="svelte-1xoz5m">Brittney Chiang&#39;s Site</a>.
            Here&#39;s the <a href="http://www.jprid.com" class="svelte-1xoz5m">previous iteration</a> of my website.`,ie;return t=new ot({props:{links:a[1]}}),r=new rt({}),v=new Ve({props:{text:"Experience"}}),g=new tt({props:{selectedTab:a[0]}}),q=new Ve({props:{class:"lato",text:"Contact"}}),{c(){e=I("div"),se(t.$$.fragment),i=D(),s=I("section"),se(r.$$.fragment),f=D(),p=I("section"),l=I("div"),se(v.$$.fragment),_=D(),se(g.$$.fragment),b=D(),u=I("footer"),h=I("div"),se(q.$$.fragment),w=D(),o=I("div"),m=I("h2"),y=O("The best way to get a hold of me is through "),L=I("a"),A=O("LinkedIn"),C=O(" or my "),T=I("a"),T.textContent=E,j=O("."),K=D(),J=I("span"),J.innerHTML=te,this.h()},l(P){e=x(P,"DIV",{class:!0});var G=k(e);re(t.$$.fragment,G),i=$(G),s=x(G,"SECTION",{id:!0,class:!0,role:!0});var ne=k(s);re(r.$$.fragment,ne),ne.forEach(d),f=$(G),p=x(G,"SECTION",{class:!0,id:!0,role:!0});var me=k(p);l=x(me,"DIV",{class:!0});var be=k(l);re(v.$$.fragment,be),be.forEach(d),_=$(me),re(g.$$.fragment,me),me.forEach(d),b=$(G),u=x(G,"FOOTER",{id:!0,class:!0});var X=k(u);h=x(X,"DIV",{class:!0});var we=k(h);re(q.$$.fragment,we),we.forEach(d),w=$(X),o=x(X,"DIV",{class:!0});var ke=k(o);m=x(ke,"H2",{});var Y=k(m);y=N(Y,"The best way to get a hold of me is through "),L=x(Y,"A",{href:!0,class:!0});var ye=k(L);A=N(ye,"LinkedIn"),ye.forEach(d),C=N(Y," or my "),T=x(Y,"A",{class:!0,"data-svelte-h":!0}),pe(T)!=="svelte-ixjumy"&&(T.textContent=E),j=N(Y,"."),Y.forEach(d),ke.forEach(d),K=$(X),J=x(X,"SPAN",{class:!0,"data-svelte-h":!0}),pe(J)!=="svelte-1iois11"&&(J.innerHTML=te),X.forEach(d),G.forEach(d),this.h()},h(){n(s,"id","about"),n(s,"class","entry svelte-1xoz5m"),n(s,"role","tabpanel"),n(l,"class","fs-xl flexed-row-center lato lined-header"),n(p,"class","experience-list svelte-1xoz5m"),n(p,"id","work"),n(p,"role","tabpanel"),n(h,"class","lined-header fs-xl"),n(L,"href",a[1][1]),n(L,"class","svelte-1xoz5m"),n(T,"class","svelte-1xoz5m"),n(o,"class","contact-card flexed-col-center svelte-1xoz5m"),n(J,"class","acknowledgments fs-sm svelte-1xoz5m"),n(u,"id","contact"),n(u,"class","flexed-col-center svelte-1xoz5m"),n(e,"class","main svelte-1xoz5m")},m(P,G){M(P,e,G),le(t,e,null),c(e,i),c(e,s),le(r,s,null),c(e,f),c(e,p),c(p,l),le(v,l,null),c(p,_),le(g,p,null),c(e,b),c(e,u),c(u,h),le(q,h,null),c(u,w),c(u,o),c(o,m),c(m,y),c(m,L),c(L,A),c(m,C),c(m,T),c(m,j),c(u,K),c(u,J),ie=!0},p(P,[G]){const ne={};G&1&&(ne.selectedTab=P[0]),g.$set(ne)},i(P){ie||(B(t.$$.fragment,P),B(r.$$.fragment,P),B(v.$$.fragment,P),B(g.$$.fragment,P),B(q.$$.fragment,P),P&&W(()=>{ie&&(S||(S=R(L,z,{},!0)),S.run(1))}),ie=!0)},o(P){U(t.$$.fragment,P),U(r.$$.fragment,P),U(v.$$.fragment,P),U(g.$$.fragment,P),U(q.$$.fragment,P),P&&(S||(S=R(L,z,{},!1)),S.run(0)),ie=!1},d(P){P&&d(e),ae(t),ae(r),ae(v),ae(g),ae(q),P&&S&&S.end()}}}let He="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor.Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius.Et odio pellentesque diam volutpat commodo sed.";function mt(a,e,t){let i,{halfIpsum:s=He.slice(0,He.length/4)}=e,{headerList:r=[{title:"Software Engineer",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et","dolore magna aliqua.","Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor.","Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius.","Et odio pellentesque diam volutpat commodo sed."],name:"Current",startStop:["September 2023","Present"]},{name:"Galileo",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et","dolore magna aliqua.","Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor.","Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius.","Et odio pellentesque diam volutpat commodo sed."],title:"Executive Grimace",startStop:["October 2021","September 2023"]},{title:"Software Dongler",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et","dolore magna aliqua.","Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor.","Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius.","Et odio pellentesque diam volutpat commodo sed."],name:"Relativity",startStop:["2018","October 2021"]},{title:"Software Dongler",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et","dolore magna aliqua.","Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor.","Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius.","Et odio pellentesque diam volutpat commodo sed."],name:"rMark Bio LLC",startStop:["2018","October 2021"]}]}=e,f=[{link:"work",ref:"briefcase.svg",href:"#work"},{link:"contact",ref:"",href:"#contact"},{link:"",ref:"",href:""},{link:"Mail",ref:"mail.svg",href:"mailto:johnpridmore.lit@gmail.com"},{link:"LinkedIn",ref:"linkedin.svg",href:"https://www.linkedin.com/in/jprid"},{link:"Github",ref:"github.svg",href:"https://www.github.com/jprid"}];const p=!0;return a.$$set=l=>{"halfIpsum"in l&&t(2,s=l.halfIpsum),"headerList"in l&&t(3,r=l.headerList)},t(0,i=0),[i,f,s,r,p]}class vt extends ce{constructor(e){super(),de(this,e,mt,dt,ee,{halfIpsum:2,headerList:3,prerender:4})}get prerender(){return this.$$.ctx[4]}}export{vt as component};