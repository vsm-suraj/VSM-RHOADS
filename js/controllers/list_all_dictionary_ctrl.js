myApp.controller('list_all_dictionary_ctrl', function ( $scope, $http, display_all_dict_data_service, display_all_dict_data_service, create_dict_service, add_new_value_to_dict_services, update_dict_value_service, delete_raw_service, delete_dict_service ) {
    
    $scope.display_all_dict = function () {
        
        display_all_dict_data_service.display().then( function ( data ) {
            $scope.dictionaries = data.response;
        })
    }
    
    
    // hide and show pop up
    $scope.show_popup = false;
    $scope.add_new_value_popup = false;
    $scope.update_value_popup = false;
    $scope.dictionary_name = '';
    $scope.dictionary_id = '';
    $scope.key_id = '';
    $scope.create_dict_popup = function ( event, dictionary_name ) {
        $scope.show_popup = true;
            
    };
    // to hide the popup box
    $scope.hide_popup = function () {
        $scope.show_popup = false;
        $scope.add_new_value_popup = false;
        $scope.update_value_popup = false;
    };

    // to add new value to the dictionary
    $scope.add_value_to_dict_popup = function ( dictionary_id ) {

        $scope.add_new_value_popup = true;
        $scope.dictionary_id = dictionary_id;
    };
    $scope.add_new_value_to_dict = function ( word, value, dictionary_id ) {

        add_new_value_to_dict_services.add_new_value( word, value, dictionary_id).then( function () {
            $scope.display_all_dict ();
        });
    };



    // to update the value
    $scope.update_dict_value_popup = function ( key_id, dictionary_id, word ) {
        $scope.key_id = key_id;
        $scope.dictionary_id = dictionary_id;
        $scope.word = word;
        $scope.update_value_popup = true;
    };
    $scope.update_dict_value = function ( key_id, dictionary_id, word, value ) {
        console.log(word);
        update_dict_value_service.update_value( key_id, dictionary_id, word, value);

    };


    $scope.create_dict = function ( dictionary_name ) {
        create_dict_service.create_new_dict( dictionary_name ).then( function () {
            $scope.display_all_dict(); // to refresh the page
        });
    }

    
    $scope.delete_row = function ( key_id, dictionary_id ) {
        delete_raw_service.delete_raw_value( key_id, dictionary_id ).then( function () {
            $scope.display_all_dict();
        });
    };

    $scope.delete_dict = function ( dictionary_id ) {
        delete_dict_service.delete_dict_value( dictionary_id ).then( function () {
            $scope.display_all_dict();
        });
    };



    $scope.display_all_dict();
 
});