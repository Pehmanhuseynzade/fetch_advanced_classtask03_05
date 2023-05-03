import { API_BASE_URL } from "./baseURL.js";

export async function getAllCategories() {
     let globalData;
     await fetch(`${API_BASE_URL}/suppliers`)
     .then(response => response.json())
     .then(data => {
        globalData = data;
     })
     return globalData;
 }

 export async function getOrderList() {
     let globalData;
     await fetch(`${API_BASE_URL}/orders`)
     .then(response => response.json())
     .then(data => {
        globalData = data;
     })
     return globalData;
 }


 export async function getcustomerlist() {
     let globalData;
     await fetch(`${API_BASE_URL}/orders`)
     .then(response => response.json())
     .then(data => {
        globalData = data;
     })
     return globalData;
 }