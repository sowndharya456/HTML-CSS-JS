
getCountryList();
function getCountryList(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET','https://api.openaq.org/v1/countries');
    xhr.send();
    xhr.onreadystatechange =function(){
        if(xhr.readyState ===4){
            document.getElementById('country_data').innerHTML="<p>Country Country Code</p>";
            var countryList =JSON.parse(xhr.responseText);
            var countryCode = countryList.results;
            countryCode.forEach(function(index){
                document.getElementById('country_data').innerHTML+="<p>"+index.name+" "+index.code+"</p>";
            });
        }
    };
}