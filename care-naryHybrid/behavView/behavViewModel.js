app.models.behavView.behavViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            behavType: undefined,
            behavNotes: undefined,
        },
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();