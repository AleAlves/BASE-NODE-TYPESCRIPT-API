import { JWTType } from "../model/JWTType"

export class JWTSession {

    uid: String
    id: String
    AESIV: String
    AESKey: String
    AESSalt: String
    created: number
    type: JWTType

    constructor(clientAESData: any, type: JWTType) {
        this.id = clientAESData.id
        this.uid = clientAESData.uid
        this.AESIV = clientAESData.AESIV
        this.AESKey = clientAESData.AESKey
        this.AESSalt = clientAESData.AESSalt
        this.created = Date.now()
        this.type = type
    }
}