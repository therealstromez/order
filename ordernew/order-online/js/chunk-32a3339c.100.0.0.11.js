(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32a3339c"],{"1d92":function(t,e,n){"use strict";var a=n("9478"),s=n.n(a);s.a},"2d22":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cuk-select",{staticClass:"slt-language",class:{"hide-border":t.hideBorder},attrs:{value:t.value,items:t.languageItems},on:{change:function(e){return t.sltLanguage_Change(e)}},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item;return[n("div",{staticClass:"d-flex align-center"},[n("div",{staticClass:"slt-flag",class:a.value}),t.onlyFlag?t._e():n("span",{staticClass:"ml-2"},[t._v(" "+t._s(a.text)+" ")])])]}},{key:"item",fn:function(e){var a=e.item;return[n("div",{staticClass:"d-flex align-center"},[n("div",{staticClass:"slt-flag",class:a.value}),n("span",{staticClass:"ml-2"},[t._v(" "+t._s(a.text)+" ")])])]}}])})},s=[],r=(n("4de4"),n("caad"),n("2532"),n("d2d4")),i={name:"cuk-select-language",model:{prop:"value",event:"change"},props:{value:String,languages:Array,onlyFlag:Boolean,hideBorder:Boolean},data:function(){return{}},computed:{languageItems:function(){var t,e=this,n=[],a=[{value:r["b"].DE,text:this.$t("resourcesCommon.German")},{value:r["b"].EN,text:this.$t("resourcesCommon.English")},{value:r["b"].KH,text:this.$t("resourcesCommon.Cambodian")},{value:r["b"].LA,text:this.$t("resourcesCommon.Laos")},{value:r["b"].TH,text:this.$t("resourcesCommon.Thai")},{value:r["b"].VN,text:this.$t("resourcesCommon.Vietnamese")},{value:r["b"].CN,text:this.$t("resourcesCommon.Chinese")}];return(null===(t=this.languages)||void 0===t?void 0:t.length)>0&&(n=a.filter((function(t){return e.languages.includes(t.value)}))),n}},methods:{sltLanguage_Change:function(t){this.$emit("change",t)}}},o=i,c=(n("914f"),n("2877")),l=Object(c["a"])(o,a,s,!1,null,"1f4c6978",null);e["a"]=l.exports},"4b85":function(t,e,n){},"4ca6":function(t,e,n){"use strict";n("a9e3");var a=n("15fd"),s=n("5530"),r=(n("ff44"),n("132d")),i=n("a9ad"),o=n("7560"),c=n("f2e7"),l=n("2b0e"),u=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=n("fe6c"),d=n("58df"),f=n("80d2");e["a"]=Object(d["a"])(i["a"],Object(h["b"])(["left","bottom"]),o["a"],c["a"],u).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(s["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(f["f"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),n=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),a=this.$createElement("span",n,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[a]):a},genBadgeContent:function(){if(!this.dot){var t=Object(f["o"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(r["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(f["o"])(this)],s=this.$attrs,r=(s["aria-atomic"],s["aria-label"],s["aria-live"],s.role,s.title,Object(a["a"])(s,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:r,class:this.classes},n)}})},5269:function(t,e,n){"use strict";var a=n("54ec"),s=n.n(a);s.a},"54ec":function(t,e,n){},"82dd":function(t,e,n){"use strict";var a=n("c89d"),s=n.n(a);s.a},"8f7a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-container"},[n("div",{staticClass:"container d-flex flex-column align-center"},[n("div",{staticClass:"shop-logo",style:t.logoStyle}),n("div",{staticClass:"shop-status"},[t.open?n("div",{staticClass:"openning"},[n("b",[t._v("● "+t._s(t.$t("resourcesHome.Openning")))])]):n("div",{staticClass:"red--text"},[n("b",[t._v("● "+t._s(t.$t("resourcesHome.Closing")))])])]),n("div",{staticClass:"shop-infor"},[n("pre",{staticClass:"shop-content text-center"},[t._v(t._s(t.currentBranch.FooterContent)+"\n      ")])]),n("div",{staticClass:"shop-social"},t._l(t.channels,(function(t,e){return n("social-item",{key:e,attrs:{social:t.Type,href:t.Value}})})),1),n("div",{staticClass:"shop-copyright text-center m-0"},[t._v("Copyright © "+t._s(t.year)+" by CUKCUK")])])])},s=[],r=(n("dca8"),n("5530")),i=n("f4e0"),o=n("2f62"),c=n("b7b9"),l=n("7ebc"),u=n("25bf"),h={name:"cuk-footer",components:{SocialItem:i["a"]},data:function(){return{year:null,EnumSocial:Object.freeze(u["D"])}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])({currentBranch:c["g"],branchs:c["c"]})),{},{logoStyle:function(){var t="";return this.currentBranch&&(t=this.currentBranch.LogoFileResourceID),""!=t&&"00000000-0000-0000-0000-000000000000"!=t?{"background-image":"url(".concat(l["a"].getLogoImage(t),")")}:{display:"none"}},channels:function(){var t=[];return this.currentBranch&&this.currentBranch.SocialNetwork&&this.currentBranch.SocialNetwork.length>0&&(t=this.currentBranch.SocialNetwork),t},open:function(){var t=this.currentBranch;return l["a"].isBranchOpen(t)}}),created:function(){this.year=(new Date).getFullYear()}},d=h,f=(n("9e10"),n("2877")),g=Object(f["a"])(d,a,s,!1,null,"0f46d507",null);e["a"]=g.exports},"914f":function(t,e,n){"use strict";var a=n("deec"),s=n.n(a);s.a},9478:function(t,e,n){},"9e10":function(t,e,n){"use strict";var a=n("cb8d"),s=n.n(a);s.a},a523:function(t,e,n){"use strict";n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("20f6"),n("4b85"),n("a15b"),n("498a");var a=n("2b0e");function s(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,s=n.data,r=n.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var i=s.attrs;if(i){s.attrs={};var o=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,r)}})}var r=n("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,s=e.data,i=e.children,o=s.attrs;return o&&(s.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),i)}})},b689:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("v-container",{staticClass:"d-flex justify-space-between align-center"},[n("a",{staticClass:"header-logo",style:t.logoStyle,on:{click:t.gotoHome}},[n("span",{staticClass:"d-none d-sm-inline box-text-home"},[t._v(t._s(t.textHome))])]),n("div",{staticClass:"d-flex align-center"},[n("cuk-select-branch",{staticClass:"slt-branch",attrs:{value:t.branchID,lstbranchs:t.lstbranchs},on:{change:function(e){return t.sltLBranch_Change(e)}}}),n("v-btn",{staticClass:"btn-history text-transform-none",attrs:{text:""},on:{click:t.btnHistory_Click}},[n("span",{staticClass:"cuk-icon large icon-order"})]),n("v-btn",{staticClass:"d-none d-md-block btn-cart text-transform-none mr-3",attrs:{text:""},on:{click:t.btnCart_Click}},[n("v-badge",{staticClass:"z-index",attrs:{value:t.numberCartItems,color:"primary",content:t.numberCartItems}},[n("span",{staticClass:"cuk-icon large icon-cart-new"})])],1),n("cuk-select-language",{staticClass:"slt-language",attrs:{"hide-border":"","only-flag":t.onlyFlag,value:t.language,languages:t.languages},on:{change:function(e){return t.sltLanguage_Change(e)}}})],1)])],1)},s=[],r=(n("7db0"),n("4160"),n("159b"),n("5530")),i=n("2f62"),o=n("b7b9"),c=n("7921"),l=n("93ad"),u=n("e5c6"),h=n("7ebc"),d=n("748a"),f=n("6e62"),g=n("2d22"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cuk-select",{staticClass:"slt-branch",attrs:{value:t.value,items:t.branchItems},on:{change:function(e){return t.sltLBranch_Change(e)}},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item;return[n("div",{staticClass:"d-flex align-center box-over"},[n("div",{staticClass:"slt-map"}),n("div",{staticClass:"ml-2 box-map"},[t._v(" "+t._s(a.text)+" ")])])]}},{key:"item",fn:function(e){var a=e.item;return[n("div",{staticClass:"d-flex align-center"},[n("div",{staticClass:"ml-2"},[t._v(" "+t._s(a.text)+" ")])])]}}])})},m=[],b=(n("99af"),n("4de4"),n("a15b"),{name:"cuk-select-branch",model:{prop:"value",event:"change"},props:{value:String,lstbranchs:Array},data:function(){return{}},computed:{branchItems:function(){var t,e=[];if((null===(t=this.lstbranchs)||void 0===t?void 0:t.length)>0)for(var n=0;n<this.lstbranchs.length;n++){var a=this.lstbranchs[n].Address,s=this.lstbranchs[n].Street,r=this.lstbranchs[n].WardOrCommune,i=this.lstbranchs[n].District,o=this.lstbranchs[n].ProvinceOrCity,c=[a,s,r,i,o].filter(Boolean).join(", "),l="".concat(this.lstbranchs[n].BranchName," (").concat(c,")"),u={value:this.lstbranchs[n]["BranchID"],text:l};e.push(u)}return e}},methods:{sltLBranch_Change:function(t){this.$emit("change",t)}}}),p=b,C=(n("5269"),n("2877")),y=Object(C["a"])(p,v,m,!1,null,"822c3942",null),k=y.exports,B={name:"cuk-header",components:{CukSelectLanguage:g["a"],CukSelectBranch:k},mixins:[d["a"]],computed:Object(r["a"])(Object(r["a"])({},Object(i["b"])({orderInfo:o["t"],currentBranch:o["g"],language:o["p"],branchID:null,orderHistory:o["s"]})),{},{onlyFlag:function(){return!0},languages:function(){var t,e;return null!==(t=null===(e=this.currentBranch)||void 0===e?void 0:e.Languages)&&void 0!==t?t:[]},lstbranchs:function(){var t;return null!==(t=this.branchs)&&void 0!==t?t:[]},branchID:function(){var t,e;return null!==(t=null===(e=this.currentBranch)||void 0===e?void 0:e.BranchID)&&void 0!==t?t:null},numberOrders:function(){var t=0,e=99;return this.orderHistory&&this.orderHistory.length>0&&(t=this.orderHistory.length),t>e&&(t="".concat(e,"+")),t},numberCartItems:function(){var t=0,e=99;return this.orderInfo&&this.orderInfo.ListInventoryItem&&(t=f["a"].numberItemInOrder(this.orderInfo)),t>e&&(t="".concat(e,"+")),t},textHome:function(){var t=this.$t("resourcesHome.Home"),e="";return this.currentBranch&&(e=this.currentBranch.LogoFileResourceID),""!=e&&"00000000-0000-0000-0000-000000000000"!=e&&(t=""),t},logoStyle:function(){var t="";return this.currentBranch&&(t=this.currentBranch.LogoFileResourceID),""!=t&&"00000000-0000-0000-0000-000000000000"!=t?{"background-image":"url(".concat(h["a"].getLogoImage(t),")"),"background-size":"contain","background-position-x":"unset"}:""}}),methods:{btnCart_Click:function(){l["a"].$emit(u["l"],!0)},btnHistory_Click:function(){l["a"].$emit(u["o"])},sltLanguage_Change:function(t){this.$store.dispatch(c["A"],t)},sltLBranch_Change:function(t){var e=this;if(this.branchs){var n=this.branchs.find((function(e){if(e.BranchID==t)return e}));n&&this.$store.dispatch(c["y"],n).then((function(){var t=e.orderInfo;t.ProvinceId=null,t.DistrictId=null;var a=n;switch(a.TypeDeliveryAmount){case 0:t.ShipAmount=0;break;case 1:t.ShipAmount=a.DeviveryAmount;break;case 2:var s=JSON.parse(a.ListShippingAddressSupport);if(s){for(var r=0;r<s.length;r++)if(s[r].BranchID===n.BranchID&&s[r].ProvinceOrCityID===n.LocationID&&s[r].DeliveryAmount){var i=JSON.parse(s[r].DeliveryAmount);i.forEach((function(n){n.DistrictID===e.districtSelected.LocationID&&(t.ShipAmount=n.DeliveryAmount)}))}}else t.ShipAmount=0;break;default:t.ShipAmount=0;break}e.$store.dispatch(c["D"],t)})).then((function(){var t=Object.assign({},e.$route.query);e.$router.push({path:"/",query:Object.assign(t,{b:"".concat(n.BranchID)})})}))}}}},_=B,x=(n("1d92"),n("6544")),O=n.n(x),S=n("4ca6"),D=n("8336"),I=n("a523"),$=Object(C["a"])(_,a,s,!1,null,"38cbe563",null);e["a"]=$.exports;O()($,{VBadge:S["a"],VBtn:D["a"],VContainer:I["a"]})},c89d:function(t,e,n){},cb8d:function(t,e,n){},deec:function(t,e,n){},f4e0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.href?n("a",{staticClass:"social-item",class:t.classes,attrs:{href:t.hrefFull,target:"_blank"}}):t._e()},s=[],r=(n("caad"),n("a9e3"),n("2532"),n("2ca0"),n("25bf")),i={name:"social-item",props:{social:{type:Number,default:r["D"].Facebook,validator:function(t){return[r["D"].Facebook,r["D"].Zalo,r["D"].Youtube,r["D"].Instagram,r["D"].TikTok].includes(t)}},href:{type:String,default:""},inactive:{type:Boolean,default:!1}},computed:{classes:function(){return{facebook:this.social==r["D"].Facebook,zalo:this.social==r["D"].Zalo,youtube:this.social==r["D"].Youtube,instagram:this.social==r["D"].Instagram,tiktok:this.social==r["D"].TikTok}},hrefFull:function(){if(this.inactive)return"";var t=this.href;return t.startsWith("https://")||t.startsWith("http://")||(t="https://".concat(t)),t}},methods:{}},o=i,c=(n("82dd"),n("2877")),l=Object(c["a"])(o,a,s,!1,null,"8a2e4e30",null);e["a"]=l.exports},ff44:function(t,e,n){}}]);