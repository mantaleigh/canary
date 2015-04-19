app.models.home.homeModel = (function() {
    var viewModel = kendo.observable({
        model: {
            input: undefined,
            input2: undefined,
            input3: undefined,
            input4: undefined,
            input5: undefined,
        },
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();