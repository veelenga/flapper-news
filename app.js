angular.module('flapperNews', [])
  .controller('MainCtrl', [
    '$scope', function($scope) {
       $scope.posts = [
         {title: 'post1', upvotes: 10, link: '1'},
         {title: 'post2', upvotes: 12, link: '2'},
         {title: 'post2', upvotes: 12},
         {title: 'post3', upvotes: 8,  link: '3'}
       ];
       $scope.addPost = function() {
         if (!$scope.title || $scope.title === '') { return; }
         $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
         $scope.title = ''
         $scope.link = ''
       }
       $scope.incrementUpvotes = function(post){
         post.upvotes += 1;
       }
    }
  ])
