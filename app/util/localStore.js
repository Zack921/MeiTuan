export default {
    setItem: function(key,value){
        try{
            // ios safari 无痕模式下,直接使用 localStorage.setItem 会报错
            localStorage.setItem(key,value);
        }catch(error){
            // 开发环境下提示 error
            if(__DEV__){
                console.error('localStorage.setItem报错,',error.message);
            }
        }
    },
    getItem: function(key){
        let value;
        try{
            value = localStorage.getItem(key);
        }catch(error){
            // 开发环境下提示 error
            if(__DEV__){
                console.error('localStorage.getItem报错,',error.message);
            }
        }finally{
            return value;
        }
    }
}