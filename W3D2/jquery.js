$(function() {
    const colors = ["yellow","redpink","darkpurple", "burgendy","chocolate", "blueviolet", "burlywood", "green","brown", "black", "red","orange"];
    let circleRadius = parseInt($("#circle-width").val());
    let numberOfCount = parseInt($("#numberOf-circle").val());
    let growthRate = parseInt($("#growth-amount").val());
    let speed = parseInt($("#growth-interval").val());
    let timer = null;

        function getRandomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

         $("#start").click(function() {
                    circleRadius = parseInt($("#circle-width").val());
                    growthRate = parseInt($("#growth-amount").val());
                    speed = $("#growth-interval").val();
                   numberOfCount = $("#numberOf-circle").val();
                start();
            });


    function start() {
        clearInterval(timer);
        $(".circle").remove();
        let _span = $("<span>");
               for (let i = 0; i < parseInt($("#numberOf-circle").val()); i++)
                {
                   let random = randomInteger(10 , 1000)

                    const circle = $("<div>", {
                        "class": "circle",
                        "css": {
                            "background-color": getRandomColor(),
                            "left": random + "px",
                        },
                        "click": function() { this.remove() }
                    });
                    circle.hover(function() {
                        this.css("opacity", "40%")
                    }, function() {
                        this.css("opacity", "75%")
                    });
                    _span.append(circle);
                }
                $("#circles").append(_span);
                timer = setInterval(function () {
                                            const br = parseInt($(".circle").css("borderTopLeftRadius"));
                                            $(".circle").css({
                                                "height": (br * 0.5) + "px",
                                                "width": (br * 0.5) + "px",
                                                "border-radius": br + growthRate + "px",
                                            });
                                        }, speed);
   }
})