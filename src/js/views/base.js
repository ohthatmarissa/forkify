export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list')
};

export const renderLoader = parent => {
    const loader = `
        <div class="loader">
            <svg>
                <use ion-icon name="cloud-download"></ion-icon></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};