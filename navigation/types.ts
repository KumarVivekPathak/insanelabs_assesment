import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type UserType = {
  id: number;
  name: string;
  email: string;
  image: any;
  contactNo: string;
  bio: string;
};

export type RootStackParamList = {
  Home: undefined;
  UserDetails: { user: UserType };
};


export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

