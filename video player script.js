



let search = document.getElementById("search");
let searchIcon = document.getElementById("searchIcon");
let searchIcon2 = document.getElementById("searchIcon2");
let thumbnail_img = document.querySelectorAll(".thumbnail_img");

let video_title = document.querySelectorAll(".video_title");
let channel_name = document.querySelectorAll(".channel_name");


let api = "AIzaSyDLTWJywQI4njC62CaE-rv1eNozlQdsuTI";

let idpic = document.querySelectorAll(".idpic");

let left_arrow = document.getElementById("left-arrow");
let logo_div = document.getElementById("logo");
let nav_left_ICONS = document.getElementById("nav_left_ICONS");
//======================================================================catogery
let Sports = document.getElementById("Sports");
let Gaming = document.getElementById("Gaming");
let Music = document.getElementById("Music");
let News = document.getElementById("News");
let Film = document.getElementById("Film & Animation");
let Technology = document.getElementById("Technology");
let Entertainment = document.getElementById("Entertainment");
let Automobiles = document.getElementById("Automobiles");
let home = document.getElementById("Home");
let category_class= document.querySelectorAll(".category");
let Like = document.getElementById("inside_like");
let CommentCount = document.getElementById("Comment");
let viewsCount = document.getElementById("views count");
let publishTime = document.getElementById("publish_time");
let subscribercount = document.getElementById("subscriber-count");
let cmt_time = document.querySelectorAll(".cmt_time");
let cmt_like = document.querySelectorAll(".cmt_like");
let Responsiveiframe= document.querySelectorAll(".Responsive-iframe")
let container_flexBox = document.querySelectorAll(".container_flexBox");
let Containeriframe = document.querySelectorAll(".Container-iframe");
// let sugested_videos_time_publish = document.querySelectorAll(".sugested_videos_time_publish");
// let sugested_videos_views = document.querySelectorAll(".sugested_videos_views");


let arr = Array.from(thumbnail_img);

let img_suggest = document.querySelectorAll(".img_suggest");
let img_suggestArray  = Array.from(img_suggest);
let sugested_videos_views = document.querySelectorAll(".sugested_videos_views");
let sugested_videos_time_publish = document.querySelectorAll(".sugested_videos_time_publish");
 let sugested_videos_title = document.querySelectorAll(".sugested_videos_title");
 let sugested_channel_name = document.querySelectorAll(".sugested_channel_name");

 let thumbnail_box = document.querySelectorAll(".thumbnail_box");
let iframe = document.querySelector(".responsive-iframe");
let contaner_of_replys = document.querySelectorAll(".contaner_of_replys")
let download = document.getElementById("download");
let drop_download = document.getElementById("drop_download");
let download_box = document.querySelector(".download_box");

let share_container   = document.querySelector(".share_container");
let link_icons   = document.querySelector(".link_icons");
let close = document.getElementById("close");
let share = document.getElementById("share");
let link_copy = document.querySelector(".link_copy");

let BTN_COPY = document.querySelector(".BTN_COPY");
let text_to_copy = document.querySelector(".text");
let opacity_div = document.querySelector(".opacity_div"); 

// let playlist = document.getElementById("playlist");


//down load button=============



let playlist =  document.querySelector(".playlist");
let newlist_btn = document.querySelector(".newlist_btn");
let name_Div =document.querySelector(".name_Div");
let create_btnDiv =document.querySelector(".create_btnDiv");
let title_input = document.querySelector(".title_input");
// let create_btn =document.querySelector(".create_btn");
let close_savediv =document.querySelector(".close_savediv");
let save_div = document.querySelector(".save_div");
// let Save = document.getElementById("Save");




let kkkk= true;
 //===========================================================================

let videos_ID ;


