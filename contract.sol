// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable@4.2.0/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.2.0/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.2.0/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable@4.2.0/utils/CountersUpgradeable.sol";

contract ShapeFaces is Initializable, ERC721Upgradeable, OwnableUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private _tokenIdCounter;
    
    uint[]  seeds = new uint[](0);


    function initialize() initializer public {
        __ERC721_init("Shape Faces", "SHAPE");
        __Ownable_init();
    }

    function getSeed(uint token_id) public view returns (uint){
        return seeds[token_id];
    }

    function safeMint(address to) public {
        _safeMint(to, _tokenIdCounter.current());
        seeds.push(uint(keccak256(abi.encodePacked(block.difficulty, blockhash(block.number),block.timestamp, _tokenIdCounter.current()))));
        _tokenIdCounter.increment();
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://api.shapefaces.com/";
    }
}

