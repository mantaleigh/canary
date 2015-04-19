app.models.foodView.foodViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            food: undefined,
            foodDate: undefined,
            foodTime: undefined,
            notes: undefined,
            foodGroup: undefined,
        },
        add: function() {

            var foodName = $("#foodNameInput").val();
            var foodGroup = $("#foodGroupInput").val();
            var foodDate = $("#foodDateInput").val();
            var foodTime = $("#foodTimeInput").val();
            var foodNotes = $("#foodNotesInput").val();

            // dateTime object
            var dateTime = new Date(foodDate + " " + foodTime);

        }
    });
    return viewModel;
})();