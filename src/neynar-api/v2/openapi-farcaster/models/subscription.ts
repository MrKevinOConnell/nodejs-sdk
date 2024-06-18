/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { SubscriptionMetadata } from './subscription-metadata';
// May contain unused imports in some cases
// @ts-ignore
import { SubscriptionPrice } from './subscription-price';
// May contain unused imports in some cases
// @ts-ignore
import { SubscriptionToken } from './subscription-token';

/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'provider_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'contract_address': string;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    'chain': number;
    /**
     * 
     * @type {SubscriptionMetadata}
     * @memberof Subscription
     */
    'metadata': SubscriptionMetadata;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'owner_address': string;
    /**
     * 
     * @type {SubscriptionPrice}
     * @memberof Subscription
     */
    'price': SubscriptionPrice;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    'protocol_version': number;
    /**
     * 
     * @type {SubscriptionToken}
     * @memberof Subscription
     */
    'token': SubscriptionToken;
}
