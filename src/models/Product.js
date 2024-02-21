import axios from "axios";

class ProductModel {
    apiUrl = 'https://6083df209b2bed00170404a0.mockapi.io/api';
    // Lấy tất cả dữ liệu
    all(){
        return new Promise( ( resolve,reject ) => {
            axios.get( this.apiUrl+"/products" ).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
    // lấy 1 dữ liệu
    find( id ){
        return new Promise( ( resolve,reject ) => {
            axios.get( this.apiUrl + '/products/' + id ).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
   
}

export default new ProductModel;