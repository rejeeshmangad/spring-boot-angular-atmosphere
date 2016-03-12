 var ItemController = function($scope, Item1,$mdDialog) {	 	
		Item1.query(function(response) {
	      $scope.items = response ? response : [];
			console.log("::---------item ="+response);
	    });
	    
	    $scope.addItem = function(description) {
	      new Item1({
	        description: description,
	        checked: false
	      }).$save(function(item) {
	        $scope.items.push(item);
	      });
	      $scope.newItem = "";
	    };
	    
	    $scope.updateItem = function(item) {
	      item.$update();
	    };
	    
	    $scope.deleteItem = function(item) {
	      item.$remove(function() {
	        $scope.items.splice($scope.items.indexOf(item), 1);
	      });
	    };
	    
	    
	    $scope.showConfirm = function(ev,item) {	    		
	        var confirm = $mdDialog.confirm()
	              .title('Would you like to delete your Item?')
	              .ariaLabel('Lucky day')
	              .targetEvent(ev)
	              .ok('Please do it!')
	              .cancel('No');
	        $mdDialog.show(confirm).then(function() {
				$scope.deleteItem(item);
	        }, function() {
	         
	        });
	      };
	    
	    
	    
  };
  ItemController.$inject = ['$scope', 'Item','$mdDialog'];
  app.controller('ItemController', ItemController);
