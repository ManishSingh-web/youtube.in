let cmt_like = document.querySelectorAll(".cmt_like");
let subscribercount = document.getElementById("subscriber-count");
let CommentCount = document.getElementById("Comment");
let viewsCount = document.getElementById("views count");
let publishTime = document.getElementById("publish_time");
let sugested_videos_time_publish = document.querySelectorAll(".sugested_videos_time_publish");
let sugested_videos_views = document.querySelectorAll(".sugested_videos_views");
let Like = document.getElementById("inside_like");
let cmt_time = document.querySelectorAll(".cmt_time");
 
 export  function cmt_like_convertor(x,i){
    let num3;
    let num=x;
    let num2 = num.toString();
    function value_convertor(x){
      let num=parseInt(num2);
        num3=(num/x);
      }
    
      if(num2.length==4){
      value_convertor(1000);
      let num4= num3.toFixed(1);
      // console.log(num4+"k");
      let num5= num4+"k";
      cmt_like[i].innerHTML =num5 ;
    }
    else if(num2.length==5){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    cmt_like[i].innerHTML  =num5;
    }
    else if(num2.length==6){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    cmt_like[i].innerHTML =num5 ;
    }
    else if(num2.length==7 || num2.length==8 || num2.length==9 ){
      value_convertor(1000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"M");
    let num5= num4+"M";
    cmt_like[i].innerHTML =num5 ;
    }
    else if(num2.length==10){
      value_convertor(1000000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"B");
    let num5= num4+"B";
    cmt_like[i].innerHTML  =num5;
    }
    else if(num2.length<4){
        cmt_like[i].innerHTML  =num2;
    }
    
  }


  //=================================subscribercount==========================
export  function subscribercount_convertor(x){
    let num3;
    let num=x;
    let num2 = num.toString();
    function value_convertor(x){
      let num=parseInt(num2);
        num3=(num/x);
      }
    
      if(num2.length==4){
      value_convertor(1000);
      let num4= num3.toFixed(1);
      // console.log(num4+"k");
      let num5= num4+"k";
      subscribercount.innerHTML =num5+" subscribers" ;
    }
    else if(num2.length==5){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    subscribercount.innerHTML =num5+" subscribers";
    }
    else if(num2.length==6){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    subscribercount.innerHTML =num5 +" subscribers";
    }
    else if(num2.length==7 || num2.length==8 || num2.length==9 ){
      value_convertor(1000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"M");
    let num5= num4+"M";
    subscribercount.innerHTML =num5+" subscribers" ;
    }
    else if(num2.length==10){
      value_convertor(1000000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"B");
    let num5= num4+"B";
    subscribercount.innerHTML =num5+" subscribers" ;
    }
    else if(num2.length<4){
      subscribercount.innerHTML =num2+" subscribers";
    }
    
  }

  //===============================================================comments convetor for maine videos ====================
