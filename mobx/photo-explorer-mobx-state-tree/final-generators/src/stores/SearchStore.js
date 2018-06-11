import { types, getEnv, getParent, flow} from "mobx-state-tree";

const model = self => ({ 
    isSearching: false
})

const actions = self => ({
    requestPics: flow(function* requestPics(termToSearch){
        self.isSearching = true;
        const URL = getEnv(self).config.getSearchURL(termToSearch)
        try{
            const rawData = yield fetch(URL)
            const dataToJSON = yield rawData.json()
            self.isSearching = false;
            getParent(self).setPicsList(dataToJSON)
        } catch(err){
            console.error(err);
        }
    })
})

export default types.model("SearchStore", {})
                    .volatile(model)
                    .actions(actions);