//=========================================================prototype convertor functions========
Object.prototype.NUMBER_convertor = function(x){
  let num3;
  let num= x;
  let nummm= x;
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


Object.prototype.Date_convertor= function (x){
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

// ------------------------------------------date function for yourCMT---------------
// Object.prototype.yourCMTDate_convertor= function (x){
//   let current_date = Date.now();
//   let yourCMT_date_stringValue= x;
  
//   let vieos_publish_date = new Date(yourCMT_date_stringValue);
//   let vieos_publish_timeStamp =vieos_publish_date.getTime();
  
//   let final_timeStamp = (current_date-vieos_publish_timeStamp);
  
//   let minute =Math.floor(final_timeStamp /(60*1000));
  
//   let hour =Math.floor(minute /(60));
//   let day = Math.floor(hour/24);
//   let year = Math.floor(day/365);

//   let months= Math.floor(day/30);

//  if(year>1){
//   return " "+" "+year +" years ago";
//  }
//  else if( year==1){
//   return " "+" "+year +" year ago";
//  } 
//  else if( year<1 && months>1){
//   return " "+" "+months +" months ago";
//  } 
//  else if( year<1 && months==1){
//   return " "+" "+months +" month ago";
//  } 
//  else if( year<1 && months<1 && day>1){
//   return " "+" "+day +" days ago";
//   }
// else if( year<1 && months<1 && day==1){
//   return " "+" "+day +" day ago";
// }
// else if(year<1 && months<1 && day==0 && hour>1){
//   return " "+" "+hour +" hours ago";
// }
// else if(year<1 && months<1 && day==0 && hour==1){
//   return " "+" "+hour +" hour ago";
// }
// else if( year<1 && months<1 && day==0 && hour==0 && minute>1){
//   return " "+" "+minute +" minutes ago";
// }
// else if( year<1 && months<1 && day==0 && hour==0 && minute==1){
//   return " "+" "+minute +" minute ago";
// }

// }

Object.prototype.yourCMTDate_convertor= function (x){
  let current_date = Date.now();   
  let final_timeStamp = (current_date-x);
  
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


//thumbnail_img----------------------------------------------------------------------------------------------------------------------------------------------
function thumbnail(a,i) {
  sugested_videos_time_publish[i].innerHTML = a.items[i].snippet.publishedAt;
  sugested_videos_views[i].innerHTML = a.items[i].statistics.viewCount;
  sugested_channel_name[i].innerHTML = a.items[i].snippet.channelTitle;
  sugested_videos_title[i].innerHTML = a.items[i].snippet.title;
  img_suggestArray[i].src = a.items[i].snippet.thumbnails.medium.url;
}

// ------------------------------------------- onload fetch--------------------------------------------------------
// function khulte_hi() {
//   // let ARRIDD = [];

//   fetch(
//     `https://youtube.googleapis.com/youtube/v3/videos?part=player%2Csnippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${api}`
//   )
//     .then((a) => {
//       let response = a.json();
//       return response;
//     })
//     .then((a) => {
//       //------------------------------------------------------------------- ids array;

 
//       for ( let i=0; i < img_suggestArray.length; i++) {
//           thumbnail(a ,i);
//         date_convertor(a,i);
//         value_convertor_2_0 (a,i); 
//       } 
//       play_video(a);
      // console.log(a);
    

  
      // fetch(
      //   `https://youtube.googleapis.com/youtube/v3/channels?part=contentOwnerDetails%2Cstatistics%2Csnippet&maxResults=20&id=${ARRIDD[0]}&id=${ARRIDD[1]}&id=${ARRIDD[2]}&id=${ARRIDD[3]}&id=${ARRIDD[4]}&id=${ARRIDD[5]}&id=${ARRIDD[6]}&id=${ARRIDD[7]}&id=${ARRIDD[8]}&id=${ARRIDD[9]}&id=${ARRIDD[10]}&id=${ARRIDD[11]}&id=${ARRIDD[12]}&id=${ARRIDD[13]}&id=${ARRIDD[14]}&id=${ARRIDD[15]}&id=${ARRIDD[16]}&id=${ARRIDD[17]}&id=${ARRIDD[18]}&id=${ARRIDD[19]}&key=${api}`
      // )
      //   .then((a) => {
      //     let response = a.json();
      //     return response;
      //   })
      //   .then((b) => {
      //     let kk = b.items; 
      //     console.log(b)

      //     ARRIDD.forEach((e, index) => {
      //       for (i = 0; i < kk.length; i++) {
      //         if (e == kk[i].id) {
      //           idpic[index].src = kk[i].snippet.thumbnails.high.url;
      //         }
      //       }
      //     });
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

//---------------------------------------------------------------
//  khulte_hi();
//--------------------------------------rough work---------
//solution

// let mm=[2,5,6,5,9,4,4];
// let nn=[5,9,4,6];
// let hh;
// mm.forEach(e => {
//     for(i=0;i<nn.length;i++){
//        if(e==nn[i]){
//         hh=+nn[i];
//         console.log(hh);
//        }
//     }
// });

//=========================================================================
let title = document.querySelector("#title_video");
let channelName = document.getElementById("channel_name");



let description_data = document.getElementById("description_data");

let iDPIC = document.getElementById("iDPIC");
let cmt_user_name = document.querySelectorAll(".user_name");
let user_cmnt = document.querySelectorAll(".user_cmnt");
let cmt_user_pic = document.querySelectorAll(".cmt_user_pic");
let user_comment_div = document.querySelectorAll(".user_comment_div");
// console.log(contaner_of_replys)
let style = document.querySelectorAll(".style");
let   reply;
let   reply_simblingDiv;
let yourCMT = document.getElementById("yourCMT");

let Save = document.getElementById("Save");
let create_btn =document.querySelector(".create_btn");
let more = document.getElementById("more");
let show_less = document.getElementById("show_less");
let subs_btn = document.getElementById("subs_btn");
let subed_btn = document.getElementById("subed_btn");

 let loader_onpages = document.querySelector(".loader_onpages");
let loader_container = document.querySelector(".loader_container");

let video_part = document.getElementById("video_part");
let left_side = document.getElementById("left_side");
let right_side = document.getElementById("right_side");
//'''''''''''''''''''''''''''''''''''''''''''''

function animation_page_loader(){
loader_container.style.display="block";
loader_onpages.style.animation="l2 1s  infinite linear"

setTimeout(() => {
  left_side.style.display="flex";
  right_side.style.display="flex";
loader_container.style.display="none";
loader_onpages.style.animation="";
}, 1000);

}

onload = animation_page_loader();

//=============================replies variabels ======
//---------------------playlist page --                 

// function playlist(a,index){

// let  playlist_videos_ID =a.items[index].id;
//  let title=a.items[index].snippet.localized.title;
//  let Like= a.items[index].statistics.likeCount;
// let channelName=a.items[index].snippet.channelTitle;
// let publishTime = a.items[index].snippet.publishedAt;
// let  viewsCount= a.items[index].statistics.viewCount;
// let thumbnailhobe = a.items[index].snippet.thumbnails.medium.url;


//     localStorage.setItem("playlist_videos_ID",playlist_videos_ID);
//     localStorage.setItem("title",title);
//     localStorage.setItem("Like",Like);
//     localStorage.setItem("channel_Name",channelName);
//     localStorage.setItem("publishTime",publishTime);
//     localStorage.setItem("viewsCount",viewsCount);
//     localStorage.setItem("thumbnailhobe",thumbnailhobe);
   
// }

  let aRR = [];
     let nUm =-1; 
      let chotadiv;
 let suggestion = document.querySelector(".suggestions")
//  let  = search.value;

function itachi(e){
  //  let input = search.value;
if(search.value!="" && e.key !="ArrowDown" && e.key !="ArrowUp" && e.key!="Enter") {
 
    console.log(search.value)
    fetch(`https://api.tvmaze.com/search/shows?q=${search.value}`)
    .then(
        (a)=>{
        let  reponse= a.json();
        //  console.log(reponse);
         return reponse
            
        }
    )
    .then(
        Data=>{
            aRR=[];
            nUm=-1;
            while (suggestion.firstChild){
                suggestion.removeChild(suggestion.firstChild);

            }
                    for( let i=0; i<Data.length;i++){

                // console.log(Data[i].show.name);
             let  li =  document.createElement("li");
                li.classList.add("chotadiv");
                li.innerHTML=Data[i].show.name;
                 aRR[i]=Data[i].show.name;

                suggestion.appendChild(li);

         }
         console.log(aRR);
        }
    ).catch((e)=>{
        console.error(e);
    })

}
else if(e.key==="ArrowDown" && search.value!="" && aRR!=""){
   
    if( aRR.length == 0){
        chotadiv = document.querySelector(".chotadiv");
    }
    else{
     chotadiv = document.querySelectorAll(".chotadiv");
    }

           ( nUm >= aRR.length-1)?nUm = 0:nUm++;
        
               search.value = aRR[nUm];
               for (const y of chotadiv) {
                y.style.background="white";                
            
               }
               chotadiv[nUm].style.background="rgba(191, 194, 194, 0.745)";

}
 else if(e.key==="ArrowUp" && search.value!="" && aRR!=""){

       if( aRR.length == 0){
          chotadiv = document.querySelector(".chotadiv");
        }
      else{
      chotadiv = document.querySelectorAll(".chotadiv");
       }

       nUm <= 0 ? nUm = aRR.length-1:nUm--; 
            search.value = aRR[nUm];
            for (const y of chotadiv) {
                y.style.background="white";
                }
               chotadiv[nUm].style.background="rgba(191, 194, 194, 0.745)";
            }

else if(e.key==="Enter" && search.value!=""){
   
         localStorage.setItem("searchValue" ,search.value);
   window.location.href="./search page.html";

            }
else{
                while (suggestion.firstChild){
                suggestion.removeChild(suggestion.firstChild);}

}

}

search.addEventListener("keyup",itachi);

function redirectvideo(){

         kkkk= true;
         let channelId_ID;
          let index3 =localStorage.getItem("videos_ID"); 
        
// yourCMT section-------------------------------------------------------------------------------------------------------------------------
              let num2=yourCMT.childElementCount;
              // console.log(num2);
              if(num2>0){
                for(let n=0;n<num2;n++){
                  yourCMT.removeChild(yourCMT.children[0]);
                } }
//----------------------------------------------------------------------------------
   fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${index3}&maxResults=20&regionCode=IN&key=${api}`
          ).then((a)=>{
           let response= a.json();
           return response;
          }).then((a)=>{
            // console.log(a);
            //  channelId_ID = a.items[0].snippet.channelId;
            
             ( a.items[0].snippet.channelId)?channelId_ID = a.items[0].snippet.channelId:channelId_ID = "UC_OaHF736OBZo_vTztGtXEg" ;
                    //  title.innerHTML=a.items[0].snippet.localized.title;
                    ( a.items[0].snippet.localized.title)?  title.innerHTML=a.items[0].snippet.localized.title:title.innerHTML= "title";
        // Like.innerHTML= NUMBER_convertor(a.items[0].statistics.likeCount);
        (a.items[0].statistics.likeCount)?Like.innerHTML= NUMBER_convertor(a.items[0].statistics.likeCount):Like.innerHTML= "11-22-24";
      //  console.log(a.items[index].statistics.likeCount);
        // channelName.innerHTML=a.items[0].snippet.channelTitle;
        ( a.items[0].snippet.channelTitle)? channelName.innerHTML=a.items[0].snippet.channelTitle:channelName.innerHTML= "channel title";
        // description_data.innerHTML=a.items[0].snippet.description;      
       (a.items[0].snippet.description)?description_data.innerHTML=a.items[0].snippet.description:description_data.innerHTML= "";       
     

        // date_convertor_maineVideo(a,index);
        // publishTime.innerHTML = Date_convertor(a.items[0].snippet.publishedAt);
         (a.items[0].snippet.publishedAt)? publishTime.innerHTML = Date_convertor(a.items[0].snippet.publishedAt):publishTime.innerHTML = "";
        // viewsCount.innerHTML= NUMBER_convertor(a.items[0].statistics.viewCount) + "  views";
         (a.items[0].statistics.viewCount)?viewsCount.innerHTML= NUMBER_convertor(a.items[0].statistics.viewCount)+"  views":viewsCount.innerHTML= "";
        // value_convertor_2_0_maineVideo (a,index);
        // CommentCount.innerHTML= NUMBER_convertor(a.items[0].statistics.commentCount)+"  comments";
        (a.items[0].statistics.commentCount)?CommentCount.innerHTML= NUMBER_convertor(a.items[0].statistics.commentCount)+"  comments":CommentCount.innerHTML="";
        // comment_convertor_2_0_maineVideo (a,index);


//================================================================================================================
 
        // videos_ID =a.items[index].id;


        //======================================================================
 fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId_ID}&key=${api}`)
        .then((a) => {
         let response = a.json();
         return response;
        })
          .then( (a)=>{
              // console.log(a);
              // iDPIC.src = a.items[0].snippet.thumbnails.high.url;
                (a.items[0].snippet.thumbnails.high.url)? iDPIC.src = a.items[0].snippet.thumbnails.high.url:iDPIC.src = "#";
              // subscribercount.innerHTML= NUMBER_convertor(a.items[0].statistics.subscriberCount)+"  Subscribers";
               (a.items[0].statistics.subscriberCount? subscribercount.innerHTML= NUMBER_convertor(a.items[0].statistics.subscriberCount)+"  Subscribers":subscribercount.innerHTML= "");
              // subscribercount_convertor(a.items[0].statistics.subscriberCount);              
            })
            .catch((e)=>{
              console.log(e)
            })

            fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${index3}&key=${api}`)
            .then((a)=>{
               let response=  a.json();
              return response;
            })
            .then((a)=>{
              console.log(a);
              let chnageinvalue;
              
              // function items_length_check(){
                if(a.items.length >= 10){
                  chnageinvalue = 9;
                  
                }else{
                  chnageinvalue = a.items.length-1;
                } 
                  
              console.log(chnageinvalue);
              
             
            //  if(items[0].snippet.topLevelComment.snippet.textDisplay){

            //  }
              for(let i=0; i <=chnageinvalue; i++){
                // cmt_user_name[i].innerHTML=a.items[i].snippet.topLevelComment.snippet.authorDisplayName;
               ( a.items[i].snippet.topLevelComment.snippet.authorDisplayName)?cmt_user_name[i].innerHTML=a.items[i].snippet.topLevelComment.snippet.authorDisplayName:cmt_user_name[i].innerHTML="";
                // cmt_date_convertor(a.items[i].snippet.topLevelComment.snippet.publishedAt,i);
                // cmt_time[i].innerHTML=  Date_convertor(a.items[i].snippet.topLevelComment.snippet.publishedAt);
                 (a.items[i].snippet.topLevelComment.snippet.publishedAt)? cmt_time[i].innerHTML= Date_convertor(a.items[i].snippet.topLevelComment.snippet.publishedAt) : cmt_time[i].innerHTML= "";
                // cmt_like_convertor(a.items[i].snippet.topLevelComment.snippet.likeCount,i);
                // cmt_like[i].innerHTML = NUMBER_convertor(a.items[i].snippet.topLevelComment.snippet.likeCount);
                 (a.items[i].snippet.topLevelComment.snippet.likeCount)? cmt_like[i].innerHTML = NUMBER_convertor(a.items[i].snippet.topLevelComment.snippet.likeCount): cmt_like[i].innerHTML = "";

                // user_cmnt[i].innerHTML=a.items[i].snippet.topLevelComment.snippet.textOriginal;
                 (a.items[i].snippet.topLevelComment.snippet.textOriginal)? user_cmnt[i].innerHTML=a.items[i].snippet.topLevelComment.snippet.textOriginal : user_cmnt[i].innerHTML="";
                  // cmt_user_pic[i].src=a.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl;
                  (a.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl)?cmt_user_pic[i].src=a.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl:cmt_user_pic[i].src="#";
                   //====================================================================================
                    let num=contaner_of_replys[i].childElementCount;
                    // console.log(num);
                    if(num>0){
                      for(let k=0;k<num;k++){
                        contaner_of_replys[i].removeChild(contaner_of_replys[i].children[0]);
                      } }
                    
                                         if(a.items[i].replies){
                
                                          //=============================================
                                          let reply_lenght =a.items[i].replies.comments.length;
                                           reply = document.createElement("p");
                                          reply.classList.add("replies");
                                          reply.innerHTML= reply_lenght+" replies";
                                          contaner_of_replys[i].insertAdjacentElement("afterbegin", reply);
                                          reply_simblingDiv = document.createElement("div");
                                        // console.log(reply_simblingDiv);
                                        reply_simblingDiv.classList.add("simbling_div");
                                          
                          
                                    
                                          for(let j=0; j<reply_lenght;j++){
                                         
                                            let div = document.createElement("div");
                                            div.classList.add("replies_cmt_div");

                                            let img = document.createElement("img");
                                        
                                            img.classList.add("replies_user_pic");
                                            let div2 = document.createElement("div");
                                            div2.classList.add("replies_style");
                          
                                            let p1 = document.createElement("p");
                                            p1.classList.add("ppppppp");
                                            let span1= document.createElement("span");
                                            span1.classList.add("replies_user_name");
                                            span1.innerHTML="user name";
                                            let span2= document.createElement("span");
                                            span2.classList.add("replies_user_time");
                                            span2.innerHTML="publish time";
                          
                                            p1.appendChild(span1);
                                            p1.appendChild(span2);
                          
                                            let p2 = document.createElement("p");
                                            p2.classList.add("replies_cmt");
                                            p2.innerHTML="user comment";
                          
                                            let insidediv2 = document.createElement("div");
                                            insidediv2.classList.add("replies_div_with_like");
                                            let div3 = document.createElement("div");
                                            div3.classList.add("replies_btn1_div");
                          
                                            let btn1 = document.createElement("button");
                                            btn1.classList.add("replies_button1");
                                            let img2 = document.createElement("img");
                                            btn1.appendChild(img2);
                          
                                            let p3 = document.createElement("p");
                                            p3.classList.add("replies_like");
                                            p3.innerHTML="13";
                          
                                            let btn2 = document.createElement("button");
                                            btn2.classList.add("replies_button2");
                                             let img3 = document.createElement("img");
                                             btn2.appendChild(img3);
                          
                                            let p4 = document.createElement("p");
                                            p4.classList.add("replies_reply");
                                            p4.innerHTML="reply";
                                            
                          
                                            div3.appendChild(btn1);
                                            div3.appendChild(p3);
                          
                                            insidediv2.appendChild(div3);
                                            insidediv2.appendChild(btn2);
                                            insidediv2.appendChild(p4);
                                
                          
                                            div2.appendChild(p1);
                                            div2.appendChild(p2);
                                            div2.appendChild(insidediv2);
                          
                          
                                            div.appendChild(img);
                                            div.appendChild(div2);
                                            // console.log(i)
                                            // console.log(div)
                                            reply_simblingDiv.insertAdjacentElement("afterbegin", div);
                                          
                                            // contaner_of_replys[i].insertAdjacentElement("beforeend", div);
                                            // img.src=a.items[i].replies.comments[j].snippet.authorProfileImageUrl;
                                            ( a.items[i].replies.comments[j].snippet.authorProfileImageUrl)? img.src=a.items[i].replies.comments[j].snippet.authorProfileImageUrl: img.src="";
                                            // span1.innerHTML = a.items[i].replies.comments[j].snippet.authorDisplayName;
                                            ( a.items[i].replies.comments[j].snippet.authorDisplayName)?span1.innerHTML = a.items[i].replies.comments[j].snippet.authorDisplayName:span1.innerHTML = "";

                                            // let dateValue=a. items[i].replies.comments[j].snippet.publishedAt ;
                                             let dateValue;
                                            ( a. items[i].replies.comments[j].snippet.publishedAt )?dateValue=a.items[i].replies.comments[j].snippet.publishedAt:dateValue="2024-07-16T14:47:45Z";
                                            span2.innerHTML = Date_convertor(dateValue);
                                            // span2.innerHTML =a. items[i].replies.comments[j].snippet.publishedAt ;
                                          // p2.innerHTML= a.items[i].replies.comments[j].snippet.textDisplay;
                                           (a.items[i].replies.comments[j].snippet.textDisplay)? p2.innerHTML= a.items[i].replies.comments[j].snippet.textDisplay:p2.innerHTML= "";
                                          //  let likevalue=a.items[i].replies.comments[j].snippet.likeCount;
                                           let likevalue;
                                          ( a.items[i].replies.comments[j].snippet.likeCount)? likevalue=a.items[i].replies.comments[j].snippet.likeCount:likevalue="1";
                                           p3.innerHTML = NUMBER_convertor(likevalue);
                                          // p3.innerHTML =a.items[i].replies.comments[j].snippet.likeCount;
                                          img2.src = '../ICONS/like.png';
                                          img3.src = '../ICONS/dislike.png';
                                          
                                       
                                          }
                          
                                          contaner_of_replys[i].insertAdjacentElement("beforeend",reply_simblingDiv);
                          
                                        }

                                        // cmt_hidend_seek(i);
                                       
              }



              cmt_hidend_SEEk();  


            })
            .catch(
              e=>{
                console.log(e);
              }
            )

          }).catch((e)=>{
            console.log(e)
          })

}

//=======================================================================================================================================
function play_video(a){

  container_flexBox.forEach(
    (e , index) =>{
      e.addEventListener("click", function(){
         kkkk= true;
        
// yourCMT section-------------------------------------------------------------------------------------------------------------------------
              let num2=yourCMT.childElementCount;
              // console.log(num2);
              if(num2>0){
                for(let n=0;n<num2;n++){
                  yourCMT.removeChild(yourCMT.children[0]);
                } }
//----------------------------------------------------------------------------------


  
//======================================================================================
  //  let channelId_ID = a.items[index].snippet.channelId;
   let channelId_ID ;
    (a.items[index].snippet.channelId)?channelId_ID = a.items[index].snippet.channelId:channelId_ID = "";
        // videos_ID =a.items[index].id;
         (a.items[index].id)?videos_ID =a.items[index].id:videos_ID = "";
        // title.innerHTML=a.items[index].snippet.localized.title;
          (a.items[index].snippet.localized.title)?title.innerHTML=a.items[index].snippet.localized.title:title.innerHTML="title";
        // Like.innerHTML= NUMBER_convertor(a.items[index].statistics.likeCount);
          (a.items[index].statistics.likeCount)?Like.innerHTML= NUMBER_convertor(a.items[index].statistics.likeCount):Like.innerHTML= "404";
      //  console.log(a.items[index].statistics.likeCount);
        // channelName.innerHTML=a.items[index].snippet.channelTitle;
         (a.items[index].snippet.channelTitle)?channelName.innerHTML=a.items[index].snippet.channelTitle:channelName.innerHTML= "channel title";
        // description_data.innerHTML=a.items[index].snippet.description;   

        // a.items[index].snippet.description ?  description_data.innerHTML=a.items[index].snippet.description : description_data.innerHTML= "";
        if(a.items[index].snippet.description){
          description_data.innerHTML=a.items[index].snippet.description;
          more.style.display="flex";
          //  show_less.style.display="";

        }
        else{
           description_data.innerHTML= "";
           more.style.display="none";
          //  show_less.style.display="none";

        }

     
        iframe.src=`https://www.youtube.com/embed/${videos_ID}?autoplay=1&rel=0&modestbranding=0`;

        // date_convertor_maineVideo(a,index);
        // publishTime.innerHTML = Date_convertor(a.items[index].snippet.publishedAt);
          (a.items[index].snippet.publishedAt)?publishTime.innerHTML = Date_convertor(a.items[index].snippet.publishedAt):publishTime.innerHTML = "11-22-24";

        // viewsCount.innerHTML= NUMBER_convertor(a.items[index].statistics.viewCount) + "  views";
          (a.items[index].statistics.viewCount)?viewsCount.innerHTML= NUMBER_convertor(a.items[index].statistics.viewCount) + "  views":viewsCount.innerHTML="123 views"
        // value_convertor_2_0_maineVideo (a,index);
        // CommentCount.innerHTML= NUMBER_convertor(a.items[index].statistics.commentCount)+"  comments";
        (a.items[index].statistics.commentCount)?CommentCount.innerHTML= NUMBER_convertor(a.items[index].statistics.commentCount)+" comments":CommentCount.innerHTML="123 comments";
        // comment_convertor_2_0_maineVideo (a,index);
        //======================================================================
 fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId_ID}&key=${api}`)
        .then((a) => {
         let response = a.json();
         return response;
        })
          .then( (a)=>{
              // console.log(a);
              // iDPIC.src = a.items[0].snippet.thumbnails.high.url;
               (a.items[0].snippet.thumbnails.high.url)?iDPIC.src = a.items[0].snippet.thumbnails.high.url:iDPIC.src = "#";
              // subscribercount.innerHTML= NUMBER_convertor(a.items[0].statistics.subscriberCount)+"  Subscribers";
                (a.items[0].statistics.subscriberCount)?subscribercount.innerHTML= NUMBER_convertor(a.items[0].statistics.subscriberCount)+"  Subscribers":subscribercount.innerHTML= "123 Subscribers ";
              // subscribercount_convertor(a.items[0].statistics.subscriberCount);              
            })
            .catch((e)=>{
              console.log(e)
            })

            fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videos_ID}&key=${api}`)
            .then((a)=>{
               let response=  a.json();
              return response;
            })
            .then((a)=>{
              // console.log(a);
                            let chnageinvalue;
              
              // function items_length_check(){
                if(a.items.length >= 10){
                  chnageinvalue = 9;
                  
                }else{
                  chnageinvalue = a.items.length-1;
                } 
                  
              console.log(chnageinvalue);

             
              for(let i=0; i<=chnageinvalue;i++){
                // cmt_user_name[i].innerHTML=a.items[i].snippet.topLevelComment.snippet.authorDisplayName;
                ( a.items[i].snippet.topLevelComment.snippet.authorDisplayName)?cmt_user_name[i].innerHTML=a.items[i].snippet.topLevelComment.snippet.authorDisplayName:cmt_user_name[i].innerHTML= "user name";
                // cmt_date_convertor(a.items[i].snippet.topLevelComment.snippet.publishedAt,i);
                // cmt_time[i].innerHTML= Date_convertor(a.items[i].snippet.topLevelComment.snippet.publishedAt);
                 (a.items[i].snippet.topLevelComment.snippet.publishedAt)?cmt_time[i].innerHTML= Date_convertor(a.items[i].snippet.topLevelComment.snippet.publishedAt):cmt_time[i].innerHTML= "11-22-24";
                // cmt_like_convertor(a.items[i].snippet.topLevelComment.snippet.likeCount,i);
                // cmt_like[i].innerHTML = NUMBER_convertor(a.items[i].snippet.topLevelComment.snippet.likeCount);
                (a.items[i].snippet.topLevelComment.snippet.likeCount)?cmt_like[i].innerHTML = NUMBER_convertor(a.items[i].snippet.topLevelComment.snippet.likeCount):cmt_like[i].innerHTML = "12";

                // user_cmnt[i].innerHTML=a.items[i].snippet.topLevelComment.snippet.textOriginal;
                (  a.items[i].snippet.topLevelComment.snippet.textOriginal)?user_cmnt[i].innerHTML=a.items[i].snippet.topLevelComment.snippet.textOriginal:user_cmnt[i].innerHTML= "";

                  // cmt_user_pic[i].src=a.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl;
                    (a.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl)?cmt_user_pic[i].src=a.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl:cmt_user_pic[i].src="#";
                   //====================================================================================
                    let num=contaner_of_replys[i].childElementCount;
                    // console.log(num);
                    if(num>0){
                      for(let k=0;k<num;k++){
                        contaner_of_replys[i].removeChild(contaner_of_replys[i].children[0]);
                      } }
                    
                                         if(a.items[i].replies){
                
                                          //=============================================
                                          let reply_lenght =a.items[i].replies.comments.length;
                                           reply = document.createElement("p");
                                          reply.classList.add("replies");
                                          reply.innerHTML= reply_lenght+" reply";
                                          contaner_of_replys[i].insertAdjacentElement("afterbegin", reply);
                                          reply_simblingDiv = document.createElement("div");
                                        // console.log(reply_simblingDiv);
                                        reply_simblingDiv.classList.add("simbling_div");
                                          
                          
                                    
                                          for(let j=0; j<reply_lenght;j++){
                                         
                                            let div = document.createElement("div");
                                            div.classList.add("replies_cmt_div");

                                            let img = document.createElement("img");
                                        
                                            img.classList.add("replies_user_pic");
                                            let div2 = document.createElement("div");
                                            div2.classList.add("replies_style");
                          
                                            let p1 = document.createElement("p");
                                            p1.classList.add("ppppppp");
                                            let span1= document.createElement("span");
                                            span1.classList.add("replies_user_name");
                                            span1.innerHTML="user name";
                                            let span2= document.createElement("span");
                                            span2.classList.add("replies_user_time");
                                            span2.innerHTML="publish time";
                          
                                            p1.appendChild(span1);
                                            p1.appendChild(span2);
                          
                                            let p2 = document.createElement("p");
                                            p2.classList.add("replies_cmt");
                                            p2.innerHTML="user comment";
                          
                                            let insidediv2 = document.createElement("div");
                                            insidediv2.classList.add("replies_div_with_like");
                                            let div3 = document.createElement("div");
                                            div3.classList.add("replies_btn1_div");
                          
                                            let btn1 = document.createElement("button");
                                            btn1.classList.add("replies_button1");
                                            let img2 = document.createElement("img");
                                            btn1.appendChild(img2);
                          
                                            let p3 = document.createElement("p");
                                            p3.classList.add("replies_like");
                                            p3.innerHTML="13";
                          
                                            let btn2 = document.createElement("button");
                                            btn2.classList.add("replies_button2");
                                             let img3 = document.createElement("img");
                                             btn2.appendChild(img3);
                          
                                            let p4 = document.createElement("p");
                                            p4.classList.add("replies_reply");
                                            p4.innerHTML="reply";
                                            
                          
                                            div3.appendChild(btn1);
                                            div3.appendChild(p3);
                          
                                            insidediv2.appendChild(div3);
                                            insidediv2.appendChild(btn2);
                                            insidediv2.appendChild(p4);
                                
                          
                                            div2.appendChild(p1);
                                            div2.appendChild(p2);
                                            div2.appendChild(insidediv2);
                          
                          
                                            div.appendChild(img);
                                            div.appendChild(div2);
                                            // console.log(i)
                                            // console.log(div)
                                            reply_simblingDiv.insertAdjacentElement("afterbegin", div);
                                          
                                            // contaner_of_replys[i].insertAdjacentElement("beforeend", div);
                                            // img.src=a.items[i].replies.comments[j].snippet.authorProfileImageUrl;
                                             ( a.items[i].replies.comments[j].snippet.authorProfileImageUrl)? img.src=a.items[i].replies.comments[j].snippet.authorProfileImageUrl:img.src="#";
                                            // span1.innerHTML = a.items[i].replies.comments[j].snippet.authorDisplayName;
                                              (a.items[i].replies.comments[j].snippet.authorDisplayName)?span1.innerHTML = a.items[i].replies.comments[j].snippet.authorDisplayName:span1.innerHTML = "user name";
                                             
                                             let dateValue;
                                            // let dateValue=a. items[i].replies.comments[j].snippet.publishedAt ;
                                             (a. items[i].replies.comments[j].snippet.publishedAt )?dateValue=a. items[i].replies.comments[j].snippet.publishedAt:dateValue= "2024-07-16T14:47:45Z";
                                             console.log(dateValue);
                                            span2.innerHTML = Date_convertor(dateValue);
                                            // span2.innerHTML =a. items[i].replies.comments[j].snippet.publishedAt ;
                                          // p2.innerHTML= a.items[i].replies.comments[j].snippet.textDisplay;
                                          (a.items[i].replies.comments[j].snippet.textDisplay)?p2.innerHTML= a.items[i].replies.comments[j].snippet.textDisplay:p2.innerHTML= "";

                                              let likevalue;
                                          //  let likevalue=a.items[i].replies.comments[j].snippet.likeCount;
                                           (a.items[i].replies.comments[j].snippet.likeCount)?likevalue=a.items[i].replies.comments[j].snippet.likeCount:likevalue= "1";
                                           p3.innerHTML = NUMBER_convertor(likevalue);
                                          // p3.innerHTML =a.items[i].replies.comments[j].snippet.likeCount;
                                          img2.src = '../ICONS/like.png';
                                          img3.src = '../ICONS/dislike.png';
                                          
                                       
                                          }
                          
                                          contaner_of_replys[i].insertAdjacentElement("beforeend",reply_simblingDiv);
                          
                                        }

                                        // cmt_hidend_seek(i);
                                       
              }



              cmt_hidend_SEEk();  


            })
            .catch(
              e=>{
                console.log(e);
              }
            )

        })
      })
    }
  
