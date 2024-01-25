var createCounter = function(init) {
    
    return {
        increment: function(){
            return init+1;

        }, 
        reset: function(){
            return init; 

        }, 
        decrement:function(){
            return init-1; 

        }
    }
     
    
};



