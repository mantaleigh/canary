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
            
            var el = new Everlive('TiQ179pLOVoq4iN1');
            var data = el.data('BeMo');
            data.create({ 'bem' : behavMood, 'bemNotes' : behavMoodNotes, 'bemTime': dateTime},
                function(data){
                    //alert(JSON.stringify(data));
                    console.log({ });
                },
                function(error){
                    alert(JSON.stringify(error));
                });
            
            alert("Data successfully entered.")
            $("#behavMoodInput").val("");
            $("#behavMoodTime").val("");
            $("#behavMoodDate").val("");
            $("#behavMoodNotes").val("");
        }
    });
    return viewModel;
})();