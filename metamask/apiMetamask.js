const ethereumButton = document.querySelector(".enableEthereumButton");
const sendEthButton = document.querySelector(".sendEthButton");

var accounts = [];
	 	var sender = '0xee';
	 	var receiver = '0xee';
	 	var amount = 123456;

try {
	 sender = document.getElementById("address").textContent;
   receiver = document.getElementById("receiver").value;
	 amount = Number(document.getElementById("amount").value);
} catch (e) {
	alert('try error,receiver=' + receiver + ',amount=' + amount);
	
}
	//alert('try OK,receiver=' + receiver + ',amount=' + amount);
//accounts[0]


//require(2 >= 1, "Not enough ETH sent; check price!"); 

// Send Ethereum to an address
sendEthButton.addEventListener("click", async () => {
	
	
	var dataParam = [
                {
                    // The user's active address.
                    from: sender,
                    // Required except during contract publications.
                    to: receiver,
                    // Only required to send ether to the recipient from the initiating external account.
                    value: '',
                    // Customizable by the user during MetaMask confirmation.
                    gasLimit: '0x5028',
                    // Customizable by the user during MetaMask confirmation.
                    maxPriorityFeePerGas: '0x3b9aca00',
                    // Customizable by the user during MetaMask confirmation.
                    maxFeePerGas: '0x2540be400',
                },
            ];
	
	
	console.log('dataParam:', dataParam);   	
	
	
//.send({method: 'eth_requestAccounts', params: []}) 
//.request({method: 'eth_requestAccounts', params: []}) 
ethereum.sendAsync({ method: 'eth_sendTransaction',params: dataParam }, function (err, result) { 
	/** Handle result **/ 
	console.log('sendAsync:', err);   
	//console.log('sendAsync:', result);   
	
	});


        
});

ethereumButton.addEventListener("click", () => {
    getAccount();
});

async function getAccount() {
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    alert(accounts);
}