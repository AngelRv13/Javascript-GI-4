function coinCount (coins, total) {
    var coinLen = 0;
    var counter = total;
    var stuck = false;
    coins.sort(); // put it in numerical order coins.reverse();// reverse it so highest number is first
    coins.reverse();
    
    while(counter > 0) {
    for(var i = 0; 1 < coinLen; i++) {
    if(coins[i] > counter) {
    stuck = true;
       continue;
       
    }
    
    stuck = false;
    counter -= coins[i];
    coinCount++;
    }
    
    if(stuck) {
    return -1;
    }
    }
    return coinCount;
    }
    // coinCount([1, 2, 5], 11); // 3
    // coinCount ([1, 2, 5, 10, 25, 501, 16); // 5
    // coinCount ([1, 2], 11); //
    coinCount ([2], 3); // -1
    