'use strict';

app.models.signInView = (function() {
    return {};
})();
app.models.signInView.signInViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            username: '',
            password: ''
        },
        signin: function() {
            var provider = app.data.careBackend;

            // Authenticate user
            provider.Users.login(viewModel.model.username,
                viewModel.model.password,
                function(data) {
                    if (data && data.result) {
                        app.user = data.result;
                        app.mobileApp.navigate('home/view.html');


                         //Use authentication to contact database

                         var applicationSettings = {
                              apiKey: 'TiQ179pLOVoq4iN1',
                              scheme: 'https'
                            };

                            // initialize Backend Services SDK
                            var el = new Everlive({
                              apiKey: applicationSettings.apiKey,
                            });

                            el.Users.login(viewModel.model.username, // username
                            
                            viewModel.model.password) // password
                            .then(function (data) { // success callback
                                console.log("Successful login.");
                            },
                            function(error) { // error callback
                                alert(JSON.stringify(error));
                            });


                      }
                    },
                    function(error) {
                        alert(JSON.stringify(error));
                    });



           





        }
    });
    return viewModel;
})();