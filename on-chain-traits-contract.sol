// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract ShapeFaces is ERC721, Ownable  {

    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    
    uint[]  seeds = new uint[](0);
    
    uint256 public tokenPrice = 29000000000000000; // 0.029 ETH
    uint256 public maxTokens = 7777;
    uint256 public preSaleTokens = 777+200;
    bool public mainSaleActive = false; // if false means pre-sale only active

    string public baseURI = "https://shapefaces.uc.r.appspot.com/";
    
    bool public saleIsActive = false;
    bool public reserved = false;

    event ShapeFacesPriceChanged(uint256 price);
    event MaxTokenAmountChanged(uint256 value);
    event MaxPurchaseChanged(uint256 value);
    event ShapeFacesReserved();
    event RolledOver(bool status);
    
    
    function totalSupply() public view returns (uint256){
        return _tokenIdCounter.current() ;
    }
    
    function reserveShapeFaces() public onlyOwner onReserve {
        uint supply = totalSupply();
        uint i;
        for (i; i < 200; i++) {
            _safeMint(_msgSender(), supply + i);
            seeds.push(uint(keccak256(abi.encodePacked(block.difficulty, blockhash(block.number),block.timestamp, _tokenIdCounter.current()))));
            _tokenIdCounter.increment();

        }
    }
    
    modifier onReserve() {
        require(!reserved, "Tokens reserved");
        _;
        reserved = true;
        emit ShapeFacesReserved();
    }
    
    
     string[] private animations = [
        "Escalator",
        "None",
        "Pac Man",
        "Screen Saver",
        "Elevator"
    ];
    uint256[] private animations_probabilities = [
        2,
        86,
        6,
        4,
        2
    ];
    
    function getAnimation(uint256 tokenId) public view returns (  string memory){
        return get_probabilities(animations, animations_probabilities, "ANIMATION", tokenId);
    }
    
    function get_probabilities(string[] memory  traits, uint256[] memory traits_probabilities, string memory trait_name, uint256 tokenId) private view returns ( string memory){
        uint256 total = sum_probabilities(traits_probabilities);
        uint256 randnum = random(string(abi.encodePacked(trait_name, toString(seeds[tokenId])))) % total;
        uint256 probability_index = 0;
        for(uint i=0; i<traits_probabilities.length; i++) {
            probability_index += traits_probabilities[i] / total;
            if(randnum < probability_index){
                 return traits[i];
             }
        }
        return traits[traits.length-1]; // should never hit this but makes compiler happier
    }
    
    
    function random(string memory input) internal pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(input)));
    }
    
    function sum_probabilities(uint256[] memory traits_probabilities) private pure returns ( uint256){
        uint256 sum = 0;
        for (uint i=0; i<traits_probabilities.length; i++) {
          sum += traits_probabilities[i];
        }    
        return sum;
    }


    function setPreSaleAmount(uint256 _amt) public onlyOwner {
        preSaleTokens = _amt;
    }
    
    function setURI(string memory url) public onlyOwner {
        baseURI = url;
    }


   function withdraw() public onlyOwner {
        uint balance = address(this).balance;
        address payable sender = payable(msg.sender); // Correct since Solidity >= 0.6.0
        sender.transfer(balance);
    }


    constructor() ERC721("Shape Faces", "SHAPE") {}

    function getSeed(uint token_id) public view returns (uint){
        return seeds[token_id];
    }

    function getMintCount() public view returns (uint){
        return _tokenIdCounter.current();
    }
    
    function mint(uint amount) public payable{
        require(amount > 0);
        require(amount < 11);
        require(_tokenIdCounter.current() + amount <= maxTokens, "Purchase would exceed max supply of ShapeFaces");
        require(tokenPrice * amount == msg.value, "Ether value sent is not correct");
        if(!mainSaleActive){
            require(_tokenIdCounter.current() + amount <= preSaleTokens, "Purchase would exceed max pre-sale supply of ShapeFaces");
        }

        for(uint index=0;index < amount; index++){
            _safeMint(msg.sender, _tokenIdCounter.current());
            seeds.push(uint(keccak256(abi.encodePacked(block.difficulty, blockhash(block.number),block.timestamp, _tokenIdCounter.current()))));
            _tokenIdCounter.increment();
            
        }
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
    
     
    function toString(uint256 value) internal pure returns (string memory) {
    // Inspired by OraclizeAPI's implementation - MIT license
    // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}



