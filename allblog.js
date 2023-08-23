import { getFirestore,collection, query, where, onSnapshot,doc } from "./firebase.js"
import { singleUser } from "./userblog.js";
// export {allBlog}
const db = getFirestore();
let singleUserSelect = document.getElementById("single-select");
let allBlogList = document.getElementById("all-blog-list");

// console.log(singleUserSelect)
let allBlog = ()=>{
    // localStorage.setItem("usersId",uid)
    let sigleDoc  = localStorage.getItem("usersId") ;
// console.log(id)
    return new Promise((resolve, reject) => {
        
        const q = query(collection(db, "users"), where( "userId", "!=", sigleDoc));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {

                // for (let i = 0 ; i < change.doc.data().regions.length ; i++ ){
                    //     console.log(i)
                    // }
                    // allBlog.innerHTML = ` <div class="allblog-image mt-2"><img src="${change.doc.data().photoUrl}" alt=""> </div>`
                    change.doc.data().regions.map((v,i) => {
                        console.log(change.doc.data().photoUrl)
                        change.doc.data().regioners.map(photo =>{ console.log(photo)
                        // console.log(v)
                        if( location.pathname == "/allblog.html"){allBlogList.innerHTML += `
                        <div class="all-blog-main ms-3" >
                        <div class="allblog-image-name-parent ">
                        
                        <div class="allblog-image mt-2"><img src="${photo}" alt=""> </div>
                      <div class="allblog-user-name mt-4" ><h2 class="ps-2 fs-4">${v.blogTittleValue}</h2>
                        <span class="fs-6">${change.doc.data().signup_name_value}</span>
                        <span>12-12-2024</span>
                        </div>
                        </div>
                        <div class="all-blog-value mt-2">
                        <p class="ms-4 mt-3"> ${v.blogValue}</p>
                        <button class="btn btn-success" onclick="singleUser('${change.doc.data().userId}')" id="single-select">user</button>
                        </div>
                        </div>
                        `
                    }
                    })
                })
                    // let arr =  [change.doc.data().userId]
                    // resolve(arr)
                    // allBlog(change.doc.data().userId)
                    // change.doc.data().regions.map( v => console.log(v))
                    // console.log( change.doc.data().regions) 
                    console.log(change.doc.data())
            });
        });
        
    })
}

allBlog()
// export{singleUser}
// let singleUser = (e) =>{
//     //   console.log(e)
//     // const unsub = onSnapshot(doc(db, "users", e), (doc) => {
//     //     console.log("Current data: ", doc.data());
//         // location.href = "./userblog.html"
//     // });
// }
// window.singleUser = singleUser ;
// // if(location.pathname == "./allblog.html"){
// //     singleUserSelect.addEventListener("click",singleSelect)
// // }
