
var image = [

    "https://freepngimg.com/thumb/sleep/57220-3-grandfather-download-hd-png.png" ,
    "https://www.pngarts.com/files/8/Grandmother-Cartoon-PNG-Transparent-Image.png",
    "https://www.pngall.com/wp-content/uploads/5/Mothers-Day-PNG-Picture.png" ,
    "https://www.starpng.com/public/uploads/preview/father-png-image-21560432474u7knukq63o.png", 
    "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/38345/sister-brother-clipart-md.png", 
    "https://icon.holidaypng.com/20191221/tqw/people-social-group-cartoon-for-family-day-5dfd8aaec8db06.86063911.png"

];



  
  var i=0
  
  if(i == 9)
    {
      i=0;
    }

   
  
  function change() {
       document.getElementById("g").src = image[i];
      
    i++;
    
  
    if(i == 9)
    {
      i=0;
    }
  }
  