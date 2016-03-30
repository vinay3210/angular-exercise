(
    function(util){
        if(!util){
            util={};
        };
        
        util.numbersOnly=function(evt){
            if(evt.keyCode>=48 && evt.keyCode<=57){
                return true;
            }
            else{
                return false;
            }
        }
        
         util.stringsOnly=function(evt){
            if((evt.keyCode>=65 && evt.keyCode<=90) || (evt.keyCode>=97 && evt.keyCode<=122)){
                return true;
            }
            else{
                return false;
            }
        }
        
    }
)(window.util={});

