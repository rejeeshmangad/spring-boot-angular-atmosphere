var ItemFactory = function($resource) {
    return $resource('/items/:id', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      }
    });
  };
  ItemFactory.$inject = ['$resource'];
  app.factory("Item", ItemFactory);
  
  
  var UserFactory = function($resource) {
	    return $resource('/users/:id', {
	      id: '@id'
	    }, {
	      update: {
	        method: "PUT"
	      },
	      remove: {
	        method: "DELETE"
	      }
	    });
	  };
	  UserFactory.$inject = ['$resource'];
	  app.factory("User", UserFactory);





























/*angular.factory('myApp.services',function($resource){	
	 	var ItemFactory = function($resource) {
		    return $resource('/items/:id', {
		      id: '@id'
		    }, {
		      update: {
		        method: "PUT"
		      },
		      remove: {
		        method: "DELETE"
		      }
		    });
		  };
		  
		 ItemFactory.$inject = ['$resource'];
		 angular.module("myApp.services").factory("Item", ItemFactory);
			
});
/*myApp.factory('myAppfact',function(){
	
});*/