var Timer=function(t,i){this.min=parseInt(t),this.sec=parseInt(i),this.tick=0};Timer.prototype={start:function(t){var i=this;this.tick=setTimeout(function(){if(0===i.sec){if(0===i.min)return void i.reset();i.min--,i.sec=59,i.start(t)}else i.sec--,i.start(t)},1e3),t&&t(this.min,this.sec)},pause:function(){clearTimeout(this.tick)},reset:function(){this.min=0,this.sec=0,clearTimeout(this.tick)}};