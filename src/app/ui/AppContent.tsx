import React from "react";
import { Text, View } from "react-native";
import AppContentStyle from "./AppContentStyle";

const AppContent: React.FC = () => {
  const skeletonItems: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <View style={AppContentStyle.container}>
      <View style={AppContentStyle.topBar}>
        <View style={AppContentStyle.topBarIcon}></View>
        <Text style={AppContentStyle.topBarTitle}>Mobile-P33</Text>
        <View style={AppContentStyle.topBarIcon}></View>
      </View>

      <View style={AppContentStyle.pageWidget}>
        <View style={AppContentStyle.preloaderGrid}>
          {skeletonItems.map((item: number) => (
            <View key={item} style={AppContentStyle.preloaderCard}>
              <View style={AppContentStyle.preloaderSquare} />
              <View style={AppContentStyle.preloaderName} />
            </View>
          ))}
        </View>
      </View>

      <View style={AppContentStyle.bottomBar}>
        <View style={AppContentStyle.bottomBarIcon}></View>
        <View style={AppContentStyle.bottomBarIcon}></View>
        <View style={AppContentStyle.bottomBarIcon}></View>
        <View style={AppContentStyle.bottomBarIcon}></View>
        <View style={AppContentStyle.bottomBarIcon}></View>
      </View>
    </View>
  );
};

export default AppContent;