//==================================================================


//-------------------------------------------------------------------------


function cmt_hidend_SEEk(){
  let replies = document.querySelectorAll(".replies");
  // console.log(replies);
       replies.forEach(
      Element=>{
        Element.addEventListener("click", function(){
          // console.log(Element);

          if( kkkk==true){
            Element.nextElementSibling.style.display="block";
            kkkk = false;
            // console.log(kkkk);
          }
          else{
            Element.nextElementSibling.style.display="none";
            kkkk = true;
            // console.log(kkkk);
          }
       
         
        })
      }
    )

  }



//--------------------------------------------------------------------
function categorypages(x){

   //====================
        let Id = [];
  let vid_id = [];
  let ARRIDD = [];
    let url =
    `https://youtube.googleapis.com/youtube/v3/videos?part=player&chart=mostPopular&maxResults=20&videoCategoryId=${x}&key=AIzaSyDLTWJywQI4njC62CaE-rv1eNozlQdsuTI`;

      fetch(url)
    .then((a) => {
      return a.json();
    })
    .then((a) => {
      // console.log(a);
      for (let i = 0; i < 20; i++) {
        // Id[i] = a.items[i].id;
        ( a.items[i].id)?Id[i] = a.items[i].id:Id[i] = "4cw3x0tU-pk";
      }
      // console.log(a);

      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${Id[0]}&id=${Id[1]}&id=${Id[2]}&id=${Id[3]}&id=${Id[4]}&id=${Id[5]}&id=${Id[6]}&id=${Id[7]}&id=${Id[8]}&id=${Id[9]}&id=${Id[10]}&id=${Id[11]}&id=${Id[12]}&id=${Id[13]}&id=${Id[14]}&id=${Id[15]}&id=${Id[16]}&id=${Id[17]}&id=${Id[18]}&id=${Id[19]}&key=AIzaSyDLTWJywQI4njC62CaE-rv1eNozlQdsuTI`
      )
        .then((a) => {
          return a.json();
        })
        .then((a) => {
          for (let i = 0; i < 20; i++) {
            // sugested_channel_name[i].innerHTML = a.items[i].snippet.channelTitle;
            (a.items[i].snippet.channelTitle)?sugested_channel_name[i].innerHTML = a.items[i].snippet.channelTitle:sugested_channel_name[i].innerHTML = "channel name";
            // sugested_videos_title[i].innerHTML = a.items[i].snippet.title;
              ( a.items[i].snippet.title)?sugested_videos_title[i].innerHTML = a.items[i].snippet.title:sugested_videos_title[i].innerHTML = "title";
          // img_suggestArray[i].src  = a.items[i].snippet.thumbnails.medium.url;
          ( a.items[i].snippet.thumbnails.medium.url)?img_suggestArray[i].src= a.items[i].snippet.thumbnails.medium.url:img_suggestArray[i].src  = "#";
            // vid_id[i] = a.items[i].id;
              (a.items[i].id)? vid_id[i] = a.items[i].id:vid_id[i] = "4cw3x0tU-pk";
            // ARRIDD[i] = a.items[i].snippet.channelId;
             (a.items[i].snippet.channelId)?ARRIDD[i] = a.items[i].snippet.channelId:ARRIDD[i] = "UC_OaHF736OBZo_vTztGtXEg";
          }
      fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vid_id[0]}&id=${vid_id[1]}&id=${vid_id[2]}&id=${vid_id[3]}&id=${vid_id[4]}&id=${vid_id[5]}&id=${vid_id[6]}&id=${vid_id[7]}&id=${vid_id[8]}&id=${vid_id[9]}&id=${vid_id[10]}&id=${vid_id[11]}&id=${vid_id[12]}&id=${vid_id[13]}&id=${vid_id[14]}&id=${vid_id[15]}&id=${vid_id[16]}&id=${vid_id[17]}&id=${vid_id[18]}&id=${vid_id[19]}&maxResults=20&regionCode=IN&key=${api}`
          )
            .then((b) => {
              return b.json();
            })
            .then((a) => {
              for (let i = 0; i < 20; i++) {
                //  sugested_videos_time_publish[i].innerHTML = Date_convertor(a.items[i].snippet.publishedAt);
                 (a.items[i].snippet.publishedAt)?sugested_videos_time_publish[i].innerHTML = Date_convertor(a.items[i].snippet.publishedAt): sugested_videos_time_publish[i].innerHTML ="";
                //  sugested_videos_views[i].innerHTML= NUMBER_convertor(a.items[i].statistics.viewCount) + " views";
                (a.items[i].statistics.viewCount)?sugested_videos_views[i].innerHTML= NUMBER_convertor(a.items[i].statistics.viewCount) + " views":sugested_videos_views[i].innerHTML= "";

              }
              // console.log(a);
               play_video(a);
                // getId2(a);
              //  redirectvideo(a);
              //  localStorage.removeItem("xx");
            })
            .catch((e) => {
              console.log(e);
            });
                    })
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => {
      console.log(e);
    });
}

