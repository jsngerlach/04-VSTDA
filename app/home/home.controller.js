(function() {
    'use strict';
    angular
        .module('app')
        .controller('PostController', PostController);
    PostController.$inject = [];

    function PostController() {
        var vm = this;
        vm.posts = [];
        vm.addPost = addPost;
        vm.deletePost = deletePost;
        vm.getClass = getClass;

        function addPost() {
            vm.posts.push(vm.newPost);
            vm.newPost = {};
        }

        function deletePost(post) {
            var index = vm.posts.indexOf(post);
            vm.posts.splice(index, 1);
        }

        function getClass(post) {
            switch (post.priority) {
                case '1':
                    return 'list-group-item-danger';
                case '2':
                    return 'list-group-item-warning';
                case '3':
                    return 'list-group-item-success';
            }
        };
    }
})()

