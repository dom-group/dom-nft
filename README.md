## Deployed Contracts

    `npx hardhat --network bsc-testnet deploy`

#### contract(Ropsten) 
| tag | address |
|-----|-------|
| DTC | 0xC0A7ef150c8eBfe1a1737980BD3DA50edc3ce001 |
| [Domino](./docs/NFT.md) | 0x9F9406A886F7DdDFDa013DDe741e9e4180Fb16e4 |
| Multicall2 | 0x994Cc92Ecf6D84eFaF62D41B6Eb815357dd530b2 |


#### contract(Ropsten) 
| tag | address |
|-----|-------|
| DTC | 0xfE0B09f3d250e461992509F8E70e73a1bD288f86 |
| [Domino](./docs/NFT.md) | 0x9Efbc8845785Dbc71c655937969CC57478627B75 |

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