export function comment_convertor_2_0_maineVideo (a,index){
    let num3;
    let num=a.items[index].statistics.commentCount;
    let num2 = num.toString();
    function value_convertor(x){
      let num=parseInt(num2);
        num3=(num/x);
      }
    
      if(num2.length==4){
      value_convertor(1000);
      let num4= num3.toFixed(1);
      // console.log(num4+"k");
      let num5= num4+"k";
      CommentCount.innerHTML =num5 +" comments";
    }
    else if(num2.length==5){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    CommentCount.innerHTML =num5 +" comments";
    }
    else if(num2.length==6){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    CommentCount.innerHTML =num5 +" comments";
    }
    else if(num2.length==7 || num2.length==8 || num2.length==9 ){
      value_convertor(1000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"M");
    let num5= num4+"M";
    CommentCount.innerHTML =num5 +" comments";
    }
    else if(num2.length==10){
      value_convertor(1000000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"B");
    let num5= num4+"B";
    CommentCount.innerHTML =num5 +" comments";
    }
    else if(num2.length<4){
      CommentCount.innerHTML =num2 +" comments";
    }
    
  }

  //===============================================================views convetor for maine videos ====================
 export  function value_convertor_2_0_maineVideo (a,index){
    let num3;
    let num=a.items[index].statistics.viewCount;
    let num2 = num.toString();
    function value_convertor(x){
      let num=parseInt(num2);
        num3=(num/x);
      }
    
      if(num2.length==4){
      value_convertor(1000);
      let num4= num3.toFixed(1);
      // console.log(num4+"k");
      let num5= num4+"k";
      viewsCount.innerHTML =num5 +" views";
    }
    else if(num2.length==5){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    viewsCount.innerHTML =num5 +" views";
    }
    else if(num2.length==6){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    viewsCount.innerHTML =num5 +" views";
    }
    else if(num2.length==7 || num2.length==8 || num2.length==9 ){
      value_convertor(1000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"M");
    let num5= num4+"M";
    viewsCount.innerHTML =num5 +" views";
    }
    else if(num2.length==10){
      value_convertor(1000000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"B");
    let num5= num4+"B";
    viewsCount.innerHTML =num5 +" views";
    }
    else if(num2.length<4){
      viewsCount.innerHTML =num2 +" views";
    }
    
  }

  // date_convertor_maineVideo(a,index)=========================

export  function date_convertor_maineVideo(a,index){
    let current_date = Date.now();
    let vieos_publish_date_stringValue= a.items[index].snippet.publishedAt;
    
    let vieos_publish_date = new Date(vieos_publish_date_stringValue);
    let vieos_publish_timeStamp =vieos_publish_date.getTime();   
    let final_timeStamp = (current_date-vieos_publish_timeStamp);
    
    let minute =Math.floor(final_timeStamp /(60*1000));
    
    let hour =Math.floor(minute /(60));
    let day = Math.floor(hour/24);
    let year = Math.floor(day/365);
  
    let months= Math.floor(day/30);  
  
   if(year>1){
    publishTime.innerHTML=" "+" "+year +" years ago";
   }
   else if( year==1){
    publishTime.innerHTML=" "+" "+year +" year ago";
   } 
   else if( year<1 && months>1){
    publishTime.innerHTML=" "+" "+months +" months ago";
   } 
   else if( year<1 && months==1){
    publishTime.innerHTML=" "+" "+months +" month ago";
   } 
   else if( year<1 && months<1 && day>1){
    publishTime.innerHTML=" "+" "+day +" days ago";
    }
  else if( year<1 && months<1 && day==1){
    publishTime.innerHTML= " "+" "+day +" day ago";
  }
  else if(year<1 && months<1 && day==0 && hour>1){
    publishTime.innerHTML= " "+" "+hour +" hours ago";
  }
  else if(year<1 && months<1 && day==0 && hour==1){
    publishTime.innerHTML= " "+" "+hour +" hour ago";
  }
  else if( year<1 && months<1 && day==0 && hour==0 && minute>1){
    publishTime.innerHTML= " "+" "+minute +" minutes ago";
  }
  else if( year<1 && months<1 && day==0 && hour==0 && minute==1){
    publishTime.innerHTML= " "+" "+minute +" minute ago";
  }
  
  }

  //====================================================date convertor=========

