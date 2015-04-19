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

            console.log("add to calendar was clicked");
            var foodName = $("#foodNameInput").val();
            var foodGroup = $("#foodGroupInput").val();
            var foodDate = $("#foodDateInput").val();
            var foodTime = $("#foodTimeInput").val();
            var foodNotes = $("#foodNotesInput").val();
            console.log(foodDate);
            console.log(foodTime);
            console.log(foodNotes);

        }
    });
    return viewModel;
})();