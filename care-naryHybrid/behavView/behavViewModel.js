app.models.behavView.behavViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            behavType: undefined,
            behavNotes: undefined,
            behavDate: undefined,
            behavTime: undefined,
        },
        submit: function() {}
    });
    return viewModel;
})();