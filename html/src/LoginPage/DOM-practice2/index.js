document.getElementById('yesButton').addEventListener('click',function(){
    document.getElementById('commentContainer').style.display="";
    //document.getElementById('commentContainer').style.removeProperty( 'display' );
    alert('Thank you for your feedback');
});
document.getElementById('noButton').addEventListener('click',function(){
document.getElementById('commentContainer').setAttribute('style','display:none');

});
document.getElementById('submitButton').addEventListener('click',submitButton);


function submitButton(){
    var comments= document.getElementById('commentBox').textLength;
    if(comments === 0) {
        alert('The comments section cannot be empty');
    }
    else {
        alert('Thank you for taking your time to give us feedback. We hope you have a better experience next time');
    }
}