export  function date_convertor(a,i){
    let current_date = Date.now();
    let vieos_publish_date_stringValue= a.items[i].snippet.publishedAt;
    
    let vieos_publish_date = new Date(vieos_publish_date_stringValue);
    let vieos_publish_timeStamp =vieos_publish_date.getTime();
    
    let final_timeStamp = (current_date-vieos_publish_timeStamp);
    // console.log(final_timeStamp);
    
    let minute =Math.floor(final_timeStamp /(60*1000));
    // console.log( "munutes-"+ Math.floor(minute));
    
    let hour =Math.floor(minute /(60));
    // console.log("hours-"+   Math.floor(hour));
    let day = Math.floor(hour/24);
    // console.log("day-"+  Math.floor(day));
    let year = Math.floor(day/365);
    // console.log(year);
  
    let months= Math.floor(day/30);
    // console.log(months);
  
  
   if(year>1){
    sugested_videos_time_publish[i].innerHTML=" "+" "+year +" years ago";
   }
   else if( year==1){
    sugested_videos_time_publish[i].innerHTML=" "+" "+year +" year ago";
   } 
   else if( year<1 && months>1){
    sugested_videos_time_publish[i].innerHTML=" "+" "+months +" months ago";
   } 
   else if( year<1 && months==1){
    sugested_videos_time_publish[i].innerHTML=" "+" "+months +" month ago";
   } 
   else if( year<1 && months<1 && day>1){
    sugested_videos_time_publish[i].innerHTML=" "+" "+day +" days ago";
    }
  else if( year<1 && months<1 && day==1){
    sugested_videos_time_publish[i].innerHTML= " "+" "+day +" day ago";
  }
  else if(year<1 && months<1 && day==0 && hour>1){
    sugested_videos_time_publish[i].innerHTML= " "+" "+hour +" hours ago";
  }
  else if(year<1 && months<1 && day==0 && hour==1){
    sugested_videos_time_publish[i].innerHTML= " "+" "+hour +" hour ago";
  }
  else if( year<1 && months<1 && day==0 && hour==0 && minute>1){
    sugested_videos_time_publish[i].innerHTML= " "+" "+minute +" minutes ago";
  }
  else if( year<1 && months<1 && day==0 && hour==0 && minute==1){
    sugested_videos_time_publish[i].innerHTML= " "+" "+minute +" minute ago";
  }
  
  }
  //==================================================== cmt date convertor=========

export  function cmt_date_convertor(x,i){
    let current_date = Date.now();
    let vieos_publish_date_stringValue= x;
    
    let vieos_publish_date = new Date(vieos_publish_date_stringValue);
    let vieos_publish_timeStamp =vieos_publish_date.getTime();
    
    let final_timeStamp = (current_date-vieos_publish_timeStamp);
    // console.log(final_timeStamp);
    
    let minute =Math.floor(final_timeStamp /(60*1000));
    // console.log( "munutes-"+ Math.floor(minute));
    
    let hour =Math.floor(minute /(60));
    // console.log("hours-"+   Math.floor(hour));
    let day = Math.floor(hour/24);
    // console.log("day-"+  Math.floor(day));
    let year = Math.floor(day/365);
    // console.log(year);
  
    let months= Math.floor(day/30);
    // console.log(months);
  
  
   if(year>1){
    cmt_time[i].innerHTML=" "+" "+year +" years ago";
   }
   else if( year==1){
    cmt_time[i].innerHTML=" "+" "+year +" year ago";
   } 
   else if( year<1 && months>1){
    cmt_time[i].innerHTML=" "+" "+months +" months ago";
   } 
   else if( year<1 && months==1){
    cmt_time[i].innerHTML=" "+" "+months +" month ago";
   } 
   else if( year<1 && months<1 && day>1){
    cmt_time[i].innerHTML=" "+" "+day +" days ago";
    }
  else if( year<1 && months<1 && day==1){
    cmt_time[i].innerHTML= " "+" "+day +" day ago";
  }
  else if(year<1 && months<1 && day==0 && hour>1){
    cmt_time[i].innerHTML= " "+" "+hour +" hours ago";
  }
  else if(year<1 && months<1 && day==0 && hour==1){
    cmt_time[i].innerHTML= " "+" "+hour +" hour ago";
  }
  else if( year<1 && months<1 && day==0 && hour==0 && minute>1){
    cmt_time[i].innerHTML= " "+" "+minute +" minutes ago";
  }
  else if( year<1 && months<1 && day==0 && hour==0 && minute==1){
    cmt_time[i].innerHTML= " "+" "+minute +" minute ago";
  }
  
  }
  
  
//======================value_convertor_2_0==========================

