import moment from 'moment-es6';
import Types from '../configs/MutationTypes';
import { prepareChartData } from '../utils/DataUtils';

const currencyStore = {
    state:{
        logo: '',
        currencyName: '',
        currencyData: []
    },
    getters:{
        tableCurrencyData(state){
            return state.currencyData.reverse();
        }
    },
    mutations:{
        changeSymbol(state, currencyData){
            const {logo, currency, data} = currencyData;
    
            state.currencyName = currency;
            state.currencyData = data;
            state.logo = logo;
        }
    },
    actions: {
        loadCoinData({commit, rootState}, selectedCoin){
            const URL = `https://min-api.cryptocompare.com/data/histoday?&tsym=USD&limit=30&aggregate=1&toTs=${moment.now()}&fsym=${selectedCoin.id}`;
            
            fetch(URL)
                    .then(response => response.json())
                    .then(data =>
                        commit(Types.CHANGE_SYMBOL, {
                            logo: `https://www.cryptocompare.com/${selectedCoin.imageUrl}`,
                            currency: selectedCoin.name,
                            data: data.Data
                        })
                   ).catch(err => console.error(err))
        }
    }
}

export default currencyStore;