app.models.actView.actViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            actType: undefined,
            activity: undefined,
            actdatetime: undefined,
            actNotes: undefined,
        },
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();