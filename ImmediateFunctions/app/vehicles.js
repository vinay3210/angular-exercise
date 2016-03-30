(
    function (vehicleStore, util) {
        /* console.log(vehicleStore);
         var vehicle={year:2012,make:"Audi",model:"A5"};
         vehicleStore.addVehicle(vehicle);*/
        function validation() {
            var year = document.getElementById('txtVehicleYear');
            var maker = document.getElementById('txtMaker');
            var model = document.getElementById('txtModel');
            year.addEventListener('keypress', handleVehicleYear);
            maker.addEventListener('keypress', handleVehicleMaker);
            model.addEventListener('keypress', handleVehicleModel);


        }

        function handleVehicleYear(evt) {
            console.log(evt.keyCode);
            if (util.numbersOnly(evt)) {

            } else {
                evt.preventDefault();
            }

        }

        function handleVehicleMaker(evt) {
            console.log(evt.keyCode);
            if (util.stringsOnly(evt)) {

            } else {
                evt.preventDefault();
            }

        }

        function handleVehicleModel(evt) {
            console.log(evt.keyCode);
            if (util.numbersOnly(evt) || util.stringsOnly(evt)) {

            } else {
                evt.preventDefault();
            }

        }




        validation();
    }

)(window.vehicleStore, window.util);


