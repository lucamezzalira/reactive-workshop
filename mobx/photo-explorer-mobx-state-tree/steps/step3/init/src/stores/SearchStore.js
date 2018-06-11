import { types, getEnv, getParent} from "mobx-state-tree";

const model = self => ({ 
    isSearching: false
})

const actions = self => ({
    requestPics(termToSearch){
        self.isSearching = true;
        const URL = getEnv(self).config.getSearchURL(termToSearch)
        fetch(URL)
            .then(response => response.json())
            .then(self.onDataFetched)
            .catch((err) => console.log(err))
        
    },
    onDataFetched(response){
        self.isSearching = false;
        getParent(self).setPicsList(response)
    }
})

export default types.model("SearchStore", {})
                    .volatile(model)
                    .actions(actions);