app.models.behavView.behavViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            behavType: undefined,
            behavNotes: undefined,
            mdatetime: undefined,
        },
        submit: function() {}
    });
    return viewModel;
})();