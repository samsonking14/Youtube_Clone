export const API_Key = 'AIzaSyB-_8aIVJqpSyoUunK41GR4GJoD4dhpDpk';

export const value_convert = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}