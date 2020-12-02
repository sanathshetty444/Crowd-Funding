import React,{Component, useEffect} from 'react'
import Factory from '../ethereum/factory'
import {Button,Card} from 'semantic-ui-react'
import Layout from '../components/layout'
import {Link} from '../routes'


class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns= await Factory.methods.getDeployedCampaigns().call()
        return {campaigns}
    }
    renderCampiagns(){
        const items=this.props.campaigns.map(c=>{
            return{
                header:c,
                description:(
                    <Link route={`/campaigns/${c}`}><a>View Campaign</a></Link>),
                fluid:true,
                

            }
        })
        return (
        <Card.Group items={items}/>
        )
    }
    render(){
        return(
            <div>
               
               <Layout>
                    <h3>Open Campaigns</h3>
                    
                   <Link route='/campaigns/new'><a href=""><Button floated='right' content="create Campiagn" icon='add circle' primary></Button></a></Link>
                    {this.renderCampiagns()}
               </Layout>
            </div>
        );
        
    }
}
export default CampaignIndex;
