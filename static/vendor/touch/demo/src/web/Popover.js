define(function(o){var t=(o("./blend"),o("./../common/lib")),e=o("./Dialog"),s=o("./Control"),n=function(o,t,e){if(s.call(this,{modal:o,target:t,removeOnClose:e}),"string"==typeof this.modal&&this.modal.indexOf("<")>=0){var n=document.createElement("div");if(n.innerHTML=this.modal,!(n.childNodes.length>0))return!1;o=n.childNodes[0],this.removeOnClose&&this.modal.classList.add("remove-on-close"),$("body").append(this.modal)}return o=$(o),t=$(t),0===o.length||0===t.length?!1:($(this.main).append(o).appendTo("body"),0===o.find(".popover-angle").length&&o.append('<div class="popover-angle"></div>'),o.show(),this._resizeHandler(),$(window).on("resize",_.bind(this._resizeHandler,this)),o.on("close",function(){$(window).off("resize",_.bind(this._resizeHandler,this))}),this.open(),this)};return t.inherits(n,e),n.prototype.removeOnClose=!0,n.prototype.type="popover",n.prototype._resizeHandler=function(){var o=$(this.modal),t=$(this.target);o.css({left:"",top:""});var e=o.width(),s=o.height(),n=o.find(".popover-angle"),i=n.width()/2;n.removeClass("on-left on-right on-top on-bottom").css({left:"",top:""});var l=t.outerWidth(),d=t.outerHeight(),r=t.offset(),a=t.parents(".page");a.length>0&&(r.top=r.top-a[0].scrollTop);var p=$(window).height(),h=$(window).width(),m=0,f=0,c=0,g="top";s+i<r.top?m=r.top-s-i:s+i<p-r.top-d?(g="bottom",m=r.top+d+i):(g="middle",m=d/2+r.top-s/2,c=m,0>m?m=5:m+s>p&&(m=p-s-5),c-=m),"top"===g||"bottom"===g?(f=l/2+r.left-e/2,c=f,5>f&&(f=5),f+e>h&&(f=h-e-5),"top"===g&&n.addClass("on-bottom"),"bottom"===g&&n.addClass("on-top"),c-=f,n.css({left:e/2-i+c+"px"})):"middle"===g&&(f=r.left-e-i,n.addClass("on-right"),5>f&&(f=r.left+l+i,n.removeClass("on-right").addClass("on-left")),f+e>h&&(f=h-e-5,n.removeClass("on-right").addClass("on-left")),n.css({top:s/2-i+c+"px"})),o.css({top:m+"px",left:f+"px"})},n});