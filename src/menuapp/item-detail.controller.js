(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams', 'item', '$scope'];
function ItemDetailController($stateParams, item, $scope) {
    
    var itemDetail = this;
    itemDetail.name = $stateParams.itemId;

    var i;
    var itemDescription = [];

    for (i = 0; i < item.length; i++) 
    { 
        itemDescription.push('ID: '+ item[i].id + ' Short Name: ' + item[i].short_name + ' Menu Name: '  +  
                              item[i].name + ' Description: ' +item[i].description + 
        					 ' Small Portion Name: '+ item[i].small_portion_name+' $'+item[i].price_small +
        					 ' Large Portion Name: '+ item[i].large_portion_name+' $'+item[i].price_large);
    }
    $scope.itemDescription = itemDescription;
}

})();