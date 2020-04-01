var slideshow ={
photoList :["photo1","photo2","photo3","photo4","photo5"],

  currentPhotoIndex :0, 
 nextPhoto :function(){
                     if (this.currentPhotoIndex<=this.photoList.length){
                       this.currentPhotoIndex=this.currentPhotoIndex +1;
	       return this.photoList[this.currentPhotoIndex] ;
	 } else {
            return("End of slideshow");
    }
           
   
},

 prevPhoto :function(){
                    if(this.currentPhotoIndex > 0){
                               this.currentPhotoIndex=this.currentPhotoIndex - 1;
      
    	     return (this.photoList[this.currentPhotoIndex]);
     } else {
     	     return ("End of slideshow");
     }
},

  getCurrentPhoto :function(){
	         return this.photoList[this.currentPhotoIndex];
     }

}
console.log(slideshow.photoList);
console.log(slideshow.currentPhotoIndex);
console.log(slideshow.nextPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.getCurrentPhoto());
 console.log(slideshow.nextPhoto());
 console.log(slideshow.nextPhoto());
 console.log(slideshow.nextPhoto());
 console.log(slideshow.nextPhoto());
 
 
