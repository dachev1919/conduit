export interface ISignUpInDTO {
    user: User;
}

interface User {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}