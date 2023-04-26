// const saltRounds = 10;

// const axios = require('axios');
// const user = require("../../modals/user.modal");
// const userMenu = require("../../modals/userMenu.modal");
// // const userServices = require("../../modals/userServices.modal");
// exports.getAllUsers = async (req, res, next) => {

//     try {

//         const Task = await userMenu.find({ perentMenu: req.params.id });

//         res.send(Task);
//     } catch (err) {
//         throw new Error(err);
//     }
// }


// exports.sendMessage = async (req, res, next) => {
//     var menuData = [];
//     var newMsg1 = req.body.message;
//     var newMsg;


//     const str2 = newMsg1.charAt(0).toUpperCase() + newMsg1.slice(1);

//     newMsg = str2;
// var getMeth=0;
// console.log("req.body",req.body)
//     var data = {

//         "api_key":req.body.api_key,
//         "sender": 919354869926,
//         "number": req.body.number,
//         "message": newMsg
//     }
//     var url;
//     var obj;


//     const Task1 = await userMenu.find({ perentMenu: data.message })
  
// if((Task1.length === 0)){
 
//     const userData = await userMenu.find({ menuTitle: Task1.perentMenu })
   
//     if((data.message != "Hi") && (userData.length === 0)){
//         getMeth=0
//         obj = {
//             "api_key": data.api_key,
//             "sender": data.sender,
//             "number": data.number,

//             "message": "Wellcome to " + data.message
//         }
//         url = "https://api.watzapi.xyz/send-message"; 
     
//     }
    
//     else{
     
//             var obj2;
//             var obj3;
//             const Task = await userMenu.find({ perentMenu: "Menu" });

//             Task.forEach((item, index) => {
//                 let d = index + 1;
//                 const dynamicKey = "list" + d
//                 const myObj = {};

//                 myObj[dynamicKey] = item.menuTitle;
//                 menuData.push(myObj);
//                 obj2 = menuData;
//             });
//             obj2.forEach((item, index) => {

//                 obj3 = { ...obj3, ...item };
//             })
//             obj1 = {
//                 "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
//                 "sender": data.sender,
//                 "number": data.number,
//                 "footer": "You are in main menu",
//                 "message": "Wellcome to Chat Bot CRM.\r\n Please Select the options",
//                 "name": "Main Menu",
//                 "title": "Main Menu",

//             }

//             obj = { ...obj3, ...obj1 };
//             getMeth=1
//             url = "https://api.watzapi.xyz/send-list"
//         }
// }
// else{
    
//     getMeth=1;
//     var obj2;
//     var obj3;
//     const Task = await userMenu.find({ perentMenu: data.message });

//     Task.forEach((item, index) => {
//         let d = index + 1;
//         const dynamicKey = "list" + d
//         const myObj = {};

//         myObj[dynamicKey] = item.menuTitle;
//         menuData.push(myObj);
//         obj2 = menuData;
//     });
//     obj2.forEach((item, index) => {

//         obj3 = { ...obj3, ...item };
//     })
//     obj1 = {
//         "api_key": data.api_key,
//         "sender": data.sender,
//         "number": data.number,
//         "footer": "You are in "+ data.message,
//         "message": "Please Select the options ",
//         "name": data.message + " Menu",
//         //"title": "Support",
//         "title": data.message,

//     }

//     obj = { ...obj3, ...obj1 };
//     getMeth=1;
//     url = "https://api.watzapi.xyz/send-list"
// }
// // getMeth=0
  


// if(getMeth==0){
//    console.log(obj)
//     url1="https://api.watzapi.xyz/send-message?api_key=9wfDCDPIQAHLxWR3IkwVOWyovy2Gm7&sender="+obj.sender+"&number="+obj.number+"&message="+obj.message
//     axios.get(url1)
// .then(response => {
//     res.json({
//         status: true,
//         message: "Message deliver successfully"
//     });
// })
// .catch(error => {
//     res.json(error)
// });
// }
// else{
//     console.log(obj)
//     url1="https://api.watzapi.xyz/send-list?api_key=9wfDCDPIQAHLxWR3IkwVOWyovy2Gm7&sender="+obj.sender+"&number="+obj.number+"&footer="+"ok"+"&message="+obj.message+"&name="+"Menu"+"&title="+"Account Creation"+"&list1="+"option 1"+"&list2="+"option 2"+"&list3="+"option 3"+"&list4="+"option 4"
//     axios.get(url1)
// .then(response => {
//     res.json({
//         status: true,
//         message: "Message deliver successfully"
//     });
// })
// .catch(error => {
//     res.json(error)
// });
// }



