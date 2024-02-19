

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
      const userAddress = accounts[0];
      //window.ethereum.selectedAddress ;////const userAddress = window.ethereum.request({method: 'eth_accounts'})
      
      
      console.log('User Address:', userAddress);
      var addressElement = document.getElementById("address");
      addressElement.textContent = userAddress;

      // 獲取 MetaMask 餘額
      const balance = await web3.eth.getBalance(userAddress);
      console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
      var balanceElement = document.getElementById("balance");
      balanceElement.textContent = web3.utils.fromWei(balance, 'ether');


    window.location.href = 'https://ephemeral-cascaron-b1d97f.netlify.app/metamask/board.html?address=' + userAddress + '&balance=' + balance;
   // window.location.href = 'http://10.144.132.65:8080/metamask/metamask/board.html?address=' + userAddress + '&balance=' + balance;
     
    } catch (err) {
      console.error('Error connecting to MetaMask:', err.message); 
    }
    
   
    
  } else {
  	const userAddress = '';
  	const balance = '';
    console.log('MetaMask extension/Pplugin not detected.');
    window.location.href = 'https://metamask.app.link/dapp/ephemeral-cascaron-b1d97f.netlify.app/metamask/board.html?address=' + userAddress + '&balance=' + balance;
                                                           
  }

});
    console.log('getJSON network access is finished.');
