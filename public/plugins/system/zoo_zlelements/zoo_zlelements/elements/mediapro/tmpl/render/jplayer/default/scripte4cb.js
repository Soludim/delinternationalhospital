/**
 * @package     ZL Elements
 * @version     3.3.0
 * @author      ZOOlanders - http://zoolanders.com
 * @license     GNU General Public License v2 or later
 */

!function(e){var i=function(){};i.prototype=e.extend(i.prototype,{name:"MediaProJPlayer",options:{id:"",playlist:{},playlist_on:!1,supplied:"",swfpath:"",width:"",height:"",autoplay:0,lopp:0,screenmode:1},initialize:function(i,t){this.options=e.extend({},this.options,t);var o=this;i.width(o.options.width),o.options.screenmode?e(".jp-video-play",i).height(o.options.height):(i.addClass("jp-noscreen"),o.options.height=0,e(".jp-video-play",i).height(0),e(".jp-full-screen, .jp-restore-screen",i).parent().hide()),i.addClass("jp-size-mini").data("size","mini"),i.width()>500&&i.removeClass("jp-size-mini").addClass("jp-size-middle").data("size","middle"),e("#jquery_jplayer_"+o.options.id).on(e.jPlayer.event.pause,function(){e(".jp-video-play",i).show()}).on(e.jPlayer.event.play,function(){e(".jp-video-play",i).hide()}).on(e.jPlayer.event.resize,function(){i.removeClass("jp-size-mini"),i.hasClass("jp-video-full")||i.addClass("jp-size-"+i.data("size"))}),new jPlayerPlaylist({jPlayer:"#jquery_jplayer_"+o.options.id,cssSelectorAncestor:"#jp_container_"+o.options.id},o.options.playlist,{swfPath:o.options.swfpath,supplied:o.options.supplied,size:{width:o.options.width,height:o.options.height,cssClass:""},errorAlerts:!0,warningAlerts:!0,loop:o.options.loop,ready:function(){o.options.autoplay&&e(this).jPlayer("play")}})}}),e.fn[i.prototype.name]=function(){var t=arguments,o=t[0]?t[0]:null;return this.each(function(){var a=e(this);if(i.prototype[o]&&a.data(i.prototype.name)&&"initialize"!=o)a.data(i.prototype.name)[o].apply(a.data(i.prototype.name),Array.prototype.slice.call(t,1));else if(!o||e.isPlainObject(o)){var p=new i;i.prototype.initialize&&p.initialize.apply(p,e.merge([a],t)),a.data(i.prototype.name,p)}else e.error("Method "+o+" does not exist on jQuery."+i.name)})}}(jQuery);