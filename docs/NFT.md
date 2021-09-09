#### function mint(address to, string memory _tokenURI, string memory _tag) public virtual returns(uint tokenId)

`nft mint function`

| params | statement |
|-----|-------|
| to | recipient address |
| _tokenURI | metadata info |
| _tag | tokens label |

#### get exhibit list

sql example:
```
{
  tagSearch(text:"ha:*") {
    id
    tag
  }
}
```