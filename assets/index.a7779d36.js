import{d as e,c as o,a as r}from"./vendor.a79ba823.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();var t=e({name:"App"});const s=o('<h1>Pure Decentralized Application</h1><div class="normal"> The fuzz word DApp (<b>D</b>ecentralized <b>A</b>pplication) is usually used to describe the blockchain applications whose core logic resides in smart contracts. Smart contracts are usually opensourced, peer-reviewed and audited, and they run on unstoppable anti-censorship blockchains. Thus DApps are much more decentralized than close-source softwares running on servers owned by a single company.<br> However, applications are far more than smart contracts. They absolutely need user interfaces, which are web pages deployed at specific domains. These web pages interact with smart contracts through wallets such as MetaMask, and also interact with some backend server for historical and statistical informations and optimum choices. For example, UniSwap needs backend server to draw candlestick charts and to compute optimum path in swapping two types of assets.<br> These frontend/backend stuffs make current DApps not so decentralized. Actually they are just semi-DApps because there are so many possibilities of single-point failure: DNS problems, website crashing, censorship of the backend server, etc.<br> Pure Decentralized Applications (Pure DApps) are a kind of blockchain applications which avoid the centralization problems of frontend/backend. They have the following features: <ol><li>The frontend is opensourced and free to be deployed at any domain, or on IPFS.</li><li>The backend is not needed, or is opensourced to allow anybody deploy it at anywhere.</li></ol> Pure DApps are encouraged (but not required) in smartBCH&#39;s ecosystem. Its first pure dapp is the explorer smartscan.cash. Unlike the other blockchain explorers, smartscan.cash does not need a specific backend to work. It provides services by just connecting to a full-node client of smartBCH.<br> This website aims to boost Pure DApps&#39; development and adoption on smartBCH. More information will be provided soon. </div>',2);t.render=function(e,o,r,t,n,a){return s},r(t).mount("#app");