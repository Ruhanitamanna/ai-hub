// getting url

const gettingUrl = async() =>{
    const url =`link.json`
    const res = await fetch(url);
    const data = await res.json();
    displayTools(data.data.tools);

}



// display tools
 const displayTools = tools =>{
   const toolsContainer = document.getElementById('ai-container');
   toolsContainer.textContent = '';
   tools = tools.slice(0,6);

   const sortButton = document.getElementById('sort-button');
   sortButton.addEventListener('click',function(){
    const toolsArray = [tools.published_in
    ]
    // console.log('toolsArray')
   })


// making cards

   tools.forEach( tool => {
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('col');
// feature list
    const featureList = document.createElement('ol');
    for(const feature in tools.features){
        const item = [feature];
        const li =document.createElement('li');
        li.textContent=item[i];
        featureList.appendChild(li);
    }
    // feature list ended 
    
    
    // modal button 
    const btn = document.createElement('button')
    btn.setAttribute('type','button');
    btn.setAttribute('class','btn btn-light');
    btn.addEventListener('click',function(){
        console.log('clicked');    
    })
    // card section 
    toolDiv.innerHTML = `
    <div class="card p-4">
                    <img src="${tool.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Features</h5>
                      <ol class="feature-list">
                      <li>${tool.features[0]}</li>
                      <li>${tool.features[1]}</li>
                      <li>${tool.features[2]}</li>
                      <li>${tool.features[3]? features: 'No data found'}</li>
                      </ol>
                     <div class = "border-top">
                     <h5 class="card-title">${tool.name}</h5>
                     <div class=" d-flex justify-content-between">
                     <div class="d-flex ">
                     <i class="fa-solid fa-calendar-days"></i>
                     <p class="card-text">${tool.published_in}</p> 
                     </div>

                     
                     <button onclick="loadToolsDetails(${tool.id})" href="#" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>
                     </div>
                     </div>
                    </div>
                  </div>`;       
                  toolDiv.appendChild(featureList);   
        toolsContainer.appendChild (toolDiv);  
            // stop spinner
          
   }) 
//    see more button section
   document.getElementById('btn-see-more').addEventListener('click',function(){
    displayTools(tools.tool)
    // start loader
    toggleSpinner(true);
    toggleSpinner(false);
})

// spinner condition
   const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
   }
}

const loadToolsDetails = async id =>{
    const url = ` https://openapi.programming-hero.com/api/ai/tool/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.data);
}

const displayDetails = tool =>{
console.log(tool);
const modalTitle = document.getElementById('modal-body-section');
modalTitle.innerHTML = `
<div class="container width-full d-flex">
<div>
    <div>
        <p>${tool.description}<p/>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul>
            <li>${tool.features.id}</li>
            <li>${tool.features.id}</li>
            <li>${tool.features.id}</li>
        </ul>
    
    </div>
    <div>
    <div class="card" style=";">
  <img src="${tool.image_link[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></div>
</div>
<div></div>



</div>`


}
gettingUrl()