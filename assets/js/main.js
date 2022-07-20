
 function getStudents() {
    fetch('students.json')
    .then(response=>response.json())
    .then(data=>{
        let x = '';
        data.Students.forEach(item=>{
        
        x+=`
        <div class="col-lg-4">
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Fulname:${item.Name} ${item.Surname}</h5>
                    <h5 class="card-title">Age:${item.Age}</h5>
                    <h5 class="card-title">City:${item.City}</h5>                    
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis nobis minus fuga quisquam assumenda. Sunt perferendis iste illo porro.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
        document.getElementById("content").innerHTML=x;
        
    }
    )})
    .catch(err=>console.log(err))   
 }

//  function getPicture() {
//     fetch('https://randomuser.me/api/?results=10')
//     .then(response=>response.json())
//     .then(data=>{
//         let x = '';
//         data.results.forEach(item=>{
        
//         x+=`
//         <div class="col-lg-4">
//             <div class="card mb-3" style="max-width: 540px">
//               <div class="row g-0">
//                 <div class="col-md-4">
//                   <img src="${item.picture.large}" class="img-fluid rounded-start" alt="..." />
//                 </div>
//                 <div class="col-md-8">
//                   <div class="card-body">
//                     <h5 class="card-title">Fulname:</h5>
//                     <h5 class="card-title">Age:</h5>
//                     <h5 class="card-title">City:</h5>                    
//                     <p class="card-text">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis nobis minus fuga quisquam assumenda. Sunt perferendis iste illo porro.
//                     </p>
//                     <p class="card-text">
//                       <small class="text-muted">Last updated 3 mins ago</small>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         `
//         document.getElementById("content").innerHTML=x;
        
//     }
//     )})
//     .catch(err=>console.log(err))
//  }
getStudents();
// getPicture();
