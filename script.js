allLikes=["9","12","9"];
function increaseLikes(id,post){
    allLikes[post]++;
    document.querySelector(id).innerText=allLikes[post]+" like(s)"
}