### kb/previews_full/kb__previews_full__pages__select-branch__select-branch_maps.har.part053.md.part001.md (part 001)

```md
### kb/previews_full/pages__select-branch__select-branch_maps.har.part053.md (part 001)

```md
### pages/select-branch/select-branch_maps.har (part 053)

```har
is.node||this.Fg&&this.depth==0)return _.Bt;a=this.node;const c=this.Dg?-1:1;if(this.Eg==c){var b=this.Dg?a.lastChild:a.firstChild;b?this.setPosition(b):this.setPosition(a,c*-1)}else(b=this.Dg?a.previousSibling:a.nextSibling)?this.setPosition(b):this.setPosition(a.parentNode,c*-1);this.depth+=this.Eg*(this.Dg?-1:1)}else this.Gg=!0;return(a=this.node)?_.Tl(a):_.Bt};_.z.equals=function(a){return a.node==this.node&&(!this.node||a.Eg==this.Eg)};\n_.z.splice=function(a){const b=this.node;var c=this.Dg?1:-1;this.Eg==c&&(this.Eg=c*-1,this.depth+=this.Eg*(this.Dg?-1:1));this.Dg=!this.Dg;Mr.prototype.next.call(this);this.Dg=!this.Dg;c=_.sa(arguments[0])?arguments[0]:arguments;for(let d=c.length-1;d>=0;d--)_.sl(c[d],b);_.tl(b)};_.Ka(Nr,Mr);Nr.prototype.next=function(){do{const a=Nr.xo.next.call(this);if(a.done)return a}while(this.Eg==-1);return _.Tl(this.node)};_.Rr=class{constructor(a){this.a=1729;this.m=a}hash(a){const b=this.a,c=this.m;let d=0;for(let e=0,f=a.length;e<f;++e)d*=b,d+=a[e],d%=c;return d}};var lca=RegExp(\"'\",\"g\"),Sr=null;var Wr=null,Xr=new WeakMap;_.Ka(_.Yr,_.co);Object.freeze({latLngBounds:new _.ko(new _.dn(-85,-180),new _.dn(85,180)),strictBounds:!0});_.Yr.prototype.streetView_changed=function(){const a=this.get(\"streetView\");a?a.set(\"standAlone\",!1):this.set(\"streetView\",this.__gm.Ig)};_.Yr.prototype.getDiv=function(){return this.__gm.div};_.Yr.prototype.getDiv=_.Yr.prototype.getDiv;_.Yr.prototype.panBy=function(a,b){const c=this.__gm;Wr?_.Kn(c,\"panby\",a,b):_.Hl(\"map\").then(()=>{_.Kn(c,\"panby\",a,b)})};\n_.Yr.prototype.panBy=_.Yr.prototype.panBy;_.Yr.prototype.moveCamera=function(a){const b=this.__gm;try{a=Mfa(a)}catch(c){throw _.Hm(\"invalid CameraOptions\",c);}b.get(\"isMapBindingComplete\")?_.Kn(b,\"movecamera\",a):b.Qg.then(()=>{_.Kn(b,\"movecamera\",a)})};_.Yr.prototype.moveCamera=_.Yr.prototype.moveCamera;\n_.Yr.prototype.getFeatureLayer=function(a){try{a=_.Mm(Nfa)(a)}catch(d){throw d.message=\"google.maps.Map.getFeatureLayer: Expected valid \"+`google.maps.FeatureType, but got '${a}'`,d;}if(a===\"ROAD_PILOT\")throw _.Hm(\"google.maps.Map.getFeatureLayer: Expected valid google.maps.FeatureType, but got 'ROAD_PILOT'\");if(a===\"DATASET\")throw _.Hm(\"google.maps.Map.getFeatureLayer: A dataset ID must be specified for FeatureLayers that have featureType DATASET. Please use google.maps.Map.getDatasetFeatureLayer() instead.\");\nnq(this,\"google.maps.Map.getFeatureLayer\",{featureType:a});switch(a){case \"ADMINISTRATIVE_AREA_LEVEL_1\":_.vo(this,\"FlAao\");_.N(this,148936);break;case \"ADMINISTRATIVE_AREA_LEVEL_2\":_.vo(this,\"FlAat\");_.N(this,148937);break;case \"COUNTRY\":_.vo(this,\"FlCo\");_.N(this,148938);break;case \"LOCALITY\":_.vo(this,\"FlLo\");_.N(this,148939);break;case \"POSTAL_CODE\":_.vo(this,\"FlPc\");_.N(this,148941);break;case \"ROAD_PILOT\":_.vo(this,\"FlRp\");_.N(this,178914);break;case \"SCHOOL_DISTRICT\":_.vo(this,\"FlSd\"),_.N(this,\n148942)}const b=this.__gm;if(b.Gg.has(a))return b.Gg.get(a);const c=new _.Uu({map:this,featureType:a});c.isEnabled=!b.Sg;b.Gg.set(a,c);return c};\n_.Yr.prototype.getDatasetFeatureLayer=function(a){try{(0,_.It)(a)}catch(d){throw d.message=`google.maps.Map.getDatasetFeatureLayer: Expected non-empty string for datasetId, but got ${a}`,d;}nq(this,\"google.maps.Map.getDatasetFeatureLayer\",{featureType:\"DATASET\",datasetId:a});const b=this.__gm;if(b.Kg.has(a))return b.Kg.get(a);const c=new _.Uu({map:this,featureType:\"DATASET\",datasetId:a});c.isEnabled=!b.Sg;b.Kg.set(a,c);return c};\n_.Yr.prototype.panTo=function(a){const b=this.__gm;a=_.ln(a);b.get(\"isMapBindingComplete\")?_.Kn(b,\"panto\",a):b.Qg.then(()=>{_.Kn(b,\"panto\",a)})};_.Yr.prototype.panTo=_.Yr.prototype.panTo;_.Yr.prototype.panToBounds=function(a,b){const c=this.__gm,d=_.jo(a);c.get(\"isMapBindingComplete\")?_.Kn(c,\"pantolatlngbounds\",d,b):c.Qg.then(()=>{_.Kn(c,\"pantolatlngbounds\",d,b)})};_.Yr.prototype.panToBounds=_.Yr.prototype.panToBounds;\n_.Yr.prototype.fitBounds=function(a,b){const c=this.__gm,d=_.jo(a);c.get(\"isMapBindingComplete\")?Wr.fitBounds(this,d,b):c.Qg.then(()=>{Wr.fitBounds(this,d,b)})};_.Yr.prototype.fitBounds=_.Yr.prototype.fitBounds;_.Yr.prototype.pr=_.ba(21);_.Yr.prototype.getMapCapabilities=function(){return this.__gm.Dg.getMapCapabilities(!0)};_.Yr.prototype.getMapCapabilities=_.Yr.prototype.getMapCapabilities;\nvar Zr={bounds:null,center:_.Tm(_.ln),clickableIcons:Et,heading:_.Ft,mapTypeId:_.Gt,mapId:_.Gt,projection:null,renderingType:_.Mm(Su),tiltInteractionEnabled:Et,headingInteractionEnabled:Et,restriction:function(a){if(a==null)return null;a=_.Jm({strictBounds:_.Ht,latLngBounds:_.jo})(a);const b=a.latLngBounds;if(!(b.si.hi>b.si.lo))throw _.Hm(\"south latitude must be smaller than north latitude\");if((b.Lh.hi===-180?180:b.Lh.hi)===b.Lh.lo)throw _.Hm(\"eastern longitude cannot equal western longitude\");return a},\nstreetView:eu,tilt:_.Ft,zoom:_.Ft,internalUsageAttributionIds:_.Tm(_.Om(_.It,!0))};_.qo(_.Yr.prototype,Zr);var mga=class extends Event{constructor(){super(\"gmp-zoomchange\",{bubbles:!0})}};var nga={Zg:!0,type:String,Fh:Gu,eh:!1,Bj:dq},vca=(a=nga,b,c)=>{const d=c.kind,e=c.metadata;let f=Hu.get(e);f===void 0&&Hu.set(e,f=new Map);d===\"setter\"&&(a=Object.create(a),a.Tw=!0);f.set(c.name,a);if(d===\"accessor\"){const g=c.name;return{set(h){const k=b.get.call(this);b.set.call(this,h);_.aq(this,g,k,a)},init(h){h!==void 0&&this.bj(g,void 0,a,h);return h}}}if(d===\"setter\"){const g=c.name;return function(h){const k=this[g];b.call(this,h);_.aq(this,g,k,a)}}throw Error(`Unsupported decorator location: ${d}`);\n};_.as=(a,b,c)=>{c.configurable=!0;c.enumerable=!0;Reflect.lQ&&typeof b!==\"object\"&&Object.defineProperty(a,b,c);return c};var Ms=class extends _.Ku{static get wo(){return{..._.Ku.wo,delegatesFocus:!0}}set center(a){if(a!==null||!this.di)try{const b=_.ln(a);this.innerMap.setCenter(b)}catch(b){throw _.hq(this,\"center\",a,b);}}get center(){return this.innerMap.getCenter()??null}set mapId(a){try{this.innerMap.set(\"mapId\",(0,_.Gt)(a)??void 0)}catch(b){throw _.hq(this,\"mapId\",a,b);}}get mapId(){return this.innerMap.get(\"mapId\")??null}set zoom(a){if(a!==null||!this.di)try{this.innerMap.setZoom(Go(a))}catch(b){throw _.hq(this,\n\"zoom\",a,b);}}get zoom(){return this.innerMap.getZoom()??null}set renderingType(a){try{this.innerMap.set(\"renderingType\",a==null?\"UNINITIALIZED\":_.Mm(Su)(a))}catch(b){throw _.hq(this,\"renderingType\",a,b);}}get renderingType(){return this.innerMap.get(\"renderingType\")??null}set tiltInteractionDisabled(a){try{this.innerMap.set(\"tiltInteractionEnabled\",a==null?null:!Et(a))}catch(b){throw _.hq(this,\"tiltInteractionDisabled\",a,b);}}get tiltInteractionDisabled(){const a=this.innerMap.get(\"tiltInteractionEnabled\");\nreturn typeof a===\"boolean\"?!a:a}set headingInteractionDisabled(a){try{this.innerMap.set(\"headingInteractionEnabled\",a==null?null:!Et(a))}catch(b){throw _.hq(this,\"headingInteractionDisabled\",a,b);}}get headingInteractionDisabled(){const a=this.innerMap.get(\"headingInteractionEnabled\");return typeof a===\"boolean\"?!a:a}set internalUsageAttributionIds(a){this.innerMap.set(\"internalUsageAttributionIds\",this.fh(\"internalUsageAttributionIds\",_.Tm(_.Om(_.It,!0)),a))}get internalUsageAttributionIds(){return this.innerMap.getInternalUsageAttributionIds()??\nnull}constructor(a={}){super(a);this.Qp=document.createElement(\"div\");this.Qp.dir=\"\";this.innerMap=new _.Yr(this.Qp);_.fq(this,\"innerMap\");_.Tr.set(this,this.innerMap);const b=\"center zoom mapId renderingType tiltInteractionEnabled headingInteractionEnabled internalUsageAttributionIds\".split(\" \");for(const c of b)this.innerMap.addListener(`${c.toLowerCase()}_changed`,()=>{switch(c){case \"tiltInteractionEnabled\":_.aq(this,\"tiltInteractionDisabled\");break;case \"headingInteractionEnabled\":_.aq(this,\n\"headingInteractionDisabled\");break;default:_.aq(this,c)}if(c===\"zoom\"){var d=new mga;this.dispatchEvent(d)}});a.center!=null&&(this.center=a.center);a.zoom!=null&&(this.zoom=a.zoom);a.mapId!=null&&(this.mapId=a.mapId);a.renderingType!=null&&(this.renderingType=a.renderingType);a.tiltInteractionDisabled!=null&&(this.tiltInteractionDisabled=a.tiltInteractionDisabled);a.headingInteractionDisabled!=null&&(this.headingInteractionDisabled=a.headingInteractionDisabled);a.internalUsageAttributionIds!=null&&\n(this.internalUsageAttributionIds=Array.from(a.internalUsageAttributionIds));this.Dg=new MutationObserver(c=>{for(const d of c)d.attributeName===\"dir\"&&(_.Kn(this.innerMap,\"shouldUseRTLControlsChange\"),_.Kn(this.innerMap.__gm.Ig,\"shouldUseRTLControlsChange\"))});this.Uh(a,Ms,\"MapElement\");_.N(window,178924)}Hg(){this.ck?.append(this.Qp)}connectedCallback(){super.connectedCallback();this.Dg.observe(this,{attributes:!0});this.Dg.observe(this.ownerDocument.documentElement,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback();\nthis.Dg.disconnect()}};Ms.prototype.constructor=Ms.prototype.constructor;Ms.styles=(0,_.Fu)`\n    :host {\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    :host([hidden]) {\n      display: none;\n    }\n    :host > div {\n      width: 100%;\n      height: 100%;\n    }\n  `;Ms.ki={ni:181575,mi:181574};_.A([_.$r({Fh:{...hfa,Xj:a=>a?hfa.Xj(a):(console.error(`Could not interpret \"${a}\" as a LatLng.`),null)},Bj:eq,eh:!0}),_.B(\"design:type\",Object),_.B(\"design:paramtypes\",[Object])],Ms.prototype,\"center\",null);_.A([_.$r({Zg:\"map-id\",Bj:eq,type:String,eh:!0}),_.B(\"design:type\",Object),_.B(\"design:paramtypes\",[Object])],Ms.prototype,\"mapId\",null);\n_.A([_.$r({Fh:{Xj:a=>{const b=Number(a);return a===null||a===\"\"||isNaN(b)?(console.error(`Could not interpret \"${a}\" as a number.`),null):b},Mj:a=>a===null?null:String(a)},Bj:eq,eh:!0}),_.B(\"design:type\",Object),_.B(\"design:paramtypes\",[Object])],Ms.prototype,\"zoom\",null);_.A([_.$r({Zg:\"rendering-type\",Fh:_.pp(Su),Bj:eq,eh:!0}),_.B(\"design:type\",Object),_.B(\"design:paramtypes\",[Object])],Ms.prototype,\"renderingType\",null);\n_.A([_.$r({Zg:\"tilt-interaction-disabled\",type:Boolean,Bj:eq,eh:!0}),_.B(\"design:type\",Object),_.B(\"design:paramtypes\",[Object])],Ms.prototype,\"tiltInteractionDisabled\",null);_.A([_.$r({Zg:\"heading-interaction-disabled\",type:Boolean,Bj:eq,eh:!0}),_.B(\"design:type\",Object),_.B(\"design:paramtypes\",[Object])],Ms.prototype,\"headingInteractionDisabled\",null);\n_.A([_.$r({Zg:\"internal-usage-attribution-ids\",Fh:_.ju,Bj:eq,eh:!0}),_.B(\"design:type\",Object),_.B(\"design:paramtypes\",[Object])],Ms.prototype,\"internalUsageAttributionIds\",null);var Ada=!1;_.oga={BOUNCE:1,DROP:2,yP:3,nP:4,1:\"BOUNCE\",2:\"DROP\",3:\"RAISE\",4:\"LOWER\"};var xca=class{constructor(a,b,c,d,e){this.url=a;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null;this.size=b||e}};var Vu=class{constructor(){_.Hl(\"maxzoom\")}getMaxZoomAtLatLng(a,b){_.vo(window,\"Mza\");_.N(window,154332);const c=_.Hl(\"maxzoom\").then(d=>d.getMaxZoomAtLatLng(a,b));b&&c.catch(()=>{});return c}};Vu.prototype.getMaxZoomAtLatLng=Vu.prototype.getMaxZoomAtLatLng;Vu.prototype.constructor=Vu.prototype.constructor;var wca=class extends _.On{constructor(a){super();_.xm(\"The Fusion Tables service will be turned down in December 2019 (see https://support.google.com/fusiontables/answer/9185417). Maps API version 3.37 is the last version that will support FusionTablesLayer.\");if(!a||_.rm(a)||_.mm(a)){const b=arguments[1];this.set(\"tableId\",a);this.setValues(b)}else this.setValues(a)}};_.qo(wca.prototype,{map:_.Lt,tableId:_.Ft,query:_.Tm(_.Rm([_.Js,_.Pm(_.nm,\"not an Object\")]))});var Wu=null;_.Ka(_.ds,_.On);_.ds.prototype.map_changed=function(){Wu?Wu.cE(this):_.Hl(\"overlay\").then(a=>{Wu=a;a.cE(this)})};_.ds.preventMapHitsFrom=a=>{_.Hl(\"overlay\").then(b=>{Wu=b;b.preventMapHitsFrom(a)})};_.Ia(\"module$contents$mapsapi$overlay$overlayView_OverlayView.preventMapHitsFrom\",_.ds.preventMapHitsFrom);_.ds.preventMapHitsAndGesturesFrom=a=>{_.Hl(\"overlay\").then(b=>{Wu=b;b.preventMapHitsAndGesturesFrom(a)})};\n_.Ia(\"module$contents$mapsapi$overlay$overlayView_OverlayView.preventMapHitsAndGesturesFrom\",_.ds.preventMapHitsAndGesturesFrom);_.qo(_.ds.prototype,{panes:null,projection:null,map:_.Rm([_.Lt,eu])});var Xu=class extends _.On{getMap(){return this.get(\"map\")}setMap(a){this.set(\"map\",a)}getDraggable(){return this.get(\"draggable\")}setDraggable(a){this.set(\"draggable\",a)}getEditable(){return this.get(\"editable\")}setEditable(a){this.set(\"editable\",a)}setVisible(a){this.set(\"visible\",a)}getVisible(){return this.get(\"visible\")}constructor(a){super();this.Ig=this.lv=this.wm=!1;this.set(\"latLngs\",new _.xp([new _.xp]));this.setValues(yp(a));_.Hl(\"poly\")}getPath(){return this.get(\"latLngs\").getAt(0)}setPath(a){try{this.get(\"latLngs\").setAt(0,\nBp(a))}catch(b){_.Im(b)}}map_changed(){es(this)}visible_changed(){es(this)}};Xu.prototype.setPath=Xu.prototype.setPath;Xu.prototype.getPath=Xu.prototype.getPath;Xu.prototype.getVisible=Xu.prototype.getVisible;Xu.prototype.setVisible=Xu.prototype.setVisible;Xu.prototype.setEditable=Xu.prototype.setEditable;Xu.prototype.getEditable=Xu.prototype.getEditable;Xu.prototype.setDraggable=Xu.prototype.setDraggable;Xu.prototype.getDraggable=Xu.prototype.getDraggable;Xu.prototype.setMap=Xu.prototype.setMap;\nXu.prototype.getMap=Xu.prototype.getMap;_.qo(Xu.prototype,{draggable:_.Ht,editable:_.Ht,map:_.Lt,visible:_.Ht});_.Yu=class extends Xu{constructor(a){super(a);this.wm=!0}setOptions(a){this.setValues(a)}getPath(){return super.getPath()}setPath(a){super.setPath(a)}getPaths(){return this.get(\"latLngs\")}setPaths(a){try{var b=this.set;if(Array.isArray(a)||a instanceof _.xp)if(_.gm(a)===0)var c=!0;else{var d=a instanceof _.xp?a.getAt(0):a[0];c=Array.isArray(d)||d instanceof _.xp}else c=!1;var e=c?a instanceof _.xp?Cp(Ap)(a):new _.xp(_.Nm(Bp)(a)):new _.xp([Bp(a)]);b.call(this,\"latLngs\",e)}catch(f){_.Im(f)}}};\n_.Yu.prototype.setPaths=_.Yu.prototype.setPaths;_.Yu.prototype.getPaths=_.Yu.prototype.getPaths;_.Yu.prototype.setPath=_.Yu.prototype.setPath;_.Yu.prototype.getPath=_.Yu.prototype.getPath;_.Yu.prototype.setOptions=_.Yu.prototype.setOptions;_.Zu=class extends Xu{setOptions(a){this.setValues(a)}};_.Zu.prototype.setOptions=_.Zu.prototype.setOptions;_.$u=class extends _.On{getBounds(){return this.get(\"bounds\")}setBounds(a){this.set(\"bounds\",a)}getMap(){return this.get(\"map\")}setMap(a){this.set(\"map\",a)}getDraggable(){return this.get(\"draggable\")}setDraggable(a){this.set(\"draggable\",a)}getEditable(){return this.get(\"editable\")}setEditable(a){this.set(\"editable\",a)}setVisible(a){this.set(\"visible\",a)}getVisible(){return this.get(\"visible\")}setOptions(a){this.setValues(a)}constructor(a){super();this.setValues(yp(a));_.Hl(\"poly\")}map_changed(){fs(this)}visible_changed(){fs(this)}};\n_.$u.prototype.setOptions=_.$u.prototype.setOptions;_.$u.prototype.getVisible=_.$u.prototype.getVisible;_.$u.prototype.setVisible=_.$u.prototype.setVisible;_.$u.prototype.setEditable=_.$u.prototype.setEditable;_.$u.prototype.getEditable=_.$u.prototype.getEditable;_.$u.prototype.setDraggable=_.$u.prototype.setDraggable;_.$u.prototype.getDraggable=_.$u.prototype.getDraggable;_.$u.prototype.setMap=_.$u.prototype.setMap;_.$u.prototype.getMap=_.$u.prototype.getMap;_.$u.prototype.setBounds=_.$u.prototype.setBounds;\n_.$u.prototype.getBounds=_.$u.prototype.getBounds;_.qo(_.$u.prototype,{draggable:_.Ht,editable:_.Ht,bounds:_.Tm(_.jo),map:_.Lt,visible:_.Ht});var av=class extends _.On{constructor(){super();this.Dg=null}getMap(){return this.get(\"map\")}setMap(a){this.set(\"map\",a)}map_changed(){_.Hl(\"streetview\").then(a=>{a.HI(this)})}};av.prototype.setMap=av.prototype.setMap;av.prototype.getMap=av.prototype.getMap;av.prototype.constructor=av.prototype.constructor;_.qo(av.prototype,{map:_.Lt});_.pga={NEAREST:\"nearest\",BEST:\"best\"};_.bv=class{constructor(){this.Dg=null}getPanorama(a,b){return _.gs(this,a,b)}getPanoramaByLocation(a,b,c){return this.getPanorama({location:a,radius:b,preference:(b||0)<50?\"best\":\"nearest\"},c)}getPanoramaById(a,b){return this.getPanorama({pano:a},b)}};_.bv.prototype.getPanorama=_.bv.prototype.getPanorama;_.cv={DEFAULT:\"default\",OUTDOOR:\"outdoor\",GOOGLE:\"google\"};_.Ka(js,_.On);js.prototype.getTile=function(a,b,c){if(!a||!c)return null;const d=_.rl(\"DIV\");c={ui:a,zoom:b,Li:null};d.__gmimt=c;_.Sq(this.Dg,d);if(this.Eg){const e=this.tileSize||new _.Fo(256,256),f=this.Fg(a,b);(c.Li=this.Eg({qh:a.x,rh:a.y,yh:b},e,d,f,function(){_.Kn(d,\"load\")})).setOpacity(is(this))}return d};js.prototype.getTile=js.prototype.getTile;js.prototype.releaseTile=function(a){a&&this.Dg.contains(a)&&(this.Dg.remove(a),(a=a.__gmimt.Li)&&a.release())};js.prototype.releaseTile=js.prototype.releaseTile;\njs.prototype.opacity_changed=function(){const a=is(this);this.Dg.forEach(b=>{b.__gmimt.Li.setOpacity(a)})};js.prototype.triggersTileLoadEvent=!0;_.qo(js.prototype,{opacity:_.Ft});_.Ka(_.ks,_.On);_.ks.prototype.getTile=function(){return null};_.ks.prototype.tileSize=new _.Fo(256,256);_.ks.prototype.triggersTileLoadEvent=!0;_.Ka(_.ls,_.ks);var dv=class{constructor(){this.logs=[]}log(){}xK(){return this.logs.map(this.Dg).join(\"\\n\")}Dg(a){return`${a.timestamp}: ${a.message}`}};dv.prototype.getLogs=dv.prototype.xK;_.qga=new dv;_.rga={OK:\"OK\",CANCELLED:\"CANCELLED\",UNKNOWN:\"UNKNOWN\",INVALID_ARGUMENT:\"INVALID_ARGUMENT\",DEADLINE_EXCEEDED:\"DEADLINE_EXCEEDED\",NOT_FOUND:\"NOT_FOUND\",ALREADY_EXISTS:\"ALREADY_EXISTS\",PERMISSION_DENIED:\"PERMISSION_DENIED\",UNAUTHENTICATED:\"UNAUTHENTICATED\",RESOURCE_EXHAUSTED:\"RESOURCE_EXHAUSTED\",FAILED_PRECONDITION:\"FAILED_PRECONDITION\",ABORTED:\"ABORTED\",OUT_OF_RANGE:\"OUT_OF_RANGE\",UNIMPLEMENTED:\"UNIMPLEMENTED\",INTERNAL:\"INTERNAL\",UNAVAILABLE:\"UNAVAILABLE\",DATA_LOSS:\"DATA_LOSS\"};_.Ka(ms,_.On);_.qo(ms.prototype,{attribution:()=>!0,place:()=>!0});var Bca={ColorScheme:{LIGHT:\"LIGHT\",DARK:\"DARK\",FOLLOW_SYSTEM:\"FOLLOW_SYSTEM\"},ControlPosition:_.pr,LatLng:_.dn,LatLngBounds:_.ko,MVCArray:_.xp,MVCObject:_.On,MapsRequestError:_.Ps,MapsNetworkError:Ns,MapsNetworkErrorEndpoint:{PLACES_NEARBY_SEARCH:\"PLACES_NEARBY_SEARCH\",PLACES_LOCAL_CONTEXT_SEARCH:\"PLACES_LOCAL_CONTEXT_SEARCH\",MAPS_MAX_ZOOM:\"MAPS_MAX_ZOOM\",DISTANCE_MATRIX:\"DISTANCE_MATRIX\",ELEVATION_LOCATIONS:\"ELEVATION_LOCATIONS\",ELEVATION_ALONG_PATH:\"ELEVATION_ALONG_PATH\",GEOCODER_GEOCODE:\"GEOCODER_GEOCODE\",\nDIRECTIONS_ROUTE:\"DIRECTIONS_ROUTE\",PLACES_GATEWAY:\"PLACES_GATEWAY\",PLACES_DETAILS:\"PLACES_DETAILS\",PLACES_FIND_PLACE_FROM_PHONE_NUMBER:\"PLACES_FIND_PLACE_FROM_PHONE_NUMBER\",PLACES_FIND_PLACE_FROM_QUERY:\"PLACES_FIND_PLACE_FROM_QUERY\",PLACES_GET_PLACE:\"PLACES_GET_PLACE\",PLACES_GET_PHOTO_MEDIA:\"PLACES_GET_PHOTO_MEDIA\",PLACES_SEARCH_TEXT:\"PLACES_SEARCH_TEXT\",STREETVIEW_GET_PANORAMA:\"STREETVIEW_GET_PANORAMA\",PLACES_AUTOCOMPLETE:\"PLACES_AUTOCOMPLETE\",FLEET_ENGINE_LIST_DELIVERY_VEHICLES:\"FLEET_ENGINE_LIST_DELIVERY_VEHICLES\",\nFLEET_ENGINE_LIST_TASKS:\"FLEET_ENGINE_LIST_TASKS\",FLEET_ENGINE_LIST_VEHICLES:\"FLEET_ENGINE_LIST_VEHICLES\",FLEET_ENGINE_GET_DELIVERY_VEHICLE:\"FLEET_ENGINE_GET_DELIVERY_VEHICLE\",FLEET_ENGINE_GET_TRIP:\"FLEET_ENGINE_GET_TRIP\",FLEET_ENGINE_GET_VEHICLE:\"FLEET_ENGINE_GET_VEHICLE\",FLEET_ENGINE_SEARCH_TASKS:\"FLEET_ENGINE_SEARCH_TASKS\",QO:\"FLEET_ENGINE_GET_TASK_TRACKING_INFO\",TIME_ZONE:\"TIME_ZONE\",ROUTES_COMPUTE_ROUTE_MATRIX:\"ROUTES_COMPUTE_ROUTE_MATRIX\",ROUTES_COMPUTE_ROUTES:\"ROUTES_COMPUTE_ROUTES\",ADDRESS_VALIDATION_FETCH_ADDRESS_VALIDATION:\"ADDRESS_VALIDATION_FETCH_ADDRESS_VALIDATION\"},\nMapsServerError:_.Qs,Point:_.Do,RPCStatus:_.rga,Size:_.Fo,UnitSystem:_.os,Settings:an,SymbolPath:Uea,LatLngAltitude:_.Ip,Orientation3D:void 0,Vector3D:void 0,event:_.Kt},Cca={BicyclingLayer:_.gu,Circle:_.Ep,Data:so,GroundOverlay:_.ip,ImageMapType:js,KmlLayer:jp,KmlLayerStatus:{UNKNOWN:\"UNKNOWN\",OK:\"OK\",INVALID_REQUEST:\"INVALID_REQUEST\",DOCUMENT_NOT_FOUND:\"DOCUMENT_NOT_FOUND\",FETCH_ERROR:\"FETCH_ERROR\",INVALID_DOCUMENT:\"INVALID_DOCUMENT\",DOCUMENT_TOO_LARGE:\"DOCUMENT_TOO_LARGE\",LIMITS_EXCEEDED:\"LIMITS_EXCEEDED\",\nTIMED_OUT:\"TIMED_OUT\"},Map:_.Yr,MapElement:Ms,ZoomChangeEvent:mga,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.zt,MapTypeRegistry:Vr,MaxZoomService:Vu,MaxZoomStatus:{OK:\"OK\",ERROR:\"ERROR\"},OverlayView:_.ds,Polygon:_.Yu,Polyline:_.Zu,Rectangle:_.$u,RenderingType:Su,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2,0:\"CENTER\",1:\"INSIDE\",2:\"OUTSIDE\"},StyledMapType:_.ls,TrafficLayer:hu,TransitLayer:iu,FeatureType:Nfa,InfoWindow:_.fu,WebGLOverlayView:_.pq},\nDca={DirectionsRenderer:_.zo,DirectionsService:_.wo,DirectionsStatus:_.Kea,DistanceMatrixService:_.Ao,DistanceMatrixStatus:_.Nea,DistanceMatrixElementStatus:_.Mea,TrafficModel:_.Mt,TransitMode:_.Nt,TransitRoutePreference:_.Ot,TravelMode:_.ns,VehicleType:_.Lea},Eca={ElevationService:_.Pt,ElevationStatus:_.Oea},Fca={Geocoder:$t,GeocoderLocationType:_.Pea,ExtraGeocodeComputation:void 0,Containment:void 0,SpatialRelationship:void 0,GeocoderStatus:{OK:\"OK\",UNKNOWN_ERROR:\"UNKNOWN_ERROR\",OVER_QUERY_LIMIT:\"OVER_QUERY_LIMIT\",\nREQUEST_DENIED:\"REQUEST_DENIED\",INVALID_REQUEST:\"INVALID_REQUEST\",ZERO_RESULTS:\"ZERO_RESULTS\",ERROR:\"ERROR\"}},Gca={StreetViewCoverageLayer:av,StreetViewPanorama:_.tr,StreetViewPreference:_.pga,StreetViewService:_.bv,StreetViewStatus:{OK:\"OK\",UNKNOWN_ERROR:\"UNKNOWN_ERROR\",ZERO_RESULTS:\"ZERO_RESULTS\"},StreetViewSource:_.cv,InfoWindow:_.fu,OverlayView:_.ds},Hca={Animation:_.oga,Marker:_.cp,CollisionBehavior:_.cu},Jca=new Set(\"addressValidation airQuality drawing elevation geometry journeySharing maps3d marker places routes visualization\".split(\" \")),\nKca=new Set([\"search\"]);_.Il(\"main\",{});var Gba=class extends Event{constructor(){super(\"gmp-error\")}};var sga=new Map([[0,\"api-3/images/GoogleMaps_Logo_Gray1\"],[1,\"api-3/images/GoogleMaps_Logo_WithDarkOutline1\"],[2,\"\"]]),ev=class extends _.Ju{constructor(){super();this.variant=0;_.Hl(\"util\").then(a=>{a.Ho()})}zh(){switch(this.variant){case 0:case 1:var a=sga.get(this.variant);a&&(a=(_.dl?_.el():\"\")+a+\".svg\");return(0,_.O)`<div class=\"container\">\n          <img aria-label=\"Google Maps\" src=\"${a??\"\"}\" />\n        </div>`;default:return(0,_.O)`<span translate=\"no\">Google Maps</span>`}}};ev.styles=[_.Fu([\":host(:not([hidden])){display:block;font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:16px;width:5.5em}span{color:light-dark(#5e5e5e,#fff);font-size:.75em;letter-spacing:normal;line-height:1.1em;white-space:nowrap}.container{line-height:0}img{width:100%}\"])];_.A([_.$r({Zg:!1}),_.B(\"design:type\",Object)],ev.prototype,\"variant\",void 0);_.qp(\"gmp-internal-google-attribution\",ev);var Pca=class extends Event{constructor(){super(\"gmp-load\")}};_.tga=class{constructor(a){this.host=a;this.options={};this.Dg=_.ea(Promise,\"withResolvers\").call(Promise)}isVisible(a){const {inlineSize:b,blockSize:c}=a.contentBoxSize[0];return b>=(this.options.RQ??1)&&c>=(this.options.QQ??1)}};var rs=class extends Error{constructor(){super(...arguments);this.name=\"AsyncRunPreemptedError\"}},uga=class{constructor(){this.Dg=0}};_.fv=class extends _.Ku{constructor(a={}){super(a);this.vk=0;this.rL=!1;this.HE=new uga;this.kD=new _.tga(this)}ju(a){return a}zh(){let a;switch(this.vk){case 1:a=this.nw();break;case 3:a=this.mw();break;case 2:a=this.Ns();break;default:a=this.hr()}return this.ju(a)}nw(){return(0,_.O)` <gmp-internal-loading-text></gmp-internal-loading-text> `}mw(){return(0,_.O)`\n      <gmp-internal-request-error-text></gmp-internal-request-error-text>\n    `}hr(){return(0,_.O)``}};_.A([_.cs(),_.B(\"design:type\",Number)],_.fv.prototype,\"vk\",void 0);var vga;vga=class extends kga{};_.gv=class extends vga{constructor(a={}){super();this.element=Ym(\"View\",\"element\",()=>_.Tm(_.Rm([_.Lm(HTMLElement,\"HTMLElement\"),_.Lm(SVGElement,\"SVGElement\")]))(a.element)||document.createElement(\"div\"));this.Uh(a,_.gv,\"View\")}};_.hv=class{constructor(a){this.Dg=a}async fetch(a){return a(await _.Qca(this,a)).dF(this.Dg,a)}};_.hv.prototype.Jx=_.ba(32);_.Fda=_.Jm({center:a=>_.kn(a),radius:_.Wm},!0);_.wga=_.Jm({lat:_.Ct,lng:_.Ct,altitude:_.Ct},!0);_.us=_.Rm([_.Lm(_.Ip,\"LatLngAltitude\"),_.Lm(_.dn,\"LatLng\"),_.Jm({lat:_.Ct,lng:_.Ct,altitude:_.Tm(_.Ct)},!0)]);var xga=class{constructor(a){this.Dg=a||0}heading(){return this.Dg}tilt(){return 45}toString(){return`${this.Dg},${45}`}};var yga;yga=Math.sqrt(2);_.vs=class{constructor(a){this.Eg=!0;this.Fg=new _.Tu;this.Dg=new xga(a%360);this.Gg=new _.Do(0,0)}fromLatLngToPoint(a,b){a=_.kn(a);b=this.Fg.fromLatLngToPoint(a,b);Sca(b,this.Dg.heading());b.y=(b.y-128)/yga+128;return b}fromPointToLatLng(a,b=!1){const c=this.Gg;c.x=a.x;c.y=(a.y-128)*yga+128;Sca(c,360-this.Dg.heading());return this.Fg.fromPointToLatLng(c,b)}getPov(){return this.Dg}};var Tca=new _.Tu;var iv=_.pa.google.maps,zga=Gl.getInstance(),Aga=zga.Gl.bind(zga);iv.__gjsload__=Aga;_.hm(iv.modules,Aga);delete iv.modules;var $ca=class extends _.L{constructor(a){super(a)}getName(){return _.E(this,1)}};var Zca=_.fi(class extends _.L{constructor(a){super(a)}});var Yca;var Uca={};for(const a of ada()){var Bga=a.getName(),Cga;Cga=_.pg(a,2,_.yf());Uca[Bga]=Cga};var zs=new Map;zs.set(\"addressValidation\",{ei:233048,fi:233049,li:233047});zs.set(\"airQuality\",{ei:233051,fi:233052,li:233050});zs.set(\"adsense\",{ei:233054,fi:233055,li:233053});zs.set(\"common\",{ei:233057,fi:233058,li:233056});zs.set(\"controls\",{ei:233060,fi:233061,li:233059});zs.set(\"data\",{ei:233063,fi:233064,li:233062});zs.set(\"directions\",{ei:233066,fi:233067,li:233065});zs.set(\"distance_matrix\",{ei:233069,fi:233070,li:233068});zs.set(\"drawing\",{ei:233072,fi:233073,li:233071});\nzs.set(\"drawing_impl\",{ei:233075,fi:233076,li:233074});zs.set(\"elevation\",{ei:233078,fi:233079,li:233077});zs.set(\"geocoder\",{ei:233081,fi:233082,li:233080});zs.set(\"geometry\",{ei:233084,fi:233085,li:233083});zs.set(\"imagery_viewer\",{ei:233087,fi:233088,li:233086});zs.set(\"infowindow\",{ei:233090,fi:233091,li:233089});zs.set(\"journeySharing\",{ei:233093,fi:233094,li:233092});zs.set(\"kml\",{ei:233096,fi:233097,li:233095});zs.set(\"layers\",{ei:233099,fi:233100,li:233098});\nzs.set(\"log\",{ei:233105,fi:233106,li:233104});zs.set(\"main\",{ei:233108,fi:233109,li:233107});zs.set(\"map\",{ei:233111,fi:233112,li:233110});zs.set(\"map3d_lite_wasm\",{ei:233114,fi:233115,li:233113});zs.set(\"map3d_wasm\",{ei:233117,fi:233118,li:233116});zs.set(\"maps3d\",{ei:233120,fi:233121,li:233119});zs.set(\"marker\",{ei:233123,fi:233124,li:233122});zs.set(\"maxzoom\",{ei:233126,fi:233127,li:233125});zs.set(\"onion\",{ei:233129,fi:233130,li:233128});zs.set(\"overlay\",{ei:233132,fi:233133,li:233131});\nzs.set(\"panoramio\",{ei:233135,fi:233136,li:233134});zs.set(\"places\",{ei:233138,fi:233139,li:233137});zs.set(\"places_impl\",{ei:233141,fi:233142,li:233140});zs.set(\"poly\",{ei:233144,fi:233145,li:233143});zs.set(\"routes\",{ei:256839,fi:256840,li:256841});zs.set(\"search\",{ei:233147,fi:233148,li:233146});zs.set(\"search_impl\",{ei:233150,fi:233151,li:233149});zs.set(\"stats\",{ei:233153,fi:233154,li:233152});zs.set(\"streetview\",{ei:233156,fi:233157,li:233155});zs.set(\"styleEditor\",{ei:233159,fi:233160,li:233158});\nzs.set(\"util\",{ei:233162,fi:233163,li:233161});zs.set(\"visualization\",{ei:233165,fi:233166,li:233164});zs.set(\"visualization_impl\",{ei:233168,fi:233169,li:233167});zs.set(\"weather\",{ei:233171,fi:233172,li:233170});zs.set(\"webgl\",{ei:233174,fi:233175,li:233173});_.jv=class{constructor(){this.token=`${_.bo().replace(/-/g,\"\")}${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^_.Ha()).toString(36)}`.substring(0,36)}};_.jv.prototype.constructor=_.jv.prototype.constructor;_.kv=class{constructor(){this.id=\"\"}};_.lv=class{constructor(a,b={}){this.options=b;this.Dg=a.currencyCode;this.Fg=a.units;this.Eg=a.nanos??0}get currencyCode(){return this.Dg}get units(){return this.Fg}get nanos(){return this.Eg}toString(){return(new Intl.NumberFormat(this.options.language?new Intl.Locale(this.options.language,{region:this.options.region??void 0}):void 0,{style:\"currency\",currency:this.Dg})).format(this.units+this.nanos/1E9)}toJSON(){return{currencyCode:this.Dg,units:this.Fg,nanos:this.Eg}}};_.lv.prototype.toJSON=_.lv.prototype.toJSON;\n_.lv.prototype.toString=_.lv.prototype.toString;_.mv=class{constructor(a){this.Dg=_.qm(a.compoundCode);this.Eg=_.qm(a.globalCode)}get compoundCode(){return this.Dg}get globalCode(){return this.Eg}toJSON(){return{compoundCode:this.compoundCode,globalCode:this.globalCode}}};_.mv.prototype.toJSON=_.mv.prototype.toJSON;_.nv=class{constructor(a){this.Dg=a;this.Eg=[];this.Fg=[];a.addressLines&&(this.Eg=[...a.addressLines]);a.recipients&&(this.Fg=[...a.recipients])}get regionCode(){return this.Dg.regionCode}get languageCode(){return this.Dg.languageCode||null}get postalCode(){return this.Dg.postalCode||null}get sortingCode(){return this.Dg.sortingCode||null}get administrativeArea(){return this.Dg.administrativeArea||null}get locality(){return this.Dg.locality||null}get sublocality(){return this.Dg.sublocality||null}get addressLines(){return this.Eg}get recipients(){return this.Fg}get organization(){return this.Dg.organization||\nnull}toJSON(){return{regionCode:this.regionCode,languageCode:this.languageCode,postalCode:this.postalCode,sortingCode:this.sortingCode,administrativeArea:this.administrativeArea,locality:this.locality,sublocality:this.sublocality,addressLines:this.addressLines,recipients:this.recipients,organization:this.organization}}};_.ov=class{};_.ov.encodePath=function(a){a instanceof _.xp&&(a=a.getArray());a=(0,_.Jt)(a);return cda(a,function(b){return[Math.round(b.lat()*1E5),Math.round(b.lng()*1E5)]})};_.ov.decodePath=_.dda;var Ega,Fga,ida,hda;_.Dga=()=>(0,_.O)`<svg height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\" fill=\"currentColor\"><path d=\"M313-440l224 224-57 56-320-320 320-320 57 56-224 224h487v80H313z\"/></svg>`;Ega=({className:a,fill:b})=>(0,_.O)`<svg aria-label=\"Google Maps\" class=\"${a}\" height=\"16\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 98 18\" width=\"88\"><path d=\"M7.08 13.96a6.9 6.9 0 01-4.99-2.05A6.7 6.7 0 010 6.98Q0 4.1 2.09 2.05A6.9 6.9 0 017.08 0a6.7 6.7 0 014.79 1.92l-1.35 1.35a4.8 4.8 0 00-3.44-1.36q-2.1 0-3.55 1.48a5 5 0 00-1.45 3.59q0 2.12 1.46 3.59a4.8 4.8 0 003.55 1.48 4.8 4.8 0 003.53-1.4q.84-.84 1.04-2.4H7.08v-1.9h6.42a6 6 0 01.1 1.19q0 2.8-1.65 4.46a6.4 6.4 0 01-4.87 1.96M22 12.68a4.4 4.4 0 01-3.2 1.29 4.4 4.4 0 01-3.2-1.29 4.3 4.3 0 01-1.31-3.21q0-1.92 1.31-3.21a4.4 4.4 0 013.2-1.29q1.9 0 3.2 1.29a4.3 4.3 0 011.31 3.21A4.3 4.3 0 0122 12.68m-4.99-1.26q.75.78 1.79.77 1.04 0 1.79-.77.75-.78.75-1.95 0-1.19-.74-1.96-.75-.77-1.8-.77t-1.8.77a2.7 2.7 0 00-.74 1.96q0 1.17.75 1.95m14.84 1.26q-1.3 1.29-3.2 1.29c-1.9 0-2.33-.43-3.2-1.29a4.3 4.3 0 01-1.31-3.21q0-1.92 1.31-3.21 1.3-1.29 3.2-1.29c1.9 0 2.33.43 3.2 1.29a4.3 4.3 0 011.31 3.21q0 1.92-1.31 3.21m-4.99-1.26q.75.78 1.79.77 1.04 0 1.79-.77.75-.78.75-1.95 0-1.19-.74-1.96c-.74-.77-1.09-.77-1.8-.77q-1.05 0-1.8.77a2.7 2.7 0 00-.74 1.96q0 1.17.75 1.95M38.32 18q-1.5 0-2.52-.8a4.5 4.5 0 01-1.46-1.86l1.72-.72q.27.65.85 1.12.59.48 1.41.48a2.3 2.3 0 001.76-.68q.64-.68.64-1.96v-.65h-.07a2.9 2.9 0 01-2.37 1.02 4 4 0 01-3.01-1.31 4.4 4.4 0 01-1.29-3.17 4.4 4.4 0 011.29-3.19 4 4 0 013.01-1.32q.76 0 1.39.29t.98.72h.07v-.72h1.87v8.07q0 2.35-1.2 3.52A4.2 4.2 0 0138.32 18m.13-5.81q1.02 0 1.71-.77a2.8 2.8 0 00.69-1.93q0-1.17-.69-1.96a2.2 2.2 0 00-1.71-.79q-1.03 0-1.77.78a2.8 2.8 0 00-.73 1.96q0 1.16.73 1.93.74.78 1.77.78M45.93.48v13.21h-1.98V.48zm5.41 13.48a4.38 4.38 0 01-4.46-4.49q0-1.98 1.23-3.24a4 4 0 013.01-1.26 3.8 3.8 0 012.68 1.07 5 5 0 011.17 1.8l.2.51-6.01 2.49a2.3 2.3 0 002.18 1.36q1.37 0 2.21-1.24l1.53 1.02q-.5.76-1.45 1.38-.92.6-2.29.6m-2.5-4.63l4.02-1.67a1.4 1.4 0 00-.63-.69 2 2 0 00-1.04-.26q-.87 0-1.63.72a2.4 2.4 0 00-.72 1.9m11.21 4.36V1.5h1.57l4.24 7.42h.07l4.24-7.42h1.57v12.19h-1.57V6.45l.07-2.04h-.07l-3.81 6.69h-.92l-3.81-6.69h-.07l.07 2.04v7.24zm16.31.27q-1.33 0-2.22-.77a2.5 2.5 0 01-.89-2.03q0-1.36 1.06-2.14 1.05-.77 2.61-.77 1.38 0 2.26.51v-.23q0-.91-.63-1.47A2.3 2.3 0 0077 6.51q-.68 0-1.23.32a1.6 1.6 0 00-.77.88l-1.43-.61q.28-.75 1.14-1.39a3.6 3.6 0 012.25-.64q1.6 0 2.66.94 1.05.93 1.06 2.64v5.04h-1.5v-1.16h-.08a3 3 0 01-2.74 1.43m.25-1.43q.97 0 1.76-.72.8-.72.79-1.71-.67-.54-1.99-.54-1.14 0-1.72.49-.58.5-.58 1.16 0 .61.53.97.54.35 1.21.35m9.97 1.43q-.96 0-1.71-.41a3 3 0 01-1.13-1.02h-.07l.07 1.16v3.68h-1.57V5.35h1.5v1.16h.07a3 3 0 011.13-1.02 3.67 3.67 0 014.5.87 4.5 4.5 0 011.18 3.17q0 1.9-1.18 3.17a3.7 3.7 0 01-2.79 1.26m-.26-1.43q1.1 0 1.87-.83.78-.82.78-2.19t-.78-2.19a2.5 2.5 0 00-1.87-.83q-1.11 0-1.88.82-.78.81-.77 2.2c.01 1.39.26 1.65.77 2.2q.78.82 1.88.82m8.39 1.43a3.8 3.8 0 01-3.65-2.38l1.4-.58q.67 1.57 2.26 1.57.73 0 1.2-.32a1 1 0 00.47-.85q0-.81-1.14-1.11l-1.69-.41a4 4 0 01-1.52-.77 1.9 1.9 0 01-.72-1.54q0-1.11.98-1.8a4 4 0 012.32-.69q1.11 0 1.98.5t1.24 1.44l-1.34.56q-.46-1.11-1.91-1.11-.7 0-1.18.29t-.48.78q0 .72 1.11.97l1.65.39a3 3 0 011.74.94q.56.66.56 1.5 0 1.12-.92 1.87-.9.75-2.36.75\" fill=\"${b}\"/></svg>`;\nFga=({className:a,fill:b,outline:c})=>(0,_.O)`<svg aria-label=\"Google Maps\" class=\"${a}\" height=\"22\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 106 22\" width=\"106\"><g opacity=\".9\" fill=\"${c}\"><path d=\"M59.86 11.44l-.93-2.33a7.49 7.49 0 00-1.62-2.5 5.92 5.92 0 00-4.1-1.66c-1.17.01-2.26.31-3.2.88V.47h-6v4.77h-1.95a6.1 6.1 0 00-6.43 1.94 6.4 6.4 0 00-4.94-2.21 6.4 6.4 0 00-4.6 1.86l-.32.34-.32-.34a6.4 6.4 0 00-4.6-1.86c-1.56 0-2.92.46-4.07 1.38H14.3l2.47-2.46-1.49-1.4A8.69 8.69 0 009.1 0C6.72 0 4.48.87 2.7 2.61A8.63 8.63 0 000 8.97c0 2.48.91 4.62 2.7 6.37a8.88 8.88 0 006.4 2.62c2.47 0 4.7-.87 6.3-2.54l.11-.13a6.43 6.43 0 005.3 2.67 6.39 6.39 0 004.94-2.2l.32.34a6.43 6.43 0 004.6 1.86c1.27 0 2.41-.31 3.41-.92l.45 1.07a6.7 6.7 0 002.09 2.66A5.96 5.96 0 0040.37 22a6.2 6.2 0 004.48-1.73 5.66 5.66 0 001.5-2.58H50v-.67c1 .62 2.16.94 3.42.94a6.2 6.2 0 003.4-.94 6.97 6.97 0 002.02-1.94l1.11-1.66-1.87-1.25 1.77-.73h.01zM105 10.1l-.74-1.84a4.85 4.85 0 00-2.1-2.43c-.9-.5-1.9-.77-2.99-.77-1.31 0-2.48.35-3.48 1.05-.24.17-.45.36-.66.56a5.66 5.66 0 00-5.73-1.34h-4.64v.6c-.93-.58-2-.87-3.22-.87a5.8 5.8 0 00-3.22.9V1.5h-4.74l-3.11 5.45-3.12-5.45h-4.73v16.2h5.57v-2.6H72.65v2.6h5.58v-.37c.77.42 1.65.64 2.62.64.64 0 1.24-.1 1.79-.27h2.03v3.68h5.58v-3.46a5.65 5.65 0 004.83-1.58 5.72 5.72 0 004.17 1.64 5.7 5.7 0 003.63-1.2 4.32 4.32 0 00.73-6.08l1.39-.58z\"/></g><path d=\"M9.1 15.96a6.9 6.9 0 01-5-2.05 6.64 6.64 0 01-2.09-4.94c0-1.92.7-3.56 2.1-4.93A6.9 6.9 0 019.1 2c1.93 0 3.45.64 4.8 1.92l-1.36 1.35A4.85 4.85 0 009.1 3.9c-1.4 0-2.58.5-3.55 1.48a4.95 4.95 0 00-1.46 3.6c0 1.4.49 2.6 1.46 3.59.97.99 2.15 1.48 3.55 1.48s2.6-.47 3.54-1.4c.56-.56.9-1.36 1.04-2.4H9.11V8.32h6.43a6 6 0 01.1 1.2c0 1.87-.55 3.36-1.65 4.46a6.43 6.43 0 01-4.88 1.96zm14.94-1.28a4.4 4.4 0 01-3.2 1.29 4.4 4.4 0 01-3.21-1.3 4.34 4.34 0 01-1.32-3.2c0-1.29.45-2.36 1.32-3.22a4.4 4.4 0 013.2-1.29 4.4 4.4 0 013.2 1.3 4.34 4.34 0 011.32 3.2c0 1.29-.44 2.36-1.31 3.22zm-5-1.26c.5.52 1.1.77 1.8.77.68 0 1.28-.26 1.78-.77.5-.52.76-1.17.76-1.95s-.25-1.46-.75-1.97a2.4 2.4 0 00-1.8-.77c-.7 0-1.3.26-1.8.77s-.74 1.17-.74 1.97.25 1.43.75 1.95zm14.86 1.26a4.4 4.4 0 01-3.2 1.29 4.4 4.4 0 01-3.2-1.3 4.34 4.34 0 01-1.32-3.2c0-1.29.44-2.36 1.31-3.22a4.4 4.4 0 013.2-1.29 4.4 4.4 0 013.21 1.3 4.34 4.34 0 011.31 3.2c0 1.29-.44 2.36-1.3 3.22zm-5-1.26c.5.52 1.1.77 1.8.77.69 0 1.29-.26 1.79-.77.5-.52.75-1.17.75-1.95S33 10 32.5 9.5a2.4 2.4 0 00-1.8-.77c-.71 0-1.3.26-1.8.77s-.75 1.17-.75 1.97.25 1.43.75 1.95zM40.38 20c-1 0-1.84-.27-2.52-.8a4.54 4.54 0 01-1.46-1.86l1.72-.72c.18.43.47.8.85 1.12.39.32.86.48 1.41.48a2.3 2.3 0 001.76-.68c.43-.45.65-1.11.65-1.96v-.65h-.07a2.9 2.9 0 01-2.38 1.02 4.11 4.11 0 01-3.01-1.31 4.35 4.35 0 01-1.3-3.17 4.4 4.4 0 011.3-3.2 4.1 4.1 0 013.01-1.32c.51 0 .97.1 1.4.3.4.18.73.42.98.71h.07v-.73h1.87v8.08c0 1.57-.4 2.74-1.2 3.52A4.23 4.23 0 0140.38 20zm.13-5.81c.68 0 1.25-.26 1.71-.77.47-.52.7-1.16.7-1.93s-.23-1.45-.7-1.97a2.2 2.2 0 00-1.7-.78c-.69 0-1.29.26-1.78.78-.5.52-.73 1.19-.73 1.97s.24 1.42.73 1.93c.49.52 1.08.77 1.77.77zm7.5-11.72V15.7h-1.99V2.47H48zm5.42 13.49a4.38 4.38 0 01-4.47-4.5c0-1.27.42-2.4 1.24-3.24a4.05 4.05 0 013.01-1.26 3.83 3.83 0 012.69 1.07 5.1 5.1 0 011.17 1.8l.2.51-6.02 2.5a2.3 2.3 0 002.18 1.36c.91 0 1.65-.41 2.21-1.24l1.54 1.02c-.34.5-.82.97-1.46 1.38a4.1 4.1 0 01-2.3.6h.01zm-2.51-4.63l4.02-1.68a1.4 1.4 0 00-.63-.69 2.01 2.01 0 00-1.04-.26c-.58 0-1.12.24-1.63.72a2.36 2.36 0 00-.72 1.92v-.01zM64.54 15.69V3.49h1.57l4.25 7.43h.07l4.24-7.43h1.58v12.2h-1.58V8.44l.07-2.04h-.07l-3.81 6.7h-.92l-3.82-6.7h-.07l.07 2.04v7.25h-1.58zM80.86 15.96c-.89 0-1.63-.26-2.22-.77-.6-.51-.9-1.2-.9-2.03 0-.91.36-1.62 1.07-2.14.7-.53 1.57-.78 2.61-.78.93 0 1.68.17 2.27.51v-.24c0-.6-.21-1.1-.63-1.47a2.27 2.27 0 00-1.56-.55c-.45 0-.87.11-1.23.32a1.7 1.7 0 00-.76.9l-1.43-.62c.19-.5.57-.96 1.14-1.39a3.65 3.65 0 012.25-.64c1.08 0 1.96.31 2.67.94.7.62 1.06 1.5 1.06 2.64v5.05h-1.5v-1.16h-.07a3.08 3.08 0 01-2.75 1.43h-.02zm.26-1.43c.65 0 1.24-.24 1.77-.72s.79-1.05.79-1.71c-.44-.36-1.11-.54-2-.54-.76 0-1.33.16-1.72.49-.39.33-.58.72-.58 1.16 0 .4.18.73.53.97.35.24.75.36 1.21.36v-.01zM91.1 15.96c-.64 0-1.21-.14-1.71-.41a2.83 2.83 0 01-1.14-1.02h-.07l.07 1.16v3.68h-1.57V7.34h1.5V8.5h.07a2.9 2.9 0 011.14-1.02 3.67 3.67 0 014.5.87 4.52 4.52 0 011.18 3.18c0 1.26-.39 2.32-1.18 3.17a3.67 3.67 0 01-2.8 1.28v-.02zm-.26-1.43c.73 0 1.35-.28 1.87-.83.52-.55.78-1.28.78-2.2 0-.9-.26-1.64-.78-2.19a2.5 2.5 0 00-1.87-.83 2.5 2.5 0 00-1.88.82 3.04 3.04 0 00-.78 2.2c0 .93.26 1.66.78 2.2.52.55 1.14.83 1.88.83zM99.25 15.96a3.8 3.8 0 01-3.65-2.38L97 13c.44 1.04 1.2 1.57 2.26 1.57.5 0 .9-.11 1.2-.32a1 1 0 00.47-.85c0-.54-.38-.91-1.14-1.11l-1.7-.41a4.14 4.14 0 01-1.51-.77 1.86 1.86 0 01-.72-1.55c0-.74.33-1.34.98-1.8a3.94 3.94 0 012.32-.69c.74 0 1.4.17 1.98.5.58.34 1 .81 1.25 1.44l-1.37.56c-.3-.74-.94-1.1-1.9-1.1-.48 0-.87.1-1.2.28-.31.2-.47.45-.47.78 0 .48.37.8 1.11.98l1.65.39c.78.18 1.37.49 1.75.94a2.32 2.32 0 01-.36 3.37c-.62.5-1.4.75-2.38.75h.03z\" fill=\"${b}\"/></svg>`;\nida=({fill:a})=>(0,_.O)`<svg class=\"info-icon\" viewBox=\"0 -960 960 960\" aria-hidden=\"true\"><path fill=\"${a}\" d=\"M440-280h80v-240h-80zm40-320q17 0 28.5-11.5T520-640t-11.5-28.5T480-680t-28.5 11.5T440-640t11.5 28.5T480-600m0 520q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320\"/></svg>`;hda=({fill:a,outline:b})=>(0,_.O)`<svg aria-hidden=\"true\" class=\"info-icon--outline\" fill=\"none\" height=\"18\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"11 11 19 19\" width=\"18\"><circle cx=\"20\" cy=\"20\" r=\"9\" fill=\"${b}\" fill-opacity=\".9\"/><path d=\"M19.25 23.68h1.5V19.1h-1.5v4.57zm.75-5.84c.21 0 .4-.07.54-.22a.74.74 0 00.23-.55c0-.2-.08-.39-.23-.54a.74.74 0 00-.54-.22c-.21 0-.4.07-.54.22a.74.74 0 00-.23.54c0 .22.08.4.23.55.15.15.33.22.54.22zm0 9.51a7.38 7.38 0 01-5.21-2.14A7.38 7.38 0 0112.65 20a7.3 7.3 0 0110.22-6.77c.89.38 1.66.9 2.32 1.58.68.66 1.2 1.44 1.58 2.34a7.18 7.18 0 010 5.72A7.3 7.3 0 0120 27.35zm0-1.56c1.61 0 2.98-.56 4.1-1.68A5.59 5.59 0 0025.8 20c0-1.61-.57-2.98-1.7-4.1a5.59 5.59 0 00-4.1-1.7c-1.61 0-2.98.57-4.1 1.7a5.59 5.59 0 00-1.7 4.1c0 1.61.57 2.98 1.7 4.1a5.59 5.59 0 004.1 1.7z\" fill=\"${a}\"/></svg>`;\n_.Es=({ariaLabel:a,className:b})=>(0,_.O)`<svg aria-label=\"${a}\" class=\"${b}\" viewBox=\"0 -960 960 960\" fill=\"currentColor\"><path d=\"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120zm188-212l-56-56 372-372H560v-80h280v280h-80v-144z\"/></svg>`;var Gga=_.Fu([':host(:not([hidden])){display:block;font-family:Google Sans Text,Roboto,Arial,sans-serif}.attribution-text{font-weight:400;white-space:nowrap}.attribution-text.font--body-small{font-size:12px;letter-spacing:.2px;line-height:1.3333333333}.attribution-text.font--body-medium{font-size:14px;font-style:normal;letter-spacing:.1px;line-height:1.1428571429}.container{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;line-height:0}.container.full-button .info-button{-webkit-margin-start:0;-moz-margin-start:0;margin-inline-start:0;padding:15px}.container.full-button .info-icon{width:18px}.container>a{text-decoration:none}gmp-internal-dialog dialog{--gmp-internal-dialog-border-radius:var(--gmp-dialog-border-radius,28px);background-color:var(--gmp-mat-color-surface,light-dark(#fff,#131314));max-width:600px}gmp-internal-dialog dialog header .gm-ui-hover-effect>span{background-color:var(--gmp-mat-color-on-surface,light-dark(#1f1f1f,#e3e3e3))}@media (forced-colors:active){gmp-internal-dialog dialog header .gm-ui-hover-effect>span{background-color:ButtonText}}img{width:100%}svg{shape-rendering:geometricPrecision}.info-button{-webkit-margin-start:var(--gmp-mat-spacing-small,8px);-moz-margin-start:var(--gmp-mat-spacing-small,8px);background:none;border:none;cursor:default;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-inline-start:var(--gmp-mat-spacing-small,8px);padding:0;position:relative}.info-button>*{cursor:pointer}.info-button.tap-area-expanded:after{content:\"\";height:24px;left:-16px;position:absolute;top:-4px;width:48px}.info-icon{width:15px;z-index:1}']);var pv=class extends _.Ju{zh(){return(0,_.O)`<button\n      title=\"${\"\\u041d\\u0430\\u0437\\u0430\\u0434\"}\"\n      aria-label=\"${\"\\u041d\\u0430\\u0437\\u0430\\u0434\"}\"\n      >${_.Dga()}</button\n    >`}};pv.styles=_.Fu([\":host button{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;background:none;border:none;color:light-dark(#1f1f1f,#e3e3e3);cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;opacity:.6;padding:0}:host button:hover{color:light-dark(#000,#fff);opacity:1}:host button:dir(rtl) svg{-webkit-transform:scaleX(-1);transform:scaleX(-1)}\"]);\n_.qp(\"gmp-internal-back-button\",pv);var Hga=(0,_.Vi)`dialog.zlDrU-basic-dialog-element::backdrop{background-color:#202124}@supports ((-webkit-backdrop-filter:blur(3px)) or (backdrop-filter:blur(3px))){dialog.zlDrU-basic-dialog-element::backdrop{background-color:rgba(32,33,36,.7);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}}dialog[open].zlDrU-basic-dialog-element{display:flex;flex-direction:column}dialog.zlDrU-basic-dialog-element{border:none;border-radius:var(--gmp-internal-dialog-border-radius,28px);box-sizing:border-box;padding:20px 8px 8px}dialog.zlDrU-basic-dialog-element header{align-items:center;display:flex;gap:16px;justify-content:space-between;margin-bottom:20px;padding:0 16px}dialog.zlDrU-basic-dialog-element header h2{font-family:Google Sans,Roboto,Arial,sans-serif;line-height:28px;font-size:22px;letter-spacing:0;font-weight:400;color:light-dark(#3c4043,#e8eaed);flex:1;margin:0}dialog.zlDrU-basic-dialog-element .unARub-basic-dialog-element--content{display:flex;font-family:Roboto,Arial,sans-serif;font-size:13px;justify-content:center;padding:0 16px 16px;overflow:auto}\\n`;var Iga={\"close.svg\":\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22/%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3C/svg%3E\"};var Jga=(0,_.Vi)`.gm-ui-hover-effect{opacity:.6}.gm-ui-hover-effect:hover{opacity:1}.gm-ui-hover-effect\\u003espan{background-color:light-dark(#000,#fff)}@media (forced-colors:active),(prefers-contrast:more){.gm-ui-hover-effect\\u003espan{background-color:ButtonText}}sentinel{}\\n`;var tv;_.qv=(a,{root:b=document.head,Ew:c}={})=>{c&&(a=a.replace(/(\\W)left(\\W)/g,\"$1`$2\").replace(/(\\W)right(\\W)/g,\"$1left$2\").replace(/(\\W)`(\\W)/g,\"$1right$2\"));c=_.ql(\"STYLE\");c.appendChild(document.createTextNode(a));(a=Ki(\"style\",document))&&c.setAttribute(\"nonce\",a);b.insertBefore(c,b.firstChild);return c};_.rv=(a,b={})=>{a=_.Oi(a);_.qv(a,b)};_.sv=(a,b,c=!1)=>{b=b.getRootNode?b.getRootNode():document;b=b.head||b;const d=_.Kga(b);d.has(a)||(d.add(a),_.rv(a,{root:b,Ew:c}))};tv=new WeakMap;\n_.Kga=a=>{tv.has(a)||tv.set(a,new WeakSet);return tv.get(a)};_.Lga=RegExp(\"[\\u0591-\\u06ef\\u06fa-\\u08ff\\u200f\\ud802-\\ud803\\ud83a-\\ud83b\\ufb1d-\\ufdff\\ufe70-\\ufefc]\");_.Mga=RegExp(\"[A-Za-z\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u02b8\\u0300-\\u0590\\u0900-\\u1fff\\u200e\\u2c00-\\ud801\\ud804-\\ud839\\ud83c-\\udbff\\uf900-\\ufb1c\\ufe00-\\ufe6f\\ufefd-\\uffff]\");_.Nga=RegExp(\"^[^A-Za-z\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u02b8\\u0300-\\u0590\\u0900-\\u1fff\\u200e\\u2c00-\\ud801\\ud804-\\ud839\\ud83c-\\udbff\\uf900-\\ufb1c\\ufe00-\\ufe6f\\ufefd-\\uffff]*[\\u0591-\\u06ef\\u06fa-\\u08ff\\u200f\\ud802-\\ud803\\ud83a-\\ud83b\\ufb1d-\\ufdff\\ufe70-\\ufefc]\");\n_.Oga=RegExp(\"[A-Za-z\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u02b8\\u0300-\\u0590\\u0900-\\u1fff\\u200e\\u2c00-\\ud801\\ud804-\\ud839\\ud83c-\\udbff\\uf900-\\ufb1c\\ufe00-\\ufe6f\\ufefd-\\uffff][^\\u0591-\\u06ef\\u06fa-\\u08ff\\u200f\\ud802-\\ud803\\ud83a-\\ud83b\\ufb1d-\\ufdff\\ufe70-\\ufefc]*$\");_.Pga=RegExp(\"[\\u0591-\\u06ef\\u06fa-\\u08ff\\u200f\\ud802-\\ud803\\ud83a-\\ud83b\\ufb1d-\\ufdff\\ufe70-\\ufefc][^A-Za-z\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u02b8\\u0300-\\u0590\\u0900-\\u1fff\\u200e\\u2c00-\\ud801\\ud804-\\ud839\\ud83c-\\udbff\\uf900-\\ufb1c\\ufe00-\\ufe6f\\ufefd-\\uffff]*$\");var Qga,Rga,Sga;Qga=new _.Do(12,12);Rga=new _.Fo(13,13);Sga=new _.Do(0,0);\n_.Cs=class extends _.gv{constructor(a){var b=Ym(\"CloseButtonView\",\"element\",()=>_.Tm(_.Lm(HTMLButtonElement,\"HTMLButtonElement\"))(a.element)||_.Bs(a.label||\"\\u0417\\u0430\\u043a\\u0440\\u044b\\u0442\\u044c\"));a={...a,element:b};super(a);this.Nq=a.Nq||Qga;this.ks=a.ks||Rga;this.label=a.label||\"\\u0417\\u0430\\u043a\\u0440\\u044b\\u0442\\u044c\";this.ownerElement=a.ownerElement;this.EC=a.EC||!1;this.offset=a.offset||Sga;a.EC||(this.element.style.position=\"absolute\",this.element.style.top=_.vm(this.offset.y),this.element.style.right=\n_.vm(this.offset.x));_.ir(this.element,new _.Fo(this.ks.width+2*this.Nq.x,this.ks.height+2*this.Nq.y));_.sv(Jga,this.ownerElement);this.element.classList.add(\"gm-ui-hover-effect\");b=document.createElement(\"span\");b.style.setProperty(\"mask-image\",`url(\"${Iga[\"close.svg\"]}\")`);b.style.pointerEvents=\"none\";b.style.display=\"block\";_.ir(b,this.ks);b.style.margin=`${this.Nq.y}px ${this.Nq.x}px`;this.element.appendChild(b);this.Uh(a,_.Cs,\"CloseButtonView\")}};_.Fs=class extends HTMLElement{constructor(a){super();this.options=a;this.Fg=!1;this.Zh=document.createElement(\"dialog\");this.Eg=document.createElement(\"header\");this.Dg=new pv;this.Zh.addEventListener(\"close\",()=>{this.dispatchEvent(new Event(\"close\"));this.Dg.remove()});this.Dg.addEventListener(\"click\",()=>{this.dispatchEvent(new Event(\"gmp-internal-back\",{bubbles:!0,composed:!0}));this.Dg.remove()});this.addEventListener(\"gmp-internal-next\",b=>{b.stopPropagation();this.Eg.prepend(this.Dg)})}connectedCallback(){if(!this.Fg){this.Zh.ariaLabel=\nthis.options.title;this.Zh.append(eda(this));var a=this.Zh,b=a.append;const c=document.createElement(\"div\");_.Ko(c,\"basic-dialog-element--content\");c.appendChild(this.options.content);b.call(a,c);this.append(this.Zh);_.Ko(this.Zh,\"basic-dialog-element\");_.sv(Hga,this);this.Fg=!0}}close(){this.Zh.close()}};_.qp(\"gmp-internal-dialog\",_.Fs);var Tga=_.Fu([\".disclosure-container{font-size:16px}.slot-container{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;gap:var(--gmp-mat-spacing-medium,12px)}.content,.slot-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-moz-box-orient:vertical;-moz-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.content{color:var(--gmp-mat-color-on-surface,light-dark(#1f1f1f,#e3e3e3))}.content .description{font:var(--gmp-mat-font-body-medium,normal 400 .875em/1.4285714286 var(--gmp-mat-font-family,Google Sans Text,sans-serif));letter-spacing:.0071428571em;margin-top:var(--gmp-mat-spacing-small,8px)}.content .heading{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font:var(--gmp-mat-font-headline-medium,normal 500 1.125em/1.3333333333 var(--gmp-mat-font-family,Google Sans Text,sans-serif));letter-spacing:0}.content .heading span{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.content .heading:dir(rtl) svg{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.content .heading svg path{fill:var(--gmp-mat-color-on-surface,light-dark(#1f1f1f,#e3e3e3))}.content .link-item{font:var(--gmp-mat-font-label-large,normal 500 .875em/1.4285714286 var(--gmp-mat-font-family,Google Sans Text,sans-serif));letter-spacing:.0071428571em;padding:var(--gmp-mat-spacing-extra-small,4px) 0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.content .link-item a{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:var(--gmp-mat-color-primary,light-dark(#007b8b,#58b9ca));display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:var(--gmp-mat-spacing-extra-small,4px);padding:10px 12px 10px 0;text-decoration:none}.content .link-item a .icon-container{height:1em;width:1em}.content .link-item a .icon-container svg path{fill:var(--gmp-mat-color-primary,light-dark(#007b8b,#58b9ca))}.content .links{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:var(--gmp-mat-spacing-extra-small,4px)}.content.no-links{margin-bottom:var(--gmp-mat-spacing-small,8px)}\"]);var uv=a=>(...b)=>({_$litDirective$:a,values:b}),vv=class{get qp(){return this.Dg.qp}qI(a,b,c){this.Hg=a;this.Dg=b;this.Gg=c}rI(a,b){return this.update(a,b)}update(a,b){return this.zh(...b)}};/*\n\n Copyright 2018 Google LLC\n SPDX-License-Identifier: BSD-3-Clause\n*/\n_.Hs=uv(class extends vv{constructor(a){super();if(a.type!==1||a.name!==\"class\"||a.Bk?.length>2)throw Error(\"`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.\");}zh(a){return\" \"+Object.keys(a).filter(b=>a[b]).join(\" \")+\" \"}update(a,[b]){if(this.Eg===void 0){this.Eg=new Set;a.Bk!==void 0&&(this.Fg=new Set(a.Bk.join(\" \").split(/\\s/).filter(d=>d!==\"\")));for(const d in b)b[d]&&!this.Fg?.has(d)&&this.Eg.add(d);return this.zh(b)}a=a.element.classList;for(var c of this.Eg)c in\nb||(a.remove(c),this.Eg.delete(c));for(const d in b)c=!!b[d],c===this.Eg.has(d)||this.Fg?.has(d)||(c?(a.add(d),this.Eg.add(d)):(a.remove(d),this.Eg.delete(d)));return Yp}});_.wv=class extends _.Ju{zh(){return(0,_.O)`\n      <div class=\"disclosure-container\" id=\"note\" role=\"note\">\n        <div class=\"slot-container\">\n          ${this.disclosureContent}\n          <slot></slot>\n        </div>\n      </div>\n    `}};_.wv.styles=Tga;_.A([_.$r({Zg:!1}),_.B(\"design:type\",String)],_.wv.prototype,\"heading\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",String)],_.wv.prototype,\"description\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",String)],_.wv.prototype,\"href\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Array)],_.wv.prototype,\"disclosureContent\",void 0);\nvar xv=class extends _.Ju{constructor(){super(...arguments);this.links=[];this.showAccessoryIcon=!1}zh(){const a=fda(this),b=(0,_.Hs)({content:!0,\"no-links\":!a});return(0,_.O)`\n      <div class=${b}>\n        ${this.heading?(0,_.O)` <div class=\"heading\">\n              <span>${this.heading}</span>\n              ${this.showAccessoryIcon?(0,_.O)`${(0,_.O)`<svg height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\" fill=\"currentColor\"><path d=\"M400-280v-400l200 200-200 200z\"/></svg>`}`:\"\"}\n            </div>`:\"\"}\n        ${this.description?(0,_.O)`<div class=\"description\"\n              ><span>${this.description}</span></div\n            >`:\"\"}\n        ${a?(0,_.O)`<div class=\"links\">${a}</div>`:\"\"}\n        <slot></slot>\n      </div>\n    `}};xv.styles=Tga;_.A([_.$r({Zg:!1}),_.B(\"design:type\",String)],xv.prototype,\"heading\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",String)],xv.prototype,\"description\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Array)],xv.prototype,\"links\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Object)],xv.prototype,\"showAccessoryIcon\",void 0);_.qp(\"gmp-internal-basic-disclosure\",_.wv);_.qp(\"gmp-internal-basic-disclosure-section\",xv);_.Uga=(0,_.O)`\n  <gmp-internal-basic-disclosure-section\n    .heading=${\"\\u0423\\u0441\\u043b\\u043e\\u0432\\u0438\\u044f \\u0438\\u0441\\u043f\\u043e\\u043b\\u044c\\u0437\\u043e\\u0432\\u0430\\u043d\\u0438\\u044f Google \\u041a\\u0430\\u0440\\u0442\"}\n    .links=${[{text:\"\\u0423\\u0441\\u043b\\u043e\\u0432\\u0438\\u044f \\u0438\\u0441\\u043f\\u043e\\u043b\\u044c\\u0437\\u043e\\u0432\\u0430\\u043d\\u0438\\u044f\",href:\"https://www.google.com/help/terms_maps/\"},{text:\"\\u041f\\u043e\\u043b\\u0438\\u0442\\u0438\\u043a\\u0430 \\u043a\\u043e\\u043d\\u0444\\u0438\\u0434\\u0435\\u043d\\u0446\\u0438\\u0430\\u043b\\u044c\\u043d\\u043e\\u0441\\u0442\\u0438\",href:\"https://policies.google.com/privacy\"}]}>\n  </gmp-internal-basic-disclosure-section>\n`;_.yv=class extends _.Ju{constructor(){super();this.attributionType=\"LOGO\";this.infoButtonTapAreaExpanded=!1;this.logoColorOptions={vy:\"#5e5e5e\",xx:\"#fff\"};this.showTermsOfService=this.showInfoButton=!0;this.disclosureContent=[];this.attributionText=\"Google Maps\";this.attributionFont=\"BODY_SMALL\";this.moreInfoButtonTitle=\"\\u041e \\u043a\\u043e\\u043d\\u0442\\u0435\\u043d\\u0442\\u0435 Google \\u041a\\u0430\\u0440\\u0442\";this.logoLinkOptions=void 0;this.Eg=new _.wv;this.Dg=gda(this);_.Hl(\"util\").then(a=>{a.Ho()})}yr(a){if(a.has(\"showTermsOfService\")||\na.has(\"disclosureContent\"))a=[...this.disclosureContent],this.showTermsOfService&&a.push(_.Uga),this.Eg.disclosureContent=a}zh(){var a=this.logoColorOptions.vy||\"#5e5e5e\",b=this.logoColorOptions.xx||\"#fff\",c=Gs(a);const d=Gs(b);switch(this.attributionType){case \"LOGO\":a=Ega({className:\"attribution__logo--default\",fill:`light-dark(${a}, ${b})`});break;case \"LOGO_OUTLINE\":a=Fga({className:\"attribution__logo--outline\",fill:`light-dark(${a}, ${b})`,outline:`light-dark(${c}, ${d})`});break;default:a=(0,_.O)` <span\n          translate=\"no\"\n          class=\"${(0,_.Hs)({\"attribution-text\":!0,\"font--body-small\":this.attributionFont===\"BODY_SMALL\",\"font--body-medium\":this.attributionFont===\"BODY_MEDIUM\"})}\"\n          style=\"color: light-dark(${a}, ${b})\"\n          >${this.attributionText}</span\n        >`}this.logoLinkOptions&&(a=(0,_.O)` <a\n        aria-label=\"${_.As(this.logoLinkOptions.title)}\"\n        href=\"${this.logoLinkOptions.url.href}\"\n        rel=\"noopener\"\n        target=\"_blank\"\n        title=\"${_.As(this.logoLinkOptions.title)}\">\n        ${a}\n      </a>`);b={container:!0,\"full-button\":[\"LOGO\",\"LOGO_OUTLINE\"].includes(this.attributionType)||this.attributionText!==\"Google Maps\"};c=jda(this,this.Dg);return(0,_.O)`<div class=${(0,_.Hs)(b)}>\n        ${a}${c}</div\n      >${this.Dg}`}};_.yv.styles=Gga;_.A([_.$r({Zg:!1}),_.B(\"design:type\",String)],_.yv.prototype,\"attributionType\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Object)],_.yv.prototype,\"infoButtonTapAreaExpanded\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Object)],_.yv.prototype,\"logoColorOptions\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Object)],_.yv.prototype,\"showInfoButton\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Object)],_.yv.prototype,\"showTermsOfService\",void 0);\n_.A([_.$r({Zg:!1}),_.B(\"design:type\",Array)],_.yv.prototype,\"disclosureContent\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Object)],_.yv.prototype,\"attributionText\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Object)],_.yv.prototype,\"attributionFont\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",String)],_.yv.prototype,\"moreInfoButtonTitle\",void 0);_.A([_.$r({Zg:!1}),_.B(\"design:type\",Object)],_.yv.prototype,\"logoLinkOptions\",void 0);_.qp(\"gmp-internal-attribution\",_.yv);var Vga=class{constructor(a={}){this.headers={[\"X-Goog-Api-Key\"]:_.dl?.Gg()||\"\",[\"Content-Type\"]:\"application/json+protobuf\",[\"X-Goog-Maps-Channel-Id\"]:_.dl?.Ig()||\"\",...a}}};var Wga=class extends Vga{constructor(){super({})}intercept(a,b){nda(this,a);return b(a)}};_.zv=class extends Vga{constructor(a={}){super(a)}async intercept(a,b){nda(this,a);await pda(a);return b(a)}};_.Av=class{constructor(){this.Dg=new (this.Gg())(this.Fg(),null,{withCredentials:!1,QC:_.Cm(\"gInternalNoCorsPreflightForTesting\")===\"true\",cD:this.Eg(),PC:this.Hg()})}Eg(){return[new _.zv]}Hg(){return[new Wga]}};_.Bv=new Map;_.Cv=new Map;var rda=\"\\u042f\\u043d\\u0432\\u0430\\u0440\\u044c \\u0424\\u0435\\u0440\\u0430\\u043b\\u044c \\u041c\\u0430\\u0440\\u0442 \\u0410\\u043f\\u0440\\u0435\\u043b\\u044c \\u041c\\u0430\\u0439 \\u0418\\u044e\\u043d\\u044c \\u0418\\u044e\\u043b\\u044c \\u0410\\u0432\\u0433\\u0443\\u0441\\u0442 \\u0421\\u0435\\u043d\\u0442\\u044f\\u0431\\u0440\\u044c \\u041e\\u043a\\u0442\\u044f\\u0431\\u0440\\u044c \\u041d\\u043e\\u044f\\u0431\\u0440\\u044c \\u0414\\u0435\\u043a\\u0430\\u0431\\u0440\\u044c\".split(\" \");/*\n\n Copyright 2020 Google LLC\n SPDX-License-Identifier: BSD-3-Clause\n*/\nvar Xga={};_.Yga=uv(class extends vv{constructor(){super(...arguments);this.key=_.xu}zh(a,b){this.key=a;return b}update(a,[b,c]){b!==this.key&&(a.lj=Xga,this.key=b);return c}});_.Zga=uv(class extends vv{constructor(a){super();if(a.type!==1||a.name!==\"style\"||a.Bk?.length>2)throw Error(\"The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.\");}zh(a){return Object.keys(a).reduce((b,c)=>{const d=a[c];if(d==null)return b;c=c.includes(\"-\")?c:c.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,\"-$&\").toLowerCase();return b+`${c}:${d};`},\"\")}update(a,[b]){a=a.element.style;this.Eg===void 0&&(this.Eg=new Set);for(var c of this.Eg)b[c]==\nnull&&(this.Eg.delete(c),c.includes(\"-\")?a.removeProperty(c):a[c]=null);for(const d in b)if(c=b[d],c!=null){this.Eg.add(d);const e=typeof c===\"string\"&&c.endsWith(\" !important\");d.includes(\"-\")||e?a.setProperty(d,e?c.slice(0,-11):c,e?\"important\":\"\"):a[d]=c}return Yp}});Symbol.for(\"\");var Vca=arguments[0],Dda=new _.ak;_.pa.google.maps.Load&&_.pa.google.maps.Load(Cda);}).call(this,{});\n\n"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": -1,
          "_transferSize": 100302,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:21:47.672Z",
        "time": 216.93200001027435,
        "timings": {
          "blocked": 2.3449999218210578,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.506,
          "wait": 162.83099995341152,
          "receive": 51.25000013504177,
          "_blocked_queueing": 1.3809999218210578,
          "_blocked_proxy": 0.6639999999999999,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "507802",
        "_initiator": {
          "type": "preflight",
          "url": "https://tracks.alteg.io/api/v1/track",
          "requestId": "28412.4139"
        },
        "_priority": "High",
        "_resourceType": "preflight",
        "cache": {},
        "connection": "9090",
        "pageref": "page_11",
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
              "value": "98b4e9d5e90685ca-HKG"
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
              "value": "Wed, 08 Oct 2025 10:21:48 GMT"
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
              "value": "b14b521db3c0d7c3b3b2bde6749ca9de"
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
        "startedDateTime": "2025-10-08T10:21:47.677Z",
        "time": 455.7499999942854,
        "timings": {
          "blocked": 0.6829999999999999,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.2869999999999999,
          "wait": 453.7020000513494,
          "receive": 1.0779999429360032,
          "_blocked_queueing": -1,
          "_blocked_proxy": 0.6829999999999999,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "506531",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "O",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 26029
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6847
              },
              {
                "functionName": "onScheduleTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 4019
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6745
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2958
              },
              {
                "functionName": "scheduleMacroTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3267
              },
              {
                "functionName": "Bt",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 10659
              },
              {
                "functionName": "",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 26439
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "apply",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 360009
              },
              {
                "functionName": "",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 683208
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 30350
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17254
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "loadIcon",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 686218
              },
              {
                "functionName": "set name",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 685850
              },
              {
                "functionName": "gu",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 58452
              },
              {
                "functionName": "Md",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 93368
              },
              {
                "functionName": "Ta",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 102175
              },
              {
                "functionName": "Ma",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 97775
              },
              {
                "functionName": "fI",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 133555
              },
              {
                "functionName": "template",
                "scriptId": "3593",
                "url": "https://n958200.alteg.io/chunk-HNFBT5P4.js",
                "lineNumber": 0,
                "columnNumber": 43707
              },
              {
                "functionName": "Td",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 94517
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105409
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "detectChanges",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 107692
              },
              {
                "functionName": "ngAfterContentChecked",
                "scriptId": "3578",
                "url": "https://n958200.alteg.io/main-JGQFRULP.js",
                "lineNumber": 0,
                "columnNumber": 126455
              },
              {
                "functionName": "Xc",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64967
              },
              {
                "functionName": "Mm",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 65122
              },
              {
                "functionName": "Vu",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64874
              },
              {
                "functionName": "Vr",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64548
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105659
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "yw",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 161128
              },
              {
                "functionName": "synchronizeOnce",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159712
              },
              {
                "functionName": "synchronize",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159431
              },
              {
                "functionName": "_tick",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159111
              },
              {
                "functionName": "tick",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159010
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162301
              },
              {
                "functionName": "invoke",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6464
              },
              {
                "functionName": "onInvoke",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74795
              },
              {
                "functionName": "invoke",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6404
              },
              {
                "functionName": "run",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 1714
              },
              {
                "functionName": "run",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73629
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162272
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "emit",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 71627
              },
              {
                "functionName": "ma",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73996
              },
              {
                "functionName": "onHasTask",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 75009
              },
              {
                "functionName": "hasTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7362
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7688
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3891
              },
              {
                "functionName": "runTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2564
              },
              {
                "functionName": "F",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 9181
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8192
              },
              {
                "functionName": "M",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "3560",
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
        "pageref": "page_11",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/assets/icon-patch/common/arrow-big.svg",
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
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/select-city/36/select-branch?orderStatus=successed&o=&previousStepUrl=%2Fcompany%2F237666%2Fpersonal%2Fmenu%3ForderStatus%3Dsuccessed%26o%3D"
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
              "value": "sentry-environment=live,sentry-release=191110.5e092a20,sentry-public_key=7bcbd183611e0badf786d2fc35dc275d,sentry-trace_id=1e4cb02e84e24a9d8a9425f0c3e98733,sentry-transaction=%2Fselect-city%2F%3AcityId%2Fselect-branch%2F,sentry-sampled=false,sentry-sample_rand=0.06359053125700553,sentry-sample_rate=0"
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
              "value": "1e4cb02e84e24a9d8a9425f0c3e98733-8eeb98e781c1dffe-0"
            },
            {
              "name": "x-requested-with",
              "value": ""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1575,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "2153"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e9d5eeec5df5-HKG"
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
              "value": "image/svg+xml"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 10:21:47 GMT"
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
              "value": "W/\"68e51480-1ee\""
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
              "value": "756b8f4008093c64318de51da9f93f74"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 494,
            "mimeType": "image/svg+xml",
            "compression": 218,
            "text": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.5303 5.46967C15.8232 5.76256 15.8232 6.23744 15.5303 6.53033L10.0607 12L15.5303 17.4697C15.8232 17.7626 15.8232 18.2374 15.5303 18.5303C15.2374 18.8232 14.7626 18.8232 14.4697 18.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L14.4697 5.46967C14.7626 5.17678 15.2374 5.17678 15.5303 5.46967Z\" fill=\"currentColor\"/>\n</svg>\n"
          },
          "redirectURL": "",
          "headersSize": 633,
          "bodySize": 276,
          "_transferSize": 909,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:21:47.682Z",
        "time": 198.84600001387298,
        "timings": {
          "blocked": 3.2910000058934092,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.6179999999999999,
          "wait": 193.43900001017005,
          "receive": 1.4979999978095293,
          "_blocked_queueing": 1.1780000058934093,
          "_blocked_proxy": 0.9490000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "506524",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "O",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 26029
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6847
              },
              {
                "functionName": "onScheduleTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 4019
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6745
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2958
              },
              {
                "functionName": "scheduleMacroTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3267
              },
              {
                "functionName": "Bt",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 10659
              },
              {
                "functionName": "",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 26439
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "apply",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 360009
              },
              {
                "functionName": "",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 683208
              },
              {
                "functionName": "_trySubscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5760
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5705
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 30350
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 17254
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5187
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 209
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5669
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "subscribe",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 5621
              },
              {
                "functionName": "loadIcon",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 686218
              },
              {
                "functionName": "set name",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 685850
              },
              {
                "functionName": "gu",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 58452
              },
              {
                "functionName": "Md",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 93368
              },
              {
                "functionName": "Ta",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 102175
              },
              {
                "functionName": "Ma",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 97775
              },
              {
                "functionName": "fI",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 133555
              },
              {
                "functionName": "template",
                "scriptId": "3589",
                "url": "https://n958200.alteg.io/chunk-IGSDBEZN.js",
                "lineNumber": 0,
                "columnNumber": 39159
              },
              {
                "functionName": "Td",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 94517
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105409
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "detectChanges",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 107692
              },
              {
                "functionName": "ngAfterContentChecked",
                "scriptId": "3578",
                "url": "https://n958200.alteg.io/main-JGQFRULP.js",
                "lineNumber": 0,
                "columnNumber": 126455
              },
              {
                "functionName": "Xc",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64967
              },
              {
                "functionName": "Mm",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 65122
              },
              {
                "functionName": "Vu",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64874
              },
              {
                "functionName": "Vr",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64548
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105659
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "yw",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 161128
              },
              {
                "functionName": "synchronizeOnce",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159712
              },
              {
                "functionName": "synchronize",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159431
              },
              {
                "functionName": "_tick",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159111
              },
              {
                "functionName": "tick",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159010
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162301
              },
              {
                "functionName": "invoke",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6464
              },
              {
                "functionName": "onInvoke",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74795
              },
              {
                "functionName": "invoke",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6404
              },
              {
                "functionName": "run",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 1714
              },
              {
                "functionName": "run",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73629
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162272
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "emit",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 71627
              },
              {
                "functionName": "ma",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73996
              },
              {
                "functionName": "onHasTask",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 75009
              },
              {
                "functionName": "hasTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7362
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7688
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3891
              },
              {
                "functionName": "runTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2564
              },
              {
                "functionName": "F",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 9181
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8192
              },
              {
                "functionName": "M",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "3560",
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
        "pageref": "page_11",
        "request": {
          "method": "GET",
          "url": "https://n958200.alteg.io/assets/icon-patch/micro-pin.svg",
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
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/select-city/36/select-branch?orderStatus=successed&o=&previousStepUrl=%2Fcompany%2F237666%2Fpersonal%2Fmenu%3ForderStatus%3Dsuccessed%26o%3D"
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
              "value": "sentry-environment=live,sentry-release=191110.5e092a20,sentry-public_key=7bcbd183611e0badf786d2fc35dc275d,sentry-trace_id=1e4cb02e84e24a9d8a9425f0c3e98733,sentry-transaction=%2Fselect-city%2F%3AcityId%2Fselect-branch%2F,sentry-sampled=false,sentry-sample_rand=0.06359053125700553,sentry-sample_rate=0"
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
              "value": "1e4cb02e84e24a9d8a9425f0c3e98733-920f03f61ceb5ffe-0"
            },
            {
              "name": "x-requested-with",
              "value": ""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1568,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Age",
              "value": "677"
            },
            {
              "name": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "name": "CF-RAY",
              "value": "98b4e9d5fff485dd-HKG"
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
              "value": "image/svg+xml"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 10:21:47 GMT"
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
              "value": "W/\"68e51480-1a6\""
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
              "value": "1ce3d84de4bc8b964f5c2700c70cab55"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 422,
            "mimeType": "image/svg+xml",
            "compression": 154,
            "text": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.2427 2.77001C14.5858 5.13006 14.5858 8.95648 12.2426 11.3166L8.99971 14.5829C8.44754 15.139 7.55231 15.139 7.00015 14.5829L3.75732 11.3166C1.4142 8.9566 1.41423 5.13018 3.7574 2.77009C6.10056 0.410001 9.89955 0.409966 12.2427 2.77001Z\" fill=\"currentColor\"/>\n</svg>\n"
          },
          "redirectURL": "",
          "headersSize": 632,
          "bodySize": 268,
          "_transferSize": 900,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:21:47.692Z",
        "time": 200.2610000781715,
        "timings": {
          "blocked": 2.9450000304654242,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.4710000000000001,
          "wait": 195.38299997477233,
          "receive": 1.4620000729337335,
          "_blocked_queueing": 1.487000030465424,
          "_blocked_proxy": 0.7280000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "507773",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "setProperty",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 251531
              },
              {
                "functionName": "setProperty",
                "scriptId": "3578",
                "url": "https://n958200.alteg.io/main-JGQFRULP.js",
                "lineNumber": 0,
                "columnNumber": 65916
              },
              {
                "functionName": "Ma",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 97862
              },
              {
                "functionName": "fI",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 133555
              },
              {
                "functionName": "va",
                "scriptId": "3586",
                "url": "https://n958200.alteg.io/chunk-TX67VJHB.js",
                "lineNumber": 0,
                "columnNumber": 157240
              },
              {
                "functionName": "Td",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 94517
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105409
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "$v",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106368
              },
              {
                "functionName": "qd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106722
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105758
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "Ud",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106400
              },
              {
                "functionName": "Bd",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106174
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105573
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "detectChanges",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 107692
              },
              {
                "functionName": "ngAfterContentChecked",
                "scriptId": "3578",
                "url": "https://n958200.alteg.io/main-JGQFRULP.js",
                "lineNumber": 0,
                "columnNumber": 126455
              },
              {
                "functionName": "Xc",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64967
              },
              {
                "functionName": "Mm",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 65122
              },
              {
                "functionName": "Vu",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64874
              },
              {
                "functionName": "Vr",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 64548
              },
              {
                "functionName": "Vv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105659
              },
              {
                "functionName": "hs",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 106588
              },
              {
                "functionName": "jv",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 105027
              },
              {
                "functionName": "$d",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 104869
              },
              {
                "functionName": "yw",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 161128
              },
              {
                "functionName": "synchronizeOnce",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159712
              },
              {
                "functionName": "synchronize",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159431
              },
              {
                "functionName": "_tick",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159111
              },
              {
                "functionName": "tick",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 159010
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162301
              },
              {
                "functionName": "invoke",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6464
              },
              {
                "functionName": "onInvoke",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 74795
              },
              {
                "functionName": "invoke",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6404
              },
              {
                "functionName": "run",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 1714
              },
              {
                "functionName": "run",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73629
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 162272
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3766
              },
              {
                "functionName": "_next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3449
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14244
              },
              {
                "functionName": "At",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 2869
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 14083
              },
              {
                "functionName": "emit",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 71627
              },
              {
                "functionName": "ma",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 73996
              },
              {
                "functionName": "onHasTask",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 75009
              },
              {
                "functionName": "hasTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7362
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7688
              },
              {
                "functionName": "_updateTaskCount",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3891
              },
              {
                "functionName": "runTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2564
              },
              {
                "functionName": "F",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 9181
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8192
              },
              {
                "functionName": "M",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "3560",
                "url": "https://n958200.alteg.io/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js",
                "lineNumber": 0,
                "columnNumber": 9404
              }
            ]
          }
        },
        "_priority": "Low",
        "_resourceType": "image",
        "cache": {},
        "connection": "9090",
        "pageref": "page_11",
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
              "value": "56401"
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
              "value": "984c81da0ecaf8f4-SIN"
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
              "value": "Wed, 08 Oct 2025 10:21:47 GMT"
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
              "value": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}"
            },
            {
              "name": "report-to",
              "value": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v4?s=Ys4LPAPAwZAuumE%2FJYgCAwoea42qnMuwQnm6pG6JOVXSfBFoMKxgjLU1A5b4kyMVdCBELW9CeEJtPixe8mRiopiaUEueSwsoydvK2XaQfJ4JLBCluIVo6Ec920DFkpUj1fZw04E%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}"
            },
            {
              "name": "server",
              "value": "nginx"
            },
            {
              "name": "server-timing",
              "value": "cfL4;desc=\"?proto=TCP&rtt=233577&min_rtt=232777&rtt_var=50453&sent=6&recv=10&lost=0&retrans=0&sent_bytes=3956&recv_bytes=3101&delivery_rate=18397&cwnd=253&unsent_bytes=0&cid=f11d52e5925706db&ts=446&x=0\""
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=2592000; includeSubDomains; preload"
            },
            {
              "name": "traceparent",
              "value": "00-99600276dbc5cca12664fd970e19def2-f93f067c0dc228b0-01"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-cached-since",
              "value": "2025-10-07T18:41:46+00:00"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-id",
              "value": "kgn-hw-edge-gc138"
            },
            {
              "name": "x-id-fe",
              "value": "kgn-hw-edge-gc138"
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
          "_transferSize": 2599,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:21:47.757Z",
        "time": 17.102000070735812,
        "timings": {
          "blocked": 3.583999986037612,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.6709999999999998,
          "wait": 11.515999961525202,
          "receive": 1.3310001231729984,
          "_blocked_queueing": 2.107999986037612,
          "_blocked_proxy": 0.8500000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "507720",
        "_initiator": {
          "type": "other"
        },
        "_priority": "High",
        "_resourceType": "other",
        "cache": {},
        "connection": "9090",
        "pageref": "page_11",
        "request": {
          "method": "GET",
          "url": "https://assets.alteg.io/general/c/c8/c86d52bdca3dd61_20190731140233.png",
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
              "value": "/general/c/c8/c86d52bdca3dd61_20190731140233.png"
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
              "value": "286"
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
              "value": "98b4e2d8afcb14b4-HKG"
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
              "value": "Wed, 08 Oct 2025 10:21:47 GMT"
            },
            {
              "name": "etag",
              "value": "\"81538b1e506f83492a3e1020d6eeb954\""
            },
            {
              "name": "last-modified",
              "value": "Fri, 20 Oct 2023 14:54:25 GMT"
            },
            {
              "name": "nel",
              "value": "{\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}"
            },
            {
              "name": "report-to",
              "value": "{\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=oKlUoi34H9YhOh5tfQ0EvvRidMFo7hY9K%2FcO8h2yBEMmV5c7tW5NMweqSSEAwkHfsArU7ULzZIJT6m12ujNhhRo6nqutMP9zlZwVkt1kjqjb9g%3D%3D\"}]}"
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
              "value": "00-01256cb3c1acd6bb9ec98e51c813f047-079865d51c3b2613-01"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-cached-since",
              "value": "2025-10-08T10:17:01+00:00"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-id",
              "value": "kgn-hw-edge-gc138"
            },
            {
              "name": "x-id-fe",
              "value": "kgn-hw-edge-gc138"
            }
          ],
          "cookies": [],
          "content": {
            "size": 160537,
            "mimeType": "image/png",
            "text": "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQBJgLZ/ATFFLv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP0N/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9qqfwAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALNJfGgAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB79Y4pAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAc1awAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALd/SIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC6Z1XAAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3//wD5/f0ABQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDgsAAAAAAFkoIQAAAAAAAAAAACAPDADi8/UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO/4+gCq2eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2/PwABQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC74eYA6PX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/v8A////AAYCAgAAAAAAAAAAAAYDAwD3/PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAABLlIr/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAQAAAAAAAAAAAP7//wD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAQEA/v//AP8AAAAAAAAAAQAAAAIBAQD9//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAEBAQD9//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAACAQEAAAAAAP8A/wD+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAAAD9//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAQD9//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAQD+//8A/wAAAAMBAQD+//8A/wAAAAMBAQD+//8A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAQATCQcA+f39APH5+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAAAAAAAA/v8AAAAAAAACAQAAAAAAAP7/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9//8AAAAAAAAAAAAAAAAA/wAAAP3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD9//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/f//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3//wAAAAAAAAAAAP3//wAAAAAAAAAAAP3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3//wDq9vgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/AAAAAAAAAAAAAAAAAAD+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP/3/gD//f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9P8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOaB/b8AACAASURBVAAAAAAAAAAAAAAAAAAAAAD///8A//f+AP/+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAA/+v+AP3Z/AD92vsA//j+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD+5v0AAPsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+/wD+4v0A/dn8AP3d/AD//v8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//3/AP/3/wAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P8A/ub9AAAAAAAA+QAA/dv8AAIcAwAABQEAAAAAAAAAAAAAAAAAAQEAAAAKAQABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5/wAA9/8A//H+AAEVAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/6/wD/+v8AAAAAAAAAAAAAAAAAAP8AAP7p/QAA9P8AAAAAAAD1/wD+5f0AARACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEFAQABBwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//H+AP7i/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACGwMA//v/AP7h/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAIeAwABEgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/x/wAAAAAA/vH+AAEUAgABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP3Y+wAA/gAAAAAAAAAAAAAAAAAAAAAAAAAJAAADJgQA/dz8AAD+AAD/7f4A/+3+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEOAQADIgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAETAgAAAgAAAP0AAP/w/gD/9f4AAP0AAAAAAAAAAAAAAAUAAAEUAwABAQAAAAEAAAEOAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//f8A/ur9AAD9AAAAAAAAAAAAAP/x/gAAAAAAAPX/AP7k/QAAAQAAAAAAAAABAAACEwIAAQgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAIfBAAA+f8AAP8AAP/1/gD/8v8AAAAAAAD7AAD+8v4AAP8AAAERAQAAAgEAAAIAAP/0/wAA9/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0/wD//v8AAQIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A//T+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARUCAAMYBAAAAAAAAAAAAP8V/wD93vwAAPj/AAAAAAAAAAAAAPsAAAD3/gABHgQAAQIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAwEAAhIDAP3i/AAA9f8AAAAAAAAAAAAAAAAAAP8AAP/t/gAAAAAAAAUAAAIeBAABCAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAIPAgD///8A/+/+AP/z/wAAAAAAAAAAAAD8AAD/6f4AAh8DAAEPAgABAQEAAAAAAP/4/wD92PsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AAD/9f8AAQ0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P8AAPsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAADAEAAyAEAAEEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGgQAABoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj8/YA+P39AAkEBAABAQEAUiYfAO/4+QAPBwYABAICAAAAAAD///8A3fDzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQACGAMAAh8DAAABAAAAAAAAAAAAAAD9AAD+3vwA/u39AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8P4AAAAAAAEUAgADKwUAAx0DAAACAAD+8P4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4/wD92/sAAPX/AAAAAAAAAAAAAAAAAAERAQADIgQAAQQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7/v4AwOLoAP///wAAAAAAAgEBABMJCAAEAgIAAAAAAAAAAADV7fAA5/X3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhADAAAFAQD+3/wAAP0AAAAAAAAA/wAA/uP9AP/6/wACGAMAAQEBAAAAAAAAAAAAAAAAAP///wD/9P4AAiEDAAEOAgABAQEAARMDAAELAQD94/0A//z/AAEEAQAAAAAAAAAAAAAAAAAAAAAA/vT+AP7f/AAA/QAAAAAAAAAAAAAAAAAAARcCAAIYAwABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFT3S/AAAIABJREFUAAAAAAAAAAAAAAAAAACA/38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADM6e0AAAEAAEEdGQAIBAMAAAAAAAAAAAD9//8A0uruALjg5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEuUiv/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4/gD93/wAAPkAAAAAAAAAAAAAAAAAAAERAQACHQQAAQIBAAAAAAAAAAAA////AAD8AAABBQEAAAAAAAAAAAAAAAAAAAAAAP/+/wAA/gAAAQQBAAAAAAAAAAAA////AP/v/gD+4/0AAP8AAAAAAAAAAAAAAAEAAAIcAwABEgIAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcDAgAdDQsADQYFAPn9/QDk8/YA8vr7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAgADJAUA/eD8AAD1/wAAAAAAAAAAAP/v/wD9+vwAAyAEAAEFAQAAAAAAAQEBAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECAQAAAgAAAAAAAAAAAAD///8A/uj9AP/p/gAAAAAAAAAAAAAAAAAAAwAAAiAEAAEMAQABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn9/gDc8PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBQEAAyIEAAEQAQAAAAAAAAAAAAAAAAAA9f8A/dz7AP/4/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+/wD+4v0A/+n+AAAAAAAAAAAAAAAAAAAGAAADJAQAAg0CAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKxMQAEAdGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5vT2AK/c4gAAAAAAAAAAAAAAAAAAAAAALhUR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AAAAAAAFAAACIwQAAyoFAAIUAwABAQEAAAAAAAAAAAAA+P8A//L/AAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwUEAE8kHQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3GRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwoJADMXEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiEA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBACIQDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQUBAAAAAAAAAAAA/uz9AP///wAAAAAAAAAAAAAAAAABAQEAAQkCAAENAQAAAAAAAAAAAAAAAAAAAAAAAAQAAAEPAQAAAAAAAAAAAAAAAAD/7/8A//X/AAAAAAD///8A/ub9AAD/AAAAAAAAAAAAAAAHAAABEAEAAAAAAAAAAAAAAAAAAAAAAAAIAQACDQIAAQIBAAAAAAAAAAAAAAAAAAD/AAD+7P4AAAAAAAAAAAABBQEAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADk8/UAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBgQAAAAAAAAAAAAAAAAAAAAAACEPDQAAAAAAAAAAAAAAAAD7/v4A1ezwAAAAAAAAAAAAAAAAAAEAAAAiEAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAAAAAAAD+7v0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAITAwAAAAAAAAQBAAAAAAAAAQAAAQUAAAERAgABAgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//T/AAD5AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P//AAAAAAAAAAAAAAAAAAAAAAD+//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P//AAAAAAAEAgEAMhcTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6/f4AAAAAAAAAAAAAAAAAAAAAAAAAAAAEAgIAAAAAAAAAAAAAAAAAFwoIAA0GBQAAAAAAAAAAAAAAAADq9vgA4PL0AP7//wAAAAAAAAAAAAAAAAAhDw0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAABAAAAAAAAAAAAAAAAAAD/7f4A//7/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAMAAAAAAAAAAAAAAAUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAA/+z9AAAAAAAAAAAAAAAAAAAAAAAABAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAFQoIAAAAAAAAAAAAAAAAAAAAAADu+PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+/7+AAAAAAAqExAADQYFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALhUSAPX7/AAAAAAA/P/+APT6/ADo9fYA8Pn7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJBAMAAAAAAAAAAAAAAAAAAAAAAAAAAAD7/f4AAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAgEBAB8ODAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAiDw0A1u3xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAP/+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//j+AAAHAQABAQEAAAAAAP/s/gAAEQIAAQQBAAAAAAAAAAAA////AP7p/QADGAQAAAAAAAAAAAD/+P4AAAcBAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPr9/QAAAAUAAAAAAAAAAAAAAAAABQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AP8AAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1e3wAPX7/AAAAAAABAICAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDQsAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/P0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwoIAAwFBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiEA0AAQAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3j/AD/7f4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAABgEAAQYAAAAGAQAA/AAA//r/AAD6/wAA+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAEKQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAQAAAAHAQABBgEAAQcBAAAGAAABBgEAAAcBAAADAAABAQEAAAAAAAAAAAAAAAAAAAAAAP///wAA/gAAAPr/AP/6AAAA+f8A//r/AAD5/wD/+v8AAPsAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD8/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGQIAAQkCAAEGAAAABQEAAAIAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAwAAAAkBAAEJAAAAAAAAAAAAAAAAAAD///8AAP8AAAD8AAD/+f8AAPr/AP7n/QAA/AAAAAAAAAAAAAAAAAAAAAAAAAD9AAD///8AAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9AAAAAAAAAAAAAAAAAAAACAAAAPgAAAAEAAACEAMAAAAAAAEHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/5/wD/9f4A//j/AAD5/wAABQEAAQgBAAAJAQABCgEAAQEBAAAAAAAAAAAAAAAAAAAAAAABAQEAAAEAAAAGAAAABQAA//UAAAELAQD/8f8AAAcAAAD6AAAA/wAAAAAAAAD/AAAA/QAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AAD7/wAAAAAAAAAAAAAJAAAABAEAAAAAAAELAQD/9f4A/eL8AP/+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+7P4A/+r+AP/x/wD/7P4A/uj9AAD9AAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD+6P0A/+3+AAEMAgAAAAAAAPsAAAERAgAAAAAAAAAAAAAAAAAA/P8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAD9AAAAAAAAAAAAAAIWAwAA9v8AAAAAAAELAgD/9f8AAPX/AP7q/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHAQADJAQAARUCAAAAAAAADAEAAycFAAIOAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD1/wD/6f4A//X+AAELAQAAAAAAAP4AAAEOAQAAAgAAAAAAAAAAAAD/+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPoAAAENAQABAwEA//D+AAAAAAAAAQAAAQ8CAP/0/gAAAAAA/wAAAAELAgD/9/4AAAAAAAAAAAABCQEAAPv/AAAAAAAAAgAAAAMAAAD+AAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAAAAAAAA/v8AAAEAAAEFAQAAAAAAAPv/AAADAAAABgAAAAAAAP/3/wABAwEAAAgBAAAAAAD/9P4AAAUAAAAKAQAAAAAA/vD+AAABAAABFAMA//X/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//b+AAITAwD///8A/u/+AAAAAAABDgEAAQMBAP/0/wAAAAAAAQcAAAAFAAD/9/8AAAAAAAACAAAABwEA//v/AAAAAAAAAwAAAAIAAAD9AAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD//QAAAAAAAAAGAQAAAAAA//sAAAEAAQABCAEAAAAAAP/3/gAAAQAAAQwBAAAAAAD/9f8AAAAAAAIRAgAAAAAAAPP/AP/7/wABDQEA//z/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAAAGAAAA9v8AAPj/AAAAAAABEQIA////AP/0/gAAAAAAAQwCAAEAAQAA9/8AAAAAAAAJAQABAQEAAPoAAAAAAAAABQEAAQEBAP/9/wAAAAAAAAIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAA/QAAAAAAAAAFAAAAAAAAAPv/AP8A/wAACgEAAAAAAAD4AAD//v8AAQwCAAAAAAAA/AAAAPj/AAEQAgAAAQAAAAAAAP/u/gABAQEAAQoCAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnkHTAAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAQoBAAEAAQD+7f4AAAAAAAAEAAABDgIAAPj/AAD8AAAAAAAAAQwBAP8A/wD/9/8AAAAAAAEJAQAAAAAA//v/AAAAAAABBgAAAAAAAAD9AAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQMBAAAAAAAA/f8AAAAAAAEGAQAAAAAAAP0AAAD+AAABCQIAAAAAAAD/AAAA+P8AAQsBAAABAAAAAAAA//P/AAEEAQABDgEAAAAAAP7u/QD///8AAQsBAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAQQBAP/+/wD/8f4AAAAAAAESAgABAgEA//P/AAAAAAAAAQAAAQwCAAD7AAAA/AAAAAAAAAEJAQAA/wAAAPr/AAAAAAAABgEAAAAAAAD9AAAAAAAAAQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAA/QAAAAAAAAAGAQAAAAAAAP8AAAD7/wABCQEA/wAAAAAAAAD/9/8AAQQBAAAIAQAAAAAA/vP+AAABAAABFAMAAAAAAAD5AAD/9f8AAQIBAAECAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDAQADJAQAAAwBAAIUAwAAAAAA//L+AAAAAAAACAEAAAQAAP/2/wAAAAAAAAAAAAEKAQD///8AAPwAAAAAAAABBgEAAAAAAAD9/wAAAAAAAAIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAA/QAA////AAEFAQAAAAAAAAAAAP/7AAAABQAAAQUAAAAAAAD/9v8AAAEAAAENAQAAAAAAAPX/AP/9/wABDAEAAQ4BAAIgAwABCwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCQIABCQFAAEGAQD//f8A//X/AAAAAAABDgEAAQEBAP/2/gAAAAAAAAIAAAAHAQAA+wAAAP8AAAAAAAAABgEAAP8AAP/9AAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAP0AAAAFAAAAAQAAAAAAAAD6/wABAAEAAQkBAAAAAAD/9v8A////AAEOAgAAAAAAAP4AAP/0/wABAQEAAyIFAAIQAwABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAhwDAAAHAAACDgIAAP8AAP/2/wAAAAAAAAkBAAECAQD/+v8AAAAAAAAAAAABBgAAAAAAAAD9/wAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAP0AAAECAQAABAAAAAAAAP/5/wAAAQAAAAoBAAAAAAAA+P8AAP8AAAEKAQAABwAAARcCAAELAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAgEAARMDAAESAgAAAAAA////AAD4/wAAAAAAAQoBAAAAAAAA+v8AAAAAAAABAAAABQEA/wD/AAD9AAAAAAAAAQMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQMAAAAAAAAAAAAAAP3/AAAAAQAABgEAAPv/AAD6/wAAAAAAAQoCAP8A/gAA/wAAAPj/AAEJAgADKAUAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQABAQEAAAEAAAMjBAABEQIAAQsBAAAAAAD/+f8AAAAAAAAEAAAAAgAAAP4AAAD9AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBAAAAAAAAAAAA//wAAAABAAABBwEAAAAAAP/5AAAAAAAAAQoBAAAMAQACIQQAAAkBAAABAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAJAQADHwIA////AAAAAAAA/gAAAAAAAAAGAQABAQEA//7/AAD/AAAAAAAAAAMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAPz/AAAAAAAABgEAAAAAAAD+/wD///8AAAMAAAMjBAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAACGwMAABICAP/7AAAAAAAAAPz/AAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAA/QAAAPwAAAAAAAACDgEA/woEAAEMAQABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAoBAAEAAAAAAAAAAAYBAAIcAwD+8P4AAQUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAELAQAACQEAAQ8CAAAAAAABCgIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3QgMswAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQMBAAEUAwACFAMAAAAAAAAAAAABCgEA/woBAAENAQAAAAAAAQEBAAMiBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEAMAAhADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVpbk0AAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHWGfjAAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByHE3jgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbqDOHQAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApYmv8AAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABd0RZUAABHnSURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/MDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkyo+IT25EGAAAAABJRU5ErkJggg==",
            "encoding": "base64"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": -1,
          "_transferSize": 160825,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T10:21:47.785Z",
        "time": 55.72599999140948,
        "timings": {
          "blocked": 3.4650000691637395,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.6940000000000004,
          "wait": 17.47699995033443,
          "receive": 34.08999997191131,
          "_blocked_queueing": 1.0640000691637397,
          "_blocked_proxy": 1.6480000000000001,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "506489",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 334625
              },
              {
                "functionName": "c.fetch",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 138606
              },
              {
                "functionName": "c.send",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 137811
              },
              {
                "functionName": "",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136746
              },
              {
                "functionName": "c.send",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 136660
              },
              {
                "functionName": "v.send",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 127941
              },
              {
                "functionName": "e.track",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 26646
              },
              {
                "functionName": "track",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 751891
              },
              {
                "functionName": "trackBenchmark",
                "scriptId": "3600",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 753263
              },
              {
                "functionName": "",
                "scriptId": "3813",
                "url": "https://n958200.alteg.io/chunk-3XC4XRL4.js",
                "lineNumber": 0,
                "columnNumber": 1180
              },
              {
                "functionName": "",
                "scriptId": "3813",
                "url": "https://n958200.alteg.io/chunk-3XC4XRL4.js",
                "lineNumber": 0,
                "columnNumber": 1029
              },
              {
                "functionName": "o.subscribe.a",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 32880
              },
              {
                "functionName": "_next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 4732
              },
              {
                "functionName": "next",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 3176
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 11417
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 11268
              },
              {
                "functionName": "_execute",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 21403
              },
              {
                "functionName": "execute",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 21248
              },
              {
                "functionName": "flush",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 23306
              },
              {
                "functionName": "",
                "scriptId": "3601",
                "url": "https://n958200.alteg.io/chunk-KO722YSM.js",
                "lineNumber": 0,
                "columnNumber": 22891
              },
              {
                "functionName": "S.<computed>",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 21628
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7089
              },
              {
                "functionName": "runTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2354
              },
              {
                "functionName": "invokeTask",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8163
              },
              {
                "functionName": "D.useG.invoke",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8063
              },
              {
                "functionName": "y.args.<computed>",
                "scriptId": "3577",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 21245
              }
            ],
            "parent": {
              "description": "requestAnimationFrame",
              "callFrames": [
                {
                  "functionName": "v",
                  "scriptId": "3577",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 21276
                },
                {
                  "functionName": "scheduleTask",
                  "scriptId": "3577",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 6847
                },
                {
                  "functionName": "scheduleTask",
                  "scriptId": "3577",
                  "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                  "lineNumber": 0,
                  "columnNumber": 2958
                },
                {
                  "functionName": "scheduleMacroTask",
                  "scriptId": "3577",
                  "url": "htt
```
