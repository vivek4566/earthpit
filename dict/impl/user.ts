import * as t from '../api/user/types'
import { Api } from '../models'

async function userCreate(request: Api.BODYDATA | undefined): Promise<t.UserCreateResponse> {
	throw 'Unimplemented'
}

async function deleteUser(deviceId: string): Promise<t.DeleteUserResponse> {
	throw 'Unimplemented'
}

async function getUser(): Promise<t.GetUserResponse> {
	throw 'Unimplemented'
}

async function updateUser(deviceId: string, request: Api.BODYDATA | undefined): Promise<t.UpdateUserResponse> {
	throw 'Unimplemented'
}


const api: t.UserApi = {
	userCreate,
	deleteUser,
	getUser,
	updateUser,
}

export default api
