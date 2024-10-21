export interface UserType {
  username: string,
  friends: UserType[],
  posts: PostType[],
  bio: string,
}

export interface PostType{
  _id: string,
  author: UserType,
  content: string,
  likes: UserType[],
  dislikes: UserType[],
  comments: string[],
  createdAt: string,
}
