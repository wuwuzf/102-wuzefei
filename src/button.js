



render (){
        return (
            <div>{this.props.children}</div>
            <button onClick={this.view}>全选</button>
            <button onClick={this.add}>增加</button>
            <button onClick={this.del}>删除</button>
            <button onClick={this.alter}>修改</button>
        }
