$(document).ready(function(){var t=$(".countdown"),e=t.attr("data-finish-date"),n=t.attr("data-UTC"),a=t.attr("data-finish-message")
t.downCount({date:e,offset:n},function(){alert(a)})}),function(t){t.fn.downCount=function(e,n){function a(){var t=new Date(o.date),e=f(),a=t-e
if(0>a)return clearInterval(d),void(n&&"function"==typeof n&&n())
var i=1e3,s=60*i,u=60*s,l=24*u,h=Math.floor(a/l),c=Math.floor(a%l/u),v=Math.floor(a%u/s),m=Math.floor(a%s/i)
h=(h+"").length>=2?h:"0"+h,c=(c+"").length>=2?c:"0"+c,v=(v+"").length>=2?v:"0"+v,m=(m+"").length>=2?m:"0"+m
var x=1===h?"day":"days",g=1===c?"hour":"hours",y=1===v?"minute":"minutes",w=1===m?"second":"seconds"
r.find(".days").text(h),r.find(".hours").text(c),r.find(".minutes").text(v),r.find(".seconds").text(m),r.find(".days_ref").text(x),r.find(".hours_ref").text(g),r.find(".minutes_ref").text(y),r.find(".seconds_ref").text(w)}var o=t.extend({date:null,offset:null},e)
o.date||t.error("Date is not defined."),Date.parse(o.date)||t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.")
var r=this,f=function(){var t=new Date,e=t.getTime()+6e4*t.getTimezoneOffset(),n=new Date(e+36e5*o.offset)
return n},d=setInterval(a,300)}}(jQuery)