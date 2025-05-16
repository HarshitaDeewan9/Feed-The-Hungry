function pick_up(){
            var timeleft =0;
            var downloadTimer = setInterval(function(){
                timeleft++;
                document.getElementById("pick_up").textContent = timeleft;
            if(timeleft >= 96)
                clearInterval(downloadTimer);
            },50);
        }
        pick_up();
        function people_fed(){
            var tmleft =0;
            var Timer = setInterval(function(){
                tmleft++;
                document.getElementById("people_fed").textContent = tmleft;
            if(tmleft >= 679)
                clearInterval(Timer);
            },10);
        }
        people_fed();
        function revenue_saved(){
            var timleft =0;
            var aTimer = setInterval(function(){
                timleft++;
                document.getElementById("revenue_saved").textContent = timleft+" Lacs";
            if(timleft >=4)
                clearInterval(aTimer);
            },1000);
        }
        revenue_saved();
        function food_saved(){
            var timeeleft =0;
            var bTimer = setInterval(function(){
                timeeleft++;
                document.getElementById("food_saved").textContent = timeeleft;
            if(timeeleft >=223)
                clearInterval(bTimer);
            },30);
        }
        food_saved();
function thank_you(){
alert("Thank you for your support! We promise to put our best effort. We will get in touch with you soon. :)")
}
