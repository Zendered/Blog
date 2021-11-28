declare namespace bcrypt {
    export declare function compare(
        data: string | Buffer,
        encrypted: string | null
    ): Promise<boolean>;
}
