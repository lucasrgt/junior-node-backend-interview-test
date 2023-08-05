import { MongoClient, Collection, Db } from 'mongodb'

/** Núcleo de conexão e facilidades para implementação do MongoDB */
export const MongoHelper = {
  client: null as unknown as MongoClient,
  db: null as unknown as Db,

  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
    console.log(`MongoDB Connection stablished at: ${uri}`)
  },

  async disconnect(): Promise<void> {
    await this.client.close()
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection

    return Object.assign({}, collectionWithoutId, {
      id: _id.toHexString()
    })
  }
}
