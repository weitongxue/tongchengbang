var ajax = {
    get:function(url , onSuccess ,onFail){
        var xhr = window.XMLHttpRequest?
            new XMLHttpRequest() :
            new ActiveXObject("Microsoft.XMLHTTP");

        xhr.open("GET",url);

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200 || xhr.status == 304){
                    if(typeof onSuccess == "function"){
                        onSuccess(xhr.responseText,xhr);
                    }else{
                        if(typeof onFail == "function"){
                            onFail(xhr.responseText);
                        }
                    }
                }
            }
        };

        xhr.send(null);
    },

    post:function(url, data, onSuccess ,onFail){
        var xhr = window.XMLHttpRequest?
            new XMLHttpRequest() :
            new ActiveXObject("Microsoft.XMLHTTP");

        xhr.open("POST",url);

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200 || xhr.status == 304){
                    if(typeof onSuccess == "function"){
                        onSuccess(xhr.responseText);
                    }else{
                        if(typeof onFail == "function"){
                            onFail(xhr.responseText);
                        }
                    }
                }
            }
        };
        if(typeof data == "string" ){
            xhr.setRequestHeader("Content-Type" ,"application/x-www-form-urlencoded");
        }
        //post请求传入的就是我们要提交的数据
        xhr.send(data);
    }
}