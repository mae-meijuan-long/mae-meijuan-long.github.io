const VALIDATOR = (function(){
    const validateFirstName = function(){
        let firstValue = document.getElementById("first").value;
        console.log(firstValue);
        if(firstValue===""){
            return false;
        }else{
            return true;
        }
    }

    const validateLastName = function(){
        let lastName = document.getElementById("last").value;
        console.log(lastName);
        if(lastName===""){
            return false;
        }else{
            return true;
        }
    }

    const validate = function(){
            if(validateFirstName()&&validateLastName()){
                return true;
            }else{
                return false;
            }
    }
    return {
            validate:validate
    }
})();
