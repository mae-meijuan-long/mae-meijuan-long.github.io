$(()=>{

     function showSuccessMsg() {
            $('#msg').show();
        }
    function hideSuccessMsg() {
        $('#msg').hide();
    }
     hideSuccessMsg();

     $("#addCart").submit(()=>{
                console.log("====");
                const data = {
                    name:$("#question").val(),
                    price:$("#price").val(),
                    color:$("#color").val()
                }
                console.log("data===>"+data);
                $.post({
                    url:"/addToCart",
                    data:JSON.stringify(data)
                }) .done(function(data) {
                      showSuccessMsg();
                      setTimeout(hideSuccessMsg, 5000);
                      const res = JSON.parse(data);
                      $('#linktocart').text(res + " item/s in cart");
                  }).fail(function(x, s, ex) { console.log(ex) });
                   return false;
        });
});