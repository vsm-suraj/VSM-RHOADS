myApp.service( 'add_new_value_to_dict_services', function ( $http, $cookieStore, $q ) {
    
    this.add_new_value = function ( word, value, dictionary_id ) {

        var authorization = $cookieStore.get('Authorization');
        var url = 'https://rhodes.getvsm.com/api/backslash/add_list/v1/' + dictionary_id;
        var data = {
            'key': word,
            'value': value,
            'attachment': {
            'link_url': 'http://some.link1',
            'image_url': 'http://some.link1',
            'video_url': 'http://some.link1',
            'doc_url': 'http://some.link1'
    }
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
    }
})