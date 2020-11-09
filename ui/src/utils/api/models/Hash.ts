/* tslint:disable */
/* eslint-disable */
/**
 * Nessie API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Hash
 */
export interface Hash {
    /**
     * 
     * @type {string}
     * @memberof Hash
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Hash
     */
    hash?: string;
}

export function HashFromJSON(json: any): Hash {
    return HashFromJSONTyped(json, false);
}

export function HashFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hash {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
    };
}

export function HashToJSON(value?: Hash | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'hash': value.hash,
    };
}


