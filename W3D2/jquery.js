$(function(){
    console.log("aa")

   const addDiv = function (){

        for(let i = 0;i<5;i++){
             $("#circles")
             .css({
              display:"inline",
             })
             .append($("<div>", {
                        width:"0px",
                        height:"0px",
                        class: "red-div-circle",
                      }));
        }

    }
    addDiv();


    setInterval(function(){
         $('#circles').children().each(function(i,elem){
            const preWidth = $(elem).css("width");
            const addedWidth = parseInt(preWidth)+10+"px";
            $(elem)
                .css("width",addedWidth)
                .css("height",addedWidth)
                .click(function(){
                    elem.remove();
                })
         })
    },1000)





})

