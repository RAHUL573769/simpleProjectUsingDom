document.getElementById('border-id').addEventListener('click',function(){

   const container=document.getElementById('friend-container');
   container.style.border="10px solid green";

})


function addBackground(){
const friends=document.getElementsByClassName('friends');

for ( const friend of friends){
    friend.style.backgroundColor='red';
}

}