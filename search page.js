 let loader_onpages = document.querySelector(".loader_onpages");
let loader_container = document.querySelector(".loader_container");

let video_part = document.getElementById("video_part");

//'''''''''''''''''''''''''''''''''''''''''''''

function animation_page_loader(){
  video_part.style.display="none";
  // right_side.style.visibility="hidden";
loader_container.style.display="block";
loader_onpages.style.animation="l2 1s  infinite linear"

setTimeout(() => {
  // left_side.style.display="flex";
  video_part.style.display="block";
loader_container.style.display="none";
loader_onpages.style.animation="";
}, 1000);

}
onload = animation_page_loader();
// fetch api
// import{ sports } from './sports.js';

let search = document.getElementById("search");
let searchIcon = document.getElementById("searchIcon");
let searchIcon2 = document.getElementById("searchIcon2");
let thumbnail_img = document.querySelectorAll(".img_suggest");
let ab;
let video_title = document.querySelectorAll(".sugested_videos_title");
let channel_name = document.querySelectorAll(".sugested_channel_name");

let views_count = document.querySelectorAll(".sugested_videos_views");
let publish_time = document.querySelectorAll(".sugested_videos_time_publish");
let Description_  = document.querySelectorAll(".description");
let ID;
let api = "AIzaSyDLTWJywQI4njC62CaE-rv1eNozlQdsuTI";

let idpic = document.querySelectorAll(".idpic");
let background = document.getElementById("background");
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
// let videos_player = document.querySelectorAll(".videos");


let arr = Array.from(thumbnail_img);
let index ;

let menu = document.getElementById("menu");
let menu2 = document.getElementById("menu2");
let container_sidebar = document.getElementById("container");
let side_bar = document.getElementById("side_bar");
let subscribes = document.getElementById("subscribes");
let h5 = document.getElementsByTagName("h5");
let category = document.getElementById("category");
let menu_titles = document.getElementsByClassName("menu_titles");
let classCategory = document.getElementsByClassName("category");
let container_videos = document.getElementById("container_videos");
let container_flexBox = document.querySelectorAll(".container_flexBox");

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
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
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


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
//thumbnail_img--------------------------------------------------------------------------------------------------------------------------------------------- -
function SAVE_SEACH_VALUE(){
localStorage.setItem("searchValue",search.value);
}


