!function(t,e,n,r){"use strict";var i={version:"0.0.1",settings:{donut:!1,donut_inner_ratio:.4,percent_offset:35,stroke_color:"#333",stroke_width:0,show_percent:!0,animation_speed:500,always_show_percent:!1,animation_type:"elastic"},init:function(e,r){var i=this;this.scope=e||n.body;var a=t("[data-pie-id]",this.scope);t.extend(!0,this.settings,r),a.length>0?a.each(function(){return i.build(t(this),r)}):this.build(t(this.scope),r),this.events()},events:function(){var n=this;t(e).off(".pizza").on("resize.pizza",n.throttle(function(){n.init()},100)),t(this.scope).off(".pizza").on("mouseenter.pizza mouseleave.pizza touchstart.pizza","[data-pie-id] li",function(e){var n=t(this).parent(),r=Snap(t("#"+n.data("pie-id")+' path[data-id="s'+t(this).index()+'"]')[0]),i=Snap(t(r.node).parent().find('text[data-id="'+r.node.getAttribute("data-id")+'"]')[0]),a=t(this).parent().data("settings");/start/i.test(e.type)&&t(r.node).siblings("path").each(function(){this.nodeName&&(r.animate({transform:"s1 1 "+r.node.getAttribute("data-cx")+" "+r.node.getAttribute("data-cy")},a.animation_speed,mina[a.animation_type]),Snap(t(this).next()[0]).animate({opacity:0},a.animation_speed))}),/enter|start/i.test(e.type)?(r.animate({transform:"s1.05 1.05 "+r.node.getAttribute("data-cx")+" "+r.node.getAttribute("data-cy")},a.animation_speed,mina[a.animation_type]),a.show_percent&&i.animate({opacity:1},a.animation_speed)):(r.animate({transform:"s1 1 "+r.node.getAttribute("data-cx")+" "+r.node.getAttribute("data-cy")},a.animation_speed,mina[a.animation_type]),i.animate({opacity:0},a.animation_speed))})},build:function(e,n){var r=this,i=e;return i.data("settings",t.extend({},r.settings,n,i.data("options"))),r.data(i,n||{}),r.update_DOM(r.pie(i))},data:function(e,n){var r=[];return t("li",e).each(function(){var e=t(this);n.data?r.push({value:n.data[e.index()],color:e.css("color"),segment:e}):r.push({value:e.data("value"),color:e.css("color"),segment:e})}),e.data("graph-data",r)},update_DOM:function(e){var n=e[0],r=e[1];return t(this.identifier(n)).html(r)},pie:function(e){for(var n=e.data("settings"),r=this.svg(e,n),i=e.data("graph-data"),a=0,o=[],s=0,u=t(this.identifier(e)).width()-4,c=0;c<i.length;c++)a+=i[c].value;for(var c=0;c<i.length;c++)o[c]=2*i[c].value/a*Math.PI;for(var c=0;c<i.length;c++){var l=s+o[c],h=u/2,f=u/2,d=.85*(u/2);if(!n.donut){var p=h+d*Math.sin(s),g=f-d*Math.cos(s),m=h+d*Math.sin(l),y=f-d*Math.cos(l),v=0;l-s>Math.PI&&(v=1);var x="M"+h+","+f+" L"+p+","+g+" A"+d+","+d+" 0 "+v+" 1 "+m+","+y+" Z"}var b=t('path[data-id="s'+c+'"]',r.node);if(b.length>0)var w=Snap(b[0]);else var w=r.path();var C=100*(i[c].value/a),k=t('text[data-id="s'+c+'"]',r.node);if(k.length>0){var S=Snap(k[0]);S.attr({x:h+(d+n.percent_offset)*Math.sin(s+o[c]/2),y:f-(d+n.percent_offset)*Math.cos(s+o[c]/2)})}else var S=w.paper.text(h+(d+n.percent_offset)*Math.sin(s+o[c]/2),f-(d+n.percent_offset)*Math.cos(s+o[c]/2),Math.ceil(C)+"%");var T=S.getBBox().width/2;n.always_show_percent?S.attr({x:S.attr("x")-T,opacity:1}):S.attr({x:S.attr("x")-T,opacity:0}),S.node.setAttribute("data-id","s"+c),w.node.setAttribute("data-cx",h),w.node.setAttribute("data-cy",f),n.donut?this.annular_sector(w.node,{centerX:h,centerY:f,startDegrees:s,endDegrees:l,innerRadius:d*n.donut_inner_ratio,outerRadius:d}):w.attr({d:x}),w.attr({fill:i[c].color,stroke:n.stroke_color,strokeWidth:n.stroke_width}),w.node.setAttribute("data-id","s"+c),this.animate(w,h,f,n),s=l}return[e,r.node]},animate:function(e,n,r,i){e.hover(function(e){var a=Snap(e.target),o=Snap(t(a.node).parent().find('text[data-id="'+a.node.getAttribute("data-id")+'"]')[0]);a.animate({transform:"s1.05 1.05 "+n+" "+r},i.animation_speed,mina[i.animation_type]),o.touchend(function(){a.animate({transform:"s1.05 1.05 "+n+" "+r},i.animation_speed,mina[i.animation_type])}),i.show_percent&&(o.animate({opacity:1},i.animation_speed),o.touchend(function(){o.animate({opacity:1},i.animation_speed)}))},function(e){var a=Snap(e.target),o=Snap(t(a.node).parent().find('text[data-id="'+a.node.getAttribute("data-id")+'"]')[0]);a.animate({transform:"s1 1 "+n+" "+r},i.animation_speed,mina[i.animation_type]),o.animate({opacity:0},i.animation_speed)})},svg:function(e,n){var r=t(this.identifier(e)),i=t("svg",r),a=r.width(),o=a;return i=i.length>0?Snap(i[0]):Snap(a,o),i.node.setAttribute("width",a+n.percent_offset),i.node.setAttribute("height",o+n.percent_offset),i.node.setAttribute("viewBox","-"+n.percent_offset+" -"+n.percent_offset+" "+(a+1.5*n.percent_offset)+" "+(o+1.5*n.percent_offset)),i},annular_sector:function(t,e){function n(t){var e={cx:t.centerX||0,cy:t.centerY||0,startRadians:t.startDegrees||0,closeRadians:t.endDegrees||0},n=t.thickness!==r?t.thickness:100;return e.r1=t.innerRadius!==r?t.innerRadius:t.outerRadius!==r?t.outerRadius-n:200-n,e.r2=t.outerRadius!==r?t.outerRadius:e.r1+n,e.r1<0&&(e.r1=0),e.r2<0&&(e.r2=0),e}var i=n(e),a=[[i.cx+i.r2*Math.sin(i.startRadians),i.cy-i.r2*Math.cos(i.startRadians)],[i.cx+i.r2*Math.sin(i.closeRadians),i.cy-i.r2*Math.cos(i.closeRadians)],[i.cx+i.r1*Math.sin(i.closeRadians),i.cy-i.r1*Math.cos(i.closeRadians)],[i.cx+i.r1*Math.sin(i.startRadians),i.cy-i.r1*Math.cos(i.startRadians)]],o=i.closeRadians-i.startRadians,s=o%(2*Math.PI)>Math.PI?1:0,u=[];u.push("M"+a[0].join()),u.push("A"+[i.r2,i.r2,0,s,1,a[1]].join()),u.push("L"+a[2].join()),u.push("A"+[i.r1,i.r1,0,s,0,a[3]].join()),u.push("z"),t.setAttribute("d",u.join(" "))},identifier:function(t){return"#"+t.data("pie-id")},throttle:function(t,e){var n=null;return function(){var r=this,i=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(r,i)},e)}}};e.Pizza=i}($,this,this.document);