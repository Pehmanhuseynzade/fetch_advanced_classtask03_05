import { getAllCategories, getOrderList } from "./httprequests.js"
let customer = document.querySelector(".customer");
let orderbody = document.querySelector(".order");
let customerlist = document.querySelector(".customerlist")

getAllCategories().then((data)=>{
     data.forEach(item => {
          customer.innerHTML+=
          `<tr>
          <th scope="row">${item.id}</th>
          <td>${item.companyName}</td>
          <td>${item.contactName}</td>
          <td>${item.contactTitle}</td>
          <td>${item.address.region}</td>
        </tr>
          `
     });
});


getOrderList().then((data)=>{
     data.sort((x,y)=> new Date(x.orderDate)-new Date(y.orderDate));
     data.forEach(item => {
          let orderDate = item.orderDate.substring(0,10);
          orderbody.innerHTML+=
          `
          <tr>
          <td>${item.customerId}</td>
          <td>${item.employeeId}</td>
          <td>${orderDate}</td>
        </tr>
          `
     });
});

// getcustomerlist().then((data)=>{
//      // data.sort((x,y)=> new Date(x.orderDate)-new Date(y.orderDate));
//      data.forEach(item => {
//           // let orderDate = item.orderDate.substring(0,10);
//           orderbody.innerHTML+=
//           `
//           <tr>
//           <th scope="row">${item.id}</th>
//           <td>${item.customerId}</td>
//           <td>${item.employeeId}</td>
//           <td>${orderDate}</td>
//           <td>

          
//           </td>
//         </tr>
//           `
//      });
// });