export function value_convertor_2_0 (a,i){
    let num3;
    let num=a.items[i].statistics.viewCount;
    let num2 = num.toString();
    function value_convertor(x){
      let num=parseInt(num2);
        num3=(num/x);
      }
    
      if(num2.length==4){
      value_convertor(1000);
      let num4= num3.toFixed(1);
      // console.log(num4+"k");
      let num5= num4+"k";
      sugested_videos_views[i].innerHTML =num5 +" views";
    }
    else if(num2.length==5){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    sugested_videos_views[i].innerHTML =num5 +" views";
    }
    else if(num2.length==6){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    sugested_videos_views[i].innerHTML =num5 +" views";
    }
    else if(num2.length==7 || num2.length==8 || num2.length==9 ){
      value_convertor(1000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"M");
    let num5= num4+"M";
    sugested_videos_views[i].innerHTML =num5 +" views";
    }
    else if(num2.length==10){
      value_convertor(1000000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"B");
    let num5= num4+"B";
    sugested_videos_views[i].innerHTML =num5 +" views";
    }
    else if(num2.length<4){
      sugested_videos_views[i].innerHTML =num2 +" views";
    }
    
  }

 function Like_VALUE_convertor(x){
    let num3;
    let num=x;
    let num2 = num.toString();
    function value_convertor(x){
      let num=parseInt(num2);
        num3=(num/x);
      }
    
      if(num2.length==4){
      value_convertor(1000);
      let num4= num3.toFixed(1);
      // console.log(num4+"k");
      let num5= num4+"k";
      Like.innerHTML =num5 ;
    }
    else if(num2.length==5){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    Like.innerHTML  =num5;
    }
    else if(num2.length==6){
      value_convertor(1000);
    let num4= num3.toFixed(0);
    // console.log(num4+"k");
    let num5= num4+"k";
    Like.innerHTML =num5 ;
    }
    else if(num2.length==7 || num2.length==8 || num2.length==9 ){
      value_convertor(1000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"M");
    let num5= num4+"M";
    Like.innerHTML =num5 ;
    }
    else if(num2.length==10){
      value_convertor(1000000000);
    let num4= num3.toFixed(0);
    // console.log(num4+"B");
    let num5= num4+"B";
    Like.innerHTML  =num5;
    }
    else if(num2.length<4){
        Like.innerHTML =num2;
    }
    
  }



//--------------------------------------------------------------

  Object.prototype.Like_VALUE_convertor = function(x){
    let num3;
    let num= this.x;
    let nummm= this.x;
    let num2 = num.toString(); 
    function value_convertor(nummm){
      let num=parseInt(num2);
        num3=(num/nummm);
      }
    
      if(num2.length==4){
      value_convertor(1000);
      let num4;
    return  num4= num3.toFixed(1)+"k";
    
    }
    else if(num2.length==5){
      value_convertor(1000);
      let num4;
    return num4= num3.toFixed(0)+"k";
   
    }
    else if(num2.length==6){
      value_convertor(1000);
      let num4;
    return num4= num3.toFixed(0)+"k";
   
    }
    else if(num2.length==7 || num2.length==8 || num2.length==9 ){
      value_convertor(1000000);
      let num4;
    return num4= num3.toFixed(0)+"M";
   
    }
    else if(num2.length==10){
      value_convertor(1000000000);
      let num4;
    return num4= num3.toFixed(0)+"B";

    }
    else if(num2.length<4){
       return num2;
    }
    
  }

   Object.prototype.date_convertor= function (x){
    let current_date = Date.now();
    let vieos_publish_date_stringValue= x;
    
    let vieos_publish_date = new Date(vieos_publish_date_stringValue);
    let vieos_publish_timeStamp =vieos_publish_date.getTime();
    
    let final_timeStamp = (current_date-vieos_publish_timeStamp);
    
    let minute =Math.floor(final_timeStamp /(60*1000));
    
    let hour =Math.floor(minute /(60));
    let day = Math.floor(hour/24);
    let year = Math.floor(day/365);
  
    let months= Math.floor(day/30);

   if(year>1){
    return " "+" "+year +" years ago";
   }
   else if( year==1){
    return " "+" "+year +" year ago";
   } 
   else if( year<1 && months>1){
    return " "+" "+months +" months ago";
   } 
   else if( year<1 && months==1){
    return " "+" "+months +" month ago";
   } 
   else if( year<1 && months<1 && day>1){
    return " "+" "+day +" days ago";
    }
  else if( year<1 && months<1 && day==1){
    return " "+" "+day +" day ago";
  }
  else if(year<1 && months<1 && day==0 && hour>1){
    return " "+" "+hour +" hours ago";
  }
  else if(year<1 && months<1 && day==0 && hour==1){
    return " "+" "+hour +" hour ago";
  }
  else if( year<1 && months<1 && day==0 && hour==0 && minute>1){
    return " "+" "+minute +" minutes ago";
  }
  else if( year<1 && months<1 && day==0 && hour==0 && minute==1){
    return " "+" "+minute +" minute ago";
  }
  
  }


