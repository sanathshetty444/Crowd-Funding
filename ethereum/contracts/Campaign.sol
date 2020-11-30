pragma solidity ^0.4.17; 


contract CampaignFactory{
    address[] public deployedCampaigns;
    function createCampaign(uint minimum) public{
        address newCampaign = new Campaign(minimum,msg.sender);
        // here contract Campaign returns address on being deployed so as to store it we are using newCampaign
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}
 
contract Campaign{
    
    struct Request{
        string description;
        uint value;
        address reciptent;
        bool complete;
        mapping(address=>bool) approvals;
        uint approvalCount;
    }
    
    address public manager;
    uint public minimumContribution;
    uint public approversCount;
    mapping(address=>bool) public approvers;
    Request[] public requests;
    
    
    
    modifier restricted(){
        require(msg.sender==manager);
        _;
        // modifier is used to lower down the repetition of the conditional code in the contract
        // '_;' this is used to indicate that there will further code 
    }
    
    function Campaign(uint minimum,address creator) public{
        manager=creator;
        minimumContribution=minimum;
        
    }
    
    function contribute() public payable{
        require(msg.value>minimumContribution);
        approvers[msg.sender]=true;
        approversCount++;
    }
    
    function createRequests(uint value,string desc,address reciptent) public restricted {
        Request memory newRequest= Request({
            description:desc,
            value:value,
            reciptent:reciptent,
            complete:false,
            approvalCount:0
            // not necessary to initialize mapping bcz it is a reference type variable and not a value type
        });
        requests.push(newRequest); 
    }
    
    function approveRequest(uint index) public {
        
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);
        requests[index].approvalCount++;
        requests[index].approvals[msg.sender]=true;
    }
    
    function finalizeRequest(uint index) public restricted{
        require(!requests[index].complete);
        require((approversCount/2)<requests[index].approvalCount);
        requests[index].complete=true;
        requests[index].reciptent.transfer(requests[index].value);
    }
    
}