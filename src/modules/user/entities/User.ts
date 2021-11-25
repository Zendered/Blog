export class User {
    readonly id?: string;
    email: string;
    password: string;
    is_admin: boolean;
    created_at: Date;
    updated_at: Date;
    profile: string;
    posts: string;

    constructor(props: Omit<User, "id">, id?: string) {
        Object.assign(this, props);
    }
}
