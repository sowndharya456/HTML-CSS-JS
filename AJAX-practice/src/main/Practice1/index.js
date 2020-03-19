var xhttp= new XMLHttpRequest();
var obj ;
function registerEmployee(firstName, role) {
    xhttp.open('POST', 'https://reqres.in/api/users');
    obj = {name: firstName.value, role: role.value};
    xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhttp.send(JSON.stringify(obj));
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 201) {
            var res = JSON.parse(xhttp.response);
            console.log(res);
            // response["name"] = obj.name;
            // response["role"] = obj.role;
         //   sessionStorage.setItem('user-details', JSON.stringify(res));
            sessionStorage.setItem('user-details', xhttp.responseText);
        }
    }
}