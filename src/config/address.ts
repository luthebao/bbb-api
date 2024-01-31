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
        StorageNFT: "0xb2aE03335BBc87Ca2CFD426c64D4b59891cd2Ec3",
        CARDNFT: "0xFE2f16b440B420AC89D2237219d9579612471343",
        PermanentNFT: "0xDd2BaE6A043C565463Cea84FB4468234853f5C02",
        ConsumableNFT: "0x16D06f814fF7eBfEAF59dCB0A18Bbd49aee331D9",
        Packs: "0xF0ddb22D36b107691ED1807427a2bf4E0B0366fc",
    }
}