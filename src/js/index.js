import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// global state of the app 
// search objectcurrent recipe object 
// shopping list object
// liked recipes

const state = {};

//search controller

const controlSearch = async () => {
    // 1. get query from view 
    const query = searchView.getInput();
    // console.log(query);

    if (query) {
        // 2.new search obj and add to state
        state.search = new Search(query);

        //3 prepare UI for results

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //4 Search for recipes
        await state.search.getResults();

        //render results on UI
        console.log(state.search.result)
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage);
    }
});


//recipe controller
const r = new Recipe(35477);
r.getRecipe();
console.log(r);