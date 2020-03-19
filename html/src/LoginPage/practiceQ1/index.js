function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';
    a.value=a.defaultValue;
}
//Enter your code here
var count=0;
function countLike(){
    var btn=document.getElementById('likeBlog');
    var countComment=document.getElementById("likeCount");
    if(count===0){
        btn.innerHTML="Liked!";
    }
    count++;
    var str='';
    if(count===1)
    {
        str =" person likes this!";
    }
    else {
        str = " people have liked this!";
    }
    countComment.innerHTML=" "+count+str;
}
