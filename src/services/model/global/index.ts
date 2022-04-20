export interface IGlobalModel {
    id: number
    createdAt: string | null
    updatedAt: string | null
    deletedAt: string | null
}

export interface IGlobalQueryModel {
    pageSize:number
    pageNo:number
    keywords?:string | null
    startTime?:string | null
    endTime?:string| null
}