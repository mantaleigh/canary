app.models.sleepView.sleepViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            beginSleepTime: undefined,
            endSleepTime: undefined,
            beginSleepDate: undefined,
            endSleepDate: undefined,
        },
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();