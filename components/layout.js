import React from 'react'
import { Container } from 'semantic-ui-react'
import Head from 'next/head';
import Header from './Header'
export default function layout(props) {
    return (
        <Container style={{padding:'10px'}}>
            <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>
            <Header></Header>
            
            {props.children}
            
        </Container>
    )
}
