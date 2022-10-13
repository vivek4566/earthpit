import {  GetUserResponse, UserApi, UserCreateResponse } from "../../../dict/api/user/types";
import { Api } from "../../../dict/models";
import {collections} from '../../../src/admin/types'


export class UserApiImpl implements UserApi {
    getUser(): Promise<GetUserResponse>  {
        return new Promise<GetUserResponse>((resolve,reject)=>{
            collections.colors!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GetUserResponse>{
                        status: 400,
                       body:{message: `something went wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GetUserResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }




 userCreate(request: Api.BODYDATA | undefined): Promise<UserCreateResponse>
 {
    return new Promise<UserCreateResponse>((resolve,reject)=>{
        collections.colors!.findOne(
            {device_Id:request?.device_Id},
            function(err:any,result:any){
                if(result){
                    const response=<UserCreateResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.colors!.insertOne(
                        {earthpitname:request?.earthpitname,device_Id:request?.device_Id,date:request?.date,description:request?.description},
                        function(err:any,result:any){
                          if(err){
                            const response=<UserCreateResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<UserCreateResponse>{
                                status:201,
                                body:{message:`Create User Sucessfuly`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )
                }
            }
        )
    })
 }
}