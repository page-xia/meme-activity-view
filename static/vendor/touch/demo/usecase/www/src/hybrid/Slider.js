define(function(t){var i=(t("./blend"),t("../common/lib")),o=t("./runtime"),e=t("./Control"),n=!0,r=o.component.slider,p=function(t){return e.call(this,t),this._init(t),this};return i.inherits(p,e),p.prototype.constructor=p,p.prototype._init=function(){return this._initEvent(),this.render(),this},p.prototype.type="slider",p.prototype._initEvent=function(){var t=this;return r.on("tap",function(){t.tap&&t.tap.apply(t,arguments),t.fire("tap",arguments,t)},t.id,t),r.on("slide",function(){t.slide&&t.slide.apply(t,arguments),t.fire("slide",arguments,t)},t.id,t),t.on("afterdistory",function(){r.off("tap","all",t.id,t),r.off("slide","all",t.id,t)}),t},p.prototype.paint=function(){var t=this;return n&&(r.add(t.id,{top:t.top,left:t.left,width:t.width,height:t.height,fixed:t.fixed}),r.addItems(t.id,{images:t.images}),t.bgColor&&r.setConfig(t.id,{backgroundColor:t.bgColor}),t.hasIndicator&&r.setupIndicator(t.id,{activeColor:t.activeColor,inactiveColor:t.inactiveColor})),this},p.prototype.prev=function(){r.prev(me.id)},p.prototype.next=function(){r.next(me.id)},p.prototype.slideTo=function(t){r.slideTo(this.id,t,!0)},p.prototype.destroy=function(){r.remove(this.id),e.prototype.destroy.apply(this,arguments)},p});