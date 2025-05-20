export type ActivityType =
  | "food"
  | "movie"
  | "tv"
  | "music"
  | "book"
  | "podcast"
  | "game"
  | "sport"
  | "event"
  | "place"
  | "art"
  | "show"
  | "productivity"
  | "hangout";

export interface Post {
  id: string;
  description: string;
  photo: string;
  createdAt: Date;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  userId: string;
  userName?: string;
  userLastName?: string;
  likeCount?: number;
  saveCount?: number;
  typeActivity: ActivityType;
}
