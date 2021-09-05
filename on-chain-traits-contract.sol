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
    
    string[] private backgrounds = [
          "Worm Hole" ,
  "Money",
  "Saturn",
  "Moon Landing",
  "Cryptos",
  "Matrix",
  "Space Lambo",
  "Railway",
  "Bitcoin",
  "American Flag",
  "Mount Rushmore",
  "Manhattan Bridge" ,
  "Bokeh",
  "Rainbow",
  "Galaxy",
  "Pizza",
  "Ripple",
  "Graph Paper",
  "Rhombus",
  "Circles",
  "Triangles",
  "Circles And Triangles",
  "Normal"
    ];
    
    uint256[] private backgrounds_probabilities = [2, 5, 5, 5, 10, 10, 10, 10, 15, 15, 15, 20, 20, 60, 60, 60, 60, 100, 100, 200, 200, 200, 100];
    
    string[] private genders = [
        "Male" ,
        "Female"
        ];
    uint256[] private genders_probabilities = [35,65];  
    function getGender(uint256 tokenId) public view returns (  string memory){
        return get_probabilities(genders,genders_probabilities, "GENDER", tokenId);
    }
    
    
    function getBackground(uint256 tokenId) public view returns (  string memory){
        return get_probabilities(backgrounds,backgrounds_probabilities, "BACKGROUND", tokenId);
    }
    function getAnimation(uint256 tokenId) public view returns (  string memory){
        return get_probabilities(animations, animations_probabilities, "ANIMATION", tokenId);
    }
    
    function get_probabilities(string[] memory  traits, uint256[] memory traits_probabilities, string memory trait_name, uint256 tokenId) private view returns ( string memory){
        uint256 total = sum_probabilities(traits_probabilities);
        uint256 randnum = random(string(abi.encodePacked(trait_name, toString(seeds[tokenId])))) % total;
        uint256 probability_index = 0;
        for(uint i=0; i<traits_probabilities.length; i++) {
            probability_index += traits_probabilities[i];
            if(randnum < probability_index){
                 return traits[i];
             }
        }
        require(0==1,"oops math broke");
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

    function tokenURI(uint256 tokenId) override public view returns (string memory) {
        string memory json = Base64.encode(bytes(string(abi.encodePacked('{"name": "Shape Face #', toString(tokenId), '", "Animations":"',getAnimation(tokenId),'", "description": "blah", "image": "https://imageapi/"}'))));
        string memory output = string(abi.encodePacked('data:application/json;base64,', json));
        return output;
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



/// [MIT License]
/// @title Base64
/// @notice Provides a function for encoding some bytes in base64
/// @author Brecht Devos <brecht@loopring.org>
library Base64 {
    bytes internal constant TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    /// @notice Encodes some bytes to the base64 representation
    function encode(bytes memory data) internal pure returns (string memory) {
        uint256 len = data.length;
        if (len == 0) return "";

        // multiply by 4/3 rounded up
        uint256 encodedLen = 4 * ((len + 2) / 3);

        // Add some extra buffer at the end
        bytes memory result = new bytes(encodedLen + 32);

        bytes memory table = TABLE;

        assembly {
            let tablePtr := add(table, 1)
            let resultPtr := add(result, 32)

            for {
                let i := 0
            } lt(i, len) {

            } {
                i := add(i, 3)
                let input := and(mload(add(data, i)), 0xffffff)

                let out := mload(add(tablePtr, and(shr(18, input), 0x3F)))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(12, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(6, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(input, 0x3F))), 0xFF))
                out := shl(224, out)

                mstore(resultPtr, out)

                resultPtr := add(resultPtr, 4)
            }

            switch mod(len, 3)
            case 1 {
                mstore(sub(resultPtr, 2), shl(240, 0x3d3d))
            }
            case 2 {
                mstore(sub(resultPtr, 1), shl(248, 0x3d))
            }

            mstore(result, encodedLen)
        }

        return string(result);
    }
}
