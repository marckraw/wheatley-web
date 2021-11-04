export interface LinkProps {
    children: string;
    href: string;
}

export const Link = (props: LinkProps) => {
    const {children, href} = props

    return (
        <a href={href}>{children}</a>
    )
}