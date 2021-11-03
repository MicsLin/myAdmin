var e,t,n={exports:{}};t=function(e){function t(e,t,n,i){e.hasOwnProperty(t)||(e[t]=i.apply(null,n))}t(e=e?e._modules:{},"Extensions/FullScreen.js",[e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Renderer/HTML/AST.js"],e["Core/Utilities.js"]],(function(e,t,n,i){var o=i.addEvent;return i=function(){function e(e){this.chart=e,this.isOpen=!1,e=e.renderTo,this.browserProps||("function"==typeof e.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:e.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:e.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:e.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}return e.prototype.close=function(){var e=this.chart,t=e.options.chart;this.isOpen&&this.browserProps&&e.container.ownerDocument instanceof Document&&e.container.ownerDocument[this.browserProps.exitFullscreen](),this.unbindFullscreenEvent&&(this.unbindFullscreenEvent=this.unbindFullscreenEvent()),e.setSize(this.origWidth,this.origHeight,!1),this.origHeight=this.origWidth=void 0,t.width=this.origWidthOption,t.height=this.origHeightOption,this.origHeightOption=this.origWidthOption=void 0,this.isOpen=!1,this.setButtonText()},e.prototype.open=function(){var e=this,t=e.chart,n=t.options.chart;if(n&&(e.origWidthOption=n.width,e.origHeightOption=n.height),e.origWidth=t.chartWidth,e.origHeight=t.chartHeight,e.browserProps){var i=o(t.container.ownerDocument,e.browserProps.fullscreenChange,(function(){e.isOpen?(e.isOpen=!1,e.close()):(t.setSize(null,null,!1),e.isOpen=!0,e.setButtonText())})),r=o(t,"destroy",i);e.unbindFullscreenEvent=function(){i(),r()},(n=t.renderTo[e.browserProps.requestFullscreen]())&&n.catch((function(){alert("Full screen is not supported inside a frame.")}))}},e.prototype.setButtonText=function(){var e=this.chart,t=e.exportDivElements,i=e.options.exporting,o=i&&i.buttons&&i.buttons.contextButton.menuItems;e=e.options.lang,i&&i.menuItemDefinitions&&e&&e.exitFullscreen&&e.viewFullscreen&&o&&t&&(t=t[o.indexOf("viewFullscreen")])&&n.setElementHTML(t,this.isOpen?e.exitFullscreen:i.menuItemDefinitions.viewFullscreen.text||e.viewFullscreen)},e.prototype.toggle=function(){this.isOpen?this.close():this.open()},e}(),t.Fullscreen=i,o(e,"beforeRender",(function(){this.fullscreen=new t.Fullscreen(this)})),t.Fullscreen})),t(e,"Mixins/Navigation.js",[],(function(){return{initUpdate:function(e){e.navigation||(e.navigation={updates:[],update:function(e,t){this.updates.forEach((function(n){n.update.call(n.context,e,t)}))}})},addUpdate:function(e,t){t.navigation||this.initUpdate(t),t.navigation.updates.push({update:e,context:t})}}})),t(e,"Extensions/Exporting/ExportingDefaults.js",[e["Core/Globals.js"],e["Core/Color/Palette.js"]],(function(e,t){return{exporting:{type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24,symbolFill:t.neutralColor60,symbolStroke:t.neutralColor60,symbolStrokeWidth:3,theme:{padding:5}},menuStyle:{border:"1px solid "+t.neutralColor40,background:t.backgroundColor,padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:t.neutralColor80,background:"none",fontSize:e.isTouchDevice?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:t.highlightColor80,color:t.backgroundColor}}}})),t(e,"Extensions/Exporting/ExportingSymbols.js",[],(function(){var e;return function(e){function t(e,t,n,i){return[["M",e,t+2.5],["L",e+n,t+2.5],["M",e,t+i/2+.5],["L",e+n,t+i/2+.5],["M",e,t+i-1.5],["L",e+n,t+i-1.5]]}function n(e,t,n,i){return e=i/3-2,(i=[]).concat(this.circle(n-e,t,e,e),this.circle(n-e,t+e+4,e,e),this.circle(n-e,t+2*(e+4),e,e))}var i=[];e.compose=function(e){-1===i.indexOf(e)&&(i.push(e),(e=e.prototype.symbols).menu=t,e.menuball=n.bind(e))}}(e||(e={})),e})),t(e,"Core/HttpUtilities.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],(function(e,t){var n=e.doc,i=t.createElement,o=t.discardElement,r=t.merge,s=t.objectEach,a={ajax:function(e){var t=r(!0,{url:!1,type:"get",dataType:"json",success:!1,error:!1,data:!1,headers:{}},e);e={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var n=new XMLHttpRequest;if(!t.url)return!1;n.open(t.type.toUpperCase(),t.url,!0),t.headers["Content-Type"]||n.setRequestHeader("Content-Type",e[t.dataType]||e.text),s(t.headers,(function(e,t){n.setRequestHeader(t,e)})),n.onreadystatechange=function(){if(4===n.readyState){if(200===n.status){var e=n.responseText;if("json"===t.dataType)try{e=JSON.parse(e)}catch(i){return void(t.error&&t.error(n,i))}return t.success&&t.success(e)}t.error&&t.error(n,n.responseText)}};try{t.data=JSON.stringify(t.data)}catch(i){}n.send(t.data||!0)},getJSON:function(e,t){a.ajax({url:e,success:t,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(e,t,a){var l=i("form",r({method:"post",action:e,enctype:"multipart/form-data"},a),{display:"none"},n.body);s(t,(function(e,t){i("input",{type:"hidden",name:t,value:e},null,l)})),l.submit(),o(l)}};return a})),t(e,"Extensions/Exporting/Exporting.js",[e["Core/Renderer/HTML/AST.js"],e["Core/Chart/Chart.js"],e["Mixins/Navigation.js"],e["Core/DefaultOptions.js"],e["Extensions/Exporting/ExportingDefaults.js"],e["Extensions/Exporting/ExportingSymbols.js"],e["Core/Globals.js"],e["Core/HttpUtilities.js"],e["Core/Color/Palette.js"],e["Core/Utilities.js"]],(function(e,t,n,i,o,r,s,a,l,c){i=i.defaultOptions;var u,p=s.doc,h=s.win,d=c.addEvent,g=c.css,f=c.createElement,x=c.discardElement,m=c.extend,v=c.find,y=c.fireEvent,b=c.isObject,w=c.merge,E=c.objectEach,C=c.pick,S=c.removeEvent,F=c.uniqueKey;return function(i){function o(e){var t=this,n=t.renderer,i=w(t.options.navigation.buttonOptions,e),o=i.onclick,r=i.menuItems,s=i.symbolSize||12;if(t.btnCount||(t.btnCount=0),t.exportDivElements||(t.exportDivElements=[],t.exportSVGElements=[]),!1!==i.enabled&&i.theme){var a,c=i.theme,u=c.states,p=u&&u.hover;u=u&&u.select,t.styledMode||(c.fill=C(c.fill,l.backgroundColor),c.stroke=C(c.stroke,"none")),delete c.states,o?a=function(e){e&&e.stopPropagation(),o.call(t,e)}:r&&(a=function(e){e&&e.stopPropagation(),t.contextMenu(h.menuClassName,r,h.translateX,h.translateY,h.width,h.height,h),h.setState(2)}),i.text&&i.symbol?c.paddingLeft=C(c.paddingLeft,30):i.text||m(c,{width:i.width,height:i.height,padding:0}),t.styledMode||(c["stroke-linecap"]="round",c.fill=C(c.fill,l.backgroundColor),c.stroke=C(c.stroke,"none"));var h=n.button(i.text,0,0,a,c,p,u).addClass(e.className).attr({title:C(t.options.lang[i._titleKey||i.titleKey],"")});if(h.menuClassName=e.menuClassName||"highcharts-menu-"+t.btnCount++,i.symbol){var d=n.symbol(i.symbol,i.symbolX-s/2,i.symbolY-s/2,s,s,{width:s,height:s}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(h);t.styledMode||d.attr({stroke:i.symbolStroke,fill:i.symbolFill,"stroke-width":i.symbolStrokeWidth||1})}h.add(t.exportingGroup).align(m(i,{width:h.width,x:C(i.x,t.buttonOffset)}),!0,"spacingBox"),t.buttonOffset+=(h.width+i.buttonSpacing)*("right"===i.align?-1:1),t.exportSVGElements.push(h,d)}}function u(){if(this.printReverseInfo){var e=this.printReverseInfo,t=e.childNodes,n=e.origDisplay;e=e.resetParams,this.moveContainers(this.renderTo),[].forEach.call(t,(function(e,t){1===e.nodeType&&(e.style.display=n[t]||"")})),this.isPrinting=!1,e&&this.setSize.apply(this,e),delete this.printReverseInfo,A=void 0,y(this,"afterPrint")}}function k(){var e=p.body,t=this.options.exporting.printMaxWidth,n={childNodes:e.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0,this.pointer.reset(null,0),y(this,"beforePrint"),t&&this.chartWidth>t&&(n.resetParams=[this.options.chart.width,void 0,!1],this.setSize(t,void 0,!1)),[].forEach.call(n.childNodes,(function(e,t){1===e.nodeType&&(n.origDisplay[t]=e.style.display,e.style.display="none")})),this.moveContainers(e),this.printReverseInfo=n}function T(e){e.renderExporting(),d(e,"redraw",e.renderExporting),d(e,"destroy",e.destroyExport)}function O(t,n,i,o,r,s,a){var l=this,u=l.options.navigation,x=l.chartWidth,v=l.chartHeight,w="cache-"+t,E=Math.max(r,s),C=l[w];if(!C){l.exportContextMenu=l[w]=C=f("div",{className:t},{position:"absolute",zIndex:1e3,padding:E+"px",pointerEvents:"auto"},l.fixedDiv||l.container);var S=f("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},C);l.styledMode||g(S,m({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},u.menuStyle)),C.hideMenu=function(){g(C,{display:"none"}),a&&a.setState(0),l.openMenu=!1,g(l.renderTo,{overflow:"hidden"}),g(l.container,{overflow:"hidden"}),c.clearTimeout(C.hideTimer),y(l,"exportMenuHidden")},l.exportEvents.push(d(C,"mouseleave",(function(){C.hideTimer=h.setTimeout(C.hideMenu,500)})),d(C,"mouseenter",(function(){c.clearTimeout(C.hideTimer)})),d(p,"mouseup",(function(e){l.pointer.inClass(e.target,t)||C.hideMenu()})),d(C,"click",(function(){l.openMenu&&C.hideMenu()}))),n.forEach((function(t){if("string"==typeof t&&(t=l.options.exporting.menuItemDefinitions[t]),b(t,!0)){var n=void 0;t.separator?n=f("hr",void 0,void 0,S):("viewData"===t.textKey&&l.isDataTableVisible&&(t.textKey="hideData"),n=f("li",{className:"highcharts-menu-item",onclick:function(e){e&&e.stopPropagation(),C.hideMenu(),t.onclick&&t.onclick.apply(l,arguments)}},void 0,S),e.setElementHTML(n,t.text||l.options.lang[t.textKey]),l.styledMode||(n.onmouseover=function(){g(this,u.menuItemHoverStyle)},n.onmouseout=function(){g(this,u.menuItemStyle)},g(n,m({cursor:"pointer"},u.menuItemStyle)))),l.exportDivElements.push(n)}})),l.exportDivElements.push(S,C),l.exportMenuWidth=C.offsetWidth,l.exportMenuHeight=C.offsetHeight}n={display:"block"},i+l.exportMenuWidth>x?n.right=x-i-r-E+"px":n.left=i-E+"px",o+s+l.exportMenuHeight>v&&"top"!==a.alignOptions.verticalAlign?n.bottom=v-o-E+"px":n.top=o+s-E+"px",g(C,n),g(l.renderTo,{overflow:""}),g(l.container,{overflow:""}),l.openMenu=!0,y(l,"exportMenuShown")}function P(e){var t,n=e?e.target:this,i=n.exportSVGElements,o=n.exportDivElements;e=n.exportEvents,i&&(i.forEach((function(e,o){e&&(e.onclick=e.ontouchstart=null,t="cache-"+e.menuClassName,n[t]&&delete n[t],i[o]=e.destroy())})),i.length=0),n.exportingGroup&&(n.exportingGroup.destroy(),delete n.exportingGroup),o&&(o.forEach((function(e,t){e&&(c.clearTimeout(e.hideTimer),S(e,"mouseleave"),o[t]=e.onmouseout=e.onmouseover=e.ontouchstart=e.onclick=null,x(e))})),o.length=0),e&&(e.forEach((function(e){e()})),e.length=0)}function M(e,t){t=this.getSVGForExport(e,t),e=w(this.options.exporting,e),a.post(e.url,{filename:e.filename?e.filename.replace(/\//g,"-"):this.getFilename(),type:e.type,width:e.width||0,scale:e.scale,svg:t},e.formAttributes)}function j(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML}function N(){var e=this.userOptions.title&&this.userOptions.title.text,t=this.options.exporting.filename;return t?t.replace(/\//g,"-"):("string"==typeof e&&(t=e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!t||5>t.length)&&(t="chart"),t)}function D(e){var n,i=w(this.options,e);i.plotOptions=w(this.userOptions.plotOptions,e&&e.plotOptions),i.time=w(this.userOptions.time,e&&e.time);var o=f("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},p.body),r=this.renderTo.style.width,s=this.renderTo.style.height;r=i.exporting.sourceWidth||i.chart.width||/px$/.test(r)&&parseInt(r,10)||(i.isGantt?800:600),s=i.exporting.sourceHeight||i.chart.height||/px$/.test(s)&&parseInt(s,10)||400,m(i.chart,{animation:!1,renderTo:o,forExport:!0,renderer:"SVGRenderer",width:r,height:s}),i.exporting.enabled=!1,delete i.data,i.series=[],this.series.forEach((function(e){(n=w(e.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:e.visible})).isInternal||i.series.push(n)}));var a={};this.axes.forEach((function(e){e.userOptions.internalKey||(e.userOptions.internalKey=F()),e.options.isInternal||(a[e.coll]||(a[e.coll]=!0,i[e.coll]=[]),i[e.coll].push(w(e.userOptions,{visible:e.visible})))}));var l=new t(i,this.callback);return e&&["xAxis","yAxis","series"].forEach((function(t){var n={};e[t]&&(n[t]=e[t],l.update(n))})),this.axes.forEach((function(e){var t=v(l.axes,(function(t){return t.options.internalKey===e.userOptions.internalKey})),n=e.getExtremes(),i=n.userMin;n=n.userMax,t&&(void 0!==i&&i!==t.min||void 0!==n&&n!==t.max)&&t.setExtremes(i,n,!0,!1)})),s=l.getChartHTML(),y(this,"getSVG",{chartCopy:l}),s=this.sanitizeSVG(s,i),i=null,l.destroy(),x(o),s}function G(e,t){var n=this.options.exporting;return this.getSVG(w({chart:{borderRadius:0}},n.chartOptions,t,{exporting:{sourceWidth:e&&e.sourceWidth||n.sourceWidth,sourceHeight:e&&e.sourceHeight||n.sourceHeight}}))}function H(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()}))}function W(){var e,t=K,n=i.inlineWhitelist,o={},r=p.createElement("iframe");g(r,{width:"1px",height:"1px",visibility:"hidden"}),p.body.appendChild(r);var a=r.contentWindow.document;a.open(),a.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>'),a.close(),function i(r){function l(e,i){if(c=u=!1,n.length){for(p=n.length;p--&&!u;)u=n[p].test(i);c=!u}for("transform"===i&&"none"===e&&(c=!0),p=t.length;p--&&!c;)c=t[p].test(i)||"function"==typeof e;c||f[i]===e&&"svg"!==r.nodeName||o[r.nodeName][i]===e||($&&-1===$.indexOf(i)?d+=H(i)+":"+e+";":e&&r.setAttribute(H(i),e))}var c,u,p,d="";if(1===r.nodeType&&-1===B.indexOf(r.nodeName)){var g=h.getComputedStyle(r,null),f="svg"===r.nodeName?{}:h.getComputedStyle(r.parentNode,null);if(!o[r.nodeName]){e=a.getElementsByTagName("svg")[0];var x=a.createElementNS(r.namespaceURI,r.nodeName);e.appendChild(x),o[r.nodeName]=w(h.getComputedStyle(x,null)),"text"===r.nodeName&&delete o.text.fill,e.removeChild(x)}if(s.isFirefox||s.isMS)for(var m in g)l(g[m],m);else E(g,l);d&&(g=r.getAttribute("style"),r.setAttribute("style",(g?g+";":"")+d)),"svg"===r.nodeName&&r.setAttribute("stroke-width","1px"),"text"!==r.nodeName&&[].forEach.call(r.children||r.childNodes,i)}}(this.container.querySelector("svg")),e.parentNode.removeChild(e),r.parentNode.removeChild(r)}function I(e){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach((function(t){e.appendChild(t)}))}function z(){var e=this;e.exporting={update:function(t,n){e.isDirtyExporting=!0,w(!0,e.options.exporting,t),C(n,!0)&&e.redraw()}},n.addUpdate((function(t,n){e.isDirtyExporting=!0,w(!0,e.options.navigation,t),C(n,!0)&&e.redraw()}),e)}function V(){var e=this;e.isPrinting||(A=e,s.isSafari||e.beforePrint(),setTimeout((function(){h.focus(),h.print(),s.isSafari||setTimeout((function(){e.afterPrint()}),1e3)}),1))}function q(){var e=this,t=e.options.exporting,n=t.buttons,i=e.isDirtyExporting||!e.exportSVGElements;e.buttonOffset=0,e.isDirtyExporting&&e.destroyExport(),i&&!1!==t.enabled&&(e.exportEvents=[],e.exportingGroup=e.exportingGroup||e.renderer.g("exporting-group").attr({zIndex:3}).add(),E(n,(function(t){e.addButton(t)})),e.isDirtyExporting=!1)}function L(e,t){var n=e.indexOf("</svg>")+6,i=e.substr(n);return e=e.substr(0,n),t&&t.exporting&&t.exporting.allowHTML&&i&&(i='<foreignObject x="0" y="0" width="'+t.chart.width+'" height="'+t.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+i.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",e=e.replace("</svg>",i+"</svg>")),e=e.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­"),this.ieSanitizeSVG&&(e=this.ieSanitizeSVG(e)),e}var R=[],K=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/],$="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");i.inlineWhitelist=[];var A,B=["clipPath","defs","desc"];i.compose=function(e,t){r.compose(t),-1===R.indexOf(e)&&(R.push(e),(t=e.prototype).afterPrint=u,t.exportChart=M,t.inlineStyles=W,t.print=V,t.sanitizeSVG=L,t.getChartHTML=j,t.getSVG=D,t.getSVGForExport=G,t.getFilename=N,t.moveContainers=I,t.beforePrint=k,t.contextMenu=O,t.addButton=o,t.destroyExport=P,t.renderExporting=q,t.callbacks.push(T),d(e,"init",z),s.isSafari&&s.win.matchMedia("print").addListener((function(e){A&&(e.matches?A.beforePrint():A.afterPrint())})))}}(u||(u={})),i.exporting=w(o.exporting,i.exporting),i.lang=w(o.lang,i.lang),i.navigation=w(o.navigation,i.navigation),u})),t(e,"masters/modules/exporting.src.js",[e["Core/Globals.js"],e["Extensions/Exporting/Exporting.js"],e["Core/HttpUtilities.js"]],(function(e,t,n){e.HttpUtilities=n,e.ajax=n.ajax,e.getJSON=n.getJSON,e.post=n.post,t.compose(e.Chart,e.Renderer)}))},(e=n).exports?(t.default=t,e.exports=t):t("undefined"!=typeof Highcharts?Highcharts:void 0);var i=n.exports;export{i as e};