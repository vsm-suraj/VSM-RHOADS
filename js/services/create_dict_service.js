myApp.service('create_dict_service', function ($http, $cookieStore ,$q ) {
    
    this.create_new_dict = function ( dictionary_name ) {

        var authorization = $cookieStore.get('Authorization');
        var url = 'https://rhodes.getvsm.com/api/backslash/add/v1/';
        var data = {
            'dictionary_name': dictionary_name,
	        'department_id': '5aabc4776a84900474972974'
        };

        //promise service
        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'Application/json',
                'authorization' : authorization,
            },
            data: data
        }).success( function ( data ) {
            deferred.resolve( data );
        }).error( function (data,status) {
            deferred.reject( status );
        });
        return deferred.promise;
    };
});