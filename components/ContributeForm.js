import React, { Component } from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'
import {Router} from '../routes'

export class ContributeForm extends Component {
    state={
        value:'',
        errormsg:'',
        loading:false
    };
    async onSubmit(e){
        e.preventDefault();
        this.setState({loading:true,errormsg:''})
        try {
            const instance = Campaign(this.props.address)
            const acc= await web3.eth.getAccounts();
            
            console.log("clicked")
            await instance.methods.contribute().send({
                from:acc[0],
                value:web3.utils.toWei(this.state.value,'ether')
            
        })
        Router.pushRoute(`/campaigns/${this.props.address}`)
        } catch (error) {
            this.setState({errormsg:error.message})
        }
        this.setState({loading:false,value:'' })

    }
    render() {
        return (
            <div>
                <Form error={this.state.errormsg}>
                    <Form.Field>
                        <Input label='ether' labelPosition='right' value={this.state.value} onChange={e=>this.setState({value:e.target.value})}  type="text" placeholder="AMOUNT"/>
                    </Form.Field>
                    <Message error header="OOPS!" content={this.state.errormsg} />
                    <Button loading={this.state.loading} primary icon='add circle' content='Contribute!' onClick={this.onSubmit.bind(this)} floated='right'></Button>
                </Form>

            </div>
        )
    }
}

export default ContributeForm
