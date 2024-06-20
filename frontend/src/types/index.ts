export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
}

export interface IProjects {
  id: number;
  title: string;
  description: string;
  image: string;
  github_repo: string;
  website: string;
}

export interface UserProfile {
  id: number;
  bio: string;
  profile_picture: string;
  linkedin: string;
  github: string;
  twitter: string;
  cv: string;
  projects: IProjects[];
  user: IUser;
}