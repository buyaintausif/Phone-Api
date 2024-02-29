const loadphone = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );

  const data = await response.json();
  const phones = data.data;
  getPhone(phones);
};

const getPhone = (phones) => {
    const phoneContainer=document.getElementById('phone-container') ;
  for (const phone of phones) {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList ='card w-96 bg-gray-100 shadow-xl';

    phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

        `;

        phoneContainer.appendChild(phoneCard);
  }
};

loadphone();
