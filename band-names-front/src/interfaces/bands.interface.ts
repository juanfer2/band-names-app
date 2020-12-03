export interface  BandInterface {
  id: string
  name: string
  vote: string
}

export interface  UseFetchSocketInterface {
  online: Boolean
  bands: BandInterface[]
  loanding: Boolean
  createBand: Function
  voteBand: Function
}
