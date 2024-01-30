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
import { CastWithInteractions } from './cast-with-interactions';
// May contain unused imports in some cases
// @ts-ignore
import { FrameActionButton } from './frame-action-button';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';
// May contain unused imports in some cases
// @ts-ignore
import { ValidatedFrameAction } from './validated-frame-action';

/**
 * 
 * @export
 * @interface ValidateFrameActionResponse
 */
export interface ValidateFrameActionResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ValidateFrameActionResponse
     */
    'valid'?: boolean;
    /**
     * 
     * @type {ValidatedFrameAction}
     * @memberof ValidateFrameActionResponse
     */
    'action'?: ValidatedFrameAction;
    /**
     * 
     * @type {User}
     * @memberof ValidateFrameActionResponse
     */
    'interactor'?: User;
    /**
     * 
     * @type {FrameActionButton}
     * @memberof ValidateFrameActionResponse
     */
    'button'?: FrameActionButton;
    /**
     * 
     * @type {CastWithInteractions}
     * @memberof ValidateFrameActionResponse
     */
    'cast'?: CastWithInteractions;
}

