

export function getAllKeysLC(){
    return Object.keys(getAllLC());
}

export function getAllLC(){
    return localStorage;
}