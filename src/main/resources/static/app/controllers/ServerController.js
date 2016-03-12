    app.controller('ServerController', [ '$scope', 'PushService', function($scope, PushService) {
        $scope.version = angular.version.full;
        PushService.getMessage();
    } ]);


    app.service('PushService',function($rootScope){

        return {
             getMessage:function(){
                var websocketSocket = atmosphere;
                var websocketSubSocket;
                var websocketTransport = 'websocket';
                var websocketRequest = {
                    url : '/websocket/item',
                    contentType : "application/json",
                    transport : websocketTransport,
                    trackMessageLength : true,
                    withCredentials : true,
                    reconnectInterval : 5000,
                    enableXDR : true,
                    timeout : 60000
                };

                websocketRequest.onOpen = function(response) {
                    console.log('Trying to use transport: ' + response.transport);
                    websocketTransport = response.transport;
                };

                websocketRequest.onClientTimeout = function(r) {
                    setTimeout(function() {
                        websocketSubSocket = websocketSocket.subscribe(websocketRequest);
                    }, websocketRequest.reconnectInterval);
                };

                websocketRequest.onClose = function(response) {
                    console.log('Server closed websocket connection. Changing transport to: '+ response.transport);
                };

                websocketRequest.onMessage = function(data) {
                    console.log('onMessage ...called ');
                    $rootScope.$apply(function() {
                        data.responseBody = atmosphere.util.parseJSON(data.responseBody);
                        $rootScope.messages = data.responseBody;
                    });

                };
                websocketSubSocket = websocketSocket.subscribe(websocketRequest);
            }
        };

    });


