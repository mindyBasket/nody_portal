var UniBox=function(){var B=-1;var u;var e;var i;var f="";var p="";var H=-80;var J;var a;var l=[];var R=true;var r;var g;var s=300;var o="";var m=2;var x;var v;var O;var d;var c;var E;var P=[];var t="all";var C=-1;var A="";var b=false;var N=[];var j=[];var w=undefined;var T=undefined;var Q=true;var U=undefined;var D=undefined;var V=true;var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function M(X){X=X||window.event;if(X!==undefined){var Y=X.keyCode||X.which;var Z=u.val();if(Y==27||Y==13||Y==9||(Z.length<m&&U==undefined)){z(X);if(Y==13&&x!==undefined&&B==-1){x.call(this,Z)}B=-1}}else{z(X);B=-1}}function z(Y){if(c!==undefined&&i.hasClass("uniboxActive")){try{c.call(this,Y,u.val())}catch(X){console.log(X)}}jQuery("#ss360Darken-input").remove();i.removeClass("uniboxActive");i.slideUp(s);q()}function I(Y,X){var Z=null;return function(){var ab=this,aa=arguments;clearTimeout(Z);Z=window.setTimeout(function(){Y.apply(ab,aa)},X||50)}}function K(Y,X){if(!R||Y==undefined||X==undefined){return Y}var ae=X.replace(/[^a-zA-Z0-9Ã¤Ã¶Ã¼Ã„Ã–ÃœÃŸ]|\s+|\r?\n|\r/gmi," ").replace(/[^a-zA-Z0-9Ã¤Ã¶Ã¼Ã„Ã–ÃœÃŸ]/g," ").split(" ");ae.sort(function(ag,af){return af.length-ag.length});var ad={};jQuery.each(ae,function(af,ak){if(ak.length<1){return}var aj=Y.match(new RegExp("(("+ak+")(?!#<##|-\\d+#<##))(?!.*\\1)","gi"));if(aj!=null){for(var ai=0;ai<aj.length;ai++){var ah=aj[ai];var ag=ah.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");Y=Y.replace(new RegExp("("+ag+")(?!#<##|-\\d+#<##)","g"),"##>#"+af+"-"+ai+"#<##");ad["##>#"+af+"-"+ai+"#<##"]='<span class="unibox-highlight">'+ah+"</span>"}}});var ab=Object.keys(ad).reverse();for(var Z=0;Z<ab.length;Z++){var ac=ab[Z];var aa=ad[ac];Y=Y.replace(new RegExp(ac,"gi"),aa)}return Y}function S(X){return X.replace(/[ "Â§$%&/(){}+*,.;|]/g,"_").toLowerCase()}function y(X){return String(X).replace(/[&<>"'\/]/g,function(Y){return n[Y]})}function W(ac){if(C==13){M();return}var Y=u.val();var ad=y(Y);i.html("");var aa=false;var X=false;var ab=Object.keys(ac.suggests);if(N&&N.length>0){ab=N;jQuery.each(Object.keys(ac.suggests),function(ae,af){if(jQuery.inArray(af,ab)<0){ab.push(af)}})}jQuery.each(ab,function(ae,ah){var ag=ac.suggests[ah];if(!ag||ag.length==0){return true}var af=0;jQuery.each(ab,function(ak,am){var al=ac.suggests[am];if(!al||ah===am||al.length==0){return true}af+=al.length});var aj=jQuery('<div class="unibox-suggest-cluster unibox-suggest-'+S(ah)+" "+("unibox-"+ag.length+"-entries")+" "+(af==0?"unibox-single-suggestion-block":"")+'"></div>');if(ah.replace(/_/,"").length>0&&ag.length>0){var ai=jQuery("<h4>"+ah+"</h4>");aj.append(ai)}jQuery.each(ag,function(av,at){var ap='<div class="unibox-selectable">';if(at.image!=undefined&&Q){var ax=at.image.length===0&&J?J:at.image.length===0||at.image.indexOf("/")===0||at.image.indexOf("http")===0?at.image:p+at.image;ap+='<div class="unibox-selectable-img-container"><img src="'+ax+'"';var aq=new Image();aq.src=ax;if(!aq.complete){ap+=' style="display: none;" onload="this.style.display=null;"'}ap+="/></div>"}if(at.link!=undefined&&at.link!=""){ap+='<a class="uniboxSearchContent" href="'+at.link+'">';ap+=K(at.name,ad);ap+="</a>"}else{if(at.name!=undefined&&at.name!=""){ap+='<span class="uniboxSearchContent">'+K(at.name,ad)+"</span>"}}if(at.content!=undefined&&at.content!=""){ap+='<p class="unibox-result-content">'+K(at.content,ad)+"</p>"}if(at.html!=undefined&&at.html!=""){var ay=at.html.match(new RegExp(/<a href=["'].*?["']>.*?<\/a>/,"i"));if(ay!=undefined&&ay.length>0){ap+=ay[0]}}if(r!=undefined){var au=r.match(/##(.*?)##/gi);var ao=r;var am=false;for(var an=0;an<au.length;an++){var ar=au[an];if(ar===undefined||ar.length==0){continue}var al=ar.replace(/#/g,"");var ak=at[al];if(ak==undefined){am=true;continue}var az=new RegExp(ar,"g");ao=ao.replace(az,ak)}if(!am){ap+='<div class="unibox-extra">'+ao+"</div>"}}ap+='<div class="unibox-ca"></div></div>';if(g!==undefined){ap=g.call(this,ap,ah,av,at)}var aw=jQuery(ap);aj.append(aw);aa=true});i.append(aj)});if(ac.plan=="FREE"){i.append('<div><a href="https://sitesearch360.com"><img style="max-width:150px;float:right;" src="https://sitesearch360.com/cdn/sitesearch360.svg"></a></div>')}l=e.find(".unibox-selectable");if(j&&j.length>0){l=[];jQuery.each(j,function(ae,af){l=l.concat(e.find(".unibox-suggest-"+S(af)+":first .unibox-selectable").get())});jQuery.each(jQuery.grep(Object.keys(ac.suggests),function(ae){if(j.indexOf(ae)<0){return true}}),function(ae,af){l=l.concat(e.find(".unibox-suggest-"+S(af)+":first .unibox-selectable").get())})}B=-1;jQuery(l).mousedown(function(){var ag=jQuery(this).find(".uniboxSearchContent:first").text();u.val(ag);var ae=undefined;try{ae=jQuery(this).find("a:first").attr("href")}catch(ah){}if(v!=undefined){try{v.call(this,ag,ae)}catch(af){console.log(af)}}M()});e.find(".unibox-selectable .unibox-extra").click(function(ae){ae.stopPropagation()});if(ac.words!=undefined){if(ac.words.length>0&&o.length>0&&(t=="all"||t=="bottom")){i.append("<h4>"+o+"</h4>");aa=true}var Z=[];jQuery.each(ac.words,function(af,ai){if((t=="all"||t=="bottom")){if(ai.overlayImage!=undefined){i.append('<img class="unibox-vis" src="'+p+ai.overlayImage+'" style="background-image: url(\''+p+ai.image+"');background-size: 75%;background-repeat: no-repeat;background-position: center;\">")}else{if(ai.image!=undefined){i.append('<img class="unibox-vis" src="'+p+ai.image+'">')}}}var ah=e.find("#unibox-invisible");ah.css("padding",u.css("padding"));ah.html(ad.replace(new RegExp(ai.name,"gi"),"<span>"+ai.name+"</span>"));if((t=="all"||t=="top")&&jQuery.inArray(ai.image,P)==-1){var ag=e.find("#unibox-invisible span")[0];if(ag!=undefined&&ai.name.length>0&&ai.image!=undefined){var ae=jQuery(ag).position().left;visImage=jQuery('<div class="unibox-ivf"><img src="'+p+ai.image+'" alt="'+ai.name+'"></div>');visImage.css("left",k().left+ae-10);visImage.css("top",k().top-u.outerHeight()+H);e.append(visImage);setTimeout(function(){e.find(".unibox-ivf").find("img").addClass("l")},10);Z.push(ai.image)}}else{if(jQuery.inArray(ai.image,P)>-1){Z.push(ai.image)}}});P=Z}jQuery("img").on("error",function(){if(J){jQuery(this).attr("src",J)}else{jQuery(this).hide()}});h();if(T!=undefined&&!aa){aa=true;X=true;i.append(T)}if(aa){if(i.is(":visible")){i.addClass("uniboxActive");i.css("left",k().left);i.css("top",k().top)}else{i.slideDown(s,function(){i.addClass("uniboxActive");i.css("left",k().left);i.css("top",k().top)})}if(D&&!X){i.append(D)}}else{M()}}function k(){return{left:u.offset().left-e.offset().left,top:u.offset().top-e.offset().top+u.outerHeight()}}function G(){var Y=e.find(".unibox-ivf img").map(function(){return jQuery(this).attr("src")}).get();for(var X=0;X<Y.length;X++){if(jQuery.inArray(Y[X].replace(p,""),P)==-1){e.find('.unibox-ivf:has(img[src*="'+Y[X]+'"])').remove()}}}function q(){P=[];e.find(".unibox-ivf").remove()}function L(Y){if(u.val().length<=1){q()}if(O!=undefined){try{O.call(this,Y,u.val())}catch(ae){console.log(ae)}}if(Y.keyCode!=37&&Y.keyCode!=38&&Y.keyCode!=39&&Y.keyCode!=40&&Y.keyCode!=13){G();return}if(Y.keyCode==38&&B>0){B--}else{if(Y.keyCode==40){B++}else{if(Y.keyCode==38&&B<=0){B=((B!=-1)?B-1:B)+l.length}else{if((Y.keyCode==37||Y.keyCode==39)&&B>-1){B=B%l.length;var ab=jQuery(l[B]);var af=ab.closest(".unibox-suggest-cluster");var Z;if(Y.keyCode==37){Z=af.prev()}else{if(Y.keyCode==39){Z=af.next()}}if(Z.hasClass("unibox-suggest-cluster")){var ag=Z.find("div.unibox-selectable")[0];B=jQuery("#unibox-suggest-box div.unibox-selectable").index(ag)}}}}}if(l.length>0&&B>-1){B=B%l.length;jQuery(l).removeClass("active");var ac=jQuery(l[B]);ac.addClass("active")}if(Y.keyCode==13){Y.preventDefault();Y.stopPropagation();if(v!=undefined){var aa=u.val();var X=undefined;if(B!=-1){aa=e.find(".unibox-selectable.active .uniboxSearchContent:first").text();u.val(aa);try{X=jQuery(e.find(".unibox-selectable.active")[0]).find("a").attr("href")}catch(ad){}if(v!=undefined){try{v.call(this,aa,X)}catch(ae){console.log(ae)}}}}else{if(B!=-1){window.location.href=jQuery(e.find(".unibox-selectable.active")[0]).find("a").attr("href")}}return false}if(B>-1){Y.preventDefault()}}function F(X){if(C==18){C=X.keyCode;return}C=X.keyCode;if(((X.keyCode==37||X.keyCode==39)&&B>-1)||X.keyCode==38||X.keyCode==40||X.keyCode==13||X.keyCode==9){return}var Y=u.val();if(C==46&&Y.length==0){q()}if(Y.length>=m&&f!=""){A=Y;jQuery.ajax({usedQuery:Y,url:f+encodeURIComponent(Y),dataType:"json",success:function(Z){if(this.usedQuery==A){W(Z)}}})}}function h(){var Y=jQuery("#unibox-suggest-box");var X=Y.css("border-width").replace("px","");Y.css("min-width",u.outerWidth()-2*X);if(w==undefined){Y.css("max-width",u.outerWidth()-2*X)}else{Y.css("max-width",w-2*X)}Y.css("left",k().left);Y.css("top",k().top)}return{updateSuggests:function(X){W(X)},updateSuggestUrl:function(X){f=X},hideSuggestBox:function(){M()},setIvfImagePath:function(X){p=X;if(p.charAt(p.length-1)!="/"){p+="/"}},changeInstantVisualFeedbackState:function(X){t=X},render:function(){h()},getText:function(){return u.val()},init:function(ak,am){u=ak;e=am.searchBoxContainer;R=am.highlight;r=am.extraHtml;g=am.lineCallback;f=am.suggestUrl;p=am.ivfImagePath;H=am.ivfImageOffset;J=am.missingErrorImage;a=am.throttleTime;s=am.animationSpeed;m=am.minChars;x=am.enterCallback;v=am.enterCallbackResult;O=am.typeCallback;d=am.focusCallback;c=am.blurCallback;E=am.placeholder;t=am.instantVisualFeedback;o=am.queryVisualizationHeadline;b=am.showDeleteAllButton;Q=am.showImagesSuggestions;N=am.suggestOrder;j=am.suggestSelectionOrder;w=am.maxWidth;T=am.noSuggests;U=am.emptyQuerySuggests;D=am.showMoreResults;V=am.disableEventPropagationHtml;u.attr("autocomplete","off");i=jQuery('<div id="unibox-suggest-box"></div>');e.prepend(i);var ai=e.css("position");if(ai!="absolute"){e.css("position","relative")}var ad=i.css("border-width").replace("px","");i.css("min-width",u.outerWidth()-2*ad);i.css("max-width",am.maxWidth-2*ad);u.keydown(L);u.keydown(I(F,a));u.keyup(M);u.focus(function(ao){ao=ao||window.event;ao.stopPropagation();if(jQuery(this).val().length>0){F({keyCode:-1})}else{if(U!=undefined){W(U)}}if(d!==undefined){try{d.call(this,ao,jQuery(this).val())}catch(an){console.log(an)}}});i.mouseenter(function(){i.find(".unibox-selectable.active").removeClass("active")});jQuery("html").click(function(ao){try{if(ao!=undefined&&jQuery(ao.target).attr("id")==u.attr("id")){return}}catch(an){console.log(an)}if(i.hasClass("uniboxActive")){z(ao)}});u.keydown(function(ao){ao=ao||window.event;var an=ao.keyCode||ao.which;if(an==9){z(ao)}});u.focusout(function(an){an=an||window.event;setTimeout(function(){if(jQuery(document.activeElement).parents("#unibox-suggest-box").length===0){z(an)}},10)});if(V){u.click(function(an){an.stopPropagation()});i.click(function(an){an.stopPropagation()})}var Y=u.attr("placeholder");E=Y&&Y.length>0?Y:E;if(E&&E.length>0){var af=document.createElement("input");if(!("placeholder" in af)){u.focus(function(){var an=jQuery(this).attr("placeholder");if((an)&&(an.length>0)&&(an!="")&&jQuery(this).val()==an){jQuery(this).val("").removeClass("hasPlaceholder")}}).blur(function(){var an=jQuery(this).attr("placeholder");if((an)&&(an.length>0)&&(an!="")&&(jQuery(this).val()==""||jQuery(this).val()==an)){jQuery(this).val(an).addClass("hasPlaceholder")}});u.val(E)}u.attr("placeholder",E)}var al=jQuery('<div id="unibox-invisible">&nbsp;<span>&nbsp;</span></div>');e.append(al);if(b){var aj=jQuery('<div id="unibox-dab-holder"><div id="unibox-dab"></div></div>');e.append(aj);jQuery(aj).mousedown(function(an){(an||window.event).stopPropagation();u.val("");u.focus();return false});u.focus(function(){if(u.val().length>0){aj.show()}else{aj.hide()}}).blur(function(){aj.hide()}).keydown(function(){if(jQuery(this).val().length>0){jQuery(aj).show()}});var ah=parseInt(u.css("paddingTop").replace("px","").trim());var ag=u.outerHeight();var ae=parseInt(u.css("borderTopWidth").replace("px","").trim());var ab=u.css("boxShadow").match(/\d{1,3}px/g);var aa=(ab&&ab.length>2)?parseInt(ab[2].replace("px","").trim()):0;aj.height(ag-(2*ae)-aa-ah);var X=parseInt(u.css("paddingRight").replace("px","").trim());X=(X>25)?X:25;u.css("paddingRight",X);var ac=ae+aa+(u.offset().top-u.parent().offset().top-u.parent().scrollTop());var Z=Math.abs(u[0].getBoundingClientRect().left-u.parent()[0].getBoundingClientRect().left)+u.outerWidth()-aj.outerWidth()-ae-X;aj.css("top",ac);aj.css("left",Z)}if(t=="none"){jQuery("#unibox-invisible").css("display","none")}}}};var SS360=function(){var q;var r;var s=[];var t;var c;var g=true;var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};var i=0;function k(){jQuery("#ss360-searchbox-spinner").fadeIn()}function h(){jQuery("#ss360-searchbox-spinner").fadeOut()}function o(){var u=new Date().getTime()-i;i=0;return u}function n(u){return String(u).replace(/[&<>"'\/]/g,function(v){return d[v]})}function e(u){return u.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function b(v){if(ss360Settings.showErrors!=undefined&&ss360Settings.showErrors==true){jQuery(".ss360DevError").remove();var u=jQuery('<div class="ss360DevError" style="padding:10px;width:100%;position:fixed;bottom:0;left:0;background-color:#C1063F;color:white;"><b>Site Search 360 Error:</b> '+v+"</div>");jQuery("body").append(u)}h()}function f(v){if(ss360Settings.externalTracking===undefined){return}var u=true;if(!!ss360Settings.externalTracking.searchCallback&&typeof ss360Settings.externalTracking.searchCallback=="function"){u=ss360Settings.externalTracking.searchCallback.call(this,v)!==false}if(u){j(v);if(ss360Settings.externalTracking.providers.indexOf("GA")>-1){if(!!window.ga){ga("send","pageview")}}}}function j(u){var v="?ss360Query="+encodeURI(u);if(ss360Settings.externalTracking.providers.indexOf("GA")>-1){m(v)}if(ss360Settings.externalTracking.providers.indexOf("GTM")>-1){p(v)}}function m(u){if(!!window.ga){ga("set","page",u)}}function p(u){if(!!window.dataLayer){dataLayer.push({event:"VirtualPageview",category:"search",virtualPageURL:u,virtualPageTitle:document.title})}}function l(w,x,y){var u;if(y){var v=new Date();v.setTime(v.getTime()+(y*24*60*60*1000));u="; expires="+v.toGMTString()}else{u=""}document.cookie=encodeURIComponent(w)+"="+encodeURIComponent(x)+u+"; path=/"}function a(v){var x=encodeURIComponent(v)+"=";var u=document.cookie.split(";");for(var w=0;w<u.length;w++){var y=u[w];while(y.charAt(0)===" "){y=y.substring(1,y.length)}if(y.indexOf(x)===0){return decodeURIComponent(y.substring(x.length,y.length))}}return null}return{changeConfig:function(u,v){ss360Settings[u]=v;if(u=="searchResults"){r=v}},setSiteId:function(u){if(c!=undefined){this.updateSuggestionUrl(c.replace("site="+q,"site="+u))}q=u},updateSuggestionUrl:function(v){c=v;for(var u=0;u<s.length;u++){s[u].updateSuggestUrl(v)}},closeLayer:function(){if(r==undefined){var u=jQuery("#ss360-layer");jQuery("#ss360Darken").remove();u.removeClass("animated bounceIn fadeInDown");u.addClass("animated bounceOut");setTimeout(function(){jQuery("#ss360-layer").fadeOut()},500)}},init:function(){var y=true;var F=ss360Settings.searchBoxSelector;var w=jQuery(F);if(w.length==0){b('There is no input element for the searchBoxSelector "'+F+'". Please update your ss360Config object.');y=false}if(ss360Settings.enterCallback!=SS360.showResults){var A=ss360Settings.enterCallback;ss360Settings.enterCallback=function(I){SS360.logQuery(I,"search");try{A.call(this,I)}catch(H){console.log(H)}}}if(ss360Settings.focusCallback!=SS360.focus){var v=ss360Settings.focusCallback;ss360Settings.focusCallback=function(I,J){SS360.focus(I,J);try{v.call(this,I,J)}catch(H){console.log(H)}}}if(ss360Settings.blurCallback!=SS360.blur){var B=ss360Settings.blurCallback;ss360Settings.blurCallback=function(I,J){SS360.blur(I,J);try{B.call(this,I,J)}catch(H){console.log(H)}}}var x=jQuery(F).unibox(ss360Settings);if(x instanceof Array){s=x}else{s.push(x)}if(ss360Settings.searchButton!=undefined){var G=s[0];jQuery(ss360Settings.searchButton).click(function(I){try{ss360Settings.enterCallback.call(this,G.getText())}catch(H){console.log(H)}I.preventDefault();I.stopPropagation()})}if(ss360Settings.autofocus){setTimeout(function(){jQuery(F).focus()},200)}q=document.location.host;if(ss360Settings.siteId!=undefined){q=ss360Settings.siteId}if(ss360Settings.showSearchSuggestions){var E="https://api.sitesearch360.com/sites/suggest?site="+q+"&limit="+ss360Settings.numSuggestions;if(ss360Settings.suggestionsEqualSearch){E=E.replace("/sites/suggest","/sites");E+="&includeContent=true&log=false"}if(ss360Settings.includeContentGroups!=undefined){E+="&includeContentGroups="+encodeURIComponent(JSON.stringify(ss360Settings.includeContentGroups))}if(ss360Settings.excludeContentGroups!=undefined){E+="&excludeContentGroups="+encodeURIComponent(JSON.stringify(ss360Settings.excludeContentGroups))}E+="&query=";this.updateSuggestionUrl(E)}else{this.updateSuggestionUrl("")}var z=jQuery('<div id="ss360-layer" style="display:none"></div>');var u=jQuery("body");u.append(z);u.keydown(function(H){if(H.keyCode==27&&r==undefined){z.removeClass("animated bounceIn fadeInDown");z.addClass("animated bounceOut");jQuery("#ss360Darken").remove();setTimeout(function(){jQuery("#ss360-layer").fadeOut()},500)}});u.click(function(){SS360.closeLayer()});jQuery("#ss360-layer").click(function(H){H.stopPropagation()});r=ss360Settings.searchResults;if(r instanceof Object){}else{if(r==""){r=undefined}else{}}if(y){console.log("SiteSearch360 v7.31 initialized to "+F)}else{console.log("SiteSearch360 v7.31 FAILED to initialize to "+F)}var D=a("ss360-tracking");if(D!=null&&D=="0"){g=false}if(ss360Settings.initCallback!=undefined){try{ss360Settings.initCallback()}catch(C){console.log(C)}}},recordTyping:function(){if(i>0){return}i=new Date().getTime()},blur:function(u,v){SS360.logQuery(v,"abandon");jQuery("#ss360Darken-input").remove()},focus:function(v,w){t=jQuery(v.target).attr("id");if(ss360Settings.inputFocusLayer!=undefined&&ss360Settings.inputFocusLayer){jQuery("#ss360Darken-input").remove();var u=jQuery('<div id="ss360Darken-input"></div>');jQuery(v.target).parent().css("z-index","999999");jQuery(v.target).parent().parent().append(u)}},logQuery:function(w,v){if(w==undefined){return}if(i==0||w.trim().length==0){return}if(!g){return}var u=o();if(u<50){return}jQuery.post("https://api.sitesearch360.com/sites/queries/log",{query:w,site:q,timeToAction:u,action:v})},followLink:function(v,u){if(u!=undefined){SS360.logQuery(v,"select");window.location.href=u}else{this.showResults(v)}},showResults:function(A,x){if(ss360Settings.preSearchCallback!=undefined){var z=true;try{z=ss360Settings.preSearchCallback.call(this,A,x,t)}catch(w){console.log(w)}if(!z){return}}k();if(r!=undefined&&r.url!=undefined&&r.url!=""){var y=r.url;if(document.location.href.indexOf(y)==-1){y=y.replace(/[?&]ss360Query=[^ ]*/,"");if(y.indexOf("?")>-1){y+="&"}else{y+="?"}document.location.href=y+"ss360Query="+encodeURIComponent(A);return}}var u="https://api.sitesearch360.com/sites?site="+q+"&timeToAction="+o()+"&includeContent=true&limit="+ss360Settings.numResults;if(x!=undefined){u+="&sort="+encodeURIComponent(x)}if(ss360Settings.highlightQueryTerms==true&&ss360Settings.searchResultCallback!=undefined){u+="&highlightQueryTerms=true"}if(ss360Settings.includeContentGroups!=undefined){u+="&includeContentGroups="+encodeURIComponent(JSON.stringify(ss360Settings.includeContentGroups))}if(ss360Settings.excludeContentGroups!=undefined){u+="&excludeContentGroups="+encodeURIComponent(JSON.stringify(ss360Settings.excludeContentGroups))}if(!g){u+="&log=false"}u+="&query="+encodeURIComponent(A);var v=n(A);jQuery.get(u,function(S){var R=jQuery("#ss360-layer");if(ss360Settings.searchResultCallback!=undefined){try{ss360Settings.searchResultCallback.call(this,S)}catch(N){console.log(N)}}else{if(S.redirect!=undefined&&S.redirect.length>0){var G=S.redirect;if(G.indexOf("?")>-1){G+="&"}else{G+="?"}G+="ss360SearchTerm="+v;window.location.href=G;return}R.html("");var K;if(r==undefined){K=jQuery('<div class="ss360-layer-content" style="overflow-x:auto;overflow-y:auto;max-height:100%">')}else{K=jQuery('<div class="ss360-layer-content">')}var D;if(Object.keys(S.suggests).length>1){var F=false;if(ss360Settings.navigation=="top"){D=jQuery('<div class="ss360-top-nav"></div>');F=true;jQuery("#ss360-layer").css("overflow","hidden")}else{if(ss360Settings.navigation=="left"){D=jQuery('<div class="ss360-left-nav"></div>');K.addClass("ss360-left-nav");F=true}}if(F){R.append(D)}}R.append(K);if(ss360Settings.navigation=="left"){R.append(jQuery('<div style="clear:both">'))}if(ss360Settings.searchResultsCaption!=undefined){var Q=jQuery("<h2>"+ss360Settings.searchResultsCaption.replace("#QUERY#",v)+"</h2>");if(S.plan==="FREE"){Q.css("paddingTop","22px")}K.append(Q)}if(S.queryCorrection!=undefined&&S.queryCorrection!=null){var C=jQuery('<div>Did you mean "<a id="ss360-query-correction" href="#">'+S.queryCorrection+'</a>"?</div>');K.append(C)}var B=0;jQuery.each(S.suggests,function(ad,ae){var ac=ad.replace(/[ "Â§$%&/(){}+*,.;|]/g,"_").toLowerCase();var V=Math.round(10000*Math.random());var X=ad;if(X=="_"){if(ss360Settings.ignoreOtherContentGroup){return}X=ss360Settings.otherContentGroupName}var aa=null;if(X.length>0){aa=jQuery('<div id="navelement'+V+'" class="ss360-nav-entry">'+X+"</div>");aa.append('<span class="ss360-result-count">'+ae.length+"</span>")}jQuery(document.body).on("mousedown","#navelement"+V,function(){if(r==undefined){jQuery("#ss360-layer .ss360-layer-content").animate({scrollTop:jQuery(".ss360-group-"+ac).prev().position().top},2*ss360Settings.animationSpeed)}else{jQuery("html, body").animate({scrollTop:jQuery(".ss360-group-"+ac).prev().offset().top},2*ss360Settings.animationSpeed)}});if(D!=undefined&&aa!=null){D.append(aa);if(ss360Settings.navigation=="left"){D.append(jQuery("<br>"))}}if(X.length>0&&ae.length>0){var T=jQuery("<h4>"+X+"</h4>");K.append(T)}var Z=jQuery('<div class="ss360-group ss360-group-'+ac+'">');var Y=0;jQuery.each(ae,function(ag,ak){var ah='<div class="ss360-suggests">';if(ak.type=="custom"){ah=ah.replace("ss360-suggests","ss360-suggests ss360-custom-result");ah+=ak.html}else{if(ak.link!=undefined){ah+='<a href="'+ak.link+'">';ah+=ak.name;ah+="</a>";if(ss360Settings.showResultLink){ah+='<br><a href="'+ak.link+'" class="ss360-result-link">';ah+=ak.link;ah+="</a>"}}ah+='<div class="ss360-content-container">';if(ak.image!=undefined&&ss360Settings.showImagesResults){if(ak.link!=undefined){ah+='<a href="'+ak.link+'">'}ah+='<img src="'+ak.image+'"/>';if(ak.link!=undefined){ah+="</a>"}}if(ak.content!=undefined){var ai=ak.content;ah+="<p>"+ai+"</p>"}if(ak.kvtable!=undefined&&ak.kvtable.length>16){ah+=ak.kvtable}}ah+="</div>";ah+='<div class="unibox-ca"></div></div>';var aj=jQuery(ah);if(Y>=ss360Settings.moreResultsPagingSize){aj.addClass("ss360-hidden")}Z.append(aj);Y++});if(ae.length>0){K.append(Z);if(ss360Settings.highlightQueryTerms){var W=A.split(" ");for(var U=0;U<W.length;U++){try{jQuery("div.ss360-content-container > p").highlight(W[U],"ss360-highlight")}catch(ab){console.log(ab)}}}B+=ae.length;if(ss360Settings.moreResultsButton!=undefined){if(jQuery(".ss360-group-"+ac+".ss360-group .ss360-suggests.ss360-hidden").length>0){var af=jQuery('<div class="ss360-more-results">'+ss360Settings.moreResultsButton+"</div>");Z.append(af);jQuery(document.body).on("mousedown",".ss360-group-"+ac+" .ss360-more-results",function(){var ah=jQuery(this).closest(".ss360-group").find(".ss360-suggests.ss360-hidden");var ag;for(ag=0;ag<Math.min(ss360Settings.moreResultsPagingSize,ah.length);ag++){jQuery(ah.get(ag)).fadeIn(300,function(ai){jQuery(this).removeClass("ss360-hidden")})}if(ag==ah.length){jQuery(this).remove()}})}}}});if(ss360Settings.navigation=="top"){jQuery(".ss360-layer-content").css("max-height","calc(100% - 51px)")}if(B==0){var L=jQuery('<div id="ss360-no-results">'+ss360Settings.noResultsText+"</div>");K.append(L)}if(S.plan=="FREE"||S.plan=="COLUMBO"){K.append('<div><a href="https://sitesearch360.com"><img style="max-width:120px;float:right;position:absolute;top:0;right:5px;" src="https://sitesearch360.com/cdn/sitesearch360.svg"></a></div>')}if(S.sortingOptions!=undefined&&S.sortingOptions.length>0){var H="max-width:150px;float:right;position:absolute;top:0px;";if(S.plan=="FREE"||S.plan=="COLUMBO"){H+="right:160px;"}else{H+="right:5px;"}var E=jQuery('<select id="ss360-sorting-selection" style="'+H+'">');E.append(jQuery('<option value="_relevance">Relevance</option>'));for(var M=0;M<S.sortingOptions.length;M++){E.append(jQuery('<option value="'+S.sortingOptions[M]+'">'+S.sortingOptions[M]+"</option>"))}K.append(E);if(S.sorting==""){S.sorting="_relevance"}E.val(S.sorting);jQuery(document.body).on("change","#ss360-sorting-selection",function(T){SS360.showResults(A,jQuery(this).val())})}}h();try{jQuery(ss360Settings.searchBoxSelector).blur()}catch(O){console.log(O)}R.removeClass("animated bounceOut");R.removeClass("ss360-overlay");if(r==undefined){R.addClass("ss360-overlay");R.fadeIn();R.scrollTop(0);R.removeClass("animated bounceOut");R.addClass("animated fadeInDown");jQuery("#ss360Darken").remove();var J=jQuery('<div id="ss360Darken"></div>');jQuery("body").append(J);R.append('<div id="ss360CloseLayerButton"></div>');jQuery("#ss360CloseLayerButton").click(SS360.closeLayer)}else{R.fadeIn();jQuery(r.contentBlock).html(R)}if(S.queryCorrection!=undefined&&S.queryCorrection!=null){jQuery("#ss360-query-correction").click(function(U){try{ss360Settings.enterCallback.call(this,S.queryCorrection)}catch(T){console.log(T)}U.preventDefault();U.stopPropagation();return false})}jQuery("img").on("error",function(){jQuery(this).hide()});if(typeof(history.pushState)!="undefined"){var P=document.location.href;P=P.replace(/[?&]ss360Query=[^ ]*/,"");if(P.indexOf("?")>-1){P+="&"}else{P+="?"}P+="ss360Query="+encodeURIComponent(A);var I={Page:document.title,Url:P};history.pushState(I,I.Page,I.Url)}if(ss360Settings.postSearchCallback!=undefined){try{ss360Settings.postSearchCallback.call(this,S)}catch(N){console.log(N)}}f(A)}).fail(function(){b('There is no siteId "'+q+'", so no results can be retrieved. Please update your ss360Config object.')})}}}();function initializeSs360(){ss360Settings=jQuery.extend({suggestUrl:"",searchResults:undefined,instantVisualFeedback:"none",searchResultsCaption:'Search results for "#QUERY#"',throttleTime:300,extraHtml:undefined,highlight:true,queryVisualizationHeadline:"",animationSpeed:300,enterCallback:SS360.showResults,enterCallbackResult:SS360.followLink,typeCallback:SS360.recordTyping,blurCallback:SS360.blur,focusCallback:SS360.focus,navigation:"none",includeContentGroups:undefined,excludeContentGroups:undefined,showSearchSuggestions:true,showImagesSuggestions:true,showImagesResults:true,searchButton:undefined,minChars:3,maxWidth:400,searchBoxSelector:"#searchBox",numSuggestions:10,numResults:100,autofocus:false,inputFocusLayer:false,defaultCss:true,highlightQueryTerms:true,preSearchCallback:undefined,postSearchCallback:undefined,searchResultCallback:undefined,moreResultsButton:undefined,moreResultsPagingSize:100,noResultsText:"Sorry, we have not found any matches for your query.",otherContentGroupName:"",ignoreOtherContentGroup:false,showResultLink:false,themeColor:"#329fd9",emptyQuerySuggestions:undefined,initCallback:undefined,suggestionsEqualSearch:false,showErrors:true,externalTracking:{providers:[],searchCallback:undefined}},ss360Config);if(ss360Settings.moreResultButton!=undefined){ss360Settings.moreResultsButton=ss360Settings.moreResultButton}if(ss360Settings.numSuggests!=undefined){ss360Settings.numSuggestions=ss360Settings.numSuggests}ss360Settings.emptyQuerySuggests=ss360Settings.emptyQuerySuggestions;jQuery.fn.highlight=function(b,c){function a(f,k){if(jQuery(f).parents(".ss360-search-term-highlight").length!=0){return 1}var m=0;if(f.nodeType==3){var l=f.data.toUpperCase().indexOf(k);l-=(f.data.substr(0,l).toUpperCase().length-f.data.substr(0,l).length);if(l>=0){var j=document.createElement("span");j.className=c;var g=f.splitText(l);var d=g.splitText(k.length);var e=g.cloneNode(true);j.appendChild(e);g.parentNode.replaceChild(j,g);m=1}}else{if(f.nodeType==1&&f.childNodes&&!/(script|style)/i.test(f.tagName)){for(var h=0;h<f.childNodes.length;++h){h+=a(f.childNodes[h],k)}}}return m}return this.length&&b&&b.length?this.each(function(){a(this,b.toUpperCase())}):this};jQuery(document).ready(function(){(function(d){d.fn.unibox=function(e){var f=this.map(function(h,k){k=d(k);var i=d.extend({suggestUrl:"",ivfImagePath:"",ivfImageOffset:-80,missingErrorImage:undefined,queryVisualizationHeadline:"",highlight:true,throttleTime:50,animationSpeed:300,instantVisualFeedback:"all",enterCallback:undefined,enterCallbackResult:undefined,typeCallback:undefined,focusCallback:undefined,blurCallback:undefined,placeholder:undefined,extraHtml:undefined,lineCallback:undefined,noSuggests:undefined,emptyQuerySuggests:undefined,minChars:3,maxWidth:k.outerWidth(),showDeleteAllButton:false,suggestOrder:[],suggestSelectionOrder:[]},e);if(i.searchBoxContainerSelector==undefined){i.searchBoxContainer=k.parent()}else{i.searchBoxContainer=d(i.searchBoxContainerSelector)}var j=new UniBox();j.init(k,i);return j});var g=d.makeArray(f);if(g.length==1){return g[0]}return g}}(jQuery));SS360.init();if(ss360Settings.defaultCss){var a=jQuery("body");a.append('<style id="ss360-default-css">img.unibox-vis{width:70px}.unibox-selectable{clear:both;position:relative;font-family:sans-serif;font-size:14px;text-align:left;display:block !important}.unibox-selectable .unibox-extra{cursor:default}.unibox-selectable:hover .unibox-extra{color:#fff}.unibox-selectable.active,.unibox-selectable:hover{background-color:'+ss360Settings.themeColor+";color:#fff;cursor:pointer}.unibox-selectable.active a,.unibox-selectable.active span,.unibox-selectable.active .unibox-extra,.unibox-selectable:hover a,.unibox-selectable:hover span,.unibox-selectable:hover .unibox-extra{color:#fff}.unibox-selectable .unibox-selectable-img-container{width:60px;float:left;margin-right:6px}.unibox-selectable img{max-width:60px;max-height:60px}.unibox-selectable span span{font-weight:bold}.unibox-highlight{font-weight:bold;}p.unibox-result-content{margin-top:5px;margin-bottom:15px;}.unibox-ca{clear:both}#unibox-invisible{visibility:hidden;position:relative;text-align:left;height:0;display:none}#unibox-suggest-box{position:absolute;display:none;border:1px solid #e5e5e5;background-color:#fff;color:#333;overflow:hidden;z-index:1500}#unibox-suggest-box a{text-decoration:none;color:"+ss360Settings.themeColor+"}#unibox-suggest-box .unibox-selectable:hover a,#unibox-suggest-box .unibox-selectable.active a{color:#fff}#unibox-suggest-box>div>div{padding:6px 8px}#unibox-suggest-box h4{margin-left:8px;margin-top:6px;margin-bottom:6px;font-size:18px}.unibox-ivf{position:absolute}.unibox-ivf{width:76px;height:76px;position:absolute;top:-89px;left:-15px}.unibox-ivf img{max-width:76px;position:absolute;top:0;bottom:0;margin:auto;transition:.3s ease-out;-webkit-transition:.3s ease-out;-webkit-transform:rotateX(-90deg) translateY(100%);transform:rotateX(-90deg) translateY(100%)}.unibox-ivf img.l{-webkit-transform:rotateX(0) translateY(0);transform:rotateX(0) translateY(0)}#ss360-layer{padding:10px}#ss360-layer h4{background-color:"+ss360Settings.themeColor+";padding:5px;color:white;font-size:20px}.ss360-layer-content h2{font-size:1.5em}.ss360-layer-content {position: relative;}#ss360-layer.ss360-overlay p{text-align:left}#ss360-layer.ss360-overlay{position:fixed;width:80%;padding:30px;padding-right:50px;background-color:#fff;color:#333;-webkit-box-shadow:0 0 5px 3px rgba(122,122,122,1);-moz-box-shadow:0 0 5px 3px rgba(122,122,122,1);box-shadow:0 0 5px 3px rgba(122,122,122,1);z-index:999999;left:calc(10% - 40px);top:calc(10% - 30px);height:80%;overflow:auto}.ss360-suggests{margin-bottom:25px;margin-top:5px}.ss360-suggests a{font-size:1.2em;}.ss360-content-container{margin-top:5px;}.ss360-content-container img{width:250px;float:left;margin-right:12px;margin-bottom:6px}.ss360-content-container table{width:auto;border:0}.ss360-content-container table tr,.ss360-content-container table tr td{border:0}.ss360-content-container table tr td:nth-of-type(1){font-weight:bold;padding-right:10px}.animated{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes bounceIn{0{opacity:0;-webkit-transform:scale(.3)}50%{opacity:1;-webkit-transform:scale(1.05)}70%{-webkit-transform:scale(.9)}100%{-webkit-transform:scale(1)}}@keyframes bounceIn{0{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceOut{0{-webkit-transform:scale(1)}25%{-webkit-transform:scale(.95)}50%{opacity:1;-webkit-transform:scale(1.1)}100%{opacity:0;-webkit-transform:scale(.3)}}@keyframes bounceOut{0{transform:scale(1)}25%{transform:scale(.95)}50%{opacity:1;transform:scale(1.1)}100%{opacity:0;transform:scale(.3)}}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes fadeInDown{0{opacity:0;-webkit-transform:translateY(-20px)}100%{opacity:1;-webkit-transform:translateY(0)}}@keyframes fadeInDown{0{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}#ss360-searchbox-spinner{width:100px;height:100px;position:fixed;left:49.5%;top:49.5%;z-index:999999;display:none}.ss360-double-bounce1,.ss360-double-bounce2{width:100%;height:100%;border-radius:50% !important;background-color:"+ss360Settings.themeColor+";opacity:.6;position:absolute;top:0;left:0;-webkit-animation:sk-bounce 2.0 infinite ease-in-out;animation:sk-bounce 2.0 infinite ease-in-out}.ss360-double-bounce2{-webkit-animation-delay:-1.0;animation-delay:-1.0}@-webkit-keyframes sk-bounce{0,100%{-webkit-transform:scale(0.0)}50%{-webkit-transform:scale(1.0)}}@keyframes sk-bounce{0,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}50%{transform:scale(1.0);-webkit-transform:scale(1.0)}}.ss360-layer-content>h2{margin-top:0}.ss360-top-nav{padding-bottom:10px}.ss360-left-nav{float:left;width:20%}.ss360-left-nav .ss360-nav-entry{margin-bottom:10px}.ss360-layer-content.ss360-left-nav{float:right;width:80%}.ss360-nav-entry:hover{border-bottom:3px solid "+ss360Settings.themeColor+";padding-bottom:8px}.ss360-nav-entry{display:inline-block;padding:10px;background:#fff;color:#333;margin-right:5px;border:1px solid "+ss360Settings.themeColor+';cursor:pointer}.ss360-result-count:after{content:")"}.ss360-result-count:before{content:"("}.ss360-result-count{margin-left:5px}.ss360-search-term-highlight{background-color:#b5f948;padding:0 3px}.ss360-highlight{font-weight:bold}.ss360-hidden{display:none}.ss360-more-results{border:1px solid '+ss360Settings.themeColor+";color:"+ss360Settings.themeColor+';font-weight:bold;padding:10px 20px;border-radius:12px;margin-bottom:25px;margin-left:auto;margin-right:auto;text-align:center;width:210px;cursor:pointer}#ss360Darken,#ss360Darken-input{background-color:rgba(0,0,0,.65) !important;width:100%;height:100%;position:fixed;top:0;left:0;cursor:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAZlBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnJycoKCiCgoKEhITn5+f+/v7///9G9P8rAAAAIHRSTlMAAAQFBgcSExksREVMTU5kZWhpdHV2ent8fYCKi6ys6j3syEgAAAD9SURBVDjLldTrEoIgEAVgzVw1Ay+hxlJS7/+SGRW0KkbnDyPzjTJHIIoDEsXRz1C0L46VOJ9FdSz2HgS8R5uewwraHSSSyHI3R9DgIg1QlJ9wJaf8G4HA1QhwKGnQkzaxqERvyg8C6UcS3ojjRvgLpa7Dq3qNanStpgYVzty0UUrfrnayMIjZ54u+P5WahoudZAZVSBU1WBnUIVXUYGcQKWBSd61ICUukPKijRmuquvnC1Wfhar5wRo0dSAWuzNGVOc7K3P4tQxr+g7e3SvbPpouSNmD7Bh2EsCM1vWvliy0sjnn5+5hPyfjgyMAz79XDaiGlqJn36tm6xALyAPQXUwhUn4QTAAAAAElFTkSuQmCC") 12 12,auto;z-index:999998}#ss360CloseLayerButton{-webkit-transform-origin:center;transform-origin:center;cursor:pointer;position:absolute;top:8px;right:8px;width:36px;height:36px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAZlBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnJycoKCiCgoKEhITn5+f+/v7///9G9P8rAAAAIHRSTlMAAAQFBgcSExksREVMTU5kZWhpdHV2ent8fYCKi6ys6j3syEgAAAD9SURBVDjLldTrEoIgEAVgzVw1Ay+hxlJS7/+SGRW0KkbnDyPzjTJHIIoDEsXRz1C0L46VOJ9FdSz2HgS8R5uewwraHSSSyHI3R9DgIg1QlJ9wJaf8G4HA1QhwKGnQkzaxqERvyg8C6UcS3ojjRvgLpa7Dq3qNanStpgYVzty0UUrfrnayMIjZ54u+P5WahoudZAZVSBU1WBnUIVXUYGcQKWBSd61ICUukPKijRmuquvnC1Wfhar5wRo0dSAWuzNGVOc7K3P4tQxr+g7e3SvbPpouSNmD7Bh2EsCM1vWvliy0sjnn5+5hPyfjgyMAz79XDaiGlqJn36tm6xALyAPQXUwhUn4QTAAAAAElFTkSuQmCC")}@keyframes rotate{0{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(90deg)}}#ss360CloseLayerButton:hover{animation-duration:.5s;animation-name:rotate;animation-iteration-count:1}#ss360IndexFilters{display:none}.ss360-content-container>a,.ss360-content-container>a:hover{border:none;}@media all and (max-width:680px){.ss360-left-nav{float:left;width:100%;clear:both}.ss360-layer-content.ss360-left-nav{float:left;width:100%}#ss360-sorting-selection{display:none}#ss360-layer.ss360-overlay{position:fixed;width:100%;padding:10px 0 10px 10px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;left:0;top:0;height:100%}}a.ss360-result-link{font-size:14px;color:#006621}</style>');a.append('<div id="ss360-searchbox-spinner"><div class="ss360-double-bounce1"></div><div class="ss360-double-bounce2"></div></div>')}var b={};location.search.substr(1).split("&").forEach(function(d){b[d.split("=")[0]]=d.split("=")[1]});if(b.ss360SearchTerm!=undefined){try{jQuery("div").highlight(b.ss360SearchTerm,"ss360-search-term-highlight")}catch(c){console.log(c)}}if(b.ss360Query!=undefined){SS360.showResults(decodeURIComponent(b.ss360Query))}})}if(typeof jQuery=="undefined"){if(typeof $=="function"){thisPageUsesAnotherJsLib=true}function getScript(c,e){var b=document.createElement("script");b.src=c;var d=document.getElementsByTagName("head")[0],a=false;b.onload=b.onreadystatechange=function(){if(!a&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){a=true;e();b.onload=b.onreadystatechange=null;d.removeChild(b)}};d.appendChild(b)}getScript("https://code.jquery.com/jquery-2.2.4.min.js",function(){if(typeof jQuery=="undefined"){}else{$.noConflict();initializeSs360()}})}else{initializeSs360()};