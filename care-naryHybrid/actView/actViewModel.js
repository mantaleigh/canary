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
            var actTime = $("#actTimeInput").val();
            var actNotes = $("#actNotesInput").val();

            var actDate = oldActDate.split("-")[1] + "-" + oldActDate.split("-")[2] + "-" + oldActDate.split("-")[0]
            console.log(actName); 
            console.log(actType);
            console.log(actDate);
            console.log(actTime);
            console.log(actNotes);

            // dateTime object
            var dateTime = new Date(actDate + " " + actTime);
            console.log(dateTime);

        }
    });
    return viewModel;
})();