function homepageload(){
  let api = "AIzaSyDLTWJywQI4njC62CaE-rv1eNozlQdsuTI";
fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${api}`
    )
       .then((a) => {
      let response = a.json();
      return response;
    })
    .then((a) => {
      //------------------------------------------------------------------- ids array;
     console.log(a);
      for (let i = 0; i < 20; i++) {
          //   sugested_channel_name[i].innerHTML = a.items[i].snippet.channelTitle;
           (  a.items[i].snippet.channelTitle)?sugested_channel_name[i].innerHTML = a.items[i].snippet.channelTitle:sugested_channel_name[i].innerHTML = "channel title";
          //   sugested_videos_title[i].innerHTML = a.items[i].snippet.title;
          ( a.items[i].snippet.title)?sugested_videos_title[i].innerHTML = a.items[i].snippet.title:sugested_videos_title[i].innerHTML = "title";
          // img_suggestArray[i].src  = a.items[i].snippet.thumbnails.medium.url;
           (a.items[i].snippet.thumbnails.medium.url)?img_suggestArray[i].src= a.items[i].snippet.thumbnails.medium.url:img_suggestArray[i].src  ="#";
          //    sugested_videos_time_publish[i].innerHTML = Date_convertor(a.items[i].snippet.publishedAt);
            (a.items[i].snippet.publishedAt)?sugested_videos_time_publish[i].innerHTML = Date_convertor(a.items[i].snippet.publishedAt):sugested_videos_time_publish[i].innerHTML = "11-22-33";
          //        sugested_videos_views[i].innerHTML= NUMBER_convertor(a.items[i].statistics.viewCount) + " views";
            (a.items[i].statistics.viewCount)?sugested_videos_views[i].innerHTML= NUMBER_convertor(a.items[i].statistics.viewCount) + " views" :sugested_videos_views[i].innerHTML= " not found views"; 
 }
        play_video(a);
        redirectvideo();
        //  getId2(a);
      
    })
    .catch((e) => {
      console.log(e);
    });

}


function SEARCH_RESULT_BY_searchpage (){
    let searchInput =  localStorage.getItem("searchValue");
 search.value = searchInput;
// SAVE_SEACH_VALUE();
    let ARRIDD = [];
    let vIDARRY = [];
    // active_category(0);

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=20&q=${searchInput}&key=${api}`
    )
      .then((b) => {
        let response = b.json();
        return response;
      })
      .then((a) => {
          
          // console.log(a);
          // console.log(a.items.length);
        for (let i = 0; i < a.items.length; i++) {
         (a.items[i].id.videoId)? vIDARRY[i]= a.items[i].id.videoId:vIDARRY[i]= "4cw3x0tU-pk"; 
         (a.items[i].id.videoId)?ARRIDD[i]= a.items[i].snippet.channelId:ARRIDD[i]= "UC_OaHF736OBZo_vTztGtXEg";
        
        }

          // getId2(a);
        //-------------------------------------------------------
        fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vIDARRY[0]}&id=${vIDARRY[1]}&id=${vIDARRY[2]}&id=${vIDARRY[3]}&id=${vIDARRY[4]}&id=${vIDARRY[5]}&id=${vIDARRY[6]}&id=${vIDARRY[7]}&id=${vIDARRY[8]}&id=${vIDARRY[9]}&id=${vIDARRY[10]}&id=${vIDARRY[11]}&id=${vIDARRY[12]}&id=${vIDARRY[13]}&id=${vIDARRY[14]}&id=${vIDARRY[15]}&id=${vIDARRY[16]}&id=${vIDARRY[17]}&id=${vIDARRY[18]}&id=${vIDARRY[19]}&maxResults=20&regionCode=IN&key=${api}`
        )
          .then((c) => {
            return c.json();
          })
          .then((d) => {
            // console.log(d);
            //  console.log(d.items[q].id);
            //  console.log(vIDARRY);
                      vIDARRY.forEach((e, index) => {
              for (let q = 0; q < 20; q++) {
                    if(e == d.items[q].id){
                        // sugested_videos_time_publish[index].innerHTML= Date_convertor(d.items[q].snippet.publishedAt);
                         (d.items[q].snippet.publishedAt)?sugested_videos_time_publish[index].innerHTML= Date_convertor(d.items[q].snippet.publishedAt):sugested_videos_time_publish[index].innerHTML= "11-22-44";
                        //   sugested_videos_views[index].innerHTML = NUMBER_convertor(d.items[q].statistics.viewCount) + " views";
                        (d.items[q].statistics.viewCount)?sugested_videos_views[index].innerHTML = NUMBER_convertor(d.items[q].statistics.viewCount) + " views":sugested_videos_views[index].innerHTML = "12 views";
                        // sugested_channel_name[index].innerHTML = d.items[q].snippet.channelTitle;
                         ( d.items[q].snippet.channelTitle)?sugested_channel_name[index].innerHTML = d.items[q].snippet.channelTitle:sugested_channel_name[index].innerHTML = "chnanel name";
                        //  sugested_videos_title[index].innerHTML = d.items[q].snippet.title;
                         (d.items[q].snippet.title)?sugested_videos_title[index].innerHTML = d.items[q].snippet.title:sugested_videos_title[index].innerHTML = "video title";
                        //  img_suggestArray[index].src = d.items[q].snippet.thumbnails.medium.url;
                          (d.items[q].snippet.thumbnails.medium.url)?img_suggestArray[index].src = d.items[q].snippet.thumbnails.medium.url:img_suggestArray[index].src = "#";
                        
                    }}
            });
            // getId2(d);
            play_video(d);
            //  getId2(d);

          })
          .catch((e) => {
            console.log(e);
          });
        //-------------------------------------------------------------------
      })
      .catch((e) => {
        console.log(e);
      });
  };




function play_video2(){
  let index3 =localStorage.getItem("videos_ID"); 
  iframe.src=`https://www.youtube.com/embed/${index3}?autoplay=1&rel=0&modestbranding=0`; 

  //=============================================================================================================================== 
let x = localStorage.getItem("xx"); 

// console.log(x)
if(x=="home"){
       homepageload();
      
      //  console.log("homepage");
}
else if(x=="searchpage"){
  SEARCH_RESULT_BY_searchpage ();
  redirectvideo(index3)

}
else {
  categorypages(x);
   redirectvideo(index3);
  // alert("categorypage")

}
// else if(x==17) {
//   categorypages(x);
//   alert("categorypage")

// }
// else if(x==20) {
//   categorypages(x);
//   alert("categorypage")

// }
// else if(x==25) {
//   categorypages(x);
//   alert("categorypage")

// }
// else if(x==10) {
//   categorypages(x);
//   alert("categorypage")

// }
// else if(x==24) {
//   categorypages(x);
//   alert("categorypage")

// }
// else if(x==28) {
//   categorypages(x);
//   alert("categorypage")

// }
// else if(x==1) {
//   categorypages(x);
//   alert("categorypage")

// }
// else if(x==2) {
//   categorypages(x);
//   alert("categorypage")

// }
// redirectvideo(index3);

}
  //======================================================================================================================

