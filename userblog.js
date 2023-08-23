
// alert("hello")
// import { singleUser } from "./allblog.js";
export{singleUser}
let singleUser = (e) =>{
      console.log(e)
    // const unsub = onSnapshot(doc(db, "users", e), (doc) => {
    //     console.log("Current data: ", doc.data());
        location.href = "./userblog.html"
    // });
}
window.singleUser = singleUser ;
// if(location.pathname == "./allblog.html"){
//     singleUserSelect.addEventListener("click",singleSelect)
// }
// console.log(singleUser())
// let allBlog = ()=>{
//     // localStorage.setItem("usersId",uid)
//     let sigleDoc  = localStorage.getItem("usersId") ;
// // console.log(id)
// // 
//     const q = query(collection(db, "users"), where( "userId", "!=", sigleDoc));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       snapshot.docChanges().forEach((change) => {
       
//         console.log(change.doc.data())
//       });
//     });

// }
// allBlog()