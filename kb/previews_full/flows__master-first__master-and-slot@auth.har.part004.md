### flows/master-first__master-and-slot@auth.har (part 004)

```har
\",1)(1,Oa,3,4,\"div\",2),c&2&&(P(\"ngIf\",m.isImageType()),y(),P(\"ngIf\",!m.isImageType()))},dependencies:[pe,gi,xt,gr,mr],styles:[\"[_nghost-%COMP%]{display:block}.rounded.leaflet-container[_nghost-%COMP%], .rounded[_nghost-%COMP%]   .map-image[_ngcontent-%COMP%]{border-radius:16px;box-shadow:0 0 1px #00247f3d}[_nghost-%COMP%]   .map-image[_ngcontent-%COMP%]{object-fit:cover;object-position:center}[_nghost-%COMP%]     .leaflet-pane, [_nghost-%COMP%]     .leaflet-bottom, [_nghost-%COMP%]     .leaflet-top, [_nghost-%COMP%]     .leaflet-right, [_nghost-%COMP%]     .leaflet-left{z-index:1!important}[_nghost-%COMP%]   .static-map[_ngcontent-%COMP%]{position:relative;pointer-events:none;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:1}\"],changeDetection:0}));let a=f;return a})();var Lr=(()=>{let f=class f extends Li{constructor(c,m){super(c);d(this,\"modalService\");d(this,\"trackingService\");d(this,\"feedbackMessage\",new ir(\"\",[er.required]));this.modalService=c,this.trackingService=m}ngOnInit(){this.trackingService.track({type:ee.Action.view,element:{type:\"popup\",name:\"salon_comment_popup\"}})}confirm(){this.close(this.feedbackMessage.value)}trackFocusOut(){this.trackingService.track({type:\"input\",element:{type:\"field\",name:\"salon_comment_field\",text:this.feedbackMessage.value}})}};d(f,\"\\u0275fac\",function(m){return new(m||f)(st(_e),st(ki))}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ng-component\"]],standalone:!0,features:[di,it],decls:12,vars:17,consts:[[1,\"header\"],[1,\"text\"],[1,\"description-input\"],[3,\"focusout\",\"formControl\",\"type\",\"minRows\",\"maxLength\",\"placeholder\"],[1,\"footer\"],[1,\"modal-button\",3,\"click\",\"title\",\"disabled\"]],template:function(m,g){m&1&&(w(0,\"div\",0),H(1),A(2,\"translate\"),C(),w(3,\"div\",1),H(4),A(5,\"translate\"),C(),w(6,\"div\",2)(7,\"ui-kit-input\",3),A(8,\"translate\"),G(\"focusout\",function(){return g.trackFocusOut()}),C()(),w(9,\"div\",4)(10,\"ui-kit-button\",5),A(11,\"translate\"),G(\"click\",function(){return g.confirm()}),C()()),m&2&&(y(),at(\" \",D(2,9,\"altegio_feedback.title\"),\"\\n\"),y(3),at(\" \",D(5,11,\"altegio_feedback.description\"),\"\\n\"),y(3),P(\"formControl\",g.feedbackMessage)(\"type\",\"multiline\")(\"minRows\",3)(\"maxLength\",300)(\"placeholder\",D(8,13,\"altegio_feedback.input_placeholder\")),y(3),P(\"title\",D(11,15,\"altegio_feedback.submit_button\"))(\"disabled\",g.feedbackMessage.invalid))},dependencies:[Ti,rr,ge,me,It,Ot,Pi,wi,bi],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;padding:0 16px;color:var(--y-core-color-text-primary);font-style:normal;font-weight:400;font-size:16px;line-height:24px}.header[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px;text-align:center}.text[_ngcontent-%COMP%]{padding-top:8px;text-align:center}.description-input[_ngcontent-%COMP%]{padding-top:16px}.footer[_ngcontent-%COMP%]{padding:40px 0 16px}']}));let a=f;return a})();function Ea(a,f){if(a&1){let _=ft();w(0,\"div\",9)(1,\"div\",10),H(2),A(3,\"translate\"),C(),w(4,\"div\",11)(5,\"ui-kit-switch\",12)(6,\"div\",13),H(7),A(8,\"translate\"),C()()(),w(9,\"div\",14),G(\"click\",function(){ot(_);let c=B();return rt(c.consents.ad_personalization=!c.consents.ad_personalization)}),w(10,\"ui-kit-switch\",12)(11,\"div\",13),H(12),A(13,\"translate\"),C()()(),w(14,\"div\",14),G(\"click\",function(){ot(_);let c=B();return rt(c.consents.ad_user_data=!c.consents.ad_user_data)}),w(15,\"ui-kit-switch\",12)(16,\"div\",13),H(17),A(18,\"translate\"),C()()(),w(19,\"div\",14),G(\"click\",function(){ot(_);let c=B();return rt(c.consents.ad_storage=!c.consents.ad_storage)}),w(20,\"ui-kit-switch\",12)(21,\"div\",13),H(22),A(23,\"translate\"),C()()(),w(24,\"div\",14),G(\"click\",function(){ot(_);let c=B();return rt(c.consents.analytics_storage=!c.consents.analytics_storage)}),w(25,\"ui-kit-switch\",12)(26,\"div\",13),H(27),A(28,\"translate\"),C()()()()}if(a&2){let _=B();y(2),at(\" \",D(3,21,\"consent_banner.preferences_header\"),\" \"),y(3),P(\"checked\",!0)(\"disabled\",!0),y(),W(\"data-locator\",\"consent-banner-preferences-option-cookies\"),y(),at(\" \",D(8,23,\"consent_banner.preferences_option_cookies\"),\" \"),y(3),P(\"checked\",_.consents.ad_personalization)(\"disabled\",!1),y(),W(\"data-locator\",\"consent-banner-preferences-option-ad_personalization\"),y(),at(\" \",D(13,25,\"consent_banner.preferences_option_ad_personalization\"),\" \"),y(3),P(\"checked\",_.consents.ad_user_data)(\"disabled\",!1),y(),W(\"data-locator\",\"consent-banner-preferences-option-ad_user_data\"),y(),at(\" \",D(18,27,\"consent_banner.preferences_option_ad_user_data\"),\" \"),y(3),P(\"checked\",_.consents.ad_storage)(\"disabled\",!1),y(),W(\"data-locator\",\"consent-banner-preferences-option-ad_storage\"),y(),at(\" \",D(23,29,\"consent_banner.preferences_option_ad_storage\"),\" \"),y(3),P(\"checked\",_.consents.analytics_storage)(\"disabled\",!1),y(),W(\"data-locator\",\"consent-banner-preferences-option-analytics_storage\"),y(),at(\" \",D(28,31,\"consent_banner.preferences_option_analytics_storage\"),\" \")}}function Ba(a,f){if(a&1){let _=ft();w(0,\"ui-kit-button\",15),A(1,\"translate\"),G(\"click\",function(){ot(_);let c=B();return rt(c.saveSettings())}),C()}if(a&2){let _=B();P(\"title\",D(1,3,\"consent_banner.confirm_button\"))(\"type\",_.buttonType.secondary),W(\"data-locator\",\"consent-banner-save-btn\")}}var gl=(()=>{let f=class f{constructor(){d(this,\"privacyPolicyLink\",\"https://alteg.io/en/info/privacy\");d(this,\"consents\",ar);d(this,\"consentChange\",new hi);d(this,\"buttonType\",De);d(this,\"ButtonType\",De)}allowAll(){this.consents=hr,this.saveSettings()}disableAll(){this.consents={analytics_storage:!1,ad_storage:!1,ad_user_data:!1,ad_personalization:!1},this.saveSettings()}saveSettings(){this.consentChange.emit(this.consents)}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-gdpr-consent-banner\"]],inputs:{privacyPolicyLink:\"privacyPolicyLink\",consents:\"consents\"},outputs:{consentChange:\"consentChange\"},standalone:!0,features:[it],decls:17,vars:21,consts:[[1,\"banner-consent\"],[1,\"banner-header\"],[1,\"banner-subheader\"],[\"target\",\"_blank\",3,\"href\"],[1,\"banner-subheader-buttons\"],[1,\"btn\",\"banner-allow-all-btn\",3,\"click\",\"title\"],[1,\"btn\",\"banner-disable-all-btn\",3,\"click\",\"title\",\"type\"],[\"class\",\"banner-preferences\",4,\"ngIf\"],[\"class\",\"banner-confirm-btn\",3,\"title\",\"type\",\"click\",4,\"ngIf\"],[1,\"banner-preferences\"],[1,\"banner-preferences-header\"],[1,\"banner-preferences-option\"],[3,\"checked\",\"disabled\"],[1,\"banner-preferences-option-toggle-title\"],[1,\"banner-preferences-option\",3,\"click\"],[1,\"banner-confirm-btn\",3,\"click\",\"title\",\"type\"]],template:function(c,m){c&1&&(w(0,\"div\",0)(1,\"div\",1),H(2),A(3,\"translate\"),C(),w(4,\"p\",2),H(5),A(6,\"translate\"),w(7,\"a\",3),H(8),A(9,\"translate\"),C()(),w(10,\"div\",4)(11,\"ui-kit-button\",5),A(12,\"translate\"),G(\"click\",function(){return m.allowAll()}),C(),w(13,\"ui-kit-button\",6),A(14,\"translate\"),G(\"click\",function(){return m.disableAll()}),C()(),Q(15,Ea,29,33,\"div\",7)(16,Ba,2,5,\"ui-kit-button\",8),C()),c&2&&(y(2),at(\" \",D(3,11,\"consent_banner.header_1\"),\" \"),y(3),at(\" \",D(6,13,\"consent_banner.subheader_1\"),\" \"),y(2),P(\"href\",m.privacyPolicyLink,ui),y(),Ft(D(9,15,\"consent_banner.subheader_privacy_policy\")),y(3),P(\"title\",D(12,17,\"consent_banner.subheader_buttons_allow\")),W(\"data-locator\",\"consent-banner-allow-all-btn\"),y(2),P(\"title\",D(14,19,\"consent_banner.subheader_buttons_disable\"))(\"type\",m.ButtonType.secondary),W(\"data-locator\",\"consent-banner-disable-all-btn\"),y(2),P(\"ngIf\",!1),y(),P(\"ngIf\",!1))},dependencies:[sr,It,Ot,ge,me],styles:['@charset \"UTF-8\";.banner-consent[_ngcontent-%COMP%]{padding:0 25px 25px}.banner-consent[_ngcontent-%COMP%]   .banner-header[_ngcontent-%COMP%]{text-align:center;font-style:normal;font-weight:700;font-size:20px;line-height:24px;word-break:break-word}.banner-consent[_ngcontent-%COMP%]   .banner-subheader[_ngcontent-%COMP%]{margin-top:8px;text-align:center;font-style:normal;font-weight:400;font-size:16px;line-height:24px}.banner-consent[_ngcontent-%COMP%]   .banner-subheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_dark)}.banner-consent[_ngcontent-%COMP%]   .banner-subheader-buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between;gap:8px;margin:40px 0 16px;width:100%}.banner-consent[_ngcontent-%COMP%]   .banner-subheader-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1;margin:0 auto;white-space:nowrap}.banner-consent[_ngcontent-%COMP%]   .banner-preferences-header[_ngcontent-%COMP%]{margin:40px 0 0;font-style:normal;font-weight:700;font-size:20px;line-height:24px}.banner-consent[_ngcontent-%COMP%]   .banner-preferences-option[_ngcontent-%COMP%]{cursor:pointer;width:100%;word-break:break-all}.banner-consent[_ngcontent-%COMP%]   .banner-preferences-option[_ngcontent-%COMP%]:not(:first-child){margin-top:24px}.banner-consent[_ngcontent-%COMP%]   .banner-confirm-btn[_ngcontent-%COMP%]{display:block;width:100%;margin-top:40px}']}));let a=f;return a})();var wl=(()=>{let f=class f{constructor(){d(this,\"name\");d(this,\"type\",\"svg\");d(this,\"size\")}get fontSize(){return this.size!==0&&ur(this.size)||\"24px\"}get backgroundImage(){let l=\"/assets/icon/\".concat(this.name,\".\").concat(this.type);return\"url(\".concat(l,\")\")}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-icon\"]],hostVars:4,hostBindings:function(c,m){c&2&&de(\"font-size\",m.fontSize)(\"background-image\",m.backgroundImage)},inputs:{name:\"name\",type:\"type\",size:\"size\"},standalone:!0,features:[it],decls:0,vars:0,template:function(c,m){},styles:[\"[_nghost-%COMP%]{display:inline-block;background-repeat:no-repeat;background-size:1em 1em;width:1em;height:1em}\"],changeDetection:0}));let a=f;return a})();function Za(a,f){if(a&1&&(_t(0,\"ui-kit-form-input\",3),A(1,\"translate\")),a&2){let _=B();P(\"formControl\",_.branchSearch)(\"placeholder\",D(1,3,\"branch.search\"))(\"dataLocator\",\"filial_search_input\")}}function Aa(a,f){if(a&1){let _=ft();w(0,\"div\",4),G(\"click\",function(){let c=ot(_).$implicit,m=B();return rt(m.clickOnBranch(c))}),w(1,\"ui-kit-branch-card\",5),A(2,\"async\"),_t(3,\"ui-kit-static-map\",6),C()()}if(a&2){let _=f.$implicit,l=B();Gt(\"disabled\",_.bookingDisabled),W(\"data-locator\",\"filial_card_\"+_.id),y(),P(\"companyId\",_.id+\"\")(\"title\",_.title)(\"address\",_.address)(\"disabled\",_.bookingDisabled)(\"highlightedText\",D(2,11,l.branchSearchValue$))(\"selectIconSrc\",l.selectIconSrc),y(2),P(\"company\",_)(\"type\",l.mapType)}}var Kl=(()=>{let f=class f{constructor(){d(this,\"hasSearch\");d(this,\"companiesLoading\");d(this,\"mapType\");d(this,\"companies\");d(this,\"selectIconSrc\",\"assets/icon/select-grey.svg\");d(this,\"branchClick\",new hi);d(this,\"branchSearchValue$\");d(this,\"searchedCompanies$\");d(this,\"branchSearch\",new nr);d(this,\"activityRecordType\",2);d(this,\"companies$\",new si([]))}ngOnInit(){this.branchSearchValue$=this.branchSearch.valueChanges.pipe(Be(Mi),Fo(\"\"),No(1),Zo()),this.searchedCompanies$=Ao([this.companies$,this.branchSearchValue$]).pipe(jt(([l,c])=>this.filterCompaniesBySearchedString(l,c)))}ngOnChanges(l){l.companies&&this.companies$.next(this.companies)}clickOnBranch(l){this.branchClick.next(l)}filterCompaniesBySearchedString(l,c){return(l||[]).filter(m=>{let g=m.title.toLowerCase(),N=c.toLowerCase(),K=m.address.toLowerCase();return g.includes(N)||K.includes(N)})}};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275cmp\",J({type:f,selectors:[[\"ui-kit-branch-list\"]],inputs:{hasSearch:\"hasSearch\",companiesLoading:\"companiesLoading\",mapType:\"mapType\",companies:\"companies\",selectIconSrc:\"selectIconSrc\"},outputs:{branchClick:\"branchClick\"},standalone:!0,features:[ue,it],decls:4,vars:4,consts:[[\"class\",\"search-input\",\"type\",\"search\",3,\"formControl\",\"placeholder\",\"dataLocator\",4,\"ngIf\"],[\"class\",\"card\",3,\"disabled\",\"click\",4,\"ngFor\",\"ngForOf\"],[1,\"brand-link\"],[\"type\",\"search\",1,\"search-input\",3,\"formControl\",\"placeholder\",\"dataLocator\"],[1,\"card\",3,\"click\"],[3,\"companyId\",\"title\",\"address\",\"disabled\",\"highlightedText\",\"selectIconSrc\"],[3,\"company\",\"type\"]],template:function(c,m){c&1&&(Q(0,Za,2,5,\"ui-kit-form-input\",0)(1,Aa,4,13,\"div\",1),A(2,\"async\"),_t(3,\"ui-kit-brand-link\",2)),c&2&&(P(\"ngIf\",m.hasSearch),y(),P(\"ngForOf\",D(2,2,m.searchedCompanies$)))},dependencies:[Ti,or,wr,Ir,Pr,pe,It,Ot,Pi,wi,bi,mi,xt],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}.search-input[_ngcontent-%COMP%]{margin-top:8px;display:block;margin-bottom:16px}.card[_ngcontent-%COMP%]{cursor:pointer;border:1px var(--y-core-color-stroke-primary) solid;border-radius:12px}.card[_ngcontent-%COMP%] + .card[_ngcontent-%COMP%]{margin-top:16px}.card.disabled[_ngcontent-%COMP%]{cursor:default}.brand-link[_ngcontent-%COMP%]{padding-top:40px}'],changeDetection:0}));let a=f;return a})();var Jl=(()=>{let f=class f{};d(f,\"\\u0275fac\",function(c){return new(c||f)}),d(f,\"\\u0275mod\",Wo({type:f})),d(f,\"\\u0275inj\",Ho({}));let a=f;return a})();export{Da as a,Kl as b,xr as c,wr as d,Pr as e,Cr as f,Lt as g,Ir as h,gl as i,wl as j,Jl as k};\n/*! Bundled license information:\n\nleaflet/dist/leaflet-src.js:\n  (* @preserve\n   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com\n   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade\n   *)\n*/\n"
          },
          "redirectURL": "",
          "headersSize": 661,
          "bodySize": 61576,
          "_transferSize": 62237,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.857Z",
        "time": 469.67900008894503,
        "timings": {
          "blocked": 222.8260000949204,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.29999999999998295,
          "wait": 208.2349999586642,
          "receive": 38.318000035360456,
          "_blocked_queueing": 2.795000094920397,
          "_blocked_proxy": 13.860999999999999,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "425014",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-NZOI5B53.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7084"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b35133fa0007a5-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-16fd\""
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
              "value": "2fdd45a863d4206e0fc3e33c03c95805"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5885,
            "mimeType": "application/javascript",
            "compression": 3454,
            "text": "import{r as T,w as _}from\"./chunk-IV3KQJLV.js\";import{Ec as S,N as v,bd as A}from\"./chunk-6FGVQ7PR.js\";import{Ea as f,hd as y,za as b}from\"./chunk-KO722YSM.js\";import{a as k}from\"./chunk-POJFEGQU.js\";import{g as s,i as w}from\"./chunk-JV5WWF5Q.js\";var r=function(c){return c.google=\"google\",c.facebook=\"facebook\",c}(r||{});var g=(()=>{let a=class a{static appendScript(e){return new Promise((t,i)=>{let o=document.createElement(\"script\");o.type=\"text/javascript\",o.src=e,o.async=!1,o.onload=()=>{setTimeout(()=>t(),this.defaultTimeout)},o.onerror=d=>{setTimeout(()=>i(),this.defaultTimeout)},document.getElementsByTagName(\"head\")[0].appendChild(o)})}static appendScriptFromFile(e){let t=URL.createObjectURL(e);return a.appendScript(t).finally(()=>{URL.revokeObjectURL(t)})}static appendHtml(e){document.getElementsByTagName(\"body\")[0].insertAdjacentHTML(\"beforeend\",e)}static appendFacebook(e){(function(t,i,o,d,n,l,u){t.fbq||(n=t.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)},t._fbq||(t._fbq=n),n.push=n,n.loaded=!0,n.version=\"2.0\",n.queue=[],l=i.createElement(o),l.async=!0,l.src=d,u=i.getElementsByTagName(o)[0],u.parentNode.insertBefore(l,u))})(window,document,\"script\",\"https://connect.facebook.net/en_US/fbevents.js\"),window.fbq(\"init\",e),window.fbq(\"track\",\"PageView\"),window.fbq.disablePushState=!0}};s(a,\"defaultTimeout\",1500);let c=a;return c})();var B=(()=>{let a=class a{constructor(e,t,i){s(this,\"route\");s(this,\"widgetApiHelperService\");s(this,\"gdpConsentBannerService\");s(this,\"eventQueue\",{});s(this,\"bookform\");s(this,\"ab\",{enabled:!1,group:0});s(this,\"enabled\",!1);s(this,\"siteURI\",document.referrer);s(this,\"parser\",document.createElement(\"a\"));s(this,\"siteHostName\");if(this.route=e,this.widgetApiHelperService=t,this.gdpConsentBannerService=i,this.parser.href=this.siteURI,this.siteHostName=this.parser.host,this.iWillSendPostmessages()){let o=d=>{d.origin!==this.siteURI||(d.data||{}).action};window.addEventListener(\"message\",o,!1)}window.onbeforeunload=()=>{this.reachGoal(\"widget_closed\")}}init(e,t,i=!1){this.bookform=e,this.enabled=i,t&&t.enabled&&(this.ab.enabled=!0,this.ab.group=t.group),i&&this.loadScripts()}pushToQueue(e,t=\"\",i={}){Array.isArray(this.eventQueue[e])||(this.eventQueue[e]=[]),this.eventQueue[e].push({target:t,params:i})}getFromQueue(e){if(Array.isArray(this.eventQueue[e]))return this.eventQueue[e].shift()}flushQueue(e,t){let i=this.getFromQueue(e);for(;i!==void 0;)t(i.target,i.params),i=this.getFromQueue(e)}reachGoal(e=\"\",t={}){var d;y()&&console.info(\"reachGoal called with:\",e,t);let i=((d=this.widgetApiHelperService.additionalOptions)==null?void 0:d.eventHooks)||{};typeof i[e]==\"function\"&&i[e](t),this.iWillSendPostmessages()&&window.top.postMessage({action:e,params:t},this.siteURI);let o=new CustomEvent(\"onSendAnalytics\",{detail:{target:e,params:t}});window.dispatchEvent(o),this.enabled&&this.bookform&&(this.tryToSendToGoogle(e,t),this.tryToSendToFacebook(e,t),this.tryToSendToFirebase(e,t))}loadScripts(){this.initGoogleScript().then(()=>{this.flushQueue(r.google,(e,t)=>{window.gtag(\"event\",e,t)})}),this.initFacebookScript().then(()=>{this.flushQueue(r.facebook,e=>{window.fbq(\"trackCustom\",e,e)})})}resolveGoogleAnalyticsCustomMap(){let e={},t=this.bookform.google_analytics_client_id_index;return t&&(e[\"dimension\".concat(t)]=\"clientId\"),e}initGoogleScript(){return w(this,null,function*(){return new Promise(e=>{let t=this.getAnalyticParam(r.google);t!==void 0?g.appendScript(\"https://www.googletagmanager.com/gtag/js?id=\".concat(t)).then(()=>{window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)};let i=this.gdpConsentBannerService.getUserConsents();window.gtag(\"consent\",\"default\",this.gdpConsentBannerService.isUserInEU()?{ad_storage:i!=null&&i.ad_storage?\"granted\":\"denied\",ad_user_data:i!=null&&i.ad_storage?\"granted\":\"denied\",ad_personalization:i!=null&&i.ad_storage?\"granted\":\"denied\",analytics_storage:i!=null&&i.ad_storage?\"granted\":\"denied\"}:{ad_storage:\"granted\",ad_user_data:\"granted\",ad_personalization:\"granted\",analytics_storage:\"granted\"}),window.gtag(\"js\",new Date),T.isInIframe()?window.gtag(\"config\",t,{custom_map:this.resolveGoogleAnalyticsCustomMap(),cookie_flags:\"samesite=none;secure\"}):window.gtag(\"config\",t,{custom_map:this.resolveGoogleAnalyticsCustomMap()}),e()}).catch(i=>{console.error(i)}):e()})})}initFacebookScript(){return new Promise(e=>{let t=this.getAnalyticParam(r.facebook);t!==void 0&&(g.appendFacebook(t),g.appendHtml('<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\\nsrc=\"https://www.facebook.com/tr?id='.concat(t,'&ev=PageView&noscript=1\"\\n/></noscript>'))),e()})}tryToSendToGoogle(e=\"\",t={}){window.gtag!==void 0?window.gtag(\"event\",e,t):this.getAnalyticParam(r.google)&&this.pushToQueue(r.google,e,t)}tryToSendToFacebook(e=\"\",t={}){window.fbq!==void 0?window.fbq(\"trackCustom\",e,e):this.getAnalyticParam(r.facebook)&&this.pushToQueue(r.facebook,e,t)}tryToSendToFirebase(e=\"\",t={}){k.isNativePlatform()&&S.logEvent({name:e,params:t})}getAnalyticParam(e){var n,l,u,h,p,m;let t=this.route.snapshot.queryParams[e];if(typeof t==\"string\")return t;let o=(u=(l=(n=this.widgetApiHelperService)==null?void 0:n.analytics)==null?void 0:l.facebook)!=null?u:this.bookform.facebook_pixel_id,d=(m=(p=(h=this.widgetApiHelperService)==null?void 0:h.analytics)==null?void 0:p.google)!=null?m:this.bookform.google_analytics_id;switch(e){case r.facebook:return o!==void 0&&o!==\"\"?o:void 0;case r.google:return d||void 0;default:return}}iWillSendPostmessages(){return!!(window.top!==window&&this.siteHostName&&this.siteHostName.length&&this.siteHostName!==location.host&&window.top&&typeof window.top.postMessage==\"function\")}};s(a,\"\\u0275fac\",function(t){return new(t||a)(f(v),f(_),f(A))}),s(a,\"\\u0275prov\",b({token:a,factory:a.\\u0275fac,providedIn:\"root\"}));let c=a;return c})();export{g as a,B as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2431,
          "_transferSize": 3091,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.857Z",
        "time": 425.51700002513826,
        "timings": {
          "blocked": 223.1639999491498,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2330000000000041,
          "wait": 201.05099996875225,
          "receive": 1.0690001072362065,
          "_blocked_queueing": 3.5249999491497874,
          "_blocked_proxy": 13.311,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "425011",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-5GELTLFF.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7084"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b35133fc73079d-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-1fec\""
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
              "value": "9a68107841769d3a664d833ef7f136b5"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 8172,
            "mimeType": "application/javascript",
            "compression": 4735,
            "text": "import{m as A}from\"./chunk-IV3KQJLV.js\";import{Qb as q,c as H,d as K,e as $}from\"./chunk-6FGVQ7PR.js\";import{Ac as U,Fb as l,Gb as V,Jc as B,Ka as m,Kc as h,Pc as N,Rc as G,Ua as M,Ub as k,Va as S,Wa as R,Wb as c,Xa as I,Xb as g,Zb as p,ec as d,fc as f,gc as _,hb as L,kc as D,oc as E,pc as u,qc as T,rc as z,ya as P,yc as w,zc as F}from\"./chunk-KO722YSM.js\";import{g as r}from\"./chunk-JV5WWF5Q.js\";var C,X=new Uint8Array(16);function y(){if(!C&&(C=typeof crypto<\"u\"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<\"u\"&&typeof msCrypto.getRandomValues==\"function\"&&msCrypto.getRandomValues.bind(msCrypto),!C))throw new Error(\"crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported\");return C(X)}var Z=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function J(n){return typeof n==\"string\"&&Z.test(n)}var j=J;var a=[];for(x=0;x<256;++x)a.push((x+256).toString(16).substr(1));var x;function Q(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=(a[n[e+0]]+a[n[e+1]]+a[n[e+2]]+a[n[e+3]]+\"-\"+a[n[e+4]]+a[n[e+5]]+\"-\"+a[n[e+6]]+a[n[e+7]]+\"-\"+a[n[e+8]]+a[n[e+9]]+\"-\"+a[n[e+10]]+a[n[e+11]]+a[n[e+12]]+a[n[e+13]]+a[n[e+14]]+a[n[e+15]]).toLowerCase();if(!j(i))throw TypeError(\"Stringified UUID is invalid\");return i}var W=Q;function Y(n,e,i){n=n||{};var t=n.random||(n.rng||y)();if(t[6]=t[6]&15|64,t[8]=t[8]&63|128,e){i=i||0;for(var o=0;o<16;++o)e[i+o]=t[o];return e}return W(t)}var O=Y;function et(n,e){if(n&1){let i=D();I(),d(0,\"svg\",2),E(\"click\",function(){let o=S(i).index,s=u();return R(s.selectStar(o+1))}),d(1,\"defs\")(2,\"linearGradient\",3),_(3,\"stop\",4)(4,\"stop\",5),f()(),_(5,\"path\",6),f()}if(n&2){let i=e.$implicit,t=u();p(\"selected\",i.isSelected)(\"disabled\",t.disabled),g(\"ngClass\",t.starClasses),c(\"data-locator\",i.dataLocator),l(2),g(\"id\",\"starGradient\"+i.uniqueId),l(),c(\"offset\",i.fillPercentage+\"%\"),l(),c(\"offset\",i.fillPercentage+\"%\"),l(),c(\"fill\",\"url(#starGradient\"+i.uniqueId+\")\")}}function nt(n,e){if(n&1&&(d(0,\"span\",7)(1,\"span\"),w(2),f(),d(3,\"span\"),w(4),N(5,\"wordNumeralCase\"),f()()),n&2){let i=e.ngIf,t=u();l(),c(\"data-locator\",t.commentsCountDataLocator),l(),U(\"\",i,\" \"),l(2),F(G(5,3,\"master.reviews\",i))}}var Ot=(()=>{let e=class e{constructor(){r(this,\"size\",\"medium\");r(this,\"disabled\",!1);r(this,\"commentsCount\");r(this,\"commentsCountDataLocator\");r(this,\"maxRating\",5);r(this,\"formValue\",null);r(this,\"ratingStarsInfo\",this.calculateRatings());r(this,\"formControlOnChange\",t=>{});r(this,\"formControlOnTouched\",()=>{})}get selectable(){return!this.disabled}get starClasses(){return{[\"size-\".concat(this.size)]:!0,selectable:this.selectable}}ngOnChanges(t){t.disabled&&this.setDisabledState(this.disabled),t.maxRating&&(this.ratingStarsInfo=this.calculateRatings())}selectStar(t){this.disabled||(this.formControlOnChange(t),this.formValue=t,this.ratingStarsInfo=this.calculateRatings(t),this.formControlOnTouched())}calculateRatings(t){let o=[];for(let s=1;s<this.maxRating+1;s++){let b=!!t&&t>=s,v=0;b?v=100:t&&Math.ceil(t)===s&&(v=(t-(s-1))*100),o.push({isSelected:b,dataLocator:\"rating_star_\".concat(b?\"active\":\"passive\",\"_\").concat(s),fillPercentage:v,uniqueId:O()})}return o}writeValue(t){if(t!==null&&t<0)throw new Error(\"Invalid value for rating input: '\".concat(t,\"'\"));this.formValue=t,this.formValue&&(this.ratingStarsInfo=this.calculateRatings(this.formValue))}registerOnChange(t){this.formControlOnChange=t}registerOnTouched(t){this.formControlOnTouched=t}setDisabledState(t){this.disabled=t}};r(e,\"\\u0275fac\",function(o){return new(o||e)}),r(e,\"\\u0275cmp\",m({type:e,selectors:[[\"ui-kit-rating\"]],hostVars:1,hostBindings:function(o,s){o&2&&c(\"data-locator-rating-comments-count\",s.commentsCount)},inputs:{size:\"size\",disabled:\"disabled\",commentsCount:\"commentsCount\",commentsCountDataLocator:\"commentsCountDataLocator\",maxRating:\"maxRating\"},standalone:!0,features:[B([{provide:q,useExisting:P(()=>e),multi:!0}]),M,h],decls:2,vars:2,consts:[[\"class\",\"star\",\"viewBox\",\"-1 -1 16 16\",\"fill\",\"none\",\"xmlns\",\"http://www.w3.org/2000/svg\",3,\"selected\",\"ngClass\",\"disabled\",\"click\",4,\"ngFor\",\"ngForOf\"],[\"class\",\"label\",4,\"ngIf\"],[\"viewBox\",\"-1 -1 16 16\",\"fill\",\"none\",\"xmlns\",\"http://www.w3.org/2000/svg\",1,\"star\",3,\"click\",\"ngClass\"],[\"x1\",\"-5%\",\"y1\",\"0%\",\"x2\",\"105%\",\"y2\",\"0%\",3,\"id\"],[1,\"gradient-fill-color\"],[1,\"gradient-empty-color\"],[\"d\",\"M6.65558 1.37995C6.78574 1.07771 7.21426 1.07771 7.34442 1.37995L8.35416 3.72466C8.58941 4.27095 9.10433 4.64505 9.69658 4.69998L12.2386 4.93574C12.5662 4.96614 12.6986 5.37369 12.4514 5.59087L10.5335 7.27575C10.0866 7.6683 9.88996 8.27362 10.0207 8.85385L10.582 11.3443C10.6544 11.6653 10.3077 11.9172 10.0247 11.7492L7.82966 10.4458C7.31824 10.1421 6.68177 10.1421 6.17034 10.4458L3.97526 11.7492C3.69231 11.9172 3.34562 11.6653 3.41797 11.3443L3.97927 8.85385C4.11004 8.27362 3.91336 7.6683 3.46651 7.27575L1.54858 5.59087C1.30136 5.37369 1.43378 4.96614 1.76144 4.93575L4.30342 4.69998C4.89567 4.64505 5.41059 4.27095 5.64584 3.72466L6.65558 1.37995Z\"],[1,\"label\"]],template:function(o,s){o&1&&k(0,et,6,10,\"svg\",0)(1,nt,6,6,\"span\",1),o&2&&(g(\"ngForOf\",s.ratingStarsInfo),l(),g(\"ngIf\",s.commentsCount))},dependencies:[A,H,$,K],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{padding-left:2px}[_nghost-%COMP%]   .star[_ngcontent-%COMP%]   .gradient-fill-color[_ngcontent-%COMP%]{stop-color:var(--y-core-color-calm-icon-yellow)}[_nghost-%COMP%]   .star[_ngcontent-%COMP%]   .gradient-empty-color[_ngcontent-%COMP%]{stop-color:var(--y-core-color-surface-tertiary-high)}[_nghost-%COMP%]   .star[_ngcontent-%COMP%]:not(.disabled){cursor:pointer}[_nghost-%COMP%]   .star.size-medium[_ngcontent-%COMP%]{width:16px;height:16px;margin:0}[_nghost-%COMP%]   .star.size-large[_ngcontent-%COMP%]{width:32px;height:32px;margin:0}[_nghost-%COMP%]   .star.size-extra-medium[_ngcontent-%COMP%]{width:24px;height:24px;margin:0}[_nghost-%COMP%]   .star.size-big[_ngcontent-%COMP%]{width:40px;height:40px;margin:4px}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{margin-left:8px;font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:var(--y-core-color-text-secondary)}'],changeDetection:0}));let n=e;return n})();var ot=[\"*\"],St=(()=>{let e=class e{constructor(t){r(this,\"elementRef\");r(this,\"hideScrollbar\",!1);this.elementRef=t}set scrollLeft(t){typeof t==\"number\"&&this.elementRef.nativeElement.scrollTo({left:t,behavior:\"smooth\"})}};r(e,\"\\u0275fac\",function(o){return new(o||e)(V(L))}),r(e,\"\\u0275cmp\",m({type:e,selectors:[[\"ui-kit-horizontal-scrollable\"]],hostVars:2,hostBindings:function(o,s){o&2&&p(\"hide-scrollbar\",s.hideScrollbar)},inputs:{scrollLeft:\"scrollLeft\",hideScrollbar:\"hideScrollbar\"},standalone:!0,features:[h],ngContentSelectors:ot,decls:2,vars:0,consts:[[1,\"flex-container\"]],template:function(o,s){o&1&&(T(),d(0,\"div\",0),z(1),f())},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%;max-width:600px;padding-left:16px;padding-right:16px;overflow-x:scroll;overflow-x:scroll!important;transform:translateZ(0);scrollbar-color:rgba(0,0,0,0) transparent;scrollbar-width:thin;transition:scrollbar-color .2s ease-out;transition:all .2s}[_nghost-%COMP%]:hover::-webkit-scrollbar-thumb{background-color:#0003}[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#0000004d}[_nghost-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_nghost-%COMP%]::-webkit-scrollbar-thumb{transition:background-color 2s ease-out;border-radius:6px}[_nghost-%COMP%]:hover{scrollbar-color:rgba(0,0,0,.2) transparent}[_nghost-%COMP%]   .flex-container[_ngcontent-%COMP%]{display:flex;gap:8px;width:max-content;min-width:max-content;max-width:100%}.hide-scrollbar[_nghost-%COMP%]{scrollbar-color:rgba(0,0,0,0) transparent!important}.hide-scrollbar[_nghost-%COMP%]:hover::-webkit-scrollbar-thumb{background-color:#0000!important}.hide-scrollbar[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#0000!important}'],changeDetection:0}));let n=e;return n})();export{O as a,Ot as b,St as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3437,
          "_transferSize": 4097,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.857Z",
        "time": 440.7280000159517,
        "timings": {
          "blocked": 225.99499996186793,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.242999999999995,
          "wait": 213.40899997188896,
          "receive": 1.0810000821948051,
          "_blocked_queueing": 3.7559999618679285,
          "_blocked_proxy": 13.199,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "425017",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-TXASR5LU.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7084"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b35134f992861c-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-1c66\""
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
              "value": "bef6f00448fc40beaff98cbbe8a8ef6a"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 7270,
            "mimeType": "application/javascript",
            "compression": 4418,
            "text": "import{e as Q}from\"./chunk-6FGVQ7PR.js\";import{Aa as M,E as T,Fb as x,Gb as a,Ka as A,Kc as H,La as D,Lb as U,Ma as l,Ua as h,Ub as N,Va as v,Wa as y,Wb as b,Xb as p,Yb as j,Zb as O,_b as P,cb as u,db as m,ec as C,fc as I,hb as d,j as F,kc as S,oc as V,pc as f,qa as L,yc as R,zb as E,zc as k}from\"./chunk-KO722YSM.js\";import{g as i}from\"./chunk-JV5WWF5Q.js\";function $(n){return typeof n!=\"number\"&&(n=parseFloat(n)),isNaN(n)?null:\"\".concat(n,\"px\")}function w(n,t){let s=$(n)||t;return s?{width:s,height:s}:null}function K(n,t){if(n&1){let s=S();C(0,\"img\",3),V(\"error\",function(){v(s);let e=f();return y(e.handleImgError())}),I()}if(n&2){let s=f();p(\"src\",s.urlLight,E),b(\"alt\",s.text)(\"data-locator\",\"avatar\")}}function Z(n,t){if(n&1){let s=S();C(0,\"img\",4),V(\"error\",function(){v(s);let e=f();return y(e.handleImgError())})(\"load\",function(){v(s);let e=f();return y(e.changeQuality())}),I()}if(n&2){let s=f();O(\"hide-before-loaded\",!s.highQualityReady),p(\"src\",s.url,E),b(\"alt\",s.text)(\"data-locator\",\"avatar\")}}var B=[\"no-master-sm.png\",\"no-master.png\"],et=(()=>{let t=class t{constructor(){i(this,\"urlLight\");i(this,\"url\");i(this,\"text\");i(this,\"size\",\"normal\");i(this,\"initialsFontSize\");i(this,\"round\",!1);i(this,\"bordered\",!1);i(this,\"currentQuality\",\"low\");i(this,\"urlValid\",!1)}get classIsImageMode(){return this.urlValid}get avatarDimensions(){switch(this.size){case\"normal\":return w(\"48px\");case\"big\":return w(\"64px\");default:return w(this.size)}}get highQualityReady(){return!this.urlLight||this.currentQuality===\"high\"}get hasAvatar(){return this.url!=null&&this.urlValid}get computedText(){if(this.hasAvatar||!this.text)return\"\";let[r,e]=this.text.split(\" \"),o=t.getFirstLetter(r),c=t.getFirstLetter(e);return[o,c].filter(Boolean).join(\"\")}static getFirstLetter(r){var e;return((e=r==null?void 0:r[0])==null?void 0:e.trim().toUpperCase())||\"\"}static avatarInException(r){let e=r.split(\"/\").pop();return B.includes(e)}handleImgError(){this.urlValid=!1}ngOnChanges(r){r.url&&(this.urlValid=!!this.url&&!t.avatarInException(this.url))}changeQuality(){this.currentQuality=\"high\"}};i(t,\"\\u0275fac\",function(e){return new(e||t)}),i(t,\"\\u0275cmp\",A({type:t,selectors:[[\"ui-kit-avatar\"]],hostVars:8,hostBindings:function(e,o){e&2&&(P(o.avatarDimensions),O(\"round\",o.round)(\"image-mode\",o.classIsImageMode)(\"bordered\",o.bordered))},inputs:{urlLight:\"urlLight\",url:\"url\",text:\"text\",size:\"size\",initialsFontSize:\"initialsFontSize\",round:\"round\",bordered:\"bordered\"},standalone:!0,features:[h,H],decls:4,vars:6,consts:[[\"class\",\"image\",\"loading\",\"lazy\",3,\"src\",\"error\",4,\"ngIf\"],[\"class\",\"image\",\"loading\",\"lazy\",3,\"hide-before-loaded\",\"src\",\"error\",\"load\",4,\"ngIf\"],[1,\"text\"],[\"loading\",\"lazy\",1,\"image\",3,\"error\",\"src\"],[\"loading\",\"lazy\",1,\"image\",3,\"error\",\"load\",\"src\"]],template:function(e,o){e&1&&(N(0,K,1,3,\"img\",0)(1,Z,1,5,\"img\",1),C(2,\"span\",2),R(3),I()),e&2&&(p(\"ngIf\",o.urlValid&&!o.highQualityReady),x(),p(\"ngIf\",o.urlValid),x(),j(\"font-size\",o.initialsFontSize),b(\"data-locator\",\"initials\"),x(),k(o.computedText))},dependencies:[Q],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{position:relative;display:flex;flex-shrink:0;border-radius:20%;text-align:center;justify-content:center;align-items:center;-webkit-user-select:none;user-select:none;overflow:hidden;color:var(--y-core-color-icon-accent);background:linear-gradient(0deg,var(--y-core-color-surface-accent-low) 0%,var(--y-core-color-surface-accent-low) 100%),var(--y-core-color-surface-primary)!important}[_nghost-%COMP%]   .hide-before-loaded[_ngcontent-%COMP%]{width:0;height:0}.image-mode[_nghost-%COMP%]   [_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;box-shadow:inset 0 0 0 1px #0f0f0f0a;border-radius:50%}.round[_nghost-%COMP%]{border-radius:100%}.bordered[_nghost-%COMP%]{border:2px solid var(--y-core-color-stroke-secondary-low);box-sizing:content-box}.image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.text[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px}'],changeDetection:0}));let n=t;return n})();var W=(()=>{let t=class t{constructor(r,e){i(this,\"elementRef\");i(this,\"ngZone\");i(this,\"offset\",\"\".concat(Math.min(Math.trunc(((window==null?void 0:window.innerHeight)||1)*.15),128),\"px\"));i(this,\"imageUrl\");i(this,\"observer\");this.elementRef=r,this.ngZone=e}ngAfterViewInit(){this.updateObserver()}ngOnChanges(r){var c,z,_;let e=((c=r.imageUrl)==null?void 0:c.currentValue)!==(r==null?void 0:r.imageUrl.previousValue),o=((z=r.offset)==null?void 0:z.currentValue)!==((_=r==null?void 0:r.offset)==null?void 0:_.previousValue);(e||o)&&this.updateObserver()}ngOnDestroy(){this.observer&&this.observer.disconnect()}updateObserver(){this.ngZone.runOutsideAngular(()=>{var r;this.observer&&this.observer.disconnect(),(r=this.elementRef)!=null&&r.nativeElement&&(this.observer=new IntersectionObserver(e=>{e==null||e.forEach(o=>{if(o.isIntersecting){let c=this.elementRef.nativeElement;c.src=this.imageUrl,this.observer&&this.observer.unobserve(c)}})},{rootMargin:\"0px 0px \".concat(this.offset,\" 0px\")}),this.observer.observe(this.elementRef.nativeElement))})}};i(t,\"\\u0275fac\",function(e){return new(e||t)(a(d),a(m))}),i(t,\"\\u0275dir\",l({type:t,selectors:[[\"\",\"uiKitLazyLoadImage\",\"\"]],inputs:{offset:\"offset\",imageUrl:\"imageUrl\"},features:[h]}));let n=t;return n})();var q=(()=>{let t=class t{constructor(){i(this,\"isLast\");i(this,\"initEvent\",new u)}ngAfterViewInit(){if(this.isLast){setTimeout(()=>this.initEvent.emit(),10);return}this.initEvent.emit()}};i(t,\"\\u0275fac\",function(e){return new(e||t)}),i(t,\"\\u0275dir\",l({type:t,selectors:[[\"\",\"ngInit\",\"\"]],inputs:{isLast:\"isLast\"},outputs:{initEvent:\"ngInit\"}}));let n=t;return n})();var G=(()=>{let t=class t{constructor(r,e,o){i(this,\"elem\");i(this,\"renderer\");i(this,\"zone\");i(this,\"appHorizontalScrollCheck\",new u);this.elem=r,this.renderer=e,this.zone=o}ngAfterViewInit(){this.subscribeToHorizontalScroll(this.elem)}subscribeToHorizontalScroll(r){this.zone.runOutsideAngular(()=>this.renderer.listen(r.nativeElement,\"scroll\",e=>{this.appHorizontalScrollCheck.emit({value:e.target.scrollLeft,percent:e.target.scrollLeft/(e.target.scrollWidth-e.target.offsetWidth)*100})}))}};i(t,\"\\u0275fac\",function(e){return new(e||t)(a(d),a(U),a(m))}),i(t,\"\\u0275dir\",l({type:t,selectors:[[\"\",\"ngHorizontalScrollCheck\",\"\"]],outputs:{appHorizontalScrollCheck:\"ngHorizontalScrollCheck\"}}));let n=t;return n})();var J=(()=>{let t=class t{constructor(r,e){i(this,\"element\");i(this,\"zone\");i(this,\"childScrollTop\",new u);i(this,\"destroy$\",new F(1));i(this,\"onScroll\",r=>{this.childScrollTop.emit(r.target.scrollTop)});this.element=r,this.zone=e}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{T(this.element.nativeElement,\"scroll\",{capture:!0}).pipe(L(this.destroy$)).subscribe(this.onScroll)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};i(t,\"\\u0275fac\",function(e){return new(e||t)(a(d),a(m))}),i(t,\"\\u0275dir\",l({type:t,selectors:[[\"\",\"uiKitHandleChildScroll\",\"\"]],outputs:{childScrollTop:\"childScrollTop\"}}));let n=t;return n})();var St=(()=>{let t=class t{};i(t,\"\\u0275fac\",function(e){return new(e||t)}),i(t,\"\\u0275mod\",D({type:t})),i(t,\"\\u0275inj\",M({}));let n=t;return n})();export{$ as a,et as b,W as c,q as d,G as e,J as f,St as g};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2852,
          "_transferSize": 3512,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.857Z",
        "time": 587.4210000038147,
        "timings": {
          "blocked": 394.50300006274136,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.214999999999975,
          "wait": 192.14800002239645,
          "receive": 0.5549999186769128,
          "_blocked_queueing": 3.968000062741339,
          "_blocked_proxy": 13.105,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "426446",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-4LVJC2QZ.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7084"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b351352a848625-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-256\""
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
              "value": "ff9de3a6c39ac7588b87c686dbc1357c"
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
            "text": "import{Gb as n,Ib as s,Ma as a,Mb as o}from\"./chunk-KO722YSM.js\";import{g as t}from\"./chunk-JV5WWF5Q.js\";var p=(()=>{let e=class e{constructor(i,r){t(this,\"vcRef\");t(this,\"templateRef\");t(this,\"context\",{});this.vcRef=i,this.templateRef=r}set ngVar(i){this.context.$implicit=this.context.ngVar=i,this.updateView()}updateView(){this.vcRef.clear(),this.vcRef.createEmbeddedView(this.templateRef,this.context)}};t(e,\"\\u0275fac\",function(r){return new(r||e)(n(o),n(s))}),t(e,\"\\u0275dir\",a({type:e,selectors:[[\"\",\"ngVar\",\"\"]],inputs:{ngVar:\"ngVar\"},standalone:!0}));let c=e;return c})();export{p as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 385,
          "_transferSize": 1044,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.857Z",
        "time": 625.6889998912811,
        "timings": {
          "blocked": 421.1839999506474,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.22999999999996135,
          "wait": 203.73199999691548,
          "receive": 0.5429999437183142,
          "_blocked_queueing": 4.732999950647354,
          "_blocked_proxy": 12.344,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "425014",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-HNFBT5P4.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7083"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b351353b6107a5-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-d8f1\""
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
              "value": "acdd6f37ca56385d2a4b5138e5610e55"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 55537,
            "mimeType": "application/javascript",
            "compression": 40989,
            "text": "import{a as Fe,b as St,c as wt,d as Ot}from\"./chunk-OT2UNM7Q.js\";import{a as se,c as vt,d as Ve}from\"./chunk-6Q3T6TH3.js\";import{a as Tt}from\"./chunk-5HKI7HVK.js\";import{C as Pt,D as j,G as Mt,H as xt,x as kt,y as bt,z as X}from\"./chunk-IV3KQJLV.js\";import{Ab as lt,Bb as st,Cg as Ct,Dc as le,Eb as Be,Fc as Re,Hi as ft,Ji as _e,N as pt,P as re,Q as ae,Sc as mt,Tc as ht,Ti as yt,Wc as gt,b as oe,ch as Q,de as _t,e as L,f as ot,fe as De,g as rt,i as Ee,j as Z,p as at,rc as ct,sd as ut,tc as dt,uc as pe,ui as v}from\"./chunk-6FGVQ7PR.js\";import{$b as Ie,Aa as We,Ac as je,E as Pe,Ea as G,Fa as F,Fb as c,Gb as _,I as Ke,Ib as it,J as Me,Jc as He,Ka as S,La as Je,Lc as Le,Ma as et,Mb as nt,Pb as ne,Pc as w,Qc as O,Ub as C,Uc as te,Va as g,Wa as u,Wb as k,Xb as s,Y as xe,Yb as M,Za as tt,Zb as x,aa as J,cb as H,ec as d,fc as m,gc as T,h as Ge,hb as A,hc as E,i as ve,ic as B,id as Ae,j as ke,jc as ee,ka as Se,kc as b,na as Ze,oa as we,oc as f,pc as l,qa as $,qc as K,rc as P,sa as Oe,ta as Xe,uc as D,vc as V,wc as N,x as I,xc as ue,y as be,yc as U,za as q,zb as Te,zc as z}from\"./chunk-KO722YSM.js\";import{g as t,i as ge}from\"./chunk-JV5WWF5Q.js\";var It=64,Ht=\"primary\",Qe=\"secondary\",$e=Qe,ze=100,ce={titleBlock:{title:\"header_title\",clickableArea:\"header_title_small_clickable_area\",buttonCompanyInfo:\"header_button_company_info\"},smallHeader:{backButton:\"header_small_button_back\",closeButton:\"header_small_button_close\",profileButton:\"header_small_profile_button\",logo:\"header_small_image_logo\",description:\"header_small_description\"},bigHeader:{backButton:\"header_big_button_back\",logo:\"header_big_image_logo\",description:\"header_big_description\"}},Wt=\"custom\",Ce=\"companyInfo\",Ne=\"companyInfoExceptAddress\",At=\"bookFormInfo\",Et=\"titleInfo\",Y=(()=>{let n=class n{constructor(){t(this,\"theme\",$e);t(this,\"backgroundImage\",null);t(this,\"contentType\",Wt);t(this,\"title\",null);t(this,\"description\",null);t(this,\"isTitleChevronArrow\",null);t(this,\"isBackButton\",!1);t(this,\"isProfileButton\",!1);t(this,\"isCloseButton\",!1);t(this,\"isSmallHeaderHidden\",!1);t(this,\"zIndex\",ze);t(this,\"useMiddleClick\",!0);t(this,\"backClick\",new H);t(this,\"closeClick\",new H);t(this,\"profileClick\",new H);t(this,\"titleClick\",new H);t(this,\"destroy$\",new ke(1));t(this,\"logoImageUrl\",null)}set logoImage(a){this.logoImageUrl=a&&!a.includes(\"altegio-default-logo\")?a:null}get themeCSSClass(){return\"app-header--\".concat(this.theme)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onTitleClick(){this.isTitleChevronArrow&&this.titleClick.emit()}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275dir\",et({type:n,inputs:{theme:\"theme\",backgroundImage:\"backgroundImage\",contentType:\"contentType\",logoImage:\"logoImage\",title:\"title\",description:\"description\",isTitleChevronArrow:\"isTitleChevronArrow\",isBackButton:\"isBackButton\",isProfileButton:\"isProfileButton\",isCloseButton:\"isCloseButton\",isSmallHeaderHidden:\"isSmallHeaderHidden\",zIndex:\"zIndex\",useMiddleClick:\"useMiddleClick\"},outputs:{backClick:\"backClick\",closeClick:\"closeClick\",profileClick:\"profileClick\",titleClick:\"titleClick\"}}));let r=n;return r})();function ei(r,n){if(r&1&&(d(0,\"div\",8),U(1),m()),r&2){let o=n.ngIf;c(),je(\" \",o,\" \")}}function ti(r,n){if(r&1&&(d(0,\"div\",9),U(1),m()),r&2){let o=n.ngIf;c(),je(\" \",o,\" \")}}function ii(r,n){if(r&1&&(T(0,\"ui-kit-button\",6),w(1,\"translate\")),r&2){let o=l();s(\"type\",o.buttonType.secondary)(\"title\",O(1,4,\"branch.all\"))(\"oneLineTitle\",!0),k(\"data-locator\",\"header_modal_companies_button\")}}var Nt=(()=>{let n=class n{constructor(a,e,i,p,h){t(this,\"modalService\");t(this,\"router\");t(this,\"location\");t(this,\"navigationStepUrlResolver\");t(this,\"trackingService\");t(this,\"company\");t(this,\"allCompaniesBtnIsHidden\");t(this,\"store\",F(Q));t(this,\"buttonType\",mt);t(this,\"companies$\",this.store.select(v.companies.getCompanies));t(this,\"destroy$\",new ke(1));this.modalService=a,this.router=e,this.location=i,this.navigationStepUrlResolver=p,this.trackingService=h}ngOnInit(){this.trackingService.track({type:le.Action.view,element_type:\"popup\",element_name:\"about_company_popup\"}),this.allCompaniesBtnIsHidden||this.defineCompanies()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getAboutCompanyUrl(){return[\"/company\",\"\".concat(this.company.id),\"about\"]}getAboutCompanyQueryParams(){let a=this.navigationStepUrlResolver.removeQueryParamFromUrl(this.location.path(),\"previousStepUrlParamName\");return{[j]:a}}getAllCompaniesUrl(){return[yt(this.company.city_id)]}getAllCompaniesQueryParams(){return{[j]:this.navigationStepUrlResolver.removeQueryParamFromUrl(this.location.path(),j)}}navigateToAboutCompany(){this.trackingService.track({type:le.Action.click,element_type:\"button\",element_name:\"about_company_popup_button\",element_id:this.company.id}),this.close()}navigateToAllCompanies(){this.trackingService.track({type:le.Action.click,element_type:\"button\",element_name:\"salon_selection_popup_button\",element_id:this.company.id}),this.close()}close(){this.modalService.closeModal()}defineCompanies(){this.companies$.pipe(J(a=>!(a!=null&&a.length)),we(()=>this.requestCompanies()),$(this.destroy$)).subscribe()}requestCompanies(){return this.store.select(v.bookform.getGroupId).pipe(J(Boolean),Oe(a=>this.store.dispatch(new De({groupId:a,bookformId:this.store.selectSnapshot(v.bookform.getBookformId)}))))}navigate(a){let e=this.router.createUrlTree(a,{queryParams:{[j]:this.location.path()}});e&&this.router.navigateByUrl(e)}};t(n,\"\\u0275fac\",function(e){return new(e||n)(_(pe),_(re),_(oe),_(X),_(Re))}),t(n,\"\\u0275cmp\",S({type:n,selectors:[[\"app-header-company-modal\"]],inputs:{company:\"company\",allCompaniesBtnIsHidden:\"allCompaniesBtnIsHidden\"},decls:11,vars:17,consts:[[1,\"company-modal\"],[1,\"company-modal-content\"],[\"class\",\"company-modal-title\",4,\"ngIf\"],[\"class\",\"company-modal-subtitle\",4,\"ngIf\"],[1,\"company-modal-buttons\"],[3,\"click\",\"routerLink\",\"queryParams\",\"queryParamsHandling\"],[1,\"company-modal-button\",3,\"type\",\"title\",\"oneLineTitle\"],[\"class\",\"company-modal-button\",3,\"type\",\"title\",\"oneLineTitle\",4,\"ngIf\"],[1,\"company-modal-title\"],[1,\"company-modal-subtitle\"]],template:function(e,i){e&1&&(d(0,\"div\",0)(1,\"main\",1),C(2,ei,2,1,\"div\",2)(3,ti,2,1,\"div\",3),m(),d(4,\"footer\",4)(5,\"a\",5),f(\"click\",function(){return i.navigateToAboutCompany()}),T(6,\"ui-kit-button\",6),w(7,\"translate\"),m(),d(8,\"a\",5),f(\"click\",function(){return i.navigateToAllCompanies()}),C(9,ii,2,6,\"ui-kit-button\",7),w(10,\"async\"),m()()()),e&2&&(c(2),s(\"ngIf\",i.company==null?null:i.company.title),c(),s(\"ngIf\",i.company==null?null:i.company.address),c(2),s(\"routerLink\",i.getAboutCompanyUrl())(\"queryParams\",i.getAboutCompanyQueryParams())(\"queryParamsHandling\",\"merge\"),c(),s(\"type\",i.buttonType.secondary)(\"title\",O(7,13,\"branch.about\"))(\"oneLineTitle\",!0),k(\"data-locator\",\"header_modal_company_info_button\"),c(2),s(\"routerLink\",i.getAllCompaniesUrl())(\"queryParams\",i.getAllCompaniesQueryParams())(\"queryParamsHandling\",\"merge\"),c(),s(\"ngIf\",O(10,15,i.companies$).length&&!i.allCompaniesBtnIsHidden))},dependencies:[L,ht,ae,se,Z,lt],styles:['@charset \"UTF-8\";[_nghost-%COMP%]   .company-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:164px;padding-bottom:32px}[_nghost-%COMP%]   .company-modal-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:12px 16px 16px}[_nghost-%COMP%]   .company-modal-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:28px;color:var(--y-core-color-text-primary);word-break:break-word}[_nghost-%COMP%]   .company-modal-title[_ngcontent-%COMP%] ~ .company-modal-subtitle[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .company-modal-subtitle[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--y-core-color-text-secondary)}[_nghost-%COMP%]   .company-modal-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:16px;flex-wrap:wrap}[_nghost-%COMP%]   .company-modal-button[_ngcontent-%COMP%]{min-width:calc(50% - 5px);flex-shrink:0;flex-grow:1}'],changeDetection:0}));let r=n;return r})();var Ut=(()=>{let n=class n{constructor(a,e,i,p,h,y,ie){t(this,\"router\");t(this,\"currentCompany\");t(this,\"storeSnapshotService\");t(this,\"appNavigationService\");t(this,\"orderManagerService\");t(this,\"navigationStepUrlResolver\");t(this,\"location\");t(this,\"currentStep\",null);t(this,\"navigationSteps\",[\"select\",\"info\",\"book-again\",\"contact\"]);this.router=a,this.currentCompany=e,this.storeSnapshotService=i,this.appNavigationService=p,this.orderManagerService=h,this.navigationStepUrlResolver=y,this.location=ie}setCurrentStep(a){this.currentStep=a}getFirstStepUrl(){return this.getStepUrl(this.navigationSteps[0])}navigateBack(){return ge(this,null,function*(){let a=new URL(location.href).searchParams.get(j);if(a){let p=this.navigationStepUrlResolver.removeQueryParamFromUrl(decodeURIComponent(a),j);return this.appNavigationService.goBack({url:p})}let e=this.navigationSteps[this.navigationSteps.indexOf(this.currentStep)-1],i=this.getStepUrl(e);this.appNavigationService.goBack({url:i})})}navigateToNextStep(a){return ge(this,null,function*(){let e=a||this.navigationSteps[this.navigationSteps.indexOf(this.currentStep)+1],i=yield this.getStepUrl(e);yield this.router.navigate([i],{queryParams:{[ut]:yield this.orderManagerService.getOrder()},queryParamsHandling:\"merge\"})})}isOnOrderFirstStep(a){var i,p;let e=(p=(i=a.routeConfig)==null?void 0:i.data)==null?void 0:p.step;return e?e===this.navigationSteps[0]:!1}returnToSelectActivities(){this.appNavigationService.returnToMain({successUrl:Fe(this.currentCompany.getCurrentCompanyId())})}goToEditActivities(){this.router.navigate([Ot(this.currentCompany.getCurrentCompanyId())],{queryParams:{[j]:this.location.path()}})}getStepUrl(a){let e=this.currentCompany.getCurrentCompanyId();switch(a){case\"select\":return Fe(Number(e));case\"info\":{let i=this.getCurrentActivityId();return St(Number(e),i)}case\"book-again\":{let i=this.getCurrentActivityId();return wt(Number(e),i)}case\"contact\":return X.getContactStepUrl(e);default:throw new Error(\"\".concat(a,\" not implemented\"))}}getCurrentActivityId(){var a;return this.storeSnapshotService.selectSnapshot(v.activities.getCurrentRouteActivityId)||((a=this.storeSnapshotService.selectSnapshot(v.order.getFirstSelectedActivity))==null?void 0:a.id)}};t(n,\"\\u0275fac\",function(e){return new(e||n)(G(re),G(bt),G(Q),G(xt),G(Mt),G(X),G(oe))}),t(n,\"\\u0275prov\",q({token:n,factory:n.\\u0275fac,providedIn:\"root\"}));let r=n;return r})();var jt=(()=>{let n=class n{constructor(){t(this,\"store\",F(Q));t(this,\"currentBookform\",F(kt));t(this,\"isMixedRecordType$\",this.store.select(v.currentCompany.getCurrentCompany).pipe(xe((a,e)=>!a==!e),I(a=>{let e=this.currentBookform.getCurrentBookform();return((e==null?void 0:e.record_type_id)||(a==null?void 0:a.record_type_id))===0}),Se(1)))}getRecordType(){var e;let a=this.currentBookform.getCurrentBookform();return(a==null?void 0:a.record_type_id)||((e=this.store.selectSnapshot(v.currentCompany.getCurrentCompany))==null?void 0:e.record_type_id)}isMixedRecordType(){return this.getRecordType()===0}isActivityRecordType(){return this.getRecordType()===2}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275prov\",q({token:n,factory:n.\\u0275fac,providedIn:\"root\"}));let r=n;return r})();var me=class{constructor(n){t(this,\"changes\");this.changes=new ve(n)}get current(){return this.changes.getValue()}notify(n){n!==this.current&&this.changes.next(n)}listen(){return this.changes.asObservable()}};var he=(()=>{let n=class n extends me{constructor(){super(0)}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275prov\",q({token:n,factory:n.\\u0275fac}));let r=n;return r})();var W=(()=>{let n=class n extends me{constructor(){super(0)}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275prov\",q({token:n,factory:n.\\u0275fac}));let r=n;return r})();var ri=[\"titleElementRef\"],ai=[\"headerSmall\"],pi=[[[\"\",\"panelContent\",\"\"]],[[\"\",\"topLeftContent\",\"\"]],[[\"\",\"topMiddleContent\",\"\"]],[[\"\",\"topRightContent\",\"\"]]],li=[\"[panelContent]\",\"[topLeftContent]\",\"[topMiddleContent]\",\"[topRightContent]\"];function si(r,n){r&1&&ee(0)}function ci(r,n){if(r&1&&T(0,\"app-progressive-image\",12),r&2){let o=l();s(\"urls\",o.backgroundImage)(\"aspectRatio\",16/9)}}function di(r,n){if(r&1){let o=b();d(0,\"div\",13),f(\"click\",function(){g(o);let e=l();return u(e.logoClick.emit())}),m()}if(r&2){let o=l();M(\"background-image\",\"url(\"+o.logoImageUrl+\")\"),x(\"app-header-logo--no-border\",!o.backgroundImage),k(\"data-locator\",o.dataLocators.logo)}}function mi(r,n){if(r&1){let o=b();d(0,\"app-header-title\",14,1),f(\"titleClick\",function(){g(o);let e=l();return u(e.onTitleClick())}),m()}if(r&2){let o=l();s(\"isChevronArrow\",o.isTitleChevronArrow)(\"title\",o.title)(\"titleIcon\",\"common/arrow\")(\"rotateIcon\",!0)}}function hi(r,n){if(r&1&&(d(0,\"div\",15),U(1),m()),r&2){let o=l();k(\"data-locator\",o.dataLocators.description),c(),z(o.description)}}function gi(r,n){if(r&1){let o=b();d(0,\"app-header-small\",17,2),w(2,\"async\"),w(3,\"async\"),w(4,\"async\"),f(\"logoClick\",function(){g(o);let e=l(2);return u(e.logoClick.emit())})(\"headerMiddleClick\",function(){g(o);let e=l(2);return u(e.smallHeaderMiddleClick.emit())})(\"backClick\",function(e){g(o);let i=l(2);return u(i.backClick.emit(e))})(\"closeClick\",function(e){g(o);let i=l(2);return u(i.closeClick.emit(e))})(\"profileClick\",function(e){g(o);let i=l(2);return u(i.profileClick.emit(e))})(\"titleClick\",function(e){g(o);let i=l(2);return u(i.titleClick.emit(e))}),E(5,18),P(6,1),B(),E(7,19),P(8,2),B(),E(9,20),P(10,3),B(),m()}if(r&2){let o=l(2);s(\"logoImage\",o.logoImageUrl)(\"title\",o.title)(\"description\",o.description)(\"isBackButton\",o.isBackButton)(\"isProfileButton\",o.isProfileButton)(\"isCloseButton\",o.isCloseButton)(\"isContentHidden\",!O(2,11,o.isScrollPhaseEnd$))(\"isBgTransparent\",!O(3,13,o.isScrollPhaseEnd$))(\"bgOpacity\",O(4,15,o.smallHeaderOpacity$))(\"isTitleChevronArrow\",o.isTitleChevronArrow)(\"useMiddleClick\",o.useMiddleClick)}}function ui(r,n){if(r&1&&C(0,gi,11,17,\"app-header-small\",16),r&2){let o=l();s(\"ngIf\",!o.isSmallHeaderHidden)}}var Ue=(()=>{let n=class n extends Y{constructor(e,i,p,h){super();t(this,\"headerScrollChanges\");t(this,\"headerHeightChanges\");t(this,\"modalService\");t(this,\"elRef\");t(this,\"logoClick\",new H);t(this,\"smallHeaderMiddleClick\",new H);t(this,\"titleElementRef\");t(this,\"headerSmall\");t(this,\"initialHeight\",0);t(this,\"lastHeight\",0);t(this,\"scrollPhase$\");t(this,\"isScrollPhaseInitial$\");t(this,\"isScrollPhaseMiddle$\");t(this,\"isScrollPhaseEnd$\");t(this,\"smallHeaderOpacity$\");t(this,\"scrollTop\",0);t(this,\"dataLocators\",ce.bigHeader);this.headerScrollChanges=e,this.headerHeightChanges=i,this.modalService=p,this.elRef=h,this.scrollPhase$=be([this.headerScrollChanges.listen().pipe(Ze(0)),this.modalService.onModalOpened()]).pipe(Me(([,y])=>!y),I(([y])=>this.getScrollPhase(y)),xe(),Se(1)),this.isScrollPhaseInitial$=this.scrollPhase$.pipe(I(y=>y===0)),this.isScrollPhaseMiddle$=this.scrollPhase$.pipe(I(y=>y===1)),this.isScrollPhaseEnd$=this.scrollPhase$.pipe(I(y=>y===2)),this.smallHeaderOpacity$=this.headerScrollChanges.listen().pipe(I(y=>this.getSmallHeaderOpacity(y)))}get height(){var y;if(!this.initialHeight)return\"auto\";if(this.scrollTop<=0)return this.lastHeight=this.initialHeight,\"\".concat(this.initialHeight,\"px\");let{height:e,bottom:i}=document.body.getBoundingClientRect();if(this.lastHeight&&e-this.scrollTop<=i)return\"\".concat(this.lastHeight,\"px\");let p=(y=this.headerSmall)==null?void 0:y.nativeElement.clientHeight,h=Math.max(this.initialHeight-this.scrollTop,p);return this.lastHeight=h,\"\".concat(h,\"px\")}get isBookFormInfoHeader(){return this.contentType===At}ngAfterViewInit(){this.headerScrollChanges.listen().pipe($(this.destroy$)).subscribe(e=>{this.scrollTop=e}),this.initialHeight=this.elRef.nativeElement.clientHeight}getTitleTopPosition(e){var ie;let i=parseInt(getComputedStyle(document.documentElement).getPropertyValue(\"--safe-area-top\")),p=(ie=this.titleElementRef)==null?void 0:ie.nativeElement,h=p==null?void 0:p.getBoundingClientRect().top,y=p==null?void 0:p.offsetHeight;return h-It-i+y/2+e}getScrollPhase(e){let i=this.getTitleTopPosition(e),p=e<=0,h=e>0&&e<i,y=e>i;if(p)return 0;if(h)return 1;if(y)return 2}getSmallHeaderOpacity(e){let i=this.getTitleTopPosition(e),p=e<=0?0:e,h=p>i?i:p;return p&&Math.round(h/i*100)/100||0}};t(n,\"\\u0275fac\",function(i){return new(i||n)(_(W),_(he),_(pe),_(A))}),t(n,\"\\u0275cmp\",S({type:n,selectors:[[\"app-header-big\"]],viewQuery:function(i,p){if(i&1&&(D(ri,5,A),D(ai,5,A)),i&2){let h;V(h=N())&&(p.titleElementRef=h.first),V(h=N())&&(p.headerSmall=h.first)}},hostVars:2,hostBindings:function(i,p){i&2&&M(\"height\",p.height)},outputs:{logoClick:\"logoClick\",smallHeaderMiddleClick:\"smallHeaderMiddleClick\"},features:[He([{provide:Y,useExisting:n}]),ne],ngContentSelectors:li,decls:15,vars:25,consts:[[\"subheader\",\"\"],[\"titleElementRef\",\"\"],[\"headerSmall\",\"\"],[1,\"app-header\"],[4,\"ngTemplateOutlet\"],[1,\"app-header-background\"],[3,\"urls\",\"aspectRatio\",4,\"ngIf\"],[1,\"app-header-panel\"],[\"class\",\"app-header-logo\",3,\"app-header-logo--no-border\",\"backgroundImage\",\"click\",4,\"ngIf\"],[1,\"app-header-logo-fix\"],[\"parentTemplateType\",\"big\",3,\"isChevronArrow\",\"title\",\"titleIcon\",\"rotateIcon\",\"titleClick\",4,\"ngIf\"],[\"class\",\"app-header-description\",4,\"ngIf\"],[3,\"urls\",\"aspectRatio\"],[1,\"app-header-logo\",3,\"click\"],[\"parentTemplateType\",\"big\",3,\"titleClick\",\"isChevronArrow\",\"title\",\"titleIcon\",\"rotateIcon\"],[1,\"app-header-description\"],[\"theme\",\"primary\",\"class\",\"app-header-small\",3,\"logoImage\",\"title\",\"description\",\"isBackButton\",\"isProfileButton\",\"isCloseButton\",\"isContentHidden\",\"isBgTransparent\",\"bgOpacity\",\"isTitleChevronArrow\",\"useMiddleClick\",\"logoClick\",\"headerMiddleClick\",\"backClick\",\"closeClick\",\"profileClick\",\"titleClick\",4,\"ngIf\"],[\"theme\",\"primary\",1,\"app-header-small\",3,\"logoClick\",\"headerMiddleClick\",\"backClick\",\"closeClick\",\"profileClick\",\"titleClick\",\"logoImage\",\"title\",\"description\",\"isBackButton\",\"isProfileButton\",\"isCloseButton\",\"isContentHidden\",\"isBgTransparent\",\"bgOpacity\",\"isTitleChevronArrow\",\"useMiddleClick\"],[\"leftContent\",\"\"],[\"middleContent\",\"\"],[\"rightContent\",\"\"]],template:function(i,p){if(i&1&&(K(pi),d(0,\"header\",3),w(1,\"async\"),w(2,\"async\"),w(3,\"async\"),C(4,si,1,0,\"ng-container\",4),d(5,\"div\",5),C(6,ci,1,2,\"app-progressive-image\",6),m(),d(7,\"div\",7),C(8,di,1,5,\"div\",8),T(9,\"div\",9),C(10,mi,2,4,\"app-header-title\",10)(11,hi,2,2,\"div\",11),P(12),m()(),C(13,ui,1,1,\"ng-template\",null,0,te)),i&2){let h=ue(14);Ie(p.themeCSSClass),x(\"app-header--short\",!p.backgroundImage&&p.logoImageUrl)(\"app-header--ultra-short\",!p.backgroundImage&&!p.logoImageUrl&&!p.isBookFormInfoHeader)(\"app-header--extra-short\",!p.backgroundImage&&!p.logoImageUrl&&p.isBookFormInfoHeader)(\"app-header--scroll-initial\",O(1,19,p.isScrollPhaseInitial$))(\"app-header--scroll-middle\",O(2,21,p.isScrollPhaseMiddle$))(\"app-header--scroll-end\",O(3,23,p.isScrollPhaseEnd$)),c(4),s(\"ngTemplateOutlet\",h),c(2),s(\"ngIf\",p.backgroundImage),c(2),s(\"ngIf\",p.logoImageUrl),c(2),s(\"ngIf\",p.title),c(),s(\"ngIf\",p.description)}},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;position:relative;top:0;left:0;z-index:1}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]{background-color:var(--y-core-color-other-base);--widget-app-header-footer-bg-color: var(--y-core-color-surface-primary);--widget-app-header-title-bg-color: var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-panel[_ngcontent-%COMP%]{background-color:var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{border-color:var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .app-header--primary.app-header--short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--y-core-color-other-base)}[_nghost-%COMP%]   .app-header--primary.app-header--ultra-short[_ngcontent-%COMP%]{background-color:var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .app-header--primary.app-header--ultra-short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .app-header--primary.app-header--extra-short[_ngcontent-%COMP%]{background-color:var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .app-header--primary.app-header--extra-short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]{background-color:var(--y-core-color-surface-primary);--widget-app-header-footer-bg-color: var(--y-core-color-other-base);--widget-app-header-title-bg-color: var(--y-core-color-other-base)}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-panel[_ngcontent-%COMP%]{background-color:var(--y-core-color-other-base)}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{border-color:var(--y-core-color-other-base)}[_nghost-%COMP%]   .app-header--secondary.app-header--short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .app-header--secondary.app-header--ultra-short[_ngcontent-%COMP%]{background-color:var(--y-core-color-other-base)}[_nghost-%COMP%]   .app-header--secondary.app-header--ultra-short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--y-core-color-other-base)}[_nghost-%COMP%]   .app-header--secondary.app-header--extra-short[_ngcontent-%COMP%]{background-color:var(--y-core-color-other-base)}[_nghost-%COMP%]   .app-header--secondary.app-header--extra-short.app-header--scroll-initial[_ngcontent-%COMP%]{--widget-app-header-small-bg-color: var(--y-core-color-other-base)}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:hidden;height:100%;justify-content:end}[_nghost-%COMP%]   .app-header--ultra-short[_ngcontent-%COMP%]   .app-header-background[_ngcontent-%COMP%]{min-height:64px;background-color:transparent}[_nghost-%COMP%]   .app-header--ultra-short[_ngcontent-%COMP%]   .app-header-panel[_ngcontent-%COMP%]{margin-top:0;padding-top:16px}[_nghost-%COMP%]   .app-header--extra-short[_ngcontent-%COMP%]   .app-header-background[_ngcontent-%COMP%]{min-height:8px;background-color:transparent}[_nghost-%COMP%]   .app-header--extra-short[_ngcontent-%COMP%]   .app-header-panel[_ngcontent-%COMP%]{margin-top:0;padding-top:16px}[_nghost-%COMP%]   .app-header-background[_ngcontent-%COMP%]{min-height:140px;width:100%;background-size:cover;background-repeat:no-repeat;background-position:center center}[_nghost-%COMP%]   .app-header-background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:middle}[_nghost-%COMP%]   .app-header-panel[_ngcontent-%COMP%]{position:relative;padding:20px 16px 16px;border-radius:24px 24px 0 0;margin-top:-20px}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{position:absolute;top:-36px;width:80px;height:80px;border-radius:100%;background-size:cover;background-position:center center;border:4px solid transparent}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   .app-header-logo--no-border[_ngcontent-%COMP%]{border:none}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%] + .app-header-logo-fix[_ngcontent-%COMP%]{padding-top:32px}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]   app-header-title[_ngcontent-%COMP%] + .app-header-description[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .app-header-description[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:var(--y-core-color-text-secondary);display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}'],changeDetection:0}));let r=n;return r})();var Ci=[\"mainBackgroundRef\"],fi=[[[\"\",\"leftContent\",\"\"]],[[\"\",\"middleContent\",\"\"]],[[\"\",\"rightContent\",\"\"]]],yi=[\"[leftContent]\",\"[middleContent]\",\"[rightContent]\"];function vi(r,n){if(r&1){let o=b();d(0,\"app-header-button\",13),f(\"click\",function(){g(o);let e=l();return u(e.backClick.emit())}),m()}if(r&2){let o=l();s(\"locator\",o.dataLocators.backButton)}}function ki(r,n){if(r&1){let o=b();d(0,\"app-header-button\",14),f(\"click\",function(){g(o);let e=l();return u(e.closeClick.emit())}),m()}if(r&2){let o=l();s(\"locator\",o.dataLocators.closeButton)}}function bi(r,n){if(r&1){let o=b();d(0,\"div\",15),f(\"click\",function(){g(o);let e=l();return u(e.logoClick.emit())}),m()}if(r&2){let o=l();M(\"background-image\",\"url(\"+o.logoImageUrl+\")\"),k(\"data-locator\",o.dataLocators.logo)}}function Pi(r,n){if(r&1){let o=b();d(0,\"app-header-title\",16),f(\"titleClick\",function(){g(o);let e=l();return u(e.onTitleClick())}),m()}if(r&2){let o=l();s(\"isChevronArrow\",o.isTitleChevronArrow)(\"title\",o.title)}}function Mi(r,n){if(r&1&&(d(0,\"div\",17),U(1),m()),r&2){let o=l();k(\"data-locator\",o.dataLocators.description),c(),z(o.description)}}function xi(r,n){if(r&1){let o=b();d(0,\"app-header-button\",18),f(\"click\",function(){g(o);let e=l();return u(e.profileClick.emit())}),m()}if(r&2){let o=l();s(\"locator\",o.dataLocators.profileButton)}}var fe=(()=>{let n=class n extends Y{constructor(){super(...arguments);t(this,\"mainBackgroundRef\");t(this,\"dataLocators\",ce.smallHeader);t(this,\"isContentHidden\",!1);t(this,\"isBgTransparent\",!1);t(this,\"useMiddleClick\",!0);t(this,\"headerMiddleClick\",new H);t(this,\"logoClick\",new H);t(this,\"initialized\",!1);t(this,\"AppRoutes\",_e)}set bgOpacity(e){requestAnimationFrame(()=>{this.mainBackgroundRef.nativeElement.style.opacity=e})}onTitleClick(){this.isContentHidden||super.onTitleClick()}ngAfterViewInit(){this.initialized=!0}};t(n,\"\\u0275fac\",(()=>{let e;return function(p){return(e||(e=tt(n)))(p||n)}})()),t(n,\"\\u0275cmp\",S({type:n,selectors:[[\"app-header-small\"]],viewQuery:function(i,p){if(i&1&&D(Ci,7,A),i&2){let h;V(h=N())&&(p.mainBackgroundRef=h.first)}},hostVars:2,hostBindings:function(i,p){i&2&&x(\"initialized\",p.initialized)},inputs:{isContentHidden:\"isContentHidden\",isBgTransparent:\"isBgTransparent\",bgOpacity:\"bgOpacity\",useMiddleClick:\"useMiddleClick\"},outputs:{headerMiddleClick:\"headerMiddleClick\",logoClick:\"logoClick\"},features:[He([{provide:Y,useExisting:n}]),ne],ngContentSelectors:yi,decls:17,vars:16,consts:[[\"mainBackgroundRef\",\"\"],[\"id\",\"page-header\",1,\"app-header\"],[1,\"app-header-main\"],[1,\"app-header-main-background\"],[1,\"app-header-button\"],[\"iconName\",\"common/arrow-big\",\"class\",\"back-button\",3,\"locator\",\"click\",4,\"ngIf\"],[\"iconName\",\"close\",3,\"locator\",\"click\",4,\"ngIf\"],[\"class\",\"app-header-logo\",3,\"backgroundImage\",\"click\",4,\"ngIf\"],[1,\"app-header-middle\",3,\"click\"],[\"parentTemplateType\",\"small\",3,\"isChevronArrow\",\"title\",\"titleClick\",4,\"ngIf\"],[\"class\",\"app-header-description\",4,\"ngIf\"],[3,\"routerLink\",\"skipNavigation\"],[\"iconName\",\"profile\",3,\"locator\",\"click\",4,\"ngIf\"],[\"iconName\",\"common/arrow-big\",1,\"back-button\",3,\"click\",\"locator\"],[\"iconName\",\"close\",3,\"click\",\"locator\"],[1,\"app-header-logo\",3,\"click\"],[\"parentTemplateType\",\"small\",3,\"titleClick\",\"isChevronArrow\",\"title\"],[1,\"app-header-description\"],[\"iconName\",\"profile\",3,\"click\",\"locator\"]],template:function(i,p){if(i&1){let h=b();K(fi),d(0,\"header\",1)(1,\"div\",2),T(2,\"div\",3,0),d(4,\"div\",4),C(5,vi,1,1,\"app-header-button\",5)(6,ki,1,1,\"app-header-button\",6),P(7),m(),C(8,bi,1,3,\"div\",7),d(9,\"div\",8),f(\"click\",function(){return g(h),u(p.useMiddleClick?p.headerMiddleClick.emit():void 0)}),C(10,Pi,1,2,\"app-header-title\",9)(11,Mi,2,2,\"div\",10),P(12,1),m(),d(13,\"div\",4)(14,\"div\",11),C(15,xi,1,1,\"app-header-button\",12),m(),P(16,2),m()()()}i&2&&(Ie(p.themeCSSClass),x(\"app-header--content-hidden\",p.isContentHidden)(\"app-header--bg-transparent\",p.isBgTransparent),c(5),s(\"ngIf\",p.isBackButton),c(),s(\"ngIf\",p.isCloseButton),c(2),s(\"ngIf\",p.logoImageUrl),c(),x(\"no-pointer-events\",!p.useMiddleClick),c(),s(\"ngIf\",p.title),c(),s(\"ngIf\",p.description),c(3),s(\"routerLink\",\"/\"+p.AppRoutes.profile)(\"skipNavigation\",!0),c(),s(\"ngIf\",p.isProfileButton))},styles:['@charset \"UTF-8\";app-header-big[_nghost-%COMP%], app-header-big   [_nghost-%COMP%]{position:absolute;z-index:2;top:0}[_nghost-%COMP%]{display:block;width:100%;max-width:600px}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--y-core-color-other-base));--widget-app-header-footer-bg-color: var(--widget-app-header-small-bg-color, var(--y-core-color-surface-primary));--widget-app-header-title-bg-color: var(--widget-app-header-small-bg-color, var(--y-core-color-surface-primary))}[_nghost-%COMP%]   .app-header--primary.app-header--bg-transparent[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .app-header--primary.app-header--bg-transparent[_ngcontent-%COMP%]   .app-header-main[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-main[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--y-core-color-surface-primary))}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-main-background[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--y-core-color-surface-primary))}[_nghost-%COMP%]   .app-header--primary[_ngcontent-%COMP%]   .app-header-button[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--y-core-color-surface-primary));color:var(--y-core-color-text-primary)}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--y-core-color-surface-primary));--widget-app-header-footer-bg-color: var(--widget-app-header-small-bg-color, var(--y-core-color-other-base));--widget-app-header-title-bg-color: var(--widget-app-header-small-bg-color, var(--y-core-color-other-base))}[_nghost-%COMP%]   .app-header--secondary.app-header--bg-transparent[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .app-header--secondary.app-header--bg-transparent[_ngcontent-%COMP%]   .app-header-main[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-main[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--y-core-color-other-base))}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-main-background[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--y-core-color-other-base))}[_nghost-%COMP%]   .app-header--secondary[_ngcontent-%COMP%]   .app-header-button[_ngcontent-%COMP%]{background-color:var(--widget-app-header-small-bg-color, var(--y-core-color-other-base));color:var(--y-core-color-text-primary)}.initialized-middle[_nghost-%COMP%], .initialized-logo[_nghost-%COMP%]{transition:opacity .25s}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:64px}[_nghost-%COMP%]   .app-header--content-hidden[_ngcontent-%COMP%]   .app-header-middle[_ngcontent-%COMP%]{opacity:0;pointer-events:none}[_nghost-%COMP%]   .app-header--content-hidden[_ngcontent-%COMP%]   .app-header-middle[_ngcontent-%COMP%]:hover{cursor:auto}[_nghost-%COMP%]   .app-header--content-hidden[_ngcontent-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{opacity:0;pointer-events:none}[_nghost-%COMP%]   .app-header-middle[_ngcontent-%COMP%], [_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   .app-header-main[_ngcontent-%COMP%]{margin-top:env(safe-area-inset-top);width:100%;max-width:600px;display:flex;justify-content:space-between;align-items:center;padding:8px;position:fixed;top:0}[_nghost-%COMP%]   .app-header-main-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;opacity:0}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]{flex-shrink:0;margin-right:8px;width:48px;height:48px;border-radius:100%;background-size:cover;background-position:center center}[_nghost-%COMP%]   .app-header-logo[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   .app-header-middle[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;overflow:hidden}[_nghost-%COMP%]   .app-header-middle[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   .app-header-button[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:100%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:24px}[_nghost-%COMP%]   .app-header-button[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{color:var(--y-core-color-icon-primary)}[_nghost-%COMP%]   .app-header-button[_ngcontent-%COMP%]:empty{width:12px;visibility:hidden}[_nghost-%COMP%]   .app-header-description[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--y-core-color-text-secondary);margin-top:2px}.date-time-page-context[_nghost-%COMP%]   .app-header-main[_ngcontent-%COMP%], .date-time-page-context   [_nghost-%COMP%]   .app-header-main[_ngcontent-%COMP%]{padding:8px 4px}.no-pointer-events[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0}));let r=n;return r})();var Oi=[[[\"\",\"topLeftContent\",\"\"]],[[\"\",\"topMiddleContent\",\"\"]],[[\"\",\"topRightContent\",\"\"]],[[\"\",\"panelContent\",\"\"]],[[\"\",\"leftContent\",\"\"]],[[\"\",\"middleContent\",\"\"]],[[\"\",\"rightContent\",\"\"]]],Ti=[\"[topLeftContent]\",\"[topMiddleContent]\",\"[topRightContent]\",\"[panelContent]\",\"[leftContent]\",\"[middleContent]\",\"[rightContent]\"];function Ii(r,n){if(r&1&&ee(0,4),r&2){l();let o=ue(4);s(\"ngTemplateOutlet\",o)}}function Hi(r,n){if(r&1&&ee(0,4),r&2){l();let o=ue(6);s(\"ngTemplateOutlet\",o)}}function Ai(r,n){if(r&1){let o=b();d(0,\"app-header-big\",5),w(1,\"async\"),f(\"backClick\",function(e){g(o);let i=l();return u(i.backClick.emit(e))})(\"closeClick\",function(e){g(o);let i=l();return u(i.closeClick.emit(e))})(\"profileClick\",function(){g(o);let e=l();return u(e.onProfileClick())})(\"titleClick\",function(){g(o);let e=l();return u(e.openCompanyModal())})(\"logoClick\",function(){g(o);let e=l();return u(e.openCompanyModal())})(\"smallHeaderMiddleClick\",function(){g(o);let e=l();return u(e.openCompanyModal())}),E(2,6),P(3),B(),E(4,7),P(5,1),B(),E(6,8),P(7,2),B(),E(8,9),P(9,3),B(),m()}if(r&2){let o=l();s(\"theme\",o.theme)(\"backgroundImage\",O(1,12,o.bookFormImage))(\"logoImage\",o.currentLogoImage)(\"contentType\",o.contentType)(\"title\",o.currentTitle)(\"description\",o.currentDescription)(\"isTitleChevronArrow\",o.currentIsTitleChevronArrow)(\"isBackButton\",o.isBackButton)(\"isProfileButton\",o.isProfileButton)(\"isCloseButton\",o.isCloseButton)(\"isSmallHeaderHidden\",o.isSmallHeaderHidden)(\"useMiddleClick\",o.useMiddleClick)}}function Ei(r,n){if(r&1){let o=b();d(0,\"app-header-small\",10),f(\"backClick\",function(e){g(o);let i=l();return u(i.backClick.emit(e))})(\"closeClick\",function(e){g(o);let i=l();return u(i.closeClick.emit(e))})(\"profileClick\",function(e){g(o);let i=l();return u(i.profileClick.emit(e))})(\"titleClick\",function(){g(o);let e=l();return u(e.openCompanyModal())})(\"headerMiddleClick\",function(){g(o);let e=l();return u(e.openCompanyModal())})(\"logoClick\",function(){g(o);let e=l();return u(e.openCompanyModal())}),E(1,11),P(2,4),B(),E(3,12),P(4,5),B(),E(5,13),P(6,6),B(),m()}if(r&2){let o=l();s(\"theme\",o.theme)(\"logoImage\",o.currentLogoImage)(\"title\",o.currentTitle)(\"description\",o.currentDescription)(\"isTitleChevronArrow\",o.currentIsTitleChevronArrow)(\"isBackButton\",o.isBackButton)(\"isProfileButton\",o.isProfileButton)(\"isCloseButton\",o.isCloseButton)(\"isContentHidden\",o.isContentHidden)(\"useMiddleClick\",o.useMiddleClick)(\"routerLink\",\"/company/-1/about\")(\"skipNavigation\",!0)}}var ye=\"small\",Ye=\"big\",Mo=(()=>{let n=class n extends Y{constructor(e,i,p,h,y,ie,zt,Yt,qt,Gt,Kt,Zt,Xt){super();t(this,\"route\");t(this,\"router\");t(this,\"navigationService\");t(this,\"activityNavigation\");t(this,\"recordType\");t(this,\"modalService\");t(this,\"headerHeightChanges\");t(this,\"headerScrollChanges\");t(this,\"changeDetectorRef\");t(this,\"altegiomePromoService\");t(this,\"location\");t(this,\"navigationStepUrlResolver\");t(this,\"trackingService\");t(this,\"store\",F(Q));t(this,\"currentHeaderTemplate\");t(this,\"isHeaderRemoved\",this.store.selectSnapshot(v.widgetSettings.getWidgetHideHeader));t(this,\"templateType\",ye);t(this,\"isContentHidden\",!1);t(this,\"useMiddleClick\",!0);t(this,\"company\");t(this,\"bookFormImage\",this.store.select(v.bookform.getBookformHeaderImages).pipe(J(e=>!!e)));t(this,\"templateTypeSmall\",ye);t(this,\"templateTypeBig\",Ye);t(this,\"companySource\");t(this,\"openCompanyModalSubject\",new Ge);t(this,\"AppRoutes\",_e);this.route=e,this.router=i,this.navigationService=p,this.activityNavigation=h,this.recordType=y,this.modalService=ie,this.headerHeightChanges=zt,this.headerScrollChanges=Yt,this.changeDetectorRef=qt,this.altegiomePromoService=Gt,this.location=Kt,this.navigationStepUrlResolver=Zt,this.trackingService=Xt,this.isBackButton=this.isBackButtonVisibleByDefault,this.isProfileButton=this.isProfileButtonVisibleByDefault,this.templateType=this.isOnOrderFirstStep?Ye:ye,this.contentType=Ce,this.openCompanyModalSubject.pipe(Xe(500)).subscribe(()=>this.handleOpenCompanyModal())}get hostZIndex(){return this.zIndex}get hostClassBig(){return this.templateType===Ye}get hostClassSmall(){return this.templateType===ye}get currentTitle(){var e,i;return(i=this.title)!=null?i:(e=this.company)==null?void 0:e.title}get currentDescription(){var e,i;return(i=this.description)!=null?i:(e=this.company)==null?void 0:e.address}get currentLogoImage(){var e,i;return this.contentType!==Et?(i=this.logoImageUrl)!=null?i:(e=this.company)==null?void 0:e.logo:null}get currentIsTitleChevronArrow(){var e;return(e=this.isTitleChevronArrow)!=null?e:[Ce,Ne].includes(this.contentType)}get currentHeight(){var e;return(e=this.currentHeaderTemplate)==null?void 0:e.nativeElement.clientHeight}get isOnOrderFirstStep(){let{snapshot:e}=this.route;return[this.navigationService.isOnOrderFirstStep(e),this.activityNavigation.isOnOrderFirstStep(e)].includes(!0)}get isOnRecordTypeStep(){return this.navigationService.isOnRecordTypeStep(this.route.snapshot)}get isBackButtonVisibleByDefault(){return[!this.isOnOrderFirstStep,this.isOnOrderFirstStep&&this.recordType.isMixedRecordType()].includes(!0)}get isProfileButtonVisibleByDefault(){return this.isOnOrderFirstStep}get windowResizeObservable(){return Pe(window,\"resize\").pipe(I(()=>{}))}get documentScrollYObservable(){return Ke(Pe(window,\"scroll\"),Pe(document.body,\"scroll\")).pipe(I(()=>window.scrollY||document.body.scrollTop))}ngOnInit(){[Ce,Ne].includes(this.contentType)&&this.initCompany(),this.store.select(v.companies.getCompanies).pipe(J(e=>!(e!=null&&e.length)),we(()=>this.store.select(v.bookform.getGroupId).pipe(J(Boolean),Oe(e=>this.store.dispatch(new De({groupId:e,bookformId:this.store.selectSnapshot(v.bookform.getBookformId)}))))),$(this.destroy$)).subscribe()}ngAfterViewInit(){this.notifyHeightChanges(),this.notifyHeightChangesOnResize(),this.notifyScrollChangesOnDocumentScroll()}ngAfterContentInit(){this.notifyHeightChanges()}onProfileClick(){return ge(this,null,function*(){Ct.start(\"booking_profile_page_open\"),this.profileClick.emit(),this.store.selectSnapshot(v.user.isLoggedIn)&&this.store.selectSnapshot(v.bookform.getIsAltegiomePromoFeatureEnabled)&&this.altegiomePromoService.openAuthPromo(),yield this.router.navigate([_e.profile],{queryParamsHandling:\"preserve\"})})}openCompanyModal(){this.openCompanyModalSubject.next()}handleOpenCompanyModal(){this.trackingService.track({type:le.Action.click,element_type:\"button\",element_name:\"about_company_header_button\",element_id:this.company.id});let e=!(this.isOnOrderFirstStep||this.isOnRecordTypeStep);if(this.store.selectSnapshot(v.companies.getCompanies).length!==0&&!e){this.modalService.openModal({component:Nt,componentData:{company:this.companySource,allCompaniesBtnIsHidden:e},params:{modalType:dt.default,closeButtonDataLocator:\"pointer_back\"}});return}let p=this.router.createUrlTree([\"/company\",this.company.id,\"about\"],{queryParams:{[j]:this.navigationStepUrlResolver.removeQueryParamFromUrl(this.location.path(),j)},queryParamsHandling:\"merge\"});this.router.navigateByUrl(p)}initCompany(){this.store.select(v.currentCompany.getCurrentCompany).pipe($(this.destroy$)).subscribe(e=>this.setCompany(e))}setCompany(e){if(!e){this.defineCompany();return}let i=[];this.contentType===Ce?i=[\"title\",\"address\",\"logo\",\"id\"]:this.contentType===Ne&&(i=[\"title\",\"logo\",\"id\"]),this.company=Object.keys(e).reduce((p,h)=>(i.includes(h)&&(p[h]=e[h]),p),{}),this.companySource=e,this.changeDetectorRef.detectChanges()}defineCompany(){let e=+this.route.snapshot.paramMap.get(ft);e&&this.store.dispatch(new _t(e))}checkHeightChanges(){let e=this.headerHeightChanges.current,i=this.currentHeight;return e!==i}notifyHeightChanges(){typeof this.currentHeight==\"number\"&&this.checkHeightChanges()&&this.headerHeightChanges.notify(this.currentHeight)}notifyHeightChangesOnResize(){if(this.templateType===ye)return;this.windowResizeObservable.pipe($(this.destroy$)).subscribe(()=>{this.notifyHeightChanges()})}notifyScrollChangesOnDocumentScroll(){this.headerScrollChanges.notify(0),this.documentScrollYObservable.pipe($(this.destroy$)).subscribe(e=>{this.headerScrollChanges.notify(e)})}};t(n,\"\\u0275fac\",function(i){return new(i||n)(_(pt),_(re),_(Pt),_(Ut),_(jt),_(pe),_(he),_(W),_(Ae),_(Tt),_(oe),_(X),_(Re))}),t(n,\"\\u0275cmp\",S({type:n,selectors:[[\"app-header\"]],viewQuery:function(i,p){if(i&1&&D(Y,5,A),i&2){let h;V(h=N())&&(p.currentHeaderTemplate=h.first)}},hostVars:8,hostBindings:function(i,p){i&2&&(M(\"z-index\",p.hostZIndex),x(\"big\",p.hostClassBig)(\"small\",p.hostClassSmall)(\"removed-header\",p.isHeaderRemoved))},inputs:{templateType:\"templateType\",isContentHidden:\"isContentHidden\",useMiddleClick:\"useMiddleClick\"},features:[ne],ngContentSelectors:Ti,decls:7,vars:3,consts:[[\"bigHeaderTemplate\",\"\"],[\"smallHeaderTemplate\",\"\"],[3,\"ngSwitch\"],[3,\"ngTemplateOutlet\",4,\"ngSwitchCase\"],[3,\"ngTemplateOutlet\"],[3,\"backClick\",\"closeClick\",\"profileClick\",\"titleClick\",\"logoClick\",\"smallHeaderMiddleClick\",\"theme\",\"backgroundImage\",\"logoImage\",\"contentType\",\"title\",\"description\",\"isTitleChevronArrow\",\"isBackButton\",\"isProfileButton\",\"isCloseButton\",\"isSmallHeaderHidden\",\"useMiddleClick\"],[\"topLeftContent\",\"\"],[\"topMiddleContent\",\"\"],[\"topRightContent\",\"\"],[\"panelContent\",\"\"],[3,\"backClick\",\"closeClick\",\"profileClick\",\"titleClick\",\"headerMiddleClick\",\"logoClick\",\"theme\",\"logoImage\",\"title\",\"description\",\"isTitleChevronArrow\",\"isBackButton\",\"isProfileButton\",\"isCloseButton\",\"isContentHidden\",\"useMiddleClick\",\"routerLink\",\"skipNavigation\"],[\"leftContent\",\"\"],[\"middleContent\",\"\"],[\"rightContent\",\"\"]],template:function(i,p){i&1&&(K(Oi),E(0,2),C(1,Ii,1,1,\"ng-container\",3)(2,Hi,1,1,\"ng-container\",3),B(),C(3,Ai,10,14,\"ng-template\",null,0,te)(5,Ei,7,12,\"ng-template\",null,1,te)),i&2&&(s(\"ngSwitch\",p.templateType),c(),s(\"ngSwitchCase\",p.templateTypeBig),c(),s(\"ngSwitchCase\",p.templateTypeSmall))},dependencies:[Ee,ot,rt,ae,se,Ve,Ue,fe,Z],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;position:relative;width:100%;max-width:600px;-webkit-overflow-scrolling:touch}.removed-header[_nghost-%COMP%]{display:none!important}'],changeDetection:0}));let r=n;return r})();var Qt=(()=>{let n=class n{constructor(){t(this,\"iconName\");t(this,\"locator\")}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275cmp\",S({type:n,selectors:[[\"app-header-button\"]],inputs:{iconName:\"iconName\",locator:\"locator\"},decls:1,vars:2,consts:[[3,\"name\"]],template:function(e,i){e&1&&T(0,\"ui-kit-svg-icon\",0),e&2&&(s(\"name\",i.iconName),k(\"data-locator\",i.locator))},dependencies:[Be],styles:[\"[_nghost-%COMP%]{width:48px;height:48px;border-radius:100%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:24px;cursor:pointer;outline:none;border:none}\"],changeDetection:0}));let r=n;return r})();var Ri=[\"titleContent\"],Di=[\"titleContentContainer\"];function Vi(r,n){if(r&1&&(d(0,\"span\",10),T(1,\"ui-kit-svg-icon\",11),m()),r&2){let o=l(2);k(\"data-locator\",o.dataLocators.buttonCompanyInfo),c(),x(\"rotate\",o.rotateIcon),s(\"name\",o.titleIcon)}}function Ni(r,n){if(r&1){let o=b();d(0,\"span\",6),f(\"click\",function(){g(o);let e=l();return u(e.isChevronArrow&&e.titleClick.emit())}),d(1,\"span\",7),U(2),m(),d(3,\"span\",8)(4,\"span\"),U(5),m(),C(6,Vi,2,4,\"span\",9),m()()}if(r&2){let o=n.titlePart1,a=n.titlePart2,e=l();k(\"data-locator\",e.dataLocators.clickableArea),c(2),z(o),c(3),z(a),c(),s(\"ngIf\",e.isChevronArrow)}}var qe=(()=>{let n=class n{constructor(a,e){t(this,\"elementRef\");t(this,\"cdr\");t(this,\"titleIcon\",\"common/arrow-down\");t(this,\"rotateIcon\",!1);t(this,\"titleContentTemplate\");t(this,\"titleContentContainer\");t(this,\"dataLocators\",ce.titleBlock);t(this,\"parentTemplateType\");t(this,\"isChevronArrow\",!0);t(this,\"titleClick\",new H);t(this,\"hostLineHeight\",0);t(this,\"titleContentEmbeddedViewRef\");this.elementRef=a,this.cdr=e}get hostClassSmall(){return this.parentTemplateType===\"small\"}get hostClassBig(){return this.parentTemplateType===\"big\"}set title(a){this.renderTitleContent(a)}get maxLines(){return this.parentTemplateType===\"big\"?2:1}get maxHeight(){return this.hostLineHeight*this.maxLines}ngAfterViewInit(){let a=getComputedStyle(this.elementRef.nativeElement);this.hostLineHeight=parseInt(a.lineHeight),this.cdr.detectChanges()}ngOnDestroy(){var a;(a=this.titleContentEmbeddedViewRef)==null||a.destroy()}renderTitleContent(a){let e=this.getTitleContentContext(a);this.titleContentContainer.clear(),this.titleContentEmbeddedViewRef=this.titleContentContainer.createEmbeddedView(this.titleContentTemplate,e),this.cdr.detectChanges()}getTitleContentContext(a){let e=\" \",i=a.split(e),p=i.pop();return{titlePart1:i.length?[...i,e].join(e):\"\",titlePart2:p}}};t(n,\"\\u0275fac\",function(e){return new(e||n)(_(A),_(Ae))}),t(n,\"\\u0275cmp\",S({type:n,selectors:[[\"app-header-title\"]],viewQuery:function(e,i){if(e&1&&(D(Ri,7,it),D(Di,7,nt)),e&2){let p;V(p=N())&&(i.titleContentTemplate=p.first),V(p=N())&&(i.titleContentContainer=p.first)}},hostVars:4,hostBindings:function(e,i){e&2&&x(\"small\",i.hostClassSmall)(\"big\",i.hostClassBig)},inputs:{titleIcon:\"titleIcon\",rotateIcon:\"rotateIcon\",parentTemplateType:\"parentTemplateType\",isChevronArrow:\"isChevronArrow\",title:\"title\"},outputs:{titleClick:\"titleClick\"},decls:8,vars:9,consts:[[\"titleContentContainer\",\"\"],[\"titleContent\",\"\"],[1,\"app-header-title\"],[1,\"app-header-title-lines-breaker\"],[1,\"app-header-title-content-wrapper\"],[1,\"app-header-title-blur\"],[1,\"app-header-title-content\",3,\"click\"],[1,\"app-header-title-content-part1\"],[1,\"app-header-title-content-part2\"],[\"class\",\"app-header-title-chevron-wrapper\",4,\"ngIf\"],[1,\"app-header-title-chevron-wrapper\"],[3,\"name\"]],template:function(e,i){e&1&&(d(0,\"div\",2),T(1,\"span\",3),d(2,\"span\",4),ee(3,null,0),m(),T(5,\"span\",5),m(),C(6,Ni,7,4,\"ng-template\",null,1,te)),e&2&&(M(\"max-height\",i.maxHeight,\"px\"),k(\"data-locator\",i.dataLocators.title+\"_\"+i.parentTemplateType),c(),M(\"height\",i.hostLineHeight*(i.maxLines-1),\"px\"),c(),x(\"app-header-title-content-wrapper--clickable\",i.isChevronArrow),c(3),M(\"height\",i.hostLineHeight,\"px\"))},dependencies:[L,Be],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;background-color:var(--widget-app-header-title-bg-color);color:var(--y-core-color-text-primary);overflow:hidden;position:relative;width:100%;-webkit-text-size-adjust:100%}.big[_nghost-%COMP%]{align-items:end;font-style:normal;font-weight:700;font-size:24px;line-height:28px}.big[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{padding-left:8px}.big[_nghost-%COMP%]   .app-header-title-blur[_ngcontent-%COMP%]{width:60px}.small[_nghost-%COMP%]{align-items:center;font-style:normal;font-weight:500;font-size:16px;line-height:24px}.small[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{padding-left:4px}.small[_nghost-%COMP%]   .app-header-title-blur[_ngcontent-%COMP%]{width:40px}[_nghost-%COMP%]   .app-header-title[_ngcontent-%COMP%]{width:calc(10000px + 100%);flex-shrink:0}[_nghost-%COMP%]   .app-header-title-blur[_ngcontent-%COMP%]{position:absolute;background:linear-gradient(270deg,var(--widget-app-header-title-bg-color) 50%,rgba(255,255,255,0) 100%);bottom:0;right:0}[_nghost-%COMP%]   .app-header-title-lines-breaker[_ngcontent-%COMP%]{display:inline-block;width:10000px;float:right}[_nghost-%COMP%]   .app-header-title-content-wrapper--clickable[_ngcontent-%COMP%]   .app-header-title-content[_ngcontent-%COMP%], [_nghost-%COMP%]   .app-header-title-content-wrapper--clickable[_ngcontent-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;display:inline-flex;bottom:0;right:0;z-index:1;color:var(--y-core-color-text-primary)}[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]   ui-kit-svg-icon[_ngcontent-%COMP%]{width:24px;height:24px;color:var(--y-core-color-icon-secondary)}[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]   ui-kit-svg-icon.rotate[_ngcontent-%COMP%]{transform:rotate(270deg)}[_nghost-%COMP%]   .app-header-title-chevron-wrapper[_ngcontent-%COMP%]{vertical-align:middle}[_nghost-%COMP%]   .app-header-title-content[_ngcontent-%COMP%]{word-break:break-word}[_nghost-%COMP%]   .app-header-title-content-part2[_ngcontent-%COMP%]{word-break:unset;white-space:nowrap}[_nghost-%COMP%]   .app-header-title-content-part1[_ngcontent-%COMP%]:empty ~ .app-header-title-content-part2[_ngcontent-%COMP%]{word-break:break-word;white-space:normal}'],changeDetection:0}));let r=n;return r})();var Ui=[\"sectionEl\"],ji=[\"*\"];function Li(r,n){if(r&1&&(d(0,\"div\",2),U(1),m()),r&2){let o=l();k(\"data-locator\",\"page_title\"),c(),z(o.title)}}var Xo=(()=>{let n=class n{constructor(){t(this,\"storeSnapshotService\",F(Q));t(this,\"headerScrollChanges\",F(W));t(this,\"isHeaderRemoved\",this.storeSnapshotService.selectSnapshot(v.widgetSettings.getWidgetHideHeader));t(this,\"shadowBottom\",!1);t(this,\"roundedBottom\",!1);t(this,\"theme\",$e);t(this,\"title\",\"\");t(this,\"isSticky\",!1);t(this,\"isRounded\",!1);t(this,\"zIndex\",ze);t(this,\"scrollContainer\");t(this,\"paddingY\",0);t(this,\"sectionEl\");t(this,\"originalHeight\",new ve(0));t(this,\"height$\");this.height$=be([this.headerScrollChanges.listen(),this.originalHeight]).pipe(Me(()=>!this.isSticky),I(([a,e])=>{if(!e)return\"100%\";if(a<=0)return\"\".concat(e,\"px\");let i=e-a;return i<0?\"0px\":\"\".concat(i,\"px\")}))}get hostClassSticky(){return this.isSticky}get hostClassRounded(){return this.isRounded}get hostClassPrimary(){return this.theme===Ht}get hostClassSecondary(){return this.theme===Qe}get hostZIndex(){return this.zIndex}onMousewheel(a){this.scrollContainer&&(this.scrollContainer.scrollTop=this.scrollContainer.scrollTop+a.deltaY)}ngAfterViewInit(){this.originalHeight.next(this.sectionEl.nativeElement.offsetHeight+2*this.paddingY)}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275cmp\",S({type:n,selectors:[[\"app-header-addition\"]],viewQuery:function(e,i){if(e&1&&D(Ui,5,A),e&2){let p;V(p=N())&&(i.sectionEl=p.first)}},hostVars:16,hostBindings:function(e,i){e&1&&f(\"mousewheel\",function(h){return i.onMousewheel(h)}),e&2&&(M(\"z-index\",i.hostZIndex),x(\"sticky\",i.hostClassSticky)(\"rounded\",i.hostClassRounded)(\"primary\",i.hostClassPrimary)(\"secondary\",i.hostClassSecondary)(\"removed-header\",i.isHeaderRemoved)(\"shadow-bottom\",i.shadowBottom)(\"rounded-bottom\",i.roundedBottom))},inputs:{shadowBottom:\"shadowBottom\",roundedBottom:\"roundedBottom\",theme:\"theme\",title:\"title\",isSticky:\"isSticky\",isRounded:\"isRounded\",zIndex:\"zIndex\",scrollContainer:\"scrollContainer\",paddingY:\"paddingY\"},ngContentSelectors:ji,decls:5,vars:5,consts:[[\"sectionEl\",\"\"],[\"class\",\"title\",4,\"ngIf\"],[1,\"title\"]],template:function(e,i){e&1&&(K(),d(0,\"section\",null,0),w(2,\"async\"),C(3,Li,2,2,\"div\",1),P(4),m()),e&2&&(M(\"height\",O(2,3,i.height$)),c(3),s(\"ngIf\",i.title))},dependencies:[L,Z],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%;max-width:600px;overflow:hidden;height:fit-content;-webkit-overflow-scrolling:touch}.removed-header[_nghost-%COMP%]{top:0!important}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:700;font-size:24px;line-height:28px;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;word-wrap:break-word}.primary[_nghost-%COMP%]{background-color:var(--y-core-color-surface-primary)}.secondary[_nghost-%COMP%]{background-color:var(--y-core-color-other-base)}.sticky[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:64px}.rounded[_nghost-%COMP%]{border-bottom-right-radius:24px;border-bottom-left-radius:24px}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{display:flex;align-items:center}.shadow-bottom[_nghost-%COMP%]{box-shadow:0 8px 16px -8px #212f4133}.rounded-bottom[_nghost-%COMP%]{border-bottom-left-radius:24px;border-bottom-right-radius:24px}'],changeDetection:0}));let r=n;return r})();function Fi(r,n){if(r&1){let o=b();d(0,\"img\",3),f(\"load\",function(){g(o);let e=l();return u(e.changeQuality(1))}),m()}if(r&2){let o=l();M(\"aspect-ratio\",o.aspectRatio),s(\"src\",o.urls.low,Te)}}function Qi(r,n){if(r&1){let o=b();d(0,\"img\",3),f(\"load\",function(){g(o);let e=l();return u(e.changeQuality(2))}),m()}if(r&2){let o=l();M(\"aspect-ratio\",o.aspectRatio),x(\"hide-before-loaded\",o.currentQuality!==2),s(\"src\",o.urls.medium,Te),k(\"data-locator\",\"avatar\")}}function $i(r,n){if(r&1){let o=b();d(0,\"img\",3),f(\"load\",function(){g(o);let e=l();return u(e.changeQuality(3))}),m()}if(r&2){let o=l();M(\"aspect-ratio\",o.aspectRatio),x(\"hide-before-loaded\",o.currentQuality!==3),s(\"src\",o.urls.high,Te),k(\"data-locator\",\"avatar\")}}var $t=(()=>{let n=class n{constructor(){t(this,\"aspectRatio\",1);t(this,\"urls\");t(this,\"currentQuality\",0)}changeQuality(a){switch(a){case 1:this.currentQuality=1;break;case 2:this.currentQuality=2;break;case 3:this.currentQuality=3;break;default:throw new Error}}};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275cmp\",S({type:n,selectors:[[\"app-progressive-image\"]],inputs:{aspectRatio:\"aspectRatio\",urls:\"urls\"},decls:4,vars:3,consts:[[1,\"progressive_image_wrapper\"],[\"class\",\"image\",\"loading\",\"lazy\",3,\"src\",\"aspect-ratio\",\"load\",4,\"ngIf\"],[\"class\",\"image\",\"loading\",\"lazy\",3,\"hide-before-loaded\",\"src\",\"aspect-ratio\",\"load\",4,\"ngIf\"],[\"loading\",\"lazy\",1,\"image\",3,\"load\",\"src\"]],template:function(e,i){e&1&&(d(0,\"div\",0),C(1,Fi,1,3,\"img\",1)(2,Qi,1,6,\"img\",2)(3,$i,1,6,\"img\",2),m()),e&2&&(c(),s(\"ngIf\",i.urls.low&&i.currentQuality>=0&&i.currentQuality<2),c(),s(\"ngIf\",i.urls.medium&&i.currentQuality>=1&&i.currentQuality<3),c(),s(\"ngIf\",i.urls.high&&i.currentQuality>=2))},dependencies:[L],styles:['@charset \"UTF-8\";.progressive_image_wrapper[_ngcontent-%COMP%]{pointer-events:none;position:relative;max-height:337px}.hide-before-loaded[_ngcontent-%COMP%]{position:absolute;left:0;top:0;right:0;bottom:0}.image[_ngcontent-%COMP%]{width:100%;height:100%;-webkit-user-select:none;user-select:none}'],changeDetection:0}));let r=n;return r})();var Pr=(()=>{let n=class n{};t(n,\"\\u0275fac\",function(e){return new(e||n)}),t(n,\"\\u0275mod\",Je({type:n})),t(n,\"\\u0275inj\",We({providers:[he,W],imports:[at,st,gt,ct,vt]}));let r=n;return r})();Le(Ue,[L,Ee,fe,qe,$t],[Z]);Le(fe,[L,ae,se,Ve,Qt,qe],[]);export{Ut as a,jt as b,Mo as c,Xo as d,Pr as e};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 14548,
          "_transferSize": 15208,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.857Z",
        "time": 630.7069999165833,
        "timings": {
          "blocked": 425.6099999469593,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3350000000000364,
          "wait": 204.09700002826003,
          "receive": 0.6649999413639307,
          "_blocked_queueing": 5.022999946959317,
          "_blocked_proxy": 12.111,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "425011",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-OT2UNM7Q.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7083"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b351355da1079d-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-10d\""
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
              "value": "c9733c770aff182f2f517adf2267e27f"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 269,
            "mimeType": "application/javascript",
            "compression": 134,
            "text": "var c=t=>\"/company/\".concat(t,\"/activity/select/\"),o=(t,i)=>\"/company/\".concat(t,\"/activity/info/\").concat(i),e=(t,i)=>\"/company/\".concat(t,\"/activity/info/\").concat(i,\"/more\"),a=t=>\"/company/\".concat(t,\"/activity/edit-activities\");export{c as a,o as b,e as c,a as d};\n"
          },
          "redirectURL": "",
          "headersSize": 657,
          "bodySize": 135,
          "_transferSize": 792,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.858Z",
        "time": 657.2789999190718,
        "timings": {
          "blocked": 441.7179999606982,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2909999999999968,
          "wait": 214.63099998215586,
          "receive": 0.6389999762177467,
          "_blocked_queueing": 5.299999960698187,
          "_blocked_proxy": 11.847000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "425008",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7082"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b351354df10984-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-1484\""
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
              "value": "bc121359c7b30f094c253f2d3deefabe"
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
            "compression": 3185,
            "text": "import{I as m,P as b,Q as k,R as I}from\"./chunk-6FGVQ7PR.js\";import{Aa as M,Ca as R,Ea as l,Gb as d,La as L,Lb as C,Ma as p,Ua as T,db as O,hb as v,m as h,za as f}from\"./chunk-KO722YSM.js\";import{g as a}from\"./chunk-JV5WWF5Q.js\";var N=[],y=(()=>{let e=class e{constructor(r){this.router=r,this.trees=N}add(r){this.trees.push(r)}shouldPrefetch(r){let i=this.router.parseUrl(r);return this.trees.some(P.bind(null,i))}};e.\\u0275fac=function(i){return new(i||e)(l(b))},e.\\u0275prov=f({token:e,factory:e.\\u0275fac,providedIn:\"root\"});let t=e;return t})();function q(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(s=>e[s]===t[s])}function P(t,e){return q(e.queryParams,t.queryParams)&&w(e.root,t.root,t.root.segments)}function w(t,e,s){if(t.segments.length>s.length){let r=t.segments.slice(0,s.length);return!(!j(r,s)||e.hasChildren())}else if(t.segments.length===s.length){if(!j(t.segments,s))return!1;if(!e.hasChildren())return!0;for(let r in e.children){if(!t.children[r])break;if(w(t.children[r],e.children[r],e.children[r].segments))return!0}return!1}else{let r=s.slice(0,t.segments.length),i=s.slice(t.segments.length);return!j(t.segments,r)||!t.children[m]?!1:w(t.children[m],e,i)}}function j(t,e){return t.length!==e.length?!1:t.every((s,r)=>s.path===e[r].path||s.path.startsWith(\":\")||e[r].path.startsWith(\":\"))}var F=typeof window<\"u\"?window.requestIdleCallback||function(t){let e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)}:()=>{},E=()=>typeof window<\"u\"?!!window.IntersectionObserver:!1,D=new R(\"LinkHandler\"),x=(()=>{let e=class e{constructor(r,i,n){this.loader=r,this.registry=i,this.ngZone=n,this.elementLink=new Map,this.observer=E()?new IntersectionObserver(o=>{o.forEach(c=>{if(this.observer&&c.isIntersecting){let g=c.target,u=this.elementLink.get(g);if(!u||!u.urlTree)return;this.registry.add(u.urlTree),this.observer.unobserve(g),F(()=>{this.loader.preload().subscribe(()=>{})})}})}):null}register(r){this.elementLink.set(r.element,r),this.ngZone.runOutsideAngular(()=>{this.observer&&this.observer.observe(r.element)})}unregister(r){this.observer&&this.elementLink.has(r.element)&&(this.observer.unobserve(r.element),this.elementLink.delete(r.element))}supported(){return E()}};e.\\u0275fac=function(i){return new(i||e)(l(I),l(y),l(O))},e.\\u0275prov=f({token:e,factory:e.\\u0275fac,providedIn:\"root\"});let t=e;return t})(),$=(()=>{let e=class e{constructor(r,i){this.loader=r,this.registry=i}register(r){this.registry.add(r.urlTree),F(()=>this.loader.preload().subscribe(()=>{}))}unregister(r){}supported(){return!0}};e.\\u0275fac=function(i){return new(i||e)(l(I),l(y))},e.\\u0275prov=f({token:e,factory:e.\\u0275fac,providedIn:\"root\"});let t=e;return t})(),_=(()=>{let e=class e{constructor(r,i,n,o){this.linkHandlers=r,this.el=i,this.linkHandler=this.linkHandlers.filter(c=>c.supported()).shift(),this.rl=n||o,this.element&&this.element.setAttribute&&this.element.setAttribute(\"ngx-ql\",\"\")}ngOnChanges(r){r.routerLink&&this.linkHandler&&(this.linkHandler.unregister(this),this.linkHandler.register(this))}ngOnDestroy(){this.linkHandler&&this.linkHandler.unregister(this)}get element(){return this.el.nativeElement}get urlTree(){return this.rl.urlTree}};e.\\u0275fac=function(i){return new(i||e)(d(D),d(v),d(k,8),d(k,8))},e.\\u0275dir=p({type:e,selectors:[[\"\",\"routerLink\",\"\"]],inputs:{routerLink:\"routerLink\"},standalone:!0,features:[T]});let t=e;return t})(),A=(t,e)=>{t=t.slice();let s=new Map,r=new Set;for(;t.length;){let o=t.shift();if(!o)continue;if(r.add(o),o===e)break;let c=o.children||[],g=o._loadedRoutes||[];for(let u of g)u&&u.children&&(c=c.concat(u.children));c.forEach(u=>{r.has(u)||(s.set(u,o),t.push(u))})}let i=\"\",n=e;for(;n;)Z(n)?i=\"/\".concat(n.path).concat(i):i=\"/(\".concat(n.outlet,\":\").concat(n.path).concat(i,\")\"),n=s.get(n);return i.replace(/[\\/]+/,\"/\")};function Z(t){return t.outlet===m||!t.outlet}var S=(()=>{let e=class e{constructor(r,i){this.registry=r,this.router=i,this.loading=new Set}preload(r,i){if(this.loading.has(r))return h;let n=typeof navigator<\"u\"?navigator.connection:void 0;if(n&&((n.effectiveType||\"\").includes(\"2g\")||n.saveData))return h;if(r.data&&r.data.preload===!1)return h;let o=A(this.router.config,r);return this.registry.shouldPrefetch(o)?(this.loading.add(r),i()):h}};e.\\u0275fac=function(i){return new(i||e)(l(y),l(b))},e.\\u0275prov=f({token:e,factory:e.\\u0275fac,providedIn:\"root\"});let t=e;return t})(),U=[{provide:D,useClass:x,multi:!0},{provide:D,useClass:$,multi:!0},y,S],ee=(()=>{let e=class e{};e.\\u0275fac=function(i){return new(i||e)},e.\\u0275mod=L({type:e}),e.\\u0275inj=M({providers:U});let t=e;return t})();var re=(()=>{let e=class e{constructor(r,i){a(this,\"ref\");a(this,\"renderer\");a(this,\"skipNavigation\",!0);a(this,\"unsubscribe\");this.ref=r,this.renderer=i,this.unsubscribe=i.listen(r.nativeElement,\"click\",n=>{this.skipNavigation&&n.stopImmediatePropagation()})}ngOnDestroy(){this.unsubscribe()}};a(e,\"\\u0275fac\",function(i){return new(i||e)(d(v),d(C))}),a(e,\"\\u0275dir\",p({type:e,selectors:[[\"\",\"skipNavigation\",\"\",\"routerLink\",\"\"]],inputs:{skipNavigation:\"skipNavigation\"},standalone:!0}));let t=e;return t})();export{_ as a,S as b,ee as c,re as d};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2067,
          "_transferSize": 2727,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.858Z",
        "time": 655.0939999287948,
        "timings": {
          "blocked": 442.0529999731034,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.20400000000000773,
          "wait": 211.96200004509836,
          "receive": 0.8749999105930328,
          "_blocked_queueing": 5.744999973103404,
          "_blocked_proxy": 11.498,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "425224",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-5HKI7HVK.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7084"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b351357a715dd9-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-eee6\""
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
              "value": "f004249780d698d77f262dc3d8ffeb93"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 61158,
            "mimeType": "application/javascript",
            "compression": 36297,
            "text": "import{c as e2}from\"./chunk-2AY43R2Q.js\";import{c as t2}from\"./chunk-IV3KQJLV.js\";import{Ab as Y,Dc as g,Fc as S,G as x,Sc as Q,Tc as X,ch as k,e as $,j as W,tc as V,uc as y,ui as d,vc as J,xa as q,zb as K}from\"./chunk-6FGVQ7PR.js\";import{Ac as O,Ea as M,Fa as h,Fb as s,Gb as j,Ka as I,Pb as G,Pc as c,Qc as L,Ub as u,Va as D,Wa as U,Xa as f,Xb as m,Ya as w,ec as t,fc as r,gc as o,hc as v,i as A,ic as b,ka as T,kc as R,oc as P,pc as N,x as E,yc as z,za as F}from\"./chunk-KO722YSM.js\";import{a as B}from\"./chunk-POJFEGQU.js\";import{g as C}from\"./chunk-JV5WWF5Q.js\";function l2(n,i){n&1&&(f(),v(0),o(1,\"path\",60)(2,\"path\",61)(3,\"path\",62),b())}function s2(n,i){n&1&&(f(),v(0),o(1,\"path\",63)(2,\"path\",64)(3,\"path\",65),b())}function p2(n,i){n&1&&(t(0,\"div\",66),f(),t(1,\"svg\",67)(2,\"g\",68),o(3,\"path\",69)(4,\"path\",70)(5,\"path\",71)(6,\"path\",72)(7,\"path\",73)(8,\"path\",74)(9,\"path\",75)(10,\"path\",76)(11,\"path\",77)(12,\"path\",78)(13,\"path\",79)(14,\"path\",80)(15,\"path\",81)(16,\"path\",82)(17,\"path\",83)(18,\"path\",84)(19,\"path\",85)(20,\"path\",86)(21,\"path\",87)(22,\"path\",88)(23,\"path\",89)(24,\"path\",90)(25,\"path\",91),r()()())}function m2(n,i){if(n&1){let o2=R();t(0,\"ui-kit-button\",92),c(1,\"translate\"),P(\"click\",function(){D(o2);let e=N();return U(e.goToDownload())}),r()}n&2&&m(\"title\",L(1,1,\"altegiome.large_promo.download\"))}var C2=(()=>{let i=class i extends J{constructor(e){super(e);C(this,\"modalService\");C(this,\"store\",h(q));C(this,\"tracking\",h(S));C(this,\"storeSnapshotService\",h(k));C(this,\"isMobile\",x().phone);C(this,\"buttonType\",Q);C(this,\"isRuLang$\",this.store.select(d.localization.getCurrentLanguage).pipe(E(e=>e===\"ru-RU\"),T(1)));this.modalService=e}ngAfterViewInit(){this.tracking.track({type:g.Action.view,context_element_type:\"banner\",context_element_name:\"aunio_promo_banner\"})}goToDownload(){this.tracking.track({type:g.Action.click,context_element_type:\"button\",context_element_name:\"aunio_promo_banner_button\"});let e=this.storeSnapshotService.selectSnapshot(d.applications.getApplications).find(l=>l.slug===\"aunio\");window.open(e==null?void 0:e.one_link)}skipPromo(){this.tracking.track({type:g.Action.click,context_element_type:\"button\",context_element_name:\"aunio_promo_banner_close_button\"}),this.dismiss()}};C(i,\"\\u0275fac\",function(l){return new(l||i)(j(y))}),C(i,\"\\u0275cmp\",I({type:i,selectors:[[\"app-altegiome-promo\"]],features:[G],decls:81,vars:18,consts:[[1,\"promo-logo\"],[\"width\",\"450\",\"height\",\"70\",\"viewBox\",\"0 0 278 103\",\"fill\",\"none\",\"xmlns\",\"http://www.w3.org/2000/svg\"],[\"clip-path\",\"url(#clip0_760_9502)\"],[\"d\",\"M0 63.4794C0 83.2393 0 93.1193 6.13862 99.2579C12.2772 105.396 22.1572 105.396 41.9171 105.396H62.8756C82.6355 105.396 92.5155 105.396 98.6541 99.2579C104.793 93.1193 104.793 83.2393 104.793 63.4794V42.5208C104.793 22.7609 104.793 12.881 98.6541 6.74238C92.5155 0.60376 82.6355 0.60376 62.8756 0.60376H41.9171C22.1572 0.60376 12.2772 0.60376 6.13862 6.74238C0 12.881 0 22.7609 0 42.5208V63.4794Z\",\"fill\",\"#FFCB00\"],[\"d\",\"M88.4369 80.6724C88.7578 81.2283 88.3567 81.9231 87.715 81.9231H58.5056C58.2078 81.9231 57.9326 81.7642 57.7836 81.5062L37.2384 45.9137C37.0895 45.6557 37.0895 45.3379 37.2384 45.0799L51.8431 19.7787C52.164 19.2229 52.9661 19.2229 53.287 19.7787L88.4369 80.6724Z\",\"fill\",\"#2B3134\"],[\"d\",\"M21.1895 72.8828C21.3384 72.6248 21.6136 72.4659 21.9114 72.4659H51.6723C52.069 72.4659 52.317 72.8954 52.1186 73.2391L47.3466 81.5061C47.1977 81.764 46.9225 81.923 46.6247 81.923H16.8638C16.4671 81.923 16.2191 81.4934 16.4175 81.1498L21.1895 72.8828Z\",\"fill\",\"#2B3134\"],[\"d\",\"M267.78 35.5225C273.16 35.5225 276.627 38.0123 278.394 40.0332V36.2734H285.382V67.8281C285.382 72.3187 283.926 76.192 281.045 78.9404C278.167 81.6865 273.94 83.2412 268.531 83.2412C262.401 83.2412 258.41 81.2299 255.892 78.918C253.393 76.6234 252.378 74.0619 252.132 72.9756L251.955 72.1855H259.393L259.58 72.5068C259.777 72.8452 260.393 73.8821 261.754 74.8379C263.111 75.7904 265.248 76.6904 268.531 76.6904C271.771 76.6904 274.225 75.8435 275.862 74.3564C277.49 72.8774 278.394 70.6894 278.394 67.8281V64.6846C276.64 66.7368 273.201 69.2891 267.78 69.2891C263.492 69.289 259.507 67.7285 256.592 64.8223C253.674 61.9125 251.867 57.6899 251.867 52.4365C251.867 47.1835 253.675 42.9465 256.591 40.0215C259.505 37.0997 263.49 35.5226 267.78 35.5225ZM349.326 60.4062C351.823 60.4062 353.848 62.4312 353.848 64.9287C353.848 67.426 351.823 69.4502 349.326 69.4502C346.829 69.45 344.804 67.4259 344.804 64.9287C344.804 62.4314 346.828 60.4065 349.326 60.4062ZM397.252 36.2021C405.202 36.2022 410.714 42.0372 410.688 50.084V69.3125H403.802V50.625C403.802 46.4029 400.745 42.8381 396.498 42.8379C392.454 42.838 389.382 46.4718 389.381 50.625V69.2754H389.172V69.3125H382.287V50.625C382.287 46.4027 379.23 42.8379 374.982 42.8379C370.939 42.838 367.866 46.4717 367.866 50.625V69.2754H360.938V36.8545H367.886V39.0879C369.853 37.1783 372.438 36.3126 375.199 36.2119L375.737 36.2021C380.23 36.2021 383.945 38.0667 386.321 41.1406L388.829 38.9912C391.07 37.1238 393.918 36.3068 396.71 36.2119L397.252 36.2021ZM152.789 35.5225C158.008 35.5225 161.362 37.9565 163.09 39.9531V36.2734H170.079V68.4756H163.09V64.6582C161.415 66.6864 158.163 69.2266 152.789 69.2266C148.561 69.2264 144.622 67.6636 141.74 64.7568C138.855 61.8469 137.063 57.6255 137.063 52.374C137.063 41.9525 144.289 35.5228 152.789 35.5225ZM230.945 35.5225C235.647 35.5225 239.763 37.2767 242.7 40.3691C245.635 43.4602 247.359 47.85 247.359 53.0625V53.71H221.7C222.27 58.8237 226.059 62.6757 231.508 62.6758C237.479 62.6757 239.665 59.5347 240.141 58.6885L240.327 58.3584H247.1L246.975 59.1123C246.488 62.0328 242.23 69.2264 231.508 69.2266C221.633 69.2265 214.593 61.7953 214.593 52.374C214.593 42.6506 221.497 35.5226 230.945 35.5225ZM322.138 35.5225C331.69 35.5225 339.053 42.8162 339.053 52.374C339.053 61.9321 331.69 69.2266 322.138 69.2266C312.523 69.2263 305.224 61.9303 305.224 52.374C305.224 42.818 312.523 35.5227 322.138 35.5225ZM433.763 34.8584C438.466 34.8584 442.581 36.6128 445.518 39.7051C448.454 42.7961 450.177 47.186 450.177 52.3984V53.0459H424.518C425.088 58.1597 428.877 62.0116 434.327 62.0117C440.297 62.0117 442.483 58.872 442.959 58.0254L443.145 57.6953H449.918L449.793 58.4492C449.306 61.37 445.048 68.5624 434.327 68.5625C424.451 68.5624 417.412 61.1312 417.412 51.71C417.412 41.9866 424.316 34.8586 433.763 34.8584ZM184.266 68.4756H177.278V22.7588H184.266V68.4756ZM198.271 36.2734H210.722V42.6982H198.271V56.0225C198.271 58.7732 198.289 60.1658 199.16 61.0371C200.048 61.9252 201.478 61.9248 204.337 61.9248H210.722V68.4756H202.754C202.069 68.4756 201.412 68.4463 200.784 68.3867C197.317 68.2116 195.151 67.6917 193.609 66.1494C192.187 64.727 191.634 62.7742 191.419 59.7598C191.328 59.0471 191.283 58.2949 191.283 57.5049V27.0771L198.271 22.7588V36.2734ZM299.696 68.4756H292.708V36.2734H299.696V68.4756ZM268.843 42.0723C265.855 42.0724 263.419 43.1928 261.725 45.0244C260.027 46.8611 259.043 49.4506 259.042 52.4365C259.042 58.1987 262.931 62.738 268.843 62.7383C274.626 62.7383 278.52 58.2043 278.52 52.4365C278.52 49.4578 277.544 46.867 275.851 45.0225C274.159 43.179 271.742 42.0723 268.843 42.0723ZM153.853 42.0723C150.932 42.0723 148.541 43.1898 146.877 45.0137C145.209 46.843 144.239 49.4183 144.239 52.374C144.239 58.2073 148.073 62.6757 153.853 62.6758C159.432 62.6756 163.215 58.2213 163.215 52.374C163.215 46.4669 159.434 42.0725 153.853 42.0723ZM322.138 42.0723C316.351 42.0725 312.4 46.612 312.4 52.374C312.4 58.1363 316.351 62.6755 322.138 62.6758C327.928 62.6758 331.876 58.1965 331.876 52.374C331.876 46.5517 327.928 42.0723 322.138 42.0723ZM230.945 41.6973C228.6 41.6973 226.647 42.363 225.147 43.5244C223.845 44.5324 222.856 45.9353 222.25 47.6602H239.493C238.816 45.8586 237.789 44.4488 236.495 43.4561C235.009 42.3165 233.133 41.6973 230.945 41.6973ZM433.763 41.0332C431.419 41.0333 429.466 41.6999 427.965 42.8613C426.663 43.8693 425.674 45.2714 425.068 46.9961H442.311C441.634 45.1946 440.607 43.7847 439.313 42.792C437.827 41.6526 435.952 41.0332 433.763 41.0332ZM296.215 24.1016C298.713 24.1016 300.738 26.1266 300.738 28.624C300.738 31.1215 298.713 33.1464 296.215 33.1465C293.718 33.1464 291.693 31.1215 291.693 28.624C291.693 26.1267 293.718 24.1017 296.215 24.1016Z\",\"fill\",\"#FFFFFF\"],[\"id\",\"clip0_760_9502\"],[\"width\",\"104.793\",\"height\",\"104.793\",\"fill\",\"white\",\"transform\",\"matrix(1 0 0 -1 0 105.396)\"],[1,\"promo-image\"],[\"viewBox\",\"0 0 481 356\",\"fill\",\"none\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"preserveAspectRatio\",\"xMidYMid meet\"],[\"d\",\"M-17 329.5C30.1667 306.333 128 247.5 186.5 266C237.168 282.023 48.1001 258.104 83 176.5C117 97 315 48 486 30\",\"stroke\",\"url(#paint0_linear_28_2343)\",\"stroke-width\",\"59\"],[\"filter\",\"url(#filter0_d_28_2343)\"],[\"x\",\"166.462\",\"y\",\"89\",\"width\",\"277.369\",\"height\",\"168.693\",\"rx\",\"12.1653\",\"transform\",\"rotate(10.0582 166.462 89)\",\"fill\",\"white\"],[\"opacity\",\"0.2\",\"x\",\"183.401\",\"y\",\"104.949\",\"width\",\"243.192\",\"height\",\"11.8048\",\"rx\",\"5.9024\",\"transform\",\"rotate(10.0582 183.401 104.949)\",\"fill\",\"#AEB5C1\"],[\"opacity\",\"0.2\",\"x\",\"230.581\",\"y\",\"154.736\",\"width\",\"162.204\",\"height\",\"11.3543\",\"rx\",\"4.05511\",\"transform\",\"rotate(10.0582 230.581 154.736)\",\"fill\",\"#AEB5C1\"],[\"opacity\",\"0.2\",\"x\",\"227.465\",\"y\",\"172.304\",\"width\",\"107.055\",\"height\",\"11.3543\",\"rx\",\"4.05511\",\"transform\",\"rotate(10.0582 227.465 172.304)\",\"fill\",\"#AEB5C1\"],[\"x\",\"160.671\",\"y\",\"207.874\",\"width\",\"246.934\",\"height\",\"36.16\",\"rx\",\"10.5961\",\"transform\",\"rotate(10.0582 160.671 207.874)\",\"fill\",\"white\"],[\"x\",\"160.671\",\"y\",\"207.874\",\"width\",\"246.934\",\"height\",\"36.16\",\"rx\",\"10.5961\",\"transform\",\"rotate(10.0582 160.671 207.874)\",\"stroke\",\"#FFCB00\",\"stroke-width\",\"0.921397\"],[4,\"ngIf\"],[\"cx\",\"196.496\",\"cy\",\"162.35\",\"r\",\"22.7086\",\"transform\",\"rotate(10.0582 196.496 162.35)\",\"fill\",\"#FFEA99\"],[\"d\",\"M184.106 166.293C182.618 166.029 181.606 165.514 181.071 164.748C180.547 163.983 180.395 162.985 180.613 161.753L182.104 153.349L184.562 153.785L183.071 162.189C182.958 162.828 183.013 163.33 183.236 163.693C183.462 164.045 183.865 164.272 184.446 164.375L188.352 165.068L188.011 166.986L184.106 166.293ZM197.352 165.711L192.575 164.864L191.252 167.56L188.793 167.124L193.5 157.925C193.833 157.264 194.15 156.763 194.45 156.421C194.751 156.078 195.073 155.854 195.415 155.746C195.77 155.641 196.185 155.631 196.662 155.716C197.138 155.8 197.519 155.952 197.804 156.17C198.089 156.389 198.314 156.71 198.478 157.135C198.654 157.562 198.785 158.142 198.87 158.877L200.126 169.135L197.668 168.699L197.352 165.711ZM197.137 163.785L196.563 158.504C196.535 158.187 196.434 158.013 196.26 157.982C196.085 157.951 195.931 158.08 195.796 158.368L193.44 163.129L197.137 163.785ZM204.129 157.256L209.499 158.209C210.778 158.435 211.704 158.888 212.28 159.565C212.867 160.245 213.066 161.113 212.878 162.171C212.775 162.752 212.508 163.244 212.077 163.647C211.646 164.05 211.084 164.28 210.39 164.337C211.086 164.605 211.607 165.045 211.954 165.658C212.303 166.259 212.402 166.984 212.252 167.833C212.068 168.867 211.557 169.622 210.717 170.096C209.892 170.561 208.851 170.682 207.596 170.46L201.964 169.461L204.129 157.256ZM208.575 163.116C209.04 163.198 209.435 163.131 209.762 162.913C210.102 162.686 210.312 162.345 210.392 161.892C210.473 161.439 210.391 161.052 210.148 160.734C209.919 160.405 209.571 160.2 209.107 160.117L206.247 159.61L205.715 162.609L208.575 163.116ZM207.413 168.449C208.134 168.577 208.693 168.532 209.091 168.315C209.491 168.086 209.743 167.681 209.846 167.1C209.949 166.519 209.851 166.058 209.552 165.717C209.255 165.365 208.746 165.125 208.025 164.997L205.375 164.527L204.763 167.979L207.413 168.449Z\",\"fill\",\"black\"],[\"filter\",\"url(#filter1_d_28_2343)\"],[\"x\",\"44\",\"y\",\"110.289\",\"width\",\"63.0763\",\"height\",\"63.0763\",\"rx\",\"31.5382\",\"transform\",\"rotate(-14.9656 44 110.289)\",\"fill\",\"#32393D\"],[\"d\",\"M85.0586 115.35L86.8328 121.987\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"d\",\"M71.7852 118.899L73.5593 125.536\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"d\",\"M66.5935 132.709L96.4479 124.729\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"d\",\"M90.9287 117.325L67.7115 123.531C65.8723 124.022 64.8053 125.907 65.2898 127.72L71.0541 149.284C71.5457 151.123 73.4303 152.19 75.2429 151.706L98.46 145.5C100.299 145.008 101.366 143.123 100.882 141.311L95.1175 119.746C94.6258 117.907 92.7412 116.84 90.9287 117.325Z\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"d\",\"M78.1754 139.494L82.7359 142.131L88.666 131.835\",\"stroke\",\"white\",\"stroke-width\",\"3.00446\",\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\"],[\"filter\",\"url(#filter2_d_28_2343)\"],[\"d\",\"M73 249C79.8333 253.833 97.1 267.3 111.5 274.5C125.9 281.7 140.5 287 148.5 290.5\",\"stroke\",\"url(#paint1_linear_28_2343)\",\"stroke-opacity\",\"0.1\",\"stroke-width\",\"2\",\"shape-rendering\",\"crispEdges\"],[\"id\",\"filter0_d_28_2343\",\"x\",\"99.5862\",\"y\",\"63.3912\",\"width\",\"377.396\",\"height\",\"289.37\",\"filterUnits\",\"userSpaceOnUse\",\"color-interpolation-filters\",\"sRGB\"],[\"flood-opacity\",\"0\",\"result\",\"BackgroundImageFix\"],[\"in\",\"SourceAlpha\",\"type\",\"matrix\",\"values\",\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\",\"hardAlpha\"],[\"dy\",\"11.8048\"],[\"stdDeviation\",\"19.6747\"],[\"in2\",\"hardAlpha\",\"operator\",\"out\"],[\"type\",\"matrix\",\"values\",\"0 0 0 0 0 0 0 0 0 0.113725 0 0 0 0 0.4 0 0 0 0.12 0\"],[\"mode\",\"normal\",\"in2\",\"BackgroundImageFix\",\"result\",\"effect1_dropShadow_28_2343\"],[\"mode\",\"normal\",\"in\",\"SourceGraphic\",\"in2\",\"effect1_dropShadow_28_2343\",\"result\",\"shape\"],[\"id\",\"filter1_d_28_2343\",\"x\",\"44.7181\",\"y\",\"97.8927\",\"width\",\"75.7895\",\"height\",\"75.7896\",\"filterUnits\",\"userSpaceOnUse\",\"color-interpolation-filters\",\"sRGB\"],[\"dy\",\"3.17442\"],[\"stdDeviation\",\"3.17442\"],[\"type\",\"matrix\",\"values\",\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0\"],[\"id\",\"filter2_d_28_2343\",\"x\",\"48.4226\",\"y\",\"226.184\",\"width\",\"124.478\",\"height\",\"91.2325\",\"filterUnits\",\"userSpaceOnUse\",\"color-interpolation-filters\",\"sRGB\"],[\"dy\",\"2\"],[\"stdDeviation\",\"12\"],[\"type\",\"matrix\",\"values\",\"0 0 0 0 0 0 0 0 0 0.113725 0 0 0 0 0.4 0 0 0 0.06 0\"],[\"id\",\"paint0_linear_28_2343\",\"x1\",\"116.827\",\"y1\",\"-53.7229\",\"x2\",\"162.517\",\"y2\",\"327.33\",\"gradientUnits\",\"userSpaceOnUse\"],[\"stop-color\",\"#FFCB00\",\"stop-opacity\",\"0\"],[\"offset\",\"1\",\"stop-color\",\"#FFCB00\"],[\"id\",\"paint1_linear_28_2343\",\"x1\",\"100\",\"y1\",\"247.5\",\"x2\",\"78.3218\",\"y2\",\"275.428\",\"gradientUnits\",\"userSpaceOnUse\"],[\"stop-color\",\"#41423C\"],[1,\"promo-text\"],[1,\"title\"],[1,\"description\"],[1,\"promo-actions\"],[\"class\",\"qr-code\",4,\"ngIf\"],[\"class\",\"download-button\",3,\"title\",\"click\",4,\"ngIf\"],[1,\"skip-button\",3,\"click\",\"title\",\"type\"],[\"d\",\"M215.75 237.254L216.521 232.906L215.653 233.513C215.444 233.658 215.157 233.607 215.011 233.399C214.865 233.19 214.916 232.903 215.125 232.757L216.905 231.513C216.956 231.478 217.012 231.454 217.07 231.441C217.127 231.428 217.188 231.427 217.249 231.438C217.311 231.448 217.367 231.471 217.417 231.503C217.466 231.534 217.511 231.576 217.547 231.627L218.79 233.408C218.936 233.616 218.885 233.903 218.677 234.049C218.468 234.195 218.181 234.144 218.035 233.935L217.428 233.067L216.657 237.415C216.405 238.834 217.352 240.19 218.772 240.441L220.586 240.763C220.837 240.808 221.004 241.047 220.959 241.297C220.915 241.548 220.676 241.715 220.425 241.671L218.611 241.349C216.69 241.008 215.409 239.175 215.75 237.254Z\",\"fill\",\"#2B3134\"],[\"d\",\"M220.878 232.081C220.628 232.037 220.389 232.204 220.344 232.454C220.3 232.705 220.467 232.944 220.717 232.988L222.532 233.31C223.951 233.562 224.898 234.917 224.646 236.337L223.875 240.685L223.02 239.46C222.874 239.252 222.587 239.201 222.378 239.347C222.169 239.492 222.119 239.78 222.264 239.988L223.757 242.124C223.793 242.176 223.837 242.217 223.887 242.249C223.93 242.277 223.978 242.297 224.031 242.31C224.038 242.311 224.046 242.313 224.054 242.314C224.116 242.325 224.176 242.323 224.234 242.311C224.291 242.298 224.347 242.274 224.398 242.238L226.535 240.746C226.743 240.6 226.794 240.313 226.648 240.104C226.503 239.896 226.216 239.845 226.007 239.99L224.782 240.846L225.554 236.498C225.894 234.577 224.613 232.744 222.693 232.403L220.878 232.081Z\",\"fill\",\"#2B3134\"],[\"d\",\"M234.835 244.092C234.216 243.982 233.681 243.777 233.232 243.477C232.786 243.178 232.455 242.814 232.239 242.385C232.027 241.953 231.956 241.485 232.024 240.979L233.44 241.23C233.409 241.507 233.459 241.761 233.589 241.991C233.722 242.22 233.914 242.412 234.165 242.568C234.417 242.725 234.708 242.832 235.039 242.891C235.403 242.955 235.736 242.949 236.038 242.872C236.343 242.796 236.595 242.66 236.794 242.462C236.994 242.262 237.12 242.013 237.173 241.715C237.228 241.406 237.197 241.119 237.079 240.857C236.965 240.591 236.768 240.364 236.488 240.175C236.211 239.986 235.86 239.854 235.433 239.778L234.652 239.64L234.854 238.503L235.634 238.642C235.977 238.703 236.289 238.694 236.569 238.617C236.853 238.54 237.087 238.405 237.274 238.211C237.461 238.015 237.58 237.768 237.633 237.47C237.684 237.185 237.663 236.925 237.571 236.692C237.483 236.456 237.332 236.257 237.119 236.095C236.909 235.934 236.646 235.825 236.33 235.769C236.029 235.716 235.738 235.721 235.457 235.786C235.179 235.849 234.941 235.968 234.742 236.143C234.544 236.316 234.414 236.543 234.352 236.823L233.003 236.584C233.107 236.087 233.332 235.675 233.679 235.345C234.029 235.017 234.454 234.787 234.955 234.655C235.456 234.524 235.989 234.508 236.554 234.609C237.147 234.714 237.637 234.92 238.026 235.228C238.419 235.533 238.698 235.898 238.865 236.321C239.035 236.745 239.078 237.184 238.995 237.637C238.906 238.155 238.684 238.569 238.328 238.878C237.975 239.187 237.547 239.361 237.044 239.399L237.032 239.471C237.629 239.673 238.06 240.001 238.327 240.455C238.597 240.909 238.679 241.427 238.573 242.01C238.485 242.519 238.263 242.949 237.906 243.302C237.552 243.654 237.109 243.903 236.578 244.048C236.047 244.189 235.466 244.204 234.835 244.092ZM241.835 245.362C241.396 245.284 241.013 245.132 240.687 244.907C240.362 244.678 240.123 244.39 239.971 244.04C239.822 243.691 239.788 243.29 239.868 242.835C239.938 242.445 240.07 242.136 240.265 241.91C240.46 241.684 240.699 241.52 240.98 241.418C241.262 241.316 241.568 241.256 241.897 241.237C242.226 241.217 242.558 241.217 242.892 241.236C243.316 241.262 243.659 241.283 243.923 241.298C244.188 241.311 244.385 241.292 244.515 241.24C244.645 241.189 244.725 241.082 244.753 240.92L244.759 240.888C244.829 240.494 244.772 240.169 244.588 239.913C244.407 239.658 244.098 239.492 243.662 239.414C243.208 239.334 242.832 239.371 242.535 239.526C242.241 239.679 242.023 239.868 241.881 240.094L240.664 239.58C240.889 239.186 241.169 238.885 241.504 238.678C241.842 238.468 242.211 238.338 242.61 238.288C243.011 238.235 243.42 238.245 243.838 238.32C244.114 238.369 244.402 238.454 244.7 238.575C245.001 238.693 245.272 238.862 245.512 239.082C245.755 239.302 245.936 239.587 246.054 239.936C246.172 240.283 246.187 240.709 246.097 241.214L245.281 245.815L243.964 245.581L244.132 244.634L244.078 244.624C243.96 244.783 243.798 244.931 243.594 245.069C243.39 245.206 243.141 245.306 242.848 245.369C242.554 245.432 242.217 245.429 241.835 245.362ZM242.32 244.331C242.693 244.397 243.025 244.38 243.315 244.28C243.609 244.18 243.846 244.023 244.027 243.81C244.211 243.595 244.327 243.35 244.376 243.077L244.534 242.184C244.477 242.223 244.376 242.252 244.23 242.269C244.088 242.284 243.927 242.291 243.747 242.291C243.568 242.287 243.394 242.282 243.224 242.277C243.055 242.269 242.913 242.262 242.799 242.257C242.532 242.244 242.283 242.257 242.053 242.297C241.825 242.337 241.634 242.42 241.479 242.544C241.327 242.666 241.229 242.847 241.187 243.088C241.127 243.422 241.206 243.696 241.422 243.911C241.639 244.123 241.938 244.263 242.32 244.331ZM247.077 246.133L248.306 239.205L253.958 240.208L252.729 247.136L251.407 246.901L252.43 241.137L249.412 240.602L248.39 246.366L247.077 246.133ZM256.189 245.8L260.136 241.304L261.588 241.561L260.359 248.489L259.038 248.255L259.932 243.212L255.998 247.716L254.532 247.455L255.761 240.528L257.082 240.762L256.189 245.8ZM265.066 249.468C264.395 249.349 263.845 249.095 263.415 248.705C262.988 248.313 262.693 247.825 262.53 247.241C262.367 246.657 262.347 246.018 262.47 245.323C262.595 244.62 262.837 244.022 263.197 243.531C263.558 243.036 264.006 242.68 264.541 242.462C265.076 242.243 265.669 242.192 266.322 242.308C266.848 242.401 267.3 242.582 267.677 242.851C268.055 243.116 268.339 243.446 268.53 243.839C268.724 244.233 268.803 244.668 268.769 245.142L267.456 244.91C267.442 244.572 267.326 244.263 267.109 243.983C266.895 243.703 266.573 243.525 266.143 243.448C265.767 243.382 265.42 243.423 265.102 243.571C264.788 243.717 264.52 243.958 264.299 244.294C264.079 244.627 263.925 245.04 263.838 245.533C263.748 246.038 263.747 246.488 263.836 246.882C263.924 247.276 264.09 247.599 264.334 247.85C264.581 248.101 264.895 248.261 265.277 248.329C265.533 248.374 265.773 248.368 265.997 248.312C266.224 248.253 266.424 248.148 266.597 247.995C266.773 247.843 266.912 247.648 267.013 247.408L268.326 247.641C268.198 248.081 267.981 248.455 267.675 248.763C267.369 249.072 266.994 249.291 266.549 249.42C266.108 249.549 265.613 249.565 265.066 249.468ZM271.368 250.6C270.929 250.522 270.546 250.371 270.22 250.145C269.895 249.917 269.656 249.628 269.504 249.278C269.355 248.929 269.321 248.528 269.401 248.074C269.471 247.683 269.603 247.375 269.798 247.149C269.993 246.923 270.232 246.759 270.513 246.657C270.795 246.555 271.101 246.494 271.43 246.475C271.759 246.456 272.091 246.456 272.425 246.475C272.849 246.5 273.192 246.521 273.456 246.537C273.721 246.55 273.918 246.53 274.048 246.479C274.178 246.428 274.258 246.321 274.286 246.158L274.292 246.127C274.362 245.733 274.305 245.408 274.121 245.152C273.94 244.896 273.631 244.73 273.195 244.653C272.741 244.572 272.365 244.609 272.068 244.765C271.774 244.917 271.556 245.106 271.414 245.332L270.197 244.819C270.422 244.425 270.702 244.124 271.037 243.916C271.375 243.706 271.744 243.577 272.143 243.526C272.544 243.473 272.953 243.484 273.371 243.558C273.647 243.607 273.935 243.692 274.233 243.813C274.534 243.932 274.805 244.101 275.045 244.32C275.288 244.54 275.469 244.825 275.587 245.175C275.705 245.521 275.72 245.947 275.63 246.452L274.814 251.053L273.497 250.819L273.665 249.872L273.611 249.863C273.493 250.022 273.331 250.17 273.127 250.307C272.923 250.445 272.674 250.545 272.381 250.608C272.087 250.67 271.75 250.668 271.368 250.6ZM271.853 249.569C272.226 249.636 272.558 249.618 272.848 249.518C273.142 249.418 273.379 249.262 273.56 249.049C273.744 248.833 273.86 248.589 273.909 248.315L274.067 247.422C274.01 247.462 273.909 247.49 273.763 247.508C273.621 247.523 273.46 247.53 273.28 247.529C273.101 247.525 272.927 247.521 272.757 247.515C272.588 247.507 272.446 247.501 272.332 247.496C272.065 247.483 271.816 247.496 271.586 247.536C271.358 247.576 271.167 247.658 271.012 247.783C270.86 247.905 270.762 248.086 270.72 248.326C270.661 248.66 270.739 248.935 270.955 249.15C271.172 249.362 271.471 249.502 271.853 249.569ZM276.773 245.455L276.98 244.291L282.825 245.328L282.619 246.492L280.359 246.091L279.337 251.855L278.02 251.622L279.042 245.857L276.773 245.455ZM284.844 248.143L286.856 248.499C287.704 248.65 288.319 248.976 288.701 249.478C289.084 249.98 289.216 250.563 289.098 251.228C289.021 251.661 288.85 252.032 288.584 252.342C288.318 252.651 287.971 252.872 287.541 253.003C287.112 253.132 286.615 253.146 286.049 253.046L283.023 252.509L284.252 245.581L285.573 245.816L284.551 251.58L286.256 251.882C286.644 251.951 286.98 251.907 287.266 251.75C287.551 251.589 287.722 251.351 287.778 251.036C287.838 250.702 287.761 250.408 287.549 250.153C287.337 249.895 287.037 249.732 286.649 249.663L284.638 249.306L284.844 248.143ZM293.098 254.44C292.427 254.321 291.877 254.067 291.447 253.678C291.02 253.286 290.725 252.798 290.562 252.213C290.399 251.629 290.379 250.99 290.502 250.295C290.627 249.592 290.869 248.994 291.23 248.503C291.59 248.009 292.038 247.652 292.573 247.434C293.108 247.216 293.702 247.164 294.354 247.28C294.88 247.373 295.332 247.554 295.709 247.823C296.087 248.088 296.371 248.418 296.562 248.811C296.756 249.206 296.835 249.64 296.801 250.115L295.488 249.882C295.474 249.544 295.358 249.235 295.141 248.955C294.927 248.675 294.605 248.497 294.175 248.421C293.799 248.354 293.452 248.395 293.134 248.543C292.82 248.689 292.553 248.93 292.332 249.266C292.111 249.599 291.957 250.012 291.87 250.505C291.78 251.011 291.78 251.46 291.868 251.854C291.956 252.248 292.122 252.571 292.366 252.822C292.613 253.073 292.928 253.233 293.309 253.301C293.565 253.346 293.805 253.341 294.029 253.284C294.256 253.225 294.457 253.12 294.629 252.967C294.805 252.816 294.944 252.62 295.045 252.381L296.358 252.613C296.23 253.053 296.013 253.427 295.707 253.736C295.401 254.044 295.026 254.263 294.581 254.392C294.14 254.521 293.645 254.537 293.098 254.44ZM301.543 255.794L302.567 250.016L300.908 249.722C300.514 249.652 300.191 249.689 299.939 249.834C299.687 249.978 299.534 250.199 299.481 250.497C299.429 250.792 299.488 251.047 299.657 251.263C299.83 251.477 300.1 251.616 300.467 251.681L302.609 252.061L302.416 253.153L300.273 252.773C299.762 252.682 299.335 252.52 298.992 252.285C298.653 252.048 298.41 251.755 298.264 251.407C298.121 251.059 298.087 250.672 298.163 250.245C298.24 249.809 298.409 249.451 298.67 249.171C298.934 248.889 299.274 248.695 299.69 248.589C300.108 248.484 300.582 248.478 301.112 248.572L304.039 249.091L302.81 256.019L301.543 255.794ZM296.996 254.988L299.57 251.834L300.95 252.079L298.376 255.232L296.996 254.988ZM310.86 257.591C310.189 257.472 309.639 257.218 309.209 256.828C308.782 256.436 308.487 255.948 308.324 255.364C308.161 254.78 308.141 254.14 308.264 253.446C308.389 252.742 308.631 252.145 308.991 251.653C309.352 251.159 309.8 250.803 310.335 250.584C310.87 250.366 311.464 250.315 312.116 250.431C312.642 250.524 313.094 250.705 313.471 250.973C313.849 251.239 314.133 251.568 314.324 251.962C314.518 252.356 314.597 252.791 314.563 253.265L313.25 253.032C313.236 252.695 313.12 252.386 312.903 252.105C312.689 251.826 312.367 251.647 311.937 251.571C311.561 251.504 311.214 251.545 310.896 251.694C310.582 251.839 310.315 252.08 310.094 252.417C309.873 252.75 309.719 253.163 309.632 253.656C309.542 254.161 309.542 254.611 309.63 255.005C309.718 255.399 309.884 255.721 310.128 255.972C310.375 256.224 310.69 256.384 311.071 256.451C311.327 256.497 311.567 256.491 311.791 256.435C312.018 256.376 312.219 256.27 312.391 256.118C312.567 255.966 312.706 255.771 312.807 255.531L314.12 255.764C313.992 256.203 313.775 256.577 313.469 256.886C313.163 257.195 312.788 257.413 312.343 257.542C311.902 257.672 311.407 257.688 310.86 257.591ZM320.586 254.999L320.379 256.167L316.626 255.501L316.833 254.333L320.586 254.999ZM317.723 251.518L316.495 258.446L315.173 258.212L316.402 251.284L317.723 251.518ZM322.04 252.284L320.811 259.212L319.494 258.978L320.723 252.05L322.04 252.284ZM325.509 260.189C324.859 260.074 324.319 259.825 323.887 259.441C323.456 259.058 323.154 258.574 322.981 257.992C322.809 257.409 322.786 256.76 322.913 256.044C323.04 255.326 323.286 254.721 323.649 254.23C324.012 253.739 324.462 253.388 324.999 253.176C325.536 252.964 326.129 252.916 326.778 253.031C327.428 253.146 327.968 253.396 328.4 253.779C328.831 254.163 329.133 254.648 329.305 255.233C329.477 255.819 329.499 256.471 329.372 257.19C329.245 257.906 329 258.507 328.637 258.995C328.275 259.483 327.825 259.833 327.288 260.044C326.751 260.256 326.158 260.304 325.509 260.189ZM325.714 259.058C326.135 259.133 326.503 259.083 326.82 258.91C327.136 258.736 327.393 258.476 327.591 258.13C327.792 257.784 327.931 257.389 328.01 256.944C328.089 256.502 328.093 256.084 328.023 255.69C327.957 255.294 327.806 254.958 327.569 254.684C327.333 254.409 327.004 254.234 326.583 254.16C326.159 254.084 325.787 254.135 325.467 254.311C325.151 254.487 324.892 254.75 324.69 255.099C324.492 255.445 324.354 255.839 324.276 256.281C324.197 256.726 324.191 257.146 324.257 257.539C324.327 257.933 324.481 258.265 324.718 258.537C324.958 258.809 325.29 258.983 325.714 259.058ZM330.268 260.889L331.497 253.961L334.37 254.471C335.152 254.61 335.742 254.886 336.14 255.301C336.538 255.713 336.687 256.203 336.586 256.771C336.514 257.177 336.328 257.476 336.027 257.668C335.726 257.86 335.355 257.958 334.914 257.964C335.217 258.055 335.485 258.198 335.717 258.394C335.949 258.588 336.121 258.823 336.233 259.1C336.349 259.378 336.375 259.69 336.314 260.036C336.249 260.402 336.097 260.71 335.857 260.959C335.618 261.206 335.304 261.376 334.915 261.472C334.529 261.564 334.084 261.566 333.579 261.477L330.268 260.889ZM331.736 259.986L333.779 260.349C334.113 260.408 334.388 260.375 334.606 260.249C334.824 260.123 334.957 259.924 335.005 259.65C335.063 259.328 335.013 259.059 334.856 258.842C334.699 258.622 334.454 258.482 334.121 258.423L332.077 258.061L331.736 259.986ZM332.252 257.073L333.872 257.36C334.124 257.405 334.347 257.407 334.54 257.367C334.737 257.327 334.895 257.25 335.014 257.135C335.138 257.017 335.215 256.866 335.248 256.683C335.295 256.415 335.223 256.187 335.03 255.998C334.837 255.808 334.55 255.68 334.168 255.612L332.562 255.327L332.252 257.073ZM339.451 262.676C339.012 262.598 338.63 262.447 338.304 262.222C337.978 261.993 337.74 261.704 337.588 261.355C337.439 261.006 337.404 260.604 337.485 260.15C337.554 259.759 337.686 259.451 337.882 259.225C338.077 258.999 338.315 258.835 338.597 258.733C338.879 258.631 339.184 258.571 339.513 258.551C339.842 258.532 340.174 258.532 340.509 258.551C340.932 258.577 341.276 258.597 341.54 258.613C341.804 258.626 342.002 258.607 342.132 258.555C342.262 258.504 342.341 258.397 342.37 258.235L342.375 258.203C342.445 257.809 342.388 257.484 342.204 257.228C342.023 256.973 341.714 256.806 341.278 256.729C340.824 256.649 340.449 256.686 340.151 256.841C339.858 256.993 339.639 257.183 339.497 257.409L338.281 256.895C338.506 256.501 338.786 256.2 339.12 255.993C339.458 255.783 339.827 255.653 340.227 255.603C340.627 255.55 341.036 255.56 341.454 255.634C341.731 255.683 342.018 255.769 342.316 255.89C342.617 256.008 342.888 256.177 343.129 256.397C343.372 256.617 343.552 256.901 343.67 257.251C343.789 257.598 343.803 258.024 343.713 258.529L342.897 263.129L341.58 262.896L341.748 261.949L341.694 261.939C341.576 262.098 341.415 262.246 341.211 262.384C341.006 262.521 340.758 262.621 340.464 262.684C340.171 262.747 339.833 262.744 339.451 262.676ZM339.936 261.646C340.309 261.712 340.641 261.695 340.932 261.594C341.226 261.495 341.463 261.338 341.643 261.125C341.827 260.91 341.943 260.665 341.992 260.391L342.15 259.498C342.094 259.538 341.993 259.566 341.847 259.584C341.705 259.599 341.544 259.606 341.364 259.605C341.185 259.602 341.01 259.597 340.84 259.592C340.671 259.583 340.53 259.577 340.416 259.572C340.148 259.559 339.9 259.572 339.669 259.612C339.442 259.652 339.25 259.735 339.095 259.859C338.943 259.981 338.846 260.162 338.803 260.403C338.744 260.736 338.822 261.011 339.039 261.226C339.255 261.438 339.555 261.578 339.936 261.646Z\",\"fill\",\"#2B3134\"],[\"d\",\"M224.612 238.826L225.383 234.478L224.514 235.085C224.306 235.23 224.019 235.179 223.873 234.971C223.727 234.762 223.778 234.475 223.987 234.329L225.767 233.085C225.818 233.05 225.874 233.026 225.931 233.013C225.989 233 226.05 232.999 226.111 233.009C226.173 233.02 226.229 233.043 226.279 233.075C226.328 233.106 226.373 233.148 226.408 233.199L227.652 234.979C227.798 235.188 227.747 235.475 227.538 235.621C227.33 235.767 227.043 235.716 226.897 235.507L226.29 234.639L225.519 238.987C225.267 240.406 226.214 241.762 227.633 242.013L229.448 242.335C229.698 242.38 229.865 242.619 229.821 242.869C229.777 243.12 229.537 243.287 229.287 243.242L227.472 242.921C225.552 242.58 224.271 240.746 224.612 238.826Z\",\"fill\",\"#2B3134\"],[\"d\",\"M229.74 233.653C229.49 233.609 229.25 233.776 229.206 234.026C229.162 234.277 229.329 234.516 229.579 234.56L231.394 234.882C232.813 235.134 233.76 236.489 233.508 237.909L232.737 242.257L231.881 241.032C231.736 240.824 231.448 240.773 231.24 240.919C231.031 241.064 230.98 241.351 231.126 241.56L232.619 243.696C232.654 243.748 232.699 243.789 232.748 243.821C232.792 243.849 232.84 243.869 232.893 243.881C232.9 243.883 232.908 243.885 232.916 243.886C232.977 243.897 233.038 243.895 233.096 243.883C233.153 243.87 233.209 243.846 233.26 243.81L235.397 242.318C235.605 242.172 235.656 241.885 235.51 241.676C235.365 241.467 235.077 241.417 234.869 241.562L233.644 242.418L234.415 238.07C234.756 236.149 233.475 234.316 231.555 233.975L229.74 233.653Z\",\"fill\",\"#2B3134\"],[\"d\",\"M240.629 244.99L242.268 235.752L245.56 236.336C246.276 236.463 246.848 236.692 247.276 237.022C247.708 237.353 248.002 237.757 248.159 238.235C248.317 238.709 248.345 239.231 248.245 239.799C248.144 240.365 247.937 240.841 247.624 241.229C247.313 241.614 246.899 241.884 246.382 242.037C245.868 242.191 245.253 242.204 244.537 242.077L242.043 241.635L242.256 240.435L244.624 240.855C245.075 240.935 245.453 240.936 245.759 240.856C246.067 240.778 246.31 240.627 246.486 240.404C246.662 240.181 246.781 239.896 246.842 239.55C246.904 239.202 246.89 238.887 246.8 238.608C246.713 238.329 246.538 238.096 246.277 237.91C246.019 237.722 245.66 237.587 245.2 237.505L243.449 237.195L242.023 245.237L240.629 244.99ZM245.929 241.631L247.472 246.203L245.884 245.922L244.386 241.357L245.929 241.631ZM251.582 247.077C250.899 246.955 250.337 246.705 249.896 246.326C249.458 245.945 249.152 245.464 248.979 244.884C248.809 244.302 248.788 243.652 248.916 242.933C249.042 242.223 249.285 241.621 249.646 241.127C250.009 240.633 250.457 240.277 250.989 240.058C251.524 239.84 252.113 239.788 252.757 239.902C253.148 239.971 253.515 240.103 253.859 240.297C254.203 240.492 254.496 240.753 254.739 241.081C254.981 241.41 255.148 241.81 255.238 242.282C255.328 242.751 255.318 243.299 255.206 243.928L255.121 244.406L249.614 243.429L249.793 242.419L253.979 243.161C254.042 242.806 254.025 242.479 253.93 242.18C253.834 241.878 253.67 241.624 253.437 241.418C253.206 241.213 252.917 241.079 252.568 241.017C252.189 240.95 251.842 240.985 251.526 241.121C251.214 241.255 250.955 241.457 250.749 241.727C250.546 241.995 250.414 242.302 250.353 242.648L250.213 243.438C250.131 243.901 250.142 244.309 250.247 244.662C250.354 245.017 250.541 245.305 250.805 245.529C251.07 245.75 251.399 245.895 251.793 245.965C252.048 246.01 252.288 246.015 252.511 245.981C252.735 245.943 252.937 245.864 253.116 245.744C253.296 245.624 253.445 245.462 253.565 245.26L254.8 245.717C254.631 246.074 254.39 246.371 254.075 246.607C253.764 246.84 253.396 247 252.971 247.086C252.55 247.169 252.087 247.166 251.582 247.077ZM255.614 250.327L257.304 240.801L258.621 241.035L258.422 242.158L258.535 242.178C258.638 242.048 258.781 241.901 258.962 241.737C259.143 241.574 259.376 241.445 259.663 241.35C259.95 241.252 260.309 241.241 260.739 241.318C261.298 241.417 261.772 241.647 262.161 242.007C262.55 242.368 262.822 242.836 262.977 243.413C263.135 243.99 263.148 244.653 263.015 245.401C262.883 246.15 262.644 246.77 262.299 247.261C261.955 247.749 261.54 248.098 261.053 248.31C260.566 248.518 260.043 248.573 259.484 248.473C259.063 248.399 258.731 248.267 258.488 248.078C258.249 247.89 258.071 247.688 257.954 247.472C257.837 247.256 257.751 247.067 257.696 246.905L257.615 246.891L256.963 250.567L255.614 250.327ZM258.011 244.5C257.925 244.987 257.92 245.426 257.996 245.818C258.072 246.21 258.226 246.534 258.457 246.789C258.688 247.041 258.998 247.201 259.385 247.27C259.788 247.341 260.144 247.294 260.453 247.129C260.762 246.96 261.018 246.703 261.222 246.358C261.429 246.013 261.573 245.609 261.656 245.146C261.737 244.689 261.74 244.266 261.667 243.878C261.596 243.49 261.442 243.167 261.206 242.908C260.973 242.649 260.653 242.484 260.247 242.412C259.856 242.343 259.508 242.385 259.201 242.538C258.898 242.692 258.645 242.937 258.443 243.274C258.24 243.61 258.097 244.019 258.011 244.5ZM266.875 249.789C266.193 249.668 265.631 249.418 265.189 249.039C264.752 248.657 264.446 248.177 264.273 247.597C264.103 247.015 264.082 246.364 264.21 245.646C264.335 244.936 264.579 244.334 264.939 243.84C265.303 243.346 265.751 242.99 266.283 242.771C266.818 242.552 267.407 242.5 268.05 242.614C268.441 242.684 268.809 242.816 269.153 243.01C269.496 243.204 269.79 243.466 270.032 243.794C270.275 244.122 270.441 244.523 270.531 244.994C270.622 245.463 270.611 246.012 270.5 246.64L270.415 247.119L264.908 246.142L265.087 245.131L269.273 245.874C269.336 245.519 269.319 245.192 269.223 244.893C269.128 244.591 268.964 244.337 268.73 244.131C268.5 243.926 268.211 243.792 267.862 243.73C267.483 243.663 267.136 243.697 266.82 243.834C266.508 243.968 266.248 244.17 266.042 244.44C265.84 244.708 265.708 245.015 265.646 245.361L265.506 246.15C265.424 246.613 265.436 247.022 265.54 247.375C265.648 247.729 265.834 248.018 266.098 248.242C266.363 248.462 266.693 248.608 267.087 248.678C267.342 248.723 267.582 248.728 267.805 248.693C268.029 248.655 268.23 248.577 268.41 248.456C268.589 248.336 268.739 248.175 268.858 247.973L270.094 248.429C269.925 248.787 269.683 249.084 269.369 249.32C269.057 249.553 268.689 249.712 268.265 249.798C267.844 249.882 267.381 249.879 266.875 249.789ZM273.358 250.953C272.919 250.875 272.536 250.724 272.21 250.498C271.885 250.27 271.646 249.981 271.494 249.631C271.345 249.283 271.311 248.881 271.391 248.427C271.461 248.036 271.593 247.728 271.788 247.502C271.983 247.276 272.222 247.112 272.503 247.01C272.785 246.908 273.09 246.847 273.42 246.828C273.749 246.809 274.08 246.809 274.415 246.828C274.839 246.853 275.182 246.874 275.446 246.89C275.711 246.903 275.908 246.883 276.038 246.832C276.168 246.781 276.248 246.674 276.276 246.511L276.282 246.48C276.352 246.086 276.295 245.761 276.111 245.505C275.93 245.25 275.621 245.083 275.185 245.006C274.731 244.925 274.355 244.963 274.058 245.118C273.764 245.27 273.546 245.459 273.404 245.685L272.187 245.172C272.412 244.778 272.692 244.477 273.027 244.269C273.365 244.06 273.734 243.93 274.133 243.879C274.534 243.826 274.943 243.837 275.361 243.911C275.637 243.96 275.925 244.045 276.222 244.166C276.524 244.285 276.795 244.454 277.035 244.673C277.278 244.893 277.459 245.178 277.577 245.528C277.695 245.874 277.71 246.3 277.62 246.805L276.804 251.406L275.487 251.172L275.655 250.225L275.601 250.216C275.483 250.375 275.321 250.523 275.117 250.66C274.913 250.798 274.664 250.898 274.371 250.961C274.077 251.023 273.74 251.021 273.358 250.953ZM273.843 249.923C274.216 249.989 274.548 249.972 274.838 249.871C275.132 249.771 275.369 249.615 275.55 249.402C275.734 249.186 275.85 248.942 275.899 248.668L276.057 247.775C276 247.815 275.899 247.843 275.753 247.861C275.611 247.876 275.45 247.883 275.27 247.882C275.091 247.878 274.917 247.874 274.747 247.868C274.578 247.86 274.436 247.854 274.322 247.849C274.055 247.836 273.806 247.849 273.576 247.889C273.348 247.929 273.157 248.011 273.002 248.136C272.85 248.258 272.752 248.439 272.71 248.679C272.65 249.013 272.729 249.288 272.945 249.503C273.162 249.715 273.461 249.855 273.843 249.923ZM283.063 245.37L282.871 246.453L279.087 245.782L279.279 244.699L283.063 245.37ZM280.588 243.219L281.937 243.459L280.774 250.012C280.728 250.274 280.732 250.478 280.787 250.624C280.842 250.767 280.927 250.874 281.042 250.944C281.16 251.011 281.293 251.058 281.44 251.084C281.548 251.103 281.644 251.112 281.728 251.112C281.812 251.111 281.877 251.11 281.924 251.109L281.97 252.267C281.887 252.283 281.77 252.293 281.62 252.298C281.47 252.305 281.286 252.291 281.069 252.256C280.714 252.199 280.394 252.077 280.111 251.89C279.827 251.704 279.616 251.455 279.475 251.145C279.335 250.835 279.302 250.471 279.376 250.053L280.588 243.219ZM286.796 253.178L288.434 243.941L289.783 244.18L289.174 247.613L289.255 247.627C289.359 247.497 289.501 247.35 289.682 247.186C289.863 247.023 290.097 246.894 290.384 246.799C290.671 246.701 291.029 246.69 291.459 246.767C292.019 246.866 292.493 247.096 292.882 247.456C293.27 247.817 293.542 248.285 293.698 248.862C293.856 249.439 293.869 250.102 293.736 250.85C293.603 251.599 293.364 252.219 293.02 252.71C292.676 253.198 292.26 253.548 291.773 253.759C291.286 253.967 290.763 254.022 290.204 253.923C289.783 253.848 289.451 253.716 289.209 253.527C288.969 253.339 288.791 253.137 288.674 252.921C288.558 252.705 288.472 252.516 288.417 252.354L288.304 252.334L288.113 253.412L286.796 253.178ZM288.732 249.949C288.645 250.436 288.64 250.875 288.716 251.267C288.793 251.659 288.946 251.983 289.177 252.238C289.408 252.49 289.718 252.65 290.106 252.719C290.509 252.79 290.864 252.743 291.173 252.578C291.482 252.409 291.738 252.152 291.942 251.807C292.149 251.462 292.294 251.058 292.376 250.595C292.457 250.138 292.461 249.715 292.387 249.327C292.316 248.939 292.163 248.616 291.926 248.357C291.693 248.098 291.373 247.933 290.967 247.861C290.577 247.792 290.228 247.834 289.922 247.987C289.618 248.141 289.365 248.386 289.163 248.723C288.961 249.059 288.817 249.468 288.732 249.949ZM297.531 255.227C296.882 255.112 296.342 254.862 295.91 254.479C295.479 254.095 295.177 253.612 295.004 253.029C294.832 252.447 294.809 251.797 294.936 251.082C295.063 250.363 295.308 249.758 295.671 249.268C296.035 248.777 296.485 248.426 297.022 248.214C297.558 248.002 298.152 247.954 298.801 248.069C299.451 248.184 299.991 248.433 300.422 248.817C300.854 249.201 301.155 249.685 301.328 250.271C301.5 250.857 301.522 251.509 301.395 252.227C301.268 252.943 301.023 253.545 300.66 254.033C300.298 254.52 299.848 254.87 299.311 255.082C298.774 255.294 298.181 255.342 297.531 255.227ZM297.737 254.096C298.158 254.17 298.526 254.121 298.842 253.947C299.159 253.774 299.416 253.514 299.613 253.168C299.814 252.822 299.954 252.426 300.033 251.981C300.112 251.539 300.116 251.121 300.046 250.728C299.98 250.331 299.829 249.996 299.592 249.721C299.355 249.447 299.027 249.272 298.606 249.197C298.182 249.122 297.81 249.172 297.49 249.348C297.174 249.525 296.915 249.787 296.713 250.136C296.515 250.483 296.377 250.877 296.299 251.319C296.22 251.764 296.214 252.183 296.28 252.576C296.35 252.97 296.503 253.303 296.741 253.575C296.981 253.847 297.313 254.02 297.737 254.096ZM305.185 256.584C304.535 256.469 303.995 256.22 303.563 255.836C303.132 255.453 302.83 254.97 302.657 254.387C302.485 253.804 302.462 253.155 302.589 252.439C302.716 251.721 302.961 251.116 303.325 250.625C303.688 250.134 304.138 249.783 304.675 249.571C305.211 249.359 305.805 249.311 306.454 249.426C307.104 249.542 307.644 249.791 308.075 250.174C308.507 250.558 308.808 251.043 308.981 251.628C309.153 252.214 309.175 252.866 309.048 253.585C308.921 254.301 308.676 254.902 308.313 255.39C307.951 255.878 307.501 256.228 306.964 256.439C306.427 256.651 305.834 256.7 305.185 256.584ZM305.39 255.453C305.811 255.528 306.179 255.478 306.495 255.305C306.812 255.131 307.069 254.872 307.266 254.525C307.467 254.179 307.607 253.784 307.686 253.339C307.765 252.897 307.769 252.479 307.699 252.085C307.633 251.689 307.482 251.353 307.245 251.079C307.008 250.804 306.68 250.629 306.259 250.555C305.835 250.48 305.463 250.53 305.143 250.706C304.827 250.882 304.568 251.145 304.366 251.494C304.168 251.84 304.03 252.234 303.952 252.676C303.873 253.121 303.867 253.541 303.933 253.934C304.003 254.328 304.156 254.66 304.394 254.932C304.634 255.204 304.966 255.378 305.39 255.453ZM311.601 255.154L311.884 253.507L312.119 253.548L315.399 251.106L317.014 251.392L313.274 254.172L313.062 254.134L311.601 255.154ZM309.944 257.284L311.583 248.047L312.931 248.286L311.293 257.524L309.944 257.284ZM314.319 258.06L312.423 254.328L313.519 253.55L315.975 258.354L314.319 258.06ZM317.014 258.538L318.243 251.61L319.592 251.85L318.363 258.778L317.014 258.538ZM319.114 250.662C318.879 250.621 318.692 250.507 318.551 250.321C318.414 250.132 318.365 249.928 318.404 249.708C318.443 249.486 318.559 249.311 318.753 249.184C318.949 249.054 319.165 249.01 319.399 249.052C319.634 249.094 319.82 249.209 319.957 249.398C320.097 249.584 320.148 249.788 320.109 250.011C320.07 250.23 319.952 250.405 319.755 250.534C319.562 250.661 319.348 250.704 319.114 250.662ZM322.255 255.225L321.526 259.339L320.177 259.099L321.406 252.171L322.7 252.401L322.5 253.529L322.586 253.544C322.811 253.205 323.112 252.955 323.492 252.793C323.874 252.631 324.325 252.596 324.845 252.688C325.317 252.772 325.713 252.945 326.033 253.206C326.353 253.465 326.576 253.805 326.703 254.228C326.83 254.65 326.842 255.147 326.741 255.718L325.959 260.125L324.611 259.886L325.364 255.642C325.453 255.139 325.392 254.724 325.18 254.395C324.969 254.063 324.635 253.856 324.178 253.775C323.865 253.72 323.575 253.738 323.308 253.83C323.043 253.923 322.817 254.087 322.629 254.324C322.445 254.558 322.32 254.858 322.255 255.225ZM330.186 263.703C329.636 263.606 329.175 263.45 328.804 263.235C328.436 263.021 328.148 262.773 327.94 262.491C327.733 262.209 327.593 261.916 327.52 261.611L328.763 261.339C328.821 261.486 328.905 261.645 329.014 261.816C329.125 261.991 329.289 262.152 329.505 262.299C329.724 262.446 330.02 262.553 330.393 262.619C330.904 262.71 331.349 262.66 331.727 262.469C332.104 262.282 332.341 261.918 332.437 261.376L332.678 260.014L332.593 259.999C332.485 260.132 332.339 260.275 332.154 260.428C331.971 260.582 331.736 260.702 331.448 260.787C331.16 260.872 330.804 260.877 330.38 260.802C329.833 260.705 329.362 260.49 328.969 260.156C328.578 259.82 328.3 259.379 328.134 258.831C327.971 258.281 327.954 257.638 328.085 256.901C328.216 256.165 328.453 255.555 328.796 255.073C329.141 254.592 329.559 254.25 330.047 254.048C330.536 253.844 331.059 253.791 331.615 253.889C332.045 253.966 332.38 254.099 332.619 254.291C332.859 254.479 333.035 254.681 333.149 254.896C333.266 255.112 333.352 255.3 333.407 255.459L333.507 255.476L333.706 254.353L335.027 254.588L333.771 261.669C333.666 262.264 333.441 262.728 333.096 263.061C332.752 263.394 332.327 263.61 331.823 263.71C331.321 263.81 330.776 263.808 330.186 263.703ZM330.876 259.736C331.264 259.805 331.608 259.773 331.907 259.64C332.211 259.505 332.461 259.279 332.66 258.964C332.862 258.646 333.006 258.249 333.09 257.77C333.173 257.304 333.177 256.882 333.101 256.502C333.026 256.123 332.872 255.81 332.64 255.564C332.408 255.315 332.095 255.156 331.701 255.086C331.295 255.014 330.938 255.059 330.63 255.222C330.323 255.381 330.068 255.628 329.866 255.961C329.667 256.295 329.529 256.683 329.45 257.125C329.37 257.579 329.368 257.99 329.446 258.357C329.523 258.724 329.68 259.028 329.917 259.269C330.156 259.51 330.476 259.665 330.876 259.736Z\",\"fill\",\"#2B3134\"],[1,\"qr-code\"],[\"version\",\"1.0\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"width\",\"128\",\"height\",\"128\",\"viewBox\",\"0 0 2160.000000 2160.000000\",\"preserveAspectRatio\",\"xMidYMid meet\",2,\"background-color\",\"white\"],[\"transform\",\"translate(0.000000,2160.000000) scale(0.100000,-0.100000)\",\"fill\",\"#000000\",\"stroke\",\"currentColor\"],[\"d\",\"M1310 18000 l0 -2290 2290 0 2290 0 0 2290 0 2290 -2290 0 -2290 0 0 -2290z m3890 0 l0 -1600 -1600 0 -1600 0 0 1600 0 1600 1600 0 1600 0 0 -1600z\"],[\"d\",\"M2620 18000 l0 -980 980 0 980 0 0 980 0 980 -980 0 -980 0 0 -980z\"],[\"d\",\"M7200 19635 l0 -655 328 2 327 3 3 328 2 327 325 0 325 0 0 325 0 325 -655 0 -655 0 0 -655z\"],[\"d\",\"M9820 18325 l0 -1965 -327 2 -328 3 -3 653 -2 652 -650 0 -650 0 -2 328 -3 327 -327 3 -328 2 0 -330 0 -330 325 0 325 0 0 -325 0 -325 -652 -2 -653 -3 -3 -652 -2 -653 330 0 330 0 0 325 0 325 325 0 325 0 0 -325 0 -325 330 0 330 0 0 -325 0 -325 -327 -2 -328 -3 -3 -327 -2 -328 330 0 330 0 0 325 0 325 325 0 325 0 0 -650 0 -650 -325 0 -325 0 0 -330 0 -330 -325 0 -325 0 -2 328 -3 327 -1307 3 -1308 2 0 -330 0 -330 -330 0 -330 0 0 330 0 330 -655 0 -655 0 0 325 0 325 330 0 330 0 -2 328 -3 327 -325 0 -325 0 -3 -327 -2 -328 -325 0 -325 0 0 -655 0 -655 -330 0 -330 0 0 -325 0 -325 -325 0 -325 0 0 -655 0 -655 325 0 325 0 0 -330 0 -330 -325 0 -325 0 0 -655 0 -655 325 0 325 0 0 -325 0 -325 -325 0 -325 0 0 -330 0 -330 325 0 325 0 0 330 0 330 330 0 330 0 0 -655 0 -655 325 0 325 0 2 -327 3 -328 1308 -3 1307 -2 0 330 0 330 655 0 655 0 0 -325 0 -325 -327 -2 -328 -3 0 -325 0 -325 653 -3 652 -2 0 -325 0 -325 -652 -2 -653 -3 0 -325 0 -325 653 -3 652 -2 0 -325 0 -325 -652 -2 -653 -3 0 -325 0 -325 655 0 655 0 3 328 2 327 325 0 325 0 0 -330 0 -330 325 0 325 0 0 -325 0 -325 330 0 330 0 0 980 0 980 325 0 325 0 0 -1635 0 -1635 655 0 655 0 0 325 0 325 330 0 330 0 0 -325 0 -325 655 0 655 0 0 325 0 325 325 0 325 0 0 -325 0 -325 330 0 330 0 -2 653 -3 652 -327 3 -328 2 0 655 0 655 655 0 655 0 0 -330 0 -330 325 0 325 0 2 328 3 327 328 3 327 2 0 -655 0 -655 980 0 980 0 0 -655 0 -655 330 0 330 0 0 655 0 655 325 0 325 0 0 325 0 325 -325 0 -325 0 0 330 0 330 325 0 325 0 0 325 0 325 -325 0 -325 0 0 655 0 655 325 0 325 0 0 330 0 330 -655 0 -655 0 0 325 0 325 655 0 655 0 0 980 0 980 -325 0 -325 0 0 655 0 655 325 0 325 0 0 330 0 330 -1310 0 -1310 0 0 -330 0 -330 -325 0 -325 0 0 330 0 330 -327 -2 -328 -3 -3 -327 -2 -328 -325 0 -325 0 0 655 0 655 325 0 325 0 0 655 0 655 330 0 330 0 0 -325 0 -325 325 0 325 0 0 -330 0 -330 330 0 330 0 0 330 0 330 325 0 325 0 0 -330 0 -330 655 0 655 0 0 330 0 330 -325 0 -325 0 0 650 0 650 325 0 325 0 0 330 0 330 -325 0 -325 0 0 -325 0 -325 -655 0 -655 0 0 325 0 325 -330 0 -330 0 0 -325 0 -325 -655 0 -655 0 0 325 0 325 330 0 330 0 -2 328 -3 327 -325 0 -325 0 -3 -327 -2 -328 -325 0 -325 0 -2 328 -3 327 -325 0 -325 0 -3 -327 -2 -328 -325 0 -325 0 0 655 0 655 330 0 330 0 0 325 0 325 -330 0 -330 0 0 330 0 330 330 0 330 0 0 325 0 325 -330 0 -330 0 0 -325 0 -325 -325 0 -325 0 0 655 0 655 655 0 655 0 0 325 0 325 -655 0 -655 0 0 330 0 330 325 0 325 0 0 325 0 325 -1310 0 -1310 0 0 -325 0 -325 -325 0 -325 0 0 325 0 325 -655 0 -655 0 0 -1965z m2620 330 l0 -325 325 0 325 0 0 325 0 325 325 0 325 0 0 -325 0 -325 -325 0 -325 0 0 -1310 0 -1310 -325 0 -325 0 0 -325 0 -325 -330 0 -330 0 0 325 0 325 -325 0 -325 0 0 325 0 325 325 0 325 0 0 -325 0 -325 330 0 330 0 0 1310 0 1310 -985 0 -985 0 0 325 0 325 985 0 985 0 0 -325z m-3930 -1965 l0 -330 325 0 325 0 0 -325 0 -325 330 0 330 0 0 325 0 325 325 0 325 0 2 -652 3 -653 653 -3 652 -2 0 -1635 0 -1635 330 0 330 0 0 655 0 655 325 0 325 0 0 330 0 330 -325 0 -325 0 0 650 0 650 325 0 325 0 0 -325 0 -325 655 0 655 0 0 -325 0 -325 -327 -2 -328 -3 -3 -327 -2 -328 -325 0 -325 0 0 -325 0 -325 325 0 325 0 0 -330 0 -330 -325 0 -325 0 0 -655 0 -655 325 0 325 0 0 -325 0 -325 330 0 330 0 0 325 0 325 -325 0 -325 0 0 330 0 330 325 0 325 0 0 -330 0 -330 325 0 325 0 0 -325 0 -325 -325 0 -325 0 0 -330 0 -330 325 0 325 0 0 -325 0 -325 -325 0 -325 0 0 -655 0 -655 -330 0 -330 0 0 -325 0 -325 -650 0 -650 0 0 325 0 325 325 0 325 0 0 325 0 325 328 2 327 3 3 653 2 652 -330 0 -330 0 0 -325 0 -325 -325 0 -325 0 0 -325 0 -325 -655 0 -655 0 0 -330 0 -330 -330 0 -330 0 0 -325 0 -325 -325 0 -325 0 0 325 0 325 325 0 325 0 0 655 0 655 -325 0 -325 0 0 -325 0 -325 -655 0 -655 0 0 325 0 325 -327 -2 -328 -3 -3 -322 -2 -323 -650 0 -650 0 -2 323 -3 322 -652 3 -653 2 0 -325 0 -325 -330 0 -330 0 0 325 0 325 -325 0 -325 0 0 -655 0 -655 -330 0 -330 0 0 655 0 655 -325 0 -325 0 0 325 0 325 -328 2 -327 3 -3 653 -2 652 330 0 330 0 0 -655 0 -655 325 0 325 0 0 -325 0 -325 330 0 330 0 0 655 0 655 325 0 325 0 0 325 0 325 -325 0 -325 0 0 330 0 330 -985 0 -985 0 2 653 3 652 327 3 328 2 0 -330 0 -330 325 0 325 0 0 655 0 655 655 0 655 0 0 -325 0 -325 328 -2 327 -3 3 -327 2 -328 980 0 980 0 0 330 0 330 -325 0 -325 0 0 325 0 325 650 0 650 0 0 -325 0 -325 655 0 655 0 0 650 0 650 328 2 327 3 0 655 0 655 -327 3 -328 2 0 325 0 325 -325 0 -325 0 0 325 0 325 -325 0 -325 0 0 330 0 330 325 0 325 0 0 -330z m5890 -655 l0 -325 -325 0 -325 0 0 325 0 325 325 0 325 0 0 -325z m-8510 -3270 l0 -325 -325 0 -325 0 0 325 0 325 325 0 325 0 0 -325z m9820 -330 l0 -655 -325 0 -325 0 -2 328 -3 327 -652 3 -653 2 0 325 0 325 980 0 980 0 0 -655z m2620 330 l0 -325 -330 0 -330 0 0 325 0 325 330 0 330 0 0 -325z m-1310 -2620 l0 -325 655 0 655 0 0 325 0 325 325 0 325 0 0 -655 0 -655 330 0 330 0 0 -325 0 -325 -330 0 -330 0 0 -655 0 -655 -325 0 -325 0 0 -655 0 -655 325 0 325 0 0 -325 0 -325 -655 0 -655 0 0 980 0 980 -1305 0 -1305 0 0 325 0 325 323 2 322 3 3 328 2 327 325 0 325 0 2 -327 3 -328 653 -3 652 -2 0 330 0 330 -325 0 -325 0 0 325 0 325 -655 0 -655 0 0 330 0 330 325 0 325 0 0 325 0 325 330 0 330 0 0 -325z m-11130 -2620 l0 -325 -325 0 -325 0 0 325 0 325 325 0 325 0 0 -325z m2620 -650 l0 -325 -325 0 -325 0 0 325 0 325 325 0 325 0 0 -325z m1310 -985 l0 -650 -327 -2 -328 -3 -3 -327 -2 -328 -650 0 -650 0 0 330 0 330 325 0 325 0 0 650 0 650 655 0 655 0 0 -650z m1960 -330 l0 -980 330 0 330 0 0 655 0 655 325 0 325 0 0 -655 0 -655 -325 0 -325 0 0 -980 0 -980 -330 0 -330 0 0 -330 0 -330 -325 0 -325 0 0 1310 0 1310 -330 0 -330 0 2 328 3 327 328 3 327 2 0 325 0 325 -330 0 -330 0 0 325 0 325 655 0 655 0 0 -980z m5240 0 l0 -980 -980 0 -980 0 0 980 0 980 980 0 980 0 0 -980z m-2620 -650 l0 -980 -325 0 -325 0 0 980 0 980 325 0 325 0 0 -980z m4580 -655 l0 -325 -655 0 -655 0 0 325 0 325 655 0 655 0 0 -325z m-5240 -1310 l0 -325 -325 0 -325 0 0 325 0 325 325 0 325 0 0 -325z m5900 0 l0 -325 -330 0 -330 0 0 325 0 325 330 0 330 0 0 -325z\"],[\"d\",\"M10472 14073 l3 -328 325 0 325 0 3 328 2 327 -330 0 -330 0 2 -327z\"],[\"d\",\"M10470 12765 l0 -325 330 0 330 0 0 325 0 325 -330 0 -330 0 0 -325z\"],[\"d\",\"M3930 12110 l0 -330 325 0 325 0 0 330 0 330 -325 0 -325 0 0 -330z\"],[\"d\",\"M7850 11455 l0 -325 -325 0 -325 0 0 -330 0 -330 -655 0 -655 0 0 330 0 330 -325 0 -325 0 0 -330 0 -330 325 0 325 0 0 -325 0 -325 -325 0 -325 0 0 -330 0 -330 325 0 325 0 0 330 0 330 655 0 655 0 0 325 0 325 1310 0 1310 0 0 -325 0 -325 -330 0 -330 0 2 -327 3 -328 983 -3 982 -2 0 330 0 330 980 0 980 0 0 325 0 325 -325 0 -325 0 0 330 0 330 -330 0 -330 0 0 -330 0 -330 -980 0 -980 0 0 655 0 655 -985 0 -985 0 0 -325z\"],[\"d\",\"M11780 8835 l0 -325 330 0 330 0 0 325 0 325 -330 0 -330 0 0 -325z\"],[\"d\",\"M17670 8835 l0 -325 330 0 330 0 0 325 0 325 -330 0 -330 0 0 -325z\"],[\"d\",\"M15710 5565 l0 -325 325 0 325 0 0 325 0 325 -325 0 -325 0 0 -325z\"],[\"d\",\"M15710 18000 l0 -2290 2290 0 2290 0 0 2290 0 2290 -2290 0 -2290 0 0 -2290z m3890 0 l0 -1600 -1600 0 -1600 0 0 1600 0 1600 1600 0 1600 0 0 -1600z\"],[\"d\",\"M17020 18000 l0 -980 980 0 980 0 0 980 0 980 -980 0 -980 0 0 -980z\"],[\"d\",\"M1310 14400 l0 -660 325 0 325 0 0 660 0 660 -325 0 -325 0 0 -660z\"],[\"d\",\"M4587 15053 c-4 -3 -7 -152 -7 -330 l0 -323 655 0 655 0 0 330 0 330 -648 0 c-357 0 -652 -3 -655 -7z\"],[\"d\",\"M6547 15053 c-4 -3 -7 -152 -7 -330 l0 -323 330 0 330 0 0 330 0 330 -323 0 c-178 0 -327 -3 -330 -7z\"],[\"d\",\"M1310 6870 l0 -330 325 0 325 0 0 330 0 330 -325 0 -325 0 0 -330z\"],[\"d\",\"M1310 3600 l0 -2290 2290 0 2290 0 0 2290 0 2290 -2290 0 -2290 0 0 -2290z m3890 0 l0 -1600 -1600 0 -1600 0 0 1600 0 1600 1600 0 1600 0 0 -1600z\"],[\"d\",\"M2620 3600 l0 -980 980 0 980 0 0 980 0 980 -980 0 -980 0 0 -980z\"],[\"d\",\"M7855 2607 c-3 -7 -4 -154 -3 -327 l3 -315 328 -3 327 -2 0 -325 0 -325 325 0 325 0 0 325 0 325 -325 0 -325 0 0 330 0 330 -325 0 c-253 0 -327 -3 -330 -13z\"],[\"d\",\"M15710 1965 l0 -655 325 0 325 0 0 655 0 655 -325 0 -325 0 0 -655z\"],[\"d\",\"M6540 1635 l0 -325 330 0 330 0 0 325 0 325 -330 0 -330 0 0 -325z\"],[\"d\",\"M17020 1635 l0 -325 655 0 655 0 0 325 0 325 -655 0 -655 0 0 -325z\"],[1,\"download-button\",3,\"click\",\"title\"]],template:function(l,p){l&1&&(t(0,\"div\",0),f(),t(1,\"svg\",1)(2,\"g\",2),o(3,\"path\",3)(4,\"path\",4)(5,\"path\",5),r(),o(6,\"path\",6),t(7,\"defs\")(8,\"clipPath\",7),o(9,\"rect\",8),r()()()(),w(),t(10,\"div\",9),f(),t(11,\"svg\",10),o(12,\"path\",11),t(13,\"g\",12),o(14,\"rect\",13),r(),o(15,\"rect\",14)(16,\"rect\",15)(17,\"rect\",16)(18,\"rect\",17)(19,\"rect\",18),u(20,l2,4,0,\"ng-container\",19),c(21,\"async\"),u(22,s2,4,0,\"ng-container\",19),c(23,\"async\"),o(24,\"circle\",20)(25,\"path\",21),t(26,\"g\",22),o(27,\"rect\",23)(28,\"path\",24)(29,\"path\",25)(30,\"path\",26)(31,\"path\",27)(32,\"path\",28),r(),t(33,\"g\",29),o(34,\"path\",30),r(),t(35,\"defs\")(36,\"filter\",31),o(37,\"feFlood\",32)(38,\"feColorMatrix\",33)(39,\"feOffset\",34)(40,\"feGaussianBlur\",35)(41,\"feComposite\",36)(42,\"feColorMatrix\",37)(43,\"feBlend\",38)(44,\"feBlend\",39),r(),t(45,\"filter\",40),o(46,\"feFlood\",32)(47,\"feColorMatrix\",33)(48,\"feOffset\",41)(49,\"feGaussianBlur\",42)(50,\"feComposite\",36)(51,\"feColorMatrix\",43)(52,\"feBlend\",38)(53,\"feBlend\",39),r(),t(54,\"filter\",44),o(55,\"feFlood\",32)(56,\"feColorMatrix\",33)(57,\"feOffset\",45)(58,\"feGaussianBlur\",46)(59,\"feComposite\",36)(60,\"feColorMatrix\",47)(61,\"feBlend\",38)(62,\"feBlend\",39),r(),t(63,\"linearGradient\",48),o(64,\"stop\",49)(65,\"stop\",50),r(),t(66,\"linearGradient\",51),o(67,\"stop\",52)(68,\"stop\",50),r()()()(),w(),t(69,\"div\",53)(70,\"div\",54),z(71),c(72,\"translate\"),r(),t(73,\"div\",55),z(74),c(75,\"translate\"),r()(),t(76,\"div\",56),u(77,p2,26,0,\"div\",57)(78,m2,2,3,\"ui-kit-button\",58),t(79,\"ui-kit-button\",59),c(80,\"translate\"),P(\"click\",function(){return p.skipPromo()}),r()()),l&2&&(s(20),m(\"ngIf\",L(21,8,p.isRuLang$)),s(2),m(\"ngIf\",!L(23,10,p.isRuLang$)),s(49),O(\" \",L(72,12,\"altegiome.large_promo.title\"),\" \"),s(3),O(\" \",L(75,14,\"altegiome.large_promo.description\"),\" \"),s(3),m(\"ngIf\",!p.isMobile),s(),m(\"ngIf\",p.isMobile),s(),m(\"title\",L(80,16,\"altegiome.large_promo.skip\"))(\"type\",p.buttonType.ghost))},dependencies:[$,X,W,Y],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;padding:56px 0 35px;height:100%}@media (max-height: 700px){[_nghost-%COMP%]{padding:16px 0 10px}}[_nghost-%COMP%]   .promo-logo[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .promo-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-grow:1}[_nghost-%COMP%]   .promo-image[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .promo-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;padding:0 25px;flex-grow:1}[_nghost-%COMP%]   .promo-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;font-style:normal;font-weight:600;font-size:32px;line-height:36px}[_nghost-%COMP%]   .promo-text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{text-align:center;font-style:normal;font-weight:400;font-size:14px;line-height:20px}[_nghost-%COMP%]   .promo-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding-left:25px;padding-right:25px;font-style:normal;font-weight:500;font-size:16px;line-height:24px}[_nghost-%COMP%]   .promo-actions[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%]{align-self:center}[_nghost-%COMP%]   .promo-actions[_ngcontent-%COMP%]   .download-button[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary)}[_nghost-%COMP%]   .promo-actions[_ngcontent-%COMP%]   .skip-button[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary)}'],changeDetection:0}));let n=i;return n})();var i2=\"aunio-promo-was-closed\",j2=(()=>{let i=class i{constructor(a,e,l){C(this,\"tracking\");C(this,\"storeSnapshotService\");C(this,\"modalService\");C(this,\"translate\",h(K));C(this,\"promoData\",{id:1,image_url:\"https://be.cdn.alteg.io/images/email/\",description:this.translate.instant(\"altegiome_promo_description\"),button_title:this.translate.instant(\"altegiome_promo_button_title\"),button_url:\"\",title:\"\",place_slugs:[],is_enabled:!0});C(this,\"_isVisible$\",new A(!1));C(this,\"isVisible$\",this._isVisible$.asObservable());this.tracking=a,this.storeSnapshotService=e,this.modalService=l}openAuthPromo(){B.isNativePlatform()||this.openedViaAltegiome()||this.modalService.openModal({component:C2,componentData:{},params:{modalType:V.virtualPage,title:\"\",ignoreOutsideClick:!0}})}openModal(a){if(this.wasClosedBefore()||B.isNativePlatform()||this.openedViaAltegiome())return;let e=t2.imagesUrl,l=x().phone,H=this.storeSnapshotService.selectSnapshot(d.currentCompany.getCurrentCompany).is_abonement_restriction_enabled,_=this.storeSnapshotService.selectSnapshot(d.applications.getApplications).find(n2=>n2.slug===\"aunio\"),Z=this.storeSnapshotService.selectSnapshot(d.localization.getCurrentLanguage);if(!(_!=null&&_.one_link)){console.warn(\"Altegio.me application or one_link not found\");return}e+=H?\"newSport\":\"newBeauty\",e+=l?\"Mobile\":\"Desktop\",Z===\"ru-RU\"?e+=\"Ru\":Z===\"pt-PT\"?e+=\"Pt\":Z===\"uk-UA\"?e+=\"Uk\":e+=\"En\",e+=\".png\",this.promoData.image_url=e,this.promoData.button_url=_.one_link,this.promoData.description=this.translate.instant(\"altegiome_promo_description\"),this.promoData.button_title=this.translate.instant(\"altegiome_promo_button_title\"),this.modalService.openModal({component:e2,componentData:{promo:this.promoData,page:a,trackButtonName:\"aunio_promo_banner_button\",isAltegiomePromo:!0},params:{modalType:V.withImage,onModalClose:()=>this.setWasClosedToSession()}}),this.trackOpen(a)}wasClosedBefore(){let a=sessionStorage.getItem(i2);return a&&!!JSON.parse(a)}setWasClosedToSession(){sessionStorage.setItem(i2,JSON.stringify(!0))}openedViaAltegiome(){return!!(localStorage.getItem(\"aunio_user_data\")||localStorage.getItem(\"yplaces_user_data\"))}trackOpen(a){this.tracking.track({type:g.Action.view,page:{name:a},context_element_type:\"banner\",context_element_name:\"aunio_promo_banner\"})}};C(i,\"\\u0275fac\",function(e){return new(e||i)(M(S),M(k),M(y))}),C(i,\"\\u0275prov\",F({token:i,factory:i.\\u0275fac,providedIn:\"root\"}));let n=i;return n})();export{j2 as a};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 24861,
          "_transferSize": 25521,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.858Z",
        "time": 685.8340000035241,
        "timings": {
          "blocked": 469.65099999751897,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2799999999999727,
          "wait": 209.30599994819613,
          "receive": 6.597000057809055,
          "_blocked_queueing": 6.160999997518957,
          "_blocked_proxy": 11.126,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "425017",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-UTVABLOL.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7084"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b351362ae5861c-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-738\""
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
              "value": "f0160a357e4b5928aafee135c2737121"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 1848,
            "mimeType": "application/javascript",
            "compression": 913,
            "text": "import{Gb as l,Ka as a,Kc as m,Wb as d,Zb as p,cb as c,hb as s,qc as h,rc as u}from\"./chunk-KO722YSM.js\";import{g as t}from\"./chunk-JV5WWF5Q.js\";var v=[\"*\"],k=(()=>{let i=class i{constructor(e){t(this,\"elementRef\");t(this,\"disabled\",!1);t(this,\"isActiveChips\");t(this,\"emitElementWhenActive\",new c);this.elementRef=e}set active(e){this.isActiveChips=e,e&&this.emitElementWhenActive.emit(this.elementRef.nativeElement)}};t(i,\"\\u0275fac\",function(o){return new(o||i)(l(s))}),t(i,\"\\u0275cmp\",a({type:i,selectors:[[\"ui-kit-chips\"]],hostVars:6,hostBindings:function(o,n){o&2&&(d(\"data-locator-chips-disabled\",n.disabled)(\"data-locator-chips-active\",n.isActiveChips),p(\"disabled\",n.disabled)(\"active\",n.isActiveChips))},inputs:{active:\"active\",disabled:\"disabled\"},outputs:{emitElementWhenActive:\"emitElementWhenActive\"},standalone:!0,features:[m],ngContentSelectors:v,decls:1,vars:0,template:function(o,n){o&1&&(h(),u(0))},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{font-style:normal;font-weight:500;font-size:14px;line-height:20px;display:block;padding:10px;border-radius:100px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:48px;text-align:center;max-width:275px;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;-webkit-transform:translate3d(0,0,0);color:var(--y-core-color-text-primary);background-color:var(--y-core-color-surface-tertiary);transition-property:background-color,background-image,color,border-color,opacity,box-shadow,border-radius;transition-duration:.2s}.active[_nghost-%COMP%]{color:var(--y-core-color-text-on-accent);background-color:var(--y-core-color-surface-accent)}[_nghost-%COMP%]:hover:not(.active){background-color:var(--y-core-color-surface-tertiary-high)}.disabled[_nghost-%COMP%]{opacity:.5}'],changeDetection:0}));let r=i;return r})();export{k as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 935,
          "_transferSize": 1594,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.858Z",
        "time": 780.1060000201687,
        "timings": {
          "blocked": 587.4299999786019,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.24500000000000455,
          "wait": 191.72500002083927,
          "receive": 0.7060000207275152,
          "_blocked_queueing": 6.4489999786019325,
          "_blocked_proxy": 10.899000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "426446",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-2AY43R2Q.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7083"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b351367c488625-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-1737\""
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
              "value": "4387ffd4a2c93ba0b426d8c93fcfef85"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5943,
            "mimeType": "application/javascript",
            "compression": 3773,
            "text": "import{Dc as D,Ei as z,Fc as A,Tc as B,c as h,ch as O,e as T,ui as U,wi as E,yi as N}from\"./chunk-6FGVQ7PR.js\";import{Ac as M,Fb as a,Gb as u,Ka as s,Ub as g,Va as _,Wa as v,Wb as f,Xb as p,Zb as C,ec as l,fc as d,gc as x,kc as w,oc as k,pc as m,qc as P,rc as S,yb as b,yc as I,zb as y}from\"./chunk-KO722YSM.js\";import{g as n}from\"./chunk-JV5WWF5Q.js\";var V=[\"*\"],j=(()=>{let o=class o{};n(o,\"\\u0275fac\",function(e){return new(e||o)}),n(o,\"\\u0275cmp\",s({type:o,selectors:[[\"app-bottom-panel\"]],ngContentSelectors:V,decls:1,vars:0,template:function(e,c){e&1&&(P(),S(0))},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;padding:16px;border-top:1px solid var(--y-core-color-stroke-primary);background-color:var(--y-core-color-surface-primary);position:fixed;bottom:0;left:0;right:0}@media (min-width: 600px){[_nghost-%COMP%]{margin:0 auto;width:600px;max-width:100%}}'],changeDetection:0}));let t=o;return t})();var L=(()=>{let o=class o{constructor(){n(this,\"description\",\"\");n(this,\"isAltegiomePromo\",!1)}};n(o,\"\\u0275fac\",function(e){return new(e||o)}),n(o,\"\\u0275cmp\",s({type:o,selectors:[[\"app-promo-description\"]],inputs:{description:\"description\",isAltegiomePromo:\"isAltegiomePromo\"},decls:1,vars:3,consts:[[1,\"promo-text\",\"description\",3,\"ngClass\",\"innerHTML\"]],template:function(e,c){e&1&&x(0,\"div\",0),e&2&&(p(\"ngClass\",c.isAltegiomePromo?\"centered\":\"\")(\"innerHTML\",c.description,b),f(\"data-locator\",\"promo_description\"))},dependencies:[h],styles:['@charset \"UTF-8\";.promo-text{overflow:hidden;position:relative;color:var(--y-core-color-text-primary);padding-right:10px}.promo-text:after{content:\"\";height:100%;width:1px;position:absolute;top:0;right:-1px;box-shadow:0 0 10px 10px var(--y-core-color-surface-primary)}.promo-text.description{font-style:normal;font-weight:400;font-size:16px;line-height:24px;white-space:pre-line}.promo-text.centered{text-align:center}.promo-text.centered.description{font-style:normal;font-weight:400;font-size:14px;line-height:20px;white-space:pre-line}a{color:var(--y-core-color-other-link);cursor:pointer}\\n'],encapsulation:2,changeDetection:0}));let t=o;return t})();var $=t=>new RegExp(/^(http|https):\\/\\/[^ \"]+$/).test(t),H=$;function q(t,o){if(t&1&&x(0,\"img\",8),t&2){let i=m(2);p(\"src\",i.promo.image_url,y)}}function G(t,o){if(t&1&&(l(0,\"div\",9),I(1),d()),t&2){let i=m(2);p(\"ngClass\",i.isAltegiomePromo?\"title\":\"promo-block-promo-title\"),f(\"data-locator\",\"promo_title\"),a(),M(\" \",i.promo.title,\" \")}}function J(t,o){if(t&1&&x(0,\"app-promo-description\",10),t&2){let i=m(2);p(\"description\",i.promo.description)(\"isAltegiomePromo\",i.isAltegiomePromo)}}function Q(t,o){if(t&1){let i=w();l(0,\"app-bottom-panel\",11)(1,\"ui-kit-button\",12),k(\"click\",function(){_(i);let e=m(2);return v(e.promo.button_url&&e.goToLink(e.promo.button_url))}),d()()}if(t&2){let i=m(2);a(),p(\"title\",i.promo.button_title),f(\"data-locator\",\"promo_button\")}}function X(t,o){if(t&1&&(l(0,\"div\",2),g(1,q,1,1,\"img\",3),l(2,\"div\",4),g(3,G,2,3,\"div\",5)(4,J,1,2,\"app-promo-description\",6),d(),g(5,Q,2,2,\"app-bottom-panel\",7),d()),t&2){let i=m();C(\"has-button\",i.canShowButton),a(),p(\"ngIf\",i.promo==null?null:i.promo.image_url),a(2),p(\"ngIf\",i.promo.title),a(),p(\"ngIf\",i.promo.description),a(),p(\"ngIf\",i.canShowButton)}}var mt=(()=>{let o=class o{constructor(r,e,c){n(this,\"tracking\");n(this,\"bridgeService\");n(this,\"storeSnapshotService\");n(this,\"promo\");n(this,\"page\");n(this,\"trackButtonName\",\"clickable_promo_button\");n(this,\"isAltegiomePromo\",!1);this.tracking=r,this.bridgeService=e,this.storeSnapshotService=c}get canShowButton(){return this.promo&&!!this.promo.button_title&&!!this.promo.button_url}goToLink(r){if(this.trackButtonClick(),H(r)){if(this.storeSnapshotService.selectSnapshot(U.widgetSettings.getWidgetUseExternalLinkHook)){this.bridgeService.post(new E(N.open_external_link,{link:r}));return}window.open(r)}}trackButtonClick(){this.tracking.track({type:D.Action.click,page:{name:this.page},element_type:\"button\",element_name:this.trackButtonName})}};n(o,\"\\u0275fac\",function(e){return new(e||o)(u(A),u(z),u(O))}),n(o,\"\\u0275cmp\",s({type:o,selectors:[[\"app-promo-info\"]],inputs:{promo:\"promo\",page:\"page\",trackButtonName:\"trackButtonName\",isAltegiomePromo:\"isAltegiomePromo\"},decls:2,vars:1,consts:[[1,\"wrapper\"],[\"class\",\"content-wrapper\",3,\"has-button\",4,\"ngIf\"],[1,\"content-wrapper\"],[\"class\",\"promo-image\",\"alt\",\"\",\"data-locator\",\"modal_promo_logo\",3,\"src\",4,\"ngIf\"],[1,\"promo-content\"],[\"class\",\"promo-text\",3,\"ngClass\",4,\"ngIf\"],[3,\"description\",\"isAltegiomePromo\",4,\"ngIf\"],[\"class\",\"bottom-panel promo-button\",4,\"ngIf\"],[\"alt\",\"\",\"data-locator\",\"modal_promo_logo\",1,\"promo-image\",3,\"src\"],[1,\"promo-text\",3,\"ngClass\"],[3,\"description\",\"isAltegiomePromo\"],[1,\"bottom-panel\",\"promo-button\"],[1,\"bottom-panel-button\",3,\"click\",\"title\"]],template:function(e,c){e&1&&(l(0,\"div\",0),g(1,X,6,6,\"div\",1),d()),e&2&&(a(),p(\"ngIf\",c.promo))},dependencies:[h,T,B,j,L],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;max-height:60vh;overflow:auto}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.content-wrapper.has-button[_ngcontent-%COMP%]{padding-bottom:80px}.promo-content[_ngcontent-%COMP%]{padding:16px}.promo-image[_ngcontent-%COMP%]{width:100%}.promo-button[_ngcontent-%COMP%]{padding:24px 16px;background:none;border:none}.promo-text[_ngcontent-%COMP%]{overflow:hidden;position:relative;color:var(--y-core-color-text-primary);padding-right:10px}.promo-text[_ngcontent-%COMP%]:after{content:\"\";height:100%;width:1px;position:absolute;top:0;right:-1px;box-shadow:0 0 10px 10px var(--y-core-color-surface-primary)}.promo-text.promo-block-promo-title[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;padding-bottom:12px}.promo-text.title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px;padding-bottom:12px;text-align:center}'],changeDetection:0}));let t=o;return t})();export{H as a,j as b,mt as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2170,
          "_transferSize": 2830,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T05:42:49.858Z",
        "time": 836.6650000680238,
        "timings": {
          "blocked": 625.8149999736622,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.30499999999995,
          "wait": 209.96499998532238,
          "receive": 0.580000109039247,
          "_blocked_queueing": 7.594999973662198,
          "_blocked_proxy": 9.600000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "425014",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-JGQFRULP.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_136",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-IV3KQJLV.js",
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
              "value": "https://n958200.alteg.io/main-JGQFRULP.js"
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
          "headersSize": 1384,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "7082"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b351367cc107a5-HKG"
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
              "value": "Wed, 08 Oct 2025 05:42:50 GMT"
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
              "value": "W/\"68e51480-2c10c\""
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
              "value": "4d66f6bf5b9f466975a1cb402cd2d77e"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 180492,
            "mimeType": "application/javascript",
            "compression": 131476,
            "text": "import{$f as vi,Aa as br,Ab as Ar,Ba as xe,Bb as Mt,Bd as Zr,Cd as Qr,Cg as Ii,Db as ye,Dc as _r,Dd as ei,De as mi,Eb as he,Ed as ti,Eg as Nt,Ei as bi,Fc as tt,Fd as ri,Fg as Se,Gd as ii,Gi as ct,Hc as w,Hg as Le,Id as ni,Ii as Ni,J as Cr,Jd as oi,Jf as ve,Ji as Me,K as Qe,M as kr,N as Tr,Oc as rt,Od as Ct,P as X,Pd as si,Pe as kt,Qd as ai,Qe as fi,Ra as Nr,Rd as ci,Si as Ri,Tc as jr,Te as hi,Ti as Rt,Ue as ee,Ug as Pi,Vb as $r,Ve as gi,Wd as nt,Xd as ot,Yd as ce,Yf as Dt,_f as yi,a as Ze,ac as Ur,ag as Si,b as Ne,bg as Be,bh as Oe,ch as te,d as hr,de as di,df as Tt,e as gr,gc as Hr,gh as wi,hc as xr,hd as Fr,hg as bt,ic as zr,ie as li,j as yr,jg as b,kg as at,l as vr,lg as Mi,mc as Br,md as It,mh as Ci,n as Sr,nb as fe,nd as it,oc as ge,od as Kr,oh as ki,p as Mr,pd as Pt,rc as et,re as st,sd as wt,se as ui,tc as Lr,td as Wr,u as Ir,ub as Rr,uc as Or,ud as Vr,ui as m,v as St,vd as Jr,w as Pr,wb as Er,wd as Yr,wi as Ti,x as wr,xa as q,xd as Gr,ya as Dr,yd as Xr,yi as Di,zb as Z,zd as qr,ze as pi}from\"./chunk-6FGVQ7PR.js\";import{$a as sr,$b as dr,Aa as er,Ac as qe,B as Jt,C as Yt,Ca as Ye,Dc as ur,Ea as y,Ec as pr,Fa as I,Fb as U,Fc as mr,Gb as G,J as C,Ka as O,Kc as fr,L as yt,La as tr,M as Gt,Na as Te,Pc as Ue,Qc as He,R as Je,S as Xt,T as z,Ua as rr,Ub as De,Va as ir,W as qt,Wa as nr,Wb as Ae,Xb as H,Y as pe,Za as or,Zb as cr,aa as R,ac as vt,cb as ar,e as Ce,ec as K,fc as _,gc as W,h as ke,i as ue,j as Y,ka as B,kc as lr,la as Zt,m as Ve,n as Wt,o as Vt,oa as ne,oc as Xe,pc as be,qa as k,r as ie,sa as $,ta as Qt,ua as F,x as M,y as N,yb as Ge,yc as me,za as P,zc as $e}from\"./chunk-KO722YSM.js\";import{a as ze,b as Q}from\"./chunk-POJFEGQU.js\";import{a as g,b as S,g as s,i as h}from\"./chunk-JV5WWF5Q.js\";var Ie={name:\"client.booking\",production:!0,debug:!1,version:\"191110.5e092a20\",apiToken:\"Bearer gtcwf654agufy25gsadh\",apiUrl:\"/api/v1\",hybridMode:!1,apiPlatformUrl:\"/api/v1/b2c\",apiPlatformToken:\"\",brandDomain:\"altegio\",imagesUrl:\"https://be.cdn.alteg.io/images/email/\",defaultBookformId:1,firebaseId:793052107897,selectedServicesLimit:10,tracking:{rewriteSdkUdidWithValue:\"\",enabled:!0,httpUrl:\"\"},metrika:95940863,storagePrefix:\"client_booking\",maxApplicationWidth:600,sentry:{dsn:\"https://7bcbd183611e0badf786d2fc35dc275d@errors.alteg.io/38\",release:\"191110.5e092a20\",environment:\"live\",enabled:!0,tracesSampleRate:0},mapsKeys:{google:\"AIzaSyC6PGy3VjplUOO5sbDdXYTvQs9ejDAed-k\",yandex:\"\",twoGis:\"rupwdw1271\"},localTranslatesPath:\"/assets/lang.json\",useLocalTranslates:!1,searchVisibilityThreshold:10,capacitorBundleId:\"io.alteg.b2\",pipelineId:\"191110\",branchName:\"master\",commitSHA:\"5e092a20\",isMockedMode:!1,googleMapsTrackingApi:\"https://www.google.com/maps/conversion/collect\",clientFeatureFlags:[]};var Ei=new Ye(\"libs.localization\");var dt=function(i){return i.language=\"language\",i.selectLanguage=\"select_language\",i}(dt||{});function dn(i,e){if(i&1&&(K(0,\"option\",5),me(1),_()),i&2){let l=e.$implicit;H(\"ngValue\",l.code),Ae(\"data-locator\",\"lang_\"+l.code),U(),qe(\" \",l.title,\" \")}}var Ai=(()=>{let e=class e{constructor(t){s(this,\"trackingService\");s(this,\"selectedLanguage\");s(this,\"languages\");s(this,\"localizationService\",I(rt));s(this,\"selectedLanguageTitle$\",this.localizationService.getTitle());s(this,\"destroy$\",new Y(1));this.trackingService=t}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setLanguage(){this.selectedLanguageTitle$.pipe(R(),k(this.destroy$)).subscribe(t=>{this.trackingService.track({type:_r.Action.select,name:dt.selectLanguage,element:{type:dt.language,name:t}})}),this.localizationService.setLanguage(this.selectedLanguage)}};s(e,\"\\u0275fac\",function(r){return new(r||e)(G(tt))}),s(e,\"\\u0275cmp\",O({type:e,selectors:[[\"app-localization-selector\"]],inputs:{selectedLanguage:\"selectedLanguage\",languages:\"languages\"},decls:10,vars:11,consts:[[1,\"label\"],[1,\"base-text\"],[3,\"name\",\"setSvgSize\"],[1,\"selector\",3,\"ngModelChange\",\"change\",\"ngModel\"],[3,\"ngValue\",4,\"ngFor\",\"ngForOf\"],[3,\"ngValue\"]],template:function(r,n){r&1&&(K(0,\"div\")(1,\"p\",0),me(2),Ue(3,\"translate\"),_(),K(4,\"p\",1),me(5),Ue(6,\"async\"),_()(),W(7,\"ui-kit-svg-icon\",2),K(8,\"select\",3),mr(\"ngModelChange\",function(c){return pr(n.selectedLanguage,c)||(n.selectedLanguage=c),c}),Xe(\"change\",function(){return n.setLanguage()}),De(9,dn,2,3,\"option\",4),_()),r&2&&(U(2),$e(He(3,7,\"menu.change_lang\")),U(3),$e(He(6,9,n.selectedLanguageTitle$)),U(2),H(\"name\",\"profile/select-blue\")(\"setSvgSize\",!1),U(),ur(\"ngModel\",n.selectedLanguage),Ae(\"data-locator\",\"language_select\"),U(),H(\"ngForOf\",n.languages))},dependencies:[hr,xr,zr,Hr,$r,Ur,he,yr,Ar],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{position:relative;display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   ui-kit-svg-icon[_ngcontent-%COMP%]{color:var(--y-core-color-icon-secondary)}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-grey-main);margin-bottom:4px}[_nghost-%COMP%]   .selector[_ngcontent-%COMP%]{cursor:pointer;-webkit-appearance:none;appearance:none;position:absolute;top:0;left:0;right:0;bottom:0;width:100%;opacity:0}'],changeDetection:0}));let i=e;return i})();var $i=(()=>{let e=class e{constructor(t){s(this,\"localizationService\");this.localizationService=t}intercept(t,r){return this.localizationService.getLanguage().pipe(z(1),ne(n=>{if(n&&n.length>0){let o=t.clone({headers:t.headers.set(\"accept-language\",n)});return r.handle(o)}return r.handle(t)}))}};s(e,\"\\u0275fac\",function(r){return new(r||e)(y(rt))}),s(e,\"\\u0275prov\",P({token:e,factory:e.\\u0275fac}));let i=e;return i})();var Ui=new Ye(\"libs.ui-kit.CurrentCompanyService\");var ln=/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,un=/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}((\\+|-).+)$/;function Hi(i){let e=i;try{return ln.test(e)?e=\"\".concat(e,\"T00:00:00\"):un.test(e)&&(e=e.slice(0,19)),new Date(e).toISOString()}catch{return e}}var re=function(i){return i.day=\"day\",i.dayMonth=\"dayMonth\",i.wideMonth=\"wideMonth\",i.shortTime=\"shortTime\",i.narrowWeekDay=\"narrowWeekDay\",i.longDate=\"longDate\",i.fullDateShortWeekDay=\"fullDateShortWeekDay\",i.fullDateWideWeekDay=\"fullDateWideWeekDay\",i.reverseFullDate2=\"reverseFullDate2\",i.fullDateTime=\"fullDateTime\",i.shortDateTime=\"shortDateTime\",i.dd=\"dd\",i}(re||{}),$t=(()=>{let e=class e extends Sr{constructor(r,n){super(r.currentLang||r.defaultLang||\"en-GB\");s(this,\"translateService\");s(this,\"currentCompanyService\");this.translateService=r,this.currentCompanyService=n}transform(r,n,o=!1,c){var f,v;let a=c||((v=(f=this.currentCompanyService)==null?void 0:f.getCurrentCompany())==null?void 0:v.datetime_format),u=n;if(!r)return\"\";switch(n){case re.shortTime:u=a===\"US\"?\"h:mm a\":\"H:mm\";break;case re.dayMonth:u=a===\"US\"?\"MMMM d\":\"d MMMM\";break;case re.wideMonth:u=\"LLLL\";break;case re.narrowWeekDay:u=\"EEEEE\";break;case re.longDate:u=a===\"US\"?\"MMMM d yyyy\":\"d MMMM yyyy\";break;case re.fullDateShortWeekDay:u=a===\"US\"?\"EEEEEE, MMMM d\":\"EEEEEE, d MMMM\";break;case re.fullDateWideWeekDay:u=a===\"US\"?\"EEEE, MMMM d\":\"EEEE, d MMMM\";break;case re.reverseFullDate2:u=a===\"US\"?\"MMMM d, EEEE\":\"d MMMM, EEEE\";break;case re.fullDateTime:u=a===\"US\"?\"EEEEEE, MMMM d h:mm a\":\"EEEEEE, d MMMM H:mm\";break;case re.shortDateTime:u=a===\"US\"?\"MMMM dd, h:mm a\":\"dd MMMM, H:mm\";break;case re.dd:u=\"dd\";break;default:u=n}let d=r.trim().split(\" \").join(\"T\"),p=Hi(d);fe.fromISO(p).isYearDifferentFrom(fe.now())&&!n.toUpperCase().includes(\"Y\")&&o&&(u+=\" YYYY\");try{return super.transform(p,u,void 0,this.translateService.currentLang||this.translateService.defaultLang||\"en\")}catch(j){let D=j.message;return D&&D.length!==0&&D.indexOf(\"InvalidPipeArgument\")!==-1?super.transform(vi(p),u,void 0,this.translateService.currentLang||this.translateService.defaultLang||\"en\"):\"\"}}};s(e,\"\\u0275fac\",function(n){return new(n||e)(G(Z,16),G(Ui,16))}),s(e,\"\\u0275pipe\",Te({name:\"yDate\",type:e,pure:!0})),s(e,\"\\u0275prov\",P({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let i=e;return i})();var Mo=(()=>{let e=class e{constructor(t){s(this,\"store\");s(this,\"languages\");s(this,\"bookformLanguage\");s(this,\"selectedLanguage\");s(this,\"isLoaded\",new ar);s(this,\"destroy$\",new Y(1));s(this,\"isLoading$\",new Ce);this.store=t}ngOnInit(){this.isLoading$=this.store.select(m.localization.getLoadingStatus);let t=this.store.select(m.localization.getCurrentLoadedLanguage).pipe(M(r=>r!==null));N([this.isLoading$,t]).pipe(k(this.destroy$)).subscribe(([r,n])=>{!r&&n&&this.isLoaded.emit(!r)})}ngOnChanges(t){var r,n,o,c;(r=t==null?void 0:t.languages)!=null&&r.currentValue&&(this.languages=t.languages.currentValue),(o=(n=t==null?void 0:t.bookformLanguage)==null?void 0:n.currentValue)!=null&&o.length&&(this.bookformLanguage=t.bookformLanguage.currentValue),(c=t==null?void 0:t.selectedLanguage)!=null&&c.currentValue&&(this.selectedLanguage=t.selectedLanguage.currentValue)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};s(e,\"\\u0275fac\",function(r){return new(r||e)(G(q))}),s(e,\"\\u0275cmp\",O({type:e,selectors:[[\"app-localization-host\"]],inputs:{languages:\"languages\",bookformLanguage:\"bookformLanguage\",selectedLanguage:\"selectedLanguage\"},outputs:{isLoaded:\"isLoaded\"},features:[rr],decls:0,vars:0,template:function(r,n){},styles:['@charset \"UTF-8\";.hidden[_nghost-%COMP%]{display:none}[_nghost-%COMP%]{display:block;height:0}.language-selector[_ngcontent-%COMP%]{position:fixed;bottom:16px;right:16px}'],changeDetection:0}));let i=e;return i})();(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){return a===1?1:5}i.ng.common.locales.az=[\"az\",[[\"a\",\"p\"],[\"AM\",\"PM\"],e],[[\"AM\",\"PM\"],e,e],[[\"7\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\"],[\"B.\",\"B.e.\",\"\\xC7.a.\",\"\\xC7.\",\"C.a.\",\"C.\",\"\\u015E.\"],[\"bazar\",\"bazar ert\\u0259si\",\"\\xE7\\u0259r\\u015F\\u0259nb\\u0259 ax\\u015Fam\\u0131\",\"\\xE7\\u0259r\\u015F\\u0259nb\\u0259\",\"c\\xFCm\\u0259 ax\\u015Fam\\u0131\",\"c\\xFCm\\u0259\",\"\\u015F\\u0259nb\\u0259\"],[\"B.\",\"B.E.\",\"\\xC7.A.\",\"\\xC7.\",\"C.A.\",\"C.\",\"\\u015E.\"]],[[\"7\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\"],[\"B.\",\"B.E.\",\"\\xC7.A.\",\"\\xC7.\",\"C.A.\",\"C.\",\"\\u015E.\"],[\"bazar\",\"bazar ert\\u0259si\",\"\\xE7\\u0259r\\u015F\\u0259nb\\u0259 ax\\u015Fam\\u0131\",\"\\xE7\\u0259r\\u015F\\u0259nb\\u0259\",\"c\\xFCm\\u0259 ax\\u015Fam\\u0131\",\"c\\xFCm\\u0259\",\"\\u015F\\u0259nb\\u0259\"],[\"B.\",\"B.E.\",\"\\xC7.A.\",\"\\xC7.\",\"C.A.\",\"C.\",\"\\u015E.\"]],[[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\"],[\"yan\",\"fev\",\"mar\",\"apr\",\"may\",\"iyn\",\"iyl\",\"avq\",\"sen\",\"okt\",\"noy\",\"dek\"],[\"yanvar\",\"fevral\",\"mart\",\"aprel\",\"may\",\"iyun\",\"iyul\",\"avqust\",\"sentyabr\",\"oktyabr\",\"noyabr\",\"dekabr\"]],e,[[\"e.\\u0259.\",\"y.e.\"],e,[\"eram\\u0131zdan \\u0259vv\\u0259l\",\"yeni era\"]],1,[6,0],[\"dd.MM.yy\",\"d MMM y\",\"d MMMM y\",\"d MMMM y, EEEE\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1} {0}\",e,e,e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"AZN\",\"\\u20BC\",\"Az\\u0259rbaycan Manat\\u0131\",{AZN:[\"\\u20BC\"],BYN:[e,\"\\u0440.\"],JPY:[\"JP\\xA5\",\"\\xA5\"],PHP:[e,\"\\u20B1\"],RON:[e,\"ley\"],SYP:[e,\"S\\xA3\"],THB:[\"\\u0E3F\"],TWD:[\"NT$\"],USD:[\"US$\",\"$\"]},\"ltr\",l,[[[\"gec\\u0259yar\\u0131\",\"g\",\"s\\xFCbh\",\"s\\u0259h\\u0259r\",\"g\\xFCnd\\xFCz\",\"ax\\u015Fam\\xFCst\\xFC\",\"ax\\u015Fam\",\"gec\\u0259\"],[\"gec\\u0259yar\\u0131\",\"g\\xFCnorta\",\"s\\xFCbh\",\"s\\u0259h\\u0259r\",\"g\\xFCnd\\xFCz\",\"ax\\u015Fam\\xFCst\\xFC\",\"ax\\u015Fam\",\"gec\\u0259\"],e],[[\"gec\\u0259yar\\u0131\",\"g\\xFCnorta\",\"s\\xFCbh\",\"s\\u0259h\\u0259r\",\"g\\xFCnd\\xFCz\",\"ax\\u015Fam\\xFCst\\xFC\",\"ax\\u015Fam\",\"gec\\u0259\"],e,e],[\"00:00\",\"12:00\",[\"04:00\",\"06:00\"],[\"06:00\",\"12:00\"],[\"12:00\",\"17:00\"],[\"17:00\",\"19:00\"],[\"19:00\",\"24:00\"],[\"00:00\",\"04:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){return a===1?1:5}i.ng.common.locales.bg=[\"bg\",[[\"am\",\"pm\"],e,[\"\\u043F\\u0440.\\u043E\\u0431.\",\"\\u0441\\u043B.\\u043E\\u0431.\"]],[[\"am\",\"pm\"],e,e],[[\"\\u043D\",\"\\u043F\",\"\\u0432\",\"\\u0441\",\"\\u0447\",\"\\u043F\",\"\\u0441\"],[\"\\u043D\\u0434\",\"\\u043F\\u043D\",\"\\u0432\\u0442\",\"\\u0441\\u0440\",\"\\u0447\\u0442\",\"\\u043F\\u0442\",\"\\u0441\\u0431\"],[\"\\u043D\\u0435\\u0434\\u0435\\u043B\\u044F\",\"\\u043F\\u043E\\u043D\\u0435\\u0434\\u0435\\u043B\\u043D\\u0438\\u043A\",\"\\u0432\\u0442\\u043E\\u0440\\u043D\\u0438\\u043A\",\"\\u0441\\u0440\\u044F\\u0434\\u0430\",\"\\u0447\\u0435\\u0442\\u0432\\u044A\\u0440\\u0442\\u044A\\u043A\",\"\\u043F\\u0435\\u0442\\u044A\\u043A\",\"\\u0441\\u044A\\u0431\\u043E\\u0442\\u0430\"],[\"\\u043D\\u0434\",\"\\u043F\\u043D\",\"\\u0432\\u0442\",\"\\u0441\\u0440\",\"\\u0447\\u0442\",\"\\u043F\\u0442\",\"\\u0441\\u0431\"]],e,[[\"\\u044F\",\"\\u0444\",\"\\u043C\",\"\\u0430\",\"\\u043C\",\"\\u044E\",\"\\u044E\",\"\\u0430\",\"\\u0441\",\"\\u043E\",\"\\u043D\",\"\\u0434\"],[\"\\u044F\\u043D\\u0443\",\"\\u0444\\u0435\\u0432\",\"\\u043C\\u0430\\u0440\\u0442\",\"\\u0430\\u043F\\u0440\",\"\\u043C\\u0430\\u0439\",\"\\u044E\\u043D\\u0438\",\"\\u044E\\u043B\\u0438\",\"\\u0430\\u0432\\u0433\",\"\\u0441\\u0435\\u043F\",\"\\u043E\\u043A\\u0442\",\"\\u043D\\u043E\\u0435\",\"\\u0434\\u0435\\u043A\"],[\"\\u044F\\u043D\\u0443\\u0430\\u0440\\u0438\",\"\\u0444\\u0435\\u0432\\u0440\\u0443\\u0430\\u0440\\u0438\",\"\\u043C\\u0430\\u0440\\u0442\",\"\\u0430\\u043F\\u0440\\u0438\\u043B\",\"\\u043C\\u0430\\u0439\",\"\\u044E\\u043D\\u0438\",\"\\u044E\\u043B\\u0438\",\"\\u0430\\u0432\\u0433\\u0443\\u0441\\u0442\",\"\\u0441\\u0435\\u043F\\u0442\\u0435\\u043C\\u0432\\u0440\\u0438\",\"\\u043E\\u043A\\u0442\\u043E\\u043C\\u0432\\u0440\\u0438\",\"\\u043D\\u043E\\u0435\\u043C\\u0432\\u0440\\u0438\",\"\\u0434\\u0435\\u043A\\u0435\\u043C\\u0432\\u0440\\u0438\"]],e,[[\"\\u043F\\u0440.\\u0425\\u0440.\",\"\\u0441\\u043B.\\u0425\\u0440.\"],e,[\"\\u043F\\u0440\\u0435\\u0434\\u0438 \\u0425\\u0440\\u0438\\u0441\\u0442\\u0430\",\"\\u0441\\u043B\\u0435\\u0434 \\u0425\\u0440\\u0438\\u0441\\u0442\\u0430\"]],1,[6,0],[\"d.MM.yy '\\u0433'.\",\"d.MM.y '\\u0433'.\",\"d MMMM y '\\u0433'.\",\"EEEE, d MMMM y '\\u0433'.\"],[\"H:mm '\\u0447'.\",\"H:mm:ss '\\u0447'.\",\"H:mm:ss '\\u0447'. z\",\"H:mm:ss '\\u0447'. zzzz\"],[\"{1}, {0}\",e,e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"0.00\\xA0\\xA4\",\"#E0\"],\"BGN\",\"\\u043B\\u0432.\",\"\\u0411\\u044A\\u043B\\u0433\\u0430\\u0440\\u0441\\u043A\\u0438 \\u043B\\u0435\\u0432\",{AFN:[e,\"Af\"],AMD:[],ARS:[],AUD:[],AZN:[],BBD:[],BDT:[],BGN:[\"\\u043B\\u0432.\"],BMD:[],BND:[],BRL:[],BSD:[],BZD:[],CAD:[],CLP:[],CNY:[],COP:[],CRC:[],CUP:[],DOP:[],FJD:[],FKP:[],GBP:[e,\"\\xA3\"],GHS:[],GIP:[],GYD:[],HKD:[],ILS:[],INR:[],JMD:[],JPY:[e,\"\\xA5\"],KHR:[],KRW:[],KYD:[],KZT:[],LAK:[],LRD:[],MNT:[],MXN:[],NAD:[],NGN:[],NZD:[],PHP:[],PYG:[],RON:[],SBD:[],SGD:[],SRD:[],SSP:[],TRY:[],TTD:[],TWD:[],UAH:[],USD:[\"\\u0449.\\u0434.\",\"$\"],UYU:[],VND:[],XCD:[e,\"$\"]},\"ltr\",l,[[[\"\\u043F\\u043E\\u043B\\u0443\\u043D\\u043E\\u0449\",\"\\u0441\\u0443\\u0442\\u0440\\u0438\\u043D\\u0442\\u0430\",\"\\u043D\\u0430 \\u043E\\u0431\\u044F\\u0434\",\"\\u0441\\u043B\\u0435\\u0434\\u043E\\u0431\\u0435\\u0434\",\"\\u0432\\u0435\\u0447\\u0435\\u0440\\u0442\\u0430\",\"\\u043F\\u0440\\u0435\\u0437 \\u043D\\u043E\\u0449\\u0442\\u0430\"],e,e],e,[\"00:00\",[\"04:00\",\"11:00\"],[\"11:00\",\"14:00\"],[\"14:00\",\"18:00\"],[\"18:00\",\"22:00\"],[\"22:00\",\"04:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return d===1&&p===0?1:d===Math.floor(d)&&d>=2&&d<=4&&p===0?3:p!==0?4:5}i.ng.common.locales.cs=[\"cs\",[[\"dop.\",\"odp.\"],e,e],e,[[\"N\",\"P\",\"\\xDA\",\"S\",\"\\u010C\",\"P\",\"S\"],[\"ne\",\"po\",\"\\xFAt\",\"st\",\"\\u010Dt\",\"p\\xE1\",\"so\"],[\"ned\\u011Ble\",\"pond\\u011Bl\\xED\",\"\\xFAter\\xFD\",\"st\\u0159eda\",\"\\u010Dtvrtek\",\"p\\xE1tek\",\"sobota\"],[\"ne\",\"po\",\"\\xFAt\",\"st\",\"\\u010Dt\",\"p\\xE1\",\"so\"]],e,[[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\"],[\"led\",\"\\xFAno\",\"b\\u0159e\",\"dub\",\"kv\\u011B\",\"\\u010Dvn\",\"\\u010Dvc\",\"srp\",\"z\\xE1\\u0159\",\"\\u0159\\xEDj\",\"lis\",\"pro\"],[\"ledna\",\"\\xFAnora\",\"b\\u0159ezna\",\"dubna\",\"kv\\u011Btna\",\"\\u010Dervna\",\"\\u010Dervence\",\"srpna\",\"z\\xE1\\u0159\\xED\",\"\\u0159\\xEDjna\",\"listopadu\",\"prosince\"]],[[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\"],[\"led\",\"\\xFAno\",\"b\\u0159e\",\"dub\",\"kv\\u011B\",\"\\u010Dvn\",\"\\u010Dvc\",\"srp\",\"z\\xE1\\u0159\",\"\\u0159\\xEDj\",\"lis\",\"pro\"],[\"leden\",\"\\xFAnor\",\"b\\u0159ezen\",\"duben\",\"kv\\u011Bten\",\"\\u010Derven\",\"\\u010Dervenec\",\"srpen\",\"z\\xE1\\u0159\\xED\",\"\\u0159\\xEDjen\",\"listopad\",\"prosinec\"]],[[\"p\\u0159.n.l.\",\"n.l.\"],[\"p\\u0159. n. l.\",\"n. l.\"],[\"p\\u0159ed na\\u0161\\xEDm letopo\\u010Dtem\",\"na\\u0161eho letopo\\u010Dtu\"]],1,[6,0],[\"dd.MM.yy\",\"d. M. y\",\"d. MMMM y\",\"EEEE d. MMMM y\"],[\"H:mm\",\"H:mm:ss\",\"H:mm:ss z\",\"H:mm:ss zzzz\"],[\"{1} {0}\",e,e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"CZK\",\"K\\u010D\",\"\\u010Desk\\xE1 koruna\",{AUD:[\"AU$\",\"$\"],BYN:[e,\"\\u0440.\"],CSK:[\"K\\u010Ds\"],CZK:[\"K\\u010D\"],ILS:[e,\"\\u20AA\"],INR:[e,\"\\u20B9\"],JPY:[\"JP\\xA5\",\"\\xA5\"],PHP:[e,\"\\u20B1\"],RON:[e,\"L\"],RUR:[e,\"\\u0440.\"],TWD:[\"NT$\"],USD:[\"US$\",\"$\"],VND:[e,\"\\u20AB\"],XEU:[\"ECU\"],XXX:[]},\"ltr\",l,[[[\"p\\u016Fl.\",\"pol.\",\"r.\",\"d.\",\"o.\",\"v.\",\"n.\"],[\"p\\u016Fln.\",\"pol.\",\"r.\",\"dop.\",\"odp.\",\"ve\\u010D.\",\"v n.\"],[\"p\\u016Flnoc\",\"poledne\",\"r\\xE1no\",\"dopoledne\",\"odpoledne\",\"ve\\u010Der\",\"v noci\"]],[[\"p\\u016Fl.\",\"pol.\",\"r\\xE1no\",\"dop.\",\"odp.\",\"ve\\u010D.\",\"noc\"],[\"p\\u016Flnoc\",\"poledne\",\"r\\xE1no\",\"dopoledne\",\"odpoledne\",\"ve\\u010Der\",\"noc\"],e],[\"00:00\",\"12:00\",[\"04:00\",\"09:00\"],[\"09:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"22:00\"],[\"22:00\",\"04:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=parseInt(a.toString().replace(/^[^.]*\\.?|0+$/g,\"\"),10)||0;return u===1||p!==0&&(d===0||d===1)?1:5}i.ng.common.locales.da=[\"da\",[[\"a\",\"p\"],[\"AM\",\"PM\"],e],[[\"AM\",\"PM\"],e,e],[[\"S\",\"M\",\"T\",\"O\",\"T\",\"F\",\"L\"],[\"s\\xF8n.\",\"man.\",\"tir.\",\"ons.\",\"tor.\",\"fre.\",\"l\\xF8r.\"],[\"s\\xF8ndag\",\"mandag\",\"tirsdag\",\"onsdag\",\"torsdag\",\"fredag\",\"l\\xF8rdag\"],[\"s\\xF8\",\"ma\",\"ti\",\"on\",\"to\",\"fr\",\"l\\xF8\"]],[[\"S\",\"M\",\"T\",\"O\",\"T\",\"F\",\"L\"],[\"s\\xF8n\",\"man\",\"tir\",\"ons\",\"tor\",\"fre\",\"l\\xF8r\"],[\"s\\xF8ndag\",\"mandag\",\"tirsdag\",\"onsdag\",\"torsdag\",\"fredag\",\"l\\xF8rdag\"],[\"s\\xF8\",\"ma\",\"ti\",\"on\",\"to\",\"fr\",\"l\\xF8\"]],[[\"J\",\"F\",\"M\",\"A\",\"M\",\"J\",\"J\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"jan.\",\"feb.\",\"mar.\",\"apr.\",\"maj\",\"jun.\",\"jul.\",\"aug.\",\"sep.\",\"okt.\",\"nov.\",\"dec.\"],[\"januar\",\"februar\",\"marts\",\"april\",\"maj\",\"juni\",\"juli\",\"august\",\"september\",\"oktober\",\"november\",\"december\"]],e,[[\"fKr\",\"eKr\"],[\"f.Kr.\",\"e.Kr.\"],e],1,[6,0],[\"dd.MM.y\",\"d. MMM y\",\"d. MMMM y\",\"EEEE 'den' d. MMMM y\"],[\"HH.mm\",\"HH.mm.ss\",\"HH.mm.ss z\",\"HH.mm.ss zzzz\"],[\"{1} {0}\",e,\"{1} 'kl'. {0}\",e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\".\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"DKK\",\"kr.\",\"dansk krone\",{AUD:[\"AU$\",\"$\"],BYN:[e,\"Br.\"],DKK:[\"kr.\"],ISK:[e,\"kr.\"],JPY:[\"JP\\xA5\",\"\\xA5\"],NOK:[e,\"kr.\"],PHP:[e,\"\\u20B1\"],RON:[e,\"L\"],SEK:[e,\"kr.\"],THB:[\"\\u0E3F\"],TWD:[\"NT$\"],USD:[\"US$\",\"$\"]},\"ltr\",l,[[[\"midnat\",\"om morgenen\",\"om formiddagen\",\"om eftermiddagen\",\"om aftenen\",\"om natten\"],e,e],[[\"midnat\",\"morgen\",\"formiddag\",\"eftermiddag\",\"aften\",\"nat\"],e,e],[\"00:00\",[\"05:00\",\"10:00\"],[\"10:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"24:00\"],[\"00:00\",\"05:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return d===1&&p===0?1:5}i.ng.common.locales.en=[\"en\",[[\"a\",\"p\"],[\"AM\",\"PM\"],e],[[\"AM\",\"PM\"],e,e],[[\"S\",\"M\",\"T\",\"W\",\"T\",\"F\",\"S\"],[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],[\"Su\",\"Mo\",\"Tu\",\"We\",\"Th\",\"Fr\",\"Sa\"]],e,[[\"J\",\"F\",\"M\",\"A\",\"M\",\"J\",\"J\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"],[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"]],e,[[\"B\",\"A\"],[\"BC\",\"AD\"],[\"Before Christ\",\"Anno Domini\"]],0,[6,0],[\"M/d/yy\",\"MMM d, y\",\"MMMM d, y\",\"EEEE, MMMM d, y\"],[\"h:mm a\",\"h:mm:ss a\",\"h:mm:ss a z\",\"h:mm:ss a zzzz\"],[\"{1}, {0}\",e,\"{1} 'at' {0}\",e],[\".\",\",\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"\\xA4#,##0.00\",\"#E0\"],\"USD\",\"$\",\"US Dollar\",{},\"ltr\",l,[[[\"mi\",\"n\",\"in the morning\",\"in the afternoon\",\"in the evening\",\"at night\"],[\"midnight\",\"noon\",\"in the morning\",\"in the afternoon\",\"in the evening\",\"at night\"],e],[[\"midnight\",\"noon\",\"morning\",\"afternoon\",\"evening\",\"night\"],e,e],[\"00:00\",\"12:00\",[\"06:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"21:00\"],[\"21:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return p===0&&d%10===1&&d%100!==11?1:p===0&&d%10===Math.floor(d%10)&&d%10>=2&&d%10<=4&&!(d%100>=12&&d%100<=14)?3:p===0&&d%10===0||p===0&&d%10===Math.floor(d%10)&&d%10>=5&&d%10<=9||p===0&&d%100===Math.floor(d%100)&&d%100>=11&&d%100<=14?4:5}i.ng.common.locales.ru=[\"ru\",[[\"AM\",\"PM\"],e,e],e,[[\"\\u0412\",\"\\u041F\",\"\\u0412\",\"\\u0421\",\"\\u0427\",\"\\u041F\",\"\\u0421\"],[\"\\u0432\\u0441\",\"\\u043F\\u043D\",\"\\u0432\\u0442\",\"\\u0441\\u0440\",\"\\u0447\\u0442\",\"\\u043F\\u0442\",\"\\u0441\\u0431\"],[\"\\u0432\\u043E\\u0441\\u043A\\u0440\\u0435\\u0441\\u0435\\u043D\\u044C\\u0435\",\"\\u043F\\u043E\\u043D\\u0435\\u0434\\u0435\\u043B\\u044C\\u043D\\u0438\\u043A\",\"\\u0432\\u0442\\u043E\\u0440\\u043D\\u0438\\u043A\",\"\\u0441\\u0440\\u0435\\u0434\\u0430\",\"\\u0447\\u0435\\u0442\\u0432\\u0435\\u0440\\u0433\",\"\\u043F\\u044F\\u0442\\u043D\\u0438\\u0446\\u0430\",\"\\u0441\\u0443\\u0431\\u0431\\u043E\\u0442\\u0430\"],[\"\\u0432\\u0441\",\"\\u043F\\u043D\",\"\\u0432\\u0442\",\"\\u0441\\u0440\",\"\\u0447\\u0442\",\"\\u043F\\u0442\",\"\\u0441\\u0431\"]],e,[[\"\\u042F\",\"\\u0424\",\"\\u041C\",\"\\u0410\",\"\\u041C\",\"\\u0418\",\"\\u0418\",\"\\u0410\",\"\\u0421\",\"\\u041E\",\"\\u041D\",\"\\u0414\"],[\"\\u044F\\u043D\\u0432.\",\"\\u0444\\u0435\\u0432\\u0440.\",\"\\u043C\\u0430\\u0440.\",\"\\u0430\\u043F\\u0440.\",\"\\u043C\\u0430\\u044F\",\"\\u0438\\u044E\\u043D.\",\"\\u0438\\u044E\\u043B.\",\"\\u0430\\u0432\\u0433.\",\"\\u0441\\u0435\\u043D\\u0442.\",\"\\u043E\\u043A\\u0442.\",\"\\u043D\\u043E\\u044F\\u0431.\",\"\\u0434\\u0435\\u043A.\"],[\"\\u044F\\u043D\\u0432\\u0430\\u0440\\u044F\",\"\\u0444\\u0435\\u0432\\u0440\\u0430\\u043B\\u044F\",\"\\u043C\\u0430\\u0440\\u0442\\u0430\",\"\\u0430\\u043F\\u0440\\u0435\\u043B\\u044F\",\"\\u043C\\u0430\\u044F\",\"\\u0438\\u044E\\u043D\\u044F\",\"\\u0438\\u044E\\u043B\\u044F\",\"\\u0430\\u0432\\u0433\\u0443\\u0441\\u0442\\u0430\",\"\\u0441\\u0435\\u043D\\u0442\\u044F\\u0431\\u0440\\u044F\",\"\\u043E\\u043A\\u0442\\u044F\\u0431\\u0440\\u044F\",\"\\u043D\\u043E\\u044F\\u0431\\u0440\\u044F\",\"\\u0434\\u0435\\u043A\\u0430\\u0431\\u0440\\u044F\"]],[[\"\\u042F\",\"\\u0424\",\"\\u041C\",\"\\u0410\",\"\\u041C\",\"\\u0418\",\"\\u0418\",\"\\u0410\",\"\\u0421\",\"\\u041E\",\"\\u041D\",\"\\u0414\"],[\"\\u044F\\u043D\\u0432.\",\"\\u0444\\u0435\\u0432\\u0440.\",\"\\u043C\\u0430\\u0440\\u0442\",\"\\u0430\\u043F\\u0440.\",\"\\u043C\\u0430\\u0439\",\"\\u0438\\u044E\\u043D\\u044C\",\"\\u0438\\u044E\\u043B\\u044C\",\"\\u0430\\u0432\\u0433.\",\"\\u0441\\u0435\\u043D\\u0442.\",\"\\u043E\\u043A\\u0442.\",\"\\u043D\\u043E\\u044F\\u0431.\",\"\\u0434\\u0435\\u043A.\"],[\"\\u044F\\u043D\\u0432\\u0430\\u0440\\u044C\",\"\\u0444\\u0435\\u0432\\u0440\\u0430\\u043B\\u044C\",\"\\u043C\\u0430\\u0440\\u0442\",\"\\u0430\\u043F\\u0440\\u0435\\u043B\\u044C\",\"\\u043C\\u0430\\u0439\",\"\\u0438\\u044E\\u043D\\u044C\",\"\\u0438\\u044E\\u043B\\u044C\",\"\\u0430\\u0432\\u0433\\u0443\\u0441\\u0442\",\"\\u0441\\u0435\\u043D\\u0442\\u044F\\u0431\\u0440\\u044C\",\"\\u043E\\u043A\\u0442\\u044F\\u0431\\u0440\\u044C\",\"\\u043D\\u043E\\u044F\\u0431\\u0440\\u044C\",\"\\u0434\\u0435\\u043A\\u0430\\u0431\\u0440\\u044C\"]],[[\"\\u0434\\u043E \\u043D.\\u044D.\",\"\\u043D.\\u044D.\"],[\"\\u0434\\u043E \\u043D. \\u044D.\",\"\\u043D. \\u044D.\"],[\"\\u0434\\u043E \\u0420\\u043E\\u0436\\u0434\\u0435\\u0441\\u0442\\u0432\\u0430 \\u0425\\u0440\\u0438\\u0441\\u0442\\u043E\\u0432\\u0430\",\"\\u043E\\u0442 \\u0420\\u043E\\u0436\\u0434\\u0435\\u0441\\u0442\\u0432\\u0430 \\u0425\\u0440\\u0438\\u0441\\u0442\\u043E\\u0432\\u0430\"]],1,[6,0],[\"dd.MM.y\",\"d MMM y '\\u0433'.\",\"d MMMM y '\\u0433'.\",\"EEEE, d MMMM y '\\u0433'.\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1}, {0}\",e,e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"\\u043D\\u0435\\xA0\\u0447\\u0438\\u0441\\u043B\\u043E\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"RUB\",\"\\u20BD\",\"\\u0440\\u043E\\u0441\\u0441\\u0438\\u0439\\u0441\\u043A\\u0438\\u0439 \\u0440\\u0443\\u0431\\u043B\\u044C\",{BYN:[e,\"\\u0440.\"],GEL:[e,\"\\u10DA\"],PHP:[e,\"\\u20B1\"],RON:[e,\"L\"],RUB:[\"\\u20BD\"],RUR:[\"\\u0440.\"],THB:[\"\\u0E3F\"],TMT:[\"\\u0422\\u041C\\u0422\"],TWD:[\"NT$\"],UAH:[\"\\u20B4\"],XXX:[\"XXXX\"]},\"ltr\",l,[[[\"\\u043F\\u043E\\u043B\\u043D.\",\"\\u043F\\u043E\\u043B\\u0434.\",\"\\u0443\\u0442\\u0440\\u0430\",\"\\u0434\\u043D\\u044F\",\"\\u0432\\u0435\\u0447.\",\"\\u043D\\u043E\\u0447\\u0438\"],[\"\\u043F\\u043E\\u043B\\u043D.\",\"\\u043F\\u043E\\u043B\\u0434.\",\"\\u0443\\u0442\\u0440\\u0430\",\"\\u0434\\u043D\\u044F\",\"\\u0432\\u0435\\u0447\\u0435\\u0440\\u0430\",\"\\u043D\\u043E\\u0447\\u0438\"],[\"\\u043F\\u043E\\u043B\\u043D\\u043E\\u0447\\u044C\",\"\\u043F\\u043E\\u043B\\u0434\\u0435\\u043D\\u044C\",\"\\u0443\\u0442\\u0440\\u0430\",\"\\u0434\\u043D\\u044F\",\"\\u0432\\u0435\\u0447\\u0435\\u0440\\u0430\",\"\\u043D\\u043E\\u0447\\u0438\"]],[[\"\\u043F\\u043E\\u043B\\u043D.\",\"\\u043F\\u043E\\u043B\\u0434.\",\"\\u0443\\u0442\\u0440\\u043E\",\"\\u0434\\u0435\\u043D\\u044C\",\"\\u0432\\u0435\\u0447.\",\"\\u043D\\u043E\\u0447\\u044C\"],e,[\"\\u043F\\u043E\\u043B\\u043D\\u043E\\u0447\\u044C\",\"\\u043F\\u043E\\u043B\\u0434\\u0435\\u043D\\u044C\",\"\\u0443\\u0442\\u0440\\u043E\",\"\\u0434\\u0435\\u043D\\u044C\",\"\\u0432\\u0435\\u0447\\u0435\\u0440\",\"\\u043D\\u043E\\u0447\\u044C\"]],[\"00:00\",\"12:00\",[\"04:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"22:00\"],[\"22:00\",\"04:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return d===1&&p===0?1:5}i.ng.common.locales.de=[\"de\",[[\"AM\",\"PM\"],e,e],e,[[\"S\",\"M\",\"D\",\"M\",\"D\",\"F\",\"S\"],[\"So.\",\"Mo.\",\"Di.\",\"Mi.\",\"Do.\",\"Fr.\",\"Sa.\"],[\"Sonntag\",\"Montag\",\"Dienstag\",\"Mittwoch\",\"Donnerstag\",\"Freitag\",\"Samstag\"],[\"So.\",\"Mo.\",\"Di.\",\"Mi.\",\"Do.\",\"Fr.\",\"Sa.\"]],[[\"S\",\"M\",\"D\",\"M\",\"D\",\"F\",\"S\"],[\"So\",\"Mo\",\"Di\",\"Mi\",\"Do\",\"Fr\",\"Sa\"],[\"Sonntag\",\"Montag\",\"Dienstag\",\"Mittwoch\",\"Donnerstag\",\"Freitag\",\"Samstag\"],[\"So.\",\"Mo.\",\"Di.\",\"Mi.\",\"Do.\",\"Fr.\",\"Sa.\"]],[[\"J\",\"F\",\"M\",\"A\",\"M\",\"J\",\"J\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"Jan.\",\"Feb.\",\"M\\xE4rz\",\"Apr.\",\"Mai\",\"Juni\",\"Juli\",\"Aug.\",\"Sept.\",\"Okt.\",\"Nov.\",\"Dez.\"],[\"Januar\",\"Februar\",\"M\\xE4rz\",\"April\",\"Mai\",\"Juni\",\"Juli\",\"August\",\"September\",\"Oktober\",\"November\",\"Dezember\"]],[[\"J\",\"F\",\"M\",\"A\",\"M\",\"J\",\"J\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"Jan\",\"Feb\",\"M\\xE4r\",\"Apr\",\"Mai\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Okt\",\"Nov\",\"Dez\"],[\"Januar\",\"Februar\",\"M\\xE4rz\",\"April\",\"Mai\",\"Juni\",\"Juli\",\"August\",\"September\",\"Oktober\",\"November\",\"Dezember\"]],[[\"v. Chr.\",\"n. Chr.\"],e,e],1,[6,0],[\"dd.MM.yy\",\"dd.MM.y\",\"d. MMMM y\",\"EEEE, d. MMMM y\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1}, {0}\",e,\"{1} 'um' {0}\",e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xB7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"Euro\",{ATS:[\"\\xF6S\"],AUD:[\"AU$\",\"$\"],BGM:[\"BGK\"],BGO:[\"BGJ\"],BYN:[e,\"\\u0440.\"],CUC:[e,\"Cub$\"],DEM:[\"DM\"],FKP:[e,\"Fl\\xA3\"],GHS:[e,\"\\u20B5\"],GNF:[e,\"F.G.\"],KMF:[e,\"FC\"],PHP:[e,\"\\u20B1\"],RON:[e,\"L\"],RUR:[e,\"\\u0440.\"],RWF:[e,\"F.Rw\"],SYP:[],THB:[\"\\u0E3F\"],TWD:[\"NT$\"],XXX:[],ZMW:[e,\"K\"]},\"ltr\",l,[[[\"Mitternacht\",\"morgens\",\"vorm.\",\"mittags\",\"nachm.\",\"abends\",\"nachts\"],e,[\"Mitternacht\",\"morgens\",\"vormittags\",\"mittags\",\"nachmittags\",\"abends\",\"nachts\"]],[[\"Mitternacht\",\"Morgen\",\"Vorm.\",\"Mittag\",\"Nachm.\",\"Abend\",\"Nacht\"],e,[\"Mitternacht\",\"Morgen\",\"Vormittag\",\"Mittag\",\"Nachmittag\",\"Abend\",\"Nacht\"]],[\"00:00\",[\"05:00\",\"10:00\"],[\"10:00\",\"12:00\"],[\"12:00\",\"13:00\"],[\"13:00\",\"18:00\"],[\"18:00\",\"24:00\"],[\"00:00\",\"05:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){return a===1?1:5}i.ng.common.locales.el=[\"el\",[[\"\\u03C0\\u03BC\",\"\\u03BC\\u03BC\"],[\"\\u03C0.\\u03BC.\",\"\\u03BC.\\u03BC.\"],e],e,[[\"\\u039A\",\"\\u0394\",\"\\u03A4\",\"\\u03A4\",\"\\u03A0\",\"\\u03A0\",\"\\u03A3\"],[\"\\u039A\\u03C5\\u03C1\",\"\\u0394\\u03B5\\u03C5\",\"\\u03A4\\u03C1\\u03AF\",\"\\u03A4\\u03B5\\u03C4\",\"\\u03A0\\u03AD\\u03BC\",\"\\u03A0\\u03B1\\u03C1\",\"\\u03A3\\u03AC\\u03B2\"],[\"\\u039A\\u03C5\\u03C1\\u03B9\\u03B1\\u03BA\\u03AE\",\"\\u0394\\u03B5\\u03C5\\u03C4\\u03AD\\u03C1\\u03B1\",\"\\u03A4\\u03C1\\u03AF\\u03C4\\u03B7\",\"\\u03A4\\u03B5\\u03C4\\u03AC\\u03C1\\u03C4\\u03B7\",\"\\u03A0\\u03AD\\u03BC\\u03C0\\u03C4\\u03B7\",\"\\u03A0\\u03B1\\u03C1\\u03B1\\u03C3\\u03BA\\u03B5\\u03C5\\u03AE\",\"\\u03A3\\u03AC\\u03B2\\u03B2\\u03B1\\u03C4\\u03BF\"],[\"\\u039A\\u03C5\",\"\\u0394\\u03B5\",\"\\u03A4\\u03C1\",\"\\u03A4\\u03B5\",\"\\u03A0\\u03AD\",\"\\u03A0\\u03B1\",\"\\u03A3\\u03AC\"]],e,[[\"\\u0399\",\"\\u03A6\",\"\\u039C\",\"\\u0391\",\"\\u039C\",\"\\u0399\",\"\\u0399\",\"\\u0391\",\"\\u03A3\",\"\\u039F\",\"\\u039D\",\"\\u0394\"],[\"\\u0399\\u03B1\\u03BD\",\"\\u03A6\\u03B5\\u03B2\",\"\\u039C\\u03B1\\u03C1\",\"\\u0391\\u03C0\\u03C1\",\"\\u039C\\u03B1\\u0390\",\"\\u0399\\u03BF\\u03C5\\u03BD\",\"\\u0399\\u03BF\\u03C5\\u03BB\",\"\\u0391\\u03C5\\u03B3\",\"\\u03A3\\u03B5\\u03C0\",\"\\u039F\\u03BA\\u03C4\",\"\\u039D\\u03BF\\u03B5\",\"\\u0394\\u03B5\\u03BA\"],[\"\\u0399\\u03B1\\u03BD\\u03BF\\u03C5\\u03B1\\u03C1\\u03AF\\u03BF\\u03C5\",\"\\u03A6\\u03B5\\u03B2\\u03C1\\u03BF\\u03C5\\u03B1\\u03C1\\u03AF\\u03BF\\u03C5\",\"\\u039C\\u03B1\\u03C1\\u03C4\\u03AF\\u03BF\\u03C5\",\"\\u0391\\u03C0\\u03C1\\u03B9\\u03BB\\u03AF\\u03BF\\u03C5\",\"\\u039C\\u03B1\\u0390\\u03BF\\u03C5\",\"\\u0399\\u03BF\\u03C5\\u03BD\\u03AF\\u03BF\\u03C5\",\"\\u0399\\u03BF\\u03C5\\u03BB\\u03AF\\u03BF\\u03C5\",\"\\u0391\\u03C5\\u03B3\\u03BF\\u03CD\\u03C3\\u03C4\\u03BF\\u03C5\",\"\\u03A3\\u03B5\\u03C0\\u03C4\\u03B5\\u03BC\\u03B2\\u03C1\\u03AF\\u03BF\\u03C5\",\"\\u039F\\u03BA\\u03C4\\u03C9\\u03B2\\u03C1\\u03AF\\u03BF\\u03C5\",\"\\u039D\\u03BF\\u03B5\\u03BC\\u03B2\\u03C1\\u03AF\\u03BF\\u03C5\",\"\\u0394\\u03B5\\u03BA\\u03B5\\u03BC\\u03B2\\u03C1\\u03AF\\u03BF\\u03C5\"]],[[\"\\u0399\",\"\\u03A6\",\"\\u039C\",\"\\u0391\",\"\\u039C\",\"\\u0399\",\"\\u0399\",\"\\u0391\",\"\\u03A3\",\"\\u039F\",\"\\u039D\",\"\\u0394\"],[\"\\u0399\\u03B1\\u03BD\",\"\\u03A6\\u03B5\\u03B2\",\"\\u039C\\u03AC\\u03C1\",\"\\u0391\\u03C0\\u03C1\",\"\\u039C\\u03AC\\u03B9\",\"\\u0399\\u03BF\\u03CD\\u03BD\",\"\\u0399\\u03BF\\u03CD\\u03BB\",\"\\u0391\\u03CD\\u03B3\",\"\\u03A3\\u03B5\\u03C0\",\"\\u039F\\u03BA\\u03C4\",\"\\u039D\\u03BF\\u03AD\",\"\\u0394\\u03B5\\u03BA\"],[\"\\u0399\\u03B1\\u03BD\\u03BF\\u03C5\\u03AC\\u03C1\\u03B9\\u03BF\\u03C2\",\"\\u03A6\\u03B5\\u03B2\\u03C1\\u03BF\\u03C5\\u03AC\\u03C1\\u03B9\\u03BF\\u03C2\",\"\\u039C\\u03AC\\u03C1\\u03C4\\u03B9\\u03BF\\u03C2\",\"\\u0391\\u03C0\\u03C1\\u03AF\\u03BB\\u03B9\\u03BF\\u03C2\",\"\\u039C\\u03AC\\u03B9\\u03BF\\u03C2\",\"\\u0399\\u03BF\\u03CD\\u03BD\\u03B9\\u03BF\\u03C2\",\"\\u0399\\u03BF\\u03CD\\u03BB\\u03B9\\u03BF\\u03C2\",\"\\u0391\\u03CD\\u03B3\\u03BF\\u03C5\\u03C3\\u03C4\\u03BF\\u03C2\",\"\\u03A3\\u03B5\\u03C0\\u03C4\\u03AD\\u03BC\\u03B2\\u03C1\\u03B9\\u03BF\\u03C2\",\"\\u039F\\u03BA\\u03C4\\u03CE\\u03B2\\u03C1\\u03B9\\u03BF\\u03C2\",\"\\u039D\\u03BF\\u03AD\\u03BC\\u03B2\\u03C1\\u03B9\\u03BF\\u03C2\",\"\\u0394\\u03B5\\u03BA\\u03AD\\u03BC\\u03B2\\u03C1\\u03B9\\u03BF\\u03C2\"]],[[\"\\u03C0.\\u03A7.\",\"\\u03BC.\\u03A7.\"],e,[\"\\u03C0\\u03C1\\u03BF \\u03A7\\u03C1\\u03B9\\u03C3\\u03C4\\u03BF\\u03CD\",\"\\u03BC\\u03B5\\u03C4\\u03AC \\u03A7\\u03C1\\u03B9\\u03C3\\u03C4\\u03CC\\u03BD\"]],1,[6,0],[\"d/M/yy\",\"d MMM y\",\"d MMMM y\",\"EEEE d MMMM y\"],[\"h:mm a\",\"h:mm:ss a\",\"h:mm:ss a z\",\"h:mm:ss a zzzz\"],[\"{1}, {0}\",e,\"{1} - {0}\",e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"e\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"\\u0395\\u03C5\\u03C1\\u03CE\",{BYN:[e,\"\\u0440.\"],GRD:[\"\\u0394\\u03C1\\u03C7\"],JPY:[\"JP\\xA5\",\"\\xA5\"],PHP:[e,\"\\u20B1\"],THB:[\"\\u0E3F\"]},\"ltr\",l,[[[\"\\u03C0\\u03C1\\u03C9\\u03AF\",\"\\u03BC\\u03B5\\u03C3\\u03B7\\u03BC.\",\"\\u03B1\\u03C0\\u03CC\\u03B3.\",\"\\u03B2\\u03C1\\u03AC\\u03B4\\u03C5\"],e,[\"\\u03C4\\u03BF \\u03C0\\u03C1\\u03C9\\u03AF\",\"\\u03C4\\u03BF \\u03BC\\u03B5\\u03C3\\u03B7\\u03BC\\u03AD\\u03C1\\u03B9\",\"\\u03C4\\u03BF \\u03B1\\u03C0\\u03CC\\u03B3\\u03B5\\u03C5\\u03BC\\u03B1\",\"\\u03C4\\u03BF \\u03B2\\u03C1\\u03AC\\u03B4\\u03C5\"]],[[\"\\u03C0\\u03C1\\u03C9\\u03AF\",\"\\u03BC\\u03B5\\u03C3\\u03B7\\u03BC.\",\"\\u03B1\\u03C0\\u03CC\\u03B3.\",\"\\u03B2\\u03C1\\u03AC\\u03B4\\u03C5\"],e,[\"\\u03C0\\u03C1\\u03C9\\u03AF\",\"\\u03BC\\u03B5\\u03C3\\u03B7\\u03BC\\u03AD\\u03C1\\u03B9\",\"\\u03B1\\u03C0\\u03CC\\u03B3\\u03B5\\u03C5\\u03BC\\u03B1\",\"\\u03B2\\u03C1\\u03AC\\u03B4\\u03C5\"]],[[\"04:00\",\"12:00\"],[\"12:00\",\"17:00\"],[\"17:00\",\"20:00\"],[\"20:00\",\"04:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length,f=parseInt(a.toString().replace(/^[^e]*(e([-+]?\\d+))?/,\"$2\"))||0;return u===1?1:f===0&&d!==0&&d%1e6===0&&p===0||!(f>=0&&f<=5)?4:5}i.ng.common.locales.es=[\"es\",[[\"a.\\xA0m.\",\"p.\\xA0m.\"],e,e],e,[[\"D\",\"L\",\"M\",\"X\",\"J\",\"V\",\"S\"],[\"dom\",\"lun\",\"mar\",\"mi\\xE9\",\"jue\",\"vie\",\"s\\xE1b\"],[\"domingo\",\"lunes\",\"martes\",\"mi\\xE9rcoles\",\"jueves\",\"viernes\",\"s\\xE1bado\"],[\"DO\",\"LU\",\"MA\",\"MI\",\"JU\",\"VI\",\"SA\"]],e,[[\"E\",\"F\",\"M\",\"A\",\"M\",\"J\",\"J\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"ene\",\"feb\",\"mar\",\"abr\",\"may\",\"jun\",\"jul\",\"ago\",\"sept\",\"oct\",\"nov\",\"dic\"],[\"enero\",\"febrero\",\"marzo\",\"abril\",\"mayo\",\"junio\",\"julio\",\"agosto\",\"septiembre\",\"octubre\",\"noviembre\",\"diciembre\"]],e,[[\"a. C.\",\"d. C.\"],e,[\"antes de Cristo\",\"despu\\xE9s de Cristo\"]],1,[6,0],[\"d/M/yy\",\"d MMM y\",\"d 'de' MMMM 'de' y\",\"EEEE, d 'de' MMMM 'de' y\"],[\"H:mm\",\"H:mm:ss\",\"H:mm:ss z\",\"H:mm:ss (zzzz)\"],[\"{1}, {0}\",e,e,e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"euro\",{AUD:[e,\"$\"],BRL:[e,\"R$\"],BYN:[e,\"\\u0440.\"],CAD:[e,\"$\"],CNY:[e,\"\\xA5\"],EGP:[],ESP:[\"\\u20A7\"],GBP:[e,\"\\xA3\"],HKD:[e,\"$\"],ILS:[e,\"\\u20AA\"],INR:[e,\"\\u20B9\"],JPY:[e,\"\\xA5\"],KRW:[e,\"\\u20A9\"],MXN:[e,\"$\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],RON:[e,\"L\"],THB:[\"\\u0E3F\"],TWD:[e,\"NT$\"],USD:[\"US$\",\"$\"],XAF:[],XCD:[e,\"$\"],XOF:[]},\"ltr\",l,[[[\"del mediod\\xEDa\",\"de la madrugada\",\"de la ma\\xF1ana\",\"de la tarde\",\"de la noche\"],e,e],[[\"mediod\\xEDa\",\"madrugada\",\"ma\\xF1ana\",\"tarde\",\"noche\"],e,e],[\"12:00\",[\"00:00\",\"06:00\"],[\"06:00\",\"12:00\"],[\"12:00\",\"20:00\"],[\"20:00\",\"24:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return d===1&&p===0?1:5}i.ng.common.locales.et=[\"et\",[[\"AM\",\"PM\"],e,e],e,[[\"P\",\"E\",\"T\",\"K\",\"N\",\"R\",\"L\"],e,[\"P\\xFChap\\xE4ev\",\"Esmasp\\xE4ev\",\"Teisip\\xE4ev\",\"Kolmap\\xE4ev\",\"Neljap\\xE4ev\",\"Reede\",\"Laup\\xE4ev\"],[\"P\",\"E\",\"T\",\"K\",\"N\",\"R\",\"L\"]],e,[[\"J\",\"V\",\"M\",\"A\",\"M\",\"J\",\"J\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"jaan\",\"veebr\",\"m\\xE4rts\",\"apr\",\"mai\",\"juuni\",\"juuli\",\"aug\",\"sept\",\"okt\",\"nov\",\"dets\"],[\"jaanuar\",\"veebruar\",\"m\\xE4rts\",\"aprill\",\"mai\",\"juuni\",\"juuli\",\"august\",\"september\",\"oktoober\",\"november\",\"detsember\"]],e,[[\"eKr\",\"pKr\"],e,[\"enne Kristust\",\"p\\xE4rast Kristust\"]],1,[6,0],[\"dd.MM.yy\",\"d. MMM y\",\"d. MMMM y\",\"EEEE, d. MMMM y\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1} {0}\",e,e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"\\u2212\",\"\\xD710^\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"euro\",{AUD:[\"AU$\",\"$\"],EEK:[\"kr\"],PHP:[e,\"\\u20B1\"],THB:[\"\\u0E3F\"],TWD:[\"NT$\"]},\"ltr\",l,[[[\"kesk\\xF6\\xF6l\",\"keskp\\xE4eval\",\"hommikul\",\"p\\xE4rastl\\xF5unal\",\"\\xF5htul\",\"\\xF6\\xF6sel\"],e,e],[[\"kesk\\xF6\\xF6\",\"keskp\\xE4ev\",\"hommik\",\"p\\xE4rastl\\xF5una\",\"\\xF5htu\",\"\\xF6\\xF6\"],e,e],[\"00:00\",\"12:00\",[\"05:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"23:00\"],[\"23:00\",\"05:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return d===1&&p===0?1:5}i.ng.common.locales.fi=[\"fi\",[[\"ap.\",\"ip.\"],e,e],e,[[\"S\",\"M\",\"T\",\"K\",\"T\",\"P\",\"L\"],[\"su\",\"ma\",\"ti\",\"ke\",\"to\",\"pe\",\"la\"],[\"sunnuntaina\",\"maanantaina\",\"tiistaina\",\"keskiviikkona\",\"torstaina\",\"perjantaina\",\"lauantaina\"],[\"su\",\"ma\",\"ti\",\"ke\",\"to\",\"pe\",\"la\"]],[[\"S\",\"M\",\"T\",\"K\",\"T\",\"P\",\"L\"],[\"su\",\"ma\",\"ti\",\"ke\",\"to\",\"pe\",\"la\"],[\"sunnuntai\",\"maanantai\",\"tiistai\",\"keskiviikko\",\"torstai\",\"perjantai\",\"lauantai\"],[\"su\",\"ma\",\"ti\",\"ke\",\"to\",\"pe\",\"la\"]],[[\"T\",\"H\",\"M\",\"H\",\"T\",\"K\",\"H\",\"E\",\"S\",\"L\",\"M\",\"J\"],[\"tammik.\",\"helmik.\",\"maalisk.\",\"huhtik.\",\"toukok.\",\"kes\\xE4k.\",\"hein\\xE4k.\",\"elok.\",\"syysk.\",\"lokak.\",\"marrask.\",\"jouluk.\"],[\"tammikuuta\",\"helmikuuta\",\"maaliskuuta\",\"huhtikuuta\",\"toukokuuta\",\"kes\\xE4kuuta\",\"hein\\xE4kuuta\",\"elokuuta\",\"syyskuuta\",\"lokakuuta\",\"marraskuuta\",\"joulukuuta\"]],[[\"T\",\"H\",\"M\",\"H\",\"T\",\"K\",\"H\",\"E\",\"S\",\"L\",\"M\",\"J\"],[\"tammi\",\"helmi\",\"maalis\",\"huhti\",\"touko\",\"kes\\xE4\",\"hein\\xE4\",\"elo\",\"syys\",\"loka\",\"marras\",\"joulu\"],[\"tammikuu\",\"helmikuu\",\"maaliskuu\",\"huhtikuu\",\"toukokuu\",\"kes\\xE4kuu\",\"hein\\xE4kuu\",\"elokuu\",\"syyskuu\",\"lokakuu\",\"marraskuu\",\"joulukuu\"]],[[\"eKr\",\"jKr\"],[\"eKr.\",\"jKr.\"],[\"ennen Kristuksen syntym\\xE4\\xE4\",\"j\\xE4lkeen Kristuksen syntym\\xE4n\"]],1,[6,0],[\"d.M.y\",e,\"d. MMMM y\",\"cccc d. MMMM y\"],[\"H.mm\",\"H.mm.ss\",\"H.mm.ss z\",\"H.mm.ss zzzz\"],[\"{1} {0}\",\"{1} 'klo' {0}\",e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"\\u2212\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"ep\\xE4luku\",\".\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"euro\",{AOA:[],ARS:[],AUD:[],BAM:[],BBD:[],BDT:[],BMD:[],BND:[],BOB:[],BRL:[],BSD:[],BWP:[],BZD:[],CAD:[],CLP:[],CNY:[],COP:[],CRC:[],CUC:[],CUP:[],CZK:[],DKK:[],DOP:[],EGP:[],ESP:[],FIM:[\"mk\"],FJD:[],FKP:[],GEL:[],GIP:[],GNF:[],GTQ:[],GYD:[],HKD:[],HNL:[],HRK:[],HUF:[],IDR:[],ILS:[],INR:[],ISK:[],JMD:[],KHR:[],KMF:[],KPW:[],KRW:[],KYD:[],KZT:[],LAK:[],LBP:[],LKR:[],LRD:[],LTL:[],LVL:[],MGA:[],MMK:[],MNT:[],MUR:[],MXN:[],MYR:[],NAD:[],NGN:[],NIO:[],NOK:[],NPR:[],NZD:[],PHP:[],PKR:[],PLN:[],PYG:[],RON:[],RWF:[],SBD:[],SEK:[],SGD:[],SHP:[],SRD:[],SSP:[],STN:[e,\"STD\"],SYP:[],THB:[],TOP:[],TRY:[],TTD:[],TWD:[],UAH:[],UYU:[],VEF:[],VND:[],XCD:[],XPF:[],XXX:[],ZAR:[],ZMW:[]},\"ltr\",l,[[[\"ky.\",\"kp.\",\"aamulla\",\"ap.\",\"ip.\",\"illalla\",\"y\\xF6ll\\xE4\"],[\"keskiy\\xF6ll\\xE4\",\"keskip.\",\"aamulla\",\"aamup.\",\"iltap.\",\"illalla\",\"y\\xF6ll\\xE4\"],[\"keskiy\\xF6ll\\xE4\",\"keskip\\xE4iv\\xE4ll\\xE4\",\"aamulla\",\"aamup\\xE4iv\\xE4ll\\xE4\",\"iltap\\xE4iv\\xE4ll\\xE4\",\"illalla\",\"y\\xF6ll\\xE4\"]],[[\"ky.\",\"kp.\",\"aamu\",\"ap.\",\"ip.\",\"ilta\",\"y\\xF6\"],[\"keskiy\\xF6\",\"keskip.\",\"aamu\",\"aamup.\",\"iltap.\",\"ilta\",\"y\\xF6\"],[\"keskiy\\xF6\",\"keskip\\xE4iv\\xE4\",\"aamu\",\"aamup\\xE4iv\\xE4\",\"iltap\\xE4iv\\xE4\",\"ilta\",\"y\\xF6\"]],[\"00:00\",\"12:00\",[\"05:00\",\"10:00\"],[\"10:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"23:00\"],[\"23:00\",\"05:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length,f=parseInt(a.toString().replace(/^[^e]*(e([-+]?\\d+))?/,\"$2\"))||0;return d===0||d===1?1:f===0&&d!==0&&d%1e6===0&&p===0||!(f>=0&&f<=5)?4:5}i.ng.common.locales.fr=[\"fr\",[[\"AM\",\"PM\"],e,e],e,[[\"D\",\"L\",\"M\",\"M\",\"J\",\"V\",\"S\"],[\"dim.\",\"lun.\",\"mar.\",\"mer.\",\"jeu.\",\"ven.\",\"sam.\"],[\"dimanche\",\"lundi\",\"mardi\",\"mercredi\",\"jeudi\",\"vendredi\",\"samedi\"],[\"di\",\"lu\",\"ma\",\"me\",\"je\",\"ve\",\"sa\"]],e,[[\"J\",\"F\",\"M\",\"A\",\"M\",\"J\",\"J\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"janv.\",\"f\\xE9vr.\",\"mars\",\"avr.\",\"mai\",\"juin\",\"juil.\",\"ao\\xFBt\",\"sept.\",\"oct.\",\"nov.\",\"d\\xE9c.\"],[\"janvier\",\"f\\xE9vrier\",\"mars\",\"avril\",\"mai\",\"juin\",\"juillet\",\"ao\\xFBt\",\"septembre\",\"octobre\",\"novembre\",\"d\\xE9cembre\"]],e,[[\"av. J.-C.\",\"ap. J.-C.\"],e,[\"avant J\\xE9sus-Christ\",\"apr\\xE8s J\\xE9sus-Christ\"]],1,[6,0],[\"dd/MM/y\",\"d MMM y\",\"d MMMM y\",\"EEEE d MMMM y\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1} {0}\",\"{1}, {0}\",\"{1} '\\xE0' {0}\",e],[\",\",\"\\u202F\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"euro\",{ARS:[\"$AR\",\"$\"],AUD:[\"$AU\",\"$\"],BEF:[\"FB\"],BMD:[\"$BM\",\"$\"],BND:[\"$BN\",\"$\"],BYN:[e,\"\\u0440.\"],BZD:[\"$BZ\",\"$\"],CAD:[\"$CA\",\"$\"],CLP:[\"$CL\",\"$\"],CNY:[e,\"\\xA5\"],COP:[\"$CO\",\"$\"],CYP:[\"\\xA3CY\"],EGP:[e,\"\\xA3E\"],FJD:[\"$FJ\",\"$\"],FKP:[\"\\xA3FK\",\"\\xA3\"],FRF:[\"F\"],GBP:[\"\\xA3GB\",\"\\xA3\"],GIP:[\"\\xA3GI\",\"\\xA3\"],HKD:[e,\"$\"],IEP:[\"\\xA3IE\"],ILP:[\"\\xA3IL\"],ITL:[\"\\u20A4IT\"],JPY:[e,\"\\xA5\"],KMF:[e,\"FC\"],LBP:[\"\\xA3LB\",\"\\xA3L\"],MTP:[\"\\xA3MT\"],MXN:[\"$MX\",\"$\"],NAD:[\"$NA\",\"$\"],NIO:[e,\"$C\"],NZD:[\"$NZ\",\"$\"],PHP:[e,\"\\u20B1\"],RHD:[\"$RH\"],RON:[e,\"L\"],RWF:[e,\"FR\"],SBD:[\"$SB\",\"$\"],SGD:[\"$SG\",\"$\"],SRD:[\"$SR\",\"$\"],TOP:[e,\"$T\"],TTD:[\"$TT\",\"$\"],TWD:[e,\"NT$\"],USD:[\"$US\",\"$\"],UYU:[\"$UY\",\"$\"],WST:[\"$WS\"],XCD:[e,\"$\"],XPF:[\"FCFP\"],ZMW:[e,\"Kw\"]},\"ltr\",l,[[[\"minuit\",\"midi\",\"mat.\",\"ap.m.\",\"soir\",\"nuit\"],e,[\"minuit\",\"midi\",\"du matin\",\"de l\\u2019apr\\xE8s-midi\",\"du soir\",\"du matin\"]],[[\"minuit\",\"midi\",\"mat.\",\"ap.m.\",\"soir\",\"nuit\"],e,[\"minuit\",\"midi\",\"matin\",\"apr\\xE8s-midi\",\"soir\",\"nuit\"]],[\"00:00\",\"12:00\",[\"04:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"24:00\"],[\"00:00\",\"04:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return d===1&&p===0?1:d===2&&p===0?2:p===0&&!(u>=0&&u<=10)&&u%10===0?4:5}i.ng.common.locales.he=[\"he\",[[\"\\u05DC\\u05E4\\u05E0\\u05D4\\u05F4\\u05E6\",\"\\u05D0\\u05D7\\u05D4\\u05F4\\u05E6\"],e,e],[[\"\\u05DC\\u05E4\\u05E0\\u05D4\\u05F4\\u05E6\",\"\\u05D0\\u05D7\\u05D4\\u05F4\\u05E6\"],[\"AM\",\"PM\"],e],[[\"\\u05D0\\u05F3\",\"\\u05D1\\u05F3\",\"\\u05D2\\u05F3\",\"\\u05D3\\u05F3\",\"\\u05D4\\u05F3\",\"\\u05D5\\u05F3\",\"\\u05E9\\u05F3\"],[\"\\u05D9\\u05D5\\u05DD \\u05D0\\u05F3\",\"\\u05D9\\u05D5\\u05DD \\u05D1\\u05F3\",\"\\u05D9\\u05D5\\u05DD \\u05D2\\u05F3\",\"\\u05D9\\u05D5\\u05DD \\u05D3\\u05F3\",\"\\u05D9\\u05D5\\u05DD \\u05D4\\u05F3\",\"\\u05D9\\u05D5\\u05DD \\u05D5\\u05F3\",\"\\u05E9\\u05D1\\u05EA\"],[\"\\u05D9\\u05D5\\u05DD \\u05E8\\u05D0\\u05E9\\u05D5\\u05DF\",\"\\u05D9\\u05D5\\u05DD \\u05E9\\u05E0\\u05D9\",\"\\u05D9\\u05D5\\u05DD \\u05E9\\u05DC\\u05D9\\u05E9\\u05D9\",\"\\u05D9\\u05D5\\u05DD \\u05E8\\u05D1\\u05D9\\u05E2\\u05D9\",\"\\u05D9\\u05D5\\u05DD \\u05D7\\u05DE\\u05D9\\u05E9\\u05D9\",\"\\u05D9\\u05D5\\u05DD \\u05E9\\u05D9\\u05E9\\u05D9\",\"\\u05D9\\u05D5\\u05DD \\u05E9\\u05D1\\u05EA\"],[\"\\u05D0\\u05F3\",\"\\u05D1\\u05F3\",\"\\u05D2\\u05F3\",\"\\u05D3\\u05F3\",\"\\u05D4\\u05F3\",\"\\u05D5\\u05F3\",\"\\u05E9\\u05F3\"]],e,[[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\"],[\"\\u05D9\\u05E0\\u05D5\\u05F3\",\"\\u05E4\\u05D1\\u05E8\\u05F3\",\"\\u05DE\\u05E8\\u05E5\",\"\\u05D0\\u05E4\\u05E8\\u05F3\",\"\\u05DE\\u05D0\\u05D9\",\"\\u05D9\\u05D5\\u05E0\\u05D9\",\"\\u05D9\\u05D5\\u05DC\\u05D9\",\"\\u05D0\\u05D5\\u05D2\\u05F3\",\"\\u05E1\\u05E4\\u05D8\\u05F3\",\"\\u05D0\\u05D5\\u05E7\\u05F3\",\"\\u05E0\\u05D5\\u05D1\\u05F3\",\"\\u05D3\\u05E6\\u05DE\\u05F3\"],[\"\\u05D9\\u05E0\\u05D5\\u05D0\\u05E8\",\"\\u05E4\\u05D1\\u05E8\\u05D5\\u05D0\\u05E8\",\"\\u05DE\\u05E8\\u05E5\",\"\\u05D0\\u05E4\\u05E8\\u05D9\\u05DC\",\"\\u05DE\\u05D0\\u05D9\",\"\\u05D9\\u05D5\\u05E0\\u05D9\",\"\\u05D9\\u05D5\\u05DC\\u05D9\",\"\\u05D0\\u05D5\\u05D2\\u05D5\\u05E1\\u05D8\",\"\\u05E1\\u05E4\\u05D8\\u05DE\\u05D1\\u05E8\",\"\\u05D0\\u05D5\\u05E7\\u05D8\\u05D5\\u05D1\\u05E8\",\"\\u05E0\\u05D5\\u05D1\\u05DE\\u05D1\\u05E8\",\"\\u05D3\\u05E6\\u05DE\\u05D1\\u05E8\"]],e,[[\"\\u05DC\\u05E4\\u05E0\\u05D9\",\"\\u05D0\\u05D7\\u05E8\\u05D9\\u05D9\"],[\"\\u05DC\\u05E4\\u05E0\\u05D4\\u05F4\\u05E1\",\"\\u05DC\\u05E1\\u05E4\\u05D9\\u05E8\\u05D4\"],[\"\\u05DC\\u05E4\\u05E0\\u05D9 \\u05D4\\u05E1\\u05E4\\u05D9\\u05E8\\u05D4\",\"\\u05DC\\u05E1\\u05E4\\u05D9\\u05E8\\u05D4\"]],0,[5,6],[\"d.M.y\",\"d \\u05D1MMM y\",\"d \\u05D1MMMM y\",\"EEEE, d \\u05D1MMMM y\"],[\"H:mm\",\"H:mm:ss\",\"H:mm:ss z\",\"H:mm:ss zzzz\"],[\"{1}, {0}\",e,\"{1} \\u05D1\\u05E9\\u05E2\\u05D4 {0}\",e],[\".\",\",\",\";\",\"%\",\"\\u200E+\",\"\\u200E-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"\\u200F#,##0.00\\xA0\\xA4;\\u200F-#,##0.00\\xA0\\xA4\",\"#E0\"],\"ILS\",\"\\u20AA\",\"\\u05E9\\u05E7\\u05DC \\u05D7\\u05D3\\u05E9\",{BYN:[e,\"\\u0440\"],CNY:[\"\\u200ECN\\xA5\\u200E\",\"\\xA5\"],ILP:[\"\\u05DC\\u05F4\\u05D9\"],PHP:[e,\"\\u20B1\"],THB:[\"\\u0E3F\"],TWD:[\"NT$\"]},\"rtl\",l,[[[\"\\u05D7\\u05E6\\u05D5\\u05EA\",\"\\u05D1\\u05D1\\u05D5\\u05E7\\u05E8\",\"\\u05D1\\u05E6\\u05D4\\u05E8\\u05D9\\u05D9\\u05DD\",\"\\u05D0\\u05D7\\u05D4\\u05F4\\u05E6\",\"\\u05D1\\u05E2\\u05E8\\u05D1\",\"\\u05D1\\u05DC\\u05D9\\u05DC\\u05D4\",\"\\u05DC\\u05E4\\u05E0\\u05D5\\u05EA \\u05D1\\u05D5\\u05E7\\u05E8\"],[\"\\u05D7\\u05E6\\u05D5\\u05EA\",\"\\u05D1\\u05D5\\u05E7\\u05E8\",\"\\u05E6\\u05D4\\u05E8\\u05D9\\u05D9\\u05DD\",\"\\u05D0\\u05D7\\u05E8 \\u05D4\\u05E6\\u05D4\\u05E8\\u05D9\\u05D9\\u05DD\",\"\\u05E2\\u05E8\\u05D1\",\"\\u05DC\\u05D9\\u05DC\\u05D4\",\"\\u05DC\\u05E4\\u05E0\\u05D5\\u05EA \\u05D1\\u05D5\\u05E7\\u05E8\"],[\"\\u05D7\\u05E6\\u05D5\\u05EA\",\"\\u05D1\\u05D1\\u05D5\\u05E7\\u05E8\",\"\\u05D1\\u05E6\\u05D4\\u05E8\\u05D9\\u05D9\\u05DD\",\"\\u05D0\\u05D7\\u05E8 \\u05D4\\u05E6\\u05D4\\u05E8\\u05D9\\u05D9\\u05DD\",\"\\u05D1\\u05E2\\u05E8\\u05D1\",\"\\u05D1\\u05DC\\u05D9\\u05DC\\u05D4\",\"\\u05DC\\u05E4\\u05E0\\u05D5\\u05EA \\u05D1\\u05D5\\u05E7\\u05E8\"]],[[\"\\u05D7\\u05E6\\u05D5\\u05EA\",\"\\u05D1\\u05D5\\u05E7\\u05E8\",\"\\u05E6\\u05D4\\u05E8\\u05D9\\u05D9\\u05DD\",\"\\u05D0\\u05D7\\u05D4\\u05F4\\u05E6\",\"\\u05E2\\u05E8\\u05D1\",\"\\u05DC\\u05D9\\u05DC\\u05D4\",\"\\u05DC\\u05E4\\u05E0\\u05D5\\u05EA \\u05D1\\u05D5\\u05E7\\u05E8\"],e,[\"\\u05D7\\u05E6\\u05D5\\u05EA\",\"\\u05D1\\u05D5\\u05E7\\u05E8\",\"\\u05E6\\u05D4\\u05E8\\u05D9\\u05D9\\u05DD\",\"\\u05D0\\u05D7\\u05E8 \\u05D4\\u05E6\\u05D4\\u05E8\\u05D9\\u05D9\\u05DD\",\"\\u05E2\\u05E8\\u05D1\",\"\\u05DC\\u05D9\\u05DC\\u05D4\",\"\\u05DC\\u05E4\\u05E0\\u05D5\\u05EA \\u05D1\\u05D5\\u05E7\\u05E8\"]],[\"00:00\",[\"06:00\",\"12:00\"],[\"12:00\",\"16:00\"],[\"16:00\",\"18:00\"],[\"18:00\",\"22:00\"],[\"22:00\",\"03:00\"],[\"03:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length,f=parseInt(a.toString().replace(/^[^.]*\\.?/,\"\"),10)||0;return p===0&&d%10===1&&d%100!==11||f%10===1&&f%100!==11?1:p===0&&d%10===Math.floor(d%10)&&d%10>=2&&d%10<=4&&!(d%100>=12&&d%100<=14)||f%10===Math.floor(f%10)&&f%10>=2&&f%10<=4&&!(f%100>=12&&f%100<=14)?3:5}i.ng.common.locales.hr=[\"hr\",[[\"AM\",\"PM\"],e,e],e,[[\"N\",\"P\",\"U\",\"S\",\"\\u010C\",\"P\",\"S\"],[\"ned\",\"pon\",\"uto\",\"sri\",\"\\u010Det\",\"pet\",\"sub\"],[\"nedjelja\",\"ponedjeljak\",\"utorak\",\"srijeda\",\"\\u010Detvrtak\",\"petak\",\"subota\"],[\"ned\",\"pon\",\"uto\",\"sri\",\"\\u010Det\",\"pet\",\"sub\"]],[[\"n\",\"p\",\"u\",\"s\",\"\\u010D\",\"p\",\"s\"],[\"ned\",\"pon\",\"uto\",\"sri\",\"\\u010Det\",\"pet\",\"sub\"],[\"nedjelja\",\"ponedjeljak\",\"utorak\",\"srijeda\",\"\\u010Detvrtak\",\"petak\",\"subota\"],[\"ned\",\"pon\",\"uto\",\"sri\",\"\\u010Det\",\"pet\",\"sub\"]],[[\"1.\",\"2.\",\"3.\",\"4.\",\"5.\",\"6.\",\"7.\",\"8.\",\"9.\",\"10.\",\"11.\",\"12.\"],[\"sij\",\"velj\",\"o\\u017Eu\",\"tra\",\"svi\",\"lip\",\"srp\",\"kol\",\"ruj\",\"lis\",\"stu\",\"pro\"],[\"sije\\u010Dnja\",\"velja\\u010De\",\"o\\u017Eujka\",\"travnja\",\"svibnja\",\"lipnja\",\"srpnja\",\"kolovoza\",\"rujna\",\"listopada\",\"studenoga\",\"prosinca\"]],[[\"1.\",\"2.\",\"3.\",\"4.\",\"5.\",\"6.\",\"7.\",\"8.\",\"9.\",\"10.\",\"11.\",\"12.\"],[\"sij\",\"velj\",\"o\\u017Eu\",\"tra\",\"svi\",\"lip\",\"srp\",\"kol\",\"ruj\",\"lis\",\"stu\",\"pro\"],[\"sije\\u010Danj\",\"velja\\u010Da\",\"o\\u017Eujak\",\"travanj\",\"svibanj\",\"lipanj\",\"srpanj\",\"kolovoz\",\"rujan\",\"listopad\",\"studeni\",\"prosinac\"]],[[\"pr.n.e.\",\"AD\"],[\"pr. Kr.\",\"po. Kr.\"],[\"prije Krista\",\"poslije Krista\"]],1,[6,0],[\"dd. MM. y.\",\"d. MMM y.\",\"d. MMMM y.\",\"EEEE, d. MMMM y.\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss (zzzz)\"],[\"{1} {0}\",e,\"{1} 'u' {0}\",e],[\",\",\".\",\";\",\"%\",\"+\",\"\\u2212\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"HRK\",\"kn\",\"hrvatska kuna\",{AUD:[e,\"$\"],BRL:[e,\"R$\"],BYN:[e,\"\\u0440.\"],CAD:[e,\"$\"],CNY:[e,\"\\xA5\"],EUR:[e,\"\\u20AC\"],GBP:[e,\"\\xA3\"],HKD:[e,\"$\"],HRK:[\"kn\"],ILS:[e,\"\\u20AA\"],INR:[e,\"\\u20B9\"],JPY:[e,\"\\xA5\"],KRW:[e,\"\\u20A9\"],MXN:[e,\"$\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],RUR:[e,\"\\u0440.\"],TWD:[e,\"NT$\"],USD:[e,\"$\"],VND:[e,\"\\u20AB\"],XCD:[e,\"$\"],XPF:[],XXX:[]},\"ltr\",l,[[[\"pono\\u0107\",\"podne\",\"ujutro\",\"popodne\",\"nave\\u010Der\",\"no\\u0107u\"],e,[\"pono\\u0107\",\"podne\",\"ujutro\",\"poslije podne\",\"nave\\u010Der\",\"no\\u0107u\"]],[[\"pono\\u0107\",\"podne\",\"ujutro\",\"popodne\",\"nave\\u010Der\",\"no\\u0107u\"],e,e],[\"00:00\",\"12:00\",[\"04:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"21:00\"],[\"21:00\",\"04:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){return a===1?1:5}i.ng.common.locales.hu=[\"hu\",[[\"de.\",\"du.\"],e,e],e,[[\"V\",\"H\",\"K\",\"Sz\",\"Cs\",\"P\",\"Sz\"],[\"V\",\"H\",\"K\",\"Sze\",\"Cs\",\"P\",\"Szo\"],[\"vas\\xE1rnap\",\"h\\xE9tf\\u0151\",\"kedd\",\"szerda\",\"cs\\xFCt\\xF6rt\\xF6k\",\"p\\xE9ntek\",\"szombat\"],[\"V\",\"H\",\"K\",\"Sze\",\"Cs\",\"P\",\"Szo\"]],e,[[\"J\",\"F\",\"M\",\"\\xC1\",\"M\",\"J\",\"J\",\"A\",\"Sz\",\"O\",\"N\",\"D\"],[\"jan.\",\"febr.\",\"m\\xE1rc.\",\"\\xE1pr.\",\"m\\xE1j.\",\"j\\xFAn.\",\"j\\xFAl.\",\"aug.\",\"szept.\",\"okt.\",\"nov.\",\"dec.\"],[\"janu\\xE1r\",\"febru\\xE1r\",\"m\\xE1rcius\",\"\\xE1prilis\",\"m\\xE1jus\",\"j\\xFAnius\",\"j\\xFAlius\",\"augusztus\",\"szeptember\",\"okt\\xF3ber\",\"november\",\"december\"]],e,[[\"ie.\",\"isz.\"],[\"i. e.\",\"i. sz.\"],[\"Krisztus el\\u0151tt\",\"id\\u0151sz\\xE1m\\xEDt\\xE1sunk szerint\"]],1,[6,0],[\"y. MM. dd.\",\"y. MMM d.\",\"y. MMMM d.\",\"y. MMMM d., EEEE\"],[\"H:mm\",\"H:mm:ss\",\"H:mm:ss z\",\"H:mm:ss zzzz\"],[\"{1} {0}\",e,e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"HUF\",\"Ft\",\"magyar forint\",{AUD:[e,\"$\"],BRL:[e,\"R$\"],BYN:[e,\"\\u0440.\"],CAD:[e,\"$\"],CNY:[e,\"\\xA5\"],EUR:[e,\"\\u20AC\"],GBP:[e,\"\\xA3\"],HKD:[e,\"$\"],HUF:[\"Ft\"],ILS:[e,\"\\u20AA\"],INR:[e,\"\\u20B9\"],KRW:[e,\"\\u20A9\"],MXN:[e,\"$\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],TWD:[e,\"NT$\"],USD:[e,\"$\"],VND:[e,\"\\u20AB\"],XCD:[e,\"$\"]},\"ltr\",l,[[[\"\\xE9jf\\xE9l\",\"d\\xE9l\",\"reggel\",\"de.\",\"du.\",\"este\",\"\\xE9jjel\",\"hajnal\"],e,[\"\\xE9jf\\xE9l\",\"d\\xE9l\",\"reggel\",\"d\\xE9lel\\u0151tt\",\"d\\xE9lut\\xE1n\",\"este\",\"\\xE9jjel\",\"hajnal\"]],e,[\"00:00\",\"12:00\",[\"06:00\",\"09:00\"],[\"09:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"21:00\"],[\"21:00\",\"04:00\"],[\"04:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length,f=parseInt(a.toString().replace(/^[^e]*(e([-+]?\\d+))?/,\"$2\"))||0;return d===1&&p===0?1:f===0&&d!==0&&d%1e6===0&&p===0||!(f>=0&&f<=5)?4:5}i.ng.common.locales.it=[\"it\",[[\"m.\",\"p.\"],[\"AM\",\"PM\"],e],e,[[\"D\",\"L\",\"M\",\"M\",\"G\",\"V\",\"S\"],[\"dom\",\"lun\",\"mar\",\"mer\",\"gio\",\"ven\",\"sab\"],[\"domenica\",\"luned\\xEC\",\"marted\\xEC\",\"mercoled\\xEC\",\"gioved\\xEC\",\"venerd\\xEC\",\"sabato\"],[\"dom\",\"lun\",\"mar\",\"mer\",\"gio\",\"ven\",\"sab\"]],e,[[\"G\",\"F\",\"M\",\"A\",\"M\",\"G\",\"L\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"gen\",\"feb\",\"mar\",\"apr\",\"mag\",\"giu\",\"lug\",\"ago\",\"set\",\"ott\",\"nov\",\"dic\"],[\"gennaio\",\"febbraio\",\"marzo\",\"aprile\",\"maggio\",\"giugno\",\"luglio\",\"agosto\",\"settembre\",\"ottobre\",\"novembre\",\"dicembre\"]],e,[[\"aC\",\"dC\"],[\"a.C.\",\"d.C.\"],[\"avanti Cristo\",\"dopo Cristo\"]],1,[6,0],[\"dd/MM/yy\",\"d MMM y\",\"d MMMM y\",\"EEEE d MMMM y\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1}, {0}\",e,\"{1} {0}\",e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"euro\",{BRL:[e,\"R$\"],BYN:[e,\"Br\"],EGP:[e,\"\\xA3E\"],HKD:[e,\"$\"],INR:[e,\"\\u20B9\"],JPY:[e,\"\\xA5\"],KRW:[e,\"\\u20A9\"],MXN:[e,\"$\"],NOK:[e,\"NKr\"],THB:[\"\\u0E3F\"],TWD:[e,\"NT$\"],USD:[e,\"$\"],VND:[e,\"\\u20AB\"]},\"ltr\",l,[[[\"mezzanotte\",\"mezzogiorno\",\"di mattina\",\"di pomeriggio\",\"di sera\",\"di notte\"],e,[\"mezzanotte\",\"mezzogiorno\",\"di mattina\",\"del pomeriggio\",\"di sera\",\"di notte\"]],[[\"mezzanotte\",\"mezzogiorno\",\"mattina\",\"pomeriggio\",\"sera\",\"notte\"],e,e],[\"00:00\",\"12:00\",[\"06:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"24:00\"],[\"00:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){return a===1?1:5}i.ng.common.locales.ka=[\"ka\",[[\"a\",\"p\"],[\"AM\",\"PM\"],e],[[\"AM\",\"PM\"],e,e],[[\"\\u10D9\",\"\\u10DD\",\"\\u10E1\",\"\\u10DD\",\"\\u10EE\",\"\\u10DE\",\"\\u10E8\"],[\"\\u10D9\\u10D5\\u10D8\",\"\\u10DD\\u10E0\\u10E8\",\"\\u10E1\\u10D0\\u10DB\",\"\\u10DD\\u10D7\\u10EE\",\"\\u10EE\\u10E3\\u10D7\",\"\\u10DE\\u10D0\\u10E0\",\"\\u10E8\\u10D0\\u10D1\"],[\"\\u10D9\\u10D5\\u10D8\\u10E0\\u10D0\",\"\\u10DD\\u10E0\\u10E8\\u10D0\\u10D1\\u10D0\\u10D7\\u10D8\",\"\\u10E1\\u10D0\\u10DB\\u10E8\\u10D0\\u10D1\\u10D0\\u10D7\\u10D8\",\"\\u10DD\\u10D7\\u10EE\\u10E8\\u10D0\\u10D1\\u10D0\\u10D7\\u10D8\",\"\\u10EE\\u10E3\\u10D7\\u10E8\\u10D0\\u10D1\\u10D0\\u10D7\\u10D8\",\"\\u10DE\\u10D0\\u10E0\\u10D0\\u10E1\\u10D9\\u10D4\\u10D5\\u10D8\",\"\\u10E8\\u10D0\\u10D1\\u10D0\\u10D7\\u10D8\"],[\"\\u10D9\\u10D5\",\"\\u10DD\\u10E0\",\"\\u10E1\\u10DB\",\"\\u10DD\\u10D7\",\"\\u10EE\\u10D7\",\"\\u10DE\\u10E0\",\"\\u10E8\\u10D1\"]],e,[[\"\\u10D8\",\"\\u10D7\",\"\\u10DB\",\"\\u10D0\",\"\\u10DB\",\"\\u10D8\",\"\\u10D8\",\"\\u10D0\",\"\\u10E1\",\"\\u10DD\",\"\\u10DC\",\"\\u10D3\"],[\"\\u10D8\\u10D0\\u10DC\",\"\\u10D7\\u10D4\\u10D1\",\"\\u10DB\\u10D0\\u10E0\",\"\\u10D0\\u10DE\\u10E0\",\"\\u10DB\\u10D0\\u10D8\",\"\\u10D8\\u10D5\\u10DC\",\"\\u10D8\\u10D5\\u10DA\",\"\\u10D0\\u10D2\\u10D5\",\"\\u10E1\\u10D4\\u10E5\",\"\\u10DD\\u10E5\\u10E2\",\"\\u10DC\\u10DD\\u10D4\",\"\\u10D3\\u10D4\\u10D9\"],[\"\\u10D8\\u10D0\\u10DC\\u10D5\\u10D0\\u10E0\\u10D8\",\"\\u10D7\\u10D4\\u10D1\\u10D4\\u10E0\\u10D5\\u10D0\\u10DA\\u10D8\",\"\\u10DB\\u10D0\\u10E0\\u10E2\\u10D8\",\"\\u10D0\\u10DE\\u10E0\\u10D8\\u10DA\\u10D8\",\"\\u10DB\\u10D0\\u10D8\\u10E1\\u10D8\",\"\\u10D8\\u10D5\\u10DC\\u10D8\\u10E1\\u10D8\",\"\\u10D8\\u10D5\\u10DA\\u10D8\\u10E1\\u10D8\",\"\\u10D0\\u10D2\\u10D5\\u10D8\\u10E1\\u10E2\\u10DD\",\"\\u10E1\\u10D4\\u10E5\\u10E2\\u10D4\\u10DB\\u10D1\\u10D4\\u10E0\\u10D8\",\"\\u10DD\\u10E5\\u10E2\\u10DD\\u10DB\\u10D1\\u10D4\\u10E0\\u10D8\",\"\\u10DC\\u10DD\\u10D4\\u10DB\\u10D1\\u10D4\\u10E0\\u10D8\",\"\\u10D3\\u10D4\\u10D9\\u10D4\\u10DB\\u10D1\\u10D4\\u10E0\\u10D8\"]],e,[[\"\\u10EB\\u10D5. \\u10EC.\",\"\\u10D0\\u10EE. \\u10EC.\"],e,[\"\\u10EB\\u10D5\\u10D4\\u10DA\\u10D8 \\u10EC\\u10D4\\u10DA\\u10D7\\u10D0\\u10E6\\u10E0\\u10D8\\u10EA\\u10EE\\u10D5\\u10D8\\u10D7\",\"\\u10D0\\u10EE\\u10D0\\u10DA\\u10D8 \\u10EC\\u10D4\\u10DA\\u10D7\\u10D0\\u10E6\\u10E0\\u10D8\\u10EA\\u10EE\\u10D5\\u10D8\\u10D7\"]],1,[6,0],[\"dd.MM.yy\",\"d MMM. y\",\"d MMMM, y\",\"EEEE, dd MMMM, y\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1}, {0}\",e,e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"\\u10D0\\u10E0\\xA0\\u10D0\\u10E0\\u10D8\\u10E1\\xA0\\u10E0\\u10D8\\u10EA\\u10EE\\u10D5\\u10D8\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"GEL\",\"\\u20BE\",\"\\u10E5\\u10D0\\u10E0\\u10D7\\u10E3\\u10DA\\u10D8 \\u10DA\\u10D0\\u10E0\\u10D8\",{AUD:[e,\"$\"],BYN:[e,\"\\u0440.\"],CNY:[e,\"\\xA5\"],GEL:[\"\\u20BE\"],HKD:[e,\"$\"],ILS:[e,\"\\u20AA\"],INR:[e,\"\\u20B9\"],JPY:[e,\"\\xA5\"],KRW:[e,\"\\u20A9\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],TWD:[\"NT$\"],USD:[\"US$\",\"$\"],VND:[e,\"\\u20AB\"]},\"ltr\",l,[[[\"\\u10E8\\u10E3\\u10D0\\u10E6\\u10D0\\u10DB\\u10D4\\u10E1\",\"\\u10E8\\u10E3\\u10D0\\u10D3\\u10E6.\",\"\\u10D3\\u10D8\\u10DA.\",\"\\u10DC\\u10D0\\u10E8\\u10E3\\u10D0\\u10D3\\u10E6.\",\"\\u10E1\\u10D0\\u10E6.\",\"\\u10E6\\u10D0\\u10DB.\"],e,[\"\\u10E8\\u10E3\\u10D0\\u10E6\\u10D0\\u10DB\\u10D4\\u10E1\",\"\\u10E8\\u10E3\\u10D0\\u10D3\\u10E6\\u10D4\\u10E1\",\"\\u10D3\\u10D8\\u10DA\\u10D8\\u10D7\",\"\\u10DC\\u10D0\\u10E8\\u10E3\\u10D0\\u10D3\\u10E6\\u10D4\\u10D5\\u10E1\",\"\\u10E1\\u10D0\\u10E6\\u10D0\\u10DB\\u10DD\\u10E1\",\"\\u10E6\\u10D0\\u10DB\\u10D8\\u10D7\"]],[[\"\\u10E8\\u10E3\\u10D0\\u10E6\\u10D0\\u10DB\\u10D4\",\"\\u10E8\\u10E3\\u10D0\\u10D3\\u10E6\\u10D4\",\"\\u10D3\\u10D8\\u10DA\\u10D0\",\"\\u10DC\\u10D0\\u10E8\\u10E3\\u10D0\\u10D3\\u10E6\\u10D4\\u10D5\\u10D8\",\"\\u10E1\\u10D0\\u10E6\\u10D0\\u10DB\\u10DD\",\"\\u10E6\\u10D0\\u10DB\\u10D4\"],e,e],[\"00:00\",\"12:00\",[\"05:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"21:00\"],[\"21:00\",\"05:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){return a===1?1:5}i.ng.common.locales.kk=[\"kk\",[[\"AM\",\"PM\"],e,e],e,[[\"\\u0416\",\"\\u0414\",\"\\u0421\",\"\\u0421\",\"\\u0411\",\"\\u0416\",\"\\u0421\"],[\"\\u0436\\u0441\",\"\\u0434\\u0441\",\"\\u0441\\u0441\",\"\\u0441\\u0440\",\"\\u0431\\u0441\",\"\\u0436\\u043C\",\"\\u0441\\u0431\"],[\"\\u0436\\u0435\\u043A\\u0441\\u0435\\u043D\\u0431\\u0456\",\"\\u0434\\u04AF\\u0439\\u0441\\u0435\\u043D\\u0431\\u0456\",\"\\u0441\\u0435\\u0439\\u0441\\u0435\\u043D\\u0431\\u0456\",\"\\u0441\\u04D9\\u0440\\u0441\\u0435\\u043D\\u0431\\u0456\",\"\\u0431\\u0435\\u0439\\u0441\\u0435\\u043D\\u0431\\u0456\",\"\\u0436\\u04B1\\u043C\\u0430\",\"\\u0441\\u0435\\u043D\\u0431\\u0456\"],[\"\\u0436\\u0441\",\"\\u0434\\u0441\",\"\\u0441\\u0441\",\"\\u0441\\u0440\",\"\\u0431\\u0441\",\"\\u0436\\u043C\",\"\\u0441\\u0431\"]],e,[[\"\\u049A\",\"\\u0410\",\"\\u041D\",\"\\u0421\",\"\\u041C\",\"\\u041C\",\"\\u0428\",\"\\u0422\",\"\\u049A\",\"\\u049A\",\"\\u049A\",\"\\u0416\"],[\"\\u049B\\u0430\\u04A3.\",\"\\u0430\\u049B\\u043F.\",\"\\u043D\\u0430\\u0443.\",\"\\u0441\\u04D9\\u0443.\",\"\\u043C\\u0430\\u043C.\",\"\\u043C\\u0430\\u0443.\",\"\\u0448\\u0456\\u043B.\",\"\\u0442\\u0430\\u043C.\",\"\\u049B\\u044B\\u0440.\",\"\\u049B\\u0430\\u0437.\",\"\\u049B\\u0430\\u0440.\",\"\\u0436\\u0435\\u043B.\"],[\"\\u049B\\u0430\\u04A3\\u0442\\u0430\\u0440\",\"\\u0430\\u049B\\u043F\\u0430\\u043D\",\"\\u043D\\u0430\\u0443\\u0440\\u044B\\u0437\",\"\\u0441\\u04D9\\u0443\\u0456\\u0440\",\"\\u043C\\u0430\\u043C\\u044B\\u0440\",\"\\u043C\\u0430\\u0443\\u0441\\u044B\\u043C\",\"\\u0448\\u0456\\u043B\\u0434\\u0435\",\"\\u0442\\u0430\\u043C\\u044B\\u0437\",\"\\u049B\\u044B\\u0440\\u043A\\u04AF\\u0439\\u0435\\u043A\",\"\\u049B\\u0430\\u0437\\u0430\\u043D\",\"\\u049B\\u0430\\u0440\\u0430\\u0448\\u0430\",\"\\u0436\\u0435\\u043B\\u0442\\u043E\\u049B\\u0441\\u0430\\u043D\"]],[[\"\\u049A\",\"\\u0410\",\"\\u041D\",\"\\u0421\",\"\\u041C\",\"\\u041C\",\"\\u0428\",\"\\u0422\",\"\\u049A\",\"\\u049A\",\"\\u049A\",\"\\u0416\"],[\"\\u049B\\u0430\\u04A3.\",\"\\u0430\\u049B\\u043F.\",\"\\u043D\\u0430\\u0443.\",\"\\u0441\\u04D9\\u0443.\",\"\\u043C\\u0430\\u043C.\",\"\\u043C\\u0430\\u0443.\",\"\\u0448\\u0456\\u043B.\",\"\\u0442\\u0430\\u043C.\",\"\\u049B\\u044B\\u0440.\",\"\\u049B\\u0430\\u0437.\",\"\\u049B\\u0430\\u0440.\",\"\\u0436\\u0435\\u043B.\"],[\"\\u049A\\u0430\\u04A3\\u0442\\u0430\\u0440\",\"\\u0410\\u049B\\u043F\\u0430\\u043D\",\"\\u041D\\u0430\\u0443\\u0440\\u044B\\u0437\",\"\\u0421\\u04D9\\u0443\\u0456\\u0440\",\"\\u041C\\u0430\\u043C\\u044B\\u0440\",\"\\u041C\\u0430\\u0443\\u0441\\u044B\\u043C\",\"\\u0428\\u0456\\u043B\\u0434\\u0435\",\"\\u0422\\u0430\\u043C\\u044B\\u0437\",\"\\u049A\\u044B\\u0440\\u043A\\u04AF\\u0439\\u0435\\u043A\",\"\\u049A\\u0430\\u0437\\u0430\\u043D\",\"\\u049A\\u0430\\u0440\\u0430\\u0448\\u0430\",\"\\u0416\\u0435\\u043B\\u0442\\u043E\\u049B\\u0441\\u0430\\u043D\"]],[[\"\\u0431.\\u0437.\\u0434.\",\"\\u0431.\\u0437.\"],e,[\"\\u0411\\u0456\\u0437\\u0434\\u0456\\u04A3 \\u0437\\u0430\\u043C\\u0430\\u043D\\u044B\\u043C\\u044B\\u0437\\u0493\\u0430 \\u0434\\u0435\\u0439\\u0456\\u043D\",\"\\u0431\\u0456\\u0437\\u0434\\u0456\\u04A3 \\u0437\\u0430\\u043C\\u0430\\u043D\\u044B\\u043C\\u044B\\u0437\"]],1,[6,0],[\"dd.MM.yy\",\"y '\\u0436'. dd MMM\",\"y '\\u0436'. d MMMM\",\"y '\\u0436'. d MMMM, EEEE\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1}, {0}\",e,e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"\\u0441\\u0430\\u043D\\xA0\\u0435\\u043C\\u0435\\u0441\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"KZT\",\"\\u20B8\",\"\\u049A\\u0430\\u0437\\u0430\\u049B\\u0441\\u0442\\u0430\\u043D \\u0442\\u0435\\u04A3\\u0433\\u0435\\u0441\\u0456\",{BYN:[e,\"\\u0440.\"],JPY:[\"JP\\xA5\",\"\\xA5\"],KZT:[\"\\u20B8\"],LSL:[\"\\u041B\\u0421\\u041B\"],PHP:[e,\"\\u20B1\"],RUB:[\"\\u20BD\"],THB:[\"\\u0E3F\"],TWD:[\"NT$\"]},\"ltr\",l,[[[\"\\u0442\\u04AF\\u043D\\u0433\\u0456\",\"\\u0442\\u04AF\\u0441\\u043A\\u0456\",\"\\u0442\\u0430\\u04A3\\u0493\\u044B\",\"\\u0442\\u04AF\\u0441\\u0442\\u0435\\u043D \\u043A\\u0435\\u0439\\u0456\\u043D\\u0433\\u0456\",\"\\u043A\\u0435\\u0448\\u043A\\u0456\",\"\\u0442\\u04AF\\u043D\\u0433\\u0456\"],[\"\\u0442\\u04AF\\u043D \\u0436\\u0430\\u0440\\u044B\\u043C\\u044B\",\"\\u0442\\u04AF\\u0441\\u043A\\u0456\",\"\\u0442\\u0430\\u04A3\\u0493\\u044B\",\"\\u0442\\u04AF\\u0441\\u0442\\u0435\\u043D \\u043A\\u0435\\u0439\\u0456\\u043D\\u0433\\u0456\",\"\\u043A\\u0435\\u0448\\u043A\\u0456\",\"\\u0442\\u04AF\\u043D\\u0433\\u0456\"],e],[[\"\\u0442\\u04AF\\u043D \\u0436\\u0430\\u0440\\u044B\\u043C\\u044B\",\"\\u0442\\u0430\\u043B\\u0442\\u04AF\\u0441\",\"\\u0442\\u0430\\u04A3\",\"\\u0442\\u04AF\\u0441\\u0442\\u0435\\u043D \\u043A\\u0435\\u0439\\u0456\\u043D\",\"\\u043A\\u0435\\u0448\",\"\\u0442\\u04AF\\u043D\"],e,e],[\"00:00\",\"12:00\",[\"06:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"21:00\"],[\"21:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=parseInt(a.toString().replace(/^[^.]*\\.?/,\"\"),10)||0;return u%10===1&&!(u%100>=11&&u%100<=19)?1:u%10===Math.floor(u%10)&&u%10>=2&&u%10<=9&&!(u%100>=11&&u%100<=19)?3:d!==0?4:5}i.ng.common.locales.lt=[\"lt\",[[\"pr.\\xA0p.\",\"pop.\"],[\"prie\\u0161piet\",\"popiet\"],e],e,[[\"S\",\"P\",\"A\",\"T\",\"K\",\"P\",\"\\u0160\"],[\"sk\",\"pr\",\"an\",\"tr\",\"kt\",\"pn\",\"\\u0161t\"],[\"sekmadienis\",\"pirmadienis\",\"antradienis\",\"tre\\u010Diadienis\",\"ketvirtadienis\",\"penktadienis\",\"\\u0161e\\u0161tadienis\"],[\"Sk\",\"Pr\",\"An\",\"Tr\",\"Kt\",\"Pn\",\"\\u0160t\"]],e,[[\"S\",\"V\",\"K\",\"B\",\"G\",\"B\",\"L\",\"R\",\"R\",\"S\",\"L\",\"G\"],[\"saus.\",\"vas.\",\"kov.\",\"bal.\",\"geg.\",\"bir\\u017E.\",\"liep.\",\"rugp.\",\"rugs.\",\"spal.\",\"lapkr.\",\"gruod.\"],[\"sausio\",\"vasario\",\"kovo\",\"baland\\u017Eio\",\"gegu\\u017E\\u0117s\",\"bir\\u017Eelio\",\"liepos\",\"rugpj\\u016B\\u010Dio\",\"rugs\\u0117jo\",\"spalio\",\"lapkri\\u010Dio\",\"gruod\\u017Eio\"]],[[\"S\",\"V\",\"K\",\"B\",\"G\",\"B\",\"L\",\"R\",\"R\",\"S\",\"L\",\"G\"],[\"saus.\",\"vas.\",\"kov.\",\"bal.\",\"geg.\",\"bir\\u017E.\",\"liep.\",\"rugp.\",\"rugs.\",\"spal.\",\"lapkr.\",\"gruod.\"],[\"sausis\",\"vasaris\",\"kovas\",\"balandis\",\"gegu\\u017E\\u0117\",\"bir\\u017Eelis\",\"liepa\",\"rugpj\\u016Btis\",\"rugs\\u0117jis\",\"spalis\",\"lapkritis\",\"gruodis\"]],[[\"pr. Kr.\",\"po Kr.\"],e,[\"prie\\u0161 Krist\\u0173\",\"po Kristaus\"]],1,[6,0],[\"y-MM-dd\",e,\"y 'm'. MMMM d 'd'.\",\"y 'm'. MMMM d 'd'., EEEE\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1} {0}\",e,e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"\\u2212\",\"\\xD710^\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"Euras\",{AUD:[e,\"$\"],BDT:[],BRL:[e,\"R$\"],BYN:[e,\"Br\"],CAD:[e,\"$\"],CNY:[e,\"\\xA5\"],GBP:[e,\"\\xA3\"],HKD:[e,\"$\"],ILS:[],INR:[],JPY:[e,\"\\xA5\"],KHR:[],KRW:[e,\"\\u20A9\"],LAK:[],MNT:[],MXN:[e,\"$\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],PLN:[e,\"zl\"],PYG:[e,\"Gs\"],RUB:[e,\"rb\"],TWD:[e,\"$\"],USD:[e,\"$\"],VND:[],XAF:[],XCD:[e,\"$\"],XOF:[],XPF:[]},\"ltr\",l,[[[\"vidurnaktis\",\"perpiet\",\"rytas\",\"popiet\\u0117\",\"vakaras\",\"naktis\"],e,e],[[\"vidurnaktis\",\"vidurdienis\",\"rytas\",\"diena\",\"vakaras\",\"naktis\"],e,e],[\"00:00\",\"12:00\",[\"06:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"24:00\"],[\"00:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=a.toString().replace(/^[^.]*\\.?/,\"\").length,p=parseInt(a.toString().replace(/^[^.]*\\.?/,\"\"),10)||0;return u%10===0||u%100===Math.floor(u%100)&&u%100>=11&&u%100<=19||d===2&&p%100===Math.floor(p%100)&&p%100>=11&&p%100<=19?0:u%10===1&&u%100!==11||d===2&&p%10===1&&p%100!==11||d!==2&&p%10===1?1:5}i.ng.common.locales.lv=[\"lv\",[[\"priek\\u0161p.\",\"p\\u0113cp.\"],e,[\"priek\\u0161pusdien\\u0101\",\"p\\u0113cpusdien\\u0101\"]],[[\"priek\\u0161p.\",\"p\\u0113cpusd.\"],e,[\"priek\\u0161pusdiena\",\"p\\u0113cpusdiena\"]],[[\"S\",\"P\",\"O\",\"T\",\"C\",\"P\",\"S\"],[\"sv\\u0113td.\",\"pirmd.\",\"otrd.\",\"tre\\u0161d.\",\"ceturtd.\",\"piektd.\",\"sestd.\"],[\"sv\\u0113tdiena\",\"pirmdiena\",\"otrdiena\",\"tre\\u0161diena\",\"ceturtdiena\",\"piektdiena\",\"sestdiena\"],[\"Sv\",\"Pr\",\"Ot\",\"Tr\",\"Ce\",\"Pk\",\"Se\"]],[[\"S\",\"P\",\"O\",\"T\",\"C\",\"P\",\"S\"],[\"Sv\\u0113td.\",\"Pirmd.\",\"Otrd.\",\"Tre\\u0161d.\",\"Ceturtd.\",\"Piektd.\",\"Sestd.\"],[\"Sv\\u0113tdiena\",\"Pirmdiena\",\"Otrdiena\",\"Tre\\u0161diena\",\"Ceturtdiena\",\"Piektdiena\",\"Sestdiena\"],[\"Sv\",\"Pr\",\"Ot\",\"Tr\",\"Ce\",\"Pk\",\"Se\"]],[[\"J\",\"F\",\"M\",\"A\",\"M\",\"J\",\"J\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"janv.\",\"febr.\",\"marts\",\"apr.\",\"maijs\",\"j\\u016Bn.\",\"j\\u016Bl.\",\"aug.\",\"sept.\",\"okt.\",\"nov.\",\"dec.\"],[\"janv\\u0101ris\",\"febru\\u0101ris\",\"marts\",\"apr\\u012Blis\",\"maijs\",\"j\\u016Bnijs\",\"j\\u016Blijs\",\"augusts\",\"septembris\",\"oktobris\",\"novembris\",\"decembris\"]],e,[[\"p.m.\\u0113.\",\"m.\\u0113.\"],e,[\"pirms m\\u016Bsu \\u0113ras\",\"m\\u016Bsu \\u0113r\\u0101\"]],1,[6,0],[\"dd.MM.yy\",\"y. 'gada' d. MMM\",\"y. 'gada' d. MMMM\",\"EEEE, y. 'gada' d. MMMM\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1} {0}\",e,e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NS\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"eiro\",{AUD:[\"AU$\",\"$\"],BYN:[e,\"\\u0440.\"],GHS:[],LVL:[\"Ls\"],PHP:[e,\"\\u20B1\"],THB:[\"\\u0E3F\"],TWD:[\"NT$\"]},\"ltr\",l,[[[\"pusnakt\\u012B\",\"pusd.\",\"no r\\u012Bta\",\"p\\u0113cpusd.\",\"vakar\\u0101\",\"nakt\\u012B\"],e,[\"pusnakt\\u012B\",\"pusdienlaik\\u0101\",\"no r\\u012Bta\",\"p\\u0113cpusdien\\u0101\",\"vakar\\u0101\",\"nakt\\u012B\"]],[[\"pusnakts\",\"pusd.\",\"r\\u012Bts\",\"p\\u0113cpusd.\",\"vakars\",\"nakts\"],e,[\"pusnakts\",\"pusdienlaiks\",\"r\\u012Bts\",\"p\\u0113cpusdiena\",\"vakars\",\"nakts\"]],[\"00:00\",\"12:00\",[\"06:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"23:00\"],[\"23:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){return a===1?1:5}i.ng.common.locales.mn=[\"mn\",[[\"\\u04AF.\\u04E9.\",\"\\u04AF.\\u0445.\"],e,e],e,[[\"\\u041D\\u044F\",\"\\u0414\\u0430\",\"\\u041C\\u044F\",\"\\u041B\\u0445\",\"\\u041F\\u04AF\",\"\\u0411\\u0430\",\"\\u0411\\u044F\"],e,[\"\\u043D\\u044F\\u043C\",\"\\u0434\\u0430\\u0432\\u0430\\u0430\",\"\\u043C\\u044F\\u0433\\u043C\\u0430\\u0440\",\"\\u043B\\u0445\\u0430\\u0433\\u0432\\u0430\",\"\\u043F\\u04AF\\u0440\\u044D\\u0432\",\"\\u0431\\u0430\\u0430\\u0441\\u0430\\u043D\",\"\\u0431\\u044F\\u043C\\u0431\\u0430\"],[\"\\u041D\\u044F\",\"\\u0414\\u0430\",\"\\u041C\\u044F\",\"\\u041B\\u0445\",\"\\u041F\\u04AF\",\"\\u0411\\u0430\",\"\\u0411\\u044F\"]],[[\"\\u041D\\u044F\",\"\\u0414\\u0430\",\"\\u041C\\u044F\",\"\\u041B\\u0445\",\"\\u041F\\u04AF\",\"\\u0411\\u0430\",\"\\u0411\\u044F\"],e,[\"\\u041D\\u044F\\u043C\",\"\\u0414\\u0430\\u0432\\u0430\\u0430\",\"\\u041C\\u044F\\u0433\\u043C\\u0430\\u0440\",\"\\u041B\\u0445\\u0430\\u0433\\u0432\\u0430\",\"\\u041F\\u04AF\\u0440\\u044D\\u0432\",\"\\u0411\\u0430\\u0430\\u0441\\u0430\\u043D\",\"\\u0411\\u044F\\u043C\\u0431\\u0430\"],[\"\\u041D\\u044F\",\"\\u0414\\u0430\",\"\\u041C\\u044F\",\"\\u041B\\u0445\",\"\\u041F\\u04AF\",\"\\u0411\\u0430\",\"\\u0411\\u044F\"]],[[\"I\",\"II\",\"III\",\"IV\",\"V\",\"VI\",\"VII\",\"VIII\",\"IX\",\"X\",\"XI\",\"XII\"],[\"1-\\u0440 \\u0441\\u0430\\u0440\",\"2-\\u0440 \\u0441\\u0430\\u0440\",\"3-\\u0440 \\u0441\\u0430\\u0440\",\"4-\\u0440 \\u0441\\u0430\\u0440\",\"5-\\u0440 \\u0441\\u0430\\u0440\",\"6-\\u0440 \\u0441\\u0430\\u0440\",\"7-\\u0440 \\u0441\\u0430\\u0440\",\"8-\\u0440 \\u0441\\u0430\\u0440\",\"9-\\u0440 \\u0441\\u0430\\u0440\",\"10-\\u0440 \\u0441\\u0430\\u0440\",\"11-\\u0440 \\u0441\\u0430\\u0440\",\"12-\\u0440 \\u0441\\u0430\\u0440\"],[\"\\u043D\\u044D\\u0433\\u0434\\u04AF\\u0433\\u044D\\u044D\\u0440 \\u0441\\u0430\\u0440\",\"\\u0445\\u043E\\u0451\\u0440\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0433\\u0443\\u0440\\u0430\\u0432\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0434\\u04E9\\u0440\\u04E9\\u0432\\u0434\\u04AF\\u0433\\u044D\\u044D\\u0440 \\u0441\\u0430\\u0440\",\"\\u0442\\u0430\\u0432\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0437\\u0443\\u0440\\u0433\\u0430\\u0430\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0434\\u043E\\u043B\\u043E\\u043E\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u043D\\u0430\\u0439\\u043C\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0435\\u0441\\u0434\\u04AF\\u0433\\u044D\\u044D\\u0440 \\u0441\\u0430\\u0440\",\"\\u0430\\u0440\\u0430\\u0432\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0430\\u0440\\u0432\\u0430\\u043D \\u043D\\u044D\\u0433\\u0434\\u04AF\\u0433\\u044D\\u044D\\u0440 \\u0441\\u0430\\u0440\",\"\\u0430\\u0440\\u0432\\u0430\\u043D \\u0445\\u043E\\u0451\\u0440\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\"]],[[\"I\",\"II\",\"III\",\"IV\",\"V\",\"VI\",\"VII\",\"VIII\",\"IX\",\"X\",\"XI\",\"XII\"],[\"1-\\u0440 \\u0441\\u0430\\u0440\",\"2-\\u0440 \\u0441\\u0430\\u0440\",\"3-\\u0440 \\u0441\\u0430\\u0440\",\"4-\\u0440 \\u0441\\u0430\\u0440\",\"5-\\u0440 \\u0441\\u0430\\u0440\",\"6-\\u0440 \\u0441\\u0430\\u0440\",\"7-\\u0440 \\u0441\\u0430\\u0440\",\"8-\\u0440 \\u0441\\u0430\\u0440\",\"9-\\u0440 \\u0441\\u0430\\u0440\",\"10-\\u0440 \\u0441\\u0430\\u0440\",\"11-\\u0440 \\u0441\\u0430\\u0440\",\"12-\\u0440 \\u0441\\u0430\\u0440\"],[\"\\u041D\\u044D\\u0433\\u0434\\u04AF\\u0433\\u044D\\u044D\\u0440 \\u0441\\u0430\\u0440\",\"\\u0425\\u043E\\u0451\\u0440\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0413\\u0443\\u0440\\u0430\\u0432\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0414\\u04E9\\u0440\\u04E9\\u0432\\u0434\\u04AF\\u0433\\u044D\\u044D\\u0440 \\u0441\\u0430\\u0440\",\"\\u0422\\u0430\\u0432\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0417\\u0443\\u0440\\u0433\\u0430\\u0430\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0414\\u043E\\u043B\\u043E\\u043E\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u041D\\u0430\\u0439\\u043C\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0415\\u0441\\u0434\\u04AF\\u0433\\u044D\\u044D\\u0440 \\u0441\\u0430\\u0440\",\"\\u0410\\u0440\\u0430\\u0432\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\",\"\\u0410\\u0440\\u0432\\u0430\\u043D \\u043D\\u044D\\u0433\\u0434\\u04AF\\u0433\\u044D\\u044D\\u0440 \\u0441\\u0430\\u0440\",\"\\u0410\\u0440\\u0432\\u0430\\u043D \\u0445\\u043E\\u0451\\u0440\\u0434\\u0443\\u0433\\u0430\\u0430\\u0440 \\u0441\\u0430\\u0440\"]],[[\"\\u041C\\u042D\\u04E8\",\"\\u041C\\u042D\"],e,[\"\\u043C\\u0430\\u043D\\u0430\\u0439 \\u044D\\u0440\\u0438\\u043D\\u0438\\u0439 \\u04E9\\u043C\\u043D\\u04E9\\u0445\",\"\\u043C\\u0430\\u043D\\u0430\\u0439 \\u044D\\u0440\\u0438\\u043D\\u0438\\u0439\"]],1,[6,0],[\"y.MM.dd\",\"y '\\u043E\\u043D\\u044B' MMM'\\u044B\\u043D' d\",\"y '\\u043E\\u043D\\u044B' MMMM'\\u044B\\u043D' d\",\"y '\\u043E\\u043D\\u044B' MMMM'\\u044B\\u043D' d, EEEE '\\u0433\\u0430\\u0440\\u0430\\u0433'\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss (z)\",\"HH:mm:ss (zzzz)\"],[\"{1} {0}\",e,e,e],[\".\",\",\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"\\xA4\\xA0#,##0.00\",\"#E0\"],\"MNT\",\"\\u20AE\",\"\\u041C\\u043E\\u043D\\u0433\\u043E\\u043B \\u0442\\u04E9\\u0433\\u0440\\u04E9\\u0433\",{BYN:[e,\"\\u0440.\"],JPY:[\"JP\\xA5\",\"\\xA5\"],MNT:[\"\\u20AE\"],PHP:[e,\"\\u20B1\"],SEK:[e,\"\\u043A\\u0440\"],THB:[\"\\u0E3F\"],TWD:[\"NT$\"]},\"ltr\",l,[[[\"\\u0448\\u04E9\\u043D\\u04E9 \\u0434\\u0443\\u043D\\u0434\",\"\\u04AF\\u0434 \\u0434\\u0443\\u043D\\u0434\",\"\\u04E9\\u0433\\u043B\\u04E9\\u04E9\",\"\\u04E9\\u0434\\u04E9\\u0440\",\"\\u043E\\u0440\\u043E\\u0439\",\"\\u0448\\u04E9\\u043D\\u04E9\"],e,e],e,[\"00:00\",\"12:00\",[\"06:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"21:00\"],[\"21:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return d===1&&p===0?1:p===0&&d%10===Math.floor(d%10)&&d%10>=2&&d%10<=4&&!(d%100>=12&&d%100<=14)?3:p===0&&d!==1&&d%10===Math.floor(d%10)&&d%10>=0&&d%10<=1||p===0&&d%10===Math.floor(d%10)&&d%10>=5&&d%10<=9||p===0&&d%100===Math.floor(d%100)&&d%100>=12&&d%100<=14?4:5}i.ng.common.locales.pl=[\"pl\",[[\"a\",\"p\"],[\"AM\",\"PM\"],e],e,[[\"n\",\"p\",\"w\",\"\\u015B\",\"c\",\"p\",\"s\"],[\"niedz.\",\"pon.\",\"wt.\",\"\\u015Br.\",\"czw.\",\"pt.\",\"sob.\"],[\"niedziela\",\"poniedzia\\u0142ek\",\"wtorek\",\"\\u015Broda\",\"czwartek\",\"pi\\u0105tek\",\"sobota\"],[\"nie\",\"pon\",\"wto\",\"\\u015Bro\",\"czw\",\"pi\\u0105\",\"sob\"]],[[\"N\",\"P\",\"W\",\"\\u015A\",\"C\",\"P\",\"S\"],[\"niedz.\",\"pon.\",\"wt.\",\"\\u015Br.\",\"czw.\",\"pt.\",\"sob.\"],[\"niedziela\",\"poniedzia\\u0142ek\",\"wtorek\",\"\\u015Broda\",\"czwartek\",\"pi\\u0105tek\",\"sobota\"],[\"nie\",\"pon\",\"wto\",\"\\u015Bro\",\"czw\",\"pi\\u0105\",\"sob\"]],[[\"s\",\"l\",\"m\",\"k\",\"m\",\"c\",\"l\",\"s\",\"w\",\"p\",\"l\",\"g\"],[\"sty\",\"lut\",\"mar\",\"kwi\",\"maj\",\"cze\",\"lip\",\"sie\",\"wrz\",\"pa\\u017A\",\"lis\",\"gru\"],[\"stycznia\",\"lutego\",\"marca\",\"kwietnia\",\"maja\",\"czerwca\",\"lipca\",\"sierpnia\",\"wrze\\u015Bnia\",\"pa\\u017Adziernika\",\"listopada\",\"grudnia\"]],[[\"S\",\"L\",\"M\",\"K\",\"M\",\"C\",\"L\",\"S\",\"W\",\"P\",\"L\",\"G\"],[\"sty\",\"lut\",\"mar\",\"kwi\",\"maj\",\"cze\",\"lip\",\"sie\",\"wrz\",\"pa\\u017A\",\"lis\",\"gru\"],[\"stycze\\u0144\",\"luty\",\"marzec\",\"kwiecie\\u0144\",\"maj\",\"czerwiec\",\"lipiec\",\"sierpie\\u0144\",\"wrzesie\\u0144\",\"pa\\u017Adziernik\",\"listopad\",\"grudzie\\u0144\"]],[[\"p.n.e.\",\"n.e.\"],e,[\"przed nasz\\u0105 er\\u0105\",\"naszej ery\"]],1,[6,0],[\"d.MM.y\",\"d MMM y\",\"d MMMM y\",\"EEEE, d MMMM y\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1}, {0}\",e,\"{1} {0}\",e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"PLN\",\"z\\u0142\",\"z\\u0142oty polski\",{AUD:[e,\"$\"],CAD:[e,\"$\"],CNY:[e,\"\\xA5\"],GBP:[e,\"\\xA3\"],HKD:[e,\"$\"],ILS:[e,\"\\u20AA\"],INR:[e,\"\\u20B9\"],JPY:[e,\"\\xA5\"],KRW:[e,\"\\u20A9\"],MXN:[e,\"$\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],PLN:[\"z\\u0142\"],RON:[e,\"lej\"],TWD:[e,\"NT$\"],USD:[e,\"$\"],VND:[e,\"\\u20AB\"]},\"ltr\",l,[[[\"o p\\xF3\\u0142n.\",\"w po\\u0142.\",\"rano\",\"przed po\\u0142.\",\"po po\\u0142.\",\"wiecz.\",\"w nocy\"],[\"o p\\xF3\\u0142nocy\",\"w po\\u0142udnie\",\"rano\",\"przed po\\u0142udniem\",\"po po\\u0142udniu\",\"wieczorem\",\"w nocy\"],e],[[\"p\\xF3\\u0142n.\",\"po\\u0142.\",\"rano\",\"przedpo\\u0142.\",\"popo\\u0142.\",\"wiecz.\",\"noc\"],[\"p\\xF3\\u0142noc\",\"po\\u0142udnie\",\"rano\",\"przedpo\\u0142udnie\",\"popo\\u0142udnie\",\"wiecz\\xF3r\",\"noc\"],e],[\"00:00\",\"12:00\",[\"06:00\",\"10:00\"],[\"10:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"21:00\"],[\"21:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return d===1&&p===0?1:p!==0||u===0||u%100===Math.floor(u%100)&&u%100>=2&&u%100<=19?3:5}i.ng.common.locales.ro=[\"ro\",[[\"a.m.\",\"p.m.\"],e,e],e,[[\"D\",\"L\",\"M\",\"M\",\"J\",\"V\",\"S\"],[\"dum.\",\"lun.\",\"mar.\",\"mie.\",\"joi\",\"vin.\",\"s\\xE2m.\"],[\"duminic\\u0103\",\"luni\",\"mar\\u021Bi\",\"miercuri\",\"joi\",\"vineri\",\"s\\xE2mb\\u0103t\\u0103\"],[\"du.\",\"lu.\",\"ma.\",\"mi.\",\"joi\",\"vi.\",\"s\\xE2.\"]],e,[[\"I\",\"F\",\"M\",\"A\",\"M\",\"I\",\"I\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"ian.\",\"feb.\",\"mar.\",\"apr.\",\"mai\",\"iun.\",\"iul.\",\"aug.\",\"sept.\",\"oct.\",\"nov.\",\"dec.\"],[\"ianuarie\",\"februarie\",\"martie\",\"aprilie\",\"mai\",\"iunie\",\"iulie\",\"august\",\"septembrie\",\"octombrie\",\"noiembrie\",\"decembrie\"]],e,[[\"\\xEE.Hr.\",\"d.Hr.\"],e,[\"\\xEEnainte de Hristos\",\"dup\\u0103 Hristos\"]],1,[6,0],[\"dd.MM.y\",\"d MMM y\",\"d MMMM y\",\"EEEE, d MMMM y\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1}, {0}\",e,e,e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"RON\",\"RON\",\"leu rom\\xE2nesc\",{AUD:[e,\"$\"],BRL:[e,\"R$\"],BYN:[e,\"\\u0440.\"],CAD:[e,\"$\"],CNY:[e,\"\\xA5\"],EUR:[e,\"\\u20AC\"],GBP:[e,\"\\xA3\"],HKD:[e,\"$\"],ILS:[e,\"\\u20AA\"],INR:[e,\"\\u20B9\"],JPY:[e,\"\\xA5\"],KRW:[e,\"\\u20A9\"],MXN:[e,\"$\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],TWD:[e,\"NT$\"],USD:[e,\"$\"],VND:[e,\"\\u20AB\"],XCD:[e,\"$\"]},\"ltr\",l,[[[\"miezul nop\\u021Bii\",\"la amiaz\\u0103\",\"diminea\\u021Ba\",\"dup\\u0103-amiaza\",\"seara\",\"noaptea\"],[\"miezul nop\\u021Bii\",\"amiaz\\u0103\",\"diminea\\u021Ba\",\"dup\\u0103-amiaza\",\"seara\",\"noaptea\"],[\"la miezul nop\\u021Bii\",\"la amiaz\\u0103\",\"diminea\\u021Ba\",\"dup\\u0103-amiaza\",\"seara\",\"noaptea\"]],[[\"miezul nop\\u021Bii\",\"amiaz\\u0103\",\"diminea\\u021Ba\",\"dup\\u0103-amiaza\",\"seara\",\"noaptea\"],e,[\"la miezul nop\\u021Bii\",\"la amiaz\\u0103\",\"diminea\\u021Ba\",\"dup\\u0103-amiaza\",\"seara\",\"noaptea\"]],[\"00:00\",\"12:00\",[\"05:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"22:00\"],[\"22:00\",\"05:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a;return u===0?0:u===1?1:u===2?2:u%100===Math.floor(u%100)&&u%100>=3&&u%100<=10?3:u%100===Math.floor(u%100)&&u%100>=11&&u%100<=99?4:5}i.ng.common.locales.ar=[\"ar\",[[\"\\u0635\",\"\\u0645\"],e,e],[[\"\\u0635\",\"\\u0645\"],e,[\"\\u0635\\u0628\\u0627\\u062D\\u064B\\u0627\",\"\\u0645\\u0633\\u0627\\u0621\\u064B\"]],[[\"\\u062D\",\"\\u0646\",\"\\u062B\",\"\\u0631\",\"\\u062E\",\"\\u062C\",\"\\u0633\"],[\"\\u0627\\u0644\\u0623\\u062D\\u062F\",\"\\u0627\\u0644\\u0627\\u062B\\u0646\\u064A\\u0646\",\"\\u0627\\u0644\\u062B\\u0644\\u0627\\u062B\\u0627\\u0621\",\"\\u0627\\u0644\\u0623\\u0631\\u0628\\u0639\\u0627\\u0621\",\"\\u0627\\u0644\\u062E\\u0645\\u064A\\u0633\",\"\\u0627\\u0644\\u062C\\u0645\\u0639\\u0629\",\"\\u0627\\u0644\\u0633\\u0628\\u062A\"],e,[\"\\u0623\\u062D\\u062F\",\"\\u0625\\u062B\\u0646\\u064A\\u0646\",\"\\u062B\\u0644\\u0627\\u062B\\u0627\\u0621\",\"\\u0623\\u0631\\u0628\\u0639\\u0627\\u0621\",\"\\u062E\\u0645\\u064A\\u0633\",\"\\u062C\\u0645\\u0639\\u0629\",\"\\u0633\\u0628\\u062A\"]],e,[[\"\\u064A\",\"\\u0641\",\"\\u0645\",\"\\u0623\",\"\\u0648\",\"\\u0646\",\"\\u0644\",\"\\u063A\",\"\\u0633\",\"\\u0643\",\"\\u0628\",\"\\u062F\"],[\"\\u064A\\u0646\\u0627\\u064A\\u0631\",\"\\u0641\\u0628\\u0631\\u0627\\u064A\\u0631\",\"\\u0645\\u0627\\u0631\\u0633\",\"\\u0623\\u0628\\u0631\\u064A\\u0644\",\"\\u0645\\u0627\\u064A\\u0648\",\"\\u064A\\u0648\\u0646\\u064A\\u0648\",\"\\u064A\\u0648\\u0644\\u064A\\u0648\",\"\\u0623\\u063A\\u0633\\u0637\\u0633\",\"\\u0633\\u0628\\u062A\\u0645\\u0628\\u0631\",\"\\u0623\\u0643\\u062A\\u0648\\u0628\\u0631\",\"\\u0646\\u0648\\u0641\\u0645\\u0628\\u0631\",\"\\u062F\\u064A\\u0633\\u0645\\u0628\\u0631\"],e],e,[[\"\\u0642.\\u0645\",\"\\u0645\"],e,[\"\\u0642\\u0628\\u0644 \\u0627\\u0644\\u0645\\u064A\\u0644\\u0627\\u062F\",\"\\u0645\\u064A\\u0644\\u0627\\u062F\\u064A\"]],6,[5,6],[\"d\\u200F/M\\u200F/y\",\"dd\\u200F/MM\\u200F/y\",\"d MMMM y\",\"EEEE\\u060C d MMMM y\"],[\"h:mm a\",\"h:mm:ss a\",\"h:mm:ss a z\",\"h:mm:ss a zzzz\"],[\"{1}, {0}\",e,\"{1} \\u0641\\u064A {0}\",e],[\".\",\",\",\";\",\"\\u200E%\\u200E\",\"\\u200E+\",\"\\u200E-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"\\u0644\\u064A\\u0633\\xA0\\u0631\\u0642\\u0645\\u064B\\u0627\",\":\"],[\"#,##0.###\",\"#,##0%\",\"\\xA4\\xA0#,##0.00\",\"#E0\"],\"EGP\",\"\\u062C.\\u0645.\\u200F\",\"\\u062C\\u0646\\u064A\\u0647 \\u0645\\u0635\\u0631\\u064A\",{AED:[\"\\u062F.\\u0625.\\u200F\"],ARS:[e,\"AR$\"],AUD:[\"AU$\"],BBD:[e,\"BB$\"],BHD:[\"\\u062F.\\u0628.\\u200F\"],BMD:[e,\"BM$\"],BND:[e,\"BN$\"],BSD:[e,\"BS$\"],BYN:[e,\"\\u0440.\"],BZD:[e,\"BZ$\"],CAD:[\"CA$\"],CLP:[e,\"CL$\"],CNY:[\"CN\\xA5\"],COP:[e,\"CO$\"],CUP:[e,\"CU$\"],DOP:[e,\"DO$\"],DZD:[\"\\u062F.\\u062C.\\u200F\"],EGP:[\"\\u062C.\\u0645.\\u200F\",\"E\\xA3\"],FJD:[e,\"FJ$\"],GBP:[\"UK\\xA3\"],GYD:[e,\"GY$\"],HKD:[\"HK$\"],IQD:[\"\\u062F.\\u0639.\\u200F\"],IRR:[\"\\u0631.\\u0625.\"],JMD:[e,\"JM$\"],JOD:[\"\\u062F.\\u0623.\\u200F\"],JPY:[\"JP\\xA5\"],KWD:[\"\\u062F.\\u0643.\\u200F\"],KYD:[e,\"KY$\"],LBP:[\"\\u0644.\\u0644.\\u200F\",\"L\\xA3\"],LRD:[e,\"$LR\"],LYD:[\"\\u062F.\\u0644.\\u200F\"],MAD:[\"\\u062F.\\u0645.\\u200F\"],MRU:[\"\\u0623.\\u0645.\"],MXN:[\"MX$\"],NZD:[\"NZ$\"],OMR:[\"\\u0631.\\u0639.\\u200F\"],PHP:[e,\"\\u20B1\"],QAR:[\"\\u0631.\\u0642.\\u200F\"],SAR:[\"\\u0631.\\u0633.\\u200F\"],SBD:[e,\"SB$\"],SDD:[\"\\u062F.\\u0633.\\u200F\"],SDG:[\"\\u062C.\\u0633.\"],SRD:[e,\"SR$\"],SYP:[\"\\u0644.\\u0633.\\u200F\",\"\\xA3\"],THB:[\"\\u0E3F\"],TND:[\"\\u062F.\\u062A.\\u200F\"],TTD:[e,\"TT$\"],TWD:[\"NT$\"],USD:[\"US$\"],UYU:[e,\"UY$\"],YER:[\"\\u0631.\\u064A.\\u200F\"]},\"rtl\",l,[[[\"\\u0641\\u062C\\u0631\\u064B\\u0627\",\"\\u0635\\u0628\\u0627\\u062D\\u064B\\u0627\",\"\\u0638\\u0647\\u0631\\u064B\\u0627\",\"\\u0628\\u0639\\u062F \\u0627\\u0644\\u0638\\u0647\\u0631\",\"\\u0645\\u0633\\u0627\\u0621\\u064B\",\"\\u0645\\u0646\\u062A\\u0635\\u0641 \\u0627\\u0644\\u0644\\u064A\\u0644\",\"\\u0644\\u064A\\u0644\\u0627\\u064B\"],[\"\\u0641\\u062C\\u0631\\u064B\\u0627\",\"\\u0635\",\"\\u0638\\u0647\\u0631\\u064B\\u0627\",\"\\u0628\\u0639\\u062F \\u0627\\u0644\\u0638\\u0647\\u0631\",\"\\u0645\\u0633\\u0627\\u0621\\u064B\",\"\\u0641\\u064A \\u0627\\u0644\\u0645\\u0633\\u0627\\u0621\",\"\\u0644\\u064A\\u0644\\u0627\\u064B\"],[\"\\u0641\\u064A \\u0627\\u0644\\u0635\\u0628\\u0627\\u062D\",\"\\u0635\\u0628\\u0627\\u062D\\u064B\\u0627\",\"\\u0638\\u0647\\u0631\\u064B\\u0627\",\"\\u0628\\u0639\\u062F \\u0627\\u0644\\u0638\\u0647\\u0631\",\"\\u0645\\u0633\\u0627\\u0621\\u064B\",\"\\u0641\\u064A \\u0627\\u0644\\u0645\\u0633\\u0627\\u0621\",\"\\u0644\\u064A\\u0644\\u0627\\u064B\"]],[[\"\\u0641\\u062C\\u0631\\u064B\\u0627\",\"\\u0635\\u0628\\u0627\\u062D\\u064B\\u0627\",\"\\u0638\\u0647\\u0631\\u064B\\u0627\",\"\\u0628\\u0639\\u062F \\u0627\\u0644\\u0638\\u0647\\u0631\",\"\\u0645\\u0633\\u0627\\u0621\\u064B\",\"\\u0645\\u0646\\u062A\\u0635\\u0641 \\u0627\\u0644\\u0644\\u064A\\u0644\",\"\\u0644\\u064A\\u0644\\u0627\\u064B\"],[\"\\u0641\\u062C\\u0631\\u064B\\u0627\",\"\\u0635\",\"\\u0638\\u0647\\u0631\\u064B\\u0627\",\"\\u0628\\u0639\\u062F \\u0627\\u0644\\u0638\\u0647\\u0631\",\"\\u0645\\u0633\\u0627\\u0621\\u064B\",\"\\u0645\\u0646\\u062A\\u0635\\u0641 \\u0627\\u0644\\u0644\\u064A\\u0644\",\"\\u0644\\u064A\\u0644\\u0627\\u064B\"],[\"\\u0641\\u062C\\u0631\\u064B\\u0627\",\"\\u0635\\u0628\\u0627\\u062D\\u064B\\u0627\",\"\\u0638\\u0647\\u0631\\u064B\\u0627\",\"\\u0628\\u0639\\u062F \\u0627\\u0644\\u0638\\u0647\\u0631\",\"\\u0645\\u0633\\u0627\\u0621\\u064B\",\"\\u0645\\u0646\\u062A\\u0635\\u0641 \\u0627\\u0644\\u0644\\u064A\\u0644\",\"\\u0644\\u064A\\u0644\\u0627\\u064B\"]],[[\"03:00\",\"06:00\"],[\"06:00\",\"12:00\"],[\"12:00\",\"13:00\"],[\"13:00\",\"18:00\"],[\"18:00\",\"24:00\"],[\"00:00\",\"01:00\"],[\"01:00\",\"03:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return d===1&&p===0?1:d===Math.floor(d)&&d>=2&&d<=4&&p===0?3:p!==0?4:5}i.ng.common.locales.sk=[\"sk\",[[\"AM\",\"PM\"],e,e],e,[[\"n\",\"p\",\"u\",\"s\",\"\\u0161\",\"p\",\"s\"],[\"ne\",\"po\",\"ut\",\"st\",\"\\u0161t\",\"pi\",\"so\"],[\"nede\\u013Ea\",\"pondelok\",\"utorok\",\"streda\",\"\\u0161tvrtok\",\"piatok\",\"sobota\"],[\"ne\",\"po\",\"ut\",\"st\",\"\\u0161t\",\"pi\",\"so\"]],e,[[\"j\",\"f\",\"m\",\"a\",\"m\",\"j\",\"j\",\"a\",\"s\",\"o\",\"n\",\"d\"],[\"jan\",\"feb\",\"mar\",\"apr\",\"m\\xE1j\",\"j\\xFAn\",\"j\\xFAl\",\"aug\",\"sep\",\"okt\",\"nov\",\"dec\"],[\"janu\\xE1ra\",\"febru\\xE1ra\",\"marca\",\"apr\\xEDla\",\"m\\xE1ja\",\"j\\xFAna\",\"j\\xFAla\",\"augusta\",\"septembra\",\"okt\\xF3bra\",\"novembra\",\"decembra\"]],[[\"j\",\"f\",\"m\",\"a\",\"m\",\"j\",\"j\",\"a\",\"s\",\"o\",\"n\",\"d\"],[\"jan\",\"feb\",\"mar\",\"apr\",\"m\\xE1j\",\"j\\xFAn\",\"j\\xFAl\",\"aug\",\"sep\",\"okt\",\"nov\",\"dec\"],[\"janu\\xE1r\",\"febru\\xE1r\",\"marec\",\"apr\\xEDl\",\"m\\xE1j\",\"j\\xFAn\",\"j\\xFAl\",\"august\",\"september\",\"okt\\xF3ber\",\"november\",\"december\"]],[[\"pred Kr.\",\"po Kr.\"],e,[\"pred Kristom\",\"po Kristovi\"]],1,[6,0],[\"d. M. y\",e,\"d. MMMM y\",\"EEEE d. MMMM y\"],[\"H:mm\",\"H:mm:ss\",\"H:mm:ss z\",\"H:mm:ss zzzz\"],[\"{1} {0}\",\"{1}, {0}\",e,e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"e\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"euro\",{AUD:[e,\"$\"],BRL:[e,\"R$\"],BYN:[e,\"\\u0440.\"],CAD:[e,\"$\"],CNY:[e,\"\\xA5\"],GBP:[e,\"\\xA3\"],HKD:[e,\"$\"],ILS:[\"NIS\",\"\\u20AA\"],INR:[e,\"\\u20B9\"],JPY:[e,\"\\xA5\"],KRW:[e,\"\\u20A9\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],RUR:[e,\"\\u0440.\"],TWD:[e,\"NT$\"],USD:[e,\"$\"],VND:[e,\"\\u20AB\"],XXX:[]},\"ltr\",l,[[[\"o poln.\",\"nap.\",\"r\\xE1no\",\"dop.\",\"pop.\",\"ve\\u010D.\",\"v n.\"],[\"o poln.\",\"napol.\",\"r\\xE1no\",\"dopol.\",\"popol.\",\"ve\\u010Der\",\"v noci\"],[\"o polnoci\",\"napoludnie\",\"r\\xE1no\",\"dopoludnia\",\"popoludn\\xED\",\"ve\\u010Der\",\"v noci\"]],[[\"poln.\",\"pol.\",\"r\\xE1no\",\"dop.\",\"pop.\",\"ve\\u010D.\",\"noc\"],[\"poln.\",\"pol.\",\"r\\xE1no\",\"dopol.\",\"popol.\",\"ve\\u010Der\",\"noc\"],[\"polnoc\",\"poludnie\",\"r\\xE1no\",\"dopoludnie\",\"popoludnie\",\"ve\\u010Der\",\"noc\"]],[\"00:00\",\"12:00\",[\"04:00\",\"09:00\"],[\"09:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"22:00\"],[\"22:00\",\"04:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return p===0&&d%100===1?1:p===0&&d%100===2?2:p===0&&d%100===Math.floor(d%100)&&d%100>=3&&d%100<=4||p!==0?3:5}i.ng.common.locales.sl=[\"sl\",[[\"d\",\"p\"],[\"dop.\",\"pop.\"],e],[[\"d\",\"p\"],[\"dop.\",\"pop.\"],[\"dopoldne\",\"popoldne\"]],[[\"n\",\"p\",\"t\",\"s\",\"\\u010D\",\"p\",\"s\"],[\"ned.\",\"pon.\",\"tor.\",\"sre.\",\"\\u010Det.\",\"pet.\",\"sob.\"],[\"nedelja\",\"ponedeljek\",\"torek\",\"sreda\",\"\\u010Detrtek\",\"petek\",\"sobota\"],[\"ned.\",\"pon.\",\"tor.\",\"sre.\",\"\\u010Det.\",\"pet.\",\"sob.\"]],e,[[\"j\",\"f\",\"m\",\"a\",\"m\",\"j\",\"j\",\"a\",\"s\",\"o\",\"n\",\"d\"],[\"jan.\",\"feb.\",\"mar.\",\"apr.\",\"maj\",\"jun.\",\"jul.\",\"avg.\",\"sep.\",\"okt.\",\"nov.\",\"dec.\"],[\"januar\",\"februar\",\"marec\",\"april\",\"maj\",\"junij\",\"julij\",\"avgust\",\"september\",\"oktober\",\"november\",\"december\"]],e,[[\"pr. Kr.\",\"po Kr.\"],e,[\"pred Kristusom\",\"po Kristusu\"]],1,[6,0],[\"d. MM. yy\",\"d. MMM y\",\"d. MMMM y\",\"EEEE, d. MMMM y\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1}, {0}\",e,\"{1} {0}\",e],[\",\",\".\",\";\",\"%\",\"+\",\"\\u2212\",\"e\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0\\xA0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"EUR\",\"\\u20AC\",\"evro\",{AUD:[e,\"$\"],BRL:[e,\"R$\"],BYN:[e,\"\\u0440.\"],CAD:[e,\"$\"],GBP:[e,\"\\xA3\"],MXN:[e,\"$\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],TWD:[e,\"NT$\"],XCD:[e,\"$\"]},\"ltr\",l,[[[\"24.00\",\"12.00\",\"zj\",\"d\",\"p\",\"zv\",\"po\"],[\"opoln.\",\"opold.\",\"zjut.\",\"dop.\",\"pop.\",\"zve\\u010D.\",\"pono\\u010Di\"],[\"opolno\\u010Di\",\"opoldne\",\"zjutraj\",\"dopoldan\",\"popoldan\",\"zve\\u010Der\",\"pono\\u010Di\"]],[[\"24.00\",\"12.00\",\"j\",\"d\",\"p\",\"v\",\"n\"],[\"poln.\",\"pold.\",\"jut.\",\"dop.\",\"pop.\",\"zve\\u010D.\",\"no\\u010D\"],[\"polno\\u010D\",\"poldne\",\"jutro\",\"dopoldne\",\"popoldne\",\"ve\\u010Der\",\"no\\u010D\"]],[\"00:00\",\"12:00\",[\"06:00\",\"10:00\"],[\"10:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"22:00\"],[\"22:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length,f=parseInt(a.toString().replace(/^[^.]*\\.?/,\"\"),10)||0;return p===0&&d%10===1&&d%100!==11||f%10===1&&f%100!==11?1:p===0&&d%10===Math.floor(d%10)&&d%10>=2&&d%10<=4&&!(d%100>=12&&d%100<=14)||f%10===Math.floor(f%10)&&f%10>=2&&f%10<=4&&!(f%100>=12&&f%100<=14)?3:5}i.ng.common.locales.sr=[\"sr\",[[\"AM\",\"PM\"],e,e],[[\"\\u043F\\u0440\\u0435 \\u043F\\u043E\\u0434\\u043D\\u0435\",\"\\u043F\\u043E \\u043F\\u043E\\u0434\\u043D\\u0435\"],[\"AM\",\"PM\"],e],[[\"\\u043D\",\"\\u043F\",\"\\u0443\",\"\\u0441\",\"\\u0447\",\"\\u043F\",\"\\u0441\"],[\"\\u043D\\u0435\\u0434\",\"\\u043F\\u043E\\u043D\",\"\\u0443\\u0442\\u043E\",\"\\u0441\\u0440\\u0435\",\"\\u0447\\u0435\\u0442\",\"\\u043F\\u0435\\u0442\",\"\\u0441\\u0443\\u0431\"],[\"\\u043D\\u0435\\u0434\\u0435\\u0459\\u0430\",\"\\u043F\\u043E\\u043D\\u0435\\u0434\\u0435\\u0459\\u0430\\u043A\",\"\\u0443\\u0442\\u043E\\u0440\\u0430\\u043A\",\"\\u0441\\u0440\\u0435\\u0434\\u0430\",\"\\u0447\\u0435\\u0442\\u0432\\u0440\\u0442\\u0430\\u043A\",\"\\u043F\\u0435\\u0442\\u0430\\u043A\",\"\\u0441\\u0443\\u0431\\u043E\\u0442\\u0430\"],[\"\\u043D\\u0435\",\"\\u043F\\u043E\",\"\\u0443\\u0442\",\"\\u0441\\u0440\",\"\\u0447\\u0435\",\"\\u043F\\u0435\",\"\\u0441\\u0443\"]],e,[[\"\\u0458\",\"\\u0444\",\"\\u043C\",\"\\u0430\",\"\\u043C\",\"\\u0458\",\"\\u0458\",\"\\u0430\",\"\\u0441\",\"\\u043E\",\"\\u043D\",\"\\u0434\"],[\"\\u0458\\u0430\\u043D\",\"\\u0444\\u0435\\u0431\",\"\\u043C\\u0430\\u0440\",\"\\u0430\\u043F\\u0440\",\"\\u043C\\u0430\\u0458\",\"\\u0458\\u0443\\u043D\",\"\\u0458\\u0443\\u043B\",\"\\u0430\\u0432\\u0433\",\"\\u0441\\u0435\\u043F\",\"\\u043E\\u043A\\u0442\",\"\\u043D\\u043E\\u0432\",\"\\u0434\\u0435\\u0446\"],[\"\\u0458\\u0430\\u043D\\u0443\\u0430\\u0440\",\"\\u0444\\u0435\\u0431\\u0440\\u0443\\u0430\\u0440\",\"\\u043C\\u0430\\u0440\\u0442\",\"\\u0430\\u043F\\u0440\\u0438\\u043B\",\"\\u043C\\u0430\\u0458\",\"\\u0458\\u0443\\u043D\",\"\\u0458\\u0443\\u043B\",\"\\u0430\\u0432\\u0433\\u0443\\u0441\\u0442\",\"\\u0441\\u0435\\u043F\\u0442\\u0435\\u043C\\u0431\\u0430\\u0440\",\"\\u043E\\u043A\\u0442\\u043E\\u0431\\u0430\\u0440\",\"\\u043D\\u043E\\u0432\\u0435\\u043C\\u0431\\u0430\\u0440\",\"\\u0434\\u0435\\u0446\\u0435\\u043C\\u0431\\u0430\\u0440\"]],e,[[\"\\u043F.\\u043D.\\u0435.\",\"\\u043D.\\u0435.\"],[\"\\u043F. \\u043D. \\u0435.\",\"\\u043D. \\u0435.\"],[\"\\u043F\\u0440\\u0435 \\u043D\\u043E\\u0432\\u0435 \\u0435\\u0440\\u0435\",\"\\u043D\\u043E\\u0432\\u0435 \\u0435\\u0440\\u0435\"]],1,[6,0],[\"d.M.yy.\",\"d. M. y.\",\"d. MMMM y.\",\"EEEE, d. MMMM y.\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1} {0}\",e,e,e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"RSD\",\"RSD\",\"\\u0441\\u0440\\u043F\\u0441\\u043A\\u0438 \\u0434\\u0438\\u043D\\u0430\\u0440\",{AUD:[e,\"$\"],BAM:[\"\\u041A\\u041C\",\"KM\"],BYN:[e,\"\\u0440.\"],GEL:[e,\"\\u10DA\"],KRW:[e,\"\\u20A9\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],TWD:[\"NT$\"],USD:[\"US$\",\"$\"],VND:[e,\"\\u20AB\"]},\"ltr\",l,[[[\"\\u043F\\u043E\\u043D\\u043E\\u045B\",\"\\u043F\\u043E\\u0434\\u043D\\u0435\",\"\\u0443\\u0458\\u0443\\u0442\\u0440\\u0443\",\"\\u043F\\u043E \\u043F\\u043E\\u0434\\u043D\\u0435\",\"\\u0443\\u0432\\u0435\\u0447\\u0435\",\"\\u043D\\u043E\\u045B\\u0443\"],[\"\\u043F\\u043E\\u043D\\u043E\\u045B\",\"\\u043F\\u043E\\u0434\\u043D\\u0435\",\"\\u0443\\u0458\\u0443\\u0442\\u0440\\u043E\",\"\\u043F\\u043E \\u043F\\u043E\\u0434\\u043D\\u0435\",\"\\u0443\\u0432\\u0435\\u0447\\u0435\",\"\\u043D\\u043E\\u045B\\u0443\"],e],[[\"\\u043F\\u043E\\u043D\\u043E\\u045B\",\"\\u043F\\u043E\\u0434\\u043D\\u0435\",\"\\u0458\\u0443\\u0442\\u0440\\u043E\",\"\\u043F\\u043E\\u043F\\u043E\\u0434\\u043D\\u0435\",\"\\u0432\\u0435\\u0447\\u0435\",\"\\u043D\\u043E\\u045B\"],e,e],[\"00:00\",\"12:00\",[\"06:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"21:00\"],[\"21:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){return a===1?1:5}i.ng.common.locales.tr=[\"tr\",[[\"\\xF6\\xF6\",\"\\xF6s\"],[\"\\xD6\\xD6\",\"\\xD6S\"],e],[[\"\\xD6\\xD6\",\"\\xD6S\"],e,e],[[\"P\",\"P\",\"S\",\"\\xC7\",\"P\",\"C\",\"C\"],[\"Paz\",\"Pzt\",\"Sal\",\"\\xC7ar\",\"Per\",\"Cum\",\"Cmt\"],[\"Pazar\",\"Pazartesi\",\"Sal\\u0131\",\"\\xC7ar\\u015Famba\",\"Per\\u015Fembe\",\"Cuma\",\"Cumartesi\"],[\"Pa\",\"Pt\",\"Sa\",\"\\xC7a\",\"Pe\",\"Cu\",\"Ct\"]],e,[[\"O\",\"\\u015E\",\"M\",\"N\",\"M\",\"H\",\"T\",\"A\",\"E\",\"E\",\"K\",\"A\"],[\"Oca\",\"\\u015Eub\",\"Mar\",\"Nis\",\"May\",\"Haz\",\"Tem\",\"A\\u011Fu\",\"Eyl\",\"Eki\",\"Kas\",\"Ara\"],[\"Ocak\",\"\\u015Eubat\",\"Mart\",\"Nisan\",\"May\\u0131s\",\"Haziran\",\"Temmuz\",\"A\\u011Fustos\",\"Eyl\\xFCl\",\"Ekim\",\"Kas\\u0131m\",\"Aral\\u0131k\"]],e,[[\"M\\xD6\",\"MS\"],e,[\"Milattan \\xD6nce\",\"Milattan Sonra\"]],1,[6,0],[\"d.MM.y\",\"d MMM y\",\"d MMMM y\",\"d MMMM y EEEE\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1} {0}\",e,e,e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"%#,##0\",\"\\xA4#,##0.00\",\"#E0\"],\"TRY\",\"\\u20BA\",\"T\\xFCrk Liras\\u0131\",{AUD:[\"AU$\",\"$\"],BYN:[e,\"\\u0440.\"],PHP:[e,\"\\u20B1\"],RON:[e,\"L\"],RUR:[e,\"\\u0440.\"],THB:[\"\\u0E3F\"],TRY:[\"\\u20BA\"],TWD:[\"NT$\"]},\"ltr\",l,[[[\"gece\",\"\\xF6\",\"sabah\",\"\\xF6\\u011Fleden \\xF6nce\",\"\\xF6\\u011Fleden sonra\",\"ak\\u015Fam\\xFCst\\xFC\",\"ak\\u015Fam\",\"gece\"],[\"gece yar\\u0131s\\u0131\",\"\\xF6\\u011Fle\",\"sabah\",\"\\xF6\\u011Fleden \\xF6nce\",\"\\xF6\\u011Fleden sonra\",\"ak\\u015Fam\\xFCst\\xFC\",\"ak\\u015Fam\",\"gece\"],e],[[\"gece yar\\u0131s\\u0131\",\"\\xF6\\u011Fle\",\"sabah\",\"\\xF6\\u011Fleden \\xF6nce\",\"\\xF6\\u011Fleden sonra\",\"ak\\u015Fam\\xFCst\\xFC\",\"ak\\u015Fam\",\"gece\"],e,e],[\"00:00\",\"12:00\",[\"06:00\",\"11:00\"],[\"11:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"19:00\"],[\"19:00\",\"21:00\"],[\"21:00\",\"06:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length;return p===0&&d%10===1&&d%100!==11?1:p===0&&d%10===Math.floor(d%10)&&d%10>=2&&d%10<=4&&!(d%100>=12&&d%100<=14)?3:p===0&&d%10===0||p===0&&d%10===Math.floor(d%10)&&d%10>=5&&d%10<=9||p===0&&d%100===Math.floor(d%100)&&d%100>=11&&d%100<=14?4:5}i.ng.common.locales.uk=[\"uk\",[[\"\\u0434\\u043F\",\"\\u043F\\u043F\"],e,e],e,[[\"\\u041D\",\"\\u041F\",\"\\u0412\",\"\\u0421\",\"\\u0427\",\"\\u041F\",\"\\u0421\"],[\"\\u043D\\u0434\",\"\\u043F\\u043D\",\"\\u0432\\u0442\",\"\\u0441\\u0440\",\"\\u0447\\u0442\",\"\\u043F\\u0442\",\"\\u0441\\u0431\"],[\"\\u043D\\u0435\\u0434\\u0456\\u043B\\u044F\",\"\\u043F\\u043E\\u043D\\u0435\\u0434\\u0456\\u043B\\u043E\\u043A\",\"\\u0432\\u0456\\u0432\\u0442\\u043E\\u0440\\u043E\\u043A\",\"\\u0441\\u0435\\u0440\\u0435\\u0434\\u0430\",\"\\u0447\\u0435\\u0442\\u0432\\u0435\\u0440\",\"\\u043F\\u02BC\\u044F\\u0442\\u043D\\u0438\\u0446\\u044F\",\"\\u0441\\u0443\\u0431\\u043E\\u0442\\u0430\"],[\"\\u043D\\u0434\",\"\\u043F\\u043D\",\"\\u0432\\u0442\",\"\\u0441\\u0440\",\"\\u0447\\u0442\",\"\\u043F\\u0442\",\"\\u0441\\u0431\"]],e,[[\"\\u0441\",\"\\u043B\",\"\\u0431\",\"\\u043A\",\"\\u0442\",\"\\u0447\",\"\\u043B\",\"\\u0441\",\"\\u0432\",\"\\u0436\",\"\\u043B\",\"\\u0433\"],[\"\\u0441\\u0456\\u0447.\",\"\\u043B\\u044E\\u0442.\",\"\\u0431\\u0435\\u0440.\",\"\\u043A\\u0432\\u0456\\u0442.\",\"\\u0442\\u0440\\u0430\\u0432.\",\"\\u0447\\u0435\\u0440\\u0432.\",\"\\u043B\\u0438\\u043F.\",\"\\u0441\\u0435\\u0440\\u043F.\",\"\\u0432\\u0435\\u0440.\",\"\\u0436\\u043E\\u0432\\u0442.\",\"\\u043B\\u0438\\u0441\\u0442.\",\"\\u0433\\u0440\\u0443\\u0434.\"],[\"\\u0441\\u0456\\u0447\\u043D\\u044F\",\"\\u043B\\u044E\\u0442\\u043E\\u0433\\u043E\",\"\\u0431\\u0435\\u0440\\u0435\\u0437\\u043D\\u044F\",\"\\u043A\\u0432\\u0456\\u0442\\u043D\\u044F\",\"\\u0442\\u0440\\u0430\\u0432\\u043D\\u044F\",\"\\u0447\\u0435\\u0440\\u0432\\u043D\\u044F\",\"\\u043B\\u0438\\u043F\\u043D\\u044F\",\"\\u0441\\u0435\\u0440\\u043F\\u043D\\u044F\",\"\\u0432\\u0435\\u0440\\u0435\\u0441\\u043D\\u044F\",\"\\u0436\\u043E\\u0432\\u0442\\u043D\\u044F\",\"\\u043B\\u0438\\u0441\\u0442\\u043E\\u043F\\u0430\\u0434\\u0430\",\"\\u0433\\u0440\\u0443\\u0434\\u043D\\u044F\"]],[[\"\\u0421\",\"\\u041B\",\"\\u0411\",\"\\u041A\",\"\\u0422\",\"\\u0427\",\"\\u041B\",\"\\u0421\",\"\\u0412\",\"\\u0416\",\"\\u041B\",\"\\u0413\"],[\"\\u0441\\u0456\\u0447\",\"\\u043B\\u044E\\u0442\",\"\\u0431\\u0435\\u0440\",\"\\u043A\\u0432\\u0456\",\"\\u0442\\u0440\\u0430\",\"\\u0447\\u0435\\u0440\",\"\\u043B\\u0438\\u043F\",\"\\u0441\\u0435\\u0440\",\"\\u0432\\u0435\\u0440\",\"\\u0436\\u043E\\u0432\",\"\\u043B\\u0438\\u0441\",\"\\u0433\\u0440\\u0443\"],[\"\\u0441\\u0456\\u0447\\u0435\\u043D\\u044C\",\"\\u043B\\u044E\\u0442\\u0438\\u0439\",\"\\u0431\\u0435\\u0440\\u0435\\u0437\\u0435\\u043D\\u044C\",\"\\u043A\\u0432\\u0456\\u0442\\u0435\\u043D\\u044C\",\"\\u0442\\u0440\\u0430\\u0432\\u0435\\u043D\\u044C\",\"\\u0447\\u0435\\u0440\\u0432\\u0435\\u043D\\u044C\",\"\\u043B\\u0438\\u043F\\u0435\\u043D\\u044C\",\"\\u0441\\u0435\\u0440\\u043F\\u0435\\u043D\\u044C\",\"\\u0432\\u0435\\u0440\\u0435\\u0441\\u0435\\u043D\\u044C\",\"\\u0436\\u043E\\u0432\\u0442\\u0435\\u043D\\u044C\",\"\\u043B\\u0438\\u0441\\u0442\\u043E\\u043F\\u0430\\u0434\",\"\\u0433\\u0440\\u0443\\u0434\\u0435\\u043D\\u044C\"]],[[\"\\u0434\\u043E \\u043D.\\u0435.\",\"\\u043D.\\u0435.\"],[\"\\u0434\\u043E \\u043D. \\u0435.\",\"\\u043D. \\u0435.\"],[\"\\u0434\\u043E \\u043D\\u0430\\u0448\\u043E\\u0457 \\u0435\\u0440\\u0438\",\"\\u043D\\u0430\\u0448\\u043E\\u0457 \\u0435\\u0440\\u0438\"]],1,[6,0],[\"dd.MM.yy\",\"d MMM y '\\u0440'.\",\"d MMMM y '\\u0440'.\",\"EEEE, d MMMM y '\\u0440'.\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1}, {0}\",e,\"{1} '\\u043E' {0}\",e],[\",\",\"\\xA0\",\";\",\"%\",\"+\",\"-\",\"\\u0415\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"#,##0.00\\xA0\\xA4\",\"#E0\"],\"UAH\",\"\\u20B4\",\"\\u0443\\u043A\\u0440\\u0430\\u0457\\u043D\\u0441\\u044C\\u043A\\u0430 \\u0433\\u0440\\u0438\\u0432\\u043D\\u044F\",{AUD:[e,\"$\"],BRL:[e,\"R$\"],BYN:[e,\"\\u0440.\"],CAD:[e,\"$\"],CNY:[e,\"\\xA5\"],EUR:[e,\"\\u20AC\"],GBP:[e,\"\\xA3\"],HKD:[e,\"$\"],ILS:[e,\"\\u20AA\"],INR:[e,\"\\u20B9\"],KRW:[e,\"\\u20A9\"],MXN:[e,\"$\"],NZD:[e,\"$\"],PHP:[e,\"\\u20B1\"],RUR:[e,\"\\u0440.\"],TWD:[e,\"$\"],UAH:[\"\\u20B4\"],UAK:[\"\\u043A\\u0440\\u0431.\"],USD:[e,\"$\"],VND:[e,\"\\u20AB\"],XCD:[e,\"$\"]},\"ltr\",l,[[[\"\\u043F\\u0456\\u0432\\u043D\\u0456\\u0447\",\"\\u043F\",\"\\u0440\\u0430\\u043D\\u043A\\u0443\",\"\\u0434\\u043D\\u044F\",\"\\u0432\\u0435\\u0447\\u043E\\u0440\\u0430\",\"\\u043D\\u043E\\u0447\\u0456\"],[\"\\u043E\\u043F\\u0456\\u0432\\u043D\\u043E\\u0447\\u0456\",\"\\u043F\\u043E\\u043F\\u043E\\u043B\\u0443\\u0434\\u043D\\u0456\",\"\\u0440\\u0430\\u043D\\u043A\\u0443\",\"\\u0434\\u043D\\u044F\",\"\\u0432\\u0435\\u0447\\u043E\\u0440\\u0430\",\"\\u043D\\u043E\\u0447\\u0456\"],e],[[\"\\u043F\\u0456\\u0432\\u043D\\u0456\\u0447\",\"\\u043F\\u043E\\u043B\\u0443\\u0434\\u0435\\u043D\\u044C\",\"\\u0440\\u0430\\u043D\\u043E\\u043A\",\"\\u0434\\u0435\\u043D\\u044C\",\"\\u0432\\u0435\\u0447\\u0456\\u0440\",\"\\u043D\\u0456\\u0447\"],e,e],[\"00:00\",\"12:00\",[\"04:00\",\"12:00\"],[\"12:00\",\"18:00\"],[\"18:00\",\"24:00\"],[\"00:00\",\"04:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a;return 5}i.ng.common.locales.zh=[\"zh\",[[\"\\u4E0A\\u5348\",\"\\u4E0B\\u5348\"],e,e],e,[[\"\\u65E5\",\"\\u4E00\",\"\\u4E8C\",\"\\u4E09\",\"\\u56DB\",\"\\u4E94\",\"\\u516D\"],[\"\\u5468\\u65E5\",\"\\u5468\\u4E00\",\"\\u5468\\u4E8C\",\"\\u5468\\u4E09\",\"\\u5468\\u56DB\",\"\\u5468\\u4E94\",\"\\u5468\\u516D\"],[\"\\u661F\\u671F\\u65E5\",\"\\u661F\\u671F\\u4E00\",\"\\u661F\\u671F\\u4E8C\",\"\\u661F\\u671F\\u4E09\",\"\\u661F\\u671F\\u56DB\",\"\\u661F\\u671F\\u4E94\",\"\\u661F\\u671F\\u516D\"],[\"\\u5468\\u65E5\",\"\\u5468\\u4E00\",\"\\u5468\\u4E8C\",\"\\u5468\\u4E09\",\"\\u5468\\u56DB\",\"\\u5468\\u4E94\",\"\\u5468\\u516D\"]],e,[[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\"],[\"1\\u6708\",\"2\\u6708\",\"3\\u6708\",\"4\\u6708\",\"5\\u6708\",\"6\\u6708\",\"7\\u6708\",\"8\\u6708\",\"9\\u6708\",\"10\\u6708\",\"11\\u6708\",\"12\\u6708\"],[\"\\u4E00\\u6708\",\"\\u4E8C\\u6708\",\"\\u4E09\\u6708\",\"\\u56DB\\u6708\",\"\\u4E94\\u6708\",\"\\u516D\\u6708\",\"\\u4E03\\u6708\",\"\\u516B\\u6708\",\"\\u4E5D\\u6708\",\"\\u5341\\u6708\",\"\\u5341\\u4E00\\u6708\",\"\\u5341\\u4E8C\\u6708\"]],e,[[\"\\u516C\\u5143\\u524D\",\"\\u516C\\u5143\"],e,e],0,[6,0],[\"y/M/d\",\"y\\u5E74M\\u6708d\\u65E5\",e,\"y\\u5E74M\\u6708d\\u65E5EEEE\"],[\"HH:mm\",\"HH:mm:ss\",\"z HH:mm:ss\",\"zzzz HH:mm:ss\"],[\"{1} {0}\",e,e,e],[\".\",\",\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"\\xA4#,##0.00\",\"#E0\"],\"CNY\",\"\\xA5\",\"\\u4EBA\\u6C11\\u5E01\",{AUD:[\"AU$\",\"$\"],BYN:[e,\"\\u0440.\"],CNY:[\"\\xA5\"],ILR:[\"ILS\"],JPY:[\"JP\\xA5\",\"\\xA5\"],KRW:[\"\\uFFE6\",\"\\u20A9\"],PHP:[e,\"\\u20B1\"],RUR:[e,\"\\u0440.\"],TWD:[\"NT$\"],USD:[\"US$\",\"$\"],XXX:[]},\"ltr\",l,[[[\"\\u5348\\u591C\",\"\\u65E9\\u4E0A\",\"\\u4E0A\\u5348\",\"\\u4E2D\\u5348\",\"\\u4E0B\\u5348\",\"\\u665A\\u4E0A\",\"\\u51CC\\u6668\"],e,[\"\\u5348\\u591C\",\"\\u6E05\\u6668\",\"\\u4E0A\\u5348\",\"\\u4E2D\\u5348\",\"\\u4E0B\\u5348\",\"\\u665A\\u4E0A\",\"\\u51CC\\u6668\"]],[[\"\\u5348\\u591C\",\"\\u65E9\\u4E0A\",\"\\u4E0A\\u5348\",\"\\u4E2D\\u5348\",\"\\u4E0B\\u5348\",\"\\u665A\\u4E0A\",\"\\u51CC\\u6668\"],e,e],[\"00:00\",[\"05:00\",\"08:00\"],[\"08:00\",\"12:00\"],[\"12:00\",\"13:00\"],[\"13:00\",\"19:00\"],[\"19:00\",\"24:00\"],[\"00:00\",\"05:00\"]]]]})(globalThis);(function(i){var t,r,n,o,c;(t=i.ng)!=null||(i.ng={}),(n=(r=i.ng).common)!=null||(r.common={}),(c=(o=i.ng.common).locales)!=null||(o.locales={});let e=void 0;function l(a){let u=a,d=Math.floor(Math.abs(a)),p=a.toString().replace(/^[^.]*\\.?/,\"\").length,f=parseInt(a.toString().replace(/^[^e]*(e([-+]?\\d+))?/,\"$2\"))||0;return d===Math.floor(d)&&d>=0&&d<=1?1:f===0&&d!==0&&d%1e6===0&&p===0||!(f>=0&&f<=5)?4:5}i.ng.common.locales.pt=[\"pt\",[[\"AM\",\"PM\"],e,e],e,[[\"D\",\"S\",\"T\",\"Q\",\"Q\",\"S\",\"S\"],[\"dom.\",\"seg.\",\"ter.\",\"qua.\",\"qui.\",\"sex.\",\"s\\xE1b.\"],[\"domingo\",\"segunda-feira\",\"ter\\xE7a-feira\",\"quarta-feira\",\"quinta-feira\",\"sexta-feira\",\"s\\xE1bado\"],[\"dom.\",\"seg.\",\"ter.\",\"qua.\",\"qui.\",\"sex.\",\"s\\xE1b.\"]],e,[[\"J\",\"F\",\"M\",\"A\",\"M\",\"J\",\"J\",\"A\",\"S\",\"O\",\"N\",\"D\"],[\"jan.\",\"fev.\",\"mar.\",\"abr.\",\"mai.\",\"jun.\",\"jul.\",\"ago.\",\"set.\",\"out.\",\"nov.\",\"dez.\"],[\"janeiro\",\"fevereiro\",\"mar\\xE7o\",\"abril\",\"maio\",\"junho\",\"julho\",\"agosto\",\"setembro\",\"outubro\",\"novembro\",\"dezembro\"]],e,[[\"a.C.\",\"d.C.\"],e,[\"antes de Cristo\",\"depois de Cristo\"]],0,[6,0],[\"dd/MM/y\",\"d 'de' MMM 'de' y\",\"d 'de' MMMM 'de' y\",\"EEEE, d 'de' MMMM 'de' y\"],[\"HH:mm\",\"HH:mm:ss\",\"HH:mm:ss z\",\"HH:mm:ss zzzz\"],[\"{1} {0}\",e,e,e],[\",\",\".\",\";\",\"%\",\"+\",\"-\",\"E\",\"\\xD7\",\"\\u2030\",\"\\u221E\",\"NaN\",\":\"],[\"#,##0.###\",\"#,##0%\",\"\\xA4\\xA0#,##0.00\",\"#E0\"],\"BRL\",\"R$\",\"Real brasileiro\",{AUD:[\"AU$\",\"$\"],BYN:[e,\"\\u0440.\"],JPY:[\"JP\\xA5\",\"\\xA5\"],PHP:[e,\"\\u20B1\"],PTE:[\"Esc.\"],RON:[e,\"L\"],SYP:[e,\"S\\xA3\"],THB:[\"\\u0E3F\"],TWD:[\"NT$\"],USD:[\"US$\",\"$\"]},\"ltr\",l,[[[\"meia-noite\",\"meio-dia\",\"da manh\\xE3\",\"da tarde\",\"da noite\",\"da madrugada\"],e,e],[[\"meia-noite\",\"meio-dia\",\"manh\\xE3\",\"tarde\",\"noite\",\"madrugada\"],e,e],[\"00:00\",\"12:00\",[\"06:00\",\"12:00\"],[\"12:00\",\"19:00\"],[\"19:00\",\"24:00\"],[\"00:00\",\"06:00\"]]]]})(globalThis);var pn=[{provide:St,useClass:$i,multi:!0},{provide:St,useClass:Fr,multi:!0}],zi=(()=>{let e=class e{static forRoot(t){return{ngModule:e,providers:[{provide:Ei,useFactory:t}]}}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275mod\",tr({type:e})),s(e,\"\\u0275inj\",er({providers:[pn,Ai,Pr(wr())],imports:[Mr,Dr,Mt,Br,et,Mt]}));let i=e;return i})();var Bi=(()=>{let e=class e{constructor(t){s(this,\"translate\");s(this,\"translatePaths\");this.translate=t}transform(t,r,n,o=!1){if(!t||!r)return\"\";if(this.translatePaths=n!=null?n:{pluralGenitive:\".plural-genitive\",nominative:\".nominative\",genitive:\".genitive\",accusative:\".accusative\"},typeof Intl.PluralRules>\"u\")return this.fallbackTransform(t,r,o);let c=this.translate.currentLang;switch(new Intl.PluralRules(c).select(r)){case\"one\":return o?this.translate.instant(t+this.translatePaths.accusative):this.translate.instant(t+this.translatePaths.nominative);case\"few\":return this.translate.instant(t+this.translatePaths.genitive);default:return this.translate.instant(t+this.translatePaths.pluralGenitive)}}fallbackTransform(t,r,n){let o=c=>Number(c.toString().substring(c.toString().length-2,c.toString().length));if(n&&o(r)!==11&&r%10===1){let c=t+this.translatePaths.accusative,a=this.translate.instant(t+this.translatePaths.accusative);return a===c?this.translate.instant(t+this.translatePaths.nominative):a}return r%10===1&&o(r)!==11?this.translate.instant(t+this.translatePaths.nominative):(r%10===2||r%10===3||r%10===4)&&!(r%100>=12&&r%100<=14)?this.translate.instant(t+this.translatePaths.genitive):this.translate.instant(t+this.translatePaths.pluralGenitive)}};s(e,\"\\u0275fac\",function(r){return new(r||e)(G(Z,16))}),s(e,\"\\u0275pipe\",Te({name:\"wordNumeralCase\",type:e,pure:!0,standalone:!0}));let i=e;return i})();var Li=Q(\"Browser\",{web:()=>import(\"./web-JRKSXIJX.js\").then(i=>new i.BrowserWeb)});var Ut=Q(\"Device\",{web:()=>import(\"./web-BHGITXYE.js\").then(i=>new i.DeviceWeb)});var ae=Q(\"PushNotifications\",{});var Ht=function(i){return i.Dark=\"DARK\",i.Light=\"LIGHT\",i.Default=\"DEFAULT\",i}(Ht||{});var ut=Q(\"StatusBar\");var Oi=(()=>{let e=class e{constructor(){s(this,\"text\")}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275cmp\",O({type:e,selectors:[[\"ui-kit-notice-modal-text\"]],inputs:{text:\"text\"},decls:1,vars:1,consts:[[1,\"ui-kit-notice-modal-text\",3,\"innerHTML\"]],template:function(r,n){r&1&&W(0,\"div\",0),r&2&&H(\"innerHTML\",n.text,Ge)},styles:['@charset \"UTF-8\";.ui-kit-notice-modal-text{white-space:normal;margin-top:16px;color:var(--y-core-color-text-primary);font-style:normal;font-weight:400;font-size:16px;line-height:24px;text-align:center}.ui-kit-notice-modal-text .link-in-text{color:var(--y-core-color-text-accent);cursor:pointer}\\n'],encapsulation:2,changeDetection:0}));let i=e;return i})();function hn(i,e){if(i&1){let l=lr();K(0,\"ui-kit-button\",3),Ue(1,\"titlecase\"),Xe(\"click\",function(){ir(l);let r=be();return nr(r.buttonClick())}),_()}if(i&2){let l=be();H(\"title\",He(1,1,l.buttonTitleKey))}}var gn=/((http:|https:)[^\\s]*)/gi,_i=(()=>{let e=class e{constructor(){s(this,\"noticeText\",\"\");s(this,\"buttonTitleKey\");s(this,\"iconName\",\"bell\");s(this,\"onButtonClick\",()=>{})}set text(t){this.noticeText=this.addLinksToText(t)}buttonClick(){this.onButtonClick()}addLinksToText(t){return t.replace(gn,'<a class=\"link-in-text\" target=\"_blank\" href=\"$&\">$&</a>')}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275cmp\",O({type:e,selectors:[[\"ui-kit-notice-modal-info\"]],inputs:{text:\"text\",buttonTitleKey:\"buttonTitleKey\",iconName:\"iconName\",onButtonClick:\"onButtonClick\"},decls:3,vars:3,consts:[[1,\"icon\",3,\"name\"],[3,\"text\"],[\"class\",\"button\",3,\"title\",\"click\",4,\"ngIf\"],[1,\"button\",3,\"click\",\"title\"]],template:function(r,n){r&1&&(W(0,\"ui-kit-svg-icon\",0)(1,\"ui-kit-notice-modal-text\",1),De(2,hn,2,3,\"ui-kit-button\",2)),r&2&&(H(\"name\",n.iconName),U(),H(\"text\",n.noticeText),U(),H(\"ngIf\",n.buttonTitleKey))},dependencies:[gr,he,jr,Oi,vr],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;padding:0 16px 32px;height:fit-content}[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{width:72px;height:72px;border-radius:50%;padding:15px;background-color:var(--y-core-color-surface-accent-low);color:var(--y-core-color-icon-accent);display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .button[_ngcontent-%COMP%]{width:100%;margin-top:24px}'],changeDetection:0}));let i=e;return i})();var xt=Q(\"App\",{web:()=>import(\"./web-5T4KVFRM.js\").then(i=>new i.AppWeb)});var yn=/((http:|https:)[^\\s]*)/gi,ji=(()=>{let e=class e{constructor(){s(this,\"textMessage\",\"\");s(this,\"dateTimeLabel\");s(this,\"isRead\",!1);s(this,\"iconName\",\"bell\")}set text(t){this.textMessage=this.addLinksToText(t)}addLinksToText(t){return t.replace(yn,'<span class=\"link-like\">$&</span>')}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275cmp\",O({type:e,selectors:[[\"ui-kit-notice-card\"]],inputs:{dateTimeLabel:\"dateTimeLabel\",text:\"text\",isRead:\"isRead\",iconName:\"iconName\"},decls:7,vars:5,consts:[[1,\"notice-card\"],[1,\"icon-container\"],[1,\"icon\",3,\"name\"],[1,\"content-container\"],[1,\"time-label\"],[1,\"content-text\",\"overflow-ellipsis\",3,\"innerHTML\"]],template:function(r,n){r&1&&(K(0,\"div\",0)(1,\"div\",1),W(2,\"ui-kit-svg-icon\",2),_(),K(3,\"div\",3)(4,\"span\",4),me(5),_(),W(6,\"div\",5),_()()),r&2&&(cr(\"is-read\",n.isRead),U(2),H(\"name\",n.iconName),U(3),$e(n.dateTimeLabel),U(),H(\"innerHTML\",n.textMessage,Ge))},dependencies:[he],styles:['@charset \"UTF-8\";.notice-card{display:flex;width:100%;padding:20px 24px;border-radius:24px;background-color:var(--y-core-color-surface-primary);height:fit-content}.notice-card .icon-container{width:48px;height:48px;border-radius:50%;background-color:var(--y-core-color-surface-accent-low);display:flex;justify-content:center;align-items:center;padding:9px;flex-shrink:0}.notice-card .icon{color:var(--y-core-color-icon-accent);width:100%;height:100%}.notice-card .content-container{margin-left:12px;overflow:hidden}.notice-card .time-label{color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:12px;line-height:16px}.notice-card .content-text{white-space:normal;margin-top:4px;color:var(--y-core-color-text-primary);font-style:normal;font-weight:500;font-size:16px;line-height:24px;display:-webkit-box;overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-overflow:ellipsis;word-break:break-word}.notice-card .content-text .link-like{color:var(--y-core-color-text-accent);cursor:pointer}.notice-card.is-read{background-color:var(--y-core-color-surface-primary)}.notice-card.is-read .icon-container{background-color:var(--y-core-color-surface-accent-low)}.notice-card.is-read .icon{color:var(--y-core-color-icon-secondary)}\\n'],encapsulation:2,changeDetection:0}));let i=e;return i})();var Fi={time:[1,73],\"calendar-checkmark\":[2,8],\"party-confetti\":[3],close:[4],review:[6,20],\"check-thin\":[9],sales:[16,17],bell:[0,55,72]},zt=i=>Object.keys(Fi).find(l=>Fi[l].includes(i))||\"bell\",qs=(()=>{let e=class e{constructor(t,r){s(this,\"datePipe\");s(this,\"translate\");s(this,\"text\");s(this,\"isRead\",!1);s(this,\"dateTimeLabel\",\"\");s(this,\"iconName\",\"bell\");this.datePipe=t,this.translate=r}set sendDate(t){let r=yi(t),n=new Date(r),o=new Date,c=this.datePipe.transform(n.toISOString(),\"longDate\"),a=this.datePipe.transform(o.toISOString(),\"longDate\"),u=this.datePipe.transform(r,\"shortTime\");if(c===a){let d=this.translate.instant(\"today\"),p=d.charAt(0).toUpperCase()+d.slice(1);this.dateTimeLabel=\"\".concat(p,\", \").concat(u)}else{let d=this.datePipe.transform(r,\"dayMonth\");this.dateTimeLabel=\"\".concat(d,\", \").concat(u)}}set typeId(t){this.iconName=zt(this.typeId)}};s(e,\"\\u0275fac\",function(r){return new(r||e)(G($t),G(Z))}),s(e,\"\\u0275cmp\",O({type:e,selectors:[[\"app-notice-card\"]],inputs:{sendDate:\"sendDate\",text:\"text\",isRead:\"isRead\",typeId:\"typeId\"},decls:1,vars:4,consts:[[3,\"dateTimeLabel\",\"text\",\"isRead\",\"iconName\"]],template:function(r,n){r&1&&W(0,\"ui-kit-notice-card\",0),r&2&&H(\"dateTimeLabel\",n.dateTimeLabel)(\"text\",n.text)(\"isRead\",n.isRead)(\"iconName\",n.iconName)},dependencies:[ji],changeDetection:0}));let i=e;return i})();var Re=Q(\"Badge\",{web:()=>import(\"./web-TQMEAYVE.js\").then(i=>new i.BadgeWeb)});var Ki=(()=>{let e=class e{getCount(){return h(this,null,function*(){return(yield Re.get()).count})}setCount(t){return h(this,null,function*(){yield Re.set({count:t})})}increase(){return h(this,null,function*(){yield Re.increase()})}decrease(){return h(this,null,function*(){yield Re.decrease()})}checkPermissions(){return h(this,null,function*(){return(yield Re.checkPermissions()).display})}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275prov\",P({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let i=e;return i})();var Pe=function(i){return i.web=\"web\",i.ios=\"ios\",i.android=\"android\",i}(Pe||{}),Wi=(()=>{let e=class e{constructor(){s(this,\"store\",I(q));s(this,\"document\",I(Ze));s(this,\"http\",I(Ir));s(this,\"modalService\",I(Or));s(this,\"translateService\",I(Z));s(this,\"badgeService\",I(Ki));s(this,\"bookFormId$\",this.store.select(m.bookform.getBookformId).pipe(C(t=>Number.isInteger(t))));s(this,\"userPhone$\",this.store.select(m.user.getUser).pipe(M(t=>t==null?void 0:t.phone)));s(this,\"isLoggedIn$\",this.store.select(m.user.isLoggedIn));s(this,\"notificationsUnreadCount$\",this.store.select(m.notifications.getUnreadCount));s(this,\"destroy$\",new Y(1));s(this,\"platform\",ze.getPlatform().toLowerCase());s(this,\"pushData\",{});s(this,\"isNeedScrollIntoViewWhenKeyboardDidOpened\",!1);s(this,\"appStateChanged$\",new ke);s(this,\"currentStatusPushPermission\",null);s(this,\"isRegistrationListenersInitialized\",!1)}ngOnDestroy(){return h(this,null,function*(){this.destroy$.next(),this.destroy$.complete(),yield xt.removeAllListeners()})}init(){return h(this,null,function*(){this.isNativePlatform()&&(xt.addListener(\"appStateChange\",({isActive:t})=>this.appStateChanged$.next(t)),this.setClassesToDocument(),this.initPushNotifications(),yield this.initStatusBar(),yield this.initKeyboardListeners(),yield this.initFirebaseAnalytics(),this.badgeCountListener().subscribe())})}badgeCountListener(){return N([this.appStateChanged$,this.isLoggedIn$,this.userPhone$,this.notificationsUnreadCount$]).pipe(Je(0),$(o=>h(this,[o],function*([,t,r,n]){yield this.getPushNotificationPermissions(),!(this.currentStatusPushPermission===\"granted\")||!t||!r?yield this.badgeService.setCount(0):n>=0&&(yield this.badgeService.setCount(n))})),k(this.destroy$))}initPushNotifications(){this.isLoggedIn$.pipe(It(),pe(),F(this.bookFormId$,this.userPhone$),k(this.destroy$)).subscribe(o=>h(this,[o],function*([t,r,n]){t?(yield this.getPushNotificationPermissions(),this.currentStatusPushPermission===\"granted\"&&(yield this.handlerOnGrantedAccessPushNotifications(r,n))):yield this.handlerOnDeniedAccessPushNotifications()})),this.getAppStateChanged().pipe(F(this.isLoggedIn$,this.bookFormId$,this.userPhone$),k(this.destroy$)).subscribe(c=>h(this,[c],function*([t,r,n,o]){if(!t)return;let a=this.currentStatusPushPermission;yield this.getPushNotificationPermissions(),a===\"denied\"&&this.currentStatusPushPermission===\"granted\"&&r&&(yield this.handlerOnGrantedAccessPushNotifications(n,o)),a===\"granted\"&&this.currentStatusPushPermission===\"denied\"&&(yield this.handlerOnDeniedAccessPushNotifications())}))}handlerOnGrantedAccessPushNotifications(t,r){return h(this,null,function*(){yield this.initPushNotificationsListeners(t,r),yield ae.register()})}handlerOnDeniedAccessPushNotifications(){return h(this,null,function*(){yield ae.removeAllListeners();try{yield ae.removeAllDeliveredNotifications()}catch{}yield ae.unregister(),yield this.badgeService.setCount(0),this.isRegistrationListenersInitialized=!1})}initPushNotificationsListeners(t,r){return h(this,null,function*(){ae.addListener(\"registration\",n=>h(this,null,function*(){var o;this.isRegistrationListenersInitialized||(this.isRegistrationListenersInitialized=!0,this.syncPushData({token:n.value,uuid:(o=yield Ut.getId())==null?void 0:o.identifier,bundle_id:Ie.capacitorBundleId,bookform_id:t,phone:r,type_slug:\"fcm\",mobile_market_type_slug:this.platform,firebase_account_id:Ie.firebaseId+\"\"}))})),yield ae.addListener(\"pushNotificationReceived\",()=>{this.isLoggedIn$.pipe(R(),C(n=>!!r&&n&&!!this.pushData.phone),k(this.destroy$)).subscribe(()=>{this.store.dispatch(new Ci({showLoading:!1}))})}),yield ae.addListener(\"pushNotificationActionPerformed\",n=>{var o,c;if(r){let a={notificationId:n.notification.id,backendType:\"firebase\"};this.isNativePlatformIos()&&((o=n.notification.data)!=null&&o.bookingUserNotificationId)&&(a.notificationId=(c=n.notification.data)==null?void 0:c.bookingUserNotificationId,a.backendType=\"erp\"),this.store.dispatch(new ki(a))}this.showPushTextAlert(n.notification)})})}showPushTextAlert(t){var o,c;let r=((o=t.data)==null?void 0:o.body)||t.body,n=((c=t.data)==null?void 0:c.type)||0;r&&N([this.store.select(m.loader.getLoadingStatus),this.store.select(m.localization.getCurrentLoadedLanguage)]).pipe(It(),C(([a,u])=>!a&&!!u),R(),k(this.destroy$)).subscribe(()=>{this.modalService.openModal({component:_i,componentData:{text:r,buttonTitleKey:this.translateService.instant(\"notices.ok\"),iconName:zt(n),onButtonClick:()=>{this.modalService.closeModal()}},params:{modalType:Lr.default}})})}getPushNotificationPermissions(){return h(this,null,function*(){if(!this.isNativePlatform())return null;let t=yield ae.checkPermissions();return(t.receive===\"prompt\"||t.receive===\"prompt-with-rationale\")&&(t=yield ae.requestPermissions()),t.receive!==\"granted\"&&console.warn(\"User denied push notifications!\"),this.currentStatusPushPermission=t.receive,t.receive})}initStatusBar(){return h(this,null,function*(){return this.platform===Pe.android&&(yield ut.setBackgroundColor({color:\"#ffffff\"}),yield ut.setOverlaysWebView({overlay:!1})),ut.setStyle({style:Ht.Light})})}setClassesToDocument(){this.platform===Pe.ios&&this.document.documentElement.classList.add(\"native-ios\"),this.platform===Pe.android&&this.document.documentElement.classList.add(\"native-android\")}isNativePlatform(){return ze.isNativePlatform()}isNativePlatformIos(){return this.isNativePlatform()&&this.platform===Pe.ios}isNativePlatformAndroid(){return this.isNativePlatform()&&this.platform===Pe.android}isWeb(){return ze.getPlatform()===\"web\"}updatePushData(t){Object.assign(this.pushData,t)}getAppStateChanged(){return this.appStateChanged$.asObservable()}get canPostPushData(){return!!this.pushData&&!!this.pushData.phone&&!!this.pushData.token&&!!this.pushData.uuid&&!!this.pushData.mobile_market_type_slug&&!!this.pushData.bundle_id&&!!this.pushData.bookform_id&&!!this.pushData.type_slug}syncPushData(t){t&&this.updatePushData(t),this.canPostPushData&&this.http.put(\"\".concat(Ie.apiUrl,\"/app_token/client_app\"),this.pushData).pipe(z(1),k(this.destroy$)).subscribe()}initKeyboardListeners(){return h(this,null,function*(){this.isNativePlatformIos()&&(yield ge.setAccessoryBarVisible({isVisible:!0})),ge.addListener(\"keyboardWillShow\",t=>{let n=this.document.documentElement.getBoundingClientRect().height+this.document.documentElement.getBoundingClientRect().top,a=this.document.activeElement.getBoundingClientRect().top+this.document.activeElement.getBoundingClientRect().height+40;this.isNeedScrollIntoViewWhenKeyboardDidOpened=a>n-t.keyboardHeight}),ge.addListener(\"keyboardDidShow\",()=>h(this,null,function*(){let{platform:t,osVersion:r}=yield Ut.getInfo();this.isNeedScrollIntoViewWhenKeyboardDidOpened&&(t===\"ios\"&&Number(r)<16?this.document.activeElement.nextElementSibling.scrollIntoView({block:\"center\",behavior:\"smooth\"}):this.document.activeElement.scrollIntoView({block:\"center\",behavior:\"smooth\"}))})),this.platform===Pe.ios&&(ge.addListener(\"keyboardWillHide\",()=>{this.document.body.scrollTop=1}),ge.addListener(\"keyboardDidHide\",()=>{this.document.body.scrollTop=0}),ge.addListener(\"keyboardWillShow\",()=>{this.document.body.scrollTop=0}),ge.addListener(\"keyboardDidShow\",()=>{this.document.body.scrollTop=1}))})}initFirebaseAnalytics(){}isCapacitorApp(){return ze.isNativePlatform()}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275prov\",P({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let i=e;return i})();function Vi(){if(typeof process>\"u\"){var i=typeof window<\"u\"?window:{},e=5e3,l=Date.now(),t=!1;i.document.addEventListener(\"deviceready\",function(){console.log(\"Ionic Native: deviceready event fired after \"+(Date.now()-l)+\" ms\"),t=!0}),setTimeout(function(){!t&&i.cordova&&console.warn(\"Ionic Native: deviceready did not fire within \"+e+\"ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.\")},e)}}var Mn={error:\"cordova_not_available\"},In={error:\"plugin_not_installed\"};function Bt(i){var e=function(){if(Promise)return new Promise(function(n,o){i(n,o)});console.error(\"No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.\")};if(typeof window<\"u\"&&window.angular){var l=window.document,t=window.angular.element(l.querySelector(\"[ng-app]\")||l.body).injector();if(t){var r=t.get(\"$q\");return r(function(n,o){i(n,o)})}console.warn(\"Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.\")}return e()}function _e(i,e,l){var t,r;typeof i==\"string\"?t=i:(t=i.constructor.getPluginRef(),l=i.constructor.getPluginName(),r=i.constructor.getPluginInstallName());var n=Lt(t);return!n||e&&typeof n[e]>\"u\"?typeof window>\"u\"||!window.cordova?(kn(l,e),Mn):(Cn(l,r,e),In):!0}function pt(i,e){return i._objectInstance&&(!e||typeof i._objectInstance[e]<\"u\")}function Pn(i,e,l,t){if(e===void 0&&(e={}),e.sync)return i;if(e.callbackOrder===\"reverse\")i.unshift(t),i.unshift(l);else if(e.callbackStyle===\"node\")i.push(function(c,a){c?t(c):l(a)});else if(e.callbackStyle===\"object\"&&e.successName&&e.errorName){var r={};r[e.successName]=l,r[e.errorName]=t,i.push(r)}else if(typeof e.successIndex<\"u\"||typeof e.errorIndex<\"u\"){var n=function(){e.successIndex>i.length?i[e.successIndex]=l:i.splice(e.successIndex,0,l)},o=function(){e.errorIndex>i.length?i[e.errorIndex]=t:i.splice(e.errorIndex,0,t)};e.successIndex>e.errorIndex?(o(),n()):(n(),o())}else i.push(l),i.push(t);return i}function de(i,e,l,t,r,n){if(t===void 0&&(t={}),l=Pn(l,t,r,n),pt(i,e))return i._objectInstance[e].apply(i._objectInstance,l)}function Lt(i){return typeof window<\"u\"?wn(window,i):null}function wn(i,e){for(var l=e.split(\".\"),t=i,r=0;r<l.length;r++){if(!t)return null;t=t[l[r]]}return t}function Cn(i,e,l){console.warn(l?\"Native: tried calling \"+i+\".\"+l+\", but the \"+i+\" plugin is not installed.\":\"Native: tried accessing the \"+i+\" plugin but it's not installed.\"),e&&console.warn(\"Install the \"+i+\" plugin: 'ionic cordova plugin add \"+e+\"'\")}function kn(i,e){typeof process>\"u\"&&console.warn(e?\"Native: tried calling \"+i+\".\"+e+\", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator\":\"Native: tried accessing the \"+i+\" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator\")}function Ji(i,e,l){return l===void 0&&(l={}),function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(l.sync)return de(i,e,t,l);if(l.observable)return new Ce(function(a){var u;return l.destruct?u=de(i,e,t,l,function(){for(var d=[],p=0;p<arguments.length;p++)d[p]=arguments[p];return a.next(d)},function(){for(var d=[],p=0;p<arguments.length;p++)d[p]=arguments[p];return a.error(d)}):u=de(i,e,t,l,a.next.bind(a),a.error.bind(a)),u&&u.error&&a.error(u.error),function(){try{return l.clearWithArgs?de(i,l.clearFunction,t,l,a.next.bind(a),a.error.bind(a)):de(i,l.clearFunction,[])}catch(d){console.warn(\"Unable to clear the previous observable watch for\",i.constructor.getPluginName(),e),console.warn(d)}}});if(l.otherPromise)return Bt(function(a,u){var d;l.destruct?d=de(i,e,t,l,function(){for(var p=[],f=0;f<arguments.length;f++)p[f]=arguments[f];return a(p)},function(){for(var p=[],f=0;f<arguments.length;f++)p[f]=arguments[f];return u(p)}):d=de(i,e,t,l,a,u),d&&d.then?d.then(a,u):u()});var n,o,c=Bt(function(a,u){l.destruct?n=de(i,e,t,l,function(){for(var d=[],p=0;p<arguments.length;p++)d[p]=arguments[p];return a(d)},function(){for(var d=[],p=0;p<arguments.length;p++)d[p]=arguments[p];return u(d)}):n=de(i,e,t,l,a,u),o=u});return n&&n.error&&(c.catch(function(){}),typeof o==\"function\"&&o(n.error)),c}}function Yi(i,e){for(var l=e.split(\".\"),t=i,r=0;r<l.length;r++){if(!t)return null;t=t[l[r]]}return t}var Ot=function(){function i(){}return i.installed=function(){var e=_e(this.pluginRef)===!0;return e},i.getPlugin=function(){return typeof window<\"u\"?Yi(window,this.pluginRef):null},i.getPluginName=function(){var e=this.pluginName;return e},i.getPluginRef=function(){var e=this.pluginRef;return e},i.getPluginInstallName=function(){var e=this.plugin;return e},i.getSupportedPlatforms=function(){var e=this.platforms;return e},i.pluginName=\"\",i.pluginRef=\"\",i.plugin=\"\",i.repo=\"\",i.platforms=[],i.install=\"\",i}();function we(i,e,l,t){return t=Array.from(t),Ji(i,e,l).apply(this,t)}Vi();var Dn=function(){function i(e,l,t){try{t&&typeof t!=\"string\"&&(t=Object.keys(t).map(function(r){return r+\"=\"+t[r]}).join(\",\")),this._objectInstance=cordova.InAppBrowser.open(e,l,t)}catch{typeof window<\"u\"&&window.open(e,l),console.warn(\"Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.\")}}return i.prototype._loadAfterBeforeload=function(e){return we(this,\"_loadAfterBeforeload\",{sync:!0},arguments)},i.prototype.show=function(){return we(this,\"show\",{sync:!0},arguments)},i.prototype.close=function(){return we(this,\"close\",{sync:!0},arguments)},i.prototype.hide=function(){return we(this,\"hide\",{sync:!0},arguments)},i.prototype.executeScript=function(e){return we(this,\"executeScript\",{},arguments)},i.prototype.insertCSS=function(e){return we(this,\"insertCSS\",{},arguments)},i.prototype.on=function(e){var l=this;return function(){if(pt(l)===!0)return new Ce(function(t){return l._objectInstance.addEventListener(e,t.next.bind(t)),function(){return l._objectInstance.removeEventListener(e,t.next.bind(t))}})}()},i}();var Gi=function(i){Wt(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.create=function(l,t,r){return new Dn(l,t,r)},e.\\u0275fac=(()=>{let l;return function(r){return(l||(l=or(e)))(r||e)}})(),e.\\u0275prov=P({token:e,factory:e.\\u0275fac}),e.pluginName=\"InAppBrowser\",e.plugin=\"cordova-plugin-inappbrowser\",e.pluginRef=\"cordova.InAppBrowser\",e.repo=\"https://github.com/apache/cordova-plugin-inappbrowser\",e.platforms=[\"AmazonFire OS\",\"Android\",\"Browser\",\"iOS\",\"macOS\",\"Windows\"],e=Vt([],e),e}(Ot);var qi=(()=>{let e=class e{constructor(t,r,n,o,c,a){s(this,\"capacitorService\");s(this,\"inAppBrowser\");s(this,\"router\");s(this,\"location\");s(this,\"storeSnapshotService\");s(this,\"bridgeService\");this.capacitorService=t,this.inAppBrowser=r,this.router=n,this.location=o,this.storeSnapshotService=c,this.bridgeService=a}open(t,r=!1){return h(this,null,function*(){var n;if(this.capacitorService.isNativePlatform())return Li.open({url:t});r?(n=window.open(t,\"_blank\"))==null||n.focus():window.open(t,\"_blank\")})}openPaymentPage(t,r,n=!1){var o;if(this.capacitorService.isNativePlatform()){let c=this.openPageInApp(t);return c.on(\"loadstart\").pipe(C(a=>a.url.includes(Ni.successOrder)),$(()=>{c.close(),this.router.navigateByUrl(r)}),M(()=>{}))}else{this.location.replaceState(r);let c=this.storeSnapshotService.selectSnapshot(m.widgetSettings.getWidgetUseExternalLinkHook);return(e.isInIframe()||n)&&!c?((o=window.open(t,\"_blank\"))==null||o.focus(),this.router.navigateByUrl(r)):c?this.bridgeService.post(new Ti(Di.open_external_link,{link:t})):window.location.href=t,Ve}}static isInIframe(){try{return window.self!==window.top}catch{return!0}}openPageInApp(t){let r={lefttoright:\"yes\",hideurlbar:\"yes\",fullscreen:\"yes\",hardwareback:\"no\",zoom:\"no\",useWideViewPort:\"no\",hidenavigationbuttons:\"yes\",footer:\"no\",toolbar:\"no\",location:\"no\"};return this.inAppBrowser.create(t,\"_blank\",r)}};s(e,\"\\u0275fac\",function(r){return new(r||e)(y(Wi),y(Gi),y(X),y(Ne),y(te),y(bi))}),s(e,\"\\u0275prov\",P({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let i=e;return i})();function Rn(i,e){if(i&1&&(K(0,\"div\",0),W(1,\"ui-kit-svg-icon\",2),_()),i&2){let l=be();U(),H(\"name\",l.iconName)}}function En(i,e){if(i&1&&(K(0,\"div\",1),me(1),_()),i&2){let l=be();Ae(\"data-locator\",\"label_text\"),U(),qe(\" \",l.label,\" \")}}var oe=function(i){return i.bordered=\"bordered\",i.success=\"success\",i.discovery=\"discovery\",i.information=\"information\",i}(oe||{}),mc=(()=>{let e=class e{constructor(){s(this,\"label\");s(this,\"iconName\");s(this,\"tagType\")}get tagTypeClass(){return this.tagType}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275cmp\",O({type:e,selectors:[[\"ui-kit-tag\"]],hostVars:2,hostBindings:function(r,n){r&2&&dr(n.tagTypeClass)},inputs:{label:\"label\",iconName:\"iconName\",tagType:\"tagType\"},standalone:!0,features:[fr],decls:2,vars:2,consts:[[1,\"icon-container\"],[1,\"label\"],[3,\"name\"]],template:function(r,n){r&1&&De(0,Rn,2,1,\"div\",0)(1,En,2,2,\"div\",1),r&2&&(vt(n.iconName?0:-1),U(),vt(n.label?1:-1))},dependencies:[et,he],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:row;gap:4px;align-items:center;border-radius:8px;padding:4px 6px;width:fit-content;white-space:nowrap}[_nghost-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:16px;height:16px;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px}.bordered[_nghost-%COMP%]{background:none;border:1px solid var(--y-core-color-stroke-primary);color:var(--y-core-color-text-primary)}.bordered[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px}.success[_nghost-%COMP%]{background:var(--y-core-color-calm-surface-green-low);color:var(--y-core-color-calm-icon-green)}.success[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:var(--y-core-color-calm-text-green)}.discovery[_nghost-%COMP%]{background:var(--y-core-color-calm-surface-purple-low);color:var(--y-core-color-calm-icon-purple)}.discovery[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:var(--y-core-color-calm-text-purple)}.information[_nghost-%COMP%]{background:var(--y-core-color-calm-surface-blue-low);color:var(--y-core-color-calm-icon-blue)}.information[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:var(--y-core-color-calm-text-blue)}'],changeDetection:0}));let i=e;return i})();var se=function(i){return i.booking_successed=\"successed\",i.booking_link=\"link\",i.booking_rescheduled=\"rescheduled\",i.booking_cancelled=\"cancelled\",i.booking_payment_successful=\"payment_successful\",i.booking_payment_canceled=\"payment_canceled\",i.booking_payment_waiting=\"payment_waiting\",i}(se||{});var Zi=(()=>{let e=class e{transform(t){let r=t.charAt(0);if(!r)return\"\";let n=t.substr(1);return\"\".concat(r.toUpperCase()).concat(n)}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275pipe\",Te({name:\"capitalize\",type:e,pure:!0}));let i=e;return i})();var Qi=(()=>{let e=class e{constructor(t,r,n,o){s(this,\"pricePipe\");s(this,\"externalLinksService\");s(this,\"translate\");s(this,\"capitalize\");s(this,\"store\",I(te));s(this,\"currentOrderSelectedServices\");s(this,\"currentOrderServicesForPrepaid\");s(this,\"currentOrderServicesForPossiblePrepaid\");s(this,\"currentOrderSelectedMasters\");s(this,\"currentOrderSelectedCompany\");s(this,\"allowedToPayStatus$\",new ue(!1));s(this,\"allowedToUseAbonement$\",new ue(!1));s(this,\"company$\",this.store.select(m.currentCompany.getCurrentCompany));s(this,\"selectedServices$\",this.store.select(m.order.getSelectedServices));s(this,\"selectedMasters$\",this.store.select(m.order.getSelectedMasters));s(this,\"totalCost$\",N([this.selectedServices$,this.company$,this.allowedToUseAbonement$.asObservable()]).pipe(M(([t,r])=>this.getTotalCost$(t,r)),B(1)));s(this,\"activitiesTotalCost$\",N([this.selectedServices$,this.company$]).pipe(M(([t,r])=>this.getTotalCost$(t,r,!0)),B(1)));this.pricePipe=t,this.externalLinksService=r,this.translate=n,this.capitalize=o,this.getActivityServiceTotalCost$=this.getActivityServiceTotalCost$.bind(this)}isCompanyPayActive(){var t;return!!((t=this.store.selectSnapshot(m.currentCompany.getCurrentCompany))!=null&&t.is_charge_active)}hasCompanyAbonementRestriction(){var t;return(t=this.store.selectSnapshot(m.currentCompany.getCurrentCompany))==null?void 0:t.is_abonement_restriction_enabled}isHybridPayService(t){return t.prepaid===Se.REQUIRED||!this.hasServicesAbonementRestriction([t])}hasPayServices(t){return this.isCompanyPayActive()&&t.some(r=>r.prepaid==Se.REQUIRED)}hasServicesAbonementRestriction(t){return this.hasCompanyAbonementRestriction()&&t.some(r=>r.abonement_restriction)}getServiceTags(t,r=!0,n=!1){var u,d;let o=[],c=n||t.trial_settings&&this.store.selectSnapshot(m.order.getIsTrialVisitActivated);this.hasServicesAbonementRestriction([t])&&!c&&o.unshift({tagType:oe.bordered,tagLabel:this.capitalize.transform(this.translate.instant(\"loyalty.subscription.restrict-record-creation\")),tagIconName:\"order/abonement-pay\"});let a=this.store.selectSnapshot(m.order.isActivityOrder);if(o.length===0||a){let p=this.store.selectSnapshot(m.currentCompany.getCurrentCompany);if(this.hasPayServices([t])){let f=\"\";t.prepaid_settings.prepaid_min.percent?f=\"\".concat(t.prepaid_settings.prepaid_min.percent,\"%\"):f=\"\".concat(t.prepaid_settings.prepaid_min.amount,\" \").concat(p==null?void 0:p.currency_short_title),o.unshift({tagType:oe.bordered,tagLabel:f+\" \"+this.translate.instant(\"prepaid.prepaid_lowercase\"),tagIconName:\"order/successed\"})}else if(this.allowedToPayStatus$.value)o.unshift({tagType:oe.bordered,tagLabel:\"100% \".concat(this.translate.instant(\"prepaid.prepaid_lowercase\")),tagIconName:\"order/successed\"});else if(o.length===0){let f=this.store.selectSnapshot(m.order.getSelectedMasters);this.hasPayMasters(f)&&o.unshift({tagType:oe.bordered,tagLabel:\"100% \".concat(this.translate.instant(\"prepaid.prepaid_lowercase\")),tagIconName:\"order/successed\"})}c&&o.push({tagType:oe.discovery,tagLabel:this.translate.instant(\"activity.visit_type.tag_label\"),tagIconName:\"\"})}if((u=t.composite_details)!=null&&u.links&&r){let p=t.composite_details.links.reduce((v,j)=>{var D;return v+((D=j.price_min)!=null?D:0)},0),f=(d=t.price_min)!=null?d:0;if(p>0&&f>0&&f<p){let v=100-Math.round(f*100/p);v>=5&&o.push({tagType:oe.success,tagLabel:\"\".concat(this.translate.instant(\"prepaid.discount\"),\" \").concat(v,\"%\"),tagIconName:\"order/discount\"})}}return o}hasPayMasters(t){return this.isCompanyPayActive()&&t.some(r=>r.prepaid==ot.REQUIRED)}isHybridPayActivity(t){return t.service.prepaid===Se.REQUIRED||!this.hasActivitiesAbonementRestriction([t])}needPayActivities(t){return t.some(r=>r.service.prepaid===Se.REQUIRED||!this.hasActivitiesAbonementRestriction([r])&&r.staff.prepaid===ot.REQUIRED)}hasActivitiesAbonementRestriction(t){return this.hasCompanyAbonementRestriction()&&t.some(r=>r.service.abonement_restriction)}getActivityTags(t){let r=[];if(this.needPayActivities([t])&&this.isCompanyPayActive()&&r.push({tagType:oe.bordered,tagLabel:\"100% \".concat(this.translate.instant(\"prepaid.prepaid_lowercase\")),tagIconName:\"order/successed\"}),this.hasActivitiesAbonementRestriction([t])&&r.push({tagType:oe.bordered,tagLabel:this.capitalize.transform(this.translate.instant(\"loyalty.subscription.restrict-record-creation\")),tagIconName:\"order/abonement-pay\"}),t.service.trial_settings){let n=t.service.trial_settings.price===0;r.push({tagType:oe.discovery,tagLabel:n?\"\".concat(this.translate.instant(\"activity.visit_type.tag_label\"),\" (\").concat(this.translate.instant(\"activity.visit_type.tag_free_label\"),\")\"):\"\".concat(this.translate.instant(\"activity.visit_type.tag_label\"),\" \").concat(this.pricePipe.transform({price_min:t.service.trial_settings.price,price_max:t.service.trial_settings.price})),tagIconName:\"common/rocket\"})}return r}needPayOrder(t,r){return!!t&&this.hasPayServices([t])||!!r&&!this.hasServicesAbonementRestriction([t])&&this.hasPayMasters(r)}getActivityServiceTotalCost$(t){return this.company$.pipe(M(r=>this.getTotalCost$([t],r,!0)))}init(){return N([this.company$,this.selectedMasters$,this.selectedServices$]).pipe(C(([t])=>!!t),pe(([t,r,n],[o,c,a])=>Pt(t,o)&&JSON.stringify(r)===JSON.stringify(c)&&n.length===a.length&&n.every((u,d)=>{Pt(u,a[d])})),$(([t,r,n])=>{this.currentOrderSelectedServices=n,this.currentOrderSelectedMasters=r,this.currentOrderSelectedCompany=t,this.updateServicesForPay()}))}setAllowedToPayStatus(t){this.allowedToPayStatus$.next(t)}setAllowedToUseAbonement(t){this.allowedToUseAbonement$.next(t)}abonementRestrictionRequired(t){let r=c=>!!c.service.abonement_restriction,n=c=>c.abonement_restriction;return(\"prepaid_settings\"in t?n(t):r(t))&&this.currentOrderSelectedCompany.is_abonement_restriction_enabled}orderAbonementRestrictionRequired(){return this.currentOrderSelectedServices.some(t=>this.abonementRestrictionRequired(t))}isPayActive(t){var r;return t!=null?t:(r=this.currentOrderSelectedCompany)==null?void 0:r.is_charge_active}staffPayEnabled(t){return Kr(t)?this.isPayActive()&&t.prepaid===ot.REQUIRED:!1}updateServicesForPay(){let t=this.getServicesForPrepaid(this.currentOrderSelectedServices);this.currentOrderServicesForPrepaid=t.servicesForPrepaid,this.currentOrderServicesForPossiblePrepaid=t.servicesForPossiblePrepaid}isNeedPayCurrentOrder(t=!1){return!this.isPayActive()||this.allowedToUseAbonement$.value?!1:this.getPaidStatus(null,t).amount!==0}getPaidStatus(t,r=!1){var n,o;if(t){let c=t.prepaid_confirmed?t.paid_amount:0,a=c===this.getMinPriceFromServices(t.services)&&c===this.getMaxPriceFromServices(t.services),u=t.prepaid_confirmed&&t.paid_amount!==0;return{amount:c,amountLocalizedString:Le.getLocalizedPrice(c,(n=this.currentOrderSelectedCompany)==null?void 0:n.currency_short_title),isRecordPrepaid:u,isRecordPrepaidFull:u&&a,isRecordPrepaidPartly:u&&!a}}else{let c=r?this.currentOrderServicesForPossiblePrepaid:this.currentOrderServicesForPrepaid,a=this.getCurrentOrderPrepaidPrice(c),u=a===this.getMinPriceFromServices(c)&&a===this.getMaxPriceFromServices(c);return{amount:a,amountLocalizedString:a?Le.getLocalizedPrice(a,(o=this.currentOrderSelectedCompany)==null?void 0:o.currency_short_title):\"\",isRecordPrepaid:a!==0,isRecordPrepaidFull:a!==0&&u,isRecordPrepaidPartly:a!==0&&!u}}}getRecordPrepaidStatus(t){if(!t.prepaid)return\"success_record\";switch(this.identifyOrderPaymentStatus(t)){case se.booking_payment_successful:return\"success_record_with_pay\";case se.booking_payment_waiting:return\"wait_record_with_pay\";case se.booking_payment_canceled:return\"timeout_record_with_pay\"}}getCurrentOrderServicesForPrepaid(t){let r=t?this.currentOrderServicesForPossiblePrepaid:this.currentOrderServicesForPrepaid;return this.allowedToUseAbonement$.value&&(r=r.filter(n=>!n.abonement_restriction)),r}identifyOrderPaymentStatus(t){if(t!=null&&t.prepaid_confirmed)return se.booking_payment_successful;let r=this.store.selectSnapshot(m.currentCompany.getPrepaymentDurationInMs);return Date.parse(t==null?void 0:t.create_date)-Date.now()+r<0?se.booking_payment_canceled:se.booking_payment_waiting}attemptToPayRecord(t,r=!1,n){return t?this.externalLinksService.openPaymentPage(t,n,r):Ve}getServicesForPrepaid(t=[],r=this.currentOrderSelectedMasters){let n=[],o=[];return t==null||t.forEach(c=>{this.needPayOrder(c,r)&&(n.push(c),o.push(c)),c.prepaid!==Se.REQUIRED&&(this.allowedToPayStatus$.value&&n.push(c),o.push(c))}),{servicesForPrepaid:n,servicesForPossiblePrepaid:o}}getCurrentOrderPrepaidPrice(t){return this.isPayActive()?this.getPrepaidPriceFromServices(t):0}getMinPriceFromServices(t){return t.reduce((r,n)=>r+(n.price_min||0)*(n.spotsCount||1),0)}getMaxPriceFromServices(t){return t.reduce((r,n)=>r+(n.price_max||1/0)*(n.spotsCount||1),0)}getPrepaidPriceFromServices(t){return!t||t.length===0?0:t.reduce((r,n)=>{var o,c;return n.isActivity?r+((n==null?void 0:n.price_min)||0)*(n==null?void 0:n.spotsCount):n.isActivity?r:n.prepaid===Se.FORBIDDEN?r+((n==null?void 0:n.price_min)||0):r+(((c=(o=n==null?void 0:n.prepaid_settings)==null?void 0:o.prepaid_min)==null?void 0:c.amount)||0)},0)}getTotalCost$(t,r,n=!1){let o=this.store.selectSnapshot(m.order.getIsTrialVisitActivated),c=this.allowedToUseAbonement$.value?[]:t.filter(a=>this.isHybridPayService(a)||!this.abonementRestrictionRequired(a)||o);if(n||!this.allowedToUseAbonement$.value&&this.needShowTotalCost(c)||o){let a=c.map(u=>({price_min:u.price_min*(u.spotsCount||1),price_max:u.price_max*(u.spotsCount||1)}));return this.pricePipe.transform(a,r.currency_short_title)}else return\"\"}needShowTotalCost(t){if(this.getPaidStatus().isRecordPrepaidFull)return!1;let n=t.some(o=>o.isActivity)?t[0].spotsCount:t.length;return!(this.getPaidStatus().isRecordPrepaid&&n===1)}getPrepaidCost(t=!1){return this.needShowPrepaidCost(t)?this.getPaidStatus(null,t).amountLocalizedString:\"\"}getPrepaidCost$(t=!1){return this.allowedToUseAbonement$.asObservable().pipe(M(()=>this.needShowPrepaidCost(t)?this.getPaidStatus(null,t).amountLocalizedString:\"\"))}needShowPrepaidCost(t=!1){return!this.allowedToUseAbonement$.value&&(this.getPaidStatus(null,t).isRecordPrepaid||this.getPaidStatus(null,t).isRecordPrepaidFull)}};s(e,\"\\u0275fac\",function(r){return new(r||e)(y(Le),y(qi),y(Z),y(Zi))}),s(e,\"\\u0275prov\",P({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let i=e;return i})();var mt=function(i){return i[i.selectMasterPage=1]=\"selectMasterPage\",i[i.selectDateTimePage=2]=\"selectDateTimePage\",i}(mt||{});var jt=\"url_set_from_redirect\",en=class{constructor(){s(this,\"version\",\"\");s(this,\"ignoredMasters\",[]);s(this,\"ignoredServices\",[]);s(this,\"ignoredCategories\",[]);s(this,\"hideReviewStaff\",[]);s(this,\"hideReviewCompany\",[]);s(this,\"analytics\",{google:\"\",facebook:\"\"});s(this,\"customTranslates\",{});s(this,\"additionalOptions\",{});s(this,\"notWorkingDatesRanges\",[]);s(this,\"filialName\",\"\");s(this,\"forceShowNextMonth\",!1);s(this,\"ignoredCustomFields\",[]);s(this,\"setIgnoreMasters\",()=>{});s(this,\"setIgnoreServices\",()=>{});s(this,\"setIgnoreCategories\",()=>{});s(this,\"setGoogleAnalytic\",()=>{});s(this,\"setFacebookAnalytic\",()=>{});s(this,\"setHideReviewStaff\",()=>{});s(this,\"setHideReviewCompany\",()=>{});s(this,\"onChangeRoute\",()=>{});s(this,\"onRecordSuccess\",()=>{});s(this,\"setCustomTranslates\",()=>{});s(this,\"setAdditionalOptions\",()=>{});s(this,\"setNotWorkingDatesRanges\",e=>{});s(this,\"setForceShowNextMonth\",()=>{});s(this,\"setFilialName\",()=>{});s(this,\"getUserData\",()=>{});s(this,\"getLastOrderInfo\",()=>{});s(this,\"setIgnoredCustomFields\",e=>{});s(this,\"setColorTokens\",e=>{});s(this,\"addRedirectAfterOrderCreation\",(e,l)=>{});s(this,\"addSlotInfo\",e=>{});s(this,\"openModalWindow\",e=>{});s(this,\"closeModalWindow\",()=>{})}};var tn=(()=>{let e=class e{constructor(){s(this,\"router\",I(X));s(this,\"store\",I(q));s(this,\"notWorkingDatesList\",[]);s(this,\"ignoredDates\",[]);s(this,\"filteredByInjectionGroupedServices\",this.store.select(m.services.getGroupedServices).pipe(F(this.store.select(m.order.getIndividualSelectedDate),this.store.select(m.order.getSelectedMaster)),M(([t,r,n])=>r?Object.keys(t).reduce((o,c)=>{let a=t[c]||[],u=this.getNotWorkingDatesRanges({date:r||\"\",servicesIds:null,mastersIds:n?[n.id]:[]});return a=u.length?a.filter(d=>!u.some(p=>(p.services||[]).includes(d.id))):a,a.length&&(o[c]=a),o},{}):t),M(t=>Object.keys(t).reduce((r,n)=>{if(this.ignoredCategories.includes(parseInt(n)))return r;let o=t[n]||[];return o=this.ignoredServices.length?o.filter(c=>!this.ignoredServices.includes(c.id)):o,o.length&&(r[n]=o),r},{})),pe((t,r)=>JSON.stringify(t)===JSON.stringify(r)),B({refCount:!0,bufferSize:1})));s(this,\"filteredByInjectionServiceCategories\",N([this.store.select(m.services.getCategories),this.filteredByInjectionGroupedServices]).pipe(M(([t,r])=>t.filter(({id:n})=>Object.keys(r).includes(n.toString()))),B({refCount:!0,bufferSize:1})));s(this,\"filteredByInjectionMasters\",this.store.select(m.masters.getMasters).pipe(F(this.store.select(m.order.getIndividualSelectedDate),this.store.select(m.order.getSelectedServices)),M(([t,r,n])=>{let o=n.map(a=>a.id),c=this.getNotWorkingDatesRanges({date:r||\"\",servicesIds:o,mastersIds:null});return t.filter(({id:a})=>!c.some(u=>(u.masters||[]).includes(a)))}),B({refCount:!0,bufferSize:1})));s(this,\"filteredByInjectionCustomFields\",this.store.select(m.customFields.fields).pipe(M(t=>t.map(r=>{let n=this.ignoredCustomFields.find(c=>c.code===r.code),o=g({},r);if(n&&(!r.is_required||n.defaultValue)&&[\"text\",\"number\",\"date\",\"select\"].includes(r.fieldType)){let c=!1;r.fieldType===\"select\"?r.values&&r.values.includes(n.defaultValue)&&(c=!0):c=!0,c&&(o.needHide=!0,o.defaultValue=n.defaultValue)}return o})),B({refCount:!0,bufferSize:1})))}get forceShowNextMonth(){var t,r;return((t=window.widgetApi)==null?void 0:t.forceShowNextMonth)||((r=window.altegioApi)==null?void 0:r.forceShowNextMonth)}get ignoredMasters(){var t,r;return[...((t=window.widgetApi)==null?void 0:t.ignoredMasters)||[],...((r=window.altegioApi)==null?void 0:r.ignoredMasters)||[]]}get ignoredServices(){var t,r;return[...((t=window.widgetApi)==null?void 0:t.ignoredServices)||[],...((r=window.altegioApi)==null?void 0:r.ignoredServices)||[]]}get ignoredCategories(){var t,r;return[...((t=window.widgetApi)==null?void 0:t.ignoredCategories)||[],...((r=window.altegioApi)==null?void 0:r.ignoredCategories)||[]]}get hideReviewStaff(){var t,r;return[...((t=window.widgetApi)==null?void 0:t.hideReviewStaff)||[],...((r=window.altegioApi)==null?void 0:r.hideReviewStaff)||[]]}get filialName(){var t,r;return((t=window.widgetApi)==null?void 0:t.filialName)||((r=window.altegioApi)==null?void 0:r.filialName)}get hideReviewCompany(){var t,r;return((t=window.widgetApi)==null?void 0:t.hideReviewCompany)||((r=window.altegioApi)==null?void 0:r.hideReviewCompany)}get analytics(){var t,r;return g(g({},((t=window.widgetApi)==null?void 0:t.analytics)||{}),((r=window.altegioApi)==null?void 0:r.analytics)||{})}get notWorkingDatesRanges(){var t,r;return[...((t=window.widgetApi)==null?void 0:t.notWorkingDatesRanges)||[],...((r=window.altegioApi)==null?void 0:r.notWorkingDatesRanges)||[]]}get additionalOptions(){var t,r;return g(g({},((t=window.widgetApi)==null?void 0:t.additionalOptions)||{}),((r=window.altegioApi)==null?void 0:r.additionalOptions)||{})}get customTranslates(){var t,r;return g(g({},((t=window.widgetApi)==null?void 0:t.customTranslates)||{}),((r=window.altegioApi)==null?void 0:r.customTranslates)||{})}initNotWorkingDates(){this.ignoredDates=this.notWorkingDatesRanges.filter(t=>!(t!=null&&t.text)).reduce((t,r)=>t.concat(bt(r==null?void 0:r.startDate,r==null?void 0:r.endDate)),[]),this.notWorkingDatesList=this.notWorkingDatesRanges.map(t=>S(g({},t),{datesList:bt(t==null?void 0:t.startDate,t==null?void 0:t.endDate),masters:t.masters||[],services:t.services||[]}))}initFirstStepAlways(t){var n;if(!((n=this.additionalOptions)!=null&&n.firstStepAlways&&t))return;sessionStorage.getItem(jt)?sessionStorage.removeItem(jt):this.router.navigate([ct],{queryParamsHandling:\"preserve\"})}getNotWorkingDatesRanges({date:t,servicesIds:r,mastersIds:n}){return this.notWorkingDatesList.filter(({datesList:o,services:c,masters:a})=>{let u=t===null||o.includes(t),d=!![...c,...a].length,p=r===null||(r||[]).some(v=>c.includes(v)),f=n===null||(n||[]).some(v=>a.includes(v));return u&&(!d||p||f)})}get ignoredCustomFields(){var t;return[...((t=window.widgetApi)==null?void 0:t.ignoredCustomFields)||[]]}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275prov\",P({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let i=e;return i})();var Ee=(()=>{let e=class e{constructor(){s(this,\"store\",I(q));s(this,\"currentCompany$\",this.store.select(m.currentCompany.getCurrentCompany));s(this,\"currentCompanyId$\",this.store.select(m.currentCompany.getCurrentCompanyId));s(this,\"isCurrentCompanyLoaded$\",N([this.currentCompanyId$,this.currentCompany$]).pipe(C(([t])=>this.currentCompanyId===t),M(([t,r])=>e.isCurrentCompanyLoaded(t,r))));s(this,\"currentCompanySubscription\");s(this,\"currentCompanyIdSubscription\");s(this,\"currentCompanyId\",null);s(this,\"_currentCompany\",null);this.currentCompanySubscription=this.currentCompany$.subscribe(t=>{this.currentCompany=t}),this.currentCompanyIdSubscription=this.currentCompanyId$.subscribe(t=>{this.currentCompanyId=t})}get currentCompany(){return this._currentCompany}set currentCompany(t){this._currentCompany=t}static isCurrentCompanyLoaded(t,r){return t!==null&&t===(r==null?void 0:r.id)}hasCurrentCompanyId(){return this.currentCompanyId!==null}hasCurrentCompany(){return this.currentCompany!==null}getCurrentCompanyId(){return this.currentCompanyId}getCurrentCompany(){return this.currentCompany}ensureCurrentCompanyId(){if(!this.hasCurrentCompanyId())throw new Error(\"no current company id\");return this.getCurrentCompanyId()}isCurrentCompanyLoaded(){return e.isCurrentCompanyLoaded(this.currentCompanyId,this.currentCompany)}waitForCurrentCompanyLoaded(){return h(this,null,function*(){yield this.isCurrentCompanyLoaded$.pipe(R(Boolean)).toPromise()})}loadCompany(t,r=!1){return h(this,null,function*(){!r&&this.isCurrentCompanyLoaded()&&this.currentCompanyId===t||(this.currentCompanyId=t,this.store.dispatch(new di(t)),yield this.waitForCurrentCompanyLoaded())})}ngOnDestroy(){this.currentCompanySubscription.unsubscribe(),this.currentCompanyIdSubscription.unsubscribe()}};s(e,\"\\u0275fac\",function(r){return new(r||e)}),s(e,\"\\u0275prov\",P({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let i=e;return i})();var le=class i{constructor(){s(this,\"companyId\",null);s(this,\"isActivity\",!1);s(this,\"selectedIndividualRecordInfo\",{selectedServicesInfo:[]});s(this,\"selectedActivitiesRecordInfo\",[]);s(this,\"activitySelectedDate\",\"\")}static fromValues(e){var r,n,o,c,a,u;let l=S(g({},e),{companyId:(r=e==null?void 0:e.companyId)!=null?r:null,isActivity:(n=e==null?void 0:e.isActivity)!=null?n:!1,selectedIndividualRecordInfo:S(g({},e==null?void 0:e.selectedIndividualRecordInfo),{selectedServicesInfo:(c=(o=e==null?void 0:e.selectedIndividualRecordInfo)==null?void 0:o.selectedServicesInfo)!=null?c:[]}),selectedActivitiesRecordInfo:(a=e==null?void 0:e.selectedActivitiesRecordInfo)!=null?a:[],activitySelectedDate:(u=e==null?void 0:e.activitySelectedDate)!=null?u:\"\"});if(l instanceof this)return l;let t=new this;return Object.assign(t,l),t}static fromRecordItem(e,l){return i.fromValues({companyId:e.company.id,selectedIndividualRecordInfo:e.getIndividualRecordInfo(l)})}static fromQueryParams(e,l){var n;let t=ti(e),r=t?Dt(oi(t)):null;if(r){let o=l==null?void 0:l.timezone;r=Si(r+\":00\",o)}return i.fromValues({companyId:(n=l==null?void 0:l.id)!=null?n:null,selectedIndividualRecordInfo:{selectedDate:r?r.split(\"T\")[0]:null,selectedDateTime:r,selectedBaseMasterId:ei(e),selectedServicesInfo:ni(e)},selectedActivitiesRecordInfo:ii(e),activitySelectedDate:ri(e)})}hasCompany(){return this.companyId!==null}allServicesHasMasters(e){return e?e.every(l=>ve(l)?l.subServicesInfo.every(t=>t.selectedMasterId!==null):l.selectedMasterId!==null):null}hasBaseMaster(){var e;return!!((e=this.selectedIndividualRecordInfo)!=null&&e.selectedBaseMasterId)}hasStaff(e=!0){var l;return!!((l=this.selectedIndividualRecordInfo)!=null&&l.selectedBaseMasterId)&&(e?this.allServicesHasMasters(this.selectedIndividualRecordInfo.selectedServicesInfo):!0)}hasServices(){var e,l;return((l=(e=this.selectedIndividualRecordInfo)==null?void 0:e.selectedServicesInfo)==null?void 0:l.length)>0}hasDateTime(){var e;return!!((e=this.selectedIndividualRecordInfo)!=null&&e.selectedDateTime)}hasActivitySelectedDate(){var e;return((e=this.activitySelectedDate)==null?void 0:e.length)>0}hasActivities(){var e;return!!((e=this.selectedActivitiesRecordInfo)!=null&&e.length)}isFull(){return this.hasCompany()&&this.hasStaff()&&this.hasServices()&&this.hasDateTime()}isAnyStaff(){var e;return((e=this.selectedIndividualRecordInfo)==null?void 0:e.selectedBaseMasterId)===ce}override(e){return i.fromValues(g(g({},this.toJSON()),e))}isSame(e){return e=i.fromValues(e),this.toString()===e.toString()&&this.companyId!==e.companyId}toJSON(){return{companyId:this.companyId,isActivity:this.isActivity,selectedIndividualRecordInfo:this.selectedIndividualRecordInfo,activitySelectedDate:this.activitySelectedDate,selectedActivitiesRecordInfo:this.selectedActivitiesRecordInfo}}toString(){let e=[];if(this.hasBaseMaster()&&e.push(\"\".concat(Vr).concat(this.selectedIndividualRecordInfo.selectedBaseMasterId)),this.hasServices()){for(let l of this.selectedIndividualRecordInfo.selectedServicesInfo)if(e.push(\"\".concat(Wr).concat(l.serviceId)),ve(l))for(let t of l.subServicesInfo)e.push(\"\".concat(Zr).concat(t.serviceLinkId)),t.selectedMasterId&&e.push(\"\".concat(Qr).concat(t.selectedMasterId))}if(this.hasDateTime()){let l=new Date(Dt(this.selectedIndividualRecordInfo.selectedDateTime));e.push(\"\".concat(Jr).concat(fe.fromJSDate(l).format(qr)))}if(this.hasActivitySelectedDate()&&e.push(\"\".concat(Yr).concat(this.activitySelectedDate)),this.hasActivities())for(let l of this.selectedActivitiesRecordInfo)e.push(\"\".concat(Gr).concat(l.activityId)),e.push(\"\".concat(Xr).concat(l.count));return e.join(\"\")}};var ft=(()=>{let e=class e{constructor(t,r,n,o){s(this,\"document\");s(this,\"store\");s(this,\"widgetApiHelperService\");s(this,\"tracking\");s(this,\"destroy$\",new Y(1));s(this,\"currentBookform\",null);this.document=t,this.store=r,this.widgetApiHelperService=n,this.tracking=o}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}resolveCurrentBookformId(){let t=this.document.location.hostname.split(\".\")[0].split(\"-\")[0],r=t[0],n=r===\"b\"||r===\"n\",o=+t.slice(1),c=localStorage.getItem(\"client_booking:techMenuWidgetId\");return c?(localStorage.removeItem(\"client_booking:techMenuWidgetId\"),Number(c)):n&&Number.isInteger(o)?o:Ie.defaultBookformId}loadCurrentBookform(){return h(this,null,function*(){let t=this.resolveCurrentBookformId();this.store.dispatch(new Rr(t)),this.store.dispatch(wi({bookformId:this.resolveCurrentBookformId()})),this.currentBookform=yield this.store.select(m.bookform.getBookform).pipe(R(Boolean),k(this.destroy$)).toPromise(),this.currentBookform&&(this.applyInjection(this.currentBookform),this.widgetApiHelperService.initNotWorkingDates(),this.widgetApiHelperService.initFirstStepAlways(!!this.currentBookform.group_id),this.tracking.trackBenc
```
