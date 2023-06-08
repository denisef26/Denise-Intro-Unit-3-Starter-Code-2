/* Declare variables below to save the different sections (divs) of your story*/

let startPage=document.querySelector(".start-page");
let nextPage=document.querySelector(".next-page");
let nextPageTwo=document.querySelector(".next-page-two");
let nextPageThree=document.querySelector(".next-page-three");
let nextPageFour=document.querySelector(".next-page-four");

let startBtn=document.querySelector(".start-btn-one");
let strollBtn=document.querySelector(".stroll-btn-two");
let sureBtn=document.querySelector(".sure-btn-three");
let declineBtn=document.querySelector(".decline-btn-four");
let okayBtn=document.querySelector(".okay-btn-five");
let noBtn=document.querySelector(".no-btn");
let errorPic=document.querySelector(".error-pic");
// startBtn.onclick=function(){
// nextPage.style.display="block"
// };

startBtn.onclick = function(){
  nextPage.style.display="block"
  
  startPage.style.display="none"
};


strollBtn.onclick = function(){
  nextPageTwo.style.display="block"
  
  nextPage.style.display="none"
};

sureBtn.onclick = function(){
  nextPageThree.style.display="block"
  
  nextPageTwo.style.display="none"
};


declineBtn.onclick = function(){
  nextPageFour.style.display="block"
  nextPageTwo.style.display="none"
};

okayBtn.onclick = function(){
  nextPageThree.style.display="block"
  
  nextPageFour.style.display="none"
};



noBtn.onclick = function(){
  errorPic.style.display="block"
};

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
