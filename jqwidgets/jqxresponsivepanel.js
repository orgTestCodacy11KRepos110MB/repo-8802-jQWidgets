/*
jQWidgets v13.2.0 (2022-Jan)
Copyright (c) 2011-2022 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxResponsivePanel","",{});a.extend(a.jqx._jqxResponsivePanel.prototype,{defineInstance:function(){var b={width:null,height:null,collapseBreakpoint:1000,collapseWidth:null,toggleButton:null,toggleButtonSize:30,animationType:"fade",animationDirection:"left",animationShowDelay:"fast",animationHideDelay:"fast",autoClose:true,initContent:null,_collapsed:false,_opened:false,_init:false,_ie7:(a.jqx.browser.msie&&a.jqx.browser.version<8),events:["collapse","expand","open","close"]};if(this===a.jqx._jqxResponsivePanel.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){var b=this;if(b.initContent&&b._init===false){b.initContent();b._init=true}b._render(true)},_render:function(c){var d=this;if(c===true&&d.toggleButton){d._toggleButton=a(d.toggleButton);if(d._toggleButton.length===0){throw new Error('jqxResponsivePanel: Invalid toggleButton selector: "'+d.toggleButton+'".')}var b=a('<div class="'+d.toThemeProperty("jqx-menu-minimized-button")+" "+d.toThemeProperty("jqx-responsive-panel-button-inner")+'"></div>');d._toggleButton.append(b)}d._setSize();d._addClasses();if(c===false){d._removeHandlers()}d._addHandlers();d._checkWindowSize()},render:function(){this._render(false)},refresh:function(b){if(b!==true){this._checkWindowSize()}},destroy:function(b){var c=this;c._removeHandlers();c.host.remove();if(b!==true&&c.toggleButton){c._toggleButton.remove()}},propertyChangedHandler:function(b,c,e,d){if(d!==e&&c!=="toggleButton"&&c!=="initContent"){switch(c){case"width":case"height":b.host.css(c,d);break;case"collapseBreakpoint":b._checkWindowSize();break;case"toggleButtonSize":if(b.toggleButton){b._toggleButton.css({width:d,height:d})}break;default:b.render()}}},open:function(){var b=this;if(b._collapsed===true&&b._opened===false){function d(){b.host.show();b._opened=true;b._raiseEvent("2");if(b.initContent&&b._init===false){b.initContent();b._init=true}}if(b._ie7===true){d();return}switch(b.animationType){case"fade":b.host.fadeIn(b.animationShowDelay,function(){b._raiseEvent("2");b._opened=true;if(b.initContent&&b._init===false){b.initContent();b._init=true}});break;case"slide":var c=b.animationDirection;if(c==="top"){c="up"}else{if(c==="bottom"){c="down"}}b._slide(b.host,{mode:"show",direction:c,duration:b.animationShowDelay});break;case"none":d();break}}},close:function(){var b=this;if(b._collapsed===true&&b._opened===true){if(b._ie7===true){b.host.hide();b._opened=false;b._raiseEvent("3");return}switch(b.animationType){case"fade":b.host.fadeOut(b.animationHideDelay,function(){b._opened=false;b._raiseEvent("3")});break;case"slide":var c=b.animationDirection;if(c==="top"){c="up"}else{if(c==="bottom"){c="down"}}b._slide(b.host,{mode:"hide",direction:c,duration:b.animationHideDelay});break;case"none":b.host.hide();b._opened=false;b._raiseEvent("3");break}}},_raiseEvent:function(f,c){if(c===undefined){c={owner:null}}var d=this.events[f];c.owner=this;var e=new a.Event(d);e.owner=this;e.args=c;if(e.preventDefault){e.preventDefault()}var b=this.host.trigger(e);return b},_setSize:function(){var b=this;b.host.css("width",b.width);b.host.css("height",b.height);if(b.toggleButton){b._toggleButton.css({width:b.toggleButtonSize,height:b.toggleButtonSize})}},_addClasses:function(){var b=this;b.host.addClass(b.toThemeProperty("jqx-responsive-panel"));b.host.addClass(b.toThemeProperty("jqx-widget"));b.host.addClass(b.toThemeProperty("jqx-widget-content"));b.host.addClass(b.toThemeProperty("jqx-rc-all"));if(b.toggleButton){b._toggleButton.addClass(b.toThemeProperty("jqx-responsive-panel-button"));b._toggleButton.addClass(b.toThemeProperty("jqx-fill-state-normal"));b._toggleButton.addClass(b.toThemeProperty("jqx-rc-all"))}},isCollapsed:function(){return this._collapsed},isOpened:function(){return this._opened},_addHandlers:function(){var b=this,c=b.element.id;b.addHandler(b.host,"click.jqxResponsivePanel"+c,function(d){d.stopPropagation()});b.addHandler(a(document),"click.jqxResponsivePanel"+c,function(){if(b._collapsed===true&&b.autoClose===true){b.close()}});b.addHandler(a(window),"resize.jqxResponsivePanel"+c,function(){setTimeout(function(){b._checkWindowSize()},0)});if(b.toggleButton){b.addHandler(b._toggleButton,"mouseenter.jqxResponsivePanel"+c,function(){b._toggleButton.addClass(b.toThemeProperty("jqx-fill-state-hover"))});b.addHandler(b._toggleButton,"mouseleave.jqxResponsivePanel"+c,function(){b._toggleButton.removeClass(b.toThemeProperty("jqx-fill-state-hover"))});b.addHandler(b._toggleButton,"mousedown.jqxResponsivePanel"+c,function(){b._toggleButton.addClass(b.toThemeProperty("jqx-fill-state-pressed"))});b.addHandler(a(document),"mouseup.jqxResponsivePanel"+c,function(){b._toggleButton.removeClass(b.toThemeProperty("jqx-fill-state-pressed"))});b.addHandler(b._toggleButton,"click.jqxResponsivePanel"+c,function(d){d.stopPropagation();if(b._opened===true){b.close()}else{b.open()}})}},_removeHandlers:function(){var b=this,c=b.element.id;b.removeHandler(b.host,"click.jqxResponsivePanel"+c);b.removeHandler(a(document),"click.jqxResponsivePanel"+c);b.removeHandler(a(window),"resize.jqxResponsivePanel"+c);if(b.toggleButton){b.removeHandler(b._toggleButton,"mouseenter.jqxResponsivePanel"+c);b.removeHandler(b._toggleButton,"mouseleave.jqxResponsivePanel"+c);b.removeHandler(b._toggleButton,"mousedown.jqxResponsivePanel"+c);b.removeHandler(a(document),"mouseup.jqxResponsivePanel"+c);b.removeHandler(b._toggleButton,"click.jqxResponsivePanel"+c)}},_checkWindowSize:function(){var c=this;var b=this.host.parent().width();if(this.host.parent()[0].nodeName.toLowerCase()==="jqx-responsive-panel"){b=this.host.parent().parent().width()}if(c._collapsed===false&&b<=c.collapseBreakpoint){if(c.toggleButton){c._toggleButton.show()}if(c._opened===false){c.host.hide()}c.host.removeClass(c.toThemeProperty("jqx-responsive-panel-expanded"));c.host.addClass(c.toThemeProperty("jqx-responsive-panel-collapsed"));c._collapsed=true;c._raiseEvent("0");if(c.collapseWidth){c.host.width(c.collapseWidth)}c.host.trigger("resize")}else{if(c._collapsed===true&&b>c.collapseBreakpoint){if(c.collapseWidth){c.host.width(c.width)}if(c.toggleButton){c._toggleButton.hide()}if(c._opened===false){c.host.show()}c.host.removeClass(c.toThemeProperty("jqx-responsive-panel-collapsed"));c.host.addClass(c.toThemeProperty("jqx-responsive-panel-expanded"));c._collapsed=false;c._raiseEvent("1");if(c.initContent&&c._init===false){c.initContent();c._init=true}c.host.trigger("resize")}}},_slide:function(f,e){var m=this;if(!m.activeAnimations){m.activeAnimations=[]}if(m.activeAnimations.length>0){for(var k=0;k<m.activeAnimations.length;k++){m.activeAnimations[k].clearQueue();m.activeAnimations[k].finish()}}else{f.clearQueue();f.finish()}var h="ui-effects-";var d={save:function(s,t){for(var o=0;o<t.length;o++){if(t[o]!==null&&s.length>0){s.data(h+t[o],s[0].style[t[o]])}}},restore:function(s,u){var t,o;for(o=0;o<u.length;o++){if(u[o]!==null){t=s.data(h+u[o]);if(t===undefined){t=""}s.css(u[o],t)}}},createWrapper:function(o){if(o.parent().is(".ui-effects-wrapper")){return o.parent()}var s={width:o.outerWidth(true),height:o.outerHeight(true),"float":o.css("float")},v=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:o.width(),height:o.height()},u=document.activeElement;try{u.id}catch(t){u=document.body}o.wrap(v);if(o[0]===u||a.contains(o[0],u)){a(u).focus()}v=o.parent();if(o.css("position")==="static"){v.css({position:"relative"});o.css({position:"relative"})}else{a.extend(s,{position:o.css("position"),zIndex:o.css("z-index")});a.each(["top","left","bottom","right"],function(w,x){s[x]=o.css(x);if(isNaN(parseInt(s[x],10))){s[x]="auto"}});o.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}o.css(i);return v.css(s).show()},removeWrapper:function(i){var o=document.activeElement;if(i.parent().is(".ui-effects-wrapper")){i.parent().replaceWith(i);if(i[0]===o||a.contains(i[0],o)){a(o).focus()}}return i}};var p=["position","top","bottom","left","right","width","height"],l=e.mode,r=l==="show",q=e.direction||"left",g=(q==="up"||q==="down")?"top":"left",c=(q==="up"||q==="left"),b,j={};d.save(f,p);f.show();b=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true);d.createWrapper(f).css({overflow:"hidden"});if(r){f.css(g,c?(isNaN(b)?"-"+b:-b):b)}j[g]=(r?(c?"+=":"-="):(c?"-=":"+="))+b;var n=function(){f.clearQueue();f.stop(true,true)};m.activeAnimations.push(f);f.animate(j,{duration:e.duration,easing:e.easing,complete:function(){m.activeAnimations.pop(f);if(l==="show"){m._opened=true;m._raiseEvent("2");if(m.initContent&&m._init===false){m.initContent();m._init=true}}else{if(l==="hide"){f.hide();m._opened=false;m._raiseEvent("3")}}d.restore(f,p);d.removeWrapper(f)}});return n}})})(jqxBaseFramework);

