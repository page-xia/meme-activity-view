define(function(t){var n=t("../blend"),o=t("../../common/lib"),i=t("../Dialog"),e=function(t,o,e,l){return i.call(this,{content:t,title:o,buttons:[{text:n.configs.dialogBtnCancel,onclick:l},{text:n.configs.dialogBtnOK,bold:!0,onclick:e}]}),this};return o.inherits(e,i),e.prototype.title=n.configs.dialogTitle,e.prototype.content="",e});