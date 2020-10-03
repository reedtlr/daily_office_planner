

$(document).ready(function() {
  
    // format and display current date
    var cTime = moment().format("dddd, MMMM Do")
    $("#currentDay").append(cTime)
    
    

    $(".saveBtn").click(function() {
       console.log(this.id, "this")
       
       
        // var agendaSave = {
        //     text: $(this).before("textarea").text,
        //     hour: $("textarea").before("p").text
        // }
        // window.localStorage.setItem("savedText", JSON.stringify(agendaSave))
        // console.log(agendaSave)
    })


})

