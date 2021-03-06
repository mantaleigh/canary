app.models.actView.actViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            actType: undefined,
            activity: undefined,
            actDate: undefined,
            actStartTime: undefined,
            actEndTime: undefined,
            actNotes: undefined,
        },
        add: function() {

            var actName = $("#actNameInput").val();
            var actType = $("#actTypeInput").val();
            var oldActDate = $("#actDateInput").val();
            var actStartTime = $("#actStartTimeInput").val();
            var actEndTime = $("#actEndTimeInput").val();
            var actNotes = $("#actNotesInput").val();

            var actDate = oldActDate.split("-")[1] + "-" + oldActDate.split("-")[2] + "-" + oldActDate.split("-")[0]
            // dateTime objects
            var startDateTime = new Date(actDate + " " + actStartTime);
            console.log(startDateTime);
            var endDateTime = new Date(actDate + " " + actEndTime);
            console.log(endDateTime);
            
                                    
            var el = new Everlive('TiQ179pLOVoq4iN1');

            var data = el.data('act');
            data.create({'activity' : actName, 'aType' : actType, 'aNotes' : actNotes, 'start_time' : startDateTime, 'end_time' : endDateTime},
                function(data){
                    //alert(JSON.stringify(data));
                    console.log({});
                },
                function(error){
                    alert(JSON.stringify(error));
                });
            
            alert("Data successfully entered.")
            $("#actNameInput").val("");
            $("#actTypeInput").val("");
            $("#actDateInput").val("");
            $("#actStartTimeInput").val("");
            $("#actEndTimeInput").val("");
            $("#actNotesInput").val("");
           
        }
    });
    return viewModel;
})();