// }


const saltRounds = 10;

const axios = require('axios');
const user = require("../../modals/user.modal");
const userMenu = require("../../modals/userMenu.modal");
// const userServices = require("../../modals/userServices.modal");
exports.getAllUsers = async (req, res, next) => {

    try {

        const Task = await userMenu.find({ perentMenu: req.params.id });

        res.send(Task);
    } catch (err) {
        throw new Error(err);
    }
}


exports.sendMessage = async (req, res, next) => {
    var menuData = [];
    var newMsg1 = req.body.message;
    var newMsg;
var listData="";

    const str2 = newMsg1.charAt(0).toUpperCase() + newMsg1.slice(1);

    newMsg = str2;
var getMeth=0;


    var data = {

        "api_key":req.body.api_key,
        "sender": 919354869926,
        "number": req.body.number,
        "message": newMsg
    }
    var url;
    var obj;


    const Task1 = await userMenu.find({ perentMenu: data.message })
  
if((Task1.length === 0)){
 
    const userData = await userMenu.find({ menuTitle: Task1.perentMenu })
   
    if((data.message != "Hi") && (userData.length === 0)){
        getMeth=0
        obj = {
            "api_key": data.api_key,
            "sender": data.sender,
            "number": data.number,

            "message": "Wellcome to " + data.message
        }
        url = "https://api.watzapi.xyz/send-message"; 
     
    }
    
    else{
     
            var obj2;
            var obj3;
            const Task = await userMenu.find({ perentMenu: "Menu" });

            Task.forEach((item, index) => {
                let d = index + 1;
                const dynamicKey = "list" + d
                const myObj = {};

                myObj[dynamicKey] = item.menuTitle;
                menuData.push(myObj);
                obj2 = menuData;
            });
            obj2.forEach((item, index) => {

                obj3 = { ...obj3, ...item };
            })
            obj1 = {
                "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
                "sender": data.sender,
                "number": data.number,
                "footer": "You are in main menu",
                "message": "Wellcome to Chat Bot CRM.\r\n Please Select the options",
                "name": "Main Menu",
                "title": "Main Menu",

            }

            obj = { ...obj3, ...obj1 };
            getMeth=1
            url = "https://api.watzapi.xyz/send-list"
        }
}
else{
    
    getMeth=1;
    var obj2;
    var obj3;
    const Task = await userMenu.find({ perentMenu: data.message });

    Task.forEach((item, index) => {
        let d = index + 1;
        const dynamicKey = "list" + d
        const myObj = {};
      
        
        listData=listData+"&list"+index+"="+item.menuTitle
       
        
        myObj[dynamicKey] = item.menuTitle;
        menuData.push(myObj);
        obj2 = menuData;
    });
    
    
    obj2.forEach((item, index) => {

        obj3 = { ...obj3, ...item };
    })
    obj1 = {
        "api_key": data.api_key,
        "sender": data.sender,
        "number": data.number,
        "footer": "You are in "+ data.message,
        "message": "Please Select the options ",
        "name": data.message + " Menu",
        //"title": "Support",
        "title": data.message,

    }

    obj = { ...obj3, ...obj1 };
    let data111111=JSON.stringify(obj)
  
    getMeth=1;
    url = "https://api.watzapi.xyz/send-list"
}
// getMeth=0
  


if(getMeth==0){
//    console.log(obj)
    url1="https://api.watzapi.xyz/send-message?api_key=9wfDCDPIQAHLxWR3IkwVOWyovy2Gm7&sender="+obj.sender+"&number="+obj.number+"&message="+obj.message
    axios.get(url1)
.then(response => {
    res.json({
        status: true,
        message: "Message deliver successfully"
    });
})
.catch(error => {
    res.json(error)
});
}
else{
   
  
    url1="https://api.watzapi.xyz/send-list?api_key=9wfDCDPIQAHLxWR3IkwVOWyovy2Gm7&sender="+obj.sender+"&number="+obj.number+"&footer="+"ok"+"&message="+obj.message+"&name="+"Menu"+"&title="+"Account Creation"+listData
   
  
    axios.get(url1)
.then(response => {
    res.json({
        status: true,
        message: "Message deliver successfully"
    });
})
.catch(error => {
    res.json(error)
});
}



}