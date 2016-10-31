/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));

/*
 *	JavaScript Wordpress editor
 *	Author: 		Ante Primorac
 *	Author URI: 	http://anteprimorac.from.hr
 *	Version: 		1.1
 *	License:
 *		Copyright (c) 2013 Ante Primorac
 *		Permission is hereby granted, free of charge, to any person obtaining a copy
 *		of this software and associated documentation files (the "Software"), to deal
 *		in the Software without restriction, including without limitation the rights
 *		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *		copies of the Software, and to permit persons to whom the Software is
 *		furnished to do so, subject to the following conditions:
 *
 *		The above copyright notice and this permission notice shall be included in
 *		all copies or substantial portions of the Software.
 *
 *		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *		THE SOFTWARE.
 *	Usage:
 *		server side(WP):
 *			js_wp_editor( $settings );
 *		client side(jQuery):
 *			$('textarea').wp_editor( options );
 */

;(function( $, window ) {
	$.fn.wp_editor = function( options ) {

		if( !$(this).is('textarea') )
			console.warn('Element must be a textarea');

		if( typeof tinyMCEPreInit == 'undefined')
			console.warn('typeof tinyMCEPreInit == undefined');

        if(typeof QTags == 'undefined'){
            console.warn('typeof QTags == undefined');
        }

        if(typeof ap_vars == 'undefined'){
            console.warn('typeof ap_vars == undefined');
        }


		if( !$(this).is('textarea') || typeof tinyMCEPreInit == 'undefined' || typeof QTags == 'undefined' || typeof ap_vars == 'undefined' )
			return this;

		var default_options = {
			'mode': 'html',
			'mceInit' : {
				"theme": "modern",
				"skin": "lightgray",
				"language": "da",
				"formats": {
					"alignleft": [
						{
							"selector": "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
							"styles": {"textAlign":"left"},
							"deep": false,
							"remove": "none"
						},
						{
							"selector": "img,table,dl.wp-caption",
							"classes": ["alignleft"],
							"deep":false,
							"remove":"none"
						}
					],
					"aligncenter": [
						{
							"selector": "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
							"styles": {"textAlign":"center"},
							"deep": false,
							"remove": "none"
						},
						{
							"selector": "img,table,dl.wp-caption",
							"classes": ["aligncenter"],
							"deep": false,
							"remove": "none"
						}
					],
					"alignright": [
						{
							"selector": "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
							"styles": {"textAlign":"right"},
							"deep": false,
							"remove": "none"
						},
						{
							"selector": "img,table,dl.wp-caption",
							"classes": ["alignright"],
							"deep": false,
							"remove": "none"
						}
					],
					"strikethrough": {"inline":"del","deep":true,"split":true}
				},
				"relative_urls": false,
				"remove_script_host": false,
				"convert_urls": false,
				"browser_spellcheck": true,
				"fix_list_elements": true,
				"entities": "38,amp,60,lt,62,gt",
				"entity_encoding": "raw",
				"keep_styles": false,
				"paste_webkit_styles": "font-weight font-style color",
				"preview_styles": "font-family font-size font-weight font-style text-decoration text-transform",
				"wpeditimage_disable_captions": false,
				"wpeditimage_html5_captions": false,
				"plugins": "charmap,hr,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpeditimage,wpgallery,wplink,wpdialogs,wpview,image",
				"content_css": ap_vars.includes_url + "css/dashicons.css?ver=3.9," + ap_vars.includes_url + "js/mediaelement/mediaelementplayer.min.css?ver=3.9," + ap_vars.includes_url + "js/mediaelement/wp-mediaelement.css?ver=3.9," + ap_vars.includes_url + "js/tinymce/skins/wordpress/wp-content.css?ver=3.9",
				"selector": "#apid",
				"resize": "vertical",
				"menubar": false,
				"wpautop": true,
				"indent": false,
				"toolbar1": "bold,italic,strikethrough,bullist,numlist,blockquote,hr,alignleft,aligncenter,alignright,link,unlink,wp_more,spellchecker,fullscreen,wp_adv",
				"toolbar2": "formatselect,underline,alignjustify,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help",
				"toolbar3": "",
				"toolbar4": "",
				"tabfocus_elements": ":prev,:next",
				"body_class": "apid"
			}
		}, id_regexp = new RegExp('apid', 'g');

		if(tinyMCEPreInit.mceInit['apid']) {
			default_options.mceInit = tinyMCEPreInit.mceInit['apid'];
		}

		var options = $.extend(true, default_options, options);

		return this.each(function() {

			if( !$(this).is('textarea') )
				console.warn('Element must be a textarea');
			else {
				var current_id = $(this).attr('id');
				$.each( options.mceInit, function( key, value ) {
					if( $.type( value ) == 'string' )
					options.mceInit[key] = value.replace(id_regexp, current_id);
				} );
				options.mode = options.mode == 'tmce' ? 'tmce' : 'html';

				tinyMCEPreInit.mceInit[current_id] = options.mceInit;

				$(this).addClass('wp-editor-area').show();
				var self = this;
				if( $(this).closest('.wp-editor-wrap').length ) {
					var parent_el = $(this).closest('.wp-editor-wrap').parent();
					$(this).closest('.wp-editor-wrap').before($(this).clone());
					$(this).closest('.wp-editor-wrap').remove();
					self = parent_el.find('textarea[id="' + current_id + '"]');
				}

				var wrap = $('<div id="wp-' + current_id + '-wrap" class="wp-core-ui wp-editor-wrap ' + options.mode + '-active" />'),
					editor_tools = $('<div id="wp-' + current_id + '-editor-tools" class="wp-editor-tools hide-if-no-js" />'),
					editor_tabs = $('<div class="wp-editor-tabs" />'),
					switch_editor_html = $('<a id="' + current_id + '-html" class="wp-switch-editor switch-html" onclick="switchEditors.switchto(this);">Text</a>'),
					switch_editor_tmce = $('<a id="' + current_id + '-tmce" class="wp-switch-editor switch-tmce" onclick="switchEditors.switchto(this);">Visual</a>'),
					media_buttons = $('<div id="wp-' + current_id + '-media-buttons" class="wp-media-buttons" />'),
					insert_media_button = $('<a href="#" id="insert-media-button" class="button insert-media add_media" data-editor="' + current_id + '" title="Add Media"><span class="wp-media-buttons-icon"></span> Add Media</a>'),
					editor_container = $('<div id="wp-' + current_id + '-editor-container" class="wp-editor-container" />'),
					content_css = /*Object.prototype.hasOwnProperty.call(tinyMCEPreInit.mceInit[current_id], 'content_css') ? tinyMCEPreInit.mceInit[current_id]['content_css'].split(',') :*/ false;

				insert_media_button.appendTo(media_buttons);
				media_buttons.appendTo(editor_tools);

				switch_editor_html.appendTo(editor_tabs);
				switch_editor_tmce.appendTo(editor_tabs);
				editor_tabs.appendTo(editor_tools);

				editor_tools.appendTo(wrap);
				editor_container.appendTo(wrap);

				editor_container.append($(self).clone().addClass('wp-editor-area'));

				if( content_css != false )
					$.each( content_css, function() {
						if( ! $('link[href="' + this + '"]').length )
							$(self).before('<link rel="stylesheet" type="text/css" href="' + this + '">');
					} );

				$(self).before('<link rel="stylesheet" id="editor-buttons-css" href="' + ap_vars.includes_url + 'css/editor.css" type="text/css" media="all">');

				$(self).before(wrap);
				$(self).remove();

				new QTags(current_id);
				QTags._buttonsInit();
				switchEditors.go(current_id, options.mode);

            	$(wrap).on( 'click', '.insert-media', function( event ) {
					var elem = $( event.currentTarget ),
						editor = elem.data('editor'),
						options = {
							frame:    'post',
							state:    'insert',
							title:    wp.media.view.l10n.addMedia,
							multiple: true
						};

					event.preventDefault();

					elem.blur();

					if ( elem.hasClass( 'gallery' ) ) {
						options.state = 'gallery';
						options.title = wp.media.view.l10n.createGalleryTitle;
					}

					wp.media.editor.open( editor, options );
				});
			}
		});
	}
})( jQuery, window );

function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status==200;
}

(function($)
{
    $.fn.autogrow = function(options)
    {
        return this.filter('textarea').each(function()
        {
            var self         = this;
            var $self        = $(self);
            var minHeight    = $self.height();
            var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;
            var settings = $.extend({
                preGrowCallback: null,
                postGrowCallback: null
              }, options );

            var shadow = $('<div></div>').css({
                position:    'absolute',
                top:         -10000,
                left:        -10000,
                width:       $self.width(),
                fontSize:    $self.css('fontSize'),
                fontFamily:  $self.css('fontFamily'),
                fontWeight:  $self.css('fontWeight'),
                lineHeight:  $self.css('lineHeight'),
                resize:      'none',
    			'word-wrap': 'break-word'
            }).appendTo(document.body);

            var update = function(event)
            {
                var times = function(string, number)
                {
                    for (var i=0, r=''; i<number; i++) r += string;
                    return r;
                };

                var val = self.value.replace(/</g, '&lt;')
                                    .replace(/>/g, '&gt;')
                                    .replace(/&/g, '&amp;')
                                    .replace(/\n$/, '<br/>&nbsp;')
                                    .replace(/\n/g, '<br/>')
                                    .replace(/ {2,}/g, function(space){ return times('&nbsp;', space.length - 1) + ' ' });

				if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13) {
					val += '<br />';
				}

                shadow.css('width', $self.width());
                shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.

                var newHeight=Math.max(shadow.height() + noFlickerPad, minHeight);
                if(settings.preGrowCallback!=null){
                  newHeight=settings.preGrowCallback($self,shadow,newHeight,minHeight);
                }

                $self.height(newHeight);

                if(settings.postGrowCallback!=null){
                  settings.postGrowCallback($self);
                }
            }

            $self.change(update).keyup(update).keydown({event:'keydown'},update);
            $(window).resize(update);

            update();
        });
    };
})(jQuery);

(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.autosize = factory();
  }
}(this, function () {
	function main(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || ta.hasAttribute('data-autosize-on')) { return; }

		var maxHeight;
		var heightOffset;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			// horizontal overflow is hidden, so break-word is necessary for handling words longer than the textarea width
			ta.style.wordWrap = 'break-word';

			// Chrome/Safari-specific fix:
			// When the textarea y-overflow is hidden, Chrome/Safari doesn't reflow the text to account for the space
			// made available by removing the scrollbar. This workaround will cause the text to reflow.
			var width = ta.style.width;
			ta.style.width = '0px';
			// Force reflow:
			/* jshint ignore:start */
			ta.offsetWidth;
			/* jshint ignore:end */
			ta.style.width = width;

			maxHeight = style.maxHeight !== 'none' ? parseFloat(style.maxHeight) : false;

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth);
			}

			adjust();
		}

		function adjust() {
			var startHeight = ta.style.height;
			var htmlTop = document.documentElement.scrollTop;
			var bodyTop = document.body.scrollTop;

			ta.style.height = 'auto';

			var endHeight = ta.scrollHeight+heightOffset;

			if (maxHeight !== false && maxHeight < endHeight) {
				endHeight = maxHeight;
				if (ta.style.overflowY !== 'scroll') {
					ta.style.overflowY = 'scroll';
				}
			} else if (ta.style.overflowY !== 'hidden') {
				ta.style.overflowY = 'hidden';
			}

			ta.style.height = endHeight+'px';

			// prevents scroll-position jumping
			document.documentElement.scrollTop = htmlTop;
			document.body.scrollTop = bodyTop;

			if (startHeight !== ta.style.height) {
				var evt = document.createEvent('Event');
				evt.initEvent('autosize.resized', true, false);
				ta.dispatchEvent(evt);
			}
		}

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', adjust);
		}

		window.addEventListener('resize', adjust);
		ta.addEventListener('input', adjust);

		ta.addEventListener('autosize.update', adjust);

		ta.addEventListener('autosize.destroy', function(style){
			window.removeEventListener('resize', adjust);
			ta.removeEventListener('input', adjust);
			ta.removeEventListener('keyup', adjust);
			ta.removeEventListener('autosize.destroy');

			Object.keys(style).forEach(function(key){
				ta.style[key] = style[key];
			});

			ta.removeAttribute('data-autosize-on');
		}.bind(ta, {
			height: ta.style.height,
			overflow: ta.style.overflow,
			overflowY: ta.style.overflowY,
			wordWrap: ta.style.wordWrap,
			resize: ta.style.resize
		}));

		ta.setAttribute('data-autosize-on', true);
		ta.style.overflow = 'hidden';
		ta.style.overflowY = 'hidden';

		init();
	}

	// Do nothing in IE8 or lower
	if (typeof window.getComputedStyle !== 'function') {
		return function(elements) {
			return elements;
		};
	} else {
		return function(elements) {
			if (elements && elements.length) {
				Array.prototype.forEach.call(elements, main);
			} else if (elements && elements.nodeName) {
				main(elements);
			}
			return elements;
		};
	}
}));


