// fetch api
// import{ sports } from './sports.js';

let search = document.getElementById("search");
let searchIcon = document.getElementById("searchIcon");
let searchIcon2 = document.getElementById("searchIcon2");
let thumbnail_img = document.querySelectorAll(".thumbnail_img");
let ab;
let video_title = document.querySelectorAll(".video_title");
let channel_name = document.querySelectorAll(".channel_name");

let views_count = document.querySelectorAll(".views_count");
let publish_time = document.querySelectorAll(".publish_time");
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
let videos_player = document.querySelectorAll(".videos");


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
let iframe = document.querySelectorAll(".responsive-iframe");
let containerIframe = document.querySelectorAll(".container-iframe");


let loader = document.querySelector(".loader");
let nav_bar = document.getElementById("nav");

// animation opening
onload = setTimeout(() => {
loader.style.animation="";
loader.style.display="none";
container_sidebar.style.display="flex";
nav_bar.style.display="flex";
container_videos.style.display="flex";
}, 1000);


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




//thumbnail_img----------------------------------------------------------------------------------------------------------------------------------------------
function thumbnail(a) {
  // publish_time[i].innerHTML = a.items[i].snippet.publishedAt;
  // views_count[i].innerHTML = a.items[i].statistics.viewCount;
  // channel_name[i].innerHTML = a.items[i].snippet.channelTitle;
    (a.items[i].snippet.channelTitle)?channel_name[i].innerHTML = a.items[i].snippet.channelTitle: channel_name[i].innerHTML = "channel title";
  // video_title[i].innerHTML = a.items[i].snippet.title;
 ( a.items[i].snippet.title)?video_title[i].innerHTML = a.items[i].snippet.title:video_title[i].innerHTML = "title";
  // arr[i].src = a.items[i].snippet.thumbnails.medium.url;
  (a.items[i].snippet.thumbnails.medium.url)?arr[i].src = a.items[i].snippet.thumbnails.medium.url:arr[i].src = "#";
}

