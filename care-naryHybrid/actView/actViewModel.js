app.models.actView.actViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            actType: undefined,
            activity: undefined,
            actDate: undefined,
            actTime: undefined,
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
            console.log(actName); 
            console.log(actType);
            console.log(actDate);
            console.log(actTime);
            console.log(actNotes);

            // dateTime objects
            var startDateTime = new Date(actDate + " " + actStartTime);
            console.log(startDateTime);
            var endDateTime = new Date(actDate + " " + actEndTime);
            console.log(endDateTime);
            
                                    
            var el = new Everlive('TiQ179pLOVoq4iN1');
            var user = app.user.principal_id;
            var data = el.data('activites');
            data.create({ '' : actName, '' : actType, '' : actNotes, '' : dateTime, '' : user},
                function(data){
                    //alert(JSON.stringify(data));
                    console.log({});
                },
                function(error){
                    alert(JSON.stringify(error));
                });
           
        }
    });
    return viewModel;
})();