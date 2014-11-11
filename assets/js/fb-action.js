//<![CDATA[
window.fbAsyncInit = function() {
    FB.init({
        appId: FB_APP_ID, //facebook app id
        channelUrl: FB_CHANNEL_URL, // Channel File
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse XFBML
        version: 'v2.1'
    });


    FB.Event.subscribe('auth.authResponseChange', function(response)
    {
        if (response.status === 'connected')
        {
            document.getElementById("message").innerHTML = "<br/>Connected to Facebook<br/>";
            //SUCCESS

        }
        else if (response.status === 'not_authorized')
        {
            document.getElementById("message").innerHTML = "<br/>Failed to Connect";

            //FAILED
        } else
        {
            document.getElementById("message").innerHTML = "<br/>Logged Out";

            //UNKNOWN ERROR
        }
    });

};
function Login() {
    FB.login(function(response) {
        if (response.authResponse) {
            var access_token = FB.getAuthResponse()['accessToken'];
            alert('Access Token = ' + access_token);
            FB.api('/me', function(response) {
                alert('welcome ' + response.name + '.');

            });
        } else {
        }
    }, {scope: 'publish_actions,create_event,user_events,read_mailbox'});

}
;
function postGroups349541651891910() {
    FB.login(function() {
        var nameVar = 'Giày xuất khẩu';
        var linkVar = 'http://xshophanoi.com';
        FB.api("/349541651891910/feed", 'post', {name: nameVar, link: linkVar}, function(response) {
            if (!response || response.error) {
                alert('Error occured');
            } else {
                alert('Post ID: ' + response.id);
            }
        });
    }, {scope: 'publish_actions, user_groups'});
}
;
function postWall() {
    FB.login(function() {
        FB.api('/me/photos', 'post',
                {
                    message: 'X-Shop giày xuất khẩu chất lượng cao',
                    url: '' //image URL
                },
        function(response) {
            if (response === !response.error) {
                console.log(response.id);
            } else {
                console.log('failed');
            }
        });
    }, {scope: 'publish_actions, user_groups'});
}
;
function postGroups(id) {
    console.log('call post');
    var params = {};
    params['message'] = 'Mua giày tại X-Shop ngay hôm nay';
    params['name'] = 'Giày xuất khẩu';
    params['description'] = 'X-Shop chuyên giày xuất khẩu';
    params['link'] = 'http://facebook.com/xshophanoi';
    params['picture'] = ''; //Image URL
    params['caption'] = 'Giày Việt Nam xuất khẩu';

    FB.api("/" + id + "/feed", 'post',
            {
                message: 'Giày xịn',
                url: '', //image URL
            }, function(response) {
        if (!response || response.error) {
            alert('Failure' + id);
        } else {
            alert('Successfully' + id + ' Post ID: ' + response.id);
        }
    });
}
;
function postPhotosGroups(idGroup) {
    var params = {};
    params['message'] = 'X-Shop chuyên giày xuất khẩu- 465 Đội Cấn- Ba Đình- Hà Nội';
    params['url'] = 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/p480x480/10339635_1501199350162528_3498582987503766718_n.jpg?oh=163970e2701943c84c8a615700a2762e&oe=54E02E42&__gda__=1427862505_9a3242320096e50b2453632c56aff33d';
    FB.api("/" + idGroup + "/photos", 'post', params, function(response) {
        if (!response || response.error) {
            alert('Failure' + idGroup);
        } else {
            alert('Successfully' + idGroup + ' Post ID: ' + response.id);
            document.getElementById("message").innerHTML += "<a href='https://www.facebook.com/photo.php?fbid=" + response.id + "'>" + idGroup + "</a><br/>";

        }
    });
}
;

function getGroups() {
    FB.login(function() {
        FB.api('/me/groups', function(response) {
            if (!response.error) {
                /* handle the result */
                console.log("Object number: " + response.data.length);
                document.getElementById("message").innerHTML += "Total groups: " + response.data.length + "<br/>";
                $.each(response.data, function(key, value) {
                    var idGroup = value.id;
                    var nameGroup = value.name;
                    var createCheckBox = document.createElement("INPUT");
                    createCheckBox.setAttribute("type", "checkbox");
                    createCheckBox.setAttribute("value", idGroup);
                    createCheckBox.setAttribute("id", idGroup);
                    createCheckBox.setAttribute("class", "clGroups");
                    document.getElementById("message").innerHTML += key + 1;
                    document.getElementById("message").appendChild(createCheckBox);
                    document.getElementById("message").innerHTML += "<label for=" + idGroup + ">" + nameGroup + "</label><br/>";
//                                postGroups(id);
//                                postPhotosGroups(idGroup); // post t?t c? nh�m
                    console.log(key);
                    console.log(value);
                });
            }
        }
        );
    }, {scope: 'publish_actions,user_groups'});
}
;
function getSelect() {
    if (document.getElementById('rdoSelect').checked) {
        var rate_value = document.getElementById('rdoSelect').value;
        for (var i = 0; i < document.getElementsByClassName("clGroups").length; i++) {
            document.getElementsByClassName("clGroups")[i].checked = true;
        }

    }
    if (document.getElementById('rdoUnSelect').checked) {
        var rate_value = document.getElementById('rdoUnSelect').value;
        for (var i = 0; i < document.getElementsByClassName("clGroups").length; i++) {
            document.getElementsByClassName("clGroups")[i].checked = false;
        }

    }
}
function postPhotoGroupsSelect() {
    for (var i = 0; i < document.getElementsByClassName("clGroups").length; i++) {
        if (document.getElementsByClassName("clGroups")[i].checked === true) {
            postPhotosGroups(document.getElementsByClassName("clGroups")[i].value);
        }
    }
}
//]]>
