!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=4)}({4:function(e,t,i){e.exports=i("PSNx")},PSNx:function(e,t){$((function(){!function(){var e={},t={},n=[],a=[],s={},r=[],o=null;function d(){var e=firebase.database().ref().child("favorites").child(o.uid);e.on("child_added",(function(e){var t=e.val();r.push(t),function(e){var t=$("#session-detail");t.find(".session-id").text()==e&&t.find(".session-favorite-icon").text("favorite")}(t)})),e.on("child_removed",(function(e){var t=e.val(),i=r.indexOf(t);-1!=i&&(r.splice(i,1),function(e){var t=$("#session-detail");t.find(".session-id").text()==e&&t.find(".session-favorite-icon").text("favorite_border")}(t))}))}function l(e){return e.toUpperCase().replace(/\s+/g,"-").replace(/,/g,"").replace(/\./g,"").replace(/\//g,"-")}function c(e){return e.start.replace(/:/g,"_")}function f(n){h(n)||v(n);var a="<div id='"+n.id+"' class='session hoverable'><div class='session-title'>"+n.title+"</div><div class='hide-on-med-and-down session-detail-bottom'><div><i class='tiny material-icons table-icon'>person</i>"+C(n.speakers,!1)+"</div><div><i class='tiny material-icons table-icon'>local_offer</i>"+n.track+"</div><div><i class='tiny material-icons table-icon'>schedule</i>"+n.duration+"</div></div></div>",s=function(e){var t=k(e);return $("#"+t).find("table.day tr."+c(e)+" td."+e.room)}(n);if(s.length){if(s.html(a),s.attr("rowspan",function(e){var t=e.duration,n=60*parseInt(t.split(":")[0]);return n+=parseInt(t.split(":")[1]),function(e,t){var n=e.start;for(i=0;i<t;i++)h(e)?t>1&&i>0&&u(e):i>0?v(e,!0):v(e),e.start=p(e.start);e.start=n}(e,n/=40),n}(n)),s.attr("rowspan")>1&&(a="<div sid='"+n.id+"' class='session hoverable hidden absolute' rs='"+s.attr("rowspan")+"'><div class='session-title'>"+n.title+"</div></div></div>",s.html(s.html()+a)),n.track){var r=s.find("div.session");r.addClass(l(n.track)),t[l(n.track)]&&r.css("background-color",t[l(n.track)].color),function(e){var i=k(e),n=$("#"+i).find(".day-track-filter ul"),a=l(e.track);if(!n.find("li."+a).length){var s=t[l(e.track)]?t[l(e.track)].color:"#FFFFFF",r="<li class='day "+a+"'><a href='#' style='border-left-color: "+s+"'><input type='checkbox' id='day-"+a+"' name='"+a+"' class='track-filter' value='"+e.track+"'><label for='day-"+a+"'>"+e.track+"</label></a></li>";n.append(r)}o=n,d=o.children("li").get(),d.sort((function(e,t){return $(e).text().toUpperCase().localeCompare($(t).text().toUpperCase())})),$.each(d,(function(e,t){o.append(t)}));var o,d}(n)}}else!function(t){console.log("Start: "+t.start+" & Room: "+e[t.room].name+" & Type: "+t.type+" & Track: "+t.track+" & Title: "+t.title)}(n)}function u(e){$("#"+k(e)).find("table.day > tbody:last-child > tr."+c(e)+" > td."+e.room).addClass("hidden"),$("#"+k(e)).find("table.day > tbody:last-child > tr."+c(e)+" > td."+e.room).attr("hid",e.id)}function p(e){var t=parseInt(e.split(":")[0]),i=parseInt(e.split(":")[1]);return i+40>=60?(t+=1,i=i+40-60):i+=40,t<10?"0"+t+":"+(i<10?"0"+i:i):t+":"+(i<10?"0"+i:i)}function h(e){return $("#"+k(e)).find("table.day tr."+c(e)).length}function v(t,i){var n="<tr class='timeslot "+c(t)+"'><td class='session-time'><span class='session-hour'>"+t.start.split(":")[0]+"</span><span class='session-minute'>"+t.start.split(":")[1]+"</span></td>";for(key in e)b(e[key])==k(t)&&(i?key!=t.room?n+="<td class='"+key+"'></td>":n+="<td class='"+key+" hidden' hid='"+t.id+"'></td>":n+="<td class='"+key+"'></td>");n+="</tr>",$("#"+k(t)).find("table.day > tbody:last-child").append(n)}function m(){$(".absolute").each((function(){$("td[hid="+$(this).attr("sid")+"]");var e=$("#"+$(this).attr("sid")).innerWidth(),t=10;$("td[hid="+$(this).attr("sid")+"]").each((function(){e+=$(this).outerWidth(!0)+20,t+=-1})),$(this).width(e-t)}))}function b(e){return"talk"==e.type.toLowerCase()?"talks":"contest"==e.type.toLowerCase()?"contests":"team"==e.type.toLowerCase()?"teams":"talks"}function k(e){return"talk"==e.type.toLowerCase()?"talks":"contest"==e.type.toLowerCase()?"contests":"team"==e.type.toLowerCase()?"teams":"talks"}function g(e){var i=$("#session-detail");t[l(e.track)]&&i.css("background-color",t[l(e.track)].color),y(e),i.modal("open")}function y(t){var i=$("#session-detail"),n=t.description?t.description:"",a=-1!=r.indexOf(t.id)?"favorite":"favorite_border";i.find(".session-id").text(t.id),i.find(".session-title").text(t.title),i.find(".session-speakers").html(C(t.speakers,!0)),i.find(".session-info .session-track").text(t.track),i.find(".session-info .session-difficulty").text("All"==t.difficulty?"All audiences":t.difficulty),i.find(".session-info .session-start").text(t.start),i.find(".session-info .session-room").text(e[t.room].name),i.find(".session-info .session-duration").text(t.duration),i.find(".session-description").html(n.replace(/\n/g,"<br />")),i.find(".session-favorite-icon").text(a);var o=$(".session-speakers-icon");t.speakers?o.removeClass("hide"):o.addClass("hide");var d=s[t.id];i.find("#vote-comment").val(d?d.feedback:""),d?i.find("#vote-rating").barrating("set",d.rating):i.find("#vote-rating").barrating("clear"),Materialize.updateTextFields()}function w(){$("#signin").modal("open")}function x(e){var t=$("#session-detail"),i=s[e];t.find("#vote-comment").val(i?i.feedback:""),i?t.find("#vote-rating").barrating("set",i.rating):t.find("#vote-rating").barrating("clear"),Materialize.updateTextFields()}function C(e,t){var a="";if(e)for(i=0;i<e.length;i++){var s=n[e[i]];a+=1==t?"<a href='/speakers#"+n[e[i]].id+"' class='speaker-link'>"+s.name+"</a>":s.name,e.length-1>i&&(a+=", ")}return a}firebase.database().ref().child("rooms").orderByChild("name").once("value",(function(i){i.forEach((function(t){var i=t.val();e[i.id]=i})),function(){var t="<tr><th></th>",i="<tr><th></th>",n="<tr><th></th>";for(var a in e)"contests"==b(e[a])?i+="<th>"+e[a].name+"</th>":"teams"==b(e[a])?n+="<th>"+e[a].name+"</th>":t+="<th>"+e[a].name+"</th>";$("#talks").find("table.day > thead").append(t),$("#contests").find("table.day > thead").append(i),$("#teams").find("table.day > thead").append(n)}(),firebase.database().ref().child("tracks").once("value",(function(e){e.forEach((function(e){var i=e.val();t[l(i.name)]=i})),firebase.database().ref().child("speakers").orderByChild("name").once("value",(function(e){e.forEach((function(e){var t=e.val();n[t.id]=t})),function(){var e=firebase.database().ref().child("sessions").orderByChild("start");if(e.on("child_added",(function(e){var t=e.val();a[t.id]=t,f(t),m()})),e.on("child_changed",(function(e){var t=e.val();a[t.id]=t,$(t.id).remove(),f(t),m(),$("#session-detail").find(".session-id").text()==t.id&&y(t)})),e.on("child_removed",(function(e){var t=a[e.key];delete a[e.key],$(t.id).remove()})),function(){$("#sessions").removeClass("hide");var e=$("#sessions").find("ul.tabs.tabs-fixed-width"),t=e.find("li.tab:first a").attr("href").substring(1);e.tabs("select_tab",t),$(".preloader-wrapper").addClass("hide")}(),window.location.hash){var t=window.location.hash.replace("#","");a[t]&&($(window.location.hash)[0].scrollIntoView(),g(a[t]))}}()}))}))})),firebase.auth().onAuthStateChanged((function(e){var t;e?(o=e,(t=firebase.database().ref().child("votes").child(o.uid)).on("child_added",(function(e){s[e.key]=e.val(),x(e.key)})),t.on("child_changed",(function(e){s[e.key]=e.val(),x(e.key)})),t.on("child_removed",(function(e){delete s[e.key],x(e.key)})),d()):(o=null,s={},r=[])}),(function(e){console.log(e)})),$(".modal").modal(),$("#vote-rating").barrating({theme:"fontawesome-stars",showSelectedRating:!1}),$("body").on("click",".session",(function(e){e.preventDefault();var t=$(this).attr("id");t&&g(a[t])})).on("click",".dropdown-wrapper",(function(e){e.stopImmediatePropagation(),$(this).toggleClass("active")})).on("change",".track-filter",(function(e){e.stopImmediatePropagation(),function(e){$(e);var t=$(e).parent().parent().parent().parent().parent(),n=t.find("div.session"),a=t.find(".dropdown-wrapper").find(".track-filter:checkbox:checked"),s=t.find(".filter-wrapper"),r=t.find(".filters");n.addClass("hide"),s.removeClass("hide");var o="";for(i=0;i<a.length;i++)i>0&&(o+=", "),o+=$(a[i]).val(),t.find("div.session."+l($(a[i]).val())).removeClass("hide");r.text(o),0==a.length&&(s.addClass("hide"),n.removeClass("hide"))}($(this))})).on("click",".speaker-link",(function(e){e.preventDefault(),function(e){var t=n[e],i=$("#speaker-detail");i.find(".speaker-image").attr("src","/imgs/person-placeholder.jpg"),firebase.storage().ref().child("speakers/"+t.email+".jpg").getDownloadURL().then((function(e){i.find(".speaker-image").attr("src",e)})),i.find(".speaker-name").text(t.name),i.find(".speaker-country").text(t.country),i.find(".speaker-organization").text(t.organization),i.find(".speaker-bio").html(t.bio.replace(/\n/g,"<br />"));var a="";t.twitter&&(a="<a href='http://twitter.com/"+t.twitter+"' target='_blank' class='twitter'>@"+t.twitter+"</a>"),i.find(".speaker-twitter").html(a),i.modal("open")}($(this).attr("href").split("#")[1])})).on("click",".session-favorite-icon",(function(e){var t,i;e.preventDefault(),o?(t=$("#session-detail").find(".session-id").text(),i=firebase.database().ref().child("favorites").child(o.uid).child(t),-1==r.indexOf(t)?i.set(t):i.remove()):w()})).on("click","#google-sign-in",(function(e){var t;e.preventDefault(),$("#signin").modal("close"),(t=new firebase.auth.GoogleAuthProvider).addScope("https://www.googleapis.com/auth/plus.login"),firebase.auth().signInWithPopup(t).then((function(e){o=e.user})).catch((function(e){e.code,e.message,e.email,e.credential}))})).on("click","#vote-send",(function(e){e.preventDefault(),function(){if(o){var e=$("#session-detail"),t=e.find(".session-id").text(),i=e.find("#vote-rating").val(),n=e.find("#vote-comment").val();if(i){var a={};a.rating=i,a.feedback=n,firebase.database().ref().child("votes").child(o.uid).child(t).set(a,(function(t){t?alert("An error occurred while processing your request"):e.modal("close")}))}else alert("Rating is required")}else w()}()})).on("click",".tab",(function(){m()})),$(window).on("resize",(function(){$(this).width()<993&&m()}))}()}))}});