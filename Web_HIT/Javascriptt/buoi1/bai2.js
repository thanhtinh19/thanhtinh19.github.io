const listAccounts = [
    { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
    { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
    { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
    { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
    { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
    { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
    { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
    { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
    { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
    { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
    { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
    { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
    { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
    { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
    { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
    { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
  ]

    function Show(listAccount){
        for(let i in listAccount){
            console.log(listAccount[i]);
        }
  }
  
    function changeType(listAccount) {
        for (let i in listAccount) {
            if (listAccount[i].balance > 1000000) listAccount[i].type = "vip";
        }
  }
  
  
    function recharge (listAccount, id, balance) {
        let check = false;
        for (let i in listAccount) {
            if (listAccount[i].id === id) {
                if (listAccount[i].balance === 0) {
                    listAccount[i].balance += balance * 2;
                } 
                else {
                    listAccount[i].balance += balance;
                }
                check = true;
            }
        }
        if (!check) {
            console.log('id khong hop le!!!!');
        }
    }
  
  
    function changeActive(listAccount) {
        for (let i in listAccount) {
            if (listAccount[i].isActive === false) {
                listAccount[i].isActive = true;
            }
        }
  }
  
  
  const main = function () {
    console.log('Set tai khoan VIP :');
    changeType(listAccounts);
    Show(listAccounts);

    console.log('Nap tien vao tai khoan:');
    recharge(listAccounts, 10, 10000000);
    Show(listAccounts);
    
    console.log('Kiem tra tk la active:');
    changeActive(listAccounts);
    Show(listAccounts);
  }
  
  main();
  