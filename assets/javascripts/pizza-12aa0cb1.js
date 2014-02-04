!function(t,e,n,i){"use strict";var r={version:"0.0.1",settings:{donut:!1,donut_inner_ratio:.4,percent_offset:35,stroke_color:"#333",stroke_width:0,show_percent:!0,animation_speed:500,always_show_percent:!1,animation_type:"elastic"},init:function(e,i){var r=this;this.scope=e||n.body;var o=t("[data-pie-id]",this.scope);t.extend(!0,this.settings,i),o.length>0?o.each(function(){return r.build(t(this),i)}):this.build(t(this.scope),i),this.events()},events:function(){var n=this;t(e).off(".pizza").on("resize.pizza",n.throttle(function(){n.init()},100)),t(this.scope).off(".pizza").on("mouseenter.pizza mouseleave.pizza touchstart.pizza","[data-pie-id] li",function(e){var n=t(this).parent(),i=Snap(t("#"+n.data("pie-id")+' path[data-id="s'+t(this).index()+'"]')[0]),r=Snap(t(i.node).parent().find('text[data-id="'+i.node.getAttribute("data-id")+'"]')[0]),o=t(this).parent().data("settings");/start/i.test(e.type)&&t(i.node).siblings("path").each(function(){this.nodeName&&(i.animate({transform:"s1 1 "+i.node.getAttribute("data-cx")+" "+i.node.getAttribute("data-cy")},o.animation_speed,mina[o.animation_type]),Snap(t(this).next()[0]).animate({opacity:0},o.animation_speed))}),/enter|start/i.test(e.type)?(i.animate({transform:"s1.05 1.05 "+i.node.getAttribute("data-cx")+" "+i.node.getAttribute("data-cy")},o.animation_speed,mina[o.animation_type]),o.show_percent&&r.animate({opacity:1},o.animation_speed)):(i.animate({transform:"s1 1 "+i.node.getAttribute("data-cx")+" "+i.node.getAttribute("data-cy")},o.animation_speed,mina[o.animation_type]),r.animate({opacity:0},o.animation_speed))})},build:function(e,n){var i=this,r=e;return r.data("settings",t.extend({},i.settings,n,r.data("options"))),i.data(r,n||{}),i.update_DOM(i.pie(r))},data:function(e,n){var i=[];return t("li",e).each(function(){var e=t(this);n.data?i.push({value:n.data[e.index()],color:e.css("color"),segment:e}):i.push({value:e.data("value"),color:e.css("color"),segment:e})}),e.data("graph-data",i)},update_DOM:function(e){var n=e[0],i=e[1];return t(this.identifier(n)).html(i)},pie:function(e){for(var n=e.data("settings"),i=this.svg(e,n),r=e.data("graph-data"),o=0,a=[],s=0,u=t(this.identifier(e)).width()-4,l=0;l<r.length;l++)o+=r[l].value;for(var l=0;l<r.length;l++)a[l]=r[l].value/o*Math.PI*2;for(var l=0;l<r.length;l++){var c=s+a[l],h=u/2,f=u/2,d=u/2*.85;if(!n.donut){var p=h+d*Math.sin(s),g=f-d*Math.cos(s),m=h+d*Math.sin(c),y=f-d*Math.cos(c),v=0;c-s>Math.PI&&(v=1);var x="M"+h+","+f+" L"+p+","+g+" A"+d+","+d+" 0 "+v+" 1 "+m+","+y+" Z"}var b=t('path[data-id="s'+l+'"]',i.node);if(b.length>0)var w=Snap(b[0]);else var w=i.path();var k=r[l].value/o*100,C=t('text[data-id="s'+l+'"]',i.node);if(C.length>0){var S=Snap(C[0]);S.attr({x:h+(d+n.percent_offset)*Math.sin(s+a[l]/2),y:f-(d+n.percent_offset)*Math.cos(s+a[l]/2)})}else var S=w.paper.text(h+(d+n.percent_offset)*Math.sin(s+a[l]/2),f-(d+n.percent_offset)*Math.cos(s+a[l]/2),Math.ceil(k)+"%");var T=S.getBBox().width/2;n.always_show_percent?S.attr({x:S.attr("x")-T,opacity:1}):S.attr({x:S.attr("x")-T,opacity:0}),S.node.setAttribute("data-id","s"+l),w.node.setAttribute("data-cx",h),w.node.setAttribute("data-cy",f),n.donut?this.annular_sector(w.node,{centerX:h,centerY:f,startDegrees:s,endDegrees:c,innerRadius:d*n.donut_inner_ratio,outerRadius:d}):w.attr({d:x}),w.attr({fill:r[l].color,stroke:n.stroke_color,strokeWidth:n.stroke_width}),w.node.setAttribute("data-id","s"+l),this.animate(w,h,f,n),s=c}return[e,i.node]},animate:function(e,n,i,r){e.hover(function(e){var o=Snap(e.target),a=Snap(t(o.node).parent().find('text[data-id="'+o.node.getAttribute("data-id")+'"]')[0]);o.animate({transform:"s1.05 1.05 "+n+" "+i},r.animation_speed,mina[r.animation_type]),a.touchend(function(){o.animate({transform:"s1.05 1.05 "+n+" "+i},r.animation_speed,mina[r.animation_type])}),r.show_percent&&(a.animate({opacity:1},r.animation_speed),a.touchend(function(){a.animate({opacity:1},r.animation_speed)}))},function(e){var o=Snap(e.target),a=Snap(t(o.node).parent().find('text[data-id="'+o.node.getAttribute("data-id")+'"]')[0]);o.animate({transform:"s1 1 "+n+" "+i},r.animation_speed,mina[r.animation_type]),a.animate({opacity:0},r.animation_speed)})},svg:function(e,n){var i=t(this.identifier(e)),r=t("svg",i),o=i.width(),a=o;return r=r.length>0?Snap(r[0]):Snap(o,a),r.node.setAttribute("width",o+n.percent_offset),r.node.setAttribute("height",a+n.percent_offset),r.node.setAttribute("viewBox","-"+n.percent_offset+" -"+n.percent_offset+" "+(o+1.5*n.percent_offset)+" "+(a+1.5*n.percent_offset)),r},annular_sector:function(t,e){function n(t){var e={cx:t.centerX||0,cy:t.centerY||0,startRadians:t.startDegrees||0,closeRadians:t.endDegrees||0},n=t.thickness!==i?t.thickness:100;return e.r1=t.innerRadius!==i?t.innerRadius:t.outerRadius!==i?t.outerRadius-n:200-n,e.r2=t.outerRadius!==i?t.outerRadius:e.r1+n,e.r1<0&&(e.r1=0),e.r2<0&&(e.r2=0),e}var r=n(e),o=[[r.cx+r.r2*Math.sin(r.startRadians),r.cy-r.r2*Math.cos(r.startRadians)],[r.cx+r.r2*Math.sin(r.closeRadians),r.cy-r.r2*Math.cos(r.closeRadians)],[r.cx+r.r1*Math.sin(r.closeRadians),r.cy-r.r1*Math.cos(r.closeRadians)],[r.cx+r.r1*Math.sin(r.startRadians),r.cy-r.r1*Math.cos(r.startRadians)]],a=r.closeRadians-r.startRadians,s=a%(2*Math.PI)>Math.PI?1:0,u=[];u.push("M"+o[0].join()),u.push("A"+[r.r2,r.r2,0,s,1,o[1]].join()),u.push("L"+o[2].join()),u.push("A"+[r.r1,r.r1,0,s,0,o[3]].join()),u.push("z"),t.setAttribute("d",u.join(" "))},identifier:function(t){return"#"+t.data("pie-id")},throttle:function(t,e){var n=null;return function(){var i=this,r=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,r)},e)}}};e.Pizza=r}($,this,this.document);