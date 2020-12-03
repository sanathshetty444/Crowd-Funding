import React, { Component } from 'react'
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/layout';

export default class RequestNew extends Component {
    static async getInitialProps(props){
        // For URL's address appended in it
        const address=props.query.address
        
        
        return {
            address:address,
            
        }
    }
    state = {
        value: '',
        description: '',
        recipient: '',
        loading: false,
        errorMessage: ''  
      };
      onSubmit = async event => {
        event.preventDefault();
        
        const campaign = Campaign(this.props.address);
        const { description, value, recipient } = this.state;
    
        this.setState({ loading: true, errorMessage: '' });
    
        try {
          const accounts = await web3.eth.getAccounts();
          await campaign.methods
            .createRequests(web3.utils.toWei(value, 'ether'), description, recipient)
            .send({ from: accounts[0] });
    
          Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
          this.setState({ errorMessage: err.message });
        }
    
        this.setState({ loading: false });
      };
    render() {
        return (
            <Layout>
                <div style={{marginTop:'10px'}}>
                    <Link  route={`/campaigns/${this.props.address}/requests`}>
                        <a >Back</a>
                    </Link>
                </div>
                <h3>Create A Request</h3>
                <Form  onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label htmlFor="">Description</label>

                        <Input
                    value={this.state.description}
                    onChange={event =>
                        this.setState({ description: event.target.value })}
                    />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="">Value In Ether</label>
                        <Input
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                    />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="">Recipient  </label>
                        <Input
                    value={this.state.recipient}
                    onChange={event =>
                        this.setState({ recipient: event.target.value })}
                    />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button primary loading={this.state.loading}>
                        Create!
                    </Button>
                </Form>
           </Layout>
        )
    }
}
// 0x434195BdCA8d752d03D14E119F9d48246cB0e509
// 0.000000000000001