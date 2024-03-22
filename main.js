// run this in a browser console
async function bid() {
    console.log("Starting to bid");
    // Select the element using its CSS selector
    let bidButton = document.querySelector('#root > div > div.whomemain > div > div.whbiddingcontent > div.whbiddingitem.whbiddingright > div.whbidcontent > div > div.whsecpro-content.whpricecontent > div.whraise-box > div:nth-child(6) > div');
    //if bidButton is null, then keep retrying until it is not null
    while (bidButton === null) {
        console.log("bid button is null, waiting 0.5 seconds");
        await new Promise(r => setTimeout(r, 500));
        bidButton = document.querySelector('#root > div > div.whomemain > div > div.whbiddingcontent > div.whbiddingitem.whbiddingright > div.whbidcontent > div > div.whsecpro-content.whpricecontent > div.whraise-box > div:nth-child(6) > div');
    }
    // trigger the elements onclick event
    console.log("bid button found, starting to bid");
    while (true) {
        if (bidButton.innerText === "+300") {
            console.log("clicking bid button");
            bidButton.click();
            //wait randomly between 0.5 and 1 seconds
        }
        const random = Math.random() * (1000 - 500) + 500;
        console.log(`waiting ${random} milliseconds`);
        await new Promise(r => setTimeout(r, random));
    }
}


bid();
