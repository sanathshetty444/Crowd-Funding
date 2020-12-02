import web3 from './web3'
import Factory from './build/CampaignFactory.json'
const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface),
    '0x46AC94833D9CA2D95f5DE527Ef95692E596de113'
)

export default instance