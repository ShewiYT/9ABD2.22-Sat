if(!window.requestAnimationFrame){
window.requestAnimationFrame=(function() {
return window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback,element){
window.setTimeout(callback,1000/60);
};
})();
}


// _____________ ”ƒ¿À≈Õ»≈ œŒÀﬂ ƒÀﬂ ¬¬Œƒ¿ “–¿Õ«¿ ÷»» ¬€œÀ¿“€ _____________


function a_w_x(a_w_x_id){
if(confirm("”‰‡ÎËÚ¸, ˜ÚÓ·˚ ÔÓÚÓÏ ‚˚ÔÎ‡ÚËÚ¸ ?")){
document.getElementById("x_id").value=a_w_x_id;
with(document.getElementById("form_x")){
submit();
}
}
}


// _____________ Œ“œ–¿¬ ¿ “–¿Õ«¿ ÷»» ¬€¬Œƒ¿ _____________


function a_w_ok(a_w_ok_id){
if(confirm("ŒÚÔ‡‚ËÚ¸ Ú‡ÌÁ‡ÍˆË˛ ?")){
document.getElementById("ok_id").value=a_w_ok_id;
document.getElementById("ok_batch").value=document.getElementById("inp_"+a_w_ok_id).value;
with(document.getElementById("form_ok")){
submit();
}
}
}


// _____________ ¬€¬Œƒ ¬ ¿ƒÃ»Õ ≈ _____________


function a_w_api(a_w_api_id,a_w_api_type){
var api_text;
if(a_w_api_type==1){ api_text="¬˚ÔÎ‡ÚËÚ¸ ˜ÂÂÁ Payeer ?"; }
if(a_w_api_type==2){ api_text="¬˚ÔÎ‡ÚËÚ¸ ˜ÂÂÁ Free-Kassa ?"; }
if(confirm(api_text)){
document.getElementById("pay_id").value=a_w_api_id;
document.getElementById("pay_type").value=a_w_api_type;
with(document.getElementById("form_pay")){
submit();
}
}
}


// _____________ ¡¿Õ » –¿«¡¿Õ _____________


function ban(ban_mode,ban_id){
var ban_text="“Ó˜ÌÓ Á‡·‡ÌËÚ¸?";
if(ban_mode==0){ ban_text="“Ó˜ÌÓ ‡Á·‡ÌËÚ¸?"; }
if(confirm(ban_text)){
document.getElementById("ban_mode").value=ban_mode;
document.getElementById("ban_id").value=ban_id;
with(document.getElementById("form_ban")){
submit();
}
}
}


// _____________ œŒœŒÀÕ≈Õ»≈ ¡¿À¿Õ—¿ _____________


var preorder_ajax=new XMLHttpRequest();
var preorder_can=0;


function preorder_ajax_send2(){


if(preorder_can==1){ return; } 
preorder_can=1;


var preorder_ajax_vars="sum="+document.getElementById("bup_sum2").value+"&type="+document.getElementById("bup_type2").value;


preorder_ajax.onreadystatechange=function(){
if(preorder_ajax.readyState==4){
if(preorder_ajax.status==200){
try{ eval(preorder_ajax.responseText); }
catch(e){}
}
preorder_can=0;
}
}
preorder_ajax.open("POST","/preorder.php",true);
preorder_ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
preorder_ajax.send(preorder_ajax_vars);
}

function preorder_ajax_send(){


  if(preorder_can==1){ return; } 
  preorder_can=1;
  
  
  var preorder_ajax_vars="sum="+document.getElementById("bup_sum").value+"&type="+document.getElementById("bup_type").value;
  
  
  preorder_ajax.onreadystatechange=function(){
  if(preorder_ajax.readyState==4){
  if(preorder_ajax.status==200){
  try{ eval(preorder_ajax.responseText); }
  catch(e){}
  }
  preorder_can=0;
  }
  }
  preorder_ajax.open("POST","/preorder.php",true);
  preorder_ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  preorder_ajax.send(preorder_ajax_vars);
  }











// _____________ œŒ¡≈ƒ»“≈À» œ–≈ƒ€ƒ”Ÿ»’ »√– Œ¡€◊ÕŒ…  ŒÃÕ¿“€ _____________


var winners_list=new Array();
var winners_can=1;


function winners_scroll(){
if(winners_list.length>0 && winners_can==1){
var winners_f=winners_list.shift();
var winners_text='<tr class="room_w_tr_'+winners_bg+'">'+winners_f;
document.getElementById("winners_insert").insertAdjacentHTML("afterBegin",winners_text);
document.getElementById("winners_div").scrollTop+=60;
winners_can=2;
winners_bg++;
if(winners_bg>1){ winners_bg=0; }
}
if(winners_can>1){ winners_can++; }
if(winners_can>200){ winners_can=1; }
document.getElementById("winners_div").scrollTop-=1;
requestAnimationFrame(winners_scroll);
}


// _____________ œŒ¡≈ƒ»“≈À» œ–≈ƒ€ƒ”Ÿ»’ »√– ‘» —»–Œ¬¿ÕÕŒ…  ŒÃÕ¿“€ _____________


