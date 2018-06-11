import { types } from "mobx-state-tree"
import SearchStore from './SearchStore';
import PhotoGalleryStore from './PhotoGalleryStore';

const model = {
    photoGallery: types.optional(PhotoGalleryStore, {}),
    search: types.optional(SearchStore, {})
}

export default types.model(model);