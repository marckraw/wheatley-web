import React, {Context, createContext, useState} from 'react'

export interface TestContextInterface {
    color?: string,
    setColor?: any
}

interface TestContextProviderProps {
    value?: TestContextInterface
    children: JSX.Element
}

export const TestContext = createContext<TestContextInterface | undefined>(undefined)

const TestContextProvider = (props: TestContextProviderProps) => {
    const {children} = props;
    const [color, setColor] = useState('red')

    return (
        <TestContext.Provider value={{color, setColor}}>
            {children}
        </TestContext.Provider>
    )
}

export default TestContextProvider