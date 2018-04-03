 function prepareFood(tableNumber, items, callback) {
            console.log("Preparing food for items - ", items);
            callback(tableNumber, items);
        }
        
        function serveFood(tableNumber, items){
            
            console.log("Serving food for items - ", items);
            
            
        }
         let items = ["Burger", "Pizza", "Coke"];
        prepareFood(30,items,serveFood);

    