/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	var drag, state, e;

	/**
	 * Template for status information about drag and touch events.
	 * @private
	 */
	drag = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	};

	/**
	 * Template for some status informations.
	 * @private
	 */
	state = {
		isTouch: false,
		isScrolling: false,
		isSwiping: false,
		direction: false,
		inMotion: false
	};

	/**
	 * Event functions references.
	 * @private
	 */
	e = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	};

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Caches informations about drag and touch events.
		 */
		this.drag = $.extend({}, drag);

		/**
		 * Caches some status informations.
		 * @protected
		 */
		this.state = $.extend({}, state);

		/**
		 * @protected
		 * @todo Must be documented
		 */
		this.e = $.extend({}, e);

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key[0].toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Pipe, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * Update pipe.
	 */
	Owl.Pipe = [ {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var cached = this._clones,
				clones = this.$stage.children('.cloned');

			if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
				this.$stage.children('.cloned').remove();
				this._clones = [];
			}
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var i, n,
				clones = this._clones,
				items = this._items,
				delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

			for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
				if (delta > 0) {
					this.$stage.children().eq(items.length + clones.length - 1).remove();
					clones.pop();
					this.$stage.children().eq(0).remove();
					clones.pop();
				} else {
					clones.push(clones.length / 2);
					this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
					clones.push(items.length - 1 - (clones.length - 1) / 2);
					this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
				}
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = (this.settings.rtl ? 1 : -1),
				width = (this.width() / this.settings.items).toFixed(3),
				coordinate = 0, merge, i, n;

			this._coordinates = [];
			for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
				merge = this._mergers[this.relative(i)];
				merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
				coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

				this._coordinates.push(coordinate);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
				'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
				'padding-left': this.settings.stagePadding || '',
				'padding-right': this.settings.stagePadding || ''
			};

			this.$stage.css(css);

			css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
			css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

			if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
					this.$stage.children().eq(i).css(css);
				}
			} else {
				this.$stage.children().css(css);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current && this.reset(this.$stage.children().index(cache.current));
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

			if (this.settings.center) {
				this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
				this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.trigger('initialize');

		this.$element
			.addClass(this.settings.baseClass)
			.addClass(this.settings.themeClass)
			.toggleClass('owl-rtl', this.settings.rtl);

		// check support
		this.browserSupport();

		if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
				return false;
			}
		}

		this.$element.addClass('owl-loading');

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
			.wrap('<div class="owl-stage-outer">');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// set view width
		this._width = this.$element.width();

		// update view
		this.refresh();

		this.$element.removeClass('owl-loading').addClass('owl-loaded');

		// attach generic events
		this.eventsCall();

		// attach generic events
		this.internalEvents();

		// attach custom control events
		this.addTriggerableEvents();

		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', function(i, c) {
					return c.replace(/\b owl-responsive-\S+/g, '');
				}).addClass('owl-responsive-' + match);
			}
		}

		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		// Toggle Center class
		this.$element.toggleClass('owl-center', this.settings.center);

		// if items number is less than in body
		if (this.settings.loop && this._items.length < this.settings.items) {
			this.settings.loop = false;
		}

		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.settings.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		if (this._items.length === 0) {
			return false;
		}

		var start = new Date().getTime();

		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		// hide and show methods helps here to set a proper widths,
		// this prevents scrollbar to be calculated in stage width
		this.$stage.addClass('owl-refresh');

		this.update();

		this.$stage.removeClass('owl-refresh');

		this.state.orientation = window.orientation;

		this.watchVisibility();

		this.trigger('refreshed');
	};

	/**
	 * Save internal event references and add event based functions.
	 * @protected
	 */
	Owl.prototype.eventsCall = function() {
		// Save events references
		this.e._onDragStart = $.proxy(function(e) {
			this.onDragStart(e);
		}, this);
		this.e._onDragMove = $.proxy(function(e) {
			this.onDragMove(e);
		}, this);
		this.e._onDragEnd = $.proxy(function(e) {
			this.onDragEnd(e);
		}, this);
		this.e._onResize = $.proxy(function(e) {
			this.onResize(e);
		}, this);
		this.e._transitionEnd = $.proxy(function(e) {
			this.transitionEnd(e);
		}, this);
		this.e._preventClick = $.proxy(function(e) {
			this.preventClick(e);
		}, this);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (this.trigger('resize').isDefaultPrevented()) {
			return false;
		}

		this._width = this.$element.width();

		this.invalidate('width');

		this.refresh();

		this.trigger('resized');
	};

	/**
	 * Checks for touch/mouse drag event type and add run event handlers.
	 * @protected
	 */
	Owl.prototype.eventsRouter = function(event) {
		var type = event.type;

		if (type === "mousedown" || type === "touchstart") {
			this.onDragStart(event);
		} else if (type === "mousemove" || type === "touchmove") {
			this.onDragMove(event);
		} else if (type === "mouseup" || type === "touchend") {
			this.onDragEnd(event);
		} else if (type === "touchcancel") {
			this.onDragEnd(event);
		}
	};

	/**
	 * Checks for touch/mouse drag options and add necessery event handlers.
	 * @protected
	 */
	Owl.prototype.internalEvents = function() {
		var isTouch = isTouchSupport(),
			isTouchIE = isTouchSupportIE();

		if (this.settings.mouseDrag){
			this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
			this.$stage.on('dragstart', function() { return false });
			this.$stage.get(0).onselectstart = function() { return false };
		} else {
			this.$element.addClass('owl-text-select-on');
		}

		if (this.settings.touchDrag && !isTouchIE){
			this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
		}

		// catch transitionEnd event
		if (this.transitionEndVendor) {
			this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
		}

		// responsive
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
		}
	};

	/**
	 * Handles touchstart/mousedown event.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var ev, isTouchEvent, pageX, pageY, animatedPos;

		ev = event.originalEvent || event || window.event;

		// prevent right click
		if (ev.which === 3 || this.state.isTouch) {
			return false;
		}

		if (ev.type === 'mousedown') {
			this.$stage.addClass('owl-grab');
		}

		this.trigger('drag');
		this.drag.startTime = new Date().getTime();
		this.speed(0);
		this.state.isTouch = true;
		this.state.isScrolling = false;
		this.state.isSwiping = false;
		this.drag.distance = 0;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// get stage position left
		this.drag.offsetX = this.$stage.position().left;
		this.drag.offsetY = this.$stage.position().top;

		if (this.settings.rtl) {
			this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
				+ this.settings.margin;
		}

		// catch position // ie to fix
		if (this.state.inMotion && this.support3d) {
			animatedPos = this.getTransformProperty();
			this.drag.offsetX = animatedPos;
			this.animate(animatedPos);
			this.state.inMotion = true;
		} else if (this.state.inMotion && !this.support3d) {
			this.state.inMotion = false;
			return false;
		}

		this.drag.startX = pageX - this.drag.offsetX;
		this.drag.startY = pageY - this.drag.offsetY;

		this.drag.start = pageX - this.drag.startX;
		this.drag.targetEl = ev.target || ev.srcElement;
		this.drag.updatedX = this.drag.start;

		// to do/check
		// prevent links and images dragging;
		if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
			this.drag.targetEl.draggable = false;
		}

		$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
	};

	/**
	 * Handles the touchmove/mousemove events.
	 * @todo Simplify
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

		if (!this.state.isTouch) {
			return;
		}

		if (this.state.isScrolling) {
			return;
		}

		ev = event.originalEvent || event || window.event;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// Drag Direction
		this.drag.currentX = pageX - this.drag.startX;
		this.drag.currentY = pageY - this.drag.startY;
		this.drag.distance = this.drag.currentX - this.drag.offsetX;

		// Check move direction
		if (this.drag.distance < 0) {
			this.state.direction = this.settings.rtl ? 'right' : 'left';
		} else if (this.drag.distance > 0) {
			this.state.direction = this.settings.rtl ? 'left' : 'right';
		}
		// Loop
		if (this.settings.loop) {
			if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
				this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
				this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			}
		} else {
			// pull
			minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
			this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
		}

		// Lock browser if swiping horizontal

		if ((this.drag.distance > 8 || this.drag.distance < -8)) {
			if (ev.preventDefault !== undefined) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			this.state.isSwiping = true;
		}

		this.drag.updatedX = this.drag.currentX;

		// Lock Owl if scrolling
		if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
			this.state.isScrolling = true;
			this.drag.updatedX = this.drag.start;
		}

		this.animate(this.drag.updatedX);
	};

	/**
	 * Handles the touchend/mouseup events.
	 * @protected
	 */
	Owl.prototype.onDragEnd = function(event) {
		var compareTimes, distanceAbs, closest;

		if (!this.state.isTouch) {
			return;
		}

		if (event.type === 'mouseup') {
			this.$stage.removeClass('owl-grab');
		}

		this.trigger('dragged');

		// prevent links and images dragging;
		this.drag.targetEl.removeAttribute("draggable");

		// remove drag event listeners

		this.state.isTouch = false;
		this.state.isScrolling = false;
		this.state.isSwiping = false;

		// to check
		if (this.drag.distance === 0 && this.state.inMotion !== true) {
			this.state.inMotion = false;
			return false;
		}

		// prevent clicks while scrolling

		this.drag.endTime = new Date().getTime();
		compareTimes = this.drag.endTime - this.drag.startTime;
		distanceAbs = Math.abs(this.drag.distance);

		// to test
		if (distanceAbs > 3 || compareTimes > 300) {
			this.removeClick(this.drag.targetEl);
		}

		closest = this.closest(this.drag.updatedX);

		this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
		this.current(closest);
		this.invalidate('position');
		this.update();

		// if pullDrag is off then fire transitionEnd event manually when stick
		// to border
		if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
			this.transitionEnd();
		}

		this.drag.distance = 0;

		$(document).off('.owl.dragEvents');
	};

	/**
	 * Attaches `preventClick` to disable link while swipping.
	 * @protected
	 * @param {HTMLElement} [target] - The target of the `click` event.
	 */
	Owl.prototype.removeClick = function(target) {
		this.drag.targetEl = target;
		$(target).on('click.preventClick', this.e._preventClick);
		// to make sure click is removed:
		window.setTimeout(function() {
			$(target).off('click.preventClick');
		}, 300);
	};

	/**
	 * Suppresses click event.
	 * @protected
	 * @param {Event} ev - The event arguments.
	 */
	Owl.prototype.preventClick = function(ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		$(ev.target).off('click.preventClick');
	};

	/**
	 * Catches stage position while animate (only CSS3).
	 * @protected
	 * @returns
	 */
	Owl.prototype.getTransformProperty = function() {
		var transform, matrix3d;

		transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
		// var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
		matrix3d = transform.length === 16;

		return matrix3d !== true ? transform[4] : transform[12];
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate) {
		var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = this.state.direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		this.trigger('translate');
		this.state.inMotion = this.speed() > 0;

		if (this.support3d) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (this.state.isTouch) {
			this.$stage.css({
				left: coordinate + 'px'
			});
		} else {
			this.$stage.animate({
				left: coordinate
			}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
				if (this.state.inMotion) {
					this.transitionEnd();
				}
			}, this));
		}
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} part - The part to invalidate.
	 */
	Owl.prototype.invalidate = function(part) {
		this._invalidated[part] = true;
	}

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position for an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = (relative ? this._items.length : this._items.length + this._clones.length);

		if (!$.isNumeric(position) || n < 1) {
			return undefined;
		}

		if (this._clones.length) {
			position = ((position % n) + n) % n;
		} else {
			position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
		}

		return position;
	};

	/**
	 * Converts an absolute position for an item into a relative position.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position = this.normalize(position);
		position = position - this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var maximum, width, i = 0, coordinate,
			settings = this.settings;

		if (relative) {
			return this._items.length - 1;
		}

		if (!settings.loop && settings.center) {
			maximum = this._items.length - 1;
		} else if (!settings.loop && !settings.center) {
			maximum = this._items.length - settings.items;
		} else if (settings.loop || settings.center) {
			maximum = this._items.length + settings.items;
		} else if (settings.autoWidth || settings.merge) {
			revert = settings.rtl ? 1 : -1;
			width = this.$stage.width() - this.$element.width();
			while (coordinate = this.coordinates(i)) {
				if (coordinate * revert >= width) {
					break;
				}
				maximum = ++i;
			}
		} else {
			throw 'Can not detect maximum absolute position.'
		}

		return maximum;
	};

	/**
	 * Gets the minimum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		if (relative) {
			return 0;
		}

		return this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var coordinate = null;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
		} else {
			coordinate = this._coordinates[position - 1] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		if (this.settings.loop) {
			var distance = position - this.relative(this.current()),
				revert = this.current(),
				before = this.current(),
				after = this.current() + distance,
				direction = before - after < 0 ? true : false,
				items = this._clones.length + this._items.length;

			if (after < this.settings.items && direction === false) {
				revert = before + this._items.length;
				this.reset(revert);
			} else if (after >= items - this.settings.items && direction === true) {
				revert = before - this._items.length;
				this.reset(revert);
			}
			window.clearTimeout(this.e._goToLoop);
			this.e._goToLoop = window.setTimeout($.proxy(function() {
				this.speed(this.duration(this.current(), revert + distance, speed));
				this.current(revert + distance);
				this.update();
			}, this), 30);
		} else {
			this.speed(this.duration(this.current(), position, speed));
			this.current(position);
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.transitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.state.inMotion = false;
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		position = position === undefined ? this._items.length : this.normalize(position, true);

		this.trigger('add', { content: content, position: position });

		if (this._items.length === 0 || position === this._items.length) {
			this.$stage.append(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Adds triggerable events.
	 * @protected
	 */
	Owl.prototype.addTriggerableEvents = function() {
		var handler = $.proxy(function(callback, event) {
			return $.proxy(function(e) {
				if (e.relatedTarget !== this) {
					this.suppress([ event ]);
					callback.apply(this, [].slice.call(arguments, 1));
					this.release([ event ]);
				}
			}, this);
		}, this);

		$.each({
			'next': this.next,
			'prev': this.prev,
			'to': this.to,
			'destroy': this.destroy,
			'refresh': this.refresh,
			'replace': this.replace,
			'add': this.add,
			'remove': this.remove
		}, $.proxy(function(event, callback) {
			this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
		}, this));

	};

	/**
	 * Watches the visibility of the carousel element.
	 * @protected
	 */
	Owl.prototype.watchVisibility = function() {

		// test on zepto
		if (!isElVisible(this.$element.get(0))) {
			this.$element.addClass('owl-hidden');
			window.clearInterval(this.e._checkVisibile);
			this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
		}

		function isElVisible(el) {
			return el.offsetWidth > 0 && el.offsetHeight > 0;
		}

		function checkVisible() {
			if (isElVisible(this.$element.get(0))) {
				this.$element.removeClass('owl-hidden');
				this.refresh();
				window.clearInterval(this.e._checkVisibile);
			}
		}
	};

	/**
	 * Preloads images with auto width.
	 * @protected
	 * @todo Still to test
	 */
	Owl.prototype.preloadAutoWidthImages = function(imgs) {
		var loaded, that, $el, img;

		loaded = 0;
		that = this;
		imgs.each(function(i, el) {
			$el = $(el);
			img = new Image();

			img.onload = function() {
				loaded++;
				$el.attr('src', img.src);
				$el.css('opacity', 1);
				if (loaded >= imgs.length) {
					that.state.imagesLoaded = true;
					that.initialize();
				}
			};

			img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
		});
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		if (this.$element.hasClass(this.settings.themeClass)) {
			this.$element.removeClass(this.settings.themeClass);
		}

		if (this.settings.responsive !== false) {
			$(window).off('resize.owl.carousel');
		}

		if (this.transitionEndVendor) {
			this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		}

		for ( var i in this._plugins) {
			this._plugins[i].destroy();
		}

		if (this.settings.mouseDrag || this.settings.touchDrag) {
			this.$stage.off('mousedown touchstart touchcancel');
			$(document).off('.owl.dragEvents');
			this.$stage.get(0).onselectstart = function() {};
			this.$stage.off('dragstart', function() { return false });
		}

		// remove event handlers in the ".owl.carousel" namespace
		this.$element.off('.owl');

		this.$stage.children('.cloned').remove();
		this.e = null;
		this.$element.removeData('owlCarousel');

		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.unwrap();
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers an public event.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=.owl.carousel] - The event namespace.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].apply(this, event);
			}
		}

		return event;
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	}

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	}

	/**
	 * Checks the availability of some browser features.
	 * @protected
	 */
	Owl.prototype.browserSupport = function() {
		this.support3d = isPerspective();

		if (this.support3d) {
			this.transformVendor = isTransform();

			// take transitionend event name by detecting transition
			var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
			this.transitionEndVendor = endVendors[isTransition()];

			// take vendor name from transform name
			this.vendorName = this.transformVendor.replace(/Transform/i, '');
			this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
		}

		this.state.orientation = window.orientation;
	};

	/**
	 * Get touch/drag coordinats.
	 * @private
	 * @param {event} - mousedown/touchstart event
	 * @returns {object} - Contains X and Y of current mouse/touch position
	 */

	function getTouches(event) {
		if (event.touches !== undefined) {
			return {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY
			};
		}

		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			}

		if (event.pageX === undefined) {
			return {
					x: event.clientX,
					y: event.clientY
				};
			}
		}
	}

	/**
	 * Checks for CSS support.
	 * @private
	 * @param {Array} array - The CSS properties to check for.
	 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
	 */
	function isStyleSupported(array) {
		var p, s, fake = document.createElement('div'), list = array;
		for (p in list) {
			s = list[p];
			if (typeof fake.style[s] !== 'undefined') {
				fake = null;
				return [ s, p ];
			}
		}
		return [ false ];
	}

	/**
	 * Checks for CSS transition support.
	 * @private
	 * @todo Realy bad design
	 * @returns {Number}
	 */
	function isTransition() {
		return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
	}

	/**
	 * Checks for CSS transform support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isTransform() {
		return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
	}

	/**
	 * Checks for CSS perspective support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isPerspective() {
		return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
	}

	/**
	 * Checks wether touch is supported or not.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupport() {
		return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
	}

	/**
	 * Checks wether touch is supported or not for IE.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupportIE() {
		return window.navigator.msPointerEnabled;
	}

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @public
	 */
	$.fn.owlCarousel = function(options) {
		return this.each(function() {
			if (!$(this).data('owlCarousel')) {
				$(this).data('owlCarousel', new Owl(this, options));
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position++)), load);
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
					=== this._core.$stage.children().eq(this._core.current())) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		this._core.$stage.parent()
			.height(this._core.$stage.children().eq(this._core.current()).height())
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * Whether this is in fullscreen or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._fullscreen = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'resize.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.video && !this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
				if (this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {

		var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {

		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} ev - The event arguments.
	 */
	Video.prototype.play = function(ev) {
		this._core.trigger('play', null, 'video');

		if (this._playing) {
			this.stop();
		}

		var target = $(ev.target || ev.srcElement),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html, wrap;

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
				+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
				+ '" height="' + height
				+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		item.addClass('owl-video-playing');
		this._playing = item;

		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
			+ html + '</div>');
		target.after(wrap);
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {

		// if Vimeo Fullscreen mode
		var element = document.fullscreenElement || document.mozFullScreenElement
			|| document.webkitFullscreenElement;

		if (element && $(element).parent().hasClass('owl-video-frame')) {
			this._core.speed(0);
			this._fullscreen = true;
		}

		if (element && this._fullscreen && this._playing) {
			return false;
		}

		// comming back from fullscreen
		if (this._fullscreen) {
			this._fullscreen = false;
			return false;
		}

		// check full screen mode and window orientation
		if (this._playing) {
			if (this._core.state.orientation !== window.orientation) {
				this._core.state.orientation = window.orientation;
				return false;
			}
		}

		return true;
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				this.swapping = e.type == 'translated';
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1 || !this.core.support3d) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.transitionEnd();
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

		this.handlers = {
			'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
				this.autoplay();
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				this.play(t, s);
			}, this),
			'stop.owl.autoplay': $.proxy(function() {
				this.stop();
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.autoplay();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * @protected
	 * @todo Must be documented.
	 */
	Autoplay.prototype.autoplay = function() {
		if (this.core.settings.autoplay && !this.core.state.videoPlay) {
			window.clearInterval(this.interval);

			this.interval = window.setInterval($.proxy(function() {
				this.play();
			}, this), this.core.settings.autoplayTimeout);
		} else {
			window.clearInterval(this.interval);
		}
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - ...
	 * @param {Number} [speed] - ...
	 * @returns {Boolean|undefined} - ...
	 * @todo Must be documented.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		// if tab is inactive - doesnt work in <IE10
		if (document.hidden === true) {
			return;
		}

		if (this.core.state.isTouch || this.core.state.isScrolling
			|| this.core.state.isSwiping || this.core.state.inMotion) {
			return;
		}

		if (this.core.settings.autoplay === false) {
			window.clearInterval(this.interval);
			return;
		}

		this.core.next(this.core.settings.autoplaySpeed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this.interval);

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'add.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var current = this._core.current(),
							maximum = this._core.maximum(),
							minimum = this._core.minimum();
						e.data = e.property.value > maximum
							? current >= maximum ? minimum : maximum
							: e.property.value < minimum ? maximum : e.property.value;
					}
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function() {
				if (!this._initialized) {
					this.initialize();
					this._initialized = true;
				}
				this._core.trigger('refresh', null, 'navigation');
				this.update();
				this.draw();
				this._core.trigger('refreshed', null, 'navigation');
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var $container, override,
			options = this._core.settings;

		// create the indicator template
		if (!options.dotsData) {
			this._templates = [ $('<div>')
				.addClass(options.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		// create controls container if needed
		if (!options.navContainer || !options.dotsContainer) {
			this._controls.$container = $('<div>')
				.addClass(options.controlsClass)
				.appendTo(this.$element);
		}

		// create DOM structure for absolute navigation
		this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
			: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

		this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$indicators)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, options.dotsSpeed);
		}, this));

		// create DOM structure for relative navigation
		$container = options.navContainer ? $(options.navContainer)
			: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

		this._controls.$next = $('<' + options.navElement + '>');
		this._controls.$previous = this._controls.$next.clone();

		this._controls.$previous
			.addClass(options.navClass[0])
			.html(options.navText[0])
			.hide()
			.prependTo($container)
			.on('click', $.proxy(function(e) {
				this.prev(options.navSpeed);
			}, this));
		this._controls.$next
			.addClass(options.navClass[1])
			.html(options.navText[1])
			.hide()
			.appendTo($container)
			.on('click', $.proxy(function(e) {
				this.next(options.navSpeed);
			}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	}

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			options = this._core.settings,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			size = options.center || options.autoWidth || options.dotData
				? 1 : options.dotsEach || options.items;

		if (options.slideBy !== 'page') {
			options.slideBy = Math.min(options.slideBy, options.items);
		}

		if (options.dots || options.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: i - lower,
						end: i - lower + size - 1
					});
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	}

	/**
	 * Draws the user interface.
	 * @todo The option `dotData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference, i, html = '',
			options = this._core.settings,
			$items = this._core.$stage.children(),
			index = this._core.relative(this._core.current());

		if (options.nav && !options.loop && !options.navRewind) {
			this._controls.$previous.toggleClass('disabled', index <= 0);
			this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
		}

		this._controls.$previous.toggle(options.nav);
		this._controls.$next.toggle(options.nav);

		if (options.dots) {
			difference = this._pages.length - this._controls.$indicators.children().length;

			if (options.dotData && difference !== 0) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) {
					html += this._templates[this._core.relative(i)];
				}
				this._controls.$indicators.html(html);
			} else if (difference > 0) {
				html = new Array(difference + 1).join(this._templates[0]);
				this._controls.$indicators.append(html);
			} else if (difference < 0) {
				this._controls.$indicators.children().slice(difference).remove();
			}

			this._controls.$indicators.find('.active').removeClass('active');
			this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}

		this._controls.$indicators.toggle(options.dots);
	}

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotData
				? 1 : settings.dotsEach || settings.items)
		};
	}

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var index = this._core.relative(this._core.current());
		return $.grep(this._pages, function(o) {
			return o.start <= index && o.end >= index;
		}).pop();
	}

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			options = this._core.settings;

		if (options.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += options.slideBy : position -= options.slideBy;
		}
		return position;
	}

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	}

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	}

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash table for the hashes.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.startPosition == 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
				this._hashes[hash] = e.content;
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function() {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

			if (!hash) {
				return false;
			}

			this._core.to(position, false, true);
		}, this));
	}

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);


var ubermenu_data = {
    "remove_conflicts":"on",
    "reposition_on_load":"off",
    "intent_delay":"300",
    "intent_interval":"100",
    "intent_threshold":"7",
    "scrollto_offset":"50",
    "responsive_breakpoint":"0",
    "accessible":"on",
    "retractor_display_strategy":"responsive"
};


/*
*  ubermenu.js
*
*  http://wpmegamenu.com
*
*  Copyright Chris Mavricos, SevenSpark http://sevenspark.com
*/
;(function ( $, window, document, undefined ) {
	'use strict';
	var pluginName = "ubermenu",
		defaults = {
			breakpoint: uber_op( 'responsive_breakpoint' , { datatype: 'numeric' } , 959 ),
			touchEvents: true,
			mouseEvents: true,
			retractors: true,
			touchOffClose: true,
			moveThreshold: 10,				//Distance until tap is cancelled in deference to move/scroll
			submenuAnimationDuration: 500,	//ms duration or submenu close time
			ignoreDummies: true,
			clicktest: false,
			windowstest: false,
			debug: false,
			debug_onscreen: false,

			remove_conflicts: uber_op( 'remove_conflicts' , {datatype: 'boolean' } , true ),
			reposition_on_load: uber_op( 'reposition_on_load' , { datatype: 'boolean' } , false ),
			accessible: uber_op( 'accessible' , {datatype: 'boolean' } , true ),
			retractor_display_strategy: uber_op( 'retractor_display_strategy' , {datatype: 'string'}, 'responsive' ),

			intent_delay: uber_op( 'intent_delay' , { datatype: 'numeric' } , 300 ),			//delay before the menu closes
			intent_interval: uber_op( 'intent_interval' , { datatype: 'numeric' } , 100 ),		//polling interval for mouse comparisons
			intent_threshold: uber_op( 'intent_threshold' , { datatype: 'numeric' } , 300 ),	//maximum number of pixels mouse can move to be considered intent

			scrollto_offset: uber_op( 'scrollto_offset' , { datatype: 'numeric' } , 0 )
		}/*,
		keys = {
			BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }*/;

	// instantiate variables
	// cX, cY = current X and Y position of mouse, updated by mousemove event
	// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
	var cX, cY, pX, pY;

	function Plugin ( element, options ) {

		var plugin = this;	//reference for all
		this.element = element;
		this.$ubermenu = $( this.element );

		this.orientation = this.$ubermenu.hasClass( 'ubermenu-vertical' ) ? 'v' : 'h';

		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;

		if( this.settings.debug && this.settings.debug_onscreen ){
			$( 'body' ).append( '<div id="uber-onscreen-debug" style="color:#eee;z-index:10000;background:#222;position:fixed;left:0; bottom:0; width:100%; height:50%; padding:10px;overflow:scroll;"> ' );
			this.debug_target = $( '#uber-onscreen-debug' );
			this.debug_target.on( 'click' , function(){ if( $(this).height() < 100 ) $(this).height( '50%' ); else $(this).height( '50px' ); });
		}
		this.log( '-- START UBERMENU DEBUG --' );

		this.events_disabled = false;
		this.suppress_clicks = false; //Set to true if the mouse events support 'pointerup', which handles both touch and click (but not hover)

		this.touchenabled = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
		if( this.touchenabled ){
			this.$ubermenu.addClass( 'ubermenu-touch' );
		}
		else this.$ubermenu.addClass( 'ubermenu-notouch' );

		if( window.navigator.pointerEnabled ){
			this.touchStart = 'pointerdown';
			this.touchEnd	= 'pointerup';
			this.touchMove	= 'pointermove';

			this.suppress_clicks = true;
		}
		else if( window.navigator.msPointerEnabled ){
			this.touchStart = 'MSPointerDown';
			this.touchEnd	= 'MSPointerUp';
			this.touchMove	= 'MSPointerMove';

			this.suppress_clicks = true;
		}
		else{
			this.touchStart = 'touchstart';
			this.touchEnd	= 'touchend';
			this.touchMove	= 'touchmove';
		}

		this.toggleevent = this.touchEnd == 'touchend' ? this.touchEnd + ' click' : this.touchEnd;	//add click except for IE
		this.transitionend = 'transitionend.ubermenu webkitTransitionEnd.ubermenu msTransitionEnd.ubermenu oTransitionEnd.ubermenu';

		//Are transitions supported?
		this.transitions = uber_supports( 'transition' ) && !this.$ubermenu.hasClass( 'ubermenu-transition-none' );
		if( !this.transitions ) this.$ubermenu.addClass( 'ubermenu-no-transitions' );

		//Detect crappy Android & Windows browsers and disable transitions
		var ua = navigator.userAgent.toLowerCase();
		this.log( ua );

		this.allow_trigger_overrides = true;
		this.noTouchEnd = false;

		var android = this.settings.android = /android/.test( ua );
		var windowsmobile = this.settings.windowsmobile = /iemobile/.test( ua );
		if( android || windowsmobile ){
			//this.log( 'android or windows' );
			//alert( ua );
			if( ( android && !(	/chrome/.test( ua ) || /firefox/.test( ua ) || /opera/.test( ua ) ) ) ||
				( windowsmobile )
				){
				this.settings.touchOffClose = false;
				this.disableTransitions();

				//Crap Android browsers don't fire touchend properly
				if( android ){
					this.$ubermenu
						.removeClass( 'ubermenu-trigger-hover_intent' )
						.removeClass( 'ubermenu-trigger-hover' )
						.addClass( 'ubermenu-trigger-click' );
					this.settings.touchEvents = false;
					this.allow_trigger_overrides = false;
				}
			}
		}

		if( windowsmobile ){
			this.log( 'disable touchoff close and accessibility' );
			this.settings.touchOffClose = false;	//improper event delegation in windows
			this.settings.accessible = false;		//WTF Microsoft
			this.settings.mouseEvents = false;
		}

		var safari5 = ( !/chrome/.test( ua ) ) && ( /safari/.test( ua ) ) && ( /version\/5/.test( ua ) );
		if( safari5 ){
			this.disableTransitions();
		}


		//Reflow right items
		this.last_width = $(window).width();
		var cur_width = this.last_width;
		var $right_items = plugin.$ubermenu.find( '.ubermenu-item-level-0.ubermenu-align-right' );
		if( $right_items.size() ){
			$(window).ubersmartresize( function(){
				cur_width = $(window).width();
				if( plugin.last_width <= plugin.settings.breakpoint &&
					cur_width >= plugin.settings.breakpoint ){
					$right_items.hide(); $right_items[0].offsetHeight; $right_items.show(); //reflow
				}
				plugin.last_width = cur_width;
			});
		}

		//TESTING
		if( this.settings.clicktest ) this.touchEnd = 'click';

		this.init();

	}

	Plugin.prototype = {

		init: function () {

			this.log( 'Initializing UberMenu' );

			this.$ubermenu.removeClass( 'ubermenu-nojs' );		//We're off and running

			this.removeConflicts();	//Stop other JS from interfering when possible

			// var plugin = this;
			// $( '.ubermenu a' ).on( 'click touchend mouseenter mouseover mousedown mouseup' , function( e ){
			// 	plugin.log( e.type + ' ' + $(this).text() );
			// });

			//Initialize user interaction events
			this.initializeSubmenuToggleTouchEvents();
			this.initializeSubmenuToggleMouseEvents();
			this.initializeRetractors();
			this.initializeResponsiveToggle();
			this.initializeTouchoffClose();
			this.initializeTabs();
			this.initializeSubmenuPositioning();
			this.initializeSegmentCurrentStates();
			this.initializeAccessibilityOnTab();
			this.initializeImageLazyLoad();
		},

		removeConflicts: function(){
			if( this.settings.remove_conflicts ){
				this.$ubermenu.find( '.ubermenu-item, .ubermenu-target, .ubermenu-submenu' ).add( this.$ubermenu )
					.removeAttr( 'style' )
					.unbind().off();
			}
		},



		/* Initalizers */

		initializeAccessibilityOnTab: function(){

			if( !this.settings.accessible ) return;

			var plugin = this;

			//Initialize
			$( 'body' ).on( 'keydown.ubermenu' , function( e ){
				var keyCode = e.keyCode || e.which;
				if( keyCode == 9 ){
					$( 'body' ).off( 'keydown.ubermenu' );
					plugin.initializeAccessibility();
				}
			});

		},

		initializeImageLazyLoad: function(){
			$( '.ubermenu-item-level-0' ).one( 'ubermenuopen' , function(){
				$( this ).find( '.ubermenu-image-lazyload' ).each( function(){
					$( this )
						.attr( 'src' , $( this ).data( 'src' ) )
						.removeClass( 'ubermenu-image-lazyload' );
				});
			});
		},

		initializeAccessibility: function(){

			var plugin = this;
			var tabbables = '.ubermenu-target, a, input, select, textarea';

			plugin.$current_focus = false;
			plugin.mousedown = false;
			plugin.$ubermenu.addClass( 'ubermenu-accessible' );

			//Focus
			plugin.$ubermenu.on( 'focus' , tabbables , function(){

				if( !plugin.mousedown ){

					var $target = $(this);

					plugin.$current_focus = $target;
					var $item = $target.parent( '.ubermenu-item' );	//get the LI parent of A

					if( $item.size() ){
						//Top level items - just close everything else
						if( $item.is( '.ubermenu-item-level-0' ) ){
							plugin.closeAllSubmenus();
						}

						//Items with submenus - open the submenus
						if( $item.is( '.ubermenu-has-submenu-drop' ) ){
							//Delay .5s so that if we want we can tab right through
							setTimeout( function(){
								if( !$target.is( ':focus' ) ) return; //skip if item no longer focused

								//Close the submenus of all siblings
								$item.siblings( '.ubermenu-has-submenu-drop' ).each( function(){
									plugin.closeSubmenu( $(this) , 'umac' , plugin );
								});

								//Open this item's submenu
								plugin.openSubmenu( $item, 'umac' , plugin );

							}, 500 );
						}

						//Focusout - any time an element is blurred, check to see if the
						//xUse focusout because it handles blur on all types of child elements
						//plugin.$ubermenu.on( 'focusout' , '.ubermenu-item-level-0' , function(){
						//plugin.$ubermenu.on( 'blur' , tabbables , function(e){
						$target.on( 'blur.ubermenu' , tabbables , function(e){
							if( !plugin.mousedown ){
								plugin.$current_focus = false;
								$(this).off( 'blur.ubermenu' );

								//If a new focus within the menu isn't set within .5s, assume we've left the menu focus
								setTimeout( function(){
									if( !plugin.$current_focus ){
										//console.log( 'abandon ' , plugin.$current_focus );
										plugin.closeAllSubmenus();
									}
								}, 500 );
							}
							plugin.mousedown = false;
						});
					}
				}

				plugin.mousedown = false;

			});



			//Mousedown - flag a mouse interaction - focus event above will be ignored if focus is result of mouse
			plugin.$ubermenu.on( 'mousedown' , function(e){
				plugin.mousedown = true;
				setTimeout( function(){ plugin.mousedown = false; }, 100 );
			});
		},


		initializeSubmenuPositioning: function(){
			var plugin = this;
			plugin.positionSubmenus();
			$(window).ubersmartresize(function(){
				plugin.positionSubmenus();
			});

			if( this.settings.reposition_on_load ){
				$(window).load( function(){
					plugin.positionSubmenus();
				});
			}
		},

		initializeSubmenuToggleTouchEvents: function (){

			if( !this.settings.touchEvents ) return;

			var plugin = this;

			//Touch Events
			//this.$ubermenu.on( this.touchStart , '.ubermenu-item' , function(e){ plugin.handleTouchInteraction( e , this , plugin ); } );

			this.$ubermenu.on( this.touchStart , '.ubermenu-target' , function(e){ plugin.handleTouchInteraction( e , this , plugin ); } );
			//this.$ubermenu.on( this.touchEnd ,   '.ubermenu-item' , this.handleSubmenuToggle );			//Added only on touchStart
			//this.$ubermenu.on( this.touchMove ,  '.ubermenu-item' , this.preventInteractionOnScroll );

			//Prevent "Ghost Clicks"
			this.$ubermenu.on( 'click' , '.ubermenu-has-submenu-drop > .ubermenu-target, .ubermenu-tab.ubermenu-item-has-children > .ubermenu-target' , function(e){ plugin.handleClicks( e , this , plugin ); } );

		},

		initializeSubmenuToggleMouseEvents: function( plugin ){

			plugin = plugin || this;	//Assign this to plugin if not passed


			//Don't initialize if mouse events are disabled
			if( !plugin.settings.mouseEvents ) return;
			if( plugin.settings.clicktest ) return;
			if( plugin.settings.windowstest ) return;


			plugin.log( 'initializeSubmenuToggleMouseEvents' );


			var evt = '';
			var trigger = 'hover';
			if( plugin.$ubermenu.hasClass( 'ubermenu-trigger-click' ) ){
				trigger = 'click';
			}
			else if( plugin.$ubermenu.hasClass( 'ubermenu-trigger-hover_intent' ) ){
				trigger = 'hover_intent';
			}

			if( trigger == 'click' ){
				//In the event this device supports 'pointerup', let that event handle the interactions rather than the click event
				if( !this.suppress_clicks ){
					evt = 'click.ubermenu-submenu-toggle';
					//evt = 'mouseup.ubermenu-submenu-toggle';
					this.$ubermenu.on( evt , '.ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger]) > .ubermenu-target' , function(e){ plugin.handleMouseClick( e , this , plugin ); } );
					this.$ubermenu.on( 'click.ubermenu-click-target' , '.ubermenu-item:not(.ubermenu-has-submenu-drop):not([data-ubermenu-trigger]) > .ubermenu-target' , function(e){ plugin.handleLink( e , this , plugin ); } );
				}
			}
			else if( trigger == 'hover_intent' ){
				evt = 'mouseenter.mouse_intent';	// > .ubermenu-target
				this.$ubermenu.on( evt , '.ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger])' , function(e){ plugin.handleMouseIntent( e , this , plugin ); } );
				this.$ubermenu.on( 'click.ubermenu-click-target' , '.ubermenu-item:not([data-ubermenu-trigger]) > .ubermenu-target' , function(e){ plugin.handleLink( e , this , plugin ); } );
			}
			else{
				evt = 'mouseenter.ubermenu-submenu-toggle';
				this.$ubermenu.on( evt , '.ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger]) > .ubermenu-target' , function(e){ plugin.handleMouseover( e , this , plugin ); } );
				this.$ubermenu.on( 'click.ubermenu-click-target' , '.ubermenu-item:not([data-ubermenu-trigger]) > .ubermenu-target' , function(e){ plugin.handleLink( e , this , plugin ); } );
			}

			//Now find divergents
			if( this.allow_trigger_overrides ){
				plugin.$ubermenu.find( '.ubermenu-item[data-ubermenu-trigger]' ).each( function(){

					var $li = $( this );
					trigger = $li.data( 'ubermenu-trigger' );

					if( trigger == 'click' ){
						if( !this.suppress_clicks ){	//hmm
							$li.on( 'click.ubermenu-submenu-toggle' , '.ubermenu-target' , function(e){ plugin.handleMouseClick( e , this , plugin ); } );
						}
					}
					else if( trigger == 'hover_intent' ){
						$li.on( 'mouseenter.mouse_intent' , function(e){ plugin.handleMouseIntent( e , this , plugin ); } );
						//$li.find( '> .ubermenu-target' ).on( 'click.ubermenu-click-target' , function(e){ plugin.handleLink( e , this , plugin ); } );
					}
					//Hover
					else{
						$li.on( 'mouseenter.ubermenu-submenu-toggle' , '.ubermenu-target' , function(e){ plugin.handleMouseover( e , this , plugin ); } );
					}
				});
			}
			else{
				//If trigger overrides aren't allowed, default tabs to click
				plugin.$ubermenu.find( '.ubermenu-tab' ).on( 'click.ubermenu-submenu-toggle' , '.ubermenu-target' , function(e){ plugin.handleMouseClick( e , this , plugin ); } );
			}

			//this.$ubermenu.on( 'mouseout.ubermenu-submenu-toggle'  , '.ubermenu-item' , this.handleMouseout );	//now only added on mouseover
		},

		disableSubmenuToggleMouseEvents: function(){
			this.log( 'disableSubmenuToggleMouseEvents' );
			this.events_disabled = true;
		},


		reenableSubmenuToggleMouseEvents: function( plugin ){
			plugin = plugin || this;

			plugin.log( 'reenableSubmenuToggleMouseEvents' );
			plugin.events_disabled = false;
		},


		initializeRetractors: function() {

			if( !this.settings.retractors ) return;	//Don't initialize if retractors are disabled

			var plugin = this;

			this.$ubermenu.on( 'click' , '.ubermenu-retractor' , function(e){ plugin.handleSubmenuRetractorEnd( e , this , plugin ); } );

			//set up the retractors
			if( this.settings.touchEvents ) this.$ubermenu.on( this.touchStart , '.ubermenu-retractor' , function(e){ plugin.handleSubmenuRetractorStart( e , this , plugin ); } );	// > .ubermenu-target

			//If this device does not support touch interactions, and the strategy is touch, remove the mobile retractors
			if( !this.touchenabled && plugin.settings.retractor_display_strategy == 'touch' ){
				this.$ubermenu.find( '.ubermenu-retractor-mobile' ).remove();
				this.$ubermenu.find( '.ubermenu-submenu-retractor-top' ).removeClass( 'ubermenu-submenu-retractor-top' ).removeClass( 'ubermenu-submenu-retractor-top-2' );
			}

		},


		initializeResponsiveToggle: function(){
			var plugin = this;
			var toggle_selector = '.ubermenu-responsive-toggle[data-ubermenu-target=' + plugin.$ubermenu.attr('id') + '], .ubermenu-responsive-toggle[data-ubermenu-target=_any_]';
			//if( plugin.$ubermenu.hasClass( 'ubermenu-main' ) ){
			//	toggle_selector+= ', .ubermenu-responsive-toggle[data-ubermenu-target=_main_]';
			//}
			plugin.log( 'initializeResponsiveToggle ' + this.toggleevent );

			$( document ).on( this.toggleevent , toggle_selector ,
				function(e){ plugin.handleResponsiveToggle( e , this , plugin ); } );
		},

		initializeTouchoffClose: function(){

			if( !this.settings.touchOffClose ) return;  //Don't initialize if touch off close is disabled

			var plugin = this;
			$( document ).on( this.touchEnd+'.ubermenu_touchoff' , function(e){ plugin.handleTouchoffClose( e, this , plugin ); } );
			if( !this.suppress_clicks ) $( document ).on( 'mouseup.ubermenu_clickoff' , function(e){ plugin.handleTouchoffClose( e, this , plugin ); } ); //use mouseup instead of click for firefox

		},


		initializeTabs: function(){

			var plugin  = this;

			plugin.$tab_blocks = plugin.$ubermenu.find( '.ubermenu-tabs' );

			//Reverse order so we do the innermost panels first
			plugin.$tab_blocks = $( plugin.$tab_blocks.get().reverse() );

			//When all the images load, check the tabs
			$(window).load( function(){
				plugin.sizeTabs();
			});

			//When the window is resized, check the tabs
			$(window).ubersmartresize(function(){
				plugin.$ubermenu.find( '.ubermenu-tabs , .ubermenu-tab-content-panel , .ubermenu-tabs-group' ).css( 'min-height' , '' );
				plugin.sizeTabs();
			});

			//When the submenu is opened (first time only), check the tabs
			plugin.$ubermenu.find( '.ubermenu-item-level-0.ubermenu-has-submenu-drop' ).on( 'ubermenuopen.sizetabs' , function(){
				$(this).off( 'ubermenuopen.sizetabs' );
				plugin.sizeTabs();
			});
			//plugin.sizeTabs();

			plugin.$ubermenu.find( '.ubermenu-tabs-show-default > .ubermenu-tabs-group' ).each( function(){
				plugin.openSubmenu( $(this).find( '> .ubermenu-tab' ).first() , 'tab default' , plugin );
			});

		},


		sizeTabs: function(){

			var plugin = this;
			var responsive = $(window).width() < plugin.settings.breakpoint ? true : false;

			//TODO change to breakpoint
			//if( $(window).width() < plugin.settings.breakpoint ) return;	//Don't resize below the breakpoint, as everything is relatively positioned

			//Reverse order so we do the innermost panels first
			//plugin.$tab_blocks = $( plugin.$tab_blocks.get().reverse() );  //Do it above instead, so it's only done once

			plugin.$tab_blocks.each( function(){

				var stacked = false;

				if( ( $(this).hasClass( 'ubermenu-tab-layout-top' ) ||
					  $(this).hasClass( 'ubermenu-tab-layout-bottom' ) ) &&
					!responsive ) {

					stacked = true;
				}

				var maxh = 0;


				var $tree;
				if( responsive ){
					$tree = $(this).parentsUntil( '.ubermenu' ).add( $(this).parents( '.ubermenu' ) );
				}
				else{
					$tree = $(this).parentsUntil( '.ubermenu-item-level-0' );
				}
				$tree.addClass( 'ubermenu-test-dimensions' );

				//Find the maximum panel height for this group - only immediate tab panels, not nested
				var $panels = $( this ).find( ' > .ubermenu-tabs-group > .ubermenu-tab > .ubermenu-tab-content-panel' );

				$panels.each( function(){
					$(this).addClass( 'ubermenu-test-dimensions' );
					if( $(this).outerHeight() > maxh ) maxh = $(this).outerHeight();
					$(this).removeClass( 'ubermenu-test-dimensions' );
				});


				//if( $( this ).is( '.ubermenu-tab-layout-left, .ubermenu-tab-layout-right' ) ){
				var $tabsgroup = $( this ).find( '> .ubermenu-tabs-group' );

				//If left or right layout, set min-height on tabs group as well
				if( !stacked ){
					if( $tabsgroup.outerHeight() > maxh ){
						maxh = $( this ).outerHeight();
					}
					$tabsgroup.css( 'min-height' , maxh );
				}
				//If top or bottom layout, set height for entire block
				else{
					$(this).css( 'min-height' , maxh + $tabsgroup.outerHeight() );
				}

				//Responsive - set submenu
				if( responsive ){
					$( this ).closest( '.ubermenu-submenu-drop' ).css( 'min-height' , maxh );
					$panels.css( 'min-height' , false );
				}
				//Desktop - Set all panels to max height
				else{
					//console.log( 'min ' + parseInt( $( this ).closest( '.ubermenu-submenu-drop' ).css( 'min-height' ) ) );
					var $sub = $( this ).closest( '.ubermenu-submenu-drop' );
					$sub.css( 'min-height' , false );
					//if( parseInt( $sub.css( 'min-height' ) ) == 0 ) $sub.css( 'min-height' , false );
					//if( plugin.$ubermenu.hasClass( 'ubermenu-horizontal' ) )
					$panels.css( 'min-height' , maxh );
				}

				$tree.removeClass( 'ubermenu-test-dimensions' );

			});

		},

		initializeSegmentCurrentStates: function(){
			this.$ubermenu.find( '.ubermenu-current-menu-item' ).first().parents( '.ubermenu-item' ).addClass( 'ubermenu-current-menu-ancestor' );
		},

		disableTransitions: function(){
			this.transitions = false;
			this.$ubermenu
					.removeClass( 'ubermenu-transition-slide' )
					.removeClass( 'ubermenu-transition-fade' )
					.removeClass( 'ubermenu-transition-shift' )
					.addClass( 'ubermenu-no-transitions' )
					.addClass( 'ubermenu-transition-none' );
		},



		/* Handlers */

		handleClicks: function( e , a , plugin ){

			var $a = $(a);

			//Kill any clicks flagged by touchend
			if( $a.data( 'ubermenu-killClick' ) ){
				e.preventDefault();
				//e.stopPropagation();
				plugin.log( 'killed click after touchend ', e );
			}

			//Reset flag in any event
			//plugin.log( 'reset kill click' );
			//$a.data( 'ubermenu-killClick' , false );
		},

		handleTouchInteraction: function( e , target , plugin ){

			// e.preventDefault();	//this would stop clicks, but also scroll, which is a problem
			e.stopPropagation();

			//If we're touching Windows, disable transitions
			if( e.type.indexOf( 'pointer' ) >= 0 ) plugin.disableTransitions();

			var $target = $( target );
			//Move to HandleTap
			// $target.data( 'ubermenu-killClick' , true );  //Prevent Clicks from being handled normally
			// $target.data( 'ubermenu-killHover' , true );  //Prevent hover from being handled normally
			// setTimeout( function(){ $target.data( 'ubermenu-killClick' , false ).data( 'ubermenu-killHover' , false ); } , 1000 );
			$target.parent().off( 'mouseleave.mouse_intent_none' );	//don't allow hover intent out if we're touching

			plugin.log( 'touchstart ' + e.type + ' ' + $target.text() , e );

			//Setup touch events
			//plugin.log( 'setup touch events' );
			$target.on( plugin.touchEnd ,  function( e ){ plugin.handleTap( e , this , plugin ); } );
			$target.on( plugin.touchMove , function( e ){ plugin.preventInteractionOnScroll( e , this , plugin ); } );


			//Note original event points for comparison
			//Standard
			if( e.originalEvent.touches ){
				$target.data( 'ubermenu-startX' , e.originalEvent.touches[0].clientX );
				$target.data( 'ubermenu-startY' , e.originalEvent.touches[0].clientY );
			}
			//Microsoft
			else if( e.originalEvent.clientY ){
				var pos = $target.offset();
				//$target.data( 'ubermenu-pos' , pos );
				$target.data( 'ubermenu-startX' , e.originalEvent.clientX );
			 	$target.data( 'ubermenu-startY' , e.originalEvent.clientY );
			}
			// else if( e.changedTouches ){
			// 	$target.data( 'ubermenu-startX' , e.changedTouches[0].pageX );
			// 	$target.data( 'ubermenu-startY' , e.changedTouches[0].pageY );
			// }
		},

		preventInteractionOnScroll: function( e , target , plugin ){

			plugin.log( 'touchmove interaction ' + e.type, e );

			var $target = $( target );

			//Check to see if the touch points were close enough together to be considered a tap
			//If not, they were a move/scroll, so unbind the touch event handlers and don't trigger menu
			if( e.originalEvent.touches ){
				if( Math.abs( e.originalEvent.touches[0].clientX - $target.data( 'ubermenu-startX' ) ) > plugin.settings.moveThreshold ||
					Math.abs( e.originalEvent.touches[0].clientY - $target.data( 'ubermenu-startY' ) ) > plugin.settings.moveThreshold ){
					plugin.log( 'Preventing interaction on scroll, reset handlers (standard)' );
					plugin.resetHandlers( $target , 'preventScroll touches' , plugin );
				}
				else{
					plugin.log( 'diff = ' + Math.abs( e.originalEvent.touches[0].clientY - $target.data( 'ubermenu-startY' ) ) );
				}
			}
			else if( e.originalEvent.clientY ){
				var pos = $target.data( pos );
				if( Math.abs( e.originalEvent.clientX - $target.data( 'ubermenu-startX' ) ) > plugin.settings.moveThreshold ||
					Math.abs( e.originalEvent.clientY - $target.data( 'ubermenu-startY' ) ) > plugin.settings.moveThreshold ){
					plugin.log( 'Preventing interaction on scroll, reset handlers (standard)' );
					plugin.resetHandlers( $target , 'preventScroll client' , plugin );
				}
				else{
					plugin.log( 'diff = ' + e.originalEvent.clientY + ' - ' + $target.data( 'ubermenu-startY' ) + ' = ' + Math.abs( e.originalEvent.clientY - $target.data( 'ubermenu-startY' ) ) );
				}
			}
			/*
			else if( e.changedTouches ){
				if( Math.abs( e.changedTouches[0].pageX - $target.data( 'ubermenu-startX' ) ) > plugin.settings.moveThreshold ||
					Math.abs( e.changedTouches[0].pageY - $target.data( 'ubermenu-startY' ) ) > plugin.settings.moveThreshold ){
					plugin.log( 'Preventing interaction on scroll, reset handlers (Windows)' );
					plugin.resetHandlers( $target );
				}
			}*/
			else plugin.log( 'no touch points found!' );

		},


		/* Handle tap - a touch interaction that completed */
		handleTap: function( e , target , plugin ){

			e.preventDefault();
			e.stopPropagation();

			var $target = $( target ); //.parent();

			//Quit if this was triggered after regular hover (which happens on IE)
			//Kill any touches flagged by mouseenter
			if( $target.data( 'ubermenu-killTouch' ) ){
				plugin.log( 'kill tap' );
				e.preventDefault();
				e.stopPropagation();
			}
			else{

				var $li = $target.parent();

				plugin.log( 'handleTap [' + $target.text() + ']', e.type );

				//$target.data( 'ubermenu-killHover' , true );

				$target.data( 'ubermenu-killClick' , true );  //Prevent Clicks from being handled normally
				$target.data( 'ubermenu-killHover' , true );  //Prevent hover from being handled normally
				setTimeout( function(){ $target.data( 'ubermenu-killClick' , false ).data( 'ubermenu-killHover' , false ); } , 1000 );

				//
				//Close up other submenus before proceeding
				//
				plugin.closeSubmenuInstantly( $li.siblings( '.ubermenu-active' ) );


				//
				//Toggle Submenus
				//

				if( $li.hasClass( 'ubermenu-has-submenu-drop' ) ){

					//if submenu is already open, close it and allow link to be followed
					if( $li.hasClass( 'ubermenu-active' ) ){

						//Don't close tabs
						if( !$li.hasClass( 'ubermenu-tab' ) ){
							plugin.closeSubmenu( $li , 'toggleUberMenuActive' , plugin );
						}
						//plugin.followLink( e , $li , plugin );
						plugin.handleLink( e , target , plugin , true );
					}
					//if submenu is closed, open the submenu, prevent link from being followed
					else{
						plugin.openSubmenu( $li , 'toggle' , plugin );
					}
				}

				//
				//Follow links that don't have submenus
				//
				else{
					//plugin.followLink( e , $li , plugin );
					plugin.handleLink( e , target , plugin , true );
				}
			}

			//Reset flag in any event
			$target.data( 'ubermenu-killTouch' , false );

			//plugin.resetHandlers( $li );
			//plugin.log( 'reset handlers' );
			plugin.resetHandlers( $target , 'handleTap' , plugin );

		},


		handleLink: function( e , link , plugin , follow ){

			follow = follow || false;

			plugin.log( 'handleLink' );

			//e.preventDefault();

			var $link = $( link );

			if( !$link.is( 'a' ) ) return;

			var href = $link.attr( 'href');

			var scrolltarget = $link.data( 'ubermenu-scrolltarget' );

			if( scrolltarget ){

				var $target_el = $( scrolltarget ).first();
				if( $target_el.size() > 0 ){
					e.preventDefault();
					$( 'html,body' ).animate({
							scrollTop: $target_el.offset().top - plugin.settings.scrollto_offset
						}, 1000 , 'swing' ,
						function(){
							plugin.closeSubmenu( $link.parent( '.menu-item' ) , 'handeLink' );
							//after scroll
						});
					return false; //don't follow any links if this scroll target is present
				}
				//if target isn't present here, redirect with hash
				else{
					if( href && href.indexOf( '#' ) == -1 ){		//check that hash does not already exist
						if( scrolltarget.indexOf( '#' ) == -1 ){	//if this is a class, add a hash tag
							scrolltarget = '#'+scrolltarget;
						}
						window.location = href + scrolltarget;		//append hash/scroll target to URL and redirect
						e.preventDefault();
					}
					//No href, no worries
				}
			}

			if( !href ){
				e.preventDefault();
			}

			//Handle clicks (where default was already prevented)
			else{
				if( follow && e.isDefaultPrevented() ){
					plugin.log( 'default prevented, follow link' );
					if( $link.attr( 'target' ) == '_blank' ){
						window.open( href , '_blank');
					}
					else{
						window.location = href;
					}
				}

			}


		},


		handleMouseClick: function( e , target , plugin ){
			plugin.log( 'handleMouseClick', e );

			//Stop link follow
			//e.preventDefault();	//defer to 'else' so that the second click can be handled naturally

			var $target	= $( target );

			if( $target.data( 'ubermenu-killClick' ) ){
				plugin.log( 'handleMouseClick: killClick' );
				return;	//3.0.4.1
			}

			var $item = $target.parent( '.ubermenu-item' ); //$( li );

			if( $item.size() ){
				//Check if this is already open
				if( $item.hasClass( 'ubermenu-active' ) ){

					//If it's a link, follow
					if( $target.is( 'a' ) ){
						plugin.handleLink( e , target , plugin );
					}

					//If it's not a link (and not a tab), retract
					if( !$item.hasClass( 'ubermenu-tab' ) ){
						plugin.closeSubmenu( $item , 'retract' );
					}
				}

				//Close other menus, open this one
				else{

					//Submenu to open
					if( $item.hasClass( 'ubermenu-has-submenu-drop' ) ){
						e.preventDefault(); //Not already active, don't allow click
						plugin.closeSubmenuInstantly( $item.siblings( '.ubermenu-active' ) );
						plugin.openSubmenu( $item , 'click' , plugin );
					}
					//Allow link to be followed
					else{
						//Just let it go
						//plugin.handleLink( e , target , plugin );
					}
				}
			}

			//Only attach mouseout after mouseover, this way menus opened by touch won't be closed by mouseout
			//$( li ).on( 'mouseout.ubermenu-submenu-toggle' , function( e ){ plugin.handleMouseout( e , this , plugin ); } );
		},






		handleMouseIntent: function( e , item , plugin ){	///*target*/

			plugin.log( 'handleMouseIntent' );

			//var $target = $( target );
			//var $item = $target.parent( '.ubermenu-item' );
			var $item = $( item );

			//console.log( '[' + $item.find('> .ubermenu-target').text() + '] handle mouse_intent' );

			//Cancel Timer
			if( $item.data( 'mouse_intent_timer' ) ){
				$item.data( 'mouse_intent_timer' , clearTimeout( $item.data( 'mouse_intent_timer' ) ) );
				//console.log( 'clear timeout' );
			}

			//Prevent Touch events, which will occur on IE
			// var $target = $item.find( '> .ubermenu-target' );
			// $target.data( 'ubermenu-killTouch' , true );
			// setTimeout( function(){ $target.data( 'ubermenu-killTouch' , false ); } , 1000 );

			//Quit if this was triggered by touch
			var $a = $item.find( '.ubermenu-target' );
			//Kill any hovers flagged by touchstart
			if( $a.data( 'ubermenu-killHover' ) ){
				plugin.log( 'killHover MouseIntent' );
				e.preventDefault();
				e.stopPropagation();
				return;
			}

			pX = e.pageX; pY = e.pageY;


			$item.on( 'mousemove.mouse_intent' , plugin.trackMouse );

			$item.data( 'mouse_intent_timer' , setTimeout(
				function(){
					plugin.compare( e , $item , plugin.handleMouseIntentSuccess , plugin );
				},
				plugin.settings.intent_interval
			));

			//Cancel if out - since we only hook up the close submenu event after a successfull intent
			$item.on( 'mouseleave.mouse_intent_none' , function(){
				//plugin.log( 'mouseleave' );
				$(this).data( 'mouse_intent_timer' , clearTimeout( $(this).data( 'mouse_intent_timer' ) ) );
				$item.data( 'mouse_intent_state' , 0 );
				$item.off( 'mouseleave.mouse_intent_none' );

				if( $a.data( 'ubermenu-killHover' ) ){
					plugin.log( 'killHover MouseIntent_Cancel' );
					e.preventDefault();
					e.stopPropagation();
					return;
				}

				plugin.closeSubmenu( $item , 'mouse_intent_cancel' , plugin );
			});
			//}
			//else console.log( 'STATE 1' );


		},

		handleMouseIntentSuccess: function( e , $item , plugin ){

			plugin.log( 'handleMouseIntentSuccess' );

			//Cancel the quickleave event
			$item.off( 'mouseleave.mouse_intent_none' );

			//Quit if this was triggered by touch - on Android Stock, this is triggered after touch, but mouseenter is triggered before
			var $a = $item.find( '.ubermenu-target' );
			//Kill any hovers flagged by touchstart
			if( $a.data( 'ubermenu-killHover' ) ){
				plugin.log( 'Kill hover on IntentSuccess' );
				e.preventDefault();
				e.stopPropagation();
				return;
			}
			//Reset flag in any event
			$a.data( 'ubermenu-killHover' , false );


			plugin.triggerSubmenu( e , $item , plugin );

			//Setup mouseleave, but not for tabs
			if( !$item.hasClass( 'ubermenu-tab' ) ){
				$item.on( 'mouseleave.mouse_intent' , function( e ){ plugin.handleMouseIntentLeave( e , this , plugin ); } );
			}
		},

		handleMouseIntentLeave: function( e , item , plugin ){

			//var $target = $( target );
			//var $item = $target.parent( '.ubermenu-item' );
			var $item = $( item );

			//console.log( '[' + $item.find('> .ubermenu-target').text() + '] handle mouse_intent LEAVE' );

			//Cancel timer
			if( $item.data( 'mouse_intent_timer' ) ){
				$item.data( 'mouse_intent_timer' , clearTimeout( $item.data( 'mouse_intent_timer' ) ) );
				//console.log( 'clear timeout' );
			}

			$item.off( 'mousemove.mouse_intent' , plugin.trackMouse );
			//$item.off( 'mouseleave.mouse_intent' ); //special

			if( $item.data( 'mouse_intent_state' ) == 1 ){
				//$item.data( 'mouse_intent_state' , 0 );
				$item.data( 'mouse_intent_timer' , setTimeout(
					function(){
						plugin.delayMouseLeave( e , $item , plugin.handleMouseIntentLeaveSuccess , plugin );
					},
					plugin.settings.intent_delay
				) );
			}

		},

		handleMouseIntentLeaveSuccess: function( e , $el , plugin ){
			$el.off( 'mouseleave.mouse_intent' ); //special
			if( $el.find( '> .ubermenu-target' ).data( 'ubermenu-killHover' ) ) return;
			plugin.closeSubmenu( $el , 'mouse_intent_leave' , plugin );

		},

		delayMouseLeave: function( e , $el , func , plugin ){
			//console.log( 'delay mouse leave ' );
			$el.data( 'mouse_intent_timer' , clearTimeout( $el.data( 'mouse_intent_timer' ) ) );
			$el.data( 'mouse_intent_state' , 0 );
			return func.apply( $el ,[e,$el,plugin]);
		},

		trackMouse: function( e ) {
			cX = e.pageX;
			cY = e.pageY;
		},

        compare: function( e , $el , func , plugin ){

        	//console.log( 'compare' );

			$el.data( 'mouse_intent_timer' , clearTimeout( $el.data( 'mouse_intent_timer' ) ) );

			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < plugin.settings.intent_threshold ) {
				//console.log( 'threshold met' );
				$el.off( 'mousemove.mouse_intent' , plugin.track );
				// set hoverIntent state to true (so mouseOut can be called)
                $el.data( 'mouse_intent_state' , 1 );
                return func.apply( $el , [e,$el,plugin] );
            } else {
            	//console.log( 'keep polling' );
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                $el.data( 'mouse_intent_timer' , setTimeout( function(){ plugin.compare( e , $el , func , plugin ); } , plugin.settings.intent_interval ) );
            }
        },





        triggerSubmenu: function( e , $item , plugin ){
			plugin.closeSubmenuInstantly( $item.siblings( '.ubermenu-active, .ubermenu-in-transition' ) );
			plugin.openSubmenu( $item , 'mouseenter' , plugin );
        },




		handleMouseover: function( e , target , plugin ){

			if( plugin.events_disabled ) return;

			var $target = $( target );

			$target.data( 'ubermenu-killTouch' , true );
			setTimeout( function(){ $target.data( 'ubermenu-killTouch' , false ); } , 1000 );

			plugin.log( 'handleMouseenter, add mouseleave', e );

			var $item = $target.parent( '.ubermenu-item' ); //$( li );

			if( $item.size() ){
				if( !$item.hasClass( 'ubermenu-active' ) ){

					plugin.triggerSubmenu( e , $item , plugin );

					//Set up mouseleave event, but no hover out for Tabs
					if( !$item.hasClass( 'ubermenu-tab' ) ){
						$item.on( 'mouseleave.ubermenu-submenu-toggle' , function( e ){ plugin.handleMouseout( e , this , plugin ); } );
					}
				}
			}
		},

		//Mouseleave should be for LI so that we can use subs
		handleMouseout: function( e , li , plugin ){

			plugin.log( 'handleMouseout, remove mouseout', e );

			//$( li ).off( 'mouseout.ubermenu-submenu-toggle' );	//Unbind mouseout event, it'll be rebound next mouseover
			$( li ).off( 'mouseleave.ubermenu-submenu-toggle' );	//Unbind mouseout event, it'll be rebound next mouseover

			plugin.closeSubmenu( $( li ) , 'mouseout' );
		},



		handleSubmenuRetractorStart: function( e , li , plugin ){
			e.preventDefault();
			e.stopPropagation();

			$( li ).on( plugin.touchEnd , function( e ){ plugin.handleSubmenuRetractorEnd( e , this , plugin ); } );

			plugin.log( 'handleSubmenuRetractorStart ' + $( li ).text());

		},

		handleSubmenuRetractorEnd: function( e , li , plugin ){
			e.preventDefault();
			e.stopPropagation();

			var $parent_item = $( li ).closest( '.ubermenu-item' );
			plugin.closeSubmenu( $parent_item , 'handleSubmenuRetractor' );

			$( li ).off( plugin.touchEnd );

			plugin.log( 'handleSubmenuRetractorEnd ' + $parent_item.find('> .ubermenu-target').text());
			return false;

		},


		handleResponsiveToggle: function( e , toggle , plugin ){

			plugin.log( 'handleResponsiveToggle ' + e.type , e );

			e.preventDefault();
			e.stopPropagation();

			//Prevent Double-fire
			//some browsers fire click and touch, so prevent the click manually
			if( e.type == 'touchend' ){
				plugin.$ubermenu.data( 'ubermenu-prevent-click' , true );
				setTimeout( function(){
					plugin.$ubermenu.data( 'ubermenu-prevent-click' , false );
				}, 500 );
			}
			else if( e.type == 'click' && plugin.$ubermenu.data( 'ubermenu-prevent-click' ) ){
				plugin.$ubermenu.data( 'ubermenu-prevent-click' , false );
				return;
			}

			//TODO just call off/on click.xyz?  or binding already fired?
			//Or should we just have a state set that returns, independent of event type


			var $toggle = $( toggle );

			//plugin.$ubermenu.slideToggle();

			plugin.$ubermenu.toggleClass( 'ubermenu-responsive-collapse' );

			if( plugin.transitions ){
				plugin.$ubermenu.addClass( 'ubermenu-in-transition' );
				plugin.$ubermenu.on( plugin.transitionend + '_toggleubermenu', function(){
						plugin.$ubermenu.removeClass( 'ubermenu-in-transition' );
						plugin.$ubermenu.off( plugin.transitionend  + '_toggleubermenu' );
					});
			}

		},

		handleTouchoffClose: function( e , _this , plugin ){

			//Only fire if the touch event occurred outside the menu
			//if( $(e.target).parents().index( plugin.$ubermenu ) == -1){
			if( !$(e.target).closest( '.ubermenu' ).length ){

				plugin.log( 'touchoff close ', e );

				//If there are any submenus to close, close them and temporarily disable hover events
				if( plugin.closeAllSubmenus() ){
					//console.log( plugin.settings.submenuAnimationDuration );
					//temporarily disable hovering so that the mouseover event doesn't fire and reopen the menu
					plugin.disableSubmenuToggleMouseEvents();
					window.setTimeout( function(){
							//plugin.initializeSubmenuToggleMouseEvents( plugin );
							plugin.reenableSubmenuToggleMouseEvents( plugin );
						},
						plugin.settings.submenuAnimationDuration );

					//can't call /e.preventDefault(); because it will stop mouseover events from firing
				}
			}
		},




		/* Controllers */

		positionSubmenus: function(){

			var plugin = this;
			if( plugin.orientation == 'h' ){
				plugin.$ubermenu.find( '.ubermenu-submenu-drop.ubermenu-submenu-align-center' ).each( function(){

					var $parent = $(this).parent( '.ubermenu-item' );
					var $sub = $(this);
					var $container;
					if( plugin.$ubermenu.hasClass( 'ubermenu-bound' ) ){
						$container = $parent.closest( '.ubermenu , .ubermenu-submenu' ); // main menu bar
					}
					else if( plugin.$ubermenu.hasClass( 'ubermenu-bound-inner' ) ){
						$container = $parent.closest( '.ubermenu-nav , .ubermenu-submenu' ); // inner menu bar
					}
					else{
						var $parent_sub = $parent.closest( '.ubermenu-submenu' );

						//Find the closest relatively positioned element
						if( $parent_sub.size() === 0 ){
							$container = plugin.$ubermenu.offsetParent();
						}
					}

					var sub_width = $sub.outerWidth();

					var parent_width = $parent.outerWidth();
					var parent_left_edge = $parent.offset().left;

					var container_width = $container.width();
					var container_left_edge = $container.offset().left;

					// console.log( $container );
					// console.log( 'parent_width: ' + parent_width );
					// console.log( 'parent_left: ' + parent_left_edge );
					// console.log( 'container_width: ' + container_width );
					// console.log( 'container_left: ' + container_left_edge );


					var center_left = ( parent_left_edge + ( parent_width / 2 ) ) - ( container_left_edge + ( sub_width / 2 ) );

					//If submenu is left of container edge, align left
					var left = center_left > 0 ? center_left : 0;

					//If submenu width is larger than container width, center to container (menu bar)
					if( sub_width > container_width ){
						left = ( sub_width - container_width ) / -2;
					}
					//If submenu is right of container edge, align right
					else if( left + sub_width > container_width ){
						//left = container_width - sub_width;
						$sub.css( { 'right' : 0 , 'left' : 'auto' } );
						left = false;
					}

					if( left !== false ){
						$sub.css( 'left' , left );
					}
				});
			}
		},


		openSubmenu: function( $li , tag , plugin ){

			plugin = plugin || this;

			plugin.log( 'Open Submenu ' + tag );

			if( !$li.hasClass( 'ubermenu-active' ) ){
				$li.addClass( 'ubermenu-active' );

				if( plugin.transitions ){
					$li.addClass( 'ubermenu-in-transition' );

					$li.find( '> .ubermenu-submenu' ).on( plugin.transitionend + '_opensubmenu', function(){
						plugin.log( 'finished submenu open transition' );
						$li.removeClass( 'ubermenu-in-transition' );
						$( this ).off( plugin.transitionend  + '_opensubmenu' );
					});
				}
				$li.trigger( 'ubermenuopen' );
			}
		},

		closeSubmenu: function( $li , tag , plugin ){

			plugin = plugin || this;

			plugin.log( 'closeSubmenu ' + $li.find( '>a' ).text() + ' [' + tag + ']' );

			//If this menu is currently active and has a submenu, close it
			if( $li.hasClass( 'ubermenu-item-has-children' ) && $li.hasClass( 'ubermenu-active' ) ){

				if( plugin.transitions ){
					$li.addClass( 'ubermenu-in-transition' );	//transition class keeps visual flag until transition completes
				}

				$li.each( function(){
					var _$li = $(this);
					var _$ul = _$li.find( '> ul' );

					//Remove the transition flag once the transition is completed
					if( plugin.transitions ){
						_$ul.on( plugin.transitionend + '_closesubmenu', function(){
							plugin.log( 'finished submenu close transition' );
							_$li.removeClass( 'ubermenu-in-transition' );
							_$ul.off( plugin.transitionend  + '_closesubmenu' );
						});
					}
				});
			}

			//Actually remove the active class, which causes the submenu to close
			$li.removeClass( 'ubermenu-active' );
			$li.trigger( 'ubermenuclose' );

		},

		//Close subs without transition
		closeSubmenuInstantly: function( $li ){
			if( $li.size() === 0 ) return;

			var plugin = this;
			$li.addClass( 'ubermenu-notransition' );
			$li.removeClass( 'ubermenu-active' ).removeClass( 'ubermenu-in-transition' );
			$li[0].offsetHeight;	//triggers reflow
			$li.removeClass( 'ubermenu-notransition' );
			$li.trigger( 'ubermenuclose' );
		},

		//Top level subs only
		closeAllSubmenus: function(){
			//$( this.element ).find( 'li.menu-item-has-children' ).removeClass( 'ubermenu-active' );
			var $actives = this.$ubermenu.find( '.ubermenu-item-level-0.ubermenu-active' );
			if( $actives.length ) this.closeSubmenuInstantly( $actives );
			return $actives.length;
		},

		resetHandlers: function( $target , tag , plugin ){
			plugin.log( 'ResetHandlers: ' + tag );
			$target.off( this.touchEnd );
			$target.off( this.touchMove );

			var $item = $target.parent();
			$item.off( 'mousemove.mouse_intent' );
			$item.off( 'mouseleave.mouse_intent_none' );
			$item.data( 'mouse_intent_timer' , clearTimeout( $item.data( 'mouse_intent_timer' ) ) );
			$item.data( 'mouse_intent_state' , 0 );
		},


		log: function( content , o , plugin ){
			plugin = plugin || this;

			if( plugin.settings.debug ){
				if( plugin.settings.debug_onscreen ){
					this.debug_target.prepend( '<div class="um-debug-content">'+content+'</div>' );
				}
				else console.log( content , o );
			}
		}
	};

	/*
	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
	};
	*/

	$.fn[ pluginName ] = function ( options ) {

		var args = arguments;

		if ( options === undefined || typeof options === 'object' ) {
			return this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
				}
			});
		}
		else if ( typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			// Cache the method call to make it possible to return a value
			var returns;

			this.each(function () {
				var instance = $.data(this, 'plugin_' + pluginName);

				// Tests that there's already a plugin-instance and checks that the requested public method exists
				if ( instance instanceof Plugin && typeof instance[options] === 'function') {

					// Call the method of our plugin instance, and pass it the supplied arguments.
					returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
				}

				// Allow instances to be destroyed via the 'destroy' method
				if (options === 'destroy') {
					$.data(this, 'plugin_' + pluginName, null);
				}
			});

			// If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
			return returns !== undefined ? returns : this;
		}
	};

})( jQuery, window, document );

