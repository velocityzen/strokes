"use strict";!function(t,e,r){var n="http://www.w3.org/2000/svg",a=function(){var t,n=e.body.style,a=["WebkitTransition","MozTransition","msTransition","transition"];for(t in a)if(n[a[t]]!==r)return a[t]}(),s=function(t,e,n){var a=this;a.drawTime=n.drawTime||1e3,a.changeTime=n.changeTime,a.changeDelay=a.drawTime+(n.changeDelay||0),a.transition=n.transition||"stroke-dashoffset "+a.drawTime+"ms ease-in-out",a.current=r,a.pathes=[],a.vectors=e,a.lengths=a.getLengths(e),t=Array.isArray(t)?t:[t],t.forEach(function(t){var e=a.createSvg(),r=a.createPath();e.appendChild(r),t.insertBefore(e,t.firstChild),a.pathes.push(r)}),a.draw(n.start||0,!0),a.changeTime!==r&&setInterval(function(){a.draw()},a.changeTime)};s.prototype={draw:function(t,e){var n=this,s=n.pathes;if(t!==n.current){t===r&&(t=n.current+1),t>=n.vectors.length&&(t=0);var i=n.lengths[n.current],o=n.lengths[t],c=n.vectors[t];for(var h in s)s[h].style.strokeDashoffset=-i;setTimeout(function(){for(var t in s){var e=s[t];e.style[a]="none",e.setAttribute("d",c),e.style.strokeDasharray=o+" "+o,e.style.strokeDashoffset=o,e.getBoundingClientRect(),e.style[a]=n.transition,e.style.strokeDashoffset=0}},e?0:n.changeDelay),n.current=t}},createSvg:function(t){t=t||{},t.version=1.1,t.xmlns="http://www.w3.org/2000/svg";var r=e.createElementNS(n,"svg");for(var a in t)r.setAttribute(a,t[a]);return r},createPath:function(){return e.createElementNS(n,"path")},getLengths:function(t){var e,r=this,n=r.createPath(),a=[];for(e in t)n.setAttribute("d",t[e]),a[e]=n.getTotalLength();return a}},t.Strokes=s}(window,document);