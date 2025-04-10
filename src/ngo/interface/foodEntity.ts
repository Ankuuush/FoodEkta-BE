import { Types } from "mongoose"

export default interface FoodI {
    itemName:string
    quantity : number
    unit : string
    expiryDate: Date
    isActive: boolean
    userId:Types.ObjectId
}