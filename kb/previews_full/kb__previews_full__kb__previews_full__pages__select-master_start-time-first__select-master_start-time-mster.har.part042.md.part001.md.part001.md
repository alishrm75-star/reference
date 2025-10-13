### kb/previews_full/kb__previews_full__pages__select-master_start-time-first__select-master_start-time-mster.har.part042.md.part001.md (part 001)

```md
### kb/previews_full/pages__select-master_start-time-first__select-master_start-time-mster.har.part042.md (part 001)

```md
### pages/select-master_start-time-first/select-master_start-time-mster.har (part 042)

```har
ecords\"}),setTimeout(()=>{this.orderManagerService.initDefaultOrder()},1e3);else if(this.isMoveRecord){let e=this.route.snapshot.queryParamMap.get(\"hash\")||null;this.appNavigationService.goBack({url:yield this.moveRecord.getBackUrl(e)})}else this.navigationService.navigateBack()})}generateNextStepUrl(){let e=!!(this.tabMasters$.value&&J.getSelectedMasterIds(this.store.selectSnapshot(u.order.getSelectedIndividualRecordInfo)).length===0);return this.navigationService.serialMode&&this.isFromCheckout||this.isRepeatRecord?this.navigationService.generateNextStepLink(Q.contact):this.navigationService.generateNextStepLink(e?Q.master:void 0)}navigateToNextStep(){return I(this,null,function*(){if(this.trackContinueButton(),this.isRepeatRecord)this.navigateToNextStepRepeatRecord();else if(this.isMoveRecord)this.navigateToNextStepMoveRecord();else{let e=!!(this.tabMasters$.value&&J.getSelectedMasterIds(this.store.selectSnapshot(u.order.getSelectedIndividualRecordInfo)).length===0);if(this.trackCheckoutEditNavigation(e),this.navigationService.serialMode&&this.isFromCheckout){this.navigationService.navigateToContact();return}this.navigationService.navigateToNextStep(e?Q.master:void 0)}})}handleDateChange(e){this.store.selectSnapshot(u.order.getIndividualSelectedDate)!=e&&(M.fromISO(e).toMilliseconds()<M.fromISO(this.today).toMilliseconds()||(this.store.dispatch(new q(null)),this.store.dispatch(new Pe(e)),this.fetchDateTimes(),this.ignoreScroll()))}handlePeriodChange(e){this.visiblePeriod$.next(e)}handleGoToNearestDate(e){this.calendarMonth$.next(M.fromISO(e).getMonth()),this.handleDateChange(e)}handleMonthChange(e){this.calendarMonth$.next(e)}handleCalendarModeChange(e){this.calendarMode$.next(e),this.ignoreScroll()}initMasterTabsIfNeeded(){return I(this,null,function*(){if(!this.navigationService.menuMode||this.navigationService.isHiddenByType(Q.master,!0))return;let n=this.route.snapshot.data.repeatRecord,a=this.route.snapshot.data.moveRecord;if(n||a)return;let s=J.getSelectedMasterIds(this.initialIndividualRecordInfo);if(!(s!=null&&s.length)||!(s!=null&&s.some(T=>T!==Oe)))return;((yield this.widgetApiHelperService.filteredByInjectionMasters.pipe($(),P(this.destroy$)).toPromise())||[]).filter(T=>T.bookable&&T.id!==Oe&&!s.includes(T.id)).length>0&&this.tabMasters$.next({masterIds:s,name:s.map(T=>{var Le;return(Le=this.store.selectSnapshot(u.masters.getMasterById(T)))==null?void 0:Le.name}).filter(Boolean).join(\", \")})})}selectMaster(e){return I(this,null,function*(){e?this.store.dispatch(new nt(V(A({},this.initialIndividualRecordInfo),{selectedDateTime:null}),[rt.dateTimeUpdate])):(this.store.dispatch(new Ne(null)),this.store.dispatch(new q(null)),yield this.initDateTimes(),this.trackAnyMasterTabClick()),e||this.trackAnyMasterTabView()})}initDateTimes(){return I(this,null,function*(){yield this.store.select(u.dateTime.getBookDates).pipe(R(Boolean),$(),P(this.destroy$)).toPromise(),this.fetchDateTimes()})}fetchDateTimes(){this.store.dispatch(new st)}navigateToNextStepRepeatRecord(){this.navigationService.toggleRepeatRecordStatus(!0),this.navigationService.navigateToNextStep(Q.contact)}navigateToNextStepMoveRecord(){let e=this.route.snapshot.queryParamMap.get(\"hash\")||null;this.moveRecord.doMoveRecord(e)}changeCalendarModeOnScroll(){this.calendarMode$.pipe(P(this.destroy$)).subscribe(()=>{this.ignoreScroll()}),this.windowScroller$.pipe(P(this.destroy$)).subscribe(e=>{if(this.ignoreNextScroll){this.stopIgnoringScroll();return}this.tooltipWasShown||this.setTooltipShown(),(this.calendarMode$.value===De.month&&e>0||this.calendarMode$.value===De.week&&e===0)&&this.calendarMode$.next(Pt(this.calendarTransactionType,this.calendarMode$.value))})}setTooltipShown(){this.tooltipWasShown=!0,sessionStorage.setItem(Wt,JSON.stringify(!0)),this.changeDetectorRef.markForCheck()}ignoreScroll(){this.ignoreNextScroll=!0,this.stopIgnoringScroll()}stopIgnoringScroll(){this.ignoreNextScrollTimeout&&clearTimeout(this.ignoreNextScrollTimeout),this.ignoreNextScrollTimeout=setTimeout(()=>{this.ignoreNextScroll=!1},500*1.5)}onProfileClick(){return I(this,null,function*(){yield this.router.navigate([Re.profile],{queryParamsHandling:\"preserve\"})})}parseInjections(e,n){return this.widgetApiHelperService.getNotWorkingDatesRanges({servicesIds:e.map(({id:s})=>s),mastersIds:n?[n.id]:[],date:null}).reduce((s,v)=>(v.datesList.forEach(S=>s[S]=v.text),s),{})}trackContinueButton(){this.navigationService.menuMode?!this.isRepeatRecord&&!this.isMoveRecord&&this.navigationService.getNextStepTrackBtnName$().pipe($(),P(this.destroy$)).subscribe(e=>{this.trackingService.track({type:b.Action.click,page:{name:F.datetimeList},element:{type:\"button\",name:e}})}):this.trackingService.track({type:b.Action.click,page:{name:F.datetimeList},name:Ie.clickButtonNextStep,element:{type:Ie.button,name:Ie.buttonNextStep}}),this.trackingService.trackBenchmark(ke.end(\"booking_datetime_selected\"))}trackCheckoutEditNavigation(e=!1){this.isFromCheckout&&(e?this.trackingService.track({type:b.Action.click,page:{name:\"checkout_edit_datetime\"},element:{type:\"button\",name:\"button_edit_datetime_select_master\"},tab:{name:\"datetime_list_all_masters\"}}):this.trackingService.track({type:b.Action.click,page:{name:\"checkout_edit_datetime\"},element:{type:\"button\",name:\"button_edit_datetime_confirm\"},tab:{name:\"edit_current_datetime\"}}))}trackAnyMasterTabClick(){this.trackingService.track({type:b.Action.click,page:{name:F.datetimeList},element:{type:\"button\",name:\"button_all_masters_tab\"}}),this.isFromCheckout&&this.trackingService.track({type:b.Action.click,page:{name:\"checkout_edit_datetime\"},element:{type:\"button\",name:\"button_all_masters_tab\"}})}trackAnyMasterTabView(){this.trackingService.track({type:\"tab_view\",tab:{name:\"datetime_list_all_masters\"}})}trackBackButton(){this.isFromCheckout&&this.trackingService.track({type:b.Action.click,page:{name:\"checkout_edit_datetime\"},element:{type:\"button\",name:\"button_edit_datetime_back\"}})}};t(o,\"\\u0275fac\",function(n){return new(n||o)}),t(o,\"\\u0275cmp\",E({type:o,selectors:[[\"app-select-date-time-page\"]],viewQuery:function(n,a){if(n&1&&se(li,5,ae),n&2){let s;le(s=ce())&&(a.headerEl=s.first)}},hostBindings:function(n,a){n&1&&y(\"click\",function(){return a.componentClick()})(\"popstate\",function(){return a.processPop()},!1,We)},features:[Ge([{directive:Y,inputs:[\"appLoadingBenchmarks\",\"appLoadingBenchmarks\",\"dataSource\",\"dataSource\"]}])],decls:22,vars:43,consts:[[\"header\",\"\"],[\"templateType\",\"small\",\"theme\",\"primary\",3,\"backClick\",\"profileClick\",\"contentType\",\"title\"],[\"zIndex\",\"1\",1,\"header-addition-sticky\",3,\"roundedBottom\",\"shadowBottom\",\"isSticky\"],[1,\"header-addition-sticky-inner-container\"],[\"class\",\"loyalty-block\",4,\"ngIf\"],[\"class\",\"master-tabs\",4,\"ngIf\"],[3,\"periodChange\",\"selectedDateChange\",\"calendarMonthChange\",\"calendarModeChange\",\"calendarMode\",\"calendarTransactionType\",\"activeDates\",\"weekNames\",\"monthNames\",\"selectedDate\",\"disabledBefore\",\"disableLeft\",\"startWeekOnSunday\"],[1,\"container\"],[4,\"ngIf\"],[\"class\",\"fixed-button\",3,\"title\",\"click\",4,\"ngIf\"],[1,\"loyalty-block\"],[\"role\",\"button\",1,\"loyalty-button\",3,\"click\",\"description\",\"clickable\"],[\"bannerIcon\",\"\",3,\"name\"],[1,\"master-tabs\"],[3,\"tabClick\",\"tabTitle\"],[3,\"tabClick\",\"tooltipText\",\"tabTitle\"],[1,\"brand-link\"],[1,\"no-dates-block\",3,\"title\",\"subtitle\"],[1,\"no-dates-block\",3,\"goToAvailableDate\",\"title\",\"subtitle\",\"availableDate\"],[1,\"no-dates-block\",3,\"goToAvailableDate\",\"title\"],[3,\"bookTimes\"],[1,\"fixed-button\",3,\"click\",\"title\"],[3,\"routerLink\",\"skipNavigation\"]],template:function(n,a){if(n&1){let s=x();g(0,\"app-header\",1,0),y(\"backClick\",function(){return k(s),C(a.navigateBack())})(\"profileClick\",function(){return k(s),C(a.onProfileClick())}),_(),g(2,\"app-header-addition\",2)(3,\"div\",3),f(4,ci,4,5,\"div\",4),c(5,\"async\"),f(6,pi,5,7,\"ui-kit-tabs\",5),c(7,\"async\"),g(8,\"ui-kit-calendar\",6),c(9,\"async\"),c(10,\"async\"),c(11,\"async\"),c(12,\"async\"),c(13,\"async\"),c(14,\"async\"),y(\"periodChange\",function(S){return k(s),C(a.handlePeriodChange(S))})(\"selectedDateChange\",function(S){return k(s),C(a.handleDateChange(S))})(\"calendarMonthChange\",function(S){return k(s),C(a.handleMonthChange(S))})(\"calendarModeChange\",function(S){return k(s),C(a.handleCalendarModeChange(S))}),_()()(),g(15,\"div\",7),f(16,mi,2,0,\"ng-container\",8),c(17,\"async\"),f(18,fi,10,12,\"ng-container\",8),c(19,\"async\"),_(),f(20,_i,4,8,\"ui-kit-button\",9),c(21,\"async\")}n&2&&(ze(a.isRepeatRecord||a.isMoveRecord?\"date-time-page-context\":\"\"),l(\"contentType\",a.isRepeatRecord||a.isMoveRecord?\"titleInfo\":\"companyInfo\")(\"title\",a.headerTitle),m(2),l(\"roundedBottom\",!0)(\"shadowBottom\",!0)(\"isSticky\",!0),m(2),l(\"ngIf\",a.isOrderFirstStep&&p(5,21,a.loyaltyLink$)),m(2),l(\"ngIf\",p(7,23,a.tabMasters$)),m(2),l(\"calendarMode\",p(9,25,a.calendarMode$))(\"calendarTransactionType\",a.calendarTransactionType)(\"activeDates\",p(10,27,a.activeDates$))(\"weekNames\",p(11,29,a.calendarI18nService.getWeekNames$()))(\"monthNames\",p(12,31,a.calendarI18nService.getMonthNames$()))(\"selectedDate\",p(13,33,a.getSelectedDate$))(\"disabledBefore\",a.today)(\"disableLeft\",p(14,35,a.disableGoLeftCalendar$))(\"startWeekOnSunday\",a.startWeekOnSunday),m(8),l(\"ngIf\",p(17,37,a.isDatesOrTimesLoading$)),m(2),l(\"ngIf\",!p(19,39,a.isDatesOrTimesLoading$)),m(2),l(\"ngIf\",p(21,41,a.selectedBookTime$)))},dependencies:[Tt,xt,z,Xe,Rt,mt,At,Lt,Te,fe,tt,gt,ht,Ce,Ft,Kt,de,L],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;background-color:var(--y-core-color-surface-primary);min-height:100%;flex-direction:column}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{z-index:0;padding:16px 0 90px;margin-bottom:70px;position:relative;flex-grow:1;height:max-content;background-color:var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .no-dates-block[_ngcontent-%COMP%]{margin:36px 24px}[_nghost-%COMP%]   ui-kit-calendar[_ngcontent-%COMP%]{width:100%;max-width:600px}[_nghost-%COMP%]   .brand-link[_ngcontent-%COMP%]{padding:40px 0 24px;position:absolute;left:0;right:0;bottom:0}[_nghost-%COMP%]   .fixed-button[_ngcontent-%COMP%]{z-index:1000}[_nghost-%COMP%]   .header-addition-sticky[_ngcontent-%COMP%]{flex-shrink:0;background-color:var(--y-core-color-surface-primary);display:flex;flex-direction:column}[_nghost-%COMP%]   .header-addition-sticky.removed-header[_ngcontent-%COMP%]{padding-top:12px}[_nghost-%COMP%]   .header-addition-sticky-inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}[_nghost-%COMP%]   ui-kit-datetime-block-skeleton[_ngcontent-%COMP%]{margin-top:16px}.loyalty-block[_ngcontent-%COMP%]{width:100%;max-width:600px;background-color:var(--y-core-color-surface-primary);padding:8px 8px 16px}.master-tabs[_ngcontent-%COMP%]{min-height:0;padding-bottom:12px}'],changeDetection:0}));let i=o;return i})();var vi=[{path:\"\",canActivate:[Dt],component:Gt}],zt=(()=>{let o=class o{};t(o,\"\\u0275fac\",function(n){return new(n||o)}),t(o,\"\\u0275mod\",W({type:o})),t(o,\"\\u0275inj\",K({imports:[Be.forChild(vi),Be]}));let i=o;return i})();var Qt=(()=>{let o=class o{};t(o,\"\\u0275fac\",function(n){return new(n||o)}),t(o,\"\\u0275mod\",W({type:o})),t(o,\"\\u0275inj\",K({imports:[Me,Se,he,be,_e]}));let i=o;return i})();var la=(()=>{let o=class o{};t(o,\"\\u0275fac\",function(n){return new(n||o)}),t(o,\"\\u0275mod\",W({type:o})),t(o,\"\\u0275inj\",K({imports:[Mt,he,et,be,Se,zt,Qt,Me,dt,Te,xe,_e,it,ut,Ce]}));let i=o;return i})();export{la as DateTimeModule,zt as DateTimeRoute,vi as dateTimeRoute};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 10231,
          "_transferSize": 10891,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.523Z",
        "time": 83.68799998424947,
        "timings": {
          "blocked": 9.125000007778407,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.4249999999999998,
          "wait": 72.23500003800541,
          "receive": 1.9029999384656549,
          "_blocked_queueing": 1.3770000077784061,
          "_blocked_proxy": 6.996,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "435174",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "loadChildren",
                "scriptId": "18226",
                "url": "https://n958200.alteg.io/booking-flow-EPOA4CQ4.js",
                "lineNumber": 0,
                "columnNumber": 2074
              },
              {
                "functionName": "B7",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 560635
              },
              {
                "functionName": "loadChildren",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 560308
              },
              {
                "functionName": "",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 584092
              },
              {
                "functionName": "preload",
                "scriptId": "18003",
                "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                "lineNumber": 0,
                "columnNumber": 4342
              },
              {
                "functionName": "preloadConfig",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 584022
              },
              {
                "functionName": "processRoutes",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583828
              },
              {
                "functionName": "processRoutes",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583891
              },
              {
                "functionName": "processRoutes",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583891
              },
              {
                "functionName": "processRoutes",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583891
              },
              {
                "functionName": "preload",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583405
              },
              {
                "functionName": "",
                "scriptId": "18003",
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
                  "scriptId": "18003",
                  "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                  "lineNumber": 0,
                  "columnNumber": 1960
                },
                {
                  "functionName": "observer",
                  "scriptId": "18003",
                  "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                  "lineNumber": 0,
                  "columnNumber": 1790
                },
                {
                  "functionName": "invoke",
                  "scriptId": "17987",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 6464
                },
                {
                  "functionName": "onInvoke",
                  "scriptId": "18011",
                  "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                  "lineNumber": 0,
                  "columnNumber": 74795
                },
                {
                  "functionName": "invoke",
                  "scriptId": "17987",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 6404
                },
                {
                  "functionName": "runGuarded",
                  "scriptId": "17987",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 1837
                },
                {
                  "functionName": "",
                  "scriptId": "17987",
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
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/master-step.module-B73WYMR6.js",
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
              "value": "https://n958200.alteg.io/booking-flow-EPOA4CQ4.js"
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
          "headersSize": 1533,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5440"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd2ec31bcb1-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-76c4\""
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
              "value": "9d8b3872b7451265e6fe8e424c64be19"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 30404,
            "mimeType": "application/javascript",
            "compression": 21090,
            "text": "import{a as Oe,b as Le}from\"./chunk-WIWEQICE.js\";import{b as oi}from\"./chunk-X2IVCNZ3.js\";import{a as ni,b as ai,c as Ne}from\"./chunk-5TNNUQPF.js\";import{a as si,b as ci}from\"./chunk-FVSTWCGN.js\";import\"./chunk-ZCWD3LHB.js\";import{a as ri}from\"./chunk-CBNID4LV.js\";import\"./chunk-7HQ4EX32.js\";import{a as ii}from\"./chunk-SW5ZB23E.js\";import{a as ei,b as $e}from\"./chunk-7UC6X27C.js\";import{a as V,c as ti}from\"./chunk-P3W6H44H.js\";import\"./chunk-2HW2JYAQ.js\";import\"./chunk-J5MXNZWD.js\";import{a as Qt,c as Xt,d as De}from\"./chunk-65BCRKHI.js\";import\"./chunk-XSCHNAPS.js\";import{a as H}from\"./chunk-3XC4XRL4.js\";import{a as Zt}from\"./chunk-T7DRINFC.js\";import{E as zt,F as Re,i as Et,u as Ht,v as xe,w as Vt,y as Be}from\"./chunk-IGSDBEZN.js\";import{e as Lt}from\"./chunk-TX67VJHB.js\";import{b as Yt}from\"./chunk-NZOI5B53.js\";import\"./chunk-5GELTLFF.js\";import\"./chunk-TXASR5LU.js\";import\"./chunk-4LVJC2QZ.js\";import{c as Jt,d as Ae,e as Pe}from\"./chunk-HNFBT5P4.js\";import\"./chunk-OT2UNM7Q.js\";import{a as Ut,c as Wt,d as jt}from\"./chunk-6Q3T6TH3.js\";import\"./chunk-5HKI7HVK.js\";import\"./chunk-UTVABLOL.js\";import\"./chunk-2AY43R2Q.js\";import{C as Q,D as Gt,G as we,H as X,g as Nt,i as be,t as Ft,u as P,w as Kt,y as qt}from\"./chunk-IV3KQJLV.js\";import{Aa as ye,Ab as F,Ba as ie,Bb as ut,Ca as ft,Cg as se,Dc as A,De as re,Ee as oe,Ef as vt,Eh as Bt,Fc as St,Ff as Ct,Hc as ht,Hg as xt,Ih as ce,J as ke,Jf as ne,Jh as qe,Ji as pe,Kf as kt,Kh as wt,Ki as Ie,Lf as ae,Lh as Rt,Mh as Dt,N as G,Nh as At,Oh as Ge,P as Me,Ph as Pt,Q as pt,Rh as $t,S as Ue,Te as Y,Yd as gt,Z as lt,ch as J,da as We,ga as mt,ge as _t,hg as Mt,j as E,jg as T,kg as yt,la as R,lg as Tt,og as bt,p as ct,qg as It,si as Ot,te as Ke,ue as Te,ui as c,xa as z,ya as dt,za as je}from\"./chunk-6FGVQ7PR.js\";import{Aa as Se,Bb as te,D as Je,Fa as s,Fb as h,G as Qe,J as D,Ka as L,Kc as ot,L as j,La as he,N as Xe,Nc as Ve,Pc as p,Qb as ge,Qc as m,Rc as nt,T as de,Ub as M,Uc as at,Va as x,Wa as B,Xb as g,Zb as Fe,aa as y,ab as q,ac as w,bc as _e,cb as Ee,cc as ve,dc as Ce,eb as et,ec as _,fc as k,gc as b,i as me,id as st,jc as tt,ka as fe,kc as N,oa as O,oc as I,pc as f,qc as it,r as Ye,rc as He,sa as Ze,ua as K,x as S,xc as rt,y as W,za as ue}from\"./chunk-KO722YSM.js\";import\"./chunk-H3NWS7CE.js\";import\"./chunk-POJFEGQU.js\";import{a as v,b as C,g as i,i as $}from\"./chunk-JV5WWF5Q.js\";var ze=\"was_master_date_time_tooltip_shown\";var _i=[[[\"headerAdditionContent\"]],\"*\"],vi=[\"headerAdditionContent\",\"*\"],Ci=o=>({containerType:o}),ki=o=>({promoPlace:o});function Mi(o,n){if(o&1&&b(0,\"app-header-addition\",2),o&2){let a=f();g(\"title\",a.headerTitle)}}function yi(o,n){o&1&&(_(0,\"div\",3),b(1,\"ui-kit-promo-skeleton\"),k())}function Ti(o,n){if(o&1&&(b(0,\"app-banner-blocks\",9),p(1,\"async\")),o&2){let a=f();Fe(\"banner-blocks-mt\",m(1,3,a.isHeaderHided$)),g(\"bannerBlocksSettings\",Ve(5,ki,a.PromoSettingsPlaceEnum.mastersSelect))}}function bi(o,n){if(o&1&&(b(0,\"app-service-button-basket\",8),p(1,\"async\")),o&2){let a,e=f(),t=rt(12);g(\"services\",e.selectedServices)(\"currencyShortTitle\",(a=m(1,4,e.currentCompany$))==null?null:a.currency_short_title)(\"continueButtonTemplateRef\",t)(\"@slideInUpAnimation\",void 0)}}function Ii(o,n){if(o&1){let a=N();_(0,\"div\",10),p(1,\"async\"),_(2,\"app-continue-button\",11),I(\"activeButtonClick\",function(){x(a);let t=f();return B(t.goToNextStep.emit())}),k()()}if(o&2){let a,e=f();g(\"routerLink\",(a=m(1,4,e.nextStepUrl))==null?null:a.url)(\"skipNavigation\",!0),h(2),g(\"title\",e.nextStepLabel)(\"fixed\",e.selectedServices.length===0)}}var Z=(()=>{let n=class n{constructor(){i(this,\"backClick\",new Ee);i(this,\"goToNextStep\",new Ee);i(this,\"headerTitle\",\"\");i(this,\"isMastersSelected\",!1);i(this,\"nextStepLabel\",\"\");i(this,\"selectedServices\",[]);i(this,\"store\",s(z));i(this,\"navigationService\",s(Q));i(this,\"activatedRoute\",s(G));i(this,\"destroyRef\",s(q));i(this,\"EWApiSlotContainerType\",Et);i(this,\"isHeaderHided$\",this.store.select(c.widgetSettings.getWidgetHideHeader));i(this,\"isOrderFirstStep\",!1);i(this,\"isPromoBlocksLoading$\",this.store.select(c.loader.getLoadingActions).pipe(S(e=>e.includes(Bt))));i(this,\"currentCompany$\",this.store.select(c.currentCompany.getCurrentCompany).pipe(y(e=>!!e),R(this.destroyRef)));i(this,\"PromoSettingsPlaceEnum\",Qt);i(this,\"nextStepUrl\",Qe(0).pipe(O(()=>this.navigationService.generateNextStepLink())));i(this,\"transition\",We)}ngOnInit(){this.isOrderFirstStep=this.navigationService.isOnOrderFirstStep(this.activatedRoute.snapshot)}};i(n,\"\\u0275fac\",function(t){return new(t||n)}),i(n,\"\\u0275cmp\",L({type:n,selectors:[[\"app-base-master-selector\"]],inputs:{headerTitle:\"headerTitle\",isMastersSelected:\"isMastersSelected\",nextStepLabel:\"nextStepLabel\",selectedServices:\"selectedServices\"},outputs:{backClick:\"backClick\",goToNextStep:\"goToNextStep\"},standalone:!0,features:[ot],ngContentSelectors:vi,decls:13,vars:10,consts:[[\"continueButtonTemplateRef\",\"\"],[\"theme\",\"primary\",3,\"backClick\"],[\"theme\",\"primary\",\"zIndex\",\"99\",1,\"title-wrapper\",3,\"title\"],[1,\"promo-skeleton-container\"],[1,\"banner-blocks\",3,\"bannerBlocksSettings\",\"banner-blocks-mt\"],[1,\"container\"],[\"componentClasses\",\"p-default\",3,\"wApiSlot\"],[1,\"brand-link\"],[3,\"services\",\"currencyShortTitle\",\"continueButtonTemplateRef\"],[1,\"banner-blocks\",3,\"bannerBlocksSettings\"],[3,\"routerLink\",\"skipNavigation\"],[3,\"activeButtonClick\",\"title\",\"fixed\"]],template:function(t,r){if(t&1){let l=N();it(_i),_(0,\"app-header\",1),I(\"backClick\",function(){return x(l),B(r.backClick.emit())}),k(),M(1,Mi,1,1,\"app-header-addition\",2),He(2),M(3,yi,2,0,\"div\",3),p(4,\"async\"),M(5,Ti,2,7,\"app-banner-blocks\",4),_(6,\"div\",5),tt(7,6),He(8,1),b(9,\"ui-kit-brand-link\",7),k(),M(10,bi,2,6,\"app-service-button-basket\",8)(11,Ii,3,6,\"ng-template\",null,0,at)}t&2&&(h(),w(r.isOrderFirstStep?-1:1),h(2),w(m(4,6,r.isPromoBlocksLoading$)?3:5),h(3),Fe(\"low-header\",!r.isOrderFirstStep),h(),g(\"wApiSlot\",Ve(8,Ci,r.EWApiSlotContainerType.masterSelectPrepend)),h(3),w(r.isMastersSelected?10:-1))},dependencies:[Pe,Jt,Ae,E,De,Xt,$e,ei,be,Le,Be,Ht,Re,Ne,ai,pt,jt,Wt,Ut,Lt,zt],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1;background:var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .title-wrapper[_ngcontent-%COMP%]{padding:16px}[_nghost-%COMP%]   .promo-skeleton-container[_ngcontent-%COMP%]{padding:0 16px}.banner-blocks[_ngcontent-%COMP%]  .banner-wrapper{padding:8px 16px}.banner-blocks-mt[_ngcontent-%COMP%]{margin-top:10px}.container[_ngcontent-%COMP%]{padding:0 0 150px}'],data:{animation:[lt(\"slideInUpAnimation\",[We(\":enter\",[mt(ni,{params:{translateY:\"130px\",maxWidth:\"600px\",timeParams:\"0.25s ease-out\"}})])])]},changeDetection:0}));let o=n;return o})();function Ri(o,n){if(o&1){let a=N();_(0,\"ui-kit-tabs\",5)(1,\"ui-kit-tab\",6),p(2,\"yDate\"),I(\"tabClick\",function(){let t=x(a),r=f(2);return B(r.onTabClick(t))}),k(),_(3,\"ui-kit-tab\",7),p(4,\"translate\"),p(5,\"translate\"),I(\"tabClick\",function(){x(a);let t=f(2);return B(t.onTabClick(null))}),k()()}if(o&2){let a=f(2);g(\"selectedTabId\",a.otherTimeTabClicked.toString()),h(),g(\"tabTitle\",nt(2,8,n,\"shortDateTime\"))(\"tabId\",\"false\")(\"dataLocator\",\"select_date_time\"),h(2),g(\"tooltipText\",a.tooltipWasShown?\"\":m(4,11,\"date.more_masters_other_time\"))(\"tabTitle\",m(5,13,\"date.other_date\"))(\"tabId\",\"true\")(\"dataLocator\",\"select_another_time\")}}function Di(o,n){if(o&1&&(_(0,\"app-header-addition\",2,0),M(2,Ri,6,15,\"ui-kit-tabs\",5),k()),o&2){let a,e=f();g(\"isSticky\",!0),h(2),w((a=e.initialIndividualRecordInfo.selectedDateTime)?2:-1,a)}}function Ai(o,n){if(o&1){let a=N();_(0,\"app-masters-list\",8),p(1,\"async\"),p(2,\"async\"),p(3,\"async\"),p(4,\"async\"),p(5,\"async\"),I(\"selectMaster\",function(t){x(a);let r=f();return B(r.selectMaster(t))})(\"showInfo\",function(t){x(a);let r=f();return B(r.openMasterInfo(t))})(\"selectSeance\",function(t){x(a);let r=f();return B(r.selectSeance(t))}),k()}if(o&2){let a=f();g(\"company\",m(1,7,a.currentCompany$))(\"masters\",m(2,9,a.masters$))(\"staffSeances\",m(3,11,a.allStaffSeances$))(\"selectedMasterId\",m(4,13,a.selectedMasterId$))(\"selectedSlotDateTime\",m(5,15,a.selectedSlotDateTime$))(\"pageName\",a.pageName)(\"isNewListItemVariant\",!0)}}function Pi(o,n){o&1&&(_(0,\"div\",9),b(1,\"ui-kit-master-skeleton\")(2,\"ui-kit-datetime-block-skeleton\",10),k()),o&2&&(h(2),g(\"timeSlotsCount\",4))}function $i(o,n){if(o&1&&(_(0,\"div\",4),ve(1,Pi,3,1,\"div\",9,_e),k()),o&2){let a=f();h(),Ce(a.skeletons)}}var mi=(()=>{let n=class n{constructor(){i(this,\"store\",s(J));i(this,\"navigationService\",s(Q));i(this,\"translatePipe\",s(F));i(this,\"destroyRef\",s(q));i(this,\"widgetApiHelperService\",s(Kt));i(this,\"pricePipe\",s(xt));i(this,\"paymentService\",s(Ft));i(this,\"appNavigationService\",s(X));i(this,\"router\",s(Me));i(this,\"activatedRoute\",s(G));i(this,\"trackingService\",s(St));i(this,\"orderManager\",s(we));i(this,\"metrika\",s(Yt));i(this,\"currentCompany\",s(qt));i(this,\"actions$\",s(ye));i(this,\"cd\",s(st));i(this,\"initialIndividualRecordInfo\",{});i(this,\"pageName\",V.mastersList);i(this,\"nextStepLabel$\",this.navigationService.nextStepLabelToken$.pipe(S(e=>this.translatePipe.transform(e))));i(this,\"currentCompany$\",this.store.select(c.currentCompany.getCurrentCompany).pipe(y(e=>!!e),R(this.destroyRef)));i(this,\"selectedServices$\",this.store.select(c.order.getSelectedServices));i(this,\"selectedMasterId$\",this.store.select(c.order.getSelectedMasterId));i(this,\"skeletons\",new Array(4).fill(0));i(this,\"masters$\",this.widgetApiHelperService.filteredByInjectionMasters.pipe(K(this.selectedMasterId$,this.currentCompany$,this.store.select(c.order.getSelectedServices).pipe(S(e=>!e.some(t=>this.paymentService.abonementRestrictionRequired(t))))),S(([e,t,r,l])=>bt.sortMasters(e,t).map(d=>{let u=l?this.pricePipe.transform({price_min:d.price_min,price_max:d.price_max},r.currency_short_title):null;return u===this.translatePipe.transform(\"service.price_not_available\")&&(u=null),C(v({},d),{priceRange:u})}))));i(this,\"headerTitle$\",this.store.select(c.bookform.getMasterStepTitle));i(this,\"preSelectedSeance$\",new me(void 0));i(this,\"selectedSlotDateTime$\",W([this.preSelectedSeance$,this.orderManager.getIndividualDateTimeRaw$()]).pipe(S(([e,t])=>t||(e==null?void 0:e.datetime)),fe(1)));i(this,\"allStaffSeances$\",this.store.select(c.staffSeances.getAllStaffSeances).pipe(K(this.selectedMasterId$,this.selectedSlotDateTime$,this.currentCompany$),S(([e,t,r,l])=>{let d=!r;if(t&&r){let u=$t(e,{companyId:l.id,staffId:t});u?d=u.seances.some(ee=>ee.datetime===r):d=!1}return d?e:void 0})));i(this,\"tooltipWasShown\",(()=>{let e=sessionStorage.getItem(ze);return e?JSON.parse(e):!1})());i(this,\"showOtherTimeTabs$\",new me(!1));i(this,\"isReady$\",new me(!1));i(this,\"otherTimeTabClicked\",!1);i(this,\"isFromCheckout\",!1);i(this,\"needCleanComponentData\",!1);i(this,\"loadingBenchmarksDirective\",s(H,{self:!0}));this.loadingBenchmarksDirective.appLoadingBenchmarks=[\"booking_masters_page_open_cold\",\"booking_masters_page_open\"],this.loadingBenchmarksDirective.dataSource=W([this.store.select(c.order.getIsOrderLoading),this.store.select(c.staffSeances.getAnyStaffSeancesLoading)]).pipe(D(([e,t])=>!e&&!t))}componentClick(){this.tooltipWasShown||this.setTooltipShown()}ngOnInit(){W([this.store.select(c.dateTime.isBookTimesLoading),this.store.select(c.dateTime.isBookDatesLoading),this.store.select(c.masters.getMastersLoading)]).pipe(j(0),D(e=>!e.some(Boolean)),de(1),O(()=>this.store.select(c.order.getSelectedIndividualRecordInfo).pipe(y())),R(this.destroyRef)).subscribe(e=>{var r;let t=this.appNavigationService.getRouteStorage(P.selectMasterPage);this.initialIndividualRecordInfo=t?C(v({},t.initialIndividualState),{selectedServicesInfo:e.selectedServicesInfo}):e,!this.isFromCheckout&&this.navigationService.menuMode&&((r=this.initialIndividualRecordInfo)!=null&&r.selectedDateTime)&&!this.store.selectSnapshot(c.order.getAreCompositeServicesEnabled)&&(this.showOtherTimeTabs$.next(!0),e!=null&&e.selectedDateTime||(this.otherTimeTabClicked=!0)),this.appNavigationService.setRouteStorage(P.selectMasterPage,C(v({},t),{initialIndividualState:this.initialIndividualRecordInfo,needCleanDateTime:!1})),this.navigationService.menuMode&&this.store.dispatch(ce()),this.isReady$.next(!0)}),this.store.select(c.loader.getLoadingActions).pipe(y(e=>!e.includes(vt)),K(this.store.select(c.order.getSelectedMasterId),this.store.select(c.currentCompany.getCurrentCompany)),R(this.destroyRef)).subscribe(([,e,t])=>{se.start(\"booking_master_selected\");let r=this.activatedRoute.snapshot.queryParamMap.get(Gt);r!=null&&r.includes(pe[\"create-record\"])&&(this.isFromCheckout=!0),r!=null&&r.includes(pe[\"create-record\"])&&e?(this.trackingService.pageView(\"checkout_edit_master\"),this.trackingService.track({type:A.Action.pageView,page:{name:\"checkout_edit_master\"},element:{id:e}})):this.trackingService.pageView(this.pageName),t&&this.metrika.reachGoal(\"screen_open_staff\",{companyId:t.id,companyName:t.title})}),se.start(\"booking_master_selected\"),this.router.events.pipe(D(e=>e instanceof ke),y()).subscribe(()=>{this.restoreOrderState()})}ngOnDestroy(){return $(this,null,function*(){this.trackingService.trackBenchmark(se.end(\"booking_page_pass_master\")),this.store.dispatch(At())})}processPop(){return $(this,null,function*(){this.needCleanComponentData=!0})}processBeforeUnload(){return $(this,null,function*(){this.appNavigationService.setRouteStorage(P.selectMasterPage,{initialIndividualState:this.initialIndividualRecordInfo,needCleanDateTime:!!this.preSelectedSeance$.value})})}restoreOrderState(){var e,t,r;this.needCleanComponentData&&(this.store.dispatch(new re((e=this.initialIndividualRecordInfo)==null?void 0:e.selectedBaseMasterId)),this.store.dispatch(new Ke((t=this.initialIndividualRecordInfo)==null?void 0:t.selectedDate)),this.store.dispatch(new Te((r=this.initialIndividualRecordInfo)==null?void 0:r.selectedDateTime)))}goToNextStep(){return $(this,null,function*(){var t;this.preSelectedSeance$.value&&(this.store.dispatch(new Ke(Ge(this.preSelectedSeance$.value))),this.store.dispatch(new Te(this.preSelectedSeance$.value.datetime)));let e=yield this.store.select(c.order.getSelectedDateTime).pipe(y(),R(this.destroyRef)).toPromise();if(this.otherTimeTabClicked&&e!==((t=this.initialIndividualRecordInfo)==null?void 0:t.selectedDateTime)?this.trackContinueButton(!1):this.trackContinueButton(),this.navigationService.serialMode&&this.isFromCheckout){this.navigationService.navigateToContact();return}this.navigationService.navigateToNextStep(void 0)})}navigateBack(){return this.trackBackButton(),this.needCleanComponentData=!0,this.navigationService.navigateBack()}selectMaster(e){this.preSelectedSeance$.value&&(this.preSelectedSeance$.next(void 0),this.store.dispatch(new oe(!0))),this.store.dispatch(new Y(C(v({},this.initialIndividualRecordInfo),{selectedBaseMasterId:e.id,selectedServicesInfo:this.initialIndividualRecordInfo.selectedServicesInfo.map(t=>ne(t)?C(v({},t),{subServicesInfo:t.subServicesInfo.map(r=>C(v({},r),{selectedMasterId:e.id}))}):C(v({},t),{selectedMasterId:e.id}))}),[T.servicesUpdate,T.dateTimeUpdate]))}selectSeance(e){if(!e){this.preSelectedSeance$.next(void 0),this.store.dispatch(new oe(!0));return}let{staff:t,seance:r,masterIndex:l}=e;this.preSelectedSeance$.next(r),this.store.dispatch(new Y(C(v({},this.initialIndividualRecordInfo),{selectedDateTime:this.preSelectedSeance$.value.datetime,selectedDate:this.preSelectedSeance$.value.datetime.split(\"T\")[0],selectedBaseMasterId:t.id,selectedServicesInfo:this.initialIndividualRecordInfo.selectedServicesInfo.map(d=>ne(d)?C(v({},d),{subServicesInfo:d.subServicesInfo.map(u=>C(v({},u),{selectedMasterId:t.id}))}):C(v({},d),{selectedMasterId:t.id}))}),[T.servicesUpdate,T.dateTimeUpdate])),this.trackSelectSeanceAndStaff(t,r,l)}openMasterInfo(e){this.currentCompany$.subscribe(t=>$(this,null,function*(){let r=\"./\".concat(Ie(t.id,e.id));yield this.router.navigate([r],{relativeTo:this.activatedRoute,queryParamsHandling:\"merge\",state:{canSelectMaster:!0}})}))}trackSelectSeanceAndStaff(e,t,r){this.trackingService.track({type:A.Action.select,name:V.selectMasterAndTime,part:{type:V.master,name:e.name,id:e.id,number:r},element:{type:V.datetime,name:t.datetime,number:t.seanceIndex}});let l=this.currentCompany.getCurrentCompany();this.metrika.reachGoal(\"master_selected\",{master:e.name,masterId:e.id,companyId:l.id,companyName:l.title}),this.metrika.reachGoal(\"master_seance_selected\",{date:Ge(t),time:t.time,master:e.name,masterId:e.id,companyId:l.id,companyName:l.title})}onTabClick(e){this.otherTimeTabClicked=!e,this.isFromCheckout&&!e&&(this.trackOtherTimeTabClick(),this.actions$.pipe(ie(Ct),y(),R(this.destroyRef)).subscribe(()=>{this.trackOtherTimeTabView()})),this.store.dispatch(new Te(e)),this.store.dispatch(new re(null)),this.store.dispatch(ce())}setTooltipShown(){this.tooltipWasShown=!0,sessionStorage.setItem(ze,JSON.stringify(!0)),this.cd.markForCheck()}trackOtherTimeTabClick(){this.trackingService.track({type:A.Action.click,page:{name:\"checkout_edit_master\"},element:{type:\"button\",name:\"button_all_datetimes_tab\"}})}trackOtherTimeTabView(){this.trackingService.track({type:\"tab_view\",tab:{name:\"master_list_all_datetimes\"}})}trackContinueButton(e=!0){this.navigationService.menuMode?this.navigationService.getNextStepTrackBtnName$().pipe(y(),R(this.destroyRef)).subscribe(t=>{this.trackingService.track({type:A.Action.click,page:{name:this.pageName},element:{type:\"button\",name:t}})}):this.trackingService.track({type:A.Action.click,page:{name:this.pageName},name:V.clickButtonNextStep,element:{type:V.button,name:V.buttonNextStep}}),this.isFromCheckout&&(e?this.trackingService.track({type:A.Action.click,page:{name:\"checkout_edit_master\"},element:{type:\"button\",name:\"button_edit_master_confirm\"},tab:{name:\"edit_current_master\"}}):this.trackingService.track({type:A.Action.click,page:{name:\"checkout_edit_master\"},element:{type:\"button\",name:\"button_edit_master_select_datetime\"},tab:{name:\"master_list_all_datetimes\"}})),this.trackingService.trackBenchmark(se.end(\"booking_master_selected\"))}trackBackButton(){this.isFromCheckout&&this.trackingService.track({type:A.Action.click,page:{name:\"checkout_edit_master\"},element:{type:\"button\",name:\"button_edit_master_back\"}})}};i(n,\"\\u0275fac\",function(t){return new(t||n)}),i(n,\"\\u0275cmp\",L({type:n,selectors:[[\"app-single-master-selector\"]],hostBindings:function(t,r){t&1&&I(\"click\",function(){return r.componentClick()})(\"popstate\",function(){return r.processPop()},!1,te)(\"beforeunload\",function(){return r.processBeforeUnload()},!1,te)},features:[ge([{directive:H,inputs:[\"appLoadingBenchmarks\",\"appLoadingBenchmarks\",\"dataSource\",\"dataSource\"]}])],decls:11,vars:20,consts:[[\"headerAdditionContent\",\"\"],[3,\"backClick\",\"goToNextStep\",\"headerTitle\",\"isMastersSelected\",\"selectedServices\",\"nextStepLabel\"],[\"theme\",\"primary\",\"zIndex\",\"99\",1,\"other-time-addition\",3,\"isSticky\"],[1,\"masters-list\",3,\"company\",\"masters\",\"staffSeances\",\"selectedMasterId\",\"selectedSlotDateTime\",\"pageName\",\"isNewListItemVariant\"],[1,\"skeletons-container\"],[1,\"other-time-tabs\",3,\"selectedTabId\"],[3,\"tabClick\",\"tabTitle\",\"tabId\",\"dataLocator\"],[3,\"tabClick\",\"tooltipText\",\"tabTitle\",\"tabId\",\"dataLocator\"],[1,\"masters-list\",3,\"selectMaster\",\"showInfo\",\"selectSeance\",\"company\",\"masters\",\"staffSeances\",\"selectedMasterId\",\"selectedSlotDateTime\",\"pageName\",\"isNewListItemVariant\"],[1,\"inner-container\"],[3,\"timeSlotsCount\"]],template:function(t,r){t&1&&(_(0,\"app-base-master-selector\",1),p(1,\"async\"),p(2,\"translate\"),p(3,\"async\"),p(4,\"async\"),p(5,\"async\"),I(\"backClick\",function(){return r.navigateBack()})(\"goToNextStep\",function(){return r.goToNextStep()}),M(6,Di,3,2,\"app-header-addition\",2),p(7,\"async\"),M(8,Ai,6,17,\"app-masters-list\",3),p(9,\"async\"),M(10,$i,3,0,\"div\",4),k()),t&2&&(g(\"headerTitle\",m(2,8,m(1,6,r.headerTitle$)))(\"isMastersSelected\",m(3,10,r.selectedMasterId$)!==null)(\"selectedServices\",m(4,12,r.selectedServices$))(\"nextStepLabel\",m(5,14,r.nextStepLabel$)),h(6),w(m(7,16,r.showOtherTimeTabs$)?6:-1),h(2),w(m(9,18,r.isReady$)?8:10))},dependencies:[Ae,ti,xe,Vt,Z,ci,si,E,F,Nt],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;height:100vh}.other-time-tabs[_ngcontent-%COMP%]{min-height:0;width:100%}.masters-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding-bottom:56px}.other-time-addition[_ngcontent-%COMP%]{margin-bottom:20px}.skeletons-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:16px;gap:20px}.skeletons-container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px}'],changeDetection:0}));let o=n;return o})();function Li(o,n){o&1&&b(0,\"ui-kit-master-skeleton\")}function Ni(o,n){if(o&1&&(_(0,\"div\",1),ve(1,Li,1,0,\"ui-kit-master-skeleton\",null,_e),k()),o&2){let a=f();h(),Ce(a.skeletons)}}function Ei(o,n){if(o&1){let a=N();_(0,\"app-services-card-with-master-mock\",3),p(1,\"async\"),p(2,\"async\"),p(3,\"async\"),p(4,\"async\"),p(5,\"async\"),p(6,\"async\"),I(\"masterSelected\",function(t){x(a);let r=f();return B(r.selectMaster(t))})(\"openMasterInfo\",function(t){x(a);let r=f();return B(r.navigateToMasterPage(t))}),k()}if(o&2){let a=f();g(\"company\",m(1,7,a.company$))(\"selectedServices\",m(2,9,a.selectedServices$))(\"compositeMasters\",m(3,11,a.mastersForComposites$))(\"servicesInOrder\",m(4,13,a.servicesInOrder$))(\"selectedMaster\",m(5,15,a.selectedMaster$))(\"availableSingleMasters\",m(6,17,a.availableMasters$))(\"hiddenMasterId\",a.hiddenMasterId)}}var di=(()=>{let n=class n{constructor(){i(this,\"store\",s(J));i(this,\"navigationService\",s(Q));i(this,\"translatePipe\",s(F));i(this,\"router\",s(Me));i(this,\"appNavigationService\",s(X));i(this,\"activatedRoute\",s(G));i(this,\"complexTrackingService\",s(oi));i(this,\"orderManagerService\",s(we));i(this,\"mastersForComposites$\",this.store.select(c.masters.getExtendedMastersForComposites));i(this,\"isMastersForCompositesLoading$\",this.store.select(c.masters.getMastersForCompositesLoading()));i(this,\"company$\",this.store.select(c.currentCompany.getCurrentCompany));i(this,\"selectedServices$\",this.store.select(c.order.getSelectedServices));i(this,\"servicesInOrder$\",this.store.select(c.order.getSelectedIndividualRecordInfo).pipe(fe({refCount:!0,bufferSize:1})));i(this,\"nextStepLabel$\",this.navigationService.nextStepLabelToken$.pipe(S(e=>this.translatePipe.transform(e))));i(this,\"areAllMastersSelected$\",this.servicesInOrder$.pipe(S(e=>e.selectedServicesInfo.every(t=>ne(t)?t.subServicesInfo.every(r=>r.selectedMasterId!==null):t.selectedMasterId!==null))));i(this,\"availableMasters$\",this.store.select(c.masters.getMasters).pipe(S(e=>e.filter(t=>t.bookable))));i(this,\"selectedMaster$\",this.store.select(c.order.getSelectedMaster));i(this,\"hiddenMasterId\",this.navigationService.getHiddenMasterId());i(this,\"needCleanComponentData\",!1);i(this,\"initialIndividualRecordInfo\",{});i(this,\"destroyRef\",s(q));i(this,\"loadingBenchmarksDirective\",s(H,{self:!0}));i(this,\"skeletons\",new Array(3).fill(0));this.loadingBenchmarksDirective.appLoadingBenchmarks=[\"booking_multiple_masters_page_open\",\"booking_multiple_masters_page_open_cold\"],this.loadingBenchmarksDirective.dataSource=W([this.store.select(c.order.getIsOrderLoading),this.isMastersForCompositesLoading$]).pipe(D(([e,t])=>!e&&!t))}processPop(){return $(this,null,function*(){this.needCleanComponentData=!0})}ngOnInit(){this.store.select(c.masters.getMastersForCompositesLoading()).pipe(j(0),D(e=>!e),de(1),O(()=>this.store.select(c.order.getSelectedIndividualRecordInfo).pipe(y())),R(this.destroyRef)).subscribe(e=>{let t=this.appNavigationService.getRouteStorage(P.selectMasterPage);this.initialIndividualRecordInfo=t?t.initialIndividualState:e,this.appNavigationService.setRouteStorage(P.selectMasterPage,C(v({},t),{initialIndividualState:this.initialIndividualRecordInfo,needCleanDateTime:!1})),this.store.dispatch(new Y(this.orderManagerService.applyInitialMasterIfNeeded(e,this.store.selectSnapshot(c.masters.getExtendedMastersForComposites),this.store.selectSnapshot(c.masters.getMasters),this.hiddenMasterId),[T.mastersUpdate,T.dateTimeUpdate,T.servicesUpdate,T.compositeMastersUpdate]))}),this.router.events.pipe(D(e=>e instanceof ke),y()).subscribe(()=>{this.restoreOrderState()}),this.complexTrackingService.setServiceComplexPage(),this.complexTrackingService.trackOpenPageAction()}goToNextStep(){this.navigationService.navigateToNextStep(void 0)}selectMaster(e){this.store.dispatch(new re(e.masterId,e.compositeServiceId,e.serviceLinkId)),this.complexTrackingService.trackSelectMasterAction(e.masterId,e.serviceLinkId)}navigateBack(){return this.needCleanComponentData=!0,this.navigationService.navigateBack()}navigateToMasterPage({masterId:e,serviceId:t,serviceLinkId:r}){let l=this.store.selectSnapshot(c.currentCompany.getCurrentCompanyId);this.router.navigate([Ie(l,e)],{relativeTo:this.activatedRoute,queryParamsHandling:\"preserve\",state:{canSelectMaster:!0,serviceId:t,subServiceId:r}})}restoreOrderState(){this.needCleanComponentData&&this.store.dispatch(new Y(this.initialIndividualRecordInfo,[T.mastersUpdate,T.dateTimeUpdate,T.servicesUpdate,T.compositeMastersUpdate]))}};i(n,\"\\u0275fac\",function(t){return new(t||n)}),i(n,\"\\u0275cmp\",L({type:n,selectors:[[\"app-multiple-master-selector\"]],hostBindings:function(t,r){t&1&&I(\"popstate\",function(){return r.processPop()},!1,te)},features:[ge([{directive:H,inputs:[\"appLoadingBenchmarks\",\"appLoadingBenchmarks\",\"dataSource\",\"dataSource\"]}])],decls:8,vars:15,consts:[[3,\"backClick\",\"goToNextStep\",\"selectedServices\",\"headerTitle\",\"nextStepLabel\",\"isMastersSelected\"],[1,\"skeletons-container\"],[3,\"company\",\"selectedServices\",\"compositeMasters\",\"servicesInOrder\",\"selectedMaster\",\"availableSingleMasters\",\"hiddenMasterId\"],[3,\"masterSelected\",\"openMasterInfo\",\"company\",\"selectedServices\",\"compositeMasters\",\"servicesInOrder\",\"selectedMaster\",\"availableSingleMasters\",\"hiddenMasterId\"]],template:function(t,r){t&1&&(_(0,\"app-base-master-selector\",0),p(1,\"async\"),p(2,\"translate\"),p(3,\"async\"),p(4,\"async\"),I(\"backClick\",function(){return r.navigateBack()})(\"goToNextStep\",function(){return r.goToNextStep()}),M(5,Ni,3,0,\"div\",1),p(6,\"async\"),M(7,Ei,7,19,\"app-services-card-with-master-mock\",2),k()),t&2&&(g(\"selectedServices\",m(1,5,r.selectedServices$))(\"headerTitle\",m(2,7,\"steps.select_specialists\"))(\"nextStepLabel\",m(3,9,r.nextStepLabel$))(\"isMastersSelected\",m(4,11,r.areAllMastersSelected$)),h(5),w(m(6,13,r.isMastersForCompositesLoading$)?5:7))},dependencies:[xe,Oe,Z,E,F],styles:[\"[_nghost-%COMP%]{display:flex;flex-direction:column;height:100vh}.skeletons-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:16px;gap:20px}\"],changeDetection:0}));let o=n;return o})();function Hi(o,n){o&1&&b(0,\"app-multiple-master-selector\")}function Vi(o,n){o&1&&b(0,\"app-single-master-selector\")}var fi=(()=>{let n=class n{constructor(){i(this,\"store\",s(J));i(this,\"showMultipleMasterSelector$\",this.store.select(c.order.getAddExtraMasterStepForComposites))}};i(n,\"\\u0275fac\",function(t){return new(t||n)}),i(n,\"\\u0275cmp\",L({type:n,selectors:[[\"app-select-master-page\"]],decls:3,vars:3,template:function(t,r){t&1&&(M(0,Hi,1,0,\"app-multiple-master-selector\"),p(1,\"async\"),M(2,Vi,1,0,\"app-single-master-selector\")),t&2&&w(m(1,1,r.showMultipleMasterSelector$)?0:2)},dependencies:[mi,di,E],styles:[\"[_nghost-%COMP%]{min-height:100%}\"]}));let o=n;return o})();var ui=(()=>{let n=class n{constructor(){i(this,\"appNavigationService\",s(X));i(this,\"store\",s(z));i(this,\"orderRequestsManagerService\",s(Tt))}resolve(){this.orderRequestsManagerService.toggleEffects([yt.masters]);let e=this.appNavigationService.getRouteStorage(P.selectMasterPage);return e!=null&&e.needCleanDateTime&&this.store.dispatch(new oe),this.store.select(c.masters.getMastersLoading).pipe(j(0),D(t=>!t),y(),S(()=>{}))}};i(n,\"\\u0275fac\",function(t){return new(t||n)}),i(n,\"\\u0275prov\",ue({token:n,factory:n.\\u0275fac,providedIn:\"root\"}));let o=n;return o})();var Ui=[{path:\"\",canActivate:[Zt,ri],component:fi,data:{step:ht.master,benchmarks:[\"booking_masters_page_open\",\"booking_page_pass_master\",\"booking_multiple_masters_page_open\"]},resolve:[ii,ui]},{path:pe[\"master-info\"],loadChildren:()=>import(\"./master-info-27FIKMOB.js\").then(o=>o.MasterInfoModule)}],Si=(()=>{let n=class n{};i(n,\"\\u0275fac\",function(t){return new(t||n)}),i(n,\"\\u0275mod\",he({type:n})),i(n,\"\\u0275inj\",Se({imports:[Ue.forChild(Ui),Ue]}));let o=n;return o})();var hi=(()=>{let n=class n{constructor(){i(this,\"actions\",s(ye));i(this,\"store\",s(z));i(this,\"dateTimeService\",s(It));i(this,\"errorHandler\",s(et));i(this,\"widgetApiHelperService\",s(_t));i(this,\"loadMultipleStaffSeancesEffect$\",je(()=>this.actions.pipe(ie(qe),O(({companyId:e,staffIds:t,filterRecords:r})=>{let l=this.widgetApiHelperService.notWorkingDatesRanges,d=[];l.length!=0&&(d=l.reduce((ee,le)=>ee.concat(Mt(le.startDate,le.endDate)),[]));let u=t.map(ee=>this.loadStaffSeances$({companyId:e,filterRecords:r.map(le=>C(v({},le),{staff_id:ee}))},d));return Je([...u])}),S(()=>Dt())),{useEffectsErrorHandler:!1}));i(this,\"loadStaffSeancesAction$\",je(()=>this.actions.pipe(ie(ce),K(this.store.select(c.currentCompany.getCurrentCompanyId),this.store.select(c.order.getSelectedIndividualRecordInfo),this.store.select(c.masters.getMasters)),S(([,e,t,r])=>{let l=r.filter(d=>d.bookable&&d.id!==gt).map(d=>d.id);return qe({filterRecords:kt(t),staffIds:l,companyId:e})}))))}loadStaffSeances$({companyId:e,filterRecords:t},r){return this.dateTimeService.getBookTimes(e,null,t).pipe(S(l=>{let d=l.map(u=>u.datetime.split(\"T\")[0]).filter(u=>!r.includes(u))[0];return{seance_date:d,seances:l.filter(u=>u.datetime.split(\"T\")[0]===d).slice(0,5).map(u=>({time:u.datetime.split(\"T\")[1].slice(0,5),datetime:u.datetime}))}})).pipe(Ze(l=>{this.store.dispatch(wt(C(v({},l),{companyId:e,staffId:ae.getSingleStaffIdFromFilterRecordsAsNumber(t),serviceIds:ae.getAllServiceIdsFromFilterRecordsAsNumber(t)})))}),Xe(l=>(this.errorHandler.handleError(l),this.store.dispatch(Rt({companyId:e,staffId:ae.getSingleStaffIdFromFilterRecordsAsNumber(t),serviceIds:ae.getAllServiceIdsFromFilterRecordsAsNumber(t)})),Ye({}))))}};i(n,\"\\u0275fac\",function(t){return new(t||n)}),i(n,\"\\u0275prov\",ue({token:n,factory:n.\\u0275fac}));let o=n;return o})();var Zn=(()=>{let n=class n{};i(n,\"\\u0275fac\",function(t){return new(t||n)}),i(n,\"\\u0275mod\",he({type:n})),i(n,\"\\u0275inj\",Se({imports:[ct,Si,Re,Pe,ut,be,Le,$e,Ne,De,Be,Oe,Z,dt.forFeature(Ot.StaffSeances,Pt),ft.forFeature([hi])]}));let o=n;return o})();export{Zn as MasterStepModule};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 9314,
          "_transferSize": 9974,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.524Z",
        "time": 92.32699999120086,
        "timings": {
          "blocked": 9.965000068388878,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.6020000000000003,
          "wait": 79.98999994933605,
          "receive": 1.769999973475933,
          "_blocked_queueing": 3.0820000683888793,
          "_blocked_proxy": 5.4799999999999995,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "443549",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "loadChildren",
                "scriptId": "17988",
                "url": "https://n958200.alteg.io/main-JGQFRULP.js",
                "lineNumber": 0,
                "columnNumber": 148845
              },
              {
                "functionName": "B7",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 560635
              },
              {
                "functionName": "loadChildren",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 560308
              },
              {
                "functionName": "",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 584092
              },
              {
                "functionName": "preload",
                "scriptId": "18003",
                "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                "lineNumber": 0,
                "columnNumber": 4342
              },
              {
                "functionName": "preloadConfig",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 584022
              },
              {
                "functionName": "processRoutes",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583828
              },
              {
                "functionName": "preload",
                "scriptId": "18014",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 583405
              },
              {
                "functionName": "",
                "scriptId": "18003",
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
                  "scriptId": "18003",
                  "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                  "lineNumber": 0,
                  "columnNumber": 1960
                },
                {
                  "functionName": "observer",
                  "scriptId": "18003",
                  "url": "https://n958200.alteg.io/chunk-6Q3T6TH3.js",
                  "lineNumber": 0,
                  "columnNumber": 1790
                },
                {
                  "functionName": "invoke",
                  "scriptId": "17987",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 6464
                },
                {
                  "functionName": "onInvoke",
                  "scriptId": "18011",
                  "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                  "lineNumber": 0,
                  "columnNumber": 74795
                },
                {
                  "functionName": "invoke",
                  "scriptId": "17987",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 6404
                },
                {
                  "functionName": "runGuarded",
                  "scriptId": "17987",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 1837
                },
                {
                  "functionName": "",
                  "scriptId": "17987",
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
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/profile-UJ3PQK5W.js",
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
          "headersSize": 1514,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5446"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd3480bbcaf-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-bb67\""
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
              "value": "fb75b924711437ae88e1189a176ed427"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 47975,
            "mimeType": "application/javascript",
            "compression": 34312,
            "text": "import{a as wi}from\"./chunk-6OIMJOWG.js\";import{a as Ci,b as bi}from\"./chunk-FVSTWCGN.js\";import\"./chunk-ZCWD3LHB.js\";import{a as Ke,b as ki,c as Pi,d as Si,e as Ti}from\"./chunk-PGZ3SAL4.js\";import{a as yi,b as vi}from\"./chunk-7UC6X27C.js\";import{a as He}from\"./chunk-3XC4XRL4.js\";import{a as et}from\"./chunk-T7DRINFC.js\";import{a as fi}from\"./chunk-HHZQMLSJ.js\";import{a as di}from\"./chunk-CANKYAH7.js\";import{a as gi,b as xi}from\"./chunk-AN7K5KXY.js\";import{d as Re,f as ci,g as li}from\"./chunk-4E6OOWMO.js\";import{a as ge}from\"./chunk-CQE6HO76.js\";import{F as si,b as $e,d as Qt,l as qe}from\"./chunk-IGSDBEZN.js\";import{e as ce,f as Yt}from\"./chunk-TX67VJHB.js\";import{b as mi}from\"./chunk-NZOI5B53.js\";import\"./chunk-5GELTLFF.js\";import{b as Fe,g as Jt}from\"./chunk-TXASR5LU.js\";import{a as me}from\"./chunk-4LVJC2QZ.js\";import{c as fe,d as hi,e as _i}from\"./chunk-HNFBT5P4.js\";import\"./chunk-OT2UNM7Q.js\";import{a as ii,c as oi,d as ni}from\"./chunk-6Q3T6TH3.js\";import{a as ui}from\"./chunk-5HKI7HVK.js\";import\"./chunk-UTVABLOL.js\";import\"./chunk-2AY43R2Q.js\";import{E as ue,F as de,G as pi,H as F,c as Xt,e as Zt,i as ei,l as le,y as ri,z as ai}from\"./chunk-IV3KQJLV.js\";import{$b as ae,$d as Dt,Aa as bt,Ab as C,Ba as Ze,Bb as xe,Dc as M,Eb as ne,Fb as Me,Fc as U,Gb as kt,Hb as Pt,Ji as b,Kb as St,N as Y,Ni as je,Oc as De,P as J,Q as Ct,Qi as Ge,Ri as ti,S as Xe,Sc as se,Tb as W,Tc as $,Vb as re,Wb as Ae,Wc as Et,Xc as Ut,Zc as Ot,ac as Tt,af as Rt,bc as Ie,be as Vt,ch as ze,d as _t,dc as Be,de as zt,e as R,fc as Le,gc as wt,hc as xt,hf as $t,ic as Mt,j as A,kf as Ft,l as yt,lc as Ee,mc as At,mh as Wt,nc as It,nd as Ve,of as jt,p as vt,pf as Gt,qc as Ue,qf as qt,rc as Oe,sd as Nt,sf as Ht,tc as Ne,uc as pe,uf as Kt,ui as g,vc as Bt,xa as E,yc as Lt}from\"./chunk-6FGVQ7PR.js\";import{Aa as ke,Ac as K,Dc as dt,Ea as Q,Ec as gt,Fa as d,Fb as p,Fc as ft,Gb as B,J as ie,K as at,Ka as S,Kc as ht,La as Pe,Pb as mt,Pc as l,Qb as ut,Qc as m,T as be,Ub as T,Va as k,Wa as P,Wb as v,Xb as s,Y as pt,aa as Z,c as ve,cb as I,ec as c,fc as u,gc as _,h as ot,hc as Se,i as nt,ic as Te,id as we,j as z,kc as w,oa as st,oc as h,pc as f,qa as O,r as rt,ra as ct,ua as lt,x as Ce,y as te,yc as x,za as oe,zc as H}from\"./chunk-KO722YSM.js\";import\"./chunk-H3NWS7CE.js\";import\"./chunk-POJFEGQU.js\";import{g as e,i as N}from\"./chunk-JV5WWF5Q.js\";var he=function(t){return t.button=\"button\",t.logOutConfirm=\"log_out_confirm\",t}(he||{});var D=function(t){return t.button=\"button\",t.widgetSettingsAndLogIn=\"widget_settings_and_log_in\",t.openLogInPage=\"open_log_in_page\",t.openCreateRecordFlow=\"open_create_record_flow\",t.userProfile=\"user_profile\",t}(D||{});var V=function(t){return t.button=\"button\",t.openProfileEditor=\"open_profile_editor\",t.openUserRecords=\"open_user_records\",t.logOut=\"log_out\",t}(V||{});function Qi(t,o){if(t&1&&(c(0,\"div\",7),x(1),u()),t&2){let a=f();p(),H(a.email)}}function Yi(t,o){if(t&1&&(c(0,\"div\",7),x(1),u()),t&2){let a=f();p(),H(a.userPhone)}}var We=(()=>{let o=class o{constructor(){e(this,\"avatar\");e(this,\"name\");e(this,\"phone\");e(this,\"email\");e(this,\"clickInfo\",new I)}get userPhone(){return this.phone&&!this.phone.startsWith(\"+\")?\"+\".concat(this.phone):this.phone}};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-user-profile-info\"]],inputs:{avatar:\"avatar\",name:\"name\",phone:\"phone\",email:\"email\"},outputs:{clickInfo:\"clickInfo\"},standalone:!0,features:[ht],decls:10,vars:11,consts:[[1,\"content-wrapper\"],[\"size\",\"60\",3,\"text\",\"url\",\"round\"],[1,\"text-wrapper\"],[1,\"title\"],[\"class\",\"label\",4,\"ngIf\"],[1,\"forward-icon-wrapper\"],[3,\"name\",\"setSvgSize\"],[1,\"label\"]],template:function(i,r){i&1&&(c(0,\"div\",0),_(1,\"ui-kit-avatar\",1),c(2,\"div\",2)(3,\"div\",3),x(4),l(5,\"translate\"),u(),T(6,Qi,2,1,\"div\",4)(7,Yi,2,1,\"div\",4),u()(),c(8,\"div\",5),_(9,\"ui-kit-svg-icon\",6),u()),i&2&&(p(),s(\"text\",r.name)(\"url\",r.avatar)(\"round\",!0),p(),v(\"data-locator\",\"contacts\"),p(2),H(m(5,9,r.name||\"profile.name.not_specified\")),p(2),s(\"ngIf\",r.email),p(),s(\"ngIf\",r.phone),p(2),s(\"name\",\"profile/select-blue\")(\"setSvgSize\",!1))},dependencies:[R,Oe,ne,Fe,xe,C],styles:['@charset \"UTF-8\";[_nghost-%COMP%], .content-wrapper[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;overflow:hidden}.title[_ngcontent-%COMP%], .label[_ngcontent-%COMP%]{max-width:100%}.content-wrapper[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]{margin-left:12px}.content-wrapper[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-bottom:4px;font-weight:500;font-size:17px;line-height:24px;color:var(--y-core-color-text-primary)}.content-wrapper[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:13px;line-height:16px;color:var(--y-core-color-text-secondary)}.forward-icon-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;position:relative;color:var(--y-core-color-icon-secondary)}.forward-icon-wrapper[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{z-index:99}'],changeDetection:0}));let t=o;return t})();var Qe=function(t){return t.language=\"language\",t.selectLanguage=\"select_language\",t}(Qe||{});function Zi(t,o){if(t&1&&(c(0,\"option\",7),x(1),u()),t&2){let a=o.$implicit;s(\"ngValue\",a),v(\"data-locator\",\"lang_\"+a.code),p(),K(\" \",a.title,\" \")}}function eo(t,o){if(t&1){let a=w();c(0,\"select\",5),ft(\"ngModelChange\",function(i){k(a);let r=f();return gt(r.currentLanguage,i)||(r.currentLanguage=i),P(i)}),h(\"change\",function(){k(a);let i=f();return P(i.setLanguage())}),T(1,Zi,2,3,\"option\",6),u()}if(t&2){let a=o.ngVar,n=f();dt(\"ngModel\",n.currentLanguage),v(\"data-locator\",\"language_select_\"+n.currentLanguage.code),p(),s(\"ngForOf\",a)}}var Bi=(()=>{let o=class o{constructor(){e(this,\"languageSelect\",new I);e(this,\"currentLanguage\");e(this,\"localizationService\",d(De));e(this,\"trackingService\",d(U));e(this,\"bookFormLanguage$\",this.localizationService.getBookFormLanguage());e(this,\"languages$\",this.localizationService.getLanguages());e(this,\"currentLanguageTitle$\",this.localizationService.getTitle());e(this,\"destroy$\",new z(1))}ngOnInit(){this.bookFormLanguage$.pipe(O(this.destroy$)).subscribe(n=>{this.currentLanguage=n})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setLanguage(){this.localizationService.setLanguage(this.currentLanguage.code),this.trackingService.track({type:M.Action.select,name:Qe.selectLanguage,element:{type:Qe.language,name:this.currentLanguage.title}}),this.languageSelect.emit(this.currentLanguage)}};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-localization-menu-element\"]],outputs:{languageSelect:\"languageSelect\"},decls:9,vars:13,consts:[[1,\"selected-language-wrapper\"],[3,\"iconName\",\"title\",\"canSelect\"],[1,\"selected-language-title-wrapper\"],[1,\"forward-icon\",3,\"name\",\"setSvgSize\"],[\"class\",\"selector\",3,\"ngModel\",\"ngModelChange\",\"change\",4,\"ngVar\"],[1,\"selector\",3,\"ngModelChange\",\"change\",\"ngModel\"],[3,\"ngValue\",4,\"ngFor\",\"ngForOf\"],[3,\"ngValue\"]],template:function(i,r){i&1&&(c(0,\"div\",0),_(1,\"app-menu-element\",1),l(2,\"translate\"),c(3,\"div\",2),x(4),l(5,\"async\"),_(6,\"ui-kit-svg-icon\",3),u(),T(7,eo,2,3,\"select\",4),l(8,\"async\"),u()),i&2&&(p(),s(\"iconName\",\"profile/language\")(\"title\",m(2,7,\"menu.change_lang\"))(\"canSelect\",!1),p(3),K(\" \",m(5,9,r.currentLanguageTitle$),\" \"),p(2),s(\"name\",\"profile/select-blue\")(\"setSvgSize\",!1),p(),s(\"ngVar\",m(8,11,r.languages$)))},dependencies:[_t,$e,ne,xt,Mt,wt,re,Tt,me,A,C],styles:['@charset \"UTF-8\";.selected-language-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;cursor:pointer}.selected-language-wrapper[_ngcontent-%COMP%]   .selected-language-title-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-family:Inter;font-style:normal;font-weight:400;font-size:15px;line-height:20px;color:var(--y-core-color-text-secondary)}.selected-language-wrapper[_ngcontent-%COMP%]   .selected-language-title-wrapper[_ngcontent-%COMP%]   .forward-icon[_ngcontent-%COMP%]{color:var(--y-core-color-icon-secondary);display:block}.selected-language-wrapper[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;opacity:0;cursor:pointer}'],changeDetection:0}));let t=o;return t})();function oo(t,o){if(t&1){let a=w();c(0,\"app-user-profile-info\",9),h(\"click\",function(){k(a);let i=f();return P(i.clickGoToProfileInfo())}),u()}if(t&2){let a=o.ngIf;s(\"avatar\",a.avatar)(\"name\",a.name)(\"phone\",a.phone)(\"email\",a.email),v(\"data-locator\",\"personal_information_btn\")}}function no(t,o){if(t&1){let a=w();Se(0),c(1,\"div\",10),h(\"click\",function(){k(a);let i=f();return P(i.goToMyRecords())}),_(2,\"span\",4)(3,\"app-menu-element\",11),l(4,\"translate\"),u(),Te()}if(t&2){let a=f();p(),v(\"data-locator\",\"my_bookings_btn\"),p(),s(\"routerLink\",a.buildAbsoluteRecordsPath())(\"skipNavigation\",!0),p(),s(\"iconName\",\"profile/records\")(\"title\",m(4,5,\"menu.myRecords\"))}}function ro(t,o){if(t&1){let a=w();c(0,\"app-menu-element\",12),l(1,\"translate\"),l(2,\"async\"),h(\"click\",function(){k(a);let i=f();return P(i.clickGoToNotices())}),u()}if(t&2){let a=f();s(\"iconName\",\"profile/bell\")(\"title\",m(1,6,\"header.notification\"))(\"canSelect\",!0)(\"count\",m(2,8,a.unreadCount))(\"iconWithBackground\",!0),v(\"data-locator\",\"notices-btn\")}}function ao(t,o){if(t&1){let a=w();c(0,\"app-localization-menu-element\",13),h(\"languageSelect\",function(i){let r=k(a).ngIf,y=f();return P(y.updateUser(r==null?null:r.name,i))}),u()}}var Ei=(()=>{let o=class o{constructor(){e(this,\"clickGoToMyRecords\",new I);e(this,\"clickLogout\",new I);e(this,\"languageSelect\",new I);e(this,\"goToProfileInfo\",new I);e(this,\"goToMemberships\",new I);e(this,\"goToCertificates\",new I);e(this,\"goToLoyaltyCard\",new I);e(this,\"goToNotices\",new I);e(this,\"store\",d(E));e(this,\"trackingService\",d(U));e(this,\"capacitorService\",d(le));e(this,\"buildAbsoluteRecordsPath\",je);e(this,\"AppRoutes\",b);e(this,\"page\",D.userProfile);e(this,\"canShowNoticeMenuElement\",this.capacitorService.isNativePlatform());e(this,\"unreadCount\",this.store.select(g.notifications.getUnreadCount));e(this,\"isSuperButton$\",this.store.select(g.superButton.isSuperButton));e(this,\"user$\",this.store.select(g.user.getUser));e(this,\"certificatesCount$\",this.store.select(g.user.getCertificatesCount));e(this,\"membershipsCount$\",this.store.select(g.user.getMembershipsCount));e(this,\"loyaltyCardsCount$\",this.store.select(g.user.getLoyaltyCardsCount));e(this,\"destroy$\",new ot)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateUser(n,i){this.store.dispatch(Gt({name:n,langId:i.id}))}goToMyRecords(){this.trackingService.track({type:M.Action.click,name:V.openUserRecords,element:{type:V.button,name:V.openUserRecords}}),this.clickGoToMyRecords.emit()}logout(){this.trackingService.track({type:M.Action.click,name:V.logOut,element:{type:V.button,name:V.logOut}}),this.clickLogout.emit()}clickGoToProfileInfo(){this.trackingService.track({type:M.Action.click,name:V.openProfileEditor,element:{type:V.button,name:V.openProfileEditor}}),this.goToProfileInfo.emit()}clickGoToMemberships(){this.trackLoyaltyClick(\"subscriptions\"),this.goToMemberships.emit()}clickGoToCertificates(){this.trackLoyaltyClick(\"certificates\"),this.goToCertificates.emit()}clickGoToLoyaltyCard(){this.trackLoyaltyClick(\"loyalty_cards\"),this.goToLoyaltyCard.emit()}clickGoToNotices(){this.goToNotices.emit()}trackLoyaltyClick(n){this.trackingService.track({type:M.Action.click,page:{name:\"user_profile\"},element:{type:\"button\",name:\"open_user_\".concat(n)}})}};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-authorized-user-profile\"]],outputs:{clickGoToMyRecords:\"clickGoToMyRecords\",clickLogout:\"clickLogout\",languageSelect:\"languageSelect\",goToProfileInfo:\"goToProfileInfo\",goToMemberships:\"goToMemberships\",goToCertificates:\"goToCertificates\",goToLoyaltyCard:\"goToLoyaltyCard\",goToNotices:\"goToNotices\"},decls:25,vars:50,consts:[[\"cutType\",\"cut-top\",1,\"substrate-user\",3,\"widthType\"],[\"class\",\"menu-element user-profile-info\",3,\"avatar\",\"name\",\"phone\",\"email\",\"click\",4,\"ngIf\"],[1,\"substrate\",3,\"widthType\"],[4,\"ngIf\"],[3,\"routerLink\",\"skipNavigation\"],[1,\"menu-element\",3,\"click\",\"iconName\",\"title\",\"count\"],[\"class\",\"menu-element\",3,\"iconName\",\"title\",\"canSelect\",\"count\",\"iconWithBackground\",\"click\",4,\"ngIf\"],[\"class\",\"menu-element localization-selector\",3,\"languageSelect\",4,\"ngIf\"],[1,\"menu-element\",\"logout-element\",3,\"click\",\"iconName\",\"title\",\"canSelect\"],[1,\"menu-element\",\"user-profile-info\",3,\"click\",\"avatar\",\"name\",\"phone\",\"email\"],[1,\"menu-element\",3,\"click\"],[3,\"iconName\",\"title\"],[1,\"menu-element\",3,\"click\",\"iconName\",\"title\",\"canSelect\",\"count\",\"iconWithBackground\"],[1,\"menu-element\",\"localization-selector\",3,\"languageSelect\"]],template:function(i,r){i&1&&(c(0,\"app-substrate\",0),T(1,oo,1,5,\"app-user-profile-info\",1),l(2,\"async\"),u(),c(3,\"app-substrate\",2),T(4,no,5,7,\"ng-container\",3),l(5,\"async\"),u(),c(6,\"app-substrate\",2),_(7,\"span\",4),c(8,\"app-menu-element\",5),l(9,\"translate\"),l(10,\"async\"),h(\"click\",function(){return r.clickGoToMemberships()}),u(),_(11,\"span\",4),c(12,\"app-menu-element\",5),l(13,\"translate\"),l(14,\"async\"),h(\"click\",function(){return r.clickGoToCertificates()}),u(),_(15,\"span\",4),c(16,\"app-menu-element\",5),l(17,\"translate\"),l(18,\"async\"),h(\"click\",function(){return r.clickGoToLoyaltyCard()}),u()(),c(19,\"app-substrate\",2),T(20,ro,3,10,\"app-menu-element\",6)(21,ao,1,0,\"app-localization-menu-element\",7),l(22,\"async\"),c(23,\"app-menu-element\",8),l(24,\"translate\"),h(\"click\",function(){return r.logout()}),u()()),i&2&&(s(\"widthType\",\"full-width-half-margin\"),p(),s(\"ngIf\",m(2,30,r.user$)),p(2),s(\"widthType\",\"full-width-half-margin\"),p(),s(\"ngIf\",m(5,32,r.isSuperButton$)===!1),p(2),s(\"widthType\",\"full-width-half-margin\"),p(),s(\"routerLink\",\"/\"+r.AppRoutes.memberships)(\"skipNavigation\",!0),p(),s(\"iconName\",\"profile/abonement\")(\"title\",m(9,34,\"menu.loyalty_subscriptions\"))(\"count\",m(10,36,r.membershipsCount$)),v(\"data-locator\",\"menu_abonement\"),p(3),s(\"routerLink\",\"/\"+r.AppRoutes.certificate)(\"skipNavigation\",!0),p(),s(\"iconName\",\"profile/certificate\")(\"title\",m(13,38,\"menu.loyalty_certificates\"))(\"count\",m(14,40,r.certificatesCount$)),v(\"data-locator\",\"menu_certificate\"),p(3),s(\"routerLink\",\"/\"+r.AppRoutes.loyalty)(\"skipNavigation\",!0),p(),s(\"iconName\",\"profile/loyalty_card\")(\"title\",m(17,42,\"header.loyalty_cards\"))(\"count\",m(18,44,r.loyaltyCardsCount$)),v(\"data-locator\",\"menu_loyalty_card\"),p(3),s(\"widthType\",\"full-width-half-margin\"),p(),s(\"ngIf\",r.canShowNoticeMenuElement),p(),s(\"ngIf\",m(22,46,r.user$)),p(2),s(\"iconName\",\"profile/logout\")(\"title\",m(24,48,\"menu.logout\"))(\"canSelect\",!1),v(\"data-locator\",\"logout-btn\"))},dependencies:[Ct,R,qe,$e,We,ni,ii,Bi,A,C],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;background-color:var(--widget-ui-kit-color-grey-background)}.localization-selector[_ngcontent-%COMP%]{display:block}.personal-info[_ngcontent-%COMP%]{display:flex;width:100%;height:94px}.menu-element[_ngcontent-%COMP%]{cursor:pointer;padding:10px 0}.logout-element[_ngcontent-%COMP%]{color:var(--y-core-color-text-negative)}.logout-element[_ngcontent-%COMP%]     ui-kit-svg-icon{color:var(--y-core-color-icon-negative)}.user-profile-info[_ngcontent-%COMP%]{padding:4px 0;align-items:center}'],changeDetection:0}));let t=o;return t})();var Ui=(()=>{let o=class o{constructor(){e(this,\"clickGoToAuthorization\",new I);e(this,\"localizationService\",d(De));e(this,\"languages$\",this.localizationService.getLanguages());e(this,\"selectedLanguage$\",this.localizationService.getLanguage())}goToAuthorization(){this.clickGoToAuthorization.emit()}};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-unauthorized-user-profile\"]],outputs:{clickGoToAuthorization:\"clickGoToAuthorization\"},decls:6,vars:12,consts:[[1,\"substrate\",3,\"widthType\",\"cutType\"],[1,\"menu-element\",3,\"languages\",\"selectedLanguage\"],[1,\"login-button\",3,\"click\",\"title\"]],template:function(i,r){i&1&&(c(0,\"app-substrate\",0),_(1,\"app-localization-selector\",1),l(2,\"async\"),l(3,\"async\"),c(4,\"ui-kit-button\",2),l(5,\"translate\"),h(\"click\",function(){return r.goToAuthorization()}),u()()),i&2&&(s(\"widthType\",\"full-width\")(\"cutType\",\"cut-top\"),p(),s(\"languages\",m(2,6,r.languages$))(\"selectedLanguage\",m(3,8,r.selectedLanguage$)),p(3),s(\"title\",m(5,10,\"menu.login\")),v(\"data-locator\",\"login-btn\"))},dependencies:[qe,Zt,$,A,C],styles:[\"[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   .substrate[_ngcontent-%COMP%]{margin-bottom:8px;display:flex;flex-direction:column;gap:16px}[_nghost-%COMP%]   .menu-element[_ngcontent-%COMP%]{cursor:pointer}.login-button[_ngcontent-%COMP%]{display:block}\"],changeDetection:0}));let t=o;return t})();function lo(t,o){if(t&1){let a=w();c(0,\"app-header\",3),h(\"backClick\",function(){k(a);let i=f();return P(i.goToFirstStep())}),u()}if(t&2){let a=o.ngVar;s(\"isBackButton\",!a)(\"isTitleChevronArrow\",!0)}}function mo(t,o){if(t&1){let a=w();c(0,\"app-authorized-user-profile\",12),h(\"clickGoToMyRecords\",function(){k(a);let i=f(2);return P(i.goToMyRecords())})(\"clickLogout\",function(){k(a);let i=f(2);return P(i.showQuestionAndConfirmation())})(\"goToProfileInfo\",function(){k(a);let i=f(2);return P(i.goToProfileInfo())})(\"goToMemberships\",function(){k(a);let i=f(2);return P(i.goToMemberships())})(\"goToCertificates\",function(){k(a);let i=f(2);return P(i.goToCertificates())})(\"goToLoyaltyCard\",function(){k(a);let i=f(2);return P(i.goToLoyaltyCard())})(\"goToNotices\",function(){k(a);let i=f(2);return P(i.goToNotices())}),u()}}function uo(t,o){if(t&1){let a=w();c(0,\"app-unauthorized-user-profile\",13),h(\"clickGoToAuthorization\",function(){k(a);let i=f(2);return P(i.goToAuthorization())}),u()}}function go(t,o){if(t&1){let a=w();c(0,\"ui-kit-button\",14),h(\"click\",function(){k(a);let i=f(2);return P(i.openEnvironmentSettings())}),u()}if(t&2){let a=f(2);s(\"title\",\"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438 \\u043E\\u043A\\u0440\\u0443\\u0436\\u0435\\u043D\\u0438\\u044F\")(\"type\",a.buttonType.tertiary)}}function fo(t,o){if(t&1){let a=w();c(0,\"div\",4)(1,\"div\",5),T(2,mo,1,0,\"app-authorized-user-profile\",6)(3,uo,1,0,\"app-unauthorized-user-profile\",7),u(),c(4,\"div\",8),T(5,go,1,2,\"ui-kit-button\",9),c(6,\"ui-kit-button\",10),h(\"click\",function(){k(a);let i=f();return P(i.newOrder())}),u()(),_(7,\"ui-kit-brand-link\",11),u()}if(t&2){let a=o.ngVar,n=f();p(2),s(\"ngIf\",a),p(),s(\"ngIf\",!a),p(2),s(\"ngIf\",n.isDebugMode),p(),s(\"title\",n.recordNewTitle),v(\"data-locator\",\"new_booking_btn\")}}var Ni=(()=>{let o=class o{constructor(){e(this,\"store\",d(ze));e(this,\"router\",d(J));e(this,\"route\",d(Y));e(this,\"orderManager\",d(pi));e(this,\"translatePipe\",d(C));e(this,\"trackingService\",d(U));e(this,\"metrika\",d(mi));e(this,\"capacitorService\",d(le));e(this,\"modalService\",d(pe));e(this,\"altegiomePromoService\",d(ui));e(this,\"appNavigationService\",d(F));e(this,\"buttonType\",se);e(this,\"leading\",Me);e(this,\"trailing\",kt);e(this,\"loggedIn$\",this.store.select(g.user.isLoggedIn).pipe(pt(),ct(n=>!n,!0)));e(this,\"isSuperButton$\",this.store.select(g.superButton.isSuperButton));e(this,\"isDebugMode\",Xt.debug);e(this,\"loadingBenchmarksDirective\",d(He,{self:!0}));e(this,\"isReady$\",new nt(!1));e(this,\"destroy$\",new z(1));this.loadingBenchmarksDirective.appLoadingBenchmarks=[\"booking_profile_page_open_cold\",\"booking_profile_page_open\"],this.loadingBenchmarksDirective.dataSource=this.isReady$.pipe(ie(Boolean))}get recordNewTitle(){return this.translatePipe.transform(\"record.new\")}ngOnInit(){this.loggedIn$.pipe(lt(this.store.select(g.user.getUserPhone),this.store.select(g.currentCompany.getCurrentCompany)),O(this.destroy$)).subscribe(([n,i,r])=>{if(this.isReady$.next(!0),n){this.store.dispatch(Ht({companyId:r.id})),this.store.dispatch(Kt({companyId:r.id})),this.store.dispatch(qt({groupId:r.main_group_id,companyId:r.id})),i&&this.capacitorService.isNativePlatform()&&this.store.dispatch(new Wt({showLoading:!1})),this.trackingService.pageView(D.userProfile);return}this.trackingService.pageView(D.widgetSettingsAndLogIn)}),this.store.select(g.currentCompany.getCurrentCompany).pipe(Z(),O(this.destroy$)).subscribe(n=>{this.metrika.reachGoal(\"lk_open\",{companyId:n==null?void 0:n.id,companyName:n==null?void 0:n.title})})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}goToLastSelectedCompanyOr(n){this.store.select(g.currentCompany.getCurrentCompanyId).pipe(Z(),O(this.destroy$)).subscribe(i=>{i?this.router.navigate([\"/company/\",\"\".concat(i)],{queryParamsHandling:\"merge\"}):n()})}close(){this.goToLastSelectedCompanyOr(()=>{this.router.navigate([\"/\"],{queryParamsHandling:\"merge\"})})}goToFirstStep(){this.appNavigationService.goBack({url:\"/\"})}goToAuthorization(){return N(this,null,function*(){this.trackingService.track({type:M.Action.click,name:D.openLogInPage,element:{type:D.button,name:D.openLogInPage}}),this.store.selectSnapshot(g.bookform.getIsAltegiomePromoFeatureEnabled)&&this.altegiomePromoService.openAuthPromo();let i=yield this.orderManager.getOrder();this.router.navigate([Ge()],{queryParams:{[Nt]:i.toString(),[de]:this.router.url},queryParamsHandling:\"merge\"})})}goToMyRecords(){this.router.navigate([je()],{queryParamsHandling:\"preserve\"})}newOrder(){this.trackingService.track({type:M.Action.click,name:D.openCreateRecordFlow,element:{type:D.button,name:D.openCreateRecordFlow}}),this.orderManager.newOrder()}goToProfileInfo(){this.router.navigate([b[\"personal-info\"]],{relativeTo:this.route,queryParamsHandling:\"preserve\"})}goToMemberships(){this.router.navigate([b.memberships],{relativeTo:this.route,queryParamsHandling:\"preserve\"})}goToCertificates(){this.router.navigate([b.certificate],{relativeTo:this.route,queryParamsHandling:\"preserve\"})}goToLoyaltyCard(){this.router.navigate([b.loyalty],{relativeTo:this.route,queryParamsHandling:\"preserve\"})}goToNotices(){this.router.navigate([b.notices],{relativeTo:this.route,queryParamsHandling:\"preserve\"})}showQuestionAndConfirmation(){return N(this,null,function*(){(yield this.modalService.openModal({component:Yt,componentData:{title:this.translatePipe.transform(\"menu.exit_personal_account\")+\"?\",confirmButtonText:this.translatePipe.transform(\"menu.logout\"),cancelButtonText:this.translatePipe.transform(\"button.canceling\"),titleDataLocator:\"logout_modal_window_text\",confirmDataLocator:\"logout_modal_window_exit_btn\",cancelDataLocator:\"logout_modal_window_cancel_btn\"},params:{modalType:Ne.default,dataLocator:\"logout_modal_window\"}}).instance.result.catch(ve))&&this.logout()})}openEnvironmentSettings(){this.router.navigate([Ot],{queryParamsHandling:\"preserve\"})}logout(){this.trackingService.track({type:M.Action.click,name:he.logOutConfirm,element:{type:he.button,name:he.logOutConfirm}}),this.store.dispatch(new Ft(!1)),this.appNavigationService.returnToMain()}};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-profile-page\"]],features:[ut([{directive:He,inputs:[\"appLoadingBenchmarks\",\"appLoadingBenchmarks\",\"dataSource\",\"dataSource\"]}])],decls:6,vars:10,consts:[[\"theme\",\"primary\",3,\"isBackButton\",\"isTitleChevronArrow\",\"backClick\",4,\"ngVar\"],[\"theme\",\"primary\",1,\"header-addition\",3,\"title\",\"zIndex\"],[\"class\",\"profile-content\",4,\"ngVar\"],[\"theme\",\"primary\",3,\"backClick\",\"isBackButton\",\"isTitleChevronArrow\"],[1,\"profile-content\"],[1,\"wrapper\"],[3,\"clickGoToMyRecords\",\"clickLogout\",\"goToProfileInfo\",\"goToMemberships\",\"goToCertificates\",\"goToLoyaltyCard\",\"goToNotices\",4,\"ngIf\"],[3,\"clickGoToAuthorization\",4,\"ngIf\"],[1,\"fixed-button\"],[\"class\",\"env-button\",3,\"title\",\"type\",\"click\",4,\"ngIf\"],[3,\"click\",\"title\"],[1,\"brand-link\"],[3,\"clickGoToMyRecords\",\"clickLogout\",\"goToProfileInfo\",\"goToMemberships\",\"goToCertificates\",\"goToLoyaltyCard\",\"goToNotices\"],[3,\"clickGoToAuthorization\"],[1,\"env-button\",3,\"click\",\"title\",\"type\"]],template:function(i,r){i&1&&(T(0,lo,1,2,\"app-header\",0),l(1,\"async\"),_(2,\"app-header-addition\",1),l(3,\"translate\"),T(4,fo,8,5,\"div\",2),l(5,\"async\")),i&2&&(s(\"ngVar\",m(1,4,r.isSuperButton$)),p(2),s(\"title\",m(3,6,\"header.profile\"))(\"zIndex\",99),p(2),s(\"ngVar\",m(5,8,r.loggedIn$)))},dependencies:[fe,hi,R,$,me,ce,Ei,Ui,A,C],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{height:100%}.profile-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;justify-content:space-between;padding-bottom:150px}.profile-content__title[_ngcontent-%COMP%]{background-color:#fff;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;color:var(--y-core-color-color_text_black);font-style:normal;font-weight:700;font-size:24px;line-height:28px;padding:16px 16px 4px}.profile-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{padding:0 0 16px}.profile-content[_ngcontent-%COMP%]   .brand-link[_ngcontent-%COMP%]{padding:40px 0;z-index:1}.env-button[_ngcontent-%COMP%]{display:block;margin-bottom:24px}.head-text[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:28px}.header-addition[_ngcontent-%COMP%]{overflow:initial;padding:16px 16px 4px}.fixed-button[_ngcontent-%COMP%]{z-index:200}'],changeDetection:0}));let t=o;return t})();var X=(()=>{let o=class o{constructor(n,i){e(this,\"store\");e(this,\"actions$\");this.store=n,this.actions$=i}canActivate(){return te([this.store.select(g.bookform.getBookform),this.store.select(g.currentCompany.getCurrentCompany)]).pipe(ie(([n])=>!!n),be(1),st(([n,i])=>!i&&n.company_id?(this.store.dispatch(new zt(n.company_id)),at([this.actions$.pipe(Ze(Dt)),this.actions$.pipe(Ze(Vt))]).pipe(Z())):rt(!0)),Ce(()=>!0))}canActivateChild(){return this.canActivate()}};e(o,\"\\u0275fac\",function(i){return new(i||o)(Q(E),Q(bt))}),e(o,\"\\u0275prov\",oe({token:o,factory:o.\\u0275fac}));let t=o;return t})();var G=function(t){return t.button=\"button\",t.userProfileLogIn=\"user_profile_log_in\",t.superButtonLogIn=\"superbutton_log_in\",t.smsLogIn=\"sms_log_in\",t.smsAuthTab=\"sms_auth_tab\",t.buttonSmsAuthTab=\"button_sms_auth_tab\",t.passwordAuthTab=\"password_auth_tab\",t.buttonPasswordAuthTab=\"button_password_auth_tab\",t}(G||{}),Je=function(t){return t.password=\"password\",t.sms=\"sms\",t}(Je||{});var _e=function(t){return t.button=\"button\",t.receiveSmsCode=\"receive_sms_code\",t.buttonReceiveSmsCode=\"button_receive_sms_code\",t}(_e||{});var Di=(()=>{let o=class o{constructor(n,i,r,y,q,Hi,Ki){e(this,\"formBuilder\");e(this,\"store\");e(this,\"router\");e(this,\"route\");e(this,\"trackingService\");e(this,\"cdr\");e(this,\"countriesSelectorsService\");e(this,\"allowConfirmPhone\");e(this,\"showPersonalDataBlock\");e(this,\"form\");e(this,\"checkboxControl\",new ae(!1,W.requiredTrue));e(this,\"company$\");e(this,\"defaultCountryCode$\");e(this,\"destroy$\",new z(1));e(this,\"buildForm\",([n,i])=>{let r=i||\"\";r=!r&&n&&n.phone?n.phone:r,this.form=this.formBuilder.group({phone:[r,[W.required]]})});this.formBuilder=n,this.store=i,this.router=r,this.route=y,this.trackingService=q,this.cdr=Hi,this.countriesSelectorsService=Ki,this.company$=this.store.select(g.currentCompany.getCurrentCompany),this.defaultCountryCode$=this.countriesSelectorsService.getDefaultCountryCode$(this.company$.pipe(Ce(Wi=>Wi.country_id)))}ngOnInit(){te(this.store.select(g.user.getUser),this.store.select(g.user.getAuthPhone)).pipe(be(1),O(this.destroy$)).subscribe(this.buildForm)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}confirmPhone(){this.trackingService.track({type:M.Action.click,name:_e.receiveSmsCode,element:{type:_e.button,name:_e.buttonReceiveSmsCode}}),this.form.markAllAsTouched(),this.checkboxControl.updateValueAndValidity(),this.checkboxControl.markAsTouched(),this.checkboxControl.updateValueAndValidity(),this.cdr.detectChanges(),!(this.form.invalid||this.checkboxControl.invalid)&&(this.store.dispatch(new Rt(this.form.controls.phone.value)),this.router.navigate([ti()],{queryParams:this.route.queryParams.getValue(),queryParamsHandling:\"merge\"}))}};e(o,\"\\u0275fac\",function(i){return new(i||o)(B(Ee),B(E),B(J),B(Y),B(U),B(we),B(ki))}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-auth-by-sms\"]],inputs:{allowConfirmPhone:\"allowConfirmPhone\",showPersonalDataBlock:\"showPersonalDataBlock\"},decls:14,vars:22,consts:[[1,\"subtext\"],[3,\"keydown.enter\",\"paste\",\"formGroup\"],[\"appPhoneNumberValidator\",\"\",\"formControlName\",\"phone\",3,\"defaultCountryCode\",\"title\",\"errorMessage\",\"dataLocator\",\"dataLocatorError\"],[1,\"submit-button-wrapper\"],[\"topContent\",\"\",3,\"checkboxControl\"],[\"midContent\",\"\",3,\"click\",\"keydown.enter\",\"title\"]],template:function(i,r){i&1&&(c(0,\"p\",0),x(1),l(2,\"translate\"),u(),c(3,\"form\",1),h(\"keydown.enter\",function(){return r.confirmPhone()})(\"paste\",function(){return r.form.updateValueAndValidity()}),_(4,\"ui-kit-form-input\",2),l(5,\"async\"),l(6,\"translate\"),l(7,\"titlecase\"),l(8,\"translate\"),u(),c(9,\"div\",3)(10,\"app-record-page-footer\"),_(11,\"app-privacy-policy-checkbox\",4),c(12,\"ui-kit-button\",5),l(13,\"translate\"),h(\"click\",function(){return r.confirmPhone()})(\"keydown.enter\",function(){return r.confirmPhone()}),u()()()),i&2&&(p(),K(\" \",m(2,10,\"login.input_phone_num_1\"),\"\\n\"),p(2),s(\"formGroup\",r.form),p(),s(\"defaultCountryCode\",m(5,12,r.defaultCountryCode$))(\"title\",m(7,16,m(6,14,\"address.phone\")))(\"errorMessage\",m(8,18,\"confirm.errors.phone.incorrect\"))(\"dataLocator\",\"phone_input\")(\"dataLocatorError\",\"phone_validation_text\"),p(7),s(\"checkboxControl\",r.checkboxControl),p(),s(\"title\",m(13,20,\"login.get_code\")),v(\"data-locator\",\"receive_sms_btn\"))},dependencies:[Ke,Pi,Ue,Re,$,Ie,re,Ae,Be,Le,A,yt,C],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:24px 16px}[_nghost-%COMP%]     .record-page-footer{padding-left:0!important;padding-right:0!important}.subtext[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-grey-main)}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-bottom:24px}.submit-button-wrapper[_ngcontent-%COMP%]{margin-top:12px}'],changeDetection:0}));let t=o;return t})();var ye=function(t){return t.button=\"button\",t.passwordLogIn=\"password_log_in\",t.buttonPasswordLogIn=\"button_password_log_in\",t}(ye||{});var Vi=(()=>{let o=class o{constructor(n,i,r,y){e(this,\"formBuilder\");e(this,\"store\");e(this,\"trackingService\");e(this,\"cdr\");e(this,\"allowLogin\");e(this,\"showPersonalDataBlock\");e(this,\"form\");e(this,\"checkboxControl\",new ae(!1,W.requiredTrue));e(this,\"destroy$\",new z(1));e(this,\"buildForm\",()=>{this.form=this.formBuilder.group({login:[\"\",[W.required]],password:[\"\",[W.required]]})});e(this,\"setFormData\",([n,i])=>{let r=i||\"\";r=!r&&n&&n.phone?n.phone:r,r=!r.length&&n&&n.email?n.email:r,this.form.patchValue({login:r})});this.formBuilder=n,this.store=i,this.trackingService=r,this.cdr=y}ngOnInit(){this.buildForm(),te(this.store.select(g.user.getUser),this.store.select(g.user.getAuthPhone)).pipe(O(this.destroy$)).subscribe(this.setFormData)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}auth(){this.trackingService.track({type:M.Action.click,name:ye.passwordLogIn,element:{type:ye.button,name:ye.buttonPasswordLogIn}}),this.form.markAllAsTouched(),this.checkboxControl.updateValueAndValidity(),this.checkboxControl.markAsTouched(),this.checkboxControl.updateValueAndValidity(),this.cdr.detectChanges(),!(this.form.invalid||this.checkboxControl.invalid)&&this.store.dispatch(new $t(this.form.controls.login.value,this.form.controls.password.value))}};e(o,\"\\u0275fac\",function(i){return new(i||o)(B(Ee),B(E),B(U),B(we))}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-auth-by-pass\"]],inputs:{allowLogin:\"allowLogin\",showPersonalDataBlock:\"showPersonalDataBlock\"},decls:13,vars:19,consts:[[1,\"subtext\"],[3,\"keydown.enter\",\"formGroup\"],[\"formControlName\",\"login\",3,\"title\",\"type\",\"dataLocator\"],[\"formControlName\",\"password\",3,\"title\",\"type\",\"dataLocator\"],[1,\"submit-button-wrapper\"],[\"topContent\",\"\",3,\"checkboxControl\"],[\"midContent\",\"\",3,\"click\",\"keydown.enter\",\"title\"]],template:function(i,r){i&1&&(c(0,\"p\",0),x(1),l(2,\"translate\"),u(),c(3,\"form\",1),h(\"keydown.enter\",function(){return r.auth()}),_(4,\"ui-kit-form-input\",2),l(5,\"translate\"),_(6,\"ui-kit-form-input\",3),l(7,\"translate\"),c(8,\"div\",4)(9,\"app-record-page-footer\"),_(10,\"app-privacy-policy-checkbox\",5),c(11,\"ui-kit-button\",6),l(12,\"translate\"),h(\"click\",function(){return r.auth()})(\"keydown.enter\",function(){return r.auth()}),u()()()()),i&2&&(p(),K(\" \",m(2,11,\"login.input_login_and_password\"),\"\\n\"),p(2),s(\"formGroup\",r.form),p(),s(\"title\",m(5,13,\"login.phone_or_email\"))(\"type\",\"text\")(\"dataLocator\",\"login_input\"),p(2),s(\"title\",m(7,15,\"login.pass\"))(\"type\",\"password\")(\"dataLocator\",\"password_input\"),p(4),s(\"checkboxControl\",r.checkboxControl),p(),s(\"title\",m(12,17,\"menu.login\")),v(\"data-locator\",\"login_btn\"))},dependencies:[Ke,Ue,Re,$,Ie,re,Ae,Be,Le,C],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:24px 16px}[_nghost-%COMP%]     .record-page-footer{padding-left:0!important;padding-right:0!important}.subtext[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-grey-main)}p[_ngcontent-%COMP%]{margin-bottom:24px}'],changeDetection:0}));let t=o;return t})();function ko(t,o){if(t&1){let a=w();c(0,\"ui-kit-tabs\",8),h(\"tabSelect\",function(i){k(a);let r=f(3);return P(r.selectTab(i))}),c(1,\"ui-kit-tab\",9),l(2,\"translate\"),_(3,\"app-auth-by-sms\",10),u(),c(4,\"ui-kit-tab\",9),l(5,\"translate\"),_(6,\"app-auth-by-pass\",11),u()()}if(t&2){let a=f(3);s(\"selectedTabId\",a.selectedTabId),p(),s(\"tabTitle\",m(2,13,\"login.code_auth\"))(\"tabId\",a.authPageEnum.sms)(\"dataLocator\",\"sms_authorization_tab\"),v(\"data-locator\",\"sms_authorization_tab_content\"),p(2),s(\"allowConfirmPhone\",a.checkboxControl.valid)(\"showPersonalDataBlock\",a.showPersonalDataBlock),p(),s(\"tabTitle\",m(5,15,\"login.pass_auth\"))(\"tabId\",a.authPageEnum.password)(\"dataLocator\",\"login_tab\"),v(\"data-locator\",\"login_tab_content\"),p(2),s(\"allowLogin\",a.checkboxControl.valid)(\"showPersonalDataBlock\",a.showPersonalDataBlock)}}function Po(t,o){if(t&1&&(_(0,\"app-company-fallback-tile\",12),l(1,\"translate\"),l(2,\"translate\"),l(3,\"async\"),l(4,\"async\")),t&2){let a=f(2).ngVar,n=f();s(\"iconName\",\"profile/lock\")(\"title\",m(1,7,\"login.errors.login_unavailable\"))(\"text\",m(2,9,\"login.errors.login_unavailable_message\"))(\"companyId\",a==null?null:a.id)(\"applications\",m(3,11,n.applications$))(\"altegiomeEnabled\",m(4,13,n.isAltegiomeEnabled$)),v(\"data-locator\",\"auth_unavailable_info\")}}function So(t,o){if(t&1&&(Se(0),T(1,ko,7,17,\"ui-kit-tabs\",6)(2,Po,5,15,\"app-company-fallback-tile\",7),Te()),t&2){let a=o.ngVar;p(),s(\"ngIf\",a),p(),s(\"ngIf\",!a)}}function To(t,o){if(t&1&&(c(0,\"div\")(1,\"div\",4),_(2,\"ui-kit-avatar\",5),c(3,\"h2\"),x(4),u()(),T(5,So,3,2,\"ng-container\",2),l(6,\"async\"),u()),t&2){let a=o.ngVar,n=f();p(2),s(\"url\",a==null?null:a.logo)(\"round\",!0),p(),v(\"data-locator\",\"salon_title\"),p(),H(a==null?null:a.title),p(),s(\"ngVar\",m(6,5,n.isSmsEnabled$))}}var zi=(()=>{let o=class o{constructor(){e(this,\"router\",d(J));e(this,\"store\",d(ze));e(this,\"activatedRoute\",d(Y));e(this,\"trackingService\",d(U));e(this,\"navigationStepUrlResolver\",d(ai));e(this,\"appNavigationService\",d(F));e(this,\"phone\",\"\");e(this,\"showPersonalDataBlock\",!this.store.selectSnapshot(g.widgetSettings.getWidgetHideAgreement));e(this,\"checkboxControl\",new ae(!this.showPersonalDataBlock,W.requiredTrue));e(this,\"authPageEnum\",Je);e(this,\"selectedTabId\");e(this,\"activeTab\");e(this,\"tabsIds\",[this.authPageEnum.password,this.authPageEnum.sms]);e(this,\"isSuperButton$\",this.store.select(g.superButton.isSuperButton));e(this,\"company$\",this.store.select(g.currentCompany.getCurrentCompany));e(this,\"isAltegiomeEnabled$\",this.store.select(g.bookform.getIsAltegiomeEnabled));e(this,\"isSmsEnabled$\",this.store.select(g.currentCompany.getSmsEnabled));e(this,\"applications$\",this.store.select(g.applications.getApplications));e(this,\"destroy$\",new z(1))}ngOnInit(){this.goToProfileWhenUserHasToken(),this.updateSelectedTab(),this.trackPageView()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}get continueButtonTitle(){return this.activeTab===Je.password?\"menu.login\":\"login.get_code\"}updateSelectedTab(){this.selectedTabId=this.tabsIds.find(n=>n===this.activatedRoute.snapshot.queryParams.tab)||this.authPageEnum.sms}selectTab(n){this.updateSelectedTab(),this.activeTab=this.tabsIds.find(i=>i===n)||this.authPageEnum.sms,this.trackTab(n)}navigateToParentPage(){return N(this,null,function*(){var i;let n=(i=this.activatedRoute)==null?void 0:i.snapshot.queryParamMap.get(ue);yield this.navigationStepUrlResolver.removeQueryParamFromCurrentState(ue),n?this.appNavigationService.goBack({url:n}):this.appNavigationService.goBack({url:\"profile\"})})}openLinkOnNewTab(n){return N(this,null,function*(){let i=yield Ve(n);window.open(i,\"_blank\").focus()})}trackPageView(){this.isSuperButton$.pipe(Z(),O(this.destroy$)).subscribe(n=>{if(n){this.trackingService.pageView(G.superButtonLogIn);return}else if(this.selectedTabId===this.authPageEnum.sms){this.trackingService.pageView(G.smsLogIn);return}this.trackingService.pageView(G.userProfileLogIn)})}trackTab(n){if(n===this.selectedTabId)return;let i,r;n===this.authPageEnum.sms&&(i=G.smsAuthTab,r=G.buttonSmsAuthTab),n===this.authPageEnum.password&&(i=G.passwordAuthTab,r=G.buttonPasswordAuthTab),this.trackingService.track({type:M.Action.click,name:i,element:{type:G.button,name:r}})}goToProfileWhenUserHasToken(){this.store.select(g.user.getUserToken).pipe(ie(n=>n!==null),O(this.destroy$)).subscribe(()=>{var r,y,q;let n=this.router.createUrlTree([\"profile\"],{queryParams:this.activatedRoute.snapshot.queryParams,queryParamsHandling:\"merge\"}).toString(),i=(y=(r=this.activatedRoute)==null?void 0:r.snapshot)==null?void 0:y.queryParamMap.get(de);this.appNavigationService.returnToMain({successUrl:i||n,backUrl:(q=this.activatedRoute)==null?void 0:q.snapshot.queryParamMap.get(ue)})})}};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-auth-page\"]],decls:5,vars:4,consts:[[\"theme\",\"primary\",1,\"auth_header\",3,\"backClick\",\"isContentHidden\"],[1,\"auth-page-wrapper\"],[4,\"ngVar\"],[1,\"brand-link\"],[1,\"container\"],[\"size\",\"big\",3,\"url\",\"round\"],[3,\"selectedTabId\",\"tabSelect\",4,\"ngIf\"],[\"trackEventName\",\"loginUnavailable\",3,\"iconName\",\"title\",\"text\",\"companyId\",\"applications\",\"altegiomeEnabled\",4,\"ngIf\"],[3,\"tabSelect\",\"selectedTabId\"],[3,\"tabTitle\",\"tabId\",\"dataLocator\"],[3,\"allowConfirmPhone\",\"showPersonalDataBlock\"],[3,\"allowLogin\",\"showPersonalDataBlock\"],[\"trackEventName\",\"loginUnavailable\",3,\"iconName\",\"title\",\"text\",\"companyId\",\"applications\",\"altegiomeEnabled\"]],template:function(i,r){i&1&&(c(0,\"app-header\",0),h(\"backClick\",function(){return r.navigateToParentPage()}),u(),c(1,\"div\",1),T(2,To,7,7,\"div\",2),l(3,\"async\"),_(4,\"ui-kit-brand-link\",3),u()),i&2&&(s(\"isContentHidden\",!0),p(2),s(\"ngVar\",m(3,2,r.company$)))},dependencies:[fe,R,di,Fe,bi,Ci,me,ce,Di,Vi,A,C],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{min-height:100%;background:var(--y-core-color-surface-primary);display:flex;flex-direction:column}.container[_ngcontent-%COMP%]{padding:12px 16px 0}h2[_ngcontent-%COMP%]{padding:16px 0}.auth-form[_ngcontent-%COMP%]{flex-basis:380px}.brand-link[_ngcontent-%COMP%]{padding:40px 0}.auth-page-wrapper[_ngcontent-%COMP%]{background:var(--y-core-color-surface-primary);height:calc(100% - 64px);flex:1;display:flex;flex-direction:column;justify-content:space-between}'],changeDetection:0}));let t=o;return t})();var it=function(t){return t.userProfileEditor=\"user_profile_editor\",t}(it||{});var Ri=(()=>{let o=class o extends Bt{constructor(i){super(i);e(this,\"modalService\");e(this,\"buttonType\",se);this.modalService=i}deleteAccount(){this.close(!0)}closeModal(){this.dismiss()}};e(o,\"\\u0275fac\",function(r){return new(r||o)(B(pe))}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-delete-account-modal\"]],features:[mt],decls:15,vars:16,consts:[[1,\"header\"],[1,\"title\"],[1,\"secondary-button\",3,\"click\",\"type\",\"title\"],[3,\"click\",\"title\"]],template:function(r,y){r&1&&(c(0,\"div\",0),x(1),l(2,\"translate\"),u(),c(3,\"div\",1)(4,\"div\"),x(5),l(6,\"translate\"),u(),_(7,\"br\"),c(8,\"div\"),x(9),l(10,\"translate\"),u()(),c(11,\"ui-kit-button\",2),l(12,\"translate\"),h(\"click\",function(){return y.deleteAccount()}),u(),c(13,\"ui-kit-button\",3),l(14,\"translate\"),h(\"click\",function(){return y.closeModal()}),u()),r&2&&(p(),K(\" \",m(2,6,\"profile.remove_process\"),\"\\n\"),p(4),H(m(6,8,\"profile.remove_text1\")),p(4),H(m(10,10,\"profile.remove_text4\")),p(2),s(\"type\",y.buttonType.tertiary)(\"title\",m(12,12,\"profile.accept_remove\")),p(2),s(\"title\",m(14,14,\"Close\")))},dependencies:[$,C],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;padding:16px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:60px;text-align:center;color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:16px;line-height:24px}[_nghost-%COMP%]   .secondary-button[_ngcontent-%COMP%]{display:block;margin-bottom:8px}'],changeDetection:0}));let t=o;return t})();function wo(t,o){if(t&1){let a=w();c(0,\"app-continue-button\",5),l(1,\"translate\"),l(2,\"async\"),h(\"activeButtonClick\",function(){k(a);let i=f(2);return P(i.openDeletingAccountModal())}),u()}if(t&2){let a=f(2);s(\"title\",m(1,3,\"profile.remove\"))(\"type\",a.buttonType.secondary)(\"disabled\",m(2,5,a.userDeleted$))}}function xo(t,o){if(t&1&&(c(0,\"div\",2),_(1,\"app-personal-info\",3),T(2,wo,3,7,\"app-continue-button\",4),u()),t&2){let a=o.ngIf,n=f();p(),s(\"avatar\",a.avatar)(\"name\",a.name)(\"phone\",a.phone)(\"email\",a.email),p(),s(\"ngIf\",n.isNativePlatform)}}var $i=(()=>{let o=class o{constructor(){e(this,\"store\",d(E));e(this,\"trackingService\",d(U));e(this,\"notification\",d(St));e(this,\"capacitor\",d(le));e(this,\"translate\",d(C));e(this,\"modalService\",d(pe));e(this,\"appNavigationService\",d(F));e(this,\"buttonType\",se);e(this,\"leading\",Me);e(this,\"deleteAccountModalIsOpen\",!1);e(this,\"user$\",this.store.select(g.user.getUser));e(this,\"userDeleted$\",this.store.select(g.user.userIsDeleted))}get isNativePlatform(){return this.capacitor.isNativePlatform()}ngOnInit(){this.trackingService.pageView(it.userProfileEditor)}navigateToProfile(){this.appNavigationService.goBack({url:b.profile})}openDeletingAccountModal(){return N(this,null,function*(){(yield this.modalService.openModal({component:Ri,componentData:{},params:{modalType:Ne.default,isGrayBackground:!0}}).instance.result.catch(ve))&&this.sendRequestForDeletingAccount()})}sendRequestForDeletingAccount(){this.store.dispatch(jt()),this.notification.notifySuccess(this.translate.transform(\"profile.remove_request\"))}};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-personal-info-page\"]],decls:3,vars:3,consts:[[\"theme\",\"primary\",3,\"backClick\"],[\"class\",\"personal-info-container\",4,\"ngIf\"],[1,\"personal-info-container\"],[3,\"avatar\",\"name\",\"phone\",\"email\"],[3,\"title\",\"type\",\"disabled\",\"activeButtonClick\",4,\"ngIf\"],[3,\"activeButtonClick\",\"title\",\"type\",\"disabled\"]],template:function(i,r){i&1&&(c(0,\"app-header\",0),h(\"backClick\",function(){return r.navigateToProfile()}),u(),T(1,xo,3,5,\"div\",1),l(2,\"async\")),i&2&&(p(),s(\"ngIf\",m(2,1,r.user$)))},dependencies:[fe,R,Qt,yi,A,C],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;height:100%;background-color:var(--y-core-color-surface-primary)}.personal-info-container[_ngcontent-%COMP%]{padding:16px 16px 40px}']}));let t=o;return t})();var Fi=(()=>{let o=class o{constructor(n,i){e(this,\"store\");e(this,\"appNavigationService\");this.store=n,this.appNavigationService=i}canActivate(){return N(this,null,function*(){return(yield Ve(this.store.select(g.user.isLoggedIn)))?(this.appNavigationService.returnToMain(),!1):!0})}};e(o,\"\\u0275fac\",function(i){return new(i||o)(Q(E),Q(F))}),e(o,\"\\u0275prov\",oe({token:o,factory:o.\\u0275fac,providedIn:\"root\"}));let t=o;return t})();var ji=(()=>{let o=class o{constructor(){e(this,\"store\",d(E));e(this,\"currentCompany\",d(ri));e(this,\"activatedRoute\",d(Y));e(this,\"appNavigationService\",d(F));e(this,\"phone$\",this.store.select(g.user.getAuthPhone))}get currentCompanyId(){return this.currentCompany.getCurrentCompanyId()}codeConfirmed(){return N(this,null,function*(){var i,r,y,q;let n=(y=(r=(i=this.activatedRoute)==null?void 0:i.snapshot)==null?void 0:r.queryParamMap.get(de))!=null?y:\"profile\";this.appNavigationService.returnToMain({successUrl:n||\"profile\",backUrl:(q=this.activatedRoute)==null?void 0:q.snapshot.queryParamMap.get(ue)})})}changePhone(){this.appNavigationService.goBack()}};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275cmp\",S({type:o,selectors:[[\"app-auth-by-code-page\"]],decls:6,vars:11,consts:[[3,\"title\",\"titleDataLocator\",\"leadingDataLocator\",\"leading\"],[\"leading\",\"\",\"role\",\"button\",1,\"button-back\",3,\"click\",\"name\"],[1,\"verification-container\"],[3,\"codeConfirmed\",\"changePhoneRequested\",\"phone\",\"companyId\"]],template:function(i,r){i&1&&(c(0,\"ui-kit-header\",0),l(1,\"translate\"),c(2,\"ui-kit-svg-icon\",1),h(\"click\",function(){return r.changePhone()}),u()(),c(3,\"div\",2)(4,\"app-code-verification\",3),l(5,\"async\"),h(\"codeConfirmed\",function(){return r.codeConfirmed()})(\"changePhoneRequested\",function(){return r.changePhone()}),u()()),i&2&&(s(\"title\",m(1,7,\"header.login\"))(\"titleDataLocator\",\"page_title\")(\"leadingDataLocator\",\"pointer_back\")(\"leading\",null),p(2),s(\"name\",\"back\"),p(2),s(\"phone\",m(5,9,r.phone$))(\"companyId\",r.currentCompanyId))},dependencies:[gi,Pt,ne,A,C],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;height:100%;background:var(--y-core-color-surface-primary)}[_nghost-%COMP%]   .button-back[_ngcontent-%COMP%]{font-size:24px;color:var(--y-core-color-text-primary)}[_nghost-%COMP%]   .verification-container[_ngcontent-%COMP%]{padding:57px 16px 0}'],changeDetection:0}));let t=o;return t})();var Gi=(()=>{let o=class o{constructor(n){e(this,\"router\");this.router=n}canActivate(n){return this.router.navigated?!0:(this.router.navigateByUrl(this.router.createUrlTree([Ge()],{queryParams:n.queryParams,queryParamsHandling:\"merge\"}),{replaceUrl:!0}),!1)}};e(o,\"\\u0275fac\",function(i){return new(i||o)(Q(J))}),e(o,\"\\u0275prov\",oe({token:o,factory:o.\\u0275fac,providedIn:\"root\"}));let t=o;return t})();var Mo=[{canActivate:[X],canActivateChild:[X],path:\"\",data:{routeName:b.profile},children:[{path:b.auth,canActivate:[Fi],data:{routeName:\"\".concat(b.profile,\".\").concat(b.auth)},children:[{path:\"\",component:zi},{path:b[\"code-verification\"],component:ji,canActivate:[Gi],resolve:{authChannel:fi}}]},{path:\"\",component:Ni,pathMatch:\"full\"},{path:b.record,canActivate:[ge],data:{routeName:\"\".concat(b.profile,\".\").concat(b.records)},loadChildren:()=>import(\"./record.route-5EXYOL7Y.js\").then(t=>t.recordRoutes)},{path:b[\"personal-info\"],canActivate:[ge],children:[{path:\"\",component:$i,data:{routeName:\"\".concat(b.profile,\".\").concat(b[\"personal-info\"])}}]},{path:b.notices,canActivate:[ge],loadChildren:()=>import(\"./notices-CEA3SNDN.js\").then(t=>t.NoticesModule)}]},{path:b.loyalty,canActivate:[X],loadChildren:()=>import(\"./loyalty-CDDSAH3B.js\").then(t=>t.LoyaltyModule)},{path:b.certificate,canActivate:[ge,X,et],data:{benchmarks:[\"booking_certificates_page_open\"]},loadChildren:()=>import(\"./certificate-4MINBR2A.js\").then(t=>t.CertificateModule)},{path:b.memberships,canActivate:[ge,X,et],data:{benchmarks:[\"booking_memberships_page_open\"]},loadChildren:()=>import(\"./membership-6UG5DJAO.js\").then(t=>t.MembershipModule)}],qi=(()=>{let o=class o{};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275mod\",Pe({type:o})),e(o,\"\\u0275inj\",ke({imports:[Xe.forChild(Mo),Xe]}));let t=o;return t})();var is=(()=>{let o=class o{};e(o,\"\\u0275fac\",function(i){return new(i||o)}),e(o,\"\\u0275mod\",Pe({type:o})),e(o,\"\\u0275inj\",ke({providers:[X],imports:[qi,_i,vt,Jt,xe,si,ei,xi,vi,Si,Ti,wi,Lt,ci,li,We,Et,Ut,Oe,At,It,oi,ce]}));let t=o;return t})();export{is as ProfileModule,qi as ProfileRouteModule};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 13663,
          "_transferSize": 14323,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.525Z",
        "time": 119.0179999684915,
        "timings": {
          "blocked": 78.25500000865013,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.39799999999999613,
          "wait": 28.60699995201081,
          "receive": 11.75800000783056,
          "_blocked_queueing": 3.013000008650124,
          "_blocked_proxy": 5.656,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "446174",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/services-step.module-Q7ZDKTVY.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-G6HNEAI4.js",
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
              "value": "https://n958200.alteg.io/services-step.module-Q7ZDKTVY.js"
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
          "headersSize": 1528,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5446"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd35cc4bcb1-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-31a4\""
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
              "value": "7e677c56114d1254309d31d7ab73daa8"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 12708,
            "mimeType": "application/javascript",
            "compression": 8515,
            "text": "import{A as pe,z as W}from\"./chunk-IGSDBEZN.js\";import{g as me}from\"./chunk-TXASR5LU.js\";import{Ab as ne,Bb as oe,Dc as le,Eb as ae,Fc as de,G as Z,Z as ee,_ as te,ba as L,ca as H,da as ie,j as Y,p as J,rc as se,tc as re,uc as ce}from\"./chunk-6FGVQ7PR.js\";import{Aa as B,Cb as Q,Cc as X,Fa as w,Fb as d,Ka as R,La as q,Ob as M,Pc as F,Qc as E,Ub as y,Va as g,Wa as h,Wb as O,Xb as _,Yb as I,Zb as C,ac as v,bc as U,cc as b,dc as k,ec as m,fc as p,gb as z,gc as P,hb as j,i as A,kc as x,oc as u,od as S,pc as c,uc as K,vc as V,wc as $,yc as N,zb as G}from\"./chunk-KO722YSM.js\";import{g as a}from\"./chunk-JV5WWF5Q.js\";var ue=[\"imagesContainer\"],fe=[\"image\"];function _e(n,s){if(n&1){let o=x();m(0,\"div\",2)(1,\"div\",8),u(\"click\",function(e){g(o);let t=c();return h(t.moveToPhoto(t.activeImageIndex-1,e))}),P(2,\"ui-kit-svg-icon\",9),p()()}n&2&&(d(2),_(\"name\",\"arrow-down-light\")(\"setSvgSize\",!1))}function Ce(n,s){if(n&1){let o=x();m(0,\"div\",3)(1,\"div\",8),u(\"click\",function(e){g(o);let t=c();return h(t.moveToPhoto(t.activeImageIndex+1,e))}),P(2,\"ui-kit-svg-icon\",9),p()()}n&2&&(d(2),_(\"name\",\"arrow-down-light\")(\"setSvgSize\",!1))}function ve(n,s){if(n&1&&(m(0,\"div\",10),N(1),F(2,\"translate\"),p()),n&2){let o=c();C(\"hidden\",o.isUpperPanelHidden),d(),X(\" \",o.activeImageIndex+1,\" \",E(2,5,\"out-of\"),\" \",o.imagesInfo.length,\" \")}}function xe(n,s){if(n&1){let o=x();m(0,\"div\",13,1),u(\"click\",function(){g(o);let e=c(2);return h(e.hideHeaderPanel())}),P(2,\"img\",14),p()}if(n&2){let o=c(),i=o.$implicit,e=o.$index,t=c();I(\"width\",t.imageWidth())(\"aspect-ratio\",t.aspectRatio()),C(\"active\",t.activeImageIndex===e),O(\"data-locator\",\"salon_photo\"),d(2),_(\"src\",i,G)}}function Pe(n,s){if(n&1){let o=x();m(0,\"div\",13,1),u(\"click\",function(){g(o);let e=c().$index,t=c();return h(t.openPreview(e))}),p()}if(n&2){let o=c(),i=o.$implicit,e=o.$index,t=c();I(\"background-image\",\"url(\"+i+\")\")(\"width\",t.imageWidth())(\"aspect-ratio\",t.aspectRatio()),C(\"active\",t.activeImageIndex===e)(\"pointer\",t.withPreview()),O(\"data-locator\",\"salon_photo\")}}function we(n,s){if(n&1&&y(0,xe,3,8,\"div\",11)(1,Pe,2,11,\"div\",12),n&2){let o=c();v(o.isFullSize?0:1)}}function Me(n,s){if(n&1&&P(0,\"div\",15),n&2){let o=s.$index,i=c(2);_(\"@pointSelection\",i.activeImageIndex===o?\"active\":\"notActive\"),O(\"data-locator\",\"carousel_switch_point\")}}function ye(n,s){if(n&1&&(m(0,\"div\",6),b(1,Me,1,2,\"div\",15,U),p()),n&2){let o=c();d(),k(o.imagesInfo)}}function Oe(n,s){if(n&1){let o=x();m(0,\"div\",16),u(\"click\",function(){g(o);let e=c();return h(e.closePreview())}),P(1,\"ui-kit-svg-icon\",9),p()}if(n&2){let o=c();C(\"hidden\",o.isUpperPanelHidden),d(),_(\"name\",\"cross\")(\"setSvgSize\",!1)}}var l=function(n){return n.SquareMode=\"square\",n.LandscapeMode=\"landscape\",n.WideLandscapeMode=\"wide-landscape\",n.FullSizeMode=\"full-size\",n}(l||{}),D=150,ge=80,Re=(()=>{let s=class s{constructor(){a(this,\"pointsVisible\",M(!0));a(this,\"carouselLayoutMode\",M(l.SquareMode));a(this,\"isImagesRounded\",z(!0));a(this,\"showImagesCounter\",M(!1));a(this,\"withPreview\",z(!1));a(this,\"imagesContainer\");a(this,\"imagesInfo\",[]);a(this,\"activeImageIndex\",0);a(this,\"translateWidth\",ge);a(this,\"trackingService\",w(de));a(this,\"uiKitPhotoCarousel\",w(j));a(this,\"modalService\",w(ce));a(this,\"isMobileDevice\",Z().phone);a(this,\"imagesGap\",S(()=>{switch(this.carouselLayoutMode()){case l.SquareMode:return\"16px\";case l.FullSizeMode:return\"24px\";case l.LandscapeMode:case l.WideLandscapeMode:return\"8px\"}}));a(this,\"imageWidth\",S(()=>{switch(this.carouselLayoutMode()){case l.SquareMode:return\"60%\";case l.FullSizeMode:return\"100%\";case l.LandscapeMode:case l.WideLandscapeMode:return this.imagesInfo.length===1?\"calc(100% - 32px)\":\"80%\"}}));a(this,\"aspectRatio\",S(()=>{switch(this.carouselLayoutMode()){case l.SquareMode:case l.FullSizeMode:return\"1\";case l.LandscapeMode:return\"2.15\";case l.WideLandscapeMode:return\"2.43\"}}));a(this,\"isSwiping\",!1);a(this,\"isAnimatingToTarget$\",new A(!1));a(this,\"isUpperPanelHidden\",!1);a(this,\"image\")}set photoUrls(i){this.imagesInfo=i,this.activeImageIndex=0,this.imagesContainer&&this.moveToPhoto(this.activeImageIndex)}get isFullSize(){return this.carouselLayoutMode()===l.FullSizeMode}ngAfterViewInit(){this.moveToPhoto(this.activeImageIndex),setTimeout(()=>this.setTranslateWidth())}moveToPhoto(i,e,t=!0){this.trackingService.track({type:le.Action.view,element:{type:\"about_company_photo\",number:i.toString()}}),this.activeImageIndex=i;let r=this.getCurrentTranslate();this.imagesContainer.nativeElement.animate([{transform:\"translate(calc(\".concat(r,\"))\")}],{fill:\"forwards\",duration:t?D:0,iterations:1}),e==null||e.stopPropagation(),this.isSwiping=!1,this.isAnimatingToTarget$.next(!0),setTimeout(()=>{this.isAnimatingToTarget$.next(!1)},D)}swipeFinished(i){let e=i.eventType===W.swipeLeft&&this.activeImageIndex!==this.imagesInfo.length-1,t=i.eventType===W.swipeRight&&this.activeImageIndex!==0;if(e){this.moveToPhoto(this.activeImageIndex+1);return}if(t){this.moveToPhoto(this.activeImageIndex-1);return}this.moveToPhoto(this.activeImageIndex)}swipeExecuted(i){this.isSwiping||(this.isSwiping=!0);let e=i.x;this.imagesContainer.nativeElement.animate([{transform:\"translate(calc(\".concat(this.getCurrentTranslate(),\" - \").concat(e,\"px))\")}],{fill:\"forwards\",duration:1,iterations:1})}setTranslateWidth(){let i=this.image.nativeElement.offsetWidth,e=this.uiKitPhotoCarousel.nativeElement.offsetWidth;if(i>0&&e>0){this.translateWidth=i/e*100;return}this.translateWidth=ge}getCurrentTranslate(){if(this.imagesInfo.length===1)return\"0\";let i=this.isFullSize?\"0px\":\"16px\",e=i,t=r=>this.isFullSize?\"100% - \".concat(this.imagesGap()):r?\"\".concat(this.translateWidth-10,\"% - \").concat(i,\" - \").concat(this.imagesGap()):\"\".concat(this.translateWidth,\"% - \").concat(this.imagesGap());for(let r=1;r<=this.activeImageIndex;r++){let f=r+1===this.imagesInfo.length||r===1;e+=\" - \".concat(t(f))}return e}openPreview(i){if(!this.withPreview())return;let e=this.modalService.openModal({component:s,params:{modalType:re.fullScreen},componentData:{photoUrls:this.imagesInfo}});e.instance.carouselLayoutMode.set(l.FullSizeMode),e.instance.pointsVisible.set(!1),e.instance.moveToPhoto(i,void 0,!1),e.instance.showImagesCounter.set(!0)}hideHeaderPanel(){this.isMobileDevice&&(this.isUpperPanelHidden=!this.isUpperPanelHidden)}closePreview(){this.modalService.closeModal()}closeOutside(i){this.isFullSize&&(i instanceof MouseEvent&&i.target instanceof HTMLImageElement||i instanceof MouseEvent&&i.target instanceof SVGElement||i instanceof MouseEvent&&i.target instanceof HTMLDivElement&&i.target.classList.contains(\"control-arrow\")||this.closePreview())}};a(s,\"\\u0275fac\",function(e){return new(e||s)}),a(s,\"\\u0275cmp\",R({type:s,selectors:[[\"ui-kit-photo-carousel\"]],viewQuery:function(e,t){if(e&1&&(K(ue,5),K(fe,5)),e&2){let r;V(r=$())&&(t.imagesContainer=r.first),V(r=$())&&(t.image=r.first)}},hostVars:2,hostBindings:function(e,t){e&1&&u(\"keydown.escape\",function(f){return t.closeOutside(f)},!1,Q)(\"mousedown\",function(f){return t.closeOutside(f)}),e&2&&C(\"full-size\",t.isFullSize)},inputs:{photoUrls:\"photoUrls\",pointsVisible:[1,\"pointsVisible\"],carouselLayoutMode:[1,\"carouselLayoutMode\"],isImagesRounded:[1,\"isImagesRounded\"],showImagesCounter:[1,\"showImagesCounter\"],withPreview:[1,\"withPreview\"]},outputs:{pointsVisible:\"pointsVisibleChange\",carouselLayoutMode:\"carouselLayoutModeChange\",showImagesCounter:\"showImagesCounterChange\"},decls:10,vars:14,consts:[[\"imagesContainer\",\"\"],[\"image\",\"\"],[1,\"control\",\"left\"],[1,\"control\",\"right\"],[1,\"images-info\",3,\"hidden\"],[1,\"images\",3,\"uiKitSwipe\",\"uiKitOnSwipeHorizontal\",\"disableTimeout\"],[1,\"points\"],[1,\"cross-icon\",3,\"hidden\"],[1,\"control-arrow\",3,\"click\"],[3,\"name\",\"setSvgSize\"],[1,\"images-info\"],[1,\"image\",3,\"active\",\"width\",\"aspect-ratio\"],[1,\"image\",3,\"background-image\",\"active\",\"width\",\"aspect-ratio\",\"pointer\"],[1,\"image\",3,\"click\"],[\"alt\",\"\",3,\"src\"],[1,\"point\"],[1,\"cross-icon\",3,\"click\"]],template:function(e,t){if(e&1){let r=x();y(0,_e,3,2,\"div\",2)(1,Ce,3,2,\"div\",3)(2,ve,3,7,\"div\",4),m(3,\"div\",5,0),F(5,\"async\"),u(\"uiKitSwipe\",function(T){return g(r),h(t.swipeFinished(T))})(\"uiKitOnSwipeHorizontal\",function(T){return g(r),h(t.swipeExecuted(T))}),b(6,we,2,1,null,null,U),p(),y(8,ye,3,0,\"div\",6)(9,Oe,2,4,\"div\",7)}e&2&&(v(t.activeImageIndex>0?0:-1),d(),v(t.activeImageIndex+1<t.imagesInfo.length?1:-1),d(),v(t.showImagesCounter()?2:-1),d(),I(\"gap\",t.imagesGap()),C(\"is-swiping\",t.isMobileDevice&&t.isSwiping)(\"is-animating\",t.isMobileDevice&&E(5,12,t.isAnimatingToTarget$)),_(\"disableTimeout\",!0),d(3),k(t.imagesInfo),d(2),v(t.pointsVisible()&&t.imagesInfo.length>1?8:-1),d(),v(t.isFullSize?9:-1))},dependencies:[ae,pe,Y,ne],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{max-width:none;position:relative;left:50%;transform:translate(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;overflow:hidden}@media (width >= 600px){[_nghost-%COMP%]{width:600px}}@media (width < 600px){[_nghost-%COMP%]{width:100vw}}[_nghost-%COMP%]   .images-info[_ngcontent-%COMP%]{position:absolute;top:48px;font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:#fff;z-index:10;opacity:1;transition:opacity .1s ease-in}@media (max-width: 648px){[_nghost-%COMP%]   .images-info[_ngcontent-%COMP%]{top:24px}}@media (max-width: 648px){[_nghost-%COMP%]   .images-info.hidden[_ngcontent-%COMP%]{opacity:0;transition:opacity .3s ease-out}}[_nghost-%COMP%]   .images[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:100%}[_nghost-%COMP%]   .images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{border-radius:16px;flex-shrink:0;background-size:cover}[_nghost-%COMP%]   .images[_ngcontent-%COMP%]   .image.pointer[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:only-child{margin:auto}[_nghost-%COMP%]   .points[_ngcontent-%COMP%]{padding:8px 16px;display:flex;flex-direction:row;gap:4px}[_nghost-%COMP%]   .points[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]{height:5px}[_nghost-%COMP%]   .control[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;z-index:1;top:50%;transform:translateY(-50%)}[_nghost-%COMP%]   .control.left[_ngcontent-%COMP%]{left:16px}[_nghost-%COMP%]   .control.left[_ngcontent-%COMP%]   ui-kit-svg-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}[_nghost-%COMP%]   .control.right[_ngcontent-%COMP%]{right:16px}[_nghost-%COMP%]   .control.right[_ngcontent-%COMP%]   ui-kit-svg-icon[_ngcontent-%COMP%]{transform:rotate(-90deg)}[_nghost-%COMP%]   .control[_ngcontent-%COMP%]   .control-arrow[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:100px;background-color:var(--y-core-color-surface-secondary-fill);display:flex;justify-content:center;align-items:center;color:var(--y-core-color-icon-primary);cursor:pointer}.full-size[_nghost-%COMP%]{width:100vw;height:100vh;background-color:var(--y-core-color-other-overlay-60);position:relative}@media (max-width: 648px){.full-size[_nghost-%COMP%]{max-height:100dvh}}.full-size[_nghost-%COMP%]   .cross-icon[_ngcontent-%COMP%]{position:absolute;right:48px;top:48px;color:#fff;cursor:pointer;z-index:10}@media (max-width: 648px){.full-size[_nghost-%COMP%]   .cross-icon[_ngcontent-%COMP%]{right:20px;top:24px;opacity:1;transition:opacity .1s ease-in}}@media (max-width: 648px){.full-size[_nghost-%COMP%]   .cross-icon.hidden[_ngcontent-%COMP%]{opacity:0;transition:opacity .1s ease-out}}.full-size[_nghost-%COMP%]   .images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:0;height:100%}.full-size[_nghost-%COMP%]   .images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:70vw;max-height:70vh}@media (max-width: 648px){.full-size[_nghost-%COMP%]   .images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100vw;max-height:100dvh;width:100vw}}.full-size[_nghost-%COMP%]   .control.left[_ngcontent-%COMP%]{left:48px}.full-size[_nghost-%COMP%]   .control.right[_ngcontent-%COMP%]{right:48px}@media (hover: none){[_nghost-%COMP%]   .control[_ngcontent-%COMP%]{display:none}}'],data:{animation:[ee(\"pointSelection\",[H(\"active\",L({width:\"16px\",\"background-color\":\"var(--y-core-color-text-primary)\",height:\"5px\",\"border-radius\":\"24px\"})),H(\"notActive\",L({width:\"6px\",\"background-color\":\"var(--y-core-color-surface-tertiary-high)\",height:\"5px\",\"border-radius\":\"100px\"})),ie(\"active <=> notActive\",te(\"\".concat(D,\"ms ease-in-out\")))])]},changeDetection:0}));let n=s;return n})();var nt=(()=>{let s=class s{};a(s,\"\\u0275fac\",function(e){return new(e||s)}),a(s,\"\\u0275mod\",q({type:s})),a(s,\"\\u0275inj\",B({imports:[J,me,se,oe]}));let n=s;return n})();export{Re as a,nt as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 4193,
          "_transferSize": 4853,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.607Z",
        "time": 39.33499997947365,
        "timings": {
          "blocked": 6.204999947570264,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.44399999999999995,
          "wait": 23.563999956026674,
          "receive": 9.122000075876713,
          "_blocked_queueing": 1.6289999475702643,
          "_blocked_proxy": 3.436,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "435174",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/services-step.module-Q7ZDKTVY.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-5TNNUQPF.js",
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
              "value": "https://n958200.alteg.io/services-step.module-Q7ZDKTVY.js"
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
          "headersSize": 1528,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5440"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd35cd4bcb1-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-297c\""
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
              "value": "7a52defb8d95598f829ebd3df6bab7bf"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 10620,
            "mimeType": "application/javascript",
            "compression": 6784,
            "text": "import{a as Te,b as be}from\"./chunk-7HQ4EX32.js\";import{F as Ce,g as xe,j as Se,r as ke}from\"./chunk-IGSDBEZN.js\";import{m as F,t as V}from\"./chunk-IV3KQJLV.js\";import{Dc as R,Eb as me,Fc as N,Hg as D,Jf as he,Yd as ge,Zd as _e,_ as pe,ba as z,ch as ye,d as se,e as O,ea as le,i as E,j as ae,p as ce,rc as de,tc as ve,uc as $,ui as x,vc as fe,we as ue}from\"./chunk-6FGVQ7PR.js\";import{Aa as G,Ac as I,Bc as B,Fa as y,Fb as a,Gb as _,J as Q,Ka as b,La as H,Pb as X,Pc as d,Qc as v,Ua as J,Ub as u,Va as k,Wa as C,Wb as Z,Xb as m,Yb as ee,Zb as te,aa as Y,ec as p,fc as l,gc as w,hc as A,ic as U,j as W,jc as ie,kc as M,oc as T,pc as g,qa as j,ua as q,uc as ne,vc as re,wc as oe,x as S,y as K,yc as h,zc as P}from\"./chunk-KO722YSM.js\";import{g as t}from\"./chunk-JV5WWF5Q.js\";function Be(n,i){if(n&1&&(p(0,\"div\",9)(1,\"div\",10),w(2,\"app-staff-tile\",11),l()()),n&2){let o=i.ngIf;a(2),m(\"staff\",o)(\"infoVisible\",!1)(\"overrideShowRatingAndTag\",!0)}}function Oe(n,i){if(n&1){let o=M();p(0,\"app-service-item\",12),d(1,\"async\"),d(2,\"secondsToTime\"),T(\"iconClick\",function(){let e=k(o).$implicit,s=g();return C(s.removeServiceFromBasket(e))}),l()}if(n&2){let o=i.$implicit,c=g();m(\"service\",o)(\"currency\",v(1,7,c.company$).currency_short_title)(\"showServiceTags\",!1)(\"iconName\",c.allowEdit?\"cross\":void 0)(\"seanceLength\",v(2,9,o.seance_length))(\"overflowVisible\",!0),Z(\"data-locator\",\"service_item_\"+o.id)}}function Ee(n,i){}function $e(n,i){if(n&1&&(p(0,\"div\"),u(1,Ee,0,0,\"ng-template\",13),l()),n&2){let o=g();ee(\"height\",o.footerTemplateInfo.heightPx+\"px\"),a(),m(\"ngTemplateOutlet\",o.footerTemplateInfo.templateRef)}}var Me=(()=>{let i=class i extends fe{constructor(e){super(e);t(this,\"modalService\");t(this,\"store\",y(ye));t(this,\"pricePipe\",y(D));t(this,\"paymentService\",y(V));t(this,\"wordNumerals\",y(F));t(this,\"trackingService\",y(N));t(this,\"destroy$\",new W(1));t(this,\"selectedServices$\",this.store.select(x.order.getSelectedServices));t(this,\"selectedMasters$\",K([this.store.select(x.order.getIndividualSelectedServicesInfo),this.store.select(x.masters.getMastersDict)]).pipe(S(([e,s])=>{let r=[];if(e.forEach(f=>{he(f)?f.subServicesInfo.forEach(L=>{L.selectedMasterId&&r.push(L.selectedMasterId)}):f.selectedMasterId&&r.push(f.selectedMasterId)}),r.length!==0)return[...new Set(r)].map(f=>f===ge?_e:s[f])})));t(this,\"company$\",this.store.select(x.currentCompany.getCurrentCompany).pipe(Y(),j(this.destroy$)));t(this,\"servicesPriceTotal$\",this.selectedServices$.pipe(q(this.store.select(x.currentCompany.getCurrentCompany)),S(([e,s])=>this.pricePipe.transform(e.filter(r=>!this.paymentService.abonementRestrictionRequired(r)),s.currency_short_title,!0))));t(this,\"servicesText$\",this.selectedServices$.pipe(Q(e=>!!e.length),S(e=>this.wordNumerals.transform(\"service.more_plural\",e.length,{pluralGenitive:\".many\",nominative:\".singular\",genitive:\".few\"}))));t(this,\"servicesTotalTime$\",this.selectedServices$.pipe(S(e=>e.reduce((s,r)=>s+(r.seance_length||0),0))));t(this,\"footerTemplateInfo\",null);t(this,\"allowEdit\",!1);this.modalService=e}ngOnInit(){this.selectedServices$.pipe(j(this.destroy$)).subscribe(e=>{e.length||this.modalService.closeModal()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}removeServiceFromBasket(e){this.store.dispatch(new ue(e.id)),this.trackRemoveService(e.id)}trackRemoveService(e){this.trackingService.track({type:R.Action.click,page:{name:\"services_list\"},element:{type:\"button\",name:\"button_edit_cart_delete_service\",id:e}})}};t(i,\"\\u0275fac\",function(s){return new(s||i)(_($))}),t(i,\"\\u0275cmp\",b({type:i,selectors:[[\"app-services-basket-modal\"]],features:[X],decls:19,vars:21,consts:[[1,\"services-basket\"],[\"class\",\"service-basket__additional\",4,\"ngIf\"],[1,\"service-basket__total\"],[1,\"service-basket-counter\"],[1,\"service-basket__additional__total-time\"],[\"data-locator\",\"service-price\",1,\"service-basket-price\"],[1,\"opened-basket\"],[\"class\",\"service-item\",3,\"service\",\"currency\",\"showServiceTags\",\"iconName\",\"seanceLength\",\"overflowVisible\",\"iconClick\",4,\"ngFor\",\"ngForOf\"],[3,\"height\",4,\"ngIf\"],[1,\"service-basket__additional\"],[1,\"service-basket__additional__master\"],[3,\"staff\",\"infoVisible\",\"overrideShowRatingAndTag\"],[1,\"service-item\",3,\"iconClick\",\"service\",\"currency\",\"showServiceTags\",\"iconName\",\"seanceLength\",\"overflowVisible\"],[3,\"ngTemplateOutlet\"]],template:function(s,r){s&1&&(p(0,\"div\",0),u(1,Be,3,3,\"div\",1),d(2,\"async\"),p(3,\"div\",2)(4,\"div\",3),h(5),d(6,\"async\"),d(7,\"async\"),p(8,\"span\",4),h(9),d(10,\"async\"),d(11,\"secondsToTime\"),l()(),p(12,\"div\",5),h(13),d(14,\"async\"),l()(),p(15,\"div\",6),u(16,Oe,3,11,\"app-service-item\",7),d(17,\"async\"),l(),u(18,$e,2,3,\"div\",8),l()),s&2&&(a(),m(\"ngIf\",v(2,7,r.selectedMasters$)),a(4),B(\" \",v(6,9,r.selectedServices$).length,\" \",v(7,11,r.servicesText$),\" \"),a(4),P(v(11,15,v(10,13,r.servicesTotalTime$))),a(4),I(\" \",v(14,17,r.servicesPriceTotal$),\" \"),a(3),m(\"ngForOf\",v(17,19,r.selectedServices$)),a(2),m(\"ngIf\",r.footerTemplateInfo))},dependencies:[se,O,E,Se,Te,ae,xe],styles:['@charset \"UTF-8\";.service-basket__additional[_ngcontent-%COMP%]{padding:8px 16px 0}.service-basket__additional__master[_ngcontent-%COMP%]{padding-bottom:8px}.service-basket__additional__total-time[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px}.service-basket__total[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;font-style:normal;font-weight:700;font-size:20px;line-height:24px;padding:16px}.service-basket-price[_ngcontent-%COMP%]{overflow-wrap:anywhere}.opened-basket[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 16px 20px}.opened-basket[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]{padding:8px 0}'],changeDetection:0}));let n=i;return n})();var Re=[\"mainElement\"];function Ne(n,i){if(n&1){let o=M();A(0),p(1,\"div\",4)(2,\"div\",5),T(\"click\",function(){k(o);let e=g();return C(e.toggleBasket())}),h(3),p(4,\"span\",6),h(5),d(6,\"servicesLength\"),l()(),p(7,\"div\",7),T(\"click\",function(){k(o);let e=g();return C(e.toggleBasket())}),p(8,\"div\",8),h(9),l(),w(10,\"ui-kit-svg-icon\",9),l()(),U()}if(n&2){let o=g();a(3),B(\" \",o.services.length,\"\\xA0\",o.servicesText,\"\\xA0 \"),a(2),P(v(6,5,o.services)),a(4),I(\" \",o.servicesPriceTotal,\" \"),a(),m(\"name\",\"edit\")}}function De(n,i){n&1&&ie(0)}function Fe(n,i){if(n&1&&(A(0),u(1,De,1,0,\"ng-container\",10),U()),n&2){let o=g();a(),m(\"ngTemplateOutlet\",o.continueButtonTemplateRef)}}var dt=(()=>{let i=class i{constructor(c,e,s,r,f){t(this,\"modalService\");t(this,\"trackingService\");t(this,\"wordNumeralCasePipe\");t(this,\"pricePipe\");t(this,\"paymentService\");t(this,\"services\");t(this,\"currencyShortTitle\");t(this,\"continueButtonTemplateRef\");t(this,\"allowEdit\",!1);t(this,\"servicesText\");t(this,\"servicesPriceTotal\");t(this,\"mainElementRef\");this.modalService=c,this.trackingService=e,this.wordNumeralCasePipe=s,this.pricePipe=r,this.paymentService=f}ngOnChanges(c){c.services&&(this.servicesText=this.services.length?this.wordNumeralCasePipe.transform(\"service.more_plural\",this.services.length,{pluralGenitive:\".many\",nominative:\".singular\",genitive:\".few\"}):\"\"),(c.services||c.currencyShortTitle)&&(this.servicesPriceTotal=this.currencyShortTitle?this.pricePipe.transform(this.services.filter(e=>!this.paymentService.abonementRestrictionRequired(e)),this.currencyShortTitle,!0):\"\")}toggleBasket(){this.trackBasketModalOpened(),this.modalService.openModal({component:Me,componentData:{footerTemplateInfo:{templateRef:this.continueButtonTemplateRef,heightPx:this.mainElementRef.nativeElement.clientHeight},allowEdit:this.allowEdit},params:{modalType:ve.default}})}trackBasketModalOpened(){this.trackingService.track({type:R.Action.click,page:{name:\"services_list\"},element:{type:\"button\",name:\"button_edit_cart_services\"}})}ngOnDestroy(){this.modalService.closeModal()}};t(i,\"\\u0275fac\",function(e){return new(e||i)(_($),_(N),_(F),_(D),_(V))}),t(i,\"\\u0275cmp\",b({type:i,selectors:[[\"app-service-button-basket\"]],viewQuery:function(e,s){if(e&1&&ne(Re,7),e&2){let r;re(r=oe())&&(s.mainElementRef=r.first)}},inputs:{services:\"services\",currencyShortTitle:\"currencyShortTitle\",continueButtonTemplateRef:\"continueButtonTemplateRef\",allowEdit:\"allowEdit\"},features:[J],decls:5,vars:4,consts:[[\"mainElement\",\"\"],[1,\"service-basket\"],[1,\"service-basket-info\"],[4,\"ngIf\"],[1,\"service-basket-info__texts\"],[1,\"service-basket-counter\",3,\"click\"],[1,\"service-basket-total-time\"],[1,\"service-basket-right-part\",3,\"click\"],[\"data-locator\",\"service-price\",1,\"service-basket-price\"],[1,\"service-selection-icon\",3,\"name\"],[4,\"ngTemplateOutlet\"]],template:function(e,s){e&1&&(p(0,\"div\",1,0)(2,\"div\",2),u(3,Ne,11,7,\"ng-container\",3)(4,Fe,2,1,\"ng-container\",3),l()()),e&2&&(te(\"background\",s.services.length),a(3),m(\"ngIf\",s.services.length),a(),m(\"ngIf\",s.continueButtonTemplateRef))},dependencies:[O,E,me,ke],styles:['@charset \"UTF-8\";.background[_ngcontent-%COMP%]{position:fixed;max-width:600px;width:100%;min-height:130px;bottom:0;background-color:var(--y-core-color-surface-primary);border-top:1px solid var(--y-core-color-stroke-primary);box-shadow:0 12px 48px #0613333d}.service-basket[_ngcontent-%COMP%]{z-index:200}.service-basket-info[_ngcontent-%COMP%]{padding:8px 16px;margin-top:6px;cursor:pointer;font-style:normal;font-weight:400;font-size:16px;line-height:24px}.service-basket-info__texts[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px;align-items:center;justify-content:space-between;margin-bottom:18px}.service-basket-info[_ngcontent-%COMP%]   .service-selection-icon[_ngcontent-%COMP%]{width:24px;height:24px;color:var(--y-core-color-icon-secondary)}.service-basket-info[_ngcontent-%COMP%]   .service-basket-counter[_ngcontent-%COMP%]{width:max-content}.service-basket-info[_ngcontent-%COMP%]   .service-basket-price[_ngcontent-%COMP%]{overflow-wrap:anywhere}.service-basket-info[_ngcontent-%COMP%]   .service-basket-total-time[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:var(--y-core-color-text-secondary)}.service-basket-info[_ngcontent-%COMP%]   .service-basket-right-part[_ngcontent-%COMP%]{display:flex;gap:4px;align-items:center}'],changeDetection:0}));let n=i;return n})();var Ct=(()=>{let i=class i{};t(i,\"\\u0275fac\",function(e){return new(e||i)}),t(i,\"\\u0275mod\",H({type:i})),t(i,\"\\u0275inj\",G({imports:[ce,Ce,be,de]}));let n=i;return n})();var Mt=le([z({transform:\"translateY({{ translateY }})\",opacity:0,bottom:0,width:\"100%\",zIndex:200,maxWidth:\"{{ maxWidth }}\"}),pe(\"{{ timeParams }}\",z({transform:\"translateY(0)\",opacity:1,position:\"fixed\",bottom:0,width:\"100%\",zIndex:200,maxWidth:\"{{ maxWidth }}\"}))]);export{Mt as a,dt as b,Ct as c};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3836,
          "_transferSize": 4496,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.607Z",
        "time": 45.08199996780604,
        "timings": {
          "blocked": 11.30699998486042,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3650000000000002,
          "wait": 29.621000002630055,
          "receive": 3.788999980315566,
          "_blocked_queueing": 2.1689999848604202,
          "_blocked_proxy": 6.148999999999999,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "450154",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/services-step.module-Q7ZDKTVY.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-UZWB3P4V.js",
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
              "value": "https://n958200.alteg.io/services-step.module-Q7ZDKTVY.js"
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
          "headersSize": 1528,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5446"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd38e36bcac-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-4fd\""
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
              "value": "4316c4cf11cdcdab40d7b4930fc586be"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 1277,
            "mimeType": "application/javascript",
            "compression": 617,
            "text": "import{Gb as o,Ma as l,cb as u,db as c,hb as p}from\"./chunk-KO722YSM.js\";import{g as e}from\"./chunk-JV5WWF5Q.js\";var v=(()=>{let t=class t{constructor(r,i){e(this,\"elementRef\");e(this,\"ngZone\");e(this,\"uiKitInViewportAlwaysEmit\",!1);e(this,\"uiKitInViewportBehaviour\",\"full\");e(this,\"disableTrack\",!1);e(this,\"thresholdTop\",\"128px\");e(this,\"inViewport\",new u);e(this,\"observer\");this.elementRef=r,this.ngZone=i}ngAfterViewInit(){let r=(i,s)=>{i.forEach(a=>{this.disableTrack||(this.inViewport.emit(a),this.uiKitInViewportAlwaysEmit||(s.unobserve(a.target),s.disconnect()))})};this.ngZone.runOutsideAngular(()=>{this.observer=new IntersectionObserver(r,{rootMargin:\"-\".concat(this.thresholdTop,\" 0px 0px 0px\"),threshold:[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1]}),this.observer.observe(this.elementRef.nativeElement)})}ngOnDestroy(){this.observer.disconnect()}};e(t,\"\\u0275fac\",function(i){return new(i||t)(o(p),o(c))}),e(t,\"\\u0275dir\",l({type:t,selectors:[[\"\",\"uiKitInViewport\",\"\"]],inputs:{uiKitInViewportAlwaysEmit:\"uiKitInViewportAlwaysEmit\",uiKitInViewportBehaviour:\"uiKitInViewportBehaviour\",disableTrack:\"disableTrack\",thresholdTop:\"thresholdTop\"},outputs:{inViewport:\"uiKitInViewport\"},standalone:!0}));let n=t;return n})();export{v as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 660,
          "_transferSize": 1319,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.607Z",
        "time": 72.54899991676211,
        "timings": {
          "blocked": 39.8829999222979,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.6369999999999933,
          "wait": 26.516000041693452,
          "receive": 5.51299995277077,
          "_blocked_queueing": 2.542999922297895,
          "_blocked_proxy": 7.734999999999999,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "443549",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/services-step.module-Q7ZDKTVY.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-SWTFDR2C.js",
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
              "value": "https://n958200.alteg.io/services-step.module-Q7ZDKTVY.js"
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
          "headersSize": 1528,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5440"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd3985ebcaf-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-1026\""
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
              "value": "04067c711ac3bd404f0c46b1523b3a1e"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 4134,
            "mimeType": "application/javascript",
            "compression": 2310,
            "text": "import{$ as v,Eb as K,Z as F,_ as f,ba as r,da as D,e as V,ha as b,rc as T}from\"./chunk-6FGVQ7PR.js\";import{Fb as a,Ka as C,Kc as S,Nc as B,Oc as A,Ub as M,Va as w,Wa as y,Wb as c,Xb as g,Zb as l,cb as u,ec as p,fc as m,gb as k,gc as E,kc as P,oc as h,od as U,pc as x,qc as L,rc as _,yc as O,zc as I}from\"./chunk-KO722YSM.js\";import{g as e}from\"./chunk-JV5WWF5Q.js\";var z=[[[\"\",\"sub-title\",\"\"]],[[\"\",\"expanded-content\",\"\"]]],j=[\"[sub-title]\",\"[expanded-content]\"],H=(n,i)=>({expandDuration:n,collapseDuration:i}),R=n=>({value:\"\",params:n});function q(n,i){if(n&1){let d=P();p(0,\"div\",4),h(\"@contentExpansion.done\",function(){w(d);let o=x();return y(o.contentExpanded())}),_(1,1),m()}if(n&2){let d=x();g(\"@contentExpansion\",B(4,R,A(1,H,d.animationDuration().expandDuration,d.animationDuration().collapseDuration)))}}var it=(()=>{let i=class i{constructor(){e(this,\"title\");e(this,\"expanded\",!1);e(this,\"disabled\",!1);e(this,\"mode\",\"light\");e(this,\"titleDataLocator\");e(this,\"iconDataLocator\",\"category_arrow\");e(this,\"itemsCount\",k(void 0));e(this,\"blockExpanded\",new u(!1));e(this,\"animationDone\",new u);e(this,\"animationDuration\",U(()=>{let t=this.itemsCount();return{expandDuration:t?Math.min(30*t,1e3):200,collapseDuration:t?Math.min(30*t,300):200}}))}get isLight(){return this.mode===\"light\"}get isRegular(){return this.mode===\"regular\"}toggleView(){this.expanded=!this.expanded,this.blockExpanded.emit(this.expanded)}contentExpanded(){this.animationDone.emit()}};e(i,\"\\u0275fac\",function(o){return new(o||i)}),e(i,\"\\u0275cmp\",C({type:i,selectors:[[\"ui-kit-expansion-block\"]],hostVars:7,hostBindings:function(o,t){o&2&&(c(\"data-locator-expand-title\",t.title)(\"data-locator-expand-expanded\",t.expanded)(\"data-locator-expand-disabled\",t.disabled),l(\"light\",t.isLight)(\"regular\",t.isRegular))},inputs:{title:\"title\",expanded:\"expanded\",disabled:\"disabled\",mode:\"mode\",titleDataLocator:\"titleDataLocator\",iconDataLocator:\"iconDataLocator\",itemsCount:[1,\"itemsCount\"]},outputs:{blockExpanded:\"blockExpanded\",animationDone:\"animationDone\"},standalone:!0,features:[S],ngContentSelectors:j,decls:6,vars:8,consts:[[1,\"header\",3,\"click\"],[1,\"header_title\"],[\"name\",\"arrow-down-light\",1,\"header_chevron\"],[\"class\",\"content-container\",4,\"ngIf\"],[1,\"content-container\"]],template:function(o,t){o&1&&(L(z),p(0,\"div\",0),h(\"click\",function(){return t.toggleView()}),p(1,\"div\",1),O(2),m(),_(3),E(4,\"ui-kit-svg-icon\",2),m(),M(5,q,2,6,\"div\",3)),o&2&&(a(),l(\"disabled\",t.disabled),c(\"data-locator\",t.titleDataLocator),a(),I(t.title),a(2),l(\"header_chevron__expanded\",t.expanded),c(\"data-locator\",t.iconDataLocator),a(),g(\"ngIf\",t.expanded))},dependencies:[V,T,K],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{cursor:pointer;position:relative;z-index:100;background:var(--widget-ui-kit-color-grey-background);-webkit-tap-highlight-color:transparent;padding:8px 16px;display:flex;flex-direction:column;overflow-y:hidden}.regular[_nghost-%COMP%]   .header_title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px;color:var(--y-core-color-text-primary)}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding-top:8px;padding-bottom:8px}[_nghost-%COMP%]   .header_title[_ngcontent-%COMP%]{flex-basis:88%;max-width:88%;overflow-wrap:break-word;word-break:break-word;font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--y-core-color-text-secondary)}[_nghost-%COMP%]   .header_title.disabled[_ngcontent-%COMP%]{opacity:40%}[_nghost-%COMP%]   .header_chevron[_ngcontent-%COMP%]{font-size:16px;color:var(--y-core-color-icon-secondary);margin-right:0;margin-left:auto;width:auto;height:auto}[_nghost-%COMP%]   .header_chevron__expanded[_ngcontent-%COMP%]{transform:rotate(180deg)}[_nghost-%COMP%]   .content-container[_ngcontent-%COMP%]{overflow-x:visible}'],data:{animation:[F(\"contentExpansion\",[D(\":enter\",[r({height:0}),v([b(\":self\",f(\"{{ expandDuration }}ms ease-in\",r({height:\"*\"})))])]),D(\":leave\",[r({height:\"*\"}),v([b(\":self\",f(\"{{ collapseDuration }}ms ease-out\",r({height:0})))])])])]},changeDetection:0}));let n=i;return n})();export{it as a};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 1824,
          "_transferSize": 2484,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.607Z",
        "time": 73.91000003553927,
        "timings": {
          "blocked": 42.38700008291006,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.5939999999999941,
          "wait": 26.890000047750775,
          "receive": 4.0389999048784375,
          "_blocked_queueing": 2.824000082910061,
          "_blocked_proxy": 8.938,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "446174",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/date-time-VOP4ANSD.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-FVSTWCGN.js",
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
              "value": "https://n958200.alteg.io/date-time-VOP4ANSD.js"
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
          "headersSize": 1517,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5446"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd39d2abcb1-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-1163\""
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
              "value": "d79e5c78c1383103d508a851cdda8ad6"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 4451,
            "mimeType": "application/javascript",
            "compression": 2532,
            "text": "import{a as B,b as Q}from\"./chunk-ZCWD3LHB.js\";import{d as z,j as A}from\"./chunk-6FGVQ7PR.js\";import{Fb as d,Gb as k,Ka as l,Kc as m,Pc as U,Qc as $,Ua as _,Ub as D,Va as w,Wa as I,Wb as O,Xb as g,Zb as b,cb as p,ec as h,fc as x,i as v,id as R,kc as S,na as C,oa as M,oc as F,pc as P,qc as f,rc as u,tc as V,vc as E,wc as K,y,yc as j,zc as L}from\"./chunk-KO722YSM.js\";import{a as c,b as s,g as i}from\"./chunk-JV5WWF5Q.js\";var W=[\"*\"],H=(()=>{let o=class o{constructor(){i(this,\"tabTitle\");i(this,\"tabId\");i(this,\"dataLocator\");i(this,\"tooltipText\");i(this,\"tabClick\",new p);i(this,\"active\",!1);i(this,\"tabModel$\");i(this,\"tabModel\")}ngOnInit(){this.lazyModelInit(),this.tabModel$=this.tabModel.asObservable()}ngOnChanges(t){this.lazyModelInit(),t.tabTitle&&this.tabModel.next(s(c({},this.tabModel.getValue()),{tabTitle:this.tabTitle})),t.tooltipText&&t.tooltipText.previousValue&&t.tooltipText.previousValue!==t.tooltipText.currentValue&&this.tabModel.next(s(c({},this.tabModel.getValue()),{tooltipText:this.tooltipText}))}setActive(t){this.active=t,this.tabModel.next(s(c({},this.tabModel.getValue()),{active:t}))}lazyModelInit(){this.tabModel||(this.tabModel=new v({id:this.tabId,tabTitle:this.tabTitle,active:this.active,componentReference:this,dataLocator:this.dataLocator||\"\",tooltipText:this.tooltipText}))}};i(o,\"\\u0275fac\",function(e){return new(e||o)}),i(o,\"\\u0275cmp\",l({type:o,selectors:[[\"ui-kit-tab\"]],hostVars:2,hostBindings:function(e,a){e&2&&b(\"active\",a.active)},inputs:{tabTitle:\"tabTitle\",tabId:\"tabId\",dataLocator:\"dataLocator\",tooltipText:\"tooltipText\"},outputs:{tabClick:\"tabClick\"},standalone:!0,features:[_,m],ngContentSelectors:W,decls:1,vars:0,template:function(e,a){e&1&&(f(),u(0))},styles:[\"[_nghost-%COMP%]{display:none;width:100%}.active[_nghost-%COMP%]{display:flex;flex-direction:column}\"],changeDetection:0}));let n=o;return n})();var G=[\"*\"];function J(n,o){if(n&1){let r=S();h(0,\"p\",2),F(\"click\",function(){let e=w(r).$implicit,a=P();return I(a.selectTab(e.componentReference))}),h(1,\"span\",3),j(2),x()()}if(n&2){let r=o.$implicit;b(\"active\",r.active),O(\"data-locator\",r.dataLocator),d(),g(\"uiKitTooltip\",r.tooltipText),d(),L(r.tabTitle)}}var gt=(()=>{let o=class o{constructor(t){i(this,\"changeDetectionRef\");i(this,\"tabs\");i(this,\"selectedTabId\");i(this,\"tabSelect\",new p);i(this,\"tabs$\");this.changeDetectionRef=t}ngAfterContentInit(){this.tabs$=this.tabs.changes.pipe(C(this.tabs),M(e=>y(e.map(a=>a.tabModel$))));let t=this.tabs.find(e=>e.tabId===this.selectedTabId)||this.tabs.first;this.selectTab(t,!1)}selectTab(t,e=!0){t.active||(this.tabs.forEach(a=>a.setActive(!1)),t.setActive(!0),e&&t.tabClick.emit(),this.selectedTabId=t.tabId,this.tabSelect.next(t.tabId),t.tabId===\"cityList\"&&window.dispatchEvent(new CustomEvent(\"resize\")),this.changeDetectionRef.detectChanges())}};i(o,\"\\u0275fac\",function(e){return new(e||o)(k(R))}),i(o,\"\\u0275cmp\",l({type:o,selectors:[[\"ui-kit-tabs\"]],contentQueries:function(e,a,N){if(e&1&&V(N,H,4),e&2){let T;E(T=K())&&(a.tabs=T)}},inputs:{selectedTabId:\"selectedTabId\"},outputs:{tabSelect:\"tabSelect\"},standalone:!0,features:[m],ngContentSelectors:G,decls:4,vars:3,consts:[[1,\"tab-header\"],[\"class\",\"tab\",3,\"active\",\"click\",4,\"ngFor\",\"ngForOf\"],[1,\"tab\",3,\"click\"],[1,\"tab__label\",3,\"uiKitTooltip\"]],template:function(e,a){e&1&&(f(),h(0,\"div\",0),D(1,J,3,5,\"p\",1),U(2,\"async\"),x(),u(3)),e&2&&(d(),g(\"ngForOf\",$(2,1,a.tabs$)))},dependencies:[z,A,Q,B],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;min-height:200px;-webkit-tap-highlight-color:transparent}.tab-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;box-sizing:border-box}.tab[_ngcontent-%COMP%]{cursor:pointer;width:100%;flex:1;display:flex;justify-content:center;height:48px;word-break:break-word;color:var(--y-core-color-text-secondary);background-color:var(--y-core-color-surface-primary);border-bottom-color:var(--y-core-color-stroke-primary);border-bottom-width:1px;border-bottom-style:solid}.tab__label[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;display:-webkit-box;max-height:20px;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical;padding:0 12px;margin-top:16px;text-align:center}.tab.active[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);border-bottom-color:var(--y-core-color-stroke-accent)}'],changeDetection:0}));let n=o;return n})();export{H as a,gt as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 1919,
          "_transferSize": 2579,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.614Z",
        "time": 66.01499998942018,
        "timings": {
          "blocked": 36.51999997355789,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.4590000000000032,
          "wait": 24.537999991975724,
          "receive": 4.498000023886561,
          "_blocked_queueing": 2.4579999735578895,
          "_blocked_proxy": 3.902,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "435174",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/date-time-VOP4ANSD.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-ZCWD3LHB.js",
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
              "value": "https://n958200.alteg.io/date-time-VOP4ANSD.js"
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
          "headersSize": 1517,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5446"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd39d2dbcb1-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-17f7\""
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
              "value": "6c00d62ae6313e9f941fdf4df52eb51a"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 6135,
            "mimeType": "application/javascript",
            "compression": 3818,
            "text": "import{$a as F,Aa as M,E,Fb as L,Gb as p,Jb as _,Ka as D,La as j,Lb as W,Ma as I,R as x,Ua as B,Yb as K,Zb as U,dd as Y,ec as k,fc as N,hb as y,j as V,oc as $,qa as O,sa as w,yc as z,zc as A}from\"./chunk-KO722YSM.js\";import{a as H,b as P,g as e}from\"./chunk-JV5WWF5Q.js\";var c=function(o){return o[o.static=1]=\"static\",o[o.hover=2]=\"hover\",o}(c||{});var n=function(o){return o.top=\"top\",o.right=\"right\",o.bottom=\"bottom\",o.left=\"left\",o}(n||{});var G=(()=>{let r=class r{constructor(t,i){e(this,\"elementRef\");e(this,\"renderer\");e(this,\"hostStyleTop\");e(this,\"hostStyleLeft\");e(this,\"hostClassShow\");e(this,\"tooltipText\");e(this,\"triangleOffset\",5);e(this,\"subscription\");e(this,\"destroy$\",new V(1));this.elementRef=t,this.renderer=i}toggleDisplay(t){this.subscription&&this.subscription.unsubscribe(),t?(this.tooltipText=t==null?void 0:t.tooltipText,setTimeout(()=>{this.hostClassShow=this.trySetPosition(t)},0),this.subscription=E(window,\"resize\").pipe(w(()=>{this.hostClassShow=!1}),x(300),w(()=>{this.hostStyleLeft=\"0px\",this.hostStyleTop=\"0px\"}),x(0),O(this.destroy$)).subscribe(()=>{this.hostClassShow=this.trySetPosition(t)})):this.hostClassShow=!1}trySetPosition(t){if(this.setHostStyle(t))return this.setPlacementClass(t.placement),!0;{let i=[n.top,n.right,n.bottom,n.left],s=!1;for(let l of i)if(this.setHostStyle(P(H({},t),{placement:l}))){this.setPlacementClass(l),s=!0;break}return s}}setPlacementClass(t){let i=[n.top,n.right,n.bottom,n.left];for(let s of i)this.renderer.removeClass(this.elementRef.nativeElement,\"tooltip-\"+s);this.renderer.addClass(this.elementRef.nativeElement,\"tooltip-\"+t)}setHostStyle(t,i=!1){let s=t.elementRef.nativeElement,l=s.getBoundingClientRect(),h=this.elementRef.nativeElement,R=s.offsetHeight,C=s.offsetWidth,S=h.clientHeight,v=h.clientWidth,m=window.pageYOffset,b=parseInt(getComputedStyle(document.documentElement).getPropertyValue(\"--safe-area-top\")),f,a;if(t.placement===n.top&&(f=l.top+m-b-S-this.triangleOffset),t.placement===n.bottom&&(f=l.top+m-b+R+this.triangleOffset),[n.top,n.bottom].includes(t.placement)&&(a=l.left+C/2-v/2),t.placement===n.left&&(a=l.left-v-this.triangleOffset),t.placement===n.right&&(a=l.left+C+this.triangleOffset),[n.left,n.right].includes(t.placement)&&(f=l.top+m-b+R/2-h.clientHeight/2),t.autoPlacement&&!i){let J=f,Q=f+S,u=a,d=a+v,X=window.innerHeight+m,g=document.body.clientWidth;if(J<0||Q>X)return!1;if(u<0||d>g){let T=!1;if([n.top,n.bottom].includes(t.placement)&&d-u<g&&(T=!0,u<0?a=1:d>g&&(a=u-(d-g)-1)),!T)return!1}}return this.hostStyleTop=f+\"px\",this.hostStyleLeft=a+\"px\",!0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e(r,\"\\u0275fac\",function(i){return new(i||r)(p(y),p(W))}),e(r,\"\\u0275cmp\",D({type:r,selectors:[[\"ng-component\"]],hostVars:6,hostBindings:function(i,s){i&2&&(K(\"top\",s.hostStyleTop)(\"left\",s.hostStyleLeft),U(\"tooltip-show\",s.hostClassShow))},decls:2,vars:1,template:function(i,s){i&1&&(k(0,\"div\"),z(1),N()),i&2&&(L(),A(s.tooltipText))},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px;max-width:200px;background-color:var(--y-core-color-text-primary);color:var(--y-core-color-surface-primary);text-align:center;border-radius:12px;padding:12px;position:absolute;pointer-events:none;z-index:9999;display:block;opacity:0;transition:opacity .3s;top:0;left:0}.tooltip-show[_nghost-%COMP%]{opacity:1}[_nghost-%COMP%]:after{content:\"\";position:absolute;border-style:solid}.tooltip-top[_nghost-%COMP%]:after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-color:var(--y-core-color-text-primary) transparent transparent transparent}.tooltip-bottom[_nghost-%COMP%]:after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-color:transparent transparent var(--y-core-color-text-primary) transparent}.tooltip-left[_nghost-%COMP%]:after{top:50%;left:100%;margin-top:-5px;border-width:5px;border-color:transparent transparent transparent var(--y-core-color-text-primary)}.tooltip-right[_nghost-%COMP%]:after{top:50%;right:100%;margin-top:-5px;border-width:5px;border-color:transparent var(--y-core-color-text-primary) transparent transparent}']}));let o=r;return o})();var ft=(()=>{let r=class r{constructor(t,i,s,l){e(this,\"elementRef\");e(this,\"componentFactoryResolver\");e(this,\"appRef\");e(this,\"injector\");e(this,\"tooltipValue\");e(this,\"placement\",n.top);e(this,\"autoPlacement\",!0);e(this,\"triggerType\",c.static);e(this,\"componentRef\");this.elementRef=t,this.componentFactoryResolver=i,this.appRef=s,this.injector=l,this.componentRef=this.componentFactoryResolver.resolveComponentFactory(G).create(this.injector),this.appRef.attachView(this.componentRef.hostView);let h=this.componentRef.hostView.rootNodes[0];document.body.appendChild(h)}onMouseEnter(){this.triggerType===c.hover&&this.show()}onMouseLeave(){this.triggerType===c.hover&&this.hide()}ngOnChanges(t){this.triggerType===c.static&&t.tooltipValue&&t.tooltipValue.previousValue&&t.tooltipValue.previousValue!==t.tooltipText.currentValue&&!t.tooltipText.currentValue&&this.hide()}ngAfterViewInit(){this.triggerType===c.static&&this.show()}show(){this.tooltipValue&&this.componentRef.instance.toggleDisplay({tooltipText:this.tooltipValue,elementRef:this.elementRef,placement:this.placement,autoPlacement:this.autoPlacement})}hide(){this.componentRef.instance.toggleDisplay(void 0)}ngOnDestroy(){this.appRef.detachView(this.componentRef.hostView),this.componentRef.destroy()}};e(r,\"\\u0275fac\",function(i){return new(i||r)(p(y),p(_),p(Y),p(F))}),e(r,\"\\u0275dir\",I({type:r,selectors:[[\"\",\"uiKitTooltip\",\"\"]],hostBindings:function(i,s){i&1&&$(\"focusin\",function(){return s.onMouseEnter()})(\"mouseenter\",function(){return s.onMouseEnter()})(\"focusout\",function(){return s.onMouseLeave()})(\"mouseleave\",function(){return s.onMouseLeave()})},inputs:{tooltipValue:[0,\"uiKitTooltip\",\"tooltipValue\"],placement:\"placement\",autoPlacement:\"autoPlacement\",triggerType:\"triggerType\"},features:[B]}));let o=r;return o})();var yt=(()=>{let r=class r{};e(r,\"\\u0275fac\",function(i){return new(i||r)}),e(r,\"\\u0275mod\",j({type:r})),e(r,\"\\u0275inj\",M({}));let o=r;return o})();export{ft as a,yt as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 2317,
          "_transferSize": 2977,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.615Z",
        "time": 67.52299994695932,
        "timings": {
          "blocked": 38.24700001233816,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.39699999999999847,
          "wait": 25.290999971419573,
          "receive": 3.5879999632015824,
          "_blocked_queueing": 2.7230000123381615,
          "_blocked_proxy": 3.781,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "445032",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/date-time-VOP4ANSD.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-BT2Q3CPI.js",
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
              "value": "https://n958200.alteg.io/date-time-VOP4ANSD.js"
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
          "headersSize": 1517,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5440"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd3a861bca6-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-164\""
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
              "value": "d638221e8e598a119e2081212dc29ca3"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 356,
            "mimeType": "application/javascript",
            "compression": 119,
            "text": "import{a as p}from\"./chunk-PX7RBKSN.js\";import{p as e,rc as n}from\"./chunk-6FGVQ7PR.js\";import{Aa as i,La as m}from\"./chunk-KO722YSM.js\";import{g as t}from\"./chunk-JV5WWF5Q.js\";var j=(()=>{let o=class o{};t(o,\"\\u0275fac\",function(f){return new(f||o)}),t(o,\"\\u0275mod\",m({type:o})),t(o,\"\\u0275inj\",i({imports:[e,n,p]}));let r=o;return r})();export{j as a};\n"
          },
          "redirectURL": "",
          "headersSize": 657,
          "bodySize": 237,
          "_transferSize": 894,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.615Z",
        "time": 110.6629999121651,
        "timings": {
          "blocked": 48.28299997866899,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.5640000000000001,
          "wait": 60.13699995444715,
          "receive": 1.6789999790489674,
          "_blocked_queueing": 4.170999978668988,
          "_blocked_proxy": 2.347,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "450154",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/master-step.module-B73WYMR6.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-WIWEQICE.js",
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
              "value": "https://n958200.alteg.io/master-step.module-B73WYMR6.js"
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
          "headersSize": 1526,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5440"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b36dd3ce7abcac-ALA"
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
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
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
              "value": "W/\"68e51480-2ae8\""
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
              "value": "bca60835d2e588d53139ebfe6fb8e368"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 10984,
            "mimeType": "application/javascript",
            "compression": 7528,
            "text": "import{c as w}from\"./chunk-X2IVCNZ3.js\";import{b as le}from\"./chunk-P3W6H44H.js\";import{F as P,g as L,y as pe}from\"./chunk-IGSDBEZN.js\";import{Ab as ae,Bb as se,Eb as z,Gg as U,Hg as de,Jf as N,Ld as ce,Md as me,Z as re,_ as ne,ba as K,ca as j,da as oe,e as W,p as ie,rc as y}from\"./chunk-6FGVQ7PR.js\";import{Aa as G,Ac as b,Fb as c,Ka as S,Kc as x,La as H,Nc as Y,Oc as Z,Pc as I,Qc as ee,Rc as te,Sc as D,Ub as O,Va as f,Wa as u,Xb as l,ac as $,cb as g,cc as F,dc as V,ec as m,fc as s,gb as p,gc as k,hc as J,ic as Q,kc as C,oc as h,od as _,pc as d,qc as R,rc as X,yc as v,zc as T}from\"./chunk-KO722YSM.js\";import{a as E,b as A,g as o}from\"./chunk-JV5WWF5Q.js\";var ue=[\"*\"],B=(()=>{let i=class i{};o(i,\"\\u0275fac\",function(t){return new(t||i)}),o(i,\"\\u0275cmp\",S({type:i,selectors:[[\"app-service-card-pad\"]],standalone:!0,features:[x],ngContentSelectors:ue,decls:2,vars:0,consts:[[1,\"pad\"]],template:function(t,r){t&1&&(R(),m(0,\"div\",0),X(1),s())},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block}.pad[_ngcontent-%COMP%]{padding:12px 16px;border-radius:16px;background:var(--y-core-color-surface-secondary)}'],changeDetection:0}));let n=i;return n})();var Se=(n,i)=>i.id,ge=n=>[n],Ce=(n,i)=>({selectedServiceId:n,subServiceLinkId:i});function he(n,i){if(n&1){let a=C();m(0,\"app-services-card-with-master\",7),h(\"masterSelected\",function(t){let r=f(a).$implicit,M=d();return u(M.masterSelected.emit({masterId:t,compositeServiceId:M.service().id,serviceLinkId:r.id}))})(\"openMasterInfo\",function(t){f(a);let r=d();return u(r.openMasterInfo.emit(t))}),s()}if(n&2){let a,e=i.$implicit,t=i.$index,r=d();l(\"services\",Y(5,ge,e))(\"serviceStaff\",r.selectedMastersMap()[e.id])(\"availableMasters\",r.compositeMasters()[e.id])(\"mayChangeMaster\",t!==0||!r.hiddenMasterId()||r.hiddenMasterId()!==((a=r.selectedMastersMap()[e.id])==null?null:a.id))(\"tempSubInfo\",Z(7,Ce,r.service().id,e.id))}}function xe(n,i){if(n&1&&(J(0),m(1,\"div\",8),v(2,\"\\xB7\"),s(),m(3,\"div\",9),v(4),I(5,\"secondsToTime\"),s(),Q()),n&2){let a=d();c(4),T(D(5,1,a.service().seance_length,!1,!0))}}var ve=(()=>{let i=class i{constructor(){o(this,\"service\",p());o(this,\"compositeMasters\",p({},{transform:e=>e!=null?e:{}}));o(this,\"serviceInOrder\",p());o(this,\"hiddenMasterId\",p());o(this,\"company\");o(this,\"masterSelected\",new g);o(this,\"openMasterInfo\",new g);o(this,\"selectedMastersMap\",_(()=>this.serviceInOrder().subServicesInfo.reduce((e,t)=>{var r;return e[t.serviceLinkId]=(r=this.compositeMasters()[t.serviceLinkId])==null?void 0:r.find(M=>M.id===t.selectedMasterId),e},{})));o(this,\"selectedServicesParams\",_(()=>this.service().composite_details.links.map(e=>E({},U(e)))))}get currencyShortTitle(){var e;return(e=this.company)==null?void 0:e.currency_short_title}};o(i,\"\\u0275fac\",function(t){return new(t||i)}),o(i,\"\\u0275cmp\",S({type:i,selectors:[[\"app-composite-service-card\"]],inputs:{service:[1,\"service\"],compositeMasters:[1,\"compositeMasters\"],serviceInOrder:[1,\"serviceInOrder\"],hiddenMasterId:[1,\"hiddenMasterId\"],company:\"company\"},outputs:{masterSelected:\"masterSelected\",openMasterInfo:\"openMasterInfo\"},standalone:!0,features:[x],decls:11,vars:7,consts:[[1,\"pad-title\"],[\"name\",\"complex\",3,\"setSvgSize\"],[1,\"pad\"],[1,\"service-card\",3,\"services\",\"serviceStaff\",\"availableMasters\",\"mayChangeMaster\",\"tempSubInfo\"],[1,\"summary\"],[1,\"summary-price\"],[4,\"ngIf\"],[1,\"service-card\",3,\"masterSelected\",\"openMasterInfo\",\"services\",\"serviceStaff\",\"availableMasters\",\"mayChangeMaster\",\"tempSubInfo\"],[1,\"summary-divider\"],[1,\"summary-duration\"]],template:function(t,r){t&1&&(m(0,\"h4\",0),k(1,\"ui-kit-svg-icon\",1),v(2),s(),m(3,\"app-service-card-pad\",2),F(4,he,1,10,\"app-services-card-with-master\",3,Se),m(6,\"div\",4)(7,\"div\",5),v(8),I(9,\"price\"),s(),O(10,xe,6,5,\"ng-container\",6),s()()),t&2&&(c(),l(\"setSvgSize\",!1),c(),b(\" \",r.service().title,\"\\n\"),c(2),V(r.selectedServicesParams()),c(4),T(te(9,4,r.service(),r.currencyShortTitle)),c(2),l(\"ngIf\",r.service().seance_length))},dependencies:[W,P,L,de,B,w,y,z],styles:['@charset \"UTF-8\";.pad[_ngcontent-%COMP%]{margin:8px 16px 32px}.pad-title[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;gap:4px;align-items:center;margin:8px 16px}.complex-title[_ngcontent-%COMP%]{margin-bottom:16px;color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:14px;line-height:20px}.summary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.summary-price[_ngcontent-%COMP%], .summary-divider[_ngcontent-%COMP%], .summary-duration[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:500;font-size:16px;line-height:24px}.service-card[_ngcontent-%COMP%]{display:block;margin-bottom:24px}'],changeDetection:0}));let n=i;return n})();var Ie=(n,i)=>i.id;function ye(n,i){if(n&1){let a=C();m(0,\"app-composite-service-card\",2),h(\"masterSelected\",function(t){f(a);let r=d();return u(r.selectMasterForCompositeService(t))})(\"openMasterInfo\",function(t){f(a);let r=d();return u(r.openMasterInfo.emit(t))}),s()}if(n&2){let a=i.$implicit,e=d();l(\"company\",e.company)(\"service\",a)(\"compositeMasters\",e.compositeMasters()[a.id])(\"serviceInOrder\",e.getServiceInOrder(a.id))(\"hiddenMasterId\",e.hiddenMasterId())}}function Pe(n,i){if(n&1&&(m(0,\"div\",9),v(1,\"\\xB7\"),s(),m(2,\"div\",10),v(3),I(4,\"secondsToTime\"),s()),n&2){let a=d(2);c(3),T(D(4,1,a.selectedServicesParamsLength(),!1,!0))}}function we(n,i){if(n&1){let a=C();m(0,\"h4\",3),k(1,\"ui-kit-svg-icon\",4),v(2),I(3,\"translate\"),s(),m(4,\"app-service-card-pad\",5)(5,\"app-services-card-with-master\",6),h(\"masterSelected\",function(t){f(a);let r=d();return u(r.masterSelected.emit({masterId:t}))})(\"openMasterInfo\",function(t){f(a);let r=d();return u(r.openMasterInfo.emit(t))}),s(),m(6,\"div\",7)(7,\"div\",8),v(8),s(),O(9,Pe,5,5),s()()}if(n&2){let a,e=d();c(),l(\"setSvgSize\",!1),c(),b(\" \",ee(3,9,\"record.services\"),\" \"),c(3),l(\"services\",e.selectedServicesParams())(\"titleMarginBottom\",8)(\"serviceStaff\",e.selectedMaster())(\"availableMasters\",e.availableSingleMasters())(\"mayChangeMaster\",!e.hiddenMasterId()||e.hiddenMasterId()!==((a=e.selectedMaster())==null?null:a.id)),c(3),b(\"\",e.selectedServicesParamsPrice(),\" $\"),c(),$(e.selectedServicesParamsLength()?9:-1)}}function Oe(n,i){if(n&1){let a=C();m(0,\"div\",11),h(\"click\",function(){f(a);let t=d();return u(t.useDice())}),k(1,\"ui-kit-svg-icon\",12),s()}if(n&2){let a=d();c(),l(\"name\",\"common/dice\")(\"@rotate\",a.rotationState)}}var fe=(()=>{let i=class i{constructor(){o(this,\"selectedServices\",p([]));o(this,\"selectedMaster\",p(null));o(this,\"availableSingleMasters\",p([]));o(this,\"compositeMasters\",p({},{transform:e=>e!=null?e:{}}));o(this,\"servicesInOrder\",p());o(this,\"hiddenMasterId\",p(null));o(this,\"company\");o(this,\"masterSelected\",new g);o(this,\"openMasterInfo\",new g);o(this,\"isDiceEnabled\",ce.isFeatureEnabled(me.composite_services_dice));o(this,\"rotationState\",\"normal\");o(this,\"selectedServicesParams\",_(()=>this.selectedServices().filter(e=>!e.is_composite).map(e=>A(E({},U(e)),{price_max:e.price_max}))));o(this,\"selectedServicesParamsPrice\",_(()=>this.selectedServicesParams().reduce((e,t)=>e+t.price_max,0)));o(this,\"selectedServicesParamsLength\",_(()=>this.selectedServicesParams().reduce((e,t)=>e+(t.seance_length||0),0)));o(this,\"selectedComplexServices\",_(()=>this.selectedServices().filter(e=>e.is_composite)))}getServiceInOrder(e){return this.servicesInOrder().selectedServicesInfo.find(t=>t.serviceId===e)}useDice(){this.rotationState=this.rotationState===\"normal\"?\"rotated\":\"normal\";let e=[];this.servicesInOrder().selectedServicesInfo.forEach(t=>{if(N(t))t.subServicesInfo.forEach(r=>{let M=this.compositeMasters()[t.serviceId][r.serviceLinkId];e.unshift({masterId:M[Math.floor(Math.random()*M.length)].id,compositeServiceId:t.serviceId,serviceLinkId:r.serviceLinkId})});else{let r=this.availableSingleMasters;e.push({masterId:r[Math.floor(Math.random()*r.length)].id})}});for(let t of e)this.masterSelected.emit(t)}selectMasterForCompositeService(e){let t=[e];this.servicesInOrder().selectedServicesInfo.forEach(r=>{if(!N(r)){if(r.selectedMasterId)return;t.push({masterId:e.masterId})}});for(let r of t)this.masterSelected.emit(r)}};o(i,\"\\u0275fac\",function(t){return new(t||i)}),o(i,\"\\u0275cmp\",S({type:i,selectors:[[\"app-services-card-with-master-mock\"]],inputs:{selectedServices:[1,\"selectedServices\"],selectedMaster:[1,\"selectedMaster\"],availableSingleMasters:[1,\"availableSingleMasters\"],compositeMasters:[1,\"compositeMasters\"],servicesInOrder:[1,\"servicesInOrder\"],hiddenMasterId:[1,\"hiddenMasterId\"],company:\"company\"},outputs:{masterSelected:\"masterSelected\",openMasterInfo:\"openMasterInfo\"},standalone:!0,features:[x],decls:4,vars:2,consts:[[3,\"company\",\"service\",\"compositeMasters\",\"serviceInOrder\",\"hiddenMasterId\"],[\"class\",\"dice-container\",3,\"click\",4,\"ngIf\"],[3,\"masterSelected\",\"openMasterInfo\",\"company\",\"service\",\"compositeMasters\",\"serviceInOrder\",\"hiddenMasterId\"],[1,\"pad-title\"],[\"name\",\"table-call-bell\",3,\"setSvgSize\"],[1,\"pad\"],[1,\"service-card\",3,\"masterSelected\",\"openMasterInfo\",\"services\",\"titleMarginBottom\",\"serviceStaff\",\"availableMasters\",\"mayChangeMaster\"],[1,\"summary\"],[1,\"summary-price\"],[1,\"summary-divider\"],[1,\"summary-duration\"],[1,\"dice-container\",3,\"click\"],[1,\"dice-icon\",3,\"name\"]],template:function(t,r){t&1&&(F(0,ye,1,5,\"app-composite-service-card\",0,Ie),O(2,we,10,11)(3,Oe,2,2,\"div\",1)),t&2&&(V(r.selectedComplexServices()),c(2),$(r.selectedServicesParams().length>0?2:-1),c(),l(\"ngIf\",r.isDiceEnabled))},dependencies:[w,B,y,z,P,L,ve,W,se,ae],styles:['@charset \"UTF-8\";.pad[_ngcontent-%COMP%]{margin:8px 16px 32px}.pad-title[_ngcontent-%COMP%]{color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;gap:4px;align-items:center;margin:8px 16px}.complex-title[_ngcontent-%COMP%]{margin-bottom:16px;color:var(--y-core-color-text-secondary);font-style:normal;font-weight:400;font-size:14px;line-height:20px}.summary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.summary-price[_ngcontent-%COMP%], .summary-divider[_ngcontent-%COMP%], .summary-duration[_ngcontent-%COMP%]{color:var(--y-core-color-text-primary);font-style:normal;font-weight:500;font-size:16px;line-height:24px}.service-card[_ngcontent-%COMP%]{display:block;margin-bottom:24px}.dice-container[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;cursor:pointer}.dice-container[_ngcontent-%COMP%]   .dice-icon[_ngcontent-%COMP%]{position:absolute;width:25px;height:25px;left:min(500px,100vw - 120px);bottom:0}'],data:{animation:[re(\"rotate\",[j(\"normal\",K({transform:\"rotate(0deg)\"})),j(\"rotated\",K({transform:\"rotate(360deg)\"})),oe(\"normal <=> rotated\",ne(\"1000ms ease-in-out\"))])]},changeDetection:0}));let n=i;return n})();var ht=(()=>{let i=class i{};o(i,\"\\u0275fac\",function(t){return new(t||i)}),o(i,\"\\u0275mod\",H({type:i})),o(i,\"\\u0275inj\",G({imports:[ie,P,w,y,fe,pe,le]}));let n=i;return n})();export{fe as a,ht as b};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3456,
          "_transferSize": 4116,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:02:22.624Z",
        "time": 111.15600005723536,
        "timings": {
          "blocked": 59.360000052295625,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.7060000000000031,
          "wait": 46.809000003583726,
          "receive": 4.281000001356006,
          "_blocked_queueing": 2.927000052295625,
          "_blocked_proxy": 8.369,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "448258",
        "_initiator": {
          "type": "other"
        },
        "_priority": "Low",
        "_resourceType": "image",
        "cache": {},
        "connection": "9090",
        "pageref": "page_154",
        "request": {
          "method": "GET",
          "url": "https://assets.alteg.io/booking_form_appearance_header/origin/2/2f/2fe767ef0a45c6d_20240229222401.png",
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
              "value": "/booking_form_appearance_header/origin/2/2f/2fe767ef0a45c6d_20240229222401.png"
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
              "value": "88918"
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
              "value": "9889a568ede26410-ALA"
            },
            {
              "name": "content-length",
              "value": "1439648"
            },
            {
              "name": "content-type",
              "value": "image/png"
            },
            {
              "name": "date",
              "value": "Wed, 08 Oct 2025 06:02:22 GMT"
            },
            {
              "name": "etag",
              "value": "\"8ec600a00ec4d77390006462d0bb1fc3\""
            },
            {
              "name": "last-modified",
              "value": "Thu, 29 Feb 2024 18:24:02 GMT"
            },
            {
              "name": "nel",
              "value": "{\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}"
            },
            {
              "name": "report-to",
              "value": "{\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=6%2F35QOVDQ%2BhG%2FN0QdpHnpleOeL%2F%2Bl5uFYnn2fmwRhs4vC17PT68AorN248RSZuCF4uvq9%2B7t%2B9PxNDoU8Ve0NdXgAo7RoqV4%2FnjeRH%2Fu%2FlWTWQ%3D%3D\"}]}"
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
              "value": "00-2a59f7d39c168b86b58db68189d45795-0d862f22ab94b7c4-01"
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
              "value": "nls-hw-edge-gc7"
            },
            {
              "name": "x-id-fe",
              "value": "nls-hw-edge-gc5"
            },
            {
              "name": "x-shard",
              "value": "nls-shard0-default"
            }
          ],
          "cookies": [],
          "content": {
            "size": 1439648,
            "mimeType": "image/png",
            "text": "iVBORw0KGgoAAAANSUhEUgAAAyAAAAHBCAYAAACR999mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCLiXR2ARgeHP8AAAAAAgICAP///wD///8A/wD/AAAAAQAA//8AAwMDAP///wAAAAAA////AAAAAAAAAAAAAwQEAPz+/QD+/v4ABAQEAPz8/AAEBAQA/v7+AP//AQABAQEA/f39AAMDAwABAQEA////AAEBAQAAAAAA/f39AAICAgABAQEA/f39AP7+/gACAgIAAwMDAP39/QAB/wAAAwICAAAAAAACAQIAAQAAAAUEBAAB/wAABQQEAAD//wAA/v0AAgEBAAMBAgACAwEABAABAAQCAwAAAP4ABAMDAAMAAQAFBAQABAIBAAMBAQD///4ABgUFAAICAgACAgAAAwABAP///wAAAP4ABQQEAAEBAQAEBAMAAQEBAAEBAQABAQAABgYFAAIAAAD///8AAgIAAAEBAQAAAAAAAgICAAAAAAAEAwEAAgICAP7+/gAAAAAAAAEBAP///wABAQEAAwMDAP///wD+/v4A//8AAP7+/wACAgIAAAAAAAAAAAADAwMA////AAAAAQD//wAA/f39AP3+/gABAgIAAAAAAP7+/gABAQEA/f39AP///wADAwMAAAAAAP7+/gD///8A/f39AAEBAQABAQEAAAAAAP///wD//v4A//7+AAEBAQD///8A/v7+AAICAgAEBAIAAgICAP/+/gABAAEAAAH+AAAAAAAA/v4AAgICAAcGBAD//v4AAQEAAAMDAgD9/f0AAgICAAUEAwD///4AAQEBAAMDAwABAQEAAgIAAAAA/wAA//8AAwICAAEBAQD+/v4AAAAAAAUFBQD///8AAgICAP39/QADAwIABAMCAAAAAAD///8A////AP///wADAwMA////AAUFBAD+/v0A////AP///wABAQEAAgICAP///wD///8AAAAAAP///wAAAP4AAwMEAP7+/QACAQEAAwMDAAAAAAD+/v4A/wAAAAIBAQABAgIA/v/9AAAAAAAEBAQA/v79AAAA/wABAQIAAgIBAAEBAQADAwMA/v7+AAAAAAAAAAAAAAAAAAAAAAD///4A/wD/AAQFBAAAAAAA/f39AP7+/gD///8AAQEBAAQEBAD///8AAQEBAAAAAAAAAAAA/Pz8AAAAAAD///8AAgICAAEBAQABAQEA/f39AP///wD///8AAQEBAAAAAAAAAAAA+/v7AAAAAAD+/v4AAAACAAICAgD///8AAQEBAP///QD9/f0A/f39AAICAgD9/f8AAgICAP39/QAAAAAA/f39AP7+/gABAAIA/Pz9AAAAAAACAgIAAAAAAP39/gD8/PwAAQEBAP///wD+/gAAAAAAAPr7+wD+/wAA/f3/AAAAAQABAQAAAQEAAP39/QD9/v4A//8BAAAAAQD7/fwA/vz/AAICAgD7/f4A/v7/AAABAQD9/f8A/P3+APv9/AD/AAEA//8AAPv9/QD/AQIA+/3+AP38/wABBAMA+fz8AP3+AAD8/v4A/P3+AP0AAQD9//8A/wD/AAEBAwD+AP8A/v8AAPv9/QABAQEAAQICAP8AAQD+/v8A////AP7+/gAEBAQA////AAAAAAD///8AAAAAAAEBAQACAgQAAAL/AP37/gD+/v4AAwMDAAAAAAAAAAAAAgICAAICAgAC/wAA/Pz8AAEBAQAEAwIAAQEAAP78/QAFAwMAAwMDAAQCAgAHBAMAAgEAAAD+/wAEAgIAAwIBAAAA/gAEAQAAAwIBAAEBAAAFAwMAAf//AAIBAAACAv8AAQEBAAL//wAGBgUAAwICAP///gAEBAMABAIBAAMBAgACAgIAAgIAAP///gAEAwIAAQEBAAICAgABAP8AAP/+AAYGBgD8/PsAAgICAAYFBQAAAP8AAgIBAP7+/gAAAAAABAQEAAEBAQACAgIA////APz8/AADAgQA/wABAP3+/QABAQEAAgICAPz8/QACAgIAAAAAAP///wD9//8AAAAAAP//AAACAgMAAgICAP///wABAQEA/v7+AAICAgABAf8A//8AAAAA/wAAAgEAAwMEAP//AAABAQEAAQEBAAMDAwD///8AAAAAAAEBAQAEBAIAAgICAP///wABAQEAAQEBAP///wABAQAAAwMDAAAAAAD+/f0AAAEBAAcGBgAAAAAA/v79AAEBAAADAwMAAQEBAAAA/wD///4AAQEBAAAAAAADAwMA/wD+AAICAQAAAAAA////AP7+/gABAQEAAQEBAAAAAAAFBQQA/f39AP7+/gD///8AAgICAAICAgD9/f0A/f39AAEBAQACAAEA/v39AP7+/gABAQIAAQEBAAEBAQD///8A/f39AAIC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//8A////AP///wD///8AAAAAAAEBAgAAAAAAAgICAAAA/wAAAAAAAAAAAAMDAwAAAAAAAQEBAP//AQD9/fwAAQEBAAEBAQD+/v4AAgICAAAAAAAAAAAAAQEBAAAAAAD+/v4A////AAAAAAD9/f0AAgICAAICAgD9/f0AAAAAAP///wD+/v4AAQAAAP7//wACAQEAAwMDAP///wD//wAA////AP7+/gABAAEAAQL/AAICAgADBAQAAgIBAP7//wACAQEA/v7+AAIC/wAAAAAAAAAAAP3+/wADAgEA/v7+AAAAAAACAgIA//8AAP///gADAgEA/f39AAMDAwD///8A////AP7+/gACAgIA/v7+AAEBAQACAgMA/v7+AP///gACAgIAAQEBAP7+/gD9/f0AAwMDAP39/gD9/fwAAAABAAEBAQD///8A/f37AAEBAQACAgIA////AAAAAAABAQMA/v7/AP7+AAD+AP4AAQEDAP8A/gABAQEA//39AP0AAAAB//8AAgIBAP7//gD///8AAQECAAEBAQD8/PwA/v4AAAMDAwD///wA////AAAAAAABAQEA////AP///wABAQEAAQIAAP///wD9/f4AAAD/AAAAAAABAQEAAQEBAP7+/gAAAAAA/v7+AAEBAQD///8AAwMDAPv7+wAAAAAAAQEBAP7+/gD///8A/f39AP///wABAQEAAgICAP///wD+/v4AAgICAP7+/wACAgMAAAABAAEBAQD///8AAAAAAPv7/QABAQEAAAACAP39/wD+/v4AAAAAAAAAAAD9/f0A/v3/AP//AAAEBQQAAAABAPr6+gADAwMA/v7/AP39/QD+/v4AAAABAP7+/wAAAAAAAQEBAAEBAgACAQEAAwMCAPz8/QD+/v4A/Pz9APv7+wACAwMA////APz8+wD/AgEAAAEBAPr8/QD//wAA/Pz8AAECAgD/AAEAAQIBAAH/AwD8/P0AAAEBAAABAgD8/f4A/f3+APz//gAC/gEAAQAAAP7+/gD+/v0AAQICAAD+/wAAAAAAAgIDAP//AAD///8AAAABAAEBAQAAAAAA////AP4A/wD+/v8A/v7+AAEBAQD+/v4AAAAAAP///wABAQEAAAAAAP7+/gABAf8A/fz8AAIBAwAEBAQA////AAAAAAD///8AAAAAAP7+/gAAAAAAAgICAAMDAwACAQAAAQEAAP8B/gD///8AAQEBAAEBAAD///8AAQICAAECAQD/AP8A/v//AAD//QABBAQAAQEBAAIBAQD///8ABAMCAAMCAgAAAP0AAQEBAAMA/wAAAAAA///+AAICAgD//wAA/wAAAAECAgAAAAAA////AAIBAgD///8AAAD/AAEBAgABAQEAAgADAP7+/gAEBAQAAQEBAP3+/gACAgAA//8AAAAAAAAAAAAA////AP7+/gD///8A////AAAAAAD/AQAA////AAEBAQD+/v4A//8AAP///wD8/PwAAgICAAAAAAAAAAAAAAAAAAAAAQD9/f0A////AAICAgD///8AAgICAAEBAQACAgIA/f3+AAECAgD9/v4AAgIAAP///wABAQEA////APz8/AAEBAQAAAAAAAAAAAD+/v4A/f39AAICAgACAgIA////AAMDAwAAAP8AAAAAAAICAgABAQEAAAAAAP3+/gACAQEAAAAAAAABAAD///8AAAAAAAICAQACAgMA////AAEBAQAAAAAAAQEBAP7+/gD///8ABAQEAAICAgD///8AAAAAAAEBAQD+/v4AAAAAAP///wAAAAAA/v7+AP///wAAAAAAAwMDAP///wD//v8AAwMDAAEBAQD///8AAAAAAP///wADAwMA/v7+AP///wAAAAAABAQEAAICAgD+/v4A/v7+AP///wD+/v4A/v4AAP///wD///8A////AAEBAQABAQEA/v7+APz+/gD7+/sAAgICAAEBAQADAwMAAQEBAP7+/gD+/v4A//8AAP7+/gD+/v4AAgIDAAAAAAAEAwIAAwICAPz9/gAAAAAAAgEDAAAB/wAAAAEAAAABAAEBAAACAgIAAAAAAP7+/wD+/v0A////AP/+AAAAAP8A/P39AAMDBAAC//8AAAYGAP39/QAAAAAAAwIEAP//AQD7+/sABAQFAPTy9AAIBwYABAUEAP7//gD///8AAP8BAAIDAgD9/v4A/v3+AAUEBQACAQIA//7/AAUCAgAFBAQAAQABAAAAAAD//wAA/wEAAAIAAgAEBAUA/v79APr8+wACAgMABgQEAAUBAwD9AP8A/gH/APz7/AANCAwABgUHAPn7+QAFBgYAAQICAPj39wD+//4A+/79APf8+wD2/PoACQkHAAYGBgD///8AAgMDAPn6+QABAQIAAgQCAAH+AQACAgIACQgIAPv8+wD+//4A/wD/APz9/AACAgEABAIEAAMCBAAHBQcAAAEBAAABAAABAwIA//3+AAMBAgD8+vsA/wIBAPz7/QAAAAAACAQGAAkFCAABAQEAAgIBABAQDgD4/PkA7vPxAAz8/QAOCw0A/P3+APn7+AAEBQQA9/n6AAEAAQAIBQgA9f71AAYEBAACAgIA+fr5APr6+gD/AwAAAgEBAAEDAgAFAgQAEwsQAPT39wD/AQAABAMDAAICAQAEBQQA7/LvAP3//wD9/v4AAgICAPf6+QACAgIAAgICAAIBAQD8/P0ABwIGAAMEBAD9/fwA/v39AAMDAwD+/v0A+vz7AAICAQAEAQMABAMFAAIBAQD///8A/f78AAgGCQD8+/4A/f76AP7//wD6/PsACQUHAAQEBAAA/wAAAQABAP/9/QACAQEABQIDAAACAAD+AAAA+vr6APn7+AD5+vkA/gD9ABELDgAIBAYA/Pz7AP4BAADq8O8A/P38ABcQEgADAQEA/QEAAAMBAgD5//4A+/f3ABAPDwDx8/EA8fX0AAsICQAMCAkA/f39AAEAAQAMDQ0AEAwNAAMDAwD5+fkAAAEAAAAAAAD+/v4A+Pn4AAsICQD8//wABAQEAAgHCQDs7u0AAwQDAAsLCQD39/gA/gEBAPb5+AAGAwQACwYIAA4ODAD5+fkA/f39APz9/QD0+fgA9vr3APj7+QAHBggADwcJAPP29QD+//4ACQcIAA4KDAAAAQAA7/LvAPb8+QD7/vwAAv8CAAwKCgD5+/oA/v7+AAcDBQAJBAYA+fj4AAIEAwD3+fcA9/v4AAQDBAACAAMAAgMCAPz+/gAA/v4ADQoNAAUDBAD8/f0A9vn3AAICAwATDA4AAwICAPr8/ADw8vAA+v39AAQEBAACAAAABQMEAAcCBAAAAQEA/f39APv7+wAIBwcADgsMAAkDBQACAgIABwUGAAUFBADx8vEA/v8AAAIEBAD9AAAA7vf0APP39gD6/vwABQMEAAoGBgAMBgkABQMCAAIBAAAGBQYA///+APb5+QD///8A/P3/AAYEBAADAwUABwMAAAYGBQACAwMA+/z8APn5+wAB/f8ACAMFAAEBAQD9/f0A+vr6AAADAgADAQAACQUHAAUCAwD9+/0AAQEAAPz+/QAA/f4A/AD6APP8+gD7/PwA/P39AAgHBwACAAEA/v37AAcGBQALCAgADwsJAP3+/wD09vgA/f3+AP39/QD9/f0A+Pv6APf5+AD/AAAAAgIBAAQDBAAD+gIAAP8BAPz9/AABAgEA//7/AAYCBAAGBQMA/f79AP79/gAAAQIABAQDAAAAAQALCQkABwgHAAIBAgD9/PwAAf//AA0I/AD+/goA/v//APr+/QD7/v4A+fr6APv7+wAFAwIACAIDAPsB/gD+//4ABAEBAQAAAAAAAQEBAP7+/gD///8A////AP8A/wAA//8AAwMDAP7+/gAAAAAAAgICAP7+/gAAAAAA/v7+AAEBAQACAgIA/Pz8AP///wABAQEAAgICAP///wD///8AAwMDAAAAAAAAAAAAAAAAAAAAAAD9/f0AAQEBAAQEBAD+/v4AAAAAAP///wD///8AAQEBAAICAgACAAAA////AAEBAQACAgIA/v7+AP39/QACAAEAAAEBAAIBAQD//v4A/gEAAAQDAgAEAgMAAQEBAP8AAAABAgEAAQAAAAQDAwABAAEAAgICAP8AAAAEAwMAAgICAAAAAAD///4A+/v+AAAAAAAGBgUABAQDAP//AAAAAP8AAAAAAAAAAAACAgMAAAD/AAAAAAABAQEAAwMEAAICAgD+/v4AAAAAAP7+/gD8/QEAAwIBAP3+/gACAgIAAAAAAP///wAAAAAA/f3/AAIC/wABAQIAAQECAAIC/wD+/v4AAgICAP///wD///8AAAACAAMDAgAEBAQA/f39AP8AAAADAwMA/f39AP///wAAAAAAAgICAP///wD8/PwAAwMDAP39/QABAQEAAAAAAP///wAAAAAAAQEBAP///wD/AAAAAAEBAAICAgD+/f0ABgUFAP///wACAgAA/Pz8AAAAAAD/AP8AAwAAAAAAAAD9/v8AAQEBAAEBAgD/Af8A/gAAAPr8/QAA//8ABQEBAAAAAAD+//8AAAAAAAEBAQD///8A/v7/AAAA/wADAgIAAgIBAP39/QACAgIABAQEAAAAAAABAQEAAAAAAAEBAQD+/v4AAgEBAAABAwD+//8A////AP//AAAAAP8A/f39AAEBAQACAgQAAAAAAP7+/gABAQEAAQECAAAA/wD9/f0AAQEBAAMDAwD+/v4A////AAEBAQACAgMA/wAAAP//AQD+/v4AAQEBAP/+/gAA//8AAAACAAICAwD+/v4A/f39AAAAAAABAQEAAgIDAP//AAD///8A/Pz8AAEBAAD///8AAgICAAMDAwACAgIA/wEAAP39/wD+/v8AAwMDAP///gACAgEA/f39AAICAQABAQEA////AP39/QAAAP8A////AP39/QACAgIA+vr6AAEBAQAAAAEAAQEDAP39+wABAQAAAwMCAP7+/QAAAAEA/Pz+AP///wABAQEA///+AAAAAAAAAAAA////AP///wD9/f0A////AAAAAAD8/PwAAwIEAAAB/wD//gAAAQECAP39/AD6+voAAgICAAEBAgD8/P0A/f39AP7+/wAAAAIA/f39AP7+/gABAQEA//8AAP7+AAD7/fwABAQFAP7+/gD+/v4A//8AAAMCAwD9/f4AAgMDAAQEBAD5+/wA////AP3+/gAAAQEAAAEBAP7+AAD7/fwAAAECAP39/gABAQEA/v8AAPv8/QD/AQIA/wABAAACAgD///8A/v3+AP7+/gD/AAAAAQIBAAH/AAACAQAAAAEAAP7+/gD/AP8A/wAAAAICAgD+/v4AAAAAAP7+/gD+/v8AAQEBAAICAgACAgIA/v7+AAEBAQD///8AAQEBAAAAAAD+/v4A/v7+AAABAQAEBAQA////AP///wD9/f0AAQEBAAEBAQD9/v8AAwICAP7+/gACAwIA////AAMDAwADAQEAAAAAAP///wAAAAEAAAAAAP///wAAAP8A/f7+AAIB/wAAAQEAAgMCAAEAAAACAQEAAAABAAEBAAACAgMAAQEAAAMAAAAAAAAAAQECAP///wACAgEAAAAAAPz+/QAGAwQAAAD/AAEBAQD///4AAgICAP7+/QAAAAAAAQICAAQEBAACAgEA////AP7+/gD//wEAAAEAAP///wABAgIA/v//AAMDAwD///8AAAAAAAIDAwABAQEA/Pz8AAICAgAAAAAA////AAEBAQAAAAAA////AP7+/gAAAgIAAQEDAAEBAAABAQEAAgICAAEBAQD+/v4A////AAICAgD+/v8A/v/+AAQCBQAFAwMA////AAMDAwD+/v4AAgICAAEBAQD9/f0AAQEBAAICAQABAQIAAgICAAEBAQABAQEAAwMDAP///wD+/v8AAQH/AP39/QACAgIAAgICAP7+/gACBAQA/wABAAEBAAAB/wAAAAAAAAEBAQACAgEAAAAAAP///wACAgIAAAH/AP//AAD+/v4A////AP7+/gD///8AAwMDAP///wD//wAA/v79AP7+/gACAgIAAQEBAP7+/gAAAAAAAgICAAICAgAAAP8AAgEBAP3+/gD9/v4AAgICAAAAAAD9/fwAAAAAAPz8/AAEBAQA/v7+APz8/AD+/v4AAgICAP///wACAgIA////AAEBAQD9/f0AAAAAAPz8/AAFBWDMApkAACAASURBVAUA////AP7+/gACAgIAAQEBAAICAgD///8AAgICAP///wABAQEAAQEBAAEBAQACAgIAAAD/AAQEBAD//wAAAQAAAP//AAABAQEA///+AP39/gADAwMA/f39AAQEBAABAQIA/Pz8AP7+/gD///8AAQACAP39/QD//wEABQUEAAAAAAAAAAAAAP8AAP7+/gADAwMA/v4AAAYHBgD7+/sA/v79APz8+wD8AwIACQYHAP79/QD4+fkABAECAP78/QD6/fwABAQEAAMBAQD7/PoABQQFAAkDBgD///8AAf//AP0AAAD8/vwAAfz6AAwHCgD9/f0A/QMCAP//AAAAAAAABgYGAP/9/gD8/f0A+fv7AP7//wAGBQgABAQGAPX59gAEAwMAAQECAPz9/QD9//0A/f79APT49wD+//4A/f3+APj4+AADCAkA+/z8APn6+gD+//4A9Pb0AAkGCAAEAwUAAgEBAPn7+gD7/v0A/P/8AAIDAQAB/wEABAEEAAH/AAD+/v4A/gD/APz7/AD7/vwABgUFAAMBAwACAgMA+//9AAEBAQACAQIAEQwPAAoICQD8+/sAAwUEAPf39wD2+PcA/Pz9AAECAQD8/fwAAQICAPz8/AD7+/oABgQEAAD/AAD///8AAP8AAAYEBQAAAAEA+v37AAIDAgD7AP0ABQcFAAD9/gANDA0A9vr6APb59wAMCQoA9fj3AAYFBwD8/vwA+Pz7AAYDBAADAQIA+Pn5AAMDAwD7/PwA/f38APf8+AAFAgQACAICAPr8+wAEAgMA/v39AAEAAAAA/wAABQIDAAkHCAAA/f8ABAIDAP8BAQD7/PsADAcLAAH+/gDx9vAA9/j4AAQEAgADAgMABAUEAPb2+AAFAgQABQIDAP3/+wANCAoACAQFAPz9/AD2/v4ABwQFAAYDBAABBwEAAAABAAYDBQAFBQUAAAMCAOvt7AAHBAYADQgKAAMCBAABAwIA/v0AAP3+/QAA/v8ACwoKAPr7+gD3+/kAFxESAA0HCgD2+PcA/gD+ABEOEAALCAkA9Pb2AP7+/gACAQIA6e3qAAcHBwD1+PYACAYHAAQDAgACAQEAAwMEAP8A/wADBgUA/Pv6AOju7QAIBgcAAAABAAoGCAAQCwwACAYHAPb39wD+AQAA+Pb0APz+/QD6+vsA/fv8AAgFBgAA//8A8/b1AAIDAgASCw8AAwMDAO/18gD2+vYA/P79AAABAAAEAwMAAgACAPj6+QAA//8AEAkLAAYBAwD9AP8ABAMEAP7+/AD+BgYA/gAAAPz+/QD5/vwACAEHAAwHCAAIBQgABAQFAPz9+gD++fsADQcHAAcFCAD7/f4A9ff4APn8+AD+AQAAAQAAAAQCAgAHBQYA+fv6APv8/AABAAEACQcHAAkHCAAC/wAA/P39APwB/QAGAwMA/v7+APn7+wD7//8A8/j1APb5+AD4/PsA/wD+AAgGBQAPBAsACAQFAP7+/QAA/wAABAMDAPz9/ADz9/UA/P39AAAAAAADAgQACQgIAAMAAQD8//4A/v/+AAD//wD8/PwA+fn4AAIBAgAQDAwAAgABAPr8/AD///4ACAoMAP3//gAA//4ABQQFAAD//wD+BgEAAgEBAAUFCQAA/wAA/gAAAP3+/gAJBQUABAMDAAQEBAACBAMAAgABAAcGBQD9/P0A9Pb3AP39/wD7/f0A+vz8AP///wAFBAQAAwICAAcFBgAEAwMAAQEBAAD//wAKCgwAAQEBAPz7+gD9/f0A/wAAAAYFBgD+/v0A/fr/AAMEAgACAQIABAQEAAcHBwAA/wAA8/T2AAEAAAADBAIAAP7/AAEBAQD//wAAAwECAAgEBAAQBwkABgYEAP3//QD4+PkA/gEAAPP19AD8/PwABP///wAAAAAAAgICAP7+/gD9/f0AAgICAAQDAwD+/v4AAQEBAP///wAAAAAA/f39AAAAAAD8/v0AAQICAAICAgD///8A////AAEAAQAEAgQA/v//AP7//gAAAAAA/f39AAMDAwD///8AAQEBAP///wD///8AAQEBAP///wD+/v4AAAAAAAICAgABAQEA/v7+AP39/QACAwQABQUEAP7+/gD+/f0AAQEBAAQEBAABAAAAAP//AP7+/QADAwMAAP//AAAAAQD/AAAAAwICAAD//wD9/v4AAAICAP8BAQADAgIAAAECAP39/AADAwMA/wAAAAIBAQADAwQA//38AAEBAQD//wAA////AAECAQACAgMA/v/+AP7//wACAP8A////AP///wAGBgYAAwMBAP39/QAAAAAAAQEBAAEBAQD9/f0AAAADAAMDAgD8/P0AAQECAAICAwAAAAAA/v7/AP7+/gADAwMA////AP///wABAQEAAgICAAAAAQD+/v4AAQECAAICAgAAAQEA/v7+AAMBAQD///8AAAAAAAEBAgABAQEA//8AAP//AAABAQMA/v7/AAEBAQAAAAAABAQEAPz8/AACAgIAAQEBAAEBAgAEBAQA/Pz8AAAAAAAAAQEA+/v7AAMDAwABAQIAAQEBAP7+/gADAgIA///+APz8/AACAgIA/P7/AAD9/QACAQEA///+AAQFAwACAgIA/f79AP77+gAGBgUAAQEBAAAAAAD///4A/v7/AAUFAwAAAQEA/v7/AP//AAABAQEA/v7/AP///wD///8AAAAAAP///wABAQEAAQAAAAECAgD9/f0AAQEBAAEB/wACAQIAAwICAP///wD+/v4A////AAAAAAAAAAAAAwMDAP39/QD8/P0AAwMCAAAA/QAAAAEA/v7+AAAAAAD+/v4AAgICAP7+/QABAQEAAQEAAAAAAAD9/PwAAAAAAAAA/wACAgIAAQABAP7+/gAAAgAA/f3+AAICAQD///8AAQEBAAAAAQACAgAAAAABAP7//gAAAAEAAQABAP39/QD+/v4A/f39AAICAgD//wEAAAABAPz8/QAAAAAA////AAEBAQAAAP8A/v7+AAEBAQAAAAAA/v7+AAMDAwABAQEA//8AAAMDBAD8/f0A+/z9AAEAAAD8/P0A/v7+AAICAgACAgIA+/v8AAICAQD+/v4AAAABAAEBAQAAAAAAAAAAAAEBAQD//wEA//8AAP//AAAAAAEA////AAAAAAD//wAA//8AAP///wD9/f0A/v7/AP7+/wD+//8A//8AAAABAwD9/v4A/v7+AAABAgD//wAA/Pz8AP/+/wD+/v8A/v7+AP7+/gAAAQEA/Pz8AAABAQAAAAEA/f/9AP3+/gACAgIAAAEBAAIBAgADAAAA/f8AAAIDAgD9/v8A/v//AAEBAgD+/wAA////AP7//wADAwIAAAICAAQBAgACAAAA/QAAAAEC/wAA/v8A//4AAP8AAAD+/v8A/wAAAP7//gD8/v4AAgIEAAD/AQACAgEA////AP///wAAAAAAAgICAAAAAAD9/f0A////AAICAgABAQEAAQEEAP//AAD+/v4AAQEBAP39/QABAQEAAAAAAAEBAQAAAf8AAgICAAAAAAABAQIAAP79AAICAgAAAAAA//7+AP8BAAABAwAA/fz8AAEAAAADAgIABQQEAAICAQD///8A/f3+AAQDAgAEAgIA///+AP/+AAD+AAAAAQEAAAIBAAD///8AAAD/AAQDAwABAQEAAQEBAP/9/gD9Af0AAgD/AP8BAQAAAAAAAAABAAEBAQAAAP8AAAEBAP///wD+/v8AAAAAAP///wACAgMAAAEAAAABAQAAAAAAAP//AP7+/gAAAAAAAgICAAEBAQD8/PwAAAAAAP39/QD+/v8AAwMDAP7+/gACAgIAAAAAAAMFBQD9/P4A/f79AAICAgD///8AAQEBAP8BAAABAwIA/fz8AAICAwD+//4AAAEBAPv7+wD///8ABAQEAAEBAQABAQEAAAAAAP///wAAAAAAAAAAAP//AAD9/f0AAgICAAEBAQACAgIA////AAAA/wACAgEAAAAAAAAAAAD+/v4A////AAICAgD8/PwABQYEAAAA/wD//v4AAAAAAPz8/QACAgAAAgICAAEBAQAAAAAAAP8AAAEBAQACAgIAAQEBAAICAgD9/f0AAQEBAP///wD+/v4A////AAICAgACAgMA////AP//AAABAQAA/f39AAMBAQABAAEA/v//AP79/QABAQEAAAAAAAD/AAD8/f0AAQEBAAMDAwD///8A////AP39/QACAgIA////AAAAAAD9/f0A/v4AAAEBAQAEBAQA/v7+AP39/QD6+voAAAEBAP/+/wAAAQEAAQEBAP39/QABAQEA/v7+AAAAAAACAgIA/v7/AP///wADAwMA/f39AAEBAQAAAAAAAQEAAAQEAwD///8AAQIDAAEB/wD+/v4AAAAAAAAAAAD+/v4A////AP//AQAAAgMA//3+APz8/AADAwMAAAD/AP///wD9/f4A//7+AP///wAAAAAAAQICAP7+/gABAgQAAQEDAAYGBQD///8A/v39AAQCAwAEBAQAAQABAP39/AADAwMABgUHAPz9/QADAwQABgMEAAcFBgD9/f0A+fr7APwAAQD+/wAABf7/AP/+/gACAwMA+fn6AAMCAgAFBAUA/f3+APn7+gD5+/kA/wD/AAD//wD+/v4A9/n3AAH/AAAA/wEA/P36AP3+/AD+//8ABAMDAPn+/AAJBQQAAgEBAAYGBQACBAMA+vr5AP///gD8//4ABQMFAAQEBwAGBQYA9/j4APf5+QD7/foA+/36AAEBAQAIBAYABwUFAAcFBQD8/v4A+Pr5APj7+QAAAAAAAQQGAAUFBQABAQEA+vj1AAAAAQAOCgwABQQEAPz+/QD///8A/vz9APn6+QD7/P0ACggJAP/9/AD9/foA+/n9AP4A/wADAwQAAQABAPr7+gD9//4ACAcJAAIAAgD2+vgA9Pn2AP3+/QD8/v4AAQACAAwIBwD7+/sA+Pz7AAgGBgD9//4A/f7+ABMPEQDh6uQAAQAAAAUDBAABAgEA/Pr8AP4AAAD/Af8A+vz6APv+/AAIBQcA+Pn4AAEDAgABAAIAAgIDAAH//wAHBAMABgUFAAH9/wANDA0A/Pv8APj6+QAMCAoACAUGAP4A/wD38vYAAgMEAPj8+gADAwIA8vf3AAQBBAANCQwA9/n4AP39/QD9/f0A+P//AAAAAAABAP8A+f7/AA0LDAD9/v4A+fr5AAoJCwD8APwA6ezrABIPEwAKCAoA/v/9AAECAgD4+fcA/Pz8AAgICAABAgIA+/v7APv9/AAMBwkADAYKAP37/gD+/gAAExETAP/+/wD29/cA/P38AAsICQDu8vEA+v79APz39gAHBQYACAUFAAcFBQAAAAAA/P/+AO7w7wDy+fcA/f7+AAUCAgD//f0ACgcKABQQEgAGBAQA6+/uAP8BAAD8/f0A/v/9APz9/QADAgMABgoFAPj5+QAABQIABgUFAAUEBAD2+fYA8PbyAPz//gACBAMA/gH/AAMAAgACAgIA//3/AAoFBwAHBAQACAMGAAIBAQAA/v0AAQEAAP3/AQD6/PsA/gEAAAAAAgAMBgoADgsMAPv7+wD19/UABAIDAAkICAAaFRYA+fv6AO7y8gD+/wAAAgIBAAAAAAAJBgcAAQcBAPj4+AD4/vkACQYHAAwNDwAAAAEA/Pv6AAH+/QAAAgIABgUEAAIBAAD9/PoA9Pv7APn9+wD09/YA+v78AAQDAwAOCAkABwIDAAYFBgD9/f0A+v38AAQCAwAFAwMAAf8BAP7/AQD//wIABAMCAAEBAQAHBgcA/v39APX6+QD8/v0AAAAAAP/7+QD9/f0AAwIEAAoHCAAIBAYABQUFAAwBAQD/AAAAAAAAAPv8+wD9/vwAAP8AAP///wAEAwMAAwICAPn7+gD5+/wA+fz7APz9/QAGAwQABAMDAPj19AABAQIA////AAIBAQABAgEAAQAAAAD/AAABAgEAAP8AAAAAAQD+/v4A//7+AAAAAAD/AQEAAAEBAPz9/AD39/YAAgEBAAICAgAAAAAAAwEBAP78/QD///8AAQAAAPz8/QAKCAcABwYHAP37+wD9/f0AAwQEAAQDAwD//QAABwcHAAAAAQD7+/oA+fr6AAEA/QDw9fUA/Pz+AAgFBQAGBQUA/gD9AAUDBgALDBAABP7+/gAAAAAA/v7+AAAAAAADAwMAAQEBAP39/QD///8AAgICAP7+/gABAQEABAQEAP///wD+/gAA/v7+AAEBAQAAAAAAAgICAAIBAgACAQIAAAD/AP4A/wAAAAAA////APv7+wABAQEAAgICAAEBAQABAQEA////AP///wACAgIA////AP7+/gACAgIAAgICAP7+/gD/AP8A////AP///wADAgIA////AP///wACAgMAAQH+AAEAAQAAAAAAAgICAAMDAwACAgIAAAD/AAICAgACAgAAAQAAAAD//wABAAEAAP/+AAQFBQABAQAAAAAAAP39/QABAAAABQMDAAAAAAABAQEAAAAAAAEAAQD9/f4AAQEAAP///gD/AgIAAQEBAAUFBAD8/PsA//8CAP///wACAgIABAQEAAAAAAD8/PwA/v7+AAICAgAAAAEAAAAAAP//AAD+/v4AAwMDAAICAgABAQEAAAAAAP7+/gAAAAAA//8AAP///wACAgMAAAAAAPv9/QD+/v4A/wAAAP3//wACAgMAAAD/AAAAAQD//wAA////AP///wACAgIAAAAAAP///wD+/vwA+/v9AAMDBAD///8A/f3+AAAAAAAAAP8AAQEBAP7+/gACAgIAAQAAAAAAAAD9/v8AAQEBAAEBAQAAAQEAAgEDAAAA/wAAAAAAAQEBAAAAAAABAQEAAQEDAP7+/wD9/fsAAgIBAAMAAQD9/f8ABAQDAP7+/gACAgIAAwMAAPz8/gACAv4AAgICAAAAAAD7/f4AAgEBAAAAAAAA/v8AAQICAP3+/gACAQIAAAAAAP78+gABAQEAAQEBAAAAAAD8+/sA/gT/AAMDAwADAgEA/f7+AAAA/wAAAAAA/f39AAAAAAACAgIAAQECAAAA/wD+/v8A/Pz+AAMDAQAEBAQA/v7+AP//AAACAgEA///+AAAAAAAEBAQA/v7/AAMDAgD//wAA/f3+AAEBAQABAQEA///+AP7+AQAAAAAA/v7+AAICAgD+/wAAAwMCAP39/wABAQEA/f7+AP7//gAAAAAAAgIBAP//AAAAAP8AAgICAP///wD9/f0AAwMDAP///wAAAAAAAAAAAAEBAgABAQEAAgIAAP//AAD+/v0A/f3+AAICAgAA//8A/f39AAMCAgACAgIA+/v7AP7+/gD8/PwAAgICAP7+AAD+/QAAAAEAAP/+AAD//gEA/wAAAP7+/wD//v8A/P78AAEBAQABAQEAAAABAP//AAD///4A/v7/AP7+/gAEBAQA/f3/AAAA/QD9/f0A/v8AAP///gD9/f0AAgICAAICAgACAv8A/v7+AP8AAAD+/v4A////AP3//gADAgMAAP8BAPz8/gD+AP8A/f3/AAEBAQAAAAEA////APv9+wD//wEAAQICAPz8/AD8/f8A/wECAAABAQAA/wAA/wABAP///gD9/v4AAAECAAAA/wD+/v0A/P3+AAEDBAD/AP4A/wABAP7//wD/AP8AAAEBAAD/AAADBAMAAP8AAP//AAACAgIA/v7+AAEBAQD/AAAA//7+AAAAAAAAAAAAAAAAAP///wAAAAAAAAD/AP//AAACAgIAAAAAAAICAgABAQEAAQEBAP///wADAQIAAAAAAP///wD+/v4AAQAAAP///wACAQEAAQAAAAIAAQD+/v0AAgIBAAD//wD/AP8A/v/+AAD+AQACAQAAAP8AAP///gD+/wIAAgEBAAEBAQAAAP8A/v7+AP8CAQABAQEABAQEAP/+/gD//v8A/gD/AAUFBAD//f4A/wIAAP8A/wABAAAA////AAAAAgADAwIAAP//AP///wAAAAAAAQEBAAAAAAD8/P0AAwMBAAAAAAAEBAQAAQAAAP7//wD///8A/f39AAEBAQABAQEA/v7+AAICAgABAf8AAQEBAAEBAQD+/v4A/v//AAH//wACAwQAAP7+AP///wABAQEA////AP38/QABAQEA////AP7+/gD///8AAQEBAAICAgAAAAAA/v7+AAEB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AwMA////AAICAgAAAAAAAQEBAP7+/gD+/v4AAAAAAAICAgADAgIA/v7+AP7+/gAGBwUAAP8AAP/9/gABAf8AAgABAAEAAQD///8AAAEBAAQEBAD//v4A/v7+AAIDAwAA/wAAAAAAAP39/QADAQEAAgICAP39/QAFBAYA//7+AAEBAQACAgIA/v7+AAICAgD///8A//8BAPz8/AD+//8ABQUEAAQFBQAA//8A/Pz8AAMCAQAEBAQAAQEAAAAAAAD///8A/v7+AAEBAQACAgIAAgICAP39/QD///8AAwMDAAICAgD///8AAAAAAPz8/AADAwMAAQEBAAAAAAD+/v4AAAD+RLhGfgAAIABJREFUAAAAAgABAQEA/v//AP3+/gD///8AAQEBAAQEBQD///8AAwMEAP39/QACAgIA+vr6AAQEBAACAgIA////AP///wD+/gIAAAAAAAICAgD8/PwAAQEBAAAAAAD//wAAAgICAP///wABAQEAAQAAAAEBAQD/AAAAAgECAAEB/wACAgIA////AAD+AAAEBQIA////AAAA/wD///8AAgICAAMDBAD8/PoA//8AAAIEAwD9/f0A/v7+AAICAgAFAQAAAAD/AAAAAAD8/P4ABAQCAAAAAAD///4AAwMCAAEBAAD9/v8AAv8AAAAAAQD8/v4AAgEBAAEBAgAAAP8AAAAAAAICAgD/AQEA/wAAAP7//wD8+/0AAAAAAAIBAAAAAP8AAAAAAP7//wAAAAAAAv//AP/+/gD+//8AAAAAAAH+/wD//wAAAAAAAP///wD9/f4A/v7+AAEBAQACAgEAAAAAAP7+/wAAAP8AAQEBAP///wD+/QAAAgMCAAAA/wAAAAAAAwMDAAEBAQD9/v4A/v7+AAAAAAD9/f0AAQEBAAD/AQD///8AAAECAAAAAAD9/f4A/gL8AP7+/gABAQEAAAAAAP7+/gADAwMA////AP///wD///4AAAAAAP///wD9/f0AAgIDAP38/QD+AAAAAgICAP//AAD//v8AAgIDAP7+/gD9/PwAAgMCAAEBAwD+AAAA/v39AP///wD+/v4AAQEBAP7+/gD+//8AAP8AAAICAQD+/v4AAQEBAP///wD8/P0AAgIDAP39/wD+//4A////AP3+/gAAAAAAAQEBAP7+/gACAgIA////AP39/QAAAAAAAAAAAP7+/gD+//8A////AAICBAAAAAEA/f78AP8AAQAAAAEAAQEAAAAAAAD//gAA/v8AAP7/AAD//wAA//3+AAAAAAABAgIA/v4AAP3+/wD+AAAA/v//AP7//wAA/gAA/wD+AP///wAAAAIA/wD/AP39/gD+/v4A/wECAAIDAwD//gAA+/z9AP4AAAACAAMAAgMBAAABAQD+//8AAAIBAP7//wAB/v0AAwIDAP7+/gACAgIA/v7+AP//AQAAAP8AAQEAAAICAgD9/v4AAQAAAAICAgABAQEAAQEBAP7+/gAAAQAA/Pz8AAEBAQADAgIAAP//AAECAgABAgIAAf7+AP8AAAD+//8AAf8AAAQDAwABAQAAAQEAAAMDAwAA//4AAgICAAEBAAD7/fwACAUEAAECAQD///4A////AP39/gAFBQUA////AP7+/gAEBAQAAAD+AP/+/wAEBAQA/f37AP7+/gAFBAMAAQEBAAAAAAD+/v4AAAAAAAD//wAFAgIA/f39AAICAgAAAAAA////AAEBAQD8/PwABAQEAP///wABAQEA////AP///wAAAAAAAwMDAP7+/gD//wAA/v79AP///wAAAgIAAAAAAP7+/gD+/vwAAgICAP///wABAQEA/v7+AAABAAD///8AAAAAAP7+/gD///8A////AAQEBAACAgIAAAAAAP///wADAwMAAQEBAAEBAQAAAAAA/v7+AAMDAwADAwIA/f39AAICAgACAgIA///+AAAAAAAAAAAAAgICAAAAAAD9/f0AAQEBAAAAAAAEBAQA/f39AAICAgABAQEA////AAEB/wACAgIA////AAAAAAADAwMA/v79AP///wD///8A/f39AAMDAwABAQEAAAAAAP///wAAAAAAAAAAAP///wAAAAAA/v38AAAAAQABAgIAAwICAP8B/gD9/f0AAQEBAAICAgABAQEA////AAAAAAAAAAAAAgICAP39/QAAAAAAAgICAP7+/gADAwMAAgICAP///wD///8AAAAAAAAA/wD///8A////AAMDAwABAQEA/v7+AP76/AD+/vsA/f39AAQEBAAFBQUA/v79AAEBAQAAAAAA/v7/AAICAgD8/PwAAgICAAAAAAD+/v4ABAQEAP7//wABAQEA///+AAAAAAACAgIAAwMDAP7+/gD//wAA/P38AP3+/gD///8AAgEBAAMCAgD/AAAAAQEBAP7+/gABAQEAAgMCAP7//wABAQIABQQFAP8AAwD8/v0A+vr5AAgICQD///4AAwMEAP78+wAHBQYA/v//AAQCAwAIBQYA//4AAAMAAQAB/wIA/f//APz+/gD8//8A/v7/AAIBAQAGAwQAAQICAPv9/AD9/f0AAwIDAAAAAgAEBAYA+Pr7AAAAAAABAQEAAAAAAAQCAgD8/vsA//3/AAUDBgADAQIA/f/+AAEBAQD9/f0A9Pr3AP///wABAQEAAQEDAAYFBgD8/fsA+Pn3APn7+QD+//8AAwECAAcEBgD6+vsA/wIAAAMEAwD9+f8AAQICAAQABAAHBAYA/v7+APj8/AD3+vgA/P/9AAEAAAAC/QAA/AD7AAoHCgD2+/cA/wIAAAD//wAA//8A/P7+AAICAgABAgIA+/v7AAABAAD/AAAA+Pr5AP7//gD6+voABgQGAAAAAAD4+/oAAgICAP79/AD+/v0AAAEDAPv9+wD5/PoA/wABAAQBAwAFAQMACwgKAP38/gD+//4A/wD/APz+/QAICAgAEg8SAOTq6AACAAEAAf8AAAMCAgDz+PYA/f7+AAUEAwD2/foA/v//AA4HCgAAAQAA+/3+APz//gACAAEA+f37AAMBAgD+//4A//7+AAkGBwAC/v0A+/v7AAEAAAAAAQEA+fn5AAMDAwAA/f8AAgEAAP4AAAAJBQcAEAsOAPf29gD7/QAAAwECAAoHCAADAAEABQECAAQHBwD1+PgAAAABAAgCCQAQEBAA9ff2AO3u7AAMCwwAAP4AAPr4+AAFCAYA8/XzAP39/QADAwMA/f7+AP3//wD5/PgA+Pn6ABEMDgD+/f0A/P39AAsJCgD/AP8A9vT1AAoKCgD+/v4AAAD/APf49gACAQAADAoMAAMCAwABAAAA+fv6APz7/AD9AP4A+Pz7AP7//wAIAwUAFBASAPz7/AAFAQMADAsLAP4A/gDz+PUA8/b1AAYEBQAJCQoA+Pj4APr6+QAEBAQACAgIAPz8/AD3+/kA8vjzAPn9+gAA/wIACAYGAP3+/QAB/wAABQACABALDAALBwgAAP8AAAAAAQD+AQAA+Pr3APn9/AD+Af8AAQAAAAUBAgAMBQ0ACwYIAAH9/wD09vMA/wAAAAD7/wAA/gAAAgMCAPX39gD7/PwAAAEAAP79/QABAwYAAwABAAQCAwADBQYABgUFAP7+/wACAAMABQcFAAoJCgD9/vwA+Pf1APf6+gDz9fYA+fz7AAMGBQADBAMABQUFAPz9/QAA//8AAgICAAsJCQD7+vsA+/z8AAYGBgACAgIA/vz7APj7+wD+//8AAwEBAAwHCQAFAgMA/f38APz8+gAEAgEAAgMCAAMBBQD9//4AAgIDAP8A/wD7/PwA+/34AP39/QAFBAUAAf4BAP7+/gD9/f0A////AP8AAAD8/v0AAf8AAAAAAAAABAMA//7+AAEAAAD//P8AAAEBAAD//wAEAgMACAQFAAYHCQACAQIAAwMEAAUBAgD6+/kAAQICAP8AAAD7/v0AAfsAAP8AAQAB/wEAAQEAAAUDBQABAgEA//7+AAECBAADAgMABAMEAAABAQAAAAEA/Pv7AP8BAAACBQMABAMCAAQFBQAB/v4AAQABAAAA/wD39/gAAAAAAAEBAQAGBwYAAQEBAPz8/AABAgIA/P37AP37+wD8/v0A/P39AAEBAAACAgIABAMDAPr8+wD6/PoABAAAAAADAwMAAAAAAAQEBAD///8A////AAAAAAAAAAAAAQEBAP7+/gAAAAAAAgICAAQEBAD7/v0AAAAAAAEBAQAAAAAAAQECAP/+/wD+/v0AAQEBAAABAAAB//8AAwEDAAIEAgD///8A/wAAAP7+/gAAAAAAAgICAP///wABAQEAAAAAAAAAAAADAwMAAQEBAP7+/gD9/f4AAgEBAAICAgD8/PwAAQABAAH//gD7/P8AAwECAAIAAQABAQEAAQEBAP3+/QABAP8AAwICAAAAAAABAAAAAwICAAIBAQAAAAAAAAAAAAEA/wD8/PsAAgECAAUEBAD+/v4ABAICAAMDAwD+/v0AAQEAAP//AAABAQEAAAAAAP/+/gAAAAAAAgIDAP///wAAAAAA/f39AAICAgAAAAAAAAAAAAAAAAADAwMAAQEBAPz8/AADAwMAAgICAAEBAQABAQEAAQEBAAEBAQACAgMA/f39AAAAAAAAAAEAAgIDAP///wD+//8AAQEBAAIBAQAAAQIAAQICAP39/gAAAAEAAAD/AAMDAwD+/v4ABQUFAAICAgD///8A/v7+AAAAAAABAQEA////APz8/AADAwMA/v7+AAEBAQD+/v4AAAABAAICAwD7+/sAAgIBAAICAgACAgIAAP8AAAICBAD///4A////AAUFAwACAgEA/v7+AP39/QACAgEA/wAAAP7+/gABAgIAAwMCAP3+/gACAwQAAwEAAAAAAAD9/f4AAQH/AAEBAQACAgIAAQEBAAEBAQAAAAAAAAD/AP7+/wABAQEA/f3+AAMDAgABAQEA/wAAAAD//wABAQAA/v7+AP///wAFBQUA////APv7+wACAgIAAwMDAAEBAQABAQAA/Pz8AP//AAADAwIA/v39AAECAgACAQEAAgICAAIBAQD7+/sAAQECAAEBAQABAQEABAQEAP7+/gD8/PwAAAABAAEBAAAAAP8A////AAAA/wADAwMA/fz9AAEBAQD///8AAwQDAPz9/AD//wAAAwMDAAAA/wD9/f0AAAAAAP///wADAwMAAQEBAP///wABAQEA/v7/AAAAAQABAQAAAAAAAP7+/gAAAAEAAQEBAPz8/QAAAQEAAQEBAAEBAgABAgEA/v7/AP3+/wAA/v8A/gH/AAEAAAABAQEAAgEDAP7//wACAgQA//7+AAMEAgD9/v0A/Pz8AAAAAAAAAAAA/v7+AAAAAAD/AAAAAwICAP7+/gAAAAAAAAAAAAEBAwD///0AAQECAP7//QAA/v4A//8AAP7/AAAAAAEAAgIBAPz8/wD9/f0AAAEBAP38/gD/AAAAAQEBAP3+/gAAAP8A/v/+AAD/AAD/AAAA/wABAAAAAAD9/f4A/v3/AAQEBAD/AgAA/Pz8AP7+/wD+//8AAQICAAAAAQD7/PwA/v8BAP8BAgD+//8AAQEBAAEBAwD+AAAA/f//AAAAAAD+AP8AAAABAAAAAAAAAAAAAQEAAAABAAAAAAEAAgIDAAECAQD+/v4A+/r7AAEBAgD/AAAAAAABAAMDAwD+/v0AAQEBAP///wACAgIAAQIDAAAA/wD///8AAQEBAP7+/gACAgMA//7+AAAAAAD+/v4AAgICAAD//wD9/f4AAgICAAIBAQD//v4AAAD/AP79/QAA/v0ABQMDAAIBAgACAQAAAgEBAP8AAAACAQIAAAD/AP/+/gABAQAA////AAEAAwABAv8A/Pz9AAADAAD///4AAQEAAAEBAQD///8A/f3+AAD//wD+/v0ABAMCAPz+/QD///8AAwIBAAICAgD/AAEAAQABAP///wAAAP8AAAAAAAAAAAD9/v8AAwMDAAAAAAADAwIAAQEAAP///wAAAAAA//7+AAAAAAAAAAAAAAAAAAAAAAD//wAA/v79AAEBAQACAgIA+/z8AAEBAQD///8AAAAAAAAAAQADAwMA/v7+AAEBAQABAQEAAAAAAAICAgD+//4A////APv7+wADAwMAAgICAAAAAAABAQEA/v7+AAMDAwD+/v4AAQEBAP39/QABAQEA////AP7+/gD///4AAQEBAAEBAQD9/f0AAAAAAAEBAQD///8A/f39AAEBAQD8/PwABQUFAAICAgABAQEAAAD/AP7+/gACAQEAAgEBAAMDBQAAAP8AAAAAAAAAAAD+/v4A/v7+AAIAAgACAwIA////AAEBAQD///8AAAAAAP///wD///8AAwMDAAEBAQD9/f4AAwMDAAD+/wACAQEAAP//AAABAQACAwMA/v3+AAICAgABAQAA+fn5AAAAAAAFBQUA////AAMDAwD+/v4A/v7+AAEBAQD///8AAAAAAAEBAQACAgIAAQEBAP///wD8/PoAAgIDAAAAAAD+/v4A/v//AAEBAQADAwQA/v79AP7+/gD9/f0AAQEBAP39/QD///8A/v7+AAAAAAAAAAAAAAAAAP7+/gADAwIA/f3+AAMDAgD9//8ABQICAP79/QAAAAAAAQEBAP3+/gD7+/0AAAEBAAEAAAABAAAAAAAAAAEAAAD+//8AAQEBAAEBAQACAgMAAP8AAP7+/gAEAwMAAwQEAP39AgD9/PoA///9APv8+QABAAMA9ff2AP7+/gAIBgcACQQHAAECAQAEBAQA/Pz9AAQEAwD9/gEA+vv9AP3+/AAAAAIABgQGAAD/AAAFAgQA/P/9AAAA/wABAQEABAMDAAUDBQAFBQcABAX6AAL++QAB/gEABAQEAAIBAwD9/v0AAgEBAP///gD9/gAA/gD/AAABAQD+//4A+/37AAMCAgAA/wAA///+AP7+/wAAAQIA+/z7AAABAAABAP8ABAMDAAMCAwD7+/UA+vr5APv9+wD///8AAQECAAMCAgAA/wAA/v7+AP3//wD8//0AAQIBAP/+/wACBAIACAMFAAQEAgD08vYA/f/+AAsICAABAgIABgUFAAQCAwD7+/sACwkLAP3//wD+//8A/wAAAAUFBgD6+/sAAQEDAP79/QAEAwQABAMDAPz8/AACAgIA/v39APn7/AD/Af8AAP7+AP8BAQAFBAQAA/8BAAADAwD29PMABgUFAP3+/QAGCAsA7O3tAO/y8AAIBAUABwUGAPX6+AD6+/oABQYFAPr9+gD+AP0ABQEDAAABAgD0+fYAAAEBAPz9/QD+/v4AAQIBAAEBAQD9/v4ABQIDAPz8/AABAwEA//8BAP7//gACAgIAAQIBAAcDBgD3/f0ACAMHAP7//wAEAgMA9fb0AAQEBQADAAEACwcJAAcFBgAFAwQA/P38APL29AD/AAEABgcHABEUFAD8/PwA8fLzAAcHCQABAAEABQYDAP7+/gD7+/sA+vr5AAIFBADz+PYA+/z7APwA/wACAgAAGxMWAAMBAwD5+fgACgsMAP/+/gD7+/sAAQEBAAMCAgAEAwMA8vT0AAkHCQAKCgkA9vn5APX4+AAGBAQAAgMCAPb7+QD4+/oA/f39AAUFBQAGAgUABgMGAAD/AQAA/f4A9vf3APL39AD1+PcABwkIAAUBBQD5+voAAgMDAAECAQD+//8A9vf2AP7+/QDz+/UA+v38AP7/AAAEAQAABQIDAAQCAwAKBggABgEDAAkGCAD4+fgA+fv5AP4AAAD+AAAAAP8AAAH//wAMBQgABgUFAAH/AAAHBQcA9vb3APL99wAAAQEACAYGAAUDBQD/AAAA+/z7APn7+gAIBAUACwQIAP3+/gAIBwgACggJAAUDBAD+//0A9vf2AP38/QAHBggAAgIEAPLy8wD19/MA9/r5AAECAQD5/vwAAwMBAAIAAAABAgIA/f7+AAEBAAAIBwgACQgJAPf39wABAAAACQsKAP39/QD5+vkA+Pn4AAECAgAMCAgACgYIAAL/AQD6+fkAAgEAAAD//wAEBAMA/wAAAP8AAAD5/PsA+Pv1AP8AAAD/AAAAAQEDAAMCAgD5+/oAAQEBAP7+/gACAgIAAP//AAMDAgADAQIAAP//AAQEBAD/AAAAAwMDAAQDAwAFBAUA/P39AP7/AAD9/f0AAv8BAAUEBQD9/v0A+/v7APsBAAD9//4A/Pz+AP35/QD+//8AAQEBAP7//gD//wAA/f39AP8AAAAFBAQA/v38APz+/gAEAwMAAP8BAAAA/gADAQIABAMFAAYEBAD/9fMA/v7+AAABAQAEAgQAAAD/AAUEBQADAgIABAIDAPn4+QD/9/cABwYGAAABAQD9/PsACQcGAAkKCgD9/f0A/f/+APz6+gACAAEABwQFABAMDQABAQEABP///wAAAAAAAQEBAP7+/gABAQEAAQEBAAAAAAABAQEA/v7+AP7+/gABAQEA/v7+AAEBAQAAAAAA////AP///wABAQIA///8AAEBAQAAAv8A/v8BAAEAAQD///8A/wIAAP7//wD+/v4AAgICAAICAgD///8A////AAEBAQD8/PwAAgICAAEBAQD+/v4AAgICAAAAAAABAgEA/v3+AAMDAwD//v8AAAH/AAIBAAAAAAEAAAAAAP8A/wADAgMAAQEBAPz9/AACAAAAAgIDAP7//wD+/v0AAQUFAAECAgAAAQEAAQAAAAIBAQADAgMA////AAAAAAD+/v4A/wEBAAAAAAABAQAA/P39AP/+/gAEBAQAAP//AAAAAAAAAAAAAwIBAAAAAAABAQIAAAD9AP7+/gADAwMAAQEBAAAAAAAAAAAAAAAAAAICAgD///8A/Pz8AAEBAQADAwMAAAAAAAQEBAD+/v0A/v7/AAEBAQD//wAA////AAEBAQACAgIA/v7+AAAAAAABAgIAAQECAAEB/wABAQEA/Pz8AAAAAAAEBAQA/f39AP///wD///8AAQEBAAEBAgD///8AAAAAAP7+/gD+/v4AAgICAP///wD9/f0AAwMDAAAAAQAFBQYA///+AAEBAAACAgIAAP7+AP39/QABAQAAAgICAAAA/wD+/v8AAQEBAAMEBAABAQAAAgABAAICAgD8/f0A////AAABAQD9/v4A/QD/AAQBAQAAAAAAAAD/AAEAAQABAQEA///8AAMDAwABAQEAAAAAAAAAAQD//wAABAQEAP7+/gD///8AAAAAAAEA/wADAgMAAAH/AP7+/gD8/PwAAAAAAP///wAAAAAA/Pz8AAICAgABAQEAAAABAAEBAQD8/P0AAQEAAP/+/gABAQEA/f39AAEDAwAAAAEA////AP7+/wACAgAAAAD+AAAAAQD///8AAgICAP///wAAAAAAAQECAAEB/wD///8AAAEAAP//AAD9/v0A/vz/AAEBAQACAgIAAQEBAP//AAABAQEA////AAICAgABAQEA/v7+AAAAAAAAAAAAAP8AAP39/QD/AAAAAQEBAAICAwD+/f8A/f38AAEDAgAAAAEA//8AAP/+/gAAAAAA+vv6AAMDAwAEAwMA/v7+AP///wD///8AAQEBAAEBAQD///8A/v7/APv8/AD+AP8A////AP//AAABAQAA/f3+AP///wACAAEA/v/+AP7+/gD///8AAAACAAEBAQAAAAAA+/z8AAABAQD8/PsAAgIDAP7+/wD///8AAAAAAAICAgD+/v4AAAABAP8AAAABAQEAAgICAP7+/wD+//8AAAABAP3+/gABAgMA/v7+AP7+/wAAAAEAAQEBAP7+/gD//wAAAQABAAAAAQAAAP8A/v//AP3+/wABAgIAAgABAP7/AQD9+/wA/P7/AAABAQABAgMAAP/+AP7//gD9/v4AAQIEAAIA/wD+AAIA/v8AAAAA/wD+/v4A/f7/AAEBAgABAQEABQUHAPz8/AAA//8AAQEAAP79/QD+/v4A/wL/AAEBAQD9/f0AAAEAAAICAwD///8AAP8BAAIBAQAA//8AAAAAAP///wD+/v4AAAAAAAMBAgADBQIAAQEBAP79/QD///4AAQEBAAABAQABAQAAAQEBAAAA/wAAAAAAAwMEAP79/gD9//wAAQICAP4AAAAB//8A/gABAP8CAQABAQEAAAAAAP7+/QACAgEAAwMCAAEA/wAEBAQA////AAEAAQAAAAEAAAAAAAMDAwAAAAAAAgMBAP39/gD+/v8AAwMBAAIBAQAEBAQA/f37AAICAgAAAAAA//8AAAEBAQD///8A////AAEBAQACAgIA/f7+AP///wACAgIAAAAAAAEBAgD///8AAAAAAP///wD///4A////AAECAgABAAAA/Pz8AAAAAgD///wA////AP///wACAgIAAgICAP///gD///8AAwMDAAEBAQACAgIA////AP///wD+/v4AAgICAP7+/gAAAAAAAAAAAAAAAAD+/v4AAgICAP39/wAEBAIAAAAAAP///wAAAAAAAQEBAAMDAwD///8A//8AAP///gABAQEA////AP7+/gACAgEAAAD/AAAAAAD+AAAAAP8AAAAA/QABAQAAAAAAAAICAgD///8ABAQFAP///wAAAP8AAgICAAEBAQD///8A////AAEBAQACAgIA////AAAAAAACAgIA/f39AAEAAAD///8AAAABAP3+/QABAQEAAAAAAP39/QABAQEABQUFAP39/QAAAAAAAQEBAP39/QD7+/sA////AAQEBAAAAAAAAAAAAAAAAAACAgIA/Pz8AAEBAQADAwMAAQEBAP39/QAAAAAAAQAAAAMCAQAAAQIAAgIB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AgACAgIA/Pz9AP39/QAAAAAAAAAAAP7+/gABAQEAAQEBAAICAgD9/f0A/v7/AP///gAAAAEA////AAICAgAAAAAA////AP7+/gACAgIAAAAAAAMDAwD///8AAAABAP///gABAQEA/v//AAEBAQABAQEA/v7+AAD+AAABAv8AAgICAAEBAQAAAAAA/P79AAUBAQACAQMA//7/AP7//QACAgIA/v7/APwA/gAGBQUAAAAAAP///wABAQEAAAEBAP3+AAABAP8AAwMCAP7+/gADAwMA+/v9AAICAQAAAAEA////AAABAgD9/v8A///+AAICAgD9/v8AAwICAAMDBAAAAP8A//8AAAEBAgD+/v0A////AAAAAAAAAAEAAwMEAP///wD///4A/v7+APv//gD+/v0ABAQDAAEBAQD/AAEAAQECAP39/QD+/v4AAwABAAICAQAAAQAAAAEAAPz8/gACAwIAAQABAAAA/wAAAAEA//8BAP//AAD///4AAAAAAAEBAQD//wAA//8AAAAAAAD9/f4AAgICAP4A/wD/AAAAAQEAAP4BAQD///8AAQAAAP7+/gAB/v8AAQMCAP8AAAAA//8AAwMDAP39/gAAAP8AAgICAAQEBAD9+vsA////APz8/AADAwMAAQEBAP7+/gD9/f0A/gD/AAIAAQD9/f0A//8AAAAAAAD//gAAAP8AAAAAAAABAQEA//7+AAACAgD+/f4A/v39AAD//wD+//8AAAEBAAAAAgD+/gAA/v/+AAAAAAAAAAAAAAAAAP7+/gD8/P4AAQEBAAEBAQD9/f0A/v7/APv7+wD+/v8A/wAAAP7/AQAB//4A////AAABAQABAAEA/gD/AP79/gD//gAAAgMCAP//AAD+AAAAAAABAPv9/QD/AQIAAAAAAPz9/QACAwMAAQD9AAAAAQAAAQEA////AAABAQAAAQEA////AAACAQD+/f0A/gABAAECAQAAAAAAAQAAAP///wAAAAAA/f79AAAAAAACAgIA/v7+AP///wABAQEA////AAAAAAAAAAAAAP8BAP/+AAABAAEAAQEBAAAAAAD+/v4A////AP///wACAgIAAAAAAAAAAAAAAAAAAQEAAAEBAAD///8AAgIDAAIBAQACAgIAAQEBAAIAAQABAf8A////AAECAQAA/wAAAQEAAAQDAgAB//8A///+AAEBAQAAAAAA/gAAAAIBAQAAAQIA////AP8BAAD9/f0AAQEBAAEDAQAAAQAA/wAAAAAAAAD8/PwA/v4AAAUDBAD9/f0AAgIEAPz//QAC/gIAAgIDAP39/QAEBQQAAAAAAP7+/gAAAAIAAQEBAAAAAQD9/f4AAAD/AAEBAQAAAAAAAgIDAP//AAAAAP8AAgICAP7+/gD7/f0A/v7+AP8AAAACAgIAAQEBAP7+/wABAQEAAAEBAP3+/QD//wAAAP8BAP/9/wAAAP8AAgICAAICAgABAQEA/v7+AAAAAAD9/f0ABAQEAP7+/gABAQEA////AAEBAQABAQEAAAAAAAICAgD//wEAAQEAAP39/QABAQEAAgICAP7+/gAAAAAA////AAMDAwAEBAIA/v7+AAEBAQACAQIAAQH/AP///wD/AAAAAAAAAP7+/gABAQAAAQEBAAEBAQACAgIA////AAAAAAAAAAAAAAAAAP39/QABAQEAAQEBAP///wAAAAAA////AP///wAAAAAAAgICAP7+/gAAAAAAAAD/AAICAgAA//8A////AAAAAAACAgIA/f39AAAAAAD+/v4AAgICAAAAAAAEBAQA/f39AAAAAAD+/v4A/v7+AAEBAQAB/wAAAgEBAP8AAAD///8A////AP//AAD///8A/v7+AAcGBQD8/f4AAAEDAP///wADAwIA/v7+AP///wADAwMAAAAAAAICAgD8/f8AAP39AAMCAQD+/gAAAAAAAAIDAgAB/P8AAAABAP3+/gD8/PwAAwMEAAICAgAA//8AAwQEAP7+/gD+/v4AAQEBAAMDAwD++voAAwMEAAQEBAD//wAA////AP3+/QAGBgQA///+APz8+wACAgAAAAEBAPz9/QD+BQAACAcHAPf6+gD8/v4AAAICAAoHCgD5+voA/P8BAPv+AQD9/f8AAQEBAAAAAAAAAAAAAAAAAAQCAwABAQEA+/v9AP3+/wD+AP8AAQMCAAABAQABAgMA/f3+AP7+/gABAQEAAQD/AAECAgAEAQIAAQICAPv7/AD5/vwA/v/+APn5+QD/AgEAAP8AAAgFBgAA//8AAwECAAEB/wD5/PgABAQEAAH8AAAFAgMAAgEBAPj3+AD+AP8AAAAAAAEBAgAB/v4ABAIEAAUDBAD+/v4ABwUGAPr7+wABAQEABgQHAAoHCAD8/P0A/v/+APb59gAAAQAA///+APn8+wAMBwgAAgICAPX39gADBAQA/P39APr7+wD+//0ADQsOAAD//wD9BgYA/P7+AP7+/gD/AAAA+/7+AAgHBwD+//8A/f7+APz9/QAAAP8ABAABAAUFBgACAQEA/P/+AP7+/gAGBQUACAcHAPr6+gD5+fgA9/z6AAoICAAEBAQA9vn4AP79/QAFCAYA9/f4AAMDBAAEAAEAAgMDAP/5+QAJBQcA/v8AAAMCAwD//v4ABAIEAAH//wANCQsADw0OAOzv7wD3+vkABQQFAAIEAwD7+PwA/v3+AP8A/wAEAQEAAP//AAcHBwABAQAABwMGAAUDBQD///8ACAcHAP39/gD9/v4A/v//AA0MDgAQDxAAAf8CAPf39wAKCQkA+/v7AP///wAAAQEA7/HwAPv7+wD7/v0A9vv3AAIDAgD//f4AEAoMABcPEgAFBAQA6e3uAA8MDQACAQIA+Pn4APr7+gADAwMAAAAAAP7+/gAEBAQA/wEAAPX39gADAgIAAQEBAP7+/QDu8fMABAQDAAQDBAD9/v0ABgQGABIPEgADAgIA/wH9AAABAQDx9fMA+P35AAYCBQAKBwgA/vz8AAEAAQD8/fsA+Pn6APn//AACAQAA/wD+AP4B/wAEAwMAAgIDAAgFBgANBwoA//8AAPX39gAA//4A/AD+AAEAAQAFAwMAAgIEAAQCAwACAgEAAgECAPv8+wD2+PcAAwICAPv+/QD/AP8ACwcJAAkKBgD7/v0A7fLvAAEBAAAUDg8ACAQGAAIBAgAHBAQA/wH/AAEAAwAEBAYA9/n5APz8/QADAwEAAAD/AP7//gD8/fwA/vz+AP3//QABAgEABwMGAAD+/wD4+fkA/f3+AAUEBAACAAEAAP7+AAIBAQAJBwcACAUGAP38/QD/BAEAAwICAP7+/QD8/f0A+/v7AAEAAgD6/f4A+vv6APn5+gAEBQMABAUGAAUDBAAD//8AB///AAEDAwAB/wAABAQEAAEAAAABAgIA/f7/AAMCAQAEAgIAAAAAAAAA/wAFBAQABAMDAPv8/QABAQEA+vr6AAD/AAD8/vwA+vz8AP3+/gD9//4A+fv7AP0A/gAAAAAAAAABAAQDAwD7AP4A/f78AP///gADAgEAAwECAAQDAwADAQIA//7+AAUFBQD///8A+/v8AAABAQD///8A/wD/AAD//wD9//8ABAUCAP/+AAAFAwMA/wD/AP8A/QAAAAIAAQIAAP///gD+/v8AAwEDAP8B/gD9//wA+vv/AAD/AAD8//wAAgICAPz//AD9+vwAAP7/APsD/AAGBAUA/v8AAP3+/wD5AvwAAAIBAP7+/gAJAAAABAAAAAAAAAAA////AAEBAQAEBAQA////AP7+/gD///8AAQEBAAMDAwABAQEAAQEBAAAAAAD///8AAgICAAICAgABAAAA/v3+AAIBAQD9//4AAgICAP7+/gD//wAAAQAAAAEBAQABAQEAAAAAAP39/QD///8AAAAAAAICAgAAAAAA/Pz8AAEBAQAAAAAAAwMDAAAAAAAAAAEAAAAAAP7+/gAA/v8AAgIBAAEAAQACAgEAAP8AAAECAQADAwMAAP7+AAEAAAD///8AAQECAAEBAQADAwIAAgECAP8A/wAFAwQA////AAD//wAAAQEA/v39AP8DAwADAgEA/Pv7AAUFBAAAAAAAAQEBAAIBAQAAAAAAAgIBAAD//wD+/v8AAQAAAAQEBAADAwMAAAABAAAAAAAAAAAA////AP///wABAQEAAAAAAAEBAQD+/v4AAQEBAAAAAAABAQEA/f3+AAAAAQD///0AAQEDAAICAgD///8A/f39AAICAgD//wEAAAICAAEAAQD+/v8A////AAEBAQACAgIA////AAEBAQD+/v4AAwMDAAEBAQABAQEA///+AAEBAgAAAAAAAAAAAP//AAABAQEAAgICAAQEBAD8/PwAAgICAAAAAAD9/f0AAQEBAP7+/wAA//wAAgEBAP///wD///8AAQEAAAEAAQABAAEAAQEBAAEBAQD9/f0AAgICAP3+/gD+/v0ABAMEAAICAwACAQEAAAIAAAEBAQD/AQEA//39AAICAwD9/v0AAwEDAAEBAAACAgIA//8AAAAAAQD9/f4AAAAAAP///wAAAAEAAAAAAAMDAwD///8AAgIDAP7+/QAAAAAAAAEBAAABAQD8/P0AAQAAAP///wD+/v4A/v7/AAICAgACAgEA/v7/AAEBAQD//wAA/v7/AAUFAgABAQEAAgICAAICAQD9/f0A/v7+AP7+/wABAQEA/v7+AP//AQABAgEA//7+AP8AAAAA/v4AAgICAAAAAAAAAAEAAAAAAAAAAAD///8A/f3+AAMDAwD//wAA/f3+AAMDAwACAgEA/f39AAEDAgAAAAAA/Pz9AAEBAQD8/PsABQUFAAAAAQD/AQAA////AP///wAAAAEAAQH/APz8/AAAAAAAAAABAP38/QD9/f4AAQEBAAAAAQD+/v8A/v79AP7+/gAEBAQA////AP39/gD//wAAAAAAAAICAgD9/f4A/f7/AAAA/wD+//wAAP//AAEDBAD+/v8AAAEBAP3+/gAAAAAA//7/AP///QAAAQEA/v4AAAD//wABAQEA/f7+AP79/gACAgIA/f7+AP///wADAwMA/v7/AAEBAgABAgAA////AP/+/gABAQAA////APv8/QD/AAAA/wAAAAAAAQD/AP8A+/v9AP8A/wABAQIA/P7+AP39/wD/Af4AAAIDAP7/AAD/AQAA/v8AAP8AAAD//f0AAAEBAAAA/wACAgIA+vv9AP79/wABAgIAAf8AAAEBAgADAwEA/gD+AP7//gACAgIAAAABAP///wAAAAAA/Pz8AAICAgAFBQUAAAAAAAAAAAD///8AAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAQEBAAEBAQAAAAAAAP8AAAAB/wD+/v4AAgEDAAAA/wABAQEAAAAAAAICAgD///8A/v7/AAICAwAAAAEA/v7/AAIBAAAAAP8AAAABAP39/QAB//8ABgUEAAD/AAD+//4AAAD/AAICBQABAQEA/v79AP4AAAABAAAAAQAAAP//AQACBgUA/f39APz8/AAGBQUAAAD+AP7//gACAgIAAAABAP//AAD+/v4AAwMCAAEBAQD8/P0ABAQDAAEBAQAAAAAAAAAAAP///wAAAAAAAgIBAAEBAgD+/v4A///+AP///wD///8AAAAAAP7//wD///8AAQEBAP7+/gD+/v8AAgICAAICAQD8/P4AAAAAAAMDBQD///8A/f3/AAMEAwAAAAAA/f39AAAAAAAEBAQAAgICAAAAAAACAgIA/f39AAEBAQADAwMAAQEBAAEAAQD/AAAAAAAAAAAAAAABAQEA//8AAAEBAAABAQEAAAAAAAAAAAD///8AAQEBAP///gD7+/0ABAQEAAAAAAAAAAAA//8AAP7+/gACAwMAAQEBAP7+/gADAwMAAgICAP39/QAEBAQAAAAAAP39/QADAQEAAAAAAP7+/gADAwMA////AAMDAwD9/f0A////AP///wAAAAAA////AP7+/gAA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AwMCAAEBAQD///8A/v7/AAMDAwABAQAA///+AAAAAAD///8A////AP///wAAAAAAAAAAAAMDAwD8/PwABAQCAAEBAAD//wIAAAAAAAAAAAAAAAAAAgICAP///wABAgMAAgMDAP7+/gD9/f0AAwMDAP39/QD9/f0AAQEBAAAAAAD///8A/f39AP7+/gABAQEAAQECAP///wABAQEA////AAMDAwD///8A/v7/AAAA/gACAgIA////AAAAAAABAQEA/Pz8AP///wACBAIAAAAAAAEBAQABAQEABAQDAP/+/gAA//4A////AP7+/gABAQEA//8AAP39/QACAgEAAAAAAAMCBAABAQEAAP/+AAEB/wD9/v8AAgACAAMDAwD///4AAAAAAAAAAAD9/v4AAQEBAAIBAQAAAAAAAgICAP///wABAgIA//79AP7+/gACAgIAAAAAAAAAAQAAAAAA/P3+AAICAQD/AAAAAgECAAABAQD/AAEAAgIBAP8AAAD7/f4ABgQCAP7+/gD///8AAAAAAP39/QAAAAAAAAAAAP7+AQACAgMA/f38AAICAwAAAAAA///9AAAAAAD+/f4A////AAAAAAD9/wAAAQH/AP///wACAo4GzNIAACAASURBVAIAAAAAAAAAAAD//wAAAAAAAP7/AAD+/wAAAAECAP4A/wD+/f4A/v7+AAIBAAD///8AAgICAP7+/gACAgMA/v7/AAAA/wD///8A/v7+AAMDAwAAAAAA+/v7AP///wAAAAAA/v7+AP4BAQABAgEA//7/AAAAAAD///8AAQEBAAIDAwD9/f0A/gEAAAAAAAAAAAAAAgECAP7+/wD9/PwAAAAAAAD/AQD//wAA//8AAAD8/QD+/v4AAAAAAP///wAAAAEAAAABAAAA/wD9/P4A/v//AAEBAQD//v4A/v7+AP///wAAAAAA////AAAAAAAAAAEA/f38AAAAAQAAAAAA/f39AP7+/wAAAP4A/wAAAP//AAD9//8AAgABAAACAAABAAAA/v/+AAIDAwD7/P8AAgIEAAEC/QD/AAEA/v//AAEBAQD/AAEAAQAAAP8BAgABAgEA//38AP7+/gD/AQEAAQEBAAEAAAAAAgIAAf7/AAABAAD9/f8A/v79AAECAgD+/QAAAgIAAAAAAAD///8ABQUFAAICAgD+/v4AAgICAAICAgAAAAAAAQEBAP7+AAAAAAAA////AP///wACAgIA////AP///wABAAAAAgABAP/+/wABAgEA/P39AAMCAgABAAAAAQEBAP79/QAAAAAAAwMCAP///wACAwIA/v3+AAMEBAADAwEAAgEAAAEA/wAA/v4AAQECAPz9/AAEBAMAAAAAAP39/QAFBAQAAgIEAAECAAAAAQAAAQD/AP7//gAA/v8AAgICAP38/AD+/v4ABAQCAAH/AAD///8A/f39AAEB/wAAAQAAAQECAPz8/AD+Af8AAwEEAP7+/gADAgIA/v7+AAMDAwAAAAAAAQEDAP///wD7+/wAAgICAAMDAwD///8A/gAAAP//AAAAAAAAAQEBAAEBAQD//wEA//8AAAEBAAABAQAAAAECAAEBAQD///8AAAAAAAEBAAD///4A////AAEBAQD9/f0AAgICAAAAAAD9/f0AAQEBAAEBAQD8/PwAAwMEAAAAAQAAAP8AAwMDAAAAAAD9/f0AAQEBAAICAQAAAAAA/v7/AAEBAAD///8AAQEBAP39/gACAgIA/f39AAMDAwAAAAAA/f3+AAMDAwACAQEAAgICAAEBAAADAwMA/v7+AAEBAQD8/PwABgYGAAAAAAAA/wAAAgICAP8B/wD8/PwAAwMDAPz8/AD///8A////AAICAgD+/v4A/Pz8AAMDAwACAgIAAP7/AAICAQAA//8A////AP7+/gABAQEA/v7+AAAAAAAFBQUA/f39AAEAAQABAgEAAQECAAIBAgD+AAIAAP/9AAEAAQADAwIA/gD/AAD/AgADAwEAAAD/AP///wD+/v8AAwMDAP///wABAQEAAQAAAAICAgD9/f4A////AP7+/gACAgIAAAAAAPz7/AD/AAEAAwMCAAIBAgD+Af4A////AAICAwAD/gAA+vr8AAUFAwADAwMAAAAAAPz8/QABAAAAAAABAAMDAwD///8A/v7+AP7+/wABAQEAAAAAAAAAAAAAAAEA//7+AAQEBAAAAAMA/f7+AAICAQD9/QAAAgIDAP39/QD7+/sAAwEDAAgFBwD+//8A/Pz+APf/+QACAgQABQMDAAD+BAAAAAAAAQEBAP//AAABAQEABAQEAPn8/AD5+vkA/f78AP7+/QAAAgIA/wH/APv9+wAE/AIAAgEAAAUDBAD9/PsABgQFAAABAAACAgMA+vr6APwB/wAAAgEAAP8BAP8B/QD9/v4ABAIEAP///wD//wAA+vz7APr9/AD9//8AAQEAAP8DAQACAAMAAwIFAPf7+AD7/PoA/f38AAECAgAFAgIAAgEAAPz+/gABAQEA/v7+AAYGCAD6/PoA+fr4AAcEBwAIBwYA8PbwAPz9/AAHBQYABwQGAAkFBwD9/f0A////AAQDBAD9/v8A9ff1APn9/AD+/P4A/P//APj6+wD6/fsABQQFAAQEAwD6/PkAAwMCAP7+/QD9/QAA//8AAP3+/gABAAEADAkLAAcEBgAIBQUAAQAAAAD//gAHBwgA+/v7AAECAQD7//0AAf8AAP39/QD4//4A+fv7AAUDBQDw9PIA+/79AA4GCgD+/wAA9/r6ABAJDAD0+fUA+/v6AAMCAwAIBgYA/f/+AAkGCAD7/PoA8fT0AAQDBAAB/v8A/v//AAIAAgD3+fkA/AD/AAgDBQAFAwQA9/z5AAH/AQAOCAkAEBARAPT09QAICAgA8/T0AP7//wAAAAAADw4RAPX09QDy9PEA+fn4AAgGCAD9/PwABwYHAO/w7wD19/YA/wEAAPn7+QAJBQYADAcIAAIBBAAKCgoA/gEAAO7u7QAHBQcABAMDAP38/AACAgIABgMEAPv8/AD4+PkABwYHAP39/gD6+/oABgYFAAwICgAAAQAA8/X0AAcEBQAFAQMA+v37AAUEAgARDhAADwsMAPv7+wACAwMA6u7sAPb4+AAKCQkACQUHAAwLDAD8/P0A8/byAPP49gD/Af8A//8AAPv+/AACAAAAFQsOAAcEBgABAAEA9fj2APb7+wAHBAYABgMEAAIAAQAEBQUAAwQEAP7+/gABAQEABQYFAPn5+gD9/f0AAgACAAYGBQAJCAgACgcIAAMDAwD5+fkA//8AAA0KDAATEBIAAP//APv7+gADBQQABAMEAP/+/gD19/gA/f79AP4A/wD5/PwACggIAAoKCgD3+fkA9vj3APv8+wD7/fsAAgECAP8AAAACAQAAAQEBAP///wD/AgEA//8AAAICAQAFBAUACgcIAP8BAAD6/PsA9/r7APz+/QD1+PcA+fz7AAMDAwADAAEA/f78AAUDBAAIBAcABwQEAAUEAwAHBgYA/Pz9APn6+wD/AQAAAAACAAD//wAEAwMAAQIBAP/+/wD/AP8A/gD+APn39QD9/f4A/P79AAEBAgAIBAUA+vz6AP7//wD4+vkAAAEAAPz8+wD7/f0AAAAAAAICAgAF/fwAAQEBAAQDAgAFBgYAAwMCAAAAAAABAAAA+fz7APv7/AAGBQYABQIBAAMCAwD/AgAA+v38APr7+wACAQQAAQEAAPv7/AD8/f0AAQICAPz++wD9/v4A/f39AAID/gAB/AEABgYGAAAAAQD/AP8A+vz9AP4A/wABAQEAAAEAAPz9/AD3+fwAAPoAAPz9/gD//v4A/f79AP3//wD///8AAgEBAAIBAQAEAwQAAgEBAP/+/wAC/gAABwYGAAQEAwD9/P0AAIuJdHYE////AAMDAwD9/f0AAQEBAP///wD9/f0AAgICAP7+/gABAQEAAQEBAAQEBAD9/f0AAQEBAP8BAQD//v4A////AAEBAQADAwMA////AAAAAAACAgIA/f3+AP7+/gABAQEAAQEBAAAAAAABAQEAAAAAAAAAAAD///8A////AAMDAwABAQEAAAAAAAEBAQAAAAAAAAAAAP/+/wACAgIAAQEBAP8AAAABAQEAAAAAAP///gAAAAAAAQEBAAMCAgAAAQEA////AAAAAQAAAAAA////AP39/QADAgIAAgIDAAICAgD///4A/v8BAAD//wAAAAAA//7/AAADAAD///8AAAAAAP7+/gD/AAAABAQEAAAA/wD+/f0AAf//AAAAAAD+/v4A////AAAAAAAAAAAA/vz8AP8A/wABAQAAAgIDAP7//gAEBAQAAQEBAAQEBAD///8A+/v7AAAAAAABAQEA////AAAAAAD///8AAQEAAAICAgD+/v4AAAAAAAAA/gD+/gAA/v7/AAAAAAD///8AAQEBAAEBAQAAAAAAAAAAAAMDAwABAQEA/v7+AAAAAAACAgIA/f39AP///wAEBAQAAQEBAP39/QD///8AAAABAP7+/gD9/f0AAAAAAAEBAQABAQEAAAAAAAD//wABAgIAAQEBAP///wD7+/wAAwMBAP79/gACAgEA/wD/AP///wADAwMAAwMDAP///wAAAAEAAgICAPz8/AD///8AAAH/AAAA/wABAgIA/f7+AAAAAQAAAAAAAAAAAAEBAgD+/v0AAgQEAAEBAQD+//8AAwMDAP7+/gD/AAEA/P3+AAL+/wD///8AAwMDAP7+/gACAgIAAAACAAICAgD+//8A//z+AAABAQD/AAAA////AP7+/gD7/PwAAgEBAAICAQAAAAEA//8AAP7+/QD9/f0ABQUFAP39/QAAAAAAAAAAAP7+/gD///8AAwMCAAICAgD9/fwA////AAEAAQD+/f8AAAEBAP7+AAACAgEA/v/+AAEBAQD+/v8A/P77AAICAgAAAAAA//7/AP7+/gADAwMA/fz+AAICAgAA/wEAAQACAAD//wD+/v8AAgICAP//AAD///8A/f39AAICAgD+/v4AAQEBAAAAAQD+/v4A////AAQDBAD8/f4AAAEBAAEBAQD+/f0AAQEBAP8AAQD//gAA/v7+AP///wABAQAA/v7+AAAAAgABAAAA/P38AP//AAABAQAAAAACAAMDBAD8/PwAAQEDAP7+/wAAAAAA/v4AAAABAQAA/wAA/f39AAICAwD//wAA+/v8AAMDAgAAAAEA/f39AP7+AAAAAAIA/v//AP3+/wACAgMA///9AP3+/wD///8AAAEBAAH/AQD+AP4AAP4AAP/+/wD+//8A/vv9APv9/gACAwMAAAACAP3+/QD8/f4A/wAAAAIEBAD/AQEA+/78AAD+AAD///8A/P3+AAEDAwD/AQAAAQABAP3+/wD+//4AAP4CAAAAAAACAgMAAAIBAAABAgD+/v4AAwMDAP39/QACAgIA/f39AAEBAQD+/v4AAgICAAICAgD9/f0A/Pz8AAICAgACAgQA/v7+AAEBAQAAAAAAAgICAAEAAAADAQIA/v7+APz8/AAEBAQAAAAAAAICAQACAgIAAP7+AAICAQABAQEA////AP39/gABAAAA/v7+AAMDAwD+/v4AAP//AAMCAAD///8AAAEBAP7+/gADAwMAAAD/AP//AAAAAf8AAP8AAAAAAAAAAgIAAwECAP3+/QD+/gAAAwMDAPz9/QADAwEA/wAAAAMDAgAA/v8A/f7+AAL9/gADAv8AAgICAAAA/gD9/f4A/f79AAABAQACAQAA/f/+AAEBAQD+/fwAAQEBAAEDAgD+//8A//39AAIDAgACAAEA//8AAP///wD8/PwAAQEDAAEBAAACAgIA////AAEBAQAAAQEA/f39AP///wABAQEA/f3+AAIBAQABAQEAAQABAAEBAgD//v8AAwMDAP8A/wADAgMA/f39AAIDAwD//v8A/wD9AAMDAwD///4AAAACAP7+/gADAwMA//8AAAAAAAD///8AAwMDAAEB/wACAgIAAgICAP7+/gABAQAA/v7+AP4CAgABAQEAAAAAAAAAAAD+/v4AAgIBAP//AAAAAAEA///+AP///wD9/f0AAAAAAAAAAAD+/v8A//8BAAMDAwD///8AAQEBAP7+/gAAAAAAAAAAAAEBAQACAgIAAAAAAAEBAQD+/v0A/f//AP3+/gD///8A////AP///wADAwMA/v7+AP7+/gD+/v4AAAAAAP38/gADAgMA+/37AP7+/gD+/f8AAgUDAAABAAABAAAA///8AAAA/wAAAAAA/f39AAEBAAABAQIAAQEBAP7+/gACAgIAAf7/AP7+/gD///8AAAAAAP///wD//wAAAP8AAAECAQABAQEA////AAEBAgABAQIA/v77AP///wD//wAA/v7+AAAAAgD+/vsAAP8AAP8BAAABAQEAAgICAPv7+wD8/f0A/wABAAAAAQAAAAEA//8AAAMDBAD//wAA//8BAAICAgD8/P0ABAQGAAEB/gD6/f0A/f37AAUEAQADAgIADAgKAPX4+gD4+/sAA/0AAAYFAgABAQIACAgJAP39/AD///8AAQECAP39/QADAwMA+/77AAIDAwABAP4AAf4CAP39/gD/Af8AAQABAP4A/wD9+/wABAQEAAT9BAD9AP8A/v7+AAEBAQD/Af8A/f79APr7+wAFAwMAAwIDAAH//QACAwIA/f/+AP//AAD8/f0A/v7+AP7//gD/AQAA/f7+AAAFAQAFBgUA9/n5APr+/QABAAEABwUFAP///wD//v8AAv7/AAkGCQD9//0A+fz4APn6+gAKBwgADAkMAO/08AD3/PgABgQEAAP/AAAEAAEABAMDAPv7+wADAgIA9/z6AAkFAgD7/v0A/v/9AAgHBQD4+vgA9fr2AAMDBAAFBQUA9/n4AP3+/wABAAAAAQICAAAAAAD3+fgA/v7+AAgEBgAHBggAAf//AAMEBAACAQEABwYHAAUEBAD1+PYABQUGAP8AAAAFAgMABgUGAPf6+AADAgIAAQMBAPb4+QD/AAAACgcIAOvx7gACAwIA+fr4APz+/gAAAQEA////AP39/QABAgIABgMFAPf5+QD8+/oABQQEAP8BAAAHAwQA+fv6APn9+gANCAoACgcIAPr7+wD1+voAEQkLABANDwDz8/MA/P3+AAICAgABAQEA/Pz8AAYGBgD3+PYA9vj3APn49gAKCgoAAf//AP39/AD4+f0A9fb1APoA/gD3+fkACQcHAAYDBQD//v8AAwUCAP37/ADy+PEACQcIAAQDAwD8/PwA/P39AAEAAAD7/PsA/P39AAICAwAHBwcA/v7+AAIBAgAIBwcABQQFAPj7+gAAAAEAAQEBAPz//gAEAQIAFhUXAAwJCwD+/f8A+wEBAOzt7AD7+/wAEQ0OAAYFBQABAAEA9PX0APT49QD3/PoA/QD9AP39/QD//v4ACAYIABcNEgAWDxEA9vr5APP29QAIBQcABQYFAAgFCAD9/PwA/wAAAPz//QD7+/sABQUGAAICAwD9/v4ACwkMAAkIBwAEAwMAAQD/AAEBAQAEBAQA/Pz8AAICAgADAgMABwYHAAAAAAAFBgUABQUEAPn5+QD8/fwAAAAAAAEEAgD9+fsAAv8AAAYGBgD/AgEA6e/sAPr8+wABAgIA////AP8AAAAEBQQAAgECAP///wD///8A/Pz9AAUEBAAGBAQACAcHAP39/QDy9/UA9fb2APwA/wD/AP8A/f7+AP3+/gABAgIAAgEBAAUDBQAMBQkACwcJAAcEBgAGBQUAAAIBAPr6+gD9/vwA/f7+APz9/AAEBAUABgQEAAYFBQAKCwoA+vr7APv8/ADz9/gA9vf3AAEBAQD+/v4AAQEBAP3+/AADAwMAAAAAAAMCAQAGBgYABwcFAP/+/gD+//8AAwIDAP///gABAgEAAP7/AAIDAgACAQEA/f7+AAIEBAAFAAAA+/z+APj6+gD8BAMA//77AP3//gD5/PsA/P79APr9/QD8/v0A/f7+AP0A/wD+AP8A//7/AAICAQD///8AAQECAP///gAD+QMAAQABAP7+/gD9//4ABAQEAAEAAQD///8AAP//AAIBAQACAgIA/f7+AP8BAAD/AQAA/wAAAP4A/wAAAQEAAgMCAPwA/gAA/gAA/f39AP8A/QD5/vsABAACAAH/AAAEAQEBAAAAAAAFBQUA/Pz8AP7+/gAAAAAA////AAAAAAD9/f0AAQEBAAMDAwAAAAAAAQEBAPz9/QABAQEA////AP39/QD///8AAgICAP7+/gD+/v8AAgIDAP7+/gAAAAAA////AAICAgD///8A/v7+AAEBAQABAQEAAgICAP7+/gD///8AAQEBAP///wACAgIA/v7+AAEAAQABAQEA////AP///wD+AQEAAf8AAAEA/gACAQEAAQIDAP/+/gABAQEAAgEBAAQDBAADAQAAAQAAAAAA/wAAAAAAAAAAAP38/AAAAgEABAQDAAEAAAABAQEAAgMCAP39/QADAwMA/v7+AP7+/QAEAwMAAwMDAAICAQAA/v4A//7/AP8B/wD/AQAABAQEAAEBAQAEAwMA//79AAICAwD+/v4AAQAAAAQCAwAB/wAA/v7+AAAAAAAEBAQAAQEBAP///wAAAAAAAAAAAAAAAAAAAAAA/v7+AP///wABAQEAAQEBAAABAQD+//4A//8AAAICAgACAgIA/Pz8AAICAgD///8A/v7+AP///wD///8A////AAYGBgD+/v0AAQEBAAICAgD9/f0AAQEBAAEBAQAAAP8A/v7+AAICAgD9/f0AAQEBAAEBAQACAgIA/v7+AAABAAABAQEA////AAICAgD///8AAAD/AAICAgACAgIA/v4AAP7//QD+/v4AAAAAAAMDAwABAAEA+/v7AAICAgACAgIA////AAAB/wD+//4AAP7+AAMBAgD8/P0AAgICAAMDAAABAQMA/Pz+AAAA/wAAAAEAAAABAP7+/QABAQEAAAABAP3+/wAGBQUAAQEBAP7+/wAAAAAA/f39AAEBAQD///8AAAAAAAEBAAAAAAEA//8AAAICAgABAgIA/v7+AP78/gADAwMA////AAEBAgADAwIAAAABAPz9/AD/AQAAA/8AAP8BAAD/AAEAAQABAAEBAQACAgQA/f37AAECAgD/AAAAAAEBAP7//wABAAAA/f7/AAAA/wAAAAAA/v78AAEBAQADAwMA/v7+AAUFBQD///8AAAABAAAAAQAAAAEA/v7+AP7+/wABAQEAAAABAAEAAAACAQQAAQEAAP38/QACAgQA/wD/AP38/QABAAMAAQEAAP//AQD//wAAAQAAAP///wD//wAAAgICAPz8+wD9/f0A////AAICAgD9/f4AAQECAP7+/gAAAAAAAgIEAP///wABAQEA/P79AP//AAD/AQEA/v3/AP//AAABAQEA/v//AAAAAAABAQEA/v7/AAAA/gAAAAAAAgICAP7+/wD+/v4AAAABAAAAAAD9/v4A/f4AAAAAAAD9/f4A/f4AAAAAAAABAQMAAQAAAP///QAAAQAAAP8AAPz+/QD//wAAAAEAAAIDAwD8/f4AAAAAAP///wAAAQAA////APr6+gAAAQIA/fz8AP8BAQACAwMA/wEBAP7+/gD/AAAA/v//AP//AAD8/v0AAwMBAP///wABAQAA/P39AAD//wAAAAAA/v7+AAEBAQD9/f0AAQEBAAECAQD/AAAA/f/+AAD+AAABAAEAAwMEAP7+AAADAwMAAQEBAP39/QABAQEAAQEBAAIBAQD+//4AAAAAAAEBAQD///8A/v4AAAD//gAA/wAAAwICAP7+/gAAAAAAAwEBAAEBBAD+/f0AAwICAPz9/QAD//8ABAQDAAAB/wD/AAAAAgEBAAICAQD+/v4AAgEAAPz8+wACAgEAAgIBAAQEBAABAgEA//3+AP///wAFBAQAAAAAAAEBAQD///8AAQEBAAECAgADAwIA/Pz+AAAAAAD+/v4AAAD/AAMDAgAAAAAABAMEAP8AAAD8/v4AAgICAP/+/gACAgIAAP8AAAD/AAD//wEAAAIBAAAAAgD///8A+/v7AAEBAQABAQMAAAAAAAAAAAD7+/sAAAAAAAAAAgACAwAAAgICAP39/QD9/f0AAgICAP8AAAACAQIAAAAAAP79/gACAgIA/v7/AAMDAwD//wAAAAABAP/+/wAAAgAAAgICAP39/QADAwMA/v7+AAEBAQD+/v4AAQEBAAEBAQABAQEA/v7+AAAAAAACAv8A/f39AAAAAAD///8AAgICAP///wAAAAAA/v7+AAAAAQABAQEAAAABAP7+/wD///8AAQEAAAEBAQAAAAAA////AP7+/gABAQEAAgICAAEAAQD/AP0A/Pz8AAEBAQAAAAAA////AP39/QABAQEAAAAAAPz8/AADAQEAAP//AP7+/gABAQEAAwMEAP7+/gD9/f8AAAAAAPz8/QADAwQA/P38APv9/QD6+/sAAgECAAECAQABAwIA/v/+AAD+AQACBAEAAwMCAPz7/AAA/wAAAgABAP4AAAD8/PwAAwMDAAAAAAABAAAAAQEBAAQEBAD7+/sAAgICAP///wD///0ABAQDAP8AAQACAgEA/v7/AP7+/gAAAAAAAwMDAP//AAD+/v8AAP8AAAECAQD8/P0A/v3/AAQFAgAAAAAA/v3+AP3+AAAAAQMAAQD/AAEBAgD///8AAgIDAPz8/QADAwMAAgIEAP3+/gAEAwUAAAEDAAAAAgABAfkAAgICAAICAgD/AQEA//8BAPv8/gD8/P0AAwcFAPz8/QAEAwQA/f39AP7+/wAFBQUA/v7+AAAAAAD9/v4A/wAAAP7//wD7/PwA/v7+AAcHBwD+/P0AAAD/AAQEBAD4+PgAAv8CAAAAAAD//v4AAQMEAP7+/gD/AAAA+v38AP4B/wAGBAUA/P39AAP+AwAFAwUAAP//APr7/AD9//4AAwMDAAH/AgD6/fsAAwMCAAECAQAGBQUA9/j4AP/+/gAHBgUAAQQCAPLz8gAKBwgADQkNAAUDBQD3+PcA9fj0AAICBQD9/f4A+Pr4APP49QD+/v8ACwkLAP77+wADAwMA+vv7AAQDAwAAAQEA+vz8AAgCBAD3+vkA/QD/AAoGBwDx8/IAAAICAP///wD9/f0A+vv7AP3//gD+//8AAwICAAEAAQD9AP4ABQUFAAYCBgAFBAUAAP8AAAcGBwDx9PMA+v39APn7+gADBAMA+vv6AP///wADAQQABAMDAP7+/gADAwMA+/r5AP39/QAMCgwA/P39AAADAQAHAQEA9v36APv9/QAAAAAAAAAAAPj8+wAHBQUA+vz7APj8+gAJCgkA/Pz7AAwJDAD5+fkA+/37AAsGBwAOCQkA+/z9APD38wAKBAkAEAsNAPz+/gD5+vsA+vr6AAICAgAJCQkABgYGAAMDAwD6+voA+fr5AA8OEAAMCwwA7O/sAPX39wAEBAQA/P/+APn8+wAHBAUAEQsOAP37+wAKCQkAAAEDAP/9/gAIBwcAAgICAP3+/gD5+/sAAQIBESTHBAAAIABJREFUAP8AAAD5+/oACQgJAAsJCgD6+voAAQEBAAwLDAD9/f0ACAkIAPP39gD7/fwA/v//AAH9/wAZFxgADAoLAPn6+gD9AP8A7e/vAPv8/AAODAwAAwICAAD//wD1+PcA+fz6APr/+wD/AAAAAgADAAECAwAKBQYAFhASAAcFBgDz+PgA//7/AAMCBAAFBwUA/v39APr4+QAGBgYA+Pz6APn6+gD///8A/v7/AAQEAAD+/v4A/wT+AAYEBQAAAQEA9/b2AAEB/wACAgIA+/v7AAAAAAD6+voA+/z7AAcHBwD4+fcA+/r6AAkJCQAFBQUA/Pv8AP/+/gAHBQYA/f78APTy8AD4/fsAAAAAAAQCAwAA/f4ABAMCAAMGBwD//wAA/P38AP///wABAQEADQsLAAYEBAD4+foA8/f2APv9/AAC/wEA/P/+AP4A/wD//v8ABQMDAAgFBgAGAwQAAP7/AAQGBQAD/wAA+/z8AP4AAAD0+fcAAQAAAAH/AAACAwMABwgIAAb//gD+/gAAAAICAPX4+QD09/gA+/77APz8/AD9//wAAAEAAAECAgADAQEABQMDAAQDBAD///8ABgUFAP8AAAABAP8A/Pz8AAAAAAAEBAQA////AAABAQABAAIA/wH/APv7+wD+AAAA/P39APz49wD9/v8A+//9AP39/QAC/AIA///+AP3//wD7/fwA/v//AAEDAgD7//4A/wEAAP8AAAD//wAAAAMBAPz//wAAAgAA///9AP8AAAD8/vwAAgIDAAEDAAD9/P8A/fz7AAEBAQAAAAAAAQEBAAQCAwD//v4AAgEBAPz+/gD///8AAwICAAIBAQAAAAEABQMEAPz7+wAAAQEABAMDAP7+/wD+//8A+v/8AAQDAwAEAAAAAP///wD9/f0AAAAAAAAAAAD///8A/v7+AAICAgD///8A/wAAAP4BAAABBAMA////AAH//gD///8A/v7+AP7+/gAEBAQAAQEBAAMDAwD9/f4A////AAQEBAD+/v4A////AP///wACAgIAAAAAAAAAAAD///8A/Pz8AAMDAwD///8A////AAAAAAD9/f0A/f39AAYEBQABAQEAAgICAP/9/gAA//8AAgIBAAEAAgAEAgIA//7+AP8CAgADAgIAAgICAAABAQD///8AAP//AAMDAQAAAAAA//7+AP7//wADAQMAAAAAAAAAAAACAgIA//7+AAEBAQAAAAAAAAAAAAQDAwD/AAAA/v/+AP/9AAAEAgMAAAH+AAEBAQAA/wAA/v7+AAMCAwAA/wAAAAAAAAAAAAACAgIAAAAAAAEBAQACAgIA/gD/AAEBAQD9/f0AAQEBAAEBAQD9/f0AAQEBAAAAAAD//wAAAQEBAAICAgD///8AAAAAAP8AAAABAQEAAwICAP39/QD///8AAAAAAAIBAQD8/P0A/wD/AAAAAAADAgIAAAAAAP/+/gACAQAAAQIBAP7//wADAQIA/v7+AAEBAQAAAAEA/f39AAAA/gACAgIAAAAAAP7+/gABAQEAAwEAAP/+/gD9AAAAAgICAPr6+gAEAwIA////AAMDAwAAAAAAAQECAAIAAQACAgAA/v7+APv7+wACAAEAAwMCAP///wD///8AAQEBAAD/AQD//gEA/wIAAP0B/gD+AQAAAf//AP7+/gD+/v4AAAAAAAQEBAABAQEA/v7/AP7+AAD+/v0ABAQCAAICAgD9/v4AAAAAAP7//wD//gEAAQECAP38/AACAgEAAwMDAP39/QABAQAAAAAAAAAAAgD+/v8A////AAIAAgD//wAA////AP4AAAD//v8AAQH9AAABAQD//v8A/P79AP8A/wADAwMA/wD/AP79/gABAQEA+/7/AAUDAQACAAEAAwEBAAABAAABAQEAAgICAP7+/gAAAAAAAgIEAAAAAAD//wEAAAACAP7+AAD//wAAAAAAAP39/QD9/f0A/Pz9AP///wABAQAAAgIDAAACAAAA//8AAf8BAP7+/wABAf8A/f39AP///wD+/v4AAQEBAAICAgABAQMA/Pz8AP///wAEBAIA//8AAAEBAwAAAP8AAQEAAAAAAQD///0A/v79AAICAgD+//8A/v/+AP39/gACAQIA/v//AAD/AAD8/P0A////AAAAAAD//wAAAQEBAP//AAD///8AAQEBAP39/QD//wAAAAACAP///gAAAAAAAQICAPv8/wD9/f4AAQECAPz9/QD//wAA/v7/AAAAAgD/AP8A/v7+AAICAgD+//4A+vz8AP4AAAAAAQEA/v4AAAABAQD/AAEAAQIBAAEAAgAA+/0AAgIDAP7//gD9/wAAAAABAAMCAgD9/v8A/wAAAAICAgD//v8AAAABAP0C/wACAAIAAQACAAEC/wD9//4AAQADAAABAAAAAAAAAAEAAPz7/AAEBAQAAAAAAP79/gADAwMAAAAAAPz9/AAAAAEAAgIDAAQEAgAAAAAAAQEBAAICAgAAAAAAAAAAAP39/gACAwMAAgICAAAAAAAFBAQAAAAAAAIB/wABAAEAAAEBAAIBAwAB//4AAwMEAP7/AAACAwIAAAIAAAD//wAAAQEAAwMDAAL//gABAAAA////AP39AAABAf8AAQICAAEAAQACAgIA///9AAAAAAAAAAIAAgMBAAEA/wD+/v4AAwMBAAQDAwAAAAEAAAD/AAAAAAABAQEABQUFAP/+/wD+//8AAwICAAAAAAABAQEAAQEBAAEBAQD/AQAA//4AAAAAAQD//gAAAAD/AAEBAQD+/v0A//3/AP8D/wD//wEA/f3/AAICAAAAAP4AAAAAAAAAAAD9/f8A/v//AAQEAgD8/PwAAQEBAAAAAAADAwMAAAAAAP///wD+/v4AAAAAAAEBAQACAgIAAAAAAP8BAAD+/f0AAP8AAP///wAFAwQA/f38AAICAgD///8A////AP///wAFBQUA/v7+AAEBAQABAQEAAQEBAP7+/AD+/gAAAgICAAAAAAABAQIA/vz+AAD//wAEBAQA/v7/AP//AAADAwEA//8AAP39/AACAgIAAAABAAAAAAD9/f0AAQEBAAEBAQAAAAAA////APz8/gD///8A//8BAAECAgD///8AAAEBAAIBBAD///4AAAEAAP7+/gACAQEAAf8BAAEBAwD+/v4AAAD/AP//AAABAQEA/f3+AAICAgD8/PwAAAABAAMBBAD5/fgA/gH+AAMAAwACAQEA//7/AAEDAQD9/fwA/v7+AP///wABAQEA/f/+AP///wAAAP4A//8BAAEBAQD+/v4ABAIAAP38/wAAAAEAAAAAAAAAAAACAgQAAAABAP7+/gABAAEAAgEAAAAAAAD7/P0ABAIDAAEEAQD5+vsAAwICAPr8/AD3+PgACAcJAP/+AQD9/P8A////AAAAAAACAgIA+/v7AAAA/wD7+/0A/f4AAAQDAQD/AP8AAgIBAPf5+wAAAAEABwcIAAEA/wADAQUAAwMBAP///wD8/v0AAAIEAAMEBAAA+/sAAgICAAIAAQD/AP8ACggIAP38/QD8/fwAAQEBAAIDAgD7/PwA////AP8B/wD9AAAAAAEBAPz8/AAAAP8A/v39APv6+wABAv8A+/v5AP8AAAAFAgMAAwEEAP3/+QD8/f0A+/79APr7+wD7AwYAAQACAAQBAwD9/v8ABQACAAMCAgD7//4ACAEDAAMAAQD+/v4ACAUGAP/9/gABAQQA/wH/AAcFBgAIBggA6/HsAAYEBQAPCQ4AAgICAPf79gD8/f0AAwMFAAMBAwAGBAQA9/r3APj8+gADAgIAAf3+AAEDAgADAQEA///+AAMAAwDv9/MABgMDAPz+/gD6/fwADgkMAAMCBQD8/v4AAP/+AAMCBAD8//4A/wD/APz8/AAJCAkA/Pz8AP4BAAACAgIA/gD+AP4A/gD9/f0ADgkLAPv7/AD2+fkAAgICAPz9/AD+/wAA/P79AP7+/wACBQIA/v7/AAD/AAD/AP8A/gL/AAcFCAATCxAA6/LvAAAAAAD6/v0AAgECAAUEAQABAAAA/v79APv7+wAJBgUA8vnzAAIAAgAE/wMABQQGAPn6+AD+AP4ABwUGABMNEAD9/vsA9fn3AAwHCwASDBAAAgMFAPX09QD7/v0A+fz7AAUFBQD09/YA/vz8ABEQEQDy9fQABgQGAAkICADr7uwA6/HuAA8ICQD0+PQAAQICAAUDAwAMCgwA/v3/ABEREgD7+fkA/P39AA0MDQADAwMA9fX1AAMDAwADAwIA/wIBAPf19gAKCQoACQgJAPT19AANCwwABQUFAP///wAICQkA7vHwAPL08gABAQEABwYGABQREgANDQ0A+fj4APb3+ADt8fEA+/z7AAwKCwALCAoAAAEAAPb39gD4/fkA+//8AAEAAAALBwoAAf8BAAABAQAD/wEA//4AAPX5+AD8/fwA/Pz8AAYEBQD9//8A/f39AAsICAAA//8AAgICAAMDAgD8/PsA//8AAP7+AAAHBAUADgwMAP38/AD29/cABAQDAAUHBgD9+/wA/v7+AP///wADAwMAAwMDAPj39wD+/v8ABgYHAAQFBwD8+/sAAQMEAP/8+wD19/UA9vn2APz+/gAGAwYAAgIDAAQBAQAAAAAA+vz5APj6+gADAQIABQQEAAMEAwD///8A9vf3APL9/AABAgIAAQEBAAUDBAAGBgUA/f4FAP7+/gABAQEAAgEBAP///wACAAEA+v78APr5/QADAQIAAQEBAAP7+gADAgMACAYHAAcGBwD6+voA9vn5APb6+AACAQIAAgICAPv8+wD+/v4AAgEBAAECAQD9//4AAQABAAEAAAABAQEA+v3+AP0A/QD+/v4A+Pz8AP3+/gACAQEAAwECAAQFBQD39vcA+vz7APz//gD7/PwAAQIBAP8AAAD7/PwAAAEAAP0A/wABAgIA//7+AAICAgAEAwMA/v7/AAIBAQAAAAAAAP//AAD+/wD/AQAA////AAQCAwD/AP8A/f3+AP8A/wD9//8A/v7+AAAAAAABAAEA/v38AP7+/gABAQEAAgECAP7//gD///8AAQEBAP3//gD//v8AAQAAAAIBAQABAAEAAAABAAD//wABAAAA+Pn5AAEB/wAB/wIAAQEBAAICBAD///0A/wD/AP39/gAE/v7+AAEBAQABAQEAAAAAAAAAAAAEBAQAAQEBAP7+/gABAQEAAAEAAAD/AAD//v4AAAEAAAICAgD+/v4AAAAAAAEBAQABAQEAAQEBAP7+/gAAAAAAAgICAAEBAQAFBQUA/f39AP///wD+/v4A////AP39/QACAgIAAQEBAP///wD8/PwAAgICAAEBAQD+/v4AAQEBAAAAAAAAAAAA/v7+AAEAAAD8/PsAAAMCAAYFBQAAAQEA///+AP7+/gD/AgIA/fz8AP4A/QAFAgEAAf8AAP0AAQADAwMAAQEBAAMDAgACAgIA//7/AAECAQAAAAAA///+AP8AAQD//wEAAwMBAAAAAAACAAAA/v39AAUEBQD//v4AAwMDAAAAAAABAgEA/v3+AAH/AAD9AP8AAwMCAP39/QACAgIAAAAAAAAAAAD///8A//7+AP8AAAD///8ABAUEAP7//wABAQEAAAAAAP39/QADAwQA/v7+AAAAAAAEBAQA////AAQCAgD+/v4AAQH/AP8A/wAB/wAA/v7/AAEBAAACAQEA/v7+AP8AAAD+/f4ABQUFAP///wD+/f4AAAAAAP/9/gABAgIA/vz9AP8CAQADAwMAAgIBAP///wABAQEA/v7+AAICAgD///8AAAEAAAIBAgABAQEAAQEBAAICAgD+/v4AAQAAAP7+/gAEBAQAAQEBAPz8/AD6+vsAAwMDAAAAAAABAQEA/f3+AP7+/gADAwMAAQEBAAEBAQACAgIA/f38AAH/AAD///8AAQIDAAQCAgD+/v4AAQEBAAEBAQAAAAAA////AAMDAwABAQEA////AP39/QACAgIAAgICAAEBAQAAAAAAAAAAAAECAgACAgEAAAAAAAAAAAD///8AAwMDAP7+/gD+/v0AAwMCAP8AAQD9/wAAAAAAAAAAAAD9/f0AAgICAAEBAQABAQEA/Pz9AAIDAgAAAAAA/f39AAEBAQAAAAAAAgICAAAAAAABAwIA/f/+AAAA/wD++/4AAQEBAAEBAQD+/v4AAAAAAAQEBAD9/f0A////AP39/QD///8AAAAAAP///wABAQEA//8AAAEBAgD+/v4A/wD+AAEAAgAA/wAAAAD/AP//AAD+/v8A/v7/AAEBAQACAgMA///+AP39/gD+AAAA/wEAAP3+/gAA/QAAAAD+AP7+/wADAwMA/v7+APv7+wD///8AAQEBAP7+/gD8/v0A/v7+AAICAwD+/v8A//8AAP39/AABAQEA////APz8/QACAgIA/v7+AAEBAQD9/f4A//8AAP39/wAAAAAAAgIBAAICAwD8/P0A+fn7AAMDBAAAAAIA+/z9AP7+/gABAQIA//8AAAAB/wD+/v8AAQEBAP4A/wD7/f4AAAECAP7+/QADAQMA/wH/AP7//wD///4A/P7/AP7//wAAAgIA/v//AP8BAQD+/v4A/wD/AP7//wD+/gAA/v/+AP///wD+/v8A/P//AAIDAgACAgIAAP8AAP7//gACAgIAAAEBAPv7/AADAwMA/wD/AAICAgAAAAAAAAAAAAEBAQD9/f0AAwMDAAMDAwD9/f0AAAAAAAAAAAD+/v4AAAAAAAEBAQD///8AAgICAAACAAAA/wAA/f39AAEBAQD+//8AAgEBAAEBAgABAAAA////AAABAQACAwMA/wD/AAIBAgACAgEAAP8BAAABAAD/AAAA/Pz7AAUCAgAAAQEA////AP///gACAQEAAQQBAAICAgD//wAA/fz+AAIC/gD+/v4ABAIBAP/+/gAFBAMA/v7+AAICAgADAwIAAP/+AP7+/gAAAgMA/v0AAP7//QAFAwQAAAAAAP7+/wACAgAA/v7+AAAAAAABAQEA/v7+AAAAAAADAwMAAwMDAPz8/AD///8AAAAAAP//AAD9/f0AAQEBAP//AAAAAP8A////AAEBAQABAgIAAwAAAP7+/gABAQEA////AP///wACAgIA/v7+AAMDAwAAAAAAAQEBAAICAgD8/PwAAgMCAAD+AQD+/v8ABQMDAAAAAAD+/v8AAQADAP//AAABAgMA/wAAAAICAgD9/f0AAAAAAP39/QAAAAAAAgICAAAAAAACAv8A/Pz8AAMDAwAAAAAAAAEBAP7//wD9/f4AAgIBAP///wD9/f4AAQEAAAEBAQABAQEA////AAICAgD///8AAgIBAAAAAAAAAAAAAAAAAP///wD9/f0AAQEBAP///wAAAAAA/v7+AP7+/gABAQEAAAAAAAEAAgD+/v8AAAAAAP7+/gACAgIAAQEBAP39/QD///8AAQEBAP39/QD///8A/f3/AP79/gADAwQA///9AAAAAAACAgMA/v7+AP7+/QABAQAAAQEAAP///wD9/f0A/v7+AAEBAgADAwUAAgICAPv7+wAAAAEAAAD/AP8AAAABAQIA/f39AAEBAQABAQAAAgIBAAICAgD///8A//8AAAAAAAAAAAEA+vr7AAEDAwD///8A/v7/AAQEBAAEBAUA//8AAP7//gD+/v4AAgICAAICAgD/AAAAAQEBAAQEBAD6+v0A/v7+AP8DAwAEAgMA+/z8APr6+gACAQIABQT+AP7+AAADAwQAA///AP//AAD7+/wA/wEAAP7+/gADAwMA/fv8AAUICAABAQEA////AAoKCgD4+fkA+fv6APv8/AD8/PwAAAAAAPz9/QD+//4AAwECAAECAQAB/f8ABQUFAPv9+gAAAAAA/f7+AAQEBAAEBAQA/v3+AP3+/gD/AP8A/wD/AAQEBAD+/f0ABAMCAAEBAQD8/fwAAAACAP4A/wD//v0ABAcIAAH/AAAHBgcA/v79AAADAAABAP8ABgMFAAEEBQAA//8ACAQFAAIECQAIBgcA+fv5APv+/gD4+/oA//8AAAcHBgAHBQgA7vXwAP3+/QADBAQA+vz7AAIBAQABBwMAAf0AAPv//gD9/f0ACAUHAAAAAQAGBQUACQcGAPv8+wD+//4AAP8AAAoIBgD6+/kA/v7+APz+/AD+AP8A/P79APz+/AADAQIA/Pz8AAcHBgACAQIABgkIAOvu7ADv9fIADgoLAAABAQD8/fwAAAAAAAUDBAADAQIABgUFAAMEAwD8/foAAgECAAsICQD5+/kA//79AAMCAgD7/vwAAAAAAAEAAAABAQEAAAEAAAQEBQD7/P0A/gABAAYEBAABAQIAAQICAPb3+AADAgEADAcLAP///wD3+/sABgMGAA8NDgALCQwABgUFAPj6+QDy8/MAAgECAAQEAwD6+voADAsMAPHz8AADAgEABQQEAPP39QDu9PAABAMCAP0B/wD6AP4ACgIFABENEAADAQMADw0OAPz8+wD09vYACwsNAAICAgD29vcAAwMDAP4AAAAAAQEA//7/ABISEwAA//8A8/PzAAQCAwD5+fkAAgICAAwMDAD6+voA+fj4AAkHBwANCQsACgsKAA4ODwD6+vkA+Pr7APX4+AAEAwMACwkPAP39/QACAgIA9/n3APL28wD6/vwAAwABABQQEwAMCQwA9fT0APz+/AAFBQYA+Pz6APX49gD+//wACgcJAP///wACAgIACQkJAAD+/gD1+PgA9vn3AAD/AAAKBwgACgcIAA4PDQADAwQA9/b3APr6+gADAwMA+/z7APz2/AD8+vsAAQEBAAMDAwD6+voA+fn5AAUFBQACAwEAAgMCAP///wD/AAAA+fn4APb69wD5+/oA/wECAAQEAwAEAgMAAQAAAAD/AAD7/fwAAQEBAAgFBgACAgIAAAEBAPP49gD9/f0AAwIDAAUEBAAFAwMAAP7/AAIBAQAEBAQAAf39APn9/AD+/gAAAAMDAP3+/gD7/fwA//7+AAQDAwAAAP8ABQYGAAMAAQD8/f0A9/v7APf8/AD3+fcA+/z6APz+/gD/AQAAAP//AAICAgAEAwQA/v//AAAAAAD8/v8A/wH+APz6+gD7/f8AAf8AAAQDAwD///8A/v7+AAIDAwACAwIA/v7+AP35/wD4+fgA/wIBAAQDBAAA//8AAv8CAPv9/AAA/wAAAwIDAAAAAAD/AP8AAAIBAP8AAAD9/P0AAAAAAP8CAgACAQIAAwMCAAECAQAA/QAA/f/9AAEBAAD+/gAAAQEAAAUCBAAB/v0A/wIBAP///wD///8AAQEBAAEAAQABAAEAAf//AAEBAgD7/vwAAAMBAP/+/wD+/v0A////AP///wAFBAUAAf8BAAD/AAAAAP8AAP/9AAH/AAAEAgAAAAABAP//AAADAgIA//8BAAEBAQAEAgICAAAAAAAAAAAA////AAICAgAAAAAA////AAEBAQACAgIA/Pz8AAEA/gD//v4AAAAAAP4A/wAAAAAAAAAAAP///wD///8A////AAEBAQACAgMA////AAEBAQD///8A////AP7+/gABAQEAAgICAAAAAAAAAAAAAAAAAAEBAQAFBQUA////AAEBAQAAAAAAAQEBAP7//gAA/wEAAgICAAEA/wAEBAMABAMDAP//AAAAAAAABAMDAAD//wABAAEAAQEBAP39/QABAwUAAwIBAAMDAQACAgIAAQEBAAD/AAD+/f0AAgMCAAICBQD9/fwAAwAAAAMEBAACAgIAAAAAAAD//gABAgIAAgICAAMBAQD+//8A/f39AAEBAQAFBAUA/wD+AAICAgABAQIAAAAAAP///wAAAAAAAQEBAAEBAQD///8AAgICAAEBAQD///8A/v3+AP8A/wACAgIAAQEBAAMDAwD///8AAQEBAAAAAAD+/v4AAQEBAP///wD///8A+/z7AAEBAQABAQIA/wD/AAAAAAD///8AAwICAP3//wADAwIAAAAAAP7+/gACAgIA/Pz9AAMDAwD///8AAQEAAAEAAAD+/fwAAwIDAP3+/gD/Af8AAQAAAP/+/gADAgAA/f3+AAIDAwABAQEA/v7+AAIBAQADAwQA/v7+AAAAAAD8/PwAAwMDAAEBAAAHBwcA/v7+AP///wAAAAAA/v3+AAMDAwD9/f4A/v7/AAUFBAD+/v4AAgIDAAAB/gADAwMA+/v7AAEAAAACAgEA/v//APv9/AABAAAAAQABAAICAgABAQEAAAABAP///gD9/f0A/v7+AP///wABAQEAAQEBAAICAgAAAQIA/f79AAEDAgACAQEA/v7/AP7+/gD//wAA/v4AAAEB/wAAAAAAAQEBAP39/QAAAAAA/Pz8AAEBAQACAgIAAwMDAAAAAAAA/wEA//7/AAABAAD/AP4AAwQDAP7+/gD8/PwABAQEAAMDAgD///4AAAAAAAAAAAD//wAA///+AP7+/gD///8AAQEBAP///wAAAAAAAAAAAP39/QABAQEAAQEBAP///wACBAMA/v7+AP79/QD9/f0AAgICAAEBAQD+/f0AAgICAP7//wD8/PwAAgICAP///wAAAAAAAQEBAAQEBAD+/v4AAAABAP//AAD8/f4A////AP7/AAAAAAEAAQACAPz9/gAAAAEA//8AAP79/wAAAAAA/f39AP///wD///8A/v7/AAQEBAD///8A/f3+AAICAgD+/v8A/v7+AAEBAQD+/f8A/v8AAAEBAAD/AAEABAQFAPz8/QAAAAAAAwMDAAEBAgAAAAEA/f/8AAEBAQD+/v0AAQMCAP//AAABAgIA/v7/AAABAwD7/v4A/v7+AP4AAgD+AAAA/P39AP4AAAD+//8A+/z+AAEDAwD/AQAAAgMEAP7/AAABAwAAA/8BAAAAAQD8/vwAAQEBAP7+/gACAgIA////APz8/ABkjfTBAAAgAElEQVQDBAQAAQACAAICAgD///8A/v//AP///wD+/v4AAAAAAAEBAQACAgIA/v7+AAAAAAACAwMA///+AP8AAQAA/wAAAQEBAP///wACAgIAAQEBAP/+/gD+AAAAAQEBAAEBAQD+/v4AAQICAPz8/QAFBAQA//7+AP0AAAACAQMA/gAAAAIA/wD9//8AAwECAAIBAgACAgEA/f39AAMCAAAB//8ABQQEAAD//wADAwIA///+AP///wACAQEAAQIDAAEAAQABAQAAAQEBAAMFBAADAwIAAP//AP//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BAD/AP4A+vv6AAECAgAEAwMAAwMFAP38/AACAQAAAQEEAAIBAQACAQEAAAAAAP3+/gD8/v4A////AP///QAEAQEBAP7+/gD+/v4AAQEBAAAAAAD///8AAAAAAP///wACAgIAAgICAP4A/wD+AAAA/v/+AAAAAAAFBQUAAf8AAAAAAgAAAAAAAQEAAAD/AAD/AP8A/f39AAICAgD9/f0AAAAAAP///wAAAAAAAQEBAAMDAwD9/f0A/v7+AAAAAAADAwMA/v7+AAEBAQACAgIAAQEBAP/9/QAAAQEA/v7+AAIAAAABAgEAAAAAAAAAAAABAQAAAP8AAAICAgABAQEAAQAAAAQEBAABAQAAAQIBAAAAAQAAAAAAAQEAAP7+/gAEBQUAAgEAAP///gAAAAAABAUEAP7+/gD8/PwABAMDAAEAAQADAwEAAAABAPr8/AADAQEAAgICAAIBAQD+/v4AAQEAAP///wAAAP8A/v7/AAEBAQD8/PwAAgICAAEBAQACAgIAAQEBAAEBAQABAQEA////AAAAAAD+/v4AAgMCAP8AAAAAAP8AAAD/AAICAwD//wAA/f39AAAAAAAAAAAAAAAAAAEBAQAAAAAAAAD+AAAAAAAAAAAAAP8AAAYDBAD8/PwA/f39AP///wAAAAAABAQDAP7+/gD///4AAgICAAEBAQD+/v4AAQAAAAIBAQD///8AAAAAAAAAAAD///8AAQEBAP///wAAAAAA/v7+AAUEBAD9/v0AAAAAAAIBAQAAAAAA/f39AAMDAgAAAAAAAP8AAAD+/wD/AAAAAwMDAAICAgAAAAAA///+AAAAAAABAQEAAQEBAAEBBAD///0AAQEBAAEDAgD/AAAAAQEBAAAAAAD9/v4AAgEBAP7+/gD///8AAQEBAAICAwD//wIA///+AAAA/wAAAAAAAgICAAAAAAD9/f4AAAAAAAD+/wD+AP8AAAEBAAAAAQD///4AAQEBAP///wAAAAAAAAABAAAA/wABAQIAAQECAAAAAQD///8A/v7+AAICAgD9/f0AAgICAP7+/gAAAf8AAP0AAAEBAQACAgIA/f39AAAAAAAAAAEA/v8AAAD//wD//v8AAAABAP3+AAAAAAIA/v79AAECAQD9/PwAAP8AAAEBAQAAAAAAAAEAAP8AAAAA//8AAgICAPz8/AD///8A////AAAAAAD///8A//7+AP39/QD///8A/f39AAEBAQABAQEA/f39AAICAgD//wEA//7/AP39/QAAAAAAAAAAAAEBAgD9/f0A/wH+AAAAAAAAAAEAAP8BAP3+/QABAQEAAQEBAP39/gAAAAAAAgICAP7+/gD//wEAAQIEAP3+/wD9/gAAAAACAAEBAQD9APwAAf8AAAAAAAD8/v4AAAABAP3+/gAAAAAAAwMEAP7//QD9/f0A//8AAAECAAAEBAQA+/7+AP7+/gD9/v8A//8BAAMFBAD9+/wAAAEDAP/+/QD///8AAQECAP/+/QD9/v8A/wEAAAEBAQD+/f0AAAIEAAAA/wD//v8A/wEBAAAAAQABAQEA///+AAEAAgD+/QAAAAL/AAcFBgD6/PsAAAH+AP/+AQAAAAAAAgMDAAEDAgAA/wAA////AP///wD+/v4AAgICAAEBAQAAAAAA/P7+APz7/AACAgIAAwMDAP///wD///8AAAAAAP8AAAACAQEAAgABAAAAAAADAwMAAgEBAP//AAD//wAAAAEBAAEAAAD//v8AAgMCAAEBAQAB//8AAAEAAAICAgAA//4AAgIBAAABAAABAQAA////AAIBAQABAQIA////AAD/AAD+/v4AAwIBAAIDAgD///4A/v3/AAD//wD+AQEABQQEAAAA/wACAwIA/f3+AAAAAAD+/v8ABAQEAP7+/gD//gAA/fz+AP///gAEBAMAAQECAAQEAgAAAAEA/v/9AP8AAAABAAEA///+AAECAgD9/v8A/wAAAPv8/gAEBAQAAAD/AP8AAQD9/f0AAAD/AP//AAD+Af4A////AAICAgAAAAAAAgICAP7//wD9//4AAgABAP4A/wACAwIAAAEAAP7//wACAQAA//79AAAAAgAA/wAAAQACAP8A/QD/AAAA/wEAAAD//wABAQEA/v4AAAEB/wD/AAAAAf8AAAEBAAAAAAAAAQEBAAAAAAAAAAAAAAAAAP///wABAQEAAQICAAAAAAD+/v4A/wICAAEBAQAAAAEA//8AAP//AAD///8AAgICAP///gD+/v0A/v4BAAEBAQADAwMAAAAAAP7+/gD///8ABAQEAAEBAQD7+/sAAgICAAEBAQABAQEA/v7+AAAAAAABAgIA//7+AP///wAEBAQA////AP7+/gD///8A/v7+AP7+/gABAgIAAgICAPv7+wAB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AAAAAAMDAwACAgIA/f7+AAAAAAAFBAQA/f7+AAAA/wABAQIAAAAAAAD+/wACAgIAAwECAP///wAAAQEAAwMDAAAAAAABAQEAAAAAAAEBAQACAgIA/v7+AAICAgD///8AAQEBAAEBAQADAwMAAAAAAP7+/gACAgIAAQEBAP///wD///8AAgICAP79/gAEBgMA/v7+AAEBAQD///8AAwICAAAAAAABAAAAAgICAAAAAAABAQEA/v7+AP39/gAC//8A//7/AAMDAwD///8AAAAAAP///wABAQEAAQEBAP7+/gD+/v4AAQEBAAEBAQD/AP8ABAMEAAAAAAABAQEAAAAAAP7+/gAAAAAA/f79AAAA/wACAQIABAMDAP39/QAAAAAAAAABAP//AQACAgEAAAAAAP///wD///8AAQEBAP7+/wACAgIA//7/AP7//wAAAP8A////AAABAAAA/wAA/v7+AP39/wAEBAEAAgIDAPr6+gACAgEAAAD/AP///wD///8ABAQEAAMDAwD///8A////AP//AAABAQAA/v/+AP/8/QAAAQAAAgICAP7+/gABAQEAAwMDAP7+/gABAQEA//8BAAD+AQAAAAMA/wD+AAEAAQD///4A/v3+AP7//wAAAAAAAQEBAAAAAAACAgIA////AAICAwD///4A/Pz+AP/+/wAAAAEA/wD/AAD//wD///4A/v7+AAMDAQAAAAAA/f39AP7+/gD///8AAwMDAAAAAAACAgIAAAABAP///wD9/f0A/gAAAAABAgD/AQAA/v//AP3//wACAwMA/QAAAP7/AQD///8A////AP//AAD/AAEAAQEAAP3+/wD//wEAAgMCAP//AAD9/f4AAQEBAP//AAACAgMA/P7+AAAAAQACAgIA////AP8A/wAAAgIAAP4AAAICAwAAAQAA+/z9APz8/AAAAAEAAgMBAP3//wD8/PsA/wD/AAEBAwAAAf4AAQAAAP7//wABAQEA/f7+APz8/AAAAgIA/wABAP8A/wD/AP8AAAAAAAECAgAA//8A/v//AAEBAQACAwMA/v7+AAAAAAD///8A/Pz7AAQEBAD//v8AAgMDAP/9/QAAAAAA/v7+AAMDAwABAQEABAMEAP4B/wAAAAAA////AAAAAAD///8AAAAAAAAAAAACAgIA//7/AAIBAQAA//8AAAEBAAAAAQD//wAAAwMCAAH//wAAAQAAAAAAAAAAAAACAgMAAAD/AP7+/gADAAAAAwMCAP///wAAAQEA/v7/AAAB/wAAAAAAAP7+AAMFAwAEBAQAAQABAAEAAAABAgIAAf7/AAAA/wAAAAEA/wD/AAD//wD+/v4A//8BAP///wAEBQUAAgMCAPz6+gABAAAA/Pz9AAIDAQD7/PwAAAAAAAD/AAADAwMA/v4AAP///wACAgEA/v8AAAD9/QACAgMAAP8AAAEBAQD+/v4AAAAAAAICAgADAwQA+/v7AP7+/gAAAP0AAAAAAAEBAQACAgIAAQECAP///AADAwMAAQEBAAAAAAD///8AAQEBAAAAAQD+//8A//8AAAAA/gD/AQEAAgMDAAACAgD7/f0AAQEAAAICAgACAgMA/Pz8AAAAAAAGBgQAAQMEAPr7+gACAgEAAgEBAAD//wAAAAAAAAAAAAEBAQD///8A/gD+AAH+AQD//v8AAAAAAP///wABAQEAAAAAAP///wACAgIAAAAAAAAAAQAAAAIAAQEBAAEBAgACAgMA/v79AP39/gD///4AAAAAAAMDAwAAAAAA/Pz8AAAAAAD+/v4ABAQEAAAAAAD//v4A/v7+AP7+/gAEBAQA/Pz8AAICAgABAQEA////AAAAAAD+/QAAAgICAAUFBQD5+fkA/v7+AP//BAAAAP8A////AAAAAAAAAAEAAAD/AP39/gAA/wEAAQECAAEAAQD+/v8AAQEAAP39/gABAQAA/fz/AAAAAAABAP8A/v79AP///wD+/v4ABAQEAP///wAAAAAAAQEBAAD/AAADAwMA/v/9AAEDAgD8/PwAAQECAAAAAgABAf8A/f7/APz8/gAHBgMABQUEAP77/AAAAAAAAQABAP7+/wACAgIA/P3+AP/+AAACBAMAAwMEAP3//AD+//8A+fr6AAMDCQD/AQEA/f7+APz8/gD4+PgACwoMAAUFBQADAgQAAQEBAP//AAD+/v4AAAAAAAAAAQD5+/oAAwQEAAYFBgABAwIA9fX1AP///wAIBQcA/v33AAECAQAAAQAA////AAQDBAACAfwABAQEAPz8/AD7+/sAAQMCAAEBAQD+/f4AAQAAAAQCAwABAAAA/wIAAP4A/gABAAAAAQABAAABAQACAwIAAAABAAABAAD9/v0ABgQEAAD//wD//f4A/Pz8APr9/AAC+PgADAkKAAX8/AD//wAA+fn8AP4AAAD6/PoA+vwDAAoFBwAGBQUA//z9APoAAgD8AP4A/v//APz8+wAGAwYA/Pv7AAEBAQAEAQMA/v3+AP///wAAAgEA/AD+AAADAgAA/gEA/wD/AP3+/gAAAQEAAP/+AAYEBQD1+PYAAgMDAAMCAwD7+v0AAf//AP7+/gD5/vwA/f39AP79/QAEAwMA+Pv6APv+/gD9/v0ABv8EAAMDAQADAgIA8/n2AP7//wAEAgQADgkLAOrx7QD+AP8AAgECAP4A/wAEAQIAAgAAAPn9/AABAgIAAv8BAP7//wD9/fsAAAYDAPr6+QABBQcA+/r7ABMOEAD+/f0A+vz8APn+/AAIBgcABAECAA0ODQD5/PsA8fXzAAQFBQAD+/4AAgQGAA4MDQD6+voA+v38APz8/AD8AP4A9ff2AAQFBAAEAAEA/P3+AAUFBQAEAgMADgsNAP79/QD09vQAAgICAAsKCgD6+PkAERESAPf39wD2+fcA9/n3AAkJCgAHBwcA9vb2AAUEBAAA/wAA+fr6AA4MDAAEAwMA/v39APf39wACAwMACgoKAAMDAwAGBgYA9fb2AP8A/wDr7+4AAQEBAAoJCgD4+PgA/P38AA0NDQD9+/wACQgIAPz7/AD5+voAAQEBAAQEBAD5+fkAAQECAAgJCQD9+/wACAgIAAgICADv8O8A9vj3AAcGBgAEAwMA+Pv6AAUEBAAGBgYAAwMDAP///gDx8PEA/f38AAcICAAHCQgA+fv6APn4+AD+/v8ACwkKAP8AAAAAAAEAAAABAAkJCAD8/v4AAP79AAAAAAD4+foA+vz7AP3//QD+/v4A/v7+AAQDAwAAAAAAAgECAAcHBwD9/PwABAQEAP///wD9/v4ABQQFAAYHBwAICQoAAwEBAP38+gD29fYA/gD/APb4+AD+//8A/gD/AP7+/gD/Af8A/v//AAEA/wABAQEA/P79AAABAQAAAP8A//z9AAICAwACAgIAAQQCAP3//gD5/PsA+/v7AAD8AAD9/2x7BtwAACAASURBVP8A/f/+AP7//wABAAAABAIDAAQDAwAFAwQAAP8AAAABAAD/AP8A/f7+AP79/QD8/vwAAAECAP///wAA/wAAAf//AAQDAwAAAQEAAP//AP8CAgD7/v0A/wAAAAIAAQADAgIAAwICAAEAAAAFBAUA////AAEBAQAC/wEAAwIDAAMBAgD+//4A/v7+AP8AAAACAgEA/f39AAMCAwABAQEAAP8BAP8AAQD///8AAAACAAD/AAACAQEA/QH+AP39/QABAAEAAwMEAAQDBAAAAAAAAQIAAAsCAgAAAQEAAwICAAAA/wD9/f0A+v76APv9/QD+AP4A+vz7AAICAwACAgEABQQGAAEBAQD+/fwAAgICAAICAgD///8AAgAAAAMBAwAE////AP///wD///8A////AAICAgD///8AAQEBAAAAAAD9/f0AAAAAAAQDAwD/AgEA/v7+AP8A/gD9/f0AAAEAAAICAgD9/v0A/f3+AAH/AAABAgEAAAAAAP7+/gD///8A/v7+AAAAAAACAgIAAQEBAP///wACAgIAAQEBAP39/QAAAAAA////AAEBAQAAAAAAAAAAAAIBAgABAQAA////AAEAAQABAQIA/v7/AAD/AAAEAQEAAQEBAP///wD9//0AAgEAAAMCAgACAQIAAgEAAAAAAAD//v4A/gABAAUDAgAEBAMA/v38AAD+/wABAwEAAAUFAAIBAgABA/8AAQH/AP7+/QAC/wQAAP//APz9/QAGBgUAAAAAAAQDAwAEAwMAAQL/AAD//wAAAQAAAgICAP7+/gD+/v4AAQEBAAMDAwD+/v4AAQEBAP7+/gD///8AAQEBAP39/QACAgIAAgEBAP7+/gD9/P0AAQEBAAAAAQD///8ABgQFAPz8/AD8/PwAAAAAAAAAAAAAAAAAAgEBAP7+/wD///8AAAAAAPz8/AAAAAAAAQEBAP39/QADAwMA/f39AAICAgABAQEA////AAAAAAAAAAAAAgICAAEBAQAAAAAA/v7+AAAA/wAAAAAAAgEBAP7//wADAgIA/v7+AP38+wABAQEAAwQEAP7+/gD+/v4AAAAAAAQEAwAA//4A/wL/AAMDAwD+/v4A/f39AAEBAQD///8AAQEAAAAAAAAAAAAA////AAAAAAD//wAA/wEAAP38/AADAwMAAAAAAAICAgD///8AAQEBAP7+/gD+AP8A/f39AAEBAQABAQEAAAAAAAAAAAAAAAAAAAAAAP7+/gABAQEAAQEBAP///wD9/f0ABAQEAP79/gABAQEAAAAAAP8AAAD+//4AAf8AAAEBAQD///8A////AAICAgD+/v0ABQUEAP7+/gAAAAAA/Pz8AP///wABAQEAAgICAP4A/wABAAEA/v7/AAEBAAADAgMA/v7/AP///wABAQEA/v7+AP7+/gD///8AAgICAP39/QAAAAAA/v7/AP8BAAAAAAEA/f39AAAB/wAFBQUA////AP///wAAAAEA//4AAP0A/gD+/v8A//8AAAIDAwD///8A//4AAP3+/QAA/wAAAgIDAP7+/gAAAAAA/Pz8AAICAwAAAAAA/v7/AP///wD+//8A///9AAEBAgAAAgEA/vz+AAAAAgD+/f4AAQEBAP//AQD+/f8A////APz8/QD+/v8ABAQEAAAAAAACAgMA////AP7+/AD9/f4AAAACAP3+/gACAgQA/v7+AAAAAQD8/P0AAgMDAP7+/QAAAAAA/f/+AP7//wD//f8A////AAECAAD9/wEA/f/+AAAAAQD7/f0AAv8CAP8AAAD+//8A/f7+AP8BAAAAAAAAAAEAAAICAgD+/wAA//7+AAMEBAD///8A/P//AP7//gD9/v4AAQEBAAH//gABAgIAAAABAPz+/gAAAAAA////AAEBAgAAAAAA////AP7//wD+//4A//4AAAAAAAABAQEAAAAAAP7+/gAAAAAAAgIDAP///wACAgIAAAAAAAAAAAABAQEAAQEBAP7+/gD8/f0AAQEBAP/9/gD/AgIAAAAAAP///wACAgMAAQEBAAEAAAAAAAAA////AP8BAAABAQEAAQAAAAD//wACBAQAAQIAAAIBAAACAQEAAP/+AAECAQACAQIA/gD+AP7+/wD9Af4AAgABAAECAgABAAAAAAEBAAMDAgAAAAAA/f3+AAIBAQAAAAAAAAAAAP7+AAD8/P0A/f39AAICAgABAQEAAAAAAAIBAgAAAAEAAAD+AAAAAAABAQEA////AAICAgAAAAEABwYHAPv7+wABAAEAAAH/AAAA/wACAgIA////AP///wD+/v4ABAQEAPr6+gABAQEAAAAAAAAAAgD8/P4A/gD9AAABAQACAAAAAwMCAP7+/gAAAAAAAAAAAAEBAQD9/f8AAAAAAAMDAgAAAAAA+/v7AAICAgABAQAA//8BAAICAgD//wAAAgICAAEBAQD+/gAA///9AP//AAD//wAA/v//AAMCAgD9/f0AAAD/AAMDAAAAAAAABAQDAAAAAAAAAAAA+/r8AAMEAgD9/f0AAQEBAAEBAgD//wAAAAD+AAEBAQACAgIAAQEBAP///wD8/P0AAQEBAAAAAQAAAAIA/v4AAAAA/wD//wAAAAABAP///gD+/v8A+/v7AAEBAQAEAgIAAgICAP///wD9/f0AAwMDAP///wABAQEA/v7+AP39/gD//wAAAAAAAAICAgAEBAQA+vr6APr6+wAFBQQA//4BAAAAAAABAQEA/v7/AAEAAgD9/v0AAAAAAP7+/gD+/v4AAgICAAICAgACAgEA////AP///wD//wAAAQD/AP7+/QD//wAAAAAAAAEBAQAAAAAA/v7+AAQDBAD8/PwA+/z8AP79/wAAAAAAAgIEAP39/gACAgQA+Pn5AAIBAQAGBQAAAAAAAAUDAgAAAAEA+Pr7AP/8/QABAQEA/f39AAEBAgAFBQYA/f4BAP7+AgD7/PwA/wT/AAECAwABAQEA/v4AAAEAAgAGBgcAAgICAAMDBAAA/wAABgYGAP7+/gD6+voA/Pz8AAEBAQD///8A+/z7AAMDAwABAQEABgUFAP///wACAQEABwUGAPz+/QABAAEA/P38AAcHBwAEBQUA+vz8AAAAAAACAgIA/gAAAAIAAQAEBAQA+fv9AAABAAAAAAAAAgICAAD//QAB/wAAAQEBAPz+/QAB//8ACQUDAPn+/gD6/PsAAwEAAP4A/QD5+vkA/Pz8AAQDAwD6/PwA/v8CAAsJDgD09/UACAgJAPr49AD6/fwAAQEDAPb5+gAAAAAABAQFAAsJCQD4+voA/P/7AAUDBAADAwQA/P//AAMDAwAFAwMA+v//AAICAQD4+/oA/f//AP0A/QACAwIAAQEBAPz8+wD+Af8A/Pz9AAcHBgDy9/UA/v39AAQA/wD6/PoADgYLAAMDAwAB/v0ABwcHAP3+/QD8/v4A/P38AAIAAAABAAEA/gD/AAABAQABAwIA9/v5AP/+/wAA/QAA+//9APj9+wALBwkAAAEBAP/+/gAJBwgA+vz7AAUDBAD9AP8AAAEAAP3+/gAHBQYA+vv6AAYEBQD9/PwACQcIAAL/AAD2+vgA+v37AP8BAgD8/PwACwoNAAIBAgD4+PgA/v//APn6+QD4+PcAEA4QAPb3+AD6/PsAAAD/AAAB/wDv8vEA+wD/AAAA/wALBwoA9vr4AAABAQAIBwgACAcHAPT08gABAQAAEhARAP37/AALCwsA/wEAAPX59wDz9PMABQUFAA0NDwD3+PYA/Pz7AAQDBAD19/YACwoKAAUFBQD8/PwA9/f3AAcHBwAAAAAA/v7+AAICAgD7+/sA/P39APH08gD8/f0ACQgIAPn5+AD+/v4ACQgIAPn5+QD5+voA/Pv7AAECAgD9//4ADQkLAPn6+QABAgEA+Pn3AAb9BQAODQ8AAAAAAOXp5wD29/YABgUEABkQFQD49vgA//39AAUEBQAICAgABgYGAPX19QD///4ABQUFAAIBAQDy8fEA/f39AAIAAQAABAQA+/z+AP79/QAFBgYA/Pz7APr6+QAFBwYA9vb3AP7//wABAQAA/gD+APr7+gAGBQYACAQEAP///wD8/PwA/v/+APz7+wAIBgcABgUFAPf5+AAAAAAAAwQEAAABAAD5+fgA/Pr7AP7//gACAf8A/P38AP0A/wD+Af8A/f79AP7//gAAAQIA/wH/APb7+QABAQIAAf//AAICAgAEAwMABgcHAP7//wD4/PsA/f/+APn7+wD/AQAAAAAAAPz8/QAEAgIABwIEAP/+/gAHBQUABAIDAP8A/wD+/v4A+v79APv9/AD+//8AAQEBAAIA/wABAAAAAQABAAQEBAD+/P0AAQECAAIBAgACAQIAAgICAAEBAQD/AgAA/f3+AAACAAD9//4A/v7/APv7/AABAwEA/f3+AAIDAgD9/f4AAf4BAP77AAAAAP8A//7/AAD//wAFAgQAAwICAAEB/AABAQEA/fz9AAEBAQD9/f0A/QEAAP/+/gAGBQUAAQEBAAD+/wACAQEACgYIAAH/AAD+/v4AAAEBAP3//wD8+/sAAP7+AP4B/gABAQIAAAAAAAcEBQAFBAUAAQAAAAABAQD9//4A////AP7//gD6AfwA//7+AAABAQAC/wAA/vz8AAIEAgAE/f39AAEBAQAAAAAAAAAAAP7+/gABAQEAAAAAAP///wACAgIAAAAAAAAAAAABAQEAAwMDAAD/AQD+//8A///+AP8BAQABAQAAAAABAAUFBAD8/PsA////AP//AQAAAAAAAgICAP7+/gD///8A/f39AAAAAAABAQEAAAAAAAICAgD///8A////AP7+/gACAgIAAAAAAP/+/gADAgMA///+AP4AAQACAAIAAQICAAICAAACAAIAAgMCAAH//wD//v8AAgICAAAAAQABAQAAAgMDAP///gD/AAAAAQEAAAAAAAAAAAAAAgICAAcFBQABAAAAAgICAP7+/gD///4ABQUFAAQDAwAA/wAAAQABAAICAgD+/v4AAAAAAAQDAwD+/v0AAgEBAP7+/QADAAIA/wEBAAEBAQACAgIAAQEBAAEBAQACAgEAAgIBAP7+AAACAgIA////AP39/QAAAAAAAQEBAAEBAQABAQEAAQEBAAICAgD9/f4A///+AAEBAAABAQIA////AAAAAAADAQIA/v7+AAEAAAADAgEA/f3+AAABAQAAAAAAAgICAP///wD///8A////AP///wAAAAAAAQEBAP///wAAAAAA/f39AAIBAQABAwMA/v79AP39/gD+/f0AAwIDAAIAAAD+/f4A/v79AAEBAAACAgIA/f39AP///wACAgIA/f39AAABAAACAQIA/v7+APz8/AACAgIAAwMDAAEBAQD+/v4A/v79AAICAgABAQEAAAAAAAAAAAACAgIAAQECAAMBAQD///8AAAD/AP7+/gABAQEAAQEBAAEBAQD+/f4A/gIAAAMCAgAAAAAA/wAAAAEBAQAAAAAA/v7+AAEBAQD+/v4AAAAAAAMDAwD+/v4A/f39AAIBAQD9/v8A//39AAIDAgABAQEAAwQDAP/+/wAA//8AAAAAAAICAgAEBAMAAQEAAP///wACAgIA////AAAAAAD///8A/P39AAABAAAAAAAAAgICAAAAAAABAQEAAAAAAP//AQD+/v4AAAAAAAEBAQABAQEAAAAAAP39/QAAAAAABQUFAP///wD9/f0ABAQFAP39/AD9/P4A/wAAAAEBAAAA/wAAAQEBAPz9/gD9/v0A/v7+AAUFBQAAAAAA+/39AAIBAQACAQEA/f39AP//AAD///4AAAABAAMDAwD7/PsA//8AAP8A/wD8/f0A//8AAAEC/gACAgIAAAACAP39/QAAAAAA/v7+AAAAAAD9/f4A/v7+AAAAAQABAQAA////AP7+/gAAAAIA////APz8/AD//wAA////AP39/QADAwMA/wAAAP8AAQD/AP8A/P39AAEAAQAAAQEA/f39AAAAAQACAgIA/wAAAP7+/wD9/v0A/v//AP79/wABAQAA/f7+AP4AAQACAwMA/wECAP4A/wD+/wAA////AP39/gD6/PwAAgECAAEBAQD+AP8AAQEBAP/9AAACAgIA/v8AAPz9/QAB/v8AAwQDAAAAAAABAQIAAQD/APz9/QADAwMAAQECAAAAAAACAQIA//7/AAIBAQABAQEA/v7+AAMDAwD///8AAAAAAAMDAwABAQEAAAAAAAAAAAAAAAAAAAAAAAICAgACAQEAAQEBAAAB/wABAAEA////AAEBAQABAQEA//7+AP39/QAEAwMAAAECAAD//wD7+/sAAgIBAAUDAwD9/fwAAgADAP8CAQD/AP8AAQABAP//AAD/Af8AAgMCAAABAgABAQIAAQEAAAAAAAD9/f0ABgQFAP///wABAQAAAQABAAEBAQAAAAEAAgECAP///gD+/v4ABgYFAP///wAAAAEAAAAAAP0A/wAFAQIAAAECAP/+/gD7+/sA//8AAAAAAQD//gAA/Pz8AAAAAAAAAAAAAAAAAAEBAQD///8A////AP///wACAgIAAAAAAAQEBQAAAAAAAAABAAABAAD+//8AAAEBAAAAAAD9/f0AAAAAAAAAAAAAAAAA/f39AAQEBAAAAAAAAQEBAAEBAQD+/v4A////AAMDAwADAwMAAQEBAAICAgAAAAAAAAAAAPz8/AACAgIAAQEBAAEBAQADAwQA////AP8AAAACAwMA+/v7AP///QAFBQUA/f3/AAAA/QABAAAA////AP/7/gADBAMAAQEBAP7+/gACAgIAAAABAP7+/gAAAAAAAQEBAAAAAAD9/f0AAgICAPv7+wAEBAQAAAAAAP39/QAAAAAAAgICAAAAAQAAAP8AAAD/AAAAAAD/AAAA/v7+AP///wD+/v4AAAECAAD//wAAAAAAAP8AAAIBAwD8//wAAQEBAP7+/gADAwMABgYGAPf3+AD8/P4AAQIDAAIBAAD9/f0A////AAEBAAD+/v4AAAAAAP7+/gAAAAAAAQEBAAQEBAAAAAAA/f3+AP3//wACAgIA////AAAA/wACAgMA/Pz8AAEBAQD9/f0AAwMEAPr6+wAAAAAAAwICAAD/AAD///4A/wAAAP/+AAABAP8A/v39AP7/AwD8/P0AAAD/AAD/AAAAAAAAAQEBAP//AAAEBAQABgb+AP//AAD//wAABQQGAPz9/gD6/P0AA//9AP3+/QAEBAUA/P3+AAMBAgACBgYAAAABAAD//wD//wAA/f39AAICAgAGBQUA9vf2AAAAAAADAwEA/f39AAQFBAACAAEA/v4AAAUEBgD/AP8ABgUFAP/8AAD8/v0AAQIEAPb3+AD///8AAQECAAEC/wD9/v0A/v7/AAEAAAD///8AAQAAAP4AAAD8//4AAQEBAAD9/wD/AAAA/v38APv9/AAHBAYA/P7+APz9/QD/Af8A/f7/AAwMCgAAAAAAAQMCAAEAAQD+//8A+fz7ABIQEgDu8/EA/v/+AP39/AACAQEAAwICAPf5+QABAgEABQH+APX5+AAJBgYACwcHAP///wD+AAIA/P//APz9/AD7//wA+//9AAkEBwAB/PsA///+AAD//wABAAAA/P39AP7//wD9AP8A//7+APj5+QD4+/kADAcJAP39/QADAwQADQoMAPj7+QAKCAkA//8AAP8AAAD9/v4AAAEBAAAAAAAJBQYA/AH/AAEDAgD3+vgA+vz7AAkHCAACAwMA6vLtAP7//wAGAgQA/P79AAgFBgAEAwMA+/z8AAQDAgD+/fsAAAIAAP8AAAD+//4ABAECAAUDAgAEBAQACgsMAPv4+QAAAgEAAP4CAAAA/wAEAwMAAQAAAPT08wD3+PgABQUFAAAAAQAIBwgAAwECAPj6+QD7/v0ABAUDAPv7+wAAAQEAAAAAAAQBAgACAAEAAgIDAP7+/gAFBAYA+fr6APn6+wASDxAA////AP4BAAAICQcA7vDwAO/y8AAFAwUACQgKAPb29QD19/UAAgEBAAAAAAAJBwgACggJAAQCAgD09fYA/f3+ABUVFAD6+vsA/f39AP7//gABAQIA9ff1APz8/AAEAwMA//7+APv//wAGBQYA//7/APf4+AD/AQAAAAQDAP/9/gAMCQoAAQEBAP7+/wAFBAMACAYHABEQEQD3+PcA8vPyAPn8+wAEBQQAEg8RAAoICAD89/oAAQQFAAQGBgABAgIA9/f3AP7+/gABAQEABAQEAO3w7wD4+vkACAgIAAcFBwD9/f0A/wICAAcJCAD///8AAQEBAP3+/gDz8/IA/f7+AP0A/wD+//4A////AAD/AAD8APwA/wIDAP4A/gD8/PoAAwICAAoJDQAFBAUA/Pz8AAMEBAD6+vkA/Pz8AAEBAgD9/vwA/f38APz//gAB//8A///+APz//wD8/v0A/v7+AAIBAQD9+/wAAgICAAQCAwD/AQAAAgECAAAAAAD7/f0A9/z7APf6+QD9/v0AAwMDAAICAgAFAwMAAP8AAAH9/gAFAAIAAgECAP0BAAABAgIA+f39APv8+gD+AP8AAAIAAAEBAAAEAgMABgQFAAIAAAABAAAA////AAQEBQAABAAAAAAAAP3+/gD+/fwAAf7+AP8BAQD/AAAAAgMCAAIBAgACAgEAAP8AAAUHAwACAQIA/gP+AP3//gD9//0AAAEAAAABAQADAQMAAwUCAP8BAAD+/f4AAgEBAP7//wD9/f0A/P78AAEBAQACAwIABAAAAAQEBgADAgIA/v//AAEEAgAB/wAA/v79AP8A/gAAAAAA/f//AAL/AQACAgEAAP8AAAYDBgAEBAQAAgIBAPn8/AD8/f0ACAYHAAgHCQD+//0AAgABAAMCAAD8+/kA/f7+AAICAgD//wAA/fz9AAIDAwAEAwMDAP7+/gAAAAAAAAAAAP///wABAQEAAQEBAAMDAwD///8AAAEBAP8BAAAAAAAAAAABAAAAAQD//v4A/QD/AAIBAgAAAP8AAAABAP8A/wABAgIAAP3+AAAA/wABAQIA////AAICAgABAQEAAAAAAP///wD///8A////AAAAAAABAQEAAAAAAAEBAQD///8A////AAMBAQD9/f0AAQEAAAQDBAAAAAAAAAH/AAAAAQAAAP8AAP//AP///wACAgEAAgEBAAD//wD8/P0AAgABAAICAAACAgIABgMDAAMDAwAA/wAAAgICAP8A/wAEAwMAAP//AAEBAQAAAQEAAQAAAP/+/gADAgMAAAD/AAICAQAAAAAAAwICAAAA/wD/AAAA/f3/AAEAAAABAgIAAQEBAAAAAAAAAAAAAwICAP///gD//gAAAAEAAAMCAQD+AP8AAgIBAAEBAwABAQEAAAAAAAMDAwAAAAAA////AP7+/gD+/v0AAQEBAAEBAQABAQEA/f3/AAAAAAD+/v4AAAAAAP39/AAAAAAA////AAIBAwD///8A//7+AAAAAAAA//8AAAAAAAEAAAABAAAA////AAEAAAABAQEAAAAAAAIDAwD///4AAgEAAAACAgACAgIAAAAAAAICAgD+/v4AAQECAAQEAwD+/v0A/v7+AAAAAAD///8AAAAAAP39/QD/AQEA/v39AAICAgABAQEA/v7+AP7+/gAAAAAABAQFAAAAAAD///8AAQEAAP///wAAAAAA////AP///wADAwEAAQICAP///wAAAAAA/v7+AAAAAAD///4A/P7/AAABAQAA//4AAP8AAAAAAAACAgIAAQEBAP///gADAwMAAAAAAAEBAQAAAAAAAgICAP7+/gAEAwUA/f78AP7+/gABAQEA/v7+AAEBAQD+//8A//39AAICAgD6/P0AAAD/AAIBAQAA/v4AAQEBAAICAgAAAgEA////AAAAAAD///8AAQEBAP7+/gD///8A/v7+AP///gABAQEAAQEBAP///wD///8A////AAEBAQD9/f0A+vr6AAQEBAABAQEA////AAICAwD/AP8A/v7/AAEAAAAAAP8AAQEBAP8A/wACAgIAAAAAAPz8/QACAgIAAQEBAP8AAAD+AAAAAQMDAP/+AAD//v4AAgMDAP4A/wD9/v8A/wD/AP///wAAAQIAAwICAP7+/gD9/P4A////AP///wD///8AAgIDAAAAAAAEBAEA+vr6AP///wAAAAAAAAAAAAEBAgD//wAA/v7+AAICAgD+/wAA/f7+AAAAAAD9/f4A/v//AAEBAQABAQEA/v8AAP7//wADAwMAAAABAAEBAgD+/v8A/f//APz9/QAAAQIAAAACAAAB/gD+//8A/gAAAP3/AAD8/f4A/v//AP8AAQAAAAAA/wAAAP8AAAD/AAAA/gD/AAIA/wD+/wAA/gD/AAICAgD+//8ABgUGAPv9/AD8/f0A////AAD/AQABAQIA///9AAIDAgABAgEA/v3+AAH/AAACAgIA/v//AP///wABAQEAAgICAP///wD8/v0A///+AAYFBgABAQEA/f39AP7+/gACAgIAAgICAAICAgAA/v8AAP//AP///wAEBQQAAQAAAAH/AAD8/PwABQMBAAQEBAAA/v8AAP//AAECAgABAQIAAwMCAAD/AAACAQEAAQABAP///wD+//8AAgICAAMCAQABAQIAAQH/AAIBAQD///8AAQECAAD/AAADAwMAAQIBAAH/AQD+/v0AAQICAP//AQD8/P0AAQABAAQEBAAAAP8A/f3+AAEBAQAAAAAABAQDAP39/AD8/P0AAAH/AAH/AQAEBAQA/wAAAAIBAgD9AP0A/f39AAEBAQABAQEAAAAAAP7+/gD///8AAgIDAAICAwD///4AAAABAPv9/AACAgIAAAD/AAD/AQD6+/sABgYGAAAAAAAEBAQA/v7+AAAAAAABAQEAAgICAP///wACAgIA////yRRfLgAAIABJREFUAAMDAwAB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/f39AP///wD///8AAgICAAMDAwD///8AAgICAAAAAAABAQEAAAAAAP///wACAgIA/v3+AP0B/gABAP8AAwECAP8A/wD+AAIAAv//AAEAAAABAAEA///+AAH/AAAFBAUAAwICAAAA/gAB/wAA////AAEAAAAA//0ABAIGAAD+/gD+AP4ABAMDAP///wACAwIA//7+AAD//wAAAgIAAwMEAAD//wADAwMAAQEBAP///wAAAAAAAQEBAAQEBAACAQEAAQEBAAECAgAA//8AAAD/AAEBAAAAAAAAAQEBAAICAQD+/PwA/f38AAEBAgAAAAMAAwMDAP///wACAgIA////AP///wADAwMAAAAAAAEBAQD9/f0AAAABAAEBAQAAAAAAAAAAAAEBAQABAQEAAwMBAAAAAAD+/v8AAAAAAAH//gD/AAAAAwIBAAICAQAAAP8A//7/AAMDAgD///8AAAAAAP///QAAAAAA////AAICAgABAQEA/v7+AAQEBAABAQEAAAAAAP39/QD///4AAAAAAAICAgAAAAAA////AP///gD9/f8AAQEBAP///wD9/f0A/v7+AAMDAwD+/v4A/v7+AAEBAQAAAAAAAAAAAP///wABAQEA/v7+AAAAAAAAAAIAAAABAAD/AAD/AP8ABAQDAP39/QAAAQEAAQICAP8BAAAAAAEAAwICAAEAAAD+/v4A//8AAAICAwD9/fwAAwMDAPz8/AD9/f0ABAQEAAICAgAAAAAAAAACAAEAAQD///4A+/v7AAQEBAD9/f0AAAAAAAD//wD///8AAgICAAABAAD7/f4AAwMDAAIBAAACAAAA////AP///wABAQEAAAAAAAEBAQD9/f0A////AAEBAQACAgMA+/v7AP7+/gD+/v4ABQUFAP///gACAgIAAAAAAP7+/gABAQEA////AAAAAAD8//4A////AAMCAwD9/f0AAAAAAP39/gAEBAQAAgIBAP39/QD9/f0A////AAAAAAABAQEAAgEDAAAA/wAAAAIAAgIEAP7+/wABAQMA/fz8AAAAAAACAgEA/v7+AP7+/gD///8AAAACAP//AQD///8A/f3+AP8AAAD9/v4AAP8AAAICAwD8/P0A+/z8AAQDBAD8/f0AAQECAP3+/gD+/v4AAAABAP7+/wD/AP8ABAQEAP7+/gD8/f4A/gAAAAEBAgD8/P0A/f4AAAEB/wD+/v8A/P/+AAEBAgABAQIA/v78AP4A/wD///8A/f8AAP3+/gD/AAAA/wAAAP8AAAAAAgEA//4BAP8A/wAAAAAA/wAAAPr8/AACBAQAAf8AAP7//wAAAAAA/v7+AAAAAAABAQEA////AP8AAAD9/v0AAAIBAAMCAgAAAAAAAQEBAP7//wD+/fwAAQICAAEAAAD///8AAgIDAP3+/QABAQIAAQEBAP8A/wD+AAAA/gD/AAIEAwAB/wAAAQEBAP7+/gACAQEAAgECAP39/QD8/PwAAwICAAEAAQABAQEAAQEBAAAAAAACAgIAAQD/AP7+/gADAgEAAgABAP8A/gACAwQAAAEBAP7+/QACAQEAAQAAAP///wABAgAA/f39AP8AAQAGBQQAAAEBAAAA/wADAwMAAP7/AAECAgACAgMAAP//AAEBAQABAQIAAgEBAAMCAwD9/vwAAAAAAAEBAQAAAAAA/f38AAAAAAABAQAAAgMEAAD+/wD+/v8AAgICAP3+/gACAgIA/f/+AP3//wAAAQAAAQIDAP8AAQABAQAA/wABAP8AAAD+/wAAAP/+AAMEBAD///8AAQEBAP38/QAEBAQAAAAAAAEBAQD///8AAQECAP///gD/AAEA/wABAAEBAgABAgIA/vz9APz8/AADAwMABAQEAP///wD+/v4A////AAEBAQD8/PwAAgICAAAAAAADAwEAAgICAAEBAQABAQEAAQEAAPz8/QABAQEAAwMDAAICAgABAQEA/v7+AAICAwAAAQEAAAIDAAAA/gD/AP8AAP8CAAAAAQAAAAAAAgICAP39/gABAQEA///+AAEBAQD///8A/f39AAQEBAAAAAAA////AP///wABAQEA////AP///wAAAAAAAQEBAP///gD8/P0AAQH/AAAAAAAA/wAA/v3+AP7+/gABAQEAAgICAP7+/gAAAAAA/v7+AAEBAQD///8AAAAAAAAAAAAEBAUA+vv7AAEAAQAEAwMAAQEBAP7+/QAAAAAAAAAAAAAAAAAAAAAA/v7+AAAAAAABAQEA////AP7+/gACAgEA/f39AAEBAQD///8A/v7+AAICAgABAAEA////AAAAAAD+/v4AAQECAP39/gD+AQEA/f4AAP7+/QAEAAMAAAAAAPv7+wAEAwIAA/3+AAABAgAA//4A/P3+AP//AAAAAQAABAQFAP3+/wD+AAEA/P4AAPT3+AABAAIAAQEAAPr8+gAGBAcABwQFAP3+/gD//PwA+vr6AAEBAgAEAwUA//7+AAMEBAAFBQUA/f7+APz8/AD+/v4ACQgJAP39/QD6+voACAgIAPz+/QD6/PoABgUFAPr8/AABAAEAAAABAP///wD9//4ABwEEAPz/AAD+/f0AAAIBAP39/AABAQEAAAEBAAIAAQD/AP8A/P/+APv+/AAEBAQAAwICAAMBAgAAAQAA+fr5AP4AAAACAgIAAwMBAPf4+AD6A/0ABwgIAP///wACAgIABAQEAPz9/QADBQMA+/v6AAUDBQAEAwUA+fv4AAQEAgAC/wEA+/v8AAgGBgD3+vkA9fj3APn6+wAWExcABQIDAP38+QD4/PkACAcHAPv9/QAAAP8AAwMDAAoEBQD5+PcA+/37AAH//wADAAEA+//9APn7+gAEAgQAAwIEAP7++AAKBwkA+fv6AAECAgD/AAAAAQEBAP39/gD+//8AAQEBAAIAAAD8/v0AAAAAAAH/AAD8//4AAwIDAAIAAAD4+voA//8AAAcDBAAAAAAA/wD/APn6+gD3/PoAAgMCAP4BAQAFAgIA/f7+AAQBAgAEAgMABAACAAwJCwAFBAUA5O3qAAMEBAD9/v4ABwQFAAcFBwD+/v4A+/v7APj5+AAIBwgA/wAAAAkHBwD9/fwA+fz9APb4+AABBAMA+Pn4AAICAgD+/v4ABAQFAAIAAQAAAQAACgYHAAYEBADy9PQAAAAAAAkJCAD6+/oABgUFAAECAgD08/IA/P39AAMCBAD7/PsAAAEAAPf6+AAOCgwABAIDAAgIBwADAwQA/P39APX29gADBAMA/P39AP4BAAD//f8AAQICAP//+wD7+/oABQQFAP3//gADAwMAAQEBAAECAQD09vUA9ff1AAYEBgD+//4ACgcIAAH/AAD9/PwACAYHAAMDAwAGBwYA7u7uAPz9/QAGBgUA+vr5AAsKCwAIBgcADAwNAPr4+AAFBQUA9/r5AAMCAwACAwIA/P/+APb39AD19/YAAQICAAICAAAA/wAA9vb2AAQDBQD9/fwAAAACAP7++wD2+PUAAAD/APr+/AAAAQEABQIEAAMBAAABAQEABwUGAAIBAQD9AP4ACAYFAAMCAwALDQ4ABAQCAPj3+ADz9fYA/QD+APX39wD6/PsAAAD/AAAB/wD/AP8ABAQEAAL/AQD/AQAAAAAAAP0B/wD+//8AAAEAAP3+/QD/AAAA/wEAAPz//gD7+fkAAQICAP8AAAAEAgMA/wAAAAMBAAABAQEABAUDAAcFBQADAAEAAQEBAAICAgD+/v4ABQIEAAcFBQD9/v0AAQEBAAAA/wD5+voA+f38APT4+AD9/v0AAQABAAABAAD+/v8AAQEAAP/+/wAAAQAAAgIDAAEGAgD3+vkAAAAAAPv9/AD9/f0AAwMEAP///gD+/v8AAQIBAP79+wAA/v8ABQIDAAQCAwACAQEABgUGAAAAAQD+/v8AAgIBAP8AAwD+/f4AAwMDAAIAAgAEAQIAAP4AAAgGBgAEAwQACgcJAAABAQACAQEABAECAP7+/gADBAQA+vr4AP8EBAADAwMABQQGAAEBAwD9/f0ABgIEAAUFBQD+//4ACQkHAP/+/gD+/wAA/wABAP8AAAACAgIAAwIBAPv7+gD8/PwAAgEBAAICAgD+/v4A+/v7AP79/QAAi4l0dgT8/f0AAgICAAEBAgD/AP8AAAAAAAMDAwAAAAAA/f39AP///wACAwMAAAAAAP///wAAAAAAAAAAAAICAgACAQEA/v//AAEBAQAAAP8A//8AAP///wACAgIA/v7+AP39/QD///8AAgICAAAAAAABAQEAAQEBAP///wABAQEAAAAAAAAAAAD///8A/v7+AAICAgACAgIAAgICAP78/QABAgIAAQAAAAMDAgAAAQAAAP8AAP/+/gD+AAAABQQEAAIBAgD///4AAgABAP///gD///8AAP7/AAADAwD//v8A/fz7AAUEBAD+/f0AAAD/AAQCAgABAQEAAQEAAAQCAQD//v4AAgMDAAICAgD9/PwAAwMDAAAAAAAAAAAA//7/AAIDAQADAgIAAgIBAAEBAQD9/f0AAf7+AAEBAQAAAP4ABAQEAAEBAQAAAAAAAAAAAAMCAgD+/f0AAgIBAAMDAQABAQEA/v7+AAD//gACAQAA/v7/AP7+/gACAgIAAAAAAAEBAQACAgEAAAABAPz8/QAFBQUA/v39AP8AAAADAwMA/v7+AP///wAAAP8AAAAAAAICAQAAAAAA/v79AP///wAAAAAAAwMDAP//AAD8/PwAAwMDAAAA/wABAQEAAAAAAAAAAAACAgIA/v7+AAAAAAAAAAAAAgICAP//AAD///8AAQAAAAABAQACAQEA/gD/AAACAAADAgMA////AP///wABAQEAAQEBAAAAAAD+/v4AAgICAP///gACAgMAAgICAP///wAAAAAABAQEAP8AAAAA/v8AAP8AAAMCAgD9/f0A/v7+AAICAgAB/wAAAgABAP///gD+//4AAwICAP///wABAQEA/v7+AP8AAQAAAQEAAP8AAAIDAwABAgMAAAD/AP7+/QD+/v8AAwIBAAD/AQABAAEAAQECAAMDAQD///4A////AAMDAwD///8A/v7/AAEBAQD9/f0A/v4BAAMDAQAAAAAAAAAAAP39/QACAgIAAAAAAP///wD///8AAAAAAPz8/AABAQEAAgICAAAAAAD+/v0AAgICAP7//wD+/v4AAQEBAAD//wAAAQEAAwQDAAMAAwD7+/sA/Pz8AAICAgD8/PwAAgIDAP39/QACAgIAAAAAAP39/QABAQEAAAAAAAEBAwD//wAA/f39AP///wD5+foA////AAEBAgABAQIA///+AP39/gABAQIA/Pz+AAAAAQD///wA/f3+AAICAgABAgEAAgACAP4AAAD9//0AAP8BAAABAQABAQIA/v8AAP7+AAD///0AAgIDAAMDBAD7+/sAAAEBAP/+/wD+/v8A/P39AP8AAQD///4AAAAAAP7//wAAAAAAAQECAP7//QACAgMA/v//APz8/AAAAAAA/v8AAAIDBAAC/v4A/wD/AP3+/gD/AAAAAAEAAP3+/gD+/gAAAAEAAAAAAQD9/v8A/v8AAP/9/QABAQEA//7/AAABAQD/AAAA//8AAP7+/gD///8AAQEDAP7+/gAAAQAAAgICAP///wAAAAAA////AAMDAwD+/v4AAAECAAEBAgAAAQEAAQECAP///wAA//8A/v7+AAEAAAACAgIAAAAAAP3+/gAAAAAAAAAAAP7//wACAgEAAgICAP///wABAQEABQQEAP/+/wAAAP4AAAAAAAQEBAD//fwAAAAAAAQDAwAAAAAAAwMDAP///wD9/f0AAAD/AP8C/wD//wEA/f3/AAICAgAEBAQAAP7+AP///wAAAAAA/wD/AAD+/wABAgEA/v7+AAIBAAAAAP8A////AAQEBAD//v0A/v7+AAMDAwAA//8AAAAAAAEBAQD+/v4AAwMCAAMDBAD+//4AAP//AAQEBAD8//4A/v/+AP4AAQACAgIAAP39AP7+/gABAQAAAAAAAAEBAgAAAAAAAAAAAP///wD///8AAwIDAAEBAAD///8AAgIEAAEBAQABAQEA/P39AAIBAAACAgEAAP8CAAABAQAAAAEA/v7/AAICAQABAgMAAAECAP39/wACAwEA//8AAP//AAAAAP8AAAAAAAAAAAADAwMAAAAAAAMDAgD///4A////APz8/QD///4AAgICAAMDAgACAgMA/v7+APz+/QADAgIA//8AAAEBAAD///8AAAAAAAAAAAD8/PwAAAAAAAECAQD///0AAQEBAP//AAACAgMAAAD+AP///wABAQEA////AAEBAQD+/v4AAAAAAAAAAQABAQEAAAAAAAEBAQAAAAAA//8CAAICAAD+/v8A/f39AAICAgACAwIAAgICAP39/QAAAAAAAQEBAP///wADAwMA/v7+AAICAgD///8AAQEAAAEBAAAEAwMA/Pv7AP/+/gADAwMAAAD/AP7+/QD+/v8A////AAUFBAABAQEA/f39AAAAAAD/AAAA////AP7+/gACAgIAAAAAAP///wADAwMAAwMDAPz8/QD+/v4AAAEBAAIBAgABAgIAAQEBAAIBAQD/Av8A/v7/APz8/AD///8A/Pz9AP7+AAD+/v8A/gD+AAABAQD+/v0A/f3/AAsKDAD9/v8A+vf5APb3+QD6/f0AAAECAAYGBwAAAAAA+/v7AAsHCwAGAwUA+f76AP///wAAAQAA/v79AAAAAAAFBAQAAQEBAAICAwACAgIA////APz8/AD19/YABgQFAP3+/QD4+fkAAwMDAAH7/wD9/f0AAgEBAAEAAAD+/f0A/f7/AAUEBAAEAgQA/gL+AAABAQADAgIAAP//AP78/AADAwMAAgECAP3+/gD7//0AAQMDAP/+/wAAAgEA//8AAP4A/wAFBQUA/P7+AAL/AAAGAwQAAQICAPb49gAAAQEABAQFAPn6+QAGBAQA+/r5AAgHBwDx8/kA/gH/AAICAwD///8A/f39AAICAwD2+vgA/v39AAYDAwABAgIA9fr5AO/y8QAVEBIACgkKAPP49gAKBggA+Pr6APz+/QD7+/sACggJAAkHCAD9+PYABQUEAAECAgAA/P8AAf8BAAL/AQAFAwQAAAAAAAMCAwD4+fcACQUHAPf5+QD7/f0A9/n4AP0A/wD9/v0AAwICAP//AAADAgIAAgIBAAECAgD9+/oABwoGAPD18wAAAAAAAgIBAP7+/QABAgEA/AD/APn9+wAA/QAAAP//AAEFBQACAgIAAgABAA0KCwAC/wIABAIFAOv08QD5/fsADAMEAP3+/gAGBgcA/vz8AAIFAQD8/foAAgQCAAQEBAD8/fwABAMEAPv+/AD6/vwA/P38APv7+QD/AAAAAAEBAAABAQD6+/oADQkLAAMAAwALCwgA+fv7AP7+/gALCAgAAP7+AAMCAgAEAwMA9PT0APX39wADBAMAAwIDAAMCAgDz9/QA/wABAAMCAgADAwEA+vv7APr29gD7/f0A+/v6AAsGCwAJCQoA8e/xAAIBAQADAwMA+/z7AAMDAwAB/v0ABQIDAAMCAwAFBQQA8vTzAPL59gAEBQQACQgIAAkGCAAA/wAAAQEBAPz9/QAIBQYAAwYFAPHy8gD//v8ACgkJAPb29wAIBggABgUHAA8PEgD3+fkA/Pn6AP7//gD9/f0ABgQFAPn6+gD1+PcA/P77APv+/QAEAQAABwQGAAEBAQABAAEABAQDAP79AQD8/fsA/Pr7AAQCAgD/AAAAAP38AAICAQAEAQIACgkIAP///wD+/f0ABwYFAAkKDwAFAgMA/P3+AAICAgD09PQA7vDwAPX7+QD+/wAABQMEAAQCAwAFBAMA/f38AP7+/wD9/f0A/AH/AP39/QAAAgIABAABAAEBAQABAQIAAgICAPn6+gD5+/sAAgQDAAICAgAEAQMABgQEAAEAAAACAgIABAMDAAQCAwABAgIA/f7+AP39/AD+/v4A/fz9AP7+/gAFBwQA9vv5APf6+QD9/f4A/gD/AP3//gD9/f0A/gIBAAEBAQAFAgQAAwIDAPz9/AAAAAAA/wL/AP7+/gAEAgMA+/v7APv9+wADAwMAAwABAAQEBgADAgIAAQABAAQDAwADAAIAAwICAP8A/wACAAEAAAD/AAIBAgACAQIAAwIDAAIEAgD5+/oAAAEBAP0CAAADAQEABwQEAAgGBgAFBQUAAAAAAAAAAQD+/v8A+vv6AAEAAAD6AgIA/fz9AAQCAgD///8A/v//AAcBAgD8/P4A/v78AP8BAAAFBgYA/f39AAEBAAD09PQAAgICAP/+/wACAgMAAwMDAP3/AAD7//0A/P37AP39/AADAwMAAQEBAP3+AAD+/f0A/gIBAAQEAgMAAAAAAAMCAgD7+/sAAQEBAP///wD///8AAgICAP4AAAD/AQAA//7/AAEBAQAAAAAAAf8AAP38/AAAAwQAAQECAAEBAQABAf4AAwMCAP39/gAAAAAsMWLYAAAgAElEQVQAAAAAAAAAAAACAgIA////AAEBAQACAgIA////AAAAAAD///8A/f39AAMDAwABAQEAAQEBAAAAAAAAAAAAAQABAAEBAQABAQAAAQEAAAEAAAD//v8AAQEBAP///wAA//8A////AP7//gAB//4AAgICAAIDAgAA//8A/wD/AAD//wAEBAQAAgEAAP///wD+//4ABQUEAP7+/gD//vwAAgEBAP38AAACAgIA////AP38/AABAQEAAwMDAAEBAQD///4AAQD/AP/+/wD/AgAAAAACAAEBAQACAgIAAgICAP///wAAAAEA////AAAAAAACAgIA/v7+AP39/QACAgIAAwMDAP///wAAAP0AAAD/AAICBAD///8AAAD/AAAA/wD9/fwABgYGAAD+AAAAAAAAAQEAAAEA/gD//f4AAQABAAAAAAD///8AAP//AAICAgD///8A////AAH/AAACBAMA+/v7AAICAgD+/v4A/v7+AP7+/gABAQEAAQEBAAICAwD+/vsA////AAQDAwD7+/sAAgIBAPz9/QAAAP8ABAMDAAAAAAABAgIAAP//AAEAAAABAQAAAv8BAAECAgAAAAAA////AP///wD///8AAwMDAAAAAAAEBAQA/v7+AAQEBAD+/v4AAAAAAAICAgAAAAAA/v7+AP7+/gAAAf8AAv//AAIFBQAA//4AAP//AAECAgACAAAA/wD/AP4AAAD///4A//8AAAEDAgAA/wAAAAIBAP/+/gD+AAEA/wEAAAEBAgD8/v4AAQH/AAABAQD+AP8AAf7+AAEBAQD//wEA//4AAP7+/wADBAIA/v7+AAAAAAAAAAAAAgICAAEBAQD8/PwAAQEAAP///wABAQEA////AAAAAAD9/f0AAgICAAAAAAD///8AAQEBAAICAgD5/PsAAgABAAAAAAABAQIA/v7/AP4B/wD/AQAAAwQDAAEBAQD7+/sA//39AAAAAAD///8AAQEBAP///wAAAAEA+/v7AP///wADAwQA/v7/AAICAwACAQEA//8AAP79/gD8/PwAAAAAAP7+/gADAwMA/P7/AAMC/wAAAQEA//4BAP8A/wD9/f0AAQEDAPz9/QABAQIAAgMCAAEAAAD+/v8AAAD/AP//AQABAQMA/v7/AP39/wACAgIA/f7+AAAAAAAAAAAA////AP3+/gD/AAAA//8AAAABAQD5/PwA//3+AAABAAAAAAAA///+AAEAAgD+/v8AAAH/AAABAAD/AAAA/P3+AAAAAAAAAgIAAf//AAECAQD//gAA/v//AP///wD+//8A////APv8/AAAAgMA//8AAAICAwD///4AAP7+AP7//wD///8A/wACAAEAAQD/AP8A/wD/AAMDAwAAAAEA/v3/AAECAAD///8A/f39AAAAAAACAgIAAQEBAAICAgAAAAAAAAAAAAECAAD9/v0A//8AAAQCAwABAQEA////AP///wACAAEA/v7+AAMEAwADAQIA/v7+AAEBAQD/AAAAAQAAAAMCAgAAAAAA/Pz9AAIBAQACAwIAAQAAAP7+/gAEAgMA//79AP7+/QAGBQYA/v38AP8CAgAEAwIAAgAAAAUFAwD//v4A//8AAAAAAQD///8AAf8AAAEBAgABAQAA//4AAP3//gAB/wMAAwMDAAD//gD///8A/v7+APz8/AABAQAAAwIBAAIBAwABAgEA/v/8AAAAAAADAwQAAgIAAP3//gD9+/wAAAAAAP8BAAAAAQEA////AAICAgABAQEABAQEAP///wAAAAEA////AP///wD9/f0AAgICAP///wABAQEA/v3/AAICAgD//v8AAQEBAAEBAQD+//4AAQIBAAICAwAAAP8AAQEBAAIDAwD///8A/v7+AP7+/gACAgIA////AP7+/gD+/wEAAwMDAP7+/wAEBAMA/v/9AAQDAwD9/f0AAAAAAAAAAAAAAAAAAAAAAAICAgADAwIA////AAAAAAD+/v4A/v7+AAEBAQAAAQEAAQEBAAAA/wD9/fwAAQEBAAAAAAADAQEA/v7+AAIAAgD/AAAABAUCAAMDAwD///8A//8BAP///wACAgIAAAABAPz8/QABAQEAAQEBAP7+/gD///8AAAD+AAEBAQABAQEA////AP//AAD+/v4A////AAAAAAD9/f0A/gAAAAIBAgD9/f0AAQECAP///gAAAAEAAgIDAP7+/gD//wAA//8AAAEBAAABAAAAAQECAP7+/gD8/PwAAgICAAICAgAAAAAA/v7+APz8/AACAgIAAQEBAAEBAQADAQIAAQD+AP///wAAAAAAAQEBAP7+/gABAQEA/f3+AP79/gACAwMA+/z9AP4B/gAB//8AAAD/APz8/wADAwIAAwEEAPj6+QACAgIABwgHAPb4+AD9/wcABgUEAAABAAAAAQAAAAICAP7//wACAgQA+/34AAAB/gAFBAUAAgECAAABAAD6/P4AAgEAAAAAAgAFBQYA+Pr5AAEBAQADAgMAAAAAAP39/AABAQUA/v3+AAICAwAAAAEAAAAAAAICAwD7/PwAAwIDAAYFBgD+/v8AAAEAAAUGBgD4+fgAAP//AAkICQD6+/oA/v78AAMEBwD6/PoA/v/+AP4A/wD//P4AAgMCAAABAQD+/P0A/QMBAAABAAABAAEAAgICAAD9AAD//P8AAP/+AAAEAgAA/wAA////AAUEBQD/AAAAAwICAP7//wAAAAAAAwMCAAMDBAAFAQMA9fj2AAQFBQD///8A9/v4AP/9AAAAAP8A/wEBAP4BAAD9Af8A+v78AA0HCQAB/wEAAgIBAPn59wDs7+0ABQQEAAwHCgAGAwQA+P74AP7+/QD+AP8A+v37AP///gACAQIACwkLAPX49wAHBQcA+P37AAIAAQD3+vcA////AAEDAQABAQMABQYFAPb49wD+/wAA/f/9AP7//gD//v8AAAIAAP///wABAAIA+vr7AAIAAAAGAwYA+/v5APj8+QACAAIA/f37AAMCAwD+/v0A+Pz8AAQCAwABAQAA+/37APv++wAFAgUABQMGAAUCBAADAwQA+/78APj6+QAIBAYAAgACAAYHBQACAAEAAAQEAAEBAAABAQEACAQFAP7+/QADAQIA+v39APz+/gD6+/sA/gEAAPv9/QAAAAAAAgICAP8BAAD8/v0A/f39AAsJCgALCwsA9PT0AAgGBgD+//8ABgQEAAoICQD5+/sA9ff3APz7+wAAAAAAAgYCAAABAgD9/v0ACwYLAAkIBwADAwIA9/j6APn6+gACAgIA////AAEBAQDx8PAA////AA4NDQAFBQQA+fn3AAD//wADAQEA/f7/AAACAADz9fQA7vXxAP7/AAAMBwsADAgKAAQCAwD4+fkA/QD+AAICAgACAgIA9fP0AP///gAICQgA9ff2AAQDBAAFBAUABgUHAAEAAwACAP0AAwIDAP/+/wAJCAgA/Pv8APf5+QD3+vgAAQEBAAYEBgABAAAABAQFAAAAAAD+//8AAP//AP7//QD5+voABQMCAP7/AgD8/PsACAQGAAcIBwAGAwQAAf/+APn9+gAEBAQADgwNAAUIBgD39vgA9ff2APfw7gD0+PcA+/79AAACAQAD/wEA/wH+AP78/gD+//0A/v/+AAUFBQD++vwAAP8AAAEBAQADAQIAAgEBAP8AAAD+/v4AAQICAAQCAwAHCgYAAQABAP/+AAACAgIABgUFAAEA/gD9//8A/Pz8APoB/QD+/v4A/P7+AAAA/gACAQEAAQECAAAA/wDy9/UA+fz7AP3//gADBAQAAP7/AAD//wAGAwUABQQFAP/+/gABAQIA/v7+AAH/AQABAQEAAgEBAAAD/wAHBgYAAQEDAPz8+wD/AP4A/f7+AAH//wACAAEABAMFAAQFBQD8/PwA/gD/AAH/AAD//wAACAYGAAkGBgAGBQYACgkJAPz7+wD3+PgABQYFAAD/AAD+//8ABAICAPz8/AD8/PwABAQEAP7+/QD5+vkA/P79AAAAAQAFAwQAAgIBAPn7+QAAAAEA/wH/AAD9AAAB/AAABQIEAAIDAgD++/wAAQEBAPv8+gACAgEAAgICAP3+/QD9/v0A+vv/AAcFBgAGBAUAAf//AAD+/wD+/v8AAwMDAAYEBQACBf8A+Pj3AAQFBQUA/v7+AAAAAAACAgIA////AP39/QACAgIAAAAAAAECAQD///8AAgICAAEBAQAAAAAA////AAD/AQD/AAAA////AAQBAwACAgEAAAAAAAEBAQD///8AAgICAAICAgD+/v4AAQEBAAAAAAD+/v4AAAAAAAEBAQABAQEA////AP///wD+/v4ABAQEAAAAAAACAAEAAQAAAAMDAwD//v4A////AAAAAQAAAAAAAAABAAEBAAACAgIAAgABAAMDAwAA/f8ABQUFAAMBAQD//fwABwYHAAcFBQAA/v4A/f79AAQDAwACAgIA////AAD/AAAAAQEA/v7+AAMDAwACAgEAAAAAAAIBAQACAgIAAAAAAP/+/wADAgIA/v/9AAEBAQAAAAAAAAAAAP39/QAAAAAA/f39AAICAgACAgIAAAAAAP///wABAQEA/v7+AAICAgACAgIAAAAAAP///wD///8A////APz8/AABAQEAAQEAAAICAgD///8A///+AP///wABAQIA////AAEBAQD/AP0AAQEAAAECAQABAP8AAAD/AP79/wD/AAAAAwICAAEAAQAB/wAABQQFAP7//gD9/f0ABQUFAAEBAQACAgIA/v7+AP7+/gABAQEAAgEBAAD//gACAgAAAQEAAAUEAwD8/PwAAQEBAAAAAAACAgIA////AP7+/gABAQEAAgICAAAAAAD9/f0A/f39AAYGBgD///8A/f39AAQEBAABAQAAAQEAAP///wD9/f0AAgICAAEBAQAAAAAA/v7+AP///wADAQIAAQL/AAAAAAADAgMAAP39AAMBAQD+/v4AAgECAP79/QD///8AAQEBAP///wAB/wAAAAABAP///wD9/f0A/v7+AAMDAwACAgAAAAAAAAAAAAABAQEAAQMDAAD+/wABAQEA/v79AAEBAAD//wAA////APz8/AACAgIABQUFAP7+/gAEBAQAAAD+AP///wD9/f0A////AAICAgD///8A/v7+AP7+/gD///8A/f39AP39/QAAAQAA/v/+AAUDBAD9//4AAgQDAAL//gD8/P0A/f3+AAQEBAADAwQA/Pz8AAAAAAAAAAEAAAAAAPz8/QADAwMA/v7+AP//AAAA/wEA//7+AAECAgD/AAEAAAAAAAAA/wACAgIA////AAEBAQD/AAEAAAAAAP7//wABAAEA+/39AAD/AAAAAAEAAAD/AAICAgAAAAAA/v7/APz9/gD///4AAAABAAMDAwAAAAAA////AAECAgD8/f0A//7/AP3+/gAAAQEAAf//AP//AAAAAAEA////AP8AAAADAwMAAAMEAP7+/gD///8A/P39AP///QACAgMA/f3+AP3//gD9/v8A/wEAAAEBAQD+/v8A/v8AAPz7/QAAAQEA/P7/AP3//wAAAgIA//7/AAECAwD/AAAAAQEBAPv8/AAAAgEAAgMCAAD//wD/AAAA//4AAP///wD+/f8A/wD/AAAAAAD///8AAAECAAD//wABAQEAAQEBAAEBAQACAgIA////AP///wACAgIA/v7+AP39/QACAgIA/v7/AP3+/gABAQEAAwMDAAD//gD+//4AAgQDAP/9/gD/Av8AAQEBAAAAAAABAQAAAP8AAAICAgABAQEAAP//AAEBAQD//v8A/gD/AAEBAAD+AgEAAgEBAAEBAQD+/f0AAwIDAAIBAAAAAQAABAMEAPz8+wAA//8AAgICAAEBAQABAQAAAQIAAAAAAAD+/v4AAwIDAAEAAAD///4AAAACAAIDAwACAQMAAAAAAP7+/gAAAAEAAAAAAAAAAAD+//4AAgICAAEBAQAAAAAA//8AAAAA/wACBAMA////AAECAgABAQEAAAAAAP///wD+/v8AAQEBAP7+AAACAgAAAwMDAPz8/AADAwMA////AAMCBAD+/v8AAgICAAAAAAABAQEA////AP39/QD/AQAAAwMDAP7//gAEBAQA/Pz8AP37+wAEBAQAAgICAAAAAAD///8AAAAAAAICAgD///8AAAAAAAECAQABAgIA//z+AP7/AAAA//8AAQEBAP///wABAQEAAAAAAAAAAAACAgQAAAD/AAEBAAD///8ABAQEAAAAAAAAAP8A/f39AAAAAAD+/v8AAAD/AAQEBAAAAQEAAQEAAAQEBAD///8A/v3/AAAA/gD+/v4AAgIBAAMDBAAAAAAA/f3+AAEBAgD+/v4AAQEAAP7+/gAAAAAAAAAAAAICAAACAgIA///+AP39/QAAAAAAAgIDAP7+AAD//wAAAAECAPr9/QAA//8AAgIBAP4AAAAA/wAAAgIBAP8BAQABAQIAAf/9AAAAAAD+/v4A/f3+AAUFBAAAAAAA/P39AAMBAQD//v4AAAEAAPz8/QADAwEAAAD+AAICAQAAAAEAAQEAAP39/gD///8AAgICAAICAgD+/v4AAQH/AP///wD///4A////AP39/QACAgIA/v4AAAD/AAD//f8AAwQCAP75/wAB/wIAAQABAAUFBgD7+/wA/f39AAUGBgADAwMA/f3+APj5+gAGBgIAAQAAAPj4+QAKCgkAAwIDAP4AAAD9/PwAAAICAP39/QAAAAEAAwMEAP3//gD9/f0A////AP39/gADAwAA/v7+APz9/QD8/f0AAgICAAICAgAAAQAA+fv6AAgGBgAEBAMA9/n4AAMEAQAGBQUA+Pj4APj5+AAEBAQACAgHAPz8/gD///8AAwMEAAIAAgD+Av4A/v39AP79/QD7/fwA/wEAAAQBAwAAAP8AAAIBAAABAAAAAAAAAv8BAAH/AAABAgIABQAAAAABAQD6/fwADwQMAAIEAwD7/v0AAPz7AAQCAgAAAAEA7fHwAAgJCAD5+/sAAf4BAP4A/QAGBQUA/wEAAP3+/QD5+/sA+f37AAf7BQAPCgsA+v79AAQDBAD7/fwA/Pz8ABIPDwD9/f0ADAoLAPD18wACAP4A+/v6APoAAAD9/v8ABgYIAAYEBgAFAf4A+/f7AAICAgD/AP8AAQAAAPf39QAJBwgA9fn2APj8+wD+/v4ABAMDAAL+/QD/BAMA/wAAAAECAgAHBQUAAgEBAP8AAAACAgEA9vj3APz9/AAFAwUA/v//AAMAAAD+//4AAQH/AAYCAwD6/fwA/v7+AAUCBAAB/wAABAECAP7//gD//PwA/P/9APj5+QAIBgcABwUHAAIBAgD5+/oADQwNAP7+/QAA+QAAAgICAP7+/gD///4ABAMEAPz8/wAAAAAA/v79AAIC/wADAgMA/f/9APv+/QACAQEA/f39AAkICAD7+v0AAgIDAP3++QD/AQAAAwIDAPv8/AD09vcA+fv7AAICAgADAgIAAwMDAPT39gAJBQcAEA4NAAoKCwD09PIAAwEBAAMBAgD9/v4ABgcGAPf49wD//wEAAgEBAAACAQD4+vgAAAIBAAAAAAAFAwQAAP79APT29QD1/PcA/gD/ABALDgAOCQoABQMEAPn8+wD+AP8AAAEBAA4PEAD19PMAAwYEAAH/AADr8O0AAwIDAAsNCwAGBAUAAP79APj39AAHBgUAAgMCAPv6+wD7+/wA+/38APwA/gACAwMABAIDAAYEBQD7+/sA/v3+AAQEBAD+//0A9Pf2APv7+wAGBQQA/P79AP7+/gADAwMABQMEAAEAAAAA//8AAAIBAAYFBgAD/wIA+/v8APj6+wDy9vQA8fTzAP0A/wABAQEA/P/+AAL+AgD9//wA//0AAAUEBAABAP8AAP8AAP78/QAGBAUAAgEBAP7+/gAAAAAA/gD/AAD+/wAHBQYABQMDAAIDBgADAwIA/v4AAAMDBAD+//4A/P39APn7+gD6/fsA/QD/AAMCAwADAQEACAUEAAQBAgD8/f0A/f/+APz//wD5/fwA/gAAAAYEBQAEAgMABAQDAAMCAgD//wAAAAEBAPz/AAD+//8A//7+AAgFBgADAgMAAAAAAPz+/QD7+/0A/f/6AP7+/wAAAP4ABAMEAAMCAgABAAAAAQIBAPv8+gD//P0AAgQDAAD/AQALBwkADgkIAAMEBAABAQEA9/b2AAABAQD9/v0A+fX6AAUFBQACAQIAAQEBAAABAQAC//8A/f39APz8/AD8/P0ABAYFAAYDBAAEAgIAAAAAAAQBAQADBAQA////AAAAAAACAQEA////AAQEAgD+/v4A/f3/AAICAgAGBgUA+/v7AAEBAQADAwMAAQEBAAICAgD7/vwA+f79APP29QD6/f0A/f/+AAICAwAGAwQAAwEBAAT9/f0A/v7+AP///wACAgIAAAAAAPz8/AABAQEA/f39AAEAAwACAwIAAAAAAP39/QACAgIAAQEBAAICAgAAAAAAAwMDAP///wABAQEA///+AAICAAAAAAIA/Pz8AP7+AAD///8A////AAEBAQABAQEA////AP7+/gACAgIAAQEBAP///wACAgIA////AAIBAgAA//8A/wAAAP///wAA//8AAAAAAP///wAEAgIAAQEBAAEAAQAAAAAA/v7+AAIBAQACAQEA////AP4A/wABAQEA/v7+AP39/AAB/v8AAgIBAP///wD9/v0AAgEFAAICAgD+/v4ABgQEAP///wD+/v4AAAAAAAIDAwACAgIAAAAAAAD//wD9/f4AAQEAAAABAAABAQEA////AP7+/gAAAAAAAAAAAP7+/gAIBQQAAAAAAP8AAAD++/wAAv8AAAIBAQAA/wAA/wEAAAMDAwD///8A/v7+AAAAAAAAAAAAAAAAAP39/QD+/v4ABAQEAP///wD//wAAAgICAAEBAQAAAAAABAUDAP39/QAAAAAAAgMCAAAA/wD//wAAAQEBAP///wAAAAAAAQAAAAMDAwAFBQUAAQEBAAQEBAAA//8AAQECAP8A/wD+/v4AAwMDAP7//QD///8AAQEBAAAAAAABAQEA/Pz8AAICAgD9/f0A////AP///wABAQIAAQEBAPz8/AABAQEABAQEAP///wAAAAAAAQEBAP39/QABAQAAAwMDAAEBAQAAAAAAAgICAP7+/gABAQEAAgICAAD//wADAgIA/gAAAPf5+QAHBQUAAgICAP79/gACAgIAAP8AAAQDAwD9/v4A/v7+AAEBAQABAAAAAP8AAAAAAAAAAAAAAAAAAAAA/wABAQIA////AAEBAQABAQEA////AAEBAAADAwMA/wD+AAICAQD9/f0AAgICAP///wAAAAAA/Pz8AP///wABAQEAAQH/AAEBAQAFBQUA/Pz8AAEBAQD///8AAgICAAQEBAD9/f0A/f39AAEBAQABAQEAAwQEAP7+/gD+/v8A/f77AAEBAQD///8A////APv7+wACAgIA////AAQEBAD9/f0AAAAAAAICAgD+/v4AAwMDAAIBAAABAQIA/f39AP///wD9/f0AAQEBAP///wD+/v4AAAAAAAIDAwD/AAEAAgICAPz8/AAAAAEAAP8BAAAAAAAAAAAA////AP///wD///8A//8AAP7+/gD///8AAQEAAPv7+wACAgMA/v7/APr7+wAAAAAAAAAAAP8BAAD9/fwAAwECAP//AQD+AQAA//7+AAABAQD//QAA/f39AAAAAAAAAQEAAQECAP7+/wD/AP8A/wEAAAD/AAACAgIA/gD/AAAAAgD8/fsA/wEAAP8AAAD9/f8A//8AAP//AQAA/gAAAAECAP8B/wD+/v4A/v7+AP8AAAAA/wAAAAEAAP///wAAAQEA////AAEDAgD//v4AAAAAAAAAAAABAQEA/v7/AAAAAAABAQEAAAAAAAAAAAD8/PwAAgICAAAAAAD///8AAAAAAAQEBAAAAAEAAAD/AAAAAAD+/v4AAwEDAP//AAD/AAAA/f39AAIBAQABAQEAAP7/AAABAAD+/v8AAQAAAP39/QACAgIAAQAAAAABAAACAgEAAQABAAIBAgD///4AAQICAAMDBAAB//8AAQEBAAMCAgAAAf4A////AAICAgAA//8AAgICAAD//wD/AP8AAP8AAP///wABAQEAAgICAAAAAAAA//4A/v7+AAMCBAAAAP8AAwMDAP///wACAQIA/v7/AAIC/wABAQEAAQEAAP///wD+/v4AAgICAAICAQD///8AAAAAAAEBAQABAQEAAQEBAAEBAQABAQMA/v7+APz8/AAFBQUAAAD/AAAAAAABAQEAAQADAP8A/wAAAP0AAAAAAP7+/gD9/f0AAAEAAAEBAgACAgEAAQEBAAAAAAD9/f0A////AAEBAQD+/v4ABAQEAAAAAAD///8AAQEBAAAAAAD+/v4AAQEBAAAAAAD6+voAAwMDAAEBAQD9/v8AAQAAAAH//wD///8AAwMDAAEBAQD+/v4AAAAAAAEBAAD+/v4AAwMCAAICAgD9/f4AAP//AAIDAQABAQEAAQEBAP39/QAAAwMAAwIDAP39/QADAwMAAAABAAD/AAAA/wAA//4AAP0A/QABAQEA////AAAAAAABAQEAAAAAAAEBAQD9/f0AAQEBAAAAAgABAQIAAgID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/QACAgIAAwMCAAIDAgACAgEA/v7+AAAAAAAAAAAAAAAAAAMDAwAAAAAAAQEBAAEAAAD///8A////AP///wACAQEAAP7/AAEBAAD//v4ABAQDAP7//wAAAAAAAP7/AAAAAAABAQEAAgICAAAAAAABAQEA/v7/AAEBAQAAAAAA/f39AP7+/gACAgIAAAAAAP7//QAEAwUA/f3+AAAAAAABAQEA/v7+AAL/AQAA/v8AAgMBAAD//wD/AP4AAAH/AAD//wADAwEA/v/9AP///wABAAEA////AAEBAQAAAAAAAgICAAMDAwD///8AAAAAAP7+/gAAAP8AAAABAAAAAAD///8AAgICAP7+/gD///8AAAAAAAAAAAABAQAAAAAAAAAAAAADAwMA////AAABAAACAQEAAgEBAAAAAAD///8A//7+AAIAAQAAAAAA/f39AAAAAAD+/v4AAwMDAAICAgD/AAEA/P/+AAAAAAD/AgIAAQEBAAEAAAD9/f0AAwMDAAAAAAD+/v4AAAAAAAAAAAACAgIAAAAAAP///wD8//4AAQEAAP/9/QD///8A////AAMDAwAAAAAA/f39AAAAAAACAgIA////AP7+/gD///wA////AAAAAAD///8A/v7+AP///wD8/P0A/wH/AAICAwAA//8A/f39AAAAAAD/AP8AAQEBAP///wD+/v4AAAAAAP///wD+/v4AAQEBAP7+/gD+/v4AAgICAP///wAA/wEAAQEBAPv8/AACAv8ABQUFAPz9/QD+//8A/vz9AAIEAwD+AAEA////AAMAAAD///8AAAAAAAICAgD9/P8AAgICAP7+/gD+/v4AAAAAAAICAwD+/v8A///+AAICAgAAAAAA/v//APz8/QAC/wAAAQEBAAMDAwAAAAEA/Pz9AAEAAQD//f0A/gIAAAEBAAABAAEA/gICAP7+/wACAQEAAwMDAP4A/wD9/v0A/v4AAP8AAAD+//4AAAABAP7+AAD+Af4A/v//AP8AAAD+/v4AAAIBAP3+AAD9//8AAAIBAAIAAAD8/f8A/f39AP7//wD//wAA/f//AAICAgD/AQAA////AP//AAAAAAEAAQEAAP3+/gACAgIAAAAAAP///wD+/gEA/f78AAMDAwACAgIA/v7+APz8/AAAAAAAAgICAAEBAQD///8AAAAAAP/+/wABAP8A///+AAH/AQAA/v8AAP7/AP///wD+/v4A////AAMEBQAAAAAA/f/+AAUCBAD///4A////AAECAgABAQEAAP/+AP7+/AAA/wEABgQEAAAA/wAEAwMABQQEAAD//gAAAP8A///+APz9/wAFBAQAAgIBAAEAAQD///4AAwECAAD//wD/AAAAAQD/AAICAgADAwIA/f39AAEBAQACAf8A//8AAPn6+gAGBQMAAQEBAAICAgABAQEA///+AP8A/wD+/f4A/v8BAAEB/wAGBgYAAAAAAP39/QADAwQA///+AAAAAAD9/f0A//8AAAAA/wADAwEA////AAUFBQACAgIAAP8BAAIBAQABAAIA/wD/AAEBAQADAwMA////AAEBAQADAwMA/wD/AAABAQABAQIAAAABAP7+/QADAwMAAgICAAICAgAAAAEAAAAAAAAAAAAAAAEA/v7+AAEBAQABAQEAAQEBAAICAgD+/v4AAQEBAP//AAACAgQA/v7+AP7/AQAAAP8A/vz8AAEBAQAEAwMAAAAAAAEBAQABAQAA/f39AP39/QACAgIA/QD+AAIBBAD//f4AAgMDAP7//AD8/PwA/gICAAMDAgAA//4AAAAAAPz6+wADAgMAAAAAAAIAAgABAQEAAQABAP8AAAACAgEA/f39AP39/QADAwMAAQEBAP7+/gD7+/sA////AAAAAAD+/v4A////AAICAgD+/v4AAAAAAP///wACAgIAAAAAAP///wD9/f0A//7/AP///wD8/PwAAAEAAAD/AQD///8A/f7/AAEA/gABAAEAAwACAAICAgD8/PwA+vz8AAYGBAD///8AAgABAP7+/wD+/v8A/wD/AP///QD8/P0ABgYHAAAAAAACAgIA/Pv8AP39/gAEBAQAAQMDAPr6/gD//gAAAAEDAP3+/AAAAAEAA///AAMEAwD+9/0AAQIDAAAAAAAA//8AAgICAAUFBQD+/v8A/P7/AP3//wD7+PgABwUHAAwMDAACAgQA+Pv7APv9/QAEAQMACAYIAP3+/AACAwEA/v3/AAAAAAADAwMA////AAEAAQD///0ABQUHAPv7+gD9+/sAAwICAPv/+QD9/v4AAP79APr/+wAEAwAAAgAAAP8BAQD8/v4ACwgIAPf4+QACAQEA+/7+APj69wD9/wAACggIAAMCAgAGAwUAAQICAAMC/AAFAP4A+fz7AP0A/gACAgIABAIDAP4BAAD+Av8AAwABAAQDBAD+//8A/f39AAAA/wADAwAA+/79AAYEBAD/AAIA9/n5AP79/QD7AgEABQMEAPj9+wAJBggAAv8BAPn8+QD/Af8A+fr5AP//AAADAwMA/f78APv9/AD4+vkABgQFAAECAQD3+vcA/QAAAPf8+gAEAQIA+fz7APv8/AAFBAQA/fv+APn+/gAAAP4A/fz8APr//AAMBggACgcJAP79/gABAQEA/Pz9AAwJCAD2+fcA/P/8AAIAAwABAv0ACAYHAPP69wAA/wEAAP//AAMCAgAAAP8AAAH/AP39/QACBQIA/QD/AAQEBAAGAQMAAP4BAPz//gD/AP4A////APv8+wAFBgYA/wABAAYEBgAFAgMAAgICAPr7+wD+//4A/P/9AAEAAQAEAQIA+Pv5AAD+AAAGBAUA8vb0APf8+gAPCQ0ABQMFAPr7+QD+/v8AAQUDAAL9/QD8//4A/wACAAIDBQD+/vwA/P/9AAsBBgAFAQMABQQFAPn8+wD4/PoA9Pf2AAMDAwAGBAMABwUGAPr7+QACAv8A/f39AAICBwAEBgUA8/b1AAYFBQAHBAYA+vr9APf29wAGBgYA/fz9APz8/AAJCQkA9Pb1AAYGBQABAgEAAv7+APr5+QAHCwsABAMDAP4A/wD4+PkA+fv7APz9/QAC/QAADAgKAP/+/wD5/fsA+fv6AAYFBQAICAgA9PT0APH28wADAwQA/v//AAD+/gANCQsAAP//APn6+QD///8ACwsLAAgJCQD7+/kA9/f3AP39/QAAAQAA/QH+AAL/AQALCQwA/f39AAQEBAAHBAYAAwMCAPX29AD4+fkAAwMAAP3//QD3+fwACAcHAAgHBwAFBgQAAgMDAP7+/wDz+fgA8ff2APX59wADAgEABAADAAEDAwAFAQIA/wADAAICAgD9//4AAgECAPr8+gD///8AAgIBAAQAAgAFBAQABQQEAAQEBAD9/v4ABAIDAAAAAAACAQEA//7+AAD/AAAEBAUAAQACAP0A/wDy9fQA+fv7APv8/QAIBgcACwkLAP///gD+/v0AAQABAAcFBQD+AAAA///+AAMAAQAAAgIABAQEAAUEBAABAQEABgMEAAcFBgD8/vsAB/0DAAEB/wAA/wwAAgICAAD//wD+/v8A/wD/AAICAwACAgIABQQEAAICAgABAQAAAP/+AAEBAQD7+/sA/v3/AP8AAAD19gEAAgICAAEBAQACAQEAAQEBAAICAAABAP0AAgMDAAICAwAGAwMABg8PAPv7+wD+/v4A/v//APv8/AAA//8A/f39AAMCAwACAP8ABAMDAP39/QAFBQMABgYGAAMCAwAAAAAAAQEBAPr8+wD7/fwAAP8AAPv9/AD/Af8AAgAEAPz4+AD+//8AAQEDAPz8+wACAgIA/P39AAMDAwD/AP8ABgUFAAgIBwAA/v4ACwAHAAIDDQD9/f0A/f39APv8/AACAgIAAP8AAAMNEA+AAgICAAAAAAAAAAAA////AAMDAwABAAAAAwMDAAEBAQAAAAAAAAAAAAAAAAD///8AAAAAAP///wABAQEAAgIDAAAAAAD+/v4AAgICAAEBAQAAAAAAAAAAAP7+/gAAAAAA/v7+AAAAAAADAwMA////AAEBAQACAgIAAAAAAAAAAAABAQEA/v7+AP39/QACAgMAAP//AP/+/gABAAAABAMDAAAAAAABAQIA/v3+AAIBAQAEBAQAAgEBAAMBAAD///8AAQEBAAMBAQACAAEAAwEBAAUEBAACAQEABQUFAAMCAQACAQEAAgICAAEB/wADAgIA/v39AAMCAgABAQEAAQEBAAICAgAEAwMAAP/+AAICAgADAwMAAQL/AAQDAwAA/f4AAQABAAMBAQADAgIAAgEAAAUDAgD/AAAAAAAAAAAAAAABAQEAAQIBAAICAQABAQEA//8AAAEBAQABAQEAAP8AAAD//wACAAEA////AAICAgABAgIAAQAAAAEAAQAAAAEAAAEAAP///wD+/v8AAAAAAAAAAAD9/f0A////AAEBAQD9/v0AAgICAP///gABAv8AAAAAAP3+/QACAgAAAgIBAP///gAAAAAAAAAAAAEBAQACAgIA////AAICAgABAQEA///+AAAA/wACAgIAAAAAAP///wABAQAA////AP39+wAAAAAAAQABAAMBAgAAAAAAAf8AAAAAAAADAwQAAgIBAAEBAAADAwMAAQEBAP///wABAAAAAQEBAP7+/wAAAQEABAMDAP8AAAAAAP8AAAAAAAMDAgAEBAQA////AAEBAQADAwMAAgICAP///wD///8ABAMDAAIDAwABAQEAAQEBAAAAAAACAgIAAQEBAP///gAAAAAA////AAICAgD///8A////AAICAgD+/v0A/v7+AAQDAwACAgIAAgICAAAAAAD9/f0AAgICAAEBAQAAAP8AAQEBAP///wAAAP8A////AAAAAAD///8A/Pz8AAAAAAAAAQAABAQEAAABAQD+/v4A////AAICAgD+/v4A////AAAAAAD///8AAAAAAAQEBAABAQEA/f39AP///wD+/v4A/v7+AP//AAABAQIA/v//AP//AAAAAAAA/f79AP3+/QD9/v8AAQICAAEBAgD///8AAAAAAP///wD6+vsA+/r8AAAAAgAAAAAA/v/+AP7+/wABAAIAAAABAP39/gABAQEA/v7+AP8AAAD//v4A/Pz9AAICAgABAQEAAgICAP///wAAAAAA/v7/AP7//wACAgIAAQAAAP8BAQD9/f8AAAAAAP7+/wD+/v8A/v8AAP8AAAD+/wAA/f/+APv7/AD+/wAA/v//AAABAQABAgIA+/3+AP7+/wAAAQEA/v8AAAIDAwAAAQAA/Pz9AP3+/wD/AQEAAAEBAAECAQD//wAA/wAAAAIEAwD+/v4AAQECAP7/AAD+//8A/wEAAAAAAAD+/v4AAAAAAAEBAQD//gAA/v//AAAAAAAAAAAAAAAAAAEBAQABAQEAAQEBAAAAAAADAwMA////AAEAAQABAAEAAAABAAAAAAAAAAEAAAAAAAECAQAAAAAAAgICAAEAAAD+/v4AAgICAAEBAQD8+/wAAgEBAAEBAQAAAAAAAQAAAAEA/wAFBAQAAQEBAAH//wADAQEABAMDAP/+/QADAgIAAgICAAH/AAD+/v0AAP/+AAABAAD///4AAgEAAAEBAQAFBAMAAP//AAAAAAAA//4AAAAAAP///wADAgIAAgIBAAMDAgADAwIAAwMDAP7+/gABAQEAAQEAAAIBAQADAgMAAQIBAAICAQD+/v4A////AAAAAAABAQEAAQECAAEBAgD9/f4A////AAEBAgAEBAQAAQEBAP///wABAQEA//8AAAEBAQABAQEA/f39AAEBAQD+/v4A////AAICAgAAAAAAAAEBAAAAAAABAQEA////AAEBAgD+/v8A//8AAAAAAQAAAAAA////AAICAgD9/f0AAQECAP///gACAgMA//8AAP7+/wD//wAAAAD/AAICAgABAQEA/v7+AAEBAQACAgIAAgICAAAA/wABAgIA//7+AP///wAE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AQEBAAAAAAD//v4AAwMDAAD+/wADAgIAAQEBAPz8/AAFAAEA/wMDAP79/gAFBAQAAQAAAAAA/wD/AAAA/f77AAMBAgD/AQEAAgICAP3+/gACAQEABAQEAAIBAQD//v0AAAAAAAAAAAAAAf4A/v7/APv7+wAEAgMAAQAAAAEBAQD+/fwAAgMCAAAB/wAA/wAA/v/+AAICAwD///4AAgICAP7//gABAAEAAwQDAP39/gABAAEAAgICAP39/QD///8AAAAAAAMCAgD/AQAA//7/AP7+/QABAQEAAAAAAAUDAwD/AQAA/Pz9AAEDAwAAAgMAAQEBAP///gD9/f4AAQD+AAIDAQD///8AAQEBAAICAQD///8A/f39AAICAgAA/v8AAgECAP7+fhzqnQAAIABJREFU/gAA/v8AAP7/AP7//gD///0AAQEBAAEBAAAAAAAA/fz8AAAAAAACAgEAAgIDAAUDBAAAAQAAAP7+AAECAgACAAEAAAAAAAMCAwD+/v4AAgMCAP8AAQACAQEAAAAAAAABAQAAAAAAAP//AAD+/gABAQEA+/39AAMBAAD///4AAAAAAAAAAQD6+voAAAAAAAMDAwD///8A////AP7+/gD+/v4AAgICAAEAAQAAAQAA////AP39/QABAQEAAAAAAAMDAQD+/v4AAgICAP///wD///8AAAAAAAICAgD//wEA//8AAAICAgD7+/sAAAAAAP///wACAgIAAQEBAAAA/gAAAAAA///+AAAA/wABAQEAAAAAAP39/QAAAAAABwcHAPz9/QAAAAEAAQICAP38/AABAQEAAQEBAP7+/gD///8AAQEBAAEBAQABAQEA////AP7+/gD9/f0A/v7+AAMDAwD///8AAAAAAP/+AAD/Af0AAgMDAP7//gD//wAAAQEBAP7+AAD///8A////AP///wD///8AAgEEAPv7+wD+/f8AAgIDAAAAAAD+//8AAQICAAEAAAD9/f0A/v7+AAICAgD9/f0AAAIBAP79/QD//wAAAAEBAAICAgD8/PwA/v7/AP//AAD+/v4A/wD/AP4A/wD///8AAv8CAP8AAQD///4A/wAAAAABAwD+/v0A///+AAICAgD+//8AAwMFAAEBBAD9/v0A//8AAAAA/wD8/f8AAwMEAPz+/QD+/v8A/P3+AAIAAAD+AAAAAAECAP7//QAA//8A/wEAAP/+AAD+AP8AAAEAAP39/QACAgMA/f7/AAEBAQABAQEA/v/+AAAAAAABAgIA//7+AAMDAwD8/P0A////AAAAAAD+/v4AAgICAAEBAQABAQEA////AAAAAAD///8A////AAEBAAD/AAEA/wD/AAIBAQABAQEA/f39AAIAAgAA//8AAgIDAP38/AACAgIAAgICAP///wAHBwcAAP//AAAAAAADAgIA//79AAEAAAD///8AAAABAAIAAQD///8A////AAIBAQAAAAEAAP8AAAAAAAACAQIAAgIBAAD//wAAAAAAAQECAAQDAgAB/wAAAQEBAP7+/gACAgEABgYGAAAAAAAB//4AAQEBAAICAgAAAQEA/v7+AAICAgAAAAAAAwMDAAH/AAACAgIAAAD/APz9/AAEBAQAAwMDAAAAAAD+/v4A////AAICAgAAAAAABAQEAAEBAQD8/PwAAwMDAAEBAQD+/v4AAgEDAAICAwABAQEA/f39AP7+/gD9/f0AAgICAAAAAAD///8A/wAAAAABAQD///8AAQEBAAEBAQACAgIA////AAEBAQAAAAAAAgICAAAAAAAAAAAA////AAEBAgD///8A////AAAAAAAEBAQA///+AP7+/gAAAAAAAAAAAAAAAAD///8AAQECAP7+/wACAv8A////AAICAgD9/f4A///+AAEBAQAAAAEAAQEBAP8AAAACAwIAAgAAAPr6+wABAQEAAwMDAAICAgD9/f4AAgIBAAICAgACAQEAAAAAAP///wAAAAAAAAAAAP7+/gABAQEAAgICAPz8/AABAQEA/f/9AAIBAgABAAEAAAEAAP8AAAD+/v0A//7/APz9/gD+//4A////AAMDAwAA/wEA////AAEBAQABAAAAAAAAAAYGBgD9/f0A/v7+AP///AAAAP8A+vz8APr6/QAFBQQAA///AAABAgACAgMA/f7+APn5+wD7+wAABQQEAAMCAgD8/v8AAQECAAICBgD/Af0A/v7/AAMDAAD9/P0AAAABAPz8/QAAAQEAAQIBAAIDAAAC/wMA/f39AAICAgD9/P0A/f39AAMDAQACAgEAAwQDAP39/wADAQMA/Pz9AAAA/gADAwMA+/z7AP///gD/AAAAAQECAAMDBAAAAAAAAgECAAQDAwABAQAAAQEAAPv7+wADAwMAAwQDAPz7/QAAAAAAAwMDAAMDAAAAAAAA/v79AAQEBQD7+/sAAgACAP///wADAwMAAwMDAAQAAAD4+fkA//7+AAICAwAAAQEA+fr6AAICAgAGAwQAAPz8AAIEAAD7+/sA/P3/AAECAgD2+PYABQQGAAcEBAALAAgA+Pz7AP4A/wADAAEA/gD/APv7/AD+Af0AAgACAP4A/gAA/v8AAQABAAcDBQAAAAEAAAEBAAIBAAAFAwMA+v38AAH/AAD6/PoADAkKAAH7/gD8/PoAAQUGAP4B/wAA/wAA/wD/AP3+/AAJBgcA+/38AP4BAAD9//4A+/39AAMC/wD+/v0A+v38AP38/QAI+QYA9Pr3AAMBAgAGBAYA/f39AAUEBAACAQEA+v38AAMDAgAA//8A9vv5AAL3AwAMCAoAAAAAAPv8/AD4+/oA/v/+AAEEAgD3+fkA/wD/AAABAQAAAAAAAwMDAP8AAAD9/v4A////AAIAAQD9/v8A/gAAAAMAAgABAwEAAQAAAPz9/AD6/PwA/gAAAPn6+wD5/fwAAwMCAAIDBAAGBQcA9vf5AP4BAQD8Af8AAwQEAAcFBQADAgMA/P79AAoIBwAA//8AAwIBAAUCAgAA/v4A+/v6APz8+wAHBgYAAwIBAPf5+gABAP8ACQcIAP79/QD2/PoACgcIAAoGBwAMCwsAAwEBAPDy8gABAQEAAAAAAP39/QAECAcA/gAAAAIEAwD7+voAAgMCAAICAgD9/v0A/v//AAsICwD7+voA+Pr5AP39/QD+BP4AAQEBAP///wD/AP8A/v7+AAIDAgD5+voA/v3+AAQHBAD8/P0AAQMBAPb5+AD+//0A//79AAsHCQARDA8A+/36APD08QAEAwQAAwQCAPH38wD3+vgABQQDAAkGCAD8/f0AAAEAAAD+/wD//v8AAQEBAPv7+wAAAAAAAgIEAPLy8gDy9PQABQUFAPv8/AAA/v4ABgQFAAIBAgAGBQUAAwECAP8AAAD7+/kA////AAUEBAD9+/wABAMEAAkJCAAHCQgAAAH/AP8AAQD29/kA7PPvAPX5+QADAwMABQUFAAICAgD+/f0A+/v8AAABAAAFAwQAAgIBAAAAAQAGAgIAAgECAAUFAgACAQIABAMDAAD//wAAAQEAAgEBAP///wAAAAAADAgJAAEBAQD+/v4AAwICAAICAgD///8ABQUFAP3//wD7/PwA/Pv7APz8/AD8B/sABwUHAAIAAQD8/PsA/wD/AAABAQD7/fwAAgECAPz8+wD7/v4A/wD/AAQDAwAJBwgACQcIAAQCAgADAQAAAAYFAAICAAD9/f0AAP//AAACAwAAAP8A/f7+AAMDAwADBwQA/v7+AAAAAAD///8AAAAAAP7+/gD+/v4A/f/7APr6+gD+/v4A/P79AAABAgAD/AEAAgICAAIBAQD9/v4A/wAAAAP9/gD9/f0A////AP39/QD6/PwAAwMDAP8A/wD5/PsAAv79AAABAQACAQEA+fv6AP79/gAB/fwA/P79AP3+/gD8/fsA//8BAAMDAwD+/v4AAgIBAAAAAAAGAwIABAECAAICBAAGBgYABAICAP///wD8/f0AAgMDAAAAAAD9/fsAAQEBAPv9/QD3+fkAAP7/AAICAgD6/v0A+/j4AAUCAwAICAgAAQABAAQDAwMA/v7+AAAAAAAEBAQA////APv+/QAEAwMA/vz9AAEBAQACAwMA+/38AAMDAwD///8A////AAMDAwACAgIA////AAAAAAABAQMAAAAAAAAAAAD///8AAgICAAAAAAADAwMAAQEBAPz8/AD+/v4AAAAAAAEBAQD///8A/v7+AAICAgD+/v4AAQEBAAMBAgAA//8AAgECAP//AAD+/v4AAwMDAAQCAwABAQEA/v39AAABAQD8/PsABAIBAAABAAD+/v4AAgD/AAIBAAD+AAAAAv/+AP//AgABAAAAAQD+AAEAAQACAQAAAwEBAAMCAgAAAAAA////AAIBAQACAQEAAQD/AAEBAAAAAAAAAwMDAAIBAQD///8AAAAAAP///wD///8AAQEAAPr6+QADAwEA//8AAP7+AQACAAEAAP8AAAQCAgD9/v0A/fv8AP///wACAwIA////AAAAAAAAAQEA+/z8AP7+/gAEBAQAAQEAAP7//QABAAIA///+AAICAgAAAAAA/v7+AP7+/gD//wAAAgICAP/+/QADAwQAAQECAPv7/QABAAAAAgECAP7//wABAAAAAP//AAIBAgD///4AAAIBAAIBAAD/AgAA/f39AAMCAQD///4AAwIBAP//AAD//wMA///+AAEAAQABAAAAAwICAAEBAQAAAAAAAQAAAAMDAwD+/v4A/f/+AP7+/gADAwMA/v7+AP39/QD///8A/wD/AAICAQAAAAAA////AAICAgABAQEA////AAAA/wACAgEAAAH/AAMDAwADAwIA////AP///wAAAAAAAgICAP7+/gABAQEAAAAAAP///wAAAAAAAgICAAAAAAD+/v8AAf//AAEBAQADAwMA////AP///gACAgIA/f39AAQEBAABAQEA/v78AP7+AAAAAAAAAQEBAPr7+wD9/f0ABQUFAAH//wABAQEAAAD/AAEBAQD9/f0AAQEBAAAAAAD///8A////AAAAAAABAQEA/P79AP8AAAD//wAA/Pv+APz8/QAEBQMAAQEBAP///wACAgIA/v7+AAAAAAD///8AAAAAAP///wAAAAAAAgIEAPz8/QABAAIAAAD/AAABAAD/AP8A/wD/AAAAAAD///8A/v7+AP7+/wABAQEAAQABAP7/AAD//gAA/QH/AP///wABAQEAAAIBAP7+AAD9/v4AAwEEAP///gAAAAAA////AP///wD+//4AAf4BAP///wABAQIAAQEBAP///wD//wEA/v7+AAAAAAAAAQIAAAABAAH//gD+/v4A/QD/AAEAAAAAAAAA////AAAAAAABAgEAAQABAP7//wD///8A+/z7AP7+/wABAQIA/v8AAPv9/QD+//8AAQIDAPz+/wD+/v8AAQEBAAEBAgAB//4AAQH/AAEAAAAAAgEA/v7+AAECAgD//P8A/v//AAABAgD8/f4AAAAAAAEBAQABAQAAAgECAAEBAQD7/PwAAAAAAAABAQAAAf8ABAQEAP7+/gABAQEA////AAAAAAACAgIAAgICAP39/QD+/v4AAAABAP8AAgAA/wAA/v7/AAAAAAADAwIABQUFAPz+/QABAAEA/v39AAMDAwAAAAAA/v7+AAH/AAD8/vwAAwMDAAIBAQD9/v4ABQMEAAQCAQACAQEAAQAAAAEAAAAAAAAA///+AAABAQD///4A+/3+AAgFBgADAgEA///+AAICAQD+/v4AAAAAAP///wAEBQUA/P38AP///wACAgIA/f39AAEBAQADAgIAAAD/AAD+/wACAwIA////AAAAAAABAQEA/v7+AAQDAwD+/v4AAgICAAQEBAAAAAAA////AAICAgADAwMA/v7+AP///wAEBAQAAAAAAAEBAQADAwMA/v7+AAAAAQADAgQA/f3+AP7+/AACAgIAAQEBAAICAgABAQEA/v7+APz8/AABAQIAAQIB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AAD8/PwA////AAEBAQD//wAAAAAAAAAAAAD///8AAAAAAAAAAAABAQEA////AAAAAAABAQEAAQEBAAEBAQABAQEA/v7+AAICAgADAwMABAQEAAIAAQD///8A////AAIBAgAEAwIAAQEBAAD/AAADAwMAAf8AAAMCAQADAgIAAgICAP78/QAEAwMAAP7+AAUFBAAFBAQAAwICAAMCAwADAwEAAwEBAAD//wAAAP8ABQQEAAAAAAABAQEAAAEAAAMDAwADAwMAAgAAAAEAAAAAAAAAAwEAAP///gABAQEAAgEBAAH/AAAAAAAAAgIBAAMDAwACAQIABAMDAAIBAQAAAAAAAQEBAP///wD///8AAwMDAP7+/gAAAAAA/v//AAIBAQD9/f0AAgECAAICAgADAwMAAQAAAAICAgAAAP8AAAAAAAMCAgD//wAAAQEBAAMDAwD+/v4AAQEAAAAAAAD+/v8A/v7/AAAAAAABAQEAAgICAP/+/QACAgMA///+AAIBAgD///4AAQEAAP///wD///8A/v79AAICAgACAgIAAQEAAAICAQD///8AAAAAAAEBAQAAAAEA////AP7+/gACAgIAAAAAAP///wD///8AAQEAAAAAAQD///4AAAH/AP8A/wACAwIAAQEAAAICAgD+/v4AAAAAAAAAAAD///8AAAAAAAICAAD+/v4A////AP39/QD///8A/v7+AAICAgAAAAAAAAAAAP///wABAQEA////AP7+/gABAQEAAQEBAP///wABAf8AAQEAAP8A/wACAgEABAQDAAAAAAD///8AAgICAAICAQABAf8AAwMDAP7+/gABAQEAAQEBAAABAQACAwMABAQEAAMCAgAAAP8AAQEAAP///wABAQEAAAAAAAICAgABAQEA////AAAAAAADAwMA/gAAAAECAQAAAAEAAQEBAAICAQACAwIAAgICAP39/QAAAAAAAgICAAAAAAAAAAEAAgEDAAAAAQD//wAAAQEBAP///wD///8AAQEBAAAAAAAAAQEA/f39AP///wD+/v8A/v7+AAAAAAACAgIA/v7+AAEBAgD+/v4AAAABAAAAAQAAAQEA/wABAAABAQAAAAAAAAAAAAEBAQD///8AAgICAAEBAgAA//8A/v7/AAAAAQD+/v4AAQEBAAAAAQD9//4A/gD/AAABAQD//wEAAgIDAP//AAABAQEAAAAAAAMEAwD//wEA/P79AAABAQAAAwIAAQECAP///wD//wAA/f7+AP7//wD/AAEA/P39AP8AAAD/AAAA/v4AAP4AAAABAQEAAgMCAP8A/wD9/v0A/v4AAP8BAQAAAQAA/f3+AP4AAAABAQEA/wEAAAAAAQABAQEA////AP3+/gD/AAAAAAAAAP39/QD///8AAQEBAP39/QABAQEAAQECAAAAAAD///8AAgICAAAAAAD///8AAAAAAP///wAAAAAAAwMFAAEBAQD/AP8AAgICAAABAAD/AP8AAAEBAAMCAwD//v4AAAAAAAEBAQACAgIAAP//AAMCAwADAgIA////AAAAAAABAAAABgQEAAIBAQADAgMAAf8AAAMCAgD//v4AAQEAAAIAAAABAQIAAwIDAAIBAAABAP8AAwMDAAAA/wABAAEA/v7+AAECAQD///8AAQEBAAAAAAACAQEA////AAAAAAABAAAABQQDAAICAgACAwIA/f39AAAAAAAEBAQA/f39AAAAAQADAgIAAgMAAP///wD+/v4AAQEBAAAAAAAAAAAAAAAAAAMDAwAAAAAAAAAAAAEBAQABAQEABQUFAP7+/wD//wAA////AAAAAAD///8A/v7+AP3+/gAAAAAA/wEAAAMEAwACAwIA/wAAAP///wABAQEA/v7+AAAAAAABAQEA////AAEBAQABAQEAAQEBAAMDAwAAAAAAAAAAAP///wACAgIA/v7+AAEBAQD///8AAgICAAAAAAABAQEA////AP7+/gACAgIAAQEBAAAAAAD/AAAAAgMCAPz9/AABAQEAAAAAAAAAAAADAwMAAAD/AAEBAQAAAAAA//7+AAMBAgAAAQAAAAAAAP39/QABAQEAAQECAP//AAD//wAAAAABAAEBAQACAgIA/v7/AAICAgACAgIAAAABAP///wD+/v8AAAD/APr6+gABAgIAAwMDAP///wD///8AAAD/AAICAgAAAAAAAAAAAP///wAAAAAAAgICAAEBAQAAAAAA////AP///wD///8A//7/AAEBAQADAwMAAwMDAAECAgD//wAA/P39APz9/AD9/v4AAAEBAAMEAwAEBAIABAQEAP39/gD+/wAAAQECAP7+AAD/AAIA+/r+APz9/gD+AAEAAQIEAAABAgD7/f4AAAICAP3+AAD+AAAA/wAAAAAA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AwIA/Pz8AAICAgACAgIAAQEBAAEBAQD///8A////AP///wACAgIA/f39AP///wAAAAAAAgMCAAMEAwD//v4A//8AAAICAQD9/f4A/wD/AAEBAAAAAAAAAwMDAAICAgD+/v4A/f39AP39/QABAQEA////AAAAAAABAQEAAQEBAAAAAAABAQEAAgICAP7+/gAAAAAAAgICAAEBAQD+/v4AAQEBAAICAgAAAP8AAAABAAICAQAAAAAA///+AAEBAQD9/f4AAwMCAAICAgD9/f0AAAAAAAICAgACAgEA//8AAP///QD///8AAQEBAP///wABAQEAAAAAAAEBAQD///8A////AAAA/wD9/v0AAP//AP///wACAgIAAQEBAP///wD9/f0AAAAAAAAAAAD+/v4AAwQEAP8A/wD+AP0A/v7+AAEBAQABAQQA/f39AAAAAAABAQIAAQABAP8A/gACAgIA/v3+AP7+/gAAAAAAAgICAAAAAAABAQEAAAAAAAEBAQD+//8A////AAAAAQADAwIAAQEBAP///wAAAAAA/wAAAP79/QD///8AAAEAAP4A/wAAAAAA////AAAAAAAAAAAA/Pz8AAAAAAABAQEAAP8AAP3+/QD//v8AAQEBAP///wD///8AAQECAP7+/wD/AAAAAgICAAD/AgD+//4A+/z8AAEBAAAAAQAAAAEAAP8AAQD/AAAA/wABAP3+/gD+/P8AAQEAAAEBAgD+AP8AAAECAAIBAQD+AP8A/v//AAICAwADAgEA+/3+AP/+/gD/AAAAAf8AAP7//gD/AAEA/wEAAP39/QD/AAAAAAAAAAEBAQD8/fwA/wAAAAEAAQD8/f0A/v//AP3//gADAQMA/v7+AP39/QADBAQA////APz8/AACAgMABAQDAP7+/gACAgIAAgICAP///wAAAAAA////AAAAAAACAgQA/f39AAEBAQD9/f0AAgICAAAAAAD///8A/f39AP8C/wAAAAAAAgICAAAAAAABAQEAAgIDAP79/QACBAQAAwMDAAD//wABAQEA+/v7AAIBAAD/Av4AAgEBAP4AAQABAQEAAQEBAAAAAAABAQEAAQEAAAIBAQABAQAA/f39AAIA/wACAQEAAQIBAAD+/wD+//0AAgIEAAYFBgABAP8AAAD/AAUFBQD//f0A/f7+AAACAgAB/v4ABAQEAAEBAAD+/v0AAwMDAAH/AAD+//0AAP4BAP7+/gACAgIABAQEAP///wD7+/sAAQEBAAEBAQACAgIAAAAAAAICAgAAAAAA/v7+AAEBAQAAAAEAAAAAAAICAgD9/f0AAgICAP8AAAAAAQAAAQABAP///wD+/v8AAAAAAAEBAQAAAAAAAAAAAAEBAQAAAAAA////AAMDAwD9/f0A////AAEBAQAAAAAA////AAMDAwACAgIA////AAAAAAAAAAAAAQEBAP7+/gABAQAAAQEBAP///wD8/PwAAQEBAAICAgAAAAAA/v7/AAAAAQD///8AAQICAAEAAAD///8AAAD/AAQEBAD9/f0AAgMDAP/+/gD8/PsAAwMDAP///wAAAAAA/f39AAAAAAADAwMA////APz8/QADAwAA////APz8/gADAwMAAAAAAAEBAgD9/fwAAwMDAAMDBAD//wAA/f39AAAAAQAAAAAA//8AAP///gABAQIAAQEAAP7+/QD7+/wABQUFAPz9/QD//v8AAAEAAAIBAQD+/wAA////AAAAAAABAQEAAgICAAIBAgAEBAMA/v7+AP8BAAD4+PoA/P7/AAICAwACAgEAAwQCAAQAAQD7+vwA/Pz+AAICAgD///8ABgcFAAD/AAD//wAA9vf4AP///wABAQEAAwMDAAAAAQABAQEAAwIBAPv7/AAFBQcA/v75APn4+gADCwkAAwMDAAABAQAEAAEA+Pn7APz9/wD7/PwAAQECAAEBAQD9/f4AAgIBAAMDAwD6+vkA9vb2AAUFBQABAf8AAwMDAP///wAAAAAAAAAAAP///wD8/PwAAwMDAPz9/AD9/v4A/wEAAPj4+QAHBwgAAQEBAPv9+QAFAgQA+/v8AP7+/gD+/f0ABAMDAPn7+wAGBAQAA///AP7//gD7/fwA+/z8AAwHCAADAAEAAf8AAAMDAwD8/PwA/wH/AAQCAwD5/P0A/P/8AAUCBQD09/cABQUFAAgHBwD8/v0A/wD+AP///wAA/v8AAP//AAICAgD6/vwA8vf2AAsICAACAgAABAQDAAkHCAD7/v0A9vv5APn5+QAHCAMA/wEBAAUEBQD8+vgAAQEBAP/+/gD+//4AAAMBAAABAAAA//8AAwQDAPv6+gD+AQAAAwEBAAEBAAD7/vwAA/4FAAQBAgD5AP4ABP/+APz9/QACAwIA+/v7AAQDAwAA/v8ACAQGAAcGBQD59voA/v39APb5+QACAQEAAwECAAABAQADAwIAAgECAAEBAQD///8AAgIDAAABAQD///8AAwABAPn7+gD+AP8AAgICAP3+/gADAwQA+fz8AAICAgABAAEA+/79AP8AAAD//wAAAwIEAAcHBwD4+PYA+Pz7APf8+QAGBAQAAQEBAP7//wAGBAUAAAEAAPX49QADAwMADw0QAPj59wD4+/oA/f39AP7+/gD09/YA8/j0APn7/AAOCQsA+Pr4APz8/AANDAwACgcJAAEAAAD19/YABAQEAP///wD7/vwABwYIAAIA/gADBAQA9vb4AAECAgAAAAAA/v//AAIBAQAJBgYA/f3/APn6+QAFBgUAAgH/AAD+/QD4/fwAAwUEAPz9/QAJBwcA/v8AAP0BAQABAQAAAP//APr9+wD3+vcABQUDAAEAAgAHBwcA+Pv5APf7+AAEAQMADAgLAPr6+wD5/foABAMEAAkGCAAB/wAAAQMBAAYDBgAPCw4A9/j4APj59wACAgMABQUFAPz8/AD7+/sA////AP8A/wADAwMA+/39AAECAwAGBAYA/f7+APX3+AAAAAAADgoKAP///wD3+fkAAwICAAUFBQD/Af8A8/b0APL29AD1+vcA+fz6AAEDAgAFAQIA/v7+AAEBAQD+/v4ABAICAAD//wAEBAQA////AP7+/gAFAwMABAIDAAD+/wD///8A/wD/AAD9AAD6//8A+vsBAAD//gD+/v8A//8AAP7//wD8/P0AAwICAAEBAQD7+/oABQQDAAcEBAABAQIABAMDAAUEBAD9/PwAAgEBAAEBAwD+/v8A///+AP3+/QD+/wAA/f7+AAMCBAD4+voA/P3+AP///gD/AAAA/f7/AP3+/gD7/fwA/gD/AAAAAQAGAwMA//8AAAEAAAABAgEA/P39APz//gD///4AAgICAP8A/wD///8A/v//AAIBAwAAAAAAAgICAP8AAAD+/v4AAAAAAP/9/wD///8A/f39AAEBAQABAAAAAQEBAAICAwD/AP8AAAAAAAP8+gD8/fwAAQICAAQAAQAB/wAAAwIDAAEBAAD+/v4ABQMEAAABAQABAAAABQQEAAQCAwAFBAQAAAAAAAIBAQD8/f0AAAEAAP3//gD6+voA9/n3APz+/QD+/wAA/gIAAPv9+wAAAgAAAP//AAEBAAD7/PwA/gD/APr//QD7+/kABAIDAAABAAAC/fwA+vz7AAYEAgAFAgMA/wACAAICAwAGBAQACAgIAAQAAAAAAAAAAP7+/gD///8AAQEBAAMBAgD9//0A/v//AP/+/gABAQAA/v7+AAAAAAD///8A/v7+AAAAAAADAQIAAP8BAAIBAQD9/v4AAAEBAP///wD///8AAgICAAICAgD+/v4A////AAAAAAD///8AAAAAAP///wD///8A////AAICAgD///8A+/v7AP8BAgD///8A//7/AAMDAgAAAAIA/v7+AAMBAgACAQIAAQAAAAIBAQADAgMAAP8AAP7+/QAEAgMAAQAAAAAAAAD+/v4ABgUDAAIBAgD///8AAQEAAAIBAgD//v4A/wH/AAEAAQAA//8AAQABAAAAAAACAQEA////AAD//gD+/f8AAwMDAP7+/gD+/v4AAwICAAMDAQADAwQA////APv7+wACAgEA////AAMDAgADAwMA//8BAAICAgAAAAAA////AAEBAQD///8AAQEBAAEBAQD///8A////AAEBAQABAQEAAAAAAP///wABAQEA////AP39/QACAgEAAAD/AP///gACAgEAAAAAAP7+/wD//v4A/wEBAAEBAQAFBAIA////AAEDAgABAQEA/f39AAAAAAD//wAAAAAAAP///wABAQEABAQEAP7+/gD+/v4A////AP7//gAIBgcA///+APv7+wABAAAAAgMDAP7+/gABAQAA/v7+AAICBAD///4AAQECAAEAAQACAgEAAQABAAICAgD7+/sAAwMDAAAAAAACAgIA////APz8/AABAQEABAQEAP///wABAQEA/v7+AP///wACAgIAAAAAAP39/QACAgIA/f39AAQEAgD+/v8AAwMCAP7+/wABAQEAAgIBAP7+/gABAQAAAAAAAAIAAQABAQEA//3+AAAAAQD9/vwAAAEAAAMDAwABAQEA/v39AAQEBAABAQEA/f39AP7+/gACAgIA/v79AAECAAD/AQAA//7/AAEAAAABAQEA////AP///wABAQEAAgICAAAAAAD///8AAAD/AAEBAQD///8A/v7+AAMDAwD9/f0AAAAAAAICAgD//v8A/P39AP7+/wABAf0AAAABAAICAgABAQEA/v7+AAAAAAD///8A/wAAAP7+/wAAAAAAAgIEAP///wD///8AAQEBAP///wAAAAEAAQABAAABAAD///8A//7+AAEBAQD8/PwAAwMDAAMCAwD7/PwA/v3+AP//AAACAgIAAQEBAAAAAQABAQAA////AP7+/wABAQIA////AP7//wD//wAA//4AAP///QD+//8A/wD/AAD/AAABAQIA/v//AP78/QD9/v4AAQAAAAD/AAAA//8A/v7/AAIDAAAAAAEAAQEAAP4AAAAAAAEAAwMEAAECAgD8/f4AAQIBAAH/AgAAAAAA/P39AP7+/gABAQIA///+AP7+/gAAAAEAAgMDAPv+/AAAAQEAAwIDAPz8/QABAwIAAgAAAAD+AQD///8AAAAAAAIDAwAAAAAAAQEBAAICAwAAAAAA/f39AAICAgAAAAAA/f39AAICAgAAAAAA////AP7+/wAEBAAAAwMCAPv7/AADAgMAAgIDAP3+/AACAgIAAAAAAAAAAAAAAQEA/v7+AAAAAAACAgIAAf8AAAMDAwAA//8AAP//AAAAAAD+/f4AAwIAAAAAAAABAQEAAgEBAP///wADAwMAAgICAP/+/gABAAAAAP//AAABAAABAAEA///+AAIDAgADAgIAAP7+AAMCAgACAgEAAQAAAP///gABAQIA/v7+AP79/QD//v0ABAQDAAIBAAD+/v4A////AAQEAwAAAAAAAAAAAP8AAAABAP8AAgIDAAAAAAAAAAAA/v7+AAEBAQAFBQUA////AAICAgAAAAAAAAAAAAEBAQD9/f0AAQEBAAAA/wAAAAEAAAAAAP7+/gAEBAQA////APv9/AADAgMA////AP///wADAwMA/Pz9AP7+/gADAwMAAgICAP///wAAAAAAAAAAAPz8/AACAgIAAQEBAP39/QD///8AAAAAAP///wADAwMAAAAAAAAAAAD///8A/v7+AP///wABAQEAAAAAAAEBAgABAQAAAQEBAAAAAAAAAAAA/v7+AAEBAQABAQIAAQAAAP7+/gD///4AAwMCAPv7+wAAAAAAAP8AAP79/QD/AAAAAgMAAAEBAQD9/f0AAwMDAAAAAAD+/v4A/v7+AAEBAQD9/f4AAgECAAMCBAAA//8AAQIBAAAAAAAAAAAAAAAAAAEBAgAAAAAAAAACAAAAAAAAAAEA/f39AAICAQD///8A/v//AP3+AAAAAQEA+/39AAEBAQD9//0AAwIDAAACAgABAAAA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AwD///8A///+AP//AAABAQIAAQEBAP///wADAwMAAQEBAAAAAAACAgIA/v7+AAAAAAAAAAAAAgICAP7+/gD///8AAAABAAAAAAD9/f0ABAQEAP///wAAAAAA/v39AAMEBAAAAwMA/v39AAICAgACAQEA/v/+AAMCAgABAQEA/gAAAAEAAAAAAAAAAwIBAPv6+gADAgIAAAQEAP///wAAAAAA////AAAAAQABAAAAAP//AAIBAgACAgIA/v7+AAD/AQD8/PsA/Pz8AAICAQD9/PwAAwMCAAEAAQD+//4AAQH/AAEBAAD9/fwAAgIBAAICAgD///8A////AAAAAAD///8AAgICAAEBAQAFBQMA/Pz8AP7+/gAAAAAA////AAMDAwAAAAAAAgICAP7+/gD///8A//7+AP///wABAQEA/v79AAEA/wD+/wAA/f39AAAAAAACAQEAAAAAAAAAAAAAAAAAAQEBAP7//QD//v4AAv8CAAICAgAAAAAA//7/AAICAgD+/v4AAgICAP39/QABAQEA+fr6AAIBAQD+/fwAAgMDAAAAAAACAgIA////AP7+/gD///8AAwMDAP///wD/AP8AAQEBAAEB/wAAAP8AAAD/AP7+/wD9/f0A////AAABAAD9/v4AAQECAAAAAQAAAAAA/f39APZMSpAAACAASURBVAEBAQD///8AAAAAAAEAAgD///4AAQEBAAMDBAD+/v8A/gD/AAICAgABAQIA+/v8AP7+/gADAwQA/Pz8AAAAAAD+/v4A/wIBAAD/AAD+//8AAAECAP/+/gD/AQAA/f/+AAD/AgABAQEA/f39AAECAQABAQIAAAABAP39/QD//wEA///+AP/+/gD+//8A////AAAAAAACAgIA/v7/AP4AAQD+/v4A+/79AAEBAgD9/v8A//39AP7/AAD+//8A/f7/AAAAAAAAAQEAAgIDAP8AAAD//v8AAwMDAPz8/QD///8AAQEBAAAAAAABAgIAAAH+AP7//wAAAAAA/v7+AAMDAwABAQEA////APz9/QABAQEAAgIDAAAAAAAAAAAA/v7+AAMDAwD///8A/v7+AAEBAQABAQEAAgIAAP///gABAQIABAQEAAEBAQD+/v4AAAAAAP///wAAAAAAAQEBAAEBAQACAgIAAgICAP7+/gD+/v8ABAQEAAEBAQD+//8AAQAAAAEAAAABAAAABgUFAP/9/wAAAP8AAAEAAP///wABAQAAAAAAAAICAQABAQAA//7+AAACAgADAgEAAAEAAP///wACAP8A/v7+AAQFBQADAgMAAP//AP8A/wADAwMAAAEBAAICAgACAgIA/v/9AAAAAAAAAAAA/v7+AAICAgACAgIAAwECAP3++wD+/v4AAAAAAAEBAQABAQEAAgICAP///wACAgIAAQEBAP7+/gAAAAAAAAAAAAAAAAAAAAAAAgECAP7/AAD///8A/v7+AAICAgAAAQEA////AP///wAAAAAAAQEBAP7+/gAAAP8AAQEBAAAAAAABAQEA/f39AAEBAQAAAAAA/v7+AAAAAAAAAAAAAgICAAEBAQD+/v4AAAAAAP7+/gAAAAAA/v7+AP7+/gACAgIAAwMDAAEBAQD///8A///9AAEBAgD+/v4AAgICAP///wABAQEAAgICAP/+/wD+Af8A////AAEBAgD+/v4AAAAAAP7+/gADAwMA/f79AAAAAAD/+f4AAwICAAICAgD+/v8AAAD/AAEBAQABAQEAAgICAP//AQD//wAA////AAICAgD///4A////AAAAAAD///8A////AP39/QACAgIAAQEBAP39/QD///8A//4AAAEBAAAAAQEAAAEAAP7+/gD///8AAQEBAAICAgD///8A////AAEBAQAEBQUA/Pz8AAABAQD+//8AAAEBAAAAAAD+/v4AAQEBAAICAwAFBgIA/v7+AP/8/QD9/P4AAAAAAAIC/wACAgEAAgMDAAL//wD+/v8A+fn7AAUFBAADAwQAAQACAAIHBAD///8AAQEBAPv4/AABAQIAAAABAPr7/AD///8AAgEBAP///wD8/f0AAAADAAEBAQACAgAAAQAAAP7//wAB/v8ABgYIAPz8/AD5+vkABAUFAAEBAQD//wAABgUGAAICAwDr7uwABQUFAAECAQACAAEAAQEBAAYGBgACAgIA/fv9AP79/gD/AP8A////APj6+QAIBQgAAgEEAP79/gADAwMAAP4AAAICAgD+/v4ABgYGAPr6+gD///8A/wAAAAYDBAD7/v0A+/79APj9+wAHBQUA9Pn3AAADAgD///8A/P/9AAEBAQABAAEAAAD/AP39/AAEBQMABQIDAP38/QD3/f0ABgUFAAgHCAAA+fcA/gAAAP4AAAD9AP8AAQIDAPj5+gADBQQA+Pj4AAcGBgAHBQUABfsDAPz8/QAEAwMA/gD+APj6+QADAQEAAQEBAAQDAwD+Af8A+wH9AAD/AAD9/f0A/P39AAACAQAAAgIA/v39AAH//wD/AP8A+vv6AAD//gD8/fwA/v/+AAICAgD9/wAA+/38AP8A/wD+/wAAAgICAP8AAAABAQEAAgEAAP38AAD///4ABgICAAcDBQACAQEAAgAAAAIBAgACAf8A//7+AAEBAQD/AP8AAQEBAAQDBAACAgIA/f//AP7//gD///8ABgIDAP79/gD7/fwA+/38AAQEBgAEBgIA9fj2APoA/QD6/PoAAAAAAAIFAgD+/fwAAQEDAPz9/AD//v8AAQIBAAUCAgD8/fwAAP//AAAA/wABAgEA+fr5APf8+gD7/vsABQMFAPv+/AD8/v4AAwQDAPz9/QD19vYABAMDAAMEAgD9/fsAAQIAAAkICAABAQEAAwICAPf4+AABAQAABAQEAAAAAAABAQIABgYGAPz+/wD5+vsADAwMAPj4+AAFAwMA9/r5APz+/QAA+vkABAcJAAAAAAD///8A+Pn5AAMCAgD9/v8A/P/+AAoHCQAIBgYA/f39APr6+gAGBAQABgUGAAQCAwDy9/QA+v/9AAAAAQAFBAMABgQFAAABAQAMCQwAAQEDAPf59QD/AAAABAIEAPz8/QD5/vsA/fz7AA0LDAABAAAAAgABAP8BAQAEAgMA+/79APz//wD///8ABgUFAAEBAQD8/f0AAwICAPz9/QD2+fYA+fv6APn8+gD8/fwAAQIBAAMDAwAFAgMAAP//AAD//wABAQEAAwECAAEBAQD/AgIA////AAABAAAEAwQABAIDAPv9/AD8/v0A/wAAAAUABAAEAwMAAQABAP//AAD9/PwAAgICAAICAgD9/P0ABQMDAAcHBgAEAgEAAP//AP/9/QD4/PgA+Pv6AAMDBAADAgMA/f38AAICAgADAwIA/v7+APf5+QD9AP8A////AAAAAAABAQEA/wAAAP7+/gAEBAQA+fr5AP3//gAA//8AAgQDAAEBAAD9AP8A/v7+AAD//wAAAQEAAP//APz9/QD7/PoAAAEAAP4ABAD+/v4ABAMDAP3+/gABAQEAAgMDAP39/QAAAP8A/v//AAMAAQD//v8AAgEBAAEBAAD+AAEAAP8AAAYFBAD//v4AAQICAP///wAGBAYAAgICAAUDAgACAAEAAwABAAQEAwABAAEAAAAAAAAAAAACAgEABAMEAP7//wABAAAAAQAAAP3+/gAEAwQAAAIBAP//AQD+/v8AAwMDAAEBAgD//v4AAAAAAAUEBQD/Av4AAAAAAAEBAgAFBAMABgcGAP/+/gD7/PwA+Pr5APv9/QD7/PoA/P39APz9/QD9/v0A/f/+APz+/wD/AP4A+fz/APcA+wACAQIABAEBAQD///8AAgICAAACAQD+AQAA/QD/AP7+/gABAQEAAgICAP7+/gAAAAAAAQEBAAAAAAD+/v4AAwICAP///wAAAAEA////AAEBAQD+/v4A/wEAAAEBAQACAgIA/v7+AP7+/gAAAAAA////AAEBAQADAwMAAAAAAAAAAAACAgIA/v7+AP///wD///8A/gEAAAMDAwAA/wAAAAAAAAMCAgAA/wAA/v/9AAMBAgAAAAAAAgICAAABAAACAgIAAwIBAAD9/QADAgMAAgMDAAIAAAADAgEAAQAAAAH/AAACAgEAAP79AAAA/wD8/PsABQUEAAEBBAABAQEAAf8AAAICAQAAAP8A/v7+AAICAgABAQEAAP8AAAH//wD+/v0AAwIBAAH/AAAEAwIAAgAAAAL/AAABAgIAAQAAAAD+/QABAQEABAIFAPn5+QABAQEAAwUFAAEA/wD9//4AAwICAP7//gAAAP8AAQEAAP7+/QAEAQQAAQAAAP///wAAAgEAAQEBAAAAAAD+/v4AAAAAAAICAgACAgIA/v7+AP7+/gABAQEAAAD/AAAA/wACAgEA/v4AAP7+/QABAQEAAQEAAP7+/QAEBAQAAf4AAP///gD9/f4AAQEBAAICAQD+/f8A//8AAAEAAAD+/v4AAQEBAP7+/gACAgIAAQEBAP///wABAQEA////AAICAgD+/v4A/v7+AP///wACAgIAAAAAAAD/AAACAQEA//7+APz+/gACAwMAAwECAAAAAAACAgIA/v7+AAAB/wAAAAAAAAAAAP7+/gAAAAAA/v7+AAICAAABAQIAAgICAAICAgD///8A////AP7+/gABAQEA////AAICAgABAQEA/f39AAAAAAAAAAAAAQH/AP7+/wAEAwMA/f39AAAAAAABAwMA/v7+AAAAAAAAAAAA///+AAIDAQAAAAMAAAAAAP///wADAQIA/wL/AAAAAAABAQEA/v7+AAAAAAD9AP8AAgMCAP3+/gABAQEA////AAEBAQD///8AAgICAP///wD9/f0A/v7+AAAAAAADAwIA/f39AAABAgD///4AAQEBAAD//wD///8AAAEBAAIDAgD+//8AAAD/AP//AAD9/f0A/v7+AAMDAwABAQIA/fz9AAAC/gAAAQEAAgQDAPr6/AAA/wAA/wD/AAIBAwD//v8A////AAAAAAABAQEAAQEBAAICAgD9/v4A/v7+AAAAAAD9//8AAQH/AP4A/wD8+/0A//8AAP/+/AACAgIA////AP7+/wADAwMA/v7/AP//AAD9AP8AAQEBAAADAwAA/P0AAAEAAP8A/wD+//8AAgMEAAD9/QD+AP8AAQEBAP//AAD/AAAA/gABAP8AAAD+//8A////AAACAQD///8AAQEBAP7//gADAwMA+/39AAEBAQD8/v0AAgIDAAAAAAD8+/wA/v7+AAACAQD///8AAwMDAAEBAQD9/f0AAAAAAAMCAgD/AAEA/v7/AAICAgD///8AAgICAAAAAAACAgIA/Pz8AAICAgD+/v4AAgICAAEBAQD+/v0A//8BAAEBAQD///8A////AAQEBAAAAAAA////AAIBAgABAAAAAAAAAAEBAQAEBAMAAAAAAAIBAQAAAQEAAAAAAAMBAgAB//4A/v3+AAMDAwAA/v4AAQEBAAQEAgABAAAAAAEAAP39/AAEAwIAAQECAAAAAAD/AP8AAP8AAAEDAgADAAMAAAEAAP7+/gABAAEAAQAAAP///gACAgMAAP8AAP7+/QACAgUAAQAAAP///wABAQEAAQEBAAICAgAA/v8A/QD9AAECAQABAQEA////AP7+/gABAQEAAQEBAP///wABAQEA/v7+AAAAAAACAgIA/f39AAICAgD9/f0A//7/AAAAAgACAwIAAQICAP3+/gABAAAAAgICAP///wD8/PwAAgIDAAICAgAAAAEA////AP///wAAAAAAAwMDAP///wAAAAAABAQEAP///wAAAAAAAgICAP39/QAAAAAABAQEAP39/QD9/f0AAQICAAICAgD9/v4AAQICAP/+/gD7+/sAAQEAAAAAAAD+/v4AAAAAAP///wACAgIAAQEBAAIAAQAAAAEAAQEBAAAAAAD//wEAAQH/AAEBAQD8/PwAAAAAAAAAAAAAAwMA/wECAP//AAAA/gAA//8AAAICAQD///4A//7+AP7+/wADAwMA////AP7+/gAAAAAAAgICAAD/AgD///8AAAAAAP///wD///8AAQEBAAEBAQAAAAAA/v7+AAAAAAACAgMAAQEBAAIBAwD/AP8A/Pz9AP8C/wD///8AAQH/AAICAgABAv8A/f39AAICAgABAAEA//8AAAEBAgABAQIA+/z9AAAC/wADAgIABAECAP8EAQD+/v4AAgQEAPj6+gACAQMA/Pz8AP///wABAQEABAQEAAAAAAD8/P0AAQEBAP7+/gACAgIAAQECAAYGBQAAAQEA/vn8APj5+gD//v4ABwYGAAMFBQD4+foACAcJAAEBAwD9+vwABQYGAP76+gD/AQAA/gD/AP3//gABAQEAAQABAAAAAQADAwMA/f39AAYFBQAEBAQAAAAAAPr7+wADAgMACAYGAP39/QD///8A/P39AP7+/gD+AP8AAQEBAP38/AD8AfwABQUGAPz8+wABAQEABAQEAPv6+gD///8A/Pz8APv9/QD/AP8A9fr5AAYFBQAIBQYAAv39APr8+wAHAAAABAACAPj9/QD+//8A/wD/AAD+AAD9//4ABwIDAAH//wD9/v4ABgQFAPv8/AD5/PoA+P/+APsB/QAFAgMABwQEAPn7+gD9AQIABAQEAP79/AD4+/oAAf7/APv7+wAB/wAACAMFAPn/+wD+/f0ABAUFAP/+/gABAQEA+/z8AP7+/gAGBQUABgEFAAIBAQABAQEAAP4BAP//AAAAAwEA/gAAAAEAAgD//v8A/v/+AAQEBAD+/v8A/P39AAQAAQACAQEAAQAAAP0A/QD6/v0AAvkBAAEDAgAFBQQAAv7+AP4D/QD8/v0ABgEDAAUDBAD9/PwAAgEAAAQCAAAA//8A/gEAAAMBAAAA//8AAgAAAPwA/wACAgIAAAAAAP39/QD8/f0A+/v8AAQEAwAAAf4AAAD+AAIA/wAGBAQA9Pn1AAACAQABAAEABgICAAH/AAAAAQEAAQEAAAAA/wAFBQQA+fr5APwBAgD+BAYAAQIBAAH7/wAAAQAA/wH+AP0A/wAAAQAA/gD/AP7//wD//v4ACgoKAP7+/AD7AQAAAQH/AAP/BQD3+PgA9/r5AAcGCAAJBQcAAQICAPv7+wAKBwkA/wEAAP8C/wADAAEABAECAPz//gACAgIA+/v7AAQEBAD//vwA/v7/AAIDAgD8/f0AAgICAAICAgAAAAAA+vz7AAcEBQD5+/oABQIDAAwKCwD5+voA+/z7AP8AAAAHBgcABwYHAPb39gD3+/oA/QD/AP36+wANBwsAAP7/AAgICAD///8A+fv4AP///wD9/f0A//7+AP0B/AD5/PoAAgADAAIBAgACAgIACgoKAPz+/QD7+fgA///9APr7/AAFBQUAAQECAAIAAQAA//8A+vz7APT49QD3+vgA+/78AP79/QABAgIAAQEAAAICAgD9/f0ABAECAAMDBAABAQEA//3+APr5+gACAwIAAwQDAAD+/wADAQEA+/38APz9/AAA/wAABAMDAAQBAgAHBAUAAQEBAP8EBAD9/f0A////AAMCAgAGCAUAAwECAAYFBQABAP8A/Pz8APz8/AD9/wAA+v79AP/9/AACAAIAAQIAAAQABAD5/vwA////AP0A/wD+//8AAAAAAP3+/gD+//4A/f/+AP/+AAAB/AAA+Pv6AP4A/wABAf8AAP0AAP8AAQD/AP8AAP8AAAD/AQAAAAAAAAAAAAAAAAABAgMAAAH/AAICAQD+/f8AAgABAAAAAQAEAwMA/v//AP8BAQAEBAQA/f39AAAAAQABAAAAAP//AAEAAQAEAwMAAgEBAAMBAgD9AP8AAP7+AAUEBQAEAQMAAwICAAMBAgACAP8AAAAAAPz9/QAAAQEAAgEBAAQBAgACAQIA/f39APz8/AACAwMA+vv7APv9/gAFAwQABwYGAAD//wABAAAAAwIBAAIBAQABAQEAAwMDAP///wD//wAAAQEBAP7+/gAA/wQA//3/AAMDBAAAAwAAAAT/AAoHAwD+//0AAgEAAPz9/QD+/v4A+/z8APv9/AD6/f0AAP8BAPv8+wAAAAAAAw4REIAAAAAAAQEBAAECAgAAAAEA/v39AAAAAAABAQEAAQEBAAAAAAAEAwMA////AAD/AAD/AP8AAgECAAEA/wD9/f4A////AP///wAAAQEAAQEBAP39/QACAgIAAAAAAP///wAAAAAA/v7+AAAAAAD///8AAQEBAAAAAAABAQEAAAAAAAAAAAABAQEA//7+AAICAgABAQAAAP//AP/+/gACAQEAAwIDAAQDAwABAAAAAQEBAAYEAwACAAEAAP//AAQDAwABAAAABAECAAICAgABAAAAAgABAAIBAQADAgIAAgEAAAAAAAADAgIAAgICAAEAAQACAQEAAQEAAAICAQABAf8AAQAAAP///wADAgIAAAD/AAMEAwACAgEABQMEAAIBAQD//v8A/v79AAICAgADAwMABQUEAP///wACAgIAAAAAAP7+/gACAgIAAgEBAAMDAwACAQEAAwMDAAEBAQAA//8AAQAAAAQDAwD//wAAAAD/AAEBAQABAQAAAAABAP/+/gD+/v4AAAABAAQDAwABAQIAAQEBAAEAAAAFBQUAAgEBAP///wAAAAAAAgICAAICAgD///8A/Pz8AAICAgABAQEA//7/AP///gD//v8A/v79AAQCAwABAAAAAQAAAAICAgAAAAAAAgICAP///wAAAQEAAQEBAAEBAQD///8AAAAAAAICAgAAAAAAAAAAAAQEBAD///8AAQEBAAICAgD///4AAQEBAAAAAAAAAAAA////AAEBAQAAAAAAAQEBAAD/AAD+//8A////AAICAgAAAAAA/v7+AAEBAAAAAAAAAAAAAAICAgD///8AAAAAAAEBAQD///8AAgICAAMDAgD///4A/f7+AAICAgACAwEA/v7+AAAAAAADAwIAAAABAP///gACAwEAAAH/AAICAAD///8AAAD/AP/+/gACAgIA//7+AAEBAQACAQEAAQABAP///wD///8AAgICAAECAgD8/f0AAAAAAAICAgD///8AAAAAAAAAAAADAwMAAAAAAAAAAAACAgIAAAAAAP///wABAQEAAQEBAAEBAAAAAAAA////AAD/AAD/AP8A/wAAAP///wD///8AAQECAAEBAQABAQEA////AP7+/gD+//8A/v//AAABAQD+//8A/v7+AP7+/gD/AP8AAgECAP//AAD9/f0A/v7+AAMDAwABAQEA/v7+AAAAAAAAAP8AAAEBAAAAAQD//wAA////AAEBAgACAQIAAQABAP7//gD+AP8AAQIBAAEBAQABAQMA/v7+AAABAQAAAQAAAAEAAP/+/wD9/v4A/Pz7AP8AAgAEBAQA/f39AP39/QD+AAAA//8BAAABAQACAgIA/f7/AAABAQD/AAAAAAEAAAEBAQD+//8A/v//AP0A/gD//v8A/v//AP8AAAAAAQEA////AP39/gAAAAEA/wH/AP8AAAACAgIAAgICAP39/QAAAAAAAQEBAAEBAgD+//8AAQEBAAAAAAD+/v4A////AP39/QABAQEAAwMDAP///wAAAAAAAQEBAP///wACAgIAAAAAAAAAAQD///8A////AP///wD///8AAQEBAP///wABAAAA////AP///wAA//8AAgICAAD//wD9/f0AAQEBAAIAAQACAQAABAMEAP39/QACAQEAAgEBAAMCAgAFBAUAAwIBAAEBAAD//v0AAQAAAAUFAwABAQEABAQDAAD//gADAgIAAwICAAEBAQADAwIAAP//AAMDAgAFBQUA////AAMCAQACAgIAAQEAAP///wD///8AAAAAAAD/AAAFBAQAAQEBAAAA/wD///8AAwMDAAQEBAAAAAAA/f39AAMDAwAAAAAA/v7+AAEBAQAAAAAAAwQEAAMDAwD+/v4A/f/+AAAAAQACAgIAAQEBAAAA/wAAAAAAAwQEAP///wABAQEAAQEAAAEBAAABAQEAAQEBAAEBAQD///8AAAAAAP39/QADAwMA////AP///wAAAAAAAAAAAP///wD///8AAgICAAEBAQAAAAAAAgICAAICAgD+/v4AAAAAAAAAAAADAwMAAQEBAP/+/gAAAAAABAQEAAICAwABAQAA////AAEAAQD/AAAA////AAEBAAAEBAQA//8AAP7+/gAAAAAAAgICAAMDAwADAwQA/v79AP7+/gAEAwMA/f39AAAAAAD+/v4AAgIDAAEBAQAAAAAA////AAMDAwAAAAAA////AAICAgD9/v0AAQEBAAEBAAD9/f0AAAAAAAEBAQD8/PwA////AP/+AQACAgMAAP8BAP39/QD//wAA////AAAAAAD///8AAQEBAP///wD9/f0AAAAAAAAAAAD+//8A//8AAPz8/AD/AP8A/wAAAAAAAAD+/v4ABAIDAAICAgAAAAAA+vv9AP39/gD///8A//8AAAEBAQD//wAAAQEBAAAAAAACAgIA/v7+AP7+/gD19fUA/wABAAIBAgD//wAAAQEAAAAAAAD4+foA+Pn7AP///wAEBAYA/v3+AAUEBQAAAAIAAQICAP3+/gD7/P0A+vv8AP39/gADAQIAAgIEAP4A/wD+/f4ABgUGAAIDAwAAAQEA+vv6AAAA/wABAgIABgUHAAICAgD//wAAAQICAAAB/wD3+PcAAwMDAP///wAAAAIABQQFAPz9/AD9//4A/v79AP3+/QADAwMAAAAAAP7//wD4+/oA/AD+APj7+gADAQIABQMDAPz9/QD7/P0ABgQEAPz8/QD+AgAAAgMDAP7//gABAgIAAP//AAIBAQD//v8A/QAAAPr+/AAGAwQA////APv//gD8/v0AAP//AAcHBwADAQMAAv4AAAQFBAD4+/oACAYGAPz8/AD/AgEAAwIDAPz9/QADAgMAAgICAAAAAAABAQEA+/39APj9+wADAQIABAMDAAYDBAAAAQEA+/38AP0A/wADAAEA//8AAPz//QAFAwQAAwICAP//AAABAQEA/P79AAABAAAEAgMABAECAP7//wD7/f0ABQIDAPb7+QD4+voABgQEAP3+/gD8/fwAAwECAAcGBwADAgIA/wH/AP39/QAAAAAAAQAAAAEBAQAAAAAAAwECAPv8/AD+/v4A/f39APz9/AD+AQAABAMDAAEBAQD5/PoAAgICAA0JCgACAQEA/QD/AAD+/gABAQIAAQEAAAQDAwABAQEAAQAAAAMCAwD///4A/v7/AAUEBQABAQEA+/38AAUFBQD//v4AAQICAPn7+gD9//4AAwECAAUDBAAA/v8ADQkKAAIAAQAEBQMAAwICAAMDBAD3+fgA////AAEAAAADAQAA/v/+APv8/QAHBgYA/fz9AAECAgACAAAAAQEAAPr7+wAGBQYAAQEBAP7+/gD9//4AAQEBAPz8+wADAwMABwYHAAUEBAD8/f0A/v7+AAECAQD8/fwADAoLAAAAAAD3+vgA/f79AAEBAQAEAwQAAAD/APL29AD5/fwA/P38AAkHCAACAAEACAgIAAMDAwD6+/kA+Pr5AAMB70IODQAAIABJREFUAQABAgIA+/78AP8B/gD+AAAACQcIAAkHCAACAQIA/f79APv6+gD7/fsA/f79AAUEBAAFBQQA//8AAP79/gD3+fgA9fn2APX59wD8/v0AAgEBAAECAQD+//4AAP8AAP/+/gABAAAABAECAP8AAAD//f4A/gH/AP/+/gAGBQYAAAAAAPz9/QD+/v4AAgMCAAMBAAAHAwQABwUFAAMDBAAEAgIABAIDAP39/QAAAQAAAP//AAUCAwADAgMABAMDAPv9/AD6+/wA+fv7APj8/AD9AP4A/f7+APv8/AD/AgEA/gAAAPv9+wD7/f0A/P79AP8AAAD9/v8A+vv6APn9/AD5/fwA+Pz8APf7+gD5/fsAAAEBAP8A/wAAAAAA/wAAAAABAAAB//8ABQQEAAYFAwAEBAMAAAD/AAAAAQADAwMABQQEAAQBAgAHAwQACAQGAAcEBgACAAEAAAABAP///wAAAQIAAgECAAH/AQABAgIAAAEAAAECAQD+/v4A////AAEBAAABAQEAAgICAP///wADAgIABAIDAAMCAgD+/v4AAwEBAAIBAQAA/v8A/v7+AP7//gD7/fwA+/v8APr7/AD4+voA+Pv6AP8AAAD+/f0ABAICAAD//wD8/fwA/fz8AP7+/gADAgIA////APz8/AD7+/sA/v7+AP///wABAAAA/Pz9APr7/AD3+PYA/P38AP3+/wACAQIAAgMDAAQCBAAGBQcAAQECAAMAAwAHBAUABgcGAAsICQAKBgcAAw0QD4AAAAAAAAAAAP/+/gAA//8AAgEBAAEBAQD/AAAA/v7+AP///wAA/wAA/v/+AAMDAwAAAAAAAgEBAAEAAQD//wAA/v7+AAMDAwACBAMAAQEBAAAAAAABAQEAAQEBAAICAgAAAAAAAgICAAAAAAACAgIAAgICAAEBAQD9/f0A////AAAAAAABAQEA//7+AAEBAQAB//8AAgEBAAEBAQAEAwMABAIDAP/+/gACAQEABQICAP78/QABAP8AAwEBAAQCAwACAQAABQQDAAH/AAD///4AAwMCAAEAAAAB//8AAgICAAQCAQABAgEAAAAAAAIAAQACAQEABAIBAAEAAAABAP8ABAMEAAMCAgAAAf8AAwICAAMDAgAA//8AAgEBAAUFBQACAgEAAQEBAAAAAAABAQAAAAH/AAEBAQABAQEA////AAMDAwACAgIA/f39AAAAAAABAQEA////AAAAAAAEBAQAAAAAAAICAgD///4AAQIBAAMEAwAA/wAA/fz8AAIBAgAFBAUAAP/+AAIBAQABAAAAAQABAAEA/wAA/wAAAP//AAD/AAABAAAA////AP7+/QAA/wAAAQAAAAAAAAACAgIAAwICAAH/AAADAgIAAgECAP///wD+/v4AAQEBAAIBAgAA//8AAgECAP7+/gABAgIAAQEBAP7+/gABAQEAAQEBAP7+/gABAQEAAgICAAAAAAD///8AAgICAAQEAgABAQEAAgICAAAAAAACAgIAAwMDAAMDAwACAgIA/f7+AP7//gABAAAAAgIBAAYGBgABAQAA/v7+AAICAgADAwMA/v7+AAEBAQD///8ABAQEAP///wACAgIAAAAAAAABAAAAAf8ABAQDAP7+/QABAQEA////AAEBAAACAgEA/v79AAUFBAACAgIAAP8AAAIBAQACAQEABAMDAAD//wAEAwQAAQABAAIAAQAAAAAA////AP7+/QD/AQAAAP//AAEAAAD+//8AAQEBAAAAAAABAQEAAQEBAAAAAAABAQEAAQEBAAAAAAABAQEA////AP///wACAgIAAAAAAP7+/gD///8AAAABAP/+/wAAAAAA//7/AAMCAgAAAQEAAgICAAAAAQD///8AAAAAAP7+/gABAQIA////AAAAAAD//wAA////AAAAAAABAQEAAQACAP7+/gD///8AAgICAAEBAQAAAAAAAQECAP7+/wD9//8A/Pz9AAICAwACAgIA////AAEAAwD9/f4A/v7+AP3//gAAAAAAAwMDAP//AAD//wAA/wIBAP7+/wD+//8A//8AAP7//gD9/v4A/wAAAAEBAgADAwMA/Pz8AP7/AAACAwMA/v//AAAAAQD9/v8A/v//AP7+/gD8/v0A////AAAAAAD9//4A/wAAAP///wABAQMAAAABAAAAAQABAgEAAQECAP3+/QAAAQAAAAICAP///wACAgIAAAAAAP3+/gABAQEAAQEBAAAAAgAAAAEA////AAAAAAAAAAAAAQEBAAICAgABAQEAAAAAAAICAgABAQEAAQEDAP7+/wAEBAUAAQEBAP7+/gABAQEA////AAEBAQABAQEAAQEBAAD//wAAAAAAAQEBAAEAAAACAQIAAwICAP///wABAAEAAwICAP8A/wADAQEAAgICAAIBAQAA//4AAAAAAAMCAQACAQIAAgEAAAAA/wAFBAUAAQH/AAD+/wAFBAQAAwIBAAICAgACAQEA/v/+AAMDAgADAQIA//8AAAEBAAAEAgIA//7+AAEBAAAAAAAA//8AAAEBAAADAwIAAQEBAAIBAgAA//8AAgMBAAAAAAAGBgYAAAAAAAEBAQAAAAAAAAAAAP///wADAwMAAQEBAP///wABAQEA////AP3+/gABAQEAAwIDAP79/wACAgIAAQABAAMCAwACAgIA/Pz9AAECAQACAgIAAQEBAP///wAAAAEAAQEBAP///wD+/v4AAQEBAAICAgAAAAAAAAAAAAICAgACAgIA/v7+AAAAAAABAQEAAAAAAP7+/gABAQEAAQAAAAAAAAAAAAAAAgICAAAAAAACAQEA/v79AP//AAABAQEAAQEBAAAAAAACAgIAAgIBAP3+/QACAQIA//8AAAEBAAAAAAAAAAAAAP//AAACAgIAAgIDAP//AAACAgIAAAD/AP///gD+/f0AAQEBAAICAgAFBQUA////AP///wACAgIA////AAAAAAADAwMAAAAAAP///wAA/wAAAgICAAABAQD//gAAAwMDAAD//wACAQMA/wAAAAMCAgAAAAAAAgICAAEBAQABAQEAAgICAAEBAQD///8AAQEBAP39/wD8+/wAAQABAAEAAgD+/v8AAQEBAAICAgACAQEA//7/APz9/QAAAAAAAQABAAEBAQADAwEA/gAAAAEBAQAAAAAAAAAAAAABAQAAAQEAAP8AAAICAwAAAP8AAQEBAAAAAQAFBgYA9/f5APn5+wAGBwYAAQEBAAQDAgAA//8AAQIDAPv7/AD8/f0AAQECAP8AAQAEBAUAAgMDAP38/gAEAwUA+Pv6AP///wABAAIAAQECAAgHCAD9/P0A/v7+AP7+/gAIBwgA+Pf4AP8BAQD///8A///+AAsJCgABAP8AAgEBAP4A/wD5+/sA/Pz8AAcHBwABAQIA/v7+AP///wD7/fwAAAAAAAICAgAFBAUAAgABAP7//gD/AAAAAgIDAPr9/gD+/v4AAgEBAP3+/QAAAAEA/wD/AAEDAgD/AAAA+/z8APz9/QAEBAQA/wD/AAD/AAADAAIA/gD/APj8+gD8/f0ABAEDAP//AAD9/v0A/P/+APr8/AAHBQUABwUHAAQEAwD09/cAAQABAAEBAADy9/YACQgJAAUCAgD9/v4A/wAAAAUDBAD7/PwAAgEBAP//AAAFBAQA+f38AAgDBAADAwMA+v38AP7+/gACAQIAAQIBAPv9/QABAAAAAP7/AAUFBAAHBQgA/f38AP8AAAABAAEAAAEAAP3+/QACAgMAAwIDAP4A/QD7/vwAAf//APz9/AABAQEAAgMDAAH//gABAQAA/fv7AAIDAgD+/v8ABQQEAAECAgAFAQQAAwMEAPr9+wD/AP8AAQABAAACAAABAQIAAwICAAYCBAABAQAAAQAAAAoGCQD//v8A/f3+AAEBAQACAAEABgMDAAQBAgADAQIAAwECAAD9/gAA//8ABwUFAAkGBwD8/vwA/f39AAYEBQD9/P0AAQEAAPr7+gD//wAADQkLAAH//wADAQIACAYIAAD//wAGAwUADQsKAO/x8QD+//8ACAUGAP38/QACAgIA/P39APn7+wD/AAAAAQICAAEAAAAEBAQA+/38AAAA/wAGBAUA////APv7+gAA//8AAwICAP//AAD+/v4AAwIDAAEBAQAA/v4ABQUFAPr7+wACAgMABAMEAPb49wD9/v4A/P7+AAUDAwACAQEA/v7+APn8+wD6/fsAAQIAAAcEBQAGAwUABAMFAPX29AD6+/sAAwECAAMDBAD6/vwA/f78APv8/AADAwMABwQGAAMBAgD///4A+/z6APz9/AD+//8ABQMEAAsJCgAA//4A+vz7APr+/AD5/voA+Pz5APz9/AAHBQUA////APv9/QADAgAAAgAAAAUEBAADAgEAAAEAAP///wAAAwEAAQEBAAH/AAAAAQEA/wEAAAMCAwADAgIABAAAAAgGBwAIBAYAAQABAAEBAAAAAAEA/v/+APv7/AD///8ABAQEAAAAAAD///8A/P39APr9/AD5+/oA9/r5AP4A/wD9Af8A/P79AP8AAAACAwIA+vz7APv//gD9AP4A+Pv6APn8+wD6/v0A+/79AP8BAAD8/v0AAQICAAH/AAD//v4ABgQFAAQCAwAGAwUABQMEAAMAAQAEAwMABQIEAAL/AgD///4AAAABAAEAAQAFBAQAAQABAP///wAAAQEA/wABAPz+/gD/AQAA/P7+AAABAgAA/wAABQMEAAMBAQAAAAAAAgEBAAICAwACAQEAAQEBAAQCAwAHAwQABwQFAAkGBwAFAwQABQMDAAcEBAADAgIAAQABAAEBAQACAgIABAMCAAMBAwADAQIABwUFAAYEBQAJBwcAAQABAAQDAgAMCQkAEQ4NAAsJCQAHBgUACAcHAAYFBAADAwMAAgIBAAMDAgAEBAMAAQEBAAAAAAABAgIAAQIBAP7+/gD9/f0A//8BAPv9/QD8/P0A+/z9APv8/AAAAAEAAQEAAAAAAAADAgIA/f39AAEAAAAEAwMAAwoNDID///8AAgICAP///wACAgIAAAAAAAEBAQABAgEAAgICAAEBAQAAAQEAAAEBAAECAgABAQEAAAAAAP/+/wAAAAEAAQEBAAABAQD9/v4A////AAICAgABAQEAAQEBAP7+/gACAgIAAgICAP///wAAAAAAAAAAAP///wABAQEAAAAAAP7+/gACAgIAAgABAAUFBQABAAAABQMDAAQEBAAA/wAAAgECAAIBAQACAAAAAP7+AAUEAwD//v0ABQMEAAUDAwAFAwIABAMDAAD+/wACAP8ABQMCAAMAAAAEBAIAAwIBAAICAQACAgIAAQABAP/+/QAEAgIAAgIBAAAAAAACAgIAAP//AAMDAwACAgIAAQEAAAEBAQAEAgIAAQEBAAICAQACAgIAAQAAAAEBAAABAgAAAAAAAAIBAQABAQEAAAAAAAMCAwACAgIAAQEBAAEAAAADAwMA////AAAA/wABAQEAAQEBAAEBAQACAgIAAQEBAAAAAAABAQAAAwMCAAUFBAAAAP8A/wD/AAIDAgADBAMAAAD/AP3+/QD///4AAgICAP///gABAQAAAAD/AAIAAAADAwIAAgIBAAQEAgAEAwIAAAD/AP///gD8/fwAAwIBAAAAAQAAAAAAAwMDAAAA/wAAAQAA///+AAAAAAADAgIAAQAAAAEAAAD+/f4ABAMCAAMCAwABAQEAAwICAAEAAAACAQEAAAD/AP8A/wD///8A////AP7+/gABAQEA////AAEBAQD///8A/v79AAICAQADAwEAAgMCAP7+/QD//v0AAgEBAP7//wABAAAAAgEBAP7//wD9/f0AAgEAAAEBAAADBAIAAQEAAAABAAABAQEAAwMDAP///wADAwMA///+AAICAQABAQEAAAAAAAAAAAAAAAAAAQEBAP///wABAQEA////AAAAAAAAAAAA///+AAEBAAACAgIAAQEAAAMDAwABAgEAAAABAP7//wACAgEAAAEBAAICAgACAgIAAAAAAP///wD///8A/v7+AAAAAAD9/f0AAgICAAAAAAABAQEAAQEBAP7+/gABAQEAAP8BAAICAgD//v8AAQEBAAEAAQABAQIA/v39AP//AAAAAAAAAQEBAP7+/wABAAEAAQEAAAEBAQD9/f4AAAAAAAICAgABAQEA/Pz9AAEBAQAAAAAAAAABAAEBAQABAQIAAAABAAAAAQD9//8AAAAAAAICAgAAAAAAAP8AAP39/gD///8AAQEBAAABAAAAAAAAAAABAP//AAACAgIA/Pz9AAAAAQD+/f4AAAAAAP7+/wAAAQAA//8AAP8AAAD7/PwA//8AAAACAgAAAQEA////APv9/gD+//8A/wAAAAAAAAAAAQEAAgICAP7+/gABAgIA/v7+AAEBAgD8/v4A/wEAAP8A/wABAgEAAQACAP7//wABAQEAAgMDAAICAgD///8A////AAEBAQABAQEAAgICAP//AAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAD+/v4AAAAAAAAAAAAAAAAAAgICAAMDAwAAAAAAAAAAAP7+/gABAQEABAQEAAAAAAABAQEAAAAAAAD//wAEBAQA/v3+AAQCAgADAgIABAQEAAAAAAADAgEAAAD/AAUEBAACAQIA/v7+AAH//wADAQEAAgIBAAD//wAAAAAAAwEAAAIBAQAAAP8ABAQDAAAA/wABAAEAAwMDAAICAQACAQIAAAD/AAUEBAADAgEAAAAAAAICAgABAAAAAQEAAAICAQAFBAMAAgIBAAEBAQABAQAAAQEBAAMCAgABAQEA/wD/AAAA/wD+/v4A////AP///wD///8AAwMDAAEBAQD9/f0AAQEBAAMDAwABAQEAAQEBAAECAgD//v4A///+AAAAAQACAgIA////AP///wAAAQEA/wD/AP///wD///8AAAAAAP//AAAAAAAAAAAAAP///wACAgIAAQEBAAEBAQADAwMAAQEBAAEBAQD8/PwAAAAAAAAAAAABAQEAAgICAP///wABAQEAAAAAAP///wACAgIA/v//AAEAAAADAwMAAAAAAAEBAQABAQEAAAAAAAAAAAABAQAAAQAAAAEAAQD9/v4AAQAAAAICAgD+/v4AAAAAAAQEBAADAwQA/v7/AP7+/wD///8A//8AAAABAAAB/wAAAQEBAAEBAQABAQEA/v7+AP7+/gAAAAAAAAAAAAICAgD///8A/v7+AP///wD///8AAAAAAAEBAgD///8AAQABAP//AAD//wAA/v7/AAAAAAD9/f0AAAAAAP39/QACAgIAAAAAAAEBAQD8/PwAAAAAAAAAAAABAQIAAAABAP///wD+/v8A//8BAAEBAQD//wEAAAAAAPv9/AAAAAAAAQAAAAEAAAAAAP8ABAIBAP/+/gD8/fsA/P7/AP39/QD9/v8A////AAMDAwAEBQUAAwMDAAICAgAAAQEAAgMCAAEAAAD5+vgAAAABAAD/AAAEBQYAAAABAP7/AAACAwMA/v4AAPf4+AD5+vkAAQECAAkICAABAQIAAgECAPb5+AAFAwQABAMEAAMDAwD9/v0A9ff3AP8AAAD+/v4AAAEAAPr7+wABAQAAAwICAAYEBQAEBAQABAQDAPz9/QD6+/oA////AP79/QACAgMAAgMCAAQCAwD9/PwA+/z8AP7//gACAAIABgUGAAECAAD//v4AAgEDAP79/QD4+vkA/wICAAABAgACAwIA/gEAAPn8+wD8/v0AAAAAAP8BAAAAAgEA/v//APz8+wADAgMABAMEAP///wD+AAAAAgICAAIAAQD9AP4AAwMEAPwA/gD5+/sAAgECAA0KCgD8/PwAAf8AAAQEBAD1/PkA/QD/AAoGBwAAAAAA+/38AAAAAAAFBAUA/v7/AAEBAAACAwMA+f37AAIAAQD9//4AAQECAAIBAQABAAEABAIDAP8A/wAFAwQA/v/+APwA/wD//gAAAgIBAAIAAQD6/PsA////AAUCAwADAgIA/v7+AAAAAAD/AQEAAwQDAAUDBAD8/v0A/f/+AAD/AAAA//8A+vz7APj4+AD5+/sAAwICAAABAAAFAgQAAwIDAP3//gAEAgMACgcHAP8CAQD+//8AAgABAAQAAQACAAEABgUGAAMAAQD+/v0A/f/+AAIBAQAFAQEACQcIAAL/AAADAQIABAIDAAIBAQAFBAQABgUEAAgGBgD9/f0AAQD+AAYFBAABAgAA///+AAD//wACAP8ABQECAAMBAQADAgMACAUGAAEAAAAJBgYAAP8AAPP29QD+/v4ACQYIAAYHBQACAgIA+vv7AP0B/wD7/PwA+fv7APz9/AABAAEA////AAcHBwACAgEA/f39AP39/QAAAAAAAAAAAAIBAQAA/wAA/Pz8AAYFBQACAwMAAAEBAAQCAwAICAgA+/38APv7+wD8/f0AAQEBAAoICAACAQIA+v37APn7+gD7/fsAAf8AAAYEBQAFAwQA+vz7APv9+wAAAQAABAQCAPz+/AD5+/oA/v7+AAD//wAGBAQAAP7/AAcEBQD+/v0A+fr5AAICAwAAAP8A////AAEBAgD9//8A+fv6APb9+gD5/vsA/QD+AAMCAwADAgIA/f79AP7//QAA/v8AAAAAAAICAQD+/v4A/P/9AP8BAAAA//8AAgEBAAIAAAACAgMAAQECAAUBAgAHAwMABQIDAP8AAAD9/v0A/wD/AAD//wD/AQAA+Pn5APv+/QD8/v0AAAABAP///wD+/v4A+Pr6AP4AAAD5/fsA/QD/AP4A/wD+/v4A/f79AP4BAAD6/PsA+/7+APr9+wD8//4A/f/9APv+/QD7/PoA/gD/AP4A/wACAQEAAQEBAAUCAgAKBwgACwcIAAUDAwD//v8AAgEBAAUCBAAFAgQAAgABAAQEBAD+/f4AAwMEAAAAAAABAgIA+vz8AAEDAgD+//8A/v//AP0A/wAAAgIAAQEBAAMBAQABAQEABgQFAAD/AAADAQIABgIEAAcDBAAGAwQAAP7/AAgFBAAMCAkABAICAAcEBgAGBQUAAgEBAAEAAAAB/wAAAgECAAMDAwADAgEAAAAAAAcHBgALCQoACQcIAAUEBAAGBAUACAUFAAYFBAALCAgABwUFAAQEAwAFBAMABwUFAAcHBwAHBwYABQUFAAcHBgAEAgMABwcGAAcIBwAEAgMABgYFAAYFBQACAgEAAgIDAPz9/QD8/f0A////AAIDAwAAAAAA/v7+AAABAAD/AAAAAQEBAP39/QD9/f0AAwsODYAAAAAAAgICAAICAgABAQEA////AAACAQAAAAAAAQEBAP///wD9/f0AAAAAAP///wABAQEA/v7/AP/+/gABAQIAAgICAAD//wAAAgEAAAAAAP///wAAAAAA/v7+AP39/QAEBAQAAAAAAAEBAQAAAAAAAwMDAAAAAAABAQEAAQEBAAEBAQABAQEAAQAAAAAA/wADAgIAAAAAAP///wABAAAAAQAAAAH//wAB//8AAwEBAAQDAwADAQIAAgD/AAAA/wADAQIAAgEBAAEA/wAEAgEABgQEAAD+/gAA//8AAgEBAAIBAQADAQIABAQEAAQEAwADAgEA/v7+AAMDAwACAQEAAQAAAP7+/gADAgEAAgMBAAMBAgD///4AAgICAAIBAAABAf8AAgIBAAUFBAADAgMA//7/AAMCAQADAgIAAQEBAAAA/wAEAwMAAP//AAECAQADAQEA//7+AAIBAQD/AAEAAAAAAAICAgAAAAAAAQEBAAEBAQAEBAQA////AAAAAAAAAAAAAQEBAAICAgABAQEA////AAAAAAACAgIAAgICAAEBAQABAQEAAAD/AAEBAQAAAAAAAQEAAAICAgD+/v4AAAAAAP3+/QABAQAABAUEAP8A/gD+/f0AAQEAAAECAgAAAP8A/v7+AAMDAgD///4AAAD/AAEBAAACAQEABQQEAP7//QADAgEAAQEAAP39/AACAgEA///+AAEBAQAAAAAA/v7+AP7+/gACAgIAAQH/AAAB/wACAwEA///+AP///wABAQEABAQDAPz8/AADAwMAAwMDAAICAgAAAAAAAgICAP7//wAEAwIA///+AAQEAwACAgIAAwICAAMCAwAA/wAAAP//AAEBAQAAAP4AAAD/AAEBAQACAgIAAwMDAP///wAAAAAAAQEBAAICAgD///4A/v7+AAQEAwD///8AAgICAAQEBAAAAAAAAQEBAAICAgD+//8AAAEBAAEBAQAB/wAAAgEBAP7//wD///8AAQEAAAAAAAAAAAAA////AP///wABAQEAAAAAAP///wD///8A////AAEBAQABAQEA//8AAAAAAAD///8AAAAAAP///wABAQEAAAD/AP7//wD+/v4AAQECAP/+AAD///8AAQECAAIDAgABAQIAAgICAP///wD8/PwA//8AAP39/QAAAAAAAAABAAEBAgAAAAAA/f39AAEBAQAAAgEAAQEBAAEBAQAAAAAA/f79AP79/wABAQEAAQEBAAMDBAACAwMA/v7/AP///wD+/v4A+/z8AP7+/wD/AAAAAAAAAAABAAD///8A/wABAP7+/gABAQIA/v//AP8AAQD+/v4AAQECAAABAgABAgEA/f39APz9/QD//wAAAgICAP7+/gD/AQAA/wD/AP8AAAD//wAA/wAAAP4A/wD//wAAAQECAP///gAAAAAA/wEAAP7+/gAAAAAAAQEBAP8AAAD8/PwA////AP//AAAAAAAA////AAMDAwD///8AAAAAAP///wAAAAAABAQEAAAAAAD///8AAgICAP///wD9/f0A/v7+AP///wABAQEAAAAAAAEBAQAAAAAA/v7+AAMCAwD///8AAQAAAAIBAQD///8AAgEBAP/+/gABAP/caeF2AAAgAElEQVQAAQEBAAIAAAAA/wAAAf/+AAUEAwADAgIAAgH/AAMDAwAEAgIAAgIBAAEBAAD//v0AAQAAAAQEBAABAAAAAAD/AAAAAAAB/wAABAMDAAIBAQABAQAA////AP79/QABAQEAAQEBAAQEBAD+/vwAAQEAAP///gD///8AAQEBAAEBAgADAwMA/wD/AAAAAAABAQEAAwMCAAICAQAAAP8AAgICAAMDAwABAQEAAQEBAAEBAQD+/v4A/wAAAAAAAAABAAAAAgECAAAAAQD///8A/v7+AAICAgD+AP8AAAAAAAEBAQAAAAAA////AAAAAAACAgIAAQEBAAICAgAAAAAA/f39AP7+/gD///8AAQEBAAAAAAD+/v4A////AAEBAQAAAAAA/v7+AAAAAAABAQEAAQEBAAICAgD+//8AAQEBAP7+/gD+/v4A/v7+AAMDAwAAAAAAAAAAAAAAAAABAQAA//3+AAABAQAAAP8AAAAAAP8A/gD///8AAgICAAEBAQD+/v4A////AAAAAAD9/f0A////AAMDBAAEAwIAAgICAP///wD+/v4AAAAAAAEBAQAAAAAA+/38AP8AAAD/AQAAAAD/AAAAAAABAQEAAwMDAP39/QABAQEAAAAAAP7+/gD9/f0A////AP7+/gAAAAAAAQEBAAAAAAABAQEA/v7+AP7+/gACAgIAAAAAAAEBAgD+/gAAAAAAAAEBAQAAAAEAAAAAAP7+/wD+/v4A/v7+APz9/QD9/v4AAgEBAAUFBQAA//8AAQACAAAAAAAFBAUA/P39AP7/AAACAQIA/f39AP7+/wAAAAEAAQIBAP39/QD9/f0AAwMCAAMEAwD///8A+ff5AAYGBgD9/P0A/v4AAP8AAAD//v8AAAECAAIAAAABAQEA+/z8AP8CAQACBQUACQcHAAMAAQD6+voAAgICAAcHCAD2+PgAAwQDAPf49wD+/v4ABgYGAAECAQAAAAAA//7/AAUFBQACAgIA/v3+APn6+QD09/UA/f39AAICAgD9/P4ABQUFAAD/AAADAwMA9/r4APr8+wAAAQEAAQAAAAEBAQABAAIACQcIAAYDAgD9AP0A+v78AAAAAAD8/PwABQMEAAEBAQD8/f0ABQIDAP3//wD8/v0AAAEAAAEAAQD+//8A/wABAAICAgD/AAAAAQMCAAH/AAD+AP8AAwACAP3+/gD9AP8A/v3/AAL+/wABAgEABgUFAAD//wD6//4A9/v5AAL/AAAFBAQAAAEBAPv8/AD///4ABwYGAAMCAgD7+/sA+Pz7AAICAgD/AQAA+/39AP///wD/AQAAAAAAAAEBAgACAQEA/wEBAPn8+gAAAgIA//79AAUCAgACAwQAAf8BAAYFBgABAgIAAAAAAP8AAAD9/v0A/v//AAQCAgD//wAAAgMDAAH9/wADAgIAAgICAAABAQD7/v0AAgICAAEAAQADAQIABAMDAP8AAAD8/v0A/v//AP///gD7/PwAAgEBAAYCBAADAwMAAP//AAMDBAACAQIA/v8AAAMDAwAGBAQAAAAAAAMCAgAFBAMABAICAAgFBQD//v0AAQABAAUCAwABAAAABQMEAP39/AD+AAAA/f7+AP7//wAGBAUABgYFAAICAQABAAEAAgIBAAD//wADAwUA8/f2APb6+AACAgIAAP//AAEBAgACAQIA/wAAAAYFBQABAQEA+vv7AP7//gABAQEABQQFAAoICAD///8A/f39AP39/QAEAgIA////AAAAAAAHBgYA/Pz8AAECAgAJCQkA/v39AAwLCwD8+/sA9/n4AAABAQD9AP4ACAYGAAMAAgABAQEA+fr5APf7+QD/AP8ABgQFAAIBAgABAgEA/wD/AAIAAAABAAAABAIDAPn7+wD//v0ABAMBAAQDBAABAQIA//7+AAUEBAD7/PwAAwMDAAUFBQD+/f0ABAQEAP7+/gD2+/oA9fn2APr8+gD///4AAQABAAMCAgD//v4A/QD9AAEBAQADAgEAAgMDAAAAAAD/AAAAAAEAAAD9/gAC/wAAAwMDAAIBAgACAgMAAAAAAAL/AAABAP8A/v//AAQEBAD8//4A/v/+AP/+/wD8/fwA/AD+APz//QACAwMAAAEBAP8AAAD4/fsA+v38APwA/gABAgIAAgEBAP///wACAgIA/P/+APv9/AD8/v4A/f7+AP4BAAAAAP8AAgEBAP3+/QADAgMAAwICAAMAAAAEAQIABQEEAAMBAQAGBAUABAIDAP///wD/AQAAAwMDAAYFBQABAgIAAAABAPr9/AABAgEA/P79AP0A/gD7/fwA/f7+AAICAgABAQEAAQAAAAIBAQABAAAAAP7+AAMDAwADAgIA//7/AP/9/gACAwIABAMDAAH/AAAFBAQABAECAAcFBAADAAEAAwICAP7+/QD+AP8A/f7/AAEBAQD/AP8AAwIDAP79/QD8/fsA+vz6AP8AAAD//v8A/Pz8AP7//wD+/v4A////AAAAAgACAgIA/v//APr6+gD7+/wA+vv7APv7/AD6+PoA/fz9APv6/AD//wAA/P39APr7/AABAP8A//7+AAECAgAAAAAAAAABAAABAQACAgIABAQDAP/+/gAAAAAAAAAAAAAAAAD+/v4AAQABAAABAAD9//4AAw4REIAAAAAA/v7+AAAAAAAAAAAAAAAAAP//AAD+//8AAAAAAP///wAAAAAAAwMDAAMBAQD/AAAA////AAIBAgACAgMAAAAAAAEBAQADAgIAAP7/AP8A/wABAQEA////AP///wAAAAAA////AAAAAAACAgIAAAAAAAICAgAAAAAAAwMDAP7+/gAAAAAAAgEBAAMDAwAEAwMAAgEBAP7+/gD//v4AAgECAAIBAAABAAAABQQEAAUDAgADAwMAAP79AAH/AAAEAwIABAQDAAEBAAAB//8AAP8AAAUEAwACAgEABAMDAAD/AAAAAAAAAgEAAAMCAQABAQEAAwMDAAEAAAAGBQQAAwMDAAICAQACAgEAAgEBAAQEBAABAQEAAQAAAAAAAAACAgEAAwMDAAAAAAACAgIAAwMDAAEBAAD///8AAwMDAAAAAAAAAAAAAgICAAAAAAAAAAAAAQEBAAICAgABAP8A//7+AAD//gABAAEAAgEBAAMCAgAA//8AAgECAP/+/wADAgEAAAAAAAMEAwD///4A////AAAAAAABAQEAAAAAAAEBAQAAAAAA/v7+AAEBAQAAAAAA////AAAAAAACAgIA////AAICAgABAQEA/v7+AAAAAAAAAQAA/v/+AAAA/wAAAAAAAQEBAAMDAwABAQEA////AP///wABAgEAAQEBAAUFBQD+/v4A////AAICAgACAgIA////AAICAgABAAAAAQEBAAEBAQACAgIAAQIAAAEBAQD///8AAAAAAAEBAQAAAAAAAQEBAAICAgABAQEAAAAAAAEBAQAAAAAA////AAAA/gD///4ABAQEAAEBAQD///8A////AAEBAQAAAAAAAQEBAP7//gD9/fwAAgICAAICAgAAAAAAAgICAAAA/wACAgIAAQEAAP39/QABAQEABAQEAAICAgABAQEAAQEBAAEBAQD///8AAAAAAAEBAQAA/wAAAgABAAMCAgD9/f0AAgEBAAD//wABAAAAAQABAP8AAAD+/v4AAgICAAICAgAAAAAA////AAEBAQABAQEAAAAAAP///wAAAAEAAP8AAAAAAAAAAAAA////AAEBAQACAgIAAP8AAP7//wD+/v8AAgICAP/+/wD+//8AAQICAP39/gABAQEAAQEBAPv7+wD//gAAAQEBAAAAAAADAwMAAAAAAAAAAAD+/v4AAAAAAAEBAQACAAEAAgABAP///wD+/gAAAP8BAAEBAQD/AAAA/wEAAP7//gD+/v8A////AAICAgD///8AAAECAAAAAAABAgEA/wAAAP//AQD9/v8AAAAAAAAAAQD/AQEA/wEBAAECAwD//wAAAAAAAP7//wD9/v0A/v//AP7+/gAAAP8AAgMDAPv+/gD8/P0A/v3+AAAAAQACAgEA/wABAAIBAwABAQIAAgICAP7+/gD9/v4ABAIDAAECAgABAQEAAAAAAP7+/gABAAAA/v7/AAABAQABAQEA////AP39/QD+/v4AAQEBAAMDAwD+/v4AAQEBAAEBAQAAAAAAAAAAAP///gABAQAAAAAAAP///wD///8AAgICAAICAgD8/PwAAAAAAAQEAwD8+/wAAwQDAAMDAwADAQEA////AAEBAgADAgMAAwIBAAD//wACAgEAAgIDAAMDAgABAQEAAgIBAAD/AAACAQAAAwQCAAMCAQAB/wAAAwICAP///gAEAwQAAQAAAAQBAgACAgIAAgIBAAEBAQAAAP8AAgICAP///gABAP8ABAQDAAEBAQADAwIA////AAMDBAACAgEABAQEAP///wABAQAAAwMCAAICAQACAgEA/v7/AP7+/wACAgMAAgIDAAEBAQABAQEA/v7+AAICAgAAAAAAAP//AAEAAAABAQEAAQEBAP///wAAAf8AAQEBAAEBAQD/AAAAAAAAAP///wAAAAAA/Pz8AAQEBAAAAP8A/v7/AAAAAAD9/v4AAP8AAP/+AAAAAAAAAAAAAP7+/gABAQEAAgICAAAAAAABAQEAAQEBAAAAAAD///8AAwMDAAICAgACAgIAAQAAAAAAAAABAQEA////AAMDAwABAQAAAAD/AAEBAAD///8AAAEBAAABAAD+/v8AAQAAAAMEBAACAgEA////AAEBAQD+/v4A////AAEBAQACAQEAAQAAAP/+/gABAgIA/Pv7AP///wAAAQEAAQICAAEBAQAAAQEAAAABAAABAAACAgIAAwICAAAAAAABAQEA/v7+AP39/QACAgIA/v7+AP///wACAgIAAQEBAAAAAAABAQEAAAAAAP///wD9/f0AAQEBAAMDAwAAAAAAAAAAAP//AAD+/v0AAAD/AP///wD+/v4AAgICAP7+/gAAAAAA/f39AP8BAAAA/wAABAICAAMDAwABAQIA/gAAAAAAAAADAwMAAAABAAAA/wABAQMA//8AAP//AAAAAAAA/f3+AAICAwACAgEA////AAEBAQD//wAAAQECAPf3+QAHCQsACgoLAP7+/wD6+/oA+vv8AP7//wABAgIA//8AAP7//gAA/wEA/v3+AAQEBAD//wAA/Pz8AP3+/gAGBgYA/fv8AP7//gD6/PoA////AAMCAgADAAEAAP//AAEBAQAKCgoA/P79APv7+wACAgEA+/v8AAEBAQACAgEABAMDAAkICQD///8AAwIDAPj79wADAgEA/v/9AP//AAD+//8A/v/+AAMBAgAEAwMA/P38AP3+/gABAgEAAwIDAAUDAgAA/wAA/f39AAUCAgAA/wEAAAABAAEAAQACAgIAAQAAAP//AAAAAQEAAgEBAAQEBAD//wAA/gD+AAL/AAAGBAUABAIDAP7+/wD//wAA/f//AAkFCAD8/v4A/P39AAAAAAACAAEA+fr5AAQEBAD9/v4AAAABAAEAAAD+AP8A/gEAAAAA/wACAgIA/wAAAP3+/QABAAAAAQABAAIBAQACAgIAAQEBAPn8+wABAAAA//79APz+/gAGBwcACwoKAP//AAD7/fsAAQEAAAIBAQD+//8AAwQEAP3+/gD+//4ABAADAAYEBQD9//8A/f7+AAMDAgAAAQEA/f/+AAAAAAABAAEAAP8AAPv8/AABAQEA/v7+AP7//gAEAwIAAgECAAMBAgD9//8A8vb0AAQDBAD9//8A9v36APr8+gD9/v4AAwIDAAEBAgACAgIAAgECAPr7/AD7/v4AAQICAPv9/QAA/v8A/gEAAP3+/gD//wAA+vz8AP3//gD+//8ABgMFAAAAAgD//v8AAgMEAAYEBQD9/f0A9/z5APv9/AACAQEA/wAAAPX59wD6+/oA/P38AAUEBQADAwMAAAD/AAYEAwD9//4AAQEBAAgGBwD9//8AAgAAAAEAAAAFBgYA+/z8APz9/QD+//8A/P78AP39/gAIBggABwYEAP7+/gD19vkABAQFAP///wD9//0AAP8AAP39/QD/AAAA+Pz5AAECAQAGAwQABQIFAAECAgD+//8A////AAICAgD//v4A/P/9AAAB/wAFBAMAAwIDAPz+/QAEAwMACQYIAAcHBwAAAAAAAwMDAPr6+gD+//8AAQEBAPj8+gD4/PgA+/79AAABAQD///8AAgICAP7//QD9//0AAgICAAAAAAACAgIA////AP8AAAAGAwQAAAAAAAEAAAADAgIAAAAAAAACAQACAgEAAwABAAcGBgADAgEAAQAAAPv+/QD8/v0A/P3+AP4A/wD9/v4A/P7+AAEBAAAEAwMA/f/9APf6+AD8/v4AAQMCAP39/AAA/wAAAwEBAP8BAAD9AP8A/P7+AP3//gABAQAAAQD/AAD//wACAAAAAQAAAAIBAQAGBQUABgIDAAUCBAAHAwQABwUGAAcEBgAFBAUAAAAAAAECAgACAQEA/f79AP7//gD5/PoA+Pz7APv//gD6/vwA9/v4AP4A/wD+AAAAAgEBAAEAAQABAQEAAQAAAAABAQACAQIA/f39AP7//wACAQIAAQD/AAQCAgAHAwQAAP8AAAICAgACAQAAAQEAAAH/AAABAgIA/v/+APr8/gD9/v8A/gD/APr7+wD8/f0A/P79APz+/QD+/wAA/f8AAAECAgD8/PoA/f/9AAEBAQD///8A/wAAAAQDAwD/AQAA/v//APn8+wD5+voA/fz+APv9/gD9//8A/P7+APv8/QD7/P0A+/7+APr8/AD5+vwA9fn4APX5+QD5+vsA9/n5APz9/QD7/PoA/P37APz+/AD9/vwA/gD+APj6+QD8/f0A+vz7AP8BAAAGBAUABAAAAAADAwMAAAAAAAAAAAD8/PwA/wAAAAMEAwAB/wAAAAAAAAAAAAADAwMA////AAMCAwD///4A///+AAMEBgD+/v8AAAEBAP8A/wD//v4AAgQDAAD//wABAQEAAgICAP39/QAAAAAAAAAAAAAAAAAAAAAA////AAAAAAD///8A////AAEBAQAAAAAAAQABAAEBAAD+/v4AAgAAAAMCAgACAgEABQMEAAQDAQD//P0AAP//AAEBAgD//v4AAAABAAQDAwAEAwQA/fz8AAMDAgAGBQUAAgEAAAIBAAAAAAEABAUFAP/9/gADAwIAAgEAAAAAAAABAAAAAgEAAP79/QD9/QEAAQEAAAMDAgAEAgIAAwMDAP7+/gAAAAAAAAEAAAQEAgACAgIA///+AP///wADAwEA//8AAAD//wADAwMA/v79AAUEBAD/AAAA////AP8AAAD///8A////AAMDAwACAgIAAwMDAP7+/gACAgEAAgIBAAAA/wD///8AAQEAAAICAAADAwIAAv//AP8A/wAAAP8AAAD+AAMDAgAEAwQAAAAAAPv8/AAAAP8AAwMBAAEBAgD+/v8AAwMCAP39/gD9/f0AAQEBAAAAAAAAAAAAAgICAP///wACAgIAAwMDAP38/AABAQIAAAAAAAIBAgD+AP4AAgICAP39/QACAgIAAgICAAAAAAD///8AAAAAAAICAgAAAP8AAwMCAP///wACAgAAAAABAAL//wACAgAA/wEBAAAAAAD+/v4ABAQEAAD/AAAAAQAA/wAAAAAAAAABAQEA/f39AAMDAQAAAP8AAwMCAP//AwABAQEAAAAAAAAAAAAAAAAAAAD/AAAA/wABAQEA////AAD/AAAFBAUA//7+AAD/AAAAAQAA//7+AAQEBAABAAAA/f7+AAMDAwAAAAAAAAAAAAEBAQD+/v4A////AAMDAwAAAAAAAwMDAP///wD///8AAQEBAAAAAAACAgIAAQEBAAAAAAABAQEAAAEBAAIBAQD///8AAQEBAP39/QACAgIAAAAAAAEBAQD///8A/f39AAMDAwACAgIA/QD+AP38/gAAAAAAAAAAAAEBAQD///8A/f39AAAAAQAFBQUAAAAAAP4BAQACAgEAAP8AAP///wD//v8AAQIAAAUEBQABAAEA+/z8AAEBAQD9/f0A/v7+AAAAAQAAAAEAAwMDAAEBAQD+/v4A/v7+APz9/AD//wEAAQECAAEBAQACAQAA+/z9AAEBAQACAgEA/f3+AAAAAAAA/wAA////AAICAgD+//8AAQEBAP39/AD9/f0AAgIDAP7+/wD/AQAA//8AAP8B/gD///8A/gD/AP8AAAACAgIA/v//AAQEBAD+AP8A/Pz8AAEBAQACAgIAAgICAP8AAAD8/f0AAwQDAPv8/QAAAAAA+/z7AAIBAgABAQEA////AAECAgABAQEA/Pz8AP///wAAAAAAAgMDAP7+/wAAAAAABAQEAPz8/AACAgIAAQEBAP///wAFBQUA/Pz8AAEBAQAAAAAAAAAAAAICAgABAQEA/Pz+AAICAQACAgIA/v7+AAAAAAACAgIAAQEBAAD/AAAGBgYAAwMDAAMAAQD///4A//7/AAIDAgACAQEAAQD/AAECAgACAQEA/v79AP8BAAACAgIAAP8AAAQDAwABAAAAAwIDAAMBAQD9/v8A////AAEAAAAAAP8AAQIBAAEBAQABAQAA/v/+AAMCAwABAQEAAAAAAAQCAQACAgIAAgICAAEAAAABAQEAAAAAAAAA/wD///8A/f39AAAAAAD///4A/v0CAAECAQD///8AAQEBAAQEBAD///4A///+AAICAwAAAAAABAQDAP39/gACAgIAAAAAAAEBAQAAAAAA/f79AAECAQD//v8AAQEBAP7+/gD+//8AAAD/AP//AAAAAP8ABAMEAAEAAAD+//8A////AP///wAA//8A////AP//AAAA/gIAAAEDAAD//gAAAP4AAAEAAAAAAAD+/v4AAgICAP///wAFBQUA/v//AP79/QACAQEA/v7+AAAAAAAAAAAAAAAAAP79/gADBAMA///+AP39/gABAQAABQUFAP7+/gD///8AAQICAAAAAAD9/f0AAQEBAP39/QD9/f0AAgICAAAAAAD+//8A////AAICAgD+AP8AAgUFAP39/AACAQEA/wEBAP3+/gADAwIAAwIDAAEBAQD///8A+/z9AAIBAQD9/v0AAQABAAABAAD9/f0A////AAICAgD///8AAgICAP7+/gAAAAAA/gD/AP8A/wAAAgEA/v//AP37+wD///8AAgICAAEBAgAAAQEA///+AP7//wACAQEA/v7+AP///wACAgIAAAAAAAQEBAD9+/oA+vv9AP3/AQAEBAMAAAH/AP7//gD//gAAAwMCAP//AwD+/v8ABAQCAPz8/QD9/f4AAgIBAPv7+wAAAAAAAQIBAAD//gD//gAABgYGAAQEBQD8+/sA+vr7AAUFBgAJBwgAAAD6APr7+wAB/v8ABQUFAP39/QD5/foABgQEAAICAgAKCgoA9/f3APv8/AABAgEABQUFAP3+/QD6+/oA+fn5AAD+/wACAQEAAAAAAPz8/AD+/v4A8vT0APr9+wAGBQUACwsLAPb39wD//f0A9vf3AAIBAwAGBgUABgEEAA3/CwD4+fkAAAAAAAACAADz9fUABQUFAPj5+AD+//0ACAYHAAcD/wD1+fkA/Pz8AAEFBQAGAwQAAQAAAAMCAwAEAv0A/QD/APr9/AABAQAAAAEAAP39/gD9/v8AAQAAAP4AAQD/AP8AAgABAP8BAAD/AQAAAP7+AP3//gADBAYA/P79APr++wD+/fwABwQEAP39/QAAAAAABAMDAP///wAEBAQA+vn5AAYGBwD+//8AAv8AAP/9/gD8//wA/wAAAP7//wD+//8ABwQDAAQCAwD+/f0AAAEBAAQDAwD/AP8A/wEBAP7//gD99/UAAP/+AAUCAwAA/v4A+/79AAYEBQAHAgMA/v8BAPsAAAD9//8A//77AAICAAADAAIA+fv5AAACBwD8/v0A/gD/AAD//wD9/f4AAgL8AP8A/wD//gAAAwECAPr9/AACAAIAAf7+AAUGBAD7/f0A/P//APv+/QD+AQAA9/v5AAEA/wD9/wAA+v74AAQCAwAEAQMACgcIAPv+AAD+/wEA/f7/AAEA/wD+AAEAAwEBAPr8/QD9AP4A+vz8AP3//AADAgQA/wABAAAA/wD/AP8AAQAAAAICAgD1+fcA/v//AAUFBgAGAwQA/v7+AAABAQD+AQAAAAAAAPb5+QAIBwgA//4BAP8B/wAAAAAABgYHAP3+/gD8+/sABQQEAAkJCQADAwIAAQEAAPb39wABAQEABAMCAAD/AAD8+/oADAsOAPD08wD7/vwABgIFAAUEBAD7/fsAAgABAP8B/wD4+vgA/v7+AAAA/wAICAkA/Pv7AP3+/wD9/v4AAQAAAAQBAgD8Af8A+fv6AAoFBwADAAIA/f7+AP39/QD8APwAAgcKAP8AAAADBAQA+vr6APv8/AABAwIA9vr4APr++wD8/f0A/v/+AAEAAQACAgIA////AP///gADAgIA/f7+AAAAAAACAwMA/vv8AAUDAwACAAEA/wABAP4AAAAAAQAAAwMDAAEBAQAA/v8AAgICAP3+/wAAAP4A+/z7APn++gACAwMA/f/+APv8/gABAQEA/v7+AAAAAAD8AP8AAAAAAP8CAQABAAAA/P37AP7+/gACAQIA+//8APv8/QD9/f4ABAMDAAQBAQAA/wAAAwMGAAAA/QAA/wAAAwACAAECAQD//gAAAQMCAAEAAAACAwUA//7/AP4C/wD//fwA+/7+APz//QD8/f0A/Pz8AP7//wD/AQAA/wD/AP0AAAAAAQAA/P8AAAX+/wAEAgIAAgEBAAAAAAD///8AAQAAAAQBAgAHBQYA/gIDAAD//wAGBQQAAAAAAAEBAAABAAEABAQEAP39/QD8/P0A/P/Oz0kAACAASURBVP3+AAMCAgAEAQEA/f79APv8+wAEAwQA/f3+APz+/QD+AP8AAQECAAUDAwAGBAUABAQEAAEBAQD8/f4AAP3+AP4AAQABAAEA/v7/AAQE/gD7+/oA/wH/APn8+wD8/PwABAIEAAMDBAAAAAAAAgICAP7+/gD///8AAgMCAPr6+QAAAAEA/gD+AAEBAQAJBAUAAwMDAP7+/gAAAQAA/v7+AP///gD+//8AAfsBAAD//wACAgIAAgEBAP7+/gABAQEAAwwPDoD+/v4AAQEBAAEBAQD///8A/wIBAAEBAQADAwMA////AAAAAAD///8AAAAAAAIBAAD+//8AAP//AAEAAQD+AAAA/f/+AAAAAAABAgEAAwMDAP7+/gD///8AAQEBAP7+/gABAQEA////AAAAAAD///8AAAAAAAEBAQD+/v4A////AP///wAAAAAAAP//AAEBAAAA/v4AAQEBAAMDBAAA//8A//7+AAD//wAEAgMAAwICAAIBAAAFAwMABQQEAAQDAwABAAAAAQEAAAL/AAAFBAMAAgAAAAIBAQACAgEAAwMDAAIBAQABAQAAAgEAAAMCAgACAQEAAAD/AAECAAABAgAAAwIBAAUEBAABAQEAAAAAAAEBAQADAgEABAQDAAAA/gACAgEAAwMCAAQCAwABAAEAAQAAAAEAAQACAgEAAQH/AAMDAgD8/fsA/wD/AAAA/wADBAMAAwQDAP8A/wACAgAAAgMBAAECAAD+/f0A/P38AAMEAwAEAwMAAQEBAAAAAAD+/v4AAQEBAP/+/gD+//4AAgICAAQCAwD///8AAP//AAMDAgACAQEAAAAAAP/+/wACAQEAAP//AAEBAAABAAAAAgEBAAICAQAA/v8AAgICAAEAAAABAP8AAf8AAAICAgD+/f0AAgEAAP///wADAgIAAQEAAAECAQAEBAMA////AP7+/QAAAAAAAQH/AAEBAQACAgIAAQEAAAICAQACAgIAAgIBAP7+/gABAQEAAwICAAD//wACAQIAAQABAAIBAQADAgMAAQAAAAEA/gAEAwMAAQH/AAH/AAAFBAUABAMEAAIDAgAAAAAAAAAAAAEBAQABAQAABAQDAAMDAgABAQAA///+AAAA/wAFBAQAAgICAAD//wAA//4A///+AAEAAAAAAAAAAgEBAAAAAAACAgIAAAAAAPz8/AD///8AAgICAAAAAAACAgIAAAAAAP7+/gAFBQUA/v/9AAEAAAAAAP8AAgIDAAEBAQABAQEA/wAAAP8A/wAEBAQAAgEBAAH//wAAAAAAAwIDAAEAAAABAAAAAwIDAAEBAQD9/v0AAAAAAAD//wACAQEAAgEBAAIBAQD+//8A////AAMDAwD//wAA//8AAAMDBAACAgIA//7/AAMCAwACAQEA//7/AAD/AAD///8AAQEBAAICAgABAAAAAgICAP///wACAgIAAwMDAP///wD+/v4A/Pz8AAAAAAAAAAEAAwMDAP///wAAAAAA////AAEBAQD9/f0AAAABAAAAAAAAAAEAAQECAPv8/QD/AAEAAQEBAP39/QABAgMAAAABAAAAAAACAwQA/wAAAAABAQD9//8AAAEBAAICAgD9/v4A/v7+AAAAAAABAgIA/f39AP3+/gACAgIAAgICAAABAQD+/v4A/f7+AAICAQD+//4AAgICAAMCAwD//v8A/v//APz+/QD///8A/f39AAICAgACAwMAAQEBAAICAwADAwMA////AAEBAQABAQEA/v7+AP///wABAQEA/v7+AAAAAAADAwMAAgICAP///wD///8AAAABAAMDAwAAAAAAAAAAAAAAAAABAQEA/v7+AAD/AAABAQEAAgEBAAEAAAABAQEAAwMCAAMCAgACAAAAAQEAAAMCAwADAwIAAgAAAAIBAQACAgIAAP/+AAIAAAAEAwMABAMCAAIAAAD//v8AAwMCAAUDAgD+/v0AAAAAAAUDBAACAgEAAQEAAP79/QACAgEAAwIAAP/+/gADAwMABAMDAAEAAQD/AP4AAwMDAAAAAAAFBQUAAwMDAAAA/wABAQAAAgIAAP///wAEBAIAAAAAAAAA/wABAQEA////AP7+/gD///8AAQEAAAAA/wD///4AAgIBAAEBAAAAAAAAAAABAAICAgABAQEAAAEAAAAAAAADAgMAAgICAAD//wAAAAAABAMDAP7+/gD+/wAAAgICAAAAAAABAAAA//4AAPb7AAD8AAgA/wAGAP8AAAD+//sABAMDAP///wACAgIA/v7+AAEBAQABAQEA////AAD//wABAQEAAAAAAP7+/gADAwMAAgICAP7//gABAQEAAAD/AAAAAAADAwMAAgICAPr6+gADAgIAAgECAAEBAQD///4AAAAAAAAAAAAAAAAAAQEBAP39/QACAgIAAQEBAAEBAQD+/v4ABAQEAAICAwD+/v8A/Pz8AAEBAQD///8A/v7+APz8/AD+/v4AAAAAAP8AAAAAAQEAAgMCAP8AAAD///8AAQAAAP3//gACAwIA+/z8AP/+/wD+//8A/P79AAABAQAAAQEA/f79AP7//wADAwMA/v/+APv8/AABAgIA/wAAAP7+/gAA//8A/v7+AAEBAQADAwMAAAAAAP7//wD/AAEA/P79AP8AAAD7/PwAAwECAP39/gACAQIA/f39AAEBAgABAQAAAAEBAP8AAAD//gAABAQFAP//AAD///8A/v39AAEBAgADAwQAAQECAAAA/gAHBwcAAQEBAPr7+wD2+fgAAgMEAAgHBwAHBgYA9ff3APn7+wD///8ABAMDAAUFBQABAQEABgYGAPj4+AD9/v4A/vz9APz8+wD6/v0A/P79AAABAQD+AP8AAQABAAICAgAHBwgABQUGAOfq6AD7/fwA/f39AAICAgD8/PwABQUFAAAB/wD9/PwACAcHAAgGBgABAAEA/Pv8AP7+/wAAAQEA+vv7AAEBAgACAgIAAgIDAAEAAgAEAwMACwgKAPz8/QD8/vwAAQICAP///wAHBAYAAAEBAAIAAAACAQIA+vz7APz//gABAQIAAgEBAPz8+wD6/fwAA/4AAAMEAwD9//8AAwABAAIDAwAAAAAAAgABAAcFBgD7/fwA/P39AAYFBQACAgIABwQFAPz+/gD///8AAwMDAAMAAAD5/PoA/wIBAAEAAAACAgIA/wD/AAAAAAABAAEAAQAAAAAAAAAEAwMABQUFAPn7+wD//v4AAgAAAAABAQD9//4A/P79AAD//wD+//4A/P7+AP3//wAGBAQAAwMDAAEAAQABAgEA/P39AAIAAgACAAAA/wEBAP0A/gD7/v4A/f7+AAACAQABAQAAAgEBAP8BAAAAAQEABAIDAPr//AAAAAAABAIDAAYDBAD9/v4AAQEAAAUDBQD/AP4A+vz6AAIBAgAA//8AAAEAAP4A/wAAAQAAAQAAAAEAAAD8/v0A+Pv7AAECAgD9/v8AAAAAAP3+/gAEAwQAAgMCAAABAAADAgQABQMEAP3+/gD+//8AAwABAAICAgD8/v0A/P7+AAD+/gAFAwQA+v38AAEAAQADAgIA/P79APv8/AAFBAMABgQCAPz+/AD9/f4AAAAAAP/+/wAEBAQA/Pz8AP///wADAgIAAgIBAP///gABAAAA/f79AAMCAgAHBQYADAwLAPj29wD+/P4ABAMCAAICAgD7/fwAAwMDAP3//QD7/vwAAAH/AAIAAQAFAwQA+/z8APn7+wAAAQEAAwECAP39/AD5/fsAAQEBAAgGBgABAQEA+Pz6AAAA/wAEAgQABgUGAAD//wD4+vkA/P39AP3+/QD9//4A+f/8APj7+QD9/v4AAgQDAAQDAwD+/f0A/v79AAAAAAAAAQEA/P39AAIBAQADAQIABAECAAYDBAABAAAAAQEBAP//AAD+AP8AAQECAP3//gD///8ABQMEAP39/gD6/PsA+v38AP7+/wD///8A/f7/AAIEAwD8/v0A+v78AP7//wAAAQEAAwICAAMCAgABAAAA+vz8AP8A/wD8/v0A/gAAAAICAQACAQEAAwICAAYDBAAGAgMABQMEAAYEBQAGBAYAAwIDAAUEBQAEAgIAAP7/AAECAwD/AP8AAAIBAPv+/QDz+PYA+fz7APz//gD7/v0A/f//APz9/QD+AP8A/wEBAAAB/gAB/wAAAwACAAUDBAABAAEAAQAAAAQCAgAEAQIABgMDAAMBAgAEAgMAAwICAAMCAwABAAIAAQICAP3+/wD8/f4A/v8AAP//AAD+//8A/f/+AAAAAAAAAgEA/wAAAPz9/AD9/v0AAAEBAAEBAQAEAgQABAICAAIAAQD9/v0AAgIC
```
