   /////////////////////////////////////Blockchain post request/////////////////////////////
    async function blockchainEntry(id,temp,ph,cc,ec,createdBy,time_format)
    {
        console.log(id,temp,ph,cc,ec,createdBy,time_format)
        
        const object={assetId:id,
        temperature:temp,
        ph:ph,
        createdBy:createdBy,
        cc:cc,
        ec:ec,
        timestamp:time_format

           }
        const response=await fetch("http://localhost:3200/createAsset",{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(object)
        })

let result= await response;


if(result.statusText==='Created')
console.log(" New data has inserted into blockchain")
       
       

    }

    module.exports = {
        blockchainEntry
    };
