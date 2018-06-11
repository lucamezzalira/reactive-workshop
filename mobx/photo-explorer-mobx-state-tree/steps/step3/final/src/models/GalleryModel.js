import {types, getEnv} from 'mobx-state-tree';

const Picture = types.model("Picture", {
    id: types.identifier(),
    title: types.string,
    image: types.string,
    large_image: types.string
})

const model = {
    picsList: types.optional(types.array(Picture), []),
    selectedPictureURL: ""
}

const actions = self => ({
    setPicsList(arr){
        const configuration = getEnv(self).config;

        const picsArr = arr.photos.photo.map(value => {
            return {
                id: value.id,
                title: value.title,
                image: configuration.getPicURL(value),
                large_image: configuration.getLargePicURL(value)
            }
        })

        self.picsList = picsArr;
    },
    setSelectedPicture(id){
        const selected = self.picsList.find(element => element.id === id)
        self.selectedPictureURL = selected.large_image;
    }
})

export default types.model("GalleryModel", model)
                    .actions(actions)