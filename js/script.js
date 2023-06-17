// let numCardsToShow = 6;

// // getting url for all the cards



// const gettingUrl = async() =>{
//     const url =`/link.json`
//     const res = await fetch(url);
//     const data = await res.json();
//    const toolsData = data.data.tools
//     displayTools(toolsData.slice(0,numCardsToShow)); 
// }

// function sortByDateAndRedirect() {
//     // Perform sorting logic here
//     const gettingUrl = async() =>{
//       const url =`/link.json`
//       const res = await fetch(url);
//       const data = await res.json();
//       showDataByDate(data.data.tools);
  
//   }  

//   const showDataByDate =( tools ) => {

//     const itemsContainer = document.getElementById('items-container');
//     const showCards =   tools.sort((a, b) => {
//     const dateA = new Date(a.published_in);
//     const dateB = new Date(b.published_in);
//     return dateA - dateB;
//   });
//   }

//   gettingUrl()
    
//     window.location.href = "/sort.html";
//   }

// // display tools on home page
//  const displayTools = (tools) =>{
//    const toolsContainer = document.getElementById('ai-container');
//   //  const cardsToShow = tools.slice(0,6);
//    toolsContainer.textContent = '';
   

// // making cards

// tools.forEach( tool => {
//     const toolDiv = document.createElement('div');
//     toolDiv.classList.add('col');
// // feature list
//     const featureList = document.createElement('ol');
//     for(const feature in tools.features){
//         const item = [feature];
//         const li =document.createElement('li');
//         li.textContent=item[i];
//         featureList.appendChild(li);
//     }
//     // feature list ended 
    
    
//     // modal button 
//     const modalBtn = document.createElement('button')
//     modalBtn.setAttribute('type','button');
//     modalBtn.setAttribute('class','btn btn-light');
//     modalBtn.addEventListener('click',function(selectedTool){
//         return function(){
//             loadToolsDetails(selectedTool);
//         }
      
        
//     } (tool)) 
//     // card section 
//     toolDiv.innerHTML = `
//     <div class="card p-8 m-1">
//                     <img src="${tool.image}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">Features</h5>
//                       <ol class="feature-list">
//                       <li>${tool.features[0]}</li>
//                       <li>${tool.features[1]}</li>
//                       <li>${tool.features[2]}</li>
//                       <li>${tool.features[3]? feature: 'No data found'}</li>
//                       </ol>
//                      <div class = "border-top">
//                      <h5 class="card-title">${tool.name}</h5>
//                      <div class=" d-flex justify-content-between">
//                      <div class="d-flex ">
//                      <i class="fa-solid fa-calendar-days"></i>
//                      <p class="card-text">${tool.published_in}</p> 
//                      </div>

                     
//                      <button onclick="loadToolsDetails(${tool.id})" href="#" class="btn btn-outline-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right"></i></button>
//                      </div>
//                      </div>
//                     </div>
//                   </div>`;       
//                   toolDiv.appendChild(featureList);   
//         toolsContainer.appendChild (toolDiv);  
//             // stop spinner
//           // toggleSpinner(false)
//    }) 
// //    see more button section




//     // toggleSpinner(true);
// //     toggleSpinner(false);


// // spinner condition
//   //  const toggleSpinner = isLoading =>{
//   //   const loaderSection = document.getElementById('loader');
//   //   if(isLoading){
//   //       loaderSection.classList.remove('d-none')
//   //   }
//   //   else{
//   //       loaderSection.classList.add('d-none');
//   //   }
//   //  }
// }

// // load data for modals

// const loadToolsDetails =  id =>{
//     const url = `/link.json?id=${id}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data=>{
//      })
//     // displayDetails(data.data.tools);
// }

// // show modal

// const displayDetails = (tool) => {
//     const modalTitle = document.getElementById('modal-body-section');
//     modalTitle.innerHTML = ''; 
  
//     const toolDiv = document.createElement('div');
//     toolDiv.innerHTML = `
//       <div class="container width-full d-flex">
//         <div>
//           <div>
//             <p>${tool.description}</p>
//             <div>
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//             <ul>
//               ${tool.features.map((feature) => `<li>${feature}</li>`).join('')}
//             </ul>
//           </div>
//           <div>
//             <div class="card" style=";">
//               <img src="${tool.image}" class="card-img-top" alt="...">
//               <div class="card-body">
//                 <h3>${tool.name}</h3>
//                 <p class="card-text">${tool.published_in}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div></div>
//       </div>`;
  
//     modalTitle.appendChild(toolDiv);
//   };

//   if (tools.length < numCardsToShow) {
//     document.getElementById('btn-see-more').style.display = 'none'; 
//   }


// // Function to show all cards when the "See More" button is clicked

// document.getElementById('btn-see-more').addEventListener('click',function(){
//   numCardsToShow = Infinity
//   gettingUrl(); 
// })

// // function showAllCards(){
// //   gettingUrl()
// // };
// // showAllCards()

// gettingUrl()