let share_container   = document.querySelector(".share_container");
let link_icons   = document.querySelector(".link_icons");
let close = document.getElementById("close");
let share = document.getElementById("share");
let link_copy = document.querySelector(".link_copy");

let BTN_COPY = document.querySelector(".BTN_COPY");
let text_to_copy = document.querySelector(".text");
let opacity_div = document.querySelector(".opacity_div"); 
let download_box = document.querySelector(".download_box");
let download = document.getElementById("download");
let drop_download = document.getElementById("drop_download");


close.addEventListener("click", function(){

  share_container.style.display="none";
  opacity_div.style.display="none";

})

share.addEventListener("click", function(){
 
  // video_player.style.backgroundColor="black";
  opacity_div.style.display="block";
  share_container.style.display="flex";
})

let drop_share = document.getElementById("drop_share").addEventListener("click", function(){
  opacity_div.style.display="block";
  share_container.style.display="flex";

}
)


// copy to Clipboard 

BTN_COPY.addEventListener("click", function(){
  text_to_copy.select();
  navigator.clipboard.writeText(text_to_copy.value);
})

// notification----------------------------------


function notify(){
 
  let p = document.createElement("p");
  p.innerHTML="download unavailable";
  let div = document.createElement("div");
  div.appendChild(p);
  div.classList.add("dnld_notification");
  
  download_box.insertAdjacentElement("beforeend",div);
  // download_box.style.display="block";

setTimeout(
  function(){
    div.remove();
    // download_box.style.display="none";
  }
,3000);
}

let playlist =  document.querySelector(".playlist");
let newlist_btn = document.querySelector(".newlist_btn");
let name_Div =document.querySelector(".name_Div");
let create_btnDiv =document.querySelector(".create_btnDiv");
let title_input = document.querySelector(".title_input");
let create_btn =document.querySelector(".create_btn");
let close_savediv =document.querySelector(".close_savediv");
let save_div = document.querySelector(".save_div");
let Save = document.getElementById("Save");

download.addEventListener("click", notify)
drop_download.addEventListener("click",notify);

let  save_to = ()=>{
  let div = document.createElement("div");
  div.classList.add("playlist_insideDiv");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type" , "checkbox");
  let p = document.createElement("p");
  p.innerHTML= title_input.value;
  localStorage.setItem("p.innerHTML",p.innerHTML);
  title_input.value="";
  div.insertAdjacentElement("afterbegin", checkbox);
  div.insertAdjacentElement("beforeend", p);
playlist.appendChild(div);


}

 function Display(){
  newlist_btn.style.display="none";
name_Div.style.display="flex";
create_btnDiv.style.display="block";
}

let Cclose =()=>{

  save_div.style.display="none";
  newlist_btn.style.display="flex";
  name_Div.style.display="none";
  create_btnDiv.style.display="none";
  opacity_div.style.display="none";
}

newlist_btn.addEventListener("click", Display );
create_btn.addEventListener("click", save_to);

Save.addEventListener("click",function(){
  opacity_div.style.display="block";
  save_div.style.display="flex";
})
close_savediv.addEventListener("click", Cclose);
