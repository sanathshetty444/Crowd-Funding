import React, { Component } from 'react'
import { Button, Card, Container, Grid } from 'semantic-ui-react';
import Layout from '../../components/layout'
import Campaign from '../../ethereum/campaign'
import ContributeForm from '../../components/ContributeForm'
import web3 from '../../ethereum/web3'
import {Link} from '../../routes'

export default class CampaignShow extends Component {
    static async getInitialProps(props){
        // For URL's address appended in it
        const address=props.query.address
        console.log(address);
        const instance=Campaign(address)
        const summary=(await instance.methods.getSummary().call())
        
        return {
            address:address,
            minimumContro:summary[0],
            balance:summary[1],
            requestsCount:summary[2],
            approversCount:summary[3],
            manager:summary[4]
        }
    }

    renderCards(){
        const {
            minimumContro,balance,requestsCount,approversCount,manager
        }=this.props
        const items=[
            {
                header:manager,
                meta:"Address Of Manager",
                style:{overflowWrap:'break-word'},
                description:'Manager is the creator of this campaign'
            },
            {
                header: minimumContro,
                meta: 'Minimum Contribution (wei)',
                description:
                  'You must contribute at least this much wei to become an approver'
              },
              {
                header: requestsCount,
                meta: 'Number of Requests',
                description:
                  'A request tries to withdraw money from the contract. Requests must be approved by approvers'
              },
              {
                header: approversCount,
                meta: 'Number of Approvers',
                description:
                  'Number of people who have already donated to this campaign'
              },
              {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description:
                  'The balance is how much money this campaign has left to spend.'
              }
        ];
        return <Card.Group items={items} />
    }
    render() {
        return (
            <div>
                
                <Layout>
                
                    <Container style={{padding:'10px'}}> 
                    <h3>Campaign</h3>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                {this.renderCards()}
                               
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <ContributeForm floated='right' address={this.props.address}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Link route={`/campaigns/${this.props.address}/requests`}>
                                    <a>
                                        <Button primary content='View Requests' />
                                    </a>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                   
                    
                    
                    </Container>
                </Layout>
                
            </div>
        )
    }
}
