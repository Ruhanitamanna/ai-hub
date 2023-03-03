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
//    toolsContainer.textContent = '';

tools = tools.slice(0,6)
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
    btn.setAttribute('class','btn btn-primary');
    btn.innerHTML = `Modal`;
    btn.addEventListener('click',function(){
        console.log('btn clicked');
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
                     <div>
                     <i class = "fas fa-star"></i>
                     <p class="card-text">${tool.published_in}</p> 
                     </div>
                     </div>
                    </div>
                  </div>`;
                  

                   
                  toolDiv.appendChild(featureList);   
        toolsContainer.appendChild (toolDiv);      
   }) 

   document.getElementById('btn-see-more').addEventListener('click',function(){

   })
}

gettingUrl()