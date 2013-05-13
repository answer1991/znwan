/**
 * Created with IntelliJ IDEA.
 * User: zet
 * Date: 13-5-11
 * Time: 下午3:02
 * To change this template use File | Settings | File Templates.
 */


(function(win, doc){
    win._paras = (function() {
        var url = window.location.href, start = url.indexOf("?") + 1, paras = {};
        if (start !== 0) {
            var queryString = url.substring(start),
                paraNames = queryString.split("&"),
                arr = [], i = 0, sIndex;
            for (; i < paraNames.length; i++) {
                arr = paraNames[i].split("=");
                if (i === paraNames.length - 1) {
                    sIndex = arr[1].indexOf("#");
                    if (sIndex !== -1) {
                        arr[1] = arr[1].substring(0, sIndex);
                    }
                }
                paras[arr[0]] = arr[1]
            }
        }
        return paras
    })();

    console.dir(win._paras);

})(window, document);

(function(win, doc){
    win.device =  (/iphone|ipad|itouch/gi).test(navigator.appVersion) ? 'iOS'
        : (/android/gi).test(navigator.appVersion) ? 'Android'
        : 'unknown';

    //显示对应的特殊按钮
    $('a[device-type=' + win.device +']').removeClass('none');

    /*
    $.ajax({
        url: 'http://42.121.145.1/party/1',
        type: 'get',
        dataType: 'json',
        success: function(data){
            console.dir(data);
        }
    });
    */

    var appInfo = $('.appInfo'),
        appInfoCloseBtn = $('img.close'),
        appInfoOpenBtn = $('#iphoneInfoBtn'),
        cover = $('.cover');

    //appInfo.css('margin-top', (- appInfo.height() / 2) + 'px');

    appInfoOpenBtn.on('click', function(){
        cover.show();
        appInfo.css({
            '-webkit-transform': 'scale(0)'
        }).show().css('width', null).css({
            '-webkit-transform': 'scale(1)'
        });
    });

    appInfoCloseBtn.on('click', function(){
        appInfo.css({
            '-webkit-transform': 'scale(0)'
        });
        setTimeout(function(){
            cover.hide();
            appInfo.hide();
        }, 500);
    });

    var handleFunction = function (data){

    };

    var test = {"status":0,"data":{"id":1,"name":"test","description":null,"imgs":null,"launchDate":1368237475000,"dueDate":null,"startDate":1366214400000,"endDate":null,"updateDate":null,"status":"unconfirm","visible":"public","address":"test","spotName":null,"spotAddress":null,"spotLat":0.0,"spotLon":0.0,"custom":null,"partyCategory":{"id":2,"name":"ktv","ch_name":"ktv","icon":"","parentType":{"id":1,"name":"Entertainment","ch_name":"娱乐","icon":"","parentType":null}},"host":{"id":1,"realName":"fred","sex":"男","regTime":null,"regIp":null,"accountStatus":0,"accountType":0,"cityId":0,"cityName":null,"lastLoginIp":"27.46.134.58","lastLoginTime":1368254943000,"image":null,"email":null,"bindPhone":"18629626232","lon":0.0,"lat":0.0,"password":null,"token":null,"contacts":[{"id":1,"name":"fred","bindPhone":"18629626232","date":1368237475000,"_user_id":1,"isFriend":false},{"id":2,"name":"fred1","bindPhone":"18629626231","date":1368237475000,"_user_id":null,"isFriend":false}]},"invitees":[{"id":1,"attend":3,"name":"fred","bindPhone":"18629626232","user":{"id":1,"realName":"fred","sex":"男","regTime":null,"regIp":null,"accountStatus":0,"accountType":0,"cityId":0,"cityName":null,"lastLoginIp":"27.46.134.58","lastLoginTime":1368254943000,"image":null,"email":null,"bindPhone":"18629626232","lon":0.0,"lat":0.0,"password":null,"token":null,"contacts":[{"id":1,"name":"fred","bindPhone":"18629626232","date":1368237475000,"_user_id":1,"isFriend":false},{"id":2,"name":"fred1","bindPhone":"18629626231","date":1368237475000,"_user_id":null,"isFriend":false}]},"notice":false,"invitation":null,"date":null},{"id":2,"attend":3,"name":"fred1","bindPhone":"18629626231","user":null,"notice":false,"invitation":null,"date":null}],"messages":[]}};

})(window, document);