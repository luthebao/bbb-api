import { STORAGE_ABI } from '@/utils/abis';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Address, Hash, createPublicClient, decodeEventLog, http, parseAbi } from 'viem';
import { bsc } from 'viem/chains';

const STORAGE_NFT: Address = "0xF265d1E90a09f518c96744A013C1c7724FC567ba"

const publicClient = createPublicClient({
    chain: bsc,
    transport: http()
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const hash = req.query.hash as Hash

        const transaction = await publicClient.getTransactionReceipt({
            hash: hash
        })

        const topics = transaction.logs.filter(val => val.topics.length > 2 && val.topics[0] === "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" && val.topics[1] === "0x0000000000000000000000000000000000000000000000000000000000000000").map(val => val.topics)

        let result = []

        for (let index = 0; index < topics.length; index++) {
            const topic = topics[index];
            const decoded = decodeEventLog({
                abi: [
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    }
                ],
                // `data` should be 64 bytes, but is only 32 bytes.
                data: '0x',
                topics: topic,
                strict: false
            })
            if (decoded.args.tokenId) {
                const info = await publicClient.readContract({
                    address: STORAGE_NFT,
                    abi: STORAGE_ABI,
                    functionName: "CardInfos",
                    args: [decoded.args.tokenId]
                })
                result.push({
                    tokenid: decoded.args.tokenId.toString(),
                    image: `https://cloudflare-ipfs.com/ipfs/bafybeigszjn34i7bell7haxhhuyvqbipzvmezcphzln6yxn33ha2wlobi4/${info[2].toString()}/${info[3].toString()}/img${info[1].toString()}.png`
                })
            }
        }
        // [DecodeLogDataMismatch]: Data size of 32 bytes is too small for non-indexed event parameters.)
        res.status(200).json({
            result: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            result: []
        })
    }
}