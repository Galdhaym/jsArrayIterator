window.onload = function(){
    //my array 
    var array = [1,2,3,4];
    //iteratorObject
    array[Symbol.iterator] = function iteratorObject(){
        var currentIndex = 0;
        var finalIndex = this.length;
        var thisArray = this;
        return {
            next(){
                if(currentIndex < finalIndex){
                    return {
                        done:false,
                        value:thisArray[currentIndex++]
                    }
                }
                else{
                    return {
                        done:true
                    }
                }
            }
        }
    };

    //call next() while (done == false)
    for(var number of array){
        console.log(number);
    }

///////////---------------------------------------------------------------------------

    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    var input4 = document.createElement("input");

    var container = document.createElement("div");
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(input3);
    container.appendChild(input4);
    var body = document.querySelector("body");
    body.appendChild(container);
    //html children collection
    var childrens = container.children;

    //iteratorObject
    childrens[Symbol.iterator] = function iteratorObject(){
        var currentIndex = 0;
        var finalIndex = this.length;
        var thisArray = this;
        return {
            next(){
                if(currentIndex < finalIndex){
                    return {
                        done:false,
                        value:thisArray[currentIndex++]
                    }
                }
                else{
                    return {
                        done:true
                    }
                }
            }
        }
    };

    for(var child of childrens){
        child.value = "elem";
        console.log(child.value);
    }
};