var fix_list=new Array();
var fix_can=1;


function fix_winners_scroll(){
if(fix_list.length>0 && fix_can==1){
var fix_text=fix_list.shift();
document.getElementById("fix_winners_insert").insertAdjacentHTML("afterBegin",fix_text);
document.getElementById("fix_winners_div").scrollTop+=50;
fix_can=2;
}
if(fix_can>1){ fix_can++; }
if(fix_can>200){ fix_can=1; }
document.getElementById("fix_winners_div").scrollTop-=1;
requestAnimationFrame(fix_winners_scroll);
}


// _____________ œ–»¬≈“—“¬”≈Ã ”◊¿—“Õ» Œ¬ _____________


var auth_list=new Array();
var auth_can=1;


function auth_scroll(){
if(auth_list.length>0 && auth_can==1){
var auth_f=auth_list.shift();
var auth_text='<tr class="room_auth_tr_'+auth_bg+'">'+auth_f;
document.getElementById("auth_table").insertAdjacentHTML("afterBegin",auth_text);
document.getElementById("auth_div").scrollTop+=75;
auth_can=2;
auth_bg++;
if(auth_bg>1){ auth_bg=0; }
}
if(auth_can>1){ auth_can++; }
if(auth_can>200){ auth_can=1; }
document.getElementById("auth_div").scrollTop-=1;
setTimeout("auth_scroll()",20);
}


// _____________ ◊“Œ¡€ –¿¡Œ“¿À¿ ¬—“¿¬ ¿ ›À≈Ã≈Õ“¿ ¬Œ ¬—≈’ ¡–¿”«≈–¿’ _____________


if(typeof HTMLElement!="undefined" && !HTMLElement.prototype.insertAdjacentElement){
HTMLElement.prototype.insertAdjacentElement=function(where,parsedNode){
switch(where){
case 'beforeBegin':
this.parentNode.insertBefore(parsedNode,this)
break;
case 'afterBegin':
this.insertBefore(parsedNode,this.firstChild);
break;
case 'beforeEnd':
this.appendChild(parsedNode);
break;
case 'afterEnd':
if(this.nextSibling) this.parentNode.insertBefore(parsedNode,this.nextSibling);
else this.parentNode.appendChild(parsedNode);
break;
}
}


HTMLElement.prototype.insertAdjacentHTML=function(where,htmlStr){
var r=this.ownerDocument.createRange();
r.setStartBefore(this);
var parsedHTML=r.createContextualFragment(htmlStr);
this.insertAdjacentElement(where,parsedHTML)
}


HTMLElement.prototype.insertAdjacentText=function(where,txtStr){
var parsedText=document.createTextNode(txtStr)
this.insertAdjacentElement(where,parsedText)
}
}


<!-- VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW VIEW  -->


function view(vname){
if(document.getElementById(vname).style.display=="none"){ document.getElementById(vname).style.display="block"; }
else{ document.getElementById(vname).style.display="none"; }
}


<!-- NEXT TIME NEXT TIME NEXT TIME NEXT TIME NEXT TIME NEXT TIME NEXT TIME NEXT TIME NEXT TIME NEXT TIME NEXT TIME NEXT TIME NEXT TIME -->


function nt(){
var nt_date=new Date();
nt_time=nt_date.getTime();
nt_time=nt_time.toString().substr(0,10);
nt_time=nt_time-mt_time;
}


var nt_d_1=new Array(2,3,4,22,23,24,32,33,34,42,43,44,52,53,54,62,63,64,72,73,74,82,83,84,92,93,94);
var nt_d_2=new Array(1,21,31,41,51,61,71,81,91);


function ntext(ntdig,ntxt_1,ntxt_2,ntxt_3){
nfound=0;
for(n=0;n<nt_d_1.length;n++){
if(ntdig==nt_d_1[n]){ ntxt_1=ntxt_2; nfound=1; break; }
}
if(nfound==0){
for(n=0;n<nt_d_2.length;n++){
if(ntdig==nt_d_2[n]){ ntxt_1=ntxt_3;}
}
}
return ntxt_1;
}

function next_time(){
nt();
ant=bnt-nt_time;

if(ant>=1){
var dnt=parseInt(ant/86400);
nbd=ntext(dnt.toString().substr(-2)," ‰ÌÂÈ "," ‰Ìˇ "," ‰ÂÌ¸ ");
var hnt=parseInt((ant-dnt*86400)/3600);
nbh=ntext(hnt," ˜‡ÒÓ‚ "," ˜‡Ò‡ "," ˜‡Ò ");
var mnt=parseInt((ant-dnt*86400-hnt*3600)/60);
if(hnt<10 && dnt!="0"){ hnt="0"+hnt };
if(mnt<10 && hnt!="0"){ mnt="0"+mnt };
nbm=ntext(mnt," ÏËÌÛÚ "," ÏËÌÛÚ˚ "," ÏËÌÛÚ‡ ");
var snt=parseInt(ant-dnt*86400-hnt*3600-mnt*60);
if(snt<10 && (hnt!="0" || mnt!="00")){ snt="0"+snt; }
nbs=ntext(snt," ÒÂÍÛÌ‰"," ÒÂÍÛÌ‰˚"," ÒÂÍÛÌ‰‡");

if(dnt=="0"){ dnt=""; nbd=""; }
if(dnt=="" && hnt=="0"){ hnt=""; nbh=""; }
if(hnt=="" && mnt=="00"){ mnt=""; nbm="" }

document.getElementById("nt_timer").innerHTML=dnt+nbd+hnt+nbh+mnt+nbm+snt+nbs;
setTimeout("next_time()",100);
}
else{
location.href=location.href;
}
}


