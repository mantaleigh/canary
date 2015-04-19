app.models.actView.actViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            actType: undefined,
            activity: undefined,
            actDate: undefined,
            actTime: undefined,
            actNotes: undefined,
        },
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();