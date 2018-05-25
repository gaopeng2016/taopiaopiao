eslint官网 ： eslint.cn
Normalize.css 样式的一致性, 基础css

React：
    1. 声明式的视图渲染
        原来更改需要$('ele').text('text')
        <div>{this.state.text}</div> 只需要修改text
    2. jsx语法 
        1.  
    3. 基于组件
    4. 多平台 pc 移动端
React 生命周期
    1. componentWillMount --> 组件将要渲染dom 
    2. componentDidMount --> dom渲染完毕 可以获取真实的dom
    3. componentWillReceiveProps --> 修改了props
    4. shouldComponentUpdate --> 是否要重新渲染
    5. componentWillUpdate --> 组件将要更新
    6. componentDidUpdate --> 组件更新完毕
    7. componentWillUnmount --> 组件将要卸载



react-router
    1. 默认是inclusive 模式 就是贪婪匹配
    2. route exact 单个理由 精准匹配 exclusive
    3. switch 只匹配第一个匹配的字符串 
