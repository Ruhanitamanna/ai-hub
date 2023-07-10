// get url for loading cards
let toolsData = [];
let initialCardLimit = 6;

const gettingToolsData = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  toolsData = data.data.tools;
  displayData(toolsData.slice(0, initialCardLimit));
};

const showAllCards = () => {
    const toolsContainer = document.getElementById('ai-container');
    toolsContainer.textContent = '';
    displayData(toolsData);
  };

  const sortAndShowData = () => {
    const sortedData = toolsData.slice().sort((a, b) => {
      const dateA = new Date(a.published_in);
      const dateB = new Date(b.published_in);
      return dateA - dateB;
    });
    localStorage.setItem('sortedToolsData', JSON.stringify(sortedData));
    window.location.href = '/js/sorted-data.html';
  };
  

// display data on home page
const displayData = (tools) => {
  const toolsContainer = document.getElementById('ai-container');
  const spinner = document.getElementById('spinner');
  toolsContainer.textContent = '';

  tools.forEach((tool) => {
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('col');
    

    const featureList = document.createElement('ol');
    for (const feature in tool.features) {
      const item = tool.features[feature];
      const li = document.createElement('li');
      li.textContent = item;
      featureList.appendChild(li);
     
    }

    toolDiv.innerHTML = `
      <div class="card p-8 m-1">
        <img src="${tool.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <ol class="feature-list">
            ${featureList.innerHTML}
          </ol>
          <div class="border-top">
            <h5 class="card-title">${tool.name}</h5>
            <div class="d-flex justify-content-between">
              <div class="d-flex">
                <i class="fa-solid fa-calendar-days"></i>
                <p class="card-text">${tool.published_in}</p>
              </div>
              <button onclick="loadDetails('${tool.id}')" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            </div>
          </div>
        </div>
      </div>`;

    toolsContainer.appendChild(toolDiv);
  });


  spinner.style.display = 'none';

  const seeMoreButton = document.querySelector('.btn-primary');
  if (tools.length >= toolsData.length) {
    seeMoreButton.style.display = 'none';
  } else {
    seeMoreButton.style.display = 'block';
  }
};



  // load data for modals

  const loadDetails= async id =>{
   const url=  `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    
   const res = await fetch(url);
   const data = await res.json();
   displayDetails(data.data);
    

  }
 

 // show modal

 const displayDetails = item =>{
  console.log(item)
  const itemDetails = document.getElementById('item-details');
  

  

  itemDetails.innerHTML=`
  <div class='d-flex p-2'>
      <div class='boarder boarder-warning rounded p-2'>
          <h6>${item.description ? item.description : 'No Description'}<h6/>
          
          
          <div class='d-flex justify-content-around m-2'>
              
              <div class='border border-warning rounded p-2'>
               
                <p>${item.pricing[0].price}</p>
                <p>${item.pricing[0].plan}</p>
                

              </div>
              <div class='border border-warning rounded p-2'>
                  <p>${item.pricing[1].price}</p>
                  <p>${item.pricing[1].plan}</p>
              </div>
              <div class='border border-warning rounded p-2'>
                  <p>${item.pricing[2].price}</p>
                  <p>${item.pricing[2].plan}</p>
              </div>


          </div>

          <div class='d-flex'>
            <div>
            <h4> Features</h4>
              <ul>
                <li>${item.use_cases[0].name ? item.use_cases[0].name : 'no data found'}</li>
                <li>${item.use_cases[1].name ? item.use_cases[1].name : 'no data found'}</li>
                <li>${item.use_cases[2].name ? item.use_cases[2].name : 'no data found'}</li>
                
              </ul>
            </div>
            <div>
            <h4> Integrations </h4>
               <ul>
                  <li>${item.integrations[0] ? item.integrations[0] :' no data found'}</li>
                  <li>${item.integrations[1] ? item.integrations[1] :' no data found'}</li>
                  <li>${item.integrations[2] ? item.integrations[2] :' no data found'}</li>
                  <li>${item.integrations[3] ? item.integrations[3] :' no data found'}</li>
                  <li>${item.integrations[4] ? item.integrations[4] :' no data found'}</li>
                  
                </ul>
            </div>


          </div>
      </div>
      <div>
          <div class="card" style="width: 18rem;">
              <img src=${item.image_link[0] ? item.image_link[0] :'no Image Found'} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Hi, how are you doing today?</h5>
              <p class="card-text">I'm doing well, thank you for asking. How can I assist you today?</p>
    
            </div>
          </div>
        </div>
  </div>
  
  `
 }


  
  



  loadDetails()

   gettingToolsData().catch((error) => {
    console.error(error);
  });
