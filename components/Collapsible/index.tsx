import {FC, MouseEventHandler, useState} from "react";
import AnimateHeight from "react-animate-height";

interface CollapsibleTriggerProps {
    expanded: boolean,
    headerExpanded: JSX.Element,
    headerNotExpanded: JSX.Element
    onClick: MouseEventHandler
}

interface CollapsibleContentProps {
    expanded: boolean,
}

const CollapsibleContent: FC<CollapsibleContentProps> = (props) => {
    const {expanded, children} = props;

    return (
        <div className="bystro-collapsible__body">
            <AnimateHeight
                height={expanded ? 'auto' : 0}
                animateOpacity={true}
                easing={'cubic-bezier(.5, 0, .2, 1)'}
                className={"some class"}
                aria-hidden={!expanded}
            >
                {children}
            </AnimateHeight>
        </div>
    )
}

const CollapsibleTrigger: FC<CollapsibleTriggerProps> = (props) => {
    const {headerExpanded, headerNotExpanded, expanded, onClick} = props;

    return (
        <div className="bystro-collapsible__header" onClick={onClick} style={{cursor: 'pointer'}}>
            {expanded ? headerExpanded : headerNotExpanded}
        </div>
    )
}

/**
 *  Bystro Collapsible
 */
export const Collapsible = {
    Trigger: CollapsibleTrigger,
    Content: CollapsibleContent
}