jQuery( document ).ready( function($){

	//Scroll to non-ID "hashes"
	if( window.location.hash.substring(1,2) == '.' ){
		var $scrollTarget = $( window.location.hash.substring(1) );
		if( $scrollTarget.size() ) window.scrollTo( 0 , $scrollTarget.offset().top );
	}

	$( '#wp-admin-bar-ubermenu_loading' ).remove();

	$( '.ubermenu' ).ubermenu({
		//touchOffClose: false
		//debug: true,
		//debug_onscreen: true
		//mouseEvents: false
		//clicktest: true
	});


	//Google Maps
	if(
	   typeof google !== 'undefined' &&
	   typeof google.maps !== 'undefined' &&
	   typeof google.maps.LatLng !== 'undefined') {
		$('.ubermenu-map-canvas').each(function(){

			var $canvas = $( this );
			var dataZoom = $canvas.attr('data-zoom') ? parseInt( $canvas.attr( 'data-zoom' ) ) : 8;

			var latlng = $canvas.attr('data-lat') ?
							new google.maps.LatLng($canvas.attr('data-lat'), $canvas.attr('data-lng')) :
							new google.maps.LatLng(40.7143528, -74.0059731);

			var myOptions = {
				zoom: dataZoom,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				center: latlng
			};

			var map = new google.maps.Map(this, myOptions);

			if($canvas.attr('data-address')){
				var geocoder = new google.maps.Geocoder();
				geocoder.geocode({
						'address' : $canvas.attr('data-address')
					},
					function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							map.setCenter(results[0].geometry.location);
							latlng = results[0].geometry.location;
							var marker = new google.maps.Marker({
								map: map,
								position: results[0].geometry.location,
								title: $canvas.attr('data-mapTitle')
							});
						}
				});
			}
			else{
				//place marker for regular lat/long
				var marker = new google.maps.Marker({
					map: map,
					position: latlng,
					title: $canvas.attr('data-mapTitle')
				});
			}

			var $li = $(this).closest( '.ubermenu-has-submenu-drop' );
			var mapHandler = function(){
				google.maps.event.trigger(map, "resize");
				map.setCenter(latlng);
				//Only resize the first time we open
				$li.off( 'ubermenuopen', mapHandler );
			};
			$li.on( 'ubermenuopen', mapHandler );
		});
	}
});

