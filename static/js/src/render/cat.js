$(".cat-ul").each(function(t,o){var a=$(o).data("from"),e=$(o).data("to"),m=$("body").data("now");a&&e&&(moment(a).diff(moment(m))>0?$(o).find(".changeColor").css({color:"#666"}):($(o).find(".special-price").remove(),$(o).find(".vhr").remove()))}),$(".cat.list").length&&$(".cat.list").each(function(t,o){var a=$(o).data("fromtime"),e=$(o).data("totime"),m=$("body").data("now");a&&e&&(moment(m).diff(moment(a))<0||moment(m).diff(moment(e))>0)&&$(o).remove()});