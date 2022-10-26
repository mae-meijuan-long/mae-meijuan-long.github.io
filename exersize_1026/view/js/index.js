$(()=>{
    console.log("test");

    $("button").click(function(e){
        e.preventDefault();
        console.log("$(this).val()"+$(this).text());
       $.get({
                 url: "/computers",
                 data: {id:$(this).text()}
               }).done(function (res){
                    $("#CPU").text(res.cpu);
                    $("#Ram").text(res.ram);
                    $("#Storage").text(res.storage);
                    $("#Price").text(res.price);
               });

    });
})
