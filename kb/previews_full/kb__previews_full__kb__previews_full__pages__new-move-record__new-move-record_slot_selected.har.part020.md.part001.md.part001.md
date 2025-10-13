### kb/previews_full/kb__previews_full__pages__new-move-record__new-move-record_slot_selected.har.part020.md.part001.md (part 001)

```md
### kb/previews_full/pages__new-move-record__new-move-record_slot_selected.har.part020.md (part 001)

```md
### pages/new-move-record/new-move-record_slot_selected.har (part 020)

```har
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
              "value": "dd80421de6c63d8c556c6099a20e270b"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 12254,
            "mimeType": "application/javascript",
            "compression": 8235,
            "text": "import{g as ge,i as z,z as N}from\"./chunk-TDZAPBSL.js\";import{a as _e,k as H}from\"./chunk-5IQFNC4I.js\";import{b as de}from\"./chunk-HYJO63QR.js\";import{U as B,ga as K,ia as pe,ja as R,ka as fe,sa as me}from\"./chunk-W3M7SAIY.js\";import{Gh as V,Zc as se,_ as F,aa as ae,g as re,ga as A,ha as $,ia as ce,ya as W,ye as le,zc as j}from\"./chunk-FAHXWQCK.js\";import{$b as s,Ab as c,Bb as C,Bc as I,Ca as L,Gc as T,Ha as S,Hc as U,J,Jb as te,Jc as ne,Ob as v,Qb as M,Ra as g,Rb as d,S as Q,Sa as u,Sb as ie,Tb as h,V as X,Wb as x,Ya as ee,Yb as D,Zb as E,_a as y,_b as l,ac as b,bb as m,c as q,ec as k,fd as oe,ic as w,jc as p,sc as _,tc as P,uc as O,wa as Z}from\"./chunk-CJMBEYVW.js\";import{g as n,i as G}from\"./chunk-JV5WWF5Q.js\";var ue=(()=>{let t=class t{constructor(){n(this,\"clickable\",!1);n(this,\"title\",\"\");n(this,\"forwardIcon\",\"forward\")}};n(t,\"\\u0275fac\",function(e){return new(e||t)}),n(t,\"\\u0275cmp\",S({type:t,selectors:[[\"app-no-staff-tile\"]],inputs:{clickable:\"clickable\",title:\"title\",forwardIcon:\"forwardIcon\"},standalone:!0,features:[I],decls:7,vars:6,consts:[[1,\"staff-header\"],[\"left\",\"\",1,\"staff-icon-container\"],[1,\"staff-icon\",3,\"name\"],[\"center\",\"\",1,\"staff-main\"],[\"right\",\"\",1,\"forward-icon-container\"],[\"role\",\"button\",1,\"forward-icon\",3,\"name\"]],template:function(e,a){e&1&&(l(0,\"ui-kit-simple-cell\",0)(1,\"div\",1),b(2,\"ui-kit-svg-icon\",2),s(),l(3,\"div\",3),_(4),s(),l(5,\"div\",4),b(6,\"ui-kit-svg-icon\",5),s()()),e&2&&(h(\"clickable\",a.clickable),c(2),d(\"name\",\"menu/specialist\"),c(2),P(a.title),c(2),d(\"name\",a.forwardIcon),M(\"data-locator\",\"forward_icon\"))},dependencies:[K,B,H,_e],styles:['@charset \"UTF-8\";.staff-header[_ngcontent-%COMP%]   .staff-icon-container[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;justify-content:center;align-items:center;background-color:var(--widget-ui-kit-color-color_grey_03);border-radius:50%}.staff-header[_ngcontent-%COMP%]   .staff-icon-container[_ngcontent-%COMP%]   .staff-icon[_ngcontent-%COMP%]{width:24px;height:24px;color:var(--widget-ui-kit-color-color_grey_11)}.staff-header[_ngcontent-%COMP%]   .staff-main[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black);align-self:center}.forward-icon-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer;align-self:center}.forward-icon-container[_ngcontent-%COMP%]   .forward-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_dark)}'],changeDetection:0}));let i=t;return i})();var Ce=(()=>{let t=class t{constructor(){n(this,\"store\",L(W));n(this,\"trackingService\",L(ae))}get selectedParallelComplexId(){var o;return(o=this.store.selectSnapshot(V.order.getSelectedServices).find(e=>e.composite_details))==null?void 0:o.id}setServiceComplexPage(){this.trackingService.setPage(\"service_complex\")}trackOpenPageAction(){this.selectedParallelComplexId&&this.trackingService.track({type:F.Action.pageView,part:{number:this.selectedParallelComplexId}})}trackSelectMasterAction(o,e){if(!this.selectedParallelComplexId)return;let a=this.store.selectSnapshot(V.masters.getMasterById(o));this.trackingService.track({type:F.Action.select,element:{type:\"master\",name:o===j?\"master.skip_select_master\":a.name,id:o},part:{id:e,type:\"service\",number:this.selectedParallelComplexId}})}trackOpenMasterSelectorModal(o){this.selectedParallelComplexId&&this.trackingService.track({type:F.Action.view,element:{name:\"master_list\"},part:{type:\"service\",id:o,number:this.selectedParallelComplexId}})}trackClickToMasterSelector(o){this.selectedParallelComplexId&&this.trackingService.track({type:F.Action.click,element:{type:\"button\",name:\"button_choose_master\"},part:{id:o,type:\"service\",number:this.selectedParallelComplexId}})}};n(t,\"\\u0275fac\",function(e){return new(e||t)}),n(t,\"\\u0275prov\",Z({token:t,factory:t.\\u0275fac,providedIn:\"root\"}));let i=t;return i})();var we=(i,t)=>t.id;function Ie(i,t){if(i&1){let r=k();l(0,\"app-staff-tile\",2),w(\"click\",function(){let e=g(r).$implicit,a=p();return u(a.toggleMaster(e.id))})(\"showInfo\",function(){let e=g(r).$implicit,a=p();return u(a.masterInfoClick(e.id))}),s()}if(i&2){let r=t.$implicit,o=p();h(\"any-staff\",r.id===o.ANY_MASTER_ID),d(\"isSelected\",r.id===o.selectedMasterId)(\"staff\",r)}}function ye(i,t){if(i&1){let r=k();l(0,\"div\",1)(1,\"ui-kit-button\",3),w(\"click\",function(){g(r);let e=p();return u(e.selectMaster())}),_(2),T(3,\"translate\"),s()()}i&2&&(c(2),O(\" \",U(3,1,\"done\"),\" \"))}var ve=(()=>{let t=class t extends fe{constructor(e){super(e);n(this,\"modalService\");n(this,\"staffList\",[]);n(this,\"selectedMasterId\");n(this,\"openMasterInfo\",new y);n(this,\"ANY_MASTER_ID\",j);this.modalService=e}toggleMaster(e){this.selectedMasterId=e}selectMaster(){this.close(this.selectedMasterId)}masterInfoClick(e){this.modalService.closeModal(),this.openMasterInfo.emit(e)}};n(t,\"\\u0275fac\",function(a){return new(a||t)(C(R))}),n(t,\"\\u0275cmp\",S({type:t,selectors:[[\"app-four-hands-select-staff-modal\"]],outputs:{openMasterInfo:\"openMasterInfo\"},standalone:!0,features:[te,I],decls:3,vars:1,consts:[[1,\"staff\",3,\"any-staff\",\"isSelected\",\"staff\"],[1,\"footer\"],[1,\"staff\",3,\"click\",\"showInfo\",\"isSelected\",\"staff\"],[1,\"fixed-button\",3,\"click\"]],template:function(a,f){a&1&&(D(0,Ie,1,4,\"app-staff-tile\",0,we),v(2,ye,4,3,\"div\",1)),a&2&&(E(f.staffList),c(2),x(f.selectedMasterId?2:-1))},dependencies:[N,z,de,me,$,A],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;padding-bottom:60px}[_nghost-%COMP%]   .staff[_ngcontent-%COMP%]{margin:24px 0;padding:8px 16px}[_nghost-%COMP%]   .staff[_ngcontent-%COMP%]:first-of-type{margin-top:2px}[_nghost-%COMP%]   .staff[_ngcontent-%COMP%]:first-of-type + *[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .staff.any-staff[_ngcontent-%COMP%]{margin-bottom:2px}'],changeDetection:0}));let i=t;return i})();var be=(i,t)=>t.id;function Pe(i,t){if(i&1&&(l(0,\"div\",9),_(1),s()),i&2){let r=p(2);M(\"data-locator\",\"service_price\"),c(),O(\" \",r.servicePrice(),\" \")}}function Oe(i,t){if(i&1&&(l(0,\"p\",5),_(1),T(2,\"secondsToTime\"),s()),i&2){let r=p().$implicit;M(\"data-locator\",\"service_seance_length\"),c(),O(\" \",ne(2,2,r.seance_length,!1,!0),\" \")}}function Te(i,t){if(i&1){let r=k();l(0,\"app-no-staff-tile\",10),T(1,\"translate\"),w(\"click\",function(){g(r);let e=p(2);return u(e.openSelectMasterModal())}),s()}i&2&&d(\"title\",U(1,3,\"steps.select_staff\"))(\"clickable\",!0)(\"forwardIcon\",\"common/arrow-right\")}function Fe(i,t){i&1&&b(0,\"ui-kit-svg-icon\",13)}function Ve(i,t){if(i&1){let r=k();l(0,\"app-staff-tile\",11),w(\"showInfo\",function(){g(r);let e=p(2);return u(e.openMasterInfo.emit({masterId:e.serviceStaff().id}))})(\"click\",function(){g(r);let e=p(2);return u(e.openSelectMasterModal())}),v(1,Fe,1,0,\"ui-kit-svg-icon\",12),s()}if(i&2){let r=p(2);h(\"fixed-content\",!r.mayChangeMaster()&&!r.masterInfoViewDisabled()),d(\"staff\",r.serviceStaff())(\"infoVisible\",!r.mayChangeMaster()&&!r.masterInfoViewDisabled()),c(),d(\"ngIf\",r.mayChangeMaster())}}function De(i,t){if(i&1&&(l(0,\"p\",8),_(1),s()),i&2){let r=p().$implicit;M(\"data-locator\",\"service_description\"),c(),P(r.comment)}}function Ee(i,t){if(i&1&&(l(0,\"div\",1)(1,\"div\",2)(2,\"div\",3)(3,\"p\"),_(4),s()(),v(5,Pe,2,2,\"div\",4),s(),v(6,Oe,3,6,\"p\",5),s(),v(7,Te,2,5,\"app-no-staff-tile\",6)(8,Ve,2,5,\"app-staff-tile\",7)(9,De,2,2,\"p\",8)),i&2){let r=t.$implicit,o=t.$index,e=p();ie(\"margin-bottom\",e.titleMarginBottom(),\"px\"),c(3),h(\"title-with-padding\",o>0),M(\"data-locator\",\"service_title\"),c(),P(r.title),c(),d(\"ngIf\",e.servicePrice),c(),x(r.seance_length?6:-1),c(),x(!e.serviceStaff()&&!e.masterInfoViewDisabled()?7:-1),c(),x(e.serviceStaff()?8:-1),c(),x(e.serviceCommentVisible()&&r.comment?9:-1)}}var wt=(()=>{let t=class t{constructor(o,e,a,f){n(this,\"modalService\");n(this,\"destroyRef\");n(this,\"store\");n(this,\"complexTrackingService\");n(this,\"services\",m([]));n(this,\"availableMasters\",m([]));n(this,\"titleMarginBottom\",m(0));n(this,\"serviceStaff\",m(null));n(this,\"mayChangeMaster\",m(!0));n(this,\"tempSubInfo\",m(null));n(this,\"masterInfoViewDisabled\",m(!1));n(this,\"serviceCommentVisible\",m(!1));n(this,\"servicePrice\",m(null));n(this,\"masterSelected\",new y);n(this,\"openMasterInfo\",new y);n(this,\"modalTitle\",oe(()=>{let o=this.services();return o.reduce((e,a,f)=>e+\"\".concat(a.title).concat(f===o.length-1?\"\":\", \"),\"\")}));this.modalService=o,this.destroyRef=e,this.store=a,this.complexTrackingService=f}openSelectMasterModal(){return G(this,null,function*(){var a;if(!this.mayChangeMaster())return;this.complexTrackingService.trackClickToMasterSelector(this.services()[0].id),this.tempSubInfo()&&(this.store.dispatch(new le(this.tempSubInfo())),yield se(this.store.select(V.masters.getMastersForCompositesLoading(!0)).pipe(J(f=>!f),X(10))));let o=this.modalService.openModal({component:ve,componentData:{staffList:this.availableMasters(),selectedMasterId:(a=this.serviceStaff())==null?void 0:a.id},params:{title:this.modalTitle(),modalType:pe.withTitle}});this.complexTrackingService.trackOpenMasterSelectorModal(this.services()[0].id),o.openMasterInfo.pipe(Q(1),ce(this.destroyRef)).subscribe(f=>{this.openMasterInfo.emit({masterId:f})});let e=yield o.result.catch(q);e&&this.masterSelected.emit(e)})}};n(t,\"\\u0275fac\",function(e){return new(e||t)(C(R),C(ee),C(W),C(Ce))}),n(t,\"\\u0275cmp\",S({type:t,selectors:[[\"app-services-card-with-master\"]],inputs:{services:[1,\"services\"],availableMasters:[1,\"availableMasters\"],titleMarginBottom:[1,\"titleMarginBottom\"],serviceStaff:[1,\"serviceStaff\"],mayChangeMaster:[1,\"mayChangeMaster\"],tempSubInfo:[1,\"tempSubInfo\"],masterInfoViewDisabled:[1,\"masterInfoViewDisabled\"],serviceCommentVisible:[1,\"serviceCommentVisible\"],servicePrice:[1,\"servicePrice\"]},outputs:{masterSelected:\"masterSelected\",openMasterInfo:\"openMasterInfo\"},standalone:!0,features:[I],decls:3,vars:0,consts:[[1,\"content\"],[1,\"title\"],[1,\"info\"],[1,\"text\"],[\"class\",\"price\",4,\"ngIf\"],[1,\"duration-info\",\"title-description\"],[1,\"no-staff-block\",\"pointer\",3,\"title\",\"clickable\",\"forwardIcon\"],[1,\"staff-block\",\"pointer\",3,\"staff\",\"infoVisible\",\"fixed-content\"],[1,\"comment\"],[1,\"price\"],[1,\"no-staff-block\",\"pointer\",3,\"click\",\"title\",\"clickable\",\"forwardIcon\"],[1,\"staff-block\",\"pointer\",3,\"showInfo\",\"click\",\"staff\",\"infoVisible\"],[\"sub-actions\",\"\",\"name\",\"edit\",\"class\",\"pen-icon\",4,\"ngIf\"],[\"sub-actions\",\"\",\"name\",\"edit\",1,\"pen-icon\"]],template:function(e,a){e&1&&(l(0,\"div\",0),D(1,Ee,10,11,null,null,be),s()),e&2&&(c(),E(a.services()))},dependencies:[N,z,ge,re,K,B,H,ue,$,A],styles:['@charset \"UTF-8\";.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:row}.title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;display:flex;flex-direction:column;overflow:hidden}.title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title-with-padding[_ngcontent-%COMP%]{margin-top:8px}.title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black);margin-left:auto}.title-description.duration-info[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:var(--widget-ui-kit-color-color_grey_dark)}.duration-info[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}.comment[_ngcontent-%COMP%]{padding-top:12px}.pen-icon[_ngcontent-%COMP%]{width:24px;height:24px;color:var(--widget-ui-kit-color-icons-secondary-text);cursor:pointer}  .forward-icon{color:var(--widget-ui-kit-color-icons-secondary-text)!important}.no-staff-block[_ngcontent-%COMP%]{font-size:24px}.staff-block[_ngcontent-%COMP%], .no-staff-block[_ngcontent-%COMP%]{margin-top:4px}.fixed-content[_ngcontent-%COMP%]{display:block;padding:16px;background-color:var(--widget-ui-kit-color-color_grey);border-radius:20px;box-shadow:0 0 1px #00247f3d}'],changeDetection:0}));let i=t;return i})();export{ue as a,Ce as b,wt as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 4019,
          "_transferSize": 4679,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:23:45.159Z",
        "time": 48.482000012882054,
        "timings": {
          "blocked": 27.894000004418196,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.29699999999999704,
          "wait": 15.352000002630056,
          "receive": 4.939000005833805,
          "_blocked_queueing": 4.419000004418194,
          "_blocked_proxy": 4.897,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "364527",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/success-order.module-FD63QDBS.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-6EZS7O64.js",
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
              "value": "https://n958200.alteg.io/success-order.module-FD63QDBS.js"
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
          "headersSize": 1274,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "2318"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad07377d12bcab-ALA"
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
              "value": "Tue, 07 Oct 2025 11:23:45 GMT"
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
              "value": "W/\"68d3e13d-ba1\""
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
              "value": "368beccd4272d42de478e556bb17ff13"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 2977,
            "mimeType": "application/javascript",
            "compression": 1802,
            "text": "import{g as v}from\"./chunk-FAHXWQCK.js\";import{$b as r,Ab as t,Bc as h,Ha as C,Ob as x,Qb as l,Rb as m,Tb as f,_b as p,jc as g,sc as s,tc as d}from\"./chunk-CJMBEYVW.js\";import{g as a}from\"./chunk-JV5WWF5Q.js\";function u(e,i){if(e&1&&(p(0,\"div\",3)(1,\"span\",4),s(2),r(),p(3,\"span\",5),s(4),r()()),e&2){let o=g();t(),l(\"data-locator\",\"prepayment_block_title\"),t(),d(o.prepaidText),t(),l(\"data-locator\",\"prepayment_block_cost\"),t(),d(o.prepaidCost)}}function T(e,i){if(e&1&&(p(0,\"div\",6)(1,\"span\",4),s(2),r(),p(3,\"span\",5),s(4),r()()),e&2){let o=g();t(),l(\"data-locator\",\"paid_block_title\"),t(),d(o.paidText),t(),l(\"data-locator\",\"paid_block_cost\"),t(),d(o.paidCost)}}function y(e,i){if(e&1&&(p(0,\"div\",7)(1,\"span\",4),s(2),r(),p(3,\"span\",5),s(4),r()()),e&2){let o=g();t(),l(\"data-locator\",\"summary_info_header\"),t(),d(o.totalText),t(),l(\"data-locator\",\"summary_info_price\"),t(),d(o.totalCost)}}var M=(()=>{let i=class i{constructor(){a(this,\"totalCost\");a(this,\"prepaidCost\");a(this,\"paidCost\");a(this,\"totalText\");a(this,\"prepaidText\");a(this,\"paidText\")}get isTotalPrepaid(){return!!this.totalCost&&!!this.prepaidCost}get isTotalPaid(){return!!this.totalCost&&!!this.paidCost}get isSingleInput(){return[this.totalCost,this.prepaidCost,this.paidCost].filter(c=>(c==null?void 0:c.length)>0).length===1}};a(i,\"\\u0275fac\",function(_){return new(_||i)}),a(i,\"\\u0275cmp\",C({type:i,selectors:[[\"ui-kit-total-cost\"]],hostVars:6,hostBindings:function(_,n){_&2&&f(\"total-prepaid\",n.isTotalPrepaid)(\"total-paid\",n.isTotalPaid)(\"single\",n.isSingleInput)},inputs:{totalCost:\"totalCost\",prepaidCost:\"prepaidCost\",paidCost:\"paidCost\",totalText:\"totalText\",prepaidText:\"prepaidText\",paidText:\"paidText\"},standalone:!0,features:[h],decls:3,vars:3,consts:[[\"class\",\"item item__prepaid\",4,\"ngIf\"],[\"class\",\"item item__paid\",4,\"ngIf\"],[\"class\",\"item item__total\",4,\"ngIf\"],[1,\"item\",\"item__prepaid\"],[1,\"item__title\"],[1,\"item__cost\"],[1,\"item\",\"item__paid\"],[1,\"item\",\"item__total\"]],template:function(_,n){_&1&&x(0,u,5,4,\"div\",0)(1,T,5,4,\"div\",1)(2,y,5,4,\"div\",2),_&2&&(m(\"ngIf\",n.prepaidCost),t(),m(\"ngIf\",n.paidCost),t(),m(\"ngIf\",n.totalCost))},dependencies:[v],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}[_nghost-%COMP%]   .item__total[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2){padding-top:2px;color:var(--widget-ui-kit-color-color_grey_dark)}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3){color:var(--widget-ui-kit-color-color_grey_dark)}[_nghost-%COMP%]   .item__cost[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   .item__title[_ngcontent-%COMP%]{padding-right:8px}'],changeDetection:0}));let e=i;return e})();export{M as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 1175,
          "_transferSize": 1834,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:23:45.159Z",
        "time": 47.80399997252971,
        "timings": {
          "blocked": 28.255000045396386,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.272000000000002,
          "wait": 15.95099997986853,
          "receive": 3.3259999472647905,
          "_blocked_queueing": 4.669000045396388,
          "_blocked_proxy": 4.718,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "361251",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/success-order.module-FD63QDBS.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-3LQQYZGP.js",
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
              "value": "https://n958200.alteg.io/success-order.module-FD63QDBS.js"
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
          "headersSize": 1274,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5026"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad07377f13bca3-ALA"
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
              "value": "Tue, 07 Oct 2025 11:23:45 GMT"
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
              "value": "W/\"68d3e13d-1e3b\""
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
              "value": "1395b850feccef9df0ac3ce687c28de1"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 7739,
            "mimeType": "application/javascript",
            "compression": 5068,
            "text": "import{z as $}from\"./chunk-TDZAPBSL.js\";import{a as j,k as L}from\"./chunk-5IQFNC4I.js\";import{m as D,n as F,o as q,p as h,u as K}from\"./chunk-UIU24VNB.js\";import{U as E,ga as U}from\"./chunk-W3M7SAIY.js\";import{f as V,g as R,r as A}from\"./chunk-FAHXWQCK.js\";import{$b as a,Ab as r,Bb as y,Gc as T,Ha as S,Ia as I,Jc as N,Ob as f,Qa as M,Qb as p,Ra as C,Rb as m,Sa as x,Wb as d,_a as w,_b as s,ac as u,ec as b,ic as O,jc as g,sc as v,tc as k,uc as _,xa as P}from\"./chunk-CJMBEYVW.js\";import{g as t}from\"./chunk-JV5WWF5Q.js\";function B(e,i){e&1&&v(0,\" \\xA0\\xB7 \")}function H(e,i){if(e&1&&(s(0,\"span\",5),f(1,B,1,0),v(2),a()),e&2){let n=g();p(\"data-locator\",\"service_count\"),r(),d(n.serviceInformation?1:-1),r(),_(\" \",n.serviceCount,\" \")}}function G(e,i){if(e&1&&u(0,\"ui-kit-tag\",13),e&2){let n=i.$implicit,o=g(2);m(\"label\",n.tagLabel)(\"iconName\",n.tagIconName)(\"tagType\",o.tagType.bordered),p(\"data-locator\",\"service_label\")}}function W(e,i){if(e&1&&(s(0,\"div\",11),f(1,G,1,4,\"ui-kit-tag\",12),a()),e&2){let n=g();r(),m(\"ngForOf\",n.paymentService.getServiceTags(n.service,n.showDiscountTag))}}function J(e,i){if(e&1&&(s(0,\"div\",14),v(1),T(2,\"price\"),a()),e&2){let n=g();p(\"data-locator\",\"service_price\"),r(),_(\" \",N(2,2,n.servicePrice,n.currency,!0),\" \")}}function Q(e,i){if(e&1){let n=b();s(0,\"div\",15),O(\"click\",function(){C(n);let c=g();return x(c.handleClickOnInfoIcon())}),s(1,\"div\",16),u(2,\"ui-kit-svg-icon\",17),a()()}e&2&&(r(2),m(\"name\",\"info\"),p(\"data-locator\",\"icon_info\"))}function X(e,i){if(e&1){let n=b();s(0,\"div\",18),O(\"click\",function(){C(n);let c=g();return x(c.iconClick.emit())}),u(1,\"ui-kit-svg-icon\",19),a()}if(e&2){let n=g();r(),m(\"name\",n.iconName),p(\"data-locator\",\"remove_service_btn\")}}var pe=(()=>{let i=class i{constructor(o,c){t(this,\"paymentService\");t(this,\"wordNumeralCase\");t(this,\"service\");t(this,\"currency\");t(this,\"showServiceTags\",!0);t(this,\"isRecordChargeActive\",!1);t(this,\"orderAbonementRestrictionRequired\",!1);t(this,\"iconName\");t(this,\"infoIconVisible\",!1);t(this,\"overflowVisible\",!1);t(this,\"formattedSeanceLength\");t(this,\"togglePayOnlineActive\",!1);t(this,\"showDiscountTag\",!0);t(this,\"iconClick\",new w);t(this,\"showInfo\",new w);t(this,\"tagType\",q);t(this,\"isAbonementRequired\",!1);t(this,\"servicePrice\");t(this,\"serviceInformation\",\"\");this.paymentService=o,this.wordNumeralCase=c}set seanceLength(o){this.formattedSeanceLength=o?o.replace(/\\./g,\"\"):void 0}get serviceCount(){if(!this.service.is_composite)return\"\";let o=this.service.composite_details.links.length;return\"\".concat(o,\" \").concat(this.wordNumeralCase.transform(\"service.more_plural\",o,{pluralGenitive:\".many\",nominative:\".singular\",genitive:\".few\"}))}ngOnChanges(){this.isAbonementRequired=this.paymentService.abonementRestrictionRequired(this.service),this.servicePrice=this.getServicePrice(),this.serviceInformation=this.getServiceInformation()}getServicePrice(){return this.isAbonementRequired?void 0:(c=>typeof c.spotsCount==\"number\")(this.service)?{price_max:this.service.price_max*this.service.spotsCount,price_min:this.service.price_min*this.service.spotsCount}:this.service}getServiceInformation(){return\"spotsCount\"in this.service&&this.service.spotsCount?this.service.spotsCount>1?this.lookUpSpotsCountText(this.service.spotsCount):\"\":this.formattedSeanceLength}lookUpSpotsCountText(o){return\"\".concat(o,\" \").concat(this.wordNumeralCase.transform(\"group_booking.spots_count\",o))}handleClickOnInfoIcon(){this.showInfo.emit()}};t(i,\"\\u0275fac\",function(c){return new(c||i)(y(K),y(D))}),t(i,\"\\u0275cmp\",S({type:i,selectors:[[\"app-service-item\"]],inputs:{service:\"service\",currency:\"currency\",showServiceTags:\"showServiceTags\",isRecordChargeActive:\"isRecordChargeActive\",orderAbonementRestrictionRequired:\"orderAbonementRestrictionRequired\",iconName:\"iconName\",infoIconVisible:\"infoIconVisible\",overflowVisible:\"overflowVisible\",seanceLength:\"seanceLength\",togglePayOnlineActive:\"togglePayOnlineActive\",showDiscountTag:\"showDiscountTag\"},outputs:{iconClick:\"iconClick\",showInfo:\"showInfo\"},features:[M],decls:13,vars:10,consts:[[3,\"overflowVisible\"],[\"center\",\"\",1,\"short-info\"],[1,\"service-item-title\"],[1,\"short-info-description\"],[1,\"service-item-time\"],[1,\"service-item-count\"],[\"class\",\"tags-container\",4,\"ngIf\"],[\"right\",\"\",1,\"service-actions\"],[\"class\",\"service-item-price\",4,\"ngIf\"],[1,\"info-button-container\"],[\"class\",\"icon-container\",3,\"click\",4,\"ngIf\"],[1,\"tags-container\"],[3,\"label\",\"iconName\",\"tagType\",4,\"ngFor\",\"ngForOf\"],[3,\"label\",\"iconName\",\"tagType\"],[1,\"service-item-price\"],[1,\"info-button-container\",3,\"click\"],[1,\"info-button\"],[\"role\",\"button\",\"aria-label\",\"?\",1,\"info-button-icon\",3,\"name\"],[1,\"icon-container\",3,\"click\"],[1,\"service-item-icon\",3,\"name\"]],template:function(c,l){c&1&&(s(0,\"ui-kit-simple-cell\",0)(1,\"div\",1)(2,\"span\",2),v(3),a(),s(4,\"div\",3)(5,\"span\",4),v(6),a(),f(7,H,3,3,\"span\",5),a(),f(8,W,2,1,\"div\",6),a(),s(9,\"div\",7),f(10,J,3,6,\"div\",8)(11,Q,3,2,\"div\",9)(12,X,2,2,\"div\",10),a()()),c&2&&(m(\"overflowVisible\",l.showServiceTags||l.overflowVisible),r(2),p(\"data-locator\",\"service_title\"),r(),_(\"\",l.service.title,\" \"),r(2),p(\"data-locator\",\"service_seance_length\"),r(),k(l.serviceInformation),r(),d(l.service.is_composite?7:-1),r(),m(\"ngIf\",l.showServiceTags),r(2),m(\"ngIf\",l.servicePrice),r(),d(l.infoIconVisible?11:-1),r(),m(\"ngIf\",l.iconName))},dependencies:[V,R,h,j,E,F],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:nowrap;align-items:center;cursor:default}[_nghost-%COMP%]   .short-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}[_nghost-%COMP%]   .short-info-description[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .tags-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px;white-space:nowrap}[_nghost-%COMP%]   .tags-container[_ngcontent-%COMP%]:empty{display:none}[_nghost-%COMP%]   .service-item-title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}[_nghost-%COMP%]   .service-item-count[_ngcontent-%COMP%], [_nghost-%COMP%]   .service-item-time[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:var(--widget-ui-kit-color-color_grey_dark)}[_nghost-%COMP%]   .service-item-price[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black);overflow-wrap:anywhere}[_nghost-%COMP%]   .service-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px}[_nghost-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer}[_nghost-%COMP%]   .icon-container[_ngcontent-%COMP%]   .service-item-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_dark);width:13.3px;height:13.3px}[_nghost-%COMP%]   .info-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer}[_nghost-%COMP%]   .info-button-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:19.5px;height:19.5px;background-color:var(--widget-ui-kit-color-color_grey_03);border-radius:50%}[_nghost-%COMP%]   .info-button-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]   .info-button-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_11);width:5px;height:10px;padding-left:.5px}'],changeDetection:0}));let e=i;return e})();var we=(()=>{let i=class i{};t(i,\"\\u0275fac\",function(c){return new(c||i)}),t(i,\"\\u0275mod\",I({type:i})),t(i,\"\\u0275inj\",P({imports:[A,$,h,L,U]}));let e=i;return e})();export{pe as a,we as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2671,
          "_transferSize": 3331,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:23:45.159Z",
        "time": 48.96700009703636,
        "timings": {
          "blocked": 28.57499998958409,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2309999999999981,
          "wait": 17.4010000462085,
          "receive": 2.7600000612437725,
          "_blocked_queueing": 4.890999989584088,
          "_blocked_proxy": 4.7940000000000005,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "364536",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/success-order.module-FD63QDBS.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-2HS4R432.js",
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
              "value": "https://n958200.alteg.io/success-order.module-FD63QDBS.js"
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
          "headersSize": 1274,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5026"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad07377f9fbca5-ALA"
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
              "value": "Tue, 07 Oct 2025 11:23:45 GMT"
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
              "value": "W/\"68d3e13d-1abb\""
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
              "value": "d643db485225b8117b0f9706d9c73ac5"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 6843,
            "mimeType": "application/javascript",
            "compression": 4161,
            "text": "import{k as V}from\"./chunk-CPJG55BZ.js\";import{a as B}from\"./chunk-NI23FEIO.js\";import{b as me,d as de}from\"./chunk-T2I4FXSV.js\";import{a as P}from\"./chunk-GVFMUVCD.js\";import{b as pe}from\"./chunk-TVYAHP6T.js\";import{c as le}from\"./chunk-6RRCVQGA.js\";import{n as ne,u as ce}from\"./chunk-UIU24VNB.js\";import{n as ae}from\"./chunk-KARNDABV.js\";import{Be as se,Gh as l,N as x,O as I,P as T,S as ee,aa as k,ac as F,ga as $,ha as te,kb as re,l as b,r as Z,ua as ie,ya as oe}from\"./chunk-FAHXWQCK.js\";import{$b as _,$c as Y,Bb as R,Ca as n,Gc as p,Ha as S,Hc as m,Ia as z,Jb as J,Qb as K,Ra as C,Rb as w,Sa as M,_ as g,_b as u,ec as X,h as Q,ic as f,j as h,na as y,oc as j,pc as D,qc as O,r as q,ra as U,wa as G,x as v,xa as W}from\"./chunk-CJMBEYVW.js\";import{a as E,b as H,g as e,i as N}from\"./chunk-JV5WWF5Q.js\";var ue=(()=>{let o=class o extends B{constructor(t,i){super(t,i);e(this,\"router\");e(this,\"route\");e(this,\"store\",n(oe));e(this,\"widgetApiHelperService\",n(le));e(this,\"pricePipe\",n(ne));e(this,\"translatePipe\",n($));e(this,\"paymentService\",n(ce));e(this,\"tracking\",n(k));e(this,\"metrika\",n(pe));e(this,\"destroyed$\",new h(1));e(this,\"currentCompany$\",this.store.select(l.currentCompany.getCurrentCompany).pipe(g(),y(this.destroyed$)));e(this,\"selectedMasterId$\",this.store.select(l.order.getSelectedMaster).pipe(v(t=>{var i;return(i=t==null?void 0:t.id)!=null?i:null})));e(this,\"masters$\",this.widgetApiHelperService.filteredByInjectionMasters.pipe(U(this.selectedMasterId$,this.currentCompany$,this.store.select(l.order.getSelectedServices).pipe(v(t=>!this.paymentService.hasServicesAbonementRestriction(t)))),v(([t,i,r,d])=>se.sortMasters(t,i).map(c=>{let L=d?this.pricePipe.transform({price_min:c.price_min,price_max:c.price_max},r.currency_short_title):null;return L===this.translatePipe.transform(\"service.price_not_available\")&&(L=null),H(E({},c),{priceRange:L})}))));this.router=t,this.route=i}selectMasterForComposites(t){this.store.selectSnapshot(l.order.getIndividualSelectedServicesInfo).forEach(i=>{re(i)&&i.subServicesInfo.forEach(r=>{this.store.dispatch(new F(t,i.serviceId,r.serviceLinkId))})})}selectMaster(t){this.store.dispatch(new F(t.id)),this.selectMasterForComposites(t.id),this.navigateToParent(null,!0)}openMasterInfo(t){this.currentCompany$.subscribe(i=>N(this,null,function*(){let r=\"../\".concat(ae(i.id,t.id));yield this.router.navigate([r],{relativeTo:this.route,queryParamsHandling:\"merge\"})}))}sendPageViewEvent(t){this.tracking.pageView(me.mastersList),this.metrika.reachGoal(\"screen_open_staff\",{companyId:t.id,companyName:t.title})}ngAfterViewInit(){this.currentCompany$.subscribe(t=>{this.sendPageViewEvent(t)})}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}};e(o,\"\\u0275fac\",function(i){return new(i||o)(R(T),R(x))}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-masters-list-modal\"]],features:[J],decls:4,vars:9,consts:[[1,\"masters-list\",3,\"selectMaster\",\"showInfo\",\"company\",\"masters\",\"selectedMasterId\"]],template:function(i,r){i&1&&(u(0,\"app-masters-list\",0),p(1,\"async\"),p(2,\"async\"),p(3,\"async\"),f(\"selectMaster\",function(c){return r.selectMaster(c)})(\"showInfo\",function(c){return r.openMasterInfo(c)}),_()),i&2&&w(\"company\",m(1,3,r.currentCompany$))(\"masters\",m(2,5,r.masters$))(\"selectedMasterId\",m(3,7,r.selectedMasterId$))},dependencies:[de,b],styles:[\".masters-list[_ngcontent-%COMP%]{height:60vh;max-height:60vh}\"],changeDetection:0}));let s=o;return s})();var fe=(()=>{let o=class o{constructor(){e(this,\"closeSubject\",new Q);e(this,\"close$\",this.closeSubject.asObservable())}close(){this.closeSubject.next()}};e(o,\"\\u0275fac\",function(t){return new(t||o)}),e(o,\"\\u0275prov\",G({token:o,factory:o.\\u0275fac,providedIn:\"root\"}));let s=o;return s})();var ge=[\"modalComponent\"],rt=(()=>{let o=class o{constructor(){e(this,\"modalComponent\");e(this,\"showBackButton\",!1);e(this,\"dataLocator\");e(this,\"leading\");e(this,\"hideFringe\",!1);e(this,\"outlet\");e(this,\"store\",n(ie));e(this,\"router\",n(T));e(this,\"trackingService\",n(k));e(this,\"cd\",n(Y));e(this,\"modalOutletService\",n(fe));e(this,\"modalTitle$\");e(this,\"datetimeStepTitle$\",this.store.select(l.bookform.getDatetimeStepTitle));e(this,\"masterStepTitle$\",this.store.select(l.bookform.getMasterStepTitle));e(this,\"modalIsShowed\",!1);e(this,\"dataLocatorByRouter\",\"\");e(this,\"currentComponent\",null);e(this,\"destroy$\",new h(1));e(this,\"closeSubscription\")}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}get modalVisibility(){return this.modalIsShowed}activateRoute(a){this.modalIsShowed=!0,this.currentComponent=a,this.closeSubscription=this.modalOutletService.close$.pipe(g(),y(this.destroy$)).subscribe(()=>{var t;(t=this.modalComponent)!=null&&t.close&&(this.modalComponent.close(),this.modalComponent.fullyClosed=!0)}),this.setDataLocator(this.currentComponent),this.setTitle()}goBack(a){a&&(this.navigateBack(),this.sendNavigateBackEvent())}unsubscribeModalOutletServiceAndHideModal(){this.modalIsShowed=!1,this.closeSubscription.unsubscribe()}navigateBack(){this.currentComponent instanceof B?this.currentComponent.navigateToParent(\"preserve\",!0):this.router.navigate([\"/\"],{replaceUrl:!0,queryParamsHandling:\"preserve\"})}sendNavigateBackEvent(){this.trackingService.backButtonClick()}setDataLocator(a){this.dataLocatorByRouter=a instanceof V?\"datetime_select_popup\":null,this.cd.detectChanges()}setTitle(){this.currentComponent instanceof V?this.modalTitle$=this.datetimeStepTitle$:this.currentComponent instanceof ue?this.modalTitle$=this.masterStepTitle$:this.modalTitle$=q(\"\"),this.cd.detectChanges()}};e(o,\"\\u0275fac\",function(t){return new(t||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-modal-outlet\"]],viewQuery:function(t,i){if(t&1&&(j(ge,5),j(I,7)),t&2){let r;D(r=O())&&(i.modalComponent=r.first),D(r=O())&&(i.outlet=r.first)}},inputs:{showBackButton:\"showBackButton\",dataLocator:\"dataLocator\",leading:\"leading\",hideFringe:\"hideFringe\"},decls:5,vars:10,consts:[[\"modalComponent\",\"\"],[3,\"closeModalEvent\",\"showBackButton\",\"showed\",\"title\",\"hideFringe\",\"leading\"],[3,\"activate\",\"deactivate\"]],template:function(t,i){if(t&1){let r=X();u(0,\"app-modal\",1,0),p(2,\"async\"),p(3,\"translate\"),f(\"closeModalEvent\",function(c){return C(r),M(i.goBack(c))}),u(4,\"router-outlet\",2),f(\"activate\",function(c){return C(r),M(i.activateRoute(c))})(\"deactivate\",function(){return C(r),M(i.unsubscribeModalOutletServiceAndHideModal())}),_()()}t&2&&(w(\"showBackButton\",i.showBackButton)(\"showed\",i.modalVisibility)(\"title\",m(3,8,m(2,6,i.modalTitle$)))(\"hideFringe\",i.hideFringe)(\"leading\",i.leading),K(\"data-locator\",i.dataLocator||i.dataLocatorByRouter))},dependencies:[I,P,b,$],changeDetection:0}));let s=o;return s})();var ut=(()=>{let o=class o{};e(o,\"\\u0275fac\",function(t){return new(t||o)}),e(o,\"\\u0275mod\",z({type:o})),e(o,\"\\u0275inj\",W({imports:[Z,ee,te,P]}));let s=o;return s})();export{ue as a,rt as b,ut as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2682,
          "_transferSize": 3342,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:23:45.159Z",
        "time": 52.83300008159131,
        "timings": {
          "blocked": 35.27700003833324,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2989999999999995,
          "wait": 14.72799999473244,
          "receive": 2.5290000485256314,
          "_blocked_queueing": 5.035000038333237,
          "_blocked_proxy": 4.702,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "369857",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/success-order.module-FD63QDBS.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-T2I4FXSV.js",
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
              "value": "https://n958200.alteg.io/success-order.module-FD63QDBS.js"
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
          "headersSize": 1274,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5026"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad07378f0dbca6-ALA"
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
              "value": "Tue, 07 Oct 2025 11:23:45 GMT"
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
              "value": "W/\"68d3e13d-268e\""
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
              "value": "fd013b19919406a5a69e3fa3e5e44859"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 9870,
            "mimeType": "application/javascript",
            "compression": 6304,
            "text": "import{a as oe}from\"./chunk-G26ZQ6GY.js\";import{i as te,v as ne}from\"./chunk-TDZAPBSL.js\";import{b as se}from\"./chunk-TVYAHP6T.js\";import{c as ae}from\"./chunk-A6DALH5L.js\";import{a as ie}from\"./chunk-SYTHNS6S.js\";import{g as Z,i as ee}from\"./chunk-UIU24VNB.js\";import{a as Y}from\"./chunk-W3M7SAIY.js\";import{Ah as X,_ as B,aa as G,f as L,g as V,ga as H,rf as J,sf as Q,tf as E,ya as R,zc as q,zh as W}from\"./chunk-FAHXWQCK.js\";import{$b as d,Ab as c,Bb as T,Bc as K,Gc as x,Ha as M,Hc as v,Ic as F,Ka as A,Ob as u,Qa as U,Qb as C,Ra as f,Rb as l,Sa as g,Tb as P,Wb as z,_a as h,_b as m,ac as N,bc as D,cc as O,ec as k,ic as S,jc as r,sc as y,tc as j,uc as w}from\"./chunk-CJMBEYVW.js\";import{a as b,b as $,g as o}from\"./chunk-JV5WWF5Q.js\";var I=function(n){return n.mastersList=\"masters_list\",n.button=\"button\",n.buttonNextStep=\"button_next_step\",n.clickButtonNextStep=\"click_button_next_step\",n.master=\"master\",n.datetime=\"datetime\",n.masterInfo=\"master_info\",n.selectMaster=\"select_master\",n.selectMasterAndTime=\"select_master_and_time\",n}(I||{});var ce=(()=>{let i=class i{transform(e,t){return e?e.replace(t,\"\"):\"\"}};o(i,\"\\u0275fac\",function(t){return new(t||i)}),o(i,\"\\u0275pipe\",A({name:\"trim\",type:i,pure:!0,standalone:!0}));let n=i;return n})();function me(n,i){n&1&&(m(0,\"span\"),y(1),x(2,\"translate\"),d()),n&2&&(c(),w(\"\",v(2,1,\"today\"),\":\"))}function de(n,i){n&1&&(m(0,\"span\"),y(1),x(2,\"translate\"),d()),n&2&&(c(),w(\"\",v(2,1,\"tomorrow\"),\":\"))}function _e(n,i){if(n&1&&(m(0,\"span\",6),y(1),x(2,\"yDate\"),x(3,\"trim\"),d()),n&2){let s=r();c(),w(\" \",F(3,4,F(2,1,s.seances.seance_date,\"reverseFullDate2\"),\".\"),\": \")}}function fe(n,i){if(n&1){let s=k();m(0,\"ui-kit-chips\",7),S(\"click\",function(){let t=f(s),a=t.$implicit,p=t.index,_=r();return g(_.handleClickOnSeance(a,p))}),m(1,\"span\"),y(2),x(3,\"timeInterval\"),d()()}if(n&2){let s=i.$implicit,e=r();l(\"active\",e.isSeanceSelected(s)),C(\"data-locator\",\"timeslot_\"+s.time),c(2),j(v(3,3,s.datetime))}}var le=(()=>{let i=class i{constructor(){o(this,\"seances\");o(this,\"loading\",!1);o(this,\"selectedSlotDateTime\");o(this,\"selectSeance\",new h);o(this,\"isMobileDevice\",Y().phone)}isSeanceSelected(e){return e.datetime===this.selectedSlotDateTime}handleClickOnSeance(e,t){this.isSeanceSelected(e)?this.selectSeance.emit():this.selectSeance.emit($(b({},e),{seanceIndex:t}))}get seancesToday(){return J(E(this.seances.seance_date))}get seancesTomorrow(){return Q(E(this.seances.seance_date))}};o(i,\"\\u0275fac\",function(t){return new(t||i)}),o(i,\"\\u0275cmp\",M({type:i,selectors:[[\"app-staff-seances\"]],inputs:{seances:\"seances\",loading:\"loading\",selectedSlotDateTime:\"selectedSlotDateTime\"},outputs:{selectSeance:\"selectSeance\"},standalone:!0,features:[K],decls:9,vars:9,consts:[[1,\"date\"],[1,\"date_accent\"],[4,\"ngIf\"],[\"class\",\"date__seance\",4,\"ngIf\"],[1,\"scrollable-slots\",3,\"hideScrollbar\"],[\"class\",\"slot\",3,\"active\",\"click\",4,\"ngFor\",\"ngForOf\"],[1,\"date__seance\"],[1,\"slot\",3,\"click\",\"active\"]],template:function(t,a){t&1&&(m(0,\"div\",0),y(1),x(2,\"translate\"),m(3,\"span\",1),u(4,me,3,3,\"span\",2)(5,de,3,3,\"span\",2)(6,_e,4,7,\"span\",3),d()(),m(7,\"ui-kit-horizontal-scrollable\",4),u(8,fe,4,5,\"ui-kit-chips\",5),d()),t&2&&(C(\"data-locator\",\"timeslots_date\"),c(),w(\" \",v(2,7,\"master.nearest_time\"),\" \"),c(3),l(\"ngIf\",a.seancesToday),c(),l(\"ngIf\",a.seancesTomorrow&&!a.seancesToday),c(),l(\"ngIf\",!a.seancesToday&&!a.seancesTomorrow),c(),l(\"hideScrollbar\",a.isMobileDevice),c(),l(\"ngForOf\",a.seances.seances))},dependencies:[V,ae,ie,ee,H,Z,ce,L,oe],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block}.date[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:14px;line-height:20px;color:var(--widget-ui-kit-color-color_grey_dark);margin-bottom:8px}.date[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.date_accent[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_text_black)}.date__seance[_ngcontent-%COMP%]{white-space:nowrap}.scrollable-slots[_ngcontent-%COMP%]{padding:0}.scrollable-slots[_ngcontent-%COMP%]   .slot[_ngcontent-%COMP%]{height:40px}'],changeDetection:0}));let n=i;return n})();function ue(n,i){if(n&1){let s=k();D(0),m(1,\"app-staff-tile\",2),S(\"showInfo\",function(){f(s);let t=r(),a=t.$implicit,p=t.index,_=r();return g(_.handleShowInfo(a,p))})(\"click\",function(){f(s);let t=r(),a=t.$implicit,p=t.index,_=r();return g(_.handleClick(a,p))}),d(),N(2,\"div\",3),O()}if(n&2){let s=r().$implicit,e=r();c(),P(\"master-clickable\",e.isBookable(s)),l(\"staff\",s)(\"disabled\",e.isDisabled(s)),C(\"data-locator\",e.getMasterDataLocator(s))}}function Se(n,i){if(n&1){let s=k();m(0,\"app-staff-seances\",8),S(\"selectSeance\",function(t){f(s);let a=r(2),p=a.$implicit,_=a.index,pe=r();return g(pe.handleSelectSeance(t,p,_))})(\"click\",function(t){f(s);let a=r(3);return g(a.handleClickOnSeances(t))}),d()}if(n&2){let s=r(2).$implicit,e=r();l(\"seances\",i)(\"loading\",e.isSeancesLoading(s))(\"selectedSlotDateTime\",e.isSelected(s)?e.selectedSlotDateTime:void 0)}}function xe(n,i){n&1&&N(0,\"ui-kit-datetime-block-skeleton\",7),n&2&&l(\"timeSlotsCount\",4)}function he(n,i){if(n&1){let s=k();D(0),m(1,\"div\",4),S(\"click\",function(){f(s);let t=r(),a=t.$implicit,p=t.index,_=r();return g(_.handleClick(a,p))}),m(2,\"app-staff-tile\",5),S(\"showInfo\",function(){f(s);let t=r(),a=t.$implicit,p=t.index,_=r();return g(_.handleShowInfo(a,p))}),d(),u(3,Se,1,3,\"app-staff-seances\",6)(4,xe,1,1,\"ui-kit-datetime-block-skeleton\",7),d(),O()}if(n&2){let s,e=r().$implicit,t=r();c(),C(\"data-locator\",t.getMasterDataLocator(e)),c(),P(\"master-clickable\",!t.isDisabled(e)),l(\"staff\",e)(\"infoVisible\",!t.isAny(e))(\"disabled\",t.isDisabled(e))(\"isSelected\",t.isSelected(e)),c(),z((s=t.getSeances(e))?3:!t.isAny(e)&&(t.isSeancesLoading(e)||t.company&&!t.staffSeances&&!t.selectedSlotDateTime)?4:-1,s)}}function Ce(n,i){if(n&1&&(D(0),u(1,ue,3,5,\"ng-container\",1)(2,he,5,8,\"ng-container\",1),O()),n&2){let s=r();c(),l(\"ngIf\",!s.isNewListItemVariant),c(),l(\"ngIf\",s.isNewListItemVariant)}}var tt=(()=>{let i=class i{constructor(e,t,a){o(this,\"tracking\");o(this,\"metrika\");o(this,\"storeSnapshotService\");o(this,\"isNewListItemVariant\",!1);o(this,\"masters\",[]);o(this,\"selectedMasterId\",null);o(this,\"company\",null);o(this,\"pageName\");o(this,\"staffSeances\",null);o(this,\"selectedSlotDateTime\");o(this,\"selectMaster\",new h);o(this,\"showInfo\",new h);o(this,\"selectSeance\",new h);o(this,\"initiallySelectedMasterId\",null);this.tracking=e,this.metrika=t,this.storeSnapshotService=a}static isMasterSelectedById(e,t){return t!==null&&e.id===t}isSelected(e){return i.isMasterSelectedById(e,this.selectedMasterId)}isBookable(e){return e.bookable===!0}isDisabled(e){return!this.isBookable(e)}isAny(e){return e.id===q}isSeancesLoading(e){return this.staffSeances&&this.company?W(this.staffSeances,{companyId:this.company.id,staffId:e.id}):!1}trackByMasterId(e,t){return t.id}getSeances(e){return this.staffSeances&&this.company?X(this.staffSeances,{companyId:this.company.id,staffId:e.id}):null}getMasterTrackData(e,t){return{part_type:I.master,part_id:this.isAny(e)?0:e.id,part_name:e.name,part_number:Number.isInteger(t)?t+1:void 0,element_type:I.master,element_id:this.isAny(e)?0:e.id,element_name:e.name,element_active:this.isBookable(e)?1:0,element_value:Number(e.rating).toFixed(2),element_count:e.comments_count,element_number:Number.isInteger(t)?t+1:void 0}}getMasterDataLocator(e){return\"master_container_\".concat(e.id)}handleShowInfo(e,t){this.tracking.track(b({type:B.Action.click,name:I.masterInfo,page:this.pageName?{name:this.pageName}:void 0},this.getMasterTrackData(e,t))),this.showInfo.emit(e)}handleSelectSeance(e,t,a){e?this.selectSeance.emit({staff:t,seance:e,masterIndex:a,seanceIndex:e.seanceIndex}):this.selectSeance.emit()}handleClick(e,t){var a,p;this.isBookable(e)&&(this.metrika.reachGoal(\"master_selected\",{master:e.name,masterId:e.id,companyId:(a=this.company)==null?void 0:a.id,companyName:(p=this.company)==null?void 0:p.title}),this.tracking.track(b({type:B.Action.select,name:I.selectMaster},this.getMasterTrackData(e,t))),this.selectMaster.emit(e),this.getSeances(e)&&(e.id!==this.selectedMasterId||this.selectedSlotDateTime)&&this.selectSeance.emit())}handleClickOnSeances(e){e.stopPropagation()}ngOnChanges(e){var t;(t=e.selectedMasterId)!=null&&t.isFirstChange()&&(this.initiallySelectedMasterId=this.selectedMasterId)}};o(i,\"\\u0275fac\",function(t){return new(t||i)(T(G),T(se),T(R))}),o(i,\"\\u0275cmp\",M({type:i,selectors:[[\"app-masters-list\"]],inputs:{isNewListItemVariant:\"isNewListItemVariant\",masters:\"masters\",selectedMasterId:\"selectedMasterId\",company:\"company\",pageName:\"pageName\",staffSeances:\"staffSeances\",selectedSlotDateTime:\"selectedSlotDateTime\"},outputs:{selectMaster:\"selectMaster\",showInfo:\"showInfo\",selectSeance:\"selectSeance\"},features:[U],decls:1,vars:2,consts:[[4,\"ngFor\",\"ngForOf\",\"ngForTrackBy\"],[4,\"ngIf\"],[1,\"master\",3,\"showInfo\",\"click\",\"staff\",\"disabled\"],[1,\"separate-line\"],[3,\"click\"],[1,\"staff-block\",3,\"showInfo\",\"staff\",\"infoVisible\",\"disabled\",\"isSelected\"],[1,\"staff-seances-block\",3,\"seances\",\"loading\",\"selectedSlotDateTime\"],[1,\"datetime-block-skeleton-container\",3,\"timeSlotsCount\"],[1,\"staff-seances-block\",3,\"selectSeance\",\"click\",\"seances\",\"loading\",\"selectedSlotDateTime\"]],template:function(t,a){t&1&&u(0,Ce,3,2,\"ng-container\",0),t&2&&l(\"ngForOf\",a.masters)(\"ngForTrackBy\",a.trackByMasterId)},dependencies:[L,V,te,ne,le],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%;overflow-y:auto;overflow-x:hidden}.staff-block[_ngcontent-%COMP%]{display:block;padding:8px 16px}.staff-seances-block[_ngcontent-%COMP%]{padding:4px 0 8px 16px}.master-clickable[_ngcontent-%COMP%]{cursor:pointer}.separate-line[_ngcontent-%COMP%]{margin-left:60px}.master[_ngcontent-%COMP%]{margin:0;padding:8px 16px}.datetime-block-skeleton-container[_ngcontent-%COMP%]{display:flex;padding:8px 0 8px 16px}'],changeDetection:0}));let n=i;return n})();export{ce as a,I as b,le as c,tt as d};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3566,
          "_transferSize": 4226,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:23:45.159Z",
        "time": 64.87300002481788,
        "timings": {
          "blocked": 45.08599999068677,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3719999999999999,
          "wait": 17.03300005719811,
          "receive": 2.3819999769330025,
          "_blocked_queueing": 5.624999990686774,
          "_blocked_proxy": 4.102,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "364527",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/success-order.module-FD63QDBS.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-GVFMUVCD.js",
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
              "value": "https://n958200.alteg.io/success-order.module-FD63QDBS.js"
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
          "headersSize": 1274,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5026"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad07379d24bcab-ALA"
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
              "value": "Tue, 07 Oct 2025 11:23:45 GMT"
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
              "value": "W/\"68d3e13d-1d60\""
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
              "value": "c36259ff90bdce0d9493d46210049efa"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 7520,
            "mimeType": "application/javascript",
            "compression": 4795,
            "text": "import{a as $}from\"./chunk-EUQV2ENM.js\";import{x as q,y as Z}from\"./chunk-TDZAPBSL.js\";import{f as N,g as z}from\"./chunk-G22OQKPL.js\";import{a as j}from\"./chunk-B4YFVVDN.js\";import{a as F}from\"./chunk-ODPFCO44.js\";import{W as v,Y as U,d as B,e as A,f as H,h as V,j as K,l as I,n as M}from\"./chunk-W3M7SAIY.js\";import{e as E,g as L}from\"./chunk-FAHXWQCK.js\";import{$b as c,Ab as _,Bb as y,Bc as D,Ha as O,Ob as w,Qb as S,Ra as g,Rb as s,Sa as u,Sb as x,Tb as f,_a as m,_b as d,ac as P,ec as C,ic as p,jc as l,kc as b,lc as T}from\"./chunk-CJMBEYVW.js\";import{g as i}from\"./chunk-JV5WWF5Q.js\";var k=\"FadeOut\",G=B(\"routeAnimations\",[K(\"* <=> \".concat(k),[M(\":leave\",I(),{optional:!0}),H([M(\":leave\",[A(\"0.2s ease-in\",V({opacity:0}))],{optional:!0})])])]);var Q=[\"*\"];function R(a,r){if(a&1&&(d(0,\"div\",7),P(1,\"div\",8),c()),a&2){let o=l().ngVar;s(\"ngClass\",o?\"with-app-header\":\"\")}}function W(a,r){if(a&1){let o=C();d(0,\"ui-kit-header\",9),p(\"leadingClick\",function(){g(o);let n=l(2);return u(n.backButtonClick())}),c()}if(a&2){let o=l(2);s(\"title\",o.title)(\"leading\",o.currentLeading)(\"leadingDataLocator\",\"close_popup_btn\")(\"titleDataLocator\",o.titleDataLocator)}}function X(a,r){if(a&1){let o=C();d(0,\"div\",2)(1,\"div\",3),p(\"uiKitSwipe\",function(n){g(o);let e=l();return u(e.swipe(n))}),w(2,R,2,1,\"div\",4)(3,W,1,4,\"ui-kit-header\",5),c(),d(4,\"div\",6),p(\"childScrollTop\",function(n){g(o);let e=l();return u(e.onChildScrollTopChange(n))})(\"uiKitSwipe\",function(n){g(o);let e=l();return u(e.swipe(n))}),T(5),c()()}if(a&2){let o=r.ngVar,t=l();f(\"modal_transparent\",t.isTransparent),S(\"data-locator\",\"expanded_modal_popup\"),_(2),s(\"ngIf\",!t.hideFringe),_(),s(\"ngIf\",o),_(),s(\"@routeAnimations\",t.animationState)(\"swipeLocked\",t.scrollTop>0)(\"swipePreventDefault\",t.scrollTop<0)}}var Mt=(()=>{let r=class r{constructor(t){i(this,\"bodyScrollLockService\");i(this,\"showBackButton\",!1);i(this,\"title\",\"\");i(this,\"leading\");i(this,\"hideFringe\",!1);i(this,\"isTransparent\",!1);i(this,\"forceLockScrollOnOpen\",!1);i(this,\"titleDataLocator\",\"popup_title\");i(this,\"closeModalEvent\",new m);i(this,\"showedChange\",new m);i(this,\"isShowed\",!1);i(this,\"dirty\",!1);i(this,\"scrollTop\",0);i(this,\"animationState\",\"*\");i(this,\"fullyClosed\",!0);i(this,\"shouldUnlock\",!1);this.bodyScrollLockService=t}set showed(t){this.isShowed=t,this.animationState=this.isShowed?k:\"*\",t&&(this.dirty=!0,this.fullyClosed=!1,this.scrollTop=0,this.bodyScrollLockService.lock(this.forceLockScrollOnOpen),this.shouldUnlock=!0),!t&&this.shouldUnlock&&(this.bodyScrollLockService.unlock(),this.shouldUnlock=!1)}get currentLeading(){return this.leading?this.leading:this.showBackButton?v.back:v.none}swipe(t){t.eventType===q.swipeDown&&(t.domEvent.stopPropagation(),this.close())}onChildScrollTopChange(t){this.scrollTop=t}close(){this.scrollTop=0,this.showed=!1,this.bodyScrollLockService.unlock(),this.closeModalEvent.emit(!0)}backButtonClick(){this.closeModalEvent.emit(!0)}onAnimateEnd(){!this.isShowed&&!this.fullyClosed&&(this.fullyClosed=!0,this.closeModalEvent.emit(!1),this.showedChange.emit(!1))}ngOnDestroy(){this.bodyScrollLockService.unlock()}get isDirty(){return this.dirty}get showedIsTrue(){return this.isShowed}get isDisplayed(){return this.fullyClosed?\"0\":\"100%\"}};i(r,\"\\u0275fac\",function(n){return new(n||r)(y($))}),i(r,\"\\u0275cmp\",O({type:r,selectors:[[\"app-modal\"]],hostVars:6,hostBindings:function(n,e){n&1&&p(\"transitionend\",function(){return e.onAnimateEnd()})(\"webkitTransitionEnd\",function(){return e.onAnimateEnd()})(\"msTransitionEnd\",function(){return e.onAnimateEnd()})(\"oTransitionEnd\",function(){return e.onAnimateEnd()}),n&2&&(x(\"height\",e.isDisplayed),f(\"dirty\",e.isDirty)(\"showed\",e.showedIsTrue))},inputs:{showBackButton:\"showBackButton\",title:\"title\",leading:\"leading\",hideFringe:\"hideFringe\",isTransparent:\"isTransparent\",forceLockScrollOnOpen:\"forceLockScrollOnOpen\",showed:\"showed\",titleDataLocator:\"titleDataLocator\"},outputs:{closeModalEvent:\"closeModalEvent\",showedChange:\"showedChange\"},standalone:!0,features:[D],ngContentSelectors:Q,decls:2,vars:1,consts:[[1,\"background\",3,\"click\",\"uiKitSwipe\"],[\"class\",\"modal\",3,\"modal_transparent\",4,\"ngVar\"],[1,\"modal\"],[1,\"window-header\",3,\"uiKitSwipe\"],[\"class\",\"swipe-area\",3,\"ngClass\",4,\"ngIf\"],[3,\"title\",\"leading\",\"leadingDataLocator\",\"titleDataLocator\",\"leadingClick\",4,\"ngIf\"],[\"uiKitHandleChildScroll\",\"\",3,\"childScrollTop\",\"uiKitSwipe\",\"swipeLocked\",\"swipePreventDefault\"],[1,\"swipe-area\",3,\"ngClass\"],[1,\"swipe-anchor\"],[3,\"leadingClick\",\"title\",\"leading\",\"leadingDataLocator\",\"titleDataLocator\"]],template:function(n,e){n&1&&(b(),d(0,\"div\",0),p(\"click\",function(){return e.close()})(\"uiKitSwipe\",function(J){return e.swipe(J)}),c(),w(1,X,6,8,\"div\",1)),n&2&&(_(),s(\"ngVar\",e.showBackButton||(e.title==null?null:e.title.length)))},dependencies:[L,E,F,U,z,N,Z,j],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;z-index:11000;overflow:hidden}[_nghost-%COMP%]   .swipe-area[_ngcontent-%COMP%]{height:28px;color:var(--widget-ui-kit-color-color_white);width:100%;text-align:center;position:relative}[_nghost-%COMP%]   .swipe-area[_ngcontent-%COMP%]   .swipe-anchor[_ngcontent-%COMP%]{height:4px;width:32px;border-radius:8px;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);background:var(--widget-ui-kit-color-grey-main)}[_nghost-%COMP%]   .swipe-area.with-app-header[_ngcontent-%COMP%]{height:16px}[_nghost-%COMP%]   .swipe-area.with-app-header[_ngcontent-%COMP%]   .swipe-anchor[_ngcontent-%COMP%]{top:100%;transform:translate3d(-50%,-100%,0)}.background[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:10500;opacity:0;will-change:auto;background-color:#000000a6;top:0;transition:opacity .2s ease-in}.dirty[_nghost-%COMP%]   .background[_ngcontent-%COMP%]{opacity:0}.showed[_nghost-%COMP%]   .background[_ngcontent-%COMP%]{opacity:1}.modal[_ngcontent-%COMP%]{will-change:auto;display:block;position:absolute;bottom:0;z-index:11000;background-color:var(--widget-ui-kit-color-color_white);width:100%;transform:translate3d(0,100%,0);border-top-right-radius:8px;border-top-left-radius:8px;transition:transform .2s ease-in;max-height:90%;overflow:auto}.dirty[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{transform:translate3d(0,100%,0)}.showed[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{transform:translateZ(0)}.modal_transparent[_ngcontent-%COMP%]{background-color:transparent}.window-header[_ngcontent-%COMP%]{position:relative}.window-header[_ngcontent-%COMP%]   ui-kit-header[_ngcontent-%COMP%]{position:static;padding-top:0}.window-header[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .window-header[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{cursor:pointer;height:24px;position:absolute;left:16px;top:50%;transform:translate3d(0,-50%,0)}.title[_ngcontent-%COMP%]{text-align:center;height:56px;line-height:40px;color:#000;font-size:17px;font-weight:500;vertical-align:middle;padding:8px;box-sizing:border-box;border-bottom:.5px solid #f2f5ff}@media (min-width: 500px){[_nghost-%COMP%]   .swipe-area[_ngcontent-%COMP%]{display:none}.modal[_ngcontent-%COMP%]{max-width:392px;left:50%;top:50%;bottom:auto;border-radius:8px;transform:translate3d(-50%,-50%,0);opacity:1;transition:opacity .2s ease-in}.dirty[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{opacity:0;transform:translate3d(-50%,-50%,0)}.showed[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{opacity:1;transform:translate3d(-50%,-50%,0)}}'],data:{animation:[G]},changeDetection:0}));let a=r;return a})();export{Mt as a};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2725,
          "_transferSize": 3385,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:23:45.159Z",
        "time": 70.10400004219264,
        "timings": {
          "blocked": 51.03800001321733,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3620000000000019,
          "wait": 17.472999968759716,
          "receive": 1.2310000602155924,
          "_blocked_queueing": 5.84200001321733,
          "_blocked_proxy": 3.87,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "367914",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "O",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 26495
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 7294
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 3405
              },
              {
                "functionName": "scheduleMacroTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 3714
              },
              {
                "functionName": "Vt",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 11106
              },
              {
                "functionName": "",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 26905
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 14254
              },
              {
                "functionName": "apply",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 320007
              },
              {
                "functionName": "t.sendObjectBeacon",
                "scriptId": "13137",
                "url": "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015",
                "lineNumber": 0,
                "columnNumber": 9089
              },
              {
                "functionName": "P",
                "scriptId": "13137",
                "url": "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015",
                "lineNumber": 0,
                "columnNumber": 4134
              },
              {
                "functionName": "",
                "scriptId": "13137",
                "url": "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015",
                "lineNumber": 0,
                "columnNumber": 5740
              },
              {
                "functionName": "c",
                "scriptId": "13120",
                "url": "https://n958200.alteg.io/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js",
                "lineNumber": 0,
                "columnNumber": 9404
              }
            ]
          }
        },
        "_priority": "High",
        "_resourceType": "xhr",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "POST",
          "url": "https://n958200.alteg.io/cdn-cgi/rum?",
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
              "value": "486"
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
              "value": "https://n958200.alteg.io/order-confirmation?o="
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
              "name": "baggage",
              "value": "sentry-environment=live,sentry-release=190659.904ad4e3,sentry-public_key=7bcbd183611e0badf786d2fc35dc275d,sentry-trace_id=dd06f39b8023483ea5acd094091cf9a5,sentry-sampled=false,sentry-sample_rand=0.6349500852377753,sentry-sample_rate=0"
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
            },
            {
              "name": "sentry-trace",
              "value": "dd06f39b8023483ea5acd094091cf9a5-bd932a3d7eeea980-0"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1622,
          "bodySize": 486,
          "postData": {
            "mimeType": "application/json",
            "text": "{\"resources\":[],\"eventType\":1,\"firstPaint\":4520,\"firstContentfulPaint\":4520,\"startTime\":1759836138487.1,\"versions\":{\"fl\":\"2024.11.0\",\"js\":\"2024.6.1\",\"timings\":1},\"pageloadId\":\"bdd13cf3-5ac9-4803-ad27-a3cfeea5a0b6\",\"location\":\"https://n958200.alteg.io/company/166443/success-order/610693170/663cf5c031974a671921902d2a37bd1d\",\"nt\":\"reload\",\"timingsV2\":{\"nextHopProtocol\":\"http/1.1\",\"transferSize\":2162,\"decodedBodySize\":4932},\"dt\":\"\",\"siteToken\":\"9e7204080df64c77b5f1133712bfb8fc\",\"st\":2}"
          }
        },
        "response": {
          "status": 204,
          "statusText": "No Content",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Access-Control-Allow-Credentials",
              "value": "true"
            },
            {
              "name": "Access-Control-Allow-Methods",
              "value": "POST,OPTIONS"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Access-Control-Max-Age",
              "value": "86400"
            },
            {
              "name": "CF-RAY",
              "value": "98ad07481b2c20dd-HKG"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Type",
              "value": "text/plain"
            },
            {
              "name": "Date",
              "value": "Tue, 07 Oct 2025 11:23:47 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Strict-Transport-Security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "Vary",
              "value": "Origin, accept-encoding"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            }
          ],
          "cookies": [],
          "content": {
            "size": 0,
            "mimeType": "text/plain",
            "compression": 0,
            "text": ""
          },
          "redirectURL": "",
          "headersSize": 468,
          "bodySize": 0,
          "_transferSize": 468,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:23:47.693Z",
        "time": 209.81699996627867,
        "timings": {
          "blocked": 2.1130000503212214,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.565,
          "wait": 206.46900005293637,
          "receive": 0.6699998630210757,
          "_blocked_queueing": 0.5570000503212214,
          "_blocked_proxy": 0.6889999999999998,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "369472",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 33108
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 14254
              },
              {
                "functionName": "i",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 450851
              },
              {
                "functionName": "d",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 282541
              },
              {
                "functionName": "i",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 281288
              },
              {
                "functionName": "s",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 282833
              },
              {
                "functionName": "sendEnvelope",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 275947
              },
              {
                "functionName": "sendSession",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 275429
              },
              {
                "functionName": "captureSession",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 273999
              },
              {
                "functionName": "WT",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 269159
              },
              {
                "functionName": "Yl",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 269082
              },
              {
                "functionName": "Ma",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 268989
              },
              {
                "functionName": "",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 458141
              },
              {
                "functionName": "wt",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 221600
              },
              {
                "functionName": "",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 318011
              },
              {
                "functionName": "invokeTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 7536
              },
              {
                "functionName": "runTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 2801
              },
              {
                "functionName": "invokeTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 8610
              },
              {
                "functionName": "M",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 15748
              },
              {
                "functionName": "$",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 16142
              },
              {
                "functionName": "X",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 16302
              },
              {
                "functionName": "c",
                "scriptId": "13120",
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
        "pageref": "page_90",
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
              "value": "502"
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
          "bodySize": 502,
          "postData": {
            "mimeType": "text/plain;charset=UTF-8",
            "text": "{\"sent_at\":\"2025-10-07T11:23:47.693Z\",\"sdk\":{\"name\":\"sentry.javascript.angular\",\"version\":\"9.46.0\"}}\n{\"type\":\"session\"}\n{\"sid\":\"3e8877ea501c407581f42837e2e7b626\",\"init\":false,\"started\":\"2025-10-07T11:22:22.512Z\",\"timestamp\":\"2025-10-07T11:23:47.693Z\",\"status\":\"exited\",\"errors\":0,\"attrs\":{\"release\":\"190659.904ad4e3\",\"environment\":\"live\",\"user_agent\":\"Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0\"}}"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98ad074819d37be7-HKG"
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
              "value": "Tue, 07 Oct 2025 11:23:48 GMT"
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
              "value": "a04f646f19be5d794c8261387f153305"
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
        "startedDateTime": "2025-10-07T11:23:47.695Z",
        "time": 479.388999985531,
        "timings": {
          "blocked": 14.350000017486513,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.45100000000000007,
          "wait": 463.9909999623895,
          "receive": 0.5970000056549907,
          "_blocked_queueing": 11.851000017486513,
          "_blocked_proxy": 2.089,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "370352",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 33108
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 14254
              },
              {
                "functionName": "i",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 450851
              },
              {
                "functionName": "d",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 282541
              },
              {
                "functionName": "i",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 281288
              },
              {
                "functionName": "s",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 282833
              },
              {
                "functionName": "sendEnvelope",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 275947
              },
              {
                "functionName": "sendSession",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 275429
              },
              {
                "functionName": "captureSession",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 273999
              },
              {
                "functionName": "WT",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 269159
              },
              {
                "functionName": "ka",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 269213
              },
              {
                "functionName": "",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 458165
              },
              {
                "functionName": "wt",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 221600
              },
              {
                "functionName": "",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 318011
              },
              {
                "functionName": "invokeTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 7536
              },
              {
                "functionName": "runTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 2801
              },
              {
                "functionName": "invokeTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 8610
              },
              {
                "functionName": "M",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 15748
              },
              {
                "functionName": "$",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 16142
              },
              {
                "functionName": "X",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 16302
              },
              {
                "functionName": "c",
                "scriptId": "13120",
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
        "pageref": "page_90",
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
              "value": "497"
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
          "bodySize": 497,
          "postData": {
            "mimeType": "text/plain;charset=UTF-8",
            "text": "{\"sent_at\":\"2025-10-07T11:23:47.695Z\",\"sdk\":{\"name\":\"sentry.javascript.angular\",\"version\":\"9.46.0\"}}\n{\"type\":\"session\"}\n{\"sid\":\"962490da45e54fdabeaab50013365c50\",\"init\":true,\"started\":\"2025-10-07T11:23:47.693Z\",\"timestamp\":\"2025-10-07T11:23:47.693Z\",\"status\":\"ok\",\"errors\":0,\"attrs\":{\"release\":\"190659.904ad4e3\",\"environment\":\"live\",\"user_agent\":\"Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0\"}}"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98ad07477a84bcbd-ALA"
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
              "value": "Tue, 07 Oct 2025 11:23:47 GMT"
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
              "value": "d9ac28dae7fc86237405c4435af488e5"
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
        "startedDateTime": "2025-10-07T11:23:47.696Z",
        "time": 178.63400001078844,
        "timings": {
          "blocked": 14.09700006019324,
          "dns": -1,
          "ssl": 15.088999999999999,
          "connect": 44.282000000000004,
          "send": 0.9489999999999981,
          "wait": 117.15700000160933,
          "receive": 2.1489999489858747,
          "_blocked_queueing": 12.40700006019324,
          "_blocked_proxy": 1.37,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "364527",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "loadChildren",
                "scriptId": "13139",
                "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
                "lineNumber": 0,
                "columnNumber": 129749
              },
              {
                "functionName": "l4",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 520702
              },
              {
                "functionName": "loadChildren",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 520374
              },
              {
                "functionName": "",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 516578
              },
              {
                "functionName": "h",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28199
              },
              {
                "functionName": "f",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28150
              },
              {
                "functionName": "_next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10377
              },
              {
                "functionName": "next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7439
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 22998
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9346
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9291
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "uc",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28392
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28560
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 36456
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 36523
              },
              {
                "functionName": "_next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10377
              },
              {
                "functionName": "next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7439
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 27156
              },
              {
                "functionName": "_next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10377
              },
              {
                "functionName": "next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7439
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 22998
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9346
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9291
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 27136
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 36456
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 31307
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "h",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28209
              },
              {
                "functionName": "f",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28150
              },
              {
                "functionName": "_next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10377
              },
              {
                "functionName": "next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7439
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 22998
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9346
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9291
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "uc",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28392
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28560
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 30320
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 32616
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 33190
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 31307
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 27136
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "h",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28209
              },
              {
                "functionName": "f",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28150
              },
              {
                "functionName": "_next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10377
              },
              {
                "functionName": "next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7439
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 22998
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9346
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9291
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "uc",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28392
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28560
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 31508
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 32492
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 34403
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 33190
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "uc",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28392
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28560
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 27136
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 31307
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 27136
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 27136
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10101
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9255
              },
              {
                "functionName": "Nt",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7132
              },
              {
                "functionName": "subscribe",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 9207
              },
              {
                "functionName": "h",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28209
              },
              {
                "functionName": "f",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 28150
              },
              {
                "functionName": "_next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10377
              },
              {
                "functionName": "next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7439
              },
              {
                "functionName": "w.subscribe.o",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 36544
              },
              {
                "functionName": "_next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 10377
              },
              {
                "functionName": "next",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 7439
              },
              {
                "functionName": "",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 23080
              },
              {
                "functionName": "invoke",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 6911
              },
              {
                "functionName": "onInvoke",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 73709
              },
              {
                "functionName": "invoke",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 6851
              },
              {
                "functionName": "run",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 2161
              },
              {
                "functionName": "",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 30472
              },
              {
                "functionName": "invokeTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 7536
              },
              {
                "functionName": "onInvokeTask",
                "scriptId": "13168",
                "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                "lineNumber": 0,
                "columnNumber": 73525
              },
              {
                "functionName": "invokeTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 7457
              },
              {
                "functionName": "runTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 2801
              },
              {
                "functionName": "F",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 9628
              },
              {
                "functionName": "invokeTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 8639
              },
              {
                "functionName": "D.useG.invoke",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 8510
              },
              {
                "functionName": "y.args.<computed>",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 21711
              }
            ],
            "parent": {
              "description": "setTimeout",
              "callFrames": [
                {
                  "functionName": "v",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 21742
                },
                {
                  "functionName": "scheduleTask",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 7294
                },
                {
                  "functionName": "onScheduleTask",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 4466
                },
                {
                  "functionName": "scheduleTask",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 7192
                },
                {
                  "functionName": "scheduleTask",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 3405
                },
                {
                  "functionName": "scheduleMacroTask",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 3714
                },
                {
                  "functionName": "Vt",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 11106
                },
                {
                  "functionName": "",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 22228
                },
                {
                  "functionName": "n.<computed>",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 14254
                },
                {
                  "functionName": "",
                  "scriptId": "13167",
                  "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                  "lineNumber": 0,
                  "columnNumber": 537455
                },
                {
                  "functionName": "",
                  "scriptId": "13167",
                  "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                  "lineNumber": 0,
                  "columnNumber": 531966
                },
                {
                  "functionName": "next",
                  "scriptId": "13168",
                  "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                  "lineNumber": 0,
                  "columnNumber": 8029
                },
                {
                  "functionName": "_next",
                  "scriptId": "13168",
                  "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                  "lineNumber": 0,
                  "columnNumber": 7712
                },
                {
                  "functionName": "next",
                  "scriptId": "13168",
                  "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                  "lineNumber": 0,
                  "columnNumber": 7439
                },
                {
                  "functionName": "",
                  "scriptId": "13168",
                  "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                  "lineNumber": 0,
                  "columnNumber": 12826
                },
                {
                  "functionName": "Nt",
                  "scriptId": "13168",
                  "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                  "lineNumber": 0,
                  "columnNumber": 7132
                },
                {
                  "functionName": "next",
                  "scriptId": "13168",
                  "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                  "lineNumber": 0,
                  "columnNumber": 12665
                },
                {
                  "functionName": "emit",
                  "scriptId": "13168",
                  "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                  "lineNumber": 0,
                  "columnNumber": 70538
                },
                {
                  "functionName": "",
                  "scriptId": "13167",
                  "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                  "lineNumber": 0,
                  "columnNumber": 153252
                },
                {
                  "functionName": "invokeTask",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 7536
                },
                {
                  "functionName": "onInvokeTask",
                  "scriptId": "13168",
                  "url": "https://n958200.alteg.io/chunk-CJMBEYVW.js",
                  "lineNumber": 0,
                  "columnNumber": 73525
                },
                {
                  "functionName": "invokeTask",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 7457
                },
                {
                  "functionName": "runTask",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 2801
                },
                {
                  "functionName": "invokeTask",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 8610
                },
                {
                  "functionName": "M",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 15748
                },
                {
                  "functionName": "$",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 16142
                },
                {
                  "functionName": "X",
                  "scriptId": "13138",
                  "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                  "lineNumber": 0,
                  "columnNumber": 16302
                },
                {
                  "functionName": "c",
                  "scriptId": "13120",
                  "url": "https://n958200.alteg.io/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js",
                  "lineNumber": 0,
                  "columnNumber": 9404
                }
              ]
            }
          }
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/order-confirmation.module-3EGWM6PU.js",
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
          "headersSize": 1278,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "858"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad07472d99bcab-ALA"
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
              "value": "Tue, 07 Oct 2025 11:23:47 GMT"
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
              "value": "W/\"68d3e13d-c0a\""
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
              "value": "d2a2f64c732b6823c38a85273f452341"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 3082,
            "mimeType": "application/javascript",
            "compression": 1693,
            "text": "import{a as $,b as F}from\"./chunk-RT7BPC3L.js\";import{b as T}from\"./chunk-TVYAHP6T.js\";import\"./chunk-B4YFVVDN.js\";import{a as A}from\"./chunk-ODPFCO44.js\";import{n as j}from\"./chunk-6RRCVQGA.js\";import\"./chunk-UIU24VNB.js\";import{U as D,Y as N,ga as O}from\"./chunk-W3M7SAIY.js\";import\"./chunk-KARNDABV.js\";import{Gh as c,S as v,Zc as w,fc as I,ga as S,ha as M,l as k,r as P,ya as b}from\"./chunk-FAHXWQCK.js\";import{$b as h,Ab as u,Ca as m,Gc as f,Ha as _,Hc as g,Ia as s,Rb as d,_b as l,ic as C,xa as p}from\"./chunk-CJMBEYVW.js\";import\"./chunk-H3NWS7CE.js\";import\"./chunk-V4TKYZTR.js\";import{g as t,i as y}from\"./chunk-JV5WWF5Q.js\";var R=(()=>{let e=class e{constructor(){t(this,\"store\",m(b));t(this,\"metrika\",m(T));t(this,\"appNavigationService\",m(j));t(this,\"phone$\",this.store.select(c.user.getAuthPhone));t(this,\"selectedServices$\",this.store.select(c.order.getSelectedServices));t(this,\"currentCompanyId$\",this.store.select(c.currentCompany.getCurrentCompanyId))}codeConfirmed(){return y(this,null,function*(){let r=yield w(this.selectedServices$),i=r&&r.some(q=>q.isActivity),n=this.store.selectSnapshot(c.currentCompany.getCurrentCompany),a={companyId:n.id,companyName:n.title};i?this.metrika.reachGoal(\"group_sms_code_confirmed\",a):this.metrika.reachGoal(\"phone_approved\",a),this.store.dispatch(new I)})}changePhone(){this.appNavigationService.goBack()}};t(e,\"\\u0275fac\",function(i){return new(i||e)}),t(e,\"\\u0275cmp\",_({type:e,selectors:[[\"app-order-confirmation-page\"]],decls:7,vars:13,consts:[[3,\"title\",\"titleDataLocator\",\"leadingDataLocator\",\"leading\"],[\"leading\",\"\",\"role\",\"button\",1,\"button-back\",3,\"click\",\"name\"],[1,\"verification-container\"],[3,\"changePhoneRequested\",\"codeConfirmed\",\"companyId\",\"phone\"]],template:function(i,n){i&1&&(l(0,\"ui-kit-header\",0),f(1,\"translate\"),l(2,\"ui-kit-svg-icon\",1),C(\"click\",function(){return n.changePhone()}),h()(),l(3,\"div\",2)(4,\"app-code-verification\",3),f(5,\"async\"),f(6,\"async\"),C(\"changePhoneRequested\",function(){return n.changePhone()})(\"codeConfirmed\",function(){return n.codeConfirmed()}),h()()),i&2&&(d(\"title\",g(1,7,\"header.confirmation\"))(\"titleDataLocator\",\"page_title\")(\"leadingDataLocator\",\"pointer_back\")(\"leading\",null),u(2),d(\"name\",\"back\"),u(2),d(\"companyId\",g(5,9,n.currentCompanyId$))(\"phone\",g(6,11,n.phone$)))},dependencies:[$,D,N,k,S],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;height:100%;background:var(--widget-ui-kit-color-color_white)}[_nghost-%COMP%]   .button-back[_ngcontent-%COMP%]{font-size:24px;color:var(--widget-ui-kit-color-color_text_black)}[_nghost-%COMP%]   .verification-container[_ngcontent-%COMP%]{padding:57px 16px 0}'],changeDetection:0}));let o=e;return o})();var x=[{path:\"\",component:R}],B=(()=>{let e=class e{};t(e,\"\\u0275fac\",function(i){return new(i||e)}),t(e,\"\\u0275mod\",s({type:e})),t(e,\"\\u0275inj\",p({imports:[v.forChild(x),v]}));let o=e;return o})();var ue=(()=>{let e=class e{};t(e,\"\\u0275fac\",function(i){return new(i||e)}),t(e,\"\\u0275mod\",s({type:e})),t(e,\"\\u0275inj\",p({imports:[P,B,M,F,O,A]}));let o=e;return o})();export{ue as OrderConfirmationModule};\n"
          },
          "redirectURL": "",
          "headersSize": 658,
          "bodySize": 1389,
          "_transferSize": 2047,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:23:47.700Z",
        "time": 17.965000006370246,
        "timings": {
          "blocked": 1.848999988935888,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.30900000000000005,
          "wait": 15.166000025987625,
          "receive": 0.6409999914467335,
          "_blocked_queueing": 0.8699999889358878,
          "_blocked_proxy": 0.552,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "370281",
        "_initiator": {
          "type": "other"
        },
        "_priority": "High",
        "_resourceType": "other",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://assets.alteg.io/general/0/0d/0d98cddcb3771c0_20190921123355.png",
          "httpVersion": "http/2.0",
          "headers": [
            {
              "name": ":authority",
              "value": "assets.alteg.io"
            },
            {
              "name": ":method",
              "value": "GET"
            },
            {
              "name": ":path",
              "value": "/general/0/0d/0d98cddcb3771c0_20190921123355.png"
            },
            {
              "name": ":scheme",
              "value": "https"
            },
            {
              "name": "accept",
              "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
            },
            {
              "name": "accept-encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "accept-language",
              "value": "ru"
            },
            {
              "name": "cache-control",
              "value": "no-cache"
            },
            {
              "name": "pragma",
              "value": "no-cache"
            },
            {
              "name": "priority",
              "value": "u=1, i"
            },
            {
              "name": "referer",
              "value": "https://n958200.alteg.io/"
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
              "name": "sec-fetch-dest",
              "value": "image"
            },
            {
              "name": "sec-fetch-mode",
              "value": "no-cors"
            },
            {
              "name": "sec-fetch-site",
              "value": "same-site"
            },
            {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": -1,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "http/2.0",
          "headers": [
            {
              "name": "accept-ranges",
              "value": "bytes"
            },
            {
              "name": "access-control-allow-origin",
              "value": "*"
            },
            {
              "name": "age",
              "value": "16699"
            },
            {
              "name": "cache",
              "value": "HIT"
            },
            {
              "name": "cf-cache-status",
              "value": "BYPASS"
            },
            {
              "name": "cf-ray",
              "value": "9889abb42e441091-HKG"
            },
            {
              "name": "content-length",
              "value": "160537"
            },
            {
              "name": "content-type",
              "value": "image/png"
            },
            {
              "name": "date",
              "value": "Tue, 07 Oct 2025 11:23:47 GMT"
            },
            {
              "name": "etag",
              "value": "\"98045861b20415b823b4dc57ca0ee4b7\""
            },
            {
              "name": "last-modified",
              "value": "Fri, 20 Oct 2023 09:34:48 GMT"
            },
            {
              "name": "nel",
              "value": "{\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}"
            },
            {
              "name": "report-to",
              "value": "{\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=rRdOrX2cK3gFsVtzcdjDwZR2cE0i8yosR9cDllf53HXYoQPrytoeVtJJmMVDJ%2B4vvi1eT1BH1xzIxSDYQl9G9aBgBjoa3GYTiDcNjOgUfaVu6g%3D%3D\"}]}"
            },
            {
              "name": "server",
              "value": "nginx"
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=2592000; includeSubDomains; preload"
            },
            {
              "name": "traceparent",
              "value": "00-b8c5d1269a51426c003a9fdca4038af2-40d6245b390542d8-01"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-cached-since",
              "value": "2025-10-07T06:45:28+00:00"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-id",
              "value": "kal-hw-edge-gc11"
            },
            {
              "name": "x-id-fe",
              "value": "kal-hw-edge-gc11"
            },
            {
              "name": "x-shard",
              "value": "kal-shard0-default"
            }
          ],
          "cookies": [],
          "content": {
            "size": 160537,
            "mimeType": "image/png",
            "text": "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQBJgLZ/ATFGLv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPwL/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAP8AAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEAAQEAAAD/AAAAAf8A/wABAAAAAAABAAAAAAAAAP8AAAAAAAAAAAAAAAH/AAD/Af8AAQABAAAAAAAAAP8AAAABAAD/AAAAAQAAAAAAAP//AAAAAQAAAP8AAAEBAAAAAAAA/wAAAAEAAAD///8AAAABAAEBAAD/AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAD/AAABAQAAAAAAAAAAAAD//wAAAQAAAP8BAAABAAAA/wAAAAEAAAD//wAAAQEAAP8AAAABAAAA//8AAAEBAAAAAAAAAAAAAP8AAAABAAAA/wD/AAAAAQAAAP8AAQABAP8A/wABAAEA/wAAAAEAAAD/AAAAAf8AAAAAAAAAAQAA//8AAAEBAAD//wAAAQEAAAAAAAD/AAAAAQAAAP//AAABAQAA/wAAAAEAAAD/AAAAAP8AAAAB/wAAAAEAAAAAAAEAAAAAAAAA/wAAAAEAAAD//wAAAQEAAP8AAAAB/wAA/wEAAAEAAAD/AAEAAf8AAAABAAAA/wAAAAEAAP//AAAAAAAAAQEAAAAAAAAAAAAA//8AAAEBAAD/AAAAAQAAAP//AAAAAAAAAQAAAP8BAAABAAAA/wAAAAEAAAD/AAAAAQAAAP//AAABAQAA/wAAAAD/AAABAQAAAAAAAP8AAAABAAAA/wAAAAH/AAD/AQAAAf8AAP8AAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAEBAAD//wAAAQEBAAD/AAD/AQAAAQAAAP8AAAABAAAA//8AAAEBAAD/AAAAAQAAAP//AAABAQAAAAAAAAAAAAD/AAAAAf8AAP8BAAAB/wAA/wEAAAAAAAABAAAA/wAAAAEAAAD/AAAAAQAAAAAAAAAA/wAAAAEAAP//AAABAQAA//8AAAEBAAD//wAAAAH/AAEAAQD/AAAAAQAAAP//AAAAAQAAAP8AAAABAAABAAAA/wAAAAEAAAD//wAAAAEAAAD/AAAAAQAAAP8AAAAAAAAAAQAAAP8AAAABAAAA/wAAAAEAAAD/AAABAQAABAAAAAAAAAAA//8AAAAA/wAA/wAAAAD/AAAAAAD/AQEAAP//AAAAAAAAAQEAAAAAAP8AAAAAAAEA////AAABAQAAAAEAAP8AAAAA/wAAAAEAAAD/AAABAQAA/wAAAAAAAP//AAAAAAAAAAD/AP8AAAAAAQEAAAAAAP8AAAAA//8AAAABAP8A/wAAAQAAAP8BAAAB/wD//wEAAAH/AP8AAQAA//8AAAAAAAABAAAAAAAA/wABAAD/AAD/AAAAAAEAAP//AAAAAQAA////AAAAAAD/AAEAAAAAAP//AAAAAQAAAP8AAAAB/wD//wEAAAEAAP///wAAAQAA//8AAAABAAD//wAAAAEAAP//AAAAAQAA/wD/AAAAAQAA/wAAAAAAAP///wAAAAEA/wAAAAD/AAAAAAAA/wAAAAAAAAD//wAAAAD/AP8AAQAAAf8AAAABAAAAAAD//wAAAAD/AP8AAQAAAAAAAAD/AP8AAQAAAAAA//8AAAABAAD/AAAAAAAAAP///wAAAAAA/wABAAD/AAAAAAAAAAAAAAAAAAAAAQAA//8AAAAA/wAAAAEAAAD/AP//AQAAAQAA//8AAAABAAAAAAAA//8AAAD//wD/AAAAAAABAP8A/wAAAAAA/wABAAABAAD//wAAAAAAAAAAAAD//wAAAAAAAAAA/wD/AAAAAAEBAP8AAAAA/wAA/wAAAAAAAAAAAAAA////AAAAAQAAAP8AAAAAAAAAAQAAAAAAAAAAAP8AAAAAAAAA////AAAAAQAA/wAA/wAAAAABAAD//wAAAAEAAP///wAAAAAA/wABAAAAAAD//wAAAAEAAAD/AAAAAQAA/wAAAAD//wD/AAEAAP//AAAAAAD/AAAAAAAAAP8AAQAAAQAA//8AAAAAAAAAAAAAAP8AAAAAAAD///8AAAABAP8AAAAAAP8AAP8BAP8A/wAAAAAA/wAAAAAAAAAA/wAAAAAAAAD/AAD/AAAAAAAAAP8BAQAAAP8AAP8AAAAAAAAA/wAAAAAAAAAAAAAAAAEAAAAAAAD//wAAAAAAAP8AAAAAAAD//wAABAABAAABAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8A/wEAAAEAAAAAAP8AAAAAAAABAQD/AP8AAQEAAAAA/wAAAAAAAAEAAAAAAAAAAAAAAAAAAAAA/wAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAQAAAAD/AAAAAAAAAAAAAAEAAP8AAAABAQAA/wAAAAEBAAAAAAAAAAAAAAAAAAAAAQAAAAD/AAAAAQAAAP8AAAAAAAABAAAAAAAAAAEAAAAAAAAAAP8AAAAAAAAAAQAAAP8AAAEAAP8AAAABAQAAAAAAAAABAQD/AP8AAQEAAP8AAAABAQAAAAD/AAABAQAAAP8AAAEAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AAAAAQEAAP8AAAABAQAA/wAAAAEA/wAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAP8AAAAAAAAA/wAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAEAAAD/AAAAAQAAAP8AAAD/AAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAQAAAf8AAAAAAAAA/wAAAAEAAAD/AAAAAAAAAQAAAAAAAAABAAAAAAAAAAD/AAAAAAAAAAEAAAD/AAABAAAAAAAAAAEBAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAEAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAQAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAABAAAAAAAAAAAAAAD/AAAAAQAABAAAAQAAAAAA/wAAAAAAAAABAAAA/wAAAAD/AAABAQAAAAAAAAAAAAD/AAAAAAAAAAEAAAAAAAEA/wAAAAEAAAD/AAAAAQAAAP8AAAAAAAAAAAABAAAAAAABAAAA/wAAAAAAAAAA/wAAAAEAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAQAAAP8AAAABAAAAAP8AAAABAQAAAAAAAAABAAAAAAAAAAEA/wAAAAEAAAD/AAAAAAAAAAAAAAAA/wEAAQEAAP8AAAAAAAAAAAAAAAAAAAABAAAA/wAAAAD/AAAAAQEAAf8AAAEBAAAA/wAA/wEBAAEAAAAAAAEAAAAAAAAAAQAA/wAA/wEBAAEAAAAAAAEAAAAAAP8AAAAAAAEAAP8AAAEBAAD/AAAAAAABAAD/AAAAAQAAAQAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAQAA/wAAAAEBAAAAAAAAAAAA/wAAAAAAAAAAAAAAAP8AAAEBAAD/AAAAAAAAAAD/AAABAQAA/wAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAP8AAAABAAABAAAA/wAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAQAAAP8AAAAAAAAAAAABAAAAAAABAAEA/wAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAP8AAAABAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAAAA/wAAAAEAAAAAAAABAAAA/wAAAAEAAAD/AAAAAAAAAAAAAAAA/wEAAQEAAP8AAAAAAAAAAP8BAAEBAAD/AAAAAAAAAAAAAAAAAAAAAQAAAP8AAAAA/wAAAAEBAAEAAAD/AAAAAAAAAAAAAQAAAAAAAQAAAP8AAAABAAAA/wAAAAAAAAAAAAEAAAAAAAEAAAD/AAAAAAABAAD/AAABAQAA/wAAAAAAAQAAAAAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAD//wD/AAAAAAABAAAAAAD/AP8AAAABAAEAAAD///8AAAEBAP///wAAAAEAAAH/AAD/AQAAAf8AAP8BAAAAAAABAQAA/wAAAAH/AAD/AAAAAAEAAAEA/wAA/wEAAQAAAP8A/wAAAAEAAf8AAP8AAAAAAAAAAAD/AAAAAQABAP8A/wABAAEA/wAAAAAAAAABAAAA/wAA/wEAAAH/AAD/AQAAAf8AAP8AAP8AAQAAAP8AAAABAAEAAAD/AAAA////AAEAAQD/AP8AAAABAAEAAAD/AAAAAAD/AAEAAQD//wAA/wAAAAAA/wABAAEAAAD/AAD/AQAAAf8AAP8BAAAB/wAAAAEAAP//AAAAAQD/AP8AAAABAAEAAAAAAAAA/wAAAP//AAABAAAA/wD/AAAAAQAB/wAAAAAAAAAA/wAAAAEAAAAAAAAAAAD/AP8AAQABAAAB/wAAAAEAAAD/AP//AQAAAAAAAQAAAP8A/wAAAAAAAQABAP//AAAAAAAAAQAAAP8AAAD//wAAAQAAAP8A/wAAAAEAAQAAAP8AAAABAP8AAAABAP//AAD/AAAAAQAAAP8AAAAAAAAAAQAAAP8A/wAAAAAA/wABAAEAAAAAAAAA/wD/AAEAAQD/AP8AAAABAAEA/wD/AAEAAAAAAAEAAAD/AP8AAAABAAH/AAD/AAAAAAD/AAEAAQAAAP8A/wAAAAEAAQD/AAAAAP8AAAAAAAAAAP8AAAAAAP8AAQABAAAA/wAAAAAA/wAAAAEA//8AAAAAAAABAAAA/wAAAP///wABAAEA/wD/AAAAAQABAAAA/wAAAAAA/wABAAEA//8AAP8AAAABAP8A/wABAAAA/wABAAEA/wD/AAAAAAAAAAEAAQAAAP8AAAAAAP8AAAABAP8AAAABAAAAAAAAAP8AAAD//wAAAQAAAP8A/wAAAAAAAQABAP///wABAQEA////AAAAAQAA//8AAQABAP8A/wAAAAAAAAABAAEAAAD/AP8AAAABAAAAAAAAAP8AAAAAAAAAAQAAAAAAAQEAAP///wABAAAA/wAAAAAAAAAA/wAABAEBAAAAAAAAAAAAAAAA/wAAAAAAAAD/AAAAAAABAAAAAAD/AAABAAAAAP8A/wAAAAAB/wAAAAAAAQH/AAAAAAAAAAAAAQABAAAB/wABAAAAAAAAAAAAAAAAAf8A/wAAAAEAAAAAAP8AAAAAAAEAAQAAAP8AAAAAAAAA/wAAAAAAAQD/AAAAAAAAAAAAAAD/AAAAAAAAAQAAAAAAAAABAAAAAAAAAQEAAAAA/wD/AAAAAQD/AP8AAAAAAAAAAAAAAAAA/wAAAAAAAQAAAAAA/wABAAEAAAAAAP8A/wABAAEAAAAAAP8AAAAAAf8AAAAAAAABAAABAAAAAAEAAAEAAAAAAf8AAQAAAAAAAAAAAAAAAQD/AAAAAQAAAP8AAQAAAAAAAQAAAP8AAQAAAAAAAAAAAAAAAAD/AAEAAAAAAP8AAAAAAAAAAAD/AAAAAAAAAAAAAAAAAQAAAAAAAAEB/wAAAAAAAAAAAAEAAAAAAAAAAAAAAAEA/wAAAAAAAAAAAAEAAAAAAAAAAAABAAEAAAAAAP8AAAAAAAEAAAAAAAAAAAAAAAEA/wAAAAAAAAAAAAEAAAAAAAAAAAABAAEAAAAAAAAAAAD/AP8AAAABAAEAAQAAAAAAAAABAAAAAAD/AAAAAAABAAAAAAD/AP8AAAABAAAAAAD/AAAAAAABAAEAAAAAAAAA/wAAAAEAAQD/AAAA/wABAAEA/wD/AAEAAQAAAAAAAQAAAP8AAAAAAP8AAQABAAAAAAAAAP8A/wAAAAEAAAD/AAAAAAAAAAAAAAAAAP8AAAAAAAEAAAAAAP8AAQABAAAAAAD/AP8AAQABAAAAAAD/AAAAAQAAAP8AAAAAAP8AAQABAAAA/wAAAAAAAAD/AAEAAAAAAAEAAAAAAP8A/wAAAAEAAAD/AAEAAAAAAAEAAAD/AAEAAAAAAAAAAAD/AAEAAAAAAP8AAQEAAP8A/wABAAAAAAD/AAEAAAAAAAEAAAD/AP8AAAABAAAAAAD/AAAAAAAAAAEAAAD/AAAAAAAAAP8AAAAAAAEBAAAAAAEAAQD/AP8AAAABAAAABP8AAAAAAAAAAQD/AP8AAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA/wAAAAEAAQD/AP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAQEAAAAAAAD///8AAAEAAP8A/wAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAA/wD/AAAAAAAAAP8AAAAAAAAAAAD/AP8AAAAAAAAAAAAAAAEAAAD/AP8A/wAAAAAAAAD/AAAAAAABAAEA/wD/AAAA/wAAAAAA/wAAAAAA/wAAAAAAAQABAP8A/wAAAAAAAQAAAP8A/wAA/wAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAQAA////AAABAAD/AP8AAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAD/AP8AAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAD/AAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAP8AAAAAAAAAAAAAAP8AAAAAAP8A/wAAAAAAAAAAAAAA/wD/AAAAAAD/AAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAAAAP8A/wAAAAAAAAD/AAAAAAAAAAAA/wD/AAAAAAAAAAAA/wD/AAAAAAD/AAAAAAD/AAAAAAAAAP8AAAAAAAAAAAAAAP8AAAAAAAEAAAD/AP8AAAAAAAEAAQD/AP8AAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAEAAAAAAAAAAP8AAAAAAAAAAAD//wAAAAEAAAAAAAAAAP8AAP8AAAAB/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAD/AAAABAD/AQABAQAA//8AAAAAAAAAAP8AAQABAP//AAAAAAAAAAH/AAD/AQD/AAAAAAH/AAD/AQAAAf8AAAABAP//AAABAQEA/wAAAAD/AAAAAAAAAAAAAAABAAAAAAAAAP8AAAEAAAD/AAAAAAAAAAAAAAAAAQAAAP8AAAABAAAA/wAAAAAAAAAAAAABAAAAAP8AAAABAAABAAAA////AAAAAQAAAAAAAQEAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAAAB/wAA/wAAAAEAAAH/AQD/AQAAAP8AAAAB/wAA/wAAAAEAAAD/AQAAAf8AAQABAP//AAAAAAAA/wAAAAEAAQD/AAAA/wAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA//8AAQABAP8AAAAB/wAA/wH/AAEAAQD//wAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAEAAAD/AAAAAAEAAAD/AAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAEAAAD/AAABAAAA/wAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAP8AAAABAAEA/wAAAP8AAAAAAAAAAAEAAAAAAAAA/wAAAAAAAAABAAAAAQAAAP8AAAAAAAAAAQAAAAAAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAAAAAEAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEAAAAA/wAAAQAAAAABAAAA/wEAAP8AAAEAAAAAAAAAAP8BAAAAAAAAAAAAAP8AAAAAAAABAAEAAP8AAAAAAAAAAAAAAQAAAAAAAAAAAQAAAP8AAAD/AAAAAAAAAAEAAAD/AAABAQAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAAAAAAEAAAD/AAAAAAAAAAAAAAH//wAAAAEAAQEAAAD/AAAAAAAAAP8AAAEAAAAAAKABvQkAACAASURBVAAAAAEAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAAAAAAEAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAQAAAAAAAAAB//8AAAABAAAAAQAAAAAAAQABAAAAAAAA/wAAAAAAAAEBAAAAAAAAAAAAAAD/AAABAQAAAAAAAAD/AAAA/wAAAAEAAAD/AAAAAQAAAP8AAAAAAAAAAQEAAP8AAAEAAAAAAAAAAf8AAAAAAAABAQAAAP8AAAAAAAAAAQEAAAAAAAD/AAAAAQAAAAAAAAAAAAAA/wAAAAAAAAABAAABAAAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAEAAAAA/wAAAQAAAAABAAAA/wAAAAAAAAAAAAD/AAAAAQEAAAAAAAAA/wAAAAAAAAABAAAB/wAAAP8AAAABAAAA/wAAAQEAAAD/AAAAAQAAAAAAAAD/AAAAAAAAAAEAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAABAAAA/wEAAAAAAAABAAAA/wAAAAAAAAABAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAA/wAAAAAAAAABAAAAAAAAAP8AAAABAAAA/wAAAQEAAAD/AAAAAAAAAAEAAAD/AAAAAQAAAP8AAAAAAAAAAQAAAP8AAAAAAAAAAQAAAAAAAAAAAAAA/wAAAQEAAAAAAAAA/wAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAABAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAABP8B/wAAAAAAAAABAAAA/wABAQAA/wAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAD/AAAAAP8AAQEAAP8AAAABAAAA/wAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAQAAAP8BAAAAAAEAAAEAAAAA/wAAAAAAAAEAAAAAAQAAAP8AAAABAAABAAAAAP8AAP8BAAABAAAA/wAAAAAAAAEBAAD/AP8AAQAAAP8AAAAAAAAAAAAAAAAAAAABAAEA/wEAAAEAAAD/AP8AAAABAAABAAAAAP8AAAABAAAAAAAAAQAAAQAAAP8AAAAAAAAAAAAAAAEBAAD/AAAAAP8AAAAA/wAAAAEAAAD/AAAAAQAAAQAAAAD/AAEAAQD/AP8AAQABAP8BAAABAAAA/wD/AAABAQAAAAAAAAD/AAABAAAAAAEAAAEAAAD/AAAAAP8AAAABAAAA/wAAAAEAAAEAAAAA/wAAAAEAAAH/AAAAAAAAAAAAAQABAP8BAAAAAP8AAAAAAAEAAQD/Af8AAAAAAAAAAAAAAAEAAAH/AAAAAAAAAAAAAAABAAABAAAAAP8AAAABAAEAAAD/Af8AAAAAAAAAAAAAAQAAAQABAP8AAAAAAP8A/wAAAAAAAQAAAf8AAAAAAAAAAAABAQEA/wD/AAEAAAD/AQAAAAABAAABAAAAAP8AAAABAAABAAABAAAA/wD/AAAAAAAAAAEAAAH/AAAAAAAAAAAAAAAAAAEAAQD/AQAAAQD/AP8AAAAAAQEAAAD/AAAAAAAAAAAAAQABAP8BAAABAAAA/wD/AAAAAQAAAQAAAAD/AAAAAQAAAAAAAAEAAAAA/wAAAQAAAAABAAAB/wABAAAA/wAAAAABAAAAAAEAAAH/AAAAAAAAAAAAAAEBAAAA/wABAAEA/wD/AAEAAQD/AQAAAQAAAP8A/wAAAQAAAQABAP8A/wAAAAEAAAD/AAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAQAAAP8AAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAH/AQAAAQAAAP8AAAABAQAA/wAAAQEAAAD/AAAAAAAAAAEAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAP8BAAEAAAAAAQAAAf8AAAAAAAAAAQAAAP8AAAABAAAA/wAAAAAAAAEBAAAA/wAAAAAAAAAAAQD/AAAAAQAAAAABAAAA/wEAAAEAAAD/AAAAAQEAAAAAAAAAAQAAAAAAAAABAAD/AAABAQEAAP8AAAEBAAAA/wAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAQEAAP8AAAAAAAAAAAEAAAEAAAD/AAAAAAAAAAAAAAEBAQAAAAAAAAABAAD/AAABAQEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAP8AAAAAAAABAQEAAP8AAAEAAAAAAAAAAQEBAAD/AAAAAAAAAAABAAABAAAA/wAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAD/AQAAAAAAAAABAAAAAAAAAQAAAP8AAAEBAAAA/wEAAAEAAAD/AAABAAEAAAAAAAABAAAA/wAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAEAAAEAAAD/AAAAAQEAAP8AAAABAAAA/wAAAQABAAAAAAABAQAAAP8AAAAAAAAAAAEAAAAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABAAEBAAAA/wAAAAEBAAD/AAAAAAAAAAAAAAEAAAAAAAAAAQEBAAD/AAAAAAAAAAABAAABAAAA/wAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAQEAAAD/AAAAAAAAAAABAAAAAAAAAQAAAP8AAAAAAQAAAAAAAQEBAAD/AAABAAAAAAAAAAEBAQAA/wAAAAD/AAEAAQD/AP8AAQABAAAA/wAAAAEA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wABAAEAAAD/AAAAAQD/AP8AAQABAAAAAAAAAAAABP8B/wABAAEA/wH/AAEAAQD/Af8AAAAAAAABAAAAAAAAAAAAAAABAAAAAAEAAAD/AAAAAAAAAAAAAAH/AAAAAQAAAP8AAAEAAAAAAAAAAAEAAAH/AAAAAAAAAQAAAAAAAAAAAAAAAQEAAAD/AAAAAAAAAAAA/wAAAAAAAQAAAf8AAAAAAAABAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAAEAAAAAAAAAAQAAAAAAAAD/AAAAAQEAAAAAAAAA/wAAAAAAAAEBAAAA/wAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQEAAAD/AAAAAQAAAP8AAAAAAAAAAAAAAAEAAAD/AAABAQAAAP8AAAEAAAAAAAAAAAAAAAEBAAAA/wAA/wAAAAAAAAABAQAAAP8AAAAAAAAAAAAAAQAAAAABAAAAAAAAAP8AAAABAAAAAAAAAQAAAAAAAAAB/wAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAQAAAAAAAP//AAAAAAAAAQEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAQAAAP8AAAAAAAD/AAAAAQAAAP8AAAABAQAAAP8AAAAAAAAAAAAAAAEAAAH/AAAAAAAAAQEAAAD/AAAAAAAAAAAAAAEBAAAA/wAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAEAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAA/wAAAAEBAAAAAAAAAP8AAAAAAAABAQAAAP8AAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAABAAAAAAAAAP8AAAAAAAABAQAAAP8AAAABAAAA/wAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAQAAAP8AAP8AAAAAAAAAAQEAAAAAAAAA/wAAAAEA/wD/AAAAAQAAAAAAAAD/AP8AAAAAAAAAAAAAAAAAAQAAAP8AAQABAP8A/wAAAAEAAAAAAAAAAQD/AP8AAAABAAAA/wAAAAEA/wAAAAAAAAAAAAAABAEAAQAA//8AAQEBAAAA/wABAAEA/wD/AAEAAQAAAAAAAAD/AAAAAQAAAAAAAAAAAAABAQAAAP8AAAABAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAEAAAD/AAAAAAAAAAAAAAABAAAAAAAAAP8AAAEAAAAAAAAAAQEAAAAAAAAAAAAAAAEAAAD/AAAAAQAAAP8AAAAAAAABAAAAAP8AAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAD/AAABAQAAAAAAAAAAAAAA/wAAAAAAAAABAAAAAAAAAAEAAAEAAAAA/wAAAQAAAAAAAAAAAAD/AAAAAQABAAAAAAAAAP8AAAAAAAAAAQAAAQAAAAD/AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAP8AAAABAAD/AAAAAQAAAAEAAAAAAQAAAAAAAAABAAAAAAAAAP8AAAABAAAAAAAAAAAAAAH/AAAAAAAA/wEAAAEAAAABAAAAAP8AAAEBAAAAAAAAAAEAAAD/AAABAQAAAAAAAAABAAAA/wAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAAABAAAAAAAAAAAAAAABAAAA/wAAAAAAAAABAAAAAAAAAP8AAAD/AAAAAAAAAAEAAAD/AAAAAQAA/wAAAAEAAAAA/wAAAQAAAAD/AAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAA/wAAAQEAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAEAAAD/AAAA/wAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAEAAAEAAAAA/wAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAABAAAA/wAAAAEAAAD/AAAAAAAAAAAAAAAAAAEAAAAAAP8AAAABAAAA/wAAAAEAAAD/AAAAAQAAAAAAAAD/AAAAAQAAAP8ABAD/AAAAAQEAAAAAAAAAAQAA/wAAAQEBAAD/AAAAAQAAAAABAAD/AAAAAAAAAAEBAAD/AAAAAAEAAAAAAAAAAQAAAAAAAAEAAAAAAAAA/wAAAAEBAAD/AAAAAAAAAAABAAABAAAAAAAAAP8AAAABAQAA/wAAAAABAAABAAAA/wEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAA/wAAAAABAAAAAAAAAQEAAAAAAAD/AAAAAAAAAAAAAAAAAQAAAQAAAAAAAAD/AAAAAAAAAAEBAAD/AAAAAAAAAAAAAAABAQAA/wAAAAEAAAAAAAAAAAAAAP8AAAABAQAA/wAAAAEBAAD/AAAAAAAAAAAAAAAAAAAAAQEA////AAEAAQAAAQAA//8BAAEAAAAAAAAAAAAAAAABAAAAAAAAAP8AAAABAAAAAAEAAP8AAAABAQAA/wAAAAEBAAD/AAAAAAAAAAAAAAABAQAAAAAAAAEAAAD/AAAAAAEAAAAAAAABAAAA/wAAAAABAAAAAAAAAAAAAAAAAAABAAAAAAEAAP8AAAAAAAAAAAAAAAEBAAAAAAAAAAAAAP8AAAAAAAAAAAEAAAAAAAAAAAAAAQAAAP8BAAAAAAAAAAAAAAEAAAAAAQAAAAAAAP8AAAAAAQAAAQAAAAAAAAD/AAAAAQEAAP8AAAAAAAAAAAAAAAEAAAAAAQAAAAAAAP8AAAAAAAAAAQEAAAAAAAAAAAAA/wAAAAABAAABAAAAAAAAAP8AAAABAQAA/wAAAAAAAAAAAAAAAAEAAAEAAAAAAAAA/wAAAAAAAAABAQAA/wAAAAAAAAABAAAA/wEAAAAAAAAAAAAAAAAAAAEBAAD/AAAAAAAAAAAAAP8AAAABAAAAAAEAAAD/AAAAAAAAAAEBAP///wABAAEAAAEAAP//AQABAAAAAAAAAAABAQAAAAAAAAABAAD/AAAAAAEAAAAAAAAAAQAAAQAAAAABAAD/AAAAAAEAAAEAAAD/AQAAAAAAAAEAAAD/AQAAAAAAAAABAAAAAAAAAAAAAAEBAAD/AAAAAAEABAABAAAAAAAAAAAAAAAAAAAAAf8AAAABAAAB/wAAAAEAAAD/AAABAQAAAAAAAAD/AAABAQAAAP8AAAABAAAAAAAAAP8AAAABAAAA/wAAAQEAAAAAAAABAAAAAAAAAAD/AAAAAQAAAP8AAAEBAAAA/wAAAQAAAAABAAAAAAAAAf8AAAABAAAA/wAAAAAAAAABAAAA/wAAAAEAAAD/AAAAAQAAAAAAAAD/AAAAAQAAAP8AAAAAAAABAAAAAAEAAAAAAAAA/wAAAAAAAAAAAAABAQD/AP8AAAAAAAEBAAAAAAEAAAAAAAAA/wAAAQEAAAD/AAABAQAAAP8AAAEBAP8A/wABAAAAAAAAAAABAQABAAAAAAAAAAAAAAAAAP8AAQEBAAAAAAAAAP8AAQEAAP8AAAAAAAAAAQABAAAAAAAAAP8AAAEBAAAA/wAAAAAAAAEBAAAA/wAAAQEA/wD/AAEBAQAAAP8AAAAAAAAAAQAAAP8AAAAAAAABAQAAAP8AAAAAAAAAAQAAAf8AAP8AAAABAAAAAAAAAAABAAAAAAAAAAAAAAH/AAAAAQAAAP8AAAAAAAD/AAAAAQEAAAD/AAAAAQAAAP8AAAAAAAAAAQAAAAAAAAH/AAAAAAAAAAEAAAD/AAAAAAAA/wAAAAEBAAAA/wAAAAEAAAD/AAABAQAAAP8AAAEBAAD//wD/AQAAAAAAAAEAAQAAAP8AAAEBAAAA/wAAAAAAAAAAAAAAAAAAAQEAAAAAAAAA/wD/AQAAAAAAAAEAAAAAAQAAAAABAAAAAAAAAP8AAAAAAAAAAAAAAQEA/wD/AAAAAAABAQAAAAABAAAAAAAAAf8AAAAAAAAAAQAAAP8AAAAAAAABAAAAAAAAAAABAAH/AAAAAf8AAAAAAAABAQAAAAAAAAD/AAEBAQAAAAAAAAD/AAEBAAAAAAAAAAABAAAAAAAAAAAAAAD/AAABAQAAAP8AAAABAAAA/wAA/wAAAAEAAAABAQAAAP8AAAABAAAB/wAAAAEAAAAAAAABAAAAAP8AAAABAAAA/wAAAAEAAAD/AAABAQAAAP8ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAP8AAAABAAAA/wAAAAH/AAAAAQAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAABAAAAAAABAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAD/AAEAAQAAAAAAAAAAAQEAAAD/AAD/AAAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAP8AAP8AAAABAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAEAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAABAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAA/wAAAQEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAABAQABAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAEAAAD/AAAAAQAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAQAAAAAAAQAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAABAD//wAAAQAAAAABAAD//wAAAQAAAAD/AAD/AAAAAQAAAAAAAAD/AAAAAQAA/wAAAAH/AAABAQAAAAD/AAAAAQAAAP8AAP8AAAAAAAAAAf8AAAAAAAD/AAAAAQAAAP8AAAAAAAAAAAAAAAEAAAD/AAABAAAAAAAAAAABAQAAAAAAAAD/AAD/AAAAAQAAAP8BAAABAAAA/wAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAEAAAD/AAAAAQAAAAD/AAAAAQAA/wAAAAD/AAAAAAAAAAAAAAEBAP8A/wAB/wEA/wH/AAH/AQAAAf8AAP8BAAABAAAA/wAA/wEAAAEAAAD/AAAAAf//AAAAAAAAAQAAAP8AAAABAAAA/wAAAAD/AAAAAAAAAQEAAP//AAAAAAAAAQAAAAABAAD//wD/AQAAAQAAAP8AAAAB/wAAAQEAAAAA/wAA/wAA/wAAAAEAAAAAAP8AAAEBAAAA/wAA/wAAAAAAAAAAAAAAAQAAAP8AAAABAAAAAP8AAAABAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAP//AAAAAAAAAQAAAP8AAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAAABAAAAAP8AAAAAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAAAAAABAAAAAAEAAP//AAAAAAAAAP8AAAEAAAD/AAAAAP8AAAEAAAD//wD/AAAAAQAAAAAAAAAAAQAAAAAAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAEAAAAA/wAAAAEAAP8AAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAP8AAP8AAAABAAAA/wAAAAEAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAEAAAD/AAAAAQAAAP8AAAAA/wAAAQAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAQAAAP8AAAAAAAD/AAAAAQAAAAD/AAAAAAAA/wAAAAEBAAAA/wAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAQAAAAEABP8BAQABAAAAAAAAAAABAQAAAAAA/wAAAAEBAAAAAAAAAAAAAAAB/wAAAAEAAAD/AAABAAD/AAEAAQAAAAD/AAAAAQAAAAEBAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAB/wAAAAEAAAEAAAEAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAA/wH/AAEAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAEAAQAAAQAAAAABAAABAAAAAAAAAAEBAP8A/wABAAEAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAA/wD/AAEBAQAAAP8AAAEAAAAAAQAAAQAA/wABAAEAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAQD/Af8AAQABAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAA/wH/AAEAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAD///8AAQEBAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAP8B/wABAAEAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAD/Af8AAQABAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAEAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAP8AAAAAAAABAAAAAAEA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAD/AAAAAAAAAAEAAAAAAAEAAQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAA3EHz6wAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAA/wAAAAEAAP//AAABAAAA/wAAAAEAAAAAAAAAAAAAAP8AAAABAAAAAAEAAAD/AAAAAQEAAAAAAP//AAABAQAAAQAAAAD/AAD/AAAAAQAAAAEAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAD/AQAAAf8BAP8AAAABAAAAAAEAAP//AQABAAAAAAAAAAABAAAA/wAAAQEAAAD/AAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAQAAAP8AAAAA/wAAAAEAAAAAAAAAAAABAQEAAP8AAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AP8AAQABAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAP//AAABAAAAAAAAAP8AAAABAQAAAP8AAAAAAAAAAAAA/wAAAAEAAAABAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAD/AAAAAQAAAAABAAD//wAAAQAAAAAAAAD/AAAAAQAAAP8AAAABAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAABAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAEAAP//AAABAAAAAAAAAAAAAAABAAAAAAAAAP8AAAABAAAAAAAAAP8AAAABAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAAAAQAAAP8AAP8AAAABAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAP8AAAABAAAABAAAAAAAAf8AAAABAAABAAAAAAAAAAAAAAD/AAAAAQAA/wAAAAEAAAD//wAAAAD/AAABAQAAAP8A/wABAAEBAAAAAAAA/wAAAAEAAAABAQAAAAAAAAAAAAAA/wAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAEBAQAA//8AAAABAAEBAAAAAAAAAP8AAAAAAAAAAAAA/wD/AAEAAQAAAQAAAAD/AAAAAQAAAP8AAAABAAAAAAAA/wAAAAH/AAEAAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAD/AAAAAAAAAAD/AAEBAQAAAAAAAAAAAAD/AAD/AP8AAQABAAAA/wAAAAEAAAEAAAAAAAAAAAAAAP//AAABAQABAAAAAAAAAAD//wAAAQEAAAAAAAD/AAABAQEAAAAAAAAAAAABAAAAAAAAAAD/AAAAAQAAAP8AAAEBAAAA/wAAAAD/AAEAAQAAAQAA////AAEBAQAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAAA/wAAAQEAAAAAAAAA/wAAAQEAAAAAAAAAAAAAAf8AAAABAAAAAAAAAAAAAAD/AAABAQAA////AAEBAQABAAAAAP8AAP///wABAQEAAAAAAAAAAAAB/wAAAAEAAAEAAAAA/wAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAQAAAQAAAAAAAAAAAAAAAQAAAP///wABAQEAAQAAAAD/AAD/AP8AAQEBAAAAAAAAAAAAAf//AAABAQAAAAAAAP8AAAAB/wABAAEAAAAAAAAAAAABAAAAAAAAAAAAAAAA/wAAAAAAAAEBAAAAAAAAAP8AAAABAAAAAAAAAAAAAAEAAAAAAAAA////AAEAAQAAAQAAAP8AAAEA/wAAAQEAAQAAAAAAAAAA//8AAAEBAAAAAAD/AAAAAQAAAP///wABAQEAAQAAAAAAAAD///8AAQEBAAEAAAAAAAAA////AAEBAQAAAAAAAAAAAP///wABAQEAAAAAAAAAAAD///8AAQEBAAEAAAAAAAAA////AAEBAQAAAAAABP8A/wABAAAAAAD/AAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAP8AAAABAQAAAAAAAP///wAAAQAAAQD/AAAAAAAAAAAAAQAAAAABAAAAAAAA/wAAAAEAAAD/AQAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAEAAAAA/wAAAQAAAAD/AAAAAAD/AAAAAQEBAAEA/wD/AAAAAAAAAP8B/wABAAAAAAAAAP8A/wAAAAAAAAD/AP8AAAABAQAA/wAAAAEA/wAAAAAAAAAAAAAAAAAAAAAAAAABAP8B/wABAAAA/wEAAAAA/wABAAEAAAD/AAABAAABAAAAAAD/AAEAAAD/Af8AAAAAAAAA/wABAAAAAAEAAAAA/wD/AAAAAQAAAP8BAAABAP8AAAAAAAABAAAAAAAAAAAAAAAAAAD/AAAAAQAAAP8BAAAAAAAAAAH/AAAAAAAAAf8AAQAAAP8B/wAAAAAAAQEAAAAA/wAAAAAAAAEAAAAAAAAAAAEA/wD/AAEAAAD/AQAAAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAA/wEAAAEAAAD/AAAAAQAAAAABAAAAAAAAAQEAAAAA/wAAAAAA/wEAAAEAAAAAAP8AAAAAAAAAAAAAAQAAAAABAP8A/wABAQAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8BAAABAAAA/wAAAAEAAAAAAAAAAAAAAAEBAAAAAP8AAAAAAP8BAAABAAAAAAD/AAAAAAAAAAAAAAEAAAAA/wD/AAAAAQEAAP8AAAABAP8AAAAAAAAAAAAAAAAAAAAAAAAAAQD/Af8AAQAAAP8AAAABAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQEAAAAA/wAAAAAAAAEAAAAAAAAAAP8A/wAAAAEAAAD/AQAAAQD/AAAAAAABAAAAAAABAAEBAAAAAP8A/wAAAAEAAAAAAQAAAAD/AAAAAAAAAAAAAQEAAAAAAAAAAP8AAAAAAAEBAAAAAAAAAAD/AAAAAQABAQAAAAD/AP8AAAABAAAAAAEAAAAA/wAAAAAABAD/AAAAAQEAAAAAAP8AAAABAP8AAAABAAAAAAAAAAAAAAD/AAD/AAAAAAEA/wH/AAEAAQD/AP8AAAABAAAAAAAAAAAAAAAAAAAA/wAAAAEAAP8AAP8BAAAB/wAAAAEAAAAAAAAAAAAAAAD/AAAAAQD/AAAAAf8AAAABAAAAAAAAAP8AAAABAAAB//8AAAAAAP8BAAABAAEA/wD/AAH/AQAAAQAAAAD/AAEAAQD/AP8AAAABAAEAAAAAAAAAAf//AAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAA//8AAAABAAAB/wAA/wAAAAEAAAD/AQD/Af8AAQABAP8A/wAB/wEA/wH/AAD/AQD/Af8AAAABAAEAAAABAAAAAAAAAAH//wAAAQEAAAAAAAAAAAAAAP8AAAABAAAAAAABAAAAAP//AAAAAQAAAf8AAP8BAP8B/wAB/wEA/wH/AAEAAQAAAAAAAP8AAAABAAAAAAAAAAAAAAAA/wAAAAAAAQABAAAAAAAB/wAAAAEAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAQAAAAD/AAABAQAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAP8AAQABAAD/AAAAAQAAAAAAAAAAAAAAAP8AAAAAAAEAAQAAAAAAAf8AAAABAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAEAAAAA//8AAQEBAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAD/AAEAAQAA//8AAAEBAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAH//wAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAP//AAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wABAAEAAP//AAABAQAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAB//8AAAEBAAAAAAAAAAAA/wAAAAAAAQABAAAAAf8AAP8BAAABAAAA/wAAAAEAAAD/AAAAAAAAAAEAAAAAAAAA/wABAAEAAAD/AAAAAQABAP8AAAAAAAEAAQAAAAH/AAD/AQAAAQAAAP8AAAABAAAABAEAAQAA/wAAAAEAAAH/AAD/AAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAP8AAAAAAAAB/wEA/wAAAAEAAAAAAAAA/wEAAAH/AQAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAABAAAAAAABAQAAAAAAAAD/AAAAAAAAAAAAAAD/AAD/AAEAAQAAAAD/AAAAAAAAAf8AAAAAAAAA/wAAAAABAAAAAAABAAEA/wD/AAEAAQAAAAAAAAABAAD/AAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAEAAQAAAP//AQAAAAAAAAABAAAAAAAA/wAAAAAAAAD/AQAAAAAAAf8BAAAAAAAA/wAAAAAAAP8AAAABAAAAAAAAAAAAAQAA/wAAAAAAAAAAAAAAAAEAAAAAAP8AAAABAAAAAAABAAEAAAAA/wEAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAQD/AAAAAQAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAABAAAAAAD/AP8AAQABAAAAAAAA/wAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAEA/wAAAAEAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAQAAAAAA/wAAAAEAAAAAAAEAAP8AAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAEAAP8AAAAAAAAAAAAAAAAAAP8A/wABAAEAAAAAAAAAAQAA/wAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAABAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAD/AAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAEAAP8AAAAAAAAAAAAAAQAAAAAAAAD/AAAAAQAAAAH/AAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAA/wAAAAEBAAAB/wAAAAEAAAH/AAAAAAAABAABAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAA/wAAAAH/AAD/AQAAAQAAAQAAAAD/AAD/Af8AAQABAAD/AAAAAf8AAP8BAAAB/wAAAAEAAAAAAAEA/wAAAQEAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAD/AAAAAQAAAQAAAAAAAAD/AAABAf8AAP8BAAABAAAA/wAAAAEAAAD/AAAAAQAAAP//AAABAQD/AAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA/wAAAQEAAQAAAAAAAAAA//8AAAABAAEB/wAA/wEAAAD/AAAAAQABAQAAAP8AAAAB/wAA/wEAAAH/AAD/AQAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAP//AAAAAQAAAf8AAP8BAAEAAAAAAAAAAAEAAAD/AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAD/AAAAAQAB/wEAAAEAAAD//wAAAQEAAAAAAAAAAAAA/wAAAAEAAAD/AAAAAf8AAAABAAAAAAAAAAAAAAAAAAAAAAAA//8AAQABAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD/AAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP8AAAEBAAEAAAAAAAAAAP//AAABAQAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8A/wABAAEAAAABAAAAAAD/AP//AQABAQAAAAAAAAAA/wD/AAEAAQAAAAAAAAAAAP8A//8BAAEBAAAAAAAAAAAAAP8AAAABAAAAAQD/AAAAAQD/AAAAAQAAAAABAAAAAAAABAAA/wAAAAAAAAABAP8A/wABAAAAAAAAAAAAAAAAAQEAAAAAAAEB/wD/AAAAAAAAAAEBAAAAAAAAAAD/AAABAQAAAAAAAQEAAAAAAAAAAP8AAQAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAEAAAAAAAD/AAEAAQEAAAAAAAAAAP8AAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAP8AAAEAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAEAAAAAAAAAAP8AAAAAAAAAAQAAAQAAAAD/AAAAAAAAAf8AAQAAAAAB/wAAAAAAAAEAAAAAAAAAAf8AAAAAAAAB/wABAAAAAAD/AAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAA/wAAAAAAAAH/AAAAAAAAAf8AAAAAAAAB/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAA/wAAAQAAAAABAAABAAAAAP8AAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAD/AAAAAAAAAAEAAAD/AAAAAAAAAQAAAAD/AAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAAAAAEAAAAAAAAAAAAAAAAAAAD/AQAAAf8AAAAAAAAAAAAAAQAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAEAAAD/AAABAAAAAAAAAAD/AAAAAAAAAAEAAAEAAAAA/wAAAAAAAAAAAAABAAAAAAAAAP8BAAAB/wAAAAAAAAAAAAAAAQAAAP8A/wAAAAEBAAAAAP8AAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAQAAAAAA/wAAAAAAAAAAAAEB/wAAAAAAAAABAAAAAAABAP8AAAAAAAAAAAAAAAAAAQH/AAAAAAAAAAAAAAAAAAEAAQAAAP8AAAAAAAAA/wABAQAAAAAAAAAAAAAAAAAABP8AAQAAAAAAAAAAAAEAAQAAAAAA/wAAAAAAAAABAAAAAAABAP//AAAAAQAAAAD/AP//AAAAAQAAAAABAP8AAAAAAAEAAAAAAAAAAQABAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8BAAABAAAAAAEAAAAAAAD/AAAAAQAAAf8AAAABAQD//wAAAAEBAAD/AAAAAQEAAP8AAAABAAAAAAAA/wAAAAD/AAAAAAAAAAEAAAAAAAAA/wEAAAAAAAABAAAAAAAAAP8AAAAAAAAAAQEAAQAAAP8AAAABAAAA/wAAAAD/AAAAAQAAAP8AAAABAQAA/wAA/wEAAAH/AAD/AQAAAQAAAP8AAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8A/wAA/wEAAAH/AP8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAABAAAAAAAAAP8BAAAAAAAAAQAAAAAAAAD/AAAAAAAAAAEBAAEAAAAAAAAA/wAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAP8AAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAQAA/wAAAAEAAAD/AAAAAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAD//wABAQEA/wAAAP//AAAAAP8AAAABAAAA/wD/AAAAAAAAAAAAAQAA/wAAAAAAAAEAAAD//wAAAAAAAAEAAAD/AAAAAAAAAAAA/wD/AAEAAAAAAAEBAAAA//8A/wABAAAAAAAAAAAAAAD/AAAAAQAAAQAAAAAAAAAAAAAA//8AAAABAAAA/wAB/wEAAAAAAAD//wABAAEA/wD/AAEAAQAA/wAAAAD/AAD/AQD/AP8AAAABAAAAAAAAAAAAAf//AP8AAQABAAAA/wAAAAH//wD/AAEAAAAAAAAAAAAB/wAA/wD/AAABAAAA/wEAAAD/AAEAAQD/AP8AAQABAP///wAAAAEAAP//AAAAAQAAAP8A//8AAAAAAQAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAABAAAA/wAAAAEAAAD/AAAAAQAAAP8A/wAAAQAAAP8BAAABAAABAAAA//8AAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAEA/wAAAAEA/wAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAEAAAD/AAAAAQAAAAAAAAAAAP8AAAABAAAAAAAAAP8AAAABAAAA/wAAAAEAAP8AAAAAAAAAAP8AAAABAAAAAAAAAAAAAQD/AP8AAQAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAABAAAA/wAAAAEAAAD/AAAAAQAAAP8AAAABAAAA/wH/AAD/AQAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAH//wD/AAEAAQAAAP8AAAAB//8A/wABAAAAAAAAAAAAAf8AAP8AAAAAAAAAAAAAAAAA/wAAAAEAAQAAAP8B/wAA/wEAAQAAAP8AAAABAAAA/wAAAAEA/wD/AAEAAAAAAAAAAAAAAP8AAAABAAAAAAAAAP8AAAABAAD//wAAAAAAAAAAAAEAAQD///8AAQABAP8A/wABAQEA////AAAAAQAAAP8AAAAAAAAAAAABAQEA////AAEBAQD///8AAQABAP8A/wAAAAAAAAAAAAAAAAAAAAAABAABAQAAAAAAAQAAAP8BAAAAAAEAAAAAAAAAAQABAAAAAAAAAP8AAAAA/wAAAAEBAP//AAAAAQEA/wAAAAEAAAAAAAAAAQAAAP8AAQAAAAAAAAAAAP8AAAAAAQEAAP8AAAABAAAA/wAAAAEBAAEAAAD/AAAAAAEAAAAAAAAAAQEAAAAAAAAAAQAAAAAA//8AAAABAQAAAAAAAAABAP8AAAAAAQAAAAABAAAAAAAAAAEAAQAAAP8AAAAAAAAA/wABAAEAAAD/AAAAAAAAAP8AAQAAAAAAAAAAAAAAAAD/AAAAAP8BAAAAAAAAAQAAAAABAP//AAAAAAEA/wAAAAABAQD//wAAAAEBAP//AAAAAAEAAAEAAAEAAAD/AAAAAAAAAAAAAQAA/wAAAAAAAAABAAD/AAAAAAAAAAAAAAABAAAA/wAAAAEAAQD/AAAAAAAAAAAAAQD/AAAAAAEBAAD/AAABAQAA/wABAAAAAAAAAAAAAAAAAP8AAQAAAAAAAAAAAAAAAAAAAAEAAQAAAP8AAAAAAAAAAAABAAAAAAAAAAAAAQAAAP8AAAABAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAA/wEAAAEAAAAAAQAAAAAAAAAAAAAAAAABAAEAAAAAAP8AAAAB/wAA/wEBAAD/AAAAAQAAAP8AAAABAQABAAAA/wAAAAAAAAD/AAAAAAAAAP8AAAAAAAAA/wCZws21AAAgAElEQVQAAAAAAAD/AAAAAAABAAABAAAAAAEAAAAAAAAAAAAAAAAAAAABAAEAAAD/AAAAAAAAAP8AAQABAAAA/wAAAAAAAAD/AAEAAAAAAAAAAAAAAAAA/wAAAAEAAAD/AAAAAAAAAAAAAQAAAAAA/wAAAAD/AQAAAQAA/wAAAAAAAAD/AAAAAAAAAP8AAQABAAAA/wAAAAAAAAAAAAEAAP8AAAAAAAAAAQEAAAAAAAAAAQABAAAA/wAAAP8BAAAA/wEA/wEAAAD/AQD/AAAAAAEBAAAAAAAAAAEAAAAAAAEAAAD/AAAAAAABAP8AAAAAAQEA/wAAAAAAAQAAAAAAAQAAAP8AAAAA/wAABAD//wAAAQEA/wAAAAD//wAAAAAAAAABAAAA/wD/AAEAAAD/AAAAAAAAAAEAAAD/AAEAAQD/AP8AAP8AAAAAAQAAAAAA/wAAAAEAAAAAAAAA/wD/AAAAAQAAAP8AAQEBAP//AAABAAAAAP8AAAAAAAAAAQAAAP//AAAAAQAAAP8AAAABAAAA/wD/AAAAAQABAP8A/wD//wEAAAH/AAEAAQAA/wAAAAD/AAAAAQD/Af8A//8BAAAAAAABAQAA////AAAAAQABAAAAAAAAAP8A/wABAQEA////AAAAAQAAAAAAAAAAAAD//wD/AAEAAAD/AAAAAQAAAP8AAAABAAAA/wABAAEA////AAEAAQD///8AAAABAP8AAAABAAAAAAAAAP8A/wABAAEA/wAAAAD/AAAAAQAAAP//AP8AAQABAAAAAAD/AP8AAQAAAf8AAAABAAAA/wAAAAEAAAD/AAAAAQD//wAAAAAAAAEBAAD//wAAAQAAAAAAAAAAAAAA/wAAAAEBAAD///8A/wABAAAAAAAAAAAAAAD/AAEAAQD/AAAAAAAAAAEAAAAAAAAA/wAAAAEAAAD/AP8AAAABAAAAAAAAAAAAAP8AAAAAAAABAP8A/wABAAEAAAD/AP8AAAABAAAAAAD/AAAAAP//AAEBAQD//wAAAQAAAAD/AAAAAAAAAAAAAAEAAAD/AP8AAAABAAAAAAAAAAAAAAD/AAEAAQD/AP8AAAABAAEAAAAAAP8AAAABAP8AAAAAAAAAAAAAAP8AAAAAAAAAAQEAAP///wAAAAEAAQAAAAAAAAD/AP8AAQEBAP///wAAAAEAAAAAAP8AAAAAAAAAAQEAAP///wABAAAA/wABAAAAAAAB//8A/wABAAAAAAAAAAAAAQAAAP8A/wD/AAEAAQAAAAAAAAD/AP8AAQABAP8AAAAA/wAAAAAAAAAA/wD/AAAAAAABAAAAAAAAAP8AAP8BAAAAAAAA//8AAAAAAAAAAQAAAAAAAAAAAP8A/wAAAAAAAAAAAAD/AQAAAP8AAAABAAAAAAAAAAAA/wD/AAAAAQAAAAAABAABAQAAAAAAAAAAAAABAQAAAAAAAQAAAP8AAQABAAAA/wABAAAAAAAAAAAAAAABAP8AAAAAAAEAAQEAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAABAAEAAAD/AAEAAAAAAAABAAAAAAAA/wAAAAAAAAAAAAAAAAEBAAAAAAAA/wEAAAEAAAAAAQAA/wAAAAEAAAAAAAABAAAA/wABAAABAAAAAAAA/wABAAAAAAAAAAEAAQEAAP8AAAAA/wAAAAEBAAAAAAD/AAAAAP8AAAABAQD/AAAAAAEBAAD/AAAAAQAAAP8AAAABAQABAAAA/wAAAAD/AAAAAAEAAQEAAP8AAQAAAQAAAAABAAAAAAAAAAEAAP8AAAABAAD/AAAAAQAAAAAAAQD/AAAAAAAAAAH/AAD/AAAAAAEBAAAAAAD//wAAAAEBAAAAAAAAAAEA/wAAAAAAAQABAAAA/wAAAAAAAAAAAAAAAAEAAP8AAAAAAQAA//8AAAABAAABAAAAAAAAAAD/AAAAAQEAAQAAAP8AAAAA/wAAAAEBAP8AAAAAAAAA//8AAAABAAABAAAAAAAAAP8AAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAD//wAAAQEAAAAAAP8AAAAAAAEAAAAAAAAAAAABAAAA/wABAAAAAAAAAQAAAAAAAP8AAAAAAAAAAAAAAP8AAAAAAAEAAAAAAAAAAAABAAAAAAABAAAAAAAAAAEAAP8AAAABAAD/AAEAAAAAAAD/AAAAAQAAAAAAAAEAAAD/AAAAAP8AAAABAQAAAAAA/wAAAAD/AAAAAQEA/wAAAAABAQAA/wAAAAEAAAAAAAAAAAAA//8AAAABAQD/AAAAAQAAAP8AAAD//wEAAAEAAAEAAAD/AAAAAP8AAAABAQAAAAAA/wAAAAEAAAAAAAEA/wAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABAAEA/wAAAAAAAAAA/wAAAAEAAAAAAQAA/wAAAAAAAAABAAAAAAEAAAAAAAD/AAAAAQAAAAABAAAAAAAAAAAABAD//wD/AQEAAf8AAP8A/wAAAAAA/wEBAAD//wAAAQEAAAAAAAD/AAAAAAAAAAH/AAAAAQAAAP8AAP8BAAAAAAAAAP8AAAABAAAA/wD/AAEAAAH/AP//AAABAQEAAP8AAAAAAAD/AAAAAAD/AAEAAQD/AAAAAAD/AAAAAQAAAP8AAP8BAAEAAAAAAQAAAP8AAAAAAAAAAAAAAAD/AP//AQAAAAAAAAD/AAAAAAAAAAAA/wABAAAAAAD/AAAAAP//AP8AAAAAAAEAAQAAAP///wAAAAAAAAAAAAAAAQAAAAAAAQAAAP///wD/AAEAAAEAAAAAAAAAAP8AAP8BAAAA/wD/AAAAAAEAAAD/AQAAAP8AAAABAAH/AAD/AAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAA//8AAQABAP8AAAAAAAAAAP//AAEAAQD/AP8AAQABAP8A/wD/AAEAAAAAAAEAAAAAAAAA////AAEAAQD/AP8AAAABAAD//wAAAAEAAQAAAAAAAAAA//8A/wAAAAAAAQABAAAA////AAEAAQD/AP8AAQABAAAAAAD//wAAAAAAAAAA/wAAAAAAAQABAP8AAAAAAP8AAQABAP8AAAAA/wAAAAAAAAAAAAAAAP8AAAABAAAAAAD/AAAAAQEAAAD/AAAAAAAA/wAAAAAA/wABAAEA/wAAAAAAAAAAAP8AAQABAP8AAAD/AP8AAAAAAAAAAAAAAAEAAAD/AP//AQAAAP8AAQABAP8AAAAB/wAA/wD/AP8AAQAAAAAA/wAAAAD//wD/AAAAAAABAAEAAAD///8AAAAAAAAAAAAAAAEAAAAAAAH/AAD/AAAAAQAAAP///wAAAAEA/wAAAAAA/wABAAEA////AP8AAQAAAP8A/wABAAD//wABAAEA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAP8AAAABAAAA/wAAAAAAAAAAAAEBAQD///8AAAABAAAAAAD/AP8AAAABAAAA/wAAAAAAAP8BAAAAAAAAAP8AAAAAAAEAAQD///8AAAAAAAAAAQAB/wAA/wD/AAAAAQAAAP8ABAABAAAAAAAA/wEAAAAAAQAAAP8AAAAAAAABAAAAAAAAAAD/AAABAAAAAAAAAAAAAAABAAAAAAAA/wH/AAAAAQAAAAAAAAD/AAAAAAAAAP8AAAAAAAABAAD/AP8AAQEBAAAA/wAAAAAAAAAAAP8AAAAAAP8AAAAAAAAAAAAAAAAAAAAAAP8A/wAAAAAAAQEBAAAAAAD/AAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAAAAAAAQAAAP8A/wAA/wAAAAEAAAAAAQAAAP8A//8AAAABAAAAAAEAAAAAAAAAAAAAAP8AAAEBAAAAAAAAAAAAAAAAAAABAAAAAAAA/wAAAAABAAAAAAEAAAD/AP8BAAAAAAAAAAD/AP8AAQAAAAAAAAD/AAAAAAAAAAEAAAAAAAD//wAAAQAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAA////AAAAAAAAAQAAAAAAAP8BAAAAAAAAAAAAAP8A/wAAAAAAAAAAAAAAAAD/AAAAAAAAAAAA/wAAAAAAAAAAAAAAAAD///8AAAEAAP8AAAAAAAAAAAAAAP8A/wAAAQAAAAABAAEAAAD/AAAA/wD/AAAAAAAAAAAA/wAAAAAAAAD/AP8AAAAAAAAAAQAAAAAAAAAAAAAA/wAA/wAA/wAAAAEBAQAAAP8AAAAAAAAAAAD/AAAAAAD/AAAAAQAAAAAA/wD/AAAAAQAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAAA/wD/AAAAAAAAAAEAAAAAAAEAAAD/AP8AAP8AAAABAAAAAAEAAAD/AP//AAAAAQAAAAABAAAAAAAAAAAAAAD/AP8BAQAAAAAA/wD/AAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAD/AAAAAAAAAAAA/wAAAAAAAAABAAAAAAAAAAAAAAD/AAAAAAAAAAEAAAD/AP8AAAAAAQEAAAAAAAAA/wAAAAEAAAD/AAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAP///wAAAQAAAAABAAAA/wD/AAAAAAAAAAAA/wAAAAAABAH/AQAAAAAAAAEAAAD/AAAAAAEAAAAAAAAAAQAAAQAAAf8BAAAAAAAAAQAAAP//AAAAAAAAAAEAAAEAAAD/AAAAAQEAAAAAAAD/AAAAAQAAAAAAAAD/AAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAQEAAP8AAAAAAAAAAAEAAAEAAAD/AQAAAQAAAP8AAAEBAAAA/wAAAAEAAAAAAAAAAAEAAP8AAAABAAAA/wAAAAAAAAEAAQAAAAAAAP8AAAAAAAAAAAEAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAEAAAAAAAEBAAAA/wAAAAEBAAD/AAAAAQAAAAAAAAAAAAAA/wAAAAEBAAD/AAAAAQAAAP8BAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAP8AAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAA/wAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAD/AAAAAAEAAAAAAAEAAQAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAP8AAAAAAAABAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAQABAAAAAAABAAEAAAAAAAD/AAAAAAAAAAABAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAEAAAD//wAAAAAAAAABAAAAAAAAAAAAAAEAAAD/AQAAAAAAAAEBAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAQAAAAAAAAAAAAABAAAA/wAABP8BAAAAAP8AAAABAAAB/wAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAQAAAP8AAAEAAAD/AAAAAf8AAAAAAAEBAQD/AP8AAAABAAAB/wAAAAEAAAD/AAABAAAAAAAAAQABAP8A/wAAAAEAAAAAAAAA/wABAAEA/wH/AAAAAQAAAP8AAAABAAEB/wD/AAAAAAABAAAAAAAAAQAAAAAAAAAAAAAAAP8AAAEAAAAAAAAAAQAAAAABAAAAAAABAAAA////AAABAQAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAQAAAAD/AAABAQAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAEAAAEAAAD/AAAAAQAAAP8A/wAAAAEAAAD/AAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8BAAAA/wABAQEA/wD/AAAAAAAAAAAAAAAAAAAAAQAAAP8AAQABAP8A/wABAAEA/wAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAABAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAABAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAD/AAEAAQD/AP8AAQABAP8AAAAAAAAAAAD/AAEAAQD/AP8AAAABAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAABAQAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAABAAEA/wD/AAAAAQAAAAAAAQAAAP///wAAAQEAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAP8AAQABAP8A/wABAAEA/wAAAAEAAAD/AP8AAAABAAAA/wAAAAAAAQABAP8BAAABAAAA/wD/AAEAAQD/AP8AAQABAP8B/wAAAAAAAAAAAAAAAAAAAQEAAAD/AAAAAQAAAP8AAAAAAAAAAQAAAAAAAAAAAAAA/wAAAAEAAAD/AAAAAQAAAf8ABAH/AAAAAAAAAAEAAAD/AQAAAAAAAAEAAAD/AAAAAQAAAP8AAAAAAAAAAQEAAAD/AAAAAAAAAAEAAAAAAAD/AAABAAEAAAEAAAD/AQAAAQAAAAABAAD/AAAAAAAAAAAAAAEBAQAA/wAAAAAAAAABAQAAAAAAAQABAAAAAAAA/wEAAAEAAAD/AQABAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAEAAP8AAAABAAAAAAAAAP8AAAABAAAA/wAAAQABAAD/AAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAA/wAAAAEBAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAP8AAAAAAAABAQAAAP8AAAEAAQAAAAAAAAEBAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAA/wAAAQEBAAD/AAAAAAAAAAAAAAABAAAAAAEAAP8AAAEAAQAAAAAAAQEAAAD/AAAAAAEAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAQAA/wAAAAAAAAAAAQAAAQAAAAABAAD/AAABAAEAAAAAAAEBAAAA/wAAAAABAAAAAAABAQEAAP8AAAAAAAAAAQEAAP8AAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAABAAD/AAAAAQAAAP8AAAAAAAAAAAEAAAAAAAABAAAA/wAAAQABAAAAAAAAAQAAAP8AAAEAAQAA/wAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAEAAAD/AAAAAAAAAAABAAAAAAAAAQEAAP8AAAEAAQAAAAAAAQEAAAD/AAABAAEAAAAAAAABAQAA/wAAAAD/AAEAAQAAAAAAAQABAAAAAAABAAEA/wAAAAEAAQAAAAAAAAAAAAABAAAA/wAAAAABAAAAAAAAAQEAAP8AAP8A/wABAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEABP8B/wAAAAAAAAAAAAAB/wAAAAAAAQAAAP8BAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAEBAAD/AP8AAQABAP8B/wAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQEAAAD/AAAAAAAAAAAAAAAAAAAAAQAAAf8AAAAAAAABAAAAAAAAAQABAP8AAAABAf8A/wAAAAEBAAD/AP8AAAEAAAAAAAAAAAAAAAEBAAAA/wAAAQAAAAAAAAAAAQAAAP8AAAEAAAAAAAAAAAEAAAD/AAAAAQAAAP8AAAAAAAAAAAABAQEA/wD/AAEBAAD/AAAAAAH/AAAAAAABAQAA/wD/AAEAAAD/AAAAAAEBAAAAAAAAAP8AAAEBAAAA/wAAAAAAAAAAAAABAQAAAP8AAAABAAAAAAAAAP8AAAAAAAAAAQAAAP8AAQEBAP8AAAABAQAA/wD/AAABAQAAAP8AAAAAAAAAAQAAAP8AAAEBAAEA/wD/AAEAAAAAAAAB/wAAAAAAAAABAAAA/wAAAQAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAQABAP8A/wAAAQEAAAD/AAAAAAAAAAEAAAD/AAABAQAAAAAAAAD/AAAAAAAAAQEAAAD/AAAAAAAAAAAAAAEBAAAA/wAAAAAAAAEBAAAA/wAAAAAAAAABAAAB/wAAAAAAAAAAAAAAAQAAAP8AAAEAAAAAAAAAAAAAAQABAP8AAAAAAQAAAAD/AAAAAQAAAP8AAAEAAAAAAAAAAAEAAAD/AAABAAAAAAAAAAABAAAA/wAAAAEAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAEAAAD/AAABAAAAAAAAAAAAAAAAAQAAAP8AAAEAAAAAAQAAAAAAAAD/AAABAQAAAP8AAAAAAAAAAAAAAQEAAAAAAAAA/wAAAAEAAAD/AAAAAAAAAAEAAAAAAP8A/wAAAAAAAAAAAAAAAAAAAQEAAAAAAAAA/wAAAAAAAAEAAAAAAAD/AP8AAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8ABAH/AQAAAAAAAAEAAAD/AQAAAAAAAAEAAAH/AAAAAAAAAAEAAAD/AAAAAAAA/wD/AAAAAAABAAEAAAEAAAH/AQAAAAAAAAEAAAD/AAAAAAAAAAEAAAD/AAAAAP8A/wAAAAEAAQAAAAAAAAABAAAAAAAAAQAAAP//AAABAAAA/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABAAEAAAD/AAAAAQAAAAAAAAAAAAAAAQAAAQAA////AAEAAAAAAAEAAAEAAAD/AAAAAAAAAAABAAABAAAA/wEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAQABAP8AAAAAAAAAAAABAAAAAAAB/wAAAAAAAAABAAAA/wEAAAEAAAD/AAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQABAAAAAAAAAAAAAQAAAP8A/wAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAP8AAAABAAAAAAAAAAEAAQAAAQAA//8BAAEAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAP8AAAABAAEAAAAAAAAAAQAAAAAAAAAAAAABAQAA/wAAAAAAAAAAAQAAAAAAAAD/AAAAAAAAAAEAAAEAAP//AAABAAAAAAAAAAEAAAAAAAAAAAABAAAAAAAAAAEAAAEAAP///wABAAAAAAABAAABAAAA/wAAAAAAAAAAAQAAAQAAAP8BAAAAAAD/AAAAAQAAAP8AAAABAAAAAAABAAABAAAA/wAAAAAAAAABAAAAAAEAAAAAAAD/AAAAAQAAAP8BAAABAAAA/wAAAAABAAAAAAAAAQAAAP8BAAAAAAAAAAAAAAEBAAD/AAAAAAAAAAD/AAABAQAA/wAAAAAAAAABAAAAAAAAAP8AAAAAAQAAAAAAAAEAAAD/AAAAAAAAAAAAAAABAQAA/wAAAAAAAAAAAAAAAQEABAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAD/AAAAAAAAAAAAAAD/AAAAAQAAAAABAAAAAAAAAAAAAAAB/wAAAAEAAAAAAAAB/wAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAD/AAAAAQD/AAAAAQAAAAAAAAAAAQAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAABAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAIsTuQMAACAASURBVAAB/wAAAAEAAAAAAAAAAAAAAQAAAAD/AAAAAQAAAAAAAAEAAAAA/wAAAAEAAAAAAAAB/wAAAAEAAAAAAAAAAAAAAf8AAAABAAAAAAAAAAAAALd/SIAE////AAEBAQAAAAAAAAD/AAD/AAAAAQEAAP//AAABAAAAAAAAAP8AAAEBAAD/AAAAAP8AAAEB/wAA/wAAAAAAAAABAAAA/wAAAAEAAAAA/wAAAAAAAP8AAAAA/wAAAQEAAP//AAAAAAAAAQAAAAABAAAAAAAA//8A/wAAAAEAAAAAAAAAAAAAAAABAAAA/wEAAQEAAAD//wAAAQAAAP//AAAAAAAAAQAAAAD/AAAAAAAA/wAAAAAAAAAAAQAAAf8A//8AAAEBAAAAAAEAAP//AAAAAAAAAAAAAAEBAAAA/wAA/wAAAAEAAAD/AAABAQAAAP8AAAABAAAA//8AAQEAAAD/AAABAQAAAP//AAABAAAA/wAAAAEAAAD/AAD/AAAAAQEAAAD/AAAAAAAAAAAAAAABAAAAAAEAAP//AAAAAAAAAQAAAf8AAAABAAAA/wAAAAEAAAD/AAABAQAAAP//AAAAAAAAAAAAAAAAAAABAAAA/wEAAAH/AAD/AAAAAQAAAAABAAD//wD/AAAAAQAAAAABAQAAAP8AAP8AAAABAAAAAAEAAP//AAAAAAAAAAAAAAABAAABAAAA//8AAAAAAAAAAAAAAQEAAAD/AAAAAQAA//8AAAABAAAB/wAA/wAAAAAAAAAAAAAAAAAAAAEBAAD//wAAAAAAAAEAAAAAAQAA//8AAAABAAAB/wAAAAEAAP//AAAAAQAAAP8AAAABAAAA/wAAAQAAAP8BAAAB/wAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAEAAAH/AP//AAABAQAAAAABAAD//wAAAAAAAAAAAAABAQAAAP8AAP8BAAAA/wAAAQAAAP8AAAAAAAD/AAAAAQAAAAAAAQAAAQAAAP8AAAAA/wAAAAAAAAAAAAABAAAA/wAA/wAAAAEBAAAA/wAAAAAAAAAAAAAAAQAAAAAAAAD/AAAAAAAA/wAAAAEB/wAA/wAAAAD/AP8AAAABAQAAAAD/AAAAAAD//wAAAQEAAAAA/wAAAAAAAP8AAAAA/wAAAQAAAAAAAAAAAAAAAP8AAP8AAAAAAAAEAQEBAAAAAAAAAAAAAAABAAABAAD/AAAAAAAAAAEAAQAAAAAAAAEAAAAAAAAAAP8AAAEAAP8AAAABAQEAAAAAAAAA/wAAAQEA/wD/AAEAAQAAAAAAAAEAAAAAAAD///8AAQEBAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQAAAAAA/wAAAAEAAAAAAAAA/wAAAQAA/wAAAAEBAQAAAP8AAAEBAAAAAAAAAAAAAAAAAAAA/wAAAQEAAAD/AAAAAAAAAAEAAQH/AAAAAQAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAQAAAQAAAAD/AAABAQD/AP8AAQEAAAAAAAAAAQEA/wD/AAEBAAD/AAAAAQABAAAA/wAAAQEAAAAAAP8B/wABAAEAAAAAAAAB/wAAAAEAAAAAAP8A/wABAAAAAAEBAP//AAABAAAAAAEAAAAA/wD/AAEAAAD/AAABAAD/AAAAAQEBAAAAAAD/AP8AAQABAAAAAAD/AAAAAQABAAABAAD/AP8AAQAAAAABAQAA//8AAAEBAAAAAAD/AAAAAQEBAAAAAAD/AAAAAQEBAAAAAAD///8AAQEAAAAAAQD/Af8AAQABAAAAAAAAAAAA/wAAAAEAAAAAAQEA/wAAAAEAAQAAAQAA/wD/AAEAAQAAAAAA////AAEBAQAAAAAAAAAAAAAAAAAAAQEA//8AAAEAAQAAAAAAAAEAAAAAAAAAAAEAAP//AAABAQAAAAAAAAEAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAAAAAAAA/wAAAAAAAAABAAEB/wAAAAEAAAAAAAABAAAAAAEAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAEAAAEAAAAA/wABAAEAAAAAAAAAAAAAAP8AAAEBAAAAAQAAAAAAAAAAAAAAAAD/Af8AAQABAAAAAAAAAf8AAAABAAAAAAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAC/wAAAAAA/wAAAAAAAAAAAP///wABAAAAAQEBAAAAAAAAAP8A//8AAAD/AAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAQD/AAAAAAAAAAAAAAD///8A/wAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAD/AP8AAAD///8AAAAAAP//AAAAAAAAAP//AAAAAQAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAD///8AAAAAAP8AAQAAAAAAAAABAAAAAAD/AAAAAAABAAAA/wAAAAAAAAABAP///wAAAAAAAAAAAAAAAAD//wAA/wAAAAD/AAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAD//wAAAAAAAAEAAQAAAAAAAAAAAAAAAQAAAAAA/wAAAAEAAQAAAAAAAAD/AAEBAAAAAAAA//8AAP8AAAABAQAAAAAAAAD/AAAAAAAAAAAAAAAAAAABAAEAAAAAAP///wABAQAA/wAAAAAAAAABAAEAAAAAAP8AAAABAQEAAAAAAAAAAAABAAEA////AAAAAAAA/wAAAAAAAP///wABAQAA//8AAAAAAAAB/wAAAAAAAAAAAAAAAAAAAAABAAAAAAD/AP8AAQAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAA/wAAAAAAAQAAAAAAAAAAAP8AAAABAP//AAAAAAAA/wEAAAAAAAAAAAAAAAAAAAAAAQAAAAAA////AAABAAD/AAAAAAAAAAAAAQAAAAAA/wAAAAAAAQAAAP8AAAAAAAAAAQD///8AAAAAAAAAAAAAAAAA////AAAAAQAA/wAAAAAAAAD/AAAAAAAAAAAAAAAAAAD/AAAAAAAAAP///wAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAA//8AAAAAAAD/AAAAAAAAAAD//wAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAEAQD/AAAAAQD/AP8AAQAAAAEBAAD/AP8AAAAAAAEAAQD/AAAAAQEAAP8A/wABAAAAAAAAAAEAAAD/Af8AAAABAAAA/wABAAEAAAAAAAAA/wABAQAAAAD/AAAAAAAAAAEAAAD/AAAAAAAAAAEAAAAAAAEA/wAAAQAAAAD/AAABAAAAAAAAAAEAAAAA/wAA/wEAAAEAAAD/AAAAAQAAAAEAAAAA/wABAQAAAAAAAAEA/wAAAAAAAAAAAAAAAQABAP8AAAAAAAAAAAAAAP8AAAABAAEBAAAAAP8AAAAAAP8AAQABAf8A/wAAAAABAAAAAAAAAAEAAAAAAAAA/wAAAAEAAAD/AAAAAQAAAAAAAAAAAAABAf8AAAAAAP8AAAABAAAA/wAAAAEAAAD/AAAAAQAAAAAAAQAAAP8AAAAAAAAA/wAAAAEAAQH/AP8AAAAAAAAAAAAAAAABAAABAAAA////AAEBAQAAAP8AAAABAAABAAAAAP8AAQABAAAA/wD/AAAAAQAAAAAAAAAAAAAA/wAAAAEAAAAAAAEAAQEAAAAA/wABAQAA/wAAAAEBAAAAAAAAAQH/AAAAAQAAAQAAAAD/AP8AAAABAAEAAAD/AAAAAQAAAAAAAAD/AAAAAQAAAP8A/wAAAAEAAQAAAP8AAAABAAAA/wAAAAAAAAABAAAAAAAAAP8AAAEAAP8AAQABAAAA/wD/AAEBAAAAAAEAAQAAAAAA/wD/AAAAAQABAP8A/wABAAEAAQEAAAAA/wABAAEAAAD/AAAAAAAAAAEAAQD/AAAAAAAAAAAAAAD/AAAAAQABAQAAAAD/AAAAAAD/AAEAAQEAAP8A/wABAAAAAAABAAABAAAAAP8A/wAAAAEAAQABAAAAAAAAAAEBAAAAAP8AAAABAAAA/wD/AAAAAQAAAP8AAAABAAAA/wAAAAEAAAAAAAEAAQH/AAAAAAD/AAAAAQAAAAEBAAAAAAAAAAAAAAAAAAABAQAAAAAAAP//AAABAQAAAQEAAP8AAAABAAAAAAAAAAABAAAAAP8A//8AAAEBAAABAQAAAAAAAAAAAAAEAAABAP///wABAQEA/wD/AAEAAQAAAAAAAQAAAAAAAAABAAEA//8AAAEBAQD/AP8AAf8AAP8BAAABAAEAAP8AAAABAQD//wAAAQEBAAAAAAAAAAAAAP//AAABAQAA/wAAAAABAAABAAAAAAAAAAABAP//AAABAQAAAAAAAAEAAAAAAAAAAAABAAAA/wAAAQAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAQEAAAAAAP8AAQAB/wAAAAEAAAD/AAAAAQEAAP8AAAABAAAAAAAAAAAAAAD/AQAAAAAAAAEAAAEAAAAA/wEAAAH/AAD/AAAAAQAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAAAA/wEAAAAAAAEAAAAAAAAAAQEAAAD/AAABAAAAAAAAAAABAAAAAAEAAP8AAAAAAAAAAQAAAP8BAAAB/wAA/wAAAAEAAAD/AAD/AQAAAQABAAD/AAAAAQEAAP8AAAEBAQAA/wAAAAEAAAD/AQABAQAAAP8AAAEBAAAA/wAAAQEAAAAAAAAAAAAAAP8BAAAAAAAAAQAAAQAAAAD/AAAAAAAAAAEAAAAAAAAA/wEAAAAAAAABAAAA/wAAAQEBAAD/AAABAAEAAAAAAAABAAAA/wEAAQAAAAAAAAAAAQEAAP8AAAAAAQAAAQAAAAAAAAAAAQAA/wAAAAAAAAEBAAAAAAEAAf8AAAAAAAAAAQAAAAABAAD/AAAAAQAAAP8AAAEBAQAA/wAAAAEBAAD/AAAAAQAAAP8BAAABAAAA/wAAAAEBAAD/AAAAAQAAAAAAAAAAAAAA/wEAAAAAAAABAAABAAAAAP8BAAEAAAAAAQAAAAAAAAD/AQAAAAAAAAEAAAD/AAAAAQEAAP8AAAAAAQAAAAAAAAEAAAD/AQABAAAAAAAAAAEBAAAA/wAAAQAAAAABAAAAAAAAAAAAAAAAAQABAP8AAAABAAAA/wAAAAEAAAD/AAAAAQAAAP8AAAABAAABAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAE//8AAAEAAQAA/wAAAQABAAAAAAABAAAAAAAAAAABAAAA/wAAAQAAAAD/AAAAAQEAAAAAAAAAAQAA/wAAAAAAAAD/AAABAAAAAP8AAAAAAAAAAAAAAAABAAD/AAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAD//wAAAQAAAP8AAAABAAAA/wAAAAEAAQAAAAAAAQABAAAAAAAB/wAAAAAAAAAAAQAA/wAAAAAAAAAAAAD/AAAAAf8AAP8AAAAB/wAA/wAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAP8BAAAAAAAB/wEAAAAAAAH/AAAAAAAAAf8BAAAAAAAB/wEAAAAAAAD/AAAAAAAA/wAAAAEAAAD/AAAAAf8AAP8AAAABAAAA/wAAAAH/AAD/AAAAAQAAAP8AAAAB/wAAAAAAAAD/AQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAA/wAAAAAAAAD/AAAAAQAAAP8AAAAAAAAA/wAAAAAAAAD/AAAAAAAAAP8AAP8AAAABAAAA/wAAAAEAAAD//wAAAQEAAP8AAAABAAAAAP8AAAAAAAD/AAAAAQAAAAD/AAD/AAAAAf8AAP8AAAABAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAQAAAAAAAAAA/wAA/wAAAAEAAAAA/wAA/wAAAAEAAAD/AAAAAf8AAAAAAAAA/wAA/wAAAAH/AAD/AAAAAf8AAP8AAAAB/wAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAA/wD/AAEAAQAAAAAAAP8AAAAAAAAAAAAAAP8AAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAP8AAAABAAAA/wAAAAH/AAD/AAAAAQAAAAD/AAAAAAAA/wABAAEAAAAAAAEAAAAAAAAAAQD/AAAAAQABAAAAAAAAAAEAAAEAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAAAAP8AAAABAQAAAP8AAAABAAAA/wAAAAAAAAAAAAACAAD/AAABAAAAAQAA/wEAAAAA/wAAAQAAAAD/AAAAAAD/Af8A/wEAAAABAAAAAP8AAAAAAAEA/wAAAQAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAf8A/wEAAAABAAD/AQAAAAEAAAABAAAAAQAAAAEAAAAA/wABAQAAAAEAAAAA/wAAAAAAAAH/AAABAAAAAAAAAAH/AAAAAAD/AQAAAAAAAAABAAAAAP8AAAEAAAABAAABAf8AAAAAAAEAAAAAAQAAAQEAAAAB/wAAAQAAAAEAAP8B/wAAAQAA/wAAAAABAAAAAAAAAAH/AAAAAAAAAQAAAAAAAP8BAAAAAAAAAAH/AAAAAAAAAf8AAAEAAAEBAQD/AP8AAAEAAAABAAAAAP8AAAEAAAABAAAAAf8AAQEAAAABAAABAf8AAAEAAAEA/wAAAAAAAAAAAAEB/wAAAQAAAQABAAAAAAABAP8A/wAAAAAAAAAAAAAAAAH/AAABAAAAAAAAAAAAAAABAAAAAf8AAAAAAAAAAAAAAf8AAAEAAAEBAAAAAQAAAAEAAAABAAAAAP8AAAAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAEB/wAAAAAAAAEAAAABAAAAAQAAAAEAAAABAAD/AQAAAAH/AP8AAAAAAQAA/wEAAAABAAAAAQAAAAEAAAABAAAAAP8AAAAAAAAAAAABAf8AAAAAAAABAAAAAQAAAQEAAAAA/wABAQAAAQD/AAAAAAABAQAAAAEAAAABAAAAAQAAAQH/AAAAAAABAAAAAAEAAAEBAAAAAf8AAAEAAAABAAD/Af8AAAEAAP8AAAAAAQAAAAEBAAABAAAA/wAAAAEAAP8BAAAAAf8AAQEAAP8A/wAAAQAA/wH/AAABAAAAAAAAAAEAAAABAAAAAQAAAAD/AAABAAAAAQAAAAH/AP8BAAAAAQAAAQH/AAABAAAAAf8AAAEAAP8A/wABAQAAAAEAAAABAAAAAf8AAAAAAAEB/wAAAQAA/wAAAAAAAAAAAf8AAAEAAAEB/wAAAAAAAAH/AAAAAAD/AAAAAAEAAAAB/wAEAAEAAAAA/wAAAAEAAAD/AAABAAD/AP8AAQEAAAAA/wABAAAA/wD/AAAAAQABAAAA/wH/AAEAAAD/AP8AAP8AAAEBAAAAAAAA/wAAAAEBAAAAAAAAAAD/AP8AAAAAAAAAAAAAAP8AAQABAP8A/wAAAAABAAAAAP8A/wABAAEBAAAAAAAAAAAAAP8A/wABAQEAAAAAAAAB/wAAAAAAAAD/AAAAAAD/AQAAAQD/AAEAAAAAAAAA/wH/AAAAAQAAAP8AAAAAAAEAAAD/AAAAAQAAAAEAAAAAAP8AAAEAAAAAAAD/AAAAAAAAAAAB/wD/AAAAAQEBAAEAAAAAAf8A/wAAAAEA/wD/AAAAAQD/AP8AAAAAAQAAAQD/AP8AAAABAQEA/wD/AAEAAAAAAAAAAAAAAAAA/wAAAAAAAAD/AP8BAAABAP8A//8AAAEAAAAAAAAAAAD/AAABAQAAAAAAAAD/AP8BAAABAAEAAAAAAAAA/wAAAAEAAAH/AAAAAQD/AAAAAQEAAP8A/wABAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAA/wAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAAAAAA/wAAAAEAAAABAAAA/wAAAAABAAD/AP8AAAAAAAAAAAD/AAEAAQD/AP8AAAABAQEA/wD/AAEAAAD/AAAAAQH/AP8AAQABAP8A/wAAAAEBAAAAAP8A/wEAAAEA/wD/AAAAAQAAAP8AAQABAAAAAAAAAP8B/wAAAAEAAAD/AAAAAAABAAAA/wAAAAEAAAABAAAAAAD/AAABAAAAAAAAAAAAAAAAAAAAAQEAAAD/AAEAAAAAAAAAAAD/AAABAAAAAP8AAQAAAAAA/wAAAQEAAAD/AAEAAAD/AAAAAQEBAP8A/wABAAAAAAAAAAEA/wAAAAEAAAAAAAAA/wD/AAAAAQD/AAABAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAAAAP8AAQEAAAAAAQAAAAAAAAAAAAAAAAAAAP8A/wAAAAEA/wAAAQAAAAAAAAAAAAAEAP8AAAABAQAA//8AAAEAAAAAAQABAAAAAP8AAP8B/wAAAAAAAQABAP8AAAAAAAAAAf8BAP8B/wABAAEAAAEAAAAAAAAAAAAAAf//AAABAQAAAAAAAQAAAAAAAAAAAAAAAAAAAAH/AAAAAQEAAQD/AP8AAAAAAAAAAAAAAAD/AQD/AQAAAQABAP8A/wAA/wAA/wEAAAH/AQAAAf8AAAABAAD//wABAQEAAAAAAP8AAAABAP8AAQABAAAAAAAAAAEAAAAAAAAAAAAB/wAAAAEAAAAAAAAAAAEAAQAAAAAAAAABAAAA/wD/AAD/AQAAAf8AAP8AAP8BAAAB/wEAAAH/AAAAAQAAAP8AAP8BAAAB/wAAAAEAAAD/AAEAAQAA/wAAAQEBAAAAAAAAAAAAAP8AAAABAQAAAP8AAAABAAH/AAAAAQAAAQAAAP8A/wAB/wAA/wEAAAH/AAD/AQAAAAABAAH/AAAAAQAAAAABAAAAAAAAAAAAAAABAAAA/wABAAEAAP8AAAEBAQAAAAAAAAAAAAAAAAAAAAAAAQD/AAAAAQAB/wAAAAEAAAEAAQAAAAAAAQAAAAAAAAABAP8AAAABAAAAAAAB/wAAAAEAAAEAAAAAAAAAAf8AAAABAAAAAP8AAQABAAD/AAAAAQEAAAAAAAAAAAAB/wAAAAEBAAEA/wAAAAAAAf8BAAABAAABAAAAAAAAAAH/AAAAAQEAAQD/AAAAAQAAAAAAAQAAAAAAAAABAAAAAAAAAAH/AAAAAQAAAAAAAAEAAQAAAAAAAAABAAAAAAAAAAAAAf8AAAABAAAAAAAAAAABAAEAAAAAAAAAAQAAAAAAAAAA/wAAAAEBAAAA/wAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAAAAA/wAAAAEBAAAA/wABAAEAAP8AAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAABAAD/AAABAQAAAAAAAAEA/wAAAAEAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAD/AAAAAAAAAAEAAAAAAAAAAQAA/wAAAQEAAAAAAAABAP8AAAABAAAAAAAEAAABAAD/AAAAAAEAAP8AAAAAAAAAAAAA/wAAAAEAAQD//wAAAAAAAAAAAAABAAEAAAAAAAH/AQAAAAAAAAAAAAAAAAAAAQAAAAABAAAAAAD//wAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAABAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAEAAQAAAAAAAP8BAAAAAAAAAAEAAAAAAP8AAQAB/wAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8AAQABAAAAAAAAAAAAAAAAAAAAAP8BAAAAAAAA/wEAAAAAAAD/AQAAAAAAAP8BAAAAAAAA/wEAAAAAAAD/AQABAAAA/wABAAEAAAD/AAAAAf8AAP8AAAABAAAA/wAAAAH/AAD/AAEAAQAAAAAAAAAA/wAAAAAAAAH/AQAAAAAAAf8BAAAAAAAB/wEAAAEAAP//AAAB/wAA/wAAAAEAAAD/AAAAAQAAAP8AAQABAAAA/wAAAAH/AAD/AAAAAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAEAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAQAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD/AAEAAQAAAAAAAAAAAAAA/wAAAAEAAAD/AAAAAf8AAP8AAQABAAAAAAEAAP//AAABAAAA/wAAAAEAAAD/AAAAAf8AAP8AAQABAAAA/wAAAAH/AAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAABAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAD/AAAAAAEAAAAAAAAAAAACAQEAAAABAAD/AQAAAQEAAAAB/wD/AAAAAQEAAAAAAAAAAQAA/wAAAAEBAAD/Af8AAAAAAAAB/wAAAQAAAAAAAAABAAAA/wAAAAH/AP8AAAABAQAA/wH/AAAAAAAAAf8At7D7xwAAIABJREFUAAEAAAAAAAAAAAAAAAEAAAABAAAAAP8AAAEAAAABAAAAAAAAAAD/AAABAAAAAAAAAQH/AAAAAAAAAP8AAAAAAAEBAAAAAP8AAAEAAAEBAAD/AQAAAAEAAP8AAAAAAQAA/wEAAAAB/wAAAAAAAAAAAAEBAAAAAAAAAAEAAAAAAAAAAQAAAAH/AAAAAAAAAf8AAAAAAAAB/wAAAAAAAQH/AAAAAAABAf8AAAAAAAEB/wAAAQAAAQH/AAAAAAABAQAAAAEAAAEBAAAAAAAAAAEAAAAAAAABAQAAAAEAAP8BAAAAAAAAAAEAAAAB/wAAAAAAAAH/AAAAAAAAAf8AAP8AAAABAAAAAQAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAQAAAAH/AAABAAAAAAAAAAEAAAABAAAAAAAAAAEAAAAB/wAAAQAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAQAAAAAAAAABAAAAAf8AAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAH/AAABAAAAAAAAAAAAAAABAAAAAQAA/wAAAAAAAAAAAQAAAAEAAP8AAAAAAAAAAAEAAAABAAAAAf8A/wAAAAABAAD/AQAAAAEAAP8AAAAAAQAA/wEAAAABAAD/AAAAAAEAAP8BAAAAAf8AAAAAAAAAAAABAQAAAAAAAAABAAAAAAAAAQEAAAAAAAABAQAAAAAAAAEBAAAAAAAAAAD/AAEBAAAAAQAAAQEAAAAAAAABAQAAAAEAAAEB/wAAAAAAAQEAAAABAAABAQAAAAAAAAAB/wAAAQAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAH/AAABAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAABAAAE/wD/AAEAAAABAAEAAAD/AAAAAAABAf8A/wAAAAEAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAP8AAAABAP8AAAEBAAAA/wAAAQAAAAAAAAEA/wD/AAAAAQAAAAAB/wAAAAAAAAD/AP8BAAABAAAA/wAAAAAAAAAAAQAAAQAAAAAA/wAAAQEAAAAAAAAA/wAAAQEAAAAAAAABAAABAAAAAAEAAAAA/wAAAQAAAAD/AAAAAAABAAAAAAAAAAEBAAAAAAAAAQAAAAAAAAD/Af8AAQABAP8A/wABAQAAAAAAAAABAAD/AAAAAQAAAAABAAABAAAAAAEAAAEAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAD/AP8AAQAAAAAB/wAAAAAAAAAAAAAAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAB/wD/AAAAAQEAAAAA/wAAAAAAAQEAAAAAAAAAAAAAAAABAAAB/wAAAAAAAAAAAAAA/wABAQAAAAAAAAAAAAAAAQEAAAD/AAAAAAAAAP8AAAEAAAAAAQAAAP8AAAAAAAABAQAAAP8AAAAAAAAAAAAAAAAAAAEAAAAAAQAAAAAA/wD/AAEBAAD/AAAAAQAAAP8AAAABAQAAAAAAAAAA/wD/AQAAAQAAAP8AAAABAAAAAQEAAAAAAQAAAP8AAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAQH/AAAAAQABAP8AAAAAAAEBAAAAAAEAAQD/AAAAAAABAQAAAAAAAAEAAAAAAAAA/wH/AAEAAQD/AP8AAQEAAAAAAAAAAQAAAAAAAAABAAD/AAAAAQEBAP8A/wABAQAAAAAAAP8A/wABAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAAAAAAAAEAAAAAAAAAAP8AAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAA/wAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAEAQABAAAAAAAAAAAAAAABAP///wAAAQEAAAAAAAAAAAAAAP8AAQABAAAAAAAAAP8AAP8AAAABAQAAAAAAAAAAAAAAAQAAAAAAAAD/AAAAAQABAAAA/wAAAAEAAAAAAAAAAAD/AAD/AAD/AQEAAQAAAP//AAD/AAAAAQEAAP8AAQAB/wAA/wAAAAEBAQAA/wAA/wEBAAH/AAD/AQAAAf8AAAABAQAAAAAAAAAAAAAAAAAAAAAAAAD/AP8AAQABAAAAAAAAAAAA/wAA/wAA/wAAAAEBAAD/AAEAAP//AAAAAQABAAAA/wH/AAD/AAAAAQAAAf8AAP8BAAAA//8AAAEBAAH/AAD/AQEAAf8AAP8BAAABAAEAAAAAAAAAAAD///8AAQEBAAAAAAAAAP8A//8AAAABAQABAAAA////AAAAAAAAAQEAAf8AAP8B/wAA//8AAAEBAAH/AAAAAQAAAAD/AAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAP8AAQABAAAAAAAAAAAAAAD/AP//AAAAAAAAAQEAAP8AAQAA//8AAAABAAEB/wD/AAEAAP//AAAAAAABAQAAAAABAP8AAAAB//8AAAEBAAAAAAAAAAEAAP//AAABAQABAAAAAAAAAAH//wAAAQEAAAAAAAAA/wAA/wAA/wEBAAEAAAD///8AAAAAAAABAAABAAEA////AAAAAAAAAQEAAQAAAAD//wAAAQEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAA/wD/AAEAAQAAAAAAAAAAAP8AAP8AAP8AAAABAQAA/wABAAD//wAAAAEAAQH/AP8AAQAA//8A/wAAAAEBAAAAAAEAAAAAAAD//wAAAQEAAAAAAAAAAAAA//8AAAEBAAAAAAAAAAAA////AAEBAQAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAP8AAAABAAAAAAAE//8AAAEAAAAAAAAAAAAAAAEBAQD//wAAAQAAAAAAAAABAQEA//8AAAAAAAAAAAEAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAQAAAf8AAP8AAAAAAP8AAAABAAEBAAD//wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAABAAD/AAAAAAAAAP8AAAAAAAAA/wEAAAAAAP//AAABAAAAAAAAAP8AAAABAAAAAAABAAEAAAD/AAAAAAD/AAEAAQABAQAAAP8AAAD/AQAAAP8AAQABAAAAAAAAAAAAAAABAAEAAAD//wEAAAAAAAD/AQABAAAA//8AAAAAAAAA/wAAAAAAAAD/AQD/AAAAAQAAAAAAAAABAAEAAP8AAP8A/wABAAEAAQAAAAD/AAAAAAAAAAABAAEAAAAA/wAAAAAAAAD/AQABAAAA/wAAAAAAAAAA/wAAAAEBAAD/AAAAAAAAAAAAAAAAAAABAQAAAP8AAAAAAAAAAAEAAAAAAAAAAAD/AP8AAQABAAEAAAD/AAAAAP8BAAAA/wABAAEAAAAAAAD/AQAAAAAAAQABAAAAAAAAAAEAAP8AAAEAAAAAAAEAAP8AAAABAAAA/wAAAQABAAD/AAAAAAAAAAAAAAAAAQD//wAAAAD/AAAAAQABAQAA//8AAAAAAAAAAAAAAQABAAD/AAAAAAAAAQABAAAAAAAA/wAAAAEAAAAAAQAA/wAAAAAAAAAAAAAAAAAA/wAAAAEAAAD/AAAAAQAAAAAAAQABAAAA/wAAAAAA/wABAAEAAQEAAAD/AAAA/wEAAAD/AAEAAQAAAAAAAP8BAAEAAAAAAAEAAAAAAAD/AQD/AAAAAQAAAAEAAQAA/wAAAAAAAP8AAAABAAEA//8AAAEAAAAAAAAAAQABAAD/AAD/AP8AAQABAAAAAAAAAAAAAAAA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AAAAAAAAAAD/Af8AAAAAAAAAAAAAAQAA/wD/AAEAAAD/AAAAAAABAAAA/wAAAAAAAAAAAP8B/wAAAAAAAAAAAP8AAAAAAAAA/wH/AAAAAAAAAAAAAAABAAAA/wABAAEAAAAAAAAAAAAAAAAA/wH/AAAAAAAAAAAAAAAAAP8B/wAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAQAAAAAAAAD/AAAAAAAAAAEAAAAAAAAA/wAAAAAAAAAAAAEAAQD/AP8AAQABAP8A/wABAAEA/wAAAAAAAAAAAAAAAAH/AAAAAQAAAP8AAAABAAAA/wABAAEA/wH/AAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAB/wAA/wAAAQAAAP8B/wAAAAAAAP8AAAABAQAAAP8AAAABAAABAAAEAf8BAAAAAAAAAQAAAP8BAAAAAAAAAQAAAP8AAAAAAAAAAAAA/wAAAAEBAQD/AAAAAP8AAAAAAAABAQAAAP8AAAAAAQAAAQAAAP8AAAEAAQAAAQAAAP8AAAAAAQAAAAAAAQAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8BAAAAAAAAAAAAAAEBAAD/AAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAB/wAAAAEAAP7//wACAQAAAAAAAAH/AAAAAAEAAAAAAAABAAAA/wAAAQABABoMCgAFAgIANRgUADUYFAACAQEAIA4MAAEAAQAA/wAA/wAAAAAAAAABAAEAAAAAAAABAAAAAAAAAAAAALzh5gD5/P4AAAAAAAAA/wABAAEAAAABAAAAAAAAAAEAAAAAAAEAAQAAAAAAAAAAAP//AAAAAAAA//8AAP7/AAAAAAAAAgABAAH/AQD/AP8AAQEBAAD/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AQAAAP8AAQABAAAAAQAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAP8AAAAAANvw8wDD5OkAAP8AAAAAAAABAAEA/wD/AAEBAQAA/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wEAAAAAAAAAAAAB/wEAAAAAAAAAAAAA/wAAAQABAAAAAAABAQAAAP8AAAAAAQD6/f4ACAMDAAEAAQAA/wAACAQDAP3+/wD+//8AAf8BAAAAAAAAAAAAAAAAAAABAQAA/wAAAAAA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AAAAAAAAAAAAAAABLVIq/wAAAAAAAAEAAAD/AAAAAAAAAAEAAAD/AAEAAQD/AP8AAAAAAAAAAQAAAP8AAP8AAAABAAAAAAAAAQABAP8A/wAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEBAAAA/wAAAAEAAAD/AAAAAAAB/wEA/wH/AAD/AAAAAQAAAP8BAAEB/wD/AAAAAQABAAEAAAAAAAAA/wAAAAAAAAD/AP8AAAABAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAD/AAEAAQAAAAAA/wD/AAD/AQABAQAAAQAAAP8AAAD///8AAAEAAAD/AQAAAf8AAQABAP8A/wABAAEAAQAAAP8AAAD/AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAP8AAQABAAEAAAAAAAAA/wAAAAAAAAD/AP8AAAABAAAA/wAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAABAAEAAQAAAAAAAAAAAAAAAAAAAP8AAAD/AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAQEBAAAAAAD/AP8AAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAD/AAAAAAAAAAEAAQAAAAAAAAD/AP8AAQABAAAAAAD/AP8AAQABAAAAAAD/AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAcDAgADAQEA9vz9AP8A/wAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAA/wAAAAEAAAABAAAA/wAAAP8A/wAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAEAf8BAAAAAAAAAQAAAAABAAAAAAAA/wAAAAABAAAAAAABAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAA/wAAAAAAAAEAAQAAAAAAAAABAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAABAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAD/AQAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAQD/AP8AAQAAAAAAAQAB/wAAAAAAAP8BAAAA/wAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAEAAAAA/wAA/wAAAP8B/wABAAEAAAD/AAAAAAAAAAEAAP8AAAEAAQAAAAAA/wAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAP//AAAAAAAAAAEAAAD/AAABAQEAAP8AAAAAAQAAAAAAAAEAAAD/AAAAAAAAAP8AAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAABAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAABAAEAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn8/gAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAD/AAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAEBAAAAAAAA/wEAAAEAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAAEBAAD/AAAAAAAAAAEAAAAAAAAE/wH/AAAAAAAAAAEAAAD/AAAAAAAAAQEAAP//AAABAAAAAAAAAAAAAAAAAQAAAP8AAQABAP8A/wAAAQAAAAAAAAAAAAAAAAEAAAD/AAAAAAABAAEA/wD/AAEBAQD/AAAAAAD/AAAAAAAAAAAAAAABAAAA/wABAQEA/wD/AAAAAAAAAQEAAP//AAABAAABAAEA/wAAAAEBAAAAAAAAAAEAAP8AAAAAAf8AAAAAAAAAAAAAAAAAAAEAAAD/AQABAf8A//8AAAAAAAAAAAAAAAEAAAEAAQD//wAAAAD/AAABAAAAAAEAAAAAAP8BAAAAAP8AAQABAAAAAAAAAQAA/wAAAAABAAAAAP8AAQEBAP8A/wABAAEA//8AAAAAAAAAAQAAAAAAAAAA/wAAAAAAAAAAAAAAAAABAAEA/wAAAAAAAAAAAP8AAAABAAAB/wABAAEA/wD/AAEBAQD/AP8AAQEBAP8AAAAAAP8AAAABAAABAAAAAP8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAD/AAAAAQAAAQAAAAD/AAAAAAAAAAAAAAABAAAAAAABAAAA/wAAAAAA/wAAAAAAAAAAAAAAAQAAAAAAAP8AAAAB/wAAAAAAAAAAAAEAAQD/AP8AAP8BAAAAAAAAAf8AAAABAAAA/wAAAAAAAAABAAAA/wAAAAAAAP8AAAABAAAA/wEAAQH/AP//AAAAAAAAAAAAAAABAAABAAEA//8AAAAA/wAAAQAAAAAAAAAAAAAAAAEAAAD/AAAAAQAAAAAAAAD/AAD/AQAAAf8AAP8AAAEBAQD/AP8AAAAAAAD/AQAAAAAAAAEAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAEBAAAA/wAAAAAAAAAAAAAAAAAA/wAAAAABAAAA/wAAAQEAAP//AAABAAAA/wAAAAEAAAAAAAAAAQAAAP8AAAABAQAAAP8AAAAAAAABAAAAAAAAAP8AAAABAAAEAQABAAAAAAAAAAAAAAABAP8A/wAAAAAAAQABAAAA/wAAAAEAAP8AAP8AAAAAAQAAAAAAAAAAAAAA/wEAAQAAAAABAAD//wAAAQAAAAABAQD///8AAAABAAAB/wABAAEA//8BAAEAAAAAAQAAAP8AAP8BAQAA/wAAAQEBAAABAAAAAAAAAAAAAAAAAQAA/wAAAAEAAAAAAAAAAAAAAP8AAAEBAAAAAAAA/wABAAD//wABAQEA//8AAAEAAAAAAAAAAQEBAAAAAAAA/wAAAAAAAAD/AAABAAAA/wABAAEAAAAAAAAA/wAAAAEAAAD/AAAAAP8AAAABAAAAAAAAAAAAAAH/AAD/AQAAAAAAAAAAAAAA/wAAAQEAAAD/AAD//wAAAQEAAAAAAQD//wAAAAAAAAEBAAAA/wAAAAAAAAEAAAAAAQEAAAAAAP8AAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAABAAAAAAAAAP//AAABAAEAAAEAAAAAAAD//wAAAQEAAAAAAAAAAAEAAP8AAAAAAAAAAQAAAP8AAAABAAD//wAAAQEBAAD/AAAAAAAA/wAAAAEBAQAA/wAA/wEAAAEAAQAA/wAAAAEBAAAAAAAA/wAAAAABAP8BAAABAAAAAP8AAP8AAAAAAf8AAQABAP//AQABAAAAAAEAAAD/AAD/AAAAAQAAAAAAAQD//wAAAQAAAAAAAAABAQEAAAAAAAAAAAAAAAEA//8AAAEBAQAAAAAA//8AAAEBAQAAAP8AAAEBAP//AAABAAAAAAAAAAEBAQAAAAAAAP8AAAAAAAAA/wAAAQAAAP8AAQABAAAAAP8AAAABAAD//wAAAQEBAAD/AAD/AAAAAQEBAAAAAAAAAAAAAAEBAAD/AAABAAEA/wH/AAEBAAAA/wAA//8AAAEBAAAAAAEA//8AAAEBAAAAAQAA////AAEBAQAAAAAAAAAAAP8A/wABAQEAAAAAAAAAAQD///8AAQEBAAD/AAAAAQAA/wD/AAEAAQAAAAAAAAEAAP///wABAQEAAAAAAAAAAAD/AP8AAQEBAAAAAAAEAAD/AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAH/AAAAAQD/AP8AAAEAAAEAAAD/AAAAAAD/AAEAAAAAAf8AAAAAAAAAAAABAQAAAAAAAP8A/wABAQAA/wAAAAAAAAAAAP8AAQEAAP8AAAABAAAAAAEAAAAAAAAAAQAAAAAAAP8AAAABAAAAAAEAAAAA/wAAAQAAAQAAAAAA/wAAAAAAAAH/AAAAAAAAAAAAAQD/AP8BAAAAAP8AAQEAAP8AAQABAAAAAAD/AAAAAAD/AQAAAQAAAAABAAAAAAAAAQABAAAA/wAAAAAAAAAAAAD/AAABAQAAAAH/AAAAAAAAAP8AAAAAAAAB/wAAAAAAAAAAAAEAAAAAAf8AAAAAAP8BAAABAAEAAAD/AAAAAAABAQAAAAAAAAAAAAD/AQAAAQAAAAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAB/wAAAAAAAAD/AAEAAAAAAAAAAAD/AAABAAAAAAAAAAAAAAAAAAAAAQAAAAABAAAA/wAAAAAAAAEBAAAA/wAAAAAAAAEAAAAAAAABAQEA/wD/AAEBAAAAAAAAAAABAAAAAAAAAf8AAQAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAEAAAEAAQAAAAAAAAD/AAEBAAD/AAAAAQAAAAABAAABAAAAAAABAAAA/wABAQAA/wAAAAEAAQAAAAAA/wH/AAEAAAAAAAAAAQEBAAAA/wAAAAAAAQEAAAAAAAAAAAAAAAD/AAEBAAD/AAEAAQAAAAAA/wAAAAAA/wEAAAEAAAAAAQAAAAAAAAEAAQAAAP8A/wEAAAEAAAABAQEAAAAAAAAB/wABAAEAAAD/AAABAAAAAAAAAAD/AAABAAD/AAAAAQAAAAAA/wD/AQAAAQABAAAA/wAAAAAAAQEAAAAAAAAAAAEAAQEAAAAA/wD/AAAAAP8AAAEBAAAAAP8AAAAAAP8AAAABAQAAAAD/AAABAAD/AAAAAAAAAP8A/wABAAAAAAAAAAEBAAAAAAAA/wD/AAAAAAABAAAA/wD/AAEAAAAE//8BAAEB/wAAAAEA/wAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAQABAAAAAAABAP8AAP8BAAAB/wD//wEAAQAAAAABAAD/AAAAAf//AAEBAQD///8AAQH/AAAAAQD///8AAQEBAAEAAAD/AAAAAf8AAAABAAAA/wAAAAAAAAEBAAD/AAAAAf8AAAABAAAA/wAAAAH/AAD/AQABAf8AAP8BAP8A/wABAQAA//8AAAEBAQD///8AAQABAAEBAAAAAAEA////AAEAAQABAQAA/wAAAAH/AAAAAQAAAAAAAP8AAQABAAAAAQD/AAAAAAD/AAAAAQABAAEA/wAA/wEAAQH/AAD/AQAAAf8AAP8AAAABAAAAAAEA////AAEAAQAAAAAAAAEBAP///wABAQEAAAAAAP8AAAAB/wAAAAAAAAABAAD/AAEAAQAAAAEA/wAAAAAAAAAAAAD/AQABAf8A//8BAAABAAABAAAA//8AAAAAAAAAAAAAAAEAAP///wABAAEAAAEAAP//AAAAAAAAAQAAAAABAQD/AAAAAf8AAAABAAAAAAAAAAABAAD/AAAAAAAAAQEAAAAAAAAA/wEAAAEAAP8AAAAA/wAAAQEAAP///wAAAAEAAQEAAAAAAAD///8AAQABAAAAAAAAAQEA////AAEBAQABAAAA/wAAAAH/AAAAAAAAAAEAAP8AAQAB/wAAAQEAAAAAAAAAAAAAAf8BAAAAAAAAAQAA/wAAAAEAAQD//wAAAAAAAAEAAAAAAQAA////AAEAAQABAQAAAAABAP///wABAAEAAQEAAP8AAAAB/wAAAAEAAAAAAAD/AAEAAf8AAAAAAAAAAQAAAAAAAAD/AQAAAQAAAAABAAD/AAAAAQAA////AAAAAQABAQAAAAAAAP///wABAAEAAAAAAAABAQD///8AAQEBAAAA/wAAAAAAAAAAAAAAAQABAAAAAAEAAAAAAAAAAAAAAAD/AAEAAQAAAAAAAAAAAAAAAAABAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAQAAAAAAAQAAAAAAAAAEAQAAAAD/AQAAAAAAAQAAAAAAAAAAAAAA/wAAAAEAAAABAQEAAP8AAAABAAD//wEAAQAAAAD/AQABAQAA//8AAAH/AAABAQAAAAABAP//AAAAAAEAAP8AAAAAAAABAAEA//8AAAEAAAABAAAA/wAAAAD/AAAAAAAAAAAAAAD/AAABAAAAAAAAAAD/AAAAAAAAAP8BAAAAAAAAAAAAAAAAAAEAAQD///8AAQABAP//AAABAAEAAAAAAP//AAABAAAAAQABAAAAAAAA/wAAAQAAAAAAAAD//wAAAQAAAAEAAAD/AAAAAQABAAAAAAAA/wEAAAAAAAABAAAAAAAAAP8BAAAAAAABAAEAAAAAAP//AAAAAAAAAQABAAAAAAAAAAAA//8AAAEAAQD///8AAPf/AAABAAD/CAEAAQABAP//AAABAAAA/wAAAAEAAQAAAAAAAQABAAAAAAAA/wEAAAAAAAH/AAAAAQAAAQAAAP8AAAAAAAAAAP8AAAAAAQAAAAAAAP8AAAD2/wAABQEAAAUAAAD/AAAAAAAAAAAAAAD/AAAAAAAAAQAAAP8AAAABAAAAAP8AAAAAAAAAAAAAAP8AAAAAAAAAAAAAAP8AAHUJ3GQAACAASURBVAEAAQAAAAAAAP8AAP8A/wAA9/8A/wH/AAEIAgAA/wAAAQABAP//AAABAAAAAQAAAP8AAAABAAAAAP8AAAEBAAD/AAAAAf8AAAAAAAD/AAAAAQAAAAAAAAD//wAAAQAAAAAAAAABAAAAAAAAAAABAAAA/wAAAQABAAAAAAD//wAAAQAAAAEAAQAAAAAAAP8AAAEAAAAAAAAA//8AAAEAAAABAAAA/wAAAAAAAAAB/wAAAAAAAP8AAAABAAAA//8AAAEAAAAA/wAAAAABAAEAAAAA/wAA/wAAAAEAAQAAAAAAAAAAAP//AAABAAEAAP8AAAAAAQD/AAAAAAABAAEAAAAAAAAAAAAAAAAAAAD/AAAAAQABAP8AAAABAAAAAAAAAP8AAAABAAAAAAEBAAAAAAAA/wAAAAAAAP8AAAABAQAAAP8BAAAAAAAAAAAA/wAAAAEAAAAC/wAAAAABAAAAAQAA/wEAAAAA/wAAAQAAAQD/AAABAAD/AP8AAAAAAP8AAAABAf8AAAAAAP8B/wAAAAAAAQEAAAABAAAAAAAAAAD/AAEBAAABAQAAAAEAAAABAAAAAAAAAQAAAAABAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAA/wD/AQAAAAAAAAABAAAAAAAA/wH/AAAAAAAAAAAAAAAAAAABAAABAQEAAAEAAAEBAAD/AAAAAAD/AAEAAAAAAAAA/wAAAAAAAAAAAQAAAAEAAAAAAAABAAAAAAAAAP8AAAABAAAAAAH/AAABAAABAQAAAAAAAAAAAAAAAAAA/wH/AAAAAAAAAP8AAAEAAAEBAAAAAAAAAAAAAAAA/wD/AAAAAQAAAAAAAAD/8/8A/dv8AP3a/AD/7f4A/wD/AAEAAAAAAQAAAQAAAP8B/wAAAAAAAAH/AAAAAAD/Af8AAAAAAAAAAAAAAAAA/wAAAAEBAAAAAQAAAAAAAAAAAAAAAP8AAAAAAP7v/gD/8v4AAAD/AAABAAABAQAAAAAAAAAA/wAAAAAA/wEAAAAA/wAAAP8AAAEAAAABAAAAAAAAAAD/AAEBAAAAAAAAAAEAAAAAAAAAAAAA/wD/AP/q/gD92vwA/dv8AP/2/gAAAQAAAAAAAAEAAAAAAQAAAAEAAAEAAAD/AP8AAAAAAAAAAAABAAAA/wD/AAABAAABAQAAAAAAAP8A/wABAQAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAQAA/wAAAAAA/wABAAAAAAAAAP8AAAAAAAAAAAEAAAABAAAAAAAAAQAAAAAAAAD/AAAAAQAAAAEAAAAAAAAAAAEAAAEAAAAA/wAAAQEAAP8AAAAAAAAAAQAAAAABAAAAAAAAAQEAAAAAAAAAAP8A/wAAAAEAAAAAAAAAAAD/AP8BAAABAQAAAQH/AAABAAAAAQAAAAEAAP8A/wABAQAAAAEAAAEBAAAAAf8AAAEAAAEBAAAAAQAA////AAAAAAAAAQAAAAEAAAEB/wAAAAAAAAEAAAABAAD/AP8AAQEAAAABAAAEAAH/AAAAAAAAAAAAAQAAAAABAAD/AP8AAQEAAAAA/wAAAAAAAAH/AAEAAAAAAAAA/wD/AAEAAAAAAP8AAAABAAAA/wAAAAAAAAEAAAAA/wAAAAAA/wAAAAAAAAABAQEAAAD/AP8AAAABAAAAAAEBAAAA/wD/AQAAAQABAAAAAAAAAP8A/wEAAAEAAAAAAQAAAAAAAAAA/wAAAAAAAAH/AAAAAAD//wAA//H+AAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAA/wAAAAAAAAD+5v0AAP8AAP8AAAD+5P0AAfj/AAELAQAAAAAAAAAAAAAAAAD/AQAAAQsCAAEFAAABAAAA/wD/AAABAQAAAP8AAAEAAAAAAAAAAAEAAAH/AAAAAAD//wAAAP//AP/y/gD/+AEAARMCAAEA/wD/AAAAAQEAAAAAAAD/AP8AAAAAAAEBAAAAAAAAAAAAAP8A/wABAQAA//oAAP/2/QAA/wAA/wAAAAAAAAAAAAAA//P/AP/u/gAAAAAA//0AAP3h/AACGAMAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAIAAAEOAgABAQAAAAABAP8A/wABAAAAAAAAAAABAAD/AAAAAAAAAAEBAQAAAP8AAAABAP8A/wABAQAAAAAAAAABAQD/AAAAAQD/AAAAAAAAAAAA/wAAAAEA/wAAAAEAAAAAAP8A/wAAAAAAAQAAAAEBAAD/AP8AAQAAAAAAAAAAAAAA/wD/AAAAAAABAAAAAQEAAP8A/wABAAAAAAABAAAAAAD/AP8AAAAAAAEAAAABAQAA/wD/AAEAAAAEAQABAAAA/wAAAAEAAAAAAAAA/wAAAAEAAP//AAABAQABAAAAAAAAAP///wABAQAAAQABAAAA/wAAAAAA////AAABAAABAAEAAAD/AAAAAQD//wAAAAEAAAH/AAAAAQAAAAAAAAH/AQAAAAAA/wH/AAEAAQD//wAAAAEAAAD/AAABAQEA////AAABAQAA/wAAAQH/AAAAAQAAAP8AAP8BAAABAAAA+f4A/uD9AAAAAAAAAAAA/wAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAQD/AAAAAQD/AAAAAAAAAAEAAAD/AP8AAQABAP8A/wABAAEA/wD/AAEAAQAAAP8AAAABAP8A/wABAAEA/wD/AAEAAQD/AP8AAQABAP8AAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAISAgABEwIA/tv8AP7sAAABAAAA/wD/AAEAAQD/AP8AAhACAAMfBQAAAQAAAQABAAD/AAAAAAEAAQEAAAAA/wAA/wAAAAABAAAB/wABAQAA/vb/AAD6AAAA+/8AAPwAAAAEAQABAAAA/wH/AAEAAAAB/wEAAAAAAAABAAAAAP8AAP8AAAEAAQD/AQAA/uX7AP/x/gD/AAEAAQAAAP8AAAAAAAAAAQEAAAMnBAD+5/0A//L/AP/6AAD+4v0A/wAAAAAAAAAAAAAAAQD/AAAAAQD/AAAAAAAAAAEAAAD/AAAAAAAAAAAAAAABAP8AAAABAP8AAAABAP8A/wABAAEAAAD/AAAAAAAAAAAAAAABAP8AAAABAP8AAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAEA/wAAAAEAAAAAAAMrAgAABAEAAAEAAAEAAAAA/wEAAAAAAP8BAAABAP8AAP8BAAAAAAAAAAEAAAEAAAEAAAAA/wEAAAAAAP8BAAABAAAAAP8BAAAAAAAAAQAAAQD/AAAAAQAAAAAAAAABAAEA/wAAAAAAAAABAP8AAAABAAAAAAAAAAAAAAAAAAAAAQD/AAD/AQAAAQAA/wAAAAEAAAAAAAAAAAAAAAAAAQABAP8AAAAAAAAAAQD/AAAAAQAAAAAAAAAE//8AAAEAAQAAAQAA//8AAAEAAQAAAAAAAAABAAAAAAD//wAAAQAAAAEAAQAA/wAAAAAAAP//AQABAQAAAAAAAAEAAAAAAAAA//8BAAEAAAABAAAAAP8AAAAAAAD//wAAAQABAAAAAAAAAAAAAf8BAP8BAAAAAAAAAP8AAAAAAQAA/wAAAQABAAD/AAAAAAAAAP8AAAAAAAAA/wEAAAAAAAD/AAD/8/8AAAD/AAAAAAD/AAAAAQABAAAAAAD/AP8AAQAAAAAAAAAAAAAAAAAAAP8A/wABAAEAAAAAAP8A/wABAAAAAAAAAAAAAAAAAP8AAAAAAAAA/wAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAEAAQAAAAAAARcCAAIFAQAA/gAA/vT+AP/1/gAA/v8AAAAAAAEAAAAAAQAAAhgDAAEFAQAAAQAAAQsCAAAAAAD//wEAAQAAAAAAAAD/AAAAAf8AAP8AAAD/7f0A//P+AAAAAAAAAAAA//kAAAAA/wD//wAA/eD8AAEEAAAAAAAAAAEAAAEQAgACDwMAAAAAAP//AAABAAEAAAAAAAAAAAAA/wAAAhoEAP8Q/gAA/wAA//n/AADp/gAAAP8AAP8BAP7r/gD/9/8AAg8BAAAJAQABAQEA//v/AP/s/gD/AP8AAAAAAAAA/wAAAAAAAQAAAAAAAAAAAAEAAQD/AAAAAAD/AAAAAQD/AAEAAQAAAAEAAAD/AAAAAAABAAAA/wABAAEA/wAAAAAA/wD/AAEAAQAAAAAA/wD/AAEAAAAAAAAAAAAAAAAAAAD/AP8AAQABAP/0/gABEAMAAP8AAAAAAQD/AAAAAQAAAAH/AAAAAAEAAAAAAP8AAAABAAAAAP8AAAAAAQD/AAAAAQAAAAH/AAAAAAEA/wAAAAEAAAAA/wAAAAABAAAAAAD/AAAAAQAAAAAAAQAAAQAA//8AAAEAAAAAAAAAAAAAAP8AAAABAAAAAAABAAAAAAD//wAAAQAAAAAAAAAAAAAA/wAAAAEAAAAAAAEAAAAAAP8AAAABAAAAAAAAAAAAAAAEAQEAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAD/AP8AAf8BAAAB/wAAAAEAAQEAAAAAAAD/AAAAAQH/AP8AAQABAAAAAAAAAAAAAAABAAAAAAAAAP8AAAAB/wAAAAH/AAAAAQABAAAA/wEAAAEAAAAAAAAAAP8AAAAB/wAA/wEA/wEAAAH/AAD/Af8AAQABAAAAAAD/8/4A/wABAAEAAAABAP8A/wAAAAAA/wABAAEAAAAAAP8AAAABAP8A/wABAAAAAAD//wAAAQEAAAAAAQD/AP8AAQAAAAAAAAD/AAEAAAAAAP8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAEAAAD/AP8AAAABDQEAAhgDAAEBAQAAAAAAARUCAP7m/QD/6/4A/wAAAAEA/wD//wEAAOz+AAIiBAABCAIA/wH/AAD/AAAAAf8AAP8BAAABAAABAAAAAAAAAAEAAQAAEwIA//3/AP/o/gD//wAAAQAAAAAAAQABAAAA//X/AAAA/wAAAgEAAhwDAAEPAgAAAQAAAP8AAAEBAAAAAAAAAAAAAAD/AAAAAf8AAQcBAAEHAgD+9P8A/+b9AAAAAAD/AAEAAAD/AADu/gABGAIAAhcDAAEBAQAAAAAA////AP31/wAB9/8A/wABAAAA/wAAAAEAAAAAAP8AAAABAAAAAAABAAAA/wAAAAEAAAD/AP8AAAABAP8AAQAAAAAAAQAAAAAAAAAAAP8AAQAAAAAAAQD/AP8AAAAAAP8AAQABAAAAAAD/AAAAAQD/AP8AAQAAAAAA//8AAP/z/wAAEAAAAAEAAAAAAAABAAAAAP8AAP8B/wABAAEAAAAAAAEAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAA/wD/AAEAAQAAAAAAAAAAAAAAAAAAAAAA/wABAAEAAAD/AAAAAQAAAP8AAQABAAABAAAAAAAAAAD/AAH/AQAAAf8AAAABAAAA/wAB/wEAAAEAAAAAAAAAAAAAAf8AAAABAAAAAAAAAAAAAAH/AAAAAQAAAAAAAAAAAAAE/wD/AAEAAQAAAP8AAAAAAP8AAAABAAEAAAD/AAAAAAAAAAAA/wAAAAEAAAAAAAAAAAH/AAEAAAAAAP8AAAABAAAAAAABAP8AAAAAAAEA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AQAAAQAAAAEA/wAAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAB/wABAAAAAAAAAP/+/wD/9f8AAQAAAAAAAAD/AAEAAQAAAAAAAQAAAAAA/wAAAAEAAAD/AAEAAAAAAAEAAAD/AQAAAAAAAAAAAAABAAEAAAAAAAAAAQABAAAAAAAAAAAAAAD/AAAAAQAAAP8AAAABAAAA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AQADIgQAAQcCAP8AAAAA/wAAAAAAAAAAAAABAAAA//8AAAEKAgAEJQIAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAH/AAAAAAEAAAAAAAAAAAAAAAAAAP8BAAAAAAAAAAAAAP8AAP8AAAABAAAAAP8AAAABAAAAAAAA//8AAAEAAAD//wAAAQAAAP8BAADa7/IANBgTAP8AAAAiEA0AcTMqAAEAAQAEAwEAAAD/AAAAAADb7/IAAP8AAAEAAQAAAAAAAAAAAAD/AAAAAAEA/wAAAAEAAQD/AAAAAQEAAAAAAAAA/wAAAAAAAAAAAQACAQEAAAAAAAAAAAAAAAEAAAAB/wAAAQAAAAD/AAAAAAAAAQAA/wEAAAABAAAAAQAAAAAAAAAA/wD/AQAAAAEAAAAB/wAAAQAAAAEAAAABAAAAAP8AAAEAAAABAAABAAAAAAAAAAD/AAAAAQAAAAEAAAABAAABAAAAAAAAAP8AAAAAAQAAAAAAAAABAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAB/wAAAP8AAQEAAAEB/wABAAAAAAD/AAAAAAD/AQAAAQAAAAABAAAAAQAAAAEAAP8AAAABAAAAAAEAAAABAAAAAAAAAAH/AAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAABAQAAAAAAAAAB/wABAAAA/wAAAAAAAAABAQAAAAEAAAEAAAAAAAAA/wAAAAEBAAAAAAAAAQAAAAEKAgADJAUAAQgBAAAAAAAAAAAAAAAAAP/r/gD+4PwA//7/AAABAAAAAQAAAAAAAAAAAAABAAAAAAEAAAD3/wAA+QAAAg8CAAMnBQADJgUAAQoCAP/z/wAA/QAAAAAAAAEAAAAAAQAAAAEAAAAAAAABAAAA//3/AP3e/AD+7v4AAAD/AAAAAQAAAAEAAAoCAAMlBQABBwIAAAAAAAEBAAD/AAAAAAD/AAAAAAAAAQAAAQAAAAAAAAAAAAAAAAEAAAABAAABAAAAAAEAAP8BAAAAAAAAAAEAAAEAAAAAAQAA/wEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAP8AAAAAAQAAAQAAAAAA/wAAAAAA/wEAAAEAAAAAAQAAAAEAAAABAAD/AAAAAQAAAAABAAAAAQAAAAAAAAABAAAAAQAAAAEAAAD/AAAAAAAAAAEAAAABAAD/AQAAAAAAAAEAAAAAAAAAAAEAAP//AAAA/wAAAQEAAAABAAABAAAAAAAAAAAAAADD5OkA8vn7AAH/AQAAAAEABQICAAQCAgAAAAEA//8BAPD4+gDI5+sAAAEAAAABAAAAAQAAAAAAAAABAAAAAQAAAQEAAAABAAABAQAAAAAAAAAAAAAAAQAAAAEAAAABAAADFygWgAAAAAAAAQAAAP8AAAAAAQABAAAAAAABAAABAAAB/wAAAQAAAAAAAAABAAEAAAAAAAEBAQAB/wAAAAAAAAAAAQAAAQAAAP8AAAAAAAABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAP8AAAEBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABAQAAAAABAAAAAQAAAAEAAAEAAAAAAQAAAAAAAAABAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAQAAAAABAAEBAAAAAAEAAQABAAAAAAAAAf8AAAABAAEAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAwEAARECAP/3/wAA+v8AAQABAP8A/wD/+AAA//T/AAENAgABAgEAAAAAAAAA/wAAAAEAAAAAAP7v/QACDwIAAhoDAAACAQABBAEAARICAAD/AAAA/gAAAggCAAAAAAAAAAAAAAAAAAAAAAD/+v8A/d37AP/2/wAAAAAAAAAAAAEBAQACEAEAAyAEAAEDAQAAAP8AAAABAAAAAAABAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAEAAQAAAAAAAAAAAAAAAQAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdsvNnwAAIABJREFUAAAAAAAAAAAAAAAAAACA/38AAAEAAAAAAAAA/wD/AAEAAQAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPr+/gDa7/IAFAkIABAIBgACAQAAAQEAAP//AADg8fQArNrhAPT6/AAAAAAAAAAAAAABAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAD/AAAAAAAAAAAAAAABAAAAAAAAAP8AAAEtUiv/AAD/AAAAAQAAAP8AAAAAAAAAAQAA//8AAQEBAP8A/wAAAAEAAAD/AAAAAAAAAAEAAAD/AAAAAAABAAEA/wD/AAAAAQAAAP8AAAAAAAAAAAAA/wAAAAEBAAD//wAAAQAAAP8AAAABAQAAAP8AAAAAAAAAAAAAAAEAAP//AAABAQAAAP8AAAAAAAD/AQAAAf8AAQABAP8A/wAAAAEAAQD/AP8AAAAAAAEAAAD/AAAAAAAAAAAAAP8BAAABAAAAAP8AAAAAAAAAAAAAAAEAAAD/AAAAAQAA//8AAAEBAAD//wAAAQAAAAABAAAA/wABAAEA/wD/AAAAAQAAAP8AAf8BAP8B/wAA/wEAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAQAA//8AAP8AAP7k/QD/7v4A/wAAAAEAAAAAAAAAAAYAAAMgBAAACQEAAAEAAAH/AAD/AQEAAPz/AAADAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAD9AAAABAAAAAAAAAD/AAAAAAAAAPX/AP3g/AAA/AAAAAAAAAAAAAAAAAAAARUCAAIaAwAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA//8AAAEAAAD/AAAAAQEAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAQAAAAAAAAAAAAD//wAAAQAAAAAAAAAAAQAAAP8AAAAAAAD/AQAAAQAAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAEAAP//AAABAQAA//8AAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAP//AAABAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAQABABAHBgAUCQcAAAAAAOz3+QDw+foA////AAABAAAA/wAAAAEAAAAAAAAAAAEAAP//AAABAAABAAEA/wD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEuUSv/AAEAAAAAAAAA/wAAAAAAAAABAAAA/wAAAAEAAP8AAAAB/wAAAAAAAAABAAAA/wAAAAH/AAAAAQAA/wAAAAAAAAABAAAA/wAAAAEAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAAB/wAA/wEAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAP8BAAAAAAAAAAAAAAH/AAD/AQAAAQAAAP8AAAAB/wAA/wEAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAP///wD+6f0A/+j+AP//AAAAAP8AAAAAAAEDAQACIAQAAg0BAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8A/wD/8P4A/uL9AP//AAAA//8AAAABAAECAAACGgMAARQCAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAD/AAAAAP8AAAEBAAD/AAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAEAAAD//wAAAQEAAP8AAAT/Af8AAAABAAAAAAAAAf8AAAAAAAAAAAAAAQAAAAABAAAA/wD/AQEAAQAAAP8A/wAAAQAAAAAAAAAA/wAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQEAAAD/AAEAAQD/AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAQABAP8A/wAAAAEAAQD/AP8AAAAAAAAAAAAAAP8AAAEAAAAAAAAAAAEAAAD/AAABAAAAAAAAAAAAAAEAAQD/AAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAA/wAAAAEAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAQAAAAD/AAABAAAAAAAAAAAAAAAAAAAAAAAAAQABAP8A/wAAAAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQACFwMA/wYBAP7j/QAA/wEAAAAAAAD+AAD+3vwAABwDAAETAgAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAQD/AP8AAAAAAAAAAAAAAAAAAP8AAP7p/gD/6P0AAAAAAAEAAAAAAQEAAAIAAAIfBAABDgEAAAEAAP8A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEA/wD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEA/wAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAQAAAP8AAP8AAAABAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAEAAQD/AP8AAAAAAAD/AAAAAQAAAAAAAAAAAAAAAQAAAAAAAAEBAQD/AAAAAAAAAAAB/wAAAAAAAAAAAAAAAAAAAQEAAAD/AAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAQAAAP8AAAEAAAQB/wEAAAEAAAD/AAAAAAEAAAD/AAABAQAA/wAAAAAAAAAAAQAAAAAAAAAAAAEBAQAWCggAYCskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6/v4Ak87XAP3+/wAAAAAAAAAAAAABAAAYCwoAXSoj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AQABAAIhBAADKgUAAxgEAAEBAQABAAAAAQABAAD//wD+7P0AAAD/AAEBAAABBQEAAQAAAAAAAAABAAEAAQAAAAAAAAAAAP8AAAAAAAAAAAAAAP8A/wD/AAAAAQAAAAAAAAD/AAAA/wD/AAAAAAAAAAAA/wABAQAAPx0XABgKCAAAAAAAAAAAAAH/AAABAAEAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAP8AAAAAAAAAAAABAAEAAP8AAAEAAAAAAAAAAAAAAP//AAABAAAAAAABAAEAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAA//8AAAD/AAAA/wAAAP8AAC4VEQAKBQMAAAAAAAAA/wAAAAAAAAD/AAAAAAAAAAAAAP8AAAD/AAABAQEAAP8AAP//AAAA/wAAAQABAAD/AAAA/wAAAP8AAAIBAQAAAAH/AAABAAD/Af8AAAH/AAEBAAAAAP8AAAEAAAAB/wAAAP8AAAAAAAAA/wAAAAAA/wAAAAAAAQD///8A/wAAAAD/AAD//wAA//8BAP//AQAAAAEA//8AAAD/AAD//wEA//8AAAD/AQAAAAAAAAAAAAAAAAAAAQAAAAD/AP8A/wAAAAAAAAAAAP//AAAA/wAA//8AAAAAAQD//wAAAP8AAP//AAD//wAA//8BAAD/AQD//wAA/wAAAP//AAAGAgMAQx4ZAAABAAAAAAAA/wD/AAABAAD/AQAAAAAAACMQDQAAAAEA//8AAP8AAAD//wAAAP8BAP//AAAAAAAAIhANAAEAAAD/AAAAAAH/AAEAAAAAAQAAAAEAAAABAAD/AP8AAAEAAAABAAABBQAAAQABAP//AQD/8/8AAPj/AAAAAAAAAAAA/wD/AP8AAAAAAwAAAQ0CAAABAAABAAEA/wAAAP///wD/AAAAAhcDAAABAQAA/wAA/wABAAD6AAD+7v4A/wD/AAABAAD+7P4A//z/AAEAAQD/AAEAAAMAAAEYAwAAAAEA//8BAAAAAAAAAAAAAAMAAAEMAQABAwEAAAEAAAABAAD/AP8A/wEAAP/x/gAA+gAAAP8BAAABAAAABAAAAAAAAAAA/wAAAQAAAAEAAAAAAAAA/wEA//8AAP//AQD//wEAAP8BAP///wD/AAEA//8B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AAAAAAD/AAAAAQD/AAAAAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAIBAAEAAP8AAAD/AAABAAEAAP+2zmKgAAAgAElEQVQBAAD/AAAAAAEAAP8AAAD/AQAAAAAAAP8AAAD/AQAAAAAA//8AAP8A/wD///8AAP8AAP///wAAAAAAAAAAAAEAAAAA/wEAAAAAAAABAAAA/wAAAP8AAAD/AAD//wAAAP8AAAAAAAD///8AAAABAP//AAAAAAAAAAAAAP//AAD///8A////AP//AAAAAAAAAP8AAAAAAQAA/wAA/v7/AMPk6QD/AP8AAAAAAAAAAAD/AP8A////ABcLCQAA/wAA//8AAAAAAAAA/wAAIQ8NAAEAAAAAAP8A/wAAAAD/AADX7fAA//8AAP///wD///8A//8AACIQDQAAAAAAAAABAAEAAAAAAAAAAP8AAAAAAAAAAAAAAAEAAAD/AAAAAQAAAAMAAAD/AAAAAf8A//3/AP/w/gABAAAAAP8BAAAAAAAA/wEAAAAAAAAAAQABBwIAARADAAEIAgAAAQEAAP8AAAAAAAAABgEAAh8EAAEAAQABAwEAAP8AAAAAAAAABAAAAAEBAAMfBAAABAEAAAAAAAD/AAABAAEAAAYBAAIMAgABBAEAAAAAAAD/AAAAAAAAAP8AAP8AAAAA/wAA/uz+AP8A/wAAAAAAAQD/AAAEAQABAAEAAAAAAAAAAAAAAQAAAP8AAAAAAAD//wEAAAD/AP///wD///8A/wD/AAAAAAAAAAAAAP8AAAD/AADe8fQAAAAAAP///wD///8AAAAAAAAAAAAKBQQAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAA/wD/AP///wD///8AAAAAAP//AAAAAAAAAP8AAAAAAAAB/wAAAAAAAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAD/AAD/AP8AAP//AAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAP8A/wD///8A////AP//AAD+/wAAAAAAAAD/AAAXCggAIA8MAP//AAAA//8A//8AAP///wAAAAAA////AP///wAAAAAAAP8AAAD/AAD//wAAAP8AAAD/AAD//wAAAP8AAAD/AAAA/wAAAP8AAAL/AP8AAAEAAAAAAAD/AAAAAAEAAAEBAAAAAQAAAAEAAAABAAAAAAAA/wD/AAAB/wAAAAAAAQEAAAEAAQABAQEAAQEBAAEBAAAAAAAAAAAAAAAAAAD/AP8AAAEAAAD/AAAAAQAAAAAAAAABAAABAQAAAAEAAAAA/wABAQEAAAEAAAEBAAAAAAAAAAAAAAEBAAABAQEAAQEAAAEBAAAAAAAAAAEAAAAA/wAAAQAA/wH/AOr2+AD9//8AAAAAAAEBAAABAQEAAQEBAAwFBAAAAQAAAQEAAAABAAAAAAAAIg8NAAEBAAABAQEAAQEAAAAA/wDT6+8A/f/+AAEBAAABAQEAAQEAACEPDAABAQAAAAD/AAAAAAAAAQAAAAAAAAABAAAAAP8AAAAAAAABAAAAAAAAAAQAAAEBAQABAAEAAAABAP7s/QD/AP8AAAH/AAABAAAAAf8AAAAAAAAB/wAAAQAAAQAAAAAB/wAA/wAAAAEAAAAAAAABAQAAAQoBAAAHAAAABQAAAAEAAAAAAAABBAEAAAoBAAAHAAABAQAAAAAAAAABAAAAAQAAAQEAAAAAAAD/AQAAAAAAAAABAAAAAAAAAAEAAAEAAAD//v8A//D+AAEAAQAAAAEAAAABAAEEAAAAAQAAAAAAAAABAAAA/wAAAAEAAAAAAAABAQAAAQEBAAEBAQABAQEAAQEBAAAAAAAAAQAAAAAAAAABAAD///8AAAEAAAEBAQABAQEAAQEAAAEBAQD9/v4A/wEAAAAA/wAAAQAAAAAAAAAAAAABAQAAAQEBAAEBAQABAQAAAAAAAAEBAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAf8AAAEAAAABAAAAAAAAAAAAAAEBAAABAQEAAQEBAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAEBAAABAQEAAQEBAAEBAQD8//4AAP8AAAABAAA1GBQAAgEBAAEBAAAAAQEAAQEBAAEBAAABAP8AAQEBAAEBAQAAAAAAAAAAAP8BAAAAAQAA/wD/AAAAAAABAQAAAAEAAAABAAAAAAAA/wD/AAIBAQAAAAAAAAABAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAf8AAAEAAAAAAAAAAAAAAAAAAP8AAAAA/wAA/wAAAAAAAQAAAAAAAAD/AAAAAAABAQAAAAD/AAABAAAAAAAAAAH/AAAA/wAAAAAAAAD/AAABAAAAAP8AAAD/AAAAAAAAAAAAAAAAAP//AQAAAAAA//8BAAAAAAAAAAAAAAD/AAABAAAAAP8AAAAAAPz//gD+//8A/wAAAP//AAAAAAAAAAAAAAMCAQAAAP8AAAD/AAAAAAADAgEAHg4LAAAAAQD//wAA//8BAPv+/gDi8/UA6/b4AP//AQAAAAAA/wABAA8HBgATCQcAAAAAAAAB/wAAAAAA/wH/AAAA/wAAAQAAAAD/AAAAAAABAQAAAAMBAAAAAAAAAAAAAQAAAAD4AAD/9f8AAAAAAAAA/wAAAAAAAAH/AAAAAAD/AP8AAAH/AAAAAAAAAf8AAAD/AAABAAAAAAAAAAAAAAD/AAAABQEAAAD/AAAB/wAABQAAAP8AAAAAAAAAAAAAAAH/AAAAAAAAAP8AAAD/AAABAAABAP8AAAH/AAAA/wAAAQAAAAD/AAAB/wD/7/4AAP0AAAAAAAABAAAAAAAAAAAEAQAAAP8AAAH/AAAA/wAAAQAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAP8AAAAAAAAAAP8AAAH/AAAA/wAaDAoAAAAAAAAAAAAAAAAA//8AAPz+/gDw+foAAQAAAAABAAAAAAAAAAAAAP8AAAD//wAAAAAAAAAAAAD//wEAAAAAAAAA/wAAAAAAAAEAAAAA/wAAAf8AAAAAAAAB/wAAAAAAAAD/AAAAAAAAAAAAAAAAAP//AAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8B/wAAAP8AAAAAAAAAAQAAAAAA//8AAAAAAAD7/f4AAAEAAAwFBAArFBAA//8AAAD/AQD//wAAAAAAAP//AQD/AAEAAAAAAP//AAAAAAAA/wH/AAEA/wABAAAAAQEAAAAB/wD/AP8A/wD/AAAA/wAAAf8AAQEAAAT/AAAAAQAAAAAAAAABAAEAAP//AAABAQAA//8AAAEBAAAA/wAA/wEAAQEAAP8A/wAAAAAAAP8AAAAA/wAAAAEAAP//AP8AAAAoEg8AEQgGAAAAAAD+//8A9/v9AOr2+ADl9PYA+/7+AAAAAAAA/wAAAAEBAAAAAAAAAAAAAP//AAABAAAAAAAAAAAAAAAA/wD//wEAAAD/AAD/AQAAAAAAAAAAAAD/AAAAAQEAAQAAAAgDBAADAQIAAP8AAAAAAAD///8AAAABAPr9/gAAAAEAAP8AAAAAAAAaDQkACQQDAAAAAAAAAAAAAQD/AOn2+AD5/f4A4vP1ABgLCgD//wAAAAD/AAEAAAAhDw0A6/f4AP//AQAAAP8AAQABAAAAAAAAAQAA////AAEBAAAAAAEAAQQAAP4AAAABAAAAAAQAAP/8AAD/7f4AAQsDAAAAAQAAAf8AAP8BAAAB/wAA/wEAAAAAAAABAAD///8AAQABAAAAAAAAAQAA//X/AAD6AAABBgEAAAAAAP//AAABBgEAAPb/AAD4/wAACAEAAAABAAABAAAAAAEAAP8AAAAAAAAAAQEAAAAAAAD/AAAAAAAAAAEBAP///wD+7f4A/wAAAAEEAAD//AAAAQAAAAADAAAA/wEAAAAAAAABAAD///8AAQEBAAAAAAD//wAAAAAAAP//AAAAAAAAAAAAAAcDAwD/AAAAAgABACURDQAtFBEA//8AAAAAAAAAAAAAAAD/AOf09wD2/P0AAP8AAAABAQD///8AAAAAAAD/AAAAAAAA////AAAAAQAAAQAAORoVAPX7/AD+//8A9Pr8AOn29wDk8/UA+/3/AAABAQAAAAAAAP8AAAAAAAAAAQAAAAAAAAAAAAD///8AAAABAAAAAAAAAAAA////AAEAAQAAAQAAAAAAAP///wAAAAEAAAAAAP8AAAD6/f4AAAAAADEWEgAFAgIAAAAAAP8A/wAAAAEA5fP2ABoMCQAA/wAA/wABAAAA/wAAAAAAAQABAAAAAAAAAAAAAAAAAAAAAQABAAAAAAAAAAAA/wAAAAEAAAAAAAQB/wEAAAEAAAD/AAD/AAAAAQABAP//AAABAAEAAAAAAAD/AQAAAAAAAP8AAAABAQAAAAAAAAEAAAEAAAAAAP8AAQAAAAAAAAAlEQ4AJBANAAEBAQAAAP8AAAAAAP//AAD4/f0A0OruAMTl6gD4+/0AAP8AAAAAAAD/AAAAAQABAAD/AAAAAAAAAAAAAAEBAAAAAAAA//8AAAABAAAAAAAAAP8BAP8A/wAB/wAA/wAAACIQDAACAgAAAQD/AAAAAAD/AAAAAQD/APD5+gD//wAAAQAAAAAAAAAiDw0AAQEAAAAA/wAAAAAAAAEAAOLy9AAA/wAA4vL1ADYYFAABAQEAAAAAAP8AAAAiDwwAy+jsAAAAAAAAAAEA/wAAAAEAAAAA/wAAAAABAAD/AAAAAAAAAAMBAAEA/gD/AAAAAxgEAP7o/QD/8f4AAPwDAAAEAAAA/wAAAAAAAAAAAQAAAAAAAAAAAAD/AAAAAAEAAAAAAAAAAAD//P8A/uP8AAACAAAABAAAAP8BAAAAAAAABgAAAAAAAP3i/QADJAEAAQIBAP//AAABAAAA/wAAAAEAAAAA/wAA/wAAAAEAAAAAAAAA//8AAP/2/wAA9/8AAQkBAAEOAQAA6f0A//8AAAIDAQD/AAAAAQAAAAD/AAAAAAEAAP8AAAAAAAAAAf8AAf8AAAABAAD/AAAAAf8AAGoxKAAAAAAAAgAAAAIBAQABAAAAAAH/AAAAAAAAAAAA//8AAMvo7AAA/wAAAAAAAP//AAABAAEAAAAAAAEB/wAAAAAA/wAAAAEA/wAAAAAAKxQQAAEAAAAAAAAA/wAAAAD/AAD3/P0AzOjsAMbm6wD6/f4AAQAAAAAAAAAAAAAAAAAAAAEA/wD/AAAAAQH/AP//AAAAAAAAAQABAP8AAAABAAAAAAAAAAABAAABAP8AAAAAAAAAAAD4/f0ABAIBADIXEwABAQAAAAD/AAAAAAD+//8A3/HzABsNCQAAAAAAAAD/AAAAAAAAAAAAAP8AAAAAAAAAAAAAAAABAAAAAAD/AAAAAQAAAAAAAQAAAAAAAAAAAAIAAQAAAAD/AAABAAABAQAAAAH/AAABAAAAAP8AAAAAAAABAAAAAQAA/wAAAAAAAAAAAAAAAAAAAP//AAAA/wEA/wAAAAD/AQD//wAAAAABAP//AAAAAAEA//8BAAEAAQAJAwQAORoWAGMtJQATCQcAAQEAAAABAAABAQAAAAD/AAABAAAAAAAAAAAAAP//AAAA/wAAAAABAAAAAAAAAAAAAAEAAAEBAQAAAQAAFwsIAEIeGQAAAAEAAAABAP//AQAB/wEAAAABAOX09gABAQAAAAAAAAABAAAiEA0A//8BAP//AAAAAAEA//8AAODx9QAAAAAA4/P1AP7/AAAAAAAA//8AAAAAAQAdDgsABQICAP8AAAAAAAAAAQEAAAAAAAAAAf8AAQAAAAABAAAAAAAAAAMAAP8AAQABAAEAAAIAAAIfBAAA/wAA/u7+AAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAABAAABAAAAAAEAAP/7/wD93fwAAPkAAAAGAAAAAQAAAAEAAAEAAAAAAwAAAAQAAAD3/wD93vwA//z/AAEBAAAAAQAAAAD/AAABAAAAAQAAAQEAAAAAAAAAAQAAAAD/AP/r/gAAAwAAAyAEAAD+AAAAAAEAAAEBAAADAAABAQAAAAEAAAAAAAABAQAAAAEAAAAAAAAB/wEA/wAAAAD/AQABAAEA/wABAAQBAQAEAQIAAgICAAEAAQD/AAAAAAABAAD/AQAAAAEA3fDzANbt8AAAAQAAAAEAAAEAAAAAAQAAAAAAAAAAAQD//wEAAf8BAAAAAQAAAAEAAf8BAP//AAAAAAEAAAABAAAAAQAJBAMAPRwXAF4rIwAMBQQAAAAAAAABAAAAAAAAAAAAAP8AAQABAAEAAAABAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAH/AQAAAAEA//8BAAAAAQD4/P0AKBIPAA0GBQD/AAEA//8AAAAAAQDk8/YA+v7+AP//AAAAAAEAAP8BAP//AQAAAAAAAAEAAAAB/wAAAQAA/wAAAAABAAABAf8AAAEAAP8A/wAAAQAAAAH/AAQAAP8AAAABAAAA/wD/AAAAAQAAAAAA/wAAAQAAAAD/AAAAAAAAAAAAAQEAAP8AAAAAAAAAAAAAAAEBAQAAAAAAAQABAAABAAABAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAABIIBwBYKCEAndPbAPj9/AAAAAAAAAEAAAAA/wAAAAAAAAAAAAEBAQAAAAAAAP8AAAAAAAA4GhUAKhMQAAEBAQALBAQAGgwJAAMCAgAAAAAAAAAAAAEBAAAAAAAA+Pz9AN/w9AAAAP8AAAEAAAkEBAAYCwkAAQEAAAAAAQAAAAAA+v3+AOb09gAAAQAA9fv7AOz3+AAXCwkAAQEBAAAAAAAIAwMAGgwJAODy9AAAAAEA/wD/AAEBAQAAAAAAAAEAAAAA/wAAAQEAAAMAAAEAAAD/AAAAAPwAAAIRAQAAGgMA/ur9AP8VAgAAAQAAAAEAAAAA/wD/AQAAAQAAAAAAAAAAAQAAAAAAAP/y/gD/9/8AAQAAAAEHAQABAQAAAAD/AAABAAABAAAAAAgBAP/0/wAB9f8A//X+AAAQAgABAAAAAQEAAAAAAAAAAP8AAAAAAAABAAAAAAAAAPoAAP/y/gACIAQAAQcAAAD8AAAAAAAAAf8AAAADAAD/AP8AAQAAAAABAAAAAAAAAAABAAAAAAAAAQAAAQABAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAABAAABAAEAAAAAAAABAAD///8AzentAP8AAAAAAP8AAAAAAAABAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAEAAAEAAQAAAAAAAQAAAAABAAAAAAEAAAAAABoMCgBRJR4ApdfeAP8A/wAAAAEAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAEAAP8A/wABAAEAAAAAAAABAAAAAAAAAQEAAAAAAAD2+/wAQh4ZAAEBAQAAAAAAAAEBAAAAAADU7O8AEQgGAAEBAQAAAAAAAAH/AAEAAQAAAAAAAAD/AAAAAAAAAP8AAQEAAAAAAAD/AAAAAQD/AAEBAAAAAP8AAAAAAAIAAAEAAAAAAAAAAQAAAAEAAAAAAAAAAQAA/wAAAAABAAAAAAAA/wEA/wABAAAAAAAAAAAAAAAAAAAA/wAA/wAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAA//8AAAD/AAAAAAAAAAAAAAAAAAARCAcAOxsWAAD/AQAAAAEAAP8AAAAAAQAAAAAAAAAAAAAA/wAAAAAAAAD/AAAAAAAbDAoAKBIPACgSDwAdDQsAAgICAP//AAAAAAAAAAAAAP//AAAA/wAAz+ntAPj9/QAA/wEAAAABAB8ODAADAQEA//8AAAAA/wAA/wAA6PX3APj9/QAA/wAA/wAAAN/x9AAAAAAAAAD/AP8AAAABAAAAIg8NAAH/AQAAAAAAAQABAAAAAAAA/wEAAAAAAAAAAQAAAAAAAQMBAAAA/wAAAP8A//z/AAAAAQABFAIAAQ4CAP/v/gAAAAAAAP8AAAAAAAAB/wEAAAABAAD/AQAAAAEAAAABAAEMAQABAAAAAAD/AAAKAgAAAAEAAP8BAAAAAQAAAAEAAQkBAAAAAAAAAQAAAQsCAAEAAQAA/wEAAAABAAAAAAAAAAEAAP8BAAAAAQAAAAEA/uz9AAIZAwACDQIAAAABAAD9/wAAAP8A/wEAAAADAQABAAEAAAABAAD/AQAAAAEAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAA//8AAAD/AAAAAAAA/wAAAAD/AAD//wAAAAAAAAAAAAABAQEAVCYfACsTEAAAAAEAAAABAAD/AQAAAAEAAAAAAAAAAAD//wAAAP8AAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAP//AAAA/wAAAAAAAP8AAAAgDwwAKRMPAAAAAQAAAAAAAAAAAP//AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAD/AAAAAAAA/wAAAP///wAIBAMAHQ4LAP//AAAA//8AAAAAAPr9/QDX7fAACAQDAAAAAAAAAAAAAAABAP8A/wAAAAAAAAABAAAAAQAAAAEAAAABAAAAAQABAAEAAAABAAAAAQAAAAEAAAABAAL//wAAAP8AAAD/AAAB/wAAAP8BAAAAAAAAAAEAAP8AAAD/AQD/AAAAAP8AAAD/AAAAAAAA////AAAAAQD/AP8AAP//AP///wDl9PYA1uzwANbs8ADi8vQA/v/+AP8A/wD///8A////AP//AAAAAP8AMBYSAAUDAQAA/wAAAAABAP//AAAAAAAAAAAAAP//AAD///8AAAAAAP//AAAAAAAAAAAAAP//AAD/AP8AAP//AAAA/wAAAP8AAP//AAAAAADq9/cAwuXpAAD/AAAAAAAAAP8AACMQDQABAQAAAAD/AAAAAAD/AAAA3/H0AP//AAAAAAAAAP8AAN/x8wD///8AAP8AAAD/AAD/AAAAIhANAAABAAD//wAAAP8AAAD/AAAAAAAAAP8AAAD/AAAA/wAAAAIAAP8AAAAA/wAAAP0AAAAAAAABAAEAAhsDAP/8AAAA/wEAAAAAAAD/AAAAAAAAAP8AAAAAAAAA/wAAAP8AAAAHAQAACwEA//8AAAEJAQAA/wAAAAAAAAD/AAAA/wAAAQkBAAEA/wABDgEAAAQAAAD/AAAAAAAAAP8AAAD/AAAA/wAAAAAAAAD/AAD//v8AAAQBAAEUAgAAAAAAAP8AAP/9AAD//wAAAAAAAAACAAAA/wAAAP8AAAAAAAAA/wAAAP8AAAAAAAD//wAAAAD/AP///wD///8AAAAAAP8A/wD///8AAP//AP8A/wAAAP8A////AP///wAAAAAAAgEBAEwjHQAUCQcAAP8AAAAAAAD//wAAAAAAAAD//wAAAAAA/wD/AP///wD///8A4fL0ANzw8gDr9vgA////AAAA/wD/AP8A////AAD//wAAAAAAMhcTAAAAAAAAAAAAAAAAAAAAAAD/AP8A////AAAAAAAAAAAA//8AAAD/AAAAAAAAAAAAAP8A/wD///8AAP//APj9/QAmEg4AAgAAAAAA/wD/AAAAAP//ANrv8gD2+/0ACAMDAP///wD///8A////AAD/AAAAAAAAAP8AAAD/AAAA/wAAAP8AAP//AAAA/wAAAP8AAAAAAAAA/wAAAP8AAAQBAQAAAAAAAAAAAAAAAAAAAP//AAAAAQAAAf8AAAABAAAA/wAA/wEAAQEAAP8AAAAAAAAAAQEBAAAA/wABAQEAAAAAAAEA/wDO6e0A0OruAAAAAAAAAAAAFQkHAFsqIwANBgQAAAAAAAAAAAAAAAAACQQDABkMCgDi8vUAAAAAAAEAAAAAAAAAAAAAAAEBAAAAAAEAAAD/AAAAAAAAAAEAAQEAAAAAAAAAAAAAAAABAAAA/wAAAAEAAAH/AOr19wCp2N8A+v3+AAAAAAAAAAAAAQEAACEPDAAAAAEAAQEAAAAAAAAAAP8A3vHzAAAB/wAA/wEAAAEAAOTz9gD8/v8ABQMCAAEAAAAAAAAAFwoIAAsFBAD1+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAQABAf8AAP7/AAAA/wD/AQEAAQEBAAIVAgAAAP8AAAABAAABAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAEAAQADGgMA/dz/AAEIAQAAAQAAAAAAAAAAAAAAAAAAAQkBAAACAQACGQQAAQEBAAAAAAAA/wAAAAEAAAAAAAAAAAAAAP8AAAABAAAA/wAAAhYCAAEBAQAAAAAAAAAAAAD9AAAAAQAAAQAAAAECAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAQAAAP8AAAAAAJ7T3AD5/f0AAgEBABIIBwA5GhUAHA0KAAAAAQAAAP8AAQEBAAYDAQA8GxcAsNziAAD/AAABAQAAAAAAAAABAAABAAAAAAABAAAAAAAAAP8AuuDmAOj19wAAAAAAKhMQAFElHgACAQEAAAAAAAAA/wAAAAEAHAwLAAUCAgD9/v4AAAAAAAEBAAAAAAEAAAAAAP///wAAAAAAAQEAAAAAAAAAAAAAAAAAAAEBAQAAAP8AAAABAPb7/QArExAAAQEBAAAAAAAAAP8A//8AAM7p7QAAAf8ABwMDAAEBAQAAAAAAAAAAAAAA/wAAAAAAAAEAAAAAAAAAAAAAAAD/AAEAAQAAAAAAAAAAAAAAAAAAAQAAAAAAAAT/AP8AAQABAP8A/wABAAAAAAEAAAAA/wAAAAAAAAD/AAAAAAAAAf8A/wAAAAAAAAAAAAAAAAAAAAAAAQAAAAAA/wAAAAD/AQAAAAAAAAD/AAAAAAD/AAAA6/f4AMTl6QBJIRwA//8AAAABAAABAAEAAQAAABUJCADi8vUAAAD/AAAAAAAAAAAAAAAAAAAAAQAA/wAA/wABAAEBAAD//wAAAQAAAAABAAAAAAEAAAAAAP//AQD2/PwAzejsAMbm6wD7/v0AAAABAI1zuh8AACAASURBVAAB/wAAAAAAEggIABAHBgD/AAAAAP8AAAEBAAD9//8AHA0LABgLCQAAAAAAAAAAAAAAAAD3/f0ABQMCAP//AAABAAEAAgEBACAODADV7e8AAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAIBAAEAAAAAAAEAAP0AAAABAAABAAAAAAD/AAEBAQAAAf8AAAAAAAAAAAD/Af8AAQAAAAAAAAAAAAEAAAD/AAAAAAABCgEAAiEEAAAFAAAAAAAAAAD/AAAAAAAAAAEAAAcBAAIiBAAABwEAAAD/AAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEBAAAA/wABAgAAAAAAAAAA/wAAAAAAAAABAAD+/wAAAAEAAAAAAAACAQAAAAAAAAD/AAAAAAAA/wEAAAH/AAAAAAD/AAAAAQABAP8AAAAAAAEAAP8AAOz3+AD5/f0AAAAAAOr29wDe8PMAZi8mABEIBwD//wEAAAAAAAEBAAAkEA0ABQICAPv+/QAAAAAAAAAAAAAAAQD//wAAAAAAAAEBAAAA/wEAAAAAAAAAAAAAAP8A1u3wADAWEQAjEA4A/wAAAAD/AQABAQAABAIBABAHBgDt9/gAAAAAAP//AAABAAAAAAEAAAAAAAAAAAAAAAD/AAAAAQAAAP8AAAAAAP//AAABAQEAAP8AABEIBgABAAAAAP8AAP8AAAAAAAEA6Pb2AOLy9QAAAAAABQMCAAD/AAD/AAAAAQEAAAD/AQAAAAAAAAAAAAAA/wAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBAAEAAAAAAAEAAQD/AAAAAQAAAAAAAAAAAP8AAAABAAAAAAAA/wAAAQEAAP8A/wAAAAAAAAAAAAAA/wAAAAEAAQAAAAABAAAAAAAAAAABAP8AAAABAP8AAAABAOf09wD///8AAQEAAAAAAQAAAAAAAAEAAAoFBAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA/wAAAQEAAQD/AAAAAQDe8fMA7/j5AAAAAAD8/v8A9Pr7AOf19wDk9PUA/P7/AAAAAAAAAAEAAP8AAP8AAAABAQAAIRAMAAEBAQAAAP8AAAEBAAAA/wAEAgIARR8ZAAAAAQAAAP8AAAABAP8A/wABAAEAAAD/AAEBAQAAAP8AAQABACIQDQDV7PAAAAEAAAD/AQAAAQAAAAAAAAAAAAD///8AAAEAAAAAAAD/AAAAAf8AAAAAAQAA/wAAAAEBAAAAAAD/AAAAAf8AAAABAAAB/wEAAAEAAAAAAAAAAAAAAP8BAAABAAAAAQAAAQwAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAEAAAELAQABAAAAAAABAP///wABAQAAAP8BAAABAAD///8AAQEAAAD/AQAAAQAA/wAAAAH/AAAAAf8AAP8AAAD+AAABAAAAAAAAAAABAAAAAAAAAP8BAAABAAAAAAAAAAABAAAAAAABAAAAAAAAAAEAAAAAAAAAAAEAAAAAAAAAAAEA////AAEBAQD6/v4A2+/yADYZFQABAQAAAAAAAAAAAAAIBAMADAYEAO/4/gAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAf8AAAAAAAD/AAAAAQEA////AOn1+AAjEA4AAQAAAAAB/wAAAAEAAQEBAAkFAwAA9wAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAP8BAAABAAAAAAEAAAAAAAEBAAAAAAAAAAEAAAIAAAAAAAEAAAAAAAEAAAAAAAAAzOftAP8AAAAAAAEABQICAAABAAABAAAAAAAAAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA/wAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAEAAAAAAAAAAAABAAAAAP8AAAAAAQAAAAAAAAAAAAAAAAAA//8AAAEAAP8AAAAAAAAAAAAAAAD/AAD/AAEAAQAAAAIBAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAADQ6u0A1uzxAAAAAAAAAQAAAP8AAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAIw8NAAAA/wAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAP8AAAAAAAAAAAAAAAAAAAAAACEPDAABAQAA//8AAAAAAAAA/wAAAAAAAAABAAABAAEA/wL/AAAA/wAAAAAA//4BAAD/AAAAAAAAAAAAAAAAAAABAAEAAAAAAAD/AQAAAAAAAP8AAAAAAAD/+/8AAAEAAAEEAQAAAAAA//X/AAD+AAABDgAAAAABAAAAAAD/AP8A/+v+AAEQAgAABQAAAP8AAAD5/wD/BQEAAQIAAAAAAAABAAEAAP8AAAABAAAA/wAAAQEAAAAAAAAA/wEAAAAAAAD/AAAAAP8AAAABAAABAAAA/wAAAAAAAAD/AAAAAAAAAP8AAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAA/wAAAQABAAD/AAAAAAAA+/7/AAAA/wAAAAAAAAABAAAA/wABAQAABAECAAD/AAAAAQAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAQABAAAAAAAAAP8AAAAAAAAAAAAAAP8AAAAAAAEAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAQDz+vsA1u3wAAD/AAAAAQAABAEBAAAA/wAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAQAA/wD/AAAAAAABAQAA/wD/AAEBAAAAAP8AAAEAAAABAAD/AAAA/wEAAAAB/wAAAAAAAP8AAP8AAAD/AAEA/wABAAH/AQAAAAAA/wD/AAEBAAABAQAAAAEAACAODAAAAAEA//8BAP//AAD//wEA//8BAPj9/AD/AP8AAAD/AAABAAAAAAAAAAAAAP//AAD//wEA//8AAAAAAAAAAAAAAAH/AAAA/wAAAAAAAAEAAP///wAAAAAAAAAAAAABAAD/AP8AAAAAAAAAAAAFAgEAHQ4LAP8AAQD//wAA//8AAAAAAQD//wAA//8AAP//AAD//wAAAAAAAP//AAAA/wEAAP8AAP//AAD//wAA//8AAA4GBQAUCQcAAAAAAAAAAAAAAQAA/wD/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AAEAAAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAQAAAP8AAAABAAAA/wAA/wEAAAH/AAD/AAAAAQAAAAABAAAA/wAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vH9AP7g/QAAAP8A/wAAAAEAAAD//wAAAQEBAP8A/wABAAEAAAD/AAAAAAAAAAAAAAAAAAAAAQD/AP8AAQAAAAAAAQAAAAAAAAQAAAAGAQABBwEAAAYAAAD/AAAA+v8A//kAAAD6/wAA/QAAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAAA/wAAAAEAAQAAAP8AAAAAAAAAAAAAAAEAAAAAAAAA/wD//wAAAQEBAAMoBAABBwIAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8A/wABAAEAAAAAAP8AAAABAAAA/wAAAAEAAAAAAAAA/wD/AAEAAQAAAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAAAAAAA/wAAAAEAAAD/AAAAAQAAAAAAAAD/AAAAAQAAAAQAAQAAAAAAAAAAAAAA//8AAAABAAABAAAA/wAAAAH/AAAAAQAA/wAAAQEAAP8A/wAA/wAAAAEAAAAAAQAA/wAAAAH/AP//AQABAf8AAAABAAEBAAD/AAAAAP//AAEBAQAAAAAAAAAAAAD/AAD/AP8AAAABAAAA/wAAAQEAAP8AAP///wABAAEAAAEAAAD/AAAAAf8A//8BAAABAAAA/wAAAAEAAAD//wD/AAAAAQEAAAAAAQAAAAAAAAAAAP///wABAQEAAAAAAAAAAAAA/wAA/wD/AAEBAQAAAAAAAP8AAP8AAAABAP8A/wAAAAAAAAABAAEAAAD/AP8AAQAAAf8AAP8BAP8A/wAAAAEAAAD/AAEAAQAAAQAAAAAAAAAAAAD///8AAQEBAAAAAAAAAAAAAP0AAP///wAAAQEAAQD/AAAAAQAAAf8AAAAAAAD/AAD/AQAAAQABAAABAAAABQAAAQcBAAAGAQACBwEAAAYAAAEHAQAABQEAAAMAAAEAAQAAAQAA////AAEBAQAAAAAAAP8AAP8A/wAA/AAAAPv/AP/5/wAA+gAA//n/AP/6/wAA+f8AAfsAAAAAAAD/AAEAAQAAAP8AAAAA//8AAQEBAAAAAAAAAQEA////AP/9AAABAQAAAAAAAP///wABAQEAAAAAAAAAAAAA/wAA/wD/AAEBAQAAAAAAAP//AP8AAAABAQEAAAAAAAD/AAD/AP8AAQEBAAEAAAAAAAAA////AAEAAQAAAQAAAAAAAP///wABAQEAAAAAAAAAAAD///8AAQEBAAAAAAAAAAAAAP8AAP8A/wABAQEAAAAAAAD/AAD/AP8AAQEBAAAAAAAA//8A/wAAAAEBAQABAAAAAAAAAP///wABAQEAAAAAAAAAAAD///8AAQEBAAAAAAAAAAAA////AAEBAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAQEAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAD/AAAAAQABAAAAAAAAAAT/AP8AAQAAAAAAAAAAAQAAAAD/AAEAAAAAAQAAAAAAAAAA/wD/AQAAAP8AAAABAAABAQEA/wD/AAAA/wAAAQAAAAAAAAEB/wAAAAAAAAD/AAAAAAAAAAAAAAEAAAAA/wAAAAAAAAAAAAABAAABAAAAAAD/AAABAAAAAP8AAAEAAAEAAQAAAP8AAAAAAAAAAAAAAAAAAQH/AAAAAAAAAf8AAAAAAAABAAABAAAAAAAAAAAA/wD/AAAAAAAAAAABAAAAAP8AAAAAAAAAAAAAAQAAAQAAAAAAAAAAAP8AAAEAAAEAAQD/AAAAAQEAAP8AAAD/Af8AAQAAAAAB/wD/AAAAAAEAAAAAAAABAQAA/wAAAAAB/wAAAAAA//8AAAAAAAAAAQAAAAD/AAAAAAAAAAAAAPwAAAABAQABAAAA/wABAAEAAAABAAEA//8AAAIUAwABEAIAAQYBAAAFAAABAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8A/wAAAAAAAAEAAAAA/wAAAAAAAAEAAAEAAAAABQAAAAUBAAEKAQAAAAAAAAAAAAAAAAAA/wAA//8AAAD6/wD/+gAA/+v9AP/z/wABAQEA/wAAAAAAAQAA/wAAAAEBAAD8AAD/AP8AAAAAAAABAAAAAP8AAAAAAAAAAAAAAQAAAQAAAAAA/wAAAAAAAAEAAAEAAAAAAP8AAAAAAAABAAABAAAAAAD/AAAAAAAAAAAAAQEAAAAA/wAAAAAAAAAAAAEBAAAAAP8A/wAAAAAAAAAAAQAAAAD/AAAAAAAAAAAAAAEAAAEAAAAAAAAAAAD/AAABAAABAAAAAAD/AAAAAAAAAQAAAQAAAAAA/wAAAAAAAAAAAAEBAAAAAP8AAAAAAAAAAAABAQAAAAD/AP//AAAAAAAAAAEAAAAA/wAAAAAAAAAAAAAAAAD/AP8AAQABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAQABAAAA/wAAAQAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAD/AAAAAQAAAAAA/wAAAAAAAAAAAAQBAAEAAAD/AAAAAQABAAAA////AAEBAQAAAAAAAP8AAAAB/wAB/wEAAAAAAP8A/wAA/wAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAABAP///wAAAQEAAQAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAD//wAAAQEAAAAAAAAAAAD//wAAAAAAAAEAAQAAAP8AAP8BAP8B/wABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAA/wEAAAH/AAD/AAAAAQAAAP8BAAAB/wAB/wEA/wH/AAH/AQAAAf8AAAAAAAAAAQAAAAAAAAAAAAD/AQAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAA//z/AAEAAAD/AAAAAQAAAAAJAQAA9/8AAQEAAAITAgD//AAAAQYBAP8B/wAA/wEAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAP8A//sAAP/z/gD/+P8A//j/AAEBAAAACAEAAQgBAAEOAgABAwEAAAAAAAD/AAAAAf8AAAABAAAAAAAAAQAAAQH/AP8HAQAA+v4AARECAAHz/QAAAAAAAQgAAAD4AAD/AQAAAQAAAAD8/wAB/wIAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAA/wAAAAH/AAAAAQAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAA/wAAAAEAAf8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAP8BAAAB/wAAAAEAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAP8AAAABAAAAAAAAAAAAAAD/AAIA/wAAAP8BAAD/AAD//wAAAQABAAD/AAAAAAAAAAAAAAD/AQAAAAAA/wAAAAAAAQAAAAAAAP8BAAD/AAAA/wAAAP8AAP//AAAA/wEAAP8AAAEAAQAB/wAAAP8AAAAAAAAA/wAAAP8AAAD/AQD//wAA/wAAAAAAAQAA/wAAAP8AAAD/AAABAAEAAQABAAAAAAAA/wEAAAAAAAD/AQAA/wAAAP8AAAD/AAD//wAA//8AAAAAAAAAAAAAAP8AAAD/AAAAAAAAAP8AAAD/AAAA/wEA//8AAAD/AAAAAAAAAP8BAP8AAAAA/wEAAAAAAAAAAQAAAAAAAAABAAAAAAAA/wEAAP8AAAD/AAAA/wAAAAABAAAAAAAA/wAAAAAAAAD/AAAA/wAAAAAAAAD/AAAA/wAAAPsAAP8A/wABAP8AAAIAAAELAQAAAP8AAAMAAAACAAD+4fwA//n/AAD/AAAAAAAA//8AAAD/AQAA/wAAAP8AAAD/AAAA/wEAAAMAAP/4/wD/6v4AAPL+AP/x/wD/6v4AAPwAAAACAAD///8AAP8AAAAAAAAA/wEAAP8AAAD/AAAA/wAAAP8BAP/z/wD+4v0AAQoBAAAAAAAAAAAAAQ4CAAAAAAABAP8AAAD/AP/8AAAAAAAAAP8AAAD/AAAAAAAAAP8AAAD/AAAA/wEA//8AAAD/AAAAAAAAAP8BAAD/AAAA/wAAAP8AAAD/AQAA/wAAAP8AAAD/AAD///8AAP8BAAD/AAAA/wAAAP8AAAD/AQAAAAAAAAAAAAD/AAAA/wAAAAAAAAD/AAAA/wAAAP8BAP//AAAA/wAAAAAAAAD/AQAA/wAAAP8AAAD/AAAA/wEAAAAAAAAAAAAA/wAA//8AAAD/AQAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAA/wAAAP8AAAAAAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAD/AAAA/wAAAP8AAP//AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAD///8AAP8BAAD/AAAA/wEAAP8AAAD/AAAA/wAAAP8BAAL/AAAAAAEAAAABAAABAQAAAAH/AP8BAAAA//8AAAEAAAAB/wAAAQAAAAAAAAAA/wAAAAAAAQEAAP8A/wAAAAAAAAH/AAEBAAAAAP8AAAEAAP8BAAD/AP8AAAEAAAD/AAAAAQAAAAAAAAAB/wABAQAAAAAAAAAA/wAAAQAAAAEAAAABAAAAAP8AAAEAAAAAAAAAAf8AAAAAAAAB/wAAAAAAAAEAAAABAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAB/wAA/wAAAAEAAAAAAAAAAf8AAQEAAAAAAAAAAAAAAAEAAAEAAAAAAf8AAAEAAAAA/wAAAAAAAAD/AAAAAAABAf8AAAAAAAAB/wAAAQAAAAD/AP8AAAAAAQAAAAEAAAAAAAAAAf8AAAAAAAABAAD/AP8A//v/AAEAAQD/AAEAARMCAAD5/wD/AAAAAQsBAP/4/wAA/QAA/eL8AAAAAAD/AAAAAQEAAAAB/wAAAQAAAAEAAAAAAAAAAf8AAQIBAAIZAwACIgQAAAQBAAAHAAADJQQAAhQDAAEBAQABAQEAAAEAAAAAAAAAAQAAAAEAAAAAAAAAAAAA//3/AP7j/AAA/AAAAP4AAAAGAAD/AP8AAP8AAAANAQD/AAEA/wAAAAD7/wAAAAAAAAEAAAABAAAA/wAAAAEAAAAAAAAAAf8AAQEAAAAAAAAAAQAAAAEAAAAAAAAAAQAAAAAAAAAB/wAAAQAAAAAAAAABAAABAAEAAAH/AAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAf8AAP8AAAABAAAAAAAAAAH/AAEBAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAD/AAAAAQAAAQAAAAABAAAAAQAAAAEAAAAB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AQAAAAH/AAAAAAAAAP8AAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAQAAAAAAAAAAAQAA/wEAAAAAAAABAQAAAAEAAAD/AAAAAQAAAAEAAAABAAAAAQAAAAAAAP8B/wAAAAAAAAH/AAAAAAD/AAAAAAH/AAABAAABAQAAAAEAAAAAAAAAAQAAAAEAAAEAAAAAAf8AAAD/AAAAAAAAAAAAAP8AAAAAAAD/AP8AAAAAAP8AAAAA/wAA/wD/AAABAAAAAQAAAAAAAP8B/wAAAAAA/wAAAAAAAAD/AP8AAQEAAAD/AAAAAP8AAAEAAAABAAD/AP8AAP//AAAKAQAA9v8AAPoAAAAAAQABEAIAAPn/AAD6AAAAAAAAAQsBAAD8AAAA+wAA/wEAAAEJAQAA/AAAAP8AAAEAAQAABQEAAP4AAAAAAAD/AAEAAQMAAAAAAAD/AAEAAAAAAAAAAAAAAgAA/wEBAAD+AAAA/wAAAQYBAP//AAAA/AAAAP8AAAEJAQAAAAEAAPj/AAD/AAABDAEAAQABAAD2/wAA/wAAARACAP8A/wD/9P8AAPwAAAEQAgAA+f8AAAEAAAEAAAAAAAAAAAEAAP8BAAAAAAAAAAEAAAABAAD/AP8AAAEAAAABAAAAAQAAAAEAAAD/AAD/AQAAAAAAAAABAAAAAQAAAAAAAP8BAAAAAAAAAAEAAAABAAAAAAAAAAEAAAABAAABAAAAAAH/AAAB/wAAAQAAAAAAAAAAAAAAAQAA/wH/AAAAAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAD/AQAAAAAAAAABAAAA/wAAAAD/AAABAAAAAQAAAAAAAAAAAAD/AQAAAAEAAAABAAAAAQAAAAAAAP8BAAAAAQAAAAEAAAABAAAAAQAAAAEAAP8BAAAAAAAAAAH/AAABAAAAAQAAAAAAAP8BAAAAAQAAAAEAAAAAAAD/AQAAAAEAAAABAAAAAQAABAABAAAAAP8AAAAAAAABAAAAAAAAAQAAAP8A/wABAAEAAAAAAP8B/wABAAAAAAAAAAAB/wAAAAAA/wD/AAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAEAAAEAAAAAAAAAAQAAAAABAQD/AP8AAQAAAAABAAD/AAAAAAAAAAAAAAABAAAAAAEAAAAAAAAAAf8AAAAAAAAB/wABAAAAAAAAAAAA/wAAAAAAAAAAAAABAAD/AAAAAAAAAAABAAABAAAAAAAAAAAA/wAAAAAAAAEAAAAAAAABAAAAAAH/AAAAAAAAAQEAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAf8AAAAAAP8BAAAAAAAA/wD/AAEBAAAAAAAA/wD/AAAAAAAA+gAAAQ8CAAEBAAD97/4AAAAAAAEEAAABDAEA/+/+AAAAAAAAAAAAAQwCAP/4/wAAAAAAAQAAAAEKAQD/+/8A/wAAAAEAAAABBgAAAP3/AAAAAAAAAAAAAAIBAAAA/wAA/wAAAAEAAAAAAAAAAwEAAAAAAAD/AAAA/gAAAAUAAAABAQAA/wAAAPwAAAEJAQD/AAAAAPwAAAD8AAABDAIA/+n+AAD+AAD/9v8AAg8CAP/nAQAA/gAA//H+AAIUAgAACAEA//7/AAACAAABAAAAAAAAAAEAAAAAAQEAAAD/AAAAAAABAQAAAAD/AAAAAAAAAAAAAAAAAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAQAAAAAAAAAAAAAAAQAA/wAAAAAAAAAAAQAAAQAAAAAAAAAAAP8AAAAAAAABAAAAAAAAAQAAAAAB/wAAAAAAAAAAAAAAAAD/AAAAAAEAAAEAAAAAAAAAAAAAAAABAAABAAAAAAEAAAAAAAAAAQAAAAAAAP8A/wAAAAAAAAEAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAEA/wAAAAEAAAABAAAA/wAAAAEAAAD/AAEAAQAAAP8AAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgD/AAAAAAEAAP8AAAEAAQAAAAAA/wABAAH/AQAAAAAAAAAAAAAAAQD/AAEAAAAAAP//AQAAAAAAAQABAAEAAQAAAAEAAP8BAAD/AAAAAAEAAAABAAEAAQABAAEAAQABAAAAAQAA/wEAAAABAAAAAAAAAAEAAAAAAAAAAQAB/wEAAQABAAEAAQAAAAEAAP8BAAAAAAD//wEAAAAAAP//AAAA/wAAAAAAAP8AAAD/AAEAAAABAAAAAQAB/wEAAQAAAAEAAQAAAAEAAP8BAAAAAQAAAAEAAP8BAAD/AQAAAAAAAAABAAAAAAAA/wAAAAAAAAD/AAAAAAEA//8AAAAAAAD//wEAAAAAAAD/AQAAAAAAAP8BAAAAAQAAAAEAAf8BAAEAAQD/+/8AAQ8CAP/+AAD/8P4A/wD/AAEQAgABAQAA//P+AP8AAAAABwAAAAUAAAD2/wD/AAAAAAEAAAAHAQAA+/8AAAAAAAAAAAAABAEA//0AAP8AAAABAAAAAAIAAAAAAAAAAQAAAAAAAAAAAAAAAgAAAAAAAAD/AAAA/wAAAQYBAAAAAAAAAAAAAPv/AAEJAQAAAAAA/wD/AP/3/wABCgEAAAIAAP8AAAD/9P4AAAYAAAALAQD/AAAA/u7+AP//AAACEQIAAPn/AAEAAQAAAAEAAP8BAAAAAQAAAAAAAP8BAAD/AQAAAAAAAAABAAAAAQAA/wEAAAABAAEAAQABAAEAAAAAAAD/AQAA/wAAAAABAAAAAQAA/wEAAAABAAAAAQAAAAEAAf8BAAEAAAABAAEAAAABAAD/AQAAAAEAAAABAAD/AQAA/wEAAAAAAAAAAQAAAAEAAP8BAAAAAQABAAEAAQABAAAAAAAA/wEAAP8BAAAAAQAAAAEAAP8BAAAAAQAAAAEAAAABAAH/AQABAAEAAQABAAAAAQAAAAEAAAABAAAAAQD//wEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAADtaZtMAACAASURBVAD/AAAAAQAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAgAAAQAA/wAA/wABAAD/AAAA/wEAAP8AAAAAAAAAAAAAAP8BAAD/AAABAAAAAAABAAEAAAAAAAAAAP8AAAD/AAAA/wAAAAEAAAAAAQAA/wAA//8AAP//AAAA/wAAAP8AAP//AAAAAAAA//8AAAD/AAAA/wAAAP8BAAD/AAAAAAAAAP8AAAD/AAAA/wAAAAAAAAD/AQABAAAAAAAAAAEAAQAAAAEAAP8BAAH/AQAA/wAAAP8AAAD/AAAAAAAAAAABAAD/AAAA/wAAAAAAAAD/AAAA/wAA/wAAAAAAAAAA/wEA//8AAAEAAQAAAAAAAAABAAAAAAAAAAAAAQABAAAAAQABAAAAAP8AAAAAAAAAAAEAAAAAAAD/AAAA/wAAAAAAAAD/AAABCQEAAQEBAP/w/gD//P8AAQAAAAISAgD//wAA//X/AAD//wABDAIAAQABAP/3/gABAP8AAAcAAAADAAAA+gAAAAD/AAAEAAAAAwAAAP0AAAAA/wAAAQAAAAEAAAAAAAABAP8AAAAAAAAAAAABAwAAAQAAAP8A/wAA/f8AAAQBAAEAAAAAAP8A//v/AAAHAQAAAgAAAAAAAP/3/gAAAgAAAAkBAAAA/wD/8/8AAAAAAAISAgABAP8AAPb/AAD3/wAABAAAAAYBAAD/AAD//wAAAAAAAP//AAAA/wAA/wAAAAAAAAD/AAEAAP8AAP//AAAAAAAAAP8AAAD/AAD//wAAAP8BAAAAAAAAAAEAAP8AAAD/AAAAAAAAAP8AAAD/AAAA/wAAAAAAAAAAAQAA/wAAAP8AAAAAAAAA/wAAAP8AAP8AAAAAAAAAAP8BAAD/AAD//wAAAAAAAAD/AAAA/wAAAP8AAAD/AQAAAAAAAAAAAAD/AAAA/wAAAAAAAAD/AAAA/wAAAP8AAAAAAAAA/wAAAP8AAAD/AAAA/wAA//8AAAAAAAABAAAAAP8AAAD/AAAA/wAA//8AAAD/AAAA/wAAAP8BAAD/AAAA/wEAAAAAAAD/AQAA/wAAAAAAAAAAAAAA/wAAAP8AAAAAAAD//wAAAP8AAAD/AAAA/wAAAgEBAAAAAQAAAQEAAAABAAAAAf8AAAEAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAD/AAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAA/wAAAQAAAQEAAAAB/wAAAQAAAAEAAAEBAAAAAAAAAQAAAAABAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAB/wAAAQAAAAAAAAAB/wAAAQAAAAAAAAAAAAAAAQAAAAD/AAABAAABAQAAAAEAAAABAAAAAAAAAAAAAAABAAD/AQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAQAAAQAAAP8A/wAAAAAAAAD/AAAAAAAAAP8AAAEAAAAA/wAAAAAAAAEAAAEAAAAAAP8AAQAAAAABAAD/AQAAAAAAAAABAAABAwEA/wD/AP/w/gABAAEAAAsCAAAJAQAA+P8AAPsAAAEBAAABDQEA/wD/AP/3/wD/AAAAAQkBAAAAAAD/+v8AAQABAAAFAQAAAAAAAP3/AAAAAQAAAgAAAAIAAAAAAAAAAAEAAAAAAAAAAAAAAgEAAAAAAAEAAQAA/QAAAAQAAAADAAAAAAEAAPoAAAECAQAABwEAAQABAAD2/wABAQEAAQ0BAAEAAQAA9v8AAP0AAAEPAgAABAEAAAAAAP7w/gABAAEAAQMBAAABAAABAQAAAAAAAAEAAAAAAQAAAAEAAAAAAAAB/wAAAAEAAAEBAAAAAAAAAAAAAAABAAABAQAAAAEAAAAAAAAAAQAAAAEAAP8BAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAQAA/wEAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAEAAAABAAABAQAAAAAAAAAAAAAAAQAA/wEAAAABAAAAAAAAAAEAAAABAAAAAQAAAAAAAAABAAAAAQAA/wEAAAAAAAAAAQAAAAEAAAABAAAAAP8AAAEAAAAAAAAAAQAAAAEAAAAAAAAAAf8AAAEAAAABAAAAAQAAAAEAAAABAAAAAQAA//8AAAAB/wAAAQAAAAAAAAAAAAAAAf8AAAEAAAAAAAAAAAAAAAEAAAABAAAAAQAABAAA/wAAAAAAAAABAAAA/wAAAAAAAAD/AAABAAAAAAAAAAAAAAABAQAAAP8AAQAAAAAA/wAAAAAAAAD/AAABAQAAAP8A/wAAAAEBAAAAAP8A/wAAAAEAAAAAAP8AAAABAAAA/wAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAABAAAAAAAAAP8AAAEAAAAAAAAAAP8AAAAAAAAAAAAAAP8AAAEAAAAA/wD/AAAAAQAAAAAAAAAAAQAAAAAAAAAAAQABAP8AAAEAAAAAAAAAAAAAAAAAAAABAQAAAP8A/wEAAAAAAAAAAQAAAAAAAAAB/wAAAAAAAAAAAAAAAAAAAQAAAAAAAAAB/wAAAAAAAAH/AAAAAAABAAAAAAEAAAAAAAAAAAEAAAEAAAIeBAD+6P0AAQwCAAEBAAD+8/8A/wAAAAEBAQABCwIAAP0AAAD6AAAA/wEAAQkCAAEBAAAA+/8A/wAAAAIFAAAAAQAAAP0AAAAAAAAAAQAAAAEAAAAAAAD/AAAAAQAAAAAAAAAAAgAAAAAAAP8AAAD//QAAAQEAAAAEAAD//QAA//r/AAAB/wABCgEA/vf/AAD3/wD///8AAg0CAPzo/gAB/wAA//T/AAIQAQACFgMAAP8AAAEVAgAAAf8AAAAAAAAAAQAAAP8AAAEAAAAAAAAAAAAAAAAAAAABAAD/AAAAAQAAAAAAAAAAAQAAAAAAAAAAAAD/AAAAAQAAAAABAAAAAAAAAAABAAEA/wAAAQAA/wAAAAEAAAAAAAAAAAEAAAAAAAAAAAEAAQD/AAABAAAAAAAAAAAAAAAAAAAAAQEAAAD/AAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAQD/AP8AAQEBAP8A/wABAAAAAQAAAAABAAAAAAAAAAABAP8A/wABAQAAAQD/AAAAAAAAAAAAAAAAAAABAAAAAAAAAQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAABAQAAAAAAAAAAAAAAAAAAAgAAAQD//wAAAAAAAP8AAAAAAAEAAAABAAD/AQAAAAEAAP8AAAAAAAAAAAEA/wAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAEAAQABAAAAAQD//wAAAAAAAP8AAQAAAAEAAAABAAAAAQAAAAEAAP8AAAAAAQAA/wAAAAAAAP//AAAAAAAAAP8BAAAAAAAA/wEAAAAAAAAAAAAAAAEAAP8AAAAAAQAA/wAAAAABAAAAAQAAAAEA//8AAAAAAAD/AAEAAAABAAAAAQAAAAEAAQABAAAAAAAAAAEAAf8BAAAAAAAA/wAAAAAAAAD/AQAAAAAAAP8AAAAAAAAA/wAAAAAAAAD/AQAAAAAA//8BAAAAAQAAAAEAAAABAP//AAAAAAAAAAABAAEDAQADGwQAAg8CAP//AAD+8v4AAQAAAAAJAQAABAAA//f/AAD/AAAAAQAAAAoBAP//AAD/+v8AAAAAAAAGAQAAAAEAAP3/AAEAAAAAAwAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAAEAAAEAAAAA/f8AAQEBAAEGAQABAAAAAPr/AP//AAABCQEAAAAAAAD7AAAA+wAAAAkBAAEEAAAAAAAA//L+AAD/AQACFQIAAhcDAAECAQAAAAEA//8AAAAAAAD/AAEAAAABAAAAAQAAAAEAAQABAAAAAQABAAEAAP8BAAAAAQAAAAEAAAABAAAAAQABAAEAAP8AAAAAAQD//wEAAAAAAP8AAQAAAAEAAf8AAAAAAQAAAAEAAAABAP//AAAAAAAA/wABAAAAAQAAAAEAAAABAAEAAQAAAAAAAAABAAAAAQAAAAEAAAABAAAAAQAA/wEAAQABAAD/AAAAAAEA//8AAAAAAAAAAAEAAAAAAAH/AAAAAAEAAAABAAAAAQD//wAAAAAAAAAAAQAAAAEAAAABAP//AAAAAAEAAP8AAAAAAQD//wAAAAABAP//AAAAAAEA//8AAAAAAQAA/wAAAQABAP//AAAAAAEA//8AAAAAAQD//wAAAAABAAD/AAAAAAEA//8AAAAAAQAAAAEAAgAAAAABAQEAAAAAAAAAAQAA//8AAP8AAAAB/wAAAAAAAAEBAP8AAAD//wAAAAAAAAAAAAAAAAAA/wD/AAAAAAAA/wAAAAAAAAD/AAD///8AAAAAAP///wABAQAAAP//AAH/AAAA/wAAAP//AAD/AAAAAAAAAAEAAP///wAAAAAAAP8AAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAEAAAD/AAABAQAA////AAD/AAAA//8AAQEAAAD//wAB/wAAAP8AAAD//wAA/wAAAP//AAD/AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAP///wAAAAAAAP//AAEBAAAA//8AAf8AAAABAAAAAP8AAAAAAAAAAAACGgMAAQ8BAAEPAgAAAQAAAPb/AAAAAAABAQAAAQgBAAD/AAAA+wAAAQD/AAEHAQAB/wAA//0AAAAAAAAAAwEAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAgAAAAIAAAAAAAAA/AAAAP8AAAAGAQAAAP8A//oAAAAAAAABCgEAAQAAAP///wD/9/8AAQEAAAEPAgABEgIAAhYCAP8A/wAAAQAA////AAD/AAAA//8AAQEAAAD//wAB/wAAAP8AAAD//wAA/wAAAP//AP//AAD///8AAAAAAP///wAA/wAAAP//AAD/AAAA//8AAAEBAAD//wABAf8AAP//AAH/AAD///8AAAEAAP///wAA/wAAAP//AAEBAAAA//8AAf8AAAD/AAAA//8AAP8AAAD//wAA/wAA////AAD/AAD///8AAP8AAAD//wD/AAAAAP//AAABAQAA//8AAQEAAAD//wAB/wAA////AAABAAD///8AAAAAAAD//wABAQAAAP//AAH/AAAAAAAAAAAAAAEBAQAAAAAAAAEBAAD//wABAQEAAAAAAAEBAQAA/wAAAQEBAAAAAAAAAQEAAP8AAAEBAQAAAAAAAQEBAAD/AAABAQEAAAAAAAABAQAA/wAAAQEBAAAAAAAAAAAABP//AAABAAAAAAEAAAH/AAAAAAEAAQEAAAD/AQAAAQAAAP8AAAEAAAAAAAAA//8BAAAAAAAA/wAAAAABAAAAAAAAAAEAAf8AAP8AAQABAAAAAAAAAAEBAQD//wAAAQAAAP8AAAABAAAA/wABAAEAAAAA/wAAAAABAAEBAAAA/wAAAAAAAAD/AQAAAAAAAAAAAAD/AQAAAAAAAP8AAAAAAAAA/wEAAAAAAAAAAAD//wEAAQAAAP8AAAAAAAEAAf8AAAAAAAAAAAAAAAAAAP8AAQABAAAA/wABAAEAAAABAAEAAAAAAAD/AQAAAAAAAP8BAAAAAAAB/wEAAAAAAAD/AAAAAAAAAAABAAAAAAAA/wEA/wAAAAEAAQD//wAAAQABAP//AAABAAAAAAAAAAD/AAAAAAEAAAAAAAAAAQACCgEAACACAP8A/wAA/wEA//f+AAD/AAAACAEAAAMAAAD7AAAA/gAAAAAAAAAGAQD/AAAAAPwAAP8A/wACAwEAAAABAAAA/wAAAAAAAAAAAAAAAAABAAEAAAIAAP/9/wD//f8AAAAAAAEGAQD/AAEAAPv/AAD/AAAABwEAAAIAAAH+AQD/9v4AAA4EAAIcAwABAAEA/wAAAAAA/wD//wEAAQAAAAAAAAAAAAEA//8AAAEAAAD/AAAAAQAAAP8AAQABAAAAAAABAAEAAAAAAAEAAAAAAAAAAQAAAAAA/wABAAEAAAAAAAEAAP8AAP8AAQAB/wAAAAAAAP8AAAAAAAEA//8AAAEAAAD/AAAAAAABAAH/AAAAAAAAAAAAAAAAAAD/AAEAAQAAAP8AAQABAAAAAQABAAAAAAABAAEAAAAAAP8AAQABAAAAAAABAAD/AAAAAAEAAP8AAAAAAAAAAAAAAAABAP//AAABAAAA//8AAAEAAQD//wAAAQAAAAAAAAAA/wAA/wAAAAEAAAD/AAAAAQAAAAAAAQD//wAAAQAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAA/wAA/wAAAAEAAAAAAAAAAP8AAAAAAAAAAAAABAAB/wAAAAEAAAAAAAABAAAAAP8AAAABAAABAAAA/wAAAQEAAP8AAAAAAAAAAQAAAAD/AAAAAQAAAQAAAAD/AAAAAf8AAAABAAEAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAEAAAAAAP8AAQABAAAAAAAAAP8AAP8BAAAAAAAAAP8AAAABAAABAAD///8AAQABAAABAAAA/wAAAAEAAAD/AAAAAP8AAAABAAABAAAAAP8AAAABAAAAAAABAAAA//8AAAEBAAAAAAAAAAD/AAEAAQAAAAAAAQD/AAAAAQD//wAAAQAAAAAB/wAA/wEAAAH/AAD/AQAAAQAAAP8AAAABAAAA/wAAAAD/AAAAAQAAAf8AAf8BAAABAAAAAP8AAAABAAH/AAAAAQAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAP8AAAEAAQD/Af8AAhwEAP8J/gD//v8AAAAAAP/6/wAAAAAAAAABAAEGAAABAQAAAP3/AAAAAQAAAwAAAAEAAAAAAAD/AAEAAQAAAAAAAAAAAQAAAAQBAAD7AAAA/AAAAAEAAAAHAAD/AAAAAf0AAAD9AAABBQEAARACAAELAQABEQIAAAEAAAEAAQAAAP8AAQABAAAAAQD/AAAAAAAAAP8AAAABAAAAAQAAAAAAAAABAAAAAAD/AAEAAQAAAAAA/wAAAAEAAAAA/wAAAAEAAAEA/wAAAAEAAQAAAAAAAAD/AP8AAQABAAEAAAD//wAAAQEAAAEAAAAAAP8AAP8BAAABAAAAAAAAAQAAAP//AAABAQAAAAAAAAAA/wABAAEAAAAAAAEA/wAAAAEA//8AAAEBAAD/AP8AAQABAAEAAAAAAP8AAAABAAAAAAAAAAAAAP8AAAABAAAAAAAAAQAAAP//AAAAAQAAAAD/AAAAAQAB/wAAAAEAAAAAAAAAAAAAAQAAAAAA/wABAAEAAAAAAAD/AAABAf8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8BAAAAAAD/AP8AAQEAAAAAAQAA/wAAAAEAAAAA/wAAAAEA////AAAAAAABAQEABAAAAAAAAP8AAAABAAAA/wAAAAAA/wD/AAEAAAD/AQAAAAAAAAAAAAAAAAAA/wAAAAEBAQAAAAAAAAAAAAABAAAAAAAAAAD/AAAAAAAAAAAA/wAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAH/AAAAAAAAAQAAAAD/AAAAAAAAAQAA////AAAAAAAAAAAAAAAAAAAB/wAAAAAA/wD/AAEAAAAAAAAAAAD/AAD/AAD/AAAAAAEAAAAAAAAAAAAAAAAAAP8A/wABAAAAAAAAAAAA/wAAAQAAAAABAAAAAAD/Af8AAAAAAP8B/wAAAAAAAQEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAA/wAAAAAA/wD/AAABAAABAAAA/wAAAAEAAAD/AAEAAQAAAAEA/wAAAAAAAAEAAAAAAAAAAAAAAAMAAAEXAgAB/wAAAAEAAAD9/wAAAQAAAAAAAAAGAQD///8A//wAAAEAAAAABAEAAAD/AAAAAAAA/wAAAAEAAAAAAAAAAP8AAAMAAAEAAAAA/P8AAAD/AAEHAQAAAAAAAAIAAAD8/wD/BQEAAh0DAAEBAAAAAAAAAAD/AAAAAAAAAAAAAAD/AAAAAAAAAAEAAAD/AAAAAAD/AAAAAAAAAAEAAAAAAAAAAAAAAAAA/wAAAAAAAQAAAAAAAAD/AQEAAQD/AP8AAAABAP8AAAAAAAAAAAABAAAAAAD/AAAAAAAAAQAAAAAAAP8AAAABAAAA/wH/AAEAAAAA/wAA/wAAAAABAAAAAAAAAAAAAAAAAAD/AP8AAQAAAAAAAAAAAP8AAAEAAAAAAAABAAAAAAD/AAAAAAAAAAAA/wD/AAEAAAAAAAAA/wEAAAEAAAD/AAAAAQAAAAEBAAAAAAAAAAAAAP8A/wAAAQAAAQAAAP8AAAABAAAAAAAAAP8AAAABAP8AAAAAAAABAAAAAAAAAAD/AAAAAAD/AAAAAQAAAAAAAAAAAAAA/wH/AAEAAAABAQAAAAAAAAAA/wAAAQAAAQABAP8AAAABAP8AAQEAAAAAAAAAAP8ABAD/AAAAAQEAAAAAAP//AAABAQEAAAAAAAD/AAABAQAA/wD/AAH/AQD/AQAAAAD/AAD/AAAAAQAAAAAAAAD/AAAAAQAAAAABAAAAAAAAAAAAAQAAAAAAAAD//wAAAAEAAP8AAAABAAAAAAAAAAD//wAAAQAA//8AAAEBAQAA/wAA/wD/AAEAAAABAQAAAAABAP8A/wAAAAEAAAD/AAD/AQAAAf8AAQABAAAAAAABAAAAAAAAAAABAAABAAAA/wAAAAAAAAD/AAAAAQAAAAH/AAAAAP8AAAEBAAAAAAABAAAAAP8AAAABAAAB/wEA/wH/AAH/AQD/Af8AAP8BAAAB/wAA/wAAAAEAAAD/AAAAAQAA//8AAAEBAQAAAAAAAQAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAP8AAAABAQAAAAAAAAAAAAD/AAAAAf8AAQABAP8A/wABAAEA/wD/AAEOAgADKgIA//T+AAACAAAAAAAAAPz/AP8A/wABBAAAAAABAAAA/wAAAQAAAAAAAAAAAAAAAAEAAQQBAP4A/wAA/AAAAAABAAAGAAADHwMAAQ4CAAECAAD/AAAAAQABAP8AAAABAAAAAAAAAAD/AAAAAQAAAAD/AAAAAQABAAAAAAABAAAAAAABAAAA//8AAAABAAD/AAAAAQAAAAAAAAAA//8AAAEBAAAAAAAAAAAAAP8BAAABAAAAAP8A/wABAAH/AAD/AQAAAQAAAAAAAAABAAAAAAAAAAEA/wAAAAEAAf8AAAABAAAAAQAAAQAAAP8AAAAAAAAA/wAAAAEAAAAB/wAAAAD/AAABAQAAAAAAAQAAAAD/AAD/AQAAAQD/AP//AQABAAAAAAEAAAAAAAAAAAAAAQAAAAAAAAABAP8AAAABAP//AAABAQAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAAAAP8AAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAABAAAAQAAAAAAAP8AAAEBAQAA/wAAAAAAAAAAAAD//wAAAAABAAAAAAAB/wAA/wABAAAAAAAAAAEAAAAAAAAAAAAA/wEAAAEAAAD/AAAAAAAAAAEAAP8AAAAAAAAAAP8AAAAAAAAAAAAA/wAAAAEAAQAA/wAAAAAAAAD/AAAAAAAAAAABAAAAAAAA/wAAAAAAAAAAAQAAAAAAAP8BAAAAAAAA/wEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAP8AAAABAAEAAAAAAAD/AAD/AAAAAQAAAAD/AQAAAAAAAAABAAAAAAAA/wEAAAAAAAAAAQAAAAAAAP8BAAAAAAAAAAEAAAAAAAD/AAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAABAAD/AAAAAAAA/wAAAAEAAAAAAAEAAAAAAAD/AQAAAAAAAAABAAAAAAABBAAAARADAAAAAAD/AP8AAh0EAP/w/gABBwEAAP8AAAAAAAABAP8AAAABAAAAAAAA/wAAAQkBAAIEAgACEQIAAP8AAAECAQABEAMA/wAAAAAAAAAA/wAAAAAAAAD/AAD/AAAAAQAAAAAAAAAA/wAAAAABAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAP8AAAABAAEAAAAAAAD/AAABAAAAAAAAAAH/AAAAAAEAAQAAAAAAAAAA/wAA/wAAAAEAAAAAAAAAAAAAAP8AAQABAAAA/wAAAAH/AAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAD/AAAAAQABAAAAAAAA/wAA/wAAAAEAAAAB/wAAAAABAAEAAAAAAAAAAf8AAP8AAAABAAAAAAAAAAAAAAD/AAEAAQAAAAAAAAAA/wAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEBAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAEAAP//AAABAAAAAAAAAAAAAAAAAAAABAAAAAAAAP8AAAABAAAAAAAAAf8AAQABAAD/AAABAQAAAAAAAP//AAABAQAAAAD/AAAAAQAAAP8AAAABAAABAAAAAP8AAAABAAAB/wAAAAEA////AAABAAABAQEAAAAAAAEAAAAA/wAAAQEAAAAAAAAAAAAAAf//AAABS0gsJwAAIABJREFUAQAA/wAAAAEAAAD//wAAAQEAAP8AAAAA/wAAAAEAAAH/AAD/AQAAAQAAAP8AAAABAAD/AP8AAQABAP//AAABAQAA/wAAAAEAAAD/AP8AAf8BAAEBAAAA/wAAAAAAAAAAAAABAQAA//8AAAAB/wAA/wEAAAD/AAAAAQAAAf8AAP8BAAAA/wAAAAEAAAH/AAD/AQAAAP8AAAABAAABAAAB/wAAAAAAAAABAAAAAAAAAP8AAAABAAAAAAAAAP8AAP8A/wABAQEAAQAAAP//AAAAAP8AAAEBAAAA/wAA/wEAAAD/AAEAAQAAAAAAAAEAAAAAAAAA/wEAAg0AAP8OBAAB/wAA/wAAAAAGAQABDgIAAAMBAAACAAAAAAAAAhYDAAAAAAAAAAAAAAAAAAABAAAA/wAAAQD/AAAAAQABAQAAAP8AAAAAAAABAQAAAP8AAP8BAAABAAAA/wAAAAH/AAAAAQAAAAAAAAAAAAAA//8AAQEBAAAAAAABAAAAAP8AAAEBAAAAAAAA//8AAAEAAAAAAQAAAAAAAP//AAABAAAAAAEAAAAA/wAB/wEAAAEAAAAAAAAAAAAAAAAAAAH/AAAAAQAAAAAAAAAAAAD//wAAAQEAAP8AAAABAAAA/wD/AAH/AQABAQAAAP8AAAAAAAAAAAAAAQEAAAD/AAAAAQAAAP8AAAABAAAA/wAA/wEAAAEAAAAA/wAA/wEAAAEAAAAA/wAAAAAAAAEBAAAAAAAAAf8AAAAAAAAAAQAAAAAAAAD/AAAAAQAAAAAAAP///wABAQEAAQAAAAAAAAD/AP8AAQEBAAAAAAAAAAAA////AAEBAQABAAAAAAAAAP///wABAQEA/wAAAAEA/wD//wAAAQABAAEBAAAAAAAA////AAEBAQAAAAAABAEB/wAAAAEA/wH/AAEAAAAAAAAA/wD/AAABAAABAAEA/wD/AAEBAQD/AP8AAQAAAAAAAAABAAAA/wD/AAEAAQAAAAAAAAAAAAAAAAAAAP8AAQEAAAAAAAAAAP8AAAABAAAA/wAAAQAAAAABAAAA/wABAAAAAAEAAAAA/wD/AQAAAQABAAABAAAAAP8AAAABAAAAAAAAAAAAAAAAAAABAAAAAP8AAAEAAAAAAQABAAAAAAD/AAEBAAAAAAEAAQD/AAAAAAABAAAAAAH/AAAAAQAAAf8AAAAAAAABAAD/AAEAAQH/AP8AAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAQH/AAAAAAD/AQAAAQAAAP8AAAABAAAA/wEAAAEAAAAAAAEAAAH/AAEAAAAAAP8AAAABAAEB/wD/AAAAAAAAAAAAAAAAAQAAAQAAAP8A/wABAQEAAAD/AAAAAQAAAf8AAAAAAAEAAAAAAf8AAAAAAAEHAAACIgQAAQAAAP8AAAAAAP8AAAABAAAA/wAAAAAAAAAAAP8AAAABAQAAAAAAAAAA/wAAAAEAAAH/AAEAAAD/AAAAAQEBAAAA/wAAAAEAAAD/AAABAAAAAAEAAAD/AP8AAAABAQEAAAD/AAAAAQAAAP8AAAEAAAAAAQAAAP8AAQEAAAAAAAD/AAEAAQD/AAABAAAAAAAAAAABAAAAAAAAAf8A/wAAAAEAAQD/AP8AAQABAAAB/wAAAAAAAQABAAAA/wABAQAAAAABAAEA/wAAAAAAAQAAAAAB/wAAAAEAAAH/AAAAAAAAAQAA/wABAAEB/wD/AAAAAQAAAAAAAQAAAf8AAQAAAP8AAAABAQEAAQD/AAAAAQABAf8AAAAAAAAAAQAAAP8A/wEAAAEAAAD/AAAAAQAAAP8BAAABAAAAAAABAAEBAAAAAP8A/wAAAAEAAAABAQAAAAD/AAAAAAAAAAAAAQEAAAAA/wD//wAAAQEAAAEBAAD/AP8AAQAAAAAAAAABAQAAAAD/AP//AAABAQAAAQEAAAAA/wAAAAAABAAAAQD///8AAQEBAP8A/wABAAEAAAAAAAEAAAAAAAAAAQABAP//AAABAQEA/wD/AAH/AAD/AQAAAQABAAD/AAAAAQEA//8AAAEBAQAAAAAAAAAAAAD//wAAAQEAAP8AAAAAAQAAAQAAAAAAAAAAAQD//wAAAQEAAAAAAAABAAAAAAAAAAAAAQAAAP8AAAEAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAEBAAAAAAD/AAEAAf8AAAABAAAA/wAAAAEBAAD/AAAAAQAAAAAAAAAAAAAA/wEAAAAAAAABAAABAAAAAP8BAAAB/wAA/wAAAAEAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAP8BAAAAAAABAAAAAAAAAAEBAAAA/wAAAQAAAAAAAAAAAQAAAAABAAD/AAAAAAAAAAEAAAD/AQAAAf8AAP8AAAABAAAA/wAA/wEAAAEAAQAA/wAAAAEBAAD/AAABAQEAAP8AAAABAAAA/wEAAQEAAAD/AAABAQAAAP8AAAEBAAAAAAAAAAAAAAD/AQAAAAAAAAEAAAEAAAAA/wAAAAAAAAABAAAAAAAAAP8BAAAAAAAAAQAAAP8AAAEBAQAA/wAAAQABAAAAAAAAAQAAAP8BAAEAAAAAAAAAAAEBAAD/AAAAAAEAAAEAAAAAAAAAAAEAAP8AAAAAAAABAQAAAAABAAH/AAAAAAAAAAEAAAAAAQAA/wAAAAEAAAD/AAABAQEAAP8AAAABAQAA/wAAAAEAAAD/AQAAAQAAAP8AAAABAQAA/wAAAAEAAAAAAAAAAAAAAP8BAAAAAAAAAQAAAQAAAAD/AQABAAAAAAEAAAAAAAAA/wEAAAAAAAABAAAA/wAAAAEBAAD/AAAAAAEAAAAAAAABAAAA/wEAAQAAAAAAAAABAQAAAP8AAAEAAAAAAQAAAAAAAAAAAAAAAAEAAQD/AAAAAQAAAP8AAAABAAAA/wAAAAEAAAD/AAAAAQAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAABP//AAABAAEAAP8AAAEAAQAAAAAAAQAAAAAAAAAAAQAAAP8AAAEAAAAA/wAAAAEBAAAAAAAAAAEAAP8AAAAAAAAA/wAAAQAAAAD/AAAAAAAAAAAAAAAAAQAA/wAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAA//8AAAEAAAD/AAAAAQAAAP8AAAABAAEAAAAAAAEAAQAAAAAAAf8AAAAAAAAAAAEAAP8AAAAAAAAAAAAA/wAAAAH/AAD/AAAAAf8AAP8AAAAB/wAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAD/AQAAAAAAAf8BAAAAAAAB/wAAAAAAAAH/AQAAAAAAAf8BAAAAAAAA/wAAAAAAAP8AAAABAAAA/wAAAAH/AAD/AAAAAQAAAP8AAAAB/wAA/wAAAAEAAAD/AAAAAf8AAAAAAAAA/wEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAP8AAAAAAAAA/wAAAAEAAAD/AAAAAAAAAP8AAAAAAAAA/wAAAAAAAAD/AAD/AAAAAQAAAP8AAAABAAAA//8AAAEBAAD/AAAAAQAAAAD/AAAAAAAA/wAAAAEAAAAA/wAA/wAAAAH/AAD/AAAAAQAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAEAAAAAAAAAAP8AAP8AAAABAAAAAP8AAP8AAAABAAAA/wAAAAH/AAAAAAAAAP8AAP8AAAAB/wAA/wAAAAH/AAD/AAAAAf8AAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAP8A/wABAAEAAAAAAAD/AAAAAAAAAAAAAAD/AAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAD/AAAAAQAAAP8AAAAB/wAA/wAAAAEAAAAA/wAAAAAAAP8AAQABAAAAAAABAAAAAAAAAAEA/wAAAAEAAQAAAAAAAAABAAABAAAA/wAAAAAAAAAAAAAAAQAAAP8AAAAAAAD/AAAAAQEAAAD/AAAAAQAAAP8AAAAAAAAAAAAAAgAA/wAAAQAAAAEAAP8BAAAAAP8AAAEAAAAA/wAAAAAA/wH/AP8BAAAAAQAAAAD/AAAAAAABAP8AAAEAAAABAAAAAQAAAAEAAAABAAAAAAAAAAH/AP8BAAAAAQAA/wEAAAABAAAAAQAAAAEAAAABAAAAAP8AAQEAAAABAAAAAP8AAAAAAAAB/wAAAQAAAAAAAAAB/wAAAAAA/wEAAAAAAAAAAQAAAAD/AAABAAAAAQAAAQH/AAAAAAABAAAAAAEAAAEBAAAAAf8AAAEAAAABAAD/Af8AAAEAAP8AAAAAAQAAAAAAAAAB/wAAAAAAAAEAAAAAAAD/AQAAAAAAAAAB/wAAAAAAAAH/AAABAAABAQEA/wD/AAABAAAAAQAAAAD/AAABAAAAAQAAAAH/AAEBAAAAAQAAAQH/AAABAAABAP8AAAAAAAAAAAABAf8AAAEAAAEAAQAAAAAAAQD/AP8AAAAAAAAAAAAAAAAB/wAAAQAAAAAAAAAAAAAAAQAAAAH/AAAAAAAAAAAAAAH/AAABAAABAQAAAAEAAAABAAAAAQAAAAD/AAAAAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAABAf8AAAAAAAABAAAAAQAAAAEAAAABAAAAAQAA/wEAAAAB/wD/AAAAAAEAAP8BAAAAAQAAAAEAAAABAAAAAQAAAAD/AAAAAAAAAAAAAQH/AAAAAAAAAQAAAAEAAAEBAAAAAP8AAQEAAAEA/wAAAAAAAQEAAAABAAAAAQAAAAEAAAEB/wAAAAAAAQAAAAABAAABAQAAAAH/AAABAAAAAQAA/wH/AAABAAD/AAAAAAEAAAABAQAAAQAAAP8AAAABAAD/AQAAAAH/AAEBAAD/AP8AAAEAAP8B/wAAAQAAAAAAAAABAAAAAQAAAAEAAAAA/wAAAQAAAAEAAAAB/wD/AQAAAAEAAAEB/wAAAQAAAAH/AAABAAD/AP8AAQEAAAABAAAAAQAAAAH/AAAAAAABAf8AAAEAAP8AAAAAAAAAAAH/AAABAAABAf8AAAAAAAAB/wAAAAAA/wAAAAABAAAAAf8ABAABAAAAAP8AAAABAAAA/wAAAQAA/wD/AAEBAAAAAP8AAQAAAP8A/wAAAAEAAQAAAP8B/wABAAAA/wD/AAD/AAABAQAAAAAAAP8AAAABAQAAAAAAAAAA/wD/AAAAAAAAAAAAAAD/AAEAAQD/AP8AAAAAAQAAAAD/AP8AAQABAQAAAAAAAAAAAAD/AP8AAQEBAAAAAAAAAf8AAAAAAAAA/wAAAAAA/wEAAAEA/wABAAAAAAAAAP8B/wAAAAEAAAD/AAAAAAABAAAA/wAAAAEAAAABAAAAAAD/AAABAAAAAAAA/wAAAAAAAAAAAf8A/wAAAAEBAQABAAAAAAH/AP8AAAABAP8A/wAAAAEA/wD/AAAAAAEAAAEA/wD/AAAAAQEBAP8A/wABAAAAAAAAAAAAAAAAAP8AAAAAAAAA/wD/AQAAAQD/AP//AAABAAAAAAAAAAAA/wAAAQEAAAAAAAAA/wD/AQAAAQABAAAAAAAAAP8AAAABAAAB/wAAAAEA/wAAAAEBAAD/AP8AAQAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAP8AAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAAAAAAAP8AAAABAAAAAQAAAP8AAAAAAQAA/wD/AAAAAAAAAAAA/wABAAEA/wD/AAAAAQEBAP8A/wABAAAA/wAAAAEB/wD/AAEAAQD/AP8AAAABAQAAAAD/AP8BAAABAP8A/wAAAAEAAAD/AAEAAQAAAAAAAAD/Af8AAAABAAAA/wAAAAAAAQAAAP8AAAABAAAAAQAAAAAA/wAAAQAAAAAAAAAAAAAAAAAAAAEBAAAA/wABAAAAAAAAAAAA/wAAAQAAAAD/AAEAAAAAAP8AAAEBAAAA/wABAAAA/wAAAAEBAQD/AP8AAQAAAAAAAAABAP8AAAABAAAAAAAAAP8A/wAAAAEA/wAAAQAAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAAAAAD/AAEBAAAAAAEAAAAAAAAAAAAAAAAAAAD/AP8AAAABAP8AAAEAAAAAAAAAAAAABAD/AAAAAQEAAP//AAABAAAAAAEAAQAAAAD/AAD/Af8AAAAAAAEAAQD/AAAAAAAAAAH/AQD/Af8AAQABAAABAAAAAAAAAAAAAAH//wAAAQEAAAAAAAEAAAAAAAAAAAAAAAAAAAAB/wAAAAEBAAEA/wD/AAAAAAAAAAAAAAAA/wEA/wEAAAEAAQD/AP8AAP8AAP8BAAAB/wEAAAH/AAAAAQAA//8AAQEBAAAAAAD/AAAAAQD/AAEAAQAAAAAAAAABAAAAAAAAAAAAAf8AAAABAAAAAAAAAAABAAEAAAAAAAAAAQAAAP8A/wAA/wEAAAH/AAD/AAD/AQAAAf8BAAAB/wAAAAEAAAD/AAD/AQAAAf8AAAABAAAA/wABAAEAAP8AAAEBAQAAAAAAAAAAAAD/AAAAAQEAAAD/AAAAAQAB/wAAAAEAAAEAAAD/AP8AAf8AAP8BAAAB/wAA/wEAAAAAAQAB/wAAAAEAAAAAAQAAAAAAAAAAAAAAAQAAAP8AAQABAAD/AAABAQEAAAAAAAAAAAAAAAAAAAAAAAEA/wAAAAEAAf8AAAABAAABAAEAAAAAAAEAAAAAAAAAAQD/AAAAAQAAAAAAAf8AAAABAAABAAAAAAAAAAH/AAAAAQAAAAD/AAEAAQAA/wAAAAEBAAAAAAAAAAAAAf8AAAABAQABAP8AAAAAAAH/AQAAAQAAAQAAAAAAAAAB/wAAAAEBAAEA/wAAAAEAAAAAAAEAAAAAAAAAAQAAAAAAAAAB/wAAAAEAAAAAAAABAAEAAAAAAAAAAQAAAAAAAAAAAAH/AAAAAQAAAAAAAAAAAQABAAAAAAAAAAEAAAAAAAAAAP8AAAABAQAAAP8AAAABAAAAAAABAAAAAAAAAAAAAAAAAAAAAP8AAAABAQAAAP8AAQABAAD/AAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAQAA/wAAAQEAAAAAAAABAP8AAAABAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAA/wAAAAAAAAABAAAAAAAAAAEAAP8AAAEBAAAAAAAAAQD/AAAAAQAAAAAABAAAAQAA/wAAAAABAAD/AAAAAAAAAAAAAP8AAAABAAEA//8AAAAAAAAAAAAAAQABAAAAAAAB/wEAAAAAAAAAAAAAAAAAAAEAAAAAAQAAAAAA//8AAAEAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAABAAEAAAAAAAD/AQAAAAAAAAABAAAAAAD/AAEAAf8AAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD/AAEAAQAAAAAAAAAAAAAAAAAAAAD/AQAAAAAAAP8BAAAAAAAA/wEAAAAAAAD/AQAAAAAAAP8BAAAAAAAA/wEAAQAAAP8AAQABAAAA/wAAAAH/AAD/AAAAAQAAAP8AAAAB/wAA/wABAAEAAAAAAAAAAP8AAAAAAAAB/wEAAAAAAAH/AQAAAAAAAf8BAAABAAD//wAAAf8AAP8AAAABAAAA/wAAAAEAAAD/AAEAAQAAAP8AAAAB/wAA/wAAAAEAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAABAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAEAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAA/wABAAEAAAAAAAAAAAAAAP8AAAABAAAA/wAAAAH/AAD/AAEAAQAAAAABAAD//wAAAQAAAP8AAAABAAAA/wAAAAH/AAD/AAEAAQAAAP8AAAAB/wAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAQAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAA/wAAAAABAAAAAAAAAAAAAgEBAAAAAQAA/wEAAAEBAAAAAf8A/wAAAAEBAAAAAAAAAAEAAP8AAAABAQAA/wH/AAAAAAAAAf8AAAEAAAAAAAAAAQAAAP8AAAAB/wD/AAAAAQEAAP8B/wAAAAAAAAH/AAABAAAAAAAAAAAAAAABAAAAAQAAAAD/AAABAAAAAQAAAAAAAAAA/wAAAQAAAAAAAAEB/wAAAAAAAAD/AAAAAAABAQAAAAD/AAABAAABAQAA/wEAAAABAAD/AAAAAAEAAP8BAAAAAf8AAAAAAAAAAAABAQAAAAAAAAABAAAAAAAAAAEAAAAB/wAAAAAAAAH/AAAAAAAAAf8AAAAAAAEB/wAAAAAAAQH/AAAAAAABAf8AAAEAAAEB/wAAAAAAAQEAAAABAAABAQAAAAAAAAABAAAAAAAAAQEAAAABAAD/AQAAAAAAAAABAAAAAf8AAAAAAAAB/wAAAAAAAAH/AAD/AAAAAQAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAEAAAAB/wAAAQAAAAAAAAABAAAAAQAAAAAAAAABAAAAAf8AAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAQAAAAH/AAABAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAB/wAAAQAAAAAAAAAAAAAAAQAAAAEAAP8AAAAAAAAAAAEAAAABAAD/AAAAAAAAAAABAAAAAQAAAAH/AP8AAAAAAQAA/wEAAAABAAD/AAAAAAEAAP8BAAAAAQAA/wAAAAABAAD/AQAAAAH/AAAAAAAAAAAAAQEAAAAAAAAAAQAAAAAAAAEBAAAAAAAAAQEAAAAAAAABAQAAAAAAAAAA/wABAQAAAAEAAAEBAAAAAAAAAQEAAAABAAABAf8AAAAAAAEBAAAAAQAAAQEAAAAAAAAAAf8AAAEAAAABAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAB/wAAAQAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAQAABP8A/wABAAAAAQABAAAA/wAAAAAAAQH/AP8AAAABAAAAAAAAAAABAAAAAAAAAAAAAAABAAD/AAAAAQD/AAABAQAAAP8AAAEAAAAAAAABAP8A/wAAAAEAAAAAAf8AAAAAAAAA/wD/AQAAAQAAAP8AAAAAAAAAAAEAAAEAAAAAAP8AAAEBAAAAAAAAAP8AAAEBAAAAAAAAAQAAAQAAAAABAAAAAP8AAAEAAAAA/wAAAAAAAQAAAAAAAAABAQAAAAAAAAEAAAAAAAAA/wH/AAEAAQD/AP8AAQEAAAAAAAAAAQAA/wAAAAEAAAAAAQAAAQAAAAABAAABAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAA/wD/AAEAAAAAAf8AAAAAAAAAAAAAAAAAAAEAAAEAAAAAAQAAAAAAAAAAAAABAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAf8A/wAAAAEBAAAAAP8AAAAAAAEBAAAAAAAAAAAAAAAAAQAAAf8AAAAAAAAAAAAAAP8AAQEAAAAAAAAAAAAAAAEBAAAA/wAAAAAAAAD/AAABAAAAAAEAAAD/AAAAAAAAAQEAAAD/AAAAAAAAAAAAAAAAAAABAAAAAAEAAAAAAP8A/wABAQAA/wAAAAEAAAD/AAAAAQEAAAAAAAAAAP8A/wEAAAEAAAD/AAAAAQAAAAEBAAAAAAEAAAD/AAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAEB/wAAAAEAAQD/AAAAAAABAQAAAAABAAEA/wAAAAAAAQEAAAAAAAABAAAAAAAAAP8B/wABAAEA/wD/AAEBAAAAAAAAAAEAAAAAAAAAAQAA/wAAAAEBAQD/AP8AAQEAAAAAAAD/AP8AAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAAAAAAAAABAAAAAAAAAAD/AAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAP8AAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAABAEAAQAAAAAAAAAAAAAAAQD///8AAAEBAAAAAAAAAAAAAAD/AAEAAQAAAAAAAAD/AAD/AAAAAQEAAAAAAAAAAAAAAAEAAAAAAAAA/wAAAAEAAQAAAP8AAAABAAAAAAAAAAAA/wAA/wAA/wEBAAEAAAD//wAA/wAAAAEBAAD/AAEAAf8AAP8AAAABAQEAAP8AAP8BAQAB/wAA/wEAAAH/AAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AAEAAQAAAAAAAAAAAP8AAP8AAP8AAAABAQAA/wABAAD//wAAAAEAAQAAAP8B/wAA/wAAAAEAAAH/AAD/AQAAAP//AAABAQAB/wAA/wEBAAH/AAD/AQAAAQABAAAAAAAAAAAA////AAEBAQAAAAAAAAD/AP//AADhV+tWAAAgAElEQVQAAQEAAQAAAP///wAAAAAAAAEBAAH/AAD/Af8AAP//AAABAQAB/wAAAAEAAAAA/wABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAD/AAEAAQAAAAAAAAAAAAAA/wD//wAAAAAAAAEBAAD/AAEAAP//AAAAAQABAf8A/wABAAD//wAAAAAAAQEAAAAAAQD/AAAAAf//AAABAQAAAAAAAAABAAD//wAAAQEAAQAAAAAAAAAB//8AAAEBAAAAAAAAAP8AAP8AAP8BAQABAAAA////AAAAAAAAAQAAAQABAP///wAAAAAAAAEBAAEAAAAA//8AAAEBAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAP8A/wABAAEAAAAAAAAAAAD/AAD/AAD/AAAAAQEAAP8AAQAA//8AAAABAAEB/wD/AAEAAP//AP8AAAABAQAAAAABAAAAAAAA//8AAAEBAAAAAAAAAAAAAP//AAABAQAAAAAAAAAAAP///wABAQEAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAQAAAAAABP//AAABAAAAAAAAAAAAAAABAQEA//8AAAEAAAAAAAAAAQEBAP//AAAAAAAAAAABAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAEAAAH/AAD/AAAAAAD/AAAAAQABAQAA//8AAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAQAA/wAAAAAAAAD/AAAAAAAAAP8BAAAAAAD//wAAAQAAAAAAAAD/AAAAAQAAAAAAAQABAAAA/wAAAAAA/wABAAEAAQEAAAD/AAAA/wEAAAD/AAEAAQAAAAAAAAAAAAAAAQABAAAA//8BAAAAAAAA/wEAAQAAAP//AAAAAAAAAP8AAAAAAAAA/wEA/wAAAAEAAAAAAAAAAQABAAD/AAD/AP8AAQABAAEAAAAA/wAAAAAAAAAAAQABAAAAAP8AAAAAAAAA/wEAAQAAAP8AAAAAAAAAAP8AAAABAQAA/wAAAAAAAAAAAAAAAAAAAQEAAAD/AAAAAAAAAAABAAAAAAAAAAAA/wD/AAEAAQABAAAA/wAAAAD/AQAAAP8AAQABAAAAAAAA/wEAAAAAAAEAAQAAAAAAAAABAAD/AAABAAAAAAABAAD/AAAAAQAAAP8AAAEAAQAA/wAAAAAAAAAAAAAAAAEA//8AAAAA/wAAAAEAAQEAAP//AAAAAAAAAAAAAAEAAQAA/wAAAAAAAAEAAQAAAAAAAP8AAAABAAAAAAEAAP8AAAAAAAAAAAAAAAAAAP8AAAABAAAA/wAAAAEAAAAAAAEAAQAAAP8AAAAAAP8AAQABAAEBAAAA/wAAAP8BAAAA/wABAAEAAAAAAAD/AQABAAAAAAABAAAAAAAA/wEA/wAAAAEAAAABAAEAAP8AAAAAAAD/AAAAAQABAP//AAABAAAAAAAAAAEAAQAA/wAA/wD/AAEAAQAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA/wAAAAAAAAABAQAA/wAAAAAAAAAAAAAAAQEA//8AAAEBAAAA/wAAAAEBAAD/AAAAAAAAAgAA/wAAAQAAAAEAAAABAAAA//8AAAEAAAAA/wAAAQAA/wD/AAEBAAABAQAAAAH/AAAAAAAAAf8AAAEAAAABAAAAAQAAAAEAAAAA/wAAAQAAAAAAAAABAAAAAQAAAQAAAAEAAAAA//8AAQEAAAAA/wABAQAAAAAAAAABAAAAAAAAAAEAAAEBAAAAAAAAAAEAAAAB/wAAAAAAAAH/AAAAAAABAf8AAAEAAAABAAABAQAAAAAAAAAB/wAAAQAAAQEAAAEAAQAAAf8AAAAAAP8BAAAAAP8AAAABAAABAAD/AQAAAAAAAAAA/wAAAAAAAAH/AAAAAAAAAf8AAAAAAAAB/wAAAAAAAQEAAAAAAAAAAf8AAAAAAAAB/wD/AAAAAAEAAP8BAAABAQEAAAD/AAAAAAAAAQAAAAAAAAEBAAAAAQAAAAEAAP8AAAABAQAAAAAAAAAA/wAAAAAAAAH/AP//AAAAAQAA/wEAAAAAAAAAAP8AAP8AAAABAAAAAP8AAAAAAAABAAAAAQAAAQAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAEAAP8BAAAAAQAAAQEAAAAA/wAAAQAAAAD/AAAAAAAAAQAAAAEAAAABAAAA/wAAAAD/AAABAAAAAQAAAAAAAP8A/wAAAQAAAAEAAAEAAAABAAAAAP//AAEBAAAAAP8AAQABAAABAAAAAQAAAAAAAAABAAAAAAAA/wEAAAD/AAD/AAAAAAEAAAABAAD/AQAAAAD/AAEBAAAAAAAAAQEAAAAAAAAAAf8AAAEAAAEBAAABAAEAAAH/AAAAAAD/AQAAAAD/AAAAAQAAAQAA/wEAAAAA/wAAAQAAAAEAAAABAAAAAAAAAQD/AAABAAAAAQAAAAEAAAAB/wABAAAAAAAAAAEBAAAAAf8A/wAAAAABAAD/AQAAAQEBAAAA/wAAAQAAAAEAAAABAAABAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAQEAAAAAAAAAAQAAAAAAAAABAAAAAQAABAABAAAAAP8AAAABAAAA/wAAAQAAAQD/AAABAAAAAP8AAAAAAP///wABAQEAAAAAAAAB/wAAAAAAAAD/AAAAAAAAAAAAAAAAAP8AAAAAAP8AAQAAAP8AAAAAAAAA/wEAAAEA/wAAAAEAAAD/AAABAAAAAAAAAAH/AAAAAQAAAf8AAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAD/AAAAAQD/AP8AAQEAAP8AAAAAAP8AAAAAAAABAAABAAAAAAAAAAEA/wAAAQAAAQD/AAAAAAABAAAAAAEAAAAAAAAAAf8AAAAAAAABAAAAAAAAAAEAAAAAAAAAAf8A/wAAAAAAAAAAAAAAAQH/AAAAAAABAf8A/wAAAAAAAAD/AAAAAAEAAAEA/wD/AAAAAQEAAAAAAAAAAAEAAAD/AAEBAQD/AP8AAQABAAAAAAAAAQAAAAAAAAAB/wAAAAEAAAD/AAABAAD/AAAAAQAAAAAA/wAAAQAAAAD/AP8AAAAA/wAAAAEAAAEA/wAAAAAAAAAAAAAAAAAAAQAAAAAAAAAA/wAAAAAAAAAAAAABAQAAAP8A/wAAAAAB/wABAAAAAAABAAAA/wAAAQAA/wAAAAEA/wD/AAAAAQEAAAAAAAD/AP8AAAAAAP8BAAABAP8AAAABAAAA/wAAAQAAAAD/AAAAAAD/AAAAAQEAAP8AAAABAQEAAAAAAP8B/wAAAAAAAAAAAAAAAQABAAAAAAEAAAAA/wAAAQEA/wD/AAEBAAD/AAAAAAD/AAAAAAAAAQAAAQAAAAAAAAABAP8AAAEAAAEA/wAAAAAAAQAAAAABAAD/AP8AAQAAAP8AAAAAAQAAAAAAAAEA/wAAAAEAAAD/AAAAAAAAAf8AAAABAAAA/wAAAAAAAQH/AP8AAAAAAAAA/wAAAAABAAABAP8AAAABAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAAAABAD/AAAAAQEAAAAAAAD/AAAAAQEA/wAAAAD//wABAQEAAQAAAAAAAAAAAAAAAQABAP//AAAAAf8AAAABAAAAAAAAAP8AAAABAAAA/wABAAEAAAAAAAAAAAABAAAAAP//AAAAAQAAAAAA/wABAAEAAAD/AQAAAP8BAAABAAAA/wAAAAEBAAD/AAAAAQAAAP8AAAAB/wD//wAAAAEAAP///wABAQEA////AAEBAAABAAEAAP8AAAEA/wAAAAEAAAEAAAD//wAAAAEAAAAAAP8AAQABAAAA/wAAAAEAAAAAAAAAAAEAAAAA/wAA/wEAAAH/AAD/AAAAAQAA//8AAAABAAD//wAAAAEAAAEAAQD/AP8AAP8BAAAAAAAAAP8AAQABAAABAAAA//8AAAABAAAAAAAAAAAAAAAAAP8AAAABAAAAAAABAAABAAAAAAAAAAAAAAAAAAAA/wAAAQEBAAD/AAAAAAAAAAEBAAD/AAAAAAAAAAAAAAABAQAA/wAAAAD/AAEAAQAAAQAAAP//AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAD/AAAAAAAAAAEAAQD/AAAAAQAAAQAAAP8AAP8BAQAB/wAAAAAAAAAAAAABAQAAAP8AAAEA/wAAAAEAAAEAAAD//wAAAAEAAAAAAP8AAQABAAAA/wAAAAEAAAABAAAAAAAAAAEA/wAAAAAAAQAAAAAAAAAAAAEAAAEAAAD/AAD/AQAAAf8BAP8AAAABAAAAAQEBAAD/AAABAP8AAAABAAABAAAA//8AAAABAAAAAAD/AAEAAQAAAP8AAAABAAAAAAAAAAAAAAABAP8AAAABAAEAAAAAAP8AAAABAAABAAAA/wAA/wEBAAH/AAD/AAAAAQAAAAABAQAA/wAAAAD/AAEAAQAAAQAAAP//AAAAAQAAAQAAAAAAAAAAAQAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAgAAAQAAAAAAAAAAAAAAAQAA/wAAAP8AAAAAAQAA/wAA//8AAAAAAAAA/wAA//8AAAEAAAAAAAEA//8AAAD/AAAA/wEAAP8AAAEAAQD//wAAAAAAAAD/AAAA/wAAAAABAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAD/AAABAAEA//8AAAAAAAAAAAAAAAAAAAAAAQABAAAAAAABAAEAAQAA/wAAAQABAAD/AAD//wAAAAAAAAAAAQAAAAAA//8AAAAAAQAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAA//8AAAAAAQAAAAAAAAABAAAAAAAAAAEAAQAAAAD/AQABAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAD/AAAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA/wAAAP//AAABAAEAAAAAAAAAAQAAAAAA//8AAAAAAAAAAAAAAf8AAAAAAAAAAAAAAAAAAP//AAAAAAAAAAABAAAAAAAA/wAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAP8AAAAAAAAAAAAAAAD/AAAAAAAAAQAAAAAAAAAA/wAAAAAAAAAAAQAAAAAAAP8AAAAAAQD/AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAQAAAAAA/wAAAAAAAQD/AAAAAP8AAAAAAAAB/wAAAAAAAAEAAAAAAAAAAP8AAAAAAAAAAAEAAAAAAP//AAAAAAEAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAD/AAEAAAAAAP8AAAAAAAEAAAAAAAD/AAAAAAAAAf8AAAAAAAABAAAAAAAAAP//AAAAAAAAAAABAAAAAAAA/wAAAAABAAAAAAAA/wAAAP8AAAAAAAD//wAAAP8BAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAD/AAAAAAAAAP8AAAAAAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAD//wAAAP8AAAD/AAAA/wAAAgAAAAAA//8A/wAAAAAB/wAAAQAAAAEAAAEA/wAAAQAAAAH/AAABAAD/AAAAAAH/AAAAAAAAAP8AAAAAAAABAAAAAQAAAAEAAAAA/wABAQAAAAAAAAAB/wAAAQAAAAH/AAEBAAAAAAAAAQAAAAABAAD/AP8AAAD/AAABAAAAAAAAAQEAAAAA/wAAAP8AAAAAAAAA/wAAAAAAAAD/AAAAAAAAAQAA/wH/AAABAAAAAP8AAAEAAAAB/wAAAAAAAQEAAAABAAAAAf8AAAAAAP8AAAAAAQAA/wEAAAAAAAAAAAAAAAAAAAAA/wAAAQAAAAD/AAAAAAAAAP8AAAAAAAAB/wAAAAAAAAD/AAAAAAAAAP8A/wAAAAABAAAAAQAAAAD/AAABAAAAAQAAAAEAAAAAAAAAAQAAAAEAAAEBAAAAAAAAAAEAAAAAAAD/AP8AAAAAAAAA/wAAAAAAAAH/AAAAAAAAAP8AAAEAAAABAAAAAQAAAAAAAAEBAAAAAQAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAEAAAAB/wD///8AAAAAAAEBAAAAAQAAAAEAAAAAAAAAAQAAAAH/AAABAAAAAAAAAAEAAAAB/wABAQAAAAAAAAEAAAAAAQAAAAH/AAAAAAD/AAAAAAEAAP8BAAAAAP8AAQAAAAABAAABAQAA/wD/AAAAAAAAAQAAAAH/AP8BAAAAAAAAAAEAAAABAAAAAf8AAAAAAAEBAAAAAQAAAAH/AAAAAAD/AAAAAAEAAP8BAAAAAAAAAAAAAAABAAABAQAAAAAAAAEAAAAAAQAA/wEAAP8A/wAAAAAAAAEAAAABAAAAAf8AAAAAAAEBAAAAAQAAAAEAAAAA/wAAAQAAAAEAAAABAAAAAP8AAAEAAAAAAAABAQAA/wD/AAABAAAAAQAAAAEAAP8A/wAAAQAAAAAAAAABAAD///8AAAEAAAAA/wAAAQAA/wD/AAABAAAAAQAAAAEAAP///wABAQAAAAEAAAABAAD/AP8ABAEB/wAAAAEAAQAAAAAAAQAAAP8AAAAAAAABAAAAAAAAAAAAAAAAAAAAAf8AAQAAAAAB/wABAAAA/wH/AAAAAAAAAAEA/wD/AAEBAAAAAP8A/wAAAAEAAAAAAP8AAAAAAAAA/wAAAQAAAAABAAAA/wAAAAAAAAEAAAAA/wAAAQAA/wAAAAEBAAAAAAAAAAH/AAAAAAAAAf8AAQAAAAAB/wAAAAAAAQAAAAAA/wAAAQAAAAD/AAAAAAAAAf8AAAABAAAA/wAAAAAAAAH/AAEAAQAAAP8AAQAAAAABAAAAAAAAAf8AAP8AAAAAAAAAAAAAAAAA/wABAAAAAAH/AAAAAAAAAf8AAAAAAAABAAAAAAAAAQH/AAAAAAAAAAAAAAEAAAAA/wAAAAAAAAAAAAABAAAAAAEAAAD/AAAAAAAAAQEAAQD/AAABAAD/AAAAAAEAAAAAAAAAAAAAAQAAAAAB/wAAAAAAAAD/AAAAAAABAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAQABAAAA/wABAAAAAAEBAAAA/wAAAAAAAAABAAAB/wAAAAAAAAAAAAEAAAAAAQAAAAD/AAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA/wAAAQAAAAAAAAAAAAAAAP8AAAEAAAAAAQAAAP8AAAAAAAABAAABAP8AAAAAAAEAAQAAAQAAAAD/AAAAAAAAAAAAAQEAAAAA/wAAAAAAAAAAAAEA/wAAAQAAAAABAAAA/wAAAAAAAAH/AAAAAQAAAP8AAAAAAAAB/wABAAEAAAD/AAEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAAABAQAAAP8AAAAAAAAAAAAAAAAAAAH/AAAAAQAAAP8AAAAAAAABAAAAAP8AAAAAAAAAAAAAAQAAAAAAAAAA/wAAAAAAAQEBAAAA/wAAAAAAAAAAAAEBAAAAAP8AAAAAAAAAAAABAQAAAAD/AAAAAAAAAP8AAQEAAAAAAAAAAP8AAAAAAAEBAAAAAP8AAAAAAAAAAQABAQAAAv//AQAAAAAAAAAAAP8A/wAAAAEAAAABAAD/AQAAAAAAAAAAAP///wABAAEAAAABAAD/AQAAAAEAAQABAAAAAQAAAP8AAQABAAAAAAD/AAEAAP8AAAAAAQAA/wEAAAAAAAAAAAAAAAAAAP8AAAAAAQAAAAAAAf8AAP8AAQAA/wEAAQABAP//AAD/AAAAAP8BAAEAAAAA/wEAAAABAAD/AQAAAAEA//8AAAAAAQAAAAEAAAAAAAAAAQAAAAEAAAAAAP8AAQAAAAAAAAAAAAD/AAD/AAAAAAABAAAAAAAA/wEAAAABAAAAAAAA/wAAAAAAAAAAAQAAAAEA//8BAAEAAQAA/wEAAAAAAAD/AAAAAAAAAP8BAAAAAQAAAAEAAAABAAD/AQD/AAAAAAAAAAAAAQAA/wAAAAABAAAAAAD/AP8AAP8BAAD/AQAAAAAAAP8AAAAAAAAAAAAAAAAAAP//AQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAEA/wABAAAAAAAAAAAAAP8AAAAAAAAAAAEAAAD/AAD/AQD/AAAAAAAAAAAAAAAA/wEA/wAAAAAAAQAAAAAA/wAAAAD/AQAAAAEAAAAAAAAAAQAA/wEAAAABAAAAAQAAAAEAAP8BAAAAAAAAAAAAAAAAAAD/AAAAAAEAAAAAAP8A/wAA/wEA//8AAAAAAAAAAAAAAP8BAP//AAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAD/AAEAAAAAAAAAAAAA/wAA/wAAAAAAAQAAAAAAAP8BAP8AAAAAAAEAAAAAAAD/AQD/AAAAAAABAAAA/wD/AAAAAP8BAAAAAQAAAAAAAAABAAD/AAAAAAEAAAABAAAAAQAA/wEA/wAAAAAAAAAA/wEAAAAAAAAAAQAAAAEAAP//AAAAAQAAAAEAAAABAP//AAAAAAEAAAABAAAAAQAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAEAAAABAAD/AAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAA//8AAAD/AAAA/wD///8AAQABAAABAQAA//8A/wD/AAABAAD/AP8AAP//AP///wAAAAAA/wAAAAAAAQABAAAAAAEAAP8A/wAAAQAA/wAAAAAAAAAA/wEAAAEAAAAAAAAAAAEA/wEAAAD/AAAAAf8A/wAAAAEBAAABAAEAAAAAAP8AAAAAAQAA/wD/AAAAAAAA//8AAQEAAP8AAAABAAAAAAAAAAAA/wD///8AAAAAAAD//wAAAAAAAAAAAAABAAABAAEAAAD/AP//AAAAAQAAAAAAAAEAAAAAAAAAAQABAAABAAD/AP8AAQEAAP8A/wAAAAAAAQAAAAABAAABAAAAAAEAAAD//wAAAAAA////AAABAAAAAAAAAAAAAAAA/wAAAQAAAAAAAAAAAAAAAAEAAAEAAAABAAABAAAAAAEAAAEAAAAAAAAA/wAAAAEAAAAAAP8AAAAAAP///wAAAP8A////AAAAAAAAAAAAAAAAAP///wAAAAAAAP//AAAAAAAAAAAAAAEAAAAAAQAAAP8AAP8AAAABAAABAAEAAAD/AAAAAAAAAQAAAQABAAAA/wD/AAEAAP8AAAABAAD/AP8AAAABAP///wAAAQAAAP//AAAAAAD///8AAAEAAP8AAAAAAAAAAP8BAAABAAAAAAAAAAAAAAEAAQAAAQAAAQEBAAAA/wAA/wEAAAEAAAEBAQAAAAAAAAABAAAA/wAAAAAA////AAAAAAD///8AAAAAAAAAAAAAAP8A////AAAAAAAA//8AAAAAAAAAAAAAAQAAAQABAAAA/wD//wAAAAEAAAEAAQAAAP8AAAAAAAABAAABAAEAAAD/AAAAAQAB/wAAAAEAAP8A/wAAAAEA////AAABAAAA//8AAAAAAP///wAAAQAAAAAAAAAAAAAAAf8AAAAAAAAAAAAA//8AAAEBAAAAAAAAAAAAAAD/AAEBAQAAAAAAAAAAAAD//wAAAAEAAAAAAAAAAAD///8AAAABAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAA/wAAAAEABAAAAAAA/wAAAAAAAAEBAQAAAAAAAP8AAAAAAAABAQAA//8AAAAAAAAAAAEAAP8AAAAAAAAAAAAAAAABAAEAAAAA/wAAAQEAAP//AAABAAAAAQEBAP8AAAAA/wAAAQABAP8AAAABAAAAAP8AAAAAAAAAAAAAAQABAP8AAAAA/wEAAQAAAAAAAQAAAAAAAAAAAAAAAQAA/wAAAAAAAAAAAAAAAAEA//8AAAEAAAD/AAAAAQABAAAAAAABAAAA//8AAAEAAQAA/wAAAAAAAAAAAAAAAAAAAAABAAEAAAAA/wAAAAAAAP8AAQABAAAAAAAAAAD/AAAAAQEAAP8AAAAAAAAAAAAAAAABAAD/AAD/AQEAAf8AAAABAQD//wAAAQABAP//AAABAAEAAAAAAAAAAAAAAAAAAAAAAP8AAQABAAAAAAAAAP8AAAAAAAAAAQAAAP8BAAABAAAAAP8BAP8AAAAB/wEAAAAAAAEAAQAA/wAAAAAAAP//AAABAAEA/wAAAAEAAAAA/wAAAQABAAD/AAAAAAAA/wAAAAEAAAAAAAEAAAAAAAAAAAAA/wAAAAABAAAAAAD/AAAAAQAAAAAAAQABAAAAAAABAAAAAAAB/wEA/wAAAAAAAQD//wAAAQABAAD/AAABAMSXq20AACAASURBVAEAAP8AAAEAAQD/AAAAAQAAAAD/AAAByHE3jgAAAAAAAAEAAAAAAAABAAAA/wAA/wABAAEAAAD//wAAAQAAAAAAAQAAAAAAAAABAAABAAABAAEA//8AAAAAAAAA/wAAAAABAAAAAAABAAAA//8AAAEAAQAA/wAAAAAAAAAAAAAAAAAAAAABAAEAAAAA/wAAAAAAAAAAAQAAAAAA/wAAAAEAAAAAAAEAAAAAAAAAAQAA/wAAAQABAAAAAAAAAAEAAP8AAAABAQD//wAAAQABAP//AAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAA/wAAAAAAAP8AAAABAAEAAAAAAAABAAAA/wAAAAABAAD/AAAAAAAAAAEAAAEAAQAA/wAAAAEAAAD/AAABAAEAAP8AAAAAAAAAAAAAAAABAAD/AAAEAAEAAAD/AAAAAQAAAAAAAP8A/wAAAQEAAP8AAAAAAAAAAQAAAf8AAAABAAAAAP8AAP8BAAABAAAAAAAAAAAAAAAA/wAA/wEAAQD/AAABAQAAAAAAAAAAAP8AAAABAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAA////AAEAAAAAAAEAAQD/AAAAAQAAAQAAAP8AAAABAAABAAAAAAAAAAAA/wAAAAEA/wD/AAEAAQAB/wAAAAEAAAAAAAAA/wAAAAEAAAAAAAAAAP8AAAABAAD/AAD/AAAAAAD/AAAAAQD/AP8AAQABAAAAAAAAAAAAAAEAAAD/AAD/AP8AAQABAAAA/wAAAAEAAAAAAAEB/wAAAAEAAP8AAAABAAAAAAAAAP8AAAABAAAAAAAAAQAAAAAAAAD/AAAAAf8AAP8BAAAA/wAAAAAAAAAAAAABAf8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAABAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAABAAAAAAAAAAAA/wAA/wEAAP8AAAABAAD/AAAAAQAAAAEAAAAAAAAAAAD/AAAAAQAA/wAAAP8AAAABAAABAAAAAAAAAAD/AAAAAQAAAAD/AAD/AQD/AAAAAQEAAAEAAAAAAAAAAAAAAAAAAAAAAP8AAP8BAP//AAABAQAAAQD/AAAAAQABAAAAAAAAAP8A/wABAAAAAAABAAD/AAAAAQAAAQAAAAAAAAAA/wAAAAEAAP8A/wABAAEAAf8AAAABAAAAAAAAAP8AAAABAAAAAAAAAAD/AAAAAQAA/wAAAAEAAP8A/wAB/wEAAQEAAAAAAAAAAAAAAAD/AAAAAQAA/wAAAAEAAAAAAAAB/wAAAAAAAAAAAAABAf8AAAABAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAP8AAAABAAEAAAAAAAAAAAAAAAAAAAAAAf8AAAABAAAAAAAAAAAAAAAAAP8A/wABAQAAAAABAAABAAAAAAAAAP8AAAABAAD///8AAAAAAAEBAQAEAAD/AAABAAAAAAEAAAD/AAEBAAAAAAAA/wH/AAEAAAABAAAA/wEAAAEAAAAAAAAAAAAAAAAAAAAAAP8A/wAAAAEAAAAAAf8A/wAAAAEA/wD/AAAAAP8AAAABAAAAAAAAAAAAAAAAAQAAAP8AAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAP8AAAABAAAA/wAAAAEB/wAAAAAAAAEAAAAA/wAAAAAA/wAAAAEAAAAAAP8AAAAAAAAAAAD/Af8AAQAAAAAAAAAAAQEAAAD/AP8AAAABAAAAAAAAAP8B/wABAAEA/wAAAAAB/wAAAAAAAAEAAAAA/wAAAAAAAAAAAAABAAAAAAAAAAH/AAAAAAAAAQAAAP//AP8BAAABAP8AAQEAAAAAAAD/AAAAAQEAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAB/wD/AAAAAAD/AAEAAAD/AAAAAQAAAAAAAAABAAAAAAEAAAAAAAAA/wAAAAEAAAABAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAD/Af8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAQAA/wAAAAEAAAAAAAAAAAAAAAABAAAAAAAA/wAAAAEBAAAAAP8AAAAAAAAAAAAAAAEAAAD/AAAAAAD/AAAAAAD/AAEBAQAAAP8AAAAAAAAAAAD/AP8AAQAAAAEAAAAAAAAAAP8AAAAB/wAAAAAA/wAAAAEAAQAAAf8AAAAAAAAAAAAAAAAA/wH/AAEAAAAAAAAAAAEBAAAA/wD/AAAAAQAAAAAAAAD/Af8AAQAAAAEAAAD/Af8AAQAAAAAAAQD///8AAQEAAAAAAAAAAf8A/wAAAAEAAAAAAQAA/wAAAAH/AAD/AQAAAQD/AAEBAAAAAAAA/wAAAAEAAAAAAAAA/wAAAAEA/wAAAAAAAAD/AAAAAAAAAAAA/wAAAAEAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAEBAAAAAAAAAAD/AAAAAAAAAAAAAAEAAAAAAAABAQAAAAAAAAAA/wAEAP8AAP8AAAABAQAA/wAAAAEAAAD/AAAAAf8BAAABAAD/AP8AAf8BAAAAAAAAAf8AAAAAAAAAAAD//wEAAQAAAAABAAAAAAAAAQD/AP8AAQAAAAAAAQEAAAD/AAAAAAAAAAH/AAAAAAD//wEAAQEAAAAAAAAA/wAAAAEAAAD/AAAAAQAAAP//AAEAAAAAAAAAAAEAAAD/AQAAAf8AAP8AAAABAAD//wAAAQEBAP8A/wABAAEAAP//AAABAAAB/wEAAAAAAAAB/wAAAAAA//8BAAEB/wAAAAEAAP8AAAEAAQAAAAAAAAEAAAD/AQAAAf8AAP8AAAABAAAAAAEAAAD/AAD/AAAAAQAAAP8BAAAB/wAA/wAAAAEBAAD//wAAAQEAAP8AAAAAAAABAf8AAAABAP//AAABAf8AAAABAAH/AAAAAAAAAAAAAAAB/wAAAAAAAAAAAAD/AQAAAf8AAQABAAAAAAAA/wAAAAD/AAABAAAAAAEAAP8AAAABAAAAAP8AAAABAAD/AAAAAAAAAAH/AAAAAQAA/wAAAAH/AAAAAQAB/wAAAAAAAAAA/wAAAQEAAAAAAAD/AAD/AQAAAQD/AAAAAQAAAAAAAP8AAAAAAAAAAf8AAAABAAD/AAAAAQAAAP//AAABAAAB/wEAAAAAAAAB/wAAAAAA//8BAAEBAAABAAAAAAAAAAD/AAAAAAAA/wEBAAEAAAAB/wEA/wEAAAEA/wAAAAEAAAEAAP//AQABAP8AAQEAAAAAAAAA/wEAAAEAAAD//wAAAQAAAf8BAAAAAAAAAf8AAAAAAP//AQABAf8AAAABAAD/AAABAAEAAAD/AP8BAQABAAAAAP8AAP8BAAABAQAAAAABAAAAAAD//wEAAQD/AAABAAAAAAEAAf8AAAABAAAA//8AAAEBAAD/AAAAAAAAAQH/AAAAAQAA/wAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAD//wAAAQEAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAQABAAAAAAAAAAAAAP8BAAAAAAAAAAAAAAAAAAD/AAAAAAEA/wAAAAEAAAAAAAEAAAAAAAD/AQABAQAAAP8AAAD/AAD/AAAAAQABAAEAAAD/AAAAAAAAAAAAAAAAAAAA//8BAAEAAAABAAAA//8AAAEAAAAAAAAAAP8AAAAAAAAA/wAAAAABAAAAAAAAAAAAAP8BAAAAAAAAAAAAAAAAAAD/AQABAAAAAP8AAAAAAQAAAAAAAQABAAD/AAAAAAAAAAAAAAD/AQAAAAAAAQAAAAD/AQAAAAAAAAAAAAAAAAD/AAAAAAABAAAAAAAA/wEAAAAAAAAAAAAAAAAAAP8BAAAAAAAAAAEAAAAAAAD/AQD/AAAAAf8AAAEAAQAA/wAA/wAAAAEAAAAA/wEAAAAAAAEAAAAA/wEAAAEAAAAAAAAAAAAAAAAAAAD/AQAAAAAAAAABAAAAAAAA/wEA/wAAAAEAAAABAAAAAAABAAD/AAD/AAAAAQAAAAD/AAAAAAEAAP8AAAAAAAAAAAAAAP8BAAAAAAAAAAAAAP8BAAAAAAAAAAAAAAAAAAAAAQAA/wAAAAAAAAAAAAAB/wAAAAABAP8AAAABAAAAAQAAAAAAAAAA/wEAAAAAAP8AAAAB/wAAAQABAAD/AAAAAAAAAAAAAP//AQABAAAAAQAAAP//AAABAQAAAAAAAP8AAAABAAEAAf8AAAAAAAAAAAAAAQAAAP//AQAAAAAAAQAAAAEAAAAAAAEAAP8AAAAAAAD/AAAAAf8AAAEAAQAA/wAAAAAAAAAAAAAA/wEAAAAAAAEAAAAA/wEAAAAAAAAAAAAAAAAAAAABAAH/AAAAAAAA/wAAAAH/AAAAAAEA/wAAAAEAAAABAAAAAAABAP//AAABAAAAAAAAAAD/AAABAAEAAP8AAP8AAAABAAAAAP8BAAAAAAD/AAAAAf8AAAABAAD//wAAAQAAAAAAAAD/AAAAAQAAAAAAAQAA/wAAAAEAAP//AAABAAEAAAAAAAAAAAAAAAAA/wAAAAH/AAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAC/wAAAAABAAAAAAAAAAD/AAAB/wABAQAAAAAAAAABAAABAQAAAQAAAP8BAAAAAP8AAAAAAAAB/wAAAAAAAAAAAAABAAABAQAAAAD/AAABAAABAQAA/wEAAAABAAAAAQAAAQD/AAAAAAAAAQAAAQAAAP8B/wAAAAAAAQEAAAABAAAAAQAAAQD/AAABAAAAAAAAAAH/AAAAAAAAAAAAAAAAAAABAAAAAf8A/wEAAAAA/wAAAQAAAAD/AAAAAAAAAQAAAAEAAAAB/wAAAAAAAAEAAAAA/wAAAAAAAAAAAAABAAAAAAAAAAD/AAAAAAAAAf8AAAAAAAAAAAAAAAAAAAH/AAAAAAAAAP8AAAAAAAAB/wABAP8AAAEAAAAAAAD/AAAAAQEAAAABAAAAAAAAAAAAAAABAAAAAP8A//8AAAAAAAAAAQAA/wAAAAAB/wAAAAAAAAD/AAAAAAAAAf8AAQAAAAABAAAAAQAAAAEAAP8AAAABAAAAAAEAAAABAAABAAAAAAEAAAABAAAAAQAAAAAAAAAAAAABAQAAAAAAAAAB/wAAAAAAAAEAAAAAAAABAP8A/wAAAAABAAAAAP8AAAEAAAEBAAAAAAAAAAEAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAP8AAAAAAQAAAAEAAAEA/wAAAAAAAAEAAAEAAAD///8AAAAAAAEBAAD/AP8AAAAAAAAAAAAAAQAAAP//AAEAAAABAQAA/wAAAAABAAAAAQAA/wAAAAABAAABAQAAAAEAAAAA/wAAAAAAAAEAAAABAAAAAf8AAAAAAAABAAAAAP8AAAAAAAAAAAAAAQAAAAD/AAABAAAAAAAAAQEAAAAAAAAAAP8AAQEAAAAAAAAAAQAAAAEAAAEA/wAAAAAAAAEAAAABAAAAAAAA/wAAAAEBAAAAAQAAAAAAAAABAAABAQAA/wD/AAAAAAABAQAAAAEAAP8A/wABAAAAAAEAAAABAAD/AP8AAAAAAAEBAAAAAQAAAAH/AAABAAAAAQAAAQEAAAABAAAAAQAAAQEAAAABAAD/AP8AAAEAAAABAAAEAQH/AAAAAAAAAAAAAQEAAAAAAAAAAAAAAAH/AAAAAQD/AP8AAAEAAAEAAAD/AAAAAAH/AAEAAAAAAP8AAAEAAAAAAAAAAAAAAAEAAP8A/wABAAAAAAABAAAA/wAAAAAAAAEAAP8A/wABAAAAAAEAAAAAAAAAAf8AAAAAAP8AAAABAAAAAAEAAAAA/wAAAQAAAQAAAAAB/wAAAAAAAAH/AAAAAAAAAAAAAQD/AP8BAAAAAP8AAAEAAP8AAAABAP8AAAAAAAAAAAD/Af8AAQAAAAABAAAAAP8AAAABAAAA/wABAQAA/wAAAAAAAAABAAAAAAH/AAAAAAAAAf8AAAAAAAAB/wAAAAAAAAEAAAEAAAAAAQAAAAD/AP8BAAABAAEAAAD/AAAAAAAAAQAAAAAAAAAAAAD/AQAAAQD/AAAAAQAAAP8AAQEAAP8AAAAAAQAAAAAAAAAB/wAAAAAAAAH/AAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAD/AQAAAQABAAAA/wAAAAAAAAEBAAAA/wAAAAAAAAEAAAAAAAAAAQAA/wD/AAEBAAAAAAAAAAAAAAAAAAAAAQAAAAD/AAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAEAAAEAAQAAAP8AAAAAAAABAAD/AP8AAQAAAAABAAABAAAAAAAAAAAA/wABAQAA/wD/AAEAAQAAAAAA/wEAAAEA/wAAAAAAAQEBAAAA/wAAAAAAAQEAAAAAAAAAAAAAAAAAAAABAAD/AAAAAQD/AAAAAAAAAAAA/wH/AAEAAAAAAQAAAAD/AAAAAQAAAP8A/wEAAAEA/wAAAQEAAAAAAAAB/wAAAAEAAAD/AAABAAAAAAAAAAAAAAABAAD/AP8AAQAAAAAAAAD/AQAAAQABAAAA/wAAAAAAAAEAAAAAAAAAAAEAAQEAAAAA/wD/AAAAAP8AAAEBAAAAAP8AAAAAAP8AAAABAQAAAAD/AAAAAAD/AAAAAAAAAAAA/wABAAAAAAAAAAAAAAAAAAEA/wD/AAAAAAABAQAA/wD/AAEAAAAE//8BAAEB/wAAAAEA/wAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAQABAAAAAAABAP8AAP8BAAAB/wD//wEAAQAAAAABAAD/AAAAAf//AAEBAQD///8AAQH/AAAAAQD///8AAQEBAAEAAAD/AAAAAf8AAAABAAAA/wAAAAAAAAEBAAD/AAAAAf8AAAABAAAA/wAAAAH/AAD/AQABAf8AAP8BAP8A/wABAQAA//8AAAEBAQD///8AAQABAAEBAAAAAAEA////AAEAAQABAQAA/wAAAAH/AAAAAQAAAAAAAP8AAQABAAAAAQD/AAAAAAD/AAAAAQABAAEA/wAA/wEAAQH/AAD/AQAAAf8AAP8AAAABAAAAAAEA////AAEAAQAAAAAAAAEBAP///wABAQEAAAAAAP8AAAAB/wAAAAAAAAABAAD/AAEAAQAAAAEA/wAAAAAAAAAAAAD/AQABAf8A//8BAAABAAABAAAA//8AAAAAAAAAAAAAAAEAAP///wABAAEAAAEAAAAAAQD///8AAQAAAAABAQD/AAAAAf8AAAABAAAAAAAAAAABAAD/AAAAAAAAAQEAAAAAAAAA/wEAAAEAAP8AAAAA/wAAAQEAAP///wAAAAEAAQEAAAAAAAD///8AAQABAAAAAAAAAQEA////AAEBAQABAAAA/wAAAAH/AAAAAAAAAAEAAP8AAQAB/wAAAQEAAAAAAAAAAAAAAf8BAAAAAAAAAQAA/wAAAAEAAQD//wAAAAAAAAEAAAAAAQAA////AAEAAQABAQAAAAABAP///wABAAEAAQEAAP8AAAAB/wAAAAEAAAAAAAD/AAEAAf8AAAAAAAAAAQAAAAAAAAD/AQAAAQAAAAABAAD/AAAAAQAA////AAAAAQABAQAAAAAAAP///wABAAEAAAAAAAABAQD///8AAQEBAAAA/wAAAAAAAAAAAAAAAQABAAAAAAEAAAAAAAAAAAAAAAD/AAEAAQAAAAAAAAAAAAAAAAABAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAQAAAAAAAQAAAAAAAAAEAQAAAAD/AQAAAAAAAQAAAAAAAAAAAAAA/wAAAAEAAAABAQEAAP8AAAABAAD//wEAAQAAAAD/AQABAQAA//8AAAH/AAABAQAAAAABAP//AAAAAAEAAP8AAAAAAAABAAEA//8AAAEAAAABAAAA/wAAAAD/AAAAAAAAAAAAAAD/AAABAAAAAAAAAAD/AAAAAAAAAP8BAAAAAAAAAAAAAAAAAAEAAQD///8AAQABAP//AAABAAEAAAAAAP//AAABAAAAAQABAAAAAAAA/wAAAQAAAAAAAAD//wAAAQAAAAEAAAD/AAAAAQABAAAAAAAA/wEAAAAAAAABAAAAAAAAAP8BAAAAAAABAAEAAAAAAP//AAAAAAAAAQABAAAAAAAAAAAA//8AAAEAAQAA/wAA/wAAAAEAAAAAAAAAAAAAAP//AAABAAAA/wAAAAEAAQAAAAAAAQABAAAAAAAA/wEAAAAAAAH/AAAAAQAAAQAAAP8AAAAAAAAAAP8AAAAAAQAAAAAAAP8AAAAAAAAAAAEAAAAAAAD/AAAAAAAAAAAAAAD/AAAAAAAAAQAAAP8AAAABAAAAAP8AAAAAAAAAAAAAAP8AAAAAAAAAAAAAAP8AAAEAAQAAAAAAAP8AAAAAAAABAAEA/wAAAAEAAAAA/wAAAQABAP//AAABAAAAAQAAAP8AAAABAAAAAP8AAAEBAAD/AAAAAf8AAAAAAAD/AAAAAQAAAAAAAAD//wAAAQAAAAAAAAABAAAAAAAAAAABAAAA/wAAAQABAAAAAAD//wAAAQAAAAEAAQAAAAAAAP8AAAEAAAAAAAAA//8AAAEAAAABAAAA/wAAAAAAAAAB/wAAAAAAAP8AAAABAAAA//8AAAEAAAAA/wAAAAABAAEAAAAA/wAA/wAAAAEAAQAAAAAAAAAAAP//AAABAAEAAP8AAAAAAQD/AAAAAAABAAEAAAAAAAAAAAAAAAAAAAD/AAAAAQABAP8AAAABAAAAAAAAAP8AAAABAAAAAAEBAAAAAAAA/wAAAAAAAP8AAAABAQAAAP8BAAAAAAAAAAAA/wAAAAEAAAAC/wAAAAABAAAAAQAA/wEAAAAA/wAAAQAAAQD/AAABAAD/AP8AAAAAAP8AAAABAf8AAAAAAP8B/wAAAAAAAQEAAAABAAAAAAAAAAD/AAEBAAABAQAAAAEAAAABAAAAAAAAAQAAAAABAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAA/wD/AQAAAAAAAAABAAAAAAAA/wH/AAAAAAAAAAAAAAAAAAABAAABAQEAAAEAAAEBAAD/AAAAAAD/AAEAAAAAAAAA/wAAAAAAAAAAAQAAAAEAAAAAAAABAAAAAAAAAP8AAAABAAAAAAH/AAABAAABAQAAAAAAAAAAAAAAAAAA/wH/AAAAAAAAAP8AAAEAAAEBAAAAAAAAAAAAAAAA/wD/AAAAAQAAAAAAAAAAAP8AAQAAAAABAAAAAAAA/wD/AAEAAAAAAQAAAQAAAP8B/wAAAAAAAAH/AAAAAAD/Af8AAAAAAAAAAAAAAAAA/wAAAAEBAAAAAQAAAAAAAAAAAAAAAP8AAAAAAAABAAAAAAAAAAD/AAABAAABAQAAAAAAAAAA/wAAAAAA/wEAAAAA/wAAAP8AAAEAAAABAAAAAAAAAAD/AAEBAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAP8AAAAAAQAAAAAAAAEAAAAAAQAAAAEAAAEAAAD/AP8AAAAAAAAAAAABAAAA/wD/AAABAAABAQAAAAAAAP8A/wABAQAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAQAA/wAAAAAA/wABAAAAAAAAAP8AAAAAAAAAAAEAAAABAAAAAAAAAQAAAAAAAAD/AAAAAQAAAAEAAAAAAAAAAAEAAAEAAAAA/wAAAQEAAP8AAAAAAAAAAQAAAAABAAAAAAAAAQEAAAAAAAAAAP8A/wAAAAEAAAAAAAAAAAD/AP8BAAABAQAAAQH/AAABAAAAAQAAAAEAAP8A/wABAQAAAAEAAAEBAAAAAf8AAAEAAAEBAAAAAQAA////AAAAAAAAAQAAAAEAAAEB/wAAAAAAAAEAAAABAAD/AP8AAQEAAAABAAAEAAH/AAAAAAAAAAAAAQAAAAABAAD/AP8AAQEAAAAA/wAAAAAAAAH/AAEAAAAAAAAA/wD/AAEAAAAAAP8AAAABAAAA/wAAAAAAAAEAAAAA/wAAAAAA/wAAAAAAAAABAQEAAAD/AP8AAAABAAAAAAEBAAAA/wD/AQAAAQABAAAAAAAAAP8A/wEAAAEAAAAAAQAAAAAAAAAA/wAAAAAAAAH/AAAAAAD/AAAAAQAAAP8AAAABAQAA/wAAAAAAAAABAP8AAQAAAAAAAAD/AAEAAQD/AAABAQD/AP8AAAAAAAEAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAB/wAAAAAAAAAAAP8AAAABAf8AAAABAP8AAAABAP8AAAAAAAAAAAD/AAAAAQAAAAAAAAD/Af8AAQAAAP8A/wABAAAAAAEAAAEAAAAAAf8A/wAAAAEBAAABAAAA/wD/AAABAQAAAP8AAAEAAAAAAAAAAAEAAAH/AAAAAAD//wAAAQH/AAAAAAAAAQEAAAAAAAAA/wD/AAAAAQEAAAAAAAD/AP8AAAAAAAEBAAAAAAAAAAAAAP8A/wABAQAAAAAAAP8A/wABAQAA/wAAAAEBAAAAAAAAAAABAP8B/wABAAAA/wAAAAEAAAD/AAAAAQEBAAAA/wD/AAAAAQAAAAABAQABAAAA/wD/AAEAAAAAAQEAAQAAAP8AAAABAP8AAAEAAAEAAAD/AP8AAAEAAAEAAAABAAEAAAD/AP8AAAABAAAAAQEAAP8AAAAAAAAAAQD/AAEAAAAAAAAA/wABAAEA/wAAAQEA/wD/AAAAAAABAAAAAAABAP8A/wABAAAAAAAAAAABAAD/AAAAAAAAAAEBAQAAAP8AAAABcMc7uAAAIABJREFUAP8A/wABAQAAAAAAAAABAQD/AAAAAQD/AAAAAAAAAAAA/wAAAAEA/wAAAAEAAAAAAP8A/wAAAAAAAQAAAAEBAAD/AP8AAQAAAAAAAAAAAAAA/wD/AAAAAAABAAAAAQEAAP8A/wABAAAAAAABAAAAAAD/AP8AAAAAAAEAAAABAQAA/wD/AAEAAAAEAQABAAAA/wAAAAEAAAAAAAAA/wAAAAEAAP//AAABAQABAAAAAAAAAP///wABAQAAAQABAAAA/wAAAAAA////AAABAAABAAEAAAD/AAAAAQD//wAAAAEAAAH/AAAAAQAAAAAAAAH/AQAAAAAA/wH/AAEAAQD//wAAAAEAAAD/AAABAQEA////AAABAQAA/wAAAQH/AAAAAQAAAP8AAP8BAAABAAAA//8AAAEBAAEAAAD/AP8AAQAAAAD/AAAAAAEAAAEAAAAA/wAB/wAAAAABAP8B/wABAAAAAP8BAAAAAAAAAAAAAAH/AAD/AQAAAf8AAAABAAAA/wAAAAEAAQD/AAD/AQAAAf8AAP8AAAEBAAD//wEAAAEAAAEAAAAA/wEAAAAAAAABAAABAP8AAP8AAAAAAAAAAQAAAAAAAAH/AQAAAAAAAAAAAAAB/wAA/wEAAQH/AAD/AAAAAQAAAQABAAD/AAAAAAEAAQEAAAAA/wAA/wAAAAABAAAB/wABAQAAAP8BAAAAAAABAQAAAAAAAAD/AQABAAAA/wH/AAEAAAAB/wEAAAAAAAABAAAAAP8AAP8AAAEAAQD/AQAAAQD/AAH/AQAAAAAAAQAAAAABAAAAAP8AAP8AAAEAAQD/AQAAAQD/AAD/AQABAAAAAAEAAAAAAAAB/wEAAAAAAP8B/wABAAAAAf8BAAAAAAAAAQAAAAAAAAH/AAAAAAEA/wEAAAEA/wAB/wEAAAAAAAAAAAAAAQAAAAAAAAH/AQAAAAAA/wH/AAEAAAAA/wAAAAABAAABAAAAAP8AAf8AAAAAAQD/Af8AAQAAAAD/AQAAAAAAAAEAAAEAAAAA/wEAAAAAAP8BAAABAP8AAP8BAAAAAAAAAAEAAAEAAAEAAAAA/wEAAAAAAP8BAAABAAAAAP8BAAAAAAAAAQAAAQD/AAAAAQAAAAAAAAABAAEA/wAAAAAAAAABAP8AAAABAAAAAAAAAAAAAAAAAAAAAQD/AAD/AQAAAQAA/wAAAAEAAAAAAAAAAAAAAAAAAQABAP8AAAAAAAAAAQD/AAAAAQAAAAAAAAAC////AAAAAQAAAAAA/wD/AAAAAQABAAAAAAAAAAAAAAAAAP8A//8AAAEBAQAAAAAAAAEAAAAAAAAAAAEAAAABAAEAAAD/AAAAAP8AAAAAAAABAQAAAQD/AP8BAAAA//8AAAAAAAABAAAAAQAAAAABAP8A/wABAP8AAAAAAAAAAAD/AAAAAQAAAAD//wAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAABAQAA/wAAAAAAAAAB/wAAAAAAAAAAAAD/AQAAAP//AAAAAAAAAQAAAAEAAAAAAQAA/wAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAP//AAAAAAAAAAAA/wEAAAD//wAAAAAAAAEAAP8BAAAAAAEAAP8AAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAD/AQAAAP//AAAAAAAAAAAA/wEAAAH/AAAAAAAAAAAAAP8BAAAA//8AAAAAAAABAAD/AQAAAAABAAD/AAAAAQAAAAEAAAAAAAAA/wAAAAEAAAABAAAAAP8AAAABAP8B/wAAAQAA/wEAAAD//wAAAAAAAAAAAP8BAAAB//8AAAAAAAAAAAD/AQAAAP//AAAAAAAAAQAAAAEAAAAAAQAA/wAAAAEAAP8BAAD/AAAAAP8AAAABAAAAAQAAAAD/AAAAAQD/Af8AAAEAAP8BAAAA//8AAAAAAAAAAAD/AQAAAf8AAAAAAAAAAAAA/wEAAAD//wAAAAAAAAEAAAABAAAAAAEAAP8AAAABAAAAAQAA/wAAAAD/AAAAAQAAAAEAAAAA/wAAAAEA/wH/AAABAAD/AQAAAP//AAAAAAAAAAAA/wEAAAD//wAAAAAAAAAAAP8BAAAA//8AAAAAAAAAAAAAAP8A/wAAAAAAAQAAAAEAAAD/AAAAAAAAAAAAAAD/AAAAAAD/AAAAAAABAP8B/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAD/AAAAAAACAQEBAAAAAAAAAAAAAQABAAAAAAD/AAAAAAEBAAAAAAD/AAEAAQEAAAD/AAAAAAAAAP8AAP8AAAAAAAAAAQEAAAAAAQABAAAAAAEBAP8AAAAAAAAAAAABAAEAAAAAAQEA/wABAAAAAAAAAAAAAQAAAAEAAQAAAAEA/wAAAAABAQABAAAAAAABAP8AAAAAAAAA/wAAAAD/AAAAAAAAAAEAAAAAAAAAAAEAAAAAAAAAAAAAAQEAAAABAAABAAABAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAD//wAAAAABAAAAAAD/AAAAAAAAAAAAAAAA/wAA/wAAAAABAAAAAAEAAAAAAP8AAAAAAAAAAQEBAP8AAQAAAQAAAQAAAAABAQD/AAEA/wAAAAEAAAABAAAAAAEBAP8AAAAAAAAAAP8AAAAAAQAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAABAAAAAAEBAAAAAQAAAQAAAAAAAAABAQAAAAEAAAEAAAEAAAAAAQEAAAABAAAAAAABAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAEAAAAAAAEAAAAAAAAAAQAAAAABAQD/AAEAAAEAAAEAAAAAAQEA/wABAAABAAABAAAAAAEBAP8AAQAAAAAAAAAAAAEAAAAAAQEA/wAAAAEAAAABAAAAAAEBAP8AAAAAAAAAAQABAAAAAAABAAEA/wAAAAEAAAAAAQEAAAABAAABAAAAAAAAAAEBAAAAAQAAAQAAAQAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAQAAAAABAQAAAAAAAAAAAAAAAQD/AAAAAQABAAAAAAABAAAAAAEBAP8AAQAAAQAAAQAAAAEBAQD/AAEAAAEAAAEAAAAAAQEA/wABAAAA/wAAAAEAAQAAAAAAAAAAAP8A//8BAAEAAAAAAAAAAAAAAP//AAABAAAAAAAAAAEAAAD///8AAQAAAAAAAAAAAAEA////AAAAAAAAAAAAAAAAAP///wABAAAAAAABAAAAAAAC////AAAAAAAAAAAAAAAAAP///wABAAAA//8AAAAAAAABAAAA/wD/AAAAAAD/AAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAP8AAQAAAP//AAAAAAAAAAAAAAAAAAAAAQAAAQAAAAD//wAAAAAA/wEAAAABAQAAAQAAAAAAAAABAAD/AAAAAAAAAAAAAAAAAP8AAQAAAP//AAAAAP8AAAAAAAAAAAD/AAAAAAD/AAAAAQAA/wAAAAAAAAEAAAAAAAAAAP8AAAAAAAABAAAA/wD/AAABAAABAAEAAAEAAP8AAAAAAQAAAAAAAAAAAAD/AAAAAAEAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAA/wABAAAAAQAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAEAAP8A/wAAAAAA/wABAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAP8A/wAAAP8AAAAAAAAAAAAAAAAAAQD/AAAAAAAAAAAAAAAAAP8A/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA/wABAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAD/AAEAAAD//wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAP8AAAAAAAEAAAAAAAAAAAD/AAAAAAAAAAAAAQAAAP8AAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAA/wAAAAAA/wAAAAEAAP8AAAAAAAABAAAAAAAAAAD/AAAAAAAA/wD/AAAAAAAAAAAAAAAAAAAA/wABAP8AAAAAAAAAAAAAAP8AAAD/AAEAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAP8AAQAAAP8AAAD//wAAAAAAAAAAAAAAAAAAAQEAAAAA/wD/AP8AAP8BAAABAAAA//8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAEAAAAAAAAAAAAAAP8AAAAAAAAA/wACAAEBAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAH/AAAAAAD/AAAAAQABAAAAAAABAAEAAP8AAAEAAQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AP8AAAAAAAEAAAAAAAEAAAAAAAAA//8AAAAAAAAAAAAAAAAAAP8BAQAAAAAAAf8AAAH/AAAA/wAAAQABAAD/AAABAAEAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAP8AAAAAAAAAAAEAAAAAAAAAAAAAAQABAAD/AAAAAP8AAP8AAAEAAQAA/wAAAQABAAD/AAABAAAAAAAAAAEAAQAAAAAAAAAAAAEAAQAAAAAA/wAAAAAAAQAAAAAAAAAAAAAAAQD//wAAAAAAAAEAAAAAAAAAAP8AAAEAAQAAAAAAAQAAAAAAAAABAAEAAAAAAAAAAAABAAAAAAABAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAQAAAAEAAAAAAAAAAAAAAAAA/wABAAAAAAAAAAAAAAAAAAH/AQAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAQAAAAABAAD/AAAAAAABAAAAAAABAAAAAAAAAP//AAAAAAAAAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAP8BAAAAAAAAAP8AAAAAAAEAAAAAAAEAAAAAAAAAAAABAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAEAAAAAAAD/AAAAAAAAAAABAAAAAAAAAf8BAAAAAAAAAAAAAAAAAAEAAQAAAAEAAAD/AAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAAAP8AAAAAAAEAAAAAAAH/AAABAQAAAP//AAAAAAAAAAAAAP8AAAAAAQABAAEAAAEAAAEA/wAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAAAAAP8AAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAACAP//AAAAAAAAAAAAAP8AAP//AAAAAAAAAQAAAAAAAAABAAAA/wAAAAABAAD/AP8AAAAAAP8A/wABAAAAAAAAAAAA/wAAAAAA////AP8AAAAAAP8A/wABAAAAAAD//wAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAEA/wAAAAAAAAEAAAAA/wAAAQAA/wD/AAAAAAD/AP8AAAAAAP8A/wAAAAAAAAAAAAAA/wD//wAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AAAAAAD/AAAAAAEAAP8A/wAAAAAA/wD/AAAAAAD/AP8AAP8AAP8A/wAAAAAA//8AAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAP8A/wAAAAAA/wD/AAABAAD/AP8A/wAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAP//AAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAD/AAAAAAAAAAAAAAAAAAAA//8AAAAAAQAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAD//wAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAEAAP//AAAAAAEA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAA//8AAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAP///wAAAAAAAAAAAAAAAAD//wAAAAABAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAP//AAAAAAAAAAAAAAAAAAD//wAAAAAAAAABAQAAAP8AAAEAAP8AAAAA/wEAAAEAAAAA/wD///8AAP8AAAAAAQD/Af8A////AAAAAQAAAQAAAAD/AAD//wAAAAEAAQAAAAABAAAA/wAAAAAAAAAAAQAAAP8AAP8AAAAAAQACAAEBAAD/AAAAAAAAAAEAAAEBAQAA/wAAAP8AAAAAAAD/AAAAAQAAAAD/AAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAQAAAAAAAQEBAAEAAAD//wAAAQAAAAEAAAABAAAA//8AAP//AAAAAAAAAQAAAP8AAAAAAAAAAAAAAP//AQAAAAAAAP8AAAABAQAA/wAAAQABAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAAAAAAAAABAAAAAP8AAAD/AAAAAAAAAQAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAQAAAQAAAAAAAAABAAAAAP8AAAEAAQAAAAAAAQAAAAAAAAABAAEAAAAAAAEAAAAA/wAAAAAAAAD/AAAAAAAAAQAAAAEAAAD//wAAAP8AAAAAAAAB/wAAAP8AAAAAAAD/AAAAAAEAAAEAAAAAAAAAAQAAAAD/AAABAAEAAQAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAP8AAAD/AAAAAAAAAP8AAAD/AAAAAAAAAAAAAAD/AAAA/wAAAP8AAAAAAAAA/wAAAQAAAAAAAAAA/wAAAAAAAAD/AAAA/wAAAf8AAAAAAAAAAAAAAP8AAAD/AAABAAAAAQAAAP//AAD//wAAAAAAAAEAAAAA/wAAAAAAAP8AAAAA/wAAAQEAAAD/AAAAAAAA/wAAAAEAAAAA/wAAAf8AAAAAAAAA/wAA/wAAAAH/AAAAAAAAAQAAAAD/AAAA/wAAAAAAAAEAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAAAAAAAAAAAAP8AAAEBAQD/AAAAAAAAAAD/AAABAAAAAP8AAAAAAAD/AAAAAP8AAAD/AAAB/wAAAAAAAAAAAAAA/wAAAAAAAAEAAAABAAAA//8AAAD/AAAAAAEAAAABAAEA/wAAAQAA////AAAAAQABAQEAAAAAAAAA/wABAAEAAAEBAAAAAAAA//8AAAABAP8BAAAA/wAA/wAAAAAAAQAAAf8AAAAAAAAAAAAAAAEAAAH/AAD/AAACAP8AAAABAAAAAAAAAAAAAAD//wAAAQAAAAEAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8A/wD/AP8AAP8AAAAA/wD///8AAAD/AP8AAAAAAQAAAAAAAP///wAAAQAAAAH/AAEBAAAA/wAA//8AAAEAAAAA//8A/wAAAAEA/wAAAAAA/wD/AAAAAAAAAAAA/wD/AAAAAAAAAAAAAAAAAAABAQD//wAAAAAAAAEAAQAAAQAAAAH/AAABAAAA//8AAAEAAAAA/wAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAA/wAA/wAAAAAAAAD/AAAAAAAAAP8A/wAAAAAA/wAAAAAAAAD/AP8AAAAAAP8AAAAAAQAAAAEAAAAB/wAAAAAA////AAABAAAAAf8A/wEAAAAAAAD/AAAAAAH/AAAAAAAAAAAAAP8AAP8AAAAAAAAA/wAAAAAAAAD/AP8AAAAAAP//AAAAAAAAAAEAAP8B/wABAQAA////AAABAAAAAP8AAAAAAAD//wAAAQAAAAH/AAABAAAA/wAAAAAAAAAB/wAAAAAAAP8AAP8AAAABAf8A/wEAAAD/AAAAAQAA/wD/AAAAAAD/AAAA/wAAAAABAAAAAf8AAAEAAP///wAAAQAAAAH/AAABAAD///8AAAEAAAAB/wABAQAAAP8AAP//AAAAAf8AAAAAAAD/AAD/AAAAAAAAAAABAAAAAAAAAAAAAP8A/wAAAQAA/wAAAAD/AAAAAQAAAAD/AAABAAD///8AAAEAAAAB/wAAAQAAAP//AAABAAAAAP8AAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAABAAD/AP8AAAEAAP//AAAA/wAAAAEAAAAB/wAAAQAA////AAABAAAAAf8AAAAAAP///wAAAQAAAAH/AAAAAAAAAAAAAAAAAAAAAQAA/wAAAQEBAAAA/wAAAAAAAAH/AAAAAQAAAP8AAP8AAAAAAAAAAAEAAAAAAAEAAQD/AQAAAf8AAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAABAAACAAAAAP///wAAAAAA////AAABAQD/AAAAAP8AAAAAAAAAAAAAAQAAAAABAAAAAAAA/wAAAAAAAAABAAEAAAEAAAAAAAAAAQEAAP8AAAEAAAABAAEAAAAAAAABAQAAAAAAAQABAAD/AAAAAAAAAAEAAP8AAAAAAQEAAQAAAAAAAAD/AAAAAQABAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAABAAEA/wAAAAD/AAAAAAAAAAABAP//AAAAAQEAAAAAAAAAAQAA/wAAAP8AAAABAAAAAAEAAP8AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAQD//wAAAAEBAAAAAAABAAEAAf8AAAD/AAAAAQAAAAABAAD/AAABAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAQAA/wAAAQABAAAAAAAAAAEA//8AAAABAQAAAAAAAAABAAD/AAAAAAAAAAEAAAAAAQAA/wAAAAEAAAEBAAAAAAEAAP8AAAAAAAAAAAAAAQEBAAAA/wABAAAAAQAAAP8AAAD/AAEAAP8AAAEAAQABAAAAAAABAAD/AAAAAQEAAAAAAAEAAQAA/wAAAAAAAAABAAAAAAEAAP8AAAEBAAABAQAAAAAAAP//AAAA/wAAAQAAAAEBAQAAAP8AAQAAAAABAAAAAAAAAAABAAD/AAABAAEAAAAAAAAAAQD//wAAAAEBAAAAAAAAAAEAAP8AAAD/AAAAAQAAAAABAAD/AAAAAAAAAQEAAAAAAAAA/wAAAP8AAAAAAAABAQEAAAD/AAEAAAABAQAAAAAAAP8AAQAA/wAAAQABAAEAAAAAAAEA//8AAAABAQAAAAAAAQABAAABAAAAAAAAAAD/AAAAAAAAAQAAAAAAAAD/AQAAAAAAAAABAAAAAAAA/wEAAQEAAAAA/wAAAQAAAP8AAAAAAAABAAAAAAEAAAD/AAAAAAAAAAAAAAEBAAAAAP8AAAAAAAAAAAACAQEAAAEBAQAAAAAAAQEBAAAA/wABAAAAAAEBAAAAAAABAP8AAP8AAP//AAAAAAAAAQEAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAEBAAAAAAD/AP8A/wD/AAEAAAAAAP8AAAD/AAABAAAAAQAAAQAAAAAA/wAA//8AAAAAAAABAQABAAAAAAD/AP///wAAAAAAAAAAAAEBAAAAAAAAAAAAAAD//wAAAf8AAQAAAP8BAAAAAAAAAAD/AAABAAABAAAAAAD/AAAA/wAAAQAAAAEAAAEAAAD/AAAAAAEAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAQAAAQAAAAAA/wAAAP8AAAEAAAABAAABAAAA/wAAAAABAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAA/wAAAAAA/wAAAQAAAAEAAAAAAAAAAP8AAAEAAAEAAAAAAP8AAAD/AAABAAAAAQAAAQAAAP8AAAAAAQAAAAAAAAAA/wAAAP8AAQEAAP8BAAAAAAAAAAD/AAAAAQAAAQAAAAAAAAAAAAABAP8AAAEAAAABAAAAAAAAAAD/AP8BAAABAAAAAAD/AAAA/wAAAQAAAAEAAAEAAAD/AAAAAAEAAAAAAAAAAP8AAAD/AAEBAAD/AQAAAAAAAAAA/wAAAAEAAAEAAAAAAAD/AAAAAQD/AAABAAAAAQAAAAAAAAAA/wAAAQAAAQAAAAAA/wAAAP8AAAEAAAABAAABAAAA/wAAAAABAAAAAAAAAAD/AAAA/wABAQAA/wEAAAAAAAAAAP8AAAABAAABAAAAAAAA/wAAAAEA/wAAAQAAAAEAAAAAAAAAAP8AAAEAAAEAAAAAAP8AAAD/AAAA/wAAAAAAAAABAP8AAAAAAP8AAAAAAAAB/wAA/wAAAAAAAP///wAAAQAA////AAAAAQD///8AAAEAAP///wAAAAAAAP8AAAAB/wAAAAAAAAD/AP8AAAAAAAEAAAAAAAAA/wAC/wD/AAAAAAAAAAAAAAAAAAAAAQD/AAAAAP8AAAAAAAD/AAAAAAH/AAABAAA36nFAAAAgAElEQVQAAAAAAP8AAAAAAAABAQAAAAAAAAAAAQABAAAAAAAAAAAAAAABAAEAAf8BAAAAAAAAAAEA/wABAP8AAAAAAAAAAAAAAAAAAQAAAQEAAAAAAAD//wAAAAAAAAABAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAEAAAAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQD/AAAAAAAAAAAAAQABAAAAAAAAAAAAAQD/AAEAAAAAAAD/AAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAAAAAAAAAAA/wAAAAAAAAAAAAAAAQAAAAAAAQAAAAAAAP8AAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAEAAAAAAAEAAAAAAAAAAAABAAD/AAAAAAAAAAAAAAEAAAAAAAEAAAAAAP8AAAAAAAAAAAABAAEAAAAAAAAAAAABAP8AAQD/AAAAAAAAAAAAAAABAAAAAAAAAAD/AAD/AAEAAAABAAAAAAABAAAAAAAAAAAAAQAA/wAAAAAAAAAAAAABAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAABAAAAAQAAAAAAAQAAAAAAAAAAAAEAAP8AAAAAAAAAAAAAAQAAAAAAAQAAAAAA/wAAAAAAAAAAAAEAAQAAAAAAAAAAAAEA/wABAAD/AQD///8AAAD/AAH//wAA/wEAAAD/AAAAAQD/AP8AAP8AAAAAAAAAAP8AAQEBAAD/AAAAAQAAAAAAAAEBAQAAAAAAAAD/AAAAAQAA//8AAAABAAD/AAAAAAAAAAAAAAAAAQACAQABAAAAAAAAAAAA//8AAAAA/wABAAAAAAEAAAAAAAABAAAAAAABAAEAAAAAAAEAAAAAAAAAAAD/AP8AAAAAAAAAAAD/AAAAAAAAAAAAAAD/AP8AAAEAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAD/AAAA/wAAAAAAAAD/AAABAQAAAAAAAAEAAAAAAAAAAQAAAAAAAAD/AAAAAAAAAAAAAP///wAAAAAAAAAAAP///wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAD/AP8AAAEAAAAAAQAA/wAAAAAAAAAAAAAAAAAAAAAAAAAA/wAB/wAAAAD/AAAAAAAAAAAAAAAAAAAAAAABAAAA/wAAAAABAAAAAP8AAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAA/wD/AAABAAAAAAEAAQAAAAAAAAD/AP8AAAAAAAAAAAAAAAAAAAH/AAAA/wAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAQAAAAD/AAAAAAAAAAAAAAABAAAA/wAAAAAAAAAAAAAAAAD/AP8AAAAAAAAB/wAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAA/wAAAP8AAAAAAAABAAABAAAAAAD/AAAAAAAAAAAAAAD/AAAA/wAAAf8AAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAP8A/wAAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAQAAAP8B/wAAAQEAAAABAAAAAQD/Af8AAAABAAAAAAAAAAEAAAEAAAEAAAD/AAAAAAAAAAAB/wABAAEAAAAAAAAAAAAAAP8AAAEAAP///wAAAQEAAAD/AAABAAAAAAAAAAAAAAAA/wAC/wD/AAAAAAAAAAAAAQEAAP//AAAAAAAAAAD/AAD/AAD/AAEA//8AAAAAAAAAAP8AAAAAAAEAAQABAAEAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAABAAEAAAEAAAEBAQAAAP8AAAAAAAEBAQAAAAEAAAABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA/wAAAAAAAQABAAABAAAAAAAAAAAAAAEAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAEAAAAAAP8AAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8AAAAAAAABAAEAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAAAAQAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEA/wAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AQABAAAAAAAAAAABAAAA/wAA////AAAAAAABAQAA////AAABAQABAAEAAAAAAAAAAQD///8AAAAAAAAAAAAAAAEAAAABAAEBAQAAAAAAAAABAAEAAAAAAAAAAP8AAAAAAQACAQABAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAABAAABAP8AAQEAAP///wAAAAAAAAAAAP8A/wD/AP8AAP8AAP8A/wD/AAAAAAD/AAAAAAABAAAA/wD/AAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAAAAAD//wD///8AAP8AAAABAQAA/wAAAAAAAAAAAAD/AP8AAP8AAAAAAAAAAAEAAAAAAAAAAAAA/wAA/wAAAP///wAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAD//wAA/wAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AAD/AAAAAAAAAAAAAP8A/wAAAAAAAAAAAP//AAD//wAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAA/wAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAEAAAD/AAAAAP8AAP8AAAAAAAD//wAAAAAAAAD/AAD/AAAA////AAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAP//AAD/AAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAP8AAAAAAAAAAAAAAAAAAAAA/wAA////AAAAAAAAAAAA//8AAP//AAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAD/AAAAAf8AAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAP8AAAD/AAAA//8AAAAA/wAA/wAAAAAAAP//AAAAAAAAAP8AAP8AAAD///8AAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAA//8AAP8AAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAD/AAD///8AAAAAAAAAAAD//wAA//8AAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAABAQEAAQEBAAAA/wAAAAAAAQEBAAAAAAAAAAAAAAAAAP8AAAABAQEAAAD/AP///wAAAAAAAAAAAAAAAAD///8AAAAAAAAA/wAAAAAAAAEAAAAAAAAC//8AAAAAAAAAAAAAAQAAAAABAQD/AAAAAAABAAAAAAD/AAEA/wAAAAEBAQAAAAAAAAAAAAEAAQAAAAAAAAAAAAEAAQABAAAAAAAAAAAAAAD/AP8AAf8BAAAAAAAAAAAA/wAAAAABAAAAAAAAAAAAAAEAAAAAAAAA/wAAAAABAQABAQEAAAAAAAAA/wAAAAAAAAABAAAAAAABAAEAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAD/AAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAAAAAAAAAAAQAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAEAAAABAQAAAAAAAAD/AAD/AQAAAAAAAAAAAAAAAAAAAf8AAAABAAAAAAAAAAEAAAAAAQAAAAAAAQABAAAAAAAAAAAA//8AAAAAAAAAAAEAAAEAAAD/AAABAQAAAAAAAAABAAAAAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAP8AAAAAAAAAAQEBAAAAAAAA/wAAAQEAAAEAAAAAAAAAAAAAAP8AAAAAAQAAAAAAAAAAAAABAAAAAAEAAAAAAAAA/wAAAAAAAAABAAD/AAAAAAAAAAEAAAABAAAAAQEAAAAAAQAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAABAAAAAAAAAAAAAAAAAAAA/wAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAABAQAAAAAAAAD/AAAAAAAA//8AAAABAAABAQEAAAAAAAAAAAABAAAAAQEAAAAAAAAA/wAA/wEAAAAAAAD///8AAAAAAAD/AAAAAAAAAP//AAAAAQAAAAAAAP8AAP8A/wAAAAAAAAAAAAEAAAAA//8AAAABAAEBAQAAAAAAAAD/AAAAAAAAAQEAAAAAAAD/AAAAAAAAAP//AAAAAAACAAAAAAAAAAAAAAAA////AAAA/wABAAAAAP//AAAAAAAAAP8AAP//AAAAAAAAAAAAAAAAAP8A/wABAAEAAAAAAAAA/wAAAAAAAAAAAAAAAAABAAEAAAEAAP///wAAAAAAAAEAAP//AAAAAAAA//8AAP8A/wAAAQAAAQAAAAD//wD//wAAAAEAAP//AAAAAAAAAAD/AAAAAAD/AP8AAAAAAAAA/wAAAAAA/wD/AP//AAAAAQAAAAAAAAD/AAD///8AAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAP8AAAAAAAAA/wAAAAAAAAAAAAD/AP8AAAAAAAEAAAAA/wAA/wD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/wAA////AAABAAAAAAAAAP8AAAAAAAD//wAAAAEAAAD/AAAAAAAAAP8AAAAA/wAAAAAA/wD/AAAAAAAAAAAAAQEAAAAAAAD///8AAAAAAAABAAAA/wAA////AAAAAAAAAAAAAAAAAP///wAAAQAAAAAAAAD/AAAAAAAA//8AAAABAAD//wAAAAAAAP8AAAAAAAAAAP8AAAAAAAD//wAAAAD/AAAAAAAA/wAA////AAAAAAAAAQAAAP8AAP///wAAAQAAAAAAAAAAAAD///8AAAAAAAABAAD//wAAAAAAAP//AAAAAAAAAP8AAAAAAAD/AAAAAAAAAAD/AAAAAAAA//8AAAAA/wAAAAAAAP8AAP///wAAAAAAAAAAAAAAAAD///8AAAEAAAAAAAAA/wAA////AAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAD/AAAAAAAA//8AAAABAAAA/wAAAAAAAP8AAAAAAAAAAAAAAAAAAAD///8AAAEAAAAAAAAA/wAA////AAAAAAAAAQAAAP8AAP///wAAAQAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA/wAAAAEAAAAAAAAAAP8AAP8AAAAAAAAAAQEAAAD/AAD/AAAAAAAAAAABAAAA/wAA/wAAAAAAAAABAQAAAP8AAAABAAAAAAACAQEAAAAAAAAAAAAAAQEBAAAAAAAAAAAA/wAAAAAAAAAAAAEAAAABAP///wAAAAAAAAAAAAAAAAD///8AAAAAAAAAAQAAAAAA//8AAAAAAAAAAAAA////AAEBAQAA/wAAAf8AAAEAAAAAAAAAAQAAAAAAAQAA/wAAAAAAAP8AAAABAQAAAP8AAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAQABAAAA/wD/AAAAAf8AAAAAAAABAQEAAP8AAAD/AAAA/wAAAAAAAAEAAAAA/wAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAA/wAAAAD/AAAAAAAAAQEBAAD/AAAB/wAAAAAAAAAAAAABAAAAAP8AAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAP8AAAD/AAAAAAAAAQEBAP8AAAAB/wAAAAAAAAEBAQAA/wAAAP8AAAAAAAAAAAAAAQAAAAD/AAABAAAA/wAAAAEAAAAA/wAAAAAAAAAAAAABAAAAAP8BAP///wAAAAAAAQEBAAH/AAAA/wAAAAAAAAEBAQD/AAAAAP8AAAAAAAABAQEAAP8AAAH/AAABAAAAAAAAAAEAAAAA/wAAAAAAAP8AAAABAAAAAP8AAAAAAAABAAAAAQAAAAD/AQD///8AAAAAAAEBAQAA/wAAAP8AAAAAAAABAQEA/wAAAAH/AAAAAAAAAQEBAAD/AAAA/wAAAP8AAAAAAAABAAAAAP8AAAEAAAD/AAAAAQAAAAD/AAAAAAAAAAAAAAEAAAAA/wAA////AAAAAAABAQEAAf8AAAD/AAAAAAAAAQEBAP8AAAAA/wAAAAAAAAEBAQAA/wAAAf8AAAAAAAAA/wAAAAAAAAAA/wAAAP8A/wABAAD/AAD/Af8A////AAEAAQD//wAAAAEAAP///wAAAAAA//8AAAABAAD///8A/wAAAAD/AQAAAf8AAAD/AAD/AAAAAAEAAAD/AAAAAAAE////AAEBAQAAAAAA/wD/AAH/AAD/AQAAAQAAAAAAAAABAP8AAAEBAAAAAQD/AP8AAAAAAAAAAAABAQEAAAAAAAAA/wAAAAEAAQEAAAAAAAD/AAAAAQEAAAAAAAAAAQAAAAD/AAAAAQAA/wAAAAEAAAAA/wAAAAAAAAABAAEAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAABAQABAAAAAAH/AAAAAQAAAAAAAAEAAAAA/wAAAAEAAP8AAAABAAAAAAAAAAAAAAH/AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAB/wAAAAEAAAAAAAABAAAAAP8AAAABAAD/AAAAAQAAAAAAAAAAAAAB/wAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAA/wAAAAEA/wAAAAEAAAAAAf8AAAABAAAAAAAAAQAAAAD/AAAAAQAA/wAAAAEAAAAAAAAAAAAAAf8AAP8BAAABAP8AAAABAAD/AAAAAQAAAAD/AAEAAQAAAAAAAAAAAAABAAAAAP8AAAABAP8AAAABAAAAAAH/AAAAAQAAAAAAAAEAAAAA/wAAAAEAAP8AAAABAAAAAAAAAAAAAAH/AAD/AQAAAQD/AAAAAQAA/wAAAAEAAAAA/wABAAEAAAAAAAAAAAAAAQAAAAD/AAAAAQD/AAAAAQAAAAAB/wAAAAEAAAAAAAABAAAAAP8AAAABAAD/AAAAAQAAAAAAAAAAAAAB/wAA/wEAAAEAAAAAAAAAAP8AAAABAAAAAP8AAQABAAAAAAAAAAAAAAEAAAAA/wAAAAEA/wAAAAEAAAAAAf8AAAABAAAAAAAAAQAAAAD/AAAAAQAAAQEAAAAAAAAAAQAAAAAAAP//AP8BAQAB/wEAAAEAAAAAAAABAQEAAP8AAAEBAQAAAAAAAQEBAAD/AAABAQEAAAAAAAABAAAB/wAAAAEBAAABAAAAAAAAAAABAAAAAAACAQEBAAAAAAAAAAAAAAABAAABAQAAAAAAAAABAAD/AAD/AAAAAAAAAAAAAAAAAAEAAAAAAAEAAAAAAP8AAAAAAAAAAQD/AAAAAAABAAAAAAABAAAAAP8BAAAAAAAAAAAA/wABAAD/AAAAAQAAAAAAAAEAAQAAAQEAAAAAAAAAAQAAAAAAAAEBAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAQEAAAAAAAAAAAAAAAAAAAABAAD/AAAAAAAAAAAAAAAAAQAA/wAAAAEAAAAAAAAAAAAAAP8AAAAB/wABAQAAAAAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAQAA/wAAAAAAAAAAAAD/AAEA//8AAAAB/wAAAAAAAAAAAAD/AAAAAQAAAQEAAAAAAAAAAAAAAAAAAAABAAAAAAEAAP//AAAAAAAAAAAAAAAAAAAAAQD///8AAQAAAAAAAAAAAAEAAP8AAAAAAAAAAAAAAAABAAD/AAAAAQAAAAAAAAAAAAAA/wAAAAEAAAEAAAAAAAEAAAAAAAABAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEA////AAEAAAAAAAAAAAABAAD/AAAAAAAAAAAAAP8AAQAA/wAAAAEAAAAAAAAAAAAAAP8AAAABAAABAAAAAAABAAAAAAAAAQAAAAAAAAAAAQAA/wAAAAAAAAAAAAAAAAAA/wABAP///wABAP8AAAAAAAAAAQAA/wAAAAAAAAAAAAAAAAEAAP8AAAABAAAAAAAAAAAAAAD/AAAAAf8AAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAEAAP8AAAAAAAAAAAAAAAAAAAAAAQD///8AAQAAAAAAAAAAAAEAAP8AAAAAAAAAAAAA/wABAAAAAAD///8AAAAAAAABAAAA/wAAAQEBAAH/AAAAAQAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAP8AAAAAAP8A/wAAAAAAAAAAAAD/AAAAAQAAAAAAAAD//wAAAAAAAAEAAAAAAAAC////AAAAAAAAAAAAAQAAAAAA/wABAAAAAAEAAAAAAAABAAEA/wAAAP8A/wAAAP8AAAEAAAAAAQAAAAEAAAAAAAAAAAABAAAAAAD/AAAAAAAAAAAA/wD/AAAAAAAAAAAAAQAAAP8BAAAAAAAAAAAAAP8AAAAA//8AAAAAAAABAAAAAAAA////AAABAAAA/wAAAAAAAAAAAAABAAAAAAAAAAABAQAAAP8AAAAAAAD//wAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAQAA/wAAAAAAAAABAAAAAAAAAP8AAAAA/wAAAAAAAQABAAAAAAAAAAAAAAEAAAAAAAAA/wAAAAAAAAAAAAAAAQAAAAD/AAAAAAABAAAAAQEAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAP8AAAEBAAAAAAAAAP8AAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAP8AAAAAAAAAAAAAAQAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAEAAAD/AQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAQAAAAEBAQAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAEAAAAAAP8AAAD/AAAAAAD/AAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAEAAAAA/wAAAAAAAQAAAAAAAAABAQEA////AAD/AAAAAQAAAAAAAAABAAAA/wAAAAAAAAD/AQD///8AAAAAAAAAAAAAAAEAAAAAAAEAAQAAAAAAAP8AAP8A/wAA/wEAAAAAAAABAQAAAAAAAP8AAP8A/wACAAEBAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAABAAD///8AAQAAAAD/AAAAAAAAAP8AAP8AAAAAAAAAAAAAAAAAAAD/AP8AAAABAAAAAAAAAAAAAQEBAAD/AAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAQEAAP///wAAAAAAAAAAAAAAAAD/AAEAAAEAAAD/AAAAAAEAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAD/ADIzoE4AABHnSURBVAAAAAAAAAD/AAAAAAEAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAEAAP8AAAAAAQD/AAAAAAAAAAAAAAAAAAAAAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAA/wAAAAABAAD/AAAAAAAAAP8AAP8AAAAAAAEAAAAAAAAAAAABAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAP///wD/AAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAABAAAAAAAAAAAA////AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AQAAAAAAAAAAAAAAAAAAAP8AAQEBAAAA/wAA/wAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAQEAAAEAAP///wD///8AAAAAAAAA/wD///8A/wD/AAEBAQAAAP8A////AAAAAAAAAAAAAAD/AAH/AQACAP//AAAAAAAAAAAAAf8AAAD/AAAAAAAAAAD/AAAAAAAAAQAA/wAAAAEBAQAAAAAAAAAAAAAA/wD//wAAAAAAAAAA/wAAAAEAAAD/AP8A/wAAAAAA////AAABAAD//wAAAAAAAAAAAAAAAAAAAAAAAAD/AQAAAQAAAAAAAAAA/wAAAAAAAAABAAEBAQAAAAAAAAAAAAAAAAAAAP8AAP8AAAAB/wAAAP8AAAAAAAEAAAD//wAAAAAAAAAAAAAAAP8A//8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAABAAAAAP8AAAAAAAAAAAAAAQAAAAD/AAAAAAAAAP8AAAAAAAAA/wABAAAA//8AAAAAAAAAAAAAAAEAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAQAAAAD/AAAAAAAAAAAAAAEAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAEAAP//AAAAAAAAAAAAAAAA/wD//wAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEBAQABAAAAAAAAAP///wAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAQAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAP8AAAABAQEA/wAAAAAAAAD//wAAAAAAAAAAAAAAAQAA//8AAAAAAAAAAAAAAAD/AP//AAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAQEBAAEAAAAAAAAA////AAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAABAAD//wAAAAAAAAAAAAAAAAEAAAAAAAABAQAAAf8AAAAAAAAAAAAAAAAAAAD/AAABAAAAAAAAAAAAAAEBAQABAQEAAAD/AAABAQABAQEAAQEBAAAA/wAAAQEAAQEBAAAAAAAAAP8AAAEBAAABAAACAAEBAAAAAAAAAAAAAAEAAAABAQD/AAAAAP8AAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAABAQAA////AAAAAQABAAAAAAAAAAEAAQAAAAAAAQEBAAD/AAAAAP8A/wAAAP8AAAD///8AAAAAAAAB/wAA/wAAAAAAAAD/AAD///8AAP8AAP8A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAA/wAA////AAAAAAAAAP8AAAAAAAAAAAAA/wEAAAD/AAAAAAAAAAAA////AAAAAAAAAAAAAAAAAP///wAA/wAAAAAAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAA/wD/AAAAAAAAAP///wAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAA////AAEAAAAA/wAAAQEAAP///wAAAAAAAP8AAAAA/wAAAAAAAAAAAAD/AQAAAP8AAAAAAAAAAAD///8AAAAAAAAAAAAAAAAA////AAAAAAAAAAAA////AAD/AAAAAAAAAQAAAP///wAAAAAAAP8AAAEBAQD///8AAAAAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAAD/AP8AAAD/AAAA////AAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAP///wAA/wEAAAAAAAEAAAD///8AAQAAAAD/AAABAQAA////AAAAAAAA/wAAAAD/AAAAAAAAAAAAAP8BAAAA/wAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAD///8AAP8AAAAAAAABAAAA////AAAAAAAA/wAAAQEBAP///wAAAAAAAP8AAAAA/wAAAAAAAAAAAAAAAAAAAP8A/wAAAAAAAAD///8AAP8AAAAAAAAAAAEAAP8AAAD//wAAAAAAAAABAAD/AAAA//8AAAAAAP///wAAAAAAAAABAAD//wAAAAAAAAAAAAD/AQAAAP8AAAAAAAAAAAAA/wEAAAD/AAAAAAACAQAAAAAAAAAAAAAAAAAAAAAA/wABAAAA/wAAAAAA/wABAAEAAAABAP8AAAAAAAAAAAAAAAAAAAD/AP8AAQEBAAD//wAAAAAA//8AAAAAAAD/AP8AAAAAAP8A/wABAQEAAP8AAAEAAAABAQEA////AAEAAQAAAAAAAAAAAP8AAAABAQEAAAD/AAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAQAAAQEBAP///wABAQEAAP8AAAAAAAD/AP8AAQEBAAD/AAAAAAAAAQEBAP//AAAAAAAAAP8AAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AP8AAQABAAAAAAAA/wAA////AAEAAQAAAAAA//8AAAEBAQD//wAAAAAAAAD/AAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAD/AAD/AP8AAP8AAAEBAQAA/wAA/wD/AAEAAQAAAAAAAP8AAP8A/wABAAEAAAAAAAD/AAABAQEA//8AAAD/AAAAAAAAAQEBAP//AAAA/wAAAQEBAAABAAD//wAAAP8AAAEBAAAAAAAA/wD/AAAAAAABAAEAAAAAAP8A/wABAQAAAP8AAAAAAAD/AP8AAQEBAAD/AAABAAAAAQEBAP///wAA/wAAAAAAAAEBAQD//wAAAP8AAAEBAQAAAQAA//8AAAD/AAABAQEAAAAAAP8A/wAAAAAAAQABAAAAAAD/AP8AAQEBAAD/AAAAAAAA/wD/AAEBAQAA/wAAAAAAAAEBAQD//wAAAAAAAAD/AAABAQEA//8AAAAAAAABAAEAAAH/AP//AAAAAAAAAQEBAAD/AAD/AP8AAP8AAAEBAQAA/wAA/wD/AAEAAQAAAAAAAP8AAP///wABAAEAAAAAAAAAAAABAQEA/wD/AAAAAAAAAP8AAAEAAP8AAAAAAAAAAAAAAAABAAD/AAAAAAAAAAEBAAAAAAAA////AAABAQAAAP8AAAAAAP8A/wAAAAEAAAD/AAAAAAD/AP8AAAABAAAA/wAC/wAAAAAAAAAAAAAA////AP8AAAD/AAAAAQAAAAAAAQD/AAAAAQEAAAEAAAAAAAAAAAAAAAAAAAABAAEAAAAAAAABAQAAAAAAAQAAAAAAAAAAAAEAAAAAAAEBAQAA/wAAAQEAAAAAAAAAAAAAAQEBAP//AAAAAAAAAAAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/AAABAQEAAP8AAAABAAAAAAAAAAAAAAEBAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAEAAAAAAAAAAAAAAQEBAAAAAAABAAAAAQEAAAAAAAABAQAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8A/wABAQEAAAEAAAD/AAAAAQAAAQEBAAABAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAABAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAEAAAAAAQAAAP8AAAAAAAABAAAA/wD/AAAAAQD///8AAQEBAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAEAAAD/AAABAQEAAP8AAAEBAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAABAAAAAAEAAAD/AAAAAAAAAQAAAP8A/wAAAAAA////AAEBAQAAAAAAAAAAAAAAAAABAQEAAAAAAAABAAAA/wAAAQEBAAD/AAAAAQAAAAAAAAAAAAABAQAAAP8AAAABAAAAAAAAAQAAAAAAAAAAAAAAAAABAAEAAAD///8AAAAAAP8A/wABAQEAAAEAAAD/AAAAAQAAAQEBAAABAAAAAAAAAAAAAAEBAQAAAAAAAQAAAAAAAAAA//8AAQEBAAD/AAAAAAEAAAD/AAEAAQAAAAAAAAAAAAD//wABAQEA////AAAAAQD///8AAQEBAAD/AAAAAAEAAAD/AAEAAQAAAAAAAAABAAD//wABAQEAAP8AAAAAAQAEBPMEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZdk/t1hpkTgAAAABJRU5ErkJggg==",
            "encoding": "base64"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": -1,
          "_transferSize": 160827,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:23:47.712Z",
        "time": 37.68499998841435,
        "timings": {
          "blocked": 2.1769999195411804,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.7390000000000001,
          "wait": 10.163000018902123,
          "receive": 24.606000049971044,
          "_blocked_queueing": 0.7079999195411801,
          "_blocked_proxy": 1.011,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "364527",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "O",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 26495
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 7294
              },
              {
                "functionName": "onScheduleTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 4466
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 7192
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 3405
              },
              {
                "functionName": "scheduleMacroTask",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 3714
              },
              {
                "functionName": "Vt",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 11106
              },
              {
                "functionName": "",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 26905
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "13138",
                "url": "https://n958200.alteg.io/polyfills-4SYDXY4C.js",
                "lineNumber": 0,
                "columnNumber": 14254
              },
              {
                "functionName": "apply",
                "scriptId": "13167",
                "url": "https://n958200.alteg.io/chunk-FAHXWQCK.js",
                "lineNumber": 0,
                "columnNumber": 320007
              },
              {
                "functionName": "",
                "scriptId": "13167",
                "url": 
```
