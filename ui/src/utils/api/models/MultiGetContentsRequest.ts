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
import {
    ContentsKey,
    ContentsKeyFromJSON,
    ContentsKeyFromJSONTyped,
    ContentsKeyToJSON,
} from './';

/**
 * 
 * @export
 * @interface MultiGetContentsRequest
 */
export interface MultiGetContentsRequest {
    /**
     * 
     * @type {Array<ContentsKey>}
     * @memberof MultiGetContentsRequest
     */
    requestedKeys?: Array<ContentsKey>;
}

export function MultiGetContentsRequestFromJSON(json: any): MultiGetContentsRequest {
    return MultiGetContentsRequestFromJSONTyped(json, false);
}

export function MultiGetContentsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultiGetContentsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'requestedKeys': !exists(json, 'requestedKeys') ? undefined : ((json['requestedKeys'] as Array<any>).map(ContentsKeyFromJSON)),
    };
}

export function MultiGetContentsRequestToJSON(value?: MultiGetContentsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'requestedKeys': value.requestedKeys === undefined ? undefined : ((value.requestedKeys as Array<any>).map(ContentsKeyToJSON)),
    };
}