// ------------------------------------------- onload fetch--------------------------------------------------------
function khulte_hi() {
   home.style.background="rgba(198, 196, 196, 0.449)";

  let ARRIDD = [];

  fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${api}`
    
  )
    .then((a) => {
      let response = a.json();
      return response;
    })
    .then((a) => {
      //------------------------------------------------------------------- ids array;
    
       index = a.items[0].id; 
      for (i = 0; i < arr.length; i++) {
        thumbnail(a);
      //   ARRIDD[i] = a.items[i].snippet.channelId;
       (a.items[i].snippet.channelId)?ARRIDD[i] = a.items[i].snippet.channelId:ARRIDD[i] ="UC_OaHF736OBZo_vTztGtXEg";
      //  publish_time[i].innerHTML= Date_convertor(a.items[i].snippet.publishedAt);
      (a.items[i].snippet.publishedAt)?publish_time[i].innerHTML= Date_convertor(a.items[i].snippet.publishedAt):publish_time[i].innerHTML= "";
      //   views_count[i].innerHTML=NUMBER_convertor(a.items[i].statistics.viewCount) + " views";
      (a.items[i].statistics.viewCount)?views_count[i].innerHTML=NUMBER_convertor(a.items[i].statistics.viewCount) + " views":views_count[i].innerHTML=" views";

      }
      getID(a);
      // getId3(a);

      fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=contentOwnerDetails%2Cstatistics%2Csnippet&maxResults=20&id=${ARRIDD[0]}&id=${ARRIDD[1]}&id=${ARRIDD[2]}&id=${ARRIDD[3]}&id=${ARRIDD[4]}&id=${ARRIDD[5]}&id=${ARRIDD[6]}&id=${ARRIDD[7]}&id=${ARRIDD[8]}&id=${ARRIDD[9]}&id=${ARRIDD[10]}&id=${ARRIDD[11]}&id=${ARRIDD[12]}&id=${ARRIDD[13]}&id=${ARRIDD[14]}&id=${ARRIDD[15]}&id=${ARRIDD[16]}&id=${ARRIDD[17]}&id=${ARRIDD[18]}&id=${ARRIDD[19]}&key=${api}`
      )
        .then((a) => {
          let response = a.json();
          return response;
        })
        .then((b) => {
          let kk = b.items;

          ARRIDD.forEach((e, index) => {
            for (i = 0; i < kk.length; i++) {
              if (e == kk[i].id) {
                // idpic[index].src = kk[i].snippet.thumbnails.high.url;
                 (kk[i].snippet.thumbnails.high.url)?idpic[index].src = kk[i].snippet.thumbnails.high.url:idpic[index].src = "";
              }
            }
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


//---------------------------------------------------------------
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
//--------------------------------------------------------------------


// addEventListener---------------------------------
// function searchIcon_870px() {
//   searchIcon.addEventListener("click", function () {
//     let input = search.value;
//     let ARRIDD = [];
//     let vIDARRY = [];
//     // active_category(0);

//     fetch(
//       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=20&q=${input}&key=${api}`
//     )
//       .then((b) => {
//         let response = b.json();
//         return response;
//       })
//       .then((a) => {
          
//           console.log(a);
//           console.log(a.items.length);
//         for (let i = 0; i < a.items.length; i++) {
//          (a.items[i].id.videoId) ? vIDARRY[i]= a.items[i].id.videoId : vIDARRY[i]= "4cw3x0tU-pk"; 
//          (a.items[i].id.videoId) ?   ARRIDD[i]= a.items[i].snippet.channelId :  ARRIDD[i]= "UC_OaHF736OBZo_vTztGtXEg";
//          // ARRIDD[i]= a.items[i].snippet.channelId;
// //          vIDARRY[i]= a.items[i].id.videoId;
//         }

//           // getId2(a);
//         //-------------------------------------------------------
//         fetch(
//           `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vIDARRY[0]}&id=${vIDARRY[1]}&id=${vIDARRY[2]}&id=${vIDARRY[3]}&id=${vIDARRY[4]}&id=${vIDARRY[5]}&id=${vIDARRY[6]}&id=${vIDARRY[7]}&id=${vIDARRY[8]}&id=${vIDARRY[9]}&id=${vIDARRY[10]}&id=${vIDARRY[11]}&id=${vIDARRY[12]}&id=${vIDARRY[13]}&id=${vIDARRY[14]}&id=${vIDARRY[15]}&id=${vIDARRY[16]}&id=${vIDARRY[17]}&id=${vIDARRY[18]}&id=${vIDARRY[19]}&maxResults=20&regionCode=IN&key=${api}`
//         )
//           .then((c) => {
//             return c.json();
//           })
//           .then((d) => {
//             console.log(d);
//             //  console.log(d.items[q].id);
//              console.log(vIDARRY);
//                       vIDARRY.forEach((e, index) => {
//               for (let q = 0; q < 20; q++) {
//                     if(e == d.items[q].id){
//                          publish_time[index].innerHTML= Date_convertor(d.items[q].snippet.publishedAt);
//                          views_count[index].innerHTML = NUMBER_convertor(d.items[q].statistics.viewCount) + " views";
//                          channel_name[index].innerHTML = d.items[q].snippet.channelTitle;
//                          video_title[index].innerHTML = d.items[q].snippet.title;
//                          arr[index].src = d.items[q].snippet.thumbnails.medium.url;
//                     }}
//             });
//             getId2(d);

//           })
//           .catch((e) => {
//             console.log(e);
//           });


//         fetch(
//           `https://youtube.googleapis.com/youtube/v3/channels?part=contentOwnerDetails%2Cstatistics%2Csnippet&maxResults=20&id=${ARRIDD[0]}&id=${ARRIDD[1]}&id=${ARRIDD[2]}&id=${ARRIDD[3]}&id=${ARRIDD[4]}&id=${ARRIDD[5]}&id=${ARRIDD[6]}&id=${ARRIDD[7]}&id=${ARRIDD[8]}&id=${ARRIDD[9]}&id=${ARRIDD[10]}&id=${ARRIDD[11]}&id=${ARRIDD[12]}&id=${ARRIDD[13]}&id=${ARRIDD[14]}&id=${ARRIDD[15]}&id=${ARRIDD[16]}&id=${ARRIDD[17]}&id=${ARRIDD[18]}&id=${ARRIDD[19]}&key=${api}`
//         )
//           .then((f) => {
//             let response = f.json();
//             return response;
//           })
//           .then((g) => {
//             let kk = g.items;
//             console.log(kk);
//             console.log(ARRIDD);
//             ARRIDD.forEach((e, index) => {
//               for (let p = 0; p < kk.length; p++) {
//                 if (e == kk[p].id) {
//                   idpic[index].src = kk[p].snippet.thumbnails.high.url;
//                   console.log(kk[p].id);
//                 }

//               }
//             });
//           })
//           .catch((e) => {
//             console.log(e);
//           });
//         //-------------------------------------------------------------------
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   });
// }

// searchIcon_870px();

  //  let search_input = search.value;
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
   window.location.href="../search result page/search page.html";

            }
else{
                while (suggestion.firstChild){
                suggestion.removeChild(suggestion.firstChild);}

}

}

