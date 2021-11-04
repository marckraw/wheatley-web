import {Children, FC, useState} from "react";
import { Collapsible } from ".";

export interface AccordionProps {
    headerNotExpanded: JSX.Element,
    headerExpanded: JSX.Element
}

export const Accordion: FC<AccordionProps> = (props) => {
    const {headerExpanded, headerNotExpanded, children} = props;
    const [isExpanded, setIsExpanded]= useState(false)

    const toggleAccordion = () => {
        setIsExpanded(prevState => !prevState)
    }


    return (
        <>
            <Collapsible.Trigger
                expanded={isExpanded}
                headerExpanded={headerExpanded}
                headerNotExpanded={headerNotExpanded}
                onClick={toggleAccordion} />
            <Collapsible.Content expanded={isExpanded}>
                {children}
            </Collapsible.Content>
        </>
    )
}

