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
            
            var el = new Everlive('TiQ179pLOVoq4iN1');
            var data = el.data('Food');
            data.create({ 'food_group' : foodGroup, 'food_name' : foodName, 'food_notes' : foodNotes, 'time' : dateTime},
                function(data){
                    //alert(JSON.stringify(data));
                    console.log({ 'food_group' : foodGroup, 'food_name' : foodName, 'food_notes' : foodNotes, 'time' : dateTime});
                },
                function(error){
                    alert(JSON.stringify(error));
                });
        alert("Data successfully entered.")
        $("#foodNameInput").val("");
        $("#foodGroupInput").val("");
        $("#foodDateInput").val("");
        $("#foodTimeInput").val("");
        $("#foodNotesInput").val("");

        }
          });
        return viewModel;
})();