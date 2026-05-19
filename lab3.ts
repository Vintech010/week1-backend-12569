let point: number | boolean = 100;
point = false;
type BaseUser = { id: number, name: string };
type SecureInfo = { password: string };
type FullAccount = BaseUser & SecureInfo;
const myAcc: FullAccount = { id: 1, name: "Admin", password: "123" };