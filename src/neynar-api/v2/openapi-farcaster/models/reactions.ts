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
import { ReactionsCast } from './reactions-cast';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * 
 * @export
 * @interface Reactions
 */
export interface Reactions {
    /**
     * 
     * @type {string}
     * @memberof Reactions
     */
    'object': ReactionsObjectEnum;
    /**
     * 
     * @type {ReactionsCast}
     * @memberof Reactions
     */
    'cast': ReactionsCast;
    /**
     * 
     * @type {User}
     * @memberof Reactions
     */
    'user': User;
}

export const ReactionsObjectEnum = {
    Likes: 'likes',
    Recasts: 'recasts'
} as const;

export type ReactionsObjectEnum = typeof ReactionsObjectEnum[keyof typeof ReactionsObjectEnum];

