(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{32:function(e,t,a){e.exports=a(45)},37:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=a(7),s=a(8),i=a(11),u=a(10),d=(a(37),a(38),a(57)),h=a(4),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=a(21),g=[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"}],m=function(e){var t=e.reverse,a=e.alfabeticSort,n=e.reset,r=e.sortByLength,o=e.selectLength,c=e.selectedOption;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{type:"button",onClick:t},"Reverse"),l.a.createElement(d.a,{type:"button",onClick:a},"Sort by alfabet"),l.a.createElement(d.a,{type:"button",onClick:n},"Reset"),l.a.createElement(d.a,{type:"button",onClick:r},"Sort by length"),l.a.createElement(b.a,{onChange:o,options:g,value:c,className:"app__select-styles"}))},f=function(e){var t=e.good;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"app__list-item"},t))},v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={goods:Object(h.a)(p),originalGoods:Object(h.a)(p),selectedOption:null},e.handleCLickReverse=function(){e.setState((function(e){return{goods:Object(h.a)(e.goods).reverse()}}))},e.handleClickAlfabeticSort=function(){e.setState((function(e){return{goods:Object(h.a)(e.goods).sort()}}))},e.handleClickReset=function(){e.setState((function(e){return{goods:e.originalGoods,selectedOption:null}}))},e.handleClickLengthSort=function(){e.setState((function(e){return{goods:Object(h.a)(e.goods).sort((function(e,t){return e.length-t.length})),selectedOption:""}}))},e.handleSelectChange=function(t){e.setState((function(e){return{selectedOption:t,goods:Object(h.a)(e.originalGoods).filter((function(e){return e.length>=t.value}))}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.goods;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"app__filters"},l.a.createElement(m,{reverse:this.handleCLickReverse,alfabeticSort:this.handleClickAlfabeticSort,reset:this.handleClickReset,sortByLength:this.handleClickLengthSort,selectLength:this.handleSelectChange,selectedOption:this.state.selectedOption})),l.a.createElement("ul",{className:"app__list"},e.map((function(e){return l.a.createElement(f,{key:e,good:e})}))))}}]),a}(l.a.PureComponent),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isHidden:!0},e.handleStart=function(){e.setState((function(e){return{isHidden:!e.isHidden}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.isHidden;return l.a.createElement("div",{className:"app"},l.a.createElement("h1",null,"Goods"),l.a.createElement("div",{className:"app__Inner"},e?l.a.createElement(d.a,{type:"button",onClick:this.handleStart,className:e?"app__button-active":"app__button-hidden"},"Start"):l.a.createElement(v,null)))}}]),a}(l.a.PureComponent);o.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9edf4921.chunk.js.map