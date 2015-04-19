app.models.behavView.behavViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            behavType: undefined,
            behavNotes: undefined,
            behavDate: undefined,
            behavTime: undefined,
        },
        add: function() {

            var behavMood = $("#behavMoodInput").val();
            var oldBehavMoodDate = $("#behavMoodDate").val();
            var behavMoodTime = $("#behavMoodTime").val();
            var behavMoodNotes = $("#behavMoodNotes").val();

            var behavMoodDate = oldBehavMoodDate.split("-")[1] + "-" + oldBehavMoodDate.split("-")[2] + "-" + oldBehavMoodDate.split("-")[0]

            console.log(behavMood);
            console.log(behavMoodDate);
            console.log(behavMoodTime);
            console.log(behavMoodNotes);

            // dateTime object
            var dateTime = new Date(behavMoodDate + " " + behavMoodTime);
            console.log(dateTime);

        }
    });
    return viewModel;
})();