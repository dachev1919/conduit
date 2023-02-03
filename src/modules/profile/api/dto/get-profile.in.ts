
export interface IGetProfileInDTO {
    profile: IProfile;
}

export interface IProfile {
    username: string;
    bio: string;
    image: string;
    following: string;
}