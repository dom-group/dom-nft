## Deployed Contracts

    `npx hardhat --network bsc-testnet deploy`

#### contract(Ropsten) 
| tag | address |
|-----|-------|
| DTC | 0xC0A7ef150c8eBfe1a1737980BD3DA50edc3ce001 |
| [Domino](https://github.com/dom-group/dom-nft/blob/main/docs/NFT.md) | 0x76ABb8d6B8E48299807b0ea75C6314ba48780B9C |
| Multicall2 | 0x994Cc92Ecf6D84eFaF62D41B6Eb815357dd530b2 |

#### Metadata

    This is the “ERC721 Metadata JSON Schema” referenced above.
    
```
{
    "title": "Asset Metadata",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Identifies the asset to which this NFT represents"
        },
        "description": {
            "type": "string",
            "description": "Describes the asset to which this NFT represents"
        },
        "image": {
            "type": "string",
            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
        }
    }
}
```