// addEventListener---------------------------------
// function searchIcon_870px() {

 function barkha2() {
    let input = search.value;
    let ARRIDD = [];
    let vIDARRY = [];
    // active_category(0);
    SAVE_SEACH_VALUE();

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=20&q=${input}&key=${api}`
    )
      .then((b) => {
        let response = b.json();
        return response;
      })
      .then((a) => {
          
          // console.log(a);
          // console.log(a.items.length);
        for (let i = 0; i < a.items.length; i++) {
         (a.items[i].id.videoId)?vIDARRY[i]= a.items[i].id.videoId:vIDARRY[i]= "4cw3x0tU-pk"; 
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
            console.log(d);
            //  console.log(d.items[q].id);
            //  console.log(vIDARRY);
                      vIDARRY.forEach((e, index) => {
              for (let q = 0; q < 20; q++) {
                    if(e == d.items[q].id){
                        //  publish_time[index].innerHTML= Date_convertor(d.items[q].snippet.publishedAt);
                         (d.items[q].snippet.publishedAt)?publish_time[index].innerHTML= Date_convertor(d.items[q].snippet.publishedAt):publish_time[index].innerHTML= "";
                        //  views_count[index].innerHTML = NUMBER_convertor(d.items[q].statistics.viewCount) + " views";
                         (d.items[q].statistics.viewCount)?views_count[index].innerHTML = NUMBER_convertor(d.items[q].statistics.viewCount) + " views":views_count[index].innerHTML = "";
                        //  channel_name[index].innerHTML = d.items[q].snippet.channelTitle;
                         (d.items[q].snippet.channelTitle)?channel_name[index].innerHTML = d.items[q].snippet.channelTitle:channel_name[index].innerHTML = "";
                        //  video_title[index].innerHTML = d.items[q].snippet.title;
                         (d.items[q].snippet.title)?video_title[index].innerHTML = d.items[q].snippet.title:video_title[index].innerHTML = "";
                        //  arr[index].src = d.items[q].snippet.thumbnails.medium.url;
                         (d.items[q].snippet.thumbnails.medium.url)?arr[index].src = d.items[q].snippet.thumbnails.medium.url:arr[index].src = "";
                        //  description[index].innerHTML=d.items[q].snippet.description;
                        (d.items[q].snippet.description)?Description_[index].innerHTML = d.items[q].snippet.description:Description_[index].innerHTML= "";
                    }}
            });
            getId2(d);
              // idnikalo();

          })
          .catch((e) => {
            console.log(e);
          });


        fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=contentOwnerDetails%2Cstatistics%2Csnippet&maxResults=20&id=${ARRIDD[0]}&id=${ARRIDD[1]}&id=${ARRIDD[2]}&id=${ARRIDD[3]}&id=${ARRIDD[4]}&id=${ARRIDD[5]}&id=${ARRIDD[6]}&id=${ARRIDD[7]}&id=${ARRIDD[8]}&id=${ARRIDD[9]}&id=${ARRIDD[10]}&id=${ARRIDD[11]}&id=${ARRIDD[12]}&id=${ARRIDD[13]}&id=${ARRIDD[14]}&id=${ARRIDD[15]}&id=${ARRIDD[16]}&id=${ARRIDD[17]}&id=${ARRIDD[18]}&id=${ARRIDD[19]}&key=${api}`
        )
          .then((f) => {
            let response = f.json();
            return response;
          })
          .then((g) => {
            let kk = g.items;
            // console.log(kk);
            // console.log(ARRIDD);
            ARRIDD.forEach((e, index) => {
              for (let p = 0; p < kk.length; p++) {
                if (e == kk[p].id) {
                  // idpic[index].src = kk[p].snippet.thumbnails.high.url;
                  (kk[p].snippet.thumbnails.high.url)?idpic[index].src = kk[p].snippet.thumbnails.high.url:idpic[index].src = "";
                  // console.log(kk[p].id);
                }

              }
            });
          })
          .catch((e) => {
            console.log(e);
          });
        //-------------------------------------------------------------------
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchIcon.addEventListener("click",function(){
    //  search.value;
   if( search.value !=""){
    barkha2();
    animation_page_loader();
  }
  });
// }

// searchIcon_870px();

