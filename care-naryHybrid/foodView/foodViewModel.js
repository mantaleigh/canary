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
            var oldFoodDate = $("#foodDateInput").val();
            var foodTime = $("#foodTimeInput").val();
            var foodNotes = $("#foodNotesInput").val();
            console.log(foodDate);

            var foodDate = oldFoodDate.split("-")[1] + "-" + oldFoodDate.split("-")[2] + "-" + oldFoodDate.split("-")[0]
            console.log(foodDate);

            // dateTime object
            var dateTime = new Date(foodDate + " " + foodTime);
            console.log(dateTime);

            
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
        }
        });
        return viewModel;
})();