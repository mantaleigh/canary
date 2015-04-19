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
            var oldMedDate = $("#medDateInput").val();
            var medTime = $("#medTimeInput").val();
            var medNotes = $("#medNotesInput").val();

            var medDate = oldMedDate.split("-")[1] + "-" + oldMedDate.split("-")[2] + "-" + oldMedDate.split("-")[0]

            // dateTime object
            var dateTime = new Date(medDate + " " + medTime);

        }
    });
    return viewModel;
})();