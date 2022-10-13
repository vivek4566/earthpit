# User

## Operations

### userCreate

```http
POST /colorData
```

UserCreate

### getUser

```http
GET /getdevice
```

GetUser

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function userCreate(request: Api.BODYDATA | undefined): Promise<t.UserCreateResponse> {
	throw 'Unimplemented'
}

async function getUser(): Promise<t.GetUserResponse> {
	throw 'Unimplemented'
}


const api: t.UserApi = {
	userCreate,
	getUser,
}

export default api
```
