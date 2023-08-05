export interface AddRepository<Params, Model> {
  create(params: Params): Promise<Model>
}

export interface FindRepository<Model> {
  find(id: string, params?: any): Promise<Model | string>
}

export interface FindAllRepository<Model> {
  findAll(params?: any): Promise<Model[]> | Promise<any>
}
