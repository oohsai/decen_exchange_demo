import express from "express";

const app = express();

let ETH_BAL = 200;
let USDC_BAL = 790000;

//app.post("/add-liqudity", (req, res) => {
//})

app.post("/buy-asset", (req, res) => {
    const product = ETH_BAL * USDC_BAL;
    const quantity = req.body.quantity;
    const updatedEthQuanity  = ETH_BAL - quantity;
    const updatedUSDCbalance = ETH_BAL * USDC_BAL / updatedEthQuanity;
    const paidAmount = updatedUSDCbalance - USDC_BAL;

    ETH_BAL = updatedEthQuanity;
    USDC_BAL = updatedUSDCbalance;

    res.json({
        message : `You paid ${paidAmount} USDC for ${quantity} ETH`
    })
})

app.post("/sell-asset", (req, res) => {

    const quantity = req.body.quantity;
    const updatedEthQuanity  = ETH_BAL  + quantity;
    const updatedUSDCbalance = ETH_BAL * USDC_BAL / updatedEthQuanity;
    const gottenUSDC = USDC_BAL - updatedUSDCbalance ;

    ETH_BAL = updatedEthQuanity;
    USDC_BAL = updatedUSDCbalance;

    res.json({
        message : `You got ${gottenUSDC} USDC for ${quantity} ETH`
    })

})

app.post("/quote", (req, res) => {
})

app.listen(3000);