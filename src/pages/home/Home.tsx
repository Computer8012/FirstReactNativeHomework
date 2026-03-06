import { View } from "react-native";
import AppContentStyle from "../../app/ui/AppContentStyle";

export default function Home() {

  const skeletonItems: number[] = [1,2,3,4,5,6];

  return (
    <View style={AppContentStyle.preloaderGrid}>

      {skeletonItems.map((item:number) => (
        <View key={item} style={AppContentStyle.preloaderCard}>
          <View style={AppContentStyle.preloaderSquare}/>
          <View style={AppContentStyle.preloaderName}/>
        </View>
      ))}

    </View>
  );
}