function uber_op( id , args , def ){

	//If no id
	if( !ubermenu_data.hasOwnProperty( id ) ){
		return def;
	}

	var val = ubermenu_data[id];

	if( args.hasOwnProperty( 'datatype' ) ){
		switch( args['datatype'] ){
			case 'numeric':
				val = parseInt( val );
				break;

			case 'boolean':
				if( val == 'on' || val == 1 || val == '1' ){
					val = true;
				}
				else{
					val = false;
				}
				break;
		}
	}

	return val;
}



(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'ubersmartresize');

var uber_supports = (function() {
	var div = document.createElement('div'),
		vendors = 'Khtml Ms O Moz Webkit'.split(' ');

	return function(prop) {

		var len = vendors.length;

		if ( prop in div.style ) return true;

		prop = prop.replace(/^[a-z]/, function(val) {
			return val.toUpperCase();
		});

		while(len--) {
			if ( vendors[len] + prop in div.style ) {
				return true;
			}
		}
		return false;
	};
})();


/*
 * Deprecated API Functions
 */
//jQuery( '.ubermenu' ).ubermenu( 'openSubmenu' , jQuery( '#menu-item-401' ) );
function uberMenu_openMega( id ){
	jQuery( '.ubermenu' ).ubermenu( 'openSubmenu' , jQuery( id ) );
}
function uberMenu_openFlyout( id ){
	jQuery( '.ubermenu' ).ubermenu( 'openSubmenu' , jQuery( id ) );
}
function uberMenu_close( id ){
	jQuery( '.ubermenu' ).ubermenu( 'closeSubmenu' , jQuery( id ) );
}
function uberMenu_redrawSubmenus(){
	jQuery( '.ubermenu' ).ubermenu( 'positionSubmenus' );
}


$(function(){
    var header = $('#head'),
        offset = header.offset().top;

    $(window).on('scroll',function(){

        if($(window).scrollTop() > offset){

            header.addClass('fixed');
        }
        else{
            header.removeClass('fixed');

        }


    });
});


function smamo_fb_feed(callback){
    $.ajax({
        url : ajaxURL,
        type : 'POST',
        data : {action : 'fb_feed'},
        dataType : 'json',
        success : function(response){
            if (typeof callback === 'function'){
                callback(response);
            }
        },
    });
}


$(function(){

    if($('body.home .fb-news').length){
        var section = $('body.home .fb-news');

        smamo_fb_feed(function(r){
            if(typeof r.transient.data !== 'undefined'){
                var d = r.transient.data,
                    c = 0;
                for (i = 0; i < d.length; i++) {


                    var entry = section.find('.news-entry:nth-child('+(c+1)+')'),
                        status = d[i];

                    /* filtrer events fra */
                    if(status.type === 'event' || c > 4){

                        continue;
                    }
                    /* filtrer events fra */

                    c++; // entry nummer


                    // Tilføj typelklasse
                    entry.addClass('news-entry-'+status.type);
                    entry.addClass('news-entry-status-'+status.status_type);



                    // Indstil link

                    if('undefined' !== typeof status.permalink_url){
                        entry.attr('href', status.permalink_url);
                    }
                    else{
                        entry.attr('href', status.link);
                    }


                    // Indstil baggrundsbillede
                    entry.find('.news-img').removeClass('loading').css('background-image','url('+status.full_picture+')');

                    // Indstil dato og ikoner
                    var date = new Date(status.created_time),
                        str = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();


                    if('photo' === status.type){
                        str += '<svg viewbox="0 0 16 16"><use xlink:href="#icon-camera"></use></svg>';
                    }

                    if('video' === status.type){
                        str += '<svg viewbox="0 0 16 16"><use xlink:href="#icon-play"></use></svg>';
                    }

                    if('link' === status.type){
                        str += '<svg viewbox="0 0 16 16"><use xlink:href="#icon-link"></use></svg>';
                    }

                    if('status' === status.type){
                        str += '<svg viewbox="0 0 16 16"><use xlink:href="#icon-file"></use></svg>';
                    }


                    entry.find('.news-date').html(str);


                    // Indstil tekst
                    var strlen = 300,
                        text = '';

                    if(c > 1){
                        strlen = 100;
                    }

                    if(typeof status.description !== 'undefined'){
                        text = status.description;
                    }

                    else if(typeof status.message !== 'undefined'){
                        text = status.message;
                    }

                    else if(typeof status.caption !== 'undefined'){
                        text = status.caption;
                    }

                    if(text.length > strlen){
                        text = text.substr(0,strlen) + ' ...';
                    }

                    entry.find('.news-title').html(text);
                }
            }
        });
    }
});



