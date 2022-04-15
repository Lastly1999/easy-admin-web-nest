import React from "react"

import "./easyContainer.less"

type IEasyContainerProps = {}


const EasyContainer: React.FC<IEasyContainerProps> = (props) => {
    return (
        <div className="easy-container">{props.children}</div>
    )
}

export default EasyContainer