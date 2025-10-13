### flows/new_account_entry_from_your_personal_account@auth.har (part 054)

```har
oy$))),this.trackPageView(),this.currentCompany.isCurrentCompanyLoaded()||this.currentCompany.loadCompany(this.currentCompany.currentCompanyId)})}ngAfterViewInit(){this.isReady$.next(!0)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}trackPageView(){var a;let r=\"my_certificates\";this.tracking.setPage(r),this.tracking.track({type:E.Action.pageView,element:{id:((a=this.certificates[0])==null?void 0:a.id)||0}}),this.tracking.trackFBViewContent(r)}navigateToProfile(){this.appNavigationService.goBack({url:\"/profile\"})}newOrder(){this.trackCertificateActionsByName(\"open_create_record_flow\"),this.orderManager.newOrder()}onCopyNumber(){this.trackCertificateActionsByName(\"copy_certificate_id\"),this.notification.notifySuccess(this.translate.instant(\"loyalty.number_copied\"))}getCurrentSlideIndex(r){this.currentSlideIndex=r}trackSlideSwitch(r){this.trackCertificateActionsByName(\"\".concat(r.type,\"_certificate_\").concat(r.direction),r.type===\"swipe\"?\"swipe\":\"button\")}trackCertificateActionsByName(r,a=\"button\"){this.tracking.track({type:E.Action.click,element:{type:a,name:r,id:this.certificates[this.currentSlideIndex].id}})}};i(e,\"\\u0275fac\",function(a){return new(a||e)}),i(e,\"\\u0275cmp\",S({type:e,selectors:[[\"app-certificate-page\"]],features:[A([{directive:B,inputs:[\"appLoadingBenchmarks\",\"appLoadingBenchmarks\",\"dataSource\",\"dataSource\"]}])],decls:7,vars:9,consts:[[3,\"backClick\"],[3,\"currentSlideIndex\",\"currentSlideSwitched\",4,\"ngIf\"],[\"footer\",\"\",\"class\",\"continue-button\",3,\"click\",4,\"ngIf\"],[\"class\",\"banner\",4,\"ngIf\"],[3,\"currentSlideIndex\",\"currentSlideSwitched\"],[4,\"ngFor\",\"ngForOf\"],[\"cardSlide\",\"\",3,\"cdkCopyToClipboardCopied\",\"title\",\"cardId\",\"companyLogo\"],[\"cardInfo\",\"\",3,\"card\",\"currentCompany\"],[\"footer\",\"\",1,\"continue-button\",3,\"click\"],[1,\"banner\"]],template:function(a,l){a&1&&(p(0,\"app-loyalty-layout\",0),b(\"backClick\",function(){return l.navigateToProfile()}),C(1,St,3,3,\"app-loyalty-slider\",1),s(2,\"async\"),C(3,Mt,3,4,\"ui-kit-button\",2),s(4,\"async\"),C(5,kt,3,4,\"p\",3),s(6,\"async\"),c()),a&2&&(t(),u(\"ngIf\",d(2,3,l.hasCertificates$)),t(2),u(\"ngIf\",d(4,5,l.hasCertificates$)),t(2),u(\"ngIf\",d(6,7,l.hasCertificates$)===!1))},dependencies:[q,I,ft,mt,dt,T,Z,gt,H,P],styles:['@charset \"UTF-8\";[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background-color:var(--y-core-color-surface-primary);padding-top:var(--safe-area-top);padding-bottom:var(--safe-area-bottom);width:100%;max-width:600px;margin:0 auto}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:20px}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;padding:0 24px 24px}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-grow:3}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{align-self:flex-end}[_nghost-%COMP%]   .button-back[_ngcontent-%COMP%]{width:24px;height:24px}[_nghost-%COMP%]   .continue-button[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{margin:0 8px}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:700;font-size:20px;line-height:24px;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}'],changeDetection:0}));let n=e;return n})();var Ot={requestsWithProps:[{req:it,props:{companyId:h.currentCompany.getCurrentCompanyId}}],callbacks:[nt]},It=[{path:\"**\",component:Ct,resolve:[_t],data:$({},Ot)}],ht=(()=>{let e=class e{};i(e,\"\\u0275fac\",function(a){return new(a||e)}),i(e,\"\\u0275mod\",M({type:e})),i(e,\"\\u0275inj\",w({imports:[D.forChild(It),D]}));let n=e;return n})();var we=(()=>{let e=class e{};i(e,\"\\u0275fac\",function(a){return new(a||e)}),i(e,\"\\u0275mod\",M({type:e})),i(e,\"\\u0275inj\",w({imports:[G,ht,yt,Y,st,ot,T,tt]}));let n=e;return n})();export{we as CertificateModule,ht as CertificateRoutingModule};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 4197,
          "_transferSize": 4856,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:20:11.465Z",
        "time": 49.026999971829355,
        "timings": {
          "blocked": 31.893000016883015,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.5109999999999992,
          "wait": 15.128999987594785,
          "receive": 1.4939999673515558,
          "_blocked_queueing": 1.1030000168830156,
          "_blocked_proxy": 2.786,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "495727",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "loadChildren",
                "scriptId": "3503",
                "url": "https://n958200.alteg.io/profile-UJ3PQK5W.js",
                "lineNumber": 0,
                "columnNumber": 47473
              },
              {
                "functionName": "B7",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 560635
              },
              {
                "functionName": "loadChildren",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 560308
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 584092
              },
              {
                "functionName": "preload",
                "scriptId": "3259",
                "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                "lineNumber": 0,
                "columnNumber": 4342
              },
              {
                "functionName": "preloadConfig",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 584022
              },
              {
                "functionName": "processRoutes",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583828
              },
              {
                "functionName": "processRoutes",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583891
              },
              {
                "functionName": "preload",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583405
              },
              {
                "functionName": "",
                "scriptId": "3259",
                "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                "lineNumber": 0,
                "columnNumber": 1979
              }
            ],
            "parent": {
              "description": "requestIdleCallback",
              "callFrames": [
                {
                  "functionName": "",
                  "scriptId": "3259",
                  "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                  "lineNumber": 0,
                  "columnNumber": 1960
                },
                {
                  "functionName": "observer",
                  "scriptId": "3259",
                  "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                  "lineNumber": 0,
                  "columnNumber": 1790
                },
                {
                  "functionName": "invoke",
                  "scriptId": "3244",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 6464
                },
                {
                  "functionName": "onInvoke",
                  "scriptId": "3264",
                  "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                  "lineNumber": 0,
                  "columnNumber": 74795
                },
                {
                  "functionName": "invoke",
                  "scriptId": "3244",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 6404
                },
                {
                  "functionName": "runGuarded",
                  "scriptId": "3244",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 1837
                },
                {
                  "functionName": "",
                  "scriptId": "3244",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 1616
                }
              ]
            }
          }
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/membership-6UG5DJAO.js",
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
              "value": "https://n958200.alteg.io/profile-UJ3PQK5W.js"
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
          "headersSize": 1075,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "996"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e77bebbabca5-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:11 GMT"
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
              "value": "W/\"68e51480-4b92\""
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
              "value": "38aacb4010312f9a7a866342ae8b2013"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 19346,
            "mimeType": "application/javascript",
            "compression": 13419,
            "text": "import{b as Ae,c as M}from\"./chunk-4D5PXVVK.js\";import{a as U,b as $e,c as Ne,d as Le,e as Ue,g as Fe}from\"./chunk-FD4HDYNO.js\";import\"./chunk-BM6WCQQT.js\";import{b as De}from\"./chunk-ZCWD3LHB.js\";import{a as L}from\"./chunk-3XC4XRL4.js\";import{f as Me}from\"./chunk-TX67VJHB.js\";import\"./chunk-TXASR5LU.js\";import\"./chunk-HNFBT5P4.js\";import\"./chunk-OT2UNM7Q.js\";import\"./chunk-6Q3T6TH3.js\";import\"./chunk-5HKI7HVK.js\";import\"./chunk-2AY43R2Q.js\";import{G as ze,H as Be,g as ke,i as Pe,m as Te,s as Ee,y as Oe}from\"./chunk-IV3KQJLV.js\";import{Aa as se,Ab as N,Ba as R,Bb as le,Dc as K,Eb as pe,Fc as ye,Hc as ge,Kb as me,Pb as de,S as V,Tc as he,Wc as be,a as ae,d as z,e as B,j as re,nd as xe,p as ce,rc as _e,tc as fe,uc as ue,uf as ve,ui as w,vf as Ce,wf as Ie,xa as D,xf as Se,yf as we,zb as $}from\"./chunk-6FGVQ7PR.js\";import{Aa as P,Ac as y,Cc as j,Fa as b,Fb as t,Gb as h,J as ee,Ka as T,La as E,Pc as _,Qb as te,Qc as f,Ub as g,Va as x,Wa as v,Wb as l,Xb as p,Zb as ie,aa as F,c as Y,ec as s,fc as c,gc as O,h as Q,hc as ne,i as X,ic as oe,j as J,kc as I,oc as C,pc as u,qa as S,x as Z,yc as d,zc as A}from\"./chunk-KO722YSM.js\";import\"./chunk-H3NWS7CE.js\";import\"./chunk-POJFEGQU.js\";import{a as H,b as W,g as a,i as k}from\"./chunk-JV5WWF5Q.js\";function Xe(e,n){e&1&&(s(0,\"p\"),d(1),_(2,\"translate\"),c()),e&2&&(t(),y(\" \",f(2,1,\"loyalty.subscriptions.unactivated\"),\" \"))}function Je(e,n){e&1&&(s(0,\"p\"),d(1),_(2,\"translate\"),c()),e&2&&(t(),A(f(2,1,\"loyalty.frozen\")))}function Ze(e,n){if(e&1&&(s(0,\"div\",8),g(1,Xe,3,3,\"p\",7)(2,Je,3,3,\"p\",7),c()),e&2){let i=u();l(\"data-locator\",\"abonement_info_status\"),t(),p(\"ngIf\",i.canShowUnactivated),t(),p(\"ngIf\",i.isFrozen)}}function et(e,n){if(e&1&&(s(0,\"div\",9)(1,\"div\",10),d(2),_(3,\"translate\"),c(),s(4,\"div\",11),d(5),c()()),e&2){let i=u();l(\"data-locator\",\"card_info_balance\"),t(),l(\"data-locator\",\"balance_title_\"),t(),y(\" \",f(3,7,\"loyalty.subscriptions.validity\"),\" \"),t(2),ie(\"capitalize-first-letter\",!i.hasExpirationDate),l(\"data-locator\",\"abonement_validity\"),t(),y(\" \",i.expirationInfoDescription,\" \")}}function tt(e,n){if(e&1&&(s(0,\"div\",9)(1,\"div\",10),d(2),_(3,\"translate\"),c(),s(4,\"div\",11),d(5),_(6,\"translate\"),c()()),e&2){let i=u();l(\"data-locator\",\"card_info_balance\"),t(),l(\"data-locator\",\"balance_title\"),t(),y(\" \",f(3,7,\"loyalty.certificate.balance\"),\" \"),t(2),l(\"data-locator\",\"abonement_balance\"),t(),j(\" \",i.currentCountOfUses,\" \",f(6,9,\"out-of\"),\" \",i.totalCountOfUses,\" \")}}function it(e,n){if(e&1&&(s(0,\"div\",9)(1,\"div\",10),d(2),_(3,\"translate\"),c(),s(4,\"div\",11),d(5),c()()),e&2){let i=u();l(\"data-locator\",\"card_info_balance\"),t(),l(\"data-locator\",\"can_be_freezed\"),t(),y(\" \",f(3,5,\"loyalty.allow_to_freeze\"),\" \"),t(2),l(\"data-locator\",\"freeze_period\"),t(),A(i.freezePeriod)}}function nt(e,n){e&1&&(s(0,\"h3\",1),d(1),_(2,\"translate\"),c()),e&2&&(t(),y(\" \",f(2,1,\"loyalty.valid_for\"),\" \"))}function ot(e,n){e&1&&(s(0,\"h3\",1),d(1),_(2,\"translate\"),c()),e&2&&(t(),y(\" \",f(2,1,\"loyalty.certificate.balance\"),\" \"))}function at(e,n){if(e&1&&(s(0,\"p\",16),d(1),c()),e&2){let i=u().$implicit;l(\"data-locator\",\"service_category_title\"),t(),y(\" \",i.category==null?null:i.category.title,\" \")}}function rt(e,n){if(e&1&&(s(0,\"p\",16),d(1),c()),e&2){let i=u().$implicit;l(\"data-locator\",\"service_title\"),t(),y(\" \",i.service==null?null:i.service.title,\" \")}}function ct(e,n){e&1&&(s(0,\"p\",17),d(1),_(2,\"translate\"),c()),e&2&&(l(\"data-locator\",\"services_categories_description\"),t(),y(\" \",f(2,2,\"loyalty.subscriptions.all-services\"),\" \"))}function st(e,n){if(e&1&&(s(0,\"div\",18),d(1),_(2,\"translate\"),c()),e&2){let i=u().index,o=u();l(\"data-locator\",\"services_categories_counter\"),t(),j(\" \",o.card.balance_container==null||o.card.balance_container.links[i]==null?null:o.card.balance_container.links[i].count,\"\\xA0\",f(2,4,\"out-of\"),\"\\xA0\",o.card.type.balance_container==null||o.card.type.balance_container.links[i]==null?null:o.card.type.balance_container.links[i].count,\" \")}}function lt(e,n){if(e&1&&(s(0,\"div\",12)(1,\"div\"),g(2,at,2,2,\"p\",13)(3,rt,2,2,\"p\",13)(4,ct,3,4,\"p\",14),c(),g(5,st,3,6,\"div\",15),c()),e&2){let i=n.$implicit,o=u();l(\"data-locator\",\"services_categories_row\"),t(2),p(\"ngIf\",i.category==null?null:i.category.title),t(),p(\"ngIf\",i.service==null?null:i.service.title),t(),p(\"ngIf\",i.category==null?null:i.category.title),t(),p(\"ngIf\",!o.card.is_united_balance)}}function pt(e,n){if(e&1&&(s(0,\"div\",22),d(1),_(2,\"translate\"),c()),e&2){let i=u(2);l(\"data-locator\",\"membership_info_payment_info_title\"),t(),y(\" \",f(2,2,i.recurringPaymentStatusTitle),\" \")}}function mt(e,n){if(e&1&&(s(0,\"div\",23),d(1),c()),e&2){let i=u(2);l(\"data-locator\",\"membership_info_payment_info_description\"),t(),y(\" \",i.card.recurring_payment_info.next_billing_alert,\" \")}}function dt(e,n){if(e&1){let i=I();s(0,\"div\",24),C(\"click\",function(r){x(i);let m=u(2);return v(m.onClickCancelRecurringPaymentHandler(r))}),s(1,\"span\",25),d(2),_(3,\"translate\"),c(),O(4,\"ui-kit-svg-icon\",26),c()}e&2&&(l(\"data-locator\",\"membership_info_payment_info_cancel_block\"),t(),l(\"data-locator\",\"membership_info_payment_info_cancel_block_description\"),t(),y(\" \",f(3,5,\"loyalty.subscriptions.cancel_payment_text\"),\" \"),t(2),p(\"name\",\"info-24\"),l(\"data-locator\",\"membership_info_payment_info_cancel_block_icon\"))}function _t(e,n){if(e&1&&(ne(0),s(1,\"h3\",1),d(2),_(3,\"translate\"),c(),g(4,pt,3,4,\"div\",19)(5,mt,2,2,\"div\",20)(6,dt,5,7,\"div\",21),oe()),e&2){let i=u();t(2),y(\" \",f(3,4,\"loyalty.subscriptions.status\"),\" \"),t(2),p(\"ngIf\",i.recurringPaymentStatusTitle),t(),p(\"ngIf\",i.card==null||i.card.recurring_payment_info==null?null:i.card.recurring_payment_info.next_billing_alert),t(),p(\"ngIf\",i.canShowCancelMembershipButton)}}var je=(()=>{let n=class n{constructor(o,r,m,G,Ke,qe,Ge,He,We){a(this,\"wordNumeralCasePipe\");a(this,\"globalLoaderService\");a(this,\"actions$\");a(this,\"translate\");a(this,\"yDate\");a(this,\"modalService\");a(this,\"capitalizePipe\");a(this,\"store\");a(this,\"document\");a(this,\"card\");a(this,\"destroy$\",new Q);this.wordNumeralCasePipe=o,this.globalLoaderService=r,this.actions$=m,this.translate=G,this.yDate=Ke,this.modalService=qe,this.capitalizePipe=Ge,this.store=He,this.document=We}get hasExpirationDate(){return this.card.expiration_date!==null}get isNewerUsed(){return this.card.status.id===Ae.STATUS_CREATED}get isFrozen(){return!this.isNewerUsed&&this.card.is_frozen}get canShowUnactivated(){return this.isNewerUsed&&!this.isAutoRenewal}get isAutoRenewal(){return this.card.type.category===\"auto_renewal\"}get canShowCancelMembershipButton(){return this.isAutoRenewal&&!!this.card.recurring_payment_info}get totalCountOfUses(){return this.card.type.united_balance_services_count}get currentCountOfUses(){return this.card.united_balance_services_count}get canShowExpirationInfo(){return!this.isNewerUsed}get expirationInfoDescription(){return this.hasExpirationDate?\"\".concat(this.translate.instant(\"until\"),\" \").concat(this.yDate.transform(this.card.expiration_date,\"longDate\")):this.translate.instant(\"loyalty.subscriptions.valid-unlimited-short\")}get canShowFreezePeriod(){return!this.card.is_frozen&&this.card.type.allow_freeze&&!!this.card.type.freeze_limit}get freezePeriod(){return\"\".concat(this.translate.instant(\"on_for\"),\" \").concat(this.card.type.freeze_limit,\" \").concat(this.wordNumeralCasePipe.transform(\"time.dayCased\",this.card.type.freeze_limit))}get recurringPaymentStatusTitle(){var o,r;if(!this.isAutoRenewal)return\"\";if(!((r=(o=this.card)==null?void 0:o.recurring_payment_info)!=null&&r.subscription_status))return\"loyalty.subscriptions.status_deactivated\";switch(this.card.recurring_payment_info.subscription_status){case M.ACTIVE:return\"loyalty.subscriptions.status_active\";case M.EXPIRED:return\"loyalty.subscriptions.status_expired\";case M.CANCELLED:return\"loyalty.subscriptions.status_cancelled\";case M.SUSPENDED:return\"loyalty.subscriptions.status_suspended\"}}balanceServiceOrCategory(){return this.card.is_united_balance?\"\":\"\".concat(this.card,\" \").concat(this.wordNumeralCasePipe.transform(\"time.dayCased\",this.card.type.freeze_limit))}onClickCancelRecurringPaymentHandler(o){return k(this,null,function*(){o.preventDefault(),o.stopPropagation(),(yield this.modalService.openModal({component:Me,componentData:{title:this.translate.instant(\"loyalty.subscriptions.cancel_payment_title\"),text:this.translate.instant(\"loyalty.subscriptions.cancel_payment_subtitle\"),confirmButtonText:this.capitalizePipe.transform(this.translate.instant(\"Yes\")),cancelButtonText:this.capitalizePipe.transform(this.translate.instant(\"No\")),titleDataLocator:\"membership_info_modal_window_text\",confirmDataLocator:\"membership_info_modal_window_exit_btn\",cancelDataLocator:\"membership_info_modal_window_cancel_btn\"},params:{modalType:fe.default,isGrayBackground:!1,dataLocator:\"logout_modal_window\"}}).instance.result.catch(Y))&&(this.globalLoaderService.showLoader(),this.store.dispatch(Ie({subscriptionId:this.card.recurring_payment_info.subscription_id})),this.actions$.pipe(R(Se),F(),S(this.destroy$)).subscribe(()=>{this.document.location.reload()}),this.actions$.pipe(R(we),F(),S(this.destroy$)).subscribe(()=>this.globalLoaderService.hideLoader()))})}};a(n,\"\\u0275fac\",function(r){return new(r||n)(h(Te),h(de),h(se),h($),h(ke),h(ue),h(Ee),h(D),h(ae))}),a(n,\"\\u0275cmp\",T({type:n,selectors:[[\"app-membership-info-card\"]],inputs:{card:\"card\"},decls:13,vars:14,consts:[[1,\"info\"],[1,\"info__header\"],[\"class\",\"info__status\",4,\"ngIf\"],[1,\"info__balances\"],[\"class\",\"info__balances_cell\",4,\"ngIf\"],[\"class\",\"info__header\",4,\"ngIf\"],[\"class\",\"services-categories\",4,\"ngFor\",\"ngForOf\"],[4,\"ngIf\"],[1,\"info__status\"],[1,\"info__balances_cell\"],[1,\"info__title\"],[1,\"info__description\"],[1,\"services-categories\"],[\"class\",\"services-categories__title\",4,\"ngIf\"],[\"class\",\"services-categories__description\",4,\"ngIf\"],[\"class\",\"services-categories__counter\",4,\"ngIf\"],[1,\"services-categories__title\"],[1,\"services-categories__description\"],[1,\"services-categories__counter\"],[\"class\",\"info__payment-title capitalize-first-letter\",4,\"ngIf\"],[\"class\",\"info__payment-description capitalize-first-letter\",4,\"ngIf\"],[\"class\",\"info__payment-cancel-button\",3,\"click\",4,\"ngIf\"],[1,\"info__payment-title\",\"capitalize-first-letter\"],[1,\"info__payment-description\",\"capitalize-first-letter\"],[1,\"info__payment-cancel-button\",3,\"click\"],[1,\"info__payment-cancel-button-text\"],[\"role\",\"button\",1,\"info__payment-cancel-button-icon\",3,\"name\"]],template:function(r,m){r&1&&(s(0,\"div\",0)(1,\"h2\",1),d(2),_(3,\"translate\"),c(),g(4,Ze,3,3,\"div\",2),s(5,\"div\",3),g(6,et,6,9,\"div\",4)(7,tt,7,11,\"div\",4)(8,it,6,7,\"div\",4),c(),g(9,nt,3,3,\"h3\",5)(10,ot,3,3,\"h3\",5)(11,lt,6,5,\"div\",6)(12,_t,7,6,\"ng-container\",7),c()),r&2&&(l(\"data-locator\",\"abonement_info_block\"),t(),l(\"data-locator\",\"card_info_header\"),t(),y(\" \",f(3,12,\"loyalty.subscription.about\"),\" \"),t(2),p(\"ngIf\",m.canShowUnactivated||m.isFrozen),t(),l(\"data-locator\",\"abonement_balances_block\"),t(),p(\"ngIf\",m.canShowExpirationInfo),t(),p(\"ngIf\",m.card.is_united_balance),t(),p(\"ngIf\",m.canShowFreezePeriod),t(),p(\"ngIf\",m.card.is_united_balance),t(),p(\"ngIf\",!m.card.is_united_balance),t(),p(\"ngForOf\",m.card.balance_container==null?null:m.card.balance_container.links),t(),p(\"ngIf\",m.isAutoRenewal))},dependencies:[z,B,pe,N],styles:['@charset \"UTF-8\";.card[_ngcontent-%COMP%]{margin-left:8px;width:calc(100% - 16px)}.info__header[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:700;font-size:20px;line-height:24px}.info__header[_ngcontent-%COMP%]:not(:first-child){margin-top:32px}.info__header-affects[_ngcontent-%COMP%]{margin-top:40px;color:var(--y-core-color-text-primary);font-style:normal;font-weight:700;font-size:20px;line-height:24px}.info__balances[_ngcontent-%COMP%]{margin-top:16px;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;justify-content:space-between;align-items:center;gap:20px 16px}.info__balances[_ngcontent-%COMP%]:empty{display:none}.info__balances_cell[_ngcontent-%COMP%]{flex-basis:46%;flex-grow:2}.info__title[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:14px;line-height:20px;padding-bottom:4px}.info__description[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:400;font-size:16px;line-height:24px;white-space:nowrap}.info__description[_ngcontent-%COMP%]:first-letter{text-transform:lowercase}.info__status[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:8px}.info[_ngcontent-%COMP%]   .services-categories[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:16px}.info[_ngcontent-%COMP%]   .services-categories__title[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:400;font-size:16px;line-height:24px}.info[_ngcontent-%COMP%]   .services-categories__description[_ngcontent-%COMP%]{margin-top:2px;color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:12px;line-height:16px}.info[_ngcontent-%COMP%]   .services-categories__counter[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-left:12px}.info__payment-title[_ngcontent-%COMP%]{margin-top:16px;color:var(--y-core-color-color_text_black);font-style:normal;font-weight:400;font-size:16px;line-height:24px}.info__payment-description[_ngcontent-%COMP%]{color:var(--y-core-color-color_grey_dark);font-style:normal;font-weight:400;font-size:12px;line-height:16px}.info__payment-cancel-button[_ngcontent-%COMP%]{margin-top:16px;cursor:pointer;display:flex;align-items:center;justify-content:left;gap:4px;color:var(--y-core-color-color_text_black);position:relative;font-style:normal;font-weight:500;font-size:14px;line-height:20px}.info__payment-cancel-button[_ngcontent-%COMP%]:after{content:\"\";position:absolute;display:block;top:-6px;left:-16px;width:calc(100% + 32px);height:calc(100% + 12px)}.info__payment-cancel-button-text[_ngcontent-%COMP%]{white-space:normal}.info__payment-cancel-button-icon[_ngcontent-%COMP%]{width:16px;height:16px;flex-shrink:0}'],changeDetection:0}));let e=n;return e})();function ut(e,n){if(e&1){let i=I();s(0,\"app-loyalty-slide\")(1,\"ui-kit-loyalty-card\",6),C(\"cdkCopyToClipboardCopied\",function(){x(i);let r=u(2);return v(r.onCopyNumber())}),c(),O(2,\"app-membership-info-card\",7),c()}if(e&2){let i=n.$implicit,o=u(2);t(),p(\"title\",i.type.title)(\"cardId\",i.number)(\"frozen\",i.is_frozen)(\"companyLogo\",o.companyLogo()),t(),p(\"card\",i)}}function yt(e,n){if(e&1){let i=I();s(0,\"app-loyalty-slider\",4),C(\"currentSlideIndex\",function(r){x(i);let m=u();return v(m.getCurrentSlideIndex(r))})(\"currentSlideSwitched\",function(r){x(i);let m=u();return v(m.trackSlideSwitch(r))}),g(1,ut,3,5,\"app-loyalty-slide\",5),_(2,\"async\"),c()}if(e&2){let i=u();t(),p(\"ngForOf\",f(2,1,i.memberships$))}}function gt(e,n){if(e&1){let i=I();s(0,\"ui-kit-button\",8),C(\"click\",function(){x(i);let r=u();return v(r.newOrder())}),d(1),_(2,\"translate\"),c()}e&2&&(l(\"data-locator\",\"continue_button\"),t(),y(\" \",f(2,2,\"book-visit\"),\" \"))}function ht(e,n){e&1&&(s(0,\"p\",9),d(1),_(2,\"translate\"),c()),e&2&&(l(\"data-locator\",\"empty_page_banner\"),t(),y(\" \",f(2,2,\"loyalty.no_memberships\"),\" \"))}var Ve=(()=>{let n=class n{constructor(){a(this,\"loadingBenchmarksDirective\",b(L,{self:!0}));a(this,\"isReady$\",new X(!1));a(this,\"store\",b(D));a(this,\"orderManager\",b(ze));a(this,\"currentCompany\",b(Oe));a(this,\"notification\",b(me));a(this,\"translate\",b($));a(this,\"tracking\",b(ye));a(this,\"appNavigationService\",b(Be));a(this,\"destroy$\",new J(1));a(this,\"hasMemberships$\",this.store.select(w.user.getMembershipsCount).pipe(Z(o=>!!o)));a(this,\"memberships$\",this.store.select(w.user.getMemberships));a(this,\"memberships\",[]);a(this,\"currentSlideIndex\",0);this.loadingBenchmarksDirective.appLoadingBenchmarks=[\"booking_memberships_page_open_cold\",\"booking_memberships_page_open\"],this.loadingBenchmarksDirective.dataSource=this.isReady$.pipe(ee(Boolean))}ngOnInit(){return k(this,null,function*(){this.memberships=yield xe(this.memberships$.pipe(S(this.destroy$))),this.trackPageView()})}ngAfterViewInit(){this.isReady$.next(!0)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}trackPageView(){var r;let o=\"my_subscriptions\";this.tracking.setPage(o),this.tracking.track({type:K.Action.pageView,element:{id:((r=this.memberships[0])==null?void 0:r.id)||0}}),this.tracking.trackFBViewContent(o)}navigateToProfile(){this.appNavigationService.goBack({url:\"profile\"})}companyLogo(){var r;let o=((r=this.currentCompany.getCurrentCompany())==null?void 0:r.logo)||\"\";return o.includes(\"altegio-default-logo\")?null:o}onCopyNumber(){this.trackSubscriptionActionsByName(\"copy_subscription_id\"),this.notification.notifySuccess(this.translate.instant(\"loyalty.number_copied\"))}getCurrentSlideIndex(o){this.currentSlideIndex=o}newOrder(){this.trackSubscriptionActionsByName(\"open_create_record_flow\"),this.orderManager.newOrder()}trackSlideSwitch(o){this.trackSubscriptionActionsByName(\"\".concat(o.type,\"_subscription_\").concat(o.direction),o.type===\"swipe\"?\"swipe\":\"button\")}trackSubscriptionActionsByName(o,r=\"button\"){this.tracking.track({type:K.Action.click,element:{type:r,name:o,id:this.memberships[this.currentSlideIndex].id}})}};a(n,\"\\u0275fac\",function(r){return new(r||n)}),a(n,\"\\u0275cmp\",T({type:n,selectors:[[\"app-membership-page\"]],features:[te([{directive:L,inputs:[\"appLoadingBenchmarks\",\"appLoadingBenchmarks\",\"dataSource\",\"dataSource\"]}])],decls:7,vars:9,consts:[[3,\"backClick\"],[3,\"currentSlideIndex\",\"currentSlideSwitched\",4,\"ngIf\"],[\"footer\",\"\",\"class\",\"continue-button\",3,\"click\",4,\"ngIf\"],[\"class\",\"banner\",4,\"ngIf\"],[3,\"currentSlideIndex\",\"currentSlideSwitched\"],[4,\"ngFor\",\"ngForOf\"],[\"cardSlide\",\"\",3,\"cdkCopyToClipboardCopied\",\"title\",\"cardId\",\"frozen\",\"companyLogo\"],[\"cardInfo\",\"\",3,\"card\"],[\"footer\",\"\",1,\"continue-button\",3,\"click\"],[1,\"banner\"]],template:function(r,m){r&1&&(s(0,\"app-loyalty-layout\",0),C(\"backClick\",function(){return m.navigateToProfile()}),g(1,yt,3,3,\"app-loyalty-slider\",1),_(2,\"async\"),g(3,gt,3,4,\"ui-kit-button\",2),_(4,\"async\"),g(5,ht,3,4,\"p\",3),_(6,\"async\"),c()),r&2&&(t(),p(\"ngIf\",f(2,3,m.hasMemberships$)),t(2),p(\"ngIf\",f(4,5,m.hasMemberships$)),t(2),p(\"ngIf\",f(6,7,m.hasMemberships$)===!1))},dependencies:[z,B,Le,Ne,$e,U,he,je,re,N],styles:['@charset \"UTF-8\";[_nghost-%COMP%]   .continue-button[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:700;font-size:20px;line-height:24px;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}'],changeDetection:0}));let e=n;return e})();var bt={requestsWithProps:[{req:ve,props:{companyId:w.currentCompany.getCurrentCompanyId}}],callbacks:[Ce]},xt=[{path:\"**\",component:Ve,resolve:[Ue],data:W(H({},bt),{step:ge.membership})}],Re=(()=>{let n=class n{};a(n,\"\\u0275fac\",function(r){return new(r||n)}),a(n,\"\\u0275mod\",E({type:n})),a(n,\"\\u0275inj\",P({imports:[V.forChild(xt),V]}));let e=n;return e})();var Oi=(()=>{let n=class n{};a(n,\"\\u0275fac\",function(r){return new(r||n)}),a(n,\"\\u0275mod\",E({type:n})),a(n,\"\\u0275inj\",P({imports:[ce,Re,le,Pe,Fe,U,be,De,_e]}));let e=n;return e})();export{Oi as MembershipModule,Re as MembershipRoutingModule};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 5927,
          "_transferSize": 6586,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:20:11.466Z",
        "time": 53.71600005310029,
        "timings": {
          "blocked": 33.7140000153929,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.554000000000002,
          "wait": 18.379000046886503,
          "receive": 1.0689999908208847,
          "_blocked_queueing": 1.3780000153928995,
          "_blocked_proxy": 1.2080000000000002,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "500274",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/about-company.module-K5STSPFP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-GTB6573W.js",
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
              "value": "https://n958200.alteg.io/about-company.module-K5STSPFP.js"
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
          "headersSize": 1083,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5004"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e77beda278ca-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:11 GMT"
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
              "value": "W/\"68e51480-244c\""
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
              "value": "b63614fd80b99b369fb1652d3cad33f8"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 9292,
            "mimeType": "application/javascript",
            "compression": 6128,
            "text": "import{a as J,k as Q}from\"./chunk-TX67VJHB.js\";import{b as X}from\"./chunk-NZOI5B53.js\";import{Ab as F,Bb as B,C as j,Dc as I,Eb as D,Ei as q,Fc as K,ch as R,d as z,e as N,p as V,rc as A,ui as H,wi as G,yi as W}from\"./chunk-6FGVQ7PR.js\";import{Aa as P,Ac as T,Fb as c,Gb as d,Ka as O,La as w,Pc as U,Qc as $,Ua as M,Ub as u,Va as g,Wa as k,Wb as m,Xb as s,Yb as E,cb as L,ec as l,fc as p,gc as h,kc as C,oc as x,pc as _,yc as v,zb as b,zc as S}from\"./chunk-KO722YSM.js\";import{g as a}from\"./chunk-JV5WWF5Q.js\";function et(t,n){if(t&1){let e=C();l(0,\"div\",11),x(\"click\",function(){g(e);let o=_(4);return k(o.showMore())}),v(1),U(2,\"translate\"),l(3,\"div\",12),h(4,\"ui-kit-svg-icon\",13),p()()}t&2&&(c(),T(\" \",$(2,2,\"common.show_more\"),\" \"),c(3),s(\"name\",\"forward\"))}function nt(t,n){if(t&1){let e=C();l(0,\"div\",8)(1,\"div\")(2,\"a\",9),x(\"click\",function(){g(e);let o=_(3);return k(o.contactClicked(\"phone\"))}),l(3,\"span\"),v(4),p()()(),u(5,et,5,4,\"div\",10),p()}if(t&2){let e=n.$implicit,i=_(3);c(2),s(\"href\",e.url,b),c(),m(\"data-locator\",\"contact_link_info_value\"),c(),S(e.label),c(),s(\"ngIf\",i.canBeExpanded&&!i.isExpanded)}}function it(t,n){if(t&1&&(l(0,\"ui-kit-simple-cell\",3)(1,\"div\",4),h(2,\"ui-kit-svg-icon\",5),p(),l(3,\"div\",6),u(4,nt,6,4,\"div\",7),p()()),t&2){let e=_(2);m(\"data-locator\",\"contact_link_info_block\"),c(2),s(\"name\",\"contacts/phone-logo\")(\"setSvgSize\",!1),m(\"data-locator\",\"contact_link_info_icon_phone\"),c(2),s(\"ngForOf\",e.displayedPhoneContactLinksInfo)}}function ot(t,n){if(t&1){let e=C();l(0,\"ui-kit-simple-cell\",3)(1,\"div\",4),h(2,\"ui-kit-svg-icon\",5),p(),l(3,\"a\",14),x(\"click\",function(o){g(e);let r=_(2);return k(r.contactClicked(\"website\",o,r.siteContactLinkInfo.unsafeUrl))}),l(4,\"span\"),v(5),p()()()}if(t&2){let e=_(2);m(\"data-locator\",\"contact_link_info_block\"),c(2),s(\"name\",\"contacts/web-logo\")(\"setSvgSize\",!1),m(\"data-locator\",\"contact_link_info_icon_site\"),c(),s(\"href\",e.siteContactLinkInfo.url,b),c(),m(\"data-locator\",\"contact_link_info_value\"),c(),S(e.siteContactLinkInfo.label)}}function at(t,n){if(t&1){let e=C();l(0,\"a\",18),x(\"click\",function(o){let r=g(e).$implicit,f=_(3);return k(f.contactClicked(r.contactLinkType,o,r.unsafeUrl))}),h(1,\"ui-kit-svg-icon\",5),l(2,\"span\"),v(3),p()()}if(t&2){let e=n.$implicit;s(\"href\",e.url,b),m(\"data-locator\",\"contact_link_info_block\"),c(),s(\"name\",e.svgIconName)(\"setSvgSize\",!1),m(\"data-locator\",\"contact_link_info_icon_\"+e.iconLocatorPostfix),c(),E(\"display\",\"none\"),m(\"data-locator\",\"contact_link_info_value\"),c(),S(e.label)}}function ct(t,n){if(t&1&&(l(0,\"ui-kit-simple-cell\",15),h(1,\"div\",4),l(2,\"div\",16),u(3,at,4,9,\"a\",17),p()()),t&2){let e=_(2);c(3),s(\"ngForOf\",e.socialLinksInfo)}}function rt(t,n){if(t&1&&(l(0,\"div\"),u(1,it,5,5,\"ui-kit-simple-cell\",1)(2,ot,6,7,\"ui-kit-simple-cell\",1)(3,ct,4,1,\"ui-kit-simple-cell\",2),p()),t&2){let e=_();c(),s(\"ngIf\",e.displayedPhoneContactLinksInfo.length>0),c(),s(\"ngIf\",e.siteContactLinkInfo),c(),s(\"ngIf\",e.socialLinksInfo.length>0)}}var Lt=(()=>{let n=class n{constructor(i,o,r,f,Z){a(this,\"domSanitizer\");a(this,\"metrika\");a(this,\"trackingService\");a(this,\"storeSnapshotService\");a(this,\"bridgeService\");a(this,\"companyContacts\");a(this,\"contactClick\",new L);a(this,\"isNotEmpty\",!1);a(this,\"isExpanded\",!1);a(this,\"canBeExpanded\",!1);a(this,\"phoneContactLinksInfo\",[]);a(this,\"siteContactLinkInfo\");a(this,\"socialLinksInfo\",[]);this.domSanitizer=i,this.metrika=o,this.trackingService=r,this.storeSnapshotService=f,this.bridgeService=Z}get displayedPhoneContactLinksInfo(){return this.phoneContactLinksInfo.length>0&&!this.isExpanded?[this.phoneContactLinksInfo[0]]:this.phoneContactLinksInfo}ngOnChanges(i){i.companyContacts&&(this.phoneContactLinksInfo=st(this.companyContacts.phones,this.domSanitizer),this.canBeExpanded=this.phoneContactLinksInfo.length>1,this.siteContactLinkInfo=lt(this.companyContacts.site,this.domSanitizer),this.socialLinksInfo=pt(this.companyContacts.social,this.domSanitizer),this.isNotEmpty=this.phoneContactLinksInfo.length>0||!!this.siteContactLinkInfo||this.socialLinksInfo.length>0)}contactClicked(i,o,r){i===\"phone\"?this.metrika.reachGoal(\"phone_number_clicked\",{companyId:this.companyContacts.id,companyName:this.companyContacts.title}):[\"website\",\"vk\",\"whatsapp\",\"viber\",\"telegram\"].includes(i)&&this.trackingService.track({type:I.Action.click,element:{type:\"link\",name:\"about_company_\".concat(i,\"_link\")}}),this.contactClick.emit(i);let f=this.storeSnapshotService.selectSnapshot(H.widgetSettings.getWidgetUseExternalLinkHook);r&&f&&(o.preventDefault(),this.bridgeService.post(new G(W.open_external_link,{link:r})))}showMore(){this.trackingService.track({type:I.Action.click,element:{type:\"button\",name:\"about_company_contacts_expand_button\"}}),this.isExpanded=!0}};a(n,\"\\u0275fac\",function(o){return new(o||n)(d(j),d(X),d(K),d(R),d(q))}),a(n,\"\\u0275cmp\",O({type:n,selectors:[[\"app-company-contacts\"]],inputs:{companyContacts:\"companyContacts\"},outputs:{contactClick:\"contactClick\"},features:[M],decls:1,vars:1,consts:[[4,\"ngIf\"],[\"leftSizePx\",\"24px\",\"class\",\"contact-block\",4,\"ngIf\"],[\"leftSizePx\",\"24px\",\"class\",\"social-contact-block\",4,\"ngIf\"],[\"leftSizePx\",\"24px\",1,\"contact-block\"],[\"left\",\"\",1,\"icon-container\"],[3,\"name\",\"setSvgSize\"],[\"center\",\"\",1,\"phone-numbers\"],[\"class\",\"contact-link-text\",4,\"ngFor\",\"ngForOf\"],[1,\"contact-link-text\"],[\"target\",\"_self\",3,\"click\",\"href\"],[\"class\",\"expand-action\",3,\"click\",4,\"ngIf\"],[1,\"expand-action\",3,\"click\"],[1,\"expand-icon-container\"],[\"role\",\"button\",1,\"expand-icon\",3,\"name\"],[\"target\",\"_blank\",\"center\",\"\",1,\"contact-link-text\",3,\"click\",\"href\"],[\"leftSizePx\",\"24px\",1,\"social-contact-block\"],[\"center\",\"\",1,\"social-links\"],[\"target\",\"_blank\",\"class\",\"social-link\",3,\"href\",\"click\",4,\"ngFor\",\"ngForOf\"],[\"target\",\"_blank\",1,\"social-link\",3,\"click\",\"href\"]],template:function(o,r){o&1&&u(0,rt,4,3,\"div\",0),o&2&&s(\"ngIf\",r.isNotEmpty)},dependencies:[z,N,D,J,F],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--y-core-color-text-primary)}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}[_nghost-%COMP%]   .contact-block[_ngcontent-%COMP%]{padding:8px 0}[_nghost-%COMP%]   .phone-numbers[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;gap:12px}[_nghost-%COMP%]   .phone-numbers[_ngcontent-%COMP%]   .expand-action[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px;color:var(--y-core-color-text-secondary);cursor:pointer}[_nghost-%COMP%]   .phone-numbers[_ngcontent-%COMP%]   .expand-action[_ngcontent-%COMP%]   .expand-icon-container[_ngcontent-%COMP%]{width:24px;height:24px;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .phone-numbers[_ngcontent-%COMP%]   .expand-action[_ngcontent-%COMP%]   .expand-icon-container[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%]{color:var(--y-core-color-text-tertiary);transform:rotate(90deg)}[_nghost-%COMP%]   .contact-link-text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   .social-contact-block[_ngcontent-%COMP%]{padding:4px 0 8px}[_nghost-%COMP%]   .social-links[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px}[_nghost-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{width:56px;height:40px;border-radius:12px;background-color:var(--y-core-color-surface-primary-high);display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:24px;height:24px;display:flex;justify-content:center;align-items:center}'],changeDetection:0}));let t=n;return t})();function st(t,n){return t.map(e=>({label:e,url:n.bypassSecurityTrustUrl(\"tel:\".concat(e)),unsafeUrl:\"tel:\".concat(e)}))}function lt(t,n){if(!t)return;let e=mt(t);return{label:_t(e),unsafeUrl:e,url:n.bypassSecurityTrustUrl(e)}}function pt(t,n){var i;let e=[];if(t.whatsapp&&e.push({label:t.whatsapp,svgIconName:\"contacts/whats-app-logo\",iconLocatorPostfix:\"whatsapp\",contactLinkType:\"whatsapp\",url:n.bypassSecurityTrustUrl(\"https://wa.me/\".concat(t.whatsapp)),unsafeUrl:\"https://wa.me/\".concat(t.whatsapp)}),t.telegram){let{pathname:o}=Y(t.telegram),f=((i=o.split(\"/\").reverse().find(Boolean))!=null?i:\"\").replace(\"@\",\"\");e.push({label:f,svgIconName:\"contacts/telegram-logo\",iconLocatorPostfix:\"telegram\",contactLinkType:\"telegram\",url:n.bypassSecurityTrustUrl(\"https://t.me/\".concat(f)),unsafeUrl:\"https://t.me/\".concat(f)})}return t.viber&&e.push({label:t.viber,svgIconName:\"contacts/viber-logo\",iconLocatorPostfix:\"viber\",contactLinkType:\"viber\",url:n.bypassSecurityTrustUrl(\"viber://chat?number=\".concat(t.viber)),unsafeUrl:\"viber://chat?number=\".concat(t.viber)}),e}var y=\"://\";function mt(t){return t.includes(y)?t:\"http\".concat(y).concat(t)}function _t(t){let n=Y(t.includes(y)?t:\"http\".concat(y).concat(t));return\"\".concat(n.hostname).concat(n.pathname)}function Y(t){let[n,e]=t.split(y);t=e||n,[t]=t.split(\"#\"),[t]=t.split(\"?\");let i=t.indexOf(\"/\");if(i===-1)return{hostname:\"\",pathname:t};let o=t.slice(0,i),r=t.slice(i);return r===\"/\"?{hostname:o,pathname:\"\"}:{hostname:o,pathname:r}}var Ft=(()=>{let n=class n{};a(n,\"\\u0275fac\",function(o){return new(o||n)}),a(n,\"\\u0275mod\",w({type:n})),a(n,\"\\u0275inj\",P({imports:[V,A,Q,B]}));let t=n;return t})();export{Lt as a,Ft as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3164,
          "_transferSize": 3824,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:20:11.503Z",
        "time": 21.13800006918609,
        "timings": {
          "blocked": 2.974000052757561,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.42399999999999993,
          "wait": 16.93300004154444,
          "receive": 0.8069999748840928,
          "_blocked_queueing": 1.1230000527575612,
          "_blocked_proxy": 1.1909999999999998,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "496037",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/about-company.module-K5STSPFP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-BM6WCQQT.js",
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
              "value": "https://n958200.alteg.io/about-company.module-K5STSPFP.js"
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
          "headersSize": 1083,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5004"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e77bf9f4bcb1-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:11 GMT"
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
              "value": "W/\"68e51480-8f9\""
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
              "value": "e010f1de107a491cc217818f06bf87a9"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 2297,
            "mimeType": "application/javascript",
            "compression": 1199,
            "text": "import{a as C}from\"./chunk-6FGVQ7PR.js\";import{Aa as p,Ca as l,Ea as h,Gb as c,La as m,Ma as f,cb as y,db as _,oc as g,za as u}from\"./chunk-KO722YSM.js\";var d=class{constructor(t,s){this._document=s;let e=this._textarea=this._document.createElement(\"textarea\"),i=e.style;i.position=\"fixed\",i.top=i.opacity=\"0\",i.left=\"-999em\",e.setAttribute(\"aria-hidden\",\"true\"),e.value=t,e.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(e)}copy(){let t=this._textarea,s=!1;try{if(t){let e=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),s=this._document.execCommand(\"copy\"),e&&e.focus()}}catch{}return s}destroy(){let t=this._textarea;t&&(t.remove(),this._textarea=void 0)}},v=(()=>{let t=class t{constructor(e){this._document=e}copy(e){let i=this.beginCopy(e),o=i.copy();return i.destroy(),o}beginCopy(e){return new d(e,this._document)}};t.\\u0275fac=function(i){return new(i||t)(h(C))},t.\\u0275prov=u({token:t,factory:t.\\u0275fac,providedIn:\"root\"});let n=t;return n})(),x=new l(\"CDK_COPY_TO_CLIPBOARD_CONFIG\"),A=(()=>{let t=class t{constructor(e,i,o){this._clipboard=e,this._ngZone=i,this.text=\"\",this.attempts=1,this.copied=new y,this._pending=new Set,o&&o.attempts!=null&&(this.attempts=o.attempts)}copy(e=this.attempts){if(e>1){let i=e,o=this._clipboard.beginCopy(this.text);this._pending.add(o);let r=()=>{let a=o.copy();!a&&--i&&!this._destroyed?this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(r,1)):(this._currentTimeout=null,this._pending.delete(o),o.destroy(),this.copied.emit(a))};r()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(e=>e.destroy()),this._pending.clear(),this._destroyed=!0}};t.\\u0275fac=function(i){return new(i||t)(c(v),c(_),c(x,8))},t.\\u0275dir=f({type:t,selectors:[[\"\",\"cdkCopyToClipboard\",\"\"]],hostBindings:function(i,o){i&1&&g(\"click\",function(){return o.copy()})},inputs:{text:[0,\"cdkCopyToClipboard\",\"text\"],attempts:[0,\"cdkCopyToClipboardAttempts\",\"attempts\"]},outputs:{copied:\"cdkCopyToClipboardCopied\"},standalone:!0});let n=t;return n})(),F=(()=>{let t=class t{};t.\\u0275fac=function(i){return new(i||t)},t.\\u0275mod=m({type:t}),t.\\u0275inj=p({});let n=t;return n})();export{A as a,F as b};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 1098,
          "_transferSize": 1757,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:20:11.503Z",
        "time": 26.84499998576939,
        "timings": {
          "blocked": 9.72199995212257,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.32399999999999984,
          "wait": 15.865000023044646,
          "receive": 0.9340000106021762,
          "_blocked_queueing": 1.491999952122569,
          "_blocked_proxy": 1.529,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "497245",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-GXD5EZY5.js",
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
          "headersSize": 1075,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4216"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e77bff34bca3-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:11 GMT"
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
              "value": "W/\"68e51480-7b7b\""
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
              "value": "f558fbf88d453670949af58101a5e101"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 31611,
            "mimeType": "application/javascript",
            "compression": 22523,
            "text": "import{a as pt,b as lt}from\"./chunk-GTB6573W.js\";import{a as se,b as pe}from\"./chunk-BM6WCQQT.js\";import{k as ce}from\"./chunk-VDOE3YU6.js\";import{a as re}from\"./chunk-O4HV4GD6.js\";import{F as ie,l as ne}from\"./chunk-IGSDBEZN.js\";import{f as ct,h as st,j as te}from\"./chunk-TX67VJHB.js\";import{b as ae}from\"./chunk-NZOI5B53.js\";import{G as oe}from\"./chunk-IV3KQJLV.js\";import{Aa as Ut,Ab as et,Ba as jt,Bb as nt,Ce as Ht,Dc as Ft,Eb as ot,Fc as rt,Hf as Gt,Hg as Yt,Je as zt,K as Et,Mi as ee,N as Lt,P as tt,Sc as H,Tc as Nt,Wc as Vt,Wg as Zt,be as Kt,bg as Qt,bh as Jt,c as X,ch as Xt,d as Tt,de as $t,e as P,ff as qt,i as Dt,ig as Wt,p as N,rc as it,tc as V,uc as at,ui as Ct,vc as Rt,xa as At,zb as Bt}from\"./chunk-6FGVQ7PR.js\";import{Aa as j,Ac as S,Ea as gt,Fb as c,Gb as f,J as xt,Ka as y,Kc as F,La as B,Mc as Pt,N as ut,Pb as wt,Pc as A,Qc as U,T as kt,Ub as g,Uc as $,Va as b,Wa as x,Wb as _,Xb as s,Yb as Ot,Zb as R,aa as Q,c as q,cb as I,ec as d,fc as p,gc as D,h as yt,j as vt,jc as E,kc as k,oa as Mt,oc as u,pc as m,qa as W,qc as Z,r as G,rc as J,sc as It,xc as L,y as bt,yc as C,za as St,zb as Y,zc as K}from\"./chunk-KO722YSM.js\";import{g as i,i as O}from\"./chunk-JV5WWF5Q.js\";var he=()=>({cssClass:\"success\"});function ye(t,n){t&1&&E(0)}function ve(t,n){t&1&&E(0)}function be(t,n){t&1&&E(0)}function xe(t,n){if(t&1&&(d(0,\"div\",5),g(1,ye,1,0,\"ng-container\",6)(2,ve,1,0,\"ng-container\",6)(3,be,1,0,\"ng-container\",7),p()),t&2){m();let a=L(3),e=L(5),o=L(7);_(\"data-locator\",\"company_contact_info\"),c(),s(\"ngTemplateOutlet\",o),c(),s(\"ngTemplateOutlet\",a),c(),s(\"ngTemplateOutlet\",e)(\"ngTemplateOutletContext\",Pt(5,he))}}function ke(t,n){t&1&&E(0)}function Me(t,n){t&1&&E(0)}function Se(t,n){t&1&&E(0)}function we(t,n){if(t&1&&(d(0,\"app-substrate\",5),g(1,ke,1,0,\"ng-container\",6)(2,Me,1,0,\"ng-container\",6)(3,Se,1,0,\"ng-container\",6),p()),t&2){m();let a=L(3),e=L(5),o=L(9);_(\"data-locator\",\"company_contact_info\"),c(),s(\"ngTemplateOutlet\",o),c(),s(\"ngTemplateOutlet\",a),c(),s(\"ngTemplateOutlet\",e)}}function Oe(t,n){if(t&1&&D(0,\"ui-kit-static-map\",8),t&2){let a=n.cssClass,e=m();s(\"company\",e.company)(\"type\",e.mapType)(\"ngClass\",a)(\"openMapOnClick\",!0)}}function Ie(t,n){if(t&1){let a=k();d(0,\"app-company-contacts\",9),u(\"contactClick\",function(o){b(a);let r=m();return x(r.clickOnContactLink(o))}),p()}if(t&2){let a=n.cssClass,e=m();s(\"companyContacts\",e.company)(\"ngClass\",a)}}function Pe(t,n){if(t&1&&D(0,\"img\",15),t&2){let a=m(2);s(\"src\",a.company.logo,Y),_(\"data-locator\",\"branch_logo\")}}function Te(t,n){if(t&1){let a=k();d(0,\"div\",16)(1,\"div\",17),D(2,\"ui-kit-svg-icon\",18),p(),d(3,\"div\",19),C(4),p(),d(5,\"div\",20),u(\"cdkCopyToClipboardCopied\",function(){b(a);let o=m(2);return x(o.showAddress.emit())}),D(6,\"ui-kit-svg-icon\",18),p()()}if(t&2){let a=m(2);_(\"data-locator\",\"booking_info_salon_address\"),c(2),s(\"name\",\"contacts/location\"),c(2),S(\" \",a.address,\" \"),c(),s(\"cdkCopyToClipboard\",a.address),c(),s(\"name\",\"contacts/copy\"),_(\"data-locator\",\"booking_salon_address_copy\")}}function De(t,n){if(t&1&&(d(0,\"div\",10),g(1,Pe,1,2,\"img\",11),d(2,\"div\",12)(3,\"div\",13),C(4),p()()(),g(5,Te,7,6,\"div\",14)),t&2){let a=m();c(),s(\"ngIf\",a.company.logo),c(2),_(\"data-locator\",\"booking_info_salon_title\"),c(),S(\" \",a.company.title,\" \"),c(),s(\"ngIf\",a.address)}}function Ee(t,n){if(t&1&&(d(0,\"div\",25),C(1),p()),t&2){let a=m(2);_(\"data-locator\",\"booking_address\"),c(),S(\" \",a.address,\" \")}}function Le(t,n){if(t&1){let a=k();d(0,\"ui-kit-icon\",26),u(\"cdkCopyToClipboardCopied\",function(){b(a);let o=m(2);return x(o.showAddress.emit())}),p()}if(t&2){let a=m(2);s(\"cdkCopyToClipboard\",a.address),_(\"data-locator\",\"booking_salon_address_copy\")}}function Ae(t,n){if(t&1&&(d(0,\"div\",21)(1,\"div\",22)(2,\"div\",13),C(3),p(),g(4,Ee,2,2,\"div\",23),p(),g(5,Le,1,2,\"ui-kit-icon\",24),p()),t&2){let a=m();c(),R(\"crop-record-card-block\",a.address)(\"crop-successful-order-block\",!a.address),c(),_(\"data-locator\",\"salon_title\"),c(),S(\" \",a.company.title,\" \"),c(),s(\"ngIf\",a.address),c(),s(\"ngIf\",a.address)}}var pn=(()=>{let n=class n{constructor(){i(this,\"company\");i(this,\"headingType\",\"successOrder\");i(this,\"mapType\");i(this,\"showAddress\",new I);i(this,\"contactLink\",new I)}get address(){return this.company.address}clickOnContactLink(e){this.contactLink.emit(e)}};i(n,\"\\u0275fac\",function(o){return new(o||n)}),i(n,\"\\u0275cmp\",y({type:n,selectors:[[\"app-company-contact-info\"]],inputs:{company:\"company\",headingType:\"headingType\",mapType:\"mapType\"},outputs:{showAddress:\"showAddress\",contactLink:\"contactLink\"},decls:10,vars:2,consts:[[\"map\",\"\"],[\"contactLinks\",\"\"],[\"successfulOrderHeader\",\"\"],[\"recordCardHeader\",\"\"],[\"class\",\"company-contact-info\",4,\"ngIf\"],[1,\"company-contact-info\"],[4,\"ngTemplateOutlet\"],[4,\"ngTemplateOutlet\",\"ngTemplateOutletContext\"],[3,\"company\",\"type\",\"ngClass\",\"openMapOnClick\"],[1,\"company-contact-info__links\",3,\"contactClick\",\"companyContacts\",\"ngClass\"],[1,\"company-contact-info__heading\",\"success\"],[\"class\",\"company-contact-info__logo\",3,\"src\",4,\"ngIf\"],[1,\"company-contact-info__meta\",\"crop-successful-order-block\"],[1,\"company-contact-info__title\"],[\"class\",\"company-contact-info__address company-contact-info__address_order\",4,\"ngIf\"],[1,\"company-contact-info__logo\",3,\"src\"],[1,\"company-contact-info__address\",\"company-contact-info__address_order\"],[1,\"location-icon\"],[3,\"name\"],[1,\"address-text\"],[1,\"copy-icon\",3,\"cdkCopyToClipboardCopied\",\"cdkCopyToClipboard\"],[1,\"company-contact-info__heading\",\"stretch-to-width\"],[1,\"company-contact-info__meta\"],[\"class\",\"company-contact-info__address\",4,\"ngIf\"],[\"class\",\"company-contact-info__copy company-contact-info__copy_record\",\"name\",\"copy\",\"size\",\"32\",\"role\",\"button\",3,\"cdkCopyToClipboard\",\"cdkCopyToClipboardCopied\",4,\"ngIf\"],[1,\"company-contact-info__address\"],[\"name\",\"copy\",\"size\",\"32\",\"role\",\"button\",1,\"company-contact-info__copy\",\"company-contact-info__copy_record\",3,\"cdkCopyToClipboardCopied\",\"cdkCopyToClipboard\"]],template:function(o,r){o&1&&g(0,xe,4,6,\"div\",4)(1,we,4,4,\"app-substrate\",4)(2,Oe,1,4,\"ng-template\",null,0,$)(4,Ie,1,2,\"ng-template\",null,1,$)(6,De,6,4,\"ng-template\",null,2,$)(8,Ae,6,8,\"ng-template\",null,3,$),o&2&&(s(\"ngIf\",r.headingType===\"successOrder\"),c(),s(\"ngIf\",r.headingType===\"recordCard\"))},dependencies:[X,P,Dt,ne,se,pt,ot,st,te],styles:['@charset \"UTF-8\";.company-contact-info[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:0;display:flex;flex-direction:column;gap:8px}.company-contact-info__heading[_ngcontent-%COMP%]{display:flex;padding:0 24px 14px;position:relative}.company-contact-info__heading.success[_ngcontent-%COMP%]{padding:8px 0}.company-contact-info__logo[_ngcontent-%COMP%]{width:48px!important;height:48px!important;border-radius:12px}.company-contact-info__meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:12px;overflow:hidden;width:100%;justify-content:center;max-width:calc(100% - 48px)}.company-contact-info__title[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;margin-bottom:2px}.company-contact-info__address[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary);padding-top:2px;font-style:normal;font-weight:400;font-size:16px;line-height:24px}.company-contact-info__address_order[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);display:flex;flex-direction:row;align-items:center;gap:12px;padding:8px 0}.company-contact-info__address_order[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%]{width:24px;height:24px;display:flex;justify-content:center;align-items:center}.company-contact-info__address_order[_ngcontent-%COMP%]   .address-text[_ngcontent-%COMP%]{flex:1}.company-contact-info__address_order[_ngcontent-%COMP%]   .copy-icon[_ngcontent-%COMP%]{width:24px;height:24px;display:flex;justify-content:center;align-items:center;color:var(--y-core-color-text-secondary)}.company-contact-info__copy[_ngcontent-%COMP%]{font-size:32px;cursor:pointer;z-index:9}.company-contact-info__copy_record[_ngcontent-%COMP%]{margin-bottom:-8px;color:#228b22;font-size:32px}.company-contact-info__copy_order[_ngcontent-%COMP%]{margin-left:5px;font-size:22px}.company-contact-info__links[_ngcontent-%COMP%]:not(:empty){padding:16px 24px;display:flex;position:relative;flex-direction:column}.company-contact-info__links[_ngcontent-%COMP%]:not(:empty).success{padding:0}.company-contact-info[_ngcontent-%COMP%]   .stretch-to-width[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.company-contact-info[_ngcontent-%COMP%]   .stretch-to-width[_ngcontent-%COMP%]   .company-contact-info__meta[_ngcontent-%COMP%]{max-width:100%}.company-contact-info[_ngcontent-%COMP%]   .stretch-to-width[_ngcontent-%COMP%]   .crop-successful-order-block[_ngcontent-%COMP%]{margin-left:0}.company-contact-info[_ngcontent-%COMP%]   .stretch-to-width[_ngcontent-%COMP%]   .company-contact-info__copy[_ngcontent-%COMP%]{margin-bottom:6px}.company-contact-info[_ngcontent-%COMP%]   .crop-record-card-block[_ngcontent-%COMP%]{margin-left:0}'],changeDetection:0}));let t=n;return t})();var bn=(()=>{let n=class n{};i(n,\"\\u0275fac\",function(o){return new(o||n)}),i(n,\"\\u0275mod\",B({type:n})),i(n,\"\\u0275inj\",j({imports:[N,ie,pe,lt,it,st]}));let t=n;return t})();var dt=function(t){return t.button=\"button\",t.clickCompanyContacts=\"click_company_contacts\",t.expandCompanyContacts=\"expand_company_contacts\",t.buttonCompanyContacts=\"button_company_contacts\",t.buttonExpandCompanyContacts=\"button_expand_company_contacts\",t.buttonCompanyAddress=\"button_company_address\",t.copyAddressToClipboard=\"copy_address_to_clipboard\",t}(dt||{});var T=function(t){return t[t.danger=1]=\"danger\",t[t.crossInfo=2]=\"crossInfo\",t}(T||{});function Be(t,n){if(t&1&&(d(0,\"div\",9),C(1),p()),t&2){let a=m();_(\"data-locator\",a.subtitleDataLocator),c(),S(\" \",a.subtitle,\" \")}}function Re(t,n){if(t&1){let a=k();d(0,\"div\")(1,\"ui-kit-button\",10),u(\"click\",function(){let o=b(a).index,r=m();return x(r.buttonClick(o))}),C(2),p()()}if(t&2){let a=n.$implicit;c(),s(\"type\",a.buttonType),_(\"data-locator\",a.buttonDataLocator),c(),S(\" \",a.buttonLabel,\" \")}}var ht=(()=>{let n=class n extends Rt{constructor(o,r){super(o);i(this,\"modalService\");i(this,\"trackingService\");i(this,\"iconType\");i(this,\"title\");i(this,\"titleDataLocator\");i(this,\"subtitle\");i(this,\"subtitleDataLocator\");i(this,\"company\");i(this,\"buttonsInfo\");this.modalService=o,this.trackingService=r}get iconName(){return this.iconType===T.danger?\"order/danger\":\"order/cross\"}get colorCssClass(){return this.iconType===T.danger?\"red\":\"blue\"}buttonClick(o){this.close(o)}handleClick(o){this.trackingService.setPage(\"contact_with_admin\"),this.trackingService.track({type:Ft.Action.click,name:dt.clickCompanyContacts,part_type:o,element:{type:\"button\",name:dt.buttonCompanyContacts}})}};i(n,\"\\u0275fac\",function(r){return new(r||n)(f(at),f(rt))}),i(n,\"\\u0275cmp\",y({type:n,selectors:[[\"ng-component\"]],inputs:{iconType:\"iconType\",title:\"title\",titleDataLocator:\"titleDataLocator\",subtitle:\"subtitle\",subtitleDataLocator:\"subtitleDataLocator\",company:\"company\",buttonsInfo:\"buttonsInfo\"},standalone:!0,features:[wt,F],decls:10,vars:8,consts:[[1,\"modal-body\"],[1,\"icon-container\",3,\"ngClass\"],[3,\"name\",\"setSvgSize\"],[1,\"text-block\"],[1,\"title\"],[\"class\",\"subtitle\",4,\"ngIf\"],[3,\"contactClick\",\"companyContacts\"],[1,\"modal-footer\"],[4,\"ngFor\",\"ngForOf\"],[1,\"subtitle\"],[3,\"click\",\"type\"]],template:function(r,l){r&1&&(d(0,\"div\",0)(1,\"div\",1),D(2,\"ui-kit-svg-icon\",2),p(),d(3,\"div\",3)(4,\"div\",4),C(5),p(),g(6,Be,2,2,\"div\",5),p(),d(7,\"app-company-contacts\",6),u(\"contactClick\",function(h){return l.handleClick(h)}),p()(),d(8,\"div\",7),g(9,Re,3,3,\"div\",8),p()),r&2&&(c(),s(\"ngClass\",l.colorCssClass),c(),s(\"name\",l.iconName)(\"setSvgSize\",!1),c(2),_(\"data-locator\",l.titleDataLocator),c(),S(\" \",l.title,\" \"),c(),s(\"ngIf\",l.subtitle),c(),s(\"companyContacts\",l.company),c(2),s(\"ngForOf\",l.buttonsInfo))},dependencies:[P,Tt,X,it,ot,Vt,Nt,lt,pt],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;padding:0 16px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}[_nghost-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:64px;height:64px;display:flex;justify-content:center;align-items:center;border-radius:100px;align-self:center}[_nghost-%COMP%]   .icon-container.red[_ngcontent-%COMP%]{color:var(--y-core-color-calm-icon-red);background-color:var(--y-core-color-calm-surface-red-low)}[_nghost-%COMP%]   .icon-container.blue[_ngcontent-%COMP%]{background-color:var(--y-core-color-calm-surface-blue-low);color:var(--y-core-color-calm-icon-blue)}[_nghost-%COMP%]   .text-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;color:var(--y-core-color-text-primary)!important;text-align:center}[_nghost-%COMP%]   .text-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px}[_nghost-%COMP%]   .text-block[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px}[_nghost-%COMP%]   .modal-footer[_ngcontent-%COMP%]{padding:16px 0;display:flex;flex-direction:column;gap:12px}'],changeDetection:0}));let t=n;return t})();function Fe(t,n){if(t&1&&(d(0,\"span\"),C(1),p()),t&2){let a=m();c(),K(a.title)}}function Ne(t,n){if(t&1&&(d(0,\"a\",2),C(1),p()),t&2){let a=m();s(\"href\",a.link,Y)(\"target\",a.target),c(),K(a.title)}}var mt=(()=>{let n=class n{constructor(){i(this,\"link\",null);i(this,\"title\");i(this,\"target\",\"_blank\");i(this,\"redColor\",!1)}};i(n,\"\\u0275fac\",function(o){return new(o||n)}),i(n,\"\\u0275cmp\",y({type:n,selectors:[[\"ui-kit-actionsheet-item\"]],hostVars:2,hostBindings:function(o,r){o&2&&R(\"red-color\",r.redColor)},inputs:{link:\"link\",title:\"title\",target:\"target\",redColor:\"redColor\"},standalone:!0,features:[F],decls:2,vars:2,consts:[[4,\"ngIf\"],[3,\"href\",\"target\",4,\"ngIf\"],[3,\"href\",\"target\"]],template:function(o,r){o&1&&g(0,Fe,2,1,\"span\",0)(1,Ne,2,3,\"a\",1),o&2&&(s(\"ngIf\",!r.link),c(),s(\"ngIf\",r.link))},dependencies:[P],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{cursor:pointer;display:block;line-height:50px;text-align:center;background-color:var(--y-core-color-surface-primary);color:var(--y-core-color-text-primary);width:100%;border-bottom:1px solid var(--widget-ui-kit-color-grey-main)}[_nghost-%COMP%]:last-child{margin-bottom:0;border:none}.red-color[_nghost-%COMP%]{color:#ff8080}[_nghost-%COMP%]   span[_ngcontent-%COMP%], [_nghost-%COMP%]   a[_ngcontent-%COMP%]{size:18px;font-weight:400}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{display:block;width:100%;height:100%;text-decoration:none;color:var(--y-core-color-text-primary)}'],changeDetection:0}));let t=n;return t})();var $e=[\"*\"],_t=(()=>{let n=class n{constructor(e){i(this,\"bodyScrollLockService\");i(this,\"showedChange\",new I);i(this,\"whenFullyClosed\",new I);i(this,\"isShowed\",!1);i(this,\"dirty\",!1);i(this,\"fullyClosed\",!0);this.bodyScrollLockService=e}set showed(e){this.isShowed=e,this.dirty=!0,e&&(this.fullyClosed=!1,this.bodyScrollLockService.lock())}close(){this.showed=!1,this.showedChange.emit(!1),this.bodyScrollLockService.unlock()}ngOnDestroy(){this.bodyScrollLockService.unlock()}onAnimateEnd(){this.isShowed||(this.fullyClosed=!0,this.whenFullyClosed.emit())}get isDirty(){return this.dirty}get showedIsTrue(){return this.isShowed}get isDisplayed(){return this.fullyClosed?\"0\":\"100%\"}get isVisible(){return this.fullyClosed?\"hidden\":\"visible\"}onClick(){this.close()}};i(n,\"\\u0275fac\",function(o){return new(o||n)(f(re))}),i(n,\"\\u0275cmp\",y({type:n,selectors:[[\"ui-kit-actionsheet\"]],hostVars:8,hostBindings:function(o,r){o&1&&u(\"transitionend\",function(){return r.onAnimateEnd()})(\"webkitTransitionEnd\",function(){return r.onAnimateEnd()})(\"msTransitionEnd\",function(){return r.onAnimateEnd()})(\"oTransitionEnd\",function(){return r.onAnimateEnd()})(\"click\",function(){return r.onClick()}),o&2&&(Ot(\"height\",r.isDisplayed)(\"visibility\",r.isVisible),R(\"dirty\",r.isDirty)(\"showed\",r.showedIsTrue))},inputs:{showed:\"showed\"},outputs:{showedChange:\"showedChange\",whenFullyClosed:\"whenFullyClosed\"},standalone:!0,features:[F],ngContentSelectors:$e,decls:6,vars:4,consts:[[1,\"action-sheet\"],[1,\"actions\"],[1,\"close\"],[3,\"click\",\"title\"]],template:function(o,r){o&1&&(Z(),d(0,\"div\",0)(1,\"div\",1),J(2),p(),d(3,\"div\",2)(4,\"ui-kit-actionsheet-item\",3),A(5,\"translate\"),u(\"click\",function(){return r.close()}),p()()()),o&2&&(c(4),It(\"title\",U(5,2,\"Close\")),_(\"data-locator\",\"close_options_btn\"))},dependencies:[nt,et,mt],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;background-color:#0009;width:100%;opacity:0;will-change:opacity;z-index:10000}[_nghost-%COMP%]   .action-sheet[_ngcontent-%COMP%]{will-change:transform;display:block;position:fixed;margin:0 10px 10px;bottom:0;background-color:transparent;width:calc(100% - 20px);transform:translate3d(0,100%,0)}.dirty[_nghost-%COMP%]{opacity:0;transition:opacity .3s ease-in}.dirty[_nghost-%COMP%]   .action-sheet[_ngcontent-%COMP%]{transform:translate3d(0,100%,0);transition:transform .3s ease-in}.dirty.showed[_nghost-%COMP%]{opacity:1;transition:opacity .3s ease-in}.dirty.showed[_nghost-%COMP%]   .action-sheet[_ngcontent-%COMP%]{transition:transform .3s ease-in;transform:translateZ(0)}.actions[_ngcontent-%COMP%]{border-radius:10px;overflow:hidden}.close[_ngcontent-%COMP%]{margin-top:10px;border-radius:10px;overflow:hidden}.close[_ngcontent-%COMP%]   ui-kit-actionsheet-item[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary)}@media (min-width: 430px){[_nghost-%COMP%]   .action-sheet[_ngcontent-%COMP%]{max-width:392px;left:50%;top:50%;right:auto;bottom:auto;transform:translate3d(-50%,-50%,0);opacity:1}.dirty[_nghost-%COMP%]   .action-sheet[_ngcontent-%COMP%]{transform:translate3d(-50%,100%,0);transition:transform .3s ease-in}.dirty.showed[_nghost-%COMP%]   .action-sheet[_ngcontent-%COMP%]{transform:translate3d(-50%,-50%,0)}}'],changeDetection:0}));let t=n;return t})();function qe(t,n){if(t&1){let a=k();d(0,\"ui-kit-actionsheet-item\",4),A(1,\"translate\"),u(\"click\",function(){b(a);let o=m();return x(o.calendarClick())}),p()}if(t&2){let a=m();s(\"title\",U(1,3,a.calendarTitle))(\"link\",a.googleCalendarLink),_(\"data-locator\",\"add_to_google_cal_btn\")}}function Ge(t,n){if(t&1){let a=k();d(0,\"ui-kit-actionsheet-item\",5),A(1,\"translate\"),u(\"click\",function(){b(a);let o=m();return x(o.tryMoveRecord())}),p()}t&2&&(s(\"title\",U(1,2,\"record.change_record_time\")),_(\"data-locator\",\"reschedule_booking_btn\"))}function Qe(t,n){if(t&1){let a=k();d(0,\"ui-kit-actionsheet-item\",5),A(1,\"translate\"),u(\"click\",function(){b(a);let o=m();return x(o.tryToCopyRecord())}),p()}t&2&&(s(\"title\",U(1,2,\"header.booking_again\")),_(\"data-locator\",\"book_again_btn\"))}function We(t,n){if(t&1){let a=k();d(0,\"ui-kit-actionsheet-item\",6),A(1,\"translate\"),u(\"click\",function(){b(a);let o=m();return x(o.openSomeCancelRecordModal())}),p()}t&2&&(s(\"title\",U(1,3,\"record.cancel_record\"))(\"redColor\",!0),_(\"data-locator\",\"cancel_booking_btn\"))}var z=function(t){return t.record=\"record\",t.button=\"button\",t.createNotification=\"create_notification\",t.buttonCreateNotification=\"button_create_notification\",t.repeatRecord=\"repeat_record\",t.buttonRepeatRecord=\"button_repeat_record\",t}(z||{}),ko=(()=>{let n=class n{constructor(e,o,r,l,M,h,v,ft,le,de,me,_e,fe){i(this,\"store\");i(this,\"actions$\");i(this,\"router\");i(this,\"route\");i(this,\"calendarService\");i(this,\"metrikaService\");i(this,\"trackingService\");i(this,\"servicesService\");i(this,\"mastersService\");i(this,\"orderManager\");i(this,\"pricePipe\");i(this,\"modalService\");i(this,\"translateService\");i(this,\"isOpen\",!1);i(this,\"ignoreCalendar\",!1);i(this,\"ignoreBookingAgain\",!1);i(this,\"isOpenChange\",new I);i(this,\"buttonType\",H);i(this,\"recordItem\");i(this,\"googleCalendarLink\");i(this,\"isRecordDeleted$\");i(this,\"isRecordDeleted\",new yt);i(this,\"availableServices\");i(this,\"destroy$\",new vt(1));this.store=e,this.actions$=o,this.router=r,this.route=l,this.calendarService=M,this.metrikaService=h,this.trackingService=v,this.servicesService=ft,this.mastersService=le,this.orderManager=de,this.pricePipe=me,this.modalService=_e,this.translateService=fe}set record(e){e&&(this.recordItem=e,this.googleCalendarLink=this.calendarService.generateUrl({services:e.services,company:e.company,price:this.pricePipe.transform(e.services,e.company),staff:e.staff,time:{datetime:e.datetime,seance_length:e.length},recordId:e.id.toString()}))}get calendarTitle(){return\"record.add_to_google_calendar\"}get recordDate(){return this.recordItem?Jt.getRecordDate(this.recordItem):new Date(NaN)}get isNonCancelledOrExpiredRecord(){var e;return!((e=this.recordItem)!=null&&e.deleted)&&!Qt(this.recordDate)}get canMoveRecord(){var e;return this.isNonCancelledOrExpiredRecord&&((e=this.recordItem)==null?void 0:e.activity_id)===0&&this.recordItem.allow_change_record}ngOnInit(){this.isRecordDeleted$=this.isRecordDeleted.asObservable()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}moveRecord(){return O(this,null,function*(){yield this.setCurrentCompanyByRecord(this.recordItem),yield this.orderManager.moveRecord(this.recordItem,this.route.snapshot.params.recordHash)})}calendarClick(){this.trackingService.buttonClick(z.createNotification,z.buttonCreateNotification),this.metrikaService.reachGoal(\"google_calendar_button_clicked\")}tryMoveRecord(){let e=this.orderManager.getOrderMoveInfo(this.recordItem);e.canMove?this.moveRecord():this.modalService.openModal({component:ht,componentData:{iconType:T.danger,title:this.translateService.instant(\"record.rescheduling_unavailable\"),titleDataLocator:\"popup_title\",subtitle:e.description,subtitleDataLocator:\"popup_subtitle\",company:this.recordItem.company,buttonsInfo:[{buttonType:H.tertiary,buttonLabel:this.translateService.instant(\"Close\")}]},params:{modalType:V.default,dataLocator:\"change_impossible_booking_popup\"}})}showedChange(e){this.isOpenChange.emit(e)}openSomeCancelRecordModal(){return O(this,null,function*(){let e=this.orderManager.getOrderCancelInfo(this.recordItem),o=[{buttonType:H.tertiary,buttonLabel:this.translateService.instant(\"Close\"),buttonDataLocator:\"close_cancel_booking_btn\"}];e.canCancel&&o.unshift({buttonType:H.primary,buttonLabel:this.translateService.instant(\"record.cancel_record\"),buttonDataLocator:\"cancel_booking_btn\"});let l=yield this.modalService.openModal({component:ht,componentData:{title:e.canCancel?this.translateService.instant(\"record.cancel_record\")+\"?\":this.translateService.instant(\"record.cancellation_unavailable\"),titleDataLocator:e.canCancel?void 0:\"popup_title\",subtitle:e.description,subtitleDataLocator:e.canCancel?\"cancel_booking_popup_text\":\"popup_subtitle\",iconType:e.canCancel?T.crossInfo:T.danger,company:this.recordItem.company,buttonsInfo:o},params:{modalType:V.default,dataLocator:e.canCancel?\"cancel_booking_popup\":\"change_impossible_booking_popup\"}}).instance.result.catch(q);e.canCancel&&l===0&&(this.store.dispatch(new qt(this.recordItem,this.route.snapshot.params.recordHash)),this.isRecordDeleted.next(!0))})}tryToCopyRecord(){this.sendClickMakeRecordAgainEvent();let e=this.recordItem.services;this.metrikaService.reachGoal(\"last_appointment_repeat_pressed\",{company_id:this.recordItem.company.id,company_name:this.recordItem.company.title,staff_id:this.recordItem.staff.id,staff_name:this.recordItem.staff.name,service_id:this.recordItem.services[0].id,service_name:this.recordItem.services.map(o=>o.title).join(\",\")}),bt([this.servicesService.getServicesDictByParams(this.recordItem.company.id,[],this.recordItem.staff.id).pipe(ut(()=>G({services:[],categories:[]}))),this.mastersService.getMasters(this.recordItem.company.id,this.store.selectSnapshot(Ct.bookform.getIsPlatformRequestScenariosFeatureEnabled)).pipe(ut(()=>G([])))]).pipe(Q(),W(this.destroy$)).subscribe(([{services:o},r])=>{this.store.dispatch(new Gt(r));let l=!!r.find(h=>parseInt(h.id)===this.recordItem.staff.id&&h.is_bookable);this.availableServices=e.filter(h=>!!o.find(v=>v.id===h.id));let M=e.filter(h=>!o.find(v=>v.id===h.id));l?!this.availableServices.length||!l?this.showAllServicesUnavailableDialog(M):this.availableServices.length!==e.length?this.showSomeServicesUnavailableDialog(M):this.copyRecord():this.showStaffUnavailableDialog()})}sendClickMakeRecordAgainEvent(){this.trackingService.buttonClick(z.repeatRecord,z.buttonRepeatRecord)}copyRecord(){return O(this,null,function*(){yield this.setCurrentCompanyByRecord(this.recordItem);let e=this.availableServices.map(o=>o.id);yield this.orderManager.repeatRecord(this.recordItem.filterServices(e))})}setCurrentCompanyByRecord(e){return O(this,null,function*(){yield this.store.select(Ct.currentCompany.getCurrentCompanyId).pipe(Q(),Mt(o=>{var l;return o===e.company.id?G(null):(this.store.dispatch(new $t((l=e==null?void 0:e.company)==null?void 0:l.id)),this.actions$.pipe(jt(Kt),Q(),W(this.destroy$)))}),W(this.destroy$)).toPromise()})}showStaffUnavailableDialog(){return O(this,null,function*(){var e,o;this.modalService.openModal({component:ct,componentData:{title:this.translateService.instant(\"header.booking_again\"),text:\"\".concat(this.translateService.instant(\"record.cant_make_an_appointment\"),\" \").concat((o=(e=this.recordItem)==null?void 0:e.staff)==null?void 0:o.name),cancelButtonText:this.translateService.instant(\"button.confirm\"),titleDataLocator:\"popup_title\",textDataLocator:\"popup_text\",cancelDataLocator:\"apply_btn\"},params:{modalType:V.default,dataLocator:\"repeat_impossible_booking_popup_staff_unavailable\"}})})}showAllServicesUnavailableDialog(e){return O(this,null,function*(){var l;(yield this.modalService.openModal({component:ct,componentData:{title:this.translateService.instant(\"header.booking_again\"),text:this.getUnavailableServicesMessage(e,(l=this.recordItem)==null?void 0:l.services),confirmButtonText:this.translateService.instant(\"service.changeService\"),cancelButtonText:this.translateService.instant(\"button.canceling\"),textDataLocator:\"popup_text\",confirmDataLocator:\"other_service_btn\",cancelDataLocator:\"cancel_btn\"},params:{modalType:V.default,dataLocator:\"repeat_impossible_booking_popup_other_services\"}}).instance.result.catch(q))&&this.router.navigate([ee(this.recordItem.company.id)],{queryParamsHandling:\"preserve\"})})}showSomeServicesUnavailableDialog(e){return O(this,null,function*(){var l;(yield this.modalService.openModal({component:ct,componentData:{title:this.translateService.instant(\"header.booking_again\"),text:this.getUnavailableServicesMessage(e,(l=this.recordItem)==null?void 0:l.services),confirmButtonText:this.translateService.instant(\"confirm.confirm\"),cancelButtonText:this.translateService.instant(\"button.canceling\"),textDataLocator:\"popup_text\",confirmDataLocator:\"booking_btn\",cancelDataLocator:\"cancel_btn\"},params:{modalType:V.default,dataLocator:\"repeat_impossible_booking_popup_second_service\"}}).instance.result.catch(q))&&this.copyRecord()})}getUnavailableServicesMessage(e,o){if((e==null?void 0:e.length)===(o==null?void 0:o.length)){let r=this.translateService.instant(\"service.unavailable_service\"),l=this.translateService.instant(\"service.unavailable_services\");return(e==null?void 0:e.length)===1&&(o==null?void 0:o.length)===1?\"\\n        \".concat(r,\"\\n      \"):\"\".concat(l)}if(e&&o){let r=e.map(v=>\"\\xAB\".concat(v.title,\"\\xBB\")).join(\", \"),l=o.filter(v=>!e.some(ft=>ft.id===v.id)).map(v=>\"\\xAB\".concat(v.title,\"\\xBB\")).join(\", \"),M=this.translateService.instant(\"for\"),h=this.translateService.instant(\"service.unavailable_services_booking\");return\"\\n        \".concat(M,\" \").concat(r,\" \").concat(h,\" \").concat(l,\"?\\n      \")}}};i(n,\"\\u0275fac\",function(o){return new(o||n)(f(Xt),f(Ut),f(tt),f(Lt),f(ce),f(ae),f(rt),f(Zt),f(Wt),f(oe),f(Yt),f(at),f(Bt))}),i(n,\"\\u0275cmp\",y({type:n,selectors:[[\"app-record-settings-action-sheet\"]],inputs:{isOpen:\"isOpen\",ignoreCalendar:\"ignoreCalendar\",ignoreBookingAgain:\"ignoreBookingAgain\",record:\"record\"},outputs:{isOpenChange:\"isOpenChange\"},decls:5,vars:5,consts:[[3,\"showedChange\",\"showed\"],[3,\"title\",\"link\",\"click\",4,\"ngIf\"],[3,\"title\",\"click\",4,\"ngIf\"],[3,\"title\",\"redColor\",\"click\",4,\"ngIf\"],[3,\"click\",\"title\",\"link\"],[3,\"click\",\"title\"],[3,\"click\",\"title\",\"redColor\"]],template:function(o,r){o&1&&(d(0,\"ui-kit-actionsheet\",0),u(\"showedChange\",function(M){return r.showedChange(M)}),g(1,qe,2,5,\"ui-kit-actionsheet-item\",1)(2,Ge,2,4,\"ui-kit-actionsheet-item\",2)(3,Qe,2,4,\"ui-kit-actionsheet-item\",2)(4,We,2,5,\"ui-kit-actionsheet-item\",3),p()),o&2&&(s(\"showed\",r.isOpen),c(),s(\"ngIf\",!r.ignoreCalendar&&r.isNonCancelledOrExpiredRecord),c(),s(\"ngIf\",r.canMoveRecord),c(),s(\"ngIf\",!r.ignoreBookingAgain),c(),s(\"ngIf\",r.isNonCancelledOrExpiredRecord))},dependencies:[P,mt,_t,et],styles:['@charset \"UTF-8\";.staff-unavailable[_ngcontent-%COMP%]{display:block;padding:16px;white-space:pre-line}.staff-unavailable[_ngcontent-%COMP%]   .warning-message[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:40px}.staff-unavailable[_ngcontent-%COMP%]   .decline-button[_ngcontent-%COMP%]{margin-top:8px;display:block}']}));let t=n;return t})();var Lo=(()=>{let n=class n{};i(n,\"\\u0275fac\",function(o){return new(o||n)}),i(n,\"\\u0275mod\",B({type:n})),i(n,\"\\u0275inj\",j({imports:[N,nt,_t]}));let t=n;return t})();var Ye=[[[\"\",\"paymentTag\",\"\"]]],Ze=[\"[paymentTag]\"],jo=(()=>{let n=class n{constructor(){i(this,\"title\");i(this,\"dataLocatorTitle\");i(this,\"bottomBorderVisible\",!0)}};i(n,\"\\u0275fac\",function(o){return new(o||n)}),i(n,\"\\u0275cmp\",y({type:n,selectors:[[\"app-services-header\"]],inputs:{title:\"title\",dataLocatorTitle:\"dataLocatorTitle\",bottomBorderVisible:\"bottomBorderVisible\"},ngContentSelectors:Ze,decls:4,vars:2,consts:[[1,\"title__container\"],[1,\"title\"]],template:function(o,r){o&1&&(Z(Ye),d(0,\"div\",0)(1,\"div\",1),C(2),p(),J(3),p()),o&2&&(_(\"data-locator\",r.dataLocatorTitle),c(2),K(r.title))},styles:['@charset \"UTF-8\";.title__container[_ngcontent-%COMP%]{padding:8px 0;display:flex;align-items:center}.title[_ngcontent-%COMP%]{display:inline;font-style:normal;font-weight:700;font-size:20px;line-height:24px;color:var(--y-core-color-text-primary);padding-right:8px}.payment-tag[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}']}));let t=n;return t})();var Ko=(()=>{let n=class n{};i(n,\"\\u0275fac\",function(o){return new(o||n)}),i(n,\"\\u0275mod\",B({type:n})),i(n,\"\\u0275inj\",j({imports:[N]}));let t=n;return t})();var Wo=(()=>{let n=class n{constructor(e,o){i(this,\"store\");i(this,\"router\");this.store=e,this.router=o}canDeactivate(){return this.router.events.pipe(xt(e=>e instanceof Et),kt(1)).subscribe(()=>{this.store.dispatch(new Ht),this.store.dispatch(new zt)}),!0}};i(n,\"\\u0275fac\",function(o){return new(o||n)(gt(At),gt(tt))}),i(n,\"\\u0275prov\",St({token:n,factory:n.\\u0275fac,providedIn:\"root\"}));let t=n;return t})();var Je=function(t){return t.button=\"button\",t.master=\"master\",t.record=\"record\",t.service=\"service\",t.approved=\"approved\",t.unapproved=\"unapproved\",t.recordInfo=\"record_info\",t.pastRecord=\"past_record\",t.masterInfo=\"master_info\",t.moveRecord=\"move_record\",t.payRecord=\"pay_record\",t.makeReview=\"make_review\",t.futureRecord=\"future_record\",t.cancelRecord=\"cancel_record\",t.clickService=\"click_service\",t.buttonMakeReview=\"button_make_review\",t.buttonMoveRecord=\"button_move_record\",t.buttonPay=\"button_pay\",t.createNotification=\"create_notification\",t.buttonCancelRecord=\"button_cancel_record\",t.cancelRecordConfirm=\"cancel_record_confirm\",t.buttonCompanyAddress=\"button_company_address\",t.copyAddressToClipboard=\"copy_address_to_clipboard\",t.buttonCreateNotification=\"button_create_notification\",t.buttonCancelRecordConfirm=\"button_cancel_record_confirm\",t}(Je||{});export{dt as a,pn as b,bn as c,T as d,ht as e,ko as f,Lo as g,jo as h,Ko as i,Je as j,Wo as k};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 9088,
          "_transferSize": 9748,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:20:11.507Z",
        "time": 25.328999967314303,
        "timings": {
          "blocked": 7.163999994665384,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.34499999999999975,
          "wait": 17.034000041253865,
          "receive": 0.7859999313950539,
          "_blocked_queueing": 0.6719999946653843,
          "_blocked_proxy": 5.994,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "495727",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
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
          "headersSize": 1075,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4216"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e77c0bcebca5-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:11 GMT"
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
        "startedDateTime": "2025-10-08T10:20:11.508Z",
        "time": 32.115999958477914,
        "timings": {
          "blocked": 12.829999920092524,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.35999999999999943,
          "wait": 16.33900001388043,
          "receive": 2.5870000245049596,
          "_blocked_queueing": 1.074999920092523,
          "_blocked_proxy": 6.974,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "500274",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/record.route-5EXYOL7Y.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
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
          "headersSize": 1075,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4986"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e77c0daf78ca-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:11 GMT"
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
        "startedDateTime": "2025-10-08T10:20:11.508Z",
        "time": 38.09799998998642,
        "timings": {
          "blocked": 17.140000005580482,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3570000000000011,
          "wait": 18.871999973878264,
          "receive": 1.7290000105276704,
          "_blocked_queueing": 1.3920000055804849,
          "_blocked_proxy": 6.778,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "496037",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/loyalty-CDDSAH3B.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-FD4HDYNO.js",
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
              "value": "https://n958200.alteg.io/loyalty-CDDSAH3B.js"
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
          "headersSize": 1070,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "996"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e77c1a03bcb1-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:11 GMT"
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
              "value": "W/\"68e51480-834f\""
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
              "value": "d020720481a1a7298dd9e9bd8f1fc791"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 33615,
            "mimeType": "application/javascript",
            "compression": 23339,
            "text": "import{a as le,b as ce}from\"./chunk-BM6WCQQT.js\";import{a as ie,k as oe}from\"./chunk-TX67VJHB.js\";import{b as ee}from\"./chunk-TXASR5LU.js\";import{c as se,e as ae}from\"./chunk-HNFBT5P4.js\";import{G as ne,H as re}from\"./chunk-IV3KQJLV.js\";import{Aa as jt,Ab as N,Ba as Kt,Bb as Rt,Dc as Ct,Eb as dt,Fc as qt,Hg as te,Kb as Qt,S as _t,Tc as Xt,Wc as Gt,d as at,e as L,j as lt,nd as Zt,p as Wt,qf as Yt,rc as pt,rf as Jt,ui as W,xa as ct,zb as zt}from\"./chunk-6FGVQ7PR.js\";import{$b as Ft,Aa as ot,Ac as b,Dc as Vt,E as P,Ea as gt,Ec as Ut,Fa as K,Fb as l,Fc as Bt,Gb as Q,I as R,Ka as g,Kc as q,La as nt,Ma as Lt,Na as rt,Pc as y,Qc as C,R as Mt,Sc as Nt,Ua as Dt,Ub as f,Va as T,Wa as M,Wb as h,Xb as u,Yb as $t,Zb as Y,_b as At,aa as Ot,cb as x,ec as p,fc as d,gc as O,h as j,hb as st,j as Pt,kc as $,na as Z,oc as S,pc as m,qa as D,qc as V,r as Tt,rc as E,tc as J,uc as tt,vc as U,wc as B,x as F,y as G,yc as _,za as Et,zc as H}from\"./chunk-KO722YSM.js\";import{a as Ht}from\"./chunk-POJFEGQU.js\";import{a as kt,g as n,i as It}from\"./chunk-JV5WWF5Q.js\";function be(o,i){if(o&1&&O(0,\"ui-kit-avatar\",5),o&2){let c=m();u(\"size\",\"48px\")(\"round\",!0)(\"url\",c.companyLogo)}}function ke(o,i){if(o&1){let c=$();p(0,\"p\",6),S(\"cdkCopyToClipboardCopied\",function(){T(c);let e=m();return M(e.cdkCopyToClipboardCopied.emit())}),_(1),d()}if(o&2){let c=m();u(\"cdkCopyToClipboard\",c.cardId.toString()),h(\"data-locator\",\"description_card_id\"),l(),b(\" \",c.cardId,\" \")}}function Ie(o,i){o&1&&O(0,\"ui-kit-svg-icon\",7),o&2&&(u(\"name\",\"snowflake\"),h(\"data-locator\",\"icon_frozen\"))}var ut=(()=>{let i=class i{constructor(){n(this,\"companyLogo\");n(this,\"cardId\");n(this,\"title\");n(this,\"frozen\");n(this,\"cdkCopyToClipboardCopied\",new x)}};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275cmp\",g({type:i,selectors:[[\"ui-kit-loyalty-card\"]],hostVars:2,hostBindings:function(e,r){e&2&&Y(\"has-logo\",r.companyLogo)},inputs:{companyLogo:\"companyLogo\",cardId:\"cardId\",title:\"title\",frozen:\"frozen\"},outputs:{cdkCopyToClipboardCopied:\"cdkCopyToClipboardCopied\"},standalone:!0,features:[q],decls:6,vars:5,consts:[[\"class\",\"logo\",\"data-locator\",\"branch_logo\",3,\"size\",\"round\",\"url\",4,\"ngIf\"],[1,\"description\"],[\"class\",\"description__card-id\",3,\"cdkCopyToClipboard\",\"cdkCopyToClipboardCopied\",4,\"ngIf\"],[1,\"description__title\"],[\"class\",\"icon_frozen\",3,\"name\",4,\"ngIf\"],[\"data-locator\",\"branch_logo\",1,\"logo\",3,\"size\",\"round\",\"url\"],[1,\"description__card-id\",3,\"cdkCopyToClipboardCopied\",\"cdkCopyToClipboard\"],[1,\"icon_frozen\",3,\"name\"]],template:function(e,r){e&1&&(f(0,be,1,3,\"ui-kit-avatar\",0),p(1,\"div\",1),f(2,ke,2,3,\"p\",2),p(3,\"p\",3),_(4),d()(),f(5,Ie,1,2,\"ui-kit-svg-icon\",4)),e&2&&(u(\"ngIf\",r.companyLogo),l(2),u(\"ngIf\",r.cardId),l(),h(\"data-locator\",\"description_title\"),l(),H(r.title),l(),u(\"ngIf\",r.frozen))},dependencies:[L,pt,dt,ee,ce,le],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:end;position:relative;background:linear-gradient(180deg,var(--y-core-color-surface-accent),var(--y-core-color-surface-accent-high));box-shadow:0 16px 32px 0 var(--y-core-color-shadow-accent);margin:0 auto;height:51vw;width:100%;max-width:100%;max-height:220px;border-radius:16px;padding:16px}[_nghost-%COMP%]:after{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;border-radius:16px;pointer-events:none}@media (min-width: 430px){[_nghost-%COMP%]{max-width:366px}}.has-logo[_nghost-%COMP%]{justify-content:space-between}[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;border-radius:50%}[_nghost-%COMP%]   .description__card-id[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis;color:var(--y-core-color-text-on-accent);margin-bottom:4px;word-break:break-all;width:fit-content}[_nghost-%COMP%]   .description__title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;color:var(--y-core-color-text-on-accent)}[_nghost-%COMP%]   .icon_frozen[_ngcontent-%COMP%]{color:var(--y-core-color-icon-on-accent);font-size:24px;position:absolute;top:16px;right:16px}'],changeDetection:0}));let o=i;return o})();var vt={discount_static:{subtitle:\"static\"},cashback_static_paid:{subtitle:\"cashback\"},cashback_static_sold:{subtitle:\"cashback\"},cashback_accumulative_paid:{subtitle:\"accumulative\",valueDescription:\"accumulated\"},cashback_accumulative_sold:{subtitle:\"accumulative\",valueDescription:\"accumulated\"},discount_accumulative_visits:{subtitle:\"visits\",valueDescription:\"sale\"},discount_accumulative_paid:{subtitle:\"accumulative_paid\",valueDescription:\"sale\"},discount_accumulative_sold:{subtitle:\"accumulative_paid\",valueDescription:\"sale\"},cashback_paid_visits:{subtitle:\"paid_visits\"},cashback_sold_visits:{subtitle:\"paid_visits\"},cashback_accumulative_paid_visits:{subtitle:\"accumulative_visits\",valueDescription:\"accumulated\"},cashback_accumulative_sold_visits:{subtitle:\"accumulative_visits\",valueDescription:\"accumulated\"},package_discount:{subtitle:\"discount_on_service\",valueDescription:\"collected\"}};var mt=(()=>{let i=class i{constructor(t){n(this,\"translate\");this.translate=t}transform(t,e,r){var s;return(s=vt[t])!=null&&s[e]?this.translate.transform(\"loyalty.promotions.\".concat(vt[t][e]),{value:r}):null}};n(i,\"\\u0275fac\",function(e){return new(e||i)(Q(N,16))}),n(i,\"\\u0275pipe\",rt({name:\"loyaltyProgramTranslate\",type:i,pure:!0}));let o=i;return o})();function Me(o,i){if(o&1&&(p(0,\"div\",6),_(1),d()),o&2){let c=m();h(\"data-locator\",\"promotion_subtitle\"),l(),b(\" \",c.subtitle,\" \")}}function Oe(o,i){if(o&1&&(p(0,\"p\",7),_(1),d()),o&2){let c=m();h(\"data-locator\",\"promotion_value\"),l(),b(\" \",c.value,\" \")}}function Ee(o,i){if(o&1&&(p(0,\"p\",8),_(1),d()),o&2){let c=m();h(\"data-locator\",\"promotion_value_description\"),l(),b(\" \",c.valueDescription,\" \")}}var de=(()=>{let i=class i{constructor(){n(this,\"title\");n(this,\"value\");n(this,\"subtitle\");n(this,\"valueDescription\")}};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275cmp\",g({type:i,selectors:[[\"ui-kit-promotion-card\"]],inputs:{title:\"title\",value:\"value\",subtitle:\"subtitle\",valueDescription:\"valueDescription\"},standalone:!0,features:[q],decls:8,vars:5,consts:[[\"center\",\"\"],[1,\"primary\",\"primary__title\",\"pb-2\"],[\"class\",\"secondary secondary__title\",4,\"ngIf\"],[\"right\",\"\"],[\"class\",\"primary primary__value pb-2\",4,\"ngIf\"],[\"class\",\"secondary secondary__value\",4,\"ngIf\"],[1,\"secondary\",\"secondary__title\"],[1,\"primary\",\"primary__value\",\"pb-2\"],[1,\"secondary\",\"secondary__value\"]],template:function(e,r){e&1&&(p(0,\"ui-kit-simple-cell\")(1,\"div\",0)(2,\"p\",1),_(3),d(),f(4,Me,2,2,\"div\",2),d(),p(5,\"div\",3),f(6,Oe,2,2,\"p\",4)(7,Ee,2,2,\"p\",5),d()()),e&2&&(l(2),h(\"data-locator\",\"promotion_title\"),l(),b(\" \",r.title,\" \"),l(),u(\"ngIf\",r.subtitle),l(2),u(\"ngIf\",r.value),l(),u(\"ngIf\",r.valueDescription))},dependencies:[L,oe,ie],styles:['@charset \"UTF-8\";.primary[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);overflow-wrap:anywhere}.primary__value[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;display:flex;justify-content:flex-end}.primary__title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px}.secondary[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary)}.secondary__value[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px;display:flex;justify-content:flex-end}.secondary__title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px}.pb-2[_ngcontent-%COMP%]{padding-bottom:2px}'],changeDetection:0}));let o=i;return o})();var pe=(()=>{let i=class i{constructor(t){n(this,\"translate\");this.translate=t}transform(t,e,r){if(t!=null)return typeof e==\"number\"?\"\".concat(t,\" \").concat(this.translate.transform(\"out-of\"),\" \").concat(e):\"\".concat(t,\" \").concat(e===\"percent\"?\"%\":r)}};n(i,\"\\u0275fac\",function(e){return new(e||i)(Q(N,16))}),n(i,\"\\u0275pipe\",rt({name:\"loyaltyProgramValue\",type:i,pure:!0}));let o=i;return o})();function $e(o,i){if(o&1&&(p(0,\"div\",8),O(1,\"ui-kit-promotion-card\",9),y(2,\"loyaltyProgramValue\"),d()),o&2){let c=i.$implicit,t=m(2);l(),u(\"title\",c.title)(\"subtitle\",t.getPromotionSubtitle(c))(\"value\",Nt(2,4,t.getPromotionCurrentValue(c),t.getPromotionUnit(c),t.currencyShortTitle))(\"valueDescription\",t.getPromotionValueDescription(c))}}function Ae(o,i){if(o&1&&(p(0,\"div\",5)(1,\"h2\",6),_(2),y(3,\"translate\"),d(),f(4,$e,3,8,\"div\",7),d()),o&2){let c=m();l(2),H(C(3,2,\"loyalty.program\")),l(2),u(\"ngForOf\",c.card.programs)}}var me=(()=>{let i=class i{constructor(t){n(this,\"loyaltyProgramTranslate\");n(this,\"card\");n(this,\"currencyShortTitle\");this.loyaltyProgramTranslate=t}get cardBalance(){var t;return te.getLocalizedPrice((t=this.card)==null?void 0:t.balance,this.currencyShortTitle,!0)}canValueShowed(t){return![\"cashback_paid_visits\",\"cashback_sold_visits\"].some(e=>e===t)}getPromotionCurrentValue(t){if(this.canValueShowed(t.type))return t.type===\"package_discount\"?t.current_package_progress:t.value}getPromotionUnit(t){return t.type===\"package_discount\"?t.sold_items_multiplicity:t.value_unit}getPromotionPackagesValue(t){return t.type===\"package_discount\"?t.sold_items_multiplicity+1:null}getPromotionSubtitle(t){return this.loyaltyProgramTranslate.transform(t.type,\"subtitle\",this.getPromotionPackagesValue(t))}getPromotionValueDescription(t){return this.loyaltyProgramTranslate.transform(t.type,\"valueDescription\")}};n(i,\"\\u0275fac\",function(e){return new(e||i)(Q(mt))}),n(i,\"\\u0275cmp\",g({type:i,selectors:[[\"app-loyalty-info-card\"]],inputs:{card:\"card\",currencyShortTitle:\"currencyShortTitle\"},decls:10,vars:12,consts:[[1,\"info\"],[1,\"info__header\"],[1,\"info__value\"],[1,\"info__status\"],[\"class\",\"promotions__wrapper\",4,\"ngIf\"],[1,\"promotions__wrapper\"],[1,\"promotions__header\"],[\"class\",\"promotion\",4,\"ngFor\",\"ngForOf\"],[1,\"promotion\"],[3,\"title\",\"subtitle\",\"value\",\"valueDescription\"]],template:function(e,r){e&1&&(p(0,\"div\",0)(1,\"h2\",1),_(2),y(3,\"translate\"),d(),p(4,\"div\",2),_(5),d(),p(6,\"div\",3),_(7),y(8,\"translate\"),d(),f(9,Ae,5,4,\"div\",4),d()),e&2&&(h(\"data-locator\",\"card_info_block\"),l(),h(\"data-locator\",\"card_info_header\"),l(),H(C(3,8,\"loyalty.about\")),l(2),h(\"data-locator\",\"card_info_value\"),l(),H(r.cardBalance),l(),h(\"data-locator\",\"card_info_status\"),l(),b(\" \",C(8,10,\"loyalty.balance_1\"),\" \"),l(2),u(\"ngIf\",(r.card==null?null:r.card.programs.length)>0))},dependencies:[at,L,de,N,pe],styles:['@charset \"UTF-8\";.card[_ngcontent-%COMP%]{margin-left:8px;width:calc(100% - 16px)}.info[_ngcontent-%COMP%]{overflow-x:scroll!important;transform:translateZ(0);scrollbar-color:rgba(0,0,0,0) transparent;scrollbar-width:thin;transition:scrollbar-color .2s ease-out}.info[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb{background-color:#0003}.info[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#0000004d}.info[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}.info[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{transition:background-color 2s ease-out;border-radius:6px}.info[_ngcontent-%COMP%]:hover{scrollbar-color:rgba(0,0,0,.2) transparent}.info__header[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:700;font-size:20px;line-height:24px}.info__status[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:4px}.info__value[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:500;font-size:16px;line-height:24px;margin-top:16px}.promotions__wrapper[_ngcontent-%COMP%]{padding-top:40px}.promotions__wrapper[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%]{padding:8px 0}.promotions__header[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:700;font-size:20px;line-height:24px;padding-bottom:8px}'],changeDetection:0}));let o=i;return o})();var Fe=[[[\"\",\"cardSlide\",\"\"]],[[\"\",\"cardInfo\",\"\"]]],Ve=[\"[cardSlide]\",\"[cardInfo]\"],k=function(o){return o.first=\"first\",o.afterFirst=\"after-first\",o.preLast=\"pre-last\",o.last=\"last\",o.single=\"single\",o}(k||{}),et=(()=>{let i=class i{constructor(){n(this,\"position\",null);n(this,\"isActive\",!1)}get singleClass(){return this.position===k.single}get wrapClass(){return this.position===null?\"card-wrap\":\"card-wrap card-wrap_\".concat(this.position)}};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275cmp\",g({type:i,selectors:[[\"app-loyalty-slide\"]],hostVars:2,hostBindings:function(e,r){e&2&&Y(\"single\",r.singleClass)},inputs:{position:\"position\",isActive:\"isActive\"},ngContentSelectors:Ve,decls:5,vars:6,consts:[[1,\"card\"],[1,\"card-info\"]],template:function(e,r){e&1&&(V(Fe),p(0,\"div\")(1,\"div\",0),E(2),d(),p(3,\"div\",1),E(4,1),d()()),e&2&&(Ft(r.wrapClass),Y(\"card-wrap_active\",r.isActive),h(\"data-locator\",\"abonement_block\"))},styles:[\"app-loyalty-slide{width:85%;max-width:100%}app-loyalty-slide .card{gap:16px}app-loyalty-slide .card-info{overflow-x:hidden;overflow-y:auto;display:block;margin-top:48px;margin-left:calc(-.5*(100vw - 100%) + 24px);width:calc(100vw - 48px);padding-bottom:24px;scrollbar-width:none;-ms-overflow-style:none}app-loyalty-slide .card-info::-webkit-scrollbar{background:transparent;width:0px}app-loyalty-slide.single{width:100%}app-loyalty-slide .card-wrap{height:100%;display:flex;flex-direction:column}app-loyalty-slide .card-wrap .card{opacity:.4;transform:scale(.9);transition:all .3s ease-in-out;transform-origin:center;flex-shrink:0}app-loyalty-slide .card-wrap .card ui-kit-loyalty-card .ui-kit-loyalty-card{transition:all .3s ease-in-out;opacity:0}app-loyalty-slide .card-wrap .card-info{opacity:0;transition:opacity .3s ease-in-out}app-loyalty-slide .card-wrap_active .card{transform:scale(1);opacity:1}app-loyalty-slide .card-wrap_active .card-info{opacity:1}app-loyalty-slide .card-wrap_single{width:100%;padding:0 24px}app-loyalty-slide .card-wrap_single .card-info.card-info{margin-left:0}@media (min-width: 600px){app-loyalty-slide{width:400px}app-loyalty-slide .card-wrap_active .card-info{margin-left:-76px;width:552px}}app-loyalty-slide .card-wrap ui-kit-loyalty-card .description{transition:opacity .3s ease-in-out;opacity:0}app-loyalty-slide .card-wrap_active ui-kit-loyalty-card .description{opacity:1}\\n\"],encapsulation:2}));let o=i;return o})();var ht=function(o){return o[o.percent=0]=\"percent\",o[o.pixel=1]=\"pixel\",o}(ht||{}),he=(()=>{let i=class i{constructor(){n(this,\"uiKitTouchSlideWidthUnit\",ht.percent);n(this,\"uiKitTouchSlideWidth\",100)}get width(){let t;switch(this.uiKitTouchSlideWidthUnit){case ht.percent:t=\"%\";break;case ht.pixel:t=\"px\"}return\"\".concat(this.uiKitTouchSlideWidth).concat(t)}};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275dir\",Lt({type:i,selectors:[[\"\",\"uiKitTouchSlide\",\"\"]],hostVars:2,hostBindings:function(e,r){e&2&&$t(\"width\",r.width)},inputs:{uiKitTouchSlideWidthUnit:\"uiKitTouchSlideWidthUnit\",uiKitTouchSlideWidth:\"uiKitTouchSlideWidth\"},standalone:!0}));let o=i;return o})();var Be=[\"container\"],Ne=[\"track\"],We=[\"*\"],fe=o=>{let c=o.type.includes(\"touch\")?o.touches[0]:o;return[c.clientX,c.clientY]},ft=(()=>{let i=class i{constructor(){n(this,\"thresholdRatio\",.5);n(this,\"animationTime\",.3);n(this,\"slideIndex\",0);n(this,\"move\",new x);n(this,\"slideIndexChange\",new x);n(this,\"scrollLocked\",new x);n(this,\"slideInProgress\",new x);n(this,\"slideSwiped\",new x);n(this,\"container\");n(this,\"trackElem\");n(this,\"slides\");n(this,\"slideWidth\",0);n(this,\"slidesCount\",0);n(this,\"isAllowSwipe\",!0);n(this,\"isAllowClick\",!0);n(this,\"isScroll\",!1);n(this,\"isSwipe\",!1);n(this,\"x\",0);n(this,\"y\",0);n(this,\"destroy$\",new j);n(this,\"swipeEnd$\",new j)}ngAfterContentChecked(){this.recalculateSlides()}ngOnChanges(t){if(t.slideIndex){let{currentValue:e,previousValue:r}=t.slideIndex;if(e!==r&&this.slides){this.setSlideIndex(this.slideIndex);let a=typeof r>\"u\";this.slide(!a)}}}ngAfterContentInit(){this.initEventHandlers(),this.setSlideIndex(this.slideIndex),this.slide(!1)}ngOnDestroy(){this.destroy$.next()}slideTo(t=0,e=!0){this.setSlideIndex(t),this.setCSSTransition({isClear:!e}),this.slide(e)}slidePrev(){this.slideTo(this.slideIndex-1)}slideNext(){this.slideTo(this.slideIndex+1)}replaceSlides(t){this.slides=t,this.initSlidesClickEvent(),this.recalculateSlides()}initEventHandlers(){let t=this.trackElem.nativeElement,e=this.container.nativeElement;P(t,\"click\",{capture:!0}).subscribe(r=>{this.isAllowClick||r.stopPropagation()}),R(P(e,\"touchstart\"),P(e,\"mousedown\")).pipe(D(this.destroy$)).subscribe(r=>this.onSwipeStart(r)),P(window,\"resize\").pipe(D(this.destroy$),Mt(500)).subscribe(()=>{this.slides&&this.slides.length&&(this.slideWidth=this.slides.first.nativeElement.offsetWidth,this.slide(!0))}),this.initSlidesClickEvent()}initSlidesClickEvent(){this.slides.changes.pipe(Z(this.slides),D(this.destroy$)).subscribe(t=>{t.forEach((e,r)=>{P(e.nativeElement,\"click\").pipe(D(this.slides.changes)).subscribe(()=>{this.slideTo(r)})})})}recalculateSlides(){let t,e;this.container&&this.slides&&this.slides.first&&(t=this.slides.first.nativeElement.offsetWidth,e=this.slides.length);let s=t!==this.slideWidth,a=e!==this.slidesCount;(s||a)&&(this.slideWidth=t,this.slidesCount=e,this.setSlideIndex(this.slideIndex),this.setCSSTransition(),this.slide(!1))}moveTrack(t=0){let e=this.trackElem.nativeElement;e.style.transform=\"translate3d(\".concat(t,\"px, 0px, 0px)\"),this.move.emit(t),setTimeout(()=>this.slideInProgress.next(!1),this.animationTime)}slide(t){this.setCSSTransition({isClear:!t});let e=this.container.nativeElement.clientWidth,r=this.slideWidth===this.container.nativeElement.clientWidth,s=this.slideIndex===0,a=this.slideIndex===this.slidesCount-1,v=!s&&!a,I=e-this.slideWidth,A=()=>{if(r)return-this.slideIndex*this.slideWidth;if(s)return I/2;if(v)return-this.slideIndex*this.slideWidth+I/2;if(a)return-this.slideIndex*this.slideWidth+I/2};this.moveTrack(A())}setCSSTransition(t){let e=t&&t.isClear,r=this.trackElem.nativeElement;r.style.transition=e?\"\":\"transform \".concat(this.animationTime,\"s\")}onSwipeStart(t){let[e,r]=fe(t),s=()=>{let a={isClear:!0};this.setCSSTransition(a)};this.isAllowSwipe&&(this.x=e,this.y=r,s(),R(P(document,\"touchmove\"),P(document,\"mousemove\")).pipe(D(R(this.destroy$,this.swipeEnd$))).subscribe(a=>this.onSwipe(a,r,e)),R(P(document,\"touchend\"),P(document,\"mouseup\")).pipe(D(R(this.destroy$,this.swipeEnd$))).subscribe(()=>this.onSwipeEnd(e)))}onSwipe(t,e,r){let[s,a]=fe(t),v=this.getCSSTranslateX(),I=this.isSwipe||this.isScroll,A=X=>{this.moveTrack(X)},yt=this.x-s;if(this.x=s,this.y=a,I||(Math.abs(r-s)>14&&(this.scrollLocked.emit(!0),this.isSwipe=!0,this.isScroll=!1),Math.abs(e-a)>7&&(this.isScroll=!0,this.isSwipe=!1,this.isAllowSwipe=!1)),this.isSwipe){this.slideInProgress.next(!0);let X=this.slideIndex===0,it=Math.round(this.container.nativeElement.offsetWidth/this.slideWidth),z=this.slides.length-it,xe=this.slideIndex===z,St=r<this.x,wt=r>this.x,Se=-z*this.slideWidth;if(X)if(St){if(v>=0){this.isAllowSwipe=!1;return}}else this.isAllowSwipe=!0;if(xe)if(wt){let bt=(this.slidesCount-1)*this.slideWidth;if(v>=bt){A(bt),this.isAllowSwipe=!1;return}}else this.isAllowSwipe=!0;if(wt&&v<=Se||St&&v>=0){this.onSwipeEnd(r),this.isAllowSwipe=!0;return}A(v-yt)}}onSwipeEnd(t){let e=()=>{this.slide(!0)},r=t-this.x;if(this.isScroll=!1,this.isSwipe=!1,this.swipeEnd$.next(),this.scrollLocked.emit(!1),this.isAllowSwipe){let s=this.slideWidth*this.thresholdRatio,a=Math.abs(r)>s,v=t<this.x,I=t>this.x,A=t!==this.x,yt=this.slideIndex===0,X=this.slideIndex===this.slides.length-1,it=Math.ceil(Math.abs(r)/this.slideWidth);if(a){if(v&&!yt){let z=this.slideIndex-it;this.slideSwiped.emit(\"previous\"),this.setSlideIndex(z)}else if(I&&!X){let z=this.slideIndex+it;this.slideSwiped.emit(\"next\"),this.setSlideIndex(z)}}A&&(this.isAllowClick=!1,setTimeout(()=>this.isAllowClick=!0,100),e())}this.isAllowSwipe=!0}getCSSTranslateX(){let r=this.trackElem.nativeElement.style.transform.match(/([-0-9.]+(?=px))/);return r===null?0:Number(r[0])}setSlideIndex(t){if(!this.slides)return;let e=this.slides.length-1,r=t<0,s=t>e,a=r?0:s?e:t;this.slideIndex=a,this.slideIndexChange.emit(a)}};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275cmp\",g({type:i,selectors:[[\"ui-kit-touch-slider\"]],contentQueries:function(e,r,s){if(e&1&&J(s,he,4,st),e&2){let a;U(a=B())&&(r.slides=a)}},viewQuery:function(e,r){if(e&1&&(tt(Be,7),tt(Ne,7)),e&2){let s;U(s=B())&&(r.container=s.first),U(s=B())&&(r.trackElem=s.first)}},inputs:{thresholdRatio:\"thresholdRatio\",animationTime:\"animationTime\",slideIndex:\"slideIndex\"},outputs:{move:\"move\",slideIndexChange:\"slideIndexChange\",scrollLocked:\"scrollLocked\",slideInProgress:\"slideInProgress\",slideSwiped:\"slideSwiped\"},standalone:!0,features:[Dt,q],ngContentSelectors:We,decls:5,vars:0,consts:[[\"container\",\"\"],[\"track\",\"\"],[1,\"ui-touch-slider\"],[1,\"ui-touch-slider__track\"]],template:function(e,r){e&1&&(V(),p(0,\"div\",2,0)(2,\"div\",3,1),E(4),d()())},styles:[\"[_nghost-%COMP%]{display:block;width:100%;height:100%}.ui-touch-slider[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;touch-action:pan-y;cursor:grab}.ui-touch-slider__track[_ngcontent-%COMP%]{display:flex;transform:translateZ(0);will-change:transform;width:100%;height:100%}.ui-touch-slider__track[_ngcontent-%COMP%] >*{flex-shrink:0}.ui-touch-slider__track[_ngcontent-%COMP%]  *{-webkit-user-select:none;user-select:none}\"],changeDetection:0}));let o=i;return o})();var Ke=[\"*\"];function ze(o,i){if(o&1){let c=$();p(0,\"div\",3),S(\"click\",function(){T(c);let e=m();return M(e.slidePrev())}),O(1,\"ui-kit-svg-icon\",4),d()}o&2&&(l(),u(\"name\",\"forward\"))}function Re(o,i){if(o&1){let c=$();p(0,\"div\",5),S(\"click\",function(){T(c);let e=m();return M(e.slideNext())}),O(1,\"ui-kit-svg-icon\",4),d()}o&2&&(l(),u(\"name\",\"forward\"))}var ye=(()=>{let i=class i{constructor(){n(this,\"slideChanges$\",new j);n(this,\"slider\");n(this,\"slidesElems\");n(this,\"slides\");n(this,\"currentSlideIndex\",new x);n(this,\"currentSlideSwitched\",new x);n(this,\"activeSlideIndex\",0);n(this,\"activeSlide$\",new j);n(this,\"isNextSlideActive$\");n(this,\"isPrevSlideActive$\",this.initIsPrevSlideActive());n(this,\"isSlideInProgress\",new j)}ngAfterViewInit(){this.slider.replaceSlides(this.slidesElems),this.updateCardClasses(),this.isNextSlideActive$=this.initIsNextSlideActive(),this.currentSlideIndex.emit(this.activeSlideIndex)}initIsPrevSlideActive(){return this.activeSlide$.pipe(F(t=>t!==0))}initIsNextSlideActive(){return G([this.activeSlide$.pipe(Z(this.activeSlideIndex)),this.slideChanges$.pipe(Z(this.slides))]).pipe(F(([t,e])=>t<e.length-1))}updateCardClasses(){this.slides.forEach((t,e,r)=>{let s=this.activeSlideIndex===0,a=this.activeSlideIndex===r.length-1,v=r.length===3,I=r.length===2,A=r.length===1;switch(e){case 0:A?t.position=k.single:I&&a?t.position=k.preLast:s?t.position=k.first:t.position=null;break;case 1:s?t.position=k.afterFirst:I&&a?t.position=k.last:v&&a?t.position=k.preLast:t.position=null;break;case r.length-2:t.position=a?k.preLast:null;break;case r.length-1:t.position=a?k.last:null;break}})}onSlideChange(t){this.activeSlide$.next(t),this.currentSlideIndex.emit(t),this.updateCardClasses(),this.slides&&this.slides.length&&this.slides.forEach((e,r)=>e.isActive=r===t)}onSlideInProgress(t){this.isSlideInProgress.next(t)}slidePrev(){this.currentSlideSwitched.emit({type:\"click\",direction:\"previous\"}),this.slider.slidePrev()}slideNext(){this.currentSlideSwitched.emit({type:\"click\",direction:\"next\"}),this.slider.slideNext()}slideSwiped(t){this.currentSlideSwitched.emit({type:\"swipe\",direction:t})}};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275cmp\",g({type:i,selectors:[[\"app-loyalty-slider\"]],contentQueries:function(e,r,s){if(e&1&&(J(s,et,4,st),J(s,et,4)),e&2){let a;U(a=B())&&(r.slidesElems=a),U(a=B())&&(r.slides=a)}},viewQuery:function(e,r){if(e&1&&tt(ft,5),e&2){let s;U(s=B())&&(r.slider=s.first)}},outputs:{currentSlideIndex:\"currentSlideIndex\",currentSlideSwitched:\"currentSlideSwitched\"},ngContentSelectors:Ke,decls:6,vars:8,consts:[[\"class\",\"slider-nav-button slider-nav-button_left\",3,\"click\",4,\"ngIf\"],[\"class\",\"slider-nav-button slider-nav-button_right\",3,\"click\",4,\"ngIf\"],[1,\"touch-slider\",3,\"slideIndexChange\",\"slideInProgress\",\"slideSwiped\",\"thresholdRatio\",\"slideIndex\"],[1,\"slider-nav-button\",\"slider-nav-button_left\",3,\"click\"],[\"role\",\"button\",1,\"slider-nav-button__icon\",3,\"name\"],[1,\"slider-nav-button\",\"slider-nav-button_right\",3,\"click\"]],template:function(e,r){e&1&&(V(),f(0,ze,2,1,\"div\",0),y(1,\"async\"),f(2,Re,2,1,\"div\",1),y(3,\"async\"),p(4,\"ui-kit-touch-slider\",2),Bt(\"slideIndexChange\",function(a){return Ut(r.activeSlideIndex,a)||(r.activeSlideIndex=a),a}),S(\"slideInProgress\",function(a){return r.onSlideInProgress(a)})(\"slideIndexChange\",function(a){return r.onSlideChange(a)})(\"slideSwiped\",function(a){return r.slideSwiped(a)}),E(5),d()),e&2&&(u(\"ngIf\",C(1,4,r.isPrevSlideActive$)),l(2),u(\"ngIf\",C(3,6,r.isNextSlideActive$)),l(2),u(\"thresholdRatio\",.15),Vt(\"slideIndex\",r.activeSlideIndex))},dependencies:[L,ft,dt,lt],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{position:relative;display:block}.touch-slider[_ngcontent-%COMP%]{max-width:600px}.slider-nav-button[_ngcontent-%COMP%]{position:absolute;top:75px;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:var(--y-core-color-surface-secondary-fill);color:var(--y-core-color-icon-primary);z-index:1;cursor:pointer}.slider-nav-button_left[_ngcontent-%COMP%]{left:8px}.slider-nav-button_left[_ngcontent-%COMP%]   .slider-nav-button__icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.slider-nav-button_right[_ngcontent-%COMP%]{right:8px}.slider-nav-button__icon[_ngcontent-%COMP%]{width:16px;height:16px}'],changeDetection:0}));let o=i;return o})();var qe=[\"*\",[[\"\",\"footer\",\"\"]]],Xe=[\"*\",\"[footer]\"],ge=(()=>{let i=class i{constructor(){n(this,\"backClick\",new x);n(this,\"layoutStyles\",Ht.isNativePlatform()?{paddingTop:\"0px\"}:{})}};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275cmp\",g({type:i,selectors:[[\"app-loyalty-layout\"]],outputs:{backClick:\"backClick\"},ngContentSelectors:Xe,decls:6,vars:4,consts:[[1,\"layout\"],[\"theme\",\"primary\",3,\"backClick\",\"isTitleChevronArrow\",\"isContentHidden\"],[1,\"content\"],[1,\"footer\"]],template:function(e,r){e&1&&(V(qe),p(0,\"div\",0)(1,\"app-header\",1),S(\"backClick\",function(){return r.backClick.emit()}),d(),p(2,\"div\",2),E(3),d(),p(4,\"div\",3),E(5,1),d()()),e&2&&(At(r.layoutStyles),l(),u(\"isTitleChevronArrow\",!0)(\"isContentHidden\",!0))},dependencies:[se],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;height:100%;max-height:100%;background-color:var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:var(--y-core-color-surface-primary);padding-top:var(--safe-area-top);padding-bottom:var(--safe-area-bottom);max-width:600px;margin:0 auto}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{min-height:56px;display:flex;align-items:center}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{position:fixed;max-width:600px;bottom:0;width:100%;display:flex;justify-content:center;padding:0 24px 24px;align-self:flex-end}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]:empty{display:none}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;flex-grow:3;min-height:0;height:100%;padding-top:12px;padding-bottom:100px}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:empty{display:none}[_nghost-%COMP%]   .button-back[_ngcontent-%COMP%]{display:block;box-sizing:content-box;width:24px;height:24px;padding:8px;margin-left:8px;cursor:pointer}'],changeDetection:0}));let o=i;return o})();function Ze(o,i){if(o&1){let c=$();p(0,\"app-loyalty-slide\")(1,\"ui-kit-loyalty-card\",6),y(2,\"async\"),S(\"cdkCopyToClipboardCopied\",function(){T(c);let e=m(2);return M(e.onCopyNumber())}),d(),O(3,\"app-loyalty-info-card\",7),y(4,\"async\"),d()}if(o&2){let c=i.$implicit,t=m(2);l(),u(\"title\",c.type.title)(\"cardId\",c.number)(\"companyLogo\",C(2,5,t.currentCompanyLogo$)),l(2),u(\"card\",c)(\"currencyShortTitle\",C(4,7,t.currencyShortTitle$))}}function Ye(o,i){if(o&1){let c=$();p(0,\"app-loyalty-slider\",4),S(\"currentSlideIndex\",function(e){T(c);let r=m();return M(r.getCurrentSlideIndex(e))})(\"currentSlideSwitched\",function(e){T(c);let r=m();return M(r.trackSlideSwitch(e))}),f(1,Ze,5,9,\"app-loyalty-slide\",5),y(2,\"async\"),d()}if(o&2){let c=m();l(),u(\"ngForOf\",C(2,1,c.loyaltyCard$))}}function Je(o,i){if(o&1){let c=$();p(0,\"ui-kit-button\",8),S(\"click\",function(){T(c);let e=m();return M(e.newOrder())}),_(1),y(2,\"translate\"),d()}o&2&&(h(\"data-locator\",\"continue_button\"),l(),b(\" \",C(2,2,\"book-visit\"),\" \"))}function ti(o,i){o&1&&(p(0,\"p\",9),_(1),y(2,\"translate\"),d()),o&2&&(h(\"data-locator\",\"empty_page_banner\"),l(),b(\" \",C(2,2,\"loyalty.no_cards_1\"),\" \"))}var _e=(()=>{let i=class i{constructor(){n(this,\"destroy$\",new Pt(1));n(this,\"store\",K(ct));n(this,\"orderManager\",K(ne));n(this,\"notification\",K(Qt));n(this,\"translate\",K(zt));n(this,\"tracking\",K(qt));n(this,\"appNavigationService\",K(re));n(this,\"hasLoyaltyCard$\",this.store.select(W.user.getLoyaltyCardsCount).pipe(F(t=>!!t)));n(this,\"loyaltyCard$\",this.store.select(W.user.getLoyaltyCards));n(this,\"loyaltyCards\",[]);n(this,\"currentSlideIndex\",0);n(this,\"currentCompany$\",this.store.select(W.currentCompany.getCurrentCompany));n(this,\"currencyShortTitle$\",this.currentCompany$.pipe(F(t=>t==null?void 0:t.currency_short_title)));n(this,\"currentCompanyLogo$\",this.store.select(W.currentCompany.getCompanyLogo))}ngOnInit(){return It(this,null,function*(){this.loyaltyCards=yield Zt(this.loyaltyCard$.pipe(D(this.destroy$))),this.trackPageView()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}trackPageView(){var e;let t=\"my_loyalty_cards\";this.tracking.setPage(t),this.tracking.track({type:Ct.Action.pageView,element:{id:((e=this.loyaltyCards[0])==null?void 0:e.id)||0}}),this.tracking.trackFBViewContent(t)}navigateToProfile(){this.appNavigationService.goBack({url:\"/profile\"})}onCopyNumber(){this.trackLoyaltyActionsByName(\"copy_loyalty_card_id\"),this.notification.notifySuccess(this.translate.instant(\"loyalty.number_copied\"))}newOrder(){this.trackLoyaltyActionsByName(\"open_create_record_flow\"),this.orderManager.newOrder()}getCurrentSlideIndex(t){this.currentSlideIndex=t}trackSlideSwitch(t){this.trackLoyaltyActionsByName(\"\".concat(t.type,\"_loyalty_card_\").concat(t.direction),t.type===\"swipe\"?\"swipe\":\"button\")}trackLoyaltyActionsByName(t,e=\"button\"){this.tracking.track({type:Ct.Action.click,element:{type:e,name:t,id:this.loyaltyCards[this.currentSlideIndex].id}})}};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275cmp\",g({type:i,selectors:[[\"app-loyalty-page\"]],decls:7,vars:9,consts:[[3,\"backClick\"],[3,\"currentSlideIndex\",\"currentSlideSwitched\",4,\"ngIf\"],[\"footer\",\"\",\"class\",\"continue-button\",3,\"click\",4,\"ngIf\"],[\"class\",\"banner\",4,\"ngIf\"],[3,\"currentSlideIndex\",\"currentSlideSwitched\"],[4,\"ngFor\",\"ngForOf\"],[\"cardSlide\",\"\",3,\"cdkCopyToClipboardCopied\",\"title\",\"cardId\",\"companyLogo\"],[\"cardInfo\",\"\",3,\"card\",\"currencyShortTitle\"],[\"footer\",\"\",1,\"continue-button\",3,\"click\"],[1,\"banner\"]],template:function(e,r){e&1&&(p(0,\"app-loyalty-layout\",0),S(\"backClick\",function(){return r.navigateToProfile()}),f(1,Ye,3,3,\"app-loyalty-slider\",1),y(2,\"async\"),f(3,Je,3,4,\"ui-kit-button\",2),y(4,\"async\"),f(5,ti,3,4,\"p\",3),y(6,\"async\"),d()),e&2&&(l(),u(\"ngIf\",C(2,3,r.hasLoyaltyCard$)),l(2),u(\"ngIf\",C(4,5,r.hasLoyaltyCard$)),l(2),u(\"ngIf\",C(6,7,r.hasLoyaltyCard$)===!1))},dependencies:[at,L,ut,Xt,me,ge,ye,et,lt,N],styles:['@charset \"UTF-8\";[_nghost-%COMP%]   .continue-button[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:700;font-size:20px;line-height:24px;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}'],changeDetection:0}));let o=i;return o})();var Ce=(()=>{let i=class i{constructor(t,e){n(this,\"store\");n(this,\"actions$\");this.store=t,this.actions$=e}resolve(t){let{requestsWithProps:e,callbacks:r}=t.data;return e.forEach(s=>{this.propertiesSource$(s.props).pipe().subscribe(a=>{let v=typeof a!=\"boolean\"?this.lookUpProperties(s.props,a):null;this.store.dispatch(s.req(v))})}),G([...r.map(s=>this.actions$.pipe(Kt(s)))]).pipe(F(s=>!!s),Ot(Boolean))}propertiesSource$(t){return t==null?Tt(!0):G([...Object.values(t).map(e=>this.store.select(e))])}lookUpProperties(t,e){let r={},s=[...e];for(let a of Object.keys(t))r[a]=s.shift();return r}};n(i,\"\\u0275fac\",function(e){return new(e||i)(gt(ct),gt(jt))}),n(i,\"\\u0275prov\",Et({token:i,factory:i.\\u0275fac,providedIn:\"root\"}));let o=i;return o})();var ei={requestsWithProps:[{req:Yt,props:{groupId:W.currentCompany.getCurrentCompanyMainGroupId,companyId:W.currentCompany.getCurrentCompanyId}}],callbacks:[Jt]},ii=[{path:\"**\",component:_e,resolve:[Ce],data:kt({},ei)}],ve=(()=>{let i=class i{};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275mod\",nt({type:i})),n(i,\"\\u0275inj\",ot({imports:[_t.forChild(ii),_t]}));let o=i;return o})();var an=(()=>{let i=class i{};n(i,\"\\u0275fac\",function(e){return new(e||i)}),n(i,\"\\u0275mod\",nt({type:i})),n(i,\"\\u0275inj\",ot({providers:[mt],imports:[Wt,ve,Rt,ae,ut,Gt,pt]}));let o=i;return o})();export{ut as a,et as b,ye as c,ge as d,Ce as e,ve as f,an as g};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 10276,
          "_transferSize": 10935,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:20:11.508Z",
        "time": 42.763000004924834,
        "timings": {
          "blocked": 23.064000087700784,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2789999999999999,
          "wait": 16.0290000570938,
          "receive": 3.3909998601302505,
          "_blocked_queueing": 3.268000087700784,
          "_blocked_proxy": 4.526000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "497245",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/certificate-4MINBR2A.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-4D5PXVVK.js",
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
              "value": "https://n958200.alteg.io/certificate-4MINBR2A.js"
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
          "headersSize": 1074,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "996"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e77c1f41bca3-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:11 GMT"
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
              "value": "W/\"68e51480-1fb\""
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
              "value": "5ce6a78a59214818198b5a1119bc3fe4"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 507,
            "mimeType": "application/javascript",
            "compression": 217,
            "text": "var S=function(_){return _[_.WITHOUT_EXPIRATION=0]=\"WITHOUT_EXPIRATION\",_[_.FIX_DATE=1]=\"FIX_DATE\",_[_.FIX_TERM=2]=\"FIX_TERM\",_}(S||{});var A=function(_){return _[_.STATUS_CREATED=1]=\"STATUS_CREATED\",_[_.STATUS_ACTIVE=2]=\"STATUS_ACTIVE\",_[_.STATUS_EXPIRED=3]=\"STATUS_EXPIRED\",_[_.STATUS_WASTED=4]=\"STATUS_WASTED\",_[_.STATUS_FROZEN=5]=\"STATUS_FROZEN\",_}(A||{}),C=function(_){return _.ACTIVE=\"active\",_.SUSPENDED=\"suspended\",_.CANCELLED=\"cancelled\",_.EXPIRED=\"expired\",_}(C||{});export{S as a,A as b,C as c};\n"
          },
          "redirectURL": "",
          "headersSize": 658,
          "bodySize": 290,
          "_transferSize": 948,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:20:11.522Z",
        "time": 27.66000002156943,
        "timings": {
          "blocked": 10.925000003613532,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.40199999999999925,
          "wait": 14.867000030979515,
          "receive": 1.4659999869763851,
          "_blocked_queueing": 0.5050000036135316,
          "_blocked_proxy": 2.175,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "495580",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 334625
              },
              {
                "functionName": "c.fetch",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 138606
              },
              {
                "functionName": "c.send",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 137811
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136746
              },
              {
                "functionName": "c.send",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136660
              },
              {
                "functionName": "v.send",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 127941
              },
              {
                "functionName": "e.track",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 26646
              },
              {
                "functionName": "track",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 751891
              },
              {
                "functionName": "newOrder",
                "scriptId": "3503",
                "url": "https://n958200.alteg.io/profile-UJ3PQK5W.js",
                "lineNumber": 0,
                "columnNumber": 21338
              },
              {
                "functionName": "",
                "scriptId": "3503",
                "url": "https://n958200.alteg.io/profile-UJ3PQK5W.js",
                "lineNumber": 0,
                "columnNumber": 18416
              },
              {
                "functionName": "Al",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 146709
              },
              {
                "functionName": "o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 146894
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 251926
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7089
              },
              {
                "functionName": "onInvokeTask",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74611
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7010
              },
              {
                "functionName": "runTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2354
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8163
              },
              {
                "functionName": "M",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "3226",
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
        "pageref": "page_10",
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
              "value": "2460"
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
          "bodySize": 2460,
          "postData": {
            "mimeType": "application/json",
            "text": "[{\"type\":\"click\",\"name\":\"open_create_record_flow\",\"date\":{\"track\":\"2025-10-08T10:20:13.170Z\",\"send\":\"2025-10-08T10:20:13.171Z\"},\"context\":{\"element\":{\"type\":\"button\",\"name\":\"open_create_record_flow\"},\"json\":\"{\\\"salon_active\\\":1}\",\"action\":{\"index\":{\"sequence\":{\"cookie\":303}}},\"bookform\":{\"widget_id\":958200,\"language\":\"ru-RU\",\"type\":\"group\",\"group_id\":892622},\"page\":{\"current\":{\"version\":\"new_widget\"}},\"cookie\":{\"udid\":\"dkhJeE7k3dlHHKi46b2SftuPMDZzdQxl8gjzg4ky\"},\"company\":{\"id\":237666,\"latitude\":43.2467973,\"longitude\":76.9043061,\"address\":\"ул. Кабанбай батыра, 199\"}},\"app\":{\"name\":\"client.booking\",\"type\":\"client\",\"version\":\"191110.5e092a20\"},\"sdk\":{\"version\":\"5.5.6\"},\"webVitals\":{\"ttfb\":500.4,\"fcp\":3360,\"lcp\":4344,\"fid\":8,\"cls\":null},\"device\":{\"uuid\":null,\"name\":\"Samsung\",\"version\":\"SM-G955U\",\"type\":\"mobile\",\"memory\":8,\"concurrency\":8},\"os\":{\"language\":\"ru\",\"languages\":[\"ru\"],\"name\":\"Android\",\"version\":\"8.0.0\"},\"browser\":{\"name\":\"Edge\",\"version\":\"140.0.0.0\",\"engine\":{\"name\":\"Blink\",\"version\":\"\"},\"useragent\":\"Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0\"},\"screen\":{\"orientation\":{\"type\":\"portrait-primary\",\"angle\":0},\"resolution\":{\"current\":[360,740]},\"touch\":[1,1,1],\"full\":0},\"url\":\"https://n958200.alteg.io/profile?orderStatus=successed&o=\",\"referrer\":\"\",\"connection\":{\"effective_type\":\"4g\",\"rtt\":200},\"adblock\":0,\"bot\":0,\"udid\":{\"weak\":\"684ce81efc60a5b64e283871d37675702cf03cb530ecccc006947bd25bdf04ee\",\"strong\":\"acfb272dfc7fa9337156ff9d0b4ffe8b5c2fb7e4c5de52cff93c962219ad8b6d\"},\"sid\":\"edaa2769e1d8a20fa01b01413fdfaa2a5001bb19d9448d14ea4d041cb62c9cc7\",\"page\":{\"name\":\"user_profile\",\"referrer\":{\"name\":\"step_selection_menu\"},\"object\":{\"name\":\"\",\"type\":\"\"},\"view\":{\"id\":\"4b45c732442dafdf6fef00ef765d0dd1a7011745145e7c7d643dd76095d560df\",\"referrer\":{\"id\":\"16ea084893d3cab3050becb6c799602b5f72b4c595a413a7efd11fcac5fec961\"}}},\"ab\":{\"group\":{\"weak\":\"51\",\"strong\":\"8\"}},\"location\":{\"latitude\":44,\"longitude\":76.2833,\"altitude\":null,\"accuracy\":null,\"timezone\":\"Asia/Almaty\",\"country_iso_code\":\"KZ\",\"country_name\":\"Kazakhstan\",\"city_name\":\"Almaty Oblysy\"},\"transport\":{\"retry\":0,\"latency\":0},\"utm\":{\"content\":null,\"medium\":null,\"source\":null,\"term\":null,\"campaign\":null},\"analytics\":{\"ym\":\"\",\"ga\":\"\"},\"user\":{\"id\":\"18551331011b57da90962a7673bcb8df\",\"type\":null},\"company\":{\"type\":null},\"business\":{\"type\":null,\"entity_id\":null}}]"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b4e7873b87bca5-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
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
              "value": "538ef1f0059bb9f4295a33880954e3db"
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
        "startedDateTime": "2025-10-08T10:20:13.173Z",
        "time": 298.4019999857992,
        "timings": {
          "blocked": 143.34300000368805,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3539999999999992,
          "wait": 153.31900002221764,
          "receive": 1.3859999598935246,
          "_blocked_queueing": 109.08500000368804,
          "_blocked_proxy": 33.108,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "495580",
        "_initiator": {
          "type": "preflight",
          "url": "https://tracks.alteg.io/api/v1/track",
          "requestId": "28412.3794"
        },
        "_priority": "High",
        "_resourceType": "preflight",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
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
              "value": "98b4e7865b11bca5-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
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
              "value": "52ec97d54bda124df834f23cf333622b"
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
        "startedDateTime": "2025-10-08T10:20:13.175Z",
        "time": 106.84199996851385,
        "timings": {
          "blocked": 1.65,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.492,
          "wait": 103.58499997667224,
          "receive": 1.1149999918416142,
          "_blocked_queueing": -1,
          "_blocked_proxy": 1.046,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "503638",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "i",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 490796
              },
              {
                "functionName": "f",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322593
              },
              {
                "functionName": "i",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 321340
              },
              {
                "functionName": "o",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322887
              },
              {
                "functionName": "sendEnvelope",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 315988
              },
              {
                "functionName": "sendSession",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 315469
              },
              {
                "functionName": "captureSession",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 314037
              },
              {
                "functionName": "CO",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309195
              },
              {
                "functionName": "_m",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309118
              },
              {
                "functionName": "od",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309025
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 498079
              },
              {
                "functionName": "Cr",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 261635
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 358194
              },
              {
                "functionName": "replaceState",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 188041
              },
              {
                "functionName": "replaceState",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 189730
              },
              {
                "functionName": "replaceState",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 192291
              },
              {
                "functionName": "setBrowserUrl",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 573007
              },
              {
                "functionName": "handleRouterEvent",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 572478
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 576150
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 567758
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32880
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13506
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29518
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10627
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29474
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13477
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32892
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32892
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.D",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17982
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.D",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17982
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "h",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17941
              },
              {
                "functionName": "f",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17882
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "t.subscribe.r",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 31259
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32964
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "p",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17861
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18086
              },
              {
                "functionName": "unsubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5129
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4937
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3558
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3558
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3558
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "t.subscribe.r",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 31269
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "p",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17861
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18086
              },
              {
                "functionName": "unsubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5129
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4937
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32964
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29934
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13522
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10696
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6464
              },
              {
                "functionName": "onInvoke",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74795
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6404
              },
              {
                "functionName": "run",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 1714
              },
              {
                "functionName": "",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 30000
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7089
              },
              {
                "functionName": "onInvokeTask",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74611
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7010
              },
              {
                "functionName": "runTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2354
              },
              {
                "functionName": "F",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 9181
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8192
              },
              {
                "functionName": "M",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "3226",
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
        "pageref": "page_10",
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
            "text": "{\"sent_at\":\"2025-10-08T10:20:13.245Z\",\"sdk\":{\"name\":\"sentry.javascript.angular\",\"version\":\"9.46.0\"}}\n{\"type\":\"session\"}\n{\"sid\":\"7bb22363f94841cf8cda893cd3458042\",\"init\":false,\"started\":\"2025-10-08T10:20:11.282Z\",\"timestamp\":\"2025-10-08T10:20:13.246Z\",\"status\":\"exited\",\"errors\":0,\"attrs\":{\"release\":\"191110.5e092a20\",\"environment\":\"live\",\"user_agent\":\"Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0\"}}"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b4e7880e9620f4-HKG"
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
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
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
              "value": "f2ccb06f034015e84b0542fedd62699d"
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
        "startedDateTime": "2025-10-08T10:20:13.248Z",
        "time": 510.6959999538958,
        "timings": {
          "blocked": 65.67099996039272,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.7090000000000032,
          "wait": 443.03199999538066,
          "receive": 1.2839999981224537,
          "_blocked_queueing": 6.9969999603927135,
          "_blocked_proxy": 57.97,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "495569",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "i",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 490796
              },
              {
                "functionName": "f",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322593
              },
              {
                "functionName": "i",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 321340
              },
              {
                "functionName": "o",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322887
              },
              {
                "functionName": "sendEnvelope",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 315988
              },
              {
                "functionName": "sendSession",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 315469
              },
              {
                "functionName": "captureSession",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 314037
              },
              {
                "functionName": "CO",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309195
              },
              {
                "functionName": "sd",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 309249
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 498103
              },
              {
                "functionName": "Cr",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 261635
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 358194
              },
              {
                "functionName": "replaceState",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 188041
              },
              {
                "functionName": "replaceState",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 189730
              },
              {
                "functionName": "replaceState",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 192291
              },
              {
                "functionName": "setBrowserUrl",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 573007
              },
              {
                "functionName": "handleRouterEvent",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 572478
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 576150
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 567758
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32880
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13506
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29518
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10627
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29474
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13477
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "n.subscribe.s",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32321
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5207
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32892
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.o",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32342
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32892
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.D",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17982
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "I.subscribe.D",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17982
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10614
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "h",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17941
              },
              {
                "functionName": "f",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17882
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "t.subscribe.r",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 31259
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32964
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "p",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17861
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18086
              },
              {
                "functionName": "unsubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5129
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4937
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3558
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3558
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3558
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "t.subscribe.r",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 31269
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "p",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17861
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 18086
              },
              {
                "functionName": "unsubscribe",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5129
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4937
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32964
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 29934
              },
              {
                "functionName": "_complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4900
              },
              {
                "functionName": "complete",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3321
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 13522
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 10696
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6464
              },
              {
                "functionName": "onInvoke",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74795
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6404
              },
              {
                "functionName": "run",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 1714
              },
              {
                "functionName": "",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 30000
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7089
              },
              {
                "functionName": "onInvokeTask",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74611
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7010
              },
              {
                "functionName": "runTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2354
              },
              {
                "functionName": "F",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 9181
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8192
              },
              {
                "functionName": "M",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "3226",
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
        "pageref": "page_10",
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
            "text": "{\"sent_at\":\"2025-10-08T10:20:13.254Z\",\"sdk\":{\"name\":\"sentry.javascript.angular\",\"version\":\"9.46.0\"}}\n{\"type\":\"session\"}\n{\"sid\":\"f292b9a98ae84ca0a7bd6598829eb7bb\",\"init\":true,\"started\":\"2025-10-08T10:20:13.246Z\",\"timestamp\":\"2025-10-08T10:20:13.246Z\",\"status\":\"ok\",\"errors\":0,\"attrs\":{\"release\":\"191110.5e092a20\",\"environment\":\"live\",\"user_agent\":\"Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0\"}}"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b4e7873a80bcac-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
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
              "value": "cafe66bdb8d976ba1cba87d64e3dcb4b"
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
        "startedDateTime": "2025-10-08T10:20:13.259Z",
        "time": 175.11599999852479,
        "timings": {
          "blocked": 56.30599994342774,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.5229999999999961,
          "wait": 115.46900001787395,
          "receive": 2.8180000372231007,
          "_blocked_queueing": 20.83099994342774,
          "_blocked_proxy": 34.652,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "495705",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 334625
              },
              {
                "functionName": "c.fetch",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 138606
              },
              {
                "functionName": "c.send",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 137811
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136746
              },
              {
                "functionName": "c.send",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136660
              },
              {
                "functionName": "v.send",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 127941
              },
              {
                "functionName": "e.track",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 26646
              },
              {
                "functionName": "track",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 751891
              },
              {
                "functionName": "pageView",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 752190
              },
              {
                "functionName": "ngOnInit",
                "scriptId": "3486",
                "url": "https://n958200.alteg.io/menu-VAN5I6OG.js",
                "lineNumber": 0,
                "columnNumber": 15886
              },
              {
                "functionName": "Xc",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64967
              },
              {
                "functionName": "Mm",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 65113
              },
              {
                "functionName": "Vu",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64874
              },
              {
                "functionName": "Hr",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64595
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105538
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "detectChanges",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 107692
              },
              {
                "functionName": "ngAfterContentChecked",
                "scriptId": "3245",
                "url": "https://n958200.alteg.io/main-JGQFRULP.js",
                "lineNumber": 0,
                "columnNumber": 126455
              },
              {
                "functionName": "Xc",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64967
              },
              {
                "functionName": "Mm",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 65122
              },
              {
                "functionName": "Vu",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64874
              },
              {
                "functionName": "Vr",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64548
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105659
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "yw",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 161128
              },
              {
                "functionName": "synchronizeOnce",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159712
              },
              {
                "functionName": "synchronize",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159431
              },
              {
                "functionName": "_tick",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159111
              },
              {
                "functionName": "tick",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159010
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162301
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6464
              },
              {
                "functionName": "onInvoke",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74795
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6404
              },
              {
                "functionName": "run",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 1714
              },
              {
                "functionName": "run",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73629
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162272
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "emit",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 71627
              },
              {
                "functionName": "ma",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73996
              },
              {
                "functionName": "onHasTask",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 75009
              },
              {
                "functionName": "hasTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7362
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7688
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3891
              },
              {
                "functionName": "runTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2564
              },
              {
                "functionName": "F",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 9181
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8192
              },
              {
                "functionName": "M",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "3226",
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
        "pageref": "page_10",
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
              "value": "2401"
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
          "bodySize": 2401,
          "postData": {
            "mimeType": "application/json",
            "text": "[{\"type\":\"page_view\",\"name\":\"\",\"date\":{\"track\":\"2025-10-08T10:20:13.321Z\",\"send\":\"2025-10-08T10:20:13.323Z\"},\"context\":{\"json\":\"{\\\"salon_active\\\":1}\",\"action\":{\"index\":{\"sequence\":{\"cookie\":304}}},\"bookform\":{\"widget_id\":958200,\"language\":\"ru-RU\",\"type\":\"group\",\"group_id\":892622},\"page\":{\"current\":{\"version\":\"new_widget\"}},\"cookie\":{\"udid\":\"dkhJeE7k3dlHHKi46b2SftuPMDZzdQxl8gjzg4ky\"},\"company\":{\"id\":237666,\"latitude\":43.2467973,\"longitude\":76.9043061,\"address\":\"ул. Кабанбай батыра, 199\"}},\"app\":{\"name\":\"client.booking\",\"type\":\"client\",\"version\":\"191110.5e092a20\"},\"sdk\":{\"version\":\"5.5.6\"},\"webVitals\":{\"ttfb\":500.4,\"fcp\":3360,\"lcp\":4344,\"fid\":8,\"cls\":null},\"device\":{\"uuid\":null,\"name\":\"Samsung\",\"version\":\"SM-G955U\",\"type\":\"mobile\",\"memory\":8,\"concurrency\":8},\"os\":{\"language\":\"ru\",\"languages\":[\"ru\"],\"name\":\"Android\",\"version\":\"8.0.0\"},\"browser\":{\"name\":\"Edge\",\"version\":\"140.0.0.0\",\"engine\":{\"name\":\"Blink\",\"version\":\"\"},\"useragent\":\"Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0\"},\"screen\":{\"orientation\":{\"type\":\"portrait-primary\",\"angle\":0},\"resolution\":{\"current\":[360,740]},\"touch\":[1,1,1],\"full\":0},\"url\":\"https://n958200.alteg.io/company/237666/personal/menu?orderStatus=successed&o=\",\"referrer\":\"\",\"connection\":{\"effective_type\":\"4g\",\"rtt\":200},\"adblock\":0,\"bot\":0,\"udid\":{\"weak\":\"684ce81efc60a5b64e283871d37675702cf03cb530ecccc006947bd25bdf04ee\",\"strong\":\"acfb272dfc7fa9337156ff9d0b4ffe8b5c2fb7e4c5de52cff93c962219ad8b6d\"},\"sid\":\"edaa2769e1d8a20fa01b01413fdfaa2a5001bb19d9448d14ea4d041cb62c9cc7\",\"page\":{\"name\":\"step_selection_menu\",\"referrer\":{\"name\":\"user_profile\"},\"object\":{\"name\":\"\",\"type\":\"\"},\"view\":{\"id\":\"173edf461ab9b48c3efbbdad9a1638521c14d8f163314daebe2f2592bedc39a3\",\"referrer\":{\"id\":\"4b45c732442dafdf6fef00ef765d0dd1a7011745145e7c7d643dd76095d560df\"}}},\"ab\":{\"group\":{\"weak\":\"51\",\"strong\":\"8\"}},\"location\":{\"latitude\":44,\"longitude\":76.2833,\"altitude\":null,\"accuracy\":null,\"timezone\":\"Asia/Almaty\",\"country_iso_code\":\"KZ\",\"country_name\":\"Kazakhstan\",\"city_name\":\"Almaty Oblysy\"},\"transport\":{\"retry\":0,\"latency\":0},\"utm\":{\"content\":null,\"medium\":null,\"source\":null,\"term\":null,\"campaign\":null},\"analytics\":{\"ym\":\"\",\"ga\":\"\"},\"user\":{\"id\":\"18551331011b57da90962a7673bcb8df\",\"type\":null},\"company\":{\"type\":null},\"business\":{\"type\":null,\"entity_id\":null}}]"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b4e787eb92bcbb-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
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
              "value": "a0a60db7a05b8ebc114e8caabba9caed"
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
        "startedDateTime": "2025-10-08T10:20:13.325Z",
        "time": 270.0789999216795,
        "timings": {
          "blocked": 102.50999993637204,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.4089999999999998,
          "wait": 165.8889999697581,
          "receive": 1.2710000155493617,
          "_blocked_queueing": 100.80499993637204,
          "_blocked_proxy": 1.289,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "495705",
        "_initiator": {
          "type": "preflight",
          "url": "https://tracks.alteg.io/api/v1/track",
          "requestId": "28412.3797"
        },
        "_priority": "High",
        "_resourceType": "preflight",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
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
              "value": "98b4e7874b1dbcbb-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
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
              "value": "74bbf83d52c089e6a1c30fd705553c8f"
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
        "startedDateTime": "2025-10-08T10:20:13.351Z",
        "time": 97.30499993737787,
        "timings": {
          "blocked": 0.945,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.401,
          "wait": 94.99200002474338,
          "receive": 0.9669999126344919,
          "_blocked_queueing": -1,
          "_blocked_proxy": 0.945,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "504707",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "setProperty",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 251531
              },
              {
                "functionName": "setProperty",
                "scriptId": "3245",
                "url": "https://n958200.alteg.io/main-JGQFRULP.js",
                "lineNumber": 0,
                "columnNumber": 65916
              },
              {
                "functionName": "Ma",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 97862
              },
              {
                "functionName": "fI",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 133555
              },
              {
                "functionName": "va",
                "scriptId": "3254",
                "url": "https://n958200.alteg.io/chunk-TX67VJHB.js",
                "lineNumber": 0,
                "columnNumber": 157240
              },
              {
                "functionName": "Td",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 94517
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105409
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "detectChanges",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 107692
              },
              {
                "functionName": "ngAfterContentChecked",
                "scriptId": "3245",
                "url": "https://n958200.alteg.io/main-JGQFRULP.js",
                "lineNumber": 0,
                "columnNumber": 126455
              },
              {
                "functionName": "Xc",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64967
              },
              {
                "functionName": "Mm",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 65122
              },
              {
                "functionName": "Vu",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64874
              },
              {
                "functionName": "Vr",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64548
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105659
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "yw",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 161128
              },
              {
                "functionName": "synchronizeOnce",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159712
              },
              {
                "functionName": "synchronize",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159431
              },
              {
                "functionName": "_tick",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159111
              },
              {
                "functionName": "tick",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159010
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162301
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6464
              },
              {
                "functionName": "onInvoke",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74795
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6404
              },
              {
                "functionName": "run",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 1714
              },
              {
                "functionName": "run",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73629
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162272
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "emit",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 71627
              },
              {
                "functionName": "ma",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73996
              },
              {
                "functionName": "onHasTask",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 75009
              },
              {
                "functionName": "hasTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7362
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7688
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3891
              },
              {
                "functionName": "runTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2564
              },
              {
                "functionName": "F",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 9181
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8192
              },
              {
                "functionName": "M",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "3226",
                "url": "https://n958200.alteg.io/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js",
                "lineNumber": 0,
                "columnNumber": 9404
              }
            ]
          }
        },
        "_priority": "High",
        "_resourceType": "image",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
        "request": {
          "method": "GET",
          "url": "https://be.cdn.alteg.io/images/widget/background_logo/altegio.svg",
          "httpVersion": "http/2.0",
          "headers": [
            {
              "name": ":authority",
              "value": "be.cdn.alteg.io"
            },
            {
              "name": ":method",
              "value": "GET"
            },
            {
              "name": ":path",
              "value": "/images/widget/background_logo/altegio.svg"
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
              "value": "i"
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
              "name": "access-control-allow-origin",
              "value": "*"
            },
            {
              "name": "age",
              "value": "50900"
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
              "value": "98b00cdd2f64ecf1-ALA"
            },
            {
              "name": "content-encoding",
              "value": "gzip"
            },
            {
              "name": "content-type",
              "value": "image/svg+xml"
            },
            {
              "name": "date",
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
            },
            {
              "name": "etag",
              "value": "W/\"e4b1224cf6f2f68c3562e7714ca3b53f\""
            },
            {
              "name": "last-modified",
              "value": "Mon, 13 Mar 2023 15:29:52 GMT"
            },
            {
              "name": "nel",
              "value": "{\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}"
            },
            {
              "name": "report-to",
              "value": "{\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=MkQcFADanTAeBPiZUJIh4%2Fa3GI%2FxLSpWgFBFCyubt1OwYu0%2B2EnV4sS4AKbspAAsH5IDkWtFzkHRETwCEvdOv%2B6oXvHHY%2FdEJodIj4f7mOx1Ow%3D%3D\"}]}"
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
              "value": "00-87f4b81b005d9268a1c641cf59e02419-0195dc057609bafc-01"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-cached-since",
              "value": "2025-10-07T20:11:53+00:00"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-id",
              "value": "nls-hw-edge-gc9"
            },
            {
              "name": "x-id-fe",
              "value": "nls-hw-edge-gc8"
            },
            {
              "name": "x-shard",
              "value": "nls-shard0-default"
            },
            {
              "name": "x-test",
              "value": "TEST"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5800,
            "mimeType": "image/svg+xml",
            "text": "<svg width=\"85\" height=\"24\" viewBox=\"0 0 85 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_3343_46271)\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.402 21.5229H8.268C6.28678 21.5229 4.91627 21.5204 3.88473 21.3817C2.88619 21.2475 2.37871 21.0048 2.02196 20.648C1.66522 20.2913 1.42251 19.7838 1.28825 18.7853C1.14957 17.7537 1.14713 16.3832 1.14713 14.402V10.268C1.14713 8.28677 1.14957 6.91625 1.28825 5.88471C1.42251 4.88617 1.66522 4.3787 2.02196 4.02195C2.37871 3.6652 2.88619 3.42249 3.88473 3.28824C4.91627 3.14955 6.28678 3.14711 8.268 3.14711H12.402C14.3832 3.14711 15.7537 3.14955 16.7853 3.28824C17.7838 3.42249 18.2913 3.6652 18.648 4.02195C19.0048 4.3787 19.2475 4.88617 19.3817 5.88471C19.5204 6.91626 19.5229 8.28677 19.5229 10.268V14.402C19.5229 16.3832 19.5204 17.7537 19.3817 18.7853C19.2475 19.7838 19.0048 20.2913 18.648 20.648C18.2913 21.0048 17.7838 21.2475 16.7853 21.3817C15.7537 21.5204 14.3832 21.5229 12.402 21.5229ZM1.21082 21.4592C0 20.2483 0 18.2996 0 14.402V10.268C0 6.37041 0 4.42162 1.21082 3.2108C2.42164 1.99998 4.37043 1.99998 8.268 1.99998H12.402C16.2996 1.99998 18.2484 1.99998 19.4592 3.2108C20.67 4.42162 20.67 6.37041 20.67 10.268V14.402C20.67 18.2996 20.67 20.2483 19.4592 21.4592C18.2484 22.67 16.2996 22.67 12.402 22.67H8.268C4.37043 22.67 2.42164 22.67 1.21082 21.4592Z\" fill=\"#AAAAAA\"/>\n<path d=\"M17.444 17.7932C17.5073 17.9028 17.4281 18.0399 17.3016 18.0399H11.5401C11.4814 18.0399 11.4271 18.0085 11.3977 17.9576L7.34524 10.9371C7.31587 10.8863 7.31587 10.8236 7.34524 10.7727L10.226 5.78212C10.2893 5.67248 10.4475 5.67248 10.5108 5.78212L17.444 17.7932Z\" fill=\"#AAAAAA\"/>\n<path d=\"M4.17964 16.2567C4.20901 16.2058 4.26329 16.1745 4.32204 16.1745H10.1923C10.2705 16.1745 10.3194 16.2592 10.2803 16.327L9.33905 17.9576C9.30968 18.0085 9.2554 18.0399 9.19665 18.0399H3.32641C3.24816 18.0399 3.19925 17.9551 3.23838 17.8873L4.17964 16.2567Z\" fill=\"#AAAAAA\"/>\n</g>\n<path d=\"M36.4564 17.9784H38.5167V4.5L36.4564 4.5V17.9784Z\" fill=\"#AAAAAA\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32.2736 16.8528C31.7798 17.4508 30.8211 18.1997 29.2365 18.1997C27.99 18.1997 26.8287 17.739 25.9789 16.882C25.1283 16.0241 24.6001 14.7797 24.6001 13.2314C24.6001 10.1587 26.7305 8.26298 29.2365 8.26298C30.7754 8.26298 31.764 8.98066 32.2736 9.56935V8.48433H34.334V17.9784H32.2736V16.8528ZM32.3105 13.2314C32.3105 14.9553 31.195 16.2685 29.55 16.2685C27.846 16.2685 26.7158 14.9512 26.7158 13.2314C26.7158 12.3598 27.0016 11.6005 27.4937 11.0612C27.9843 10.5235 28.6887 10.1942 29.55 10.1942C31.1957 10.1942 32.3105 11.4897 32.3105 13.2314Z\" fill=\"#AAAAAA\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.0447 14.9957H57.0418L57.0047 15.218C56.8612 16.079 55.6058 18.1997 52.4448 18.1997C49.5331 18.1997 47.4579 16.009 47.4579 13.2314C47.4579 10.3646 49.4932 8.26298 52.2788 8.26298C53.6652 8.26298 54.8784 8.78025 55.7444 9.69202C56.6099 10.6033 57.118 11.8975 57.118 13.4343V13.6251H49.5531C49.7212 15.1328 50.8381 16.2685 52.4448 16.2685C54.2053 16.2685 54.8496 15.3425 54.99 15.093L55.0447 14.9957ZM53.915 10.6021C53.4769 10.2661 52.924 10.0835 52.2788 10.0835C51.5874 10.0835 51.0118 10.2799 50.5694 10.6223C50.1855 10.9195 49.8938 11.3329 49.715 11.8415H54.7989C54.5994 11.3103 54.2966 10.8948 53.915 10.6021Z\" fill=\"#AAAAAA\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M66.2681 9.59279V8.48433H68.3284V17.7875C68.3284 19.1115 67.8988 20.2534 67.0495 21.0637C66.201 21.8734 64.9549 22.3316 63.36 22.3316C61.5527 22.3316 60.3762 21.7386 59.6339 21.057C58.8972 20.3805 58.5978 19.6255 58.5254 19.3052L58.4728 19.0723H60.6659L60.7211 19.167C60.7793 19.2668 60.9609 19.5722 61.3622 19.854C61.7622 20.1349 62.3922 20.4004 63.36 20.4004C64.3153 20.4004 65.0386 20.1506 65.5213 19.7122C66.0014 19.2761 66.2681 18.6311 66.2681 17.7875V16.8606C65.7511 17.4657 64.7371 18.2182 63.1387 18.2182C61.8746 18.2182 60.6997 17.7581 59.8404 16.9012C58.9801 16.0433 58.447 14.7987 58.447 13.2498C58.447 11.701 58.98 10.4519 59.84 9.58953C60.699 8.72808 61.874 8.26298 63.1387 8.26298C64.725 8.26298 65.747 8.99698 66.2681 9.59279ZM63.4522 16.287C65.1571 16.287 66.3049 14.9503 66.3049 13.2498C66.3049 12.3715 66.0173 11.6077 65.5182 11.0638C65.0193 10.5203 64.307 10.1942 63.4522 10.1942C62.5713 10.1942 61.8528 10.5244 61.3535 11.0644C60.8528 11.6059 60.5626 12.3694 60.5626 13.2498C60.5626 14.9487 61.7091 16.287 63.4522 16.287Z\" fill=\"#AAAAAA\"/>\n<path d=\"M72.5484 17.9784H70.488V8.48433H72.5484V17.9784Z\" fill=\"#AAAAAA\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M74.1781 13.2314C74.1781 10.4139 76.3299 8.26298 79.1649 8.26298C81.9809 8.26298 84.1517 10.4134 84.1517 13.2314C84.1517 16.0493 81.9809 18.1997 79.1649 18.1997C76.3299 18.1997 74.1781 16.0488 74.1781 13.2314ZM76.2937 13.2314C76.2937 14.9302 77.4586 16.2685 79.1649 16.2685C80.8718 16.2685 82.036 14.948 82.036 13.2314C82.036 11.5148 80.8718 10.1942 79.1649 10.1942C77.4586 10.1942 76.2937 11.5325 76.2937 13.2314Z\" fill=\"#AAAAAA\"/>\n<path d=\"M46.3165 17.9784V16.0472L44.4343 16.0472C43.5912 16.0472 43.1696 16.0472 42.9077 15.7852C42.6508 15.5283 42.6458 15.1179 42.6457 14.3068V10.3786H46.3165V8.48432H42.6457V4.5L40.5854 5.77322V14.7439C40.5854 14.9769 40.5986 15.1986 40.6256 15.4087C40.6889 16.2975 40.8518 16.8732 41.2712 17.2926C41.7259 17.7473 42.3644 17.9005 43.3866 17.9521C43.5717 17.9697 43.7654 17.9784 43.9674 17.9784H46.3165Z\" fill=\"#AAAAAA\"/>\n<path d=\"M71.5247 7.38676C72.261 7.38676 72.8579 6.78985 72.8579 6.05352C72.8579 5.31719 72.261 4.72028 71.5247 4.72028C70.7883 4.72028 70.1914 5.31719 70.1914 6.05352C70.1914 6.78985 70.7883 7.38676 71.5247 7.38676Z\" fill=\"#AAAAAA\"/>\n<defs>\n<clipPath id=\"clip0_3343_46271\">\n<rect width=\"20.67\" height=\"20.67\" fill=\"white\" transform=\"matrix(1 0 0 -1 0 22.67)\"/>\n</clipPath>\n</defs>\n</svg>\n"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": -1,
          "_transferSize": 2598,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:20:13.356Z",
        "time": 20.7630000077188,
        "timings": {
          "blocked": 10.655000005684794,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.8569999999999993,
          "wait": 8.341999948963522,
          "receive": 0.9090000530704856,
          "_blocked_queueing": 6.529000005684793,
          "_blocked_proxy": 3.4930000000000003,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "495580",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 334625
              },
              {
                "functionName": "c.fetch",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 138606
              },
              {
                "functionName": "c.send",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 137811
              },
              {
                "functionName": "",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136746
              },
              {
                "functionName": "c.send",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136660
              },
              {
                "functionName": "v.send",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 127941
              },
              {
                "functionName": "e.track",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 26646
              },
              {
                "functionName": "track",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 751891
              },
              {
                "functionName": "trackBenchmark",
                "scriptId": "3265",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 753263
              },
              {
                "functionName": "ngAfterViewInit",
                "scriptId": "3486",
                "url": "https://n958200.alteg.io/menu-VAN5I6OG.js",
                "lineNumber": 0,
                "columnNumber": 16768
              },
              {
                "functionName": "Xc",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64967
              },
              {
                "functionName": "Mm",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 65113
              },
              {
                "functionName": "Vu",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64874
              },
              {
                "functionName": "Hr",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64595
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105892
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "detectChanges",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 107692
              },
              {
                "functionName": "ngAfterContentChecked",
                "scriptId": "3245",
                "url": "https://n958200.alteg.io/main-JGQFRULP.js",
                "lineNumber": 0,
                "columnNumber": 126455
              },
              {
                "functionName": "Xc",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64967
              },
              {
                "functionName": "Mm",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 65122
              },
              {
                "functionName": "Vu",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64874
              },
              {
                "functionName": "Vr",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64548
              },
              {
                "functionName": "Vv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105659
              },
              {
                "functionName": "hs",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "yw",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 161128
              },
              {
                "functionName": "synchronizeOnce",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159712
              },
              {
                "functionName": "synchronize",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159431
              },
              {
                "functionName": "_tick",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159111
              },
              {
                "functionName": "tick",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159010
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162301
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6464
              },
              {
                "functionName": "onInvoke",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74795
              },
              {
                "functionName": "invoke",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6404
              },
              {
                "functionName": "run",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 1714
              },
              {
                "functionName": "run",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73629
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162272
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "emit",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 71627
              },
              {
                "functionName": "ma",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73996
              },
              {
                "functionName": "onHasTask",
                "scriptId": "3264",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 75009
              },
              {
                "functionName": "hasTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7362
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7688
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3891
              },
              {
                "functionName": "runTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2564
              },
              {
                "functionName": "F",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 9181
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8192
              },
              {
                "functionName": "M",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "3244",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "3226",
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
        "pageref": "page_10",
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
              "value": "2679"
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
          "bodySize": 2679,
          "postData": {
            "mimeType": "application/json",
            "text": "[{\"type\":\"open\",\"name\":\"booking_menu_page_open\",\"date\":{\"track\":\"2025-10-08T10:20:13.378Z\",\"send\":\"2025-10-08T10:20:13.380Z\"},\"context\":{\"json\":\"{\\\"0\\\":0,\\\"1\\\":0,\\\"2\\\":0,\\\"3\\\":0,\\\"4\\\":0,\\\"name\\\":\\\"booking_menu_page_open\\\",\\\"entryType\\\":\\\"measure\\\",\\\"startTime\\\":8933.799999952316,\\\"duration\\\":137.20000004768372,\\\"throbbersWaveCount\\\":0,\\\"firstContentPaintTime\\\":134.79999995231628,\\\"skeletonsWaveCount\\\":0,\\\"salon_active\\\":1}\",\"action\":{\"index\":{\"sequence\":{\"cookie\":305}}},\"bookform\":{\"widget_id\":958200,\"language\":\"ru-RU\",\"type\":\"group\",\"group_id\":892622},\"page\":{\"current\":{\"version\":\"new_widget\"}},\"cookie\":{\"udid\":\"dkhJeE7k3dlHHKi46b2SftuPMDZzdQxl8gjzg4ky\"},\"company\":{\"id\":237666,\"latitude\":43.2467973,\"longitude\":76.9043061,\"address\":\"ул. Кабанбай батыра, 199\"}},\"app\":{\"name\":\"client.booking\",\"type\":\"client\",\"version\":\"191110.5e092a20\"},\"sdk\":{\"version\":\"5.5.6\"},\"webVitals\":{\"ttfb\":500.4,\"fcp\":3360,\"lcp\":4344,\"fid\":8,\"cls\":null},\"device\":{\"uuid\":null,\"name\":\"Samsung\",\"version\":\"SM-G955U\",\"type\":\"mobile\",\"memory\":8,\"concurrency\":8},\"os\":{\"language\":\"ru\",\"languages\":[\"ru\"],\"name\":\"Android\",\"version\":\"8.0.0\"},\"browser\":{\"name\":\"Edge\",\"version\":\"140.0.0.0\",\"engine\":{\"name\":\"Blink\",\"version\":\"\"},\"useragent\":\"Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0\"},\"screen\":{\"orientation\":{\"type\":\"portrait-primary\",\"angle\":0},\"resolution\":{\"current\":[360,740]},\"touch\":[1,1,1],\"full\":0},\"url\":\"https://n958200.alteg.io/company/237666/personal/menu?orderStatus=successed&o=\",\"referrer\":\"\",\"connection\":{\"effective_type\":\"4g\",\"rtt\":200},\"adblock\":0,\"bot\":0,\"udid\":{\"weak\":\"684ce81efc60a5b64e283871d37675702cf03cb530ecccc006947bd25bdf04ee\",\"strong\":\"acfb272dfc7fa9337156ff9d0b4ffe8b5c2fb7e4c5de52cff93c962219ad8b6d\"},\"sid\":\"edaa2769e1d8a20fa01b01413fdfaa2a5001bb19d9448d14ea4d041cb62c9cc7\",\"page\":{\"name\":\"step_selection_menu\",\"referrer\":{\"name\":\"user_profile\"},\"object\":{\"name\":\"\",\"type\":\"\"},\"view\":{\"id\":\"173edf461ab9b48c3efbbdad9a1638521c14d8f163314daebe2f2592bedc39a3\",\"referrer\":{\"id\":\"4b45c732442dafdf6fef00ef765d0dd1a7011745145e7c7d643dd76095d560df\"}}},\"ab\":{\"group\":{\"weak\":\"51\",\"strong\":\"8\"}},\"location\":{\"latitude\":44,\"longitude\":76.2833,\"altitude\":null,\"accuracy\":null,\"timezone\":\"Asia/Almaty\",\"country_iso_code\":\"KZ\",\"country_name\":\"Kazakhstan\",\"city_name\":\"Almaty Oblysy\"},\"transport\":{\"retry\":0,\"latency\":0},\"utm\":{\"content\":null,\"medium\":null,\"source\":null,\"term\":null,\"campaign\":null},\"analytics\":{\"ym\":\"\",\"ga\":\"\"},\"user\":{\"id\":\"18551331011b57da90962a7673bcb8df\",\"type\":null},\"company\":{\"type\":null},\"business\":{\"type\":null,\"entity_id\":null}}]"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b4e7883c24bca5-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
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
              "value": "be430ea8eb1afa71ceca7ddb87e112fc"
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
        "startedDateTime": "2025-10-08T10:20:13.382Z",
        "time": 288.4820000035688,
        "timings": {
          "blocked": 90.66200002242624,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.34999999999999987,
          "wait": 196.10799997116627,
          "receive": 1.3620000099763274,
          "_blocked_queueing": 88.83000002242625,
          "_blocked_proxy": 1.382,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "495597",
        "_initiator": {
          "type": "preflight",
          "url": "https://tracks.alteg.io/api/v1/track",
          "requestId": "28412.3800"
        },
        "_priority": "High",
        "_resourceType": "preflight",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
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
              "value": "98b4e787a96bbcb7-ALA"
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
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
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
              "value": "f849e14801124258c1ac8a7b5e9a3ace"
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
        "startedDateTime": "2025-10-08T10:20:13.383Z",
        "time": 87.29099999133497,
        "timings": {
          "blocked": 0.652,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.32000000000000006,
          "wait": 84.14100005435944,
          "receive": 2.1779999369755387,
          "_blocked_queueing": -1,
          "_blocked_proxy": 0.652,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "504224",
        "_initiator": {
          "type": "other"
        },
        "_priority": "Low",
        "_resourceType": "image",
        "cache": {},
        "connection": "9090",
        "pageref": "page_10",
        "request": {
          "method": "GET",
          "url": "https://assets.alteg.io/booking_form_appearance_header/sm/1/1a/1a3fc6e8cc7fec9_20240229222359.png",
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
              "value": "/booking_form_appearance_header/sm/1/1a/1a3fc6e8cc7fec9_20240229222359.png"
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
              "value": "i"
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
              "value": "104389"
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
              "value": "9889a565da17ece3-ALA"
            },
            {
              "name": "content-length",
              "value": "147925"
            },
            {
              "name": "content-type",
              "value": "image/png"
            },
            {
              "name": "date",
              "value": "Wed, 08 Oct 2025 10:20:13 GMT"
            },
            {
              "name": "etag",
              "value": "\"8389ee42b95d1a986c65cf46f02f0636\""
            },
            {
              "name": "last-modified",
              "value": "Thu, 29 Feb 2024 18:24:00 GMT"
            },
            {
              "name": "nel",
              "value": "{\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}"
            },
            {
              "name": "report-to",
              "value": "{\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=cFTP%2BpMQ4IFtcnOHZdabofkxUQ6eDSQkzyg5wwOeTIH%2FufmsBIK68h8tPmJfweKtZO0G%2FUcGqvkAp%2Fqq2EnwUtfwZ8Fg0zkcdnIGh0IHLjJypw%3D%3D\"}]}"
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
              "value": "00-1eae27be28b85c1d371df155b5e743db-4be9b6ed9d893777-01"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-cached-since",
              "value": "2025-10-07T05:20:24+00:00"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-id",
              "value": "nls-hw-edge-gc5"
            },
            {
              "name": "x-id-fe",
              "value": "nls-hw-edge-gc9"
            },
            {
              "name": "x-shard",
              "value": "nls-shard0-default"
            }
          ],
          "cookies": [],
          "content": {
            "size": 147925,
            "mimeType": "image/png",
            "text": "iVBORw0KGgoAAAANSUhEUgAAAQAAAACQCAYAAADnY7WRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQAggN9/ARkfHf////8A////AAEBAQAAAQAA/gAAAAAAAQAAAAEAAQEBAAAAAAD+/v4AAQEBAAMAAQAFAgQABwMCAAYBAQAIBAQACgUEAAsGBgAJBwUABAIBAAgHBQAFBQQABgQCAAMDAgAFBAMAAQIBAP//AAABAQEAAAABAAEBAgD8/f4A/f7+AP7+/gD///8A/v7+AP///wD+/f0AAgEBAAIBAAACAv8ABwQDAAEB/gAGBAMAAwMCAAQDAAADAgIABAQEAAMCAgABAQAAAAD/AAICAQAAAP8AAAAAAAAAAAADAwIAAP/+AAEDAgABAQAAAgIBAAEBAAAAAAAAAgQCAP///gAAAAEAAAD/AP7+/gAAAAAA/v7+AP//AAD8/P0AAQEBAPv7+gD9/f4A/f3+AP38/gD9/f4A+vr7AP39/wD6/P4A/Pv8APv9/gD5+/0A+vv+APn8/QD3+/4A9vv9APf7/QD3/f8A+/8AAPr+/wD8/v8AAAABAAAAAAAAAQEAAQACAAAAAAADAQIABQMCAAQBAQANBwYABgH/AAkFAgAKBQQABgQAAAcEAwAIBgQABwUDAAUEAQAFBAIABAMDAAMCAAAEBAQAAAABAP3+/wD//wAA/wAAAP8AAgACAgIAAQIBAAECAgACAgIAAwMDAAQEAgADAwMAAwMCAAICAgADAwIABAMBAAICAQACAgAA/wD/AAEBAQD///4AAAAAAP///wD//f4AAP8AAP39/QD///8A////APz8/gD+/v4A+/z8AAECAgD+/v4A+Pj6APv7/QD9/f4AAwQDAP///wD3+PoA+fr8APv8/QAEBQcA/v8IAOvv7gD4+fgA+f3+AAMBBAACAQMACAUJAPv9/AAEAQMA+P79AAgFBwD1+PcA8/r3ABUMEgD8/vwABgQGAO718gD3+/kAEQsPAPn6+QD+/v4AAgIBABIOEAD8/v8ACggKAPT28wD3+vkA9vr4APz9/AARCg8A/QAAAPX49gABAAEA+P35AAUCBAD2+/gAAQACAAQCAwARCw8A8vfyAP3//wAJBAcADwoNAPT39QAKCAkA9/v7AAcEBQD3+vkA/P77AAcFBgAWERUA8/X0APz7+wADAwMA8/j1AAMDBAAMBwkA+fv7APH39AACAQIAAgIBAPL59QADAQIACQMFAP7//QAAAQIABwQGAAD//wAJBwgA9/r4AP7+/gAEAgMABwQFAA8LCwD0+PcA7/XxAP3+/gAJBQUAAgAAAAEBAwD+//8A/f7+AAEBAAD+//8AAQEBAAQCAgAEAgMAAgICAAgGBgD7+/wAAQABAPr9/AAHBQYAAQAAAAMCAgACAQEACQcIAP///gD4+vgA/wEAAPL39gAE////AP///wABAQEAAAAAAP3//wABAQEAAgABAP3+/gD/AAAAAQICAAAAAAAAAAAAAgICAAEBAAD///8AAgMEAAECAQAAAQEA/wEAAP8AAQACAgMA/wABAP//AAABAQEAAAAAAP3+/wACAAEAAQEBAAEBAgAAAAAAAAECAAEBAAABAQAAAQEAAAAA/wABAQAAAAAAAAIDAAABAAAAAAD+AAAAAAD7/f4AAwMBAPv9/QABAQEA/AAAAP8A/wD/+/wA+wEAAAEAAAADAgIAAgMCAAEA/wAAAP8A////AP7+AwAAAP4AA/8AAAAA/wACAwEAAAAAAAECAgAA/v0AAQEAAP///QAAAAAAAAD/AP7+/wD+/v8AAP//APv8/AAAAAEA/Pz+APz8/AAA/wAA/Pz9APz9/gD7/P4A/P3+APz8/gD6+/0A/f7/APv8/gD8/v4A/f4AAPz+AAD8/f8AAAECAAAB/gD+/v4A/f/+AAAAAgAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAgEBAP79/QABBQMAAQEBAAECAQAAAP8A/wD/AP8A/wD+/v4AAAADAAAAAQD///8AAAECAP///wD/AP8A/v4AAP8AAAD/AAEAAAD/AP3+/QABAAIAAf//AAICAgAAAAAA////AP///wAAAAAAAAAAAAABAAD//wAAAAAAAAABAQABAAAAAAAAAAEBAQD///8AAgABAPz+/gD//wAAAAAAAP7+/gD9/f0AAAABAP7+/gD7/P0ABAQBAP//AAACAgIAAwP/AP3+/wD+/v8A/v8AAP7/AAD///4AAgEAAAIBBAD+//8ABgQFAPr7+wAMBAgA//8AAPj6/QD7/fwABQMFAPb59wD+AQEAAAABAPj7+gD7/fwA/gD/APP59wAYCQ0A9fr2AA8IDAD6+/kAAQAAAP8AAAAKBggAAwEBAPX5+AAA//8A+/z9AP//AAD2+vgADggMAPb6+AAICAkAAgECAPb79wD8//0A+/38AAEAAQAQCQsABAIDAPT38wD+//8ABQIEAAYEBAD5+voAExATAPX39gALCAoA+Pv5APv+/AASDBAABAMDAPX39QD3+fcACAYGAO708AAGBAcAEQsNAO7y8QAAAQEAAwECAPH59AD8//wAEAgLAAkECAD3+/gA/gD/AAoEBgACAQEAAQICAPr7+wAIBAYADAkJAAMBAAD19/YA5+7rAP4A/wAMBgkA+/38AAEAAAABAQEA/f79AAAA/wAEAwQAAwMDAPv8/AD/AP8A+Pz8AP//+wAGAwQA/v39AAICAgABAAIABAMCAP39/QAEAwQAAQEDAAEBAAD6/PwABQQEAAUDBQD4+fgAEQgLAAQAAAAAAQEBAP///wAAAAAAAQEAAAEAAQD+//4AAgICAP8AAAD///8AAQEBAAEBAQD///8A/v/9AP4BAgD+//4A//4BAAAAAAAA//8AAP//AAAA/wD+/f0AAAQCAP///wAAAAEAAgICAAAAAAABAQEAAAABAAAAAQAA//8AAQICAAH/AAADAwIA/f39AP///wABAQAAAQEEAAAA/gAB/wEAAQH/AAECAAABAAAA/v8AAPv8/QADAgEAAAACAP4B/wACAgEAAQD/AP8A/gAC//8AAQEBAAAA/wABAAAA///+AAICAAD9/v0AAgEAAAH+AAAAAQEAAwMAAP///wADAwIA/P7+AAD//wD/AAAAAAAAAP39/QD//f4A/v7+APz//gD8/P0A//3+AP7+/wD8/P4A+/39AP7+/wD7+/wA/P3/APv9/QD9/gEA/v4AAP39AAD6/f0A+/3/AP3/AAD7/v8A/v8AAP8AAAAAAAAA////AAAAAAABAQEA/wAAAAAA/wABAAEAAgEBAP/+/gABAwIAAgICAP8AAAAA//8A/v7+AP8BAAAAAAEA//8AAP7//wD9/f8AAgL+AAQDBAD//wAA/v//AAAAAQD/AP8A/f7/AP//AQD/AAAAAgMDAAL//wABAQEA/v7+AAICAgAAAAIA////AP7+/wABAf8AAP//AP8BAAAAAAEAAP8AAAIDAgAAAAAA/v7+AAAAAAD/AAAAAAABAAAA/wAAAAAAAAAAAAEBAQD+/v4AAAAAAAMCAgD+/v8A/f39AP7+/wACAgIA///8AAICAgD+/f4ABAICAPoAAAABAgIAAgICAPr6+QD7/fwAEAwQAPb4+QD5+v0ACgYIAPb7+QAJBwsA//r4AAEAAAD2+fYA+Pz5AAMBAQD4+vkAAAD/AP7+/gACAQIAAQECAP7+/AAIBQcA9fbyAAwACQD9/gAAAwMCAPv8/QD8/f0A+vz6AAEAAAAEAgMA/f//APf4+AD/AP8A/P/9AP7/AAD7/fwADQcJAPz9/QD7/f0ABgQFAAYAAAALCAoAAQACAAcICQD6/fwABAQEAO7z7wABAgEAEw4QAAD+/wACAAEA9/r7AP7+/wDu9PIABwYIAAoGCQDs8vAAAwIDAPb7+ADz+fQABQIEABAGDgAA//8A/f79AAcDBgACAQEAAAAAAAIBAQANCQoABQQFAPv7+wD4+fgA8vf0APv9/QADAQEADgoMAAIBAAACAQAA//8AAP3+/AABAQEAAAECAAMDAwACAQEADQgJAP///wD8/v0A9vr6APz+/QDz+/cAAQABAP///wD///8A/v/+AAYEBgAAAAEAAAEAAAkDBgD+//4ABwMEAAkFBQAFAQIABAAAAAAAAAAAAgICAP///wD/AAAAAAEAAAAAAQD/AAAAAAAAAAAAAAAAAAAAAQEBAP/+/wACAgMAAgICAP///wABAQEAAQAAAAEAAAAAAP8A/v79AAUEBQAA/v8AAQEBAAAAAAD9/f0ABQUFAAAAAAD///8AAAAAAAACAwD//v8AAAAAAP///wAAAAEAAgICAAEBAAD+/v4A/v3/AAQDAQABAQAA///+AP0AAAAFAgQA/gD+AAIAAQD9/gAAAwIBAP7/AQACAQIA/f7/AP8BAAAAAf8AAP//AAIBAAABAQAA/v8BAAAA/wD9AP8AAgMBAAECAQD+//4AAAD/APz+/wAAAP8A////AP///wD+//4A/v3+AP/+/gD+/v8A/f7+AP39/gD8/P0A//8AAP39/gD7+v0A/P3+AP39/gD9/gAA/P3/APz9/gD7/f8A+/3+APv9AAD7/v4A/P//AP7//wD+//8A/wAAAAAAAQABAQEA/wAAAAECAQD+/f8AAgICAAEAAAD+/v4ABAQDAAD//wD///4AAQEDAP8AAAD+//4AAAAEAP7//wD8/f0AAwIDAPz9/QADAwEA/P39AAMAAwD+/wAAAAD/AP7//wD+/gAA//8AAP8AAQABAf8A/wABAP8BAAD//v8A/v7+AP7+AgABAQEA////AP7+/wAA/wAAAQABAAAAAAD//wAA/v4AAAAA/gD+/v4A////AAD//wD///8A////AP79/gD+/f8AAQEBAAICAgD9/fwABAQDAPr7/QAAAAAA//8BAAABAAD9/f4AAAACAAIAAQD+AQEAAAACAAMCAwD+/v4A/f7+AAoHCgD2+v0A/wEEAAYGBAD//v4A+/39APj7+gAEAwQA/f38APP59gD8/v0ABQMEAPT59QALCAoA8vf0AAYDBAACAQIABwQGAPr8+wAGAwQA/f79APT49gABAQEAAP8BAPv++wD8/v0AFQwRAAECAQD4+PgAAAAAAPf7+gAIBAcA+vz7AAECAwAFAwQA/v7/AP7//gACAgEAFA0RAAIBAwD9//4A+Pn3AP79/QDw9/QACAQGAA8MDgD+/v4A+/z8AAkHCQAEA/oA+Pr/AAwICQALCQsA7fHxAAgHBgDs9PAABQMEABsPFQD+/f4AAQEBAP8AAAAIBgcABgQDAAIAAQAAAQEAAP8AAP///QDw9PIA+v38APv8+gABAQEACwcIAAUDBAD2+vgA+fv7AAoGBwANCAkA+vsCAAgDBAACAwIA9fj2AP3+/wAA/wAA/v79AAACAQAKBgUA/gAFAAX8AwD///8A9/v7APz//gAA/gAA/AD+APz9/QAAAAAA+//9APv8/AAAAP8AAQAAAAQCAwAEAgICAP39/QAAAAAAAAIBAP/+/gD//v8AAQECAAICAgD+/v4AAAAAAP///wD9/f0ABQIDAP///gAAAAEAAgICAAH//wAA//8AAAAAAAD//wAAAAEAAAAAAAD/AAD//gAAAgIBAAIBAgD+/f4AAgMCAP///wABAQEAAQD/AAD//wABAAAA////AAIAAAD//wAA/wD/AAAAAAACAgAAAAAAAP/+/wACAgMA///9APz8/QAEBAMA+/39AAT/AAD+/gEAAgICAAIC/wABAQAA/gEAAAEAAAAAAP8A/wEBAP8A/gAAAAAAAgIBAAEBAAAA/wIAAP7/AP///wABAQAAAAD/AP7+/gD/AAAAAQAAAP7+/wD+/wAA/f3/AAD/AAD7/P4A/v7/AP39AAD9/f0A/Pz+AP7+AAD8/P0A/f0AAPr8/gD7/P8A/f4AAPz9/wD7/v8A/f4AAPz9/gD7/f4A+/8AAPz+/wD/AAEAAAABAP///wAAAAAA/v3/AAEBAwAAAAAAAAAAAAEBAQABAAAAAAEBAAAAAQD+/v8AAAMCAP//AAD+/v4A/wAEAAAAAQD/AQEAAgMDAP//AAD+/wAA/v39AAIBAgD+/v8A//8AAP8AAAD//wEAAAAAAAAAAAAAAAEAAAIBAAH+AAAA/f4AAgL+AAAAAAAAAAAAAQAAAPz9AQAAAAAA//8BAAMDAgAB//8A///+AAAAAQD///8A//3/AP7+AAD9/f4A/fz+APz9+wAEBAQA///+AP7+/gABAQIAAgEAAP3/AAADAwIA/Pv9AAIBAgD7+/wAAgEDAP4AAQD+/gEAAQIBAP//AQAGAwgA+P39APz8/AAKCAkA/f38APP29QD9//8A/v78AP39/AAAAAAA9/z6AAQCBAD9/v8ABgMBAAQDBAAGAwYAAgH/APr8/AABAAEA9vr3AAoFBwD9/f0AAAH+APr9/AABAQIA//8AAP///wAKCQsA7fLuAPr9+gAKBQkAAgIBAP3//wD8/v0A/v/9APn7+QADAgQADwgKAAECAwD8/f4A+Pn3AAYFBQD6/fsA8vXyABAMEAAIBQYABwUGAPb5+AAEBAUAAAAAAAQEBQAMCgsADgwMAOru7QAJBwcA8ff0AA8IDQAFAgMAAgABAAYGBgD4+voADAoKAAUDBAD9/fsA+vv6AAABAQAGBgcA9Pf4APb6+QADAQEAAgEBAP4A/wD6/PwA/gD/AP///wAGBAQAAAAAAPb6+wD6/fsA+vj2AP7//QD9//0AAQACAAD7AAAAAAAA+/39AP7+/gD9AP8AAAEBAAEAAAD+//8A/P/+APz//gD9+v4AAAD/AP8AAAAAAP8AAwEDAAMBAQAEAQIA/P/9AAT///8AAgICAAAAAAD+/v8AAQAAAAAAAgAA/wAA////AAAAAAAAAAAAAQEBAAEBAQAA/wAAAQMBAAIAAQAA/wAAAAEAAAEBAQAAAAAAAQAAAAD/AAAB/wAAAgEBAAEAAAD+/v4AAQEBAAMCAgAA/v8AAQEBAAAA/wD//f4AAQD/AAD/AQACAAEA/wD/AAMCAQD//wAA/P39AAIDAQABAAAAAQEBAP///wACAgEAAP8AAP39/gABAgEA/QD/AAEAAAD///4AAf8CAP7+/wADAwIA/wD/AP///wD/AQAA////AAAA/gAAAAMAAQEBAP7//QABAQAAAAEAAAAAAAD+/v4A///+AAABA
```
