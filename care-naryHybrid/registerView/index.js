'use strict';

app.models.registerView = (function() {
    return {};
})();
app.models.registerView.registerViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            username: '',
            password: '',
            email: ''
        },
        register: function() {
            var provider = app.data.careBackend;

            var attrs = {
                Email: viewModel.model.email,
            };

            provider.Users.register(viewModel.model.username,
                viewModel.model.password,
                attrs,
                function(data) {

                    if (data) {
                        app.mobileApp.navigate('home/view.html');
                    }

                },
                function(error) {
                    alert(JSON.stringify(error));
                });

        }
    });
    return viewModel;
})();