import { types } from "mobx-state-tree"
import SearchStore from './SearchStore';

const model = {
    search: types.optional(SearchStore, {})
}

export default types.model(model);