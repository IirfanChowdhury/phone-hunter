// handle mouse over timeOut
let mouseoverTimeout;
const homeHover = document.getElementById('home-hover')
const homeHover2 = document.getElementById('home-hover2')
function handleMouseOverIn() {
    clearTimeout(mouseoverTimeout)
    mouseoverTimeout = setTimeout(() => {
        document.getElementById('navbar-container').style.paddingBottom = '270px'
        document.getElementById('navbar-container').style.backgroundColor = 'rgb(40, 40, 43)'
        document.getElementById('navbar-container').style.transition = 'all .5s'
        document.getElementById('home-hover').style.display = 'block'
        document.getElementById('home-hover2').style.display = 'block'
        document.getElementById('search-hover').style.display = 'none'
        document.getElementById('categories-hover').style.display = 'none'
        document.getElementById('categories-hover2').style.display = 'none'
        document.getElementById('cart-hover').style.display = 'none'
        document.getElementById('support-hover').style.display = 'none'
        document.getElementById('main-section').className = 'main-section'
    }, 350)
}

// support mouseover section 
function handleSupportMouseOver() {
    clearTimeout(mouseoverTimeout)
    mouseoverTimeout = setTimeout(() => {
        document.getElementById('navbar-container').style.paddingBottom = '300px'
        document.getElementById('navbar-container').style.backgroundColor = 'rgb(40, 40, 43)'
        document.getElementById('navbar-container').style.transition = 'all .5s'
        document.getElementById('categories-hover').style.display = 'none'
        document.getElementById('categories-hover2').style.display = 'none'
        document.getElementById('home-hover').style.display = 'none'
        document.getElementById('home-hover2').style.display = 'none'
        document.getElementById('search-hover').style.display = 'none'
        document.getElementById('cart-hover').style.display = 'none'
        document.getElementById('support-hover').style.display = 'block'
        document.getElementById('main-section').className = 'main-section'
    }, 350)
}


// categories section mouse over effect 
function handleCategoryMouseOver() {
    clearTimeout(mouseoverTimeout)
    mouseoverTimeout = setTimeout(() => {
        document.getElementById('navbar-container').style.paddingBottom = '300px'
        document.getElementById('navbar-container').style.backgroundColor = 'rgb(40, 40, 43)'
        document.getElementById('navbar-container').style.transition = 'all .5s'
        document.getElementById('categories-hover').style.display = 'block'
        document.getElementById('categories-hover2').style.display = 'block'
        document.getElementById('home-hover').style.display = 'none'
        document.getElementById('home-hover2').style.display = 'none'
        document.getElementById('search-hover').style.display = 'none'
        document.getElementById('cart-hover').style.display = 'none'
        document.getElementById('support-hover').style.display = 'none'
        document.getElementById('main-section').className = 'main-section'
    }, 350)
}

function handleCategoryMouseOut() {
    clearTimeout(mouseoverTimeout)
    mouseoverTimeout = setTimeout(() => {
        document.getElementById('navbar-container').style.paddingBottom = ''
        document.getElementById('navbar-container').style.backgroundColor = 'rgba(15, 15, 15, 0.678)'
        document.getElementById('navbar-container').style.transition = 'all .4s'
        document.getElementById('search-hover').style.display = 'none'
        document.getElementById('home-hover2').style.display = 'none'
        document.getElementById('home-hover').style.display = 'none'
        document.getElementById('categories-hover').style.display = 'none'
        document.getElementById('categories-hover2').style.display = 'none'
        document.getElementById('cart-hover').style.display = 'none'
        document.getElementById('support-hover').style.display = 'none'
        document.getElementById('main-section').className = ''

    }, 200)
}
// reset mouseover effect 
const resetMouseOver = () => {
    clearTimeout(mouseoverTimeout)
    mouseoverTimeout = setTimeout(() => {
        document.getElementById('navbar-container').style.paddingBottom = ''
        document.getElementById('navbar-container').style.backgroundColor = 'rgba(15, 15, 15, 0.678)'
        document.getElementById('navbar-container').style.transition = 'all .4s'
        document.getElementById('search-hover').style.display = 'none'
        document.getElementById('home-hover2').style.display = 'none'
        document.getElementById('home-hover').style.display = 'none'
        document.getElementById('categories-hover').style.display = 'none'
        document.getElementById('categories-hover2').style.display = 'none'
        document.getElementById('cart-hover').style.display = 'none'
        document.getElementById('support-hover').style.display = 'none'
        document.getElementById('main-section').className = ''
    }, 200)
}
// cart section click effect 
const handleCartBtn = () => {
    document.getElementById('navbar-container').style.paddingBottom = '260px'
    document.getElementById('navbar-container').style.backgroundColor = 'rgb(40, 40, 43)'
    document.getElementById('navbar-container').style.transition = 'all .5s'
    document.getElementById('categories-hover').style.display = 'none'
    document.getElementById('categories-hover2').style.display = 'none'
    document.getElementById('home-hover').style.display = 'none'
    document.getElementById('home-hover2').style.display = 'none'
    document.getElementById('search-hover').style.display = 'none'
    document.getElementById('cart-hover').style.display = 'block'
    document.getElementById('support-hover').style.display = 'none'
    document.getElementById('main-section').className = 'main-section'
}



