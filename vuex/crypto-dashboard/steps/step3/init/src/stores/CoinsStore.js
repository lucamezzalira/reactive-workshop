import Types from '../configs/MutationTypes';

const coinsStore = {
    state:{
        allCoins: []
    },
    mutations:{
        saveAllCoinsData(state, coinsList){
            state.allCoins = coinsList;
        }
    },
    actions:{
        changeSymbol({dispatch, state}, coinSymbol){
            const {Name: id, FullName: name, ImageUrl: imageUrl} = state.allCoins[coinSymbol]
            const selectedCoin = {
                id,
                name,
                imageUrl
            }
           
            console.log(selectedCoin)
        },
        loadCoinsData({commit}){
            const URL = "https://s3-us-west-1.amazonaws.com/fluent-workshop/coinsList.json";

            fetch(URL)
                    .then(response => response.json())
                    .then(list => commit(Types.ALL_COINS, list.Data))
                    .catch(err => console.error(err));
        }
    }
}

export default coinsStore;