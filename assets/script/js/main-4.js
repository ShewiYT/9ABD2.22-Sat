function countLead(e){var t=5e3,a=55e3;if(1==e)var a=8e3;timeLead=Math.round(t-.5+Math.random()*(a-t+1)),console.log(timeLead);var o=new Date,r=new Date(o.getFullYear(),o.getMonth(),o.getDate()),n=o-r,s=Math.round(n/1e3/10);5>s&&(s=5),s+="";var f=s.slice(-1);return f=1==f?"<span class='hidden-xs'>Займ</span> одобрен сегодня":f>1&&5>f?"<span class='hidden-xs'>Займа</span> одобрено сегодня":"<span class='hidden-xs'>Займов</span> одобрено сегодня",$("#count-leads").animate({opacity:.3},function(){$(this).text(s).animate({opacity:1})}),$("#suff").html(f),1!=e&&stickalert(),setTimeout("countLead()",timeLead),timeLead}function stickalert(){$().toastmessage({position:"top-right",type:"warning",inEffectDuration:600,stayTime:4500,position:"top-right"});var e=Math.floor(Math.random()*offerstakename.length),t=Math.floor(Math.random()*offerstakesername.length);if("а"==offerstakename[e].substr(-1))var a="только что выиграла";else var a="только что выиграл";var o=Math.floor(Math.random()*offerstakesum.length);offerstakesum[o]=1*Math.round((1*offerstakesum[o]+Math.floor(1e3*Math.random()))/2);var r=Math.floor(Math.random()*offerstaketype.length),n=Math.floor(Math.random()*offerstakecity.length),s=offerstakename[e]+" "+offerstakesername[t]+"  "+offerstakecity[n]+" "+a+"  "+offerstakesum[o]+" $ "+offerstaketype[r];$().toastmessage("showToast",{text:s,type:"success"})}function onAjaxSuccess(e){$("#subscribeForm").html(e)}function addFavorites(e){var t=document.title,a=document.location;try{window.external.AddFavorite(a,t)}catch(o){try{window.sidebar.addPanel(t,a,"")}catch(o){if("object"==typeof opera||window.sidebar)return e.rel="sidebar",e.title=t,e.url=a,e.href=a,!0;alert("Нажмите "+(-1!=navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+" + D чтобы не забыть про этот сайт")}}return!1}var timeLead=5e3,offerstakename=new Array("Елена","Ирина","Александр","Борис","Алексей","Андрей","Ольга","Иван","Максим","Денис","Ева","Светлана","Игорь","Марина","Антон","Людмила","Олег","Оксана","Алёна","Александра"),offerstakesername=new Array(""),offerstakesum=new Array("1","3","2","8","12","10","14","12","16","14","18","16","20","18","22","20","24"),offerstaketype=new Array("в онлайн казино SUPER SLOTS ","в онлайн казино BONANZA","в онлайн казино ВУЛКАН 24","в онлайн казино AZART.CLUB","в онлайн казино VA-BANK","в онлайн казино ВУЛКАН","в онлайн казино КОРОНА","в онлайн казино PLAY FORTUNA","в онлайн казино ФАРАОН","в онлайн казино АЗАРТМАНИЯ","в онлайн казино ЭЛЬДОРАДО","в онлайн казино LOTORU","в онлайн казино ANONYMOUS","в онлайн казино ВУЛКАН УДАЧИ"),offerstakecity=new Array("");$(document).ready(function(){countLead(1),$(".offer-payment").popover({trigger:"hover",placement:"top"}),$(".fav").click(function(){return addFavorites(this)})}),$("#subscribeButton").click(function(){$.post("/tools/sub_leads.php",{subMail:$("#subMail").val(),subName:$("#subName").val()},onAjaxSuccess)});