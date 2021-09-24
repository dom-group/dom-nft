// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Domino is ERC721URIStorage,ERC721Enumerable,Ownable {

    using Counters for Counters.Counter;
    using SafeERC20 for IERC20;
    using SafeMath for uint256;


    Counters.Counter private _tokenIdTracker;

    uint public constant MAX_FEE = 10000;
    uint public fee;
    uint public mintPrice;
    IERC20 public dom;
    address public dead = 0x000000000000000000000000000000000000dEaD;
    address public feeOwner;

    event Mint(address indexed minter, address indexed holder, string _tokenURI, uint tokenId);

    constructor(string memory _name, string memory _symbol, IERC20 _dom, uint _mintPrice,address _feeOwner) ERC721(_name,_symbol) {
        dom = _dom;
        mintPrice = _mintPrice;
        feeOwner = _feeOwner;
    }

    function setMintPrice(uint _mintPrice) public onlyOwner {
        mintPrice = _mintPrice;
    }

    function setFee(uint _fee) public onlyOwner {
        require(_fee<MAX_FEE,"error fee rate");
        fee = _fee;
    }
	
	function setFeeOwner(address _feeOwner) public onlyOwner {
        feeOwner = _feeOwner;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs:/";
    }

    function mint(address to, string memory _tokenURI) public virtual returns(uint tokenId)  {
        require(bytes(_tokenURI).length > 0, "uri should be set");

        uint feeAmount = mintPrice.mul(fee)/MAX_FEE;
        dom.safeTransferFrom(msg.sender, dead, mintPrice.sub(feeAmount));
        if(feeAmount>0) dom.safeTransferFrom(msg.sender, feeOwner, feeAmount);
        
        tokenId = _tokenIdTracker.current();
        _mint(to, tokenId);
        _setTokenURI(tokenId,_tokenURI);
        _tokenIdTracker.increment();    
        emit Mint(msg.sender,to,_tokenURI, tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override(ERC721,ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function _burn(uint256 tokenId) internal virtual override(ERC721,ERC721URIStorage) {
        super._burn(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Enumerable, ERC721) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(address from,address to,uint256 tokenId) internal virtual override(ERC721Enumerable,ERC721) {
        super._beforeTokenTransfer(from,to,tokenId);
    }

}