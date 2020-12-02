import {Button,Form, Message} from 'semantic-ui-react'
import React, { Component } from 'react'
import Layout from '../../components/layout'
import { Input } from 'semantic-ui-react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Router} from '../../routes'

export default class CampaignNew extends Component {
    
    state={
        minimumContro:'',
        errormsg:'',
        loading:false
    };

    async onSubmit(e){
        this.setState({loading:true,errormsg:''})
        try {
            const acc= await web3.eth.getAccounts();
            e.preventDefault();
            console.log("clicked")
            await factory.methods.createCampaign(this.state.minimumContro).send({
                from:acc[0]
            
        })
        Router.pushRoute('/')
        } catch (error) {
            this.setState({errormsg:error.message})
        }
        this.setState({loading:false })

    }
    render() {

       
        return (
            <div>
                <Layout >
                    
                   <h3>Create a Campaign</h3>
                    <Form error={this.state.errormsg}>
                       < Form.Field>
                       <label htmlFor="">Minimum Contribution</label>
                       <Input value={this.state.minimumContro} onChange={e=>this.setState({minimumContro:e.target.value})} label='WEI' labelPosition='right' type="text" placeholder="AMOUNT"/>
                       
                       </Form.Field>
                       <Message error header="OOPS!" content={this.state.errormsg} />
                       <Button loading={this.state.loading} primary icon='add circle' content='Create!' onClick={this.onSubmit.bind(this)}></Button>
                    </Form>
                    
                </Layout>
                
            </div>
        )
    }
}

