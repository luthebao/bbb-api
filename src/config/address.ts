import { Address } from "viem"
import { baseGoerli, bsc, goerli } from "viem/chains"


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
    [bsc.id]: {
        Token: "0xBb2826Ab03B6321E170F0558804F2B6488C98775",
        StorageNFT: "0x61a22bb4883bfAbEE2Fda5fD57Acc2B0CA2Be05a",
        CARDNFT: "0xa599558Ef13BFEE0171b0100258384d8476FbFBA",
        PermanentNFT: "0xC49ec281f63c0136Fdd6542dbbebB2A14aDfA7F4",
        ConsumableNFT: "0x15605549f87b32ae258Cb53B97F4af73e47E8300",
        Packs: "0x86a6196a3c5250F4A314B88C729273124Ef0611F",
    },
}