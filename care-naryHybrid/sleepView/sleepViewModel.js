app.models.sleepView.sleepViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            beginSleep: undefined,
            endSleep: undefined,
        },
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();