(function(){var $,Analyze,Blender,Calculate,Caman,CamanParser,Canvas,Convert,Event,Fiber,Filter,IO,Image,Layer,Log,Logger,PixelInfo,Plugin,Renderer,Root,Store,Util,fs,slice,vignetteFilters,__hasProp={}.hasOwnProperty,__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;},__bind=function(fn,me){return function(){return fn.apply(me,arguments);};},__slice=[].slice;slice=Array.prototype.slice;$=function(sel,root){if(root==null){root=document;}
if(typeof sel==="object"||(typeof exports!=="undefined"&&exports!==null)){return sel;}
return root.querySelector(sel);};Util=(function(){function Util(){}
Util.uniqid=(function(){var id;id=0;return{get:function(){return id++;}};})();Util.extend=function(obj){var copy,dest,prop,src,_i,_len;dest=obj;src=slice.call(arguments,1);for(_i=0,_len=src.length;_i<_len;_i++){copy=src[_i];for(prop in copy){if(!__hasProp.call(copy,prop))continue;dest[prop]=copy[prop];}}
return dest;};Util.clampRGB=function(val){if(val<0){return 0;}
if(val>255){return 255;}
return val;};Util.copyAttributes=function(from,to,opts){var attr,_i,_len,_ref,_ref1,_results;if(opts==null){opts={};}
_ref=from.attributes;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){attr=_ref[_i];if((opts.except!=null)&&(_ref1=attr.nodeName,__indexOf.call(opts.except,_ref1)>=0)){continue;}
_results.push(to.setAttribute(attr.nodeName,attr.nodeValue));}
return _results;};return Util;})();if(typeof exports!=="undefined"&&exports!==null){Root=exports;Canvas=require('canvas');Image=Canvas.Image;Fiber=require('fibers');fs=require('fs');}else{Root=window;}
Root.Caman=Caman=(function(){Caman.version={release:"4.0.0",date:"1/6/13"};Caman.DEBUG=false;Caman.NodeJS=typeof exports!=="undefined"&&exports!==null;Caman.autoload=!Caman.NodeJS;Caman.crossOrigin="anonymous";Caman.toString=function(){return"Version "+Caman.version.release+", Released "+Caman.version.date;};Caman.remoteProxy="";Caman.proxyParam="camanProxyUrl";Caman.getAttrId=function(canvas){if(typeof canvas==="string"){canvas=$(canvas);}
if(!((canvas!=null)&&(canvas.getAttribute!=null))){return null;}
return canvas.getAttribute('data-caman-id');};function Caman(){var args,callback,id,_this=this;if(arguments.length===0){throw"Invalid arguments";}
if(this instanceof Caman){this.finishInit=this.finishInit.bind(this);this.imageLoaded=this.imageLoaded.bind(this);args=arguments[0];if(!Caman.NodeJS){id=parseInt(Caman.getAttrId(args[0]),10);callback=typeof args[1]==="function"?args[1]:typeof args[2]==="function"?args[2]:function(){};if(!isNaN(id)&&Store.has(id)){return Store.execute(id,callback);}}
this.id=Util.uniqid.get();this.originalPixelData=[];this.pixelStack=[];this.layerStack=[];this.canvasQueue=[];this.currentLayer=null;this.scaled=false;this.analyze=new Analyze(this);this.renderer=new Renderer(this);this.domIsLoaded(function(){_this.parseArguments(args);return _this.setup();});return this;}else{return new Caman(arguments);}}
Caman.prototype.domIsLoaded=function(cb){var listener,_this=this;if(Caman.NodeJS){return setTimeout(function(){return cb.call(_this);},0);}else{if(document.readyState==="complete"){Log.debug("DOM initialized");return setTimeout(function(){return cb.call(_this);},0);}else{listener=function(){if(document.readyState==="complete"){Log.debug("DOM initialized");return cb.call(_this);}};return document.addEventListener("readystatechange",listener,false);}}};Caman.prototype.parseArguments=function(args){if(args.length===0){throw"Invalid arguments given";}
this.initObj=null;this.initType=null;this.imageUrl=null;this.callback=function(){};this.setInitObject(args[0]);if(args.length===1){return;}
switch(typeof args[1]){case"string":this.imageUrl=args[1];break;case"function":this.callback=args[1];}
if(args.length===2){return;}
return this.callback=args[2];};Caman.prototype.setInitObject=function(obj){if(Caman.NodeJS){this.initObj=obj;this.initType='node';return;}
if(typeof obj==="object"){this.initObj=obj;}else{this.initObj=$(obj);}
return this.initType=this.initObj.nodeName.toLowerCase();};Caman.prototype.setup=function(){switch(this.initType){case"node":return this.initNode();case"img":return this.initImage();case"canvas":return this.initCanvas();}};Caman.prototype.initNode=function(){var _this=this;Log.debug("Initializing for NodeJS");this.image=new Image();this.image.onload=function(){Log.debug("Image loaded. Width = "+_this.image.width+", Height = "+_this.image.height);_this.canvas=new Canvas(_this.image.width,_this.image.height);return _this.finishInit();};this.image.onerror=function(err){throw err;};return this.image.src=this.initObj;};Caman.prototype.initImage=function(){this.image=this.initObj;this.canvas=document.createElement('canvas');this.context=this.canvas.getContext('2d');Util.copyAttributes(this.image,this.canvas,{except:['src']});this.image.parentNode.replaceChild(this.canvas,this.image);this.imageAdjustments();return this.waitForImageLoaded();};Caman.prototype.initCanvas=function(){this.canvas=this.initObj;this.context=this.canvas.getContext('2d');if(this.imageUrl!=null){this.image=document.createElement('img');this.image.src=this.imageUrl;this.imageAdjustments();return this.waitForImageLoaded();}else{return this.finishInit();}};Caman.prototype.imageAdjustments=function(){if(this.needsHiDPISwap()){Log.debug(this.image.src,"->",this.hiDPIReplacement());this.swapped=true;this.image.src=this.hiDPIReplacement();}
if(IO.isRemote(this.image)){this.image.src=IO.proxyUrl(this.image.src);return Log.debug("Remote image detected, using URL = "+this.image.src);}};Caman.prototype.waitForImageLoaded=function(){if(this.image.complete){return this.imageLoaded();}else{return this.image.onload=this.imageLoaded;}};Caman.prototype.imageLoaded=function(){Log.debug("Image loaded. Width = "+this.image.width+", Height = "+this.image.height);if(this.swapped){this.canvas.width=this.image.width/this.hiDPIRatio();this.canvas.height=this.image.height/this.hiDPIRatio();}else{this.canvas.width=this.image.width;this.canvas.height=this.image.height;}
return this.finishInit();};Caman.prototype.finishInit=function(){var pixel,_i,_len,_ref;if(this.context==null){this.context=this.canvas.getContext('2d');}
this.originalWidth=this.width=this.canvas.width;this.originalHeight=this.height=this.canvas.height;this.hiDPIAdjustments();this.assignId();if(this.image!=null){this.context.drawImage(this.image,0,0,this.image.width,this.image.height,0,0,this.originalWidth,this.originalHeight);}
this.imageData=this.context.getImageData(0,0,this.canvas.width,this.canvas.height);this.pixelData=this.imageData.data;_ref=this.pixelData;for(_i=0,_len=_ref.length;_i<_len;_i++){pixel=_ref[_i];this.originalPixelData.push(pixel);}
this.dimensions={width:this.canvas.width,height:this.canvas.height};Store.put(this.id,this);return this.callback.call(this,this);};Caman.prototype.assignId=function(){if(Caman.NodeJS||this.canvas.getAttribute('data-caman-id')){return;}
return this.canvas.setAttribute('data-caman-id',this.id);};Caman.prototype.hiDPIDisabled=function(){return this.canvas.getAttribute('data-caman-hidpi-disabled')!==null;};Caman.prototype.hiDPIAdjustments=function(){var ratio;if(Caman.NodeJS||this.hiDPIDisabled()){return;}
ratio=this.hiDPIRatio();if(ratio!==1){Log.debug("HiDPI ratio = "+ratio);this.scaled=true;this.originalWidth=this.canvas.width;this.originalHeight=this.canvas.height;this.canvas.width=this.originalWidth*ratio;this.canvas.height=this.originalHeight*ratio;this.canvas.style.width=""+this.originalWidth+"px";this.canvas.style.height=""+this.originalHeight+"px";this.context.scale(ratio,ratio);this.width=this.canvas.width;return this.height=this.canvas.height;}};Caman.prototype.hiDPIRatio=function(){var backingStoreRatio,devicePixelRatio;devicePixelRatio=window.devicePixelRatio||1;backingStoreRatio=this.context.webkitBackingStorePixelRatio||this.context.mozBackingStorePixelRatio||this.context.msBackingStorePixelRatio||this.context.oBackingStorePixelRatio||this.context.backingStorePixelRatio||1;return devicePixelRatio/backingStoreRatio;};Caman.prototype.hiDPICapable=function(){return window.devicePixelRatio!==1;};Caman.prototype.needsHiDPISwap=function(){if(this.hiDPIDisabled()||!this.hiDPICapable()){return false;}
return this.hiDPIReplacement()!==null;};Caman.prototype.hiDPIReplacement=function(){if(this.image==null){return null;}
return this.image.getAttribute('data-caman-hidpi');};Caman.prototype.replaceCanvas=function(newCanvas){var oldCanvas;oldCanvas=this.canvas;this.canvas=newCanvas;oldCanvas.parentNode.replaceChild(this.canvas,oldCanvas);return this.finishInit();};Caman.prototype.render=function(callback){var _this=this;if(callback==null){callback=function(){};}
Event.trigger(this,"renderStart");return this.renderer.execute(function(){_this.context.putImageData(_this.imageData,0,0);return callback.call(_this);});};Caman.prototype.revert=function(ready){var i,pixel,_i,_len,_ref;if(ready==null){ready=function(){};}
_ref=this.originalPixelData;for(i=_i=0,_len=_ref.length;_i<_len;i=++_i){pixel=_ref[i];this.pixelData[i]=pixel;}
this.context.putImageData(this.imageData,0,0);return ready.call(this);};Caman.prototype.process=function(name,processFn){this.renderer.add({type:Filter.Type.Single,name:name,processFn:processFn});return this;};Caman.prototype.processKernel=function(name,adjust,divisor,bias){var i,_i,_ref;if(!divisor){divisor=0;for(i=_i=0,_ref=adjust.length;0<=_ref?_i<_ref:_i>_ref;i=0<=_ref?++_i:--_i){divisor+=adjust[i];}}
this.renderer.add({type:Filter.Type.Kernel,name:name,adjust:adjust,divisor:divisor,bias:bias||0});return this;};Caman.prototype.processPlugin=function(plugin,args){this.renderer.add({type:Filter.Type.Plugin,plugin:plugin,args:args});return this;};Caman.prototype.newLayer=function(callback){var layer;layer=new Layer(this);this.canvasQueue.push(layer);this.renderer.add({type:Filter.Type.LayerDequeue});callback.call(layer);this.renderer.add({type:Filter.Type.LayerFinished});return this;};Caman.prototype.executeLayer=function(layer){return this.pushContext(layer);};Caman.prototype.pushContext=function(layer){this.layerStack.push(this.currentLayer);this.pixelStack.push(this.pixelData);this.currentLayer=layer;return this.pixelData=layer.pixelData;};Caman.prototype.popContext=function(){this.pixelData=this.pixelStack.pop();return this.currentLayer=this.layerStack.pop();};Caman.prototype.applyCurrentLayer=function(){return this.currentLayer.applyToParent();};return Caman;})();Analyze=(function(){function Analyze(c){this.c=c;}
Analyze.prototype.calculateLevels=function(){var i,levels,numPixels,_i,_j,_k,_ref;levels={r:{},g:{},b:{}};for(i=_i=0;_i<=255;i=++_i){levels.r[i]=0;levels.g[i]=0;levels.b[i]=0;}
for(i=_j=0,_ref=this.c.pixelData.length;_j<_ref;i=_j+=4){levels.r[this.c.pixelData[i]]++;levels.g[this.c.pixelData[i+1]]++;levels.b[this.c.pixelData[i+2]]++;}
numPixels=this.c.pixelData.length/4;for(i=_k=0;_k<=255;i=++_k){levels.r[i]/=numPixels;levels.g[i]/=numPixels;levels.b[i]/=numPixels;}
return levels;};return Analyze;})();Caman.DOMUpdated=function(){var img,imgs,parser,_i,_len,_results;imgs=document.querySelectorAll("img[data-caman]");if(!(imgs.length>0)){return;}
_results=[];for(_i=0,_len=imgs.length;_i<_len;_i++){img=imgs[_i];_results.push(parser=new CamanParser(img,function(){this.parse();return this.execute();}));}
return _results;};if(Caman.autoload){(function(){if(document.readyState==="complete"){return Caman.DOMUpdated();}else{return document.addEventListener("DOMContentLoaded",Caman.DOMUpdated,false);}})();}
CamanParser=(function(){var INST_REGEX;INST_REGEX="(\\w+)\\((.*?)\\)";function CamanParser(ele,ready){this.dataStr=ele.getAttribute('data-caman');this.caman=Caman(ele,ready.bind(this));}
CamanParser.prototype.parse=function(){var args,filter,func,inst,instFunc,m,r,unparsedInstructions,_i,_len,_ref,_results;this.ele=this.caman.canvas;r=new RegExp(INST_REGEX,'g');unparsedInstructions=this.dataStr.match(r);if(!(unparsedInstructions.length>0)){return;}
r=new RegExp(INST_REGEX);_results=[];for(_i=0,_len=unparsedInstructions.length;_i<_len;_i++){inst=unparsedInstructions[_i];_ref=inst.match(r),m=_ref[0],filter=_ref[1],args=_ref[2];instFunc=new Function("return function() {        this."+filter+"("+args+");      };");try{func=instFunc();_results.push(func.call(this.caman));}catch(e){_results.push(Log.debug(e));}}
return _results;};CamanParser.prototype.execute=function(){var ele;ele=this.ele;return this.caman.render(function(){return ele.parentNode.replaceChild(this.toImage(),ele);});};return CamanParser;})();Caman.Blender=Blender=(function(){function Blender(){}
Blender.blenders={};Blender.register=function(name,func){return this.blenders[name]=func;};Blender.execute=function(name,rgbaLayer,rgbaParent){return this.blenders[name](rgbaLayer,rgbaParent);};return Blender;})();Caman.Calculate=Calculate=(function(){function Calculate(){}
Calculate.distance=function(x1,y1,x2,y2){return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));};Calculate.randomRange=function(min,max,getFloat){var rand;if(getFloat==null){getFloat=false;}
rand=min+(Math.random()*(max-min));if(getFloat){return rand.toFixed(getFloat);}else{return Math.round(rand);}};Calculate.luminance=function(rgba){return(0.299*rgba.r)+(0.587*rgba.g)+(0.114*rgba.b);};Calculate.bezier=function(start,ctrl1,ctrl2,end,lowBound,highBound){var Ax,Ay,Bx,By,Cx,Cy,bezier,curveX,curveY,i,j,leftCoord,rightCoord,t,x0,x1,x2,x3,y0,y1,y2,y3,_i,_j,_k,_ref,_ref1;x0=start[0];y0=start[1];x1=ctrl1[0];y1=ctrl1[1];x2=ctrl2[0];y2=ctrl2[1];x3=end[0];y3=end[1];bezier={};Cx=parseInt(3*(x1-x0),10);Bx=3*(x2-x1)-Cx;Ax=x3-x0-Cx-Bx;Cy=3*(y1-y0);By=3*(y2-y1)-Cy;Ay=y3-y0-Cy-By;for(i=_i=0;_i<1000;i=++_i){t=i/1000;curveX=Math.round((Ax*Math.pow(t,3))+(Bx*Math.pow(t,2))+(Cx*t)+x0);curveY=Math.round((Ay*Math.pow(t,3))+(By*Math.pow(t,2))+(Cy*t)+y0);if(lowBound&&curveY<lowBound){curveY=lowBound;}else if(highBound&&curveY>highBound){curveY=highBound;}
bezier[curveX]=curveY;}
if(bezier.length<end[0]+1){for(i=_j=0,_ref=end[0];0<=_ref?_j<=_ref:_j>=_ref;i=0<=_ref?++_j:--_j){if(!(bezier[i]!=null)){leftCoord=[i-1,bezier[i-1]];for(j=_k=i,_ref1=end[0];i<=_ref1?_k<=_ref1:_k>=_ref1;j=i<=_ref1?++_k:--_k){if(bezier[j]!=null){rightCoord=[j,bezier[j]];break;}}
bezier[i]=leftCoord[1]+((rightCoord[1]-leftCoord[1])/(rightCoord[0]-leftCoord[0]))*(i-leftCoord[0]);}}}
if(!(bezier[end[0]]!=null)){bezier[end[0]]=bezier[end[0]-1];}
return bezier;};return Calculate;})();Convert=(function(){function Convert(){}
Convert.hexToRGB=function(hex){var b,g,r;if(hex.charAt(0)==="#"){hex=hex.substr(1);}
r=parseInt(hex.substr(0,2),16);g=parseInt(hex.substr(2,2),16);b=parseInt(hex.substr(4,2),16);return{r:r,g:g,b:b};};Convert.rgbToHSL=function(r,g,b){var d,h,l,max,min,s;if(typeof r==="object"){g=r.g;b=r.b;r=r.r;}
r/=255;g/=255;b/=255;max=Math.max(r,g,b);min=Math.min(r,g,b);l=(max+min)/2;if(max===min){h=s=0;}else{d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);h=(function(){switch(max){case r:return(g-b)/d+(g<b?6:0);case g:return(b-r)/d+2;case b:return(r-g)/d+4;}})();h/=6;}
return{h:h,s:s,l:l};};Convert.hslToRGB=function(h,s,l){var b,g,p,q,r;if(typeof h==="object"){s=h.s;l=h.l;h=h.h;}
if(s===0){r=g=b=l;}else{q=l<0.5?l*(1+s):l+s-l*s;p=2*l-q;r=this.hueToRGB(p,q,h+1/3);g=this.hueToRGB(p,q,h);b=this.hueToRGB(p,q,h-1/3);}
return{r:r*255,g:g*255,b:b*255};};Convert.hueToRGB=function(p,q,t){if(t<0){t+=1;}
if(t>1){t-=1;}
if(t<1/6){return p+(q-p)*6*t;}
if(t<1/2){return q;}
if(t<2/3){return p+(q-p)*(2/3-t)*6;}
return p;};Convert.rgbToHSV=function(r,g,b){var d,h,max,min,s,v;r/=255;g/=255;b/=255;max=Math.max(r,g,b);min=Math.min(r,g,b);v=max;d=max-min;s=max===0?0:d/max;if(max===min){h=0;}else{h=(function(){switch(max){case r:return(g-b)/d+(g<b?6:0);case g:return(b-r)/d+2;case b:return(r-g)/d+4;}})();h/=6;}
return{h:h,s:s,v:v};};Convert.hsvToRGB=function(h,s,v){var b,f,g,i,p,q,r,t;i=Math.floor(h*6);f=h*6-i;p=v*(1-s);q=v*(1-f*s);t=v*(1-(1-f)*s);switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;}
return{r:r*255,g:g*255,b:b*255};};Convert.rgbToXYZ=function(r,g,b){var x,y,z;r/=255;g/=255;b/=255;if(r>0.04045){r=Math.pow((r+0.055)/1.055,2.4);}else{r/=12.92;}
if(g>0.04045){g=Math.pow((g+0.055)/1.055,2.4);}else{g/=12.92;}
if(b>0.04045){b=Math.pow((b+0.055)/1.055,2.4);}else{b/=12.92;}
x=r*0.4124+g*0.3576+b*0.1805;y=r*0.2126+g*0.7152+b*0.0722;z=r*0.0193+g*0.1192+b*0.9505;return{x:x*100,y:y*100,z:z*100};};Convert.xyzToRGB=function(x,y,z){var b,g,r;x/=100;y/=100;z/=100;r=(3.2406*x)+(-1.5372*y)+(-0.4986*z);g=(-0.9689*x)+(1.8758*y)+(0.0415*z);b=(0.0557*x)+(-0.2040*y)+(1.0570*z);if(r>0.0031308){r=(1.055*Math.pow(r,0.4166666667))-0.055;}else{r*=12.92;}
if(g>0.0031308){g=(1.055*Math.pow(g,0.4166666667))-0.055;}else{g*=12.92;}
if(b>0.0031308){b=(1.055*Math.pow(b,0.4166666667))-0.055;}else{b*=12.92;}
return{r:r*255,g:g*255,b:b*255};};Convert.xyzToLab=function(x,y,z){var a,b,l,whiteX,whiteY,whiteZ;if(typeof x==="object"){y=x.y;z=x.z;x=x.x;}
whiteX=95.047;whiteY=100.0;whiteZ=108.883;x/=whiteX;y/=whiteY;z/=whiteZ;if(x>0.008856451679){x=Math.pow(x,0.3333333333);}else{x=(7.787037037*x)+0.1379310345;}
if(y>0.008856451679){y=Math.pow(y,0.3333333333);}else{y=(7.787037037*y)+0.1379310345;}
if(z>0.008856451679){z=Math.pow(z,0.3333333333);}else{z=(7.787037037*z)+0.1379310345;}
l=116*y-16;a=500*(x-y);b=200*(y-z);return{l:l,a:a,b:b};};Convert.labToXYZ=function(l,a,b){var x,y,z;if(typeof l==="object"){a=l.a;b=l.b;l=l.l;}
y=(l+16)/116;x=y+(a/500);z=y-(b/200);if(x>0.2068965517){x=x*x*x;}else{x=0.1284185493*(x-0.1379310345);}
if(y>0.2068965517){y=y*y*y;}else{y=0.1284185493*(y-0.1379310345);}
if(z>0.2068965517){z=z*z*z;}else{z=0.1284185493*(z-0.1379310345);}
return{x:x*95.047,y:y*100.0,z:z*108.883};};Convert.rgbToLab=function(r,g,b){var xyz;if(typeof r==="object"){g=r.g;b=r.b;r=r.r;}
xyz=this.rgbToXYZ(r,g,b);return this.xyzToLab(xyz);};Convert.labToRGB=function(l,a,b){};return Convert;})();Event=(function(){function Event(){}
Event.events={};Event.types=["processStart","processComplete","renderStart","renderFinished","blockStarted","blockFinished"];Event.trigger=function(target,type,data){var event,_i,_len,_ref,_results;if(this.events[type]&&this.events[type].length){_ref=this.events[type];_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){event=_ref[_i];if(event.target===null||target.id===event.target.id){_results.push(event.fn.call(target,data));}else{_results.push(void 0);}}
return _results;}};Event.listen=function(target,type,fn){var _fn,_type;if(typeof target==="string"){_type=target;_fn=type;target=null;type=_type;fn=_fn;}
if(__indexOf.call(this.types,type)<0){return false;}
if(!this.events[type]){this.events[type]=[];}
this.events[type].push({target:target,fn:fn});return true;};return Event;})();Caman.Event=Event;Caman.Filter=Filter=(function(){function Filter(){}
Filter.Type={Single:1,Kernel:2,LayerDequeue:3,LayerFinished:4,LoadOverlay:5,Plugin:6};Filter.register=function(name,filterFunc){return Caman.prototype[name]=filterFunc;};return Filter;})();Caman.IO=IO=(function(){function IO(){}
IO.domainRegex=/(?:(?:http|https):\/\/)((?:\w+)\.(?:(?:\w|\.)+))/;IO.isRemote=function(img){var matches;if(img==null){return false;}
if(this.corsEnabled(img)){return false;}
matches=img.src.match(this.domainRegex);if(matches){return matches[1]!==document.domain;}else{return false;}};IO.corsEnabled=function(img){var _ref;return(img.crossOrigin!=null)&&((_ref=img.crossOrigin.toLowerCase())==='anonymous'||_ref==='use-credentials');};IO.proxyUrl=function(src){return""+Caman.remoteProxy+"?"+Caman.proxyParam+"="+(encodeURIComponent(src));};IO.useProxy=function(lang){var langToExt;langToExt={ruby:'rb',python:'py',perl:'pl',javascript:'js'};lang=lang.toLowerCase();if(langToExt[lang]!=null){lang=langToExt[lang];}
return"proxies/caman_proxy."+lang;};return IO;})();Caman.prototype.save=function(){if(typeof exports!=="undefined"&&exports!==null){return this.nodeSave.apply(this,arguments);}else{return this.browserSave.apply(this,arguments);}};Caman.prototype.browserSave=function(type){var image;if(type==null){type="png";}
type=type.toLowerCase();image=this.toBase64(type).replace("image/"+type,"image/octet-stream");return document.location.href=image;};Caman.prototype.nodeSave=function(file,overwrite){var stats;if(overwrite==null){overwrite=true;}
try{stats=fs.statSync(file);if(stats.isFile()&&!overwrite){return false;}}catch(e){Log.debug("Creating output file "+file);}
return fs.writeFile(file,this.canvas.toBuffer(),function(){return Log.debug("Finished writing to "+file);});};Caman.prototype.toImage=function(type){var img;img=document.createElement('img');img.src=this.toBase64(type);img.width=this.dimensions.width;img.height=this.dimensions.height;if(window.devicePixelRatio){img.width/=window.devicePixelRatio;img.height/=window.devicePixelRatio;}
return img;};Caman.prototype.toBase64=function(type){if(type==null){type="png";}
type=type.toLowerCase();return this.canvas.toDataURL("image/"+type);};Layer=(function(){function Layer(c){this.c=c;this.filter=this.c;this.options={blendingMode:'normal',opacity:1.0};this.layerID=Util.uniqid.get();this.canvas=typeof exports!=="undefined"&&exports!==null?new Canvas():document.createElement('canvas');this.canvas.width=this.c.dimensions.width;this.canvas.height=this.c.dimensions.height;this.context=this.canvas.getContext('2d');this.context.createImageData(this.canvas.width,this.canvas.height);this.imageData=this.context.getImageData(0,0,this.canvas.width,this.canvas.height);this.pixelData=this.imageData.data;}
Layer.prototype.newLayer=function(cb){return this.c.newLayer.call(this.c,cb);};Layer.prototype.setBlendingMode=function(mode){this.options.blendingMode=mode;return this;};Layer.prototype.opacity=function(opacity){this.options.opacity=opacity/100;return this;};Layer.prototype.copyParent=function(){var i,parentData,_i,_ref;parentData=this.c.pixelData;for(i=_i=0,_ref=this.c.pixelData.length;_i<_ref;i=_i+=4){this.pixelData[i]=parentData[i];this.pixelData[i+1]=parentData[i+1];this.pixelData[i+2]=parentData[i+2];this.pixelData[i+3]=parentData[i+3];}
return this;};Layer.prototype.fillColor=function(){return this.c.fillColor.apply(this.c,arguments);};Layer.prototype.overlayImage=function(image){if(typeof image==="object"){image=image.src;}else if(typeof image==="string"&&image[0]==="#"){image=$(image).src;}
if(!image){return this;}
this.c.renderQueue.push({type:Filter.Type.LoadOverlay,src:image,layer:this});return this;};Layer.prototype.applyToParent=function(){var i,layerData,parentData,result,rgbaLayer,rgbaParent,_i,_ref,_results;parentData=this.c.pixelStack[this.c.pixelStack.length-1];layerData=this.c.pixelData;_results=[];for(i=_i=0,_ref=layerData.length;_i<_ref;i=_i+=4){rgbaParent={r:parentData[i],g:parentData[i+1],b:parentData[i+2],a:parentData[i+3]};rgbaLayer={r:layerData[i],g:layerData[i+1],b:layerData[i+2],a:layerData[i+3]};result=Blender.execute(this.options.blendingMode,rgbaLayer,rgbaParent);result.r=Util.clampRGB(result.r);result.g=Util.clampRGB(result.g);result.b=Util.clampRGB(result.b);if(!(result.a!=null)){result.a=rgbaLayer.a;}
parentData[i]=rgbaParent.r-((rgbaParent.r-result.r)*(this.options.opacity*(result.a/255)));parentData[i+1]=rgbaParent.g-((rgbaParent.g-result.g)*(this.options.opacity*(result.a/255)));_results.push(parentData[i+2]=rgbaParent.b-((rgbaParent.b-result.b)*(this.options.opacity*(result.a/255))));}
return _results;};return Layer;})();Logger=(function(){function Logger(){var name,_i,_len,_ref;_ref=['log','info','warn','error'];for(_i=0,_len=_ref.length;_i<_len;_i++){name=_ref[_i];this[name]=(function(name){return function(){if(!Caman.DEBUG){return;}
return console[name].apply(console,arguments);};})(name);}
this.debug=this.log;}
return Logger;})();Log=new Logger();PixelInfo=(function(){function PixelInfo(c){this.c=c;this.loc=0;}
PixelInfo.prototype.locationXY=function(){var x,y;y=this.c.dimensions.height-Math.floor(this.loc/(this.c.dimensions.width*4));x=(this.loc%(this.c.dimensions.width*4))/4;return{x:x,y:y};};PixelInfo.prototype.getPixelRelative=function(horiz,vert){var newLoc;newLoc=this.loc+(this.c.dimensions.width*4*(vert*-1))+(4*horiz);if(newLoc>this.c.pixelData.length||newLoc<0){return{r:0,g:0,b:0,a:0};}
return{r:this.c.pixelData[newLoc],g:this.c.pixelData[newLoc+1],b:this.c.pixelData[newLoc+2],a:this.c.pixelData[newLoc+3]};};PixelInfo.prototype.putPixelRelative=function(horiz,vert,rgba){var nowLoc;nowLoc=this.loc+(this.c.dimensions.width*4*(vert*-1))+(4*horiz);if(newLoc>this.c.pixelData.length||newLoc<0){return;}
this.c.pixelData[newLoc]=rgba.r;this.c.pixelData[newLoc+1]=rgba.g;this.c.pixelData[newLoc+2]=rgba.b;this.c.pixelData[newLoc+3]=rgba.a;return true;};PixelInfo.prototype.getPixel=function(x,y){var loc;loc=(y*this.c.dimensions.width+x)*4;return{r:this.c.pixelData[loc],g:this.c.pixelData[loc+1],b:this.c.pixelData[loc+2],a:this.c.pixelData[loc+3]};};PixelInfo.prototype.putPixel=function(x,y,rgba){var loc;loc=(y*this.c.dimensions.width+x)*4;this.c.pixelData[loc]=rgba.r;this.c.pixelData[loc+1]=rgba.g;this.c.pixelData[loc+2]=rgba.b;return this.c.pixelData[loc+3]=rgba.a;};return PixelInfo;})();Plugin=(function(){function Plugin(){}
Plugin.plugins={};Plugin.register=function(name,plugin){return this.plugins[name]=plugin;};Plugin.execute=function(context,name,args){return this.plugins[name].apply(context,args);};return Plugin;})();Caman.Plugin=Plugin;Caman.Renderer=Renderer=(function(){Renderer.Blocks=Caman.NodeJS?require('os').cpus().length:4;function Renderer(c){this.c=c;this.processNext=__bind(this.processNext,this);this.renderQueue=[];this.modPixelData=null;}
Renderer.prototype.add=function(job){if(job==null){return;}
return this.renderQueue.push(job);};Renderer.prototype.processNext=function(){var layer;if(this.renderQueue.length===0){Event.trigger(this,"renderFinished");if(this.finishedFn!=null){this.finishedFn.call(this.c);}
return this;}
this.currentJob=this.renderQueue.shift();switch(this.currentJob.type){case Filter.Type.LayerDequeue:layer=this.c.canvasQueue.shift();this.c.executeLayer(layer);return this.processNext();case Filter.Type.LayerFinished:this.c.applyCurrentLayer();this.c.popContext();return this.processNext();case Filter.Type.LoadOverlay:return this.loadOverlay(this.currentJob.layer,this.currentJob.src);case Filter.Type.Plugin:return this.executePlugin();default:return this.executeFilter();}};Renderer.prototype.execute=function(callback){this.finishedFn=callback;this.modPixelData=new Uint8Array(this.c.pixelData.length);return this.processNext();};Renderer.prototype.eachBlock=function(fn){var blockN,blockPixelLength,end,f,i,lastBlockN,n,start,_i,_ref,_results,_this=this;this.blocksDone=0;n=this.c.pixelData.length;blockPixelLength=Math.floor((n/4)/Renderer.Blocks);blockN=blockPixelLength*4;lastBlockN=blockN+((n/4)%Renderer.Blocks)*4;_results=[];for(i=_i=0,_ref=Renderer.Blocks;0<=_ref?_i<_ref:_i>_ref;i=0<=_ref?++_i:--_i){start=i*blockN;end=start+(i===Renderer.Blocks-1?lastBlockN:blockN);if(Caman.NodeJS){f=Fiber(function(){return fn.call(_this,i,start,end);});_results.push(f.run());}else{_results.push(setTimeout((function(i,start,end){return function(){return fn.call(_this,i,start,end);};})(i,start,end),0));}}
return _results;};Renderer.prototype.executeFilter=function(){Event.trigger(this.c,"processStart",this.currentJob);if(this.currentJob.type===Filter.Type.Single){return this.eachBlock(this.renderBlock);}else{return this.eachBlock(this.renderKernel);}};Renderer.prototype.executePlugin=function(){Log.debug("Executing plugin "+this.currentJob.plugin);Plugin.execute(this.c,this.currentJob.plugin,this.currentJob.args);Log.debug("Plugin "+this.currentJob.plugin+" finished!");return this.processNext();};Renderer.prototype.renderBlock=function(bnum,start,end){var data,i,pixelInfo,res,_i;Log.debug("Block #"+bnum+" - Filter: "+this.currentJob.name+", Start: "+start+", End: "+end);Event.trigger(this.c,"blockStarted",{blockNum:bnum,totalBlocks:Renderer.Blocks,startPixel:start,endPixel:end});data={r:0,g:0,b:0,a:0};pixelInfo=new PixelInfo(this.c);for(i=_i=start;_i<end;i=_i+=4){pixelInfo.loc=i;data.r=this.c.pixelData[i];data.g=this.c.pixelData[i+1];data.b=this.c.pixelData[i+2];data.a=this.c.pixelData[i+3];res=this.currentJob.processFn.call(pixelInfo,data);if(!(res.a!=null)){res.a=data.a;}
this.c.pixelData[i]=Util.clampRGB(res.r);this.c.pixelData[i+1]=Util.clampRGB(res.g);this.c.pixelData[i+2]=Util.clampRGB(res.b);this.c.pixelData[i+3]=Util.clampRGB(res.a);}
this.blockFinished(bnum);if(Caman.NodeJS){return Fiber["yield"]();}};Renderer.prototype.renderKernel=function(bnum,start,end){var adjust,adjustSize,bias,builder,builderIndex,divisor,i,j,k,kernel,n,name,pixel,pixelInfo,res,_i,_j,_k;name=this.currentJob.name;bias=this.currentJob.bias;divisor=this.currentJob.divisor;n=this.c.pixelData.length;adjust=this.currentJob.adjust;adjustSize=Math.sqrt(adjust.length);kernel=[];Log.debug("Rendering kernel - Filter: "+this.currentJob.name);start=Math.max(start,this.c.dimensions.width*4*((adjustSize-1)/2));end=Math.min(end,n-(this.c.dimensions.width*4*((adjustSize-1)/2)));builder=(adjustSize-1)/2;pixelInfo=new PixelInfo(this.c);for(i=_i=start;_i<end;i=_i+=4){pixelInfo.loc=i;builderIndex=0;for(j=_j=-builder;-builder<=builder?_j<=builder:_j>=builder;j=-builder<=builder?++_j:--_j){for(k=_k=builder;builder<=-builder?_k<=-builder:_k>=-builder;k=builder<=-builder?++_k:--_k){pixel=pixelInfo.getPixelRelative(j,k);kernel[builderIndex*3]=pixel.r;kernel[builderIndex*3+1]=pixel.g;kernel[builderIndex*3+2]=pixel.b;builderIndex++;}}
res=this.processKernel(adjust,kernel,divisor,bias);this.modPixelData[i]=Util.clampRGB(res.r);this.modPixelData[i+1]=Util.clampRGB(res.g);this.modPixelData[i+2]=Util.clampRGB(res.b);this.modPixelData[i+3]=this.c.pixelData[i+3];}
this.blockFinished(bnum);if(Caman.NodeJS){return Fiber["yield"]();}};Renderer.prototype.blockFinished=function(bnum){var i,_i,_ref;if(bnum>=0){Log.debug("Block #"+bnum+" finished! Filter: "+this.currentJob.name);}
this.blocksDone++;Event.trigger(this.c,"blockFinished",{blockNum:bnum,blocksFinished:this.blocksDone,totalBlocks:Renderer.Blocks});if(this.blocksDone===Renderer.Blocks){if(this.currentJob.type===Filter.Type.Kernel){for(i=_i=0,_ref=this.c.pixelData.length;0<=_ref?_i<_ref:_i>_ref;i=0<=_ref?++_i:--_i){this.c.pixelData[i]=this.modPixelData[i];}}
if(bnum>=0){Log.debug("Filter "+this.currentJob.name+" finished!");}
Event.trigger(this.c,"processComplete",this.currentJob);return this.processNext();}};Renderer.prototype.processKernel=function(adjust,kernel,divisor,bias){var i,val,_i,_ref;val={r:0,g:0,b:0};for(i=_i=0,_ref=adjust.length;0<=_ref?_i<_ref:_i>_ref;i=0<=_ref?++_i:--_i){val.r+=adjust[i]*kernel[i*3];val.g+=adjust[i]*kernel[i*3+1];val.b+=adjust[i]*kernel[i*3+2];}
val.r=(val.r/divisor)+bias;val.g=(val.g/divisor)+bias;val.b=(val.b/divisor)+bias;return val;};Renderer.prototype.loadOverlay=function(layer,src){var img,proxyUrl,_this=this;img=document.createElement('img');img.onload=function(){layer.context.drawImage(img,0,0,_this.c.dimensions.width,_this.c.dimensions.height);layer.imageData=layer.context.getImageData(0,0,_this.c.dimensions.width,_this.c.dimensions.height);layer.pixelData=layer.imageData.data;_this.c.pixelData=layer.pixelData;return _this.processNext();};proxyUrl=IO.remoteCheck(src);return img.src=proxyUrl!=null?proxyUrl:src;};return Renderer;})();Caman.Store=Store=(function(){function Store(){}
Store.items={};Store.has=function(search){return this.items[search]!=null;};Store.get=function(search){return this.items[search];};Store.put=function(name,obj){return this.items[name]=obj;};Store.execute=function(search,callback){var _this=this;setTimeout(function(){return callback.call(_this.get(search),_this.get(search));},0);return this.get(search);};Store.flush=function(name){if(name==null){name=false;}
if(name){return delete this.items[name];}else{return this.items={};}};return Store;})();Blender.register("normal",function(rgbaLayer,rgbaParent){return{r:rgbaLayer.r,g:rgbaLayer.g,b:rgbaLayer.b};});Blender.register("multiply",function(rgbaLayer,rgbaParent){return{r:(rgbaLayer.r*rgbaParent.r)/255,g:(rgbaLayer.g*rgbaParent.g)/255,b:(rgbaLayer.b*rgbaParent.b)/255};});Blender.register("screen",function(rgbaLayer,rgbaParent){return{r:255-(((255-rgbaLayer.r)*(255-rgbaParent.r))/255),g:255-(((255-rgbaLayer.g)*(255-rgbaParent.g))/255),b:255-(((255-rgbaLayer.b)*(255-rgbaParent.b))/255)};});Blender.register("overlay",function(rgbaLayer,rgbaParent){var result;result={};result.r=rgbaParent.r>128?255-2*(255-rgbaLayer.r)*(255-rgbaParent.r)/255:(rgbaParent.r*rgbaLayer.r*2)/255;result.g=rgbaParent.g>128?255-2*(255-rgbaLayer.g)*(255-rgbaParent.g)/255:(rgbaParent.g*rgbaLayer.g*2)/255;result.b=rgbaParent.b>128?255-2*(255-rgbaLayer.b)*(255-rgbaParent.b)/255:(rgbaParent.b*rgbaLayer.b*2)/255;return result;});Blender.register("difference",function(rgbaLayer,rgbaParent){return{r:rgbaLayer.r-rgbaParent.r,g:rgbaLayer.g-rgbaParent.g,b:rgbaLayer.b-rgbaParent.b};});Blender.register("addition",function(rgbaLayer,rgbaParent){return{r:rgbaParent.r+rgbaLayer.r,g:rgbaParent.g+rgbaLayer.g,b:rgbaParent.b+rgbaLayer.b};});Blender.register("exclusion",function(rgbaLayer,rgbaParent){return{r:128-2*(rgbaParent.r-128)*(rgbaLayer.r-128)/255,g:128-2*(rgbaParent.g-128)*(rgbaLayer.g-128)/255,b:128-2*(rgbaParent.b-128)*(rgbaLayer.b-128)/255};});Blender.register("softLight",function(rgbaLayer,rgbaParent){var result;result={};result.r=rgbaParent.r>128?255-((255-rgbaParent.r)*(255-(rgbaLayer.r-128)))/255:(rgbaParent.r*(rgbaLayer.r+128))/255;result.g=rgbaParent.g>128?255-((255-rgbaParent.g)*(255-(rgbaLayer.g-128)))/255:(rgbaParent.g*(rgbaLayer.g+128))/255;result.b=rgbaParent.b>128?255-((255-rgbaParent.b)*(255-(rgbaLayer.b-128)))/255:(rgbaParent.b*(rgbaLayer.b+128))/255;return result;});Blender.register("lighten",function(rgbaLayer,rgbaParent){return{r:rgbaParent.r>rgbaLayer.r?rgbaParent.r:rgbaLayer.r,g:rgbaParent.g>rgbaLayer.g?rgbaParent.g:rgbaLayer.g,b:rgbaParent.b>rgbaLayer.b?rgbaParent.b:rgbaLayer.b};});Blender.register("darken",function(rgbaLayer,rgbaParent){return{r:rgbaParent.r>rgbaLayer.r?rgbaLayer.r:rgbaParent.r,g:rgbaParent.g>rgbaLayer.g?rgbaLayer.g:rgbaParent.g,b:rgbaParent.b>rgbaLayer.b?rgbaLayer.b:rgbaParent.b};});Filter.register("fillColor",function(){var color;if(arguments.length===1){color=Convert.hexToRGB(arguments[0]);}else{color={r:arguments[0],g:arguments[1],b:arguments[2]};}
return this.process("fillColor",function(rgba){rgba.r=color.r;rgba.g=color.g;rgba.b=color.b;rgba.a=255;return rgba;});});Filter.register("brightness",function(adjust){adjust=Math.floor(255*(adjust/100));return this.process("brightness",function(rgba){rgba.r+=adjust;rgba.g+=adjust;rgba.b+=adjust;return rgba;});});Filter.register("saturation",function(adjust){adjust*=-0.01;return this.process("saturation",function(rgba){var max;max=Math.max(rgba.r,rgba.g,rgba.b);if(rgba.r!==max){rgba.r+=(max-rgba.r)*adjust;}
if(rgba.g!==max){rgba.g+=(max-rgba.g)*adjust;}
if(rgba.b!==max){rgba.b+=(max-rgba.b)*adjust;}
return rgba;});});Filter.register("vibrance",function(adjust){adjust*=-1;return this.process("vibrance",function(rgba){var amt,avg,max;max=Math.max(rgba.r,rgba.g,rgba.b);avg=(rgba.r+rgba.g+rgba.b)/3;amt=((Math.abs(max-avg)*2/255)*adjust)/100;if(rgba.r!==max){rgba.r+=(max-rgba.r)*amt;}
if(rgba.g!==max){rgba.g+=(max-rgba.g)*amt;}
if(rgba.b!==max){rgba.b+=(max-rgba.b)*amt;}
return rgba;});});Filter.register("greyscale",function(adjust){return this.process("greyscale",function(rgba){var avg;avg=Calculate.luminance(rgba);rgba.r=avg;rgba.g=avg;rgba.b=avg;return rgba;});});Filter.register("contrast",function(adjust){adjust=Math.pow((adjust+100)/100,2);return this.process("contrast",function(rgba){rgba.r/=255;rgba.r-=0.5;rgba.r*=adjust;rgba.r+=0.5;rgba.r*=255;rgba.g/=255;rgba.g-=0.5;rgba.g*=adjust;rgba.g+=0.5;rgba.g*=255;rgba.b/=255;rgba.b-=0.5;rgba.b*=adjust;rgba.b+=0.5;rgba.b*=255;return rgba;});});Filter.register("hue",function(adjust){return this.process("hue",function(rgba){var h,hsv,rgb;hsv=Convert.rgbToHSV(rgba.r,rgba.g,rgba.b);h=hsv.h*100;h+=Math.abs(adjust);h=h%100;h/=100;hsv.h=h;rgb=Convert.hsvToRGB(hsv.h,hsv.s,hsv.v);rgb.a=rgba.a;return rgb;});});Filter.register("colorize",function(){var level,rgb;if(arguments.length===2){rgb=Convert.hexToRGB(arguments[0]);level=arguments[1];}else if(arguments.length===4){rgb={r:arguments[0],g:arguments[1],b:arguments[2]};level=arguments[3];}
return this.process("colorize",function(rgba){rgba.r-=(rgba.r-rgb.r)*(level/100);rgba.g-=(rgba.g-rgb.g)*(level/100);rgba.b-=(rgba.b-rgb.b)*(level/100);return rgba;});});Filter.register("invert",function(){return this.process("invert",function(rgba){rgba.r=255-rgba.r;rgba.g=255-rgba.g;rgba.b=255-rgba.b;return rgba;});});Filter.register("sepia",function(adjust){if(adjust==null){adjust=100;}
adjust/=100;return this.process("sepia",function(rgba){rgba.r=Math.min(255,(rgba.r*(1-(0.607*adjust)))+(rgba.g*(0.769*adjust))+(rgba.b*(0.189*adjust)));rgba.g=Math.min(255,(rgba.r*(0.349*adjust))+(rgba.g*(1-(0.314*adjust)))+(rgba.b*(0.168*adjust)));rgba.b=Math.min(255,(rgba.r*(0.272*adjust))+(rgba.g*(0.534*adjust))+(rgba.b*(1-(0.869*adjust))));return rgba;});});Filter.register("gamma",function(adjust){return this.process("gamma",function(rgba){rgba.r=Math.pow(rgba.r/255,adjust)*255;rgba.g=Math.pow(rgba.g/255,adjust)*255;rgba.b=Math.pow(rgba.b/255,adjust)*255;return rgba;});});Filter.register("noise",function(adjust){adjust=Math.abs(adjust)*2.55;return this.process("noise",function(rgba){var rand;rand=Calculate.randomRange(adjust*-1,adjust);rgba.r+=rand;rgba.g+=rand;rgba.b+=rand;return rgba;});});Filter.register("clip",function(adjust){adjust=Math.abs(adjust)*2.55;return this.process("clip",function(rgba){if(rgba.r>255-adjust){rgba.r=255;}else if(rgba.r<adjust){rgba.r=0;}
if(rgba.g>255-adjust){rgba.g=255;}else if(rgba.g<adjust){rgba.g=0;}
if(rgba.b>255-adjust){rgba.b=255;}else if(rgba.b<adjust){rgba.b=0;}
return rgba;});});Filter.register("channels",function(options){var chan,value;if(typeof options!=="object"){return this;}
for(chan in options){if(!__hasProp.call(options,chan))continue;value=options[chan];if(value===0){delete options[chan];continue;}
options[chan]/=100;}
if(options.length===0){return this;}
return this.process("channels",function(rgba){if(options.red!=null){if(options.red>0){rgba.r+=(255-rgba.r)*options.red;}else{rgba.r-=rgba.r*Math.abs(options.red);}}
if(options.green!=null){if(options.green>0){rgba.g+=(255-rgba.g)*options.green;}else{rgba.g-=rgba.g*Math.abs(options.green);}}
if(options.blue!=null){if(options.blue>0){rgba.b+=(255-rgba.b)*options.blue;}else{rgba.b-=rgba.b*Math.abs(options.blue);}}
return rgba;});});Filter.register("curves",function(){var bezier,chans,cps,ctrl1,ctrl2,end,i,start,_i,_j,_ref,_ref1;chans=arguments[0],cps=2<=arguments.length?__slice.call(arguments,1):[];if(typeof chans==="string"){chans=chans.split("");}
if(chans[0]==="v"){chans=['r','g','b'];}
if(cps.length<3||cps.length>4){throw"Invalid number of arguments to curves filter";}
start=cps[0];ctrl1=cps[1];ctrl2=cps.length===4?cps[2]:cps[1];end=cps[cps.length-1];bezier=Calculate.bezier(start,ctrl1,ctrl2,end,0,255);if(start[0]>0){for(i=_i=0,_ref=start[0];0<=_ref?_i<_ref:_i>_ref;i=0<=_ref?++_i:--_i){bezier[i]=start[1];}}
if(end[0]<255){for(i=_j=_ref1=end[0];_ref1<=255?_j<=255:_j>=255;i=_ref1<=255?++_j:--_j){bezier[i]=end[1];}}
return this.process("curves",function(rgba){var _k,_ref2;for(i=_k=0,_ref2=chans.length;0<=_ref2?_k<_ref2:_k>_ref2;i=0<=_ref2?++_k:--_k){rgba[chans[i]]=bezier[rgba[chans[i]]];}
return rgba;});});Filter.register("exposure",function(adjust){var ctrl1,ctrl2,p;p=Math.abs(adjust)/100;ctrl1=[0,255*p];ctrl2=[255-(255*p),255];if(adjust<0){ctrl1=ctrl1.reverse();ctrl2=ctrl2.reverse();}
return this.curves('rgb',[0,0],ctrl1,ctrl2,[255,255]);});Caman.Filter.register("boxBlur",function(){return this.processKernel("Box Blur",[1,1,1,1,1,1,1,1,1]);});Caman.Filter.register("heavyRadialBlur",function(){return this.processKernel("Heavy Radial Blur",[0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0]);});Caman.Filter.register("gaussianBlur",function(){return this.processKernel("Gaussian Blur",[1,4,6,4,1,4,16,24,16,4,6,24,36,24,6,4,16,24,16,4,1,4,6,4,1]);});Caman.Filter.register("motionBlur",function(degrees){var kernel;if(degrees===0||degrees===180){kernel=[0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0];}else if((degrees>0&&degrees<90)||(degrees>180&&degrees<270)){kernel=[0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0];}else if(degrees===90||degrees===270){kernel=[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0];}else{kernel=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1];}
return this.processKernel("Motion Blur",kernel);});Caman.Filter.register("sharpen",function(amt){if(amt==null){amt=100;}
amt/=100;return this.processKernel("Sharpen",[0,-amt,0,-amt,4*amt+1,-amt,0,-amt,0]);});vignetteFilters={brightness:function(rgba,amt,opts){rgba.r=rgba.r-(rgba.r*amt*opts.strength);rgba.g=rgba.g-(rgba.g*amt*opts.strength);rgba.b=rgba.b-(rgba.b*amt*opts.strength);return rgba;},gamma:function(rgba,amt,opts){rgba.r=Math.pow(rgba.r/255,Math.max(10*amt*opts.strength,1))*255;rgba.g=Math.pow(rgba.g/255,Math.max(10*amt*opts.strength,1))*255;rgba.b=Math.pow(rgba.b/255,Math.max(10*amt*opts.strength,1))*255;return rgba;},colorize:function(rgba,amt,opts){rgba.r-=(rgba.r-opts.color.r)*amt;rgba.g-=(rgba.g-opts.color.g)*amt;rgba.b-=(rgba.b-opts.color.b)*amt;return rgba;}};Filter.register("vignette",function(size,strength){var bezier,center,end,start;if(strength==null){strength=60;}
if(typeof size==="string"&&size.substr(-1)==="%"){if(this.dimensions.height>this.dimensions.width){size=this.dimensions.width*(parseInt(size.substr(0,size.length-1),10)/100);}else{size=this.dimensions.height*(parseInt(size.substr(0,size.length-1),10)/100);}}
strength/=100;center=[this.dimensions.width/2,this.dimensions.height/2];start=Math.sqrt(Math.pow(center[0],2)+Math.pow(center[1],2));end=start-size;bezier=Calculate.bezier([0,1],[30,30],[70,60],[100,80]);return this.process("vignette",function(rgba){var dist,div,loc;loc=this.locationXY();dist=Calculate.distance(loc.x,loc.y,center[0],center[1]);if(dist>end){div=Math.max(1,(bezier[Math.round(((dist-end)/size)*100)]/10)*strength);rgba.r=Math.pow(rgba.r/255,div)*255;rgba.g=Math.pow(rgba.g/255,div)*255;rgba.b=Math.pow(rgba.b/255,div)*255;}
return rgba;});});Filter.register("rectangularVignette",function(opts){var defaults,dim,percent,size,_i,_len,_ref;defaults={strength:50,cornerRadius:0,method:'brightness',color:{r:0,g:0,b:0}};opts=Util.extend(defaults,opts);if(!opts.size){return this;}else if(typeof opts.size==="string"){percent=parseInt(opts.size,10)/100;opts.size={width:this.dimensions.width*percent,height:this.dimensions.height*percent};}else if(typeof opts.size==="object"){_ref=["width","height"];for(_i=0,_len=_ref.length;_i<_len;_i++){dim=_ref[_i];if(typeof opts.size[dim]==="string"){opts.size[dim]=this.dimensions[dim]*(parseInt(opts.size[dim],10)/100);}}}else if(opts.size==="number"){size=opts.size;opts.size={width:size,height:size};}
if(typeof opts.cornerRadius==="string"){opts.cornerRadius=(opts.size.width/2)*(parseInt(opts.cornerRadius,10)/100);}
opts.strength/=100;opts.size.width=Math.floor(opts.size.width);opts.size.height=Math.floor(opts.size.height);opts.image={width:this.dimensions.width,height:this.dimensions.height};if(opts.method==="colorize"&&typeof opts.color==="string"){opts.color=Convert.hexToRGB(opts.color);}
opts.coords={left:(this.dimensions.width-opts.size.width)/2,right:this.dimensions.width-opts.coords.left,bottom:(this.dimensions.height-opts.size.height)/2,top:this.dimensions.height-opts.coords.bottom};opts.corners=[{x:opts.coords.left+opts.cornerRadius,y:opts.coords.top-opts.cornerRadius},{x:opts.coords.right-opts.cornerRadius,y:opts.coords.top-opts.cornerRadius},{x:opts.coords.right-opts.cornerRadius,y:opts.coords.bottom+opts.cornerRadius},{x:opts.coords.left+opts.cornerRadius,y:opts.coords.bottom+opts.cornerRadius}];opts.maxDist=Calculate.distance(0,0,opts.corners[3].x,opts.corners[3].y)-opts.cornerRadius;return this.process("rectangularVignette",function(rgba){var amt,loc,radialDist;loc=this.locationXY();if((loc.x>opts.corners[0].x&&loc.x<opts.corners[1].x)&&(loc.y>opts.coords.bottom&&loc.y<opts.coords.top)){return rgba;}
if((loc.x>opts.coords.left&&loc.x<opts.coords.right)&&(loc.y>opts.corners[3].y&&loc.y<opts.corners[2].y)){return rgba;}
if(loc.x>opts.corners[0].x&&loc.x<opts.corners[1].x&&loc.y>opts.coords.top){amt=(loc.y-opts.coords.top)/opts.maxDist;}else if(loc.y>opts.corners[2].y&&loc.y<opts.corners[1].y&&loc.x>opts.coords.right){amt=(loc.x-opts.coords.right)/opts.maxDist;}else if(loc.x>opts.corners[0].x&&loc.x<opts.corners[1].x&&loc.y<opts.coords.bottom){amt=(opts.coords.bottom-loc.y)/opts.maxDist;}else if(loc.y>opts.corners[2].y&&loc.y<opts.corners[1].y&&loc.x<opts.coords.left){amt=(opts.coords.left-loc.x)/opts.maxDist;}else if(loc.x<=opts.corners[0].x&&loc.y>=opts.corners[0].y){radialDist=Caman.distance(loc.x,loc.y,opts.corners[0].x,opts.corners[0].y);amt=(radialDist-opts.cornerRadius)/opts.maxDist;}else if(loc.x>=opts.corners[1].x&&loc.y>=opts.corners[1].y){radialDist=Caman.distance(loc.x,loc.y,opts.corners[1].x,opts.corners[1].y);amt=(radialDist-opts.cornerRadius)/opts.maxDist;}else if(loc.x>=opts.corners[2].x&&loc.y<=opts.corners[2].y){radialDist=Caman.distance(loc.x,loc.y,opts.corners[2].x,opts.corners[2].y);amt=(radialDist-opts.cornerRadius)/opts.maxDist;}else if(loc.x<=opts.corners[3].x&&loc.y<=opts.corners[3].y){radialDist=Caman.distance(loc.x,loc.y,opts.corners[3].x,opts.corners[3].y);amt=(radialDist-opts.cornerRadius)/opts.maxDist;}
if(amt<0){return rgba;}
return vignetteFilters[opts.method](rgba,amt,opts);});});(function(){var BlurStack,getLinearGradientMap,getRadialGradientMap,mul_table,shg_table;mul_table=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];shg_table=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];getLinearGradientMap=function(width,height,centerX,centerY,angle,length,mirrored){var cnv,context,gradient,x1,x2,y1,y2;cnv=typeof exports!=="undefined"&&exports!==null?new Canvas():document.createElement('canvas');cnv.width=width;cnv.height=height;x1=centerX+Math.cos(angle)*length*0.5;y1=centerY+Math.sin(angle)*length*0.5;x2=centerX-Math.cos(angle)*length*0.5;y2=centerY-Math.sin(angle)*length*0.5;context=cnv.getContext("2d");gradient=context.createLinearGradient(x1,y1,x2,y2);if(!mirrored){gradient.addColorStop(0,"white");gradient.addColorStop(1,"black");}else{gradient.addColorStop(0,"white");gradient.addColorStop(0.5,"black");gradient.addColorStop(1,"white");}
context.fillStyle=gradient;context.fillRect(0,0,width,height);return context.getImageData(0,0,width,height);};getRadialGradientMap=function(width,height,centerX,centerY,radius1,radius2){var cnv,context,gradient;cnv=typeof exports!=="undefined"&&exports!==null?new Canvas():document.createElement('canvas');cnv.width=width;cnv.height=height;context=cnv.getContext("2d");gradient=context.createRadialGradient(centerX,centerY,radius1,centerX,centerY,radius2);gradient.addColorStop(1,"white");gradient.addColorStop(0,"black");context.fillStyle=gradient;context.fillRect(0,0,width,height);return context.getImageData(0,0,width,height);};BlurStack=function(){this.r=0;this.g=0;this.b=0;this.a=0;return this.next=null;};Caman.Plugin.register("compoundBlur",function(radiusData,radius,increaseFactor,blurLevels){var b_in_sum,b_out_sum,b_sum,blend,currentIndex,div,g_in_sum,g_out_sum,g_sum,height,heightMinus1,i,iblend,idx,imagePixels,index,iradius,lookupValue,mul_sum,p,pb,pg,pixels,pr,r_in_sum,r_out_sum,r_sum,radiusPixels,radiusPlus1,rbs,shg_sum,stack,stackEnd,stackIn,stackOut,stackStart,steps,sumFactor,w4,wh,wh4,width,widthMinus1,x,y,yi,yp,yw,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r;width=this.dimensions.width;height=this.dimensions.height;imagePixels=this.pixelData;radiusPixels=radiusData.data;wh=width*height;wh4=wh<<2;pixels=[];for(i=_i=0;0<=wh4?_i<wh4:_i>wh4;i=0<=wh4?++_i:--_i){pixels[i]=imagePixels[i];}
currentIndex=0;steps=blurLevels;blurLevels-=1;while(steps-->=0){iradius=(radius+0.5)|0;if(iradius===0){continue;}
if(iradius>256){iradius=256;}
div=iradius+iradius+1;w4=width<<2;widthMinus1=width-1;heightMinus1=height-1;radiusPlus1=iradius+1;sumFactor=radiusPlus1*(radiusPlus1+1)/2;stackStart=new BlurStack();stackEnd=void 0;stack=stackStart;for(i=_j=1;1<=div?_j<div:_j>div;i=1<=div?++_j:--_j){stack=stack.next=new BlurStack();if(i===radiusPlus1){stackEnd=stack;}}
stack.next=stackStart;stackIn=null;stackOut=null;yw=yi=0;mul_sum=mul_table[iradius];shg_sum=shg_table[iradius];for(y=_k=0;0<=height?_k<height:_k>height;y=0<=height?++_k:--_k){r_in_sum=g_in_sum=b_in_sum=r_sum=g_sum=b_sum=0;r_out_sum=radiusPlus1*(pr=pixels[yi]);g_out_sum=radiusPlus1*(pg=pixels[yi+1]);b_out_sum=radiusPlus1*(pb=pixels[yi+2]);r_sum+=sumFactor*pr;g_sum+=sumFactor*pg;b_sum+=sumFactor*pb;stack=stackStart;for(i=_l=0;0<=radiusPlus1?_l<radiusPlus1:_l>radiusPlus1;i=0<=radiusPlus1?++_l:--_l){stack.r=pr;stack.g=pg;stack.b=pb;stack=stack.next;}
for(i=_m=1;1<=radiusPlus1?_m<radiusPlus1:_m>radiusPlus1;i=1<=radiusPlus1?++_m:--_m){p=yi+((widthMinus1<i?widthMinus1:i)<<2);r_sum+=(stack.r=(pr=pixels[p]))*(rbs=radiusPlus1-i);g_sum+=(stack.g=(pg=pixels[p+1]))*rbs;b_sum+=(stack.b=(pb=pixels[p+2]))*rbs;r_in_sum+=pr;g_in_sum+=pg;b_in_sum+=pb;stack=stack.next;}
stackIn=stackStart;stackOut=stackEnd;for(x=_n=0;0<=width?_n<width:_n>width;x=0<=width?++_n:--_n){pixels[yi]=(r_sum*mul_sum)>>shg_sum;pixels[yi+1]=(g_sum*mul_sum)>>shg_sum;pixels[yi+2]=(b_sum*mul_sum)>>shg_sum;r_sum-=r_out_sum;g_sum-=g_out_sum;b_sum-=b_out_sum;r_out_sum-=stackIn.r;g_out_sum-=stackIn.g;b_out_sum-=stackIn.b;p=(yw+((p=x+radiusPlus1)<widthMinus1?p:widthMinus1))<<2;r_in_sum+=(stackIn.r=pixels[p]);g_in_sum+=(stackIn.g=pixels[p+1]);b_in_sum+=(stackIn.b=pixels[p+2]);r_sum+=r_in_sum;g_sum+=g_in_sum;b_sum+=b_in_sum;stackIn=stackIn.next;r_out_sum+=(pr=stackOut.r);g_out_sum+=(pg=stackOut.g);b_out_sum+=(pb=stackOut.b);r_in_sum-=pr;g_in_sum-=pg;b_in_sum-=pb;stackOut=stackOut.next;yi+=4;}
yw+=width;}
for(x=_o=0;0<=width?_o<width:_o>width;x=0<=width?++_o:--_o){g_in_sum=b_in_sum=r_in_sum=g_sum=b_sum=r_sum=0;yi=x<<2;r_out_sum=radiusPlus1*(pr=pixels[yi]);g_out_sum=radiusPlus1*(pg=pixels[yi+1]);b_out_sum=radiusPlus1*(pb=pixels[yi+2]);r_sum+=sumFactor*pr;g_sum+=sumFactor*pg;b_sum+=sumFactor*pb;stack=stackStart;for(i=_p=0;0<=radiusPlus1?_p<radiusPlus1:_p>radiusPlus1;i=0<=radiusPlus1?++_p:--_p){stack.r=pr;stack.g=pg;stack.b=pb;stack=stack.next;}
yp=width;for(i=_q=1;1<=radiusPlus1?_q<radiusPlus1:_q>radiusPlus1;i=1<=radiusPlus1?++_q:--_q){yi=(yp+x)<<2;r_sum+=(stack.r=(pr=pixels[yi]))*(rbs=radiusPlus1-i);g_sum+=(stack.g=(pg=pixels[yi+1]))*rbs;b_sum+=(stack.b=(pb=pixels[yi+2]))*rbs;r_in_sum+=pr;g_in_sum+=pg;b_in_sum+=pb;stack=stack.next;if(i<heightMinus1){yp+=width;}}
yi=x;stackIn=stackStart;stackOut=stackEnd;for(y=_r=0;0<=height?_r<height:_r>height;y=0<=height?++_r:--_r){p=yi<<2;pixels[p]=(r_sum*mul_sum)>>shg_sum;pixels[p+1]=(g_sum*mul_sum)>>shg_sum;pixels[p+2]=(b_sum*mul_sum)>>shg_sum;r_sum-=r_out_sum;g_sum-=g_out_sum;b_sum-=b_out_sum;r_out_sum-=stackIn.r;g_out_sum-=stackIn.g;b_out_sum-=stackIn.b;p=(x+(((p=y+radiusPlus1)<heightMinus1?p:heightMinus1)*width))<<2;r_sum+=(r_in_sum+=(stackIn.r=pixels[p]));g_sum+=(g_in_sum+=(stackIn.g=pixels[p+1]));b_sum+=(b_in_sum+=(stackIn.b=pixels[p+2]));stackIn=stackIn.next;r_out_sum+=(pr=stackOut.r);g_out_sum+=(pg=stackOut.g);b_out_sum+=(pb=stackOut.b);r_in_sum-=pr;g_in_sum-=pg;b_in_sum-=pb;stackOut=stackOut.next;yi+=width;}}
radius*=increaseFactor;i=wh;while(--i>-1){idx=i<<2;lookupValue=(radiusPixels[idx+2]&0xff)/255.0*blurLevels;index=lookupValue|0;if(index===currentIndex){blend=256.0*(lookupValue-(lookupValue|0));iblend=256-blend;imagePixels[idx]=(imagePixels[idx]*iblend+pixels[idx]*blend)>>8;imagePixels[idx+1]=(imagePixels[idx+1]*iblend+pixels[idx+1]*blend)>>8;imagePixels[idx+2]=(imagePixels[idx+2]*iblend+pixels[idx+2]*blend)>>8;}else if(index===currentIndex+1){imagePixels[idx]=pixels[idx];imagePixels[idx+1]=pixels[idx+1];imagePixels[idx+2]=pixels[idx+2];}}
currentIndex++;}
return this;});Caman.Filter.register("tiltShift",function(opts){var defaults,gradient;defaults={center:{x:this.dimensions.width/2,y:this.dimensions.height/2},angle:45,focusWidth:200,startRadius:3,radiusFactor:1.5,steps:3};opts=Util.extend(defaults,opts);opts.angle*=Math.PI/180;gradient=getLinearGradientMap(this.dimensions.width,this.dimensions.height,opts.center.x,opts.center.y,opts.angle,opts.focusWidth,true);return this.processPlugin("compoundBlur",[gradient,opts.startRadius,opts.radiusFactor,opts.steps]);});return Caman.Filter.register("radialBlur",function(opts){var defaults,gradient,radius1,radius2;defaults={size:50,center:{x:this.dimensions.width/2,y:this.dimensions.height/2},startRadius:3,radiusFactor:1.5,steps:3,radius:null};opts=Util.extend(defaults,opts);if(!opts.radius){opts.radius=this.dimensions.width<this.dimensions.height?this.dimensions.height:this.dimensions.width;}
radius1=(opts.radius/2)-opts.size;radius2=opts.radius/2;gradient=getRadialGradientMap(this.dimensions.width,this.dimensions.height,opts.center.x,opts.center.y,radius1,radius2);return this.processPlugin("compoundBlur",[gradient,opts.startRadius,opts.radiusFactor,opts.steps]);});})();Caman.Filter.register("edgeEnhance",function(){return this.processKernel("Edge Enhance",[0,0,0,-1,1,0,0,0,0]);});Caman.Filter.register("edgeDetect",function(){return this.processKernel("Edge Detect",[-1,-1,-1,-1,8,-1,-1,-1,-1]);});Caman.Filter.register("emboss",function(){return this.processKernel("Emboss",[-2,-1,0,-1,1,1,0,1,2]);});Caman.Filter.register("posterize",function(adjust){var numOfAreas,numOfValues;numOfAreas=256/adjust;numOfValues=255/(adjust-1);return this.process("posterize",function(rgba){rgba.r=Math.floor(Math.floor(rgba.r/numOfAreas)*numOfValues);rgba.g=Math.floor(Math.floor(rgba.g/numOfAreas)*numOfValues);rgba.b=Math.floor(Math.floor(rgba.b/numOfAreas)*numOfValues);return rgba;});});Caman.Filter.register("vintage",function(vignette){if(vignette==null){vignette=true;}
this.greyscale();this.contrast(5);this.noise(3);this.sepia(100);this.channels({red:8,blue:2,green:4});this.gamma(0.87);if(vignette){return this.vignette("40%",30);}});Caman.Filter.register("lomo",function(vignette){if(vignette==null){vignette=true;}
this.brightness(15);this.exposure(15);this.curves('rgb',[0,0],[200,0],[155,255],[255,255]);this.saturation(-20);this.gamma(1.8);if(vignette){this.vignette("50%",60);}
return this.brightness(5);});Caman.Filter.register("clarity",function(grey){if(grey==null){grey=false;}
this.vibrance(20);this.curves('rgb',[5,0],[130,150],[190,220],[250,255]);this.sharpen(15);this.vignette("45%",20);if(grey){this.greyscale();this.contrast(4);}
return this;});Caman.Filter.register("sinCity",function(){this.contrast(100);this.brightness(15);this.exposure(10);this.posterize(80);this.clip(30);return this.greyscale();});Caman.Filter.register("sunrise",function(){this.exposure(3.5);this.saturation(-5);this.vibrance(50);this.sepia(60);this.colorize("#e87b22",10);this.channels({red:8,blue:8});this.contrast(5);this.gamma(1.2);return this.vignette("55%",25);});Caman.Filter.register("crossProcess",function(){this.exposure(5);this.colorize("#e87b22",4);this.sepia(20);this.channels({blue:8,red:3});this.curves('b',[0,0],[100,150],[180,180],[255,255]);this.contrast(15);this.vibrance(75);return this.gamma(1.6);});Caman.Filter.register("orangePeel",function(){this.curves('rgb',[0,0],[100,50],[140,200],[255,255]);this.vibrance(-30);this.saturation(-30);this.colorize('#ff9000',30);this.contrast(-5);return this.gamma(1.4);});Caman.Filter.register("love",function(){this.brightness(5);this.exposure(8);this.contrast(4);this.colorize('#c42007',30);this.vibrance(50);return this.gamma(1.3);});Caman.Filter.register("grungy",function(){this.gamma(1.5);this.clip(25);this.saturation(-60);this.contrast(5);this.noise(5);return this.vignette("50%",30);});Caman.Filter.register("jarques",function(){this.saturation(-35);this.curves('b',[20,0],[90,120],[186,144],[255,230]);this.curves('r',[0,0],[144,90],[138,120],[255,255]);this.curves('g',[10,0],[115,105],[148,100],[255,248]);this.curves('rgb',[0,0],[120,100],[128,140],[255,255]);return this.sharpen(20);});Caman.Filter.register("pinhole",function(){this.greyscale();this.sepia(10);this.exposure(10);this.contrast(15);return this.vignette("60%",35);});Caman.Filter.register("oldBoot",function(){this.saturation(-20);this.vibrance(-50);this.gamma(1.1);this.sepia(30);this.channels({red:-10,blue:5});this.curves('rgb',[0,0],[80,50],[128,230],[255,255]);return this.vignette("60%",30);});Caman.Filter.register("glowingSun",function(vignette){if(vignette==null){vignette=true;}
this.brightness(10);this.newLayer(function(){this.setBlendingMode("multiply");this.opacity(80);this.copyParent();this.filter.gamma(0.8);this.filter.contrast(50);return this.filter.exposure(10);});this.newLayer(function(){this.setBlendingMode("softLight");this.opacity(80);return this.fillColor("#f49600");});this.exposure(20);this.gamma(0.8);if(vignette){return this.vignette("45%",20);}});Caman.Filter.register("hazyDays",function(){this.gamma(1.2);this.newLayer(function(){this.setBlendingMode("overlay");this.opacity(60);this.copyParent();this.filter.channels({red:5});return this.filter.stackBlur(15);});this.newLayer(function(){this.setBlendingMode("addition");this.opacity(40);return this.fillColor("#6899ba");});this.newLayer(function(){this.setBlendingMode("multiply");this.opacity(35);this.copyParent();this.filter.brightness(40);this.filter.vibrance(40);this.filter.exposure(30);this.filter.contrast(15);this.filter.curves('r',[0,40],[128,128],[128,128],[255,215]);this.filter.curves('g',[0,40],[128,128],[128,128],[255,215]);this.filter.curves('b',[0,40],[128,128],[128,128],[255,215]);return this.filter.stackBlur(5);});this.curves('r',[20,0],[128,158],[128,128],[235,255]);this.curves('g',[20,0],[128,128],[128,128],[235,255]);this.curves('b',[20,0],[128,108],[128,128],[235,255]);return this.vignette("45%",20);});Caman.Filter.register("herMajesty",function(){this.brightness(40);this.colorize("#ea1c5d",10);this.curves('b',[0,10],[128,180],[190,190],[255,255]);this.newLayer(function(){this.setBlendingMode('overlay');this.opacity(50);this.copyParent();this.filter.gamma(0.7);return this.newLayer(function(){this.setBlendingMode('normal');this.opacity(60);return this.fillColor('#ea1c5d');});});this.newLayer(function(){this.setBlendingMode('multiply');this.opacity(60);this.copyParent();this.filter.saturation(50);this.filter.hue(90);return this.filter.contrast(10);});this.gamma(1.4);this.vibrance(-30);this.newLayer(function(){this.opacity(10);return this.fillColor('#e5f0ff');});return this;});Caman.Filter.register("nostalgia",function(){this.saturation(20);this.gamma(1.4);this.greyscale();this.contrast(5);this.sepia(100);this.channels({red:8,blue:2,green:4});this.gamma(0.8);this.contrast(5);this.exposure(10);this.newLayer(function(){this.setBlendingMode('overlay');this.copyParent();this.opacity(55);return this.filter.stackBlur(10);});return this.vignette("50%",30);});Caman.Filter.register("hemingway",function(){this.greyscale();this.contrast(10);this.gamma(0.9);this.newLayer(function(){this.setBlendingMode("multiply");this.opacity(40);this.copyParent();this.filter.exposure(15);this.filter.contrast(15);return this.filter.channels({green:10,red:5});});this.sepia(30);this.curves('rgb',[0,10],[120,90],[180,200],[235,255]);this.channels({red:5,green:-2});return this.exposure(15);});Caman.Filter.register("concentrate",function(){this.sharpen(40);this.saturation(-50);this.channels({red:3});this.newLayer(function(){this.setBlendingMode("multiply");this.opacity(80);this.copyParent();this.filter.sharpen(5);this.filter.contrast(50);this.filter.exposure(10);return this.filter.channels({blue:5});});return this.brightness(10);});Caman.Plugin.register("crop",function(width,height,x,y){var canvas,ctx;if(x==null){x=0;}
if(y==null){y=0;}
if(typeof exports!=="undefined"&&exports!==null){canvas=new Canvas(width,height);}else{canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;}
ctx=canvas.getContext('2d');ctx.drawImage(this.canvas,x,y,width,height,0,0,width,height);return this.replaceCanvas(canvas);});Caman.Plugin.register("resize",function(newDims){var canvas,ctx;if(newDims==null){newDims=null;}
if(newDims===null||(!(newDims.width!=null)&&!(newDims.height!=null))){Log.error("Invalid or missing dimensions given for resize");return;}
if(!(newDims.width!=null)){newDims.width=this.canvas.width*newDims.height/this.canvas.height;}else if(!(newDims.height!=null)){newDims.height=this.canvas.height*newDims.width/this.canvas.width;}
if(typeof exports!=="undefined"&&exports!==null){canvas=new Canvas(newDims.width,newDims.height);}else{canvas=document.createElement('canvas');canvas.width=newDims.width;canvas.height=newDims.height;}
ctx=canvas.getContext('2d');ctx.drawImage(this.canvas,0,0,this.canvas.width,this.canvas.height,0,0,newDims.width,newDims.height);return this.replaceCanvas(canvas);});Caman.Filter.register("crop",function(width,height,x,y){if(x==null){x=0;}
if(y==null){y=0;}
return this.processPlugin("crop",Array.prototype.slice.call(arguments,0));});Caman.Filter.register("resize",function(width,height){return this.processPlugin("resize",Array.prototype.slice.call(arguments,0));});(function(){var BlurStack,mul_table,shg_table;mul_table=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];shg_table=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];BlurStack=function(){this.r=0;this.g=0;this.b=0;this.a=0;return this.next=null;};Caman.Plugin.register("stackBlur",function(radius){var b_in_sum,b_out_sum,b_sum,div,g_in_sum,g_out_sum,g_sum,height,heightMinus1,i,mul_sum,p,pb,pg,pixels,pr,r_in_sum,r_out_sum,r_sum,radiusPlus1,rbs,shg_sum,stack,stackEnd,stackIn,stackOut,stackStart,sumFactor,w4,width,widthMinus1,x,y,yi,yp,yw,_i,_j,_k,_l,_m,_n,_o,_p,_q;if(isNaN(radius)||radius<1){return;}
radius|=0;pixels=this.pixelData;width=this.dimensions.width;height=this.dimensions.height;div=radius+radius+1;w4=width<<2;widthMinus1=width-1;heightMinus1=height-1;radiusPlus1=radius+1;sumFactor=radiusPlus1*(radiusPlus1+1)/2;stackStart=new BlurStack();stack=stackStart;for(i=_i=1;1<=div?_i<div:_i>div;i=1<=div?++_i:--_i){stack=stack.next=new BlurStack();if(i===radiusPlus1){stackEnd=stack;}}
stack.next=stackStart;stackIn=null;stackOut=null;yw=yi=0;mul_sum=mul_table[radius];shg_sum=shg_table[radius];for(y=_j=0;0<=height?_j<height:_j>height;y=0<=height?++_j:--_j){r_in_sum=g_in_sum=b_in_sum=r_sum=g_sum=b_sum=0;r_out_sum=radiusPlus1*(pr=pixels[yi]);g_out_sum=radiusPlus1*(pg=pixels[yi+1]);b_out_sum=radiusPlus1*(pb=pixels[yi+2]);r_sum+=sumFactor*pr;g_sum+=sumFactor*pg;b_sum+=sumFactor*pb;stack=stackStart;for(i=_k=0;0<=radiusPlus1?_k<radiusPlus1:_k>radiusPlus1;i=0<=radiusPlus1?++_k:--_k){stack.r=pr;stack.g=pg;stack.b=pb;stack=stack.next;}
for(i=_l=1;1<=radiusPlus1?_l<radiusPlus1:_l>radiusPlus1;i=1<=radiusPlus1?++_l:--_l){p=yi+((widthMinus1<i?widthMinus1:i)<<2);r_sum+=(stack.r=(pr=pixels[p]))*(rbs=radiusPlus1-i);g_sum+=(stack.g=(pg=pixels[p+1]))*rbs;b_sum+=(stack.b=(pb=pixels[p+2]))*rbs;r_in_sum+=pr;g_in_sum+=pg;b_in_sum+=pb;stack=stack.next;}
stackIn=stackStart;stackOut=stackEnd;for(x=_m=0;0<=width?_m<width:_m>width;x=0<=width?++_m:--_m){pixels[yi]=(r_sum*mul_sum)>>shg_sum;pixels[yi+1]=(g_sum*mul_sum)>>shg_sum;pixels[yi+2]=(b_sum*mul_sum)>>shg_sum;r_sum-=r_out_sum;g_sum-=g_out_sum;b_sum-=b_out_sum;r_out_sum-=stackIn.r;g_out_sum-=stackIn.g;b_out_sum-=stackIn.b;p=(yw+((p=x+radius+1)<widthMinus1?p:widthMinus1))<<2;r_in_sum+=(stackIn.r=pixels[p]);g_in_sum+=(stackIn.g=pixels[p+1]);b_in_sum+=(stackIn.b=pixels[p+2]);r_sum+=r_in_sum;g_sum+=g_in_sum;b_sum+=b_in_sum;stackIn=stackIn.next;r_out_sum+=(pr=stackOut.r);g_out_sum+=(pg=stackOut.g);b_out_sum+=(pb=stackOut.b);r_in_sum-=pr;g_in_sum-=pg;b_in_sum-=pb;stackOut=stackOut.next;yi+=4;}
yw+=width;}
for(x=_n=0;0<=width?_n<width:_n>width;x=0<=width?++_n:--_n){g_in_sum=b_in_sum=r_in_sum=g_sum=b_sum=r_sum=0;yi=x<<2;r_out_sum=radiusPlus1*(pr=pixels[yi]);g_out_sum=radiusPlus1*(pg=pixels[yi+1]);b_out_sum=radiusPlus1*(pb=pixels[yi+2]);r_sum+=sumFactor*pr;g_sum+=sumFactor*pg;b_sum+=sumFactor*pb;stack=stackStart;for(i=_o=0;0<=radiusPlus1?_o<radiusPlus1:_o>radiusPlus1;i=0<=radiusPlus1?++_o:--_o){stack.r=pr;stack.g=pg;stack.b=pb;stack=stack.next;}
yp=width;for(i=_p=1;1<=radius?_p<=radius:_p>=radius;i=1<=radius?++_p:--_p){yi=(yp+x)<<2;r_sum+=(stack.r=(pr=pixels[yi]))*(rbs=radiusPlus1-i);g_sum+=(stack.g=(pg=pixels[yi+1]))*rbs;b_sum+=(stack.b=(pb=pixels[yi+2]))*rbs;r_in_sum+=pr;g_in_sum+=pg;b_in_sum+=pb;stack=stack.next;if(i<heightMinus1){yp+=width;}}
yi=x;stackIn=stackStart;stackOut=stackEnd;for(y=_q=0;0<=height?_q<height:_q>height;y=0<=height?++_q:--_q){p=yi<<2;pixels[p]=(r_sum*mul_sum)>>shg_sum;pixels[p+1]=(g_sum*mul_sum)>>shg_sum;pixels[p+2]=(b_sum*mul_sum)>>shg_sum;r_sum-=r_out_sum;g_sum-=g_out_sum;b_sum-=b_out_sum;r_out_sum-=stackIn.r;g_out_sum-=stackIn.g;b_out_sum-=stackIn.b;p=(x+(((p=y+radiusPlus1)<heightMinus1?p:heightMinus1)*width))<<2;r_sum+=(r_in_sum+=(stackIn.r=pixels[p]));g_sum+=(g_in_sum+=(stackIn.g=pixels[p+1]));b_sum+=(b_in_sum+=(stackIn.b=pixels[p+2]));stackIn=stackIn.next;r_out_sum+=(pr=stackOut.r);g_out_sum+=(pg=stackOut.g);b_out_sum+=(pb=stackOut.b);r_in_sum-=pr;g_in_sum-=pg;b_in_sum-=pb;stackOut=stackOut.next;yi+=width;}}
return this;});return Caman.Filter.register("stackBlur",function(radius){return this.processPlugin("stackBlur",[radius]);});})();Caman.Filter.register("threshold",function(adjust){return this.process("threshold",function(rgba){var luminance;luminance=(0.2126*rgba.r)+(0.7152*rgba.g)+(0.0722*rgba.b);if(luminance<adjust){rgba.r=0;rgba.g=0;rgba.b=0;}else{rgba.r=255;rgba.g=255;rgba.b=255;}
return rgba;});});}).call(this);