search.addEventListener("keyup",itachi);






// window.addEventListener("keydown", function(e){
//    let input = search.value;
//   console.log(e.key);
//   if( e.key=="Enter" && input !=""){
//        localStorage.setItem("searchValue" ,input);
//    window.location.href="../search result page/search page.html";

//   }
// });



searchIcon.addEventListener("click",function(){ 
let input = search.value;
  if(input==""){
alert("search box is empty");
  }
  else{
   localStorage.setItem("searchValue" ,input);
   window.location.href="./search result page/search page.html";
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


// profile pic fetch  ends------------------------------------

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
function videoCategory(x) {
  let Id = [];
  let vid_id = [];
  let ARRIDD = [];

  let url =
    `https://youtube.googleapis.com/youtube/v3/videos?part=player&chart=mostPopular&maxResults=20&videoCategoryId=${x}&key=AIzaSyDLTWJywQI4njC62CaE-rv1eNozlQdsuTI`;

  fetch(url)
    .then((a) => {
      return a.json();
    })
    .then((d) => {
      console.log(d);
      for (i = 0; i < 20; i++) {
        // Id[i] = d.items[i].id;
        // console.log()
         (d.items[i].id)?Id[i]=d.items[i].id: Id[i]="4cw3x0tU-pk";
      }
      getID(d);
    //  getId2(d);
      // console.log(a);

      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${Id[0]}&id=${Id[1]}&id=${Id[2]}&id=${Id[3]}&id=${Id[4]}&id=${Id[5]}&id=${Id[6]}&id=${Id[7]}&id=${Id[8]}&id=${Id[9]}&id=${Id[10]}&id=${Id[11]}&id=${Id[12]}&id=${Id[13]}&id=${Id[14]}&id=${Id[15]}&id=${Id[16]}&id=${Id[17]}&id=${Id[18]}&id=${Id[19]}&key=AIzaSyDLTWJywQI4njC62CaE-rv1eNozlQdsuTI`
      )
        .then((a) => {
          return a.json();
        })
        .then((a) => {
          for (i = 0; i < 20; i++) {
            // channel_name[i].innerHTML = a.items[i].snippet.channelTitle;
            (a.items[i].snippet.channelTitle)?channel_name[i].innerHTML=a.items[i].snippet.channelTitle:channel_name[i].innerHTML = "channel name";
            // video_title[i].innerHTML = a.items[i].snippet.title;
            (a.items[i].snippet.title)?video_title[i].innerHTML = a.items[i].snippet.title:video_title[i].innerHTML = "title";
            // arr[i].src = a.items[i].snippet.thumbnails.medium.url;
            (a.items[i].snippet.thumbnails.medium.url)?arr[i].src = a.items[i].snippet.thumbnails.medium.url:arr[i].src = "#";
            // vid_id[i] = a.items[i].id;
            (a.items[i].id)?vid_id[i] = a.items[i].id:vid_id[i] ="4cw3x0tU-pk";
            // ARRIDD[i] = a.items[i].snippet.channelId;
            (a.items[i].snippet.channelId)?ARRIDD[i] = a.items[i].snippet.channelId:ARRIDD[i] ="UC_OaHF736OBZo_vTztGtXEg";
          }
          console.log(a);

          fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vid_id[0]}&id=${vid_id[1]}&id=${vid_id[2]}&id=${vid_id[3]}&id=${vid_id[4]}&id=${vid_id[5]}&id=${vid_id[6]}&id=${vid_id[7]}&id=${vid_id[8]}&id=${vid_id[9]}&id=${vid_id[10]}&id=${vid_id[11]}&id=${vid_id[12]}&id=${vid_id[13]}&id=${vid_id[14]}&id=${vid_id[15]}&id=${vid_id[16]}&id=${vid_id[17]}&id=${vid_id[18]}&id=${vid_id[19]}&maxResults=20&regionCode=IN&key=${api}`
          )
            .then((b) => {
              return b.json();
            })
            .then((a) => {
              for (i = 0; i < arr.length; i++) {
                // publish_time[i].innerHTML = Date_convertor(a.items[i].snippet.publishedAt);
                (a.items[i].snippet.publishedAt)?publish_time[i].innerHTML = Date_convertor(a.items[i].snippet.publishedAt):publish_time[i].innerHTML = "11-22-33";
                //    views_count[i].innerHTML=NUMBER_convertor(a.items[i].statistics.viewCount) + " views";
                (a.items[i].statistics.viewCount)?views_count[i].innerHTML=NUMBER_convertor(a.items[i].statistics.viewCount) + " views":views_count[i].innerHTML=" views";
                //date_convertor(a);
                //value_convertor_2_0 (a); 
              }
              // console.log(a);
            })
            .catch((e) => {
              console.log(e);
            });

          //---------------------------------------------------------------------profilepic------------
          fetch(
            `https://youtube.googleapis.com/youtube/v3/channels?part=contentOwnerDetails%2Cstatistics%2Csnippet&maxResults=20&id=${ARRIDD[0]}&id=${ARRIDD[1]}&id=${ARRIDD[2]}&id=${ARRIDD[3]}&id=${ARRIDD[4]}&id=${ARRIDD[5]}&id=${ARRIDD[6]}&id=${ARRIDD[7]}&id=${ARRIDD[8]}&id=${ARRIDD[9]}&id=${ARRIDD[10]}&id=${ARRIDD[11]}&id=${ARRIDD[12]}&id=${ARRIDD[13]}&id=${ARRIDD[14]}&id=${ARRIDD[15]}&id=${ARRIDD[16]}&id=${ARRIDD[17]}&id=${ARRIDD[18]}&id=${ARRIDD[19]}&key=${api}`
          )
            .then((a) => {
              
              let response = a.json();
              return response;
              
            })
            .then((b) => {
              console.log(b)
      let kk = b.items;

          ARRIDD.forEach((e, index) => {
            for (i = 0; i < kk.length; i++) {
              if (e == kk[i].id) {
                // idpic[index].src = kk[i].snippet.thumbnails.high.url;
                 (kk[i].snippet.thumbnails.high.url)?idpic[index].src = kk[i].snippet.thumbnails.high.url:idpic[index].src = "";
              }
            }
          });
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

//======================================================

function animation_page_loader(){
  video_part.style.visibility="hidden";
loader_container.style.display="block";
loader_onpages.style.animation="l2 1s  infinite linear"
setTimeout(() => {
  video_part.style.visibility="visible";
loader_container.style.display="none";
loader_onpages.style.animation="";
}, 1000);
}

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

let xx = "home";
 let loader_onpages = document.querySelector(".loader_onpages");
let loader_container = document.querySelector(".loader_container");
let video_part = document.getElementById("video_part");

Sports.addEventListener("click", function(){
  videoCategory(17);
  active_category(3);
  xx=17;
  
   animation_page_loader();

});
//------------------------------------------------------------// gaming-----------------
Gaming.addEventListener("click", function(){
  videoCategory(20);
  active_category(1);
  xx=20;
   animation_page_loader();
});
//------------------------------------------------------------// NEWS-----------------
News.addEventListener("click",function(){
  videoCategory(25);
  active_category(4);
  xx=25;
   animation_page_loader();
});
//------------------------------------------------------------//MUSIC-----------------
Music.addEventListener("click", function(){
  videoCategory(10);
  active_category(7);
  xx=10;
   animation_page_loader();
});
//------------------------------------------------------------//Entertainment-----------------
Entertainment.addEventListener("click", function(){
  videoCategory(24);
  active_category(5);
  xx=24;
   animation_page_loader();
});
//------------------------------------------------------------//technology-----------------
Technology.addEventListener("click", function(){
  videoCategory(28);
  active_category(6);
  xx=28;
   animation_page_loader();
});
//------------------------------------------------------------//blogs-----------------
Film.addEventListener("click", function(){
  videoCategory(1);
  active_category(8);
  xx=1;
   animation_page_loader();
 
});
//------------------------------------------------------------//home-----------------
home.addEventListener("click", function(){
  khulte_hi();
  active_category(0);
 xx = "home";
  animation_page_loader();
});
//------------------------------------------------------------//AUTOMOBILES-----------------
Automobiles.addEventListener("click", function(){
  videoCategory(2);
  active_category(2);
  xx=2;
   animation_page_loader();
});

function one_2ka_4(V,A){
  videoCategory(V);
  active_category(A);
}

function CHECKDATA(){
  let VideoCategory = localStorage.getItem("videoCategory");
  let Active_category= localStorage.getItem("active_category");
  let Active_num = localStorage.getItem("Active_num");
  
  if(Active_num){
  one_2ka_4(VideoCategory,Active_category);
  xx = VideoCategory;
    localStorage.removeItem("Active_num");
  }
  else{
    khulte_hi();
  }
}
CHECKDATA();


// redirect function to videos playar page 



// home page ===============================================
function getID(a){
videos_player.forEach((e ,index)=>{
  e.addEventListener("click", function(){
      videos_ID =a.items[index].id;
      // let xx = 28;
      localStorage.setItem("xx",xx);
    localStorage.setItem("videos_ID", videos_ID);   

  //REDIRECT TO VIDEOS PLAYER PAGE 
    window.location.href=`./videos player page/video player index.html`;
  })})
}

//  let  timer2;
      // let ID;

//         function getId3(a){
//   videos_player.forEach((e ,index)=>{
//     e.addEventListener("mouseover", function(){
// function timer(){
//       let  ID = a.items[index].id;
//    iframe[index].src=`https://www.youtube.com/embed/${ID}?autoplay=1&controls=0&rel=0&mute=1&modestbranding=0`;
//       thumbnail_img[index].style.display="none";
//      containerIframe[index].style.display="block";
// }
//         timer2 =  setTimeout(timer,3000);

//     })})
// }

//   videos_player.forEach((e ,index)=>{
//     e.addEventListener("mouseout", function(){
 
//      clearTimeout(timer2); 
//         iframe[index].src=`https://www.youtube.com/embed/${""}?autoplay=1`;   
//       thumbnail_img[index].style.display="block";
//      containerIframe[index].style.display="none"; 
//     })})




// function getId2(d){
// }






