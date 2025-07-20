export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string;
  grade: string | null;
  major: string | null;
  tags?: string[] | null;
  photoURL?: string | null;
  emailVerified: boolean;
  metadata?: {
	creationTime: string;
	lastSignInTime: string;
  };
}