play_video2();



// function plyalist_videoplay(){
//   let index4 = localStorage.getItem("PlaylistID2");
//   console.log(index4);
//   iframe.src=`https://www.youtube.com/embed/${index4}?autoplay=1`;
// }
// plyalist_videoplay();



//===================================================================================================================

window.addEventListener("keydown", function(e){
   let search_input = search.value;
  // console.log(e.key);
  if( e.key=="Enter" && search_input !=""){
       localStorage.setItem("searchValue" ,search_input);
   window.location.href="./search page.html";

  }
})




searchIcon.addEventListener("click",function(){ 
  let search_input = search.value;
  if(search_input==""){
alert("search box is empty");
  }
  else{
   localStorage.setItem("searchValue" ,search_input);
   window.location.href="./search page.html";
  }

})

// =============================================== left-arrow=================
searchIcon2.addEventListener("click", () => {
  left_arrow.style.display = "block";
  search.style.display = "block";
  logo_div.style.display = "none";
  nav_left_ICONS.style.display = "none";
  suggestion.style.display="block";

  searchIcon.style.display = "block";
  searchIcon2.style.display = "none";
});

left_arrow.addEventListener("click", () => {
  let width3 = window.matchMedia("(max-width:870px)");
    if(width3.matches){
  search.style.display = "none";
  logo_div.style.display = "flex";
  nav_left_ICONS.style.display = "block";
  left_arrow.style.display = "none";
    suggestion.style.display="none";

  searchIcon.style.display = "none";
  searchIcon2.style.display = "block";

    }
    else{
       search.style.display = "block";
  logo_div.style.display = "flex";
  nav_left_ICONS.style.display = "block";
  left_arrow.style.display = "none";

  searchIcon.style.display = "block";
  searchIcon2.style.display = "none";
   suggestion.style.display="block";
    }
  
});

