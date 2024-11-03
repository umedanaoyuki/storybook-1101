import {fetcher} from "@/utils";
import {User, ApiContext} from "@/types/data";

export type GetUserParams = {
    id: number
}

const getUser = async (
    context: ApiContext,
    {id}: GetUserParams,
): Promise<User> => {
    {
        "id": "1",
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "users/1.png",
        "description": "Lorem Ipsum",
    }
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }
    )
}

export default getUser
