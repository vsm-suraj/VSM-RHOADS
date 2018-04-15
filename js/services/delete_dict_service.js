myApp.service( 'delete_dict_service', function ( $http, $cookieStore, $q ) {
    
    this.delete_dict_value = function ( dictionary_id ) {

        var authorization = $cookieStore.get( 'Authorization' );
        var url = 'https://rhodes.getvsm.com/api/backslash/delete/v1/' + dictionary_id;
        
        //promise service
        var deferred = $q.defer();

        $http({
            method: 'DELETE',
            url: url,
            headers: {
                'Content-Type': 'Application/json',
                'authorization' : authorization,
            },
        }).success( function ( data ) {
            deferred.resolve( data );
        }).error( function ( data, status ) {
            deferred.reject( status );
        });
        return deferred.promise;
    };
});