import {ComponentProps, FC, PropsWithChildren} from "react";
import clsx from "clsx";

export enum ButtonStyleEnum {
    DARK = "DARK",
    LIGHT = "LIGHT",
    GREEN = "GREEN"
}

enum ButtonSizeEnum {
    BASE = "BASE",
    LG = "LG"
}

interface ButtonProps {
    btnStyle?: keyof typeof ButtonStyleEnum;
    type?: ComponentProps<"button">["type"];
    size?: keyof typeof ButtonSizeEnum;
    disabled?: ComponentProps<"button">["disabled"];
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({btnStyle = ButtonStyleEnum.DARK,children, size = ButtonSizeEnum.BASE, disabled = false}) => {
    const buttonStyles = clsx("flex items-center gap-2 transition-all border align-middle cursor-pointer select-none rounded-buttonSm", {
        "border-conduit-gray-700 text-conduit-gray-700 hover:bg-conduit-gray-250 focus:bg-conduit-gray-250": btnStyle === ButtonStyleEnum.DARK,
        "border-conduit-gray-400 text-conduit-gray-400 hover:bg-conduit-gray-400 hover:text-white": btnStyle === ButtonStyleEnum.LIGHT,
        "border-conduit-green text-white bg-conduit-green hover:bg-conduit-darkGreen hover:border-conduit-darkGreen hover:text-white": btnStyle === ButtonStyleEnum.GREEN,
        "py-1 px-2 text-sm": size === ButtonSizeEnum.BASE,
        "py-1 px-6 text-lg": size === ButtonSizeEnum.LG,
    });

    return (
        <button className={buttonStyles} disabled={disabled}>
            {children}
        </button>
    )
}
