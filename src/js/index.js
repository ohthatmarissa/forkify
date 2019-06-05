import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader } from './views/base';

// global state of the app 
// search objectcurrent recipe object 
// shopping list object
// liked recipes

const state = {};

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
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});