// handle search button



function handleBtnHover() {
    clearTimeout(mouseoverTimeout)
    mouseoverTimeout = setTimeout(() => {
        document.getElementById('navbar-container').style.paddingBottom = ''
        document.getElementById('navbar-container').style.backgroundColor = 'rgba(15, 15, 15, 0.678)'
        document.getElementById('navbar-container').style.transition = 'all .4s'
        document.getElementById('home-hover2').style.display = 'none'
        document.getElementById('home-hover').style.display = 'none'
        document.getElementById('categories-hover').style.display = 'none'
        document.getElementById('categories-hover2').style.display = 'none'
        document.getElementById('cart-hover').style.display = 'none'
        document.getElementById('support-hover').style.display = 'none'
        document.getElementById('search-hover').style.display = 'none'
        document.getElementById('main-section').className = ''

    }, 200)
}
const searchIdIcon = document.getElementById('search-icon-id')
searchIdIcon.addEventListener('mouseover', handleBtnHover)
searchIdIcon.addEventListener('click', function () {
    document.getElementById('navbar-container').style.paddingBottom = '430px'
    document.getElementById('navbar-container').style.backgroundColor = 'rgb(40, 40, 43)'
    document.getElementById('navbar-container').style.transition = 'all .5s'
    document.getElementById('search-hover').style.display = 'block'
    document.getElementById('main-section').className = 'main-section'

    searchIdIcon.addEventListener('mouseover', () => {
        clearTimeout(mouseoverTimeout)
        mouseoverTimeout = setTimeout(() => {
            document.getElementById('navbar-container').style.paddingBottom = '430px'
            document.getElementById('navbar-container').style.backgroundColor = 'rgb(40, 40, 43)'
            document.getElementById('navbar-container').style.transition = 'all .5s'
            document.getElementById('search-hover').style.display = 'block'
            document.getElementById('navbar-container').style.transition = 'all .4s'
            document.getElementById('home-hover2').style.display = 'none'
            document.getElementById('home-hover').style.display = 'none'
            document.getElementById('categories-hover').style.display = 'none'
            document.getElementById('categories-hover2').style.display = 'none'
            document.getElementById('cart-hover').style.display = 'none'
            document.getElementById('support-hover').style.display = 'none'
            document.getElementById('main-section').className = 'main-section'

        }, 200)
    })

})
document.getElementById('cart-icon-id').addEventListener('click', function () {
    document.getElementById('navbar-container').style.paddingBottom = '330px'
    document.getElementById('navbar-container').style.backgroundColor = 'rgb(40, 40, 43)'
    document.getElementById('navbar-container').style.transition = 'all .5s'
    document.getElementById('cart-hover').style.display = 'block'
    document.getElementById('main-section').className = 'main-section'

    document.getElementById('cart-icon-id').addEventListener('mouseover', () => {
        clearTimeout(mouseoverTimeout)
        mouseoverTimeout = setTimeout(() => {
            document.getElementById('navbar-container').style.paddingBottom = '330px'
            document.getElementById('navbar-container').style.backgroundColor = 'rgb(40, 40, 43)'
            document.getElementById('navbar-container').style.transition = 'all .5s'
            document.getElementById('cart-hover').style.display = 'block'
            document.getElementById('navbar-container').style.transition = 'all .4s'
            document.getElementById('home-hover2').style.display = 'none'
            document.getElementById('home-hover').style.display = 'none'
            document.getElementById('categories-hover').style.display = 'none'
            document.getElementById('categories-hover2').style.display = 'none'
            document.getElementById('search-hover').style.display = 'none'
            document.getElementById('support-hover').style.display = 'none'
            document.getElementById('main-section').className = 'main-section'

        }, 200)
    })

})

