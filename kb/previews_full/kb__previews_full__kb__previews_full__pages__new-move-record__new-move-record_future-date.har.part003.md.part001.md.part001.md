### kb/previews_full/kb__previews_full__pages__new-move-record__new-move-record_future-date.har.part003.md.part001.md (part 001)

```md
### kb/previews_full/pages__new-move-record__new-move-record_future-date.har.part003.md (part 001)

```md
### pages/new-move-record/new-move-record_future-date.har (part 003)

```har
ing(),this.bookform$.subscribe(t=>{this.initTracking(t),this.askTrackingConsent(t),this.hideSplashScreen()},()=>{this.hideSplashScreen()}),this.showGlobalLoader$.pipe(L(t=>t?G(null):qi(200).pipe(Se(()=>{this.bridgeService.post(new un(hn.widget_loaded,null))}))),U(t=>t!==null),oe(1)).subscribe(),this.coldLoadingBenchmarkGuard$.subscribe(),this.store.dispatch(Zr()),window&&this.ngZone.runOutsideAngular(()=>{vr(window,\"scroll\").pipe(wo(()=>qi(ef)),$(this.destroy$)).subscribe(()=>{let t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;zr({event:\"scroll\",scrollTop:t})})}),this.firstUrl$.subscribe(t=>{this.validateOldWidgetLinks(t)}),this.clearCachedUserDataIfLoggedOut()}ngOnDestroy(){Be.dispose(),this.destroy$.next(),this.destroy$.complete(),this.bridgeService.destroy(),this.appNavigationService.stopSaveHistory()}ngAfterContentChecked(){this.changeDetectorRef.detectChanges()}scrollTop(){document.body.style.overflow=\"hidden\",document.body.scrollTo({top:0,left:0}),window.scrollTo(0,0),document.body.style.overflow=\"scroll\"}askTrackingConsent(t){if(rn.isNativePlatform()&&rn.getPlatform()===\"ios\"){zp.requestPermission().then(o=>{o.status===\"authorized\"?(console.log(\"User granted tracking permission\"),this.consentBannerService.updateConsents(_s)):console.log(\"User denied tracking permission\")});return}let r=new xo;r.subscribe(o=>{this.consentBannerService.updateConsents(o),this.modalService.closeModal()}),this.consentBannerService.needShowConsentBanner()&&this.modalService.canOpenModal$.pipe(U(o=>!!o),oe(1)).subscribe(()=>{var o,s;this.modalService.openModal({component:Fc,componentData:{consents:this.consentBannerService.getUserConsents(),consentChange:r,privacyPolicyLink:(s=(o=t.brand)==null?void 0:o.agreement_links)==null?void 0:s.user_confidentiality_link},params:{modalType:at.default,ignoreOutsideClick:!0,isGrayBackground:!1}})})}initTracking(t){this.trackingService.initTracker(),this.trackingService.getAb().then(s=>{this.metrikaService.init(t,{enabled:re.production,group:Number(s.strong)},re.production),this.metrikaService.reachGoal(\"widget_loaded\")}),this.initUserTokenForTracks().subscribe(),this.initUtmForClientAppTracks().subscribe();let r=this.trackingService.onPageView$.pipe(ln(),oe(1)),o=this.trackingService.labelSettled$.pipe(ln(),oe(1));fe([this.firstUrl$,r,o]).subscribe(([s])=>{let l=s.startsWith(\"/e/\")?\"review_widget_open\":\"widget_open\";this.trackingService.track({name:l,type:l})}),this.modalService.closeModal()}initUserTokenForTracks(){return this.store.select(y.user.getUserToken).pipe(U(t=>!!t),Se(t=>{this.trackingService.setUser(t)}),$(this.destroy$))}initUtmForClientAppTracks(){return this.store.select(y.applications.getApplications).pipe(U(()=>this.capacitorService.isNativePlatform()),O(t=>t.filter(r=>![\"yplaces\",\"client_app\"].includes(r.slug))),U(t=>t.length>0),Se(([t])=>{this.trackingService.setUtm({source:\"clientapp_\".concat(t.id),content:\"\",term:\"\",medium:\"\"})}),$(this.destroy$))}addBookformLabel(){let t=this.store.select(y.bookform.getBookformId).pipe(U(r=>Number.isInteger(r)),oe(1));fe(this.bookform$,t).pipe(oe(1),$(this.destroy$)).subscribe(([r,o])=>{this.trackingService.addLabel({bookform:{widget_id:o,language:r.lang,type:r.group_id===0?\"salon\":\"group\",group_id:r.group_id}})})}addCompanyLabel(){this.store.select(y.currentCompany.getCurrentCompany).pipe(U(t=>!!t),oe(1),$(this.destroy$)).subscribe(t=>{this.trackingService.addLabel({company:{id:t.id,latitude:t.coordinate_lat,longitude:t.coordinate_lon,address:t.address}})})}startUnlockLandscapeTracking(){this.unlockLandscape$=this.router.events.pipe(U(t=>t instanceof Zi),O(t=>!t.url.startsWith(\"/\".concat(f.tips,\"/\"))))}hideSplashScreen(){this.capacitorService.isNativePlatform()&&Vp.hide()}validateOldWidgetLinks(t){return te(this,null,function*(){new RegExp(\":[0-9].*\").test(t)&&(t=t.split(\":\").join(\"/\"),yield this.router.navigateByUrl(t))})}clearCachedUserDataIfLoggedOut(){fe([this.store.select(y.user.isLoggedIn),this.store.select(y.user.getUser)]).pipe(we(),$(this.destroy$)).subscribe(([t,r])=>{!t&&r&&this.store.dispatch(new Qr(!1))})}handleBridgeEvents(){this.bridgeService.init(),this.bridgeService.onAuthByUserData$().pipe($(this.destroy$)).subscribe(t=>this.store.dispatch(new qr(t))),this.bridgeService.onWidgetUtmChanged$().pipe($(this.destroy$)).subscribe(({source:t})=>{this.trackingService.setUtm({source:t,medium:\"\",term:\"\",content:\"\"})}),this.bridgeService.onWidgetSettingsInit$().pipe($(this.destroy$)).subscribe(t=>this.store.dispatch(new Ua(t))),this.actions.pipe(N(ot),$(this.destroy$)).subscribe(t=>{this.bridgeService.post(new un(hn.record_created,t.payload[0]||null))})}configureTracking(){this.store.select(y.currentCompany.getCurrentCompany).pipe(U(Boolean),$(this.destroy$)).subscribe(t=>{this.trackingService.configureTracker(t.active)})}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275cmp\",be({type:e,selectors:[[\"app-root\"]],decls:13,vars:18,consts:[[1,\"app-wrapper\"],[3,\"isLoaded\",\"bookformLanguage\",\"languages\",\"selectedLanguage\"],[3,\"activate\",4,\"ngIf\"],[4,\"ngIf\"],[3,\"activate\"]],template:function(r,o){if(r&1&&(Z(0,\"div\",0)(1,\"app-disabled\")(2,\"app-localization-host\",1),Me(3,\"async\"),Me(4,\"async\"),Me(5,\"async\"),ge(\"isLoaded\",function(a){return o.localisationLoaded=a}),de(),xe(6,Xh,1,0,\"router-outlet\",2),de(),xe(7,Zh,1,0,\"ui-kit-global-loader\",3),Me(8,\"async\"),xe(9,Jh,1,0,\"app-lock-landscape\",3),Me(10,\"async\"),de(),me(11,\"app-company-favicon\")(12,\"ui-kit-modal\")),r&2){let s,a;Je(\"app-yplaces-wrapper\",o.openedViaAltegiome),H(2),q(\"bookformLanguage\",(s=Fe(3,8,o.bookform$))==null?null:s.lang)(\"languages\",(a=Fe(4,10,o.bookform$))==null?null:a.langs)(\"selectedLanguage\",Fe(5,12,o.selectedLanguage$)),H(4),q(\"ngIf\",o.localisationLoaded),H(),q(\"ngIf\",Fe(8,14,o.showGlobalLoader$)),H(2),q(\"ngIf\",Fe(10,16,o.unlockLandscape$))}},dependencies:[tt,ns,$p,kc,ti,Wp,qp,Qp,Lr],encapsulation:2,changeDetection:0}));let n=e;return n})();var Zp=(()=>{let e=class e{constructor(t,r){c(this,\"currentCompany\");c(this,\"store\");this.currentCompany=t,this.store=r}canActivate(t){return te(this,null,function*(){let r=tl(t);return yield this.currentCompany.loadCompany(r,!0),this.currentCompany.isCurrentCompanyLoaded()})}canActivateChild(t){return te(this,null,function*(){return yield this.canActivate(t)})}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(xt),_(K))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var Jp=[{path:\"group/:groupId/city/all\",redirectTo:\"select-city\"},{path:\"group/:groupId/city/:cityId\",redirectTo:\"select-city/\".concat(Nc)},{path:\"group\",redirectTo:er},{path:\"group/:groupId\",redirectTo:er},{path:\"company/:companyId\",redirectTo:\"\".concat(f.company,\"/\").concat(f[\"record-type\"])},{path:\"company/:companyId/info\",redirectTo:\"\".concat(f.company,\"/about\")},{path:\"company/:companyId/activities\",redirectTo:\"company/:companyId/activity/select\"},{path:\"company/:companyId/activity-info/:activityId/:staffId\",redirectTo:\"company/:companyId/activity/info/:activityId\"},{path:\"company/:companyId/login\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.auth)},{path:\"company/:companyId/login/code\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.auth)},{path:\"company/:companyId/my-records-login\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.auth)},{path:\"company/:companyId/fullscreen-menu\",redirectTo:f.profile},{path:\"company/:companyId/fullscreen-menu/code\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.auth)},{path:\"company/:companyId/fullscreen-menu-login/code\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.auth)},{path:\"company/:companyId/profile/account\",redirectTo:f.profile},{path:\"company/:companyId/profile/password\",redirectTo:f.profile},{path:\"company/:companyId/profile/loyalty-cards\",redirectTo:f.profile},{path:\"company/:companyId/profile/loyalty-cards/:loyaltyCardId\",redirectTo:f.profile},{path:\"company/:companyId/profile/loyalty-subscriptions\",redirectTo:f.profile},{path:\"company/:companyId/profile/loyalty-certificates\",redirectTo:f.profile},{path:\"company/:companyId/profile/records\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.record,\"/\").concat(f.records)},{path:\"company/:companyId/order\",redirectTo:\"\".concat(f.company,\"/\").concat(f[\"create-record\"])},{path:\"company/:companyId/profile/record/master-info/:masterId\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.record,\"/\").concat(f.records,\"/\").concat(f[ci.masterInfo])},{path:\"company/:companyId/profile/record/:recordId/date\",redirectTo:\"\".concat(f.profile)},{path:\"company/:companyId/profile/record/:recordId/time\",redirectTo:\"\".concat(f.profile)},{path:\"company/:companyId/profile/record/:recordId/:customCompanyId\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.record,\"/\").concat(f.record,\"/:customCompanyId/:recordId\")},{path:\"profile/record/:recordId/:customCompanyId\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.record,\"/\").concat(f.record,\"/:recordId/:customCompanyId\")},{path:\"company/:companyId/idx/:idx/date\",redirectTo:\"\".concat(f.company,\"/\").concat(f[\"create-record\"])},{path:\"company/:companyId/idx/:idx/time\",redirectTo:\"\".concat(f.company,\"/\").concat(f[\"create-record\"])},{path:\"company/:companyId/idx/:idx/service\",redirectTo:\"\".concat(f.company,\"/\").concat(f[\"select-services\"])},{path:\"company/:companyId/idx/:idx/master\",redirectTo:\"\".concat(f.company,\"/\").concat(f[\"create-record\"])},{path:\"company/:companyId/select-master\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f[\"select-master\"])},{path:\"company/:companyId/select-services\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f[\"select-services\"])},{path:\"company/:companyId/select-time\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f[\"select-time\"])},{path:\"company/:companyId\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f[\"select-services\"])},{path:\"auth/code-verification\",redirectTo:\"\".concat(f.profile,\"/\").concat(f.auth,\"/\").concat(f[\"code-verification\"])},{path:\"company/:companyId/menu\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f.menu)},{path:\"company/:companyId/create-record\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f.short)},{path:\"company/:companyId/create-record/master-info/:id/:masterId\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f.short,\"/\").concat(f[\"master-info\"])},{path:\"company/:companyId/create-record/service-info/:serviceId\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f.short,\"/\").concat(f[\"service-info\"])},{path:\"company/:companyId/create-record/select-time\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f.short,\"/\").concat(f[\"select-time\"])},{path:\"company/:companyId/create-record/select-master\",redirectTo:\"\".concat(f.company,\"/\").concat(f.personal,\"/\").concat(f.short,\"/\").concat(f[\"select-master\"])}];var ed=(()=>{let e=class e{constructor(t){c(this,\"orderManager\");this.orderManager=t}resolve(){this.orderManager.clearOrder()}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(ze))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var mr=(()=>{let e=class e{constructor(t,r,o,s,a){c(this,\"orderManager\");c(this,\"currentCompany\");c(this,\"router\");c(this,\"store\");c(this,\"appNavigationService\");c(this,\"skipInitOrder\",!1);this.orderManager=t,this.currentCompany=r,this.router=o,this.store=s,this.appNavigationService=a}canActivate(t){return te(this,null,function*(){var r,o,s,a;return yield this.currentCompany.waitForCurrentCompanyLoaded(),(!((r=t.data)!=null&&r.skipOrderTypeCheck)&&this.orderTypeChanged(t)||!this.shouldSkipInitOrder())&&(yield this.orderManager.initOrderFromParams(t.queryParams,this.currentCompany.getCurrentCompany())),this.skipInitOrder=!0,(a=(s=(o=this.router.getCurrentNavigation())==null?void 0:o.extras)==null?void 0:s.state)!=null&&a.skipInitOrder&&Jt(this.router.events.pipe(U(l=>l instanceof Qt))).then(()=>{this.appNavigationService.clearHistoryParam(\"skipInitOrder\")}),yield Jt(this.store.select(y.order.getIsOrderInitiated).pipe(U(Boolean)))})}shouldSkipInitOrder(){var r,o;let t=this.router.getCurrentNavigation();return((o=(r=t==null?void 0:t.extras)==null?void 0:r.state)==null?void 0:o.skipInitOrder)===!0||this.skipInitOrder}orderTypeChanged(t){var s;let r=((s=t.data)==null?void 0:s.orderType)===\"activity\",o=this.store.selectSnapshot(y.order.isActivityOrder);return r!==o}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(ze),_(xt),_(Q),_(_e),_(ye))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var $i=(()=>{let e=class e{constructor(t,r,o,s){c(this,\"store\");c(this,\"actions$\");c(this,\"router\");c(this,\"orderManager\");c(this,\"destroy$\",new Le(1));this.store=t,this.actions$=r,this.router=o,this.orderManager=s}ngOnInit(){return te(this,null,function*(){let t=localStorage.getItem(\"aunio_user_data\")||localStorage.getItem(\"yplaces_user_data\");if(!t){this.router.navigate([\"/\"],{queryParamsHandling:\"preserve\"});return}let r=JSON.parse(t);this.store.dispatch(new qr(r));let o=localStorage.getItem(\"aunio_record_data\")||localStorage.getItem(\"yplaces_record_data\"),s=JSON.parse(o);if(s===null||![\"repeat\",\"move\"].includes(s.type)){this.router.navigate([\"/\"],{queryParamsHandling:\"preserve\"});return}let a=this.store.selectSnapshot(y.widgetSettings.getWidgetApplicationVersion),l=null;if(a&&a>=118000001){let p=s.record;this.store.dispatch(new dn(p.companyId)),this.store.dispatch(new Zs(p.companyId,p.id,null,this.store.selectSnapshot(y.bookform.getBookformId))),l=yield Jt(fe([gt(this.actions$.pipe(N(Ws),O(d=>d.payload)),this.actions$.pipe(N(qs),Po(void 0))),this.store.select(y.services.getServicesDict).pipe(U(d=>d.length>0))]).pipe(O(([d])=>d),$(this.destroy$)))}else{let p=s.record;l=Fa(p,this.store.selectSnapshot(y.bookform.getBookformSpecializationDisplayModeType))}if(!l){this.router.navigate([\"/\"],{queryParamsHandling:\"preserve\"});return}this.processRecordItem(l,s.type)})}processRecordItem(t,r){return te(this,null,function*(){r===\"repeat\"?(yield this.setCurrentCompanyByRecord(t),yield this.orderManager.repeatRecordAltegiome(t)):r===\"move\"&&(yield this.setCurrentCompanyByRecord(t),yield this.orderManager.moveRecordAltegiome(t))})}setCurrentCompanyByRecord(t){return te(this,null,function*(){yield this.store.select(y.currentCompany.getCurrentCompanyId).pipe(we(),L(r=>{var s;return r===t.company.id?G(null):(this.store.dispatch(new dn((s=t==null?void 0:t.company)==null?void 0:s.id)),this.actions$.pipe(N(Hr),we(),$(this.destroy$)))}),$(this.destroy$)).toPromise()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};c(e,\"\\u0275fac\",function(r){return new(r||e)(se(_e),se(J),se(Q),se(ze))}),c(e,\"\\u0275cmp\",be({type:e,selectors:[[\"app-altegiome-redirect-page\"]],standalone:!0,features:[Nr],decls:1,vars:0,template:function(r,o){r&1&&me(0,\"ui-kit-global-loader\")},dependencies:[ti],encapsulation:2}));let n=e;return n})();var td=(()=>{let e=class e{canActivate(){return ii.isFeatureEnabled(tc.test_route)}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var Bi=(()=>{let e=class e{constructor(t){c(this,\"store\");this.store=t}canActivateChild(t){var o;let r=((o=t.data)==null?void 0:o.orderType)===\"activity\";return this.store.dispatch(new Js(r||!!ma(t.queryParams))),!0}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(K))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var rd=(()=>{let e=class e{constructor(t){c(this,\"router\");this.router=t}canActivate(t){return this.router.navigated?!0:this.router.createUrlTree([\"/\"],{queryParamsHandling:\"merge\",queryParams:t.queryParams})}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(Q))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var rf=(n,e)=>n.params.companyId!==e.params.companyId,id=[{path:\"\",pathMatch:\"full\",children:[],canActivate:[Li]},...Jp,{path:f.tips,loadChildren:()=>import(\"./tips.routes-ATD3KT3S.js\").then(n=>n.routes)},{canActivate:[Zp,mr],canActivateChild:[hi],runGuardsAndResolvers:rf,path:f.company,children:[{path:f[\"record-type\"],loadChildren:()=>import(\"./record-type-ALQQO6WE.js\").then(n=>n.RecordTypeModule)},{path:f.activity,canActivate:[mr],canActivateChild:[Bi],data:{orderType:\"activity\"},loadChildren:()=>import(\"./activity-flow-4UD2MMSY.js\").then(n=>n.ActivityFlowModule)},{path:f.personal,canActivate:[mr],canActivateChild:[Bi],data:{orderType:\"personal\"},loadChildren:()=>import(\"./booking-flow-FO3NMC7H.js\").then(n=>n.BookingFlowModule)},{path:f[\"create-record\"],canActivate:[mr],canActivateChild:[Bi],data:{skipOrderTypeCheck:!0},loadChildren:()=>import(\"./record.route-LZOP7MOA.js\").then(n=>n.recordRoutes)},{path:f[\"page-not-found\"],data:{[hi.IGNORE_ORDER_AVAILABILITY_ROUTE_DATA_KEY]:!0},loadChildren:()=>import(\"./page-not-found-QW7MH6W3.js\").then(n=>n.PageNotFoundModule)},{path:f[\"about-company\"],data:{[hi.IGNORE_ORDER_AVAILABILITY_ROUTE_DATA_KEY]:!0},loadChildren:()=>import(\"./about-company.module-6726GRN5.js\").then(n=>n.AboutCompanyModule)},{path:f[\"success-order\"],resolve:[ed],loadChildren:()=>import(\"./success-order.module-FD63QDBS.js\").then(n=>n.SuccessOrderModule)},{path:\"move-record\",children:[{path:\"\",data:{routeName:\"company.move-record\",moveRecord:!0},loadChildren:()=>import(\"./date-time-EI5XFBV7.js\").then(n=>n.DateTimeModule)},{path:f[\"master-info\"],loadChildren:()=>import(\"./master-info-QHIE422E.js\").then(n=>n.MasterInfoModule)}]},{path:\"new-move-record\",children:[{path:\"\",data:{routeName:\"company.move-record\",moveRecord:!0},loadChildren:()=>import(\"./date-time-EI5XFBV7.js\").then(n=>n.DateTimeModule)},{path:f[\"master-info\"],loadChildren:()=>import(\"./master-info-QHIE422E.js\").then(n=>n.MasterInfoModule)}]},{path:\"repeat-record\",data:{repeatRecord:!0},loadChildren:()=>import(\"./date-time-EI5XFBV7.js\").then(n=>n.DateTimeModule)}]},...nc,{path:er,loadChildren:()=>import(\"./select-location.module-7HGRX53Z.js\").then(n=>n.SelectLocationModule)},{path:\"order-confirmation\",canActivate:[rd],resolve:{authChannel:ol},loadChildren:()=>import(\"./order-confirmation.module-3EGWM6PU.js\").then(n=>n.OrderConfirmationModule)},{path:f.auth,component:nl},{path:f.profile,loadChildren:()=>import(\"./profile-FF6IQ4WE.js\").then(n=>n.ProfileModule)},{path:\"yplaces\",component:$i},{path:\"aunio\",component:$i},{path:\"altegiome\",component:$i},{path:f[\"page-not-found\"],data:{[il.PAGE_NOT_FOUND_KEY]:!0},loadChildren:()=>import(\"./page-not-found-QW7MH6W3.js\").then(n=>n.PageNotFoundModule)},{path:\"test\",canActivate:[td],loadChildren:()=>import(\"./test-component.module-VVSAB72W.js\").then(n=>n.TestComponentModule)},{path:\"**\",redirectTo:\"\"}];var nf=5e3,nd=(()=>{let e=class e{constructor(t){c(this,\"store\");this.store=t}handle(t){var r,o;((o=(r=t==null?void 0:t.error)==null?void 0:r.errors)==null?void 0:o.code)===cc.UNAUTHORIZED&&setTimeout(()=>this.store.dispatch(new Qr),nf)}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(K))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var od={provide:gs,useFactory:n=>{var r,o,s;let e=(r=n.path().split(\"?\"))==null?void 0:r[1],i=!e||!e.length?null:(o=e.split(\"&\").find(a=>a.startsWith(\"sdkudid\")))==null?void 0:o.split(\"=\"),t=(s=i==null?void 0:i[1])!=null?s:\"\";return typeof t==\"string\"&&t.length&&(re.tracking.rewriteSdkUdidWithValue=t),re},deps:[Ot]};var sd=(()=>{let e=class e{constructor(t,r,o,s){c(this,\"injector\");c(this,\"notificationService\");c(this,\"location\");c(this,\"httpError\");this.injector=t,this.notificationService=r,this.location=o,this.httpError=s}handle(t,r){let s=this.getIgnoreList().find(d=>typeof t.url==\"string\"&&d.url.exec(t.url)!==null);if(s===void 0){this.notificationService.notifyError(this.httpError.getErrorMessage(t));return}let a=(s==null?void 0:s.pagesForIgnore)instanceof Array?s.pagesForIgnore.some(d=>d.exec(this.location.path())!==null):!0,l=(s==null?void 0:s.methodsForIgnore)instanceof Array?s.methodsForIgnore.some(d=>d===r.method):!0;s&&a&&l||this.notificationService.notifyError(this.httpError.getErrorMessage(t))}getIgnoreList(){return Array.prototype.concat.apply([],this.injector.get(Ga))}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(No),_(ei),_(Ot),_(st))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var ad=(()=>{let e=class e{constructor(t,r,o){c(this,\"config\");c(this,\"currentRouteName\");c(this,\"storeSnapshotService\");this.config=t,this.currentRouteName=r,this.storeSnapshotService=o}intercept(t,r){if(!t.url.match(this.config.apiUrl))return r.handle(t);let s=this.storeSnapshotService.selectSnapshot(y.widgetSettings.getWidgetParentAppName),a=s?\"\".concat(this.config.name,\", \").concat(s):this.config.name||\"\",l=t.clone({setHeaders:{[\"X-\".concat(this.config.brandDomain,\"-Application-Name\")]:a,[\"X-\".concat(this.config.brandDomain,\"-Application-Platform\")]:\"angular-\".concat(Ho.full),[\"X-\".concat(this.config.brandDomain,\"-Application-Version\")]:this.config.version||\"\",[\"X-\".concat(this.config.brandDomain,\"-Application-Action\")]:this.currentRouteName.getCurrentRouteName()}});return r.handle(l)}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(Vr),_(xi),_(_e))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var ji=[18,18,18],cd=[255,255,255],ld=\"#060F07\",pd={hue:0,saturation:0,lightness:7.0588235294117645,alpha:1};var Rd=gr(Id()),kd=gr(Od());var m={bright:\"bright\",light:\"light\",lighter:\"lighter\",dark:\"dark\",blind:\"blind\"};function Pd(n){let e=n.map(i=>(i/=255,i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)));return e[0]*.2126+e[1]*.7152+e[2]*.0722}function Md(n,e){let i=Pd(n),t=Pd(e);return(Math.max(i,t)+.05)/(Math.min(i,t)+.05)}function Fd(n){let e=Md(n,cd),i=Md(n,ji);return e<=1.4?m.lighter:e<=3?m.light:e>3&&i>=1.4?m.bright:i<1.4?m.dark:(console.log(\"Bad WCAG color\"),\"blind\")}function W(n){let e=(0,Rd.default)(n)||ji,[i,t,r]=(0,kd.default)(e),o=Fd(e);return{hue:i,saturation:t,lightness:r,alpha:1,type:o}}function Sf(n){let{hue:e,saturation:i,lightness:t,alpha:r}=n,o=[e,\"\".concat(i,\"%\"),\"\".concat(t,\"%\"),r].join(\",\");return\"hsla(\".concat(o,\")\")}function h(n,e){return Sf(C(C({},n),e))}var ut=(()=>{let e=class e{static makeLinearGradient(...t){if(t=t.filter(Boolean),t.length===1){let[o]=t;return this.makeLinearGradient(o,o)}let r=t.join(\", \");return\"linear-gradient(0deg, \".concat(r,\")\")}static mixColors(t,r,o=50){return\"color-mix(in srgb, \".concat(h(t),\", \").concat(h(r),\" \").concat(o,\"%)\")}getDefaultPalette(t){return this.getDarkPalette(pd,t)}getLightPalette(t,r){let o=h(t),s=o,a=h(t,{lightness:6}),l=\"#808080\",p=\"#000000\",d=o,u=o,E=e.makeLinearGradient(h(t,{lightness:95,alpha:.4})),v=h(t,{lightness:95,alpha:.4});return C({primary:o,\"primary-agile\":s,\"primary-text\":a,\"secondary-text\":l,link:p,\"background-dark\":\"#f0f0f0\",\"border-active\":o,\"border-picture\":h(t,{lightness:6,alpha:.04}),\"border-grey-on-bg-grey\":\"#E8E8E8\",\"icons-secondary-text\":\"#aaaaaa\",\"icons-grey\":\"#AAAAAA\",\"icons-grey-bg\":\"#F0F0F0\",\"icons-color-agile\":h(t,{lightness:30}),\"icons-color-bg\":h(t,{alpha:.1}),\"color-agile-text\":h(t,{lightness:30}),\"icons-agile-bg\":h(t,{alpha:.4}),\"banner-accent-bg\":\"#FFFFFF\",\"banner-accent-bg-image\":e.makeLinearGradient(h(t,{alpha:.3})),\"input-bg\":\"#ffffff\",\"input-default-border\":\"#ececec\",\"input-active-border\":o,\"btn-primary-default-bg\":o,\"btn-primary-text\":p,\"btn-primary-secondary-text\":h(W(\"#000000\"),{alpha:.6}),\"btn-primary-default-border\":d,\"btn-label-text\":p,\"btn-label-bg\":\"#ffffff\",\"btn-hover-press-bg\":u,\"btn-hover-press-bg-image\":E,\"btn-hover-press-border\":v,\"btn-secondary-default-bg\":\"#ffffff\",\"btn-secondary-text\":p,\"btn-secondary-default-border\":o,\"tab-stroke-default-text\":l,\"tab-stroke-active-border\":o,\"timeslot-active-text\":p,\"timeslot-active-bg\":o,\"timeslot-active-border\":o,\"timeslot-default-bg\":\"#ffffff\",\"timeslot-default-border\":\"#EDEDED\",\"timeslot-today-bg\":\"#F5F5F5\",\"timeslot-today-border\":\"#F5F5F5\",\"timeslot-today-text-disabled\":\"#CDCECE\",\"search-selected-text\":o,\"city-select-bg\":\"#F5F5F5\",\"tag-bg\":h(t,{lightness:92}),\"tag-border\":h(W(\"#000000\"),{alpha:.02}),\"loyalty-button-bg\":h(t,{lightness:90}),\"loyalty-button-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-card-text\":h(W(\"#000000\"),{alpha:.9}),\"loyalty-card-secondary-text\":h(W(\"#000000\"),{alpha:.4}),\"loyalty-card-logo-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-card-border\":h(W(\"#000000\"),{alpha:0}),\"loyalty-card-bg-from\":h(t,{alpha:.8}),\"loyalty-card-bg-to\":h(t,{alpha:1}),\"loyalty-card-shadow\":h(t,{alpha:.4}),\"label-text\":p,\"label-bg\":o,\"label-border\":o},Yi(t,m.light,r))}getLighterPalette(t,r){let o=h(t),s=h(t,{lightness:6}),a=\"#808080\",l=\"#000000\",p=h(t,{lightness:60}),d=o,u=e.makeLinearGradient(h(t,{lightness:t.lightness-16,alpha:.8}));return C({primary:o,\"primary-agile\":h(t,{lightness:45}),\"primary-text\":s,\"secondary-text\":a,link:l,\"background-dark\":\"#f0f0f0\",\"border-active\":h(t,{lightness:60}),\"border-picture\":h(t,{lightness:6,alpha:.04}),\"border-grey-on-bg-grey\":\"#E8E8E8\",\"icons-secondary-text\":\"#aaaaaa\",\"icons-grey\":\"#AAAAAA\",\"icons-grey-bg\":\"#F0F0F0\",\"icons-color-agile\":h(t,{lightness:30}),\"icons-color-bg\":h(t,{lightness:45,alpha:.1}),\"color-agile-text\":h(t,{lightness:30}),\"icons-agile-bg\":h(t,{alpha:.2,lightness:45}),\"banner-accent-bg\":h(t,{lightness:90}),\"banner-accent-bg-image\":h(t,{lightness:90}),\"input-bg\":\"#ffffff\",\"input-default-border\":\"#ececec\",\"input-active-border\":h(t,{lightness:60}),\"btn-primary-default-bg\":o,\"btn-primary-text\":l,\"btn-primary-secondary-text\":h(W(\"#000000\"),{alpha:.6}),\"btn-primary-default-border\":p,\"btn-label-text\":\"#ffffff\",\"btn-label-bg\":l,\"btn-hover-press-bg\":d,\"btn-hover-press-bg-image\":u,\"btn-hover-press-border\":h(t,{lightness:50}),\"btn-secondary-default-bg\":\"#ffffff\",\"btn-secondary-text\":s,\"btn-secondary-default-border\":h(t,{lightness:55}),\"tab-stroke-default-text\":a,\"tab-stroke-active-border\":h(t,{lightness:60}),\"timeslot-active-text\":s,\"timeslot-active-bg\":o,\"timeslot-active-border\":h(t,{lightness:60}),\"timeslot-default-bg\":\"#ffffff\",\"timeslot-default-border\":\"#EDEDED\",\"timeslot-today-bg\":\"#F5F5F5\",\"timeslot-today-border\":\"#F5F5F5\",\"timeslot-today-text-disabled\":\"#CDCECE\",\"search-selected-text\":\"#f5f5f5\",\"city-select-bg\":\"#F5F5F5\",\"tag-bg\":h(t,{lightness:90}),\"tag-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-button-bg\":h(t,{lightness:90}),\"loyalty-button-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-card-text\":h(W(\"#000000\"),{alpha:.9}),\"loyalty-card-secondary-text\":h(W(\"#000000\"),{alpha:.4}),\"loyalty-card-logo-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-card-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-card-bg-from\":h(t,{lightness:t.lightness-2}),\"loyalty-card-bg-to\":h(t,{lightness:t.lightness-12}),\"loyalty-card-shadow\":h(t,{lightness:t.lightness-12,alpha:.5}),\"label-text\":s,\"label-bg\":o,\"label-border\":h(t,{lightness:60})},Yi(t,m.lighter,r))}getBrightPalette(t,r){let o=h(t),s=o,a=h(t,{lightness:6}),l=\"#808080\",p=o,d=e.makeLinearGradient(h(t,{lightness:95,alpha:.2})),u=h(t,{lightness:95,alpha:.2});return C({primary:o,\"primary-agile\":s,\"primary-text\":a,\"secondary-text\":l,link:p,\"background-dark\":\"#f0f0f0\",\"border-active\":o,\"border-picture\":h(t,{lightness:6,alpha:.04}),\"border-grey-on-bg-grey\":\"#E8E8E8\",\"icons-secondary-text\":\"#aaaaaa\",\"icons-grey\":\"#AAAAAA\",\"icons-grey-bg\":\"#F0F0F0\",\"icons-color-agile\":o,\"icons-color-bg\":h(t,{alpha:.1}),\"color-agile-text\":o,\"icons-agile-bg\":h(t,{alpha:.15}),\"banner-accent-bg\":\"#FFFFFF\",\"banner-accent-bg-image\":e.makeLinearGradient(h(t,{alpha:.2})),\"input-bg\":\"#ffffff\",\"input-default-border\":\"#ececec\",\"input-active-border\":o,\"btn-primary-default-bg\":o,\"btn-primary-text\":\"#ffffff\",\"btn-primary-secondary-text\":h(W(\"#FFFFFF\"),{alpha:.7}),\"btn-primary-default-border\":o,\"btn-label-text\":o,\"btn-label-bg\":\"#ffffff\",\"btn-hover-press-bg\":o,\"btn-hover-press-bg-image\":d,\"btn-hover-press-border\":u,\"btn-secondary-default-bg\":\"#ffffff\",\"btn-secondary-text\":o,\"btn-secondary-default-border\":o,\"tab-stroke-default-text\":l,\"tab-stroke-active-border\":o,\"timeslot-active-text\":\"#ffffff\",\"timeslot-active-bg\":o,\"timeslot-active-border\":o,\"timeslot-default-bg\":\"#ffffff\",\"timeslot-default-border\":\"#EDEDED\",\"timeslot-today-bg\":\"#F5F5F5\",\"timeslot-today-border\":\"#F5F5F5\",\"timeslot-today-text-disabled\":\"#CDCECE\",\"search-selected-text\":h(W(l),{alpha:.5}),\"city-select-bg\":\"#F5F5F5\",\"tag-bg\":h(t,{lightness:92}),\"tag-border\":h(W(\"#000000\"),{alpha:.02}),\"loyalty-button-bg\":h(t,{lightness:90}),\"loyalty-button-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-card-text\":h(W(\"#FFFFFF\")),\"loyalty-card-secondary-text\":h(W(\"#FFFFFF\"),{alpha:.7}),\"loyalty-card-logo-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-card-border\":h(W(\"#000000\"),{alpha:0}),\"loyalty-card-bg-from\":h(t,{alpha:.8}),\"loyalty-card-bg-to\":h(t,{alpha:1}),\"loyalty-card-shadow\":h(t,{alpha:.35}),\"label-text\":\"#ffffff\",\"label-bg\":o,\"label-border\":o},Yi(t,m.bright,r))}getDarkPalette(t,r){let o=h(t),s=h(t,{lightness:6}),a=\"#808080\",l=o,p=o,d=e.makeLinearGradient(h(t,{lightness:95,alpha:.16})),u=h(t,{lightness:95,alpha:.16});return C({primary:o,\"primary-agile\":p,\"primary-text\":s,\"secondary-text\":a,link:l,\"background-dark\":\"#f0f0f0\",\"border-active\":o,\"border-picture\":h(t,{lightness:6,alpha:.04}),\"border-grey-on-bg-grey\":\"#E8E8E8\",\"icons-secondary-text\":\"#aaaaaa\",\"icons-grey\":\"#AAAAAA\",\"icons-grey-bg\":\"#F0F0F0\",\"icons-color-agile\":h(t,{lightness:30}),\"icons-color-bg\":h(t,{alpha:.1}),\"color-agile-text\":h(t,{lightness:30}),\"icons-agile-bg\":h(t,{alpha:.2,lightness:45}),\"banner-accent-bg\":h(t,{lightness:90}),\"banner-accent-bg-image\":h(t,{lightness:90}),\"input-bg\":\"#ffffff\",\"input-default-border\":\"#ececec\",\"input-active-border\":o,\"btn-primary-default-bg\":o,\"btn-primary-text\":\"#ffffff\",\"btn-primary-secondary-text\":h(W(\"#FFFFFF\"),{alpha:.7}),\"btn-primary-default-border\":o,\"btn-label-text\":o,\"btn-label-bg\":\"#ffffff\",\"btn-hover-press-bg\":o,\"btn-hover-press-bg-image\":d,\"btn-hover-press-border\":u,\"btn-secondary-default-bg\":\"#ffffff\",\"btn-secondary-text\":o,\"btn-secondary-default-border\":o,\"tab-stroke-default-text\":a,\"tab-stroke-active-border\":o,\"timeslot-active-text\":\"#ffffff\",\"timeslot-active-bg\":o,\"timeslot-active-border\":o,\"timeslot-default-bg\":\"#ffffff\",\"timeslot-default-border\":\"#EDEDED\",\"timeslot-today-bg\":\"#F5F5F5\",\"timeslot-today-border\":\"#F5F5F5\",\"timeslot-today-text-disabled\":\"#CDCECE\",\"search-selected-text\":h(t,{alpha:.1}),\"city-select-bg\":\"#F5F5F5\",\"tag-bg\":h(t,{lightness:92}),\"tag-border\":h(W(\"#000000\"),{alpha:.02}),\"loyalty-button-bg\":h(t,{lightness:90}),\"loyalty-button-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-card-text\":h(W(\"#FFFFFF\")),\"loyalty-card-secondary-text\":h(W(\"#FFFFFF\"),{alpha:.7}),\"loyalty-card-logo-border\":h(W(\"#000000\"),{alpha:.04}),\"loyalty-card-border\":h(W(\"#000000\"),{alpha:0}),\"loyalty-card-bg-from\":h(t,{lightness:25}),\"loyalty-card-bg-to\":h(t,{lightness:15}),\"loyalty-card-shadow\":h(t,{lightness:15,alpha:.3}),\"label-text\":\"#ffffff\",\"label-bg\":o,\"label-border\":o},Yi(t,m.dark,r))}generatePaletteForAccent(t,r){let a=W(t),{type:o}=a,s=fr(a,[\"type\"]);switch(o){case m.light:return this.getLightPalette(s,r);case m.lighter:return this.getLighterPalette(s,r);case m.bright:return this.getBrightPalette(s,r);case m.dark:return this.getDarkPalette(s,r);default:return console.warn(\"no palette for type '\".concat(o,\"', using default\")),this.getDefaultPalette(r)}}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})(),vf=[\"color_bg\",\"color_primary\",\"color_stroke_primary\",\"color_checkbox_hover_primary\",\"color_pressed_primary\",\"color_text_primary\",\"color_text_primary_12\",\"color_icon_primary\",\"color_chip_primary\",\"color_chip_stroke_primary\",\"color_chip_text_primary\",\"color_btn_shadow_primary\",\"color_text_black\",\"color_text_white\",\"color_white\",\"color_sub_white\",\"color_btn_shadow_grey\",\"color_grey_dark\",\"color_grey_medium\",\"color_grey_lines\",\"color_grey_03\",\"color_grey_05\",\"color_grey_07\",\"color_grey_09\",\"color_grey_11\",\"color_avatar_text\",\"color_avatar_bg\",\"color_green_01\",\"color_green_05\",\"color_green_07\",\"color_yellow_light\",\"color_yellow_accent\",\"color_yellow_dark\",\"color_red_light\",\"color_red_accent\",\"color_red_dark\",\"color_blue_light\",\"color_blue_accent\",\"color_violet_light\",\"color_violet_accent\",\"color_grey_light\",\"color_grey\"];function Yi(n,e,i=!1){let t={color_bg:{[m.lighter]:\"#F5F5F5\",[m.light]:\"#F5F5F5\",[m.bright]:\"#F5F5F5\",[m.dark]:\"#F5F5F5\",darkMode:\"#141414\"},color_primary:{[m.lighter]:h(n),[m.light]:h(n),[m.bright]:h(n),[m.dark]:h(n)},color_stroke_primary:{[m.lighter]:h(D(C({},n),{lightness:50})),[m.light]:h(n),[m.bright]:h(n),[m.dark]:h(n)},color_checkbox_hover_primary:{[m.lighter]:h(D(C({},n),{lightness:n.lightness-5})),[m.light]:ut.mixColors(n,D(C({},n),{lightness:n.lightness-16}),30),[m.bright]:ut.mixColors(n,D(C({},n),{lightness:n.lightness-16}),30),[m.dark]:ut.mixColors(n,D(C({},n),{lightness:35}),30)},color_pressed_primary:{[m.lighter]:h(D(C({},n),{lightness:n.lightness-10})),[m.light]:ut.mixColors(n,D(C({},n),{lightness:n.lightness-16}),45),[m.bright]:ut.mixColors(n,D(C({},n),{lightness:n.lightness-16}),45),[m.dark]:ut.mixColors(n,D(C({},n),{lightness:35}),50)},color_text_primary:{[m.lighter]:\"#2B3134\",[m.light]:\"#2B3134\",[m.bright]:\"#ffffff\",[m.dark]:\"#ffffff\"},color_text_primary_12:{[m.lighter]:\"#2B31341f\",[m.light]:\"#2B31341f\",[m.bright]:\"#ffffff1f\",[m.dark]:\"#ffffff1f\"},color_icon_primary:{[m.lighter]:\"#2B3134\",[m.light]:\"#2B3134\",[m.bright]:\"#ffffff\",[m.dark]:\"#ffffff\"},color_chip_primary:{[m.lighter]:h(n),[m.light]:h(n),[m.bright]:h(n),[m.dark]:h(n)},color_chip_stroke_primary:{[m.lighter]:h(D(C({},n),{lightness:50})),[m.light]:h(n),[m.bright]:h(n),[m.dark]:h(n)},color_chip_text_primary:{[m.lighter]:\"#2B3134\",[m.light]:\"#2B3134\",[m.bright]:\"#ffffff\",[m.dark]:\"#ffffff\"},color_btn_shadow_primary:{[m.lighter]:h(D(C({},n),{lightness:34,alpha:.35})),[m.light]:h(D(C({},n),{lightness:n.lightness-20,alpha:.35})),[m.bright]:h(D(C({},n),{lightness:n.lightness-16,alpha:.35})),[m.dark]:h({hue:0,saturation:0,lightness:0,alpha:.5})},color_text_black:{[m.lighter]:\"#2B3134\",[m.light]:\"#2B3134\",[m.bright]:\"#2B3134\",[m.dark]:\"#2B3134\",darkMode:\"#ECEDEF\"},color_text_white:{[m.lighter]:\"#FFFFFF\",[m.light]:\"#FFFFFF\",[m.bright]:\"#FFFFFF\",[m.dark]:\"#FFFFFF\",darkMode:\"#2B3134\"},color_white:{[m.lighter]:\"#FFFFFF\",[m.light]:\"#FFFFFF\",[m.bright]:\"#FFFFFF\",[m.dark]:\"#FFFFFF\",darkMode:\"#252525\"},color_sub_white:{[m.lighter]:\"#FFFFFF\",[m.light]:\"#FFFFFF\",[m.bright]:\"#FFFFFF\",[m.dark]:\"#FFFFFF\",darkMode:\"#2E2E2E\"},color_btn_shadow_grey:{[m.lighter]:\"#212F4159\",[m.light]:\"#212F4159\",[m.bright]:\"#212F4159\",[m.dark]:\"#212F4159\",darkMode:\"#212F4159\"},color_grey_dark:{[m.lighter]:\"#71757F\",[m.light]:\"#71757F\",[m.bright]:\"#71757F\",[m.dark]:\"#71757F\",darkMode:\"#B2B2B2\"},color_grey_medium:{[m.lighter]:\"#9AA3B1\",[m.light]:\"#9AA3B1\",[m.bright]:\"#9AA3B1\",[m.dark]:\"#9AA3B1\",darkMode:\"#878787\"},color_grey_lines:{[m.lighter]:\"#E0E3EB\",[m.light]:\"#E0E3EB\",[m.bright]:\"#E0E3EB\",[m.dark]:\"#E0E3EB\",darkMode:\"#3D3D3D\"},color_grey_03:{[m.lighter]:\"#EAEEF4\",[m.light]:\"#EAEEF4\",[m.bright]:\"#EAEEF4\",[m.dark]:\"#EAEEF4\",darkMode:\"#363636\"},color_grey_05:{[m.lighter]:\"#D1D5DC\",[m.light]:\"#D1D5DC\",[m.bright]:\"#D1D5DC\",[m.dark]:\"#D1D5DC\",darkMode:\"#4D4D4D\"},color_grey_07:{[m.lighter]:\"#AEB5C1\",[m.light]:\"#AEB5C1\",[m.bright]:\"#AEB5C1\",[m.dark]:\"#AEB5C1\",darkMode:\"#7A7A7A\"},color_grey_09:{[m.lighter]:\"#828995\",[m.light]:\"#828995\",[m.bright]:\"#828995\",[m.dark]:\"#828995\",darkMode:\"#A3A3A3\"},color_grey_11:{[m.lighter]:\"#444951\",[m.light]:\"#444951\",[m.bright]:\"#444951\",[m.dark]:\"#444951\",darkMode:\"#CCCCCC\"},color_avatar_text:{[m.lighter]:Vi(n),[m.light]:Vi(n),[m.bright]:Vi(n),[m.dark]:Vi(n)},color_avatar_bg:{[m.lighter]:Ki(n),[m.light]:Ki(n),[m.bright]:Ki(n),[m.dark]:Ki(n)},color_green_01:{[m.lighter]:\"#E9F7E9\",[m.light]:\"#E9F7E9\",[m.bright]:\"#E9F7E9\",[m.dark]:\"#E9F7E9\",darkMode:\"#BCE7BC2E\"},color_green_05:{[m.lighter]:\"#52D45D\",[m.light]:\"#52D45D\",[m.bright]:\"#52D45D\",[m.dark]:\"#52D45D\",darkMode:\"#52D45D\"},color_green_07:{[m.lighter]:\"#219C2B\",[m.light]:\"#219C2B\",[m.bright]:\"#219C2B\",[m.dark]:\"#219C2B\",darkMode:\"#74E27D\"},color_yellow_light:{[m.lighter]:\"#FFF2BF\",[m.light]:\"#FFF2BF\",[m.bright]:\"#FFF2BF\",[m.dark]:\"#FFF2BF\",darkMode:\"#FFE67D2E\"},color_yellow_accent:{[m.lighter]:\"#FFCB00\",[m.light]:\"#FFCB00\",[m.bright]:\"#FFCB00\",[m.dark]:\"#FFCB00\",darkMode:\"#FFDB4D\"},color_yellow_dark:{[m.lighter]:\"#FFA800\",[m.light]:\"#FFA800\",[m.bright]:\"#FFA800\",[m.dark]:\"#FFA800\",darkMode:\"#FFE67DBD\"},color_red_light:{[m.lighter]:\"#FEEFEF\",[m.light]:\"#FEEFEF\",[m.bright]:\"#FEEFEF\",[m.dark]:\"#FEEFEF\",darkMode:\"#FEB4B42E\"},color_red_accent:{[m.lighter]:\"#F72C32\",[m.light]:\"#F72C32\",[m.bright]:\"#F72C32\",[m.dark]:\"#F72C32\",darkMode:\"#FA8488\"},color_red_dark:{[m.lighter]:\"#D1050B\",[m.light]:\"#D1050B\",[m.bright]:\"#D1050B\",[m.dark]:\"#D1050B\",darkMode:\"#FEB4B4BD\"},color_blue_light:{[m.lighter]:\"#F0F6FF\",[m.light]:\"#F0F6FF\",[m.bright]:\"#F0F6FF\",[m.dark]:\"#F0F6FF\",darkMode:\"#99C2FF2E\"},color_blue_accent:{[m.lighter]:\"#0041E5\",[m.light]:\"#0041E5\",[m.bright]:\"#0041E5\",[m.dark]:\"#0041E5\",darkMode:\"#80A4FF\"},color_violet_light:{[m.lighter]:\"#EDEDFC\",[m.light]:\"#EDEDFC\",[m.bright]:\"#EDEDFC\",[m.dark]:\"#EDEDFC\",darkMode:\"#9999FF2E\"},color_violet_accent:{[m.lighter]:\"#583CF1\",[m.light]:\"#583CF1\",[m.bright]:\"#583CF1\",[m.dark]:\"#583CF1\",darkMode:\"#9988F7\"},color_grey_light:{[m.lighter]:\"#C6CBD3\",[m.light]:\"#C6CBD3\",[m.bright]:\"#C6CBD3\",[m.dark]:\"#C6CBD3\",darkMode:\"#636363\"},color_grey:{[m.lighter]:\"#F7F9FC\",[m.light]:\"#F7F9FC\",[m.bright]:\"#F7F9FC\",[m.dark]:\"#F7F9FC\",darkMode:\"#2E2E2E\"}};return vf.reduce((r,o)=>{let s=t[o].darkMode;return i&&s?(r[o]=s,r):(r[o]=t[o][e],r)},{})}function Ki(n){let e=D(C({},n),{saturation:n.saturation<15?0:72.73,lightness:87.06});return n.lightness<50?e=D(C({},n),{saturation:n.saturation<15?0:71.43,lightness:95.88}):n.lightness<59?e=D(C({},n),{saturation:n.saturation<15?0:70.73,lightness:91.96}):n.lightness<80&&(e=D(C({},n),{saturation:n.saturation<15?0:70.73,lightness:91.96})),h(e)}function Vi(n){let e=D(C({},n),{saturation:n.saturation<15?0:73.91,lightness:45.1});return n.lightness<50?e=D(C({},n),{saturation:n.saturation<15?0:94.12,lightness:80}):n.lightness<59?e=D(C({},n),{saturation:n.saturation<15?0:93.46,lightness:70}):n.lightness<80&&(e=D(C({},n),{saturation:n.saturation<15?0:73.53,lightness:60})),h(e)}var Tf=\"--widget-ui-kit\",Dd=(()=>{let e=class e{constructor(t,r){c(this,\"document\");c(this,\"paletteGenerator\");this.document=t,this.paletteGenerator=r}getRootStyle(){return this.document.documentElement.style}buildCssVar(...t){return[Tf,...t].join(\"-\")}getValue(...t){let r=this.buildCssVar(...t);return this.getRootStyle().getPropertyValue(r)||null}initPalette(t,r=!1){let o=this.paletteGenerator.generatePaletteForAccent(t||ld,r);Object.entries(o).forEach(([s,a])=>{a&&this.setCssVarForPath([\"color\",s],a)})}setCssVarForPath(t,r){this.getRootStyle().setProperty(this.buildCssVar(...t),r)}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(et),_(ut))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var Nd=(()=>{let e=class e{constructor(t,r,o,s,a){c(this,\"orderManager\");c(this,\"location\");c(this,\"router\");c(this,\"orderDefaults\");c(this,\"appNavigationService\");c(this,\"orderSubscription\");this.orderManager=t,this.location=r,this.router=o,this.orderDefaults=s,this.appNavigationService=a}reflectOrderToUrl(t){let r=this.router.parseUrl(this.location.path(!0));t.toString().length>0&&this.orderDefaults.enableDefaults(),Object.assign(r.queryParams,{[da]:t.toString()}),this.location.replaceState(this.router.serializeUrl(r),\"\",this.location.getState())}reflectOrderToUrlOnDemand(){if(!this.orderSubscription){let t=this.appNavigationService.navigationEnd$.pipe(Gt(this.orderManager.getOrder$()));this.orderSubscription=t.subscribe(r=>{this.reflectOrderToUrl(r)})}}ngOnDestroy(){var t;(t=this.orderSubscription)==null||t.unsubscribe()}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(ze),_(Ot),_(Q),_($t),_(ye))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();function Af(n,e,i,t,r,o,s,a,l,p){return function(){return te(this,null,function*(){var v;i.resolveAndPersist(),p.readQueryData(),yield n.loadCurrentBookform(),yield n.setAbUserValue();let u=n.getCurrentBookform();yield a.init(),s.init(u),ii.init(r,o),e.reflectOrderToUrlOnDemand();let E=(v=u.style)==null?void 0:v.main_color;t.initPalette(E,l.selectSnapshot(y.bookform.getIsDarkThemeFeatureEnabled)),window._changeColor=S=>t.initPalette(S||E,l.selectSnapshot(y.bookform.getIsDarkThemeFeatureEnabled))})}}var Ld={provide:Wt,useFactory:Af,deps:[mi,Nd,lt,Dd,Or,Q,ni,Lt,_e,bl],multi:!0};var xd=(()=>{let e=class e{constructor(t,r,o,s){c(this,\"http\");c(this,\"store\");c(this,\"config\");c(this,\"widgetApiHelperService\");this.http=t,this.store=r,this.config=o,this.widgetApiHelperService=s}getTranslation(t){let r;t?r=!1:(t=wc,r=!0),this.store.dispatch(new _a);let o=lc(t)||t,s=this.config.useLocalTranslates?this.config.localTranslatesPath:\"\".concat(this.config.apiUrl,\"/i18n/\").concat(o),a=this.http.get(s);return Io(a).pipe(O(([l])=>{var p;return this.store.dispatch(new Ea(t,r)),((p=this.widgetApiHelperService)==null?void 0:p.customTranslates[t])!=null&&(l=pa(l,this.widgetApiHelperService.customTranslates[t])),l}))}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(it),_(K),_(Rc),_(oi))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var $d=(()=>{let e=class e{constructor(t,r){c(this,\"httpClient\");c(this,\"storeConfig\");this.httpClient=t,this.storeConfig=r}getApplications({companyId:t}){return this.httpClient.get(\"\".concat(this.storeConfig.apiUrl,\"/booking/locations/\").concat(t,\"/applications/available\")).pipe(O(r=>r.data.map(o=>D(C({},o.attributes),{id:o.id}))))}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(it),_(Nt))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var Bd=(()=>{let e=class e{constructor(){c(this,\"actions$\",T(J));c(this,\"store\",T(K));c(this,\"applicationsService\",T($d));c(this,\"getApplicationsEffect$\",V(()=>this.actions$.pipe(N(Zr),he(this.store.select(y.bookform.getBookformCompanyId)),L(([,t])=>this.applicationsService.getApplications({companyId:t})),O(t=>Ba({payload:t})),ne(()=>G(ja())))))}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var jd=(()=>{let e=class e{};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275mod\",Te({type:e})),c(e,\"\\u0275inj\",ve({providers:[ct,Xa,Za,Ja,ec]}));let n=e;return n})();function Ud(n,e=\"SHA-256\"){return te(this,null,function*(){try{let i=new TextEncoder().encode(n),t=yield crypto.subtle.digest(e,i);return Array.from(new Uint8Array(t)).map(o=>o.toString(16).padStart(2,\"0\")).join(\"\")}catch(i){return console.warn(i),\"\"}})}var zi=new yt(\"libs.http.recaptcha-v3-key\");var Yd=\"app-security-level\",Kd=(()=>{var e;let i=class i{constructor(){c(this,\"config\",T(Vr));c(this,\"securityConfigRecaptchaV3Key$\",T(zi));c(this,\"captchaService\",T(ui));c(this,\"bridgeService\",T(ct));c(this,\"recaptchaInitialized\",!1);c(this,\"mustSkipRepeatRecaptchaRequest\",!1);c(this,\"recaptchaV3Key\",(e=JSON.parse(sessionStorage.getItem(Yd)||\"{}\").recaptcha_v3)==null?void 0:e.key);c(this,\"URLS_TO_USE_CAPTCHA\",[{url:\"\".concat(this.config.apiUrl,\"/book_record/\"),method:\"POST\"},{url:\"/attendances\",method:\"POST\"}])}intercept(r,o){let s=r.url.match(this.config.apiUrl),a=this.URLS_TO_USE_CAPTCHA.some(u=>r.method===u.method&&(r.url.startsWith(u.url)||r.url.endsWith(u.url)));if(!s)return o.handle(r);let l=\"\".concat(re.apiToken.replace(\"Bearer \",\"\"),\".\").concat(location.pathname,\".\").concat(JSON.stringify(r.body)),p=a?this.getRecaptchaV3Key$():G(\"\"),d=a?Er(Ud(l)):G(\"\");return fe([p,d,this.securityConfigRecaptchaV3Key$]).pipe(ne(u=>(console.warn(\"error\",u),G(\"\"))),oe(1),L(([u,E,v])=>{v&&(this.recaptchaV3Key=v);let S=r.clone({setHeaders:{\"X-App-Validation-Token\":u,\"X-App-Signature\":E}});return o.handle(S).pipe(L(g=>{var x;if(!(g instanceof Wo))return G(g);let F=JSON.parse(g.headers.get(\"X-App-Security-Level\")||\"{}\"),R=(x=F==null?void 0:F.recaptcha_v3)==null?void 0:x.key;return R&&(this.recaptchaV3Key=R),F&&!this.isEmptyObject(F)&&sessionStorage.setItem(Yd,JSON.stringify(F)),this.recaptchaV3Key&&!this.recaptchaInitialized?this.addRecaptchaScript$().then(()=>g).catch(()=>g):G(g)}),ne(g=>{var F;if((g==null?void 0:g.status)!==412||this.mustSkipRepeatRecaptchaRequest)return this.mustSkipRepeatRecaptchaRequest=!1,Sr(g);try{let R=g.error.meta.errors[\"X-App-Security-Level\"];if(R.user_confirm)return this.captchaService.openCaptchaFrame(R.user_confirm.url),gt(this.bridgeService.onCaptchaV2Failure$(),this.bridgeService.onCaptchaV2Success$(),this.captchaService.onCaptchaPageLeft$().pipe(L(()=>Sr(new oa(\"Captcha is required\"))))).pipe(oe(1),L(()=>o.handle(r.clone())));{let x=(F=R.recaptcha_v3)==null?void 0:F.key;(x==null?void 0:x.length)>0&&(this.recaptchaV3Key=x)}}catch(R){console.warn(R)}return Er(this.addRecaptchaScript$()).pipe(L(()=>(this.recaptchaInitialized=!0,this.getRecaptchaV3Key$().pipe(L(R=>(this.mustSkipRepeatRecaptchaRequest=!0,o.handle(r.clone({setHeaders:{\"X-App-Validation-Token\":R,\"X-App-Signature\":E}}))))))),ne(()=>Sr(g)))}))}))}addRecaptchaScript$(){return new Promise((r,o)=>{if(!this.recaptchaV3Key||this.recaptchaInitialized){r();return}Hc.appendScript(\"https://www.google.com/recaptcha/api.js?render=\".concat(this.recaptchaV3Key)).then(()=>{r(),this.recaptchaInitialized=!0}).catch(()=>{o(),this.recaptchaInitialized=!1}),this.recaptchaInitialized=!0})}getRecaptchaV3Key$(){var r;return typeof((r=window.grecaptcha)==null?void 0:r.execute)==\"function\"?Er(window.grecaptcha.execute(this.recaptchaV3Key,{action:\"booking\"})).pipe(ne(o=>(console.warn(\"error\",o),G(\"\")))):G(\"\")}isEmptyObject(r){return Object.keys(r).length===0&&r.constructor===Object}};c(i,\"\\u0275fac\",function(o){return new(o||i)}),c(i,\"\\u0275prov\",b({token:i,factory:i.\\u0275fac,providedIn:\"root\"}));let n=i;return n})();var Vd=(()=>{let e=class e{static forRoot(t,r,o,s){return{ngModule:e,providers:[{provide:dl,useFactory:t},{provide:ml,useFactory:r},{provide:ul,useFactory:o},{provide:yl,useFactory:s}]}}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275mod\",Te({type:e})),c(e,\"\\u0275inj\",ve({providers:[fl,vl,gl,Sl,_l,El],imports:[rt,pi,Yr,kt,ri]}));let n=e;return n})();var zd=gr(dm());var Hd=(()=>{let e=class e{constructor(t){c(this,\"baseApiService\");c(this,\"apiCustomFieldsService\");this.baseApiService=t,t.init(),this.apiCustomFieldsService=new zd.ClientCustomFieldService}getCustomFields(t){return Co(()=>this.apiCustomFieldsService.getFields(t))}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(ac))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var Gd=(()=>{let e=class e{constructor(){c(this,\"customFieldsService\",T(Hd));c(this,\"store\",T(K));c(this,\"getCustomFields$\",V(()=>this.store.select(y.bookform.getBookformId).pipe(U(t=>!!t),L(t=>this.customFieldsService.getCustomFields(t.toString())),O(t=>new Ya(t)),ne(()=>G(new Ka)))))}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var qd=(()=>{let e=class e extends Ve{constructor(r,o,s,a,l){super(r,o,s,a,l);c(this,\"navigationStepUrlResolver\");c(this,\"router\");c(this,\"store\");c(this,\"appNavigationService\");c(this,\"initNavigationServiceSettings\");c(this,\"sequenceType\",Ie.original);c(this,\"orderSteps\");this.navigationStepUrlResolver=r,this.router=o,this.store=s,this.appNavigationService=a,this.initNavigationServiceSettings=l}buildSteps(r,o){let{preOrderSteps:s,orderSteps:a,contactStep:l}=Rt(r);this.orderSteps=a;let p=_t(s);return o&&le(p,{step:A.recordType,hidden:!1}),le(p,Re(a,\"service\")),le(p,{step:A.order,hidden:!1}),le(p,l),p}resolveNextStep(r,o){return o.hasDateTime()&&o.hasServices()&&o.hasStaff()?A.contact:super.resolveNextStep(r,o)}changeVisibilityByType(r,o){this.orderSteps=this.orderSteps.map(s=>s.step===r?D(C({},s),{hidden:o}):s)}isHiddenByType(r,o=!1){var s;return!o&&super.isMasterStepAndHasParallelComplexSelected(r)?!1:!!((s=this.orderSteps.find(a=>a.step===r))!=null&&s.hidden)}getHiddenMasterId(){let r=this.orderSteps.find(s=>s.step===A.master),o=r!=null&&r.hidden?r==null?void 0:r.default:null;return typeof o==\"number\"?o:null}};c(e,\"\\u0275fac\",function(o){return new(o||e)(_(pt),_(Q),_(_e),_(ye),_(\"initOptions\"))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var Qd=(()=>{let e=class e extends Ve{constructor(r,o,s,a,l){super(r,o,s,a,l);c(this,\"navigationStepUrlResolver\");c(this,\"router\");c(this,\"store\");c(this,\"appNavigationService\");c(this,\"initNavigationServiceSettings\");c(this,\"sequenceType\",Ie.serial);this.navigationStepUrlResolver=r,this.router=o,this.store=s,this.appNavigationService=a,this.initNavigationServiceSettings=l}buildSteps(r,o){let{preOrderSteps:s,orderSteps:a,contactStep:l}=Rt(r),p=_t(s);return o&&le(p,{step:A.recordType,hidden:!1}),_t(a).forEach(u=>{le(p,u)}),le(p,l),p}isOnOrderFirstStep(r){return this.store.selectSnapshot(y.order.getAddExtraMasterStepForComposites)&&super.resolveFirstOrderStep()===A.master?!1:super.isOnOrderFirstStep(r)}resolvePreviousStep(r){var o;return r===A.master&&this.store.selectSnapshot(y.order.getAddExtraMasterStepForComposites)?((o=super.at(super.findIndexByType(A.service)-1))==null?void 0:o.step)||A.service:super.resolvePreviousStep(r)}resolveNextStep(r,o){return r===A.service&&this.store.selectSnapshot(y.order.getAddExtraMasterStepForComposites)&&!o.hasStaff()?A.master:r===A.master&&this.store.selectSnapshot(y.order.getAddExtraMasterStepForComposites)&&!o.hasDateTime()?A.datetime:r===A.master&&this.store.selectSnapshot(y.order.getAddExtraMasterStepForComposites)&&o.isFull()?A.contact:super.resolveNextStep(r,o)}};c(e,\"\\u0275fac\",function(o){return new(o||e)(_(pt),_(Q),_(_e),_(ye),_(\"initOptions\"))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var Xd=(()=>{let e=class e extends Ve{constructor(r,o,s,a,l){super(r,o,s,a,l);c(this,\"navigationStepUrlResolver\");c(this,\"router\");c(this,\"store\");c(this,\"appNavigationService\");c(this,\"initNavigationServiceSettings\");c(this,\"sequenceType\",Ie.menu);c(this,\"isDefaultStepsOrder\",!0);c(this,\"nextStepLabelToken$\",this.nextStepType$.pipe(O(r=>{switch(r){case A.datetime:return\"steps.select_date_time\";case A.master:return this.calculateNextStepLabelForMaster();case A.service:return\"steps.select_service\";case A.contact:return\"steps.contact\"}return\"\"}),Cr(1)));this.navigationStepUrlResolver=r,this.router=o,this.store=s,this.appNavigationService=a,this.initNavigationServiceSettings=l,this.currentStepType$.pipe(U(p=>!!p),we(),he(this.initNavigationServiceSettings.isMixedRecordType$),$(this.destroy$)).subscribe(([p,d])=>{this.isDefaultStepsOrder&&[A.master,A.service,A.datetime].includes(p)&&this.reinitSteps(this.buildSteps(this.initNavigationServiceSettings.steps,d,p))})}calculateNextStepLabelForMaster(){return this.store.selectSnapshot(y.order.getAddExtraMasterStepForComposites)?this.store.selectSnapshot(y.order.getIsSomeMasterSelected)?\"steps.select_second_specialist\":\"steps.select_specialists\":\"steps.select_staff\"}resolveFirstOrderStep(){return A.menu}resolveNextStep(r,o){if(r===A.service&&this.store.selectSnapshot(y.order.getAddExtraMasterStepForComposites)&&!o.hasStaff())return A.master;let s=super.resolveNextStep(r,o);if(ha(s)){for(let a of this.steps$.value){if(a.step===A.datetime&&!o.hasDateTime())return A.datetime;if(a.step===A.service&&!o.hasServices())return A.service;if(a.step===A.master&&!o.hasStaff())return A.master}return A.contact}return pn(s)&&(s===A.datetime&&o.hasDateTime()||s===A.service&&o.hasServices()||s===A.master&&o.hasStaff())?this.resolveNextStep(s,o):s}resolvePreviousStep(r){if(ua(r))return this.resolvePreviousStep(this.resolveFirstOrderStep());let o=this.getPreviousStep(r);if(!o||!pn(o.step))return A.menu;ia(o,\"failed to resolve prev step: no step before current\");let s=o.step;return fa(o)?this.resolvePreviousStep(s):s}generateNextStepLink(r,o){return te(this,null,function*(){let s=o?null:r;return this.currentStepType$.value===A.menu&&[A.master,A.service,A.datetime].includes(s)&&this.reinitSteps(this.buildSteps(this.currentSteps,!1,s)),Gi(e.prototype,this,\"generateNextStepLink\").call(this,r,o)})}navigateToNextStep(r,o){return te(this,null,function*(){let s=o?null:r;return this.currentStepType$.value===A.menu&&[A.master,A.service,A.datetime].includes(s)&&this.reinitSteps(this.buildSteps(this.currentSteps,!1,s)),Gi(e.prototype,this,\"navigateToNextStep\").call(this,r,o)})}buildSteps(r,o,s){let{preOrderSteps:a,orderSteps:l,contactStep:p}=Rt(r),d=_t(a);if(o&&le(d,{step:A.recordType,hidden:!1}),s)switch(this.isDefaultStepsOrder=!1,le(d,Re(l,s)),s){case A.datetime:le(d,Re(l,A.service)),le(d,Re(l,A.master));break;case A.service:le(d,Re(l,A.master)),le(d,Re(l,A.datetime));break;case A.master:le(d,Re(l,A.service)),le(d,Re(l,A.datetime));break}else le(d,Re(l,A.service)),le(d,Re(l,A.datetime)),le(d,Re(l,A.master));return le(d,p),this.steps$.value.length>0&&(d=d.map(u=>D(C({},u),{hidden:this.isHiddenByType(u.step,!0)}))),d}};c(e,\"\\u0275fac\",function(o){return new(o||e)(_(pt),_(Q),_(_e),_(ye),_(\"initOptions\"))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();function Cf(n,e,i,t,r,o,s,a){let l=e.getCurrentBookform(),p={order$:s.getOrder$(),steps:l.steps,isMixedRecordType$:o.isMixedRecordType$};switch(If(l,n)){case Ie.original:return new qd(i,t,r,a,p);case Ie.menu:return new Xd(i,t,r,a,p);case Ie.serial:return new Qd(i,t,r,a,p)}}function If(n,e){let t=new URL(e.location.href).searchParams.get(\"seq\"),r=Object.keys(Ie);if(t){if(r.includes(t))return t;console.warn(\"invalid ?seq. possible values:\",r.join(\",\"))}switch(n.sequence_type){case\"menu\":return Ie.menu;case\"steps\":return Ie.serial;case\"order\":return Ie.original;default:return Ie.menu}}var Zd={provide:Ve,useFactory:Cf,deps:[et,mi,pt,Q,_e,rl,ze,ye,_e]};var Jd=[\"onChangeRoute\",\"onRecordSuccess\",\"getUserData\"],em=(()=>{let e=class e{constructor(t,r,o){c(this,\"actions$\");c(this,\"store\");c(this,\"appNavigationService\");c(this,\"destroy$\",new Le(1));c(this,\"version\",\"0.0.1\");c(this,\"ignoredMasters\",[]);c(this,\"ignoredServices\",[]);c(this,\"hideReviewStaff\",[]);c(this,\"hideReviewCompany\",[]);c(this,\"ignoredCategories\",[]);c(this,\"analytics\",{});c(this,\"customTranslates\",{});c(this,\"additionalOptions\",{});c(this,\"notWorkingDatesRanges\",[]);c(this,\"filialName\",\"\");c(this,\"forceShowNextMonth\",!1);c(this,\"ignoredCustomFields\",[]);this.actions$=t,this.store=r,this.appNavigationService=o}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}init(){let t=Object.keys(new di).filter(r=>!Jd.includes(r));return window.widgetApi=new di,window.altegioApi=new di,Jd.forEach(r=>{Object.defineProperty(window.widgetApi,r,{value:this[r](),writable:!1,configurable:!1}),Object.defineProperty(window.altegioApi,r,{value:this[r](),writable:!1,configurable:!1})}),t.forEach(r=>{Object.defineProperty(window.widgetApi,r,{value:this[r],writable:typeof this[r]!=typeof Function,configurable:!1}),Object.defineProperty(window.altegioApi,r,{value:this[r],writable:typeof this[r]!=typeof Function,configurable:!1})}),this.version=\"0.0.1\",Promise.resolve(!0)}setIgnoreMasters(t){Array.isArray(t)&&(this.ignoredMasters=t)}setIgnoreServices(t){Array.isArray(t)&&(this.ignoredServices=t)}setIgnoreCategories(t){Array.isArray(t)&&(this.ignoredCategories=t)}setHideReviewStaff(t){Array.isArray(t)&&(this.hideReviewStaff=t)}setHideReviewCompany(t){Array.isArray(t)&&(this.hideReviewCompany=t)}setGoogleAnalytic(t){this.analytics.google=t}setFacebookAnalytic(t){this.analytics.facebook=t}onChangeRoute(){return t=>{this.appNavigationService.navigationEnd$.subscribe(r=>t(location.href,r.urlAfterRedirects))}}onRecordSuccess(){return t=>{this.actions$.pipe(N(ot),$(this.destroy$)).subscribe(r=>{var o,s;return t([D(C({},r.record),{record_id:(o=r==null?void 0:r.payload[0])==null?void 0:o.record_id,record_hash:(s=r==null?void 0:r.payload[0])==null?void 0:s.record_hash})])})}}setCustomTranslates(t){this.customTranslates=t}setAdditionalOptions(t){this.additionalOptions=t}setNotWorkingDatesRanges(t){Array.isArray(t)&&(this.notWorkingDatesRanges=t)}setForceShowNextMonth(t){t&&(this.forceShowNextMonth=!0)}setFilialName(t){this.filialName=t}getUserData(){return t=>{typeof t==\"function\"&&this.store.select(y.user.getUser).pipe($(this.destroy$)).subscribe(r=>t(r))}}getLastOrderInfo(){if(localStorage.getItem(\"client_booking:order\")!==null)try{return JSON.parse(localStorage.getItem(\"client_booking:order\")).lastRecordByIdFromApi}catch(t){console.warn(t)}}setIgnoredCustomFields(t){Array.isArray(t)&&(this.ignoredCustomFields=t)}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(J),_(K),_(ye))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var tm=(()=>{let e=class e{};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275mod\",Te({type:e})),c(e,\"\\u0275inj\",ve({imports:[rt,Mc,rc,kt]}));let n=e;return n})();var rm=(()=>{let e=class e{constructor(){c(this,\"actions$\",T(J));c(this,\"store\",T(K));c(this,\"sentryMessage\",T(ca));c(this,\"sendStuffCommentReport$\",V(()=>{let t=this.store.select(y.user.getUser),r=this.store.select(y.currentCompany.getCurrentCompany),o=this.store.select(y.user.isLoggedIn);return this.actions$.pipe(N(fn),he(t,r,o),L(([s,a,l,p])=>this.store.select(y.reviews.getMasterReviewsById({id:s.commentId})).pipe(we(Boolean),L(d=>this.sentryMessage.sendSentryMessage$(fn.type,\"info\",{action:s,review:d,userName:a==null?void 0:a.name,userId:a==null?void 0:a.id,userPhone:a==null?void 0:a.phone,userEmail:a==null?void 0:a.email,companyId:l.id,companyName:l.title,isLoggedIn:p}).pipe(O(()=>ll()))))))}));c(this,\"sendCompanyCommentReport$\",V(()=>{let t=this.store.select(y.user.getUser),r=this.store.select(y.currentCompany.getCurrentCompany),o=this.store.select(y.user.isLoggedIn);return this.actions$.pipe(N(gn),he(t,r,o),L(([s,a,l,p])=>this.store.select(y.reviews.getCompanyReviewsById({id:s.commentId})).pipe(we(Boolean),L(d=>this.sentryMessage.sendSentryMessage$(gn.type,\"info\",{action:s,review:d,userName:a.name,userId:a.id,userPhone:a.phone,userEmail:a.email,companyId:l.id,companyName:l.title,isLoggedIn:p}).pipe(O(()=>pl()))))))}))}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var im=(()=>{let e=class e{constructor(){c(this,\"actions$\",T(J));c(this,\"store\",T(K));c(this,\"lastOrderPostMessage$\",V(()=>{let t=(r,o,s)=>{let a=l=>{let{avatar:p,avatar_big:d,id:u,name:E,prepaid:v,rating:S,show_rating:g,specialization:F,votes_count:R}=o.find(x=>x.id===l.staff_id)||{};return{avatar:p,avatar_big:d,id:u,name:E,prepaid:v,rating:S,show_rating:g,specialization:F,votes_count:R}};return s.map(l=>({services:l.services.map(p=>r.find(d=>d.id===p)||{id:null}).filter(p=>Number.isInteger(p.id)),staff:a(l),id:l.id})).filter(l=>l.services.length&&Number.isInteger(l.staff.id))};return this.actions$.pipe(N(ot),L(r=>{let o=this.store.select(y.services.getServices).pipe(oe(1)),s=this.store.select(y.masters.getMasters).pipe(oe(1)),a=this.store.select(y.currentCompany.getCurrentCompany);return fe([o,s,a]).pipe(O(([l,p,d])=>{let{record:{appointments:u},payload:E}=r,{public_title:v,id:S,title:g}=d;return{appointments:t(l,p,u),payload:E,company:{public_title:v,id:S,title:g}}}))}),Se(({appointments:r,payload:o,company:s})=>{let a=r.map(({services:l,staff:p})=>D(C({services:l,staff:p},C({id:null},o[0])),{company:s})).filter(l=>Number.isInteger(l.id));zr(a)}))},{dispatch:!1}))}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var nm=(()=>{let e=class e{constructor(t,r){c(this,\"http\");c(this,\"storeConfig\");c(this,\"httpContext\",new Go().set(sa,!0));this.http=t,this.storeConfig=r}getNotifications({bookformId:t,page:r=1,limit:o}){let s=new xr({fromObject:{page:r,bookform_id:t}});return o&&s.set(\"limit\",o),this.http.get(\"\".concat(this.storeConfig.apiUrl,\"/client_app/notifications/?\").concat(s.toString()),{context:this.httpContext})}updateReadStatus(t,r){switch(r){case\"erp\":return this.updateReadStatusByBackendId(t);case\"firebase\":return this.updateReadStatusByFirebaseId(t);default:throw new Error(\"unsupported notification read backend type\")}}updateReadStatusByBackendId(t){return this.http.put(\"\".concat(this.storeConfig.apiUrl,\"/client_app/notifications/\").concat(t,\"/status\"),{context:this.httpContext,status:\"read\"})}updateReadStatusByFirebaseId(t){return t.startsWith(\":0\")&&(t=t.slice(2)),this.http.put(\"\".concat(this.storeConfig.apiUrl,\"/client_app/notifications/message_status\"),{context:this.httpContext,message_id:t,channel:\"push\",status:\"read\"})}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(it),_(Nt))}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let n=e;return n})();var om=(()=>{let e=class e{constructor(){c(this,\"actions$\",T(J));c(this,\"store\",T(K));c(this,\"notificationsService\",T(nm));c(this,\"httpError\",T(st));c(this,\"GetNotificationsAction$\",V(()=>this.actions$.pipe(N(ka),he(this.store.select(y.bookform.getBookformId)),At(([,t])=>this.notificationsService.getNotifications({page:1,bookformId:t}).pipe(O(r=>new La({meta:r.meta,notifications:r.data})),ne(r=>G(new Xr({message:this.httpError.getErrorMessage(r)}))))))));c(this,\"GetNotificationsChunkAction$\",V(()=>this.actions$.pipe(N(Da),he(this.store.select(y.notifications.getMeta),this.store.select(y.bookform.getBookformId)),At(([,t,r])=>{let o=t.pagesLoadedCount+1;return this.notificationsService.getNotifications({page:o,limit:10,bookformId:r}).pipe(O(s=>new $a(s)),ne(s=>G(new Xr({message:this.httpError.getErrorMessage(s)}))))}))));c(this,\"NotificationReadAction$\",V(()=>this.actions$.pipe(N(Na),At(t=>this.notificationsService.updateReadStatus(t.payload.notificationId,t.payload.backendType).pipe(O(r=>new xa({notification:r.data})),ne(r=>G(new Xr({message:this.httpError.getErrorMessage(r)}))))))))}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var sm=20,am=(()=>{let e=class e{constructor(){c(this,\"actions$\",T(J));c(this,\"activitiesService\",T(Ec));c(this,\"store\",T(K));c(this,\"httpError\",T(st));c(this,\"tracking\",T(nt));c(this,\"paymentService\",T(si));c(this,\"getActivitiesAvailableDatesAction$\",V(()=>this.actions$.pipe(N(Ms),he(this.store.select(y.activities.getAllFilters),this.store.select(y.currentCompany.getCurrentCompanyId)),L(([t,r,o])=>this.activitiesService.getAvailableDates(o,t.from,t.till,r).pipe(O(s=>new $s(s.data)),ne(s=>G(new Bs(this.httpError.getErrorMessage(s)))))))));c(this,\"loadMoreActivitiesByDate$\",V(()=>this.actions$.pipe(N(Fs),he(this.store.select(y.activities.getAllFilters),this.store.select(y.activities.getSelectedDate),this.store.select(y.activities.getMoreActivitiesCurrentPage),this.store.select(y.currentCompany.getCurrentCompany),this.store.select(y.bookform.getBookformSpecializationDisplayModeType)),L(([t,r,o,s,a,l])=>this.activitiesService.getActivities({companyId:a.id,count:sm,from:Zt.fromISO(o).toISODate(),till:t.tillRange===\"infinity\"?Ia:Zt.fromISO(o).toISODate(),filters:r,page:s+1}).pipe(O(p=>new js(p.data.map(d=>this.mapActivities(d,a.timezone,l,a.activity_online_record_clients_count_max)),p.meta.count)))),ne(t=>G(new Us(this.httpError.getErrorMessage(t)))))));c(this,\"loadPreviousActivitiesByDate$\",V(()=>this.actions$.pipe(N(Rs),he(this.store.select(y.activities.getAllFilters),this.store.select(y.activities.getSelectedDate),this.store.select(y.activities.getPreviousActivitiesCurrentPage),this.store.select(y.currentCompany.getCurrentCompany),this.store.select(y.bookform.getBookformSpecializationDisplayModeType)),L(([t,r,o,s,a,l])=>this.activitiesService.getActivities({companyId:a.id,count:sm,from:Zt.now().toISODate(),till:Zt.fromISO(o).subtractDays(1).toISODate(),filters:r,page:s+1,reverse:!0}).pipe(O(p=>new Ys(p.data.map(d=>this.mapActivities(d,a.timezone,l,a.activity_online_record_clients_count_max)),p.meta.count)))),ne(t=>G(new Ks(this.httpError.getErrorMessage(t)))))));c(this,\"getActivitiesAvailableDates$\",V(()=>this.actions$.pipe(N(ks),he(this.store.select(y.activities.getAppliedFilters),this.store.select(y.currentCompany.getCurrentCompanyId)),L(([,t,r])=>{let o=Object.keys(t).reduce((s,a)=>(s=[...s,...(t[a]||[]).map(({id:l})=>({id:l,type:a}))],s),[]);return this.activitiesService.getActivitiesDatesRange(r,o).pipe(O(s=>new Vs(s)),ne(s=>G(new zs(this.httpError.getErrorMessage(s)))))}))));c(this,\"activitiesRemoveAll$\",V(()=>this.actions$.pipe(N(Hr,ya,ot),O(()=>new Ns))));c(this,\"getActivity$\",V(()=>this.actions$.pipe(N(Ps),he(this.store.select(y.currentCompany.getCurrentCompany),this.store.select(y.bookform.getBookformSpecializationDisplayModeType),this.store.select(y.order.getMultipleActivityCount)),L(([t,r,o,s])=>{let a=t.getActivitiesProps.map(l=>typeof l==\"number\"?{activityId:l,count:0}:l);return fe(a.map(l=>this.activitiesService.getActivityById(r.id,l.activityId).pipe(O(p=>{let d=this.mapActivities(p.data,r.timezone,o,r.activity_online_record_clients_count_max);return this.store.dispatch(new xs(d)),l.count===0?null:D(C({},l),{count:Math.min(l.count,d.available_spots_count),activity:d})})))).pipe(O(l=>{let p=l.filter(Boolean);return p.length&&(p[0].activity.needPay?this.store.dispatch(new an(l.slice(0,1))):this.store.dispatch(new an(l.slice(0,s)))),new Ls}))}))));c(this,\"getActivityFilters$\",V(()=>this.actions$.pipe(N(Ds),he(this.store.select(y.activities.getSelectedFilters)),L(([t,r])=>this.activitiesService.getActivitiesFilters(t.companyId,r).pipe(O(o=>new Hs(o,t.filtersFromQuery)),Se(()=>{let o=Be.end(\"booking_activity_filters_open\");this.tracking.trackBenchmark(o)}),ne(o=>G(new Gs(this.httpError.getErrorMessage(o)))))))))}mapActivities(t,r,o,s){var d;let[a,l]=t.date.split(\" \"),p=Math.min(t.capacity,t.records_count);return D(C({},t),{date:wa(a+\"T\"+l,r),dateOnly:a,records_count:p,available_spots_count:Math.min(t.capacity-p,s||0),staff:D(C({},t.staff),{positionOrSpecialization:((d=ba.mapPositionOrSpecialization([t.staff],o)[0])==null?void 0:d.positionOrSpecialization)||\"\"}),needPay:this.paymentService.needPayActivities([t])})}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();var cm=(()=>{let e=class e{constructor(){c(this,\"actions$\",T(J));c(this,\"notificationService\",T(ei));c(this,\"translate\",T(Ss));c(this,\"deleteRecordSuccessfullyAction$\",V(()=>this.actions$.pipe(N(Wr),L(()=>(this.notificationService.notifyInfo(this.translate.instant(\"record.is_canceled\")),_r))),{dispatch:!1}))}};c(e,\"\\u0275fac\",function(r){return new(r||e)}),c(e,\"\\u0275prov\",b({token:e,factory:e.\\u0275fac}));let n=e;return n})();Be.start(\"booking_start_app\");function Of(n){let e=\"cities\",i=\"lastSelectedCityId\",t=\"currentCompany\",r=\"user\",o=[\"authPhone\",\"user\",\"userToken\",\"lastRecordData\",\"authBySmsErrorMessage\",\"authByPasswordErrorMessage\"],s=\"smsConfirm\",a=\"localization\",l=[\"currentLanguage\"],p=[\"reviews\"];return mp({keys:[{[r]:o},s,{[e]:[i]},{[t]:p},{[a]:l}],rehydrate:!0,storageKeySerializer:d=>\"\".concat(re.storagePrefix,\":\").concat(d),restoreDates:!1})(n)}function Pf(n){return(e,i)=>{let t=n(e,i);return Object.keys(t||{}).forEach(o=>{mn[o]&&!y[o]&&(y[o]=mn[o])}),t}}var lm=(()=>{let e=class e{constructor(t,r){c(this,\"appStore\");c(this,\"referrerService\");var u;this.appStore=t,this.referrerService=r;let o={},s=new URLSearchParams(location.search),a=s.has(\"superButton\"),l=\"yextrafield_\",p=\"aextrafield_\",d=\"extrafield_\";this.appStore.dispatch(new Ra(a)),s.forEach((E,v)=>{!v||!E||(v.startsWith(l)&&(o[v.replace(l,\"\")]=E),v.startsWith(p)&&(o[v.replace(p,\"\")]=E),v.startsWith(d)&&(o[v.replace(d,\"\")]=E),v.startsWith(\"gcid\")&&localStorage.setItem(\"gcid\",E.split(\"#\")[0]),v.startsWith(\"ym_uid\")&&localStorage.setItem(\"ym_uid\",E))}),Object.keys(o).length!==0&&(o.referrer=(u=this.referrerService.getCurrent())==null?void 0:u.hostname,localStorage.setItem(\"yReferrer\",JSON.stringify(o)))}};c(e,\"\\u0275fac\",function(r){return new(r||e)(_(K),_(lt))}),c(e,\"\\u0275mod\",Te({type:e,bootstrap:[Xp]})),c(e,\"\\u0275inj\",ve({providers:[Ld,Ft,Uc,Il,Dc,Wc,Ur,{provide:cn,useClass:sd,multi:!0},{provide:cn,useClass:nd,multi:!0},{provide:Xi,useClass:ad,multi:!0},{provide:Ir,useValue:as({logErrors:!0,showDialog:!1})},{provide:Ji,deps:[Q]},{provide:Wt,useFactory:()=>()=>{},deps:[Ji],multi:!0},{provide:Wt,useFactory:t=>()=>te(e,null,function*(){yield t.init()}),deps:[em],multi:!0},$c,{provide:al,useClass:cl},Zd,qo(Qo()),{provide:_c,useExisting:Bt},{provide:Oc,useExisting:xt},{provide:oi,useExisting:zc},{provide:Tc,useExisting:$t},{provide:si,useExisting:li},{provide:yc,useExisting:Lt},{provide:fs,useValue:Lc}],imports:[rt,ri,kt,Vc,ic.forRoot(()=>re),oc.forRoot(()=>re),ys.forRoot(od),Os.forRoot(Va,{metaReducers:[Of,Pf],runtimeChecks:{strictStateImmutability:!0,strictActionImmutability:!0,strictActionSerializability:!1}}),sc.forRoot([dc,bc,Ac,pc,fc,gc,vc,Cc,hc,Ic,rm,mc,uc,cm,Yp,Up,im,am,om,Bd,op,Gd]),Al,$r,ip,jp,jc,os.forRoot(id,{paramsInheritanceStrategy:\"always\",enableTracing:!1,preloadingStrategy:Bc}),la.forRoot(()=>re.sentry),Bp,Np.instrument({maxAge:25,logOnly:re.production,connectInZone:!0}),aa.forRoot(()=>{let t=new URLSearchParams(document.location.search).get(\"api_key\");return D(C({},re),{apiToken:t?\"Bearer \".concat(t):re.apiToken})},[{provide:na,useFactory:t=>t.select(y.user.getUserToken),deps:[K]},{provide:zi,useFactory:t=>t.select(y.securityRules.getRecaptchaV3Token),deps:[K]},{provide:Xi,useClass:Kd,multi:!0}]),Yr.forRoot({loader:{provide:Es,useClass:xd}}),ai.forRoot(()=>re),Tl.forRoot(()=>({yandex:{key:\"\"},google:{key:re.mapsKeys.google},twoGis:{key:re.mapsKeys.twoGis}})),Wa.forRoot(Kp),sl,jd,Cl,Vd.forRoot(()=>T(Dt),()=>!1,()=>hl.google,()=>T(ct)),tm]}));let n=e;return n})();var Mf=localStorage.getItem(es)===\"true\";re.production&&void 0;(re.debug||Mf)&&wl(re);var{sentry:ur}=re;ur.enabled&&ss({dsn:ur.dsn,integrations:[cs(),ts()],denyUrls:[/graph\\.facebook\\.com/i,/connect\\.facebook\\.net\\/en_US\\/all\\.js/i,/extensions\\//i,/^chrome:\\/\\//i,/injection-listener\\.js/i],release:ur.release,environment:ur.environment,tracesSampleRate:ur.tracesSampleRate,beforeSend(n){try{if(n.exception.values[0].stacktrace.frames[0].filename===\"<anonymous>\")return null}catch(e){}return n}});document!=null&&document.documentElement&&Pt().apple.device&&navigator.userAgent.includes(\"Instagram\")&&document.documentElement.classList.add(\"position-fixed-hack\");Sc(\"/signer_bg.wasm\");Be.start(\"booking_cold_start\");Zo().bootstrapModule(lm).catch(n=>console.error(n));\n/*! Bundled license information:\n\n@angular/animations/fesm2022/browser.mjs:\n  (**\n   * @license Angular v18.2.13\n   * (c) 2010-2024 Google LLC. https://angular.io/\n   * License: MIT\n   *)\n\n@angular/platform-browser/fesm2022/animations.mjs:\n  (**\n   * @license Angular v18.2.13\n   * (c) 2010-2024 Google LLC. https://angular.io/\n   * License: MIT\n   *)\n*/\n"
          },
          "redirectURL": "",
          "headersSize": 654,
          "bodySize": 58162,
          "_transferSize": 58816,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:20.559Z",
        "time": 1635.0070000626147,
        "timings": {
          "blocked": 36.9980000853315,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.240000000000002,
          "wait": 1411.2169999780729,
          "receive": 186.55199999921024,
          "_blocked_queueing": 0.4240000853314996,
          "_blocked_proxy": 36.058,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-CN5Y7BNK.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "1029"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0531cd5c20dd-HKG"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-2b53\""
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
              "value": "14a9e9e6788acaa73adc6dd83eecdb0c"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 11091,
            "mimeType": "application/javascript",
            "compression": 7705,
            "text": "import{U as ce,ia as se,ra as le,sa as me}from\"./chunk-W3M7SAIY.js\";import{a as I,c as T}from\"./chunk-KARNDABV.js\";import{Ec as oe,Gh as ae,_ as E,aa as ne,e as ee,f as te,fa as f,ga as re,jb as C,ya as ie}from\"./chunk-FAHXWQCK.js\";import{$b as M,Ab as $,Ba as a,Bb as U,Ca as g,Gc as V,Ha as J,Hc as z,Ob as K,Ra as X,Rb as x,Sa as H,_b as u,ac as Q,ec as W,ic as Z,jc as B,sc as G,tc as q,uc as Y,wa as c,za as l}from\"./chunk-CJMBEYVW.js\";import{g as i}from\"./chunk-JV5WWF5Q.js\";var m=function(o){return o.mailRu=\"mailRu\",o.google=\"google\",o}(m||{});var pe=new l(\"modal-service\");var de=new l(\"enable-modal\");var fe=new l(\"default-calendar\");var v=class{};var p=\"%0A\",b=(()=>{let t=class t extends v{constructor(e){super();i(this,\"translate\");this.translate=e}openCalendar(e){let r=this.generateUrl(e);window.open(r,\"google_calendar\")}generateUrl(e){let r=this.removeSpecialCharacters(e.services.map(F=>F.title).join(\", \")),s=this.removeSpecialCharacters(e.company.title),h=this.removeSpecialCharacters(e.staff.name),y=this.removeSpecialCharacters(\"\".concat(e.company.address)),k=this.removeSpecialCharacters(\"\".concat(e.company.country,\" \").concat(e.company.city,\" \").concat(y)),L=\"\".concat(r,\" - \").concat(s,\" \").concat(this.translate.instant(\"on\"),\" \").concat(y),w=this.generateDescription({title:s,location:k,servicesTitle:r,price:e.price,phones:e.company.phones,staffName:h,site:e.company.site||\"\"}),R=this.toGoogleDateString(C.fromISO(e.time.datetime).toJSDate()),P=this.toGoogleDateString(C.fromISO(e.time.datetime).addDurationInSeconds(e.time.seance_length).toJSDate());return this.composeLink({title:L,startDate:R,endDate:P,description:w,location:k})}removeSpecialCharacters(e){return e.split(\"&\").join(\"\").split(\"#\").join(\"\").split(\"%\").join(\"\")}composeLink(e){return\"https://www.google.com/calendar/event?action=TEMPLATE\"+\"&text=\".concat(e.title)+\"&dates=\".concat(e.startDate,\"/\").concat(e.endDate)+\"&details=\".concat(e.description)+\"&location=\".concat(e.location)}generateDescription(e){return\"\".concat(e.title).concat(p).concat(this.removeSpecialCharacters(e.location))+\"\".concat(p).concat(p)+\"\".concat(e.servicesTitle,\" \")+\"- \".concat(this.translate.instant(\"service.price\"),\": \").concat(e.price).concat(p)+\"\".concat(this.translate.instant(\"master.master\"),\": \").concat(e.staffName).concat(p)+\"\".concat(this.translate.instant(\"address.phones\"),\": \").concat(p).concat(e.phones.map(r=>\"  \"+r.toString().replace(\"+\",\"%2b\")).join(\"\".concat(p)))+\"\".concat(p).concat(p)+\"\".concat(this.translate.instant(\"address.site\"),\": \").concat(this.removeSpecialCharacters(e.site))}toGoogleDateString(e){return e.toISOString().replace(/[^T0-9]/gm,\"\").slice(0,-3)+\"Z\"}};i(t,\"\\u0275fac\",function(r){return new(r||t)(a(f))}),i(t,\"\\u0275prov\",c({token:t,factory:t.\\u0275fac}));let o=t;return o})();var d=\"%0A\",Se=[{interval:3600,type:\"push\"},{interval:86400,type:\"email\"}],A=(()=>{let t=class t extends v{constructor(e){super();i(this,\"translate\");this.translate=e}openCalendar(e){let r=this.generateUrl(e);window.open(r,\"mail_calendar\")}generateUrl(e){let r=this.removeSpecialCharacters(e.services.map(F=>F.title).join(\", \")),s=this.removeSpecialCharacters(e.company.title),h=this.removeSpecialCharacters(e.staff.name),y=this.removeSpecialCharacters(\"\".concat(e.company.address)),k=this.removeSpecialCharacters(\"\".concat(e.company.country,\" \").concat(e.company.city,\" \").concat(y)).replace(/\\s/g,\"+\"),L=C.fromISO(e.time.datetime).toSQL(),w=C.fromISO(e.time.datetime).addDurationInSeconds(e.time.seance_length).toSQL(),R=\"\".concat(r,\" - \").concat(s,\" \").concat(this.translate.instant(\"on\"),\" \").concat(y),P=this.generateDescription({title:s,location:k,servicesTitle:r,price:e.price,phones:e.company.phones,staffName:h,site:e.company.site||\"\"});return this.composeLink({title:R,location:k,description:P,startDate:L,endDate:w})}generateDescription(e){return(\"\".concat(e.title).concat(d).concat(this.removeSpecialCharacters(e.location))+\"\".concat(d).concat(d)+\"\".concat(e.servicesTitle,\" \")+\"- \".concat(this.translate.instant(\"service.price\"),\": \").concat(e.price).concat(d)+\"\".concat(this.translate.instant(\"master.master\"),\": \").concat(e.staffName).concat(d)+\"\".concat(this.translate.instant(\"address.phones\"),\": \").concat(d).concat(e.phones.map(r=>\"  \"+r.toString().replace(\"+\",\"%2b\")).join(\"\".concat(d)))+\"\".concat(d).concat(d)+\"\".concat(this.translate.instant(\"address.site\"),\": \").concat(this.removeSpecialCharacters(e.site))).replace(/\\s/g,\"+\")}removeSpecialCharacters(e){return e.split(\"&\").join(\"\").split(\"#\").join(\"\").split(\"%\").join(\"\")}composeLink(e){let r=e.startDate.slice(0,4),s=parseInt(e.startDate.slice(5,7)),h=parseInt(e.startDate.slice(8,10));return\"https://x.calendar.mail.ru/month/\".concat(r,\"/\").concat(s,\"/\").concat(h,\"/?title=\").concat(e.title,\"&from=\").concat(e.startDate,\"&to=\").concat(e.endDate,\"&description=\").concat(e.description,\"&location=\").concat(e.location,\"&reminders=\").concat(JSON.stringify(Se),\"&fullDay=false&action=createEvent&createContent=\").concat(oe)}};i(t,\"\\u0275fac\",function(r){return new(r||t)(a(f))}),i(t,\"\\u0275prov\",c({token:t,factory:t.\\u0275fac}));let o=t;return o})();var D=new l(\"ExternalMessageSender must be provided\");var he=(()=>{let t=class t extends b{constructor(e,r){super(e);i(this,\"translateService\");i(this,\"externalMessageService\");this.translateService=e,this.externalMessageService=r}openCalendar(e){let r=this.generateUrl(e);this.externalMessageService.post(new I(T.open_external_link,{link:r}))}};i(t,\"\\u0275fac\",function(r){return new(r||t)(a(f),a(D))}),i(t,\"\\u0275prov\",c({token:t,factory:t.\\u0275fac}));let o=t;return o})();var ge=(()=>{let t=class t extends A{constructor(e,r){super(e);i(this,\"translateService\");i(this,\"externalMessageService\");this.translateService=e,this.externalMessageService=r}openCalendar(e){let r=this.generateUrl(e);this.externalMessageService.post(new I(T.open_external_link,{link:r}))}};i(t,\"\\u0275fac\",function(r){return new(r||t)(a(f),a(D))}),i(t,\"\\u0275prov\",c({token:t,factory:t.\\u0275fac}));let o=t;return o})();var O=new l(\"CalendarService\",{factory:()=>{let t=g(ie).selectSnapshot(ae.widgetSettings.getWidgetUseExternalLinkHook);return{[m.google]:t?g(he):g(b),[m.mailRu]:t?g(ge):g(A)}}});var ue=[{title:\"record.mail_calendar_title\",type:m.mailRu,icon:\"calendar-mail-ru\"},{title:\"record.google_calendar\",type:m.google,icon:\"calendar-google\"}];var _e={[m.mailRu]:{elementName:\"button_create_notification_mail_ru\",name:\"crate_notification_mail_ru\"},[m.google]:{elementName:\"button_create_notification_google\",name:\"crate_notification_google\"}},N=(()=>{let t=class t{constructor(n){i(this,\"track\");this.track=n}setPage(n){this.track.setPage(n)}trackClickCalendar(n,e){this.track.track({type:E.Action.click,element_name:\"button_create_notification\",element_type:\"button\",element_id:e,page:{name:n},name:\"create_notification\"})}trackModalOpened(n){this.track.track({type:E.Action.view,element_name:\"popup_create_notification\",element_type:\"popup\",element_id:n,name:\"create_notification_calendar_select\"})}trackModalCrossClicked(n){this.track.track({type:E.Action.click,element_name:\"popup_create_notification_close\",element_type:\"button\",element_id:n,name:\"create_notification_popup_close\"})}trackAddToCalendar(n,e){let{elementName:r,name:s}=_e[n];this.track.track({type:E.Action.click,element_name:r,element_type:\"button\",element_id:e,name:s})}};i(t,\"\\u0275fac\",function(e){return new(e||t)(a(ne))}),i(t,\"\\u0275prov\",c({token:t,factory:t.\\u0275fac}));let o=t;return o})();function ye(o,t){if(o&1){let _=W();u(0,\"ui-kit-button\",3),Z(\"click\",function(){let e=X(_).$implicit,r=B();return H(r.handleCalendarClick(e))}),u(1,\"div\",4),Q(2,\"ui-kit-svg-icon\",5),u(3,\"span\",6),G(4),V(5,\"translate\"),M()()()}if(o&2){let _=t.$implicit,n=B();x(\"type\",n.buttonType.tertiary)(\"ngClass\",_.type),$(2),x(\"name\",_.icon),$(2),q(z(5,4,_.title))}}var ve=(()=>{let t=class t{constructor(n,e){i(this,\"calendarService\");i(this,\"trackingService\");i(this,\"data\");i(this,\"calendars\",ue);i(this,\"buttonType\",le);this.calendarService=n,this.trackingService=e}handleCalendarClick(n){this.trackingService.trackAddToCalendar(n.type,this.data.recordId),this.calendarService[n.type].openCalendar(this.data)}};i(t,\"\\u0275fac\",function(e){return new(e||t)(U(O),U(N))}),i(t,\"\\u0275cmp\",J({type:t,selectors:[[\"ng-component\"]],inputs:{data:\"data\"},decls:5,vars:4,consts:[[1,\"header\"],[1,\"calendar-types\"],[3,\"type\",\"ngClass\",\"click\",4,\"ngFor\",\"ngForOf\"],[3,\"click\",\"type\",\"ngClass\"],[1,\"calendar-block\"],[1,\"icon\",3,\"name\"],[1,\"title\"]],template:function(e,r){e&1&&(u(0,\"div\",0),G(1),V(2,\"translate\"),M(),u(3,\"div\",1),K(4,ye,6,6,\"ui-kit-button\",2),M()),e&2&&($(),Y(\" \",z(2,2,\"record.add_to_calendar\"),\"\\n\"),$(3),x(\"ngForOf\",r.calendars))},dependencies:[ee,te,ce,me,re],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;padding:0 16px 16px}[_nghost-%COMP%]   .calendar-block[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:10px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;display:flex;flex-direction:column;align-items:center;padding-bottom:16px}[_nghost-%COMP%]   .calendar-types[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}[_nghost-%COMP%]   .calendar-types[_ngcontent-%COMP%]   ui-kit-button.mailRu[_ngcontent-%COMP%]     button{background-color:#07f!important;color:#fff!important}[_nghost-%COMP%]   .calendar-types[_ngcontent-%COMP%]   ui-kit-button.mailRu[_ngcontent-%COMP%]     button:not([disabled]):active{background-color:#07fc!important}@media (hover),(min-width: 0 \\\\fffd),(min--moz-device-pixel-ratio: 0){[_nghost-%COMP%]   .calendar-types[_ngcontent-%COMP%]   ui-kit-button.mailRu[_ngcontent-%COMP%]     button:not([disabled]):hover{background-color:#07fc!important}}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px}']}));let o=t;return o})();var Mt=(()=>{let t=class t{constructor(n,e,r,s,h){i(this,\"modalService\");i(this,\"enableModal\");i(this,\"defaultCalendar\");i(this,\"calendarService\");i(this,\"trackingService\");this.modalService=n,this.enableModal=e,this.defaultCalendar=r,this.calendarService=s,this.trackingService=h}addToCalendar(n){this.trackingService.setPage(n.pageName),this.enableModal?(this.trackingService.trackClickCalendar(n.pageName,n.recordId),this.trackingService.trackModalOpened(n.recordId),this.modalService.openModal({component:ve,componentData:{data:n},params:{modalType:se.default,onCloseClick:()=>this.handleModalCrossClick(n.recordId)}})):(this.trackingService.trackAddToCalendar(this.defaultCalendar,n.recordId),this.calendarService[this.defaultCalendar].openCalendar(n))}generateUrl(n){return this.calendarService[this.defaultCalendar].generateUrl(n)}handleModalCrossClick(n){this.trackingService.trackModalCrossClicked(n)}};i(t,\"\\u0275fac\",function(e){return new(e||t)(a(pe),a(de),a(fe),a(O),a(N))}),i(t,\"\\u0275prov\",c({token:t,factory:t.\\u0275fac}));let o=t;return o})();export{pe as a,de as b,fe as c,m as d,b as e,A as f,D as g,he as h,ge as i,N as j,Mt as k};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3386,
          "_transferSize": 4046,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.200Z",
        "time": 228.506000014022,
        "timings": {
          "blocked": 4.471000067904591,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2469999999999999,
          "wait": 222.90099994415044,
          "receive": 0.8870000019669533,
          "_blocked_queueing": 0.43700006790459156,
          "_blocked_proxy": 3.398,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-FYPXWSE5.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530d9dcbcab-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-47e\""
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
              "value": "ae530147bbda1130aad2cdb6c81d4829"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 1150,
            "mimeType": "application/javascript",
            "compression": 526,
            "text": "import{b as p}from\"./chunk-FAHXWQCK.js\";import{Ba as n,F as c,Fb as h,ea as a,wa as s}from\"./chunk-CJMBEYVW.js\";var f=(()=>{class o{constructor(e,r){this._doc=e,this.rendererFactory=r,this.darkScheme=\"(prefers-color-scheme:dark)\",this.prefersColorScheme$=c(i=>window.matchMedia(this.darkScheme).addListener(i)).pipe(a(\"matches\")),this.renderer=r.createRenderer(null,null)}getFavicon(){return this._doc.querySelector(\"link[rel*='icon']\")}setFavicon(e,r){let i=this.getFavicon()||this.renderer.createElement(\"link\"),t=e;r&&(this.subscribeToChangesInTheme(i,e,r),window.matchMedia(this.darkScheme).matches&&(t=r)),this.appendLinkTag(i,t)}subscribeToChangesInTheme(e,r,i){this.subscriptionToColorScheme=this.prefersColorScheme$.subscribe(t=>{t?this.appendLinkTag(e,i):this.appendLinkTag(e,r)})}appendLinkTag(e,r){e.type=\"image/x-icon\",e.rel=\"shortcut icon\",e.href=r;let i=this._doc.getElementsByTagName(\"head\")[0];this.renderer.appendChild(i,e)}ngOnDestroy(){this.subscriptionToColorScheme&&this.subscriptionToColorScheme.unsubscribe()}}return o.\\u0275prov=s({factory:function(){return new o(n(p),n(h))},token:o,providedIn:\"root\"}),o})();export{f as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 624,
          "_transferSize": 1283,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.200Z",
        "time": 21.361000020988286,
        "timings": {
          "blocked": 6.174000054091215,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2239999999999993,
          "wait": 14.17500002027303,
          "receive": 0.7879999466240406,
          "_blocked_queueing": 0.9550000540912151,
          "_blocked_proxy": 4.815,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-TQ2FTZGT.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530dbdabca6-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-a7\""
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
              "value": "b65b99f8b1f53f808daf783a67245b1e"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 167,
            "mimeType": "application/javascript",
            "compression": 47,
            "text": "function e(t){let{id:o,companyId:n}=t;return parseInt(o,10)||parseInt(n,10)}function r(t){return e(t.params)}function a(t){return r(t.snapshot)}export{r as a,a as b};\n"
          },
          "redirectURL": "",
          "headersSize": 656,
          "bodySize": 120,
          "_transferSize": 776,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.200Z",
        "time": 24.470999953337014,
        "timings": {
          "blocked": 8.132999997101724,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.25,
          "wait": 14.829000032059849,
          "receive": 1.2589999241754413,
          "_blocked_queueing": 1.2379999971017241,
          "_blocked_proxy": 6.548,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "364539",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-VEISTA3H.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530dc6bbca0-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-124\""
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
              "value": "80f25570c0fb348b5c78ac8419717f92"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 292,
            "mimeType": "application/javascript",
            "compression": 125,
            "text": "import{ka as t,la as e}from\"./chunk-FAHXWQCK.js\";var n=t(\"[Reports] Send Stuff Comment Report\",e()),p=t(\"[Reports] Send Stuff Comment Report Was Sent\"),m=t(\"[Reports] Send Company Comment Report\",e()),r=t(\"[Reports] Send Company Comment Report Was Sent\");export{n as a,p as b,m as c,r as d};\n"
          },
          "redirectURL": "",
          "headersSize": 657,
          "bodySize": 167,
          "_transferSize": 824,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.200Z",
        "time": 29.821999953128397,
        "timings": {
          "blocked": 10.172999990351498,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3819999999999997,
          "wait": 17.84899999205023,
          "receive": 1.4179999707266688,
          "_blocked_queueing": 1.3899999903514981,
          "_blocked_proxy": 8.34,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-7NHJOO6V.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530db2ebca3-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-3db\""
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
              "value": "7bf8a5fddf3898cb602c8a0fbc566c1e"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 987,
            "mimeType": "application/javascript",
            "compression": 432,
            "text": "import{b as s}from\"./chunk-FAHXWQCK.js\";import{Ba as m,wa as i}from\"./chunk-CJMBEYVW.js\";import{g as r}from\"./chunk-JV5WWF5Q.js\";var a=function(t){return t.masterInfo=\"master-info\",t.default=\"default\",t}(a||{});var g=(()=>{let e=class e{constructor(o){r(this,\"document\");r(this,\"safariTabBackgrounds\");this.document=o,this.safariTabBackgrounds={[a.masterInfo]:getComputedStyle(o.documentElement).getPropertyValue(\"--widget-ui-kit-color-color_bg\"),[a.default]:getComputedStyle(o.documentElement).getPropertyValue(\"--widget-ui-kit-color-color_white\")}}setSafariTabColor(o=a.default){let n=this.document.querySelector('meta[name=\"theme-color\"]');n&&n.remove();let l=this.safariTabBackgrounds[o],c=this.document.createElement(\"meta\");c.name=\"theme-color\",c.content=l,this.document.getElementsByTagName(\"head\")[0].appendChild(c)}};r(e,\"\\u0275fac\",function(n){return new(n||e)(m(s))}),r(e,\"\\u0275prov\",i({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let t=e;return t})();export{a,g as b};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 555,
          "_transferSize": 1214,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.200Z",
        "time": 30.03799996804446,
        "timings": {
          "blocked": 14.869000011704863,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3810000000000002,
          "wait": 13.701999952487647,
          "receive": 1.0860000038519502,
          "_blocked_queueing": 1.6680000117048621,
          "_blocked_proxy": 12.741999999999999,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-KDFPNVE3.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530ee4bbca5-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-1b5\""
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
              "value": "fecae34e37bf0399b4ecacf2979e791d"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 437,
            "mimeType": "application/javascript",
            "compression": 131,
            "text": "import{G as a}from\"./chunk-FAHXWQCK.js\";import{Bb as s,Ka as n}from\"./chunk-CJMBEYVW.js\";import{g as r}from\"./chunk-JV5WWF5Q.js\";var m=(()=>{let t=class t{constructor(i){r(this,\"sanitized\");this.sanitized=i}transform(i){return this.sanitized.bypassSecurityTrustHtml(i)}};r(t,\"\\u0275fac\",function(o){return new(o||t)(s(a,16))}),r(t,\"\\u0275pipe\",n({name:\"uiKitSafeHtml\",type:t,pure:!0,standalone:!0}));let e=t;return e})();export{m as a};\n"
          },
          "redirectURL": "",
          "headersSize": 657,
          "bodySize": 306,
          "_transferSize": 963,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.200Z",
        "time": 33.921999973244965,
        "timings": {
          "blocked": 17.378000009037557,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.5689999999999991,
          "wait": 15.024000056989491,
          "receive": 0.9509999072179198,
          "_blocked_queueing": 2.0040000090375543,
          "_blocked_proxy": 14.779,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-AXLI6LVU.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530e9e9bcab-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-3dc\""
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
              "value": "4214cd2825dd1fe130f240461d468e51"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 988,
            "mimeType": "application/javascript",
            "compression": 403,
            "text": "import{k as y,l as E,m as S}from\"./chunk-6RRCVQGA.js\";import{t as d}from\"./chunk-KARNDABV.js\";import{Gh as M,P as h,dd as R,ua as P}from\"./chunk-FAHXWQCK.js\";import{Ba as n,_ as c,wa as A,x as l,y as g}from\"./chunk-CJMBEYVW.js\";import{a as p,b as f,g as t}from\"./chunk-JV5WWF5Q.js\";var N=(()=>{let r=class r{constructor(i,e,o){t(this,\"state\");t(this,\"router\");t(this,\"orderManager\");this.state=i,this.router=e,this.orderManager=o}canActivate(i,e){let o=(a,s)=>{let u=this.router.parseUrl(a);return u.queryParams[R]=s.toString(),u.toString()};return g([this.state.select(M.user.getUserToken).pipe(c()),this.orderManager.getOrder$().pipe(c())]).pipe(l(([a,s])=>typeof a==\"string\"&&a.length>0?!0:(this.router.navigate([d()],{queryParams:f(p({},i.queryParams),{[E]:o(e.url,s),[y]:o(this.router.url,s)}),queryParamsHandling:\"merge\"}),!1)))}};t(r,\"\\u0275fac\",function(e){return new(e||r)(n(P),n(h),n(S))}),t(r,\"\\u0275prov\",A({token:r,factory:r.\\u0275fac}));let m=r;return m})();export{N as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 585,
          "_transferSize": 1244,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.200Z",
        "time": 44.895000057294965,
        "timings": {
          "blocked": 23.420999979287387,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.3089999999999975,
          "wait": 19.20500005476177,
          "receive": 1.9600000232458115,
          "_blocked_queueing": 2.259999979287386,
          "_blocked_proxy": 16.086000000000002,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-RSL6BVSE.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530ebecbca6-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-6ae\""
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
              "value": "bb18a83784b1934d094c7a9cdafcf1cc"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 1710,
            "mimeType": "application/javascript",
            "compression": 967,
            "text": "import{ea as g}from\"./chunk-W3M7SAIY.js\";import{ka as l}from\"./chunk-FAHXWQCK.js\";import{Ba as I,E as a,J as u,Q as p,ha as d,i as s,wa as m,x as i,za as h}from\"./chunk-CJMBEYVW.js\";import{g as o}from\"./chunk-JV5WWF5Q.js\";var y=new h(\"window-scroll\"),E=(()=>{let r=class r{constructor(e){o(this,\"capacitor\");o(this,\"scrollIgnoreCounter$\",new s(0));o(this,\"_windowScroller$\",a(document.body,\"scroll\").pipe(p(50),u(e=>this.scrollIgnoreCounter$.value>0?(this.decreaseScrollIgnoreCounter(),!1):!0),i(e=>this.capacitor.isNativePlatformIos()?document.body.scrollTop:window.scrollY),d()));this.capacitor=e}get windowScroller$(){return this._windowScroller$}get isScrollBlocked(){return this.scrollIgnoreCounter$.value>0}scrollYTo(e,c=!0){let S=this.capacitor.isNativePlatformIos()?document.body.scroll:window.scroll,n=e;c&&(n+=this.capacitor.isNativePlatformIos()?document.body.scrollTop:window.scrollY),this.increaseScrollIgnoreCounter(),S({top:n})}ignoreNextScroll(){this.increaseScrollIgnoreCounter()}increaseScrollIgnoreCounter(){let e=this.scrollIgnoreCounter$.value;this.scrollIgnoreCounter$.next(e+1),setTimeout(()=>{this.decreaseScrollIgnoreCounter()},500)}decreaseScrollIgnoreCounter(){let e=this.scrollIgnoreCounter$.value;e>0&&this.scrollIgnoreCounter$.next(e-1)}};o(r,\"\\u0275fac\",function(c){return new(c||r)(I(g))}),o(r,\"\\u0275prov\",m({token:r,factory:r.\\u0275fac}));let t=r;return t})();var w=\"[Tracking] toggle service event\",f=class{constructor(r,C){o(this,\"serviceId\");o(this,\"isSelectAction\");o(this,\"type\",w);this.serviceId=r,this.isSelectAction=C}},k=l(\"[tracking] start reach time selected goal\"),N=l(\"[tracking] stop reach time selected goal\");export{w as a,f as b,k as c,N as d,y as e,E as f};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 743,
          "_transferSize": 1402,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.201Z",
        "time": 43.965999968349934,
        "timings": {
          "blocked": 24.476000006608665,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.21499999999999986,
          "wait": 17.387000021077693,
          "receive": 1.8879999406635761,
          "_blocked_queueing": 2.921000006608665,
          "_blocked_proxy": 16.352,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "364539",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-EUQV2ENM.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530fc7bbca0-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-372\""
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
              "value": "f77eb507910a5cd1737a28578c45739c"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 882,
            "mimeType": "application/javascript",
            "compression": 407,
            "text": "import{b as l}from\"./chunk-FAHXWQCK.js\";import{Ba as n,wa as i}from\"./chunk-CJMBEYVW.js\";import{g as c}from\"./chunk-JV5WWF5Q.js\";var m=(()=>{let t=class t{constructor(o){c(this,\"document\");c(this,\"className\",\"disable-scroll\");this.document=o}lock(o){if(!o&&this.document.body.scrollHeight<=this.document.body.offsetHeight)return;let s=this.document.body.classList;if(!s.contains(this.className)){let a=window.scrollY;s.add(this.className),document.body.style.top=\"-\".concat(a,\"px\")}}unlock(){if(!this.document.body.classList.contains(this.className))return;let o=document.body.style.top;this.document.body.classList.remove(this.className),this.document.body.style.top=\"\";let s=parseInt(o||\"0\",10)*-1;window.scrollTo(0,s)}};c(t,\"\\u0275fac\",function(s){return new(s||t)(n(l))}),c(t,\"\\u0275prov\",i({token:t,factory:t.\\u0275fac,providedIn:\"root\"}));let e=t;return e})();export{m as a};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 475,
          "_transferSize": 1134,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.201Z",
        "time": 47.37399995792657,
        "timings": {
          "blocked": 30.088999975681304,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.24099999999999966,
          "wait": 16.397999952726067,
          "receive": 0.6460000295192003,
          "_blocked_queueing": 3.237999975681305,
          "_blocked_proxy": 18.591,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-TDZAPBSL.js",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530fb3bbca3-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
              "value": "W/\"68d3e13d-c230\""
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
              "value": "c9e69c851a682d5c0f3e6bf6f7088d13"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 49712,
            "mimeType": "application/javascript",
            "compression": 36705,
            "text": "import{a as fe,d as ge,f as he,k as Se}from\"./chunk-5IQFNC4I.js\";import{b as J}from\"./chunk-A6DALH5L.js\";import{b as z,g as ve}from\"./chunk-G22OQKPL.js\";import{a as ke,b as Me,d as Pe}from\"./chunk-K35VHT3J.js\";import{b as pe,g as ue}from\"./chunk-5UJK3EW7.js\";import{b as me}from\"./chunk-HYJO63QR.js\";import{a as de}from\"./chunk-ODPFCO44.js\";import{g as ut,i as _e,l as xe,m as Tt,n as It,o as Ce,p as ft,t as be,u as we}from\"./chunk-UIU24VNB.js\";import{E as ne,F as X,R as mt,S as oe,U as D,ga as dt,ia as re,ja as ae,na as se,ra as ce,s as ie,sa as le,y as Q}from\"./chunk-W3M7SAIY.js\";import{n as ye}from\"./chunk-KARNDABV.js\";import{Df as Ot,N as Xt,P as Jt,Q as Zt,_ as yt,aa as te,e as Qt,f as lt,fa as I,g as b,ga as L,ia as bt,q as pt,r as G,tf as kt,wf as Mt,xf as Pt,yf as St,zc as wt,zf as ee}from\"./chunk-FAHXWQCK.js\";import{$b as m,Ab as s,Ac as Gt,Bb as u,Bc as ct,E as ot,Gb as st,Gc as O,H as Ft,Ha as d,Hc as U,Ia as H,J as rt,Ja as V,Jc as tt,Ka as T,Ob as h,Q as zt,Qa as at,Qb as f,Ra as $,Rb as c,S as Bt,Sa as W,Sb as Vt,Tb as R,Vb as $t,Wb as E,Ya as Kt,Yb as Wt,Zb as qt,_a as w,_b as l,ac as p,bb as B,bc as xt,c as Et,cb as q,cc as Ct,ec as Y,fd as M,ic as k,j as At,jc as g,kc as A,lc as F,mc as Yt,na as Ut,pa as Lt,qa as jt,sc as C,tb as _t,tc as P,ub as Ht,uc as S,va as Nt,xa as K}from\"./chunk-CJMBEYVW.js\";import{g as n,i as Rt}from\"./chunk-JV5WWF5Q.js\";var Oe=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"ui-kit-card-skeleton\"]],decls:2,vars:0,consts:[[1,\"avatar-skeleton\"],[1,\"bar-skeleton\"]],template:function(o,r){o&1&&p(0,\"div\",0)(1,\"div\",1)},styles:[\"@keyframes _ngcontent-%COMP%_shine{to{background-position-x:-20%}}[_nghost-%COMP%]{display:flex;align-items:center;gap:12px}[_nghost-%COMP%]   .avatar-skeleton[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}[_nghost-%COMP%]   .bar-skeleton[_ngcontent-%COMP%]{width:173px;height:12px;border-radius:8px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}\"],changeDetection:0}));let e=t;return e})();var Yi=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"ui-kit-service-card-skeleton\"]],decls:3,vars:0,consts:[[1,\"image\"],[1,\"text\"]],template:function(o,r){o&1&&p(0,\"div\",0)(1,\"div\",1)(2,\"div\",1)},styles:[\"@keyframes _ngcontent-%COMP%_shine{to{background-position-x:-20%}}[_nghost-%COMP%]{display:flex;align-items:center;gap:12px;flex-direction:column}[_nghost-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:230px;border-radius:16px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}[_nghost-%COMP%]   .text[_ngcontent-%COMP%]{width:100%;height:12px;border-radius:8px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}\"]}));let e=t;return e})();var Xi=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"ui-kit-service-group-skeleton\"]],decls:2,vars:0,consts:[[1,\"text\"],[1,\"checkbox\"]],template:function(o,r){o&1&&p(0,\"div\",0)(1,\"div\",1)},styles:[\"@keyframes _ngcontent-%COMP%_shine{to{background-position-x:-20%}}[_nghost-%COMP%]{display:flex;align-items:center;gap:12px}[_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:8px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}[_nghost-%COMP%]   .text[_ngcontent-%COMP%]{width:100%;height:24px;border-radius:8px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}\"]}));let e=t;return e})();var tn=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"ui-kit-promo-skeleton\"]],decls:1,vars:0,consts:[[1,\"promo-container\"]],template:function(o,r){o&1&&p(0,\"div\",0)},styles:[\"@keyframes _ngcontent-%COMP%_shine{to{background-position-x:-20%}}[_nghost-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .promo-container[_ngcontent-%COMP%]{width:100%;height:64px;border-radius:84px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}\"]}));let e=t;return e})();var on=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"ui-kit-master-skeleton\"]],decls:6,vars:0,consts:[[1,\"avatar-skeleton\"],[1,\"right-part\"],[1,\"bar-skeleton\"],[1,\"info-icon\"],[1,\"radio-button\"]],template:function(o,r){o&1&&(p(0,\"div\",0),l(1,\"div\",1),p(2,\"div\",2)(3,\"div\",2),m(),p(4,\"div\",3)(5,\"div\",4))},styles:[\"@keyframes _ngcontent-%COMP%_shine{to{background-position-x:-20%}}[_nghost-%COMP%]{display:flex;gap:12px}[_nghost-%COMP%]   .avatar-skeleton[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}[_nghost-%COMP%]   .bar-skeleton[_ngcontent-%COMP%]{width:173px;height:12px;border-radius:8px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}[_nghost-%COMP%]   .right-part[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;justify-content:center}[_nghost-%COMP%]   .info-icon[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;align-self:center;margin-left:auto;margin-right:4px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}[_nghost-%COMP%]   .radio-button[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;align-self:center;margin-left:0;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}\"]}));let e=t;return e})();function Le(e,t){e&1&&p(0,\"div\",3)}function je(e,t){e&1&&p(0,\"div\",6)}var sn=(()=>{let t=class t{constructor(){n(this,\"timeSlotsCount\",9);n(this,\"selectDateTimePageConst\",9)}get times(){return new Array(this.timeSlotsCount).fill(0)}};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"ui-kit-datetime-block-skeleton\"]],inputs:{timeSlotsCount:\"timeSlotsCount\"},decls:6,vars:3,consts:[[3,\"ngClass\"],[1,\"top-line\"],[1,\"bar\"],[1,\"checkbox\"],[1,\"times-container\"],[\"class\",\"time\",4,\"ngFor\",\"ngForOf\"],[1,\"time\"]],template:function(o,r){o&1&&(l(0,\"div\",0)(1,\"div\",1),p(2,\"div\",2),h(3,Le,1,0,\"div\",3),m(),l(4,\"div\",4),h(5,je,1,0,\"div\",5),m()()),o&2&&(c(\"ngClass\",r.timeSlotsCount===r.selectDateTimePageConst?\"container\":\"custom-container\"),s(3),E(r.timeSlotsCount===r.selectDateTimePageConst?3:-1),s(2),c(\"ngForOf\",r.times))},dependencies:[Qt,lt],styles:[\"@keyframes _ngcontent-%COMP%_shine{to{background-position-x:-20%}}.container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-direction:column;padding:8px 16px}.container[_ngcontent-%COMP%]   .top-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;width:100%}.container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{width:100%;height:24px;border-radius:8px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}.container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:8px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}.container[_ngcontent-%COMP%]   .times-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:8px;grid-row-gap:8px;width:100%}.container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{height:40px;border-radius:100px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}.custom-container[_ngcontent-%COMP%]{display:grid;align-items:center;gap:12px}.custom-container[_ngcontent-%COMP%]   .top-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;width:100%}.custom-container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{width:280px;height:12px;border-radius:8px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}.custom-container[_ngcontent-%COMP%]   .times-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:8px;grid-row-gap:8px;justify-self:start}.custom-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{height:40px;border-radius:100px;width:72px;background-image:linear-gradient(90deg,#ccc0,#e8e8e899,#c4c4c400);background-position-x:180%;background-size:200%;animation:_ngcontent-%COMP%_shine 1.6s infinite linear}\"]}));let e=t;return e})();var Te=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275mod\",H({type:t})),n(t,\"\\u0275inj\",K({imports:[G]}));let e=t;return e})();var Ne=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-horizontal-line\"]],decls:0,vars:0,template:function(o,r){},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{width:100%;position:relative;display:block}[_nghost-%COMP%]:after{content:\"\";display:block;height:1px;width:100%;position:absolute;bottom:0;background-color:var(--widget-ui-kit-color-color_grey_03);z-index:1}']}));let e=t;return e})();function Ke(e,t){if(e&1&&(l(0,\"div\")(1,\"span\",6),C(2),m()()),e&2){let a=g();R(\"background\",a.iconWithBackground),s(),R(\"background\",a.iconWithBackground),f(\"data-locator\",\"count\"),s(),P(a.counter)}}function He(e,t){e&1&&p(0,\"ui-kit-svg-icon\",7),e&2&&(c(\"name\",\"profile/select-blue\")(\"setSvgSize\",!1),f(\"data-locator\",\"arrow_icon\"))}var Ve=(()=>{let t=class t{constructor(){n(this,\"title\");n(this,\"iconName\");n(this,\"canSelect\",!0);n(this,\"count\");n(this,\"iconWithBackground\",!1);n(this,\"counter\")}ngOnInit(){this.getCounter()}ngOnChanges(){this.getCounter()}getCounter(){this.counter=this.iconWithBackground?this.count>99?99:this.count:this.count}};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-menu-element\"]],hostVars:1,hostBindings:function(o,r){o&2&&f(\"data-locator-menu-count\",r.count)},inputs:{title:\"title\",iconName:\"iconName\",canSelect:\"canSelect\",count:\"count\",iconWithBackground:\"iconWithBackground\"},features:[at],decls:7,vars:8,consts:[[1,\"wrapper\"],[1,\"icon\",3,\"name\",\"setSvgSize\"],[1,\"base-text\"],[1,\"inform\"],[3,\"background\",4,\"ngIf\"],[\"class\",\"arrow-icon\",3,\"name\",\"setSvgSize\",4,\"ngIf\"],[1,\"count\"],[1,\"arrow-icon\",3,\"name\",\"setSvgSize\"]],template:function(o,r){o&1&&(l(0,\"div\",0),p(1,\"ui-kit-svg-icon\",1),l(2,\"p\",2),C(3),m()(),l(4,\"div\",3),h(5,Ke,3,6,\"div\",4)(6,He,1,3,\"ui-kit-svg-icon\",5),m()),o&2&&(s(),c(\"name\",r.iconName)(\"setSvgSize\",!1),f(\"data-locator-icon_name\",r.iconName)(\"data-locator\",\"left_icon\"),s(),f(\"data-locator\",\"text\"),s(),P(r.title),s(2),c(\"ngIf\",r.counter),s(),c(\"ngIf\",r.canSelect))},dependencies:[b,D],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;cursor:pointer;font-family:Inter;font-style:normal;font-weight:400;font-size:15px;line-height:20px;color:var(--widget-ui-kit-color-color_text_black)}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.icon[_ngcontent-%COMP%]{margin-right:15px;color:var(--widget-ui-kit-color-color_grey_11)}.arrow-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_light)}.inform[_ngcontent-%COMP%]{display:flex;align-items:center}.inform[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-secondary-text)}.inform[_ngcontent-%COMP%]   .count.background[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-btn-primary-text)}.background[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-color:var(--widget-ui-kit-color-btn-primary-default-bg);border:1px solid var(--widget-ui-kit-color-btn-primary-default-border);border-radius:50%;min-width:24px;min-height:24px;text-align:center;vertical-align:middle}']}));let e=t;return e})();var $e=[\"*\"],We=(()=>{let t=class t{constructor(){n(this,\"iconSrc\",\"/assets/icon/not-allow.svg\")}};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-not-allowed\"]],inputs:{iconSrc:\"iconSrc\"},ngContentSelectors:$e,decls:3,vars:1,consts:[[\"alt\",\"not allow\",3,\"src\"],[1,\"base-text\"]],template:function(o,r){o&1&&(A(),p(0,\"img\",0),l(1,\"p\",1),F(2),m()),o&2&&Yt(\"src\",r.iconSrc,Ht)},styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}img[_ngcontent-%COMP%]{margin-bottom:8px}p[_ngcontent-%COMP%]{padding:0 20px;text-align:center}'],changeDetection:0}));let e=t;return e})();function qe(e,t){if(e&1&&(l(0,\"div\",3),C(1),m()),e&2){let a=g();f(\"data-locator\",\"email\"),s(),P(a.getEmail())}}function Ye(e,t){if(e&1&&(l(0,\"div\",3),C(1),m()),e&2){let a=g();f(\"data-locator\",\"phone\"),s(),P(a.getPhone())}}var Ge=(()=>{let t=class t{constructor(i){n(this,\"translatePipe\");n(this,\"avatar\");n(this,\"name\");n(this,\"phone\");n(this,\"email\");this.translatePipe=i}getName(){return this.name?this.name:this.translatePipe.transform(\"profile.name.not_specified\")}getPhone(){return this.phone?\"+\".concat(this.phone):\"\"}getEmail(){return this.email||\"\"}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(L))}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-personal-info\"]],inputs:{avatar:\"avatar\",name:\"name\",phone:\"phone\",email:\"email\"},decls:5,vars:7,consts:[[\"size\",\"104px\",\"initialsFontSize\",\"32px\",3,\"text\",\"url\",\"round\"],[1,\"title\"],[\"class\",\"label\",4,\"ngIf\"],[1,\"label\"]],template:function(o,r){o&1&&(p(0,\"ui-kit-avatar\",0),l(1,\"div\",1),C(2),m(),h(3,qe,2,2,\"div\",2)(4,Ye,2,2,\"div\",2)),o&2&&(c(\"text\",r.name)(\"url\",r.avatar)(\"round\",!0),s(),f(\"data-locator\",\"name\"),s(),P(r.getName()),s(),c(\"ngIf\",r.email),s(),c(\"ngIf\",r.phone))},dependencies:[b,z],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}.title[_ngcontent-%COMP%]{text-align:center;word-break:break-all;padding-top:12px;padding-bottom:4px;font-weight:500;font-size:17px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}.label[_ngcontent-%COMP%]{text-align:center;word-break:break-all;font-weight:400;font-size:15px;line-height:20px;color:var(--widget-ui-kit-color-color_grey_medium)}']}));let e=t;return e})();var ht=(()=>{let t=class t{constructor(){n(this,\"blockText\",\"\");n(this,\"starClick\",new w);n(this,\"selectedRating\",0)}onStarClick(i){this.starClick.emit(i)}};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"ui-kit-evaluation-block\"]],inputs:{blockText:\"blockText\"},outputs:{starClick:\"starClick\"},standalone:!0,features:[ct],decls:4,vars:2,consts:[[1,\"evaluation_block\"],[\"size\",\"large\",3,\"ngModelChange\",\"ngModel\"]],template:function(o,r){o&1&&(l(0,\"div\",0)(1,\"p\"),C(2),m(),l(3,\"ui-kit-rating\",1),k(\"ngModelChange\",function(_){return r.onStarClick(_)}),m()()),o&2&&(s(2),P(r.blockText),s(),c(\"ngModel\",r.selectedRating))},dependencies:[J,mt,Q,X],styles:['@charset \"UTF-8\";.evaluation_block[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_grey);padding:16px;border-radius:16px;display:flex;justify-content:center;align-items:center;flex-direction:column;box-shadow:0 0 1px #00247f3d}.evaluation_block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:4px}.evaluation_block[_ngcontent-%COMP%]   ui-kit-rating[_ngcontent-%COMP%]{gap:4px}']}));let e=t;return e})();var Ze=[[[\"\",\"custom-button\",\"\"]]],ti=[\"[custom-button]\"];function ei(e,t){if(e&1){let a=Y();l(0,\"div\",14)(1,\"ui-kit-svg-icon\",15),k(\"click\",function(){$(a);let o=g().$implicit,r=g();return W(r.onActionsClick(o.id))}),m()()}e&2&&(s(),c(\"name\",\"dots-menu\"))}function ii(e,t){if(e&1&&(l(0,\"div\")(1,\"div\",5),p(2,\"ui-kit-avatar\",6),l(3,\"div\",7),p(4,\"div\",8),l(5,\"div\",9),p(6,\"ui-kit-rating\",10),l(7,\"div\",11),C(8),O(9,\"yDate\"),m()()(),h(10,ei,2,1,\"div\",12),m(),p(11,\"div\",13),m()),e&2){let a=t.$implicit,i=t.index,o=g();f(\"data-locator\",\"review_card_\"+i),s(2),c(\"round\",!0)(\"text\",a.user_name),s(2),c(\"innerHTML\",a.user_name,_t),f(\"data-locator\",\"review_client_name\"),s(2),c(\"ngModel\",a.rating)(\"disabled\",!0),s(),f(\"data-locator\",\"review_date\"),s(),S(\" \",tt(9,12,a.date,\"longDate\",!1),\" \"),s(2),c(\"ngIf\",o.isActionsAvailable),s(),c(\"innerHTML\",a.text,_t),f(\"data-locator\",\"review_description\")}}function ni(e,t){if(e&1){let a=Y();l(0,\"ui-kit-button\",16),k(\"click\",function(){$(a);let o=g();return W(o.moreReviews())}),C(1),O(2,\"translate\"),m()}if(e&2){let a=g();c(\"type\",a.canLeaveReview?a.buttonType.tertiary:a.buttonType.secondary),f(\"data-locator\",\"more_review_link\"),s(),S(\" \",U(2,3,\"button.more_reviews\"),\"\\n\")}}var oi=(()=>{let t=class t{constructor(i,o,r,v,_,y){n(this,\"capacitor\");n(this,\"router\");n(this,\"activatedRoute\");n(this,\"modalService\");n(this,\"translateService\");n(this,\"trackingService\");n(this,\"reviews\");n(this,\"canLeaveReview\",!0);n(this,\"buttonClick\",new w);n(this,\"buttonType\",ce);n(this,\"counterMaxReviews\",6);n(this,\"selectedReviewId\");this.capacitor=i,this.router=o,this.activatedRoute=r,this.modalService=v,this.translateService=_,this.trackingService=y}moreReviews(){this.trackingService.track({type:yt.Action.click,element:{type:\"button\",name:\"about_company_more_reviews_button\"}}),this.counterMaxReviews=this.counterMaxReviews+6}goToAddReview(i){this.trackingService.track({type:yt.Action.click,element:{type:\"button\",name:\"about_company_review_stars_button\",value:i.toString()}}),this.buttonClick.emit(i)}get isActionsAvailable(){return this.capacitor.isNativePlatform()||ue.isFeatureEnabled(pe.native)}onActionsClick(i){return Rt(this,null,function*(){this.selectedReviewId=i,(yield this.modalService.openModal({component:he,componentData:{confirmButtonText:this.translateService.instant(\"reviews.reportReview\"),cancelButtonText:this.translateService.instant(\"Close\")},params:{modalType:re.default}}).result.catch(Et))?this.goToReportReviewPage():this.selectedReviewId=null})}goToReportReviewPage(){this.router.navigate([\"report-comment\",this.selectedReviewId],{relativeTo:this.activatedRoute,queryParamsHandling:\"preserve\"})}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(xe),u(Jt),u(Xt),u(ae),u(I),u(te))}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-reviews\"]],inputs:{reviews:\"reviews\",canLeaveReview:\"canLeaveReview\"},outputs:{buttonClick:\"buttonClick\"},ngContentSelectors:ti,decls:9,vars:13,consts:[[3,\"starClick\",\"title\",\"blockText\"],[4,\"ngFor\",\"ngForOf\"],[\"class\",\"more-review\",3,\"type\",\"click\",4,\"ngIf\"],[1,\"fixed-button\"],[1,\"custom-button\"],[1,\"user\"],[3,\"round\",\"text\"],[1,\"info\"],[1,\"client-name\",3,\"innerHTML\"],[1,\"rating-container\"],[3,\"ngModel\",\"disabled\"],[1,\"date\"],[\"class\",\"actions-button\",4,\"ngIf\"],[1,\"review-description\",3,\"innerHTML\"],[1,\"actions-button\"],[1,\"actions-button__icon\",3,\"click\",\"name\"],[1,\"more-review\",3,\"click\",\"type\"]],template:function(o,r){o&1&&(A(Ze),l(0,\"ui-kit-evaluation-block\",0),O(1,\"translate\"),O(2,\"translate\"),k(\"starClick\",function(_){return r.goToAddReview(_)}),m(),h(3,ii,12,16,\"div\",1),O(4,\"slice\"),h(5,ni,3,5,\"ui-kit-button\",2),l(6,\"div\",3)(7,\"div\",4),F(8),m()()),o&2&&(c(\"title\",U(1,5,\"reviews.rateAndAddReview\"))(\"blockText\",U(2,7,\"reviews.rateAndAddReview\")),f(\"data-locator\",\"add_review_btn\"),s(3),c(\"ngForOf\",tt(4,9,r.reviews,0,r.counterMaxReviews)),s(2),c(\"ngIf\",r.counterMaxReviews<(r.reviews==null?null:r.reviews.length)))},dependencies:[lt,b,Q,X,z,J,ht,D,le,pt,L,ut],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column;gap:8px}[_nghost-%COMP%]   .user[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:12px;padding:8px 0}[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   ui-kit-avatar[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_avatar_bg);color:var(--widget-ui-kit-color-color_avatar_text)}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:4px;overflow:hidden}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black);overflow:hidden;position:relative}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]:after{content:\"\";height:100%;width:1px;position:absolute;top:0;right:-1px;box-shadow:0 0 10px 10px var(--widget-ui-kit-color-color_white)}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:var(--widget-ui-kit-color-color_grey_dark)}[_nghost-%COMP%]   .review-description[_ngcontent-%COMP%]:not(:empty){padding:0 0 8px;font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black);overflow:hidden;position:relative}[_nghost-%COMP%]   .review-description[_ngcontent-%COMP%]:not(:empty):after{content:\"\";height:100%;width:1px;position:absolute;top:0;right:-1px;box-shadow:0 0 10px 10px var(--widget-ui-kit-color-color_white)}.more-review[_ngcontent-%COMP%]{display:block;cursor:pointer;margin-top:20px;color:var(--widget-ui-kit-color-link);font-weight:600}.actions-button[_ngcontent-%COMP%]{flex-grow:2;display:flex;justify-content:flex-end}.actions-button__icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_text_black);width:24px;height:24px}.custom-button[_ngcontent-%COMP%]{padding-bottom:12px}.fixed-button[_ngcontent-%COMP%]{z-index:1000}'],changeDetection:0}));let e=t;return e})();function ri(e,t){e&1&&p(0,\"ui-kit-svg-icon\",4),e&2&&c(\"name\",\"edit\")}var ai=(()=>{let t=class t{constructor(){n(this,\"selectedCity\");n(this,\"showEditButton\",!0);n(this,\"changeCityRequest\",new w);n(this,\"dataLocator\",\"change-city-btn\");n(this,\"role\",\"button\")}selectCityClick(){this.showEditButton&&this.changeCityRequest.emit()}};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-select-city-panel\"]],hostVars:2,hostBindings:function(o,r){o&1&&k(\"click\",function(){return r.selectCityClick()}),o&2&&f(\"data-locator\",r.dataLocator)(\"role\",r.role)},inputs:{selectedCity:\"selectedCity\",showEditButton:\"showEditButton\"},outputs:{changeCityRequest:\"changeCityRequest\"},decls:5,vars:6,consts:[[1,\"city-item-title\"],[1,\"city-item-title__map-pin\",3,\"name\"],[1,\"city-item-title__text\"],[\"class\",\"edit-icon\",3,\"name\",4,\"ngIf\"],[1,\"edit-icon\",3,\"name\"]],template:function(o,r){o&1&&(l(0,\"div\",0),p(1,\"ui-kit-svg-icon\",1),l(2,\"span\",2),C(3),m()(),h(4,ri,1,1,\"ui-kit-svg-icon\",3)),o&2&&(Vt(\"cursor\",r.showEditButton?\"pointer\":\"default\"),s(),c(\"name\",\"micro-pin\"),s(),f(\"data-locator\",\"selected_city\"),s(),P(r.selectedCity==null?null:r.selectedCity.title),s(),c(\"ngIf\",r.showEditButton))},dependencies:[b,D],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;align-items:center;border-radius:24px;padding:12px 20px;margin:0 16px 1px;background-color:var(--widget-ui-kit-color-color_bg)}.city-item-title[_ngcontent-%COMP%]{display:flex;width:100%;align-content:center;align-items:center;margin-left:auto;justify-content:center;overflow:hidden;white-space:nowrap;text-overflow:clip;padding-left:24px;cursor:pointer;position:relative}.city-item-title[_ngcontent-%COMP%]:after{content:\"\";height:100%;width:1px;position:absolute;top:0;right:-1px;box-shadow:0 0 10px 10px var(--widget-ui-kit-color-color_bg)}.city-item-title__text[_ngcontent-%COMP%]{font-size:15px;letter-spacing:.2px;padding-left:4px;color:var(--widget-ui-kit-color-color_text_black);max-width:100%}.city-item-title__map-pin[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-border-active)}.city-item-title.no-edit[_ngcontent-%COMP%]{cursor:default;margin-right:24px}.edit-icon[_ngcontent-%COMP%]{margin-left:auto;font-size:24px;color:var(--widget-ui-kit-color-secondary-text)}']}));let e=t;return e})();var et=(()=>{let t=class t{constructor(i){n(this,\"translate\");this.translate=i}transform(i,o=!1,r=!1){if(!i)return\"\";let v=o?Math.floor(i/Mt):Math.floor(i/Mt)%ee,_=Math.ceil(i/St%St).toFixed(0);if(v===0&&_!==\"0\"){let y=\"\".concat(_,\"\\xA0\").concat(this.translate.instant(\"m\"));return r?y.replace(/\\./g,\"\"):y}else if(v!==0&&_===\"0\"){let y=\"\".concat(v,\"\\xA0\").concat(this.translate.instant(\"h\"));return r?y.replace(/\\./g,\"\"):y}else if(v&&_){let y=\"\".concat(v,\"\\xA0\").concat(this.translate.instant(\"h\"),\"\\xA0\").concat(_,\"\\xA0\").concat(this.translate.instant(\"m\"));return r?y.replace(/\\./g,\"\"):y}}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(I,16))}),n(t,\"\\u0275pipe\",T({name:\"secondsToTime\",type:t,pure:!0}));let e=t;return e})();function Ee(e){if(Number.isInteger(e)&&e>0)return e}var si=(e,t)=>t.url;function ci(e,t){e&1&&(l(0,\"div\",3),p(1,\"ui-kit-svg-icon\",5),m()),e&2&&(s(),c(\"name\",\"menu/specialist\"))}function li(e,t){if(e&1&&p(0,\"ui-kit-avatar\",4),e&2){let a=g(),i=a.$implicit,o=a.$index;c(\"url\",i.url)(\"round\",!0)(\"text\",i.name||\"\")(\"bordered\",o>0)}}function pi(e,t){if(e&1&&h(0,ci,2,1,\"div\",3)(1,li,1,4,\"ui-kit-avatar\",4),e&2){let a=t.$implicit;E(a.isAny?0:1)}}function mi(e,t){if(e&1&&(l(0,\"span\",2),C(1),m()),e&2){let a=g();s(),S(\" +\",a.avatars.length-2,\" \")}}var vt=(()=>{let t=class t{constructor(){n(this,\"avatars\",[])}};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"ui-kit-avatars\"]],inputs:{avatars:\"avatars\"},standalone:!0,features:[ct],decls:6,vars:5,consts:[[1,\"avatars-container\"],[1,\"avatars\"],[1,\"badge\"],[1,\"any-staff-icon-container\"],[\"size\",\"48px\",1,\"text-avatar\",3,\"url\",\"round\",\"text\",\"bordered\"],[1,\"any-staff-icon\",3,\"name\"]],template:function(o,r){o&1&&(l(0,\"div\",0)(1,\"div\",1),Wt(2,pi,2,1,null,null,si),O(4,\"slice\"),m(),h(5,mi,2,1,\"span\",2),m()),o&2&&(s(2),qt(tt(4,1,r.avatars,0,2)),s(3),E(r.avatars.length>2?5:-1))},dependencies:[pt,dt,D,z],styles:['@charset \"UTF-8\";.avatars[_ngcontent-%COMP%]{display:flex;align-items:center}.avatars[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:first-child){margin-left:-28px}.avatars-container[_ngcontent-%COMP%]{position:relative}.badge[_ngcontent-%COMP%]{display:flex;min-width:20px;padding:0 5px;justify-content:center;align-items:center;border-radius:100px;border:1px solid var(--widget-ui-kit-color-color_primary);background:var(--widget-ui-kit-color-color_primary);position:absolute;right:0;bottom:0;color:var(--widget-ui-kit-color-color_white);text-align:center;font-style:normal;font-weight:500;font-size:14px;line-height:20px}.text-avatar[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_avatar_bg);color:var(--widget-ui-kit-color-color_avatar_text)}.any-staff-icon-container[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;justify-content:center;align-items:center;background-color:var(--widget-ui-kit-color-color_grey_03);border-radius:50%}.any-staff-icon-container[_ngcontent-%COMP%]   .any-staff-icon[_ngcontent-%COMP%]{width:24px;height:24px}'],changeDetection:0}));let e=t;return e})();var Ae=(()=>{let t=class t{constructor(i,o,r){n(this,\"renderer\");n(this,\"elementRef\");n(this,\"destroyRef\");n(this,\"lineHeight\",2);n(this,\"maxLines\",1);n(this,\"_text\",\"\");this.renderer=i,this.elementRef=o,this.destroyRef=r}truncateTextWithEllipsis(){let i=this.elementRef.nativeElement,o=this.maxLines*this.lineHeight;if(i.scrollHeight>o){let r=this._text.trim();for(;i.scrollHeight>o&&r.length>0;)r=r.slice(0,-1).trim(),i.textContent=r+\"...\"}}ngOnInit(){this.renderer.setStyle(this.elementRef.nativeElement,\"line-height\",\"\".concat(this.lineHeight,\"px\")),this.renderer.setStyle(this.elementRef.nativeElement,\"max-height\",\"\".concat(this.maxLines*this.lineHeight,\"px\")),this.renderer.setStyle(this.elementRef.nativeElement,\"display\",\"block\"),this.renderer.setStyle(this.elementRef.nativeElement,\"overflow\",\"hidden\"),ot(window,\"resize\").pipe(zt(50),bt(this.destroyRef)).subscribe(()=>{this.elementRef.nativeElement.textContent=this._text,this.truncateTextWithEllipsis()}),Ft(100).pipe(rt(()=>this.elementRef.nativeElement.textContent),Bt(1),bt(this.destroyRef)).subscribe(()=>{this._text=this.elementRef.nativeElement.textContent,this.truncateTextWithEllipsis()})}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(st),u(q),u(Kt))}),n(t,\"\\u0275dir\",V({type:t,selectors:[[\"\",\"uiKitMaxLines\",\"\"]],inputs:{lineHeight:\"lineHeight\",maxLines:\"maxLines\"},standalone:!0}));let e=t;return e})();function fi(e,t){e&1&&p(0,\"div\",1)}var Fe=(()=>{let t=class t{constructor(){n(this,\"disabled\",!1);n(this,\"formValue\",null);n(this,\"formControlOnChange\",i=>{});n(this,\"formControlOnTouched\",()=>{})}componentClick(){this.disabled||(this.formControlOnChange(!0),this.formValue=!0,this.formControlOnTouched())}ngOnChanges(i){i.disabled&&this.setDisabledState(this.disabled)}writeValue(i){if(i!==null&&typeof i!=\"boolean\")throw new Error(\"Invalid value for radio button input: '\".concat(i,\"'\"));this.formValue=i}registerOnChange(i){this.formControlOnChange=i}registerOnTouched(i){this.formControlOnTouched=i}setDisabledState(i){this.disabled=i}};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"ui-kit-pseudo-radio-button\"]],hostBindings:function(o,r){o&1&&k(\"click\",function(){return r.componentClick()})},inputs:{disabled:\"disabled\"},features:[Gt([{provide:ie,useExisting:Nt(()=>t),multi:!0}]),at],decls:1,vars:1,consts:[[\"class\",\"selected\",4,\"ngIf\"],[1,\"selected\"]],template:function(o,r){o&1&&h(0,fi,1,0,\"div\",0),o&2&&c(\"ngIf\",r.formValue)},dependencies:[b],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;border-radius:46px;border:1px var(--widget-ui-kit-color-color_grey_light) solid}[_nghost-%COMP%]   .selected[_ngcontent-%COMP%]{width:12px;height:12px;background:var(--widget-ui-kit-color-color_stroke_primary);border-radius:9999px}'],changeDetection:0}));let e=t;return e})();var hi=[[[\"\",\"sub-actions\",\"\"]]],vi=[\"[sub-actions]\"];function _i(e,t){if(e&1&&p(0,\"ui-kit-avatar\",13),e&2){let a=g(3);c(\"text\",a.names())(\"url\",a.avatar())(\"round\",!0),f(\"data-locator\",\"master_avatar\")}}function xi(e,t){e&1&&(l(0,\"div\",14),p(1,\"ui-kit-svg-icon\",15),m()),e&2&&(s(),c(\"name\",\"menu/specialist\"))}function Ci(e,t){if(e&1&&h(0,_i,1,4,\"ui-kit-avatar\",11)(1,xi,2,1,\"div\",12),e&2){let a=g(2);c(\"ngIf\",!a.anyStaff()),s(),c(\"ngIf\",a.anyStaff())}}function yi(e,t){if(e&1&&p(0,\"ui-kit-avatars\",3),e&2){let a=g(2);c(\"avatars\",a.avatars())}}function bi(e,t){if(e&1&&(l(0,\"div\",18),C(1),m()),e&2){let a=g(3);f(\"data-locator\",\"master_position_or_specialization\"),s(),S(\" \",a.positionsOrSpecialization(),\" \")}}function wi(e,t){if(e&1&&(l(0,\"div\",16),C(1),O(2,\"translate\"),m(),h(3,bi,2,2,\"div\",17)),e&2){let a=g(2);f(\"data-locator\",\"master_name\"),s(),S(\" \",U(2,3,a.names()),\" \"),s(2),c(\"ngIf\",a.positionsOrSpecialization())}}function ki(e,t){if(e&1&&(l(0,\"div\",21),C(1),m()),e&2){let a=g(3);f(\"data-locator\",\"master_position_or_specialization\"),s(),S(\" \",a.positionsOrSpecialization(),\" \")}}function Mi(e,t){if(e&1&&(l(0,\"div\",19),C(1),m(),h(2,ki,2,2,\"div\",20)),e&2){let a=g(2);f(\"data-locator\",\"master_name\"),s(),S(\" \",a.names(),\" \"),s(),c(\"ngIf\",a.positionsOrSpecialization())}}function Pi(e,t){if(e&1&&p(0,\"ui-kit-rating\",22),e&2){let a=g(2);c(\"ngModel\",a.rating())(\"disabled\",!0)(\"commentsCount\",a.commentsCount())(\"commentsCountDataLocator\",\"feedbacks_count\")}}function Si(e,t){if(e&1&&(l(0,\"div\",26),C(1),m()),e&2){let a=g(3);s(),S(\" \",a.priceRange(),\" \")}}function Oi(e,t){if(e&1&&(p(0,\"ui-kit-tag\",27),O(1,\"translate\")),e&2){let a=g(3);c(\"tagType\",a.tagType.bordered)(\"label\",U(1,3,\"prepaid.prepaid\")),f(\"data-locator\",\"service_label\")}}function Ti(e,t){if(e&1&&(l(0,\"div\",23),h(1,Si,2,1,\"div\",24)(2,Oi,2,5,\"ui-kit-tag\",25),m()),e&2){let a=g(2);s(),c(\"ngIf\",a.priceRange()),s(),c(\"ngIf\",a.prepaidRequired()&&!a.overrideShowRatingAndTag())}}function Ii(e,t){if(e&1){let a=Y();l(0,\"div\",28)(1,\"div\",29),k(\"click\",function(o){$(a);let r=g(2);return W(r.handleClickOnInfo(o))}),p(2,\"ui-kit-svg-icon\",30),m()()}if(e&2){let a=g(2);c(\"routerLink\",\"/\"+a.buildMasterInfoPath(0,0))(\"skipNavigation\",!0),s(2),c(\"name\",\"info\"),f(\"data-locator\",\"master_icon_info\")}}function Di(e,t){if(e&1){let a=Y();l(0,\"div\",31),k(\"click\",function(o){$(a);let r=g(2);return W(r.handleResetClick(o))}),p(1,\"ui-kit-svg-icon\",32),m()}e&2&&(s(),c(\"name\",\"cross\"),f(\"data-locator\",\"remove_master_btn\"))}function Ri(e,t){if(e&1&&p(0,\"ui-kit-pseudo-radio-button\",33),e&2){let a=g(2);c(\"ngModel\",a.isSelected())(\"disabled\",a.disabled),f(\"data-locator\",\"pseudo-radio-\"+a.isSelected())}}function Ei(e,t){if(e&1&&(l(0,\"ui-kit-simple-cell\",1)(1,\"div\",2),h(2,Ci,2,2)(3,yi,1,1,\"ui-kit-avatars\",3),m(),l(4,\"div\",4),h(5,wi,4,5)(6,Mi,3,3)(7,Pi,1,4,\"ui-kit-rating\",5)(8,Ti,3,2,\"div\",6),m(),l(9,\"div\",7),h(10,Ii,3,4,\"div\",8)(11,Di,2,2,\"div\",9)(12,Ri,1,3,\"ui-kit-pseudo-radio-button\",10),F(13),m()()),e&2){let a=g();R(\"without-right-gap\",a.withManyMasters()),c(\"leftSizePx\",a.withManyMasters()?\"68px\":\"48px\"),s(2),E(a.withManyMasters()?3:2),s(3),E(a.withManyMasters()?6:5),s(2),c(\"ngIf\",a.ratingVisible()),s(),c(\"ngIf\",a.prepaidRequired()&&!a.overrideShowRatingAndTag()||a.priceRange()),s(),R(\"align-items-center\",a.alignActionsCenter()),s(),c(\"ngIf\",a.isMasterInfoButtonVisible()),s(),c(\"ngIf\",a.resettable()),s(),c(\"ngIf\",a.isSelected()!==void 0)}}var Ai=(()=>{let t=class t{constructor(i,o){n(this,\"payment\");n(this,\"translate\");n(this,\"staff\",B(null,{transform:i=>Array.isArray(i)&&i.length===1?i[0]:i}));n(this,\"infoVisible\",B(!0));n(this,\"resettable\",B(!1));n(this,\"overrideShowRatingAndTag\",B(!1));n(this,\"isSelected\",B(void 0));n(this,\"alignActionsCenter\",B(!1));n(this,\"disabled\",!1);n(this,\"showInfo\",new w);n(this,\"resetButtonClick\",new w);n(this,\"showRating\",!0);n(this,\"buildMasterInfoPath\",ye);n(this,\"tagType\",Ce);n(this,\"formControl\",new ne(!1));n(this,\"withManyMasters\",M(()=>Array.isArray(this.staff())));n(this,\"names\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?i.map(r=>this.translate.transform(r.name)).join(\", \"):(o=i==null?void 0:i.name)!=null?o:\"staff\"}));n(this,\"avatar\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?\"\":(o=i==null?void 0:i.avatar)!=null?o:\"\"}));n(this,\"avatars\",M(()=>{let i=this.staff();return Array.isArray(i)?i.map(o=>({name:o.name,url:o.avatar,isAny:o.id===wt})):[]}));n(this,\"positionsOrSpecialization\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?i.map(r=>r.positionOrSpecialization).filter(Boolean).join(\", \"):(o=i==null?void 0:i.positionOrSpecialization)!=null?o:null}));n(this,\"rating\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?0:(o=i==null?void 0:i.rating)!=null?o:0}));n(this,\"isMasterInfoButtonVisible\",M(()=>{let i=this.staff();return!Array.isArray(i)&&this.infoVisible()&&!this.anyStaff()}));n(this,\"ratingVisible\",M(()=>{let i=this.staff();return!Array.isArray(i)&&this.showRating&&!!(i!=null&&i.show_rating)&&this.rating()>0&&!this.overrideShowRatingAndTag()}));n(this,\"commentsCount\",M(()=>{let i=this.staff();return Array.isArray(i)?0:Ee(i==null?void 0:i.comments_count)}));n(this,\"prepaidRequired\",M(()=>{let i=this.staff();return Array.isArray(i)?!1:this.payment.staffPayEnabled(i)&&!this.payment.orderAbonementRestrictionRequired()}));n(this,\"anyStaff\",M(()=>{let i=this.staff();return Array.isArray(i)?!1:(i==null?void 0:i.id)===wt}));n(this,\"priceRange\",M(()=>{var o;let i=this.staff();return Array.isArray(i)?\"\":(o=i==null?void 0:i.priceRange)!=null?o:\"\"}));this.payment=i,this.translate=o}get isSelectedAttribute(){return this.isSelected()}handleClickOnInfo(i){this.disabled||(i.stopPropagation(),this.showInfo.emit())}handleResetClick(i){this.disabled||(i.stopPropagation(),this.resetButtonClick.emit())}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(we),u(L))}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-staff-tile\"]],hostVars:4,hostBindings:function(o,r){o&2&&(f(\"data-locator-staff-tile-disabled\",r.disabled)(\"data-locator-staff-tile-selected\",r.isSelectedAttribute),R(\"disabled\",r.disabled))},inputs:{staff:[1,\"staff\"],infoVisible:[1,\"infoVisible\"],resettable:[1,\"resettable\"],overrideShowRatingAndTag:[1,\"overrideShowRatingAndTag\"],isSelected:[1,\"isSelected\"],alignActionsCenter:[1,\"alignActionsCenter\"],disabled:\"disabled\",showRating:\"showRating\"},outputs:{showInfo:\"showInfo\",resetButtonClick:\"resetButtonClick\"},ngContentSelectors:vi,decls:1,vars:1,consts:[[3,\"leftSizePx\",\"without-right-gap\",4,\"ngIf\"],[3,\"leftSizePx\"],[\"left\",\"\"],[3,\"avatars\"],[\"center\",\"\",1,\"meta\"],[\"class\",\"rating\",3,\"ngModel\",\"disabled\",\"commentsCount\",\"commentsCountDataLocator\",4,\"ngIf\"],[\"class\",\"price-with-tags\",4,\"ngIf\"],[\"right\",\"\",\"data-locator\",\"change_master_btn\",1,\"staff-actions\"],[\"class\",\"info-button-container\",3,\"routerLink\",\"skipNavigation\",4,\"ngIf\"],[\"class\",\"reset-button\",3,\"click\",4,\"ngIf\"],[3,\"ngModel\",\"disabled\",4,\"ngIf\"],[\"size\",\"48px\",\"class\",\"text-avatar\",3,\"text\",\"url\",\"round\",4,\"ngIf\"],[\"class\",\"any-staff-icon-container\",4,\"ngIf\"],[\"size\",\"48px\",1,\"text-avatar\",3,\"text\",\"url\",\"round\"],[1,\"any-staff-icon-container\"],[1,\"any-staff-icon\",3,\"name\"],[1,\"name\"],[\"class\",\"position-or-specialization\",4,\"ngIf\"],[1,\"position-or-specialization\"],[\"uiKitMaxLines\",\"\",\"lineHeight\",\"24\",\"maxLines\",\"2\",1,\"name\"],[\"class\",\"position-or-specialization\",\"uiKitMaxLines\",\"\",\"lineHeight\",\"20\",\"maxLines\",\"1\",4,\"ngIf\"],[\"uiKitMaxLines\",\"\",\"lineHeight\",\"20\",\"maxLines\",\"1\",1,\"position-or-specialization\"],[1,\"rating\",3,\"ngModel\",\"disabled\",\"commentsCount\",\"commentsCountDataLocator\"],[1,\"price-with-tags\"],[\"class\",\"price-range\",4,\"ngIf\"],[3,\"tagType\",\"label\",4,\"ngIf\"],[1,\"price-range\"],[3,\"tagType\",\"label\"],[1,\"info-button-container\",3,\"routerLink\",\"skipNavigation\"],[1,\"info-button\",3,\"click\"],[\"role\",\"button\",\"aria-label\",\"?\",1,\"info-button-icon\",3,\"name\"],[1,\"reset-button\",3,\"click\"],[1,\"reset-button-icon\",3,\"name\"],[3,\"ngModel\",\"disabled\"]],template:function(o,r){o&1&&(A(hi),h(0,Ei,14,12,\"ui-kit-simple-cell\",0)),o&2&&c(\"ngIf\",r.staff())},dependencies:[b,Q,X,vt,Ae,z,ft,J,D,fe,Fe,Zt,ke,Me,L],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block}.disabled[_nghost-%COMP%]{opacity:.4}.disabled[_nghost-%COMP%]   .reset-button[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .info-button-container[_ngcontent-%COMP%]{cursor:default!important}.text-avatar[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_avatar_bg);color:var(--widget-ui-kit-color-color_avatar_text)}.any-staff-icon-container[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;justify-content:center;align-items:center;background-color:var(--widget-ui-kit-color-color_grey_03);border-radius:50%}.any-staff-icon-container[_ngcontent-%COMP%]   .any-staff-icon[_ngcontent-%COMP%]{width:24px;height:24px}.meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:2px;width:100%;height:100%}.name[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}.position-or-specialization[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:var(--widget-ui-kit-color-color_grey_dark)}.rating[_ngcontent-%COMP%]{margin-top:2px}.price-with-tags[_ngcontent-%COMP%]{margin-top:6px;display:flex;flex-direction:row;gap:8px}.price-with-tags[_ngcontent-%COMP%]   .price-range[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}.staff-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px;height:100%;padding:12px 0}.staff-actions.align-items-center[_ngcontent-%COMP%]{align-items:center}.info-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer}.info-button-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:19.5px;height:19.5px;background-color:var(--widget-ui-kit-color-color_grey_03);border-radius:50%}.info-button-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]   .info-button-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_11);width:5px;height:10px;padding-left:.5px}.reset-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;align-self:center;width:24px;height:24px;cursor:pointer}.reset-button[_ngcontent-%COMP%]   .reset-button-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_dark);width:13.3px;height:13.3px}.without-right-gap[_ngcontent-%COMP%]{gap:0}.without-right-gap[_ngcontent-%COMP%]     .left-part{margin-right:12px}'],changeDetection:0}));let e=t;return e})();var Fi=[\"*\"];function zi(e,t){e&1&&(xt(0),F(1),Ct())}function Bi(e,t){e&1&&(xt(0),p(1,\"ui-kit-card-skeleton\"),Ct())}var Ui=(()=>{let t=class t{constructor(){n(this,\"widthType\");n(this,\"cutType\");n(this,\"isLoading\",!1)}get substrateClasses(){var i;return\"\".concat(this.widthType,\" \").concat((i=this.cutType)!=null?i:\"\")}};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275cmp\",d({type:t,selectors:[[\"app-substrate\"]],hostVars:4,hostBindings:function(o,r){o&2&&($t(r.substrateClasses),R(\"is-loading\",r.isLoading))},inputs:{widthType:\"widthType\",cutType:\"cutType\",isLoading:\"isLoading\"},ngContentSelectors:Fi,decls:2,vars:2,consts:[[4,\"ngIf\"]],template:function(o,r){o&1&&(A(),h(0,zi,2,0,\"ng-container\",0)(1,Bi,2,0,\"ng-container\",0)),o&2&&(c(\"ngIf\",!r.isLoading),s(),c(\"ngIf\",r.isLoading))},dependencies:[b,Oe],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:block;background-color:var(--widget-ui-kit-color-color_white);padding:20px 16px;margin:8px 8px 0;border-radius:24px}.full-width[_nghost-%COMP%]{padding:16px;margin:8px 0}.full-width-half-margin[_nghost-%COMP%]{padding:16px;margin:4px 0}.cut-top[_nghost-%COMP%]{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.cut-bottom[_nghost-%COMP%]{margin-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}'],changeDetection:0}));let e=t;return e})();var ze=.4117647058823529;var Li=(()=>{let t=class t{constructor(i,o){n(this,\"element\");n(this,\"renderer\");this.element=i,this.renderer=o}ngAfterViewChecked(){let i=this.element.nativeElement.offsetWidth*ze+\"px\";this.renderer.setStyle(this.element.nativeElement,\"height\",i),this.renderer.setStyle(this.element.nativeElement,\"object-fit\",\"cover\"),this.renderer.setStyle(this.element.nativeElement,\"object-position\",\"top\")}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(q),u(st))}),n(t,\"\\u0275dir\",V({type:t,selectors:[[\"\",\"appServiceImage\",\"\"]]}));let e=t;return e})();var Ni=(()=>{class e{}return n(e,\"range\",[{value:0,title:0,type:\"hour\"},{value:1,title:1,type:\"hour\"},{value:2,title:2,type:\"hour\"},{value:3,title:3,type:\"hour\"},{value:4,title:4,type:\"hour\"},{value:5,title:5,type:\"hour\"},{value:6,title:6,type:\"hour\"},{value:9,title:9,type:\"hour\"},{value:12,title:12,type:\"hour\"},{value:15,title:15,type:\"hour\"},{value:18,title:18,type:\"hour\"},{value:21,title:21,type:\"hour\"},{value:24,title:24,type:\"hour\"},{value:48,title:2,type:\"day\"},{value:72,title:3,type:\"day\"},{value:120,title:5,type:\"day\"},{value:168,title:7,type:\"day\"}]),e})(),Ki=(()=>{let t=class t{constructor(i,o){n(this,\"translate\");n(this,\"wordNumeralCasePipe\");this.translate=i,this.wordNumeralCasePipe=o}transform(i){if(i=Number(i),i===0)return this.translate.instant(\"confirm.dontSend\");if(!i)return\"\";let o=Ni.range.find(r=>r.value===i);return o?this.translate.instant(\"confirm.untilVisit.full\",{time:o.title,timeTitle:this.wordNumeralCasePipe.transform(\"time.\".concat(o.type,\"Cased\"),o.title)}):\"\"}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(I,16),u(Tt,16))}),n(t,\"\\u0275pipe\",T({name:\"orderRemindTime\",type:t,pure:!0}));let e=t;return e})();var Hi=(()=>{let t=class t{constructor(i){n(this,\"yDate\");this.yDate=i}transform(i,o=\" - \"){if(!(i!=null&&i.date))return\"\";let r=kt(Ot(i.date)),v=this.yDate.transform(r.toISOString(),\"shortTime\",!1,i.company.datetime_format),_=kt(Ot(i.date));_.setSeconds(_.getSeconds()+i.length||0);let y=this.yDate.transform(_.toISOString(),\"shortTime\",!1,i.company.datetime_format);return v===y?v:\"\".concat(v).concat(o).concat(y)}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(ut,16))}),n(t,\"\\u0275pipe\",T({name:\"timeIntervalFromRecord\",type:t,pure:!0}));let e=t;return e})();var Vi=(()=>{let t=class t{constructor(i){n(this,\"translate\");this.translate=i}transform(i,o=\"m\",r=\"s\",v=\" \"){if(!i)return\"\";let _=Math.floor(i/Pt),y=Math.floor(i-_*Pt);return o&&r?(\"00\"+_).slice(-2)+\" \"+this.translate.instant(o)+v+(\"00\"+y).slice(-2)+\" \"+this.translate.instant(r):(\"00\"+_).slice(-2)+v+(\"00\"+y).slice(-2)}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(I,16))}),n(t,\"\\u0275pipe\",T({name:\"formatTime\",type:t,pure:!0}));let e=t;return e})();var $i=(()=>{let t=class t{constructor(i,o){n(this,\"translate\");n(this,\"secondsToTimePipe\");this.translate=i,this.secondsToTimePipe=o}transform(i=[]){let o=i.reduce((N,nt)=>N+nt.seance_length,0),r=N=>N.seance_length>0,v=this.secondsToTimePipe.transform(o),_=this.translate.instant(\"service.price_from\");return i.every(r)?\"\".concat(v):v?\"\".concat(_,\" \").concat(v):\"\"}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(I,16),u(et,16))}),n(t,\"\\u0275pipe\",T({name:\"servicesLength\",type:t,pure:!0}));let e=t;return e})();var it=function(e){return e[e.swipeUp=0]=\"swipeUp\",e[e.swipeDown=1]=\"swipeDown\",e[e.swipeLeft=2]=\"swipeLeft\",e[e.swipeRight=3]=\"swipeRight\",e}(it||{}),Rr=(()=>{let t=class t{constructor(i){n(this,\"element\");n(this,\"id\");n(this,\"swipeLocked\",!1);n(this,\"swipePreventDefault\",!1);n(this,\"disableTimeout\",!1);n(this,\"swipe\",new w);n(this,\"uiKitOnSwipeVertical\",new w);n(this,\"uiKitOnSwipeHorizontal\",new w);n(this,\"xDown\",null);n(this,\"yDown\",null);n(this,\"xDiff\",null);n(this,\"yDiff\",null);n(this,\"timeDown\",null);n(this,\"swipeThreshold\",20);n(this,\"swipeTimeout\",500);n(this,\"throttleTime\",10);n(this,\"ySwipeLocked\",!1);n(this,\"xSwipeLocked\",!1);n(this,\"destroy$\",new At(1));n(this,\"onTouchMove\",i=>{var v,_;if(!this.xDown||!this.yDown)return;let o=i.touches[0].clientX,r=i.touches[0].clientY;this.xDiff=this.xDown-o,this.yDiff=this.yDown-r,!this.ySwipeLocked&&!this.xSwipeLocked&&(Math.abs((v=this.xDiff)!=null?v:0)>Math.abs((_=this.yDiff)!=null?_:0)?this.ySwipeLocked=!0:this.xSwipeLocked=!0),this.ySwipeLocked||this.uiKitOnSwipeVertical.emit({x:this.xDiff,y:this.yDiff}),this.xSwipeLocked||this.uiKitOnSwipeHorizontal.emit({x:this.xDiff,y:this.yDiff})});n(this,\"onTouchStart\",i=>{this.timeDown=Date.now(),this.xDown=i.touches[0].clientX,this.yDown=i.touches[0].clientY,this.xDiff=0,this.yDiff=0});n(this,\"onTouchEnd\",i=>{var _,y,N,nt,Dt;let o=Date.now()-((_=this.timeDown)!=null?_:0),r=null,v=o<this.swipeTimeout||this.disableTimeout;this.ySwipeLocked?Math.abs((y=this.xDiff)!=null?y:0)>this.swipeThreshold&&v&&(r=((N=this.xDiff)!=null?N:0)>0?it.swipeLeft:it.swipeRight):Math.abs((nt=this.yDiff)!=null?nt:0)>this.swipeThreshold&&v&&(r=((Dt=this.yDiff)!=null?Dt:0)>0?it.swipeUp:it.swipeDown),r!==null&&this.swipe.emit({eventType:r,domEvent:i}),this.xSwipeLocked=!1,this.ySwipeLocked=!1,this.xDown=null,this.yDown=null,this.timeDown=null,this.swipePreventDefault=!1});this.element=i}ngAfterViewInit(){this.subscribeToTouchEvent(\"touchstart\",this.onTouchStart),this.subscribeToTouchEvent(\"touchmove\",this.onTouchMove),this.subscribeToTouchEvent(\"touchend\",this.onTouchEnd)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}subscribeToTouchEvent(i,o){ot(this.element.nativeElement,i,{capture:!0}).pipe(rt(()=>!this.swipeLocked),jt(this.throttleTime),Lt(r=>{this.swipePreventDefault&&r.preventDefault()}),Ut(this.destroy$)).subscribe(o)}};n(t,\"\\u0275fac\",function(o){return new(o||t)(u(q))}),n(t,\"\\u0275dir\",V({type:t,selectors:[[\"\",\"uiKitSwipe\",\"\"]],inputs:{id:\"id\",swipeLocked:\"swipeLocked\",swipePreventDefault:\"swipePreventDefault\",disableTimeout:\"disableTimeout\",swipeThreshold:\"swipeThreshold\"},outputs:{swipe:\"uiKitSwipe\",uiKitOnSwipeVertical:\"uiKitOnSwipeVertical\",uiKitOnSwipeHorizontal:\"uiKitOnSwipeHorizontal\"},standalone:!0}));let e=t;return e})();var Be=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275mod\",H({type:t})),n(t,\"\\u0275inj\",K({imports:[G]}));let e=t;return e})();var Wi=[It,be,et];var Ja=(()=>{let t=class t{};n(t,\"\\u0275fac\",function(o){return new(o||t)}),n(t,\"\\u0275mod\",H({type:t})),n(t,\"\\u0275inj\",K({providers:[...Wi],imports:[G,mt,oe,_e,Te,se,vt,ge,ft,ht,dt,Se,me,de,ve,Be,Pe]}));let e=t;return e})();export{Ne as a,Ve as b,We as c,Ge as d,oi as e,ai as f,et as g,Ee as h,Ai as i,Oe as j,Ui as k,Li as l,Ni as m,Ki as n,Hi as o,Vi as p,$i as q,Yi as r,Xi as s,tn as t,on as u,sn as v,Te as w,it as x,Rr as y,Ja as z};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 13007,
          "_transferSize": 13667,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T11:22:22.201Z",
        "time": 52.32800007797778,
        "timings": {
          "blocked": 30.215000051826237,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2660000000000018,
          "wait": 21.14600004349649,
          "receive": 0.7009999826550484,
          "_blocked_queueing": 3.2480000518262386,
          "_blocked_proxy": 20.076,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
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
          "headersSize": 1258,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "4947"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98ad0530fe55bca5-ALA"
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
              "value": "Tue, 07 Oct 2025 11:22:22 GMT"
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
        "startedDateTime": "2025-10-07T11:22:22.201Z",
        "time": 58.80899995099753,
        "timings": {
          "blocked": 34.07199994954467,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.4059999999999988,
          "wait": 19.140999947026373,
          "receive": 5.190000054426491,
          "_blocked_queueing": 3.998999949544668,
          "_blocked_proxy": 19.304,
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
          "url": "https://n958200.alteg.io/main-YEPPZBSR.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_90",
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
     
```