// function lefty(){
//     suggestion.style.display="none";
// }
// left_arrow.addEventListener("click", () => {
//   search.style.display = "none";
//   logo_div.style.display = "flex";
//   nav_left_ICONS.style.display = "block";
//   left_arrow.style.display = "none";

//   searchIcon.style.display = "none";
//   searchIcon2.style.display = "block";
// });


// responsiv functions -------------------------------------------------------------------------------------------

let menu = document.getElementById("menu");
let menu2 = document.getElementById("menu2");
let container_sidebar = document.getElementById("container");


// automatic change event ------------------------------------
function chnage() {
  let width3 = window.matchMedia("(max-width:870px)");
  width3.addEventListener("change", () => {
    if (width3.matches) {
      menu2.style.display = "none";
      menu.style.display = "block";
      // ---------------------------------------------------------------
      search.style.display = "none";

      searchIcon.style.display = "none";
      searchIcon2.style.display = "block";
      //--------------------------------------------------------------------------------

      container_sidebar.style.transform = "translateX(-100%)";


    } else {
      menu2.style.display = "none";
      menu.style.display = "block";
      // -------------------------------------------------------------------------
      search.style.display = "block";

      searchIcon.style.display = "block";
      searchIcon2.style.display = "none";
      //--------------------------------------------------------------------------------
    container_sidebar.style.transform = "translateX(-100%)";

    }
  });
}
chnage();
onload = chnage();

