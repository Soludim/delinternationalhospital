/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

!function(t){var e=function(){};t.extend(e.prototype,{name:"Comment",options:{cookiePrefix:"zoo-comment_",cookieLifetime:15552e3,msgCancel:"Cancel"},initialize:function(e,n){this.options=t.extend({},this.options,n);var i=this,o=e.find("#respond"),a=e.find("#edit");o.find("a.facebook-connect").bind("click",function(){i.setLoginCookie("facebook")}),o.find("a.facebook-logout").bind("click",function(){i.setLoginCookie("")}),o.find("a.twitter-connect").bind("click",function(){i.setLoginCookie("twitter")}),o.find("a.twitter-logout").bind("click",function(){i.setLoginCookie("")}),o.find("input:text").placeholder(),a.find(".comment-cancelEdit").bind("click",function(e){e.preventDefault(),a.hide(),a.appendTo(t("#comments")),a.find("input[name=comment_id]").val(0),a.find("textarea[name=content]").val("")}),e.find(".comment").each(function(){var e=t(this);e.find(".reply").bind("click",function(n){n.preventDefault(),a.hide(),o.find(".comment-cancelReply").remove(),t("<a>"+i.options.msgCancel+"</a>").addClass("comment-cancelReply").attr("href","#respond").bind("click",function(e){e.preventDefault(),o.find(".comment-cancelReply").remove(),o.appendTo(t("#comments")),o.find("input[name=parent_id]").val(0)}).appendTo(o.find(".actions")),o.appendTo(e),o.find("input[name=parent_id]").val(t(this).closest(".comment").attr("id").replace(/comment-/i,""))}),e.find(".edit").bind("click",function(n){n.preventDefault(),o.find(".comment-cancelReply").remove(),o.appendTo(t("#comments")),o.find("input[name=parent_id]").val(0),a.appendTo(e),a.find("input[name=comment_id]").val(t(this).closest(".comment").attr("id").replace(/comment-/i,"")),a.find("textarea[name=content]").val(t(this).closest(".comment").find(".content").html()),a.show()})})},setLoginCookie:function(e){t.cookie(this.options.cookiePrefix+"login",e,{expires:this.options.cookieLifetime/86400,path:"/"})}}),t.fn[e.prototype.name]=function(){var n=arguments,i=n[0]?n[0]:null;return this.each(function(){var o=t(this);if(e.prototype[i]&&o.data(e.prototype.name)&&"initialize"!=i)o.data(e.prototype.name)[i].apply(o.data(e.prototype.name),Array.prototype.slice.call(n,1));else if(!i||t.isPlainObject(i)){var a=new e;e.prototype.initialize&&a.initialize.apply(a,t.merge([o],n)),o.data(e.prototype.name,a)}else t.error("Method "+i+" does not exist on jQuery."+e.name)})}}(jQuery),function(t){var e=function(){};t.extend(e.prototype,{name:"BrowseComments",options:{url:"index.php?option=com_zoo&controller=comment",id:"edit-comment-editor"},initialize:function(e,n){this.options=t.extend({},this.options,n);var i=this;this.form=e,e.delegate("tr.comment-row .actions-links .edit, tr.comment-row .actions-links .reply","click",function(e){e.preventDefault();var n=t(this).attr("class");i.modifyEvent(t(this).closest("tr.comment-row"),n)}),e.delegate("tr.comment-row .actions-links span","click",function(e){switch(e.preventDefault(),t(this).attr("class")){case"no-spam":var n="approve";break;case"delete":var n="remove";break;default:var n=t(this).attr("class")}i.stateEvent(t(this).closest("tr.comment-row"),n)})},modifyEvent:function(e,n){var i=this;t.ajax({url:this.options.url,data:{task:n,format:"raw",cid:e.find('input[name^="cid["]').val()},success:function(o){i.removeEditor(),i.insertEditor(e,o),"edit"==n&&e.hide(),i.form.unbind("save").unbind("cancel").bind("save",function(o,a){i.removeEditor(),"edit"==n?e.replaceWith(a):t(a).insertAfter(e),i.stripe()}).bind("cancel",function(){i.removeEditor()})}})},stateEvent:function(e,n){t('<input type="hidden" name="cid">').val(e.find('input[name^="cid["]').val()).appendTo(this.form),this.form.find("input[name=task]").val(n),this.form.submit()},insertEditor:function(e,n){var i=this,o=e.after(n).next();o.find(".actions .save").bind("click",function(e){e.preventDefault();var n={};t.each(i.form.serializeArray(),function(t,e){n[e.name]=e.value}),t.ajax({type:"POST",url:i.options.url,data:t.extend(n,{task:"save",format:"raw"}),success:function(t){i.form.triggerHandler("save",t)}})}),o.find(".actions .cancel").bind("click",function(t){t.preventDefault(),i.form.triggerHandler("cancel")}),o.find(".content textarea").focus()},removeEditor:function(){t("#"+this.options.id,this.form).prev("tr").show(),t("#"+this.options.id,this.form).remove()},stripe:function(){t("table.stripe tbody tr").removeClass("odd even").each(function(){t(this).addClass(t(this).is("tr:odd")?"odd":"even")})}}),t.fn[e.prototype.name]=function(){var n=arguments,i=n[0]?n[0]:null;return this.each(function(){var o=t(this);if(e.prototype[i]&&o.data(e.prototype.name)&&"initialize"!=i)o.data(e.prototype.name)[i].apply(o.data(e.prototype.name),Array.prototype.slice.call(n,1));else if(!i||t.isPlainObject(i)){var a=new e;e.prototype.initialize&&a.initialize.apply(a,t.merge([o],n)),o.data(e.prototype.name,a)}else t.error("Method "+i+" does not exist on jQuery."+e.name)})}}(jQuery);