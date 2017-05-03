define(function(t){function i(t){t=t||{},this.id||t.id||(this.id=e.getUniqueID()),this.main=t.main?t.main:this.initMain(t),this.initOptions(t),n.register(this)}var e=t("../common/lib"),n=t("./blend"),s=t("./runtime"),r=!0;return i.prototype={constructor:i,nativeObj:{},currentStates:{},_listener:{},getType:function(){return this.type||"control"},initOptions:function(t){t=t||{},this.setProperties(t)},initMain:function(){var t=document.createElement("div");return t.setAttribute("data-blend",this.getType()),t.setAttribute("data-blend-id",this.id),t},render:function(){return this.fire("beforerender"),this.main.id||(this.main.id=e.getUniqueID()),this.fire(this.paint()?"afterrender":"renderfailed"),this.main},paint:function(){},appendTo:function(t){this.main.appendChild(t)},insertBefore:function(t){this.main.parentNode.insertBefore(t,this.main)},dispose:function(){this.fire("beforedistory"),r&&s[this.type].destroy(this.id),this.fire("afterdistory")},clearDOMEvents:function(){},destroy:function(){this.dispose(),n.cancel(this)},get:function(t){var i=this["get"+e.toPascal(t)];return"function"==typeof i?i.call(this):this[t]},set:function(t,i){var n=this["set"+e.toPascal(t)];if("function"==typeof n)return n.call(this,i);var s={};s[t]=i,this.setProperties(s)},setProperties:function(t){e.extend(this,t)},disable:function(){this.addState("disabled")},enable:function(){this.removeState("disabled")},isDisabled:function(){return this.hasState("disabled")},"in":function(){this.removeState("hidden"),this.fire("show")},out:function(){this.addState("hidden"),this.fire("hide")},toggle:function(){this[this.isHidden()?"in":"out"]()},isHidden:function(){return this.hasState("hidden")},addState:function(t){!this.hasState(t)},removeState:function(t){this.hasState(t)},toggleState:function(t){var i=this.hasState(t)?"removeState":"addState";this[i](t)},hasState:function(t){return!!this.currentStates[t]},on:function(t,i){var e=this;e._listener[t]||(e._listener[t]=[]),e._listener[t].push(i)},off:function(t,i){var e=this._listener[t];if(e){if(!i)return void delete this._listener[t];e.splice(types.indexOf(i),1),e.length||delete this._listener[t]}},fire:function(t,i,e){if(!t)throw new Error("未指定事件名");var n=this._listener[t];if(e=e||this,n)for(var s=0,r=n.length;r>s;s++)n[s].apply(e,i);var a=this["on"+t];return"function"==typeof a&&a.call(this,event),event}},i});