<!-- ROOM STATUS ROOM STATUS ROOM STATUS ROOM STATUS ROOM STATUS ROOM STATUS ROOM STATUS ROOM STATUS ROOM STATUS ROOM STATUS ROOM STATUS ROOM STATUS -->


var rs_ajax=new XMLHttpRequest();


function room_status(){
rs_ajax.onreadystatechange=function(){
if(rs_ajax.readyState==4){
if(rs_ajax.status==200){
try{ eval(rs_ajax.responseText); }
catch(e){}
}
clearTimeout(rs_time);
rs_time=setTimeout("room_status();",10000);
}
}
rs_ajax.open("POST","/config.php?room_status=1",true);
rs_ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
rs_ajax.send();
}


<!-- SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 SHARE42 -->


/* share42.com | 22.08.2016 | (c) Dimox */
window.addEventListener('load',function(){var e=document.getElementsByTagName('div');for(var k=0;k<e.length;k++){if(e[k].className.indexOf('share42init')!=-1){if(e[k].getAttribute('data-url')!=-1)var u=e[k].getAttribute('data-url');if(e[k].getAttribute('data-title')!=-1)var t=e[k].getAttribute('data-title');if(e[k].getAttribute('data-image')!=-1)var i=e[k].getAttribute('data-image');if(e[k].getAttribute('data-description')!=-1)var d=e[k].getAttribute('data-description');if(e[k].getAttribute('data-path')!=-1)var f=e[k].getAttribute('data-path');if(e[k].getAttribute('data-icons-file')!=-1)var fn=e[k].getAttribute('data-icons-file');if(!f){function path(name){var sc=document.getElementsByTagName('script'),sr=new RegExp('^(.*/|)('+name+')([#?]|$)');for(var p=0,scL=sc.length;p<scL;p++){var m=String(sc[p].src).match(sr);if(m){if(m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];if(m[1].indexOf("/")==0)return m[1];b=document.getElementsByTagName('base');if(b[0]&&b[0].href)return b[0].href+m[1];else return document.location.pathname.match(/(.*[\/\\])/)[0]+m[1];}}return null;}f=path('share42.js');}if(!u)u=location.href;if(!t)t=document.title;if(!fn)fn='share_icons.png';function desc(){var meta=document.getElementsByTagName('meta');for(var m=0;m<meta.length;m++){if(meta[m].name.toLowerCase()=='description'){return meta[m].content;}}return'';}if(!d)d=desc();u=encodeURIComponent(u);t=encodeURIComponent(t);t=t.replace(/\'/g,'%27');i=encodeURIComponent(i);d=encodeURIComponent(d);d=d.replace(/\'/g,'%27');var fbQuery='u='+u;if(i!='null'&&i!='')fbQuery='s=100&p[url]='+u+'&p[title]='+t+'&p[summary]='+d+'&p[images][0]='+i;var vkImage='';if(i!='null'&&i!='')vkImage='&image='+i;var s=new Array('"#" data-count="vk" onclick="window.open(\'//vk.com/share.php?url='+u+'&title='+t+vkImage+'&description='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="œÓ‰ÂÎËÚ¸Òˇ ¬  ÓÌÚ‡ÍÚÂ"','"#" data-count="odkl" onclick="window.open(\'//ok.ru/dk?st.cmd=addShare&st._surl='+u+'&title='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="ƒÓ·‡‚ËÚ¸ ‚ Œ‰ÌÓÍÎ‡ÒÒÌËÍË"','"#" data-count="fb" onclick="window.open(\'//www.facebook.com/sharer/sharer.php?u='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="œÓ‰ÂÎËÚ¸Òˇ ‚ Facebook"','"#" data-count="mail" onclick="window.open(\'//connect.mail.ru/share?url='+u+'&title='+t+'&description='+d+'&imageurl='+i+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="œÓ‰ÂÎËÚ¸Òˇ ‚ ÃÓÂÏ ÃËÂ@Mail.Ru"','"#" data-count="twi" onclick="window.open(\'//twitter.com/intent/tweet?text='+t+'&url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="ƒÓ·‡‚ËÚ¸ ‚ Twitter"');var l='';for(j=0;j<s.length;j++)l+='<span class="share42-item" style="display:inline-block;margin:0 0px 0px 0;height:32px;"><a rel="nofollow" style="display:inline-block;width:32px;height:32px;margin:0;padding:0;outline:none;background:url(/images/'+fn+') -'+32*j+'px 0 no-repeat" href='+s[j]+' target="_blank"></a></span>';e[k].innerHTML='<span id="share42">'+l+'</span>';}};},false);
