
$(document).click(function () {
    var toplimit = document.getElementById("userInput").value;

    fizzbuzz(toplimit);
        
         function fizzbuzz(loopmax) {
            
            for (var counter = 1; counter <= loopmax; counter++) {
            var msg;

            if (counter % 15 == 0) {
                msg = "<li>FizzBuzz</li>";
            } else if (counter % 3 == 0) {
                msg = "<li>Fizz</li>";
            } else if (counter % 5 == 0) {
                msg = "<li>Buzz</li>";
            } else {
                msg = "<li>" + counter + "</li>";
            }
        
            $('#showResults').append(msg);
        }
    }
});

