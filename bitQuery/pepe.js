import { Headers } from 'node-fetch';
import fetch from 'node-fetch';
import fs from 'fs';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-API-KEY", "BQYpP07bxssOZMCb5JcMHFT66UEBe3j7");

var raw = JSON.stringify({
   "query": "query ($network: EthereumNetwork!, $token: String!, $limit: Int, $offset: Int, $from: ISO8601DateTime, $till: ISO8601DateTime) {\n  ethereum(network: $network) {\n    transfers(\n      currency: {is: $token}\n      date: {since: $from, till: $till}\n      height: {gt: 1}\n      amount: {gt: 0}\n      options: {desc: \"amount\", limit: $limit, offset: $offset}\n    ) {\n      receiver {\n        address\n        annotation\n      }\n      currency {\n        symbol\n      }\n      amount\n      amount_usd: amount(in: USD)\n      count\n      sender_count: count(uniq: senders)\n      max_amount: maximum(of: amount, get: amount)\n      max_date: maximum(of: date)\n    }\n  }\n}\n",
   "variables": "{\n  \"limit\": 200,\n  \"offset\": 0,\n  \"network\": \"ethereum\",\n  \"token\": \"0x6982508145454ce325ddbe47a25d4ec3d2311933\",\n  \"from\": \"2023-04-25\",\n  \"till\": \"2023-05-02T23:59:59\",\n  \"dateFormat\": \"%Y-%m-%d\"\n}"
});

var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow'
};

fetch("https://graphql.bitquery.io", requestOptions)
   .then(response => response.text())
   .then(result => {
      // JSON.parse(result);
      // Convert data to JSON string
      const resultObj = JSON.parse(result);
      const resultJSON = JSON.stringify(resultObj,null,4);

      // Write the JSON string to a file (e.g. 'data.json')
      fs.writeFile('data.json', resultJSON, function (err) {
         if (err) {console.log(err)};
         console.log('Data saved to file');
      });
   })
   .catch(error => console.log('error', error));