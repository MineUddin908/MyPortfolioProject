// Get references
const cardContainer = document.getElementById('card-container');
const resetBtn = document.getElementById('reset-btn');

// Initial cards data
const cardsData = [
    {
      id: 1,
      title: "AI Sales Dashboard",
      desc: "An interactive BI dashboard built with Python, Power BI, and SQL that visualizes real-time sales data and KPIs."
    },
    {
      id: 2,
      title: "Cybersecurity Threat Monitor",
      desc: "A web-based system using Flask and APIs to track global cybersecurity threats and visualize attack trends."
    },
    {
      id: 3,
      title: "E-Commerce Analytics Tool",
      desc: "A tool for analyzing customer behavior and sales performance using Excel dashboards and predictive modeling."
    },
    {
      id: 4,
      title: "SQL Freelancer Insights",
      desc: "A PostgreSQL project that analyzes freelancer performance data using advanced JSONB and array queries."
    },
    {
      id: 5,
      title: "Portfolio Website",
      desc: "A responsive personal portfolio built with HTML, CSS, and JavaScript to showcase projects and skills."
    }
  ];
  

// Function to render cards
function renderCards(cards) {
  cardContainer.innerHTML = "";
  cards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
      <button class="delete-btn">Delete</button>
    `;
    
    // Add delete functionality
    cardDiv.querySelector(".delete-btn").addEventListener("click", () => {
      cardDiv.remove();
    });

    cardContainer.appendChild(cardDiv);
  });
}

// Reset button functionality
resetBtn.addEventListener("click", () => {
  renderCards(cardsData);
});

// Initial render
renderCards(cardsData);
