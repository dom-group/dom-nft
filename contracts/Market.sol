// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract WhiteList is Ownable {

    function getWhiteListStatus(address _maker) external view returns (bool) {
        return isWhiteListed[_maker];
    }

    mapping (address => bool) public isWhiteListed;

    function addWhiteList (address _user) public onlyOwner {
        isWhiteListed[_user] = true;
        emit AddedWhiteList(_user);
    }

    function removeWhiteList (address _clearedUser) public onlyOwner {
        isWhiteListed[_clearedUser] = false;
        emit RemovedWhiteList(_clearedUser);
    }

    event AddedWhiteList(address indexed _user);

    event RemovedWhiteList(address indexed _user);

}

contract Market is IERC721Receiver, WhiteList {
    
    using SafeERC20 for IERC20;
    //1.token 2.tokenId
    mapping(address=>mapping(uint=>Auction)) public auctions;

    IERC20 public dom;

    struct Auction {
        uint price;
        address seller;
        bool status;
    }
    
    event AuctionCreate(address indexed _token,address indexed _seller,uint _tokenId,uint _price);
    event AuctionCancel(address indexed _token,uint _tokenId);
    event AuctionBid(address indexed _token,address indexed _buyer,uint _tokenId);

    constructor(IERC20 _dom) {
        dom = _dom;
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) public virtual override returns (bytes4) {
        require(isWhiteListed[msg.sender],"token is not in whiteList");
        if(Address.isContract(operator)){
            require(isWhiteListed[operator],"not in whiteList");
        }
        uint price = abi.decode(data,(uint));
        createAuction(msg.sender,from,tokenId,price);
        return this.onERC721Received.selector;
    }

    
    function createAuction(address token,address account, uint tokenId,uint price) private {
        require(price>0,"invalid price");
        auctions[token][tokenId] = Auction({
            price: price,
            seller: account,
            status: true
        });
        emit AuctionCreate(token,account,tokenId,price);
    }
    
    function cancelAuction(address token,uint tokenId) public {
        Auction storage auction = auctions[token][tokenId];
        require(auction.status,"invalid auction");
        require(msg.sender==auction.seller,"not good");
        delete auctions[token][tokenId];
        IERC721(token).safeTransferFrom(address(this),msg.sender,tokenId);
        emit AuctionCancel(token,tokenId);
    }
    
    function bid(address token,uint tokenId) public {
        Auction storage auction = auctions[token][tokenId];
        require(auction.status,"invalid auction");
        dom.safeTransferFrom(msg.sender,auction.seller,auction.price);
        delete auctions[token][tokenId];
        IERC721(token).safeTransferFrom(address(this),msg.sender,tokenId);
        emit AuctionBid(token,msg.sender,tokenId);
    }
    
    
}