function isChrome() {
	return (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) || (navigator.userAgent.indexOf(' Chrome/') >= 0 && navigator.userAgent.indexOf(' Edg/') < 0);
}
function isEdge() {
	return (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) || (navigator.userAgent.indexOf(' Chrome/') >= 0 && navigator.userAgent.indexOf(' Edg/') >= 0);
}
function isMetamaskWebView() {
	return (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) || (navigator.userAgent.indexOf('WebView MetaMaskMobile/') >= 0);
} 
window.addEventListener('load', async () => {
	  // 檢查是否存在 MetaMask
	  if (typeof window.ethereum !== 'undefined') {
			var idMember = 'fromIndex';  
			var browser = ''; 
	    // 初始化 Web3.js
	    const web3 = new Web3(window.ethereum);
			var userAddress = '';
			var balance = ''; 
			
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
	      userAddress = accounts[0];
	      //window.ethereum.selectedAddress ;////const userAddress = window.ethereum.request({method: 'eth_accounts'})
	      
	      
	      console.log('User Address:', userAddress);
	      var addressElement = document.getElementById("address");
	      addressElement.textContent = userAddress;
	
	      // 獲取 MetaMask 餘額
	      balance = await web3.eth.getBalance(userAddress);
	      console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
	      var balanceElement = document.getElementById("balance");
	      balanceElement.textContent = web3.utils.fromWei(balance, 'ether');
	    //window.location.href = 'http://10.144.132.65:8080/metamask/board.html?address=' + userAddress + '&balance=' + balance;
	     
	    } catch (err) {
	      console.error('Error connecting to MetaMask:', err.message); 
	    }
	  } else {
	  	const userAddress = '';
	  	const balance = '';
	    console.log('MetaMask extension/Pplugin not detected.');
	    //window.location.href = 'https://metamask.app.link/dapp/10.144.132.65:8080/metamask/board.html?address=' + userAddress + '&balance=' + balance;
	  }

		//判斷進行不userAgent同方式的導向
		console.log('userAgent:', navigator.userAgent);
		var protocolServer = 'https://';
		var hostServer = 'ephemeral-cascaron-b1d97f.netlify.app';
		//hostServer = 'http://10.144.132.65:8080';
		
		//Chrome
		//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36
		
 		if (isChrome()) {
 			console.log('The Browser is Chrome.');
			browser = 'Chrome'; 
			window.location.href = protocolServer + hostServer + '/metamask/board.html?browser=' + browser + '&idMember=' + idMember + '&address=' + userAddress + '&balance=' + balance;
 		} else if (isEdge()){
			browser = 'Edge'; 
 			console.log('The Browser is Edge.');
			window.location.href =  protocolServer + hostServer + '/metamask/board.html?browser=' + browser + '&idMember=' + idMember + '&address=' + userAddress + '&balance=' + balance;
 		} else if (isMetamaskWebView()){
			browser = 'MetamaskWebView'; 
 			console.log('The Browser is MetamaskWebView.');
			//window.location.href = 'https://metamask.app.link/dapp/' + hostServer + '/metamask/board.html?browser=' + browser + '&idMember=' + idMember + '&address=' + userAddress + '&balance=' + balance;
			window.location.href = protocolServer' + hostServer + '/metamask/board.html?browser=' + browser + '&idMember=' + idMember + '&address=' + userAddress + '&balance=' + balance;


 		} else {
			browser = 'Others'; 
 			console.log('The Browser is Others.');
			window.location.href = 'https://metamask.app.link/dapp/' + hostServer + '/metamask/board.html?browser=' + browser + '&idMember=' + idMember + '&address=' + userAddress + '&balance=' + balance;
 		}
			
 

});
    console.log('getJSON network access is finished.');
