

export function getAllKeys(){
    return Object.keys(getAll());
}

export function getAll(){
    return localStorage;
}