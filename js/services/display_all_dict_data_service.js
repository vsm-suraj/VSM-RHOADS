myApp.service( 'display_all_dict_data_service', function ( $http, $cookieStore, $q) {

    this.display = function () {

        var authorization = $cookieStore.get( 'Authorization' );
        var url = 'https://rhodes.getvsm.com/api/backslash/list/v1';
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': authorization
            },
        }).success( function ( data ) {
            deferred.resolve( data );
        }).error( function ( data, status ) {
            deferred.reject( status );
        });
        return deferred.promise;
    }
});