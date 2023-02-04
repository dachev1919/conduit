import {ComponentProps, forwardRef} from "react";

interface InputProps {
    name: ComponentProps<"input">["name"];
    type?: ComponentProps<"input">["type"];
    placeholder?: ComponentProps<"input">["placeholder"];
    required?: ComponentProps<"input">["required"];
    onChange: ComponentProps<"input">["onChange"];
    onBlur: ComponentProps<"input">["onBlur"];
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({...inputProps}, ref) => {
        return (
            <>
                <input
                    ref={ref}
                    className="bg-white border border-black/15 py-3 px-6 text-xl rounded-buttonSm w-full outline-none hover:bg-black/15 focus:bg-black/15 hover:border-black/50 focus:border-black/50 transition-all"
                    {...inputProps}
                />
            </>
        )
    }
);