// menu 1 Event

function hit() {
    menu.addEventListener(
      "click",
  
      function () {
        let width1 = window.matchMedia("(max-width:870px)");
  
        if (width1.matches) {
          // -----------------------
          menu2.style.display = "block";
          menu.style.display = "none";

          container_sidebar.style.transform = "translateX(0%)";


        } else {
          menu2.style.display = "block";
          menu.style.display = "none";
  //===================================================
  container_sidebar.style.transform = "translateX(0%)";

        }
      }
    );
  }
  // ---------------------------------------------
  // menu2 Event
  
  function hit2() {
    menu2.addEventListener(
      "click",
  
      function () {
        let width2 = window.matchMedia("(max-width:870px)");
        if (width2.matches) {
          console.log("match2");
          menu2.style.display = "none";
          menu.style.display = "block";
        //   container_sidebar.style.display = "none";
          container_sidebar.style.transform ="translateX(-100%)";
        } else {
          menu2.style.display = "none";
          menu.style.display = "block";
        //   container_sidebar.style.display = "none";
          container_sidebar.style.transform ="translateX(-100%)";
        }
      }
    );
  }

hit();
hit2();
//==============================================================videoCategory side bar


//======================================================
  let BARKHA=false;
   let video ;
  let active ;

  function senddata(){
  localStorage.setItem("active_category", active);
  localStorage.setItem("videoCategory", video);
  localStorage.setItem("Active_num",BARKHA);
  window.location.href="./index.html";
  }

