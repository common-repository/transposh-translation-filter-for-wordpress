!function(r){r(function(){r.ajaxSetup({cache:!1}),r("#transposh-reset-options").click(function(){return!!confirm("Are you sure you want to do this?")&&(!!confirm("Are you REALLY sure you want to do this, your configuration will be reset?")&&void r.post(ajaxurl,{action:"tp_reset"}))}),backupclick=function(){return r("#transposh-backup").unbind("click").click(function(){return!1}).text("Backup In Progress"),r.post(ajaxurl,{action:"tp_backup"},function(t){var n="red";"2"==t[0]&&(n="green"),r("#backup_result").html(t).css("color",n),r("#transposh-backup").unbind("click").click(backupclick).text("Do Backup Now")}),!1},r("#transposh-backup").click(backupclick),cleanautoclick=function(n,a){if(!confirm("Are you sure you want to do this?"))return!1;if(0==n&&!confirm("Are you REALLY sure you want to do this?"))return!1;var c=a.text();return a.unbind("click").click(function(){return!1}).text("Cleanup in progress"),r.post(ajaxurl,{action:"tp_cleanup",days:n},function(t){a.unbind("click").click(function(){return cleanautoclick(n,a),!1}).text(c)}),!1},dedupautoclick=function(n){if(!confirm("Are you sure you want to do this?"))return!1;var a=n.text();return n.unbind("click").click(function(){return!1}).text("Deduplication in progress"),r.post(ajaxurl,{action:"tp_dedup"},function(t){n.unbind("click").click(function(){return dedupautoclick(n),!1}).text(a)}),!1},r("#transposh-clean-auto").click(function(){return cleanautoclick(0,r(this)),!1}),r("#transposh-clean-auto14").click(function(){return cleanautoclick(14,r(this)),!1}),r("#transposh-clean-unimportant").click(function(){return cleanautoclick(999,r(this)),!1}),r("#transposh-dedup").click(function(){return dedupautoclick(r(this)),!1}),maintclick=function(n){if(!confirm("Are you sure you want to do this?"))return!1;var a=n.text();return n.unbind("click").click(function(){return!1}).text("Maintenance in progress"),r.post(ajaxurl,{action:"tp_maint"},function(t){n.unbind("click").click(function(){return maintclick(n),!1}).text(a)}),!1},r("#transposh-maint").click(function(){return maintclick(r(this)),!1}),do_translate_all=function(){return r("#progress_bar_all").progressbar({value:0}),stop_translate_var=!1,r("#tr_loading").data("done",!0),r.ajaxSetup({cache:!1}),r.ajax({url:ajaxurl,dataType:"json",data:{action:"tp_translate_all"},cache:!1,success:function(n){dotimer=function(t){r("#tr_allmsg").text(""),clearTimeout(timer2),r("#tr_loading").data("done")||4<r("#tr_loading").data("attempt")?(r("#progress_bar_all").progressbar("value",(t+1)/n.length*100),r("#tr_loading").data("attempt",0),translate_post(n[t]),void 0===n[t+1]||stop_translate_var||(timer2=setTimeout(function(){dotimer(t+1)},2e3),r("#tr_allmsg").text("Waiting 2 seconds..."))):(r("#tr_loading").data("attempt",r("#tr_loading").data("attempt")+1),timer2=setTimeout(function(){dotimer(t)},15e3),r("#tr_allmsg").text("Translation incomplete - Waiting 15 seconds - attempt "+r("#tr_loading").data("attempt")+"/5"))},timer2=setTimeout(function(){dotimer(0)},0)}}),r("#transposh-translate").text("Stop translate"),r("#transposh-translate").unbind("click").click(stop_translate),!1},stop_translate=function(){return clearTimeout(timer2),stop_translate_var=!0,r("#transposh-translate").text("Translate All Now"),r("#transposh-translate").unbind("click").click(do_translate_all),!1},r("#transposh-translate").click(do_translate_all)})}(jQuery);
//# sourceMappingURL=utils.js.map