import AsyncStorage from '@react-native-community/async-storage';

export const saveToStorage =async(name:string,data:any)=>{
    await AsyncStorage.setItem(name,JSON.stringify(data))
}

export const fetchFromStorage =async(name:string)=>{
    const value  = await AsyncStorage.getItem(name);
    if(value===null) return {};
    return JSON.parse(value)
}

export enum StorageNames{
    AUTH ='AUTH'
}