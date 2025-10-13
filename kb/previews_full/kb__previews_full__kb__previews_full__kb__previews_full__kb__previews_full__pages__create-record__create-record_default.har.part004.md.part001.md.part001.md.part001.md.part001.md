### kb/previews_full/kb__previews_full__kb__previews_full__kb__previews_full__pages__create-record__create-record_default.har.part004.md.part001.md.part001.md.part001.md (part 001)

```md
### kb/previews_full/kb__previews_full__kb__previews_full__pages__create-record__create-record_default.har.part004.md.part001.md.part001.md (part 001)

```md
### kb/previews_full/kb__previews_full__pages__create-record__create-record_default.har.part004.md.part001.md (part 001)

```md
### kb/previews_full/pages__create-record__create-record_default.har.part004.md (part 001)

```md
### pages/create-record/create-record_default.har (part 004)

```har
nter()),s(),c(\"ngIf\",a.isMasterInfoButtonVisible()),s(),c(\"ngIf\",a.resettable()),s(),c(\"ngIf\",a.isSelected()!==void 0)}}var Ai=(()=>{let t=class t{constructor(i,o){n(this,\"payment\");n(this,\"translate\");n(this,\"staff\",B(null,{transform:i=>Array.isArray(i)&&i.length===1?i[0]:i}));n(this,\"infoVisible\",B(!0));n(this,\"resettable\",B(!1));n(this,\"overrideShowRatingAndTag\",B(!1));n(this,\"isSelected\",B(void 0));n(this,\"alignActionsCenter\",B(!1));n(this,\"disabled\",!1);n(this,\"showInfo\",new w);n(this,\"resetButtonClick\",new w);n(this,\"showRating\",!0);n(this,\"buildMasterInfoPath\",ye);n(this,\"tagType\",Ce);n(this,\"formControl\",new ne(!1));n(this,\"withManyMasters\",M(()=>Array.isArray(this.staff())));n(this,\"names\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?i.map(r=>this.translate.transform(r.name)).join(\", \"):(o=i==null?void 0:i.name)!=null?o:\"staff\"}));n(this,\"avatar\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?\"\":(o=i==null?void 0:i.avatar)!=null?o:\"\"}));n(this,\"avatars\",M(()=>{let i=this.staff();return Array.isArray(i)?i.map(o=>({name:o.name,url:o.avatar,isAny:o.id===wt})):[]}));n(this,\"positionsOrSpecialization\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?i.map(r=>r.positionOrSpecialization).filter(Boolean).join(\", \"):(o=i==null?void 0:i.positionOrSpecialization)!=null?o:null}));n(this,\"rating\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?0:(o=i==null?void 0:i.rating)!=null?o:0}));n(this,\"isMasterInfoButtonVisible\",M(()=>{let i=this.staff();return!Array.isArray(i)&&this.infoVisible()&&!this.anyStaff()}));n(this,\"ratingVisible\",M(()=>{let i=this.staff();return!Array.isArray(i)&&this.showRating&&!!(i!=null&&i.show_rating)&&this.rating()>0&&!this.overrideShowRatingAndTag()}));n(this,\"commentsCount\",M(()=>{let i=this.staff();return Array.isArray(i)?0:Ee(i==null?void 0:i.comments_count)}));n(this,\"prepaidRequired\",M(()=>{let i=this.staff();return Array.isArray(i)?!1:this.payment.staffPayEnabled(i)&&!this.payment.orderAbonementRestrictionRequired()}));n(this,\"anyStaff\",M(()=>{let i=this.staff();return Array.isArray(i)?!1:(i==null?void 0:i.id)===wt}));n(this,\"priceRange\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?\"\":(o=i==null?void 0:i.priceRange)!=null?o:\"\"}));this.payment=i,this.translate=o}get isSelectedAttribute(){return this.isSelected()}handleClickOnInfo(i){this.disabled||(i.stopPropagation(),this.showInfo.emit())}handleResetClick(i){this.disabled||(i.stopPropagation(),this.resetButtonClick.emit())}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(we),u(L))}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-staff-tile\"]],hostVars:4,hostBindings:function(o,r){o&2&&(f(\"data-locator-staff-tile-disabled\",r.disabled)(\"data-locator-staff-tile-selected\",r.isSelectedAttribute),R(\"disabled\",r.disabled))},inputs:{staff:[1,\"staff\"],infoVisible:[1,\"infoVisible\"],resettable:[1,\"resettable\"],overrideShowRatingAndTag:[1,\"overrideShowRatingAndTag\"],isSelected:[1,\"isSelected\"],alignActionsCenter:[1,\"alignActionsCenter\"],disabled:\"disabled\",showRating:\"showRating\"},outputs:{showInfo:\"showInfo\",resetButtonClick:\"resetButtonClick\"},ngContentSelectors:vi,decls:1,vars:1,consts:[[3,\"leftSizePx\",\"without-right-gap\",4,\"ngIf\"],[3,\"leftSizePx\"],[\"left\",\"\"],[3,\"avatars\"],[\"center\",\"\",1,\"meta\"],[\"class\",\"rating\",3,\"ngModel\",\"disabled\",\"commentsCount\",\"commentsCountDataLocator\",4,\"ngIf\"],[\"class\",\"price-with-tags\",4,\"ngIf\"],[\"right\",\"\",\"data-locator\",\"change_master_btn\",1,\"staff-actions\"],[\"class\",\"info-button-container\",3,\"routerLink\",\"skipNavigation\",4,\"ngIf\"],[\"class\",\"reset-button\",3,\"click\",4,\"ngIf\"],[3,\"ngModel\",\"disabled\",4,\"ngIf\"],[\"size\",\"48px\",\"class\",\"text-avatar\",3,\"text\",\"url\",\"round\",4,\"ngIf\"],[\"class\",\"any-staff-icon-container\",4,\"ngIf\"],[\"size\",\"48px\",1,\"text-avatar\",3,\"text\",\"url\",\"round\"],[1,\"any-staff-icon-container\"],[1,\"any-staff-icon\",3,\"name\"],[1,\"name\"],[\"class\",\"position-or-specialization\",4,\"ngIf\"],[1,\"position-or-specialization\"],[\"uiKitMaxLines\",\"\",\"lineHeight\",\"24\",\"maxLines\",\"2\",1,\"name\"],[\"class\",\"position-or-specialization\",\"uiKitMaxLines\",\"\",\"lineHeight\",\"20\",\"maxLines\",\"1\",4,\"ngIf\"],[\"uiKitMaxLines\",\"\",\"lineHeight\",\"20\",\"maxLines\",\"1\",1,\"position-or-specialization\"],[1,\"rating\",3,\"ngModel\",\"disabled\",\"commentsCount\",\"commentsCountDataLocator\"],[1,\"price-with-tags\"],[\"class\",\"price-range\",4,\"ngIf\"],[3,\"tagType\",\"label\",4,\"ngIf\"],[1,\"price-range\"],[3,\"tagType\",\"label\"],[1,\"info-button-container\",3,\"routerLink\",\"skipNavigation\"],[1,\"info-button\",3,\"click\"],[\"role\",\"button\",\"aria-label\",\"?\",1,\"info-button-icon\",3,\"name\"],[1,\"reset-button\",3,\"click\"],[1,\"reset-button-icon\",3,\"name\"],[3,\"ngModel\",\"disabled\"]],template:function(o,r){o&1&&(A(hi),h(0,Ei,14,12,\"ui-kit-simple-cell\",0)),o&2&&c(\"ngIf\",r.staff())},dependencies:[b,Q,X,vt,Ae,z,ft,J,D,fe,Fe,Zt,ke,Me,L],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block}.disabled[_nghost-%COMP%]{opacity:.4}.disabled[_nghost-%COMP%]   .reset-button[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .info-button-container[_ngcontent-%COMP%]{cursor:default!important}.text-avatar[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_avatar_bg);color:var(--widget-ui-kit-color-color_avatar_text)}.any-staff-icon-container[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;justify-content:center;align-items:center;background-color:var(--widget-ui-kit-color-color_grey_03);border-radius:50%}.any-staff-icon-container[_ngcontent-%COMP%]   .any-staff-icon[_ngcontent-%COMP%]{width:24px;height:24px}.meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:2px;width:100%;height:100%}.name[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}.position-or-specialization[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:var(--widget-ui-kit-color-color_grey_dark)}.rating[_ngcontent-%COMP%]{margin-top:2px}.price-with-tags[_ngcontent-%COMP%]{margin-top:6px;display:flex;flex-direction:row;gap:8px}.price-with-tags[_ngcontent-%COMP%]   .price-range[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}.staff-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px;height:100%;padding:12px 0}.staff-actions.align-items-center[_ngcontent-%COMP%]{align-items:center}.info-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer}.info-button-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:19.5px;height:19.5px;background-color:var(--widget-ui-kit-color-color_grey_03);border-radius:50%}.info-button-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]   .info-button-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_11);width:5px;height:10px;padding-left:.5px}.reset-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;align-self:center;width:24px;height:24px;cursor:pointer}.reset-button[_ngcontent-%COMP%]   .reset-button-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_dark);width:13.3px;height:13.3px}.without-right-gap[_ngcontent-%COMP%]{gap:0}.without-right-gap[_ngcontent-%COMP%]     .left-part{margin-right:12px}'],changeDetection:0}));let e=t;return e})();var Fi=[\"*\"];function zi(e,t){e&1&&(xt(0),F(1),Ct())}function Bi(e,t){e&1&&(xt(0),p(1,\"ui-kit-card-skeleton\"),Ct())}var Ui=(()=>{let t=class t{constructor(){n(this,\"widthType\");n(this,\"cutType\");n(this,\"isLoading\",!1)}get substrateClasses(){var i;return\"\".concat(this.widthType,\" \").concat((i=this.cutType)!=null?i:\"\")}};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-substrate\"]],hostVars:4,hostBindings:function(o,r){o&2&&($t(r.substrateClasses),R(\"is-loading\",r.isLoading))},inputs:{widthType:\"widthType\",cutType:\"cutType\",isLoading:\"isLoading\"},ngContentSelectors:Fi,decls:2,vars:2,consts:[[4,\"ngIf\"]],template:function(o,r){o&1&&(A(),h(0,zi,2,0,\"ng-container\",0)(1,Bi,2,0,\"ng-container\",0)),o&2&&(c(\"ngIf\",!r.isLoading),s(),c(\"ngIf\",r.isLoading))},dependencies:[b,Oe],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;background-color:var(--widget-ui-kit-color-color_white);padding:20px 16px;margin:8px 8px 0;border-radius:24px}.full-width[_nghost-%COMP%]{padding:16px;margin:8px 0}.full-width-half-margin[_nghost-%COMP%]{padding:16px;margin:4px 0}.cut-top[_nghost-%COMP%]{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.cut-bottom[_nghost-%COMP%]{margin-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}'],changeDetection:0}));let e=t;return e})();var ze=.4117647058823529;var Li=(()=>{let t=class t{constructor(i,o){n(this,\"element\");n(this,\"renderer\");this.element=i,this.renderer=o}ngAfterViewChecked(){let i=this.element.nativeElement.offsetWidth*ze+\"px\";this.renderer.setStyle(this.element.nativeElement,\"height\",i),this.renderer.setStyle(this.element.nativeElement,\"object-fit\",\"cover\"),this.renderer.setStyle(this.element.nativeElement,\"object-position\",\"top\")}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(q),u(st))}),n(t,\"\\u0275dir\",V({type:t,selectors:[[\"\",\"appServiceImage\",\"\"]]}));let e=t;return e})();var Ni=(()=>{class e{}return n(e,\"range\",[{value:0,title:0,type:\"hour\"},{value:1,title:1,type:\"hour\"},{value:2,title:2,type:\"hour\"},{value:3,title:3,type:\"hour\"},{value:4,title:4,type:\"hour\"},{value:5,title:5,type:\"hour\"},{value:6,title:6,type:\"hour\"},{value:9,title:9,type:\"hour\"},{value:12,title:12,type:\"hour\"},{value:15,title:15,type:\"hour\"},{value:18,title:18,type:\"hour\"},{value:21,title:21,type:\"hour\"},{value:24,title:24,type:\"hour\"},{value:48,title:2,type:\"day\"},{value:72,title:3,type:\"day\"},{value:120,title:5,type:\"day\"},{value:168,title:7,type:\"day\"}]),e})(),Ki=(()=>{let t=class t{constructor(i,o){n(this,\"translate\");n(this,\"wordNumeralCasePipe\");this.translate=i,this.wordNumeralCasePipe=o}transform(i){if(i=Number(i),i===0)return this.translate.instant(\"confirm.dontSend\");if(!i)return\"\";let o=Ni.range.find(r=>r.value===i);return o?this.translate.instant(\"confirm.untilVisit.full\",{time:o.title,timeTitle:this.wordNumeralCasePipe.transform(\"time.\".concat(o.type,\"Cased\"),o.title)}):\"\"}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(I,16),u(Tt,16))}),n(t,\"\\u0275pipe\",T({name:\"orderRemindTime\",type:t,pure:!0}));let e=t;return e})();var Hi=(()=>{let t=class t{constructor(i){n(this,\"yDate\");this.yDate=i}transform(i,o=\" - \"){if(!(i!=null&&i.date))return\"\";let r=kt(Ot(i.date)),v=this.yDate.transform(r.toISOString(),\"shortTime\",!1,i.company.datetime_format),_=kt(Ot(i.date));_.setSeconds(_.getSeconds()+i.length||0);let y=this.yDate.transform(_.toISOString(),\"shortTime\",!1,i.company.datetime_format);return v===y?v:\"\".concat(v).concat(o).concat(y)}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(ut,16))}),n(t,\"\\u0275pipe\",T({name:\"timeIntervalFromRecord\",type:t,pure:!0}));let e=t;return e})();var Vi=(()=>{let t=class t{constructor(i){n(this,\"translate\");this.translate=i}transform(i,o=\"m\",r=\"s\",v=\" \"){if(!i)return\"\";let _=Math.floor(i/Pt),y=Math.floor(i-_*Pt);return o&&r?(\"00\"+_).slice(-2)+\" \"+this.translate.instant(o)+v+(\"00\"+y).slice(-2)+\" \"+this.translate.instant(r):(\"00\"+_).slice(-2)+v+(\"00\"+y).slice(-2)}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(I,16))}),n(t,\"\\u0275pipe\",T({name:\"formatTime\",type:t,pure:!0}));let e=t;return e})();var $i=(()=>{let t=class t{constructor(i,o){n(this,\"translate\");n(this,\"secondsToTimePipe\");this.translate=i,this.secondsToTimePipe=o}transform(i=[]){let o=i.reduce((N,nt)=>N+nt.seance_length,0),r=N=>N.seance_length>0,v=this.secondsToTimePipe.transform(o),_=this.translate.instant(\"service.price_from\");return i.every(r)?\"\".concat(v):v?\"\".concat(_,\" \").concat(v):\"\"}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(I,16),u(et,16))}),n(t,\"\\u0275pipe\",T({name:\"servicesLength\",type:t,pure:!0}));let e=t;return e})();var it=function(e){return e[e.swipeUp=0]=\"swipeUp\",e[e.swipeDown=1]=\"swipeDown\",e[e.swipeLeft=2]=\"swipeLeft\",e[e.swipeRight=3]=\"swipeRight\",e}(it||{}),Rr=(()=>{let t=class t{constructor(i){n(this,\"element\");n(this,\"id\");n(this,\"swipeLocked\",!1);n(this,\"swipePreventDefault\",!1);n(this,\"disableTimeout\",!1);n(this,\"swipe\",new w);n(this,\"uiKitOnSwipeVertical\",new w);n(this,\"uiKitOnSwipeHorizontal\",new w);n(this,\"xDown\",null);n(this,\"yDown\",null);n(this,\"xDiff\",null);n(this,\"yDiff\",null);n(this,\"timeDown\",null);n(this,\"swipeThreshold\",20);n(this,\"swipeTimeout\",500);n(this,\"throttleTime\",10);n(this,\"ySwipeLocked\",!1);n(this,\"xSwipeLocked\",!1);n(this,\"destroy$\",new At(1));n(this,\"onTouchMove\",i=>{var v,_;if(!this.xDown||!this.yDown)return;let o=i.touches[0].clientX,r=i.touches[0].clientY;this.xDiff=this.xDown-o,this.yDiff=this.yDown-r,!this.ySwipeLocked&&!this.xSwipeLocked&&(Math.abs((v=this.xDiff)!=null?v:0)>Math.abs((_=this.yDiff)!=null?_:0)?this.ySwipeLocked=!0:this.xSwipeLocked=!0),this.ySwipeLocked||this.uiKitOnSwipeVertical.emit({x:this.xDiff,y:this.yDiff}),this.xSwipeLocked||this.uiKitOnSwipeHorizontal.emit({x:this.xDiff,y:this.yDiff})});n(this,\"onTouchStart\",i=>{this.timeDown=Date.now(),this.xDown=i.touches[0].clientX,this.yDown=i.touches[0].clientY,this.xDiff=0,this.yDiff=0});n(this,\"onTouchEnd\",i=>{var _,y,N,nt,Dt;let o=Date.now()-((_=this.timeDown)!=null?_:0),r=null,v=o<this.swipeTimeout||this.disableTimeout;this.ySwipeLocked?Math.abs((y=this.xDiff)!=null?y:0)>this.swipeThreshold&&v&&(r=((N=this.xDiff)!=null?N:0)>0?it.swipeLeft:it.swipeRight):Math.abs((nt=this.yDiff)!=null?nt:0)>this.swipeThreshold&&v&&(r=((Dt=this.yDiff)!=null?Dt:0)>0?it.swipeUp:it.swipeDown),r!==null&&this.swipe.emit({eventType:r,domEvent:i}),this.xSwipeLocked=!1,this.ySwipeLocked=!1,this.xDown=null,this.yDown=null,this.timeDown=null,this.swipePreventDefault=!1});this.element=i}ngAfterViewInit(){this.subscribeToTouchEvent(\"touchstart\",this.onTouchStart),this.subscribeToTouchEvent(\"touchmove\",this.onTouchMove),this.subscribeToTouchEvent(\"touchend\",this.onTouchEnd)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}subscribeToTouchEvent(i,o){ot(this.element.nativeElement,i,{capture:!0}).pipe(rt(()=>!this.swipeLocked),jt(this.throttleTime),Lt(r=>{this.swipePreventDefault&&r.preventDefault()}),Ut(this.destroy$)).subscribe(o)}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(q))}),n(t,\"\\u0275dir\",V({type:t,selectors:[[\"\",\"uiKitSwipe\",\"\"]],inputs:{id:\"id\",swipeLocked:\"swipeLocked\",swipePreventDefault:\"swipePreventDefault\",disableTimeout:\"disableTimeout\",swipeThreshold:\"swipeThreshold\"},outputs:{swipe:\"uiKitSwipe\",uiKitOnSwipeVertical:\"uiKitOnSwipeVertical\",uiKitOnSwipeHorizontal:\"uiKitOnSwipeHorizontal\"},standalone:!0}));let e=t;return e})();var Be=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275mod\",H({type:t})),n(t,\"\\u0275inj\",K({imports:[G]}));let e=t;return e})();var Wi=[It,be,et];var Ja=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275mod\",H({type:t})),n(t,\"\\u0275inj\",K({providers:[...Wi],imports:[G,mt,oe,_e,Te,se,vt,ge,ft,ht,dt,Se,me,de,ve,Be,Pe]}));let e=t;return e})();export{Ne as a,Ve as b,We as c,Ge as d,oi as e,ai as f,et as g,Ee as h,Ai as i,Oe as j,Ui as k,Li as l,Ni as m,Ki as n,Hi as o,Vi as p,$i as q,Yi as r,Xi as s,tn as t,on as u,sn as v,Te as w,it as x,Rr as y,Ja as z};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 12999,
          "_transferSize": 13659,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.879Z",
        "time": 90.18699999433011,
        "timings": {
          "blocked": 55.01299994275719,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3269999999999982,
          "wait": 29.911999959781767,
          "receive": 4.935000091791153,
          "_blocked_queueing": 12.36099994275719,
          "_blocked_proxy": 41.427,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "358016",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-5IQFNC4I.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3388"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf25dcbabcb8-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:23 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-2d476\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "f6d1890d7b9b001ff4404899c9105509"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 185462,
            "mimeType": "application/javascript",
            "compression": 124027,
            "text": "import{a as hr,c as _r,g as mr}from\"./chunk-G22OQKPL.js\";import{f as Ko}from\"./chunk-HN5Z5GAF.js\";import{a as dr,b as ge}from\"./chunk-HYJO63QR.js\";import{a as pr}from\"./chunk-UIU24VNB.js\";import{D as tr,E as er,H as wi,S as bi,U as ir,V as nr,Xa as fr,aa as or,fa as rr,ga as sr,ha as ar,ia as pn,ja as _e,ka as Pi,na as Ci,ra as Re,sa as me,w as Qo,y as xi}from\"./chunk-W3M7SAIY.js\";import{a as lr,c as cr,h as ur}from\"./chunk-KARNDABV.js\";import{Ec as De,Gh as Ut,Lc as Jo,Xc as yi,Zc as fn,_ as te,aa as gi,ba as $o,ca as qo,f as pi,fa as Yo,g as St,ga as Ot,ha as It,l as pe,r as _i,u as mi,ua as vi,ya as Xo}from\"./chunk-FAHXWQCK.js\";import{$b as C,$c as Go,Ab as y,Bb as st,Bc as it,Ca as Ae,E as Eo,Gc as A,Ha as J,Hc as D,Ia as No,J as Ee,Jb as ci,Lc as jo,Ob as Q,Q as Be,Qa as ce,Qb as W,Ra as ot,Rb as P,S as Bo,Sa as rt,Sb as de,Tb as Gt,Vb as Fo,_a as hi,_b as w,ac as _t,bc as ui,c as dn,cb as li,cc as di,ec as ft,f as Io,fa as Zo,i as si,ic as G,j as ai,jc as B,ka as Ao,kc as fi,lc as fe,na as Ze,oc as Uo,pc as Ho,qc as Wo,rc as Vo,sc as H,tc as Ft,ub as ue,uc as at,wa as Do,x as jt,xa as Ro,y as zo}from\"./chunk-CJMBEYVW.js\";import{e as na,f as oa,g as d,i as Qt}from\"./chunk-JV5WWF5Q.js\";var Mr=na((Ti,kr)=>{(function(a,f){typeof Ti==\"object\"&&typeof kr<\"u\"?f(Ti):typeof define==\"function\"&&define.amd?define([\"exports\"],f):(a=typeof globalThis<\"u\"?globalThis:a||self,f(a.leaflet={}))})(Ti,function(a){\"use strict\";var f=\"1.9.4\";function _(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++){o=arguments[i];for(e in o)t[e]=o[e]}return t}var l=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function c(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var m=0;function g(t){return\"_leaflet_id\"in t||(t._leaflet_id=++m),t._leaflet_id}function N(t,e,i){var n,o,r,s;return s=function(){n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(s,e),n=!0)},r}function K(t,e,i){var n=e[1],o=e[0],r=n-o;return t===n&&i?t:((t-o)%r+r)%r+o}function I(){return!1}function tt(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function Kt(t){return t.trim?t.trim():t.replace(/^\\s+|\\s+$/g,\"\")}function Et(t){return Kt(t).split(/\\s+/)}function F(t,e){Object.prototype.hasOwnProperty.call(t,\"options\")||(t.options=t.options?l(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function Ne(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+\"=\"+encodeURIComponent(t[o]));return(!e||e.indexOf(\"?\")===-1?\"?\":\"&\")+n.join(\"&\")}var ki=/\\{ *([\\w_ -]+) *\\}/g;function _n(t,e){return t.replace(ki,function(i,n){var o=e[n];if(o===void 0)throw new Error(\"No value provided for variable \"+i);return typeof o==\"function\"&&(o=o(e)),o})}var xt=Array.isArray||function(t){return Object.prototype.toString.call(t)===\"[object Array]\"};function Mi(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Fe=\"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=\";function Si(t){return window[\"webkit\"+t]||window[\"moz\"+t]||window[\"ms\"+t]}var mn=0;function gn(t){var e=+new Date,i=Math.max(0,16-(e-mn));return mn=e+i,window.setTimeout(t,i)}var Oi=window.requestAnimationFrame||Si(\"RequestAnimationFrame\")||gn,vn=window.cancelAnimationFrame||Si(\"CancelAnimationFrame\")||Si(\"CancelRequestAnimationFrame\")||function(t){window.clearTimeout(t)};function lt(t,e,i){if(i&&Oi===gn)t.call(e);else return Oi.call(window,c(t,e))}function mt(t){t&&vn.call(window,t)}var Ir={__proto__:null,extend:_,create:l,bind:c,get lastId(){return m},stamp:g,throttle:N,wrapNum:K,falseFn:I,formatNum:tt,trim:Kt,splitWords:Et,setOptions:F,getParamString:Ne,template:_n,isArray:xt,indexOf:Mi,emptyImageUrl:Fe,requestFn:Oi,cancelFn:vn,requestAnimFrame:lt,cancelAnimFrame:mt};function Bt(){}Bt.extend=function(t){var e=function(){F(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=l(i);n.constructor=e,e.prototype=n;for(var o in this)Object.prototype.hasOwnProperty.call(this,o)&&o!==\"prototype\"&&o!==\"__super__\"&&(e[o]=this[o]);return t.statics&&_(e,t.statics),t.includes&&(zr(t.includes),_.apply(null,[n].concat(t.includes))),_(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?l(i.options):{},_(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var r=0,s=n._initHooks.length;r<s;r++)n._initHooks[r].call(this)}},e},Bt.include=function(t){var e=this.prototype.options;return _(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},Bt.mergeOptions=function(t){return _(this.prototype.options,t),this},Bt.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t==\"function\"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function zr(t){if(!(typeof L>\"u\"||!L||!L.Mixin)){t=xt(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn(\"Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.\",new Error().stack)}}var pt={on:function(t,e,i){if(typeof t==\"object\")for(var n in t)this._on(n,t[n],e);else{t=Et(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t==\"object\")for(var n in t)this._off(n,t[n],e);else{t=Et(t);for(var o=arguments.length===1,r=0,s=t.length;r<s;r++)o?this._off(t[r]):this._off(t[r],e,i)}return this},_on:function(t,e,i,n){if(typeof e!=\"function\"){console.warn(\"wrong listener type: \"+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,i){var n,o,r;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(o=0,r=n.length;o<r;o++)n[o].fn=I;delete this._events[t];return}if(typeof e!=\"function\"){console.warn(\"wrong listener type: \"+typeof e);return}var s=this._listens(t,e,i);if(s!==!1){var h=n[s];this._firingCount&&(h.fn=I,this._events[t]=n=n.slice()),n.splice(s,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=_({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var r=0,s=o.length;r<s;r++){var h=o[r],u=h.fn;h.once&&this.off(t,u,h.ctx),u.call(h.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!=\"string\"&&console.warn('\"string\" type argument expected');var o=e;typeof e!=\"function\"&&(n=!!e,o=void 0,i=void 0);var r=this._events&&this._events[t];if(r&&r.length&&this._listens(t,o,i)!==!1)return!0;if(n){for(var s in this._eventParents)if(this._eventParents[s].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,r=n.length;o<r;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},once:function(t,e,i){if(typeof t==\"object\")for(var n in t)this._on(n,t[n],e,!0);else{t=Et(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[g(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[g(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,_({layer:t.target,propagatedFrom:t.target},t),!0)}};pt.addEventListener=pt.on,pt.removeEventListener=pt.clearAllEventListeners=pt.off,pt.addOneTimeEventListener=pt.once,pt.fireEvent=pt.fire,pt.hasEventListeners=pt.listens;var ve=Bt.extend(pt);function k(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var yn=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};k.prototype={clone:function(){return new k(this.x,this.y)},add:function(t){return this.clone()._add(T(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(T(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new k(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new k(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=yn(this.x),this.y=yn(this.y),this},distanceTo:function(t){t=T(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=T(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=T(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return\"Point(\"+tt(this.x)+\", \"+tt(this.y)+\")\"}};function T(t,e,i){return t instanceof k?t:xt(t)?new k(t[0],t[1]):t==null?t:typeof t==\"object\"&&\"x\"in t&&\"y\"in t?new k(t.x,t.y):new k(t,e,i)}function V(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}V.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof k||typeof t[0]==\"number\"||\"x\"in t)e=i=T(t);else if(t=ct(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return T((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return T(this.min.x,this.max.y)},getTopRight:function(){return T(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]==\"number\"||t instanceof k?t=T(t):t=ct(t),t instanceof V?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=ct(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>=e.x&&n.x<=i.x,s=o.y>=e.y&&n.y<=i.y;return r&&s},overlaps:function(t){t=ct(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>e.x&&n.x<i.x,s=o.y>e.y&&n.y<i.y;return r&&s},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return ct(T(e.x-n,e.y-o),T(i.x+n,i.y+o))},equals:function(t){return t?(t=ct(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function ct(t,e){return!t||t instanceof V?t:new V(t,e)}function ut(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}ut.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,o;if(t instanceof R)n=t,o=t;else if(t instanceof ut){if(n=t._southWest,o=t._northEast,!n||!o)return this}else return t?this.extend(z(t)||q(t)):this;return!e&&!i?(this._southWest=new R(n.lat,n.lng),this._northEast=new R(o.lat,o.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(o.lat,i.lat),i.lng=Math.max(o.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new ut(new R(e.lat-n,e.lng-o),new R(i.lat+n,i.lng+o))},getCenter:function(){return new R((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new R(this.getNorth(),this.getWest())},getSouthEast:function(){return new R(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]==\"number\"||t instanceof R||\"lat\"in t?t=z(t):t=q(t);var e=this._southWest,i=this._northEast,n,o;return t instanceof ut?(n=t.getSouthWest(),o=t.getNorthEast()):n=o=t,n.lat>=e.lat&&o.lat<=i.lat&&n.lng>=e.lng&&o.lng<=i.lng},intersects:function(t){t=q(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>=e.lat&&n.lat<=i.lat,s=o.lng>=e.lng&&n.lng<=i.lng;return r&&s},overlaps:function(t){t=q(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>e.lat&&n.lat<i.lat,s=o.lng>e.lng&&n.lng<i.lng;return r&&s},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(\",\")},equals:function(t,e){return t?(t=q(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function q(t,e){return t instanceof ut?t:new ut(t,e)}function R(t,e,i){if(isNaN(t)||isNaN(e))throw new Error(\"Invalid LatLng object: (\"+t+\", \"+e+\")\");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}R.prototype={equals:function(t,e){if(!t)return!1;t=z(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return\"LatLng(\"+tt(this.lat,t)+\", \"+tt(this.lng,t)+\")\"},distanceTo:function(t){return Ht.distance(this,z(t))},wrap:function(){return Ht.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return q([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new R(this.lat,this.lng,this.alt)}};function z(t,e,i){return t instanceof R?t:xt(t)&&typeof t[0]!=\"object\"?t.length===3?new R(t[0],t[1],t[2]):t.length===2?new R(t[0],t[1]):null:t==null?t:typeof t==\"object\"&&\"lat\"in t?new R(t.lat,\"lng\"in t?t.lng:t.lon,t.alt):e===void 0?null:new R(t,e,i)}var Zt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),o=this.transformation.transform(e.max,i);return new V(n,o)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?K(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?K(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new R(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(n===0&&o===0)return t;var r=t.getSouthWest(),s=t.getNorthEast(),h=new R(r.lat-n,r.lng-o),u=new R(s.lat-n,s.lng-o);return new ut(h,u)}},Ht=_({},Zt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,r=Math.sin((e.lat-t.lat)*i/2),s=Math.sin((e.lng-t.lng)*i/2),h=r*r+Math.cos(n)*Math.cos(o)*s*s,u=2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));return this.R*u}}),xn=6378137,Ii={R:xn,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),o=Math.sin(n*e);return new k(this.R*t.lng*e,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var e=180/Math.PI;return new R((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=xn*Math.PI;return new V([-t,-t],[t,t])}()};function zi(t,e,i,n){if(xt(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}zi.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new k((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function ye(t,e,i,n){return new zi(t,e,i,n)}var Ei=_({},Ht,{code:\"EPSG:3857\",projection:Ii,transformation:function(){var t=.5/(Math.PI*Ii.R);return ye(t,.5,-t,.5)}()}),Er=_({},Ei,{code:\"EPSG:900913\"});function wn(t){return document.createElementNS(\"http://www.w3.org/2000/svg\",t)}function bn(t,e){var i=\"\",n,o,r,s,h,u;for(n=0,r=t.length;n<r;n++){for(h=t[n],o=0,s=h.length;o<s;o++)u=h[o],i+=(o?\"L\":\"M\")+u.x+\" \"+u.y;i+=e?x.svg?\"z\":\"x\":\"\"}return i||\"M0 0\"}var Bi=document.documentElement.style,Ue=\"ActiveXObject\"in window,Br=Ue&&!document.addEventListener,Pn=\"msLaunchUri\"in navigator&&!(\"documentMode\"in document),Zi=Lt(\"webkit\"),Cn=Lt(\"android\"),Ln=Lt(\"android 2\")||Lt(\"android 3\"),Zr=parseInt(/WebKit\\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ar=Cn&&Lt(\"Google\")&&Zr<537&&!(\"AudioNode\"in window),Ai=!!window.opera,Tn=!Pn&&Lt(\"chrome\"),kn=Lt(\"gecko\")&&!Zi&&!Ai&&!Ue,Dr=!Tn&&Lt(\"safari\"),Mn=Lt(\"phantom\"),Sn=\"OTransition\"in Bi,Rr=navigator.platform.indexOf(\"Win\")===0,On=Ue&&\"transition\"in Bi,Di=\"WebKitCSSMatrix\"in window&&\"m11\"in new window.WebKitCSSMatrix&&!Ln,In=\"MozPerspective\"in Bi,Nr=!window.L_DISABLE_3D&&(On||Di||In)&&!Sn&&!Mn,xe=typeof orientation<\"u\"||Lt(\"mobile\"),Fr=xe&&Zi,Ur=xe&&Di,zn=!window.PointerEvent&&window.MSPointerEvent,En=!!(window.PointerEvent||zn),Bn=\"ontouchstart\"in window||!!window.TouchEvent,Hr=!window.L_NO_TOUCH&&(Bn||En),Wr=xe&&Ai,Vr=xe&&kn,jr=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Gr=function(){var t=!1;try{var e=Object.defineProperty({},\"passive\",{get:function(){t=!0}});window.addEventListener(\"testPassiveEventSupport\",I,e),window.removeEventListener(\"testPassiveEventSupport\",I,e)}catch(i){}return t}(),Kr=function(){return!!document.createElement(\"canvas\").getContext}(),Ri=!!(document.createElementNS&&wn(\"svg\").createSVGRect),$r=!!Ri&&function(){var t=document.createElement(\"div\");return t.innerHTML=\"<svg/>\",(t.firstChild&&t.firstChild.namespaceURI)===\"http://www.w3.org/2000/svg\"}(),qr=!Ri&&function(){try{var t=document.createElement(\"div\");t.innerHTML='<v:shape adj=\"1\"/>';var e=t.firstChild;return e.style.behavior=\"url(#default#VML)\",e&&typeof e.adj==\"object\"}catch(i){return!1}}(),Yr=navigator.platform.indexOf(\"Mac\")===0,Xr=navigator.platform.indexOf(\"Linux\")===0;function Lt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var x={ie:Ue,ielt9:Br,edge:Pn,webkit:Zi,android:Cn,android23:Ln,androidStock:Ar,opera:Ai,chrome:Tn,gecko:kn,safari:Dr,phantom:Mn,opera12:Sn,win:Rr,ie3d:On,webkit3d:Di,gecko3d:In,any3d:Nr,mobile:xe,mobileWebkit:Fr,mobileWebkit3d:Ur,msPointer:zn,pointer:En,touch:Hr,touchNative:Bn,mobileOpera:Wr,mobileGecko:Vr,retina:jr,passiveEvents:Gr,canvas:Kr,svg:Ri,vml:qr,inlineSvg:$r,mac:Yr,linux:Xr},Zn=x.msPointer?\"MSPointerDown\":\"pointerdown\",An=x.msPointer?\"MSPointerMove\":\"pointermove\",Dn=x.msPointer?\"MSPointerUp\":\"pointerup\",Rn=x.msPointer?\"MSPointerCancel\":\"pointercancel\",Ni={touchstart:Zn,touchmove:An,touchend:Dn,touchcancel:Rn},Nn={touchstart:ns,touchmove:He,touchend:He,touchcancel:He},ee={},Fn=!1;function Jr(t,e,i){return e===\"touchstart\"&&is(),Nn[e]?(i=Nn[e].bind(this,i),t.addEventListener(Ni[e],i,!1),i):(console.warn(\"wrong event specified:\",e),I)}function Qr(t,e,i){if(!Ni[e]){console.warn(\"wrong event specified:\",e);return}t.removeEventListener(Ni[e],i,!1)}function ts(t){ee[t.pointerId]=t}function es(t){ee[t.pointerId]&&(ee[t.pointerId]=t)}function Un(t){delete ee[t.pointerId]}function is(){Fn||(document.addEventListener(Zn,ts,!0),document.addEventListener(An,es,!0),document.addEventListener(Dn,Un,!0),document.addEventListener(Rn,Un,!0),Fn=!0)}function He(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||\"mouse\")){e.touches=[];for(var i in ee)e.touches.push(ee[i]);e.changedTouches=[e],t(e)}}function ns(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&nt(e),He(t,e)}function os(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type=\"dblclick\",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var rs=200;function ss(t,e){t.addEventListener(\"dblclick\",e);var i=0,n;function o(r){if(r.detail!==1){n=r.detail;return}if(!(r.pointerType===\"mouse\"||r.sourceCapabilities&&!r.sourceCapabilities.firesTouchEvents)){var s=Gn(r);if(!(s.some(function(u){return u instanceof HTMLLabelElement&&u.attributes.for})&&!s.some(function(u){return u instanceof HTMLInputElement||u instanceof HTMLSelectElement}))){var h=Date.now();h-i<=rs?(n++,n===2&&e(os(r))):n=1,i=h}}}return t.addEventListener(\"click\",o),{dblclick:e,simDblclick:o}}function as(t,e){t.removeEventListener(\"dblclick\",e.dblclick),t.removeEventListener(\"click\",e.simDblclick)}var Fi=je([\"transform\",\"webkitTransform\",\"OTransform\",\"MozTransform\",\"msTransform\"]),we=je([\"webkitTransition\",\"transition\",\"OTransition\",\"MozTransition\",\"msTransition\"]),Hn=we===\"webkitTransition\"||we===\"OTransition\"?we+\"End\":\"transitionend\";function Wn(t){return typeof t==\"string\"?document.getElementById(t):t}function be(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i===\"auto\")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i===\"auto\"?null:i}function Z(t,e,i){var n=document.createElement(t);return n.className=e||\"\",i&&i.appendChild(n),n}function j(t){var e=t.parentNode;e&&e.removeChild(t)}function We(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ie(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ne(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function Ui(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=Ve(t);return i.length>0&&new RegExp(\"(^|\\\\s)\"+e+\"(\\\\s|$)\").test(i)}function S(t,e){if(t.classList!==void 0)for(var i=Et(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!Ui(t,e)){var r=Ve(t);Hi(t,(r?r+\" \":\"\")+e)}}function $(t,e){t.classList!==void 0?t.classList.remove(e):Hi(t,Kt((\" \"+Ve(t)+\" \").replace(\" \"+e+\" \",\" \")))}function Hi(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Ve(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function gt(t,e){\"opacity\"in t.style?t.style.opacity=e:\"filter\"in t.style&&hs(t,e)}function hs(t,e){var i=!1,n=\"DXImageTransform.Microsoft.Alpha\";try{i=t.filters.item(n)}catch(o){if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=\" progid:\"+n+\"(opacity=\"+e+\")\"}function je(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function $t(t,e,i){var n=e||new k(0,0);t.style[Fi]=(x.ie3d?\"translate(\"+n.x+\"px,\"+n.y+\"px)\":\"translate3d(\"+n.x+\"px,\"+n.y+\"px,0)\")+(i?\" scale(\"+i+\")\":\"\")}function Y(t,e){t._leaflet_pos=e,x.any3d?$t(t,e):(t.style.left=e.x+\"px\",t.style.top=e.y+\"px\")}function qt(t){return t._leaflet_pos||new k(0,0)}var Pe,Ce,Wi;if(\"onselectstart\"in document)Pe=function(){M(window,\"selectstart\",nt)},Ce=function(){U(window,\"selectstart\",nt)};else{var Le=je([\"userSelect\",\"WebkitUserSelect\",\"OUserSelect\",\"MozUserSelect\",\"msUserSelect\"]);Pe=function(){if(Le){var t=document.documentElement.style;Wi=t[Le],t[Le]=\"none\"}},Ce=function(){Le&&(document.documentElement.style[Le]=Wi,Wi=void 0)}}function Vi(){M(window,\"dragstart\",nt)}function ji(){U(window,\"dragstart\",nt)}var Ge,Gi;function Ki(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Ke(),Ge=t,Gi=t.style.outlineStyle,t.style.outlineStyle=\"none\",M(window,\"keydown\",Ke))}function Ke(){Ge&&(Ge.style.outlineStyle=Gi,Ge=void 0,Gi=void 0,U(window,\"keydown\",Ke))}function Vn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function $i(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var ls={__proto__:null,TRANSFORM:Fi,TRANSITION:we,TRANSITION_END:Hn,get:Wn,getStyle:be,create:Z,remove:j,empty:We,toFront:ie,toBack:ne,hasClass:Ui,addClass:S,removeClass:$,setClass:Hi,getClass:Ve,setOpacity:gt,testProp:je,setTransform:$t,setPosition:Y,getPosition:qt,get disableTextSelection(){return Pe},get enableTextSelection(){return Ce},disableImageDrag:Vi,enableImageDrag:ji,preventOutline:Ki,restoreOutline:Ke,getSizedParentNode:Vn,getScale:$i};function M(t,e,i,n){if(e&&typeof e==\"object\")for(var o in e)Yi(t,o,e[o],i);else{e=Et(e);for(var r=0,s=e.length;r<s;r++)Yi(t,e[r],i,n)}return this}var Tt=\"_leaflet_events\";function U(t,e,i,n){if(arguments.length===1)jn(t),delete t[Tt];else if(e&&typeof e==\"object\")for(var o in e)Xi(t,o,e[o],i);else if(e=Et(e),arguments.length===2)jn(t,function(h){return Mi(e,h)!==-1});else for(var r=0,s=e.length;r<s;r++)Xi(t,e[r],i,n);return this}function jn(t,e){for(var i in t[Tt]){var n=i.split(/\\d/)[0];(!e||e(n))&&Xi(t,n,null,null,i)}}var qi={mouseenter:\"mouseover\",mouseleave:\"mouseout\",wheel:!(\"onwheel\"in window)&&\"mousewheel\"};function Yi(t,e,i,n){var o=e+g(i)+(n?\"_\"+g(n):\"\");if(t[Tt]&&t[Tt][o])return this;var r=function(h){return i.call(n||t,h||window.event)},s=r;!x.touchNative&&x.pointer&&e.indexOf(\"touch\")===0?r=Jr(t,e,r):x.touch&&e===\"dblclick\"?r=ss(t,r):\"addEventListener\"in t?e===\"touchstart\"||e===\"touchmove\"||e===\"wheel\"||e===\"mousewheel\"?t.addEventListener(qi[e]||e,r,x.passiveEvents?{passive:!1}:!1):e===\"mouseenter\"||e===\"mouseleave\"?(r=function(h){h=h||window.event,Qi(t,h)&&s(h)},t.addEventListener(qi[e],r,!1)):t.addEventListener(e,s,!1):t.attachEvent(\"on\"+e,r),t[Tt]=t[Tt]||{},t[Tt][o]=r}function Xi(t,e,i,n,o){o=o||e+g(i)+(n?\"_\"+g(n):\"\");var r=t[Tt]&&t[Tt][o];if(!r)return this;!x.touchNative&&x.pointer&&e.indexOf(\"touch\")===0?Qr(t,e,r):x.touch&&e===\"dblclick\"?as(t,r):\"removeEventListener\"in t?t.removeEventListener(qi[e]||e,r,!1):t.detachEvent(\"on\"+e,r),t[Tt][o]=null}function Yt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Ji(t){return Yi(t,\"wheel\",Yt),this}function Te(t){return M(t,\"mousedown touchstart dblclick contextmenu\",Yt),t._leaflet_disable_click=!0,this}function nt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Xt(t){return nt(t),Yt(t),this}function Gn(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Kn(t,e){if(!e)return new k(t.clientX,t.clientY);var i=$i(e),n=i.boundingClientRect;return new k((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var cs=x.linux&&x.chrome?window.devicePixelRatio:x.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function $n(t){return x.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/cs:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Qi(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t}var us={__proto__:null,on:M,off:U,stopPropagation:Yt,disableScrollPropagation:Ji,disableClickPropagation:Te,preventDefault:nt,stop:Xt,getPropagationPath:Gn,getMousePosition:Kn,getWheelDelta:$n,isExternalTarget:Qi,addListener:M,removeListener:U},qn=ve.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=qt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire(\"start\"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=lt(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),Y(this._el,i),this.fire(\"step\")},_complete:function(){mt(this._animId),this._inProgress=!1,this.fire(\"end\")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),E=ve.extend({options:{crs:Ei,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=F(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(z(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=we&&x.any3d&&!x.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),M(this._proxy,Hn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(z(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=_({animate:i.animate},i.zoom),i.pan=_({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(x.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(x.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),r=t instanceof k?t:this.latLngToContainerPoint(t),s=r.subtract(o).multiplyBy(1-1/n),h=this.containerPointToLatLng(o.add(s));return this.setView(h,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():q(t);var i=T(e.paddingTopLeft||e.padding||[0,0]),n=T(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if(o=typeof e.maxZoom==\"number\"?Math.min(e.maxZoom,o):o,o===1/0)return{center:t.getCenter(),zoom:o};var r=n.subtract(i).divideBy(2),s=this.project(t.getSouthWest(),o),h=this.project(t.getNorthEast(),o),u=this.unproject(s.add(h).divideBy(2).add(r),o);return{center:u,zoom:o}},fitBounds:function(t,e){if(t=q(t),!t.isValid())throw new Error(\"Bounds are not valid.\");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=T(t).round(),e=e||{},!t.x&&!t.y)return this.fire(\"moveend\");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new qn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire(\"movestart\"),e.animate!==!1){S(this._mapPane,\"leaflet-pan-anim\");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire(\"move\").fire(\"moveend\");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!x.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),r=this.getSize(),s=this._zoom;t=z(t),e=e===void 0?s:e;var h=Math.max(r.x,r.y),u=h*this.getZoomScale(s,e),p=o.distanceTo(n)||1,v=1.42,b=v*v;function O(X){var ri=X?-1:1,Qs=X?u:h,ta=u*u-h*h+ri*b*b*p*p,ea=2*Qs*b*p,un=ta/ea,Oo=Math.sqrt(un*un+1)-un,ia=Oo<1e-9?-18:Math.log(Oo);return ia}function ht(X){return(Math.exp(X)-Math.exp(-X))/2}function et(X){return(Math.exp(X)+Math.exp(-X))/2}function yt(X){return ht(X)/et(X)}var dt=O(0);function le(X){return h*(et(dt)/et(dt+v*X))}function qs(X){return h*(et(dt)*yt(dt+v*X)-ht(dt))/b}function Ys(X){return 1-Math.pow(1-X,1.5)}var Xs=Date.now(),Mo=(O(1)-dt)/v,Js=i.duration?1e3*i.duration:1e3*Mo*.8;function So(){var X=(Date.now()-Xs)/Js,ri=Ys(X)*Mo;X<=1?(this._flyToFrame=lt(So,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(qs(ri)/p)),s),this.getScaleZoom(h/le(ri),s),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),So.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=q(t),this.listens(\"moveend\",this._panInsideMaxBounds)&&this.off(\"moveend\",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on(\"moveend\",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire(\"zoomlevelschange\"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire(\"zoomlevelschange\"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,q(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=T(e.paddingTopLeft||e.padding||[0,0]),n=T(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),r=this.project(t),s=this.getPixelBounds(),h=ct([s.min.add(i),s.max.subtract(n)]),u=h.getSize();if(!h.contains(r)){this._enforcingBounds=!0;var p=r.subtract(h.getCenter()),v=h.extend(r).getSize().subtract(u);o.x+=p.x<0?-v.x:v.x,o.y+=p.y<0?-v.y:v.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=_({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),o=i.divideBy(2).round(),r=n.subtract(o);return!r.x&&!r.y?this:(t.animate&&t.pan?this.panBy(r):(t.pan&&this._rawPanBy(r),this.fire(\"move\"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,\"moveend\"),200)):this.fire(\"moveend\")),this.fire(\"resize\",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire(\"viewreset\"),this._stop()},locate:function(t){if(t=this._locateOptions=_({timeout:1e4,watch:!1},t),!(\"geolocation\"in navigator))return this._handleGeolocationError({code:0,message:\"Geolocation not supported.\"}),this;var e=c(this._handleGeolocationResponse,this),i=c(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?\"permission denied\":e===2?\"position unavailable\":\"timeout\");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire(\"locationerror\",{code:e,message:\"Geolocation error: \"+i+\".\"})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new R(e,i),o=n.toBounds(t.coords.accuracy*2),r=this._locateOptions;if(r.setView){var s=this.getBoundsZoom(o);this.setView(n,r.maxZoom?Math.min(s,r.maxZoom):s)}var h={latlng:n,bounds:o,timestamp:t.timestamp};for(var u in t.coords)typeof t.coords[u]==\"number\"&&(h[u]=t.coords[u]);this.fire(\"locationfound\",h)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off(\"moveend\",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error(\"Map container is being reused by another instance\");try{delete this._container._leaflet_id,delete this._containerId}catch(e){this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),j(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(mt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire(\"unload\");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)j(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i=\"leaflet-pane\"+(t?\" leaflet-\"+t.replace(\"Pane\",\"\")+\"-pane\":\"\"),n=Z(\"div\",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new ut(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=q(t),i=T(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),r=this.getMaxZoom(),s=t.getNorthWest(),h=t.getSouthEast(),u=this.getSize().subtract(i),p=ct(this.project(h,n),this.project(s,n)).getSize(),v=x.any3d?this.options.zoomSnap:1,b=u.x/p.x,O=u.y/p.y,ht=e?Math.max(b,O):Math.min(b,O);return n=this.getScaleZoom(ht,n),v&&(n=Math.round(n/(v/100))*(v/100),n=e?Math.ceil(n/v)*v:Math.floor(n/v)*v),Math.max(o,Math.min(r,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new k(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new V(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t==\"string\"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(z(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(T(t),e)},layerPointToLatLng:function(t){var e=T(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(z(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(z(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(q(t))},distance:function(t,e){return this.options.crs.distance(z(t),z(e))},containerPointToLayerPoint:function(t){return T(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return T(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(T(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(z(t)))},mouseEventToContainerPoint:function(t){return Kn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Wn(t);if(e){if(e._leaflet_id)throw new Error(\"Map container is already initialized.\")}else throw new Error(\"Map container not found.\");M(e,\"scroll\",this._onScroll,this),this._containerId=g(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&x.any3d,S(t,\"leaflet-container\"+(x.touch?\" leaflet-touch\":\"\")+(x.retina?\" leaflet-retina\":\"\")+(x.ielt9?\" leaflet-oldie\":\"\")+(x.safari?\" leaflet-safari\":\"\")+(this._fadeAnimated?\" leaflet-fade-anim\":\"\"));var e=be(t,\"position\");e!==\"absolute\"&&e!==\"relative\"&&e!==\"fixed\"&&e!==\"sticky\"&&(t.style.position=\"relative\"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane(\"mapPane\",this._container),Y(this._mapPane,new k(0,0)),this.createPane(\"tilePane\"),this.createPane(\"overlayPane\"),this.createPane(\"shadowPane\"),this.createPane(\"markerPane\"),this.createPane(\"tooltipPane\"),this.createPane(\"popupPane\"),this.options.markerZoomAnimation||(S(t.markerPane,\"leaflet-zoom-hide\"),S(t.shadowPane,\"leaflet-zoom-hide\"))},_resetView:function(t,e,i){Y(this._mapPane,new k(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire(\"viewprereset\");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire(\"viewreset\"),n&&this.fire(\"load\")},_moveStart:function(t,e){return t&&this.fire(\"zoomstart\"),e||this.fire(\"movestart\"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire(\"zoom\",i):((o||i&&i.pinch)&&this.fire(\"zoom\",i),this.fire(\"move\",i)),this},_moveEnd:function(t){return t&&this.fire(\"zoomend\"),this.fire(\"moveend\")},_stop:function(){return mt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Y(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error(\"Set map center and zoom first.\")},_initEvents:function(t){this._targets={},this._targets[g(this._container)]=this;var e=t?U:M;e(this._container,\"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup\",this._handleDOMEvent,this),this.options.trackResize&&e(window,\"resize\",this._onResize,this),x.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,\"moveend\",this._onMoveEnd)},_onResize:function(){mt(this._resizeRequest),this._resizeRequest=lt(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,o=e===\"mouseout\"||e===\"mouseover\",r=t.target||t.srcElement,s=!1;r;){if(n=this._targets[g(r)],n&&(e===\"click\"||e===\"preclick\")&&this._draggableMoved(n)){s=!0;break}if(n&&n.listens(e,!0)&&(o&&!Qi(r,t)||(i.push(n),o))||r===this._container)break;r=r.parentNode}return!i.length&&!s&&!o&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type===\"click\"&&this._isClickDisabled(e))){var i=t.type;i===\"mousedown\"&&Ki(e),this._fireDOMEvent(t,i)}},_mouseEvents:[\"click\",\"dblclick\",\"mouseover\",\"mouseout\",\"contextmenu\"],_fireDOMEvent:function(t,e,i){if(t.type===\"click\"){var n=_({},t);n.type=\"preclick\",this._fireDOMEvent(n,n.type,i)}var o=this._findEventTargets(t,e);if(i){for(var r=[],s=0;s<i.length;s++)i[s].listens(e,!0)&&r.push(i[s]);o=r.concat(o)}if(o.length){e===\"contextmenu\"&&nt(t);var h=o[0],u={originalEvent:t};if(t.type!==\"keypress\"&&t.type!==\"keydown\"&&t.type!==\"keyup\"){var p=h.getLatLng&&(!h._radius||h._radius<=10);u.containerPoint=p?this.latLngToContainerPoint(h.getLatLng()):this.mouseEventToContainerPoint(t),u.layerPoint=this.containerPointToLayerPoint(u.containerPoint),u.latlng=p?h.getLatLng():this.layerPointToLatLng(u.layerPoint)}for(s=0;s<o.length;s++)if(o[s].fire(e,u,!0),u.originalEvent._stopped||o[s].options.bubblingMouseEvents===!1&&Mi(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on(\"load\",t,e),this},_getMapPanePos:function(){return qt(this._mapPane)||new k(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return ct([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),r=new V(n.subtract(o),n.add(o)),s=this._getBoundsOffset(r,i,e);return Math.abs(s.x)<=1&&Math.abs(s.y)<=1?t:this.unproject(n.add(s),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new V(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=ct(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),r=n.max.subtract(t.max),s=this._rebound(o.x,-r.x),h=this._rebound(o.y,-r.y);return new k(s,h)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=x.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire(\"move\")},_onPanTransitionEnd:function(){$(this._mapPane,\"leaflet-pan-anim\"),this.fire(\"moveend\")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=Z(\"div\",\"leaflet-proxy leaflet-zoom-animated\");this._panes.mapPane.appendChild(t),this.on(\"zoomanim\",function(e){var i=Fi,n=this._proxy.style[i];$t(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on(\"load moveend\",this._animMoveEnd,this),this._on(\"unload\",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){j(this._proxy),this.off(\"load moveend\",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();$t(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf(\"transform\")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName(\"leaflet-zoom-animated\").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(o)?!1:(lt(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,S(this._mapPane,\"leaflet-zoom-anim\")),this.fire(\"zoomanim\",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&$(this._mapPane,\"leaflet-zoom-anim\"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire(\"zoom\"),delete this._tempFireZoomEvent,this.fire(\"move\"),this._moveEnd(!0))}});function ds(t,e){return new E(t,e)}var wt=Bt.extend({options:{position:\"topright\"},initialize:function(t){F(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return S(e,\"leaflet-control\"),i.indexOf(\"bottom\")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on(\"unload\",this.remove,this),this},remove:function(){return this._map?(j(this._container),this.onRemove&&this.onRemove(this._map),this._map.off(\"unload\",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ke=function(t){return new wt(t)};E.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e=\"leaflet-\",i=this._controlContainer=Z(\"div\",e+\"control-container\",this._container);function n(o,r){var s=e+o+\" \"+e+r;t[o+r]=Z(\"div\",s,i)}n(\"top\",\"left\"),n(\"top\",\"right\"),n(\"bottom\",\"left\"),n(\"bottom\",\"right\")},_clearControlPos:function(){for(var t in this._controlCorners)j(this._controlCorners[t]);j(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Yn=wt.extend({options:{collapsed:!0,position:\"topright\",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){F(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on(\"zoomend\",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on(\"add remove\",this._onLayerChange,this);return this._container},addTo:function(t){return wt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off(\"zoomend\",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off(\"add remove\",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off(\"add remove\",this._onLayerChange,this);var e=this._getLayer(g(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){S(this._container,\"leaflet-control-layers-expanded\"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(S(this._section,\"leaflet-control-layers-scrollbar\"),this._section.style.height=t+\"px\"):$(this._section,\"leaflet-control-layers-scrollbar\"),this._checkDisabledLayers(),this},collapse:function(){return $(this._container,\"leaflet-control-layers-expanded\"),this},_initLayout:function(){var t=\"leaflet-control-layers\",e=this._container=Z(\"div\",t),i=this.options.collapsed;e.setAttribute(\"aria-haspopup\",!0),Te(e),Ji(e);var n=this._section=Z(\"section\",t+\"-list\");i&&(this._map.on(\"click\",this.collapse,this),M(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=Z(\"a\",t+\"-toggle\",e);o.href=\"#\",o.title=\"Layers\",o.setAttribute(\"role\",\"button\"),M(o,{keydown:function(r){r.keyCode===13&&this._expandSafely()},click:function(r){nt(r),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=Z(\"div\",t+\"-base\",n),this._separator=Z(\"div\",t+\"-separator\",n),this._overlaysList=Z(\"div\",t+\"-overlays\",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&g(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on(\"add remove\",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(c(function(n,o){return this.options.sortFunction(n.layer,o.layer,n.name,o.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;We(this._baseLayersList),We(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?\"\":\"none\"),this._separator.style.display=e&&t?\"\":\"none\",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(g(t.target)),i=e.overlay?t.type===\"add\"?\"overlayadd\":\"overlayremove\":t.type===\"add\"?\"baselayerchange\":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type=\"radio\" class=\"leaflet-control-layers-selector\" name=\"'+t+'\"'+(e?' checked=\"checked\"':\"\")+\"/>\",n=document.createElement(\"div\");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement(\"label\"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement(\"input\"),n.type=\"checkbox\",n.className=\"leaflet-control-layers-selector\",n.defaultChecked=i):n=this._createRadioElement(\"leaflet-base-layers_\"+g(this),i),this._layerControlInputs.push(n),n.layerId=g(t.layer),M(n,\"click\",this._onInputClick,this);var o=document.createElement(\"span\");o.innerHTML=\" \"+t.name;var r=document.createElement(\"span\");e.appendChild(r),r.appendChild(n),r.appendChild(o);var s=t.overlay?this._overlaysList:this._baseLayersList;return s.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],o=[];this._handlingClick=!0;for(var r=t.length-1;r>=0;r--)e=t[r],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||o.push(i);for(r=0;r<o.length;r++)this._map.hasLayer(o[r])&&this._map.removeLayer(o[r]);for(r=0;r<n.length;r++)this._map.hasLayer(n[r])||this._map.addLayer(n[r]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,M(t,\"click\",nt),this.expand();var e=this;setTimeout(function(){U(t,\"click\",nt),e._preventClick=!1})}}),fs=function(t,e,i){return new Yn(t,e,i)},tn=wt.extend({options:{position:\"topleft\",zoomInText:'<span aria-hidden=\"true\">+</span>',zoomInTitle:\"Zoom in\",zoomOutText:'<span aria-hidden=\"true\">&#x2212;</span>',zoomOutTitle:\"Zoom out\"},onAdd:function(t){var e=\"leaflet-control-zoom\",i=Z(\"div\",e+\" leaflet-bar\"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+\"-in\",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+\"-out\",i,this._zoomOut),this._updateDisabled(),t.on(\"zoomend zoomlevelschange\",this._updateDisabled,this),i},onRemove:function(t){t.off(\"zoomend zoomlevelschange\",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var r=Z(\"a\",i,n);return r.innerHTML=t,r.href=\"#\",r.title=e,r.setAttribute(\"role\",\"button\"),r.setAttribute(\"aria-label\",e),Te(r),M(r,\"click\",Xt),M(r,\"click\",o,this),M(r,\"click\",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e=\"leaflet-disabled\";$(this._zoomInButton,e),$(this._zoomOutButton,e),this._zoomInButton.setAttribute(\"aria-disabled\",\"false\"),this._zoomOutButton.setAttribute(\"aria-disabled\",\"false\"),(this._disabled||t._zoom===t.getMinZoom())&&(S(this._zoomOutButton,e),this._zoomOutButton.setAttribute(\"aria-disabled\",\"true\")),(this._disabled||t._zoom===t.getMaxZoom())&&(S(this._zoomInButton,e),this._zoomInButton.setAttribute(\"aria-disabled\",\"true\"))}});E.mergeOptions({zoomControl:!0}),E.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new tn,this.addControl(this.zoomControl))});var ps=function(t){return new tn(t)},Xn=wt.extend({options:{position:\"bottomleft\",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e=\"leaflet-control-scale\",i=Z(\"div\",e),n=this.options;return this._addScales(n,e+\"-line\",i),t.on(n.updateWhenIdle?\"moveend\":\"move\",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?\"moveend\":\"move\",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=Z(\"div\",e,i)),t.imperial&&(this._iScale=Z(\"div\",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+\" m\":e/1e3+\" km\";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,o;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+\" mi\",n/i)):(o=this._getRoundNum(e),this._updateScale(this._iScale,o+\" ft\",o/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+\"px\",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+\"\").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),_s=function(t){return new Xn(t)},ms='<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" class=\"leaflet-attribution-flag\"><path fill=\"#4C7BE1\" d=\"M0 0h12v4H0z\"/><path fill=\"#FFD500\" d=\"M0 4h12v3H0z\"/><path fill=\"#E0BC00\" d=\"M0 7h12v1H0z\"/></svg>',en=wt.extend({options:{position:\"bottomright\",prefix:'<a href=\"https://leafletjs.com\" title=\"A JavaScript library for interactive maps\">'+(x.inlineSvg?ms+\" \":\"\")+\"Leaflet</a>\"},initialize:function(t){F(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=Z(\"div\",\"leaflet-control-attribution\"),Te(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on(\"layeradd\",this._addAttribution,this),this._container},onRemove:function(t){t.off(\"layeradd\",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once(\"remove\",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(\", \")),this._container.innerHTML=i.join(' <span aria-hidden=\"true\">|</span> ')}}});E.mergeOptions({attributionControl:!0}),E.addInitHook(function(){this.options.attributionControl&&new en().addTo(this)});var gs=function(t){return new en(t)};wt.Layers=Yn,wt.Zoom=tn,wt.Scale=Xn,wt.Attribution=en,ke.layers=fs,ke.zoom=ps,ke.scale=_s,ke.attribution=gs;var kt=Bt.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});kt.addTo=function(t,e){return t.addHandler(e,this),this};var vs={Events:pt},Jn=x.touch?\"touchstart mousedown\":\"mousedown\",Wt=ve.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){F(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(M(this._dragStartTarget,Jn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Wt._dragging===this&&this.finishDrag(!0),U(this._dragStartTarget,Jn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Ui(this._element,\"leaflet-zoom-anim\"))){if(t.touches&&t.touches.length!==1){Wt._dragging===this&&this.finishDrag();return}if(!(Wt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Wt._dragging=this,this._preventOutline&&Ki(this._element),Vi(),Pe(),!this._moving)){this.fire(\"down\");var e=t.touches?t.touches[0]:t,i=Vn(this._element);this._startPoint=new k(e.clientX,e.clientY),this._startPos=qt(this._element),this._parentScale=$i(i);var n=t.type===\"mousedown\";M(document,n?\"mousemove\":\"touchmove\",this._onMove,this),M(document,n?\"mouseup\":\"touchend touchcancel\",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new k(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,nt(t),this._moved||(this.fire(\"dragstart\"),this._moved=!0,S(document.body,\"leaflet-dragging\"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),S(this._lastTarget,\"leaflet-drag-target\")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire(\"predrag\",t),Y(this._element,this._newPos),this.fire(\"drag\",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){$(document.body,\"leaflet-dragging\"),this._lastTarget&&($(this._lastTarget,\"leaflet-drag-target\"),this._lastTarget=null),U(document,\"mousemove touchmove\",this._onMove,this),U(document,\"mouseup touchend touchcancel\",this._onUp,this),ji(),Ce();var e=this._moved&&this._moving;this._moving=!1,Wt._dragging=!1,e&&this.fire(\"dragend\",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Qn(t,e,i){var n,o=[1,4,2,8],r,s,h,u,p,v,b,O;for(r=0,v=t.length;r<v;r++)t[r]._code=Jt(t[r],e);for(h=0;h<4;h++){for(b=o[h],n=[],r=0,v=t.length,s=v-1;r<v;s=r++)u=t[r],p=t[s],u._code&b?p._code&b||(O=$e(p,u,b,e,i),O._code=Jt(O,e),n.push(O)):(p._code&b&&(O=$e(p,u,b,e,i),O._code=Jt(O,e),n.push(O)),n.push(u));t=n}return t}function to(t,e){var i,n,o,r,s,h,u,p,v;if(!t||t.length===0)throw new Error(\"latlngs not passed\");vt(t)||(console.warn(\"latlngs are not flat! Only the first ring will be used\"),t=t[0]);var b=z([0,0]),O=q(t),ht=O.getNorthWest().distanceTo(O.getSouthWest())*O.getNorthEast().distanceTo(O.getNorthWest());ht<1700&&(b=nn(t));var et=t.length,yt=[];for(i=0;i<et;i++){var dt=z(t[i]);yt.push(e.project(z([dt.lat-b.lat,dt.lng-b.lng])))}for(h=u=p=0,i=0,n=et-1;i<et;n=i++)o=yt[i],r=yt[n],s=o.y*r.x-r.y*o.x,u+=(o.x+r.x)*s,p+=(o.y+r.y)*s,h+=s*3;h===0?v=yt[0]:v=[u/h,p/h];var le=e.unproject(T(v));return z([le.lat+b.lat,le.lng+b.lng])}function nn(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var r=z(t[o]);e+=r.lat,i+=r.lng,n++}return z([e/n,i/n])}var ys={__proto__:null,clipPolygon:Qn,polygonCenter:to,centroid:nn};function eo(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=bs(t,i),t=ws(t,i),t}function io(t,e,i){return Math.sqrt(Me(t,e,i,!0))}function xs(t,e,i){return Me(t,e,i)}function ws(t,e){var i=t.length,n=typeof Uint8Array<\"u\"?Uint8Array:Array,o=new n(i);o[0]=o[i-1]=1,on(t,o,e,0,i-1);var r,s=[];for(r=0;r<i;r++)o[r]&&s.push(t[r]);return s}function on(t,e,i,n,o){var r=0,s,h,u;for(h=n+1;h<=o-1;h++)u=Me(t[h],t[n],t[o],!0),u>r&&(s=h,r=u);r>i&&(e[s]=1,on(t,e,i,n,s),on(t,e,i,s,o))}function bs(t,e){for(var i=[t[0]],n=1,o=0,r=t.length;n<r;n++)Ps(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<r-1&&i.push(t[r-1]),i}var no;function oo(t,e,i,n,o){var r=n?no:Jt(t,i),s=Jt(e,i),h,u,p;for(no=s;;){if(!(r|s))return[t,e];if(r&s)return!1;h=r||s,u=$e(t,e,h,i,o),p=Jt(u,i),h===r?(t=u,r=p):(e=u,s=p)}}function $e(t,e,i,n,o){var r=e.x-t.x,s=e.y-t.y,h=n.min,u=n.max,p,v;return i&8?(p=t.x+r*(u.y-t.y)/s,v=u.y):i&4?(p=t.x+r*(h.y-t.y)/s,v=h.y):i&2?(p=u.x,v=t.y+s*(u.x-t.x)/r):i&1&&(p=h.x,v=t.y+s*(h.x-t.x)/r),new k(p,v,o)}function Jt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function Ps(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function Me(t,e,i,n){var o=e.x,r=e.y,s=i.x-o,h=i.y-r,u=s*s+h*h,p;return u>0&&(p=((t.x-o)*s+(t.y-r)*h)/u,p>1?(o=i.x,r=i.y):p>0&&(o+=s*p,r+=h*p)),s=t.x-o,h=t.y-r,n?s*s+h*h:new k(o,r)}function vt(t){return!xt(t[0])||typeof t[0][0]!=\"object\"&&typeof t[0][0]<\"u\"}function ro(t){return console.warn(\"Deprecated use of _flat, please use L.LineUtil.isFlat instead.\"),vt(t)}function so(t,e){var i,n,o,r,s,h,u,p;if(!t||t.length===0)throw new Error(\"latlngs not passed\");vt(t)||(console.warn(\"latlngs are not flat! Only the first ring will be used\"),t=t[0]);var v=z([0,0]),b=q(t),O=b.getNorthWest().distanceTo(b.getSouthWest())*b.getNorthEast().distanceTo(b.getNorthWest());O<1700&&(v=nn(t));var ht=t.length,et=[];for(i=0;i<ht;i++){var yt=z(t[i]);et.push(e.project(z([yt.lat-v.lat,yt.lng-v.lng])))}for(i=0,n=0;i<ht-1;i++)n+=et[i].distanceTo(et[i+1])/2;if(n===0)p=et[0];else for(i=0,r=0;i<ht-1;i++)if(s=et[i],h=et[i+1],o=s.distanceTo(h),r+=o,r>n){u=(r-n)/o,p=[h.x-u*(h.x-s.x),h.y-u*(h.y-s.y)];break}var dt=e.unproject(T(p));return z([dt.lat+v.lat,dt.lng+v.lng])}var Cs={__proto__:null,simplify:eo,pointToSegmentDistance:io,closestPointOnSegment:xs,clipSegment:oo,_getEdgeIntersection:$e,_getBitCode:Jt,_sqClosestPointOnSegment:Me,isFlat:vt,_flat:ro,polylineCenter:so},rn={project:function(t){return new k(t.lng,t.lat)},unproject:function(t){return new R(t.y,t.x)},bounds:new V([-180,-90],[180,90])},sn={R:6378137,R_MINOR:6356752314245179e-9,bounds:new V([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,r=Math.sqrt(1-o*o),s=r*Math.sin(n),h=Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),r/2);return n=-i*Math.log(Math.max(h,1e-10)),new k(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,o=Math.sqrt(1-n*n),r=Math.exp(-t.y/i),s=Math.PI/2-2*Math.atan(r),h=0,u=.1,p;h<15&&Math.abs(u)>1e-7;h++)p=o*Math.sin(s),p=Math.pow((1-p)/(1+p),o/2),u=Math.PI/2-2*Math.atan(r*p)-s,s+=u;return new R(s*e,t.x*e/i)}},Ls={__proto__:null,LonLat:rn,Mercator:sn,SphericalMercator:Ii},Ts=_({},Ht,{code:\"EPSG:3395\",projection:sn,transformation:function(){var t=.5/(Math.PI*sn.R);return ye(t,.5,-t,.5)}()}),ao=_({},Ht,{code:\"EPSG:4326\",projection:rn,transformation:ye(1/180,1,-1/180,.5)}),ks=_({},Zt,{projection:rn,transformation:ye(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});Zt.Earth=Ht,Zt.EPSG3395=Ts,Zt.EPSG3857=Ei,Zt.EPSG900913=Er,Zt.EPSG4326=ao,Zt.Simple=ks;var bt=ve.extend({options:{pane:\"overlayPane\",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[g(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[g(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once(\"remove\",function(){e.off(i,this)},this)}this.onAdd(e),this.fire(\"add\"),e.fire(\"layeradd\",{layer:this})}}});E.include({addLayer:function(t){if(!t._layerAdd)throw new Error(\"The provided object is not a Layer.\");var e=g(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=g(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire(\"layerremove\",{layer:t}),t.fire(\"remove\")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return g(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?xt(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[g(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=g(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=o.minZoom===void 0?t:Math.min(t,o.minZoom),e=o.maxZoom===void 0?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire(\"zoomlevelschange\"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var oe=bt.extend({initialize:function(t,e){F(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t==\"number\"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke(\"setZIndex\",t)},getLayerId:function(t){return g(t)}}),Ms=function(t,e){return new oe(t,e)},At=oe.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),oe.prototype.addLayer.call(this,t),this.fire(\"layeradd\",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),oe.prototype.removeLayer.call(this,t),this.fire(\"layerremove\",{layer:t})):this},setStyle:function(t){return this.invoke(\"setStyle\",t)},bringToFront:function(){return this.invoke(\"bringToFront\")},bringToBack:function(){return this.invoke(\"bringToBack\")},getBounds:function(){var t=new ut;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),Ss=function(t,e){return new At(t,e)},re=Bt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){F(this,t)},createIcon:function(t){return this._createIcon(\"icon\",t)},createShadow:function(t){return this._createIcon(\"shadow\",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t===\"icon\")throw new Error(\"iconUrl not set in Icon options (see the docs).\");return null}var n=this._createImg(i,e&&e.tagName===\"IMG\"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin===\"\")&&(n.crossOrigin=this.options.crossOrigin===!0?\"\":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+\"Size\"];typeof n==\"number\"&&(n=[n,n]);var o=T(n),r=T(e===\"shadow\"&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className=\"leaflet-marker-\"+e+\" \"+(i.className||\"\"),r&&(t.style.marginLeft=-r.x+\"px\",t.style.marginTop=-r.y+\"px\"),o&&(t.style.width=o.x+\"px\",t.style.height=o.y+\"px\")},_createImg:function(t,e){return e=e||document.createElement(\"img\"),e.src=t,e},_getIconUrl:function(t){return x.retina&&this.options[t+\"RetinaUrl\"]||this.options[t+\"Url\"]}});function Os(t){return new re(t)}var Se=re.extend({options:{iconUrl:\"marker-icon.png\",iconRetinaUrl:\"marker-icon-2x.png\",shadowUrl:\"marker-shadow.png\",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof Se.imagePath!=\"string\"&&(Se.imagePath=this._detectIconPath()),(this.options.imagePath||Se.imagePath)+re.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,o){var r=n.exec(i);return r&&r[o]};return t=e(t,/^url\\((['\"])?(.+)\\1\\)$/,2),t&&e(t,/^(.*)marker-icon\\.png$/,1)},_detectIconPath:function(){var t=Z(\"div\",\"leaflet-default-icon-path\",document.body),e=be(t,\"background-image\")||be(t,\"backgroundImage\");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$=\"leaflet.css\"]');return i?i.href.substring(0,i.href.length-11-1):\"\"}}),ho=kt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Wt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),S(t,\"leaflet-marker-draggable\")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&$(this._marker._icon,\"leaflet-marker-draggable\")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,r=qt(e._icon),s=i.getPixelBounds(),h=i.getPixelOrigin(),u=ct(s.min._subtract(h).add(o),s.max._subtract(h).subtract(o));if(!u.contains(r)){var p=T((Math.max(u.max.x,r.x)-u.max.x)/(s.max.x-u.max.x)-(Math.min(u.min.x,r.x)-u.min.x)/(s.min.x-u.min.x),(Math.max(u.max.y,r.y)-u.max.y)/(s.max.y-u.max.y)-(Math.min(u.min.y,r.y)-u.min.y)/(s.min.y-u.min.y)).multiplyBy(n);i.panBy(p,{animate:!1}),this._draggable._newPos._add(p),this._draggable._startPos._add(p),Y(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=lt(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire(\"movestart\").fire(\"dragstart\")},_onPreDrag:function(t){this._marker.options.autoPan&&(mt(this._panRequest),this._panRequest=lt(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=qt(e._icon),o=e._map.layerPointToLatLng(n);i&&Y(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire(\"move\",t).fire(\"drag\",t)},_onDragEnd:function(t){mt(this._panRequest),delete this._oldLatLng,this._marker.fire(\"moveend\").fire(\"dragend\",t)}}),qe=bt.extend({options:{icon:new Se,interactive:!0,keyboard:!0,title:\"\",alt:\"Marker\",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:\"markerPane\",shadowPane:\"shadowPane\",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){F(this,e),this._latlng=z(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on(\"zoomanim\",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off(\"zoomanim\",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=z(t),this.update(),this.fire(\"move\",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=\"leaflet-zoom-\"+(this._zoomAnimated?\"animated\":\"hide\"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName===\"IMG\"&&(i.alt=t.alt||\"\")),S(i,e),t.keyboard&&(i.tabIndex=\"0\",i.setAttribute(\"role\",\"button\")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&M(i,\"focus\",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),r=!1;o!==this._shadow&&(this._removeShadow(),r=!0),o&&(S(o,e),o.alt=\"\"),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&r&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&U(this._icon,\"focus\",this._panOnFocus,this),j(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&j(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Y(this._icon,t),this._shadow&&Y(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(S(this._icon,\"leaflet-interactive\"),this.addInteractiveTarget(this._icon),ho)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ho(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&gt(this._icon,t),this._shadow&&gt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?T(e.iconSize):T(0,0),n=e.iconAnchor?T(e.iconAnchor):T(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Is(t,e){return new qe(t,e)}var Vt=bt.extend({options:{stroke:!0,color:\"#3388ff\",weight:3,opacity:1,lineCap:\"round\",lineJoin:\"round\",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:\"evenodd\",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return F(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,\"weight\")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ye=Vt.extend({options:{fill:!0,radius:10},initialize:function(t,e){F(this,e),this._latlng=z(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=z(t),this.redraw(),this.fire(\"move\",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Vt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new V(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function zs(t,e){return new Ye(t,e)}var an=Ye.extend({initialize:function(t,e,i){if(typeof e==\"number\"&&(e=_({},i,{radius:e})),F(this,e),this._latlng=z(t),isNaN(this.options.radius))throw new Error(\"Circle radius cannot be NaN\");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new ut(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Vt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===Ht.distance){var o=Math.PI/180,r=this._mRadius/Ht.R/o,s=i.project([e+r,t]),h=i.project([e-r,t]),u=s.add(h).divideBy(2),p=i.unproject(u).lat,v=Math.acos((Math.cos(r*o)-Math.sin(e*o)*Math.sin(p*o))/(Math.cos(e*o)*Math.cos(p*o)))/o;(isNaN(v)||v===0)&&(v=r/Math.cos(Math.PI/180*e)),this._point=u.subtract(i.getPixelOrigin()),this._radius=isNaN(v)?0:u.x-i.project([p,t-v]).x,this._radiusY=u.y-s.y}else{var b=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(b).x}this._updateBounds()}});function Es(t,e,i){return new an(t,e,i)}var Dt=Vt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){F(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=Me,o,r,s=0,h=this._parts.length;s<h;s++)for(var u=this._parts[s],p=1,v=u.length;p<v;p++){o=u[p-1],r=u[p];var b=n(t,o,r,!0);b<e&&(e=b,i=n(t,o,r))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error(\"Must add layer to map before using getCenter()\");return so(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=z(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new ut,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return vt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=vt(t),n=0,o=t.length;n<o;n++)i?(e[n]=z(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new V;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new k(t,t);this._rawPxBounds&&(this._pxBounds=new V([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof R,o=t.length,r,s;if(n){for(s=[],r=0;r<o;r++)s[r]=this._map.latLngToLayerPoint(t[r]),i.extend(s[r]);e.push(s)}else for(r=0;r<o;r++)this._projectLatlngs(t[r],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,o,r,s,h,u;for(i=0,o=0,r=this._rings.length;i<r;i++)for(u=this._rings[i],n=0,s=u.length;n<s-1;n++)h=oo(u[n],u[n+1],t,n,!0),h&&(e[o]=e[o]||[],e[o].push(h[0]),(h[1]!==u[n+1]||n===s-2)&&(e[o].push(h[1]),o++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=eo(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,r,s,h,u=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,r=this._parts.length;i<r;i++)for(h=this._parts[i],n=0,s=h.length,o=s-1;n<s;o=n++)if(!(!e&&n===0)&&io(t,h[o],h[n])<=u)return!0;return!1}});function Bs(t,e){return new Dt(t,e)}Dt._flat=ro;var se=Dt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error(\"Must add layer to map before using getCenter()\");return to(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=Dt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof R&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){Dt.prototype._setLatLngs.call(this,t),vt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return vt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new k(e,e);if(t=new V(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,o=this._rings.length,r;n<o;n++)r=Qn(this._rings[n],t,!0),r.length&&this._parts.push(r)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,o,r,s,h,u,p;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(r=0,u=this._parts.length;r<u;r++)for(i=this._parts[r],s=0,p=i.length,h=p-1;s<p;h=s++)n=i[s],o=i[h],n.y>t.y!=o.y>t.y&&t.x<(o.x-n.x)*(t.y-n.y)/(o.y-n.y)+n.x&&(e=!e);return e||Dt.prototype._containsPoint.call(this,t,!0)}});function Zs(t,e){return new se(t,e)}var Rt=At.extend({initialize:function(t,e){F(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=xt(t)?t:t.features,i,n,o;if(e){for(i=0,n=e.length;i<n;i++)o=e[i],(o.geometries||o.geometry||o.features||o.coordinates)&&this.addData(o);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var s=Xe(t,r);return s?(s.feature=ti(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=_({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e==\"function\"&&(e=e(t.feature)),t.setStyle(e))}});function Xe(t,e){var i=t.type===\"Feature\"?t.geometry:t,n=i?i.coordinates:null,o=[],r=e&&e.pointToLayer,s=e&&e.coordsToLatLng||hn,h,u,p,v;if(!n&&!i)return null;switch(i.type){case\"Point\":return h=s(n),lo(r,t,h,e);case\"MultiPoint\":for(p=0,v=n.length;p<v;p++)h=s(n[p]),o.push(lo(r,t,h,e));return new At(o);case\"LineString\":case\"MultiLineString\":return u=Je(n,i.type===\"LineString\"?0:1,s),new Dt(u,e);case\"Polygon\":case\"MultiPolygon\":return u=Je(n,i.type===\"Polygon\"?1:2,s),new se(u,e);case\"GeometryCollection\":for(p=0,v=i.geometries.length;p<v;p++){var b=Xe({geometry:i.geometries[p],type:\"Feature\",properties:t.properties},e);b&&o.push(b)}return new At(o);case\"FeatureCollection\":for(p=0,v=i.features.length;p<v;p++){var O=Xe(i.features[p],e);O&&o.push(O)}return new At(o);default:throw new Error(\"Invalid GeoJSON object.\")}}function lo(t,e,i,n){return t?t(e,i):new qe(i,n&&n.markersInheritOptions&&n)}function hn(t){return new R(t[1],t[0],t[2])}function Je(t,e,i){for(var n=[],o=0,r=t.length,s;o<r;o++)s=e?Je(t[o],e-1,i):(i||hn)(t[o]),n.push(s);return n}function ln(t,e){return t=z(t),t.alt!==void 0?[tt(t.lng,e),tt(t.lat,e),tt(t.alt,e)]:[tt(t.lng,e),tt(t.lat,e)]}function Qe(t,e,i,n){for(var o=[],r=0,s=t.length;r<s;r++)o.push(e?Qe(t[r],vt(t[r])?0:e-1,i,n):ln(t[r],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function ae(t,e){return t.feature?_({},t.feature,{geometry:e}):ti(e)}function ti(t){return t.type===\"Feature\"||t.type===\"FeatureCollection\"?t:{type:\"Feature\",properties:{},geometry:t}}var cn={toGeoJSON:function(t){return ae(this,{type:\"Point\",coordinates:ln(this.getLatLng(),t)})}};qe.include(cn),an.include(cn),Ye.include(cn),Dt.include({toGeoJSON:function(t){var e=!vt(this._latlngs),i=Qe(this._latlngs,e?1:0,!1,t);return ae(this,{type:(e?\"Multi\":\"\")+\"LineString\",coordinates:i})}}),se.include({toGeoJSON:function(t){var e=!vt(this._latlngs),i=e&&!vt(this._latlngs[0]),n=Qe(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),ae(this,{type:(i?\"Multi\":\"\")+\"Polygon\",coordinates:n})}}),oe.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),ae(this,{type:\"MultiPoint\",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e===\"MultiPoint\")return this.toMultiPoint(t);var i=e===\"GeometryCollection\",n=[];return this.eachLayer(function(o){if(o.toGeoJSON){var r=o.toGeoJSON(t);if(i)n.push(r.geometry);else{var s=ti(r);s.type===\"FeatureCollection\"?n.push.apply(n,s.features):n.push(s)}}}),i?ae(this,{geometries:n,type:\"GeometryCollection\"}):{type:\"FeatureCollection\",features:n}}});function co(t,e){return new Rt(t,e)}var As=co,ei=bt.extend({options:{opacity:1,alt:\"\",interactive:!1,crossOrigin:!1,errorOverlayUrl:\"\",zIndex:1,className:\"\"},initialize:function(t,e,i){this._url=t,this._bounds=q(e),F(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(S(this._image,\"leaflet-interactive\"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){j(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ie(this._image),this},bringToBack:function(){return this._map&&ne(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=q(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName===\"IMG\",e=this._image=t?this._url:Z(\"img\");if(S(e,\"leaflet-image-layer\"),this._zoomAnimated&&S(e,\"leaflet-zoom-animated\"),this.options.className&&S(e,this.options.className),e.onselectstart=I,e.onmousemove=I,e.onload=c(this.fire,this,\"load\"),e.onerror=c(this._overlayOnError,this,\"error\"),(this.options.crossOrigin||this.options.crossOrigin===\"\")&&(e.crossOrigin=this.options.crossOrigin===!0?\"\":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;$t(this._image,i,e)},_reset:function(){var t=this._image,e=new V(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();Y(t,e.min),t.style.width=i.x+\"px\",t.style.height=i.y+\"px\"},_updateOpacity:function(){gt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire(\"error\");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Ds=function(t,e,i){return new ei(t,e,i)},uo=ei.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName===\"VIDEO\",e=this._image=t?this._url:Z(\"video\");if(S(e,\"leaflet-image-layer\"),this._zoomAnimated&&S(e,\"leaflet-zoom-animated\"),this.options.className&&S(e,this.options.className),e.onselectstart=I,e.onmousemove=I,e.onloadeddata=c(this.fire,this,\"load\"),t){for(var i=e.getElementsByTagName(\"source\"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src];return}xt(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,\"objectFit\")&&(e.style.objectFit=\"fill\"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var r=0;r<this._url.length;r++){var s=Z(\"source\");s.src=this._url[r],e.appendChild(s)}}});function Rs(t,e,i){return new uo(t,e,i)}var fo=ei.extend({_initImage:function(){var t=this._image=this._url;S(t,\"leaflet-image-layer\"),this._zoomAnimated&&S(t,\"leaflet-zoom-animated\"),this.options.className&&S(t,this.options.className),t.onselectstart=I,t.onmousemove=I}});function Ns(t,e,i){return new fo(t,e,i)}var Mt=bt.extend({options:{interactive:!1,offset:[0,0],className:\"\",pane:void 0,content:\"\"},initialize:function(t,e){t&&(t instanceof R||xt(t))?(this._latlng=z(t),F(this,e)):(F(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&gt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&gt(this._container,1),this.bringToFront(),this.options.interactive&&(S(this._container,\"leaflet-interactive\"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(gt(this._container,0),this._removeTimeout=setTimeout(c(j,void 0,this._container),200)):j(this._container),this.options.interactive&&($(this._container,\"leaflet-interactive\"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=z(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility=\"hidden\",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility=\"\",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ie(this._container),this},bringToBack:function(){return this._map&&ne(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof At){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error(\"Unable to get source layer LatLng.\");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content==\"function\"?this._content(this._source||this):this._content;if(typeof e==\"string\")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire(\"contentupdate\")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=T(this.options.offset),i=this._getAnchor();this._zoomAnimated?Y(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+\"px\",this._container.style.left=o+\"px\"}},_getAnchor:function(){return[0,0]}});E.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),bt.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(F(o,n),o._source=this):(o=e&&!n?e:new t(n,this),o.setContent(i)),o}});var ii=Mt.extend({options:{pane:\"popupPane\",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:\"\"},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Mt.prototype.openOn.call(this,t)},onAdd:function(t){Mt.prototype.onAdd.call(this,t),t.fire(\"popupopen\",{popup:this}),this._source&&(this._source.fire(\"popupopen\",{popup:this},!0),this._source instanceof Vt||this._source.on(\"preclick\",Yt))},onRemove:function(t){Mt.prototype.onRemove.call(this,t),t.fire(\"popupclose\",{popup:this}),this._source&&(this._source.fire(\"popupclose\",{popup:this},!0),this._source instanceof Vt||this._source.off(\"preclick\",Yt))},getEvents:function(){var t=Mt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t=\"leaflet-popup\",e=this._container=Z(\"div\",t+\" \"+(this.options.className||\"\")+\" leaflet-zoom-animated\"),i=this._wrapper=Z(\"div\",t+\"-content-wrapper\",e);if(this._contentNode=Z(\"div\",t+\"-content\",i),Te(e),Ji(this._contentNode),M(e,\"contextmenu\",Yt),this._tipContainer=Z(\"div\",t+\"-tip-container\",e),this._tip=Z(\"div\",t+\"-tip\",this._tipContainer),this.options.closeButton){var n=this._closeButton=Z(\"a\",t+\"-close-button\",e);n.setAttribute(\"role\",\"button\"),n.setAttribute(\"aria-label\",\"Close popup\"),n.href=\"#close\",n.innerHTML='<span aria-hidden=\"true\">&#215;</span>',M(n,\"click\",function(o){nt(o),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width=\"\",e.whiteSpace=\"nowrap\";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+\"px\",e.whiteSpace=\"\",e.height=\"\";var n=t.offsetHeight,o=this.options.maxHeight,r=\"leaflet-popup-scrolled\";o&&n>o?(e.height=o+\"px\",S(t,r)):$(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();Y(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(be(this._container,\"marginBottom\"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new k(this._containerLeft,-i-this._containerBottom);o._add(qt(this._container));var r=t.layerPointToContainerPoint(o),s=T(this.options.autoPanPadding),h=T(this.options.autoPanPaddingTopLeft||s),u=T(this.options.autoPanPaddingBottomRight||s),p=t.getSize(),v=0,b=0;r.x+n+u.x>p.x&&(v=r.x+n-p.x+u.x),r.x-v-h.x<0&&(v=r.x-h.x),r.y+i+u.y>p.y&&(b=r.y+i-p.y+u.y),r.y-b-h.y<0&&(b=r.y-h.y),(v||b)&&(this.options.keepInView&&(this._autopanning=!0),t.fire(\"autopanstart\").panBy([v,b]))}},_getAnchor:function(){return T(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Fs=function(t,e){return new ii(t,e)};E.mergeOptions({closePopupOnClick:!0}),E.include({openPopup:function(t,e,i){return this._initOverlay(ii,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),bt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(ii,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof At||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Xt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Vt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var ni=Mt.extend({options:{pane:\"tooltipPane\",offset:[0,0],direction:\"auto\",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Mt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire(\"tooltipopen\",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire(\"tooltipopen\",{tooltip:this},!0))},onRemove:function(t){Mt.prototype.onRemove.call(this,t),t.fire(\"tooltipclose\",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire(\"tooltipclose\",{tooltip:this},!0))},getEvents:function(){var t=Mt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t=\"leaflet-tooltip\",e=t+\" \"+(this.options.className||\"\")+\" leaflet-zoom-\"+(this._zoomAnimated?\"animated\":\"hide\");this._contentNode=this._container=Z(\"div\",e),this._container.setAttribute(\"role\",\"tooltip\"),this._container.setAttribute(\"id\",\"leaflet-tooltip-\"+g(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,r=n.latLngToContainerPoint(n.getCenter()),s=n.layerPointToContainerPoint(t),h=this.options.direction,u=o.offsetWidth,p=o.offsetHeight,v=T(this.options.offset),b=this._getAnchor();h===\"top\"?(e=u/2,i=p):h===\"bottom\"?(e=u/2,i=0):h===\"center\"?(e=u/2,i=p/2):h===\"right\"?(e=0,i=p/2):h===\"left\"?(e=u,i=p/2):s.x<r.x?(h=\"right\",e=0,i=p/2):(h=\"left\",e=u+(v.x+b.x)*2,i=p/2),t=t.subtract(T(e,i,!0)).add(v).add(b),$(o,\"leaflet-tooltip-right\"),$(o,\"leaflet-tooltip-left\"),$(o,\"leaflet-tooltip-top\"),$(o,\"leaflet-tooltip-bottom\"),S(o,\"leaflet-tooltip-\"+h),Y(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&gt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return T(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Us=function(t,e){return new ni(t,e)};E.include({openTooltip:function(t,e,i){return this._initOverlay(ni,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),bt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ni,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?\"off\":\"on\",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof At||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement==\"function\"&&t.getElement();e&&(M(e,\"focus\",function(){this._tooltip._source=t,this.openTooltip()},this),M(e,\"blur\",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement==\"function\"&&t.getElement();e&&e.setAttribute(\"aria-describedby\",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once(\"moveend\",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var po=re.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:\"leaflet-div-icon\"},createIcon:function(t){var e=t&&t.tagName===\"DIV\"?t:document.createElement(\"div\"),i=this.options;if(i.html instanceof Element?(We(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:\"\",i.bgPos){var n=T(i.bgPos);e.style.backgroundPosition=-n.x+\"px \"+-n.y+\"px\"}return this._setIconStyles(e,\"icon\"),e},createShadow:function(){return null}});function Hs(t){return new po(t)}re.Default=Se;var Oe=bt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:x.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:\"tilePane\",className:\"\",keepBuffer:2},initialize:function(t){F(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),j(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ie(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ne(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=N(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement(\"div\")},getTileSize:function(){var t=this.options.tileSize;return t instanceof k?t:new k(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,o=e.length,r;n<o;n++)r=e[n].style.zIndex,e[n]!==this._container&&r&&(i=t(i,+r));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!x.ielt9){gt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(!(!o.current||!o.loaded)){var r=Math.min(1,(t-o.loaded)/200);gt(o.el,r),r<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(mt(this._fadeFrame),this._fadeFrame=lt(this._updateOpacity,this))}},_onOpaqueTile:I,_initContainer:function(){this._container||(this._container=Z(\"div\",\"leaflet-layer \"+(this.options.className||\"\")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(j(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||(n=this._levels[t]={},n.el=Z(\"div\",\"leaflet-tile-container leaflet-zoom-animated\",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),I(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:I,_onRemoveLevel:I,_onCreateLevel:I,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)j(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),r=Math.floor(e/2),s=i-1,h=new k(+o,+r);h.z=+s;var u=this._tileCoordsToKey(h),p=this._tiles[u];return p&&p.active?(p.retain=!0,!0):(p&&p.loaded&&(p.retain=!0),s>n?this._retainParent(o,r,s,n):!1)},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var r=2*e;r<2*e+2;r++){var s=new k(o,r);s.z=i+1;var h=this._tileCoordsToKey(s),u=this._tiles[h];if(u&&u.active){u.retain=!0;continue}else u&&u.loaded&&(u.retain=!0);i+1<n&&this._retainChildren(o,r,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);this.options.maxZoom!==void 0&&o>this.options.maxZoom||this.options.minZoom!==void 0&&o<this.options.minZoom?o=void 0:o=this._clampZoom(o);var r=this.options.updateWhenZooming&&o!==this._tileZoom;(!n||r)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),o!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();x.any3d?$t(t.el,o,n):Y(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(n*2);return new V(o.subtract(r),o.add(r))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),r=o.getCenter(),s=[],h=this.options.keepBuffer,u=new V(o.getBottomLeft().subtract([h,-h]),o.getTopRight().add([h,-h]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error(\"Attempted to load an infinite number of tiles\");for(var p in this._tiles){var v=this._tiles[p].coords;(v.z!==this._tileZoom||!u.contains(new k(v.x,v.y)))&&(this._tiles[p].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var b=o.min.y;b<=o.max.y;b++)for(var O=o.min.x;O<=o.max.x;O++){var ht=new k(O,b);if(ht.z=this._tileZoom,!!this._isValidTile(ht)){var et=this._tiles[this._tileCoordsToKey(ht)];et?et.current=!0:s.push(ht)}}if(s.sort(function(dt,le){return dt.distanceTo(r)-le.distanceTo(r)}),s.length!==0){this._loading||(this._loading=!0,this.fire(\"loading\"));var yt=document.createDocumentFragment();for(O=0;O<s.length;O++)this._addTile(s[O],yt);this._level.el.appendChild(yt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return q(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i),r=e.unproject(n,t.z),s=e.unproject(o,t.z);return[r,s]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new ut(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+\":\"+t.y+\":\"+t.z},_keyToTileCoords:function(t){var e=t.split(\":\"),i=new k(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(j(e.el),delete this._tiles[t],this.fire(\"tileunload\",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){S(t,\"leaflet-tile\");var e=this.getTileSize();t.style.width=e.x+\"px\",t.style.height=e.y+\"px\",t.onselectstart=I,t.onmousemove=I,x.ielt9&&this.options.opacity<1&&gt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),c(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&lt(c(this._tileReady,this,t,null,o)),Y(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire(\"tileloadstart\",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire(\"tileerror\",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(gt(i.el,0),mt(this._fadeFrame),this._fadeFrame=lt(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(S(i.el,\"leaflet-tile-loaded\"),this.fire(\"tileload\",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire(\"load\"),x.ielt9||!this._map._fadeAnimated?lt(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new k(this._wrapX?K(t.x,this._wrapX):t.x,this._wrapY?K(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new V(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Ws(t){return new Oe(t)}var he=Oe.extend({options:{minZoom:0,maxZoom:18,subdomains:\"abc\",errorTileUrl:\"\",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=F(this,e),e.detectRetina&&x.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains==\"string\"&&(e.subdomains=e.subdomains.split(\"\")),this.on(\"tileunload\",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement(\"img\");return M(i,\"load\",c(this._tileOnLoad,this,e,i)),M(i,\"error\",c(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin===\"\")&&(i.crossOrigin=this.options.crossOrigin===!0?\"\":this.options.crossOrigin),typeof this.options.referrerPolicy==\"string\"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt=\"\",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:x.retina?\"@2x\":\"\",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e[\"-y\"]=i}return _n(this._url,_(e,this.options))},_tileOnLoad:function(t,e){x.ielt9?setTimeout(c(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute(\"src\")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=I,e.onerror=I,!e.complete)){e.src=Fe;var i=this._tiles[t].coords;j(e),delete this._tiles[t],this.fire(\"tileabort\",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute(\"src\",Fe),Oe.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute(\"src\")===Fe))return Oe.prototype._tileReady.call(this,t,e,i)}});function _o(t,e){return new he(t,e)}var mo=he.extend({defaultWmsParams:{service:\"WMS\",request:\"GetMap\",layers:\"\",styles:\"\",format:\"image/jpeg\",transparent:!1,version:\"1.1.1\"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=_({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=F(this,e);var o=e.detectRetina&&x.retina?2:1,r=this.getTileSize();i.width=r.x*o,i.height=r.y*o,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?\"crs\":\"srs\";this.wmsParams[e]=this._crs.code,he.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=ct(i.project(e[0]),i.project(e[1])),o=n.min,r=n.max,s=(this._wmsVersion>=1.3&&this._crs===ao?[o.y,o.x,r.y,r.x]:[o.x,o.y,r.x,r.y]).join(\",\"),h=he.prototype.getTileUrl.call(this,t);return h+Ne(this.wmsParams,h,this.options.uppercase)+(this.options.uppercase?\"&BBOX=\":\"&bbox=\")+s},setParams:function(t,e){return _(this.wmsParams,t),e||this.redraw(),this}});function Vs(t,e){return new mo(t,e)}he.WMS=mo,_o.wms=Vs;var Nt=bt.extend({options:{padding:.1},initialize:function(t){F(this,t),g(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),S(this._container,\"leaflet-zoom-animated\")),this.getPane().appendChild(this._container),this._update(),this.on(\"update\",this._updatePaths,this)},onRemove:function(){this.off(\"update\",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),r=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));x.any3d?$t(this._container,r,i):Y(this._container,r)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new V(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),go=Nt.extend({options:{tolerance:0},getEvents:function(){var t=Nt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Nt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement(\"canvas\");M(t,\"mousemove\",this._onMouseMove,this),M(t,\"click dblclick mousedown mouseup contextmenu\",this._onClick,this),M(t,\"mouseout\",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext(\"2d\")},_destroyContainer:function(){mt(this._redrawRequest),delete this._ctx,j(this._container),U(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Nt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=x.retina?2:1;Y(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+\"px\",e.style.height=i.y+\"px\",x.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire(\"update\")}},_reset:function(){Nt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[g(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[g(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray==\"string\"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,o;for(o=0;o<e.length;o++){if(n=Number(e[o]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||lt(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new V,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,r,s=t._parts,h=s.length,u=this._ctx;if(h){for(u.beginPath(),i=0;i<h;i++){for(n=0,o=s[i].length;n<o;n++)r=s[i][n],u[n?\"lineTo\":\"moveTo\"](r.x,r.y);e&&u.closePath()}this._fillStroke(u,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;o!==1&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,Math.PI*2,!1),o!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||\"evenodd\")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type===\"click\"||t.type===\"preclick\")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&($(this._container,\"leaflet-interactive\"),this._fireEvent([e],t,\"mouseout\"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(S(this._container,\"leaflet-interactive\"),this._fireEvent([n],t,\"mouseover\"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function vo(t){return x.canvas?new go(t):null}var Ie=function(){try{return document.namespaces.add(\"lvml\",\"urn:schemas-microsoft-com:vml\"),function(t){return document.createElement(\"<lvml:\"+t+' class=\"lvml\">')}}catch(t){}return function(t){return document.createElement(\"<\"+t+' xmlns=\"urn:schemas-microsoft.com:vml\" class=\"lvml\">')}}(),js={_initContainer:function(){this._container=Z(\"div\",\"leaflet-vml-container\")},_update:function(){this._map._animatingZoom||(Nt.prototype._update.call(this),this.fire(\"update\"))},_initPath:function(t){var e=t._container=Ie(\"shape\");S(e,\"leaflet-vml-shape \"+(this.options.className||\"\")),e.coordsize=\"1 1\",t._path=Ie(\"path\"),e.appendChild(t._path),this._updateStyle(t),this._layers[g(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;j(e),t.removeInteractiveTarget(e),delete this._layers[g(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=Ie(\"stroke\")),o.appendChild(e),e.weight=n.weight+\"px\",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=xt(n.dashArray)?n.dashArray.join(\" \"):n.dashArray.replace(/( *, *)/g,\" \"):e.dashStyle=\"\",e.endcap=n.lineCap.replace(\"butt\",\"flat\"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=Ie(\"fill\")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?\"M0 0\":\"AL \"+e.x+\",\"+e.y+\" \"+i+\",\"+n+\" 0,\"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){ie(t._container)},_bringToBack:function(t){ne(t._container)}},oi=x.vml?Ie:wn,ze=Nt.extend({_initContainer:function(){this._container=oi(\"svg\"),this._container.setAttribute(\"pointer-events\",\"none\"),this._rootGroup=oi(\"g\"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){j(this._container),U(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Nt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute(\"width\",e.x),i.setAttribute(\"height\",e.y)),Y(i,t.min),i.setAttribute(\"viewBox\",[t.min.x,t.min.y,e.x,e.y].join(\" \")),this.fire(\"update\")}},_initPath:function(t){var e=t._path=oi(\"path\");t.options.className&&S(e,t.options.className),t.options.interactive&&S(e,\"leaflet-interactive\"),this._updateStyle(t),this._layers[g(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){j(t._path),t.removeInteractiveTarget(t._path),delete this._layers[g(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute(\"stroke\",i.color),e.setAttribute(\"stroke-opacity\",i.opacity),e.setAttribute(\"stroke-width\",i.weight),e.setAttribute(\"stroke-linecap\",i.lineCap),e.setAttribute(\"stroke-linejoin\",i.lineJoin),i.dashArray?e.setAttribute(\"stroke-dasharray\",i.dashArray):e.removeAttribute(\"stroke-dasharray\"),i.dashOffset?e.setAttribute(\"stroke-dashoffset\",i.dashOffset):e.removeAttribute(\"stroke-dashoffset\")):e.setAttribute(\"stroke\",\"none\"),i.fill?(e.setAttribute(\"fill\",i.fillColor||i.color),e.setAttribute(\"fill-opacity\",i.fillOpacity),e.setAttribute(\"fill-rule\",i.fillRule||\"evenodd\")):e.setAttribute(\"fill\",\"none\"))},_updatePoly:function(t,e){this._setPath(t,bn(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,o=\"a\"+i+\",\"+n+\" 0 1,0 \",r=t._empty()?\"M0 0\":\"M\"+(e.x-i)+\",\"+e.y+o+i*2+\",0 \"+o+-i*2+\",0 \";this._setPath(t,r)},_setPath:function(t,e){t._path.setAttribute(\"d\",e)},_bringToFront:function(t){ie(t._path)},_bringToBack:function(t){ne(t._path)}});x.vml&&ze.include(js);function yo(t){return x.svg||x.vml?new ze(t):null}E.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t===\"overlayPane\"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&vo(t)||yo(t)}});var xo=se.extend({initialize:function(t,e){se.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=q(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Gs(t,e){return new xo(t,e)}ze.create=oi,ze.pointsToPath=bn,Rt.geometryToLayer=Xe,Rt.coordsToLatLng=hn,Rt.coordsToLatLngs=Je,Rt.latLngToCoords=ln,Rt.latLngsToCoords=Qe,Rt.getFeature=ae,Rt.asFeature=ti,E.mergeOptions({boxZoom:!0});var wo=kt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on(\"unload\",this._destroy,this)},addHooks:function(){M(this._container,\"mousedown\",this._onMouseDown,this)},removeHooks:function(){U(this._container,\"mousedown\",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){j(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Pe(),Vi(),this._startPoint=this._map.mouseEventToContainerPoint(t),M(document,{contextmenu:Xt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=Z(\"div\",\"leaflet-zoom-box\",this._container),S(this._container,\"leaflet-crosshair\"),this._map.fire(\"boxzoomstart\")),this._point=this._map.mouseEventToContainerPoint(t);var e=new V(this._point,this._startPoint),i=e.getSize();Y(this._box,e.min),this._box.style.width=i.x+\"px\",this._box.style.height=i.y+\"px\"},_finish:function(){this._moved&&(j(this._box),$(this._container,\"leaflet-crosshair\")),Ce(),ji(),U(document,{contextmenu:Xt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var e=new ut(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire(\"boxzoomend\",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});E.addInitHook(\"addHandler\",\"boxZoom\",wo),E.mergeOptions({doubleClickZoom:!0});var bo=kt.extend({addHooks:function(){this._map.on(\"dblclick\",this._onDoubleClick,this)},removeHooks:function(){this._map.off(\"dblclick\",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom===\"center\"?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});E.addInitHook(\"addHandler\",\"doubleClickZoom\",bo),E.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Po=kt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Wt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on(\"predrag\",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on(\"predrag\",this._onPreDragWrap,this),t.on(\"zoomend\",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}S(this._map._container,\"leaflet-grab leaflet-touch-drag\"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){$(this._map._container,\"leaflet-grab\"),$(this._map._container,\"leaflet-touch-drag\"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=q(this._map.options.maxBounds);this._offsetLimit=ct(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire(\"movestart\").fire(\"dragstart\"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire(\"move\",t).fire(\"drag\",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,r=(n+e+i)%t-e-i,s=Math.abs(o+i)<Math.abs(r+i)?o:r;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=s},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire(\"dragend\",t),n)e.fire(\"moveend\");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,s=i.easeLinearity,h=o.multiplyBy(s/r),u=h.distanceTo([0,0]),p=Math.min(i.inertiaMaxSpeed,u),v=h.multiplyBy(p/u),b=p/(i.inertiaDeceleration*s),O=v.multiplyBy(-b/2).round();!O.x&&!O.y?e.fire(\"moveend\"):(O=e._limitOffset(O,e.options.maxBounds),lt(function(){e.panBy(O,{duration:b,easeLinearity:s,noMoveStart:!0,animate:!0})}))}}});E.addInitHook(\"addHandler\",\"dragging\",Po),E.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Co=kt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex=\"0\"),M(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),U(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire(\"focus\")},_onBlur:function(){this._focused=!1,this._map.fire(\"blur\")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,o;for(n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,o;for(n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){M(document,\"keydown\",this._onKeyDown,this)},_removeHooks:function(){U(document,\"keydown\",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=T(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(T(n),i.options.maxBounds)),i.options.worldCopyJump){var o=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(o)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Xt(t)}}});E.addInitHook(\"addHandler\",\"keyboard\",Co),E.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Lo=kt.extend({addHooks:function(){M(this._map._container,\"wheel\",this._onWheelScroll,this),this._delta=0},removeHooks:function(){U(this._map._container,\"wheel\",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=$n(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),n),Xt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,r=i?Math.ceil(o/i)*i:o,s=t._limitZoom(e+(this._delta>0?r:-r))-e;this._delta=0,this._startTime=null,s&&(t.options.scrollWheelZoom===\"center\"?t.setZoom(e+s):t.setZoomAround(this._lastMousePos,e+s))}});E.addInitHook(\"addHandler\",\"scrollWheelZoom\",Lo);var Ks=600;E.mergeOptions({tapHold:x.touchNative&&x.safari&&x.mobile,tapTolerance:15});var To=kt.extend({addHooks:function(){M(this._map._container,\"touchstart\",this._onDown,this)},removeHooks:function(){U(this._map._container,\"touchstart\",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new k(e.clientX,e.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(M(document,\"touchend\",nt),M(document,\"touchend touchcancel\",this._cancelClickPrevent),this._simulateEvent(\"contextmenu\",e))},this),Ks),M(document,\"touchend touchcancel contextmenu\",this._cancel,this),M(document,\"touchmove\",this._onMove,this)}},_cancelClickPrevent:function t(){U(document,\"touchend\",nt),U(document,\"touchend touchcancel\",t)},_cancel:function(){clearTimeout(this._holdTimeout),U(document,\"touchend touchcancel contextmenu\",this._cancel,this),U(document,\"touchmove\",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new k(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});E.addInitHook(\"addHandler\",\"tapHold\",To),E.mergeOptions({touchZoom:x.touch,bounceAtZoomLimits:!0});var ko=kt.extend({addHooks:function(){S(this._map._container,\"leaflet-touch-zoom\"),M(this._map._container,\"touchstart\",this._onTouchStart,this)},removeHooks:function(){$(this._map._container,\"leaflet-touch-zoom\"),U(this._map._container,\"touchstart\",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!==\"center\"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),M(document,\"touchmove\",this._onTouchMove,this),M(document,\"touchend touchcancel\",this._onTouchEnd,this),nt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom===\"center\"){if(this._center=this._startLatLng,o===1)return}else{var r=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(o===1&&r.x===0&&r.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),mt(this._animRequest);var s=c(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=lt(s,this,!0),nt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,mt(this._animRequest),U(document,\"touchmove\",this._onTouchMove,this),U(document,\"touchend touchcancel\",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});E.addInitHook(\"addHandler\",\"touchZoom\",ko),E.BoxZoom=wo,E.DoubleClickZoom=bo,E.Drag=Po,E.Keyboard=Co,E.ScrollWheelZoom=Lo,E.TapHold=To,E.TouchZoom=ko,a.Bounds=V,a.Browser=x,a.CRS=Zt,a.Canvas=go,a.Circle=an,a.CircleMarker=Ye,a.Class=Bt,a.Control=wt,a.DivIcon=po,a.DivOverlay=Mt,a.DomEvent=us,a.DomUtil=ls,a.Draggable=Wt,a.Evented=ve,a.FeatureGroup=At,a.GeoJSON=Rt,a.GridLayer=Oe,a.Handler=kt,a.Icon=re,a.ImageOverlay=ei,a.LatLng=R,a.LatLngBounds=ut,a.Layer=bt,a.LayerGroup=oe,a.LineUtil=Cs,a.Map=E,a.Marker=qe,a.Mixin=vs,a.Path=Vt,a.Point=k,a.PolyUtil=ys,a.Polygon=se,a.Polyline=Dt,a.Popup=ii,a.PosAnimation=qn,a.Projection=Ls,a.Rectangle=xo,a.Renderer=Nt,a.SVG=ze,a.SVGOverlay=fo,a.TileLayer=he,a.Tooltip=ni,a.Transformation=zi,a.Util=Ir,a.VideoOverlay=uo,a.bind=c,a.bounds=ct,a.canvas=vo,a.circle=Es,a.circleMarker=zs,a.control=ke,a.divIcon=Hs,a.extend=_,a.featureGroup=Ss,a.geoJSON=co,a.geoJson=As,a.gridLayer=Ws,a.icon=Os,a.imageOverlay=Ds,a.latLng=z,a.latLngBounds=q,a.layerGroup=Ms,a.map=ds,a.marker=Is,a.point=T,a.polygon=Zs,a.polyline=Bs,a.popup=Fs,a.rectangle=Gs,a.setOptions=F,a.stamp=g,a.svg=yo,a.svgOverlay=Ns,a.tileLayer=_o,a.tooltip=Us,a.transformation=ye,a.version=f,a.videoOverlay=Rs;var $s=window.L;a.noConflict=function(){return window.L=$s,this},window.L=a})});var ra=[[[\"\",\"left\",\"\"]],[[\"\",\"center\",\"\"]],[[\"\",\"right\",\"\"]]],sa=[\"[left]\",\"[center]\",\"[right]\"],za=(()=>{let f=class f{constructor(){d(this,\"leftSizePx\",\"48px\");d(this,\"overflowVisible\",!1)}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-simple-cell\"]],inputs:{leftSizePx:\"leftSizePx\",overflowVisible:\"overflowVisible\"},ngContentSelectors:sa,decls:6,vars:8,consts:[[1,\"left-part\"],[1,\"center-part\"],[1,\"right-part\"]],template:function(c,m){c&1&&(fi(ra),w(0,\"div\",0),fe(1),C(),w(2,\"div\",1),fe(3,1),C(),w(4,\"div\",2),fe(5,2),C()),c&2&&(de(\"width\",m.leftSizePx),Gt(\"allow-overflow\",m.overflowVisible),y(2),Gt(\"allow-overflow\",m.overflowVisible),y(2),Gt(\"allow-overflow\",m.overflowVisible))},styles:[\"[_nghost-%COMP%]{width:100%;justify-content:flex-start;align-items:center;gap:12px;display:inline-flex}[_nghost-%COMP%]   .left-part[_ngcontent-%COMP%]:not(:empty){align-self:stretch;justify-content:center;align-items:flex-start;display:flex}[_nghost-%COMP%]   .left-part[_ngcontent-%COMP%]:is(:empty){display:none}[_nghost-%COMP%]   .center-part[_ngcontent-%COMP%]:not(:empty){flex:1 1 0;align-self:stretch;justify-content:flex-start;align-items:flex-start;display:flex;overflow:hidden}[_nghost-%COMP%]   .center-part.allow-overflow[_ngcontent-%COMP%]{overflow:visible}[_nghost-%COMP%]   .center-part[_ngcontent-%COMP%]:is(:empty){display:none}[_nghost-%COMP%]   .right-part[_ngcontent-%COMP%]:not(:empty){align-self:stretch;justify-content:center;align-items:flex-start;display:flex;text-align:end}[_nghost-%COMP%]   .right-part[_ngcontent-%COMP%]:is(:empty){display:none}\"],changeDetection:0}));let a=f;return a})();var gr=/[\\\\^$.*+?()[\\]{}|]/g,aa=RegExp(gr.source);function vr(a){return a&&aa.test(a)?a.replace(gr,\"\\\\$&\"):a||\"\"}function ha(a,f){if(a&1&&(w(0,\"span\"),H(1),C()),a&2){let _=B().$implicit,l=B();Fo(l.cssClass),y(),Ft(_.text)}}function la(a,f){if(a&1&&H(0),a&2){let _=B().$implicit;Ft(_.text)}}function ca(a,f){if(a&1&&(ui(0),Q(1,ha,2,3,\"span\",2)(2,la,1,1,\"ng-template\",null,0,jo),di()),a&2){let _=f.$implicit,l=Vo(3);y(),P(\"ngIf\",_.isHighlighted)(\"ngIfElse\",l)}}var yr=(()=>{let f=class f{constructor(){d(this,\"text\");d(this,\"highlightedText\");d(this,\"cssClass\");d(this,\"textRegions\",[])}ngOnChanges(l){(l.text||l.highlightedText)&&this.updateHighlightedRegions()}updateHighlightedRegions(){let l=this.highlightedText;if(!l){this.textRegions=[{isHighlighted:!1,text:this.text}];return}let c=new RegExp(\"(\".concat(vr(l),\")\"),\"gi\"),m=this.text.match(c);if(!m){this.textRegions=[{isHighlighted:!1,text:this.text}];return}let g=[],N=0,K=m.reverse();for(;N<this.text.length;){let I=K.pop(),tt=I?this.text.indexOf(I,N):this.text.length;N<tt&&g.push({isHighlighted:!1,text:this.text.substring(N,tt)});let Kt=tt+((I==null?void 0:I.length)||0);Kt!==tt&&g.push({isHighlighted:!0,text:I||\"\"}),N=Kt}this.textRegions=g}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-text-highlighter\"]],inputs:{text:\"text\",highlightedText:\"highlightedText\",cssClass:\"cssClass\"},standalone:!0,features:[ce,it],decls:1,vars:1,consts:[[\"nonHighlighted\",\"\"],[4,\"ngFor\",\"ngForOf\"],[3,\"class\",4,\"ngIf\",\"ngIfElse\"]],template:function(c,m){c&1&&Q(0,ca,4,2,\"ng-container\",1),c&2&&P(\"ngForOf\",m.textRegions)},dependencies:[St,pi],encapsulation:2,changeDetection:0}));let a=f;return a})();var ua=[\"*\"];function da(a,f){a&1&&(ui(0),_t(1,\"div\",7),w(2,\"div\",8),H(3),A(4,\"translate\"),C(),di()),a&2&&(y(2),W(\"data-locator\",\"blocked_message\"),y(),at(\" \",D(4,2,\"header.record_create_disabled\"),\" \"))}function fa(a,f){if(a&1&&_t(0,\"img\",9),a&2){let _=B();P(\"src\",_.selectIconSrc,ue)(\"alt\",\">\"),W(\"data-locator\",\"pointer_forward\")}}var xr=(()=>{let f=class f{constructor(){d(this,\"companyId\");d(this,\"title\");d(this,\"address\");d(this,\"disabled\",!1);d(this,\"highlightedText\");d(this,\"selectIconSrc\",\"assets/icon/select-grey.svg\");d(this,\"highlightCssClass\",\"highlighted\")}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-branch-card\"]],inputs:{companyId:\"companyId\",title:\"title\",address:\"address\",disabled:\"disabled\",highlightedText:\"highlightedText\",selectIconSrc:\"selectIconSrc\"},standalone:!0,features:[it],ngContentSelectors:ua,decls:8,vars:11,consts:[[1,\"root\"],[1,\"body\"],[1,\"information\"],[1,\"title\",3,\"text\",\"highlightedText\",\"cssClass\"],[1,\"address\",3,\"text\",\"highlightedText\",\"cssClass\"],[4,\"ngIf\"],[3,\"src\",\"alt\",4,\"ngIf\"],[1,\"disabled-cover\"],[1,\"blocked-message\"],[3,\"src\",\"alt\"]],template:function(c,m){c&1&&(fi(),w(0,\"div\",0),fe(1),w(2,\"div\",1)(3,\"div\",2),_t(4,\"ui-kit-text-highlighter\",3)(5,\"ui-kit-text-highlighter\",4),Q(6,da,5,4,\"ng-container\",5),C(),Q(7,fa,1,3,\"img\",6),C()()),c&2&&(y(2),W(\"data-locator\",\"branch_list_\"+m.companyId),y(2),P(\"text\",m.title)(\"highlightedText\",m.highlightedText)(\"cssClass\",m.highlightCssClass),W(\"data-locator\",\"branch_title\"),y(),P(\"text\",m.address)(\"highlightedText\",m.highlightedText)(\"cssClass\",m.highlightCssClass),W(\"data-locator\",\"branch_address\"),y(),P(\"ngIf\",m.disabled),y(),P(\"ngIf\",!m.disabled))},dependencies:[St,yr,It,Ot],styles:['@charset \"UTF-8\";.root[_ngcontent-%COMP%]{border-radius:8px;background-color:var(--widget-ui-kit-color-color_white);overflow:hidden;position:relative}.disabled-cover[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--widget-ui-kit-color-color_white);opacity:.3}.body[_ngcontent-%COMP%]{display:flex;padding:12px 12px 8px}.information[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:20px;flex-grow:1}.information[_ngcontent-%COMP%]     .highlighted{background-color:var(--widget-ui-kit-color-search-selected-text)}.title[_ngcontent-%COMP%]{margin-bottom:4px;color:var(--widget-ui-kit-color-color_text_black);display:block}.address[_ngcontent-%COMP%]{display:block;color:var(--widget-ui-kit-color-grey-main)}.blocked-message[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;margin-top:4px}'],changeDetection:0}));let a=f;return a})();function _a(a,f){if(a&1){let _=ft();w(0,\"div\",0),G(\"click\",function(){ot(_);let c=B();return rt(c.openModal())}),w(1,\"p\",5),H(2),C()()}if(a&2){let _=f.ngIf;y(2),Ft(_)}}function ma(a,f){if(a&1){let _=ft();w(0,\"div\",6),G(\"click\",function(){ot(_);let c=B();return rt(c.openFeedbackModal())}),w(1,\"div\",7),_t(2,\"ui-kit-svg-icon\",8),C(),w(3,\"div\"),H(4),A(5,\"translate\"),C()()}a&2&&(y(2),P(\"name\",\"social/feedback\"),y(2),Ft(D(5,2,\"altegio_feedback.modal_open_button\")))}var br=(()=>{let f=class f{constructor(l,c,m,g,N,K,I){d(this,\"metrikaService\");d(this,\"currentCompany\");d(this,\"translate\");d(this,\"modalService\");d(this,\"trackingService\");d(this,\"storeSnapshotService\");d(this,\"bridgeService\");d(this,\"store\",Ae(vi));d(this,\"link\");d(this,\"destroy$\",new ai(1));d(this,\"brandDomain$\",this.store.select(Ut.bookform.getBookformBrand).pipe(Ee(l=>!!l),jt(l=>l.domain||De),Bo(1),Ze(this.destroy$)));d(this,\"backgroundLogo$\",this.store.select(Ut.bookform.getBookformBrand).pipe(Ee(l=>!!l),jt(l=>l.background_logo_url||De),Ze(this.destroy$)));d(this,\"partnerBrandTitle$\",this.store.select(Ut.bookform.getPartnerBrand).pipe(jt(l=>l?this.translate.instant(\"footer.worked_on_\".concat(l)):\"\")));d(this,\"isFeedbackButtonEnabled$\",this.store.select(Ut.bookform.getIsFeedbackButtonEnabled));this.metrikaService=l,this.currentCompany=c,this.translate=m,this.modalService=g,this.trackingService=N,this.storeSnapshotService=K,this.bridgeService=I}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openModal(){this.brandDomain$.subscribe(l=>Qt(this,null,function*(){l.indexOf(De)!==-1?this.metrikaService.reachGoal(\"click_altegio_registration\"):this.metrikaService.reachGoal(\"click_registration\"),(yield this.modalService.openModal({component:Pr,componentData:{title:this.translate.instant(\"record.go_to_registration\"),confirmButtonText:this.translate.instant(\"record.go_to\"),cancelButtonText:this.translate.instant(\"Close\"),titleDataLocator:\"logout_modal_window_text\"},params:{modalType:pn.default,dataLocator:\"logout_modal_window\"}}).result.catch(dn))?(this.openCompanyLink(),this.trackingService.track({type:te.Action.click,name:\"yc_landing_link\",element:{type:\"link\",name:\"yc_landing_link\"}})):this.metrikaService.reachGoal(\"click_back_to_booking\")}))}openCompanyLink(){this.brandDomain$.subscribe(l=>{var m,g;let c=\"https://\".concat(l)+\"?utm_source=widget&utm_medium=link&utm_campaign=new_widget_2.0\"+\"&utm_term=\".concat((m=this.currentCompany.getCurrentCompany())==null?void 0:m.title)+\"&utm_content=\".concat((g=this.currentCompany.getCurrentCompany())==null?void 0:g.id);if(l.indexOf(De)!==-1?this.metrikaService.reachGoal(\"click_go_to_altegio_registration\"):this.metrikaService.reachGoal(\"click_go_to_registration\"),this.storeSnapshotService.selectSnapshot(Ut.widgetSettings.getWidgetUseExternalLinkHook)){this.bridgeService.post(new lr(cr.open_external_link,{link:c}));return}window.open(c,\"_blank\")})}openFeedbackModal(){return Qt(this,null,function*(){this.trackingService.track({type:te.Action.click,element:{type:\"button\",name:\"salon_comment_button\"}});let c=yield this.modalService.openModal({component:Cr,componentData:{},params:{modalType:pn.default}}).result.catch(dn);c?(this.trackingService.track({type:te.Action.click,element:{type:\"button\",name:\"salon_comment_send_button\"}}),this.store.dispatch(new Jo(c))):this.trackingService.track({type:te.Action.click,element:{type:\"button\",name:\"salon_comment_popup_close_button\"}})})}};d(f,\"\\u0275fac\",function(c){return new(c||f)(st(fr),st(pr),st(Yo),st(_e),st(gi),st(Xo),st(ur))}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-brand-link\"]],standalone:!0,features:[it],decls:10,vars:12,consts:[[1,\"row\",3,\"click\"],[1,\"brand-link__text\"],[\"alt\",\"background-logo\",1,\"brand-link__image\",3,\"src\"],[\"class\",\"row\",3,\"click\",4,\"ngIf\"],[\"class\",\"feedback-opener\",3,\"click\",4,\"ngIf\"],[1,\"brand-link__subtitle\"],[1,\"feedback-opener\",3,\"click\"],[1,\"icon-container\"],[1,\"icon\",3,\"name\"]],template:function(c,m){c&1&&(w(0,\"div\",0),G(\"click\",function(){return m.openModal()}),w(1,\"span\",1),H(2),A(3,\"translate\"),C(),_t(4,\"img\",2),A(5,\"async\"),C(),Q(6,_a,3,1,\"div\",3),A(7,\"async\"),Q(8,ma,6,4,\"div\",4),A(9,\"async\")),c&2&&(y(2),Ft(D(3,4,\"footer.worked_on\")),y(2),P(\"src\",D(5,6,m.backgroundLogo$),ue),y(2),P(\"ngIf\",D(7,8,m.partnerBrandTitle$)),y(2),P(\"ngIf\",D(9,10,m.isFeedbackButtonEnabled$)))},dependencies:[pe,It,Ot,sr,ir],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;z-index:100}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;justify-content:center;white-space:nowrap}[_nghost-%COMP%]   .brand-link__text[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-icons-secondary-text);padding-right:5px}[_nghost-%COMP%]   .brand-link__text[_ngcontent-%COMP%], [_nghost-%COMP%]   .brand-link__image[_ngcontent-%COMP%], [_nghost-%COMP%]   .brand-link__subtitle[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .brand-link__subtitle[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-icons-secondary-text);margin-top:8px}[_nghost-%COMP%]   .brand-link__image[_ngcontent-%COMP%]{width:90px;height:24px}[_nghost-%COMP%]   .feedback-opener[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;align-items:center;color:var(--widget-ui-kit-color-color_grey_dark);margin-top:16px;font-style:normal;font-weight:500;font-size:16px;line-height:24px;cursor:pointer}[_nghost-%COMP%]   .feedback-opener[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:24px;height:24px;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .feedback-opener[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:19.5px;height:19.5px}']}));let a=f;return a})();function va(a,f){if(a&1&&(w(0,\"div\",5),H(1),C()),a&2){let _=B();W(\"data-locator\",_.titleDataLocator),y(),at(\" \",_.title,\"\\n\")}}function ya(a,f){if(a&1&&(w(0,\"div\",6),H(1),C()),a&2){let _=B();W(\"data-locator\",_.textDataLocator),y(),at(\" \",_.text,\"\\n\")}}function xa(a,f){if(a&1){let _=ft();w(0,\"ui-kit-button\",7),G(\"click\",function(){ot(_);let c=B();return rt(c.confirm())}),C()}if(a&2){let _=B();P(\"title\",_.confirmButtonText),W(\"data-locator\",_.confirmDataLocator)}}function wa(a,f){if(a&1){let _=ft();w(0,\"ui-kit-button\",8),G(\"click\",function(){ot(_);let c=B();return rt(c.canceling())}),C()}if(a&2){let _=B();P(\"type\",_.buttonType.tertiary)(\"title\",_.cancelButtonText),W(\"data-locator\",_.cancelDataLocator)}}var Pr=(()=>{let f=class f extends Pi{constructor(c){super(c);d(this,\"modalService\");d(this,\"title\");d(this,\"text\");d(this,\"confirmButtonText\");d(this,\"cancelButtonText\");d(this,\"titleDataLocator\");d(this,\"textDataLocator\");d(this,\"confirmDataLocator\");d(this,\"cancelDataLocator\");d(this,\"buttonType\",Re);this.modalService=c}confirm(){this.close(!0)}canceling(){this.dismiss()}};d(f,\"\\u0275fac\",function(m){return new(m||f)(st(_e))}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-question-and-confirmation\"]],inputs:{title:\"title\",text:\"text\",confirmButtonText:\"confirmButtonText\",cancelButtonText:\"cancelButtonText\",titleDataLocator:\"titleDataLocator\",textDataLocator:\"textDataLocator\",confirmDataLocator:\"confirmDataLocator\",cancelDataLocator:\"cancelDataLocator\"},standalone:!0,features:[ci,it],decls:5,vars:4,consts:[[\"class\",\"header\",4,\"ngIf\"],[\"class\",\"text\",4,\"ngIf\"],[1,\"footer\"],[\"class\",\"modal-button\",3,\"title\",\"click\",4,\"ngIf\"],[\"class\",\"modal-button\",3,\"type\",\"title\",\"click\",4,\"ngIf\"],[1,\"header\"],[1,\"text\"],[1,\"modal-button\",3,\"click\",\"title\"],[1,\"modal-button\",3,\"click\",\"type\",\"title\"]],template:function(m,g){m&1&&(Q(0,va,2,2,\"div\",0)(1,ya,2,2,\"div\",1),w(2,\"div\",2),Q(3,xa,1,2,\"ui-kit-button\",3)(4,wa,1,3,\"ui-kit-button\",4),C()),m&2&&(P(\"ngIf\",g.title),y(),P(\"ngIf\",g.text),y(2),P(\"ngIf\",g.confirmButtonText),y(),P(\"ngIf\",g.cancelButtonText))},dependencies:[_i,St,ge,me],styles:['@charset \"UTF-8\";.header[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px;display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 16px}.text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;text-align:center;padding:8px 16px 0}.footer[_ngcontent-%COMP%]{width:100%;display:inline-flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:16px;padding:40px 16px 16px}.footer[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]{width:100%}']}));let a=f;return a})();var Ct=function(a){return a[a.YANDEX=0]=\"YANDEX\",a[a.GOOGLE=1]=\"GOOGLE\",a[a.TWOGIS=2]=\"TWOGIS\",a[a.OSM=3]=\"OSM\",a[a.APPLE=4]=\"APPLE\",a}(Ct||{});function Tr(a){try{return new URL(a),!0}catch(f){return!1}}var zt=oa(Mr());var Sr=(()=>{let f=class f{constructor(){d(this,\"store\",Ae(vi));d(this,\"environment\",Ae(Ko));d(this,\"currentLanguage$\",this.store.select(Ut.localization.getCurrentLanguage));d(this,\"currentLocaleByDomain$\",this.store.select(Ut.bookform.getBookformDefaultLocaleByDomain))}getMapUrl(l,c){return Qt(this,null,function*(){let m=yield fn(this.currentLanguage$),g=yield fn(this.currentLocaleByDomain$);switch(c){case Ct.YANDEX:return this.buildYandexMapStaticImageUrl(l,m,g);case Ct.GOOGLE:return this.buildGoogleMapStaticImageUrl(l,m);case Ct.TWOGIS:return this.build2gisMapStaticImageUrl(l);case Ct.APPLE:return this.buildAppleMapStaticImageUrl(l.url);default:return null}})}renderLeafletMap(l){if(!l.nativeElement)return null;let c=\"assets/marker-icon-2x.png\",m=\"assets/marker-icon.png\",g=\"assets/marker-shadow.png\";zt.Marker.prototype.options.icon=zt.icon({iconRetinaUrl:c,iconUrl:m,shadowUrl:g,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]});let N=zt.map(l.nativeElement,{center:[l.lat,l.lon],zoom:l.zoom,zoomControl:!1,dragging:!1,touchZoom:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1});return zt.tileLayer(\"https://tile.openstreetmap.org/{z}/{x}/{y}.png\",{maxZoom:l.zoom,minZoom:l.zoom,attribution:'&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a>'}).addTo(N),zt.marker([l.lat,l.lon],{alt:\"place\"}).addTo(N),N}buildGoogleMapStaticImageUrl(l,c){let m=[l.lon,l.lat].reverse().join(\",\"),g=\"color:\".concat(nr),N=\"https://maps.googleapis.com/maps/api/staticmap?\",K={language:c.split(\"-\")[0],center:m,size:[l.width,l.height].join(\"x\"),zoom:l.zoom+\"\",scale:\"1\",markers:[g,m].join(\"|\"),style:\"feature:all\",key:this.environment.mapsKeys.google};return N+new mi({fromObject:K}).toString()}buildYandexMapStaticImageUrl(l,c,m){let N=[\"ru_RU\",\"en_US\",\"en_RU\",\"ru_UA\",\"uk_UA\",\"tr_TR\"].find(ki=>ki===c.replace(\"-\",\"_\"))||m,K=[l.lon,l.lat].join(\",\"),Et=\"pm2\"+\"or\"+\"l\",F=\"https://static-maps.yandex.ru/1.x/?\",Ne={size:[l.width,l.height].join(\",\"),z:l.zoom+\"\",scale:\"1\",l:\"map\",pt:[K,Et].join(\",\"),lang:N};return F+new mi({fromObject:Ne}).toString()}build2gisMapStaticImageUrl(l){let c=[l.lon,l.lat].join(\",\"),K=\"pm\"+\"ye\"+\"m\",I=\"https://static.maps.2gis.com/1.0?\",tt={center:c,size:[l.width,l.height].join(\",\"),zoom:l.zoom+\"\",markers:[K,c].join(\",\"),key:this.environment.mapsKeys.twoGis};return I+new mi({fromObject:tt}).toString()}buildAppleMapStaticImageUrl(l){return!l||Tr(l)?l:\"https://snapshot.apple-mapkit.com\"+l}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275prov\",Do({token:f,factory:f.\\u0275fac,providedIn:\"root\"}));let a=f;return a})();var Pa=[\"staticMap\"];function Ca(a,f){if(a&1){let _=ft();w(0,\"img\",3),A(1,\"async\"),G(\"click\",function(){ot(_);let c=B();return rt(c.onClick())}),C()}if(a&2){let _=B();P(\"imageUrl\",D(1,4,_.mapsUrl$))(\"width\",_.width)(\"height\",_.height),W(\"data-locator\",\"branch_map\")}}function La(a,f){if(a&1){let _=ft();w(0,\"div\",4),G(\"click\",function(){ot(_);let c=B();return rt(c.onClick())}),_t(1,\"div\",5,0),C()}if(a&2){let _=B();y(),de(\"width\",_.width,\"px\")(\"height\",_.height,\"px\")}}var Ta=.4,Or=(()=>{let f=class f{constructor(l,c,m){d(this,\"element\");d(this,\"changeDetectorRef\");d(this,\"mapBuilderService\");d(this,\"company\");d(this,\"zoom\",16);d(this,\"aspectRatio\",Ta);d(this,\"type\");d(this,\"openMapOnClick\",!1);d(this,\"isRounded\",!1);d(this,\"osmMapElem\");d(this,\"width\",0);d(this,\"height\",0);d(this,\"mapsUrl$\");d(this,\"leafletMap\",null);d(this,\"mapsUrlSubject\",new si(\"\"));d(this,\"destroy$\",new ai(1));this.element=l,this.changeDetectorRef=c,this.mapBuilderService=m}ngOnInit(){this.mapsUrl$=this.mapsUrlSubject.asObservable(),Eo(window,\"resize\").pipe(Be(yi),jt(()=>{var l;return(l=this.element.nativeElement)==null?void 0:l.clientWidth}),Ee(l=>this.isWidthChanged(l)),Be(100),Ze(this.destroy$)).subscribe(l=>this.updateMap(l))}ngAfterViewInit(){window.setTimeout(()=>{var c;let l=(c=this.element.nativeElement)==null?void 0:c.clientWidth;this.isWidthChanged(l)&&this.updateMap(l,!0)})}ngOnChanges(l){l.company&&(this.company=l.company.currentValue,l.company.isFirstChange()||this.updateMap(this.element.nativeElement.clientWidth,!0))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}isWidthChanged(l){return!!l&&this.width!==l}updateMap(l,c=!1){return Qt(this,null,function*(){var m,g,N;if(this.width=l,this.height=Math.trunc(l*this.aspectRatio),(m=this.changeDetectorRef)==null||m.detectChanges(),!!c){if(this.isImageType()){let K={width:568,height:Math.trunc(568*this.aspectRatio),lat:this.company.coordinate_lat,lon:this.company.coordinate_lon,zoom:this.zoom,url:((g=this.company.map)==null?void 0:g.static_map_url)||null};this.mapsUrlSubject.next((yield this.mapBuilderService.getMapUrl(K,this.type))||\"\")}else try{this.leafletMap&&this.leafletMap.remove(),this.leafletMap=this.mapBuilderService.renderLeafletMap({lat:this.company.coordinate_lat,lon:this.company.coordinate_lon,zoom:this.zoom,nativeElement:this.element.nativeElement})}catch(K){console.error(\"Error on rendering leaflet map\",K)}(N=this.changeDetectorRef)==null||N.detectChanges()}})}isImageType(){return this.type!==Ct.OSM&&Object.values(Ct).includes(this.type)}onClick(){if(!this.openMapOnClick)return;let l;switch(this.type){case Ct.APPLE:l=\"https://maps.apple.com/?q=\".concat(this.company.coordinate_lat,\",\").concat(this.company.coordinate_lon);break;case Ct.YANDEX:l=\"https://yandex.ru/maps/?text=\".concat(this.company.coordinate_lat,\",\").concat(this.company.coordinate_lon);break;default:l=\"https://www.google.com/maps/search/?api=1&query=\".concat(this.company.coordinate_lat,\",\").concat(this.company.coordinate_lon)}window.open(l)}};d(f,\"\\u0275fac\",function(c){return new(c||f)(st(li),st(Go),st(Sr))}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-static-map\"]],viewQuery:function(c,m){if(c&1&&Uo(Pa,7,li),c&2){let g;Ho(g=Wo())&&(m.osmMapElem=g.first)}},hostVars:2,hostBindings:function(c,m){c&2&&Gt(\"rounded\",m.isRounded)},inputs:{company:\"company\",zoom:\"zoom\",aspectRatio:\"aspectRatio\",type:\"type\",openMapOnClick:\"openMapOnClick\",isRounded:\"isRounded\"},standalone:!0,features:[ce,it],decls:2,vars:2,consts:[[\"staticMap\",\"\"],[\"class\",\"map-image\",\"uiKitLazyLoadImage\",\"\",3,\"imageUrl\",\"width\",\"height\",\"click\",4,\"ngIf\"],[\"class\",\"map-container\",3,\"click\",4,\"ngIf\"],[\"uiKitLazyLoadImage\",\"\",1,\"map-image\",3,\"click\",\"imageUrl\",\"width\",\"height\"],[1,\"map-container\",3,\"click\"],[1,\"static-map\"]],template:function(c,m){c&1&&Q(0,Ca,2,6,\"img\",1)(1,La,3,4,\"div\",2),c&2&&(P(\"ngIf\",m.isImageType()),y(),P(\"ngIf\",!m.isImageType()))},dependencies:[_i,St,pe,mr,_r],styles:[\"[_nghost-%COMP%]{display:block}.rounded.leaflet-container[_nghost-%COMP%], .rounded[_nghost-%COMP%]   .map-image[_ngcontent-%COMP%]{border-radius:16px;box-shadow:0 0 1px #00247f3d}[_nghost-%COMP%]   .map-image[_ngcontent-%COMP%]{object-fit:cover;object-position:center}[_nghost-%COMP%]     .leaflet-pane, [_nghost-%COMP%]     .leaflet-bottom, [_nghost-%COMP%]     .leaflet-top, [_nghost-%COMP%]     .leaflet-right, [_nghost-%COMP%]     .leaflet-left{z-index:1!important}[_nghost-%COMP%]   .static-map[_ngcontent-%COMP%]{position:relative;pointer-events:none;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:1}\"],changeDetection:0}));let a=f;return a})();var Cr=(()=>{let f=class f extends Pi{constructor(c,m){super(c);d(this,\"modalService\");d(this,\"trackingService\");d(this,\"feedbackMessage\",new tr(\"\",[Qo.required]));this.modalService=c,this.trackingService=m}ngOnInit(){this.trackingService.track({type:te.Action.view,element:{type:\"popup\",name:\"salon_comment_popup\"}})}confirm(){this.close(this.feedbackMessage.value)}trackFocusOut(){this.trackingService.track({type:\"input\",element:{type:\"field\",name:\"salon_comment_field\",text:this.feedbackMessage.value}})}};d(f,\"\\u0275fac\",function(m){return new(m||f)(st(_e),st(gi))}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ng-component\"]],standalone:!0,features:[ci,it],decls:12,vars:17,consts:[[1,\"header\"],[1,\"text\"],[1,\"description-input\"],[3,\"focusout\",\"formControl\",\"type\",\"minRows\",\"maxLength\",\"placeholder\"],[1,\"footer\"],[1,\"modal-button\",3,\"click\",\"title\",\"disabled\"]],template:function(m,g){m&1&&(w(0,\"div\",0),H(1),A(2,\"translate\"),C(),w(3,\"div\",1),H(4),A(5,\"translate\"),C(),w(6,\"div\",2)(7,\"ui-kit-input\",3),A(8,\"translate\"),G(\"focusout\",function(){return g.trackFocusOut()}),C()(),w(9,\"div\",4)(10,\"ui-kit-button\",5),A(11,\"translate\"),G(\"click\",function(){return g.confirm()}),C()()),m&2&&(y(),at(\" \",D(2,9,\"altegio_feedback.title\"),\"\\n\"),y(3),at(\" \",D(5,11,\"altegio_feedback.description\"),\"\\n\"),y(3),P(\"formControl\",g.feedbackMessage)(\"type\",\"multiline\")(\"minRows\",3)(\"maxLength\",300)(\"placeholder\",D(8,13,\"altegio_feedback.input_placeholder\")),y(3),P(\"title\",D(11,15,\"altegio_feedback.submit_button\"))(\"disabled\",g.feedbackMessage.invalid))},dependencies:[Ci,ar,ge,me,It,Ot,bi,xi,wi],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;padding:0 16px;color:var(--widget-ui-kit-color-color_text_black);font-style:normal;font-weight:400;font-size:16px;line-height:24px}.header[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px;text-align:center}.text[_ngcontent-%COMP%]{padding-top:8px;text-align:center}.description-input[_ngcontent-%COMP%]{padding-top:16px}.footer[_ngcontent-%COMP%]{padding:40px 0 16px}']}));let a=f;return a})();function Ma(a,f){if(a&1){let _=ft();w(0,\"div\",9)(1,\"div\",10),H(2),A(3,\"translate\"),C(),w(4,\"div\",11)(5,\"ui-kit-switch\",12)(6,\"div\",13),H(7),A(8,\"translate\"),C()()(),w(9,\"div\",14),G(\"click\",function(){ot(_);let c=B();return rt(c.consents.ad_personalization=!c.consents.ad_personalization)}),w(10,\"ui-kit-switch\",12)(11,\"div\",13),H(12),A(13,\"translate\"),C()()(),w(14,\"div\",14),G(\"click\",function(){ot(_);let c=B();return rt(c.consents.ad_user_data=!c.consents.ad_user_data)}),w(15,\"ui-kit-switch\",12)(16,\"div\",13),H(17),A(18,\"translate\"),C()()(),w(19,\"div\",14),G(\"click\",function(){ot(_);let c=B();return rt(c.consents.ad_storage=!c.consents.ad_storage)}),w(20,\"ui-kit-switch\",12)(21,\"div\",13),H(22),A(23,\"translate\"),C()()(),w(24,\"div\",14),G(\"click\",function(){ot(_);let c=B();return rt(c.consents.analytics_storage=!c.consents.analytics_storage)}),w(25,\"ui-kit-switch\",12)(26,\"div\",13),H(27),A(28,\"translate\"),C()()()()}if(a&2){let _=B();y(2),at(\" \",D(3,21,\"consent_banner.preferences_header\"),\" \"),y(3),P(\"checked\",!0)(\"disabled\",!0),y(),W(\"data-locator\",\"consent-banner-preferences-option-cookies\"),y(),at(\" \",D(8,23,\"consent_banner.preferences_option_cookies\"),\" \"),y(3),P(\"checked\",_.consents.ad_personalization)(\"disabled\",!1),y(),W(\"data-locator\",\"consent-banner-preferences-option-ad_personalization\"),y(),at(\" \",D(13,25,\"consent_banner.preferences_option_ad_personalization\"),\" \"),y(3),P(\"checked\",_.consents.ad_user_data)(\"disabled\",!1),y(),W(\"data-locator\",\"consent-banner-preferences-option-ad_user_data\"),y(),at(\" \",D(18,27,\"consent_banner.preferences_option_ad_user_data\"),\" \"),y(3),P(\"checked\",_.consents.ad_storage)(\"disabled\",!1),y(),W(\"data-locator\",\"consent-banner-preferences-option-ad_storage\"),y(),at(\" \",D(23,29,\"consent_banner.preferences_option_ad_storage\"),\" \"),y(3),P(\"checked\",_.consents.analytics_storage)(\"disabled\",!1),y(),W(\"data-locator\",\"consent-banner-preferences-option-analytics_storage\"),y(),at(\" \",D(28,31,\"consent_banner.preferences_option_analytics_storage\"),\" \")}}function Sa(a,f){if(a&1){let _=ft();w(0,\"ui-kit-button\",15),A(1,\"translate\"),G(\"click\",function(){ot(_);let c=B();return rt(c.saveSettings())}),C()}if(a&2){let _=B();P(\"title\",D(1,3,\"consent_banner.confirm_button\"))(\"type\",_.buttonType.secondary),W(\"data-locator\",\"consent-banner-save-btn\")}}var cl=(()=>{let f=class f{constructor(){d(this,\"privacyPolicyLink\",\"https://alteg.io/en/info/privacy\");d(this,\"consents\",$o);d(this,\"consentChange\",new hi);d(this,\"buttonType\",Re);d(this,\"ButtonType\",Re)}allowAll(){this.consents=qo,this.saveSettings()}disableAll(){this.consents={analytics_storage:!1,ad_storage:!1,ad_user_data:!1,ad_personalization:!1},this.saveSettings()}saveSettings(){this.consentChange.emit(this.consents)}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-gdpr-consent-banner\"]],inputs:{privacyPolicyLink:\"privacyPolicyLink\",consents:\"consents\"},outputs:{consentChange:\"consentChange\"},standalone:!0,features:[it],decls:17,vars:21,consts:[[1,\"banner-consent\"],[1,\"banner-header\"],[1,\"banner-subheader\"],[\"target\",\"_blank\",3,\"href\"],[1,\"banner-subheader-buttons\"],[1,\"btn\",\"banner-allow-all-btn\",3,\"click\",\"title\"],[1,\"btn\",\"banner-disable-all-btn\",3,\"click\",\"title\",\"type\"],[\"class\",\"banner-preferences\",4,\"ngIf\"],[\"class\",\"banner-confirm-btn\",3,\"title\",\"type\",\"click\",4,\"ngIf\"],[1,\"banner-preferences\"],[1,\"banner-preferences-header\"],[1,\"banner-preferences-option\"],[3,\"checked\",\"disabled\"],[1,\"banner-preferences-option-toggle-title\"],[1,\"banner-preferences-option\",3,\"click\"],[1,\"banner-confirm-btn\",3,\"click\",\"title\",\"type\"]],template:function(c,m){c&1&&(w(0,\"div\",0)(1,\"div\",1),H(2),A(3,\"translate\"),C(),w(4,\"p\",2),H(5),A(6,\"translate\"),w(7,\"a\",3),H(8),A(9,\"translate\"),C()(),w(10,\"div\",4)(11,\"ui-kit-button\",5),A(12,\"translate\"),G(\"click\",function(){return m.allowAll()}),C(),w(13,\"ui-kit-button\",6),A(14,\"translate\"),G(\"click\",function(){return m.disableAll()}),C()(),Q(15,Ma,29,33,\"div\",7)(16,Sa,2,5,\"ui-kit-button\",8),C()),c&2&&(y(2),at(\" \",D(3,11,\"consent_banner.header_1\"),\" \"),y(3),at(\" \",D(6,13,\"consent_banner.subheader_1\"),\" \"),y(2),P(\"href\",m.privacyPolicyLink,ue),y(),Ft(D(9,15,\"consent_banner.subheader_privacy_policy\")),y(3),P(\"title\",D(12,17,\"consent_banner.subheader_buttons_allow\")),W(\"data-locator\",\"consent-banner-allow-all-btn\"),y(2),P(\"title\",D(14,19,\"consent_banner.subheader_buttons_disable\"))(\"type\",m.ButtonType.secondary),W(\"data-locator\",\"consent-banner-disable-all-btn\"),y(2),P(\"ngIf\",!1),y(),P(\"ngIf\",!1))},dependencies:[dr,It,Ot,ge,me],styles:['@charset \"UTF-8\";.banner-consent[_ngcontent-%COMP%]{padding:0 25px 25px}.banner-consent[_ngcontent-%COMP%]   .banner-header[_ngcontent-%COMP%]{text-align:center;font-style:normal;font-weight:700;font-size:20px;line-height:24px;word-break:break-word}.banner-consent[_ngcontent-%COMP%]   .banner-subheader[_ngcontent-%COMP%]{margin-top:8px;text-align:center;font-style:normal;font-weight:400;font-size:16px;line-height:24px}.banner-consent[_ngcontent-%COMP%]   .banner-subheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_dark)}.banner-consent[_ngcontent-%COMP%]   .banner-subheader-buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between;gap:8px;margin:40px 0 16px;width:100%}.banner-consent[_ngcontent-%COMP%]   .banner-subheader-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1;margin:0 auto;white-space:nowrap}.banner-consent[_ngcontent-%COMP%]   .banner-preferences-header[_ngcontent-%COMP%]{margin:40px 0 0;font-style:normal;font-weight:700;font-size:20px;line-height:24px}.banner-consent[_ngcontent-%COMP%]   .banner-preferences-option[_ngcontent-%COMP%]{cursor:pointer;width:100%;word-break:break-all}.banner-consent[_ngcontent-%COMP%]   .banner-preferences-option[_ngcontent-%COMP%]:not(:first-child){margin-top:24px}.banner-consent[_ngcontent-%COMP%]   .banner-confirm-btn[_ngcontent-%COMP%]{display:block;width:100%;margin-top:40px}']}));let a=f;return a})();var pl=(()=>{let f=class f{constructor(){d(this,\"name\");d(this,\"type\",\"svg\");d(this,\"size\")}get fontSize(){return this.size!==0&&hr(this.size)||\"24px\"}get backgroundImage(){let l=\"/assets/icon/\".concat(this.name,\".\").concat(this.type);return\"url(\".concat(l,\")\")}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-icon\"]],hostVars:4,hostBindings:function(c,m){c&2&&de(\"font-size\",m.fontSize)(\"background-image\",m.backgroundImage)},inputs:{name:\"name\",type:\"type\",size:\"size\"},standalone:!0,features:[it],decls:0,vars:0,template:function(c,m){},styles:[\"[_nghost-%COMP%]{display:inline-block;background-repeat:no-repeat;background-size:1em 1em;width:1em;height:1em}\"],changeDetection:0}));let a=f;return a})();function Oa(a,f){if(a&1&&(_t(0,\"ui-kit-form-input\",4),A(1,\"translate\")),a&2){let _=B();P(\"formControl\",_.branchSearch)(\"placeholder\",D(1,3,\"branch.search\"))(\"dataLocator\",\"filial_search_input\")}}function Ia(a,f){if(a&1){let _=ft();w(0,\"div\",5),G(\"click\",function(){let c=ot(_).$implicit,m=B();return rt(m.clickOnBranch(c))}),w(1,\"ui-kit-branch-card\",6),A(2,\"async\"),_t(3,\"ui-kit-static-map\",7),C()()}if(a&2){let _=f.$implicit,l=B();Gt(\"disabled\",_.bookingDisabled),W(\"data-locator\",\"filial_card_\"+_.id),y(),P(\"companyId\",_.id+\"\")(\"title\",_.title)(\"address\",_.address)(\"disabled\",_.bookingDisabled)(\"highlightedText\",D(2,11,l.branchSearchValue$))(\"selectIconSrc\",l.selectIconSrc),y(2),P(\"company\",_)(\"type\",l.mapType)}}var Ul=(()=>{let f=class f{constructor(){d(this,\"hasSearch\");d(this,\"companiesLoading\");d(this,\"mapType\");d(this,\"companies\");d(this,\"selectIconSrc\",\"assets/icon/select-grey.svg\");d(this,\"branchClick\",new hi);d(this,\"branchSearchValue$\");d(this,\"searchedCompanies$\");d(this,\"branchSearch\",new er);d(this,\"activityRecordType\",2);d(this,\"companies$\",new si([]))}ngOnInit(){this.branchSearchValue$=this.branchSearch.valueChanges.pipe(Be(yi),Ao(\"\"),Zo(1),Io()),this.searchedCompanies$=zo([this.companies$,this.branchSearchValue$]).pipe(jt(([l,c])=>this.filterCompaniesBySearchedString(l,c)))}ngOnChanges(l){l.companies&&this.companies$.next(this.companies)}clickOnBranch(l){this.branchClick.next(l)}filterCompaniesBySearchedString(l,c){return(l||[]).filter(m=>{let g=m.title.toLowerCase(),N=c.toLowerCase(),K=m.address.toLowerCase();return g.includes(N)||K.includes(N)})}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-branch-list\"]],inputs:{hasSearch:\"hasSearch\",companiesLoading:\"companiesLoading\",mapType:\"mapType\",companies:\"companies\",selectIconSrc:\"selectIconSrc\"},outputs:{branchClick:\"branchClick\"},standalone:!0,features:[ce,it],decls:5,vars:5,consts:[[\"class\",\"search-input\",\"type\",\"search\",3,\"formControl\",\"placeholder\",\"dataLocator\",4,\"ngIf\"],[1,\"loader\",3,\"isLoading\"],[\"class\",\"card\",3,\"disabled\",\"click\",4,\"ngFor\",\"ngForOf\"],[1,\"brand-link\"],[\"type\",\"search\",1,\"search-input\",3,\"formControl\",\"placeholder\",\"dataLocator\"],[1,\"card\",3,\"click\"],[3,\"companyId\",\"title\",\"address\",\"disabled\",\"highlightedText\",\"selectIconSrc\"],[3,\"company\",\"type\"]],template:function(c,m){c&1&&(Q(0,Oa,2,5,\"ui-kit-form-input\",0),w(1,\"ui-kit-loader\",1),Q(2,Ia,4,13,\"div\",2),A(3,\"async\"),_t(4,\"ui-kit-brand-link\",3),C()),c&2&&(P(\"ngIf\",m.hasSearch),y(),P(\"isLoading\",m.companiesLoading),y(),P(\"ngForOf\",D(3,3,m.searchedCompanies$)))},dependencies:[or,Ci,rr,xr,Or,br,pe,It,Ot,bi,xi,wi,pi,St],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}ui-kit-loader[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.search-input[_ngcontent-%COMP%]{margin-top:16px;display:block;margin-bottom:16px}.card[_ngcontent-%COMP%]{cursor:pointer;box-shadow:0 4px 8px #292b330d}.card[_ngcontent-%COMP%] + .card[_ngcontent-%COMP%]{margin-top:16px}.card.disabled[_ngcontent-%COMP%]{cursor:default}.brand-link[_ngcontent-%COMP%]{padding-top:40px}'],changeDetection:0}));let a=f;return a})();var Gl=(()=>{let f=class f{};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275mod\",No({type:f})),d(f,\"\\u0275inj\",Ro({}));let a=f;return a})();export{za as a,Ul as b,yr as c,xr as d,br as e,Pr as f,Ct as g,Or as h,cl as i,pl as j,Gl as k};\n/*! Bundled license information:\n\nleaflet/dist/leaflet-src.js:\n  (* @preserve\n   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com\n   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade\n   *)\n*/\n"
          },
          "redirectURL": "",
          "headersSize": 661,
          "bodySize": 61435,
          "_transferSize": 62096,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.879Z",
        "time": 128.32300004083663,
        "timings": {
          "blocked": 90.89400000777096,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.5160000000000053,
          "wait": 27.330999946981663,
          "receive": 9.582000086084008,
          "_blocked_queueing": 15.519000007770956,
          "_blocked_proxy": 39.448,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "359531",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-TVYAHP6T.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3388"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf25ddeebcaf-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:23 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-1693\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "43a2e7f78b4c61bb144224888831f75e"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5779,
            "mimeType": "application/javascript",
            "compression": 3377,
            "text": "import{c as H}from\"./chunk-6RRCVQGA.js\";import{s as T}from\"./chunk-UIU24VNB.js\";import{$ as S,N as k,da as _}from\"./chunk-FAHXWQCK.js\";import{Ba as f,_c as v,wa as y}from\"./chunk-CJMBEYVW.js\";import{a as A}from\"./chunk-V4TKYZTR.js\";import{g as n,i as b}from\"./chunk-JV5WWF5Q.js\";var s=function(a){return a.google=\"google\",a.facebook=\"facebook\",a}(s||{});var g=(()=>{class a{static appendScript(u){return new Promise((e,t)=>{let i=document.createElement(\"script\");i.type=\"text/javascript\",i.src=u,i.async=!1,i.onload=()=>{setTimeout(()=>e(),this.defaultTimeout)},i.onerror=r=>{setTimeout(()=>t(),this.defaultTimeout)},document.getElementsByTagName(\"head\")[0].appendChild(i)})}static appendHtml(u){document.getElementsByTagName(\"body\")[0].insertAdjacentHTML(\"beforeend\",u)}static appendFacebook(u){(function(e,t,i,r,o,c,l){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version=\"2.0\",o.queue=[],c=t.createElement(i),c.async=!0,c.src=r,l=t.getElementsByTagName(i)[0],l.parentNode.insertBefore(c,l))})(window,document,\"script\",\"https://connect.facebook.net/en_US/fbevents.js\"),window.fbq(\"init\",u),window.fbq(\"track\",\"PageView\"),window.fbq.disablePushState=!0}}return n(a,\"defaultTimeout\",1500),a})();var L=(()=>{let d=class d{constructor(e,t,i){n(this,\"route\");n(this,\"widgetApiHelperService\");n(this,\"gdpConsentBannerService\");n(this,\"eventQueue\",{});n(this,\"bookform\");n(this,\"ab\",{enabled:!1,group:0});n(this,\"enabled\",!1);n(this,\"siteURI\",document.referrer);n(this,\"parser\",document.createElement(\"a\"));n(this,\"siteHostName\");if(this.route=e,this.widgetApiHelperService=t,this.gdpConsentBannerService=i,this.parser.href=this.siteURI,this.siteHostName=this.parser.host,this.iWillSendPostmessages()){let r=o=>{o.origin!==this.siteURI||(o.data||{}).action};window.addEventListener(\"message\",r,!1)}window.onbeforeunload=()=>{this.reachGoal(\"widget_closed\")}}init(e,t,i=!1){this.bookform=e,this.enabled=i,t&&t.enabled&&(this.ab.enabled=!0,this.ab.group=t.group),i&&this.loadScripts()}pushToQueue(e,t=\"\",i={}){Array.isArray(this.eventQueue[e])||(this.eventQueue[e]=[]),this.eventQueue[e].push({target:t,params:i})}getFromQueue(e){if(Array.isArray(this.eventQueue[e]))return this.eventQueue[e].shift()}flushQueue(e,t){let i=this.getFromQueue(e);for(;i!==void 0;)t(i.target,i.params),i=this.getFromQueue(e)}reachGoal(e=\"\",t={}){var o;v()&&console.info(\"reachGoal called with:\",e,t);let i=((o=this.widgetApiHelperService.additionalOptions)==null?void 0:o.eventHooks)||{};typeof i[e]==\"function\"&&i[e](t),this.iWillSendPostmessages()&&window.top.postMessage({action:e,params:t},this.siteURI);let r=new CustomEvent(\"onSendAnalytics\",{detail:{target:e,params:t}});window.dispatchEvent(r),this.enabled&&this.bookform&&(this.tryToSendToGoogle(e,t),this.tryToSendToFacebook(e,t),this.tryToSendToFirebase(e,t))}loadScripts(){this.initGoogleScript().then(()=>{this.flushQueue(s.google,(e,t)=>{window.gtag(\"event\",e,t)})}),this.initFacebookScript().then(()=>{this.flushQueue(s.facebook,e=>{window.fbq(\"trackCustom\",e,e)})})}resolveGoogleAnalyticsCustomMap(){let e={},t=this.bookform.google_analytics_client_id_index;return t&&(e[\"dimension\".concat(t)]=\"clientId\"),e}initGoogleScript(){return b(this,null,function*(){return new Promise(e=>{let t=this.getAnalyticParam(s.google);t!==void 0?g.appendScript(\"https://www.googletagmanager.com/gtag/js?id=\".concat(t)).then(()=>{window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)};let i=this.gdpConsentBannerService.getUserConsents();window.gtag(\"consent\",\"default\",this.gdpConsentBannerService.isUserInEU()?{ad_storage:i!=null&&i.ad_storage?\"granted\":\"denied\",ad_user_data:i!=null&&i.ad_storage?\"granted\":\"denied\",ad_personalization:i!=null&&i.ad_storage?\"granted\":\"denied\",analytics_storage:i!=null&&i.ad_storage?\"granted\":\"denied\"}:{ad_storage:\"granted\",ad_user_data:\"granted\",ad_personalization:\"granted\",analytics_storage:\"granted\"}),window.gtag(\"js\",new Date),T.isInIframe()?window.gtag(\"config\",t,{custom_map:this.resolveGoogleAnalyticsCustomMap(),cookie_flags:\"samesite=none;secure\"}):window.gtag(\"config\",t,{custom_map:this.resolveGoogleAnalyticsCustomMap()}),e()}).catch(i=>{console.error(i)}):e()})})}initFacebookScript(){return new Promise(e=>{let t=this.getAnalyticParam(s.facebook);t!==void 0&&(g.appendFacebook(t),g.appendHtml('<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\\nsrc=\"https://www.facebook.com/tr?id='.concat(t,'&ev=PageView&noscript=1\"\\n/></noscript>'))),e()})}tryToSendToGoogle(e=\"\",t={}){window.gtag!==void 0?window.gtag(\"event\",e,t):this.getAnalyticParam(s.google)&&this.pushToQueue(s.google,e,t)}tryToSendToFacebook(e=\"\",t={}){window.fbq!==void 0?window.fbq(\"trackCustom\",e,e):this.getAnalyticParam(s.facebook)&&this.pushToQueue(s.facebook,e,t)}tryToSendToFirebase(e=\"\",t={}){A.isNativePlatform()&&S.logEvent({name:e,params:t})}getAnalyticParam(e){var c,l,p,h,m,w;let t=this.route.snapshot.queryParams[e];if(typeof t==\"string\")return t;let r=(p=(l=(c=this.widgetApiHelperService)==null?void 0:c.analytics)==null?void 0:l.facebook)!=null?p:this.bookform.facebook_pixel_id,o=(w=(m=(h=this.widgetApiHelperService)==null?void 0:h.analytics)==null?void 0:m.google)!=null?w:this.bookform.google_analytics_id;switch(e){case s.facebook:return r!==void 0&&r!==\"\"?r:void 0;case s.google:return o||void 0;default:return}}iWillSendPostmessages(){return!!(window.top!==window&&this.siteHostName&&this.siteHostName.length&&this.siteHostName!==location.host&&window.top&&typeof window.top.postMessage==\"function\")}};n(d,\"\\u0275fac\",function(t){return new(t||d)(f(k),f(H),f(_))}),n(d,\"\\u0275prov\",y({token:d,factory:d.\\u0275fac,providedIn:\"root\"}));let a=d;return a})();export{g as a,L as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2402,
          "_transferSize": 3062,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.879Z",
        "time": 117.88599996361881,
        "timings": {
          "blocked": 91.48899997252971,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.36700000000000443,
          "wait": 23.33899998958408,
          "receive": 2.6910000015050173,
          "_blocked_queueing": 16.55399997252971,
          "_blocked_proxy": 38.946,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "357740",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-A6DALH5L.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3388"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf25d9a3bca3-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:23 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-205f\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "11d2c948dcc91fe6d18c06bd14746f1d"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 8287,
            "mimeType": "application/javascript",
            "compression": 4819,
            "text": "import{m as A}from\"./chunk-UIU24VNB.js\";import{s as q}from\"./chunk-W3M7SAIY.js\";import{e as H,f as K,g as $}from\"./chunk-FAHXWQCK.js\";import{$b as g,Ab as l,Ac as B,Bb as L,Bc as h,Gc as N,Ha as m,Ic as G,Ob as V,Qa as M,Qb as c,Ra as S,Rb as f,Sa as k,Ta as I,Tb as u,_b as d,ac as _,cb as R,ec as D,ic as E,jc as p,kc as T,lc as z,sc as w,tc as F,uc as U,va as P}from\"./chunk-CJMBEYVW.js\";import{g as r}from\"./chunk-JV5WWF5Q.js\";var C,X=new Uint8Array(16);function O(){if(!C&&(C=typeof crypto<\"u\"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<\"u\"&&typeof msCrypto.getRandomValues==\"function\"&&msCrypto.getRandomValues.bind(msCrypto),!C))throw new Error(\"crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported\");return C(X)}var Z=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function J(n){return typeof n==\"string\"&&Z.test(n)}var j=J;var a=[];for(x=0;x<256;++x)a.push((x+256).toString(16).substr(1));var x;function Q(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=(a[n[e+0]]+a[n[e+1]]+a[n[e+2]]+a[n[e+3]]+\"-\"+a[n[e+4]]+a[n[e+5]]+\"-\"+a[n[e+6]]+a[n[e+7]]+\"-\"+a[n[e+8]]+a[n[e+9]]+\"-\"+a[n[e+10]]+a[n[e+11]]+a[n[e+12]]+a[n[e+13]]+a[n[e+14]]+a[n[e+15]]).toLowerCase();if(!j(i))throw TypeError(\"Stringified UUID is invalid\");return i}var W=Q;function Y(n,e,i){n=n||{};var t=n.random||(n.rng||O)();if(t[6]=t[6]&15|64,t[8]=t[8]&63|128,e){i=i||0;for(var o=0;o<16;++o)e[i+o]=t[o];return e}return W(t)}var y=Y;function et(n,e){if(n&1){let i=D();I(),d(0,\"svg\",2),E(\"click\",function(){let o=S(i).index,s=p();return k(s.selectStar(o+1))}),d(1,\"defs\")(2,\"linearGradient\",3),_(3,\"stop\",4)(4,\"stop\",5),g()(),_(5,\"path\",6),g()}if(n&2){let i=e.$implicit,t=p();u(\"selected\",i.isSelected)(\"disabled\",t.disabled),f(\"ngClass\",t.starClasses),c(\"data-locator\",i.dataLocator),l(2),f(\"id\",\"starGradient\"+i.uniqueId),l(),c(\"offset\",i.fillPercentage+\"%\"),l(),c(\"offset\",i.fillPercentage+\"%\"),l(),c(\"fill\",\"url(#starGradient\"+i.uniqueId+\")\")(\"stroke\",\"url(#starGradient\"+i.uniqueId+\")\")}}function nt(n,e){if(n&1&&(d(0,\"span\",7)(1,\"span\"),w(2),g(),d(3,\"span\"),w(4),N(5,\"wordNumeralCase\"),g()()),n&2){let i=e.ngIf,t=p();l(),c(\"data-locator\",t.commentsCountDataLocator),l(),U(\"\",i,\" \"),l(2),F(G(5,3,\"master.reviews\",i))}}var yt=(()=>{let e=class e{constructor(){r(this,\"size\",\"medium\");r(this,\"disabled\",!1);r(this,\"commentsCount\");r(this,\"commentsCountDataLocator\");r(this,\"maxRating\",5);r(this,\"formValue\",null);r(this,\"ratingStarsInfo\",this.calculateRatings());r(this,\"formControlOnChange\",t=>{});r(this,\"formControlOnTouched\",()=>{})}get selectable(){return!this.disabled}get starClasses(){return{[\"size-\".concat(this.size)]:!0,selectable:this.selectable}}ngOnChanges(t){t.disabled&&this.setDisabledState(this.disabled),t.maxRating&&(this.ratingStarsInfo=this.calculateRatings())}selectStar(t){this.disabled||(this.formControlOnChange(t),this.formValue=t,this.ratingStarsInfo=this.calculateRatings(t),this.formControlOnTouched())}calculateRatings(t){let o=[];for(let s=1;s<this.maxRating+1;s++){let b=!!t&&t>=s,v=0;b?v=100:t&&Math.ceil(t)===s&&(v=(t-(s-1))*100),o.push({isSelected:b,dataLocator:\"rating_star_\".concat(b?\"active\":\"passive\",\"_\").concat(s),fillPercentage:v,uniqueId:y()})}return o}writeValue(t){if(t!==null&&t<0)throw new Error(\"Invalid value for rating input: '\".concat(t,\"'\"));this.formValue=t,this.formValue&&(this.ratingStarsInfo=this.calculateRatings(this.formValue))}registerOnChange(t){this.formControlOnChange=t}registerOnTouched(t){this.formControlOnTouched=t}setDisabledState(t){this.disabled=t}};r(e,\"\\u0275fac\",function(o){return new(o||e)}),r(e,\"\\u0275cmp\",m({type:e,selectors:[[\"ui-kit-rating\"]],hostVars:1,hostBindings:function(o,s){o&2&&c(\"data-locator-rating-comments-count\",s.commentsCount)},inputs:{size:\"size\",disabled:\"disabled\",commentsCount:\"commentsCount\",commentsCountDataLocator:\"commentsCountDataLocator\",maxRating:\"maxRating\"},standalone:!0,features:[B([{provide:q,useExisting:P(()=>e),multi:!0}]),M,h],decls:2,vars:2,consts:[[\"class\",\"star\",\"viewBox\",\"-1 -1 16 16\",\"fill\",\"none\",\"xmlns\",\"http://www.w3.org/2000/svg\",3,\"selected\",\"ngClass\",\"disabled\",\"click\",4,\"ngFor\",\"ngForOf\"],[\"class\",\"label\",4,\"ngIf\"],[\"viewBox\",\"-1 -1 16 16\",\"fill\",\"none\",\"xmlns\",\"http://www.w3.org/2000/svg\",1,\"star\",3,\"click\",\"ngClass\"],[\"x1\",\"-5%\",\"y1\",\"0%\",\"x2\",\"105%\",\"y2\",\"0%\",3,\"id\"],[1,\"gradient-fill-color\"],[1,\"gradient-empty-color\"],[\"d\",\"M6.65558 1.37995C6.78574 1.07771 7.21426 1.07771 7.34442 1.37995L8.35416 3.72466C8.58941 4.27095 9.10433 4.64505 9.69658 4.69998L12.2386 4.93574C12.5662 4.96614 12.6986 5.37369 12.4514 5.59087L10.5335 7.27575C10.0866 7.6683 9.88996 8.27362 10.0207 8.85385L10.582 11.3443C10.6544 11.6653 10.3077 11.9172 10.0247 11.7492L7.82966 10.4458C7.31824 10.1421 6.68177 10.1421 6.17034 10.4458L3.97526 11.7492C3.69231 11.9172 3.34562 11.6653 3.41797 11.3443L3.97927 8.85385C4.11004 8.27362 3.91336 7.6683 3.46651 7.27575L1.54858 5.59087C1.30136 5.37369 1.43378 4.96614 1.76144 4.93575L4.30342 4.69998C4.89567 4.64505 5.41059 4.27095 5.64584 3.72466L6.65558 1.37995Z\",\"stroke-width\",\"1.25\"],[1,\"label\"]],template:function(o,s){o&1&&V(0,et,6,11,\"svg\",0)(1,nt,6,6,\"span\",1),o&2&&(f(\"ngForOf\",s.ratingStarsInfo),l(),f(\"ngIf\",s.commentsCount))},dependencies:[A,H,$,K],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{padding-left:2px}[_nghost-%COMP%]   .star[_ngcontent-%COMP%]   .gradient-fill-color[_ngcontent-%COMP%]{stop-color:var(--widget-ui-kit-color-color_yellow_accent)}[_nghost-%COMP%]   .star[_ngcontent-%COMP%]   .gradient-empty-color[_ngcontent-%COMP%]{stop-color:var(--widget-ui-kit-color-color_grey_05)}[_nghost-%COMP%]   .star[_ngcontent-%COMP%]:not(.disabled){cursor:pointer}[_nghost-%COMP%]   .star.size-medium[_ngcontent-%COMP%]{width:16px;height:16px;margin:0}[_nghost-%COMP%]   .star.size-large[_ngcontent-%COMP%]{width:32px;height:32px;margin:0}[_nghost-%COMP%]   .star.size-extra-medium[_ngcontent-%COMP%]{width:24px;height:24px;margin:0}[_nghost-%COMP%]   .star.size-big[_ngcontent-%COMP%]{width:40px;height:40px;margin:4px}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{margin-left:8px;font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:var(--widget-ui-kit-color-secondary-text)}'],changeDetection:0}));let n=e;return n})();var ot=[\"*\"],St=(()=>{let e=class e{constructor(t){r(this,\"elementRef\");r(this,\"hideScrollbar\",!1);this.elementRef=t}set scrollLeft(t){typeof t==\"number\"&&this.elementRef.nativeElement.scrollTo({left:t,behavior:\"smooth\"})}};r(e,\"\\u0275fac\",function(o){return new(o||e)(L(R))}),r(e,\"\\u0275cmp\",m({type:e,selectors:[[\"ui-kit-horizontal-scrollable\"]],hostVars:2,hostBindings:function(o,s){o&2&&u(\"hide-scrollbar\",s.hideScrollbar)},inputs:{scrollLeft:\"scrollLeft\",hideScrollbar:\"hideScrollbar\"},standalone:!0,features:[h],ngContentSelectors:ot,decls:2,vars:0,consts:[[1,\"flex-container\"]],template:function(o,s){o&1&&(T(),d(0,\"div\",0),z(1),g())},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%;max-width:600px;padding-left:16px;padding-right:16px;overflow-x:scroll;overflow-x:scroll!important;transform:translateZ(0);scrollbar-color:rgba(0,0,0,0) transparent;scrollbar-width:thin;transition:scrollbar-color .2s ease-out;transition:all .2s}[_nghost-%COMP%]:hover::-webkit-scrollbar-thumb{background-color:#0003}[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#0000004d}[_nghost-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_nghost-%COMP%]::-webkit-scrollbar-thumb{transition:background-color 2s ease-out;border-radius:6px}[_nghost-%COMP%]:hover{scrollbar-color:rgba(0,0,0,.2) transparent}[_nghost-%COMP%]   .flex-container[_ngcontent-%COMP%]{display:flex;gap:8px;width:max-content;min-width:max-content;max-width:100%}.hide-scrollbar[_nghost-%COMP%]{scrollbar-color:rgba(0,0,0,0) transparent!important}.hide-scrollbar[_nghost-%COMP%]:hover::-webkit-scrollbar-thumb{background-color:#0000!important}.hide-scrollbar[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#0000!important}'],changeDetection:0}));let n=e;return n})();export{y as a,yt as b,St as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3468,
          "_transferSize": 4128,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.879Z",
        "time": 112.62100003659725,
        "timings": {
          "blocked": 92.15299997276813,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 1.429000000000002,
          "wait": 18.093999969467518,
          "receive": 0.9450000943616033,
          "_blocked_queueing": 17.134999972768128,
          "_blocked_proxy": 38.650999999999996,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "358013",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-G22OQKPL.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3388"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf25d8cebcac-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:23 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-1bff\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "c9619eb92bbb501fda5698aa214fa068"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 7167,
            "mimeType": "application/javascript",
            "compression": 4365,
            "text": "import{g as Q}from\"./chunk-FAHXWQCK.js\";import{$a as m,$b as I,Ab as y,Bb as a,Bc as H,E as T,Gb as U,Ha as A,Ia as D,Ja as l,Ob as N,Qa as h,Qb as b,Ra as v,Rb as f,Sa as x,Sb as j,Tb as O,Ub as k,_a as u,_b as C,cb as d,ec as S,ic as V,j as F,jc as p,na as L,sc as P,tc as R,ub as E,xa as M}from\"./chunk-CJMBEYVW.js\";import{g as i}from\"./chunk-JV5WWF5Q.js\";function $(n){return typeof n!=\"number\"&&(n=parseFloat(n)),isNaN(n)?null:\"\".concat(n,\"px\")}function w(n,t){let s=$(n)||t;return s?{width:s,height:s}:null}function K(n,t){if(n&1){let s=S();C(0,\"img\",3),V(\"error\",function(){v(s);let e=p();return x(e.handleImgError())}),I()}if(n&2){let s=p();f(\"src\",s.urlLight,E),b(\"alt\",s.text)(\"data-locator\",\"avatar\")}}function Z(n,t){if(n&1){let s=S();C(0,\"img\",4),V(\"error\",function(){v(s);let e=p();return x(e.handleImgError())})(\"load\",function(){v(s);let e=p();return x(e.changeQuality())}),I()}if(n&2){let s=p();O(\"hide-before-loaded\",!s.highQualityReady),f(\"src\",s.url,E),b(\"alt\",s.text)(\"data-locator\",\"avatar\")}}var B=[\"no-master-sm.png\",\"no-master.png\"],et=(()=>{let t=class t{constructor(){i(this,\"urlLight\");i(this,\"url\");i(this,\"text\");i(this,\"size\",\"normal\");i(this,\"initialsFontSize\");i(this,\"round\",!1);i(this,\"bordered\",!1);i(this,\"currentQuality\",\"low\");i(this,\"urlValid\",!1)}get classIsImageMode(){return this.urlValid}get avatarDimensions(){switch(this.size){case\"normal\":return w(\"48px\");case\"big\":return w(\"64px\");default:return w(this.size)}}get highQualityReady(){return!this.urlLight||this.currentQuality===\"high\"}get hasAvatar(){return this.url!=null&&this.urlValid}get computedText(){if(this.hasAvatar||!this.text)return\"\";let[r,e]=this.text.split(\" \"),o=t.getFirstLetter(r),c=t.getFirstLetter(e);return[o,c].filter(Boolean).join(\"\")}static getFirstLetter(r){var e;return((e=r==null?void 0:r[0])==null?void 0:e.trim().toUpperCase())||\"\"}static avatarInException(r){let e=r.split(\"/\").pop();return B.includes(e)}handleImgError(){this.urlValid=!1}ngOnChanges(r){r.url&&(this.urlValid=!!this.url&&!t.avatarInException(this.url))}changeQuality(){this.currentQuality=\"high\"}};i(t,\"\\u0275fac\",function(e){return new(e||t)}),i(t,\"\\u0275cmp\",A({type:t,selectors:[[\"ui-kit-avatar\"]],hostVars:8,hostBindings:function(e,o){e&2&&(k(o.avatarDimensions),O(\"round\",o.round)(\"image-mode\",o.classIsImageMode)(\"bordered\",o.bordered))},inputs:{urlLight:\"urlLight\",url:\"url\",text:\"text\",size:\"size\",initialsFontSize:\"initialsFontSize\",round:\"round\",bordered:\"bordered\"},standalone:!0,features:[h,H],decls:4,vars:6,consts:[[\"class\",\"image\",\"loading\",\"lazy\",3,\"src\",\"error\",4,\"ngIf\"],[\"class\",\"image\",\"loading\",\"lazy\",3,\"hide-before-loaded\",\"src\",\"error\",\"load\",4,\"ngIf\"],[1,\"text\"],[\"loading\",\"lazy\",1,\"image\",3,\"error\",\"src\"],[\"loading\",\"lazy\",1,\"image\",3,\"error\",\"load\",\"src\"]],template:function(e,o){e&1&&(N(0,K,1,3,\"img\",0)(1,Z,1,5,\"img\",1),C(2,\"span\",2),P(3),I()),e&2&&(f(\"ngIf\",o.urlValid&&!o.highQualityReady),y(),f(\"ngIf\",o.urlValid),y(),j(\"font-size\",o.initialsFontSize),b(\"data-locator\",\"initials\"),y(),R(o.computedText))},dependencies:[Q],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{position:relative;display:flex;flex-shrink:0;border-radius:20%;text-align:center;justify-content:center;align-items:center;background-color:var(--widget-ui-kit-color-icons-grey-bg);color:var(--widget-ui-kit-color-icons-grey);-webkit-user-select:none;user-select:none;overflow:hidden}[_nghost-%COMP%]   .hide-before-loaded[_ngcontent-%COMP%]{width:0;height:0}.image-mode[_nghost-%COMP%]   [_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;box-shadow:inset 0 0 0 1px #0f0f0f0a;border-radius:50%}.round[_nghost-%COMP%]{border-radius:100%}.bordered[_nghost-%COMP%]{border:2px solid var(--widget-ui-kit-color-color_white);box-sizing:content-box}.image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.text[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px}'],changeDetection:0}));let n=t;return n})();var W=(()=>{let t=class t{constructor(r,e){i(this,\"elementRef\");i(this,\"ngZone\");i(this,\"offset\",\"\".concat(Math.min(Math.trunc(((window==null?void 0:window.innerHeight)||1)*.15),128),\"px\"));i(this,\"imageUrl\");i(this,\"observer\");this.elementRef=r,this.ngZone=e}ngAfterViewInit(){this.updateObserver()}ngOnChanges(r){var c,z,_;let e=((c=r.imageUrl)==null?void 0:c.currentValue)!==(r==null?void 0:r.imageUrl.previousValue),o=((z=r.offset)==null?void 0:z.currentValue)!==((_=r==null?void 0:r.offset)==null?void 0:_.previousValue);(e||o)&&this.updateObserver()}ngOnDestroy(){this.observer&&this.observer.disconnect()}updateObserver(){this.ngZone.runOutsideAngular(()=>{var r;this.observer&&this.observer.disconnect(),(r=this.elementRef)!=null&&r.nativeElement&&(this.observer=new IntersectionObserver(e=>{e==null||e.forEach(o=>{if(o.isIntersecting){let c=this.elementRef.nativeElement;c.src=this.imageUrl,this.observer&&this.observer.unobserve(c)}})},{rootMargin:\"0px 0px \".concat(this.offset,\" 0px\")}),this.observer.observe(this.elementRef.nativeElement))})}};i(t,\"\\u0275fac\",function(e){return new(e||t)(a(d),a(m))}),i(t,\"\\u0275dir\",l({type:t,selectors:[[\"\",\"uiKitLazyLoadImage\",\"\"]],inputs:{offset:\"offset\",imageUrl:\"imageUrl\"},features:[h]}));let n=t;return n})();var q=(()=>{let t=class t{constructor(){i(this,\"isLast\");i(this,\"initEvent\",new u)}ngAfterViewInit(){if(this.isLast){setTimeout(()=>this.initEvent.emit(),10);return}this.initEvent.emit()}};i(t,\"\\u0275fac\",function(e){return new(e||t)}),i(t,\"\\u0275dir\",l({type:t,selectors:[[\"\",\"ngInit\",\"\"]],inputs:{isLast:\"isLast\"},outputs:{initEvent:\"ngInit\"}}));let n=t;return n})();var G=(()=>{let t=class t{constructor(r,e,o){i(this,\"elem\");i(this,\"renderer\");i(this,\"zone\");i(this,\"appHorizontalScrollCheck\",new u);this.elem=r,this.renderer=e,this.zone=o}ngAfterViewInit(){this.subscribeToHorizontalScroll(this.elem)}subscribeToHorizontalScroll(r){this.zone.runOutsideAngular(()=>this.renderer.listen(r.nativeElement,\"scroll\",e=>{this.appHorizontalScrollCheck.emit({value:e.target.scrollLeft,percent:e.target.scrollLeft/(e.target.scrollWidth-e.target.offsetWidth)*100})}))}};i(t,\"\\u0275fac\",function(e){return new(e||t)(a(d),a(U),a(m))}),i(t,\"\\u0275dir\",l({type:t,selectors:[[\"\",\"ngHorizontalScrollCheck\",\"\"]],outputs:{appHorizontalScrollCheck:\"ngHorizontalScrollCheck\"}}));let n=t;return n})();var J=(()=>{let t=class t{constructor(r,e){i(this,\"element\");i(this,\"zone\");i(this,\"childScrollTop\",new u);i(this,\"destroy$\",new F(1));i(this,\"onScroll\",r=>{this.childScrollTop.emit(r.target.scrollTop)});this.element=r,this.zone=e}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{T(this.element.nativeElement,\"scroll\",{capture:!0}).pipe(L(this.destroy$)).subscribe(this.onScroll)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};i(t,\"\\u0275fac\",function(e){return new(e||t)(a(d),a(m))}),i(t,\"\\u0275dir\",l({type:t,selectors:[[\"\",\"uiKitHandleChildScroll\",\"\"]],outputs:{childScrollTop:\"childScrollTop\"}}));let n=t;return n})();var St=(()=>{let t=class t{};i(t,\"\\u0275fac\",function(e){return new(e||t)}),i(t,\"\\u0275mod\",D({type:t})),i(t,\"\\u0275inj\",M({}));let n=t;return n})();export{$ as a,et as b,W as c,q as d,G as e,J as f,St as g};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2802,
          "_transferSize": 3462,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.879Z",
        "time": 119.355000089854,
        "timings": {
          "blocked": 93.73700004248322,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.35199999999998965,
          "wait": 21.86499999468029,
          "receive": 3.401000052690506,
          "_blocked_queueing": 18.56600004248321,
          "_blocked_proxy": 37.465999999999994,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "357734",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-B4YFVVDN.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3388"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf25dd0cbcb2-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:23 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-256\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "4344ec3bf8d66b79e9f1b077aedc840e"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 598,
            "mimeType": "application/javascript",
            "compression": 213,
            "text": "import{Bb as n,Db as s,Hb as o,Ja as a}from\"./chunk-CJMBEYVW.js\";import{g as t}from\"./chunk-JV5WWF5Q.js\";var p=(()=>{let e=class e{constructor(i,r){t(this,\"vcRef\");t(this,\"templateRef\");t(this,\"context\",{});this.vcRef=i,this.templateRef=r}set ngVar(i){this.context.$implicit=this.context.ngVar=i,this.updateView()}updateView(){this.vcRef.clear(),this.vcRef.createEmbeddedView(this.templateRef,this.context)}};t(e,\"\\u0275fac\",function(r){return new(r||e)(n(o),n(s))}),t(e,\"\\u0275dir\",a({type:e,selectors:[[\"\",\"ngVar\",\"\"]],inputs:{ngVar:\"ngVar\"},standalone:!0}));let c=e;return c})();export{p as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 385,
          "_transferSize": 1044,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.879Z",
        "time": 120.4950000392273,
        "timings": {
          "blocked": 94.20999999703467,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.28999999999999204,
          "wait": 22.20100002380461,
          "receive": 3.794000018388033,
          "_blocked_queueing": 19.14099999703467,
          "_blocked_proxy": 37.394,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "357737",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-FZ3GVWSV.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3388"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf25d800bcbd-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:23 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-d724\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "35cb53f7b860a5f4dc6025a0c91708af"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 55076,
            "mimeType": "application/javascript",
            "compression": 40541,
            "text": "import{a as Ve,b as se,d as kt}from\"./chunk-K35VHT3J.js\";import{a as St}from\"./chunk-OFQEHNJH.js\";import{b as Ct}from\"./chunk-HYJO63QR.js\";import{a as bt,d as Pt,g as W,i as wt,j,m as Mt,n as xt}from\"./chunk-6RRCVQGA.js\";import{$a as ft,U as Re,aa as mt,ga as gt,ia as ht,ja as pe,ra as ut,sa as _t}from\"./chunk-W3M7SAIY.js\";import{k as yt,m as _e,w as vt}from\"./chunk-KARNDABV.js\";import{Gh as v,N as lt,P as re,Q as ae,Qd as Ee,_ as le,_d as dt,aa as Be,c as oe,dd as ct,g as N,ga as pt,h as ot,ha as st,i as rt,k as Ae,l as Z,r as at,ya as Q}from\"./chunk-FAHXWQCK.js\";import{$b as m,$c as He,Ab as c,Ac as Ie,Ba as G,Bb as _,Ca as F,Cc as je,Db as it,E as be,Gc as S,Ha as x,Hb as nt,Hc as O,I as Ke,Ia as Je,J as Pe,Ja as et,Jb as ne,Lc as te,Ob as C,Qb as k,Ra as h,Rb as s,Sa as u,Sb as w,Tb as M,Va as tt,Vb as Te,X as we,_ as J,_a as H,_b as d,ac as T,bc as B,cb as A,cc as E,dc as ee,ec as b,h as Ge,i as ye,ia as Me,ic as f,j as ve,jc as p,ka as Ze,kc as K,la as xe,lc as P,na as $,oc as V,pa as Se,pc as D,qa as We,qc as U,rc as ue,sc as L,tc as z,ub as Oe,uc as Le,wa as Y,x as I,xa as Xe,y as ke}from\"./chunk-CJMBEYVW.js\";import{g as t,i as he}from\"./chunk-JV5WWF5Q.js\";var Ot=64,Tt=\"primary\",Ne=\"secondary\",Fe=Ne,Qe=100,ce={titleBlock:{title:\"header_title\",clickableArea:\"header_title_small_clickable_area\",buttonCompanyInfo:\"header_button_company_info\"},smallHeader:{backButton:\"header_small_button_back\",closeButton:\"header_small_button_close\",profileButton:\"header_small_profile_button\",logo:\"header_small_image_logo\",description:\"header_small_description\"},bigHeader:{backButton:\"header_big_button_back\",logo:\"header_big_image_logo\",description:\"header_big_description\"}},q=(()=>{let n=class n{constructor(){t(this,\"theme\",Fe);t(this,\"backgroundImage\",null);t(this,\"title\",null);t(this,\"description\",null);t(this,\"isTitleChevronArrow\",null);t(this,\"isBackButton\",!1);t(this,\"isProfileButton\",!1);t(this,\"isCloseButton\",!1);t(this,\"isSmallHeaderHidden\",!1);t(this,\"zIndex\",Qe);t(this,\"useMiddleClick\",!0);t(this,\"backClick\",new H);t(this,\"closeClick\",new H);t(this,\"profileClick\",new H);t(this,\"titleClick\",new H);t(this,\"destroy$\",new ve(1));t(this,\"logoImageUrl\",null)}set logoImage(a){this.logoImageUrl=a&&!a.includes(\"altegio-default-logo\")?a:null}get themeCSSClass(){return\"app-header--\".concat(this.theme)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onTitleClick(){this.isTitleChevronArrow&&this.titleClick.emit()}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275dir\",et({type:n,inputs:{theme:\"theme\",backgroundImage:\"backgroundImage\",logoImage:\"logoImage\",title:\"title\",description:\"description\",isTitleChevronArrow:\"isTitleChevronArrow\",isBackButton:\"isBackButton\",isProfileButton:\"isProfileButton\",isCloseButton:\"isCloseButton\",isSmallHeaderHidden:\"isSmallHeaderHidden\",zIndex:\"zIndex\",useMiddleClick:\"useMiddleClick\"},outputs:{backClick:\"backClick\",closeClick:\"closeClick\",profileClick:\"profileClick\",titleClick:\"titleClick\"}}));let o=n;return o})();function Xt(o,n){if(o&1&&(d(0,\"div\",9),L(1),m()),o&2){let r=n.ngIf;c(),Le(\" \",r,\" \")}}function Jt(o,n){if(o&1&&(d(0,\"div\",10),L(1),m()),o&2){let r=n.ngIf;c(),Le(\" \",r,\" \")}}function ei(o,n){if(o&1&&(T(0,\"ui-kit-button\",7),S(1,\"translate\")),o&2){let r=p();s(\"type\",r.buttonType.secondary)(\"title\",O(1,4,\"branch.all\"))(\"oneLineTitle\",!0),k(\"data-locator\",\"header_modal_companies_button\")}}var Et=(()=>{let n=class n{constructor(a,e,i,l,g){t(this,\"modalService\");t(this,\"router\");t(this,\"location\");t(this,\"navigationStepUrlResolver\");t(this,\"trackingService\");t(this,\"company\");t(this,\"allCompaniesBtnIsHidden\");t(this,\"store\",F(Q));t(this,\"buttonType\",ut);t(this,\"companies$\",this.store.select(v.companies.getCompanies));t(this,\"companiesIsLoading\",this.store.select(v.companies.isLoading));t(this,\"destroy$\",new ve(1));this.modalService=a,this.router=e,this.location=i,this.navigationStepUrlResolver=l,this.trackingService=g}ngOnInit(){this.trackingService.track({type:le.Action.view,element_type:\"popup\",element_name:\"about_company_popup\"}),this.allCompaniesBtnIsHidden||this.defineCompanies()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getAboutCompanyUrl(){return[\"/company\",\"\".concat(this.company.id),\"about\"]}getAboutCompanyQueryParams(){let a=this.navigationStepUrlResolver.removeQueryParamFromUrl(this.location.path(),\"previousStepUrlParamName\");return{[j]:a}}getAllCompaniesUrl(){return[vt(this.company.city_id)]}getAllCompaniesQueryParams(){return{[j]:this.navigationStepUrlResolver.removeQueryParamFromUrl(this.location.path(),j)}}navigateToAboutCompany(){this.trackingService.track({type:le.Action.click,element_type:\"button\",element_name:\"about_company_popup_button\",element_id:this.company.id}),this.close()}navigateToAllCompanies(){this.trackingService.track({type:le.Action.click,element_type:\"button\",element_name:\"salon_selection_popup_button\",element_id:this.company.id}),this.close()}close(){this.modalService.closeModal()}defineCompanies(){this.companies$.pipe(J(a=>!(a!=null&&a.length)),xe(()=>this.requestCompanies()),$(this.destroy$)).subscribe()}requestCompanies(){return this.store.select(v.bookform.getGroupId).pipe(J(Boolean),Se(a=>this.store.dispatch(new Ee({groupId:a,bookformId:this.store.selectSnapshot(v.bookform.getBookformId)}))))}navigate(a){let e=this.router.createUrlTree(a,{queryParams:{[j]:this.location.path()}});e&&this.router.navigateByUrl(e)}};t(n,\"\\u0275fac\",function(e){return new(e||n)(_(pe),_(re),_(oe),_(W),_(Be))}),t(n,\"\\u0275cmp\",x({type:n,selectors:[[\"app-header-company-modal\"]],inputs:{company:\"company\",allCompaniesBtnIsHidden:\"allCompaniesBtnIsHidden\"},decls:13,vars:20,consts:[[1,\"company-modal\"],[1,\"company-modal-content\"],[\"class\",\"company-modal-title\",4,\"ngIf\"],[\"class\",\"company-modal-subtitle\",4,\"ngIf\"],[3,\"isLoading\"],[1,\"company-modal-buttons\"],[3,\"click\",\"routerLink\",\"queryParams\",\"queryParamsHandling\"],[1,\"company-modal-button\",3,\"type\",\"title\",\"oneLineTitle\"],[\"class\",\"company-modal-button\",3,\"type\",\"title\",\"oneLineTitle\",4,\"ngIf\"],[1,\"company-modal-title\"],[1,\"company-modal-subtitle\"]],template:function(e,i){e&1&&(d(0,\"div\",0)(1,\"main\",1),C(2,Xt,2,1,\"div\",2)(3,Jt,2,1,\"div\",3),m(),d(4,\"ui-kit-loader\",4),S(5,\"async\"),d(6,\"footer\",5)(7,\"a\",6),f(\"click\",function(){return i.navigateToAboutCompany()}),T(8,\"ui-kit-button\",7),S(9,\"translate\"),m(),d(10,\"a\",6),f(\"click\",function(){return i.navigateToAllCompanies()}),C(11,ei,2,6,\"ui-kit-button\",8),S(12,\"async\"),m()()()()),e&2&&(c(2),s(\"ngIf\",i.company==null?null:i.company.title),c(),s(\"ngIf\",i.company==null?null:i.company.address),c(),s(\"isLoading\",O(5,14,i.companiesIsLoading)),c(3),s(\"routerLink\",i.getAboutCompanyUrl())(\"queryParams\",i.getAboutCompanyQueryParams())(\"queryParamsHandling\",\"merge\"),c(),s(\"type\",i.buttonType.secondary)(\"title\",O(9,16,\"branch.about\"))(\"oneLineTitle\",!0),k(\"data-locator\",\"header_modal_company_info_button\"),c(2),s(\"routerLink\",i.getAllCompaniesUrl())(\"queryParams\",i.getAllCompaniesQueryParams())(\"queryParamsHandling\",\"merge\"),c(),s(\"ngIf\",O(12,18,i.companies$).length&&!i.allCompaniesBtnIsHidden))},dependencies:[N,_t,ae,se,mt,Z,pt],styles:['@charset \"UTF-8\";[_nghost-%COMP%]   .company-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:164px;padding-bottom:32px}[_nghost-%COMP%]   .company-modal-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:12px 16px 16px}[_nghost-%COMP%]   .company-modal-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:28px;color:var(--widget-ui-kit-color-color_text_black);word-break:break-word}[_nghost-%COMP%]   .company-modal-title[_ngcontent-%COMP%] ~ .company-modal-subtitle[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .company-modal-subtitle[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-secondary-text)}[_nghost-%COMP%]   .company-modal-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:16px;flex-wrap:wrap}[_nghost-%COMP%]   .company-modal-button[_ngcontent-%COMP%]{min-width:calc(50% - 5px);flex-shrink:0;flex-grow:1}'],changeDetection:0}));let o=n;return o})();var $e=o=>\"/company/\".concat(o,\"/activity/select/\"),Rt=(o,n)=>\"/company/\".concat(o,\"/activity/info/\").concat(n),Vt=(o,n)=>\"/company/\".concat(o,\"/activity/info/\").concat(n,\"/more\"),Dt=o=>\"/company/\".concat(o,\"/activity/edit-activities\");var Ut=(()=>{let n=class n{constructor(a,e,i,l,g,y,ie){t(this,\"router\");t(this,\"currentCompany\");t(this,\"storeSnapshotService\");t(this,\"appNavigationService\");t(this,\"orderManagerService\");t(this,\"navigationStepUrlResolver\");t(this,\"location\");t(this,\"currentStep\",null);t(this,\"navigationSteps\",[\"select\",\"info\",\"book-again\",\"contact\"]);this.router=a,this.currentCompany=e,this.storeSnapshotService=i,this.appNavigationService=l,this.orderManagerService=g,this.navigationStepUrlResolver=y,this.location=ie}setCurrentStep(a){this.currentStep=a}getFirstStepUrl(){return this.getStepUrl(this.navigationSteps[0])}navigateBack(){return he(this,null,function*(){let a=new URL(location.href).searchParams.get(j);if(a){let l=this.navigationStepUrlResolver.removeQueryParamFromUrl(decodeURIComponent(a),j);return this.appNavigationService.goBack({url:l})}let e=this.navigationSteps[this.navigationSteps.indexOf(this.currentStep)-1],i=this.getStepUrl(e);this.appNavigationService.goBack({url:i})})}navigateToNextStep(a){return he(this,null,function*(){let e=a||this.navigationSteps[this.navigationSteps.indexOf(this.currentStep)+1],i=yield this.getStepUrl(e);yield this.router.navigate([i],{queryParams:{[ct]:yield this.orderManagerService.getOrder()},queryParamsHandling:\"merge\"})})}isOnOrderFirstStep(a){var i,l;let e=(l=(i=a.routeConfig)==null?void 0:i.data)==null?void 0:l.step;return e?e===this.navigationSteps[0]:!1}returnToSelectActivities(){this.appNavigationService.returnToMain({successUrl:$e(this.currentCompany.getCurrentCompanyId())})}goToEditActivities(){this.router.navigate([Dt(this.currentCompany.getCurrentCompanyId())],{queryParams:{[j]:this.location.path()}})}getStepUrl(a){let e=this.currentCompany.getCurrentCompanyId();switch(a){case\"select\":return $e(Number(e));case\"info\":{let i=this.getCurrentActivityId();return Rt(Number(e),i)}case\"book-again\":{let i=this.getCurrentActivityId();return Vt(Number(e),i)}case\"contact\":return W.getContactStepUrl(e);default:throw new Error(\"\".concat(a,\" not implemented\"))}}getCurrentActivityId(){var a;return this.storeSnapshotService.selectSnapshot(v.activities.getCurrentRouteActivityId)||((a=this.storeSnapshotService.selectSnapshot(v.order.getFirstSelectedActivity))==null?void 0:a.id)}};t(n,\"\\u0275fac\",function(e){return new(e||n)(G(re),G(bt),G(Q),G(xt),G(Mt),G(W),G(oe))}),t(n,\"\\u0275prov\",Y({token:n,factory:n.\\u0275fac,providedIn:\"root\"}));let o=n;return o})();var Lt=(()=>{let n=class n{constructor(){t(this,\"store\",F(Q));t(this,\"currentBookform\",F(Pt));t(this,\"isMixedRecordType$\",this.store.select(v.currentCompany.getCurrentCompany).pipe(we((a,e)=>!a==!e),I(a=>{let e=this.currentBookform.getCurrentBookform();return((e==null?void 0:e.record_type_id)||(a==null?void 0:a.record_type_id))===0}),Me(1)))}getRecordType(){var e;let a=this.currentBookform.getCurrentBookform();return(a==null?void 0:a.record_type_id)||((e=this.store.selectSnapshot(v.currentCompany.getCurrentCompany))==null?void 0:e.record_type_id)}isMixedRecordType(){return this.getRecordType()===0}isActivityRecordType(){return this.getRecordType()===2}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275prov\",Y({token:n,factory:n.\\u0275fac,providedIn:\"root\"}));let o=n;return o})();var me=class{constructor(n){t(this,\"changes\");this.changes=new ye(n)}get current(){return this.changes.getValue()}notify(n){n!==this.current&&this.changes.next(n)}listen(){return this.changes.asObservable()}};var ge=(()=>{let n=class n extends me{constructor(){super(0)}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275prov\",Y({token:n,factory:n.\\u0275fac}));let o=n;return o})();var X=(()=>{let n=class n extends me{constructor(){super(0)}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275prov\",Y({token:n,factory:n.\\u0275fac}));let o=n;return o})();var ni=[\"titleElementRef\"],oi=[\"headerSmall\"],ri=[[[\"\",\"panelContent\",\"\"]],[[\"\",\"topLeftContent\",\"\"]],[[\"\",\"topMiddleContent\",\"\"]],[[\"\",\"topRightContent\",\"\"]]],ai=[\"[panelContent]\",\"[topLeftContent]\",\"[topMiddleContent]\",\"[topRightContent]\"];function li(o,n){o&1&&ee(0)}function pi(o,n){if(o&1&&T(0,\"app-progressive-image\",12),o&2){let r=p();s(\"urls\",r.backgroundImage)(\"aspectRatio\",16/9)}}function si(o,n){if(o&1){let r=b();d(0,\"div\",13),f(\"click\",function(){h(r);let e=p();return u(e.logoClick.emit())}),m()}if(o&2){let r=p();w(\"background-image\",\"url(\"+r.logoImageUrl+\")\"),M(\"app-header-logo--no-border\",!r.backgroundImage),k(\"data-locator\",r.dataLocators.logo)}}function ci(o,n){if(o&1){let r=b();d(0,\"app-header-title\",14,1),f(\"titleClick\",function(){h(r);let e=p();return u(e.onTitleClick())}),m()}if(o&2){let r=p();s(\"isChevronArrow\",r.isTitleChevronArrow)(\"title\",r.title)(\"titleIcon\",\"common/arrow\")(\"rotateIcon\",!0)}}function di(o,n){if(o&1&&(d(0,\"div\",15),L(1),m()),o&2){let r=p();k(\"data-locator\",r.dataLocators.description),c(),z(r.description)}}function mi(o,n){if(o&1){let r=b();d(0,\"app-header-small\",17,2),S(2,\"async\"),S(3,\"async\"),S(4,\"async\"),f(\"logoClick\",function(){h(r);let e=p(2);return u(e.logoClick.emit())})(\"headerMiddleClick\",function(){h(r);let e=p(2);return u(e.smallHeaderMiddleClick.emit())})(\"backClick\",function(e){h(r);let i=p(2);return u(i.backClick.emit(e))})(\"closeClick\",function(e){h(r);let i=p(2);return u(i.closeClick.emit(e))})(\"profileClick\",function(e){h(r);let i=p(2);return u(i.profileClick.emit(e))})(\"titleClick\",function(e){h(r);let i=p(2);return u(i.titleClick.emit(e))}),B(5,18),P(6,1),E(),B(7,19),P(8,2),E(),B(9,20),P(10,3),E(),m()}if(o&2){let r=p(2);s(\"logoImage\",r.logoImageUrl)(\"title\",r.title)(\"description\",r.description)(\"isBackButton\",r.isBackButton)(\"isProfileButton\",r.isProfileButton)(\"isCloseButton\",r.isCloseButton)(\"isContentHidden\",!O(2,11,r.isScrollPhaseEnd$))(\"isBgTransparent\",!O(3,13,r.isScrollPhaseEnd$))(\"bgOpacity\",O(4,15,r.smallHeaderOpacity$))(\"isTitleChevronArrow\",r.isTitleChevronArrow)(\"useMiddleClick\",r.useMiddleClick)}}function gi(o,n){if(o&1&&C(0,mi,11,17,\"app-header-small\",16),o&2){let r=p();s(\"ngIf\",!r.isSmallHeaderHidden)}}var De=(()=>{let n=class n extends q{constructor(e,i,l,g){super();t(this,\"headerScrollChanges\");t(this,\"headerHeightChanges\");t(this,\"modalService\");t(this,\"elRef\");t(this,\"logoClick\",new H);t(this,\"smallHeaderMiddleClick\",new H);t(this,\"titleElementRef\");t(this,\"headerSmall\");t(this,\"initialHeight\",0);t(this,\"lastHeight\",0);t(this,\"scrollPhase$\");t(this,\"isScrollPhaseInitial$\");t(this,\"isScrollPhaseMiddle$\");t(this,\"isScrollPhaseEnd$\");t(this,\"smallHeaderOpacity$\");t(this,\"scrollTop\",0);t(this,\"dataLocators\",ce.bigHeader);this.headerScrollChanges=e,this.headerHeightChanges=i,this.modalService=l,this.elRef=g,this.scrollPhase$=ke([this.headerScrollChanges.listen().pipe(Ze(0)),this.modalService.onModalOpened().pipe()]).pipe(Pe(([,y])=>!y),I(([y])=>this.getScrollPhase(y)),we(),Me(1)),this.isScrollPhaseInitial$=this.scrollPhase$.pipe(I(y=>y===0)),this.isScrollPhaseMiddle$=this.scrollPhase$.pipe(I(y=>y===1)),this.isScrollPhaseEnd$=this.scrollPhase$.pipe(I(y=>y===2)),this.smallHeaderOpacity$=this.headerScrollChanges.listen().pipe(I(y=>this.getSmallHeaderOpacity(y)))}get height(){var y;if(!this.initialHeight)return\"auto\";if(this.scrollTop<=0)return this.lastHeight=this.initialHeight,\"\".concat(this.initialHeight,\"px\");let{height:e,bottom:i}=document.body.getBoundingClientRect();if(this.lastHeight&&e-this.scrollTop<=i)return\"\".concat(this.lastHeight,\"px\");let l=(y=this.headerSmall)==null?void 0:y.nativeElement.clientHeight,g=Math.max(this.initialHeight-this.scrollTop,l);return this.lastHeight=g,\"\".concat(g,\"px\")}ngAfterViewInit(){this.headerScrollChanges.listen().pipe($(this.destroy$)).subscribe(e=>{this.scrollTop=e}),this.initialHeight=this.elRef.nativeElement.clientHeight}getTitleTopPosition(e){var ie;let i=parseInt(getComputedStyle(document.documentElement).getPropertyValue(\"--safe-area-top\")),l=(ie=this.titleElementRef)==null?void 0:ie.nativeElement,g=l==null?void 0:l.getBoundingClientRect().top,y=l==null?void 0:l.offsetHeight;return g-Ot-i+y/2+e}getScrollPhase(e){let i=this.getTitleTopPosition(e),l=e<=0,g=e>0&&e<i,y=e>i;if(l)return 0;if(g)return 1;if(y)return 2}getSmallHeaderOpacity(e){let i=this.getTitleTopPosition(e),l=e<=0?0:e,g=l>i?i:l;return l&&Math.round(g/i*100)/100||0}};t(n,\"\\u0275fac\",function(i){return new(i||n)(_(X),_(ge),_(pe),_(A))}),t(n,\"\\u0275cmp\",x({type:n,selectors:[[\"app-header-big\"]],viewQuery:function(i,l){if(i&1&&(V(ni,5,A),V(oi,5,A)),i&2){let g;D(g=U())&&(l.titleElementRef=g.first),D(g=U())&&(l.headerSmall=g.first)}},hostVars:2,hostBindings:function(i,l){i&2&&w(\"height\",l.height)},outputs:{logoClick:\"logoClick\",smallHeaderMiddleClick:\"smallHeaderMiddleClick\"},features:[Ie([{provide:q,useExisting:n}]),ne],ngContentSelectors:ai,decls:15,vars:23,consts:[[\"subheader\",\"\"],[\"titleElementRef\",\"\"],[\"headerSmall\",\"\"],[1,\"app-header\"],[4,\"ngTemplateOutlet\"],[1,\"app-header-background\"],[3,\"urls\",\"aspectRatio\",4,\"ngIf\"],[1,\"app-header-panel\"],[\"class\",\"app-header-logo\",3,\"app-header-logo--no-border\",\"backgroundImage\",\"click\",4,\"ngIf\"],[1,\"app-header-logo-fix\"],[\"parentTemplateType\",\"big\",3,\"isChevronArrow\",\"title\",\"titleIcon\",\"rotateIcon\",\"titleClick\",4,\"ngIf\"],[\"class\",\"app-header-description\",4,\"ngIf\"],[3,\"urls\",\"aspectRatio\"],[1,\"app-header-logo\",3,\"click\"],[\"parentTemplateType\",\"big\",3,\"titleClick\",\"isChevronArrow\",\"title\",\"titleIcon\",\"rotateIcon\"],[1,\"app-header-description\"],[\"theme\",\"primary\",\"class\",\"app-header-small\",3,\"logoImage\",\"title\",\"description\",\"isBackButton\",\"isProfileButton\",\"isCloseButton\",\"isContentHidden\",\"isBgTransparent\",\"bgOpacity\",\"isTitleChevronArrow\",\"useMiddleClick\",\"logoClick\",\"headerMiddleClick\",\"backClick\",\"closeClick\",\"profileClick\",\"titleClick\",4,\"ngIf\"],[\"theme\",\"primary\",1,\"app-header-small\",3,\"logoClick\",\"headerMiddleClick\",\"backClick\",\"closeClick\",\"profileClick\",\"titleClick\",\"logoImage\",\"title\",\"description\",\"isBackButton\",\"isProfileButton\",\"isCloseButton\",\"isContentHidden\",\"isBgTransparent\",\"bgOpacity\",\"isTitleChevronArrow\",\"useMiddleClick\"],[\"leftContent\",\"\"],[\"middleContent\",\"\"],[\"rightContent\",\"\"]],template:function(i,l){if(i&1&&(K(ri),d(0,\"header\",3),S(1,\"async\"),S(2,\"async\"),S(3,\"async\"),C(4,li,1,0,\"ng-container\",4),d(5,\"div\",5),C(6,pi,1,2,\"app-progressive-image\",6),m(),d(7,\"div\",7),C(8,si,1,5,\"div\",8),T(9,\"div\",9),C(10,ci,2,4,\"app-header-title\",10)(11,di,2,2,\"div\",11),P(12),m()(),C(13,gi,1,1,\"ng-template\",null,0,te)),i&2){let g=ue(14);Te(l.themeCSSClass),M(\"app-header--short\",!l.backgroundImage&&l.logoImageUrl)(\"app-header--ultra-short\",!l.backgroundImage&&!l.logoImageUrl)(\"app-header--scroll-initial\",O(1,17,l.isScrollPhaseInitial$))(\"app-header--scroll-middle\",O(2,19,l.isScrollPhaseMiddle$))(\"app-header--scroll-end\",O(3,21,l.isScrollPhaseEnd$)),c(4),s(\"ngTemplateOutlet\",g),c(2),s(\"ngIf\",l.backgroundImage),c(2),s(\"ngIf\",l.logoImageUrl),c(2),s(\"ngIf\",l.title),c(),s(\"ngIf\",l.description)}},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;position:relative;top:0;left:0;z-index:1}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_bg);--widget-app-header-footer-bg-color: var(--widget-ui-kit-color-color_white);--widget-app-header-title-bg-color: var(--widget-ui-kit-color-color_white)}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-panel[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_white)}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{border-color:var(--widget-ui-kit-color-color_white)}[_nghost-%COMP%]   .app-header--primary.app-header--short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--widget-ui-kit-color-color_bg)}[_nghost-%COMP%]   .app-header--primary.app-header--ultra-short[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_white)}[_nghost-%COMP%]   .app-header--primary.app-header--ultra-short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--widget-ui-kit-color-color_white)}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_white);--widget-app-header-footer-bg-color: var(--widget-ui-kit-color-color_bg);--widget-app-header-title-bg-color: var(--widget-ui-kit-color-color_bg)}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-panel[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_bg)}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{border-color:var(--widget-ui-kit-color-color_bg)}[_nghost-%COMP%]   .app-header--secondary.app-header--short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--widget-ui-kit-color-color_white)}[_nghost-%COMP%]   .app-header--secondary.app-header--ultra-short[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_bg)}[_nghost-%COMP%]   .app-header--secondary.app-header--ultra-short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--widget-ui-kit-color-color_bg)}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:hidden;height:100%;justify-content:end}[_nghost-%COMP%]   .app-header--ultra-short[_ngcontent-%COMP%]   .app-header-background[_ngcontent-%COMP%]{min-height:64px;background-color:transparent}[_nghost-%COMP%]   .app-header--ultra-short[_ngcontent-%COMP%]   .app-header-panel[_ngcontent-%COMP%]{margin-top:0;padding-top:16px}[_nghost-%COMP%]   .app-header-background[_ngcontent-%COMP%]{min-height:140px;width:100%;background-size:cover;background-repeat:no-repeat;background-position:center center}[_nghost-%COMP%]   .app-header-background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:middle}[_nghost-%COMP%]   .app-header-panel[_ngcontent-%COMP%]{position:relative;padding:20px 16px 16px;border-radius:24px 24px 0 0;margin-top:-20px}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{position:absolute;top:-36px;width:80px;height:80px;border-radius:100%;background-size:cover;background-position:center center;border:4px solid transparent}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   .app-header-logo--no-border[_ngcontent-%COMP%]{border:none}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%] + .app-header-logo-fix[_ngcontent-%COMP%]{padding-top:32px}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]   app-header-title[_ngcontent-%COMP%] + .app-header-description[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .app-header-description[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:var(--widget-ui-kit-color-secondary-text);display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}'],changeDetection:0}));let o=n;return o})();var ui=[\"mainBackgroundRef\"],_i=[[[\"\",\"leftContent\",\"\"]],[[\"\",\"middleContent\",\"\"]],[[\"\",\"rightContent\",\"\"]]],Ci=[\"[leftContent]\",\"[middleContent]\",\"[rightContent]\"];function fi(o,n){if(o&1){let r=b();d(0,\"app-header-button\",13),f(\"click\",function(){h(r);let e=p();return u(e.backClick.emit())}),m()}if(o&2){let r=p();s(\"locator\",r.dataLocators.backButton)}}function yi(o,n){if(o&1){let r=b();d(0,\"app-header-button\",14),f(\"click\",function(){h(r);let e=p();return u(e.closeClick.emit())}),m()}if(o&2){let r=p();s(\"locator\",r.dataLocators.closeButton)}}function vi(o,n){if(o&1){let r=b();d(0,\"div\",15),f(\"click\",function(){h(r);let e=p();return u(e.logoClick.emit())}),m()}if(o&2){let r=p();w(\"background-image\",\"url(\"+r.logoImageUrl+\")\"),k(\"data-locator\",r.dataLocators.logo)}}function ki(o,n){if(o&1){let r=b();d(0,\"app-header-title\",16),f(\"titleClick\",function(){h(r);let e=p();return u(e.onTitleClick())}),m()}if(o&2){let r=p();s(\"isChevronArrow\",r.isTitleChevronArrow)(\"title\",r.title)}}function bi(o,n){if(o&1&&(d(0,\"div\",17),L(1),m()),o&2){let r=p();k(\"data-locator\",r.dataLocators.description),c(),z(r.description)}}function Pi(o,n){if(o&1){let r=b();d(0,\"app-header-button\",18),f(\"click\",function(){h(r);let e=p();return u(e.profileClick.emit())}),m()}if(o&2){let r=p();s(\"locator\",r.dataLocators.profileButton)}}var Ce=(()=>{let n=class n extends q{constructor(){super(...arguments);t(this,\"mainBackgroundRef\");t(this,\"dataLocators\",ce.smallHeader);t(this,\"isContentHidden\",!1);t(this,\"isBgTransparent\",!1);t(this,\"useMiddleClick\",!0);t(this,\"headerMiddleClick\",new H);t(this,\"logoClick\",new H);t(this,\"initialized\",!1);t(this,\"AppRoutes\",_e)}set bgOpacity(e){requestAnimationFrame(()=>{this.mainBackgroundRef.nativeElement.style.opacity=e})}onTitleClick(){this.isContentHidden||super.onTitleClick()}ngAfterViewInit(){this.initialized=!0}};t(n,\"\\u0275fac\",(()=>{let e;return function(l){return(e||(e=tt(n)))(l||n)}})()),t(n,\"\\u0275cmp\",x({type:n,selectors:[[\"app-header-small\"]],viewQuery:function(i,l){if(i&1&&V(ui,7,A),i&2){let g;D(g=U())&&(l.mainBackgroundRef=g.first)}},hostVars:2,hostBindings:function(i,l){i&2&&M(\"initialized\",l.initialized)},inputs:{isContentHidden:\"isContentHidden\",isBgTransparent:\"isBgTransparent\",bgOpacity:\"bgOpacity\",useMiddleClick:\"useMiddleClick\"},outputs:{headerMiddleClick:\"headerMiddleClick\",logoClick:\"logoClick\"},features:[Ie([{provide:q,useExisting:n}]),ne],ngContentSelectors:Ci,decls:17,vars:16,consts:[[\"mainBackgroundRef\",\"\"],[\"id\",\"page-header\",1,\"app-header\"],[1,\"app-header-main\"],[1,\"app-header-main-background\"],[1,\"app-header-button\"],[\"iconName\",\"common/arrow-big\",\"class\",\"back-button\",3,\"locator\",\"click\",4,\"ngIf\"],[\"iconName\",\"close\",3,\"locator\",\"click\",4,\"ngIf\"],[\"class\",\"app-header-logo\",3,\"backgroundImage\",\"click\",4,\"ngIf\"],[1,\"app-header-middle\",3,\"click\"],[\"parentTemplateType\",\"small\",3,\"isChevronArrow\",\"title\",\"titleClick\",4,\"ngIf\"],[\"class\",\"app-header-description\",4,\"ngIf\"],[3,\"routerLink\",\"skipNavigation\"],[\"iconName\",\"profile\",3,\"locator\",\"click\",4,\"ngIf\"],[\"iconName\",\"common/arrow-big\",1,\"back-button\",3,\"click\",\"locator\"],[\"iconName\",\"close\",3,\"click\",\"locator\"],[1,\"app-header-logo\",3,\"click\"],[\"parentTemplateType\",\"small\",3,\"titleClick\",\"isChevronArrow\",\"title\"],[1,\"app-header-description\"],[\"iconName\",\"profile\",3,\"click\",\"locator\"]],template:function(i,l){if(i&1){let g=b();K(_i),d(0,\"header\",1)(1,\"div\",2),T(2,\"div\",3,0),d(4,\"div\",4),C(5,fi,1,1,\"app-header-button\",5)(6,yi,1,1,\"app-header-button\",6),P(7),m(),C(8,vi,1,3,\"div\",7),d(9,\"div\",8),f(\"click\",function(){return h(g),u(l.useMiddleClick?l.headerMiddleClick.emit():void 0)}),C(10,ki,1,2,\"app-header-title\",9)(11,bi,2,2,\"div\",10),P(12,1),m(),d(13,\"div\",4)(14,\"div\",11),C(15,Pi,1,1,\"app-header-button\",12),m(),P(16,2),m()()()}i&2&&(Te(l.themeCSSClass),M(\"app-header--content-hidden\",l.isContentHidden)(\"app-header--bg-transparent\",l.isBgTransparent),c(5),s(\"ngIf\",l.isBackButton),c(),s(\"ngIf\",l.isCloseButton),c(2),s(\"ngIf\",l.logoImageUrl),c(),M(\"no-pointer-events\",!l.useMiddleClick),c(),s(\"ngIf\",l.title),c(),s(\"ngIf\",l.description),c(3),s(\"routerLink\",\"/\"+l.AppRoutes.profile)(\"skipNavigation\",!0),c(),s(\"ngIf\",l.isProfileButton))},styles:['@charset \"UTF-8\";app-header-big[_nghost-%COMP%], app-header-big   [_nghost-%COMP%]{position:absolute;z-index:2;top:0}[_nghost-%COMP%]{display:block;width:100%;max-width:600px}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_bg));--widget-app-header-footer-bg-color: var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_white));--widget-app-header-title-bg-color: var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_white))}[_nghost-%COMP%]   .app-header--primary.app-header--bg-transparent[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .app-header--primary.app-header--bg-transparent[_ngcontent-%COMP%]   .app-header-main[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-main[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_white))}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-main-background[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_white))}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-button[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_white));color:var(--widget-ui-kit-color-color_text_black)}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_white));--widget-app-header-footer-bg-color: var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_bg));--widget-app-header-title-bg-color: var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_bg))}[_nghost-%COMP%]   .app-header--secondary.app-header--bg-transparent[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .app-header--secondary.app-header--bg-transparent[_ngcontent-%COMP%]   .app-header-main[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-main[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_bg))}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-main-background[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_bg))}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-button[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--widget-ui-kit-color-color_bg));color:var(--widget-ui-kit-color-color_text_black)}.initialized-middle[_nghost-%COMP%], .initialized-logo[_nghost-%COMP%]{transition:opacity .25s}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:64px}[_nghost-%COMP%]   .app-header--content-hidden[_ngcontent-%COMP%]   .app-header-middle[_ngcontent-%COMP%]{opacity:0;pointer-events:none}[_nghost-%COMP%]   .app-header--content-hidden[_ngcontent-%COMP%]   .app-header-middle[_ngcontent-%COMP%]:hover{cursor:auto}[_nghost-%COMP%]   .app-header--content-hidden[_ngcontent-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{opacity:0;pointer-events:none}[_nghost-%COMP%]   .app-header-middle[_ngcontent-%COMP%], [_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   .app-header-main[_ngcontent-%COMP%]{margin-top:env(safe-area-inset-top);width:100%;max-width:600px;display:flex;justify-content:space-between;align-items:center;padding:8px;position:fixed;top:0}[_nghost-%COMP%]   .app-header-main-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;opacity:0}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{flex-shrink:0;margin-right:8px;width:48px;height:48px;border-radius:100%;background-size:cover;background-position:center center}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   .app-header-middle[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;overflow:hidden}[_nghost-%COMP%]   .app-header-middle[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   .app-header-button[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:100%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:24px}[_nghost-%COMP%]   .app-header-button[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_text_black)}[_nghost-%COMP%]   .app-header-button[_ngcontent-%COMP%]:empty{width:12px;visibility:hidden}[_nghost-%COMP%]   .app-header-description[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--widget-ui-kit-color-secondary-text);margin-top:2px}.date-time-page-context[_nghost-%COMP%]   .app-header-main[_ngcontent-%COMP%], .date-time-page-context   [_nghost-%COMP%]   .app-header-main[_ngcontent-%COMP%]{padding:8px 4px}.no-pointer-events[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0}));let o=n;return o})();var xi=[[[\"\",\"topLeftContent\",\"\"]],[[\"\",\"topMiddleContent\",\"\"]],[[\"\",\"topRightContent\",\"\"]],[[\"\",\"panelContent\",\"\"]],[[\"\",\"leftContent\",\"\"]],[[\"\",\"middleContent\",\"\"]],[[\"\",\"rightContent\",\"\"]]],Si=[\"[topLeftContent]\",\"[topMiddleContent]\",\"[topRightContent]\",\"[panelContent]\",\"[leftContent]\",\"[middleContent]\",\"[rightContent]\"];function Oi(o,n){if(o&1&&ee(0,4),o&2){p();let r=ue(4);s(\"ngTemplateOutlet\",r)}}function Ti(o,n){if(o&1&&ee(0,4),o&2){p();let r=ue(6);s(\"ngTemplateOutlet\",r)}}function Ii(o,n){if(o&1){let r=b();d(0,\"app-header-big\",5),S(1,\"async\"),f(\"backClick\",function(e){h(r);let i=p();return u(i.backClick.emit(e))})(\"closeClick\",function(e){h(r);let i=p();return u(i.closeClick.emit(e))})(\"profileClick\",function(){h(r);let e=p();return u(e.onProfileClick())})(\"titleClick\",function(){h(r);let e=p();return u(e.openCompanyModal())})(\"logoClick\",function(){h(r);let e=p();return u(e.openCompanyModal())})(\"smallHeaderMiddleClick\",function(){h(r);let e=p();return u(e.openCompanyModal())}),B(2,6),P(3),E(),B(4,7),P(5,1),E(),B(6,8),P(7,2),E(),B(8,9),P(9,3),E(),m()}if(o&2){let r=p();s(\"theme\",r.theme)(\"backgroundImage\",O(1,11,r.bookFormImage))(\"logoImage\",r.currentLogoImage)(\"title\",r.currentTitle)(\"description\",r.currentDescription)(\"isTitleChevronArrow\",r.currentIsTitleChevronArrow)(\"isBackButton\",r.isBackButton)(\"isProfileButton\",r.isProfileButton)(\"isCloseButton\",r.isCloseButton)(\"isSmallHeaderHidden\",r.isSmallHeaderHidden)(\"useMiddleClick\",r.useMiddleClick)}}function Hi(o,n){if(o&1){let r=b();d(0,\"app-header-small\",10),f(\"backClick\",function(e){h(r);let i=p();return u(i.backClick.emit(e))})(\"closeClick\",function(e){h(r);let i=p();return u(i.closeClick.emit(e))})(\"profileClick\",function(e){h(r);let i=p();return u(i.profileClick.emit(e))})(\"titleClick\",function(){h(r);let e=p();return u(e.openCompanyModal())})(\"headerMiddleClick\",function(){h(r);let e=p();return u(e.openCompanyModal())})(\"logoClick\",function(){h(r);let e=p();return u(e.openCompanyModal())}),B(1,11),P(2,4),E(),B(3,12),P(4,5),E(),B(5,13),P(6,6),E(),m()}if(o&2){let r=p();s(\"theme\",r.theme)(\"logoImage\",r.currentLogoImage)(\"title\",r.currentTitle)(\"description\",r.currentDescription)(\"isTitleChevronArrow\",r.currentIsTitleChevronArrow)(\"isBackButton\",r.isBackButton)(\"isProfileButton\",r.isProfileButton)(\"isCloseButton\",r.isCloseButton)(\"isContentHidden\",r.isContentHidden)(\"useMiddleClick\",r.useMiddleClick)(\"routerLink\",\"/company/-1/about\")(\"skipNavigation\",!0)}}var Ai=\"custom\",Ue=\"companyInfo\",ze=\"companyInfoExceptAddress\",Bi=\"titleInfo\",fe=\"small\",qe=\"big\",xo=(()=>{let n=class n extends q{constructor(e,i,l,g,y,ie,$t,zt,qt,Yt,Gt,Kt,Zt){super();t(this,\"route\");t(this,\"router\");t(this,\"navigationService\");t(this,\"activityNavigation\");t(this,\"recordType\");t(this,\"modalService\");t(this,\"headerHeightChanges\");t(this,\"headerScrollChanges\");t(this,\"changeDetectorRef\");t(this,\"altegiomePromoService\");t(this,\"location\");t(this,\"navigationStepUrlResolver\");t(this,\"trackingService\");t(this,\"store\",F(Q));t(this,\"currentHeaderTemplate\");t(this,\"isHeaderRemoved\",this.store.selectSnapshot(v.widgetSettings.getWidgetHideHeader));t(this,\"templateType\",fe);t(this,\"contentType\",Ai);t(this,\"isContentHidden\",!1);t(this,\"useMiddleClick\",!0);t(this,\"company\");t(this,\"bookFormImage\",this.store.select(v.bookform.getBookformHeaderImages).pipe(J(e=>!!e)));t(this,\"templateTypeSmall\",fe);t(this,\"templateTypeBig\",qe);t(this,\"companySource\");t(this,\"openCompanyModalSubject\",new Ge);t(this,\"AppRoutes\",_e);this.route=e,this.router=i,this.navigationService=l,this.activityNavigation=g,this.recordType=y,this.modalService=ie,this.headerHeightChanges=$t,this.headerScrollChanges=zt,this.changeDetectorRef=qt,this.altegiomePromoService=Yt,this.location=Gt,this.navigationStepUrlResolver=Kt,this.trackingService=Zt,this.isBackButton=this.isBackButtonVisibleByDefault,this.isProfileButton=this.isProfileButtonVisibleByDefault,this.templateType=this.isOnOrderFirstStep?qe:fe,this.contentType=Ue,this.openCompanyModalSubject.pipe(We(500)).subscribe(()=>this.handleOpenCompanyModal())}get hostZIndex(){return this.zIndex}get hostClassBig(){return this.templateType===qe}get hostClassSmall(){return this.templateType===fe}get currentTitle(){var e,i;return(i=this.title)!=null?i:(e=this.company)==null?void 0:e.title}get currentDescription(){var e,i;return(i=this.description)!=null?i:(e=this.company)==null?void 0:e.address}get currentLogoImage(){var e,i;return this.contentType!==Bi?(i=this.logoImageUrl)!=null?i:(e=this.company)==null?void 0:e.logo:null}get currentIsTitleChevronArrow(){var e;return(e=this.isTitleChevronArrow)!=null?e:[Ue,ze].includes(this.contentType)}get currentHeight(){var e;return(e=this.currentHeaderTemplate)==null?void 0:e.nativeElement.clientHeight}get isOnOrderFirstStep(){let{snapshot:e}=this.route;return[this.navigationService.isOnOrderFirstStep(e),this.activityNavigation.isOnOrderFirstStep(e)].includes(!0)}get isOnRecordTypeStep(){return this.navigationService.isOnRecordTypeStep(this.route.snapshot)}get isBackButtonVisibleByDefault(){return[!this.isOnOrderFirstStep,this.isOnOrderFirstStep&&this.recordType.isMixedRecordType()].includes(!0)}get isProfileButtonVisibleByDefault(){return this.isOnOrderFirstStep}get windowResizeObservable(){return be(window,\"resize\").pipe(I(()=>{}))}get documentScrollYObservable(){return Ke(be(window,\"scroll\"),be(document.body,\"scroll\")).pipe(I(()=>window.scrollY||document.body.scrollTop))}ngOnInit(){[Ue,ze].includes(this.contentType)&&this.initCompany(),this.store.select(v.companies.getCompanies).pipe(J(e=>!(e!=null&&e.length)),xe(()=>this.store.select(v.bookform.getGroupId).pipe(J(Boolean),Se(e=>this.store.dispatch(new Ee({groupId:e,bookformId:this.store.selectSnapshot(v.bookform.getBookformId)}))))),$(this.destroy$)).subscribe()}ngAfterViewInit(){this.notifyHeightChanges(),this.notifyHeightChangesOnResize(),this.notifyScrollChangesOnDocumentScroll()}ngAfterContentInit(){this.notifyHeightChanges()}onProfileClick(){return he(this,null,function*(){ft.start(\"booking_profile_page_open\"),this.profileClick.emit(),this.store.selectSnapshot(v.user.isLoggedIn)&&this.store.selectSnapshot(v.bookform.getIsAltegiomePromoFeatureEnabled)&&this.altegiomePromoService.openAuthPromo(),yield this.router.navigate([_e.profile],{queryParamsHandling:\"preserve\"})})}openCompanyModal(){this.openCompanyModalSubject.next()}handleOpenCompanyModal(){this.trackingService.track({type:le.Action.click,element_type:\"button\",element_name:\"about_company_header_button\",element_id:this.company.id});let e=!(this.isOnOrderFirstStep||this.isOnRecordTypeStep);if(this.store.selectSnapshot(v.companies.getCompanies).length!==0&&!e){this.modalService.openModal({component:Et,componentData:{company:this.companySource,allCompaniesBtnIsHidden:e},params:{modalType:ht.default,closeButtonDataLocator:\"pointer_back\"}});return}let l=this.router.createUrlTree([\"/company\",this.company.id,\"about\"],{queryParams:{[j]:this.navigationStepUrlResolver.removeQueryParamFromUrl(this.location.path(),j)},queryParamsHandling:\"merge\"});this.router.navigateByUrl(l)}initCompany(){this.store.select(v.currentCompany.getCurrentCompany).pipe($(this.destroy$)).subscribe(e=>this.setCompany(e))}setCompany(e){if(!e){this.defineCompany();return}let i=[];this.contentType===Ue?i=[\"title\",\"address\",\"logo\",\"id\"]:this.contentType===ze&&(i=[\"title\",\"logo\",\"id\"]),this.company=Object.keys(e).reduce((l,g)=>(i.includes(g)&&(l[g]=e[g]),l),{}),this.companySource=e,this.changeDetectorRef.detectChanges()}defineCompany(){let e=+this.route.snapshot.paramMap.get(yt);e&&this.store.dispatch(new dt(e))}checkHeightChanges(){let e=this.headerHeightChanges.current,i=this.currentHeight;return e!==i}notifyHeightChanges(){typeof this.currentHeight==\"number\"&&this.checkHeightChanges()&&this.headerHeightChanges.notify(this.currentHeight)}notifyHeightChangesOnResize(){if(this.templateType===fe)return;this.windowResizeObservable.pipe($(this.destroy$)).subscribe(()=>{this.notifyHeightChanges()})}notifyScrollChangesOnDocumentScroll(){this.headerScrollChanges.notify(0),this.documentScrollYObservable.pipe($(this.destroy$)).subscribe(e=>{this.headerScrollChanges.notify(e)})}};t(n,\"\\u0275fac\",function(i){return new(i||n)(_(lt),_(re),_(wt),_(Ut),_(Lt),_(pe),_(ge),_(X),_(He),_(St),_(oe),_(W),_(Be))}),t(n,\"\\u0275cmp\",x({type:n,selectors:[[\"app-header\"]],viewQuery:function(i,l){if(i&1&&V(q,5,A),i&2){let g;D(g=U())&&(l.currentHeaderTemplate=g.first)}},hostVars:8,hostBindings:function(i,l){i&2&&(w(\"z-index\",l.hostZIndex),M(\"big\",l.hostClassBig)(\"small\",l.hostClassSmall)(\"removed-header\",l.isHeaderRemoved))},inputs:{templateType:\"templateType\",contentType:\"contentType\",isContentHidden:\"isContentHidden\",useMiddleClick:\"useMiddleClick\"},features:[ne],ngContentSelectors:Si,decls:7,vars:3,consts:[[\"bigHeaderTemplate\",\"\"],[\"smallHeaderTemplate\",\"\"],[3,\"ngSwitch\"],[3,\"ngTemplateOutlet\",4,\"ngSwitchCase\"],[3,\"ngTemplateOutlet\"],[3,\"backClick\",\"closeClick\",\"profileClick\",\"titleClick\",\"logoClick\",\"smallHeaderMiddleClick\",\"theme\",\"backgroundImage\",\"logoImage\",\"title\",\"description\",\"isTitleChevronArrow\",\"isBackButton\",\"isProfileButton\",\"isCloseButton\",\"isSmallHeaderHidden\",\"useMiddleClick\"],[\"topLeftContent\",\"\"],[\"topMiddleContent\",\"\"],[\"topRightContent\",\"\"],[\"panelContent\",\"\"],[3,\"backClick\",\"closeClick\",\"profileClick\",\"titleClick\",\"headerMiddleClick\",\"logoClick\",\"theme\",\"logoImage\",\"title\",\"description\",\"isTitleChevronArrow\",\"isBackButton\",\"isProfileButton\",\"isCloseButton\",\"isContentHidden\",\"useMiddleClick\",\"routerLink\",\"skipNavigation\"],[\"leftContent\",\"\"],[\"middleContent\",\"\"],[\"rightContent\",\"\"]],template:function(i,l){i&1&&(K(xi),B(0,2),C(1,Oi,1,1,\"ng-container\",3)(2,Ti,1,1,\"ng-container\",3),E(),C(3,Ii,10,13,\"ng-template\",null,0,te)(5,Hi,7,12,\"ng-template\",null,1,te)),i&2&&(s(\"ngSwitch\",l.templateType),c(),s(\"ngSwitchCase\",l.templateTypeBig),c(),s(\"ngSwitchCase\",l.templateTypeSmall))},dependencies:[Ae,ot,rt,ae,se,Ve,De,Ce,Z],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;position:relative;width:100%;max-width:600px;-webkit-overflow-scrolling:touch}.removed-header[_nghost-%COMP%]{display:none!important}'],changeDetection:0}));let o=n;return o})();var Ft=(()=>{let n=class n{constructor(){t(this,\"iconName\");t(this,\"locator\")}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275cmp\",x({type:n,selectors:[[\"app-header-button\"]],inputs:{iconName:\"iconName\",locator:\"locator\"},decls:1,vars:2,consts:[[3,\"name\"]],template:function(e,i){e&1&&T(0,\"ui-kit-svg-icon\",0),e&2&&(s(\"name\",i.iconName),k(\"data-locator\",i.locator))},dependencies:[Re],styles:[\"[_nghost-%COMP%]{width:48px;height:48px;border-radius:100%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:24px;cursor:pointer;outline:none;border:none}\"],changeDetection:0}));let o=n;return o})();var Ri=[\"titleContent\"],Vi=[\"titleContentContainer\"];function Di(o,n){if(o&1&&(d(0,\"span\",10),T(1,\"ui-kit-svg-icon\",11),m()),o&2){let r=p(2);k(\"data-locator\",r.dataLocators.buttonCompanyInfo),c(),M(\"rotate\",r.rotateIcon),s(\"name\",r.titleIcon)}}function Ui(o,n){if(o&1){let r=b();d(0,\"span\",6),f(\"click\",function(){h(r);let e=p();return u(e.isChevronArrow&&e.titleClick.emit())}),d(1,\"span\",7),L(2),m(),d(3,\"span\",8)(4,\"span\"),L(5),m(),C(6,Di,2,4,\"span\",9),m()()}if(o&2){let r=n.titlePart1,a=n.titlePart2,e=p();k(\"data-locator\",e.dataLocators.clickableArea),c(2),z(r),c(3),z(a),c(),s(\"ngIf\",e.isChevronArrow)}}var Ye=(()=>{let n=class n{constructor(a,e){t(this,\"elementRef\");t(this,\"cdr\");t(this,\"titleIcon\",\"common/arrow-down\");t(this,\"rotateIcon\",!1);t(this,\"titleContentTemplate\");t(this,\"titleContentContainer\");t(this,\"dataLocators\",ce.titleBlock);t(this,\"parentTemplateType\");t(this,\"isChevronArrow\",!0);t(this,\"titleClick\",new H);t(this,\"hostLineHeight\",0);t(this,\"titleContentEmbeddedViewRef\");this.elementRef=a,this.cdr=e}get hostClassSmall(){return this.parentTemplateType===\"small\"}get hostClassBig(){return this.parentTemplateType===\"big\"}set title(a){this.renderTitleContent(a)}get maxLines(){return this.parentTemplateType===\"big\"?2:1}get maxHeight(){return this.hostLineHeight*this.maxLines}ngAfterViewInit(){let a=getComputedStyle(this.elementRef.nativeElement);this.hostLineHeight=parseInt(a.lineHeight),this.cdr.detectChanges()}ngOnDestroy(){var a;(a=this.titleContentEmbeddedViewRef)==null||a.destroy()}renderTitleContent(a){let e=this.getTitleContentContext(a);this.titleContentContainer.clear(),this.titleContentEmbeddedViewRef=this.titleContentContainer.createEmbeddedView(this.titleContentTemplate,e),this.cdr.detectChanges()}getTitleContentContext(a){let e=\" \",i=a.split(e),l=i.pop();return{titlePart1:i.length?[...i,e].join(e):\"\",titlePart2:l}}};t(n,\"\\u0275fac\",function(e){return new(e||n)(_(A),_(He))}),t(n,\"\\u0275cmp\",x({type:n,selectors:[[\"app-header-title\"]],viewQuery:function(e,i){if(e&1&&(V(Ri,7,it),V(Vi,7,nt)),e&2){let l;D(l=U())&&(i.titleContentTemplate=l.first),D(l=U())&&(i.titleContentContainer=l.first)}},hostVars:4,hostBindings:function(e,i){e&2&&M(\"small\",i.hostClassSmall)(\"big\",i.hostClassBig)},inputs:{titleIcon:\"titleIcon\",rotateIcon:\"rotateIcon\",parentTemplateType:\"parentTemplateType\",isChevronArrow:\"isChevronArrow\",title:\"title\"},outputs:{titleClick:\"titleClick\"},decls:8,vars:9,consts:[[\"titleContentContainer\",\"\"],[\"titleContent\",\"\"],[1,\"app-header-title\"],[1,\"app-header-title-lines-breaker\"],[1,\"app-header-title-content-wrapper\"],[1,\"app-header-title-blur\"],[1,\"app-header-title-content\",3,\"click\"],[1,\"app-header-title-content-part1\"],[1,\"app-header-title-content-part2\"],[\"class\",\"app-header-title-chevron-wrapper\",4,\"ngIf\"],[1,\"app-header-title-chevron-wrapper\"],[3,\"name\"]],template:function(e,i){e&1&&(d(0,\"div\",2),T(1,\"span\",3),d(2,\"span\",4),ee(3,null,0),m(),T(5,\"span\",5),m(),C(6,Ui,7,4,\"ng-template\",null,1,te)),e&2&&(w(\"max-height\",i.maxHeight,\"px\"),k(\"data-locator\",i.dataLocators.title+\"_\"+i.parentTemplateType),c(),w(\"height\",i.hostLineHeight*(i.maxLines-1),\"px\"),c(),M(\"app-header-title-content-wrapper--clickable\",i.isChevronArrow),c(3),w(\"height\",i.hostLineHeight,\"px\"))},dependencies:[N,Re],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;background-color:var(--widget-app-header-title-bg-color);color:var(--widget-ui-kit-color-color_text_black);overflow:hidden;position:relative;width:100%;-webkit-text-size-adjust:100%}.big[_nghost-%COMP%]{align-items:end;font-style:normal;font-weight:700;font-size:24px;line-height:28px}.big[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{padding-left:8px}.big[_nghost-%COMP%]   .app-header-title-blur[_ngcontent-%COMP%]{width:60px}.small[_nghost-%COMP%]{align-items:center;font-style:normal;font-weight:500;font-size:16px;line-height:24px}.small[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{padding-left:4px}.small[_nghost-%COMP%]   .app-header-title-blur[_ngcontent-%COMP%]{width:40px}[_nghost-%COMP%]   .app-header-title[_ngcontent-%COMP%]{width:calc(10000px + 100%);flex-shrink:0}[_nghost-%COMP%]   .app-header-title-blur[_ngcontent-%COMP%]{position:absolute;background:linear-gradient(270deg,var(--widget-app-header-title-bg-color) 50%,rgba(255,255,255,0) 100%);bottom:0;right:0}[_nghost-%COMP%]   .app-header-title-lines-breaker[_ngcontent-%COMP%]{display:inline-block;width:10000px;float:right}[_nghost-%COMP%]   .app-header-title-content-wrapper--clickable[_ngcontent-%COMP%]   .app-header-title-content[_ngcontent-%COMP%], [_nghost-%COMP%]   .app-header-title-content-wrapper--clickable[_ngcontent-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;display:inline-flex;bottom:0;right:0;z-index:1;color:var(--widget-ui-kit-color-color_text_black)}[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]   ui-kit-svg-icon[_ngcontent-%COMP%]{width:24px;height:24px;color:var(--widget-ui-kit-color-icons-grey)}[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]   ui-kit-svg-icon.rotate[_ngcontent-%COMP%]{transform:rotate(270deg)}[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{vertical-align:middle}[_nghost-%COMP%]   .app-header-title-content[_ngcontent-%COMP%]{word-break:break-word}[_nghost-%COMP%]   .app-header-title-content-part2[_ngcontent-%COMP%]{word-break:unset;white-space:nowrap}[_nghost-%COMP%]   .app-header-title-content-part1[_ngcontent-%COMP%]:empty ~ .app-header-title-content-part2[_ngcontent-%COMP%]{word-break:break-word;white-space:normal}'],changeDetection:0}));let o=n;return o})();var Li=[\"sectionEl\"],ji=[\"*\"];function Ni(o,n){if(o&1&&(d(0,\"div\",2),L(1),m()),o&2){let r=p();k(\"data-locator\",\"page_title\"),c(),z(r.title)}}var Jo=(()=>{let n=class n{constructor(){t(this,\"storeSnapshotService\",F(Q));t(this,\"headerScrollChanges\",F(X));t(this,\"isHeaderRemoved\",this.storeSnapshotService.selectSnapshot(v.widgetSettings.getWidgetHideHeader));t(this,\"shadowBottom\",!1);t(this,\"roundedBottom\",!1);t(this,\"theme\",Fe);t(this,\"title\",\"\");t(this,\"isSticky\",!1);t(this,\"isRounded\",!1);t(this,\"zIndex\",Qe);t(this,\"scrollContainer\");t(this,\"paddingY\",0);t(this,\"sectionEl\");t(this,\"originalHeight\",new ye(0));t(this,\"height$\");this.height$=ke([this.headerScrollChanges.listen(),this.originalHeight]).pipe(Pe(()=>!this.isSticky),I(([a,e])=>{if(!e)return\"100%\";if(a<=0)return\"\".concat(e,\"px\");let i=e-a;return i<0?\"0px\":\"\".concat(i,\"px\")}))}get hostClassSticky(){return this.isSticky}get hostClassRounded(){return this.isRounded}get hostClassPrimary(){return this.theme===Tt}get hostClassSecondary(){return this.theme===Ne}get hostZIndex(){return this.zIndex}onMousewheel(a){this.scrollContainer&&(this.scrollContainer.scrollTop=this.scrollContainer.scrollTop+a.deltaY)}ngAfterViewInit(){this.originalHeight.next(this.sectionEl.nativeElement.offsetHeight+2*this.paddingY)}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275cmp\",x({type:n,selectors:[[\"app-header-addition\"]],viewQuery:function(e,i){if(e&1&&V(Li,5,A),e&2){let l;D(l=U())&&(i.sectionEl=l.first)}},hostVars:16,hostBindings:function(e,i){e&1&&f(\"mousewheel\",function(g){return i.onMousewheel(g)}),e&2&&(w(\"z-index\",i.hostZIndex),M(\"sticky\",i.hostClassSticky)(\"rounded\",i.hostClassRounded)(\"primary\",i.hostClassPrimary)(\"secondary\",i.hostClassSecondary)(\"removed-header\",i.isHeaderRemoved)(\"shadow-bottom\",i.shadowBottom)(\"rounded-bottom\",i.roundedBottom))},inputs:{shadowBottom:\"shadowBottom\",roundedBottom:\"roundedBottom\",theme:\"theme\",title:\"title\",isSticky:\"isSticky\",isRounded:\"isRounded\",zIndex:\"zIndex\",scrollContainer:\"scrollContainer\",paddingY:\"paddingY\"},ngContentSelectors:ji,decls:5,vars:5,consts:[[\"sectionEl\",\"\"],[\"class\",\"title\",4,\"ngIf\"],[1,\"title\"]],template:function(e,i){e&1&&(K(),d(0,\"section\",null,0),S(2,\"async\"),C(3,Ni,2,2,\"div\",1),P(4),m()),e&2&&(w(\"height\",O(2,3,i.height$)),c(3),s(\"ngIf\",i.title))},dependencies:[N,Z],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%;max-width:600px;overflow:hidden;height:fit-content;-webkit-overflow-scrolling:touch}.removed-header[_nghost-%COMP%]{top:0!important}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_text_black);font-style:normal;font-weight:700;font-size:24px;line-height:28px;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;word-wrap:break-word}.primary[_nghost-%COMP%]{background-color:var(--widget-ui-kit-color-color_white)}.secondary[_nghost-%COMP%]{background-color:var(--widget-ui-kit-color-color_bg)}.sticky[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:64px}.rounded[_nghost-%COMP%]{border-bottom-right-radius:24px;border-bottom-left-radius:24px}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{display:flex;align-items:center}.shadow-bottom[_nghost-%COMP%]{box-shadow:0 8px 16px -8px #212f4133}.rounded-bottom[_nghost-%COMP%]{border-bottom-left-radius:24px;border-bottom-right-radius:24px}'],changeDetection:0}));let o=n;return o})();function Fi(o,n){if(o&1){let r=b();d(0,\"img\",3),f(\"load\",function(){h(r);let e=p();return u(e.changeQuality(1))}),m()}if(o&2){let r=p();w(\"aspect-ratio\",r.aspectRatio),s(\"src\",r.urls.low,Oe)}}function Qi(o,n){if(o&1){let r=b();d(0,\"img\",3),f(\"load\",function(){h(r);let e=p();return u(e.changeQuality(2))}),m()}if(o&2){let r=p();w(\"aspect-ratio\",r.aspectRatio),M(\"hide-before-loaded\",r.currentQuality!==2),s(\"src\",r.urls.medium,Oe),k(\"data-locator\",\"avatar\")}}function $i(o,n){if(o&1){let r=b();d(0,\"img\",3),f(\"load\",function(){h(r);let e=p();return u(e.changeQuality(3))}),m()}if(o&2){let r=p();w(\"aspect-ratio\",r.aspectRatio),M(\"hide-before-loaded\",r.currentQuality!==3),s(\"src\",r.urls.high,Oe),k(\"data-locator\",\"avatar\")}}var Qt=(()=>{let n=class n{constructor(){t(this,\"aspectRatio\",1);t(this,\"urls\");t(this,\"currentQuality\",0)}changeQuality(a){switch(a){case 1:this.currentQuality=1;break;case 2:this.currentQuality=2;break;case 3:this.currentQuality=3;break;default:throw new Error}}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275cmp\",x({type:n,selectors:[[\"app-progressive-image\"]],inputs:{aspectRatio:\"aspectRatio\",urls:\"urls\"},decls:4,vars:3,consts:[[1,\"progressive_image_wrapper\"],[\"class\",\"image\",\"loading\",\"lazy\",3,\"src\",\"aspect-ratio\",\"load\",4,\"ngIf\"],[\"class\",\"image\",\"loading\",\"lazy\",3,\"hide-before-loaded\",\"src\",\"aspect-ratio\",\"load\",4,\"ngIf\"],[\"loading\",\"lazy\",1,\"image\",3,\"load\",\"src\"]],template:function(e,i){e&1&&(d(0,\"div\",0),C(1,Fi,1,3,\"img\",1)(2,Qi,1,6,\"img\",2)(3,$i,1,6,\"img\",2),m()),e&2&&(c(),s(\"ngIf\",i.urls.low&&i.currentQuality>=0&&i.currentQuality<2),c(),s(\"ngIf\",i.urls.medium&&i.currentQuality>=1&&i.currentQuality<3),c(),s(\"ngIf\",i.urls.high&&i.currentQuality>=2))},dependencies:[N],styles:['@charset \"UTF-8\";.progressive_image_wrapper[_ngcontent-%COMP%]{pointer-events:none;position:relative;max-height:337px}.hide-before-loaded[_ngcontent-%COMP%]{position:absolute;left:0;top:0;right:0;bottom:0}.image[_ngcontent-%COMP%]{width:100%;height:100%;-webkit-user-select:none;user-select:none}'],changeDetection:0}));let o=n;return o})();var Sr=(()=>{let n=class n{};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275mod\",Je({type:n})),t(n,\"\\u0275inj\",Xe({providers:[ge,X],imports:[at,st,Ct,gt,kt]}));let o=n;return o})();je(De,[N,Ae,Ce,Ye,Qt],[Z]);je(Ce,[N,ae,se,Ve,Ft,Ye],[]);export{Rt as a,Ut as b,Lt as c,xo as d,Jo as e,Sr as f};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 14535,
          "_transferSize": 15195,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.879Z",
        "time": 121.37099995743483,
        "timings": {
          "blocked": 94.68299993886798,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.7730000000000103,
          "wait": 18.464999984852966,
          "receive": 7.450000033713877,
          "_blocked_queueing": 19.484999938867986,
          "_blocked_proxy": 37.918,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "357740",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-K35VHT3J.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3389"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf25f9d5bca3-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:24 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-1484\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "3db33e2eec8a74c6b13de5d92de9b956"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5252,
            "mimeType": "application/javascript",
            "compression": 3180,
            "text": "import{I as m,P as b,Q as k,R as I}from\"./chunk-FAHXWQCK.js\";import{$a as O,Ba as l,Bb as d,Gb as C,Ia as L,Ja as p,Qa as T,cb as v,m as h,wa as f,xa as M,za as R}from\"./chunk-CJMBEYVW.js\";import{g as a}from\"./chunk-JV5WWF5Q.js\";var W=(()=>{let e=class e{constructor(r,i){a(this,\"ref\");a(this,\"renderer\");a(this,\"skipNavigation\",!0);a(this,\"unsubscribe\");this.ref=r,this.renderer=i,this.unsubscribe=i.listen(r.nativeElement,\"click\",n=>{this.skipNavigation&&n.stopImmediatePropagation()})}ngOnDestroy(){this.unsubscribe()}};a(e,\"\\u0275fac\",function(i){return new(i||e)(d(v),d(C))}),a(e,\"\\u0275dir\",p({type:e,selectors:[[\"\",\"skipNavigation\",\"\",\"routerLink\",\"\"]],inputs:{skipNavigation:\"skipNavigation\"},standalone:!0}));let t=e;return t})();var N=[],y=(()=>{let e=class e{constructor(r){this.router=r,this.trees=N}add(r){this.trees.push(r)}shouldPrefetch(r){let i=this.router.parseUrl(r);return this.trees.some(P.bind(null,i))}};e.\\u0275fac=function(i){return new(i||e)(l(b))},e.\\u0275prov=f({token:e,factory:e.\\u0275fac,providedIn:\"root\"});let t=e;return t})();function q(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(s=>e[s]===t[s])}function P(t,e){return q(e.queryParams,t.queryParams)&&w(e.root,t.root,t.root.segments)}function w(t,e,s){if(t.segments.length>s.length){let r=t.segments.slice(0,s.length);return!(!j(r,s)||e.hasChildren())}else if(t.segments.length===s.length){if(!j(t.segments,s))return!1;if(!e.hasChildren())return!0;for(let r in e.children){if(!t.children[r])break;if(w(t.children[r],e.children[r],e.children[r].segments))return!0}return!1}else{let r=s.slice(0,t.segments.length),i=s.slice(t.segments.length);return!j(t.segments,r)||!t.children[m]?!1:w(t.children[m],e,i)}}function j(t,e){return t.length!==e.length?!1:t.every((s,r)=>s.path===e[r].path||s.path.startsWith(\":\")||e[r].path.startsWith(\":\"))}var F=typeof window<\"u\"?window.requestIdleCallback||function(t){let e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)}:()=>{},E=()=>typeof window<\"u\"?!!window.IntersectionObserver:!1,D=new R(\"LinkHandler\"),x=(()=>{let e=class e{constructor(r,i,n){this.loader=r,this.registry=i,this.ngZone=n,this.elementLink=new Map,this.observer=E()?new IntersectionObserver(o=>{o.forEach(c=>{if(this.observer&&c.isIntersecting){let g=c.target,u=this.elementLink.get(g);if(!u||!u.urlTree)return;this.registry.add(u.urlTree),this.observer.unobserve(g),F(()=>{this.loader.preload().subscribe(()=>{})})}})}):null}register(r){this.elementLink.set(r.element,r),this.ngZone.runOutsideAngular(()=>{this.observer&&this.observer.observe(r.element)})}unregister(r){this.observer&&this.elementLink.has(r.element)&&(this.observer.unobserve(r.element),this.elementLink.delete(r.element))}supported(){return E()}};e.\\u0275fac=function(i){return new(i||e)(l(I),l(y),l(O))},e.\\u0275prov=f({token:e,factory:e.\\u0275fac,providedIn:\"root\"});let t=e;return t})(),$=(()=>{let e=class e{constructor(r,i){this.loader=r,this.registry=i}register(r){this.registry.add(r.urlTree),F(()=>this.loader.preload().subscribe(()=>{}))}unregister(r){}supported(){return!0}};e.\\u0275fac=function(i){return new(i||e)(l(I),l(y))},e.\\u0275prov=f({token:e,factory:e.\\u0275fac,providedIn:\"root\"});let t=e;return t})(),re=(()=>{let e=class e{constructor(r,i,n,o){this.linkHandlers=r,this.el=i,this.linkHandler=this.linkHandlers.filter(c=>c.supported()).shift(),this.rl=n||o,this.element&&this.element.setAttribute&&this.element.setAttribute(\"ngx-ql\",\"\")}ngOnChanges(r){r.routerLink&&this.linkHandler&&(this.linkHandler.unregister(this),this.linkHandler.register(this))}ngOnDestroy(){this.linkHandler&&this.linkHandler.unregister(this)}get element(){return this.el.nativeElement}get urlTree(){return this.rl.urlTree}};e.\\u0275fac=function(i){return new(i||e)(d(D),d(v),d(k,8),d(k,8))},e.\\u0275dir=p({type:e,selectors:[[\"\",\"routerLink\",\"\"]],inputs:{routerLink:\"routerLink\"},standalone:!0,features:[T]});let t=e;return t})(),A=(t,e)=>{t=t.slice();let s=new Map,r=new Set;for(;t.length;){let o=t.shift();if(!o)continue;if(r.add(o),o===e)break;let c=o.children||[],g=o._loadedRoutes||[];for(let u of g)u&&u.children&&(c=c.concat(u.children));c.forEach(u=>{r.has(u)||(s.set(u,o),t.push(u))})}let i=\"\",n=e;for(;n;)Z(n)?i=\"/\".concat(n.path).concat(i):i=\"/(\".concat(n.outlet,\":\").concat(n.path).concat(i,\")\"),n=s.get(n);return i.replace(/[\\/]+/,\"/\")};function Z(t){return t.outlet===m||!t.outlet}var S=(()=>{let e=class e{constructor(r,i){this.registry=r,this.router=i,this.loading=new Set}preload(r,i){if(this.loading.has(r))return h;let n=typeof navigator<\"u\"?navigator.connection:void 0;if(n&&((n.effectiveType||\"\").includes(\"2g\")||n.saveData))return h;if(r.data&&r.data.preload===!1)return h;let o=A(this.router.config,r);return this.registry.shouldPrefetch(o)?(this.loading.add(r),i()):h}};e.\\u0275fac=function(i){return new(i||e)(l(y),l(b))},e.\\u0275prov=f({token:e,factory:e.\\u0275fac,providedIn:\"root\"});let t=e;return t})(),U=[{provide:D,useClass:x,multi:!0},{provide:D,useClass:$,multi:!0},y,S],ie=(()=>{let e=class e{};e.\\u0275fac=function(i){return new(i||e)},e.\\u0275mod=L({type:e}),e.\\u0275inj=M({providers:U});let t=e;return t})();export{W as a,re as b,S as c,ie as d};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2072,
          "_transferSize": 2732,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.880Z",
        "time": 136.72499998938292,
        "timings": {
          "blocked": 113.02599990440905,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.42900000000000205,
          "wait": 22.430999982841314,
          "receive": 0.8390001021325588,
          "_blocked_queueing": 19.98499990440905,
          "_blocked_proxy": 37.979,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "359531",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-5UJK3EW7.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3389"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf260e27bcaf-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:24 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-458d\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "37ffca73d5a603f7fd83d82ad0dfd06a"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 17805,
            "mimeType": "application/javascript",
            "compression": 11900,
            "text": "import{b as te,c as oe,d as ne,e as ie,f as k}from\"./chunk-HN5Z5GAF.js\";import{a as A,b as xe}from\"./chunk-HYJO63QR.js\";import{a as ye}from\"./chunk-ODPFCO44.js\";import{F as me,G as ue,H as pe,I as fe,K as he,Q as _e,R as be,S as N,T as Fe,U as ke,Y as T,fa as Ce,ga as ve,na as Se,sa as I,t as se,x as de,y as C,z as ge}from\"./chunk-W3M7SAIY.js\";import{Gh as ce,Nc as le,P as re,b as X,c as O,f as Q,g as Z,l as ee,r as P,ua as ae}from\"./chunk-FAHXWQCK.js\";import{$b as c,$c as Y,Ab as m,Ba as U,Bb as h,Ca as R,Da as z,Gc as q,Ha as b,Hc as W,Ia as E,Ob as j,Qb as B,Ra as w,Rb as _,Sa as M,Tb as S,_b as l,ac as f,ec as H,ic as u,jc as V,sc as s,uc as F,wa as x,xa as y,xc as J,yc as K,zc as $}from\"./chunk-CJMBEYVW.js\";import{g as i}from\"./chunk-JV5WWF5Q.js\";var we=(()=>{let e=class e{constructor(o,n,r,p){i(this,\"location\");i(this,\"formBuilder\");i(this,\"config\");i(this,\"document\");i(this,\"store\",R(ae));i(this,\"form\");i(this,\"isTestFeatureEnabled$\",this.store.select(ce.bookform.getIsTestFeatureEnabled));this.location=o,this.formBuilder=n,this.config=r,this.document=p}ngOnInit(){this.buildForm()}close(){this.location.back()}trackingEnabledChange(o){this.form.controls.analyticsEnabled.setValue(o)}save(){for(let o in this.form.value){let n=this.form.value[o];localStorage.setItem(te+o,n)}this.document.location.reload()}buildForm(){let o={apiUrl:this.config.apiUrl,apiToken:this.config.apiToken,analyticsEnabled:this.config.tracking.enabled,analyticsTrackerHttpUrl:this.config.tracking.httpUrl};this.form=this.formBuilder.group(o)}isFeatureFlagsEnabled(){return g.isFeatureFlagsEnabled()}toggleFeatureFlagsMode(o){g.toggleFeatureFlagsMode(o)}};i(e,\"\\u0275fac\",function(n){return new(n||e)(h(O),h(_e),h(k),h(X))}),i(e,\"\\u0275cmp\",b({type:e,selectors:[[\"app-environment-settings\"]],decls:15,vars:10,consts:[[3,\"leadingClick\",\"title\"],[1,\"container\"],[1,\"ff\"],[1,\"ff__switcher\",3,\"click\"],[1,\"form\",3,\"formGroup\"],[\"formControlName\",\"apiUrl\",\"title\",\"apiUrl\",\"data-locator\",\"client-booking-api-url\",1,\"form-input\"],[\"formControlName\",\"apiToken\",\"title\",\"apiToken\",\"data-locator\",\"client-booking-api-token\",1,\"form-input\"],[\"title\",\"analyticsEnabled\",\"data-locator\",\"client-booking-analytics-enabled\",3,\"checkedChange\",\"checked\"],[\"formControlName\",\"analyticsTrackerHttpUrl\",\"title\",\"analyticsTrackerHttpUrl\",\"data-locator\",\"client-booking-analytics-tracker-http-url\",1,\"form-input\"],[\"title\",\"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\",\"data-locator\",\"client-booking-settings-save-button\",1,\"fixed-button\",3,\"click\"]],template:function(n,r){n&1&&(l(0,\"ui-kit-header\",0),u(\"leadingClick\",function(){return r.close()}),c(),l(1,\"div\",1)(2,\"div\",2)(3,\"div\"),s(4,\"Feature flags\"),c(),l(5,\"div\",3),u(\"click\",function(){return r.toggleFeatureFlagsMode(!r.isFeatureFlagsEnabled())}),c()(),l(6,\"form\",4),f(7,\"ui-kit-form-input\",5)(8,\"ui-kit-form-input\",6),l(9,\"ui-kit-switch\",7),u(\"checkedChange\",function(Te){return r.trackingEnabledChange(Te)}),c(),f(10,\"ui-kit-form-input\",8),l(11,\"div\"),s(12),q(13,\"async\"),c(),l(14,\"ui-kit-button\",9),u(\"click\",function(){return r.save()}),c()()()),n&2&&(_(\"title\",\"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438 \\u043E\\u043A\\u0440\\u0443\\u0436\\u0435\\u043D\\u0438\\u044F\"),m(5),S(\"ff__switcher_on\",r.isFeatureFlagsEnabled())(\"ff__switcher_off\",!r.isFeatureFlagsEnabled()),m(),_(\"formGroup\",r.form),m(3),_(\"checked\",r.form.value.analyticsEnabled),m(3),F(\" booking_ab_test_example \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0435\\u0442: \",W(13,8,r.isTestFeatureEnabled$),\" \"))},dependencies:[ue,C,ge,fe,he,Ce,A,I,T,ee],styles:['@charset \"UTF-8\";.form[_ngcontent-%COMP%]{margin-top:16px}.ff[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:24px 0 20px}.ff__switcher[_ngcontent-%COMP%]{height:28px;width:48px;border-radius:18px;position:relative}.ff__switcher_off[_ngcontent-%COMP%]{background-color:#d0d0d0}.ff__switcher_off[_ngcontent-%COMP%]:before{content:\"\";position:absolute;height:24px;width:24px;border-radius:50%;left:2px;top:2px;background-color:#fff}.ff__switcher_on[_ngcontent-%COMP%]{background-color:#69ce14}.ff__switcher_on[_ngcontent-%COMP%]:before{content:\"\";position:absolute;height:24px;width:24px;border-radius:50%;right:2px;top:2px;background-color:#fff}'],changeDetection:0}));let a=e;return a})();var Me=(()=>{let e=class e{constructor(o){i(this,\"ngControl\");i(this,\"id\");i(this,\"customFormControlHelper\");this.ngControl=o,this.customFormControlHelper=new Fe(!1,this.ngControl)}get disabled(){return this.formControl.disabled}get formControl(){return this.customFormControlHelper.formControl}ngOnInit(){this.customFormControlHelper.resolveFormControl(\"<ui-kit-checkbox>\")}};i(e,\"\\u0275fac\",function(n){return new(n||e)(h(de,10))}),i(e,\"\\u0275cmp\",b({type:e,selectors:[[\"ui-kit-checkbox\"]],inputs:{id:\"id\"},decls:4,vars:9,consts:[[1,\"checkbox__label\"],[\"type\",\"checkbox\",1,\"checkbox__input\",3,\"id\",\"formControl\"],[1,\"checkbox__mark\"],[\"name\",\"checkbox-checkmark\",1,\"checkbox-checkmark\"]],template:function(n,r){n&1&&(l(0,\"label\",0),f(1,\"input\",1)(2,\"span\",2)(3,\"ui-kit-svg-icon\",3),c()),n&2&&(S(\"checkbox__label--disabled\",r.disabled)(\"checked\",!!r.formControl.value),m(),S(\"checkbox__input--disabled\",r.disabled),_(\"id\",r.id)(\"formControl\",r.formControl),B(\"data-locator\",\"checkbox-input\"))},dependencies:[se,C,pe,ke],styles:['@charset \"UTF-8\";[_nghost-%COMP%]   .checkbox__label[_ngcontent-%COMP%]{-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;-webkit-user-select:none;user-select:none;border-radius:6px;cursor:pointer;overflow:hidden;width:24px;height:24px;display:flex;background-color:var(--widget-ui-kit-color-color_white);border:1px solid var(--widget-ui-kit-color-color_grey_light)}[_nghost-%COMP%]   .checkbox__label--disabled[_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .checkbox__label--disabled[_ngcontent-%COMP%]   .checkbox__mark[_ngcontent-%COMP%]{opacity:.5}@media (hover: hover){[_nghost-%COMP%]   .checkbox__label[_ngcontent-%COMP%]:hover:not(   .checkbox__label--disabled)[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_grey);border:1px solid var(--widget-ui-kit-color-color_grey_light)}}[_nghost-%COMP%]   .checkbox__label.checked[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_primary);border:1px solid var(--widget-ui-kit-color-color_stroke_primary)}[_nghost-%COMP%]   .checkbox__label.checked[_ngcontent-%COMP%]   .checkbox-checkmark[_ngcontent-%COMP%]{display:flex}@media (hover: hover){[_nghost-%COMP%]   .checkbox__label.checked[_ngcontent-%COMP%]:hover:not(   .checkbox__label--disabled)[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_checkbox_hover_primary);border-color:var(--widget-ui-kit-color-color_checkbox_hover_primary)}}[_nghost-%COMP%]   .checkbox__input[_ngcontent-%COMP%]{width:20px;background:none;cursor:pointer}[_nghost-%COMP%]   .checkbox__input--disabled[_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .checkbox__input[_ngcontent-%COMP%]:checked + -shadowcsshost   .checkbox__mark[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;border-radius:6px}[_nghost-%COMP%]   .checkbox-checkmark[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;color:var(--widget-ui-kit-color-color_icon_primary);display:none;margin:auto;width:100%;height:100%}.error[_nghost-%COMP%]   .checkbox__label[_ngcontent-%COMP%]{border-color:var(--widget-ui-kit-color-color_red_accent)!important}.error[_nghost-%COMP%]   .checkbox__label.checked[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_red_accent)}']}));let a=e;return a})();var Oe=(()=>{let e=class e{};i(e,\"\\u0275fac\",function(n){return new(n||e)}),i(e,\"\\u0275mod\",E({type:e})),i(e,\"\\u0275inj\",y({imports:[P,N,ve]}));let a=e;return a})();var vt=(()=>{let e=class e{static forRoot(o){return{ngModule:e,providers:[g,{provide:k,useFactory:o}]}}};i(e,\"\\u0275fac\",function(n){return new(n||e)}),i(e,\"\\u0275mod\",E({type:e})),i(e,\"\\u0275inj\",y({imports:[P,N,be,Se,Oe,A,xe,ye]}));let a=e;return a})();var D=(()=>{let e=class e{constructor(o,n){i(this,\"config\");i(this,\"router\");this.config=o,this.router=n}canActivate(o){let n=this.config.debug;return n||this.router.createUrlTree([\"/\"],{queryParamsHandling:\"preserve\",queryParams:o.queryParams})}};i(e,\"\\u0275fac\",function(n){return new(n||e)(U(k),U(re))}),i(e,\"\\u0275prov\",x({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let a=e;return a})();var Pe=\"settings\",L=\"feature_flags\",je={path:Pe,canActivate:[D],component:we,data:{routeName:\"company.\".concat(Pe),ignoreHistory:!0}},Tt=[je,{path:L,canActivate:[D],component:Ne}];var t=class t{static init(e,d){var o;if(t.renderer=e.createRenderer(null,null),t.router=d,t.addGlobalControl(),t.toggleMarker(),(o=this.config.clientFeatureFlags)!=null&&o.length&&!this.isFeatureFlagsIgnoreEnv()){t.toggleFeatureFlagsMode(!0);for(let n of this.config.clientFeatureFlags)n in G&&!t.isFeatureEnabled(n)&&t.addFlag(n)}}static addGlobalControl(){window.ff={add:e=>(t.addFlag(e),\"added\"),remove:e=>(t.removeFlag(e),\"removed, please reload component\"),on:()=>(t.toggleFeatureFlagsMode(!0),\"featureflags mode on\"),off:()=>(t.toggleFeatureFlagsMode(!1),\"featureflags mode off\"),opacity:e=>{t.renderer.setStyle(t.markerElement,\"opacity\",\"\".concat(e))},hide:()=>{t.renderer.setStyle(t.markerElement,\"display\",\"none\")},show:()=>{t.renderer.setStyle(t.markerElement,\"display\",\"flex\")}}}static toggleMarker(){t.isFeatureFlagsEnabled()?t.initFeatureFlagEntrypoint():t.markerElement&&t.renderer.removeChild(document.body,this.markerElement)}static toggleFeatureFlagsMode(e){localStorage.setItem(t.storeStatus,JSON.stringify(e)),t.toggleMarker()}static toggleFeatureFlagsIgnoreEnv(e){localStorage.setItem(t.ignoreEnv,JSON.stringify(e))}static isFeatureFlagsEnabled(){return JSON.parse(localStorage.getItem(t.storeStatus))}static isFeatureFlagsIgnoreEnv(){return JSON.parse(localStorage.getItem(t.ignoreEnv))}static initFeatureFlagEntrypoint(){let e=t.renderer.createElement(\"div\");t.renderer.setStyle(e,\"width\",\"50px\"),t.renderer.setStyle(e,\"height\",\"50px\"),t.renderer.setStyle(e,\"position\",\"fixed\"),t.renderer.setStyle(e,\"bottom\",\"-15px\"),t.renderer.setStyle(e,\"right\",\"-15px\"),t.renderer.setStyle(e,\"background-color\",\"rgba(0, 255, 0)\"),t.renderer.setStyle(e,\"opacity\",\"0.2\"),t.renderer.setStyle(e,\"z-index\",\"100\"),t.renderer.setStyle(e,\"border-radius\",\"50% 50% 0 50%\"),t.renderer.setStyle(e,\"display\",\"flex\"),t.renderer.setStyle(e,\"justify-content\",\"center\"),t.renderer.setStyle(e,\"align-items\",\"center\"),t.renderer.setStyle(e,\"font-size\",\"24px\"),t.renderer.setStyle(e,\"cursor\",\"help\"),e.textContent=\"\\u{1F506}\",t.renderer.appendChild(document.body,e),t.markerElement=e,e.onmouseenter=()=>{this.renderer.setStyle(e,\"bottom\",\"0\"),this.renderer.setStyle(e,\"right\",\"0\")},e.onmouseleave=()=>{this.renderer.setStyle(e,\"bottom\",\"-15px\"),this.renderer.setStyle(e,\"right\",\"-15px\")},e.onclick=()=>{this.router.navigate([L],{queryParamsHandling:\"preserve\"})}}static getStoredFlags(){return JSON.parse(localStorage.getItem(t.storeName))}static addFlag(e){var r;let d=e.trim().toLocaleLowerCase(),o=(r=t.getStoredFlags())!=null?r:[];if(o.indexOf(d)!==-1)throw new Error(\"Featureflag already exist\");let n=[...o,d];return localStorage.setItem(t.storeName,JSON.stringify(n)),t.getStoredFlags()}static removeFlag(e){let d=e.trim().toLocaleLowerCase(),o=t.getStoredFlags();if(!o)return;let n=o.filter(r=>r!==d);return localStorage.setItem(t.storeName,JSON.stringify(n)),t.getStoredFlags()}static isFeatureEnabled(e){if(!t.isFeatureFlagsEnabled()||!t.getStoredFlags())return!1;let d=e.trim().toLocaleLowerCase();return t.getStoredFlags().indexOf(d)!==-1}};i(t,\"ignoreEnv\",oe),i(t,\"storeStatus\",ne),i(t,\"storeName\",ie),i(t,\"markerElement\"),i(t,\"renderer\"),i(t,\"router\"),i(t,\"config\",z(le)),i(t,\"\\u0275fac\",function(d){return new(d||t)}),i(t,\"\\u0275prov\",x({token:t,factory:t.\\u0275fac}));var g=t;function He(a,e){if(a&1){let d=H();l(0,\"div\",8)(1,\"ui-kit-checkbox\",9),$(\"ngModelChange\",function(n){let r=w(d).$implicit;return K(r.active,n)||(r.active=n),M(n)}),u(\"click\",function(n){let r=w(d).$implicit,p=V();return M(p.toggleFlag(n,r))}),c(),s(2),c()}if(a&2){let d=e.$implicit;m(),J(\"ngModel\",d.active),m(),F(\" \",d==null?null:d.name,\" \")}}function Ve(a,e){if(a&1){let d=H();l(0,\"div\",10),u(\"click\",function(){w(d);let n=V();return M(n.toggleHelp())}),l(1,\"div\",11),s(2,\" You can manage the service from the console. Open dev tools => console and enter available commands: \"),f(3,\"br\"),l(4,\"ul\")(5,\"li\"),s(6,\"window.ff.add(name) - add new flag\"),c(),l(7,\"li\"),s(8,\"window.ff.remove(name) - remove flag\"),c(),l(9,\"li\"),s(10,\"window.ff.on() - enable featureflag mode\"),c(),l(11,\"li\"),s(12,\"window.ff.off() - disable featureflag mode\"),c(),l(13,\"li\"),s(14,\"window.ff.opacity() - set opacity ff element (0 - 1)\"),c(),l(15,\"li\"),s(16,\"window.ff.hide() - hide ff element (ff mode enabled)\"),c(),l(17,\"li\"),s(18,\"window.ff.show() - show ff element (ff mode enabled)\"),c()(),s(19,\" After adding or removing the flag, you need to reload the page. \"),f(20,\"div\",12),s(21,\" For developers.\"),f(22,\"br\"),s(23,\" Using in component: just use FeatureFlagsService.isFeatureEnabled(flagName) \"),f(24,\"br\"),s(25,\" Using in template: \"),l(26,\"ol\")(27,\"li\"),s(28,\"add to component new prop: public readonly FFService = FeatureFlagsService\"),c(),l(29,\"li\"),s(30,\"use in template as FFService.isFeatureEnabled(flagName)\"),c()()()()}}var G=function(a){return a.native=\"native\",a.s3=\"s3\",a.test_route=\"test_route\",a.overload_page=\"overload_page\",a.composite_services_dice=\"composite_services_dice\",a}(G||{}),Ne=(()=>{let e=class e{constructor(o,n){i(this,\"location\");i(this,\"cdr\");i(this,\"featureFlags\");i(this,\"newFlagName\",\"\");i(this,\"isDuplicatedFF\",!1);i(this,\"isHelpShowed\",!1);i(this,\"FeatureFlagsService\",g);i(this,\"availableFlags\");this.location=o,this.cdr=n}ngOnInit(){this.updateFlags()}back(){this.location.back()}addNewFlag(){if(this.newFlagName!==\"\"){try{this.featureFlags=g.addFlag(this.newFlagName)}catch(o){this.isDuplicatedFF=!0,console.error(o),setTimeout(()=>{this.isDuplicatedFF=!1,this.cdr.detectChanges()},500);return}this.newFlagName=\"\"}}removeFlag(o){this.featureFlags=g.removeFlag(o)}toggleFeatureFlagsMode(o){g.toggleFeatureFlagsMode(o)}toggleFeatureFlagsIgnoreEnv(o){g.toggleFeatureFlagsIgnoreEnv(o)}toggleHelp(){this.isHelpShowed=!this.isHelpShowed}toggleFlag(o,n){n.active&&g.removeFlag(n.name),n.active||g.addFlag(n.name),o.preventDefault(),this.updateFlags()}updateFlags(){var o;this.featureFlags=(o=g.getStoredFlags())!=null?o:[],this.availableFlags=Object.keys(G).map(n=>({name:n,active:this.featureFlags.includes(n.toString())}))}};i(e,\"\\u0275fac\",function(n){return new(n||e)(h(O),h(Y))}),i(e,\"\\u0275cmp\",b({type:e,selectors:[[\"app-feature-flags-page\"]],decls:14,vars:5,consts:[[3,\"leadingClick\",\"title\"],[1,\"container\"],[1,\"title\"],[\"class\",\"flags\",4,\"ngFor\",\"ngForOf\"],[1,\"line\"],[1,\"button-toggle\"],[3,\"click\"],[\"class\",\"help\",3,\"click\",4,\"ngIf\"],[1,\"flags\"],[3,\"ngModelChange\",\"click\",\"ngModel\"],[1,\"help\",3,\"click\"],[1,\"help__content\"],[1,\"line\",\"line_vertical-padding\"]],template:function(n,r){n&1&&(l(0,\"ui-kit-header\",0),u(\"leadingClick\",function(){return r.back()}),c(),l(1,\"div\",1)(2,\"h3\",2),s(3,\"Enabled feature flags\"),c(),j(4,He,3,2,\"div\",3),f(5,\"div\",4),l(6,\"div\",5)(7,\"ui-kit-button\",6),u(\"click\",function(){return r.toggleFeatureFlagsIgnoreEnv(!r.FeatureFlagsService.isFeatureFlagsIgnoreEnv())}),s(8),c(),l(9,\"ui-kit-button\",6),u(\"click\",function(){return r.toggleFeatureFlagsMode(!r.FeatureFlagsService.isFeatureFlagsEnabled())}),s(10),c(),l(11,\"ui-kit-button\",6),u(\"click\",function(){return r.toggleHelp()}),s(12,\"Help\"),c()()(),j(13,Ve,31,0,\"div\",7)),n&2&&(_(\"title\",\"Feature flags\"),m(4),_(\"ngForOf\",r.availableFlags),m(4),F(\" \",r.FeatureFlagsService.isFeatureFlagsIgnoreEnv()?\"Use env\":\"Ignore env\",\" \"),m(2),F(\" \",r.FeatureFlagsService.isFeatureFlagsEnabled()?\"Disable ff mode\":\"Enable ff mode\",\" \"),m(3),_(\"ngIf\",r.isHelpShowed))},dependencies:[Q,Z,C,me,Me,I,T],styles:[\".title[_ngcontent-%COMP%]{padding:8px;text-align:center}.button-help[_ngcontent-%COMP%]{position:fixed;width:56px;height:56px;cursor:pointer;top:0;right:0;display:flex;justify-content:center;align-items:center;z-index:100;font-size:24px}.help[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#000c;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:1000}.help__content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%) translateY(-50%);padding:16px;border-radius:8px;background-color:#fff}.line[_ngcontent-%COMP%]{width:100%;height:1px;background-color:#ccc}.line_vertical-padding[_ngcontent-%COMP%]{margin:8px 0}.content[_ngcontent-%COMP%]{padding:8px}.content[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]{padding:4px;display:flex;justify-content:space-between;align-items:center}.content[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:nth-child(2n){background-color:#eee}.content[_ngcontent-%COMP%]   .button-remove[_ngcontent-%COMP%]{height:30px;width:30px;border-radius:50%;font-size:16px;display:flex;justify-content:center;align-items:center;cursor:pointer}.input-area[_ngcontent-%COMP%]{width:100%;display:flex;padding-top:8px}.input-area_error[_ngcontent-%COMP%]{border:2px solid red}.input-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;margin-right:8px;text-align:center}.button-toggle[_ngcontent-%COMP%]{padding-top:8px;display:flex}.button-toggle[_ngcontent-%COMP%]   ui-kit-button[_ngcontent-%COMP%]{width:100%}.button-toggle[_ngcontent-%COMP%]   ui-kit-button[_ngcontent-%COMP%]:first-child{padding-right:4px}.button-toggle[_ngcontent-%COMP%]   ui-kit-button[_ngcontent-%COMP%]:last-child{padding-left:4px}\"],changeDetection:0}));let a=e;return a})();export{Me as a,G as b,Oe as c,vt as d,Pe as e,Tt as f,g};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 5905,
          "_transferSize": 6565,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.880Z",
        "time": 155.82400001585484,
        "timings": {
          "blocked": 123.44800003935397,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.4200000000000017,
          "wait": 25.11999996147304,
          "receive": 6.836000015027821,
          "_blocked_queueing": 20.706000039353967,
          "_blocked_proxy": 37.4,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "358013",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-HN5Z5GAF.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3389"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf260902bcac-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "br"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:24 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "Vary",
              "value": "accept-encoding"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-106\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "7e340fec4481cec2fdcb8ed603a24e6e"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 262,
            "mimeType": "application/javascript",
            "compression": 79,
            "text": "import{za as _}from\"./chunk-CJMBEYVW.js\";var e=\"ycl.debug.force-apply-env\",T=\"ycl.debug.\",t=\"ycl.feature.flags.ignore-env\",S=\"ycl.feature.flags.status\",o=\"ycl.feature.flags\",A=new _(\"libs.environment-settings\");export{e as a,T as b,t as c,S as d,o as e,A as f};\n"
          },
          "redirectURL": "",
          "headersSize": 657,
          "bodySize": 183,
          "_transferSize": 840,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:56:23.880Z",
        "time": 154.7969999955967,
        "timings": {
          "blocked": 124.13500000371783,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2330000000000041,
          "wait": 26.91900004053116,
          "receive": 3.5099999513477087,
          "_blocked_queueing": 21.26700000371784,
          "_blocked_proxy": 37.02,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "357734",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_80",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-OFQEHNJH.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/main-YEPPZBSR.js"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "script"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1015,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3389"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98acdf260d37bcb2-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=3600"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript; charset=utf-8"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 10:56:24 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "etag",
              "value": "W/\"68d3e13d-ef19\""
            },
            {
              "name": "last-modified",
              "value": "Wed, 24 Sep 2025 12:17:01 GMT"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "1e8b5ad63079a16517c71d5ca6988c02"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 61209,
            "mimeType": "application/javascript",
            "compression": 36327,
            "text": "import{c as e2}from\"./chunk-PVG5BVG5.js\";import{c as t2}from\"./chunk-UIU24VNB.js\";import{a as x,ia as V,ja as y,ka as J,ra as Q,sa as X}from\"./chunk-W3M7SAIY.js\";import{Gh as d,_ as g,aa as S,fa as q,g as $,ga as K,l as W,ua as Y,ya as k}from\"./chunk-FAHXWQCK.js\";import{$b as r,Ab as s,Ba as M,Bb as j,Ca as h,Gc as c,Ha as I,Hc as L,Jb as G,Ob as u,Ra as D,Rb as m,Sa as U,Ta as f,Ua as Z,_b as t,ac as o,bc as v,cc as b,ec as R,i as A,ia as T,ic as P,jc as N,sc as z,uc as O,wa as F,x as E}from\"./chunk-CJMBEYVW.js\";import{a as B}from\"./chunk-V4TKYZTR.js\";import{g as C}from\"./chunk-JV5WWF5Q.js\";function l2(n,i){n&1&&(f(),v(0),o(1,\"path\",60)(2,\"path\",61)(3,\"path\",62),b())}function s2(n,i){n&1&&(f(),v(0),o(1,\"path\",63)(2,\"path\",64)(3,\"path\",65),b())}function p2(n,i){n&1&&(t(0,\"div\",66),f(),t(1,\"svg\",67)(2,\"g\",68),o(3,\"path\",69)(4,\"path\",70)(5,\"path\",71)(6,\"path\",72)(7,\"path\",73)(8,\"path\",74)(9,\"path\",75)(10,\"path\",76)(11,\"path\",77)(12,\"path\",78)(13,\"path\",79)(14,\"path\",80)(15,\"path\",81)(16,\"path\",82)(17,\"path\",83)(18,\"path\",84)(19,\"path\",85)(20,\"path\",86)(21,\"path\",87)(22,\"path\",88)(23,\"path\",89)(24,\"path\",90)(25,\"path\",91),r()()())}function m2(n,i){if(n&1){let o2=R();t(0,\"ui-kit-button\",92),c(1,\"translate\"),P(\"click\",function(){D(o2);let e=N();return U(e.goToDownload())}),r()}n&2&&m(\"title\",L(1,1,\"altegiome.large_promo.download\"))}var C2=(()=>{let i=class i extends J{constructor(e){super(e);C(this,\"modalService\");C(this,\"store\",h(Y));C(this,\"tracking\",h(S));C(this,\"storeSnapshotService\",h(k));C(this,\"isMobile\",x().phone);C(this,\"buttonType\",Q);C(this,\"isRuLang$\",this.store.select(d.localization.getCurrentLanguage).pipe(E(e=>e===\"ru-RU\"),T(1)));this.modalService=e}ngAfterViewInit(){this.tracking.track({type:g.Action.view,context_element_type:\"banner\",context_element_name:\"aunio_promo_banner\"})}goToDownload(){this.tracking.track({type:g.Action.click,context_element_type:\"button\",context_element_name:\"aunio_promo_banner_button\"});let e=this.storeSnapshotService.selectSnapshot(d.applications.getApplications).find(l=>l.slug===\"aunio\");window.open(e==null?void 0:e.one_link)}skipPromo(){this.tracking.track({type:g.Action.click,context_element_type:\"button\",context_element_name:\"aunio_promo_banner_close_button\"}),this.dismiss()}};C(i,\"\\u0275fac\",function(l){return new(l||i)(j(y))}),C(i,\"\\u0275cmp\",I({type:i,selectors:[[\"app-altegiome-promo\"]],features:[G],decls:81,vars:18,consts:[[1,\"promo-logo\"],[\"width\",\"450\",\"height\",\"70\",\"viewBox\",\"0 0 278 103\",\"fill\",\"none\",\"xmlns\",\"http://www.w3.org/2000/svg\"],[\"clip-path\",\"url(#clip0_760_9502)\"],[\"d\",\"M0 63.4794C0 83.2393 0 93.1193 6.13862 99.2579C12.2772 105.396 22.1572 105.396 41.9171 105.396H62.8756C82.6355 105.396 92.5155 105.396 98.6541 99.2579C104.793 93.1193 104.793 83.2393 104.793 63.4794V42.5208C104.793 22.7609 104.793 12.881 98.6541 6.74238C92.5155 0.60376 82.6355 0.60376 62.8756 0.60376H41.9171C22.1572 0.60376 12.2772 0.60376 6.13862 6.74238C0 12.881 0 22.7609 0 42.5208V63.4794Z\",\"fill\",\"#FFCB00\"],[\"d\",\"M88.4369 80.6724C88.7578 81.2283 88.3567 81.9231 87.715 81.9231H58.5056C58.2078 81.9231 57.9326 81.7642 57.7836 81.5062L37.2384 45.9137C37.0895 45.6557 37.0895 45.3379 37.2384 45.0799L51.8431 19.7787C52.164 19.2229 52.9661 19.2229 53.287 19.7787L88.4369 80.6724Z\",\"fill\",\"#2B3134\"],[\"d\",\"M21.1895 72.8828C21.3384 72.6248 21.6136 72.4659 21.9114 72.4659H51.6723C52.069 72.4659 52.317 72.8954 52.1186 73.2391L47.3466 81.5061C47.1977 81.764 46.9225 81.923 46.6247 81.923H16.8638C16.4671 81.923 16.2191 81.4934 16.4175 81.1498L21.1895 72.8828Z\",\"fill\",\"#2B3134\"],[\"d\",\"M267.78 35.5225C273.16 35.5225 276.627 38.0123 278.394 40.0332V36.2734H285.382V67.8281C285.382 72.3187 283.926 76.192 281.045 78.9404C278.167 81.6865 273.94 83.2412 268.531 83.2412C262.401 83.2412 258.41 81.2299 255.892 78.918C253.393 76.6234 252.378 74.0619 252.132 72.9756L251.955 72.1855H259.393L259.58 72.5068C259.777 72.8452 260.393 73.8821 261.754 74.8379C263.111 75.7904 265.248 76.6904 268.531 76.6904C271.771 76.6904 274.225 75.8435 275.862 74.3564C277.49 72.8774 278.394 70.6894 278.394 67.8281V64.6846C276.64 66.7368 273.201 69.2891 267.78 69.2891C263.492 69.289 259.507 67.7285 256.592 64.8223C253.674 61.9125 251.867 57.6899 251.867 52.4365C251.867 47.1835 253.675 42.9465 256.591 40.0215C259.505 37.0997 263.49 35.5226 267.78 35.5225ZM349.326 60.4062C351.823 60.4062 353.848 62.4312 353.848 64.9287C353.848 67.426 351.823 69.4502 349.326 69.4502C346.829 69.45 344.804 67.4259 344.804 64.9287C344.804 62.4314 346.828 60.4065 349.326 60.4062ZM397.252 36.2021C405.202 36.2022 410.714 42.0372 410.688 50.084V69.3125H403.802V50.625C403.802 46.4029 400.745 42.8381 396.498 42.8379C392.454 42.838 389.382 46.4718 389.381 50.625V69.2754H389.172V69.3125H382.287V50.625C382.287 46.4027 379.23 42.8379 374.982 42.8379C370.939 42.838 367.866 46.4717 367.866 50.625V69.2754H360.938V36.8545H367.886V39.0879C369.853 37.1783 372.438 36.3126 375.199 36.2119L375.737 36.2021C380.23 36.2021 383.945 38.0667 386.321 41.1406L388.829 38.9912C391.07 37.1238 393.918 36.3068 396.71 36.2119L397.252 36.2021ZM152.789 35.5225C158.008 35.5225 161.362 37.9565 163.09 39.9531V36.2734H170.079V68.4756H163.09V64.6582C161.415 66.6864 158.163 69.2266 152.789 69.2266C148.561 69.2264 144.622 67.6636 141.74 64.7568C138.855 61.8469 137.063 57.6255 137.063 52.374C137.063 41.9525 144.289 35.5228 152.789 35.5225ZM230.945 35.5225C235.647 35.5225 239.763 37.2767 242.7 40.3691C245.635 43.4602 247.359 47.85 247.359 53.0625V53.71H221.7C222.27 58.8237 226.059 62.6757 231.508 62.6758C237.479 62.6757 239.665 59.5347 240.141 58.6885L240.327 58.3584H247.1L246.975 59.1123C246.488 62.0328 242.23 69.2264 231.508 69.2266C221.633 69.2265 214.593 61.7953 214.593 52.374C214.593 42.6506 221.497 35.5226 230.945 35.5225ZM322.138 35.5225C331.69 35.5225 339.053 42.8162 339.053 52.374C339.053 61.9321 331.69 69.2266 322.138 69.2266C312.523 69.2263 305.224 61.9303 305.224 52.374C305.224 42.818 312.523 35.5227 322.138 35.5225ZM433.763 34.8584C438.466 34.8584 442.581 36.6128 445.518 39.7051C448.454 42.7961 450.177 47.186 450.177 52.3984V53.0459H424.518C425.088 58.1597 428.877 62.0116 434.327 62.0117C440.297 62.0117 442.483 58.872 442.959 58.0254L443.145 57.6953H449.918L449.793 58.4492C449.306 61.37 445.048 68.5624 434.327 68.5625C424.451 68.5624 417.412 61.1312 417.412 51.71C417.412 41.9866 424.316 34.8586 433.763 34.8584ZM184.266 68.4756H177.278V22.7588H184.266V68.4756ZM198.271 36.2734H210.722V42.6982H198.271V56.0225C198.271 58.7732 198.289 60.1658 199.16 61.0371C200.048 61.9252 201.478 61.9248 204.337 61.9248H210.722V68.4756H202.754C202.069 68.4756 201.412 68.4463 200.784 68.3867C197.317 68.2116 195.151 67.6917 193.609 66.1494C192.187 64.727 191.634 62.7742 191.419 59.7598C191.328 59.0471 191.283 58.2949 191.283 57.5049V27.0771L198.271 22.7588V36.2734ZM299.696 68.4756H292.708V36.2734H299.696V68.4756ZM268.843 42.0723C265.855 42.0724 263.419 43.1928 261.725 45.0244C260.027 46.8611 259.043 49.4506 259.042 52.4365C259.042 58.1987 262.931 62.738 268.843 62.7383C274.626 62.7383 278.52 58.2043 278.52 52.4365C278.52 49.4578 277.544 46.867 275.851 45.0225C274.159 43.179 271.742 42.0723 268.843 42.0723ZM153.853 42.0723C150.932 42.0723 148.541 43.1898 146.877 45.0137C145.209 46.843 144.239 49.4183 144.239 52.374C144.239 58.2073 148.073 62.6757 153.853 62.6758C159.432 62.6756 163.215 58.2213 163.215 52.374C163.215 46.4669 159.434 42.0725 153.853 42.0723ZM322.138 42.0723C316.351 42.0725 312.4 46.612 312.4 52.374C312.4 58.1363 316.351 62.6755 322.138 62.6758C327.928 62.6758 331.876 58.1965 331.876 52.374C331.876 46.5517 327.928 42.0723 322.138 42.0723ZM230.945 41.6973C228.6 41.6973 226.647 42.363 225.147 43.5244C223.845 44.5324 222.856 45.9353 222.25 47.6602H239.493C238.816 45.8586 237.789 44.4488 236.495 43.4561C235.009 42.3165 233.133 41.6973 230.945 41.6973ZM433.763 41.0332C431.419 41.0333 429.466 41.6999 427.965 42.8613C426.663 43.8693 425.674 45.2714 425.068 46.9961H442.311C441.634 45.1946 440.607 43.7847 439.313 42.792C437.827 41.6526 435.952 41.0332 433.763 41.0332ZM296.215 24.1016C298.713 24.1016 300.738 26.1266 300.738 28.624C300.738 31.1215 298.713 33.1464 296.215 33.1465C293.718 33.1464 291.693 31.1215 291.693 28.624C291.693 26.1267 293.718 24.1017 296.215 24.1016Z\",\"fill\",\"#FFFFFF\"],[\"id\",\"clip0_760_9502\"],[\"width\",\"104.793\",\"height\",\"104.793\",\"fill\",\"white\",\"transform\",\"matrix(1 0 0 -1 0 105.396)\"],[1,\"promo-image\"],[\"viewBox\",\"0 0 481 356\",\"fill\",\"none\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"preserveAspectRatio\",\"xMidYMid meet\"],[\"d\",\"M-17 329.5C30.1667 306.333 128 247.5 186.5 266C237.168 282.023 48.1001 258.104 83 176.5C117 97 315 48 486 30\",\"stroke\",\"url(#paint0_linear_28_2343)\",\"stroke-width\",\"59\"],[\"filter\",\"url(#filter0_d_28_2343)\"],[\"x\",\"166.462\",\"y\",\"89\",\"width\",\"277.369\",\"height\",\"168.693\",\"rx\",\"12.1653\",\"transform\",\"rotate(10.0582 166.462 89)\",\"fill\",\"white\"],[\"opacity\",\"0.2\",\"x\",\"183.401\",\"y\",\"104.949\",\"width\",\"243.192\",\"height\",\"11.8048\",\"rx\",\"5.9024\",\"transform\",\"rotate(10.0582 183.401 104.949)\",\"fill\",\"#AEB5C1\"],[\"opacity\",\"0.2\",\"x\",\"230.581\",\"y\",\"154.736\",\"width\",\"162.204\",\"height\",\"11.3543\",\"rx\",\"4.05511\",\"transform\",\"rotate(10.0582 230.581 154.736)\",\"fill\",\"#AEB5C1\"],[\"opacity\",\"0.2\",\"x\",\"227.465\",\"y\",\"172.304\",\"width\",\"107.055\",\"height\",\"11.3543\",\"rx\",\"4.05511\",\"transform\",\"rotate(10.0582 227.465 172.304)\",\"fill\",\"#AEB5C1\"],[\"x\",\"160.671\",\"y\",\"207.874\",\"width\",\"246.934\",\"height\",\"36.16\",\"rx\",\"10.5961\",\"transform\",\"rotate(10.0582 160.671 207.874)\",\"fill\",\"white\"],[\"x\",\"160.671\",\"y\",\"207.874\",\"width\",\"246.934\",\"height\",\"36.16\",\"rx\",\"10.5961\",\"transform\",\"rotate(10.0582 160.671 207.874)\",\"stroke\",\"#FFCB00\",\"stroke-width\",\"0.921397\"],[4,\"ngIf\"],[\"cx\",\"196.496\",\"cy\",\"162.35\",\"r\",\"22.7086\",\"transform\",\"rotate(10.0582 196.496 162.35)\",\"fill\",\"#FFEA99\"],[\"d\",\"M184.106 166.293C182.618 166.029 181.606 165.514 181.071 164.748C180.547 163.983 180.395 162.985 180.613 161.753L182.104 153.349L184.562 153.785L183.071 162.189C182.958 162.828 183.013 163.33 183.236 163.693C183.462 164.045 183.865 164.272 184.446 164.375L188.352 165.068L188.011 166.986L184.106 166.293ZM197.352 165.711L192.575 164.864L191.252 167.56L188.793 167.124L193.5 157.925C193.833 157.264 194.15 156.763 194.45 156.421C194.751 156.078 195.073 155.854 195.415 155.746C195.77 155.641 196.185 155.631 196.662 155.716C197.138 155.8 197.519 155.952 197.804 156.17C198.089 156.389 198.314 156.71 198.478 157.135C198.654 157.562 198.785 158.142 198.87 158.877L200.126 169.135L197.668 168.699L197.352 165.711ZM197.137 163.785L196.563 158.504C196.535 158.187 196.434 158.013 196.26 157.982C196.085 157.951 195.931 158.08 195.796 158.368L193.44 163.129L197.137 163.785ZM204.129 157.256L209.499 158.209C210.778 158.435 211.704 158.888 212.28 159.565C212.867 160.245 213.066 161.113 212.878 162.171C212.775 162.752 212.508 163.244 212.077 163.647C211.646 164.05 211.084 164.28 210.39 164.337C211.086 164.605 211.607 165.045 211.954 165.658C212.303 166.259 212.402 166.984 212.252 167.833C212.068 168.867 211.557 169.622 210.717 170.096C209.892 170.561 208.851 170.682 207.596 170.46L201.964 169.461L204.129 157.256ZM208.575 163.116C209.04 163.198 209.435 163.131 209.762 162.913C210.102 162.686 210.312 162.345 210.392 161.892C210.473 161.439 210.391 161.052 210.148 160.734C209.919 160.405 209.571 160.2 209.107 160.117L206.247 159.61L205.715 162.609L208.575 163.116ZM207.413 168.449C208.134 168.577 208.693 168.532 209.091 168.315C209.491 168.086 209.743 167.681 209.846 167.1C209.949 166.519 209.851 166.058 209.552 165.717C209.255 165.365 208.746 165.125 208.025 164.997L205.375 164.527L204.763 167.979L207.413 168.449Z\",\"fill\",\"black\"],[\"filter\",\"url(#filter1_d_28_2343)\"],[\"x\",\"44\",\"y\",\"110.289\",\"width\",\"63.0763\",\"height\",\"63.0763\",\"rx\",\"31.5382\",\"transform\",\"rotate(-14.9656 44 110.289)\",\"fill\",\"#32393D\"],[\"d\",\"M85.0586 115.35L86.8328 121.987\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"d\",\"M71.7852 118.899L73.5593 125.536\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"d\",\"M66.5935 132.709L96.4479 124.729\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"d\",\"M90.9287 117.325L67.7115 123.531C65.8723 124.022 64.8053 125.907 65.2898 127.72L71.0541 149.284C71.5457 151.123 73.4303 152.19 75.2429 151.706L98.46 145.5C100.299 145.008 101.366 143.123 100.882 141.311L95.1175 119.746C94.6258 117.907 92.7412 116.84 90.9287 117.325Z\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"d\",\"M78.1754 139.494L82.7359 142.131L88.666 131.835\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"filter\",\"url(#filter2_d_28_2343)\"],[\"d\",\"M73 249C79.8333 253.833 97.1 267.3 111.5 274.5C125.9 281.7 140.5 287 148.5 290.5\",\"stroke\",\"url(#paint1_linear_28_2343)\",\"stroke-opacity\",\"0.1\",\"stroke-width\",\"2\",\"shape-rendering\",\"crispEdges\"],[\"id\",\"filter0_d_28_2343\",\"x\",\"99.5862\",\"y\",\"63.3912\",\"width\",\"377.396\",\"height\",\"289.37\",\"filterUnits\",\"userSpaceOnUse\",\"color-interpolation-filters\",\"sRGB\"],[\"flood-opacity\",\"0\",\"result\",\"BackgroundImageFix\"],[\"in\",\"SourceAlpha\",\"type\",\"matrix\",\"values\",\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\",\"hardAlpha\"],[\"dy\",\"11.8048\"],[\"stdDeviation\",\"19.6747\"],[\"in2\",\"hardAlpha\",\"operator\",\"out\"],[\"type\",\"matrix\",\"values\",\"0 0 0 0 0 0 0 0 0 0.113725 0 0 0 0 0.4 0 0 0 0.12 0\"],[\"mode\",\"normal\",\"in2\",\"BackgroundImageFix\",\"result\",\"effect1_dropShadow_28_2343\"],[\"mode\",\"normal\",\"in\",\"SourceGraphic\",\"in2\",\"effect1_dropShadow_28_2343\",\"result\",\"shape\"],[\"id\",\"filter1_d_28_2343\",\"x\",\"44.7181\",\"y\",\"97.8927\",\"width\",\"75.7895\",\"height\",\"75.7896\",\"filterUnits\",\"userSpaceOnUse\",\"color-interpolation-filters\",\"sRGB\"],[\"dy\",\"3.17442\"],[\"stdDeviation\",\"3.17442\"],[\"type\",\"matrix\",\"values\",\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0\"],[\"id\",\"filter2_d_28_2343\",\"x\",\"48.4226\",\"y\",\"226.184\",\"width\",\"124.478\",\"height\",\"91.2325\",\"filterUnits\",\"userSpaceOnUse\",\"color-interpolation-filters\",\"sRGB\"],[\"dy\",\"2\"],[\"stdDeviation\",\"12\"],[\"type\",\"matrix\",\"values\",\"0 0 0 0 0 0 0 0 0 0.113725 0 0 0 0 0.4 0 0 0 0.06 0\"],[\"id\",\"paint0_linear_28_2343\",\"x1\",\"116.827\",\"y1\",\"-53.7229\",\"x2\",\"162.517\",\"y2\",\"327.33\",\"gradientUnits\",\"userSpaceOnUse\"],[\"stop-color\",\"#FFCB00\",\"stop-opacity\",\"0\"],[\"offset\",\"1\",\"stop-color\",\"#FFCB00\"],[\"id\",\"paint1_linear_28_2343\",\"x1\",\"100\",\"y1\",\"247.5\",\"x2\",\"78.3218\",\"y2\",\"275.428\",\"gradientUnits\",\"userSpaceOnUse\"],[\"stop-color\",\"#41423C\"],[1,\"promo-text\"],[1,\"title\"],[1,\"description\"],[1,\"promo-actions\"],[\"class\",\"qr-code\",4,\"ngIf\"],[\"class\",\"download-button\",3,\"title\",\"click\",4,\"ngIf\"],[1,\"skip-button\",3,\"click\",\"title\",\"type\"],[\"d\",\"M215.75 237.254L216.521 232.906L215.653 233.513C215.444 233.658 215.157 233.607 215.011 233.399C214.865 233.19 214.916 232.903 215.125 232.757L216.905 231.513C216.956 231.478 217.012 231.454 217.07 231.441C217.127 231.428 217.188 231.427 217.249 231.438C217.311 231.448 217.367 231.471 217.417 231.503C217.466 231.534 217.511 231.576 217.547 231.627L218.79 233.408C218.936 233.616 218.885 233.903 218.677 234.049C218.468 234.195 218.181 234.144 218.035 233.935L217.428 233.067L216.657 237.415C216.405 238.834 217.352 240.19 218.772 240.441L220.586 240.763C220.837 240.808 221.004 241.047 220.959 241.297C220.915 241.548 220.676 241.715 220.425 241.671L218.611 241.349C216.69 241.008 215.409 239.175 215.75 237.254Z\",\"fill\",\"#2B3134\"],[\"d\",\"M220.878 232.081C220.628 232.037 220.389 232.204 220.344 232.454C220.3 232.705 220.467 232.944 220.717 232.988L222.532 233.31C223.951 233.562 224.898 234.917 224.646 236.337L223.875 240.685L223.02 239.46C222.874 239.252 222.587 239.201 222.378 239.347C222.169 239.492 222.119 239.78 222.264 239.988L223.757 242.124C223.793 242.176 223.837 242.217 223.887 242.249C223.93 242.277 223.978 242.297 224.031 242.31C224.038 242.311 224.046 242.313 224.054 242.314C224.116 242.325 224.176 242.323 224.234 242.311C224.291 242.298 224.347 242.274 224.398 242.238L226.535 240.746C226.743 240.6 226.794 240.313 226.648 240.104C226.503 239.896 226.216 239.845 226.007 239.99L224.782 240.846L225.554 236.498C225.894 234.577 224.613 232.744 222.693 232.403L220.878 232.081Z\",\"fill\",\"#2B3134\"],[\"d\",\"M234.835 244.092C234.216 243.982 233.681 243.777 233.232 243.477C232.786 243.178 232.455 242.814 232.239 242.385C232.027 241.953 231.956 241.485 232.024 240.979L233.44 241.23C233.409 241.507 233.459 241.761 233.589 241.991C233.722 242.22 233.914 242.412 234.165 242.568C234.417 242.725 234.708 242.832 235.039 242.891C235.403 242.955 235.736 242.949 236.038 242.872C236.343 242.796 236.595 242.66 236.794 242.462C236.994 242.262 237.12 242.013 237.173 241.715C237.228 241.406 237.197 241.119 237.079 240.857C236.965 240.591 236.768 240.364 236.488 240.175C236.211 239.986 235.86 239.854 235.433 239.778L234.652 239.64L234.854 238.503L235.634 238.642C235.977 238.703 236.289 238.694 236.569 238.617C236.853 238.54 237.087 238.405 237.274 238.211C237.461 238.015 237.58 237.768 237.633 237.47C237.684 237.185 237.663 236.925 237.571 236.692C237.483 236.456 237.332 236.257 237.119 236.095C236.909 235.934 236.646 235.825 236.33 235.769C236.029 235.716 235.738 235.721 235.457 235.786C235.179 235.849 234.941 235.968 234.742 236.143C234.544 236.316 234.414 236.543 234.352 236.823L233.003 236.584C233.107 236.087 233.332 235.675 233.679 235.345C234.029 235.017 234.454 234.787 234.955 234.655C235.456 234.524 235.989 234.508 236.554 234.609C237.147 234.714 237.637 234.92 238.026 235.228C238.419 235.533 238.698 235.898 238.865 236.321C239.035 236.745 239.078 237.184 238.995 237.637C238.906 238.155 238.684 238.569 238.328 238.878C237.975 239.187 237.547 239.361 237.044 239.399L237.032 239.471C237.629 239.673 238.06 240.001 238.327 240.455C238.597 240.909 238.679 241.427 238.573 242.01C238.485 242.519 238.263 242.949 237.906 243.302C237.552 243.654 237.109 243.903 236.578 244.048C236.047 244.189 235.466 244.204 234.835 244.092ZM241.835 245.362C241.396 245.284 241.013 245.132 240.687 244.907C240.362 244.678 240.123 244.39 239.971 244.04C239.822 243.691 239.788 243.29 239.868 242.835C239.938 242.445 240.07 242.136 240.265 241.91C240.46 241.684 240.699 241.52 240.98 241.418C241.262 241.316 241.568 241.256 241.897 241.237C242.226 241.217 242.558 241.217 242.892 241.236C243.316 241.262 243.659 241.283 243.923 241.298C244.188 241.311 244.385 241.292 244.515 241.24C244.645 241.189 244.725 241.082 244.753 240.92L244.759 240.888C244.829 240.494 244.772 240.169 244.588 239.913C244.407 239.658 244.098 239.492 243.662 239.414C243.208 239.334 242.832 239.371 242.535 239.526C242.241 239.679 242.023 239.868 241.881 240.094L240.664 239.58C240.889 239.186 241.169 238.885 241.504 238.678C241.842 238.468 242.211 238.338 242.61 238.288C243.011 238.235 243.42 238.245 243.838 238.32C244.114 238.369 244.402 238.454 244.7 238.575C245.001 238.693 245.272 238.862 245.512 239.082C245.755 239.302 245.936 239.587 246.054 239.936C246.172 240.283 246.187 240.709 246.097 241.214L245.281 245.815L243.964 245.581L244.132 244.634L244.078 244.624C243.96 244.783 243.798 244.931 243.594 245.069C243.39 245.206 243.141 245.306 242.848 245.369C242.554 245.432 242.217 245.429 241.835 245.362ZM242.32 244.331C242.693 244.397 243.025 244.38 243.315 244.28C243.609 244.18 243.846 244.023 244.027 243.81C244.211 243.595 244.327 243.35 244.376 243.077L244.534 242.184C244.477 242.223 244.376 242.252 244.23 242.269C244.088 242.284 243.927 242.291 243.747 242.291C243.568 242.287 243.394 242.282 243.224 242.277C243.055 242.269 242.913 242.262 242.799 242.257C242.532 242.244 242.283 242.257 242.053 242.297C241.825 242.337 241.634 242.42 241.479 242.544C241.327 242.666 241.229 242.847 241.187 243.088C241.127 243.422 241.206 243.696 241.422 243.911C241.639 244.123 241.938 244.263 242.32 244.331ZM247.077 246.133L248.306 239.205L253.958 240.208L252.729 247.136L251.407 246.901L252.43 241.137L249.412 240.602L248.39 246.366L247.077 246.133ZM256.189 245.8L260.136 241.304L261.588 241.561L260.359 248.489L259.038 248.255L259.932 243.212L255.998 247.716L254.532 247.455L255.761 240.528L257.082 240.762L256.189 245.8ZM265.066 249.468C264.395 249.349 263.845 249.095 263.415 248.705C262.988 248.313 262.693 247.825 262.53 247.241C262.367 246.657 262.347 246.018 262.47 245.323C262.595 244.62 262.837 244.022 263.197 243.531C263.558 243.036 264.006 242.68 264.541 242.462C265.076 242.243 265.669 242.192 266.322 242.308C266.848 242.401 267.3 242.582 267.677 242.851C268.055 243.116 268.339 243.446 268.53 243.839C268.724 244.233 268.803 244.668 268.769 245.142L267.456 244.91C267.442 244.572 267.326 244.263 267.109 243.983C266.895 243.703 266.573 243.525 266.143 243.448C265.767 243.382 265.42 243.423 265.102 243.571C264.788 243.717 264.52 243.958 264.299 244.294C264.079 244.627 263.925 245.04 263.838 245.533C263.748 246.038 263.747 246.488 263.836 246.882C263.924 247.276 264.09 247.599 264.334 247.85C264.581 248.101 264.895 248.261 265.277 248.329C265.533 248.374 265.773 248.368 265.997 248.312C266.224 248.253 266.424 248.148 266.597 247.995C266.773 247.843 266.912 247.648 267.013 247.408L268.326 247.641C268.198 248.081 267.981 248.455 267.675 248.763C267.369 249.072 266.994 249.291 266.549 249.42C266.108 249.549 265.613 249.565 265.066 249.468ZM271.368 250.6C270.929 250.522 270.546 250.371 270.22 250.145C269.895 249.917 269.656 249.628 269.504 249.278C269.355 248.929 269.321 248.528 269.401 248.074C269.471 247.683 269.603 247.375 269.798 247.149C269.993 246.923 270.232 246.759 270.513 246.657C270.795 246.555 271.101 246.494 271.43 246.475C271.759 246.456 272.091 246.456 272.425 246.475C272.849 246.5 273.192 246.521 273.456 246.537C273.721 246.55 273.918 246.53 274.048 246.479C274.178 246.428 274.258 246.321 274.286 246.158L274.292 246.127C274.362 245.733 274.305 245.408 274.121 245.152C273.94 244.896 273.631 244.73 273.195 244.653C272.741 244.572 272.365 244.609 272.068 244.765C271.774 244.917 271.556 245.106 271.414 245.332L270.197 244.819C270.422 244.425 270.702 244.124 271.037 243.916C271.375 243.706 271.744 243.577 272.143 243.526C272.544 243.473 272.953 243.484 273.371 243.558C273.647 243.607 273.935 243.692 274.233 243.813C274.534 243.932 274.805 244.101 275.045 244.32C275.288 244.54 275.469 244.825 275.587 245.175C275.705 245.521 275.72 245.947 275.63 246.452L274.814 251.053L273.497 250.819L273.665 249.872L273.611 249.863C273.493 250.022 273.331 250.17 273.127 250.307C272.923 250.445 272.674 250.545 272.381 250.608C272.087 250.67 271.75 250.668 271.368 250.6ZM271.853 249.569C272.226 249.636 272.558 249.618 272.848 249.518C273.142 249.418 273.379 249.262 273.56 249.049C273.744 248.833 273.86 248.589 273.909 248.315L274.067 247.422C274.01 247.462 273.909 247.49 273.763 247.508C273.621 247.523 273.46 247.53 273.28 247.529C273.101 247.525 272.927 247.521 272.757 247.515C272.588 247.507 272.446 247.501 272.332 247.496C272.065 247.483 271.816 247.496 271.586 247.536C271.358 247.576 271.167 247.658 271.012 247.783C270.86 247.905 270.762 248.086 270.72 248.326C270.661 248.66 270.739 248.935 270.955 249.15C271.172 249.362 271.471 249.502 271.853 249.569ZM276.773 245.455L276.98 244.291L282.825 245.328L282.619 246.492L280.359 246.091L279.337 251.855L278.02 251.622L279.042 245.857L276.773 245.455ZM284.844 248.143L286.856 248.499C287.704 248.65 288.319 248.976 288.701 249.478C289.084 249.98 289.216 250.563 289.098 251.228C289.021 251.661 288.85 252.032 288.584 252.342C288.318 252.651 287.971 252.872 287.541 253.003C287.112 253.132 286.615 253.146 286.049 253.046L283.023 252.509L284.252 245.581L285.573 245.816L284.551 251.58L286.256 251.882C286.644 251.951 286.98 251.907 287.266 251.75C287.551 251.589 287.722 251.351 287.778 251.036C287.838 250.702 287.761 250.408 287.549 250.153C287.337 249.895 287.037 249.732 286.649 249.663L284.638 249.306L284.844 248.143ZM293.098 254.44C292.427 254.321 291.877 254.067 291.447 253.678C291.02 253.286 290.725 252.798 290.562 252.213C290.399 251.629 290.379 250.99 290.502 250.295C290.627 249.592 290.869 248.994 291.23 248.503C291.59 248.009 292.038 247.652 292.573 247.434C293.108 247.216 293.702 247.164 294.354 247.28C294.88 247.373 295.332 247.554 295.709 247.823C296.087 248.088 296.371 248.418 296.562 248.811C296.756 249.206 296.835 249.64 296.801 250.115L295.488 249.882C295.474 249.544 295.358 249.235 295.141 248.955C294.927 248.675 294.605 248.497 294.175 248.421C293.799 248.354 293.452 248.395 293.134 248.543C292.82 248.689 292.553 248.93 292.332 249.266C292.111 249.599 291.957 250.012 291.87 250.505C291.78 251.011 291.78 251.46 291.868 251.854C291.956 252.248 292.122 252.571 292.366 252.822C292.613 253.073 292.928 253.233 293.309 253.301C293.565 253.346 293.805 253.341 294.029 253.284C294.256 253.225 294.457 253.12 294.629 252.967C294.805 252.816 294.944 252.62 295.045 252.381L296.358 252.613C296.23 253.053 296.013 253.427 295.707 253.736C295.401 254.044 295.026 254.263 294.581 254.392C294.14 254.521 293.645 254.537 293.098 254.44ZM301.543 255.794L302.567 250.016L300.908 249.722C300.514 249.652 300.191 249.689 299.939 249.834C299.687 249.978 299.534 250.199 299.481 250.497C299.429 250.792 299.488 251.047 299.657 251.263C299.83 251.477 300.1 251.616 300.467 251.681L302.609 252.061L302.416 253.153L300.273 252.773C299.762 252.682 299.335 252.52 298.992 252.285C298.653 252.048 298.41 251.755 298.264 251.407C298.121 251.059 298.087 250.672 298.163 250.245C298.24 249.809 298.409 249.451 298.67 249.171C298.934 248.889 299.274 248.695 299.69 248.589C300.108 248.484 300.582 248.478 301.112 248.572L304.039 249.091L302.81 256.019L301.543 255.794ZM296.996 254.988L299.57 251.834L300.95 252.079L298.376 255.232L296.996 254.988ZM310.86 257.591C310.189 257.472 309.639 257.218 309.209 256.828C308.782 256.436 308.487 255.948 308.324 255.364C308.161 254.78 308.141 254.14 308.264 253.446C308.389 252.742 308.631 252.145 308.991 251.653C309.352 251.159 309.8 250.803 310.335 250.584C310.87 250.366 311.464 250.315 312.116 250.431C312.642 250.524 313.094 250.705 313.471 250.973C313.849 251.239 314.133 251.568 314.324 251.962C314.518 252.356 314.597 252.791 314.563 253.265L313.25 253.032C313.236 252.695 313.12 252.386 312.903 252.105C312.689 251.826 312.367 251.647 311.937 251.571C311.561 251.504 311.214 251.545 310.896 251.694C310.582 251.839 310.315 252.08 310.094 252.417C309.873 252.75 309.719 253.163 309.632 253.656C309.542 254.161 309.542 254.611 309.63 255.005C309.718 255.399 309.884 255.721 310.128 255.972C310.375 256.224 310.69 256.384 311.071 256.451C311.327 256.497 311.567 256.491 311.791 256.435C312.018 256.376 312.219 256.27 312.391 256.118C312.567 255.966 312.706 255.771 312.807 255.531L314.12 255.764C313.992 256.203 313.775 256.577 313.469 256.886C313.163 257.195 312.788 257.413 312.343 257.542C311.902 257.672 311.407 257.688 310.86 257.591ZM320.586 254.999L320.379 256.167L316.626 255.501L316.833 254.333L320.586 254.999ZM317.723 251.518L316.495 258.446L315.173 258.212L316.402 251.284L317.723 251.518ZM322.04 252.284L320.811 259.212L319.494 258.978L320.723 252.05L322.04 252.284ZM325.509 260.189C324.859 260.074 324.319 259.825 323.887 259.441C323.456 259.058 323.154 258.574 322.981 257.992C322.809 257.409 322.786 256.76 322.913 256.044C323.04 255.326 323.286 254.721 323.649 254.23C324.012 253.739 324.462 253.388 324.999 253.176C325.536 252.964 326.129 252.916 326.778 253.031C327.428 253.146 327.968 253.396 328.4 253.779C328.831 254.163 329.133 254.648 329.305 255.233C329.477 255.819 329.499 256.471 329.372 257.19C329.245 257.906 329 258.507 328.637 258.995C328.275 259.483 327.825 259.833 327.288 260.044C326.751 260.256 326.158 260.304 325.509 260.189ZM325.714 259.058C326.135 259.133 326.503 259.083 326.82 258.91C327.136 258.736 327.393 258.476 327.591 258.13C327.792 257.784 327.931 257.389 328.01 256.944C328.089 256.502 328.093 256.084 328.023 255.69C327.957 255.294 327.806 254.958 327.569 254.684C327.333 254.409 327.004 254.234 326.583 254.16C326.159 254.084 325.787 254.135 325.467 254.311C325.151 254.487 324.892 254.75 324.69 255.099C324.492 255.445 324.354 255.839 324.276 256.281C324.197 256.726 324.191 257.146 324.257 257.539C324.327 257.933 324.481 258.265 324.718 258.537C324.958 258.809 325.29 258.983 325.714 259.058ZM330.268 260.889L331.497 253.961L334.37 254.471C335.152 254.61 335.742 254.886 336.14 255.301C336.538 255.713 336.687 256.203 336.586 256.771C336.514 257.177 336.328 257.476 336.027 257.668C335.726 257.86 335.355 257.958 334.914 257.964C335.217 258.055 335.485 258.198 335.717 258.394C335.949 258.588 336.121 258.823 336.233 259.1C336.349 259.378 336.375 259.69 336.314 260.036C336.249 260.402 336.097 260.71 335.857 260.959C335.618 261.206 335.304 261.376 334.915 261.472C334.529 261.564 334.084 261.566 333.579 261.477L330.268 260.889ZM331.736 259.986L333.779 260.349C334.113 260.408 334.388 260.375 334.606 260.249C334.824 260.123 334.957 259.924 335.005 259.65C335.063 259.328 335.013 259.059 334.856 258.842C334.699 258.622 334.454 258.482 334.121 258.423L332.077 258.061L331.736 259.986ZM332.252 257.073L333.872 257.36C334.124 257.405 334.347 257.407 334.54 257.367C334.737 257.327 334.895 257.25 335.014 257.135C335.138 257.017 335.215 256.866 335.248 256.683C335.295 256.415 335.223 256.187 335.03 255.998C334.837 255.808 334.55 255.68 334.168 255.612L332.562 255.327L332.252 257.073ZM339.451 262.676C339.012 262.598 338.63 262.447 338.304 262.222C337.978 261.993 337.74 261.704 337.588 261.355C337.439 261.006 337.404 260.604 337.485 260.15C337.554 259.759 337.686 259.451 337.882 259.225C338.077 258.999 338.315 258.835 338.597 258.733C338.879 258.631 339.184 258.571 339.513 258.551C339.842 258.532 340.174 258.532 340.509 258.551C340.932 258.577 341.276 258.597 341.54 258.613C341.804 258.626 342.002 258.607 342.132 258.555C342.262 258.504 342.341 258.397 342.37 258.235L342.375 258.203C342.445 257.809 342.388 257.484 342.204 257.228C342.023 256.973 341.714 256.806 341.278 256.729C340.824 256.649 340.449 256.686 340.151 256.841C339.858 256.993 339.639 257.183 339.497 257.409L338.281 256.895C338.506 256.501 338.786 256.2 339.12 255.993C339.458 255.783 339.827 255.653 340.227 255.603C340.627 255.55 341.036 255.56 341.454 255.634C341.731 255.683 342.018 255.769 342.316 255.89C342.617 256.008 342.888 256.177 343.129 256.397C343.372 256.617 343.552 256.901 343.67 257.251C343.789 257.598 343.803 258.024 343.713 258.529L342.897 263.129L341.58 262.896L341.748 261.949L341.694 261.939C341.576 262.098 341.415 262.246 341.211 262.384C341.006 262.521 340.758 262.621 340.464 262.684C340.171 262.747 339.833 262.744 339.451 262.676ZM339.936 261.646C340.309 261.712 340.641 261.695 340.932 261.594C341.226 261.495 341.463 261.338 341.643 261.125C341.827 260.91 341.943 260.665 341.992 260.391L342.15 259.498C342.094 259.538 341.993 259.566 341.847 259.584C341.705 259.599 341.544 259.606 341.364 259.605C341.185 259.602 341.01 259.597 340.84 259.592C340.671 259.583 340.53 259.577 340.416 259.572C340.148 259.559 339.9 259.572 339.669 259.612C339.442 259.652 339.25 259.735 339.095 259.859C338.943 259.981 338.846 260.162 338.803 260.403C338.744 260.736 338.822 261.011 339.039 261.226C339.255 261.438 339.555 261.578 339.936 261.646Z\",\"fill\",\"#2B3134\"],[\"d\",\"M224.612 238.826L225.383 234.478L224.514 235.085C224.306 235.23 224.019 235.179 223.873 234.971C223.727 234.762 223.778 234.475 223.987 234.329L225.767 233.085C225
```
