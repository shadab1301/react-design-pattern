import React, { Component, useState } from 'react'

const HOC = (WrrapedComponent,entity) => {
    return class extends Component {
        state = {
            filter:"",
        }

        componentDidMount() {

        }
        render() {
            return (
                <div>
                    <h1>{entity=="userList"?"User List":"Todo List"}</h1>
                    <input type='text' placeholder='HOC' onChange={(e)=>this.setState({filter:e.target.value})} />
                    <WrrapedComponent filter={this.state.filter}/>
                </div>
            )
        }
    }


}

export default HOC


