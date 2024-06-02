import {getAllKeys} from './LocalStorage';

export class LocalStoragePrefixStaticClassAbstract {
    static prefix = "";

    /**
     * @param {string} name
     * @returns {string}
     */
    static getName(name) {
        return this.prefix + name;
    }

    /**
     * @param {string} name
     */
    static get(name) {
        return localStorage.getItem(this.getName(name));
    }

    /**
     * @param {string} name
     * @returns {bool}
     */
    static has(name) {
        return getAllKeys().indexOf(this.getName(name)) !== -1;
    }

    /**
     * @param {string} name
     * @param {string} value
     * @returns {bool}
     */
    static isEqual(name, value) {
        if (!this.has(name)) return false;
        return value === this.get(name);
    }

    static remove(name){
        localStorage.removeItem(this.getName(name));
    }

    /**
     * @param {string} name
     * @param {string} value
     */
    static set(name, value) {
        localStorage.setItem(this.getName(name), value);
    }
}