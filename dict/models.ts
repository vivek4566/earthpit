/* eslint-disable */
// tslint:disable
/**
 * MICRO SERVICES CURD OPERATIONS
 * 
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

export namespace Api {
	/**
	 * <p>ResponseInStatusCode</p>
	 */
	export interface ApiResponse {
		/**
		 * @type {number}
		 * @memberof ApiResponse
		 */
		code?: number;
		type?: string;
		message?: string;
	}

	export interface BODYDATA {
		device_Id?: string;
		earthpitname?: string;
		date?: Date;
		description?: string;
	}

}
