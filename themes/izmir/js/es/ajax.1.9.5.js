"use strict";var T;(T=void 0===T?{}:T).AJAX={returns:"",http:{},url:"",set:function(){return new XMLHttpRequest},connection:function(t,e,n){return this.http=this.set(),"POST"==e?(this.http.open(e,t,!0),this.http.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8")):(t+="?"+this.getURL(),this.http.open(e,t,!0),this.http.setRequestHeader("Content-Type","text/xml; charset=utf-8")),this.http.onreadystatechange=n||function(){var e=T.AJAX.http;if(4==e.readyState){var t=null;try{t=JSON.parse(e.responseText)}catch(t){e.responseText&&-1!==e.responseText.indexOf("<html lang=")&&T.AJAX.showRefreshAlert()}if(t&&t.js&&t.js.jsFunction){for(var n=t.js.jsFunction.split("."),s=window,o=n.length,r=!0,i=0;i<o;i++){var a=n[i];a in s?s=s[a]:r=!1}0<o&&r&&"function"==typeof s&&("T"==n[0]?s.call(T,t):s(t))}}},this.http.send(this.getURL()),this.url="",this.http},showRefreshAlert:function(){edl.use("edModal",{desc:edCom.lcl_frm("servis_tekrar_dene"),title:"Uyarı",type:"alert",buttons:[{title:"Sayfayı Yenile"},"kapat"],on:{btn_0:function(){setTimeout(function(){document.location.reload()},500)}}})},param:function(){return"token="+document.body.getAttribute("data-token")+"&ajax=1&pn="+document.location.pathname},add:function(t,e){null!=e&&(this.url+="&"+t+"="+encodeURIComponent(e))},setUrl:function(t){this.url+=t},getURL:function(){return this.param()+this.url}};