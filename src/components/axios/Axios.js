import React,{Component} from "react"
import axiox from "axios";

import './axios.css'

export default class Axios extends Component{
    constructor(props){
        super(props)

        this.state={
            result:[]
        }
    }


    componentDidMount() {
        axiox.get('/api/cook/query?key=7372903ce6b8675f86618a5dce75277a&menu=%E8%A5%BF%E7%BA%A2%E6%9F%BF&rn=5&pn=3')
            .then(res=>{
                let result = res.data.result.data;
                console.log(result);
                this.setState({
                    result
                })
            })
    }

    render() {
        let {result} = this.state;
        return(
            <ul>
                {result.map(item=>{
                    const{burden,id} = item
                    return <li key={id}>{burden}</li>
                })}
            </ul>
        )
    }
}
