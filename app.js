import { initializeApp, getFirestore, collection, addDoc, doc, updateDoc, onSnapshot,setDoc,arrayUnion ,arrayRemove} from "./firebase.js"
const db = getFirestore();
// const app = initializeApp();
let blog = document.getElementById("blog")
let blogTittle = document.getElementById("blog-tittle")
let blogBtn = document.getElementById("blog-btn");
let blogList = document.getElementById ("blog-list")
let logoutBtn = document.getElementById("logout-btn");
let logout = ()=>{
   localStorage.clear()
   location.href = "./signup.html"
}
logoutBtn.addEventListener("click",logout)
// let arrUserdata = [];
if (location.pathname == "/index.html")  {
    let blogFunc = async () => {
        
        console.log(blog.value)
        console.log(blogTittle.value)
        let userUpadadeData = {
            blogValue: blog.value,
            blogTittleValue: blogTittle.value
        }
   
const washingtonRef = doc(db, "users",localStorage.getItem("usersId") );

// Atomically add a new region to the "regions" array field.
await updateDoc(washingtonRef, {
 regions: arrayUnion(userUpadadeData)
}); 
    }
    blogBtn.addEventListener("click", blogFunc);
}

// console.log(location.pathname)
if (location.pathname == "/index.html") {
    let blogGetData = () => {
        const unsub = onSnapshot(doc(db, "users", localStorage.getItem("usersId")), (doc) => {
            // showName.innerHTML = doc.data().signup_name_value;
            doc.data().regions.map((v,i)=>{
                blogList.innerHTML += `<li>
                    <div class="blog-show">
                         
                    <div class="pic-tittle">
                    <input style="display:none;" type="text">
                        <div class="blog-profile-pic">
                         <img id="blog-page-image" src="${doc.data().photoUrl}" alt="">
                       </div>
                         <div>
                        <h3 id="show-blog-tittle">${v.blogTittleValue}</h3>
                     <span id="show-name">${doc.data().signup_name_value}</span>
                    <span>12-2-2024</span>
                 </div>
                    </div>
                <div>
                       <p id="show-blog">${v.blogValue}</p> 
                         <button  class="btn btn-success" onclick="editBlog(this)">Edit</button>
                 <button class="btn btn-success" onclick="deleteBlog(this)">Delete</button>
                 <button class="btn btn-success" onclick="updateBlog(this)">Update</button>
                    </div>
                 </div>
              
                 </li>
                     `
                console.log(v)
            })
          
            console.log("Current data: ", doc.data());
            console.log("Current data: ", doc.data());
        });
    }
    blogGetData();
}

let deleteBlog=(e)=>{


console.log(e)
}
let editBlog= async(e)=>{
    e.parentNode.parentNode.childNodes[1].childNodes[1].style.display ="block";
    console.log(e.parentNode.parentNode.childNodes[1].childNodes[1])

    }
    let updateBlog=async(e)=>{ 
        
      e.parentNode.parentNode.childNodes[1].childNodes[1].style.display ="none";
   let blog =  e.parentNode.parentNode.childNodes[1].childNodes[1];
   console.log(blog.value)
       console.log() 
       const washingtonRef = doc(db, "users",  localStorage.getItem("usersId"));
    // await updateDoc(washingtonRef, {
    //         regions: arrayUnion({blogValue: blog.blogValue.value})
    //     });
        
        //   Atomically remove a region from the "regions" array field.
        await updateDoc(washingtonRef, {
            regions: arrayRemove({blogValue:blog.value})
        });
        // console.log(e)
        }
    window.deleteBlog = deleteBlog;
    window.editBlog = editBlog;
    window.updateBlog = updateBlog;