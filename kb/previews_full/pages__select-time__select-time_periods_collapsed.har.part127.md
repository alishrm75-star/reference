### pages/select-time/select-time_periods_collapsed.har (part 127)

```har
hide-block\",a.needHide),l(\"formControlName\",a.code)(\"title\",a.title)(\"maxLength\",150)(\"placeholder\",c(1,8,e.dateInputPlaceholder$))(\"isRequired\",a.is_required),S(\"data-locator\",a.code)}}function on(t,r){if(t&1&&(y(0,\"ui-kit-select\",25),s(1,\"translate\")),t&2){let a=g().$implicit;G(\"hide-block\",a.needHide),l(\"formControlName\",a.code)(\"title\",a.title)(\"singleSelect\",!0)(\"options\",a.values||We(11,Go))(\"placeholder\",c(1,9,\"selector_placeholder\"))(\"isRequired\",a.is_required),S(\"data-locator\",a.code)}}function nn(t,r){if(t&1&&(B(0),C(1,en,2,12,\"ui-kit-input\",20)(2,tn,2,10,\"ui-kit-input\",21)(3,on,2,12,\"ui-kit-select\",22),E()),t&2){let a=r.$implicit;p(),l(\"ngIf\",We(3,Ko).includes(a.fieldType)),p(),l(\"ngIf\",a.fieldType===\"date\"),p(),l(\"ngIf\",a.fieldType===\"select\")}}function rn(t,r){if(t&1&&(B(0,18),C(1,nn,4,4,\"ng-container\",19),E()),t&2){let a=r.ngIf;p(),l(\"ngForOf\",a)}}function an(t,r){if(t&1&&(d(0,\"option\",32),T(1),s(2,\"orderRemindTime\"),h()),t&2){let a=r.$implicit;Pe(\"value\",a.value),p(),q(\" \",c(2,2,a.value),\" \")}}function sn(t,r){if(t&1&&(d(0,\"div\",26)(1,\"div\")(2,\"p\",27),T(3),s(4,\"translate\"),h(),d(5,\"p\",28),T(6),s(7,\"orderRemindTime\"),h()(),y(8,\"ui-kit-svg-icon\",29),d(9,\"select\",30),C(10,an,3,4,\"option\",31),h()()),t&2){let a=g();p(3),$(c(4,5,\"confirm.smsNotify\")),p(3),$(c(7,7,a.form==null||a.form.controls==null||a.form.controls.notifyBySms==null?null:a.form.controls.notifyBySms.value)),p(2),l(\"name\",\"forward\"),p(),S(\"data-locator\",\"remainder_select\"),p(),l(\"ngForOf\",a.remindTimeRange)}}var eo=(()=>{let r=class r{constructor(){o(this,\"pageName\");o(this,\"canShowTitle\",!0);o(this,\"form\");o(this,\"store\",f(z));o(this,\"router\",f(pe));o(this,\"route\",f(Pt));o(this,\"trackingService\",f(le));o(this,\"metrika\",f(wi));o(this,\"translate\",f(Me));o(this,\"facebookSDK\",f(di));o(this,\"capacitorService\",f(hi));o(this,\"paymentService\",f(j));o(this,\"cdr\",f(se));o(this,\"storeSnapshot\",f(J));o(this,\"widgetApiHelperService\",f(Mi));o(this,\"countriesSelectorsService\",f(ji));o(this,\"userRef\");o(this,\"location\",location);o(this,\"remindTimeRange\",ki.range);o(this,\"company$\",this.store.select(u.currentCompany.getCurrentCompany).pipe(K(1)));o(this,\"countries$\",this.store.select(u.countries.getCountries));o(this,\"bookFormId$\");o(this,\"lastRecord$\");o(this,\"selectedServices$\");o(this,\"selectedMaster$\");o(this,\"selectedDateTime$\");o(this,\"commentInputName\",\"\");o(this,\"facebookAppId$\",this.store.select(u.currentCompany.getFacebookAppId).pipe(ge(Boolean)));o(this,\"facebookPageId$\",this.store.select(u.currentCompany.getFacebookPageId).pipe(ge(Boolean)));o(this,\"defaultCountryCode$\",this.countriesSelectorsService.getDefaultCountryCode$(this.company$.pipe(O(e=>e.country_id))));o(this,\"destroy$\",new Q(1));o(this,\"userChangedPhone$\");o(this,\"defaultCommentFieldName\");o(this,\"customFieldsForm\",new tt({}));o(this,\"customFieldEntities$\",this.widgetApiHelperService.filteredByInjectionCustomFields.pipe(O(e=>{let i=e.filter(_=>_.chain_id),n=e.filter(_=>!_.chain_id).sort((_,v)=>v.weight-_.weight),m=i.reduce((_,v)=>(_[v.chain_id]||(_[v.chain_id]=[]),_[v.chain_id].push(v),_),{});return[...Object.values(m).reduce((_,v)=>(_=[..._,...v],_),[]),...n].map(_=>pt(ct({},_),{fieldType:_.fieldType}))})));o(this,\"dateInputPlaceholder$\",this.store.select(u.localization.getCurrentLoadedLanguage).pipe(O(e=>e===\"ru-RU\"?\"\\u0414\\u0414.\\u041C\\u041C.\\u0413\\u0413\\u0413\\u0413\":\"DD.MM.YYYY\"),K(1)))}ngOnInit(){this.userRef=gi(),this.defaultCommentFieldName=this.translate.instant(\"confirm.comment\"),this.sendPageViewEvent();let[e,i]=this.route.snapshot.data.userAndCompany;this.buildForm(e,i,this.route.snapshot.data.lastRecordData),this.customFieldEntities$.pipe(L(this.destroy$)).subscribe(n=>this.buildCustomFieldsForm(n,this.route.snapshot.data.lastRecordData)),this.bookFormId$=this.store.select(u.bookform.getBookformId),this.lastRecord$=this.store.select(u.user.getLastRecordData),this.selectedDateTime$=this.store.select(u.order.getSelectedDateTime),this.selectedServices$=this.store.select(u.order.getSelectedServices),this.selectedMaster$=this.store.select(u.order.getSelectedMaster),this.userChangedPhone$=this.store.select(u.user.getUser).pipe(O(n=>this.userChangedPhone(n))),this.company$.pipe(ge(),L(this.destroy$)).subscribe(n=>{this.commentInputName=(n==null?void 0:n.booking_comment_input_name)||this.defaultCommentFieldName,this.cdr.markForCheck()}),this.facebookAppId$.pipe(L(this.destroy$)).subscribe(n=>{this.facebookSDK.facebookInitializer(n)})}unloadAction(){this.saveLastRecordData(),this.store.dispatch(new Ze)}ngOnDestroy(){this.saveLastRecordData(),this.store.dispatch(new Ze),this.destroy$.next(),this.destroy$.complete()}ngAfterViewInit(){this.facebookSDK.facebookSDKLoaded.pipe(ge(Boolean),L(this.destroy$)).subscribe(()=>{window.FB.XFBML.parse()})}submit(e=!1){this.form.markAllAsTouched(),Object.values(this.form.controls).forEach(i=>i.updateValueAndValidity()),this.selectedDateTime$.pipe(R(1),L(this.destroy$)).subscribe(i=>{if(i){if(this.form.invalid){let m=document.getElementById(\"userForm\").getElementsByClassName(\"ng-invalid\")[0];m&&(m.scrollIntoView({behavior:\"smooth\",block:\"center\"}),m.focus());return}this.saveLastRecordData(),this.tryCreateRecord(e,this.getSendSubmitEventFunction(this.paymentService.isNeedPayCurrentOrder(),e,this.paymentService.allowedToUseAbonement$.value).bind(this))}})}buildForm(e,i,n){var st;let m=(st=n==null?void 0:n.userEmail)!=null?st:e==null?void 0:e.email,_=(n==null?void 0:n.userName)||(e==null?void 0:e.name),v=(n==null?void 0:n.surname)||\"\",A=(n==null?void 0:n.patronymic)||\"\",ie=(n==null?void 0:n.phone)||(e==null?void 0:e.phone),Z=(n==null?void 0:n.comment)||\"\",oe=(n==null?void 0:n.notifyBySms)||i.reminds_sms_default,po=new Y(m||\"\",i.booking_email_required?[H.email,H.required]:[H.email]),lo=new Y(_||\"\",[H.required,ve(this.translate.instant(\"confirm.errors.name.required\")),Ye(_,this.translate.instant(\"confirm.errors.name.pattern\"))]),rt=Ye(v,this.translate.instant(\"confirm.errors.surname.pattern\")),mo=new Y(v||\"\",i.booking_surname_required?[H.required,ve(this.translate.instant(\"confirm.errors.surname.required\")),rt]:[rt]),at=Ye(A,this.translate.instant(\"confirm.errors.patronymic.pattern\")),uo=new Y(A||\"\",i.booking_patronymic_required?[H.required,ve(this.translate.instant(\"confirm.errors.patronymic.required\")),at]:[at]),fo=new Y(ie||\"\",[H.required]),ho=new Y(Z,i.booking_comment_required?H.required:null),go=new Y(oe||\"0\");this.form.addControl(\"email\",po),this.form.addControl(\"fullname\",lo),this.form.addControl(\"surname\",mo),this.form.addControl(\"patronymic\",uo),this.form.addControl(\"phone\",fo),this.form.addControl(\"comment\",ho),this.form.addControl(\"notifyBySms\",go)}buildCustomFieldsForm(e=[],i){this.customFieldsForm=new tt({});let n=((i==null?void 0:i.customFields)||[]).reduce((v,A)=>(v[A.code]=A.value,v),{}),m=ai(this.translate.instant(\"confirm.errors.custom_fields.wrong_number\")),_=ve(this.translate.instant(\"confirm.errors.custom_fields.required\"));e.forEach(v=>{var oe;let A=[];v.fieldType===\"number\"&&A.push(m),v.is_required&&A.push(_);let ie=n[v.code]||\"\",Z=new Y((oe=v.defaultValue)!=null?oe:ie,A);this.customFieldsForm.addControl(v.code,Z)}),this.form.addControl(\"customFields\",this.customFieldsForm)}tryCreateRecord(e,i){U([this.company$,this.store.select(u.user.getUserToken),this.userChangedPhone$]).pipe(R(1),L(this.destroy$)).subscribe(v=>ne(this,[v],function*([n,m,_]){var A,ie;if(_&&this.store.dispatch(new Ft(!1)),!n.push_notification_phone_confirm){let Z=(ie=(A=this.form)==null?void 0:A.controls)==null?void 0:ie.phone,oe=Z==null?void 0:Z.value.replace(/\\D/gm,\"\");yield this.capacitorService.syncPushData(oe)}if(n.phone_confirmation&&n.sms_enabled&&(!m||_)){this.store.dispatch(new It(e,i)),this.router.navigate([\"order-confirmation\"],{queryParams:this.route.queryParams.getValue(),queryParamsHandling:\"merge\"});return}this.store.dispatch(new Ot(e,i))}))}userChangedPhone(e){if(!this.form)return!1;let i=this.form.controls.phone,n=i.value.replace(/\\D/gm,\"\"),m=e&&e.phone.replace(/\\D/gm,\"\")||\"\";return i.touched&&n!==m}sendPageViewEvent(){this.company$.pipe(L(this.destroy$)).subscribe(e=>{this.metrika.reachGoal(\"open_contacts\",{companyId:e.id,companyName:e.title}),this.trackingService.pageView(this.pageName||\"personal_info\")})}getSendSubmitEventFunction(e,i,n){return this.trackingService.track({type:W.Action.click,page:this.pageName?{name:this.pageName}:void 0,name:P.createRecord,element:{type:P.button,name:P.buttonNextStep,active:this.form.valid?1:0,value:e||i?1:0}}),m=>{let _=m.length>1?JSON.stringify({record_ids:m}):null;this.trackingService.track({type:P.createOrder,name:P.createOrder,element:{type:\"record_id\",id:m[0],name:P.buttonNextStep,active:this.form.valid?1:0,value:e||i?1:0},json:_}),i?this.trackingService.track({type:P.createOrderVoluntaryPrepaid,page:this.pageName?{name:this.pageName}:void 0,name:P.createOrderVoluntaryPrepaid,element:{type:P.button,name:P.buttonNextStep,id:m[0]},json:_}):e?this.trackingService.track({type:P.createOrderObligatoryPrepaid,page:this.pageName?{name:this.pageName}:void 0,name:P.createOrderObligatoryPrepaid,element:{type:P.button,name:P.buttonNextStep,id:m[0]},json:_}):this.trackingService.track({type:P.createOrderNotPrepaid,page:this.pageName?{name:this.pageName}:void 0,name:P.createOrderNotPrepaid,element:{type:P.button,name:P.buttonNextStep,value:0,id:m[0]},json:_}),n&&this.trackingService.track({type:P.createOrderAbonementPayment,name:P.createOrderAbonementPayment,element:{type:P.button,name:P.buttonNextStep,id:m[0]},json:_})}}saveLastRecordData(){var n,m;this.store.dispatch(new Nt(this.form.controls.phone.value));let i=this.storeSnapshot.selectSnapshot(u.customFields.fields).reduce((_,v)=>(_.push({code:v.code,value:this.customFieldsForm.value[v.code],resource:v.resource,fieldType:v.fieldType}),_),[]);this.store.dispatch(new Dt({userName:this.form.value.fullname||null,surname:this.form.value.surname||null,patronymic:this.form.value.patronymic||null,userEmail:this.form.value.email||\"\",phone:this.form.value.phone||null,comment:this.form.value.comment,notifyBySms:this.form.value.notifyBySms,userRef:this.userRef,allowFBMessages:this.facebookSDK.checkBoxStatusChecked,isNewsletterAllowed:(n=this.form.value.advertisementAgreement)!=null?n:null,isPersonalDataProcessingAllowed:(m=this.form.value.privacyPolicyAgreement)!=null?m:null,customFields:i}))}};o(r,\"\\u0275fac\",function(i){return new(i||r)}),o(r,\"\\u0275cmp\",I({type:r,selectors:[[\"app-user-info\"]],hostBindings:function(i,n){i&1&&k(\"beforeunload\",function(){return n.unloadAction()},!1,Se)},inputs:{pageName:\"pageName\",canShowTitle:\"canShowTitle\",form:\"form\"},decls:26,vars:57,consts:[[\"class\",\"title\",4,\"ngIf\"],[\"class\",\"line\",4,\"ngIf\"],[\"id\",\"userForm\",1,\"form\",3,\"paste\",\"formGroup\"],[\"uiKitTrimEndInput\",\"\",\"class\",\"form-input\",\"formControlName\",\"surname\",3,\"title\",\"placeholder\",\"type\",\"dataLocator\",\"dataLocatorError\",4,\"ngIf\"],[\"uiKitTrimEndInput\",\"\",\"formControlName\",\"fullname\",1,\"form-input\",3,\"title\",\"placeholder\",\"type\",\"dataLocator\",\"dataLocatorError\"],[\"uiKitTrimEndInput\",\"\",\"class\",\"form-input\",\"formControlName\",\"patronymic\",3,\"title\",\"placeholder\",\"type\",\"dataLocator\",\"dataLocatorError\",4,\"ngIf\"],[\"appPhoneNumberValidator\",\"\",\"formControlName\",\"phone\",\"type\",\"tel\",1,\"form-input\",3,\"defaultCountryCode\",\"title\",\"placeholder\",\"requiredErrorMessage\",\"maxLength\",\"dataLocator\",\"dataLocatorError\"],[\"class\",\"form-input\",\"formControlName\",\"email\",3,\"type\",\"placeholder\",\"title\",\"errorMessage\",\"dataLocator\",\"dataLocatorError\",4,\"ngIf\"],[\"class\",\"form-input\",\"type\",\"multiline\",\"formControlName\",\"comment\",3,\"dataLocator\",\"maxRows\",\"title\",\"placeholder\",\"dataLocatorTitle\",\"errorMessage\",\"dataLocatorError\",4,\"ngIf\"],[\"formGroupName\",\"customFields\",4,\"ngIf\"],[\"class\",\"remind-time\",4,\"ngIf\"],[1,\"fb-messenger-checkbox\"],[1,\"title\"],[1,\"line\"],[\"uiKitTrimEndInput\",\"\",\"formControlName\",\"surname\",1,\"form-input\",3,\"title\",\"placeholder\",\"type\",\"dataLocator\",\"dataLocatorError\"],[\"uiKitTrimEndInput\",\"\",\"formControlName\",\"patronymic\",1,\"form-input\",3,\"title\",\"placeholder\",\"type\",\"dataLocator\",\"dataLocatorError\"],[\"formControlName\",\"email\",1,\"form-input\",3,\"type\",\"placeholder\",\"title\",\"errorMessage\",\"dataLocator\",\"dataLocatorError\"],[\"type\",\"multiline\",\"formControlName\",\"comment\",1,\"form-input\",3,\"dataLocator\",\"maxRows\",\"title\",\"placeholder\",\"dataLocatorTitle\",\"errorMessage\",\"dataLocatorError\"],[\"formGroupName\",\"customFields\"],[4,\"ngFor\",\"ngForOf\"],[\"class\",\"form-input\",3,\"type\",\"title\",\"formControlName\",\"isRequired\",\"maxLength\",\"placeholder\",\"hideNumberSpinner\",\"hide-block\",4,\"ngIf\"],[\"uiKitDateInputMask\",\"DD.MM.YYYY\",\"autocomplete\",\"off\",\"type\",\"tel\",\"class\",\"form-input\",3,\"formControlName\",\"title\",\"maxLength\",\"placeholder\",\"isRequired\",\"hide-block\",4,\"ngIf\"],[\"class\",\"form-input\",3,\"formControlName\",\"title\",\"singleSelect\",\"options\",\"placeholder\",\"isRequired\",\"hide-block\",4,\"ngIf\"],[1,\"form-input\",3,\"type\",\"title\",\"formControlName\",\"isRequired\",\"maxLength\",\"placeholder\",\"hideNumberSpinner\"],[\"uiKitDateInputMask\",\"DD.MM.YYYY\",\"autocomplete\",\"off\",\"type\",\"tel\",1,\"form-input\",3,\"formControlName\",\"title\",\"maxLength\",\"placeholder\",\"isRequired\"],[1,\"form-input\",3,\"formControlName\",\"title\",\"singleSelect\",\"options\",\"placeholder\",\"isRequired\"],[1,\"remind-time\"],[1,\"label\"],[1,\"remind-time__value\"],[\"role\",\"button\",1,\"forward\",3,\"name\"],[\"formControlName\",\"notifyBySms\",1,\"base-text\"],[3,\"value\",4,\"ngFor\",\"ngForOf\"],[3,\"value\"]],template:function(i,n){if(i&1&&(C(0,Yo,3,3,\"div\",0)(1,Qo,1,0,\"div\",1),d(2,\"form\",2),k(\"paste\",function(){return n.form.updateValueAndValidity()}),C(3,Wo,3,9,\"ui-kit-form-input\",3),s(4,\"async\"),y(5,\"ui-kit-form-input\",4),s(6,\"translate\"),s(7,\"translate\"),C(8,Jo,3,9,\"ui-kit-form-input\",5),s(9,\"async\"),y(10,\"ui-kit-form-input\",6),s(11,\"async\"),s(12,\"translate\"),s(13,\"translate\"),s(14,\"translate\"),C(15,Xo,4,12,\"ui-kit-form-input\",7),s(16,\"async\"),C(17,Zo,3,11,\"ui-kit-form-input\",8),s(18,\"async\"),C(19,rn,2,1,\"ng-container\",9),s(20,\"async\"),C(21,sn,11,9,\"div\",10),s(22,\"async\"),y(23,\"div\",11),s(24,\"async\"),s(25,\"async\"),h()),i&2){let m;l(\"ngIf\",n.canShowTitle),p(),l(\"ngIf\",n.canShowTitle),p(),l(\"formGroup\",n.form),p(),l(\"ngIf\",c(4,29,n.company$).is_surname_field_enabled),p(2),l(\"title\",c(6,31,\"confirm.first_name\"))(\"placeholder\",c(7,33,\"user-data-form.terms.name\"))(\"type\",\"text\")(\"dataLocator\",\"name_input\")(\"dataLocatorError\",\"name_validation_text\"),p(3),l(\"ngIf\",c(9,35,n.company$).is_patronymic_field_enabled),p(2),l(\"defaultCountryCode\",c(11,37,n.defaultCountryCode$))(\"title\",c(12,39,\"confirm.phone\"))(\"placeholder\",c(13,41,\"user-data-form.terms.phone\"))(\"requiredErrorMessage\",c(14,43,\"confirm.errors.phone.required\"))(\"maxLength\",20)(\"dataLocator\",\"phone_input\")(\"dataLocatorError\",\"phone_validation_text\"),p(5),l(\"ngIf\",c(16,45,n.company$).booking_email_hidden!==!0),p(2),l(\"ngIf\",c(18,47,n.company$).booking_comment_hidden!==!0),p(2),l(\"ngIf\",c(20,49,n.customFieldEntities$)),p(2),l(\"ngIf\",!((m=c(22,51,n.company$))!=null&&m.reminds_sms_disabled)),p(2),S(\"origin\",n.location.hostname)(\"page_id\",c(24,53,n.facebookPageId$))(\"messenger_app_id\",c(25,55,n.facebookAppId$))(\"user_ref\",n.userRef)(\"allow_login\",!0)(\"size\",\"medium\")(\"skin\",\"light\")(\"center_align\",!1)}},dependencies:[ce,N,qi,Zt,ti,oi,ni,Zi,me,jt,Qt,Wt,Yt,Rt,zt,qt,Gt,Kt,F,M,xi],styles:['@charset \"UTF-8\";.title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}.line[_ngcontent-%COMP%]{padding-top:12px;margin:0 -16px;border-bottom:1px solid var(--widget-ui-kit-color-color_grey_03)}.form[_ngcontent-%COMP%]{padding-top:12px}.hide-block[_ngcontent-%COMP%]{display:none!important}.form-input[_ngcontent-%COMP%]:not(:first-child){margin-top:16px;display:block}.forward[_ngcontent-%COMP%]{font-size:24px;color:var(--widget-ui-kit-color-icons-secondary-text)}.remind-time[_ngcontent-%COMP%]{position:relative;margin-top:16px;display:flex;justify-content:space-between;align-items:center}.remind-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:var(--widget-ui-kit-color-secondary-text);margin-bottom:6px}.remind-time__value[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black)}.remind-time[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;position:absolute;top:0;left:0;right:0;bottom:0;width:100%;opacity:0}'],changeDetection:0}));let t=r;return t})();var to=(()=>{let r=class r{constructor(e){o(this,\"modalService\");o(this,\"companyName\",\"\");this.modalService=e}onCancel(){this.modalService.closeModal()}};o(r,\"\\u0275fac\",function(i){return new(i||r)(ae(Ae))}),o(r,\"\\u0275cmp\",I({type:r,selectors:[[\"app-checkout-footer-checkboxes-company-modal\"]],inputs:{companyName:\"companyName\"},decls:9,vars:7,consts:[[1,\"container\"],[1,\"title\"],[1,\"company-name\"],[1,\"cancel-button\",3,\"click\"]],template:function(i,n){i&1&&(d(0,\"div\",0)(1,\"span\",1),T(2),s(3,\"translate\"),h(),d(4,\"span\",2),T(5),h(),d(6,\"ui-kit-button\",3),k(\"click\",function(){return n.onCancel()}),T(7),s(8,\"translate\"),h()()),i&2&&(p(2),$(c(3,3,\"user-data-form.checkbox.legal-name\")),p(3),$(n.companyName),p(2),$(c(8,5,\"service.got_it\")))},dependencies:[$e,M],styles:[\"[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 16px 16px;align-items:center}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:24px}[_nghost-%COMP%]   .company-name[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:8px}[_nghost-%COMP%]   .cancel-button[_ngcontent-%COMP%]{width:100%;margin-top:40px}\"]}));let t=r;return t})();function ln(t,r){if(t&1){let a=w();d(0,\"app-checkbox-with-text\",3),s(1,\"async\"),k(\"textItemClick\",function(i){x(a);let n=g();return b(n.onLicenseTextClick(i))}),h()}if(t&2){let a=g();l(\"checkboxControl\",a.advertisementCheckboxControl)(\"textBlockTemplate\",c(1,3,a.advertisementCheckboxTranslationText$))(\"checkboxDataLocator\",\"advertisement_checkbox\")}}function mn(t,r){if(t&1){let a=w();d(0,\"app-checkbox-with-text\",4),s(1,\"translate\"),s(2,\"async\"),k(\"textItemClick\",function(i){x(a);let n=g();return b(n.onLicenseTextClick(i))}),h()}if(t&2){let a=g();l(\"checkboxControl\",a.privacyPolicyControl)(\"errorMessage\",c(1,4,\"user-data-form.checkbox-error-message\"))(\"textBlockTemplate\",c(2,6,a.privacyPolicyCheckboxTranslationText$))(\"checkboxDataLocator\",\"agreement_checkbox\")}}function dn(t,r){if(t&1){let a=w();d(0,\"app-plain-modal\",5),s(1,\"translate\"),s(2,\"async\"),k(\"closeModal\",function(){x(a);let i=g();return b(i.personalDataIsOpen=!1)}),h()}if(t&2){let a=g();l(\"title\",c(1,5,\"data-processing\"))(\"htmlMarkup\",c(2,7,a.personalDataDocument$))(\"closeButtonDataLocator\",\"close_privacy_agreement_popup_btn\")(\"agreementTextDataLocator\",\"privacy_agreement_text\"),S(\"data-locator\",\"privacy_agreement_popup\")}}var io=(()=>{let r=class r{constructor(){o(this,\"advertisementCheckboxControl\");o(this,\"privacyPolicyControl\");o(this,\"store\",f(z));o(this,\"translatePipe\",f(M));o(this,\"modalService\",f(Ae));o(this,\"cdr\",f(se));o(this,\"destroy$\",new Q(1));o(this,\"termsOfUseDomainLinks$\",this.store.select(u.bookform.getBookformBrandAgreementLinks));o(this,\"agreementLegalEntity$\",this.store.select(u.currentCompany.getPersonalDataLegalEntityName));o(this,\"personalTaxNumber$\",this.store.select(u.currentCompany.getPersonalTaxReferenceNumber));o(this,\"privacyPolicyCheckboxTranslationText$\",this.getTranslationTextByTemplate(\"user-data-form.checkbox.agreement_tin\"));o(this,\"advertisementCheckboxTranslationText$\",this.getTranslationTextByTemplate(\"user-data-form.checkbox.agreement_advertisement_tin\"));o(this,\"personalDataIsOpen\",!1);o(this,\"personalDataDocument$\",this.store.select(u.currentCompany.getPersonalDataDocument))}getTranslationTextByTemplate(e){return U([this.agreementLegalEntity$,this.termsOfUseDomainLinks$,this.personalTaxNumber$]).pipe(O(([i,,n])=>{let m=this.translatePipe.transform(\"user-data-form.checkbox.privacy-policy\"),_=this.translatePipe.transform(\"user-data-form.checkbox.personal-data-agreement-new\"),v=this.translatePipe.transform(\"user-data-form.checkbox.user-agreement\"),A=this.translatePipe.transform(\"user-data-form.checkbox.tin\");return this.translatePipe.transform(e,{personal_data_agreement:'<span id=\"personal_data\" class=\"text-highlight\" data-locator=\"privacy_agreement_link\">'.concat(_,\"</span>\"),privacy_policy:'<span id=\"privacy_policy\" class=\"text-highlight\" data-locator=\"confidentiality_terms_link\">'.concat(m,\"</span>\"),user_agreement:'<span id=\"user_agreement\" class=\"text-highlight\" data-locator=\"user_agreement_link\">'.concat(v,\"</span>\"),agreement_legal_entity:i,tin:'<span id=\"tin\" class=\"text-highlight\" data-locator=\"tin_link\">'.concat(A,\" \").concat(n,\"</span>\")})}))}onLicenseTextClick(e){this.termsOfUseDomainLinks$.pipe(R(1),Ce(this.agreementLegalEntity$),L(this.destroy$)).subscribe(([i,n])=>{let m=e.target.id;m===\"privacy_policy\"&&this.openLinkOnNewTab(i.user_confidentiality_link),m===\"user_agreement\"&&this.openLinkOnNewTab(i.user_agreement_link),m===\"personal_data\"&&(this.personalDataIsOpen=!0,this.cdr.detectChanges()),m===\"tin\"&&this.modalService.openModal({component:to,componentData:{companyName:n},params:{modalType:ii.default,ignoreOutsideClick:!1}})})}openLinkOnNewTab(e){var i;we(e)&&((i=window.open(e,\"_blank\"))==null||i.focus())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};o(r,\"\\u0275fac\",function(i){return new(i||r)}),o(r,\"\\u0275cmp\",I({type:r,selectors:[[\"app-checkout-footer-policy-checkboxes\"]],inputs:{advertisementCheckboxControl:\"advertisementCheckboxControl\",privacyPolicyControl:\"privacyPolicyControl\"},decls:3,vars:3,consts:[[3,\"checkboxControl\",\"textBlockTemplate\",\"checkboxDataLocator\",\"textItemClick\",4,\"ngIf\"],[\"class\",\"privacy-checkbox\",3,\"checkboxControl\",\"errorMessage\",\"textBlockTemplate\",\"checkboxDataLocator\",\"textItemClick\",4,\"ngIf\"],[3,\"title\",\"htmlMarkup\",\"closeButtonDataLocator\",\"agreementTextDataLocator\",\"closeModal\",4,\"ngIf\"],[3,\"textItemClick\",\"checkboxControl\",\"textBlockTemplate\",\"checkboxDataLocator\"],[1,\"privacy-checkbox\",3,\"textItemClick\",\"checkboxControl\",\"errorMessage\",\"textBlockTemplate\",\"checkboxDataLocator\"],[3,\"closeModal\",\"title\",\"htmlMarkup\",\"closeButtonDataLocator\",\"agreementTextDataLocator\"]],template:function(i,n){i&1&&C(0,ln,2,5,\"app-checkbox-with-text\",0)(1,mn,3,8,\"app-checkbox-with-text\",1)(2,dn,3,9,\"app-plain-modal\",2),i&2&&(l(\"ngIf\",n.advertisementCheckboxControl),p(),l(\"ngIf\",n.privacyPolicyControl),p(),l(\"ngIf\",n.personalDataIsOpen))},dependencies:[N,Xt,Le,F,M],styles:['@charset \"UTF-8\";.privacy-checkbox[_ngcontent-%COMP%]{display:block;margin-top:16px;margin-bottom:12px}'],changeDetection:0}));let t=r;return t})();var oo=(()=>{let r=class r{constructor(){o(this,\"store\",f(z));o(this,\"translatePipe\",f(M));o(this,\"paymentService\",f(j));o(this,\"destroy$\",new Q(1));o(this,\"termsOfUseDomainLinks$\",this.store.select(u.bookform.getBookformBrandAgreementLinks));o(this,\"privacyPolicyTextTranslation$\",this.termsOfUseDomainLinks$.pipe(O(()=>{let e=this.translatePipe.transform(\"user-data-form.checkbox.privacy-policy\"),i=this.translatePipe.transform(\"user-data-form.checkbox.personal-data-agreement-new\"),n=this.translatePipe.transform(\"user-data-form.checkbox.user-agreement\"),m=this.paymentService.isNeedPayCurrentOrder()?this.translatePipe.transform(\"user-data-form.pay\"):this.translatePipe.transform(\"confirm.confirm\");return this.translatePipe.transform(\"user-data-form.checkbox.agreement_full_new\",{personal_data_agreement:'<span data-locator=\"privacy_agreement_link\">'.concat(i,\"</span>\"),privacy_policy:'<span id=\"privacy_policy\" class=\"text-highlight\" data-locator=\"confidentiality_terms_link\">'.concat(e,\"</span>\"),user_agreement:'<span id=\"user_agreement\" class=\"text-highlight\" data-locator=\"user_agreement_link\">'.concat(n,\"</span>\"),agreement_action:m})})))}onLicenseTextClick(e){this.termsOfUseDomainLinks$.pipe(R(1),L(this.destroy$)).subscribe(i=>{let n=e.target.id;n===\"privacy_policy\"&&this.openLinkOnNewTab(i.user_confidentiality_link),n===\"user_agreement\"&&this.openLinkOnNewTab(i.user_agreement_link)})}openLinkOnNewTab(e){var i;we(e)&&((i=window.open(e,\"_blank\"))==null||i.focus())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};o(r,\"\\u0275fac\",function(i){return new(i||r)}),o(r,\"\\u0275cmp\",I({type:r,selectors:[[\"app-checkout-footer-policy-text\"]],decls:3,vars:4,consts:[[1,\"privacy-policy-block\"],[3,\"itemClick\",\"template\",\"textDataLocator\"]],template:function(i,n){i&1&&(d(0,\"div\",0)(1,\"app-text-by-template\",1),s(2,\"async\"),k(\"itemClick\",function(_){return n.onLicenseTextClick(_)}),h()()),i&2&&(p(),l(\"template\",c(2,2,n.privacyPolicyTextTranslation$))(\"textDataLocator\",\"agreement_license_text\"))},dependencies:[Vt,F],styles:['@charset \"UTF-8\";[_nghost-%COMP%]   .privacy-policy-block[_ngcontent-%COMP%]{margin-top:12px}[_nghost-%COMP%]   .privacy-policy-block[_ngcontent-%COMP%]     .license{color:var(--widget-ui-kit-color-color_grey_dark)}[_nghost-%COMP%]   .privacy-policy-block[_ngcontent-%COMP%]     .text-highlight{color:var(--widget-ui-kit-color-color_text_black);cursor:pointer}'],changeDetection:0}));let t=r;return t})();function hn(t,r){if(t&1){let a=w();d(0,\"app-group-checkout-data\",23),k(\"editActivity\",function(){x(a);let i=g(3);return b(i.goToEditActivity())})(\"deselectActivity\",function(i){let n=x(a).ngIf,m=g(3);return b(m.deselectActivity(i,n.datesInfo.length===1))}),h()}if(t&2){let a=r.ngIf;l(\"selectedGroupedActivityInfo\",a)}}function gn(t,r){if(t&1&&(B(0),C(1,hn,1,1,\"app-group-checkout-data\",22),s(2,\"async\"),E()),t&2){let a=g(2);p(),l(\"ngIf\",c(2,1,a.selectedGroupedActivityInfo$))}}function _n(t,r){if(t&1&&(y(0,\"app-old-group-checkout-data\",24),s(1,\"async\"),s(2,\"async\"),s(3,\"async\"),s(4,\"async\")),t&2){let a,e=g(2);l(\"selectedBookTime\",c(1,4,e.selectedTime$))(\"master\",(a=c(2,6,e.selectedMasters$))==null?null:a[0])(\"services\",c(3,8,e.selectedServices$))(\"company\",c(4,10,e.company$))}}function yn(t,r){if(t&1&&(B(0),C(1,gn,3,3,\"ng-container\",6),s(2,\"async\"),C(3,_n,5,12,\"ng-template\",null,2,Je),E()),t&2){let a=te(4),e=g();p(),l(\"ngIf\",!c(2,2,e.useOldCheckout$))(\"ngIfElse\",a)}}function vn(t,r){if(t&1&&(y(0,\"app-individual-checkout-data\",25),s(1,\"async\"),s(2,\"async\"),s(3,\"async\"),s(4,\"async\"),s(5,\"async\")),t&2){let a=g();l(\"selectedBookTime\",c(1,5,a.selectedTime$))(\"staffs\",c(2,7,a.selectedMasters$))(\"services\",c(3,9,a.selectedServices$))(\"company\",c(4,11,a.company$))(\"editable\",!c(5,13,a.areCompositeServicesEnabled$))}}function Cn(t,r){if(t&1&&y(0,\"app-privacy-policy-checkbox\",26),t&2){let a=g();l(\"checkboxControl\",a.fakePrivacyControl)(\"textLocator\",\"agreement_license_text\")}}function kn(t,r){if(t&1&&(d(0,\"app-substrate\",27)(1,\"app-collapsed-text\",28),y(2,\"ui-kit-svg-icon\",29),h()()),t&2){let a=r.ngIf;p(),l(\"text\",a),p(),l(\"name\",\"bell\"),S(\"data-locator\",\"bell_icon\")}}function xn(t,r){if(t&1){let a=w();d(0,\"ui-kit-switch\",30),k(\"checkedChange\",function(i){x(a);let n=g();return b(n.setAllowedToPayStatus(i))}),d(1,\"div\",31),T(2),s(3,\"translate\"),h()()}t&2&&(p(),S(\"data-locator\",\"optional_payment_toggle_title\"),p(),q(\" \",c(3,2,\"user-data-form.pay-online\"),\" \"))}function bn(t,r){if(t&1){let a=w();d(0,\"ui-kit-switch\",32),k(\"ngInit\",function(){x(a);let i=g();return b(i.trackAbonementToggleView())})(\"checkedChange\",function(i){x(a);let n=g();return b(n.setAllowedToUseAbonement(i))}),d(1,\"div\",33)(2,\"div\",34),y(3,\"ui-kit-svg-icon\",35),h(),d(4,\"div\",31),T(5),s(6,\"translate\"),h()()()}t&2&&(p(3),l(\"name\",\"order/abonement-pay\"),p(2),q(\" \",c(6,2,\"user-data-form.use-membership\"),\" \"))}function Sn(t,r){if(t&1&&y(0,\"app-checkout-footer-policy-checkboxes\",36),t&2){let a=g();l(\"advertisementCheckboxControl\",a.advertisementControl)(\"privacyPolicyControl\",a.privacyPolicyControl)}}function Pn(t,r){if(t&1){let a=w();d(0,\"ui-kit-button\",37),k(\"click\",function(){x(a);let i=g(),n=te(11);return b(i.submitRecord(n,!0))})(\"keydown.enter\",function(){x(a);let i=g(),n=te(11);return b(i.submitRecord(n,!0))}),y(1,\"div\",20),h()}if(t&2){let a=r.ngIf;p(),l(\"innerHtml\",a,ye)}}function Tn(t,r){t&1&&y(0,\"app-checkout-footer-policy-text\",38)}var no=(()=>{let r=class r{constructor(){o(this,\"store\",f(z));o(this,\"paymentService\",f(j));o(this,\"storeSnapshotService\",f(J));o(this,\"translatePipe\",f(M));o(this,\"activityNavigation\",f(Bi));o(this,\"navigationService\",f(ze));o(this,\"trackingService\",f(le));o(this,\"actions$\",f(li));o(this,\"appNavigationService\",f(He));o(this,\"buttonType\",ci);o(this,\"pageName\",ot.personalInfo);o(this,\"isActivityOrder$\",this.store.select(u.order.isActivityOrder));o(this,\"selectedGroupedActivityInfo$\",this.store.select(u.order.getSelectedGroupedActivityInfo).pipe(K({refCount:!0,bufferSize:1})));o(this,\"useOldCheckout$\",U([this.store.select(u.order.getIsMultipleActivityEnabled),this.selectedGroupedActivityInfo$]).pipe(O(([e,i])=>!(e&&(i==null?void 0:i.datesInfo.length)>1))));o(this,\"isSubmitButtonDisabled$\",U([this.isActivityOrder$,this.selectedGroupedActivityInfo$]).pipe(O(([e,i])=>e&&(i==null?void 0:i.datesInfo.some(n=>n.spotsCapacity===0)))));o(this,\"selectedMasters$\",this.store.select(u.order.getSelectedMasters).pipe(K({refCount:!0,bufferSize:1})));o(this,\"selectedServices$\",this.store.select(u.order.getSelectedServices).pipe(K({refCount:!0,bufferSize:1})));o(this,\"showAbonementToggle$\",this.selectedServices$.pipe(O(e=>this.paymentService.hasPayServices(e)&&this.paymentService.hasServicesAbonementRestriction(e))));o(this,\"selectedTime$\",U([this.store.select(u.order.getSelectedDateTime),this.store.select(u.order.getSelectedServices)]).pipe(O(([e,i])=>{let n=i.reduce((m,_)=>m+(_.seance_length||0),0);return{datetime:e,seance_length:n}})));o(this,\"company$\",this.store.select(u.currentCompany.getCurrentCompany));o(this,\"bookingNotifyText$\",this.store.select(u.currentCompany.getBookingNotifyText));o(this,\"isClientAgreementsFeatureEnabled\",!!this.storeSnapshotService.selectSnapshot(u.currentCompany.getClientAgreementsFeatureEnabled)&&!!this.storeSnapshotService.selectSnapshot(u.currentCompany.getPersonalDataLegalEntityName)&&!!this.storeSnapshotService.selectSnapshot(u.currentCompany.getPersonalTaxReferenceNumber));o(this,\"userInfoForm\",(()=>{let e=new Ht({});return this.isClientAgreementsFeatureEnabled?this.storeSnapshotService.selectSnapshot(u.currentCompany.getPersonalDataProcessingEnabled)&&(e.addControl(\"privacyPolicyAgreement\",new Be(!1,[H.requiredTrue])),e.addControl(\"advertisementAgreement\",new Be(!1))):e.addControl(\"fakePrivacyControl\",new Be(!1,[H.requiredTrue])),e})());o(this,\"areCompositeServicesEnabled$\",this.store.select(u.order.getAreCompositeServicesEnabled));o(this,\"needClearAppointmentInfo\",!0);o(this,\"isSeparatePayButtonEnabled$\",this.store.select(u.bookform.getIsSeparatePayButtonEnabled).pipe(K({refCount:!0,bufferSize:1})));o(this,\"isOptionalPaymentAvailable$\",U([this.selectedServices$,this.selectedMasters$,this.company$,this.selectedGroupedActivityInfo$]).pipe(O(([e,i,n,m])=>m!=null&&m.datesInfo&&m.datesInfo.length>1||!n.is_charge_optional||this.paymentService.orderAbonementRestrictionRequired()||!e.filter(v=>v.prepaid!==et.REQUIRED&&v.price_min!==0).length||i.some(v=>v.prepaid===Lt.REQUIRED)?!1:!(e.some(v=>v.isActivity)&&e.some(v=>v.prepaid===et.REQUIRED))),K({refCount:!0,bufferSize:1})));o(this,\"showOptionalToggle$\",this.isSeparatePayButtonEnabled$.pipe(_e(e=>e?he(!1):this.isOptionalPaymentAvailable$)));o(this,\"separatePayButtonLabel$\",this.isSeparatePayButtonEnabled$.pipe(_e(e=>e?this.isOptionalPaymentAvailable$.pipe(O(i=>(this.showPaymentFullTimeInMinutes$.next(i),i?this.translatePipe.transform(\"user-data-form.pay-online-dynamic\",{amount:'\\n              <span class=\"payment-amount\">\\n                  '.concat(this.paymentService.getPrepaidCost(!0),\"\\n              </span>\\n            \")}):\"\"))):he(\"\")),K({refCount:!0,bufferSize:1})));o(this,\"defaultConfirmLabel$\",U([this.paymentService.allowedToPayStatus$,this.paymentService.allowedToUseAbonement$,this.store.select(u.order.getSelectedServices)]).pipe(O(()=>{this.paymentService.updateServicesForPay();let e=this.paymentService.isNeedPayCurrentOrder();return this.showPaymentFullTimeInMinutes$.next(e),e?this.translatePipe.transform(\"user-data-form.pay\")+\"\\xA0\"+this.paymentService.getPaidStatus().amountLocalizedString:this.translatePipe.transform(\"confirm.confirm\")})));o(this,\"continueButtonLabel$\",this.separatePayButtonLabel$.pipe(_e(e=>{if(!e)return this.defaultConfirmLabel$;let i=this.paymentService.getPrepaidCost();return i?(this.showPaymentFullTimeInMinutes$.next(!0),he(this.translatePipe.transform(\"user-data-form.prepay-online-dynamic\",{amount:'\\n              <span class=\"payment-amount\">\\n                  '.concat(i,\"\\n              </span>\\n            \")}))):he(this.translatePipe.transform(\"user-data-form.pay-after\"))})));o(this,\"showPaymentFullTimeInMinutes$\",new lt(!1));o(this,\"paymentFullTimeInMinutes$\",this.showPaymentFullTimeInMinutes$.asObservable().pipe(Ce(this.store.select(u.currentCompany.getPrepaymentDurationInMs)),O(([e,i])=>e?Math.round(i/60/1e3):void 0)));o(this,\"loadingBenchmarksDirective\",f(je,{self:!0}));o(this,\"destroy$\",new Q(1));o(this,\"buildAbsoluteSuccessOrderPath\",yi);this.loadingBenchmarksDirective.appLoadingBenchmarks=[\"booking_checkout_page_open_cold\",\"booking_checkout_page_open\"],this.loadingBenchmarksDirective.dataSource=this.actions$.pipe(mi(wt))}get fakePrivacyControl(){return this.userInfoForm.get(\"fakePrivacyControl\")}get privacyPolicyControl(){return this.userInfoForm.get(\"privacyPolicyAgreement\")}get advertisementControl(){return this.userInfoForm.get(\"advertisementAgreement\")}ngOnInit(){this.isActivityOrder$.pipe(ee(e=>!e),_e(()=>this.store.select(u.order.getIsIndividualRecordFilled).pipe(ee(Boolean),ut(),ft(()=>{this.store.dispatch(new Et)}))),L(this.destroy$)).subscribe()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.trackingService.trackBenchmark(it.end(\"booking_page_pass_checkout\")),this.needClearAppointmentInfo&&this.store.dispatch(new At),this.paymentService.setAllowedToUseAbonement(!1)}goBack(){return ne(this,null,function*(){if(it.start(\"booking_magic\"),yield $t(this.store.select(u.order.isActivityOrder))){this.activityNavigation.navigateBack();return}if(this.navigationService.repeatRecordActive){this.appNavigationService.goBack({url:\"/profile/record/records\"});return}yield this.navigationService.navigateBack()})}setAllowedToPayStatus(e){this.trackingService.track({type:W.Action.click,element:{type:\"button\",name:\"optional_online_payment_toggle\",value:e?1:0}}),this.paymentService.setAllowedToPayStatus(e)}setAllowedToUseAbonement(e){this.trackingService.track({type:W.Action.click,element:{type:\"button\",name:\"abonement_payment_toggle\",value:e?1:0}}),this.paymentService.setAllowedToUseAbonement(e)}trackAbonementToggleView(){this.trackingService.track({type:W.Action.view,element:{name:\"abonement_payment_toggle\"}})}submitRecord(e,i=!1){this.needClearAppointmentInfo=!1,e.submit(i)}deselectActivity(e,i=!1){this.store.dispatch(new Bt(e)),i&&this.activityNavigation.returnToSelectActivities()}goToEditActivity(){this.activityNavigation.goToEditActivities()}};o(r,\"\\u0275fac\",function(i){return new(i||r)}),o(r,\"\\u0275cmp\",I({type:r,selectors:[[\"app-checkout\"]],features:[gt([{directive:je,inputs:[\"appLoadingBenchmarks\",\"appLoadingBenchmarks\",\"dataSource\",\"dataSource\"]}])],decls:40,vars:61,consts:[[\"individualCheckoutData\",\"\"],[\"userInfoComponent\",\"\"],[\"oldGroupCheckout\",\"\"],[\"theme\",\"primary\",3,\"backClick\",\"isBackButton\",\"isTitleChevronArrow\"],[\"theme\",\"primary\",1,\"header-addition\",3,\"title\"],[1,\"record-info-block\",3,\"cutType\"],[4,\"ngIf\",\"ngIfElse\"],[1,\"user-info-block\"],[3,\"pageName\",\"canShowTitle\",\"form\"],[\"class\",\"privacy-policy-checkbox\",3,\"checkboxControl\",\"textLocator\",4,\"ngIf\"],[\"class\",\"notify-text-block\",4,\"ngIf\"],[1,\"record-total-block\"],[3,\"checkedChange\",4,\"ngIf\"],[3,\"ngInit\",\"checkedChange\",4,\"ngIf\"],[1,\"total-cost\",3,\"totalCost\",\"prepaidCost\",\"totalText\",\"prepaidText\",\"paidText\"],[1,\"footer-block\",3,\"paymentFullTimeInMinutes\"],[\"topContent\",\"\",3,\"advertisementCheckboxControl\",\"privacyPolicyControl\",4,\"ngIf\"],[\"midContent\",\"\",3,\"routerLink\",\"skipNavigation\"],[\"class\",\"forced-pay-button\",3,\"click\",\"keydown.enter\",4,\"ngIf\"],[3,\"click\",\"keydown.enter\",\"type\"],[3,\"innerHtml\"],[\"bottomContent\",\"\",4,\"ngIf\"],[3,\"selectedGroupedActivityInfo\",\"editActivity\",\"deselectActivity\",4,\"ngIf\"],[3,\"editActivity\",\"deselectActivity\",\"selectedGroupedActivityInfo\"],[3,\"selectedBookTime\",\"master\",\"services\",\"company\"],[3,\"selectedBookTime\",\"staffs\",\"services\",\"company\",\"editable\"],[1,\"privacy-policy-checkbox\",3,\"checkboxControl\",\"textLocator\"],[1,\"notify-text-block\"],[3,\"text\"],[\"beforeText\",\"\",3,\"name\"],[3,\"checkedChange\"],[1,\"title\"],[3,\"ngInit\",\"checkedChange\"],[1,\"abonement-toggle\"],[1,\"icon-container\"],[3,\"name\"],[\"topContent\",\"\",3,\"advertisementCheckboxControl\",\"privacyPolicyControl\"],[1,\"forced-pay-button\",3,\"click\",\"keydown.enter\"],[\"bottomContent\",\"\"]],template:function(i,n){if(i&1){let m=w();d(0,\"app-header\",3),k(\"backClick\",function(){return x(m),b(n.goBack())}),h(),d(1,\"div\"),y(2,\"app-header-addition\",4),s(3,\"translate\"),d(4,\"app-substrate\",5),C(5,yn,5,4,\"ng-container\",6),s(6,\"async\"),C(7,vn,6,15,\"ng-template\",null,0,Je),h(),d(9,\"app-substrate\",7),y(10,\"app-user-info\",8,1),C(12,Cn,1,2,\"app-privacy-policy-checkbox\",9),h(),C(13,kn,3,3,\"app-substrate\",10),s(14,\"async\"),d(15,\"app-substrate\",11),C(16,xn,4,4,\"ui-kit-switch\",12),s(17,\"async\"),C(18,bn,7,4,\"ui-kit-switch\",13),s(19,\"async\"),y(20,\"ui-kit-total-cost\",14),s(21,\"async\"),s(22,\"async\"),s(23,\"translate\"),s(24,\"translate\"),s(25,\"translate\"),h(),d(26,\"app-record-page-footer\",15),s(27,\"async\"),C(28,Sn,1,2,\"app-checkout-footer-policy-checkboxes\",16),d(29,\"div\",17),s(30,\"async\"),C(31,Pn,2,1,\"ui-kit-button\",18),s(32,\"async\"),d(33,\"ui-kit-button\",19),s(34,\"async\"),k(\"click\",function(){x(m);let v=te(11);return b(n.submitRecord(v))})(\"keydown.enter\",function(){x(m);let v=te(11);return b(n.submitRecord(v))}),y(35,\"div\",20),s(36,\"async\"),s(37,\"uiKitSafeHtml\"),h()(),C(38,Tn,1,0,\"app-checkout-footer-policy-text\",21),h()(),y(39,\"router-outlet\")}if(i&2){let m=te(8);l(\"isBackButton\",!0)(\"isTitleChevronArrow\",!0),p(2),Pe(\"title\",c(3,29,\"confirm.booking_details\")),p(2),l(\"cutType\",\"cut-top\"),p(),l(\"ngIf\",c(6,31,n.isActivityOrder$))(\"ngIfElse\",m),p(5),l(\"pageName\",n.pageName)(\"canShowTitle\",!0)(\"form\",n.userInfoForm),p(2),l(\"ngIf\",n.fakePrivacyControl),p(),l(\"ngIf\",c(14,33,n.bookingNotifyText$)),p(3),l(\"ngIf\",c(17,35,n.showOptionalToggle$)),p(2),l(\"ngIf\",c(19,37,n.showAbonementToggle$)),p(2),l(\"totalCost\",c(21,39,n.paymentService.totalCost$))(\"prepaidCost\",c(22,41,n.paymentService.getPrepaidCost$()))(\"totalText\",c(23,43,\"service.price_total\"))(\"prepaidText\",c(24,45,\"prepaid.prepaid\"))(\"paidText\",c(25,47,\"loyalty.paid_amount\")),p(6),l(\"paymentFullTimeInMinutes\",c(27,49,n.paymentFullTimeInMinutes$)),p(2),l(\"ngIf\",n.isClientAgreementsFeatureEnabled),p(),G(\"submit-disabled\",c(30,51,n.isSubmitButtonDisabled$)),l(\"routerLink\",\"/\"+n.buildAbsoluteSuccessOrderPath(0,0))(\"skipNavigation\",!0),p(2),l(\"ngIf\",c(32,53,n.separatePayButtonLabel$)),p(2),l(\"type\",c(34,55,n.separatePayButtonLabel$)?n.buttonType.tertiary:n.buttonType.primary),S(\"data-locator\",\"make_booking_btn\"),p(2),l(\"innerHtml\",c(37,59,c(36,57,n.continueButtonLabel$)),ye),p(3),l(\"ngIf\",n.isClientAgreementsFeatureEnabled)}},dependencies:[N,Tt,Te,Ei,Li,Ci,Hi,si,Ne,X,me,$e,ui,Ge,Ve,De,Wi,Ji,Xi,eo,io,oo,F,M,Ie],styles:['@charset \"UTF-8\";[_nghost-%COMP%]   .record-info-block[_ngcontent-%COMP%]{background-color:var(--widget-ui-kit-color-color_white);padding:12px 16px 16px;border-bottom-right-radius:24px;border-bottom-left-radius:24px}[_nghost-%COMP%]   .privacy-policy-checkbox[_ngcontent-%COMP%]{margin-top:24px;display:block}[_nghost-%COMP%]   .header-addition[_ngcontent-%COMP%]{padding:8px 16px 16px}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]{padding-top:16px}[_nghost-%COMP%]   .record-total-block[_ngcontent-%COMP%], [_nghost-%COMP%]   .user-info-block[_ngcontent-%COMP%], [_nghost-%COMP%]   .record-info-block[_ngcontent-%COMP%], [_nghost-%COMP%]   .notify-text-block[_ngcontent-%COMP%]{margin:8px 0 0;padding:16px}[_nghost-%COMP%]   .record-total-block[_ngcontent-%COMP%]{padding:16px 0}[_nghost-%COMP%]   .record-total-block[_ngcontent-%COMP%]   ui-kit-total-cost[_ngcontent-%COMP%]:is(:empty){display:none}[_nghost-%COMP%]   .record-total-block[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:0 16px}[_nghost-%COMP%]   .record-total-block[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{border-top:1px solid var(--widget-ui-kit-color-color_grey_03);padding-top:16px;margin-top:16px}[_nghost-%COMP%]   .abonement-toggle[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px;align-items:center}[_nghost-%COMP%]   .abonement-toggle[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:24px;height:24px;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .record-info-block[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .footer-block[_ngcontent-%COMP%]{margin-top:12px}[_nghost-%COMP%]   .submit-disabled[_ngcontent-%COMP%]{opacity:.4;pointer-events:none}[_nghost-%COMP%]   .loyalty-button[_ngcontent-%COMP%]{margin:8px 0}[_nghost-%COMP%]   .payment-amount[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px}[_nghost-%COMP%]   .forced-pay-button[_ngcontent-%COMP%]{display:block;padding-bottom:8px}']}));let t=r;return t})();var ro=(()=>{let r=class r{constructor(){o(this,\"router\",f(pe));o(this,\"appNavigationService\",f(He));o(this,\"store\",f(J))}canActivate(){return ne(this,null,function*(){yield mt(U([this.store.select(u.services.getServicesLoading),this.store.select(u.activities.getActivitiesLoading),this.store.select(u.services.getServicesDictLoading)]).pipe(ee(i=>!i.some(Boolean))));let e=!1;return this.store.selectSnapshot(u.order.isActivityOrder)?this.store.selectSnapshot(u.order.getSelectedServices).length===0&&(e=!0):this.store.selectSnapshot(u.order.getIsIndividualRecordFilled)||(e=!0),e&&this.router.navigateByUrl(yield this.appNavigationService.getInitUrlTree(),{replaceUrl:!0}),!e})}};o(r,\"\\u0275fac\",function(i){return new(i||r)}),o(r,\"\\u0275prov\",re({token:r,factory:r.\\u0275fac,providedIn:\"root\"}));let t=r;return t})();var ao=(()=>{let r=class r{constructor(e){o(this,\"store\");this.store=e}resolve(){return dt([this.store.select(u.user.getUser).pipe(R(1)),this.store.select(u.currentCompany.getCurrentCompany).pipe(ee(e=>!!e),R(1))])}};o(r,\"\\u0275fac\",function(i){return new(i||r)(xe(z))}),o(r,\"\\u0275prov\",re({token:r,factory:r.\\u0275fac,providedIn:\"root\"}));let t=r;return t})();var so=(()=>{let r=class r{constructor(e){o(this,\"store\");this.store=e}resolve(){return this.store.select(u.user.getLastRecordData).pipe(R(1))}};o(r,\"\\u0275fac\",function(i){return new(i||r)(xe(z))}),o(r,\"\\u0275prov\",re({token:r,factory:r.\\u0275fac,providedIn:\"root\"}));let t=r;return t})();var wn=[{path:\"\",component:no,canActivate:[Ai,ro],data:{step:V.contact,benchmarks:[\"booking_checkout_page_open\",\"booking_page_pass_checkout\"]},resolve:{userAndCompany:ao,lastRecordData:so,reInitOrder:Ri,resolveActivityStep:Fi},children:[{path:_i.captcha,loadChildren:()=>import(\"./captcha-HA4TXGSL.js\").then(t=>t.CaptchaModule)}]}],co=(()=>{let r=class r{};o(r,\"\\u0275fac\",function(i){return new(i||r)}),o(r,\"\\u0275mod\",be({type:r})),o(r,\"\\u0275inj\",ke({imports:[Xe.forChild(wn),Xe]}));let t=r;return t})();var Ec=(()=>{let r=class r{};o(r,\"\\u0275fac\",function(i){return new(i||r)}),o(r,\"\\u0275mod\",be({type:r})),o(r,\"\\u0275inj\",ke({imports:[St,co,$i,Mt,bi,Ki,zi,Pi,Vi,Gi,Si,ri,Ti,Ui,Ne,ei,pi,Jt,fi,Le,Ge,vi]}));let t=r;return t})();export{Ec as CheckoutModule};\n"
          },
          "redirectURL": "",
          "headersSize": 661,
          "bodySize": 19016,
          "_transferSize": 19677,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:15:30.487Z",
        "time": 23.82999996189028,
        "timings": {
          "blocked": 1.94899996624887,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.391,
          "wait": 20.404999999403955,
          "receive": 1.0849999962374568,
          "_blocked_queueing": 0.7599999662488699,
          "_blocked_proxy": 0.659,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "336349",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/checkout-UEX7DS5W.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_61",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-QM6HMR32.js",
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
              "value": "https://n958200.alteg.io/checkout-UEX7DS5W.js"
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
          "headersSize": 829,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "5832"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98aca33fdbcebca6-ALA"
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
              "value": "Tue, 07 Oct 2025 10:15:30 GMT"
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
              "value": "W/\"68d3e13d-2b37\""
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
              "value": "64dc4d1032a8c046502d8367e0b0a1e0"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 11063,
            "mimeType": "application/javascript",
            "compression": 7575,
            "text": "import{a as ot,b as at}from\"./chunk-GLDI36W2.js\";import{i as tt,z as it}from\"./chunk-TDZAPBSL.js\";import{a as X,k as et}from\"./chunk-5IQFNC4I.js\";import{b as nt}from\"./chunk-FZ3GVWSV.js\";import{m as Y,o as Z,p as S,u as R}from\"./chunk-UIU24VNB.js\";import{U as P,ga as I}from\"./chunk-W3M7SAIY.js\";import{f as q,g as L,ga as J,ha as Q,l as W,r as H}from\"./chunk-FAHXWQCK.js\";import{$b as s,Ab as o,Ba as K,Bc as z,Ca as N,Gc as C,Ha as h,Hc as x,Ia as $,Ic as B,Ob as v,Qb as m,Ra as M,Rb as l,Sa as O,Tb as y,_a as g,_b as p,ac as k,bc as A,cc as E,ec as b,ic as _,jc as d,sc as u,tc as G,uc as f,vc as j,wa as U,xa as F}from\"./chunk-CJMBEYVW.js\";import{g as n,i as V}from\"./chunk-JV5WWF5Q.js\";var T=(()=>{let e=class e{constructor(){n(this,\"maxValue\",1/0);n(this,\"minValue\",1);n(this,\"value\",1);n(this,\"valueChange\",new g)}onMinusClick(){this.value!==this.minValue&&(this.value--,this.valueChange.emit(this.value))}onPlusClick(){this.value!==this.maxValue&&(this.value++,this.valueChange.emit(this.value))}get isMinusDisabled(){return this.value===this.minValue}get isPlusDisabled(){return this.value===this.maxValue}};n(e,\"\\u0275fac\",function(c){return new(c||e)}),n(e,\"\\u0275cmp\",h({type:e,selectors:[[\"ui-kit-stepper\"]],inputs:{maxValue:\"maxValue\",minValue:\"minValue\",value:\"value\"},outputs:{valueChange:\"valueChange\"},standalone:!0,features:[z],decls:4,vars:10,consts:[[1,\"minus\",3,\"click\",\"name\"],[1,\"counter\"],[1,\"plus\",3,\"click\",\"name\"]],template:function(c,r){c&1&&(p(0,\"ui-kit-svg-icon\",0),_(\"click\",function(){return r.onMinusClick()}),s(),p(1,\"div\",1),u(2),s(),p(3,\"ui-kit-svg-icon\",2),_(\"click\",function(){return r.onPlusClick()}),s()),c&2&&(y(\"disabled\",r.isMinusDisabled),l(\"name\",\"common/minus\"),m(\"data-locator\",\"minus\"),o(),m(\"data-locator\",\"counter\"),o(),G(r.value),o(),y(\"disabled\",r.isPlusDisabled),l(\"name\",\"common/plus\"),m(\"data-locator\",\"plus\"))},dependencies:[I,P],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center;border:1px solid var(--widget-ui-kit-color-color_grey_lines);border-radius:12px;width:fit-content;padding:8px;gap:8px}[_nghost-%COMP%]   .minus[_ngcontent-%COMP%], [_nghost-%COMP%]   .plus[_ngcontent-%COMP%]{cursor:pointer;width:24px;height:24px;font-size:24px;color:var(--widget-ui-kit-color-color_grey_dark)}[_nghost-%COMP%]   .minus.disabled[_ngcontent-%COMP%], [_nghost-%COMP%]   .plus.disabled[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--widget-ui-kit-color-color_grey_light)}[_nghost-%COMP%]   .counter[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black);font-feature-settings:\"tnum\";font-variant-numeric:tabular-nums;text-align:center}']}));let t=e;return t})();var Pt=(()=>{let e=class e{constructor(a){n(this,\"activityNavigationService\");this.activityNavigationService=a}resolve(a){return V(this,null,function*(){var c,r;this.activityNavigationService.setCurrentStep((r=(c=a.routeConfig)==null?void 0:c.data)==null?void 0:r.step)})}};n(e,\"\\u0275fac\",function(c){return new(c||e)(K(nt))}),n(e,\"\\u0275prov\",U({token:e,factory:e.\\u0275fac,providedIn:\"root\"}));let t=e;return t})();function lt(t,e){if(t&1&&(p(0,\"div\",3),k(1,\"app-staff-tile\",4),s()),t&2){let i=e.ngIf;o(),l(\"staff\",i)(\"infoVisible\",!1),m(\"data-locator\",\"master_select_btn\")}}function st(t,e){if(t&1&&k(0,\"ui-kit-tag\",11),t&2){let i=e.$implicit,a=d(2);l(\"label\",i.tagLabel)(\"tagType\",a.tagType.bordered),m(\"data-locator\",\"service_label\")}}function pt(t,e){if(t&1){let i=b();p(0,\"div\",12),_(\"click\",function(){M(i);let c=d(2);return O(c.goEditActivity.emit())}),k(1,\"ui-kit-svg-icon\",13),s()}t&2&&(o(),l(\"name\",\"pen\")(\"setSvgSize\",!1))}function dt(t,e){if(t&1&&(p(0,\"ui-kit-simple-cell\",5)(1,\"div\",6)(2,\"span\"),u(3),s(),v(4,st,1,3,\"ui-kit-tag\",7),s(),p(5,\"div\",8)(6,\"div\",9),u(7),C(8,\"async\"),s(),v(9,pt,2,2,\"div\",10),s()()),t&2){let i=e.ngIf,a=d();m(\"data-locator\",\"service_item_\"+i.id),o(2),m(\"data-locator\",\"service_title\"),o(),f(\"\",i.title,\" \"),o(),l(\"ngForOf\",a.paymentService.getServiceTags(i)),o(2),m(\"data-locator\",\"service_price\"),o(),f(\" \",x(8,7,a.activitiesTotalCost$),\" \"),o(2),l(\"ngIf\",a.editMode===\"outer\")}}function mt(t,e){t&1&&(p(0,\"div\",22),u(1),C(2,\"translate\"),s()),t&2&&(o(),f(\" \",x(2,1,\"record.not_available\"),\" \"))}function ut(t,e){if(t&1&&(A(0,23),p(1,\"div\"),u(2),C(3,\"wordNumeralCase\"),s(),E()),t&2){let i=d().$implicit;o(),m(\"data-locator\",\"service_seance_length\"),o(),j(\" \",i.spotsCount,\" \",B(3,3,\"group_booking.spots_count\",i.spotsCount),\" \")}}function vt(t,e){if(t&1&&(A(0,24),p(1,\"div\",25),u(2),C(3,\"async\"),s(),E()),t&2){let i=d().$implicit,a=d(2);o(2),f(\" \",x(3,1,a.getServiceTotalCost$(i.service)),\" \")}}function _t(t,e){if(t&1){let i=b();p(0,\"div\",26)(1,\"div\",27),u(2),C(3,\"translate\"),s(),p(4,\"ui-kit-stepper\",28),_(\"valueChange\",function(c){M(i);let r=d().$implicit,w=d(2);return O(w.updateActivitySpots.emit({activityId:r.activityId,spotsCount:c}))}),s()()}if(t&2){let i=d().$implicit;o(2),f(\" \",x(3,4,\"record.clients_count2\"),\" \"),o(2),l(\"value\",i.spotsCount)(\"minValue\",1)(\"maxValue\",i.spotsCapacity)}}function gt(t,e){if(t&1){let i=b();p(0,\"div\",16)(1,\"app-date-time-block\",17),_(\"activeElementClick\",function(){let c=M(i).$implicit,r=d(2);return O(r.deselectActivity.emit(c.activityId))}),v(2,mt,3,3,\"div\",18)(3,ut,4,6,\"ng-container\",19)(4,vt,4,3,\"ng-container\",20),s(),v(5,_t,5,6,\"div\",21),s()}if(t&2){let i=e.$implicit,a=d(2);o(),y(\"date-block-error\",i.spotsCapacity===0),l(\"dateTime\",i.date)(\"canSelectDateTime\",!0)(\"noPadding\",!0)(\"iconName\",i.spotsCapacity===0||a.editMode===\"inner\"?\"cross\":null)(\"seanceLength\",i.spotsCount*i.activityLength)(\"useShortDateTime\",a.useShortDateTime),o(),l(\"ngIf\",i.spotsCapacity===0),o(),l(\"ngIf\",i.spotsCount>0),o(),l(\"ngIf\",i.spotsCapacity>0),o(),l(\"ngIf\",a.editMode===\"inner\"&&i.spotsCount>1)}}function ft(t,e){if(t&1&&(p(0,\"div\",14),v(1,gt,6,12,\"div\",15),s()),t&2){let i=e.ngIf;o(),l(\"ngForOf\",i)}}var Bt=(()=>{let e=class e{constructor(){n(this,\"isEditable\",!1);n(this,\"editMode\",\"none\");n(this,\"selectedGroupedActivityInfo\");n(this,\"useShortDateTime\",!1);n(this,\"updateActivitySpots\",new g);n(this,\"deselectActivity\",new g);n(this,\"goEditActivity\",new g);n(this,\"paymentService\",N(R));n(this,\"tagType\",Z);n(this,\"getServiceTotalCost$\",this.paymentService.getActivityServiceTotalCost$);n(this,\"activitiesTotalCost$\",this.paymentService.activitiesTotalCost$)}};n(e,\"\\u0275fac\",function(c){return new(c||e)}),n(e,\"\\u0275cmp\",h({type:e,selectors:[[\"app-activity-order-info\"]],inputs:{isEditable:\"isEditable\",editMode:\"editMode\",selectedGroupedActivityInfo:\"selectedGroupedActivityInfo\",useShortDateTime:\"useShortDateTime\"},outputs:{updateActivitySpots:\"updateActivitySpots\",deselectActivity:\"deselectActivity\",goEditActivity:\"goEditActivity\"},decls:3,vars:3,consts:[[\"class\",\"activity-staff\",4,\"ngIf\"],[\"class\",\"activity-service\",4,\"ngIf\"],[\"class\",\"date-blocks\",4,\"ngIf\"],[1,\"activity-staff\"],[3,\"staff\",\"infoVisible\"],[1,\"activity-service\"],[\"center\",\"\",1,\"service-main-info\"],[3,\"label\",\"tagType\",4,\"ngFor\",\"ngForOf\"],[\"right\",\"\",1,\"service-actions\"],[1,\"service-item-price\"],[\"class\",\"icon-container\",3,\"click\",4,\"ngIf\"],[3,\"label\",\"tagType\"],[1,\"icon-container\",3,\"click\"],[1,\"service-item-icon\",3,\"name\",\"setSvgSize\"],[1,\"date-blocks\"],[\"class\",\"date-block\",4,\"ngFor\",\"ngForOf\"],[1,\"date-block\"],[3,\"activeElementClick\",\"dateTime\",\"canSelectDateTime\",\"noPadding\",\"iconName\",\"seanceLength\",\"useShortDateTime\"],[\"class\",\"record-not-available\",\"main-sub-text\",\"\",4,\"ngIf\"],[\"main-sub-text\",\"\",4,\"ngIf\"],[\"pre-icon-text\",\"\",4,\"ngIf\"],[\"class\",\"quantity-block\",4,\"ngIf\"],[\"main-sub-text\",\"\",1,\"record-not-available\"],[\"main-sub-text\",\"\"],[\"pre-icon-text\",\"\"],[1,\"price-amount\"],[1,\"quantity-block\"],[1,\"label\"],[3,\"valueChange\",\"value\",\"minValue\",\"maxValue\"]],template:function(c,r){c&1&&v(0,lt,2,3,\"div\",0)(1,dt,10,9,\"ui-kit-simple-cell\",1)(2,ft,2,1,\"div\",2),c&2&&(l(\"ngIf\",r.selectedGroupedActivityInfo==null?null:r.selectedGroupedActivityInfo.masterInfo),o(),l(\"ngIf\",r.selectedGroupedActivityInfo==null?null:r.selectedGroupedActivityInfo.serviceInfo),o(),l(\"ngIf\",r.selectedGroupedActivityInfo==null?null:r.selectedGroupedActivityInfo.datesInfo))},dependencies:[q,L,tt,ot,S,T,P,X,W,J,Y],styles:['@charset \"UTF-8\";[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .activity-staff[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   .activity-service[_ngcontent-%COMP%]{margin-bottom:8px}[_nghost-%COMP%]   .activity-service[_ngcontent-%COMP%]   .service-main-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}[_nghost-%COMP%]   .activity-service[_ngcontent-%COMP%]   .service-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px}[_nghost-%COMP%]   .activity-service[_ngcontent-%COMP%]   .service-item-price[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px}[_nghost-%COMP%]   .activity-service[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer}[_nghost-%COMP%]   .activity-service[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .service-item-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_dark);width:24px;height:24px}[_nghost-%COMP%]   .date-blocks[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}[_nghost-%COMP%]   .date-blocks[_ngcontent-%COMP%]   .date-block-error[_ngcontent-%COMP%]  .logo-icon-container{background-color:var(--widget-ui-kit-color-color_red_light)}[_nghost-%COMP%]   .date-blocks[_ngcontent-%COMP%]   .date-block-error[_ngcontent-%COMP%]  .logo-icon-container .logo-icon{color:var(--widget-ui-kit-color-color_red_accent)}[_nghost-%COMP%]   .date-blocks[_ngcontent-%COMP%]   .date-block-error[_ngcontent-%COMP%]  .quantity-block .label{color:var(--widget-ui-kit-color-color_red_accent)}[_nghost-%COMP%]   .date-blocks[_ngcontent-%COMP%]   .date-block-error[_ngcontent-%COMP%]  .record-not-available{color:var(--widget-ui-kit-color-color_red_accent)}[_nghost-%COMP%]   .date-blocks[_ngcontent-%COMP%]   .date-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:8px 0}[_nghost-%COMP%]   .date-blocks[_ngcontent-%COMP%]   .date-block[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:16px;line-height:24px}[_nghost-%COMP%]   .date-blocks[_ngcontent-%COMP%]   .date-block[_ngcontent-%COMP%]   .quantity-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   .date-blocks[_ngcontent-%COMP%]   .date-block[_ngcontent-%COMP%]   .quantity-block[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-pimary-text)}'],changeDetection:0}));let t=e;return t})();var oe=(()=>{let e=class e{};n(e,\"\\u0275fac\",function(c){return new(c||e)}),n(e,\"\\u0275mod\",$({type:e})),n(e,\"\\u0275inj\",F({imports:[H,it,Q,at,S,T,I,et]}));let t=e;return t})();export{T as a,Bt as b,Pt as c,oe as d};\n"
          },
          "redirectURL": "",
          "headersSize": 660,
          "bodySize": 3488,
          "_transferSize": 4148,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:15:30.515Z",
        "time": 19.4709999486804,
        "timings": {
          "blocked": 1.6270000144466759,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.276,
          "wait": 15.623000025205315,
          "receive": 1.944999909028411,
          "_blocked_queueing": 0.5370000144466758,
          "_blocked_proxy": 0.641,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "336303",
        "_initiator": {
          "type": "script",
          "url": "https://n958200.alteg.io/checkout-UEX7DS5W.js",
          "lineNumber": 0
        },
        "_priority": "High",
        "_resourceType": "script",
        "cache": {},
        "connection": "9090",
        "pageref": "page_61",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/chunk-GLDI36W2.js",
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
              "value": "https://n958200.alteg.io/checkout-UEX7DS5W.js"
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
          "headersSize": 829,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "931"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98aca33fd96bbcab-ALA"
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
              "value": "Tue, 07 Oct 2025 10:15:30 GMT"
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
              "value": "W/\"68d3e13d-11e6\""
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
              "value": "efac8b15dfbf0b4eec138cd73952b37a"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 4582,
            "mimeType": "application/javascript",
            "compression": 2654,
            "text": "import{a as q}from\"./chunk-G26ZQ6GY.js\";import{z as R}from\"./chunk-TDZAPBSL.js\";import{a as K,k as Y}from\"./chunk-5IQFNC4I.js\";import{f as T,g as V,i as A,t as H}from\"./chunk-UIU24VNB.js\";import{U as L,ga as U}from\"./chunk-W3M7SAIY.js\";import{g as z,ga as j,ha as F,r as W}from\"./chunk-FAHXWQCK.js\";import{$b as l,Ab as o,Gc as u,Ha as C,Hc as D,Ia as S,Ic as B,Kc as O,Lc as N,Ob as _,Qb as s,Ra as h,Rb as r,Sa as y,Tb as P,_a as I,_b as a,ac as x,ec as b,ic as E,jc as d,kc as M,lc as v,rc as w,sc as f,uc as g,xa as k}from\"./chunk-CJMBEYVW.js\";import{g as i}from\"./chunk-JV5WWF5Q.js\";var Q=[[[\"\",\"main-sub-text\",\"\"]],[[\"\",\"pre-icon-text\",\"\"]],[[\"\",\"custom-icon\",\"\"]]],X=[\"[main-sub-text]\",\"[pre-icon-text]\",\"[custom-icon]\"];function Z(e,t){if(e&1&&(a(0,\"div\")(1,\"div\",11),f(2),u(3,\"yDate\"),u(4,\"capitalize\"),l(),a(5,\"div\"),f(6),u(7,\"timeInterval\"),l()()),e&2){let n=d();o(),s(\"data-locator\",\"selected_date\"),o(),g(\" \",D(4,7,B(3,4,n.dateTime,\"fullDateWideWeekDay\")),\" \"),o(3),s(\"data-locator\",\"selected_time\"),o(),g(\" \",O(7,9,n.dateTime,\" \\u2014 \",null,n.seanceLength),\" \")}}function $(e,t){if(e&1&&(a(0,\"div\"),f(1),l()),e&2){let n=d(2);o(),g(\" \",n.noDateTimeTitle,\" \")}}function ee(e,t){e&1&&(a(0,\"div\"),f(1),u(2,\"translate\"),l()),e&2&&(o(),g(\" \",D(2,1,\"record.unavailable_date\"),\" \"))}function te(e,t){if(e&1&&_(0,$,2,1,\"div\",12)(1,ee,3,3,\"div\",12),e&2){let n=d();r(\"ngIf\",n.canSelectDateTime),o(),r(\"ngIf\",!n.canSelectDateTime)}}function ie(e,t){if(e&1){let n=b();a(0,\"ui-kit-svg-icon\",13),E(\"click\",function(c){h(n);let m=d();return y(m.activeElementClick.emit(c))}),l()}if(e&2){let n=d();r(\"name\",n.iconName),s(\"data-locator\",\"remove_datetime_btn\")}}function ne(e,t){e&1&&x(0,\"ui-kit-svg-icon\",14),e&2&&(r(\"name\",\"forward\"),s(\"data-locator\",\"forward_icon\"))}var ve=(()=>{let t=class t{constructor(){i(this,\"dateTime\");i(this,\"canSelectDateTime\",!1);i(this,\"noDateTimeTitle\");i(this,\"noPadding\",!1);i(this,\"iconName\",\"cross\");i(this,\"seanceLength\");i(this,\"activeElementClick\",new I);i(this,\"dateTimeFormat\",T.fullDateWideWeekDay)}set useShortDateTime(p){this.dateTimeFormat=p?T.fullDateShortWeekDay:T.fullDateWideWeekDay}};i(t,\"\\u0275fac\",function(c){return new(c||t)}),i(t,\"\\u0275cmp\",C({type:t,selectors:[[\"app-date-time-block\"]],hostVars:2,hostBindings:function(c,m){c&2&&P(\"no-padding\",m.noPadding)},inputs:{dateTime:\"dateTime\",canSelectDateTime:\"canSelectDateTime\",noDateTimeTitle:\"noDateTimeTitle\",noPadding:\"noPadding\",iconName:\"iconName\",seanceLength:\"seanceLength\",useShortDateTime:\"useShortDateTime\"},outputs:{activeElementClick:\"activeElementClick\"},ngContentSelectors:X,decls:15,vars:6,consts:[[\"noDateAndTimeSelected\",\"\"],[1,\"date-time-header\"],[\"left\",\"\",1,\"logo-icon-container\"],[1,\"logo-icon\",3,\"name\",\"setSvgSize\"],[\"center\",\"\",1,\"date-time-main\"],[4,\"ngIf\",\"ngIfElse\"],[1,\"sub-text\",\"pt-4\"],[\"right\",\"\",1,\"right-part-container\"],[1,\"action-icon-container\"],[\"class\",\"action-icon\",\"role\",\"button\",3,\"name\",\"click\",4,\"ngIf\"],[\"role\",\"button\",3,\"name\",4,\"ngIf\"],[1,\"sub-text\"],[4,\"ngIf\"],[\"role\",\"button\",1,\"action-icon\",3,\"click\",\"name\"],[\"role\",\"button\",3,\"name\"]],template:function(c,m){if(c&1&&(M(Q),a(0,\"ui-kit-simple-cell\",1)(1,\"div\",2),x(2,\"ui-kit-svg-icon\",3),l(),a(3,\"div\",4),_(4,Z,8,14,\"div\",5)(5,te,2,2,\"ng-template\",null,0,N),a(7,\"div\",6),v(8),l()(),a(9,\"div\",7),v(10,1),a(11,\"div\",8),_(12,ie,1,2,\"ui-kit-svg-icon\",9)(13,ne,1,2,\"ui-kit-svg-icon\",10),v(14,2),l()()()),c&2){let G=w(6);o(2),r(\"name\",\"menu/date-time\")(\"setSvgSize\",!1),o(2),r(\"ngIf\",m.dateTime)(\"ngIfElse\",G),o(8),r(\"ngIf\",m.iconName&&m.canSelectDateTime&&m.dateTime),o(),r(\"ngIf\",m.canSelectDateTime&&!m.dateTime)}},dependencies:[z,L,K,j,H,V,q],styles:['@charset \"UTF-8\";.pt-4[_ngcontent-%COMP%]:not(:empty){padding-top:4px}.sub-text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:var(--widget-ui-kit-color-color_grey_dark)}.date-time-header[_ngcontent-%COMP%]   .date-time-main[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:var(--widget-ui-kit-color-color_text_black);align-self:center}.date-time-header[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{color:var(--widget-ui-kit-color-color_grey_dark);width:13.3px;height:13.3px}.date-time-header[_ngcontent-%COMP%]   .right-part-container[_ngcontent-%COMP%]{display:flex;align-items:center;align-self:center;gap:8px}']}));let e=t;return e})();var Me=(()=>{let t=class t{};i(t,\"\\u0275fac\",function(c){return new(c||t)}),i(t,\"\\u0275mod\",S({type:t})),i(t,\"\\u0275inj\",k({imports:[W,F,R,A,U,Y]}));let e=t;return e})();export{ve as a,Me as b};\n"
          },
          "redirectURL": "",
          "headersSize": 659,
          "bodySize": 1928,
          "_transferSize": 2587,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-07T10:15:30.516Z",
        "time": 18.900000024586916,
        "timings": {
          "blocked": 1.9589999488219618,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.135,
          "wait": 16.253999947100876,
          "receive": 0.5520001286640763,
          "_blocked_queueing": 0.7729999488219619,
          "_blocked_proxy": 0.8739999999999999,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      }
    ]
  }
}
```
