(function(){var t={41598:function(t,e,r){"use strict";var n=r(45130),o=r(30657),a=r(56768),s=r(24232),i=r(55129),l=r(81387),c=r(51510),d=r(56179);const u={class:"notification"},C={class:"icon"},f={key:0,src:"/images/ic_notification_success.svg",alt:""},h={key:1,src:"/images/ic_notification_error.svg",alt:""},p={class:"title"},w={class:"desc"},v={key:0,class:"link"},g=["href"];var m={__name:"App",setup(t){const e=(0,i.o)(),r=(0,l.lq)(),o=(0,c.K7Q)(),m=(0,a.EW)((()=>r.meta.layout||"default-layout"));return(0,a.KC)((async()=>{try{o.value="Bro_n_Bro lottery",window.addEventListener("keplr_keystorechange",(()=>{window.location.reload()})),window.keplr&&await e.init()}catch(t){console.error("Error initializating app:",t)}})),(t,e)=>{const r=(0,a.g2)("notifications");return(0,a.uX)(),(0,a.CE)(a.FK,null,[((0,a.uX)(),(0,a.Wv)((0,a.$y)(m.value))),(0,a.bF)(r,{width:"304px",position:"top right",group:"default"},{body:(0,a.k6)((t=>[(0,a.bF)(n.eB,{name:"slideRight"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",{class:(0,s.C4)(["notification_wrap",{success:"success"===t.item.type,error:"error"===t.item.type,copied:"copied"===t.item.type}])},[(0,a.Lk)("div",u,[(0,a.Lk)("div",C,["success"===t.item.type||"copied"===t.item.type?((0,a.uX)(),(0,a.CE)("img",f)):"error"===t.item.type?((0,a.uX)(),(0,a.CE)("img",h)):((0,a.uX)(),(0,a.Wv)(d.A,{key:2}))]),(0,a.Lk)("div",null,[(0,a.Lk)("div",p,(0,s.v_)(t.item.title),1),(0,a.Lk)("div",w,(0,s.v_)(t.item.text),1),t.item.data.explorer_link?((0,a.uX)(),(0,a.CE)("div",v,[(0,a.Lk)("a",{href:t.item.data.explorer_link,target:"_blank",rel:"noopener nofollow"},"Explorer",8,g)])):(0,a.Q3)("",!0)])])],2)])),_:2},1024)])),_:1})],64)}}};const b=m;var y=b,k=(r(98992),r(3949),r(37550),r(90144)),L=r(63935);const _={class:"cont row"},S={class:"menu"},E={class:"balance"},x={class:"staked"},M={class:"val"},H={class:"tickets"},R={class:"delegation"},$={class:"referral"},j={key:0,viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 24",fill:"none"};var Z={__name:"Header",setup(t){const e=(0,i.o)(),r=(0,a.EW)((()=>e.lastWinners.some((t=>t.initial_delegator?.address===e.user.address))));async function o(){try{await e.connectKeplr()}catch(t){console.error("Error connecting to Keplr:",t),e.isKeplrConnecting=!1}}return(0,a.sV)((()=>{const t=document.querySelectorAll(".scroll_btn");t&&t.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault();let r=t.getAttribute("data-anchor");document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"},1e3)}))}))})),(t,i)=>((0,a.uX)(),(0,a.CE)("header",null,[(0,a.Lk)("div",_,[i[13]||(i[13]=(0,a.Lk)("div",{class:"logo"},[(0,a.Lk)("img",{src:L,alt:""})],-1)),(0,a.Lk)("div",S,[i[2]||(i[2]=(0,a.Lk)("div",null,[(0,a.Lk)("button",{class:"btn scroll_btn","data-anchor":"first_section"},"Lottery")],-1)),(0,a.bo)((0,a.Lk)("div",null,i[1]||(i[1]=[(0,a.Lk)("button",{class:"btn scroll_btn","data-anchor":"referrals"},"Referrals",-1)]),512),[[n.aG,(0,k.R1)(e).isKeplrConnected]]),i[3]||(i[3]=(0,a.Lk)("div",null,[(0,a.Lk)("button",{class:"btn scroll_btn","data-anchor":"prize_pool"},"Prize pool")],-1)),i[4]||(i[4]=(0,a.Lk)("div",null,[(0,a.Lk)("button",{class:"btn scroll_btn","data-anchor":"leaderboard"},"Leaderboard")],-1)),i[5]||(i[5]=(0,a.Lk)("div",null,[(0,a.Lk)("button",{class:"btn scroll_btn","data-anchor":"our_bros"},"Bros")],-1)),i[6]||(i[6]=(0,a.Lk)("div",null,[(0,a.Lk)("button",{class:"btn scroll_btn","data-anchor":"steps"},"Steps to Win")],-1))]),(0,k.R1)(e).isUserInfoGot?((0,a.uX)(),(0,a.CE)(a.FK,{key:1},[(0,a.Lk)("div",E,[(0,a.Lk)("div",x,[(0,a.Lk)("div",M,(0,s.v_)((0,k.R1)(e).user.delegation_difference)+" "+(0,s.v_)((0,k.R1)(e).currentNetwork.symbol),1),i[8]||(i[8]=(0,a.Lk)("div",{class:"label"},"Staked",-1))]),(0,a.Lk)("div",H,[(0,a.Lk)("div",R,[(0,a.Lk)("span",null,(0,s.v_)((0,k.R1)(e).user.delegation_tickets),1),i[9]||(i[9]=(0,a.Lk)("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,a.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M29 17C29 16.2044 29.3161 15.4413 29.8787 14.8787C30.4413 14.3161 31.2044 14 32 14V8C32 7.20435 31.6839 6.44129 31.1213 5.87868C30.5587 5.31607 29.7957 5 29 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V14C2.79565 14 3.55871 14.3161 4.12132 14.8787C4.68393 15.4413 5 16.2044 5 17C5 17.7956 4.68393 18.5587 4.12132 19.1213C3.55871 19.6839 2.79565 20 2 20V26C2 26.7956 2.31607 27.5587 2.87868 28.1213C3.44129 28.6839 4.20435 29 5 29H29C29.7957 29 30.5587 28.6839 31.1213 28.1213C31.6839 27.5587 32 26.7956 32 26V20C31.2044 20 30.4413 19.6839 29.8787 19.1213C29.3161 18.5587 29 17.7956 29 17ZM8 22.0208C8.31257 22.7816 9.07448 23.4502 9.98628 23.96C11.1898 24.6329 12.6922 25.0514 13.8885 25.0514H20.1115C21.3078 25.0514 22.8102 24.6329 24.0137 23.96C24.9255 23.4502 25.6874 22.7816 26 22.0208L20.5109 22.03C18.8299 22.03 17.4156 23.0239 17 24.3739C16.5844 23.0239 15.1701 22.03 13.4891 22.03L8 22.0208ZM9.98628 19.9472C9.07448 19.31 8.31257 18.4742 8 17.5232L13.4891 17.5347C15.1701 17.5347 16.5844 18.7771 17 20.4646C17.4156 18.7771 18.8299 17.5347 20.5109 17.5347L26 17.5232C25.6874 18.4742 24.9255 19.31 24.0137 19.9472C22.8102 20.7883 21.3078 21.3115 20.1115 21.3115H13.8885C12.6922 21.3115 11.1898 20.7883 9.98628 19.9472ZM8 16.6282C8.31257 15.6772 9.07448 14.8414 9.98628 14.2042C11.1898 13.363 12.6922 12.8398 13.8885 12.8398H20.1115C21.3078 12.8398 22.8102 13.363 24.0137 14.2042C24.9255 14.8414 25.6874 15.6772 26 16.6282L20.5109 16.6167C18.8299 16.6167 17.4156 15.3743 17 13.6867C16.5844 15.3743 15.1701 16.6167 13.4891 16.6167L8 16.6282ZM9.98628 10.143C9.07448 10.6528 8.31257 11.3214 8 12.0822L13.4891 12.073C15.1701 12.073 16.5844 11.079 17 9.72902C17.4156 11.079 18.8299 12.073 20.5109 12.073L26 12.0822C25.6874 11.3214 24.9255 10.6528 24.0137 10.143C22.8102 9.47008 21.3078 9.05151 20.1115 9.05151H13.8885C12.6922 9.05151 11.1898 9.47008 9.98628 10.143Z",fill:"#F4BF20"})],-1))]),(0,a.Lk)("div",$,[(0,a.Lk)("span",null,(0,s.v_)((0,k.R1)(e).user.referral_tickets+(0,k.R1)(e).user.invitee_tickets),1),i[10]||(i[10]=(0,a.Lk)("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,a.Lk)("path",{d:"M22.37 24.2L17 20.75L11.63 24.2L13.25 18.02L8.315 14L14.69 13.61L17 7.7L19.31 13.61L25.685 14L20.75 18.02M29 17C29 16.2044 29.3161 15.4413 29.8787 14.8787C30.4413 14.3161 31.2044 14 32 14V8C32 7.20435 31.6839 6.44129 31.1213 5.87868C30.5587 5.31607 29.7956 5 29 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V14C2.79565 14 3.55871 14.3161 4.12132 14.8787C4.68393 15.4413 5 16.2044 5 17C5 17.7956 4.68393 18.5587 4.12132 19.1213C3.55871 19.6839 2.79565 20 2 20V26C2 26.7956 2.31607 27.5587 2.87868 28.1213C3.44129 28.6839 4.20435 29 5 29H29C29.7956 29 30.5587 28.6839 31.1213 28.1213C31.6839 27.5587 32 26.7956 32 26V20C31.2044 20 30.4413 19.6839 29.8787 19.1213C29.3161 18.5587 29 17.7956 29 17Z",fill:"currentColor"})],-1))])])]),(0,a.Lk)("div",{class:(0,s.C4)(["address",{gold:r.value}])},[r.value?((0,a.uX)(),(0,a.CE)("svg",j,i[11]||(i[11]=[(0,a.Lk)("path",{d:"M23 8.56144V8.63917C23 9.55482 23 10.0137 22.793 10.3885C22.586 10.7633 22.209 10.9858 21.457 11.4319L20.664 11.9004C21.21 9.93279 21.393 7.81827 21.46 6.01039L21.47 5.77509L21.472 5.71973C22.123 5.96035 22.489 6.14029 22.717 6.47674C23 6.89517 23 7.45095 23 8.56144ZM3 8.56144V8.63917C3 9.55482 3 10.0137 3.207 10.3885C3.414 10.7633 3.791 10.9858 4.543 11.4319L5.337 11.9004C4.79 9.93279 4.607 7.81827 4.54 6.01039L4.53 5.77509L4.529 5.71973C3.877 5.96035 3.511 6.14029 3.283 6.47674C3 6.89517 3 7.45201 3 8.56144Z",fill:"currentColor"},null,-1),(0,a.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.3764 2.3697C15.9296 2.11736 14.4655 1.99378 12.9994 2.00024C11.2164 2.00024 9.7464 2.1674 8.6224 2.3697C7.4834 2.57412 6.9144 2.67633 6.4384 3.30025C5.9634 3.92418 5.9884 4.59814 6.0384 5.94606C6.2114 10.5754 7.1494 16.359 12.2494 16.87V18.5397H10.8194C10.5883 18.5398 10.3644 18.6252 10.1857 18.7813C10.0071 18.9373 9.88469 19.1544 9.8394 19.3957L9.64939 20.4029H6.9994C6.80048 20.4029 6.60972 20.4871 6.46907 20.6368C6.32841 20.7866 6.2494 20.9897 6.2494 21.2015C6.2494 21.4132 6.32841 21.6164 6.46907 21.7661C6.60972 21.9159 6.80048 22 6.9994 22H18.9994C19.1983 22 19.3891 21.9159 19.5297 21.7661C19.6704 21.6164 19.7494 21.4132 19.7494 21.2015C19.7494 20.9897 19.6704 20.7866 19.5297 20.6368C19.3891 20.4871 19.1983 20.4029 18.9994 20.4029H16.3494L16.1594 19.3957C16.1141 19.1544 15.9917 18.9373 15.8131 18.7813C15.6344 18.6252 15.4105 18.5398 15.1794 18.5397H13.7494V16.87C18.8494 16.359 19.7884 10.5765 19.9604 5.94606C20.0104 4.59814 20.0364 3.92311 19.5604 3.30025C19.0844 2.67633 18.5154 2.57412 17.3764 2.3697Z",fill:"currentColor"},null,-1)]))):((0,a.uX)(),(0,a.CE)("svg",F,i[12]||(i[12]=[(0,a.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 4C1.79086 4 0 5.79086 0 8V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H4ZM4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H4Z",fill:"currentColor"},null,-1),(0,a.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M23 9C24.6569 9 26 10.3431 26 12C26 13.6569 24.6569 15 23 15H21.4545C21.2035 15 21 14.7965 21 14.5455V9.45455C21 9.20351 21.2035 9 21.4545 9H23ZM24 13C23.4477 13 23 12.5523 23 12C23 11.4477 23.4477 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z",fill:"currentColor"},null,-1),(0,a.Lk)("path",{d:"M16 3H6L12.514 0.557253C13.3843 0.230886 14.3647 0.547125 14.8803 1.32051L16 3Z",fill:"currentColor"},null,-1)]))),(0,a.Lk)("span",null,(0,s.v_)((0,k.R1)(e).user.address.slice(0,5)+"..."+(0,k.R1)(e).user.address.slice(-6)),1)],2)],64)):((0,a.uX)(),(0,a.CE)("button",{key:0,class:(0,s.C4)(["connect_btn",{process:(0,k.R1)(e).isKeplrConnecting||(0,k.R1)(e).showRegisterModal}]),onClick:i[0]||(i[0]=(0,n.D$)((t=>o()),["prevent"]))},i[7]||(i[7]=[(0,a.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"24",viewBox:"0 0 26 24",fill:"none"},[(0,a.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 8C0 5.79086 1.79086 4 4 4H16C18.2091 4 20 5.79086 20 8H18C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16H20C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V8ZM3 8C3 7.44772 3.44772 7 4 7H8C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9H4C3.44772 9 3 8.55228 3 8Z",fill:"currentColor"}),(0,a.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 9C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15H21.3636C21.7151 15 22 14.7151 22 14.3636V9.63636C22 9.28491 21.7151 9 21.3636 9H18ZM18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z",fill:"currentColor"})],-1),(0,a.Lk)("span",null,"Connect wallet",-1)]),2))])]))}},A=r(71241);const B=(0,A.A)(Z,[["__scopeId","data-v-1399d9f0"]]);var U=B;function N(t,e){return(0,a.uX)(),(0,a.CE)("footer",null,e[0]||(e[0]=[(0,a.Fv)('<div class="data" data-v-e1fd396a><div class="cont row" data-v-e1fd396a><div class="title" data-v-e1fd396a>Have questions? Feel free to contact us.</div><div class="socials" data-v-e1fd396a><a href="https://github.com/bro-n-bro" target="_blank" rel="noopener nofollow" data-v-e1fd396a><svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e1fd396a><path fill-rule="evenodd" clip-rule="evenodd" d="M37 0C16.5575 0 0 16.5575 0 37C0 53.3725 10.5912 67.2013 25.2987 72.1038C27.1487 72.4275 27.8425 71.3175 27.8425 70.3463C27.8425 69.4675 27.7962 66.5538 27.7962 63.455C18.5 65.1663 16.095 61.1888 15.355 59.1075C14.9387 58.0438 13.135 54.76 11.5625 53.8813C10.2675 53.1875 8.4175 51.4763 11.5162 51.43C14.43 51.3838 16.5112 54.1125 17.205 55.2225C20.535 60.8188 25.8537 59.2463 27.9812 58.275C28.305 55.87 29.2762 54.2513 30.34 53.3263C22.1075 52.4013 13.505 49.21 13.505 35.0575C13.505 31.0338 14.9388 27.7038 17.2975 25.1138C16.9275 24.1888 15.6325 20.3963 17.6675 15.3088C17.6675 15.3088 20.7662 14.3375 27.8425 19.1013C30.8025 18.2688 33.9475 17.8525 37.0925 17.8525C40.2375 17.8525 43.3825 18.2688 46.3425 19.1013C53.4187 14.2913 56.5175 15.3088 56.5175 15.3088C58.5525 20.3963 57.2575 24.1888 56.8875 25.1138C59.2463 27.7038 60.68 30.9875 60.68 35.0575C60.68 49.2563 52.0312 52.4013 43.7987 53.3263C45.14 54.4825 46.2962 56.7025 46.2962 60.1712C46.2962 65.12 46.25 69.0975 46.25 70.3463C46.25 71.3175 46.9437 72.4738 48.7937 72.1038C56.1388 69.6239 62.5213 64.9032 67.043 58.606C71.5646 52.3089 73.9978 44.7524 74 37C74 16.5575 57.4425 0 37 0Z" fill="currentColor" data-v-e1fd396a></path></svg></a><a href="https://t.me/bro_n_bro_community" target="_blank" rel="noopener nofollow" data-v-e1fd396a><svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e1fd396a><path fill-rule="evenodd" clip-rule="evenodd" d="M74 37C74 57.4332 57.4332 74 37 74C16.5667 74 0 57.4332 0 37C0 16.5667 16.5667 0 37 0C57.4332 0 74 16.5667 74 37ZM38.3258 27.3153C34.7276 28.8107 27.5342 31.9094 16.7487 36.6084C14.9973 37.3052 14.0785 37.9867 13.9952 38.6527C13.8534 39.7812 15.2656 40.2252 17.1834 40.8264C17.4455 40.9097 17.7168 40.9929 17.9943 41.0854C19.8844 41.699 22.4251 42.4174 23.7448 42.4452C24.9442 42.4698 26.2823 41.9765 27.7593 40.9652C37.8356 34.1603 43.0372 30.7223 43.364 30.6483C43.5952 30.5959 43.9159 30.5281 44.1317 30.7223C44.3476 30.9135 44.326 31.2773 44.3044 31.376C44.1626 31.9711 38.6311 37.1172 35.7636 39.7812C34.8694 40.6106 34.2373 41.1995 34.1078 41.3352C33.818 41.6343 33.522 41.921 33.2383 42.1954C31.4808 43.8851 30.1673 45.1554 33.3123 47.2274C34.8232 48.2233 36.0318 49.0466 37.2374 49.8667C38.554 50.764 39.8675 51.6582 41.5695 52.7743C42.0012 53.058 42.4143 53.3509 42.8182 53.6377C44.3507 54.7322 45.7289 55.7127 47.4309 55.5586C48.4176 55.4661 49.4412 54.538 49.9592 51.7661C51.1833 45.2109 53.5945 31.0152 54.1526 25.1631C54.1865 24.6772 54.1659 24.189 54.0909 23.7078C54.0461 23.319 53.8568 22.9614 53.5606 22.7057C53.1197 22.3449 52.4352 22.2678 52.1268 22.274C50.7362 22.2987 48.6026 23.0417 38.3258 27.3153Z" fill="currentColor" data-v-e1fd396a></path></svg></a><a href="https://twitter.com/Bro_n_Bro" target="_blank" rel="noopener nofollow" data-v-e1fd396a><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e1fd396a><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5C0 25.3366 7.16344 32.5 16 32.5ZM23.0537 9.24983H20.6L16.5554 14.0426L13.0629 9.25102H8L14.0469 17.4521L8.31429 24.2498H10.7703L15.1931 19.0067L19.0629 24.2498H24L17.6937 15.6031L23.0537 9.24983ZM21.0971 22.7271H19.7371L10.8617 10.6933H12.32L21.0971 22.7271Z" fill="currentColor" data-v-e1fd396a></path></svg></a><a href="https://keybase.io/bronbroio" target="_blank" rel="noopener nofollow" data-v-e1fd396a><svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e1fd396a><circle cx="37" cy="37" r="37" fill="currentColor" data-v-e1fd396a></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M29.3749 30.4251C28.6796 29.0397 28.4076 27.4285 28.5847 25.7057C23.9967 25.7448 23.5269 23.877 23.449 22.0334L23.614 19.3444C23.7221 17.5834 25.2777 16.2071 27.0254 16.2071C30.7113 16.3526 31.0595 16.4405 32.0813 17.5803L34.6066 14L36.6975 15.2421C35.3143 18.2151 35.7984 18.9607 35.8036 18.9668C42.1834 19.1134 45.9029 24.3711 43.7593 30.0525C56.6009 34.9891 61.1391 47.8898 55.75 60H52.9707C55.3781 55.9175 56.0232 50.8217 55.2433 46.2103C48.7612 55.878 39.9517 39.8281 22.6597 54.3239L24.5839 48.233L20.5311 52.5729C21.017 55.3156 22.1239 57.8435 23.7034 60H20.7677C19.7717 58.3617 19.0128 56.588 18.514 54.7328L16.0936 57.3246C15.4027 44.3347 18.4093 35.3609 29.3749 30.4251ZM34.3914 54.9531C34.3914 53.3234 32.6322 52.2994 31.2323 53.1142C29.8324 53.929 29.8324 55.9772 31.2323 56.792C32.6322 57.6067 34.3914 56.5827 34.3914 54.9531ZM45.6399 54.9531C45.6399 53.3234 43.8806 52.2994 42.4807 53.1142C41.0809 53.929 41.0809 55.9772 42.4807 56.792C43.8805 57.6067 45.6399 56.5827 45.6399 54.9531ZM30.4319 20.2489C29.8851 21.2463 29.4305 22.2465 29.102 23.2734L26.7048 23.1236C26.222 23.0938 25.8527 22.6729 25.8808 22.1855L26.0457 19.4966C26.0746 19.0272 26.4602 18.664 26.9237 18.664C26.9412 18.664 29.6388 18.832 29.6388 18.832C30.3718 18.9493 30.5609 19.4164 30.4319 20.2489ZM36.9416 30.4423L43.8316 39.0044C44.4431 39.7612 43.3241 40.6831 42.7125 39.9263L42.0265 39.0723L39.1708 41.4191L37.3558 39.1847L40.2232 36.8281L39.2229 35.5832L37.8461 36.7239L36.923 35.545L38.2854 34.4162L35.8227 31.3642C35.2345 30.6365 36.3535 29.7147 36.9416 30.4423Z" fill="var(--color2)" data-v-e1fd396a></path></svg></a><a href="https://cyb.ai/network/bostrom/contract/bostrom1ndwqfv2skglrmsqu4wlneepthyrquf9r7sx6r0" target="_blank" rel="noopener nofollow" data-v-e1fd396a><svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e1fd396a><circle cx="37" cy="37" r="37" fill="currentColor" data-v-e1fd396a></circle><circle cx="37" cy="37" r="18" fill="var(--color2)" data-v-e1fd396a></circle></svg></a></div><div class="line" data-v-e1fd396a></div><div class="copyright" data-v-e1fd396a>Bro &amp; Bro team, 2025</div></div></div>',1)]))}const O={},T=(0,A.A)(O,[["render",N],["__scopeId","data-v-e1fd396a"]]);var P=T;const K={class:"main"};var D={__name:"Default",setup(t){return(t,e)=>{const r=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",K,[(0,a.bF)(U),(0,a.bF)(r,null,{default:(0,a.k6)((({Component:t})=>[((0,a.uX)(),(0,a.Wv)((0,a.$y)(t)))])),_:1}),(0,a.bF)(P)])}}};const V=D;var z=V;const X={class:"main"};function W(t,e){const r=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",X,[(0,a.bF)(r,null,{default:(0,a.k6)((({Component:t})=>[((0,a.uX)(),(0,a.Wv)((0,a.$y)(t)))])),_:1})])}const I={},q=(0,A.A)(I,[["render",W]]);var G=q;const J=[{path:"/",name:"IndexPage",component:()=>r.e(655).then(r.bind(r,93552)),meta:{layout:z}},{path:"/admin",name:"AdminPage",component:()=>r.e(458).then(r.bind(r,21458)),meta:{layout:G}}],Q=(0,l.aE)({history:(0,l.LA)("/"),routes:J});var Y=Q,tt=r(50595),et=r(78875),rt=r(65838);const nt=(0,tt.A)(),ot=(0,n.Ef)(y),at=(0,o.Ey)();ot.use(at),ot.use(Y),ot.use(et.Ay),ot.provide("emitter",nt),ot.component(rt.A.name,rt.A),ot.mount("#app")},55129:function(t,e,r){"use strict";r.d(e,{o:function(){return l}});r(44114),r(17642),r(58004),r(33853),r(45876),r(32475),r(15024),r(31698),r(98992),r(54520),r(72577),r(3949);var n=r(30657),o=r(78875),a=r(51510),s=r(46399);const i=(0,o.hN)(),l=(0,n.nY)("global",{state:()=>({isKeplrConnected:!1,isKeplrConnecting:!1,isAvailableBalancesGot:!1,isUserInfoGot:!1,isFirstConnection:(0,a.Mjh)("isFirstConnection",!0),showRegisterModal:!1,Keplr:{},StargateClient:{},prices:[],redelegations:[],availableBalance:[],prizePool:[],lastWinners:[],topStakers:[],adminWinners:[],user:{},apiURL:"https://rpc.pacific-1.bronbro.io",currentNetwork:{name:"Cosmos Hub",lcd_api:"https://lcd.cosmoshub-4.bronbro.io",rpc_api:"https://rpc.cosmoshub-4.bronbro.io",websocket_url:"wss://rpc.cosmoshub-4.bronbro.io:443/websocket",denom:"uatom",symbol:"ATOM",chain_id:"cosmoshub-4",prefix:"cosmos",explorer_link:"https://www.mintscan.io/cosmos/tx/{tx_hash}",alias:"cosmoshub",exponent:6,gas_adjustment:1.6},currentLottery:null,ticketPrice:10,currentCurrency:"USD",currentCurrencySymbol:"$",currentTxHash:"",validatorAddress:"cosmosvaloper106yp7zw35wftheyyv9f9pe69t8rteumjrx52jg",addressConfirmationString:"i am in brottery",markdownENRules:"",markdownRURules:"",formatableTokens:[{token_name:"USD",format_token_name:"usdt",exponent:0}]}),actions:{async init(){try{const t=await fetch(`${this.apiURL}/lotteries/current`);if(!t.ok)throw new Error("Failed to fetch current lottery. Status: "+t.status);const e=await t.json();this.currentLottery=e,await this.loadPrizePool(),this.isFirstConnection||await this.connectKeplr()}catch(t){console.error(t)}},async getPrices(){try{const t=await fetch("https://rpc.bronbro.io/price_feed_api/tokens/");if(!t.ok)throw new Error("Failed to fetch prices. Status: "+t.status);this.prices=await t.json()}catch(t){console.error(t)}},async loadPrizePool(){try{const t=await fetch(`/prize_pools/round_${this.currentLottery.id}.json`);if(!t.ok)throw new Error("Failed to fetch prize poll JSON. Status: "+t.status);this.prizePool=await t.json()}catch(t){throw t}},async connectKeplr(){this.isKeplrConnecting=!0;try{if(!window.keplr)throw new Error("Keplr is not installed or not available");await(0,s.g$)(this.currentNetwork.chain_id),this.isFirstConnection=!1,this.isKeplrConnected=!0;try{const{success:t}=await this.getUserInfo();t||(this.showRegisterModal=!0)}catch(t){throw t}this.isKeplrConnecting=!1}catch(t){throw this.isKeplrConnecting=!1,i.notify({group:"default",speed:100,duration:1e3,title:"Keplr connection error",type:"error"}),t}},async getAvailableBalance(){this.isAvailableBalanceGot=!1,this.availableBalance=[];try{const t=await fetch(`${this.currentNetwork.lcd_api}/cosmos/bank/v1beta1/balances/${this.user.address}`);if(!t.ok)throw new Error("Failed to fetch available balances. Status: "+t.status);const e=await t.json();e.balances.length&&(this.availableBalance=e.balances.filter((t=>t.amount>0&&t.denom===this.currentNetwork.denom))),this.isAvailableBalanceGot=!0}catch(t){throw t}},async getUserValidators(){try{const t=await fetch(`${this.currentNetwork.lcd_api}/cosmos/staking/v1beta1/delegators/${this.user.address}/validators?status=BOND_STATUS_BONDED&pagination.limit=200`);if(!t.ok)throw new Error("Failed to fetch redelegations. Status: "+response.status);const e=await t.json();if(this.user.validators=e.validators.filter((t=>t.operator_address!==this.validatorAddress)),this.user.validators.length){const t=await fetch(`${this.currentNetwork.lcd_api}/cosmos/staking/v1beta1/delegations/${this.user.address}`);if(!t.ok)throw new Error("Failed to fetch delegations. Status: "+response.status);const e=await t.json();this.user.validators.forEach((t=>{t.balance=e.delegation_responses.find((e=>e.delegation.validator_address===t.operator_address)).balance})),this.user.validators=this.user.validators.filter((t=>t.balance.amount>0))}}catch(t){throw new Error(`getRedelegations() failed: ${t.message}`)}},async getUserInfo(){this.isUserInfoGot=!1;try{const t=await fetch(`${this.apiURL}/lottery/current/${this.user.address}/info`);if(200===t.status){const e=await t.json();return Object.assign(this.user,e.address_info),this.isUserInfoGot=!0,{success:!0}}if(400===t.status)return{success:!1,message:"User not found"};throw new Error("Failed to fetch user info. Status: "+t.status)}catch(t){return{success:!1,error:t.message}}},async registerUser(){try{const t=await fetch(`${this.apiURL}/initial-delegator/${this.user.address}/participate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:this.user.address,referral_code:this.user.referralCode,pubkey:this.user.signDoc.pub_key.value,signatures:this.user.signDoc.signature})});if(200!==t.status){if(403===t.status)return;throw new Error("Failed to register user. Status: "+t.status)}{const e=await t.json();if(!e.is_participate)throw new Error("Failed to register user.");this.user.isRegistered=!0}}catch(t){throw t}},async getUserPrizes(){try{const t=await fetch(`${this.apiURL}/${this.user.address}/prizes`);if(!t.ok)throw new Error("Failed to fetch user prizes. Status: "+t.status);const e=await t.json();this.user.prizes=e}catch(t){throw t}},async getLastWinners(){try{const t=await fetch(`${this.apiURL}/lotteries/last`);if(!t.ok)throw new Error("Failed to fetch last lottery info. Status: "+t.status);const e=await t.json();let r=new Date(e.start_at),n=new Date;n-r>=36e5&&(this.lastWinners=e.winners)}catch(t){throw t}},async getTopStakers(){try{const t=await fetch(`${this.apiURL}/stakers/ranking`);if(!t.ok)throw new Error("Failed to fetch top stakers. Status: "+t.status);const e=await t.json();this.topStakers=e}catch(t){throw t}},async getUserReferrals(){try{const t=await fetch(`${this.apiURL}/address/${this.user.address}/invited`);if(!t.ok)throw new Error("Failed to fetch user referrals. Status: "+t.status);const e=await t.json();this.user.referrals=e}catch(t){throw t}},async claimPrize(){try{const t=await fetch(`${this.apiURL}/${this.user.address}/claim-prizes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:this.user.address})});if(!t.ok){const e=await t.json();throw new Error(`Error ${t.status}: ${e.detail||"Unknown error"}`)}await t.json()}catch(t){throw t}},async getRulesContent(){try{const[t,e]=await Promise.all([fetch("https://raw.githubusercontent.com/bro-n-bro/lottery_app/main/README.md"),fetch("https://raw.githubusercontent.com/bro-n-bro/lottery_app/main/README_ru.md")]);if(!t.ok||!e.ok)throw new Error(`Failed to fetch rules. Status: EN: ${t.status}, RU: ${e.status}`);const[r,n]=await Promise.all([t.text(),e.text()]);this.markdownENRules=r,this.markdownRURules=n}catch(t){throw t}},async drawLottery(t){try{const e=await fetch(`${this.apiURL}/draw_lottery`,{method:"POST",headers:{"Content-Type":"application/json","x-token":t}});if(!e.ok){const t=await e.json();throw new Error(`Error ${e.status}: ${t.detail||"Unknown error"}`)}{const t=await e.json();t.winners.forEach((t=>this.adminWinners.push(t.address)))}}catch(e){throw e}},async createLottery(t){try{const e=new Date;e.setDate(e.getDate()+7);const r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}T16:00:00.875000`,n=await fetch(`${this.apiURL}/create_lottery`,{method:"POST",headers:{"Content-Type":"application/json","x-token":t},body:JSON.stringify({github_link:`https://raw.githubusercontent.com/bro-n-bro/lottery_app/dev-staging/public/prize_pools/round_${this.currentLottery.id+1}.json`,start_at:r})});if(!n.ok){const t=await n.json();throw new Error(`Error ${n.status}: ${t.detail||"Unknown error"}`)}}catch(e){throw e}},async getLotteryParticipants(){try{const t=await fetch(`${this.apiURL}/lottery/participants`);if(!t.ok)throw new Error("Failed to fetch lottery participants. Status: "+t.status);const e=await t.json();return[...new Set(e.addresses)]}catch(t){throw t}}}})},46399:function(t,e,r){"use strict";r.d(e,{ok:function(){return l},Y$:function(){return v},g$:function(){return s},_Q:function(){return d},NJ:function(){return C},ST:function(){return h},qo:function(){return m},nw:function(){return E},qS:function(){return _}});var n=r(55129),o=r(26776);const a=async t=>{let e=(0,n.o)();try{await window.keplr.enable(t),e.Keplr.offlineSinger=await window.getOfflineSignerAuto(t),Object.assign(e.Keplr.offlineSinger,{signAmino:e.Keplr.offlineSinger.signAmino??e.Keplr.offlineSinger.sign}),e.StargateClient=await o.SigningStargateClient.connectWithSigner(e.currentNetwork.rpc_api,e.Keplr.offlineSinger);let r=await e.Keplr.offlineSinger.getAccounts();e.user.address=r[0].address}catch(r){throw r}};var s=a;const i=async()=>{let t=(0,n.o)();try{t.user.signDoc=await window.keplr.signArbitrary(t.currentNetwork.chain_id,t.user.address,t.addressConfirmationString)}catch(e){throw e}};var l=i;const c=t=>{let e=new Date(t),r=(new Date).getTimezoneOffset()/60*-1;return new Date(e.setHours(e.getHours()+r))};var d=c;const u=(t,e)=>t/Math.pow(10,e);var C=u;const f=t=>t>.01||0===t?t.toLocaleString("ru-RU",{maximumFractionDigits:2,minimumFractionDigits:2}).replace(",","."):"<0.01";var h=f;r(98992),r(72577);const p=t=>{let e=(0,n.o)(),r=e.prices.find((e=>e.symbol.toLowerCase()===t.toLowerCase()))?.price||0;return r};const w=t=>{let e=(0,n.o)();return(t*p(e.currentNetwork.symbol)).toFixed(2)};var v=w;r(14603),r(47566),r(98721);const g=()=>{const t=new URLSearchParams(window.location.search),e=t.get("ref")||"";return e};var m=g,b=r(26270),y=r(54),k=r(90712)["Buffer"];const L=async(t,e="")=>{const r=(0,n.o)(),o=await r.StargateClient.simulate(r.user.address,t,e),a={amount:[{denom:r.currentNetwork.denom,amount:"0"}],gas:Math.round(1.6*o).toString()},s=await r.StargateClient.sign(r.user.address,t,a,e),i=b.TxRaw.encode(s).finish(),l=(0,y.sha256)(i);return r.currentTxHash=k.from(l).toString("hex"),i};var _=L;const S=async t=>{let e=(0,n.o)();return await e.StargateClient.broadcastTx(t,e.StargateClient.broadcastTimeoutMs,e.StargateClient.broadcastPollIntervalMs)};var E=S},56179:function(t,e,r){"use strict";r.d(e,{A:function(){return i}});var n=r(56768),o=r(24232),a={__name:"Loader",props:{customClass:{type:String,default:""}},setup(t){return(e,r)=>((0,n.uX)(),(0,n.CE)("div",{class:(0,o.C4)(["loader_wrap",t.customClass])},r[0]||(r[0]=[(0,n.Fv)('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="48" viewBox="0 0 44 48"><path d="M26.0062 26.2699C26.0125 28.446 24.1947 30.2407 21.9843 30.2345C19.7675 30.2282 17.9688 28.4523 17.9688 26.2636C17.9688 24.1 19.7548 22.3116 21.94 22.2991C24.1884 22.2866 26.0062 24.0625 26.0062 26.2699ZM23.327 26.2574C23.3207 25.5383 22.7127 24.9442 21.978 24.9505C21.2496 24.9567 20.6479 25.5633 20.6542 26.2824C20.6606 27.0015 21.2749 27.6018 22.0033 27.5893C22.7317 27.5768 23.3334 26.9765 23.327 26.2574Z" fill="currentColor" id="circle"></path><path d="M22.0162 -8.94272e-05C22.7952 -8.94272e-05 23.5806 -0.00634268 24.3596 -8.94272e-05C25.487 0.0124171 26.095 0.900379 25.6643 1.93217C24.8726 3.83316 24.0619 5.72789 23.2639 7.62888C23.0295 8.19168 22.6179 8.5231 21.9908 8.5231C21.3575 8.5231 20.9584 8.19168 20.7178 7.62888C19.9134 5.71539 19.09 3.80814 18.292 1.88839C17.8866 0.912886 18.5073 0.0124171 19.5777 -8.94272e-05C20.3884 -0.00634268 21.2054 -8.94272e-05 22.0162 -8.94272e-05Z" fill="currentColor" id="arrow"></path><path d="M29.1603 5.70922C28.3812 7.56018 27.6402 9.32985 26.8991 11.0933C25.7401 13.851 24.581 16.6086 23.4346 19.3726C23.308 19.6727 23.1813 19.7603 22.8393 19.729C22.2756 19.6727 21.6929 19.6852 21.1292 19.7228C20.8378 19.7415 20.6795 19.7228 20.5528 19.4164C18.7034 14.9703 16.8349 10.5305 14.9729 6.08441C14.9285 5.97185 14.8905 5.85304 14.8398 5.69671C15.4859 5.50911 16.1066 5.33402 16.7589 5.14642C17.272 6.36581 17.7597 7.54142 18.2664 8.70453C19.2037 10.8619 21.6549 11.7811 23.764 10.7681C24.676 10.3304 25.3221 9.63001 25.7148 8.71078C26.1708 7.65398 26.6268 6.59718 27.0448 5.53413C27.1778 5.2027 27.3235 5.14642 27.6465 5.25898C28.1215 5.43407 28.6156 5.55289 29.1603 5.70922Z" fill="currentColor" id="loader_part_1"></path><path d="M31.6433 6.73474C36.1592 8.99842 39.5034 12.2939 41.7772 16.74C40.9792 17.0651 40.2381 17.3715 39.4908 17.6779C35.6526 19.2475 31.8143 20.8108 27.9825 22.3929C27.6721 22.518 27.5011 22.5242 27.2731 22.2303C26.9438 21.8113 26.5574 21.4174 26.1394 21.0922C25.829 20.8546 25.7784 20.6795 25.9304 20.3231C27.5138 16.5836 29.0845 12.8379 30.6553 9.09222C30.972 8.32932 31.295 7.56642 31.6433 6.73474Z" fill="currentColor" id="loader_part_2"></path><path d="M42.8156 19.235C44.3926 23.9249 44.3926 28.6024 42.8029 33.3423C41.9352 32.9922 41.0991 32.6545 40.2694 32.3105C36.5072 30.7722 32.745 29.2277 28.9828 27.7019C28.6471 27.5643 28.5965 27.408 28.6218 27.0766C28.6661 26.5013 28.6091 25.9197 28.6281 25.3382C28.6345 25.1881 28.7231 24.963 28.8372 24.9129C33.4291 23.0182 38.0336 21.1422 42.6319 19.2663C42.6762 19.2475 42.7269 19.2475 42.8156 19.235Z" fill="currentColor" id="loader_part_3"></path><path d="M31.6373 45.8051C31.1053 44.542 30.6049 43.3413 30.0982 42.1344C28.7048 38.814 27.3114 35.4872 25.9053 32.1668C25.7723 31.8478 25.8167 31.6915 26.089 31.4726C26.5387 31.1037 26.9377 30.6722 27.3304 30.2345C27.4951 30.0532 27.6091 29.9906 27.8434 30.0844C32.3974 31.9541 36.9513 33.8176 41.5115 35.6873C41.5812 35.7186 41.6445 35.7561 41.7585 35.8187C39.5037 40.2397 36.1596 43.5414 31.6373 45.8051Z" fill="currentColor" id="loader_part_4"></path><path d="M29.1349 46.8244C24.3593 48.3877 19.6217 48.3877 14.8271 46.8119C15.1248 46.0928 15.4035 45.4112 15.6885 44.7358C17.3036 40.89 18.925 37.0505 20.5211 33.1985C20.6605 32.8546 20.8125 32.7733 21.1798 32.8108C21.7308 32.8671 22.2882 32.8484 22.8456 32.8046C23.1433 32.7796 23.2953 32.8233 23.4219 33.1172C25.2714 37.5633 27.1398 42.0031 29.0019 46.4429C29.0526 46.5555 29.0842 46.6743 29.1349 46.8244Z" fill="currentColor" id="loader_part_5"></path><path d="M2.2041 35.7936C4.49689 34.8557 6.71367 33.9489 8.93046 33.0422C11.2993 32.073 13.668 31.1099 16.0242 30.1282C16.3155 30.0031 16.4739 30.0281 16.6955 30.2908C17.0819 30.7473 17.5569 31.1287 17.9686 31.5602C18.0699 31.6665 18.1586 31.8916 18.1143 32.0104C16.2142 36.569 14.2951 41.1277 12.3823 45.68C12.376 45.6925 12.3633 45.7051 12.3 45.7676C7.84107 43.5664 4.49689 40.2585 2.2041 35.7936Z" fill="currentColor" id="loader_part_6"></path><path d="M1.19725 33.3173C-0.398835 29.3903 -0.398835 23.0495 1.20358 19.2225C1.36193 19.2788 1.52027 19.3288 1.67861 19.3913C6.09951 21.1985 10.5204 23.0119 14.954 24.8129C15.315 24.963 15.4037 25.113 15.3593 25.5007C15.296 26.0573 15.3403 26.6263 15.3783 27.1891C15.391 27.4267 15.3657 27.5581 15.125 27.6581C10.5521 29.5216 5.97917 31.3913 1.41259 33.2548C1.34926 33.2798 1.28592 33.2923 1.19725 33.3173Z" fill="currentColor" id="loader_part_7"></path><path d="M2.24219 16.7525C4.26896 12.3939 8.46818 8.46689 12.3634 6.79102C12.6357 7.44135 12.9144 8.08544 13.1868 8.73578C14.8082 12.594 16.4233 16.4586 18.051 20.3168C18.1904 20.6482 18.203 20.8483 17.861 21.0922C17.443 21.3924 17.063 21.7738 16.7463 22.1865C16.5056 22.4992 16.3219 22.5367 15.9672 22.3929C12.2557 20.8546 8.53152 19.3413 4.81366 17.8155C3.97128 17.4591 3.12257 17.1151 2.24219 16.7525Z" fill="currentColor" id="loader_part_8"></path></svg>',1)]),2))}};const s=a;var i=s},63935:function(t,e,r){"use strict";t.exports=r.p+"img/logo.dd01cfc5.svg"},78982:function(){},47790:function(){},73776:function(){},21638:function(){},92668:function(){},77965:function(){},66089:function(){},79368:function(){},77667:function(){},76447:function(){},64688:function(){},51069:function(){},15340:function(){},79838:function(){}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,a){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],a=t[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(i=!1,a<s&&(s=a));if(i){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,o,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{458:"e5419bef",655:"b2197551"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{458:"95806027",655:"1ff9c493"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="bro_lottery:";r.l=function(n,o,a,s){if(t[n])t[n].push(o);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+a){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+a),i.src=n),t[n]=[o];var C=function(e,r){i.onerror=i.onload=null,clearTimeout(f);var o=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},f=setTimeout(C.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=C.bind(null,i.onerror),i.onload=C.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",r.nc&&(s.nonce=r.nc);var i=function(r){if(s.onerror=s.onload=null,"load"===r.type)o();else{var n=r&&r.type,i=r&&r.target&&r.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+n+": "+i+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,s.parentNode&&s.parentNode.removeChild(s),a(l)}};return s.onerror=s.onload=i,s.href=e,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],a=o.getAttribute("data-href");if(a===t||a===e)return o}},n=function(n){return new Promise((function(o,a){var s=r.miniCssF(n),i=r.p+s;if(e(s,i))return o();t(n,i,null,o,a)}))},o={524:0};r.f.miniCss=function(t,e){var r={458:1,655:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=n(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};r.f.j=function(e,n){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=t[e]=[r,n]}));n.push(o[2]=a);var s=r.p+r.u(e),i=new Error,l=function(n){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};r.l(s,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var d=l(r)}for(e&&e(n);c<s.length;c++)a=s[c],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(d)},n=self["webpackChunkbro_lottery"]=self["webpackChunkbro_lottery"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(41598)}));n=r.O(n)})();
//# sourceMappingURL=app.0cbf98ad.js.map