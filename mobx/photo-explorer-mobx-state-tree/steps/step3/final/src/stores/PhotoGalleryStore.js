import { types, getParent } from 'mobx-state-tree'

const views = self => ({
    get totalPics(){
        return getParent(self).picsList.length;
    }
})

const actions = self =>({
    selectPicture(id){
        getParent(self).setSelectedPicture(id);
    }
})

export default types.model("Gallery", {})
                    .views(views)
                    .actions(actions);