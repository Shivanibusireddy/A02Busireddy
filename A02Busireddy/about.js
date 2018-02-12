var App= {

    launch:function(){
        App.compute()
    },








compute: function(){

     var height=$("#height").val();
     
   
   
    var weight=$("#weight").val();
   
      
    

   
     
     if(height <=0 || weight <=0)
      {
          document.getElementById("sol").value=0;
         
          
      }
      else if( isNaN(height)||isNaN(weight))
      {
          document.getElementById("sol").value=0;
      }
    
else{
      var heightunits=$("#height_unit").val();
     
      var weightunits=$("#weight_unit").val();
     

      if (heightunits=="inches"){

        height=height/39.370;

      } 

      if (weightunits=="pounds")

      {
           weight=weight/2.20462;
      }


    var bmi=(weight/Math.pow(height,2));
   
   
    var BMI=Math.round(bmi*100)/100;


$("#sol").val(BMI);
   

    if (BMI<18.5)
           $("#comment").html("Underweight") ;
            if (BMI>=18.5 && BMI<=25)
            $("#comment").html("Normal");
            if (BMI>=25 && BMI<=30)
            $("#comment").html("Obese");
            if (BMI>30)
            $("#comment").html("Overweight");
           
        }
    },

computeBMI:function(h,w){

if(h<=0||w<=0)
{
    return 0;
}
else if(typeof h !=='number'|| typeof w !=='number')
{
    return 0;
}
else 
{
     var b= w/Math.pow(h,2);
     var b1=Math.round(b*100)/100;
     return b1;

}


}



};


