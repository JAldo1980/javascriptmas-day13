const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", renderRecipe);

// GET RECIPE FUNCTION
const outputElement = document.querySelector(".output");
// outputElement.innerHTML = "";

function renderRecipe() {
  const numberInput = parseInt(document.getElementById("number-input").value);

  if (isNaN(numberInput)) {
    alert("Please enter a value!");
  }

  if (vegetarian.checked && vegan.checked) {
    if (numberInput < 6) {
      outputElement.innerHTML = `
      <div class="card">
        <div class="box">
          <img src="/lentil-loaf.png" class="card-icon"/>
        </div>
          <div class="box">
            <h4>Festive Lentil Loaf Fiesta</h4>
            <p>Join us for a flavor-packed celebration with our Festive Lentil Loaf Fiesta. Our signature lentil loaf, infused with aromatic spices, is the star of the show. Complemented by quinoa-stuffed bell peppers, rosemary-infused roasted potatoes, and a tangy cranberry-orange sauce, this vegan feast promises a festive experience that satisfies both your taste buds and holiday spirit.</p>
            <a href="https://simple-veganista.com/the-ultimate-vegetable-lentil-loaf/">Alternative Recipe</a>
          </div>
      </div>  
      `;
    } else {
      outputElement.innerHTML = `
      <div class="card">
        <div class="box">
          <img src="/veg-curry-image.png" class="card-icon"/>
        </div>
          <div class="box">
            <h4>Roasted aubergine & tomato curry</h4>
            <p>Elevate your Christmas celebration with this Roasted Aubergine & Tomato Curry. It's a dish that is a flavorful and hearty vegetarian delight that combines the rich, smoky taste of roasted aubergine (eggplant) with the vibrant and tangy flavors of tomatoes in a curry. This is the epitome of holiday indulgence.</p>
            <a href="https://www.bbcgoodfood.com/recipes/roasted-aubergine-tomato-curry">Alternative Recipe</a>
          </div>
      </div>  
      `;
    }
  } else if (vegetarian.checked && !vegan.checked) {
    if (numberInput < 6) {
      outputElement.innerHTML = `
      <div class="card">
        <div class="box">
          <img src="/butternut-squash.png" class="card-icon"/>
        </div>
          <div class="box">
            <h4>Harvest Stuffed Butternut Squash Soiree</h4>
            <p>Join us for a celebration of flavors with our Harvest Stuffed Butternut Squash Soiree. The star of the table is a perfectly roasted butternut squash, generously stuffed with a medley of wild rice, quinoa, cranberries, and pecans. Accompanied by a side of balsamic-glazed Brussels sprouts and creamy goat cheese mashed sweet potatoes, this vegetarian delight promises a festive feast that captures the essence of the season.</p>
            <a href="https://www.loveandlemons.com/roasted-butternut-squash/">Alternative Recipe</a>
          </div>
      </div>  
      `;
    } else {
      outputElement.innerHTML = `
      <div class="card">
        <div class="box">
          <img src="/tofu-image.png" class="card-icon"/>
        </div>
          <div class="box">
            <h4>Crispy Baked Tofu Harmony</h4>
            <p>Join us for a celebration of flavors with our crispy oven tofu recipe. This meal transforms plain tofu into delightfully delicious pieces of tofu with a crisp and golden brown crust. this vegetarian delight promises a festive feast that captures the essence of the season.</p>
            <a href="https://cookieandkate.com/how-to-make-crispy-baked-tofu/">Alternative Recipe</a>
          </div>
      </div>  
      `;
    }
  } else if (!vegetarian.checked && vegan.checked) {
    if (numberInput < 6) {
      outputElement.innerHTML = `
      <div class="card">
        <div class="box">
          <img src="/pumpkin-image.png" class="card-icon"/>
        </div>
          <div class="box">
            <h4>Slow-cooker pumpkin soup</h4>
            <p>Add a touch of sophistication to your holiday table with our Cranberry-Glazed Duck Delight. The succulent duck is bathed in a tangy cranberry glaze, creating a symphony of flavors that dance on your palate. Accompanied by wild rice pilaf and roasted Brussels sprouts, this dish is a festive fusion of sweet and savory that will make your Christmas dinner memorable.</p>
            <a href="https://www.bbcgoodfood.com/recipes/slow-cooker-pumpkin-soup">Alternative Recipe</a>
          </div>
      </div>  
      `;
    } else {
      outputElement.innerHTML = `
      <div class="card">
        <div class="box">
          <img src="/mushroom-image.png" class="card-icon"/>
        </div>
          <div class="box">
            <h4>Mushroom and leek spaghetti Delight</h4>
            <p>Add a touch of sophistication to your holiday table with our Quick, zesty and fresh, this super-healthy vegan spaghetti makes for a super midweek option. Add squeezed lemon juice to the dish to complement the fried mushrooms then finish with a scattering of crispy breadcrumbs for the final flourish, this dish is a festive fusion of flavours that will make your Christmas dinner memorable.</p>
            <a href="https://www.riverford.co.uk/recipes/mushroom-leek-pasta">Alternative Recipe</a>
          </div>
      </div>  
      `;
    }
  } else {
    if (numberInput < 6) {
      outputElement.innerHTML = `
      <div class="card">
        <div class="box">
          <img src="/lamb-image-4.png" class="card-icon"/>
        </div>
          <div class="box">
            <h4>Rosemary-Scented Lamb Leg Roast</h4>
            <p>Experience the warmth of the season with our Rosemary-Scented Lamb Leg Roast. Slow-roasted to perfection, the lamb is infused with aromatic rosemary and garlic, creating a dish that is both elegant and comforting. Served alongside minted pea puree and roasted root vegetables, this Christmas dinner option is a delightful blend of tradition and culinary finesse</p>
            <a href="https://www.bbcgoodfood.com/recipes/roast-lamb-studded-rosemary-garlic">Alternative Recipe</a>
          </div>
      </div>  
      `;
    } else {
      outputElement.innerHTML = `
      <div class="card">
        <div class="box">
          <img src="/turkey-image-6.png" class="card-icon"/>
        </div>
          <div class="box">
            <h4>Gilded Turkey Gala: A Feast of Festive Flavors</h4>
            <p>Celebrate the holiday season with our Golden Roast Turkey Extravaganza, a masterpiece that embodies the essence of Christmas feasting. The star of the show is a succulent turkey, expertly roasted to a golden perfection. The crispy skin gives way to juicy, tender meat that will leave your guests craving more. Complemented by traditional sage stuffing, velvety mashed potatoes, and cranberry-orange relish, this festive turkey dinner is a symphony of classic flavors that will make your Christmas memorable</p>
            <a href="https://cafedelites.com/roast-turkey/">Alternative Recipe</a>
          </div>
      </div>  
      `;
    }
  }
  clearValue();
}

// CLEAR VALUE FUNCTION

function clearValue() {
  let numberInputValue = document.getElementById("number-input");

  numberInputValue.value = "";
}