function active_category(x){
  category_class.forEach(
    e=>{
      e.style.background="none";
    }
  )
category_class[x].style.background="rgba(218, 196, 196, 0.76)";
}


Sports.addEventListener("click", function(){
  active_category(3);
  BARKHA=true;
   video = 17;
   active = 3;
    senddata();
});
//------------------------------------------------------------// gaming-----------------
Gaming.addEventListener("click", function(){
  active_category(1);
   BARKHA=true;
   video = 20;
   active = 1;
  senddata();

});
//------------------------------------------------------------// NEWS-----------------
News.addEventListener("click",function(){
  active_category(4);
   BARKHA=true;
   video = 25;
   active = 4;
   senddata();
});
//------------------------------------------------------------//MUSIC-----------------
Music.addEventListener("click", function(){
  active_category(7);
   BARKHA=true;
   video = 10;
   active = 7;
   senddata();
});
//------------------------------------------------------------//Entertainment-----------------
Entertainment.addEventListener("click", function(){
  active_category(5);
   BARKHA=true;
   video = 24;
   active = 5;
   senddata();
});
//------------------------------------------------------------//technology-----------------
Technology.addEventListener("click", function(){
  active_category(6);
   BARKHA=true;
   video = 28;
   active = 6;
   senddata();
});
//------------------------------------------------------------//blogs-----------------
Film.addEventListener("click", function(){
  active_category(8);
   BARKHA=true;
   video = 1;
   active = 8;
   senddata();
 
});
//------------------------------------------------------------//home-----------------
home.addEventListener("click", function(){
  // khulte_hi();
  active_category(0);

     
  
});
//------------------------------------------------------------//AUTOMOBILES-----------------
Automobiles.addEventListener("click", function(){
  active_category(2);
   BARKHA=true;
   video = 2;
   active = 2;
   senddata();
});

//=============================================================================================================descrition dox==========

let description_box= document.querySelector(".description_box");


let extra= document.getElementById("extra");
let dropdown_list= document.getElementById("dropdown_list");
let like = document.getElementById("like");
let like_img = document.getElementById("like_img");
 let count =true;
 let like_count = true;

subs_btn.addEventListener("click",function(){
  subed_btn.style.display="block";
  subs_btn.style.display="none";
})
subed_btn.addEventListener("click",function(){
  subed_btn.style.display="none";
  subs_btn.style.display="block";
});


more.addEventListener("click", function(){
  more.style.display="none";
  show_less.style.display="block";
  description_box.classList.toggle("description_box_toggle");
})

show_less.addEventListener("click", function(){
  more.style.display="flex";
  show_less.style.display="none";
  description_box.classList.toggle("description_box_toggle");
 
})
//========================dropdown list========================

extra.addEventListener("click", function(){
if(count==true){
  dropdown_list.style.display="flex";
  count= false;
}
else{
  dropdown_list.style.display="none";
  count=true;
}
})
//=========like btn=============
like.addEventListener("click", function(){
  if( like_count==true){
    like_img.src="./icons8-facebook-like-50.png";
     like_count= false;
  }
  else{
    like_img.src="./icons8-like-50.png";
    like_count=true;
  }

})



// ==========================replies=====================================
let savedata =()=>{
  localStorage.setItem("div",yourCMT.innerHTML);
}

let input = document.getElementById("input");
let comment = document.getElementById("comment");

comment.addEventListener("click", function(){

  let date =  Date.now();
  // console.log(date);
  localStorage.setItem("Cmtdate",date);

  let div = document.createElement("div");
  div.classList.add("user_comment_div");

  let img = document.createElement("img");

  img.classList.add("cmt_user_pic");
  let div2 = document.createElement("div");
  div2.classList.add("style");

  let p1 = document.createElement("p");
  p1.classList.add("pp");
  let span1= document.createElement("span");
  span1.classList.add("user_name");
  span1.innerHTML="user name";
  let span2= document.createElement("span");
  span2.classList.add("cmt_time");
  span2.innerHTML="  1s ago";
  //------------------------------------------------------
  setInterval(() => {
    let dt = localStorage.getItem("Cmtdate");
    console.log(dt)
   console.log(yourCMTDate_convertor(dt));
   span2.innerHTML=yourCMTDate_convertor(dt);
   savedata();
  }, 60000);
//-----------------------------------------------------
  p1.appendChild(span1);
  p1.appendChild(span2);

  let p2 = document.createElement("p");
  p2.classList.add("user_cmnt");
  p2.innerHTML=input.value;

  let insidediv2 = document.createElement("div");
  insidediv2.classList.add("reply_div_with_like");
  let div3 = document.createElement("div");
  div3.classList.add("btn1_div");

  let btn1 = document.createElement("button");
  btn1.classList.add("button1");
  let img2 = document.createElement("img");
  btn1.appendChild(img2);

  let p3 = document.createElement("p");
  p3.classList.add("cmt_like");
  p3.innerHTML="13";

  let btn2 = document.createElement("button");
  btn2.classList.add("button2");
   let img3 = document.createElement("img");
   btn2.appendChild(img3);

  let p4 = document.createElement("p");
  p4.classList.add("reply");
  p4.innerHTML="reply";
  

  div3.appendChild(btn1);
  div3.appendChild(p3);

  insidediv2.appendChild(div3);
  insidediv2.appendChild(btn2);
  insidediv2.appendChild(p4);


  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(insidediv2);


  div.appendChild(img);
  div.appendChild(div2);

  img.src = "./user.png";
  img2.src = './like.png';
  img3.src = './dislike.png';



  yourCMT.appendChild(div);
input.value = "";
savedata();
})



let getdata = ()=>{
  let store_smt = localStorage.getItem("div");
  yourCMT.innerHTML=store_smt;
}
onload = getdata();



function notify(){
  // alert("clicked")
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

download.addEventListener("click", notify)
drop_download.addEventListener("click",notify);


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

newlist_btn.addEventListener("click", Display );
create_btn.addEventListener("click", save_to);

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



Save.addEventListener("click",function(){
  opacity_div.style.display="block";
  save_div.style.display="flex";
})
close_savediv.addEventListener("click", Cclose);



// function getId2(d){
//   container_flexBox.forEach((e ,index)=>{
//     e.addEventListener("mouseover", function(){
//       let  ID = d.items[index].id;
//       console.log(ID);

//    Responsiveiframe[index].src=`https://www.youtube.com/embed/${ID}?autoplay=1&controls=0&rel=0&mute=1&modestbranding=0`;
//       img_suggest[index].style.display="none";
//      Containeriframe[index].style.display="block";
 

//     })})
// }
// function getId2(d){
  // container_flexBox.forEach((e ,index)=>{
  //   e.addEventListener("mouseout", function(){
  //       Responsiveiframe[index].src=`https://www.youtube.com/embed/${""}?autoplay=1`;   
  //    img_suggest[index].style.display="block";
  //    Containeriframe[index].style.display="none"; 
  //   })})



