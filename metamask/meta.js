

window.addEventListener('load', async () => {
	
	

  // 檢查是否存在 MetaMask
  if (typeof window.ethereum !== 'undefined') {
    // 初始化 Web3.js
    const web3 = new Web3(window.ethereum);

    // 請求用戶授權
    try {
      // 使用 ethereum.request 方法發送請求
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('MetaMask is connected.');
      console.log('Accounts:', accounts);
      console.log('privateKey:', accounts.privateKey);

      // 獲取用戶地址
      const userAddress = window.ethereum.selectedAddress ;//accounts[0];
      console.log('User Address:', userAddress);
      var addressElement = document.getElementById("address");
      addressElement.textContent = userAddress;

      // 獲取 MetaMask 餘額
      const balance = await web3.eth.getBalance(userAddress);
      console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
      var balanceElement = document.getElementById("balance");
      balanceElement.textContent = web3.utils.fromWei(balance, 'ether');

      // 獲取 PrivateKey
      //const keyPrivate = await web3.eth.getBalance(userAddress);
      //console.log('PrivateKey:', web3.utils.fromWei(keyPrivate, 'ether'), 'ETH');
      //var PrivateKeyElement = document.getElementById("PrivateKey");
      //PrivateKeyElement.textContent = web3.utils.fromWei(keyPrivate, 'ether');
      
      
      // Fetch all NFTs owned by wallet address with web3.js
      //objects = await ERC721.methods.userOwnedTokens.call(userAddress);
  		//console.log('ERC721:', objects);
  		
			//	balance = ERC721.methods.balanceOf(walletAddress).call();
			//	objects = [];
				
			//	for (i = 0; i < balance; i++) {
			//	    tokens.push(await ERC721.methods.tokenOfOwnerByIndex(walletAddress, i).call());
			//	}
				
			//	for(i = 0; i < tokens.length; i++){
			//	    objects.push(await ERC721.methods.tokenURI(tokenIdList[i]).call());
			//	}  		
  		 //console.log('ERC721:', balance);
    
	// 建立合約物件
		//var contractAddress = '0x1600aac52f1272ef1fb4036a67b17c7a7e8c42df';
		//var contractAddress = '0x7bA16e7D1a8139b658657784ED617a8087E5C978';  //mumbai MileageBadge
		//var contractAddress = '0x84f7c41c21137cba8078B1151523482dd147ac81';  //mumbai VehicleHolder
		
		var contractAddress = '0x99a9B7c1116f9ceEB1652de04d5969CcE509B069'; //opensea
		
		
		var url_abi_VehicleHolder = 'http://10.144.132.65:9080/metamask/abi_VehicleHolder.jsp';
		var url_abi_MileageBadge  = 'http://10.144.132.65:9080/metamask/abi_MileageBadge.jsp';
		var url_abi_ethereum  = 'https://api.etherscan.io/api';    //?module=contract&action=getabi&address=' + contractAddress;   //String 
		
		var url_abi = url_abi_ethereum;
		console.log("url_abi : " + url_abi);   
 		var myContract;
  	console.log("myContract step_000." + url_abi);         
		$.getJSON(url_abi, {
    	module: "contract",
    	action: "getabi",
    	address: contractAddress
  	})
		.done(function(data) { 
				//alert("getJSON success"); 
				var contractABI = "";
  			console.log("myContract step_001.");         
		    //alert('contractABI:' +   data );  
  			  console.log("myContract step_002.");         
		    //alert('contractABI:' +  (data.constructor.name)); 
  			  console.log("myContract step_003.");         
		    //alert('contractABI:' +  (data.result.constructor.name)); 
  			  console.log("myContract step_004.");         
		    contractABI = JSON.parse(data.result);
  			  console.log("myContract step_005.");         
		    // alert('contractABI:' + JSON.stringify(contractABI)); 
		   	console.log("contractABI : " + JSON.stringify(contractABI));       
		   	console.log("contractAddress : " + JSON.stringify(contractAddress));  
		var abiContractElement = document.getElementById("abiContract");
    abiContract.textContent = JSON.stringify(contractABI);
		   	     
		    if (contractABI != ''){
		    	 myContract = new web3.eth.Contract( contractABI, contractAddress, {
					    from: userAddress, // default from address
					    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
					});

					var step_01 = myContract.methods.balanceOf(userAddress).call();
	 				console.log("balanceOf: " + JSON.stringify(step_01));  
					
				//	var step_02 = myContract.methods.getOwnerBalance().call();
	 				//console.log("VehicleHolder::getOwnerBalance : " + JSON.stringify(step_01));  
	
					var step_03 =myContract.methods.tokenURI(0).call();
	 				console.log("tokenURI : " + JSON.stringify(step_03));  
  			
  			  console.log("myContract successful.");         
		    } else {
		        console.log("myContract Error" );
		    }		        
  			console.log("myContract creating process is done.");   
			
			
			})
		.fail(function() { alert("error"); })
		;
		//

		//	console.log("myContract : " + myContract.toString());         
		//console.log("myContract : " + JSON.stringify(myContract));         
		
		 
      //  var MyContract = web3.eth.contract(contractABI);
       // var myContractInstance = MyContract.at("0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359");
 
        //var result = MyContract.methods.tokenURI(0);
        //var timeoutID = window.setTimeout(( () => console.log("tokenURI : " + JSON.stringify(result)) ), 5000);
		    //web3.personal.sign(web3.fromUtf8("Hello from Toptal!"), web3.eth.coinbase, console.log);         
 
     //    for (var i = 0; i < balance; i++) {
     //        var tokenId = await contract.methods.tokenOfOwnerByIndex(userAddress, i).call()
     //        var tokenURI = await contract.methods.tokenURI(tokenId).call();
     //        tokens.push({ tokenId, tokenURI })
     //    }

    //     for (var i = 0; i < tokens.length; i++) {
    //         var token = tokens[i];
    //         var metadataRes = await fetch(`https://ipfs.io/ipfs/${token.tokenURI.substr(7)}`)
    //         var metadata = await metadataRes.json()
    //         token.metadata = metadata
    //     }           
    } catch (err) {
      console.error('Error connecting to MetaMask:', err.message);
    //  console.error('Error lineNumber:', err.lineNumber);
    //  console.error('Error  description :', err.description );
    }
  } else {
    console.log('MetaMask not detected.');
  }

});
    console.log('getJSON network access is finished.');
