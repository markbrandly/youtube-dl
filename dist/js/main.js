!function(){function t(t){if(splitUrl=t.split("?"),splitUrl.length>1){var a,e={};data=splitUrl[1],data=data.split("&");for(var r=0;r<data.length;r++){var a=data[r].split("=");e[a[0]]=a[1]}return e}return!1}var a=angular.module("yt-dl",[]);a.controller("ctrl",["$scope","$http","$sce",function(a,e,r){a.trustSrc=function(t){return r.trustAsResourceUrl(t)},a.resetData=function(){a.vidData=null,a.videoId=null},a.findVideo=function(){var r=t(a.search);r&&r.v?(a.videoId=r.v,a.loadVideo(a.videoId,e)):a.videoId=""},a.loadVideo=function(t,e){var r={method:"GET",url:"https://zazkov-youtube-grabber-v1.p.mashape.com/download.video.php?id="+t,headers:{}};r.headers["X-Mashape-Key"]="guvF5ja5DpmshEL6WyA5hFQWU22lp16Ij2ljsnHcwxUeIKvhOs",e(r).success(function(t){a.vidData=t,console.log(JSON.stringify(t,null,2))}).error(function(){})}}])}();