export interface ISignUpOutDTO {
    user: User;
}

interface User {
    username: string;
    email: string;
    password: string;
}