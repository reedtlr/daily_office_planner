

$(document).ready(function() {
  
    // format and display current date
    var cTime = moment().format("dddd, MMMM Do")
    $("#currentDay").append(cTime)

    // current hour 
    var presentHour = moment().format("hA")
    var milHour = moment().format("HH")
    console.log(presentHour, "presentHour")
    console.log(milHour, "milHour")
    // list of hours used in agenda
    var businessHours = ["9AM", "10AM", "11AM", "Noon", "1PM", "2PM", "3PM", "4PM", "5PM"]
    var businessHoursMil = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

//    check local storage to recall previously saved text to add back to agenda
    var storedAgenda = JSON.parse(localStorage.getItem("agendaSave") || '[]');
    console.log(storedAgenda.hour + "  " + storedAgenda.text)

       
    // loop to set previously saved agenda
   for (var i = 0; i < businessHours.length; i++) {
        
        if (storedAgenda.hour != businessHours[i]) {
            
        } else {
        var updateAgenda = $("#text-" + businessHours[i])
        updateAgenda.text(storedAgenda.text)
        console.log(updateAgenda.text, "updateAgenda")
        $("#text-" + businessHours[i]).append(updateAgenda)
   }}



//    onClick function to save text and hour selected to local storage 
    $(".saveBtn").click(function() {
        var textSave = $.trim($(this).siblings("textarea").val());
        console.log(textSave, "textSave")
        var agendaSave = {
            text: textSave,
            hour: this.id,
                }
        window.localStorage.setItem("agendaSave", JSON.stringify(agendaSave) || '[]')
        
    })

    // apply class based on current hour, previous hours, and future hours
    
    for (var i = 0; i < businessHoursMil.length; i++) {
    if (milHour == businessHoursMil[i]) {
        var updateClass = $("." + businessHoursMil[i]);
        updateClass.addClass("present");
        $("." + businessHoursMil[i]).append(updateClass)
    } 
    }

    for (var i = 0; i < businessHoursMil.length; i++) {
    if (milHour > businessHoursMil[i]) {
        var updateClass = $("." + businessHoursMil[i]);
        updateClass.addClass("past");
        $("." + businessHoursMil[i]).append(updateClass)
    }
    }

    for (var i = 0; i < businessHoursMil.length; i++) {
    if (milHour < businessHoursMil[i].charAt(0)) {
        var updateClass = $("." + businessHours[i]);
        updateClass.addClass("future");
        $("." + businessHoursMil[i]).append(updateClass)
    }
    }

})

