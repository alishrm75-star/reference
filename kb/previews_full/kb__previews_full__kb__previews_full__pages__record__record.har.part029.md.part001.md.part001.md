### kb/previews_full/kb__previews_full__pages__record__record.har.part029.md.part001.md (part 001)

```md
### kb/previews_full/pages__record__record.har.part029.md (part 001)

```md
### pages/record/record.har (part 029)

```har
R,oc as x,pc as u,qa as K,x as $,y as E,yc as Z,zb as G,zc as ee}from\"./chunk-KO722YSM.js\";import{g as r}from\"./chunk-JV5WWF5Q.js\";function ke(n,i){if(n&1){let a=R();g(0,\"app-service-item\",1),c(1,\"secondsToTime\"),x(\"showInfo\",function(){let t=w(a).$implicit,e=u();return I(!e.disabled&&e.onServiceClick(t))})(\"iconClick\",function(){let t=w(a).$implicit,e=u();return I(!e.disabled&&e.onRemoveClick(t))}),C()}if(n&2){let a=i.$implicit,o=u();J(\"disabled\",o.disabled),v(\"service\",a)(\"currency\",o.currencyShortTitle)(\"isRecordChargeActive\",o.isRecordChargeActive)(\"showServiceTags\",o.showPaymentTags)(\"iconName\",o.canRemove?\"cross\":\"\")(\"infoIconVisible\",!0)(\"seanceLength\",s(1,12,a.seance_length))(\"showDiscountTag\",o.showDiscountTag)(\"showTrialVisitTag\",o.showTrialVisitTag),f(\"data-locator\",\"service_item_\"+a.id)}}var We=(()=>{let i=class i{constructor(o,t){r(this,\"payment\");r(this,\"tracking\");r(this,\"canRemove\");r(this,\"services\");r(this,\"currencyShortTitle\");r(this,\"disabled\");r(this,\"isRecordChargeActive\");r(this,\"showPaymentTags\",!0);r(this,\"optionalPaymentAvailable\",!1);r(this,\"showDiscountTag\",!0);r(this,\"showTrialVisitTag\",!1);r(this,\"clickService\",new O);r(this,\"remove\",new O);this.payment=o,this.tracking=t}ngOnDestroy(){this.payment.setAllowedToPayStatus(!1)}trackByServiceId(o,t){return t.id}onServiceClick(o){this.clickService.emit(o)}onRemoveClick(o){this.remove.emit(o)}};r(i,\"\\u0275fac\",function(t){return new(t||i)(b(_e),b(le))}),r(i,\"\\u0275cmp\",M({type:i,selectors:[[\"app-ordered-services-list\"]],inputs:{canRemove:\"canRemove\",services:\"services\",currencyShortTitle:\"currencyShortTitle\",disabled:\"disabled\",isRecordChargeActive:\"isRecordChargeActive\",showPaymentTags:\"showPaymentTags\",optionalPaymentAvailable:\"optionalPaymentAvailable\",showDiscountTag:\"showDiscountTag\",showTrialVisitTag:\"showTrialVisitTag\"},outputs:{clickService:\"clickService\",remove:\"remove\"},decls:1,vars:2,consts:[[\"class\",\"service-item frame\",3,\"service\",\"currency\",\"isRecordChargeActive\",\"showServiceTags\",\"iconName\",\"infoIconVisible\",\"seanceLength\",\"disabled\",\"showDiscountTag\",\"showTrialVisitTag\",\"showInfo\",\"iconClick\",4,\"ngFor\",\"ngForOf\",\"ngForTrackBy\"],[1,\"service-item\",\"frame\",3,\"showInfo\",\"iconClick\",\"service\",\"currency\",\"isRecordChargeActive\",\"showServiceTags\",\"iconName\",\"infoIconVisible\",\"seanceLength\",\"showDiscountTag\",\"showTrialVisitTag\"]],template:function(t,e){t&1&&h(0,ke,2,14,\"app-service-item\",0),t&2&&v(\"ngForOf\",e.services)(\"ngForTrackBy\",e.trackByServiceId)},dependencies:[ne,V,B],styles:['@charset \"UTF-8\";.service-item[_ngcontent-%COMP%]{cursor:default;display:block}.service-item[_ngcontent-%COMP%]:not(:last-child){padding-bottom:12px}.service-item.frame[_ngcontent-%COMP%]{padding:8px 0}.disabled[_ngcontent-%COMP%]{cursor:default}'],changeDetection:0}));let n=i;return n})();var Qe=(()=>{let i=class i{};r(i,\"\\u0275fac\",function(t){return new(t||i)}),r(i,\"\\u0275mod\",q({type:i})),r(i,\"\\u0275inj\",z({imports:[ce,Ce,ge]}));let n=i;return n})();var Pe=(n,i)=>i.id,be=n=>[n],Re=(n,i)=>({selectedServiceId:n,subServiceLinkId:i});function De(n,i){if(n&1){let a=R();g(0,\"img\",5),x(\"load\",function(){w(a);let t=u();return I(t.updateView())}),C()}n&2&&v(\"src\",i,G)}function Be(n,i){if(n&1&&(P(0,\"app-services-card-with-master\",7),c(1,\"async\"),c(2,\"async\")),n&2){let a,o,t=i.$implicit,e=u(2);v(\"services\",F(11,be,t))(\"serviceStaff\",(a=s(1,7,e.masters$))==null?null:a.linkedServiceMasterMap.get(t.id))(\"titleMarginBottom\",0)(\"mayChangeMaster\",!1)(\"tempSubInfo\",ie(13,Re,(o=s(2,9,e.service$))==null?null:o.mainService.id,t.id))(\"masterInfoViewDisabled\",!0),f(\"data-locator\",\"service_card_with_master_\"+t.id)}}function Ve(n,i){n&1&&(g(0,\"p\",8),Z(1),C()),n&2&&(f(\"data-locator\",\"service_description\"),y(),ee(i))}function $e(n,i){if(n&1&&(P(0,\"app-service-item\",6),c(1,\"async\"),c(2,\"async\"),c(3,\"async\"),c(4,\"secondsToTime\"),c(5,\"async\"),Q(6,Be,3,16,\"app-services-card-with-master\",7,Pe),c(8,\"async\"),h(9,Ve,2,2,\"p\",8),c(10,\"async\")),n&2){let a,o,t,e=u();v(\"service\",s(1,6,e.service$).mainService)(\"currency\",s(2,8,e.company$).currency_short_title)(\"showServiceTags\",!1)(\"seanceLength\",s(4,12,(a=s(3,10,e.service$))==null?null:a.mainServiceParams.seance_length)),f(\"data-locator\",\"service_item_\"+((o=s(5,14,e.service$))==null?null:o.mainService.id)),y(6),X(s(8,16,e.service$).linkedServicesParams),y(3),k((t=s(10,18,e.service$).mainServiceParams.comment)?9:-1,t)}}function Oe(n,i){if(n&1&&(P(0,\"app-services-card-with-master\",2),c(1,\"async\"),c(2,\"async\"),c(3,\"async\"),c(4,\"price\")),n&2){let a,o=u();v(\"services\",F(18,be,s(1,8,o.service$).mainServiceParams))(\"serviceStaff\",(a=s(2,10,o.masters$))==null?null:a.master)(\"titleMarginBottom\",0)(\"mayChangeMaster\",!1)(\"masterInfoViewDisabled\",!0)(\"serviceCommentVisible\",!0)(\"servicePrice\",te(4,14,o.servicePrice,s(3,12,o.company$).currency_short_title,!0)),f(\"data-locator\",\"service_card_with_master\")}}var hi=(()=>{let i=class i extends me{constructor(t,e){super(e);r(this,\"cdr\");r(this,\"modalService\");r(this,\"serviceId\");r(this,\"currentRecord\");r(this,\"masterId\");r(this,\"store\",Y(se));r(this,\"servicePrice\");r(this,\"isCurrentRecordServiceComposite\",!1);r(this,\"destroy$\",new j(1));r(this,\"company$\",this.store.select(D.currentCompany.getCurrentCompany).pipe(W(),K(this.destroy$)));r(this,\"service$\",this.store.select(D.services.getServices).pipe(U(1),$(t=>{var _,T;let e=t.find(l=>l.id===this.serviceId),m=(_=this.currentRecord)==null?void 0:_.servicesDict[Number(this.serviceId)],p=[];if(this.currentRecord&&!e){if(Object.keys(this.currentRecord.servicesDict).length>1){this.isCurrentRecordServiceComposite=!0;for(let l of this.currentRecord.staffsWithServices)p.push(l.services[0])}this.servicePrice={price_max:m.price_max,price_min:m.price_min}}else if(e.is_composite)for(let l of e.composite_details.links)p.push(t.find(d=>d.id===l.service_id));else this.servicePrice={price_max:e.price_max,price_min:e.price_min};return{mainService:e||m,mainServiceParams:A(e||m,(T=this.currentRecord)==null?void 0:T.length),linkedServices:p,linkedServicesParams:p.map(l=>{var d;return A(l,(d=this.currentRecord)==null?void 0:d.servicesDict[Number(l.id)].seance_length)})}})));r(this,\"masters$\",E([this.service$,this.store.select(D.masters.getMasters).pipe(L(t=>!!t))]).pipe($(([t,e])=>{var T,l;let m=t.mainService,p=new Map,_;if(m.is_composite||this.isCurrentRecordServiceComposite)Object.entries((T=this.currentRecord)==null?void 0:T.recordDetailsInfo[m.id]).forEach(([,d])=>{var N;let S=e.find(we=>we.id===d.masterId),Te=S||((N=this.currentRecord)==null?void 0:N.staffsDict[Number(d.masterId)]);p.set(d.subServiceId,Te)});else{let d=e.find(S=>S.id===this.masterId)?e.find(S=>S.id===this.masterId):(l=this.currentRecord)==null?void 0:l.staffsDict[Number(this.masterId)];_=this.masterId!==ve?d:void 0}return{master:_,linkedServiceMasterMap:p}})));this.cdr=t,this.modalService=e}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateView(){this.cdr.detectChanges()}closeModal(){this.modalService.closeModal()}};r(i,\"\\u0275fac\",function(e){return new(e||i)(b(re),b(pe))}),r(i,\"\\u0275cmp\",M({type:i,selectors:[[\"app-service-info\"]],inputs:{serviceId:\"serviceId\",currentRecord:\"currentRecord\",masterId:\"masterId\"},features:[H],decls:9,vars:10,consts:[[\"alt\",\"\",\"appServiceImage\",\"\",\"data-locator\",\"modal_service_logo\",1,\"image\",3,\"src\"],[\"cutType\",\"cut-top\",\"widthType\",\"full-width\",1,\"substrate\"],[3,\"services\",\"serviceStaff\",\"titleMarginBottom\",\"mayChangeMaster\",\"masterInfoViewDisabled\",\"serviceCommentVisible\",\"servicePrice\"],[1,\"bottom-button-panel\"],[1,\"bottom-button-panel_close-button\",3,\"click\",\"title\"],[\"alt\",\"\",\"appServiceImage\",\"\",\"data-locator\",\"modal_service_logo\",1,\"image\",3,\"load\",\"src\"],[1,\"complex-service-item_title\",3,\"service\",\"currency\",\"showServiceTags\",\"seanceLength\"],[1,\"complex-service-card-instance\",3,\"services\",\"serviceStaff\",\"titleMarginBottom\",\"mayChangeMaster\",\"tempSubInfo\",\"masterInfoViewDisabled\"],[1,\"complex-service-item_comment\"]],template:function(e,m){if(e&1&&(h(0,De,1,1,\"img\",0),c(1,\"async\"),g(2,\"app-substrate\",1),h(3,$e,11,20),c(4,\"async\"),h(5,Oe,5,20,\"app-services-card-with-master\",2),C(),g(6,\"div\",3)(7,\"ui-kit-button\",4),c(8,\"translate\"),x(\"click\",function(){return m.closeModal()}),C()()),e&2){let p,_;k((p=(p=s(1,4,m.service$))==null?null:p.mainService.image)?0:-1,p),y(3),k((_=s(4,6,m.service$))!=null&&_.mainService.is_composite||m.isCurrentRecordServiceComposite?3:5),y(4),v(\"title\",s(8,8,\"Close\")),f(\"data-locator\",\"close_service_info_modal_button\")}},dependencies:[fe,he,Se,V,de,oe,B,ue,ae],styles:[\"[_nghost-%COMP%]{display:block;overflow:auto}.image[_ngcontent-%COMP%]{width:100%;background-repeat:no-repeat}.substrate[_ngcontent-%COMP%]{padding-bottom:8px!important;margin-bottom:0!important}.complex-service-item_title[_ngcontent-%COMP%]{margin-bottom:24px}.complex-service-item_comment[_ngcontent-%COMP%]{padding-top:8px}.complex-service-card-instance[_ngcontent-%COMP%]{display:block;margin-bottom:24px}.bottom-button-panel[_ngcontent-%COMP%]{height:100px;margin-top:40px}.bottom-button-panel_close-button[_ngcontent-%COMP%]{z-index:200;position:fixed;bottom:50px;left:16px;right:16px}\"],changeDetection:0}));let n=i;return n})();export{We as a,Qe as b,hi as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3682,
          "_transferSize": 4342,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.762Z",
        "time": 54.66400005389005,
        "timings": {
          "blocked": 16.575000014685095,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.7309999999999981,
          "wait": 31.915000037372113,
          "receive": 5.443000001832843,
          "_blocked_queueing": 1.1180000146850944,
          "_blocked_proxy": 11.48,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490171",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-X2IVCNZ3.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4120"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d2466e23bcb8-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-2f71\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "blc02-htz"
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
              "value": "24ed1bab9ea629f105ff0519dfca477d"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 12145,
            "mimeType": "application/javascript",
            "compression": 8144,
            "text": "import{F as N,g as ue,j as z}from\"./chunk-IGSDBEZN.js\";import{a as _e,k as H}from\"./chunk-TX67VJHB.js\";import{Ab as A,Bb as $,Dc as F,Eb as W,Fc as le,If as de,Tc as pe,Wc as fe,Yd as K,ch as R,e as re,la as ae,nd as me,rc as j,tc as ce,uc as B,ui as V,vc as se}from\"./chunk-6FGVQ7PR.js\";import{Ac as O,Fa as L,Fb as c,Gb as v,J,Ka as S,Kc as k,Pb as te,Pc as T,Qc as U,Sc as ne,T as Q,Ub as C,Va as u,W as X,Wa as g,Wb as M,Xb as d,Yb as ie,Zb as h,ab as ee,ac as x,c as q,cb as w,cc as D,dc as E,ec as l,fc as s,gb as m,gc as b,kc as y,oc as I,od as oe,pc as p,yc as _,za as Z,zc as P}from\"./chunk-KO722YSM.js\";import{g as n,i as G}from\"./chunk-JV5WWF5Q.js\";var ge=(()=>{let t=class t{constructor(){n(this,\"clickable\",!1);n(this,\"title\",\"\");n(this,\"forwardIcon\",\"forward\")}};n(t,\"\\u0275fac\",function(e){return new(e||t)}),n(t,\"\\u0275cmp\",S({type:t,selectors:[[\"app-no-staff-tile\"]],inputs:{clickable:\"clickable\",title:\"title\",forwardIcon:\"forwardIcon\"},standalone:!0,features:[k],decls:7,vars:6,consts:[[1,\"staff-header\"],[\"left\",\"\",1,\"staff-icon-container\"],[1,\"staff-icon\",3,\"name\"],[\"center\",\"\",1,\"staff-main\"],[\"right\",\"\",1,\"forward-icon-container\"],[\"role\",\"button\",1,\"forward-icon\",3,\"name\"]],template:function(e,a){e&1&&(l(0,\"ui-kit-simple-cell\",0)(1,\"div\",1),b(2,\"ui-kit-svg-icon\",2),s(),l(3,\"div\",3),_(4),s(),l(5,\"div\",4),b(6,\"ui-kit-svg-icon\",5),s()()),e&2&&(h(\"clickable\",a.clickable),c(2),d(\"name\",\"menu/specialist\"),c(2),P(a.title),c(2),d(\"name\",a.forwardIcon),M(\"data-locator\",\"forward_icon\"))},dependencies:[j,W,H,_e],styles:['@charset \"UTF-8\";.staff-header[_ngcontent-%COMP%]   .staff-icon-container[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;justify-content:center;align-items:center;background-color:var(--y-core-color-surface-tertiary);border-radius:50%}.staff-header[_ngcontent-%COMP%]   .staff-icon-container[_ngcontent-%COMP%]   .staff-icon[_ngcontent-%COMP%]{width:24px;height:24px;color:var(--y-core-color-icon-primary)}.staff-header[_ngcontent-%COMP%]   .staff-main[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--y-core-color-text-primary);align-self:center}.forward-icon-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer;align-self:center}.forward-icon-container[_ngcontent-%COMP%]   .forward-icon[_ngcontent-%COMP%]{color:var(--y-core-color-icon-secondary)}'],changeDetection:0}));let i=t;return i})();var ve=(()=>{let t=class t{constructor(){n(this,\"store\",L(R));n(this,\"trackingService\",L(le))}get selectedParallelComplexId(){var o;return(o=this.store.selectSnapshot(V.order.getSelectedServices).find(e=>e.composite_details))==null?void 0:o.id}setServiceComplexPage(){this.trackingService.setPage(\"service_complex\")}trackOpenPageAction(){this.selectedParallelComplexId&&this.trackingService.track({type:F.Action.pageView,part:{number:this.selectedParallelComplexId}})}trackSelectMasterAction(o,e){if(!this.selectedParallelComplexId)return;let a=this.store.selectSnapshot(V.masters.getMasterById(o));this.trackingService.track({type:F.Action.select,element:{type:\"master\",name:o===K?\"master.skip_select_master\":a.name,id:o},part:{id:e,type:\"service\",number:this.selectedParallelComplexId}})}trackOpenMasterSelectorModal(o){this.selectedParallelComplexId&&this.trackingService.track({type:F.Action.view,element:{name:\"master_list\"},part:{type:\"service\",id:o,number:this.selectedParallelComplexId}})}trackClickToMasterSelector(o){this.selectedParallelComplexId&&this.trackingService.track({type:F.Action.click,element:{type:\"button\",name:\"button_choose_master\"},part:{id:o,type:\"service\",number:this.selectedParallelComplexId}})}};n(t,\"\\u0275fac\",function(e){return new(e||t)}),n(t,\"\\u0275prov\",Z({token:t,factory:t.\\u0275fac,providedIn:\"root\"}));let i=t;return i})();var Ie=(i,t)=>t.id;function ke(i,t){if(i&1){let r=y();l(0,\"app-staff-tile\",2),I(\"click\",function(){let e=u(r).$implicit,a=p();return g(a.toggleMaster(e.id))})(\"showInfo\",function(){let e=u(r).$implicit,a=p();return g(a.masterInfoClick(e.id))}),s()}if(i&2){let r=t.$implicit,o=p();h(\"any-staff\",r.id===o.ANY_MASTER_ID),d(\"isSelected\",r.id===o.selectedMasterId)(\"staff\",r)}}function we(i,t){if(i&1){let r=y();l(0,\"div\",1)(1,\"ui-kit-button\",3),I(\"click\",function(){u(r);let e=p();return g(e.selectMaster())}),_(2),T(3,\"translate\"),s()()}i&2&&(c(2),O(\" \",U(3,1,\"done\"),\" \"))}var Ce=(()=>{let t=class t extends se{constructor(e){super(e);n(this,\"modalService\");n(this,\"staffList\",[]);n(this,\"selectedMasterId\");n(this,\"openMasterInfo\",new w);n(this,\"ANY_MASTER_ID\",K);this.modalService=e}toggleMaster(e){this.selectedMasterId=e}selectMaster(){this.close(this.selectedMasterId)}masterInfoClick(e){this.modalService.closeModal(),this.openMasterInfo.emit(e)}};n(t,\"\\u0275fac\",function(a){return new(a||t)(v(B))}),n(t,\"\\u0275cmp\",S({type:t,selectors:[[\"app-four-hands-select-staff-modal\"]],outputs:{openMasterInfo:\"openMasterInfo\"},standalone:!0,features:[te,k],decls:3,vars:1,consts:[[1,\"staff\",3,\"any-staff\",\"isSelected\",\"staff\"],[1,\"footer\"],[1,\"staff\",3,\"click\",\"showInfo\",\"isSelected\",\"staff\"],[1,\"fixed-button\",3,\"click\"]],template:function(a,f){a&1&&(D(0,ke,1,4,\"app-staff-tile\",0,Ie),C(2,we,4,3,\"div\",1)),a&2&&(E(f.staffList),c(2),x(f.selectedMasterId?2:-1))},dependencies:[N,z,fe,pe,$,A],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;padding-bottom:60px}[_nghost-%COMP%]   .staff[_ngcontent-%COMP%]{margin:24px 0;padding:8px 16px}[_nghost-%COMP%]   .staff[_ngcontent-%COMP%]:first-of-type{margin-top:2px}[_nghost-%COMP%]   .staff[_ngcontent-%COMP%]:first-of-type + *[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .staff.any-staff[_ngcontent-%COMP%]{margin-bottom:2px}'],changeDetection:0}));let i=t;return i})();var be=(i,t)=>t.id;function Pe(i,t){if(i&1&&(l(0,\"div\",9),_(1),s()),i&2){let r=p(2);M(\"data-locator\",\"service_price\"),c(),O(\" \",r.servicePrice(),\" \")}}function Oe(i,t){if(i&1&&(l(0,\"p\",5),_(1),T(2,\"secondsToTime\"),s()),i&2){let r=p().$implicit;M(\"data-locator\",\"service_seance_length\"),c(),O(\" \",ne(2,2,r.seance_length,!1,!0),\" \")}}function Te(i,t){if(i&1){let r=y();l(0,\"app-no-staff-tile\",10),T(1,\"translate\"),I(\"click\",function(){u(r);let e=p(2);return g(e.openSelectMasterModal())}),s()}i&2&&d(\"title\",U(1,3,\"steps.select_staff\"))(\"clickable\",!0)(\"forwardIcon\",\"common/arrow-right\")}function Fe(i,t){i&1&&b(0,\"ui-kit-svg-icon\",13)}function Ve(i,t){if(i&1){let r=y();l(0,\"app-staff-tile\",11),I(\"showInfo\",function(){u(r);let e=p(2);return g(e.openMasterInfo.emit({masterId:e.serviceStaff().id}))})(\"click\",function(){u(r);let e=p(2);return g(e.openSelectMasterModal())}),C(1,Fe,1,0,\"ui-kit-svg-icon\",12),s()}if(i&2){let r=p(2);h(\"fixed-content\",!r.mayChangeMaster()&&!r.masterInfoViewDisabled()),d(\"staff\",r.serviceStaff())(\"infoVisible\",!r.mayChangeMaster()&&!r.masterInfoViewDisabled()),c(),d(\"ngIf\",r.mayChangeMaster())}}function De(i,t){if(i&1&&(l(0,\"p\",8),_(1),s()),i&2){let r=p().$implicit;M(\"data-locator\",\"service_description\"),c(),P(r.comment)}}function Ee(i,t){if(i&1&&(l(0,\"div\",1)(1,\"div\",2)(2,\"div\",3)(3,\"p\"),_(4),s()(),C(5,Pe,2,2,\"div\",4),s(),C(6,Oe,3,6,\"p\",5),s(),C(7,Te,2,5,\"app-no-staff-tile\",6)(8,Ve,2,5,\"app-staff-tile\",7)(9,De,2,2,\"p\",8)),i&2){let r=t.$implicit,o=t.$index,e=p();ie(\"margin-bottom\",e.titleMarginBottom(),\"px\"),c(3),h(\"title-with-padding\",o>0),M(\"data-locator\",\"service_title\"),c(),P(r.title),c(),d(\"ngIf\",e.servicePrice),c(),x(r.seance_length?6:-1),c(),x(!e.serviceStaff()&&!e.masterInfoViewDisabled()?7:-1),c(),x(e.serviceStaff()?8:-1),c(),x(e.serviceCommentVisible()&&r.comment?9:-1)}}var It=(()=>{let t=class t{constructor(o,e,a,f){n(this,\"modalService\");n(this,\"destroyRef\");n(this,\"store\");n(this,\"complexTrackingService\");n(this,\"services\",m([]));n(this,\"availableMasters\",m([]));n(this,\"titleMarginBottom\",m(0));n(this,\"serviceStaff\",m(null));n(this,\"mayChangeMaster\",m(!0));n(this,\"tempSubInfo\",m(null));n(this,\"masterInfoViewDisabled\",m(!1));n(this,\"serviceCommentVisible\",m(!1));n(this,\"servicePrice\",m(null));n(this,\"masterSelected\",new w);n(this,\"openMasterInfo\",new w);n(this,\"modalTitle\",oe(()=>{let o=this.services();return o.reduce((e,a,f)=>e+\"\".concat(a.title).concat(f===o.length-1?\"\":\", \"),\"\")}));this.modalService=o,this.destroyRef=e,this.store=a,this.complexTrackingService=f}openSelectMasterModal(){return G(this,null,function*(){var a;if(!this.mayChangeMaster())return;this.complexTrackingService.trackClickToMasterSelector(this.services()[0].id),this.tempSubInfo()&&(this.store.dispatch(new de(this.tempSubInfo())),yield me(this.store.select(V.masters.getMastersForCompositesLoading(!0)).pipe(J(f=>!f),X(10))));let o=this.modalService.openModal({component:Ce,componentData:{staffList:this.availableMasters(),selectedMasterId:(a=this.serviceStaff())==null?void 0:a.id},params:{title:this.modalTitle(),modalType:ce.withTitle}});this.complexTrackingService.trackOpenMasterSelectorModal(this.services()[0].id),o.instance.openMasterInfo.pipe(Q(1),ae(this.destroyRef)).subscribe(f=>{this.openMasterInfo.emit({masterId:f})});let e=yield o.instance.result.catch(q);e&&this.masterSelected.emit(e)})}};n(t,\"\\u0275fac\",function(e){return new(e||t)(v(B),v(ee),v(R),v(ve))}),n(t,\"\\u0275cmp\",S({type:t,selectors:[[\"app-services-card-with-master\"]],inputs:{services:[1,\"services\"],availableMasters:[1,\"availableMasters\"],titleMarginBottom:[1,\"titleMarginBottom\"],serviceStaff:[1,\"serviceStaff\"],mayChangeMaster:[1,\"mayChangeMaster\"],tempSubInfo:[1,\"tempSubInfo\"],masterInfoViewDisabled:[1,\"masterInfoViewDisabled\"],serviceCommentVisible:[1,\"serviceCommentVisible\"],servicePrice:[1,\"servicePrice\"]},outputs:{masterSelected:\"masterSelected\",openMasterInfo:\"openMasterInfo\"},standalone:!0,features:[k],decls:3,vars:0,consts:[[1,\"content\"],[1,\"title\"],[1,\"info\"],[1,\"text\"],[\"class\",\"price\",4,\"ngIf\"],[1,\"duration-info\",\"title-description\"],[1,\"no-staff-block\",\"pointer\",3,\"title\",\"clickable\",\"forwardIcon\"],[1,\"staff-block\",\"pointer\",3,\"staff\",\"infoVisible\",\"fixed-content\"],[1,\"comment\"],[1,\"price\"],[1,\"no-staff-block\",\"pointer\",3,\"click\",\"title\",\"clickable\",\"forwardIcon\"],[1,\"staff-block\",\"pointer\",3,\"showInfo\",\"click\",\"staff\",\"infoVisible\"],[\"sub-actions\",\"\",\"name\",\"edit\",\"class\",\"pen-icon\",4,\"ngIf\"],[\"sub-actions\",\"\",\"name\",\"edit\",1,\"pen-icon\"]],template:function(e,a){e&1&&(l(0,\"div\",0),D(1,Ee,10,11,null,null,be),s()),e&2&&(c(),E(a.services()))},dependencies:[N,z,ue,re,j,W,H,ge,$,A],styles:['@charset \"UTF-8\";.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:row}.title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;display:flex;flex-direction:column;overflow:hidden}.title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title-with-padding[_ngcontent-%COMP%]{margin-top:8px}.title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--y-core-color-text-primary);margin-left:auto}.title-description.duration-info[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:var(--y-core-color-text-secondary)}.duration-info[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--y-core-color-text-primary)}.comment[_ngcontent-%COMP%]{padding-top:12px}.pen-icon[_ngcontent-%COMP%]{width:24px;height:24px;color:var(--y-core-color-icon-secondary);cursor:pointer}  .forward-icon{color:var(--y-core-color-icon-secondary)!important}.no-staff-block[_ngcontent-%COMP%]{font-size:24px}.staff-block[_ngcontent-%COMP%], .no-staff-block[_ngcontent-%COMP%]{margin-top:4px}.fixed-content[_ngcontent-%COMP%]{display:block;padding:16px;background-color:var(--y-core-color-surface-secondary);border-radius:20px;border:1px solid var(--y-core-color-stroke-primary)}'],changeDetection:0}));let i=t;return i})();export{ge as a,ve as b,It as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 4001,
          "_transferSize": 4661,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.762Z",
        "time": 54.81799994595349,
        "timings": {
          "blocked": 19.429999966725706,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.22300000000000253,
          "wait": 30.043999984540044,
          "receive": 5.120999994687736,
          "_blocked_queueing": 1.921999966725707,
          "_blocked_proxy": 16.607,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490211",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-BQ5YZNCA.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "3347"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d2466a63bcbe-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-b86\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "blc02-htz"
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
              "value": "c586e2b96a927553f3ceb4a569b55480"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 2950,
            "mimeType": "application/javascript",
            "compression": 1785,
            "text": "import{e as v}from\"./chunk-6FGVQ7PR.js\";import{Fb as t,Ka as x,Kc as h,Ub as g,Wb as p,Xb as _,Zb as f,ec as l,fc as s,pc as C,yc as r,zc as d}from\"./chunk-KO722YSM.js\";import{g as a}from\"./chunk-JV5WWF5Q.js\";function u(e,i){if(e&1&&(l(0,\"div\",3)(1,\"span\",4),r(2),s(),l(3,\"span\",5),r(4),s()()),e&2){let o=C();t(),p(\"data-locator\",\"prepayment_block_title\"),t(),d(o.prepaidText),t(),p(\"data-locator\",\"prepayment_block_cost\"),t(),d(o.prepaidCost)}}function T(e,i){if(e&1&&(l(0,\"div\",6)(1,\"span\",4),r(2),s(),l(3,\"span\",5),r(4),s()()),e&2){let o=C();t(),p(\"data-locator\",\"paid_block_title\"),t(),d(o.paidText),t(),p(\"data-locator\",\"paid_block_cost\"),t(),d(o.paidCost)}}function y(e,i){if(e&1&&(l(0,\"div\",7)(1,\"span\",4),r(2),s(),l(3,\"span\",5),r(4),s()()),e&2){let o=C();t(),p(\"data-locator\",\"summary_info_header\"),t(),d(o.totalText),t(),p(\"data-locator\",\"summary_info_price\"),t(),d(o.totalCost)}}var M=(()=>{let i=class i{constructor(){a(this,\"totalCost\");a(this,\"prepaidCost\");a(this,\"paidCost\");a(this,\"totalText\");a(this,\"prepaidText\");a(this,\"paidText\")}get isTotalPrepaid(){return!!this.totalCost&&!!this.prepaidCost}get isTotalPaid(){return!!this.totalCost&&!!this.paidCost}get isSingleInput(){return[this.totalCost,this.prepaidCost,this.paidCost].filter(c=>(c==null?void 0:c.length)>0).length===1}};a(i,\"\\u0275fac\",function(m){return new(m||i)}),a(i,\"\\u0275cmp\",x({type:i,selectors:[[\"ui-kit-total-cost\"]],hostVars:6,hostBindings:function(m,n){m&2&&f(\"total-prepaid\",n.isTotalPrepaid)(\"total-paid\",n.isTotalPaid)(\"single\",n.isSingleInput)},inputs:{totalCost:\"totalCost\",prepaidCost:\"prepaidCost\",paidCost:\"paidCost\",totalText:\"totalText\",prepaidText:\"prepaidText\",paidText:\"paidText\"},standalone:!0,features:[h],decls:3,vars:3,consts:[[\"class\",\"item item__prepaid\",4,\"ngIf\"],[\"class\",\"item item__paid\",4,\"ngIf\"],[\"class\",\"item item__total\",4,\"ngIf\"],[1,\"item\",\"item__prepaid\"],[1,\"item__title\"],[1,\"item__cost\"],[1,\"item\",\"item__paid\"],[1,\"item\",\"item__total\"]],template:function(m,n){m&1&&g(0,u,5,4,\"div\",0)(1,T,5,4,\"div\",1)(2,y,5,4,\"div\",2),m&2&&(_(\"ngIf\",n.prepaidCost),t(),_(\"ngIf\",n.paidCost),t(),_(\"ngIf\",n.totalCost))},dependencies:[v],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--y-core-color-text-primary)}[_nghost-%COMP%]   .item__total[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2){padding-top:2px;color:var(--y-core-color-text-secondary)}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3){color:var(--y-core-color-text-secondary)}[_nghost-%COMP%]   .item__cost[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   .item__title[_ngcontent-%COMP%]{padding-right:8px}'],changeDetection:0}));let e=i;return e})();export{M as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 1165,
          "_transferSize": 1824,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.762Z",
        "time": 53.915999946184456,
        "timings": {
          "blocked": 20.323999971911313,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.31999999999999673,
          "wait": 30.893000020183624,
          "receive": 2.3789999540895224,
          "_blocked_queueing": 2.839999971911311,
          "_blocked_proxy": 16.958,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "492762",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-7HQ4EX32.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4120"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d2466ffcbcb5-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-1f10\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "2fe07a834546f354c4b02ad61a4c24cd"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 7952,
            "mimeType": "application/javascript",
            "compression": 5172,
            "text": "import{E as B,F as H,i as W}from\"./chunk-IGSDBEZN.js\";import{a as K,k as z}from\"./chunk-TX67VJHB.js\";import{m as L,o as _,t as $}from\"./chunk-IV3KQJLV.js\";import{Eb as U,Hg as q,d as R,e as D,p as F,rc as j}from\"./chunk-6FGVQ7PR.js\";import{Aa as O,Ac as h,Fa as C,Fb as o,Ka as P,La as I,Nc as V,Oc as A,Pc as N,Sc as E,Ua as T,Ub as v,Va as x,Wa as y,Wb as m,Xb as s,ac as d,cb as w,ec as l,fc as a,gc as u,jc as M,kc as S,oc as b,pc as f,yc as g,zc as k}from\"./chunk-KO722YSM.js\";import{g as t}from\"./chunk-JV5WWF5Q.js\";var J=e=>({serviceId:e}),Q=(e,i)=>({containerType:e,containerOptions:i});function X(e,i){e&1&&g(0,\" \\xA0\\xB7 \")}function Y(e,i){if(e&1&&(l(0,\"span\",5),v(1,X,1,0),g(2),a()),e&2){let n=f();m(\"data-locator\",\"service_count\"),o(),d(n.serviceInformation?1:-1),o(),h(\" \",n.serviceCount,\" \")}}function Z(e,i){if(e&1&&u(0,\"ui-kit-tag\",14),e&2){let n=i.$implicit;s(\"label\",n.tagLabel)(\"iconName\",n.tagIconName)(\"tagType\",n.tagType),m(\"data-locator\",\"service_label\")}}function ee(e,i){if(e&1&&(l(0,\"div\",11),v(1,Z,1,4,\"ui-kit-tag\",12),M(2,13),a()),e&2){let n=f();o(),s(\"ngForOf\",n.paymentService.getServiceTags(n.service,n.showDiscountTag,n.showTrialVisitTag)),o(),s(\"wApiSlot\",A(4,Q,n.EWApiSlotContainerType.serviceTag,V(2,J,n.service.id)))}}function te(e,i){if(e&1&&(l(0,\"div\",15),g(1),N(2,\"price\"),a()),e&2){let n=f();m(\"data-locator\",\"service_price\"),o(),h(\" \",E(2,2,n.servicePrice,n.currency,!0),\" \")}}function ie(e,i){if(e&1){let n=S();l(0,\"div\",16),b(\"click\",function(){x(n);let c=f();return y(c.handleClickOnInfoIcon())}),l(1,\"div\",17),u(2,\"ui-kit-svg-icon\",18),a()()}e&2&&(o(2),s(\"name\",\"info\"),m(\"data-locator\",\"icon_info\"))}function ne(e,i){if(e&1){let n=S();l(0,\"div\",19),b(\"click\",function(){x(n);let c=f();return y(c.iconClick.emit())}),u(1,\"ui-kit-svg-icon\",20),a()}if(e&2){let n=f();o(),s(\"name\",n.iconName),m(\"data-locator\",\"remove_service_btn\")}}var _e=(()=>{let i=class i{constructor(){t(this,\"service\");t(this,\"currency\");t(this,\"showServiceTags\",!0);t(this,\"isRecordChargeActive\",!1);t(this,\"orderAbonementRestrictionRequired\",!1);t(this,\"iconName\");t(this,\"infoIconVisible\",!1);t(this,\"overflowVisible\",!1);t(this,\"formattedSeanceLength\");t(this,\"togglePayOnlineActive\",!1);t(this,\"showDiscountTag\",!0);t(this,\"showTrialVisitTag\",!1);t(this,\"iconClick\",new w);t(this,\"showInfo\",new w);t(this,\"paymentService\",C($));t(this,\"wordNumeralCase\",C(L));t(this,\"EWApiSlotContainerType\",W);t(this,\"isAbonementRequired\",!1);t(this,\"servicePrice\");t(this,\"serviceInformation\",\"\")}set seanceLength(r){this.formattedSeanceLength=r?r.replace(/\\./g,\"\"):void 0}get serviceCount(){if(!this.service.is_composite)return\"\";let r=this.service.composite_details.links.length;return\"\".concat(r,\" \").concat(this.wordNumeralCase.transform(\"service.more_plural\",r,{pluralGenitive:\".many\",nominative:\".singular\",genitive:\".few\"}))}ngOnChanges(){this.isAbonementRequired=!this.showTrialVisitTag&&this.paymentService.abonementRestrictionRequired(this.service),this.servicePrice=this.getServicePrice(),this.serviceInformation=this.getServiceInformation()}getServicePrice(){return this.isAbonementRequired?void 0:(c=>typeof c.spotsCount==\"number\")(this.service)?{price_max:this.service.price_max*this.service.spotsCount,price_min:this.service.price_min*this.service.spotsCount}:this.service}getServiceInformation(){return\"spotsCount\"in this.service&&this.service.spotsCount?this.service.spotsCount>1?this.lookUpSpotsCountText(this.service.spotsCount):\"\":this.formattedSeanceLength}lookUpSpotsCountText(r){return\"\".concat(r,\" \").concat(this.wordNumeralCase.transform(\"group_booking.spots_count\",r))}handleClickOnInfoIcon(){this.showInfo.emit()}};t(i,\"\\u0275fac\",function(c){return new(c||i)}),t(i,\"\\u0275cmp\",P({type:i,selectors:[[\"app-service-item\"]],inputs:{service:\"service\",currency:\"currency\",showServiceTags:\"showServiceTags\",isRecordChargeActive:\"isRecordChargeActive\",orderAbonementRestrictionRequired:\"orderAbonementRestrictionRequired\",iconName:\"iconName\",infoIconVisible:\"infoIconVisible\",overflowVisible:\"overflowVisible\",seanceLength:\"seanceLength\",togglePayOnlineActive:\"togglePayOnlineActive\",showDiscountTag:\"showDiscountTag\",showTrialVisitTag:\"showTrialVisitTag\"},outputs:{iconClick:\"iconClick\",showInfo:\"showInfo\"},features:[T],decls:13,vars:10,consts:[[3,\"overflowVisible\"],[\"center\",\"\",1,\"short-info\"],[1,\"service-item-title\"],[1,\"short-info-description\"],[1,\"service-item-time\"],[1,\"service-item-count\"],[\"class\",\"tags-container\",4,\"ngIf\"],[\"right\",\"\",1,\"service-actions\"],[\"class\",\"service-item-price\",4,\"ngIf\"],[1,\"info-button-container\"],[\"class\",\"icon-container\",3,\"click\",4,\"ngIf\"],[1,\"tags-container\"],[3,\"label\",\"iconName\",\"tagType\",4,\"ngFor\",\"ngForOf\"],[3,\"wApiSlot\"],[3,\"label\",\"iconName\",\"tagType\"],[1,\"service-item-price\"],[1,\"info-button-container\",3,\"click\"],[1,\"info-button\"],[\"role\",\"button\",\"aria-label\",\"?\",1,\"info-button-icon\",3,\"name\"],[1,\"icon-container\",3,\"click\"],[1,\"service-item-icon\",3,\"name\"]],template:function(c,p){c&1&&(l(0,\"ui-kit-simple-cell\",0)(1,\"div\",1)(2,\"span\",2),g(3),a(),l(4,\"div\",3)(5,\"span\",4),g(6),a(),v(7,Y,3,3,\"span\",5),a(),v(8,ee,3,7,\"div\",6),a(),l(9,\"div\",7),v(10,te,3,6,\"div\",8)(11,ie,3,2,\"div\",9)(12,ne,2,2,\"div\",10),a()()),c&2&&(s(\"overflowVisible\",p.showServiceTags||p.overflowVisible),o(2),m(\"data-locator\",\"service_title\"),o(),h(\"\",p.service.title,\" \"),o(2),m(\"data-locator\",\"service_seance_length\"),o(),k(p.serviceInformation),o(),d(p.service.is_composite?7:-1),o(),s(\"ngIf\",p.showServiceTags),o(2),s(\"ngIf\",p.servicePrice),o(),d(p.infoIconVisible?11:-1),o(),s(\"ngIf\",p.iconName))},dependencies:[R,D,_,K,U,B,q],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:nowrap;align-items:center;cursor:default}[_nghost-%COMP%]   .short-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}[_nghost-%COMP%]   .short-info-description[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .tags-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px;row-gap:4px;white-space:nowrap}[_nghost-%COMP%]   .tags-container[_ngcontent-%COMP%]:empty{display:none}[_nghost-%COMP%]   .service-item-title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--y-core-color-text-primary)}[_nghost-%COMP%]   .service-item-count[_ngcontent-%COMP%], [_nghost-%COMP%]   .service-item-time[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:var(--y-core-color-text-secondary)}[_nghost-%COMP%]   .service-item-price[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--y-core-color-text-primary);overflow-wrap:anywhere}[_nghost-%COMP%]   .service-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px}[_nghost-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer}[_nghost-%COMP%]   .icon-container[_ngcontent-%COMP%]   .service-item-icon[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary);width:13.3px;height:13.3px}[_nghost-%COMP%]   .info-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer}[_nghost-%COMP%]   .info-button-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:19.5px;height:19.5px;background-color:var(--y-core-color-surface-tertiary);border-radius:50%}[_nghost-%COMP%]   .info-button-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]   .info-button-icon[_ngcontent-%COMP%]{color:var(--y-core-color-icon-primary);width:5px;height:10px;padding-left:.5px}'],changeDetection:0}));let e=i;return e})();var ke=(()=>{let i=class i{};t(i,\"\\u0275fac\",function(c){return new(c||i)}),t(i,\"\\u0275mod\",I({type:i})),t(i,\"\\u0275inj\",O({imports:[F,H,_,z,j]}));let e=i;return e})();export{_e as a,ke as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2780,
          "_transferSize": 3440,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.762Z",
        "time": 52.762000006623566,
        "timings": {
          "blocked": 21.149000022388996,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.21599999999999753,
          "wait": 28.838000056520105,
          "receive": 2.558999927714467,
          "_blocked_queueing": 3.2900000223889947,
          "_blocked_proxy": 17.349,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490370",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-YJJTP4UK.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4117"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d2466b14bcb2-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-1253\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "b3e0cce607b69a19da3ff9a1718f12e1"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 4691,
            "mimeType": "application/javascript",
            "compression": 2943,
            "text": "import{h as b}from\"./chunk-IGSDBEZN.js\";import{b as P}from\"./chunk-5GELTLFF.js\";import{b as L}from\"./chunk-TXASR5LU.js\";import{Vb as I,ac as z,e as M,mc as O,p as S}from\"./chunk-6FGVQ7PR.js\";import{Aa as h,Fb as s,Ka as C,La as x,Ub as w,Wb as f,Xb as p,Zb as c,cb as y,ec as l,fc as d,gc as g,oc as _,pc as m,yc as u,zc as v}from\"./chunk-KO722YSM.js\";import{g as i}from\"./chunk-JV5WWF5Q.js\";function k(e,a){if(e&1&&(l(0,\"div\",4)(1,\"span\"),u(2),d()()),e&2){let r=m();c(\"staff-name_review\",r.reviewStyle),s(),f(\"data-locator\",r.dataLocatorName),s(),v(r.staffName)}}function A(e,a){if(e&1&&(l(0,\"div\",5)(1,\"span\"),u(2),d()()),e&2){let r=m();s(),f(\"data-locator\",r.dataLocatorSpecialization),s(),v(r.positionOrSpecialization)}}function F(e,a){if(e&1&&g(0,\"ui-kit-rating\",6),e&2){let r=m();p(\"ngModel\",r.rating)(\"disabled\",!0)(\"commentsCount\",r.commentsCount)}}var J=(()=>{let a=class a{constructor(){i(this,\"data\");i(this,\"hostClick\",new y);i(this,\"dataLocatorName\");i(this,\"dataLocatorSpecialization\");i(this,\"dataLocatorAvatar\");i(this,\"masterInfoComponentStyle\",\"record\")}onClick(){this.hostClick.emit()}get reviewStyle(){return this.masterInfoComponentStyle===\"review\"}get staffAvatar(){var t,n;return((t=this.data)==null?void 0:t.avatar_big)||((n=this.data)==null?void 0:n.avatar)||\"\"}get staffAvatarLowQuality(){var t;return((t=this.data)==null?void 0:t.avatar)||\"\"}get staffName(){var t;return((t=this.data)==null?void 0:t.name)||\"\"}get positionOrSpecialization(){var t;return((t=this.data)==null?void 0:t.positionOrSpecialization)||\"\"}get showRating(){var t;return((t=this.data)==null?void 0:t.show_rating)||!1}get rating(){var t;return((t=this.data)==null?void 0:t.rating)||0}get commentsCount(){var t;return b((t=this.data)==null?void 0:t.comments_count)}};i(a,\"\\u0275fac\",function(n){return new(n||a)}),i(a,\"\\u0275cmp\",C({type:a,selectors:[[\"app-master-info\"]],hostVars:2,hostBindings:function(n,o){n&1&&_(\"click\",function(){return o.onClick()}),n&2&&c(\"review\",o.reviewStyle)},inputs:{data:\"data\",dataLocatorName:\"dataLocatorName\",dataLocatorSpecialization:\"dataLocatorSpecialization\",dataLocatorAvatar:\"dataLocatorAvatar\",masterInfoComponentStyle:\"masterInfoComponentStyle\"},outputs:{hostClick:\"hostClick\"},decls:4,vars:10,consts:[[\"size\",\"staffAvatarSize\",\"initialsFontSize\",\"32px\",1,\"staff-avatar\",3,\"text\",\"urlLight\",\"url\",\"round\"],[\"class\",\"staff-name\",3,\"staff-name_review\",4,\"ngIf\"],[\"class\",\"staff-specialization\",4,\"ngIf\"],[\"class\",\"rating\",3,\"ngModel\",\"disabled\",\"commentsCount\",4,\"ngIf\"],[1,\"staff-name\"],[1,\"staff-specialization\"],[1,\"rating\",3,\"ngModel\",\"disabled\",\"commentsCount\"]],template:function(n,o){n&1&&(g(0,\"ui-kit-avatar\",0),w(1,k,3,4,\"div\",1)(2,A,3,2,\"div\",2)(3,F,1,3,\"ui-kit-rating\",3)),n&2&&(c(\"staff-avatar_review\",o.reviewStyle),p(\"text\",o.staffName)(\"urlLight\",o.staffAvatarLowQuality)(\"url\",o.staffAvatar)(\"round\",!0),f(\"data-locator\",o.dataLocatorAvatar),s(),p(\"ngIf\",o.staffName),s(),p(\"ngIf\",o.positionOrSpecialization),s(),p(\"ngIf\",o.showRating&&o.rating))},dependencies:[M,L,P,I,z],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{width:100%;height:100%;font-family:Inter;font-style:normal;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;overflow:hidden;padding-top:105px;padding-bottom:18px}.review[_nghost-%COMP%]{padding-top:80px;padding-bottom:16px}.staff-name[_ngcontent-%COMP%], .staff-specialization[_ngcontent-%COMP%]{width:100%;text-align:center;white-space:pre-wrap;position:relative}.staff-name[_ngcontent-%COMP%]:after, .staff-specialization[_ngcontent-%COMP%]:after{content:\"\";height:100%;width:1px;position:absolute;top:0;right:-1px;box-shadow:0 0 10px 10px var(--y-core-color-surface-primary)}.staff-avatar[_ngcontent-%COMP%]{width:104px;height:104px;border-radius:50%;margin-bottom:8px;position:absolute;top:-8px}.staff-avatar_review[_ngcontent-%COMP%]{width:120px;height:120px;top:-30px}.staff-name[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px;color:var(--y-core-color-text-primary);margin-bottom:2px}.staff-name_review[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:700;font-size:24px;line-height:28px;padding:0 16px}.staff-name_review[_ngcontent-%COMP%]:after{content:none}.staff-specialization[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--y-core-color-text-secondary);padding:0 16px}.rating[_ngcontent-%COMP%]{margin-top:8px}'],changeDetection:0}));let e=a;return e})();var ot=(()=>{let a=class a{};i(a,\"\\u0275fac\",function(n){return new(n||a)}),i(a,\"\\u0275mod\",x({type:a})),i(a,\"\\u0275inj\",h({imports:[S,O]}));let e=a;return e})();export{J as a,ot as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 1748,
          "_transferSize": 2408,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.762Z",
        "time": 53.03599999751896,
        "timings": {
          "blocked": 21.78499992277473,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2150000000000034,
          "wait": 28.749000006280838,
          "receive": 2.287000068463385,
          "_blocked_queueing": 3.704999922774732,
          "_blocked_proxy": 17.654999999999998,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490176",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-FELUUY65.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4120"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d2469b8a78ca-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-1a7c\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "30ed6382e38ba712c79afda44ce4262f"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 6780,
            "mimeType": "application/javascript",
            "compression": 4111,
            "text": "import{j as V}from\"./chunk-UOBWO2IR.js\";import{a as B}from\"./chunk-STSHWXLS.js\";import{a as me,c as de}from\"./chunk-P3W6H44H.js\";import{a as P}from\"./chunk-4JEP2PPC.js\";import{b as pe}from\"./chunk-NZOI5B53.js\";import{t as ce,w as le}from\"./chunk-IV3KQJLV.js\";import{Ab as k,Bb as ie,De as F,Fc as $,Hg as se,Jf as oe,Ki as ae,N as x,O as I,P as T,S as ee,ch as ne,j as b,og as re,p as Z,ui as l,xa as te}from\"./chunk-6FGVQ7PR.js\";import{Aa as W,Fa as n,Gb as R,Ka as S,La as z,Pb as J,Pc as p,Qc as m,Va as C,Wa as M,Wb as K,Xb as w,aa as g,ec as u,fc as _,h as Q,id as Y,j as h,kc as X,oc as f,qa as y,r as q,ua as U,uc as j,vc as D,wc as O,x as v,za as G}from\"./chunk-KO722YSM.js\";import{a as E,b as H,g as e,i as N}from\"./chunk-JV5WWF5Q.js\";var ue=(()=>{let o=class o extends B{constructor(t,i){super(t,i);e(this,\"router\");e(this,\"route\");e(this,\"store\",n(ne));e(this,\"widgetApiHelperService\",n(le));e(this,\"pricePipe\",n(se));e(this,\"translatePipe\",n(k));e(this,\"paymentService\",n(ce));e(this,\"tracking\",n($));e(this,\"metrika\",n(pe));e(this,\"destroyed$\",new h(1));e(this,\"currentCompany$\",this.store.select(l.currentCompany.getCurrentCompany).pipe(g(),y(this.destroyed$)));e(this,\"selectedMasterId$\",this.store.select(l.order.getSelectedMaster).pipe(v(t=>{var i;return(i=t==null?void 0:t.id)!=null?i:null})));e(this,\"masters$\",this.widgetApiHelperService.filteredByInjectionMasters.pipe(U(this.selectedMasterId$,this.currentCompany$,this.store.select(l.order.getSelectedServices).pipe(v(t=>!this.paymentService.hasServicesAbonementRestriction(t)))),v(([t,i,r,d])=>re.sortMasters(t,i).map(c=>{let L=d?this.pricePipe.transform({price_min:c.price_min,price_max:c.price_max},r.currency_short_title):null;return L===this.translatePipe.transform(\"service.price_not_available\")&&(L=null),H(E({},c),{priceRange:L})}))));this.router=t,this.route=i}selectMasterForComposites(t){this.store.selectSnapshot(l.order.getIndividualSelectedServicesInfo).forEach(i=>{oe(i)&&i.subServicesInfo.forEach(r=>{this.store.dispatch(new F(t,i.serviceId,r.serviceLinkId))})})}selectMaster(t){this.store.dispatch(new F(t.id)),this.selectMasterForComposites(t.id),this.navigateToParent(null,!0)}openMasterInfo(t){this.currentCompany$.subscribe(i=>N(this,null,function*(){let r=\"../\".concat(ae(i.id,t.id));yield this.router.navigate([r],{relativeTo:this.route,queryParamsHandling:\"merge\"})}))}sendPageViewEvent(t){this.tracking.pageView(me.mastersList),this.metrika.reachGoal(\"screen_open_staff\",{companyId:t.id,companyName:t.title})}ngAfterViewInit(){this.currentCompany$.subscribe(t=>{this.sendPageViewEvent(t)})}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}};e(o,\"\\u0275fac\",function(i){return new(i||o)(R(T),R(x))}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-masters-list-modal\"]],features:[J],decls:4,vars:9,consts:[[1,\"masters-list\",3,\"selectMaster\",\"showInfo\",\"company\",\"masters\",\"selectedMasterId\"]],template:function(i,r){i&1&&(u(0,\"app-masters-list\",0),p(1,\"async\"),p(2,\"async\"),p(3,\"async\"),f(\"selectMaster\",function(c){return r.selectMaster(c)})(\"showInfo\",function(c){return r.openMasterInfo(c)}),_()),i&2&&w(\"company\",m(1,3,r.currentCompany$))(\"masters\",m(2,5,r.masters$))(\"selectedMasterId\",m(3,7,r.selectedMasterId$))},dependencies:[de,b],styles:[\".masters-list[_ngcontent-%COMP%]{height:60vh;max-height:60vh}\"],changeDetection:0}));let s=o;return s})();var fe=(()=>{let o=class o{constructor(){e(this,\"closeSubject\",new Q);e(this,\"close$\",this.closeSubject.asObservable())}close(){this.closeSubject.next()}};e(o,\"\\u0275fac\",function(t){return new(t||o)}),e(o,\"\\u0275prov\",G({token:o,factory:o.\\u0275fac,providedIn:\"root\"}));let s=o;return s})();var ge=[\"modalComponent\"],rt=(()=>{let o=class o{constructor(){e(this,\"modalComponent\");e(this,\"showBackButton\",!1);e(this,\"dataLocator\");e(this,\"leading\");e(this,\"hideFringe\",!1);e(this,\"outlet\");e(this,\"store\",n(te));e(this,\"router\",n(T));e(this,\"trackingService\",n($));e(this,\"cd\",n(Y));e(this,\"modalOutletService\",n(fe));e(this,\"modalTitle$\");e(this,\"datetimeStepTitle$\",this.store.select(l.bookform.getDatetimeStepTitle));e(this,\"masterStepTitle$\",this.store.select(l.bookform.getMasterStepTitle));e(this,\"modalIsShowed\",!1);e(this,\"dataLocatorByRouter\",\"\");e(this,\"currentComponent\",null);e(this,\"destroy$\",new h(1));e(this,\"closeSubscription\")}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}get modalVisibility(){return this.modalIsShowed}activateRoute(a){this.modalIsShowed=!0,this.currentComponent=a,this.closeSubscription=this.modalOutletService.close$.pipe(g(),y(this.destroy$)).subscribe(()=>{var t;(t=this.modalComponent)!=null&&t.close&&(this.modalComponent.close(),this.modalComponent.fullyClosed=!0)}),this.setDataLocator(this.currentComponent),this.setTitle()}goBack(a){a&&(this.navigateBack(),this.sendNavigateBackEvent())}unsubscribeModalOutletServiceAndHideModal(){this.modalIsShowed=!1,this.closeSubscription.unsubscribe()}navigateBack(){this.currentComponent instanceof B?this.currentComponent.navigateToParent(\"preserve\",!0):this.router.navigate([\"/\"],{replaceUrl:!0,queryParamsHandling:\"preserve\"})}sendNavigateBackEvent(){this.trackingService.backButtonClick()}setDataLocator(a){this.dataLocatorByRouter=a instanceof V?\"datetime_select_popup\":null,this.cd.detectChanges()}setTitle(){this.currentComponent instanceof V?this.modalTitle$=this.datetimeStepTitle$:this.currentComponent instanceof ue?this.modalTitle$=this.masterStepTitle$:this.modalTitle$=q(\"\"),this.cd.detectChanges()}};e(o,\"\\u0275fac\",function(t){return new(t||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-modal-outlet\"]],viewQuery:function(t,i){if(t&1&&(j(ge,5),j(I,7)),t&2){let r;D(r=O())&&(i.modalComponent=r.first),D(r=O())&&(i.outlet=r.first)}},inputs:{showBackButton:\"showBackButton\",dataLocator:\"dataLocator\",leading:\"leading\",hideFringe:\"hideFringe\"},decls:5,vars:10,consts:[[\"modalComponent\",\"\"],[3,\"closeModalEvent\",\"showBackButton\",\"showed\",\"title\",\"hideFringe\",\"leading\"],[3,\"activate\",\"deactivate\"]],template:function(t,i){if(t&1){let r=X();u(0,\"app-modal\",1,0),p(2,\"async\"),p(3,\"translate\"),f(\"closeModalEvent\",function(c){return C(r),M(i.goBack(c))}),u(4,\"router-outlet\",2),f(\"activate\",function(c){return C(r),M(i.activateRoute(c))})(\"deactivate\",function(){return C(r),M(i.unsubscribeModalOutletServiceAndHideModal())}),_()()}t&2&&(w(\"showBackButton\",i.showBackButton)(\"showed\",i.modalVisibility)(\"title\",m(3,8,m(2,6,i.modalTitle$)))(\"hideFringe\",i.hideFringe)(\"leading\",i.leading),K(\"data-locator\",i.dataLocator||i.dataLocatorByRouter))},dependencies:[I,P,b,k],changeDetection:0}));let s=o;return s})();var ut=(()=>{let o=class o{};e(o,\"\\u0275fac\",function(t){return new(t||o)}),e(o,\"\\u0275mod\",z({type:o})),e(o,\"\\u0275inj\",W({imports:[Z,ee,ie,P]}));let s=o;return s})();export{ue as a,rt as b,ut as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2669,
          "_transferSize": 3329,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.762Z",
        "time": 64.61100000888109,
        "timings": {
          "blocked": 46.8850000943765,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.36300000000000665,
          "wait": 16.600000041827556,
          "receive": 0.7629998726770282,
          "_blocked_queueing": 3.9110000943765044,
          "_blocked_proxy": 17.921,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "492762",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-UOBWO2IR.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4120"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d2469836bcb5-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-7bd4\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "e71817f1dfb9de9589b7c7e5386e703e"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 31700,
            "mimeType": "application/javascript",
            "compression": 21325,
            "text": "import{a as mt}from\"./chunk-PX7RBKSN.js\";import{a as ht}from\"./chunk-STSHWXLS.js\";import{a as dt}from\"./chunk-J5MXNZWD.js\";import{c as ct,d as lt,e as pt}from\"./chunk-IVZA25JD.js\";import{A as ot,c as it,z as Se}from\"./chunk-IGSDBEZN.js\";import{b as st}from\"./chunk-NZOI5B53.js\";import{c as at}from\"./chunk-5GELTLFF.js\";import{a as ye}from\"./chunk-UTVABLOL.js\";import{c as nt,w as rt}from\"./chunk-IV3KQJLV.js\";import{$ as De,Ab as Ve,Dc as pe,Eb as Ke,Fc as me,N as Ye,P as je,Qf as Xe,Tc as ze,Xf as fe,Z as ce,_ as $,ba as y,ca as V,cg as Qe,d as re,da as K,dg as qe,e as E,eg as Je,fg as Ze,gg as et,ha as H,j as se,md as he,nb as g,pg as tt,te as Ge,ue,ui as A,xa as le,zb as de}from\"./chunk-6FGVQ7PR.js\";import{Ac as ke,Ea as Ne,Fa as R,Fb as d,Gb as B,J as X,Ka as O,Na as Ee,Nc as oe,Oc as Ue,Pb as Re,Pc as c,Qc as l,Rc as Te,Ua as Ae,Ub as _,Va as q,Wa as J,Wb as k,Xb as p,Y as Q,Yb as ee,Zb as L,aa as Ce,cb as W,ec as h,fc as u,gc as T,h as xe,hb as Z,hc as We,i as b,ic as Le,id as He,j as $e,kc as te,oc as w,pc as C,qa as P,ta as Ie,ua as Pe,uc as ie,vc as ne,wc as ae,x as S,y as j,yb as Fe,yc as x,za as Be,zc as U}from\"./chunk-KO722YSM.js\";import{a as we,b as Me,g as a}from\"./chunk-JV5WWF5Q.js\";var $t=66;function ci(n,o=0,s=window,t,e){let i=document.getElementById(n),r=e?0:s instanceof Window?s.pageYOffset:s.scrollTop,m=i.getBoundingClientRect().top+r+o;if(t){let f;s.addEventListener(\"scroll\",()=>{window.clearTimeout(f),f=setTimeout(t,$t)},{once:!0})}s.scrollTo({top:m,behavior:\"smooth\"})}var It=392;function ut(n,o,s=!1){if(!(n&&n.toArray().length>0)||o<0)return 0;let e=n.toArray()[o].nativeElement,i=e.offsetLeft,r=e.offsetWidth,f=(Math.min(window.innerWidth,s?It:nt.maxApplicationWidth)-r)/2;return i-f}var Pt=[33,78,7,133,195,41,85];function ft(n){return Pt.includes(n)}var yt=(()=>{let o=class o{constructor(t){a(this,\"translate\");this.translate=t}getMonthNames$(){let t=Array.from(Array(12)).map((e,i)=>\"date.by_month_num.\".concat((i+1).toString().padStart(2,\"0\")));return this.translate.stream(t).pipe(S(e=>t.map(i=>e[i])))}getWeekNames$(){let e=[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"].map(i=>\"time.by_week_day.\".concat(i));return this.translate.stream(e).pipe(S(i=>e.map(r=>i[r])))}};a(o,\"\\u0275fac\",function(e){return new(e||o)(Ne(de))}),a(o,\"\\u0275prov\",Be({token:o,factory:o.\\u0275fac,providedIn:\"root\"}));let n=o;return n})();var v=function(n){return n.month=\"month\",n.week=\"week\",n.blank=\"blank\",n}(v||{}),be=function(n){return n[n.monthWeek=1]=\"monthWeek\",n[n.monthBlank=2]=\"monthBlank\",n}(be||{}),Nt={[be.monthWeek]:[v.month,v.week],[be.monthBlank]:[v.month,v.blank]};function gt(n,o){let s=Nt[n];if(!s.includes(o))throw new Error(\"Invalid combination: \".concat(n,\" - \").concat(o));return s.find(t=>t!==o)}var F=\"cubic-bezier(.28,.85,.28,.86)\";function Et(n,o){n&1&&T(0,\"div\",3),n&2&&k(\"data-locator\",\"day-background-circle\")}var _t=(()=>{let o=class o{constructor(){a(this,\"day\");a(this,\"isSelected\",!1);a(this,\"outOfViewport\",!1);a(this,\"dayClick\",new W)}get isActive(){return this.isSelected}get isGreyedOut(){return this.day.isGreyedOut}get isToday(){return!this.outOfViewport&&this.day.isToday}get isDisabled(){return this.day.isDisabled}handleDateClick(){this.dayClick.emit(this.day)}};a(o,\"\\u0275fac\",function(e){return new(e||o)}),a(o,\"\\u0275cmp\",O({type:o,selectors:[[\"ui-kit-calendar-day\"]],hostVars:8,hostBindings:function(e,i){e&2&&L(\"active\",i.isActive)(\"greyed-out\",i.isGreyedOut)(\"today\",i.isToday)(\"disabled\",i.isDisabled)},inputs:{day:\"day\",isSelected:\"isSelected\",outOfViewport:\"outOfViewport\"},outputs:{dayClick:\"dayClick\"},decls:4,vars:3,consts:[[1,\"calendar-day-number\",3,\"click\"],[1,\"calendar-day-number-text\"],[\"class\",\"background\",4,\"ngIf\"],[1,\"background\"]],template:function(e,i){e&1&&(h(0,\"div\",0),w(\"click\",function(){return i.handleDateClick()}),h(1,\"span\",1),x(2),u(),_(3,Et,1,1,\"div\",2),u()),e&2&&(d(),k(\"data-locator\",\"working_day_number\"),d(),U(i.day.day),d(),p(\"ngIf\",i.isActive||i.isToday))},dependencies:[E],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{width:100%;display:flex}[_nghost-%COMP%]   .calendar-day-number[_ngcontent-%COMP%]{cursor:pointer;width:32px;height:32px;display:flex;justify-content:center;align-items:center;font-style:normal;font-weight:400;font-size:14px;line-height:20px;position:relative}.today[_nghost-%COMP%]   .calendar-day-number[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary)}.active[_nghost-%COMP%]   .calendar-day-number[_ngcontent-%COMP%]{color:var(--y-core-color-text-on-accent)}.greyed-out[_nghost-%COMP%]   .background[_ngcontent-%COMP%]{opacity:.3}.greyed-out[_nghost-%COMP%]:not(.active)   .calendar-day-number-text[_ngcontent-%COMP%]{opacity:.5}.disabled[_nghost-%COMP%]{pointer-events:none;cursor:not-allowed}.active[_nghost-%COMP%]   .background[_ngcontent-%COMP%], .today[_nghost-%COMP%]   .background[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;right:0;top:0;bottom:0;background-color:var(--y-core-color-surface-accent);border-radius:50%;z-index:-1}.today[_nghost-%COMP%]:not(.active)   .background[_ngcontent-%COMP%]{background-color:var(--y-core-color-surface-secondary)}']}));let n=o;return n})();function Ft(n,o){if(n&1&&(h(0,\"span\"),x(1),u()),n&2){let s=C();d(),ke(\"\\xA0\",s.yearNumber,\"\")}}function Rt(n,o){n&1&&T(0,\"ui-kit-svg-icon\",4),n&2&&p(\"name\",\"common/arrow\")}var vt=(()=>{let o=class o{constructor(){a(this,\"currentMonth\");a(this,\"monthNames\");a(this,\"mode\");a(this,\"currentYear\");a(this,\"hasTransaction\")}get isMonthMode(){return this.mode===v.month}get monthName(){return this.monthNames[this.currentMonth-1]}get yearNumber(){let t=g.now().getYear();return this.currentYear&&t!==this.currentYear?\"\".concat(this.currentYear):\"\"}};a(o,\"\\u0275fac\",function(e){return new(e||o)}),a(o,\"\\u0275cmp\",O({type:o,selectors:[[\"ui-kit-calendar-month\"]],hostVars:2,hostBindings:function(e,i){e&2&&L(\"month\",i.isMonthMode)},inputs:{currentMonth:\"currentMonth\",monthNames:\"monthNames\",mode:\"mode\",currentYear:\"currentYear\",hasTransaction:\"hasTransaction\"},decls:5,vars:6,consts:[[1,\"calendar-month\"],[1,\"calendar-month-name\"],[4,\"ngIf\"],[\"class\",\"month-arrow\",3,\"name\",4,\"ngIf\"],[1,\"month-arrow\",3,\"name\"]],template:function(e,i){e&1&&(h(0,\"div\",0)(1,\"span\",1),x(2),_(3,Ft,2,1,\"span\",2),u(),_(4,Rt,1,1,\"ui-kit-svg-icon\",3),u()),e&2&&(L(\"has-transaction\",i.hasTransaction),k(\"data-locator\",\"current_month\"),d(2),ke(\" \",i.monthName,\" \"),d(),p(\"ngIf\",i.yearNumber),d(),p(\"ngIf\",i.hasTransaction))},dependencies:[E,Ke],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:fit-content}[_nghost-%COMP%]   .calendar-month[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:32px;padding:10px 12px;font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--y-core-color-text-primary)}[_nghost-%COMP%]   .calendar-month.has-transaction[_ngcontent-%COMP%]{cursor:pointer;border-radius:12px;border:2px solid #E0E3EB}[_nghost-%COMP%]   .calendar-month[_ngcontent-%COMP%]   ui-kit-svg-icon[_ngcontent-%COMP%]{color:var(--y-core-color-icon-primary)}[_nghost-%COMP%]   .month-arrow[_ngcontent-%COMP%]{transition:transform .25s;transform:rotate(270deg)}[_nghost-%COMP%]   .calendar-month-name[_ngcontent-%COMP%]{margin-right:8px}.month[_nghost-%COMP%]   .month-arrow[_ngcontent-%COMP%]{transform:rotate(90deg)}']}));let n=o;return n})();var Ct=(()=>{let o=class o{transform(t,e){let i=g.fromISO(e),r=i.setWeekday(1),m=i.setWeekday(7),f=g.fromISO(t.date);return f.toMilliseconds()>=r.toMilliseconds()&&f.toMilliseconds()<=m.toMilliseconds()}};a(o,\"\\u0275fac\",function(e){return new(e||o)}),a(o,\"\\u0275pipe\",Ee({name:\"inCurrentWeek\",type:o,pure:!0}));let n=o;return n})();var Ut=[\"calendarDaysContainer\"],kt=n=>({value:n}),Ht=n=>({fullHeight:n}),Yt=(n,o)=>({value:n,params:o});function jt(n,o){if(n&1&&(h(0,\"div\",10)(1,\"span\"),x(2),u()()),n&2){let s=o.$implicit;d(2),U(s)}}function Vt(n,o){if(n&1&&(h(0,\"div\",15),T(1,\"ui-kit-calendar-day\",16),u()),n&2){let s=o.$implicit;d(),p(\"day\",s)(\"outOfViewport\",!0)}}function Kt(n,o){if(n&1){let s=te();h(0,\"div\",17),c(1,\"async\"),c(2,\"inCurrentWeek\"),c(3,\"async\"),c(4,\"inCurrentWeek\"),h(5,\"ui-kit-calendar-day\",18),c(6,\"async\"),w(\"dayClick\",function(e){q(s);let i=C(2);return J(i.handleDayClick(e))}),u()()}if(n&2){let s=o.$implicit,t=C(2);L(\"current-week\",Te(2,10,s,l(1,8,t.selectedDate$)))(\"not-current-week\",!Te(4,15,s,l(3,13,t.selectedDate$))),k(\"data-locator\",s.isGreyedOut?\"non_working_day\":\"working_day\")(\"data-locator-date\",s.date),d(5),p(\"day\",s)(\"isSelected\",l(6,18,t.selectedDate$)===s.date)}}function zt(n,o){if(n&1&&(h(0,\"div\",15),T(1,\"ui-kit-calendar-day\",16),u()),n&2){let s=o.$implicit;d(),p(\"day\",s)(\"outOfViewport\",!0)}}function Gt(n,o){if(n&1&&(h(0,\"div\",11),c(1,\"async\"),h(2,\"div\",12),c(3,\"async\"),_(4,Vt,2,2,\"div\",13),u(),h(5,\"div\",12,0),_(7,Kt,7,20,\"div\",14),u(),h(8,\"div\",12),c(9,\"async\"),_(10,zt,2,2,\"div\",13),u()()),n&2){let s=o.ngIf,t=C();ee(\"transform\",\"translate3d(\"+t.calendarXTransform*-1+\"%, 0, 0)\"),p(\"@datesScroll\",l(1,13,t.daysScrollAnimationState$)),d(2),ee(\"max-height\",l(3,15,t.calendarDaysContainerHeight$),\"px\"),d(2),p(\"ngForOf\",s.prev)(\"ngForTrackBy\",t.trackByDate),d(3),p(\"ngForOf\",s.curr)(\"ngForTrackBy\",t.trackByDate),d(),ee(\"max-height\",l(9,17,t.calendarDaysContainerHeight$),\"px\"),d(2),p(\"ngForOf\",s.next)(\"ngForTrackBy\",t.trackByDate)}}var I=function(n){return n[n.prev=1]=\"prev\",n[n.curr=2]=\"curr\",n[n.next=3]=\"next\",n}(I||{}),M=function(n){return n.curr=\"curr\",n.prev=\"prev\",n.next=\"next\",n}(M||{}),Tt=(()=>{let o=class o{constructor(t){a(this,\"scrollService\");a(this,\"calendarTransactionType\");a(this,\"monthNames\",{});a(this,\"weekNames\",[]);a(this,\"disabledBefore\");a(this,\"disableLeft\",!1);a(this,\"disableRight\",!1);a(this,\"selectFirstDayOnNavigation\",!0);a(this,\"startWeekOnSunday$\",new b(!1));a(this,\"selectedDateChange\",new W);a(this,\"periodChange\",new W);a(this,\"calendarMonthChange\",new W);a(this,\"calendarModeChange\",new W);a(this,\"calendarDaysContainerRef\");a(this,\"periods$\",new b(void 0));a(this,\"activeDates$\",new b([]));a(this,\"calendarMode$\",new b(void 0));a(this,\"selectedDate$\",new b(\"\"));a(this,\"visibleMonth$\",this.periods$.pipe(X(t=>!!t),S(t=>g.fromISO(t.curr.refDate).getMonth())));a(this,\"visibleYear$\",this.periods$.pipe(X(t=>!!t),S(t=>g.fromISO(t.curr.refDate).getYear())));a(this,\"daysScrollAnimationState$\",new b(M.curr));a(this,\"calendarDays$\",j([this.periods$,this.activeDates$]).pipe(X(([t,e])=>!!t&&!!e),S(([t,e])=>({prev:this.getDaysByPeriod(t.prev,e),curr:this.getDaysByPeriod(t.curr,e),next:this.getDaysByPeriod(t.next,e)}))));a(this,\"calendarDaysContainerHeight$\",j([this.visibleMonth$.pipe(Q()),this.calendarMode$,this.startWeekOnSunday$]).pipe(Ie(300),S(()=>{var t;return((t=this.calendarDaysContainerRef)==null?void 0:t.nativeElement.clientHeight)||0})));a(this,\"today\",g.now().toISODate());a(this,\"destroy$\",new xe);a(this,\"calendarXTransform\",0);a(this,\"trackByDate\",(t,e)=>e.date);this.scrollService=t}set selectedDate(t){this.selectedDate$.next(t)}set activeDates(t){this.activeDates$.next(t)}set calendarMode(t){this.calendarMode$.next(t)}get displayedWeekNames(){var t;return(t=this.weekNames)!=null&&t.length?this.startWeekOnSunday?[this.weekNames[6],...this.weekNames.slice(0,6)]:this.weekNames:[]}set startWeekOnSunday(t){this.startWeekOnSunday$.next(!!t)}get startWeekOnSunday(){return this.startWeekOnSunday$.value}ngOnInit(){j([this.selectedDate$,this.calendarMode$,this.startWeekOnSunday$]).pipe(P(this.destroy$)).subscribe(([t,e])=>{e&&this.periods$.next({prev:this.calculatePeriod(t,e,I.prev),curr:this.calculatePeriod(t,e),next:this.calculatePeriod(t,e,I.next)})}),this.calendarDays$.pipe(P(this.destroy$)).subscribe(({curr:t})=>{var r,m;let e=(r=t[0])==null?void 0:r.date,i=(m=t[t.length-1])==null?void 0:m.date;e&&i&&this.periodChange.emit({from:e,to:i})}),this.visibleMonth$.pipe(P(this.destroy$)).subscribe(t=>this.calendarMonthChange.next(t))}toggleCalendarMode(){this.calendarTransactionType&&this.calendarMode$.value&&this.calendarModeChange.emit(gt(this.calendarTransactionType,this.calendarMode$.value))}handleDayClick(t){this.selectedDateChange.next(t.date)}onHorizontalSwipe(t){this.scrollService.ignoreNextScroll();let e=window.innerWidth,i=(t.x+e)/(e*2)*66.6;!this.disableRight&&i>33.3&&(this.calendarXTransform=i),!this.disableLeft&&i<33.3&&(this.calendarXTransform=i)}swipe(t){if(t.eventType===Se.swipeLeft){if(t.domEvent.stopPropagation(),this.disableRight)return;this.onNavigationClick(!0)}if(t.eventType===Se.swipeRight){if(t.domEvent.stopPropagation(),this.disableLeft)return;this.onNavigationClick(!1)}}onNavigationClick(t){var r;this.daysScrollAnimationState$.next(t?M.next:M.prev);let e=this.periods$.value,i=this.calendarMode$.value;if(e&&i){if(t){let m=g.fromISO(e.curr.to).addDays(1).toISODate()||\"\",f=this.calculatePeriod(m,i,I.next);this.periods$.next({prev:e.curr,curr:e.next,next:f})}else{let m=g.fromISO(e.curr.from).addDays(-1).toISODate()||\"\",f=this.calculatePeriod(m,i,I.prev);this.periods$.next({prev:f,curr:e.prev,next:e.curr})}this.selectFirstDayOnNavigation&&this.selectedDateChange.emit(((r=this.periods$.value)==null?void 0:r.curr.refDate)||\"\")}setTimeout(()=>{this.daysScrollAnimationState$.next(M.curr)},300)}getDaysByPeriod(t,e){let i=g.fromISO(t.from),r=g.fromISO(t.to).diffInDays(i),m=[];for(let f=0;f<=r;f++){let D=i.toISODate()||\"\",N=!!this.disabledBefore&&i<g.fromISO(this.disabledBefore),G=N||!e.includes(D);m.push({date:D,day:i.getDay(),month:i.getMonth(),isGreyedOut:G,isToday:D===this.today,isDisabled:N}),i=i.addDays(1)}return m}calculatePeriod(t,e,i=I.curr){let r=g.fromISO(t);if(e===v.week){i!==I.curr&&(r=r.addWeeks(i===I.next?1:-1));let wt=r.getWeekDay(),Oe=(this.startWeekOnSunday?7:1)-wt,Mt=r.addDays(Oe).toISODate(),xt=r.addDays(Oe+6).toISODate();return{from:Mt,to:xt,refDate:r.toISODate()}}i!==I.curr&&(r=r.addMonth(i===I.next?1:-1)),r=r.setToFirstDayOfMonth();let m=r,f=r.addMonth(1).addDays(-1),D=m.getWeekDay(),N=f.getWeekDay(),G,ve;this.startWeekOnSunday?(G=D===7?0:D,ve=N===6?0:6-N):(G=D-1,ve=7-N);let bt=m.addDays(-G).toISODate(),Ot=f.addDays(ve).toISODate();return{from:bt,to:Ot,refDate:r.toISODate()}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};a(o,\"\\u0275fac\",function(e){return new(e||o)(B(pt))}),a(o,\"\\u0275cmp\",O({type:o,selectors:[[\"ui-kit-calendar\"]],viewQuery:function(e,i){if(e&1&&ie(Ut,5,Z),e&2){let r;ne(r=ae())&&(i.calendarDaysContainerRef=r.first)}},inputs:{selectedDate:\"selectedDate\",activeDates:\"activeDates\",calendarMode:\"calendarMode\",calendarTransactionType:\"calendarTransactionType\",monthNames:\"monthNames\",weekNames:\"weekNames\",disabledBefore:\"disabledBefore\",disableLeft:\"disableLeft\",disableRight:\"disableRight\",selectFirstDayOnNavigation:\"selectFirstDayOnNavigation\",startWeekOnSunday:\"startWeekOnSunday\"},outputs:{selectedDateChange:\"selectedDateChange\",periodChange:\"periodChange\",calendarMonthChange:\"calendarMonthChange\",calendarModeChange:\"calendarModeChange\"},decls:17,vars:39,consts:[[\"calendarDaysContainer\",\"\"],[1,\"calendar-header\"],[3,\"click\",\"currentMonth\",\"monthNames\",\"mode\",\"currentYear\",\"hasTransaction\"],[3,\"onLeftClick\",\"onRightClick\",\"disabledLeft\",\"disabledRight\"],[3,\"uiKitSwipe\",\"uiKitOnSwipeHorizontal\",\"disableTimeout\",\"swipeThreshold\"],[1,\"calendar-body\"],[1,\"calendar-week-names-container\"],[\"class\",\"week-name\",4,\"ngFor\",\"ngForOf\"],[1,\"calendar-body-slider\"],[\"class\",\"days-slider\",3,\"transform\",4,\"ngIf\"],[1,\"week-name\"],[1,\"days-slider\"],[1,\"calendar-days-container\"],[\"class\",\"calendar-day\",4,\"ngFor\",\"ngForOf\",\"ngForTrackBy\"],[\"class\",\"calendar-day current\",3,\"current-week\",\"not-current-week\",4,\"ngFor\",\"ngForOf\",\"ngForTrackBy\"],[1,\"calendar-day\"],[3,\"day\",\"outOfViewport\"],[1,\"calendar-day\",\"current\"],[3,\"dayClick\",\"day\",\"isSelected\"]],template:function(e,i){e&1&&(h(0,\"div\",1)(1,\"ui-kit-calendar-month\",2),c(2,\"async\"),c(3,\"async\"),c(4,\"async\"),w(\"click\",function(){return i.toggleCalendarMode()}),u(),h(5,\"ui-kit-arrows\",3),c(6,\"async\"),w(\"onLeftClick\",function(){return i.onNavigationClick(!1)})(\"onRightClick\",function(){return i.onNavigationClick(!0)}),u()(),h(7,\"div\",4),c(8,\"async\"),w(\"uiKitSwipe\",function(m){return i.swipe(m)})(\"uiKitOnSwipeHorizontal\",function(m){return i.onHorizontalSwipe(m)}),h(9,\"div\",5)(10,\"div\",6),_(11,jt,3,1,\"div\",7),u(),h(12,\"div\",8),c(13,\"async\"),c(14,\"async\"),_(15,Gt,11,19,\"div\",9),c(16,\"async\"),u()()()),e&2&&(d(),p(\"currentMonth\",l(2,14,i.visibleMonth$))(\"monthNames\",i.monthNames)(\"mode\",l(3,16,i.calendarMode$))(\"currentYear\",l(4,18,i.visibleYear$))(\"hasTransaction\",!!i.calendarTransactionType),d(4),p(\"@monthBlankAnimation\",oe(30,kt,l(6,20,i.calendarMode$)))(\"disabledLeft\",i.disableLeft)(\"disabledRight\",i.disableRight),d(2),p(\"disableTimeout\",!0)(\"swipeThreshold\",0)(\"@monthBlankAnimation\",oe(32,kt,l(8,22,i.calendarMode$))),d(4),p(\"ngForOf\",i.displayedWeekNames),d(),p(\"@monthWeekAnimation\",Ue(36,Yt,l(13,24,i.calendarMode$),oe(34,Ht,l(14,26,i.calendarDaysContainerHeight$)))),d(3),p(\"ngIf\",l(16,28,i.calendarDays$)))},dependencies:[re,E,mt,ot,_t,vt,se,Ct],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{background-color:var(--y-core-color-surface-primary);display:block}[_nghost-%COMP%]   *[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent;touch-action:manipulation}[_nghost-%COMP%]   .calendar-days-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .calendar-week-names-container[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;gap:calc((100% - 280px) / 7)}[_nghost-%COMP%]   .week-name[_ngcontent-%COMP%], [_nghost-%COMP%]   ui-kit-calendar-day[_ngcontent-%COMP%]{padding:0 4px;width:40px;justify-content:center;align-items:center;display:flex}[_nghost-%COMP%]   .week-name[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:14px;line-height:20px}[_nghost-%COMP%]   .calendar-days-container[_ngcontent-%COMP%]{row-gap:12px;padding:0 12px;height:fit-content}[_nghost-%COMP%]   .calendar-week-names-container[_ngcontent-%COMP%]{margin-bottom:16px;padding:0 12px}[_nghost-%COMP%]   .calendar-body[_ngcontent-%COMP%]{padding:12px 0;overflow:hidden}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]{height:48px;align-items:center;display:flex;padding-left:16px;justify-content:space-between}[_nghost-%COMP%]   .days-slider[_ngcontent-%COMP%]{display:flex;width:300%;overflow:hidden}[_nghost-%COMP%]   .calendar-body-slider[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .calendar-day[_ngcontent-%COMP%]{height:32px;width:40px;margin:0 auto}[_nghost-%COMP%]   .week-name[_ngcontent-%COMP%]{margin:0 auto}[_nghost-%COMP%]   .calendar-day.current[_ngcontent-%COMP%]{transform:translateY(0)}'],data:{animation:[ce(\"datesScroll\",[V(M.curr,y({transform:\"translate3d(-33.3%, 0, 0)\"})),V(M.prev,y({transform:\"translate3d(0, 0, 0)\"})),V(M.next,y({transform:\"translate3d(-66.6%, 0, 0)\"})),K(\"\".concat(M.curr,\" => \").concat(M.prev),[y({transform:\"translateX(-33.3%)\"}),$(\"\".concat(300,\"ms ease-in-out\"),y({transform:\"translateX(0)\"}))]),K(\"\".concat(M.curr,\" => \").concat(M.next),[y({transform:\"translateX(0)\"}),$(\"\".concat(300,\"ms ease-in-out\"),y({transform:\"translateX(-33.3%)\"}))])]),ce(\"monthBlankAnimation\",[V(\"\".concat(v.blank),y({height:\"0px\",opacity:0,display:\"none\"})),V(\"\".concat(v.month),y({height:\"*\",opacity:1})),K(\"\".concat(v.month,\" <=> \").concat(v.blank),$(\"\".concat(500,\"ms \").concat(F)))]),ce(\"monthWeekAnimation\",[K(\"\".concat(v.month,\" => \").concat(v.week),De([H(\".calendar-day.not-current-week\",[y({opacity:\"1\",transform:\"translateY(0)\"}),$(\"\".concat(500/10,\"ms \").concat(F),y({opacity:\"0\",transform:\"translateY(-100px)\"}))]),H(\".calendar-day.current-week\",[y({opacity:\"1\",position:\"sticky\",bottom:\"0\"}),$(\"\".concat(500/10,\"ms \").concat(F),y({opacity:\"1\",position:\"sticky\",bottom:\"0\"}))]),H(\".calendar-days-container\",[y({height:\"{{fullHeight}}px\"}),$(\"\".concat(500,\"ms \").concat(F),y({height:\"32px\"}))])]),{params:{fullHeight:0}}),K(\"\".concat(v.week,\" => \").concat(v.month),De([H(\".calendar-day.not-current-week\",[y({opacity:\"0\",transform:\"translateY(-100px)\"}),$(\"10ms \".concat(F),y({opacity:\"1\",transform:\"translateY(0)\"}))]),H(\".calendar-day.current-week\",[y({opacity:\"1\",position:\"sticky\",bottom:\"0\"}),$(\"\".concat(500,\"ms \").concat(F),y({opacity:\"1\",position:\"sticky\",bottom:\"0\"}))]),H(\".calendar-days-container\",[y({height:\"32px\"}),$(\"\".concat(500,\"ms \").concat(F),y({height:\"*\"}))])]))])]}}));let n=o;return n})();function Qt(n,o){if(n&1){let s=te();h(0,\"ui-kit-chips\",3),w(\"click\",function(){let e=q(s),i=e.$implicit,r=e.index,m=C();return J(m.selectTime(i,r))}),h(1,\"span\"),x(2),c(3,\"timeInterval\"),u()()}if(n&2){let s=o.$implicit,t=C();p(\"active\",t.selectedDateTime===s.datetime),k(\"data-locator\",\"timeslot\"),d(2),U(l(3,3,s.datetime))}}var Dt=(()=>{let o=class o{constructor(t,e,i){a(this,\"store\");a(this,\"trackingService\");a(this,\"changeDetectorRef\");a(this,\"selectedDateTime\");a(this,\"bookTimes\");a(this,\"dayTime\");a(this,\"timesChildren\");a(this,\"position\");this.store=t,this.trackingService=e,this.changeDetectorRef=i}bookTimesIdentify(t,e){return e.datetime}ngOnChanges(){this.updatePosition()}ngAfterViewInit(){setTimeout(()=>this.updatePosition())}selectTime(t,e){this.sendSelectTimeEvent(t,e),this.store.dispatch(new ue(t.datetime))}sendSelectTimeEvent(t,e){this.trackingService.track({type:pe.Action.click,name:\"select_time\",element_type:\"time\",element_name:Qe(t.datetime),part_type:\"date\",part_name:fe(t.datetime),element_number:e,element_duration:t.seance_length})}updatePosition(){if(this.timesChildren&&this.selectedDateTime){let t=this.bookTimes.findIndex(e=>e.datetime===this.selectedDateTime);t>=0&&(this.position=ut(this.timesChildren,t,!0),this.changeDetectorRef.detectChanges())}}};a(o,\"\\u0275fac\",function(e){return new(e||o)(B(le),B(me),B(He))}),a(o,\"\\u0275cmp\",O({type:o,selectors:[[\"app-scrollable-time-intervals\"]],viewQuery:function(e,i){if(e&1&&ie(ye,5,Z),e&2){let r;ne(r=ae())&&(i.timesChildren=r)}},inputs:{selectedDateTime:\"selectedDateTime\",bookTimes:\"bookTimes\",dayTime:\"dayTime\"},features:[Ae],decls:4,vars:4,consts:[[1,\"label\"],[3,\"scrollLeft\"],[\"class\",\"time-interval\",3,\"active\",\"click\",4,\"ngFor\",\"ngForOf\",\"ngForTrackBy\"],[1,\"time-interval\",3,\"click\",\"active\"]],template:function(e,i){e&1&&(h(0,\"p\",0),x(1),u(),h(2,\"ui-kit-horizontal-scrollable\",1),_(3,Qt,4,5,\"ui-kit-chips\",2),u()),e&2&&(d(),U(i.dayTime),d(),p(\"scrollLeft\",i.position),d(),p(\"ngForOf\",i.bookTimes)(\"ngForTrackBy\",i.bookTimesIdentify))},dependencies:[re,ye,at,dt],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block}.label[_ngcontent-%COMP%]{margin-left:16px;margin-bottom:8px;color:var(--widget-ui-kit-color-grey-main)}.time-interval[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:18px}.time-interval[_ngcontent-%COMP%]:last-child{margin-right:16px}'],changeDetection:0}));let n=o;return n})();var St=(()=>{let o=class o{constructor(){a(this,\"header\",\"\")}};a(o,\"\\u0275fac\",function(e){return new(e||o)}),a(o,\"\\u0275cmp\",O({type:o,selectors:[[\"app-no-dates-header\"]],inputs:{header:\"header\"},decls:1,vars:1,consts:[[3,\"innerHTML\"]],template:function(e,i){e&1&&T(0,\"p\",0),e&2&&p(\"innerHTML\",i.header,Fe)},styles:['@charset \"UTF-8\";a{color:var(--y-core-color-other-link);cursor:pointer}\\n'],encapsulation:2}));let n=o;return n})();function Zt(n,o){if(n&1&&(T(0,\"app-scrollable-time-intervals\",8),c(1,\"translate\"),c(2,\"async\"),c(3,\"async\")),n&2){let s=C(3);p(\"dayTime\",l(1,4,\"time.the_part_of_day.morning\"))(\"bookTimes\",l(2,6,s.morningTimes$))(\"selectedDateTime\",l(3,8,s.selectedDateTime$)),k(\"data-locator\",\"timeslots_group_title\")}}function ei(n,o){if(n&1&&(T(0,\"app-scrollable-time-intervals\",8),c(1,\"translate\"),c(2,\"async\"),c(3,\"async\")),n&2){let s=C(3);p(\"dayTime\",l(1,4,\"time.the_part_of_day.day\"))(\"bookTimes\",l(2,6,s.afternoonTimes$))(\"selectedDateTime\",l(3,8,s.selectedDateTime$)),k(\"data-locator\",\"timeslots_group_title\")}}function ti(n,o){if(n&1&&(T(0,\"app-scrollable-time-intervals\",8),c(1,\"translate\"),c(2,\"async\"),c(3,\"async\")),n&2){let s=C(3);p(\"dayTime\",l(1,4,\"time.the_part_of_day.evening\"))(\"bookTimes\",l(2,6,s.eveningTimes$))(\"selectedDateTime\",l(3,8,s.selectedDateTime$)),k(\"data-locator\",\"timeslots_group_title\")}}function ii(n,o){if(n&1&&(We(0),_(1,Zt,4,10,\"app-scrollable-time-intervals\",7),c(2,\"async\"),_(3,ei,4,10,\"app-scrollable-time-intervals\",7),c(4,\"async\"),_(5,ti,4,10,\"app-scrollable-time-intervals\",7),c(6,\"async\"),Le()),n&2){let s,t,e,i=C(2);d(),p(\"ngIf\",((s=l(2,3,i.morningTimes$))==null?null:s.length)>0),d(2),p(\"ngIf\",((t=l(4,5,i.afternoonTimes$))==null?null:t.length)>0),d(2),p(\"ngIf\",((e=l(6,7,i.eveningTimes$))==null?null:e.length)>0)}}function ni(n,o){if(n&1&&(h(0,\"app-not-allowed\"),T(1,\"app-no-dates-header\",9),c(2,\"translate\"),u()),n&2){let s=C(2);d(),p(\"header\",l(2,1,s.errorText))}}function ai(n,o){if(n&1&&(h(0,\"div\",5),_(1,ii,7,9,\"ng-container\",6)(2,ni,3,3,\"app-not-allowed\",6),c(3,\"async\"),c(4,\"async\"),c(5,\"async\"),u()),n&2){let s,t=C();k(\"data-locator\",\"timeslots_group\"),d(),p(\"ngIf\",!(t.dateSlotIsHiddenByInjection!=null&&t.dateSlotIsHiddenByInjection.active)),d(),p(\"ngIf\",((s=l(3,3,t.morningTimes$))==null?null:s.length)===0&&((s=l(4,5,t.afternoonTimes$))==null?null:s.length)===0&&((s=l(5,7,t.eveningTimes$))==null?null:s.length)===0||(t.dateSlotIsHiddenByInjection==null?null:t.dateSlotIsHiddenByInjection.active))}}var oi=30*6,In=(()=>{let o=class o extends ht{constructor(e,i){super(e,i);a(this,\"router\");a(this,\"route\");a(this,\"store\",R(le));a(this,\"trackingService\",R(me));a(this,\"metrikaService\",R(st));a(this,\"widgetApiHelperService\",R(rt));a(this,\"translate\",R(de));a(this,\"calendarI18nService\",R(yt));a(this,\"dates$\",new b([]));a(this,\"morningTimes$\",this.generateTimes(Je));a(this,\"afternoonTimes$\",this.generateTimes(Ze));a(this,\"eveningTimes$\",this.generateTimes(et));a(this,\"selectedDate$\",this.store.select(A.order.getIndividualSelectedDate));a(this,\"selectedDateTime$\",this.store.select(A.order.getSelectedDateTime));a(this,\"company$\",this.store.select(A.currentCompany.getCurrentCompany));a(this,\"startWeekOnSunday$\",this.store.select(A.currentCompany.getCurrentCompany).pipe(S(e=>ft(e.country_id))));a(this,\"bookTimesIsLoading$\",this.store.select(A.dateTime.isBookTimesLoading));a(this,\"dateSlotIsHiddenByInjection\",{active:!1,label:\"\"});a(this,\"errorText\",\"master.no_record_new\");a(this,\"availableDates$\",this.dates$.asObservable().pipe(S(e=>e.filter(i=>i.isBooking).map(i=>i.date))));a(this,\"today\",g.now().toISODate());a(this,\"calendarMonth$\",new b(g.now().getMonth()));a(this,\"visiblePeriod$\",new b({from:this.today,to:this.today}));a(this,\"disableGoLeftCalendar$\",j([this.visiblePeriod$,this.calendarMonth$]).pipe(S(([{from:e},i])=>{let r=g.fromISO(e).toMilliseconds(),m=g.fromISO(this.today).toMilliseconds();return r<=m&&i<=g.now().getMonth()})));a(this,\"calendarMode$\",new b(v.week));a(this,\"destroy$\",new $e(1));this.router=e,this.route=i}static getLastBookableDaysIndex(e){return e.map(i=>i.isBooking).lastIndexOf(!0)}ngOnInit(){this.sendPageViewEvent(),this.dates$.next(this.initStartDates()),this.updateDates(),this.updateBookTimes(),this.store.dispatch(ct())}handleDateChange(e){this.selectDate(e)}handlePeriodChange(e){this.visiblePeriod$.next(e)}handleMonthChange(e){this.calendarMonth$.next(e)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.dates$.complete(),this.store.dispatch(lt())}selectDate(e){this.sendSelectDateEvent(e),this.updateSelectedDate(e),this.refreshTime()}close(){this.sendContinueButtonClickEvent(),this.navigateToParent(\"preserve\",!0)}updateDates(){this.store.select(A.dateTime.getBookDates).pipe(he(),S(e=>e.booking_dates),Pe(this.selectedDate$),P(this.destroy$)).subscribe(([e,i])=>{let r=new Set(e);i==null&&(i=e.length?e[0]:null),this.updateSelectedDate(i);let m=this.initStartDates().map(D=>r.has(D.date)?Me(we({},D),{isBooking:!0}):D),f=o.getLastBookableDaysIndex(m);this.dates$.next(m.slice(0,f+1))})}setHiddenDateSlotByInjection(e){var r,m,f,D;let i=(r=this.widgetApiHelperService.notWorkingDatesList)==null?void 0:r.find(N=>N.datesList.includes(e));this.dateSlotIsHiddenByInjection={active:!!i,label:(m=i==null?void 0:i.text)!=null?m:\"\"},(f=this.dateSlotIsHiddenByInjection)!=null&&f.active&&(this.errorText=(D=this.dateSlotIsHiddenByInjection)==null?void 0:D.label)}generateTimes(e){return this.store.select(A.dateTime.getBookTimes).pipe(he(),S(i=>i.filter(r=>e(qe(r)))))}updateBookTimes(){this.selectedDate$.pipe(Q(),P(this.destroy$)).subscribe(()=>{this.store.dispatch(new tt)})}updateSelectedDate(e){this.setHiddenDateSlotByInjection(e),this.dateSlotIsHiddenByInjection.active||(this.errorText=\"master.no_record_new\",this.store.dispatch(new Ge(e)))}refreshTime(){this.store.dispatch(new ue(null))}initStartDates(){return new Array(oi).fill(0).map((e,i)=>({date:fe(Date.now()+Xe*i),isBooking:!1}))}sendPageViewEvent(){this.company$.pipe(Ce(),he(),P(this.destroy$)).subscribe(e=>{this.metrikaService.reachGoal(\"screen_open_date\",{companyId:e.id,companyName:e.title}),this.trackingService.pageView(\"datetime_list\")})}sendSelectDateEvent(e){this.company$.pipe(Ce(),P(this.destroy$)).subscribe(i=>{this.metrikaService.reachGoal(\"date_selected\",{date:e,companyId:i.id,companyName:i.title}),this.trackingService.track({type:pe.Action.click,name:\"select_date\",element_type:\"date\",element_name:e})})}sendContinueButtonClickEvent(){this.trackingService.buttonClick(\"click_button_next_step\",\"button_next_step\")}};a(o,\"\\u0275fac\",function(i){return new(i||o)(B(je),B(Ye))}),a(o,\"\\u0275cmp\",O({type:o,selectors:[[\"app-select-time\"]],features:[Re],decls:15,vars:32,consts:[[3,\"periodChange\",\"selectedDateChange\",\"calendarMonthChange\",\"calendarMode\",\"activeDates\",\"weekNames\",\"monthNames\",\"selectedDate\",\"disabledBefore\",\"disableLeft\",\"startWeekOnSunday\"],[1,\"separate-line\"],[1,\"times-container\"],[\"class\",\"times\",4,\"ngIf\"],[1,\"select-time-button\",3,\"click\",\"disabled\",\"title\"],[1,\"times\"],[4,\"ngIf\"],[3,\"dayTime\",\"bookTimes\",\"selectedDateTime\",4,\"ngIf\"],[3,\"dayTime\",\"bookTimes\",\"selectedDateTime\"],[3,\"header\"]],template:function(i,r){i&1&&(h(0,\"ui-kit-calendar\",0),c(1,\"async\"),c(2,\"async\"),c(3,\"async\"),c(4,\"async\"),c(5,\"async\"),c(6,\"async\"),c(7,\"async\"),w(\"periodChange\",function(f){return r.handlePeriodChange(f)})(\"selectedDateChange\",function(f){return r.handleDateChange(f)})(\"calendarMonthChange\",function(f){return r.handleMonthChange(f)}),u(),T(8,\"div\",1),h(9,\"div\",2),_(10,ai,6,9,\"div\",3),c(11,\"async\"),u(),h(12,\"ui-kit-button\",4),c(13,\"async\"),c(14,\"translate\"),w(\"click\",function(){return r.close()}),u()),i&2&&(p(\"calendarMode\",l(1,12,r.calendarMode$))(\"activeDates\",l(2,14,r.availableDates$))(\"weekNames\",l(3,16,r.calendarI18nService.getWeekNames$()))(\"monthNames\",l(4,18,r.calendarI18nService.getMonthNames$()))(\"selectedDate\",l(5,20,r.selectedDate$))(\"disabledBefore\",r.today)(\"disableLeft\",l(6,22,r.disableGoLeftCalendar$))(\"startWeekOnSunday\",l(7,24,r.startWeekOnSunday$)),d(10),p(\"ngIf\",l(11,26,r.bookTimesIsLoading$)===!1),d(2),p(\"disabled\",!l(13,28,r.selectedDateTime$))(\"title\",l(14,30,\"button.continue\")),k(\"data-locator\",\"continue_btn\"))},dependencies:[Tt,E,it,ze,Dt,St,Ve,se],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;margin-top:16px;transition:all .2s}.times-container[_ngcontent-%COMP%]{box-sizing:content-box;padding-top:16px;height:282px;max-height:282px;min-height:282px;overflow-y:auto}.loader[_ngcontent-%COMP%]{width:100%;height:100%}.times[_ngcontent-%COMP%]{height:100%;animation:_ngcontent-%COMP%_appear .5s linear}.select-time-button[_ngcontent-%COMP%]{position:initial;display:block;width:568px;max-width:calc(100% - 32px);margin:0 auto 24px}@keyframes _ngcontent-%COMP%_appear{0%{opacity:0}to{opacity:1}}'],changeDetection:0}));let n=o;return n})();export{ft as a,yt as b,v as c,be as d,gt as e,Tt as f,ci as g,ut as h,St as i,In as j};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 10375,
          "_transferSize": 11035,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.762Z",
        "time": 79.44300002418458,
        "timings": {
          "blocked": 55.871000091008845,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.367999999999995,
          "wait": 17.725000006467106,
          "receive": 5.478999926708639,
          "_blocked_queueing": 5.470000091008842,
          "_blocked_proxy": 16.483,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490370",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-PX7RBKSN.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4120"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d246ab47bcb2-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-92d\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "0c0219a11001b869c6d79c7fb9e0e380"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 2349,
            "mimeType": "application/javascript",
            "compression": 1373,
            "text": "import{Eb as _,rc as C}from\"./chunk-6FGVQ7PR.js\";import{Fb as i,Ka as f,Kc as h,Wb as d,Xb as l,Zb as s,cb as a,ec as c,fc as g,gc as p,oc as m}from\"./chunk-KO722YSM.js\";import{g as r}from\"./chunk-JV5WWF5Q.js\";var L=(()=>{let t=class t{constructor(){r(this,\"disabledLeft\",!1);r(this,\"disabledRight\",!1);r(this,\"bordered\",!1);r(this,\"onLeftClick\",new a);r(this,\"onRightClick\",new a)}rightClick(){this.disabledRight||this.onRightClick.emit()}leftClick(){this.disabledLeft||this.onLeftClick.emit()}};r(t,\"\\u0275fac\",function(o){return new(o||t)}),r(t,\"\\u0275cmp\",f({type:t,selectors:[[\"ui-kit-arrows\"]],inputs:{disabledLeft:\"disabledLeft\",disabledRight:\"disabledRight\",bordered:\"bordered\"},outputs:{onLeftClick:\"onLeftClick\",onRightClick:\"onRightClick\"},standalone:!0,features:[h],decls:4,vars:12,consts:[[1,\"arrow\",3,\"click\"],[1,\"arrow__left\",3,\"name\"],[1,\"arrow__right\",3,\"name\"]],template:function(o,e){o&1&&(c(0,\"div\",0),m(\"click\",function(){return e.leftClick()}),p(1,\"ui-kit-svg-icon\",1),g(),c(2,\"div\",0),m(\"click\",function(){return e.rightClick()}),p(3,\"ui-kit-svg-icon\",2),g()),o&2&&(s(\"bordered-arrow\",e.bordered)(\"disabled\",e.disabledLeft),i(),l(\"name\",e.bordered?\"forward\":\"common/arrow\"),d(\"data-locator\",\"arrow_left\"),i(),s(\"bordered-arrow\",e.bordered)(\"disabled\",e.disabledRight),i(),l(\"name\",e.bordered?\"forward\":\"common/arrow\"),d(\"data-locator\",\"arrow_right\"))},dependencies:[C,_],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:flex-start}[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{cursor:pointer;padding:16px;color:var(--y-core-color-icon-primary)}[_nghost-%COMP%]   .arrow__left[_ngcontent-%COMP%], [_nghost-%COMP%]   .arrow__right[_ngcontent-%COMP%]{display:block;width:16px;height:16px}[_nghost-%COMP%]   .arrow__right[_ngcontent-%COMP%]{transform:rotate(180deg)}[_nghost-%COMP%]   .arrow.disabled[_ngcontent-%COMP%]{color:var(--y-core-color-icon-tertiary);cursor:not-allowed}[_nghost-%COMP%]   .bordered-arrow[_ngcontent-%COMP%]{padding:8px;border-radius:8px;border:1px var(--y-core-color-stroke-primary) solid;width:32px;height:32px;transform:rotate(180deg)}[_nghost-%COMP%]   .bordered-arrow[_ngcontent-%COMP%]:hover{background:var(--y-core-color-stroke-primary)}[_nghost-%COMP%]   .bordered-arrow[_ngcontent-%COMP%]:last-child{margin-left:8px}']}));let n=t;return n})();export{L as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 976,
          "_transferSize": 1635,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.763Z",
        "time": 80.8309999993071,
        "timings": {
          "blocked": 56.34399990638345,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.28700000000000614,
          "wait": 21.796999956086275,
          "receive": 2.4030001368373632,
          "_blocked_queueing": 6.729999906383455,
          "_blocked_proxy": 15.443,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490211",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-STSHWXLS.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4136"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d246aa96bcbe-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-2ba\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "e4d0c77a5808b03d51d697f1e7df1081"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 698,
            "mimeType": "application/javascript",
            "compression": 273,
            "text": "import{N as a,P as h}from\"./chunk-6FGVQ7PR.js\";import{Gb as c,Ma as s}from\"./chunk-KO722YSM.js\";import{g as i}from\"./chunk-JV5WWF5Q.js\";var p=(()=>{let t=class t{constructor(r,e){i(this,\"childRouter\");i(this,\"childRoute\");this.childRouter=r,this.childRoute=e}navigateToParent(r=\"merge\",e){let n=this.getNearestRouteWithNonEmptyUrl(),u=n.snapshot.url.map(()=>\"..\").join(\"/\");this.childRouter.navigate([u],{relativeTo:n,queryParamsHandling:r,replaceUrl:!!e})}getNearestRouteWithNonEmptyUrl(){return this.childRoute.snapshot.url.length?this.childRoute:this.childRoute.parent}};i(t,\"\\u0275fac\",function(e){return new(e||t)(c(h),c(a))}),i(t,\"\\u0275dir\",s({type:t}));let o=t;return o})();export{p as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 425,
          "_transferSize": 1084,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.763Z",
        "time": 77.43099995423108,
        "timings": {
          "blocked": 56.68299999744445,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2540000000000049,
          "wait": 17.908000056311487,
          "receive": 2.5859999004751444,
          "_blocked_queueing": 6.955999997444451,
          "_blocked_proxy": 15.376000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490373",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-P3W6H44H.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4120"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d246ae52bcb8-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-25a6\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "aefe9bb4a2e45f3b53818150ec9177ea"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 9638,
            "mimeType": "application/javascript",
            "compression": 6155,
            "text": "import{a as oe}from\"./chunk-2HW2JYAQ.js\";import{a as se}from\"./chunk-J5MXNZWD.js\";import{j as ee,w as te}from\"./chunk-IGSDBEZN.js\";import{b as ae}from\"./chunk-NZOI5B53.js\";import{c as ie}from\"./chunk-5GELTLFF.js\";import{a as ne}from\"./chunk-UTVABLOL.js\";import{g as X,i as Z}from\"./chunk-IV3KQJLV.js\";import{Ab as Y,Dc as F,Fc as G,G as K,Nf as R,Of as q,Pf as E,Qh as Q,Rh as W,Yd as H,ch as J,d as L,e as V}from\"./chunk-6FGVQ7PR.js\";import{Ac as v,Fb as c,Gb as T,Ka as w,Kc as j,Pc as x,Qc as M,Rc as B,Ua as A,Ub as S,Va as f,Wa as g,Wb as C,Xb as l,Zb as N,ac as U,cb as h,ec as m,fc as d,gc as P,hc as D,ic as O,kc as y,oc as u,pc as r,yc as k,zc as z}from\"./chunk-KO722YSM.js\";import{a as b,b as $,g as o}from\"./chunk-JV5WWF5Q.js\";var I=function(n){return n.mastersList=\"masters_list\",n.button=\"button\",n.buttonNextStep=\"button_next_step\",n.clickButtonNextStep=\"click_button_next_step\",n.master=\"master\",n.datetime=\"datetime\",n.masterInfo=\"master_info\",n.selectMaster=\"select_master\",n.selectMasterAndTime=\"select_master_and_time\",n}(I||{});function pe(n,s){n&1&&(m(0,\"span\"),k(1),x(2,\"translate\"),d()),n&2&&(c(),v(\"\",M(2,1,\"today\"),\":\"))}function me(n,s){n&1&&(m(0,\"span\"),k(1),x(2,\"translate\"),d()),n&2&&(c(),v(\"\",M(2,1,\"tomorrow\"),\":\"))}function de(n,s){if(n&1&&(m(0,\"span\",6),k(1),x(2,\"yDate\"),x(3,\"trim\"),d()),n&2){let a=r();c(),v(\" \",B(3,4,B(2,1,a.seances.seance_date,\"reverseFullDate2\"),\".\"),\": \")}}function _e(n,s){if(n&1){let a=y();m(0,\"ui-kit-chips\",7),u(\"click\",function(){let t=f(a),i=t.$implicit,p=t.index,_=r();return g(_.handleClickOnSeance(i,p))}),m(1,\"span\"),k(2),x(3,\"timeInterval\"),d()()}if(n&2){let a=s.$implicit,e=r();l(\"active\",e.isSeanceSelected(a)),C(\"data-locator\",\"timeslot_\"+a.time),c(2),z(M(3,3,a.datetime))}}var re=(()=>{let s=class s{constructor(){o(this,\"seances\");o(this,\"loading\",!1);o(this,\"selectedSlotDateTime\");o(this,\"selectSeance\",new h);o(this,\"isMobileDevice\",K().phone)}isSeanceSelected(e){return e.datetime===this.selectedSlotDateTime}handleClickOnSeance(e,t){this.isSeanceSelected(e)?this.selectSeance.emit():this.selectSeance.emit($(b({},e),{seanceIndex:t}))}get seancesToday(){return R(E(this.seances.seance_date))}get seancesTomorrow(){return q(E(this.seances.seance_date))}};o(s,\"\\u0275fac\",function(t){return new(t||s)}),o(s,\"\\u0275cmp\",w({type:s,selectors:[[\"app-staff-seances\"]],inputs:{seances:\"seances\",loading:\"loading\",selectedSlotDateTime:\"selectedSlotDateTime\"},outputs:{selectSeance:\"selectSeance\"},standalone:!0,features:[j],decls:9,vars:9,consts:[[1,\"date\"],[1,\"date_accent\"],[4,\"ngIf\"],[\"class\",\"date__seance\",4,\"ngIf\"],[1,\"scrollable-slots\",3,\"hideScrollbar\"],[\"class\",\"slot\",3,\"active\",\"click\",4,\"ngFor\",\"ngForOf\"],[1,\"date__seance\"],[1,\"slot\",3,\"click\",\"active\"]],template:function(t,i){t&1&&(m(0,\"div\",0),k(1),x(2,\"translate\"),m(3,\"span\",1),S(4,pe,3,3,\"span\",2)(5,me,3,3,\"span\",2)(6,de,4,7,\"span\",3),d()(),m(7,\"ui-kit-horizontal-scrollable\",4),S(8,_e,4,5,\"ui-kit-chips\",5),d()),t&2&&(C(\"data-locator\",\"timeslots_date\"),c(),v(\" \",M(2,7,\"master.nearest_time\"),\" \"),c(3),l(\"ngIf\",i.seancesToday),c(),l(\"ngIf\",i.seancesTomorrow&&!i.seancesToday),c(),l(\"ngIf\",!i.seancesToday&&!i.seancesTomorrow),c(),l(\"hideScrollbar\",i.isMobileDevice),c(),l(\"ngForOf\",i.seances.seances))},dependencies:[V,ie,ne,Z,Y,X,oe,L,se],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block}.date[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:14px;line-height:20px;color:var(--y-core-color-text-secondary);margin-bottom:8px}.date[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.date_accent[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary)}.date__seance[_ngcontent-%COMP%]{white-space:nowrap}.scrollable-slots[_ngcontent-%COMP%]{padding:0}.scrollable-slots[_ngcontent-%COMP%]   .slot[_ngcontent-%COMP%]{height:40px}'],changeDetection:0}));let n=s;return n})();function ge(n,s){if(n&1){let a=y();D(0),m(1,\"app-staff-tile\",2),u(\"showInfo\",function(){f(a);let t=r(),i=t.$implicit,p=t.index,_=r();return g(_.handleShowInfo(i,p))})(\"click\",function(){f(a);let t=r(),i=t.$implicit,p=t.index,_=r();return g(_.handleClick(i,p))}),d(),P(2,\"div\",3),O()}if(n&2){let a=r().$implicit,e=r();c(),N(\"master-clickable\",e.isBookable(a)),l(\"staff\",a)(\"disabled\",e.isDisabled(a)),C(\"data-locator\",e.getMasterDataLocator(a))}}function Se(n,s){if(n&1){let a=y();m(0,\"app-staff-seances\",8),u(\"selectSeance\",function(t){f(a);let i=r(2),p=i.$implicit,_=i.index,ce=r();return g(ce.handleSelectSeance(t,p,_))})(\"click\",function(t){f(a);let i=r(3);return g(i.handleClickOnSeances(t))}),d()}if(n&2){let a=r(2).$implicit,e=r();l(\"seances\",s)(\"loading\",e.isSeancesLoading(a))(\"selectedSlotDateTime\",e.isSelected(a)?e.selectedSlotDateTime:void 0)}}function ue(n,s){n&1&&P(0,\"ui-kit-datetime-block-skeleton\",7),n&2&&l(\"timeSlotsCount\",4)}function xe(n,s){if(n&1){let a=y();D(0),m(1,\"div\",4),u(\"click\",function(){f(a);let t=r(),i=t.$implicit,p=t.index,_=r();return g(_.handleClick(i,p))}),m(2,\"app-staff-tile\",5),u(\"showInfo\",function(){f(a);let t=r(),i=t.$implicit,p=t.index,_=r();return g(_.handleShowInfo(i,p))}),d(),S(3,Se,1,3,\"app-staff-seances\",6)(4,ue,1,1,\"ui-kit-datetime-block-skeleton\",7),d(),O()}if(n&2){let a,e=r().$implicit,t=r();c(),C(\"data-locator\",t.getMasterDataLocator(e)),c(),N(\"master-clickable\",!t.isDisabled(e)),l(\"staff\",e)(\"infoVisible\",!t.isAny(e))(\"disabled\",t.isDisabled(e))(\"isSelected\",t.isSelected(e)),c(),U((a=t.getSeances(e))?3:!t.isAny(e)&&(t.isSeancesLoading(e)||t.company&&!t.staffSeances&&!t.selectedSlotDateTime)?4:-1,a)}}function he(n,s){if(n&1&&(D(0),S(1,ge,3,5,\"ng-container\",1)(2,xe,5,8,\"ng-container\",1),O()),n&2){let a=r();c(),l(\"ngIf\",!a.isNewListItemVariant),c(),l(\"ngIf\",a.isNewListItemVariant)}}var Xe=(()=>{let s=class s{constructor(e,t,i){o(this,\"tracking\");o(this,\"metrika\");o(this,\"storeSnapshotService\");o(this,\"isNewListItemVariant\",!1);o(this,\"masters\",[]);o(this,\"selectedMasterId\",null);o(this,\"company\",null);o(this,\"pageName\");o(this,\"staffSeances\",null);o(this,\"selectedSlotDateTime\");o(this,\"selectMaster\",new h);o(this,\"showInfo\",new h);o(this,\"selectSeance\",new h);o(this,\"initiallySelectedMasterId\",null);this.tracking=e,this.metrika=t,this.storeSnapshotService=i}static isMasterSelectedById(e,t){return t!==null&&e.id===t}isSelected(e){return s.isMasterSelectedById(e,this.selectedMasterId)}isBookable(e){return e.bookable===!0}isDisabled(e){return!this.isBookable(e)}isAny(e){return e.id===H}isSeancesLoading(e){return this.staffSeances&&this.company?Q(this.staffSeances,{companyId:this.company.id,staffId:e.id}):!1}trackByMasterId(e,t){return t.id}getSeances(e){return this.staffSeances&&this.company?W(this.staffSeances,{companyId:this.company.id,staffId:e.id}):null}getMasterTrackData(e,t){return{part_type:I.master,part_id:this.isAny(e)?0:e.id,part_name:e.name,part_number:Number.isInteger(t)?t+1:void 0,element_type:I.master,element_id:this.isAny(e)?0:e.id,element_name:e.name,element_active:this.isBookable(e)?1:0,element_value:Number(e.rating).toFixed(2),element_count:e.comments_count,element_number:Number.isInteger(t)?t+1:void 0}}getMasterDataLocator(e){return\"master_container_\".concat(e.id)}handleShowInfo(e,t){this.tracking.track(b({type:F.Action.click,name:I.masterInfo,page:this.pageName?{name:this.pageName}:void 0},this.getMasterTrackData(e,t))),this.showInfo.emit(e)}handleSelectSeance(e,t,i){e?this.selectSeance.emit({staff:t,seance:e,masterIndex:i,seanceIndex:e.seanceIndex}):this.selectSeance.emit()}handleClick(e,t){var i,p;this.isBookable(e)&&(this.metrika.reachGoal(\"master_selected\",{master:e.name,masterId:e.id,companyId:(i=this.company)==null?void 0:i.id,companyName:(p=this.company)==null?void 0:p.title}),this.tracking.track(b({type:F.Action.select,name:I.selectMaster},this.getMasterTrackData(e,t))),this.selectMaster.emit(e),this.getSeances(e)&&(e.id!==this.selectedMasterId||this.selectedSlotDateTime)&&this.selectSeance.emit())}handleClickOnSeances(e){e.stopPropagation()}ngOnChanges(e){var t;(t=e.selectedMasterId)!=null&&t.isFirstChange()&&(this.initiallySelectedMasterId=this.selectedMasterId)}};o(s,\"\\u0275fac\",function(t){return new(t||s)(T(G),T(ae),T(J))}),o(s,\"\\u0275cmp\",w({type:s,selectors:[[\"app-masters-list\"]],inputs:{isNewListItemVariant:\"isNewListItemVariant\",masters:\"masters\",selectedMasterId:\"selectedMasterId\",company:\"company\",pageName:\"pageName\",staffSeances:\"staffSeances\",selectedSlotDateTime:\"selectedSlotDateTime\"},outputs:{selectMaster:\"selectMaster\",showInfo:\"showInfo\",selectSeance:\"selectSeance\"},features:[A],decls:1,vars:2,consts:[[4,\"ngFor\",\"ngForOf\",\"ngForTrackBy\"],[4,\"ngIf\"],[1,\"master\",3,\"showInfo\",\"click\",\"staff\",\"disabled\"],[1,\"separate-line\"],[3,\"click\"],[1,\"staff-block\",3,\"showInfo\",\"staff\",\"infoVisible\",\"disabled\",\"isSelected\"],[1,\"staff-seances-block\",3,\"seances\",\"loading\",\"selectedSlotDateTime\"],[1,\"datetime-block-skeleton-container\",3,\"timeSlotsCount\"],[1,\"staff-seances-block\",3,\"selectSeance\",\"click\",\"seances\",\"loading\",\"selectedSlotDateTime\"]],template:function(t,i){t&1&&S(0,he,3,2,\"ng-container\",0),t&2&&l(\"ngForOf\",i.masters)(\"ngForTrackBy\",i.trackByMasterId)},dependencies:[L,V,ee,te,re],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%;overflow-y:auto;overflow-x:hidden}.staff-block[_ngcontent-%COMP%]{display:block;padding:8px 16px}.staff-seances-block[_ngcontent-%COMP%]{padding:4px 0 8px 16px}.master-clickable[_ngcontent-%COMP%]{cursor:pointer}.separate-line[_ngcontent-%COMP%]{margin-left:60px}.master[_ngcontent-%COMP%]{margin:0;padding:8px 16px}.datetime-block-skeleton-container[_ngcontent-%COMP%]{display:flex;padding:8px 0 8px 16px}'],changeDetection:0}));let n=s;return n})();export{I as a,re as b,Xe as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3483,
          "_transferSize": 4143,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.763Z",
        "time": 82.36699993722141,
        "timings": {
          "blocked": 57.04499992798269,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2920000000000016,
          "wait": 19.14800004068762,
          "receive": 5.881999968551099,
          "_blocked_queueing": 9.071999927982688,
          "_blocked_proxy": 13.479999999999999,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490171",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-2HW2JYAQ.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4120"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d2469e50bcb8-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-12c\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "f3d12aab14baeeb6960d24e00c9821f7"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 300,
            "mimeType": "application/javascript",
            "compression": 70,
            "text": "import{Na as i}from\"./chunk-KO722YSM.js\";import{g as a}from\"./chunk-JV5WWF5Q.js\";var p=(()=>{let r=class r{transform(e,n){return e?e.replace(n,\"\"):\"\"}};a(r,\"\\u0275fac\",function(n){return new(n||r)}),a(r,\"\\u0275pipe\",i({name:\"trim\",type:r,pure:!0,standalone:!0}));let t=r;return t})();export{p as a};\n"
          },
          "redirectURL": "",
          "headersSize": 657,
          "bodySize": 230,
          "_transferSize": 887,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.763Z",
        "time": 75.44499996583909,
        "timings": {
          "blocked": 57.48400000578165,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2609999999999957,
          "wait": 14.587000004865232,
          "receive": 3.1129999551922083,
          "_blocked_queueing": 10.18300000578165,
          "_blocked_proxy": 12.613,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490176",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-4JEP2PPC.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4120"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d246aba178ca-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-1d1f\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "d08bcae463fd7cc4f8c65abe32b07741"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 7455,
            "mimeType": "application/javascript",
            "compression": 4736,
            "text": "import{a as $}from\"./chunk-O4HV4GD6.js\";import{A as Z,z as q}from\"./chunk-IGSDBEZN.js\";import{f as N,g as z}from\"./chunk-TXASR5LU.js\";import{a as j}from\"./chunk-4LVJC2QZ.js\";import{$ as H,Fb as v,Hb as U,Xc as F,Z as B,_ as A,ba as V,c as E,da as K,e as L,fa as I,ha as M}from\"./chunk-6FGVQ7PR.js\";import{Fb as m,Gb as O,Ka as y,Kc as D,Ub as f,Va as u,Wa as g,Wb as S,Xb as l,Yb as x,Zb as w,cb as _,ec as d,fc as c,gc as P,kc as C,oc as p,pc as s,qc as b,rc as T}from\"./chunk-KO722YSM.js\";import{g as i}from\"./chunk-JV5WWF5Q.js\";var k=\"FadeOut\",G=B(\"routeAnimations\",[K(\"* <=> \".concat(k),[M(\":leave\",I(),{optional:!0}),H([M(\":leave\",[A(\"0.2s ease-in\",V({opacity:0}))],{optional:!0})])])]);var Q=[\"*\"];function R(r,a){if(r&1&&(d(0,\"div\",7),P(1,\"div\",8),c()),r&2){let o=s().ngVar;l(\"ngClass\",o?\"with-app-header\":\"\")}}function W(r,a){if(r&1){let o=C();d(0,\"ui-kit-header\",9),p(\"leadingClick\",function(){u(o);let n=s(2);return g(n.backButtonClick())}),c()}if(r&2){let o=s(2);l(\"title\",o.title)(\"leading\",o.currentLeading)(\"leadingDataLocator\",\"close_popup_btn\")(\"titleDataLocator\",o.titleDataLocator)}}function X(r,a){if(r&1){let o=C();d(0,\"div\",2)(1,\"div\",3),p(\"uiKitSwipe\",function(n){u(o);let e=s();return g(e.swipe(n))}),f(2,R,2,1,\"div\",4)(3,W,1,4,\"ui-kit-header\",5),c(),d(4,\"div\",6),p(\"childScrollTop\",function(n){u(o);let e=s();return g(e.onChildScrollTopChange(n))})(\"uiKitSwipe\",function(n){u(o);let e=s();return g(e.swipe(n))}),T(5),c()()}if(r&2){let o=a.ngVar,t=s();w(\"modal_transparent\",t.isTransparent),S(\"data-locator\",\"expanded_modal_popup\"),m(2),l(\"ngIf\",!t.hideFringe),m(),l(\"ngIf\",o),m(),l(\"@routeAnimations\",t.animationState)(\"swipeLocked\",t.scrollTop>0)(\"swipePreventDefault\",t.scrollTop<0)}}var Mt=(()=>{let a=class a{constructor(t){i(this,\"bodyScrollLockService\");i(this,\"showBackButton\",!1);i(this,\"title\",\"\");i(this,\"leading\");i(this,\"hideFringe\",!1);i(this,\"isTransparent\",!1);i(this,\"forceLockScrollOnOpen\",!1);i(this,\"titleDataLocator\",\"popup_title\");i(this,\"closeModalEvent\",new _);i(this,\"showedChange\",new _);i(this,\"isShowed\",!1);i(this,\"dirty\",!1);i(this,\"scrollTop\",0);i(this,\"animationState\",\"*\");i(this,\"fullyClosed\",!0);i(this,\"shouldUnlock\",!1);this.bodyScrollLockService=t}set showed(t){this.isShowed=t,this.animationState=this.isShowed?k:\"*\",t&&(this.dirty=!0,this.fullyClosed=!1,this.scrollTop=0,this.bodyScrollLockService.lock(this.forceLockScrollOnOpen),this.shouldUnlock=!0),!t&&this.shouldUnlock&&(this.bodyScrollLockService.unlock(),this.shouldUnlock=!1)}get currentLeading(){return this.leading?this.leading:this.showBackButton?v.back:v.none}swipe(t){t.eventType===q.swipeDown&&(t.domEvent.stopPropagation(),this.close())}onChildScrollTopChange(t){this.scrollTop=t}close(){this.scrollTop=0,this.showed=!1,this.bodyScrollLockService.unlock(),this.closeModalEvent.emit(!0)}backButtonClick(){this.closeModalEvent.emit(!0)}onAnimateEnd(){!this.isShowed&&!this.fullyClosed&&(this.fullyClosed=!0,this.closeModalEvent.emit(!1),this.showedChange.emit(!1))}ngOnDestroy(){this.bodyScrollLockService.unlock()}get isDirty(){return this.dirty}get showedIsTrue(){return this.isShowed}get isDisplayed(){return this.fullyClosed?\"0\":\"100%\"}};i(a,\"\\u0275fac\",function(n){return new(n||a)(O($))}),i(a,\"\\u0275cmp\",y({type:a,selectors:[[\"app-modal\"]],hostVars:6,hostBindings:function(n,e){n&1&&p(\"transitionend\",function(){return e.onAnimateEnd()})(\"webkitTransitionEnd\",function(){return e.onAnimateEnd()})(\"msTransitionEnd\",function(){return e.onAnimateEnd()})(\"oTransitionEnd\",function(){return e.onAnimateEnd()}),n&2&&(x(\"height\",e.isDisplayed),w(\"dirty\",e.isDirty)(\"showed\",e.showedIsTrue))},inputs:{showBackButton:\"showBackButton\",title:\"title\",leading:\"leading\",hideFringe:\"hideFringe\",isTransparent:\"isTransparent\",forceLockScrollOnOpen:\"forceLockScrollOnOpen\",showed:\"showed\",titleDataLocator:\"titleDataLocator\"},outputs:{closeModalEvent:\"closeModalEvent\",showedChange:\"showedChange\"},standalone:!0,features:[D],ngContentSelectors:Q,decls:2,vars:1,consts:[[1,\"background\",3,\"click\",\"uiKitSwipe\"],[\"class\",\"modal\",3,\"modal_transparent\",4,\"ngVar\"],[1,\"modal\"],[1,\"window-header\",3,\"uiKitSwipe\"],[\"class\",\"swipe-area\",3,\"ngClass\",4,\"ngIf\"],[3,\"title\",\"leading\",\"leadingDataLocator\",\"titleDataLocator\",\"leadingClick\",4,\"ngIf\"],[\"uiKitHandleChildScroll\",\"\",3,\"childScrollTop\",\"uiKitSwipe\",\"swipeLocked\",\"swipePreventDefault\"],[1,\"swipe-area\",3,\"ngClass\"],[1,\"swipe-anchor\"],[3,\"leadingClick\",\"title\",\"leading\",\"leadingDataLocator\",\"titleDataLocator\"]],template:function(n,e){n&1&&(b(),d(0,\"div\",0),p(\"click\",function(){return e.close()})(\"uiKitSwipe\",function(J){return e.swipe(J)}),c(),f(1,X,6,8,\"div\",1)),n&2&&(m(),l(\"ngVar\",e.showBackButton||(e.title==null?null:e.title.length)))},dependencies:[L,E,F,U,z,N,Z,j],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;z-index:11000;overflow:hidden}[_nghost-%COMP%]   .swipe-area[_ngcontent-%COMP%]{height:28px;color:var(--y-core-color-surface-primary);width:100%;text-align:center;position:relative}[_nghost-%COMP%]   .swipe-area[_ngcontent-%COMP%]   .swipe-anchor[_ngcontent-%COMP%]{height:4px;width:32px;border-radius:8px;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);background:var(--widget-ui-kit-color-grey-main)}[_nghost-%COMP%]   .swipe-area.with-app-header[_ngcontent-%COMP%]{height:16px}[_nghost-%COMP%]   .swipe-area.with-app-header[_ngcontent-%COMP%]   .swipe-anchor[_ngcontent-%COMP%]{top:100%;transform:translate3d(-50%,-100%,0)}.background[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:10500;opacity:0;will-change:auto;background-color:#000000a6;top:0;transition:opacity .2s ease-in}.dirty[_nghost-%COMP%]   .background[_ngcontent-%COMP%]{opacity:0}.showed[_nghost-%COMP%]   .background[_ngcontent-%COMP%]{opacity:1}.modal[_ngcontent-%COMP%]{will-change:auto;display:block;position:absolute;bottom:0;z-index:11000;background-color:var(--y-core-color-surface-primary);width:100%;transform:translate3d(0,100%,0);border-top-right-radius:8px;border-top-left-radius:8px;transition:transform .2s ease-in;max-height:90%;overflow:auto}.dirty[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{transform:translate3d(0,100%,0)}.showed[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{transform:translateZ(0)}.modal_transparent[_ngcontent-%COMP%]{background-color:transparent}.window-header[_ngcontent-%COMP%]{position:relative}.window-header[_ngcontent-%COMP%]   ui-kit-header[_ngcontent-%COMP%]{position:static;padding-top:0}.window-header[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .window-header[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{cursor:pointer;height:24px;position:absolute;left:16px;top:50%;transform:translate3d(0,-50%,0)}.title[_ngcontent-%COMP%]{text-align:center;height:56px;line-height:40px;color:#000;font-size:17px;font-weight:500;vertical-align:middle;padding:8px;box-sizing:border-box;border-bottom:.5px solid #f2f5ff}@media (min-width: 500px){[_nghost-%COMP%]   .swipe-area[_ngcontent-%COMP%]{display:none}.modal[_ngcontent-%COMP%]{max-width:392px;left:50%;top:50%;bottom:auto;border-radius:8px;transform:translate3d(-50%,-50%,0);opacity:1;transition:opacity .2s ease-in}.dirty[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{opacity:0;transform:translate3d(-50%,-50%,0)}.showed[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{opacity:1;transform:translate3d(-50%,-50%,0)}}'],data:{animation:[G]},changeDetection:0}));let r=a;return r})();export{Mt as a};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2719,
          "_transferSize": 3379,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.763Z",
        "time": 86.45699999760836,
        "timings": {
          "blocked": 64.79500004016609,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3160000000000025,
          "wait": 20.498000019609925,
          "receive": 0.8479999378323555,
          "_blocked_queueing": 10.47800004016608,
          "_blocked_proxy": 12.549,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490171",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-J5MXNZWD.js",
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
              "value": "https://n958200.alteg.io/record.route-5EXYOL7Y.js"
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
          "headersSize": 1057,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4120"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4d246ce70bcb8-ALA"
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
              "value": "Wed, 08 Oct 2025 10:05:42 GMT"
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
              "value": "W/\"68e51480-2ed\""
            },
            {
              "name": "last-modified",
              "value": "Tue, 07 Oct 2025 13:24:16 GMT"
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
              "value": "ddcf3b53fd17b967b6447ae78f5e6da9"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 749,
            "mimeType": "application/javascript",
            "compression": 283,
            "text": "import{g as u}from\"./chunk-IV3KQJLV.js\";import{Zf as a}from\"./chunk-6FGVQ7PR.js\";import{Gb as p,Na as f}from\"./chunk-KO722YSM.js\";import{g as r}from\"./chunk-JV5WWF5Q.js\";var h=(()=>{let t=class t{constructor(e){r(this,\"yDate\");this.yDate=e}transform(e,n=\" - \",m=null,d){if(!e)return console.warn(\"No dateTime provided to timeInterval pipe\"),\"\";let l=new Date(a(e)),i=this.yDate.transform(l.toISOString(),\"shortTime\",!1,m),s=new Date(a(e));s.setSeconds(s.getSeconds()+d||0);let c=this.yDate.transform(s.toISOString(),\"shortTime\",!1,m);return i===c?i:\"\".concat(i).concat(n).concat(c)}};r(t,\"\\u0275fac\",function(n){return new(n||t)(p(u,16))}),r(t,\"\\u0275pipe\",f({name:\"timeInterval\",type:t,pure:!0,standalone:!0}));let o=t;return o})();export{h as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 466,
          "_transferSize": 1125,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:42.763Z",
        "time": 96.59700002521276,
        "timings": {
          "blocked": 79.57600001019239,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.4300000000000068,
          "wait": 15.816999942168593,
          "receive": 0.7740000728517771,
          "_blocked_queueing": 13.119000010192394,
          "_blocked_proxy": 10.329,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "491510",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 334625
              },
              {
                "functionName": "c.fetch",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 138606
              },
              {
                "functionName": "c.send",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 137811
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136746
              },
              {
                "functionName": "c.send",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136660
              },
              {
                "functionName": "v.send",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 127941
              },
              {
                "functionName": "e.track",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 26646
              },
              {
                "functionName": "track",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 751891
              },
              {
                "functionName": "goToMyRecords",
                "scriptId": "1171",
                "url": "https://n958200.alteg.io/profile-UJ3PQK5W.js",
                "lineNumber": 0,
                "columnNumber": 10705
              },
              {
                "functionName": "",
                "scriptId": "1171",
                "url": "https://n958200.alteg.io/profile-UJ3PQK5W.js",
                "lineNumber": 0,
                "columnNumber": 8741
              },
              {
                "functionName": "Al",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 146709
              },
              {
                "functionName": "o",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 146894
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 251926
              },
              {
                "functionName": "invokeTask",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7089
              },
              {
                "functionName": "onInvokeTask",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74611
              },
              {
                "functionName": "invokeTask",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7010
              },
              {
                "functionName": "runTask",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2354
              },
              {
                "functionName": "invokeTask",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8163
              },
              {
                "functionName": "M",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "920",
                "url": "https://n958200.alteg.io/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js",
                "lineNumber": 0,
                "columnNumber": 9404
              }
            ]
          }
        },
        "_priority": "High",
        "_resourceType": "fetch",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "POST",
          "url": "https://tracks.alteg.io/api/v1/track",
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
              "name": "Content-Length",
              "value": "2355"
            },
            {
              "name": "Host",
              "value": "tracks.alteg.io"
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
              "value": "https://n958200.alteg.io/"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "empty"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-site"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "content-type",
              "value": "application/json"
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
          "headersSize": 684,
          "bodySize": 2355,
          "postData": {
            "mimeType": "application/json",
            "text": "[{\"type\":\"click\",\"name\":\"open_user_records\",\"date\":{\"track\":\"2025-10-08T10:05:45.172Z\",\"send\":\"2025-10-08T10:05:45.175Z\"},\"context\":{\"element\":{\"type\":\"button\",\"name\":\"open_user_records\"},\"json\":\"{\\\"salon_active\\\":1}\",\"action\":{\"index\":{\"sequence\":{\"cookie\":79}}},\"bookform\":{\"widget_id\":958200,\"language\":\"ru-RU\",\"type\":\"group\",\"group_id\":892622},\"page\":{\"current\":{\"version\":\"new_widget\"}},\"cookie\":{\"udid\":\"dkhJeE7k3dlHHKi46b2SftuPMDZzdQxl8gjzg4ky\"},\"company\":{\"id\":82311,\"latitude\":43.21170221,\"longitude\":76.87681465,\"address\":\"Мкр. Таугуль 1 72/1\"}},\"app\":{\"name\":\"client.booking\",\"type\":\"client\",\"version\":\"191110.5e092a20\"},\"sdk\":{\"version\":\"5.5.6\"},\"webVitals\":{\"ttfb\":154.6,\"fcp\":1368,\"lcp\":2052,\"fid\":5.5,\"cls\":0.02},\"device\":{\"uuid\":null,\"name\":\"Samsung\",\"version\":\"SM-G955U\",\"type\":\"mobile\",\"memory\":8,\"concurrency\":8},\"os\":{\"language\":\"ru\",\"languages\":[\"ru\"],\"name\":\"Android\",\"version\":\"8.0.0\"},\"browser\":{\"name\":\"Edge\",\"version\":\"140.0.0.0\",\"engine\":{\"name\":\"Blink\",\"version\":\"\"},\"useragent\":\"Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0\"},\"screen\":{\"orientation\":{\"type\":\"portrait-primary\",\"angle\":0},\"resolution\":{\"current\":[360,740]},\"touch\":[1,1,1],\"full\":0},\"url\":\"https://n958200.alteg.io/profile?orderStatus=successed&o=\",\"referrer\":\"\",\"connection\":{\"effective_type\":\"4g\",\"rtt\":50},\"adblock\":0,\"bot\":0,\"udid\":{\"weak\":\"684ce81efc60a5b64e283871d37675702cf03cb530ecccc006947bd25bdf04ee\",\"strong\":\"acfb272dfc7fa9337156ff9d0b4ffe8b5c2fb7e4c5de52cff93c962219ad8b6d\"},\"sid\":\"edaa2769e1d8a20fa01b01413fdfaa2a5001bb19d9448d14ea4d041cb62c9cc7\",\"page\":{\"name\":\"user_profile\",\"referrer\":{\"name\":\"\"},\"object\":{\"name\":\"\",\"type\":\"\"},\"view\":{\"id\":\"9c7db6cac031ed6b5efdd5ac35105113e64ad4f86a7fcb10bb7cc0efb397a357\",\"referrer\":{\"id\":\"\"}}},\"ab\":{\"group\":{\"weak\":\"51\",\"strong\":\"8\"}},\"location\":{\"latitude\":44,\"longitude\":76.2833,\"altitude\":null,\"accuracy\":null,\"timezone\":\"Asia/Almaty\",\"country_iso_code\":\"KZ\",\"country_name\":\"Kazakhstan\",\"city_name\":\"Almaty Oblysy\"},\"transport\":{\"retry\":0,\"latency\":0},\"utm\":{\"content\":null,\"medium\":null,\"source\":null,\"term\":null,\"campaign\":null},\"analytics\":{\"ym\":\"\",\"ga\":\"\"},\"user\":{\"id\":\"18551331011b57da90962a7673bcb8df\",\"type\":null},\"company\":{\"type\":null},\"business\":{\"type\":null,\"entity_id\":null}}]"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b4d2560b5fbca5-ALA"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "2"
            },
            {
              "name": "Content-Type",
              "value": "application/json"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 10:05:45 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "access-control-allow-headers",
              "value": "authorization, content-type, accept-language, x-requested-with, x-sdk-fingerprint-time, x-altegio-application-name, x-altegio-application-action, x-altegio-application-platform, x-altegio-application-version, x-altegio-application-generation"
            },
            {
              "name": "access-control-allow-methods",
              "value": "POST, OPTIONS"
            },
            {
              "name": "access-control-allow-origin",
              "value": "*"
            },
            {
              "name": "access-control-expose-headers",
              "value": "user_token, x-user_token"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "cf-cache-status",
              "value": "DYNAMIC"
            },
            {
              "name": "p3p",
              "value": "CP=\"ALL ADM DEV PSAi COM OUR OTRo STP IND ONL\""
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
              "value": "ee8a526b45f32f6fd96c0c9fd0c8ab21"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 2,
            "mimeType": "application/json",
            "compression": 0,
            "text": "[]"
          },
          "redirectURL": "",
          "headersSize": 1092,
          "bodySize": 2,
          "_transferSize": 1094,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:45.177Z",
        "time": 277.81800006050617,
        "timings": {
          "blocked": 104.18300006268173,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 1.0659999999999998,
          "wait": 171.40699999734758,
          "receive": 1.1620000004768372,
          "_blocked_queueing": 101.47900006268173,
          "_blocked_proxy": 1.9140000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "491510",
        "_initiator": {
          "type": "preflight",
          "url": "https://tracks.alteg.io/api/v1/track",
          "requestId": "28412.980"
        },
        "_priority": "High",
        "_resourceType": "preflight",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "OPTIONS",
          "url": "https://tracks.alteg.io/api/v1/track",
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
              "name": "Access-Control-Request-Headers",
              "value": "content-type"
            },
            {
              "name": "Access-Control-Request-Method",
              "value": "POST"
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
              "value": "tracks.alteg.io"
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
              "value": "https://n958200.alteg.io/"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "empty"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-site"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 584,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b4d2556ad7bca5-ALA"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "0"
            },
            {
              "name": "Content-Type",
              "value": "application/octet-stream"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 10:05:45 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "access-control-allow-headers",
              "value": "authorization, content-type, accept-language, x-requested-with, x-sdk-fingerprint-time, x-altegio-application-name, x-altegio-application-action, x-altegio-application-platform, x-altegio-application-version, x-altegio-application-generation"
            },
            {
              "name": "access-control-allow-methods",
              "value": "POST, OPTIONS"
            },
            {
              "name": "access-control-allow-origin",
              "value": "*"
            },
            {
              "name": "access-control-expose-headers",
              "value": "user_token, x-user_token"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "cf-cache-status",
              "value": "DYNAMIC"
            },
            {
              "name": "p3p",
              "value": "CP=\"ALL ADM DEV PSAi COM OUR OTRo STP IND ONL\""
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
              "value": "c508c32d74776afb4c0896cf4e23c636"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 0,
            "mimeType": "application/octet-stream",
            "compression": 944
          },
          "redirectURL": "",
          "headersSize": 944,
          "bodySize": -944,
          "_transferSize": 0,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:45.182Z",
        "time": 97.94700010772794,
        "timings": {
          "blocked": 2.998,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.6259999999999994,
          "wait": 92.92799996288866,
          "receive": 1.3950001448392868,
          "_blocked_queueing": -1,
          "_blocked_proxy": 1.5720000000000003,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490171",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "O",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 26029
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6847
              },
              {
                "functionName": "onScheduleTask",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 4019
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6745
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2958
              },
              {
                "functionName": "scheduleMacroTask",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3267
              },
              {
                "functionName": "Bt",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 10659
              },
              {
                "functionName": "",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 26439
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "apply",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 360009
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 241875
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32254
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32254
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 28229
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13506
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13212
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 16268
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17149
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13658
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "_subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 16457
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14787
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "_subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 6012
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5686
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "_subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 6012
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5686
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13603
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17254
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13168
              },
              {
                "functionName": "tc",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13297
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13134
              },
              {
                "functionName": "tc",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13297
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13065
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 28229
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13477
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32254
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32823
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 28229
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29917
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13506
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13658
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "_subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 16457
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14787
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "_subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 6012
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5686
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "_subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 6012
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5686
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13603
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13477
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29892
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32254
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29917
              }
            ]
          }
        },
        "_priority": "High",
        "_resourceType": "xhr",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/api/v1/booking/attendances?filter[chain_id]=892622&bookform_id=958200&include[]=location.map",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "application/json, text/plain, */*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
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
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/profile?orderStatus=successed&o="
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "empty"
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
              "name": "X-App-Signature",
              "value": ""
            },
            {
              "name": "X-App-Validation-Token",
              "value": ""
            },
            {
              "name": "X-altegio-Application-Action",
              "value": "profile.records"
            },
            {
              "name": "X-altegio-Application-Name",
              "value": "client.booking"
            },
            {
              "name": "X-altegio-Application-Platform",
              "value": "angular-18.2.13"
            },
            {
              "name": "X-altegio-Application-Version",
              "value": "191110.5e092a20"
            },
            {
              "name": "accept-language",
              "value": "ru-RU"
            },
            {
              "name": "baggage",
              "value": "sentry-environment=live,sentry-release=191110.5e092a20,sentry-public_key=7bcbd183611e0badf786d2fc35dc275d,sentry-trace_id=382d52252ef942c397d21f39d98513c4,sentry-sampled=false,sentry-sample_rand=0.8308515170806132,sentry-sample_rate=0"
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
            },
            {
              "name": "sentry-trace",
              "value": "382d52252ef942c397d21f39d98513c4-bff794548187d691-0"
            }
          ],
          "queryString": [
            {
              "name": "filter[chain_id]",
              "value": "892622"
            },
            {
              "name": "bookform_id",
              "value": "958200"
            },
            {
              "name": "include[]",
              "value": "location.map"
            }
          ],
          "cookies": [],
          "headersSize": 1766,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b4d2558c7bbcb8-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "no-store, no-cache, must-revalidate"
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
              "value": "application/json"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 10:05:45 GMT"
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
              "name": "access-control-allow-headers",
              "value": "Authorization, Content-Type, Accept-Language, X-Requested-With, X-ALTEGIO-Application-Name, X-ALTEGIO-Application-Action, X-ALTEGIO-Application-Platform, X-ALTEGIO-Application-Version"
            },
            {
              "name": "access-control-allow-methods",
              "value": "GET, POST, PUT, DELETE, OPTIONS, PATCH"
            },
            {
              "name": "access-control-allow-origin",
              "value": "*"
            },
            {
              "name": "access-control-expose-headers",
              "value": "User_Token, X-User_Token, x-geo-continent-code, x-geo-continent-name, x-geo-country-iso-code, x-geo-country-name, x-geo-location-latitude, x-geo-location-longitude, x-geo-location-timezone"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "cf-cache-status",
              "value": "DYNAMIC"
            },
            {
              "name": "p3p",
              "value": "CP=\"ALL ADM DEV PSAi COM OUR OTRo STP IND ONL\""
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
              "name": "x-csp-token",
              "value": "3ed590d4-7985-4f1f-bb02-3787405f7f2e"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-feature-notification-next",
              "value": "1"
            },
            {
              "name": "x-feature-waiting-room-api",
              "value": "0"
            },
            {
              "name": "x-feature-waiting-room-web",
              "value": "0"
            },
            {
              "name": "x-geo-city-name",
              "value": "Almaty Oblysy"
            },
            {
              "name": "x-geo-continent-code",
              "value": "AS"
            },
            {
              "name": "x-geo-continent-name",
              "value": "Asia"
            },
            {
              "name": "x-geo-country-iso-code",
              "value": "KZ"
            },
            {
              "name": "x-geo-country-name",
              "value": "Kazakhstan"
            },
            {
              "name": "x-geo-location-latitude",
              "value": "44.00000"
            },
            {
              "name": "x-geo-location-longitude",
              "value": "76.28330"
            },
            {
              "name": "x-geo-location-timezone",
              "value": "Asia/Almaty"
            },
            {
              "name": "x-node-id",
              "value": "api15-htz.altegio.cloud"
            },
            {
              "name": "x-request-id",
              "value": "765326e19002042ae7c9e02118b1e3a3"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 70970,
            "mimeType": "application/json",
            "compression": 63201,
            "text": "{\"data\":[{\"type\":\"booking_attendances\",\"id\":\"591536408\",\"attributes\":{\"hash\":\"940801a75995033ce9251bdbe9ed6a90\",\"token\":\"OcbNY\",\"datetime\":\"2025-06-17T10:30:00+0500\",\"comment\":\"\",\"create_date\":\"2025-06-10T13:51:05+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":600,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"591536408\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"750771\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"592581794\",\"attributes\":{\"hash\":\"e8958369796ac2b27f4322a2b6a648f3\",\"token\":\"OgzK2\",\"datetime\":\"2025-06-19T10:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-06-16T08:58:10+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":3600,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"592581794\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"237666\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"604179774\",\"attributes\":{\"hash\":\"decc5f89b417ee8f164689093ac2ca1c\",\"token\":\"O3eVe\",\"datetime\":\"2025-09-04T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-08-27T18:37:05+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":3600,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"604179774\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"581799\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"604179925\",\"attributes\":{\"hash\":\"f11823b774a1f6d6c5b712b6645b9245\",\"token\":\"O3eXF\",\"datetime\":\"2025-08-29T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-08-27T18:37:47+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":900,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"604179925\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"581799\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"607141458\",\"attributes\":{\"hash\":\"e4314851d86ea2bfac4d0b22231f21b6\",\"token\":\"PfFok\",\"datetime\":\"2025-09-16T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-09-15T15:49:56+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":3600,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"607141458\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"237666\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"607141646\",\"attributes\":{\"hash\":\"e8abfa7ee02fe8d7db0960aad0aec8ec\",\"token\":\"PfFrm\",\"datetime\":\"2025-09-19T13:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-09-15T15:50:42+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":3600,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"607141646\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"237666\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"607141778\",\"attributes\":{\"hash\":\"95438d5f7336fa47dad8486fb9fe33e2\",\"token\":\"PfFtu\",\"datetime\":\"2025-09-16T13:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-09-15T15:51:18+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":900,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"607141778\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"237666\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"609338607\",\"attributes\":{\"hash\":\"1a39f7ce56053c52e53db62dca367f9b\",\"token\":\"PoSYd\",\"datetime\":\"2025-09-30T11:30:00+0500\",\"comment\":\"\",\"create_date\":\"2025-09-29T10:11:34+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"609338607\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"609338774\",\"attributes\":{\"hash\":\"e7db239d6bf435b198f4b194e3affa07\",\"token\":\"PoS0U\",\"datetime\":\"2025-10-03T10:30:00+0500\",\"comment\":\"\",\"create_date\":\"2025-09-29T10:13:26+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"609338774\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"609340685\",\"attributes\":{\"hash\":\"bd490ff3b177aa519b53a32d9d38436f\",\"token\":\"PoTvJ\",\"datetime\":\"2025-10-05T10:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-09-29T10:31:28+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"609340685\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"609345760\",\"attributes\":{\"hash\":\"3dd0536ed630d89ef0bbe84357e9c918\",\"token\":\"PoUPA\",\"datetime\":\"2025-10-05T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-09-29T11:08:07+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"609345760\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610691907\",\"attributes\":{\"hash\":\"c9cae5053fc8cbb4e2a9db39f16471ee\",\"token\":\"Puy1D\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"люблю чай\",\"create_date\":\"2025-10-07T16:12:34+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610691907\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610693170\",\"attributes\":{\"hash\":\"663cf5c031974a671921902d2a37bd1d\",\"token\":\"Puzl0\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"люблю чай\",\"create_date\":\"2025-10-07T16:17:26+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610693170\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610694899\",\"attributes\":{\"hash\":\"1ccf2e879b331ce779197b8caee5a0d3\",\"token\":\"PuzNT\",\"datetime\":\"2025-10-10T12:00:00+0500\",\"comment\":\"люблю чай\",\"create_date\":\"2025-10-07T16:24:27+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610694899\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610695947\",\"attributes\":{\"hash\":\"035cd63c607f81dae88d17d27394b623\",\"token\":\"Puz4N\",\"datetime\":\"2025-10-10T12:30:00+0500\",\"comment\":\"люблю чай\",\"create_date\":\"2025-10-07T16:28:43+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610695947\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610699727\",\"attributes\":{\"hash\":\"0183936aacbf46711185e702bbbf41e2\",\"token\":\"PuA3L\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"люблю чай\",\"create_date\":\"2025-10-07T16:45:27+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610699727\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610700168\",\"attributes\":{\"hash\":\"f141f140a51edc400044a5a004969351\",\"token\":\"PuBaS\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"люблю чай\",\"create_date\":\"2025-10-07T16:47:25+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610700168\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610819662\",\"attributes\":{\"hash\":\"603db314a0b4228b2295bdb3b0df8d92\",\"token\":\"Pu6gc\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:38:10+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610819662\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610819881\",\"attributes\":{\"hash\":\"992f7adfa8be22a7ebdf8e1a95b89e66\",\"token\":\"Pu6jJ\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:39:56+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610819881\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610820130\",\"attributes\":{\"hash\":\"d31b5af8fbdc3e0d5001f6a6a04dc900\",\"token\":\"Pu6nK\",\"datetime\":\"2025-10-08T14:30:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:42:04+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610820130\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610820297\",\"attributes\":{\"hash\":\"891be132932466c5e3ab6a5562029d37\",\"token\":\"Pu6qr\",\"datetime\":\"2025-10-08T14:30:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:43:24+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610820297\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610820456\",\"attributes\":{\"hash\":\"46570833cf775418d1d105f22135b416\",\"token\":\"Pu6s0\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:44:50+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610820456\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610820597\",\"attributes\":{\"hash\":\"3ad2c0507a32882b53e7934f5af373e6\",\"token\":\"Pu6vh\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:45:59+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610820597\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610820895\",\"attributes\":{\"hash\":\"cb539e87ca743155c9f5b96b0d9d1582\",\"token\":\"Pu6z5\",\"datetime\":\"2025-10-08T14:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:48:11+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610820895\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610821049\",\"attributes\":{\"hash\":\"ea8981489f02b81e7e9590b2b41c50c4\",\"token\":\"Pu6Cz\",\"datetime\":\"2025-10-08T14:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:49:19+0500\",\"is_deleted\":false,\"attendance_status\":-1,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610821049\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610821321\",\"attributes\":{\"hash\":\"fb17e1f91cdd1dc60314624b8978028d\",\"token\":\"Pu6GX\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:51:17+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610821321\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610821474\",\"attributes\":{\"hash\":\"42e549669b3ef20e993890807f51c357\",\"token\":\"Pu6Jq\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T10:52:31+0500\",\"is_deleted\":true,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610821474\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}},{\"type\":\"booking_attendances\",\"id\":\"610875835\",\"attributes\":{\"hash\":\"f9093456ba367543565742dc1282ce7e\",\"token\":\"PvkSd\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"comment\":\"\",\"create_date\":\"2025-10-08T15:03:21+0500\",\"is_deleted\":false,\"attendance_status\":0,\"duration\":1800,\"is_delete_record_allowed\":true,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"payment_failure\":false,\"activity_id\":0,\"clients_count\":1,\"paid_amount\":0,\"is_prepaid\":false,\"is_prepaid_confirmed\":false,\"review_enabled\":false},\"relationships\":{\"records\":{\"data\":[{\"type\":\"booking_attendances_records\",\"id\":\"610875835\"}]},\"acceptance_free\":{\"data\":null},\"location\":{\"data\":{\"type\":\"booking_attendances_locations\",\"id\":\"166443\"}},\"charge\":{\"data\":null}}}],\"included\":[{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"a55328353ec97d9494825f867c634695\",\"attributes\":{\"status\":\"forbidden\",\"prepaid_full\":{\"amount\":2000,\"currency\":\"KZT\"},\"prepaid_min\":{\"amount\":2000,\"percent\":100,\"currency\":\"KZT\"}}},{\"type\":\"booking_attendances_staff_positions\",\"id\":\"16039\",\"attributes\":{\"title\":\"Барбер\"}},{\"type\":\"booking_attendance_service_items\",\"id\":\"799376141\",\"attributes\":{\"service_id\":6379013,\"composite_service_id\":null,\"price_max\":2000,\"price_min\":2000,\"duration\":600,\"title\":\"Воск (нос и уши)\",\"amount\":1,\"cost\":2000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"a55328353ec97d9494825f867c634695\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_staff\",\"id\":\"2839742\",\"attributes\":{\"name\":\"Наиль\",\"specialization\":\"Барбер\",\"show_rating\":1,\"rating\":4.87,\"comments_count\":59,\"avatar\":\"https://assets.alteg.io/masters/sm/a/a7/a71c4d891f02b26_20250503114513.png\",\"avatar_big\":\"https://assets.alteg.io/masters/norm/5/59/598ea4337a4232e_20250503114513.png\",\"is_deleted\":false},\"relationships\":{\"position\":{\"data\":{\"type\":\"booking_attendances_staff_positions\",\"id\":\"16039\"}}}},{\"type\":\"booking_attendances_countries\",\"id\":\"8\",\"attributes\":{\"title\":\"Казахстан\"}},{\"type\":\"booking_attendances_cities\",\"id\":\"36\",\"attributes\":{\"title\":\"Алматы\"},\"relationships\":{\"country\":{\"data\":{\"type\":\"booking_attendances_countries\",\"id\":\"8\"}}}},{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"639afc09d3f7c86b59e644bdb8abf095\",\"attributes\":{\"status\":\"forbidden\",\"prepaid_full\":{\"amount\":6500,\"currency\":\"KZT\"},\"prepaid_min\":{\"amount\":6500,\"percent\":100,\"currency\":\"KZT\"}}},{\"type\":\"booking_attendances_staff_positions\",\"id\":\"228008\",\"attributes\":{\"title\":\"Старший Барбер\"}},{\"type\":\"booking_attendance_service_items\",\"id\":\"800567061\",\"attributes\":{\"service_id\":10237426,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":3600,\"title\":\"Тонировка бороды - старший Барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"639afc09d3f7c86b59e644bdb8abf095\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_staff\",\"id\":\"1380717\",\"attributes\":{\"name\":\"Александра*\",\"specialization\":\"Старший Барбер\",\"show_rating\":1,\"rating\":4.98,\"comments_count\":371,\"avatar\":\"https://assets.alteg.io/masters/sm/8/85/858038c98a5faf6_20210331081543.png\",\"avatar_big\":\"https://assets.alteg.io/masters/norm/5/5f/5f50222cb094732_20210331081543.png\",\"is_deleted\":false},\"relationships\":{\"position\":{\"data\":{\"type\":\"booking_attendances_staff_positions\",\"id\":\"228008\"}}}},{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"d414848380cbbe704a4b9877fc490940\",\"attributes\":{\"status\":\"forbidden\",\"prepaid_full\":{\"amount\":3500,\"currency\":\"KZT\"},\"prepaid_min\":{\"amount\":3500,\"percent\":100,\"currency\":\"KZT\"}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"813892019\",\"attributes\":{\"service_id\":1757325,\"composite_service_id\":null,\"price_max\":3500,\"price_min\":3500,\"duration\":3600,\"title\":\"Экспресс бритье - Барбер\",\"amount\":1,\"cost\":3500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"d414848380cbbe704a4b9877fc490940\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_staff\",\"id\":\"2748002\",\"attributes\":{\"name\":\"Артем\",\"specialization\":\"Барбер\",\"show_rating\":1,\"rating\":4.38,\"comments_count\":161,\"avatar\":\"https://assets.alteg.io/masters/sm/3/36/3693dd3ff99fa8f_20241126120638.png\",\"avatar_big\":\"https://assets.alteg.io/masters/norm/f/fb/fb30b69e20260e8_20241126120639.png\",\"is_deleted\":false},\"relationships\":{\"position\":{\"data\":{\"type\":\"booking_attendances_staff_positions\",\"id\":\"16039\"}}}},{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"a07823ed5e1e2c7681fbb0db47dea4b0\",\"attributes\":{\"status\":\"forbidden\",\"prepaid_full\":{\"amount\":6000,\"currency\":\"KZT\"},\"prepaid_min\":{\"amount\":6000,\"percent\":100,\"currency\":\"KZT\"}}},{\"type\":\"booking_attendances_staff_positions\",\"id\":\"160629\",\"attributes\":{\"title\":\"Ведущий Барбер\"}},{\"type\":\"booking_attendance_service_items\",\"id\":\"813892205\",\"attributes\":{\"service_id\":12601420,\"composite_service_id\":null,\"price_max\":6000,\"price_min\":6000,\"duration\":900,\"title\":\"Тонировка бороды - Ведущий Барбер\",\"amount\":1,\"cost\":6000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"a07823ed5e1e2c7681fbb0db47dea4b0\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_staff\",\"id\":\"2199901\",\"attributes\":{\"name\":\"Маргарита\",\"specialization\":\"Ведущий Барбер\",\"show_rating\":1,\"rating\":4.83,\"comments_count\":254,\"avatar\":\"https://assets.alteg.io/masters/sm/a/a6/a624bc1da87adac_20230927093959.png\",\"avatar_big\":\"https://assets.alteg.io/masters/norm/0/0d/0d821a78ece01bd_20230927093959.png\",\"is_deleted\":false},\"relationships\":{\"position\":{\"data\":{\"type\":\"booking_attendances_staff_positions\",\"id\":\"160629\"}}}},{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"f1dbe630329aca2789cf0b32449b9f76\",\"attributes\":{\"status\":\"forbidden\",\"prepaid_full\":{\"amount\":7000,\"currency\":\"KZT\"},\"prepaid_min\":{\"amount\":7000,\"percent\":100,\"currency\":\"KZT\"}}},{\"type\":\"booking_attendances_staff_positions\",\"id\":\"242647\",\"attributes\":{\"title\":\"Шеф Барбер\"}},{\"type\":\"booking_attendance_service_items\",\"id\":\"817281547\",\"attributes\":{\"service_id\":11272048,\"composite_service_id\":null,\"price_max\":7000,\"price_min\":7000,\"duration\":3600,\"title\":\"Тонировка бороды - Шеф Барбер\",\"amount\":1,\"cost\":7000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"f1dbe630329aca2789cf0b32449b9f76\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_staff\",\"id\":\"1668376\",\"attributes\":{\"name\":\"Даурен*\",\"specialization\":\"Шеф Барбер\",\"show_rating\":1,\"rating\":4.83,\"comments_count\":404,\"avatar\":\"https://assets.alteg.io/masters/sm/6/66/661fde1a3c0d065_20211115133603.png\",\"avatar_big\":\"https://assets.alteg.io/masters/norm/1/10/10f4cde75a27d84_20211115133603.png\",\"is_deleted\":false},\"relationships\":{\"position\":{\"data\":{\"type\":\"booking_attendances_staff_positions\",\"id\":\"242647\"}}}},{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"bbaccbd9ae25b3a2244695ee08e93ae7\",\"attributes\":{\"status\":\"forbidden\",\"prepaid_full\":{\"amount\":6000,\"currency\":\"KZT\"},\"prepaid_min\":{\"amount\":6000,\"percent\":100,\"currency\":\"KZT\"}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"817281736\",\"attributes\":{\"service_id\":12601420,\"composite_service_id\":null,\"price_max\":6000,\"price_min\":6000,\"duration\":3600,\"title\":\"Тонировка бороды - Ведущий Барбер\",\"amount\":1,\"cost\":6000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"bbaccbd9ae25b3a2244695ee08e93ae7\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_staff\",\"id\":\"2195575\",\"attributes\":{\"name\":\"Ангелина\",\"specialization\":\"Ведущий Барбер\",\"show_rating\":1,\"rating\":4.67,\"comments_count\":206,\"avatar\":\"https://assets.alteg.io/masters/sm/e/ea/ea29d7011c7257b_20230912105204.png\",\"avatar_big\":\"https://assets.alteg.io/masters/norm/0/08/089bcfb8304a72a_20230912105205.png\",\"is_deleted\":false},\"relationships\":{\"position\":{\"data\":{\"type\":\"booking_attendances_staff_positions\",\"id\":\"160629\"}}}},{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"4056e50a46355395b76b4e5896fa06a6\",\"attributes\":{\"status\":\"forbidden\",\"prepaid_full\":{\"amount\":3500,\"currency\":\"KZT\"},\"prepaid_min\":{\"amount\":3500,\"percent\":100,\"currency\":\"KZT\"}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"817281884\",\"attributes\":{\"service_id\":11272025,\"composite_service_id\":null,\"price_max\":3500,\"price_min\":3500,\"duration\":900,\"title\":\"Чистка лица (скраб и черная маска) - Шеф Барбер\",\"amount\":1,\"cost\":3500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"4056e50a46355395b76b4e5896fa06a6\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\",\"attributes\":{\"status\":\"forbidden\",\"prepaid_full\":{\"amount\":6500,\"currency\":\"KZT\"},\"prepaid_min\":{\"amount\":6500,\"percent\":100,\"currency\":\"KZT\"}}},{\"type\":\"booking_attendances_staff_positions\",\"id\":\"227983\",\"attributes\":{\"title\":\"Старший Барбер\"}},{\"type\":\"booking_attendance_service_items\",\"id\":\"819779149\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_staff\",\"id\":\"994714\",\"attributes\":{\"name\":\"Айдын*\",\"specialization\":\"Старший Барбер\",\"show_rating\":1,\"rating\":4.59,\"comments_count\":231,\"avatar\":\"https://assets.alteg.io/masters/sm/1/14/14e787655d8e2e0_20200525183734.png\",\"avatar_big\":\"https://assets.alteg.io/masters/norm/4/42/42fca20d3f95d11_20200525183734.png\",\"is_deleted\":false},\"relationships\":{\"position\":{\"data\":{\"type\":\"booking_attendances_staff_positions\",\"id\":\"227983\"}}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"819779319\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_staff\",\"id\":\"2660038\",\"attributes\":{\"name\":\"Алишер*\",\"specialization\":\"Старший Барбер\",\"show_rating\":1,\"rating\":4.8,\"comments_count\":853,\"avatar\":\"https://assets.alteg.io/masters/sm/6/60/608c4ce1b396ca6_20240725173513.png\",\"avatar_big\":\"https://assets.alteg.io/masters/norm/c/ce/cec550d83157053_20240725173513.png\",\"is_deleted\":false},\"relationships\":{\"position\":{\"data\":{\"type\":\"booking_attendances_staff_positions\",\"id\":\"227983\"}}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"819781282\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"819786450\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821304118\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821305644\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821307666\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821308848\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821313190\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821313700\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821445022\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821445216\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821445481\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821445662\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"174f2caf54be40dd9fbb603402f89155\",\"attributes\":{\"status\":\"forbidden\",\"prepaid_full\":{\"amount\":4000,\"currency\":\"KZT\"},\"prepaid_min\":{\"amount\":4000,\"percent\":100,\"currency\":\"KZT\"}}},{\"type\":\"booking_attendances_staff_positions\",\"id\":\"105387\",\"attributes\":{\"title\":\"Барбер\"}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821445834\",\"attributes\":{\"service_id\":6217300,\"composite_service_id\":null,\"price_max\":4000,\"price_min\":4000,\"duration\":1800,\"title\":\"Стрижка - Барбер\",\"amount\":1,\"cost\":4000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"174f2caf54be40dd9fbb603402f89155\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_staff\",\"id\":\"2383264\",\"attributes\":{\"name\":\"Галым\",\"specialization\":\"Барбер\",\"show_rating\":1,\"rating\":4.63,\"comments_count\":67,\"avatar\":\"https://assets.alteg.io/masters/sm/1/14/14ea0c8708121c1_20240314181756.png\",\"avatar_big\":\"https://assets.alteg.io/masters/norm/6/64/64c2cb65676233e_20240314181756.png\",\"is_deleted\":false},\"relationships\":{\"position\":{\"data\":{\"type\":\"booking_attendances_staff_positions\",\"id\":\"105387\"}}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821445980\",\"attributes\":{\"service_id\":6217300,\"composite_service_id\":null,\"price_max\":4000,\"price_min\":4000,\"duration\":1800,\"title\":\"Стрижка - Барбер\",\"amount\":1,\"cost\":4000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"174f2caf54be40dd9fbb603402f89155\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821446290\",\"attributes\":{\"service_id\":6217300,\"composite_service_id\":null,\"price_max\":4000,\"price_min\":4000,\"duration\":1800,\"title\":\"Стрижка - Барбер\",\"amount\":1,\"cost\":4000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"174f2caf54be40dd9fbb603402f89155\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821446443\",\"attributes\":{\"service_id\":6217300,\"composite_service_id\":null,\"price_max\":4000,\"price_min\":4000,\"duration\":1800,\"title\":\"Стрижка - Барбер\",\"amount\":1,\"cost\":4000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"174f2caf54be40dd9fbb603402f89155\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821446730\",\"attributes\":{\"service_id\":6217300,\"composite_service_id\":null,\"price_max\":4000,\"price_min\":4000,\"duration\":1800,\"title\":\"Стрижка - Барбер\",\"amount\":1,\"cost\":4000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"174f2caf54be40dd9fbb603402f89155\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821446883\",\"attributes\":{\"service_id\":6217300,\"composite_service_id\":null,\"price_max\":4000,\"price_min\":4000,\"duration\":1800,\"title\":\"Стрижка - Барбер\",\"amount\":1,\"cost\":4000,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"174f2caf54be40dd9fbb603402f89155\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendance_service_items\",\"id\":\"821507226\",\"attributes\":{\"service_id\":10236353,\"composite_service_id\":null,\"price_max\":6500,\"price_min\":6500,\"duration\":1800,\"title\":\"Стрижка - Старший барбер\",\"amount\":1,\"cost\":6500,\"discount\":0,\"is_change_record_allowed\":true,\"is_confirmation_needed\":false,\"is_acceptance_payment\":false,\"abonement_restriction\":0,\"is_trial\":false},\"relationships\":{\"prepaid_settings\":{\"data\":{\"type\":\"booking_attendance_service_item_prepaid_settings\",\"id\":\"889550936d51e4b80a55207ab08686c8\"}},\"composite_service\":{\"data\":null}}},{\"type\":\"booking_attendances_records\",\"id\":\"591536408\",\"attributes\":{\"staff_id\":2839742,\"comment\":\"\",\"hash\":\"940801a75995033ce9251bdbe9ed6a90\",\"token\":\"OcbNY\",\"clients_count\":1,\"date\":\"2025-06-17 10:30:00\",\"datetime\":\"2025-06-17T10:30:00+0500\",\"create_date\":\"2025-06-10T13:51:05+0500\",\"deleted\":true,\"attendance\":0,\"length\":600,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-06-10T13:56:04+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"799376141\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2839742\"}}}},{\"type\":\"booking_attendances_locations\",\"id\":\"750771\",\"attributes\":{\"title\":\"Бравый Шашкина\",\"public_title\":\"Бравый Шашкина\",\"phones\":[\"+7 747 125-11-00\"],\"timezone_offset\":2,\"address\":\"Шашкина 6\",\"coordinate_lat\":43.22597433,\"coordinate_lon\":76.92967594,\"site\":\"\",\"currency_short_title\":\"₸\",\"logo\":\"https://assets.alteg.io/general/9/92/9209d60a62106b9_20230927093658.png\",\"is_change_record_allowed\":true,\"is_delete_record_allowed\":true,\"is_change_prepaid_record_allowed\":false,\"is_delete_prepaid_record_allowed\":false,\"allowed_change_record_delay_step\":0,\"allowed_delete_record_delay_step\":0,\"social\":{\"facebook\":\"\",\"instagram\":\"\",\"telegram\":\"\",\"whatsapp\":\"\",\"viber\":\"\"}},\"relationships\":{\"city\":{\"data\":{\"type\":\"booking_attendances_cities\",\"id\":\"36\"}},\"map\":{\"data\":null}}},{\"type\":\"booking_attendances_records\",\"id\":\"592581794\",\"attributes\":{\"staff_id\":1380717,\"comment\":\"\",\"hash\":\"e8958369796ac2b27f4322a2b6a648f3\",\"token\":\"OgzK2\",\"clients_count\":1,\"date\":\"2025-06-19 10:00:00\",\"datetime\":\"2025-06-19T10:00:00+0500\",\"create_date\":\"2025-06-16T08:58:10+0500\",\"deleted\":true,\"attendance\":0,\"length\":900,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-06-16T09:01:22+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"800567061\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"1380717\"}}}},{\"type\":\"booking_attendances_locations\",\"id\":\"237666\",\"attributes\":{\"title\":\"Бравый Ауэзова\",\"public_title\":\"Бравый Ауэзова\",\"phones\":[\"+7 777 125-11-00\"],\"timezone_offset\":2,\"address\":\"ул. Кабанбай батыра, 199\",\"coordinate_lat\":43.2467973,\"coordinate_lon\":76.9043061,\"site\":\"www.instagram.com/bravyi_barbershop/?hl=ru\",\"currency_short_title\":\"₸\",\"logo\":\"https://assets.alteg.io/general/c/c8/c86d52bdca3dd61_20190731140233.png\",\"is_change_record_allowed\":true,\"is_delete_record_allowed\":true,\"is_change_prepaid_record_allowed\":false,\"is_delete_prepaid_record_allowed\":false,\"allowed_change_record_delay_step\":0,\"allowed_delete_record_delay_step\":0,\"social\":{\"facebook\":\"\",\"instagram\":\"\",\"telegram\":\"\",\"whatsapp\":\"\",\"viber\":\"\"}},\"relationships\":{\"city\":{\"data\":{\"type\":\"booking_attendances_cities\",\"id\":\"36\"}},\"map\":{\"data\":null}}},{\"type\":\"booking_attendances_records\",\"id\":\"604179774\",\"attributes\":{\"staff_id\":2748002,\"comment\":\"\",\"hash\":\"decc5f89b417ee8f164689093ac2ca1c\",\"token\":\"O3eVe\",\"clients_count\":1,\"date\":\"2025-09-04 11:00:00\",\"datetime\":\"2025-09-04T11:00:00+0500\",\"create_date\":\"2025-08-27T18:37:05+0500\",\"deleted\":true,\"attendance\":0,\"length\":3600,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-08-27T18:39:05+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"813892019\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2748002\"}}}},{\"type\":\"booking_attendances_locations\",\"id\":\"581799\",\"attributes\":{\"title\":\"Бравый Жандосова\",\"public_title\":\"Бравый Жандосова\",\"phones\":[\"+7 707 125-11-00\"],\"timezone_offset\":2,\"address\":\"улица Жандосова, 42\",\"coordinate_lat\":43.2312613,\"coordinate_lon\":76.8986616,\"site\":\"\",\"currency_short_title\":\"₸\",\"logo\":\"https://assets.alteg.io/general/2/20/20b9759416bf6d3_20211010121004.png\",\"is_change_record_allowed\":true,\"is_delete_record_allowed\":true,\"is_change_prepaid_record_allowed\":false,\"is_delete_prepaid_record_allowed\":false,\"allowed_change_record_delay_step\":0,\"allowed_delete_record_delay_step\":0,\"social\":{\"facebook\":\"\",\"instagram\":\"\",\"telegram\":\"\",\"whatsapp\":\"\",\"viber\":\"\"}},\"relationships\":{\"city\":{\"data\":{\"type\":\"booking_attendances_cities\",\"id\":\"36\"}},\"map\":{\"data\":null}}},{\"type\":\"booking_attendances_records\",\"id\":\"604179925\",\"attributes\":{\"staff_id\":2199901,\"comment\":\"\",\"hash\":\"f11823b774a1f6d6c5b712b6645b9245\",\"token\":\"O3eXF\",\"clients_count\":1,\"date\":\"2025-08-29 11:00:00\",\"datetime\":\"2025-08-29T11:00:00+0500\",\"create_date\":\"2025-08-27T18:37:47+0500\",\"deleted\":true,\"attendance\":0,\"length\":900,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-08-27T18:38:46+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"813892205\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2199901\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"607141458\",\"attributes\":{\"staff_id\":1668376,\"comment\":\"\",\"hash\":\"e4314851d86ea2bfac4d0b22231f21b6\",\"token\":\"PfFok\",\"clients_count\":1,\"date\":\"2025-09-16 11:00:00\",\"datetime\":\"2025-09-16T11:00:00+0500\",\"create_date\":\"2025-09-15T15:49:56+0500\",\"deleted\":true,\"attendance\":0,\"length\":3600,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-09-15T15:50:05+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"817281547\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"1668376\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"607141646\",\"attributes\":{\"staff_id\":2195575,\"comment\":\"\",\"hash\":\"e8abfa7ee02fe8d7db0960aad0aec8ec\",\"token\":\"PfFrm\",\"clients_count\":1,\"date\":\"2025-09-19 13:00:00\",\"datetime\":\"2025-09-19T13:00:00+0500\",\"create_date\":\"2025-09-15T15:50:42+0500\",\"deleted\":true,\"attendance\":0,\"length\":3600,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-09-15T15:50:51+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"817281736\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2195575\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"607141778\",\"attributes\":{\"staff_id\":1668376,\"comment\":\"\",\"hash\":\"95438d5f7336fa47dad8486fb9fe33e2\",\"token\":\"PfFtu\",\"clients_count\":1,\"date\":\"2025-09-16 13:00:00\",\"datetime\":\"2025-09-16T13:00:00+0500\",\"create_date\":\"2025-09-15T15:51:18+0500\",\"deleted\":true,\"attendance\":0,\"length\":900,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-09-15T15:51:25+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"817281884\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"1668376\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"609338607\",\"attributes\":{\"staff_id\":994714,\"comment\":\"\",\"hash\":\"1a39f7ce56053c52e53db62dca367f9b\",\"token\":\"PoSYd\",\"clients_count\":1,\"date\":\"2025-09-30 11:30:00\",\"datetime\":\"2025-09-30T11:30:00+0500\",\"create_date\":\"2025-09-29T10:11:34+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-09-29T11:32:14+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"819779149\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_locations\",\"id\":\"166443\",\"attributes\":{\"title\":\"Бравый Муканова\",\"public_title\":\"Бравый Муканова\",\"phones\":[\"+7 747 082-20-40\"],\"timezone_offset\":2,\"address\":\"Муканова д. 227 уг.ул Карасай-Батыра\",\"coordinate_lat\":43.24955074,\"coordinate_lon\":76.91498192,\"site\":\"\",\"currency_short_title\":\"₸\",\"logo\":\"https://assets.alteg.io/general/0/0d/0d98cddcb3771c0_20190921123355.png\",\"is_change_record_allowed\":true,\"is_delete_record_allowed\":true,\"is_change_prepaid_record_allowed\":false,\"is_delete_prepaid_record_allowed\":false,\"allowed_change_record_delay_step\":7200,\"allowed_delete_record_delay_step\":7200,\"social\":{\"facebook\":\"\",\"instagram\":\"https://www.instagram.com/bravyi_almaty?igsh=Mzg5OTY0amR0NGsx\",\"telegram\":\"\",\"whatsapp\":\"\",\"viber\":\"\"}},\"relationships\":{\"city\":{\"data\":{\"type\":\"booking_attendances_cities\",\"id\":\"36\"}},\"map\":{\"data\":null}}},{\"type\":\"booking_attendances_records\",\"id\":\"609338774\",\"attributes\":{\"staff_id\":2660038,\"comment\":\"\",\"hash\":\"e7db239d6bf435b198f4b194e3affa07\",\"token\":\"PoS0U\",\"clients_count\":1,\"date\":\"2025-10-03 10:30:00\",\"datetime\":\"2025-10-03T10:30:00+0500\",\"create_date\":\"2025-09-29T10:13:26+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-09-29T10:15:38+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"819779319\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2660038\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"609340685\",\"attributes\":{\"staff_id\":2660038,\"comment\":\"\",\"hash\":\"bd490ff3b177aa519b53a32d9d38436f\",\"token\":\"PoTvJ\",\"clients_count\":1,\"date\":\"2025-10-05 10:00:00\",\"datetime\":\"2025-10-05T10:00:00+0500\",\"create_date\":\"2025-09-29T10:31:28+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-09-29T10:31:39+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"819781282\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2660038\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"609345760\",\"attributes\":{\"staff_id\":2660038,\"comment\":\"\",\"hash\":\"3dd0536ed630d89ef0bbe84357e9c918\",\"token\":\"PoUPA\",\"clients_count\":1,\"date\":\"2025-10-05 11:00:00\",\"datetime\":\"2025-10-05T11:00:00+0500\",\"create_date\":\"2025-09-29T11:08:07+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-09-29T11:08:15+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"819786450\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2660038\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610691907\",\"attributes\":{\"staff_id\":994714,\"comment\":\"люблю чай\",\"hash\":\"c9cae5053fc8cbb4e2a9db39f16471ee\",\"token\":\"Puy1D\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-07T16:12:34+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-07T16:16:34+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821304118\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610693170\",\"attributes\":{\"staff_id\":994714,\"comment\":\"люблю чай\",\"hash\":\"663cf5c031974a671921902d2a37bd1d\",\"token\":\"Puzl0\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-07T16:17:26+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-07T16:32:04+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821305644\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610694899\",\"attributes\":{\"staff_id\":994714,\"comment\":\"люблю чай\",\"hash\":\"1ccf2e879b331ce779197b8caee5a0d3\",\"token\":\"PuzNT\",\"clients_count\":1,\"date\":\"2025-10-10 12:00:00\",\"datetime\":\"2025-10-10T12:00:00+0500\",\"create_date\":\"2025-10-07T16:24:27+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-07T16:32:14+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821307666\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610695947\",\"attributes\":{\"staff_id\":994714,\"comment\":\"люблю чай\",\"hash\":\"035cd63c607f81dae88d17d27394b623\",\"token\":\"Puz4N\",\"clients_count\":1,\"date\":\"2025-10-10 12:30:00\",\"datetime\":\"2025-10-10T12:30:00+0500\",\"create_date\":\"2025-10-07T16:28:43+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-07T16:31:39+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821308848\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610699727\",\"attributes\":{\"staff_id\":994714,\"comment\":\"люблю чай\",\"hash\":\"0183936aacbf46711185e702bbbf41e2\",\"token\":\"PuA3L\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-07T16:45:27+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-07T16:46:23+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821313190\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610700168\",\"attributes\":{\"staff_id\":994714,\"comment\":\"люблю чай\",\"hash\":\"f141f140a51edc400044a5a004969351\",\"token\":\"PuBaS\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-07T16:47:25+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-07T16:52:19+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821313700\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610819662\",\"attributes\":{\"staff_id\":994714,\"comment\":\"\",\"hash\":\"603db314a0b4228b2295bdb3b0df8d92\",\"token\":\"Pu6gc\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-08T10:38:10+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T10:38:49+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821445022\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610819881\",\"attributes\":{\"staff_id\":994714,\"comment\":\"\",\"hash\":\"992f7adfa8be22a7ebdf8e1a95b89e66\",\"token\":\"Pu6jJ\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-08T10:39:56+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T10:40:18+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821445216\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610820130\",\"attributes\":{\"staff_id\":994714,\"comment\":\"\",\"hash\":\"d31b5af8fbdc3e0d5001f6a6a04dc900\",\"token\":\"Pu6nK\",\"clients_count\":1,\"date\":\"2025-10-08 14:30:00\",\"datetime\":\"2025-10-08T14:30:00+0500\",\"create_date\":\"2025-10-08T10:42:04+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T10:42:38+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821445481\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610820297\",\"attributes\":{\"staff_id\":994714,\"comment\":\"\",\"hash\":\"891be132932466c5e3ab6a5562029d37\",\"token\":\"Pu6qr\",\"clients_count\":1,\"date\":\"2025-10-08 14:30:00\",\"datetime\":\"2025-10-08T14:30:00+0500\",\"create_date\":\"2025-10-08T10:43:24+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T10:43:47+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821445662\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610820456\",\"attributes\":{\"staff_id\":2383264,\"comment\":\"\",\"hash\":\"46570833cf775418d1d105f22135b416\",\"token\":\"Pu6s0\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-08T10:44:50+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T10:45:15+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821445834\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2383264\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610820597\",\"attributes\":{\"staff_id\":2383264,\"comment\":\"\",\"hash\":\"3ad2c0507a32882b53e7934f5af373e6\",\"token\":\"Pu6vh\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-08T10:45:59+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T10:46:30+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821445980\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2383264\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610820895\",\"attributes\":{\"staff_id\":2383264,\"comment\":\"\",\"hash\":\"cb539e87ca743155c9f5b96b0d9d1582\",\"token\":\"Pu6z5\",\"clients_count\":1,\"date\":\"2025-10-08 14:00:00\",\"datetime\":\"2025-10-08T14:00:00+0500\",\"create_date\":\"2025-10-08T10:48:11+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T10:48:38+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821446290\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2383264\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610821049\",\"attributes\":{\"staff_id\":2383264,\"comment\":\"\",\"hash\":\"ea8981489f02b81e7e9590b2b41c50c4\",\"token\":\"Pu6Cz\",\"clients_count\":1,\"date\":\"2025-10-08 14:00:00\",\"datetime\":\"2025-10-08T14:00:00+0500\",\"create_date\":\"2025-10-08T10:49:19+0500\",\"deleted\":false,\"attendance\":-1,\"length\":1800,\"notify_by_sms\":1,\"notify_by_email\":1,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T14:19:57+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821446443\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2383264\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610821321\",\"attributes\":{\"staff_id\":2383264,\"comment\":\"\",\"hash\":\"fb17e1f91cdd1dc60314624b8978028d\",\"token\":\"Pu6GX\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-08T10:51:17+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T10:51:37+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821446730\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2383264\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610821474\",\"attributes\":{\"staff_id\":2383264,\"comment\":\"\",\"hash\":\"42e549669b3ef20e993890807f51c357\",\"token\":\"Pu6Jq\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-08T10:52:31+0500\",\"deleted\":true,\"attendance\":0,\"length\":1800,\"notify_by_sms\":0,\"notify_by_email\":0,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T10:52:53+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821446883\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"2383264\"}}}},{\"type\":\"booking_attendances_records\",\"id\":\"610875835\",\"attributes\":{\"staff_id\":994714,\"comment\":\"\",\"hash\":\"f9093456ba367543565742dc1282ce7e\",\"token\":\"PvkSd\",\"clients_count\":1,\"date\":\"2025-10-10 11:00:00\",\"datetime\":\"2025-10-10T11:00:00+0500\",\"create_date\":\"2025-10-08T15:03:21+0500\",\"deleted\":false,\"attendance\":0,\"length\":1800,\"notify_by_sms\":1,\"notify_by_email\":1,\"master_requested\":0,\"online\":true,\"api_id\":\"\",\"last_change_date\":\"2025-10-08T15:03:21+0500\",\"prepaid\":false,\"prepaid_confirmed\":false,\"activity_id\":0,\"review_enabled\":null,\"paid_amount\":{\"targetsInfo\":null},\"is_show_prepay_button\":false},\"relationships\":{\"attendance_service_items\":{\"data\":[{\"type\":\"booking_attendance_service_items\",\"id\":\"821507226\"}]},\"staff\":{\"data\":{\"type\":\"booking_attendances_staff\",\"id\":\"994714\"}}}}]}"
          },
          "redirectURL": "",
          "headersSize": 1745,
          "bodySize": 7769,
          "_transferSize": 9514,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:45.203Z",
        "time": 302.29199992027134,
        "timings": {
          "blocked": 2.5849999404251576,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3819999999999999,
          "wait": 297.88499995801595,
          "receive": 1.4400000218302011,
          "_blocked_queueing": 1.3069999404251575,
          "_blocked_proxy": 0.71,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "491947",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "i",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 490796
              },
              {
                "functionName": "f",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322593
              },
              {
                "functionName": "i",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 321340
              },
              {
                "functionName": "o",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322887
              },
              {
                "functionName": "sendEnvelope",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 315988
              },
              {
                "functionName": "sendSession",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 315469
              },
              {
                "functionName": "captureSession",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 314037
              },
              {
                "functionName": "CO",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309195
              },
              {
                "functionName": "_m",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309118
              },
              {
                "functionName": "od",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309025
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 498079
              },
              {
                "functionName": "Cr",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 261635
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 358194
              },
              {
                "functionName": "pushState",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 187990
              },
              {
                "functionName": "pushState",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 189629
              },
              {
                "functionName": "go",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 192153
              },
              {
                "functionName": "setBrowserUrl",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 573131
              },
              {
                "functionName": "handleRouterEvent",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 572478
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 576150
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 567758
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32880
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13506
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29518
              },
              {
                "functionName": "_complete",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10627
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29474
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13477
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32892
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32892
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.D",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17982
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.D",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17982
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "h",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17941
              },
              {
                "functionName": "f",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17882
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "t.subscribe.r",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 31259
              },
              {
                "functionName": "_complete",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32964
              },
              {
                "functionName": "_complete",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "p",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17861
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18150
              },
              {
                "functionName": "_complete",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10828
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "dr",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18124
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18292
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32823
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 31186
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "dr",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18124
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18292
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "h",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17941
              },
              {
                "functionName": "f",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17882
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "dr",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18124
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18292
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32823
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32892
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32823
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              }
            ]
          }
        },
        "_priority": "High",
        "_resourceType": "fetch",
        "cache": {},
        "connection": "9090",
        "pageref": "page_3",
        "request": {
          "method": "POST",
          "url": "https://errors.alteg.io/api/38/envelope/?sentry_version=7&sentry_key=7bcbd183611e0badf786d2fc35dc275d&sentry_client=sentry.javascript.angular%2F9.46.0",
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
              "name": "Content-Length",
              "value": "503"
            },
            {
              "name": "Content-Type",
              "value": "text/plain;charset=UTF-8"
            },
            {
              "name": "Host",
              "value": "errors.alteg.io"
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
              "value": "https://n958200.alteg.io/"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "empty"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-site"
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
          "queryString": [
            {
              "name": "sentry_version",
              "value": "7"
            },
            {
              "name": "sentry_key",
              "value": "7bcbd183611e0badf786d2fc35dc275d"
            },
            {
              "name": "sentry_client",
              "value": "sentry.javascript.angular%2F9.46.0"
            }
          ],
          "cookies": [],
          "headersSize": 805,
          "bodySize": 503,
          "postData": {
            "mimeType": "text/plain;charset=UTF-8",
            "text": "{\"sent_at\":\"2025-10-08T10:05:45.205Z\",\"sdk\":{\"name\":\"sentry.javascript.angular\",\"version\":\"9.46.0\"}}\n{\"type\":\"session\"}\n{\"sid\":\"8c5b203f7c994884927029900626d131\",\"init\":false,\"started\":\"2025-10-08T10:05:41.386Z\",\"timestamp\":\"2025-10-08T10:05:45.204Z\",\"status\":\"crashed\",\"errors\":1,\"attrs\":{\"release\":\"191110.5e092a20\",\"environment\":\"live\",\"user_agent\":\"Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0\"}}"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b4d255890fbcbe-ALA"
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
              "value": "application/json"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 10:05:45 GMT"
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
              "name": "access-control-allow-headers",
              "value": "authorization, content-type, accept-language, x-requested-with, newrelic, traceparent, tracestate, x-user-permissions-hash, x-company-settings-hash, access-token, debug-jwt, x-altegio-application-name, x-altegio-application-action, x-altegio-application-platform, x-altegio-application-version, x-altegio-application-generation, X-App-Signature, X-App-Client-Context, X-App-Validation-Token, Idempotency-Key, x-feature-notification-next"
            },
            {
              "name": "access-control-allow-methods",
              "value": "GET, POST, PUT, DELETE, OPTIONS, PATCH"
            },
            {
              "name": "access-control-allow-origin",
              "value": "*"
            },
            {
              "name": "access-control-expose-headers",
              "value": "user_token, x-user_token, x-newrelic-app-data, x-user-permissions-hash, x-company-settings-hash, X-Feature-Notification-Next, X-App-Security-Level"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "cf-cache-status",
              "value": "DYNAMIC"
            },
            {
              "name": "cross-origin-resource-policy",
              "value": "cross-origin"
            },
            {
              "name": "p3p",
              "value": "CP=\"ALL ADM DEV PSAi COM OUR OTRo STP IND ONL\""
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "origin, access-control-request-method, access-control-request-headers"
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
              "value": "c3292fc230eb89ae13cf9618622c4795"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 2,
            "mimeType": "application/json",
            "compression": -14,
            "text": "{}"
          },
          "redirectURL": "",
          "headersSize": 1430,
          "bodySize": 16,
          "_transferSize": 1446,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:05:45.207Z",
        "time": 130.4610000224784,
        "timings": {
          "blocked": 3.4839999912157653,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.5450000000000002,
          "wait": 125.71899995723366,
          "receive": 0.7130000740289688,
          "_blocked_queueing": 1.5429999912157655,
          "_blocked_proxy": 1.3719999999999999,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "490919",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "938",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "i",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 490796
              },
              {
                "functionName": "f",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322593
              },
              {
                "functionName": "i",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 321340
              },
              {
                "functionName": "o",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322887
              },
              {
                "functionName": "sendEnvelope",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 315988
              },
              {
                "functionName": "sendSession",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 315469
              },
              {
                "functionName": "captureSession",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 314037
              },
              {
                "functionName": "CO",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309195
              },
              {
                "functionName": "sd",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309249
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 498103
              },
              {
                "functionName": "Cr",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 261635
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 358194
              },
              {
                "functionName": "pushState",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 187990
              },
              {
                "functionName": "pushState",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 189629
              },
              {
                "functionName": "go",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 192153
              },
              {
                "functionName": "setBrowserUrl",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 573131
              },
              {
                "functionName": "handleRouterEvent",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 572478
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 576150
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "",
                "scriptId": "962",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 567758
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32880
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "965",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_ne
```
