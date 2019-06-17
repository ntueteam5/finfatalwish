var t = 0;
function setBackground(){
    switch (t%4){
        case 0 : {
            $(html).css("background-image","url(../img/gb_img1.jpg)");
            break;
        }
        case 1 : {
            $(html).css("background-image","url(../img/gb_img2.jpg)");
            break;
        }
        case 2 :{
            $(html).css("background-image","url(../img/gb_img3.jpg)");
            break;
        }
        case 3 : {
            $(html).css("background-image","url(../img/gb_img4.jpg)");
            break;
        }       
    }
    t = setTimeout(function(){
        setBackground();
    },3000);
}

$(function () { 
//15 對話框_2出現 定住---------------------------------------------------------------------------------------------------------------------------------

var controller_balloon_2=new ScrollMagic.Controller();
var tween_balloon_2=TweenMax.to("#balloon_2",0.2,{opacity:1});
var scene_balloon_2=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_2",duration:300})
            .setTween(tween_balloon_2)
            // .addIndicators()
            .addTo(controller_balloon_2);


var controller_balloon_2_pin = new ScrollMagic.Controller();
var scene_balloon_2_pin = new ScrollMagic.Scene({triggerElement: "#trigger_balloon_2", duration: 1800})
                .setPin("#balloon_2")
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller_balloon_2_pin);	

//15 對話框_3出現 定住---------------------------------------------------------------------------------------------------------------------------------

var controller_balloon_3=new ScrollMagic.Controller();
var tween_balloon_3=TweenMax.to("#balloon_3",0.2,{opacity:1});
var scene_balloon_3=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_3",duration:300})
        .setTween(tween_balloon_3)
        // .addIndicators()
        .addTo(controller_balloon_3);


var controller_balloon_3_pin = new ScrollMagic.Controller();
var scene_balloon_3_pin = new ScrollMagic.Scene({triggerElement: "#trigger_balloon_3", duration: 1800})
            .setPin("#balloon_3")
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller_balloon_3_pin);					

//15 對話框_2 對話框_3 消失---------------------------------------------------------------------------------------------------------------------------------

var controller_balloon_2_disappear=new ScrollMagic.Controller();
var tween_balloon_2_disappear=TweenMax.to("#balloon_2",0.5,{opacity:0});
var scene_balloon_2_disappear=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_2_3_disappear",duration:300})
            .setTween(tween_balloon_2_disappear)
            // .addIndicators()
            .addTo(controller_balloon_2_disappear);


var controller_balloon_3_disappear=new ScrollMagic.Controller();
var tween_balloon_3_disappear=TweenMax.to("#balloon_3",0.5,{opacity:0});
var scene_balloon_3_disappear=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_2_3_disappear",duration:300})
            .setTween(tween_balloon_3_disappear)
            // .addIndicators()
            .addTo(controller_balloon_3_disappear);		
            
})