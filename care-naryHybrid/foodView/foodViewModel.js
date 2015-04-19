app.models.foodView.foodViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            food: undefined,
            date: undefined,
            time: undefined,
            notes: undefined,
            foodGroup: undefined,
        },
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();