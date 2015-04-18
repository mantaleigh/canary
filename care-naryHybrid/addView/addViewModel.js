app.models.addView.addViewModel = (function() {
    var viewModel = kendo.observable({
        model: {},
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();