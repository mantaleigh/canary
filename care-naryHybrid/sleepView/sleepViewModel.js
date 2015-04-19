app.models.sleepView.sleepViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            beginSleepTime: undefined,
            endSleepTime: undefined,
            beginSleepDate: undefined,
            endSleepDate: undefined,
        },
        add: function() {

            var awakeTime = $("#awakeTime").val();
            var oldAwakeDate = $("#awakeDate").val();
            var asleepTime = $("#asleepTime").val();
            var asleepDate = $("#asleepDate").val();

            var awakeDate = oldAwakeDate.split("-")[1] + "-" + oldAwakeDate.split("-")[2] + "-" + oldAwakeDate.split("-")[0]
            
            // dateTime object
            var awakeDateTime = new Date(awakeDate + " " + awakeTime);
            var asleepDateTime = new Date(asleepDate + " " + awakeTime);
            console.log(awakeDateTime);
            console.log(asleepDateTime);

        }
    });
    return viewModel;
})();