/**
 * Trumbowyg v1.1.6 - A lightweight WYSIWYG editor
 * Trumbowyg core file
 * ------------------------
 * @link http://alex-d.github.io/Trumbowyg
 * @license MIT
 * @author Alexandre Demode (Alex-D)
 *         Twitter : @AlexandreDemode
 *         Website : alex-d.fr
 */

jQuery.trumbowyg = {
    langs: {
        da: {
            viewHTML:"Vis HTML",
            formatting:"Formatter",
            p:"Afsnit",
            blockquote:"Citat",
            code:"Kode",
            header:"Overskrift",
            bold:"Fed",
            italic:"Kursiv",
            strikethrough:"Gennemstreg",
            underline:"Understreg",
            strong:"Vigtig",
            em:"Fremhæv",
            del:"Slettet",
            unorderedList:"Uordnet liste",
            orderedList:"Ordnet liste",
            insertImage:"Indsæt billede",
            insertVideo:"Indsæt video",link:"Link",
            createLink:"Indsæt link",
            unlink:"Fjern link",
            justifyLeft:"Venstrestil",
            justifyCenter:"Centrer",
            justifyRight:"Højrestil",
            justifyFull:"Lige margener",
            horizontalRule:"Horisontal linie",
            fullscreen:"Fuld skærm",
            close:"Luk",
            submit:"Bekræft",
            reset:"Annuller",
            invalidUrl:"Ugyldig URL",
            required:"Påkrævet",
            description:"Beskrivelse",
            title:"Titel",
            text:"Tekst"
        }
    },

    // User default options
    opts: {},

    btnsGrps: {
        design:     ['bold', 'italic', 'underline', 'strikethrough'],
        semantic:   ['strong', 'em', 'del'],
        justify:    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        lists:      ['unorderedList', 'orderedList']
    }
};



