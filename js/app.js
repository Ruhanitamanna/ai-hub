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
              <button onclick="loadToolsDetails(${tool.id})" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

  const loadToolsDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        displayDetails(data.data.tool);
      });
  };

 // show modal

 const displayDetails = (tool) => {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '';
  
    const toolDiv = document.createElement('div');
    toolDiv.innerHTML = `
      <div class="container width-full d-flex">
        <div>
          <p>${tool.description ? tool.description : ''}</p>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul>
            ${tool.features.map((feature) => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="card">
            <img src="${tool.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h3>${tool.name}</h3>
              <p class="card-text">${tool.published_in}</p>
            </div>
          </div>
        </div>
      </div>`;
  
    modalBody.appendChild(toolDiv);
  };



  

   gettingToolsData().catch((error) => {
    console.error(error);
  });
