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
import { FrameActionButton } from './frame-action-button';

/**
 * 
 * @export
 * @interface FrameAction
 */
export interface FrameAction {
    /**
     * 
     * @type {string}
     * @memberof FrameAction
     */
    'version'?: string;
    /**
     * 
     * @type {string}
     * @memberof FrameAction
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof FrameAction
     */
    'image'?: string;
    /**
     * 
     * @type {FrameActionButton}
     * @memberof FrameAction
     */
    'button': FrameActionButton;
    /**
     * URL of the frames
     * @type {string}
     * @memberof FrameAction
     */
    'frames_url': string;
    /**
     * URL of the post to get the next frame
     * @type {string}
     * @memberof FrameAction
     */
    'post_url': string;
}

