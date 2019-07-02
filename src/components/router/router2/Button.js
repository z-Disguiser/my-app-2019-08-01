import React from "react"
import './Button.css'
export default class Detail extends React.Component{
        state={
            loading:false,
            dialog:false,
            message:'xxx'
        };
    submit=()=>{
        this.setState({
            loading:true
        });
        setTimeout(()=>{
            const res = Math.random();
            if(res>0.5){
                this.setState({
                    dialog:true,
                    message:'提交成功'
                })
            }else {
                this.setState({
                    dialog:true,
                    message:'提交失败'
                })
            }
        },2000)
    };
    close=()=>{
      this.setState({
          dialog:false,
          loading:false
      })
    };
    render() {
        const {dialog,loading,message} = this.state;
        return (
            <div className='button'>
                <Button loading={loading} submit={this.submit}>确定</Button>
                {dialog&&<Dialog message={message} close={this.close}/>}
            </div>
        )
    }
}

function Button(props) {
    const {children,loading,submit} = props;

    return(<button onClick={submit} disabled={loading?'disabled':null}>
        {loading&&<i className="loading"> </i>}
        {children}
    </button>)
}
function Dialog(props) {
    const {message,close} = props;
    return(
        <div className='dialog-backdrop'>
            <div className='dialog-container'>
                <div className="dialog-header">提示</div>
                <div className="dialog-body">{ message }</div>
                <div className="dialog-footer">
                    <button className="btn" onClick={ close }>确定</button>
                </div>
            </div>
        </div>
    )
}
