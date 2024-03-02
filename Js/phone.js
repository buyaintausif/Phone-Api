const loadphone = async (searchText, isShowAll) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await response.json();
  const phones = data.data;
  getPhone(phones, isShowAll);
};


// set display elements

const getPhone = (phones,isShowAll) => {
    const phoneContainer=document.getElementById('phone-container') ;
    phoneContainer.innerText='';
    

    //limit the button show 

    const showAllContainer = document.getElementById('show-all-container');

    if(phones.length > 12 && !isShowAll){

      showAllContainer.classList.remove('hidden');

    }else{
      showAllContainer.classList.add('hidden');
    }

    console.log('is show all ',isShowAll)


   

    // display limited item from api array

    if(!isShowAll){
      phones =phones.slice(0,12);
    }





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

  //stop loading

  toggleLoadingSpiner(false);
};


// handel search button

const searchHandle= (isShowAll) => {

  toggleLoadingSpiner(true);
  const searchField = document.getElementById('search-field');
  const inputValue= searchField.value;
  console.log(inputValue);

  loadphone(inputValue,isShowAll);
  
}

// const searchHandle2=()=>{
//   toggleLoadingSpiner(true);
//   const searchField = document.getElementById('search-field2');
//   const inputValue= searchField.value;
//   loadphone(inputValue);
  
// }




const toggleLoadingSpiner= (isLoading) =>{
  const loadingSpiner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpiner.classList.remove('hidden');

  }else{
    loadingSpiner.classList.add('hidden');

  }
  
}


//Hande Showall

const handleShowAll= () =>{
  searchHandle(true);

}

// loadphone();
