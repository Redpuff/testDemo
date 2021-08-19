
function myAjax(method="get", url, data, success) {
    let xhr =null;
    try{
        xhr= new XMLHttpRequest();
    } catch (error){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(method ==="get" && data){
        url +="?"+ data;
    }
    xhr.open(method,url,true);

    if (method === "get"){
        xhr.send();
    }else {
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            success(xhr.responseText);
        }
    }
}