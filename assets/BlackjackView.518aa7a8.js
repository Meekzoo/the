import{T as x,B}from"./ToastNotification.e78c39a5.js";import{_ as b,o as r,c as n,F as v,d as k,b as a,t as o,g,f,p as H,h as w,r as p,a as u,n as m,i as V}from"./index.7bd5a6e6.js";const N={props:["cards","dealerHide"]},_=e=>(H("data-v-bc4d1ffa"),e=e(),w(),e),S={class:"flex justify-center gap-5 w-full h-2/3 flex-wrap"},T={class:""},j={class:"ml-auto"},R={key:0,class:"cardContainer"},P=_(()=>a("div",{class:""},"?",-1)),D=_(()=>a("div",{class:"text-center text-xl"},"?",-1)),I=_(()=>a("div",{class:"ml-auto"},"?",-1)),E=[P,D,I];function A(e,t,l,h,s,i){return r(),n("div",S,[(r(!0),n(v,null,k(l.dealerHide?l.cards.slice(0,1):l.cards,d=>(r(),n("div",{key:d.id,class:"cardContainer"},[a("div",T,o(d.slice(2,4)),1),a("div",{class:"text-center text-3xl",style:g(d[0]==="\u2666"||d[0]==="\u2665"?"color: red;":"color: black;")},o(d[0]),5),a("div",j,o(d.slice(2,4)),1)]))),128)),l.dealerHide?(r(),n("div",R,E)):f("",!0)])}const G=b(N,[["render",A],["__scopeId","data-v-bc4d1ffa"]]),J={props:["points"],data(){return{playing:!1,selectedBet:25e3,lastReward:0,blackjackBets:[25e3,5e4],deckCards:["\u2660 10","\u2665 10","\u2666 10","\u2663 10","\u2660 2","\u2665 2","\u2666 2","\u2663 2","\u2660 3","\u2665 3","\u2666 3","\u2663 3","\u2660 4","\u2665 4","\u2666 4","\u2663 4","\u2660 5","\u2665 5","\u2666 5","\u2663 5","\u2660 6","\u2665 6","\u2666 6","\u2663 6","\u2660 7","\u2665 7","\u2666 7","\u2663 7","\u2660 8","\u2665 8","\u2666 8","\u2663 8","\u2660 9","\u2665 9","\u2666 9","\u2663 9","\u2660 A","\u2665 A","\u2666 A","\u2663 A","\u2660 J","\u2665 J","\u2666 J","\u2663 J","\u2660 Q","\u2665 Q","\u2666 Q","\u2663 Q","\u2660 K","\u2665 K","\u2666 K","\u2663 K"],dealerCards:[],playerCards:[],discardedCards:[],dealerHide:!0,playerHandValue:0,cardsInPlay:[],enableButtons:!1,dealerHandValue:-1,continueButtonEnabled:!1,action:!1,shuffle:!1}},components:{ToastNotification:x,BetSelectButton:B,BlackjackCardTable:G},methods:{startGame(){this.selectedBet=Number(this.$refs.betSelect.$data.value),!(this.points-this.selectedBet<0)&&(this.enableButtons=!0,this.$emit("changePoints",-this.selectedBet),this.playing=!0,this.giveDealerCards(),this.givePlayerCards())},hit(){this.playerHandValue>20||(this.playerCards.push(this.fetchCard()),this.playerHandValue=this.calculateHandValue(this.playerCards))},stand(){for(this.dealerHide=!1;this.calculateHandValue(this.dealerCards)<17;)this.dealerCards.push(this.fetchCard());const e=this.calculateHandValue(this.dealerCards);this.dealerHandValue=e;let t=this.selectedBet;this.playerHandValue>21&&e>21||(this.playerHandValue>21?t-=this.selectedBet:e>21?t+=this.selectedBet:this.playerHandValue>e?t+=this.selectedBet:e>this.playerHandValue&&(t-=this.selectedBet)),this.action=!0,this.$emit("changePoints",t),this.lastReward=t,this.enableButtons=!1,this.continueButtonEnabled=!0,setTimeout(()=>{this.shuffle||(this.action=!1)},1e3)},startNewRound(){this.points-this.selectedBet<0||(this.$emit("changePoints",-this.selectedBet),this.continueButtonEnabled=!1,this.dealerHandValue=-1,this.clearBothHands(),this.discardedCards=this.discardedCards.concat(this.cardsInPlay),this.cardsInPlay=[],this.giveDealerCards(),this.givePlayerCards(),this.enableButtons=!0)},calculateHandValue(e){let t=0,l=0;for(let h=0;h<e.length;h++){const s=e[h].slice(2,4);s==="A"?t++:isNaN(s)?l+=10:l+=Number(s)}return l+=t,l<=11&&t>0&&(l+=10),l},givePlayerCards(){this.playerCards.push(this.fetchCard()),this.playerCards.push(this.fetchCard()),this.playerHandValue=this.calculateHandValue(this.playerCards)},giveDealerCards(){this.dealerHide=!0,this.dealerCards.push(this.fetchCard()),this.dealerCards.push(this.fetchCard())},clearBothHands(){this.playerCards=[],this.dealerCards=[],this.playerHandValue=0},fetchCard(){this.deckCards.length===0&&this.shuffleDiscardToDeck();let e=this.deckCards.splice(Math.floor(Math.random()*this.deckCards.length),1)[0];return this.cardsInPlay.push(e),e},shuffleDiscardToDeck(){this.deckCards=this.discardedCards,this.discardedCards=[],this.shuffle=!0,this.action=!0;for(let e=this.deckCards.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),l=this.deckCards[e];this.deckCards[e]=this.deckCards[t],this.deckCards[t]=l}setTimeout(()=>{this.shuffle=!1,this.action=!1},3e3)}}},K={class:"flex flex-col min-h-screen sm:h-screen w-screen justify-center items-center transition-all"},M={class:"flex flex-col sm:flex-row gap-5 w-full sm:w-2/3 h-auto justify-center transition-transform"},Q={class:"flex flex-row flex-wrap sm:flex-col sm:w-1/3 justify-center items-center gap-5"},z={class:"flex flex-col items-center"},F=a("h2",{class:"text-[2em]"},"Blackjack",-1),O={id:"lastReward",class:"font-mono"},L={class:"flex flex-col sm:flex-row gap-5 transition-all"},Y=["disabled"],q={class:"flex flex-col sm:flex-row gap-5 transition-all"},U={key:0,class:"btn-group btn-group-horizontal"},W={key:0,id:"game",class:"flex flex-col items-center w-full px-5 sm:w-5/12 gap-3"},X=a("div",{class:"divider"},null,-1),Z=V('<div tabindex="0" class="collapse rounded-box"><div class="collapse-title text-2xl font-medium text-center p-5"> Gain per event </div><div class="collapse-content"><div class="overflow-x-auto"><table class="table w-full"><thead><tr><th>Event</th><th>Reward</th></tr></thead><tbody><tr><td>Round start</td><td>-Original bet</td></tr><tr><td>Tie</td><td>+Original bet</td></tr><tr><td>Failure</td><td>Nothing</td></tr><tr><td>Victory</td><td>+Original bet x 2</td></tr></tbody></table></div></div></div>',1);function $(e,t,l,h,s,i){const d=p("ToastNotification"),y=p("BetSelectButton"),C=p("BlackjackCardTable");return r(),n("main",K,[u(d,{shuffle:s.shuffle,message:"You earned "+s.lastReward+" points!",class:m(["transition-all",s.action?"translate-x-0":"translate-x-96"])},null,8,["shuffle","message","class"]),a("div",M,[a("div",Q,[a("div",z,[F,a("p",O,"Last reward: "+o(s.lastReward),1)]),a("div",L,[u(y,{class:m(s.playing?"select-disabled":"select-active"),bets:s.blackjackBets,id:"betSelect",ref:"betSelect",disabled:s.playing},null,8,["class","bets","disabled"]),a("button",{class:"btn btn-primary transition-all",onClick:t[0]||(t[0]=(...c)=>i.startGame&&i.startGame(...c)),ref:"spinButton",disabled:s.playing}," Play ",8,Y)]),a("div",q,[s.enableButtons?(r(),n("div",U,[a("button",{class:"btn",onClick:t[1]||(t[1]=(...c)=>i.hit&&i.hit(...c)),ref:"spinButton"},"Hit",512),a("button",{class:"btn",onClick:t[2]||(t[2]=(...c)=>i.stand&&i.stand(...c)),id:"autospinButton"}," Stand ")])):f("",!0),s.continueButtonEnabled?(r(),n("button",{key:1,class:"btn btn-primary transition-all",onClick:t[3]||(t[3]=(...c)=>i.startNewRound&&i.startNewRound(...c)),ref:"spinButton"}," Next Round ",512)):f("",!0)])]),s.playing?(r(),n("div",W,[a("h1",null,o(s.dealerHandValue<0?"?":s.dealerHandValue),1),u(C,{dealerHide:s.dealerHide,cards:s.dealerCards},null,8,["dealerHide","cards"]),X,u(C,{dealerHide:!1,cards:s.playerCards},null,8,["cards"]),a("h1",null,o(s.playerHandValue),1)])):f("",!0)]),Z])}const se=b(J,[["render",$]]);export{se as default};
