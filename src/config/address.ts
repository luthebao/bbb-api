import { Address } from "viem"
import { baseGoerli } from "viem/chains"


interface POOL {
    [chainId: number]: {
        Token: Address
        StorageNFT: Address
        CARDNFT: Address
        PermanentNFT: Address
        ConsumableNFT: Address
        Packs: Address
    }
}


export const ADDRESS: POOL = {
    [baseGoerli.id]: {
        Token: "0xd31be249db60b30d047aae51ccc18d0561b75465",
        StorageNFT: "0xEAF1c3f5133b616d821f3e3Ae94567D547441d42",
        CARDNFT: "0xc9Df898a687504A12D12054feE1F180157c00376",
        PermanentNFT: "0x17f5E8797Cb89A02A488B5E9537916F903010C8c",
        ConsumableNFT: "0x091D3335Ab032Ba1b1C237c2546757881AA1DC9f",
        Packs: "0xbce4a7b29c353B724435666d261Dc5F5D0704DEB",
    }
}