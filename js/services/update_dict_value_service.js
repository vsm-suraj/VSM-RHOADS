myApp.service('update_dict_value_service', function ($http,$cookieStore, $q ) {
    
    this.update_value = function ( key_id, dictionary_id, word, value ) {

        var authorization = $cookieStore.get('Authorization'); //getting authorization code from cookie
        var url = 'https://rhodes.getvsm.com/api/backslash/update_key_data/v1/' + dictionary_id;
        var data = {
                'key': word,
	            'value': value,
	            'attachment': {
		            'link_url': 'http://some.link1',
		            'image_url': 'http://some.link1',
		            'video_url': 'http://some.link1',
		            'doc_url': 'http://some.link1'
	            },
	        'key_id': key_id
        };

        //promise service
        var deferred = $q.defer();

        $http({
            method: 'PUT',
            url: url,
            headers: {
                'Content-Type': 'Application/json',
                'authorization' : authorization,
            },
            data: data
        }).success( function ( data ) {
            deferred.resolve( data );
        }).error( function ( data, status ) {
            deferred.reject( status );
        });
        return deferred.promise;
    };
});