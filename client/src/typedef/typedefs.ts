export interface UserType {
  username: string,
  friends: UserType[],
  bio: string,
}

export interface PostType{
  author: UserType,
  content: string,
  likes: string[],
  dislikes: string[],
  comments: string[],
  createdAt: string,
}
