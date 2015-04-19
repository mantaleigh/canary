app.models.medView.medViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            medication: undefined,
            mAmount: undefined,
            mdate: undefined,
            mtime: undefined,
            mnotes: undefined,
        },
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();