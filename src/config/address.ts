import { Address } from "viem"
import { baseGoerli, goerli } from "viem/chains"


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
        StorageNFT: "0x335734bdbad6ff4c7941b9BCC319D73519CA15f7",
        CARDNFT: "0x5803b5262608ACCeD9635DB47F0384D74A1D9e43",
        PermanentNFT: "0x0746A82A2e3b8E95dD7E26ad012eb8A45a9daf79",
        ConsumableNFT: "0xE75Ad34b8A7166Ed8B9C6949f2dc742d917F21bF",
        Packs: "0x350E82621F2B25e3404D4fC0c3617B3948f0ca69",
    },
}