function SEARCH_RESULT_BY_HOMEPAGE (){
  // searchIcon.addEventListener("click", function () {
  
  let searchInput =  localStorage.getItem("searchValue");
 search.value = searchInput;
SAVE_SEACH_VALUE();
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
         (a.items[i].id.videoId)?vIDARRY[i]= a.items[i].id.videoId:vIDARRY[i]= "4cw3x0tU-pk"; 
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
                        //  publish_time[index].innerHTML= Date_convertor(d.items[q].snippet.publishedAt);
                        (d.items[q].snippet.publishedAt)?publish_time[index].innerHTML= Date_convertor(d.items[q].snippet.publishedAt):publish_time[index].innerHTML="";
                        //  views_count[index].innerHTML = NUMBER_convertor(d.items[q].statistics.viewCount) + " views";
                        NUMBER_convertor(d.items[q].statistics.viewCount)?views_count[index].innerHTML = NUMBER_convertor(d.items[q].statistics.viewCount) + " views":views_count[index].innerHTML = "";
                        //  channel_name[index].innerHTML = d.items[q].snippet.channelTitle;
                       ( d.items[q].snippet.channelTitle)?channel_name[index].innerHTML = d.items[q].snippet.channelTitle:channel_name[index].innerHTML ="";
                        //  video_title[index].innerHTML = d.items[q].snippet.title;
                        (d.items[q].snippet.title)?video_title[index].innerHTML = d.items[q].snippet.title:video_title[index].innerHTML = "";
                        //  arr[index].src = d.items[q].snippet.thumbnails.medium.url;
                        (d.items[q].snippet.thumbnails.medium.url)?arr[index].src = d.items[q].snippet.thumbnails.medium.url:arr[index].src = "";
                        //  arr[index].src = d.items[q].snippet.thumbnails.medium.url;
                        ( d.items[q].snippet.thumbnails.medium.url)?arr[index].src = d.items[q].snippet.thumbnails.medium.url:arr[index].src = "";
                        (d.items[q].snippet.description)?Description_[index].innerHTML = d.items[q].snippet.description:Description_[index].innerHTML= "";
                    }}
            });
            getId2(d);

          })
          .catch((e) => {
            console.log(e);
          });


        fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=contentOwnerDetails%2Cstatistics%2Csnippet&maxResults=20&id=${ARRIDD[0]}&id=${ARRIDD[1]}&id=${ARRIDD[2]}&id=${ARRIDD[3]}&id=${ARRIDD[4]}&id=${ARRIDD[5]}&id=${ARRIDD[6]}&id=${ARRIDD[7]}&id=${ARRIDD[8]}&id=${ARRIDD[9]}&id=${ARRIDD[10]}&id=${ARRIDD[11]}&id=${ARRIDD[12]}&id=${ARRIDD[13]}&id=${ARRIDD[14]}&id=${ARRIDD[15]}&id=${ARRIDD[16]}&id=${ARRIDD[17]}&id=${ARRIDD[18]}&id=${ARRIDD[19]}&key=${api}`
        )
          .then((f) => {
            let response = f.json();
            return response;
          })
          .then((g) => {
            let kk = g.items;
            // console.log(kk);
            // console.log(ARRIDD);
            ARRIDD.forEach((e, index) => {
              for (let p = 0; p < kk.length; p++) {
                if (e == kk[p].id) {
                  // idpic[index].src = kk[p].snippet.thumbnails.high.url;
                   (kk[p].snippet.thumbnails.high.url)?idpic[index].src = kk[p].snippet.thumbnails.high.url:idpic[index].src = "";
                  // console.log(kk[p].id);
                }

              }
            });
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
  // );
// }


SEARCH_RESULT_BY_HOMEPAGE();


window.addEventListener("keydown", function(e){
   if( e.key=="Enter" &&  search.value!=""){
    barkha2();
    animation_page_loader();
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
// left_arrow.addEventListener("click", () => {
//   search.style.display = "none";
//   logo_div.style.display = "flex";
//   nav_left_ICONS.style.display = "block";
//   left_arrow.style.display = "none";

//   searchIcon.style.display = "none";
//   searchIcon2.style.display = "block";
// });


// responsiv functions -------------------------------------------------------------------------------------------

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
      container_sidebar.style.display = "none";
      container_videos.style.left = "0px";
      container_sidebar.style.width = "250px";
      container_videos.style.left = "0px";
      //container_videos.style.width="100%";
      container_videos.style.width="100%";

      // subscribes.style.display = "block";

      for (let y of menu_titles) {
        y.style.display = "block";
      }

      for (let x of classCategory) {
        x.style.margin = "0";
      }
    } else {
      menu2.style.display = "block";
      menu.style.display = "none";
      // -------------------------------------------------------------------------
      search.style.display = "block";

      searchIcon.style.display = "block";
      searchIcon2.style.display = "none";
      //--------------------------------------------------------------------------------
      container_sidebar.style.display = "flex";
      container_sidebar.style.width = "100px";
      container_videos.style.left = "100px";
      //container_videos.style.width="80%";
      container_videos.style.width="calc(100vw - 100px)";

      // subscribes.style.display = "none";

      for (let y of menu_titles) {
        y.style.display = "none";
      }

      for (let x of classCategory) {
        x.style.margin = "10px 0 ";
      }
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
        container_sidebar.style.display = "flex";
        container_videos.style.left = "0px";


        // subscribes.style.display = "block";

        for (let y of menu_titles) {
          y.style.display = "block";
        }

        for (let x of classCategory) {
          x.style.margin = "0";
        }
      } else {
        menu2.style.display = "block";
        menu.style.display = "none";

        container_sidebar.style.width = "100px";
        container_videos.style.left = "100px";
      //  container_videos.style.width="100%";
       container_videos.style.width="calc(100vw - 100px)";
      //  category_class.style.height="30px";
       

        // subscribes.style.display = "none";

        for (let y of menu_titles) {
          y.style.display = "none";
        }

        for (let x of classCategory) {
          x.style.margin = "10px 0";
        }
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
        container_sidebar.style.display = "none";
        container_videos.style.left = "0px";
      } else {
        menu2.style.display = "none";
        menu.style.display = "block";
        container_sidebar.style.display = "flex";
        // --------------------------------
        container_sidebar.style.width = "250px";
        container_videos.style.left = "250px";
   container_videos.style.width="calc(100vw - 253px)";
        

        // subscribes.style.display = "block";

        for (let y of menu_titles) {
          y.style.display = "block";
        }

        for (let x of classCategory) {
          x.style.margin = "0";
        }
      }
    }
  );
}

hit();
hit2();
//==============================================================videoCategory side bar
// main function-----------------


//======================================================

// console.log(category_class);
function active_category(x){
  category_class.forEach(
    e=>{
      // console.log(e);
      e.style.background="none";
    }
  )
category_class[x].style.background="rgba(198, 196, 196, 0.449)";
}

let xx = "searchpage";
  let BARKHA=false;
   let video ;
  let active ;

  function senddata(){
  localStorage.setItem("active_category", active);
  localStorage.setItem("videoCategory", video);
  localStorage.setItem("Active_num",BARKHA);
  window.location.href="./index.html";
  }


Sports.addEventListener("click", function(){
 
  active_category(3);
  xx=17;
    BARKHA=true;
   video = 17;
   active = 3;
    senddata();
});
//------------------------------------------------------------// gaming-----------------
Gaming.addEventListener("click", function(){

  active_category(1);
  xx=20;
     BARKHA=true;
   video = 20;
   active = 1;
  senddata();
});
//------------------------------------------------------------// NEWS-----------------
News.addEventListener("click",function(){
 
  active_category(4);
  xx=25;
     BARKHA=true;
   video = 25;
   active = 4;
   senddata();
});
//------------------------------------------------------------//MUSIC-----------------
Music.addEventListener("click", function(){
 
  active_category(7);
  xx=10;
     BARKHA=true;
   video = 10;
   active = 7;
   senddata();
});
//------------------------------------------------------------//Entertainment-----------------
Entertainment.addEventListener("click", function(){

  active_category(5);
  xx=24;
     BARKHA=true;
   video = 24;
   active = 5;
   senddata();
});
//------------------------------------------------------------//technology-----------------
Technology.addEventListener("click", function(){

  active_category(6);
  xx=28;
     BARKHA=true;
   video = 28;
   active = 6;
   senddata();
});
//------------------------------------------------------------//blogs-----------------
Film.addEventListener("click", function(){

  active_category(8);
  xx=1;
     BARKHA=true;
   video = 1;
   active = 8;
   senddata();
 
});
//------------------------------------------------------------//home-----------------
home.addEventListener("click", function(){

  active_category(0);
 xx = "home";
 
});
//------------------------------------------------------------//AUTOMOBILES-----------------
Automobiles.addEventListener("click", function(){

  active_category(2);
  xx=2;
     BARKHA=true;
   video = 2;
   active = 2;
   senddata();
});


// function idnikalo(){
// container_flexBox.forEach((element, index)=>{
//   element.addEventListener("click",function(){
//     let videos_ID = a.items[index].id.videoId;
//     console.log(videos_ID);

//   })
// })

// }



// redirect function to videos playar page 



// home page ===============================================

// search result ===============================================================
function getId2(d){
container_flexBox.forEach((e ,index)=>{
    e.addEventListener("click", function(){
        // videos_ID = d.items[index].id;
         (d.items[index].id) ? videos_ID = d.items[index].id : videos_ID = "4cw3x0tU-pk";
      // console.log(videos_ID);      
      localStorage.setItem("videos_ID", videos_ID);
       localStorage.setItem("xx",xx);   
    //REDIRECT TO VIDEOS PLAYER PAGE 
      window.location.href=`./video player index.html`;
    })})

}




