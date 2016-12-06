(function() {
    'use strict';

    angular
        .module('app')
        .factory('toDoesFactory', toDoesFactory);

    toDoesFactory.$inject = ['$http'];

    /* @ngInject */
    function toDoesFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(todo) {
        	return$http.post('http://http://localhost:54147/api/ToDoes', todo);
        }

        function getAll(){
        	return$http.get('http://localhost:54147/api/ToDoes');
        }

        function getById(id){
        	return$http.get('http://localhost:54147/api/ToDoes' + id);
        }

        function update(id, todo){
        	return$http.put('http://localhost:54147/api/ToDoes' + id, todo);}

        function remove(id){
        	return$http.delete('http://localhost:54147/api/ToDoes' + id);
        }
    }
})();