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
            var behavMoodDate = $("#behavMoodDate").val();
            var behavMoodTime = $("#behavMoodTime").val();
            var behavMoodNotes = $("#behavMoodNotes").val();

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