(function(window, document, $, undefined){
    'use strict';

    // @param : o are options
    // @param : p are params
    $.fn.trumbowyg = function(o, p){
        if(o === Object(o) || !o){
            return this.each(function(){
                if(!$(this).data('trumbowyg'))
                    $(this).data('trumbowyg', new Trumbowyg(this, o));
            });
        } else if(this.length === 1){
            try {
                var t = $(this).data('trumbowyg');
                switch(o){
                    // Modal box
                    case 'openModal':
                        return t.openModal(p.title, p.content);
                    case 'closeModal':
                        return t.closeModal();
                    case 'openModalInsert':
                        return t.openModalInsert(p.title, p.fields, p.callback);

                    // Selection
                    case 'saveSelection':
                        return t.saveSelection();
                    case 'getSelection':
                        return t.selection;
                    case 'getSelectedText':
                        return t.selection+'';
                    case 'restoreSelection':
                        return t.restoreSelection();

                    // Destroy
                    case 'destroy':
                        return t.destroy();

                    // Empty
                    case 'empty':
                        return t.empty();

                    // Public options
                    case 'lang':
                        return t.lang;
                    case 'duration':
                        return t.o.duration;

                    // HTML
                    case 'html':
                        return t.html(p);
                }
            } catch(e){}
        }

        return false;
    };

    var Trumbowyg = function(editorElem, opts){
        var t = this;
        // Get the document of the element. It use to makes the plugin
        // compatible on iframes.
        t.doc = editorElem.ownerDocument || document;
        // jQuery object of the editor
        t.$e = $(editorElem);
        t.$creator = $(editorElem);

        // Extend with options
        opts = $.extend(true, {}, opts, $.trumbowyg.opts);

        // Localization management
        if(typeof opts.lang === 'undefined' || typeof $.trumbowyg.langs[opts.lang] === 'undefined')
            t.lang = $.trumbowyg.langs.en;
        else
            t.lang = $.extend(true, {}, $.trumbowyg.langs.en, $.trumbowyg.langs[opts.lang]);

        // Defaults Options
        t.o = $.extend(true, {}, {
            lang: 'en',
            dir: 'ltr',
            duration: 200, // Duration of modal box animations

            mobile: false,
            tablet: true,
            closable: false,
            fullscreenable: true,
            fixedBtnPane: false,
            fixedFullWidth: false,
            autogrow: false,

            prefix: 'trumbowyg-',

            // WYSIWYG only
            convertLink: true, // TODO
            semantic: false,
            resetCss: false,

            btns: [
                'viewHTML',
                '|', 'formatting',
                '|', $.trumbowyg.btnsGrps.design,
                '|', 'link',
                '|', 'insertImage',
                '|', $.trumbowyg.btnsGrps.justify,
                '|', $.trumbowyg.btnsGrps.lists,
                '|', 'horizontalRule'
            ],
            btnsAdd: [],

            /**
             * When the button is associated to a empty object
             * func and title attributs are defined from the button key value
             *
             * For example
             *      foo: {}
             * is equivalent to :
             *      foo: {
             *          func: 'foo',
             *          title: this.lang.foo
             *      }
             */
            btnsDef: {
                viewHTML: {
                    func: 'toggle'
                },

                p: {
                    func: 'formatBlock'
                },
                blockquote: {
                    func: 'formatBlock'
                },
                h1: {
                    func: 'formatBlock',
                    title: t.lang.header + ' 1'
                },
                h2: {
                    func: 'formatBlock',
                    title: t.lang.header + ' 2'
                },
                h3: {
                    func: 'formatBlock',
                    title: t.lang.header + ' 3'
                },
                h4: {
                    func: 'formatBlock',
                    title: t.lang.header + ' 4'
                },

                bold: {},
                italic: {},
                underline: {},
                strikethrough: {},

                strong: {
                    func: 'bold'
                },
                em: {
                    func: 'italic'
                },
                del: {
                    func: 'strikethrough'
                },

                createLink: {},
                unlink: {},

                insertImage: {},

                justifyLeft: {},
                justifyCenter: {},
                justifyRight: {},
                justifyFull: {},

                unorderedList: {
                    func: 'insertUnorderedList'
                },
                orderedList: {
                    func: 'insertOrderedList'
                },

                horizontalRule: {
                    func: 'insertHorizontalRule'
                },

                // Dropdowns
                formatting: {
                    dropdown: ['p', 'blockquote', 'h1', 'h2', 'h3', 'h4']
                },
                link: {
                    dropdown: ['createLink', 'unlink']
                }
            }
        }, opts);

        if(t.o.semantic && !opts.btns)
            t.o.btns = [
                'viewHTML',
                '|', 'formatting',
                '|', $.trumbowyg.btnsGrps.semantic,
                '|', 'link',
                '|', 'insertImage',
                '|', $.trumbowyg.btnsGrps.justify,
                '|', $.trumbowyg.btnsGrps.lists,
                '|', 'horizontalRule'
            ];
        else if(opts && opts.btns)
            t.o.btns = opts.btns;

        t.init();
    };

    Trumbowyg.prototype = {
        init: function(){
            var t = this;
            t.height = t.$e.css('height');

            if(t.isEnabled()){
                t.buildEditor(true);
                return;
            }

            t.buildEditor();
            t.buildBtnPane();

            t.fixedBtnPaneEvents();

            t.buildOverlay();
        },

        buildEditor: function(disable){
            var t = this,
                pfx = t.o.prefix,
                html = '';


            if(disable === true){
                if(!t.$e.is('textarea')){
                    var textarea = t.buildTextarea().val(t.$e.val());
                    t.$e.hide().after(textarea);
                }
                return;
            }


            t.$box = $('<div/>', {
                class: pfx + 'box ' + pfx + t.o.lang + ' trumbowyg'
            });

            t.isTextarea = true;
            if(t.$e.is('textarea'))
                t.$editor = $('<div/>');
            else {
                t.$editor = t.$e;
                t.$e = t.buildTextarea().val(t.$e.val());
                t.isTextarea = false;
            }

            if(t.$creator.is('[placeholder]'))
                t.$editor.attr('placeholder', t.$creator.attr('placeholder'));

            t.$e.hide()
                   .addClass(pfx + 'textarea');


            if(t.isTextarea){
                html = t.$e.val();
                t.$box.insertAfter(t.$e)
                         .append(t.$editor)
                         .append(t.$e);
            } else {
                html = t.$editor.html();
                t.$box.insertAfter(t.$editor)
                         .append(t.$e)
                         .append(t.$editor);
                t.syncCode();
            }

            t.$editor.addClass(pfx + 'editor')
                        .attr('contenteditable', true)
                        .attr('dir', t.lang._dir || t.o.dir)
                        .html(html);

            if(t.o.resetCss)
                t.$editor.addClass(pfx + 'reset-css');

            if(!t.o.autogrow){
                $.each([t.$editor, t.$e], function(i, $el){
                    $el.css({
                        height: t.height,
                        overflow: 'auto'
                    });
                });
            }

            if(t.o.semantic){
                t.$editor.html(
                    t.$editor.html()
                        .replace('<br>', '</p><p>')
                        .replace('&nbsp;', '')
                );
                t.semanticCode();
            }



            t.$editor
            .on('dblclick', 'img', function(e){
                var $img = $(this);
                t.openModalInsert(t.lang.insertImage, {
                    url: {
                        label: 'URL',
                        value: $img.attr('src'),
                        required: true
                    },
                    alt: {
                        label: 'description',
                        value: $img.attr('alt')
                    }
                }, function(v){
                    $img.attr({
                        src: v.url,
                        alt: v.alt
                    });
                });
                e.stopPropagation();
            })
            .on('keyup', function(e){
                t.semanticCode(false, e.which === 13);
            })
            .on('focus', function(){
                t.$creator.trigger('tbwfocus');
            })
            .on('blur', function(){
                t.syncCode();
                t.$creator.trigger('tbwblur');
            });
        },


        // Build the Textarea which contain HTML generated code
        buildTextarea: function(){
            return $('<textarea/>', {
                name: this.$e.attr('id'),
                height: this.height
            });
        },


        // Build button pane, use o.btns and o.btnsAdd options
        buildBtnPane: function(){
            var t = this,
                pfx = t.o.prefix;

            if(t.o.btns === false)
                return;

            t.$btnPane = $('<ul/>', {
                class: pfx + 'button-pane'
            });

            $.each(t.o.btns.concat(t.o.btnsAdd), function(i, btn){
                // Managment of group of buttons
                try {
                    var b = btn.split('btnGrp-');
                    if(b[1] !== undefined)
                        btn = $.trumbowyg.btnsGrps[b[1]];
                } catch(e){}

                if(!$.isArray(btn))
                    btn = [btn];

                $.each(btn, function(i, b){
                    try { // Prevent buildBtn error
                        var $li = $('<li/>');

                        if(b === '|') // It's a separator
                            $li.addClass(pfx + 'separator');
                        else if(t.isSupportedBtn(b)) // It's a supported button
                            $li.append(t.buildBtn(b));

                        t.$btnPane.append($li);
                    } catch(e){}
                });
            });

            // Build right li for fullscreen and close buttons
            var $liRight = $('<li/>', {
                class: pfx + 'not-disable ' + pfx + 'buttons-right'
            });

            // Add the fullscreen button
            if(t.o.fullscreenable)
                $liRight.append(
                    t.buildRightBtn('fullscreen')
                    .on('click', function(){
                        var cssClass = pfx + 'fullscreen';
                        t.$box.toggleClass(cssClass);

                        if(t.$box.hasClass(cssClass)){
                            $('body').css('overflow', 'hidden');
                            $.each([t.$editor, t.$e], function(){
                                $(this).css({
                                    height: 'calc(100% - 35px)',
                                    overflow: 'auto'
                                });
                            });
                            t.$btnPane.css('width', '100%');
                        } else {
                            $('body').css('overflow', 'auto');
                            t.$box.removeAttr('style');
                            if(!t.o.autogrow)
                                $.each([t.$editor, t.$e], function(){
                                    $(this).css('height', t.height);
                                });
                        }
                        $(window).trigger('scroll');
                    })
                );

            // Build and add close button
            if(t.o.closable)
                $liRight
                    .append(
                        t.buildRightBtn('close')
                        .on('click', function(){
                            if(t.$box.hasClass(pfx + 'fullscreen'))
                                $('body').css('overflow', 'auto');
                            t.destroy();
                        })
                    );


            // Add right li only if isn't empty
            if($liRight.not(':empty'))
                t.$btnPane.append($liRight);

            t.$box.prepend(t.$btnPane);
        },


        // Build a button and his action
        buildBtn: function(n){ // n is name of the button
            var t = this,
                pfx = t.o.prefix,
                btn = t.o.btnsDef[n],
                d = btn.dropdown,
                textDef = t.lang[n] || n,

                $btn = $('<button/>', {
                    type: 'button',
                    class: pfx + n +'-button' + (btn.ico ? ' '+ pfx + btn.ico +'-button' : ''),
                    text: btn.text || btn.title || textDef,
                    title: btn.title || btn.text || textDef,
                    mousedown: function(e){
                        if(!d || t.$box.find('.'+n+'-'+pfx + 'dropdown').is(':hidden'))
                            $('body', t.doc).trigger('mousedown');

                        if(t.$btnPane.hasClass(pfx + 'disable') && !$(this).hasClass(pfx + 'active') && !$(this).parent().hasClass(pfx + 'not-disable'))
                            return false;

                        t.execCmd((d ? 'dropdown' : false) || btn.func || n,
                                  btn.param || n);

                        e.stopPropagation();
                        e.preventDefault();
                    }
                });



            if(d){
                $btn.addClass(pfx + 'open-dropdown');
                var c = pfx + 'dropdown',
                    dd = $('<div/>', { // the dropdown
                        class: n + '-' + c + ' ' + c + ' ' + pfx + 'fixed-top'
                    });
                $.each(d, function(i, def){
                    if(t.o.btnsDef[def] && t.isSupportedBtn(def))
                        dd.append(t.buildSubBtn(def));
                });
                t.$box.append(dd.hide());
            }

            return $btn;
        },
        // Build a button for dropdown menu
        // @param n : name of the subbutton
        buildSubBtn: function(n){
            var t = this,
                btnDef = t.o.btnsDef[n];
            return $('<button/>', {
                type: 'button',
                text: btnDef.text || btnDef.title || t.lang[n] || n,
                style: btnDef.style || null,
                mousedown: function(e){
                    $('body', t.doc).trigger('mousedown');

                    t.execCmd(btnDef.func || n,
                              btnDef.param || n);

                    e.stopPropagation();
                }
            });
        },
        // Build a button for right li
        // @param n : name of the right button
        buildRightBtn: function(n){
            return $('<button/>', {
                type: 'button',
                class: this.o.prefix + n + '-button',
                title: this.lang[n],
                text: this.lang[n]
            });
        },
        // Check if button is supported
        isSupportedBtn: function(btn){
            var def = this.o.btnsDef[btn];
            return typeof def.isSupported !== 'function' || def.isSupported();
        },

        // Build overlay for modal box
        buildOverlay: function(){
            var t = this;
            t.$overlay = $('<div/>', {
                class: t.o.prefix + 'overlay'
            }).css({
                top: t.$btnPane.outerHeight(),
                height: (parseInt(t.$editor.outerHeight()) + 1) + 'px'
            }).appendTo(t.$box);
            return t.$overlay;
        },
        showOverlay: function(){
            var t = this;
            $(window).trigger('scroll');
            t.$overlay.fadeIn(t.o.duration);
            t.$box.addClass(t.o.prefix + 'box-blur');
        },
        hideOverlay: function(){
            var t = this;
            t.$overlay.fadeOut(t.o.duration/4);
            t.$box.removeClass(t.o.prefix + 'box-blur');
        },

        // Management of fixed button pane
        fixedBtnPaneEvents: function(){
            var t = this,
                ffw = t.o.fixedFullWidth;
            if(!t.o.fixedBtnPane)
                return;

            t.isFixed = false;

            $(window)
            .on('scroll resize', function(){
                if(!t.$box)
                    return;

                t.syncCode();

                var s = $(window).scrollTop(), // s is top scroll
                    o = t.$box.offset().top + 1, // o is offset
                    toFixed = (s - o > 0) && ((s - o - parseInt(t.height)) < 0),
                    bp = t.$btnPane,
                    mt = bp.css('height'),
                    oh = bp.outerHeight();

                if(toFixed){
                    if(!t.isFixed){
                        t.isFixed = true;
                        bp.css({
                            position: 'fixed',
                            top: 0,
                            left: ffw ? '0' : 'auto',
                            zIndex: 7
                        });
                        $([t.$editor, t.$e]).css({ marginTop: mt });
                    }
                    bp.css({
                        width: ffw ? '100%' : ((parseInt(t.$box.css('width'))-1) + 'px')
                    });

                    $('.' + t.o.prefix + 'fixed-top', t.$box).css({
                        position: ffw ? 'fixed' : 'absolute',
                        top: ffw ? oh : parseInt(oh) + (s - o) + 'px',
                        zIndex: 15
                    });
                } else if(t.isFixed) {
                    t.isFixed = false;
                    bp.removeAttr('style');
                    $([t.$editor, t.$e]).css({ marginTop: 0 });
                    $('.' + t.o.prefix + 'fixed-top', t.$box).css({
                        position: 'absolute',
                        top: oh
                    });
                }
            });
        },



        // Destroy the editor
        destroy: function(){
            var t = this,
                pfx = t.o.prefix,
                h = t.height,
                html = t.html();

            if(t.isTextarea)
                t.$box.after(
                    t.$e.css({ height: h })
                        .val(html)
                        .removeClass(pfx + 'textarea')
                        .show()
                );
            else
                t.$box.after(
                    t.$editor
                        .css({ height: h })
                        .removeClass(pfx + 'editor')
                        .removeAttr('contenteditable')
                        .html(html)
                        .show()
                );

            t.$box.remove();
            t.$creator.removeData('trumbowyg');
        },



        // Empty the editor
        empty: function(){
            this.$e.val('');
            this.syncCode(true);
        },



        // Function call when click on viewHTML button
        toggle: function(){
            var t = this,
                pfx = t.o.prefix;
            t.semanticCode(false, true);
            t.$editor.toggle();
            t.$e.toggle();
            t.$btnPane.toggleClass(pfx + 'disable');
            t.$btnPane.find('.'+pfx + 'viewHTML-button').toggleClass(pfx + 'active');
        },

        // Open dropdown when click on a button which open that
        dropdown: function(name){
            var t = this,
                d = t.doc,
                pfx = t.o.prefix,
                $dropdown = t.$box.find('.'+name+'-'+pfx + 'dropdown'),
                $btn = t.$btnPane.find('.'+pfx+name+'-button');

            if($dropdown.is(':hidden')){
                var o = $btn.offset().left;
                $btn.addClass(pfx + 'active');

                $dropdown.css({
                    position: 'absolute',
                    top: t.$btnPane.outerHeight(),
                    left: (t.o.fixedFullWidth && t.isFixed) ? o+'px' : (o - t.$btnPane.offset().left)+'px'
                }).show();

                $(window).trigger('scroll');

                $('body', d).on('mousedown', function(){
                    $('.' + pfx + 'dropdown', d).hide();
                    $('.' + pfx + 'active', d).removeClass(pfx + 'active');
                    $('body', d).off('mousedown');
                });
            } else
                $('body', d).trigger('mousedown');
        },




        // HTML Code management
        html: function(html){
            var t = this;
            if(html){
                t.$e.val(html);
                t.syncCode(true);
                return t;
            } else
                return t.$e.val();
        },
        syncCode: function(force){
            var t = this;
            if(!force && t.$editor.is(':visible'))
                t.$e.val(t.$editor.html());
            else
                t.$editor.html(t.$e.val());

            if(t.o.autogrow){
                t.height = t.$editor.css('height');
                t.$e.css({ height: t.height });
            }
        },

        // Analyse and update to semantic code
        // @param force : force to sync code from textarea
        // @param full  : wrap text nodes in <p>
        semanticCode: function(force, full){
            var t = this;
            t.syncCode(force);

            if(t.o.semantic){
                t.semanticTag('b', 'strong');
                t.semanticTag('i', 'em');
                t.semanticTag('strike', 'del');

                if(full){
                    // Wrap text nodes in p
                    t.$editor.contents()
                    .filter(function(){
                        // Only non-empty text nodes
                        return this.nodeType === 3 && $.trim(this.nodeValue).length > 0;
                    }).wrap('<p></p>').end()

                    // Remove all br
                    .filter('br').remove();

                    t.saveSelection();
                    t.semanticTag('div', 'p');
                    t.restoreSelection();
                }

                t.$e.val(t.$editor.html());
            }
        },
        semanticTag: function(oldTag, newTag){
            $(oldTag, this.$editor).each(function(){
                $(this).replaceWith(function(){
                    return '<'+newTag+'>' + $(this).html() + '</'+newTag+'>';
                });
            });
        },


        // Function call when user click on "Insert Link"
        createLink: function(){
            var t = this;
            t.saveSelection();
            t.openModalInsert(t.lang.createLink, {
                url: {
                    label: 'URL',
                    value: 'http://',
                    required: true
                },
                title: {
                    label: t.lang.title,
                    value: t.selection
                },
                text: {
                    label: t.lang.text,
                    value: t.selection
                }
            }, function(v){ // v is value
                t.execCmd('createLink', v.url);
                var l = $('a[href="'+v.url+'"]:not([title])', t.$box);
                if(v.text.length > 0)
                    l.text(v.text);

                if(v.title.length > 0)
                    l.attr('title', v.title);

                return true;
            });
        },
        insertImage: function(){
            var t = this;
            t.saveSelection();
            t.openModalInsert(t.lang.insertImage, {
                url: {
                    label: 'URL',
                    value: 'http://',
                    required: true
                },
                alt: {
                    label: t.lang.description,
                    value: t.selection
                }
            }, function(v){ // v are values
                t.execCmd('insertImage', v.url);
                $('img[src="'+v.url+'"]:not([alt])', t.$box).attr('alt', v.alt);
                return true;
            });
        },


        /*
         * Call method of trumbowyg if exist
         * else try to call anonymous function
         * and finaly native execCommand
         */
        execCmd: function(cmd, param){
            var t = this;
            if(cmd != 'dropdown')
                t.$editor.focus();

            try {
                t[cmd](param);
            } catch(e){
                try {
                    cmd(param, t);
                } catch(e2){
                    //t.$editor.focus();
                    if(cmd == 'insertHorizontalRule')
                        param = null;
                    else if(cmd == 'formatBlock' && (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0))
                        param = '<' + param + '>';

                    t.doc.execCommand(cmd, false, param);
                }
            }
            t.syncCode();
        },


        // Open a modal box
        openModal: function(title, content){
            var t = this,
                pfx = t.o.prefix;

            // No open a modal box when exist other modal box
            if($('.' + pfx + 'modal-box', t.$box).size() > 0)
                return false;

            t.saveSelection();
            t.showOverlay();

            // Disable all btnPane btns
            t.$btnPane.addClass(pfx + 'disable');

            // Build out of ModalBox, it's the mask for animations
            var $modal = $('<div/>', {
                class: pfx + 'modal ' + pfx + 'fixed-top'
            }).css({
                top: (parseInt(t.$btnPane.css('height')) + 1) + 'px'
            }).appendTo(t.$box);

            // Click on overflay close modal by cancelling them
            t.$overlay.one('click', function(e){
                e.preventDefault();
                $modal.trigger(pfx + 'cancel');
            });

            // Build the form
            var $form = $('<form/>', {
                action: '',
                html: content
            })
            .on('submit', function(e){
                e.preventDefault();
                $modal.trigger(pfx + 'confirm');
            })
            .on('reset', function(e){
                e.preventDefault();
                $modal.trigger(pfx + 'cancel');
            });


            // Build ModalBox and animate to show them
            var $box = $('<div/>', {
                class: pfx + 'modal-box',
                html: $form
            })
            .css({
                top: '-' + parseInt(t.$btnPane.outerHeight()) + 'px',
                opacity: 0
            })
            .appendTo($modal)
            .animate({
                top: 0,
                opacity: 1
            }, t.o.duration / 2);


            // Append title
            $('<span/>', {
                text: title,
                class: pfx + 'modal-title'
            }).prependTo($box);


            // Focus in modal box
            $box.find('input:first').focus();


            // Append Confirm and Cancel buttons
            t.buildModalBtn('submit', $box);
            t.buildModalBtn('reset', $box);


            $(window).trigger('scroll');

            return $modal;
        },
        // @param n is name of modal
        buildModalBtn: function(n, modal){
            var t = this,
                pfx = t.o.prefix;

            return $('<button/>', {
                class: pfx + 'modal-button ' + pfx + 'modal-' + n,
                type: n,
                text: t.lang[n] || n
            }).appendTo(modal.find('form'));
        },
        // close current modal box
        closeModal: function(){
            var t = this,
                pfx = t.o.prefix;

            t.$btnPane.removeClass(pfx + 'disable');
            t.$overlay.off();

            var $modalBox = $('.' + pfx + 'modal-box', t.$box);

            $modalBox.animate({
                top: '-' + $modalBox.css('height')
            }, t.o.duration/2, function(){
                $(this).parent().remove();
                t.hideOverlay();
            });
        },
        // Preformated build and management modal
        openModalInsert: function(title, fields, cmd){
            var t = this,
                pfx  = t.o.prefix,
                lg = t.lang,
                html = '';

            for(var f in fields){
                var fd = fields[f], // field definition
                    label = (fd.label === undefined) ? (lg[f] ? lg[f] : f) : (lg[fd.label] ? lg[fd.label] : fd.label);

                if(fd.name === undefined)
                    fd.name = f;

                if(!fd.pattern && f === 'url'){
                    fd.pattern = /^(http|https):\/\/([\w~#!:.?+=&%@!\-\/]+)$/;
                    fd.patternError = lg.invalidUrl;
                }

                html += '<label><input type="'+(fd.type || 'text')+'" name="'+fd.name+'" value="'+(fd.value || '')+'"><span class="'+pfx+'input-infos"><span>'+label+'</span></span></label>';
            }

            return t.openModal(title, html)
            .on(pfx + 'confirm', function(){
                var $form = $(this).find('form'),
                    valid = true,
                    v = {}; // values

                for(var f in fields){
                    var $field = $('input[name="'+f+'"]', $form);

                    v[f] = $.trim($field.val());

                    // Validate value
                    if(fields[f].required && v[f] === ''){
                        valid = false;
                        t.addErrorOnModalField($field, t.lang.required);
                    } else if(fields[f].pattern && !fields[f].pattern.test(v[f])){
                        valid = false;
                        t.addErrorOnModalField($field, fields[f].patternError);
                    }
                }

                if(valid){
                    t.restoreSelection();

                    if(cmd(v, fields)){
                        t.syncCode();
                        t.closeModal();
                        $(this).off(pfx + 'confirm');
                    }
                }
            })
            .one(pfx + 'cancel', function(){
                $(this).off(pfx + 'confirm');
                t.closeModal();
                t.restoreSelection();
            });
        },
        addErrorOnModalField: function($field, err){
            var pfx = this.o.prefix,
                $label = $field.parent();

            $field.on('change keyup', function(){
                $label.removeClass(pfx + 'input-error');
            });
            $label
            .addClass(pfx + 'input-error')
            .find('input+span').append(
                $('<span/>', {
                    class: pfx +'msg-error',
                    text: err
                })
            );
        },




        // Selection management
        saveSelection: function(){
            var t = this,
                d = t.doc;

            t.selection = null;
            if(window.getSelection){
                var s = window.getSelection();
                if(s.getRangeAt && s.rangeCount)
                    t.selection = s.getRangeAt(0);
            } else if(d.selection && d.selection.createRange)
                t.selection = d.selection.createRange();
        },
        restoreSelection: function(){
            var t = this,
                range = t.selection;

            if(range){
                if(window.getSelection){
                    var s = window.getSelection();
                    s.removeAllRanges();
                    s.addRange(range);
                } else if(t.doc.selection && range.select)
                    range.select();
            }
        },



        // Return true if must enable Trumbowyg on this mobile device
        isEnabled: function(){
            var exprTablet = new RegExp("(iPad|webOS)"),
                exprMobile = new RegExp("(iPhone|iPod|Android|BlackBerry|Windows Phone|ZuneWP7)"),
                ua = navigator.userAgent;

            return (this.o.tablet === true && exprTablet.test(ua)) || (this.o.mobile === true && exprMobile.test(ua));
        }
    };
})(window, document, jQuery);

function addPush(object, type){
        var pushUrl = object.attr('data-href'),
            pushName = object.attr('title'),
            pushID = object.attr('id').replace('post_','');

        if(!pushUrl){
            pushUrl = object.attr('href');
        }

        history.pushState({url : pushUrl, name: pushName, ID: pushID, type: type}, pushID, pushUrl);
        document.title = pushName + ' · Faaborg Gymnasium';
}

function resetOldPush(){
            // Flyt gammel artikel tilbage, hvis den findes
            var prev = $('.reading');
            if(prev.length){
                prev.removeClass('reading');
                /*
                var order  = prev.data('post-order');
                var before = $('[data-post-order="'+(order -1)+'"]');

                prevHr = prev.next('hr');
                prev.insertAfter(before);
                prevHr.insertAfter(before);
                */
            }


}

function setPopstateReading(elem){

    // elem.next('hr').prependTo('.post-list');

    elem.addClass('reading');//


    if(elem.hasClass('mb-entry') || $('body').hasClass('single-nyt') || $('body').hasClass('archive-nyt')){

        elem.next('hr').prependTo('.post-list');
        elem.prependTo('.post-list');

    }


    $('html, body').delay(200).animate({scrollTop: elem.offset().top - $('#head').innerHeight()},200);

}


$(function(){


    window.onpopstate = function(event) {

        // Hvis popstate er tomt, genopfrisk siden
        if(!event.state){
            //location.reload();
        }

        // Hvis popstate type er 'nyt' eller 'medarbejder'
        else if(event.state.type === 'nyt' || event.state.type === 'medarbejder'){

            // Justér titel
            document.title = event.state.name + ' · Faaborg Gymnasium';


            resetOldPush(); // Fjern gammel artikel fra top
            setPopstateReading($('#post_'+event.state.ID)); // Tilføj ny artikel til top
        }
    };



    /* NYHEDSARKIV OG TEMA*/

    if($('.archive-entry.reading').length){


            $('.archive-entry.reading');//.next('hr').prependTo('.post-list');

            $('.archive-entry.reading');//.prependTo('.post-list');


         if($('body').hasClass('single-nyt') || $('body').hasClass('archive-nyt')){

                 $('.archive-entry.reading').next('hr').prependTo('.post-list');
                 $('.archive-entry.reading').prependTo('.post-list');

            }


            $('html, body').delay(200).animate({scrollTop: $('.archive-entry.reading').offset().top - $('#head').innerHeight()},200);

    }


    $('.archive-entry').click(function(e){
        if(!$('body').hasClass('post-type-archive-tema') && $(this).attr('id') !== 'content-add-btn' && $(this).attr('id') !== 'add-edit-content' && !$('body').hasClass('page') ){
        // Kun hvis ikke allerede vist
        if(!$(this).hasClass('reading')){

            resetOldPush(); // Fjern gammel artikel fra top
            addPush($(this),'nyt'); // tilføj pushstate til browser
            setPopstateReading($(this)); // Tilføj ny artikel til top
        }
        }
    });


    /* MEDARBEJDERE */

    if($('.mb-entry.reading').length){

        $('.mb-entry.reading').next('hr').prependTo('.post-list');

        $('.mb-entry.reading').prependTo('.post-list');

    }


    $('.mb-entry').click(function(e){

        // Kun hvis ikke allerede vist
        if(!$(this).hasClass('reading')){

            resetOldPush(); // Fjern gammel artikel fra top
            addPush($(this),'medarbejder'); // tilføj pushstate til browser
            setPopstateReading($(this)); // Tilføj ny artikel til top
        }
    });



    /* UNDERSIDER */

    $('.page .archive-entry').bind('click',function(){
        var path = $(this).attr('data-href');
        console.log(path);
        window.location = path;

    });
});




$(function(){
    if($('#slides .slide').length > 1){
        $('#slides').owlCarousel({

            items : 1,
            autoplay : true,
            autoplayTimeout : $('#slideshow').attr('data-duration'),
            smartSpeed : $('#slideshow').attr('data-transition'),
            autoplayHoverPause : false,
            dots: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            baseClass : "slide",
            theme : "owl-theme",
            lazyLoad : true,
            lazyFollow : true,
            lazyEffect : "fade",
            autoHeight : false,
            loop: true,

        });


        /* Klik på slider */
        $('#slides a.slide').click(function(event){
            event.preventDefault();
            var link = $(this).attr('href');
            var target = $(this).attr('target');

            if(link == ''){
                return false;
            }
            else{

                if(target === '_blank'){
                    window.open(link,'_blank');
                }

                else {
                    window.location = link;
                }

            }

        });
    }

});

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
/* smamoStatus Objekt til styring af spørgsmål / svar , faaborg gym
/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
var smamoStatus = {

    // Hent bruger
    getUser : function(){

        $.ajax({
            url : $('form').attr('action'),
            type : 'POST',
            data : 'action=get-user',
            dataType : 'json',
            success : function(response){
                smamoStatus.adjustGUI(response);
            },
        });


    },

    // Juster interface
    adjustGUI : function(response){

        if(!response.login){
            $('.status-comment textarea').attr('disabled','disabled');
            $('.user-info').hide();
            $('.status-comment input[type="submit"]').hide();

        }
        else{
            $('.status-comment a.login, .status-comment a.register').hide();
            $('.user-info span').html(response.login.name);
        }

    },

    // Send ny kommentar
    sendStatus : function(button){
        var form = button.parents('form'),
            url = form.attr('action');
            data = form.serialize();

        if(!form.hasClass('loading')){

            form.addClass('loading');

            $.ajax({
                url : url,
                type : 'POST',
                data : data,
                dataType : 'json',
                success : function(response){
                    smamoStatus.sendResponse(response,form);
                },
            });
        }
    },

    // Efter svar er oprettet
    sendResponse : function(response,form){

        form.removeClass('loading').find('textarea').val('');
        var textarea = form.find('textarea');

        var newPost = $('<div class="status-post" style="display:block;"></div>'),
            newContent = $('<span class="status-post-content"></span>'),
            newAuthor = $('<span class="status-post-author"></span>');

        newContent.html(response.msg);
        newAuthor.html(response.user.name);

        newPost.append(newContent,newAuthor);

        form.prev('.status-posts').append(newPost).append('<hr class="red" style="display:block;">');

    },

    // Registrering (prep)
    register : function(button){
        window.location.href = button.attr('href');
    },
    // Login (prep)
    login : function(button){
        window.location.href = button.attr('href');
    },
};


jQuery(function($){

    // hent bruger og juster gui (ved cachet resultat)
    smamoStatus.getUser();

    // Insdstil textareas til automiatisk størrelse
    autosize($('.status-comment textarea'));

    // Click listen
    $('.status-comment').on({

        click : function(e){
            var t = $(e.target);

            // Submit
            if(t.is('input[type="submit"]')){
                e.preventDefault();
                smamoStatus.sendStatus(t);
            }

            // login (prep)
            else if(t.is('a.login')){
                e.preventDefault();
                smamoStatus.login(t);
            }

            // registrering (prep)
            else if(t.is('a.register')){
                e.preventDefault();
                smamoStatus.register(t);
            }

        }
    });

    $('.status-post-count').on({
        click : function(e){
            e.preventDefault();
            var parent = $(this).parents('.status-posts');
            parent.find('.status-post').show();
            parent.find('hr').show();
            $(this).hide();
        }
    });

});

function owlslidePTPreviews(){

    var owl = $("#projekt-tema-preview");

    owl.owlCarousel({
        responsive : {

            0 : {
                items : 2,
            },

            480 : {
                items : 3,
            },

            768 : {
                items : 4,
            },

            960 : {
                items : 6,
            },


            1280 : {
                items : 8,
            },
        },

        pagination : false,
        dots: false,
        nav: false,
    });




}



function PTmakePreviews(obj){

    var container = $('#projekt-tema-preview');


    // Loop gennem obj
    for(key in obj){

        // Opret link
        var box = $('<a></a>');
        var div = $('<div></div>');
        box.addClass('pt-preview-box');
        box.addClass('pt-preview-theme-'+obj[key]['theme']);
        box.attr('data-post-id',obj[key]['id']);
        box.attr('href',obj[key]['url']);
        box.append(div);



        // Opret baggrundsbillede


        var img = obj[key]['img'];

        if(obj[key]['img_should_filter'] == true){

            box.addClass('image-filter');

        }

        if(img !== null){
            box.css('background-image','url('+img+')');
        }

        // Opret titel
        var title = $('<div class="title"></div>');
        var span  = $('<span></span>');
        span.html(obj[key]['title']);
        title.append(span);
        div.append(title);

        // tilføj til headeren
        container.prepend(box);

    }

    container.removeClass('top');
    owlslidePTPreviews();
    addFilteredImages();
}

function addFilteredImages(){

$('.pt-preview-box').each(function(){

    if($(this).hasClass('image-filter')){

        var img = $(this).css('background-image').replace('url(','').replace(')','');
        var elem = $(this);

        $.ajax({
            type: "POST",
            url: wpURL + '/async/image-filter.php',
            dataType: 'json',
            data: {'img':img},
            success: function(response){

                var preload = $('<img src="'+response.img+'"/>');

                preload.load(function(){
                    elem.css({'background-image':'url('+response.img+')'});
                    elem.children('div').css({'background-color':'transparent','background-image':'none'});
                });

            }
        });

    }

});

}



$(function(){

    if($('#projekt-tema-preview').length){

      $.ajax({
            type: "POST",
            url: wpURL + '/async/projekt-tema-preview.php',
            dataType: 'json',
            data: '',
            success: function(response){

                if (!response.error){

                    PTmakePreviews(response);

                }

                else{

                    console.log(response.error)

                }
            }
        });


    }


}); // End ready

/* REVAMPED: opret og rediger indlæg inline på faaborg-gym.dk */


function sendData(){

    var editContent;
    if(tinyMCE.activeEditor){
        editContent = tinyMCE.activeEditor.getContent();

    }

    else{
        editContent = $('#smamo_front_editor').val();
    }

    var data = {

            image : getThumbID(),
            postID : getID(),
            title : $('.fg-editor form input[name="title"]').val(),
            subheading : $('.fg-editor form input[name="subheading"]').val(),
            type : 'tema-post',
            theme_id : $('.fg-editor form input[name="theme_id"]').val(),
            content : editContent,

        },
        urlData = $.param(data),
        postUrl = $('.fg-editor form').attr('action');

    if(data.title === ''){

        alert('Føj en titel til dit indlæg inden du gemmer');
        $('.fg-editor .submit.loading').toggleClass('loading');

    }

    else if(data.content === ''){

        alert('Føj et indhold til dit indlæg inden du gemmer');
        $('.fg-editor .submit.loading').toggleClass('loading');
    }

    else{

        $.ajax({
            url : postUrl,
            type : 'POST',
            data : urlData,
            dataType : 'json',
            success : function(response){

               window.location.href = response.href;

            },
        });
    }
}

function deletePost(id){

    var data = {

        id : getID(),
        type : 'tema-post',
        theme_id : $('.fg-editor form input[name="theme_id"]').val(),
    },
    urlData = $.param(data);

    $.ajax({
        url : wpURL + '/async/delete-post.php',
        type : 'POST',
        data : urlData,
        dataType : 'json',
        success : function(response){

            window.location.href = response.href;

        },
    });

}

/* Vi bruger felter fra TinyMCE, så vi laver fire hjælpefunktioner til at tappe ind i systemet */
var setID = function(id){wp.media.view.settings.post.id = id;}
var setThumbID = function(id){wp.media.view.settings.post.featuredImageId = id;}
var getID = function(){ return wp.media.view.settings.post.id;}
var getThumbID = function(){return wp.media.view.settings.post.featuredImageId;}



/* Click handlers */
jQuery(function($){

    $('#page-center').on('click',function(e){

        // find target og gem i target
        var target = $(e.target);

        // Toggle new
        if(target.is('.single-tema-post .toggle-new') || target.is('.single-tema .toggle-new')){

            e.preventDefault();

            target.toggleClass('editor-active');

            $('.fg-editor').removeClass('inactive').children('.submit').html('Opret nyt indlæg');

            $('html,body').animate({scrollTop: $('.fg-editor').offset().top - 20});

            // Fjern værdier fra tinyMCE - klar til at oprette ny //
            setID(-1);
            setThumbID(-1);

            $('.fg-editor form input[name="title"]').val('');
            $('.fg-editor form input[name="subheading"]').val('');


        }


        // Submit
        else if(target.is('.single-tema-post .fg-editor .submit') || target.is('.single-tema .fg-editor .submit')){
            e.preventDefault();

            if(target.hasClass('loading')){}
            else{

                target.toggleClass('loading');
                sendData();
            }
        }


        // Slet
        else if(target.is('#page-center .dashicons-trash')){
            e.preventDefault();

            setID(target.closest('.edit-delete').attr('id').replace('edit-',''));

            if(confirm("Er du sikker på du vil flytte indlægget til papirkurven?")){

                deletePost(getID());

            }

        }

        // Rediger
        else if(target.is('#page-center .dashicons-edit')){
            e.preventDefault();

            setID(target.closest('.edit-delete').attr('id').replace('edit-',''));
            setThumbID(-1);

            var editPost = $('#post_'+getID()),
                editTitle = editPost.find('.preread-inner h4').html(),
                editSubheading = editPost.find('.preread-inner h6').html(),
                editContent = editPost.find('.archive-content').html(),
                editThumbID = editPost.find('.archive-img').attr('data-attachment');


            if(tinyMCE.activeEditor){

                tinyMCE.activeEditor.setContent(editContent);

            }

            else{
                $('#smamo_front_editor').val(editContent);
            }

            editPost.hide().nextAll('.archive-entry, .red').insertAfter('.fg-editor').animate({'opacity':.4},300).addClass('disabled');
            editPost.prevAll('.archive-entry, .red').animate({'opacity':.4},300).addClass('disabled');

            $('.archive-entry').unbind('click');

            $('.toggle-new').toggleClass('editor-active');
            $('.fg-editor').removeClass('inactive').children('.submit').html('Opdater indlæg');

            $('.fg-editor input[name="title"]').val(editTitle);
            $('.fg-editor input[name="subheading"]').val(editSubheading);

            $('html,body').animate({scrollTop: $('.fg-editor').offset().top - 40},100);
        }

        // Annuller
        else if(target.is('#page-center .cancel')){
            e.preventDefault();

            location.reload();
        }

    });

});

function UrlExists(url) {
    if(url){
        var req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send();
        return req.status==200;
    } else {
        return false;
    }
}

function renderFilteredImageSrc(image,callback){
    var href = image.attr('src');

    $.ajax({
        type: "POST",
        url: ajaxURL,
        dataType: 'json',
        data: {
            img : href,
            action : 'filter_image',
        },
        success: function(response){

            var preload = $('<img src="'+response.img+'"/>');

            preload.load(function(){
                image.attr('src',response.img);
            });

            if(typeof callback === 'function'){
                callback();
            }
        }
    });
}

function replaceImageWithFiltered(image,callback){
    var href = image.attr('src'),
        filename = href.substring(href.lastIndexOf('/')+1),
        altHref = baseURL + '/media/filtered/' + filename;

    if(href.indexOf(baseURL) === -1){
        // Do nothing, i guess...

    }

    else if(UrlExists(altHref) && filename !== ''){
        image.attr('src', altHref);
        image.removeClass('getting-filtered');
    }

    else if(filename !== ''){
        renderFilteredImageSrc(image,function(){
            image.removeClass('getting-filtered');
        });
    }
}

$('.filter img, #page-center img, .smamo_img_widget img').addClass('getting-filtered').each(function(){
    replaceImageWithFiltered($(this));
}).promise().done( function(){

    $('.ubermenu-image').each(function(){
        replaceImageWithFiltered($(this));
    });
});


$(function() {

    var listStyle = Math.floor(Math.random()*(10-1+1)+1), nlistStyle;
    $('#page-center li').each(function(){

        $(this).attr('data-list-style',listStyle);

        nlistStyle = Math.floor(Math.random()*(10-1+1)+1);
        if (nlistStyle === listStyle){nlistStyle ++;}
        listStyle = nlistStyle;
    });
});


function smamoSetCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function smamoGetCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


function makeCookieNotificationElement(){

    var cn = $('<div id="cookie-notify"></div>');

    var cnDIV = $('<div></div>');

    var cnSpan = $('<span>Faaborg Gymnasiums hjemmeside anvender cookies</span>');

    var cnLink = $('<a href="http://faaborg-gym.dk/cookie/">Læs mere</a>');

    var ok = $('<a id="cookieOK" href="#">Godkend</a>');


    cnDIV.append(cnSpan);
    cnDIV.append(ok);
    cnDIV.append(cnLink);

    cn.append(cnDIV);

    cn.appendTo('body').animate({opacity:.9},1000);

    ok.click(function(e){
        e.preventDefault();
        smamoSetCookie('cookieOK','true',365);
        cn.remove();
    });

}


jQuery(function($){
    var cookieOK = smamoGetCookie("cookieOK");
    if (cookieOK != "") {} else {makeCookieNotificationElement();}
});

$(function(){

    $('.mb-entry .dropdown').on('click',function(e){
        e.preventDefault();
        var div = $(this),
            target = $(e.target);

        if(target.is('h6 strong') || target.is('h6')){

            if(div.hasClass('active')){

                div.children('p').slideUp(100);
                div.removeClass('active');

            }

            else{
                div.children('p').slideDown(100);
                div.addClass('active');
            }
        }
    });

});

$(function(){

    if($(".gallery").length){

        $('.gallery a.gallery-item').addClass('fancybox');


        $(".fancybox").fancybox({
            closeClick	: true,
            helpers : {
                overlay : {
                    css : {
                        'background' : 'rgba(33, 33, 33, 0.65)'
                    },
                },
                loading :{
                    css : {

                    }
                }

            }
        });

    }
});

// Initiate object
var smamo_instagram = {};

smamo_instagram.fetchImages = function(elem, num, callback){


    var ajaxUrl = elem.attr('data-fetch-url'),
        hashtag = elem.attr('data-hashtag');

    $.ajax({
        url : ajaxUrl,
        type : 'POST',
        data : {
            action : 'fetch-instagram',
            hash : hashtag,
            num : num
        },
        dataType : 'json',
        success : function(response){

            if(typeof callback === 'function'){
                callback(response);
            }

        },
    });

}

// Construct images
smamo_instagram.makeImg = function(object,callback){

    var a = object.images;

    var cb = '';
    for (var i = 0; i < a.length; ++i) {
       cb += '<li class="inst-img"><a target="_blank" href="'+a[i].link+'" style="background-image:url('+a[i].images.low_resolution.url+');"></a></li>';
    }

    if(typeof callback === 'function'){
        callback(cb);
    }
};

// Initter
smamo_instagram.init = function(){

    $('.instagram-box').each(function(){
        var elem = $(this);

        smamo_instagram.fetchImages(elem, 2, function(response){

            smamo_instagram.makeImg(response,function(cb){
                elem.children('ul').html(cb);
            });
        });
    });
};



$(function(){
    smamo_instagram.init();

    $('.instagram-box').off().on({click: function(e){

        var box = $(this),
            ul = box.children('ul');
            t = $(e.target);

        if(t.is('.news-more-btn')){
            e.preventDefault();
            if(!ul.hasClass('expand')){t.html('Vis færre billeder')}
            else{t.html('Vis flere billeder')}
            ul.toggleClass('expand');
            $('html,body').animate({scrollTop : box.offset().top},500);
        }
    }});
});

$(function(){

    $('.gallery a.show-more-btn').click(function(e){
        e.preventDefault();

        var g = $(this).parents('.gallery');

        if(g.hasClass('open')){
            $(this).html('Åbn album');
            g.removeClass('open');
            g.children('.item-plchld').slideUp(100);


        }

        else{
            $(this).html('Luk album');
            g.addClass('open');

            g.children('.item-plchld').each(function(){


                var anchor = $(this),
                    img = new Image();
                anchor.slideDown(100);

                if(!anchor.hasClass('loaded')){
                    img.src = anchor.attr('data-thumb');
                    img.onload = function(){
                        anchor.html(img).addClass('loaded');
                    }
                }
            });

        }
    });
});

var player,
    loop_s,
    loop_e,
    loop_timer,
    isFullscreen = false,
    isIOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform.replace(' Simulator', '')) >= 0;

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length===11){
        return match[7];
    }else{
        return false;
    }
}

