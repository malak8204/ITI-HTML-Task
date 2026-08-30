const recipes = [
  { 
    title: "Bacon Double Cheese Burger Dip", 
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300", 
    category: "beef" 
  },
  { 
    title: "French Onion Soup Stuffed Mushrooms", 
    img: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=300", 
    category: "veg" 
  },
  { 
    title: "The Best Lasagna Ever", 
    img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300", 
    category: "pasta" 
  },
  { 
    title: "Easy Shepherd's Pie", 
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300", 
    category: "beef" 
  },
  { 
    title: "Patty Melts", 
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300", 
    category: "beef" 
  },
  { 
    title: "Pot Roast", 
    img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=300", 
    category: "beef" 
  },
  { 
    title: "In-N-Out's Double-Double", 
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300", 
    category: "beef" 
  },
  

  { 
    title: "Spicy Whiskey BBQ Sliders", 
    img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=300", 
    category: "beef" 
  },
  { 
    title: "Baked Ziti", 
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300", 
    category: "pasta" 
  }
];

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const recipeGrid = document.getElementById("recipeGrid");

function displayRecipes() {
  const searchVal = searchInput ? searchInput.value.toLowerCase() : "";
  const categoryVal = categorySelect ? categorySelect.value : "all";

  const filtered = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchVal);
    const matchesCategory = categoryVal === "all" || recipe.category === categoryVal;
    return matchesSearch && matchesCategory;
  });

  recipeGrid.innerHTML = filtered.map(item => `
    <div class="card">
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
    </div>
  `).join("");
}

if (searchInput) searchInput.addEventListener("input", displayRecipes);
if (categorySelect) categorySelect.addEventListener("change", displayRecipes);

displayRecipes();
