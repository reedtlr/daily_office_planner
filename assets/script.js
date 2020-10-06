

$(document).ready(function() {
  
    // format and display current date
    var cTime = moment().format("dddd, MMMM Do")
    $("#currentDay").append(cTime)

    // current hour 
    var milHour = moment().format("HH")

    // list of hours used in agenda 
    var businessHoursMil = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]

//    check local storage to recall previously saved text to add back to agenda
    var storedAgenda = JSON.parse(localStorage.getItem("agendaSave")) || [] ;
    console.log(storedAgenda, "storedAgenda")
   
    // loop to reapply any saved agenda items from local storage
    for (var i = 0; i < storedAgenda.length; i++) {
        var hour = storedAgenda[i].hour;
        var textBlock = $("#text-" + hour)
        textBlock.text(storedAgenda[i].text)
        $("#text-" + hour).append(textBlock)
    }

//    onClick function to save text and hour selected to local storage
    $(".saveBtn").click(function() {
        var textSave = $.trim($(this).siblings("textarea").val());
        var newSave = {text: textSave, hour: this.id}
        storedAgenda.push(newSave)
        window.localStorage.setItem("agendaSave", JSON.stringify(storedAgenda))
    })

    // apply color by class based on current hour
    for (var i = 0; i < businessHoursMil.length; i++) {
    if (milHour == businessHoursMil[i]) {
        var updateClass = $("." + businessHoursMil[i]);
        updateClass.addClass("present");
        $("." + businessHoursMil[i]).append(updateClass)
    } 
    }

    // apply color by class based on previous hours
    for (var i = 0; i < businessHoursMil.length; i++) {
    if (milHour > businessHoursMil[i]) {
        var updateClass = $("." + businessHoursMil[i]);
        updateClass.addClass("past");
        $("." + businessHoursMil[i]).append(updateClass)
    }
    }

    // apply color by class based on future hours
    for (var i = 0; i < businessHoursMil.length; i++) {
    if (milHour < businessHoursMil[i]) {
        var updateClass = $("." + businessHoursMil[i]);
        updateClass.addClass("future");
        $("." + businessHoursMil[i]).append(updateClass)
    }
    }
})

