import web3 from './web3'
import Factory from './build/CampaignFactory.json'
const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface),
    '0x08Dc1c2DAA3F813D53a180AfA7a7fE2E25D92a39'
)

export default instance