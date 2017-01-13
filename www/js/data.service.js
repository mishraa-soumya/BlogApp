(function(){

  function DataService(RestService) {
    
    this.playlistId = '';
    this.postUrl    = 'http://localhost:3000/posts';
    this.PostsArray = [];

    this.getCategoryPost = function getCategoryPost() {
      console.log(this.playlistId);
      return RestService.getPosts().then(function (result) {
          var jsonObj = JSON.stringify(response.data);
          var allPosts = angular.fromJson(jsonObj); 
          var filteredPosts = 
          allPosts.filter(
            function (data){
                return data.categoryId === parseInt(this.playlistId);
          });  

          return filteredPosts;
      }, 
      function (reason){
        console.log(reason);
      }) 
    }
  }

angular.module('starter.services',[])
       .service('DataService', ['RestService', DataService]);

})();       