// search btn call 
function searchBtnCall(){
    handleBtnHover()
    getSearchInputValue('search-input')
}
function searchBtnCallError(){
    handleBtnHover()
    getSearchInputValue('search-input-error')
}
// input value section 
function searchInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        handleBtnHover()
        getSearchInputValue('search-input')
    }
}
function searchInputError(event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        handleBtnHover()
        getSearchInputValue('search-input-error')
    }
}
function getSearchInputValue(searchInputId) {
    const searchInput = document.getElementById(searchInputId);
    const searchInputValue = searchInput.value;
    searchInput.value = ''
    getDataByInput(searchInputValue)
    console.log(searchInputValue);
}
// main section start 
// api pagination start here 
let currentPageNumber = 1;
let pageNumber = 1; 
const pageSize = 3;
let fetchedData = [];
const getDataByInput = (searchInputValue) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            fetchedData = data.data; // Store fetched data
            // Display initial page of data
            displayDataOnPage(currentPageNumber);
        })
        .catch(error => console.error('Error fetching data:', error));
}
const displayDataOnPage = (pageNumber) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    const currentPageData = fetchedData.slice(startIndex, endIndex);
    console.log(currentPageData);
    getMainData(currentPageData) // Assuming data is an array of items
    // Handle displaying data as needed (e.g., render to UI)
}
// Event listener for button click to go to the next page
document.getElementById('nextPageButton').addEventListener('click', () => {
    currentPageNumber++; // Increment current page number
    document.getElementById('prevPageButton').style.display = 'block'
    displayDataOnPage(currentPageNumber);
});
document.getElementById('prevPageButton').addEventListener('click', () => {
    currentPageNumber--; // Decrement current page number
    if (currentPageNumber < 1) {
        currentPageNumber = 1; // Ensure page number doesn't go below 1
    }
    displayDataOnPage(currentPageNumber);
});



// get main data 
const getMainData = (getData) => {
    const mainSection = document.getElementById('error-section')
    console.log(getData.slice(0,5));
    if (getData.length == '') {
        mainSection.textContent = ''
        document.getElementById('specific-phone-details').textContent = ''
        document.getElementById('home-section').style.display = 'none'
        document.getElementById('gaming-category').style.display = 'none'
        document.getElementById('phone-brand').style.display = 'none'
        document.getElementById('carousel-section').style.display = 'none'
        document.getElementById('card-section').style.display = 'none'
        document.getElementById('result-section').style.display = 'block'
        const errorSection = document.createElement("div")
        errorSection.className = 'container mt-5 pt-5'
        errorSection.innerHTML = `
            <div style="width: 85%;" class="mx-auto mt-5">
                <h1 class="fw-semibold">Sorry, no matches were found.</h1>
                <h1 class="fw-semibold w-75">Try a new search or use our suggestions.</h1>
            </div>
            <div style="width: 85%;" class="mx-auto mt-5">
                <div class="mt-5">
                    <div class="row">
                        <h2 class="mb-4 fw-semibold mt-5">Find Product by Brand</h2>
                        <div class="col-lg-3">
                            <div class="card">
                                <a class="text-center" href=""><img class="pt-4" src="images/home images/iphone1.png" alt="" srcset=""></a>
                                <div class="card-back">
                                    <a class="text-decoration-none mt-0" href=""><h3 class="card-back-title">Iphone</h3></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card">
                                <a class="text-center" href=""><img class="pt-4" src="images/samsung-galaxy-s23png-removebg-preview.png" alt="" srcset=""></a>
                                <div class="card-back">
                                    <a class="text-decoration-none mt-0" href=""><h3 class="card-back-title">Samsung</h3></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card">
                                <a class="text-center" href=""><img class="pt-4" src="images/Xiaomi 12T Pro.png" alt="" srcset=""></a>
                                <div class="card-back">
                                    <a class="text-decoration-none mt-0" href=""><h3 class="card-back-title">Xiaomi</h3></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card">
                                <a class="text-center" href=""><img class="pt-4" src="images/OnePlus.jpg" alt="" srcset=""></a>
                                <div class="card-back">
                                    <a class="text-decoration-none mt-0" href=""><h3 class="card-back-title">OnePlus</h3></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            `
        mainSection.appendChild(errorSection)
        document.getElementById('search-input-error').addEventListener('keypress', searchInputError)
        document.getElementById('search-btn-error').addEventListener('click', searchBtnCallError)

    }
    else {
        mainSection.textContent = ''
        document.getElementById('specific-phone-details').textContent = ''
        document.getElementById('result-section').style.display = 'block'
        for (let data of getData) {
            // console.log(data.slice(0,5));
            document.getElementById('home-section').style.display = 'none'
            document.getElementById('gaming-category').style.display = 'none'
            document.getElementById('phone-brand').style.display = 'none'
            document.getElementById('carousel-section').style.display = 'none'
            const errorSection = document.createElement("div")
            errorSection.className = 'container mt-5 pt-5'
            errorSection.innerHTML = `
            <div style="width: 85%;" class="mx-auto mt-5 w3-animate-opacity">
            <div class="row pt-3 d-flex mb-4">
                             <div class="col-lg-3">
                                 <div class="w-75"><img class="img-fluid" style="height: 10%;" src="${data.image}" alt=""></div>
                             </div>
                             <div class="col-lg-9 my-auto">
                                 <div>
                                     <a onclick="getSpecificData('${data.slug}')" class="card-line-title " href="#"><h2 class="fw-semibold">${data.phone_name}</h2></a>
                                 <p>${data.slug}</p>
                                 <button class="card-line-btn btn px-4">Order Now</button>
                                 </div>
                             </div>
                         </div>
                         
            `
            mainSection.appendChild(errorSection)
            document.getElementById('pagination-btn').style.display = 'block'
            document.getElementById('card-section').style.display = 'block'
            document.getElementById('search-input-error').addEventListener('keypress', searchInputError)
            document.getElementById('search-btn-error').addEventListener('click', searchBtnCallError)
        }
    }

}
const getSpecificData = (phoneId) => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(res => res.json())
    .then(data => getSpecificPhoneDetails(data.data))
}
const getSpecificPhoneDetails = (data) => {
    console.log(data);
    const mainSection = document.getElementById('error-section')
    mainSection.textContent = ''
    document.getElementById('result-section').style.display = 'block'
    const specificDetailsSection = document.getElementById('specific-phone-details')
    const specDetailsDiv = document.createElement('div')
    specDetailsDiv.className = 'container mt-5 pt-5'
    specDetailsDiv.innerHTML = `<div style="width: 85%;" class="mx-auto mt-5 w3-animate-opacity">
    <div class="row align-items-center">
        <div class="col-lg-6">
            <div>
                <h1 class="fw-bold">${data.name}</h1>
                <h6>${data.releaseDate}</h6>
                <div class="d-flex mt-5"><div class=" fw-semibold">Storage :</div>
                <div class="ms-2 w-75">${data.mainFeatures.storage}</div>
                </div>
                <div class="d-flex mt-5"><div class=" fw-semibold w-25">Display Size :</div>
                <div class="ms-2 w-75">${data.mainFeatures.displaySize}</div>
                </div>
                <div class="d-flex mt-5"><div class=" fw-semibold">ChipSet :</div>
                <div class="ms-2 w-75">${data.mainFeatures.chipSet}</div>
                </div>
                <div id="other-object"> 
                <div class="d-flex mt-5"><div class=" fw-semibold">Wlan :</div>
                <div class="ms-2 w-75">${data.others?.WLAN ? data.others?.WLAN : ''}</div>
                </div>
                <p class="me-1 mt-4"><span class="fw-semibold">Bluetooth : </span>${data.others?.Bluetooth ? data.others?.Bluetooth: ''}</p>
                <p class="me-1"><span class="fw-semibold">GPS : </span>${data.others?.GPS ? data.others?.GPS : ''}</p>
                <p class="me-1"><span class="fw-semibold">NFC : </span>${data.others?.NFC ? data.others?.NFC : ''}</p>
                <p class="me-1"><span class="fw-semibold">Radio : </span>${data.others?.Radio ? data.others?.Radio : ''}</p>
                <p class="me-1"><span class="fw-semibold">USB : </span>${data.others?.USB ? data.others?.USB : ''}</p>
                </div>
                <button class="addto-cart-btn mt-3">Add to Cart</button>
            </div>
        </div>
             <div class="col-lg-6">
                <div class="text-center ms-5"><img class="w-75 ps-5" src="${data.image}" alt="" srcset=""></div>
            </div>
        </div>
    </div>
    `
    specificDetailsSection.appendChild(specDetailsDiv)
    document.getElementById('pagination-btn').style.display = 'none'

}








