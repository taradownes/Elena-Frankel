
$(document).ready(function() {

$(".top").fadeIn(300, () => {
    $(this.querySelector('.info')).fadeIn(1500, () => {    
});
});

$(".main").slideDown(700, () => {

});

$(".footer").fadeIn(500, () => {

});

info();
footer();

$( window ).resize(function() {
  info();
});

$( window ).resize(function() {
  footer();
});

});


function info(){

if ($(window).width() > 767) {

  $("#main").html(' <div class="row client">  <div class="col-md-6">    <h1>Client Focused</h1>    <p class="content">Connecting with clients and becoming a trusted advocate is the best part of being a real estate agent. Buying and selling property is likely the biggest financial decision a person is making, so I strive to provide the best service to help clients achieve and exceed their real estate goals.</p>  </div>   <div class="col-md-6">     <img src="../public/images/chicago.jpg">  </div></div><div class="row neighborhood">  <div class="col-md-6">    <img src="../public/images/el2.jpg">  </div>   <div class="col-md-6">     <h1>Neighborhood Knowledge</h1>     <p class="content">As a Chicago native, I love sharing my passion for my city with my clients. Along with a strong financial background and education, I am confident in giving expert advice to both buyers and sellers on pricing and negotiating to get clients a fantastic value as both a buyer or a seller. </p>  </div></div><div class="row experience">  <div class="col-md-6">     <h1>Experience and Expertise</h1>     <p class="content">In an ever evolving market, staying on top of both market trends and technology trends helps my clients stay well informed and involved with the market. Working with a technology focused company, Compass, allows me to have the most advanced tools on hand to stay on the forefront of the industry. </p>  </div>   <div class="col-md-6">    <img src="../public/images/livingroom2.jpeg">  </div> </div>  ');
}
else {
 
  $("#main").html(' <div class="row client">  <div class="col-md-6">    <h1>Client Focused</h1>    <p class="content">Connecting with clients and becoming a trusted advocate is the best part of being a real estate agent. Buying and selling property is likely the biggest financial decision a person is making, so I strive to provide the best service to help clients achieve and exceed their real estate goals.</p>  </div>   <div class="col-md-6">     <img src="../public/images/chicago.jpg">  </div></div>  <div class="row neighborhood">  <div class="col-md-6">     <h1>Neighborhood Knowledge</h1>     <p class="content">As a Chicago native, I love sharing my passion for my city with my clients. Along with a strong financial background and education, I am confident in giving expert advice to both buyers and sellers on pricing and negotiating to get clients a fantastic value as both a buyer or a seller. </p>  </div><div class="col-md-6">    <img src="../public/images/el2.jpg">  </div> </div><div class="row experience">  <div class="col-md-6">     <h1>Experience and Expertise</h1>     <p class="content">In an ever evolving market, staying on top of both market trends and technology trends helps my clients stay well informed and involved with the market. Working with a technology focused company, Compass, allows me to have the most advanced tools on hand to stay on the forefront of the industry. </p>  </div>   <div class="col-md-6">    <img src="../public/images/livingroom2.jpeg">  </div> </div>  ');
}
}

function footer(){

  if ($(window).width() > 522) {
  
    $(".footer").html('<div class="stripe">    <ul>      <li>312-857-6290</li>      <li>|</li>      <li>elena@elenafrankel.com</li>      <li>|</li>      <li>compass</li>    </ul>  </div> ');
  }
  else {
   
    $(".footer").html(' <div class="stripe">    <ul>      <li>312-857-6290</li> <br> <li>elena@elenafrankel.com</li>   <br>       <li>compass</li> </ul>  </div> ');
  }
  }