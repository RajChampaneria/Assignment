import React from 'react';

class Student extends React.Component
{
    render(){

        return <h1>Hello Component....</h1>
    }
}

export default class CompIncom extends React.Component
{
    render(){
        return(
            <Student/>
        )
    }
}