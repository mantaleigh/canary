app.models.medView.medViewModel = (function() {
    var viewModel = kendo.observable({
        model: {
            medication: undefined,
            mAmount: undefined,
            mdate: undefined,
            mtime: undefined,
            mnotes: undefined,
        },
        add: function() {

            var medName = $("#medNameInput").val();
            var medAmount = $("#medAmountInput").val();
            var medDate = $("#medDateInput").val();
            var medTime = $("#medTimeInput").val();
            var medNotes = $("#medNotesInput").val();

            // dateTime object
            var dateTime = new Date(medDate + " " + medTime);

        }
    });
    return viewModel;
})();