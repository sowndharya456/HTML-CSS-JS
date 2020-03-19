function enterTheCode(country){
    var xhr= new XMLHttpRequest();
    var url="https://api.openaq.org/v1/cities?country="+country.value;
    xhr.open('GET',url);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            var countryList= JSON.parse(xhr.responseText);
            var country= countryList.results;
            document.getElementById('city-list').innerHTML="<p>"+country[0].city+"</p>";
        }
    };
}