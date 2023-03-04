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
    
    
    
    const btn = document.createElement('button')
    btn.setAttribute('type','button');
    btn.setAttribute('class','btn btn-light');
    // btn.innerText = <i class="fa-solid fa-arrow-right"></i>;
    btn.addEventListener('click',function(){
        console.log('clicked')
        
    })
    toolDiv.innerHTML = `
    <div class="card p-4">
                    <img src="${tool.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Features</h5>
                      <ol class="feature-list">
                      <li>${tool.features[0]}</li>
                      <li>${tool.features[1]}</li>
                      <li>${tool.features[2]}</li>
                      <li>${tool.features[3]}</li>
                      </ol>
                     <div class = "border-top">
                     <h5 class="card-title">${tool.name}</h5>
                     <div class=" d-flex justify-content-between">
                     <div class="d-flex ">
                     <i class="fa-solid fa-calendar-days"></i>
                     <p class="card-text">${tool.published_in}</p> 
                     </div>

                     <button type="button" class="btn btn-light">${btn}<i class="fa-solid fa-arrow-right"></i></button>
                     </div>
                     </div>
                    </div>
                  </div>`;
                  

                   
                  toolDiv.appendChild(featureList);   
        toolsContainer.appendChild (toolDiv);  
            // stop spinner
          
   }) 

   toggleSpinner(false);
   document.getElementById('btn-see-more').addEventListener('click',function(){
    // start loader
    toggleSpinner(true);
    
   })

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

gettingUrl()