function playFullVideo(){
    isFullscreen = true;

    player.seekTo(0);
    player.unMute();
    player.playVideo();
    clearInterval(loop_timer);

    if(!isIOS){$('.video-banner').addClass('playFullVideo');

        $(window).on('keyup',function(e){
            if(e.keyCode === 27){
                isFullscreen = false;
                onPlayerReady();
            }

        }).on('click','knapnavn',function(){

            isFullscreen = false,
                onPlayerReady();
        });
    }
}

function onFullScreenChange() {
    var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    if(fullscreenElement === null){
        isFullscreen = false;
        onPlayerReady();

    }
}


function onPlayerReady() {
    $('.video-banner').removeClass('playFullVideo');

    if(isIOS){
        $('#ytplayer').css('opacity','0');
        $('.video-container').addClass('playing');
    }
    player.mute();

    if(typeof loop_s !== 'undefined' && !isFullscreen){

        player.seekTo(loop_s);
        player.playVideo();

        if(loop_e > 0){
            loop_timer = setInterval(function(){
                player.seekTo(loop_s);
            },loop_e * 1000);
        }
    }

    else{
        player.playVideo();
    }
}




if($('.home .video-container').length){


    document.addEventListener("fullscreenchange", onFullScreenChange, false);
    document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
    document.addEventListener("mozfullscreenchange", onFullScreenChange, false);
    $('#ytplaybtn').on('click', function(e){e.preventDefault();});
    document.getElementById('ytplaybtn').addEventListener('click', playFullVideo);

    var $ytplayer = $('#ytplayer'),
        $wrapper = $('.video-container');

    loop_s = parseInt($ytplayer.attr('data-loop-s'));
    loop_e = parseInt($ytplayer.attr('data-loop-e'));

    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    function onYouTubePlayerAPIReady() {

        player = new YT.Player('ytplayer', {
            videoId : youtube_parser($ytplayer.attr('data-src')),
            modestbranding : 1,
            controls : 0,
            showinfo : 0,
            events : {

                'onReady': onPlayerReady,
                'onStateChange' : function(e){

                    if (e.data === YT.PlayerState.PLAYING) {
                        $wrapper.addClass('playing');
                    }

                    if (e.data === YT.PlayerState.ENDED) {
                        onPlayerReady();
                    }
                }
            }
        });

    }

}


$(function(){
    var topbar = $('#topbar');
    if(topbar.length){
        setTimeout(function(){
            topbar.removeClass('loading top');
        },400);
    }

    $('body').on('click','.topbar-search-icon',function(e){
        e.preventDefault();
        var form = $(e.target).parents('form'),
            topbar = form.parents('section'),
            input = form.find('input[name="s"]');
        if(input.val() !== '' && form.hasClass('active')){
            form.submit();
        }

        else if(!form.hasClass('active')){

            topbar.addClass('search-active');
            form.addClass('active');
            input.focus();

        }
    });
});


