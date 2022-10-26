$(()=>{
    function noSuccess(){
         console.log("error");
    }
    function askedSuccess(data){
        console.log("test");
        console.log(data);
        $('#question').val('Answer : '+ JSON.parse(data)).focus();
    }

    $("#addCart").submit(()=>{
            const data = {
                question:$("#question").val()
            }
            $.get({
                url:"/8ball",
                data:JSON.stringify(data)
            }).done(askedSuccess)
               .fail(noSuccess)
               return false;
    })
})