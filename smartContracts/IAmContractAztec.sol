// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ByteHasher} from "./ByteHasher.sol";
import {IWorldID} from "./IWorldID.sol";

import "https://github.com/0xcert/ethereum-erc721/src/contracts/tokens/nf-token-metadata.sol";
import "https://github.com/0xcert/ethereum-erc721/src/contracts/ownership/ownable.sol";

contract MVPIAmContract is NFTokenMetadata, Ownable {
    using ByteHasher for bytes;

        /// @notice Thrown when attempting to reuse a nullifier
        error InvalidNullifier();

    /// @notice Emitted when a profile is verified
    /// @param profileId The ID of the profile getting verified
    event ProfileVerified(uint256 indexed profileId);

    /// @notice Emitted when a profile is unverified
    /// @param profileId The ID of the profile no longer verified
    event ProfileUnverified(uint256 indexed profileId);

    // @dev The World ID instance that will be used for verifying proofs
    //IWorldID internal immutable worldId;

    // @dev The World ID group ID (always `1`)
    //uint256 internal immutable groupId;

    // @dev The World ID Action ID
    //uint256 internal immutable actionId;

    /// @notice Whether a profile is verified
    /// @dev This also generates an `isVerified(uint256) getter
    mapping(uint256 => bool) public isVerified;

    /// @dev Connection between nullifiers and profiles. Used to correctly unverify the past profile when re-verifying.
    mapping(uint256 => uint256) internal nullifierHashes;

    // @param _worldId The WorldID instance that will verify the proofs
    // @param _groupId The WorldID group that contains our users (always `1`)
    // @param _actionId The WorldID Action ID for the proofs
    constructor(
 /*       IWorldID _worldId,
        uint256 _groupId,
        string memory _actionId
        */
    ) /*payable*/ {
 /*       worldId = _worldId;
        groupId = _groupId;
        actionId = abi.encodePacked(_actionId).hashToField();
        */
        nftName = "Iam NFT";
        nftSymbol = "Iam";
    }

    /// @notice Mint Iam NFT verifiying WorldCoinID
    // @param root The root of the Merkle tree (returned by the JS SDK).
    // @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).
    // @param proof The zero-knowledge proof that demostrates the claimer is registered with World ID (returned by the JS widget).

     function mint(
 /*       uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof,
        */
        string calldata _uri
    ) public 
    /*payable*/ 
    {

       /* worldId.verifyProof(
            root,
            groupId,
            abi.encodePacked(msg.sender).hashToField(),
            nullifierHash,
            actionId,
            proof
        );

        if (nullifierHashes[nullifierHash]!= 0) revert InvalidNullifier();

       isVerified[abi.encodePacked(msg.sender).hashToField()] = true;
       nullifierHashes[nullifierHash] = 1;

        emit ProfileVerified(abi.encodePacked(msg.sender).hashToField()); */

        //mint
        super._mint(msg.sender, uint256(uint160(msg.sender)));
        super._setTokenUri(uint256(uint160(msg.sender)), _uri);
    }

    function getNFT() public view  returns (string memory){
        return super._tokenURI(uint256(uint160(msg.sender)));
    }
}
