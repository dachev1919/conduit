import {ComponentProps, FC} from "react";
import {Button, ButtonStyleEnum} from "../../../../common/components/button/Button";

interface FollowButtonProps {
    name?: string;
    btnStyle?: ComponentProps<typeof Button>["btnStyle"];
}

export const FollowButton: FC<FollowButtonProps> = ({name = "Name Name", btnStyle = ButtonStyleEnum.DARK}) => {
    return (
        <Button btnStyle={btnStyle}>
            <i className="ion-plus-round"/>
            Follow {name}
        </Button>
    )
}