// mobile section mouseover effect 
document.getElementById('navbar-brand').addEventListener('mouseover', handleMouseOverIn)
document.getElementById('navbar').addEventListener('mouseleave', handleCategoryMouseOut)
// search section click effect 
// categories section mouse over effect
document.getElementById('category-brand').addEventListener('mouseover', handleCategoryMouseOver)
document.getElementById('navbar').addEventListener('mouseleave', handleCategoryMouseOut)
// cart click 
document.getElementById('cart-icon-id').addEventListener('mouseover', handleBtnHover)
// reset effect 
document.getElementById('navbar-brand-title').addEventListener('mouseover', resetMouseOver)
// support mouse over 
document.getElementById('support-brand').addEventListener('mouseover', handleSupportMouseOver)
document.getElementById('navbar').addEventListener('mouseleave', handleCategoryMouseOut)
// get input value 
document.getElementById('search-input').addEventListener('keypress', searchInput)
// document.getElementById('search-input-error').addEventListener('keypress', searchInputError)
// get SearchInput Value
document.getElementById('search-btn').addEventListener('click', searchBtnCall)
// document.getElementById('search-btn-error').addEventListener('click', searchBtnCallError)



// carousel section 
$('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    nav: true,
    dot: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
        0: {
            items: 1
        },
        641: {
            items: 1.4
        }
    }

});






