myApp.service( 'login_page_service', function ( $http, $location, $q, $cookieStore ) {
        this.login = function ( email, pwd ) {

            var url = 'https://user-service.getvsm.com/api/user/login/v1';
            var next_page_url = 'templates/list_all_dictionary.html';
            var data = {
                'email': email,
                'password': pwd,
                'device_info': {}
            };

            //promise service
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: url,
                data: data
            }).success( function ( data ) {

                $cookieStore.put( 'Authorization', '49cc41bfb364d9aa5e893219806e91999a2db0f8' );
                deferred.resolve( data );
                window.location = next_page_url; // you have to use location service
            }).error( function ( data, status ) {
                deferred.reject( status );
            });
            return deferred.promise;

        };
});